import React, { useRef } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import type { FormikProps } from "formik";
import type { FormField, SqlEndpoints } from '../Form.types.js';
import { deleteFile, uploadFiles } from '../service.js';
import { buildFileValue, getIcon, getInputConfig, handlePersist, validateFiles } from '../utils.js';

type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls?: SqlEndpoints | undefined;
    module_refid?: string | undefined;
};

export default function PhotoAvatarRenderer({
    formik, field, sqlOpsUrls, module_refid
}: PhotoAvatarRendererProps) {
    const key = field?.name;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const galleryInputRef = useRef<HTMLInputElement | null>(null);
    const max = field.max !== undefined ? Number(field.max) : Infinity;
    const isMultiple = field.multiple === true;
    const isCameraGallery = field.type === "camera_gallery";

    const files: string[] = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key] ? [formik.values[key]] : [];

 

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const validFiles = validateFiles({
            e,
            existingFiles: files,
            maxFiles: max,
            maxFileSize: field.file_size,
        });
        if (!validFiles) return;
        try {
            const uploads = await uploadFiles(sqlOpsUrls, validFiles);
            const value = buildFileValue({
                uploads,
                currentValue: formik.values[key],
                multiple: isMultiple,
            });
            formik.setFieldValue(key, value);
            handlePersist(value, field, module_refid);
            if (e) e.target.value = "";
        } catch (err) {
            console.error("File upload failed", err);
            formik.setFieldError(key, "File upload failed");
        }
    };

    const removeFile = async (file: string) => {
        const existing: string[] = Array.isArray(formik.values[key]) ? formik.values[key] : [];
        const fileId = file.split("&")[0];
        if (!fileId) return;
        const updated = existing.filter((f) => f.split("&")[0] !== fileId);
        formik.setFieldValue(key, updated);
        try {
            await deleteFile(sqlOpsUrls, fileId);
            handlePersist(updated, field, module_refid);
        } catch (err) {
            formik.setFieldValue(key, existing);
            window.alert("Failed to delete file. Please try again.");
        }
    };

    const canAddMore = files.length < max;

    return (
        <div>
            <label className="block text-sm font-semibold mb-1 transition-all duration-300 text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {/* Camera input — with capture, used by all types + camera button in camera_gallery */}
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                multiple={isMultiple}
                {...getInputConfig(field)}
                onChange={handleFileChange}
            />

            {/* Gallery input — no capture, only used by camera_gallery gallery button */}
            {isCameraGallery && (
                <input
                    ref={galleryInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple={isMultiple}
                    onChange={handleFileChange}
                />
            )}

            <div className="flex flex-wrap gap-2">
                {files.map((file) => (
                    <div key={file} className="relative group">
                        <PhotoRenderer field_name={file} filePath={file} sqlOpsUrls={sqlOpsUrls} />
                        <button
                            type="button"
                            onClick={() => removeFile(file)}
                            className="absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl transition"
                        >
                            ×
                        </button>
                    </div>
                ))}

                {canAddMore && (
                    isCameraGallery ? (
                        <>
                            <div
                                onClick={() => inputRef.current?.click()}
                                className="w-24 h-24 flex flex-col items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer gap-1"
                            >
                                <i className="fa-solid fa-camera text-2xl text-gray-400" />
                                <span className="text-xs text-gray-400">Camera</span>
                            </div>
                            <div
                                onClick={() => galleryInputRef.current?.click()}
                                className="w-24 h-24 flex flex-col items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer gap-1"
                            >
                                <i className="fa-solid fa-image text-2xl text-gray-400" />
                                <span className="text-xs text-gray-400">Gallery</span>
                            </div>
                        </>
                    ) : (
                        // All other types — original single button, untouched
                        <div
                            onClick={() => inputRef.current?.click()}
                            className="w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer"
                        >
                            <i className={`fa-solid ${getIcon(field)} text-2xl text-gray-400`} />
                        </div>
                    )
                )}
            </div>

            {formik.touched[key] && formik.errors[key] &&
                <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
            }
        </div>
    );
}


