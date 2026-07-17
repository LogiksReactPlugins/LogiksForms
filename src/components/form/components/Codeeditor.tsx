
import type { FormikProps } from "formik";
import type { FormField } from "../Form.types.js";

import EditorComponent from "@monaco-editor/react";

const Editor =
    (EditorComponent.default ??
        EditorComponent) as React.ComponentType<any>;

interface Props {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    isDisabled?: boolean;
    labelClasses: string;
    executeFieldMethod: (
        trigger: "onChange" | "onBlur" | "onFocus" | "onClick",
        field: FormField,
        value?: any
    ) => void;
    handlePersist: (value: any, field: FormField, module_refid: string) => void;
    module_refid: string;
}

export default function CodeEditor({
    field,
    formik,
    isDisabled,
    handlePersist,
    executeFieldMethod,
    module_refid,
    labelClasses
}: Props) {
    const key = field.name;
    const value = formik.values[key] ?? "";



    return (
        <div className="relative">
            <label className={labelClasses}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div
                className={`
  w-full   border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${isDisabled
                        ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`}
            >
                <Editor
                    height={field.height ?? 300}
                    language={field.language ?? "javascript"}
                    theme={field.theme ?? "vs-dark"}
                    value={value}

                    onChange={(value: string | undefined) => {
                        formik.setFieldValue(
                            key,
                            value ?? ""
                        )

                        handlePersist?.(
                            value,
                            field,
                            module_refid ?? ""
                        );

                        executeFieldMethod?.(
                            "onChange",
                            field,
                            key
                        );
                    }
                    }
                    options={{
                        readOnly: isDisabled,
                        minimap: {
                            enabled: true,
                            renderCharacters: true,
                            scale: 1,
                            showSlider: "mouseover",
                        },

                        fontSize: 14,
                        lineNumbers: "on",


                    }}
                />
            </div>
            {formik.touched[key] && formik.errors[key] && (
                <span className="text-xs text-red-500">
                    {String(formik.errors[key])}
                </span>
            )}
        </div>
    );
}