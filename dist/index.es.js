import z, { useState as X, useRef as be, useEffect as ee, useMemo as xe } from "react";
import B from "axios";
import * as D from "yup";
import { useFormik as le } from "formik";
var ne = { exports: {} }, te = {};
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
  if (ge) return te;
  ge = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, n, m) {
    var x = null;
    if (m !== void 0 && (x = "" + m), n.key !== void 0 && (x = "" + n.key), "key" in n) {
      m = {};
      for (var u in n)
        u !== "key" && (m[u] = n[u]);
    } else m = n;
    return n = m.ref, {
      $$typeof: e,
      type: l,
      key: x,
      ref: n !== void 0 ? n : null,
      props: m
    };
  }
  return te.Fragment = r, te.jsx = i, te.jsxs = i, te;
}
var re = {};
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
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case f:
          return "Fragment";
        case E:
          return "Profiler";
        case w:
          return "StrictMode";
        case s:
          return "Suspense";
        case k:
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
          case v:
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
    function i(a) {
      try {
        r(a);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var h = o.error, d = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), r(a);
      }
    }
    function l(a) {
      if (a === f) return "<>";
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
    function m() {
      return Error("react-stack-top-frame");
    }
    function x(a) {
      if (F.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, o) {
      function h() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: h,
        configurable: !0
      });
    }
    function g() {
      var a = e(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function y(a, o, h, d, $, _, G, J) {
      return h = _.ref, a = {
        $$typeof: T,
        type: a,
        key: o,
        props: _,
        _owner: $
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: g
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
        value: G
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function b(a, o, h, d, $, _, G, J) {
      var L = o.children;
      if (L !== void 0)
        if (d)
          if (Y(L)) {
            for (d = 0; d < L.length; d++)
              j(L[d]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(L);
      if (F.call(o, "key")) {
        L = e(a);
        var U = Object.keys(o).filter(function(Ne) {
          return Ne !== "key";
        });
        d = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", R[L + d] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          L,
          U,
          L
        ), R[L + d] = !0);
      }
      if (L = null, h !== void 0 && (i(h), L = "" + h), x(o) && (i(o.key), L = "" + o.key), "key" in o) {
        h = {};
        for (var me in o)
          me !== "key" && (h[me] = o[me]);
      } else h = o;
      return L && u(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), y(
        a,
        L,
        _,
        $,
        n(),
        h,
        G,
        J
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var A = z, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), K = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, Y = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, c = A["react-stack-bottom-frame"].bind(
      A,
      m
    )(), p = Z(l(m)), R = {};
    re.Fragment = f, re.jsx = function(a, o, h, d, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return b(
        a,
        o,
        h,
        !1,
        d,
        $,
        _ ? Error("react-stack-top-frame") : c,
        _ ? Z(l(a)) : p
      );
    }, re.jsxs = function(a, o, h, d, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return b(
        a,
        o,
        h,
        !0,
        d,
        $,
        _ ? Error("react-stack-top-frame") : c,
        _ ? Z(l(a)) : p
      );
    };
  }()), re;
}
var fe;
function Ee() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? ne.exports = Se() : ne.exports = Ae()), ne.exports;
}
var t = Ee();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function Re(e, r = "create", i = "Info") {
  const l = {};
  let n = !1;
  if (Object.values(e).forEach((x) => {
    x.group && (n = !0);
  }), !n) return {};
  const m = [];
  return Object.entries(e).forEach(([x, u]) => {
    if (u.vmode === "edit" && r === "create") return;
    const g = { ...u, name: x };
    if (u.group) {
      const y = u.group;
      l[y] || (l[y] = []), l[y].push(g);
    } else
      m.push(g);
  }), m.length > 0 ? {
    [i]: m,
    ...l
  } : l;
}
function ve(e, r = "create") {
  const i = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (i[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), i;
}
const se = (e, r, i, l) => {
  e.forEach((n) => {
    const m = n?.name;
    if (!m) return;
    let x = l?.[m];
    x == null && (x = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[m] = Array.isArray(x) ? x : typeof x == "string" ? x.split(",").map((g) => g.trim()).filter(Boolean) : [] : n.type === "json" ? r[m] = typeof x == "object" && x !== null ? JSON.stringify(x, null, 2) : x ?? "" : n.type === "date" ? r[m] = typeof x == "string" ? x.slice(0, 10) : "" : n.type === "time" ? typeof x == "string" ? x.includes("T") ? r[m] = x.slice(11, 16) : r[m] = x.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(x ?? "false") : r[m] = x ?? "";
    let u;
    n.type === "file" ? u = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? u = D.array().of(D.string()) : n.type === "email" ? u = D.string().email("Invalid email") : n.type === "number" ? u = D.number().typeError("Must be a number") : n.type === "json" ? u = D.string().test("json", "Invalid JSON", (g) => {
      if (!g) return !0;
      try {
        return JSON.parse(g), !0;
      } catch {
        return !1;
      }
    }) : u = D.string(), n.required && (u = u.required(
      n.error_message || `${n.label || m} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (u = u.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([g, y]) => {
      switch (g) {
        case "email":
          y && (u = u.email("Invalid email format"));
          break;
        case "mobile":
          u = u.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          u = u.matches(
            new RegExp(y),
            `Must match pattern: ${y}`
          );
          break;
        case "date":
          u = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((b, j) => {
            if (typeof j == "string") {
              const A = j.replace(/-/g, "/"), [T, C, f] = A.split("/");
              if (T && C && f)
                return /* @__PURE__ */ new Date(`${f}-${C}-${T}`);
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
          u = D.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          u = D.number().typeError("Must be a decimal").transform((b, j) => {
            if (j == null || j === "") return;
            const A = Number(j);
            if (isNaN(A)) return b;
            if (typeof b == "number" && !isNaN(b)) {
              const T = Number(b);
              return Number.isInteger(T) ? Number(A.toFixed(T)) : A;
            }
            return A;
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
          const b = Number(y);
          isNaN(b) || (u = u.min(b, `Minimum length is ${b}`));
          break;
        }
        case "length-max": {
          const b = Number(y);
          isNaN(b) || (u = u.max(b, `Maximum length is ${b}`));
          break;
        }
      }
    }), i[m] = u;
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
const ue = (e) => e === !0 || e === "true", W = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (i, l) => r[l] !== void 0 ? String(r[l]) : i
) : Array.isArray(e) ? e.map((i) => W(i, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([i, l]) => [
    W(i, r),
    W(l, r)
  ])
) : e, H = (e, r, i, l) => {
  if (!Array.isArray(i) || i.length === 0) return {};
  const n = l ?? (i[0] && typeof i[0] == "object" && "category" in i[0] ? "category" : void 0);
  if (!n) {
    const x = {};
    return i.forEach((u) => {
      const g = u[e], y = u[r];
      g != null && y != null && (x[String(g)] = String(y));
    }), x;
  }
  const m = {};
  return i.forEach((x) => {
    const u = x[n] ?? "Others", g = x[e], y = x[r];
    g == null || y == null || (m[u] || (m[u] = {}), m[u][String(g)] = String(y));
  }), m;
}, je = (e, r) => {
  if (!e || r == null) return;
  const i = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[i];
  for (const n of Object.values(e))
    if (i in n)
      return n[i];
}, Te = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (l) => [
        String(l.value),
        String(l.title ?? l.label ?? l.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([l, n]) => [String(l), n]) : Object.values(e).flatMap(
    (l) => Object.entries(l).map(
      ([n, m]) => [String(n), m]
    )
  ) : [];
}, we = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null && !Array.isArray(r);
};
async function $e() {
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
    ), { latitude: r, longitude: i } = e.coords;
    return `${r},${i}`;
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
  return Object.entries(e).filter(([, i]) => !(i.vmode === "edit" && r === "create")).map(([i, l]) => ({
    ...l,
    name: i
  }));
}
async function oe(e, r, i, l = {}) {
  try {
    let n = i;
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
        filter: l,
        page: 0,
        limit: 1e4
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
function Fe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const i = r.match(/^(.+?)\s+as\s+.+$/i);
    return i ? i[1]?.trim() : r;
  }).filter((r) => !!r);
}
const Q = (e) => {
  const r = {};
  for (const [i, l] of Object.entries(e)) {
    const n = i.includes(".") ? i.split(".").pop() : i;
    if (n in r) {
      console.warn(`Duplicate key after normalization: ${n}`);
      continue;
    }
    r[n] = l;
  }
  return r;
};
function de({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: l,
  refid: n,
  optionsOverride: m,
  setFieldOptions: x
}) {
  const [u, g] = X(!1), [y, b] = X(
    m ?? e.options ?? {}
  ), [j, A] = X(""), [T, C] = X(0), f = be(null), w = be(null), [E, v] = X(!1), I = z.useRef(j);
  z.useEffect(() => {
    I.current = j;
  }, [j]);
  const O = (S) => {
    S.currentTarget.open || A("");
  };
  ee(() => {
    m && Object.keys(m).length !== 0 && b(m);
  }, [m]), ee(() => {
    const S = (M) => {
      w.current && !w.current.contains(M.target) && (w.current.open = !1, A(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, []);
  const s = e.name;
  z.useEffect(() => {
    let S = !0;
    return (async () => {
      let c = e.valueKey ?? "value", p = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const d = Object.values(e.options);
          if (d.length && typeof d[0] == "string") {
            b(e.options);
            return;
          }
        }
        const o = (Array.isArray(e.options) ? e.options : [e.options]).map(Q), h = H(
          c,
          p,
          o,
          e.groupKey
          // auto-uses `category` if present
        );
        b(h);
        return;
      }
      const R = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, o = a ? i[a] : void 0;
        if (o)
          try {
            const h = await Promise.resolve(o()), d = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, $ = Array.isArray(d) ? d.map(Q) : [], _ = H(c, p, $, e.groupKey);
            S && b(_);
          } catch (h) {
            console.error("Method execution failed:", h), S && b({});
          }
        else
          S && b({});
      }
      if (R.type === "api" && R.url)
        try {
          const a = await B({
            method: R.method || "GET",
            url: R.url,
            data: R.body ?? {},
            params: R.params ?? {},
            headers: R.headers ?? {}
          }), o = Array.isArray(a?.data?.data) ? a.data.data : Array.isArray(a?.data) ? a.data : a, h = Array.isArray(o) ? o.map(Q) : [], d = H(c, p, h, e.groupKey);
          S && b(d);
        } catch (a) {
          console.error("API execution failed:", a), S && b({});
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
              where: e.where ? n ? W(e.where, { refid: n }) : e.where : void 0
            };
          }
          const o = await oe(l, a, e?.queryid), h = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, d = Array.isArray(h) ? h.map(Q) : [], $ = H(c, p, d, e.groupKey);
          S && b($);
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
  const k = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, q = xe(
    () => Te(y),
    [y]
  );
  console.log("flatOptions", q);
  const K = q.length, F = xe(() => e.search || !j ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(j.toLowerCase())
  ), [e.search, j, q]), Y = (S, M) => {
    if (w.current?.open === !0 || E === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), C(
          (c) => c + 1 < F.length ? c + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), C(
          (c) => c - 1 >= 0 ? c - 1 : F.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [c] = F[T] || [];
        c && r.setFieldValue(e.name, M ? c : [...r.values[e.name], c]), w.current && (w.current.open = !1);
      } else S.key === "Escape" && (w.current.open = !1, A(""), v(!1));
  };
  ee(() => {
    f.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), ee(() => {
    T >= F.length && C(0);
  }, [F, T]), ee(() => {
    const S = e.autocomplete, M = e.ajaxchain;
    if (!S && !M) return;
    const c = r.values[e.name];
    if (!c) return;
    const p = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Pe(S)) {
          const a = S.src;
          if (!a || !l) return;
          const o = W(a.where ?? {}, {
            refid: c
          }), h = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: o
          }, { data: d } = await oe(l, h, e?.queryid), $ = Array.isArray(d?.data) ? d.data[0] : d?.data;
          $ && S.target.split(",").map((_) => _.trim()).forEach((_) => {
            $[_] !== void 0 && r.setFieldValue(_, $[_]);
          });
        }
        for (const a of p) {
          const o = a.src;
          if (!a || typeof a != "object" || !o || typeof o != "object" || !l) continue;
          let h;
          if (!o.queryid) {
            if (!o.table || !o.columns)
              throw new Error("SQL query requires field.table");
            const U = W(o?.where ?? {}, {
              refid: c
            });
            h = {
              ...o,
              table: o.table,
              cols: o.columns,
              where: U
            };
          }
          const { data: d } = await oe(l, h, o?.queryid);
          let $ = e.valueKey ?? "value", _ = e.labelKey ?? "title";
          const G = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, J = Array.isArray(G) ? G.map(Q) : [], L = H(
            $,
            _,
            J,
            e.groupKey
          );
          x?.(a.target, L);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), z.useEffect(() => {
    if (!e.search || !j.trim() || !e.table || !l) return;
    const S = Fe(e.columns ?? ""), M = new AbortController(), c = setTimeout(async () => {
      try {
        let p;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const G = n ? W(e.where ?? {}, {
            refid: n
          }) : e.where;
          p = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: G
          };
        }
        let R = {};
        Array.isArray(S) && S.forEach((G) => {
          R[G] = [j, "LIKE"];
        });
        let a = e.valueKey ?? "value", o = e.labelKey ?? "title";
        const { data: h } = await oe(l, p, e?.queryid, R), d = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, $ = Array.isArray(d) ? d.map(Q) : [], _ = H(
          a,
          o,
          $,
          e.groupKey
        );
        b(_);
      } catch (p) {
        if (B.isCancel(p)) return;
        console.error("Search fetch failed", p);
      }
    }, 500);
    return () => {
      clearTimeout(c), M.abort();
    };
  }, [j, n]);
  const Z = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const M = l?.baseURL + l?.uploadURL;
    if (!M) {
      console.error("No Upload URL ");
      return;
    }
    const c = e.multiple === !0;
    try {
      const p = await Promise.all(
        Array.from(S).map(async (R) => {
          const a = new FormData();
          return a.append("file", R), (await B({
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
        c ? p.map((R) => R.path) : p[0]?.path
      );
    } catch (p) {
      console.error("File upload failed", p), r.setFieldError(s, "File upload failed");
    }
  };
  switch (console.log("options", y), e.type) {
    case "autocomplete": {
      const c = r.values[s] ?? "", p = j !== "" ? j : je(y, c) ?? String(c ?? ""), R = (o) => {
        const h = o.target.value;
        A(h), C(0), h.trim() ? v(!0) : (v(!1), r.setFieldValue(s, ""));
      }, a = (o) => {
        r.setFieldValue(s, o), A(""), v(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${k} ${V}`,
            value: p,
            placeholder: e.placeholder || "Type to search...",
            onChange: R,
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (o) => {
              if (o.key === "Enter") {
                if (o.preventDefault(), F[T]) {
                  const [h] = F[T];
                  r.setFieldValue(s, h);
                } else j.trim() && r.setFieldValue(s, j.trim());
                v(!1);
                return;
              }
              Y(o, !0);
            },
            disabled: e.disabled
          }
        ),
        E && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: f,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: F.length > 0 ? F.map(([o, h], d) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": d,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === d ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(o),
                children: h
              },
              o
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${p}" ` })
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
        const c = r.values[s];
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
              onKeyDown: (p) => Y(p, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: c?.length > 0 ? c.join(", ") : `Select ${e.label}` }),
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
                /* @__PURE__ */ t.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: j,
                      onChange: (p) => {
                        A(p.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  F.length > 0 ? F.map(([p, R], a) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${p}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : T === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${p}`,
                            type: "checkbox",
                            checked: c?.includes(p),
                            onChange: (o) => {
                              const h = o.target.checked ? [...c, p] : c?.filter((d) => d !== p);
                              r.setFieldValue(s, h);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        R
                      ]
                    },
                    p
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return console.log("formik.values[key]", r.values[s]), console.log("filteredOptionsddddddddddddddd", F), /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
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
            onKeyDown: (c) => Y(c, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? je(y, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: j,
                    onChange: (c) => {
                      A(c.target.value), C(0);
                    },
                    onKeyDown: (c) => Y(c, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (c) => {
                      c.preventDefault(), c.stopPropagation(), r.setFieldValue(s, ""), w.current?.removeAttribute("open"), A("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                F.length > 0 ? F.map(([c, p], R) => (console.log("label", p), /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, c), w.current?.removeAttribute("open"), A(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === c ? "bg-indigo-50 text-indigo-600 font-medium" : T === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: p
                  },
                  c
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${k} ${V} min-h-[120px] resize-none`,
              onFocus: () => g(!0),
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${k} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => g(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !we(y) && Object.entries(y).map(([c, p]) => /* @__PURE__ */ t.jsx("option", { value: c, className: "py-2", children: p }, c)),
                we(y) && Object.entries(y).map(([c, p]) => /* @__PURE__ */ t.jsx("optgroup", { label: c, children: Object.entries(p).map(([R, a]) => /* @__PURE__ */ t.jsx("option", { value: R, children: a }, R)) }, c))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(y || {}).map(([c, p]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${c}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${c}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === c,
                  value: c,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              p
            ]
          },
          c
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const c = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(y || {}).map(([p, R]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: c.includes(p),
                  onChange: (a) => {
                    const o = a.target.checked ? [...c, p] : c.filter((h) => h !== p);
                    r.setFieldValue(s, o);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              R
            ]
          },
          p
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const c = r.values[s], p = j.trim(), R = Array.isArray(y) ? y : Object.entries(y || {}).map(([d, $]) => ({ value: d, label: $ })), a = (d) => {
        d && !c.includes(d) && (r.setFieldValue(s, [...c, d]), A(""));
      }, o = (d) => {
        r.setFieldValue(
          s,
          c.filter(($) => $ !== d)
        );
      }, h = (d) => R.find(($) => $.value === d)?.label ?? d;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${k} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              c.map((d) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: h(d) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: ($) => {
                          $.stopPropagation(), e.disabled || o(d);
                        },
                        onMouseDown: ($) => $.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                d
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: j,
                  onChange: (d) => A(d.target.value),
                  onKeyDown: (d) => {
                    (d.key === "Enter" || d.key === ",") && (d.preventDefault(), a(p));
                  },
                  placeholder: c.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: s,
              multiple: S,
              onChange: (c) => {
                const p = c.currentTarget.files;
                p && Z(p);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((c) => {
          const p = c?.split("/").pop();
          return p ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: p }) }, c) : null;
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
              onChange: (c) => r.setFieldValue(s, c.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${k} ${V} min-h-[200px] font-mono text-sm resize-y`
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""}`
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
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
function _e({ title: e, children: r, isFirst: i }) {
  const [l, n] = X(i);
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
  data: i,
  onSubmit: l = (y) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: x = {},
  sqlOpsUrls: u = {},
  refid: g
}) {
  const [y, b] = z.useState({}), j = (f, w) => {
    b((E) => ({
      ...E,
      [f]: w
    }));
  }, { initialValues: A, validationSchema: T } = z.useMemo(() => {
    const f = {}, w = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], f, w, i);
    }), {
      initialValues: f,
      validationSchema: w
    };
  }, [r, i]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (f) => {
      l(f);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([f, w], E) => /* @__PURE__ */ t.jsx(_e, { title: f, isFirst: E === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((v, I) => ue(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          de,
          {
            refid: g,
            sqlOpsUrls: u,
            components: x,
            field: v,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...y[v.name] ? { optionsOverride: y[v.name] } : {}
          },
          v.name
        )
      },
      v?.name ?? `field-${I}`
    )) }) }, f)) }),
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
  data: i,
  onSubmit: l = (b) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: x = {},
  sqlOpsUrls: u = {},
  widget: g,
  refid: y
}) {
  const b = Object.keys(r), [j, A] = z.useState(0), [T, C] = z.useState({}), f = (N, P) => {
    C((q) => ({
      ...q,
      [N]: P
    }));
  }, { initialValues: w, validationSchema: E, stepperSchemas: v } = z.useMemo(() => {
    const N = {}, P = {}, q = {};
    return g ? Object.entries(r).forEach(([K, F]) => {
      const Y = {};
      se(F, N, Y, i), q[K] = Y;
    }) : Object.entries(r).forEach(([K, F]) => {
      se(F, N, P, i);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, i, g]), I = b[j] ?? null, O = g && I ? v[I] ?? {} : E, s = le({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(O),
    onSubmit: (N) => {
      g ? (j < b.length - 1 && A((P) => P + 1), j === b.length - 1 && l(N)) : l(N);
    }
  }), k = async (N) => {
    if (N.preventDefault(), !g) {
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
    A((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: b.map((N, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => A(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${j === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: N })
      },
      N
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: k, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((N, P) => ue(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ie[ce(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  de,
                  {
                    refid: y,
                    sqlOpsUrls: u,
                    field: N,
                    formik: s,
                    methods: m,
                    components: x,
                    setFieldOptions: f,
                    ...T[N.name] ? { optionsOverride: T[N.name] } : {}
                  },
                  N.name
                )
              },
              N?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${j > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              j > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: g ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                j + 1,
                " of ",
                b.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: b.map((N, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === j ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      b[j]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: i,
  onSubmit: l = (g) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  sqlOpsUrls: x = {},
  refid: u
}) {
  const g = Ie(r, x.operation), [y, b] = z.useState({}), j = (f, w) => {
    b((E) => ({
      ...E,
      [f]: w
    }));
  }, { initialValues: A, validationSchema: T } = z.useMemo(() => {
    const f = {}, w = {};
    return g.forEach((E) => {
      se([E], f, w, i);
    }), {
      initialValues: f,
      validationSchema: w
    };
  }, [g, i]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (f) => {
      l(f);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((f, w) => ue(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && x.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          de,
          {
            refid: u,
            sqlOpsUrls: x,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...y[f.name] ? { optionsOverride: y[f.name] } : {}
          }
        )
      },
      f?.name ?? `field-${w}`
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
  data: i,
  onSubmit: l = (y) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: x = {},
  sqlOpsUrls: u = {},
  refid: g
}) {
  const [y, b] = z.useState({}), j = (f, w) => {
    b((E) => ({
      ...E,
      [f]: w
    }));
  }, { initialValues: A, validationSchema: T } = z.useMemo(() => {
    const f = {}, w = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], f, w, i);
    }), {
      initialValues: f,
      validationSchema: w
    };
  }, [r, i]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (f) => {
      l(f);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([f, w], E) => /* @__PURE__ */ t.jsx(ze, { title: f, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((v, I) => ue(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          de,
          {
            refid: g,
            sqlOpsUrls: u,
            components: x,
            field: v,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...y[v.name] ? { optionsOverride: y[v.name] } : {}
          },
          v.name
        )
      },
      v?.name ?? `field-${I}`
    )) }) }, f)) }),
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
)).data.refid, De = {
  async fetch(e, r, i) {
    const l = await he(e);
    let n = !1, m;
    i && (n = !0, m = i), console.log("skipquery,dbopsid", n, i), n || (m = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    })), console.log("dbopsId", m);
    const x = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: m, datahash: l },
      { headers: ae(e) }
    );
    return x.data?.data ?? x.data;
  },
  async create(e, r) {
    const i = await he(e), l = await pe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: l, fields: r.values, datahash: i },
      { headers: ae(e) }
    )).data;
  },
  async update(e, r) {
    const i = await he(e), l = await pe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: l, fields: r.values, datahash: i },
      { headers: ae(e) }
    )).data;
  }
};
function Ge({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: i = null,
  onCancel: l = () => {
  },
  components: n = {},
  callback: m = () => {
  },
  initialvalues: x = {}
}) {
  let u = Oe(e);
  const g = e.endPoints, y = e?.source?.refid, b = Re(e?.fields ?? {}, g?.operation), [j, A] = z.useState(x), T = z.useMemo(() => Ce(e.fields), [e.fields]);
  z.useEffect(() => {
    let w = !0;
    return (async () => {
      const v = e?.source ?? {};
      if (!v?.type) {
        w && A({});
        return;
      }
      if (v.type === "method") {
        const I = v.method, O = I ? r[I] : void 0;
        if (O)
          try {
            const s = await Promise.resolve(O());
            w && A(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), w && A({});
          }
        else
          w && A({});
      }
      if (v.type === "api" && g?.operation !== "create")
        try {
          const I = await B({
            method: v.method || "GET",
            url: v.url ?? "",
            data: v.body ?? {},
            params: v.params ?? {},
            headers: v.headers ?? {}
          });
          w && A(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), w && A({});
        }
      if (v.type === "sql" && v.refid && v.refid != "0" && g?.operation !== "create") {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await De.fetch(g, {
            source: {
              ...v,
              table: v.table,
              columns: v.columns,
              where: W(v.where, {
                refid: y
              })
            },
            fields: ve(e.fields, g.operation)
          }, v?.dbopsid);
          w && A(I);
        } catch (I) {
          console.error("API fetch failed:", I);
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    i,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const C = async (w) => {
    const E = e?.source ?? {};
    let v = null;
    if (T.length > 0)
      try {
        v = await $e();
      } catch (O) {
        console.log("catch fetchGeolocation", O), v = null;
      }
    const I = {
      ...w,
      ...Object.fromEntries(
        T.map((O) => [O, v])
      )
    };
    if (E.type === "method") {
      const O = E.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const k = await Promise.resolve(s(I));
          m?.(k);
        } catch (k) {
          m?.(k), console.error("Method execution failed:", k);
        }
    }
    if (E.type === "api") {
      if (!g) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await B({
          method: E.method || "POST",
          url: g.baseURL + E.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${g?.accessToken}`
          }
        });
        m?.(O);
      } catch (O) {
        m?.(O), console.error("API fetch failed:", O);
      }
    }
    if (E.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let s = !1, k;
        E?.dbopsid && (s = !0, k = E?.dbopsid);
        const V = await B({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        if (!s) {
          let P = {
            ...E
          };
          E.where && (P = {
            ...E,
            where: W(E.where, {
              refid: y
            })
          }), k = (await B({
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
            refid: k,
            fields: I,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        m?.(N);
      } catch (s) {
        m?.(s), console.error("API fetch failed:", s);
      }
    }
  }, f = {
    accordion: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: g,
        refid: y
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: g,
        refid: y
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: g,
        refid: y
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: g,
        refid: y
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: f[u] ?? f.simple });
}
export {
  Ge as LogiksForm
};
