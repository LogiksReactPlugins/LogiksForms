export declare const example1: {
    schema: string;
    title: string;
    category: string;
    privilege: string;
    blocked: boolean;
    template: string;
    hooks: {
        preload: {
            helpers: string[];
        };
    };
    source: {
        type: string;
        table: string;
        where: string[];
    };
    forcefill: {
        guid: string;
        autogen_no: string;
        rowhash: string;
    };
    gotolink: string;
    fields: {
        field_textfield: {
            label: string;
            required: boolean;
        };
        field_dataSelectorFromTable: {
            label: string;
            group: string;
            required: boolean;
            dbkey: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            "no-option": string;
        };
        field_dataSelectorFromTable_multiple: {
            label: string;
            group: string;
            multiple: boolean;
            dbkey: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            "no-option": string;
        };
        field_dataSelectorFromTable_search: {
            label: string;
            group: string;
            search: boolean;
            dbkey: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            "no-option": string;
        };
        field_selectAJAX: {
            label: string;
            group: string;
            dbkey: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
            };
            "no-option": string;
        };
        field_autosuggest: {
            label: string;
            group: string;
            type: string;
            source: {
                table: string;
                where: {
                    blocked: string;
                };
            };
            "no-option": string;
        };
        field_select: {
            label: string;
            group: string;
            type: string;
            options: {
                A: string;
                B: string;
                C: string;
                D: string;
                E: string;
            };
        };
        field_radiolist: {
            label: string;
            group: string;
            type: string;
            options: {
                A: string;
                B: string;
                C: string;
                D: string;
                E: string;
            };
        };
        field_textarea: {
            label: string;
            group: string;
            type: string;
        };
        field_richtextarea: {
            label: string;
            group: string;
            type: string;
        };
        field_markup: {
            label: string;
            group: string;
            type: string;
        };
        field_color: {
            label: string;
            group: string;
            type: string;
        };
        field_checkbox: {
            label: string;
            group: string;
            type: string;
        };
        field_date: {
            label: string;
            group: string;
            type: string;
        };
        field_datetime: {
            label: string;
            group: string;
            type: string;
        };
        field_month: {
            label: string;
            group: string;
            type: string;
        };
        field_year: {
            label: string;
            group: string;
            type: string;
        };
        field_time: {
            label: string;
            group: string;
            type: string;
        };
        field_currency: {
            label: string;
            group: string;
            type: string;
        };
        field_creditcard: {
            label: string;
            group: string;
            type: string;
        };
        field_debitcard: {
            label: string;
            group: string;
            type: string;
        };
        field_moneycard: {
            label: string;
            group: string;
            type: string;
        };
        field_email: {
            label: string;
            group: string;
            type: string;
        };
        field_tel: {
            label: string;
            group: string;
            type: string;
        };
        field_phone: {
            label: string;
            group: string;
            type: string;
        };
        field_mobile: {
            label: string;
            group: string;
            type: string;
        };
        field_url: {
            label: string;
            group: string;
            type: string;
        };
        field_number: {
            label: string;
            group: string;
            type: string;
        };
        field_barcode: {
            label: string;
            group: string;
            type: string;
        };
        field_qrcode: {
            label: string;
            group: string;
            type: string;
        };
        field_search: {
            label: string;
            group: string;
            type: string;
        };
        field_password: {
            label: string;
            group: string;
            type: string;
        };
        field_tags: {
            label: string;
            group: string;
            type: string;
        };
        "field_social@facebook": {
            label: string;
            group: string;
            type: string;
        };
        field_static: {
            label: string;
            group: string;
            type: string;
            placeholder: string;
        };
        field_static2: {
            label: string;
            group: string;
            type: string;
            placeholder: string;
        };
        field_header: {
            label: string;
            hide_label: boolean;
            group: string;
            type: string;
            width: number;
        };
        field_jsonfield: {
            label: string;
            group: string;
            type: string;
        };
        field_photo: {
            label: string;
            group: string;
            type: string;
        };
        "field_photo-multiple": {
            label: string;
            group: string;
            type: string;
            multiple: boolean;
        };
        field_gallery: {
            label: string;
            group: string;
            type: string;
        };
        "field_gallery-multiple": {
            label: string;
            group: string;
            type: string;
            multiple: boolean;
        };
        field_avatar: {
            label: string;
            group: string;
            type: string;
        };
        field_file: {
            label: string;
            group: string;
            type: string;
        };
        "field_file-multiple": {
            label: string;
            group: string;
            type: string;
            multiple: boolean;
        };
    };
};
//# sourceMappingURL=data.d.ts.map