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
export default function Markdown({ field, formik, isDisabled, handlePersist, executeFieldMethod, module_refid, labelClasses }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Markdown.d.ts.map