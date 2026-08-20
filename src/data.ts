

export const example10 = {
      "endPoints": {
        "baseURL": "https://welapp.dev2.silkdemo.in",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Ik5lZnFqbnYvbmdVZUdWZTRHUDRnZWpmTWxCdVJsR09mZmhOZmgrNyt2UmRGK2ZOQi81LzNldDd6WmExSnloUmxOSTByWUhGb3JCcnh0R3lobHNQSUJoZVAvNUQvRFpZdU05bXdRcUpFdGpJZlRsQitPQk82L21ETkhyK0t5STdPazZxa1BnakMrTitlV1pXYmlyNU9hYzBabmpJdFBmWFI3VkkwUHpQL2VheDdUVXhuaEdNQ2pZTCsyRVZBd0dlTkZRdmQwbjlvWWJqS0N4Y1d0RnhqdDZrZ1dmcWwzTUN4dHE5eDIvajZ4QTJrRFlFU0hBPT0iLCJpYXQiOjE3ODcyMTkwMzIsImV4cCI6MTc4NzIyMjYzMiwianRpIjoiYWNjOjE6MTc4NzIxOTAzMjAyMjp3ZWIifQ.inFEBcTNKx2Fpkv9eITEvFTTXhl1o1B4-ZX6uZdzTRs",
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
        "presubmit": [
            "precastTracking.girdenNoValidator"
        ],
        "postsubmit": [
            "precastTracking.girdenNo",
            "precastTracking.updateStatus",
            "precastTracking.Creategirden"
        ]
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40precastTracking.span%4079"
    },
    "forcefill": {
        "guid": "#SESS_GUID#"
    },
    "fields": {
        "company_code_id": {
            "label": "Company/ SPV",
            "type": "select",
            "parameter": "company_code_id",
            "required": true,
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
            "persistent": true,
            "width": 4,
            "options": []
        },
        "sector_id": {
            "label": "Sector",
            "no-option": "Select Sector",
            "type": "select",
            "parameter": {
                "sector_id": "sector_id",
                "company_id": "company_code_id"
            },
            "ajaxchain": [
                {
                    "target": "project_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_project_function?type=project&module=precastTracking"
                    }
                }
            ],
            "persistent": true,
            "required": true,
            "width": 4,
            "options": []
        },
        "project_id": {
            "label": "Project",
            "type": "select",
            "required": true,
            "persistent": true,
            "width": 4,
            "no-option": "Select Project",
            "parameter": {
                "company_code_id": "company_code_id",
                "sector_id": "sector_id",
                
            },
            "ajaxchain": [
                {
                    "target": "design_refrence",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/precastTracking/get_design_reference"
                    }
                }
            ],
            "options": []
        },
        "design_refrence": {
            "label": "Structure Name",
            "type": "select",
            "parameter": {
                "project_id": "project_id",
                "sector_id": "sector_id",
                "company_code_id": "company_code_id",
                "design_refrence": "design_refrence"
            },
            "ajaxchain": [
                {
                    "target": "span_from",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/precastTracking/getSpanByProject"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "work_package": {
            "label": "Work Package",
            "type": "text",
            "hidden": true,
            "disabled": true,
            "required": false,
            "width": 6
        },
        "span_from": {
            "label": "Span From - To",
            "type": "select",
            "ajaxchain": [
                {
                    "target": "gr_no",
                    "parameter": "span_from",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/precastTracking/get_gr_no"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "category": {
            "label": "Girder Category Name",
            "type": "select",
            "parameter": {
                "company_code_id": "company_code_id",
                "sector_id": "sector_id",
                "project_id": "project_id",
                "design_refrence": "design_refrence"
            },
            "source": {
                "type": "api",
                "method": "post",
                "endpoint": "/api/services/precastTracking/get_girder_category"
            },
            "required": true,
            "orderby": "design_tbl.id desc",
            "width": 6,
            "options": []
        },
        "gr_no": {
            "label": "Girder Sequence No",
            "multiple": true,
            "type": "select",
            "required": true,
            "width": 6,
            "options": []
        }
    },
    "module_refid": "precastTracking.span",
    "module_type": "forms"
}


export const example1 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InNpdWsyN2hMOFZ5bzg4bGVmWkxZSk5VQ0R0Zk5Wd3lJaXRtSTBQV0tOUTRKUVFNWDIyL3dNVnJ5MGVCTjBTakNTbm1EMUhaczNmaDQyTHhzRDk1SVV4T09kako0SWNXRi9kclkxV1JwTEdVbjV0TzRtbWpUZ2ZsNHUrMmpqd1paMmVsbEJueFhlYVNjQjgrb29jMXVRTWtXeVQ0QmJWV1ZPY3duN2UwOW9CejlSU2JLOTB0STVPN284eGFWZ2ZObjQ1MEJtZHh4MW4rUFFIell1TEdrbDliT1dNakIyOFRETVZnMTUxUzhDQWwycWowZlg4WWZjeWRyVWVTc2RmL1ErWTl0bUFUYVQ5ZWp1VURFMUp1YTVBcSthbm1WZS83bGhDK3NacE16IiwiaWF0IjoxNzc0MzU2MTAzLCJleHAiOjE3NzQzNTk3MDMsImp0aSI6ImFjYzoxOjE3NzQzNTYxMDM1OTE6d2ViIn0.Jor_WFCdEVAymMpHukMZ-amLT3TSaH_3_2H719GbWkM",
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
