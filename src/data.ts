

export const example10 = {
       "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InE2R0NFRlBDWitrZzJFVXphcHhUYjdxZXEzbWthbncvQ0xyRHRVb24wT2U5MUo4Nk0xQWgyRXlKdmRTVXFXRmFkMzlLMlA4VjRCR3VmL1NjSE1RbHBwUjJVUXo0aHdkbHNHdWNUMzZtSTZ0ZTRPR0llVlhNdFY1bW9QMXdNNVE4UUtQcmFmckFiTm11a005SFZFTDcyeEJ4OWxTRlB0OHVIUzVmMXYwTEN5b01KWWlJNDJCbDFIS1RiMG44VXlMbXEwY3ZHZ3RNTjJIaEY0MThHd01jeGNBLzBVVE1IRXh0d1JDTWxUY09YNmx5OWZaa3hpWW9Oem5WblBXYTNkZldIWVhBZEtXVlh5c3FRK0hQNXROYlZRNlFNT1RGa2ZkbERyd1IwWm12IiwiaWF0IjoxNzc0NjA0OTg3LCJleHAiOjE3NzQ2MDg1ODcsImp0aSI6ImFjYzoxOjE3NzQ2MDQ5ODcxNjU6d2ViIn0.oFUHSMYff-17Mzsmn7CglLuHttR5m2UEBjvqCUVrwV0",
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
        "type": "api",
        "cols": "*",
        "endpoint": "/api/services/userManager/insert_project_matrix",
        "method": "POST",
        "table": "data_user_project_mapping",
        "where": {
            "id": "#refid#"
        }
    },
    "fields": {
        "userid": {
            "label": "Login ID",
            "required": true,
            "search": true,
            "type": "select",
            multiple:true,
            "orderby": "name asc",
            "width": 6,
            "options": [
                {
                    "value": "admin",
                    "title": "admin"
                },
                {
                    "value": "aniket.birje",
                    "title": "aniket.birje"
                },
                {
                    "value": "business1",
                    "title": "business1"
                },
                {
                    "value": "akif",
                    "title": "akif"
                },
                {
                    "value": "Dharmendra_Kushwaha@welspun.com",
                    "title": "Dharmendra_Kushwaha@welspun.com"
                },
                {
                    "value": "dipti",
                    "title": "dipti"
                },
                {
                    "value": "indulekha",
                    "title": "indulekha"
                },
                {
                    "value": "indulekha.singh",
                    "title": "indulekha.singh"
                },
                {
                    "value": "initialtest",
                    "title": "initialtest"
                },
                {
                    "value": "manager1",
                    "title": "manager1"
                },
                {
                    "value": "manasi",
                    "title": "manasi"
                },
                {
                    "value": "manthan",
                    "title": "manthan"
                },
                {
                    "value": "pragati",
                    "title": "pragati"
                },
                {
                    "value": "pramod",
                    "title": "pramod"
                },
                {
                    "value": "shital",
                    "title": "shital"
                },
                {
                    "value": "shitu",
                    "title": "shitu"
                },
                {
                    "value": "shivraj",
                    "title": "shivraj"
                },
                {
                    "value": "100",
                    "title": "100"
                },
                {
                    "value": "susamya_ghosh@welspun.com",
                    "title": "susamya_ghosh@welspun.com"
                },
                {
                    "value": "sushant",
                    "title": "sushant"
                },
                {
                    "value": "tester1",
                    "title": "tester1"
                },
                {
                    "value": "tester2",
                    "title": "tester2"
                },
                {
                    "value": "tester3",
                    "title": "tester3"
                },
                {
                    "value": "test",
                    "title": "test"
                },
                {
                    "value": "user",
                    "title": "user"
                },
                {
                    "value": "Vaibhav",
                    "title": "Vaibhav"
                },
                {
                    "value": "wel_user",
                    "title": "wel_user"
                },
                {
                    "value": "Yesh",
                    "title": "Yesh"
                }
            ]
        },
        "company_spv_id": {
            "label": "Company/ SPV",
            "type": "select",
            "search": true,
            "parameter": "company_id",
            "required": true,
            "source": {
                "type": "api",
                "method": "post",
                "endpoint": "/api/services/eofficeGlobal/get_company/all"
            },
            "ajaxchain": [
                {
                    "target": "sector_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_sector/all"
                    }
                }
            ],
            "options_top": [
                {
                    "label": "*",
                    "value": "*"
                }
            ],
            "no-option": "Select Company/ SPV",
            "width": 6,
            "options": []
        },
        "sector_id": {
            "label": "Sector",
            "no-option": "Select Sector",
            "type": "select",
            "search": true,
            "parameter": {
                "sector_id": "sector_id",
                "company_id": "company_spv_id"
            },
            "ajaxchain": [
                {
                    "target": "project_function_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_project_function/all"
                    }
                }
            ],
            "options_top": [
                {
                    "label": "*",
                    "value": "*"
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_function_id": {
            "label": "Project/ Function",
            "type": "select",
            "required": true,
            "search": true,
            "multiple": true,
            "parameter": "project_function_id",
            "options_top": [
                {
                    "label": "_",
                    "value": "_"
                }
            ],
            "ajaxchain": [
                {
                    "target": "location_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_location/all"
                    }
                }
            ],
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "location_id": {
            "label": "Location",
            "type": "select",
            "search": true,
            "required": true,
            "width": 4,
            "multiple": true,
            "options": []
        },
        "category_id": {
            "label": "Category",
            "type": "select",
            "orderby": "title asc",
            "search": true,
            "required": true,
            "width": 6,
            "options": [
                {
                    "title": "AI & Machine Learning Provider\t",
                    "value": 21
                },
                {
                    "title": "Business Application",
                    "value": 6
                },
                {
                    "title": "Cloud Service Provider\t",
                    "value": 13
                },
                {
                    "title": "Consulting Firm\t",
                    "value": 12
                },
                {
                    "title": "Data Center Operator\t",
                    "value": 17
                },
                {
                    "title": "E-commerce Platform Provider\t",
                    "value": 18
                },
                {
                    "title": "Environmental and Conservation\t",
                    "value": 28
                },
                {
                    "title": "General",
                    "value": 29
                },
                {
                    "title": "Hardware Supplier\t",
                    "value": 11
                },
                {
                    "title": "Industrial and Manufacturing\t",
                    "value": 24
                },
                {
                    "title": "infrastructure",
                    "value": 3
                },
                {
                    "title": "Invoicing - update",
                    "value": 7
                },
                {
                    "title": "IoT Solution Provider\t",
                    "value": 20
                },
                {
                    "title": "it",
                    "value": 23
                },
                {
                    "title": "Managed Services Provider\t",
                    "value": 15
                },
                {
                    "title": "Networking Equipment Supplier\t",
                    "value": 16
                },
                {
                    "title": "NFA",
                    "value": 2
                },
                {
                    "title": "Power Generation\t",
                    "value": 25
                },
                {
                    "title": "Residential and Commercial\t",
                    "value": 27
                },
                {
                    "title": "SAP",
                    "value": 5
                },
                {
                    "title": "Security Provider\t",
                    "value": 14
                },
                {
                    "title": "Software as a Service (SaaS) Provider\t",
                    "value": 19
                },
                {
                    "title": "Software Developer\t",
                    "value": 10
                },
                {
                    "title": "Technology Provider\t",
                    "value": 9
                },
                {
                    "title": "Transportation and Infrastructure\t",
                    "value": 26
                }
            ]
        },
        "operation": {
            "label": "Operation",
            "type": "select",
            "groupid": "project_mapping_operation",
            "width": 6,
            "options": [
                {
                    "title": "*",
                    "value": "*",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "View only",
                    "value": "view",
                    "class": null,
                    "privilege": "*"
                }
            ]
        }
    },
    "module_refid": "userManager.productUserMapping",
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
