import React from "react";

import { determineViewMode, groupFields } from "./utils.js";

import AccordionFormView from "./components/AccordionFormView.js";
import TabFormView from "./components/TabFormView.js";
import NormalFormView from "./components/NormalFormView.js";
import type { FormProps } from "./Form.types.js";

export default function LogiskForm({ formJson = {title:"", fields: {}, source: {} }, data, onSubmit, onCancel }: FormProps) {
  const viewMode = determineViewMode(formJson);
  const groupedFields = groupFields(formJson.fields ?? {});
  const safeData = data ?? {};
  const formView = {
    "accordion": <AccordionFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={safeData}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />,
    "tab": <TabFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={safeData}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />,
    "normal": <NormalFormView
      title={formJson.title}
      groupedFields={groupedFields}
      data={safeData}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  }

  return <div className="h-full  relative overflow-hidden">
    {
      formView[viewMode] ?? formView.normal
    }
  </div>
};

// bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100


