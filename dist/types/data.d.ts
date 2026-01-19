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
        geolocation: {
            type: string;
            group: string;
            hidden: boolean;
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
export declare const example1: {
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
        uploadURL: string;
        runQuery: string;
    };
    hooks: {
        preload: {
            helpers: string[];
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
        type: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            id: string;
        };
        refid: string;
    };
    script: string;
    fields: {
        company_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            orderBy: string;
            "no-option": string;
            group: string;
            required: boolean;
        };
        name: {
            label: string;
            group: string;
            required: boolean;
        };
        branch_code: {
            label: string;
            group: string;
            required: boolean;
        };
        tags: {
            label: string;
            type: string;
            group: string;
        };
        mail: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        landline: {
            label: string;
            group: string;
            required: boolean;
        };
        region: {
            label: string;
            group: string;
            required: boolean;
        };
        country: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                groupid: string;
            };
            orderby: string;
            required: boolean;
        };
        address: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        zipcode: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_designation1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person2: {
            label: string;
            group: string;
        };
        contact_designation2: {
            label: string;
            group: string;
        };
        manager: {
            label: string;
            group: string;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
    };
};
export declare const example3: {
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
        uploadURL: string;
        runQuery: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        refid: string;
        where: {
            id: string;
        };
    };
    fields: {
        date: {
            label: string;
            type: string;
            required: boolean;
        };
        category: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
        };
        priority: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
        };
        management_review: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            multiple: boolean;
            search: boolean;
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
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            search: boolean;
            orderby: string;
            required: boolean;
        };
        mail_cc_user: {
            label: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            orderby: string;
            required: boolean;
            multiple: boolean;
            search: boolean;
        };
        attachment: {
            label: string;
            type: string;
            required: boolean;
        };
        status: {
            label: string;
            type: string;
            groupid: string;
            search: boolean;
            required: boolean;
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
};
export declare const example4: {
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
        uploadURL: string;
        runQuery: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            id: string;
        };
        refid: number;
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    fields: {
        company_code_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        company_code_id: string;
                    };
                };
            };
        };
        spv_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        company_code_id: string;
                    };
                };
            };
        };
        sector_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        sector_id: string;
                    };
                };
            };
        };
        project_function_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        project_function_id: string;
                    };
                };
            };
        };
        location_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
        };
        date: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        time: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        type: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            multiple: boolean;
        };
        reason: {
            label: string;
            type: string;
            groupid: string;
            multiple: boolean;
            width: number;
        };
        other_reason: {
            label: string;
            type: string;
            width: number;
        };
        reported_by: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        status: {
            label: string;
            type: string;
            groupid: string;
        };
        description: {
            label: string;
            type: string;
            width: number;
        };
        action_taken: {
            label: string;
            type: string;
            width: number;
        };
        root_cause: {
            label: string;
            type: string;
            width: number;
        };
        incident_report_attachment: {
            label: string;
            type: string;
            width: number;
            multiple: boolean;
        };
        compliance_report_attachment: {
            label: string;
            type: string;
            width: number;
        };
    };
};
export declare const example5: {
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
        uploadURL: string;
        runQuery: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            id: string;
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    fields: {
        company_code_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        company_code_id: string;
                    };
                };
            }[];
        };
        spv_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        sector_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        sector_id: string;
                    };
                };
            };
        };
        project_function_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        blocked: string;
                        project_function_id: string;
                    };
                };
            };
        };
        location_id: {
            label: string;
            type: string;
            width: number;
        };
        date: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        time: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        location: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        type: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
        };
        reason: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
        };
        other_reason: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        reported_by: {
            label: string;
            type: string;
            width: number;
        };
        status: {
            label: string;
            type: string;
            required: boolean;
            groupid: string;
        };
        description: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        action_taken: {
            label: string;
            type: string;
            width: number;
        };
        root_cause: {
            label: string;
            type: string;
            width: number;
        };
        incident_report_attachment: {
            label: string;
            type: string;
            width: number;
        };
        compliance_report_attachment: {
            label: string;
            type: string;
            width: number;
        };
    };
};
export declare const example6: {
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
        operation: string;
        refid: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            id: string;
        };
        refid: string;
    };
    forcefill: {
        guid: string;
        created_by: string;
        hse_induction_id: string;
    };
    fields: {
        gender: {
            label: string;
            type: string;
            required: boolean;
            groupid: string;
            width: number;
        };
        count: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        company_name: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        company: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
        };
        photograph: {
            label: string;
            type: string;
            width: number;
        };
    };
};
export declare const example7: {
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
        operation: string;
    };
    template: string;
    source: {
        type: string;
        table: string;
        cols: string;
        refid: number;
        dbopsid: string;
        where: {
            id: string;
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    fields: {
        name: {
            label: string;
            group: string;
            required: boolean;
            width: number;
        };
        description: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
            width: number;
        };
    };
};
export declare const example8: {
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
        operation: string;
    };
    hooks: {
        preload: {
            helpers: string[];
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
        type: string;
    };
    source: {
        type: string;
        dbopsid: string;
        refid: string;
        where: {
            id: string;
        };
    };
    script: string;
    fields: {
        company_id: {
            label: string;
            type: string;
            orderBy: string;
            "no-option": string;
            group: string;
            required: boolean;
            queryid: string;
        };
        name: {
            label: string;
            group: string;
            required: boolean;
        };
        branch_code: {
            label: string;
            group: string;
            required: boolean;
        };
        tags: {
            label: string;
            type: string;
            group: string;
        };
        mail: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        landline: {
            label: string;
            group: string;
            required: boolean;
        };
        region: {
            label: string;
            group: string;
            required: boolean;
        };
        country: {
            label: string;
            group: string;
            type: string;
            orderby: string;
            required: boolean;
            queryid: string;
        };
        address: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        zipcode: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_designation1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person2: {
            label: string;
            group: string;
        };
        contact_designation2: {
            label: string;
            group: string;
        };
        manager: {
            label: string;
            group: string;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
    };
    module_refid: string;
    module_type: string;
};
export declare const example9: {
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
        operation: string;
    };
    hooks: {
        preload: {
            helpers: string[];
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
        type: string;
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            id: string;
        };
    };
    script: string;
    fields: {
        company_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            orderBy: string;
            "no-option": string;
            group: string;
            required: boolean;
        };
        name: {
            label: string;
            group: string;
            required: boolean;
        };
        branch_code: {
            label: string;
            group: string;
            required: boolean;
        };
        tags: {
            label: string;
            type: string;
            group: string;
        };
        mail: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        landline: {
            label: string;
            group: string;
            required: boolean;
        };
        region: {
            label: string;
            group: string;
            required: boolean;
        };
        country: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                groupid: string;
            };
            orderby: string;
            required: boolean;
        };
        address: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        zipcode: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_designation1: {
            label: string;
            group: string;
            required: boolean;
        };
        contact_person2: {
            label: string;
            group: string;
        };
        contact_designation2: {
            label: string;
            group: string;
        };
        manager: {
            label: string;
            group: string;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
    };
};
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
        operation: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
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
        spv_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: never[];
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
            width: number;
            options: never[];
        };
        month: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
            options: ({
                title: string;
                value: string;
                category: string;
                privilege: string;
                class?: never;
            } | {
                title: string;
                value: string;
                category: string;
                class: null;
                privilege: string;
            })[];
        };
        subject: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        letter_no: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        issued_by: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        observation_issued_count: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        observation_report_file: {
            label: string;
            type: string;
            width: number;
        };
        compliance_report_file: {
            label: string;
            type: string;
            width: number;
        };
    };
    infoview: {
        template: string;
        groups: {
            category_details: {
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
                    orderby: string;
                    colkey: string;
                    "popup.form": {
                        source: {
                            type: string;
                            dbopsid: string;
                        };
                        forcefill: {
                            guid: string;
                            created_by: string;
                            hse_observations_external_id: string;
                        };
                        fields: {
                            type: {
                                label: string;
                                type: string;
                                required: boolean;
                                groupid: string;
                                width: number;
                            };
                            type_issued: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_closed: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_wip: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_not_applicable: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_open: {
                                label: string;
                                type: string;
                                width: number;
                            };
                        };
                    };
                    datagrid: {
                        id: {
                            label: string;
                            searchable: boolean;
                        };
                        type: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                            formatter: string;
                        };
                        type_issued: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_closed: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_wip: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_not_applicable: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_open: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                    };
                    actions: {
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
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map