import G, { useState as H, useRef as me, useEffect as Q, useMemo as pe } from "react";
import q from "axios";
import * as F from "yup";
import { useFormik as re } from "formik";
var te = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ve() {
  if (xe) return X;
  xe = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(n, h, c) {
    var O = null;
    if (c !== void 0 && (O = "" + c), h.key !== void 0 && (O = "" + h.key), "key" in h) {
      c = {};
      for (var w in h)
        w !== "key" && (c[w] = h[w]);
    } else c = h;
    return h = c.ref, {
      $$typeof: t,
      type: n,
      key: O,
      ref: h !== void 0 ? h : null,
      props: c
    };
  }
  return X.Fragment = r, X.jsx = i, X.jsxs = i, X;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function je() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case l:
          return "Fragment";
        case u:
          return "Profiler";
        case p:
          return "StrictMode";
        case I:
          return "Suspense";
        case k:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case T:
            return (a.displayName || "Context") + ".Provider";
          case f:
            return (a._context.displayName || "Context") + ".Consumer";
          case s:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case D:
            return m = a.displayName || null, m !== null ? m : t(a.type) || "Memo";
          case v:
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
    function i(a) {
      try {
        r(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var R = m.error, P = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return R.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), r(a);
      }
    }
    function n(a) {
      if (a === l) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === v)
        return "<...>";
      try {
        var m = t(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function h() {
      var a = _.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function O(a) {
      if (K.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function w(a, m) {
      function R() {
        b || (b = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: R,
        configurable: !0
      });
    }
    function d() {
      var a = t(this.type);
      return j[a] || (j[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, m, R, P, M, Y, le, ie) {
      return R = Y.ref, a = {
        $$typeof: E,
        type: a,
        key: m,
        props: Y,
        _owner: M
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: d
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
    function y(a, m, R, P, M, Y, le, ie) {
      var z = m.children;
      if (z !== void 0)
        if (P)
          if (o(z)) {
            for (P = 0; P < z.length; P++)
              N(z[P]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(z);
      if (K.call(m, "key")) {
        z = t(a);
        var U = Object.keys(m).filter(function(ye) {
          return ye !== "key";
        });
        P = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", V[z + P] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          z,
          U,
          z
        ), V[z + P] = !0);
      }
      if (z = null, R !== void 0 && (i(R), z = "" + R), O(m) && (i(m.key), z = "" + m.key), "key" in m) {
        R = {};
        for (var ce in m)
          ce !== "key" && (R[ce] = m[ce]);
      } else R = m;
      return z && w(
        R,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        z,
        Y,
        M,
        h(),
        R,
        le,
        ie
      );
    }
    function N(a) {
      typeof a == "object" && a !== null && a.$$typeof === E && a._store && (a._store.validated = 1);
    }
    var x = G, E = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), T = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), _ = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, o = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var b, j = {}, L = x["react-stack-bottom-frame"].bind(
      x,
      c
    )(), A = S(n(c)), V = {};
    Z.Fragment = l, Z.jsx = function(a, m, R, P, M) {
      var Y = 1e4 > _.recentlyCreatedOwnerStacks++;
      return y(
        a,
        m,
        R,
        !1,
        P,
        M,
        Y ? Error("react-stack-top-frame") : L,
        Y ? S(n(a)) : A
      );
    }, Z.jsxs = function(a, m, R, P, M) {
      var Y = 1e4 > _.recentlyCreatedOwnerStacks++;
      return y(
        a,
        m,
        R,
        !0,
        P,
        M,
        Y ? Error("react-stack-top-frame") : L,
        Y ? S(n(a)) : A
      );
    };
  }()), Z;
}
var ge;
function Ne() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? te.exports = ve() : te.exports = je()), te.exports;
}
var e = Ne();
function we(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function Se(t) {
  const r = {}, i = "General";
  return Object.entries(t).forEach(([n, h]) => {
    const c = h.group || i;
    r[c] || (r[c] = []);
    let O = { ...h, name: n };
    r[c].push(O);
  }), r;
}
function Ee(t) {
  const r = {};
  return Object.keys(t).forEach((i) => {
    r[i] = {
      label: i,
      required: t[i].required ?? !1
    };
  }), r;
}
const ee = (t, r, i) => {
  t.forEach((n) => {
    const h = n?.name;
    if (!h) return;
    n?.default !== void 0 && n?.default !== null ? r[h] = n.default : n?.type === "checkbox" ? r[h] = n?.multiple === !0 ? [] : !1 : n?.type === "tags" ? r[h] = [] : h === "blocked" || h === "blacklist" ? r[h] = "false" : r[h] = n?.default ?? "";
    let c;
    n?.type === "checkbox" ? c = n?.multiple === !0 ? F.array().of(F.string()) : F.boolean() : n?.type === "tags" ? c = F.array().of(F.string()) : n?.type === "email" ? c = F.string().email("Invalid email format") : n?.type === "number" ? c = F.number().typeError("Must be a number") : n?.type === "date" ? c = F.date().typeError("Invalid date format") : n?.type === "json" ? c = F.string().test("is-json", "Invalid JSON format", (O) => {
      if (!O) return !0;
      try {
        return JSON.parse(O), !0;
      } catch {
        return !1;
      }
    }) : c = F.string(), n?.required && (c = c.required(
      n?.placeholder || n?.error_message || `${n?.label || h} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (c = c.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([O, w]) => {
      switch (O) {
        case "email":
          w && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(w),
            `Must match pattern: ${w}`
          );
          break;
        case "date":
          c = F.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, g) => {
            if (typeof g == "string") {
              const y = g.replace(/-/g, "/"), [N, x, E] = y.split("/");
              if (N && x && E)
                return /* @__PURE__ */ new Date(`${E}-${x}-${N}`);
            }
            return d;
          });
          break;
        case "time":
          c = c.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          c = c.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          c = F.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = F.number().typeError("Must be a decimal").transform((d, g) => {
            if (g == null || g === "") return;
            const y = Number(g);
            if (isNaN(y)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const N = Number(d);
              return Number.isInteger(N) ? Number(y.toFixed(N)) : y;
            }
            return y;
          });
          break;
        case "alphanumeric":
          c = c.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          c = c.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          c = c.transform(
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(w);
          isNaN(d) || (c = c.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(w);
          isNaN(d) || (c = c.max(d, `Maximum length is ${d}`));
          break;
        }
      }
    }), i[h] = c;
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
const ne = (t) => t === !0 || t === "true", W = (t, r) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (i, n) => r[n] !== void 0 ? String(r[n]) : i
) : Array.isArray(t) ? t.map((i) => W(i, r)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([i, n]) => [
    W(i, r),
    W(n, r)
  ])
) : t, de = (t, r, i, n) => {
  const h = Array.isArray(i?.data?.data) ? i.data.data : Array.isArray(i?.data) ? i.data : i;
  if (!Array.isArray(h) || h.length === 0)
    return {};
  const c = n ?? (h[0] && typeof h[0] == "object" && "category" in h[0] ? "category" : void 0);
  if (!c) {
    const w = {};
    return h.forEach((d) => {
      d[t] != null && d[r] != null && (w[d[t]] = d[r]);
    }), w;
  }
  const O = {};
  return h.forEach((w) => {
    const d = w[c] ?? "Others", g = w[t], y = w[r];
    g == null || y == null || (O[d] || (O[d] = {}), O[d][g] = y);
  }), O;
}, Oe = (t, r) => {
  if (!t || r == null) return;
  if (typeof Object.values(t)[0] == "string")
    return t[r];
  for (const n of Object.values(t))
    if (r in n)
      return n[r];
}, Re = (t) => t ? typeof Object.values(t)[0] == "string" ? Object.entries(t) : Object.values(t).flatMap(
  (i) => Object.entries(i)
) : [], fe = (t) => {
  if (!t || typeof t != "object") return !1;
  const r = Object.values(t)[0];
  return typeof r == "object" && r !== null;
};
function oe({
  field: t,
  formik: r,
  methods: i = {},
  sqlOpsUrls: n,
  refid: h,
  optionsOverride: c,
  setFieldOptions: O
}) {
  const [w, d] = H(!1), [g, y] = H(
    c ?? t.options ?? {}
  ), [N, x] = H(""), [E, C] = H(0), l = me(null), p = me(null), [u, f] = H(!1), T = (o) => {
    o.currentTarget.open || x("");
  };
  Q(() => {
    c && y(c);
  }, [c]), Q(() => {
    const o = (S) => {
      p.current && !p.current.contains(S.target) && (p.current.open = !1, x(""));
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, []);
  const s = t.name;
  G.useEffect(() => {
    let o = !0;
    return (async () => {
      if (t?.options) {
        y(t.options);
        return;
      }
      const b = t?.source ?? {};
      if (b.type === "method") {
        const j = b.method, L = j ? i[j] : void 0;
        if (L)
          try {
            const A = await Promise.resolve(L());
            o && y(A ?? {});
          } catch (A) {
            console.error("Method execution failed:", A), o && y({});
          }
        else
          o && y({});
      }
      if (b.type === "api" && b.url)
        try {
          const j = await q({
            method: b.method || "GET",
            url: b.url,
            data: b.body ?? {},
            params: b.params ?? {},
            headers: b.headers ?? {}
          }), L = t.valueKey || "value", A = t.labelKey || "title", V = de(L, A, j, t.groupKey);
          o && y(V);
        } catch (j) {
          console.error("API execution failed:", j), o && y({});
        }
      if (t.table || t.type === "dataSelector") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j;
          if (t.type === "dataSelector")
            j = {
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
            j = {
              table: t.table,
              cols: t.columns
            };
          }
          t.where && t.type !== "dataSelector" && (j.where = h ? W(t.where, { refid: h }) : t.where);
          const L = await q({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: { query: j },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), A = await q({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: L.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), V = t.valueKey || "value", a = t.labelKey || "title", m = de(V, a, A, t.groupKey);
          o && y(m);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      o = !1;
    };
  }, [
    t.options,
    t.source,
    t.table,
    t.columns,
    t.where,
    h
  ]);
  const I = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, k = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, D = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, v = (o) => o.icon ? /* @__PURE__ */ e.jsx("i", { className: o.icon }) : null, $ = pe(
    () => Re(g),
    [g]
  ), B = $.length, _ = pe(() => N ? $.filter(
    ([, o]) => o.toLowerCase().includes(N.toLowerCase())
  ) : $, [N, $]), K = (o, S) => {
    if (p.current?.open === !0 || u === !0)
      if (o.key === "ArrowDown")
        o.preventDefault(), C(
          (b) => b + 1 < _.length ? b + 1 : 0
        );
      else if (o.key === "ArrowUp")
        o.preventDefault(), C(
          (b) => b - 1 >= 0 ? b - 1 : _.length - 1
        );
      else if (o.key === "Enter") {
        o.preventDefault();
        const [b] = _[E] || [];
        b && r.setFieldValue(t.name, S ? b : [...r.values[t.name], b]), p.current && (p.current.open = !1);
      } else o.key === "Escape" && (p.current.open = !1, x(""), f(!1));
  };
  switch (Q(() => {
    l.current?.querySelector(
      `[data-index="${E}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [E]), Q(() => {
    E >= _.length && C(0);
  }, [_, E]), Q(() => {
    const o = t.autocomplete, S = t.ajaxchain, b = o || S;
    if (!b || b === "off") return;
    const j = r.values[t.name];
    if (!j) return;
    (async () => {
      try {
        const A = b.src, V = W(A.where ?? {}, {
          refid: j
        });
        if (A.table && n) {
          const a = await q({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: {
              query: {
                ...A,
                table: A.table,
                cols: A.columns,
                where: V
              }
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), { data: m } = await q({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: a.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (o) {
            const R = b.target.split(",").map((M) => M.trim()), P = Array.isArray(m?.data) ? m?.data[0] : m?.data;
            if (!P) return;
            R.forEach((M) => {
              P[M] !== void 0 && r.setFieldValue(M, P[M]);
            });
          }
          if (S) {
            const R = t.valueKey || "value", P = t.labelKey || "title", M = de(R, P, m, t.groupKey);
            O?.(S.target, M);
          }
        }
      } catch (A) {
        console.error("Autocomplete fetch failed", A);
      }
    })();
  }, [r.values[t.name]]), t.type) {
    case "autocomplete": {
      const o = (b) => {
        const j = b.target.value;
        x(j), r.setFieldValue(s, j), f(!0);
      }, S = (b, j) => {
        j.preventDefault(), j.stopPropagation(), r.setFieldValue(s, b), f(!1);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: `${I} ${k}`,
            value: r.values[s],
            placeholder: t.placeholder || "Type to search...",
            onChange: o,
            onFocus: () => f(!0),
            onBlur: () => setTimeout(() => f(!1), 150),
            onKeyDown: (b) => K(b, !0)
          }
        ),
        u && /* @__PURE__ */ e.jsx("div", { ref: l, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: _.length > 0 ? _.map(([b, j], L) => /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-index": L,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${E === L ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: (A) => S(b, A),
            children: j
          },
          L
        )) : /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          N,
          '"'
        ] }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              className: `${I} ${k} min-h-[120px] resize-none`,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod":
      return B > 10 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: T,
            ref: p,
            onKeyDown: (o) => K(o, !0),
            children: [
              /* @__PURE__ */ e.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? Oe(g, r.values[s]) ?? "Select option" : `Select ${t.label}` }),
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
              /* @__PURE__ */ e.jsxs("div", { ref: l, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: N,
                    onChange: (o) => {
                      x(o.target.value), C(0);
                    },
                    onKeyDown: (o) => K(o, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 ? _.map(([o, S], b) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    "data-index": b,
                    onClick: (j) => {
                      j.preventDefault(), j.stopPropagation(), r.setFieldValue(s, o), p.current?.removeAttribute("open"), x(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === o ? "bg-indigo-50 text-indigo-600 font-medium" : E === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: S
                  },
                  o
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              className: `${I} ${k} appearance-none cursor-pointer pr-12`,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: t.disabled,
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: t.placeholder || "Please select an option" }),
                !fe(g) && Object.entries(g).map(([o, S]) => /* @__PURE__ */ e.jsx("option", { value: o, className: "py-2", children: S }, o)),
                fe(g) && Object.entries(g).map(([o, S]) => /* @__PURE__ */ e.jsx("optgroup", { label: o, children: Object.entries(S).map(([b, j]) => /* @__PURE__ */ e.jsx("option", { value: b, children: j }, b)) }, o))
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
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: `flex ${B > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(g || {}).map(([o, S]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: `${s}-${o}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: `${s}-${o}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === o,
                  value: o,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              S
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      if (B === 1) {
        const [o, S] = Object.entries(g || {})[0] || [s, t.label];
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
      return B > 1 && B <= 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(g || {}).map(([o, S]) => /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  name: s,
                  value: o,
                  checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(o) : !1,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: t.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              S
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : B > 5 ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: T,
            ref: p,
            onKeyDown: (o) => K(o, !1),
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
              /* @__PURE__ */ e.jsxs("div", { ref: l, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: N,
                    onChange: (o) => {
                      x(o.target.value), C(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 ? _.map(([o, S], b) => /* @__PURE__ */ e.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${o}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[s] === o ? "bg-indigo-50 text-indigo-600 font-medium" : E === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          id: `${s}-${o}`,
                          type: "checkbox",
                          name: s,
                          value: o,
                          checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(o) : !1,
                          onChange: r.handleChange,
                          onBlur: r.handleBlur,
                          disabled: t.disabled,
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        }
                      ),
                      S
                    ]
                  },
                  o
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : null;
    }
    case "tags": {
      const o = Array.isArray(r.values[s]) ? r.values[s] : [], S = Array.isArray(g) ? g : Object.entries(g || {}).map(([a, m]) => ({ value: a, label: m })), b = (a) => {
        a && !o.includes(a) && r.setFieldValue(s, [...o, a]);
      }, j = (a) => {
        (a.key === "Enter" || a.key === ",") && (a.preventDefault(), b(N), x(""));
      }, L = (a) => {
        r.setFieldValue(
          s,
          o.filter((m) => m !== a)
        );
      }, A = (a) => S.find((m) => m.value === a)?.label || a, V = () => /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !t.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              o.map((a) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx(V, {}) }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-indigo-700", children: A(a) }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${A(a)}`,
                        onClick: (m) => {
                          m.stopPropagation(), t.disabled || L(a);
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
                  value: N,
                  onChange: (a) => x(a.target.value),
                  onKeyDown: j,
                  placeholder: o.length === 0 ? t.placeholder || "Type and press Enter" : "",
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
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: v(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${I} ${k} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      let o = r.values[s];
      if (typeof o == "object" && o !== null) {
        const j = JSON.stringify(o, null, 2);
        r.setFieldValue(s, j, !1), o = j;
      }
      const S = o || "", b = (j) => {
        r.setFieldValue(s, j.target.value);
      };
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
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
              onChange: b,
              onBlur: r.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: t.disabled,
              className: `${I} ${k} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs("label", { className: D, children: [
          t.label,
          t.required && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ e.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: v(t) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: t.type || "text",
              className: `${I} ${k} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: t.placeholder,
              disabled: t.disabled
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Te({ title: t, children: r, isFirst: i }) {
  const [n, h] = H(i);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => h(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
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
function $e({
  title: t,
  groupedFields: r,
  data: i,
  onSubmit: n = (g) => {
  },
  onCancel: h = () => {
  },
  methods: c = {},
  components: O = {},
  sqlOpsUrls: w = {},
  refid: d
}) {
  const [g, y] = G.useState({}), N = (l, p) => {
    y((u) => ({
      ...u,
      [l]: p
    }));
  }, x = {}, E = {};
  Object.entries(r).forEach(([l, p]) => {
    ee(p, x, E);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((l) => {
    l in x && (l === "tags" && typeof i[l] == "string" ? x[l] = i[l].split(",") : x[l] = i[l] ? i[l] : "");
  });
  const C = re({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: F.object().shape(E),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([l, p], u) => /* @__PURE__ */ e.jsx(Te, { title: l, isFirst: u === 0, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((f, T) => ne(f.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: d,
            sqlOpsUrls: w,
            components: O,
            field: f,
            formik: C,
            methods: c,
            setFieldOptions: N,
            ...g[f.name] ? { optionsOverride: g[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${T}`
    )) }) }, l)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ae({
  title: t,
  groupedFields: r,
  data: i,
  onSubmit: n = (y) => {
  },
  onCancel: h = () => {
  },
  methods: c = {},
  components: O = {},
  sqlOpsUrls: w = {},
  widget: d,
  refid: g
}) {
  const y = Object.keys(r), [N, x] = G.useState(0), [E, C] = G.useState({}), l = (v, $) => {
    C((B) => ({
      ...B,
      [v]: $
    }));
  }, p = {}, u = {}, f = {};
  d ? Object.entries(r).forEach(([v, $]) => {
    const B = {};
    ee($, u, B), p[v] = B;
  }) : Object.entries(r).forEach(([v, $]) => {
    ee($, u, f);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((v) => {
    v in u && (v === "tags" && typeof i[v] == "string" ? u[v] = i[v].split(",") : u[v] = i[v] ? i[v] : "");
  });
  const T = y[N] ?? null, s = T && p[T] ? p[T] : {}, I = re({
    initialValues: u,
    enableReinitialize: !0,
    validationSchema: F.object().shape(d ? s : f),
    onSubmit: (v) => {
      d ? (N < y.length - 1 && x(($) => $ + 1), N === y.length - 1 && n(v)) : n(v);
    }
  }), k = async (v) => {
    if (v.preventDefault(), !d) {
      const $ = await I.validateForm();
      if (Object.keys($).length > 0) {
        alert("Please fill all required fields before submitting."), I.setTouched(
          Object.keys($).reduce((B, _) => ({ ...B, [_]: !0 }), {})
        );
        return;
      }
    }
    I.handleSubmit(v);
  }, D = () => {
    x((v) => v > 0 ? v - 1 : v);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ e.jsx("nav", { className: "relative flex", children: y.map((v, $) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => x($),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${N === $ ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: v })
      },
      v
    )) }) }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ e.jsxs("form", { onSubmit: k, className: "w-full mx-auto", children: [
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: T && r[T]?.map((v, $) => ne(v.hidden) ? null : /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `col-span-12  ${ae[se(Number(v.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ e.jsx(
                  oe,
                  {
                    refid: g,
                    sqlOpsUrls: w,
                    field: v,
                    formik: I,
                    methods: c,
                    components: O,
                    setFieldOptions: l,
                    ...E[v.name] ? { optionsOverride: E[v.name] } : {}
                  },
                  v.name
                )
              },
              v?.name ?? `field-${$}`
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: `mt-8 flex ${N > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              N > 0 && /* @__PURE__ */ e.jsx("button", { onClick: D, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ e.jsx("button", { onClick: h, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Tab ",
                N + 1,
                " of ",
                y.length
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: y.map((v, $) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${$ === N ? "bg-action w-6" : "bg-gray-300"}`
              },
              $
            )) })
          ] }) })
        ]
      },
      y[N]
    )
  ] });
}
function Ce({
  title: t,
  groupedFields: r,
  data: i,
  onSubmit: n = (d) => {
  },
  onCancel: h = () => {
  },
  methods: c = {},
  sqlOpsUrls: O = {},
  refid: w
}) {
  const d = Object.values(r).flat(), [g, y] = G.useState({}), N = (l, p) => {
    y((u) => ({
      ...u,
      [l]: p
    }));
  }, x = {}, E = {};
  Object.entries(r).forEach(([l, p]) => {
    ee(p, x, E);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((l) => {
    l in x && (l === "tags" && typeof i[l] == "string" ? x[l] = i[l].split(",") : x[l] = i[l] ? i[l] : "");
  });
  const C = re({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: F.object().shape(E),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((l, p) => ne(l.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(l.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: w,
            sqlOpsUrls: O,
            field: l,
            formik: C,
            methods: c,
            setFieldOptions: N,
            ...g[l.name] ? { optionsOverride: g[l.name] } : {}
          }
        )
      },
      l?.name ?? `field-${p}`
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
function Pe({ title: t, children: r }) {
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
function _e({
  title: t,
  groupedFields: r,
  data: i,
  onSubmit: n = (g) => {
  },
  onCancel: h = () => {
  },
  methods: c = {},
  components: O = {},
  sqlOpsUrls: w = {},
  refid: d
}) {
  const [g, y] = G.useState({}), N = (l, p) => {
    y((u) => ({
      ...u,
      [l]: p
    }));
  }, x = {}, E = {};
  Object.entries(r).forEach(([l, p]) => {
    ee(p, x, E);
  }), i && Object.keys(i).length > 0 && Object.keys(i).forEach((l) => {
    l in x && (l === "tags" && typeof i[l] == "string" ? x[l] = i[l].split(",") : x[l] = i[l] ? i[l] : "");
  });
  const C = re({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: F.object().shape(E),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ e.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([l, p], u) => /* @__PURE__ */ e.jsx(Pe, { title: l, children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((f, T) => ne(f.hidden) ? null : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ e.jsx(
          oe,
          {
            refid: d,
            sqlOpsUrls: w,
            components: O,
            field: f,
            formik: C,
            methods: c,
            setFieldOptions: N,
            ...g[f.name] ? { optionsOverride: g[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${T}`
    )) }) }, l)) }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ e.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ e.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const J = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), ue = async (t) => (await q.get(
  t.baseURL + t.dbopsGetHash,
  { headers: J(t) }
)).data.refhash, he = async (t, r) => (await q.post(
  t.baseURL + t.dbopsGetRefId,
  r,
  { headers: J(t) }
)).data.refid, Fe = {
  async fetch(t, r) {
    const i = await ue(t), n = await he(t, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: i
    }), h = await q.post(
      t.baseURL + t.dbopsFetch,
      { refid: n, datahash: i },
      { headers: J(t) }
    );
    return h.data?.data ?? h.data;
  },
  async create(t, r) {
    const i = await ue(t), n = await he(t, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await q.post(
      t.baseURL + t.dbopsCreate,
      { refid: n, fields: r.values, datahash: i },
      { headers: J(t) }
    )).data;
  },
  async update(t, r) {
    const i = await ue(t), n = await he(t, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await q.post(
      t.baseURL + t.dbopsUpdate,
      { refid: n, fields: r.values, datahash: i },
      { headers: J(t) }
    )).data;
  }
};
function ze({
  formJson: t = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: i = null,
  onCancel: n = () => {
  },
  components: h = {},
  callback: c = () => {
  },
  initialvalues: O = {}
}) {
  const w = we(t), d = t.endPoints, g = t?.source?.refid, y = Se(t?.fields ?? {}), [N, x] = G.useState(O);
  G.useEffect(() => {
    let l = !0;
    return (async () => {
      const u = t?.source ?? {};
      if (!u?.type) {
        l && x({});
        return;
      }
      if (u.type === "method") {
        const f = u.method, T = f ? r[f] : void 0;
        if (T)
          try {
            const s = await Promise.resolve(T());
            l && x(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), l && x({});
          }
        else
          l && x({});
      }
      if (u.type === "api" && d?.operation !== "create")
        try {
          const f = await q({
            method: u.method || "GET",
            url: u.url ?? "",
            data: u.body ?? {},
            params: u.params ?? {},
            headers: u.headers ?? {}
          });
          l && x(f.data ?? {});
        } catch (f) {
          console.error("API fetch failed:", f), l && x({});
        }
      if (u.type === "sql" && u.refid && u.refid != "0" && d?.operation !== "create") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const f = await Fe.fetch(d, {
            source: {
              ...u,
              table: u.table,
              columns: u.columns,
              where: W(u.where, {
                refid: g
              })
            },
            fields: Ee(t.fields)
          });
          l && x(f);
        } catch (f) {
          console.error("API fetch failed:", f);
        }
      }
    })(), () => {
      l = !1;
    };
  }, [
    i,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const E = async (l) => {
    const p = t?.source ?? {};
    if (p.type === "method") {
      const u = p.method, f = u ? r[u] : void 0;
      if (f)
        try {
          const T = await Promise.resolve(f(l));
          c?.(T);
        } catch (T) {
          c?.(T), console.error("Method execution failed:", T);
        }
    }
    if (p.type === "api")
      try {
        const u = await q({
          method: p.method || "POST",
          url: p.url,
          data: l ?? {},
          params: p.params ?? {},
          headers: p.headers ?? {}
        });
        c?.(u);
      } catch (u) {
        c?.(u), console.error("API fetch failed:", u);
      }
    if (p.type === "sql") {
      const u = t.endPoints;
      if (!u) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const f = await q({
          method: "GET",
          url: u.baseURL + u.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        let T = {
          ...p
        };
        p.where && (T = {
          ...p,
          where: W(p.where, {
            refid: g
          })
        });
        const s = await q({
          method: "POST",
          url: u.baseURL + u.dbopsGetRefId,
          data: {
            operation: u.operation,
            source: T,
            fields: t.fields,
            forcefill: t.forcefill,
            datahash: f.data.refhash
          },
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        }), I = await q({
          method: "POST",
          url: u.baseURL + u[u.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: s.data.refid,
            fields: l,
            datahash: f.data.refhash
          },
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        c?.(I);
      } catch (f) {
        c?.(f), console.error("API fetch failed:", f);
      }
    }
  }, C = {
    accordion: /* @__PURE__ */ e.jsx(
      $e,
      {
        title: t?.title ?? "",
        groupedFields: y,
        data: N,
        onSubmit: E,
        onCancel: n,
        methods: r,
        components: h,
        sqlOpsUrls: d,
        refid: g
      }
    ),
    cards: /* @__PURE__ */ e.jsx(
      _e,
      {
        title: t?.title ?? "",
        groupedFields: y,
        data: N,
        onSubmit: E,
        onCancel: n,
        methods: r,
        components: h,
        sqlOpsUrls: d,
        refid: g
      }
    ),
    tab: /* @__PURE__ */ e.jsx(
      Ae,
      {
        title: t?.title ?? "",
        groupedFields: y,
        data: N,
        onSubmit: E,
        onCancel: n,
        methods: r,
        components: h,
        widget: t?.widget,
        sqlOpsUrls: d,
        refid: g
      }
    ),
    simple: /* @__PURE__ */ e.jsx(
      Ce,
      {
        title: t?.title ?? "",
        groupedFields: y,
        data: N,
        onSubmit: E,
        onCancel: n,
        methods: r,
        components: h,
        sqlOpsUrls: d,
        refid: g
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: C[w] ?? C.simple });
}
export {
  ze as LogiksForm
};
