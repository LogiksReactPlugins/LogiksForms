import H, { useState as U, useRef as le, useEffect as oe, useMemo as he } from "react";
import L from "axios";
import * as T from "yup";
import { useFormik as J } from "formik";
var X = { exports: {} }, G = {};
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
  if (ie) return G;
  ie = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function f(c, h, l) {
    var v = null;
    if (l !== void 0 && (v = "" + l), h.key !== void 0 && (v = "" + h.key), "key" in h) {
      l = {};
      for (var m in h)
        m !== "key" && (l[m] = h[m]);
    } else l = h;
    return h = l.ref, {
      $$typeof: r,
      type: c,
      key: v,
      ref: h !== void 0 ? h : null,
      props: l
    };
  }
  return G.Fragment = t, G.jsx = f, G.jsxs = f, G;
}
var W = {};
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
function pe() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function r(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === n ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case S:
          return "Fragment";
        case s:
          return "Profiler";
        case A:
          return "StrictMode";
        case z:
          return "Suspense";
        case M:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case y:
            return "Portal";
          case j:
            return (a.displayName || "Context") + ".Provider";
          case I:
            return (a._context.displayName || "Context") + ".Consumer";
          case w:
            var g = a.render;
            return a = a.displayName, a || (a = g.displayName || g.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case _:
            return g = a.displayName || null, g !== null ? g : r(a.type) || "Memo";
          case Q:
            g = a._payload, a = a._init;
            try {
              return r(a(g));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function f(a) {
      try {
        t(a);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var R = g.error, $ = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return R.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(a);
      }
    }
    function c(a) {
      if (a === S) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === Q)
        return "<...>";
      try {
        var g = r(a);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function h() {
      var a = x.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function v(a) {
      if (N.call(a, "key")) {
        var g = Object.getOwnPropertyDescriptor(a, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function m(a, g) {
      function R() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: R,
        configurable: !0
      });
    }
    function o() {
      var a = r(this.type);
      return q[a] || (q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function p(a, g, R, $, B, D, re, ae) {
      return R = D.ref, a = {
        $$typeof: i,
        type: a,
        key: g,
        props: D,
        _owner: B
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: re
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, g, R, $, B, D, re, ae) {
      var C = g.children;
      if (C !== void 0)
        if ($)
          if (O(C)) {
            for ($ = 0; $ < C.length; $++)
              d(C[$]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (N.call(g, "key")) {
        C = r(a);
        var V = Object.keys(g).filter(function(ue) {
          return ue !== "key";
        });
        $ = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", ne[C + $] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          C,
          V,
          C
        ), ne[C + $] = !0);
      }
      if (C = null, R !== void 0 && (f(R), C = "" + R), v(g) && (f(g.key), C = "" + g.key), "key" in g) {
        R = {};
        for (var se in g)
          se !== "key" && (R[se] = g[se]);
      } else R = g;
      return C && m(
        R,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), p(
        a,
        C,
        D,
        B,
        h(),
        R,
        re,
        ae
      );
    }
    function d(a) {
      typeof a == "object" && a !== null && a.$$typeof === i && a._store && (a._store.validated = 1);
    }
    var b = H, i = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), j = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), n = Symbol.for("react.client.reference"), x = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, O = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var F, q = {}, E = b["react-stack-bottom-frame"].bind(
      b,
      l
    )(), k = P(c(l)), ne = {};
    W.Fragment = S, W.jsx = function(a, g, R, $, B) {
      var D = 1e4 > x.recentlyCreatedOwnerStacks++;
      return u(
        a,
        g,
        R,
        !1,
        $,
        B,
        D ? Error("react-stack-top-frame") : E,
        D ? P(c(a)) : k
      );
    }, W.jsxs = function(a, g, R, $, B) {
      var D = 1e4 > x.recentlyCreatedOwnerStacks++;
      return u(
        a,
        g,
        R,
        !0,
        $,
        B,
        D ? Error("react-stack-top-frame") : E,
        D ? P(c(a)) : k
      );
    };
  }()), W;
}
var de;
function xe() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? X.exports = me() : X.exports = pe()), X.exports;
}
var e = xe();
function be(r) {
  return r.template === "accordion" ? "accordion" : r.template === "simple" ? "simple" : r.template === "cards" ? "cards" : Object.values(r.fields || {}).some((c) => c.group) ? "tab" : "simple";
}
function ge(r) {
  const t = {}, f = "General";
  return Object.entries(r).forEach(([c, h]) => {
    const l = h.group || f;
    t[l] || (t[l] = []), t[l].push({ name: c, ...h });
  }), t;
}
const K = (r, t, f) => {
  r.forEach((c) => {
    const h = c?.name;
    if (!h) return;
    c?.type === "checkbox" ? t[h] = c?.multiple === !0 ? [] : !1 : c?.type === "tags" ? t[h] = [] : h === "blocked" || h === "blacklist" ? t[h] = "false" : t[h] = "";
    let l;
    c?.type === "checkbox" ? l = c?.multiple === !0 ? T.array().of(T.string()) : T.boolean() : c?.type === "tags" ? l = T.array().of(T.string()) : c?.type === "email" ? l = T.string().email("Invalid email format") : c?.type === "number" ? l = T.number().typeError("Must be a number") : c?.type === "date" ? l = T.date().typeError("Invalid date format") : c?.type === "json" ? (t[h] = "", l = T.string().test("is-json", "Invalid JSON format", (v) => {
      if (!v) return !0;
      try {
        return JSON.parse(v), !0;
      } catch {
        return !1;
      }
    })) : l = T.string(), c?.required && (l = l.required(
      c?.placeholder || c?.error_message || `${c?.label || h} is required`
    )), c?.validate?.regex && typeof c.validate.regex == "string" && (l = l.matches(
      new RegExp(c?.validate?.regex),
      c?.error_message || "Invalid input format"
    )), c?.validate && Object.entries(c.validate).forEach(([v, m]) => {
      switch (v) {
        case "email":
          m && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(m),
            `Must match pattern: ${m}`
          );
          break;
        case "date":
          l = T.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((o, p) => {
            if (typeof p == "string") {
              const u = p.replace(/-/g, "/"), [d, b, i] = u.split("/");
              if (d && b && i)
                return /* @__PURE__ */ new Date(`${i}-${b}-${d}`);
            }
            return o;
          });
          break;
        case "time":
          l = l.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          l = l.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          l = T.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = T.number().typeError("Must be a decimal").transform((o, p) => {
            if (p == null || p === "") return;
            const u = Number(p);
            if (isNaN(u)) return o;
            if (typeof o == "number" && !isNaN(o)) {
              const d = Number(o);
              return Number.isInteger(d) ? Number(u.toFixed(d)) : u;
            }
            return u;
          });
          break;
        case "alphanumeric":
          l = l.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          l = l.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          l = l.transform(
            (o) => o && o.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (o) => o && o.toLowerCase()
          );
          break;
        case "length-min": {
          const o = Number(m);
          isNaN(o) || (l = l.min(o, `Minimum length is ${o}`));
          break;
        }
        case "length-max": {
          const o = Number(m);
          isNaN(o) || (l = l.max(o, `Maximum length is ${o}`));
          break;
        }
      }
    }), f[h] = l;
  });
}, Z = {
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
function ee(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
function te({ field: r, formik: t, methods: f = {}, components: c }) {
  const [h, l] = U(!1), [v, m] = U(r.options || {}), [o, p] = U(""), [u, d] = U(0), b = le(null), i = le(null), [y, S] = U(!1), A = (n) => {
    n.currentTarget.open || p("");
  };
  oe(() => {
    const n = (x) => {
      i.current && !i.current.contains(x.target) && (i.current.open = !1, p(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const s = r.name;
  H.useEffect(() => {
    let n = !0;
    return (async () => {
      if (r?.options) {
        m(r.options);
        return;
      }
      const N = r?.source ?? {};
      if (N.type === "method") {
        const O = N.method, P = O ? f[O] : void 0;
        if (P)
          try {
            const F = await Promise.resolve(P());
            n && m(F ?? {});
          } catch (F) {
            console.error("Method execution failed:", F), n && m({});
          }
        else
          n && m({});
      }
      if (N.type === "api" && N.url)
        try {
          const O = await L({
            method: N.method || "GET",
            url: N.url,
            data: N.body ?? {},
            params: N.params ?? {},
            headers: N.headers ?? {}
          }), P = r.valueKey || "value", F = r.labelKey || "label", q = Array.isArray(O.data?.data) ? O.data.data : [], E = {};
          q.forEach((k) => {
            E[k[P]] = k[F];
          }), n && m(E);
        } catch (O) {
          console.error("API execution failed:", O), n && m({});
        }
    })(), () => {
      n = !1;
    };
  }, [
    r.options,
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params ?? {}),
    JSON.stringify(r?.source?.body ?? {}),
    JSON.stringify(r?.source?.headers ?? {})
  ]);
  const I = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, j = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, z = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, M = Object.keys(v || {}).length, _ = he(() => Object.entries(v || {}).filter(
    ([, n]) => o ? n.toLowerCase().includes(o.toLowerCase()) : !0
  ), [o, v]), Q = (n) => {
    if (y) {
      if (n.key === "ArrowDown" && (n.preventDefault(), d(
        (x) => x + 1 < _.length ? x + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), d(
        (x) => x - 1 >= 0 ? x - 1 : _.length - 1
      )), n.key === "Enter") {
        n.preventDefault(), console.log("filteredOptions[highlightedIndex]", _[u]);
        const [x, N] = _[u] || [];
        x && (p(N ?? ""), t.setFieldValue(s, x)), S(!1);
      }
      n.key === "Escape" && S(!1);
    }
  }, Y = (n) => {
    if (i.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), d(
          (x) => x + 1 < _.length ? x + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), d(
          (x) => x - 1 >= 0 ? x - 1 : _.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [x] = _[u] || [];
        if (x) {
          let N = r.type === "select" || r.type === "dataSelector" || r.type === "dataMethod";
          t.setFieldValue(r.name, N ? x : [...t.values[r.name], x]), i.current.open = !1;
        }
      } else n.key === "Escape" && (i.current.open = !1, p(""));
  };
  switch (oe(() => {
    b.current?.querySelector(
      `[data-index="${u}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [u]), r.type) {
    case "autocomplete": {
      const n = (N) => {
        const O = N.target.value;
        p(O), t.setFieldValue(s, O), S(!0);
      }, x = (N, O) => {
        p(O), t.setFieldValue(s, N), S(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${I} ${j}`,
            value: t.values[s],
            placeholder: r.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => S(!0),
            onBlur: () => setTimeout(() => S(!1), 150),
            onKeyDown: Q
          }
        ),
        y && /* @__PURE__ */ e.jsx("div", { ref: b, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: _.length > 0 ? _.map(([N, O], P) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": P,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${u === P ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => x(N, O),
            children: O
          },
          P
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          o,
          '"'
        ] }) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${I} ${j} min-h-[120px] resize-none`,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${h ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataMethod":
      return M > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: A,
            ref: i,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[s] ? v[t.values[s]] || "Select option" : `Select ${r.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (n) => {
                      p(n.target.value), d(0);
                    },
                    onKeyDown: Y,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 ? _.map(([n, x], N) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": N,
                    onClick: () => t.setFieldValue(s, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : u === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: x
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${I} ${j} appearance-none cursor-pointer pr-12`,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: r.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r.placeholder }),
                Object.entries(v || {}).map(([n, x]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: x }, n))
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
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${M > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([n, x]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${s}-${n}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-${n}`,
                  type: "radio",
                  name: s,
                  checked: t.values[s] === n,
                  value: n,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: r.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] });
    case "component":
      return c?.[s];
    case "checkbox": {
      if (M === 1) {
        const [n, x] = Object.entries(v || {})[0] || [s, r.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: s,
                type: "checkbox",
                name: s,
                checked: t.values[s] || !1,
                onChange: t.handleChange,
                onBlur: t.handleBlur,
                disabled: r.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: x })
          ] }),
          t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
        ] });
      }
      return M > 1 && M <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([n, x]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  name: s,
                  value: n,
                  checked: Array.isArray(t.values[s]) ? t.values[s]?.includes(n) : !1,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: r.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : M > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: A,
            ref: i,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[s]?.length > 0 ? t.values[s].join(", ") : `Select ${r.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (n) => {
                      p(n.target.value), d(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 ? _.map(([n, x], N) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : u === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${s}-${n}`,
                          type: "checkbox",
                          name: s,
                          value: n,
                          checked: Array.isArray(t.values[s]) ? t.values[s]?.includes(n) : !1,
                          onChange: t.handleChange,
                          onBlur: t.handleBlur,
                          disabled: r.disabled,
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        }
                      ),
                      x
                    ]
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : null;
    }
    case "tags": {
      const n = Array.isArray(t.values[s]) ? t.values[s] : [], x = Array.isArray(v) ? v : Object.entries(v || {}).map(([E, k]) => ({ value: E, label: k })), N = (E) => {
        E && !n.includes(E) && t.setFieldValue(s, [...n, E]);
      }, O = (E) => {
        (E.key === "Enter" || E.key === ",") && (E.preventDefault(), N(o), p(""));
      }, P = (E) => {
        t.setFieldValue(
          s,
          n.filter((k) => k !== E)
        );
      }, F = (E) => x.find((k) => k.value === E)?.label || E, q = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !r.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((E) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(q, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: F(E) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${F(E)}`,
                        onClick: (k) => {
                          k.stopPropagation(), r.disabled || P(E);
                        },
                        onMouseDown: (k) => k.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                E
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: o,
                  onChange: (E) => p(E.target.value),
                  onKeyDown: O,
                  placeholder: n.length === 0 ? r.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: r.disabled
                }
              )
            ]
          }
        ),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${I} ${j} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => l(!0),
              name: s,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${h ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    case "json": {
      let n = t.values[s];
      if (typeof n == "object" && n !== null) {
        const O = JSON.stringify(n, null, 2);
        t.setFieldValue(s, O, !1), n = O;
      }
      const x = n || "", N = (O) => {
        t.setFieldValue(s, O.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: x,
              onChange: N,
              onBlur: t.handleBlur,
              placeholder: r.placeholder || "Enter valid JSON",
              disabled: r.disabled,
              className: `${I} ${j} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${h ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${I} ${j} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${h ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
  }
}
function ye({ title: r, children: t, isFirst: f }) {
  const [c, h] = U(f);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => h(!c),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${c ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${c ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${c ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${c ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: t }) })
      }
    )
  ] }) });
}
function fe({
  title: r,
  groupedFields: t,
  data: f,
  onSubmit: c = (m) => {
  },
  onCancel: h = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const m = {}, o = {};
  Object.entries(t).forEach(([u, d]) => {
    K(d, m, o);
  }), f && Object.keys(f).length > 0 && Object.keys(f).forEach((u) => {
    u in m && (m[u] = f[u]);
  });
  const p = J({
    initialValues: m,
    enableReinitialize: !0,
    validationSchema: T.object().shape(o),
    onSubmit: (u) => {
      c(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: p.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([u, d], b) => /* @__PURE__ */ e.jsx(ye, { title: u, isFirst: b === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((i) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(i.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { components: v, field: i, formik: p, methods: l }, i.name)
      },
      i?.name ?? `field-${b}`
    )) }) }, u)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ve({
  title: r,
  groupedFields: t,
  data: f,
  onSubmit: c = (o) => {
  },
  onCancel: h = () => {
  },
  methods: l = {},
  components: v = {},
  widget: m
}) {
  const o = Object.keys(t), [p, u] = H.useState(0), d = {}, b = {}, i = {};
  m ? Object.entries(t).forEach(([j, w]) => {
    const z = {};
    K(w, b, z), d[j] = z;
  }) : Object.entries(t).forEach(([j, w]) => {
    K(w, b, i);
  }), f && Object.keys(f).length > 0 && Object.keys(f).forEach((j) => {
    j in b && (b[j] = f[j]);
  });
  const y = o[p] ?? null, S = y && d[y] ? d[y] : {}, A = J({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: T.object().shape(m ? S : i),
    onSubmit: (j) => {
      m ? (p < o.length - 1 && u((w) => w + 1), p === o.length - 1 && c(j)) : c(j);
    }
  }), s = async (j) => {
    if (j.preventDefault(), !m) {
      const w = await A.validateForm();
      if (Object.keys(w).length > 0) {
        alert("Please fill all required fields before submitting."), A.setTouched(
          Object.keys(w).reduce((z, M) => ({ ...z, [M]: !0 }), {})
        );
        return;
      }
    }
    A.handleSubmit(j);
  }, I = () => {
    u((j) => j > 0 ? j - 1 : j);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: o.map((j, w) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => u(w),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${p === w ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: j })
      },
      j
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: s, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: y && t[y]?.map((j, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${Z[ee(Number(j.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(te, { field: j, formik: A, methods: l, components: v }, j.name)
              },
              j?.name ?? `field-${w}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${p > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              p > 0 && /* @__PURE__ */ e.jsx("button", { onClick: I, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: h, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: m ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                p + 1,
                " of ",
                o.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: o.map((j, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${w === p ? "bg-action w-6" : "bg-gray-300"}`
              },
              w
            )) })
          ] }) })
        ]
      },
      o[p]
    )
  ] });
}
function je({
  title: r,
  groupedFields: t,
  data: f,
  onSubmit: c = (m) => {
  },
  onCancel: h = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const m = Object.values(t).flat(), o = {}, p = {};
  Object.entries(t).forEach(([d, b]) => {
    K(b, o, p);
  }), f && Object.keys(f).length > 0 && Object.keys(f).forEach((d) => {
    d in o && (o[d] = f[d]);
  });
  const u = J({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: T.object().shape(p),
    onSubmit: (d) => {
      c(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((d, b) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(d.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { components: v, field: d, formik: u, methods: l }, d.name)
      },
      d?.name ?? `field-${b}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ne({ title: r, children: t }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
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
function we({
  title: r,
  groupedFields: t,
  data: f,
  onSubmit: c = (m) => {
  },
  onCancel: h = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const m = {}, o = {};
  Object.entries(t).forEach(([u, d]) => {
    K(d, m, o);
  }), f && Object.keys(f).length > 0 && Object.keys(f).forEach((u) => {
    u in m && (m[u] = f[u]);
  });
  const p = J({
    initialValues: m,
    enableReinitialize: !0,
    validationSchema: T.object().shape(o),
    onSubmit: (u) => {
      c(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: p.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([u, d], b) => /* @__PURE__ */ e.jsx(Ne, { title: u, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((i) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(i.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { components: v, field: i, formik: p, methods: l }, i.name)
      },
      i?.name ?? `field-${b}`
    )) }) }, u)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Re({
  formJson: r = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: f = null,
  onCancel: c = () => {
  },
  components: h = {}
}) {
  const l = be(r), v = ge(r?.fields ?? {}), [m, o] = H.useState({});
  H.useEffect(() => {
    let d = !0;
    return (async () => {
      const i = r?.source ?? {};
      if (!i?.type) {
        d && o({});
        return;
      }
      if (i.type === "method") {
        const y = i.method, S = y ? t[y] : void 0;
        if (S)
          try {
            const A = await Promise.resolve(S());
            d && o(A ?? {});
          } catch (A) {
            console.error("Method execution failed:", A), d && o({});
          }
        else
          d && o({});
      }
      if (i.type === "api")
        try {
          const y = await L({
            method: i.method || "GET",
            url: i.url,
            data: i.body ?? {},
            params: i.params ?? {},
            headers: i.headers ?? {}
          });
          d && o(y.data ?? {});
        } catch (y) {
          console.error("API fetch failed:", y), d && o({});
        }
      if (i.type === "sql") {
        const y = r.endPoints;
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const S = await L({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), A = await L({
            method: "POST",
            url: y.baseURL + y.dbopsGetRefId,
            data: {
              operation: y.operation,
              source: i,
              fields: r.fields,
              datahash: S.data.refhash
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), s = await L({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: A.data.refid,
              datahash: S.data.refhash
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          d && o(s.data?.data ?? {});
        } catch (S) {
          console.error("API fetch failed:", S);
        }
      }
    })(), () => {
      d = !1;
    };
  }, [
    f,
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params ?? {}),
    JSON.stringify(r?.source?.body ?? {}),
    JSON.stringify(r?.source?.headers ?? {})
  ]);
  const p = async (d) => {
    const b = r?.source ?? {};
    if (b.type === "method") {
      const i = b.method, y = i ? t[i] : void 0;
      if (y)
        try {
          await Promise.resolve(y(d));
        } catch (S) {
          console.error("Method execution failed:", S);
        }
    }
    if (b.type === "api")
      try {
        await L({
          method: b.method || "POST",
          url: b.url,
          data: d ?? {},
          params: b.params ?? {},
          headers: b.headers ?? {}
        });
      } catch (i) {
        console.error("API fetch failed:", i);
      }
    if (b.type === "sql") {
      const i = r.endPoints;
      if (console.log("dbOpsUrls", i), !i) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const y = await L({
          method: "GET",
          url: i.baseURL + i.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${i?.accessToken}`
          }
        }), S = await L({
          method: "POST",
          url: i.baseURL + i.dbopsGetRefId,
          data: {
            operation: i.operation,
            source: b,
            fields: r.fields,
            datahash: y.data.refhash
          },
          headers: {
            Authorization: `Bearer ${i?.accessToken}`
          }
        });
        await L({
          method: "POST",
          url: i.baseURL + i.dbopsRunQuery,
          data: {
            refid: S.data.refid,
            fields: d,
            datahash: y.data.refhash
          },
          headers: {
            Authorization: `Bearer ${i?.accessToken}`
          }
        });
      } catch (y) {
        console.error("API fetch failed:", y);
      }
    }
  }, u = {
    accordion: /* @__PURE__ */ e.jsx(
      fe,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: m,
        onSubmit: p,
        onCancel: c,
        methods: t,
        components: h
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      we,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: m,
        onSubmit: p,
        onCancel: c,
        methods: t,
        components: h
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      ve,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: m,
        onSubmit: p,
        onCancel: c,
        methods: t,
        components: h,
        widget: r?.widget
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      je,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: m,
        onSubmit: p,
        onCancel: c,
        methods: t,
        components: h
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: u[l] ?? u.simple });
}
export {
  Re as LogiksForm,
  Re as default
};
