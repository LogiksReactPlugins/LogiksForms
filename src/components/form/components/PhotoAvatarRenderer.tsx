import React, { useRef } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import type { FormikProps } from "formik";
import type { FileItem, FormField, SqlEndpoints } from '../Form.types.js';
import { deleteFile, uploadFiles } from '../service.js';
import { buildFileValue, getIcon, getInputConfig, handlePersist } from '../utils.js';

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
        const fileList = e.currentTarget.files;
        if (!fileList?.length) return;

        const files = Array.from(fileList);

        try {
            const uploads = await uploadFiles(sqlOpsUrls, files);
            const value = buildFileValue({
                uploads,
                currentValue: formik.values[key],
                multiple: field.multiple ?? false,
            });

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


    const removeFile = async (file: FileItem) => {
        const existing: FileItem[] = Array.isArray(formik.values[key])
            ? formik.values[key]
            : [];

        const updated = existing.filter(f => f.fileId !== file.fileId);

        formik.setFieldValue(key, updated);


        try {
            await deleteFile(sqlOpsUrls, file.fileId);
            handlePersist(updated, field, module_refid);
        } catch (err) {
            formik.setFieldValue(key, existing);
        }
    };

    const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
            ? [formik.values[key]]
            : [];

    const inputConfig = getInputConfig(field);
    const isMultiple = field.multiple === true;
    return (
        <div >
            <label className="block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                multiple={isMultiple}
                {...inputConfig}
                onChange={handleFileChange}
            />

            <div
                className='flex flex-wrap gap-2'
            >
                {files.length > 0 ? files.map(file => (
                    <div key={file} className="relative group">
                        <PhotoRenderer
                            field_name={file.name}
                            filePath={file.path}
                            sqlOpsUrls={sqlOpsUrls}
                        />

                        {/*Remove */}
                        <button
                            type="button"
                            onClick={() => {
                                removeFile(file)
                            }}
                            className="absolute -top-2 -right-2 cursor-pointer bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
                        >
                            ×
                        </button>
                    </div>
                )) : null}

               
                    <div
                        onClick={() => inputRef.current?.click()}
                        className="w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer"
                    >
                        <i className={`fa-solid ${getIcon(field)} text-2xl text-gray-400`} />
                    </div>
                
            </div>
            {formik.touched[key] && formik.errors[key] &&
                <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
            }
        </div>
    )
}
