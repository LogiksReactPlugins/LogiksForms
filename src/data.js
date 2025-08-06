
export const example1 = {
	"preload": {
		"helpers": ["countries"]
	},
	"source": {
		"type": "sql",
		"table": "lgks_users",
		"where": ["userid"]
	},
	//   "template":"accordion",
	"fields": {
		"email": {
			"label": "E-mail",
			"type": "email",
			"required": true,
			"validate": {
				"email": true,

			}
		},
		"userid": {
			"label": "Login ID",
			"disabled": true
		},
		"name": {
			"label": "Full Name",
			"validate": {
				"length-min": 5,
				"length-max": 10
			}
		},
		"mobile": {
			"label": "Mobile",
			"required": true,
			"concat": {
				"position": "after",
				"field": "name"
			}
		},
		"remarks": {
			"label": "Description\/Notes",
			"type": "textarea",
			"width": "12",
			"validate": {
				"length-min": 15
			}
		},
		"address": {
			"label": "Address",
			
		},
		"country": {
			"label": "Country",
			
			"type": "dataMethod",
			"method": {
				"name": "getCountrySelector",
				"valuefield": "default"
			}
		},
		"region": {
			"label": "Region/State",
			
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			
		},
		"gender": {
			"label": "Gender",
			
			"type": "select",
			"options": {
				"": false,
				"male": "Male",
				"female": "Female"
			}
		}
	}
}

export const example2 = {
	"preload": {
		"helpers": ["countries"]
	},
	"postsubmit": {

	},
	"source": {
		"type": "sql",
		"table": "lgks_users",
		"where": ["userid"]
	},
	"template": "accordion",
	"fields": {
		"email": {
			"label": "E-mail",
			"type": "email",
			"required": true,
			"validate": {
				"email": true
			}
		},
		"userid": {
			"label": "Login ID",
			"disabled": true,
			"concat": {
				"position": "after",
				"field": "email"
			}
		},
		"name": {
			"label": "Full Name",
			"validate": {
				"length-min": 5,
				"length-max": 10
			}
		},
		"mobile": {
			"label": "Mobile",
			"required": true
		},
		"remarks": {
			"label": "Description\/Notes",
			"type": "textarea",
			"width": "12",
			"validate": {
				"length-min": 15
			}
		},
		"address": {
			"label": "Address",
			"group": "address"
		},
		"type": {
			"label": "Address Type",
			"group": "address",
			"type": "dataSelector",
			"groupid": "address_type"
		},
		"region": {
			"label": "Region/State",
			"group": "address"
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			"group": "address"
		},
		"gender": {
			"label": "Gender",
			"group": "address",
			"type": "select",
			"options": {
				"": false,
				"male": "Male",
				"female": "Female"
			}
		}
	}
}

export const example3 = {
	"preload": {
		"helpers": ["countries"]
	},
	"postsubmit": {

	},
	"source": {
		"type": "sql",
		"table": "lgks_users",
		"where": ["userid"]
	},
	"template": "accordion",
	"fields": {
		"email": {
			"label": "E-mail",
			"type": "email",
			"required": true,
			"validate": {
				"email": true
			}
		},
		"userid": {
			"label": "Login ID",
			"disabled": true,
			"concat": {
				"position": "after",
				"field": "email"
			}
		},
		"name": {
			"label": "Full Name",
			"validate": {
				"length-min": 5,
				"length-max": 10
				
			}
		},
		"mobile": {
			"label": "Mobile",
			"required": true
		},
		"remarks": {
			"label": "Description\/Notes",
			"type": "textarea",
			"width": "12",
			"validate": {
				"length-min": 15
			}
		},
		"address": {
			"label": "Address",
			"group": "address"
		},
		"type": {
			"label": "Address Type",
			"group": "address",
			"type": "dataSelector",
			"groupid": "address_type"
		},
		"region": {
			"label": "Region/State",
			"group": "address"
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			"group": "address"
		},
		"gender": {
			"label": "Gender",
			"group": "address",
			"type": "select",
			"options": {
				"": false,
				"male": "Male",
				"female": "Female"
			}
		}
	}
}

