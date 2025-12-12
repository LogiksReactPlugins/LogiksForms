import LogiksForm from "./components/form/index.js";
import { example2 } from "./data.js"

function DemoComponent() {
    return <div>
        <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>Hellow demo</h1>
    </div>
}
function App() {
    const getFormData = (data: Record<string, any>) => {

        if (data) {
            console.log("received data", data);
            return
        }
        return {
            "title": "Walmart Stores, Inc",
            "broker_name": null,
            "broker_email": null,
            "broker_mobile": null,
            "broker_address": null,
            "customer_id": 110,
            "customer_type": "new",
            "contact_name": "Walmart Stores C",
            "contact_email": "walmart.c@gmail.com",
            "contact_mobile": "8976542567",
            "contact_address": "C-228(i), Ghatkopar Indl Estate, L B S Marg, Opp I O L, Near Amrutnagar, Ghatkopar (west)",
            "contact_street": "Amrutnagar Road",
            "contact_city": "Mumbai",
            "contact_state": "Maharashtra",
            "contact_zipcode": "400086",
            "contact_country": "India",
            "lead_date": "2023-09-06T00:00:00.000Z",
            "lead_year": 2023,
            "net_amount": 56000,
            "lead_value": 98909,
            "lead_priority": "high",
            "lead_source": "event",
            "lead_status": "closed",
            "lead_type": "incoming",
            "enquiry_type": "Service",
            "marketting_source": "events",
            "marketting_campaign": "Bizsuite Campaign",
            "enquiry_product_descs": "Create eCommerce for store.",
            "created_on": "2023-09-06T14:02:28.000Z",
            "blocked": "false",
            "created_by": "manager",
            "edited_by": "manager",
            "edited_on": "2023-09-20T12:48:01.000Z",
            "enquiry_due": "2023-11-24T00:00:00.000Z",
            "open_by": "manager",
            "assigned_to": "manager",
            "manager": "manager",
            "tags": "Walmart Stores, Inc",
            "remarks": "NO REMARKS",
            "prelead_id": 0
        }
    }

    const getOptions = () => {
        return {
            "math": "Math",
            "science": "Science",
            "english": "English",
            "history": "History",
            "geo": "Geo",

        }
    }

    function callbackFn(res: any) {
        console.log("res", res);

    }
    
    return <LogiksForm
        formJson={example2}
        onCancel={() => { }}
        methods={{ getFormData, getOptions }}
        components={{ demo: <DemoComponent /> }}
        callback={callbackFn}

    />;
}

export default App;