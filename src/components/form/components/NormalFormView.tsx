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
  methods = {}
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

      <div className="bg-white animate-in fade-in duration-300">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className=' px-5 text-sm text-gray-700'>All fields marked (*) are required</p>
        <form onSubmit={formik.handleSubmit} className="p-5  mx-auto">
          <div className='grid grid-cols-12 gap-4'>


            {fields.map((field, index) => (
              <div
                key={field?.name ?? `field-${index}`}
                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-2"
                  }`}
              >
                <FieldRenderer key={field.name} field={field} formik={formik} methods={methods} />
              </div>
            ))}

          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button type="button" onClick={onCancel} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Save
            </button>

          </div>
        </form>
      </div>

    </div>
  )
}

