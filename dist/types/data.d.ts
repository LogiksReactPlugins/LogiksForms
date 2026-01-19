export declare const example11: {
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
    };
    source: {
        type: string;
        dbopsid: string;
    };
    fields: {
        company_code_id: {
            label: string;
            type: string;
            required: boolean;
            "no-option": string;
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
        spv_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            options: never[];
        };
        sector_id: {
            label: string;
            type: string;
            required: boolean;
            "no-option": string;
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
            "no-option": string;
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
        location_id: {
            label: string;
            type: string;
            required: boolean;
            "no-option": string;
            width: number;
            options: never[];
        };
        date: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        category: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        priority: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        management_review: {
            label: string;
            type: string;
            default: string;
            groupid: string;
            required: boolean;
            multiple: boolean;
            search: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        sub_contractor: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        assignee: {
            label: string;
            type: string;
            search: boolean;
            orderby: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        mail_cc_user: {
            label: string;
            type: string;
            orderby: string;
            required: boolean;
            multiple: boolean;
            search: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        attachment: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        status: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        reference: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        description: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        observation: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
    };
    infoview: {
        template: string;
    };
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map