export const example4 ={
	"preload":{
		"helpers":["countries"]
	},
	"postsubmit":{

	},
	"source":{
		"type":"sql",
		"table":"lgks_users",
		"where":["userid"]
	},
	"template": "accordion",
	"fields": {
		"user_avatar": {
	        "label": "AVATAR",
	        "type": "avatar",
			"group": "common",
			"required": true,
			"avatar_size": 180
	    },
	    "name": {
			"label": "Full Name",
			"group": "common",
			"validate":{
				"length-min":5,
				"length-max":10
			}
		},
		"mobile": {
			"label": "Mobile",
			"group": "common",
			"required":true
		},
		
		"email": {
			"label": "E-mail",
			"type": "email",
			"required":true,
			"validate":{
				"email":true
			}
		},
		"userid": {
			"label": "Login ID",
			"disabled":true,
			"concat":{
				"position":"after",
				"field":"email"
			}
		},
		"remarks": {
			"label": "Description\/Notes",
			"type": "textarea",
			"width": "12",
			"validate":{
				"length-min":15
			}
		},
		"address":{
			"label":"Address",
			"group":"address"
		},
		"type":{
			"label":"Address Type",
			"group":"address",
			"type":"dataSelector",
			"groupid":"address_type"
		},
		"region":{
			"label":"Region/State",
			"group":"address"
		},
		"zipcode":{
			"label":"Zipcode/PIN Code",
			"group":"address"
		},
		"gender": {
			"label": "Gender",
			"group":"address",
			"type":"select",
			"options":{
				"":false,
				"male":"Male",
				"female":"Female"
			}
		}
	}
}

export const example5 = {
	"forcefill":{
	    "groupuid":"#SESS_GROUP_NAME#",
        "guid":"#SESS_GUID#"
	},
	"source": {
		"type": "sql",
		"table": "profile_tbl",
		"where": ["md5(id)"]
	},
	"gotolink":"infoview/profile.main/{hashid}?",
	"fields": {
	    "avatar_photo": {
			"label": "Type",
			"type":  "avatar",
			"group": "common",
			"required": true
		},
		"name": {
			"label": "Profile Name",
			"group": "common",
			"required": true
		},
		"branch_code": {
			"label": "Profile Code (E.g- de,cg)",
			"group": "common",
			"required": true
		},
		"company": {
			"label": "Company Name",
			"group": "common"
		},
		"type": {
			"label": "Type",
			"group": "Info",
			"type": "autosuggest",
			"required": true
		},
		"tags": {
			"label": "Branch Tags",
			"type":"tag",
			"group": "Info"
		},
		"dob": {
			"label": "Date of Birth",
			"group": "Info",
			"type": "date",
			"required": true
		},
		"email": {
			"label": "E-mail",
			"group": "Info",
			"type": "email",
			"required": true
		},
		"address": {
			"label": "Address",
			"group": "Address",
			"type": "textarea",
			"required": true
		},
		"region": {
			"label": "Region",
			"group": "Address",
			"required": true
		},
		"country": {
			"label": "Country",
			"group": "Address",
			"type": "select",
			"options":{
			    "in": "india"
			},
			"required": true
		},
		"zipcode": {
			"label": "Zipcode",
			"group": "Address",
			"required": true
		},
		"blocked": {
			"label": "Blocked",
			"group": "Info",
			"type": "dataSelector",
		    "groupid":"boolean",
			"vmode":"edit",
			"required": true
		}
	}
}

