import LogiksForm from "./components/form/index.js";
import { example1 } from "./data.js"


function App() {
    const getFormData = (data: Record<string, any>) => {

        if (data) {
           
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

    function abc (id:string)  {
           console.log("idddddddddd",id);
           
    }

    return <LogiksForm
        formJson={example1}
        onCancel={() => { }}
        methods={{ getFormData, getOptions , abc}}
        callback={callbackFn}


    />;
}

export default App;