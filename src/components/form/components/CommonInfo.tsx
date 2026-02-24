
import { isHidden, tailwindCols, toColWidth } from '../utils.js';

import FieldRenderer from './FieldRenderer.js';
import type { CommonInfoProps } from '../Form.types.js';
import PhotoAvatarRenderer from './PhotoAvatarRenderer.js';
import { useMemo } from 'react';




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

    const avatarField = useMemo(
        () => fields?.find((f) => f.type === "avatar"),
        [fields]
    );


    return (
        <div className="bg-white min-h-3/10 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Avatar */}
                {avatarField && (

                    <div className="lg:col-span-2 flex flex-col items-center">
                        <div
                            id={`wrapper-${avatarField.name}`}
                            className={`
                        overflow-hidden bg-gray-100 flex items-center justify-center
                         ${avatarField.hidden ? "hidden" : ""}

                            `}>

                            <PhotoAvatarRenderer
                                formik={formik}
                                field={avatarField}
                                sqlOpsUrls={sqlOpsUrls}
                                module_refid={module_refid}
                            />

                        </div>
                    </div>
                )}
                {/* Right Column - Details Grid */}
                <div className="lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-12 gap-2">
                        {fields?.map((field, index) => {

                            if (field.type === "avatar") return null;
                            const hidden = isHidden(field.hidden) || field.type === "geolocation";

                            return (
                                <div key={field.name} id={`wrapper-${field.name}`} className={`transition-colors duration-200 col-span-12 md:col-span-6 
                                ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"}
                                ${hidden ? "hidden" : ""}

                                `}>
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
