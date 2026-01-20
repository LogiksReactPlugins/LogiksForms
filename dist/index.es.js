import D, { useState as Z, useRef as be, useEffect as ee, useMemo as ge } from "react";
import G from "axios";
import * as V from "yup";
import { useFormik as ie } from "formik";
var oe = { exports: {} }, te = {};
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
  if (ye) return te;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, o, m) {
    var p = null;
    if (m !== void 0 && (p = "" + m), o.key !== void 0 && (p = "" + o.key), "key" in o) {
      m = {};
      for (var u in o)
        u !== "key" && (m[u] = o[u]);
    } else m = o;
    return o = m.ref, {
      $$typeof: e,
      type: l,
      key: p,
      ref: o !== void 0 ? o : null,
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
var ve;
function Ae() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === F ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case C:
          return "Fragment";
        case f:
          return "Profiler";
        case y:
          return "StrictMode";
        case k:
          return "Suspense";
        case s:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case T:
            return "Portal";
          case w:
            return (a.displayName || "Context") + ".Provider";
          case A:
            return (a._context.displayName || "Context") + ".Consumer";
          case $:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case z:
            return c = a.displayName || null, c !== null ? c : e(a.type) || "Memo";
          case L:
            c = a._payload, a = a._init;
            try {
              return e(a(c));
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
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var d = c.error, h = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return d.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), r(a);
      }
    }
    function l(a) {
      if (a === C) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === L)
        return "<...>";
      try {
        var c = e(a);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = q.A;
      return a === null ? null : a.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (W.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, c) {
      function d() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: d,
        configurable: !0
      });
    }
    function g() {
      var a = e(this.type);
      return B[a] || (B[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function S(a, c, d, h, N, x, I, K) {
      return d = x.ref, a = {
        $$typeof: R,
        type: a,
        key: c,
        props: x,
        _owner: N
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: I
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function b(a, c, d, h, N, x, I, K) {
      var _ = c.children;
      if (_ !== void 0)
        if (h)
          if (M(_)) {
            for (h = 0; h < _.length; h++)
              O(_[h]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(_);
      if (W.call(c, "key")) {
        _ = e(a);
        var H = Object.keys(c).filter(function(me) {
          return me !== "key";
        });
        h = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", n[_ + h] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          _,
          H,
          _
        ), n[_ + h] = !0);
      }
      if (_ = null, d !== void 0 && (i(d), _ = "" + d), p(c) && (i(c.key), _ = "" + c.key), "key" in c) {
        d = {};
        for (var J in c)
          J !== "key" && (d[J] = c[J]);
      } else d = c;
      return _ && u(
        d,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), S(
        a,
        _,
        x,
        N,
        o(),
        d,
        I,
        K
      );
    }
    function O(a) {
      typeof a == "object" && a !== null && a.$$typeof === R && a._store && (a._store.validated = 1);
    }
    var v = D, R = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), w = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), q = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, M = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var ne, B = {}, E = v["react-stack-bottom-frame"].bind(
      v,
      m
    )(), P = Y(l(m)), n = {};
    re.Fragment = C, re.jsx = function(a, c, d, h, N) {
      var x = 1e4 > q.recentlyCreatedOwnerStacks++;
      return b(
        a,
        c,
        d,
        !1,
        h,
        N,
        x ? Error("react-stack-top-frame") : E,
        x ? Y(l(a)) : P
      );
    }, re.jsxs = function(a, c, d, h, N) {
      var x = 1e4 > q.recentlyCreatedOwnerStacks++;
      return b(
        a,
        c,
        d,
        !0,
        h,
        N,
        x ? Error("react-stack-top-frame") : E,
        x ? Y(l(a)) : P
      );
    };
  }()), re;
}
var fe;
function Ee() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? oe.exports = Se() : oe.exports = Ae()), oe.exports;
}
var t = Ee();
function $e(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function Oe(e, r = "create", i = "Info") {
  const l = {};
  let o = !1;
  if (Object.values(e).forEach((p) => {
    p.group && (o = !0);
  }), !o) return {};
  const m = [];
  return Object.entries(e).forEach(([p, u]) => {
    if (u.vmode === "edit" && r === "create") return;
    const g = { ...u, name: p };
    if (u.group) {
      const S = u.group;
      l[S] || (l[S] = []), l[S].push(g);
    } else
      m.push(g);
  }), m.length > 0 ? {
    [i]: m,
    ...l
  } : l;
}
function je(e, r = "create") {
  const i = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (i[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), i;
}
const se = (e, r, i, l) => {
  e.forEach((o) => {
    const m = o?.name;
    if (!m) return;
    let p = l?.[m];
    p == null && (p = o.default), o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? r[m] = Array.isArray(p) ? p : typeof p == "string" ? p.split(",").map((g) => g.trim()).filter(Boolean) : [] : o.type === "json" ? r[m] = typeof p == "object" && p !== null ? JSON.stringify(p, null, 2) : p ?? "" : o.type === "date" ? r[m] = typeof p == "string" ? p.slice(0, 10) : "" : o.type === "time" ? typeof p == "string" ? p.includes("T") ? r[m] = p.slice(11, 16) : r[m] = p.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(p ?? "false") : r[m] = p ?? "";
    let u;
    o.type === "file" ? u = o.multiple ? V.array().of(V.mixed()) : V.mixed() : o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? u = V.array().of(V.string()) : o.type === "email" ? u = V.string().email("Invalid email") : o.type === "number" ? u = V.number().typeError("Must be a number") : o.type === "json" ? u = V.string().test("json", "Invalid JSON", (g) => {
      if (!g) return !0;
      try {
        return JSON.parse(g), !0;
      } catch {
        return !1;
      }
    }) : u = V.string(), o.required && (u = u.required(
      o.error_message || `${o.label || m} is required`
    )), o?.validate?.regex && typeof o.validate.regex == "string" && (u = u.matches(
      new RegExp(o?.validate?.regex),
      o?.error_message || "Invalid input format"
    )), o?.validate && Object.entries(o.validate).forEach(([g, S]) => {
      switch (g) {
        case "email":
          S && (u = u.email("Invalid email format"));
          break;
        case "mobile":
          u = u.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          u = u.matches(
            new RegExp(S),
            `Must match pattern: ${S}`
          );
          break;
        case "date":
          u = V.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((b, O) => {
            if (typeof O == "string") {
              const v = O.replace(/-/g, "/"), [R, T, C] = v.split("/");
              if (R && T && C)
                return /* @__PURE__ */ new Date(`${C}-${T}-${R}`);
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
          u = V.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          u = V.number().typeError("Must be a decimal").transform((b, O) => {
            if (O == null || O === "") return;
            const v = Number(O);
            if (isNaN(v)) return b;
            if (typeof b == "number" && !isNaN(b)) {
              const R = Number(b);
              return Number.isInteger(R) ? Number(v.toFixed(R)) : v;
            }
            return v;
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
          const b = Number(S);
          isNaN(b) || (u = u.min(b, `Minimum length is ${b}`));
          break;
        }
        case "length-max": {
          const b = Number(S);
          isNaN(b) || (u = u.max(b, `Maximum length is ${b}`));
          break;
        }
      }
    }), i[m] = u;
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
function de(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const ue = (e) => e === !0 || e === "true", U = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (i, l) => r[l] !== void 0 ? String(r[l]) : i
) : Array.isArray(e) ? e.map((i) => U(i, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([i, l]) => [
    U(i, r),
    U(l, r)
  ])
) : e, Q = (e, r, i, l) => {
  if (!Array.isArray(i) || i.length === 0) return {};
  const o = l ?? (i[0] && typeof i[0] == "object" && "category" in i[0] ? "category" : void 0);
  if (!o) {
    const p = {};
    return i.forEach((u) => {
      const g = u[e], S = u[r];
      g != null && S != null && (p[String(g)] = String(S));
    }), p;
  }
  const m = {};
  return i.forEach((p) => {
    const u = p[o] ?? "Others", g = p[e], S = p[r];
    g == null || S == null || (m[u] || (m[u] = {}), m[u][String(g)] = String(S));
  }), m;
}, Ne = (e, r) => {
  if (!e || r == null) return;
  const i = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[i];
  for (const o of Object.values(e))
    if (i in o)
      return o[i];
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
function Fe(e, r = "create") {
  return Object.entries(e).filter(([, i]) => !(i.vmode === "edit" && r === "create")).map(([i, l]) => ({
    ...l,
    name: i
  }));
}
async function le(e, r, i, l = void 0, o = void 0, m = {}) {
  try {
    let p = i;
    return p || (p = (await G({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {}, srcid: o },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await G({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: p,
        filter: m,
        refid: l,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (p) {
    throw p;
  }
}
function Ie(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Pe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const i = r.match(/^(.+?)\s+as\s+.+$/i);
    return i ? i[1]?.trim() : r;
  }).filter((r) => !!r);
}
const X = (e) => {
  const r = {};
  for (const [i, l] of Object.entries(e)) {
    const o = i.includes(".") ? i.split(".").pop() : i;
    if (o in r) {
      console.warn(`Duplicate key after normalization: ${o}`);
      continue;
    }
    r[o] = l;
  }
  return r;
};
function he({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: l,
  refid: o,
  module_refid: m,
  optionsOverride: p,
  setFieldOptions: u
}) {
  const [g, S] = Z(!1), [b, O] = Z(
    p ?? e.options ?? {}
  ), [v, R] = Z(""), [T, C] = Z(0), y = be(null), f = be(null), [A, w] = Z(!1), $ = D.useRef(v);
  D.useEffect(() => {
    $.current = v;
  }, [v]);
  const k = (E) => {
    E.currentTarget.open || R("");
  };
  ee(() => {
    p && Object.keys(p).length !== 0 && O(p);
  }, [p]), ee(() => {
    const E = (P) => {
      f.current && !f.current.contains(P.target) && (f.current.open = !1, R(""));
    };
    return document.addEventListener("mousedown", E), () => {
      document.removeEventListener("mousedown", E);
    };
  }, []);
  const s = e.name;
  D.useEffect(() => {
    let E = !0;
    return (async () => {
      let n = e.valueKey ?? "value", a = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const x = Object.values(e.options);
          if (x.length && typeof x[0] == "string") {
            O(e.options);
            return;
          }
        }
        const h = (Array.isArray(e.options) ? e.options : [e.options]).map(X), N = Q(
          n,
          a,
          h,
          e.groupKey
          // auto-uses `category` if present
        );
        O(N);
        return;
      }
      const c = e?.source ?? {};
      if (e.type === "dataMethod") {
        const d = e.method, h = d ? i[d] : void 0;
        if (h)
          try {
            const N = await Promise.resolve(h()), x = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, I = Array.isArray(x) ? x.map(X) : [], K = Q(n, a, I, e.groupKey);
            E && O(K);
          } catch (N) {
            console.error("Method execution failed:", N), E && O({});
          }
        else
          E && O({});
      }
      if (c.type === "api" && c.url)
        try {
          const d = await G({
            method: c.method || "GET",
            url: c.url,
            data: c.body ?? {},
            params: c.params ?? {},
            headers: c.headers ?? {}
          }), h = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, N = Array.isArray(h) ? h.map(X) : [], x = Q(n, a, N, e.groupKey);
          E && O(x);
        } catch (d) {
          console.error("API execution failed:", d), E && O({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!l) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let d;
          if (e.type === "dataSelector")
            d = {
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
            d = {
              table: e.table,
              cols: e.columns,
              where: e.where ? o ? U(e.where, { refid: o }) : e.where : void 0
            };
          }
          const h = await le(l, d, e?.queryid, void 0, m), N = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, x = Array.isArray(N) ? N.map(X) : [], I = Q(n, a, x, e.groupKey);
          E && O(I);
        } catch (d) {
          console.error("API fetch failed:", d);
        }
      }
    })(), () => {
      E = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    o
  ]);
  const z = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, L = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, j = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, F = (E) => E.icon ? /* @__PURE__ */ t.jsx("i", { className: E.icon }) : null, q = ge(
    () => Re(b),
    [b]
  );
  console.log("flatOptions", q);
  const W = q.length, M = ge(() => e.search || !v ? q : q.filter(
    ([, E]) => E.toLowerCase().includes(v.toLowerCase())
  ), [e.search, v, q]), Y = (E, P) => {
    if (f.current?.open === !0 || A === !0)
      if (E.key === "ArrowDown")
        E.preventDefault(), C(
          (n) => n + 1 < M.length ? n + 1 : 0
        );
      else if (E.key === "ArrowUp")
        E.preventDefault(), C(
          (n) => n - 1 >= 0 ? n - 1 : M.length - 1
        );
      else if (E.key === "Enter") {
        E.preventDefault();
        const [n] = M[T] || [];
        n && r.setFieldValue(e.name, P ? n : [...r.values[e.name], n]), f.current && (f.current.open = !1);
      } else E.key === "Escape" && (f.current.open = !1, R(""), w(!1));
  };
  ee(() => {
    y.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), ee(() => {
    T >= M.length && C(0);
  }, [M, T]), ee(() => {
    const E = e.autocomplete, P = e.ajaxchain;
    if (!E && !P) return;
    const n = r.values[e.name];
    if (!n) return;
    const a = Array.isArray(P) ? P : P ? [P] : [];
    (async () => {
      try {
        if (Ie(E)) {
          const d = E.src;
          if (!d || !l) return;
          const h = U(d.where ?? {}, {
            refid: n
          }), N = {
            ...d,
            table: d.table,
            cols: d.columns,
            where: h
          }, { data: x } = await le(l, N, e?.queryid, void 0, m), I = Array.isArray(x?.data) ? x.data[0] : x?.data;
          I && E.target.split(",").map((K) => K.trim()).forEach((K) => {
            I[K] !== void 0 && r.setFieldValue(K, I[K]);
          });
        }
        for (const d of a) {
          const h = d.src;
          if (!d || typeof d != "object" || !h || typeof h != "object" || !l) continue;
          let N;
          if (!h.queryid) {
            if (!h.table || !h.columns)
              throw new Error("SQL query requires field.table");
            const me = U(h?.where ?? {}, {
              refid: n
            });
            N = {
              ...h,
              table: h.table,
              cols: h.columns,
              where: me
            };
          }
          const { data: x } = await le(l, N, h?.queryid, n, m);
          let I = e.valueKey ?? "value", K = e.labelKey ?? "title";
          const _ = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, H = Array.isArray(_) ? _.map(X) : [], J = Q(
            I,
            K,
            H,
            e.groupKey
          );
          u?.(d.target, J);
        }
      } catch (d) {
        console.error("Autocomplete / AjaxChain fetch failed", d);
      }
    })();
  }, [r.values[e.name]]), D.useEffect(() => {
    if (!e.search || !v.trim() || !e.table || !l) return;
    const E = Pe(e.columns ?? ""), P = new AbortController(), n = setTimeout(async () => {
      try {
        let a;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const _ = o ? U(e.where ?? {}, {
            refid: o
          }) : e.where;
          a = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: _
          };
        }
        let c = {};
        Array.isArray(E) && E.forEach((_) => {
          c[_] = [v, "LIKE"];
        });
        let d = e.valueKey ?? "value", h = e.labelKey ?? "title";
        const { data: N } = await le(l, a, e?.queryid, void 0, m, c), x = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, I = Array.isArray(x) ? x.map(X) : [], K = Q(
          d,
          h,
          I,
          e.groupKey
        );
        O(K);
      } catch (a) {
        if (G.isCancel(a)) return;
        console.error("Search fetch failed", a);
      }
    }, 500);
    return () => {
      clearTimeout(n), P.abort();
    };
  }, [v, o]);
  const ne = async (E) => {
    if (E.length === 0) {
      console.error("No file");
      return;
    }
    const P = l?.baseURL + l?.uploadURL;
    if (!P) {
      console.error("No Upload URL ");
      return;
    }
    const n = e.multiple === !0;
    try {
      const a = await Promise.all(
        Array.from(E).map(async (c) => {
          const d = new FormData();
          return d.append("file", c), (await G({
            method: "POST",
            url: P,
            data: d,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${l?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        n ? a.map((c) => c.path) : a[0]?.path
      );
    } catch (a) {
      console.error("File upload failed", a), r.setFieldError(s, "File upload failed");
    }
  };
  console.log("options", b);
  const B = async (E, P, n) => {
    const a = P[E];
    if (!a) return;
    const c = i?.[a];
    if (typeof c != "function") {
      console.error(`Method "${String(a)}" not found`);
      return;
    }
    try {
      await Promise.resolve(c(n));
    } catch (d) {
      console.error(`Method "${String(a)}" failed`, d);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const n = r.values[s] ?? "", a = v !== "" ? v : Ne(b, n) ?? String(n ?? ""), c = (h) => {
        const N = h.target.value;
        R(N), C(0), N.trim() ? w(!0) : (w(!1), r.setFieldValue(s, ""));
      }, d = (h) => {
        r.setFieldValue(s, h), R(""), w(!1), B("onChange", e, `${s}-${h}`);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${z} ${L}`,
            value: a,
            placeholder: e.placeholder || "Type to search...",
            onChange: c,
            onBlur: () => {
              setTimeout(() => w(!1), 150);
            },
            onKeyDown: (h) => {
              if (h.key === "Enter") {
                if (h.preventDefault(), M[T]) {
                  const [N] = M[T];
                  r.setFieldValue(s, N);
                } else v.trim() && r.setFieldValue(s, v.trim());
                w(!1);
                return;
              }
              Y(h, !0);
            },
            disabled: e.disabled
          }
        ),
        A && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: y,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: M.length > 0 ? M.map(([h, N], x) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${s}-${h}`,
                "data-index": x,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === x ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => d(h),
                children: N
              },
              h
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${a}" ` })
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
        const n = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: j, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: k,
              ref: f,
              onKeyDown: (a) => Y(a, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: n?.length > 0 ? n.join(", ") : `Select ${e.label}` }),
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
                /* @__PURE__ */ t.jsxs("div", { ref: y, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (a) => {
                        R(a.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  M.length > 0 ? M.map(([a, c], d) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${a}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(a) ? "bg-indigo-50 text-indigo-600 font-medium" : T === d ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${a}`,
                            type: "checkbox",
                            checked: n?.includes(a),
                            onChange: (h) => {
                              const N = h.target.checked ? [...n, a] : n?.filter((x) => x !== a);
                              r.setFieldValue(s, N), B("onChange", e, `${s}-${a}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        c
                      ]
                    },
                    a
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
            onToggle: k,
            ref: f,
            onKeyDown: (n) => Y(n, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? Ne(b, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: y, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: v,
                    onChange: (n) => {
                      R(n.target.value), C(0);
                    },
                    onKeyDown: (n) => Y(n, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                M.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (n) => {
                      n.preventDefault(), n.stopPropagation(), r.setFieldValue(s, ""), f.current?.removeAttribute("open"), R("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                M.length > 0 ? M.map(([n, a], c) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${s}-${n}`,
                    "data-index": c,
                    onClick: (d) => {
                      d.preventDefault(), d.stopPropagation(), r.setFieldValue(s, n), f.current?.removeAttribute("open"), R(""), C(0), B("onChange", e, `${s}-${n}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === n ? "bg-indigo-50 text-indigo-600 font-medium" : T === c ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: a
                  },
                  n
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
              id: s,
              className: `${z} ${L} min-h-[120px] resize-none`,
              onFocus: () => S(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value
                ), B("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const n = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: j, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: k,
              ref: f,
              onKeyDown: (a) => Y(a, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: n?.length > 0 ? n.join(", ") : `Select ${e.label}` }),
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
                /* @__PURE__ */ t.jsxs("div", { ref: y, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (a) => {
                        R(a.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  M.length > 0 ? M.map(([a, c], d) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${a}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(a) ? "bg-indigo-50 text-indigo-600 font-medium" : T === d ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${a}`,
                            type: "checkbox",
                            checked: n?.includes(a),
                            onChange: (h) => {
                              const N = h.target.checked ? [...n, a] : n?.filter((x) => x !== a);
                              r.setFieldValue(s, N), B("onChange", e, `${s}-${a}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        c
                      ]
                    },
                    a
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
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${z} ${L} appearance-none cursor-pointer pr-12`,
              onFocus: () => S(!0),
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value === "" ? "" : n.target.value
                ), B("onChange", e, `${s}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !we(b) && Object.entries(b).map(([n, a]) => /* @__PURE__ */ t.jsx("option", { value: n, className: "py-2", children: a }, n)),
                we(b) && Object.entries(b).map(([n, a]) => /* @__PURE__ */ t.jsx("optgroup", { label: n, children: Object.entries(a).map(([c, d]) => /* @__PURE__ */ t.jsx("option", { value: c, children: d }, c)) }, n))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${W > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(b || {}).map(([n, a]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${n}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${n}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === n,
                  value: n,
                  onChange: (c) => {
                    r.setFieldValue(
                      s,
                      c.target.value === "" ? "" : c.target.value
                    ), B("onChange", e, `${s}-${n}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              a
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const n = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(b || {}).map(([a, c]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${a}`,
                  type: "checkbox",
                  checked: n.includes(a),
                  onChange: (d) => {
                    const h = d.target.checked ? [...n, a] : n.filter((N) => N !== a);
                    r.setFieldValue(s, h), B("onChange", e, `${s}-${a}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              c
            ]
          },
          a
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const n = r.values[s], a = v.trim(), c = Array.isArray(b) ? b : Object.entries(b || {}).map(([x, I]) => ({ value: x, label: I })), d = (x) => {
        x && !n.includes(x) && (r.setFieldValue(s, [...n, x]), R(""));
      }, h = (x) => {
        r.setFieldValue(
          s,
          n.filter((I) => I !== x)
        );
      }, N = (x) => c.find((I) => I.value === x)?.label ?? x;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${z} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              n.map((x) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: N(x) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (I) => {
                          I.stopPropagation(), e.disabled || h(x);
                        },
                        onMouseDown: (I) => I.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                x
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: v,
                  onChange: (x) => R(x.target.value),
                  onKeyDown: (x) => {
                    (x.key === "Enter" || x.key === ",") && (x.preventDefault(), d(a));
                  },
                  placeholder: n.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const E = e.multiple === !0, P = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "file",
              className: `${z} ${L} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => S(!0),
              name: s,
              multiple: E,
              onChange: (n) => {
                const a = n.currentTarget.files;
                a && ne(a), B("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        P.map((n) => {
          const a = n?.split("/").pop();
          return a ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: a }) }, n) : null;
        }),
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
              id: s,
              name: s,
              value: r.values[s],
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value
                ), B("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${z} ${L} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`,
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
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "date",
              name: s,
              min: e.min,
              max: e.max,
              value: r.values[s],
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value
                ), B("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${z} ${L} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "number":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: e.type || "text",
              className: `${z} ${L} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => S(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value
                ), B("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: e.type || "text",
              className: `${z} ${L} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => S(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  s,
                  n.target.value
                ), B("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function _e({ title: e, children: r, isFirst: i }) {
  const [l, o] = Z(i);
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
  data: i,
  onSubmit: l = (b) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: u = {},
  refid: g,
  module_refid: S
}) {
  const [b, O] = D.useState({}), v = (y, f) => {
    O((A) => ({
      ...A,
      [y]: f
    }));
  }, { initialValues: R, validationSchema: T } = D.useMemo(() => {
    const y = {}, f = {};
    return Object.values(r).flat().forEach((A) => {
      se([A], y, f, i);
    }), {
      initialValues: y,
      validationSchema: f
    };
  }, [r, i]), C = ie({
    initialValues: R,
    enableReinitialize: !0,
    validationSchema: V.object().shape(T),
    onSubmit: (y) => {
      l(y);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([y, f], A) => /* @__PURE__ */ t.jsx(_e, { title: y, isFirst: A === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((w, $) => ue(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[de(Number(w.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: g,
            module_refid: S,
            sqlOpsUrls: u,
            components: p,
            field: w,
            formik: C,
            methods: m,
            setFieldOptions: v,
            ...b[w.name] ? { optionsOverride: b[w.name] } : {}
          },
          w.name
        )
      },
      w?.name ?? `field-${$}`
    )) }) }, y)) }),
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
  data: i,
  onSubmit: l = (O) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: u = {},
  widget: g,
  refid: S,
  module_refid: b
}) {
  const O = Object.keys(r), [v, R] = D.useState(0), [T, C] = D.useState({}), y = (j, F) => {
    C((q) => ({
      ...q,
      [j]: F
    }));
  }, { initialValues: f, validationSchema: A, stepperSchemas: w } = D.useMemo(() => {
    const j = {}, F = {}, q = {};
    return g ? Object.entries(r).forEach(([W, M]) => {
      const Y = {};
      se(M, j, Y, i), q[W] = Y;
    }) : Object.entries(r).forEach(([W, M]) => {
      se(M, j, F, i);
    }), {
      initialValues: j,
      validationSchema: F,
      stepperSchemas: q
    };
  }, [r, i, g]), $ = O[v] ?? null, k = g && $ ? w[$] ?? {} : A, s = ie({
    initialValues: f,
    enableReinitialize: !0,
    validationSchema: V.object().shape(k),
    onSubmit: (j) => {
      g ? (v < O.length - 1 && R((F) => F + 1), v === O.length - 1 && l(j)) : l(j);
    }
  }), z = async (j) => {
    if (j.preventDefault(), !g) {
      const F = await s.validateForm();
      if (Object.keys(F).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(F).reduce((q, W) => ({ ...q, [W]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(j);
  }, L = () => {
    R((j) => j > 0 ? j - 1 : j);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: O.map((j, F) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => R(F),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === F ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: j })
      },
      j
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: z, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: $ && r[$]?.map((j, F) => ue(j.hidden) || j.type === "geolocation" || j.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[de(Number(j.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  he,
                  {
                    refid: S,
                    module_refid: b,
                    sqlOpsUrls: u,
                    field: j,
                    formik: s,
                    methods: m,
                    components: p,
                    setFieldOptions: y,
                    ...T[j.name] ? { optionsOverride: T[j.name] } : {}
                  },
                  j.name
                )
              },
              j?.name ?? `field-${F}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              v > 0 && /* @__PURE__ */ t.jsx("button", { onClick: L, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: o, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: g ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                v + 1,
                " of ",
                O.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: O.map((j, F) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${F === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              F
            )) })
          ] }) })
        ]
      },
      O[v]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: i,
  onSubmit: l = (S) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  sqlOpsUrls: p = {},
  refid: u,
  module_refid: g
}) {
  const S = Fe(r, p.operation), [b, O] = D.useState({}), v = (y, f) => {
    O((A) => ({
      ...A,
      [y]: f
    }));
  }, { initialValues: R, validationSchema: T } = D.useMemo(() => {
    const y = {}, f = {};
    return S.forEach((A) => {
      se([A], y, f, i);
    }), {
      initialValues: y,
      validationSchema: f
    };
  }, [S, i]), C = ie({
    initialValues: R,
    enableReinitialize: !0,
    validationSchema: V.object().shape(T),
    onSubmit: (y) => {
      l(y);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((y, f) => ue(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && p.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[de(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: u,
            module_refid: g,
            sqlOpsUrls: p,
            field: y,
            formik: C,
            methods: m,
            setFieldOptions: v,
            ...b[y.name] ? { optionsOverride: b[y.name] } : {}
          }
        )
      },
      y?.name ?? `field-${f}`
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
  data: i,
  onSubmit: l = (b) => {
  },
  onCancel: o = () => {
  },
  methods: m = {},
  components: p = {},
  sqlOpsUrls: u = {},
  refid: g,
  module_refid: S
}) {
  const [b, O] = D.useState({}), v = (y, f) => {
    O((A) => ({
      ...A,
      [y]: f
    }));
  }, { initialValues: R, validationSchema: T } = D.useMemo(() => {
    const y = {}, f = {};
    return Object.values(r).flat().forEach((A) => {
      se([A], y, f, i);
    }), {
      initialValues: y,
      validationSchema: f
    };
  }, [r, i]), C = ie({
    initialValues: R,
    enableReinitialize: !0,
    validationSchema: V.object().shape(T),
    onSubmit: (y) => {
      l(y);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([y, f], A) => /* @__PURE__ */ t.jsx(ze, { title: y, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((w, $) => ue(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[de(Number(w.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: g,
            module_refid: S,
            sqlOpsUrls: u,
            components: p,
            field: w,
            formik: C,
            methods: m,
            setFieldOptions: v,
            ...b[w.name] ? { optionsOverride: b[w.name] } : {}
          },
          w.name
        )
      },
      w?.name ?? `field-${$}`
    )) }) }, y)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const ae = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), pe = async (e) => (await G.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ae(e) }
)).data.refhash, xe = async (e, r) => (await G.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ae(e) }
)).data.refid, De = {
  async fetch(e, r, i, l) {
    const o = await pe(e);
    let m = !1, p;
    i && (m = !0, p = i), console.log("skipquery,dbopsid", m, i), m || (p = await xe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o,
      srcid: l
    }));
    const u = await G.post(
      e.baseURL + e.dbopsFetch,
      { refid: p, datahash: o },
      { headers: ae(e) }
    );
    return u.data?.data ?? u.data;
  },
  async create(e, r, i) {
    const l = await pe(e), o = await xe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: l,
      srcid: i
    });
    return (await G.post(
      e.baseURL + e.dbopsCreate,
      { refid: o, fields: r.values, datahash: l },
      { headers: ae(e) }
    )).data;
  },
  async update(e, r, i) {
    const l = await pe(e), o = await xe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: l,
      srcid: i
    });
    return (await G.post(
      e.baseURL + e.dbopsUpdate,
      { refid: o, fields: r.values, datahash: l },
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
  components: o = {},
  callback: m = () => {
  },
  initialvalues: p = {}
}) {
  let u = $e(e);
  const g = e.endPoints, S = e?.source?.refid, b = Oe(e?.fields ?? {}, g?.operation), [O, v] = D.useState(p), R = D.useMemo(() => Ce(e.fields), [e.fields]);
  D.useEffect(() => {
    let y = !0;
    return (async () => {
      const A = e?.source ?? {};
      if (!A?.type) {
        y && v({});
        return;
      }
      if (A.type === "method") {
        const w = A.method, $ = w ? r[w] : void 0;
        if ($)
          try {
            const k = await Promise.resolve($());
            y && v(k ?? {});
          } catch (k) {
            console.error("Method execution failed:", k), y && v({});
          }
        else
          y && v({});
      }
      if (A.type === "api" && g?.operation !== "create")
        try {
          const w = await G({
            method: A.method || "GET",
            url: A.url ?? "",
            data: A.body ?? {},
            params: A.params ?? {},
            headers: A.headers ?? {}
          });
          y && v(w.data ?? {});
        } catch (w) {
          console.error("API fetch failed:", w), y && v({});
        }
      if (A.type === "sql" && A.refid && A.refid !== "0" && g?.operation !== "create" || g?.operation !== "create" && A.dbopsid) {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const w = await De.fetch(g, {
            source: {
              ...A,
              table: A.table,
              columns: A.columns,
              where: U(A.where, {
                refid: S
              })
            },
            fields: je(e.fields, g.operation)
          }, A?.dbopsid, e?.module_refid);
          y && v(w);
        } catch (w) {
          console.error("API fetch failed:", w);
        }
      }
    })(), () => {
      y = !1;
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
  const T = async (y) => {
    const f = e?.source ?? {};
    let A = null;
    if (R.length > 0)
      try {
        A = await Te();
      } catch ($) {
        console.log("catch fetchGeolocation", $), A = null;
      }
    const w = {
      ...y,
      ...Object.fromEntries(
        R.map(($) => [$, A])
      )
    };
    if (f.type === "method") {
      const $ = f.method, k = $ ? r[$] : void 0;
      if (k)
        try {
          const s = await Promise.resolve(k(w));
          if (m?.(s), r?.handleActions) {
            let z = g?.operation === "update" ? S : s?.data?.refid;
            const L = e?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            r.handleActions(L);
          }
        } catch (s) {
          m?.(s), console.error("Method execution failed:", s);
        }
    }
    if (f.type === "api") {
      if (!g) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await G({
          method: f.method || "POST",
          url: g.baseURL + f.endpoint,
          data: w ?? {},
          headers: {
            Authorization: `Bearer ${g?.accessToken}`
          }
        });
        if (m?.($), r?.handleActions) {
          let k = g.operation === "update" ? S : $?.data?.refid;
          const s = e?.gotolink?.replace(
            "{hashid}",
            String(k)
          );
          r.handleActions(s);
        }
      } catch ($) {
        m?.($), console.error("API fetch failed:", $);
      }
    }
    if (f.type === "sql") {
      const $ = e.endPoints;
      if (!$) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let k = !1, s;
        f?.dbopsid && (k = !0, s = f?.dbopsid);
        const z = await G({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!k) {
          let j = {
            ...f
          };
          f.where && (j = {
            ...f,
            where: U(f.where, {
              refid: S
            })
          }), s = (await G({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: j,
              fields: je(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: z.data.refhash,
              srcid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const L = await G({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: s,
            fields: w,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (console.log("res", L), m?.(L), r?.handleActions) {
          let j = $.operation === "update" ? S : L?.data?.refid;
          const F = e?.gotolink?.replace(
            "{hashid}",
            String(j)
          );
          r.handleActions(F);
        }
      } catch (k) {
        m?.(k), console.error("API fetch failed:", k);
      }
    }
  }, C = {
    accordion: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: O,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: g,
        refid: S,
        module_refid: e?.module_refid
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: O,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: g,
        refid: S,
        module_refid: e?.module_refid
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: O,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: o,
        widget: e?.widget,
        sqlOpsUrls: g,
        refid: S,
        module_refid: e?.module_refid
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: O,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: g,
        refid: S,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: C[u] ?? C.simple });
}
export {
  Ge as LogiksForm
};
