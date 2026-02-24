import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { flatFields, intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { SimpleFormViewProps, SelectOptions, FormField } from "../Form.types.js";
import CommonInfo from './CommonInfo.js';




export default function NormalFormView({
  title,
  fields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  sqlOpsUrls,
  refid,
  module_refid
}: SimpleFormViewProps) {
  const flatfields = flatFields(fields, sqlOpsUrls?.operation);


  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, SelectOptions>
  >({});

  const setOptionsForField = (name: string, options: SelectOptions) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };


  const { commonFields, otherFields } = React.useMemo(() => {
    return flatfields.reduce(
      (acc, field) => {
        if (field.group === "common") acc.commonFields.push(field);
        else acc.otherFields.push(field);
        return acc;
      },
      { commonFields: [] as FormField[], otherFields: [] as FormField[] }
    );
  }, [flatfields]);


  const { initialValues, validationSchema } = React.useMemo(() => {
    const values: Record<string, any> = {};
    const schema: Record<string, Yup.AnySchema> = {};
    flatfields.forEach((field) => {
      intializeForm([field], values, schema, data, module_refid, sqlOpsUrls?.operation);
    });

    return {
      initialValues: values,
      validationSchema: schema,
    };
  }, [flatfields, data]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values) => {
      onSubmit(values)
    }
  })


  return (
    <>



      <div className="relative z-10 max-w-full">
        <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300">
          <form onSubmit={formik.handleSubmit} className="p-4  mx-auto">
            {commonFields.length > 0 && (
              <CommonInfo
                refid={refid}
                module_refid={module_refid}
                sqlOpsUrls={sqlOpsUrls}
                fields={commonFields}
                formik={formik}
                methods={methods}
                setFieldOptions={setOptionsForField}
                fieldOptions={fieldOptions}

              />
            )}
            <div className='grid grid-cols-12 gap-4'>
              {otherFields.map((field) => {
                const hidden = isHidden(field.hidden) || field.type === "geolocation";

                return <div
                  key={field?.name}
                  id={`wrapper-${field.name}`}
                  className={`
                    col-span-12 md:col-span-6 
                    ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"} 
                    ${hidden ? "hidden" : ""}
                    `}
                >
                  <FieldRenderer
                    refid={refid}
                    module_refid={module_refid}
                    sqlOpsUrls={sqlOpsUrls}
                    field={field}
                    formik={formik}
                    methods={methods}
                    setFieldOptions={setOptionsForField}
                    {...(fieldOptions[field.name]
                      ? { optionsOverride: fieldOptions[field.name] }
                      : {})}
                  />
                </div>
              })}

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
    </>
  )
}

