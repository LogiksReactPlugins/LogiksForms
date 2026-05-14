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
    source: {
        type: string;
        dbopsid: string;
    };
    gotolink: string;
    fields: {
        id: {
            label: string;
            type: string;
            hidden: boolean;
        };
        company_code_id: {
            label: string;
            type: string;
            parameter: string;
            required: boolean;
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
            parameter: {
                sector_id: string;
                company_id: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                };
            }[];
            required: boolean;
            width: number;
            options: never[];
        };
        project_function_id: {
            label: string;
            type: string;
            width: number;
            "no-option": string;
            options: never[];
        };
        date: {
            label: string;
            type: string;
            required: boolean;
            max: string;
            width: number;
        };
        category: {
            label: string;
            type: string;
            search: boolean;
            required: boolean;
            width: number;
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
            required: boolean;
            search: boolean;
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
            multiple: boolean;
            width: number;
        };
        observation_photograph: {
            label: string;
            type: string;
            required: boolean;
            multiple: boolean;
            width: number;
        };
        compliance_photograph: {
            label: string;
            type: string;
            vmode: string;
            multiple: boolean;
            required: boolean;
            width: number;
        };
        reference: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        target_date: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        status: {
            label: string;
            type: string;
            parameter: string;
            onChange: string;
            required: boolean;
            source: {
                type: string;
                method: string;
                endpoint: string;
            };
            "no-option": string;
            width: number;
            options: never[];
        };
        closure_date: {
            label: string;
            type: string;
            disabled: boolean;
            required: boolean;
            width: number;
        };
        description: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
    };
    infoview: {
        template: string;
    };
    script: string;
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