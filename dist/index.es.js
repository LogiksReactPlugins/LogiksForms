import L, { useState as Q, useRef as be, useEffect as Z, useMemo as xe } from "react";
import B from "axios";
import * as D from "yup";
import { useFormik as le } from "formik";
var ne = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Se() {
  if (ye) return J;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function d(l, n, u) {
    var y = null;
    if (u !== void 0 && (y = "" + u), n.key !== void 0 && (y = "" + n.key), "key" in n) {
      u = {};
      for (var c in n)
        c !== "key" && (u[c] = n[c]);
    } else u = n;
    return n = u.ref, {
      $$typeof: e,
      type: l,
      key: y,
      ref: n !== void 0 ? n : null,
      props: u
    };
  }
  return J.Fragment = r, J.jsx = d, J.jsxs = d, J;
}
var ee = {};
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
function Ee() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case A:
          return "Profiler";
        case w:
          return "StrictMode";
        case s:
          return "Suspense";
        case F:
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
          case I:
            return (a.displayName || "Context") + ".Provider";
          case f:
            return (a._context.displayName || "Context") + ".Consumer";
          case O:
            var o = a.render;
            return a = a.displayName, a || (a = o.displayName || o.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return o = a.displayName || null, o !== null ? o : e(a.type) || "Memo";
          case N:
            o = a._payload, a = a._init;
            try {
              return e(a(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var b = o.error, h = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), r(a);
      }
    }
    function l(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === N)
        return "<...>";
      try {
        var o = e(a);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = K.A;
      return a === null ? null : a.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function y(a) {
      if (k.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, o) {
      function b() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function p() {
      var a = e(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function j(a, o, b, h, $, _, H, W) {
      return b = _.ref, a = {
        $$typeof: R,
        type: a,
        key: o,
        props: _,
        _owner: $
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: H
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, o, b, h, $, _, H, W) {
      var z = o.children;
      if (z !== void 0)
        if (h)
          if (G(z)) {
            for (h = 0; h < z.length; h++)
              v(z[h]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(z);
      if (k.call(o, "key")) {
        z = e(a);
        var U = Object.keys(o).filter(function(Ne) {
          return Ne !== "key";
        });
        h = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", T[z + h] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          z,
          U,
          z
        ), T[z + h] = !0);
      }
      if (z = null, b !== void 0 && (d(b), z = "" + b), y(o) && (d(o.key), z = "" + o.key), "key" in o) {
        b = {};
        for (var me in o)
          me !== "key" && (b[me] = o[me]);
      } else b = o;
      return z && c(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), j(
        a,
        z,
        _,
        $,
        n(),
        b,
        H,
        W
      );
    }
    function v(a) {
      typeof a == "object" && a !== null && a.$$typeof === R && a._store && (a._store.validated = 1);
    }
    var E = L, R = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), K = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, G = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, i = E["react-stack-bottom-frame"].bind(
      E,
      u
    )(), x = X(l(u)), T = {};
    ee.Fragment = g, ee.jsx = function(a, o, b, h, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        o,
        b,
        !1,
        h,
        $,
        _ ? Error("react-stack-top-frame") : i,
        _ ? X(l(a)) : x
      );
    }, ee.jsxs = function(a, o, b, h, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        o,
        b,
        !0,
        h,
        $,
        _ ? Error("react-stack-top-frame") : i,
        _ ? X(l(a)) : x
      );
    };
  }()), ee;
}
var fe;
function Ae() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? ne.exports = Se() : ne.exports = Ee()), ne.exports;
}
var t = Ae();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function $e(e, r = "create", d = "Info") {
  const l = {};
  let n = !1;
  if (Object.values(e).forEach((y) => {
    y.group && (n = !0);
  }), !n) return {};
  const u = [];
  return Object.entries(e).forEach(([y, c]) => {
    if (c.vmode === "edit" && r === "create") return;
    const p = { ...c, name: y };
    if (c.group) {
      const j = c.group;
      l[j] || (l[j] = []), l[j].push(p);
    } else
      u.push(p);
  }), u.length > 0 ? {
    [d]: u,
    ...l
  } : l;
}
function ve(e, r = "create") {
  const d = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (d[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), d;
}
const se = (e, r, d, l) => {
  e.forEach((n) => {
    const u = n?.name;
    if (!u) return;
    let y = l?.[u];
    y == null && (y = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[u] = Array.isArray(y) ? y : typeof y == "string" ? y.split(",").map((p) => p.trim()).filter(Boolean) : [] : n.type === "json" ? r[u] = typeof y == "object" && y !== null ? JSON.stringify(y, null, 2) : y ?? "" : n.type === "date" ? r[u] = typeof y == "string" ? y.slice(0, 10) : "" : n.type === "time" ? typeof y == "string" ? y.includes("T") ? r[u] = y.slice(11, 16) : r[u] = y.slice(0, 5) : r[u] = "" : u === "blocked" || u === "blacklist" ? r[u] = String(y ?? "false") : r[u] = y ?? "";
    let c;
    n.type === "file" ? c = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? c = D.array().of(D.string()) : n.type === "email" ? c = D.string().email("Invalid email") : n.type === "number" ? c = D.number().typeError("Must be a number") : n.type === "json" ? c = D.string().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : c = D.string(), n.required && (c = c.required(
      n.error_message || `${n.label || u} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (c = c.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([p, j]) => {
      switch (p) {
        case "email":
          j && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(j),
            `Must match pattern: ${j}`
          );
          break;
        case "date":
          c = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((m, v) => {
            if (typeof v == "string") {
              const E = v.replace(/-/g, "/"), [R, C, g] = E.split("/");
              if (R && C && g)
                return /* @__PURE__ */ new Date(`${g}-${C}-${R}`);
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
          c = D.number().typeError("Must be a decimal").transform((m, v) => {
            if (v == null || v === "") return;
            const E = Number(v);
            if (isNaN(E)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const R = Number(m);
              return Number.isInteger(R) ? Number(E.toFixed(R)) : E;
            }
            return E;
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
          const m = Number(j);
          isNaN(m) || (c = c.min(m, `Minimum length is ${m}`));
          break;
        }
        case "length-max": {
          const m = Number(j);
          isNaN(m) || (c = c.max(m, `Maximum length is ${m}`));
          break;
        }
      }
    }), d[u] = c;
  });
}, ie = {
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
function ce(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const de = (e) => e === !0 || e === "true", Y = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (d, l) => r[l] !== void 0 ? String(r[l]) : d
) : Array.isArray(e) ? e.map((d) => Y(d, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([d, l]) => [
    Y(d, r),
    Y(l, r)
  ])
) : e, te = (e, r, d, l) => {
  const n = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const u = l ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!u) {
    const c = {};
    return n.forEach((p) => {
      p[e] != null && p[r] != null && (c[p[e]] = p[r]);
    }), c;
  }
  const y = {};
  return n.forEach((c) => {
    const p = c[u] ?? "Others", j = c[e], m = c[r];
    j == null || m == null || (y[p] || (y[p] = {}), y[p][j] = m);
  }), y;
}, je = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const l of Object.values(e))
    if (r in l)
      return l[r];
}, Re = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (d) => Object.entries(d)
) : [], we = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function Te() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (l, n) => {
        navigator.geolocation.getCurrentPosition(l, n, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: r, longitude: d } = e.coords;
    return `${r},${d}`;
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
const Ce = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ie(e, r = "create") {
  return Object.entries(e).filter(([, d]) => !(d.vmode === "edit" && r === "create")).map(([d, l]) => ({
    ...l,
    name: d
  }));
}
async function oe(e, r, d, l = {}) {
  try {
    let n = d;
    return n || (n = (await B({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {} },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await B({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: n,
        filter: l
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (n) {
    throw n;
  }
}
function Pe(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function _e(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const d = r.match(/^(.+?)\s+as\s+.+$/i);
    return d ? d[1]?.trim() : r;
  }).filter((r) => !!r);
}
const re = (e) => {
  const r = {};
  for (const [d, l] of Object.entries(e)) {
    const n = d.includes(".") ? d.split(".").pop() : d;
    if (n in r) {
      console.warn(`Duplicate key after normalization: ${n}`);
      continue;
    }
    r[n] = l;
  }
  return r;
};
function ue({
  field: e,
  formik: r,
  methods: d = {},
  sqlOpsUrls: l,
  refid: n,
  optionsOverride: u,
  setFieldOptions: y
}) {
  const [c, p] = Q(!1), [j, m] = Q(
    u ?? e.options ?? {}
  ), [v, E] = Q(""), [R, C] = Q(0), g = be(null), w = be(null), [A, f] = Q(!1), I = L.useRef(v);
  L.useEffect(() => {
    I.current = v;
  }, [v]);
  const O = (S) => {
    S.currentTarget.open || E("");
  };
  Z(() => {
    u && Object.keys(u).length !== 0 && m(u);
  }, [u]), Z(() => {
    const S = (M) => {
      w.current && !w.current.contains(M.target) && (w.current.open = !1, E(""));
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
      let i = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, x = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
      const T = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, o = a ? d[a] : void 0;
        if (o)
          try {
            const b = await Promise.resolve(o()), h = Array.isArray(b?.data?.data) ? b.data.data : Array.isArray(b?.data) ? b.data : b, $ = Array.isArray(h) ? h.map(re) : [], _ = te(i, x, { data: $ }, e.groupKey);
            S && m(_);
          } catch (b) {
            console.error("Method execution failed:", b), S && m({});
          }
        else
          S && m({});
      }
      if (T.type === "api" && T.url)
        try {
          const a = await B({
            method: T.method || "GET",
            url: T.url,
            data: T.body ?? {},
            params: T.params ?? {},
            headers: T.headers ?? {}
          }), o = Array.isArray(a?.data?.data) ? a.data.data : Array.isArray(a?.data) ? a.data : a, b = Array.isArray(o) ? o.map(re) : [], h = te(i, x, { data: b }, e.groupKey);
          S && m(h);
        } catch (a) {
          console.error("API execution failed:", a), S && m({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!l) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let a;
          if (e.type === "dataSelector")
            a = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: e.groupid ?? ""
              }
            };
          else if (!e.queryid) {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            a = {
              table: e.table,
              cols: e.columns,
              where: e.where ? n ? Y(e.where, { refid: n }) : e.where : void 0
            };
          }
          const o = await oe(l, a, e?.queryid), b = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, h = Array.isArray(b) ? b.map(re) : [], $ = te(i, x, { data: h }, e.groupKey);
          S && m($);
        } catch (a) {
          console.error("API fetch failed:", a);
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
  const F = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, q = xe(
    () => Re(j),
    [j]
  ), K = q.length, k = xe(() => e.search || !v ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(v.toLowerCase())
  ), [e.search, v, q]), G = (S, M) => {
    if (w.current?.open === !0 || A === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), C(
          (i) => i + 1 < k.length ? i + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), C(
          (i) => i - 1 >= 0 ? i - 1 : k.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [i] = k[R] || [];
        i && r.setFieldValue(e.name, M ? i : [...r.values[e.name], i]), w.current && (w.current.open = !1);
      } else S.key === "Escape" && (w.current.open = !1, E(""), f(!1));
  };
  Z(() => {
    g.current?.querySelector(
      `[data-index="${R}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [R]), Z(() => {
    R >= k.length && C(0);
  }, [k, R]), Z(() => {
    const S = e.autocomplete, M = e.ajaxchain;
    if (!S && !M) return;
    const i = r.values[e.name];
    if (!i) return;
    const x = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Pe(S)) {
          const a = S.src;
          if (!a || !l) return;
          const o = Y(a.where ?? {}, {
            refid: i
          }), b = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: o
          }, { data: h } = await oe(l, b, e?.queryid), $ = Array.isArray(h?.data) ? h.data[0] : h?.data;
          $ && S.target.split(",").map((_) => _.trim()).forEach((_) => {
            $[_] !== void 0 && r.setFieldValue(_, $[_]);
          });
        }
        for (const a of x) {
          const o = a.src;
          if (!a || typeof a != "object" || !o || typeof o != "object" || !l) continue;
          const b = Y(o?.where ?? {}, {
            refid: i
          }), h = {
            ...o,
            table: o.table,
            cols: o.columns,
            where: b
          }, { data: $ } = await oe(l, h, e?.queryid);
          let _ = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, H = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
          const W = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, z = Array.isArray(W) ? W.map(re) : [], U = te(
            _,
            H,
            { data: z },
            e.groupKey
          );
          y?.(a.target, U);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !v.trim() || !e.table || !l) return;
    const S = _e(e.columns ?? ""), M = new AbortController(), i = setTimeout(async () => {
      try {
        const x = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, T = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: x
        };
        let a = {};
        Array.isArray(S) && S.forEach((W) => {
          a[W] = [v, "LIKE"];
        });
        const { data: o } = await oe(l, T, e?.queryid, a);
        let b = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, h = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
        const $ = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, _ = Array.isArray($) ? $.map(re) : [], H = te(
          b,
          h,
          { data: _ },
          e.groupKey
        );
        m(H);
      } catch (x) {
        if (B.isCancel(x)) return;
        console.error("Search fetch failed", x);
      }
    }, 500);
    return () => {
      clearTimeout(i), M.abort();
    };
  }, [v, n]);
  const X = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const M = l?.baseURL + l?.uploadURL;
    if (!M) {
      console.error("No Upload URL ");
      return;
    }
    const i = e.multiple === !0;
    try {
      const x = await Promise.all(
        Array.from(S).map(async (T) => {
          const a = new FormData();
          return a.append("file", T), (await B({
            method: "POST",
            url: M,
            data: a,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${l?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        i ? x.map((T) => T.path) : x[0]?.path
      );
    } catch (x) {
      console.error("File upload failed", x), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const i = r.values[s] ?? "", x = v !== "" ? v : je(j, i) ?? String(i ?? ""), T = (o) => {
        const b = o.target.value;
        E(b), C(0), b.trim() ? f(!0) : (f(!1), r.setFieldValue(s, ""));
      }, a = (o) => {
        r.setFieldValue(s, o), E(""), f(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${F} ${V}`,
            value: x,
            placeholder: e.placeholder || "Type to search...",
            onChange: T,
            onBlur: () => {
              setTimeout(() => f(!1), 150);
            },
            onKeyDown: (o) => {
              if (o.key === "Enter") {
                if (o.preventDefault(), k[R]) {
                  const [b] = k[R];
                  r.setFieldValue(s, b);
                } else v.trim() && r.setFieldValue(s, v.trim());
                f(!1);
                return;
              }
              G(o, !0);
            },
            disabled: e.disabled
          }
        ),
        A && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: g,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 ? k.map(([o, b], h) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": h,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${R === h ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(o),
                children: b
              },
              o
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${x}" ` })
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
          /* @__PURE__ */ t.jsxs("label", { className: N, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: O,
              ref: w,
              onKeyDown: (x) => G(x, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (x) => {
                        E(x.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  k.length > 0 ? k.map(([x, T], a) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${x}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${i?.includes(x) ? "bg-indigo-50 text-indigo-600 font-medium" : R === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${x}`,
                            type: "checkbox",
                            checked: i?.includes(x),
                            onChange: (o) => {
                              const b = o.target.checked ? [...i, x] : i?.filter((h) => h !== x);
                              r.setFieldValue(s, b);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        T
                      ]
                    },
                    x
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: O,
            ref: w,
            onKeyDown: (i) => G(i, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? je(j, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: v,
                    onChange: (i) => {
                      E(i.target.value), C(0);
                    },
                    onKeyDown: (i) => G(i, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                k.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (i) => {
                      i.preventDefault(), i.stopPropagation(), r.setFieldValue(s, ""), w.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                k.length > 0 ? k.map(([i, x], T) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": T,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, i), w.current?.removeAttribute("open"), E(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === i ? "bg-indigo-50 text-indigo-600 font-medium" : R === T ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: x
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${F} ${V} min-h-[120px] resize-none`,
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${F} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || "Please select an option" }),
                !we(j) && Object.entries(j).map(([i, x]) => /* @__PURE__ */ t.jsx("option", { value: i, className: "py-2", children: x }, i)),
                we(j) && Object.entries(j).map(([i, x]) => /* @__PURE__ */ t.jsx("optgroup", { label: i, children: Object.entries(x).map(([T, a]) => /* @__PURE__ */ t.jsx("option", { value: T, children: a }, T)) }, i))
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(j || {}).map(([i, x]) => /* @__PURE__ */ t.jsxs(
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
              x
            ]
          },
          i
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const i = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(j || {}).map(([x, T]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: i.includes(x),
                  onChange: (a) => {
                    const o = a.target.checked ? [...i, x] : i.filter((b) => b !== x);
                    r.setFieldValue(s, o);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              T
            ]
          },
          x
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const i = r.values[s], x = v.trim(), T = Array.isArray(j) ? j : Object.entries(j || {}).map(([h, $]) => ({ value: h, label: $ })), a = (h) => {
        h && !i.includes(h) && (r.setFieldValue(s, [...i, h]), E(""));
      }, o = (h) => {
        r.setFieldValue(
          s,
          i.filter(($) => $ !== h)
        );
      }, b = (h) => T.find(($) => $.value === h)?.label ?? h;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${F} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              i.map((h) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: b(h) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: ($) => {
                          $.stopPropagation(), e.disabled || o(h);
                        },
                        onMouseDown: ($) => $.preventDefault(),
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
                  value: v,
                  onChange: (h) => E(h.target.value),
                  onKeyDown: (h) => {
                    (h.key === "Enter" || h.key === ",") && (h.preventDefault(), a(x));
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
      const S = e.multiple === !0, M = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "file",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
              name: s,
              multiple: S,
              onChange: (i) => {
                const x = i.currentTarget.files;
                x && X(x);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((i) => {
          const x = i?.split("/").pop();
          return x ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: x }) }, i) : null;
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
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
              className: `${F} ${V} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
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
              className: `${F} ${V} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
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
function Fe({ title: e, children: r, isFirst: d }) {
  const [l, n] = Q(d);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => n(!l),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${l ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${l ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${l ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${l ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function ke({
  title: e,
  groupedFields: r,
  data: d,
  onSubmit: l = (j) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: y = {},
  sqlOpsUrls: c = {},
  refid: p
}) {
  const [j, m] = L.useState({}), v = (g, w) => {
    m((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: R } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((A) => {
      se([A], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], A) => /* @__PURE__ */ t.jsx(Fe, { title: g, isFirst: A === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((f, I) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: p,
            sqlOpsUrls: c,
            components: y,
            field: f,
            formik: C,
            methods: u,
            setFieldOptions: v,
            ...j[f.name] ? { optionsOverride: j[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${I}`
    )) }) }, g)) }),
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
  data: d,
  onSubmit: l = (m) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: y = {},
  sqlOpsUrls: c = {},
  widget: p,
  refid: j
}) {
  const m = Object.keys(r), [v, E] = L.useState(0), [R, C] = L.useState({}), g = (N, P) => {
    C((q) => ({
      ...q,
      [N]: P
    }));
  }, { initialValues: w, validationSchema: A, stepperSchemas: f } = L.useMemo(() => {
    const N = {}, P = {}, q = {};
    return p ? Object.entries(r).forEach(([K, k]) => {
      const G = {};
      se(k, N, G, d), q[K] = G;
    }) : Object.entries(r).forEach(([K, k]) => {
      se(k, N, P, d);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, d, p]), I = m[v] ?? null, O = p && I ? f[I] ?? {} : A, s = le({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(O),
    onSubmit: (N) => {
      p ? (v < m.length - 1 && E((P) => P + 1), v === m.length - 1 && l(N)) : l(N);
    }
  }), F = async (N) => {
    if (N.preventDefault(), !p) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((q, K) => ({ ...q, [K]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(N);
  }, V = () => {
    E((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: m.map((N, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: N })
      },
      N
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((N, P) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ie[ce(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ue,
                  {
                    refid: j,
                    sqlOpsUrls: c,
                    field: N,
                    formik: s,
                    methods: u,
                    components: y,
                    setFieldOptions: g,
                    ...R[N.name] ? { optionsOverride: R[N.name] } : {}
                  },
                  N.name
                )
              },
              N?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              v > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
                v + 1,
                " of ",
                m.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: m.map((N, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      m[v]
    )
  ] });
}
function ze({
  title: e,
  fields: r,
  data: d,
  onSubmit: l = (p) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  sqlOpsUrls: y = {},
  refid: c
}) {
  const p = Ie(r, y.operation), [j, m] = L.useState({}), v = (g, w) => {
    m((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: R } = L.useMemo(() => {
    const g = {}, w = {};
    return p.forEach((A) => {
      se([A], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [p, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (g) => {
      l(g);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((g, w) => de(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && y.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: c,
            sqlOpsUrls: y,
            field: g,
            formik: C,
            methods: u,
            setFieldOptions: v,
            ...j[g.name] ? { optionsOverride: j[g.name] } : {}
          }
        )
      },
      g?.name ?? `field-${w}`
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
function Le({ title: e, children: r }) {
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
  data: d,
  onSubmit: l = (j) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: y = {},
  sqlOpsUrls: c = {},
  refid: p
}) {
  const [j, m] = L.useState({}), v = (g, w) => {
    m((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: R } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((A) => {
      se([A], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], A) => /* @__PURE__ */ t.jsx(Le, { title: g, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((f, I) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: p,
            sqlOpsUrls: c,
            components: y,
            field: f,
            formik: C,
            methods: u,
            setFieldOptions: v,
            ...j[f.name] ? { optionsOverride: j[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${I}`
    )) }) }, g)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const ae = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ae(e) }
)).data.refhash, pe = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ae(e) }
)).data.refid, qe = {
  async fetch(e, r, d) {
    const l = await he(e);
    let n = !1, u;
    d && (n = !0, u = d), console.log("skipquery,dbopsid", n, d), n || (u = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    })), console.log("dbopsId", u);
    const y = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: u, datahash: l },
      { headers: ae(e) }
    );
    return y.data?.data ?? y.data;
  },
  async create(e, r) {
    const d = await he(e), l = await pe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: d
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: l, fields: r.values, datahash: d },
      { headers: ae(e) }
    )).data;
  },
  async update(e, r) {
    const d = await he(e), l = await pe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: d
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: l, fields: r.values, datahash: d },
      { headers: ae(e) }
    )).data;
  }
};
function Ge({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: d = null,
  onCancel: l = () => {
  },
  components: n = {},
  callback: u = () => {
  },
  initialvalues: y = {}
}) {
  let c = Oe(e);
  const p = e.endPoints, j = e?.source?.refid, m = $e(e?.fields ?? {}, p?.operation), [v, E] = L.useState(y), R = L.useMemo(() => Ce(e.fields), [e.fields]);
  L.useEffect(() => {
    let w = !0;
    return (async () => {
      const f = e?.source ?? {};
      if (!f?.type) {
        w && E({});
        return;
      }
      if (f.type === "method") {
        const I = f.method, O = I ? r[I] : void 0;
        if (O)
          try {
            const s = await Promise.resolve(O());
            w && E(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), w && E({});
          }
        else
          w && E({});
      }
      if (f.type === "api" && p?.operation !== "create")
        try {
          const I = await B({
            method: f.method || "GET",
            url: f.url ?? "",
            data: f.body ?? {},
            params: f.params ?? {},
            headers: f.headers ?? {}
          });
          w && E(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), w && E({});
        }
      if (f.type === "sql" && f.refid && f.refid != "0" && p?.operation !== "create") {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await qe.fetch(p, {
            source: {
              ...f,
              table: f.table,
              columns: f.columns,
              where: Y(f.where, {
                refid: j
              })
            },
            fields: ve(e.fields, p.operation)
          }, f?.dbopsid);
          w && E(I);
        } catch (I) {
          console.error("API fetch failed:", I);
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    d,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const C = async (w) => {
    const A = e?.source ?? {};
    let f = null;
    if (R.length > 0)
      try {
        f = await Te();
      } catch (O) {
        console.log("catch fetchGeolocation", O), f = null;
      }
    const I = {
      ...w,
      ...Object.fromEntries(
        R.map((O) => [O, f])
      )
    };
    if (A.type === "method") {
      const O = A.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const F = await Promise.resolve(s(I));
          u?.(F);
        } catch (F) {
          u?.(F), console.error("Method execution failed:", F);
        }
    }
    if (A.type === "api") {
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await B({
          method: A.method || "POST",
          url: p.baseURL + A.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        u?.(O);
      } catch (O) {
        u?.(O), console.error("API fetch failed:", O);
      }
    }
    if (A.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let s = !1, F;
        A?.dbopsid && (s = !0, F = A?.dbopsid);
        const V = await B({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        if (!s) {
          let P = {
            ...A
          };
          A.where && (P = {
            ...A,
            where: Y(A.where, {
              refid: j
            })
          }), F = (await B({
            method: "POST",
            url: O.baseURL + O.dbopsGetRefId,
            data: {
              operation: O.operation,
              source: P,
              fields: ve(e.fields, O.operation),
              forcefill: e.forcefill,
              datahash: V.data.refhash
            },
            headers: {
              Authorization: `Bearer ${O?.accessToken}`
            }
          }))?.data.refid;
        }
        const N = await B({
          method: "POST",
          url: O.baseURL + O[O.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: F,
            fields: I,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        u?.(N);
      } catch (s) {
        u?.(s), console.error("API fetch failed:", s);
      }
    }
  }, g = {
    accordion: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: v,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: j
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: v,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: j
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: v,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: p,
        refid: j
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ze,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: v,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: j
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: g[c] ?? g.simple });
}
export {
  Ge as LogiksForm
};
