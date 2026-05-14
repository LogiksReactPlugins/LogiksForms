

export const example10 = {
     "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImQ1VXcvY1VWQmFCa0tMK3lQTXZ0SWc4b3R2TWp0WWV1MnRpTlBXQWNXRW1MN3d0VWZkL1lOZ0FRWnlQamNqYkdyd3k1dmFWWHVZbjBvUjY5ZEUzSDlQSlFYc08vU1dkOWRhYTVrR2llbU96SlJCOUp3emljcDJKaTQvOTZuOXZGZ2VGTWo2UldaeTcwM011MkZ3OFR1dmhuTnZKV0NTRTZIZElMYm1xM0s3elRpbm9QTWk1djNUWW9YQzBXa1FpYUdXRWZKYlIwMDREOUMxN0FoYlZHYk5BM3pSWjRPK1kvdDI5Y2d0c1puZTc1aUtwVGpjbEh3b0dXQVZiQy9GWTVIeU5CNVFRYytaNkc0OS81NWxFL2hjRHhQSEpPUDA4aUZPM20rajh3Z1dTRW9LNS9sbTF5S1R1U3BtbjU0alJtSHdndDd1Wmo4eUN4NURLVFdxOD0iLCJpYXQiOjE3Nzg3NDQwNjksImV4cCI6MTc3ODc0NzY2OSwianRpIjoiYWNjOjcyMDoxNzc4NzQ0MDY5NTU4OndlYiJ9.z8ZEU4NIMor02ft35H46-KnGrqvdPgtWB2xh6hPcAII",
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
        "dbopsid": "forms%40keyIssues.main%40"
    },
    "gotolink": "infoview/keyIssues.main/{hashid}",
    "fields": {
        "id": {
            "label": "Refeence ID",
            "type": "text",
            "hidden": true
        },
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
                        "endpoint": "/api/services/eofficeGlobal/get_project_function?module=keyIssues&type=project"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_function_id": {
            "label": "Project Function ",
            "type": "select",
          
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "date": {
            "label": "Date",
            "type": "date",
            "required": true,
            "max": "today",
            "width": 4
        },
        "category": {
            "label": "Issue Category",
            "type": "text",
            "search": true,
            "required": true,
            "width": 4
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
            "label": "Management Review (PM/PO default selected)",
            "type": "select",
            "default": "pm_po",
            "groupid": "management_review",
            "required": true,
            "multiple": true,
            "search": false,
            "width": 4,
            "options": [
                {
                    "title": "PM/PO",
                    "value": "pm_po",
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
            "label": "Assignee",
            "type": "select",
            "required": true,
            "search": true,
            "width": 4,
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
                }
            ]
        },
        "mail_cc_user": {
            "label": "Reviewers",
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
                    "title": "Amit Shah",
                    "value": "amit.shah@welspun.com"
                },
                {
                    "title": "Aniket Birje",
                    "value": "aniket.birje"
                },
                {
                    "title": "Arjun Malhotra",
                    "value": "arjun.malhotra@welspun.com"
                },
                {
                    "title": "Business",
                    "value": "business1"
                },
                {
                    "title": "Dev Akif",
                    "value": "akif"
                },
                {
                    "title": "Dharmendra Kushwaha",
                    "value": "Dharmendra_Kushwaha@welspun.com"
                },
                {
                    "title": "dipti",
                    "value": "dipti"
                },
                {
                    "title": "indulekha",
                    "value": "indulekha"
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
                    "title": "Isha Trivedi",
                    "value": "isha.trivedi@welspun.com"
                },
                {
                    "title": "Karan Desai",
                    "value": "karan.desai@welspun.com"
                },
                {
                    "title": "Kavya Iyer",
                    "value": "kavya.iyer@welspun.com"
                },
                {
                    "title": "Manager 1",
                    "value": "manager1"
                },
                {
                    "title": "Manas G",
                    "value": "manas"
                },
                {
                    "title": "Manasi Gosavi",
                    "value": "manasi"
                },
                {
                    "title": "Manthan M",
                    "value": "manthan"
                },
                {
                    "title": "Meera Soni",
                    "value": "meera.soni@welspun.com"
                },
                {
                    "title": "Neha Verma",
                    "value": "neha.verma@welspun.com"
                },
                {
                    "title": "Nitin Chawla",
                    "value": "nitin.chawla@welspun.com"
                },
                {
                    "title": "oliva",
                    "value": "oliva"
                },
                {
                    "title": "Pooja Nair",
                    "value": "pooja.nair@welspun.com"
                },
                {
                    "title": "pragati",
                    "value": "pragati"
                },
                {
                    "title": "Pramod",
                    "value": "pramod"
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
                    "title": "Riyan Ali",
                    "value": "riyan"
                },
                {
                    "title": "Rohan Kulkarni",
                    "value": "rohan.kulkarni@welspun.com"
                },
                {
                    "title": "Saurabh Patil",
                    "value": "saurabh patil"
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
                    "title": "shitu2",
                    "value": "shitu2"
                },
                {
                    "title": "Shivraj",
                    "value": "shivraj"
                },
                {
                    "title": "silk-updated",
                    "value": "100"
                },
                {
                    "title": "Sneha Joshi",
                    "value": "sneha.joshi@welspun.com"
                },
                {
                    "title": "susamyas",
                    "value": "susamya_ghosh@welspun.com"
                },
                {
                    "title": "sushant",
                    "value": "sushant"
                },
                {
                    "title": "Suyog Sakhare",
                    "value": "Suyog_Sakhare@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser1@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser@welspun.com"
                },
                {
                    "title": "Test User2",
                    "value": "testuser2@welspun.com"
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
                    "title": "tester3",
                    "value": "tester3"
                },
                {
                    "title": "testing",
                    "value": "test"
                },
                {
                    "title": "User WELS",
                    "value": "user"
                },
                {
                    "title": "Vaibhav Mahale",
                    "value": "Vaibhav"
                },
                {
                    "title": "Vikas Yadav",
                    "value": "Vikas_Yadav1@welspun.com"
                },
                {
                    "title": "Vikram Singh",
                    "value": "vikram.singh@welspun.com"
                },
                {
                    "title": "wel user",
                    "value": "wel_user"
                },
                {
                    "title": "Yash Thakkar",
                    "value": "yash.thakkar@welspun.com"
                },
                {
                    "title": "Yesh",
                    "value": "Yesh"
                }
            ]
        },
        "attachment": {
            "label": "Observation attachment",
            "type": "file",
            "required": false,
            "multiple": true,
            "width": 9
        },
        "observation_photograph": {
            "label": "Observation Photograph",
            "type": "file",
            "required": false,
            "multiple": true,
            "width": 9
        },
        "compliance_photograph": {
            "label": "Compliance Photograph",
            "type": "file",
            "vmode": "edit",
            "multiple": true,
            "required": false,
            "width": 9
        },
        "reference": {
            "label": "Reference",
            "type": "text",
            "required": false,
            "width": 4
        },
        "target_date": {
            "label": "Target Date",
            "type": "date",
            "required": true,
            "width": 4
        },
        "status": {
            "label": "Status",
            "type": "select",
            "parameter": "status",
            "onChange": "changeDate",
            "required": true,
            "source": {
                "type": "api",
                "method": "post",
                "endpoint": "/api/services/keyIssues/get_status"
            },
            "no-option": "Select Status",
            "width": 4,
            "options": []
        },
        "closure_date": {
            "label": "Closure Date",
            "type": "date",
            "disabled": true,
            "required": false,
            "width": 4
        },
        "description": {
            "label": "Key Issues",
            "type": "richtextarea",
            "required": false,
            "width": 12
        }
    },
    "infoview": {
        "template": "cards"
    },
    "script": "ZnVuY3Rpb24gc2V0TmF0aXZlSW5wdXRWYWx1ZShlbGVtZW50LCB2YWx1ZSkgewogICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKSB7CiAgICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnN0IHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoCiAgICAgICAgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsCiAgICAgICAgInZhbHVlIgogICAgKS5zZXQ7CgogICAgc2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwoKICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCgKICAgICAgICBuZXcgRXZlbnQoImlucHV0IiwgeyBidWJibGVzOiB0cnVlIH0pCiAgICApOwoKICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCgKICAgICAgICBuZXcgRXZlbnQoImNoYW5nZSIsIHsgYnViYmxlczogdHJ1ZSB9KQogICAgKTsKfQoKZnVuY3Rpb24gY2hhbmdlRGF0ZShkYXRhKSB7CgogICAgY29uc3Qgc3RhdHVzRWwgPSBkYXRhPy50YXJnZXQKICAgICAgICA/IGRhdGEudGFyZ2V0CiAgICAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTsKCiAgICBjb25zdCBjbG9zdXJlRGF0ZSA9CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNsb3N1cmVfZGF0ZSIpOwoKICAgIGlmICghc3RhdHVzRWwgfHwgIWNsb3N1cmVEYXRlKSB7CiAgICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c0VsLnZhbHVlCiAgICAgICAgPy50b0xvd2VyQ2FzZSgpCiAgICAgICAgLnRyaW0oKTsKCiAgICBjb25zdCB0b2RheSA9CiAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCJUIilbMF07CgogICAgc3RhdHVzRWwuZGlzYWJsZWQgPSBmYWxzZTsKCiAgICBzZXROYXRpdmVJbnB1dFZhbHVlKAogICAgICAgIGNsb3N1cmVEYXRlLAogICAgICAgIHN0YXR1cyA9PT0gImNsb3NlZCIKICAgICAgICAgICAgPyB0b2RheQogICAgICAgICAgICA6ICIiCiAgICApOwp9",
    "module_refid": "keyIssues.main",
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
