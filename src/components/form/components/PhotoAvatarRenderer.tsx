import React, { useRef } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import { Field, type FormikProps } from 'formik';
import type { FormField, SqlEndpoints } from '../Form.types.js';
import { uploadFiles } from '../service.js';
import { handlePersist } from '../utils.js';

type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls: SqlEndpoints;
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
    return (
        <div>
            <label className="block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700">{field.label}</label>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            <div
                onClick={() => inputRef.current?.click()}
                className="h-24 w-24 border border-dashed cursor-pointer overflow-hidden"
            >
                {formik.values[key] ? (
                    <PhotoRenderer field_name={key} filePath={formik.values[key]} sqlOpsUrls={sqlOpsUrls} />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        <i className="fa-solid fa-user" />
                    </div>
                )}
            </div>
        </div>
    )
}
