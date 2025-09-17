import L, { useState as D } from "react";
import Z from "axios";
import * as R from "yup";
import { useFormik as B } from "formik";
var z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function de() {
  if (se) return I;
  se = 1;
  var a = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function p(o, c, n) {
    var b = null;
    if (n !== void 0 && (b = "" + n), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      n = {};
      for (var i in c)
        i !== "key" && (n[i] = c[i]);
    } else n = c;
    return c = n.ref, {
      $$typeof: a,
      type: o,
      key: b,
      ref: c !== void 0 ? c : null,
      props: n
    };
  }
  return I.Fragment = t, I.jsx = p, I.jsxs = p, I;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function ue() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function a(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === oe ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case C:
          return "Fragment";
        case g:
          return "Profiler";
        case u:
          return "StrictMode";
        case _:
          return "Suspense";
        case A:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case N:
            return "Portal";
          case v:
            return (s.displayName || "Context") + ".Provider";
          case f:
            return (s._context.displayName || "Context") + ".Consumer";
          case E:
            var m = s.render;
            return s = s.displayName, s || (s = m.displayName || m.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case P:
            return m = s.displayName || null, m !== null ? m : a(s.type) || "Memo";
          case j:
            m = s._payload, s = s._init;
            try {
              return a(s(m));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function p(s) {
      try {
        t(s);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var w = m.error, S = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(s);
      }
    }
    function o(s) {
      if (s === C) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === j)
        return "<...>";
      try {
        var m = a(s);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var s = G.A;
      return s === null ? null : s.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function b(s) {
      if (J.call(s, "key")) {
        var m = Object.getOwnPropertyDescriptor(s, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function i(s, m) {
      function w() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: w,
        configurable: !0
      });
    }
    function l() {
      var s = a(this.type);
      return ee[s] || (ee[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function y(s, m, w, S, k, $, H, K) {
      return w = $.ref, s = {
        $$typeof: x,
        type: s,
        key: m,
        props: $,
        _owner: k
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, m, w, S, k, $, H, K) {
      var O = m.children;
      if (O !== void 0)
        if (S)
          if (ie(O)) {
            for (S = 0; S < O.length; S++)
              r(O[S]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else r(O);
      if (J.call(m, "key")) {
        O = a(s);
        var M = Object.keys(m).filter(function(ce) {
          return ce !== "key";
        });
        S = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", ae[O + S] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          O,
          M,
          O
        ), ae[O + S] = !0);
      }
      if (O = null, w !== void 0 && (p(w), O = "" + w), b(m) && (p(m.key), O = "" + m.key), "key" in m) {
        w = {};
        for (var X in m)
          X !== "key" && (w[X] = m[X]);
      } else w = m;
      return O && i(
        w,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), y(
        s,
        O,
        $,
        k,
        c(),
        w,
        H,
        K
      );
    }
    function r(s) {
      typeof s == "object" && s !== null && s.$$typeof === x && s._store && (s._store.validated = 1);
    }
    var h = L, x = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), G = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, ie = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var Q, ee = {}, re = h["react-stack-bottom-frame"].bind(
      h,
      n
    )(), te = U(o(n)), ae = {};
    F.Fragment = C, F.jsx = function(s, m, w, S, k) {
      var $ = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        s,
        m,
        w,
        !1,
        S,
        k,
        $ ? Error("react-stack-top-frame") : re,
        $ ? U(o(s)) : te
      );
    }, F.jsxs = function(s, m, w, S, k) {
      var $ = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        s,
        m,
        w,
        !0,
        S,
        k,
        $ ? Error("react-stack-top-frame") : re,
        $ ? U(o(s)) : te
      );
    };
  }()), F;
}
var le;
function me() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? z.exports = de() : z.exports = ue()), z.exports;
}
var e = me();
function he(a) {
  return a.template === "accordion" ? "accordion" : a.template === "simple" ? "simple" : a.template === "cards" ? "cards" : Object.values(a.fields || {}).some((o) => o.group) ? "tab" : "simple";
}
function xe(a) {
  const t = {}, p = "General";
  return Object.entries(a).forEach(([o, c]) => {
    const n = c.group || p;
    t[n] || (t[n] = []), t[n].push({ name: o, ...c });
  }), t;
}
const q = (a, t, p) => {
  a.forEach((o) => {
    const c = o?.name;
    if (!c) return;
    o?.type === "checkbox" ? t[c] = o?.multiple === !0 ? [] : !1 : o?.type === "tags" ? t[c] = [] : c === "blocked" || c === "blacklist" ? t[c] = "false" : t[c] = "";
    let n;
    o?.type === "checkbox" ? n = o?.multiple === !0 ? R.array().of(R.string()) : R.boolean() : o?.type === "tags" ? n = R.array().of(R.string()) : o?.type === "email" ? n = R.string().email("Invalid email format") : o?.type === "number" ? n = R.number().typeError("Must be a number") : o?.type === "date" ? n = R.date().typeError("Invalid date format") : n = R.string(), o?.required && (n = n.required(
      o?.placeholder || o?.error_message || `${o?.label || c} is required`
    )), o?.validate?.regex && (n = n.matches(
      new RegExp(o?.validate?.regex),
      o?.error_message || "Invalid input format"
    )), o?.validate && Object.entries(o.validate).forEach(([b, i]) => {
      switch (b) {
        case "email":
          i && (n = n.email("Invalid email format"));
          break;
        case "mobile":
          n = n.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          n = n.matches(
            new RegExp(i),
            `Must match pattern: ${i}`
          );
          break;
        case "date":
          n = R.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((l, y) => {
            if (typeof y == "string") {
              const d = y.replace(/-/g, "/"), [r, h, x] = d.split("/");
              if (r && h && x)
                return /* @__PURE__ */ new Date(`${x}-${h}-${r}`);
            }
            return l;
          });
          break;
        case "time":
          n = n.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          n = n.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          n = R.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          n = R.number().typeError("Must be a decimal").transform((l, y) => {
            if (y == null || y === "") return;
            const d = Number(y);
            if (isNaN(d)) return l;
            if (typeof l == "number" && !isNaN(l)) {
              const r = Number(l);
              return Number.isInteger(r) ? Number(d.toFixed(r)) : d;
            }
            return d;
          });
          break;
        case "alphanumeric":
          n = n.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          n = n.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          n = n.transform(
            (l) => l && l.toUpperCase()
          );
          break;
        case "lower":
          n = n.transform(
            (l) => l && l.toLowerCase()
          );
          break;
        case "length-min": {
          const l = Number(i);
          isNaN(l) || (n = n.min(l, `Minimum length is ${l}`));
          break;
        }
        case "length-max": {
          const l = Number(i);
          isNaN(l) || (n = n.max(l, `Maximum length is ${l}`));
          break;
        }
      }
    }), p[c] = n;
  });
}, Y = {
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
function W(a) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(a) ? a : 6;
}
function V({ field: a, formik: t, methods: p = {}, components: o }) {
  const [c, n] = D(!1), [b, i] = D(a.options || {}), [l, y] = D(""), d = (u) => {
    u.currentTarget.open || y("");
  }, r = a.name;
  L.useEffect(() => {
    let u = !0;
    return (async () => {
      if (a?.options) {
        i(a.options);
        return;
      }
      const f = a?.source ?? {};
      if (f.type === "method") {
        const v = f.method, E = v ? p[v] : void 0;
        if (E)
          try {
            const _ = await Promise.resolve(E());
            u && i(_ ?? {});
          } catch (_) {
            console.error("Method execution failed:", _), u && i({});
          }
        else
          u && i({});
      }
      if (f.type === "api" && f.url)
        try {
          const v = await Z({
            method: f.method || "GET",
            url: f.url,
            data: f.body ?? {},
            params: f.params ?? {},
            headers: f.headers ?? {}
          }), E = a.valueKey || "value", _ = a.labelKey || "label", A = Array.isArray(v.data?.data) ? v.data.data : [], P = {};
          A.forEach((j) => {
            P[j[E]] = j[_];
          }), u && i(P);
        } catch (v) {
          console.error("API execution failed:", v), u && i({});
        }
    })(), () => {
      u = !1;
    };
  }, [
    a.options,
    a?.source?.type || "",
    a?.source?.method || "",
    a?.source?.url || "",
    JSON.stringify(a?.source?.params ?? {}),
    JSON.stringify(a?.source?.body ?? {}),
    JSON.stringify(a?.source?.headers ?? {})
  ]);
  const h = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, x = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, C = (u) => u.icon ? /* @__PURE__ */ e.jsx("i", { className: u.icon }) : null;
  switch (a.type) {
    case "textarea":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${h} ${x} min-h-[120px] resize-none`,
              onFocus: () => n(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: a.placeholder,
              disabled: a.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-50", children: String(t.errors[r]) })
      ] });
    case "select":
    case "dataSelector": {
      const g = Object.keys(b || {}).length, f = g > 10 ? Object.entries(b || {}).filter(
        ([v, E]) => E.toLowerCase().includes(l.toLowerCase())
      ) : Object.entries(b || {});
      return g > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: d, children: [
          /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[r] ? b[t.values[r]] || "Select option" : `Select ${a.label}` }),
            /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "w-4 h-4 text-gray-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
            /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: l,
                onChange: (v) => y(v.target.value),
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
              }
            ) }),
            f.length > 0 ? f.map(([v, E]) => /* @__PURE__ */ e.jsx(
              "div",
              {
                onClick: () => t.setFieldValue(r, v),
                className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm ${t.values[r] === v ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`,
                children: E
              },
              v
            )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${h} ${x} appearance-none cursor-pointer pr-12`,
              onFocus: () => n(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: a.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: a.placeholder }),
                Object.entries(b || {}).map(([v, E]) => /* @__PURE__ */ e.jsx("option", { value: v, className: "py-2", children: E }, v))
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ e.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
    }
    case "radioList":
    case "radio":
      const u = Object.keys(b || {}).length;
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${u > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(b || {}).map(([g, f]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${r}-${g}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${r}-${g}`,
                  type: "radio",
                  name: r,
                  checked: t.values[r] === g,
                  value: g,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: a.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              f
            ]
          },
          g
        )) }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
      ] });
    case "component":
      return o?.[r];
    case "checkbox": {
      const g = Object.keys(b || {}).length;
      if (g === 1) {
        const [f, v] = Object.entries(b || {})[0] || [r, a.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: r,
                type: "checkbox",
                name: r,
                checked: t.values[r] || !1,
                onChange: t.handleChange,
                onBlur: t.handleBlur,
                disabled: a.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: r, className: "text-sm font-medium text-gray-700 cursor-pointer", children: v })
          ] }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      }
      if (g > 1 && g <= 5)
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            a.label,
            a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(b || {}).map(([f, v]) => /* @__PURE__ */ e.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: r,
                    value: f,
                    checked: Array.isArray(t.values[r]) ? t.values[r]?.includes(f) : !1,
                    onChange: t.handleChange,
                    onBlur: t.handleBlur,
                    disabled: a.disabled,
                    className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  }
                ),
                v
              ]
            },
            f
          )) }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      if (g > 5) {
        const f = Object.entries(b || {}).filter(
          ([, v]) => v.toLowerCase().includes(l.toLowerCase())
        );
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            a.label,
            a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: d, children: [
            /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[r]?.length > 0 ? t.values[r].join(", ") : `Select ${a.label}` }),
              /* @__PURE__ */ e.jsx(
                "svg",
                {
                  className: "w-4 h-4 text-gray-500",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ e.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7"
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: (v) => y(v.target.value),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                }
              ) }),
              f.length > 0 ? f.map(([v, E]) => /* @__PURE__ */ e.jsxs(
                "label",
                {
                  htmlFor: `${r}-${v}`,
                  className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        id: `${r}-${v}`,
                        type: "checkbox",
                        name: r,
                        value: v,
                        checked: Array.isArray(t.values[r]) ? t.values[r]?.includes(v) : !1,
                        onChange: t.handleChange,
                        onBlur: t.handleBlur,
                        disabled: a.disabled,
                        className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }
                    ),
                    E
                  ]
                },
                v
              )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ] })
          ] }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      }
      return null;
    }
    case "tags": {
      const g = Array.isArray(t.values[r]) ? t.values[r] : [], f = Array.isArray(b) ? b : Object.entries(b || {}).map(([j, T]) => ({ value: j, label: T })), v = (j) => {
        j && !g.includes(j) && t.setFieldValue(r, [...g, j]);
      }, E = (j) => {
        (j.key === "Enter" || j.key === ",") && (j.preventDefault(), v(l), y(""));
      }, _ = (j) => {
        t.setFieldValue(
          r,
          g.filter((T) => T !== j)
        );
      }, A = (j) => f.find((T) => T.value === j)?.label || j, P = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${h} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !a.disabled && document.getElementById(`${r}-input`)?.focus(),
            children: [
              g.map((j) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(P, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: A(j) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${A(j)}`,
                        onClick: (T) => {
                          T.stopPropagation(), a.disabled || _(j);
                        },
                        onMouseDown: (T) => T.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                j
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${r}-input`,
                  type: "text",
                  value: l,
                  onChange: (j) => y(j.target.value),
                  onKeyDown: E,
                  placeholder: g.length === 0 ? a.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: a.disabled
                }
              )
            ]
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          a.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(a) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: a.type || "text",
              className: `${h} ${x} ${a.icon ? "pl-9" : ""} `,
              onFocus: () => n(!0),
              name: r,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: a.placeholder,
              disabled: a.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          a.label,
          a.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          a.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(a) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: a.type || "text",
              className: `${h} ${x} ${a.icon ? "pl-9" : ""} `,
              onFocus: () => n(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: a.placeholder,
              disabled: a.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
  }
}
function pe({ title: a, children: t, isFirst: p }) {
  const [o, c] = D(p);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => c(!o),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${o ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: a })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${o ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${o ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden ${o ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: t }) })
      }
    )
  ] }) });
}
function be({
  title: a,
  groupedFields: t,
  data: p,
  onSubmit: o = (i) => {
  },
  onCancel: c = () => {
  },
  methods: n = {},
  components: b = {}
}) {
  const i = {}, l = {};
  Object.entries(t).forEach(([d, r]) => {
    q(r, i, l);
  }), p && Object.keys(p).length > 0 && Object.keys(p).forEach((d) => {
    d in i && (i[d] = p[d]);
  });
  const y = B({
    initialValues: i,
    enableReinitialize: !0,
    validationSchema: R.object().shape(l),
    onSubmit: (d) => {
      o(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: y.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, r], h) => /* @__PURE__ */ e.jsx(pe, { title: d, isFirst: h === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: r.map((x) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Y[W(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(V, { components: b, field: x, formik: y, methods: n }, x.name)
      },
      x?.name ?? `field-${h}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: c, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ge({
  title: a,
  groupedFields: t,
  data: p,
  onSubmit: o = (i) => {
  },
  onCancel: c = () => {
  },
  methods: n = {},
  components: b = {}
}) {
  const i = Object.keys(t), [l, y] = L.useState(0), d = {}, r = {};
  Object.entries(t).forEach(([u, g]) => {
    const f = {};
    q(g, r, f), d[u] = f;
  }), p && Object.keys(p).length > 0 && Object.keys(p).forEach((u) => {
    u in r && (r[u] = p[u]);
  });
  const h = i[l] ?? null, x = h && d[h] ? d[h] : {}, N = B({
    initialValues: r,
    enableReinitialize: !0,
    validationSchema: R.object().shape(x),
    onSubmit: (u) => {
      l < i.length - 1 && y((g) => g + 1), l === i.length - 1 && o(u);
    }
  });
  console.log("formik", N.values);
  const C = () => {
    y((u) => u > 0 ? u - 1 : u);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: i.map((u, g) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => y(g),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${l === g ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: u })
      },
      u
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: N.handleSubmit, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h && t[h]?.map((u, g) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12 md:col-span-6 ${Y[W(Number(u.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(V, { field: u, formik: N, methods: n, components: b }, u.name)
              },
              u?.name ?? `field-${g}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${l > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              l > 0 && /* @__PURE__ */ e.jsx("button", { onClick: C, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: c, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                l + 1,
                " of ",
                i.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: i.map((u, g) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${g === l ? "bg-action w-6" : "bg-gray-300"}`
              },
              g
            )) })
          ] }) })
        ]
      },
      i[l]
    )
  ] });
}
function ve({
  title: a,
  groupedFields: t,
  data: p,
  onSubmit: o = (i) => {
  },
  onCancel: c = () => {
  },
  methods: n = {},
  components: b = {}
}) {
  const i = Object.values(t).flat(), l = {}, y = {};
  Object.entries(t).forEach(([r, h]) => {
    q(h, l, y);
  }), p && Object.keys(p).length > 0 && Object.keys(p).forEach((r) => {
    r in l && (l[r] = p[r]);
  });
  const d = B({
    initialValues: l,
    enableReinitialize: !0,
    validationSchema: R.object().shape(y),
    onSubmit: (r) => {
      o(r);
    }
  });
  return console.log("formik", d.values), /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold pl-4 pt-4 mb-4", children: a }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: d.handleSubmit, className: "p-4  mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: i.map((r, h) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${Y[W(Number(r.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ e.jsx(V, { components: b, field: r, formik: d, methods: n }, r.name)
        },
        r?.name ?? `field-${h}`
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
          /* @__PURE__ */ e.jsx("button", { type: "button", onClick: c, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
          /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
        ] })
      ] })
    ] })
  ] }) });
}
function ye({ title: a, children: t }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: a })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: t }) })
      }
    )
  ] }) });
}
function fe({
  title: a,
  groupedFields: t,
  data: p,
  onSubmit: o = (i) => {
    console.log(i);
  },
  onCancel: c = () => {
  },
  methods: n = {},
  components: b = {}
}) {
  const i = {}, l = {};
  Object.entries(t).forEach(([d, r]) => {
    q(r, i, l);
  }), p && Object.keys(p).length > 0 && Object.keys(p).forEach((d) => {
    d in i && (i[d] = p[d]);
  });
  const y = B({
    initialValues: i,
    enableReinitialize: !0,
    validationSchema: R.object().shape(l),
    onSubmit: (d) => {
      o(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: y.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, r], h) => /* @__PURE__ */ e.jsx(ye, { title: d, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: r.map((x) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Y[W(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(V, { components: b, field: x, formik: y, methods: n }, x.name)
      },
      x?.name ?? `field-${h}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: c, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ee({
  formJson: a = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: p = null,
  onCancel: o = () => {
  },
  components: c = {}
}) {
  const n = he(a), b = xe(a?.fields ?? {}), [i, l] = L.useState({});
  L.useEffect(() => {
    let r = !0;
    return (async () => {
      const x = a?.source ?? {};
      if (!x?.type) {
        r && l({});
        return;
      }
      if (x.type === "method") {
        const N = x.method, C = N ? t[N] : void 0;
        if (C)
          try {
            const u = await Promise.resolve(C());
            r && l(u ?? {});
          } catch (u) {
            console.error("Method execution failed:", u), r && l({});
          }
        else
          r && l({});
      }
      if (x.type === "api")
        try {
          const N = await Z({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          });
          r && l(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), r && l({});
        }
    })(), () => {
      r = !1;
    };
  }, [
    p,
    a?.source?.type || "",
    a?.source?.method || "",
    a?.source?.url || "",
    JSON.stringify(a?.source?.params ?? {}),
    JSON.stringify(a?.source?.body ?? {}),
    JSON.stringify(a?.source?.headers ?? {})
  ]);
  const y = async (r) => {
    const h = a?.source ?? {};
    if (h.type === "method") {
      const x = h.method, N = x ? t[x] : void 0;
      if (N)
        try {
          await Promise.resolve(N(r));
        } catch (C) {
          console.error("Method execution failed:", C);
        }
    }
    if (h.type === "api")
      try {
        await Z({
          method: h.method || "POST",
          url: h.url,
          data: r ?? {},
          params: h.params ?? {},
          headers: h.headers ?? {}
        });
      } catch (x) {
        console.error("API fetch failed:", x);
      }
  }, d = {
    accordion: /* @__PURE__ */ e.jsx(
      be,
      {
        title: a?.title ?? "",
        groupedFields: b,
        data: i,
        onSubmit: y,
        onCancel: o,
        methods: t,
        components: c
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      fe,
      {
        title: a?.title ?? "",
        groupedFields: b,
        data: i,
        onSubmit: y,
        onCancel: o,
        methods: t,
        components: c
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      ge,
      {
        title: a?.title ?? "",
        groupedFields: b,
        data: i,
        onSubmit: y,
        onCancel: o,
        methods: t,
        components: c
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      ve,
      {
        title: a?.title ?? "",
        groupedFields: b,
        data: i,
        onSubmit: y,
        onCancel: o,
        methods: t,
        components: c
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: d[n] ?? d.simple });
}
export {
  Ee as LogiksForm,
  Ee as default
};
