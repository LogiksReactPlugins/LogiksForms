

export const example10 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkU5UEU1ZW5Pb0ZEMjAyMDMzT1c2cENKWDdVRC84dGFmUnh3OUZwaHRWNlBQeVBPWm1ETDh5WEpWeEE0UUhSYm12VUdtQkRwNS9jeEZuNFZxWTRkakdXQXRaQ1plT3lSRkVCejY1UE4xT1gvaElxTjJ2UUU3UTZLL1BXNVlxdy8zdzVjU1pETW8xN2hScHdWWmZwbldIeVhaYjNtVmN3OFJjd3RnNEJRL1ZtTWJTeWJ3MzB1ckhQNXA2RytqR0dGeVVhSUlPTjRaMWNYekdrLy9pVTFBZzR1ZkNZMFBTTDBVYkdDSE5yMUlDZnh3Y2hoOWxweVVzN0YwamFVdWdKS0FvUGpmekVSR2Jyb3pFZkRRVXdlaUlvYmJ0b0Nwblg5NWZ6Q05EUC9JIiwiaWF0IjoxNzc0MzY3MzQxLCJleHAiOjE3NzQzNzA5NDEsImp0aSI6ImFjYzoxOjE3NzQzNjczNDE1ODM6d2ViIn0.G-nf5kGdwYjPuTFNCAt0_W_AKy_dNY4AKyOdhK97s_4",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run",
        "uploadURL": "/api/files/upload",
        "removeFileURL": "/api/files/delete",
        "operation": "create",
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40quality.quality_observation%40",
    },
    "forcefill": {
        "guid": "#SESS_GUID#",
        "raised_by": "#SESS_USER_ID#"
    },
    "gotolink": "infoview/quality.quality_observation/{hashid}",
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
                        "endpoint": "/api/services/eofficeGlobal/get_project_function"
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
            "required": true,
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "location": {
            "label": "Location",
            "type": "text",
            "required": true,
            "width": 4
        },
        "location_type": {
            "label": "Location Type",
            "type": "select",
            "groupid": "quality_location_type",
            "no-option": "Select Location Type",
            "onChange": "changeLocationType",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "Chainage",
                    "value": "chainage",
                    "class": null,
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
        "chainage_from": {
            "label": "Chainage From",
            "disabled": true,
            "type": "text",
            "width": 4
        },
        "chainage_to": {
            "label": "Chainage To",
            "disabled": true,
            "type": "text",
            "width": 4
        },
        "location_other": {
            "label": "Location Other",
            "disabled": true,
            "type": "text",
            "width": 4
        },
        "raised_date": {
            "label": "Raised on Date",
            "type": "date",
            "onChange": "calculateAgeing",
            "required": true,
            "width": 4
        },
        "ageing_days": {
            "label": "Ageing Days",
            "type": "number",
            "required": false,
            "readonly": true,
            "width": 4
        },
        "structure_part": {
            "label": "Part of Structure / Layer",
            "type": "select",
            "no-option": "Select Part of Structure / Layer",
            "groupid": "part_of_structure",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "Admin Building",
                    "value": "admin_building",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "All Structure",
                    "value": "all_structure",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Approach slab",
                    "value": "approach_slab",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Backfilling",
                    "value": "backfilling",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "BC",
                    "value": "bc",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Bearings",
                    "value": "bearings",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Boiler cum Scrubber Unit",
                    "value": "boiler_cum_scrubber_unit",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Compound wall",
                    "value": "compound_wall",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "CTB",
                    "value": "ctb",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "DBM",
                    "value": "dbm",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Disc Filters",
                    "value": "disc_filters",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "DLC",
                    "value": "dlc",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Duct bank & Culverts",
                    "value": "duct_bank_culverts",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Earthwork",
                    "value": "earthwork",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Embankment",
                    "value": "embankment",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Expansion Joints",
                    "value": "expansion_joints",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Structural Concrete",
                    "value": "structural_concrete",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Workshop",
                    "value": "workshop",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "section": {
            "label": "Section",
            "type": "select",
            "no-option": "Select Section",
            "groupid": "section_master",
            "required": true,
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
        "department_id": {
            "label": "Department / Category",
            "type": "select",
            "no-option": "Select Department / Category",
            "required": true,
            "search": true,
            "width": 4,
            "options": [
                {
                    "title": "Approved D&D not followed",
                    "value": 2
                },
                {
                    "title": "BC Settlement",
                    "value": 3
                },
                {
                    "title": "Bituminous Pavement cracks",
                    "value": 4
                },
                {
                    "title": "BSM Distress",
                    "value": 5
                },
                {
                    "title": "CAT-A",
                    "value": 6
                },
                {
                    "title": "CAT-B",
                    "value": 7
                },
                {
                    "title": "CAT-C",
                    "value": 8
                },
                {
                    "title": "Cement Storage",
                    "value": 9
                },
                {
                    "title": "Civil - update",
                    "value": 10
                },
                {
                    "title": "Cold Joint",
                    "value": 11
                },
                {
                    "title": "Concrete Cracks",
                    "value": 12
                },
                {
                    "title": "Concrete setting",
                    "value": 13
                },
                {
                    "title": "Cracks",
                    "value": 14
                },
                {
                    "title": "Cube Failure",
                    "value": 15
                },
                {
                    "title": "Curing Tank",
                    "value": 16
                },
                {
                    "title": "Damaged RE Panels",
                    "value": 17
                },
                {
                    "title": "DBM Distress",
                    "value": 18
                },
                {
                    "title": "DBM Temperature",
                    "value": 19
                },
                {
                    "title": "Deviation from Drawing/Specification",
                    "value": 20
                },
                {
                    "title": "Deviation from SOP",
                    "value": 21
                },
                {
                    "title": "Dumping of dismantled PQC",
                    "value": 23
                },
                {
                    "title": "Electrical",
                    "value": 24
                },
                {
                    "title": "Gaps not sealed properly",
                    "value": 25
                },
                {
                    "title": "Girder Cone Punching",
                    "value": 26
                },
                {
                    "title": "Grout leakage",
                    "value": 27
                },
                {
                    "title": "Highway",
                    "value": 28
                },
                {
                    "title": "Honeycomb",
                    "value": 29
                },
                {
                    "title": "Honeycombs",
                    "value": 30
                },
                {
                    "title": "Improper Compaction",
                    "value": 31
                },
                {
                    "title": "Improper dimensions",
                    "value": 32
                },
                {
                    "title": "Improper Storage",
                    "value": 33
                },
                {
                    "title": "Improper Storage/Housekeeping",
                    "value": 34
                },
                {
                    "title": "Inadequate Curing",
                    "value": 35
                },
                {
                    "title": "Inadequate depth of pile",
                    "value": 36
                },
                {
                    "title": "Inadequate formwork supports",
                    "value": 37
                },
                {
                    "title": "Inadequate thickness",
                    "value": 38
                },
                {
                    "title": "Workmanship Error - updated",
                    "value": 39
                },
                {
                    "title": "Information Techhology",
                    "value": 40
                },
                {
                    "title": "Human Resources ",
                    "value": 41
                },
                {
                    "title": "Finance and Accounting",
                    "value": 42
                },
                {
                    "title": "Research and Development",
                    "value": 44
                },
                {
                    "title": "Purchasing",
                    "value": 45
                },
                {
                    "title": "Legal Department",
                    "value": 46
                },
                {
                    "title": "Quality Assurance",
                    "value": 47
                },
                {
                    "title": "Administration",
                    "value": 48
                },
                {
                    "title": "Manufacturing",
                    "value": 49
                },
                {
                    "title": "Logistics and Supply Chain",
                    "value": 50
                },
                {
                    "title": "Health and Safety",
                    "value": 51
                },
                {
                    "title": "Facility Management",
                    "value": 52
                },
                {
                    "title": "Business Development",
                    "value": 53
                },
                {
                    "title": "Training and Development",
                    "value": 54
                },
                {
                    "title": "Compliance and Risk Management",
                    "value": 55
                },
                {
                    "title": "Engineering",
                    "value": 56
                },
                {
                    "title": "Finance and Accounting",
                    "value": 57
                },
                {
                    "title": "Marketing and Sales",
                    "value": 58
                },
                {
                    "title": "Operations",
                    "value": 59
                },
                {
                    "title": "Operations & Services",
                    "value": 61
                },
                {
                    "title": "IT1",
                    "value": 62
                }
            ]
        },
        "sub_contractor": {
            "label": "Sub Contractor",
            "type": "select",
            "no-option": "Select Sub Contractor",
            "required": true,
            "search": true,
            "width": 4,
            "options": [
                {
                    "title": "CARE INDIA INTECH PRIVATE LIMITED",
                    "value": 2
                },
                {
                    "title": "EVOLUTION CIVIL WORKS",
                    "value": 3
                },
                {
                    "title": "INFINITY CIVIL WORKS",
                    "value": 4
                },
                {
                    "title": "JP Constructions - updated",
                    "value": 5
                },
                {
                    "title": "KAMALAGANESH (CONTRACTOR)",
                    "value": 6
                },
                {
                    "title": "KASTHURI INFRA PROJECTS PVT LTD",
                    "value": 7
                },
                {
                    "title": "KIYAAN ENTERPRISES",
                    "value": 8
                },
                {
                    "title": "MAMALLAN CONTRACTOR",
                    "value": 9
                },
                {
                    "title": "RNR ENTERPRISES",
                    "value": 10
                },
                {
                    "title": "RS DEVELOPMENT AND CONSTRUCTIONS IN",
                    "value": 11
                },
                {
                    "title": "SHANTHI TRANSPORT AND EARTH MOVERS",
                    "value": 12
                },
                {
                    "title": "SPL INFRASTRUCTURE PVT LTD",
                    "value": 13
                },
                {
                    "title": "TEJAS SUPERSTRUCTURES PVT LTD",
                    "value": 14
                },
                {
                    "title": "V K R ENTERPRISES",
                    "value": 15
                },
                {
                    "title": "VENKAT RAMANA CONSTRUCTION",
                    "value": 16
                },
                {
                    "title": "WEL SCOPE",
                    "value": 17
                },
                {
                    "title": "WEL-NGP",
                    "value": 18
                },
                {
                    "title": "Greenfield Landscaping",
                    "value": 20
                },
                {
                    "title": "Blue Ridge Insulation",
                    "value": 22
                },
                {
                    "title": "Platinum Carpentry",
                    "value": 23
                },
                {
                    "title": "SOLUTION  INDIA INTECH PRIVATE LIMITED",
                    "value": 24
                },
                {
                    "title": "testing",
                    "value": 25
                }
            ]
        },
        "status": {
            "label": "Status",
            "type": "select",
            "onChange": "changeDate",
            "default": "open",
            "groupid": "quality_status",
            "disabled": true,
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
                    "title": "Closed",
                    "value": "closed",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Re-open",
                    "value": "re_open",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Submitted",
                    "value": "submitted",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "assigned_to": {
            "label": "Assigned To / Responsibility",
            "type": "select",
            "no-option": "Select Assigned To",
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
                    "title": "Manthan",
                    "value": "manthan"
                },
                {
                    "title": "susamyas",
                    "value": "susamya_ghosh@welspun.com"
                },
                {
                    "title": "Shreeja",
                    "value": "test01"
                },
                {
                    "title": "Aniket Birje",
                    "value": "aniket.birje"
                },
                {
                    "title": "Test",
                    "value": "sourabh.patil"
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
                    "title": "sushant kolekar",
                    "value": "sushant.kolekar"
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
                    "title": "Pramod Test",
                    "value": "58748"
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
                    "title": "Abhishek Kesharwani",
                    "value": "abhishek_kesharwani@welspun.com"
                },
                {
                    "title": "Rashi Sharma",
                    "value": "rashi_sharma@welspun.com"
                },
                {
                    "title": "Pramod Prasad Vyas",
                    "value": "pramodprasad_vyas@welspun.com"
                },
                {
                    "title": "Amor Kool",
                    "value": "amor_kool@welspun.com"
                },
                {
                    "title": "Kiran Sharma",
                    "value": "kiran_sharma@welspun.com"
                },
                {
                    "title": "Sahithi Chitturi",
                    "value": "chitturi_sahithi@welspun.com"
                },
                {
                    "title": "SUPRIYA MONDAL",
                    "value": "supriya_mondal@welspun.com"
                },
                {
                    "title": "Arunraj Balasubramanian",
                    "value": "arunraj_balasubramanian@welspun.com"
                },
                {
                    "title": "R  SARAVANAN",
                    "value": "r_saravnanan@welspun.com"
                },
                {
                    "title": "Akshay Somwanshi",
                    "value": "akshay_somwanshi@welspun.com"
                },
                {
                    "title": "WEL USER2",
                    "value": "wel_user2@welspun.com"
                },
                {
                    "title": "Sushma  Ghogrekar",
                    "value": "sushma_ghogrekar@welspun.com"
                },
                {
                    "title": "Poonam Lokhande",
                    "value": "poonam_lokhande@welspun.com"
                },
                {
                    "title": "Anurag Garg",
                    "value": "anurag_garg@welspun.com"
                },
                {
                    "title": "Master Admin",
                    "value": "masteradmin@welspun.com"
                },
                {
                    "title": "Sudhanshu Purohit",
                    "value": "sudhanshu_purohit@welspun.com"
                },
                {
                    "title": "Shyamal Maiti",
                    "value": "shyamal_maiti@welspun.com"
                },
                {
                    "title": "Abhinit Mishra",
                    "value": "abhinit_mishra@welspun.com"
                },
                {
                    "title": "Abdul Manan",
                    "value": "abdul_manan@welspun.com"
                },
                {
                    "title": "Vaibhav Surkar",
                    "value": "vaibhav_surkar@welspun.com"
                },
                {
                    "title": "SAURABH VARMA",
                    "value": "saurabh_varma@welspun.com"
                },
                {
                    "title": "Buddhadeb Hajra",
                    "value": "buddhadeb_hajra@welspun.com"
                },
                {
                    "title": "VIJAY PANDEY",
                    "value": "vijay_pandey@welspun.com"
                },
                {
                    "title": "Priya Jha",
                    "value": "priya_jha@welspun.com"
                },
                {
                    "title": "SD Shol",
                    "value": "SD_Shol@welspun.com"
                },
                {
                    "title": "Sachin Aggarwal",
                    "value": "Sachin_Aggarwal@welspun.com"
                },
                {
                    "title": "Achintya Chatterjee",
                    "value": "Achintya_Chatterjee@Welspun.com"
                },
                {
                    "title": "RatanLal Kashyap",
                    "value": "RatanLal_Kashyap@welspun.com"
                },
                {
                    "title": "Shankar Parab",
                    "value": "wel_user6@welspun.com"
                },
                {
                    "title": "WEL DARPAN",
                    "value": "WEL_DARPAN@welspun.com"
                },
                {
                    "title": "Aranima Jauhari",
                    "value": "Aranima_Jauhari@welspun.com"
                },
                {
                    "title": "Nikhil Krishna",
                    "value": "Nikhil_Krishna@welspun.com"
                },
                {
                    "title": "Parag Mhaiskar",
                    "value": "Parag_Mhaiskar@welspun.com"
                },
                {
                    "title": "Sunny Narwal",
                    "value": "Sunny_Narwal@welspun.com"
                },
                {
                    "title": "T Karthikeyan",
                    "value": "T_Karthikeyan@welspun.com"
                },
                {
                    "title": "G Chenchu Ramaiah",
                    "value": "G_Chenchuramaiah@welspun.com"
                },
                {
                    "title": "WEL USER4",
                    "value": "WEL_USER4@welspun.com"
                },
                {
                    "title": "Fanee Bhushan Kumar",
                    "value": "FaneeBhushan_Kumar@welspun.com"
                },
                {
                    "title": "Paramananda Panda",
                    "value": "Paramananda_Panda@welspun.com"
                },
                {
                    "title": "Manish Mishra",
                    "value": "Manish_Mishra2@welspun.com"
                },
                {
                    "title": "Pankaj Dixit",
                    "value": "Pankaj_Dixit@welspun.com"
                },
                {
                    "title": "KrushnaChandra Sahoo",
                    "value": "KrushnaChandra_Sahoo@welspun.com"
                },
                {
                    "title": "Santosh Wanjari",
                    "value": "Santosh_Wanjari@welspun.com"
                },
                {
                    "title": "Vivek Kumar Pandey",
                    "value": "Vivekkumar_Pandey@welspun.com"
                },
                {
                    "title": "KV Gopi Raj",
                    "value": "KV_GopiRaj@Welspun.com"
                },
                {
                    "title": "Lingala Sandeep",
                    "value": "Lingala_Sandeep@welspun.com"
                },
                {
                    "title": "Asim Adgiri",
                    "value": "Asim_Adgiri@welspun.com"
                },
                {
                    "title": "Omkar Singh",
                    "value": "Omkar_Singh1@Welspun.com"
                },
                {
                    "title": "Jitendra Kumar Jain",
                    "value": "Jitendra_Jain1@welspun.com"
                },
                {
                    "title": "Birasingh Biswal",
                    "value": "Birasingh_Biswal@welspun.com"
                },
                {
                    "title": "SayedImran Ali",
                    "value": "SayedImran_Ali@welspun.com"
                },
                {
                    "title": "AmitKumar Bhatt",
                    "value": "AmitKumar_Bhatt@welspun.com"
                },
                {
                    "title": "Sudesh Sikarwar",
                    "value": "Sudesh_Sikarwar@welspun.com"
                },
                {
                    "title": "Naveen K",
                    "value": "Naveen_K@welspun.com"
                },
                {
                    "title": "Chetak Mahajan",
                    "value": "Chetak_Mahajan@welspun.com"
                },
                {
                    "title": "Ratnakar Diwate",
                    "value": "Ratnakar_Diwate@welspun.com"
                },
                {
                    "title": "Shrikant Mundokar",
                    "value": "Shrikant_Mundokar@welspun.com"
                },
                {
                    "title": "Bhanu Prakash",
                    "value": "Bhanu_Prakash@welspun.com"
                },
                {
                    "title": "Abdul Qadir",
                    "value": "Abdul_Qadir@welspun.com"
                },
                {
                    "title": "Abhishek sharma",
                    "value": "Abhishek_sharma@welspun.com"
                },
                {
                    "title": "Rakesh Sharma",
                    "value": "Rakesh_Sharma1@welspun.com"
                },
                {
                    "title": "Vignesh G",
                    "value": "Vignesh_G@welspun.com"
                },
                {
                    "title": "Raja A",
                    "value": "Raja_A@welspun.com"
                },
                {
                    "title": "Anil Bannikol",
                    "value": "Anil_Bannikol@welspun.com"
                },
                {
                    "title": "V Prabhu",
                    "value": "V_Prabhu@welspun.com"
                },
                {
                    "title": "MACHANAVAJJALAVENKATA SIVARAMAKRISHNA",
                    "value": "sivaramakrishna_mv@welspun.com"
                },
                {
                    "title": "Chandrakant Mandrupkar",
                    "value": "Chandrakant_Mandrupkar@welspun.com"
                },
                {
                    "title": "Deepak Sarvankar",
                    "value": "Deepak_Sarvankar@welspun.com"
                },
                {
                    "title": "Wel user7",
                    "value": "Wel_user7@welspun.com"
                },
                {
                    "title": "Niral Hingu",
                    "value": "niral.hingu@prosares.com"
                },
                {
                    "title": "Bupinder Challu",
                    "value": "Bupinder_Challu@welspun.com"
                },
                {
                    "title": "Anshul Singh",
                    "value": "Anshul_Singh@Welspun.com"
                },
                {
                    "title": "WEL MOM",
                    "value": "WEL_MOM@welspun.com"
                },
                {
                    "title": "Aditi Mishal",
                    "value": "Aditi_Mishal@welspun.com"
                },
                {
                    "title": "Sameer Shirur",
                    "value": "Sameer_Shirur@welspun.com"
                },
                {
                    "title": "Saptarshi Basu",
                    "value": "Saptarshi_Basu@welspun.com"
                },
                {
                    "title": "Lalit Jain",
                    "value": "lalit_jain@welspun.com"
                },
                {
                    "title": "Sairam Gadwala",
                    "value": "Sairam_Gadwala@welspun.com"
                },
                {
                    "title": "SubratKumar Jena",
                    "value": "SubratKumar_Jena@welspun.com"
                },
                {
                    "title": "Shrivathsa Bhat",
                    "value": "Shrivathsa_Bhat@welspun.com"
                },
                {
                    "title": "Guntha Sreeramulu",
                    "value": "Guntha_Sreeramulu@welspun.com"
                },
                {
                    "title": "Manoj Gera",
                    "value": "manoj_gera@welspun.com"
                },
                {
                    "title": "Uttam Sah",
                    "value": "Uttam_Sah@welspun.com"
                },
                {
                    "title": "HansaDutt Joshi",
                    "value": "HansaDutt_Joshi@welspun.com"
                },
                {
                    "title": "Rinku Moni Dutta",
                    "value": "RinkuMoni_Dutta@welspun.com"
                },
                {
                    "title": "Pranjali Singh",
                    "value": "Pranjali_Singh@welspun.com"
                },
                {
                    "title": "Punumalli Srinivasarao",
                    "value": "Punumalli_Srinivasarao@welspun.com"
                },
                {
                    "title": "MohdSaqib Siddiqui",
                    "value": "MohdSaqib_Siddiqui@welspun.com"
                },
                {
                    "title": "Shubham Pandey",
                    "value": "Shubham_Pandey@welspun.com"
                },
                {
                    "title": "Jit Banerjee",
                    "value": "Jit_Banerjee@welspun.com"
                },
                {
                    "title": "Mahesh Rohra",
                    "value": "Mahesh_Rohra@welspun.com"
                },
                {
                    "title": "Manojkumar Pandey",
                    "value": "Manojkumar_Pandey@welspun.com"
                },
                {
                    "title": "Bikram Kumar",
                    "value": "Bikram_Kumar@welspun.com"
                },
                {
                    "title": "Md Hasanujjaman",
                    "value": "Md_Hasanujjaman@welspun.com"
                },
                {
                    "title": "Anand Prakash Pandey",
                    "value": "AnandPrakash_Pandey@welspun.com"
                },
                {
                    "title": "Mohit Agrawal",
                    "value": "Mohit_Agrawal@welspun.com"
                },
                {
                    "title": "Akhtar Ali",
                    "value": "Akhtar_Ali@welspun.com"
                },
                {
                    "title": "ManishKumar Pipal",
                    "value": "ManishKumar_Pipal@welspun.com"
                },
                {
                    "title": "Amit kumar",
                    "value": "Amit_kumar6@welspun.com"
                },
                {
                    "title": "Wasim Ahmad",
                    "value": "Wasim_Ahmad@welspun.com"
                },
                {
                    "title": "Rajan Singh",
                    "value": "Rajan_Singh@welspun.com"
                },
                {
                    "title": "Vijay Kumar Singh",
                    "value": "Vijay_Singh1@welspun.com"
                },
                {
                    "title": "Jyoti Kumar",
                    "value": "Jyoti_Kumar@welspun.com"
                },
                {
                    "title": "Anurag Yadav",
                    "value": "Anurag_Yadav@welspun.com"
                },
                {
                    "title": "Nitin Bist",
                    "value": "Nitin_Bist@welspun.com"
                },
                {
                    "title": "Pawan Kumar",
                    "value": "Pawan_Kumar3@welspun.com"
                },
                {
                    "title": "Soumen Das",
                    "value": "Soumen_Das1@welspun.com"
                },
                {
                    "title": "Shibashish Mukherjee",
                    "value": "Shibashish_mukherjee@welspun.com"
                },
                {
                    "title": "AjayKumar Pandey",
                    "value": "AjayKumar_Pandey@welspun.com"
                },
                {
                    "title": "Rajendra Singh",
                    "value": "Rajendra_Singh1@welspun.com"
                },
                {
                    "title": "Om Kumar Singh",
                    "value": "Om_Singh@welspun.com"
                },
                {
                    "title": "Diajyoti Satiar",
                    "value": "Diajyoti_Satiar@welspun.com"
                },
                {
                    "title": "Jitendra Dixit",
                    "value": "Jitendra_Dixit@welspun.com"
                },
                {
                    "title": "Vinoo Sanjay",
                    "value": "vinoo_sanjay@welspun.com"
                },
                {
                    "title": "Angela Raut",
                    "value": "Angela_Raut@welspun.com"
                },
                {
                    "title": "Sandeep Garg",
                    "value": "sgarg@welspun.com"
                },
                {
                    "title": "Vikas Kasaudhan",
                    "value": "Vikas_Kasaudhan@welspun.com"
                },
                {
                    "title": "Rahul Jain",
                    "value": "Rahul_Jain@welspun.com"
                },
                {
                    "title": "Ashish Pandita",
                    "value": "Ashish_Pandita@welspun.com"
                },
                {
                    "title": "Ashish Savant",
                    "value": "Ashish_Savant@welspun.com"
                },
                {
                    "title": "Subhash Thakkar",
                    "value": "subhash_thakkar@welspun.com"
                },
                {
                    "title": "Yogen Lal",
                    "value": "Yogen_Lal@welspun.com"
                },
                {
                    "title": "Shashi Pandey",
                    "value": "Shashi_Pandey@welspun.com"
                },
                {
                    "title": "Rohit Roy",
                    "value": "rohit_roy@welspun.com"
                },
                {
                    "title": "TRIDIP SHRICHANDAN",
                    "value": "TRIDIP_SHRICHANDAN@welspun.com"
                },
                {
                    "title": "Vineet Kumar Tiwari",
                    "value": "VineetKumar_Tiwari@welspun.com"
                },
                {
                    "title": "Kedar Nath Bansal",
                    "value": "kedarnath_bansal@welspun.com"
                },
                {
                    "title": "Writuraj Kaushik",
                    "value": "Writuraj_Kaushik@welspun.com"
                },
                {
                    "title": "Arvind Kumar",
                    "value": "arvind_kumar@welspun.com"
                },
                {
                    "title": "Sisir Pal",
                    "value": "Sisir_Pal@welspun.com"
                },
                {
                    "title": "Ranjeet Kumar",
                    "value": "Ranjeet_Kumar@welspun.com"
                },
                {
                    "title": "Pinakee Dey",
                    "value": "Pinakee_Dey@welspun.com"
                },
                {
                    "title": "Ramveer Singh",
                    "value": "Ramveer_Singh@welspun.com"
                },
                {
                    "title": "Vinay Pandey",
                    "value": "Vinay_Pandey@welspun.com"
                },
                {
                    "title": "Atul Kumar",
                    "value": "Atul_Kumar@welspun.com"
                },
                {
                    "title": "Upendra kumarThakur",
                    "value": "Upendrakumar_Thakur@Welspun.com"
                },
                {
                    "title": "Sujit Kumar Choudhary",
                    "value": "SujitK_Choudhary@welspun.com"
                },
                {
                    "title": "Basant Kumar",
                    "value": "Basant_Kumar@welspun.com"
                },
                {
                    "title": "Rateeshsingh Kunwar",
                    "value": "rateeshsingh_kunwar@welspun.com"
                },
                {
                    "title": "Aditya Harlalka",
                    "value": "Aditya_Harlalka@welspun.com"
                },
                {
                    "title": "Harshad Kulkarni",
                    "value": "Harshad_Kulkarni@welspun.com"
                },
                {
                    "title": "Rakesh Kumar",
                    "value": "Rakesh_Kumar02@welspun.com"
                },
                {
                    "title": "N R babu",
                    "value": "N_Rbabu@welspun.com"
                },
                {
                    "title": "Nandini Bharti",
                    "value": "Nandini_Bharti@welspun.com"
                },
                {
                    "title": "Narayana Moorthi",
                    "value": "Narayana_Moorthi@welspun.com"
                },
                {
                    "title": "Saravanan M",
                    "value": "Saravanan_M@welspun.com"
                },
                {
                    "title": "Satyaprakash Yadav",
                    "value": "Satyaprakash_Yadav@welspun.com"
                },
                {
                    "title": "Saravanan M",
                    "value": "Saravanan_M1@welspun.com"
                },
                {
                    "title": "Abhishek Chaudhary",
                    "value": "Abhishek_Chaudhary1@welspun.com"
                },
                {
                    "title": "Abhinava Srivastva",
                    "value": "Abhinava_Srivastva@welspun.com"
                },
                {
                    "title": "Abhinav Srivastava",
                    "value": "Abhinav_Srivastava@welspun.com"
                },
                {
                    "title": "Priyadharsini M",
                    "value": "Priyadharsini_M@welspun.com"
                },
                {
                    "title": "Kumar Purushottam",
                    "value": "Kumar_Purushottam@welspun.com"
                },
                {
                    "title": "Dharam Maurya",
                    "value": "dharmendra.maurya@prosares.com"
                },
                {
                    "title": "VAIBHAV SURKAR",
                    "value": "vsurkar24@gmail.com"
                },
                {
                    "title": "Shankar Parab",
                    "value": "shankarparab1996@gmail.com"
                },
                {
                    "title": "Altaf Shaikh",
                    "value": "altaf.shaikh@prosares.com"
                },
                {
                    "title": "SATHYA S",
                    "value": "sathyasathyaselvaraj@gmail.com"
                },
                {
                    "title": "S.J ARAVIND",
                    "value": "aravindjawahar143@gmail.com"
                },
                {
                    "title": "Rana Pratap Singh",
                    "value": "RanaPratap_Singh@welspun.com"
                },
                {
                    "title": "SatwataMitra Majumdar",
                    "value": "Satwata_Majumdar@welspun.com"
                },
                {
                    "title": "Monish Darekar",
                    "value": "Monish_Darekar@welspun.com"
                },
                {
                    "title": "MdShadab Alam",
                    "value": "MdShadab_Alam@welspun.com"
                },
                {
                    "title": "Bhavesh Gulvi",
                    "value": "Bhavesh_Gulvi@welspun.com"
                },
                {
                    "title": "Satheskumar Selvaraj",
                    "value": "Satheskumar_Selvaraj@welspun.com"
                },
                {
                    "title": "Shailendra Aware",
                    "value": "Shailendra_Aware@welspun.com"
                },
                {
                    "title": "Amarjit Nag",
                    "value": "Amarjit_Nag@welspun.com"
                },
                {
                    "title": "Suresh Rathod",
                    "value": "Suresh_Rathod1@welspun.com"
                },
                {
                    "title": "Shailendra Vable",
                    "value": "Shailendra_Vable@welspun.com"
                },
                {
                    "title": "Shaikh Ali",
                    "value": "Shaikh_Ali@welspun.com"
                },
                {
                    "title": "Sunil Dubey",
                    "value": "Sunil_Dubey@welspun.com"
                },
                {
                    "title": "Ravi Pednekar",
                    "value": "Ravi_Pednekar@welspun.com"
                },
                {
                    "title": "Rakesh Katoch",
                    "value": "Rakesh_Katoch@welspun.com"
                },
                {
                    "title": "Dhirendra Tiwari",
                    "value": "Dhirendra_Tiwari@welspun.com"
                },
                {
                    "title": "Anirudh Baikady",
                    "value": "Anirudh_Baikady@welspun.com"
                },
                {
                    "title": "SauravKumar Prince",
                    "value": "SauravKumar_Prince@welspun.com"
                },
                {
                    "title": "Sumit Das",
                    "value": "Sumit_Das@welspun.com"
                },
                {
                    "title": "Mohammad Irfan",
                    "value": "Mohammad_Irfan1@welspun.com"
                },
                {
                    "title": "Promothes Pal",
                    "value": "Promothes_Pal@welspun.com"
                },
                {
                    "title": "Abdur Rahaman",
                    "value": "Abdur_Rahaman@welspun.com"
                },
                {
                    "title": "RaviRanjan Kumar",
                    "value": "RaviRanjan_Kumar@welspun.com"
                },
                {
                    "title": "Anurag Sharma",
                    "value": "Anurag_Sharma@welspun.com"
                },
                {
                    "title": "Deepak Kumar7",
                    "value": "Deepak_Kumar7@welspun.com"
                },
                {
                    "title": "Bhagaram Banjara",
                    "value": "Bhagaram_Banjara@welspun.com"
                },
                {
                    "title": "Pandey Vijay Anand",
                    "value": "PandeyVijay_Anand@welspun.com"
                },
                {
                    "title": "Sheik Samdani",
                    "value": "Sheik_Samdani@welspun.com"
                },
                {
                    "title": "Dhamotharakannan Seenivasagan",
                    "value": "Dhamotharakannan_Seenivasagan@welspun.com"
                },
                {
                    "title": "Raviteja Pamarthi",
                    "value": "Raviteja_pamarthi@welspun.com"
                },
                {
                    "title": "Popuri Anjaneyulu",
                    "value": "Popuri_Anjaneyulu@welspun.com"
                },
                {
                    "title": "P Rajendran",
                    "value": "P_Rajendran@welspun.com"
                },
                {
                    "title": "Raveendra Intheti",
                    "value": "Raveendra_Intheti@welspun.com"
                },
                {
                    "title": "Avinash Kumar",
                    "value": "Avinash_Kumar1@welspun.com"
                },
                {
                    "title": "Kishore Braj",
                    "value": "Kishore_Braj@welspun.com"
                },
                {
                    "title": "Sandip Patra",
                    "value": "Sandip_Patra@welspun.com"
                },
                {
                    "title": "Manoj Kumar RK",
                    "value": "manojkumar_RK@welspun.com"
                },
                {
                    "title": "Ranjan Kumar",
                    "value": "Ranjan_Kumar@welspun.com"
                },
                {
                    "title": "Pranit Dalvi",
                    "value": "Pranit_Dalvi@welspun.com"
                },
                {
                    "title": "Abhijeet Potdar",
                    "value": "Abhijeet_Potdar@welspun.com"
                },
                {
                    "title": "Gourav Paliwal",
                    "value": "Gourav_Paliwal@welspun.com"
                },
                {
                    "title": "Abhishek Singh",
                    "value": "Abhishek_Singh@welspun.com"
                },
                {
                    "title": "Nitai Biswas",
                    "value": "Nitai_Biswas@welspun.com"
                },
                {
                    "title": "Asim Chakraborty",
                    "value": "akc@welspun.com"
                },
                {
                    "title": "undefined undefined",
                    "value": "undefined"
                },
                {
                    "title": "Ranjit Kumar",
                    "value": "ranjit_kumar@welspun.com"
                },
                {
                    "title": "Vijayan Nambiar",
                    "value": "Vijayan_Nambiar@welspun.com"
                },
                {
                    "title": "Sarfraj Khan",
                    "value": "Sarfraj_Khan@welspun.com"
                },
                {
                    "title": "Bhupendra Kumar",
                    "value": "Bhupendra_Kumar@welspun.com"
                },
                {
                    "title": "Chandan Kumar",
                    "value": "Chandan_Kumar1@Welspun.com"
                },
                {
                    "title": "Dukhishyam Sahoo",
                    "value": "Dukhishyam_Sahoo@welspun.com"
                },
                {
                    "title": "Masilamani Baskar",
                    "value": "Masilamani_Baskar@welspun.com"
                },
                {
                    "title": "Zafar Asad",
                    "value": "Zafar_Asad@Welspun.com"
                },
                {
                    "title": "Jitendra Kumar",
                    "value": "Jitendra_Kumar1@welspun.com"
                },
                {
                    "title": "Vivek Parmar",
                    "value": "Vivek_Parmar@welspun.com"
                },
                {
                    "title": "Arvind Maurya",
                    "value": "Arvind_Maurya@welspun.com"
                },
                {
                    "title": "TuliaKumar Das",
                    "value": "TuliaKumar_Das@welspun.com"
                },
                {
                    "title": "VishamberSingh Rajput",
                    "value": "VishamberSingh_Rajput@welspun.com"
                },
                {
                    "title": "Jiya Lal",
                    "value": "Jiya_Lal@welspun.com"
                },
                {
                    "title": "Vivek Kumar",
                    "value": "Vivek_Kumar1@welspun.com"
                },
                {
                    "title": "Vikas Kumar",
                    "value": "Vikas_Kumar@welspun.com"
                },
                {
                    "title": "Tarik Anwar",
                    "value": "Tarik_Anwar@welspun.com"
                },
                {
                    "title": "ChandraMohan Kumar",
                    "value": "ChandraMohan_Kumar@welspun.com"
                },
                {
                    "title": "Himansu Panda",
                    "value": "himansu_panda@welspun.com"
                },
                {
                    "title": "Nagamuthu Dhandapani",
                    "value": "Nagamuthu_Dhandapani@welspun.com"
                },
                {
                    "title": "Sumitkumar Singh",
                    "value": "sumit_singh@welspun.com"
                },
                {
                    "title": "Mainuddin Hussain",
                    "value": "Mainuddin_Hussain@welspun.com"
                },
                {
                    "title": "ACIL Quality",
                    "value": "quality.dharavi@acilnet.com"
                },
                {
                    "title": "Kunal Banerjee",
                    "value": "Kunal_Banerjee@welspun.com"
                },
                {
                    "title": "Jitendra Tayde",
                    "value": "Jitendra_Tayde@welspun.com"
                },
                {
                    "title": "Rohan Dalvi",
                    "value": "Rohan_Dalvi@welspun.com"
                },
                {
                    "title": "Mahendra Darji",
                    "value": "Mahendra_Darji@welspun.com"
                },
                {
                    "title": "Vishal Singh",
                    "value": "Vishal_Singh1@welspun.com"
                },
                {
                    "title": "Sanket Garg",
                    "value": "Sanket_Garg@welspun.com"
                },
                {
                    "title": "Raghunandan Ratnaparkhi",
                    "value": "Raghunandan_Ratnaparkhi@welspun.com"
                },
                {
                    "title": "Mahendra Kandukuri",
                    "value": "Mahendra_Kandukuri@welspun.com"
                },
                {
                    "title": "Akshay Patil",
                    "value": "akshay.patil4@in.ey.com"
                },
                {
                    "title": "Pravin Pavadshetti",
                    "value": "Pravin_Pavadshetti@welspun.com"
                },
                {
                    "title": "DineshKumar Singh",
                    "value": "DineshKumar_Singh@welspun.com"
                },
                {
                    "title": "Dhananjay Waghachure",
                    "value": "Dhananjay_Waghachure@welspun.com"
                },
                {
                    "title": "AshishKumar Mishra",
                    "value": "AshishKumar_Mishra1@welspun.com"
                },
                {
                    "title": "Ritesh Kulshrestha",
                    "value": "Ritesh_Kulshrestha@welspun.com"
                },
                {
                    "title": "RaviKumar Ray",
                    "value": "RaviKumar_Ray@welspun.com"
                },
                {
                    "title": "BijayaKumar Sahu",
                    "value": "BijayaKumar_Sahu@welspun.com"
                },
                {
                    "title": "ArunPratap Singh",
                    "value": "ArunPratap_Singh@Welspun.com"
                },
                {
                    "title": "MohammadJuber Ahamad",
                    "value": "MohammadJuber_Ahamad@welspun.com"
                },
                {
                    "title": "Ankit Porwal",
                    "value": "Ankit_Porwal1@welspun.com"
                },
                {
                    "title": "Joydeb Paul",
                    "value": "Joydeb_Paul@welspun.com"
                },
                {
                    "title": "Vijay Singh",
                    "value": "Vijay_Singh2@welspun.com"
                },
                {
                    "title": "Shiba Parida",
                    "value": "Shiba_Parida@welspun.com"
                },
                {
                    "title": "Rashid Hussain",
                    "value": "Rashid_Hussain@welspun.com"
                },
                {
                    "title": "Govind Sen",
                    "value": "Govind_Sen@welspun.com"
                },
                {
                    "title": "Chetan Mali",
                    "value": "Chetan_Mali@welspun.com"
                },
                {
                    "title": "Mohammad Irfan",
                    "value": "mohammad_irfan@welspun.com"
                },
                {
                    "title": "MOUSOM DANDAPATH",
                    "value": "MOUSOM_DANDAPATH@welspun.com"
                },
                {
                    "title": "Saurin Patel",
                    "value": "Saurin_Patel@welspun.com"
                },
                {
                    "title": "Bijay Singh",
                    "value": "bijay_singh@welspun.com"
                },
                {
                    "title": "Mahendra Dixit",
                    "value": "Mahendra_Dixit@welspun.com"
                },
                {
                    "title": "Onkar Pandey",
                    "value": "Onkar_Pandey@welspun.com"
                },
                {
                    "title": "EY PMOMEPL",
                    "value": "EY_PMOMEPL@welspun.com"
                },
                {
                    "title": "Shiva Lankalapalli",
                    "value": "Shiva_Lankalapalli@welspun.com"
                },
                {
                    "title": "Saurabh Mishra",
                    "value": "Saurabh_Mishra1@welspun.com"
                },
                {
                    "title": "ShahAmir Nawab",
                    "value": "ShahAmir_Nawab@welspun.com"
                },
                {
                    "title": "Mithlesh Kumar",
                    "value": "Mithlesh_Kumar@welspun.com"
                },
                {
                    "title": "Aazad Kathat",
                    "value": "Aazad_Kathat@welspun.com"
                },
                {
                    "title": "Sudipta Ghosh",
                    "value": "Sudipta_Ghosh@welspun.com"
                },
                {
                    "title": "PankajKumar Sah",
                    "value": "PankajKumar_Sah@welspun.com"
                },
                {
                    "title": "Debanjan Dey",
                    "value": "Debanjan_Dey@welspun.com"
                },
                {
                    "title": "Alok Kumar",
                    "value": "Alok_Kumar1@welspun.com"
                },
                {
                    "title": "Mukesh Kumar",
                    "value": "Mukesh_Kumar4@welspun.com"
                },
                {
                    "title": "Shivam Gupta",
                    "value": "Shivam_Gupta@welspun.com"
                },
                {
                    "title": "Aman Singh",
                    "value": "Aman_Singh3@welspun.com"
                },
                {
                    "title": "PrithaviRaj Chouhan",
                    "value": "PrithaviRaj_Chouhan@welspun.com"
                },
                {
                    "title": "Haseeb Khan",
                    "value": "Haseeb_Khan@welspun.com"
                },
                {
                    "title": "Akshay Pandey",
                    "value": "Akshay_Pandey@welspun.com"
                },
                {
                    "title": "Nikhil Singh",
                    "value": "Nikhil_Singh@welspun.com"
                },
                {
                    "title": "Shivpoojan Kumar",
                    "value": "Shivpoojan_Kumar@welspun.com"
                },
                {
                    "title": "Mohit Tiwari",
                    "value": "Mohit_Tiwari@welspun.com"
                },
                {
                    "title": "Ashish Patel",
                    "value": "Ashish_Patel@welspun.com"
                },
                {
                    "title": "Jagesh Kumar",
                    "value": "Jagesh_Kumar@welspun.com"
                },
                {
                    "title": "Suraj Shakya",
                    "value": "Suraj_Shakya@welspun.com"
                },
                {
                    "title": "Vivek Kumar",
                    "value": "Vivek_Kumar2@welspun.com"
                },
                {
                    "title": "Shashi RanjanKumar",
                    "value": "Shashi_RanjanKumar@welspun.com"
                },
                {
                    "title": "Himaanshu Dwivedi",
                    "value": "Himaanshu_Dwivedi@welspun.com"
                },
                {
                    "title": "Afsar Ali",
                    "value": "Afsar_Ali@welspun.com"
                },
                {
                    "title": "Priyatosh Rout",
                    "value": "Priyatosh_Rout@welspun.com"
                },
                {
                    "title": "Adarsh Maurya",
                    "value": "Adarsh_Maurya@welspun.com"
                },
                {
                    "title": "Rajnish Kumar",
                    "value": "rajnish_kumar@welspun.com"
                },
                {
                    "title": "Ms Nandhini",
                    "value": "nanthu3856@gmail.com"
                },
                {
                    "title": "Ms Sujitha",
                    "value": "sujithasakthivel209@gmail.com"
                },
                {
                    "title": "Mahesh Kesharwani",
                    "value": "Mahesh_Kesharwani@welspun.com"
                },
                {
                    "title": "Satyendra Singh",
                    "value": "Satyendra_Singh1@welspun.com"
                },
                {
                    "title": "Parmeesh Singh",
                    "value": "Parmeesh_Singh@welspun.com"
                },
                {
                    "title": "Amit Pareek",
                    "value": "Amit_Pareek@welspun.com"
                },
                {
                    "title": "Harshit Tripathi",
                    "value": "Harshit_Tripathi@welspun.com"
                },
                {
                    "title": "VikashKumar Upadhyay",
                    "value": "VikashKumar_Upadhyay@welspun.com"
                },
                {
                    "title": "Ankit Pandey",
                    "value": "Ankit_Pandey1@welspun.com"
                },
                {
                    "title": "Ajad Khan",
                    "value": "Ajad_Khan@welspun.com"
                },
                {
                    "title": "Pradeep Gupta",
                    "value": "Pradeep_Gupta@welspun.com"
                },
                {
                    "title": "Sumit Kumar",
                    "value": "Sumit_Kumar2@welspun.com"
                },
                {
                    "title": "Pankaj Pundir",
                    "value": "Pankaj_Pundir@welspun.com"
                },
                {
                    "title": "Devesh Srivastava",
                    "value": "Devesh_Srivastava@welspun.com"
                },
                {
                    "title": "Shiv Nath Jogi",
                    "value": "ShivNath_Jogi@welspun.com"
                },
                {
                    "title": "PradeepKumar Gupta",
                    "value": "PradeepKumar_Gupta@welspun.com"
                },
                {
                    "title": "Udit Mishra",
                    "value": "Udit_Mishra@welspun.com"
                },
                {
                    "title": "Hemraj Singh",
                    "value": "Hemraj_Singh@welspun.com"
                },
                {
                    "title": "Aniket Kumar",
                    "value": "Aniket_Kumar@welspun.com"
                },
                {
                    "title": "Harikesh Yadav",
                    "value": "Harikesh_Yadav@welspun.com"
                },
                {
                    "title": "Abhishek Kumar",
                    "value": "Abhishek_Kumar1@welspun.com"
                },
                {
                    "title": "PawanKumar Yadav",
                    "value": "PawanKumar_Yadav@welspun.com"
                },
                {
                    "title": "Praveen Singh",
                    "value": "Praveen_Singh1@welspun.com"
                },
                {
                    "title": "Souvik Jash",
                    "value": "Souvik_Jash@welspun.com"
                },
                {
                    "title": "Animesh Shukla",
                    "value": "Animesh_Shukla@welspun.com"
                },
                {
                    "title": "Sandeep Raj",
                    "value": "Sandeep_Raj@welspun.com"
                },
                {
                    "title": "Rizwan Ansari",
                    "value": "Rizwan_Ansari@welspun.com"
                },
                {
                    "title": "Avneet Kumar",
                    "value": "Avneet_Kumar@welspun.com"
                },
                {
                    "title": "Rahul Singh",
                    "value": "Rahul_Singh1@welspun.com"
                },
                {
                    "title": "Girish Kharkar",
                    "value": "Girish_Kharkar@welspun.com"
                },
                {
                    "title": "Vicky Kumar",
                    "value": "Vicky_Kumar@welspun.com"
                },
                {
                    "title": "Jay Singh",
                    "value": "Jay_Singh@welspun.com"
                },
                {
                    "title": "Pradeep Kumar Gupta",
                    "value": "PradeepKumar_Gupta1@welspun.com"
                },
                {
                    "title": "Rupesh Kumar",
                    "value": "Rupesh_Kumar1@welspun.com"
                },
                {
                    "title": "Saurabh Kumar",
                    "value": "Saurabh_Kumar1@welspun.com"
                },
                {
                    "title": "SumitKumar Jha",
                    "value": "SumitKumar_Jha@welspun.com"
                },
                {
                    "title": "Ganta Pallavi",
                    "value": "Ganta_Pallavi@Welspun.com"
                },
                {
                    "title": "SudhirKumar Dubey",
                    "value": "SudhirKumar_Dubey@welspun.com"
                },
                {
                    "title": "AbhishekKumar Mishra",
                    "value": "AbhishekKumar_Mishra1@welspun.com"
                },
                {
                    "title": "Ravindra Gautam",
                    "value": "Ravindra_Gautam@welspun.com"
                },
                {
                    "title": "Vivek Pandey",
                    "value": "Vivek_Pandey2@welspun.com"
                },
                {
                    "title": "RUBUL ALI",
                    "value": "RUBUL_ALI@welspun.com"
                },
                {
                    "title": "Uday Yadav",
                    "value": "Uday_Yadav@welspun.com"
                },
                {
                    "title": "Ashutosh Rai",
                    "value": "Ashutosh_Rai1@welspun.com"
                },
                {
                    "title": "Deepak Tiwari",
                    "value": "Deepak_Tiwari@welspun.com"
                },
                {
                    "title": "MANI BHUSAN SAHAY",
                    "value": "MANIBHUSAN_SAHAY@welspun.com"
                },
                {
                    "title": "Hemant Singh",
                    "value": "Hemant_Singh@welspun.com"
                },
                {
                    "title": "MdSakil Khan",
                    "value": "MdSakil_Khan@welspun.com"
                },
                {
                    "title": "Rahul Kumar",
                    "value": "Rahul_Kumar1@welspun.com"
                },
                {
                    "title": "Mukul Maurya",
                    "value": "Mukul_Maurya@welspun.com"
                },
                {
                    "title": "Manzoor Shaikh",
                    "value": "Manzoor_Shaikh@welspun.com"
                },
                {
                    "title": "Anshu Maurya",
                    "value": "Anshu_Maurya@welspun.com"
                },
                {
                    "title": "Hari Awadh",
                    "value": "Hari_Awadh@welspun.com"
                },
                {
                    "title": "Rajnish Kumar Shukla",
                    "value": "Rajnish_KumarShukla@welspun.com"
                },
                {
                    "title": "Anil Ojha",
                    "value": "Anil_Ojha@welspun.com"
                },
                {
                    "title": "Sachin Mhaismale",
                    "value": "Sachin_Mhaismale@welspun.com"
                },
                {
                    "title": "Tharmesh Chauhan",
                    "value": "Tharmesh_Chauhan@welspun.com"
                },
                {
                    "title": "Harindra Singh",
                    "value": "Harindra_Singh@welspun.com"
                },
                {
                    "title": "Shravan Kumar Pandey",
                    "value": "Shravan_KumarPandey@welspun.com"
                },
                {
                    "title": "FaneeBhushan Kumar",
                    "value": "FaneeBhushan_Kumar1@welspun.com"
                },
                {
                    "title": "AjayKumar Varma",
                    "value": "AjayKumar_Varma@welspun.com"
                },
                {
                    "title": "Anurag Mankar",
                    "value": "Anurag_Mankar@welspun.com"
                },
                {
                    "title": "Vivek Anand",
                    "value": "Vivek_Anand@welspun.com"
                },
                {
                    "title": "Neha Gupta",
                    "value": "Neha_Gupta@welspun.com"
                },
                {
                    "title": "Ankit Pandey",
                    "value": "Ankit_Pandey@welspun.com"
                },
                {
                    "title": "Praveen Singh",
                    "value": "Praveen_Singh@welspun.com"
                },
                {
                    "title": "PriyaDayal Pandey",
                    "value": "PriyaDayal_Pandey@welspun.com"
                },
                {
                    "title": "Pratham Kumar",
                    "value": "Pratham_Kumar@welspun.com"
                },
                {
                    "title": "Kamal Verma",
                    "value": "Kamal_Verma@welspun.com"
                },
                {
                    "title": "Ranjan Biswas",
                    "value": "Ranjan_Biswas@welspun.com"
                },
                {
                    "title": "Ankur Kumar",
                    "value": "Ankur_Kumar@welspun.com"
                },
                {
                    "title": "Sanjeet Kumar",
                    "value": "Sanjeet_Kumar@welspun.com"
                },
                {
                    "title": "NikhilKumar Singh",
                    "value": "NikhilKumar_Singh@welspun.com"
                },
                {
                    "title": "ArunKumar Verma",
                    "value": "ArunKumar_Verma@welspun.com"
                },
                {
                    "title": "Anjali Shikha",
                    "value": "Anjali_Shikha@welspun.com"
                },
                {
                    "title": "Payal Medatwal",
                    "value": "Payal_Medatwal@welspun.com"
                },
                {
                    "title": "Balkrishan Goenka",
                    "value": "bkg@welspun.com"
                },
                {
                    "title": "Rajesh R. Mandawewala",
                    "value": "rrm@welspun.com"
                },
                {
                    "title": "Kapil Arora",
                    "value": "Kapil_Arora@welspun.com"
                },
                {
                    "title": "Arun Kumar",
                    "value": "Arun_Kumar@welspun.com"
                },
                {
                    "title": "Ankit Singh",
                    "value": "Ankit_Singh@welspun.com"
                },
                {
                    "title": "Rahul Kumar",
                    "value": "Rahul_Kumar@welspun.com"
                },
                {
                    "title": "Harikesh Yadav",
                    "value": "Harikesh_Yadav1@welspun.com"
                },
                {
                    "title": "Praveen Kumar 4",
                    "value": "Praveen_Kumar4@welspun.com"
                },
                {
                    "title": "Yogesh Singh",
                    "value": "Yogesh_Singh@welspun.com"
                },
                {
                    "title": "Akash Singh",
                    "value": "Akash_Singh@welspun.com"
                },
                {
                    "title": "Vikas Yadav",
                    "value": "Vikas_Yadav1@welspun.com"
                },
                {
                    "title": "WEL PRAGATI",
                    "value": "wel_pragati@welspun.com"
                },
                {
                    "title": "Arun Singh",
                    "value": "Arun_Singh@welspun.com"
                },
                {
                    "title": "Brij Goyal",
                    "value": "Brij_Goyal@welspun.com"
                },
                {
                    "title": "ManojKumar Yadav",
                    "value": "ManojKumar_Yadav1@welspun.com"
                },
                {
                    "title": "WEL USER5",
                    "value": "WEL_USER5@welspun.com"
                },
                {
                    "title": "Muthukrishnan Dharmalingam",
                    "value": "Muthukrishnan_D@welspun.com"
                },
                {
                    "title": "Bammidi Sumanth",
                    "value": "Bammidi_Sumanth@welspun.com"
                },
                {
                    "title": "Sonu Kumar",
                    "value": "Sonu_Kumar@welspun.com"
                },
                {
                    "title": "Sonu Kumar",
                    "value": "Sonu_Kumar2@welspun.com"
                },
                {
                    "title": "Prem Kumar",
                    "value": "Prem_Kumar1@welspun.com"
                },
                {
                    "title": "Priyanshu Toraskar",
                    "value": "Priyanshu_Toraskar@welspun.com"
                },
                {
                    "title": "Aditya Chavan",
                    "value": "Aditya_Chavan@welspun.com"
                },
                {
                    "title": "R Prabu",
                    "value": "R_Prabu@welspun.com"
                },
                {
                    "title": "Sathish KumarT",
                    "value": "Sathish_KumarT@welspun.com"
                },
                {
                    "title": "Ankit Singh",
                    "value": "Ankit_Singh1@welspun.com"
                },
                {
                    "title": "Devendra Shukla",
                    "value": "Devendra_Shukla@welspun.com"
                },
                {
                    "title": "Syed MohammadAli",
                    "value": "Syed_MohammadAli@welspun.com"
                },
                {
                    "title": "WEL USER1",
                    "value": "WEL_USER1@welspun.com"
                },
                {
                    "title": "Mukesh Verma",
                    "value": "mukesh_verma@welspun.com"
                },
                {
                    "title": "Mukesh Verma",
                    "value": "Mukesh_Verma1@welspun.com"
                },
                {
                    "title": "Monica Salins",
                    "value": "Monica_Salins@welspun.com"
                },
                {
                    "title": "Vaishali Dhamankar",
                    "value": "Vaishali_Dhamankar@welspun.com"
                },
                {
                    "title": "Paras Jain",
                    "value": "Paras_Jain1@Welspun.com"
                },
                {
                    "title": "Rupesh Lingarkar",
                    "value": "Rupesh_Lingarkar@welspun.com"
                },
                {
                    "title": "Jitendrakumar Panchal",
                    "value": "Jitendrakumar_Panchal@welspun.com"
                },
                {
                    "title": "Sunil Kumar",
                    "value": "Sunil_Kumar2@welspun.com"
                },
                {
                    "title": "Manojkumar Sharma",
                    "value": "manojkumar_sharma@welspun.com"
                },
                {
                    "title": "Suyog Sakhare",
                    "value": "Suyog_Sakhare@welspun.com"
                },
                {
                    "title": "Sanjeev Mendiratta",
                    "value": "sanjeev_mendiratta@welspun.com"
                },
                {
                    "title": "Mr K.HARINASH",
                    "value": "HARINASHK5@GMAIL.COM"
                },
                {
                    "title": "WEL USER3",
                    "value": "wel_user3@welspun.com"
                },
                {
                    "title": "Omkar Mhapralkar",
                    "value": "Omkar_Mhapralkar@welspun.com"
                },
                {
                    "title": "Dattatray Shelke",
                    "value": "Dattatray_Shelke@welspun.com"
                },
                {
                    "title": "Pradeep V G",
                    "value": "Pradeep_VG@welspun.com"
                },
                {
                    "title": "Amol Kumamekar",
                    "value": "Amol_Kumamekar@welspun.com"
                },
                {
                    "title": "Rahul Negi",
                    "value": "Rahul_Negi@welspun.com"
                },
                {
                    "title": "Prashant Gangwar",
                    "value": "Prashant_Gangwar@welspun.com"
                },
                {
                    "title": "Nilesh Poyrekar",
                    "value": "Nilesh_Poyrekar@welspun.com"
                },
                {
                    "title": "Shashikanth Mahendar",
                    "value": "Shashikanth_Mahendar@welspun.com"
                },
                {
                    "title": "Abhishek Tiwari",
                    "value": "Abhishek_Tiwari3@welspun.com"
                },
                {
                    "title": "PradeepKumar Vishwakarma",
                    "value": "PradeepKumar_Vishwakarma@welspun.com"
                },
                {
                    "title": "Pradnya Sonawane",
                    "value": "Pradnya_Sonawane@welspun.com"
                },
                {
                    "title": "V Karuppasamy",
                    "value": "V_Karuppasamy@welspun.com"
                },
                {
                    "title": "Vijay Mishra",
                    "value": "Vijay_Mishra@welspun.com"
                },
                {
                    "title": "Arbaz Shaikh",
                    "value": "Arbaz_Shaikh@welspun.com"
                },
                {
                    "title": "Manoj Varshan",
                    "value": "Manoj_Varshan@welspun.com"
                },
                {
                    "title": "Nikita Sharma",
                    "value": "Nikita_Sharma@welspun.com"
                },
                {
                    "title": "Prem kumar",
                    "value": "Prem_kumar2@welspun.com"
                },
                {
                    "title": "Rahul Singh",
                    "value": "Rahul_Singh2@welspun.com"
                },
                {
                    "title": "Pinakee Chatterjee",
                    "value": "Pinakee_Chatterjee@welspun.com"
                },
                {
                    "title": "Abhaynandan Tripathi",
                    "value": "Abhaynandan_Tripathi@welspun.com"
                },
                {
                    "title": "Pankaj Raut",
                    "value": "Pankaj_Raut@welspun.com"
                },
                {
                    "title": "Saurabh Kumar",
                    "value": "Saurabh_Kumar@welspun.com"
                },
                {
                    "title": "Sameet Halade",
                    "value": "Sameet_Halade@welspun.com"
                },
                {
                    "title": "Deepak Rawat",
                    "value": "Deepak_Rawat@welspun.com"
                },
                {
                    "title": "Jayesh Sumbhe",
                    "value": "Jayesh_Sumbhe@welspun.com"
                },
                {
                    "title": "Akshay Pawar",
                    "value": "Akshay_Pawar@welspun.com"
                },
                {
                    "title": "Roshan Prajapati",
                    "value": "Roshan_Prajapati@welspun.com"
                },
                {
                    "title": "Kaviya Prabhakaran",
                    "value": "KAVIYAPRABAKARAN66@GMAIL.COM"
                },
                {
                    "title": "Sayan Mukherjee",
                    "value": "Sayan_Mukherjee@welspun.com"
                },
                {
                    "title": "Ankit Singh",
                    "value": "Ankit_Singh2@welspun.com"
                },
                {
                    "title": "Aniket Singh",
                    "value": "Aniket_Singh@welspun.com"
                },
                {
                    "title": "Aniket Singh",
                    "value": "Aniket_Singh2@welspun.com"
                },
                {
                    "title": "Deepak Tiwari",
                    "value": "Deepak_Tiwari1@welspun.com"
                },
                {
                    "title": "Shyam Sundar",
                    "value": "Shyam_Sundar@welspun.com"
                },
                {
                    "title": "Harendra Singh",
                    "value": "Harendra_Singh@welspun.com"
                },
                {
                    "title": "Harendar Singh",
                    "value": "Harendar_Singh@welspun.com"
                },
                {
                    "title": "VeerendraSingh Gurjar",
                    "value": "VeerendraSingh_Gurjar@welspun.com"
                },
                {
                    "title": "MilindKumar Vind",
                    "value": "MilindKumar_Vind@welspun.com"
                },
                {
                    "title": "RupeshKumar Singh",
                    "value": "RupeshKumar_Singh1@welspun.com"
                },
                {
                    "title": "Sagar Kumar",
                    "value": "Sagar_Kumar@welspun.com"
                },
                {
                    "title": "Kritika Jain",
                    "value": "Kritika_Jain@welspun.com"
                },
                {
                    "title": "Nilamadhab Rout",
                    "value": "Nilamadhab_Rout@welspun.com"
                },
                {
                    "title": "DevendraKumar Shukla",
                    "value": "DevendraKumar_Shukla@welspun.com"
                },
                {
                    "title": "Arunaksha Singh",
                    "value": "Arunaksha_Singh@welspun.com"
                },
                {
                    "title": "Rakesh Dey",
                    "value": "Rakesh_Dey@welspun.com"
                },
                {
                    "title": "Amit Saini",
                    "value": "Amit_Saini1@welspun.com"
                },
                {
                    "title": "Kendra Tiwari",
                    "value": "Kendra_Tiwari@welspun.com"
                },
                {
                    "title": "Kundan Kumawat",
                    "value": "Kundan_Kumawat@welspun.com"
                },
                {
                    "title": "Mayuresh Telawane",
                    "value": "Mayuresh_Telawane@welspun.com"
                },
                {
                    "title": "Pratik rokde",
                    "value": "Pratikr088@gmail.com"
                },
                {
                    "title": "Parwez Md",
                    "value": "perwezmd22@gmail.com"
                },
                {
                    "title": "Ashok Raikar",
                    "value": "Raikwarravi773@gmail.com"
                },
                {
                    "title": "Hariharan Naidu",
                    "value": "hariharan.naidu@veolia.com"
                },
                {
                    "title": "Rabin DasgGupta",
                    "value": "pdbcon@gmail.com"
                },
                {
                    "title": "Brijesh Khetale",
                    "value": "brijesh.khetale@se.com"
                },
                {
                    "title": "Sanoj Kovatte",
                    "value": "sbkovatte@tataconsultingengineers.com"
                },
                {
                    "title": "Naseem M",
                    "value": "nashimmanihar37@gmail.com"
                },
                {
                    "title": "Pankaj Saini",
                    "value": "pankaj.saini@tatapower.com"
                },
                {
                    "title": "Dalel Singh",
                    "value": "skumargroup@gmail.com"
                },
                {
                    "title": "Abhijeet Chawan",
                    "value": "kshitij365x12@gmail.com"
                },
                {
                    "title": "Nayan Datir",
                    "value": "nayan@arthdesignbuild.com"
                },
                {
                    "title": "Shreedhar Sawant",
                    "value": "shree6136@gmail.com"
                },
                {
                    "title": "MdShahadat Hussain",
                    "value": "MdShahadat_Hussain@welspun.com"
                },
                {
                    "title": "CIEL Anup Tiwari",
                    "value": "CIEL_AnupT@welspun.com"
                },
                {
                    "title": "CIEL Sudhir Sakpal",
                    "value": "CIEL_SudhirS@welspun.com"
                },
                {
                    "title": "CIEL Narshima Nayak",
                    "value": "CIEL_NarshimaN@welspun.com"
                },
                {
                    "title": "CIEL Kiran Mohite",
                    "value": "CIEL_KiranM@welspun.com"
                },
                {
                    "title": "Animesh Pattanayak",
                    "value": "Animesh_Pattanayak@welspun.com"
                },
                {
                    "title": "Palash Roy",
                    "value": "Palash_Roy@welspun.com"
                },
                {
                    "title": "Umesh Kumar",
                    "value": "Umesh_Singh@welspun.com"
                },
                {
                    "title": "Nityanand Pandey",
                    "value": "Nityanand_Pandey@welspun.com"
                },
                {
                    "title": "MD Yusuf",
                    "value": "MdYusuf_Khan@welspun.com"
                },
                {
                    "title": "Sandip Raghuwanshi",
                    "value": "Sandip_Raghuwanshi@welspun.com"
                },
                {
                    "title": "Pravin Musale",
                    "value": "Pravin_Musale@welspun.com"
                },
                {
                    "title": "UmeshKumar Singh",
                    "value": "UmeshKumar_Singh@welspun.com"
                },
                {
                    "title": "uttam sah",
                    "value": "uttam.sah@rsmindia.in"
                },
                {
                    "title": "Teany Thomas",
                    "value": "Teany_Thomas@welspun.com"
                },
                {
                    "title": "Kartikey Sharma",
                    "value": "Kartikey_Sharma@welspun.com"
                },
                {
                    "title": "Ashish Sharma",
                    "value": "Ashish_Sharma@welspun.com"
                },
                {
                    "title": "Sunil Ojha",
                    "value": "Sunil_Ojha@welspun.com"
                },
                {
                    "title": "Nitin Bundela",
                    "value": "Nitin_Bundela@welspun.com"
                },
                {
                    "title": "Devendra Esai",
                    "value": "Devendra_Esai@welspun.com"
                },
                {
                    "title": "Prajwal Bangera",
                    "value": "Prajwal_Bangera@welspun.com"
                },
                {
                    "title": "Chirag Barad",
                    "value": "Chirag_Barad@welspun.com"
                },
                {
                    "title": "Gurunek Singh",
                    "value": "Gurunek_Singh@welspun.com"
                },
                {
                    "title": "Dinesh Suvarna",
                    "value": "Dinesh_Suvarna@welspun.com"
                },
                {
                    "title": "Sonu Kumar",
                    "value": "Sonu_Kumar1@welspun.com"
                },
                {
                    "title": "MohdSaliq Khan",
                    "value": "MohdSaliq_Khan@welspun.com"
                },
                {
                    "title": "Test User1",
                    "value": "utest0936@gmail.com"
                },
                {
                    "title": "Sharad Rai",
                    "value": "Sharad_Rai@welspun.com"
                },
                {
                    "title": "Munna Kumar",
                    "value": "Munna_Kumar@welspun.com"
                },
                {
                    "title": "Romaan SK",
                    "value": "sk.romaan5656@gmail.com"
                },
                {
                    "title": "CIEL Kamlesh Sahani",
                    "value": "CIEL_KamleshS@welspun.com"
                },
                {
                    "title": "CIEL Muhammad Iliyash",
                    "value": "CIEL_MuhammadI@welspun.com"
                },
                {
                    "title": "CIEL Ajit Janardan",
                    "value": "CIEL_AjitJ@welspun.com"
                },
                {
                    "title": "CIEL Purnachandra Pradhan",
                    "value": "CIEL_PurnachandraP@welspun.com"
                },
                {
                    "title": "Chetan Lavhale",
                    "value": "Chetan_Lavhale@welspun.com"
                },
                {
                    "title": "Ravikant Mishra",
                    "value": "Ravikant_Mishra@welspun.com"
                },
                {
                    "title": "Gaurav Srivastav",
                    "value": "Gaurav_Srivastav@welspun.com"
                },
                {
                    "title": "Prajakta Pawar",
                    "value": "Prajakta_Pawar@welspun.com"
                },
                {
                    "title": "Jakir Jakir",
                    "value": "Jakir_@welspun.com"
                },
                {
                    "title": "Sanjeev Kumar",
                    "value": "Sanjeev_Kumar@welspun.com"
                },
                {
                    "title": "Divyanshu Yadav",
                    "value": "Divyanshu_Yadav@welspun.com"
                },
                {
                    "title": "Amol Jaiswal",
                    "value": "Amol_Jaiswal@welspun.com"
                },
                {
                    "title": "Kulgaurav Tiwari",
                    "value": "Kulgaurav_Tiwari@welspun.com"
                },
                {
                    "title": "Akash Dalvi",
                    "value": "Akash_Dalvi@welspun.com"
                },
                {
                    "title": "Santosh Verma",
                    "value": "Santosh_Verma@welspun.com"
                },
                {
                    "title": "Shailesh Yadav",
                    "value": "Shailesh_Yadav@welspun.com"
                },
                {
                    "title": "Pravin Jambhulkar",
                    "value": "Pravin_Jambhulkar@welspun.com"
                },
                {
                    "title": "Dhanushdhari Dhanushdhari",
                    "value": "Dhanushdhari_@welspun.com"
                },
                {
                    "title": "Ranbir Singh",
                    "value": "Ranbir_Singh@welspun.com"
                },
                {
                    "title": "Soumyajoy Bhattacharya",
                    "value": "Soumyajoy_Bhattacharya@welspun.com"
                },
                {
                    "title": "Dhiraj Sankhe",
                    "value": "Dhiraj_Sankhe@welspun.com"
                },
                {
                    "title": "Vikas test",
                    "value": "vikas408yadav@gmail.com"
                },
                {
                    "title": "Aniket Kumar Singh",
                    "value": "AniketKumar_Singh@welspun.com"
                },
                {
                    "title": "Suryadeo Kumar",
                    "value": "Suryadeo_Kumar@welspun.com"
                },
                {
                    "title": "Ravi Ranjan",
                    "value": "Ravi_Ranjan2@welspun.com"
                },
                {
                    "title": "Omkar Sangale",
                    "value": "Omkar_Sangale@welspun.com"
                },
                {
                    "title": "Manjiri Rane",
                    "value": "Manjiri_Rane@welspun.com"
                },
                {
                    "title": "Manoj Kumar",
                    "value": "Manoj_Kumar1@welspun.com"
                },
                {
                    "title": "Pramod Dubey",
                    "value": "Pramod_Dubey@welspun.com"
                },
                {
                    "title": "ArunKumar HG",
                    "value": "ArunKumar_HG@welspun.com"
                },
                {
                    "title": "Aftab Alam",
                    "value": "Aftab_Alam@welspun.com"
                },
                {
                    "title": "Mehul Parekh",
                    "value": "Mehul_Parekh@welspun.com"
                },
                {
                    "title": "CIEL Abdul Mannan",
                    "value": "CIEL_AbdulM@welspun.com"
                },
                {
                    "title": "CIEL Omkar Kadam",
                    "value": "CIEL_OmkarK@welspun.com"
                },
                {
                    "title": "Pradeep Kumar",
                    "value": "Pradeep_Kumar6@welspun.com"
                },
                {
                    "title": "CIEL Vikas Kamble",
                    "value": "CIEL_VikasK@welspun.com"
                },
                {
                    "title": "CIEL Swapnil Patil",
                    "value": "CIEL_SwapnilP@welspun.com"
                },
                {
                    "title": "Rajiv Sharma",
                    "value": "Rajiv_Sharma1@welspun.com"
                },
                {
                    "title": "Rahul Mishra",
                    "value": "Rahul_Mishra@welspun.com"
                },
                {
                    "title": "Sudipta Sarkar",
                    "value": "sudipta_sarkar@welspun.com"
                },
                {
                    "title": "Girjeshkumar Patel",
                    "value": "Girjeshkumar_Patel@welspun.com"
                },
                {
                    "title": "Govind Singh",
                    "value": "Govind_Singh@welspun.com"
                },
                {
                    "title": "Piyush Kumar",
                    "value": "Piyush_Kumar3@welspun.com"
                },
                {
                    "title": "Akrist Singh",
                    "value": "Akrist_Singh@welspun.com"
                },
                {
                    "title": "vishalkumar Singh",
                    "value": "vishalkumar_Singh@welspun.com"
                },
                {
                    "title": "Aman Dhiman",
                    "value": "Aman_Dhiman@welspun.com"
                },
                {
                    "title": "Ravi Kumar",
                    "value": "Ravi_Kumar2@welspun.com"
                },
                {
                    "title": "Randhir Singh",
                    "value": "Randhir_Singh1@welspun.com"
                },
                {
                    "title": "KrishnaKumar Singh",
                    "value": "KrishnaKumar_Singh@welspun.com"
                },
                {
                    "title": "Ranjeet Singh",
                    "value": "Ranjeet_Singh@welspun.com"
                },
                {
                    "title": "Ravindra Singh",
                    "value": "Ravindra_Singh1@welspun.com"
                },
                {
                    "title": "Saurabh Rai",
                    "value": "Saurabh_Rai@welspun.com"
                },
                {
                    "title": "Chahat Mishra",
                    "value": "Chahat_Mishra@welspun.com"
                },
                {
                    "title": "Balram Verma",
                    "value": "Balram_Verma@welspun.com"
                },
                {
                    "title": "Mursaleen Khan",
                    "value": "Mursaleen_Khan@welspun.com"
                },
                {
                    "title": "Abhishek Kumar",
                    "value": "Abhishek_Kumar@welspun.com"
                },
                {
                    "title": "Mohit Kumar",
                    "value": "Mohit_Kumar@welspun.com"
                },
                {
                    "title": "AnandKumar Nishad",
                    "value": "AnandKumar_Nishad@welspun.com"
                },
                {
                    "title": "Vishal Kumar",
                    "value": "Vishal_Kumar2@welspun.com"
                },
                {
                    "title": "Balwant Yadav",
                    "value": "Balwant_Yadav@welspun.com"
                },
                {
                    "title": "Mritunjay Yadav",
                    "value": "Mritunjay_Yadav@welspun.com"
                },
                {
                    "title": "Shani Prajapati",
                    "value": "Shani_Prajapati@welspun.com"
                },
                {
                    "title": "ArvindKumar Yadav",
                    "value": "ArvindKumar_Yadav@welspun.com"
                },
                {
                    "title": "Prashant Singh",
                    "value": "Prashant_Singh@welspun.com"
                },
                {
                    "title": "Mohd Salman",
                    "value": "Mohd_Salman@welspun.com"
                },
                {
                    "title": "Raja Krishnamoorthy",
                    "value": "Raja_Krishnamoorthy@welspun.com"
                },
                {
                    "title": "Anand Pandey",
                    "value": "Anand_Pandey@welspun.com"
                },
                {
                    "title": "RakeshKumar Mishra",
                    "value": "RakeshKumar_Mishra@welspun.com"
                },
                {
                    "title": "Vijay Shankar",
                    "value": "Vijay_Shankar@welspun.com"
                },
                {
                    "title": "Babundar Singh",
                    "value": "Babundar_Singh@welspun.com"
                },
                {
                    "title": "Ravi Shankar Kumar",
                    "value": "RaviShankar_Kumar@welspun.com"
                },
                {
                    "title": "Avinash Singh",
                    "value": "Avinash_Singh@welspun.com"
                },
                {
                    "title": "MdFaiz Iqbal",
                    "value": "MdFaiz_Iqbal@welspun.com"
                },
                {
                    "title": "Rajnish Kumar",
                    "value": "Rajnish_Kumar1@welspun.com"
                },
                {
                    "title": "Gulab Chand",
                    "value": "Gulab_Chand@welspun.com"
                },
                {
                    "title": "Sachin Dubey",
                    "value": "Sachin_Dubey@welspun.com"
                },
                {
                    "title": "RohitKumar Chaurasia",
                    "value": "RohitKumar_Chaurasia@welspun.com"
                },
                {
                    "title": "Gurudas Gurudas",
                    "value": "Gurudas_@welspun.com"
                },
                {
                    "title": "HarshVardhan Singh",
                    "value": "HarshVardhan_Singh1@welspun.com"
                },
                {
                    "title": "Rohit Singh",
                    "value": "Rohit_Singh2@welspun.com"
                },
                {
                    "title": "Abhishek Singh",
                    "value": "Abhishek_Singh9@welspun.com"
                },
                {
                    "title": "Pradeep Shukla",
                    "value": "Pradeep_Shukla@welspun.com"
                },
                {
                    "title": "Kislay Verma",
                    "value": "Kislay_Verma@welspun.com"
                },
                {
                    "title": "Deepak Kumar",
                    "value": "Deepak_Kumar13@welspun.com"
                },
                {
                    "title": "Sushil Gupta",
                    "value": "Sushil_Gupta@welspun.com"
                },
                {
                    "title": "Shivanshu Shukla",
                    "value": "Shivanshu_Shukla@welspun.com"
                },
                {
                    "title": "Vishal Gupta",
                    "value": "Vishal_Gupta1@welspun.com"
                },
                {
                    "title": "Asif Ahmad",
                    "value": "Asif_Ahmad@welspun.com"
                },
                {
                    "title": "ShivShakti Kumar",
                    "value": "ShivShakti_Kumar@welspun.com"
                },
                {
                    "title": "Shyam Singh",
                    "value": "Shyam_Singh1@welspun.com"
                },
                {
                    "title": "Lalu Kumar",
                    "value": "Lalu_Kumar@welspun.com"
                },
                {
                    "title": "Sandeep Kumar",
                    "value": "Sandeep_Kumar11@welspun.com"
                },
                {
                    "title": "Ramashray Giri",
                    "value": "Ramashray_Giri@welspun.com"
                },
                {
                    "title": "MdAbshar Khan",
                    "value": "MdAbshar_Khan@welspun.com"
                },
                {
                    "title": "Udesh Kumar",
                    "value": "Udesh_Kumar@welspun.com"
                },
                {
                    "title": "Devvrat Dwivedi",
                    "value": "Devvrat_Dwivedi@welspun.com"
                },
                {
                    "title": "Krishnakant Chaurasiya",
                    "value": "Krishnakant_Chaurasiya@welspun.com"
                },
                {
                    "title": "Chandra Kori",
                    "value": "Chandra_Kori@welspun.com"
                },
                {
                    "title": "Sarvesh Tripathi",
                    "value": "Sarvesh_Tripathi@welspun.com"
                },
                {
                    "title": "Vipin Nayak",
                    "value": "Vipin_Nayak@Welspun.com"
                },
                {
                    "title": "Shivakant Yadav",
                    "value": "Shivakant_Yadav@welspun.com"
                },
                {
                    "title": "Dineshwar Chandel",
                    "value": "Dineshwar_Chandel@welspun.com"
                },
                {
                    "title": "Wel Appsuser1",
                    "value": "Wel_appsuser1@welspun.com"
                },
                {
                    "title": "Sharvari Jadhav",
                    "value": "Sharvari_Jadhav@welspun.com"
                },
                {
                    "title": "Akshay Kamble",
                    "value": "Akshay_Kamble@welspun.com"
                },
                {
                    "title": "Omkar Humbe",
                    "value": "Omkar_Humbe@welspun.com"
                },
                {
                    "title": "Harish Kumar",
                    "value": "Harish_Kumar5@welspun.com"
                },
                {
                    "title": "Bipin Narhari",
                    "value": "Bipin_Narhari@welspun.com"
                },
                {
                    "title": "nyash8243@gmail.com nyash8243@gmail.com",
                    "value": "nyash8243@gmail.com"
                },
                {
                    "title": "srsamal33@gmail.com srsamal33@gmail.com",
                    "value": "srsamal33@gmail.com"
                },
                {
                    "title": "Puranchandra Pradhan",
                    "value": "p_pradhan@cielhr.com"
                },
                {
                    "title": "Yogesh Jain",
                    "value": "Yogesh_Jain@welspun.com"
                },
                {
                    "title": "Hardik Dhebar",
                    "value": "Hardik_Dhebar@welspun.com"
                },
                {
                    "title": "Ankit Singh",
                    "value": "Ankit_Singh3@welspun.com"
                },
                {
                    "title": "Ankush Warhade",
                    "value": "Ankush_Warhade@welspun.com"
                },
                {
                    "title": "Amresh Mishra",
                    "value": "Amresh_Mishra@welspun.com"
                },
                {
                    "title": "Anand Kulkarni",
                    "value": "Anand_Kulkarni@welspun.com"
                },
                {
                    "title": "Sandeep Parida",
                    "value": "Sandeep_Parida@welspun.com"
                },
                {
                    "title": "Virendra Sonawat",
                    "value": "Virendra_Sonawat@welspun.com"
                },
                {
                    "title": "Malay Ghosh",
                    "value": "Malay_Ghosh@welspun.com"
                },
                {
                    "title": "WEL Digi",
                    "value": "WEL_Digi@welspun.com"
                }
            ]
        },
        "probable_root_cause": {
            "label": "Probable Root Cause",
            "type": "select",
            "no-option": "Select Probable Root Cause",
            "groupid": "root_cause",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "Material",
                    "value": "material",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Methodology",
                    "value": "methodology",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Misc",
                    "value": "misc",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Workmanship",
                    "value": "workmanship",
                    "class": null,
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
        "closure_date": {
            "label": "Closure Date",
            "type": "date",
            "disabled": true,
            "onChange": "closeDate",
            "required": false,
            "width": 4
        },
        "severity_level": {
            "label": "Severity Level",
            "type": "select",
            "groupid": "severity_level",
            "required": false,
            "width": 4,
            "options": [
                {
                    "title": "Critical",
                    "value": "critical",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Major",
                    "value": "major",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Minor",
                    "value": "minor",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "observation_photograph": {
            "label": "Observation Photograph",
            "type": "camera",
            "required": false,
            multiple: true,
            "width": 4
        },
        "compliance_photograph": {
            "label": "Compliance Photograph",
            "type": "file",
            "vmode": "edit",
            "required": false,
            "width": 4
        },
        "rework_cost_borne_by": {
            "label": "Rework Cost Borne By",
            "type": "select",
            "groupid": "rework_cost_borne_by",
            "vmode": "edit",
            "required": false,
            "width": 4,
            "options": [
                {
                    "title": "Welspun",
                    "value": "welspun",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Sub-Contractor",
                    "value": "sub_contractor",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Others",
                    "value": "others",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "description": {
            "label": " Description",
            "type": "textarea",
            "required": true,
            "width": 12
        },
        "suggestion ": {
            "label": "Suggestion / Way Forward / Corrective Action",
            "type": "textarea",
            "vmode": "edit",
            "required": false,
            "width": 12
        },
        "forward_remarks": {
            "label": "Forward Remarks",
            "type": "textarea",
            "required": false,
            "width": 12
        },
        "reopen_remarks": {
            "label": "Reopen Remarks",
            "type": "textarea",
            "disabled": true,
            "placeholder": "If Status Is Re-open",
            "required": false,
            "width": 12
        },
        "compliance_from_execution_engineer": {
            "label": "Compliance from WEL Execution Engineer / Subcontractor",
            "type": "textarea",
            "vmode": "edit",
            "required": false,
            "width": 12
        }
    },
    "infoview": {
        "template": "cards"
    },
    "script": "ZnVuY3Rpb24gY2hhbmdlRGF0ZShkYXRhKSB7CiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKT8udmFsdWU7CiAgY29uc3QgY2xvc3VyZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY2xvc3VyZV9kYXRlIik7CiAgY29uc3QgcmVvcGVuUmVtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJyZW9wZW5fcmVtYXJrcyIpOwoKICAvLyBFbmFibGUgcmVvcGVuIHJlbWFya3Mgb25seSBmb3IgcmVfb3BlbgogIGlmIChyZW9wZW5SZW1hcmtzKSB7CiAgICByZW9wZW5SZW1hcmtzLmRpc2FibGVkID0gdmFsdWUgIT09ICJyZV9vcGVuIjsKICB9CgogIC8vIElmIHN0YXR1cyBpcyBDTE9TRUQKICBpZiAodmFsdWU/LnRvTG93ZXJDYXNlKCkgPT09ICJjbG9zZWQiICYmIGNsb3N1cmVEYXRlKSB7CiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgiVCIpWzBdOwoKICAgIGNvbnN0IHZhbHVlU2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgICAgd2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLAogICAgICAidmFsdWUiCiAgICApLnNldDsKCiAgICB2YWx1ZVNldHRlci5jYWxsKGNsb3N1cmVEYXRlLCB0b2RheSk7CiAgICBjbG9zdXJlRGF0ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgiaW5wdXQiLCB7IGJ1YmJsZXM6IHRydWUgfSkpOwogIH0KCiAgLy8gQ2xlYXIgaWYgbm90IGNsb3NlZAogIGlmICh2YWx1ZT8udG9Mb3dlckNhc2UoKSAhPT0gImNsb3NlZCIgJiYgY2xvc3VyZURhdGUpIHsKICAgIGNvbnN0IHZhbHVlU2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgICAgd2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLAogICAgICAidmFsdWUiCiAgICApLnNldDsKCiAgICB2YWx1ZVNldHRlci5jYWxsKGNsb3N1cmVEYXRlLCAiIik7CiAgICBjbG9zdXJlRGF0ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgiaW5wdXQiLCB7IGJ1YmJsZXM6IHRydWUgfSkpOwogIH0KfQoKZnVuY3Rpb24gcmVzdHJpY3RSYWlzZWREYXRlKCkgewogIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInJhaXNlZF9kYXRlIik7CiAgaWYgKCFpbnB1dCkgcmV0dXJuOwoKICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7CiAgY29uc3QgbWluID0gbmV3IERhdGUoKTsKICBtaW4uc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSA0KTsgLy8gbGFzdCA1IGRheXMgaW5jbHVkaW5nIHRvZGF5CgogIGlucHV0Lm1heCA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoIlQiKVswXTsKICBpbnB1dC5taW4gPSBtaW4udG9JU09TdHJpbmcoKS5zcGxpdCgiVCIpWzBdOwp9CgoKCgpmdW5jdGlvbiBjYWxjdWxhdGVBZ2VpbmcoKSB7CiAgY29uc3QgcmFpc2VkVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicmFpc2VkX2RhdGUiKS52YWx1ZTsKCiAgY29uc3QgcGFydHMgPSByYWlzZWRWYWx1ZS5zcGxpdCgiLSIpOwogIGNvbnN0IHJhaXNlZERhdGUgPSBuZXcgRGF0ZShwYXJ0c1swXSwgcGFydHNbMV0gLSAxLCBwYXJ0c1syXSk7CiAgY29uc3QgY2xvc3VyZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNsb3N1cmVfZGF0ZSIpOwogIGlmIChjbG9zdXJlSW5wdXQpIHsKICAgIGNsb3N1cmVJbnB1dC5taW4gPSByYWlzZWRWYWx1ZTsKICB9CiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOwogIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApOwogIGNvbnN0IGFnZWluZ0RheXMgPSBNYXRoLmZsb29yKAogICAgKGN1cnJlbnREYXRlIC0gcmFpc2VkRGF0ZSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkKICApOwoKICBjb25zdCBhZ2VpbmdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJhZ2VpbmdfZGF5cyIpOwogIGNvbnN0IHZhbHVlU2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwKICAgICJ2YWx1ZSIKICApLnNldDsKCiAgdmFsdWVTZXR0ZXIuY2FsbChhZ2VpbmdJbnB1dCwgYWdlaW5nRGF5cyk7CiAgYWdlaW5nSW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoImlucHV0IiwgeyBidWJibGVzOiB0cnVlIH0pKTsKfQoKZnVuY3Rpb24gY2hhbmdlTG9jYXRpb25UeXBlKHNlbGVjdElkKSB7CiAgcmVzdHJpY3RSYWlzZWREYXRlKCk7CiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk/LnZhbHVlPy50b0xvd2VyQ2FzZSgpOwogIGNvbnN0IGxvY2F0aW9uT3RoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibG9jYXRpb25fb3RoZXIiKTsKCiAgY29uc3QgY2hhaW5hZ2VfZnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjaGFpbmFnZV9mcm9tIik7CiAgY29uc3QgY2hhaW5hZ2VfdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY2hhaW5hZ2VfdG8iKTsKCiAgaWYgKCF2YWx1ZSB8fCAhbG9jYXRpb25PdGhlcikgcmV0dXJuOwoKCiAgbG9jYXRpb25PdGhlci5kaXNhYmxlZCA9IHRydWU7CgogIGxvY2F0aW9uT3RoZXIucmVxdWlyZWQgPSBmYWxzZTsKCiAgaWYgKHZhbHVlID09PSAiY2hhaW5hZ2UiKSB7CiAgICBsb2NhdGlvbk90aGVyLmRpc2FibGVkID0gZmFsc2U7CgogICAgY2hhaW5hZ2VfZnJvbS5kaXNhYmxlZCA9IGZhbHNlOwogICAgY2hhaW5hZ2VfdG8uZGlzYWJsZWQgPSBmYWxzZTsKCiAgICBsb2NhdGlvbk90aGVyLmRpc2FibGVkID0gdHJ1ZTsKCgogICAgbG9jYXRpb25PdGhlci5jbGFzc0xpc3QuYWRkKCJjdXJzb3Itbm90LWFsbG93ZWQiKTsKICAgIGxvY2F0aW9uT3RoZXIuY2xhc3NMaXN0LmFkZCgiYmctZ3JheS0xMDAiKTsKCiAgICBjaGFpbmFnZV9mcm9tLmNsYXNzTGlzdC5yZW1vdmUoImN1cnNvci1ub3QtYWxsb3dlZCIpOwogICAgY2hhaW5hZ2VfZnJvbS5jbGFzc0xpc3QucmVtb3ZlKCJiZy1ncmF5LTEwMCIpOwogICAgY2hhaW5hZ2VfdG8uY2xhc3NMaXN0LnJlbW92ZSgiY3Vyc29yLW5vdC1hbGxvd2VkIik7CiAgICBjaGFpbmFnZV90by5jbGFzc0xpc3QucmVtb3ZlKCJiZy1ncmF5LTEwMCIpOwoKICAgIGNoYWluYWdlX2Zyb20ucmVxdWlyZWQgPSB0cnVlOwogICAgY2hhaW5hZ2VfdG8ucmVxdWlyZWQgPSB0cnVlOwoKICAgIGxvY2F0aW9uT3RoZXIucmVxdWlyZWQgPSAiIjsKCiAgfQogIGVsc2UgaWYgKHZhbHVlID09PSAib3RoZXIiKSB7CiAgICBsb2NhdGlvbk90aGVyLmRpc2FibGVkID0gZmFsc2U7CgogICAgY2hhaW5hZ2VfZnJvbS5kaXNhYmxlZCA9IHRydWU7CiAgICBjaGFpbmFnZV90by5kaXNhYmxlZCA9IHRydWU7CgogICAgbG9jYXRpb25PdGhlci5jbGFzc0xpc3QucmVtb3ZlKCJjdXJzb3Itbm90LWFsbG93ZWQiKTsKICAgIGxvY2F0aW9uT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgiYmctZ3JheS0xMDAiKTsKCiAgICBjaGFpbmFnZV9mcm9tLmNsYXNzTGlzdC5hZGQoImN1cnNvci1ub3QtYWxsb3dlZCIpOwogICAgY2hhaW5hZ2VfZnJvbS5jbGFzc0xpc3QuYWRkKCJiZy1ncmF5LTEwMCIpOwogICAgY2hhaW5hZ2VfdG8uY2xhc3NMaXN0LmFkZCgiY3Vyc29yLW5vdC1hbGxvd2VkIik7CiAgICBjaGFpbmFnZV90by5jbGFzc0xpc3QuYWRkKCJiZy1ncmF5LTEwMCIpOwoKCiAgICBsb2NhdGlvbk90aGVyLnJlcXVpcmVkID0gdHJ1ZTsKCgogICAgY2hhaW5hZ2VfZnJvbS5yZXF1aXJlZCA9ICIiOwogICAgY2hhaW5hZ2VfdG8ucmVxdWlyZWQgPSAiIjsKCiAgfQp9CgoKCgoK",
    "module_refid": "quality.quality_observation",
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
