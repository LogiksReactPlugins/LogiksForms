import { FormikProps } from 'formik';
import { AxiosRequestConfig } from 'axios';
import { ReactNode } from 'react';
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
    table?: string;
    columns?: string;
    where?: Record<string, string>;
    autocomplete?: Record<string, any> | string;
    validate?: Record<string, string | number>;
    groupid?: string;
    hidden?: boolean;
    value?: string | undefined;
}
export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints?: {
        baseURL: string;
        dbopsGetRefId: string;
        accessToken: string;
        operation: string;
        dbopsGetHash: string;
        dbopsFetch?: string;
        dbopsUpdate?: string;
        dbopsCreate?: string;
    };
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
    widget?: boolean;
}
export interface FormProps {
    formJson: FormJson;
    userid?: string | null;
    methods?: Record<string, Function>;
    onCancel?: () => void;
    callback?: (res: any) => void;
    components?: Record<string, ReactNode>;
    initialvalues?: Record<string, any>;
}
export interface BaseFormViewProps {
    title?: string | undefined;
    groupedFields: Record<string, FormField[]>;
    data?: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>;
    widget?: boolean | undefined;
    sqlOpsUrls?: Record<string, any> | undefined;
}
export interface FieldRendererProps {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>;
    sqlOpsUrls?: Record<string, any> | undefined;
}
//# sourceMappingURL=Form.types.d.ts.map