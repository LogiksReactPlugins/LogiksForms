
import type { FormikProps } from "formik";
import type { AxiosRequestConfig } from "axios";
import type { ReactNode } from "react";

type ApiSrc = {
    type: string;
    endpoint: string;
    method?: string;
    table?: never;
    columns?: never;
    queryid?: never;
};

type SqlSrcByTable = {
    table: string;
    columns: string;
    where?: Record<string, string>;
    queryid?: never;
};

type SqlSrcByQueryId = {
    queryid: string;
    where?: Record<string, string>;
    table?: never;
    columns?: never;
};

type AutocompleteSrc = ApiSrc | SqlSrcByTable | SqlSrcByQueryId;

export type AutocompleteConfig = {
    target: string;
    src: AutocompleteSrc;
};


export interface FormField {
    name: string;
    label?: string;
    parameter?:string | Record<string, string>;
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
    validate?: Record<string, string | number | boolean>;
    groupid?: string;
    hidden?: boolean;
    value?: string | undefined;
    default?: string | number | boolean | string[] | number[] | null;
    cols?: string;
    search?: boolean;
    method?: string;
    vmode?: string;
    "no-option"?: string;
    "nodb"?: boolean;
    "nosave"?: boolean;
    queryid?: string;
    min?: number | string;
    max?: number | string;
    minlength?: number;
    maxlength?: number;
    onChange?: string;
    onBlur?: string;
    onFocus?: string;
    onClick?: string;
    step?: string | number;
    persistent?: string | boolean;
    content?:string;

}


export interface CommonInfoProps {
    fields: FormField[];
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined
    fieldOptions: Record<string, SelectOptions>;

    setFieldOptions: (
        fieldName: string,
        options: SelectOptions
    ) => void;
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
    uploadURL?: string;
};

export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints?: SqlEndpoints;
    forcefill?: Record<string, string>;
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
    widget?: boolean;
    gotolink?: string;
    module_refid?: string | undefined
}

export interface FormProps {

    formJson: FormJson;
    userid?: string | null;
    methods?: Record<string, Function>
    onCancel?: () => void;
    callback?: (res: any) => void;
    components?: Record<string, ReactNode>
    initialvalues?: Record<string, any>;


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
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined

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
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined
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

export type FileCategory = "image" | "pdf" | "video" | "text" | "other";