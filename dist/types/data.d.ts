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
    };
    forcefill: {
        groupuid: string;
        guid: string;
        type: string;
        company_id: string;
    };
    gotolink: string;
    script: string;
    fields: {
        full_name: {
            label: string;
            group: string;
            required: boolean;
            minlength: number;
            maxlength: number;
        };
        organization: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            search: boolean;
            where: {
                blocked: string;
            };
            orderby: string;
            "no-option": string;
            required: boolean;
        };
        category: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                groupid: string;
            };
            required: boolean;
        };
        email1: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        email2: {
            label: string;
            group: string;
            type: string;
        };
        mobile: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            maxlength: number;
        };
        mobile_others: {
            label: string;
            group: string;
            type: string;
            minlength: number;
            maxlength: number;
        };
        pan: {
            label: string;
            required: boolean;
            group: string;
            autocomplete: string;
            width: number;
        };
        cin: {
            label: string;
            required: boolean;
            group: string;
            autocomplete: string;
            width: number;
        };
        msme: {
            label: string;
            required: boolean;
            group: string;
            autocomplete: string;
            width: number;
        };
        gst: {
            label: string;
            required: boolean;
            group: string;
            autocomplete: string;
            width: number;
        };
        assigned_to: {
            label: string;
            group: string;
            type: string;
            multiple: boolean;
            table: string;
            columns: string;
            search: boolean;
            where: {
                blocked: string;
                "loginid !=''": string;
            };
            orderby: string;
            required: boolean;
            width: number;
        };
        account_co_ordinator: {
            label: string;
            group: string;
            type: string;
            multiple: boolean;
            dbkey: string;
            table: string;
            columns: string;
            search: boolean;
            where: {
                blocked: string;
            };
            orderby: string;
            required: boolean;
            width: number;
        };
        demography: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            width: number;
        };
        website: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        profile_code: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            width: number;
        };
        owner: {
            label: string;
            group: string;
            width: number;
            minlength: number;
            maxlength: number;
        };
        dob: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        blood_group: {
            label: string;
            group: string;
            type: string;
            groupid: string;
        };
        fax: {
            label: string;
            group: string;
            width: number;
        };
        tags: {
            label: string;
            group: string;
            type: string;
            width: number;
            minlength: number;
            maxlength: number;
            hidden: boolean;
        };
        region: {
            label: string;
            group: string;
            type: string;
        };
        sales_route: {
            label: string;
            group: string;
            type: string;
        };
        discount: {
            label: string;
            type: string;
            group: string;
        };
        delivery_days: {
            label: string;
            group: string;
            type: string;
        };
        remarks: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
        blacklist: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
    };
};
//# sourceMappingURL=data.d.ts.map