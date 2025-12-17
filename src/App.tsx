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