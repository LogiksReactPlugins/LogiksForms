import React, { useState, useEffect } from 'react';
import axios from 'axios';

import type { FieldRendererProps, FormField } from '../Form.types.js';


export default function FieldRenderer({ field, formik, methods = {} }: FieldRendererProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [options, setOptions] = useState<Record<string, string>>(field.options || {});
  const [search, setSearch] = useState("");
  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const detailsEl = e.currentTarget; // ✅ currentTarget is strongly typed
    if (!detailsEl.open) {
      setSearch("");
    }
  };

  const key = field.name;

  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (field?.options) {
        setOptions(field.options);
        return;
      }

      const source = field?.source ?? {};

      // Case 1: Method source
      if (source.type === "method") {
        const methodName = source.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await Promise.resolve(methodFn());

            if (isMounted) setOptions(result ?? {});
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setOptions({});
          }
        } else {
          if (isMounted) setOptions({});
        }
      }

      // Case 2: API source
      if (source.type === "api" && source.url) {
        try {
          const res = await axios({
            method: source.method || "GET",
            url: source.url,
            data: source.body ?? {},
            params: source.params ?? {},
            headers: source.headers ?? {},
          });

          const valueKey = field.valueKey || "value";
          const labelKey = field.labelKey || "label";

          const items = Array.isArray(res.data?.data) ? res.data.data : [];
          const mapped: Record<string, string> = {};

          items.forEach((item: Record<string, any>) => {
            mapped[item[valueKey]] = item[labelKey];
          });

          if (isMounted) setOptions(mapped);
        } catch (err) {
          console.error("API execution failed:", err);
          if (isMounted) setOptions({});
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [
    field.options,
    field?.source?.type || "",
    field?.source?.method || "",
    field?.source?.url || "",
    JSON.stringify(field?.source?.params ?? {}),
    JSON.stringify(field?.source?.body ?? {}),
    JSON.stringify(field?.source?.headers ?? {})
  ]);



  const baseInputClasses = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `;

  const focusClasses = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `;

  const labelClasses = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `;


  const renderIcon = (field: FormField) => {
    if (field.icon) return <i className={field.icon} />;

    return null;
  };



  switch (field.type) {
    case "textarea":
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">
            <textarea

              className={`${baseInputClasses} ${focusClasses} min-h-[120px] resize-none`}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-50">{String(formik.errors[key])}</span>
          }
        </div>
      );

    case "select":
    case "dataSelector": {
      const optionCount = Object.keys(options || {}).length;

      const filteredOptions =
        optionCount > 10
          ? Object.entries(options || {}).filter(([_, label]) =>
            label.toLowerCase().includes(search.toLowerCase())
          )
          : Object.entries(options || {});

      if (optionCount > 10) {

        return (
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <details className="relative w-full" onToggle={handleToggle}>
              <summary className="cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  {formik.values[key]
                    ? options[formik.values[key]] || "Select option"
                    : `Select ${field.label}`}
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              {/* Dropdown body */}
              <div className="absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2">
                {/* 🔍 Search input */}
                <div className="sticky top-0 bg-white p-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Filtered options */}
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(([val, label]) => (
                    <div
                      key={val}
                      onClick={() => formik.setFieldValue(key, val)}
                      className={`px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm ${formik.values[key] === val ? "bg-indigo-50 text-indigo-600 font-medium" : ""
                        }`}
                    >
                      {label}
                    </div>
                  ))
                ) : (
                  <div className="px-2 py-1 text-gray-400 text-sm">No results</div>
                )}
              </div>
            </details>

            {formik.touched[key] && formik.errors[key] && (
              <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
            )}
          </div>
        );
      }

      // Regular select for ≤10 options
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            <select
              className={`${baseInputClasses} ${focusClasses} appearance-none cursor-pointer pr-12`}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              disabled={field.disabled}
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              {Object.entries(options || {}).map(([val, label]) => (
                <option key={val} value={val} className="py-2">
                  {label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 transition-colors duration-300 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          )}
        </div>
      );
    }
    case "radioList":
    case "radio":
      const optionCount = Object.keys(options || {}).length;
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className={`flex ${optionCount > 3 ? "flex-col" : ""} gap-2 ml-1`}>
            {Object.entries(options || {}).map(([val, label]) => (
              <label
                key={val}
                htmlFor={`${key}-${val}`}
                className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  id={`${key}-${val}`}
                  type="radio"
                  name={key}
                  checked={formik.values[key] === val}
                  value={val}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={field.disabled}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                {label}
              </label>
            ))}
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
          )}
        </div>
      )

    case "checkbox": {
      const optionCount = Object.keys(options || {}).length;

      if (optionCount === 1) {
        // Single boolean checkbox
        const [val, label] = Object.entries(options || {})[0] || [key, field.label];
        return (<>
          <div className="flex  space-x-2">
            <input
              id={key}
              type="checkbox"
              name={key}
              checked={formik.values[key] || false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={field.disabled}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor={key} className="text-sm font-medium text-gray-700 cursor-pointer">
              {label}

            </label>

          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
          )}
        </>
        );
      }

      if (optionCount > 1 && optionCount <= 5) {
        //  Multiple checkboxes inline
        return (
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="flex flex-col gap-2 ml-1">
              {Object.entries(options || {}).map(([val, label]) => (
                <label
                  key={val}
                  className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={key}
                    value={val}
                    checked={Array.isArray(formik.values[key]) ? formik.values[key]?.includes(val) : false}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={field.disabled}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  {label}
                </label>
              ))}
            </div>
            {formik.touched[key] && formik.errors[key] && (
              <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
            )}
          </div>
        );
      }

      if (optionCount > 5) {


        const filteredOptions = Object.entries(options || {}).filter(
          ([, label]) =>
            label.toLowerCase().includes(search.toLowerCase())
        );



        return (
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <details className="relative w-full" onToggle={handleToggle}>
              <summary className="cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  {formik.values[key]?.length > 0
                    ? formik.values[key].join(", ")
                    : `Select ${field.label}`}
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              {/* Dropdown body */}
              <div className="absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2">
                {/* 🔍 Search input */}
                <div className="sticky top-0 bg-white p-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Filtered options */}
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(([val, label]) => (
                    <label
                      key={val}
                      htmlFor={`${key}-${val}`}
                      className="flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm"
                    >
                      <input
                        id={`${key}-${val}`}
                        type="checkbox"
                        name={key}
                        value={val}
                        checked={Array.isArray(formik.values[key]) ? formik.values[key]?.includes(val) : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={field.disabled}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      {label}
                    </label>
                  ))
                ) : (
                  <div className="px-2 py-1 text-gray-400 text-sm">No results</div>
                )}
              </div>
            </details>

            {formik.touched[key] && formik.errors[key] && (
              <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
            )}
          </div>
        );
      }

      return null;
    }

    case "tags": {
      const values: string[] = Array.isArray(formik.values[key]) ? formik.values[key] : [];

      const normalizedOptions = Array.isArray(options)
        ? options
        : Object.entries(options || {}).map(([value, label]) => ({ value, label }));
      const addTag = (val: string) => {
        if (val && !values.includes(val)) {
          formik.setFieldValue(key, [...values, val]);
        }
      };

      const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
          e.preventDefault();
          addTag(search);
          setSearch("");
        }
      };

      const removeTag = (val: string) => {
        formik.setFieldValue(
          key,
          values.filter((v) => v !== val)
        );
      };

      const getLabel = (val: string) =>
        (normalizedOptions.find((o: any) => o.value === val)?.label as string) || val;

      const TagIcon = () => (
        <svg className="w-4 h-4 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z"></path>
          <circle cx="7.5" cy="7.5" r="1.5" />
        </svg>
      );

      return (
        <div className="relative" >
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div
            className={`${baseInputClasses} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`}
            onClick={() => !field.disabled && document.getElementById(`${key}-input`)?.focus()}
          >
            {/* Selected tags */}
            {values.map((val) => (
              <span
                key={val}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100"
              >
                {/* tag icon */}
                <span className="flex items-center justify-center">
                  <TagIcon />
                </span>

                {/* label */}
                <span className="text-indigo-700">{getLabel(val)}</span>

                {/* remove button */}
                <button
                  type="button"
                  aria-label={`Remove ${getLabel(val)}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!field.disabled) removeTag(val);
                  }}
                  onMouseDown={(e) => e.preventDefault()} // avoid stealing focus on click
                  className="ml-1 text-indigo-500 hover:text-red-500 focus:outline-none"
                >
                  ×
                </button>
              </span>
            ))}

            {/* Input for adding new tags */}
            <input
              id={`${key}-input`}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleInputKeyDown}

              placeholder={values.length === 0 ? field.placeholder || "Type and press Enter" : ""}
              className="flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1"
              disabled={field.disabled}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          )}
        </div>
      );
    }

    case "file":

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">

            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              //value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
              disabled={field.disabled}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );

    default:

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">

            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
              disabled={field.disabled}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );
  }
}

