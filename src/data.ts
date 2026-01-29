

export const example10 = {
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
  "source": {
    "type": "sql",
    "dbopsid": "forms%40quality.quality_training%403"
  },
  template: "tabs",
  "forcefill": {
    "guid": "#SESS_GUID#",
    "groupuid": "#SESS_GROUP_NAME#"
  },
  "gotolink": "infoview/quality.quality_training/{hashid}",
  "fields": {
    "company_code_id": {
      "group": "Info",
      "label": "Company",
      "type": "select",
      "no-option": "Select Company",
      "required": true,
      "width": 4,
      persistent: true,
      "ajaxchain": [
        {
          "target": "sector_id",
          "src": {
            "type": "sql",
            "queryid": "forms%40quality.quality_training%40fields.company_code_id.ajaxchain.0"
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
    "sector_id": {
      "group": "common",
      "label": "Sector",
      "type": "select",
      "no-option": "Select Sector",
      "required": true,
      "width": 4,
      "ajaxchain": {
        "target": "project_function_id",
        "src": {
          "type": "sql",
          "queryid": "forms%40quality.quality_training%40fields.sector_id.ajaxchain.0"
        }
      },
      "options": []
    },
    "project_function_id": {
      "group": "Project",
      "label": "Project Function ",
      "type": "select",
      "required": true,
      "width": 4,
      "no-option": "Select Project Function",
      "ajaxchain": {
        "target": "location_id",
        "src": {
          "type": "sql",
          "queryid": "forms%40quality.quality_training%40fields.project_function_id.ajaxchain.0"
        }
      },
      "options": []
    },
    "location_id": {
      "label": "Location",
      "type": "select",
      "no-option": "Select Location",
      "required": true,
      "width": 4,
      "options": [],
      "group": "Info"
    },
    "training_date": {
      "group": "Info",
      "label": "Training Date",
      "type": "date",
      "required": true,
      "width": 4
    },
    "training_duration_min": {
      "group": "Info",
      "label": "Training Duration (Min)",
      "type": "number",
      "onChange": "calculateManHours",
      "required": true,
      "width": 4
    },
    "participant_count": {
      "group": "Project",
      "label": "Participant Count",
      "onChange": "calculateManHours",
      "type": "number",
      "required": true,
      "width": 4
    },
    "training_man_hours": {
      "group": "Project",
      "label": "Training Man Hours",
      "type": "number",
      "disabled": true,
      "required": false,
      "width": 4
    },
    "training_conducted_by": {
      "group": "Project",
      "label": "Conducted By",
      "type": "autocomplete",
      "required": true,
      "width": 4,
      "queryid": "forms%40quality.quality_training%40undefined"
    },
    "trainer": {
      "group": "Project",
      "label": "Trainer",
      "type": "select",
      "groupid": "traning_trainer",
      "required": true,
      "width": 4,
      "options": [
        {
          "title": "Internal",
          "value": "internal",
          "class": null,
          "privilege": "*"
        },
        {
          "title": "External",
          "value": "external",
          "class": null,
          "privilege": "*"
        }
      ]
    },
    "category": {
      "group": "Project",
      "label": "Category",
      "type": "select",
      "groupid": "traning_category",
      "required": true,
      "width": 4,
      "options": [
        {
          "title": "On Site",
          "value": "On_site",
          "class": null,
          "privilege": "*"
        },
        {
          "title": "Class Room",
          "value": "class_room",
          "class": null,
          "privilege": "*"
        },
        {
          "title": "Mock Drill",
          "value": "mock_drill",
          "class": null,
          "privilege": "*"
        }
      ]
    },
    "section": {
      "group": "Project",
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
    },
    "training_photograph": {
      "group": "Project",
      "label": "Training Photograph (Max. Size:10MB )",
      "type": "file",
      "required": false,
      "width": 4
    },
    "training_attendance_scan": {
      "label": "Training Attendance Scan (Max. Size:10MB )",
      "type": "avatar",
      "group": "common",
      "required": false,
      "width": 4
    }
  },
  "infoview": {
    "template": "cards",
    "groups": {
      "training_topics": {
        "label": "Training Topics",
        "type": "module",
        "src": "infoviewTable",
        "vmode": "edit",
        "config": {
          "type": "sql",
          "uimode": "grid",
          "uiswitcher": false,
          "policy_create": "datahub.quality.create",
          "policy_view": "datahub.quality.access",
          "policy_delete": "quality.delete.access",
          "policy_update": "quality.update.access",
          "toolbar": {
            "search": true,
            "print": false,
            "export": false,
            "email": false
          },
          "colkey": "quality_training_id",
          "form": {
            "source": {
              "type": "sql",
              "dbopsid": "forms%40quality.quality_training.infoview.training_topics%40"
            },
            "forcefill": {
              "guid": "#SESS_GUID#",
              "created_by": "#SESS_USER_ID#",
              "quality_training_id": "#refid#"
            },
            "fields": {
              "training_topics": {
                "label": "Training Topics",
                "type": "textarea",
                "required": true,
                "width": 12
              }
            }
          },
          "datagrid": {
            "training_topics": {
              "label": "Training Topics",
              "searchable": true
            }
          },
          "actions1": {
            "addInfoRecord": {
              "label": "Add Record"
            }
          },
          "buttons": {
            "editRecord": {
              "label": "Edit Record",
              "icon": "fa fa-pen"
            },
            "deleteRecord": {
              "label": "Delete Record",
              "icon": "fa fa-trash text-red-500"
            }
          },
          "queryid": "forms%40quality.quality_training.infoviewTable.training_topics%40infoview.groups.training_topics"
        },
        "width": 12
      }
    }
  },
  "script": "ZnVuY3Rpb24gc2V0TmF0aXZlVmFsdWUoZWxlbWVudCwgdmFsdWUpIHsKICBjb25zdCB2YWx1ZVNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoCiAgICB3aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsCiAgICAidmFsdWUiCiAgKS5zZXQ7CgogIHZhbHVlU2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwoKICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCJpbnB1dCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7Cn0KCmZ1bmN0aW9uIGNhbGN1bGF0ZU1hbkhvdXJzKCkgewogIGNvbnN0IGR1cmF0aW9uID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ0cmFpbmluZ19kdXJhdGlvbl9taW4iKT8udmFsdWUpIHx8IDA7CiAgY29uc3QgcGFydGljaXBhbnQgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhcnRpY2lwYW50X2NvdW50Iik/LnZhbHVlKSB8fCAwOwoKICBjb25zdCBtYW5Ib3VycyA9IGR1cmF0aW9uICogcGFydGljaXBhbnQ7CiAKICBjb25zdCBtYW5Ib3Vyc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRyYWluaW5nX21hbl9ob3VycyIpOwogIGlmIChtYW5Ib3Vyc0lucHV0KSB7CiAgICBzZXROYXRpdmVWYWx1ZShtYW5Ib3Vyc0lucHV0LCBtYW5Ib3Vycyk7CiAgfQp9Cgo=",
  "module_refid": "quality.quality_training",
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
            "required": true
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
            "method": {
                "name": "getCountrySelector",
                "valuefield": "default",
                "": false
            },
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