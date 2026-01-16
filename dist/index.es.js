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
var ge;
function Se() {
  if (ge) return J;
  ge = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function d(l, n, m) {
    var p = null;
    if (m !== void 0 && (p = "" + m), n.key !== void 0 && (p = "" + n.key), "key" in n) {
      m = {};
      for (var i in n)
        i !== "key" && (m[i] = n[i]);
    } else m = n;
    return n = m.ref, {
      $$typeof: e,
      type: l,
      key: p,
      ref: n !== void 0 ? n : null,
      props: m
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
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case O:
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
          case y:
            return (a._context.displayName || "Context") + ".Consumer";
          case R:
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
        var h = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
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
    function m() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (k.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function i(a, o) {
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
    function f() {
      var a = e(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, o, h, u, A, _, H, W) {
      return h = _.ref, a = {
        $$typeof: T,
        type: a,
        key: o,
        props: _,
        _owner: A
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: f
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
    function b(a, o, h, u, A, _, H, W) {
      var z = o.children;
      if (z !== void 0)
        if (u)
          if (G(z)) {
            for (u = 0; u < z.length; u++)
              j(z[u]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(z);
      if (k.call(o, "key")) {
        z = e(a);
        var U = Object.keys(o).filter(function(Ne) {
          return Ne !== "key";
        });
        u = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", $[z + u] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          z,
          U,
          z
        ), $[z + u] = !0);
      }
      if (z = null, h !== void 0 && (d(h), z = "" + h), p(o) && (d(o.key), z = "" + o.key), "key" in o) {
        h = {};
        for (var me in o)
          me !== "key" && (h[me] = o[me]);
      } else h = o;
      return z && i(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        z,
        _,
        A,
        n(),
        h,
        H,
        W
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var E = L, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), I = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), K = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, G = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, c = E["react-stack-bottom-frame"].bind(
      E,
      m
    )(), x = X(l(m)), $ = {};
    ee.Fragment = g, ee.jsx = function(a, o, h, u, A) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return b(
        a,
        o,
        h,
        !1,
        u,
        A,
        _ ? Error("react-stack-top-frame") : c,
        _ ? X(l(a)) : x
      );
    }, ee.jsxs = function(a, o, h, u, A) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return b(
        a,
        o,
        h,
        !0,
        u,
        A,
        _ ? Error("react-stack-top-frame") : c,
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
function Re(e, r = "create", d = "Info") {
  const l = {};
  let n = !1;
  if (Object.values(e).forEach((p) => {
    p.group && (n = !0);
  }), !n) return {};
  const m = [];
  return Object.entries(e).forEach(([p, i]) => {
    if (i.vmode === "edit" && r === "create") return;
    const f = { ...i, name: p };
    if (i.group) {
      const v = i.group;
      l[v] || (l[v] = []), l[v].push(f);
    } else
      m.push(f);
  }), m.length > 0 ? {
    [d]: m,
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
    const m = n?.name;
    if (!m) return;
    let p = l?.[m];
    p == null && (p = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[m] = Array.isArray(p) ? p : typeof p == "string" ? p.split(",").map((f) => f.trim()).filter(Boolean) : [] : n.type === "json" ? r[m] = typeof p == "object" && p !== null ? JSON.stringify(p, null, 2) : p ?? "" : n.type === "date" ? r[m] = typeof p == "string" ? p.slice(0, 10) : "" : n.type === "time" ? typeof p == "string" ? p.includes("T") ? r[m] = p.slice(11, 16) : r[m] = p.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(p ?? "false") : r[m] = p ?? "";
    let i;
    n.type === "file" ? i = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? i = D.array().of(D.string()) : n.type === "email" ? i = D.string().email("Invalid email") : n.type === "number" ? i = D.number().typeError("Must be a number") : n.type === "json" ? i = D.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : i = D.string(), n.required && (i = i.required(
      n.error_message || `${n.label || m} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (i = i.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([f, v]) => {
      switch (f) {
        case "email":
          v && (i = i.email("Invalid email format"));
          break;
        case "mobile":
          i = i.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          i = i.matches(
            new RegExp(v),
            `Must match pattern: ${v}`
          );
          break;
        case "date":
          i = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((b, j) => {
            if (typeof j == "string") {
              const E = j.replace(/-/g, "/"), [T, C, g] = E.split("/");
              if (T && C && g)
                return /* @__PURE__ */ new Date(`${g}-${C}-${T}`);
            }
            return b;
          });
          break;
        case "time":
          i = i.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          i = i.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          i = D.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          i = D.number().typeError("Must be a decimal").transform((b, j) => {
            if (j == null || j === "") return;
            const E = Number(j);
            if (isNaN(E)) return b;
            if (typeof b == "number" && !isNaN(b)) {
              const T = Number(b);
              return Number.isInteger(T) ? Number(E.toFixed(T)) : E;
            }
            return E;
          });
          break;
        case "alphanumeric":
          i = i.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          i = i.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          i = i.transform(
            (b) => b && b.toUpperCase()
          );
          break;
        case "lower":
          i = i.transform(
            (b) => b && b.toLowerCase()
          );
          break;
        case "length-min": {
          const b = Number(v);
          isNaN(b) || (i = i.min(b, `Minimum length is ${b}`));
          break;
        }
        case "length-max": {
          const b = Number(v);
          isNaN(b) || (i = i.max(b, `Maximum length is ${b}`));
          break;
        }
      }
    }), d[m] = i;
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
  if (!Array.isArray(d) || d.length === 0)
    return {};
  const n = l ?? (d[0] && typeof d[0] == "object" && "category" in d[0] ? "category" : void 0);
  if (!n) {
    const p = {};
    return d.forEach((i) => {
      i[e] != null && i[r] != null && (p[i[e]] = i[r]);
    }), p;
  }
  const m = {};
  return d.forEach((p) => {
    const i = p[n] ?? "Others", f = p[e], v = p[r];
    f == null || v == null || (m[i] || (m[i] = {}), m[i][f] = v);
  }), m;
}, je = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const l of Object.values(e))
    if (r in l)
      return l[r];
}, Te = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (d) => Object.entries(d)
) : [], we = (e) => {
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
  optionsOverride: m,
  setFieldOptions: p
}) {
  const [i, f] = Q(!1), [v, b] = Q(
    m ?? e.options ?? {}
  ), [j, E] = Q(""), [T, C] = Q(0), g = be(null), w = be(null), [O, y] = Q(!1), I = L.useRef(j);
  L.useEffect(() => {
    I.current = j;
  }, [j]);
  const R = (S) => {
    S.currentTarget.open || E("");
  };
  Z(() => {
    m && Object.keys(m).length !== 0 && b(m);
  }, [m]), Z(() => {
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
        b(e.options);
        return;
      }
      let c = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : "value", x = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : "title";
      const $ = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, o = a ? d[a] : void 0;
        if (o)
          try {
            const h = await Promise.resolve(o()), u = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, A = Array.isArray(u) ? u.map(re) : [], _ = te(c, x, A, e.groupKey);
            S && b(_);
          } catch (h) {
            console.error("Method execution failed:", h), S && b({});
          }
        else
          S && b({});
      }
      if ($.type === "api" && $.url)
        try {
          const a = await B({
            method: $.method || "GET",
            url: $.url,
            data: $.body ?? {},
            params: $.params ?? {},
            headers: $.headers ?? {}
          }), o = Array.isArray(a?.data?.data) ? a.data.data : Array.isArray(a?.data) ? a.data : a, h = Array.isArray(o) ? o.map(re) : [], u = te(c, x, h, e.groupKey);
          S && b(u);
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
              where: e.where ? n ? Y(e.where, { refid: n }) : e.where : void 0
            };
          }
          const o = await oe(l, a, e?.queryid), h = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o;
          console.log("rawItems", h);
          const u = Array.isArray(h) ? h.map(re) : [];
          console.log("normalizedItems", u);
          const A = te(c, x, u, e.groupKey);
          console.log("mapped", A), S && b(A);
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
    () => Te(v),
    [v]
  ), K = q.length, k = xe(() => e.search || !j ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(j.toLowerCase())
  ), [e.search, j, q]), G = (S, M) => {
    if (w.current?.open === !0 || O === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), C(
          (c) => c + 1 < k.length ? c + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), C(
          (c) => c - 1 >= 0 ? c - 1 : k.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [c] = k[T] || [];
        c && r.setFieldValue(e.name, M ? c : [...r.values[e.name], c]), w.current && (w.current.open = !1);
      } else S.key === "Escape" && (w.current.open = !1, E(""), y(!1));
  };
  Z(() => {
    g.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), Z(() => {
    T >= k.length && C(0);
  }, [k, T]), Z(() => {
    const S = e.autocomplete, M = e.ajaxchain;
    if (!S && !M) return;
    const c = r.values[e.name];
    if (!c) return;
    const x = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Pe(S)) {
          const a = S.src;
          if (!a || !l) return;
          const o = Y(a.where ?? {}, {
            refid: c
          }), h = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: o
          }, { data: u } = await oe(l, h, e?.queryid), A = Array.isArray(u?.data) ? u.data[0] : u?.data;
          A && S.target.split(",").map((_) => _.trim()).forEach((_) => {
            A[_] !== void 0 && r.setFieldValue(_, A[_]);
          });
        }
        for (const a of x) {
          const o = a.src;
          if (!a || typeof a != "object" || !o || typeof o != "object" || !l) continue;
          const h = Y(o?.where ?? {}, {
            refid: c
          }), u = {
            ...o,
            table: o.table,
            cols: o.columns,
            where: h
          }, { data: A } = await oe(l, u, e?.queryid);
          let _ = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : "value", H = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : "title";
          const W = Array.isArray(A?.data?.data) ? A.data.data : Array.isArray(A?.data) ? A.data : A, z = Array.isArray(W) ? W.map(re) : [], U = te(
            _,
            H,
            z,
            e.groupKey
          );
          p?.(a.target, U);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !j.trim() || !e.table || !l) return;
    const S = _e(e.columns ?? ""), M = new AbortController(), c = setTimeout(async () => {
      try {
        const x = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, $ = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: x
        };
        let a = {};
        Array.isArray(S) && S.forEach((W) => {
          a[W] = [j, "LIKE"];
        });
        let o = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : "value", h = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : "title";
        const { data: u } = await oe(l, $, e?.queryid, a), A = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u, _ = Array.isArray(A) ? A.map(re) : [], H = te(
          o,
          h,
          { data: _ },
          e.groupKey
        );
        b(H);
      } catch (x) {
        if (B.isCancel(x)) return;
        console.error("Search fetch failed", x);
      }
    }, 500);
    return () => {
      clearTimeout(c), M.abort();
    };
  }, [j, n]);
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
    const c = e.multiple === !0;
    try {
      const x = await Promise.all(
        Array.from(S).map(async ($) => {
          const a = new FormData();
          return a.append("file", $), (await B({
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
        c ? x.map(($) => $.path) : x[0]?.path
      );
    } catch (x) {
      console.error("File upload failed", x), r.setFieldError(s, "File upload failed");
    }
  };
  switch (console.log("options", v), e.type) {
    case "autocomplete": {
      const c = r.values[s] ?? "", x = j !== "" ? j : je(v, c) ?? String(c ?? ""), $ = (o) => {
        const h = o.target.value;
        E(h), C(0), h.trim() ? y(!0) : (y(!1), r.setFieldValue(s, ""));
      }, a = (o) => {
        r.setFieldValue(s, o), E(""), y(!1);
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
            onChange: $,
            onBlur: () => {
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: (o) => {
              if (o.key === "Enter") {
                if (o.preventDefault(), k[T]) {
                  const [h] = k[T];
                  r.setFieldValue(s, h);
                } else j.trim() && r.setFieldValue(s, j.trim());
                y(!1);
                return;
              }
              G(o, !0);
            },
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: g,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 ? k.map(([o, h], u) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": u,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === u ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(o),
                children: h
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
              onToggle: R,
              ref: w,
              onKeyDown: (x) => G(x, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: j,
                      onChange: (x) => {
                        E(x.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  k.length > 0 ? k.map(([x, $], a) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${x}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(x) ? "bg-indigo-50 text-indigo-600 font-medium" : T === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${x}`,
                            type: "checkbox",
                            checked: c?.includes(x),
                            onChange: (o) => {
                              const h = o.target.checked ? [...c, x] : c?.filter((u) => u !== x);
                              r.setFieldValue(s, h);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        $
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
            onToggle: R,
            ref: w,
            onKeyDown: (c) => G(c, !0),
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
              /* @__PURE__ */ t.jsxs("div", { ref: g, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: j,
                    onChange: (c) => {
                      E(c.target.value), C(0);
                    },
                    onKeyDown: (c) => G(c, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                k.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (c) => {
                      c.preventDefault(), c.stopPropagation(), r.setFieldValue(s, ""), w.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                k.length > 0 ? k.map(([c, x], $) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": $,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, c), w.current?.removeAttribute("open"), E(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === c ? "bg-indigo-50 text-indigo-600 font-medium" : T === $ ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: x
                  },
                  c
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
              onFocus: () => f(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
              onFocus: () => f(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || "Please select an option" }),
                !we(v) && Object.entries(v).map(([c, x]) => /* @__PURE__ */ t.jsx("option", { value: c, className: "py-2", children: x }, c)),
                we(v) && Object.entries(v).map(([c, x]) => /* @__PURE__ */ t.jsx("optgroup", { label: c, children: Object.entries(x).map(([$, a]) => /* @__PURE__ */ t.jsx("option", { value: $, children: a }, $)) }, c))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([c, x]) => /* @__PURE__ */ t.jsxs(
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
              x
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
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([x, $]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: c.includes(x),
                  onChange: (a) => {
                    const o = a.target.checked ? [...c, x] : c.filter((h) => h !== x);
                    r.setFieldValue(s, o);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              $
            ]
          },
          x
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const c = r.values[s], x = j.trim(), $ = Array.isArray(v) ? v : Object.entries(v || {}).map(([u, A]) => ({ value: u, label: A })), a = (u) => {
        u && !c.includes(u) && (r.setFieldValue(s, [...c, u]), E(""));
      }, o = (u) => {
        r.setFieldValue(
          s,
          c.filter((A) => A !== u)
        );
      }, h = (u) => $.find((A) => A.value === u)?.label ?? u;
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
              c.map((u) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: h(u) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (A) => {
                          A.stopPropagation(), e.disabled || o(u);
                        },
                        onMouseDown: (A) => A.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                u
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: j,
                  onChange: (u) => E(u.target.value),
                  onKeyDown: (u) => {
                    (u.key === "Enter" || u.key === ",") && (u.preventDefault(), a(x));
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
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: s,
              multiple: S,
              onChange: (c) => {
                const x = c.currentTarget.files;
                x && X(x);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((c) => {
          const x = c?.split("/").pop();
          return x ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: x }) }, c) : null;
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
              className: `${F} ${V} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`,
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
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`,
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
              onFocus: () => f(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
  onSubmit: l = (v) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: i = {},
  refid: f
}) {
  const [v, b] = L.useState({}), j = (g, w) => {
    b((O) => ({
      ...O,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((O) => {
      se([O], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], O) => /* @__PURE__ */ t.jsx(Fe, { title: g, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: f,
            sqlOpsUrls: i,
            components: p,
            field: y,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...v[y.name] ? { optionsOverride: v[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${I}`
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
  onSubmit: l = (b) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: i = {},
  widget: f,
  refid: v
}) {
  const b = Object.keys(r), [j, E] = L.useState(0), [T, C] = L.useState({}), g = (N, P) => {
    C((q) => ({
      ...q,
      [N]: P
    }));
  }, { initialValues: w, validationSchema: O, stepperSchemas: y } = L.useMemo(() => {
    const N = {}, P = {}, q = {};
    return f ? Object.entries(r).forEach(([K, k]) => {
      const G = {};
      se(k, N, G, d), q[K] = G;
    }) : Object.entries(r).forEach(([K, k]) => {
      se(k, N, P, d);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, d, f]), I = b[j] ?? null, R = f && I ? y[I] ?? {} : O, s = le({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (N) => {
      f ? (j < b.length - 1 && E((P) => P + 1), j === b.length - 1 && l(N)) : l(N);
    }
  }), F = async (N) => {
    if (N.preventDefault(), !f) {
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
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: b.map((N, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(P),
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
          /* @__PURE__ */ t.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((N, P) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ie[ce(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ue,
                  {
                    refid: v,
                    sqlOpsUrls: i,
                    field: N,
                    formik: s,
                    methods: m,
                    components: p,
                    setFieldOptions: g,
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
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: f ? "Next" : "Save" })
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
function ze({
  title: e,
  fields: r,
  data: d,
  onSubmit: l = (f) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  sqlOpsUrls: p = {},
  refid: i
}) {
  const f = Ie(r, p.operation), [v, b] = L.useState({}), j = (g, w) => {
    b((O) => ({
      ...O,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return f.forEach((O) => {
      se([O], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [f, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      l(g);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((g, w) => de(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && p.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: i,
            sqlOpsUrls: p,
            field: g,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
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
  onSubmit: l = (v) => {
  },
  onCancel: n = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: i = {},
  refid: f
}) {
  const [v, b] = L.useState({}), j = (g, w) => {
    b((O) => ({
      ...O,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((O) => {
      se([O], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], O) => /* @__PURE__ */ t.jsx(Le, { title: g, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: f,
            sqlOpsUrls: i,
            components: p,
            field: y,
            formik: C,
            methods: m,
            setFieldOptions: j,
            ...v[y.name] ? { optionsOverride: v[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${I}`
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
    let n = !1, m;
    d && (n = !0, m = d), console.log("skipquery,dbopsid", n, d), n || (m = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    })), console.log("dbopsId", m);
    const p = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: m, datahash: l },
      { headers: ae(e) }
    );
    return p.data?.data ?? p.data;
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
  callback: m = () => {
  },
  initialvalues: p = {}
}) {
  let i = Oe(e);
  const f = e.endPoints, v = e?.source?.refid, b = Re(e?.fields ?? {}, f?.operation), [j, E] = L.useState(p), T = L.useMemo(() => Ce(e.fields), [e.fields]);
  L.useEffect(() => {
    let w = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (!y?.type) {
        w && E({});
        return;
      }
      if (y.type === "method") {
        const I = y.method, R = I ? r[I] : void 0;
        if (R)
          try {
            const s = await Promise.resolve(R());
            w && E(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), w && E({});
          }
        else
          w && E({});
      }
      if (y.type === "api" && f?.operation !== "create")
        try {
          const I = await B({
            method: y.method || "GET",
            url: y.url ?? "",
            data: y.body ?? {},
            params: y.params ?? {},
            headers: y.headers ?? {}
          });
          w && E(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), w && E({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0" && f?.operation !== "create") {
        if (!f) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await qe.fetch(f, {
            source: {
              ...y,
              table: y.table,
              columns: y.columns,
              where: Y(y.where, {
                refid: v
              })
            },
            fields: ve(e.fields, f.operation)
          }, y?.dbopsid);
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
    const O = e?.source ?? {};
    let y = null;
    if (T.length > 0)
      try {
        y = await $e();
      } catch (R) {
        console.log("catch fetchGeolocation", R), y = null;
      }
    const I = {
      ...w,
      ...Object.fromEntries(
        T.map((R) => [R, y])
      )
    };
    if (O.type === "method") {
      const R = O.method, s = R ? r[R] : void 0;
      if (s)
        try {
          const F = await Promise.resolve(s(I));
          m?.(F);
        } catch (F) {
          m?.(F), console.error("Method execution failed:", F);
        }
    }
    if (O.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const R = await B({
          method: O.method || "POST",
          url: f.baseURL + O.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        m?.(R);
      } catch (R) {
        m?.(R), console.error("API fetch failed:", R);
      }
    }
    if (O.type === "sql") {
      const R = e.endPoints;
      if (!R) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let s = !1, F;
        O?.dbopsid && (s = !0, F = O?.dbopsid);
        const V = await B({
          method: "GET",
          url: R.baseURL + R.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        if (!s) {
          let P = {
            ...O
          };
          O.where && (P = {
            ...O,
            where: Y(O.where, {
              refid: v
            })
          }), F = (await B({
            method: "POST",
            url: R.baseURL + R.dbopsGetRefId,
            data: {
              operation: R.operation,
              source: P,
              fields: ve(e.fields, R.operation),
              forcefill: e.forcefill,
              datahash: V.data.refhash
            },
            headers: {
              Authorization: `Bearer ${R?.accessToken}`
            }
          }))?.data.refid;
        }
        const N = await B({
          method: "POST",
          url: R.baseURL + R[R.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: F,
            fields: I,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        m?.(N);
      } catch (s) {
        m?.(s), console.error("API fetch failed:", s);
      }
    }
  }, g = {
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
        sqlOpsUrls: f,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: f,
        refid: v
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
        sqlOpsUrls: f,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ze,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: j,
        onSubmit: C,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: f,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: g[i] ?? g.simple });
}
export {
  Ge as LogiksForm
};
