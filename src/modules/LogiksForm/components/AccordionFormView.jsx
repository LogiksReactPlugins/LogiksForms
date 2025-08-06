import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer';
import { intializeForm } from '../../../utils';
import Accordion from './Accordion'


export default function AccordionFormView({
  groupedFields,
  data,
  onSubmit = (values) => { console.log(values) },
  onCancel = () => { }
}) {

  console.log("groupedFields", groupedFields);


  const initialValues = {};
  const validationSchema = {};
  Object.keys(groupedFields).forEach((step) => {
    intializeForm(groupedFields[step], initialValues, validationSchema)
  })


  if (Object.keys(data).length > 0) {
    // Update initialValues based on records
    Object.keys(data).forEach(key => {
      if (key in initialValues) {
        initialValues[key] = data[key];
      }
    });
  }



  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values) => {
      onSubmit(values)

    }
  })

  console.log("formik", formik.values);
  console.log("formik", formik.errors)
  return (

    <div className="relative z-10 p-6 max-w-6xl w-full mx-auto">
      {/* <div className="text-center mb-5">
          <div className="relative inline-block">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent mb-1">
              {title}
            </h4>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
          </div>
       
        </div> */}

      {/* Form Accordions */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-in fade-in duration-300">
        <form onSubmit={formik.handleSubmit} className="p-8 max-w-6xl mx-auto">
          <div className="space-y-2">
            {Object.entries(groupedFields).map(([group, fields], index) => (
              <Accordion key={group} title={group} isFirst={index === 0}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {fields.map((field) => (
                    <FieldRenderer key={field.name} field={field} formik={formik} />
                  ))}
                </div>
              </Accordion>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-end space-x-3">
            <button onClick={onCancel} className="px-5 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
              Cancel
            </button>
            <button type="submit" className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}
