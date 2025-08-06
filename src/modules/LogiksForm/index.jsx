import React from "react";

import { determineViewMode, groupFields } from "../../utils";

import AccordionFormView from "./components/AccordionFormView";
import TabFormView from "./components/TabFormView";
import NormalFormView from "./components/NormalFormView";


export default function LogiskFrom({ formJson, data, onSubmit, onCancel }) {
  const viewMode = determineViewMode(formJson);
  const groupedFields = groupFields(formJson.fields);

  const formVeiw = {
    "accordion": <AccordionFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={data}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />,
    "tab": <TabFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={data}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />,
    "normal": <NormalFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={data}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  }

  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    {
      formVeiw[viewMode]
    }
  </div>
};


