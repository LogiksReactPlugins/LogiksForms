

export const example10 = {
       "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkVLZzNZbWRybWUwbzN2Z1Z1UFg0WlBJN2E2TXRtQ2RtQ0FRY1hUcExMT0RFdERRbldKZjhYZ2YrWU5uQUxVdEhrcmVBTkJsVTdUQVFqSjFoY21YVy9ndnp5VS9Oc2ZybzJEeXBycFM1bzlvMStrbmpBaTFXTGhTQUgrNFNvQXNjSGx5YzRBMnNkTjZLelpUdXV3MkprRTNJZStUU0RvVGhhZlZoektNRnZibTJkMGdtRnZBMGF1ME9VQUFyTTNlTlFSUDN3MGRsWGo1VzdjaUxLNjhMQXBZWnV3SGlobXFNNXpqeDc3M2FGZEYrSHVsdFRRMTRFalZwS1hCRkRGMGF0WUNyMStValhHUnVEUUwzRDZRakVZWTNuMWRUcmpzWFV6dGZNeWM9IiwiaWF0IjoxNzY4ODQwOTA2LCJleHAiOjE3Njg4NDQ1MDYsImp0aSI6ImFjYzoxOjE3Njg4NDA5MDY2NDI6d2ViIn0.4-UCiBPzPdffx_gjb4B5vDtXr0nlucNw3RI6kxSWOXI",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run",
        "operation": "create",
        "refid": "1"

    },
  "source": {
    "type": "sql",
    "table": "leads_tbl"
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
  "gotolink": "infoview@lead.main_view/{hashid}",
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

