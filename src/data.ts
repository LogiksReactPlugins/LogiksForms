
export const example1 = {
	"preload": {
		"helpers": ["countries"]
	},
	"source": {
		"type": "sql",
		"table": "lgks_users",
		"where": ["userid"]
	},
	"fields": {
		"email": {
			
			"type": "component",
			
		
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
			"type": "dataMethod",
			"method": {
				"name": "getCountrySelector",
				"valuefield": "default"
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
		"gender": {
			"label": "Gender",
			"group": "address",
			"type": "select",
			required: true,
			"options": {
				"": false,
				"male": "Male",
				"female": "Female"
			}
		}
	}
}