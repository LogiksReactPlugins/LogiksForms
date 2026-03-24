import React, { useRef } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import type { FormikProps } from "formik";
import type { FormField, SqlEndpoints } from '../Form.types.js';
import { uploadFiles } from '../service.js';
import { getIcon, getInputConfig, handlePersist } from '../utils.js';

type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls?: SqlEndpoints | undefined;
    module_refid?: string | undefined;
};

export default function PhotoAvatarRenderer({
    formik,
    field,
    sqlOpsUrls,
    module_refid
}: PhotoAvatarRendererProps) {
    let key = field?.name;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (!files || files.length === 0) return;

        try {
            const uploads = await uploadFiles(sqlOpsUrls, files);
            const value = field.multiple
                ? uploads.map(f => f.path)
                : uploads[0]?.path;

            formik.setFieldValue(
                key,
                value
            );
            handlePersist(value, field, module_refid)
        } catch (err) {
            console.error("File upload failed", err);
            formik.setFieldError(key, "File upload failed");
        }

    };

    const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
            ? [formik.values[key]]
            : [];

    const inputConfig = getInputConfig(field);
    return (
        <div >

            <input
                ref={inputRef}
                type="file"
                className="hidden"
                {...inputConfig}
                onChange={handleFileChange}
            />

            <div
                onClick={() => inputRef.current?.click()}
                className='flex flex-wrap gap-2'

            >
                {files.length > 0 ? files.map(file => (
                    <PhotoRenderer field_name={file} filePath={file} sqlOpsUrls={sqlOpsUrls} />
                )) : (
                    <div className="w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100">
                        <i className={`fa-solid ${getIcon(field)} text-2xl text-gray-400`} />
                    </div>
                )}
            </div>
        </div>
    )
}
