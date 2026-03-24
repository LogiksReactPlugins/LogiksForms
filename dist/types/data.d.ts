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
        removeFileURL: string;
        operation: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    forcefill: {
        guid: string;
        raised_by: string;
    };
    gotolink: string;
    fields: {
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
            required: boolean;
            width: number;
            "no-option": string;
            options: never[];
        };
        location: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        location_type: {
            label: string;
            type: string;
            groupid: string;
            "no-option": string;
            onChange: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        chainage_from: {
            label: string;
            disabled: boolean;
            type: string;
            width: number;
        };
        chainage_to: {
            label: string;
            disabled: boolean;
            type: string;
            width: number;
        };
        location_other: {
            label: string;
            disabled: boolean;
            type: string;
            width: number;
        };
        raised_date: {
            label: string;
            type: string;
            onChange: string;
            required: boolean;
            width: number;
        };
        ageing_days: {
            label: string;
            type: string;
            required: boolean;
            readonly: boolean;
            width: number;
        };
        structure_part: {
            label: string;
            type: string;
            "no-option": string;
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
        section: {
            label: string;
            type: string;
            "no-option": string;
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
        department_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            search: boolean;
            width: number;
            options: {
                title: string;
                value: number;
            }[];
        };
        sub_contractor: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            search: boolean;
            width: number;
            options: {
                title: string;
                value: number;
            }[];
        };
        status: {
            label: string;
            type: string;
            onChange: string;
            default: string;
            groupid: string;
            disabled: boolean;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        assigned_to: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            search: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        probable_root_cause: {
            label: string;
            type: string;
            "no-option": string;
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
        closure_date: {
            label: string;
            type: string;
            disabled: boolean;
            onChange: string;
            required: boolean;
            width: number;
        };
        severity_level: {
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
            required: boolean;
            width: number;
        };
        rework_cost_borne_by: {
            label: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        description: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        "suggestion ": {
            label: string;
            type: string;
            vmode: string;
            required: boolean;
            width: number;
        };
        forward_remarks: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        reopen_remarks: {
            label: string;
            type: string;
            disabled: boolean;
            placeholder: string;
            required: boolean;
            width: number;
        };
        compliance_from_execution_engineer: {
            label: string;
            type: string;
            vmode: string;
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