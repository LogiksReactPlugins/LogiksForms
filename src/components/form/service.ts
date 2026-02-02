// sqlClient.ts
import axios, { type AxiosResponse } from "axios";
import type { SqlEndpoints } from "./Form.types.js";



type SqlSource = {
    table: string;
    columns: string;
    where?: Record<string, any>;
    refid?: string;
};

const authHeaders = (endpoints: SqlEndpoints) => ({
    Authorization: `Bearer ${endpoints.accessToken}`,
});

export const getHash = async (endpoints: SqlEndpoints) => {
    const res = await axios.get(
        endpoints.baseURL + endpoints.dbopsGetHash,
        { headers: authHeaders(endpoints) }
    );
    return res.data.refhash;
};

export const getRefId = async (
    endpoints: SqlEndpoints,
    payload: {
        operation: "fetch" | "create" | "update";
        source: SqlSource;
        fields?: any;
        datahash: string;
        srcid: string | undefined;
    }
) => {
    const res = await axios.post(
        endpoints.baseURL + endpoints.dbopsGetRefId,
        payload,
        { headers: authHeaders(endpoints) }
    );
    return res.data.refid;
};

export const sqlClient = {
    async fetch(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; fields?: any },
        dbopsid: string | undefined,
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        let skipquery = false;
        let dbopsId;

        if (dbopsid) {
            skipquery = true;
            dbopsId = dbopsid;
        }


        if (!skipquery) {

            const refid = await getRefId(endpoints, {
                operation: "fetch",
                source: payload.source,
                fields: payload.fields ?? {},
                datahash,
                srcid: module_refid
            });
            dbopsId = refid;
        }


        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsFetch,
            { refid: dbopsId, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data?.data ?? res.data;
    },

    async create(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; values: any },
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "create",
            source: payload.source,
            fields: payload.values,
            datahash,
            srcid: module_refid
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsCreate!,
            { refid, fields: payload.values, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data;
    },

    async update(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; values: any },
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "update",
            source: payload.source,
            fields: payload.values,
            datahash,
            srcid: module_refid
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsUpdate!,
            { refid, fields: payload.values, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data;
    },
};


export async function fetchDataByquery(
    sqlOpsUrls: Record<string, any>,
    query: Record<string, any> | undefined,
    querid: string | undefined,
    refid: string | undefined = undefined,
    module_refid: string | undefined = undefined,
    filter: Record<string, any> = {}
): Promise<AxiosResponse<any>> {
    try {

        let queryId = querid;

        if (!queryId) {
            const resQueryId = await axios({
                method: "POST",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery,
                data: { "query": query ?? {}, "srcid": module_refid },
                headers: {
                    "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                },
            });
            queryId = resQueryId.data.queryid;
        }

        const res = await axios({
            method: "POST",
            url: sqlOpsUrls.baseURL + sqlOpsUrls.runQuery,
            data: {
                "queryid": queryId,
                "filter": filter,
                "refid": refid,
                "page": 0,
                "limit": 10000
            },
            headers: {
                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
        });

        return res
    } catch (error) {
        throw error;
    }
}

export async function getPreviewUrl(
    fileUrl: string,
    sqlOpsUrls: Record<string, any>
): Promise<string> {
    let previewPath = sqlOpsUrls.previewPath ?? "/api/files/preview"
    const res = await axios.get(
        `${sqlOpsUrls.baseURL}${previewPath}?uri=${encodeURIComponent(fileUrl)}`,
        {
            responseType: "blob",
            headers: {
                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            }
        },

    );

    return URL.createObjectURL(res.data);
}


type UploadResponse = {
    path: string;
    [key: string]: any;
};

export async function uploadFiles(
    sqlOpsUrls: SqlEndpoints | undefined,
    files: FileList
): Promise<UploadResponse[]> {
    if (!sqlOpsUrls?.uploadURL) {
        throw new Error("Upload URL missing");
    }

    const uploadUrl = sqlOpsUrls.baseURL + sqlOpsUrls.uploadURL;

    return Promise.all(
        Array.from(files).map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);

            const res = await axios.post(uploadUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`,
                },
            });

            return res.data;
        })
    );
}
