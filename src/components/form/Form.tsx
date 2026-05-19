import React, { useState } from "react";
import axios from "axios";

import { determineViewMode, fetchGeolocation, getAltitudeFieldKeys, getErrorMessage, getGeoFieldKeys, getSuccessMessage, groupFields, replacePlaceholders, transformedObject } from "./utils.js";

import AccordionFormView from "./components/AccordionFormView.js";
import TabFormView from "./components/TabFormView.js";
import NormalFormView from "./components/NormalFormView.js";
import type { FormProps } from "./Form.types.js";
import CardFormView from "./components/CardFormView.js";
import { sqlClient } from "./service.js";
type ViewMode = "accordion" | "cards" | "tab" | "simple";
export default function LogiksForm({
  formJson,
  methods = {},
  onCancel = () => { },
  components = {},
  callback = () => { },
  initialvalues,
  toast,
  location_required = true
}: FormProps) {

  let viewMode: ViewMode = determineViewMode(formJson);
  const sqlOpsUrls = formJson.endPoints;
  const refid = formJson?.source?.refid;
  const groupedFields = groupFields(formJson?.fields ?? {}, sqlOpsUrls?.operation);
  const [resolvedData, setResolvedData] = React.useState<Record<string, any>>(initialvalues ?? {});

  // const isLocationRequired =
  //   location_required && formJson.location_required !== false;

  // console.log("isLocationRequired", isLocationRequired);


  const geoFieldKeys = React.useMemo(() => {
    return getGeoFieldKeys(formJson.fields)
  }, [formJson.fields]);


  const altitudeFieldKeys = React.useMemo(() => {
    return getAltitudeFieldKeys(formJson.fields);
  }, [formJson.fields]);


  React.useEffect(() => {
    let isMounted = true;

    const initGeo = async () => {

      try {
        const { latitude, longitude, altitude } = await fetchGeolocation();

        const geo = `${latitude},${longitude}`;
        const resolvedValues: Record<string, any> = {};

        geoFieldKeys.forEach((key) => {
          resolvedValues[key] = geo;
        });

        altitudeFieldKeys.forEach((key) => {
          resolvedValues[key] = altitude ?? "";
        });

        if (isMounted) {
          setResolvedData(prev => ({
            ...prev,
            ...resolvedValues
          }));
        }
      } catch (err) {
        console.warn("Geo fetch failed", err);
      }
    };

    const timer = setTimeout(() => {
      if (geoFieldKeys.length > 0 ||
        altitudeFieldKeys.length > 0) {
        initGeo();

      }
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [geoFieldKeys, altitudeFieldKeys]);



  React.useEffect(() => {
    setResolvedData(prev => ({
      ...prev,
      ...(initialvalues ?? {})
    }));
  }, [initialvalues]);

  const safeSetResolvedData = React.useCallback(
    (data?: Record<string, any>) => {
      if (!data) return;

      setResolvedData(prev => {
        const merged = { ...prev };

        for (const key in data) {
          if (data[key] !== null && data[key] !== undefined) {
            merged[key] = data[key];
          }
        }

        return merged;
      });
    },
    []
  );



  // ---------- Fetch Initial Data ----------
  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const source = formJson?.source ?? {};
      if (!source?.type) {
        if (isMounted) setResolvedData(prev => prev);
        return;
      }

      if (source.type === "method" && sqlOpsUrls?.operation !== "create") {
        const methodName = source.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await methodFn();
            if (isMounted) safeSetResolvedData(result);
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setResolvedData(prev => prev);
          }
        } else {
          if (isMounted) setResolvedData(prev => prev);
        }
      }

      if (source.type === "api" && sqlOpsUrls?.operation !== "create") {
        try {

          const config = {
            method: source.method || "GET",
            url: sqlOpsUrls?.baseURL + source.endpoint,

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            ...(source.method === "GET"
              ? { params: { refid: source.refid } }
              : { data: { refid: source.refid } }),
          }


          const { data } = await axios(config);

          const value = data?.results?.options ?
            data?.results?.options : data.data
              ? data.data
              : data.results
                ? data.results
                : data

          if (isMounted) safeSetResolvedData(value ?? {});
        } catch (err) {
          console.error("API fetch failed:", err);
          if (isMounted) setResolvedData(prev => prev);
        }
      }

      if ((source.type === "sql" &&
        source.refid &&
        source.refid !== "0" &&
        sqlOpsUrls?.operation !== "create") ||
        (sqlOpsUrls?.operation !== "create" && source.dbopsid)) {

        if (!sqlOpsUrls) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }

        try {

          const data = await sqlClient.fetch(sqlOpsUrls, {
            source: {
              ...source,
              table: source.table,
              columns: source.columns,
              "where": replacePlaceholders(source.where, {
                refid: refid,
              }),
            },
            fields: transformedObject(formJson.fields, sqlOpsUrls.operation),

          }, source?.dbopsid, formJson?.module_refid);

          if (isMounted) safeSetResolvedData(data);
        } catch (err) {
          console.error("API fetch failed:", err);
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [
    sqlOpsUrls,
    formJson?.source?.type || "",
    formJson?.source?.method || "",
    formJson?.source?.url || "",
    JSON.stringify(formJson?.source?.params ?? {}),
    JSON.stringify(formJson?.source?.body ?? {}),
    JSON.stringify(formJson?.source?.headers ?? {})
  ]);



  // ---------- Handle Form Submission ----------
  const handleSubmit = async (values: Record<string, any>) => {
    const source = formJson?.source ?? {};

    let finalGeo = "0,0";
    let finalValues = { ...values };

    if (geoFieldKeys.length > 0 ||
      altitudeFieldKeys.length > 0) {

      const geoKey = geoFieldKeys[0];
      const geoValue = geoKey ? values[geoKey] : null;
      finalGeo = geoValue || "0,0";

      // if (isLocationRequired && (!finalGeo || finalGeo === "0,0")) {

      //   try {


      //     const { latitude, longitude } = await fetchGeolocation();
      //     const geo = `${latitude},${longitude}`
      //     if (!geo) {
      //       toast?.error?.("Location permission is required");
      //        throw new Error("Location permission is required");
      //     }

      //     finalGeo = geo;
      //   } catch (error) {
      //     toast?.error?.("Location permission is required");
      //      throw new Error("Location permission is required");
      //   }

      // }

      const geoMissingKeys = geoFieldKeys.filter(
        (k) => !values[k]
      );

      const altitudeMissingKeys = altitudeFieldKeys.filter(
        (k) => values[k] === undefined || values[k] === null || values[k] === ""
      );

      const altitudeKey = altitudeFieldKeys[0]
      const altitudeValue = altitudeKey ? values[altitudeKey] : null;

      if (geoMissingKeys.length > 0 ||
        altitudeMissingKeys.length > 0) {

        finalValues = {
          ...values,
          ...Object.fromEntries(
            geoMissingKeys.map(k => [k, finalGeo])
          ),
          ...Object.fromEntries(
            altitudeMissingKeys.map((k) => [
              k,
              altitudeValue,
            ])
          ),
        };

      }
    }

    // else if (isLocationRequired) {

    //   console.log("insdide isLocationRequired", isLocationRequired);
    //   try {
    //     const { latitude, longitude } = await fetchGeolocation();

    //     const geo = `${latitude},${longitude}`

    //     if (!geo) {
    //       toast?.error?.("Location permission is required");
    //       throw new Error("Location permission is required");
    //     }
    //     finalGeo = geo;
    //   } catch (err) {
    //     toast?.error?.("Location permission is required");
    //     throw new Error("Location permission is required");

    //   }
    // }



    if (source.type === "method") {
      const methodName = source.method as keyof typeof methods | undefined;
      const methodFn = methodName ? methods[methodName] : undefined;
      if (methodFn) {
        try {
          let values = finalValues ? { ...finalValues, geolocation: finalGeo } : {}
          const res = await methodFn(values);
          callback?.(res);
          toast?.success?.(getSuccessMessage(res));

          if (methods?.handleActions) {
            let referenceid = sqlOpsUrls?.operation === "update" ? refid : res?.data?.refid
            const link = formJson?.gotolink?.replace(
              "{hashid}",
              String(referenceid)
            );

            methods.handleActions(link);

          }
        } catch (err) {
          // callback?.(err);
          toast?.error?.(getErrorMessage(err));
          throw new Error(getErrorMessage(err));

        }
      }
    }

    if (source.type === "api") {
      if (!sqlOpsUrls) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        throw new Error("Something went wrong");

      }
      try {
        const res = await axios({
          method: source.method || "POST",
          url: sqlOpsUrls.baseURL + source.endpoint,
          data: finalValues ? { ...finalValues, geolocation: finalGeo } : {},
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });
        callback?.(res);
        toast?.success?.(getSuccessMessage(res))
        if (methods?.handleActions) {
          let referenceid = sqlOpsUrls.operation === "update" ? refid : res?.data?.refid
          const link = formJson?.gotolink?.replace(
            "{hashid}",
            String(referenceid)
          );

          methods.handleActions(link);

        }
      } catch (err) {
        // callback?.(err);
        toast?.error?.(getErrorMessage(err));
        throw new Error(getErrorMessage(err));

      }
    }

    if (source.type === "sql") {

      const sqlOpsUrls = formJson.endPoints;

      if (!sqlOpsUrls) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        throw new Error("SQL source requires formJson.endPoints but it is missing");

      }

      try {
        let skipquery = false;
        let dbopsId;

        if (source?.dbopsid) {
          skipquery = true;
          dbopsId = source?.dbopsid;
        }

        const resHashId = await axios({
          method: "GET",
          url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });

        if (!skipquery) {

          let query = {
            ...source
          }

          if (source.where) {
            query = {
              ...source,
              "where": replacePlaceholders(source.where, {
                refid: refid,
              }),
            }
          }

          const resQueryId = await axios({
            method: "POST",
            url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
            data: {
              "operation": sqlOpsUrls.operation,
              "source": query,
              "fields": transformedObject(formJson.fields, sqlOpsUrls.operation),
              "forcefill": formJson.forcefill,
              "datahash": resHashId.data.refhash,
              srcid: formJson?.module_refid
            },

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
          });
          dbopsId = resQueryId?.data.refid;

        }
        const res = await axios({
          method: "POST",
          url: sqlOpsUrls.baseURL + sqlOpsUrls[sqlOpsUrls.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            "refid": dbopsId,
            "fields": finalValues,
            "datahash": resHashId.data.refhash,
            "geolocation": finalGeo

          },
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });

        toast?.success?.(getSuccessMessage(res))
        callback?.(res);
        if (methods?.handleActions) {
          let referenceid = sqlOpsUrls.operation === "update" ? refid : res?.data?.refid
          const link = formJson?.gotolink?.replace(
            "{hashid}",
            String(referenceid)
          );
          methods.handleActions(link);
        }
      } catch (err) {
        // callback?.(err);
        toast?.error?.(getErrorMessage(err));

        throw new Error(getErrorMessage(err));
      }
    }
  };



  const formView = {
    "accordion": <AccordionFormView
      title={formJson?.title ?? ""}
      groupedFields={groupedFields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
      sqlOpsUrls={sqlOpsUrls}
      refid={refid}
      module_refid={formJson?.module_refid}
      buttons={formJson?.buttons}
    />,
    "cards": <CardFormView
      title={formJson?.title ?? ""}
      groupedFields={groupedFields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
      sqlOpsUrls={sqlOpsUrls}
      refid={refid}
      module_refid={formJson?.module_refid}
      buttons={formJson?.buttons}
    />,
    "tab": <TabFormView
      title={formJson?.title ?? ""}
      groupedFields={groupedFields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
      widget={formJson?.widget}
      sqlOpsUrls={sqlOpsUrls}
      refid={refid}
      module_refid={formJson?.module_refid}
      buttons={formJson?.buttons}
    />,
    "simple": <NormalFormView
      title={formJson?.title ?? ""}
      fields={formJson.fields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
      sqlOpsUrls={sqlOpsUrls}
      refid={refid}
      module_refid={formJson?.module_refid}
      buttons={formJson?.buttons}
    />
  };

  return (
    <div className="relative">
      {formView[viewMode]}
    </div>
  );
}
