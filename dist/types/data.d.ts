export declare const example1: {
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
//# sourceMappingURL=data.d.ts.map