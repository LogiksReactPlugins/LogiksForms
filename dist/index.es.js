import X, { useState as Y, useRef as ue, useEffect as he, useMemo as ge } from "react";
import D from "axios";
import * as _ from "yup";
import { useFormik as ee } from "formik";
var Z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function fe() {
  if (me) return W;
  me = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function l(i, u, o) {
    var E = null;
    if (o !== void 0 && (E = "" + o), u.key !== void 0 && (E = "" + u.key), "key" in u) {
      o = {};
      for (var g in u)
        g !== "key" && (o[g] = u[g]);
    } else o = u;
    return u = o.ref, {
      $$typeof: r,
      type: i,
      key: E,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return W.Fragment = t, W.jsx = l, W.jsxs = l, W;
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
var pe;
function ye() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    function r(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === G ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case j:
          return "Fragment";
        case R:
          return "Profiler";
        case m:
          return "StrictMode";
        case N:
          return "Suspense";
        case k:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case v:
            return "Portal";
          case A:
            return (s.displayName || "Context") + ".Provider";
          case a:
            return (s._context.displayName || "Context") + ".Consumer";
          case f:
            var y = s.render;
            return s = s.displayName, s || (s = y.displayName || y.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case z:
            return y = s.displayName || null, y !== null ? y : r(s.type) || "Memo";
          case F:
            y = s._payload, s = s._init;
            try {
              return r(s(y));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function l(s) {
      try {
        t(s);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var $ = y.error, P = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return $.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(s);
      }
    }
    function i(s) {
      if (s === j) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === F)
        return "<...>";
      try {
        var y = r(s);
        return y ? "<" + y + ">" : "<...>";
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
    function E(s) {
      if (b.call(s, "key")) {
        var y = Object.getOwnPropertyDescriptor(s, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function g(s, y) {
      function $() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: $,
        configurable: !0
      });
    }
    function d() {
      var s = r(this.type);
      return M[s] || (M[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function p(s, y, $, P, V, q, oe, le) {
      return $ = q.ref, s = {
        $$typeof: T,
        type: s,
        key: y,
        props: q,
        _owner: V
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: d
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
        value: oe
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function x(s, y, $, P, V, q, oe, le) {
      var I = y.children;
      if (I !== void 0)
        if (P)
          if (w(I)) {
            for (P = 0; P < I.length; P++)
              c(I[P]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(I);
      if (b.call(y, "key")) {
        I = r(s);
        var U = Object.keys(y).filter(function(be) {
          return be !== "key";
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
      if (I = null, $ !== void 0 && (l($), I = "" + $), E(y) && (l(y.key), I = "" + y.key), "key" in y) {
        $ = {};
        for (var ie in y)
          ie !== "key" && ($[ie] = y[ie]);
      } else $ = y;
      return I && g(
        $,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), p(
        s,
        I,
        q,
        V,
        u(),
        $,
        oe,
        le
      );
    }
    function c(s) {
      typeof s == "object" && s !== null && s.$$typeof === T && s._store && (s._store.validated = 1);
    }
    var h = X, T = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), A = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), n = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, w = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var L, M = {}, B = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), O = S(i(o)), C = {};
    K.Fragment = j, K.jsx = function(s, y, $, P, V) {
      var q = 1e4 > n.recentlyCreatedOwnerStacks++;
      return x(
        s,
        y,
        $,
        !1,
        P,
        V,
        q ? Error("react-stack-top-frame") : B,
        q ? S(i(s)) : O
      );
    }, K.jsxs = function(s, y, $, P, V) {
      var q = 1e4 > n.recentlyCreatedOwnerStacks++;
      return x(
        s,
        y,
        $,
        !0,
        P,
        V,
        q ? Error("react-stack-top-frame") : B,
        q ? S(i(s)) : O
      );
    };
  }()), K;
}
var xe;
function ve() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? Z.exports = fe() : Z.exports = ye()), Z.exports;
}
var e = ve();
function je(r) {
  return r.template === "accordion" ? "accordion" : r.template === "simple" ? "simple" : r.template === "cards" ? "cards" : Object.values(r.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function Ne(r, t) {
  const l = {}, i = "General";
  return Object.entries(r).forEach(([u, o]) => {
    const E = o.group || i;
    l[E] || (l[E] = []);
    let g = { ...o, name: u };
    o?.value && o?.value === "#refid#" && (g.value = t), l[E].push(g);
  }), l;
}
function we(r) {
  const t = {};
  return Object.keys(r).forEach((l) => {
    t[l] = {
      label: l,
      required: r[l].required ?? !1
    };
  }), t;
}
const J = (r, t, l) => {
  r.forEach((i) => {
    const u = i?.name;
    if (!u) return;
    i?.type === "checkbox" ? t[u] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? t[u] = [] : u === "blocked" || u === "blacklist" ? t[u] = "false" : t[u] = i?.value ? i.value : "";
    let o;
    i?.type === "checkbox" ? o = i?.multiple === !0 ? _.array().of(_.string()) : _.boolean() : i?.type === "tags" ? o = _.array().of(_.string()) : i?.type === "email" ? o = _.string().email("Invalid email format") : i?.type === "number" ? o = _.number().typeError("Must be a number") : i?.type === "date" ? o = _.date().typeError("Invalid date format") : i?.type === "json" ? o = _.string().test("is-json", "Invalid JSON format", (E) => {
      if (!E) return !0;
      try {
        return JSON.parse(E), !0;
      } catch {
        return !1;
      }
    }) : o = _.string(), i?.required && (o = o.required(
      i?.placeholder || i?.error_message || `${i?.label || u} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (o = o.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([E, g]) => {
      switch (E) {
        case "email":
          g && (o = o.email("Invalid email format"));
          break;
        case "mobile":
          o = o.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          o = o.matches(
            new RegExp(g),
            `Must match pattern: ${g}`
          );
          break;
        case "date":
          o = _.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, p) => {
            if (typeof p == "string") {
              const x = p.replace(/-/g, "/"), [c, h, T] = x.split("/");
              if (c && h && T)
                return /* @__PURE__ */ new Date(`${T}-${h}-${c}`);
            }
            return d;
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
          o = _.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          o = _.number().typeError("Must be a decimal").transform((d, p) => {
            if (p == null || p === "") return;
            const x = Number(p);
            if (isNaN(x)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const c = Number(d);
              return Number.isInteger(c) ? Number(x.toFixed(c)) : x;
            }
            return x;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          o = o.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(g);
          isNaN(d) || (o = o.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(g);
          isNaN(d) || (o = o.max(d, `Maximum length is ${d}`));
          break;
        }
      }
    }), l[u] = o;
  });
}, re = {
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
function te(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
const ae = (r) => r === !0 || r === "true", H = (r, t) => (console.log("input", r, t), typeof r == "string" ? r.replace(
  /#(\w+)#/g,
  (l, i) => t[i] !== void 0 ? String(t[i]) : l
) : Array.isArray(r) ? r.map((l) => H(l, t)) : r && typeof r == "object" ? Object.fromEntries(
  Object.entries(r).map(([l, i]) => [
    H(l, t),
    H(i, t)
  ])
) : r);
function se({ field: r, formik: t, methods: l = {}, components: i, sqlOpsUrls: u }) {
  const [o, E] = Y(!1), [g, d] = Y(r.options || {}), [p, x] = Y(""), [c, h] = Y(0), T = ue(null), v = ue(null), [j, m] = Y(!1), R = (n) => {
    n.currentTarget.open || x("");
  };
  he(() => {
    const n = (b) => {
      v.current && !v.current.contains(b.target) && (v.current.open = !1, x(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const a = r.name;
  X.useEffect(() => {
    let n = !0;
    return (async () => {
      if (r?.options) {
        d(r.options);
        return;
      }
      const w = r?.source ?? {};
      if (w.type === "method") {
        const S = w.method, L = S ? l[S] : void 0;
        if (L)
          try {
            const M = await Promise.resolve(L());
            n && d(M ?? {});
          } catch (M) {
            console.error("Method execution failed:", M), n && d({});
          }
        else
          n && d({});
      }
      if (w.type === "api" && w.url)
        try {
          const S = await D({
            method: w.method || "GET",
            url: w.url,
            data: w.body ?? {},
            params: w.params ?? {},
            headers: w.headers ?? {}
          }), L = r.valueKey || "value", M = r.labelKey || "label", B = Array.isArray(S.data?.data) ? S.data.data : [], O = {};
          B.forEach((C) => {
            O[C[L]] = C[M];
          }), n && d(O);
        } catch (S) {
          console.error("API execution failed:", S), n && d({});
        }
      if (r.table || r.type === "dataSelector") {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const S = r.type === "dataSelector" ? {
            table: "do_lists",
            cols: "title,value",
            where: {
              groupid: r.groupid ?? ""
            }
          } : {
            table: r.table,
            cols: r.columns,
            where: r.where
          }, L = await D({
            method: "POST",
            url: u.baseURL + u.registerQuery,
            data: {
              query: S
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), M = await D({
            method: "POST",
            url: u.baseURL + u.runQuery,
            data: {
              queryid: L.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), B = r.valueKey || "value", O = r.labelKey || "title", C = Array.isArray(M.data?.data) ? M.data.data : [], s = {};
          C.forEach((y) => {
            s[y[B]] = y[O];
          }), n && d(s);
        } catch (S) {
          console.error("API fetch failed:", S);
        }
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
  const A = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, f = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, k = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, z = Object.keys(g || {}).length, F = ge(() => Object.entries(g || {}).filter(
    ([, n]) => p ? n.toLowerCase().includes(p.toLowerCase()) : !0
  ), [p, g]), ne = (n) => {
    if (j) {
      if (n.key === "ArrowDown" && (n.preventDefault(), h(
        (b) => b + 1 < F.length ? b + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), h(
        (b) => b - 1 >= 0 ? b - 1 : F.length - 1
      )), n.key === "Enter") {
        n.preventDefault();
        const [b, w] = F[c] || [];
        b && (x(w ?? ""), t.setFieldValue(a, b)), m(!1);
      }
      n.key === "Escape" && m(!1);
    }
  }, G = (n) => {
    if (v.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), h(
          (b) => b + 1 < F.length ? b + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), h(
          (b) => b - 1 >= 0 ? b - 1 : F.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [b] = F[c] || [];
        if (b) {
          let w = r.type === "select" || r.type === "dataSelector" || r.type === "dataMethod" || r.type === "dataSelectorFromTable" || r.type === "dataSelectorFromUniques";
          t.setFieldValue(r.name, w ? b : [...t.values[r.name], b]), v.current.open = !1;
        }
      } else n.key === "Escape" && (v.current.open = !1, x(""));
  };
  switch (he(() => {
    T.current?.querySelector(
      `[data-index="${c}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [c]), r.type) {
    case "autocomplete": {
      const n = (w) => {
        const S = w.target.value;
        x(S), t.setFieldValue(a, S), m(!0);
      }, b = (w, S) => {
        x(S), t.setFieldValue(a, w), m(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${A} ${f}`,
            value: t.values[a],
            placeholder: r.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => m(!0),
            onBlur: () => setTimeout(() => m(!1), 150),
            onKeyDown: ne
          }
        ),
        j && /* @__PURE__ */ e.jsx("div", { ref: T, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: F.length > 0 ? F.map(([w, S], L) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": L,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${c === L ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => b(w, S),
            children: S
          },
          L
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          p,
          '"'
        ] }) }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
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
              className: `${A} ${f} min-h-[120px] resize-none`,
              onFocus: () => E(!0),
              name: a,
              value: t.values[a],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod":
      return z > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: v,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[a] ? g[t.values[a]] || "Select option" : `Select ${r.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: T, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: p,
                    onChange: (n) => {
                      x(n.target.value), h(0);
                    },
                    onKeyDown: G,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, b], w) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": w,
                    onClick: () => t.setFieldValue(a, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : c === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: b
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${A} ${f} appearance-none cursor-pointer pr-12`,
              onFocus: () => E(!0),
              name: a,
              value: t.values[a],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: r.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r.placeholder }),
                Object.entries(g || {}).map(([n, b]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: b }, n))
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
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(g || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
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
                  checked: t.values[a] === n,
                  value: n,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: r.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          n
        )) }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] });
    case "component":
      return i?.[a];
    case "checkbox": {
      if (z === 1) {
        const [n, b] = Object.entries(g || {})[0] || [a, r.label];
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: a,
                type: "checkbox",
                name: a,
                checked: t.values[a] || !1,
                onChange: t.handleChange,
                onBlur: t.handleBlur,
                disabled: r.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ e.jsx("label", { htmlFor: a, className: "text-sm font-medium text-gray-700 cursor-pointer", children: b })
          ] }),
          t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
        ] });
      }
      return z > 1 && z <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(g || {}).map(([n, b]) => /* @__PURE__ */ e.jsxs(
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
                  checked: Array.isArray(t.values[a]) ? t.values[a]?.includes(n) : !1,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: r.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          n
        )) }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] }) : z > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: v,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[a]?.length > 0 ? t.values[a].join(", ") : `Select ${r.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: T, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: p,
                    onChange: (n) => {
                      x(n.target.value), h(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, b], w) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${a}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${t.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : c === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${a}-${n}`,
                          type: "checkbox",
                          name: a,
                          value: n,
                          checked: Array.isArray(t.values[a]) ? t.values[a]?.includes(n) : !1,
                          onChange: t.handleChange,
                          onBlur: t.handleBlur,
                          disabled: r.disabled,
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
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] }) : null;
    }
    case "tags": {
      const n = Array.isArray(t.values[a]) ? t.values[a] : [], b = Array.isArray(g) ? g : Object.entries(g || {}).map(([O, C]) => ({ value: O, label: C })), w = (O) => {
        O && !n.includes(O) && t.setFieldValue(a, [...n, O]);
      }, S = (O) => {
        (O.key === "Enter" || O.key === ",") && (O.preventDefault(), w(p), x(""));
      }, L = (O) => {
        t.setFieldValue(
          a,
          n.filter((C) => C !== O)
        );
      }, M = (O) => b.find((C) => C.value === O)?.label || O, B = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
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
            className: `${A} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !r.disabled && document.getElementById(`${a}-input`)?.focus(),
            children: [
              n.map((O) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(B, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: M(O) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${M(O)}`,
                        onClick: (C) => {
                          C.stopPropagation(), r.disabled || L(O);
                        },
                        onMouseDown: (C) => C.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                O
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${a}-input`,
                  type: "text",
                  value: p,
                  onChange: (O) => x(O.target.value),
                  onKeyDown: S,
                  placeholder: n.length === 0 ? r.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: r.disabled
                }
              )
            ]
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
    }
    case "file":
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${A} ${f} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: a,
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
    case "json": {
      let n = t.values[a];
      if (typeof n == "object" && n !== null) {
        const S = JSON.stringify(n, null, 2);
        t.setFieldValue(a, S, !1), n = S;
      }
      const b = n || "", w = (S) => {
        t.setFieldValue(a, S.target.value);
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
              id: `${a}-json`,
              name: a,
              value: b,
              onChange: w,
              onBlur: t.handleBlur,
              placeholder: r.placeholder || "Enter valid JSON",
              disabled: r.disabled,
              className: `${A} ${f} min-h-[200px] font-mono text-sm resize-y`
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
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: N, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${A} ${f} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: a,
              value: t.values[a],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: r.placeholder,
              disabled: r.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${o ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
  }
}
function Se({ title: r, children: t, isFirst: l }) {
  const [i, u] = Y(l);
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
function Ee({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (d) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: E = {},
  sqlOpsUrls: g = {}
}) {
  const d = {}, p = {};
  Object.entries(t).forEach(([c, h]) => {
    J(h, d, p);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((c) => {
    c in d && (c === "tags" && typeof l[c] == "string" ? d[c] = l[c].split(",") : d[c] = l[c] ? l[c] : "");
  });
  const x = ee({
    initialValues: d,
    enableReinitialize: !0,
    validationSchema: _.object().shape(p),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([c, h], T) => /* @__PURE__ */ e.jsx(Se, { title: c, isFirst: T === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((v, j) => ae(v.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: g, components: E, field: v, formik: x, methods: o }, v.name)
      },
      v?.name ?? `field-${j}`
    )) }) }, c)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Re({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (p) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: E = {},
  sqlOpsUrls: g = {},
  widget: d
}) {
  const p = Object.keys(t), [x, c] = X.useState(0), h = {}, T = {}, v = {};
  d ? Object.entries(t).forEach(([f, N]) => {
    const k = {};
    J(N, T, k), h[f] = k;
  }) : Object.entries(t).forEach(([f, N]) => {
    J(N, T, v);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((f) => {
    f in T && (f === "tags" && typeof l[f] == "string" ? T[f] = l[f].split(",") : T[f] = l[f] ? l[f] : "");
  });
  const j = p[x] ?? null, m = j && h[j] ? h[j] : {}, R = ee({
    initialValues: T,
    enableReinitialize: !0,
    validationSchema: _.object().shape(d ? m : v),
    onSubmit: (f) => {
      d ? (x < p.length - 1 && c((N) => N + 1), x === p.length - 1 && i(f)) : i(f);
    }
  }), a = async (f) => {
    if (f.preventDefault(), !d) {
      const N = await R.validateForm();
      if (Object.keys(N).length > 0) {
        alert("Please fill all required fields before submitting."), R.setTouched(
          Object.keys(N).reduce((k, z) => ({ ...k, [z]: !0 }), {})
        );
        return;
      }
    }
    R.handleSubmit(f);
  }, A = () => {
    c((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: p.map((f, N) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => c(N),
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
          /* @__PURE__ */ e.jsxs("form", { onSubmit: a, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: j && t[j]?.map((f, N) => ae(f.hidden) ? null : /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${re[te(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: g, field: f, formik: R, methods: o, components: E }, f.name)
              },
              f?.name ?? `field-${N}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${x > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              x > 0 && /* @__PURE__ */ e.jsx("button", { onClick: A, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: u, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                x + 1,
                " of ",
                p.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: p.map((f, N) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${N === x ? "bg-action w-6" : "bg-gray-300"}`
              },
              N
            )) })
          ] }) })
        ]
      },
      p[x]
    )
  ] });
}
function Oe({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (d) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: E = {},
  sqlOpsUrls: g = {}
}) {
  const d = Object.values(t).flat(), p = {}, x = {};
  Object.entries(t).forEach(([h, T]) => {
    J(T, p, x);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((h) => {
    h in p && (h === "tags" && typeof l[h] == "string" ? p[h] = l[h].split(",") : p[h] = l[h] ? l[h] : "");
  });
  const c = ee({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: _.object().shape(x),
    onSubmit: (h) => {
      i(h);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: c.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((h, T) => ae(h.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(h.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: g, components: E, field: h, formik: c, methods: o }, h.name)
      },
      h?.name ?? `field-${T}`
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
function Te({ title: r, children: t }) {
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
function $e({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (d) => {
  },
  onCancel: u = () => {
  },
  methods: o = {},
  components: E = {},
  sqlOpsUrls: g = {}
}) {
  const d = {}, p = {};
  Object.entries(t).forEach(([c, h]) => {
    J(h, d, p);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((c) => {
    c in d && (c === "tags" && typeof l[c] == "string" ? d[c] = l[c].split(",") : d[c] = l[c] ? l[c] : "");
  });
  const x = ee({
    initialValues: d,
    enableReinitialize: !0,
    validationSchema: _.object().shape(p),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([c, h], T) => /* @__PURE__ */ e.jsx(Te, { title: c, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((v, j) => ae(v.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: g, components: E, field: v, formik: x, methods: o }, v.name)
      },
      v?.name ?? `field-${j}`
    )) }) }, c)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const Q = (r) => ({
  Authorization: `Bearer ${r.accessToken}`
}), ce = async (r) => (await D.get(
  r.baseURL + r.dbopsGetHash,
  { headers: Q(r) }
)).data.refhash, de = async (r, t) => (await D.post(
  r.baseURL + r.dbopsGetRefId,
  t,
  { headers: Q(r) }
)).data.refid, Ae = {
  async fetch(r, t) {
    const l = await ce(r), i = await de(r, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: l
    }), u = await D.post(
      r.baseURL + r.dbopsFetch,
      { refid: i, datahash: l },
      { headers: Q(r) }
    );
    return u.data?.data ?? u.data;
  },
  async create(r, t) {
    const l = await ce(r), i = await de(r, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: l
    });
    return (await D.post(
      r.baseURL + r.dbopsCreate,
      { refid: i, fields: t.values, datahash: l },
      { headers: Q(r) }
    )).data;
  },
  async update(r, t) {
    const l = await ce(r), i = await de(r, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: l
    });
    return (await D.post(
      r.baseURL + r.dbopsUpdate,
      { refid: i, fields: t.values, datahash: l },
      { headers: Q(r) }
    )).data;
  }
};
function Ie({
  formJson: r = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: l = null,
  onCancel: i = () => {
  },
  components: u = {},
  callback: o = () => {
  }
}) {
  const E = je(r), g = r.endPoints, d = r?.source?.refid, p = Ne(r?.fields ?? {}, d), [x, c] = X.useState({});
  X.useEffect(() => {
    let v = !0;
    return (async () => {
      const m = r?.source ?? {};
      if (!m?.type) {
        v && c({});
        return;
      }
      if (m.type === "method") {
        const R = m.method, a = R ? t[R] : void 0;
        if (a)
          try {
            const A = await Promise.resolve(a());
            v && c(A ?? {});
          } catch (A) {
            console.error("Method execution failed:", A), v && c({});
          }
        else
          v && c({});
      }
      if (m.type === "api")
        try {
          const R = await D({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          v && c(R.data ?? {});
        } catch (R) {
          console.error("API fetch failed:", R), v && c({});
        }
      if (m.type === "sql" && m.refid && m.refid != "0" && g?.operation !== "create") {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const R = await Ae.fetch(g, {
            source: {
              ...m,
              table: m.table,
              columns: m.columns,
              where: H(m.where, {
                refid: d
              })
            },
            fields: we(r.fields)
          });
          v && c(R);
        } catch (R) {
          console.error("API fetch failed:", R);
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    l,
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params ?? {}),
    JSON.stringify(r?.source?.body ?? {}),
    JSON.stringify(r?.source?.headers ?? {})
  ]);
  const h = async (v) => {
    const j = r?.source ?? {};
    if (j.type === "method") {
      const m = j.method, R = m ? t[m] : void 0;
      if (R)
        try {
          const a = await Promise.resolve(R(v));
          o?.(a);
        } catch (a) {
          o?.(a), console.error("Method execution failed:", a);
        }
    }
    if (j.type === "api")
      try {
        const m = await D({
          method: j.method || "POST",
          url: j.url,
          data: v ?? {},
          params: j.params ?? {},
          headers: j.headers ?? {}
        });
        o?.(m);
      } catch (m) {
        o?.(m), console.error("API fetch failed:", m);
      }
    if (j.type === "sql") {
      const m = r.endPoints;
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const R = await D({
          method: "GET",
          url: m.baseURL + m.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        let a = {
          ...j
        };
        j.where && (a = {
          ...j,
          where: H(j.where, {
            refid: d
          })
        });
        const A = await D({
          method: "POST",
          url: m.baseURL + m.dbopsGetRefId,
          data: {
            operation: j.refid ? "update" : "create",
            source: a,
            fields: r.fields,
            datahash: R.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        }), f = await D({
          method: "POST",
          url: m.baseURL + m[m.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: A.data.refid,
            fields: v,
            datahash: R.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        o?.(f);
      } catch (R) {
        o?.(R), console.error("API fetch failed:", R);
      }
    }
  }, T = {
    accordion: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: r?.title ?? "",
        groupedFields: p,
        data: x,
        onSubmit: h,
        onCancel: i,
        methods: t,
        components: u,
        sqlOpsUrls: g
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      $e,
      {
        title: r?.title ?? "",
        groupedFields: p,
        data: x,
        onSubmit: h,
        onCancel: i,
        methods: t,
        components: u,
        sqlOpsUrls: g
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Re,
      {
        title: r?.title ?? "",
        groupedFields: p,
        data: x,
        onSubmit: h,
        onCancel: i,
        methods: t,
        components: u,
        widget: r?.widget,
        sqlOpsUrls: g
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Oe,
      {
        title: r?.title ?? "",
        groupedFields: p,
        data: x,
        onSubmit: h,
        onCancel: i,
        methods: t,
        components: u,
        sqlOpsUrls: g
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: T[E] ?? T.simple });
}
export {
  Ie as LogiksForm,
  Ie as default
};
