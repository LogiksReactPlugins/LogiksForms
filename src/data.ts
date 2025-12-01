const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiak4yVzRWUWtnblRuSXNZb2NCYUtqWk9EUmR0M0pnK002VGQzR2t5dllsRmJnVldzVnU3OVRqdHZNSDZmcXdaWlhFTkVuNTBJemFqa1g5QkZxV3NQbWsvQTFFTDMwcVVpQndCNytRZ1VqNXNLYlIxdEdVV1V4TnU3a3FyQ3hXVjd2RmthZlBrNXgvNnhhTWR5TUg2RmVHRTdydz09IiwidGltZXN0YW1wIjoxNzYzMzgwMjcwLCJleHAiOm51bGwsImlhdCI6MTc2MzM4MDI3MH0.l7CGpKn1Q4SgIjQX8-t7rSp_cPEO8hbutfT89uhVOxA";
const AuthKey = "g0MxEf0uh7vr";

export const example1 = {
    // "template":"accordion",
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