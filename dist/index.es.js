import Q, { useState as Y, useRef as ce, useEffect as de, useMemo as xe } from "react";
import M from "axios";
import * as A from "yup";
import { useFormik as Z } from "formik";
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
var ue;
function be() {
  if (ue) return W;
  ue = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(c, u, o) {
    var O = null;
    if (o !== void 0 && (O = "" + o), u.key !== void 0 && (O = "" + u.key), "key" in u) {
      o = {};
      for (var y in u)
        y !== "key" && (o[y] = u[y]);
    } else o = u;
    return u = o.ref, {
      $$typeof: t,
      type: c,
      key: O,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return W.Fragment = r, W.jsx = l, W.jsxs = l, W;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function ge() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === G ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case m:
          return "Fragment";
        case $:
          return "Profiler";
        case N:
          return "StrictMode";
        case w:
          return "Suspense";
        case q:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case j:
            return "Portal";
          case D:
            return (s.displayName || "Context") + ".Provider";
          case a:
            return (s._context.displayName || "Context") + ".Consumer";
          case f:
            var v = s.render;
            return s = s.displayName, s || (s = v.displayName || v.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case z:
            return v = s.displayName || null, v !== null ? v : t(s.type) || "Memo";
          case F:
            v = s._payload, s = s._init;
            try {
              return t(s(v));
            } catch {
            }
        }
      return null;
    }
    function r(s) {
      return "" + s;
    }
    function l(s) {
      try {
        r(s);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var T = v.error, P = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return T.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), r(s);
      }
    }
    function c(s) {
      if (s === m) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === F)
        return "<...>";
      try {
        var v = t(s);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var s = n.A;
      return s === null ? null : s.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function O(s) {
      if (b.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function y(s, v) {
      function T() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: T,
        configurable: !0
      });
    }
    function i() {
      var s = t(this.type);
      return L[s] || (L[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function x(s, v, T, P, V, k, se, ne) {
      return T = k.ref, s = {
        $$typeof: g,
        type: s,
        key: v,
        props: k,
        _owner: V
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: i
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
        value: se
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function h(s, v, T, P, V, k, se, ne) {
      var I = v.children;
      if (I !== void 0)
        if (P)
          if (S(I)) {
            for (P = 0; P < I.length; P++)
              d(I[P]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (b.call(v, "key")) {
        I = t(s);
        var U = Object.keys(v).filter(function(pe) {
          return pe !== "key";
        });
        P = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", C[I + P] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          I,
          U,
          I
        ), C[I + P] = !0);
      }
      if (I = null, T !== void 0 && (l(T), I = "" + T), O(v) && (l(v.key), I = "" + v.key), "key" in v) {
        T = {};
        for (var oe in v)
          oe !== "key" && (T[oe] = v[oe]);
      } else T = v;
      return I && y(
        T,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), x(
        s,
        I,
        k,
        V,
        u(),
        T,
        se,
        ne
      );
    }
    function d(s) {
      typeof s == "object" && s !== null && s.$$typeof === g && s._store && (s._store.validated = 1);
    }
    var p = Q, g = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), D = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), n = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, S = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var _, L = {}, B = p["react-stack-bottom-frame"].bind(
      p,
      o
    )(), R = E(c(o)), C = {};
    K.Fragment = m, K.jsx = function(s, v, T, P, V) {
      var k = 1e4 > n.recentlyCreatedOwnerStacks++;
      return h(
        s,
        v,
        T,
        !1,
        P,
        V,
        k ? Error("react-stack-top-frame") : B,
        k ? E(c(s)) : R
      );
    }, K.jsxs = function(s, v, T, P, V) {
      var k = 1e4 > n.recentlyCreatedOwnerStacks++;
      return h(
        s,
        v,
        T,
        !0,
        P,
        V,
        k ? Error("react-stack-top-frame") : B,
        k ? E(c(s)) : R
      );
    };
  }()), K;
}
var me;
function fe() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? J.exports = be() : J.exports = ge()), J.exports;
}
var e = fe();
function ye(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((c) => c.group) ? "tab" : "simple";
}
function ve(t) {
  const r = {}, l = "General";
  return Object.entries(t).forEach(([c, u]) => {
    const o = u.group || l;
    r[o] || (r[o] = []), r[o].push({ name: c, ...u });
  }), r;
}
function je(t) {
  const r = {};
  return Object.keys(t).forEach((l) => {
    r[l] = {
      label: l,
      required: t[l].required ?? !1
    };
  }), r;
}
const X = (t, r, l) => {
  t.forEach((c) => {
    const u = c?.name;
    if (!u) return;
    c?.type === "checkbox" ? r[u] = c?.multiple === !0 ? [] : !1 : c?.type === "tags" ? r[u] = [] : u === "blocked" || u === "blacklist" ? r[u] = "false" : r[u] = "";
    let o;
    c?.type === "checkbox" ? o = c?.multiple === !0 ? A.array().of(A.string()) : A.boolean() : c?.type === "tags" ? o = A.array().of(A.string()) : c?.type === "email" ? o = A.string().email("Invalid email format") : c?.type === "number" ? o = A.number().typeError("Must be a number") : c?.type === "date" ? o = A.date().typeError("Invalid date format") : c?.type === "json" ? o = A.string().test("is-json", "Invalid JSON format", (O) => {
      if (!O) return !0;
      try {
        return JSON.parse(O), !0;
      } catch {
        return !1;
      }
    }) : o = A.string(), c?.required && (o = o.required(
      c?.placeholder || c?.error_message || `${c?.label || u} is required`
    )), c?.validate?.regex && typeof c.validate.regex == "string" && (o = o.matches(
      new RegExp(c?.validate?.regex),
      c?.error_message || "Invalid input format"
    )), c?.validate && Object.entries(c.validate).forEach(([O, y]) => {
      switch (O) {
        case "email":
          y && (o = o.email("Invalid email format"));
          break;
        case "mobile":
          o = o.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          o = o.matches(
            new RegExp(y),
            `Must match pattern: ${y}`
          );
          break;
        case "date":
          o = A.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((i, x) => {
            if (typeof x == "string") {
              const h = x.replace(/-/g, "/"), [d, p, g] = h.split("/");
              if (d && p && g)
                return /* @__PURE__ */ new Date(`${g}-${p}-${d}`);
            }
            return i;
          });
          break;
        case "time":
          o = o.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          o = o.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          o = A.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          o = A.number().typeError("Must be a decimal").transform((i, x) => {
            if (x == null || x === "") return;
            const h = Number(x);
            if (isNaN(h)) return i;
            if (typeof i == "number" && !isNaN(i)) {
              const d = Number(i);
              return Number.isInteger(d) ? Number(h.toFixed(d)) : h;
            }
            return h;
          });
          break;
        case "alphanumeric":
          o = o.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          o = o.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          o = o.transform(
            (i) => i && i.toUpperCase()
          );
          break;
        case "lower":
          o = o.transform(
            (i) => i && i.toLowerCase()
          );
          break;
        case "length-min": {
          const i = Number(y);
          isNaN(i) || (o = o.min(i, `Minimum length is ${i}`));
          break;
        }
        case "length-max": {
          const i = Number(y);
          isNaN(i) || (o = o.max(i, `Maximum length is ${i}`));
          break;
        }
      }
    }), l[u] = o;
  });
}, ee = {
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
function te(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
function re({ field: t, formik: r, methods: l = {}, components: c, sqlOpsUrls: u }) {
  const [o, O] = Y(!1), [y, i] = Y(t.options || {}), [x, h] = Y(""), [d, p] = Y(0), g = ce(null), j = ce(null), [m, N] = Y(!1), $ = (n) => {
    n.currentTarget.open || h("");
  };
  de(() => {
    const n = (b) => {
      j.current && !j.current.contains(b.target) && (j.current.open = !1, h(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const a = t.name;
  Q.useEffect(() => {
    let n = !0;
    return (async () => {
      if (t?.options) {
        i(t.options);
        return;
      }
      const S = t?.source ?? {};
      if (S.type === "method") {
        const E = S.method, _ = E ? l[E] : void 0;
        if (_)
          try {
            const L = await Promise.resolve(_());
            n && i(L ?? {});
          } catch (L) {
            console.error("Method execution failed:", L), n && i({});
          }
        else
          n && i({});
      }
      if (S.type === "api" && S.url)
        try {
          const E = await M({
            method: S.method || "GET",
            url: S.url,
            data: S.body ?? {},
            params: S.params ?? {},
            headers: S.headers ?? {}
          }), _ = t.valueKey || "value", L = t.labelKey || "label", B = Array.isArray(E.data?.data) ? E.data.data : [], R = {};
          B.forEach((C) => {
            R[C[_]] = C[L];
          }), n && i(R);
        } catch (E) {
          console.error("API execution failed:", E), n && i({});
        }
      if (t.table) {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const E = await M({
            method: "POST",
            url: u.baseURL + u.registerQuery,
            data: {
              query: {
                table: t.table,
                cols: t.columns,
                where: t.where
              }
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), _ = await M({
            method: "POST",
            url: u.baseURL + u.runQuery,
            data: {
              queryid: E.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), L = t.valueKey || "value", B = t.labelKey || "title", R = Array.isArray(_.data?.data) ? _.data.data : [], C = {};
          R.forEach((s) => {
            C[s[L]] = s[B];
          }), n && i(C);
        } catch (E) {
          console.error("API fetch failed:", E);
        }
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
  const D = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, f = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, q = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, z = Object.keys(y || {}).length, F = xe(() => Object.entries(y || {}).filter(
    ([, n]) => x ? n.toLowerCase().includes(x.toLowerCase()) : !0
  ), [x, y]), ae = (n) => {
    if (m) {
      if (n.key === "ArrowDown" && (n.preventDefault(), p(
        (b) => b + 1 < F.length ? b + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), p(
        (b) => b - 1 >= 0 ? b - 1 : F.length - 1
      )), n.key === "Enter") {
        n.preventDefault();
        const [b, S] = F[d] || [];
        b && (h(S ?? ""), r.setFieldValue(a, b)), N(!1);
      }
      n.key === "Escape" && N(!1);
    }
  }, G = (n) => {
    if (j.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), p(
          (b) => b + 1 < F.length ? b + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), p(
          (b) => b - 1 >= 0 ? b - 1 : F.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [b] = F[d] || [];
        if (b) {
          let S = t.type === "select" || t.type === "dataSelector" || t.type === "dataMethod" || t.type === "dataSelectorFromTable" || t.type === "dataSelectorFromUniques";
          r.setFieldValue(t.name, S ? b : [...r.values[t.name], b]), j.current.open = !1;
        }
      } else n.key === "Escape" && (j.current.open = !1, h(""));
  };
  switch (de(() => {
    g.current?.querySelector(
      `[data-index="${d}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [d]), t.type) {
    case "autocomplete": {
      const n = (S) => {
        const E = S.target.value;
        h(E), r.setFieldValue(a, E), N(!0);
      }, b = (S, E) => {
        h(E), r.setFieldValue(a, S), N(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${D} ${f}`,
            value: r.values[a],
            placeholder: t.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => N(!0),
            onBlur: () => setTimeout(() => N(!1), 150),
            onKeyDown: ae
          }
        ),
        m && /* @__PURE__ */ e.jsx("div", { ref: g, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: F.length > 0 ? F.map(([S, E], _) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": _,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${d === _ ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => b(S, E),
            children: E
          },
          _
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          x,
          '"'
        ] }) }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
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
              className: `${D} ${f} min-h-[120px] resize-none`,
              onFocus: () => O(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
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
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[a] ? y[r.values[a]] || "Select option" : `Select ${t.label}` }),
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
                    value: x,
                    onChange: (n) => {
                      h(n.target.value), p(0);
                    },
                    onKeyDown: G,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, b], S) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": S,
                    onClick: () => r.setFieldValue(a, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: b
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${D} ${f} appearance-none cursor-pointer pr-12`,
              onFocus: () => O(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder }),
                Object.entries(y || {}).map(([n, b]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: b }, n))
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(y || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${a}-${n}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${a}-${n}`,
                  type: "radio",
                  name: a,
                  checked: r.values[a] === n,
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] });
    case "component":
      return c?.[a];
    case "checkbox": {
      if (z === 1) {
        const [n, b] = Object.entries(y || {})[0] || [a, t.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: a,
                type: "checkbox",
                name: a,
                checked: r.values[a] || !1,
                onChange: r.handleChange,
                onBlur: r.handleBlur,
                disabled: t.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: a, className: "text-sm font-medium text-gray-700 cursor-pointer", children: b })
          ] }),
          r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
        ] });
      }
      return z > 1 && z <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(y || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  name: a,
                  value: n,
                  checked: Array.isArray(r.values[a]) ? r.values[a]?.includes(n) : !1,
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
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
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[a]?.length > 0 ? r.values[a].join(", ") : `Select ${t.label}` }),
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
                    value: x,
                    onChange: (n) => {
                      h(n.target.value), p(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, b], S) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${a}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${a}-${n}`,
                          type: "checkbox",
                          name: a,
                          value: n,
                          checked: Array.isArray(r.values[a]) ? r.values[a]?.includes(n) : !1,
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] }) : null;
    }
    case "tags": {
      const n = Array.isArray(r.values[a]) ? r.values[a] : [], b = Array.isArray(y) ? y : Object.entries(y || {}).map(([R, C]) => ({ value: R, label: C })), S = (R) => {
        R && !n.includes(R) && r.setFieldValue(a, [...n, R]);
      }, E = (R) => {
        (R.key === "Enter" || R.key === ",") && (R.preventDefault(), S(x), h(""));
      }, _ = (R) => {
        r.setFieldValue(
          a,
          n.filter((C) => C !== R)
        );
      }, L = (R) => b.find((C) => C.value === R)?.label || R, B = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
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
            className: `${D} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${a}-input`)?.focus(),
            children: [
              n.map((R) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(B, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: L(R) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${L(R)}`,
                        onClick: (C) => {
                          C.stopPropagation(), t.disabled || _(R);
                        },
                        onMouseDown: (C) => C.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                R
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${a}-input`,
                  type: "text",
                  value: x,
                  onChange: (R) => h(R.target.value),
                  onKeyDown: E,
                  placeholder: n.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: t.disabled
                }
              )
            ]
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: q(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${D} ${f} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => O(!0),
              name: a,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "json": {
      let n = r.values[a];
      if (typeof n == "object" && n !== null) {
        const E = JSON.stringify(n, null, 2);
        r.setFieldValue(a, E, !1), n = E;
      }
      const b = n || "", S = (E) => {
        r.setFieldValue(a, E.target.value);
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
              id: `${a}-json`,
              name: a,
              value: b,
              onChange: S,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${D} ${f} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: q(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${D} ${f} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => O(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
  }
}
function Ne({ title: t, children: r, isFirst: l }) {
  const [c, u] = Y(l);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => u(!c),
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
function we({
  title: t,
  groupedFields: r,
  data: l,
  onSubmit: c = (i) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: O = {},
  sqlOpsUrls: y = {}
}) {
  const i = {}, x = {};
  Object.entries(r).forEach(([d, p]) => {
    X(p, i, x);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((d) => {
    d in i && (d === "tags" && typeof l[d] == "string" ? i[d] = l[d].split(",") : i[d] = l[d] ? l[d] : "");
  });
  const h = Z({
    initialValues: i,
    enableReinitialize: !0,
    validationSchema: A.object().shape(x),
    onSubmit: (d) => {
      c(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: h.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ e.jsx(Ne, { title: d, isFirst: g === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((j) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ee[te(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: y, components: O, field: j, formik: h, methods: o }, j.name)
      },
      j?.name ?? `field-${g}`
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
function Se({
  title: t,
  groupedFields: r,
  data: l,
  onSubmit: c = (x) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: O = {},
  sqlOpsUrls: y = {},
  widget: i
}) {
  const x = Object.keys(r), [h, d] = Q.useState(0), p = {}, g = {}, j = {};
  i ? Object.entries(r).forEach(([f, w]) => {
    const q = {};
    X(w, g, q), p[f] = q;
  }) : Object.entries(r).forEach(([f, w]) => {
    X(w, g, j);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((f) => {
    f in g && (f === "tags" && typeof l[f] == "string" ? g[f] = l[f].split(",") : g[f] = l[f] ? l[f] : "");
  });
  const m = x[h] ?? null, N = m && p[m] ? p[m] : {}, $ = Z({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: A.object().shape(i ? N : j),
    onSubmit: (f) => {
      i ? (h < x.length - 1 && d((w) => w + 1), h === x.length - 1 && c(f)) : c(f);
    }
  }), a = async (f) => {
    if (f.preventDefault(), !i) {
      const w = await $.validateForm();
      if (Object.keys(w).length > 0) {
        alert("Please fill all required fields before submitting."), $.setTouched(
          Object.keys(w).reduce((q, z) => ({ ...q, [z]: !0 }), {})
        );
        return;
      }
    }
    $.handleSubmit(f);
  }, D = () => {
    d((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: x.map((f, w) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => d(w),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${h === w ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: f })
      },
      f
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: a, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: m && r[m]?.map((f, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${ee[te(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: y, field: f, formik: $, methods: o, components: O }, f.name)
              },
              f?.name ?? `field-${w}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${h > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              h > 0 && /* @__PURE__ */ e.jsx("button", { onClick: D, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: u, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: i ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                h + 1,
                " of ",
                x.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: x.map((f, w) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${w === h ? "bg-action w-6" : "bg-gray-300"}`
              },
              w
            )) })
          ] }) })
        ]
      },
      x[h]
    )
  ] });
}
function Ee({
  title: t,
  groupedFields: r,
  data: l,
  onSubmit: c = (i) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: O = {},
  sqlOpsUrls: y = {}
}) {
  const i = Object.values(r).flat(), x = {}, h = {};
  Object.entries(r).forEach(([p, g]) => {
    X(g, x, h);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((p) => {
    p in x && (p === "tags" && typeof l[p] == "string" ? x[p] = l[p].split(",") : x[p] = l[p] ? l[p] : "");
  });
  const d = Z({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: A.object().shape(h),
    onSubmit: (p) => {
      c(p);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: d.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: i.map((p, g) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ee[te(Number(p.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: y, components: O, field: p, formik: d, methods: o }, p.name)
      },
      p?.name ?? `field-${g}`
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
function Re({ title: t, children: r }) {
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
function Oe({
  title: t,
  groupedFields: r,
  data: l,
  onSubmit: c = (i) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: O = {},
  sqlOpsUrls: y = {}
}) {
  const i = {}, x = {};
  Object.entries(r).forEach(([d, p]) => {
    X(p, i, x);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((d) => {
    d in i && (d === "tags" && typeof l[d] == "string" ? i[d] = l[d].split(",") : i[d] = l[d] ? l[d] : "");
  });
  const h = Z({
    initialValues: i,
    enableReinitialize: !0,
    validationSchema: A.object().shape(x),
    onSubmit: (d) => {
      c(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: h.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ e.jsx(Re, { title: d, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((j) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ee[te(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(re, { sqlOpsUrls: y, components: O, field: j, formik: h, methods: o }, j.name)
      },
      j?.name ?? `field-${g}`
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
const H = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), le = async (t) => (await M.get(
  t.baseURL + t.dbopsGetHash,
  { headers: H(t) }
)).data.refhash, ie = async (t, r) => (await M.post(
  t.baseURL + t.dbopsGetRefId,
  r,
  { headers: H(t) }
)).data.refid, Te = {
  async fetch(t, r) {
    const l = await le(t), c = await ie(t, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    }), u = await M.post(
      t.baseURL + t.dbopsFetch,
      { refid: c, datahash: l },
      { headers: H(t) }
    );
    return u.data?.data ?? u.data;
  },
  async create(t, r) {
    const l = await le(t), c = await ie(t, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: l
    });
    return (await M.post(
      t.baseURL + t.dbopsCreate,
      { refid: c, fields: r.values, datahash: l },
      { headers: H(t) }
    )).data;
  },
  async update(t, r) {
    const l = await le(t), c = await ie(t, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: l
    });
    return (await M.post(
      t.baseURL + t.dbopsUpdate,
      { refid: c, fields: r.values, datahash: l },
      { headers: H(t) }
    )).data;
  }
};
function _e({
  formJson: t = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: l = null,
  onCancel: c = () => {
  },
  components: u = {},
  callback: o = () => {
  }
}) {
  const O = ye(t), y = t.endPoints, i = ve(t?.fields ?? {}), [x, h] = Q.useState({});
  Q.useEffect(() => {
    let g = !0;
    return (async () => {
      const m = t?.source ?? {};
      if (!m?.type) {
        g && h({});
        return;
      }
      if (m.type === "method") {
        const N = m.method, $ = N ? r[N] : void 0;
        if ($)
          try {
            const a = await Promise.resolve($());
            g && h(a ?? {});
          } catch (a) {
            console.error("Method execution failed:", a), g && h({});
          }
        else
          g && h({});
      }
      if (m.type === "api")
        try {
          const N = await M({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          g && h(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), g && h({});
        }
      if (m.type === "sql" && m.refid && m.refid != "0") {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = await Te.fetch(y, {
            source: {
              table: m.table,
              columns: m.columns,
              ...m
            },
            fields: je(t.fields)
          });
          g && h(N);
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      g = !1;
    };
  }, [
    l,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const d = async (g) => {
    const j = t?.source ?? {};
    if (j.type === "method") {
      const m = j.method, N = m ? r[m] : void 0;
      if (N)
        try {
          const $ = await Promise.resolve(N(g));
          o?.($);
        } catch ($) {
          o?.($), console.error("Method execution failed:", $);
        }
    }
    if (j.type === "api")
      try {
        const m = await M({
          method: j.method || "POST",
          url: j.url,
          data: g ?? {},
          params: j.params ?? {},
          headers: j.headers ?? {}
        });
        o?.(m);
      } catch (m) {
        o?.(m), console.error("API fetch failed:", m);
      }
    if (j.type === "sql") {
      const m = t.endPoints;
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const N = await M({
          method: "GET",
          url: m.baseURL + m.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        }), $ = await M({
          method: "POST",
          url: m.baseURL + m.dbopsGetRefId,
          data: {
            operation: j.refid ? "update" : "create",
            source: j,
            fields: t.fields,
            datahash: N.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        }), a = await M({
          method: "POST",
          url: m.baseURL + m[j.refid ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: $.data.refid,
            fields: g,
            datahash: N.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        o?.(a);
      } catch (N) {
        o?.(N), console.error("API fetch failed:", N);
      }
    }
  }, p = {
    accordion: /* @__PURE__ */ e.jsx(
      we,
      {
        title: t?.title ?? "",
        groupedFields: i,
        data: x,
        onSubmit: d,
        onCancel: c,
        methods: r,
        components: u,
        sqlOpsUrls: y
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Oe,
      {
        title: t?.title ?? "",
        groupedFields: i,
        data: x,
        onSubmit: d,
        onCancel: c,
        methods: r,
        components: u,
        sqlOpsUrls: y
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Se,
      {
        title: t?.title ?? "",
        groupedFields: i,
        data: x,
        onSubmit: d,
        onCancel: c,
        methods: r,
        components: u,
        widget: t?.widget,
        sqlOpsUrls: y
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: t?.title ?? "",
        groupedFields: i,
        data: x,
        onSubmit: d,
        onCancel: c,
        methods: r,
        components: u,
        sqlOpsUrls: y
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: p[O] ?? p.simple });
}
export {
  _e as LogiksForm,
  _e as default
};
