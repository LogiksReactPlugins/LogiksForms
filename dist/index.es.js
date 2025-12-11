import K, { useState as Y, useRef as le, useEffect as oe, useMemo as he } from "react";
import q from "axios";
import * as $ from "yup";
import { useFormik as Z } from "formik";
var X = { exports: {} }, W = {};
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
  if (ie) return W;
  ie = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function b(i, x, l) {
    var E = null;
    if (l !== void 0 && (E = "" + l), x.key !== void 0 && (E = "" + x.key), "key" in x) {
      l = {};
      for (var v in x)
        v !== "key" && (l[v] = x[v]);
    } else l = x;
    return x = l.ref, {
      $$typeof: r,
      type: i,
      key: E,
      ref: x !== void 0 ? x : null,
      props: l
    };
  }
  return W.Fragment = t, W.jsx = b, W.jsxs = b, W;
}
var H = {};
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
        return a.$$typeof === G ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case k:
          return "Profiler";
        case T:
          return "StrictMode";
        case N:
          return "Suspense";
        case L:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case c:
            return "Portal";
          case F:
            return (a.displayName || "Context") + ".Provider";
          case s:
            return (a._context.displayName || "Context") + ".Consumer";
          case j:
            var f = a.render;
            return a = a.displayName, a || (a = f.displayName || f.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case D:
            return f = a.displayName || null, f !== null ? f : r(a.type) || "Memo";
          case C:
            f = a._payload, a = a._init;
            try {
              return r(a(f));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function b(a) {
      try {
        t(a);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var R = f.error, A = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return R.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(a);
      }
    }
    function i(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === C)
        return "<...>";
      try {
        var f = r(a);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function x() {
      var a = n.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function E(a) {
      if (p.call(a, "key")) {
        var f = Object.getOwnPropertyDescriptor(a, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function v(a, f) {
      function R() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: R,
        configurable: !0
      });
    }
    function o() {
      var a = r(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function h(a, f, R, A, B, z, ae, se) {
      return R = z.ref, a = {
        $$typeof: y,
        type: a,
        key: f,
        props: z,
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
        value: ae
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, f, R, A, B, z, ae, se) {
      var _ = f.children;
      if (_ !== void 0)
        if (A)
          if (w(_)) {
            for (A = 0; A < _.length; A++)
              u(_[A]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(_);
      if (p.call(f, "key")) {
        _ = r(a);
        var V = Object.keys(f).filter(function(ue) {
          return ue !== "key";
        });
        A = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", P[_ + A] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          _,
          V,
          _
        ), P[_ + A] = !0);
      }
      if (_ = null, R !== void 0 && (b(R), _ = "" + R), E(f) && (b(f.key), _ = "" + f.key), "key" in f) {
        R = {};
        for (var ne in f)
          ne !== "key" && (R[ne] = f[ne]);
      } else R = f;
      return _ && v(
        R,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), h(
        a,
        _,
        z,
        B,
        x(),
        R,
        ae,
        se
      );
    }
    function u(a) {
      typeof a == "object" && a !== null && a.$$typeof === y && a._store && (a._store.validated = 1);
    }
    var d = K, y = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), F = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), n = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, w = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var I, M = {}, U = d["react-stack-bottom-frame"].bind(
      d,
      l
    )(), S = O(i(l)), P = {};
    H.Fragment = g, H.jsx = function(a, f, R, A, B) {
      var z = 1e4 > n.recentlyCreatedOwnerStacks++;
      return m(
        a,
        f,
        R,
        !1,
        A,
        B,
        z ? Error("react-stack-top-frame") : U,
        z ? O(i(a)) : S
      );
    }, H.jsxs = function(a, f, R, A, B) {
      var z = 1e4 > n.recentlyCreatedOwnerStacks++;
      return m(
        a,
        f,
        R,
        !0,
        A,
        B,
        z ? Error("react-stack-top-frame") : U,
        z ? O(i(a)) : S
      );
    };
  }()), H;
}
var de;
function xe() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? X.exports = me() : X.exports = pe()), X.exports;
}
var e = xe();
function be(r) {
  return r.template === "accordion" ? "accordion" : r.template === "simple" ? "simple" : r.template === "cards" ? "cards" : Object.values(r.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function ge(r) {
  const t = {}, b = "General";
  return Object.entries(r).forEach(([i, x]) => {
    const l = x.group || b;
    t[l] || (t[l] = []), t[l].push({ name: i, ...x });
  }), t;
}
function fe(r) {
  const t = {};
  return Object.keys(r).forEach((b) => {
    t[b] = {
      label: b,
      required: r[b].required ?? !1
    };
  }), t;
}
const Q = (r, t, b) => {
  r.forEach((i) => {
    const x = i?.name;
    if (!x) return;
    i?.type === "checkbox" ? t[x] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? t[x] = [] : x === "blocked" || x === "blacklist" ? t[x] = "false" : t[x] = "";
    let l;
    i?.type === "checkbox" ? l = i?.multiple === !0 ? $.array().of($.string()) : $.boolean() : i?.type === "tags" ? l = $.array().of($.string()) : i?.type === "email" ? l = $.string().email("Invalid email format") : i?.type === "number" ? l = $.number().typeError("Must be a number") : i?.type === "date" ? l = $.date().typeError("Invalid date format") : i?.type === "json" ? (t[x] = "", l = $.string().test("is-json", "Invalid JSON format", (E) => {
      if (!E) return !0;
      try {
        return JSON.parse(E), !0;
      } catch {
        return !1;
      }
    })) : l = $.string(), i?.required && (l = l.required(
      i?.placeholder || i?.error_message || `${i?.label || x} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (l = l.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([E, v]) => {
      switch (E) {
        case "email":
          v && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(v),
            `Must match pattern: ${v}`
          );
          break;
        case "date":
          l = $.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((o, h) => {
            if (typeof h == "string") {
              const m = h.replace(/-/g, "/"), [u, d, y] = m.split("/");
              if (u && d && y)
                return /* @__PURE__ */ new Date(`${y}-${d}-${u}`);
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
          l = $.number().typeError("Must be a decimal").transform((o, h) => {
            if (h == null || h === "") return;
            const m = Number(h);
            if (isNaN(m)) return o;
            if (typeof o == "number" && !isNaN(o)) {
              const u = Number(o);
              return Number.isInteger(u) ? Number(m.toFixed(u)) : m;
            }
            return m;
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
          const o = Number(v);
          isNaN(o) || (l = l.min(o, `Minimum length is ${o}`));
          break;
        }
        case "length-max": {
          const o = Number(v);
          isNaN(o) || (l = l.max(o, `Maximum length is ${o}`));
          break;
        }
      }
    }), b[x] = l;
  });
}, J = {
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
function te({ field: r, formik: t, methods: b = {}, components: i, sqlOpsUrls: x }) {
  const [l, E] = Y(!1), [v, o] = Y(r.options || {}), [h, m] = Y(""), [u, d] = Y(0), y = le(null), c = le(null), [g, T] = Y(!1), k = (n) => {
    n.currentTarget.open || m("");
  };
  oe(() => {
    const n = (p) => {
      c.current && !c.current.contains(p.target) && (c.current.open = !1, m(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const s = r.name;
  K.useEffect(() => {
    let n = !0;
    return (async () => {
      if (r?.options) {
        o(r.options);
        return;
      }
      const w = r?.source ?? {};
      if (w.type === "method") {
        const O = w.method, I = O ? b[O] : void 0;
        if (I)
          try {
            const M = await Promise.resolve(I());
            n && o(M ?? {});
          } catch (M) {
            console.error("Method execution failed:", M), n && o({});
          }
        else
          n && o({});
      }
      if (w.type === "api" && w.url)
        try {
          const O = await q({
            method: w.method || "GET",
            url: w.url,
            data: w.body ?? {},
            params: w.params ?? {},
            headers: w.headers ?? {}
          }), I = r.valueKey || "value", M = r.labelKey || "label", U = Array.isArray(O.data?.data) ? O.data.data : [], S = {};
          U.forEach((P) => {
            S[P[I]] = P[M];
          }), n && o(S);
        } catch (O) {
          console.error("API execution failed:", O), n && o({});
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
  const F = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, j = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, L = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, D = Object.keys(v || {}).length, C = he(() => Object.entries(v || {}).filter(
    ([, n]) => h ? n.toLowerCase().includes(h.toLowerCase()) : !0
  ), [h, v]), re = (n) => {
    if (g) {
      if (n.key === "ArrowDown" && (n.preventDefault(), d(
        (p) => p + 1 < C.length ? p + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), d(
        (p) => p - 1 >= 0 ? p - 1 : C.length - 1
      )), n.key === "Enter") {
        n.preventDefault(), console.log("filteredOptions[highlightedIndex]", C[u]);
        const [p, w] = C[u] || [];
        p && (m(w ?? ""), t.setFieldValue(s, p)), T(!1);
      }
      n.key === "Escape" && T(!1);
    }
  }, G = (n) => {
    if (c.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), d(
          (p) => p + 1 < C.length ? p + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), d(
          (p) => p - 1 >= 0 ? p - 1 : C.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [p] = C[u] || [];
        if (p) {
          let w = r.type === "select" || r.type === "dataSelector" || r.type === "dataMethod";
          t.setFieldValue(r.name, w ? p : [...t.values[r.name], p]), c.current.open = !1;
        }
      } else n.key === "Escape" && (c.current.open = !1, m(""));
  };
  switch (oe(() => {
    y.current?.querySelector(
      `[data-index="${u}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [u]), r.type) {
    case "autocomplete": {
      const n = (w) => {
        const O = w.target.value;
        m(O), t.setFieldValue(s, O), T(!0);
      }, p = (w, O) => {
        m(O), t.setFieldValue(s, w), T(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${F} ${j}`,
            value: t.values[s],
            placeholder: r.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => T(!0),
            onBlur: () => setTimeout(() => T(!1), 150),
            onKeyDown: re
          }
        ),
        g && /* @__PURE__ */ e.jsx("div", { ref: y, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: C.length > 0 ? C.map(([w, O], I) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": I,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${u === I ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => p(w, O),
            children: O
          },
          I
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          h,
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
              className: `${F} ${j} min-h-[120px] resize-none`,
              onFocus: () => E(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataMethod":
      return D > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: k,
            ref: c,
            onKeyDown: G,
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
                    value: h,
                    onChange: (n) => {
                      m(n.target.value), d(0);
                    },
                    onKeyDown: G,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                C.length > 0 ? C.map(([n, p], w) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": w,
                    onClick: () => t.setFieldValue(s, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : u === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: p
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
              className: `${F} ${j} appearance-none cursor-pointer pr-12`,
              onFocus: () => E(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: r.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r.placeholder }),
                Object.entries(v || {}).map(([n, p]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: p }, n))
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
        /* @__PURE__ */ e.jsx("div", { className: `flex ${D > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([n, p]) => /* @__PURE__ */ e.jsxs(
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
              p
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] });
    case "component":
      return i?.[s];
    case "checkbox": {
      if (D === 1) {
        const [n, p] = Object.entries(v || {})[0] || [s, r.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: p })
          ] }),
          t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
        ] });
      }
      return D > 1 && D <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([n, p]) => /* @__PURE__ */ e.jsxs(
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
              p
            ]
          },
          n
        )) }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[s]) })
      ] }) : D > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: k,
            ref: c,
            onKeyDown: G,
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
                    value: h,
                    onChange: (n) => {
                      m(n.target.value), d(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                C.length > 0 ? C.map(([n, p], w) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${t.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : u === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
                      p
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
      const n = Array.isArray(t.values[s]) ? t.values[s] : [], p = Array.isArray(v) ? v : Object.entries(v || {}).map(([S, P]) => ({ value: S, label: P })), w = (S) => {
        S && !n.includes(S) && t.setFieldValue(s, [...n, S]);
      }, O = (S) => {
        (S.key === "Enter" || S.key === ",") && (S.preventDefault(), w(h), m(""));
      }, I = (S) => {
        t.setFieldValue(
          s,
          n.filter((P) => P !== S)
        );
      }, M = (S) => p.find((P) => P.value === S)?.label || S, U = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
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
            className: `${F} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !r.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((S) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(U, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: M(S) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${M(S)}`,
                        onClick: (P) => {
                          P.stopPropagation(), r.disabled || I(S);
                        },
                        onMouseDown: (P) => P.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                S
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: h,
                  onChange: (S) => m(S.target.value),
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
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: L(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${F} ${j} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: s,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
    case "json": {
      let n = t.values[s];
      if (typeof n == "object" && n !== null) {
        const O = JSON.stringify(n, null, 2);
        t.setFieldValue(s, O, !1), n = O;
      }
      const p = n || "", w = (O) => {
        t.setFieldValue(s, O.target.value);
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
              value: p,
              onChange: w,
              onBlur: t.handleBlur,
              placeholder: r.placeholder || "Enter valid JSON",
              disabled: r.disabled,
              className: `${F} ${j} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`,
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
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: L(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${F} ${j} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: s,
              value: t.values[s],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[s] && t.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
      ] });
  }
}
function ye({ title: r, children: t, isFirst: b }) {
  const [i, x] = Y(b);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => x(!i),
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
  data: b,
  onSubmit: i = (o) => {
  },
  onCancel: x = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: v = {}
}) {
  const o = {}, h = {};
  Object.entries(t).forEach(([u, d]) => {
    Q(d, o, h);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((u) => {
    u in o && (o[u] = b[u]);
  });
  const m = Z({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: $.object().shape(h),
    onSubmit: (u) => {
      i(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: m.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([u, d], y) => /* @__PURE__ */ e.jsx(ye, { title: u, isFirst: y === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((c) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${J[ee(Number(c.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { sqlOpsUrls: v, components: E, field: c, formik: m, methods: l }, c.name)
      },
      c?.name ?? `field-${y}`
    )) }) }, u)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: x, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function je({
  title: r,
  groupedFields: t,
  data: b,
  onSubmit: i = (h) => {
  },
  onCancel: x = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: v = {},
  widget: o
}) {
  const h = Object.keys(t), [m, u] = K.useState(0), d = {}, y = {}, c = {};
  o ? Object.entries(t).forEach(([j, N]) => {
    const L = {};
    Q(N, y, L), d[j] = L;
  }) : Object.entries(t).forEach(([j, N]) => {
    Q(N, y, c);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((j) => {
    j in y && (y[j] = b[j]);
  });
  const g = h[m] ?? null, T = g && d[g] ? d[g] : {}, k = Z({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: $.object().shape(o ? T : c),
    onSubmit: (j) => {
      o ? (m < h.length - 1 && u((N) => N + 1), m === h.length - 1 && i(j)) : i(j);
    }
  }), s = async (j) => {
    if (j.preventDefault(), !o) {
      const N = await k.validateForm();
      if (Object.keys(N).length > 0) {
        alert("Please fill all required fields before submitting."), k.setTouched(
          Object.keys(N).reduce((L, D) => ({ ...L, [D]: !0 }), {})
        );
        return;
      }
    }
    k.handleSubmit(j);
  }, F = () => {
    u((j) => j > 0 ? j - 1 : j);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: h.map((j, N) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => u(N),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${m === N ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
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
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: g && t[g]?.map((j, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${J[ee(Number(j.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(te, { sqlOpsUrls: v, field: j, formik: k, methods: l, components: E }, j.name)
              },
              j?.name ?? `field-${N}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${m > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              m > 0 && /* @__PURE__ */ e.jsx("button", { onClick: F, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: x, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: o ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                m + 1,
                " of ",
                h.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: h.map((j, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${N === m ? "bg-action w-6" : "bg-gray-300"}`
              },
              N
            )) })
          ] }) })
        ]
      },
      h[m]
    )
  ] });
}
function Ne({
  title: r,
  groupedFields: t,
  data: b,
  onSubmit: i = (o) => {
  },
  onCancel: x = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: v = {}
}) {
  const o = Object.values(t).flat(), h = {}, m = {};
  Object.entries(t).forEach(([d, y]) => {
    Q(y, h, m);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((d) => {
    d in h && (h[d] = b[d]);
  });
  const u = Z({
    initialValues: h,
    enableReinitialize: !0,
    validationSchema: $.object().shape(m),
    onSubmit: (d) => {
      i(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: o.map((d, y) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${J[ee(Number(d.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { sqlOpsUrls: v, components: E, field: d, formik: u, methods: l }, d.name)
      },
      d?.name ?? `field-${y}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: x, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function we({ title: r, children: t }) {
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
function Ee({
  title: r,
  groupedFields: t,
  data: b,
  onSubmit: i = (o) => {
  },
  onCancel: x = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: v = {}
}) {
  const o = {}, h = {};
  Object.entries(t).forEach(([u, d]) => {
    Q(d, o, h);
  }), b && Object.keys(b).length > 0 && Object.keys(b).forEach((u) => {
    u in o && (o[u] = b[u]);
  });
  const m = Z({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: $.object().shape(h),
    onSubmit: (u) => {
      i(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: m.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([u, d], y) => /* @__PURE__ */ e.jsx(we, { title: u, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((c) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${J[ee(Number(c.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(te, { sqlOpsUrls: v, components: E, field: c, formik: m, methods: l }, c.name)
      },
      c?.name ?? `field-${y}`
    )) }) }, u)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: x, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Te({
  formJson: r = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: b = null,
  onCancel: i = () => {
  },
  components: x = {}
}) {
  const l = be(r), E = r.endPoints ?? {}, v = ge(r?.fields ?? {}), [o, h] = K.useState({});
  K.useEffect(() => {
    let d = !0;
    return (async () => {
      const c = r?.source ?? {};
      if (!c?.type) {
        d && h({});
        return;
      }
      if (c.type === "method") {
        const g = c.method, T = g ? t[g] : void 0;
        if (T)
          try {
            const k = await Promise.resolve(T());
            d && h(k ?? {});
          } catch (k) {
            console.error("Method execution failed:", k), d && h({});
          }
        else
          d && h({});
      }
      if (c.type === "api")
        try {
          const g = await q({
            method: c.method || "GET",
            url: c.url,
            data: c.body ?? {},
            params: c.params ?? {},
            headers: c.headers ?? {}
          });
          d && h(g.data ?? {});
        } catch (g) {
          console.error("API fetch failed:", g), d && h({});
        }
      if (c.type === "sql") {
        const g = r.endPoints;
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const T = await q({
            method: "GET",
            url: g.baseURL + g.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), k = await q({
            method: "POST",
            url: g.baseURL + g.dbopsGetRefId,
            data: {
              operation: "fetch",
              source: c,
              fields: fe(r.fields),
              datahash: T.data.refhash
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), s = await q({
            method: "POST",
            url: g.baseURL + g.dbopsFetch,
            data: {
              refid: k.data.refid,
              datahash: T.data.refhash
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          });
          d && h(s.data?.data ?? {});
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      d = !1;
    };
  }, [
    b,
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params ?? {}),
    JSON.stringify(r?.source?.body ?? {}),
    JSON.stringify(r?.source?.headers ?? {})
  ]);
  const m = async (d) => {
    const y = r?.source ?? {};
    if (y.type === "method") {
      const c = y.method, g = c ? t[c] : void 0;
      if (g)
        try {
          await Promise.resolve(g(d));
        } catch (T) {
          console.error("Method execution failed:", T);
        }
    }
    if (y.type === "api")
      try {
        await q({
          method: y.method || "POST",
          url: y.url,
          data: d ?? {},
          params: y.params ?? {},
          headers: y.headers ?? {}
        });
      } catch (c) {
        console.error("API fetch failed:", c);
      }
    if (y.type === "sql") {
      const c = r.endPoints;
      if (console.log("sqlOpsUrls", c), !c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const g = await q({
          method: "GET",
          url: c.baseURL + c.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        }), T = await q({
          method: "POST",
          url: c.baseURL + c.dbopsGetRefId,
          data: {
            operation: y.refid ? "update" : "create",
            source: y,
            fields: r.fields,
            datahash: g.data.refhash
          },
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        await q({
          method: "POST",
          url: c.baseURL + c.dbopsRunQuery,
          data: {
            refid: T.data.refid,
            fields: d,
            datahash: g.data.refhash
          },
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
      } catch (g) {
        console.error("API fetch failed:", g);
      }
    }
  }, u = {
    accordion: /* @__PURE__ */ e.jsx(
      ve,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: o,
        onSubmit: m,
        onCancel: i,
        methods: t,
        components: x,
        sqlOpsUrls: E
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: o,
        onSubmit: m,
        onCancel: i,
        methods: t,
        components: x,
        sqlOpsUrls: E
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      je,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: o,
        onSubmit: m,
        onCancel: i,
        methods: t,
        components: x,
        widget: r?.widget,
        sqlOpsUrls: E
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Ne,
      {
        title: r?.title ?? "",
        groupedFields: v,
        data: o,
        onSubmit: m,
        onCancel: i,
        methods: t,
        components: x,
        sqlOpsUrls: E
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: u[l] ?? u.simple });
}
export {
  Te as LogiksForm,
  Te as default
};
