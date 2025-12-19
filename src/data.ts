



export const example2 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoxMDEsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6InRlbmFudC0xIiwicm9sZXMiOlsiYWRtaW4iXSwic2NvcGVzIjpbInRlbmFudC0xOm9yZGVyczpyZWFkIiwidGVuYW50LTE6b3JkZXJzOndyaXRlIiwidGVuYW50LTE6ZG9jczpyZWFkIl0sImlwIjoiMTkyLjE2OC4wLjY2IiwiZGV2aWNlVHlwZSI6IndlYiIsImlhdCI6MTc2NjEyMzQxMCwiZXhwIjoxNzY2MTI3MDEwLCJqdGkiOiJhY2M6MTAxOjE3NjYxMjM0MTAyNDQ6d2ViIn0.7nIkb8K-haFve0Lti5PIlwh_V2y1K9nyk9r3DcwsKrw",
        "operation":"create",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "source": {
        "type": "sql",
        "table": "profiletbl",
        "where": { "leads_tbl.id='#refid#'": "RAW" },
        "refid": "1"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#",
        "type": "customer",
        "company_id": "#COMP_ID#"
    },
    "gotolink": "infoview/profile.customer/{hashid}?",
    "script": "profile",
    "fields": {
        "full_name": {
            "label": "Name",
            "group": "Info",
            "required": true,
            "minlength": 3,
            "maxlength": 50,
            "value":"#refid#"
        },
        "organization": {
            "label": "Partner",
            "group": "Info",
            "type": "dataSelectorFromTable",
            "table": "profiletbl_organisation",
            "columns": "organization as title,id as value",
            "search": true,
            "where": {
                "blocked": "false"
            },
            "orderby": "organization asc",
            "no-option": "Select Partner",
            "required": true
        },

        "category": {
            "label": "Category",
            "group": "Info",
            "type": "dataSelectorFromTable",
            "table": "do_lists",
            "columns": "title as title,value as value",
            "where": {
                "blocked": "false",
                "groupid": "profile_category"
            },
            "required": true
        },
        "email1": {
            "label": "Email",
            "group": "Info",
            "type": "email",
            "required": true
        },
        "email2": {
            "label": "Alternate Email",
            "group": "Info",
            "type": "email"
        },
        "mobile": {
            "label": "Mobile",
            "group": "Info",
            "type": "phone",
            "required": true,
            "maxlength": 10
        },
        "mobile_others": {
            "label": "Phone",
            "group": "Info",
            "type": "phone",
            "minlength": 10,
            "maxlength": 10
        },
        "pan": {
            "label": "PAN No.",
            "required": true,
            "group": "Info",
            "autocomplete": "off",
            "width": 6
        },
        "cin": {
            "label": "CIN",
            "required": false,
            "group": "Info",
            "autocomplete": "off",
            "width": 6
        },
        "msme": {
            "label": "MSME",
            "required": false,
            "group": "Info",
            "autocomplete": "off",
            "width": 6
        },
        "gst": {
            "label": "GST No.",
            "required": true,
            "group": "Info",
            "autocomplete": "off",
            "width": 6
        },
        "assigned_to": {
            "label": "Account Manager",
            "group": "Info",
            "type": "dataSelectorFromTable",
            "multiple": false,
            "table": "staff_tbl",
            "columns": "full_name as title,loginid as value",
            "search": true,
            "where": {
                "blocked": "false",
                "loginid !=''": "RAW"
            },
            "orderby": "full_name asc",
            "required": true,
            "width": 6
        },
        "account_co_ordinator": {
            "label": "Account CO-Ordinator",
            "group": "Info",
            "type": "dataSelectorFromTable",
            "multiple": false,
            "dbkey": "core",
            "table": "lgks_users",
            "columns": "name as title,userid as value",
            "search": false,
            "where": {
                "blocked": "false",

            },
            "orderby": "name asc",
            "required": false,
            "width": 6
        },
        "demography": {
            "label": "Demography",
            "group": "Info",
            "type": "dataSelector",
            "groupid": "country",
            "width": 6
        },
        "website": {
            "label": "Website",
            "group": "Info",
            "type": "url",
            "width": 6
        },
        "profile_code": {
            "label": "Client CRN",
            "group": "Info",
            "type": "text",
            "required": true,
            "width": 6
        },
        "owner": {
            "label": "Owner",
            "group": "Info",
            "width": 6,
            "minlength": 3,
            "maxlength": 50
        },
        "dob": {
            "label": "DOB",
            "group": "Info",
            "type": "date",
            "width": 6
        },
        "blood_group": {
            "label": "Blood Group",
            "group": "Info",
            "type": "dataSelector",
            "groupid": "profile_bloodgroup"
        },
        "fax": {
            "label": "Fax",
            "group": "Info",
            "width": 6
        },
        "tags": {
            "label": "Tags",
            "group": "Info",
            "type": "tags",
            "width": 6,
            "minlength": 10,
            "maxlength": 100,
            hidden: true

        },
        "region": {
            "label": "Territory",
            "group": "Info",
            "type": "text"
        },
        "sales_route": {
            "label": "Sales Route",
            "group": "Info",
            "type": "text"
        },
        "discount": {
            "label": "Discount %",
            "type": "number",
            "group": "Info"
        },
        "delivery_days": {
            "label": "Delivery Days",
            "group": "Info",
            "type": "number"
        },
        "remarks": {
            "label": "Remarks",
            "group": "Info",
            "type": "textarea",
            "width": 12
        },
        "blocked": {
            "label": "Blocked",
            "group": "Info",
            "type": "dataSelector",
            "groupid": "boolean",
            "vmode": "edit",
            "required": true
        },
        "blacklist": {
            "label": "Blacklisted",
            "group": "Info",
            "type": "dataSelector",
            "groupid": "boolean",
            "vmode": "edit",
            "required": true
        }
    }
}
