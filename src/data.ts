const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoicGtYNjdHNldiVkZ5b2N6RFRia0ZDa1pXSXlvOUY1UUQrdGRWb01RTlJZQldIdDlDSmsyNlBWWHU1TTZpUmFJSndheVdNZ2N3RE5yUlhCOXpVaVg1ZDV4Y2NlZ1RFYTRXSlk4ZXM0N0R3OFJNTDIvMXZIQlFheHZwQjBFQzlJWUdybXJ6dUZMdnl6N2l4UT09IiwidGltZXN0YW1wIjoxNzcwMDA2NDA2LCJleHAiOm51bGwsImlhdCI6MTc3MDAwNjQwNn0.BUB18m4GQkrv6PbqYn7SwQYGOftwBHrPco8kwAhuR08";
const AuthKey = "g0MxEf0uh7vr";

export const example10 = {
       "endPoints": {
    "baseURL": "http://192.168.0.20:9999",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkpTL1RZc0pobitQNW5ScHQ1Sjhud3ArRVFhcmtxRVk0Z3BNZFBTMWNZTmdvR0NWSG5ia2RjWEJBNVMxY043WVR5aFB3RWpHU3BPWHN2ME9TRjdDekVWTll1SWttWUJTakJxaGRsV0doUHFyTFVSaGpQMEZycVd1Wm52Z0xMYjZoRlRPa1RDSjlkckVFbVIrbW1wV2IyVkh4N2NlelBuY01mQy84M0hPckk1QmNEeGhjUDdKYzFlL25SQU5xaVRhK1VaMXRCenZjaFNaUkg4MUVOcmIyOVY4ZkNWVnhIdmdZVE5qOEpBS2IzN0E4V0N6QTEvSkk0UTdvY0lrVVZhUHR4OVc0bzE5OGhaNXArTCtacUdCNE0rb0JuYllZekV6V3FDTVdDWUZuIiwiaWF0IjoxNzcwNzI5NjQwLCJleHAiOjE3NzA3MzMyNDAsImp0aSI6ImFjYzoxOjE3NzA3Mjk2NDA2MDg6d2ViIn0.gyiT1cAKZ3qGGCPyv2c_IAD6gD2GfbQ2_JRlFchQY3k",
    "dbopsGetHash": "/api/dbops",
    "dbopsGetRefId": "/api/dbops/save",
    "dbopsCreate": "/api/dbops/create",
    "dbopsUpdate": "/api/dbops/update",
    "dbopsFetch": "/api/dbops/fetch",
    "registerQuery": "/api/query/save",
    "runQuery": "/api/query/run",
    "uploadURL": "/api/files/upload",
    "operation": "update",
  },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40termsandcondition_1.main%401"
    },
    "fields": {
        "title": {
            "label": "Title",
            "group": "Info",
            "required": true
        },
        "category": {
            "label": "Category",
            "group": "Info",
            "type": "select",
            "groupid": "accounts_terms",
            "required": true,
            "options": [
                {
                    "title": "purchase_payment_terms",
                    "value": "purchase_payment_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Purchase Terms",
                    "value": "purchase_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Quotation Terms",
                    "value": "quotations_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Payment Terms",
                    "value": "payment_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Invoices Terms",
                    "value": "invoices_terms",
                    "class": "",
                    "privilege": "*"
                }
            ]
        },
        "terms": {
            "label": "Terms",
            "group": "Info",
            "type": "richtextarea",
            "required": true
        },
        "blocked": {
            "label": "Blocked",
            "group": "Info",
            "type": "select",
            "groupid": "boolean",
            "vmode": "edit",
            "required": true,
            "options": [
                {
                    "title": "False",
                    "value": "false",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "True",
                    "value": "true",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "True",
                    "value": null,
                    "class": null,
                    "privilege": "*"
                }
            ]
        }
    },
    "module_refid": "termsandcondition_1.main",
    "module_type": "forms"
}


