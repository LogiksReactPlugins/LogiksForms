
export const example1 = {
	"preload": {
		"helpers": ["countries"]
	},


	"postsubmit": {

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
			"group": "address",
		},
		"type": {
			"label": "Address Type",
			"group": "address",
			"type": "dataSelector",
			"groupid": "address_type"
		},
		"region": {
			"label": "Region/State",
			"group": "address",
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			"group": "address",
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
