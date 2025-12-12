import K, { useState as Y, useRef as le, useEffect as oe, useMemo as he } from "react";
import q from "axios";
import * as C from "yup";
import { useFormik as J } from "formik";
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
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function d(c, g, l) {
    var R = null;
    if (l !== void 0 && (R = "" + l), g.key !== void 0 && (R = "" + g.key), "key" in g) {
      l = {};
      for (var h in g)
        h !== "key" && (l[h] = g[h]);
    } else l = g;
    return g = l.ref, {
      $$typeof: t,
      type: c,
      key: R,
      ref: g !== void 0 ? g : null,
      props: l
    };
  }
  return W.Fragment = r, W.jsx = d, W.jsxs = d, W;
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
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === G ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case p:
          return "Fragment";
        case $:
          return "Profiler";
        case N:
          return "StrictMode";
        case w:
          return "Suspense";
        case k:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case j:
            return "Portal";
          case M:
            return (a.displayName || "Context") + ".Provider";
          case s:
            return (a._context.displayName || "Context") + ".Consumer";
          case v:
            var y = a.render;
            return a = a.displayName, a || (a = y.displayName || y.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case z:
            return y = a.displayName || null, y !== null ? y : t(a.type) || "Memo";
          case A:
            y = a._payload, a = a._init;
            try {
              return t(a(y));
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
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var T = y.error, _ = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return T.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), r(a);
      }
    }
    function c(a) {
      if (a === p) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === A)
        return "<...>";
      try {
        var y = t(a);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function g() {
      var a = n.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function R(a) {
      if (b.call(a, "key")) {
        var y = Object.getOwnPropertyDescriptor(a, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function h(a, y) {
      function T() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: T,
        configurable: !0
      });
    }
    function o() {
      var a = t(this.type);
      return D[a] || (D[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function x(a, y, T, _, B, L, se, ae) {
      return T = L.ref, a = {
        $$typeof: f,
        type: a,
        key: y,
        props: L,
        _owner: B
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: se
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, y, T, _, B, L, se, ae) {
      var P = y.children;
      if (P !== void 0)
        if (_)
          if (E(P)) {
            for (_ = 0; _ < P.length; _++)
              i(P[_]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else i(P);
      if (b.call(y, "key")) {
        P = t(a);
        var U = Object.keys(y).filter(function(ue) {
          return ue !== "key";
        });
        _ = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", I[P + _] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          P,
          U,
          P
        ), I[P + _] = !0);
      }
      if (P = null, T !== void 0 && (d(T), P = "" + T), R(y) && (d(y.key), P = "" + y.key), "key" in y) {
        T = {};
        for (var ne in y)
          ne !== "key" && (T[ne] = y[ne]);
      } else T = y;
      return P && h(
        T,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), x(
        a,
        P,
        L,
        B,
        g(),
        T,
        se,
        ae
      );
    }
    function i(a) {
      typeof a == "object" && a !== null && a.$$typeof === f && a._store && (a._store.validated = 1);
    }
    var m = K, f = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), M = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), n = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, E = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var F, D = {}, V = m["react-stack-bottom-frame"].bind(
      m,
      l
    )(), S = O(c(l)), I = {};
    H.Fragment = p, H.jsx = function(a, y, T, _, B) {
      var L = 1e4 > n.recentlyCreatedOwnerStacks++;
      return u(
        a,
        y,
        T,
        !1,
        _,
        B,
        L ? Error("react-stack-top-frame") : V,
        L ? O(c(a)) : S
      );
    }, H.jsxs = function(a, y, T, _, B) {
      var L = 1e4 > n.recentlyCreatedOwnerStacks++;
      return u(
        a,
        y,
        T,
        !0,
        _,
        B,
        L ? Error("react-stack-top-frame") : V,
        L ? O(c(a)) : S
      );
    };
  }()), H;
}
var de;
function xe() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? X.exports = me() : X.exports = pe()), X.exports;
}
var e = xe();
function be(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((c) => c.group) ? "tab" : "simple";
}
function ge(t) {
  const r = {}, d = "General";
  return Object.entries(t).forEach(([c, g]) => {
    const l = g.group || d;
    r[l] || (r[l] = []), r[l].push({ name: c, ...g });
  }), r;
}
function fe(t) {
  const r = {};
  return Object.keys(t).forEach((d) => {
    r[d] = {
      label: d,
      required: t[d].required ?? !1
    };
  }), r;
}
const Q = (t, r, d) => {
  t.forEach((c) => {
    const g = c?.name;
    if (!g) return;
    c?.type === "checkbox" ? r[g] = c?.multiple === !0 ? [] : !1 : c?.type === "tags" ? r[g] = [] : g === "blocked" || g === "blacklist" ? r[g] = "false" : r[g] = "";
    let l;
    c?.type === "checkbox" ? l = c?.multiple === !0 ? C.array().of(C.string()) : C.boolean() : c?.type === "tags" ? l = C.array().of(C.string()) : c?.type === "email" ? l = C.string().email("Invalid email format") : c?.type === "number" ? l = C.number().typeError("Must be a number") : c?.type === "date" ? l = C.date().typeError("Invalid date format") : c?.type === "json" ? l = C.string().test("is-json", "Invalid JSON format", (R) => {
      if (!R) return !0;
      try {
        return JSON.parse(R), !0;
      } catch {
        return !1;
      }
    }) : l = C.string(), c?.required && (l = l.required(
      c?.placeholder || c?.error_message || `${c?.label || g} is required`
    )), c?.validate?.regex && typeof c.validate.regex == "string" && (l = l.matches(
      new RegExp(c?.validate?.regex),
      c?.error_message || "Invalid input format"
    )), c?.validate && Object.entries(c.validate).forEach(([R, h]) => {
      switch (R) {
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
          l = C.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((o, x) => {
            if (typeof x == "string") {
              const u = x.replace(/-/g, "/"), [i, m, f] = u.split("/");
              if (i && m && f)
                return /* @__PURE__ */ new Date(`${f}-${m}-${i}`);
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
          l = C.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = C.number().typeError("Must be a decimal").transform((o, x) => {
            if (x == null || x === "") return;
            const u = Number(x);
            if (isNaN(u)) return o;
            if (typeof o == "number" && !isNaN(o)) {
              const i = Number(o);
              return Number.isInteger(i) ? Number(u.toFixed(i)) : u;
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
    }), d[g] = l;
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
function ee(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
function re({ field: t, formik: r, methods: d = {}, components: c, sqlOpsUrls: g }) {
  const [l, R] = Y(!1), [h, o] = Y(t.options || {}), [x, u] = Y(""), [i, m] = Y(0), f = le(null), j = le(null), [p, N] = Y(!1), $ = (n) => {
    n.currentTarget.open || u("");
  };
  oe(() => {
    const n = (b) => {
      j.current && !j.current.contains(b.target) && (j.current.open = !1, u(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const s = t.name;
  K.useEffect(() => {
    let n = !0;
    return (async () => {
      if (t?.options) {
        o(t.options);
        return;
      }
      const E = t?.source ?? {};
      if (E.type === "method") {
        const O = E.method, F = O ? d[O] : void 0;
        if (F)
          try {
            const D = await Promise.resolve(F());
            n && o(D ?? {});
          } catch (D) {
            console.error("Method execution failed:", D), n && o({});
          }
        else
          n && o({});
      }
      if (E.type === "api" && E.url)
        try {
          const O = await q({
            method: E.method || "GET",
            url: E.url,
            data: E.body ?? {},
            params: E.params ?? {},
            headers: E.headers ?? {}
          }), F = t.valueKey || "value", D = t.labelKey || "label", V = Array.isArray(O.data?.data) ? O.data.data : [], S = {};
          V.forEach((I) => {
            S[I[F]] = I[D];
          }), n && o(S);
        } catch (O) {
          console.error("API execution failed:", O), n && o({});
        }
    })(), () => {
      n = !1;
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
  const M = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, v = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, k = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, z = Object.keys(h || {}).length, A = he(() => Object.entries(h || {}).filter(
    ([, n]) => x ? n.toLowerCase().includes(x.toLowerCase()) : !0
  ), [x, h]), te = (n) => {
    if (p) {
      if (n.key === "ArrowDown" && (n.preventDefault(), m(
        (b) => b + 1 < A.length ? b + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), m(
        (b) => b - 1 >= 0 ? b - 1 : A.length - 1
      )), n.key === "Enter") {
        n.preventDefault(), console.log("filteredOptions[highlightedIndex]", A[i]);
        const [b, E] = A[i] || [];
        b && (u(E ?? ""), r.setFieldValue(s, b)), N(!1);
      }
      n.key === "Escape" && N(!1);
    }
  }, G = (n) => {
    if (j.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), m(
          (b) => b + 1 < A.length ? b + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), m(
          (b) => b - 1 >= 0 ? b - 1 : A.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [b] = A[i] || [];
        if (b) {
          let E = t.type === "select" || t.type === "dataSelector" || t.type === "dataMethod";
          r.setFieldValue(t.name, E ? b : [...r.values[t.name], b]), j.current.open = !1;
        }
      } else n.key === "Escape" && (j.current.open = !1, u(""));
  };
  switch (oe(() => {
    f.current?.querySelector(
      `[data-index="${i}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [i]), t.type) {
    case "autocomplete": {
      const n = (E) => {
        const O = E.target.value;
        u(O), r.setFieldValue(s, O), N(!0);
      }, b = (E, O) => {
        u(O), r.setFieldValue(s, E), N(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${M} ${v}`,
            value: r.values[s],
            placeholder: t.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => N(!0),
            onBlur: () => setTimeout(() => N(!1), 150),
            onKeyDown: te
          }
        ),
        p && /* @__PURE__ */ e.jsx("div", { ref: f, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: A.length > 0 ? A.map(([E, O], F) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": F,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${i === F ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => b(E, O),
            children: O
          },
          F
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          x,
          '"'
        ] }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${M} ${v} min-h-[120px] resize-none`,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataMethod":
      return z > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: $,
            ref: j,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? h[r.values[s]] || "Select option" : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: x,
                    onChange: (n) => {
                      u(n.target.value), m(0);
                    },
                    onKeyDown: G,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([n, b], E) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": E,
                    onClick: () => r.setFieldValue(s, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : i === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: b
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${M} ${v} appearance-none cursor-pointer pr-12`,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder }),
                Object.entries(h || {}).map(([n, b]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: b }, n))
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
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(h || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
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
                  checked: r.values[s] === n,
                  value: n,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "component":
      return c?.[s];
    case "checkbox": {
      if (z === 1) {
        const [n, b] = Object.entries(h || {})[0] || [s, t.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: b })
          ] }),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return z > 1 && z <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(h || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
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
                  checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(n) : !1,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : z > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: $,
            ref: j,
            onKeyDown: G,
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
              /* @__PURE__ */ e.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: x,
                    onChange: (n) => {
                      u(n.target.value), m(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                A.length > 0 ? A.map(([n, b], E) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : i === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${s}-${n}`,
                          type: "checkbox",
                          name: s,
                          value: n,
                          checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(n) : !1,
                          onChange: r.handleChange,
                          onBlur: r.handleBlur,
                          disabled: t.disabled,
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        }
                      ),
                      b
                    ]
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : null;
    }
    case "tags": {
      const n = Array.isArray(r.values[s]) ? r.values[s] : [], b = Array.isArray(h) ? h : Object.entries(h || {}).map(([S, I]) => ({ value: S, label: I })), E = (S) => {
        S && !n.includes(S) && r.setFieldValue(s, [...n, S]);
      }, O = (S) => {
        (S.key === "Enter" || S.key === ",") && (S.preventDefault(), E(x), u(""));
      }, F = (S) => {
        r.setFieldValue(
          s,
          n.filter((I) => I !== S)
        );
      }, D = (S) => b.find((I) => I.value === S)?.label || S, V = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${M} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((S) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(V, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: D(S) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${D(S)}`,
                        onClick: (I) => {
                          I.stopPropagation(), t.disabled || F(S);
                        },
                        onMouseDown: (I) => I.preventDefault(),
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
                  value: x,
                  onChange: (S) => u(S.target.value),
                  onKeyDown: O,
                  placeholder: n.length === 0 ? t.placeholder || "Type and press Enter" : "",
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
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${M} ${v} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => R(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      let n = r.values[s];
      if (typeof n == "object" && n !== null) {
        const O = JSON.stringify(n, null, 2);
        r.setFieldValue(s, O, !1), n = O;
      }
      const b = n || "", E = (O) => {
        r.setFieldValue(s, O.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: b,
              onChange: E,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${M} ${v} min-h-[200px] font-mono text-sm resize-y`
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
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${M} ${v} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function ve({ title: t, children: r, isFirst: d }) {
  const [c, g] = Y(d);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => g(!c),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${c ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function ye({
  title: t,
  groupedFields: r,
  data: d,
  onSubmit: c = (o) => {
  },
  onCancel: g = () => {
  },
  methods: l = {},
  components: R = {},
  sqlOpsUrls: h = {}
}) {
  const o = {}, x = {};
  Object.entries(r).forEach(([i, m]) => {
    Q(m, o, x);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((i) => {
    i in o && (i === "tags" && typeof d[i] == "string" ? o[i] = d[i].split(",") : o[i] = d[i] ? d[i] : "");
  });
  const u = J({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: C.object().shape(x),
    onSubmit: (i) => {
      c(i);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([i, m], f) => /* @__PURE__ */ e.jsx(ve, { title: i, isFirst: f === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((j) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: h, components: R, field: j, formik: u, methods: l }, j.name)
      },
      j?.name ?? `field-${f}`
    )) }) }, i)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: g, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function je({
  title: t,
  groupedFields: r,
  data: d,
  onSubmit: c = (x) => {
  },
  onCancel: g = () => {
  },
  methods: l = {},
  components: R = {},
  sqlOpsUrls: h = {},
  widget: o
}) {
  const x = Object.keys(r), [u, i] = K.useState(0), m = {}, f = {}, j = {};
  o ? Object.entries(r).forEach(([v, w]) => {
    const k = {};
    Q(w, f, k), m[v] = k;
  }) : Object.entries(r).forEach(([v, w]) => {
    Q(w, f, j);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((v) => {
    v in f && (v === "tags" && typeof d[v] == "string" ? f[v] = d[v].split(",") : f[v] = d[v] ? d[v] : "");
  });
  const p = x[u] ?? null, N = p && m[p] ? m[p] : {}, $ = J({
    initialValues: f,
    enableReinitialize: !0,
    validationSchema: C.object().shape(o ? N : j),
    onSubmit: (v) => {
      o ? (u < x.length - 1 && i((w) => w + 1), u === x.length - 1 && c(v)) : c(v);
    }
  }), s = async (v) => {
    if (v.preventDefault(), !o) {
      const w = await $.validateForm();
      if (Object.keys(w).length > 0) {
        alert("Please fill all required fields before submitting."), $.setTouched(
          Object.keys(w).reduce((k, z) => ({ ...k, [z]: !0 }), {})
        );
        return;
      }
    }
    $.handleSubmit(v);
  }, M = () => {
    i((v) => v > 0 ? v - 1 : v);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: x.map((v, w) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => i(w),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${u === w ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: v })
      },
      v
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: s, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: p && r[p]?.map((v, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${Z[ee(Number(v.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: h, field: v, formik: $, methods: l, components: R }, v.name)
              },
              v?.name ?? `field-${w}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${u > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              u > 0 && /* @__PURE__ */ e.jsx("button", { onClick: M, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: g, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: o ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                u + 1,
                " of ",
                x.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: x.map((v, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${w === u ? "bg-action w-6" : "bg-gray-300"}`
              },
              w
            )) })
          ] }) })
        ]
      },
      x[u]
    )
  ] });
}
function Ne({
  title: t,
  groupedFields: r,
  data: d,
  onSubmit: c = (o) => {
  },
  onCancel: g = () => {
  },
  methods: l = {},
  components: R = {},
  sqlOpsUrls: h = {}
}) {
  const o = Object.values(r).flat(), x = {}, u = {};
  Object.entries(r).forEach(([m, f]) => {
    Q(f, x, u);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((m) => {
    m in x && (m === "tags" && typeof d[m] == "string" ? x[m] = d[m].split(",") : x[m] = d[m] ? d[m] : "");
  });
  const i = J({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: C.object().shape(u),
    onSubmit: (m) => {
      c(m);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: i.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: o.map((m, f) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(m.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: h, components: R, field: m, formik: i, methods: l }, m.name)
      },
      m?.name ?? `field-${f}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: g, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function we({ title: t, children: r }) {
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
function Ee({
  title: t,
  groupedFields: r,
  data: d,
  onSubmit: c = (o) => {
  },
  onCancel: g = () => {
  },
  methods: l = {},
  components: R = {},
  sqlOpsUrls: h = {}
}) {
  const o = {}, x = {};
  Object.entries(r).forEach(([i, m]) => {
    Q(m, o, x);
  }), d && Object.keys(d).length > 0 && Object.keys(d).forEach((i) => {
    i in o && (i === "tags" && typeof d[i] == "string" ? o[i] = d[i].split(",") : o[i] = d[i] ? d[i] : "");
  });
  const u = J({
    initialValues: o,
    enableReinitialize: !0,
    validationSchema: C.object().shape(x),
    onSubmit: (i) => {
      c(i);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([i, m], f) => /* @__PURE__ */ e.jsx(we, { title: i, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((j) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${Z[ee(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: h, components: R, field: j, formik: u, methods: l }, j.name)
      },
      j?.name ?? `field-${f}`
    )) }) }, i)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: g, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Te({
  formJson: t = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: d = null,
  onCancel: c = () => {
  },
  components: g = {},
  callback: l = () => {
  }
}) {
  const R = be(t), h = t.endPoints ?? {}, o = ge(t?.fields ?? {}), [x, u] = K.useState({});
  K.useEffect(() => {
    let f = !0;
    return (async () => {
      const p = t?.source ?? {};
      if (!p?.type) {
        f && u({});
        return;
      }
      if (p.type === "method") {
        const N = p.method, $ = N ? r[N] : void 0;
        if ($)
          try {
            const s = await Promise.resolve($());
            f && u(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), f && u({});
          }
        else
          f && u({});
      }
      if (p.type === "api")
        try {
          const N = await q({
            method: p.method || "GET",
            url: p.url,
            data: p.body ?? {},
            params: p.params ?? {},
            headers: p.headers ?? {}
          });
          f && u(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), f && u({});
        }
      if (p.type === "sql" && Number.isInteger(Number(p.refid)) && Number(p.refid) > 0) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = await q({
            method: "GET",
            url: h.baseURL + h.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), $ = await q({
            method: "POST",
            url: h.baseURL + h.dbopsGetRefId,
            data: {
              operation: "fetch",
              source: p,
              fields: fe(t.fields),
              datahash: N.data.refhash
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), s = await q({
            method: "POST",
            url: h.baseURL + h.dbopsFetch,
            data: {
              refid: $.data.refid,
              datahash: N.data.refhash
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          });
          f && u(s.data?.data ?? s.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      f = !1;
    };
  }, [
    d,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const i = async (f) => {
    const j = t?.source ?? {};
    if (j.type === "method") {
      const p = j.method, N = p ? r[p] : void 0;
      if (N)
        try {
          const $ = await Promise.resolve(N(f));
          l?.($);
        } catch ($) {
          l?.($), console.error("Method execution failed:", $);
        }
    }
    if (j.type === "api")
      try {
        const p = await q({
          method: j.method || "POST",
          url: j.url,
          data: f ?? {},
          params: j.params ?? {},
          headers: j.headers ?? {}
        });
        l?.(p);
      } catch (p) {
        l?.(p), console.error("API fetch failed:", p);
      }
    if (j.type === "sql") {
      const p = t.endPoints;
      if (console.log("sqlOpsUrls", p), !p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const N = await q({
          method: "GET",
          url: p.baseURL + p.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        }), $ = await q({
          method: "POST",
          url: p.baseURL + p.dbopsGetRefId,
          data: {
            operation: j.refid ? "update" : "create",
            source: j,
            fields: t.fields,
            datahash: N.data.refhash
          },
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        }), s = await q({
          method: "POST",
          url: p.baseURL + p[j.refid ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: $.data.refid,
            fields: f,
            datahash: N.data.refhash
          },
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        l?.(s);
      } catch (N) {
        l?.(N), console.error("API fetch failed:", N);
      }
    }
  }, m = {
    accordion: /* @__PURE__ */ e.jsx(
      ye,
      {
        title: t?.title ?? "",
        groupedFields: o,
        data: x,
        onSubmit: i,
        onCancel: c,
        methods: r,
        components: g,
        sqlOpsUrls: h
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: t?.title ?? "",
        groupedFields: o,
        data: x,
        onSubmit: i,
        onCancel: c,
        methods: r,
        components: g,
        sqlOpsUrls: h
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      je,
      {
        title: t?.title ?? "",
        groupedFields: o,
        data: x,
        onSubmit: i,
        onCancel: c,
        methods: r,
        components: g,
        widget: t?.widget,
        sqlOpsUrls: h
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Ne,
      {
        title: t?.title ?? "",
        groupedFields: o,
        data: x,
        onSubmit: i,
        onCancel: c,
        methods: r,
        components: g,
        sqlOpsUrls: h
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: m[R] ?? m.simple });
}
export {
  Te as LogiksForm,
  Te as default
};
