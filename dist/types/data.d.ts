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
        email: {
            label: string;
            type: string;
            required: boolean;
            validate: {
                email: boolean;
            };
            icon: string;
        };
        userid: {
            label: string;
            disabled: boolean;
            concat: {
                position: string;
                field: string;
            };
        };
        name: {
            label: string;
            type: string;
            validate: {
                "length-min": number;
                "length-max": number;
            };
        };
        dob: {
            label: string;
            type: string;
        };
        demo: {
            type: string;
        };
        mobile: {
            label: string;
            required: boolean;
            icon: string;
        };
        subjects: {
            label: string;
            type: string;
            multiple: boolean;
            required: boolean;
            source: {
                type: string;
                method: string;
                where: string[];
            };
        };
        remarks: {
            label: string;
            type: string;
            width: string;
            validate: {
                "length-min": number;
            };
        };
        address: {
            label: string;
        };
        type: {
            label: string;
            type: string;
            groupid: string;
        };
        region: {
            label: string;
        };
        zipcode: {
            label: string;
        };
        gender: {
            label: string;
            type: string;
            options: {
                male: string;
                female: string;
            };
        };
    };
};
//# sourceMappingURL=data.d.ts.map