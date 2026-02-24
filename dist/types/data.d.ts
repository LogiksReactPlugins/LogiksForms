export declare const example10: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
        uploadURL: string;
        operation: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    fields: {
        title: {
            label: string;
            group: string;
            required: boolean;
        };
        category: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
            options: {
                title: string;
                value: string;
                class: string;
                privilege: string;
            }[];
        };
        terms: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
            options: ({
                title: string;
                value: string;
                class: string;
                privilege: string;
            } | {
                title: string;
                value: null;
                class: null;
                privilege: string;
            })[];
        };
    };
    module_refid: string;
    module_type: string;
};
export declare const example1: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
        uploadURL: string;
        operation: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    forcefill: {
        guid: string;
        type: string;
        edited_by: string;
    };
    fields: {
        code: {
            label: string;
            required: boolean;
            groupid: string;
            width: number;
            type: string;
        };
        title: {
            label: string;
            required: boolean;
            width: number;
            type: string;
        };
        company_id: {
            label: string;
            type: string;
            source: {
                type: string;
                method: string;
                endpoint: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                };
            }[];
            "no-option": string;
            width: number;
            options: never[];
        };
        sector_id: {
            label: string;
            "no-option": string;
            type: string;
            valueKey: string;
            required: boolean;
            width: number;
            options: never[];
        };
        location_id: {
            label: string;
            type: string;
            multiple: boolean;
            search: boolean;
            required: boolean;
            width: number;
            options: {
                value: number;
                title: string;
            }[];
        };
        description: {
            label: string;
            width: number;
            type: string;
        };
        blocked: {
            label: string;
            type: string;
            groupid: string;
            width: number;
            vmode: string;
            options: ({
                title: string;
                value: string;
                class: string;
                privilege: string;
            } | {
                title: string;
                value: null;
                class: null;
                privilege: string;
            })[];
        };
    };
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map