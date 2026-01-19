import LogiksForm from "./components/form/index.js";
import { example10 } from "./data.js"


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
        formJson={example10}
        onCancel={() => { }}
        methods={{ getFormData, getOptions }}
        callback={callbackFn}


    />;
}

export default App;