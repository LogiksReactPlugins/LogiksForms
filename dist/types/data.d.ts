export declare const example1: {
    preload: {
        helpers: string[];
    };
    source: {
        type: string;
        table: string;
        where: string[];
    };
    fields: {
        email: {
            type: string;
        };
        userid: {
            label: string;
            disabled: boolean;
        };
        name: {
            label: string;
            validate: {
                "length-min": number;
                "length-max": number;
            };
        };
        mobile: {
            label: string;
            required: boolean;
            concat: {
                position: string;
                field: string;
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
            group: string;
        };
        country: {
            label: string;
            group: string;
            type: string;
            method: {
                name: string;
                valuefield: string;
            };
        };
        region: {
            label: string;
            group: string;
        };
        zipcode: {
            label: string;
            group: string;
        };
        gender: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            options: {
                "": boolean;
                male: string;
                female: string;
            };
        };
    };
};
//# sourceMappingURL=data.d.ts.map