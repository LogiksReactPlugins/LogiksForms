import L, { useState as Z, useRef as be, useEffect as te, useMemo as xe } from "react";
import B from "axios";
import * as q from "yup";
import { useFormik as ie } from "formik";
var oe = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Se() {
  if (ge) return re;
  ge = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function c(l, o, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), o.key !== void 0 && (g = "" + o.key), "key" in o) {
      m = {};
      for (var u in o)
        u !== "key" && (m[u] = o[u]);
    } else m = o;
    return o = m.ref, {
      $$typeof: e,
      type: l,
      key: g,
      ref: o !== void 0 ? o : null,
      props: m
    };
  }
  return re.Fragment = r, re.jsx = c, re.jsxs = c, re;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ae() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === z ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case j:
          return "Fragment";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case s:
          return "Suspense";
        case _:
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
          case $:
            var n = a.render;
            return a = a.displayName, a || (a = n.displayName || n.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return n = a.displayName || null, n !== null ? n : e(a.type) || "Memo";
          case S:
            n = a._payload, a = a._init;
            try {
              return e(a(n));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function c(a) {
      try {
        r(a);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var d = n.error, x = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return d.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), r(a);
      }
    }
    function l(a) {
      if (a === j) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === S)
        return "<...>";
      try {
        var n = e(a);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function g(a) {
      if (k.call(a, "key")) {
        var n = Object.getOwnPropertyDescriptor(a, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, n) {
      function d() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: d,
        configurable: !0
      });
    }
    function y() {
      var a = e(this.type);
      return A[a] || (A[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, n, d, x, p, R, D, Y) {
      return d = R.ref, a = {
        $$typeof: T,
        type: a,
        key: n,
        props: R,
        _owner: p
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: y
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
        value: D
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function b(a, n, d, x, p, R, D, Y) {
      var M = n.children;
      if (M !== void 0)
        if (x)
          if (W(M)) {
            for (x = 0; x < M.length; x++)
              w(M[x]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(M);
      if (k.call(n, "key")) {
        M = e(a);
        var H = Object.keys(n).filter(function(Ne) {
          return Ne !== "key";
        });
        x = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", h[M + x] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          M,
          H,
          M
        ), h[M + x] = !0);
      }
      if (M = null, d !== void 0 && (c(d), M = "" + d), g(n) && (c(n.key), M = "" + n.key), "key" in n) {
        d = {};
        for (var ee in n)
          ee !== "key" && (d[ee] = n[ee]);
      } else d = n;
      return M && u(
        d,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        M,
        R,
        p,
        o(),
        d,
        D,
        Y
      );
    }
    function w(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var E = L, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), I = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), G = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, W = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var K, A = {}, F = E["react-stack-bottom-frame"].bind(
      E,
      m
    )(), i = J(l(m)), h = {};
    ae.Fragment = j, ae.jsx = function(a, n, d, x, p) {
      var R = 1e4 > G.recentlyCreatedOwnerStacks++;
      return b(
        a,
        n,
        d,
        !1,
        x,
        p,
        R ? Error("react-stack-top-frame") : F,
        R ? J(l(a)) : i
      );
    }, ae.jsxs = function(a, n, d, x, p) {
      var R = 1e4 > G.recentlyCreatedOwnerStacks++;
      return b(
        a,
        n,
        d,
        !0,
        x,
        p,
        R ? Error("react-stack-top-frame") : F,
        R ? J(l(a)) : i
      );
    };
  }()), ae;
}
var fe;
function Ee() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? oe.exports = Se() : oe.exports = Ae()), oe.exports;
}
var t = Ee();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function $e(e, r = "create", c = "Info") {
  const l = {};
  let o = !1;
  if (Object.values(e).forEach((g) => {
    g.group && (o = !0);
  }), !o) return {};
  const m = [];
  return Object.entries(e).forEach(([g, u]) => {
    if (u.vmode === "edit" && r === "create") return;
    const y = { ...u, name: g };
    if (u.group) {
      const v = u.group;
      l[v] || (l[v] = []), l[v].push(y);
    } else
      m.push(y);
  }), m.length > 0 ? {
    [c]: m,
    ...l
  } : l;
}
function ve(e, r = "create") {
  const c = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (c[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), c;
}
const ne = (e, r, c, l) => {
  e.forEach((o) => {
    const m = o?.name;
    if (!m) return;
    let g = l?.[m];
    g == null && (g = o.default), o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? r[m] = Array.isArray(g) ? g : typeof g == "string" ? g.split(",").map((y) => y.trim()).filter(Boolean) : [] : o.type === "json" ? r[m] = typeof g == "object" && g !== null ? JSON.stringify(g, null, 2) : g ?? "" : o.type === "date" ? r[m] = typeof g == "string" ? g.slice(0, 10) : "" : o.type === "time" ? typeof g == "string" ? g.includes("T") ? r[m] = g.slice(11, 16) : r[m] = g.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(g ?? "false") : r[m] = g ?? "";
    let u;
    o.type === "file" ? u = o.multiple ? q.array().of(q.mixed()) : q.mixed() : o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? u = q.array().of(q.string()) : o.type === "email" ? u = q.string().email("Invalid email") : o.type === "number" ? u = q.number().typeError("Must be a number") : o.type === "json" ? u = q.string().test("json", "Invalid JSON", (y) => {
      if (!y) return !0;
      try {
        return JSON.parse(y), !0;
      } catch {
        return !1;
      }
    }) : u = q.string(), o.required && (u = u.required(
      o.error_message || `${o.label || m} is required`
    )), o?.validate?.regex && typeof o.validate.regex == "string" && (u = u.matches(
      new RegExp(o?.validate?.regex),
      o?.error_message || "Invalid input format"
    )), o?.validate && Object.entries(o.validate).forEach(([y, v]) => {
      switch (y) {
        case "email":
          v && (u = u.email("Invalid email format"));
          break;
        case "mobile":
          u = u.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          u = u.matches(
            new RegExp(v),
            `Must match pattern: ${v}`
          );
          break;
        case "date":
          u = q.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((b, w) => {
            if (typeof w == "string") {
              const E = w.replace(/-/g, "/"), [T, C, j] = E.split("/");
              if (T && C && j)
                return /* @__PURE__ */ new Date(`${j}-${C}-${T}`);
            }
            return b;
          });
          break;
        case "time":
          u = u.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          u = u.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          u = q.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          u = q.number().typeError("Must be a decimal").transform((b, w) => {
            if (w == null || w === "") return;
            const E = Number(w);
            if (isNaN(E)) return b;
            if (typeof b == "number" && !isNaN(b)) {
              const T = Number(b);
              return Number.isInteger(T) ? Number(E.toFixed(T)) : E;
            }
            return E;
          });
          break;
        case "alphanumeric":
          u = u.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          u = u.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          u = u.transform(
            (b) => b && b.toUpperCase()
          );
          break;
        case "lower":
          u = u.transform(
            (b) => b && b.toLowerCase()
          );
          break;
        case "length-min": {
          const b = Number(v);
          isNaN(b) || (u = u.min(b, `Minimum length is ${b}`));
          break;
        }
        case "length-max": {
          const b = Number(v);
          isNaN(b) || (u = u.max(b, `Maximum length is ${b}`));
          break;
        }
      }
    }), c[m] = u;
  });
}, ce = {
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
function ue(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const de = (e) => e === !0 || e === "true", U = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (c, l) => r[l] !== void 0 ? String(r[l]) : c
) : Array.isArray(e) ? e.map((c) => U(c, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([c, l]) => [
    U(c, r),
    U(l, r)
  ])
) : e, Q = (e, r, c, l) => {
  if (!Array.isArray(c) || c.length === 0) return {};
  const o = l ?? (c[0] && typeof c[0] == "object" && "category" in c[0] ? "category" : void 0);
  if (!o) {
    const g = {};
    return c.forEach((u) => {
      const y = u[e], v = u[r];
      y != null && v != null && (g[String(y)] = String(v));
    }), g;
  }
  const m = {};
  return c.forEach((g) => {
    const u = g[o] ?? "Others", y = g[e], v = g[r];
    y == null || v == null || (m[u] || (m[u] = {}), m[u][String(y)] = String(v));
  }), m;
}, je = (e, r) => {
  if (!e || r == null) return;
  const c = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[c];
  for (const o of Object.values(e))
    if (c in o)
      return o[c];
}, Re = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (l) => [
        String(l.value),
        String(l.title ?? l.label ?? l.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([l, o]) => [String(l), o]) : Object.values(e).flatMap(
    (l) => Object.entries(l).map(
      ([o, m]) => [String(o), m]
    )
  ) : [];
}, we = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null && !Array.isArray(r);
};
async function Te() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (l, o) => {
        navigator.geolocation.getCurrentPosition(l, o, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: r, longitude: c } = e.coords;
    return `${r},${c}`;
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
  return Object.entries(e).filter(([, c]) => !(c.vmode === "edit" && r === "create")).map(([c, l]) => ({
    ...l,
    name: c
  }));
}
async function le(e, r, c, l = void 0, o = {}) {
  try {
    let m = c;
    return m || (m = (await B({
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
        queryid: m,
        filter: o,
        refid: l,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (m) {
    throw m;
  }
}
function Pe(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Fe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const c = r.match(/^(.+?)\s+as\s+.+$/i);
    return c ? c[1]?.trim() : r;
  }).filter((r) => !!r);
}
const X = (e) => {
  const r = {};
  for (const [c, l] of Object.entries(e)) {
    const o = c.includes(".") ? c.split(".").pop() : c;
    if (o in r) {
      console.warn(`Duplicate key after normalization: ${o}`);
      continue;
    }
    r[o] = l;
  }
  return r;
};
function me({
  field: e,
  formik: r,
  methods: c = {},
  sqlOpsUrls: l,
  refid: o,
  optionsOverride: m,
  setFieldOptions: g
}) {
  const [u, y] = Z(!1), [v, b] = Z(
    m ?? e.options ?? {}
  ), [w, E] = Z(""), [T, C] = Z(0), j = be(null), N = be(null), [O, f] = Z(!1), I = L.useRef(w);
  L.useEffect(() => {
    I.current = w;
  }, [w]);
  const $ = (A) => {
    A.currentTarget.open || E("");
  };
  te(() => {
    m && Object.keys(m).length !== 0 && b(m);
  }, [m]), te(() => {
    const A = (F) => {
      N.current && !N.current.contains(F.target) && (N.current.open = !1, E(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, []);
  const s = e.name;
  L.useEffect(() => {
    let A = !0;
    return (async () => {
      let i = e.valueKey ?? "value", h = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const p = Object.values(e.options);
          if (p.length && typeof p[0] == "string") {
            b(e.options);
            return;
          }
        }
        const d = (Array.isArray(e.options) ? e.options : [e.options]).map(X), x = Q(
          i,
          h,
          d,
          e.groupKey
          // auto-uses `category` if present
        );
        b(x);
        return;
      }
      const a = e?.source ?? {};
      if (e.type === "dataMethod") {
        const n = e.method, d = n ? c[n] : void 0;
        if (d)
          try {
            const x = await Promise.resolve(d()), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, R = Array.isArray(p) ? p.map(X) : [], D = Q(i, h, R, e.groupKey);
            A && b(D);
          } catch (x) {
            console.error("Method execution failed:", x), A && b({});
          }
        else
          A && b({});
      }
      if (a.type === "api" && a.url)
        try {
          const n = await B({
            method: a.method || "GET",
            url: a.url,
            data: a.body ?? {},
            params: a.params ?? {},
            headers: a.headers ?? {}
          }), d = Array.isArray(n?.data?.data) ? n.data.data : Array.isArray(n?.data) ? n.data : n, x = Array.isArray(d) ? d.map(X) : [], p = Q(i, h, x, e.groupKey);
          A && b(p);
        } catch (n) {
          console.error("API execution failed:", n), A && b({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!l) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let n;
          if (e.type === "dataSelector")
            n = {
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
            n = {
              table: e.table,
              cols: e.columns,
              where: e.where ? o ? U(e.where, { refid: o }) : e.where : void 0
            };
          }
          const d = await le(l, n, e?.queryid), x = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, p = Array.isArray(x) ? x.map(X) : [], R = Q(i, h, p, e.groupKey);
          A && b(R);
        } catch (n) {
          console.error("API fetch failed:", n);
        }
      }
    })(), () => {
      A = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    o
  ]);
  const _ = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, S = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (A) => A.icon ? /* @__PURE__ */ t.jsx("i", { className: A.icon }) : null, z = xe(
    () => Re(v),
    [v]
  );
  console.log("flatOptions", z);
  const G = z.length, k = xe(() => e.search || !w ? z : z.filter(
    ([, A]) => A.toLowerCase().includes(w.toLowerCase())
  ), [e.search, w, z]), W = (A, F) => {
    if (N.current?.open === !0 || O === !0)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (i) => i + 1 < k.length ? i + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (i) => i - 1 >= 0 ? i - 1 : k.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [i] = k[T] || [];
        i && r.setFieldValue(e.name, F ? i : [...r.values[e.name], i]), N.current && (N.current.open = !1);
      } else A.key === "Escape" && (N.current.open = !1, E(""), f(!1));
  };
  te(() => {
    j.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), te(() => {
    T >= k.length && C(0);
  }, [k, T]), te(() => {
    const A = e.autocomplete, F = e.ajaxchain;
    if (!A && !F) return;
    const i = r.values[e.name];
    if (!i) return;
    const h = Array.isArray(F) ? F : F ? [F] : [];
    (async () => {
      try {
        if (Pe(A)) {
          const n = A.src;
          if (!n || !l) return;
          const d = U(n.where ?? {}, {
            refid: i
          }), x = {
            ...n,
            table: n.table,
            cols: n.columns,
            where: d
          }, { data: p } = await le(l, x, e?.queryid), R = Array.isArray(p?.data) ? p.data[0] : p?.data;
          R && A.target.split(",").map((D) => D.trim()).forEach((D) => {
            R[D] !== void 0 && r.setFieldValue(D, R[D]);
          });
        }
        for (const n of h) {
          const d = n.src;
          if (!n || typeof n != "object" || !d || typeof d != "object" || !l) continue;
          let x;
          if (!d.queryid) {
            if (!d.table || !d.columns)
              throw new Error("SQL query requires field.table");
            const ee = U(d?.where ?? {}, {
              refid: i
            });
            x = {
              ...d,
              table: d.table,
              cols: d.columns,
              where: ee
            };
          }
          const { data: p } = await le(l, x, d?.queryid, i);
          let R = e.valueKey ?? "value", D = e.labelKey ?? "title";
          const Y = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, M = Array.isArray(Y) ? Y.map(X) : [], H = Q(
            R,
            D,
            M,
            e.groupKey
          );
          g?.(n.target, H);
        }
      } catch (n) {
        console.error("Autocomplete / AjaxChain fetch failed", n);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !w.trim() || !e.table || !l) return;
    const A = Fe(e.columns ?? ""), F = new AbortController(), i = setTimeout(async () => {
      try {
        let h;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Y = o ? U(e.where ?? {}, {
            refid: o
          }) : e.where;
          h = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Y
          };
        }
        let a = {};
        Array.isArray(A) && A.forEach((Y) => {
          a[Y] = [w, "LIKE"];
        });
        let n = e.valueKey ?? "value", d = e.labelKey ?? "title";
        const { data: x } = await le(l, h, e?.queryid, void 0, a), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, R = Array.isArray(p) ? p.map(X) : [], D = Q(
          n,
          d,
          R,
          e.groupKey
        );
        b(D);
      } catch (h) {
        if (B.isCancel(h)) return;
        console.error("Search fetch failed", h);
      }
    }, 500);
    return () => {
      clearTimeout(i), F.abort();
    };
  }, [w, o]);
  const J = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    const F = l?.baseURL + l?.uploadURL;
    if (!F) {
      console.error("No Upload URL ");
      return;
    }
    const i = e.multiple === !0;
    try {
      const h = await Promise.all(
        Array.from(A).map(async (a) => {
          const n = new FormData();
          return n.append("file", a), (await B({
            method: "POST",
            url: F,
            data: n,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${l?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        i ? h.map((a) => a.path) : h[0]?.path
      );
    } catch (h) {
      console.error("File upload failed", h), r.setFieldError(s, "File upload failed");
    }
  };
  console.log("options", v);
  const K = async () => {
    if (e.method) {
      const A = e.method, F = A ? c[A] : void 0;
      if (F)
        try {
          await Promise.resolve(F());
        } catch (i) {
          console.error("Method execution failed:", i);
        }
      else
        console.error("No Method available:");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const i = r.values[s] ?? "", h = w !== "" ? w : je(v, i) ?? String(i ?? ""), a = (d) => {
        const x = d.target.value;
        E(x), C(0), x.trim() ? f(!0) : (f(!1), r.setFieldValue(s, ""));
      }, n = (d) => {
        r.setFieldValue(s, d), E(""), f(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${_} ${V}`,
            value: h,
            placeholder: e.placeholder || "Type to search...",
            onChange: a,
            onBlur: () => {
              setTimeout(() => f(!1), 150);
            },
            onKeyDown: (d) => {
              if (d.key === "Enter") {
                if (d.preventDefault(), k[T]) {
                  const [x] = k[T];
                  r.setFieldValue(s, x);
                } else w.trim() && r.setFieldValue(s, w.trim());
                f(!1);
                return;
              }
              W(d, !0);
            },
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: j,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 ? k.map(([d, x], p) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${s}-${d}`,
                "data-index": p,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === p ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => n(d),
                children: x
              },
              d
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${h}" ` })
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
          /* @__PURE__ */ t.jsxs("label", { className: S, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: $,
              ref: N,
              onKeyDown: (h) => W(h, !1),
              onClick: K,
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
                /* @__PURE__ */ t.jsxs("div", { ref: j, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (h) => {
                        E(h.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  k.length > 0 ? k.map(([h, a], n) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${h}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${i?.includes(h) ? "bg-indigo-50 text-indigo-600 font-medium" : T === n ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${h}`,
                            type: "checkbox",
                            checked: i?.includes(h),
                            onChange: (d) => {
                              const x = d.target.checked ? [...i, h] : i?.filter((p) => p !== h);
                              r.setFieldValue(s, x);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        a
                      ]
                    },
                    h
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: $,
            ref: N,
            onKeyDown: (i) => W(i, !0),
            onClick: K,
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? je(v, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: j, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: w,
                    onChange: (i) => {
                      E(i.target.value), C(0);
                    },
                    onKeyDown: (i) => W(i, !0),
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
                      i.preventDefault(), i.stopPropagation(), r.setFieldValue(s, ""), N.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                k.length > 0 ? k.map(([i, h], a) => (console.log("label", h), /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${s}-${i}`,
                    "data-index": a,
                    onClick: (n) => {
                      n.preventDefault(), n.stopPropagation(), r.setFieldValue(s, i), N.current?.removeAttribute("open"), E(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === i ? "bg-indigo-50 text-indigo-600 font-medium" : T === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: h
                  },
                  i
                ))) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              onClick: K,
              className: `${_} ${V} min-h-[120px] resize-none`,
              onFocus: () => y(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${_} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => y(!0),
              onClick: K,
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !we(v) && Object.entries(v).map(([i, h]) => /* @__PURE__ */ t.jsx("option", { value: i, className: "py-2", children: h }, i)),
                we(v) && Object.entries(v).map(([i, h]) => /* @__PURE__ */ t.jsx("optgroup", { label: i, children: Object.entries(h).map(([a, n]) => /* @__PURE__ */ t.jsx("option", { value: a, children: n }, a)) }, i))
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
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { onClick: K, className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([i, h]) => /* @__PURE__ */ t.jsxs(
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
              h
            ]
          },
          i
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const i = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { onClick: K, className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([h, a]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${h}`,
                  type: "checkbox",
                  checked: i.includes(h),
                  onChange: (n) => {
                    const d = n.target.checked ? [...i, h] : i.filter((x) => x !== h);
                    r.setFieldValue(s, d);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              a
            ]
          },
          h
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const i = r.values[s], h = w.trim(), a = Array.isArray(v) ? v : Object.entries(v || {}).map(([p, R]) => ({ value: p, label: R })), n = (p) => {
        p && !i.includes(p) && (r.setFieldValue(s, [...i, p]), E(""));
      }, d = (p) => {
        r.setFieldValue(
          s,
          i.filter((R) => R !== p)
        );
      }, x = (p) => a.find((R) => R.value === p)?.label ?? p;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              i.map((p) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: x(p) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (R) => {
                          R.stopPropagation(), e.disabled || d(p);
                        },
                        onMouseDown: (R) => R.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                p
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: w,
                  onChange: (p) => E(p.target.value),
                  onKeyDown: (p) => {
                    (p.key === "Enter" || p.key === ",") && (p.preventDefault(), n(h));
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
      const A = e.multiple === !0, F = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              onClick: K,
              id: s,
              type: "file",
              className: `${_} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: s,
              multiple: A,
              onChange: (i) => {
                const h = i.currentTarget.files;
                h && J(h);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        F.map((i) => {
          const h = i?.split("/").pop();
          return h ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: h }) }, i) : null;
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { onClick: K, className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              name: s,
              value: r.values[s],
              onChange: (i) => r.setFieldValue(s, i.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${_} ${V} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { onClick: K, className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "date",
              name: s,
              value: r.values[s],
              onChange: r.handleChange,
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${_} ${V} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: S, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              onClick: K,
              id: s,
              type: e.type || "text",
              className: `${_} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function _e({ title: e, children: r, isFirst: c }) {
  const [l, o] = Z(c);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => o(!l),
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
  data: c,
  onSubmit: l = (v) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  refid: y
}) {
  const [v, b] = L.useState({}), w = (j, N) => {
    b((O) => ({
      ...O,
      [j]: N
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const j = {}, N = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], j, N, c);
    }), {
      initialValues: j,
      validationSchema: N
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      l(j);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([j, N], O) => /* @__PURE__ */ t.jsx(_e, { title: j, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: N.map((f, I) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          me,
          {
            refid: y,
            sqlOpsUrls: u,
            components: g,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...v[f.name] ? { optionsOverride: v[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${I}`
    )) }) }, j)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Me({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: l = (b) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  widget: y,
  refid: v
}) {
  const b = Object.keys(r), [w, E] = L.useState(0), [T, C] = L.useState({}), j = (S, P) => {
    C((z) => ({
      ...z,
      [S]: P
    }));
  }, { initialValues: N, validationSchema: O, stepperSchemas: f } = L.useMemo(() => {
    const S = {}, P = {}, z = {};
    return y ? Object.entries(r).forEach(([G, k]) => {
      const W = {};
      ne(k, S, W, c), z[G] = W;
    }) : Object.entries(r).forEach(([G, k]) => {
      ne(k, S, P, c);
    }), {
      initialValues: S,
      validationSchema: P,
      stepperSchemas: z
    };
  }, [r, c, y]), I = b[w] ?? null, $ = y && I ? f[I] ?? {} : O, s = ie({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: q.object().shape($),
    onSubmit: (S) => {
      y ? (w < b.length - 1 && E((P) => P + 1), w === b.length - 1 && l(S)) : l(S);
    }
  }), _ = async (S) => {
    if (S.preventDefault(), !y) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((z, G) => ({ ...z, [G]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(S);
  }, V = () => {
    E((S) => S > 0 ? S - 1 : S);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: b.map((S, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${w === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: S })
      },
      S
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((S, P) => de(S.hidden) || S.type === "geolocation" || S.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[ue(Number(S.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  me,
                  {
                    refid: v,
                    sqlOpsUrls: u,
                    field: S,
                    formik: s,
                    methods: m,
                    components: g,
                    setFieldOptions: j,
                    ...T[S.name] ? { optionsOverride: T[S.name] } : {}
                  },
                  S.name
                )
              },
              S?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${w > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              w > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: o, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: y ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                w + 1,
                " of ",
                b.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: b.map((S, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === w ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      b[w]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: c,
  onSubmit: l = (y) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  sqlOpsUrls: g = {},
  refid: u
}) {
  const y = Ie(r, g.operation), [v, b] = L.useState({}), w = (j, N) => {
    b((O) => ({
      ...O,
      [j]: N
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const j = {}, N = {};
    return y.forEach((O) => {
      ne([O], j, N, c);
    }), {
      initialValues: j,
      validationSchema: N
    };
  }, [y, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      l(j);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: y.map((j, N) => de(j.hidden) || j.type === "geolocation" || j.vmode === "edit" && g.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          me,
          {
            refid: u,
            sqlOpsUrls: g,
            field: j,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...v[j.name] ? { optionsOverride: v[j.name] } : {}
          }
        )
      },
      j?.name ?? `field-${N}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ze({ title: e, children: r }) {
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
function qe({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: l = (v) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  refid: y
}) {
  const [v, b] = L.useState({}), w = (j, N) => {
    b((O) => ({
      ...O,
      [j]: N
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const j = {}, N = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], j, N, c);
    }), {
      initialValues: j,
      validationSchema: N
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      l(j);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([j, N], O) => /* @__PURE__ */ t.jsx(ze, { title: j, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: N.map((f, I) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          me,
          {
            refid: y,
            sqlOpsUrls: u,
            components: g,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...v[f.name] ? { optionsOverride: v[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${I}`
    )) }) }, j)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const se = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: se(e) }
)).data.refhash, pe = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: se(e) }
)).data.refid, De = {
  async fetch(e, r, c) {
    const l = await he(e);
    let o = !1, m;
    c && (o = !0, m = c), console.log("skipquery,dbopsid", o, c), o || (m = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    })), console.log("dbopsId", m);
    const g = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: m, datahash: l },
      { headers: se(e) }
    );
    return g.data?.data ?? g.data;
  },
  async create(e, r) {
    const c = await he(e), l = await pe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: l, fields: r.values, datahash: c },
      { headers: se(e) }
    )).data;
  },
  async update(e, r) {
    const c = await he(e), l = await pe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: l, fields: r.values, datahash: c },
      { headers: se(e) }
    )).data;
  }
};
function Ge({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: c = null,
  onCancel: l = () => {
  },
  components: o = {},
  callback: m = () => {
  },
  initialvalues: g = {}
}) {
  let u = Oe(e);
  const y = e.endPoints, v = e?.source?.refid, b = $e(e?.fields ?? {}, y?.operation), [w, E] = L.useState(g), T = L.useMemo(() => Ce(e.fields), [e.fields]);
  L.useEffect(() => {
    let N = !0;
    return (async () => {
      const f = e?.source ?? {};
      if (!f?.type) {
        N && E({});
        return;
      }
      if (f.type === "method") {
        const I = f.method, $ = I ? r[I] : void 0;
        if ($)
          try {
            const s = await Promise.resolve($());
            N && E(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), N && E({});
          }
        else
          N && E({});
      }
      if (f.type === "api" && y?.operation !== "create")
        try {
          const I = await B({
            method: f.method || "GET",
            url: f.url ?? "",
            data: f.body ?? {},
            params: f.params ?? {},
            headers: f.headers ?? {}
          });
          N && E(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), N && E({});
        }
      if (f.type === "sql" && f.refid && f.refid !== "0" && y?.operation !== "create" || y?.operation !== "create" && f.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await De.fetch(y, {
            source: {
              ...f,
              table: f.table,
              columns: f.columns,
              where: U(f.where, {
                refid: v
              })
            },
            fields: ve(e.fields, y.operation)
          }, f?.dbopsid);
          N && E(I);
        } catch (I) {
          console.error("API fetch failed:", I);
        }
      }
    })(), () => {
      N = !1;
    };
  }, [
    c,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const C = async (N) => {
    const O = e?.source ?? {};
    let f = null;
    if (T.length > 0)
      try {
        f = await Te();
      } catch ($) {
        console.log("catch fetchGeolocation", $), f = null;
      }
    const I = {
      ...N,
      ...Object.fromEntries(
        T.map(($) => [$, f])
      )
    };
    if (O.type === "method") {
      const $ = O.method, s = $ ? r[$] : void 0;
      if (s)
        try {
          const _ = await Promise.resolve(s(I));
          m?.(_);
        } catch (_) {
          m?.(_), console.error("Method execution failed:", _);
        }
    }
    if (O.type === "api") {
      if (!y) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await B({
          method: O.method || "POST",
          url: y.baseURL + O.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${y?.accessToken}`
          }
        });
        m?.($);
      } catch ($) {
        m?.($), console.error("API fetch failed:", $);
      }
    }
    if (O.type === "sql") {
      const $ = e.endPoints;
      if (!$) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let s = !1, _;
        O?.dbopsid && (s = !0, _ = O?.dbopsid);
        const V = await B({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!s) {
          let P = {
            ...O
          };
          O.where && (P = {
            ...O,
            where: U(O.where, {
              refid: v
            })
          }), _ = (await B({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: P,
              fields: ve(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: V.data.refhash
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const S = await B({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: _,
            fields: I,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        m?.(S);
      } catch (s) {
        m?.(s), console.error("API fetch failed:", s);
      }
    }
  }, j = {
    accordion: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: w,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: y,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: w,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: y,
        refid: v
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: w,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: o,
        widget: e?.widget,
        sqlOpsUrls: y,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: w,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: y,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: j[u] ?? j.simple });
}
export {
  Ge as LogiksForm
};
