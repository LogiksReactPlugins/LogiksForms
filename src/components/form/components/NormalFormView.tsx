import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { intializeForm, tailwindCols, toColWidth } from '../utils.js';
import type { BaseFormViewProps } from "../Form.types.js";

export default function NormalFormView({
  title,
  groupedFields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  components = {}
}: BaseFormViewProps) {
  const fields = Object.values(groupedFields).flat();


  const initialValues: Record<string, any> = {};
  const validationSchema = {};
  Object.entries(groupedFields).forEach(([step, fields]) => {
    intializeForm(fields, initialValues, validationSchema);
  });

  if (data && Object.keys(data).length > 0) {
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




  return (
    <div className="relative z-10 max-w-full  m-4">

      <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300">
        <h2 className="text-xl font-bold pl-4 pt-4 mb-4">{title}</h2>

        <form onSubmit={formik.handleSubmit} className="p-4  mx-auto">
          <div className='grid grid-cols-12 gap-4'>


            {fields.map((field, index) => (
              <div
                key={field?.name ?? `field-${index}`}
                className={`col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"
                  }`}
              >
                <FieldRenderer components={components} key={field.name} field={field} formik={formik} methods={methods} />
              </div>
            ))}

          </div>

          <div className="mt-8 flex justify-between space-x-3">
            <p className='text-sm text-gray-700'>All fields marked (*) are required</p>
            <div className='space-x-3'>
              <button type="button" onClick={onCancel} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Save
              </button>
            </div>



          </div>
        </form>
      </div>

    </div>
  )
}

