import LogiksForm from "./components/form/index.js";
import { example10 } from "./data.js"


function App() {



    return <LogiksForm
        formJson={example10}
        onCancel={() => { }}
        initialvalues={{
    "id": 79,
    "guid": "global",
    "design_refrence": "Elevated 1",
    "work_package": "WP1",
    "span_from": "Elevated 1-E1-P1",
    "span_to": "Elevated 1-E1-P2",
    "category": "59",
    "gr_no": "6",
    "girderui": "design_category1/6",
    "blocked": "false",
    "created_by": "admin",
    "created_on": "2026-08-19 10:48:27",
    "edited_by": "admin",
    "edited_on": "2026-08-19 10:48:27",
    "stage": null,
    "status": null,
    "design_category_name": "design_category1",
    "stage_action": "show_stage1",
    "title": "WEL",
      "project_id": "56",
                "sector_id": "1",
                "company_code_id": "1",
}}

       


    />;
}

export default App;