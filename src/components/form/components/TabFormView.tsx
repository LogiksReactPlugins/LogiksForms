import React from 'react'
import FieldRenderer from "./FieldRenderer.js";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { BaseFormViewProps } from "../Form.types.js";


export default function TabFormView({
  title,
  groupedFields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  components = {},
  sqlOpsUrls = {},
  widget
}: BaseFormViewProps) {
  const groupNames = Object.keys(groupedFields);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const stepperForm: Record<string, Record<string, Yup.AnySchema>> = {};
  const initialValues: Record<string, any> = {};

  const validationSchema = {};
  if (widget) {
    Object.entries(groupedFields).forEach(([step, fields]) => {
      const schema = {};
      intializeForm(fields, initialValues, schema);
      stepperForm[step] = schema;
    });
  } else {
    Object.entries(groupedFields).forEach(([step, fields]) => {

      intializeForm(fields, initialValues, validationSchema);

    });
  }



  if (data && Object.keys(data).length > 0) {
    // Update initialValues based on records
    Object.keys(data).forEach(key => {
      if (key in initialValues) {

        if (key === "tags" && typeof data[key] === "string") {
          initialValues[key] = data[key].split(",")
        } else {
          initialValues[key] = data[key] ? data[key] : ""
        }


      }
    });
  }
  const currentStepKey = groupNames[activeTabIndex] ?? null;

  const currentStepSchema: Record<string, Yup.AnySchema> =
    (currentStepKey && stepperForm[currentStepKey])
      ? stepperForm[currentStepKey]
      : {};



  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(widget ? currentStepSchema : validationSchema),
    onSubmit: (values) => {

      if (widget) {
        if (activeTabIndex < groupNames.length - 1) {
          setActiveTabIndex(pre => pre + 1)
        }

        if (activeTabIndex === groupNames.length - 1) {

          onSubmit(values)
        }
      } else {

        onSubmit(values);
      }



    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!widget) {
      const errors = await formik.validateForm();

      if (Object.keys(errors).length > 0) {
        alert("Please fill all required fields before submitting.");
        formik.setTouched(
          Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        );
        return;
      }
    }


    formik.handleSubmit(e);
  };


  const handlePrevious = () => {
    setActiveTabIndex(pre => {
      if (pre > 0) {
        return pre - 1
      }
      return pre
    })
  }

  return (
    <div className=" max-w-full  m-4">
      {/* Modern Tab Navigation */}
      <div className="relative">
        <div className="relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner">
          {/* Tab buttons */}
          <nav className="relative flex" >
            {groupNames.map((group, index) => (
              <button
                key={group}
                type="button"
                onClick={() => setActiveTabIndex(index)}
                className={`relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${activeTabIndex === index
                  ? 'text-action bg-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }`}

              >
                <span className="relative z-10 flex items-center justify-center gap-2 capitalize">
                  {/* Add icons based on common tab names */}

                  {group}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area with Animation */}

      <div
        key={groupNames[activeTabIndex]}
        className="bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300"
      >
        {/* Content Header */}

        <form onSubmit={handleSubmit} className="w-full mx-auto">
          {/* Fields Container */}
          <div className='grid grid-cols-12 gap-4'>
            {currentStepKey && groupedFields[currentStepKey]?.map((field, index) => (
               isHidden(field.hidden) ? null : <div
                key={field?.name ?? `field-${index}`}
                className={`col-span-12  ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"
                  }`}
              >
                <FieldRenderer sqlOpsUrls={sqlOpsUrls} key={field.name} field={field} formik={formik} methods={methods} components={components} />
              </div>
            ))}
          </div>
          <div className={`mt-8 flex ${activeTabIndex > 0 ? "justify-between" : "justify-end"} space-x-3`}>
            {activeTabIndex > 0 && <button onClick={handlePrevious} type="button" className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
              Previous
            </button>}

            <div className='space-x-3'>
              <button onClick={onCancel} type="button" className="px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Cancel
              </button>
              <button type='submit' className="px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                {widget ? "Next" : "Save"}
              </button>
            </div>
          </div>
        </form>
        {/* Progress Indicator */}
        <div className="mt-2 pt-3  border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span>Tab {activeTabIndex + 1} of {groupNames.length}</span>
              <p className='text-sm text-gray-700 ml-3'>All fields marked (*) are required</p>
            </div>

            <div className="flex gap-1">
              {groupNames.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTabIndex
                    ? 'bg-action w-6'
                    : 'bg-gray-300'
                    }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
