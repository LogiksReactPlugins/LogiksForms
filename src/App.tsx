import LogiksForm from "./components/form/index.js";
import { example1 } from "./data.js"

function DemoComponent() {
    return <div>
        <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>Hellow demo</h1>
    </div>
}
function App() {
    const postData = (data: Record<string, any>) => {

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
    return <LogiksForm
        formJson={example1}
        onCancel={() => { }}
        methods={{ postData, getOptions }}
        components={{ demo: <DemoComponent /> }}

    />;
}

export default App;