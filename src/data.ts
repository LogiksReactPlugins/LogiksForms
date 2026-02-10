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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkpONWIxeUY4OE5PNy9GWkNiZVFhZ2RlR0ZGbU5QbnVBWmhxR2haOG51Y0Z2NFFqYzVGVE81clZBeWdwaVZPNkVPcEZjaEhWbDROTHcwbnRxWkYwM1FnTWlEcEpzUFBsQmpUb1dzekp4b3IvZElUQnZzWnE5emtWbUhXRWZjNGdMVk1CdzNWMnEwTzRkY2IrNnR4UG4wMlJDbm94TjVLR3NWU003cnEwNjdIS3lrSEx3R2thbWN5WHozaUMzZ25sK0VXbEJia1lscnlZUHdyS1A5Rk4wV3E1aUtCdk1hVzVwc0pMSWZIK1JHMXcwTjZrQkpjaXNEV2VWNWk5UUtUYU1VVWxJcGlZalpGNVllR2Q0RTZkcktYVHhCWVBRTDNnK3ZiZitsTDg9IiwiaWF0IjoxNzY5NjY2NzIxLCJleHAiOjE3Njk2NzAzMjEsImp0aSI6ImFjYzoxOjE3Njk2NjY3MjE3NDY6d2ViIn0.g4NtGuLaICdUyGhCqTNbf4DtH9P4dF8JjZJPR3F68Zg",
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
    "hooks": {
        "preload": {
            "helpers": [
                "countries"
            ]
        },
        "postsubmit": {
            "method": [
                "updateUserMetas"
            ]
        }
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40userManager.users%401"
    },
    "DEBUG": true,
    "fields": {
        "userid": {
            "label": "Login ID",
            "type":"richtextarea",
            "required": true,
            width:12
        },
        "name": {
            "label": "Full Name",
            "required": true
        },
        "email": {
            "label": "E-mail",
            "type": "email",
            "required": true,
            "validate": {
                "email": true
            }
        },
        "mobile": {
            "label": "Mobile",
            "required": true,
            "validate": {
                "mobile": true
            }
        },
        "remarks": {
            "label": "Description/Notes",
            "type": "textarea",
            "width": "12",
            "validate": {}
        },
        "organization_name": {
            "label": "Organization Name",
            "group": "organization"
        },
        "organization_position": {
            "label": "Organization Position",
            "group": "organization"
        },
        "organization_email": {
            "label": "Organization Email",
            "group": "organization",
            "type": "email"
        },
        "address": {
            "label": "Address",
            "group": "address"
        },
        "region": {
            "label": "Region/State",
            "group": "address"
        },
        "country": {
            "label": "Country",
            "group": "address",
            "type": "select",
            "method": "getCountrySelector",
            "options": []
        },
        "zipcode": {
            "label": "Zipcode/PIN Code",
            "group": "address"
        },
        "tags": {
            "label": "Tags",
            "group": "others",
            "type": "tags"
        },
        "gender": {
            "label": "Gender",
            "group": "others",
            "type": "select",
            "options": {
                "": "false",
                "male": "Male",
                "female": "Female"
            }
        },
        "dob": {
            "label": "Date Of Birth",
            "group": "others",
            "type": "date"
        },
        "blocked": {
            "label": "Blocked",
            "group": "others",
            "required": true,
            "type": "select",
            "options": {
                "true": "Blocked",
                "false": "Not Blocked"
            }
        },
        "guid": {
            "label": "GUID",
            "group": "admin",
            "required": true
        },
        "privilegeid": {
            "label": "Privlege ID",
            "group": "admin",
            "required": true,
            "type": "select",
            "orderby": "name asc",
            "options": [
                {
                    "title": "admin",
                    "value": 5
                },
                {
                    "title": "root",
                    "value": 1
                },
                {
                    "title": "Testing",
                    "value": 6
                },
                {
                    "title": "wf_l1",
                    "value": 7
                },
                {
                    "title": "wf_l2",
                    "value": 8
                }
            ]
        },
        "accessid": {
            "label": "Access ID",
            "group": "admin",
            "required": true,
            "type": "select",
            "orderby": "name asc",
            "options": [
                {
                    "title": "All Sites",
                    "value": 1
                }
            ]
        },
        "groupid": {
            "label": "Group/Team",
            "group": "admin",
            "required": true,
            "type": "select",
            "orderby": "group_name asc",
            "options": [
                {
                    "title": "Default",
                    "value": 1
                },
                {
                    "title": "group1111",
                    "value": 7
                },
                {
                    "title": "grp name",
                    "value": 3
                },
                {
                    "title": "grp1 name",
                    "value": 4
                },
                {
                    "title": "grp2 name e",
                    "value": 5
                },
                {
                    "title": "Silk",
                    "value": 2
                },
                {
                    "title": "Test",
                    "value": 6
                }
            ]
        },
        "roles": {
            "label": "Roles",
            "group": "admin",
            "required": true,
            "multiple": true,
            "type": "dataSelectorFromTable",
            "orderby": "name asc",
            "options": [
                {
                    "title": "Admin",
                    "value": 1
                },
                {
                    "title": "Business",
                    "value": 3
                },
                {
                    "title": "Manager",
                    "value": 2
                },
                {
                    "title": "quality1",
                    "value": 7
                },
                {
                    "title": "quality2",
                    "value": 8
                },
                {
                    "title": "user",
                    "value": 5
                },
                {
                    "title": "User - updated",
                    "value": 4
                }
            ]
        },
        "refid": {
            "label": "User Reference Code",
            "group": "admin"
        },
        "registered_site": {
            "label": "User Registered Site",
            "group": "admin",
            "type": "select",
            "orderby": "name asc",
            "options": [
                {
                    "title": "All Sites",
                    "value": 1
                }
            ]
        },
        "expires": {
            "label": "Account Expires On",
            "group": "security",
            "required": true,
            "type": "date"
        },
        "security_policy": {
            "label": "User Security Policy",
            "group": "security",
            "required": true,
            "type": "select",
            "options": {
                "": "false",
                "open": "Open",
                "closed": "Closed"
            }
        },
        "privacy": {
            "label": "Data Privacy Policy",
            "group": "security",
            "required": true,
            "type": "select",
            "options": {
                "": "false",
                "public": "Public",
                "private": "Private",
                "protected": "Protected"
            }
        },
        "geolocation": {
            "label": "Geo Location (For Login Lock)",
            "group": "security"
        },
        "geoip": {
            "label": "Geo IP (For Login Lock)",
            "group": "security"
        }
    },
    "module_refid": "userManager.users",
    "module_type": "forms"
}