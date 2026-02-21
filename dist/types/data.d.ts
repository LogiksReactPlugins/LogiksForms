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
        groupuid: string;
    };
    gotolink: string;
    fields: {
        company_code_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            }[];
            options: {
                title: string;
                value: number;
            }[];
        };
        sector_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            };
            options: never[];
        };
        project_function_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: never[];
        };
        mpr_month: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        mpr: {
            label: string;
            type: string;
            groupby: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            };
            options: {
                title: string;
                value: string;
            }[];
        };
        sub_header: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            autocomplete: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            };
            options: never[];
        };
        weightage: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        is_code_refrence: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        frequency: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        section: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
    };
    infoview: {
        template: string;
    };
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map