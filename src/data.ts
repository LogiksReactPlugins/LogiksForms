const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiak4yVzRWUWtnblRuSXNZb2NCYUtqWk9EUmR0M0pnK002VGQzR2t5dllsRmJnVldzVnU3OVRqdHZNSDZmcXdaWlhFTkVuNTBJemFqa1g5QkZxV3NQbWsvQTFFTDMwcVVpQndCNytRZ1VqNXNLYlIxdEdVV1V4TnU3a3FyQ3hXVjd2RmthZlBrNXgvNnhhTWR5TUg2RmVHRTdydz09IiwidGltZXN0YW1wIjoxNzYzMzgwMjcwLCJleHAiOm51bGwsImlhdCI6MTc2MzM4MDI3MH0.l7CGpKn1Q4SgIjQX8-t7rSp_cPEO8hbutfT89uhVOxA";
const AuthKey = "g0MxEf0uh7vr";

export const example1 = {
    // "template":"accordion",
    "preload": {
        "helpers": ["countries"]
    },
    "endPoints":{
    "baseURL":"http://192.168.0.20:9999",
    "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoxMDEsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6InRlbmFudC0xIiwicm9sZXMiOlsiYWRtaW4iXSwic2NvcGVzIjpbInRlbmFudC0xOm9yZGVyczpyZWFkIiwidGVuYW50LTE6b3JkZXJzOndyaXRlIiwidGVuYW50LTE6ZG9jczpyZWFkIl0sImlwIjoiMTkyLjE2OC4wLjY2IiwiZGV2aWNlVHlwZSI6IndlYiIsImlhdCI6MTc2NTUxOTAzMywiZXhwIjoxNzY1NTIyNjMzLCJqdGkiOiJhY2M6MTAxOjE3NjU1MTkwMzM5NDI6d2ViIn0.AcmNcQlkOaC49UlvCTw37W6w-DjGwUL4fxByVMlNfDE",
    "dbopsGetHash":"/api/dbops",
    "dbopsGetRefId":"/api/dbops/save",
    "dbopsRunQuery":"/api/dbops/create",
    "dbopsFetch":"/api/dbops/fetch",
    "operation":"create"
},
    "source": {
        "type": "method",
        "method": "getFormData"
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
            "type": "select",
            "source": {
                "type": 'method',
                "method": "getPersonaTypesList",
            },
        },
        "persona_descs": {
            "label": "Description",
            "group": "info",
            "type": "json",
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
            "type": "autocomplete",
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


export const example2 = {
     "endPoints":{
    "baseURL":"http://192.168.0.20:9999",
    "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoxMDEsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6InRlbmFudC0xIiwicm9sZXMiOlsiYWRtaW4iXSwic2NvcGVzIjpbInRlbmFudC0xOm9yZGVyczpyZWFkIiwidGVuYW50LTE6b3JkZXJzOndyaXRlIiwidGVuYW50LTE6ZG9jczpyZWFkIl0sImlwIjoiMTkyLjE2OC4wLjY2IiwiZGV2aWNlVHlwZSI6IndlYiIsImlhdCI6MTc2NTUxOTAzMywiZXhwIjoxNzY1NTIyNjMzLCJqdGkiOiJhY2M6MTAxOjE3NjU1MTkwMzM5NDI6d2ViIn0.AcmNcQlkOaC49UlvCTw37W6w-DjGwUL4fxByVMlNfDE",
    "dbopsGetHash":"/api/dbops",
    "dbopsGetRefId":"/api/dbops/save",
    "dbopsRunQuery":"/api/dbops/create",
    "dbopsFetch":"/api/dbops/fetch",
    "operation":"create"
},
     
    "source": {
        "type": "method",
        "method": "getFormData"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#",
        "company_id": "#COMP_ID#"
    },
    "actions11": {
        "newContact": {
            "icon": "",
            "label": "Add Client/Company",
            "class": "btn btn-warning pull-left"
        }
    },
    "simpleform": false,
    "buttons": {
        "markAsDeal": {
            "label": "Mark As Deal",
            "icon": "fa fa-check",
            "class": "btnGreen",
            "float": "left",
            "policy": "leadbook.update.access"
        },
        "markAsLost": {
            "label": "Mark As Lost",
            "icon": "fa fa-times",
            "class": "btn btn-primary",
            "policy": "leadbook.update.access"
        },
        "markAsJunk": {
            "label": "Mark As Junk",
            "icon": "fa fa-times",
            "class": "btn btn-danger pull-left",
            "policy": "leadbook.update.access"
        },
        "markAsNext": {
            "label": "Next",
            "icon": "fa fa-angle-double-right",
            "class": "btn btn-warning",
            "policy": "leadbook.update.access"
        }
    },
    "gotolink": "infoview/lead.main_view/{hashid}?",
    "script": "lead",
    "fields": {
        "title": {
            "label": "Lead Title / For",
            "group": "Lead Details",
            "required": true
        },
        "broker_name": {
            "label": "Reference From Partner",
            "type": "dataSelectorFromTable",
            "table": "profiletbl_organisation",
            "columns": "organization as title,org_code as value",
            "search": true,
            "group": "Lead Details",
            "no-option": "Select Reference From Partner",
            "autocomplete": {
                "target": "broker_email,broker_mobile,broker_address",
                "src": {
                    "table": "profiletbl_organisation",
                    "columns": "org_mail as broker_email,org_landline as broker_mobile,org_address1 as broker_address",
                    "where": {
                        "org_code": "#refid#"
                    }
                }
            },
            "required": true
        },
        "broker_email": {
            "label": "Reference Email",
            "type": "email",
            "group": "Lead Details",
            "hidden": true
        },
        "broker_mobile": {
            "label": "Reference Mobile",
            "type": "phone",
            "group": "Lead Details",
            "hidden": true
        },
        "broker_address": {
            "label": "Reference Address",
            "type": "textarea",
            "group": "Lead Details",
            "width": 12,
            "hidden": true
        },
        "customer_id": {
            "label": "Client/Company",
            "group": "Customer",
            "type": "dataSelectorFromTable",
            "table": "profiletbl",
            "columns": "full_name as title, id as value",
            "search": true,
            "where": {
                "(type like '%customer%' OR type like '%other%')": "RAW",
                "length(full_name)>0": "RAW"
            },
            "autocomplete123": {
                "target": "contact_name,contact_email,contact_mobile,contact_address,contact_street,contact_city,contact_state,contact_country,contact_zipcode",
                "src": {
                    "table": "profiletbl,profiletbl_address",
                    "columns": "profiletbl.full_name as contact_name,profiletbl.email1 as contact_email,profiletbl.mobile as contact_mobile,profiletbl_address.street as contact_street,profiletbl_address.address as contact_address,profiletbl_address.city as contact_city,profiletbl_address.state as contact_state,profiletbl_address.country as contact_country,profiletbl_address.zipcode as contact_zipcode,profiletbl.full_name as contact_company",
                    "where": {
                        "profiletbl.id": "#refid#",
                        "profiletbl_address.profile_id": "#refid#",
                        "profiletbl_address.address_type": "primary",
                        "profiletbl_address.blocked": "false"
                    }
                }
            },
            "class": "contact_field contact_client",
            "no-option": "Select Client/Company"
        },
        "customer_type": {
            "label": "Client/Company Type",
            "group": "Customer",
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "groupid": "profile_customer_type",
            "default": "old",
            "no-option": "Select Client/Company Type",
            "required": true
        },
        "contact_name": {
            "label": "Contact Name",
            "type": "text",
            "group": "Customer",
            "required": true,
            "class": "contact_field contact_field_mandetory",
            "hidden": false,
            "width": 4
        },
        "contact_email": {
            "label": "Email",
            "type": "email",
            "group": "Customer",
            "required": true,
            "class": "contact_field contact_field_mandetory",
            "hidden": false,
            "width": 4
        },
        "contact_mobile": {
            "label": "Mobile",
            "type": "phone",
            "group": "Customer",
            "required": true,
            "minlength": 10,
            "maxlength": 10,
            "class": "contact_field contact_field_mandetory",
            "hidden": false,
            "width": 4
        },
        "contact_address": {
            "label": "Address",
            "type": "textarea",
            "group": "Customer",
            "class": "contact_field",
            "width": 12,
            "hidden": false
        },
        "contact_street": {
            "label": "Street",
            "type": "text",
            "group": "Customer",
            "class": "contact_field",
            "hidden": false,
            "width": 4
        },
        "contact_city": {
            "label": "City",
            "group": "Customer",
            "class": "contact_field",
            "hidden": false,
            "type": "suggest",
            "width": 4
        },
        "contact_state": {
            "label": "State",
            "type": "suggest",
            "group": "Customer",
            "class": "contact_field",
            "hidden": false,
            "width": 4
        },
        "contact_zipcode": {
            "label": "Zipcode",
            "type": "text",
            "group": "Customer",
            "class": "contact_field",
            "hidden": false,
            "width": 6
        },
        "contact_country": {
            "label": "Country",
            "type": "suggest",
            "groupid": "country",
            "group": "Customer",
            "class": "contact_field",
            "hidden": false,
            "width": 6
        },
        "lead_date": {
            "label": "Lead Date",
            "group": "Lead Details",
            "type": "date",
            "required": true,
            "default": "#SESS_CURRENT_DATE#",
            "width": 6
        },
        "lead_year": {
            "label": "Lead Year",
            "group": "Lead Details",
            "required": true,
            "hidden": true,
            "width": 4
        },
        "net_amount": {
            "label": "Net Amount",
            "group": "Lead Details",
            "type": "text",
            "vmode": "edit",
            "required": true
        },
        "lead_value": {
            "label": "Lead Value",
            "group": "Lead Details",
            "type": "text",
            "required": false
        },
        "lead_priority": {
            "label": "Lead Priority",
            "group": "Lead Details",
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "groupid": "lead_priority",
            "required": true
        },
        "lead_source": {
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "label": "Lead Source",
            "group": "Lead Details",
            "groupid": "leads_source",
            "required": true
        },
        "lead_status": {
            "label": "Lead Status",
            "group": "Lead Details",
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "groupid": "lead_status",
            "no-option": "Select Lead Status",
            "required": true,
            "width": 6
        },
        "lead_type": {
            "label": "Lead Type",
            "group": "Lead Details",
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "groupid": "lead_type",
            "suggest": true,
            "required": true,
            "width": 6
        },
        "enquiry_type": {
            "label": "Enquiry Type",
            "group": "Lead Details",
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "groupid": "lead_enquiry_type",
            "required": true,
            "width": 6
        },
        "marketting_source": {
            "type": "select",
            "options": {
                "chat": "chat",
                "direct": "direct"
            },
            "label": "Marketing Source",
            "group": "Lead Details",
            "groupid": "lead_marketing_source",
            "no-option": "Select Marketing Source",
            "required": true
        },
        "marketting_campaign": {
            "label": "Marketing Campaign",
            "group": "Lead Details",
            "required": true
        },
        "enquiry_product_descs": {
            "label": "Enquiry Details",
            "group": "More",
            "type": "textarea",
            "maxlength": 255,
            "required": true,
            "width": 12
        },
        "created_on": {
            "label": "Created On",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "blocked": {
            "label": "Blocked",
            "group": "Lead Details",
            "type": "select",
            "vmode": "view",
            "required": true,
            "options": {
                "": false,
                "true": "True",
                "false": "False"
            }
        },
        "created_by": {
            "label": "Created By",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "edited_by": {
            "label": "Updated By",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "edited_on": {
            "label": "Updated On",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "enquiry_due": {
            "label": "Delivery Due On",
            "group": "More",
            "type": "date",
            "width": 12
        },
        "open_by": {
            "label": "Open By",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "loginid <> ''": "RAW",
                "length(full_name)>0": "RAW"
            },
            "default": "#SESS_USER_ID#",
            "width": 4
        },
        "assigned_to": {
            "label": "Assigned To",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "loginid <> ''": "RAW",
                "length(full_name)>0": "RAW"
            },
            "default": "#SESS_USER_ID#",
            "width": 4
        },
        "manager": {
            "label": "Manager",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "length(full_name)>0": "RAW"
            },
            "default": "#SESS_REPORTING_TO#",
            "width": 4
        },
        "tags": {
            "label": "Tags",
            "group": "More",
            "type": "tags",
            "width": 12
        },
        "remarks": {
            "label": "Remarks",
            "group": "Lead Details",
            "width": "12",
            "maxlength": 255,
            "type": "textarea"
        },
        "prelead_id": {
            "label": "Prelead ID",
            "group": "More",
            "type": "text",
            "hidden": true,
            "width": 12
        }
    }
}