
import { tailwindCols, toColWidth } from '../utils.js';

import FieldRenderer from './FieldRenderer.js';
import type { CommonInfoProps } from '../Form.types.js';
import PhotoRenderer from './PhotoRenderer.js';
import PhotoAvatarRenderer from './PhotoAvatarRenderer.js';




export default function CommonInfo({
    fields,
    formik,
    methods = {},
    sqlOpsUrls,
    refid,
    module_refid,
    fieldOptions,
    setFieldOptions

}: CommonInfoProps) {

    return (
        <div className="bg-white min-h-3/10 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Avatar */}
                <div className="lg:col-span-2 flex flex-col ">
                    <div className="relative w-42 h-42 ">
                        {
                            fields?.filter(field => field.type === "avatar").map((field) => {


                                return <PhotoAvatarRenderer
                                    formik={formik}
                                    field={field}
                                    sqlOpsUrls={sqlOpsUrls}
                                    module_refid={module_refid}

                                />

                            })

                        }

                    </div>
                </div>
                {/* Right Column - Details Grid */}
                <div className="lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-12 gap-2">
                        {fields?.map((field, index) => {

                            if (field.type === "avatar") return null

                            return (
                                <div key={field.name} className={`transition-colors duration-200 col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"}`}>
                                    <FieldRenderer
                                        key={field?.name || index}
                                        refid={refid}
                                        module_refid={module_refid}
                                        sqlOpsUrls={sqlOpsUrls}
                                        field={field}
                                        formik={formik}
                                        methods={methods}
                                        setFieldOptions={setFieldOptions}
                                        {...(fieldOptions?.[field.name]
                                            ? { optionsOverride: fieldOptions[field.name] }
                                            : {})}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
