import LogiksForm from "./components/form/index.js";
import { example1 } from "./data.js"

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
    "id": 1,
    "guid": "API-01",
    "persona_code": "assistant",
    "persona_name": "Assistant",
    "persona_descs": {"test":"test"},
    "persona_howtouse": "will let you know later",
    "persona_refurl": "https://smartinfologiks.com/",
    "persona_avatar": "https://img.freepik.com/free-vector/colorful-modern-diwali-design_1394-1177.jpg?t=st=1731482773~exp=1731486373~hmac=d172a7015b04f3794391ffbd8b4020704faad9fc65f6e3aea66946ebc25ad785&w=740",
    "persona_group": "asd",
    "persona_type": "assistant",
    "persona_prompt": "you are an useful assistant",
    "persona_prompt_template": "",
    "datastore_id": 0,
    "datastore_strategy": "single",
    "datastore_params": "{}",
    "rating": 0,
    "status": "published",
    "visibility": "public",
    "tags": "test",
    "persona_llm": "phi4-mini:latest",
    "enable_optimizer": "true",
    "prompt_engine": "default",
    "persona_params": "{}",
    "persona_uikit": "\"chat\"",
    "persona_preform": "{}",
    "user_variables": "{}",
    "available_actions": ["Test1"],
    "available_tools": "webscrap",
    "studio_editors": "admin",
    "studio_testers": "admin",
    "blocked": "false",
    "created_on": "2025-11-11T08:51:00.000Z",
    "created_by": "bismay4u",
    "edited_on": "2025-11-18T08:59:20.000Z",
    "edited_by": "demosilk1",
    "editable": true
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
    return <LogiksForm
        formJson={example1}
        onCancel={() => { }}
        methods={{ getFormData, getOptions }}
        components={{ demo: <DemoComponent /> }}

    />;
}

export default App;