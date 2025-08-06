import * as Yup from "yup";
export function determineViewMode(json) {
  if (json.template === 'accordion') return 'accordion';

  const fields = Object.values(json.fields || {});
  const hasGroup = fields.some((field) => field.group);

  return hasGroup ? 'tab' : 'normal';
}

export function groupFields(fields) {
  const grouped = {};
  const defaultGroup = 'General';
  Object.entries(fields).forEach(([key, config]) => {
    const group = config.group || defaultGroup;
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push({ name: key, ...config });
  });

  return grouped;
}

export const intializeForm = (formFields, initialValues, validationSchema) => {
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

