

export const example10 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkRJVkI2Kzh2Ym53NDN3YzhGMFZpRDZlbGpscTlhN0pQMlhrbFgvMnN3b3lrRE0wWTBKYS9FTFpjaHJnc0dnWDZlakgzSW9qK2ZPWFVhUkdtZ0hRT2NyTHpzM3RLUTVXd21Xbk5GcWdNWlZPYXJNWWt2STdqeTUxelVYWmRBcDArbkhyOTZBVUdVbG5VclFzMGJlYitWb3ppWmMrZHFvVjlUQ3dQcEtHajMvMXpPdmY2aVYvYkpJbStrckhqZ201UDE4UFU0WTdqNmJjOExlb0hwUzY3VTMvR2FzQ3Z0R2VZQlJNZitlOUtEeUwxREZ6NGxoR0tkaTNsSWoyZ0s5WEZyQ3FvN3E4YVVqNlFSb24zQm9DT1hGL1JTOUJqQzlqd05oOUk0aENXc3FUdkN4QW4za2tQc3gycHg2VkZaeEUwYVFyVEFsd1F4RjNjWkVCN3JsR0tscVBjR1RuOEgvZzRpOFhYT09uUVd4cUdSYUs4SVZYMUQ5a2hjOXVGZ3dmK2JGN1dobnNWTHQzeEdIZDVjY25FMXNOVEhrbkxiQ1VCVWhCMERPYStiUEEwKy9CUUtTb2hGOUJHTlZTN1l5cTBmY05ITHgwVGpuUzErS0hZK3UvQmFWR2hrdGpxUlpCQ3I1VVpTM25iNzhnRUhBPT0iLCJpYXQiOjE3ODAwNDQ0NTcsImV4cCI6MTc4MDA0ODA1NywianRpIjoiYWNjOjE6MTc4MDA0NDQ1NzE1MDp3ZWIifQ.R8ZTHkRNS4AFIQG5zcOFOJ6XckvIZKIpPWKv9jXJ6js",
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
    "toolbar": {
        "camera": {
            "type": "method",
            "method": "getPANDetails",
            "tooltip": "Capture image",
            "icon": "fa fa-camera",
            "class": "btn-primary"
        },
          "qrcode": {
    "type": "method",
    "method": "getPANDetails",
    "tooltip": "Scan QR",
    "icon": "fa fa-user",
    "class": "btn-primary"
  },
  "doc": {
    "type": "api",
    "endpoint": "/api/dbops",
    "method":"POST",
    "tooltip": "Get PAN Details",
    "icon": "fa fa-user",
    "class": "btn-primary"
  }
       
    },
    "hooks": {
        "presubmit": [
            "hse.avoidSpecialCharacters"
        ]
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40hse.induction%40"
    },
    "forcefill": {
        "guid": "#SESS_GUID#"
    },
    "gotolink": "infoview/hse.induction/{hashid}",
    "fields": {
        "location_id": {
            "label": "Code Editor",
            "type": "markdown",
            "required": true,
            "width": 12,
            height: "70vh",
            language: "javascript",

        },
        "company_code_id": {
            "label": "Company/ SPV",
            "type": "select",
            "buttons": {
                "api@hse.someAction": {
                    "label": "Add",
                    "icon": "fa fa-plus",

                },

            },
            "parameter": "company_id",
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
            "width": 12,
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
                    "target": "project_function_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_project_function?module=hse&type=project"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_function_id": {
            "label": "Project Function",
            "type": "select",
            "required": true,
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "date": {
            "label": "Induction Date",
            "type": "date",
            "required": true,
            "max": "today",
            "width": 4
        },

        "photo_attendance": {
            "label": "Induction Photo/Attendance (Max. Sizes:10MB)",
            "type": "camera",
            "multiple": true,
            "width": 4
        },
        "conducted_by_department": {
            "label": "Conducted By Department",
            "type": "select",
            "groupid": "hse_conducted_by_department",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "WEL HSE",
                    "value": "wel_hse",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Contractor",
                    "value": "contractor",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "conducted_by_name": {
            "label": "Conducted By (Name)",
            "type": "select",
            "multiple": true,
            "width": 4,
            "search": true,
            "options": [

                {
                    "title": "Vasudeo Gaichor",
                    "value": "vasudeo"
                },
                {
                    "title": "Omkar Chavan",
                    "value": "omkar"
                }
            ]
        },
        "participant_count": {
            "label": "Participant Count",
            "type": "suggest",
            "required": true,
            "min": 1,
            "width": 4
        }
    },

    "module_refid": "hse.induction",
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
