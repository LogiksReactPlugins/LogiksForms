import LogiksForm from "./components/form/index.js";
import { example10} from "./data.js"


function App() {
 


    return <LogiksForm
        formJson={example10}
        onCancel={() => { }}
      
     


    />;
}

export default App;