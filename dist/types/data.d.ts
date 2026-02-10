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
    forcefill: {
        groupuid: string;
        guid: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    fields: {
        title: {
            label: string;
            group: string;
            required: boolean;
        };
        category: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
            options: {
                title: string;
                value: string;
                class: string;
                privilege: string;
            }[];
        };
        terms: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
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