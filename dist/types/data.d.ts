export declare const example1: {
    preload: {
        helpers: string[];
    };
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsRunQuery: string;
        dbopsFetch: string;
        operation: string;
    };
    source: {
        type: string;
        method: string;
    };
    fields: {
        persona_avatar: {
            label: string;
            group: string;
            width: number;
        };
        persona_code: {
            label: string;
            group: string;
            width: number;
        };
        persona_name: {
            label: string;
            group: string;
            width: number;
        };
        persona_group: {
            label: string;
            group: string;
            type: string;
            width: number;
            source: {
                type: string;
                method: string;
                url: string;
                headers: {
                    appid: string;
                    "Content-Type": string;
                    'Auth-Token': string;
                    Authorization: string;
                };
            };
            valueKey: string;
            labelKey: string;
        };
        persona_type: {
            label: string;
            group: string;
            width: number;
            type: string;
            source: {
                type: string;
                method: string;
            };
        };
        persona_descs: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        persona_howtouse: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        user_variables: {
            label: string;
            group: string;
            type: string;
            formatter: string;
            width: number;
        };
        datastore_id: {
            label: string;
            group: string;
            formatter: string;
            width: number;
        };
        datastore_strategy: {
            label: string;
            group: string;
            width: number;
            type: string;
            options: {
                single: string;
                merge: string;
            };
        };
        datastore_params: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        prompt_engine: {
            label: string;
            group: string;
            type: string;
            source: {
                type: string;
                method: string;
            };
            width: number;
        };
        persona_prompt: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        persona_prompt_template: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        persona_refurl: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        persona_llm: {
            label: string;
            group: string;
            type: string;
            source: {
                type: string;
                method: string;
                url: string;
                headers: {
                    appid: string;
                    "Content-Type": string;
                    'Auth-Token': string;
                    Authorization: string;
                };
            };
            valueKey: string;
            labelKey: string;
            width: number;
        };
        studio_editors: {
            label: string;
            group: string;
            width: number;
        };
        studio_testers: {
            label: string;
            group: string;
            width: number;
        };
        tags: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        enable_optimizer: {
            label: string;
            group: string;
            width: number;
            type: string;
            options: {
                true: string;
                false: string;
            };
        };
        persona_uikit: {
            label: string;
            group: string;
            width: number;
        };
        persona_preform: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        available_actions: {
            label: string;
            type: string;
            multiple: boolean;
            source: {
                type: string;
                method: string;
                url: string;
                headers: {
                    appid: string;
                    "Content-Type": string;
                    'Auth-Token': string;
                    Authorization: string;
                };
            };
            valueKey: string;
            labelKey: string;
            group: string;
            width: number;
        };
        available_tools: {
            label: string;
            type: string;
            multiple: boolean;
            source: {
                type: string;
                method: string;
                url: string;
                headers: {
                    appid: string;
                    "Content-Type": string;
                    'Auth-Token': string;
                    Authorization: string;
                };
            };
            valueKey: string;
            labelKey: string;
            group: string;
            width: number;
        };
        rating: {
            label: string;
            group: string;
            formatter: string;
            width: number;
        };
        visibility: {
            label: string;
            group: string;
            width: number;
            type: string;
            options: {
                public: string;
                private: string;
            };
        };
        status: {
            label: string;
            required: boolean;
            group: string;
            width: number;
            type: string;
            options: {
                published: string;
                draft: string;
            };
        };
    };
};
export declare const example2: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsRunQuery: string;
        dbopsFetch: string;
        operation: string;
    };
    source: {
        type: string;
        method: string;
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
            autocomplete123: {
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
            options: {
                chat: string;
                direct: string;
            };
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
        created_on: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
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
        created_by: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        edited_by: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        edited_on: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
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