import LogiksForm from "./components/form/index.js";
import { example1 } from "./data.js"


function App() {
    const postData = (data: Record<string, any>) => {

        if(data){
            console.log("received data",data);
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

    />;
}

export default App;