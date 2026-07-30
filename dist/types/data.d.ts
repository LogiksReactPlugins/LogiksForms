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
    toolbar: {
        camera: {
            type: string;
            method: string;
            tooltip: string;
            icon: string;
            class: string;
        };
        qrcode: {
            type: string;
            method: string;
            tooltip: string;
            icon: string;
            class: string;
        };
        doc: {
            type: string;
            endpoint: string;
            method: string;
            tooltip: string;
            icon: string;
            class: string;
        };
    };
    hooks: {
        presubmit: string[];
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
        location_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            height: string;
            language: string;
        };
        company_code_id: {
            label: string;
            type: string;
            buttons: {
                "api@hse.someAction": {
                    label: string;
                    icon: string;
                };
            };
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
        date: {
            label: string;
            type: string;
            required: boolean;
            max: string;
            width: number;
        };
        photo_attendance: {
            label: string;
            type: string;
            multiple: boolean;
            width: number;
        };
        conducted_by_department: {
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
        conducted_by_name: {
            label: string;
            type: string;
            multiple: boolean;
            width: number;
            search: boolean;
            options: {
                title: string;
                value: string;
            }[];
        };
        participant_count: {
            label: string;
            type: string;
            required: boolean;
            min: number;
            width: number;
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