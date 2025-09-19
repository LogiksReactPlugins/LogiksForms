export declare const example1: {
    preload: {
        helpers: string[];
    };
    widget: boolean;
    source: {
        type: string;
        method: string;
        where: string[];
    };
    fields: {
        email: {
            label: string;
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
            multiple: boolean;
            method: {
                name: string;
                valuefield: string;
            };
            placeholder: string;
            options: {
                india: string;
                pakistan: string;
                japan: string;
                iran: string;
                israel: string;
                france: string;
                germany: string;
                england: string;
                italy: string;
                pourtgal: string;
                argentina: string;
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
        highest_qualification: {
            label: string;
            group: string;
        };
        gender: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            placeholder: string;
            options: {
                male: string;
                female: string;
            };
        };
    };
};
//# sourceMappingURL=data.d.ts.map