export const example6 = {
	"schema":"1.0",
	"title":"Test Form",
	"category":"Test",
	"privilege":"*",
	"blocked":false,
	"template":"accordion",
	"hooks": {
		"preload": {
			"helpers": ["countries"]
		}
	},
	"source": {
		"type": "sql",
		"table": "uitest_tbl",
		"where": ["md5(id)"]
	},
	"forcefill": {
		"guid": "#SESS_GUID#",
		"autogen_no":"#AUTOGEN:MT,100000000000,999999999999#",
		"rowhash": "#ROWHASH:#field_textfield##field_dataSelectorFromTable#"
	},
	"gotolink": "infoview/uitest/{hashid}?",
	"fields": {
		"field_textfield": {
			"label": "Simple Text Field",
			"required": true
		},
		"field_dataSelectorFromTable": {
			"label": "DB Dropdown",
			"group": "Dropdown",
			"required": true,
			"dbkey": "core",
			"type": "dataSelectorFromTable",
			"table": "lgks_users",
			"columns": "name as title, id as value",
			"where": {
				"blocked": "false"
			},
			"no-option": "Select User Name"
		},
		"field_dataSelectorFromTable_multiple": {
			"label": "DB Dropdown - Multi",
			"group": "Dropdown",
			"multiple": true,
			"dbkey": "core",
			"type": "dataSelectorFromTable",
			"table": "lgks_users",
			"columns": "name as title, id as value",
			"where": {
				"blocked": "false"
			},
			"no-option": "Select User Name"
		},
		"field_dataSelectorFromTable_search": {
			"label": "Search Dropdown",
			"group": "Dropdown",
			"search": true,
			"dbkey": "core",
			"type": "dataSelectorFromTable",
			"table": "lgks_users",
			"columns": "name as title, id as value",
			"where": {
				"blocked": "false"
			},
			"no-option": "Select User Name"
		},
		"field_selectAJAX": {
			"label": "AJAX Dropdown",
			"group": "Dropdown",
			"dbkey": "core",
			"type": "selectAJAX",
			"table": "lgks_users",
			"columns": "name as title, id as value",
			"where": {
				"blocked": "false"
			},
			"no-option": "Select User Name"
		},
		"field_autosuggest": {
			"label": "Autosuggest Dropdown",
			"group": "Info",
			"type": "autosuggest",
			"source": {
				"table": "profiletbl",
				"where": {
					"blocked": "false"
				}
			},
			"no-option": "Select User Name"
		},
		"field_select": {
			"label": "select",
			"group": "Info",
			"type": "select",
			"options": {
				"A": "A1",
				"B": "B1",
				"C": "C1",
				"D": "D1",
				"E": "E1"
			}
		},
		"field_radiolist": {
			"label": "radiolist",
			"group": "Info",
			"type": "radiolist",
			"options": {
				"A": "A1",
				"B": "B1",
				"C": "C1",
				"D": "D1",
				"E": "E1"
			}
		},
		"field_textarea": {
			"label": "textarea",
			"group": "Info",
			"type": "textarea"
		},
		"field_richtextarea": {
			"label": "richtextarea",
			"group": "Info",
			"type": "richtextarea"
		},
		"field_markup": {
			"label": "markup",
			"group": "Info",
			"type": "markup"
		},
		"field_color": {
			"label": "color",
			"group": "Info",
			"type": "color"
		},
		"field_checkbox": {
			"label": "checkbox",
			"group": "Info",
			"type": "checkbox"
		},
		"field_date": {
			"label": "date",
			"group": "Info",
			"type": "date"
		},
		"field_datetime": {
			"label": "datetime",
			"group": "Info",
			"type": "datetime"
		},
		"field_month": {
			"label": "month",
			"group": "Info",
			"type": "month"
		},
		"field_year": {
			"label": "year",
			"group": "Info",
			"type": "year"
		},
		"field_time": {
			"label": "time",
			"group": "Info",
			"type": "time"
		},
		"field_currency": {
			"label": "currency",
			"group": "Info",
			"type": "currency"
		},
		"field_creditcard": {
			"label": "creditcard",
			"group": "Info",
			"type": "creditcard"
		},
		"field_debitcard": {
			"label": "debitcard",
			"group": "Info",
			"type": "debitcard"
		},
		"field_moneycard": {
			"label": "moneycard",
			"group": "Info",
			"type": "moneycard"
		},
		"field_email": {
			"label": "email",
			"group": "Info",
			"type": "email"
		},
		"field_tel": {
			"label": "tel",
			"group": "Info",
			"type": "tel"
		},
		"field_phone": {
			"label": "phone",
			"group": "Info",
			"type": "phone"
		},
		"field_mobile": {
			"label": "mobile",
			"group": "Info",
			"type": "mobile"
		},
		"field_url": {
			"label": "url",
			"group": "Info",
			"type": "url"
		},
		"field_number": {
			"label": "number",
			"group": "Info",
			"type": "number"
		},
		"field_barcode": {
			"label": "barcode",
			"group": "Info",
			"type": "barcode"
		},
		"field_qrcode": {
			"label": "qrcode",
			"group": "Info",
			"type": "qrcode"
		},
		"field_search": {
			"label": "search",
			"group": "Info",
			"type": "search"
		},
		"field_password": {
			"label": "password",
			"group": "Info",
			"type": "password"
		},
		"field_tags": {
			"label": "tags",
			"group": "Info",
			"type": "tags"
		},
		"field_social@facebook": {
			"label": "social@facebook",
			"group": "Info",
			"type": "social@facebook"
		},
		"field_static": {
			"label": "static",
			"group": "Info",
			"type": "static",
			"placeholder": "Hello World"
		},
		"field_static2": {
			"label": "static",
			"group": "Info",
			"type": "static",
			"placeholder": "Hello World 2"
		},
		"field_header": {
	        "label": "This is full length header",
	        "hide_label": true,
			"group": "Info",
			"type": "header",
			"width": 12
	    },
		"field_jsonfield": {
			"label": "jsonfield",
			"group": "Info",
			"type": "jsonfield"
		},
		"field_photo": {
			"label": "photo",
			"group": "Info",
			"type": "photo"
		},
		"field_photo-multiple": {
			"label": "photo-multiple",
			"group": "Info",
			"type": "photo",
			"multiple": true
		},
		"field_gallery": {
			"label": "gallery",
			"group": "Info",
			"type": "gallery"
		},
		"field_gallery-multiple": {
			"label": "gallery-multiple",
			"group": "Info",
			"type": "gallery",
			"multiple": true
		},
		"field_avatar": {
			"label": "avatar",
			"group": "Info",
			"type": "avatar"
		},
		"field_file": {
			"label": "file",
			"group": "Info",
			"type": "file"
		},
		"field_file-multiple": {
			"label": "file-multiple",
			"group": "Info",
			"type": "file",
			"multiple": true
		}
	}
}