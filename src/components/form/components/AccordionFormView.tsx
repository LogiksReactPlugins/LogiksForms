import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { buildChainMap, filterSavableValues, intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import Accordion from './Accordion.js'
import type { GroupedFormViewPrps, OptionItem, SelectOptions } from "../Form.types.js";
import CommonInfo from './CommonInfo.js';


export default function AccordionFormView({
  title,
  groupedFields,
  data,
  onSubmit = async (values) => Promise<any>,
  onCancel = () => { },
  methods = {},
  components = {},
  sqlOpsUrls,
  refid,
  module_refid,
  buttons
}: GroupedFormViewPrps) {
  const { common: commonFields = [], ...tabGroups } = groupedFields;
  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, OptionItem[]>
  >({});

  const setOptionsForField = (name: string, options: OptionItem[]) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };

  const flatFields = React.useMemo(
    () => Object.values(groupedFields).flat(),
    [groupedFields]
  );

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
    onSubmit: async (values) => {

      try {
        
     

      let filteredValues = filterSavableValues(values, flatFields);

      const res = await onSubmit(filteredValues);
     console.log("res",res)
      formik.resetForm();
       } catch (error) {
        console.log("error",error)
      }

    }
  })

  const chainMap = React.useMemo(
    () => buildChainMap(flatFields),
    [flatFields]
  );

  // let commonButtons = buttons ? Object.entries(buttons).filter(([_, val]) => {
  //   if (val.groups && val.groups.length > 0) return false
  //   return true;
  // }) : [];


  // async function handleClick(method: string, val: Record<string, any>) {

  //   const methodFn = methods?.[method as keyof typeof methods];

  //   if (methodFn) {
  //     try {
  //       await methodFn();

  //     } catch (err) {
  //       console.error("Method execution failed:", err);

  //     }
  //     return
  //   }
  //   methods?.handleAction?.({ [method]: val }, formik.values)

  // }

   const resetForm = () => {
    formik.resetForm();
  }

  return (

    <div className="relative max-w-full">

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
                  chainMap={chainMap}

                />
              </Accordion>
            )}
            {tabGroups && Object.entries(tabGroups).map(([group, fields], index) => {
           

              // let visibleButtons = buttons ? Object.entries(buttons).filter(([_, val]) => {
              //   if (val.groups) return val.groups.includes(group)
              //   return false;
              // }) : [];

         
              
              return <Accordion key={group} title={group} isFirst={index === 0 && commonFields.length === 0}>
                <div className='grid grid-cols-12 gap-4'>
                  {fields.map((field, index) => {
                    const hidden = isHidden(field.hidden);

                    const wrapperClass = `
                        col-span-12 md:col-span-6
                        ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"}
                        ${hidden ? "hidden" : ""}
                      `;
                    if (field.type === "static" || field.type === "static2") {
                      const isPrimary = field.type === "static";

                      return (
                        <div
                          key={field?.name}
                          id={`wrapper-${field.name}`}
                          className="col-span-12"
                        >
                          <div
                            className={` bg-gray-100 ${isPrimary ? "mt-4" : "mt-3"}`}
                          >
                            <div className="flex items-center justify-between px-4 py-3">
                              <div className="flex items-center gap-3">

                                <h2
                                  className={`${isPrimary ? "text-base " : "text-sm"} font-semibold text-gray-800`}
                                >
                                  {field.label}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return <div
                      id={`wrapper-${field.name}`}
                      key={field?.name ?? `field-${index}`}
                      className={wrapperClass}
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
                        chainMap={chainMap}
                      />
                    </div>
                  })}
                </div>

                {/* <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                  {visibleButtons &&
                    visibleButtons.map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => handleClick(key, val)}
                        className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {val.label}
                      </button>
                    ))}
                </div> */}

              
              </Accordion>
            })}



          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between space-x-3">
            <p className='text-sm text-gray-700'>All fields marked (*) are required</p>
            <div className='space-x-3'>
              <button type="button" onClick={onCancel} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Cancel
              </button>
              <button type="button" onClick={resetForm} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Reset
              </button>
              <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Save
              </button>
            </div>
          </div>
        </form>


        {/* <div className="flex justify-end gap-2  p-3 border-t border-gray-100">
          {commonButtons &&
            commonButtons.map(([key, val]) => (
              <button
                key={key}
                onClick={() => handleClick(key, val)}
                className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {val.label}
              </button>
            ))}
        </div> */}
      </div>
    </div>
  )
}
