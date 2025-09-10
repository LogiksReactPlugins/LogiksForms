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
  var s = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function d(n, i, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      o = {};
      for (var u in i)
        u !== "key" && (o[u] = i[u]);
    } else o = i;
    return i = o.ref, {
      $$typeof: s,
      type: n,
      key: l,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return F.Fragment = r, F.jsx = d, F.jsxs = d, F;
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
        case c:
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
          case T:
            return "Portal";
          case w:
            return (a.displayName || "Context") + ".Provider";
          case p:
            return (a._context.displayName || "Context") + ".Consumer";
          case _:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case y:
            return h = a.displayName || null, h !== null ? h : s(a.type) || "Memo";
          case O:
            h = a._payload, a = a._init;
            try {
              return s(a(h));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function d(a) {
      try {
        r(a);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var N = h.error, E = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return N.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), r(a);
      }
    }
    function n(a) {
      if (a === c) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === O)
        return "<...>";
      try {
        var h = s(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = W.A;
      return a === null ? null : a.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(a) {
      if (Z.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, h) {
      function N() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: N,
        configurable: !0
      });
    }
    function f() {
      var a = s(this.type);
      return Q[a] || (Q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function b(a, h, N, E, A, C, U, K) {
      return N = C.ref, a = {
        $$typeof: v,
        type: a,
        key: h,
        props: C,
        _owner: A
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: f
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
    function t(a, h, N, E, A, C, U, K) {
      var S = h.children;
      if (S !== void 0)
        if (E)
          if (ie(S)) {
            for (E = 0; E < S.length; E++)
              g(S[E]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(S);
      if (Z.call(h, "key")) {
        S = s(a);
        var P = Object.keys(h).filter(function(ce) {
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
      if (S = null, N !== void 0 && (d(N), S = "" + N), l(h) && (d(h.key), S = "" + h.key), "key" in h) {
        N = {};
        for (var X in h)
          X !== "key" && (N[X] = h[X]);
      } else N = h;
      return S && u(
        N,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), b(
        a,
        S,
        C,
        A,
        i(),
        N,
        U,
        K
      );
    }
    function g(a) {
      typeof a == "object" && a !== null && a.$$typeof === v && a._store && (a._store.validated = 1);
    }
    var m = L, v = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), W = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, ie = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var J, Q = {}, ee = m["react-stack-bottom-frame"].bind(
      m,
      o
    )(), re = G(n(o)), te = {};
    I.Fragment = c, I.jsx = function(a, h, N, E, A) {
      var C = 1e4 > W.recentlyCreatedOwnerStacks++;
      return t(
        a,
        h,
        N,
        !1,
        E,
        A,
        C ? Error("react-stack-top-frame") : ee,
        C ? G(n(a)) : re
      );
    }, I.jsxs = function(a, h, N, E, A) {
      var C = 1e4 > W.recentlyCreatedOwnerStacks++;
      return t(
        a,
        h,
        N,
        !0,
        E,
        A,
        C ? Error("react-stack-top-frame") : ee,
        C ? G(n(a)) : re
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
  const r = {}, d = "General";
  return Object.entries(s).forEach(([n, i]) => {
    const o = i.group || d;
    r[o] || (r[o] = []), r[o].push({ name: n, ...i });
  }), r;
}
const D = (s, r, d) => {
  s.forEach((n) => {
    const i = n?.name;
    if (n?.type === "checkbox" ? n?.multiple === !0 ? r[i] = [] : r[i] = !1 : i === "blocked" || i === "blacklist" ? r[i] = "false" : r[i] = "", n?.required) {
      const o = n?.regex ? new RegExp(n.regex) : null;
      if (n?.type === "checkbox")
        n?.multiple === !0 ? d[i] = R.array().of(R.string()).min(1, n?.placeholder || "Please select at least one option").required(n?.placeholder || "This field is required") : d[i] = R.boolean().oneOf([!0], n?.placeholder || "Please select").required(n?.placeholder || "This field is required");
      else {
        let l = R.string();
        o && (l = l.matches(
          o,
          n?.error_message || "Invalid input"
        )), d[i] = l.required(
          n?.placeholder || n?.field_error || "This field is required"
        );
      }
    } else
      n?.type === "checkbox" ? d[i] = n?.multiple === !0 ? R.array().of(R.string()) : R.boolean() : d[i] = R.string();
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
function V({ field: s, formik: r, methods: d = {} }) {
  const [n, i] = z(!1), [o, l] = z(s.options || {}), [u, f] = z(""), b = (c) => {
    c.currentTarget.open || f("");
  }, t = s.name;
  L.useEffect(() => {
    let c = !0;
    return (async () => {
      if (s?.options) {
        l(s.options);
        return;
      }
      const j = s?.source ?? {};
      if (j.type === "method") {
        const p = j.method, w = p ? d[p] : void 0;
        if (w)
          try {
            const _ = await Promise.resolve(w());
            c && l(_ ?? {});
          } catch (_) {
            console.error("Method execution failed:", _), c && l({});
          }
        else
          c && l({});
      }
      if (j.type === "api" && j.url)
        try {
          const p = await H({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), w = s.valueKey || "value", _ = s.labelKey || "label", $ = Array.isArray(p.data?.data) ? p.data.data : [], k = {};
          $.forEach((y) => {
            k[y[w]] = y[_];
          }), c && l(k);
        } catch (p) {
          console.error("API execution failed:", p), c && l({});
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
  const g = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, m = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, v = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, T = (c) => c.icon ? /* @__PURE__ */ e.jsx("i", { className: c.icon }) : null;
  switch (s.type) {
    case "textarea":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${g} ${m} min-h-[120px] resize-none`,
              onFocus: () => i(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-50", children: String(r.errors[t]) })
      ] });
    case "select":
    case "dataSelector": {
      const x = Object.keys(o || {}).length, j = x > 10 ? Object.entries(o || {}).filter(
        ([p, w]) => w.toLowerCase().includes(u.toLowerCase())
      ) : Object.entries(o || {});
      return x > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: b, children: [
          /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[t] ? o[r.values[t]] || "Select option" : `Select ${s.label}` }),
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
                onChange: (p) => f(p.target.value),
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
              }
            ) }),
            j.length > 0 ? j.map(([p, w]) => /* @__PURE__ */ e.jsx(
              "div",
              {
                onClick: () => r.setFieldValue(t, p),
                className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm ${r.values[t] === p ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`,
                children: w
              },
              p
            )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${g} ${m} appearance-none cursor-pointer pr-12`,
              onFocus: () => i(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: s.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: s.placeholder }),
                Object.entries(o || {}).map(([p, w]) => /* @__PURE__ */ e.jsx("option", { value: p, className: "py-2", children: w }, p))
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
      const c = Object.keys(o || {}).length;
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${c > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(o || {}).map(([x, j]) => /* @__PURE__ */ e.jsxs(
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
              j
            ]
          },
          x
        )) }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
      ] });
    case "checkbox": {
      const x = Object.keys(o || {}).length;
      if (x === 1) {
        const [j, p] = Object.entries(o || {})[0] || [t, s.label];
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
          /* @__PURE__ */ e.jsxs("label", { className: v, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(o || {}).map(([j, p]) => /* @__PURE__ */ e.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: t,
                    value: j,
                    checked: Array.isArray(r.values[t]) ? r.values[t]?.includes(j) : !1,
                    onChange: r.handleChange,
                    onBlur: r.handleBlur,
                    disabled: s.disabled,
                    className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  }
                ),
                p
              ]
            },
            j
          )) }),
          r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[t]) })
        ] });
      if (x > 5) {
        const j = Object.entries(o || {}).filter(
          ([, p]) => p.toLowerCase().includes(u.toLowerCase())
        );
        return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs("label", { className: v, children: [
            s.label,
            s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("details", { className: "relative w-full", onToggle: b, children: [
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
                  value: u,
                  onChange: (p) => f(p.target.value),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                }
              ) }),
              j.length > 0 ? j.map(([p, w]) => /* @__PURE__ */ e.jsxs(
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
                    w
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
      const x = Array.isArray(r.values[t]) ? r.values[t] : [], j = Array.isArray(o) ? o : Object.entries(o || {}).map(([y, O]) => ({ value: y, label: O })), p = (y) => {
        y && !x.includes(y) && r.setFieldValue(t, [...x, y]);
      }, w = (y) => {
        (y.key === "Enter" || y.key === ",") && (y.preventDefault(), p(u), f(""));
      }, _ = (y) => {
        r.setFieldValue(
          t,
          x.filter((O) => O !== y)
        );
      }, $ = (y) => j.find((O) => O.value === y)?.label || y, k = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${g} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !s.disabled && document.getElementById(`${t}-input`)?.focus(),
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
                          O.stopPropagation(), s.disabled || _(y);
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
                  id: `${t}-input`,
                  type: "text",
                  value: u,
                  onChange: (y) => f(y.target.value),
                  onKeyDown: w,
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
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: T(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${g} ${m} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => i(!0),
              name: t,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          s.label,
          s.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          s.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: T(s) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: s.type || "text",
              className: `${g} ${m} ${s.icon ? "pl-9" : ""} `,
              onFocus: () => i(!0),
              name: t,
              value: r.values[t],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: s.placeholder,
              disabled: s.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${n ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[t]) })
      ] });
  }
}
function pe({ title: s, children: r, isFirst: d }) {
  const [n, i] = z(d);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => i(!n),
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
  data: d,
  onSubmit: n = (l) => {
  },
  onCancel: i = () => {
  },
  methods: o = {}
}) {
  const l = {}, u = {};
  Object.entries(r).forEach(([b, t]) => {
    D(t, l, u);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((b) => {
    b in l && (l[b] = d[b]);
  });
  const f = B({
    initialValues: l,
    enableReinitialize: !0,
    validationSchema: R.object().shape(u),
    onSubmit: (b) => {
      n(b);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, t], g) => /* @__PURE__ */ e.jsx(pe, { title: b, isFirst: g === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: t.map((m) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(m.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(V, { field: m, formik: f, methods: o }, m.name)
        },
        m?.name ?? `field-${g}`
      )) }) }, b)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: i, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) });
}
function ge({
  title: s,
  groupedFields: r,
  data: d,
  onSubmit: n = (l) => {
  },
  onCancel: i = () => {
  },
  methods: o = {}
}) {
  const l = Object.keys(r), [u, f] = L.useState(0), b = {}, t = {};
  Object.entries(r).forEach(([c, x]) => {
    const j = {};
    D(x, t, j), b[c] = j;
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((c) => {
    c in t && (t[c] = d[c]);
  });
  const g = l[u] ?? null, m = g && b[g] ? b[g] : {}, v = B({
    initialValues: t,
    enableReinitialize: !0,
    validationSchema: R.object().shape(m),
    onSubmit: (c) => {
      u < l.length - 1 && f((x) => x + 1), u === l.length - 1 && n(c);
    }
  });
  console.log("formik", v.values);
  const T = () => {
    f((c) => c > 0 ? c - 1 : c);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: l.map((c, x) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => f(x),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${u === x ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: c })
      },
      c
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: v.handleSubmit, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: g && r[g]?.map((c, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${M[Y(Number(c.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ e.jsx(V, { field: c, formik: v, methods: o }, c.name)
              },
              c?.name ?? `field-${x}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${u > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              u > 0 && /* @__PURE__ */ e.jsx("button", { onClick: T, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: i, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
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
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: l.map((c, x) => /* @__PURE__ */ e.jsx(
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
  groupedFields: r,
  data: d,
  onSubmit: n = (l) => {
  },
  onCancel: i = () => {
  },
  methods: o = {}
}) {
  const l = Object.values(r).flat(), u = {}, f = {};
  Object.entries(r).forEach(([t, g]) => {
    D(g, u, f);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((t) => {
    t in u && (u[t] = d[t]);
  });
  const b = B({
    initialValues: u,
    enableReinitialize: !0,
    validationSchema: R.object().shape(f),
    onSubmit: (t) => {
      n(t);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold mb-4", children: s }),
    /* @__PURE__ */ e.jsx("p", { className: " px-5 text-sm text-gray-700", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: b.handleSubmit, className: "p-5  mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: l.map((t, g) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(t.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(V, { field: t, formik: b, methods: o }, t.name)
        },
        t?.name ?? `field-${g}`
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: i, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
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
  data: d,
  onSubmit: n = (l) => {
    console.log(l);
  },
  onCancel: i = () => {
  },
  methods: o = {}
}) {
  const l = {}, u = {};
  Object.entries(r).forEach(([b, t]) => {
    D(t, l, u);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((b) => {
    b in l && (l[b] = d[b]);
  });
  const f = B({
    initialValues: l,
    enableReinitialize: !0,
    validationSchema: R.object().shape(u),
    onSubmit: (b) => {
      n(b);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white animate-in fade-in duration-300", children: [
    /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
      /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, t], g) => /* @__PURE__ */ e.jsx(ve, { title: b, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: t.map((m) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${M[Y(Number(m.width))] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(V, { field: m, formik: f, methods: o }, m.name)
        },
        m?.name ?? `field-${g}`
      )) }) }, b)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-end space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: i, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) });
}
function Ee({
  formJson: s = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: d = null,
  onCancel: n = () => {
  }
}) {
  const i = me(s), o = xe(s?.fields ?? {}), [l, u] = L.useState({});
  L.useEffect(() => {
    let t = !0;
    return (async () => {
      const m = s?.source ?? {};
      if (!m?.type) {
        t && u({});
        return;
      }
      if (m.type === "method") {
        const v = m.method, T = v ? r[v] : void 0;
        if (T)
          try {
            const c = await Promise.resolve(T());
            t && u(c ?? {});
          } catch (c) {
            console.error("Method execution failed:", c), t && u({});
          }
        else
          t && u({});
      }
      if (m.type === "api")
        try {
          const v = await H({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          t && u(v.data ?? {});
        } catch (v) {
          console.error("API fetch failed:", v), t && u({});
        }
    })(), () => {
      t = !1;
    };
  }, [
    d,
    s?.source?.type || "",
    s?.source?.method || "",
    s?.source?.url || "",
    JSON.stringify(s?.source?.params ?? {}),
    JSON.stringify(s?.source?.body ?? {}),
    JSON.stringify(s?.source?.headers ?? {})
  ]);
  const f = async (t) => {
    const g = s?.source ?? {};
    if (g.type === "method") {
      const m = g.method, v = m ? r[m] : void 0;
      if (v)
        try {
          await Promise.resolve(v(t));
        } catch (T) {
          console.error("Method execution failed:", T);
        }
    }
    if (g.type === "api")
      try {
        await H({
          method: g.method || "POST",
          url: g.url,
          data: t ?? {},
          params: g.params ?? {},
          headers: g.headers ?? {}
        });
      } catch (m) {
        console.error("API fetch failed:", m);
      }
  }, b = {
    accordion: /* @__PURE__ */ e.jsx(
      be,
      {
        title: s?.title ?? "",
        groupedFields: o,
        data: l,
        onSubmit: f,
        onCancel: n,
        methods: r
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      ye,
      {
        title: s?.title ?? "",
        groupedFields: o,
        data: l,
        onSubmit: f,
        onCancel: n,
        methods: r
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      ge,
      {
        title: s?.title ?? "",
        groupedFields: o,
        data: l,
        onSubmit: f,
        onCancel: n,
        methods: r
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      je,
      {
        title: s?.title ?? "",
        groupedFields: o,
        data: l,
        onSubmit: f,
        onCancel: n,
        methods: r
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: b[i] ?? b.simple });
}
export {
  Ee as LogiksForm,
  Ee as default
};
