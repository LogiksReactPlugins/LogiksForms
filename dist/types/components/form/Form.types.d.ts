import { FormikProps } from 'formik';
import { AxiosRequestConfig } from 'axios';
export interface FormField {
    name: string;
    label?: string;
    width?: number | string;
    options?: Record<string, any>;
    group?: string;
    type?: string;
    regex?: string;
    required?: boolean;
    disabled?: boolean;
    error_message?: string;
    placeholder?: string;
    field_error?: string;
    axiosObject?: AxiosRequestConfig;
    valueKey?: string;
    labelKey?: string;
    source?: Record<string, any>;
    multiple?: boolean;
    icon?: string;
}
export interface FormJson {
    title?: string | undefined;
    template?: string;
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
}
export interface FormProps {
    formJson: FormJson;
    userid?: string | null;
    methods?: Record<string, Function>;
    onCancel?: () => void;
}
export interface BaseFormViewProps {
    title?: string | undefined;
    groupedFields: Record<string, FormField[]>;
    data?: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    methods?: Record<string, Function>;
}
export interface FieldRendererProps {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
}
//# sourceMappingURL=Form.types.d.ts.map