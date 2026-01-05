export declare const example2: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        operation: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
    };
    hooks: {
        postsubmit: {
            api: string;
            method: string;
        };
    };
    source: {
        type: string;
        table: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
        last_status: string;
        company_id: string;
    };
    fields: {
        code: {
            label: string;
            group: string;
            required: boolean;
            groupid: string;
            width: number;
            type: string;
        };
        title: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
        };
        type: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
            options: {
                function: string;
                project: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        "data_sector_tbl.type": string;
                        "data_sector_tbl.blocked": string;
                    };
                };
            };
        };
        sector_id: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
        };
        description: {
            label: string;
            group: string;
            width: number;
            type: string;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
    };
};
//# sourceMappingURL=data.d.ts.map