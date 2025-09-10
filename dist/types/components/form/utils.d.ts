import { FormJson, FormField } from './Form.types.js';
import * as Yup from "yup";
export declare function determineViewMode(json: FormJson): "accordion" | "simple" | "cards" | "tab";
export declare function groupFields(fields: Record<string, Omit<FormField, "name">>): Record<string, FormField[]>;
export declare const intializeForm: (formFields: FormField[], initialValues: Record<string, any>, validationSchema: Record<string, Yup.AnySchema>) => void;
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindGrid: Record<ColWidth, string>;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function toGrid(width: number | undefined): ColWidth;
export {};
//# sourceMappingURL=utils.d.ts.map