import L, { useState as z } from "react";
import H from "axios";
import * as R from "yup";
import { useFormik as B } from "formik";
var q = { exports: {} }, F = {};
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
  if (se) return F;
  se = 1;
  var s = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function c(n, o, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      i = {};
      for (var u in o)
        u !== "key" && (i[u] = o[u]);
    } else i = o;
    return o = i.ref, {
      $$typeof: s,
      type: n,
      key: l,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return F.Fragment = t, F.jsx = c, F.jsxs = c, F;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function ue() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && function() {
    function s(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === oe ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case h:
          return "Fragment";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case $:
          return "Suspense";
        case k:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case A:
            return "Portal";
          case w:
            return (a.displayName || "Context") + ".Provider";
          case p:
            return (a._context.displayName || "Context") + ".Consumer";
          case C:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case y:
            return m = a.displayName || null, m !== null ? m : s(a.type) || "Memo";
          case O:
            m = a._payload, a = a._init;
            try {
              return s(a(m));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function c(a) {
      try {
        t(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var f = m.error, E = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return f.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(a);
      }
    }
    function n(a) {
      if (a === h) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === O)
        return "<...>";
      try {
        var m = s(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = V.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(a) {
      if (Z.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, m) {
      function f() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: f,
        configurable: !0
      });
    }
    function g() {
      var a = s(this.type);
      return Q[a] || (Q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function d(a, m, f, E, _, T, U, K) {
      return f = T.ref, a = {
        $$typeof: N,
        type: a,
        key: m,
        props: T,
        _owner: _
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: g
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
        value: U
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function r(a, m, f, E, _, T, U, K) {
      var S = m.children;
      if (S !== void 0)
        if (E)
          if (ie(S)) {
            for (E = 0; E < S.length; E++)
              b(S[E]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(S);
      if (Z.call(m, "key")) {
        S = s(a);
        var P = Object.keys(m).filter(function(ce) {
          return ce !== "key";
        });
        E = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", te[S + E] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          S,
          P,
          S
        ), te[S + E] = !0);
      }
      if (S = null, f !== void 0 && (c(f), S = "" + f), l(m) && (c(m.key), S = "" + m.key), "key" in m) {
        f = {};
        for (var X in m)
          X !== "key" && (f[X] = m[X]);
      } else f = m;
      return S && u(
        f,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), d(
        a,
        S,
        T,
        _,
        o(),
        f,
        U,
        K
      );
    }
    function b(a) {
      typeof a == "object" && a !== null && a.$$typeof === N && a._store && (a._store.validated = 1);
    }
    var v = L, N = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), V = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, ie = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var J, Q = {}, ee = v["react-stack-bottom-frame"].bind(
      v,
      i
    )(), re = G(n(i)), te = {};
    I.Fragment = h, I.jsx = function(a, m, f, E, _) {
      var T = 1e4 > V.recentlyCreatedOwnerStacks++;
      return r(
        a,
        m,
        f,
        !1,
        E,
        _,
        T ? Error("react-stack-top-frame") : ee,
        T ? G(n(a)) : re
      );
    }, I.jsxs = function(a, m, f, E, _) {
      var T = 1e4 > V.recentlyCreatedOwnerStacks++;
      return r(
        a,
        m,
        f,
        !0,
        E,
        _,
        T ? Error("react-stack-top-frame") : ee,
        T ? G(n(a)) : re
      );
    };
  }()), I;
}
var ne;
function he() {
  return ne || (ne = 1, process.env.NODE_ENV === "production" ? q.exports = de() : q.exports = ue()), q.exports;
}
var e = he();
function me(s) {
  return s.template === "accordion" ? "accordion" : s.template === "simple" ? "simple" : s.template === "cards" ? "cards" : Object.values(s.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function xe(s) {
  const t = {}, c = "General";
  return Object.entries(s).forEach(([n, o]) => {
    const i = o.group || c;
    t[i] || (t[i] = []), t[i].push({ name: n, ...o });
  }), t;
}
const D = (s, t, c) => {
  s.forEach((n) => {
    const o = n?.name;
    if (n?.type === "checkbox" ? n?.multiple === !0 ? t[o] = [] : t[o] = !1 : o === "blocked" || o === "blacklist" ? t[o] = "false" : t[o] = "", n?.required) {
      const i = n?.regex ? new RegExp(n.regex) : null;
      if (n?.type === "checkbox")
        n?.multiple === !0 ? c[o] = R.array().of(R.string()).min(1, n?.placeholder || "Please select at least one option").required(n?.placeholder || "This field is required") : c[o] = R.boolean().oneOf([!0], n?.placeholder || "Please select").required(n?.placeholder || "This field is required");
      else {
        let l = R.string();
        i && (l = l.matches(
          i,
          n?.error_message || "Invalid input"
        )), c[o] = l.required(
          n?.placeholder || n?.field_error || "This field is required"
        );
      }
    } else
      n?.type === "checkbox" ? c[o] = n?.multiple === !0 ? R.array().of(R.string()) : R.boolean() : c[o] = R.string();
  });
}, M = {
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
function Y(s) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(s) ? s : 6;
}
function W({ field: s, formik: t, methods: c = {} }) {
  const [n, o] = z(!1), [i, l] = z(s.options || {}), [u, g] = z(""), d = (h) => {
    h.currentTarget.open || g("");
  }, r = s.name;
  L.useEffect(() => {
    let h = !0;
    return (async () => {
      if (s?.options) {
        l(s.options);
        return;
      }
      const j = s?.source ?? {};
      if (j.type === "method") {
        const p = j.method, w = p ? c[p] : void 0;
        if (w)
          try {
            const C = await Promise.resolve(w());
            h && l(C ?? {});
          } catch (C) {
            console.error("Method execution failed:", C), h && l({});
          }
        else
          h && l({});
      }
      if (j.type === "api" && j.url)
        try {
          const p = await H({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), w = s.valueKey || "value", C = s.labelKey || "label", $ = Array.isArray(p.data?.data) ? p.data.data : [], k = {};
          $.forEach((y) => {
            k[y[w]] = y[C];
          }), h && l(k);
        } catch (p) {
          console.error("API execution failed:", p), h && l({});
        }
    })(), () => {
      h = !1;
    };
  }, [
    s.options,
    s?.source?.type || "",
    s?.source?.method || "",
    s?.source?.url || "",
    JSON.stringify(s?.source?.params ?? {}),
    JSON.stringify(s?.source?.body ?? {}),
    JSON.stringify(s?.source?.headers ?? {})
  ]);
  const b = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, v = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, A = (h) => h.icon ? /* @__PURE__ */ e.jsx("i", { className: h.icon }) : null;
  switch (s.type) {
    case "textarea":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${b} ${v} min-h-[120px] resize-none`,
              onFocus: () => o(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-50", children: String(t.errors[r]) })
      ] });
    case "select":
    case "dataSelector": {
      const x = Object.keys(i || {}).length, j = x > 10 ? Object.entries(i || {}).filter(
        ([p, w]) => w.toLowerCase().includes(u.toLowerCase())
      ) : Object.entries(i || {});
      return x > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: d, children: [
          /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[r] ? i[t.values[r]] || "Select option" : `Select ${s.label}` }),
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
                value: u,
                onChange: (p) => g(p.target.value),
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
              }
            ) }),
            j.length > 0 ? j.map(([p, w]) => /* @__PURE__ */ e.jsx(
              "div",
              {
                onClick: () => t.setFieldValue(r, p),
                className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm ${t.values[r] === p ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`,
                children: w
              },
              p
            )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${b} ${v} appearance-none cursor-pointer pr-12`,
              onFocus: () => o(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: s.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: s.placeholder }),
                Object.entries(i || {}).map(([p, w]) => /* @__PURE__ */ e.jsx("option", { value: p, className: "py-2", children: w }, p))
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
      const h = Object.keys(i || {}).length;
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${h > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(i || {}).map(([x, j]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${r}-${x}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${r}-${x}`,
                  type: "radio",
                  name: r,
                  checked: t.values[r] === x,
                  value: x,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: s.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              j
            ]
          },
          x
        )) }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
      ] });
    case "checkbox": {
      const x = Object.keys(i || {}).length;
      if (x === 1) {
        const [j, p] = Object.entries(i || {})[0] || [r, s.label];
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
                disabled: s.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: r, className: "text-sm font-medium text-gray-700 cursor-pointer", children: p })
          ] }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      }
      if (x > 1 && x <= 5)
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(i || {}).map(([j, p]) => /* @__PURE__ */ e.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: r,
                    value: j,
                    checked: Array.isArray(t.values[r]) ? t.values[r]?.includes(j) : !1,
                    onChange: t.handleChange,
                    onBlur: t.handleBlur,
                    disabled: s.disabled,
                    className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  }
                ),
                p
              ]
            },
            j
          )) }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      if (x > 5) {
        const j = Object.entries(i || {}).filter(
          ([, p]) => p.toLowerCase().includes(u.toLowerCase())
        );
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: d, children: [
            /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[r]?.length > 0 ? t.values[r].join(", ") : `Select ${s.label}` }),
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
                  value: u,
                  onChange: (p) => g(p.target.value),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                }
              ) }),
              j.length > 0 ? j.map(([p, w]) => /* @__PURE__ */ e.jsxs(
                "label",
                {
                  htmlFor: `${r}-${p}`,
                  className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        id: `${r}-${p}`,
                        type: "checkbox",
                        name: r,
                        value: p,
                        checked: Array.isArray(t.values[r]) ? t.values[r]?.includes(p) : !1,
                        onChange: t.handleChange,
                        onBlur: t.handleBlur,
                        disabled: s.disabled,
                        className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }
                    ),
                    w
                  ]
                },
                p
              )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ] })
          ] }),
          t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[r]) })
        ] });
      }
      return null;
    }
    case "tags": {
      const x = Array.isArray(t.values[r]) ? t.values[r] : [], j = Array.isArray(i) ? i : Object.entries(i || {}).map(([y, O]) => ({ value: y, label: O })), p = (y) => {
        y && !x.includes(y) && t.setFieldValue(r, [...x, y]);
      }, w = (y) => {
        (y.key === "Enter" || y.key === ",") && (y.preventDefault(), p(u), g(""));
      }, C = (y) => {
        t.setFieldValue(
          r,
          x.filter((O) => O !== y)
        );
      }, $ = (y) => j.find((O) => O.value === y)?.label || y, k = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${b} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !s.disabled && document.getElementById(`${r}-input`)?.focus(),
            children: [
              x.map((y) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(k, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: $(y) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${$(y)}`,
                        onClick: (O) => {
                          O.stopPropagation(), s.disabled || C(y);
                        },
                        onMouseDown: (O) => O.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                y
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${r}-input`,
                  type: "text",
                  value: u,
                  onChange: (y) => g(y.target.value),
                  onKeyDown: w,
                  placeholder: x.length === 0 ? s.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: s.disabled
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
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: A(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${b} ${v} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => o(!0),
              name: r,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: A(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${b} ${v} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => o(!0),
              name: r,
              value: t.values[r],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[r]) })
      ] });
  }
}
function pe({ title: s, children: t, isFirst: c }) {
  const [n, o] = z(c);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => o(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: s })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${n ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: t }) })
      }
    )
  ] }) });
}
function be({
  title: s,
  groupedFields: t,
  data: c,
  onSubmit: n = (l) => {
  },
  onCancel: o = () => {
  },
  methods: i = {}
}) {
  const l = {}, u = {};
  Object.entries(t).forEach(([d, r]) => {
    D(r, l, u);
  }), c && Object.keys(c).length > 0 && Object.keys(c).forEach((d) => {
    d in l && (l[d] = c[d]);
  });
  const g = B({
    initialValues: l,
    enableReinitialize: !0,
    validationSchema: R.object().shape(u),
    onSubmit: (d) => {
      n(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: g.handleSubmit, className: "p-4 mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, r], b) => /* @__PURE__ */ e.jsx(pe, { title: d, isFirst: b === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: r.map((v) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(v.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(W, { field: v, formik: g, methods: i }, v.name)
        },
        v?.name ?? `field-${b}`
      )) }) }, d)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) });
}
function ge({
  title: s,
  groupedFields: t,
  data: c,
  onSubmit: n = (l) => {
  },
  onCancel: o = () => {
  },
  methods: i = {}
}) {
  const l = Object.keys(t), [u, g] = L.useState(0), d = {}, r = {};
  Object.entries(t).forEach(([h, x]) => {
    const j = {};
    D(x, r, j), d[h] = j;
  }), c && Object.keys(c).length > 0 && Object.keys(c).forEach((h) => {
    h in r && (r[h] = c[h]);
  });
  const b = l[u] ?? null, v = b && d[b] ? d[b] : {}, N = B({
    initialValues: r,
    enableReinitialize: !0,
    validationSchema: R.object().shape(v),
    onSubmit: (h) => {
      u < l.length - 1 && g((x) => x + 1), u === l.length - 1 && n(h);
    }
  });
  console.log("formik", N.values);
  const A = () => {
    g((h) => h > 0 ? h - 1 : h);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: l.map((h, x) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => g(x),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${u === x ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: h })
      },
      h
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: N.handleSubmit, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: b && t[b]?.map((h, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${M[Y(Number(h.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ e.jsx(W, { field: h, formik: N, methods: i }, h.name)
              },
              h?.name ?? `field-${x}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${u > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              u > 0 && /* @__PURE__ */ e.jsx("button", { onClick: A, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: o, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                u + 1,
                " of ",
                l.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: l.map((h, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${x === u ? "bg-action w-6" : "bg-gray-300"}`
              },
              x
            )) })
          ] }) })
        ]
      },
      l[u]
    )
  ] });
}
function je({
  title: s,
  groupedFields: t,
  data: c,
  onSubmit: n = (l) => {
  },
  onCancel: o = () => {
  },
  methods: i = {}
}) {
  const l = Object.values(t).flat(), u = {}, g = {};
  Object.entries(t).forEach(([r, b]) => {
    D(b, u, g);
  }), c && Object.keys(c).length > 0 && Object.keys(c).forEach((r) => {
    r in u && (u[r] = c[r]);
  });
  const d = B({
    initialValues: u,
    enableReinitialize: !0,
    validationSchema: R.object().shape(g),
    onSubmit: (r) => {
      n(r);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold mb-4", children: s }),
    /* @__PURE__ */ e.jsx("p", { className: " px-5 text-sm text-gray-700", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: d.handleSubmit, className: "p-5  mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: l.map((r, b) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(r.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(W, { field: r, formik: d, methods: i }, r.name)
        },
        r?.name ?? `field-${b}`
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) });
}
function ve({ title: s, children: t }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: s })
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
function ye({
  title: s,
  groupedFields: t,
  data: c,
  onSubmit: n = (l) => {
    console.log(l);
  },
  onCancel: o = () => {
  },
  methods: i = {}
}) {
  const l = {}, u = {};
  Object.entries(t).forEach(([d, r]) => {
    D(r, l, u);
  }), c && Object.keys(c).length > 0 && Object.keys(c).forEach((d) => {
    d in l && (l[d] = c[d]);
  });
  const g = B({
    initialValues: l,
    enableReinitialize: !0,
    validationSchema: R.object().shape(u),
    onSubmit: (d) => {
      n(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: g.handleSubmit, className: "p-4 mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, r], b) => /* @__PURE__ */ e.jsx(ve, { title: d, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: r.map((v) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(v.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(W, { field: v, formik: g, methods: i }, v.name)
        },
        v?.name ?? `field-${b}`
      )) }) }, d)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) });
}
function Ee({
  formJson: s = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: c = null,
  onCancel: n = () => {
  }
}) {
  me(s);
  const o = xe(s?.fields ?? {}), [i, l] = L.useState({});
  L.useEffect(() => {
    let g = !0;
    return (async () => {
      const r = s?.source ?? {};
      if (!r?.type) {
        g && l({});
        return;
      }
      if (r.type === "method") {
        const b = r.method, v = b ? t[b] : void 0;
        if (v)
          try {
            const N = await Promise.resolve(v());
            g && l(N ?? {});
          } catch (N) {
            console.error("Method execution failed:", N), g && l({});
          }
        else
          g && l({});
      }
      if (r.type === "api")
        try {
          const b = await H({
            method: r.method || "GET",
            url: r.url,
            data: r.body ?? {},
            params: r.params ?? {},
            headers: r.headers ?? {}
          });
          g && l(b.data ?? {});
        } catch (b) {
          console.error("API fetch failed:", b), g && l({});
        }
    })(), () => {
      g = !1;
    };
  }, [
    c,
    s?.source?.type || "",
    s?.source?.method || "",
    s?.source?.url || "",
    JSON.stringify(s?.source?.params ?? {}),
    JSON.stringify(s?.source?.body ?? {}),
    JSON.stringify(s?.source?.headers ?? {})
  ]);
  const u = async (g) => {
    const d = s?.source ?? {};
    if (d.type === "method") {
      const r = d.method, b = r ? t[r] : void 0;
      if (b)
        try {
          await Promise.resolve(b(g));
        } catch (v) {
          console.error("Method execution failed:", v);
        }
    }
    if (d.type === "api")
      try {
        await H({
          method: d.method || "POST",
          url: d.url,
          data: g ?? {},
          params: d.params ?? {},
          headers: d.headers ?? {}
        });
      } catch (r) {
        console.error("API fetch failed:", r);
      }
  };
  return s?.title, s?.title, s?.title, s?.title, /* @__PURE__ */ e.jsx("div", { className: "relative", children: "Hello world !" });
}
export {
  Ee as LogiksForm,
  Ee as default
};
