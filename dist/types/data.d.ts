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
        date: {
            label: string;
            type: string;
            required: boolean;
            max: string;
            width: number;
        };
        location_id: {
            label: string;
            type: string;
            required: boolean;
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
    infoview: {
        template: string;
        groups: {
            participant_details: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    uiswitcher: boolean;
                    policy_create: string;
                    policy_view: string;
                    policy_delete: string;
                    policy_update: string;
                    toolbar: {
                        search: boolean;
                        print: boolean;
                        export: boolean;
                        email: boolean;
                    };
                    colkey: string;
                    "popup.form": {
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
                        fields: {
                            id: {
                                label: string;
                                type: string;
                                required: boolean;
                                disabled: boolean;
                                hidden: boolean;
                            };
                            hse_induction_id: {
                                label: string;
                                hidden: boolean;
                                type: string;
                                disabled: boolean;
                                default: string;
                            };
                            gender: {
                                label: string;
                                type: string;
                                required: boolean;
                                groupid: string;
                                width: number;
                                formatter: string;
                                options: ({
                                    title: string;
                                    value: string;
                                    class: string;
                                    privilege: string;
                                } | {
                                    title: string;
                                    value: string;
                                    class: null;
                                    privilege: string;
                                })[];
                            };
                            count: {
                                label: string;
                                type: string;
                                required: boolean;
                                min: number;
                                default: number;
                                width: number;
                            };
                            company: {
                                label: string;
                                type: string;
                                onChange: string;
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
                            company_name: {
                                label: string;
                                disabled: boolean;
                                type: string;
                                width: number;
                            };
                            photograph: {
                                label: string;
                                type: string;
                                multiple: boolean;
                                width: number;
                            };
                        };
                    };
                    datagrid: {
                        gender: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                            formatter: string;
                        };
                        count: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        company: {
                            label: string;
                            formatter: string;
                            searchable: boolean;
                        };
                        company_name: {
                            label: string;
                            searchable: boolean;
                        };
                        photograph: {
                            label: string;
                            searchable: boolean;
                            formatter: string;
                        };
                    };
                    actions1: {
                        addInfoRecord: {
                            label: string;
                        };
                    };
                    buttons: {
                        editRecord: {
                            label: string;
                            icon: string;
                        };
                        "api@hse.deleteRecord": {
                            label: string;
                            icon: string;
                            lgksConfirm: string;
                            payload: {
                                table: string;
                            };
                        };
                        "popup@activity_logs.popup_activity_logs/{id}": {
                            label: string;
                            params: {
                                ref_src: string;
                            };
                            icon: string;
                        };
                    };
                    queryid: string;
                };
                width: number;
            };
        };
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