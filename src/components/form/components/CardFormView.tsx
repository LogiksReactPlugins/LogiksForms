import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import Card from './Card.js'
import type { BaseFormViewProps, SelectOptions } from "../Form.types.js";


export default function CardFormView({
  title,
  groupedFields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  components = {},
  sqlOpsUrls = {},
  refid
}: BaseFormViewProps) {

  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, SelectOptions>
  >({});

  const setOptionsForField = (name: string, options: SelectOptions) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };
  const initialValues: Record<string, any> = {};
  const validationSchema = {};

  Object.entries(groupedFields).forEach(([step, fields]) => {

    intializeForm(fields, initialValues, validationSchema);
  });


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

        <form onSubmit={formik.handleSubmit} className="p-4 mx-auto">
          <div className="space-y-2">
            {groupedFields && Object.entries(groupedFields).map(([group, fields], index) => (
              <Card key={group} title={group}>
                <div className='grid grid-cols-12 gap-4'>
                  {fields.map((field, index) => (
                    isHidden(field.hidden) ? null : <div
                      key={field?.name ?? `field-${index}`}
                      className={`col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"
                        }`}
                    >
                      <FieldRenderer
                        refid={refid}
                        sqlOpsUrls={sqlOpsUrls}
                        components={components}
                        key={field.name}
                        field={field}
                        formik={formik}
                        methods={methods}
                        setFieldOptions={setOptionsForField}
                        {...(fieldOptions[field.name]
                          ? { optionsOverride: fieldOptions[field.name] }
                          : {})}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between space-x-3">
            <p className='px-4 pt-4 text-sm text-secondary'>All fields marked (*) are required</p>
            <div className='space-x-3'>


              <button type="button" onClick={onCancel} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Save
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
