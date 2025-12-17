export declare const example2: {
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
        table: string;
        refid: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
        company_id: string;
    };
    actions11: {
        newContact: {
            icon: string;
            label: string;
            class: string;
        };
    };
    simpleform: boolean;
    buttons: {
        markAsDeal: {
            label: string;
            icon: string;
            class: string;
            float: string;
            policy: string;
        };
        markAsLost: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
        markAsJunk: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
        markAsNext: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
    };
    gotolink: string;
    script: string;
    fields: {
        title: {
            label: string;
            group: string;
            required: boolean;
        };
        broker_name: {
            label: string;
            type: string;
            table: string;
            columns: string;
            search: boolean;
            group: string;
            "no-option": string;
            autocomplete: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        org_code: string;
                    };
                };
            };
            required: boolean;
        };
        broker_email: {
            label: string;
            type: string;
            group: string;
            hidden: boolean;
        };
        broker_mobile: {
            label: string;
            type: string;
            group: string;
            hidden: boolean;
        };
        broker_address: {
            label: string;
            type: string;
            group: string;
            width: number;
            hidden: boolean;
        };
        customer_id: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            search: boolean;
            where: {
                "(type like '%customer%' OR type like '%other%')": string;
                "length(full_name)>0": string;
            };
            autocomplete: {
                target: string;
                src: {
                    table: string;
                    columns: string;
                    where: {
                        "profiletbl.id": string;
                        "profiletbl_address.profile_id": string;
                        "profiletbl_address.address_type": string;
                        "profiletbl_address.blocked": string;
                    };
                };
            };
            class: string;
            "no-option": string;
        };
        customer_type: {
            label: string;
            group: string;
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            groupid: string;
            default: string;
            "no-option": string;
            required: boolean;
        };
        contact_name: {
            label: string;
            type: string;
            group: string;
            required: boolean;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_email: {
            label: string;
            type: string;
            group: string;
            required: boolean;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_mobile: {
            label: string;
            type: string;
            group: string;
            required: boolean;
            minlength: number;
            maxlength: number;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_address: {
            label: string;
            type: string;
            group: string;
            class: string;
            width: number;
            hidden: boolean;
        };
        contact_street: {
            label: string;
            type: string;
            group: string;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_city: {
            label: string;
            group: string;
            class: string;
            hidden: boolean;
            type: string;
            width: number;
        };
        contact_state: {
            label: string;
            type: string;
            group: string;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_zipcode: {
            label: string;
            type: string;
            group: string;
            class: string;
            hidden: boolean;
            width: number;
        };
        contact_country: {
            label: string;
            type: string;
            groupid: string;
            group: string;
            class: string;
            hidden: boolean;
            width: number;
        };
        lead_date: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            default: string;
            width: number;
        };
        lead_year: {
            label: string;
            group: string;
            required: boolean;
            hidden: boolean;
            width: number;
        };
        net_amount: {
            label: string;
            group: string;
            type: string;
            vmode: string;
            required: boolean;
        };
        lead_value: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        lead_priority: {
            label: string;
            group: string;
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            groupid: string;
            required: boolean;
        };
        lead_source: {
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            label: string;
            group: string;
            groupid: string;
            required: boolean;
        };
        lead_status: {
            label: string;
            group: string;
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            groupid: string;
            "no-option": string;
            required: boolean;
            width: number;
        };
        lead_type: {
            label: string;
            group: string;
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            groupid: string;
            suggest: boolean;
            required: boolean;
            width: number;
        };
        enquiry_type: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
        };
        marketting_source: {
            type: string;
            options: {
                chat: string;
                direct: string;
            };
            label: string;
            group: string;
            groupid: string;
            "no-option": string;
            required: boolean;
        };
        marketting_campaign: {
            label: string;
            group: string;
            required: boolean;
        };
        enquiry_product_descs: {
            label: string;
            group: string;
            type: string;
            maxlength: number;
            required: boolean;
            width: number;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            vmode: string;
            required: boolean;
            options: {
                "": boolean;
                true: string;
                false: string;
            };
        };
        enquiry_due: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        open_by: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "loginid <> ''": string;
                "length(full_name)>0": string;
            };
            default: string;
            width: number;
        };
        assigned_to: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "loginid <> ''": string;
                "length(full_name)>0": string;
            };
            default: string;
            width: number;
        };
        manager: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "length(full_name)>0": string;
            };
            default: string;
            width: number;
        };
        tags: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        remarks: {
            label: string;
            group: string;
            width: string;
            maxlength: number;
            type: string;
        };
        prelead_id: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
            width: number;
        };
    };
};
//# sourceMappingURL=data.d.ts.map