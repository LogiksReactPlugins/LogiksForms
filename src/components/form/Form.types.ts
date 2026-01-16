
import type { FormikProps } from "formik";
import type { AxiosRequestConfig } from "axios";
import type { ReactNode } from "react";



export type AutocompleteConfig = {
    target: string;
    src: {
        table: string;
        columns?: string;
        where?: Record<string, string>;
    };
};
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
    error_message?: string;      // error message if regex fails
    placeholder?: string;        // input placeholder
    field_error?: string;
    axiosObject?: AxiosRequestConfig,
    valueKey?: string;
    labelKey?: string;
    groupKey?: string;
    source?: Record<string, any>;
    multiple?: boolean;
    icon?: string;
    table?: string;
    columns?: string;
    where?: Record<string, string>;
    autocomplete?: "off" | AutocompleteConfig;
    ajaxchain?: AutocompleteConfig | AutocompleteConfig[];
    validate?: Record<string, string | number>;
    groupid?: string;
    hidden?: boolean;
    value?: string | undefined;
    default?: string | number | boolean | string[] | number[] | null;
    cols?: string;
    search?: boolean;
    method?: string;
    vmode?: string;
    "no-option"?: string;
    queryid?:string;

}

export interface SqlEndpoints {
    baseURL: string;
    dbopsGetRefId: string;
    accessToken: string;
    operation: string;
    dbopsGetHash: string;
    dbopsFetch?: string;
    dbopsUpdate?: string;
    dbopsCreate?: string;
};

export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints?: SqlEndpoints;
    forcefill?: Record<string, string>;
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
    initialvalues?: Record<string, any>

}
export type FlatOptions = Record<string, string>;
export type GroupedOptions = Record<string, Record<string, string>>;
export type SelectOptions = FlatOptions | GroupedOptions;

export interface BaseFormViewProps {
    title?: string | undefined;
    data?: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>;
    widget?: boolean | undefined;
    sqlOpsUrls?: Record<string, any> | undefined;
    refid?: string | undefined;

}

export interface SimpleFormViewProps extends BaseFormViewProps {
    fields: Record<string, Omit<FormField, "name">>;
}

export interface GroupedFormViewPrps extends BaseFormViewProps {
    groupedFields: Record<string, FormField[]>; // grouped array of fields
}

export interface FieldRendererProps {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>
    sqlOpsUrls?: Record<string, any> | undefined;
    refid?: string | undefined;
    optionsOverride?: SelectOptions;
    setFieldOptions?: (
        fieldName: string,
        options: SelectOptions
    ) => void;
}

export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
};

