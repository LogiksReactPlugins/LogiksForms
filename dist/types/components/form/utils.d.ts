import { FormJson, FormField } from './Form.types.js';
import * as Yup from "yup";
export declare function determineViewMode(json: FormJson): "accordion" | "simple" | "cards" | "tab";
export declare function groupFields(fields: Record<string, Omit<FormField, "name">>): Record<string, FormField[]>;
export declare function transformedObject(originalObject: Record<string, any>): Record<string, {
    label: string;
    required: boolean;
}>;
export declare const intializeForm: (formFields: FormField[], initialValues: Record<string, any>, validationSchema: Record<string, Yup.AnySchema>) => void;
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindGrid: Record<ColWidth, string>;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function toGrid(width: number | undefined): ColWidth;
export declare const isHidden: (hidden?: boolean | string) => boolean;
export declare const replacePlaceholders: (input: any, vars: Record<string, string | number>) => any;
export declare const formatOptions: (valueKey: string, lableKey: string, res: Record<string, any>) => Record<string, string>;
export {};
//# sourceMappingURL=utils.d.ts.map