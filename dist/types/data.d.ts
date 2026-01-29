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
    template: string;
    forcefill: {
        guid: string;
        groupuid: string;
    };
    gotolink: string;
    fields: {
        company_code_id: {
            group: string;
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            persistent: boolean;
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
            group: string;
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
        project_function_id: {
            group: string;
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
            };
            options: never[];
        };
        location_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            options: never[];
            group: string;
        };
        training_date: {
            group: string;
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        training_duration_min: {
            group: string;
            label: string;
            type: string;
            onChange: string;
            required: boolean;
            width: number;
        };
        participant_count: {
            group: string;
            label: string;
            onChange: string;
            type: string;
            required: boolean;
            width: number;
        };
        training_man_hours: {
            group: string;
            label: string;
            type: string;
            disabled: boolean;
            required: boolean;
            width: number;
        };
        training_conducted_by: {
            group: string;
            label: string;
            type: string;
            required: boolean;
            width: number;
            queryid: string;
        };
        trainer: {
            group: string;
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
        category: {
            group: string;
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
        section: {
            group: string;
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
        training_photograph: {
            group: string;
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        training_attendance_scan: {
            label: string;
            type: string;
            group: string;
            required: boolean;
            width: number;
        };
    };
    infoview: {
        template: string;
        groups: {
            training_topics: {
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
                    form: {
                        source: {
                            type: string;
                            dbopsid: string;
                        };
                        forcefill: {
                            guid: string;
                            created_by: string;
                            quality_training_id: string;
                        };
                        fields: {
                            training_topics: {
                                label: string;
                                type: string;
                                required: boolean;
                                width: number;
                            };
                        };
                    };
                    datagrid: {
                        training_topics: {
                            label: string;
                            searchable: boolean;
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
                        deleteRecord: {
                            label: string;
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
    hooks: {
        preload: {
            helpers: string[];
        };
        postsubmit: {
            method: string[];
        };
    };
    source: {
        type: string;
        dbopsid: string;
    };
    DEBUG: boolean;
    fields: {
        userid: {
            label: string;
            required: boolean;
        };
        name: {
            label: string;
            required: boolean;
        };
        email: {
            label: string;
            type: string;
            required: boolean;
            validate: {
                email: boolean;
            };
        };
        mobile: {
            label: string;
            required: boolean;
            validate: {
                mobile: boolean;
            };
        };
        remarks: {
            label: string;
            type: string;
            width: string;
            validate: {};
        };
        organization_name: {
            label: string;
            group: string;
        };
        organization_position: {
            label: string;
            group: string;
        };
        organization_email: {
            label: string;
            group: string;
            type: string;
        };
        address: {
            label: string;
            group: string;
        };
        region: {
            label: string;
            group: string;
        };
        country: {
            label: string;
            group: string;
            type: string;
            method: {
                name: string;
                valuefield: string;
                "": boolean;
            };
            options: never[];
        };
        zipcode: {
            label: string;
            group: string;
        };
        tags: {
            label: string;
            group: string;
            type: string;
        };
        gender: {
            label: string;
            group: string;
            type: string;
            options: {
                "": string;
                male: string;
                female: string;
            };
        };
        dob: {
            label: string;
            group: string;
            type: string;
        };
        blocked: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            options: {
                true: string;
                false: string;
            };
        };
        guid: {
            label: string;
            group: string;
            required: boolean;
        };
        privilegeid: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            orderby: string;
            options: {
                title: string;
                value: number;
            }[];
        };
        accessid: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            orderby: string;
            options: {
                title: string;
                value: number;
            }[];
        };
        groupid: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            orderby: string;
            options: {
                title: string;
                value: number;
            }[];
        };
        roles: {
            label: string;
            group: string;
            required: boolean;
            multiple: boolean;
            type: string;
            orderby: string;
            options: {
                title: string;
                value: number;
            }[];
        };
        refid: {
            label: string;
            group: string;
        };
        registered_site: {
            label: string;
            group: string;
            type: string;
            orderby: string;
            options: {
                title: string;
                value: number;
            }[];
        };
        expires: {
            label: string;
            group: string;
            required: boolean;
            type: string;
        };
        security_policy: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            options: {
                "": string;
                open: string;
                closed: string;
            };
        };
        privacy: {
            label: string;
            group: string;
            required: boolean;
            type: string;
            options: {
                "": string;
                public: string;
                private: string;
                protected: string;
            };
        };
        geolocation: {
            label: string;
            group: string;
        };
        geoip: {
            label: string;
            group: string;
        };
    };
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map