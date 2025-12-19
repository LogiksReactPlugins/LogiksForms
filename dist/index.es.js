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
  function l(i, h, o) {
    var w = null;
    if (o !== void 0 && (w = "" + o), h.key !== void 0 && (w = "" + h.key), "key" in h) {
      o = {};
      for (var y in h)
        y !== "key" && (o[y] = h[y]);
    } else o = h;
    return h = o.ref, {
      $$typeof: r,
      type: i,
      key: w,
      ref: h !== void 0 ? h : null,
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
        case E:
          return "Fragment";
        case m:
          return "Profiler";
        case T:
          return "StrictMode";
        case v:
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
          case O:
            return "Portal";
          case A:
            return (s.displayName || "Context") + ".Provider";
          case a:
            return (s._context.displayName || "Context") + ".Consumer";
          case p:
            var f = s.render;
            return s = s.displayName, s || (s = f.displayName || f.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case z:
            return f = s.displayName || null, f !== null ? f : r(s.type) || "Memo";
          case F:
            f = s._payload, s = s._init;
            try {
              return r(s(f));
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
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var $ = f.error, P = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return $.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(s);
      }
    }
    function i(s) {
      if (s === E) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === F)
        return "<...>";
      try {
        var f = r(s);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function h() {
      var s = n.A;
      return s === null ? null : s.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function w(s) {
      if (g.call(s, "key")) {
        var f = Object.getOwnPropertyDescriptor(s, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function y(s, f) {
      function $() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var s = r(this.type);
      return M[s] || (M[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function b(s, f, $, P, V, q, oe, le) {
      return $ = q.ref, s = {
        $$typeof: S,
        type: s,
        key: f,
        props: q,
        _owner: V
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: c
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
    function x(s, f, $, P, V, q, oe, le) {
      var I = f.children;
      if (I !== void 0)
        if (P)
          if (j(I)) {
            for (P = 0; P < I.length; P++)
              d(I[P]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (g.call(f, "key")) {
        I = r(s);
        var U = Object.keys(f).filter(function(be) {
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
      if (I = null, $ !== void 0 && (l($), I = "" + $), w(f) && (l(f.key), I = "" + f.key), "key" in f) {
        $ = {};
        for (var ie in f)
          ie !== "key" && ($[ie] = f[ie]);
      } else $ = f;
      return I && y(
        $,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), b(
        s,
        I,
        q,
        V,
        h(),
        $,
        oe,
        le
      );
    }
    function d(s) {
      typeof s == "object" && s !== null && s.$$typeof === S && s._store && (s._store.validated = 1);
    }
    var u = X, S = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), A = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), n = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, j = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var L, M = {}, B = u["react-stack-bottom-frame"].bind(
      u,
      o
    )(), R = N(i(o)), C = {};
    K.Fragment = E, K.jsx = function(s, f, $, P, V) {
      var q = 1e4 > n.recentlyCreatedOwnerStacks++;
      return x(
        s,
        f,
        $,
        !1,
        P,
        V,
        q ? Error("react-stack-top-frame") : B,
        q ? N(i(s)) : R
      );
    }, K.jsxs = function(s, f, $, P, V) {
      var q = 1e4 > n.recentlyCreatedOwnerStacks++;
      return x(
        s,
        f,
        $,
        !0,
        P,
        V,
        q ? Error("react-stack-top-frame") : B,
        q ? N(i(s)) : R
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
  return Object.entries(r).forEach(([h, o]) => {
    const w = o.group || i;
    l[w] || (l[w] = []);
    let y = { ...o, name: h };
    o?.value && o?.value === "#refid#" && (y.value = t), l[w].push(y);
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
    const h = i?.name;
    if (!h) return;
    i?.type === "checkbox" ? t[h] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? t[h] = [] : h === "blocked" || h === "blacklist" ? t[h] = "false" : t[h] = i?.value ? i.value : "";
    let o;
    i?.type === "checkbox" ? o = i?.multiple === !0 ? _.array().of(_.string()) : _.boolean() : i?.type === "tags" ? o = _.array().of(_.string()) : i?.type === "email" ? o = _.string().email("Invalid email format") : i?.type === "number" ? o = _.number().typeError("Must be a number") : i?.type === "date" ? o = _.date().typeError("Invalid date format") : i?.type === "json" ? o = _.string().test("is-json", "Invalid JSON format", (w) => {
      if (!w) return !0;
      try {
        return JSON.parse(w), !0;
      } catch {
        return !1;
      }
    }) : o = _.string(), i?.required && (o = o.required(
      i?.placeholder || i?.error_message || `${i?.label || h} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (o = o.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([w, y]) => {
      switch (w) {
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
          o = _.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((c, b) => {
            if (typeof b == "string") {
              const x = b.replace(/-/g, "/"), [d, u, S] = x.split("/");
              if (d && u && S)
                return /* @__PURE__ */ new Date(`${S}-${u}-${d}`);
            }
            return c;
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
          o = _.number().typeError("Must be a decimal").transform((c, b) => {
            if (b == null || b === "") return;
            const x = Number(b);
            if (isNaN(x)) return c;
            if (typeof c == "number" && !isNaN(c)) {
              const d = Number(c);
              return Number.isInteger(d) ? Number(x.toFixed(d)) : x;
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
            (c) => c && c.toUpperCase()
          );
          break;
        case "lower":
          o = o.transform(
            (c) => c && c.toLowerCase()
          );
          break;
        case "length-min": {
          const c = Number(y);
          isNaN(c) || (o = o.min(c, `Minimum length is ${c}`));
          break;
        }
        case "length-max": {
          const c = Number(y);
          isNaN(c) || (o = o.max(c, `Maximum length is ${c}`));
          break;
        }
      }
    }), l[h] = o;
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
function se({ field: r, formik: t, methods: l = {}, components: i, sqlOpsUrls: h }) {
  const [o, w] = Y(!1), [y, c] = Y(r.options || {}), [b, x] = Y(""), [d, u] = Y(0), S = ue(null), O = ue(null), [E, T] = Y(!1), m = (n) => {
    n.currentTarget.open || x("");
  };
  he(() => {
    const n = (g) => {
      O.current && !O.current.contains(g.target) && (O.current.open = !1, x(""));
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
        c(r.options);
        return;
      }
      const j = r?.source ?? {};
      if (j.type === "method") {
        const N = j.method, L = N ? l[N] : void 0;
        if (L)
          try {
            const M = await Promise.resolve(L());
            n && c(M ?? {});
          } catch (M) {
            console.error("Method execution failed:", M), n && c({});
          }
        else
          n && c({});
      }
      if (j.type === "api" && j.url)
        try {
          const N = await D({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), L = r.valueKey || "value", M = r.labelKey || "label", B = Array.isArray(N.data?.data) ? N.data.data : [], R = {};
          B.forEach((C) => {
            R[C[L]] = C[M];
          }), n && c(R);
        } catch (N) {
          console.error("API execution failed:", N), n && c({});
        }
      if (r.table || r.type === "dataSelector") {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = r.type === "dataSelector" ? {
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
            url: h.baseURL + h.registerQuery,
            data: {
              query: N
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), M = await D({
            method: "POST",
            url: h.baseURL + h.runQuery,
            data: {
              queryid: L.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), B = r.valueKey || "value", R = r.labelKey || "title", C = Array.isArray(M.data?.data) ? M.data.data : [], s = {};
          C.forEach((f) => {
            s[f[B]] = f[R];
          }), n && c(s);
        } catch (N) {
          console.error("API fetch failed:", N);
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
  `, p = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, v = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, k = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, z = Object.keys(y || {}).length, F = ge(() => Object.entries(y || {}).filter(
    ([, n]) => b ? n.toLowerCase().includes(b.toLowerCase()) : !0
  ), [b, y]), ne = (n) => {
    if (E) {
      if (n.key === "ArrowDown" && (n.preventDefault(), u(
        (g) => g + 1 < F.length ? g + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), u(
        (g) => g - 1 >= 0 ? g - 1 : F.length - 1
      )), n.key === "Enter") {
        n.preventDefault();
        const [g, j] = F[d] || [];
        g && (x(j ?? ""), t.setFieldValue(a, g)), T(!1);
      }
      n.key === "Escape" && T(!1);
    }
  }, G = (n) => {
    if (O.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), u(
          (g) => g + 1 < F.length ? g + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), u(
          (g) => g - 1 >= 0 ? g - 1 : F.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [g] = F[d] || [];
        if (g) {
          let j = r.type === "select" || r.type === "dataSelector" || r.type === "dataMethod" || r.type === "dataSelectorFromTable" || r.type === "dataSelectorFromUniques";
          t.setFieldValue(r.name, j ? g : [...t.values[r.name], g]), O.current.open = !1;
        }
      } else n.key === "Escape" && (O.current.open = !1, x(""));
  };
  switch (he(() => {
    S.current?.querySelector(
      `[data-index="${d}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [d]), r.type) {
    case "autocomplete": {
      const n = (j) => {
        const N = j.target.value;
        x(N), t.setFieldValue(a, N), T(!0);
      }, g = (j, N) => {
        x(N), t.setFieldValue(a, j), T(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${A} ${p}`,
            value: t.values[a],
            placeholder: r.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => T(!0),
            onBlur: () => setTimeout(() => T(!1), 150),
            onKeyDown: ne
          }
        ),
        E && /* @__PURE__ */ e.jsx("div", { ref: S, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: F.length > 0 ? F.map(([j, N], L) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": L,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${d === L ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => g(j, N),
            children: N
          },
          L
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          b,
          '"'
        ] }) }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[a]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${A} ${p} min-h-[120px] resize-none`,
              onFocus: () => w(!0),
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
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: m,
            ref: O,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: t.values[a] ? y[t.values[a]] || "Select option" : `Select ${r.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: S, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: b,
                    onChange: (n) => {
                      x(n.target.value), u(0);
                    },
                    onKeyDown: G,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, g], j) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": j,
                    onClick: () => t.setFieldValue(a, n),
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: g
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${A} ${p} appearance-none cursor-pointer pr-12`,
              onFocus: () => w(!0),
              name: a,
              value: t.values[a],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: r.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r.placeholder }),
                Object.entries(y || {}).map(([n, g]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: g }, n))
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
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(y || {}).map(([n, g]) => /* @__PURE__ */ e.jsxs(
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
              g
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
        const [n, g] = Object.entries(y || {})[0] || [a, r.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: a, className: "text-sm font-medium text-gray-700 cursor-pointer", children: g })
          ] }),
          t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
        ] });
      }
      return z > 1 && z <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(y || {}).map(([n, g]) => /* @__PURE__ */ e.jsxs(
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
              g
            ]
          },
          n
        )) }),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[a]) })
      ] }) : z > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: m,
            ref: O,
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
              /* @__PURE__ */ e.jsxs("div", { ref: S, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: b,
                    onChange: (n) => {
                      x(n.target.value), u(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 ? F.map(([n, g], j) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${a}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${t.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : d === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
                      g
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
      const n = Array.isArray(t.values[a]) ? t.values[a] : [], g = Array.isArray(y) ? y : Object.entries(y || {}).map(([R, C]) => ({ value: R, label: C })), j = (R) => {
        R && !n.includes(R) && t.setFieldValue(a, [...n, R]);
      }, N = (R) => {
        (R.key === "Enter" || R.key === ",") && (R.preventDefault(), j(b), x(""));
      }, L = (R) => {
        t.setFieldValue(
          a,
          n.filter((C) => C !== R)
        );
      }, M = (R) => g.find((C) => C.value === R)?.label || R, B = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${A} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !r.disabled && document.getElementById(`${a}-input`)?.focus(),
            children: [
              n.map((R) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(B, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: M(R) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${M(R)}`,
                        onClick: (C) => {
                          C.stopPropagation(), r.disabled || L(R);
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
                  value: b,
                  onChange: (R) => x(R.target.value),
                  onKeyDown: N,
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
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${A} ${p} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => w(!0),
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
        const N = JSON.stringify(n, null, 2);
        t.setFieldValue(a, N, !1), n = N;
      }
      const g = n || "", j = (N) => {
        t.setFieldValue(a, N.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${a}-json`,
              name: a,
              value: g,
              onChange: j,
              onBlur: t.handleBlur,
              placeholder: r.placeholder || "Enter valid JSON",
              disabled: r.disabled,
              className: `${A} ${p} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ e.jsxs("label", { className: v, children: [
          r.label,
          r.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          r.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(r) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: r.type || "text",
              className: `${A} ${p} ${r.icon ? "pl-9" : ""} `,
              onFocus: () => w(!0),
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
  const [i, h] = Y(l);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => h(!i),
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
  onSubmit: i = (c) => {
  },
  onCancel: h = () => {
  },
  methods: o = {},
  components: w = {},
  sqlOpsUrls: y = {}
}) {
  const c = {}, b = {};
  Object.entries(t).forEach(([d, u]) => {
    J(u, c, b);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((d) => {
    d in c && (d === "tags" && typeof l[d] == "string" ? c[d] = l[d].split(",") : c[d] = l[d] ? l[d] : "");
  });
  const x = ee({
    initialValues: c,
    enableReinitialize: !0,
    validationSchema: _.object().shape(b),
    onSubmit: (d) => {
      i(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, u], S) => /* @__PURE__ */ e.jsx(Se, { title: d, isFirst: S === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: u.map((O, E) => ae(O.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(O.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: y, components: w, field: O, formik: x, methods: o }, O.name)
      },
      O?.name ?? `field-${E}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Re({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (b) => {
  },
  onCancel: h = () => {
  },
  methods: o = {},
  components: w = {},
  sqlOpsUrls: y = {},
  widget: c
}) {
  const b = Object.keys(t), [x, d] = X.useState(0), u = {}, S = {}, O = {};
  c ? Object.entries(t).forEach(([p, v]) => {
    const k = {};
    J(v, S, k), u[p] = k;
  }) : Object.entries(t).forEach(([p, v]) => {
    J(v, S, O);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((p) => {
    p in S && (p === "tags" && typeof l[p] == "string" ? S[p] = l[p].split(",") : S[p] = l[p] ? l[p] : "");
  });
  const E = b[x] ?? null, T = E && u[E] ? u[E] : {}, m = ee({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: _.object().shape(c ? T : O),
    onSubmit: (p) => {
      c ? (x < b.length - 1 && d((v) => v + 1), x === b.length - 1 && i(p)) : i(p);
    }
  }), a = async (p) => {
    if (p.preventDefault(), !c) {
      const v = await m.validateForm();
      if (Object.keys(v).length > 0) {
        alert("Please fill all required fields before submitting."), m.setTouched(
          Object.keys(v).reduce((k, z) => ({ ...k, [z]: !0 }), {})
        );
        return;
      }
    }
    m.handleSubmit(p);
  }, A = () => {
    d((p) => p > 0 ? p - 1 : p);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: b.map((p, v) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => d(v),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${x === v ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: p })
      },
      p
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: a, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: E && t[E]?.map((p, v) => ae(p.hidden) ? null : /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${re[te(Number(p.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: y, field: p, formik: m, methods: o, components: w }, p.name)
              },
              p?.name ?? `field-${v}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${x > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              x > 0 && /* @__PURE__ */ e.jsx("button", { onClick: A, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: h, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: c ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                x + 1,
                " of ",
                b.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: b.map((p, v) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${v === x ? "bg-action w-6" : "bg-gray-300"}`
              },
              v
            )) })
          ] }) })
        ]
      },
      b[x]
    )
  ] });
}
function Oe({
  title: r,
  groupedFields: t,
  data: l,
  onSubmit: i = (c) => {
  },
  onCancel: h = () => {
  },
  methods: o = {},
  components: w = {},
  sqlOpsUrls: y = {}
}) {
  const c = Object.values(t).flat(), b = {}, x = {};
  Object.entries(t).forEach(([u, S]) => {
    J(S, b, x);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((u) => {
    u in b && (u === "tags" && typeof l[u] == "string" ? b[u] = l[u].split(",") : b[u] = l[u] ? l[u] : "");
  });
  const d = ee({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: _.object().shape(x),
    onSubmit: (u) => {
      i(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: d.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((u, S) => ae(u.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(u.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: y, components: w, field: u, formik: d, methods: o }, u.name)
      },
      u?.name ?? `field-${S}`
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
  onSubmit: i = (c) => {
  },
  onCancel: h = () => {
  },
  methods: o = {},
  components: w = {},
  sqlOpsUrls: y = {}
}) {
  const c = {}, b = {};
  Object.entries(t).forEach(([d, u]) => {
    J(u, c, b);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((d) => {
    d in c && (d === "tags" && typeof l[d] == "string" ? c[d] = l[d].split(",") : c[d] = l[d] ? l[d] : "");
  });
  const x = ee({
    initialValues: c,
    enableReinitialize: !0,
    validationSchema: _.object().shape(b),
    onSubmit: (d) => {
      i(d);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([d, u], S) => /* @__PURE__ */ e.jsx(Te, { title: d, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: u.map((O, E) => ae(O.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${re[te(Number(O.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { sqlOpsUrls: y, components: w, field: O, formik: x, methods: o }, O.name)
      },
      O?.name ?? `field-${E}`
    )) }) }, d)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
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
    }), h = await D.post(
      r.baseURL + r.dbopsFetch,
      { refid: i, datahash: l },
      { headers: Q(r) }
    );
    return h.data?.data ?? h.data;
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
  components: h = {},
  callback: o = () => {
  },
  initialvalues: w = {}
}) {
  const y = je(r), c = r.endPoints, b = r?.source?.refid, x = Ne(r?.fields ?? {}, b), [d, u] = X.useState(w);
  X.useEffect(() => {
    let E = !0;
    return (async () => {
      const m = r?.source ?? {};
      if (!m?.type) {
        E && u({});
        return;
      }
      if (m.type === "method") {
        const a = m.method, A = a ? t[a] : void 0;
        if (A)
          try {
            const p = await Promise.resolve(A());
            E && u(p ?? {});
          } catch (p) {
            console.error("Method execution failed:", p), E && u({});
          }
        else
          E && u({});
      }
      if (m.type === "api")
        try {
          const a = await D({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          E && u(a.data ?? {});
        } catch (a) {
          console.error("API fetch failed:", a), E && u({});
        }
      if (m.type === "sql" && m.refid && m.refid != "0" && c?.operation !== "create") {
        if (!c) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const a = await Ae.fetch(c, {
            source: {
              ...m,
              table: m.table,
              columns: m.columns,
              where: H(m.where, {
                refid: b
              })
            },
            fields: we(r.fields)
          });
          E && u(a);
        } catch (a) {
          console.error("API fetch failed:", a);
        }
      }
    })(), () => {
      E = !1;
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
  const S = async (E) => {
    const T = r?.source ?? {};
    if (T.type === "method") {
      const m = T.method, a = m ? t[m] : void 0;
      if (a)
        try {
          const A = await Promise.resolve(a(E));
          o?.(A);
        } catch (A) {
          o?.(A), console.error("Method execution failed:", A);
        }
    }
    if (T.type === "api")
      try {
        const m = await D({
          method: T.method || "POST",
          url: T.url,
          data: E ?? {},
          params: T.params ?? {},
          headers: T.headers ?? {}
        });
        o?.(m);
      } catch (m) {
        o?.(m), console.error("API fetch failed:", m);
      }
    if (T.type === "sql") {
      const m = r.endPoints;
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const a = await D({
          method: "GET",
          url: m.baseURL + m.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        let A = {
          ...T
        };
        T.where && (A = {
          ...T,
          where: H(T.where, {
            refid: b
          })
        });
        const p = await D({
          method: "POST",
          url: m.baseURL + m.dbopsGetRefId,
          data: {
            operation: m.operation,
            source: A,
            fields: r.fields,
            datahash: a.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        }), v = await D({
          method: "POST",
          url: m.baseURL + m[m.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: p.data.refid,
            fields: E,
            datahash: a.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        o?.(v);
      } catch (a) {
        o?.(a), console.error("API fetch failed:", a);
      }
    }
  }, O = {
    accordion: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: r?.title ?? "",
        groupedFields: x,
        data: d,
        onSubmit: S,
        onCancel: i,
        methods: t,
        components: h,
        sqlOpsUrls: c
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      $e,
      {
        title: r?.title ?? "",
        groupedFields: x,
        data: d,
        onSubmit: S,
        onCancel: i,
        methods: t,
        components: h,
        sqlOpsUrls: c
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Re,
      {
        title: r?.title ?? "",
        groupedFields: x,
        data: d,
        onSubmit: S,
        onCancel: i,
        methods: t,
        components: h,
        widget: r?.widget,
        sqlOpsUrls: c
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Oe,
      {
        title: r?.title ?? "",
        groupedFields: x,
        data: d,
        onSubmit: S,
        onCancel: i,
        methods: t,
        components: h,
        sqlOpsUrls: c
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: O[y] ?? O.simple });
}
export {
  Ie as LogiksForm,
  Ie as default
};
