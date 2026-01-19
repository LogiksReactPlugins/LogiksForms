

export const example11 = {

    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImJGZ1lRbnJ3U3FwYU9YL2diblhJMElrZnRhTHdxWitEZy9kNWY4Z2VwU2FPQWJSR0ljWHFDN2xiQVp4VkxtMER5VU95SmlLZWZJN082STlPTzJvOTFSZ3hHME96Tm9xR0tEQlh5eG9wVStBUGl2RUVlaTRIZEJsNkF6WnVlMk83alA2WkpST3R6RUc1K3JaVGd3WElucFI0OVMveGxELzZHT3BsY1VUZ3pXLzQ3djdHNXp4VHhiNGhIOGVIdlJpWHYzenVGVWZpKzBiRnBtZU9ETlBkSGgyWUcvVWhnbG1GRHJjUG1BTTljNUlYL1JlTWhBTjV2ek83NEFITkc1Yk1nNTJSM1RMT0VpY0oxWHR3NG5pRVVvVXc5cTl2MGlqYmZMb0ppZmc9IiwiaWF0IjoxNzY4ODMyODcwLCJleHAiOjE3Njg4MzY0NzAsImp0aSI6ImFjYzoxOjE3Njg4MzI4NzAxMTQ6d2ViIn0.AxackFDiHo5stS5zizqAcnLcek73hH3-HKQBvwH5obk",
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
        "dbopsid": "forms%40masr.observation%40"
    },
  "fields":{
    "company_code_id": {
        "label": "Company",
        "type": "select",
        "required": true,
        "no-option": "Select Company",
        "width": 4,
        "ajaxchain": [
            {
                "target": "spv_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40masr.observation%40fields.company_code_id.ajaxchain.0"
                }
            },
            {
                "target": "sector_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40masr.observation%40fields.company_code_id.ajaxchain.1"
                }
            }
        ],
        "options": [
            {
                "title": "WEL",
                "value": 1
            },
            {
                "title": "WMEL",
                "value": 2
            }
        ]
    },
    "spv_id": {
        "label": "SPV",
        "type": "select",
        "no-option": "Select SPV",
        "required": true,
        "width": 4,
        "options": []
    },
    "sector_id": {
        "label": "Sector",
        "type": "select",
        "required": true,
        "no-option": "Select Sector",
        "width": 4,
        "ajaxchain": {
            "target": "project_function_id",
            "src": {
                "type": "sql",
                "queryid": "forms%40masr.observation%40fields.sector_id.ajaxchain.0"
            }
        },
        "options": []
    },
    "project_function_id": {
        "label": "Project Function ",
        "type": "select",
        "no-option": "Select Project Function",
        "required": true,
        "width": 4,
        "ajaxchain": {
            "target": "location_id",
            "src": {
                "type": "sql",
                "queryid": "forms%40masr.observation%40fields.project_function_id.ajaxchain.0"
            }
        },
        "options": []
    },
    "location_id": {
        "label": "Location",
        "type": "select",
        "required": true,
        "no-option": "Select Location",
        "width": 4,
        "options": []
    },
    "date": {
        "label": "Date",
        "type": "date",
        "required": true,
        "width": 4
    },
    "category": {
        "label": "Category",
        "type": "select",
        "groupid": "masr_category",
        "search": true,
        "required": true,
        "width": 4,
        "options": [
            {
                "title": "Pre Audit Observation",
                "value": "pre_audit_observation",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "Site Visit Observation",
                "value": "site_visit_observation",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "Other Observations",
                "value": "other_observations",
                "class": null,
                "privilege": "*"
            }
        ]
    },
    "priority": {
        "label": "Priority",
        "type": "select",
        "groupid": "masr_priority",
        "search": true,
        "required": true,
        "width": 4,
        "options": [
            {
                "title": "High",
                "value": "high",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "Medium",
                "value": "medium",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "Low",
                "value": "low",
                "class": null,
                "privilege": "*"
            }
        ]
    },
    "management_review": {
        "label": "Management Review",
        "type": "select",
        "default": "PM/PO",
        "groupid": "management_review",
        "required": true,
        "multiple": true,
        "search": false,
        "width": 4,
        "options": [
            {
                "title": "PM/PO (disabled)",
                "value": "pm_po_disabled",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "CEO",
                "value": "ceo",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "MD",
                "value": "md",
                "class": null,
                "privilege": "*"
            }
        ]
    },
    "sub_contractor": {
        "label": "Sub Contractor",
        "type": "text",
        "required": false,
        "width": 4
    },
    "assignee": {
        "label": "Assignee / Responsibility",
        "type": "select",
        "search": true,
        "orderby": "name asc",
        "required": true,
        "width": 4,
        "options": [
            {
                "title": "Admin",
                "value": "admin"
            },
            {
                "title": "Aniket Birje",
                "value": "aniket.birje"
            },
            {
                "title": "Mathan",
                "value": "manthan"
            },
            {
                "title": "Pramod",
                "value": "pramod"
            },
            {
                "title": "Shivraj",
                "value": "shivraj"
            }
        ]
    },
    "mail_cc_user": {
        "label": "Mail CC Users",
        "type": "select",
        "orderby": "name asc",
        "required": false,
        "multiple": true,
        "search": true,
        "width": 4,
        "options": [
            {
                "title": "Admin",
                "value": "admin"
            },
            {
                "title": "Aniket Birje",
                "value": "aniket.birje"
            },
            {
                "title": "Mathan",
                "value": "manthan"
            },
            {
                "title": "Pramod",
                "value": "pramod"
            },
            {
                "title": "Shivraj",
                "value": "shivraj"
            }
        ]
    },
    "attachment": {
        "label": "Observation Photo / Attachment",
        "type": "file",
        "required": false,
        "width": 4
    },
    "status": {
        "label": "Status",
        "type": "select",
        "groupid": "masr_status",
        "search": true,
        "required": true,
        "width": 4,
        "options": [
            {
                "title": "Open",
                "value": "open",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "Close",
                "value": "close",
                "class": null,
                "privilege": "*"
            },
            {
                "title": "WIP",
                "value": "wip",
                "class": null,
                "privilege": "*"
            }
        ]
    },
    "reference": {
        "label": "Reference",
        "type": "text",
        "required": false,
        "width": 4
    },
    "description": {
        "label": "Description / Particulars",
        "type": "richtextarea",
        "required": false,
        "width": 12
    },
    "observation": {
        "label": "Brief of Observation",
        "type": "richtextarea",
        "required": false,
        "width": 12
    }
},
    "infoview": {
        "template": "cards"
    },
    "module_refid": "masr.observation",
    "module_type": "forms"
}