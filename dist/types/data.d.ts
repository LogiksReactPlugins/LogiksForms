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
    forcefill: {
        guid: string;
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
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            }[];
            options: never[];
        };
        sub_contractor: {
            label: string;
            type: string;
            required: boolean;
            searchable: boolean;
            width: number;
            options: never[];
        };
        section_name: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: never[];
        };
        make: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        capacity: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        quantity: {
            label: string;
            type: string;
            default: string;
            required: boolean;
            width: number;
        };
        least_count: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        serial_no: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        calibration_agency: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        certificate_no: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        date_of_calibration: {
            label: string;
            type: string;
            required: boolean;
            onChange: string;
            width: number;
        };
        frequency: {
            label: string;
            type: string;
            required: boolean;
            onChange: string;
            width: number;
            options: never[];
        };
        due_date_of_calibration: {
            label: string;
            onChange: string;
            type: string;
            required: boolean;
            width: number;
        };
        next_calibration_due_days: {
            label: string;
            type: string;
            required: boolean;
            disabled: boolean;
            width: number;
        };
        status: {
            label: string;
            type: string;
            default: string;
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
        attachments: {
            label: string;
            type: string;
            multiple: boolean;
            required: boolean;
            width: number;
        };
        description: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        remarks: {
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