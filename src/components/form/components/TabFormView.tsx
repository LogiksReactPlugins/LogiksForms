import React from 'react'
import FieldRenderer from "./FieldRenderer.js";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { intializeForm } from '../utils.js';
import type { BaseFormViewProps } from "../Form.types.js";


export default function TabFormView({
  title,
  groupedFields,
  data,
  onSubmit = (values) => { console.log(values) },
  onCancel = () => { }
}: BaseFormViewProps) {
  const groupNames = Object.keys(groupedFields);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const stepperForm: Record<string, Record<string, Yup.AnySchema>> = {};
  const initialValues: Record<string, any> = {};
  Object.entries(groupedFields).forEach(([step, fields]) => {
    const validationSchema = {};
    intializeForm(fields, initialValues, validationSchema)
    stepperForm[step] = validationSchema;
  });


  if (data && Object.keys(data).length > 0) {
    // Update initialValues based on records
    Object.keys(data).forEach(key => {
      if (key in initialValues) {
        initialValues[key] = data[key];
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
    validationSchema: Yup.object().shape(currentStepSchema),
    onSubmit: (values) => {

      if (activeTabIndex < groupNames.length - 1) {
        setActiveTabIndex(pre => pre + 1)
      }

      if (activeTabIndex === groupNames.length - 1) {

        onSubmit(values)
      }

    }
  })

  console.log("formik.errors", formik.errors)
  console.log("activeTabIndex", activeTabIndex)
  const handlePrevious = () => {
    setActiveTabIndex(pre => {
      if (pre > 0) {
        return pre - 1
      }
      return pre
    })
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* Modern Tab Navigation */}
      <div className="relative">
        {/* Background pill that slides */}
        <div className="relative bg-gray-100 rounded-t-2xl p-2 shadow-inner">
          <div
            className="absolute top-2 bottom-2 bg-white rounded-xl shadow-lg transition-all duration-300 ease-out"
            style={{
              width: `${100 / groupNames.length}%`,
              left: `${(activeTabIndex * 100) / groupNames.length}%`
            }}
          ></div>

          {/* Tab buttons */}
          <nav className="relative flex">
            {groupNames.map((group, index) => (
              <button
                key={group}
                type="button"
                onClick={() => setActiveTabIndex(index)}
                className={`relative flex-1 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeTabIndex === index
                  ? 'text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {/* Add icons based on common tab names */}
                  {group.toLowerCase().includes('general') && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {group.toLowerCase().includes('security') && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {group.toLowerCase().includes('notification') && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h10" />
                    </svg>
                  )}
                  {!group.toLowerCase().includes('general') && !group.toLowerCase().includes('security') && !group.toLowerCase().includes('notification') && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {group}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area with Animation */}
      <div className="relative ">
        <div
          key={groupNames[activeTabIndex]}
          className="bg-white rounded-b-2xl shadow-xl border border-gray-100 p-8 animate-in fade-in duration-300"
        >
          {/* Content Header */}

          <form onSubmit={formik.handleSubmit} className="p-8 max-w-6xl mx-auto">
            {/* Fields Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {currentStepKey && groupedFields[currentStepKey]?.map((field, index) => (
                <FieldRenderer key={field.name} field={field} formik={formik} />
              ))}
            </div>
            <div className={`mt-4 flex ${activeTabIndex > 0 ? "justify-between" : "justify-end"} space-x-3`}>
              {activeTabIndex > 0 && <button onClick={handlePrevious} type="button" className="px-5 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
                Previous
              </button>}

              <div className='space-x-3'>
                <button onClick={onCancel} type="button" className="px-5 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
                  Cancel
                </button>
                <button type='submit' className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
                  Save
                </button>
              </div>





            </div>
          </form>
          {/* Progress Indicator */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Tab {activeTabIndex + 1} of {groupNames.length}</span>
              <div className="flex gap-1">
                {groupNames.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTabIndex
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-300'
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
