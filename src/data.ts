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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InRTRjJ5aVgvQkYyckJXV2VZYmZtMGpKSGkrYWp1OHZlN3dMQVdwZ0gxMlA3VVhJU2F0WWtRS1czbzc0OW1obzR4Y2lHOUZDY2FONVdTSUpaSHhkZ0JWWDRVYUlmbGh4NmxwNXppcGNFVjgyVTlyQTVmdXlFa1Bpb3IwaU1aVHN0cjEzNyttWGN1NjJrMnFQREhyRDR6VGl2bWluMXVkWFlQc29rams2VEdPSmkweWZPSSt4KzVxVVYxdUp5M05FYklPRXN1U2laOTdDcUV4YWEzMHgwN0R1V1dsMDM1dDhicTJqVjRNTXNaalVXTUNhUzk5ZE9DM2FweHBBd1JjOVJlTys0TUp1ai80QTJ2YWJhSkw5c2V6VXJPZUJhbjdVQlVackN5cXExVEE9PSIsImlhdCI6MTc3MTg1NDMwNywiZXhwIjoxNzcxODU3OTA3LCJqdGkiOiJhY2M6MToxNzcxODU0MzA3MDkzOndlYiJ9.mPO6W1A8ijoN8T0kzpAPEjYXeZ3vQzaw40kXXAQvBOc",
    "dbopsGetHash": "/api/dbops",
    "dbopsGetRefId": "/api/dbops/save",
    "dbopsCreate": "/api/dbops/create",
    "dbopsUpdate": "/api/dbops/update",
    "dbopsFetch": "/api/dbops/fetch",
    "registerQuery": "/api/query/save",
    "runQuery": "/api/query/run",
    "uploadURL": "/api/files/upload",
    "operation": "create",
  },
        "source": {
            "type": "sql",
            "dbopsid": "forms%40projectfunction.project%40"
        },
        "forcefill": {
            "guid": "#SESS_GUID#",
            "type": "project",
            "edited_by": "#SESS_USER_ID#"
        },
        "fields": {
            "code": {
                "label": "Code",
                "required": true,
                "groupid": "projectfunction",
                "width": 6,
                "type": "text"
            },
            "title": {
                "label": "Title",
                "required": true,
                "width": 6,
                "type": "text"
            },
            "company_id": {
                "label": "Company/ SPV",
                "type": "select",
              
                "source": {
                    "type": "api",
                    "method": "post",
                    "endpoint": "/api/services/eofficeGlobal/get_company"
                },
                "ajaxchain": [
                    {
                        "target": "sector_id",
                        "src": {
                            "type": "api",
                            "method": "post",
                            "endpoint": "/api/services/eofficeGlobal/get_sector"
                        }
                    }
                ],
                "no-option": "Select Company/ SPV",
                "width": 4,
                "options": []
            },
            "sector_id": {
                "label": "Sector",
                "no-option": "Select Sector",
                "type": "select",
                "valueKey": "id",
                "required": true,
                "width": 4,
                "options": []
            },
            "location_id": {
                "label": "Location",
                "type": "select",
                "multiple": true,
                "search": true,
                "required": true,
                "width": 4,
                "options": [
                    {
                        "value": 1,
                        "title": "Begusarai"
                    },
                    {
                        "value": 2,
                        "title": "Mokama"
                    },
                    {
                        "value": 3,
                        "title": "Pune"
                    },
                    {
                        "value": 4,
                        "title": "Shirur"
                    },
                    {
                        "value": 5,
                        "title": "KARAIKAL"
                    },
                    {
                        "value": 6,
                        "title": "KARAIMEDU"
                    },
                    {
                        "value": 7,
                        "title": "MAYILADUTHURA"
                    },
                    {
                        "value": 8,
                        "title": "NAMBUKURUCHI"
                    },
                    {
                        "value": 9,
                        "title": "PUDUCHERRY"
                    },
                    {
                        "value": 10,
                        "title": "Nagapattinam"
                    },
                    {
                        "value": 11,
                        "title": "AURANGABAD"
                    },
                    {
                        "value": 12,
                        "title": "CHHATARPUR"
                    },
                    {
                        "value": 13,
                        "title": "CHUNAR"
                    },
                    {
                        "value": 14,
                        "title": "KAIMUR"
                    },
                    {
                        "value": 15,
                        "title": "MIRZAPUR"
                    },
                    {
                        "value": 16,
                        "title": "MOHANIA"
                    },
                    {
                        "value": 17,
                        "title": "MUGALSARAI"
                    },
                    {
                        "value": 18,
                        "title": "REWA"
                    },
                    {
                        "value": 19,
                        "title": "ROHTAS"
                    },
                    {
                        "value": 20,
                        "title": "SASARAM"
                    },
                    {
                        "value": 21,
                        "title": "VARANASI"
                    },
                    {
                        "value": 22,
                        "title": "Delhi RO"
                    },
                    {
                        "value": 23,
                        "title": "Delhi"
                    },
                    {
                        "value": 24,
                        "title": "Bhandup"
                    },
                    {
                        "value": 25,
                        "title": "Dewas"
                    },
                    {
                        "value": 26,
                        "title": "Dharavi"
                    },
                    {
                        "value": 27,
                        "title": "Panjarapur"
                    },
                    {
                        "value": 28,
                        "title": "Lucknow RO"
                    },
                    {
                        "value": 29,
                        "title": "Bulandashar"
                    },
                    {
                        "value": 30,
                        "title": "Amethi"
                    },
                    {
                        "value": 31,
                        "title": "Jaunpur"
                    },
                    {
                        "value": 32,
                        "title": "Badhoi"
                    },
                    {
                        "value": 33,
                        "title": "Akbarpur"
                    },
                    {
                        "value": 34,
                        "title": "Ambedakar Nagar"
                    },
                    {
                        "value": 35,
                        "title": "Chandauli"
                    },
                    {
                        "value": 36,
                        "title": "Ayodhya"
                    },
                    {
                        "value": 37,
                        "title": "Mumbai HO"
                    },
                    {
                        "value": 38,
                        "title": "Mumbai"
                    },
                    {
                        "value": 39,
                        "title": "Ahmedabad"
                    }
                ]
            },
            "description": {
                "label": "Description",
                "width": 12,
                "type": "textarea"
            },
            "blocked": {
                "label": "Blocked",
                "type": "select",
                "groupid": "boolean",
                "width": 12,
                "vmode": "edit",
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
        "module_refid": "projectfunction.project",
        "module_type": "forms"
    }
