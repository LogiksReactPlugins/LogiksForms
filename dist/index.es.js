import K, { useState as H, useRef as me, useEffect as ee, useMemo as fe } from "react";
import D from "axios";
import * as P from "yup";
import { useFormik as re } from "formik";
var te = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function ye() {
  if (pe) return Q;
  pe = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(i, d, l) {
    var O = null;
    if (l !== void 0 && (O = "" + l), d.key !== void 0 && (O = "" + d.key), "key" in d) {
      l = {};
      for (var T in d)
        T !== "key" && (l[T] = d[T]);
    } else l = d;
    return d = l.ref, {
      $$typeof: t,
      type: i,
      key: O,
      ref: d !== void 0 ? d : null,
      props: l
    };
  }
  return Q.Fragment = r, Q.jsx = o, Q.jsxs = o, Q;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ve() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === M ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case u:
          return "Fragment";
        case c:
          return "Profiler";
        case h:
          return "StrictMode";
        case s:
          return "Suspense";
        case q:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case A:
            return "Portal";
          case E:
            return (a.displayName || "Context") + ".Provider";
          case b:
            return (a._context.displayName || "Context") + ".Consumer";
          case B:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case k:
            return m = a.displayName || null, m !== null ? m : t(a.type) || "Memo";
          case x:
            m = a._payload, a = a._init;
            try {
              return t(a(m));
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
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var R = m.error, C = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return R.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), r(a);
      }
    }
    function i(a) {
      if (a === u) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === x)
        return "<...>";
      try {
        var m = t(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var a = z.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function O(a) {
      if (W.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function T(a, m) {
      function R() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: R,
        configurable: !0
      });
    }
    function p() {
      var a = t(this.type);
      return w[a] || (w[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function N(a, m, R, C, I, Y, le, ie) {
      return R = Y.ref, a = {
        $$typeof: j,
        type: a,
        key: m,
        props: Y,
        _owner: I
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: p
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
        value: le
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function f(a, m, R, C, I, Y, le, ie) {
      var L = m.children;
      if (L !== void 0)
        if (C)
          if (n(L)) {
            for (C = 0; C < L.length; C++)
              v(L[C]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(L);
      if (W.call(m, "key")) {
        L = t(a);
        var U = Object.keys(m).filter(function(ge) {
          return ge !== "key";
        });
        C = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", V[L + C] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          L,
          U,
          L
        ), V[L + C] = !0);
      }
      if (L = null, R !== void 0 && (o(R), L = "" + R), O(m) && (o(m.key), L = "" + m.key), "key" in m) {
        R = {};
        for (var ce in m)
          ce !== "key" && (R[ce] = m[ce]);
      } else R = m;
      return L && T(
        R,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), N(
        a,
        L,
        Y,
        I,
        d(),
        R,
        le,
        ie
      );
    }
    function v(a) {
      typeof a == "object" && a !== null && a.$$typeof === j && a._store && (a._store.validated = 1);
    }
    var y = K, j = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), E = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), z = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, n = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var g, w = {}, F = y["react-stack-bottom-frame"].bind(
      y,
      l
    )(), _ = S(i(l)), V = {};
    X.Fragment = u, X.jsx = function(a, m, R, C, I) {
      var Y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return f(
        a,
        m,
        R,
        !1,
        C,
        I,
        Y ? Error("react-stack-top-frame") : F,
        Y ? S(i(a)) : _
      );
    }, X.jsxs = function(a, m, R, C, I) {
      var Y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return f(
        a,
        m,
        R,
        !0,
        C,
        I,
        Y ? Error("react-stack-top-frame") : F,
        Y ? S(i(a)) : _
      );
    };
  }()), X;
}
var be;
function je() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? te.exports = ye() : te.exports = ve()), te.exports;
}
var e = je();
function Ne(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function we(t) {
  const r = {}, o = "General";
  return Object.entries(t).forEach(([i, d]) => {
    const l = d.group || o;
    r[l] || (r[l] = []);
    let O = { ...d, name: i };
    r[l].push(O);
  }), r;
}
function Se(t) {
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
    i?.default !== void 0 && i?.default !== null ? r[d] = i.default : i?.type === "checkbox" ? r[d] = i?.multiple === !0 ? [] : !1 : i?.type === "tags" ? r[d] = [] : d === "blocked" || d === "blacklist" ? r[d] = "false" : r[d] = i?.default ?? "";
    let l;
    i?.type === "checkbox" ? l = i?.multiple === !0 ? P.array().of(P.string()) : P.boolean() : i?.type === "tags" ? l = P.array().of(P.string()) : i?.type === "email" ? l = P.string().email("Invalid email format") : i?.type === "number" ? l = P.number().typeError("Must be a number") : i?.type === "date" ? l = P.date().typeError("Invalid date format") : i?.type === "json" ? l = P.string().test("is-json", "Invalid JSON format", (O) => {
      if (!O) return !0;
      try {
        return JSON.parse(O), !0;
      } catch {
        return !1;
      }
    }) : l = P.string(), i?.required && (l = l.required(
      i?.placeholder || i?.error_message || `${i?.label || d} is required`
    )), i?.validate?.regex && typeof i.validate.regex == "string" && (l = l.matches(
      new RegExp(i?.validate?.regex),
      i?.error_message || "Invalid input format"
    )), i?.validate && Object.entries(i.validate).forEach(([O, T]) => {
      switch (O) {
        case "email":
          T && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(T),
            `Must match pattern: ${T}`
          );
          break;
        case "date":
          l = P.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((p, N) => {
            if (typeof N == "string") {
              const f = N.replace(/-/g, "/"), [v, y, j] = f.split("/");
              if (v && y && j)
                return /* @__PURE__ */ new Date(`${j}-${y}-${v}`);
            }
            return p;
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
          l = P.number().typeError("Must be a decimal").transform((p, N) => {
            if (N == null || N === "") return;
            const f = Number(N);
            if (isNaN(f)) return p;
            if (typeof p == "number" && !isNaN(p)) {
              const v = Number(p);
              return Number.isInteger(v) ? Number(f.toFixed(v)) : f;
            }
            return f;
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
            (p) => p && p.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (p) => p && p.toLowerCase()
          );
          break;
        case "length-min": {
          const p = Number(T);
          isNaN(p) || (l = l.min(p, `Minimum length is ${p}`));
          break;
        }
        case "length-max": {
          const p = Number(T);
          isNaN(p) || (l = l.max(p, `Maximum length is ${p}`));
          break;
        }
      }
    }), o[d] = l;
  });
}, ae = {
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
function se(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const ne = (t) => t === !0 || t === "true", G = (t, r) => (console.log("input", t, r), typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (o, i) => r[i] !== void 0 ? String(r[i]) : o
) : Array.isArray(t) ? t.map((o) => G(o, r)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([o, i]) => [
    G(o, r),
    G(i, r)
  ])
) : t), de = (t, r, o) => {
  const i = Array.isArray(o.data?.data) ? o.data.data : Array.isArray(o.data) ? o.data : [], d = {};
  return i.forEach((l) => {
    d[l[t]] = l[r];
  }), d;
};
function oe({
  field: t,
  formik: r,
  methods: o = {},
  components: i,
  sqlOpsUrls: d,
  refid: l,
  optionsOverride: O,
  setFieldOptions: T
}) {
  const [p, N] = H(!1), [f, v] = H(
    O ?? t.options ?? {}
  ), [y, j] = H(""), [A, u] = H(0), h = me(null), c = me(null), [b, E] = H(!1), B = (n) => {
    n.currentTarget.open || j("");
  };
  ee(() => {
    O && v(O);
  }, [O]), ee(() => {
    const n = (S) => {
      c.current && !c.current.contains(S.target) && (c.current.open = !1, j(""));
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
        v(t.options);
        return;
      }
      const g = t?.source ?? {};
      if (g.type === "method") {
        const w = g.method, F = w ? o[w] : void 0;
        if (F)
          try {
            const _ = await Promise.resolve(F());
            n && v(_ ?? {});
          } catch (_) {
            console.error("Method execution failed:", _), n && v({});
          }
        else
          n && v({});
      }
      if (g.type === "api" && g.url)
        try {
          const w = await D({
            method: g.method || "GET",
            url: g.url,
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          }), F = t.valueKey || "value", _ = t.labelKey || "title", V = de(F, _, w);
          n && v(V);
        } catch (w) {
          console.error("API execution failed:", w), n && v({});
        }
      if (t.table || t.type === "dataSelector") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let w;
          if (t.type === "dataSelector")
            w = {
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
            w = {
              table: t.table,
              cols: t.columns
            };
          }
          t.where && t.type !== "dataSelector" && (w.where = l ? G(t.where, { refid: l }) : t.where);
          const F = await D({
            method: "POST",
            url: d.baseURL + d.registerQuery,
            data: { query: w },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), _ = await D({
            method: "POST",
            url: d.baseURL + d.runQuery,
            data: {
              queryid: F.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), V = t.valueKey || "value", a = t.labelKey || "title", m = de(V, a, _);
          n && v(m);
        } catch (w) {
          console.error("API fetch failed:", w);
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
  const q = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, k = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, x = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, $ = (n) => n.icon ? /* @__PURE__ */ e.jsx("i", { className: n.icon }) : null, M = Object.keys(f || {}).length, z = fe(() => Object.entries(f || {}).filter(
    ([, n]) => y ? n.toLowerCase().includes(y.toLowerCase()) : !0
  ), [y, f]), W = (n, S) => {
    if (c.current?.open === !0 || b === !0)
      if (n.key === "ArrowDown")
        n.preventDefault(), u(
          (g) => g + 1 < z.length ? g + 1 : 0
        );
      else if (n.key === "ArrowUp")
        n.preventDefault(), u(
          (g) => g - 1 >= 0 ? g - 1 : z.length - 1
        );
      else if (n.key === "Enter") {
        n.preventDefault();
        const [g] = z[A] || [];
        g && r.setFieldValue(t.name, S ? g : [...r.values[t.name], g]), c.current && (c.current.open = !1);
      } else n.key === "Escape" && (c.current.open = !1, j(""), E(!1));
  };
  switch (ee(() => {
    h.current?.querySelector(
      `[data-index="${A}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [A]), ee(() => {
    const n = t.autocomplete, S = t.ajaxchain, g = n || S;
    if (!g || g === "off") return;
    const w = r.values[t.name];
    if (!w) return;
    (async () => {
      try {
        const _ = g.src, V = G(_.where ?? {}, {
          refid: w
        });
        if (_.table && d) {
          const a = await D({
            method: "POST",
            url: d.baseURL + d.registerQuery,
            data: {
              query: {
                table: _.table,
                cols: _.columns,
                where: V
              }
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), { data: m } = await D({
            method: "POST",
            url: d.baseURL + d.runQuery,
            data: {
              queryid: a.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          });
          if (n) {
            const R = g.target.split(",").map((I) => I.trim()), C = Array.isArray(m?.data) ? m?.data[0] : m?.data;
            if (!C) return;
            R.forEach((I) => {
              C[I] !== void 0 && r.setFieldValue(I, C[I]);
            });
          }
          if (S) {
            const R = t.valueKey || "value", C = t.labelKey || "title", I = de(R, C, m);
            T?.(S.target, I);
          }
        }
      } catch (_) {
        console.error("Autocomplete fetch failed", _);
      }
    })();
  }, [r.values[t.name]]), t.type) {
    case "autocomplete": {
      const n = (g) => {
        const w = g.target.value;
        j(w), r.setFieldValue(s, w), E(!0);
      }, S = (g, w) => {
        r.setFieldValue(s, g), E(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${q} ${k}`,
            value: r.values[s],
            placeholder: t.placeholder || "Type to search...",
            onChange: n,
            onFocus: () => E(!0),
            onBlur: () => setTimeout(() => E(!1), 150),
            onKeyDown: (g) => W(g, !0)
          }
        ),
        b && /* @__PURE__ */ e.jsx("div", { ref: h, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: z.length > 0 ? z.map(([g, w], F) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": F,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${A === F ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: () => S(g),
            children: w
          },
          F
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          y,
          '"'
        ] }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${q} ${k} min-h-[120px] resize-none`,
              onFocus: () => N(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${p ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod":
      return M > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: B,
            ref: c,
            onKeyDown: (n) => W(n, !0),
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? f[r.values[s]] || "Select option" : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: h, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: y,
                    onChange: (n) => {
                      j(n.target.value), u(0);
                    },
                    onKeyDown: (n) => W(n, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                z.length > 0 ? z.map(([n, S], g) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": g,
                    onClick: () => {
                      r.setFieldValue(s, n), c.current?.removeAttribute("open"), j(""), u(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : A === g ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: S
                  },
                  n
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${q} ${k} appearance-none cursor-pointer pr-12`,
              onFocus: () => N(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder }),
                Object.entries(f || {}).map(([n, S]) => /* @__PURE__ */ e.jsx("option", { value: n, className: "py-2", children: S }, n))
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
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${M > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(f || {}).map(([n, S]) => /* @__PURE__ */ e.jsxs(
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
              S
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "component":
      return i?.[s];
    case "checkbox": {
      if (M === 1) {
        const [n, S] = Object.entries(f || {})[0] || [s, t.label];
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
            /* @__PURE__ */ e.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: S })
          ] }),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return M > 1 && M <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(f || {}).map(([n, S]) => /* @__PURE__ */ e.jsxs(
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
              S
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : M > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: B,
            ref: c,
            onKeyDown: (n) => W(n, !1),
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
              /* @__PURE__ */ e.jsxs("div", { ref: h, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: y,
                    onChange: (n) => {
                      j(n.target.value), u(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                z.length > 0 ? z.map(([n, S], g) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${n}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : A === g ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
                      S
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
      const n = Array.isArray(r.values[s]) ? r.values[s] : [], S = Array.isArray(f) ? f : Object.entries(f || {}).map(([a, m]) => ({ value: a, label: m })), g = (a) => {
        a && !n.includes(a) && r.setFieldValue(s, [...n, a]);
      }, w = (a) => {
        (a.key === "Enter" || a.key === ",") && (a.preventDefault(), g(y), j(""));
      }, F = (a) => {
        r.setFieldValue(
          s,
          n.filter((m) => m !== a)
        );
      }, _ = (a) => S.find((m) => m.value === a)?.label || a, V = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${q} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((a) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(V, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: _(a) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${_(a)}`,
                        onClick: (m) => {
                          m.stopPropagation(), t.disabled || F(a);
                        },
                        onMouseDown: (m) => m.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                a
              )),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: y,
                  onChange: (a) => j(a.target.value),
                  onKeyDown: w,
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
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: $(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${q} ${k} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => N(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${p ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      let n = r.values[s];
      if (typeof n == "object" && n !== null) {
        const w = JSON.stringify(n, null, 2);
        r.setFieldValue(s, w, !1), n = w;
      }
      const S = n || "", g = (w) => {
        r.setFieldValue(s, w.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: S,
              onChange: g,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${q} ${k} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${p ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: x, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: $(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${q} ${k} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => N(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${p ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Ee({ title: t, children: r, isFirst: o }) {
  const [i, d] = H(o);
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
function Oe({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (N) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: O = {},
  sqlOpsUrls: T = {},
  refid: p
}) {
  const [N, f] = K.useState({}), v = (u, h) => {
    f((c) => ({
      ...c,
      [u]: h
    }));
  }, y = {}, j = {};
  Object.entries(r).forEach(([u, h]) => {
    J(h, y, j);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((u) => {
    u in y && (u === "tags" && typeof o[u] == "string" ? y[u] = o[u].split(",") : y[u] = o[u] ? o[u] : "");
  });
  const A = re({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: P.object().shape(j),
    onSubmit: (u) => {
      i(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([u, h], c) => /* @__PURE__ */ e.jsx(Ee, { title: u, isFirst: c === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((b, E) => ne(b.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: p,
            sqlOpsUrls: T,
            components: O,
            field: b,
            formik: A,
            methods: l,
            setFieldOptions: v,
            ...N[b.name] ? { optionsOverride: N[b.name] } : {}
          },
          b.name
        )
      },
      b?.name ?? `field-${E}`
    )) }) }, u)) }),
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
  onSubmit: i = (f) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: O = {},
  sqlOpsUrls: T = {},
  widget: p,
  refid: N
}) {
  const f = Object.keys(r), [v, y] = K.useState(0), [j, A] = K.useState({}), u = (x, $) => {
    A((M) => ({
      ...M,
      [x]: $
    }));
  }, h = {}, c = {}, b = {};
  p ? Object.entries(r).forEach(([x, $]) => {
    const M = {};
    J($, c, M), h[x] = M;
  }) : Object.entries(r).forEach(([x, $]) => {
    J($, c, b);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((x) => {
    x in c && (x === "tags" && typeof o[x] == "string" ? c[x] = o[x].split(",") : c[x] = o[x] ? o[x] : "");
  });
  const E = f[v] ?? null, B = E && h[E] ? h[E] : {}, s = re({
    initialValues: c,
    enableReinitialize: !0,
    validationSchema: P.object().shape(p ? B : b),
    onSubmit: (x) => {
      p ? (v < f.length - 1 && y(($) => $ + 1), v === f.length - 1 && i(x)) : i(x);
    }
  }), q = async (x) => {
    if (x.preventDefault(), !p) {
      const $ = await s.validateForm();
      if (Object.keys($).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys($).reduce((M, z) => ({ ...M, [z]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(x);
  }, k = () => {
    y((x) => x > 0 ? x - 1 : x);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: f.map((x, $) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => y($),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === $ ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: x })
      },
      x
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: q, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: E && r[E]?.map((x, $) => ne(x.hidden) ? null : /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${ae[se(Number(x.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(
                  oe,
                  {
                    refid: N,
                    sqlOpsUrls: T,
                    field: x,
                    formik: s,
                    methods: l,
                    components: O,
                    setFieldOptions: u,
                    ...j[x.name] ? { optionsOverride: j[x.name] } : {}
                  },
                  x.name
                )
              },
              x?.name ?? `field-${$}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              v > 0 && /* @__PURE__ */ e.jsx("button", { onClick: k, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: d, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: p ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                v + 1,
                " of ",
                f.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: f.map((x, $) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${$ === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              $
            )) })
          ] }) })
        ]
      },
      f[v]
    )
  ] });
}
function Te({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (N) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: O = {},
  sqlOpsUrls: T = {},
  refid: p
}) {
  const N = Object.values(r).flat(), [f, v] = K.useState({}), y = (h, c) => {
    v((b) => ({
      ...b,
      [h]: c
    }));
  }, j = {}, A = {};
  Object.entries(r).forEach(([h, c]) => {
    J(c, j, A);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((h) => {
    h in j && (h === "tags" && typeof o[h] == "string" ? j[h] = o[h].split(",") : j[h] = o[h] ? o[h] : "");
  });
  const u = re({
    initialValues: j,
    enableReinitialize: !0,
    validationSchema: P.object().shape(A),
    onSubmit: (h) => {
      i(h);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: N.map((h, c) => ne(h.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(h.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: p,
            sqlOpsUrls: T,
            components: O,
            field: h,
            formik: u,
            methods: l,
            setFieldOptions: y,
            ...f[h.name] ? { optionsOverride: f[h.name] } : {}
          },
          h.name
        )
      },
      h?.name ?? `field-${c}`
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
function $e({ title: t, children: r }) {
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
function Ae({
  title: t,
  groupedFields: r,
  data: o,
  onSubmit: i = (N) => {
  },
  onCancel: d = () => {
  },
  methods: l = {},
  components: O = {},
  sqlOpsUrls: T = {},
  refid: p
}) {
  const [N, f] = K.useState({}), v = (u, h) => {
    f((c) => ({
      ...c,
      [u]: h
    }));
  }, y = {}, j = {};
  Object.entries(r).forEach(([u, h]) => {
    J(h, y, j);
  }), o && Object.keys(o).length > 0 && Object.keys(o).forEach((u) => {
    u in y && (u === "tags" && typeof o[u] == "string" ? y[u] = o[u].split(",") : y[u] = o[u] ? o[u] : "");
  });
  const A = re({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: P.object().shape(j),
    onSubmit: (u) => {
      i(u);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([u, h], c) => /* @__PURE__ */ e.jsx($e, { title: u, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((b, E) => ne(b.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: p,
            sqlOpsUrls: T,
            components: O,
            field: b,
            formik: A,
            methods: l,
            setFieldOptions: v,
            ...N[b.name] ? { optionsOverride: N[b.name] } : {}
          },
          b.name
        )
      },
      b?.name ?? `field-${E}`
    )) }) }, u)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: d, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const Z = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), ue = async (t) => (await D.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Z(t) }
)).data.refhash, he = async (t, r) => (await D.post(
  t.baseURL + t.dbopsGetRefId,
  r,
  { headers: Z(t) }
)).data.refid, Ce = {
  async fetch(t, r) {
    const o = await ue(t), i = await he(t, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), d = await D.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: o },
      { headers: Z(t) }
    );
    return d.data?.data ?? d.data;
  },
  async create(t, r) {
    const o = await ue(t), i = await he(t, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await D.post(
      t.baseURL + t.dbopsCreate,
      { refid: i, fields: r.values, datahash: o },
      { headers: Z(t) }
    )).data;
  },
  async update(t, r) {
    const o = await ue(t), i = await he(t, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await D.post(
      t.baseURL + t.dbopsUpdate,
      { refid: i, fields: r.values, datahash: o },
      { headers: Z(t) }
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
  initialvalues: O = {}
}) {
  const T = Ne(t), p = t.endPoints, N = t?.source?.refid, f = we(t?.fields ?? {}), [v, y] = K.useState(O);
  K.useEffect(() => {
    let u = !0;
    return (async () => {
      const c = t?.source ?? {};
      if (!c?.type) {
        u && y({});
        return;
      }
      if (c.type === "method") {
        const b = c.method, E = b ? r[b] : void 0;
        if (E)
          try {
            const B = await Promise.resolve(E());
            u && y(B ?? {});
          } catch (B) {
            console.error("Method execution failed:", B), u && y({});
          }
        else
          u && y({});
      }
      if (c.type === "api" && p?.operation !== "create")
        try {
          const b = await D({
            method: c.method || "GET",
            url: c.url ?? "",
            data: c.body ?? {},
            params: c.params ?? {},
            headers: c.headers ?? {}
          });
          u && y(b.data ?? {});
        } catch (b) {
          console.error("API fetch failed:", b), u && y({});
        }
      if (c.type === "sql" && c.refid && c.refid != "0" && p?.operation !== "create") {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const b = await Ce.fetch(p, {
            source: {
              ...c,
              table: c.table,
              columns: c.columns,
              where: G(c.where, {
                refid: N
              })
            },
            fields: Se(t.fields)
          });
          u && y(b);
        } catch (b) {
          console.error("API fetch failed:", b);
        }
      }
    })(), () => {
      u = !1;
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
  const j = async (u) => {
    const h = t?.source ?? {};
    if (h.type === "method") {
      const c = h.method, b = c ? r[c] : void 0;
      if (b)
        try {
          const E = await Promise.resolve(b(u));
          l?.(E);
        } catch (E) {
          l?.(E), console.error("Method execution failed:", E);
        }
    }
    if (h.type === "api")
      try {
        const c = await D({
          method: h.method || "POST",
          url: h.url,
          data: u ?? {},
          params: h.params ?? {},
          headers: h.headers ?? {}
        });
        l?.(c);
      } catch (c) {
        l?.(c), console.error("API fetch failed:", c);
      }
    if (h.type === "sql") {
      const c = t.endPoints;
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const b = await D({
          method: "GET",
          url: c.baseURL + c.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        let E = {
          ...h
        };
        h.where && (E = {
          ...h,
          where: G(h.where, {
            refid: N
          })
        });
        const B = await D({
          method: "POST",
          url: c.baseURL + c.dbopsGetRefId,
          data: {
            operation: c.operation,
            source: E,
            fields: t.fields,
            forcefill: t.forcefill,
            datahash: b.data.refhash
          },
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        }), s = await D({
          method: "POST",
          url: c.baseURL + c[c.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: B.data.refid,
            fields: u,
            datahash: b.data.refhash
          },
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        l?.(s);
      } catch (b) {
        l?.(b), console.error("API fetch failed:", b);
      }
    }
  }, A = {
    accordion: /* @__PURE__ */ e.jsx(
      Oe,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: v,
        onSubmit: j,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      Ae,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: v,
        onSubmit: j,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Re,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: v,
        onSubmit: j,
        onCancel: i,
        methods: r,
        components: d,
        widget: t?.widget,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Te,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: v,
        onSubmit: j,
        onCancel: i,
        methods: r,
        components: d,
        sqlOpsUrls: p,
        refid: N
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: A[T] ?? A.simple });
}
export {
  Ie as LogiksForm,
  Ie as default
};
