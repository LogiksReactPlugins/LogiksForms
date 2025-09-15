import q, { useState as B } from "react";
import Z from "axios";
import * as R from "yup";
import { useFormik as D } from "formik";
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
var ae;
function de() {
  if (ae) return I;
  ae = 1;
  var s = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(n, l, j) {
    var u = null;
    if (j !== void 0 && (u = "" + j), l.key !== void 0 && (u = "" + l.key), "key" in l) {
      j = {};
      for (var o in l)
        o !== "key" && (j[o] = l[o]);
    } else j = l;
    return l = j.ref, {
      $$typeof: s,
      type: n,
      key: u,
      ref: l !== void 0 ? l : null,
      props: j
    };
  }
  return I.Fragment = r, I.jsx = i, I.jsxs = i, I;
}
var L = {};
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
    function s(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === oe ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case T:
          return "Fragment";
        case x:
          return "Profiler";
        case c:
          return "StrictMode";
        case A:
          return "Suspense";
        case k:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case N:
            return "Portal";
          case p:
            return (a.displayName || "Context") + ".Provider";
          case v:
            return (a._context.displayName || "Context") + ".Consumer";
          case E:
            var d = a.render;
            return a = a.displayName, a || (a = d.displayName || d.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case P:
            return d = a.displayName || null, d !== null ? d : s(a.type) || "Memo";
          case y:
            d = a._payload, a = a._init;
            try {
              return s(a(d));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function i(a) {
      try {
        r(a);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var w = d.error, S = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), r(a);
      }
    }
    function n(a) {
      if (a === T) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === y)
        return "<...>";
      try {
        var d = s(a);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function j() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (J.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function o(a, d) {
      function w() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: w,
        configurable: !0
      });
    }
    function h() {
      var a = s(this.type);
      return ee[a] || (ee[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, d, w, S, $, _, K, X) {
      return w = _.ref, a = {
        $$typeof: g,
        type: a,
        key: d,
        props: _,
        _owner: $
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: h
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
        value: K
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, d, w, S, $, _, K, X) {
      var O = d.children;
      if (O !== void 0)
        if (S)
          if (ie(O)) {
            for (S = 0; S < O.length; S++)
              t(O[S]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else t(O);
      if (J.call(d, "key")) {
        O = s(a);
        var F = Object.keys(d).filter(function(ce) {
          return ce !== "key";
        });
        S = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", se[O + S] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          O,
          F,
          O
        ), se[O + S] = !0);
      }
      if (O = null, w !== void 0 && (i(w), O = "" + w), u(d) && (i(d.key), O = "" + d.key), "key" in d) {
        w = {};
        for (var H in d)
          H !== "key" && (w[H] = d[H]);
      } else w = d;
      return O && o(
        w,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        O,
        _,
        $,
        l(),
        w,
        K,
        X
      );
    }
    function t(a) {
      typeof a == "object" && a !== null && a.$$typeof === g && a._store && (a._store.validated = 1);
    }
    var b = q, g = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), p = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), G = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, ie = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var Q, ee = {}, re = b["react-stack-bottom-frame"].bind(
      b,
      j
    )(), te = U(n(j)), se = {};
    L.Fragment = T, L.jsx = function(a, d, w, S, $) {
      var _ = 1e4 > G.recentlyCreatedOwnerStacks++;
      return m(
        a,
        d,
        w,
        !1,
        S,
        $,
        _ ? Error("react-stack-top-frame") : re,
        _ ? U(n(a)) : te
      );
    }, L.jsxs = function(a, d, w, S, $) {
      var _ = 1e4 > G.recentlyCreatedOwnerStacks++;
      return m(
        a,
        d,
        w,
        !0,
        S,
        $,
        _ ? Error("react-stack-top-frame") : re,
        _ ? U(n(a)) : te
      );
    };
  }()), L;
}
var le;
function he() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? z.exports = de() : z.exports = ue()), z.exports;
}
var e = he();
function me(s) {
  return s.template === "accordion" ? "accordion" : s.template === "simple" ? "simple" : s.template === "cards" ? "cards" : Object.values(s.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function xe(s) {
  const r = {}, i = "General";
  return Object.entries(s).forEach(([n, l]) => {
    const j = l.group || i;
    r[j] || (r[j] = []), r[j].push({ name: n, ...l });
  }), r;
}
const M = (s, r, i) => {
  s.forEach((n) => {
    const l = n?.name;
    if (n?.type === "checkbox" ? n?.multiple === !0 ? r[l] = [] : r[l] = !1 : n?.type === "tags" ? r[l] = [] : l === "blocked" || l === "blacklist" ? r[l] = "false" : r[l] = "", n?.required) {
      const j = n?.regex ? new RegExp(n.regex) : null;
      if (n?.type === "checkbox")
        n?.multiple === !0 ? i[l] = R.array().of(R.string()).min(1, n?.placeholder || "Please select at least one option").required(n?.placeholder || "This field is required") : i[l] = R.boolean().oneOf([!0], n?.placeholder || "Please select").required(n?.placeholder || "This field is required");
      else {
        let u = R.string();
        j && (u = u.matches(
          j,
          n?.error_message || "Invalid input"
        )), i[l] = u.required(
          n?.placeholder || n?.field_error || "This field is required"
        );
      }
    } else
      n?.type === "checkbox" ? i[l] = n?.multiple === !0 ? R.array().of(R.string()) : R.boolean() : n?.type === "tags" ? i[l] = R.array().of(R.string()) : i[l] = R.string();
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
function W(s) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(s) ? s : 6;
}
function V({ field: s, formik: r, methods: i = {}, components: n }) {
  const [l, j] = B(!1), [u, o] = B(s.options || {}), [h, f] = B(""), m = (c) => {
    c.currentTarget.open || f("");
  }, t = s.name;
  q.useEffect(() => {
    let c = !0;
    return (async () => {
      if (s?.options) {
        o(s.options);
        return;
      }
      const v = s?.source ?? {};
      if (v.type === "method") {
        const p = v.method, E = p ? i[p] : void 0;
        if (E)
          try {
            const A = await Promise.resolve(E());
            c && o(A ?? {});
          } catch (A) {
            console.error("Method execution failed:", A), c && o({});
          }
        else
          c && o({});
      }
      if (v.type === "api" && v.url)
        try {
          const p = await Z({
            method: v.method || "GET",
            url: v.url,
            data: v.body ?? {},
            params: v.params ?? {},
            headers: v.headers ?? {}
          }), E = s.valueKey || "value", A = s.labelKey || "label", k = Array.isArray(p.data?.data) ? p.data.data : [], P = {};
          k.forEach((y) => {
            P[y[E]] = y[A];
          }), c && o(P);
        } catch (p) {
          console.error("API execution failed:", p), c && o({});
        }
    })(), () => {
      c = !1;
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
  `, g = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, T = (c) => c.icon ? /* @__PURE__ */ e.jsx("i", { className: c.icon }) : null;
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
              className: `${b} ${g} min-h-[120px] resize-none`,
              onFocus: () => j(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-50", children: String(r.errors[t]) })
      ] });
    case "select":
    case "dataSelector": {
      const x = Object.keys(u || {}).length, v = x > 10 ? Object.entries(u || {}).filter(
        ([p, E]) => E.toLowerCase().includes(h.toLowerCase())
      ) : Object.entries(u || {});
      return x > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: m, children: [
          /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[t] ? u[r.values[t]] || "Select option" : `Select ${s.label}` }),
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
                value: h,
                onChange: (p) => f(p.target.value),
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
              }
            ) }),
            v.length > 0 ? v.map(([p, E]) => /* @__PURE__ */ e.jsx(
              "div",
              {
                onClick: () => r.setFieldValue(t, p),
                className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm ${r.values[t] === p ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`,
                children: E
              },
              p
            )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${b} ${g} appearance-none cursor-pointer pr-12`,
              onFocus: () => j(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: s.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: s.placeholder }),
                Object.entries(u || {}).map(([p, E]) => /* @__PURE__ */ e.jsx("option", { value: p, className: "py-2", children: E }, p))
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
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
    }
    case "radioList":
    case "radio":
      const c = Object.keys(u || {}).length;
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${c > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(u || {}).map(([x, v]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${t}-${x}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${t}-${x}`,
                  type: "radio",
                  name: t,
                  checked: r.values[t] === x,
                  value: x,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: s.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              v
            ]
          },
          x
        )) }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
      ] });
    case "component":
      return n?.[t];
    case "checkbox": {
      const x = Object.keys(u || {}).length;
      if (x === 1) {
        const [v, p] = Object.entries(u || {})[0] || [t, s.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: t,
                type: "checkbox",
                name: t,
                checked: r.values[t] || !1,
                onChange: r.handleChange,
                onBlur: r.handleBlur,
                disabled: s.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: t, className: "text-sm font-medium text-gray-700 cursor-pointer", children: p })
          ] }),
          r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
        ] });
      }
      if (x > 1 && x <= 5)
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(u || {}).map(([v, p]) => /* @__PURE__ */ e.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: t,
                    value: v,
                    checked: Array.isArray(r.values[t]) ? r.values[t]?.includes(v) : !1,
                    onChange: r.handleChange,
                    onBlur: r.handleBlur,
                    disabled: s.disabled,
                    className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  }
                ),
                p
              ]
            },
            v
          )) }),
          r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
        ] });
      if (x > 5) {
        const v = Object.entries(u || {}).filter(
          ([, p]) => p.toLowerCase().includes(h.toLowerCase())
        );
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: N, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: m, children: [
            /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[t]?.length > 0 ? r.values[t].join(", ") : `Select ${s.label}` }),
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
                  value: h,
                  onChange: (p) => f(p.target.value),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                }
              ) }),
              v.length > 0 ? v.map(([p, E]) => /* @__PURE__ */ e.jsxs(
                "label",
                {
                  htmlFor: `${t}-${p}`,
                  className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        id: `${t}-${p}`,
                        type: "checkbox",
                        name: t,
                        value: p,
                        checked: Array.isArray(r.values[t]) ? r.values[t]?.includes(p) : !1,
                        onChange: r.handleChange,
                        onBlur: r.handleBlur,
                        disabled: s.disabled,
                        className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }
                    ),
                    E
                  ]
                },
                p
              )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ] })
          ] }),
          r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
        ] });
      }
      return null;
    }
    case "tags": {
      const x = Array.isArray(r.values[t]) ? r.values[t] : [], v = Array.isArray(u) ? u : Object.entries(u || {}).map(([y, C]) => ({ value: y, label: C })), p = (y) => {
        y && !x.includes(y) && r.setFieldValue(t, [...x, y]);
      }, E = (y) => {
        (y.key === "Enter" || y.key === ",") && (y.preventDefault(), p(h), f(""));
      }, A = (y) => {
        r.setFieldValue(
          t,
          x.filter((C) => C !== y)
        );
      }, k = (y) => v.find((C) => C.value === y)?.label || y, P = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
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
            onClick: () => !s.disabled && document.getElementById(`${t}-input`)?.focus(),
            children: [
              x.map((y) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(P, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: k(y) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${k(y)}`,
                        onClick: (C) => {
                          C.stopPropagation(), s.disabled || A(y);
                        },
                        onMouseDown: (C) => C.preventDefault(),
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
                  id: `${t}-input`,
                  type: "text",
                  value: h,
                  onChange: (y) => f(y.target.value),
                  onKeyDown: E,
                  placeholder: x.length === 0 ? s.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: s.disabled
                }
              )
            ]
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: T(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${b} ${g} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => j(!0),
              name: t,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: T(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${b} ${g} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => j(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
  }
}
function pe({ title: s, children: r, isFirst: i }) {
  const [n, l] = B(i);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => l(!n),
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function be({
  title: s,
  groupedFields: r,
  data: i,
  onSubmit: n = (o) => {
  },
  onCancel: l = () => {
  },
  methods: j = {},
  components: u = {}
}) {
  const o = {}, h = {};
  Object.entries(r).forEach(([m, t]) => {
    M(t, o, h);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((m) => {
    m in o && (o[m] = i[m]);
  });
  const f = D({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: R.object().shape(h),
    onSubmit: (m) => {
      n(m);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([m, t], b) => /* @__PURE__ */ e.jsx(pe, { title: m, isFirst: b === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: t.map((g) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Y[W(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(V, { components: u, field: g, formik: f, methods: j }, g.name)
      },
      g?.name ?? `field-${b}`
    )) }) }, m)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ge({
  title: s,
  groupedFields: r,
  data: i,
  onSubmit: n = (o) => {
  },
  onCancel: l = () => {
  },
  methods: j = {},
  components: u = {}
}) {
  const o = Object.keys(r), [h, f] = q.useState(0), m = {}, t = {};
  Object.entries(r).forEach(([c, x]) => {
    const v = {};
    M(x, t, v), m[c] = v;
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((c) => {
    c in t && (t[c] = i[c]);
  });
  const b = o[h] ?? null, g = b && m[b] ? m[b] : {}, N = D({
    initialValues: t,
    enableReinitialize: !0,
    validationSchema: R.object().shape(g),
    onSubmit: (c) => {
      h < o.length - 1 && f((x) => x + 1), h === o.length - 1 && n(c);
    }
  });
  console.log("formik", N.values);
  const T = () => {
    f((c) => c > 0 ? c - 1 : c);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: o.map((c, x) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => f(x),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${h === x ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: c })
      },
      c
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: N.handleSubmit, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: b && r[b]?.map((c, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12 md:col-span-6 ${Y[W(Number(c.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(V, { field: c, formik: N, methods: j, components: u }, c.name)
              },
              c?.name ?? `field-${x}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${h > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              h > 0 && /* @__PURE__ */ e.jsx("button", { onClick: T, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: l, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                h + 1,
                " of ",
                o.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: o.map((c, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${x === h ? "bg-action w-6" : "bg-gray-300"}`
              },
              x
            )) })
          ] }) })
        ]
      },
      o[h]
    )
  ] });
}
function je({
  title: s,
  groupedFields: r,
  data: i,
  onSubmit: n = (o) => {
  },
  onCancel: l = () => {
  },
  methods: j = {},
  components: u = {}
}) {
  const o = Object.values(r).flat(), h = {}, f = {};
  Object.entries(r).forEach(([t, b]) => {
    M(b, h, f);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((t) => {
    t in h && (h[t] = i[t]);
  });
  const m = D({
    initialValues: h,
    enableReinitialize: !0,
    validationSchema: R.object().shape(f),
    onSubmit: (t) => {
      n(t);
    }
  });
  return console.log("formik", m.values), /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold pl-4 pt-4 mb-4", children: s }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: m.handleSubmit, className: "p-4  mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: o.map((t, b) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${Y[W(Number(t.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ e.jsx(V, { components: u, field: t, formik: m, methods: j }, t.name)
        },
        t?.name ?? `field-${b}`
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
          /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
          /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
        ] })
      ] })
    ] })
  ] }) });
}
function ve({ title: s, children: r }) {
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function ye({
  title: s,
  groupedFields: r,
  data: i,
  onSubmit: n = (o) => {
    console.log(o);
  },
  onCancel: l = () => {
  },
  methods: j = {},
  components: u = {}
}) {
  const o = {}, h = {};
  Object.entries(r).forEach(([m, t]) => {
    M(t, o, h);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((m) => {
    m in o && (o[m] = i[m]);
  });
  const f = D({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: R.object().shape(h),
    onSubmit: (m) => {
      n(m);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([m, t], b) => /* @__PURE__ */ e.jsx(ve, { title: m, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: t.map((g) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Y[W(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(V, { components: u, field: g, formik: f, methods: j }, g.name)
      },
      g?.name ?? `field-${b}`
    )) }) }, m)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ee({
  formJson: s = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: i = null,
  onCancel: n = () => {
  },
  components: l = {}
}) {
  const j = me(s), u = xe(s?.fields ?? {}), [o, h] = q.useState({});
  q.useEffect(() => {
    let t = !0;
    return (async () => {
      const g = s?.source ?? {};
      if (!g?.type) {
        t && h({});
        return;
      }
      if (g.type === "method") {
        const N = g.method, T = N ? r[N] : void 0;
        if (T)
          try {
            const c = await Promise.resolve(T());
            t && h(c ?? {});
          } catch (c) {
            console.error("Method execution failed:", c), t && h({});
          }
        else
          t && h({});
      }
      if (g.type === "api")
        try {
          const N = await Z({
            method: g.method || "GET",
            url: g.url,
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          t && h(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), t && h({});
        }
    })(), () => {
      t = !1;
    };
  }, [
    i,
    s?.source?.type || "",
    s?.source?.method || "",
    s?.source?.url || "",
    JSON.stringify(s?.source?.params ?? {}),
    JSON.stringify(s?.source?.body ?? {}),
    JSON.stringify(s?.source?.headers ?? {})
  ]);
  const f = async (t) => {
    const b = s?.source ?? {};
    if (b.type === "method") {
      const g = b.method, N = g ? r[g] : void 0;
      if (N)
        try {
          await Promise.resolve(N(t));
        } catch (T) {
          console.error("Method execution failed:", T);
        }
    }
    if (b.type === "api")
      try {
        await Z({
          method: b.method || "POST",
          url: b.url,
          data: t ?? {},
          params: b.params ?? {},
          headers: b.headers ?? {}
        });
      } catch (g) {
        console.error("API fetch failed:", g);
      }
  }, m = {
    accordion: /* @__PURE__ */ e.jsx(
      be,
      {
        title: s?.title ?? "",
        groupedFields: u,
        data: o,
        onSubmit: f,
        onCancel: n,
        methods: r,
        components: l
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      ye,
      {
        title: s?.title ?? "",
        groupedFields: u,
        data: o,
        onSubmit: f,
        onCancel: n,
        methods: r,
        components: l
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      ge,
      {
        title: s?.title ?? "",
        groupedFields: u,
        data: o,
        onSubmit: f,
        onCancel: n,
        methods: r,
        components: l
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      je,
      {
        title: s?.title ?? "",
        groupedFields: u,
        data: o,
        onSubmit: f,
        onCancel: n,
        methods: r,
        components: l
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: m[j] ?? m.simple });
}
export {
  Ee as LogiksForm,
  Ee as default
};
