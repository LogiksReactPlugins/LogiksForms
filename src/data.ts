

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
        "company_code_id": {
            "label": "Company/ SPV",
            "type": "select",
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
        "location_id": {
            "label": "Location",
            "type": "text",
            "required": true,
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
            "multiple":true,
            "width": 4,
            "search": true,
            "options": [
                {
                    "title": "Admin",
                    "value": "admin"
                },
                {
                    "title": "Shivraj",
                    "value": "shivraj"
                },
                {
                    "title": "Pramod",
                    "value": "pramod"
                },
                {
                    "title": "Manthan M",
                    "value": "manthan"
                },
                {
                    "title": "susamyas",
                    "value": "susamya_ghosh@welspun.com"
                },
                {
                    "title": "Aniket Birje",
                    "value": "aniket.birje"
                },
                {
                    "title": "silk-updated",
                    "value": "100"
                },
                {
                    "title": "Yesh",
                    "value": "Yesh"
                },
                {
                    "title": "Dharmendra Kushwaha",
                    "value": "Dharmendra_Kushwaha@welspun.com"
                },
                {
                    "title": "sushant",
                    "value": "sushant"
                },
                {
                    "title": "pragati",
                    "value": "pragati"
                },
                {
                    "title": "dipti",
                    "value": "dipti"
                },
                {
                    "title": "testing",
                    "value": "test"
                },
                {
                    "title": "indulekha.singh",
                    "value": "indulekha.singh"
                },
                {
                    "title": "Initial Test",
                    "value": "initialtest"
                },
                {
                    "title": "User WELS",
                    "value": "user"
                },
                {
                    "title": "Business",
                    "value": "business1"
                },
                {
                    "title": "Manager 1",
                    "value": "manager1"
                },
                {
                    "title": "indulekha",
                    "value": "indulekha"
                },
                {
                    "title": "wel user",
                    "value": "wel_user"
                },
                {
                    "title": "Vikas Yadav",
                    "value": "Vikas_Yadav1@welspun.com"
                },
                {
                    "title": "Suyog Sakhare",
                    "value": "Suyog_Sakhare@welspun.com"
                },
                {
                    "title": "shital",
                    "value": "shital"
                },
                {
                    "title": "shitu",
                    "value": "shitu"
                },
                {
                    "title": "tester1",
                    "value": "tester1"
                },
                {
                    "title": "tester2",
                    "value": "tester2"
                },
                {
                    "title": "Manasi Gosavi",
                    "value": "manasi"
                },
                {
                    "title": "tester3",
                    "value": "tester3"
                },
                {
                    "title": "Dev Akif",
                    "value": "akif"
                },
                {
                    "title": "Vaibhav Mahale",
                    "value": "Vaibhav"
                },
                {
                    "title": "Saurabh Patil",
                    "value": "saurabh patil"
                },
                {
                    "title": "Manas G",
                    "value": "manas"
                },
                {
                    "title": "Amit Shah",
                    "value": "amit.shah@welspun.com"
                },
                {
                    "title": "Priya Mehta",
                    "value": "priya.mehta@welspun.com"
                },
                {
                    "title": "Rahul Patel",
                    "value": "rahul.patel@welspun.com"
                },
                {
                    "title": "Sneha Joshi",
                    "value": "sneha.joshi@welspun.com"
                },
                {
                    "title": "Vikram Singh",
                    "value": "vikram.singh@welspun.com"
                },
                {
                    "title": "Neha Verma",
                    "value": "neha.verma@welspun.com"
                },
                {
                    "title": "Karan Desai",
                    "value": "karan.desai@welspun.com"
                },
                {
                    "title": "Pooja Nair",
                    "value": "pooja.nair@welspun.com"
                },
                {
                    "title": "Rohan Kulkarni",
                    "value": "rohan.kulkarni@welspun.com"
                },
                {
                    "title": "Isha Trivedi",
                    "value": "isha.trivedi@welspun.com"
                },
                {
                    "title": "Arjun Malhotra",
                    "value": "arjun.malhotra@welspun.com"
                },
                {
                    "title": "Kavya Iyer",
                    "value": "kavya.iyer@welspun.com"
                },
                {
                    "title": "Nitin Chawla",
                    "value": "nitin.chawla@welspun.com"
                },
                {
                    "title": "Meera Soni",
                    "value": "meera.soni@welspun.com"
                },
                {
                    "title": "Yash Thakkar",
                    "value": "yash.thakkar@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser1@welspun.com"
                },
                {
                    "title": "Riyan Ali",
                    "value": "riyan"
                },
                {
                    "title": "shitu2",
                    "value": "shitu2"
                },
                {
                    "title": "Test User2",
                    "value": "testuser2@welspun.com"
                },
                {
                    "title": "oliva",
                    "value": "oliva"
                },
                {
                    "title": "Rajesh Subramanian",
                    "value": "raasubramanian@deloitte.com"
                },
                {
                    "title": "Manthan",
                    "value": "manthan.u@gmail.com"
                },
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
    "infoview": {
        "template": "cards",
        "groups": {
            "participant_details": {
                "label": "Participant Details",
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
                    "colkey": "hse_induction_id",
                    "popup.form": {
                        "hooks": {
                            "presubmit": [
                                "hse.participant_count"
                            ]
                        },
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40hse.induction.infoview_popup.participant_details%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#"
                        },
                        "fields": {
                            "id": {
                                "label": "ID",
                                "type": "number",
                                "required": false,
                                "disabled": true,
                                "hidden": true
                            },
                            "hse_induction_id": {
                                "label": "",
                                "hidden": true,
                                "type": "number",
                                "disabled": true,
                                "default": "#refid#"
                            },
                            "gender": {
                                "label": "Gender",
                                "type": "select",
                                "required": true,
                                "groupid": "user_gender",
                                "width": 4,
                                "formatter": "pretty",
                                "options": [
                                    {
                                        "title": "Female",
                                        "value": "female",
                                        "class": "",
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Male",
                                        "value": "male",
                                        "class": "",
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Other",
                                        "value": "other",
                                        "class": null,
                                        "privilege": "*"
                                    }
                                ]
                            },
                            "count": {
                                "label": "Count",
                                "type": "number",
                                "required": true,
                                "min": 1,
                                "default": 1,
                                "width": 4
                            },
                            "company": {
                                "label": "Company",
                                "type": "select",
                                "onChange": "company_required",
                                "groupid": "company_type",
                                "required": true,
                                "width": 4,
                                "options": [
                                    {
                                        "title": "Wel",
                                        "value": "wel",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Contractor Staff",
                                        "value": "contractor_staff",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Contractor Workers",
                                        "value": "contractor_workers",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Visitor",
                                        "value": "visitor",
                                        "class": null,
                                        "privilege": "*"
                                    }
                                ]
                            },
                            "company_name": {
                                "label": "Company Name",
                                "disabled": true,
                                "type": "text",
                                "width": 4
                            },
                            "photograph": {
                                "label": "Photograph",
                                "type": "file",
                                "multiple": true,
                                "width": 6
                            }
                        }
                    },
                    "datagrid": {
                        "gender": {
                            "label": "Gender",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "count": {
                            "label": "Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "company": {
                            "label": "Company",
                            "formatter": "pretty",
                            "searchable": true
                        },
                        "company_name": {
                            "label": "Company Name",
                            "searchable": true
                        },
                        "photograph": {
                            "label": "Photograph",
                            "searchable": true,
                            "formatter": "attachment"
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
                        "api@hse.deleteRecord": {
                            "label": "Delete Record",
                            "icon": "fa fa-trash text-red-500",
                            "lgksConfirm": "Are you sure you want to delete this record?",
                            "payload": {
                                "table": "hse_induction_details"
                            }
                        },
                        "popup@activity_logs.popup_activity_logs/{id}": {
                            "label": "History",
                            "params": {
                                "ref_src": "forms@hse.induction.infoview_popup.participant_details"
                            },
                            "icon": "fa-solid fa-clock-rotate-left"
                        }
                    },
                    "queryid": "forms%40hse.induction.infoviewTable.participant_details%40infoview.groups.participant_details"
                },
                "width": 12
            }
        }
    },
    "script": "ZnVuY3Rpb24gb25sb2FkKGN0eCkgewogIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkYXRlIik7CiAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dD8udmFsdWU7CiAgY29uc3Qgc2Vzc2lvblVzZXIgPSBjdHg/LnVzZXI/LnVzZXI7CgogIGlmICghc2Vzc2lvblVzZXIpIHsKICAgIGNvbnNvbGUud2FybigiU2Vzc2lvbiB1c2VyIG5vdCBmb3VuZCBpbiBjdHgiKTsKICAgIHJldHVybjsKICB9CgogIGNvbnN0IHNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlci51c2VySWQ7CiAgY29uc3Qgc2Vzc2lvbk5hbWUgPSBzZXNzaW9uVXNlci5uYW1lOwoKICBjb25zb2xlLmxvZygic2Vzc2lvblVzZXJJZCIsIHNlc3Npb25Vc2VySWQpOwogIGNvbnNvbGUubG9nKCJzZXNzaW9uTmFtZSIsIHNlc3Npb25OYW1lKTsKCiAgLy8gLS0tLSBjb25kdWN0ZWRfYnkgaGFuZGxpbmcgLS0tLQogIHNldFRpbWVvdXQoKCkgPT4gewoKCiAgICB2YXIgY29uZHVjdGVkX2J5X25hbWUgPSB3aW5kb3cuZm9ybUFQSS5nZXRWYWx1ZSgiY29uZHVjdGVkX2J5X25hbWUiKTsKCiAgICAvL2NvbnNvbGUuZXJyb3IoImNvbmR1Y3RlZF9ieV9uYW1lPSIsIGNvbmR1Y3RlZF9ieV9uYW1lKTsKICAgIGlmICh0eXBlb2Ygd2luZG93LnNldEZpZWxkVmFsdWUgIT09ICJmdW5jdGlvbiIpIHsKICAgICAgLy9jb25zb2xlLmVycm9yKCJzZXRGaWVsZFZhbHVlIGlzIG5vdCBhdmFpbGFibGUiKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgaWYgKCFjb25kdWN0ZWRfYnlfbmFtZSkgewogICAgICAvL2NvbnNvbGUuZXJyb3IoImNvbmR1Y3RlZF9ieV9uYW1lMjIyPSIsIGNvbmR1Y3RlZF9ieV9uYW1lKTsKICAgICAgd2luZG93LnNldEZpZWxkVmFsdWUoImNvbmR1Y3RlZF9ieV9uYW1lIiwgc2Vzc2lvblVzZXJJZCk7CiAgICB9CgogIH0sIDUwMCk7CgogIC8vIC0tLS0gZGF0ZSBoYW5kbGluZyAtLS0tCiAgaWYgKCFkYXRlSW5wdXQpIHsKICAgIC8vY29uc29sZS5lcnJvcigidGJ0X2RhdGUgZWxlbWVudCBub3QgZm91bmQiKTsKICB9IGVsc2UgaWYgKCFkYXRlKSB7CiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7CiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgiVCIpWzBdOwogICAgc2V0TmF0aXZlSW5wdXRWYWx1ZShkYXRlSW5wdXQsIGZvcm1hdHRlZERhdGUpOwogIH0gZWxzZSB7CiAgICBjb25zb2xlLmxvZygiRWRpdCBmb3JtIOKAlCBkYXRlIGFscmVhZHkgZXhpc3RzOiIsIGRhdGUpOwogIH0KfQoKZnVuY3Rpb24gc2V0RmllbGRWYWx1ZShlbGVtZW50LCB2YWx1ZSkgewogIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlOwoKICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWU7CgogIGlmICh0YWcgPT09ICJTRUxFQ1QiKSB7CiAgICBjb25zdCBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKAogICAgICB3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLAogICAgICAidmFsdWUiCiAgICApPy5zZXQ7CiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIuY2FsbChlbGVtZW50LCB2YWx1ZSk7CiAgICBlbHNlIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTsKICB9IGVsc2UgaWYgKHRhZyA9PT0gIlRFWFRBUkVBIikgewogICAgY29uc3Qgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgICAgd2luZG93LkhUTUxUZXh0QXJlYUVsZW1lbnQucHJvdG90eXBlLAogICAgICAidmFsdWUiCiAgICApPy5zZXQ7CiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIuY2FsbChlbGVtZW50LCB2YWx1ZSk7CiAgICBlbHNlIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTsKICB9IGVsc2UgewogICAgY29uc3Qgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgICAgd2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLAogICAgICAidmFsdWUiCiAgICApPy5zZXQ7CiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIuY2FsbChlbGVtZW50LCB2YWx1ZSk7CiAgICBlbHNlIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTsKICB9CgogIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoImlucHV0IiwgeyBidWJibGVzOiB0cnVlIH0pKTsKICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCJjaGFuZ2UiLCB7IGJ1YmJsZXM6IHRydWUgfSkpOwogIHJldHVybiB0cnVlOwp9CgpmdW5jdGlvbiBmaW5kQ29uZHVjdGVkQnlOYW1lRmllbGQoKSB7CiAgcmV0dXJuICgKICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPSJjb25kdWN0ZWRfYnlfbmFtZSJdJykgfHwKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb25kdWN0ZWRfYnlfbmFtZSIpCiAgKTsKfQoKZnVuY3Rpb24gd2FpdEFuZFNldENvbmR1Y3RlZEJ5TmFtZShzZXNzaW9uVXNlcklkLCBhdHRlbXB0KSB7CiAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDsKICBjb25zdCBkZWxheSA9IDMwMDsKCiAgY29uc3QgZmllbGQgPSBmaW5kQ29uZHVjdGVkQnlOYW1lRmllbGQoKTsKCiAgaWYgKCFmaWVsZCkgewogICAgaWYgKGF0dGVtcHQgPCBtYXhBdHRlbXB0cykgewogICAgICBzZXRUaW1lb3V0KCgpID0+IHdhaXRBbmRTZXRDb25kdWN0ZWRCeU5hbWUoc2Vzc2lvblVzZXJJZCwgYXR0ZW1wdCArIDEpLCBkZWxheSk7CiAgICB9IGVsc2UgewogICAgICBjb25zb2xlLndhcm4oImNvbmR1Y3RlZF9ieV9uYW1lIGZpZWxkIG5vdCBmb3VuZCBhZnRlciByZXRyaWVzIik7CiAgICB9CiAgICByZXR1cm47CiAgfQoKICAvLyBJZiBhbHJlYWR5IHNldCwgZG8gbm90aGluZwogIGlmIChmaWVsZC52YWx1ZSkgewogICAgY29uc29sZS5sb2coImNvbmR1Y3RlZF9ieV9uYW1lIGFscmVhZHkgc2VsZWN0ZWQ6IiwgZmllbGQudmFsdWUpOwogICAgcmV0dXJuOwogIH0KCiAgLy8gTmF0aXZlIHNlbGVjdCBjYXNlCiAgaWYgKGZpZWxkLnRhZ05hbWUgPT09ICJTRUxFQ1QiKSB7CiAgICBjb25zdCBoYXNPcHRpb24gPSBBcnJheS5mcm9tKGZpZWxkLm9wdGlvbnMpLnNvbWUoCiAgICAgIChvcHQpID0+IG9wdC52YWx1ZSA9PT0gc2Vzc2lvblVzZXJJZAogICAgKTsKCiAgICBpZiAoIWhhc09wdGlvbikgewogICAgICBpZiAoYXR0ZW1wdCA8IG1heEF0dGVtcHRzKSB7CiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3YWl0QW5kU2V0Q29uZHVjdGVkQnlOYW1lKHNlc3Npb25Vc2VySWQsIGF0dGVtcHQgKyAxKSwgZGVsYXkpOwogICAgICB9IGVsc2UgewogICAgICAgIGNvbnNvbGUud2FybigiTm8gbWF0Y2hpbmcgb3B0aW9uIGZvdW5kIGZvciB1c2VySWQ6Iiwgc2Vzc2lvblVzZXJJZCk7CiAgICAgIH0KICAgICAgcmV0dXJuOwogICAgfQoKICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIHNlc3Npb25Vc2VySWQpOwogICAgY29uc29sZS5sb2coIkF1dG8tc2VsZWN0ZWQgdXNlcjoiLCBzZXNzaW9uVXNlcklkKTsKICAgIHJldHVybjsKICB9CgogIC8vIEN1c3RvbSBkYXRhU2VsZWN0b3JGcm9tVGFibGUgY2FzZToKICAvLyB0cnkgdG8gZmluZCBhbiBpbnRlcm5hbCBpbnB1dC9zZWxlY3QgaW5zaWRlIHRoZSBzYW1lIHdyYXBwZXIKICBjb25zdCB3cmFwcGVyID0KICAgIGZpZWxkLmNsb3Nlc3QoJ1tpZF49IndyYXBwZXItIl0nKSB8fAogICAgZmllbGQucGFyZW50RWxlbWVudCB8fAogICAgZG9jdW1lbnQ7CgogIGNvbnN0IGlubmVyQ29udHJvbCA9CiAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPSJjb25kdWN0ZWRfYnlfbmFtZSJdJykgfHwKICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT0iY29uZHVjdGVkX2J5X25hbWUiXScpIHx8CiAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPSJjb25kdWN0ZWRfYnlfbmFtZSJdJykgfHwKICAgIHdyYXBwZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0W2lkPSJjb25kdWN0ZWRfYnlfbmFtZSJdJyk7CgogIGlmIChpbm5lckNvbnRyb2wpIHsKICAgIGlmICghaW5uZXJDb250cm9sLnZhbHVlKSB7CiAgICAgIHNldEZpZWxkVmFsdWUoaW5uZXJDb250cm9sLCBzZXNzaW9uVXNlcklkKTsKICAgICAgY29uc29sZS5sb2coIkF1dG8tc2VsZWN0ZWQgdXNlciBpbiBjdXN0b20gY29udHJvbDoiLCBzZXNzaW9uVXNlcklkKTsKICAgIH0KICAgIHJldHVybjsKICB9CgogIGlmIChhdHRlbXB0IDwgbWF4QXR0ZW1wdHMpIHsKICAgIHNldFRpbWVvdXQoKCkgPT4gd2FpdEFuZFNldENvbmR1Y3RlZEJ5TmFtZShzZXNzaW9uVXNlcklkLCBhdHRlbXB0ICsgMSksIGRlbGF5KTsKICB9IGVsc2UgewogICAgY29uc29sZS53YXJuKCJDb3VsZCBub3Qgc2V0IGNvbmR1Y3RlZF9ieV9uYW1lIGFmdGVyIHJldHJpZXMiKTsKICB9Cn0KCmZ1bmN0aW9uIHNldE5hdGl2ZUlucHV0VmFsdWUoZWxlbWVudCwgdmFsdWUpIHsKICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpIHsKICAgIC8vY29uc29sZS5lcnJvcigiSW52YWxpZCBlbGVtZW50OiIsIGVsZW1lbnQpOwogICAgcmV0dXJuOwogIH0KCiAgY29uc3Qgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLAogICAgInZhbHVlIgogICkuc2V0OwoKICBzZXR0ZXIuY2FsbChlbGVtZW50LCB2YWx1ZSk7CiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgiaW5wdXQiLCB7IGJ1YmJsZXM6IHRydWUgfSkpOwogIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoImNoYW5nZSIsIHsgYnViYmxlczogdHJ1ZSB9KSk7Cn0KCmZ1bmN0aW9uIGNvbXBhbnlfcmVxdWlyZWQoZGF0YSkgewogIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7CiAgY29uc3QgdmFsdWUgPSBmaWVsZD8udmFsdWU7CgogIGNvbnN0IHJld29ya0ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNvbXBhbnlfbmFtZSIpOwoKICBpZiAoIXJld29ya0ZpZWxkKSB7CiAgICBjb25zb2xlLndhcm4oImNvbXBhbnlfbmFtZSBmaWVsZCBub3QgZm91bmQiKTsKICAgIHJldHVybjsKICB9CgogIGlmICghdmFsdWUpIHsKICAgIHJld29ya0ZpZWxkLmRpc2FibGVkID0gdHJ1ZTsKICAgIHJld29ya0ZpZWxkLmNsYXNzTGlzdC5hZGQoImN1cnNvci1ub3QtYWxsb3dlZCIsICJiZy1ncmF5LTEwMCIpOwogIH0gZWxzZSB7CiAgICByZXdvcmtGaWVsZC5kaXNhYmxlZCA9IGZhbHNlOwogICAgcmV3b3JrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgiY3Vyc29yLW5vdC1hbGxvd2VkIiwgImJnLWdyYXktMTAwIik7CiAgfQp9",
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
