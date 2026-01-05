import * as Yup from "yup";
import type { FormJson, FormField, SelectOptions, GroupedOptions, FlatOptions } from "./Form.types.js";
export function determineViewMode(json: FormJson) {
  if (json.template === 'accordion') return 'accordion';
  if (json.template === 'simple') return 'simple';
  if (json.template === 'cards') return 'cards';

  const fields = Object.values(json.fields || {});
  const hasGroup = fields.some((field) => field.group);

  return hasGroup ? 'tab' : 'simple';
}

export function groupFields(fields: Record<string, Omit<FormField, "name">>) {
  const grouped: Record<string, FormField[]> = {};

  const defaultGroup = 'General';
  Object.entries(fields).forEach(([key, field]) => {

    const group = field.group || defaultGroup;
    if (!grouped[group]) grouped[group] = [];
    let obj = { ...field, name: key }

    grouped[group].push(obj);
  });


  return grouped;
}

export function transformedObject(originalObject: Record<string, any>) {

  const fields: Record<string, { label: string; required: boolean }> = {}

  Object.keys(originalObject).forEach((key) => {
    fields[key] = {
      label: key,
      required: originalObject[key].required ?? false
    }
  })
  return fields
}

export const intializeForm = (
  formFields: FormField[],
  initialValues: Record<string, any>,
  validationSchema: Record<string, Yup.AnySchema>
) => {
  formFields.forEach((field) => {

    const fieldName = field?.name;
    if (!fieldName) return;

    // ---------- Initial Values (only defaults) ----------
    if (field?.default !== undefined && field?.default !== null) {
      initialValues[fieldName] = field.default;
    }
    else if (field?.type === "checkbox") {
      initialValues[fieldName] = field?.multiple === true ? [] : false;
    } else if (field?.type === "tags") {
      initialValues[fieldName] = [];
    } else if (fieldName === "blocked" || fieldName === "blacklist") {
      initialValues[fieldName] = "false"; // special-case string boolean
    } else {
      initialValues[fieldName] = field?.default ?? "";
    }

    // ---------- Base Validator ----------
    let validator: Yup.AnySchema;
    if (field?.type === "checkbox") {
      validator = field?.multiple === true ? Yup.array().of(Yup.string()) : Yup.boolean();
    } else if (field?.type === "tags") {
      validator = Yup.array().of(Yup.string());
    } else if (field?.type === "email") {
      validator = Yup.string().email("Invalid email format");
    } else if (field?.type === "number") {
      validator = Yup.number().typeError("Must be a number");
    } else if (field?.type === "date") {
      validator = Yup.date().typeError("Invalid date format");
    } else if (field?.type === "json") {

      validator = Yup.string()
        .test("is-json", "Invalid JSON format", (value) => {
          if (!value) return true;
          try {
            JSON.parse(value);
            return true;
          } catch {
            return false;
          }
        });
    }
    else {
      validator = Yup.string();
    }

    // ---------- Required ----------
    if (field?.required) {
      validator = validator.required(
        field?.placeholder || field?.error_message || `${field?.label || fieldName} is required`
      );
    }

    // ---------- Direct Regex ----------
    if (field?.validate?.regex && typeof field.validate.regex === "string") {
      validator = (validator as Yup.StringSchema).matches(
        new RegExp(field?.validate?.regex),
        field?.error_message || "Invalid input format"
      );
    }


    if (field?.validate) {
      Object.entries(field.validate).forEach(([rule, val]) => {
        switch (rule) {
          case "email":
            if (val) validator = (validator as Yup.StringSchema).email("Invalid email format");
            break;

          case "mobile":
            validator = (validator as Yup.StringSchema).matches(
              /^[1-9][0-9]*$/,
              "Invalid mobile number format"
            );
            break;

          case "regex":
            validator = (validator as Yup.StringSchema).matches(
              new RegExp(val as string),
              `Must match pattern: ${val}`
            );
            break;

          case "date":
            validator = Yup.date()
              .typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)")
              .transform((value, originalValue) => {
                if (typeof originalValue === "string") {
                  const normalized = originalValue.replace(/-/g, "/");
                  const [d, m, y] = normalized.split("/");
                  if (d && m && y) {
                    return new Date(`${y}-${m}-${d}`);
                  }
                }
                return value;
              });
            break;

          case "time":
            validator = (validator as Yup.StringSchema).matches(
              /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
              "Invalid time format (HH:MM)"
            );
            break;

          case "timesec":
            validator = (validator as Yup.StringSchema).matches(
              /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
              "Invalid time format (HH:MM:SS)"
            );
            break;

          case "number":
          case "numeric":
            validator = Yup.number().typeError("Must be numeric");
            break;

          case "float":
          case "decimal":
            validator = Yup.number()
              .typeError("Must be a decimal")
              .transform((val, original) => {
                if (original === undefined || original === null || original === "") return undefined;
                const num = Number(original);
                if (isNaN(num)) return val;
                if (typeof val === "number" && !isNaN(val)) {
                  // format to given decimal places if val is numeric
                  const decimals = Number(val);
                  return Number.isInteger(decimals) ? Number(num.toFixed(decimals)) : num;
                }
                return num;
              });
            break;

          case "alphanumeric":
            validator = (validator as Yup.StringSchema).matches(
              /^[a-z0-9]+$/i,
              "Must be alphanumeric"
            );
            break;

          case "alpha":
            validator = (validator as Yup.StringSchema).matches(
              /^[a-zA-Z]+$/,
              "Must contain only letters"
            );
            break;

          case "upper":
            validator = (validator as Yup.StringSchema).transform((val) =>
              val ? val.toUpperCase() : val
            );
            break;

          case "lower":
            validator = (validator as Yup.StringSchema).transform((val) =>
              val ? val.toLowerCase() : val
            );
            break;

          case "length-min": {
            const min = Number(val);
            if (!isNaN(min)) {
              validator = (validator as Yup.StringSchema).min(min, `Minimum length is ${min}`);
            }
            break;
          }

          case "length-max": {
            const max = Number(val);
            if (!isNaN(max)) {
              validator = (validator as Yup.StringSchema).max(max, `Maximum length is ${max}`);
            }
            break;
          }

          default:
            break;
        }
      });
    }

    // ---------- Assign schema ----------
    validationSchema[fieldName] = validator;
  });
};


