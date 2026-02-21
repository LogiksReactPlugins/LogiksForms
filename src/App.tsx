import LogiksForm from "./components/form/index.js";
import { example1} from "./data.js"


function App() {
 


    return <LogiksForm
        formJson={example1}
        onCancel={() => { }}
      
     


    />;
}

export default App;