import React, { useState } from 'react';
import type { FieldRendererProps } from '../Form.types.js';


export default function FieldRenderer({ field, formik }: FieldRendererProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const key = field.name;


  const baseInputClasses = `
    w-full px-4 py-2 rounded-xl border border-gray-400 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `;

  const focusClasses = `
    border-gradient-to-r focus:from-purple-300 focus:to-indigo-300
    focus:border-purple-300 focus:shadow-lg focus:shadow-purple-100/50
  `;

  const labelClasses = `
    block text-sm font-semibold mb-2 transition-all duration-300
    ${isFocused || value ? 'text-purple-600' : 'text-gray-700'}
  `;

  switch (field.type) {
    case "textarea":
      return (
        <div className="relative">
          <label className={labelClasses}>{field.label}</label>
          <div className="relative">
            <textarea

              className={`${baseInputClasses} ${focusClasses} min-h-[120px] resize-none`}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={`Enter ${field.label ?? field.name.toLowerCase()}...`}
              disabled={field.disabled}
            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="error-message">{String(formik.errors[key])}</span>
          }
        </div>
      );

    case "select":
    case "dataSelector":
      return (
        <div className="relative">
          <label className={labelClasses}>{field.label}</label>
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
              <option value="" disabled >Select {field.label ?? field.name.toLowerCase()}...</option>
              {Object.entries(field.options || {}).map(([val, label]) => (
                <option key={val} value={val} className="py-2">
                  {label}
                </option>
              ))}
            </select>
            {formik.touched[key] && formik.errors[key] &&

              <span className="error-message">{String(formik.errors[key])}</span>
            }
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-purple-500' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative">
          <label className={labelClasses}>{field.label}</label>
          <div className="relative">
            <input
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses}`}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={`Enter ${field.label ?? field.name.toLowerCase()}...`}
              disabled={field.disabled}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="error-message">{String(formik.errors[key])}</span>
          }
        </div>
      );
  }
}

