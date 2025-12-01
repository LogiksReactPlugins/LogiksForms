import G, { useState as V, useRef as le, useEffect as oe, useMemo as me } from "react";
import se from "axios";
import * as $ from "yup";
import { useFormik as X } from "formik";
var J = { exports: {} }, W = {};
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
function he() {
  if (ie) return W;
  ie = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function g(i, u, l) {
    var v = null;
    if (l !== void 0 && (v = "" + l), u.key !== void 0 && (v = "" + u.key), "key" in u) {
      l = {};
      for (var h in u)
        h !== "key" && (l[h] = u[h]);
    } else l = u;
    return u = l.ref, {
      $$typeof: r,
      type: i,
      key: v,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return W.Fragment = t, W.jsx = g, W.jsxs = g, W;
}
var U = {};
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
function xe() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function r(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === n ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case R:
          return "Fragment";
        case s:
          return "Profiler";
        case P:
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
          case O:
            return "Portal";
          case f:
            return (a.displayName || "Context") + ".Provider";
          case I:
            return (a._context.displayName || "Context") + ".Consumer";
          case N:
            var b = a.render;
            return a = a.displayName, a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case A:
            return b = a.displayName || null, b !== null ? b : r(a.type) || "Memo";
          case H:
            b = a._payload, a = a._init;
            try {
              return r(a(b));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function g(a) {
      try {
        t(a);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var S = b.error, T = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return S.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), t(a);
      }
    }
    function i(a) {
      if (a === R) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === H)
        return "<...>";
      try {
        var b = r(a);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var a = m.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function v(a) {
      if (j.call(a, "key")) {
        var b = Object.getOwnPropertyDescriptor(a, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function h(a, b) {
      function S() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: S,
        configurable: !0
      });
    }
    function o() {
      var a = r(this.type);
      return q[a] || (q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function x(a, b, S, T, L, D, te, re) {
      return S = D.ref, a = {
        $$typeof: p,
        type: a,
        key: b,
        props: D,
        _owner: L
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: te
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, b, S, T, L, D, te, re) {
      var C = b.children;
      if (C !== void 0)
        if (T)
          if (E(C)) {
            for (T = 0; T < C.length; T++)
              c(C[T]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(C);
      if (j.call(b, "key")) {
        C = r(a);
        var B = Object.keys(b).filter(function(ue) {
          return ue !== "key";
        });
        T = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", ne[C + T] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          C,
          B,
          C
        ), ne[C + T] = !0);
      }
      if (C = null, S !== void 0 && (g(S), C = "" + S), v(b) && (g(b.key), C = "" + b.key), "key" in b) {
        S = {};
        for (var ae in b)
          ae !== "key" && (S[ae] = b[ae]);
      } else S = b;
      return C && h(
        S,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), x(
        a,
        C,
        D,
        L,
        u(),
        S,
        te,
        re
      );
    }
    function c(a) {
      typeof a == "object" && a !== null && a.$$typeof === p && a._store && (a._store.validated = 1);
    }
    var y = G, p = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), f = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), n = Symbol.for("react.client.reference"), m = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, E = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var F, q = {}, w = y["react-stack-bottom-frame"].bind(
      y,
      l
    )(), _ = k(i(l)), ne = {};
    U.Fragment = R, U.jsx = function(a, b, S, T, L) {
      var D = 1e4 > m.recentlyCreatedOwnerStacks++;
      return d(
        a,
        b,
        S,
        !1,
        T,
        L,
        D ? Error("react-stack-top-frame") : w,
        D ? k(i(a)) : _
      );
    }, U.jsxs = function(a, b, S, T, L) {
      var D = 1e4 > m.recentlyCreatedOwnerStacks++;
      return d(
        a,
        b,
        S,
        !0,
        T,
        L,
        D ? Error("react-stack-top-frame") : w,
        D ? k(i(a)) : _
      );
    };
  }()), U;
}
var de;
function pe() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? J.exports = he() : J.exports = xe()), J.exports;
}
var e = pe();
function be(r) {
  return r.template === "accordion" ? "accordion" : r.template === "simple" ? "simple" : r.template === "cards" ? "cards" : Object.values(r.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function ge(r) {
  const t = {}, g = "General";
  return Object.entries(r).forEach(([i, u]) => {
    const l = u.group || g;
    t[l] || (t[l] = []), t[l].push({ name: i, ...u });
  }), t;
}
const K = (r, t, g) => {
  r.forEach((i) => {
    const u = i?.name;
    if (!u) return;
    i?.type === "checkbox" ? t[u] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? t[u] = [] : u === "blocked" || u === "blacklist" ? t[u] = "false" : t[u] = "";
    let l;
    i?.type === "checkbox" ? l = i?.multiple === !0 ? $.array().of($.string()) : $.boolean() : i?.type === "tags" ? l = $.array().of($.string()) : i?.type === "email" ? l = $.string().email("Invalid email format") : i?.type === "number" ? l = $.number().typeError("Must be a number") : i?.type === "date" ? l = $.date().typeError("Invalid date format") : i?.type === "json" ? (t[u] = "", l = $.string().test("is-json", "Invalid JSON format", (v) => {
      if (!v) return !0;
      try {
        return JSON.parse(v), !0;
      } catch {
        return !1;
      }
    })) : l = $.string(), i?.required && (l = l.required(
      i?.placeholder || i?.error_message || `${i?.label || u} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (l = l.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([v, h]) => {
      switch (v) {
        case "email":
          h && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(h),
            `Must match pattern: ${h}`
          );
          break;
        case "date":
          l = $.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((o, x) => {
            if (typeof x == "string") {
              const d = x.replace(/-/g, "/"), [c, y, p] = d.split("/");
              if (c && y && p)
                return /* @__PURE__ */ new Date(`${p}-${y}-${c}`);
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
          l = $.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = $.number().typeError("Must be a decimal").transform((o, x) => {
            if (x == null || x === "") return;
            const d = Number(x);
            if (isNaN(d)) return o;
            if (typeof o == "number" && !isNaN(o)) {
              const c = Number(o);
              return Number.isInteger(c) ? Number(d.toFixed(c)) : d;
            }
            return d;
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
          const o = Number(h);
          isNaN(o) || (l = l.min(o, `Minimum length is ${o}`));
          break;
        }
        case "length-max": {
          const o = Number(h);
          isNaN(o) || (l = l.max(o, `Maximum length is ${o}`));
          break;
        }
      }
    }), g[u] = l;
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
function Q(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
function ee({ field: r, formik: t, methods: g = {}, components: i }) {
  const [u, l] = V(!1), [v, h] = V(r.options || {}), [o, x] = V(""), [d, c] = V(0), y = le(null), p = le(null), [O, R] = V(!1), P = (n) => {
    n.currentTarget.open || x("");
  };
  oe(() => {
    const n = (m) => {
      p.current && !p.current.contains(m.target) && (p.current.open = !1, x(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const s = r.name;
  G.useEffect(() => {
    let n = !0;
    return (async () => {
      if (r?.options) {
        h(r.options);
        return;
      }
      const j = r?.source ?? {};
      if (j.type === "method") {
        const E = j.method, k = E ? g[E] : void 0;
        if (k)
          try {
            const F = await Promise.resolve(k());
            n && h(F ?? {});
          } catch (F) {
            console.error("Method execution failed:", F), n && h({});
          }
        else
          n && h({});
      }
      if (j.type === "api" && j.url)
        try {
          const E = await se({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), k = r.valueKey || "value", F = r.labelKey || "label", q = Array.isArray(E.data?.data) ? E.data.data : [], w = {};
          q.forEach((_) => {
            w[_[k]] = _[F];
          }), n && h(w);
        } catch (E) {
          console.error("API execution failed:", E), n && h({});
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
  `, f = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, z = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, M = Object.keys(v || {}).length, A = me(() => Object.entries(v || {}).filter(
    ([, n]) => o ? n.toLowerCase().includes(o.toLowerCase()) : !0
  ), [o, v]), H = (n) => {
    if (O) {
      if (n.key === "ArrowDown" && (n.preventDefault(), c(
        (m) => m + 1 < A.length ? m + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), c(
        (m) => m - 1 >= 0 ? m - 1 : A.length - 1
      )), n.key === "Enter") {
        n.preventDefault(), console.log("filteredOptions[highlightedIndex]", A[d]);
        const [m, j] = A[d] || [];
        m && (x(j ?? ""), t.setFieldValue(s, m)), R(!1);
      }
      n.key === "Escape" && R(!1);
    }
  }, Y = (n) => {
    if (p.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), c(
          (m) => m + 1 < A.length ? m + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), c(
          (m) => m - 1 >= 0 ? m - 1 : A.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [m] = A[d] || [];
        if (m) {
          let j = r.type === "select" || r.type === "dataSelector" || r.type === "dataMethod";
          t.setFieldValue(r.name, j ? m : [...t.values[r.name], m]), p.current.open = !1;
        }
      } else n.key === "Escape" && (p.current.open = !1, x(""));
  };
  switch (oe(() => {
    y.current?.querySelector(
      `[data-index="${d}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [d]), r.type) {
    case "autocomplete": {
      const n = (j) => {
        const E = j.target.value;
        x(E), t.setFieldValue(s, E), R(!0);
      }, m = (j, E) => {
        x(E), t.setFieldValue(s, j), R(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${I} ${f}`,
            value: t.values[s],
            placeholder: r.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => R(!0),
            onBlur: () => setTimeout(() => R(!1), 150),
            onKeyDown: H
          }
        ),
        O && /* @__PURE__ */ e.jsx("div", { ref: y, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: A.length > 0 ? A.map(([j, E], k) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": k,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${d === k ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => m(j, E),
            children: E
          },
          k
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
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${I} ${f} min-h-[120px] resize-none`,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataMethod":
      return M > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: P,
            ref: p,
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
              /* @__PURE__ */ e.jsxs("div", { ref: y, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (n) => {
                      x(n.target.value), c(0);
                    },
                    onKeyDown: Y,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([n, m], j) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": j,
                    onClick: () => t.setFieldValue(s, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: m
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${I} ${f} appearance-none cursor-pointer pr-12`,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: r.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r.placeholder }),
                Object.entries(v || {}).map(([n, m]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: m }, n))
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
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${M > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([n, m]) => /* @__PURE__ */ e.jsxs(
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
              m
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] });
    case "component":
      return i?.[s];
    case "checkbox": {
      if (M === 1) {
        const [n, m] = Object.entries(v || {})[0] || [s, r.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: m })
          ] }),
          t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
        ] });
      }
      return M > 1 && M <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([n, m]) => /* @__PURE__ */ e.jsxs(
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
              m
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : M > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: P,
            ref: p,
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
              /* @__PURE__ */ e.jsxs("div", { ref: y, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: o,
                    onChange: (n) => {
                      x(n.target.value), c(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([n, m], j) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
                      m
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
      const n = Array.isArray(t.values[s]) ? t.values[s] : [], m = Array.isArray(v) ? v : Object.entries(v || {}).map(([w, _]) => ({ value: w, label: _ })), j = (w) => {
        w && !n.includes(w) && t.setFieldValue(s, [...n, w]);
      }, E = (w) => {
        (w.key === "Enter" || w.key === ",") && (w.preventDefault(), j(o), x(""));
      }, k = (w) => {
        t.setFieldValue(
          s,
          n.filter((_) => _ !== w)
        );
      }, F = (w) => m.find((_) => _.value === w)?.label || w, q = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !r.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((w) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(q, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: F(w) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${F(w)}`,
                        onClick: (_) => {
                          _.stopPropagation(), r.disabled || k(w);
                        },
                        onMouseDown: (_) => _.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                w
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: o,
                  onChange: (w) => x(w.target.value),
                  onKeyDown: E,
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
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${I} ${f} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => l(!0),
              name: s,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    case "json": {
      let n = t.values[s];
      if (typeof n == "object" && n !== null) {
        const E = JSON.stringify(n, null, 2);
        t.setFieldValue(s, E, !1), n = E;
      }
      const m = n || "", j = (E) => {
        t.setFieldValue(s, E.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: m,
              value: m,
              onChange: j,
              onBlur: t.handleBlur,
              placeholder: r.placeholder || "Enter valid JSON",
              disabled: r.disabled,
              className: `${I} ${f} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${I} ${f} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => l(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
  }
}
function ye({ title: r, children: t, isFirst: g }) {
  const [i, u] = V(g);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => u(!i),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${i ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: t }) })
      }
    )
  ] }) });
}
function ve({
  title: r,
  groupedFields: t,
  data: g,
  onSubmit: i = (h) => {
  },
  onCancel: u = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const h = {}, o = {};
  Object.entries(t).forEach(([d, c]) => {
    K(c, h, o);
  }), g && Object.keys(g).length > 0 && Object.keys(g).forEach((d) => {
    d in h && (h[d] = g[d]);
  });
  const x = X({
    initialValues: h,
    enableReinitialize: !0,
    validationSchema: $.object().shape(o),
    onSubmit: (d) => {
      i(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, c], y) => /* @__PURE__ */ e.jsx(ye, { title: d, isFirst: y === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((p) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[Q(Number(p.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(ee, { components: v, field: p, formik: x, methods: l }, p.name)
      },
      p?.name ?? `field-${y}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function fe({
  title: r,
  groupedFields: t,
  data: g,
  onSubmit: i = (o) => {
  },
  onCancel: u = () => {
  },
  methods: l = {},
  components: v = {},
  widget: h
}) {
  const o = Object.keys(t), [x, d] = G.useState(0), c = {}, y = {}, p = {};
  h ? Object.entries(t).forEach(([f, N]) => {
    const z = {};
    K(N, y, z), c[f] = z;
  }) : Object.entries(t).forEach(([f, N]) => {
    K(N, y, p);
  }), g && Object.keys(g).length > 0 && Object.keys(g).forEach((f) => {
    f in y && (y[f] = g[f]);
  });
  const O = o[x] ?? null, R = O && c[O] ? c[O] : {}, P = X({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: $.object().shape(h ? R : p),
    onSubmit: (f) => {
      h ? (x < o.length - 1 && d((N) => N + 1), x === o.length - 1 && i(f)) : i(f);
    }
  }), s = async (f) => {
    if (f.preventDefault(), !h) {
      const N = await P.validateForm();
      if (Object.keys(N).length > 0) {
        alert("Please fill all required fields before submitting."), P.setTouched(
          Object.keys(N).reduce((z, M) => ({ ...z, [M]: !0 }), {})
        );
        return;
      }
    }
    P.handleSubmit(f);
  }, I = () => {
    d((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: o.map((f, N) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => d(N),
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
          /* @__PURE__ */ e.jsxs("form", { onSubmit: s, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: O && t[O]?.map((f, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${Z[Q(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(ee, { field: f, formik: P, methods: l, components: v }, f.name)
              },
              f?.name ?? `field-${N}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${x > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              x > 0 && /* @__PURE__ */ e.jsx("button", { onClick: I, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: u, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: h ? "Next" : "Save" })
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
function je({
  title: r,
  groupedFields: t,
  data: g,
  onSubmit: i = (h) => {
  },
  onCancel: u = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const h = Object.values(t).flat(), o = {}, x = {};
  Object.entries(t).forEach(([c, y]) => {
    K(y, o, x);
  }), g && Object.keys(g).length > 0 && Object.keys(g).forEach((c) => {
    c in o && (o[c] = g[c]);
  });
  const d = X({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: $.object().shape(x),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: d.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((c, y) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[Q(Number(c.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(ee, { components: v, field: c, formik: d, methods: l }, c.name)
      },
      c?.name ?? `field-${y}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
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
  data: g,
  onSubmit: i = (h) => {
  },
  onCancel: u = () => {
  },
  methods: l = {},
  components: v = {}
}) {
  const h = {}, o = {};
  Object.entries(t).forEach(([d, c]) => {
    K(c, h, o);
  }), g && Object.keys(g).length > 0 && Object.keys(g).forEach((d) => {
    d in h && (h[d] = g[d]);
  });
  const x = X({
    initialValues: h,
    enableReinitialize: !0,
    validationSchema: $.object().shape(o),
    onSubmit: (d) => {
      i(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, c], y) => /* @__PURE__ */ e.jsx(Ne, { title: d, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((p) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[Q(Number(p.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(ee, { components: v, field: p, formik: x, methods: l }, p.name)
      },
      p?.name ?? `field-${y}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Re({
  formJson: r = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: g = null,
  onCancel: i = () => {
  },
  components: u = {}
}) {
  const l = be(r), v = ge(r?.fields ?? {}), [h, o] = G.useState({});
  G.useEffect(() => {
    let c = !0;
    return (async () => {
      const p = r?.source ?? {};
      if (!p?.type) {
        c && o({});
        return;
      }
      if (p.type === "method") {
        const O = p.method, R = O ? t[O] : void 0;
        if (R)
          try {
            const P = await Promise.resolve(R());
            c && o(P ?? {});
          } catch (P) {
            console.error("Method execution failed:", P), c && o({});
          }
        else
          c && o({});
      }
      if (p.type === "api")
        try {
          const O = await se({
            method: p.method || "GET",
            url: p.url,
            data: p.body ?? {},
            params: p.params ?? {},
            headers: p.headers ?? {}
          });
          c && o(O.data ?? {});
        } catch (O) {
          console.error("API fetch failed:", O), c && o({});
        }
    })(), () => {
      c = !1;
    };
  }, [
    g,
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params ?? {}),
    JSON.stringify(r?.source?.body ?? {}),
    JSON.stringify(r?.source?.headers ?? {})
  ]);
  const x = async (c) => {
    const y = r?.source ?? {};
    if (y.type === "method") {
      const p = y.method, O = p ? t[p] : void 0;
      if (O)
        try {
          await Promise.resolve(O(c));
        } catch (R) {
          console.error("Method execution failed:", R);
        }
    }
    if (y.type === "api")
      try {
        await se({
          method: y.method || "POST",
          url: y.url,
          data: c ?? {},
          params: y.params ?? {},
          headers: y.headers ?? {}
        });
      } catch (p) {
        console.error("API fetch failed:", p);
      }
  }, d = {
    accordion: /* @__PURE__ */ e.jsx(
      ve,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: h,
        onSubmit: x,
        onCancel: i,
        methods: t,
        components: u
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      we,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: h,
        onSubmit: x,
        onCancel: i,
        methods: t,
        components: u
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      fe,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: h,
        onSubmit: x,
        onCancel: i,
        methods: t,
        components: u,
        widget: r?.widget
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      je,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: h,
        onSubmit: x,
        onCancel: i,
        methods: t,
        components: u
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: d[l] ?? d.simple });
}
export {
  Re as LogiksForm,
  Re as default
};
