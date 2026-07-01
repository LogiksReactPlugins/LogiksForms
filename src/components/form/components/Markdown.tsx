import MDEditorComponent from "@uiw/react-md-editor";
import type { FormikProps } from "formik";
import type { FormField } from "../Form.types.js";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
// Re-map the component to fix the TS type resolution error
const MDEditor =
  (MDEditorComponent.default ??
    MDEditorComponent) as React.ComponentType<any>;

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


export default function Markdown({
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

  const error =
    formik.touched[key] &&
    formik.errors[key];

  return (
    <div
      className="relative"
      data-color-mode="light"
    >
      <label className={labelClasses}>
        {field.label}
        {field.required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      <MDEditor
        value={value}
        height={300}
        preview={"edit"}
      
        textareaProps={{
          placeholder: field.placeholder,
          disabled: isDisabled,
          onBlur: () =>
            formik.setFieldTouched(key, true),
        }}
        onChange={(value: string | undefined) => {
          const markdown = value ?? "";

          formik.setFieldValue(
            key,
            markdown
          );

          handlePersist?.(
            markdown,
            field,
            module_refid ?? ""
          );

          executeFieldMethod?.(
            "onChange",
            field,
            key
          );
        }}
      />

      {error && (
        <span className="text-xs text-red-500">
          {String(formik.errors[key])}
        </span>
      )}
    </div>
  );
}