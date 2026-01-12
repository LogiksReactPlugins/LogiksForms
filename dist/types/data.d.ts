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
//# sourceMappingURL=data.d.ts.map