export declare const example10: {
    template: string;
    preload: {
        helpers: string[];
    };
    source: {
        type: string;
        method: string;
        where: string[];
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
            method: string;
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
            type: string;
            required: boolean;
            width: number;
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
            method: string;
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