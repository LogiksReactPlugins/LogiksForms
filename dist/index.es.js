import X, { useState as G, useRef as he, useEffect as ce, useMemo as ge } from "react";
import M from "axios";
import * as P from "yup";
import { useFormik as ee } from "formik";
var Z = { exports: {} }, K = {};
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
  if (me) return K;
  me = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(i, d, l) {
    var E = null;
    if (l !== void 0 && (E = "" + l), d.key !== void 0 && (E = "" + d.key), "key" in d) {
      l = {};
      for (var R in d)
        R !== "key" && (l[R] = d[R]);
    } else l = d;
    return d = l.ref, {
      $$typeof: t,
      type: i,
      key: E,
      ref: d !== void 0 ? d : null,
      props: l
    };
  }
  return K.Fragment = r, K.jsx = o, K.jsxs = o, K;
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
var pe;
function ye() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ne ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case v:
          return "Fragment";
        case m:
          return "Profiler";
        case A:
          return "StrictMode";
        case y:
          return "Suspense";
        case S:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case s:
            return (a.displayName || "Context") + ".Provider";
          case T:
            return (a._context.displayName || "Context") + ".Consumer";
          case _:
            var p = a.render;
            return a = a.displayName, a || (a = p.displayName || p.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case q:
            return p = a.displayName || null, p !== null ? p : t(a.type) || "Memo";
          case z:
            p = a._payload, a = a._init;
            try {
              return t(a(p));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function o(a) {
      try {
        r(a);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var O = p.error, F = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return O.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), r(a);
      }
    }
    function i(a) {
      if (a === v) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var p = t(a);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var a = Y.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function E(a) {
      if (n.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function R(a, p) {
      function O() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var a = t(this.type);
      return $[a] || ($[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function b(a, p, O, F, V, B, oe, le) {
      return O = B.ref, a = {
        $$typeof: h,
        type: a,
        key: p,
        props: B,
        _owner: V
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
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
        value: oe
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function g(a, p, O, F, V, B, oe, le) {
      var L = p.children;
      if (L !== void 0)
        if (F)
          if (x(L)) {
            for (F = 0; F < L.length; F++)
              f(L[F]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(L);
      if (n.call(p, "key")) {
        L = t(a);
        var W = Object.keys(p).filter(function(be) {
          return be !== "key";
        });
        F = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", w[L + F] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          L,
          W,
          L
        ), w[L + F] = !0);
      }
      if (L = null, O !== void 0 && (o(O), L = "" + O), E(p) && (o(p.key), L = "" + p.key), "key" in p) {
        O = {};
        for (var ie in p)
          ie !== "key" && (O[ie] = p[ie]);
      } else O = p;
      return L && R(
        O,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), b(
        a,
        L,
        B,
        V,
        d(),
        O,
        oe,
        le
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === h && a._store && (a._store.validated = 1);
    }
    var c = X, h = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), s = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), Y = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, n = Object.prototype.hasOwnProperty, x = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var N, $ = {}, I = c["react-stack-bottom-frame"].bind(
      c,
      l
    )(), k = j(i(l)), w = {};
    H.Fragment = v, H.jsx = function(a, p, O, F, V) {
      var B = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return g(
        a,
        p,
        O,
        !1,
        F,
        V,
        B ? Error("react-stack-top-frame") : I,
        B ? j(i(a)) : k
      );
    }, H.jsxs = function(a, p, O, F, V) {
      var B = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return g(
        a,
        p,
        O,
        !0,
        F,
        V,
        B ? Error("react-stack-top-frame") : I,
        B ? j(i(a)) : k
      );
    };
  }()), H;
}
var xe;
function ve() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? Z.exports = fe() : Z.exports = ye()), Z.exports;
}
var e = ve();
function je(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function Ne(t, r) {
  const o = {}, i = "General";
  return Object.entries(t).forEach(([d, l]) => {
    const E = l.group || i;
    o[E] || (o[E] = []);
    let R = { ...l, name: d };
    l?.value && l?.value === "#refid#" && (R.value = r), o[E].push(R);
  }), o;
}
function we(t) {
  const r = {};
  return Object.keys(t).forEach((o) => {
    r[o] = {
      label: o,
      required: t[o].required ?? !1
    };
  }), r;
}
const J = (t, r, o) => {
  t.forEach((i) => {
    const d = i?.name;
    if (!d) return;
    i?.type === "checkbox" ? r[d] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? r[d] = [] : d === "blocked" || d === "blacklist" ? r[d] = "false" : r[d] = i?.value ? i.value : "";
    let l;
    i?.type === "checkbox" ? l = i?.multiple === !0 ? P.array().of(P.string()) : P.boolean() : i?.type === "tags" ? l = P.array().of(P.string()) : i?.type === "email" ? l = P.string().email("Invalid email format") : i?.type === "number" ? l = P.number().typeError("Must be a number") : i?.type === "date" ? l = P.date().typeError("Invalid date format") : i?.type === "json" ? l = P.string().test("is-json", "Invalid JSON format", (E) => {
      if (!E) return !0;
      try {
        return JSON.parse(E), !0;
      } catch {
        return !1;
      }
    }) : l = P.string(), i?.required && (l = l.required(
      i?.placeholder || i?.error_message || `${i?.label || d} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (l = l.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([E, R]) => {
      switch (E) {
        case "email":
          R && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(R),
            `Must match pattern: ${R}`
          );
          break;
        case "date":
          l = P.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((u, b) => {
            if (typeof b == "string") {
              const g = b.replace(/-/g, "/"), [f, c, h] = g.split("/");
              if (f && c && h)
                return /* @__PURE__ */ new Date(`${h}-${c}-${f}`);
            }
            return u;
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
          l = P.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = P.number().typeError("Must be a decimal").transform((u, b) => {
            if (b == null || b === "") return;
            const g = Number(b);
            if (isNaN(g)) return u;
            if (typeof u == "number" && !isNaN(u)) {
              const f = Number(u);
              return Number.isInteger(f) ? Number(g.toFixed(f)) : g;
            }
            return g;
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
            (u) => u && u.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (u) => u && u.toLowerCase()
          );
          break;
        case "length-min": {
          const u = Number(R);
          isNaN(u) || (l = l.min(u, `Minimum length is ${u}`));
          break;
        }
        case "length-max": {
          const u = Number(R);
          isNaN(u) || (l = l.max(u, `Maximum length is ${u}`));
          break;
        }
      }
    }), o[d] = l;
  });
}, te = {
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
function re(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const ae = (t) => t === !0 || t === "true", U = (t, r) => (console.log("input", t, r), typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (o, i) => r[i] !== void 0 ? String(r[i]) : o
) : Array.isArray(t) ? t.map((o) => U(o, r)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([o, i]) => [
    U(o, r),
    U(i, r)
  ])
) : t);
function se({ field: t, formik: r, methods: o = {}, components: i, sqlOpsUrls: d, refid: l }) {
  const [E, R] = G(!1), [u, b] = G(t.options || {}), [g, f] = G(""), [c, h] = G(0), C = he(null), v = he(null), [A, m] = G(!1), T = (n) => {
    n.currentTarget.open || f("");
  };
  ce(() => {
    const n = (x) => {
      v.current && !v.current.contains(x.target) && (v.current.open = !1, f(""));
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []);
  const s = t.name;
  X.useEffect(() => {
    let n = !0;
    return (async () => {
      if (t?.options) {
        b(t.options);
        return;
      }
      const j = t?.source ?? {};
      if (j.type === "method") {
        const N = j.method, $ = N ? o[N] : void 0;
        if ($)
          try {
            const I = await Promise.resolve($());
            n && b(I ?? {});
          } catch (I) {
            console.error("Method execution failed:", I), n && b({});
          }
        else
          n && b({});
      }
      if (j.type === "api" && j.url)
        try {
          const N = await M({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), $ = t.valueKey || "value", I = t.labelKey || "label", k = Array.isArray(N.data?.data) ? N.data.data : [], w = {};
          k.forEach((a) => {
            w[a[$]] = a[I];
          }), n && b(w);
        } catch (N) {
          console.error("API execution failed:", N), n && b({});
        }
      if (t.table || t.type === "dataSelector") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let N;
          if (t.type === "dataSelector")
            N = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: t.groupid ?? ""
              }
            };
          else {
            if (!t.table || !t.columns) {
              console.error("Invalid SQL field config", t);
              return;
            }
            N = {
              table: t.table,
              cols: t.columns
            };
          }
          t.where && t.type !== "dataSelector" && (N.where = l ? U(t.where, { refid: l }) : t.where);
          const $ = await M({
            method: "POST",
            url: d.baseURL + d.registerQuery,
            data: {
              query: N
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), I = await M({
            method: "POST",
            url: d.baseURL + d.runQuery,
            data: {
              queryid: $.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), k = t.valueKey || "value", w = t.labelKey || "title", a = Array.isArray(I.data?.data) ? I.data.data : [], p = {};
          a.forEach((O) => {
            p[O[k]] = O[w];
          }), n && b(p);
        } catch (N) {
          console.error("API fetch failed:", N);
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
  const _ = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, y = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, S = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, q = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, z = Object.keys(u || {}).length, D = ge(() => Object.entries(u || {}).filter(
    ([, n]) => g ? n.toLowerCase().includes(g.toLowerCase()) : !0
  ), [g, u]), ne = (n) => {
    if (A) {
      if (n.key === "ArrowDown" && (n.preventDefault(), h(
        (x) => x + 1 < D.length ? x + 1 : 0
      )), n.key === "ArrowUp" && (n.preventDefault(), h(
        (x) => x - 1 >= 0 ? x - 1 : D.length - 1
      )), n.key === "Enter") {
        n.preventDefault();
        const [x, j] = D[c] || [];
        x && (f(j ?? ""), r.setFieldValue(s, x)), m(!1);
      }
      n.key === "Escape" && m(!1);
    }
  }, Y = (n) => {
    if (v.current?.open)
      if (n.key === "ArrowDown")
        n.preventDefault(), h(
          (x) => x + 1 < D.length ? x + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), h(
          (x) => x - 1 >= 0 ? x - 1 : D.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [x] = D[c] || [];
        if (x) {
          let j = t.type === "select" || t.type === "dataSelector" || t.type === "dataMethod" || t.type === "dataSelectorFromTable" || t.type === "dataSelectorFromUniques";
          r.setFieldValue(t.name, j ? x : [...r.values[t.name], x]), v.current.open = !1;
        }
      } else n.key === "Escape" && (v.current.open = !1, f(""));
  };
  switch (ce(() => {
    C.current?.querySelector(
      `[data-index="${c}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [c]), ce(() => {
    const n = t.autocomplete;
    if (!n || n === "off") return;
    const x = r.values[t.name];
    if (!x) return;
    const j = n.target.split(",").map(($) => $.trim());
    (async () => {
      try {
        const $ = n.src, I = U($.where ?? {}, {
          refid: x
        });
        if ($.table && d) {
          const k = await M({
            method: "POST",
            url: d.baseURL + d.registerQuery,
            data: {
              query: {
                table: $.table,
                cols: $.columns,
                where: I
              }
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), w = await M({
            method: "POST",
            url: d.baseURL + d.runQuery,
            data: {
              queryid: k.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), a = Array.isArray(w.data?.data) ? w.data.data[0] : w.data?.data;
          if (console.log("row", a), !a) return;
          console.log("targets", j), j.forEach((p) => {
            a[p] !== void 0 && (console.log("row[t]", a[p]), r.setFieldValue(p, a[p]));
          });
        }
      } catch ($) {
        console.error("Autocomplete fetch failed", $);
      }
    })();
  }, [r.values[t.name]]), t.type) {
    case "autocomplete": {
      const n = (j) => {
        const N = j.target.value;
        f(N), r.setFieldValue(s, N), m(!0);
      }, x = (j, N) => {
        f(N), r.setFieldValue(s, j), m(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${_} ${y}`,
            value: r.values[s],
            placeholder: t.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => m(!0),
            onBlur: () => setTimeout(() => m(!1), 150),
            onKeyDown: ne
          }
        ),
        A && /* @__PURE__ */ e.jsx("div", { ref: C, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: D.length > 0 ? D.map(([j, N], $) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": $,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${c === $ ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => x(j, N),
            children: N
          },
          $
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          g,
          '"'
        ] }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${_} ${y} min-h-[120px] resize-none`,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${E ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod":
      return z > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: T,
            ref: v,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? u[r.values[s]] || "Select option" : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: C, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: g,
                    onChange: (n) => {
                      f(n.target.value), h(0);
                    },
                    onKeyDown: Y,
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                D.length > 0 ? D.map(([n, x], j) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": j,
                    onClick: () => {
                      r.setFieldValue(s, n), v.current?.removeAttribute("open"), f(""), h(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : c === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: x
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${_} ${y} appearance-none cursor-pointer pr-12`,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder }),
                Object.entries(u || {}).map(([n, x]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: x }, n))
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
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(u || {}).map(([n, x]) => /* @__PURE__ */ e.jsxs(
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
              x
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "component":
      return i?.[s];
    case "checkbox": {
      if (z === 1) {
        const [n, x] = Object.entries(u || {})[0] || [s, t.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: x })
          ] }),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return z > 1 && z <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(u || {}).map(([n, x]) => /* @__PURE__ */ e.jsxs(
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
              x
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : z > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: T,
            ref: v,
            onKeyDown: Y,
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
              /* @__PURE__ */ e.jsxs("div", { ref: C, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: g,
                    onChange: (n) => {
                      f(n.target.value), h(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                D.length > 0 ? D.map(([n, x], j) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : c === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
                      x
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
      const n = Array.isArray(r.values[s]) ? r.values[s] : [], x = Array.isArray(u) ? u : Object.entries(u || {}).map(([w, a]) => ({ value: w, label: a })), j = (w) => {
        w && !n.includes(w) && r.setFieldValue(s, [...n, w]);
      }, N = (w) => {
        (w.key === "Enter" || w.key === ",") && (w.preventDefault(), j(g), f(""));
      }, $ = (w) => {
        r.setFieldValue(
          s,
          n.filter((a) => a !== w)
        );
      }, I = (w) => x.find((a) => a.value === w)?.label || w, k = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((w) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(k, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: I(w) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${I(w)}`,
                        onClick: (a) => {
                          a.stopPropagation(), t.disabled || $(w);
                        },
                        onMouseDown: (a) => a.preventDefault(),
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
                  value: g,
                  onChange: (w) => f(w.target.value),
                  onKeyDown: N,
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
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: q(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${_} ${y} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => R(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${E ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      let n = r.values[s];
      if (typeof n == "object" && n !== null) {
        const N = JSON.stringify(n, null, 2);
        r.setFieldValue(s, N, !1), n = N;
      }
      const x = n || "", j = (N) => {
        r.setFieldValue(s, N.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: x,
              onChange: j,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${_} ${y} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${E ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: S, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: q(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${_} ${y} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => R(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${E ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Se({ title: t, children: r, isFirst: o }) {
  const [i, d] = G(o);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => d(!i),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${i ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Ee({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (b) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: R = {},
  refid: u
}) {
  const b = {}, g = {};
  Object.entries(r).forEach(([c, h]) => {
    J(h, b, g);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((c) => {
    c in b && (c === "tags" && typeof o[c] == "string" ? b[c] = o[c].split(",") : b[c] = o[c] ? o[c] : "");
  });
  const f = ee({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: P.object().shape(g),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([c, h], C) => /* @__PURE__ */ e.jsx(Se, { title: c, isFirst: C === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((v, A) => ae(v.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${te[re(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { refid: u, sqlOpsUrls: R, components: E, field: v, formik: f, methods: l }, v.name)
      },
      v?.name ?? `field-${A}`
    )) }) }, c)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Re({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (g) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: R = {},
  widget: u,
  refid: b
}) {
  const g = Object.keys(r), [f, c] = X.useState(0), h = {}, C = {}, v = {};
  u ? Object.entries(r).forEach(([y, S]) => {
    const q = {};
    J(S, C, q), h[y] = q;
  }) : Object.entries(r).forEach(([y, S]) => {
    J(S, C, v);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((y) => {
    y in C && (y === "tags" && typeof o[y] == "string" ? C[y] = o[y].split(",") : C[y] = o[y] ? o[y] : "");
  });
  const A = g[f] ?? null, m = A && h[A] ? h[A] : {}, T = ee({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: P.object().shape(u ? m : v),
    onSubmit: (y) => {
      u ? (f < g.length - 1 && c((S) => S + 1), f === g.length - 1 && i(y)) : i(y);
    }
  }), s = async (y) => {
    if (y.preventDefault(), !u) {
      const S = await T.validateForm();
      if (Object.keys(S).length > 0) {
        alert("Please fill all required fields before submitting."), T.setTouched(
          Object.keys(S).reduce((q, z) => ({ ...q, [z]: !0 }), {})
        );
        return;
      }
    }
    T.handleSubmit(y);
  }, _ = () => {
    c((y) => y > 0 ? y - 1 : y);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: g.map((y, S) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => c(S),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${f === S ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: y })
      },
      y
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: s, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: A && r[A]?.map((y, S) => ae(y.hidden) ? null : /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${te[re(Number(y.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(se, { refid: b, sqlOpsUrls: R, field: y, formik: T, methods: l, components: E }, y.name)
              },
              y?.name ?? `field-${S}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${f > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              f > 0 && /* @__PURE__ */ e.jsx("button", { onClick: _, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: d, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: u ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                f + 1,
                " of ",
                g.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: g.map((y, S) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${S === f ? "bg-action w-6" : "bg-gray-300"}`
              },
              S
            )) })
          ] }) })
        ]
      },
      g[f]
    )
  ] });
}
function Te({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (b) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: R = {},
  refid: u
}) {
  const b = Object.values(r).flat(), g = {}, f = {};
  Object.entries(r).forEach(([h, C]) => {
    J(C, g, f);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((h) => {
    h in g && (h === "tags" && typeof o[h] == "string" ? g[h] = o[h].split(",") : g[h] = o[h] ? o[h] : "");
  });
  const c = ee({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: P.object().shape(f),
    onSubmit: (h) => {
      i(h);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: c.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: b.map((h, C) => ae(h.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${te[re(Number(h.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { refid: u, sqlOpsUrls: R, components: E, field: h, formik: c, methods: l }, h.name)
      },
      h?.name ?? `field-${C}`
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ae({ title: t, children: r }) {
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
  data: o,
  onSubmit: i = (b) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: E = {},
  sqlOpsUrls: R = {},
  refid: u
}) {
  const b = {}, g = {};
  Object.entries(r).forEach(([c, h]) => {
    J(h, b, g);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((c) => {
    c in b && (c === "tags" && typeof o[c] == "string" ? b[c] = o[c].split(",") : b[c] = o[c] ? o[c] : "");
  });
  const f = ee({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: P.object().shape(g),
    onSubmit: (c) => {
      i(c);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([c, h], C) => /* @__PURE__ */ e.jsx(Ae, { title: c, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((v, A) => ae(v.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${te[re(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(se, { refid: u, sqlOpsUrls: R, components: E, field: v, formik: f, methods: l }, v.name)
      },
      v?.name ?? `field-${A}`
    )) }) }, c)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const Q = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), de = async (t) => (await M.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Q(t) }
)).data.refhash, ue = async (t, r) => (await M.post(
  t.baseURL + t.dbopsGetRefId,
  r,
  { headers: Q(t) }
)).data.refid, $e = {
  async fetch(t, r) {
    const o = await de(t), i = await ue(t, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), d = await M.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: o },
      { headers: Q(t) }
    );
    return d.data?.data ?? d.data;
  },
  async create(t, r) {
    const o = await de(t), i = await ue(t, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await M.post(
      t.baseURL + t.dbopsCreate,
      { refid: i, fields: r.values, datahash: o },
      { headers: Q(t) }
    )).data;
  },
  async update(t, r) {
    const o = await de(t), i = await ue(t, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await M.post(
      t.baseURL + t.dbopsUpdate,
      { refid: i, fields: r.values, datahash: o },
      { headers: Q(t) }
    )).data;
  }
};
function Ie({
  formJson: t = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: o = null,
  onCancel: i = () => {
  },
  components: d = {},
  callback: l = () => {
  },
  initialvalues: E = {}
}) {
  const R = je(t), u = t.endPoints, b = t?.source?.refid, g = Ne(t?.fields ?? {}, b), [f, c] = X.useState(E);
  X.useEffect(() => {
    let v = !0;
    return (async () => {
      const m = t?.source ?? {};
      if (!m?.type) {
        v && c({});
        return;
      }
      if (m.type === "method") {
        const T = m.method, s = T ? r[T] : void 0;
        if (s)
          try {
            const _ = await Promise.resolve(s());
            v && c(_ ?? {});
          } catch (_) {
            console.error("Method execution failed:", _), v && c({});
          }
        else
          v && c({});
      }
      if (m.type === "api")
        try {
          const T = await M({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          v && c(T.data ?? {});
        } catch (T) {
          console.error("API fetch failed:", T), v && c({});
        }
      if (m.type === "sql" && m.refid && m.refid != "0" && u?.operation !== "create") {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const T = await $e.fetch(u, {
            source: {
              ...m,
              table: m.table,
              columns: m.columns,
              where: U(m.where, {
                refid: b
              })
            },
            fields: we(t.fields)
          });
          v && c(T);
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    o,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const h = async (v) => {
    const A = t?.source ?? {};
    if (A.type === "method") {
      const m = A.method, T = m ? r[m] : void 0;
      if (T)
        try {
          const s = await Promise.resolve(T(v));
          l?.(s);
        } catch (s) {
          l?.(s), console.error("Method execution failed:", s);
        }
    }
    if (A.type === "api")
      try {
        const m = await M({
          method: A.method || "POST",
          url: A.url,
          data: v ?? {},
          params: A.params ?? {},
          headers: A.headers ?? {}
        });
        l?.(m);
      } catch (m) {
        l?.(m), console.error("API fetch failed:", m);
      }
    if (A.type === "sql") {
      const m = t.endPoints;
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const T = await M({
          method: "GET",
          url: m.baseURL + m.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        let s = {
          ...A
        };
        A.where && (s = {
          ...A,
          where: U(A.where, {
            refid: b
          })
        });
        const _ = await M({
          method: "POST",
          url: m.baseURL + m.dbopsGetRefId,
          data: {
            operation: m.operation,
            source: s,
            fields: t.fields,
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        }), y = await M({
          method: "POST",
          url: m.baseURL + m[m.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: _.data.refid,
            fields: v,
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        l?.(y);
      } catch (T) {
        l?.(T), console.error("API fetch failed:", T);
      }
    }
  }, C = {
    accordion: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: t?.title ?? "",
        groupedFields: g,
        data: f,
        onSubmit: h,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: u,
        refid: b
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Oe,
      {
        title: t?.title ?? "",
        groupedFields: g,
        data: f,
        onSubmit: h,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: u,
        refid: b
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Re,
      {
        title: t?.title ?? "",
        groupedFields: g,
        data: f,
        onSubmit: h,
        onCancel: i,
        methods: r,
        components: d,
        widget: t?.widget,
        sqlOpsUrls: u,
        refid: b
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Te,
      {
        title: t?.title ?? "",
        groupedFields: g,
        data: f,
        onSubmit: h,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: u,
        refid: b
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: C[R] ?? C.simple });
}
export {
  Ie as LogiksForm,
  Ie as default
};
