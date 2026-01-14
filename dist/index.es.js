import L, { useState as W, useRef as pe, useEffect as Q, useMemo as xe } from "react";
import z from "axios";
import * as D from "yup";
import { useFormik as se } from "formik";
var re = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ne() {
  if (be) return X;
  be = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(u, n, x) {
    var v = null;
    if (x !== void 0 && (v = "" + x), n.key !== void 0 && (v = "" + n.key), "key" in n) {
      x = {};
      for (var c in n)
        c !== "key" && (x[c] = n[c]);
    } else x = n;
    return n = x.ref, {
      $$typeof: e,
      type: u,
      key: v,
      ref: n !== void 0 ? n : null,
      props: x
    };
  }
  return X.Fragment = r, X.jsx = o, X.jsxs = o, X;
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
var ge;
function we() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case b:
          return "Fragment";
        case T:
          return "Profiler";
        case f:
          return "StrictMode";
        case s:
          return "Suspense";
        case I:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case F:
            return (a.displayName || "Context") + ".Provider";
          case y:
            return (a._context.displayName || "Context") + ".Consumer";
          case R:
            var l = a.render;
            return a = a.displayName, a || (a = l.displayName || l.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return l = a.displayName || null, l !== null ? l : e(a.type) || "Memo";
          case j:
            l = a._payload, a = a._init;
            try {
              return e(a(l));
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
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var h = l.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(a);
      }
    }
    function u(a) {
      if (a === b) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === j)
        return "<...>";
      try {
        var l = e(a);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = K.A;
      return a === null ? null : a.getOwner();
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function v(a) {
      if (_.call(a, "key")) {
        var l = Object.getOwnPropertyDescriptor(a, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, l) {
      function h() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: h,
        configurable: !0
      });
    }
    function p() {
      var a = e(this.type);
      return i[a] || (i[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function N(a, l, h, O, q, M, ie, ue) {
      return h = M.ref, a = {
        $$typeof: A,
        type: a,
        key: l,
        props: M,
        _owner: q
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: ie
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, l, h, O, q, M, ie, ue) {
      var k = l.children;
      if (k !== void 0)
        if (O)
          if (G(k)) {
            for (O = 0; O < k.length; O++)
              g(k[O]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(k);
      if (_.call(l, "key")) {
        k = e(a);
        var U = Object.keys(l).filter(function(je) {
          return je !== "key";
        });
        O = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", $[k + O] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          k,
          U,
          k
        ), $[k + O] = !0);
      }
      if (k = null, h !== void 0 && (o(h), k = "" + h), v(l) && (o(l.key), k = "" + l.key), "key" in l) {
        h = {};
        for (var de in l)
          de !== "key" && (h[de] = l[de]);
      } else h = l;
      return k && c(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), N(
        a,
        k,
        M,
        q,
        n(),
        h,
        ie,
        ue
      );
    }
    function g(a) {
      typeof a == "object" && a !== null && a.$$typeof === A && a._store && (a._store.validated = 1);
    }
    var w = L, A = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), F = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), K = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, G = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, i = {}, d = w["react-stack-bottom-frame"].bind(
      w,
      x
    )(), E = H(u(x)), $ = {};
    Z.Fragment = b, Z.jsx = function(a, l, h, O, q) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        l,
        h,
        !1,
        O,
        q,
        M ? Error("react-stack-top-frame") : d,
        M ? H(u(a)) : E
      );
    }, Z.jsxs = function(a, l, h, O, q) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        l,
        h,
        !0,
        O,
        q,
        M ? Error("react-stack-top-frame") : d,
        M ? H(u(a)) : E
      );
    };
  }()), Z;
}
var ye;
function Se() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? re.exports = Ne() : re.exports = we()), re.exports;
}
var t = Se();
function Ee(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((u) => u.group) ? "tab" : "simple";
}
function Oe(e, r = "Info") {
  const o = {};
  let u = !1;
  if (Object.values(e).forEach((x) => {
    x.group && (u = !0);
  }), !u) return {};
  const n = [];
  return Object.entries(e).forEach(([x, v]) => {
    const c = { ...v, name: x };
    if (v.group) {
      const p = v.group;
      o[p] || (o[p] = []), o[p].push(c);
    } else
      n.push(c);
  }), n.length > 0 ? {
    [r]: n,
    ...o
  } : o;
}
function Re(e) {
  const r = {};
  return Object.keys(e).forEach((o) => {
    r[o] = {
      label: o,
      required: e[o].required ?? !1
    };
  }), r;
}
const te = (e, r, o, u) => {
  e.forEach((n) => {
    const x = n?.name;
    if (!x) return;
    let v = u?.[x];
    v == null && (v = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[x] = Array.isArray(v) ? v : typeof v == "string" ? v.split(",").map((p) => p.trim()).filter(Boolean) : [] : n.type === "json" ? r[x] = typeof v == "object" && v !== null ? JSON.stringify(v, null, 2) : v ?? "" : n.type === "date" ? r[x] = typeof v == "string" ? v.slice(0, 10) : "" : n.type === "time" ? typeof v == "string" ? v.includes("T") ? r[x] = v.slice(11, 16) : r[x] = v.slice(0, 5) : r[x] = "" : x === "blocked" || x === "blacklist" ? r[x] = String(v ?? "false") : r[x] = v ?? "";
    let c;
    n.type === "file" ? c = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? c = D.array().of(D.string()) : n.type === "email" ? c = D.string().email("Invalid email") : n.type === "number" ? c = D.number().typeError("Must be a number") : n.type === "json" ? c = D.string().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : c = D.string(), n.required && (c = c.required(
      n.error_message || `${n.label || x} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (c = c.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([p, N]) => {
      switch (p) {
        case "email":
          N && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(N),
            `Must match pattern: ${N}`
          );
          break;
        case "date":
          c = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((m, g) => {
            if (typeof g == "string") {
              const w = g.replace(/-/g, "/"), [A, C, b] = w.split("/");
              if (A && C && b)
                return /* @__PURE__ */ new Date(`${b}-${C}-${A}`);
            }
            return m;
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
          c = D.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = D.number().typeError("Must be a decimal").transform((m, g) => {
            if (g == null || g === "") return;
            const w = Number(g);
            if (isNaN(w)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const A = Number(m);
              return Number.isInteger(A) ? Number(w.toFixed(A)) : w;
            }
            return w;
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
            (m) => m && m.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (m) => m && m.toLowerCase()
          );
          break;
        case "length-min": {
          const m = Number(N);
          isNaN(m) || (c = c.min(m, `Minimum length is ${m}`));
          break;
        }
        case "length-max": {
          const m = Number(N);
          isNaN(m) || (c = c.max(m, `Maximum length is ${m}`));
          break;
        }
      }
    }), o[x] = c;
  });
}, ne = {
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
function oe(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const le = (e) => e === !0 || e === "true", Y = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (o, u) => r[u] !== void 0 ? String(r[u]) : o
) : Array.isArray(e) ? e.map((o) => Y(o, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([o, u]) => [
    Y(o, r),
    Y(u, r)
  ])
) : e, J = (e, r, o, u) => {
  const n = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const x = u ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!x) {
    const c = {};
    return n.forEach((p) => {
      p[e] != null && p[r] != null && (c[p[e]] = p[r]);
    }), c;
  }
  const v = {};
  return n.forEach((c) => {
    const p = c[x] ?? "Others", N = c[e], m = c[r];
    N == null || m == null || (v[p] || (v[p] = {}), v[p][N] = m);
  }), v;
}, fe = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const u of Object.values(e))
    if (r in u)
      return u[r];
}, Te = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (o) => Object.entries(o)
) : [], ve = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function Ae() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (u, n) => {
        navigator.geolocation.getCurrentPosition(u, n, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: r, longitude: o } = e.coords;
    return `${r},${o}`;
  } catch (e) {
    if (!(e instanceof GeolocationPositionError))
      throw new Error("Failed to get your location.");
    switch (e.code) {
      case e.PERMISSION_DENIED:
        throw new Error("Please allow location access in browser settings.");
      case e.POSITION_UNAVAILABLE:
        throw new Error(
          "Unable to detect your location. Try connecting to Wi-Fi."
        );
      case e.TIMEOUT:
        throw new Error("Your device took too long to fetch GPS position.");
      default:
        throw new Error("Failed to get your location.");
    }
  }
}
const $e = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ce(e) {
  return Object.entries(e).map(([r, o]) => ({
    ...o,
    name: r
  }));
}
async function ae(e, r, o = {}) {
  try {
    const u = await z({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
    return await z({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: u.data.queryid,
        filter: o
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (u) {
    throw u;
  }
}
function Fe(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Pe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const o = r.match(/^(.+?)\s+as\s+.+$/i);
    return o ? o[1]?.trim() : r;
  }).filter((r) => !!r);
}
function ce({
  field: e,
  formik: r,
  methods: o = {},
  sqlOpsUrls: u,
  refid: n,
  optionsOverride: x,
  setFieldOptions: v
}) {
  const [c, p] = W(!1), [N, m] = W(
    x ?? e.options ?? {}
  ), [g, w] = W(""), [A, C] = W(0), b = pe(null), f = pe(null), [T, y] = W(!1), F = L.useRef(g);
  L.useEffect(() => {
    F.current = g;
  }, [g]);
  const R = (S) => {
    S.currentTarget.open || w("");
  };
  Q(() => {
    x && m(x);
  }, [x]), Q(() => {
    const S = (i) => {
      f.current && !f.current.contains(i.target) && (f.current.open = !1, w(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, []);
  const s = e.name;
  L.useEffect(() => {
    let S = !0;
    return (async () => {
      if (e?.options) {
        m(e.options);
        return;
      }
      const d = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, $ = E ? o[E] : void 0;
        if ($)
          try {
            const a = await Promise.resolve($()), l = e.valueKey || "value", h = e.labelKey || "title", O = J(l, h, a, e.groupKey);
            S && m(O);
          } catch (a) {
            console.error("Method execution failed:", a), S && m({});
          }
        else
          S && m({});
      }
      if (d.type === "api" && d.url)
        try {
          const E = await z({
            method: d.method || "GET",
            url: d.url,
            data: d.body ?? {},
            params: d.params ?? {},
            headers: d.headers ?? {}
          }), $ = e.valueKey || "value", a = e.labelKey || "title", l = J($, a, E, e.groupKey);
          S && m(l);
        } catch (E) {
          console.error("API execution failed:", E), S && m({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E;
          if (e.type === "dataSelector")
            E = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: e.groupid ?? ""
              }
            };
          else {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            E = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (E.where = n ? Y(e.where, { refid: n }) : e.where);
          const $ = await ae(u, E), a = e.valueKey || "value", l = e.labelKey || "title", h = J(a, l, $, e.groupKey);
          S && m(h);
        } catch (E) {
          console.error("API fetch failed:", E);
        }
      }
    })(), () => {
      S = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    n
  ]);
  const I = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, j = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, B = xe(
    () => Te(N),
    [N]
  ), K = B.length, _ = xe(() => e.search || !g ? B : B.filter(
    ([, S]) => S.toLowerCase().includes(g.toLowerCase())
  ), [e.search, g, B]), G = (S, i) => {
    if (f.current?.open === !0 || T === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), C(
          (d) => d + 1 < _.length ? d + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), C(
          (d) => d - 1 >= 0 ? d - 1 : _.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [d] = _[A] || [];
        d && r.setFieldValue(e.name, i ? d : [...r.values[e.name], d]), f.current && (f.current.open = !1);
      } else S.key === "Escape" && (f.current.open = !1, w(""), y(!1));
  };
  Q(() => {
    b.current?.querySelector(
      `[data-index="${A}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [A]), Q(() => {
    A >= _.length && C(0);
  }, [_, A]), Q(() => {
    const S = e.autocomplete, i = e.ajaxchain;
    if (!S && !i) return;
    const d = r.values[e.name];
    if (!d) return;
    const E = Array.isArray(i) ? i : i ? [i] : [];
    (async () => {
      try {
        if (Fe(S)) {
          const a = S.src;
          if (!a || !u) return;
          const l = Y(a.where ?? {}, {
            refid: d
          }), h = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: l
          }, { data: O } = await ae(u, h), q = Array.isArray(O?.data) ? O.data[0] : O?.data;
          q && S.target.split(",").map((M) => M.trim()).forEach((M) => {
            q[M] !== void 0 && r.setFieldValue(M, q[M]);
          });
        }
        for (const a of E) {
          const l = a.src;
          if (!a || typeof a != "object" || !l || typeof l != "object" || !u) continue;
          const h = Y(l?.where ?? {}, {
            refid: d
          }), O = {
            ...l,
            table: l.table,
            cols: l.columns,
            where: h
          }, { data: q } = await ae(u, O), M = J(
            e.valueKey || "value",
            e.labelKey || "title",
            q,
            e.groupKey
          );
          v?.(a.target, M);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !g.trim() || !e.table || !u) return;
    const S = Pe(e.columns ?? ""), i = new AbortController(), d = setTimeout(async () => {
      try {
        const E = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, $ = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: E
        };
        let a = {};
        Array.isArray(S) && S.forEach((O) => {
          a[O] = [g, "LIKE"];
        });
        const { data: l } = await ae(u, $, a), h = J(
          e.valueKey || "value",
          e.labelKey || "title",
          l,
          e.groupKey
        );
        m(h);
      } catch (E) {
        if (z.isCancel(E)) return;
        console.error("Search fetch failed", E);
      }
    }, 500);
    return () => {
      clearTimeout(d), i.abort();
    };
  }, [g, n]);
  const H = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const i = u?.baseURL + u?.uploadURL;
    if (!i) {
      console.error("No Upload URL ");
      return;
    }
    const d = e.multiple === !0;
    try {
      const E = await Promise.all(
        Array.from(S).map(async ($) => {
          const a = new FormData();
          return a.append("file", $), (await z({
            method: "POST",
            url: i,
            data: a,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${u?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        d ? E.map(($) => $.path) : E[0]?.path
      );
    } catch (E) {
      console.error("File upload failed", E), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const i = r.values[s] ?? "", d = g !== "" ? g : fe(N, i) ?? String(i ?? ""), E = (a) => {
        const l = a.target.value;
        w(l), C(0), l.trim() ? y(!0) : (y(!1), r.setFieldValue(s, ""));
      }, $ = (a) => {
        r.setFieldValue(s, a), w(""), y(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${I} ${V}`,
            value: d,
            placeholder: e.placeholder || "Type to search...",
            onChange: E,
            onFocus: () => {
              const a = String(r.values[s] ?? "");
              w(a);
            },
            onBlur: () => {
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: (a) => {
              if (a.key === "Enter") {
                if (a.preventDefault(), _[A]) {
                  const [l] = _[A];
                  r.setFieldValue(s, l);
                } else g.trim() && r.setFieldValue(s, g.trim());
                y(!1);
                return;
              }
              G(a, !0);
            },
            disabled: e.disabled
          }
        ),
        T && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: b,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: _.length > 0 ? _.map(([a, l], h) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": h,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${A === h ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => $(a),
                children: l
              },
              a
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${d}" ` })
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const i = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: j, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: R,
              ref: f,
              onKeyDown: (d) => G(d, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: i?.length > 0 ? i.join(", ") : `Select ${e.label}` }),
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4 text-gray-500",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
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
                /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: g,
                      onChange: (d) => {
                        w(d.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  _.length > 0 ? _.map(([d, E], $) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${d}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${i?.includes(d) ? "bg-indigo-50 text-indigo-600 font-medium" : A === $ ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${d}`,
                            type: "checkbox",
                            checked: i?.includes(d),
                            onChange: (a) => {
                              const l = a.target.checked ? [...i, d] : i?.filter((h) => h !== d);
                              r.setFieldValue(s, l);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        E
                      ]
                    },
                    d
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: f,
            onKeyDown: (i) => G(i, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? fe(N, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
                /* @__PURE__ */ t.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ t.jsx(
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
              /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: g,
                    onChange: (i) => {
                      w(i.target.value), C(0);
                    },
                    onKeyDown: (i) => G(i, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (i) => {
                      i.preventDefault(), i.stopPropagation(), r.setFieldValue(s, ""), f.current?.removeAttribute("open"), w("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                _.length > 0 ? _.map(([i, d], E) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": E,
                    onClick: ($) => {
                      $.preventDefault(), $.stopPropagation(), r.setFieldValue(s, i), f.current?.removeAttribute("open"), w(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === i ? "bg-indigo-50 text-indigo-600 font-medium" : A === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: d
                  },
                  i
                )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${I} ${V} min-h-[120px] resize-none`,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${I} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !ve(N) && Object.entries(N).map(([i, d]) => /* @__PURE__ */ t.jsx("option", { value: i, className: "py-2", children: d }, i)),
                ve(N) && Object.entries(N).map(([i, d]) => /* @__PURE__ */ t.jsx("optgroup", { label: i, children: Object.entries(d).map(([E, $]) => /* @__PURE__ */ t.jsx("option", { value: E, children: $ }, E)) }, i))
              ]
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ t.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(N || {}).map(([i, d]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${i}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${i}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === i,
                  value: i,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              d
            ]
          },
          i
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const i = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(N || {}).map(([d, E]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: i.includes(d),
                  onChange: ($) => {
                    const a = $.target.checked ? [...i, d] : i.filter((l) => l !== d);
                    r.setFieldValue(s, a);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              E
            ]
          },
          d
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const i = r.values[s], d = g.trim(), E = Array.isArray(N) ? N : Object.entries(N || {}).map(([h, O]) => ({ value: h, label: O })), $ = (h) => {
        h && !i.includes(h) && (r.setFieldValue(s, [...i, h]), w(""));
      }, a = (h) => {
        r.setFieldValue(
          s,
          i.filter((O) => O !== h)
        );
      }, l = (h) => E.find((O) => O.value === h)?.label ?? h;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              i.map((h) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: l(h) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (O) => {
                          O.stopPropagation(), e.disabled || a(h);
                        },
                        onMouseDown: (O) => O.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                h
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: g,
                  onChange: (h) => w(h.target.value),
                  onKeyDown: (h) => {
                    (h.key === "Enter" || h.key === ",") && (h.preventDefault(), $(d));
                  },
                  placeholder: i.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const S = e.multiple === !0;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "file",
              className: `${I} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
              name: s,
              multiple: S,
              onChange: (i) => {
                const d = i.currentTarget.files;
                d && H(d);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.values[s]?.split("/").pop() && /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm ", children: String(r.values[s]?.split("/").pop()) }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: r.values[s],
              onChange: (i) => r.setFieldValue(s, i.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${I} ${V} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "date",
              name: s,
              value: r.values[s],
              onChange: r.handleChange,
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${I} ${V} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${I} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function _e({ title: e, children: r, isFirst: o }) {
  const [u, n] = W(o);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => n(!u),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${u ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${u ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${u ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ t.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden ${u ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Ie({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: u = (N) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: v = {},
  sqlOpsUrls: c = {},
  refid: p
}) {
  const [N, m] = L.useState({}), g = (b, f) => {
    m((T) => ({
      ...T,
      [b]: f
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, f = {};
    return Object.values(r).flat().forEach((T) => {
      te([T], b, f, o);
    }), {
      initialValues: b,
      validationSchema: f
    };
  }, [r, o]), C = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      u(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, f], T) => /* @__PURE__ */ t.jsx(_e, { title: b, isFirst: T === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((y, F) => le(y.hidden) || y.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: p,
            sqlOpsUrls: c,
            components: v,
            field: y,
            formik: C,
            methods: x,
            setFieldOptions: g,
            ...N[y.name] ? { optionsOverride: N[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${F}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Me({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: u = (m) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: v = {},
  sqlOpsUrls: c = {},
  widget: p,
  refid: N
}) {
  const m = Object.keys(r), [g, w] = L.useState(0), [A, C] = L.useState({}), b = (j, P) => {
    C((B) => ({
      ...B,
      [j]: P
    }));
  }, { initialValues: f, validationSchema: T, stepperSchemas: y } = L.useMemo(() => {
    const j = {}, P = {}, B = {};
    return p ? Object.entries(r).forEach(([K, _]) => {
      const G = {};
      te(_, j, G, o), B[K] = G;
    }) : Object.entries(r).forEach(([K, _]) => {
      te(_, j, P, o);
    }), {
      initialValues: j,
      validationSchema: P,
      stepperSchemas: B
    };
  }, [r, o, p]), F = m[g] ?? null, R = p && F ? y[F] ?? {} : T, s = se({
    initialValues: f,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (j) => {
      p ? (g < m.length - 1 && w((P) => P + 1), g === m.length - 1 && u(j)) : u(j);
    }
  }), I = async (j) => {
    if (j.preventDefault(), !p) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((B, K) => ({ ...B, [K]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(j);
  }, V = () => {
    w((j) => j > 0 ? j - 1 : j);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: m.map((j, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${g === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: j })
      },
      j
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: I, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: F && r[F]?.map((j, P) => le(j.hidden) || j.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ne[oe(Number(j.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ce,
                  {
                    refid: N,
                    sqlOpsUrls: c,
                    field: j,
                    formik: s,
                    methods: x,
                    components: v,
                    setFieldOptions: b,
                    ...A[j.name] ? { optionsOverride: A[j.name] } : {}
                  },
                  j.name
                )
              },
              j?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${g > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              g > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: p ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                g + 1,
                " of ",
                m.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: m.map((j, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === g ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      m[g]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: o,
  onSubmit: u = (p) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  sqlOpsUrls: v = {},
  refid: c
}) {
  const p = Ce(r), [N, m] = L.useState({}), g = (b, f) => {
    m((T) => ({
      ...T,
      [b]: f
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, f = {};
    return p.forEach((T) => {
      te([T], b, f, o);
    }), {
      initialValues: b,
      validationSchema: f
    };
  }, [p, o]), C = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      u(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((b, f) => le(b.hidden) || b.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: c,
            sqlOpsUrls: v,
            field: b,
            formik: C,
            methods: x,
            setFieldOptions: g,
            ...N[b.name] ? { optionsOverride: N[b.name] } : {}
          }
        )
      },
      b?.name ?? `field-${f}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ke({ title: e, children: r }) {
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function De({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: u = (N) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: v = {},
  sqlOpsUrls: c = {},
  refid: p
}) {
  const [N, m] = L.useState({}), g = (b, f) => {
    m((T) => ({
      ...T,
      [b]: f
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, f = {};
    return Object.values(r).flat().forEach((T) => {
      te([T], b, f, o);
    }), {
      initialValues: b,
      validationSchema: f
    };
  }, [r, o]), C = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      u(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, f], T) => /* @__PURE__ */ t.jsx(ke, { title: b, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((y, F) => le(y.hidden) || y.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: p,
            sqlOpsUrls: c,
            components: v,
            field: y,
            formik: C,
            methods: x,
            setFieldOptions: g,
            ...N[y.name] ? { optionsOverride: N[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${F}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const ee = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await z.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ee(e) }
)).data.refhash, me = async (e, r) => (await z.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ee(e) }
)).data.refid, ze = {
  async fetch(e, r) {
    const o = await he(e), u = await me(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), n = await z.post(
      e.baseURL + e.dbopsFetch,
      { refid: u, datahash: o },
      { headers: ee(e) }
    );
    return n.data?.data ?? n.data;
  },
  async create(e, r) {
    const o = await he(e), u = await me(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await z.post(
      e.baseURL + e.dbopsCreate,
      { refid: u, fields: r.values, datahash: o },
      { headers: ee(e) }
    )).data;
  },
  async update(e, r) {
    const o = await he(e), u = await me(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await z.post(
      e.baseURL + e.dbopsUpdate,
      { refid: u, fields: r.values, datahash: o },
      { headers: ee(e) }
    )).data;
  }
};
function Ke({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: o = null,
  onCancel: u = () => {
  },
  components: n = {},
  callback: x = () => {
  },
  initialvalues: v = {}
}) {
  let c = Ee(e);
  const p = e.endPoints, N = e?.source?.refid, m = Oe(e?.fields ?? {}), [g, w] = L.useState(v), A = L.useMemo(() => $e(e.fields), [e.fields]);
  L.useEffect(() => {
    let f = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (!y?.type) {
        f && w({});
        return;
      }
      if (y.type === "method") {
        const F = y.method, R = F ? r[F] : void 0;
        if (R)
          try {
            const s = await Promise.resolve(R());
            f && w(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), f && w({});
          }
        else
          f && w({});
      }
      if (y.type === "api" && p?.operation !== "create")
        try {
          const F = await z({
            method: y.method || "GET",
            url: y.url ?? "",
            data: y.body ?? {},
            params: y.params ?? {},
            headers: y.headers ?? {}
          });
          f && w(F.data ?? {});
        } catch (F) {
          console.error("API fetch failed:", F), f && w({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0" && p?.operation !== "create") {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const F = await ze.fetch(p, {
            source: {
              ...y,
              table: y.table,
              columns: y.columns,
              where: Y(y.where, {
                refid: N
              })
            },
            fields: Re(e.fields)
          });
          f && w(F);
        } catch (F) {
          console.error("API fetch failed:", F);
        }
      }
    })(), () => {
      f = !1;
    };
  }, [
    o,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const C = async (f) => {
    const T = e?.source ?? {};
    let y = null;
    if (A.length > 0)
      try {
        y = await Ae();
      } catch (R) {
        console.log("catch fetchGeolocation", R), y = null;
      }
    const F = {
      ...f,
      ...Object.fromEntries(
        A.map((R) => [R, y])
      )
    };
    if (T.type === "method") {
      const R = T.method, s = R ? r[R] : void 0;
      if (s)
        try {
          const I = await Promise.resolve(s(F));
          x?.(I);
        } catch (I) {
          x?.(I), console.error("Method execution failed:", I);
        }
    }
    if (T.type === "api") {
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const R = await z({
          method: T.method || "POST",
          url: p.baseURL + T.endpoint,
          data: F ?? {},
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        x?.(R);
      } catch (R) {
        x?.(R), console.error("API fetch failed:", R);
      }
    }
    if (T.type === "sql") {
      const R = e.endPoints;
      if (!R) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const s = await z({
          method: "GET",
          url: R.baseURL + R.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        let I = {
          ...T
        };
        T.where && (I = {
          ...T,
          where: Y(T.where, {
            refid: N
          })
        });
        const V = await z({
          method: "POST",
          url: R.baseURL + R.dbopsGetRefId,
          data: {
            operation: R.operation,
            source: I,
            fields: e.fields,
            forcefill: e.forcefill,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        }), j = await z({
          method: "POST",
          url: R.baseURL + R[R.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: V.data.refid,
            fields: F,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        x?.(j);
      } catch (s) {
        x?.(s), console.error("API fetch failed:", s);
      }
    }
  }, b = {
    accordion: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: g,
        onSubmit: C,
        onCancel: u,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: g,
        onSubmit: C,
        onCancel: u,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: g,
        onSubmit: C,
        onCancel: u,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: g,
        onSubmit: C,
        onCancel: u,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: b[c] ?? b.simple });
}
export {
  Ke as LogiksForm
};
