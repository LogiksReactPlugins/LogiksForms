const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoicGtYNjdHNldiVkZ5b2N6RFRia0ZDa1pXSXlvOUY1UUQrdGRWb01RTlJZQldIdDlDSmsyNlBWWHU1TTZpUmFJSndheVdNZ2N3RE5yUlhCOXpVaVg1ZDV4Y2NlZ1RFYTRXSlk4ZXM0N0R3OFJNTDIvMXZIQlFheHZwQjBFQzlJWUdybXJ6dUZMdnl6N2l4UT09IiwidGltZXN0YW1wIjoxNzcwMDA2NDA2LCJleHAiOm51bGwsImlhdCI6MTc3MDAwNjQwNn0.BUB18m4GQkrv6PbqYn7SwQYGOftwBHrPco8kwAhuR08";
const AuthKey = "g0MxEf0uh7vr";

export const example10 = {
     "template":"simple",
    "preload": {
        "helpers": ["countries"]
    },
    "source": {
        "type": "method",
        "method": "getFormData",
        "where": ["userid"]
    },
    "fields": {
        "persona_avatar": {
            "label": "Avatar",
            "group": "info",
            "width": 12
        },
        "persona_code": {
            "label": "Persona Code",
            "group": "info",
            "width": 6
        },
        "persona_name": {
            "label": "Persona Name",
            "group": "info",
            "width": 6
        },
        "persona_group": {
            "label": "Group",
            "group": "info",
            "type": 'select',
            "width": 6,
            "source": {
                "type": 'api',
                "method": "get",
                "url": "http://192.168.0.20:8888/skills/personas/groups",
                "headers": {
                    "appid": "app01",
                    "Content-Type": "application/json",
                    'Auth-Token': token || "",
                    "Authorization": `Bearer ${AuthKey}`
                },
            },
            "valueKey": "persona_group",
            "labelKey": "persona_group"
        },
        "persona_type": {
            "label": "Persona Type",
            "group": "info",
            "width": 6,
            "type": "dataMethod",
            "method": "getPersonaTypesList",
        },
        "persona_descs": {
            "label": "Description",
            "group": "info",
            "type": "textarea",
            "width": 12
        },
        "persona_howtouse": {
            "label": "How to use",
            "group": "info",
            "type": "textarea",
            "width": 12
        },
        "user_variables": {
            "label": "User Variables",
            "group": "info",
            "type": "json",
            "formatter": "object",
            "width": 12
        },
         "datastore_id": {
            "label": "Datastore Id",
            "group": "Data Store",
            "formatter": "number",
            "width": 6
        },
        "datastore_strategy": {
            "label": "Datastore Strategy",
            "group": "Data Store",
            "width": 6,
            "type": "select",
            "options": {
                "single": "Single",
                "merge": "Merge"
            }
        },
        "datastore_params": {
            "label": "Datastore Params",
            "group": "Data Store",
            "type": "textarea",
            "width": 12
        },
        "prompt_engine": {
            "label": "Prompt Engine",
            "group": "Prompt Engine",
            "type": 'select',
            "source": {
                "type": 'method',
                "method": "getEngineList"
            },
            "width": 12
        },
        "persona_prompt": {
            "label": "Persona Prompt",
            "group": "Prompt Engine",
            "type": "textarea",
            "width": 12
        },
        "persona_prompt_template": {
            "label": "Persona Prompt Template",
            "group": "Prompt Engine",
            "type": "textarea",
            "width": 12
        },
        "persona_refurl": {
            "label": "Persona Refurl",
            "group": "Details",
            "type": "textarea",
            "width": 12
        },
        "persona_llm": {
            "label": "Persona LLM",
            "group": "Details",
            "type": "select",
            "source": {
                "type": 'api',
                "method": "post",
                "url": "http://192.168.0.20:8888/myapps/models",
                "headers": {
                    "appid": "app01",
                    "Content-Type": "application/json",
                    'Auth-Token': token || "",
                    "Authorization": `Bearer ${AuthKey}`
                },
            },
            "valueKey": "llmcode",
            "labelKey": "llmcode",
            "width": 12
        },
        "studio_editors": {
            "label": "Studio Editors",
            "group": "Details",
            "width": 6
        },
        "studio_testers": {
            "label": "Studio Testers",
            "group": "Details",
            "width": 6
        },
        "tags": {
            "label": "Tags",
            "group": "Details",
            "type": "textarea",
            "width": 12
        },
        "enable_optimizer": {
            "label": "Enable Optimizer",
            "group": "Details",
            "width": 6,
            "type": "select",
            "options": {
                "true": "True",
                "false": "False"
            },
        },
        "persona_uikit": {
            "label": "Persona UI Kit",
            "group": "Details",
            "width": 6
        },
        "persona_preform": {
            "label": "Persona Preform",
            "group": "Details",
            "type": "textarea",
            "width": 12
        },
        "available_actions": {
            "label": "Available Actions",
            "type": "checkbox",
            "multiple": true,
            "source": {
                "type": 'api',
                "method": "post",
                "url": `http://192.168.0.20:8888/admin/actions`,
                "headers": {
                    "appid": "app01",
                    "Content-Type": "application/json",
                    'Auth-Token': token || "",
                    "Authorization": `Bearer ${AuthKey}`
                },
            },
            "valueKey": "action_name",
            "labelKey": "action_name",
            "group": "Details",
            "width": 6
        },
        // causing error in LRC
        "available_tools": {
            "label": "Available Tools",
            "type": "checkbox",
            "multiple": true,
            "source": {
                "type": 'api',
                "method": "get",
                "url": `http://192.168.0.20:8888/tools`,
                "headers": {
                    "appid": "app01",
                    "Content-Type": "application/json",
                    'Auth-Token': token || "",
                    "Authorization": `Bearer ${AuthKey}`
                },
            },
            "valueKey": "name",
            "labelKey": "name",
            "group": "Details",
            "width": 6
        },
        "rating": {
            "label": "Rating",
            "group": "Details",
            "formatter": "number",
            "width": 4
        },
        "visibility": {
            "label": "Visibility",
            "group": "Details",
            "width": 4,
            "type": "select",
            "options": {
                "public": "public",
                "private": "private"
            }
        },
        "status": {
            "label": "Status",
            "required": true,
            "group": "Details",
            "width": 4,
            "type": "select",
            "options": {
                "published": "published",
                "draft": "draft"
            }
        }
    }
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