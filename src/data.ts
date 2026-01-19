

export const example10 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IlZpdjhWT09VNVFycUpOSWN1UTViSWdJK1gvN1BkcWNjeENWS2hxUHl3TTBsNUJDQnJJSVVib0Fyam1kaFhsdHZyYWx3SGJ3NnRnQ2pYV05XcER2RHp4ZDA5MjUweXNUQjRPL0Y1S2J6WFdMNTRicnRjcmdkU1l1QnBwSHI0MGV2QjRZQ0Y2S1Jsdk5EVlhqZTJIVU9PdWFxNzFqWTRWVEJpbTk0U1dHUXVPdG5sRGRsVEtZRFdCYVBRQ3Z4Q29Fb0FyOXl5aEtNUGtjQ3B1MG5SODlaRERzd211bGN0M24zTlhYQ3NKdlowRloxb3VLaktLYmxVYWdaa0h6K1A5aUNRK3NERU5rRlNjWkxINS9STElnZEVPZ0FHbWhVeUZJUThZbVlDV0E9IiwiaWF0IjoxNzY4ODEwMzU0LCJleHAiOjE3Njg4MTM5NTQsImp0aSI6ImFjYzoxOjE3Njg4MTAzNTQ4NzM6d2ViIn0.WssYBWYeZnHheYJkxd4JN3GYV1uWTL3_hQ2O3oXIXh8",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run",
        "operation": "edit",
        "refid":"1"

    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40hse.external_observations%40"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "fields": {
        "company_code_id": {
            "label": "Company",
            "type": "dataSelectorFromTable",
            "required": true,
            "width": 4,
            method:"abc",

            "ajaxchain": [
                {
                    "target": "spv_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40hse.external_observations%40fields.company_code_id.ajaxchain.0"
                    }
                },
                {
                    "target": "sector_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40hse.external_observations%40fields.company_code_id.ajaxchain.1"
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
            "required": true,
            "width": 4,
            "options": []
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
                    "queryid": "forms%40hse.external_observations%40fields.sector_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "project_function_id": {
            "label": "Project Function ",
            "type": "select",
            "required": true,
            "width": 5,
            "ajaxchain": {
                "target": "location_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40hse.external_observations%40fields.project_function_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "location_id": {
            "label": "Location",
            "type": "select",
            "required": true,
            "width": 5,
            "options": []
        },
        "month": {
            "label": "Month",
            "type": "select",
            "groupid": "month_name",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "January",
                    "value": "1",
                    "category": "quarter1",
                    "privilege": "*"
                },
                {
                    "title": "February",
                    "value": "2",
                     "category": "quarter1",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "March",
                    "value": "3",
                     "category": "quarter1",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "April",
                    "value": "4",
                     "category": "quarter1",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "May",
                    "value": "5",
                     "category": "quarter2",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "June",
                    "value": "6",
                    "class": null,
                    "category": "quarter2",
                    "privilege": "*"
                },
                {
                    "title": "July",
                    "value": "7",
                    "class": null,
                    "category": "quarter2",
                    "privilege": "*"
                },
                {
                    "title": "August",
                    "value": "8",
                    "class": null,
                    "category": "quarter2",
                    "privilege": "*"
                },
                {
                    "title": "September",
                    "value": "9",
                    "class": null,
                    "category": "quarter3",
                    "privilege": "*"
                },
                {
                    "title": "October",
                    "value": "10",
                    "category": "quarter3",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "November",
                    "value": "11",
                    "class": null,
                     "category": "quarter3",
                    "privilege": "*"
                },
                {
                    "title": "December",
                    "value": "12",
                    "class": null,
                     "category": "quarter3",
                    "privilege": "*"
                }
            ]
        },
        "subject": {
            "label": "Subject",
            "type": "text",
            "required": true,
            "width": 4
        },
        "letter_no": {
            "label": "Letter No",
            "type": "text",
            "required": true,
            "width": 4
        },
        "issued_by": {
            "label": "Issued By",
            "type": "text",
            "required": true,
            "width": 4
        },
        "observation_issued_count": {
            "label": "No. of observation issued",
            "type": "number",
            "required": true,
            "width": 4
        },
        "observation_report_file": {
            "label": "Observation Report",
            "type": "file",
            "width": 4
        },
        "compliance_report_file": {
            "label": "Compliance Report",
            "type": "file",
            "width": 4
        }
    },
    "infoview": {
        "template": "cards",
        "groups": {
            "category_details": {
                "label": "Category Details",
                "type": "module",
                "src": "infoviewTable",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "uiswitcher": false,
                    "policy_create": "hse.create.access",
                    "policy_view": "hse.view.access",
                    "policy_delete": "hse.delete.access",
                    "policy_update": "hse.update.access",
                    "toolbar": {
                        "search": true,
                        "print": false,
                        "export": false,
                        "email": false
                    },
                    "orderby": "hse_observations_external_details.edited_on DESC",
                    "colkey": "hse_observations_external_id",
                    "popup.form": {
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40hse.external_observations%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#",
                            "created_by": "#SESS_USER_ID#",
                            "hse_observations_external_id": "#refid#"
                        },
                        "fields": {
                            "type": {
                                "label": "Type",
                                "type": "dataSelector",
                                "required": true,
                                "groupid": "hse_observations_external_type",
                                "width": 4
                            },
                            "type_issued": {
                                "label": " Issued Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_closed": {
                                "label": "Closed Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_wip": {
                                "label": "Work In Progress Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_not_applicable": {
                                "label": "Not Applicable Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_open": {
                                "label": "Open Count",
                                "type": "number",
                                "width": 4
                            }
                        }
                    },
                    "datagrid": {
                        "id": {
                            "label": "ID",
                            "searchable": true
                        },
                        "type": {
                            "label": "Type",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "type_issued": {
                            "label": " Issued Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_closed": {
                            "label": "Closed Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_wip": {
                            "label": "Work In Progress Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_not_applicable": {
                            "label": "Not Applicable Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_open": {
                            "label": "Open Count",
                            "searchable": true,
                            "sortable": true
                        }
                    },
                    "actions": {
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
                    "queryid": "forms%40hse.external_observations%40infoview.groups.category_details"
                },
                "width": 12
            }
        }
    },
    "module_refid": "hse.external_observations",
    "module_type": "forms"
}