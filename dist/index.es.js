import W, { useState as V, useRef as le, useEffect as oe } from "react";
import re from "axios";
import * as O from "yup";
import { useFormik as K } from "formik";
var U = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function me() {
  if (ie) return B;
  ie = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function b(i, d, n) {
    var v = null;
    if (n !== void 0 && (v = "" + n), d.key !== void 0 && (v = "" + d.key), "key" in d) {
      n = {};
      for (var u in d)
        u !== "key" && (n[u] = d[u]);
    } else n = d;
    return d = n.ref, {
      $$typeof: t,
      type: i,
      key: v,
      ref: d !== void 0 ? d : null,
      props: n
    };
  }
  return B.Fragment = r, B.jsx = b, B.jsxs = b, B;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function he() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === k ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case s:
          return "Fragment";
        case F:
          return "Profiler";
        case S:
          return "StrictMode";
        case A:
          return "Suspense";
        case z:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case E:
            return "Portal";
          case f:
            return (a.displayName || "Context") + ".Provider";
          case _:
            return (a._context.displayName || "Context") + ".Consumer";
          case N:
            var p = a.render;
            return a = a.displayName, a || (a = p.displayName || p.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case l:
            return p = a.displayName || null, p !== null ? p : t(a.type) || "Memo";
          case y:
            p = a._payload, a = a._init;
            try {
              return t(a(p));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function b(a) {
      try {
        r(a);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var w = p.error, $ = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), r(a);
      }
    }
    function i(a) {
      if (a === s) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === y)
        return "<...>";
      try {
        var p = t(a);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var a = I.A;
      return a === null ? null : a.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function v(a) {
      if (P.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, p) {
      function w() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: w,
        configurable: !0
      });
    }
    function o() {
      var a = t(this.type);
      return te[a] || (te[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function x(a, p, w, $, D, M, Z, Q) {
      return w = M.ref, a = {
        $$typeof: h,
        type: a,
        key: p,
        props: M,
        _owner: D
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: o
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, p, w, $, D, M, Z, Q) {
      var T = p.children;
      if (T !== void 0)
        if ($)
          if (q(T)) {
            for ($ = 0; $ < T.length; $++)
              c(T[$]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(T);
      if (P.call(p, "key")) {
        T = t(a);
        var L = Object.keys(p).filter(function(ue) {
          return ue !== "key";
        });
        $ = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ne[T + $] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          T,
          L,
          T
        ), ne[T + $] = !0);
      }
      if (T = null, w !== void 0 && (b(w), T = "" + w), v(p) && (b(p.key), T = "" + p.key), "key" in p) {
        w = {};
        for (var ee in p)
          ee !== "key" && (w[ee] = p[ee]);
      } else w = p;
      return T && u(
        w,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), x(
        a,
        T,
        M,
        D,
        d(),
        w,
        Z,
        Q
      );
    }
    function c(a) {
      typeof a == "object" && a !== null && a.$$typeof === h && a._store && (a._store.validated = 1);
    }
    var g = W, h = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), f = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), I = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, q = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var C, te = {}, ae = g["react-stack-bottom-frame"].bind(
      g,
      n
    )(), se = j(i(n)), ne = {};
    Y.Fragment = s, Y.jsx = function(a, p, w, $, D) {
      var M = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        a,
        p,
        w,
        !1,
        $,
        D,
        M ? Error("react-stack-top-frame") : ae,
        M ? j(i(a)) : se
      );
    }, Y.jsxs = function(a, p, w, $, D) {
      var M = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        a,
        p,
        w,
        !0,
        $,
        D,
        M ? Error("react-stack-top-frame") : ae,
        M ? j(i(a)) : se
      );
    };
  }()), Y;
}
var de;
function xe() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? U.exports = me() : U.exports = he()), U.exports;
}
var e = xe();
function pe(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function be(t) {
  const r = {}, b = "General";
  return Object.entries(t).forEach(([i, d]) => {
    const n = d.group || b;
    r[n] || (r[n] = []), r[n].push({ name: i, ...d });
  }), r;
}
const G = (t, r, b) => {
  t.forEach((i) => {
    const d = i?.name;
    if (!d) return;
    i?.type === "checkbox" ? r[d] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? r[d] = [] : d === "blocked" || d === "blacklist" ? r[d] = "false" : r[d] = "";
    let n;
    i?.type === "checkbox" ? n = i?.multiple === !0 ? O.array().of(O.string()) : O.boolean() : i?.type === "tags" ? n = O.array().of(O.string()) : i?.type === "email" ? n = O.string().email("Invalid email format") : i?.type === "number" ? n = O.number().typeError("Must be a number") : i?.type === "date" ? n = O.date().typeError("Invalid date format") : i?.type === "json" ? (r[d] = "", n = O.string().test("is-json", "Invalid JSON format", (v) => {
      if (!v) return !0;
      try {
        return JSON.parse(v), !0;
      } catch {
        return !1;
      }
    })) : n = O.string(), i?.required && (n = n.required(
      i?.placeholder || i?.error_message || `${i?.label || d} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (n = n.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([v, u]) => {
      switch (v) {
        case "email":
          u && (n = n.email("Invalid email format"));
          break;
        case "mobile":
          n = n.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          n = n.matches(
            new RegExp(u),
            `Must match pattern: ${u}`
          );
          break;
        case "date":
          n = O.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((o, x) => {
            if (typeof x == "string") {
              const m = x.replace(/-/g, "/"), [c, g, h] = m.split("/");
              if (c && g && h)
                return /* @__PURE__ */ new Date(`${h}-${g}-${c}`);
            }
            return o;
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
          n = O.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          n = O.number().typeError("Must be a decimal").transform((o, x) => {
            if (x == null || x === "") return;
            const m = Number(x);
            if (isNaN(m)) return o;
            if (typeof o == "number" && !isNaN(o)) {
              const c = Number(o);
              return Number.isInteger(c) ? Number(m.toFixed(c)) : m;
            }
            return m;
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
            (o) => o && o.toUpperCase()
          );
          break;
        case "lower":
          n = n.transform(
            (o) => o && o.toLowerCase()
          );
          break;
        case "length-min": {
          const o = Number(u);
          isNaN(o) || (n = n.min(o, `Minimum length is ${o}`));
          break;
        }
        case "length-max": {
          const o = Number(u);
          isNaN(o) || (n = n.max(o, `Maximum length is ${o}`));
          break;
        }
      }
    }), b[d] = n;
  });
}, H = {
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
function X(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
function J({ field: t, formik: r, methods: b = {}, components: i }) {
  const [d, n] = V(!1), [v, u] = V(t.options || {}), [o, x] = V(""), [m, c] = V(0), g = le(null), h = le(null), E = (l) => {
    l.currentTarget.open || x("");
  };
  oe(() => {
    const l = (y) => {
      h.current && !h.current.contains(y.target) && (h.current.open = !1, x(""));
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, []);
  const s = t.name;
  W.useEffect(() => {
    let l = !0;
    return (async () => {
      if (t?.options) {
        u(t.options);
        return;
      }
      const R = t?.source ?? {};
      if (R.type === "method") {
        const k = R.method, I = k ? b[k] : void 0;
        if (I)
          try {
            const P = await Promise.resolve(I());
            l && u(P ?? {});
          } catch (P) {
            console.error("Method execution failed:", P), l && u({});
          }
        else
          l && u({});
      }
      if (R.type === "api" && R.url)
        try {
          const k = await re({
            method: R.method || "GET",
            url: R.url,
            data: R.body ?? {},
            params: R.params ?? {},
            headers: R.headers ?? {}
          }), I = t.valueKey || "value", P = t.labelKey || "label", q = Array.isArray(k.data?.data) ? k.data.data : [], j = {};
          q.forEach((C) => {
            j[C[I]] = C[P];
          }), l && u(j);
        } catch (k) {
          console.error("API execution failed:", k), l && u({});
        }
    })(), () => {
      l = !1;
    };
  }, [
    t.options,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const S = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, F = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, _ = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, f = (l) => l.icon ? /* @__PURE__ */ e.jsx("i", { className: l.icon }) : null, N = Object.keys(v || {}).length, A = Object.entries(v || {}).filter(
    ([, l]) => l.toLowerCase().includes(o.toLowerCase())
  ), z = (l) => {
    if (h.current?.open)
      if (l.key === "ArrowDown")
        l.preventDefault(), c(
          (y) => y + 1 < A.length ? y + 1 : 0
        );
      else if (l.key === "ArrowUp")
        l.preventDefault(), c(
          (y) => y - 1 >= 0 ? y - 1 : A.length - 1
        );
      else if (l.key === "Enter") {
        l.preventDefault();
        const [y] = A[m] || [];
        y && (r.setFieldValue(t.name, y), h.current.open = !1);
      } else l.key === "Escape" && (h.current.open = !1, x(""));
  };
  switch (oe(() => {
    g.current?.querySelector(
      `[data-index="${m}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [m]), t.type) {
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${S} ${F} min-h-[120px] resize-none`,
              onFocus: () => n(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataMethod":
      return N > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: E,
            ref: h,
            onKeyDown: z,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? v[r.values[s]] || "Select option" : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (l) => {
                      x(l.target.value), c(0);
                    },
                    onKeyDown: z,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([l, y], R) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: () => r.setFieldValue(s, l),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === l ? "bg-indigo-50 text-indigo-600 font-medium" : m === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: y
                  },
                  l
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${S} ${F} appearance-none cursor-pointer pr-12`,
              onFocus: () => n(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder }),
                Object.entries(v || {}).map(([l, y]) => /* @__PURE__ */ e.jsx("option", { value: l, className: "py-2", children: y }, l))
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
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${N > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([l, y]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${s}-${l}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-${l}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === l,
                  value: l,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              y
            ]
          },
          l
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "component":
      return i?.[s];
    case "checkbox": {
      if (N === 1) {
        const [l, y] = Object.entries(v || {})[0] || [s, t.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: s,
                type: "checkbox",
                name: s,
                checked: r.values[s] || !1,
                onChange: r.handleChange,
                onBlur: r.handleBlur,
                disabled: t.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: y })
          ] }),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return N > 1 && N <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([l, y]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  name: s,
                  value: l,
                  checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(l) : !1,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              y
            ]
          },
          l
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : N > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: E,
            ref: h,
            onKeyDown: z,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s]?.length > 0 ? r.values[s].join(", ") : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (l) => {
                      x(l.target.value), c(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([l, y]) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${l}`,
                    className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm",
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${s}-${l}`,
                          type: "checkbox",
                          name: s,
                          value: l,
                          checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(l) : !1,
                          onChange: r.handleChange,
                          onBlur: r.handleBlur,
                          disabled: t.disabled,
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        }
                      ),
                      y
                    ]
                  },
                  l
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : null;
    }
    case "tags": {
      const l = Array.isArray(r.values[s]) ? r.values[s] : [], y = Array.isArray(v) ? v : Object.entries(v || {}).map(([j, C]) => ({ value: j, label: C })), R = (j) => {
        j && !l.includes(j) && r.setFieldValue(s, [...l, j]);
      }, k = (j) => {
        (j.key === "Enter" || j.key === ",") && (j.preventDefault(), R(o), x(""));
      }, I = (j) => {
        r.setFieldValue(
          s,
          l.filter((C) => C !== j)
        );
      }, P = (j) => y.find((C) => C.value === j)?.label || j, q = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${S} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              l.map((j) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(q, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: P(j) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${P(j)}`,
                        onClick: (C) => {
                          C.stopPropagation(), t.disabled || I(j);
                        },
                        onMouseDown: (C) => C.preventDefault(),
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
                  id: `${s}-input`,
                  type: "text",
                  value: o,
                  onChange: (j) => x(j.target.value),
                  onKeyDown: k,
                  placeholder: l.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: t.disabled
                }
              )
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: f(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${S} ${F} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => n(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      const l = (y) => {
        r.setFieldValue(s, y.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: r.values[s],
              onChange: l,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${S} ${F} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: _, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: f(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${S} ${F} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => n(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function ge({ title: t, children: r, isFirst: b }) {
  const [i, d] = V(b);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => d(!i),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${i ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${i ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${i ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function ve({
  title: t,
  groupedFields: r,
  data: b,
  onSubmit: i = (u) => {
  },
  onCancel: d = () => {
  },
  methods: n = {},
  components: v = {}
}) {
  const u = {}, o = {};
  Object.entries(r).forEach(([m, c]) => {
    G(c, u, o);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((m) => {
    m in u && (u[m] = b[m]);
  });
  const x = K({
    initialValues: u,
    enableReinitialize: !0,
    validationSchema: O.object().shape(o),
    onSubmit: (m) => {
      i(m);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([m, c], g) => /* @__PURE__ */ e.jsx(ge, { title: m, isFirst: g === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((h) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${H[X(Number(h.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(J, { components: v, field: h, formik: x, methods: n }, h.name)
      },
      h?.name ?? `field-${g}`
    )) }) }, m)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ye({
  title: t,
  groupedFields: r,
  data: b,
  onSubmit: i = (o) => {
  },
  onCancel: d = () => {
  },
  methods: n = {},
  components: v = {},
  widget: u
}) {
  const o = Object.keys(r), [x, m] = W.useState(0), c = {}, g = {}, h = {};
  u ? Object.entries(r).forEach(([f, N]) => {
    const A = {};
    G(N, g, A), c[f] = A;
  }) : Object.entries(r).forEach(([f, N]) => {
    G(N, g, h);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((f) => {
    f in g && (g[f] = b[f]);
  });
  const E = o[x] ?? null, s = E && c[E] ? c[E] : {}, S = K({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: O.object().shape(u ? s : h),
    onSubmit: (f) => {
      u ? (x < o.length - 1 && m((N) => N + 1), x === o.length - 1 && i(f)) : i(f);
    }
  }), F = async (f) => {
    if (f.preventDefault(), !u) {
      const N = await S.validateForm();
      if (Object.keys(N).length > 0) {
        alert("Please fill all required fields before submitting."), S.setTouched(
          Object.keys(N).reduce((A, z) => ({ ...A, [z]: !0 }), {})
        );
        return;
      }
    }
    S.handleSubmit(f);
  }, _ = () => {
    m((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: o.map((f, N) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => m(N),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${x === N ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: f })
      },
      f
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: E && r[E]?.map((f, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${H[X(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(J, { field: f, formik: S, methods: n, components: v }, f.name)
              },
              f?.name ?? `field-${N}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${x > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              x > 0 && /* @__PURE__ */ e.jsx("button", { onClick: _, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: d, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: u ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                x + 1,
                " of ",
                o.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: o.map((f, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${N === x ? "bg-action w-6" : "bg-gray-300"}`
              },
              N
            )) })
          ] }) })
        ]
      },
      o[x]
    )
  ] });
}
function fe({
  title: t,
  groupedFields: r,
  data: b,
  onSubmit: i = (u) => {
  },
  onCancel: d = () => {
  },
  methods: n = {},
  components: v = {}
}) {
  const u = Object.values(r).flat(), o = {}, x = {};
  Object.entries(r).forEach(([c, g]) => {
    G(g, o, x);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((c) => {
    c in o && (o[c] = b[c]);
  });
  const m = K({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: O.object().shape(x),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: m.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: u.map((c, g) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${H[X(Number(c.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(J, { components: v, field: c, formik: m, methods: n }, c.name)
      },
      c?.name ?? `field-${g}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function je({ title: t, children: r }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Ne({
  title: t,
  groupedFields: r,
  data: b,
  onSubmit: i = (u) => {
  },
  onCancel: d = () => {
  },
  methods: n = {},
  components: v = {}
}) {
  const u = {}, o = {};
  Object.entries(r).forEach(([m, c]) => {
    G(c, u, o);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((m) => {
    m in u && (u[m] = b[m]);
  });
  const x = K({
    initialValues: u,
    enableReinitialize: !0,
    validationSchema: O.object().shape(o),
    onSubmit: (m) => {
      i(m);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([m, c], g) => /* @__PURE__ */ e.jsx(je, { title: m, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((h) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${H[X(Number(h.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(J, { components: v, field: h, formik: x, methods: n }, h.name)
      },
      h?.name ?? `field-${g}`
    )) }) }, m)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Oe({
  formJson: t = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: b = null,
  onCancel: i = () => {
  },
  components: d = {}
}) {
  const n = pe(t), v = be(t?.fields ?? {}), [u, o] = W.useState({});
  W.useEffect(() => {
    let c = !0;
    return (async () => {
      const h = t?.source ?? {};
      if (!h?.type) {
        c && o({});
        return;
      }
      if (h.type === "method") {
        const E = h.method, s = E ? r[E] : void 0;
        if (s)
          try {
            const S = await Promise.resolve(s());
            c && o(S ?? {});
          } catch (S) {
            console.error("Method execution failed:", S), c && o({});
          }
        else
          c && o({});
      }
      if (h.type === "api")
        try {
          const E = await re({
            method: h.method || "GET",
            url: h.url,
            data: h.body ?? {},
            params: h.params ?? {},
            headers: h.headers ?? {}
          });
          c && o(E.data ?? {});
        } catch (E) {
          console.error("API fetch failed:", E), c && o({});
        }
    })(), () => {
      c = !1;
    };
  }, [
    b,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const x = async (c) => {
    const g = t?.source ?? {};
    if (g.type === "method") {
      const h = g.method, E = h ? r[h] : void 0;
      if (E)
        try {
          await Promise.resolve(E(c));
        } catch (s) {
          console.error("Method execution failed:", s);
        }
    }
    if (g.type === "api")
      try {
        await re({
          method: g.method || "POST",
          url: g.url,
          data: c ?? {},
          params: g.params ?? {},
          headers: g.headers ?? {}
        });
      } catch (h) {
        console.error("API fetch failed:", h);
      }
  }, m = {
    accordion: /* @__PURE__ */ e.jsx(
      ve,
      {
        title: t?.title ?? "",
        groupedFields: v,
        data: u,
        onSubmit: x,
        onCancel: i,
        methods: r,
        components: d
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Ne,
      {
        title: t?.title ?? "",
        groupedFields: v,
        data: u,
        onSubmit: x,
        onCancel: i,
        methods: r,
        components: d
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      ye,
      {
        title: t?.title ?? "",
        groupedFields: v,
        data: u,
        onSubmit: x,
        onCancel: i,
        methods: r,
        components: d,
        widget: t?.widget
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      fe,
      {
        title: t?.title ?? "",
        groupedFields: v,
        data: u,
        onSubmit: x,
        onCancel: i,
        methods: r,
        components: d
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: m[n] ?? m.simple });
}
export {
  Oe as LogiksForm,
  Oe as default
};
