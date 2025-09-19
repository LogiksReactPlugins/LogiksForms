import React from "react";
import axios from "axios";

import { determineViewMode, groupFields } from "./utils.js";

import AccordionFormView from "./components/AccordionFormView.js";
import TabFormView from "./components/TabFormView.js";
import NormalFormView from "./components/NormalFormView.js";
import type { FormProps } from "./Form.types.js";
import CardFormView from "./components/CardFormView.js";

export default function LogiksForm({
  formJson = { title: "", fields: {}, source: {} },
  methods = {},
  userid = null,
  onCancel = () => { },
  components = {}
}: FormProps) {

  const viewMode = determineViewMode(formJson);
  const groupedFields = groupFields(formJson?.fields ?? {});
  const [resolvedData, setResolvedData] = React.useState<Record<string, any>>({});


  // ---------- Fetch Initial Data ----------
  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const source = formJson?.source ?? {};
      if (!source?.type) {
        if (isMounted) setResolvedData({});
        return;
      }

      if (source.type === "method") {
        const methodName = source.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await Promise.resolve(methodFn());
            if (isMounted) setResolvedData(result ?? {});
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setResolvedData({});
          }
        } else {
          if (isMounted) setResolvedData({});
        }
      }

      if (source.type === "api") {
        try {
          const response = await axios({
            method: source.method || "GET",
            url: source.url,
            data: source.body ?? {},
            params: source.params ?? {},
            headers: source.headers ?? {},
          });
          if (isMounted) setResolvedData(response.data ?? {});
        } catch (err) {
          console.error("API fetch failed:", err);
          if (isMounted) setResolvedData({});
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [
    userid,
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

    if (source.type === "method") {
      const methodName = source.method as keyof typeof methods | undefined;
      const methodFn = methodName ? methods[methodName] : undefined;
      if (methodFn) {
        try {
          await Promise.resolve(methodFn(values));
        } catch (err) {
          console.error("Method execution failed:", err);
        }
      }
    }

    if (source.type === "api") {
      try {
        await axios({
          method: source.method || "POST",
          url: source.url,
          data: values ?? {},
          params: source.params ?? {},
          headers: source.headers ?? {},
        });
      } catch (err) {
        console.error("API fetch failed:", err);
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
    />,
    "cards": <CardFormView
      title={formJson?.title ?? ""}
      groupedFields={groupedFields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
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
    />,
    "simple": <NormalFormView
      title={formJson?.title ?? ""}
      groupedFields={groupedFields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
    />
  };

  return (
    <div className="relative">
      {formView[viewMode] ?? formView.simple}
    </div>
  );
}
