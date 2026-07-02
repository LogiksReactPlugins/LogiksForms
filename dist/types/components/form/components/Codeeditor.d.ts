import { FormikProps } from 'formik';
import { FormField } from '../Form.types.js';
interface Props {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    isDisabled?: boolean;
    labelClasses: string;
    executeFieldMethod: (trigger: "onChange" | "onBlur" | "onFocus" | "onClick", field: FormField, value?: any) => void;
    handlePersist: (value: any, field: FormField, module_refid: string) => void;
    module_refid: string;
}
export default function CodeEditor({ field, formik, isDisabled, handlePersist, executeFieldMethod, module_refid, labelClasses }: Props): import("react").JSX.Element;
export {};
//# sourceMappingURL=Codeeditor.d.ts.map