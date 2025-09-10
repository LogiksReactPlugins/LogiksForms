
export const example1 = {
	"preload": {
		"helpers": ["countries"]
	},
  
	"source": {
		"type": "method",
		"method": "postData",
		"where": ["userid"]
	},

	"fields": {
		"email": {
			"label": "E-mail",
			"type": "email",
			"required": true,
			"validate": {
				"email": true
			},
			"icon": "fa-regular fa-envelope"
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
			"type": "file",
			"validate": {
				"length-min": 5,
				"length-max": 10
			}
		},
		"dob": {
			"label": "Date of Birth",
			"type": "date"
		},

		"demo": {
			"type": "component",
			
		},
		"mobile": {
			"label": "Mobile",
			"required": true,
			"icon": "fa-solid fa-mobile-screen"
		},
		"subjects": {
			"label": "Subjects Opted",
			"type": "checkbox",
			"multiple": true,
			"required": true,
			"source": {
				"type": "method",
				"method": "getOptions",
				"where": ["userid"]
			},
		},
		"remarks": {
			"label": "Description\/Notes",
			"type": "tags",
			"width": "12",
			"validate": {
				"length-min": 15
			}
		},
		"address": {
			"label": "Address",
			
		},
		"type": {
			"label": "Address Type",
			
			"type": "dataSelector",
			"groupid": "address_type"
		},
		"region": {
			"label": "Region/State",
			
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			
		},
		"gender": {
			"label": "Gender",

			"type": "radio",

			"options": {

				"male": "Male",
				"female": "Female"
			}
		}
	}
}
