
export const example1 = {
	"preload": {
		"helpers": ["countries"]
	},
	"widget":false,
	"source": {
		"type": "method",
		"method": "postData",
		"where": ["userid"]
	},
	"fields": {
		"email": {
			"label": "Email",
			"type": "email",


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
			},

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
			"group": "address"
		},
		"country": {
			"label": "Country",
			"group": "address",
			"type": "select",
			"multiple":true,
			"method": {
				"name": "getCountrySelector",
				"valuefield": "default"
			},
			"placeholder":"Select your country",
			"options": {

				"india": "India",
				"pakistan": "Pakistan",
				"japan":"Japan",
				"iran":"Iran",
				"israel":"Israel",
				"france":"France",
				"germany":"Germany",
				"england":"England",
				"italy":"Italy",
				"pourtgal":"Pourtgal",
				"argentina":"Argentina"

			}
		},
		"region": {
			"label": "Region/State",
			"group": "address"
		},
		"zipcode": {
			"label": "Zipcode/PIN Code",
			"group": "address"
		},
		
		"highest_qualification": {
			label: "Highest Qualification",
			"group": "academic"
		},
		"gender": {
			"label": "Gender",
			"group": "address",
			"type": "select",
			required: true,
			"placeholder": "Select gender",
			"options": {

				"male": "Male",
				"female": "Female",

			}
		}
	}
}