export const example1 = {
         "endPoints": {
    "baseURL": "http://192.168.0.20:9999",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Im8vL3psUHRSZys5bzJjNlhVT3h5dlFHYm1keFBubS84QnBRSHAyaTJnR0xKVlpOUUsrUEpnUjBvWWo2djBVZEE2ZGY2Qy9lZFlBWk9QZzJ5OTh0MW9BM0c5eWM1NEZoRTRsWGM5cEF2SzZ4MElMUWFDbjhtMnJOcndVUFFlaU5FUUN2YUZjVUlZSW9zSUdTLzZsYU9zemdpZFZ3bXhPZGxjWEwrM095dkhKelZ2ZFBzNUJ0bHJrdys2WmJob0liSHRFZzZIOWhJSGxYQURRMFpPcHBWOEpJZnVMMDZVdXdyeE92WFhmVXlnZXU4VzZvYjdGNlVCUENZb0kxRFBwR2JSc3YxQVFuZG1MbkVvL3RKUVJxdk5VcTNNajRMKzd4a1NRem9rdUVGIiwiaWF0IjoxNzcxNjY2NTQ3LCJleHAiOjE3NzE2NzAxNDcsImp0aSI6ImFjYzoxOjE3NzE2NjY1NDcxODA6d2ViIn0.Qv9-1imjEU1JKHWRqN1VDx8DUAqtntL_qWWzUIWJo0M",
    "dbopsGetHash": "/api/dbops",
    "dbopsGetRefId": "/api/dbops/save",
    "dbopsCreate": "/api/dbops/create",
    "dbopsUpdate": "/api/dbops/update",
    "dbopsFetch": "/api/dbops/fetch",
    "registerQuery": "/api/query/save",
    "runQuery": "/api/query/run",
    "uploadURL": "/api/files/upload",
    "operation": "update",
  },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40quality.quality_mpr%40"
    },
    "forcefill": {
        "guid": "#SESS_GUID#",
        "groupuid": "#SESS_GROUP_NAME#"
    },
    "gotolink": "infoview/quality.quality_mpr/{hashid}",
    "fields": {
        "company_code_id": {
            "label": "Company",
            "type": "select",
            "required": true,
            "width": 4,
            "ajaxchain": [
                {
                    "target": "sector_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40quality.quality_mpr%40fields.company_code_id.ajaxchain.0"
                    }
                }
            ],
            "options": [
                {
                    "title": "Company",
                    "value": 1
                },
                {
                    "title": "WEL-JV",
                    "value": 2
                },
                {
                    "title": "WMEL-JV",
                    "value": 3
                }
            ]
        },
        "sector_id": {
            "label": "Sector",
            "type": "select",
            "required": true,
            "width": 4,
            "ajaxchain": {
                "target": "project_function_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40quality.quality_mpr%40fields.sector_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "project_function_id": {
            "label": "Project Function",
            "type": "select",
            "required": true,
            "width": 4,
            "options": []
        },
        "mpr_month": {
            "label": "MPR Month",
            "type": "month",
            "required": true,
            "width": 4
        },
        "mpr": {
            "label": "MPR",
            "type": "select",
            "groupby": "mpr_name",
            "required": true,
            "width": 4,
            "ajaxchain": {
                "target": "sub_header",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40quality.quality_mpr%40fields.mpr.ajaxchain.0"
                }
            },
            "options": [
                {
                    "title": "Tests",
                    "value": "Tests"
                },
                {
                    "title": "Test ",
                    "value": "Test "
                }
            ]
        },
        "sub_header": {
            "label": "Sub Header",
            "type": "select",
            "required": false,
            "width": 4,
            "autocomplete": {
                "target": "weightage,is_code_refrence,frequency",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40quality.quality_mpr%40fields.sub_header.autocomplete.0"
                }
            },
            "options": []
        },
        "weightage": {
            "label": "Weightage",
            "type": "number",
            "required": false,
            "width": 4
        },
        "is_code_refrence": {
            "label": "Is Code Refrence",
            "type": "text",
            "required": false,
            "width": 4
        },
        "frequency": {
            "label": "Frequency",
            "type": "text",
            "required": false,
            "width": 4
        },
        "section": {
            "label": "Section",
            "type": "select",
            "groupid": "section_master",
            "required": false,
            "width": 4,
            "options": [
                {
                    "title": "KIYAAN",
                    "value": "kiyaan",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "RSDCPL",
                    "value": "rsdcpl",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "SPL",
                    "value": "spl",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "TEJAS",
                    "value": "tejas",
                    "class": null,
                    "privilege": "*"
                }
            ]
        }
    },
    "infoview": {
        "template": "cards"
    },
    "module_refid": "quality.quality_mpr",
    "module_type": "forms"
}