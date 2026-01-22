import { default as React } from 'react';
import { FormikProps } from 'formik';
import { FlatEntry } from '../utils.js';
import { FormField } from '../Form.types.js';
type MultiSelectProps = {
    field: FormField;
    isDisabled: boolean;
    handleToggle: (e: React.SyntheticEvent<HTMLDetailsElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent, isSingle: boolean) => void;
    detailsRef: React.RefObject<HTMLDetailsElement | null>;
    listRef: React.RefObject<HTMLDivElement | null>;
    valueArray: string[];
    labelClasses: string;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filteredOptions: FlatEntry[];
    highlightedIndex: number;
    setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
    formik: FormikProps<Record<string, any>>;
    executeFieldMethod: (trigger: "onChange" | "onBlur" | "onFocus" | "onClick", field: FormField, value?: any) => void;
    handlePersist: (value: any) => void;
};
export default function MultiSelect({ field, isDisabled, handleToggle, detailsRef, handleKeyDown, valueArray, labelClasses, listRef, search, filteredOptions, highlightedIndex, setSearch, formik, setHighlightedIndex, executeFieldMethod, handlePersist }: MultiSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map