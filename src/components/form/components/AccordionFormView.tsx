import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import Accordion from './Accordion.js'
import type { GroupedFormViewPrps, SelectOptions } from "../Form.types.js";
import CommonInfo from './CommonInfo.js';


export default function AccordionFormView({
  title,
  groupedFields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  components = {},
  sqlOpsUrls,
  refid,
  module_refid
}: GroupedFormViewPrps) {
  const { common: commonFields = [], ...tabGroups } = groupedFields;
  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, SelectOptions>
  >({});

  const setOptionsForField = (name: string, options: SelectOptions) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };

  const { initialValues, validationSchema } = React.useMemo(() => {
    const values: Record<string, any> = {};
    const schema: Record<string, Yup.AnySchema> = {};
    Object.values(groupedFields).flat().forEach((field) => {
      intializeForm([field], values, schema, data, module_refid, sqlOpsUrls?.operation);
    });

    return {
      initialValues: values,
      validationSchema: schema,
    };
  }, [groupedFields, data, module_refid, sqlOpsUrls?.operation]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values) => {
      onSubmit(values)

    }
  })

  return (

    <div className="relative z-10 max-w-full">

      <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300">

        <form onSubmit={formik.handleSubmit} className="p-4 mx-auto">
          <div className="space-y-2" >
            {commonFields.length > 0 && (
              <Accordion title="Common" isFirst={true}>
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
              </Accordion>
            )}
            {tabGroups && Object.entries(tabGroups).map(([group, fields], index) => (
              <Accordion key={group} title={group} isFirst={index === 0 && commonFields.length === 0}>
                <div className='grid grid-cols-12 gap-4'>
                  {fields.map((field, index) => {
                    const hidden = isHidden(field.hidden) || field.type === "geolocation";
                    return <div
                      id={`wrapper-${field.name}`}
                      key={field?.name ?? `field-${index}`}
                      className={`col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"}
                        ${hidden ? "hidden" : ""}
                        `}
                    >
                      <FieldRenderer
                        refid={refid}
                        module_refid={module_refid}
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
                  })}
                </div>
              </Accordion>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between space-x-3">
            <p className='text-sm text-gray-700'>All fields marked (*) are required</p>
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
