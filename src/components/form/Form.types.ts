
import type { FormikProps } from "formik";
import type { AxiosRequestConfig } from "axios";
import type { ReactNode } from "react";
export interface FormField {
    name: string;
    label?: string;
    width?: number | string;
    options?: Record<string, any>,
    group?: string;
    type?: string;
    regex?: string;
    required?: boolean;
    disabled?: boolean;
    error_message?: string;      // error message if regex fails
    placeholder?: string;        // input placeholder
    field_error?: string;
    axiosObject?: AxiosRequestConfig,
    valueKey?: string,
    labelKey?: string,
    source?: Record<string, any>,
    multiple?: boolean,
    icon?: string,
    table?: string;
    columns?: string;
    where?: Record<string, string>;
    autocomplete?: Record<string, any>;
    validate?: Record<string, string | number>;
    groupid?:string;

}



export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints?: {
        baseURL: string;
        dbopsGetRefId: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsFetch?: string;
        dbopsUpdate?: string;
        dbopsCreate?: string;

    };
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
    widget?: boolean
}

export interface FormProps {

    formJson: FormJson;
    userid?: string | null;
    methods?: Record<string, Function>
    onCancel?: () => void;
    callback?: (res: any) => void;
    components?: Record<string, ReactNode>

}


export interface BaseFormViewProps {
    title?: string | undefined;
    groupedFields: Record<string, FormField[]>; // grouped array of fields
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
    components?: Record<string, ReactNode>
    sqlOpsUrls?: Record<string, any> | undefined;
}