type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;


export const tailwindGrid: Record<ColWidth, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
};


export const tailwindCols: Record<ColWidth, string> = {
  12: "lg:col-span-12",
  11: "lg:col-span-11",
  10: "lg:col-span-10",
  9: "lg:col-span-9",
  8: "lg:col-span-8",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};

export function toColWidth(width: number | undefined): ColWidth {
  const allowed: ColWidth[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return allowed.includes(width as ColWidth) ? (width as ColWidth) : 6;
}

export function toGrid(width: number | undefined): ColWidth {
  const allowed: ColWidth[] = [1, 2, 3, 4, 6, 12];
  return allowed.includes(width as ColWidth) ? (width as ColWidth) : 6;
}

export const isHidden = (hidden?: boolean | string): boolean =>
  hidden === true || hidden === "true";

export const replacePlaceholders = (
  input: any,
  vars: Record<string, string | number>
): any => {


  if (typeof input === "string") {
    return input.replace(/#(\w+)#/g, (_, k) =>
      vars[k] !== undefined ? String(vars[k]) : _
    );
  }

  if (Array.isArray(input)) {
    return input.map(v => replacePlaceholders(v, vars));
  }

  if (input && typeof input === "object") {
    return Object.fromEntries(
      Object.entries(input).map(([k, v]) => [
        replacePlaceholders(k, vars),
        replacePlaceholders(v, vars),
      ])
    );
  }

  return input;
};



export const formatOptions = (
  valueKey: string,
  labelKey: string,
  res: any,
  groupKey?: string
): SelectOptions => {
  const items = Array.isArray(res?.data?.data)
    ? res.data.data
    : Array.isArray(res?.data)
      ? res.data
      : res;

  if (!Array.isArray(items) || items.length === 0) {
    return {};
  }

  // auto-detect group key
  const resolvedGroupKey =
    groupKey ??
    (items[0] && typeof items[0] === "object" && "category" in items[0]
      ? "category"
      : undefined);

  // ---- flat options ----
  if (!resolvedGroupKey) {
    const mapped: FlatOptions = {};
    items.forEach((item: any) => {
      if (item[valueKey] != null && item[labelKey] != null) {
        mapped[item[valueKey]] = item[labelKey];
      }
    });
    return mapped;
  }

  // ---- grouped options ----
  const grouped: GroupedOptions = {};

  items.forEach((item: any) => {
    const group = item[resolvedGroupKey] ?? "Others";
    const value = item[valueKey];
    const label = item[labelKey];

    if (value == null || label == null) return;

    if (!grouped[group]) grouped[group] = {};
    grouped[group][value] = label;
  });

  return grouped;
};


export const getOptionLabel = (
  options: SelectOptions,
  value: string
): string | undefined => {
  if (!options || value == null) return;

  const first = Object.values(options)[0];

  // flat
  if (typeof first === "string") {
    return (options as FlatOptions)[value];
  }

  // grouped
  for (const group of Object.values(options as GroupedOptions)) {
    if (value in group) {
      return group[value];
    }
  }

  return;
};


type FlatEntry = [string, string];

export const flattenOptions = (options: SelectOptions): FlatEntry[] => {
  if (!options) return [];

  const first = Object.values(options)[0];

  // flat
  if (typeof first === "string") {
    return Object.entries(options as Record<string, string>);
  }

  // grouped
  return Object.values(options as GroupedOptions).flatMap(group =>
    Object.entries(group)
  );
};



export const isGroupedOptions = (options: SelectOptions): options is GroupedOptions => {
  if (!options || typeof options !== "object") return false;

  const first = Object.values(options)[0];
  return typeof first === "object" && first !== null;
};


export async function fetchGeolocation(): Promise<string | null> {
  if (!("geolocation" in navigator)) {
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  }

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 30000,
          maximumAge: 120000,
        });
      }
    );

    const { latitude, longitude } = position.coords;
    return `${latitude},${longitude}`;
  } catch (error) {
    if (!(error instanceof GeolocationPositionError)) {
      throw new Error("Failed to get your location.");
    }

    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error("Please allow location access in browser settings.");
      case error.POSITION_UNAVAILABLE:
        throw new Error(
          "Unable to detect your location. Try connecting to Wi-Fi."
        );
      case error.TIMEOUT:
        throw new Error("Your device took too long to fetch GPS position.");
      default:
        throw new Error("Failed to get your location.");
    }
  }
}

export const getGeoFieldKeys = (fields: Record<string, Omit<FormField, "name">>) => {
  return Object.entries(fields ?? {})
    .filter(([, field]: any) => field.type === "geolocation")
    .map(([key]) => key);
};




