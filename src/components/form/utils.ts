import * as Yup from "yup";
import type { FormJson, FormField } from "./Form.types.js";
export function determineViewMode(json: FormJson) {
  if (json.template === 'accordion') return 'accordion';

  const fields = Object.values(json.fields || {});
  const hasGroup = fields.some((field) => field.group);

  return hasGroup ? 'tab' : 'normal';
}

export function groupFields(fields: Record<string, Omit<FormField, "name">>) {
  const grouped: Record<string, FormField[]> = {};

  const defaultGroup = 'General';
  Object.entries(fields).forEach(([key, config]) => {
    const group = config.group || defaultGroup;
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push({ name: key, ...config });
  });

  return grouped;
}

export const intializeForm = (
  formFields: FormField[],
  initialValues: Record<string, any>,
  validationSchema: Record<string, Yup.AnySchema>
) => {
  formFields.forEach((field) => {
    let fieldName = field.name;
    const value = fieldName === "blocked" || fieldName === "blacklist" ? "false" : ""
    initialValues[fieldName] = value;
    if (field?.required) {
      // Handle validation regex safely
      const regex = field?.regex
        ? new RegExp(field.regex)
        : null;

      let validation = Yup.string();

      if (regex) {
        validation = validation.matches(
          regex,
          field?.error_message || "Invalid input"
        );
      }

      validationSchema[fieldName] = validation.required(
        field?.placeholder || field?.field_error || "This field is required"
      );
    } else {
      validationSchema[fieldName] = Yup.string()
    }
  })
}


export const tailwindGrid = {
  12: "lg:grid-cols-1",
  6: "lg:grid-cols-2",
  4: "lg:grid-cols-3",
  3: "lg:grid-cols-4",
  2: "lg:grid-cols-6",
  1: "lg:grid-cols-12"
}

export const tailwindCols = {
  12: "lg:col-span-12",
  6: "lg:col-span-6",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};
