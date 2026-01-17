import L, { useState as Q, useRef as xe, useEffect as Z, useMemo as be } from "react";
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
  function d(l, n, u) {
    var p = null;
    if (u !== void 0 && (p = "" + u), n.key !== void 0 && (p = "" + n.key), "key" in n) {
      u = {};
      for (var i in n)
        i !== "key" && (u[i] = n[i]);
    } else u = n;
    return n = u.ref, {
      $$typeof: e,
      type: l,
      key: p,
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
        case A:
          return "Profiler";
        case w:
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
          case y:
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
        var h = o.error, m = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
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
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function u() {
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
    function v(a, o, h, m, R, F, H, W) {
      return h = F.ref, a = {
        $$typeof: T,
        type: a,
        key: o,
        props: F,
        _owner: R
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
    function x(a, o, h, m, R, F, H, W) {
      var z = o.children;
      if (z !== void 0)
        if (m)
          if (K(z)) {
            for (m = 0; m < z.length; m++)
              j(z[m]);
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
        m = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", $[z + m] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          z,
          U,
          z
        ), $[z + m] = !0);
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
        F,
        R,
        n(),
        h,
        H,
        W
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var E = L, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), G = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, K = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, c = E["react-stack-bottom-frame"].bind(
      E,
      u
    )(), b = X(l(u)), $ = {};
    ee.Fragment = g, ee.jsx = function(a, o, h, m, R) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        a,
        o,
        h,
        !1,
        m,
        R,
        F ? Error("react-stack-top-frame") : c,
        F ? X(l(a)) : b
      );
    }, ee.jsxs = function(a, o, h, m, R) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        a,
        o,
        h,
        !0,
        m,
        R,
        F ? Error("react-stack-top-frame") : c,
        F ? X(l(a)) : b
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
  const u = [];
  return Object.entries(e).forEach(([p, i]) => {
    if (i.vmode === "edit" && r === "create") return;
    const f = { ...i, name: p };
    if (i.group) {
      const v = i.group;
      l[v] || (l[v] = []), l[v].push(f);
    } else
      u.push(f);
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
    let p = l?.[u];
    p == null && (p = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[u] = Array.isArray(p) ? p : typeof p == "string" ? p.split(",").map((f) => f.trim()).filter(Boolean) : [] : n.type === "json" ? r[u] = typeof p == "object" && p !== null ? JSON.stringify(p, null, 2) : p ?? "" : n.type === "date" ? r[u] = typeof p == "string" ? p.slice(0, 10) : "" : n.type === "time" ? typeof p == "string" ? p.includes("T") ? r[u] = p.slice(11, 16) : r[u] = p.slice(0, 5) : r[u] = "" : u === "blocked" || u === "blacklist" ? r[u] = String(p ?? "false") : r[u] = p ?? "";
    let i;
    n.type === "file" ? i = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? i = D.array().of(D.string()) : n.type === "email" ? i = D.string().email("Invalid email") : n.type === "number" ? i = D.number().typeError("Must be a number") : n.type === "json" ? i = D.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : i = D.string(), n.required && (i = i.required(
      n.error_message || `${n.label || u} is required`
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
          i = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((x, j) => {
            if (typeof j == "string") {
              const E = j.replace(/-/g, "/"), [T, C, g] = E.split("/");
              if (T && C && g)
                return /* @__PURE__ */ new Date(`${g}-${C}-${T}`);
            }
            return x;
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
          i = D.number().typeError("Must be a decimal").transform((x, j) => {
            if (j == null || j === "") return;
            const E = Number(j);
            if (isNaN(E)) return x;
            if (typeof x == "number" && !isNaN(x)) {
              const T = Number(x);
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
            (x) => x && x.toUpperCase()
          );
          break;
        case "lower":
          i = i.transform(
            (x) => x && x.toLowerCase()
          );
          break;
        case "length-min": {
          const x = Number(v);
          isNaN(x) || (i = i.min(x, `Minimum length is ${x}`));
          break;
        }
        case "length-max": {
          const x = Number(v);
          isNaN(x) || (i = i.max(x, `Maximum length is ${x}`));
          break;
        }
      }
    }), d[u] = i;
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
  const u = {};
  return d.forEach((p) => {
    const i = p[n] ?? "Others", f = p[e], v = p[r];
    f == null || v == null || (u[i] || (u[i] = {}), u[i][f] = v);
  }), u;
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
function Fe(e) {
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
  setFieldOptions: p
}) {
  const [i, f] = Q(!1), [v, x] = Q(
    u ?? e.options ?? {}
  ), [j, E] = Q(""), [T, C] = Q(0), g = xe(null), w = xe(null), [A, y] = Q(!1), I = L.useRef(j);
  L.useEffect(() => {
    I.current = j;
  }, [j]);
  const O = (S) => {
    S.currentTarget.open || E("");
  };
  Z(() => {
    u && Object.keys(u).length !== 0 && x(u);
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
        x(e.options);
        return;
      }
      let c = e.valueKey ?? "value", b = e.labelKey ?? "title";
      const $ = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, o = a ? d[a] : void 0;
        if (o)
          try {
            const h = await Promise.resolve(o()), m = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, R = Array.isArray(m) ? m.map(re) : [], F = te(c, b, R, e.groupKey);
            S && x(F);
          } catch (h) {
            console.error("Method execution failed:", h), S && x({});
          }
        else
          S && x({});
      }
      if ($.type === "api" && $.url)
        try {
          const a = await B({
            method: $.method || "GET",
            url: $.url,
            data: $.body ?? {},
            params: $.params ?? {},
            headers: $.headers ?? {}
          }), o = Array.isArray(a?.data?.data) ? a.data.data : Array.isArray(a?.data) ? a.data : a, h = Array.isArray(o) ? o.map(re) : [], m = te(c, b, h, e.groupKey);
          S && x(m);
        } catch (a) {
          console.error("API execution failed:", a), S && x({});
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
          const o = await oe(l, a, e?.queryid), h = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, m = Array.isArray(h) ? h.map(re) : [], R = te(c, b, m, e.groupKey);
          S && x(R);
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
  const _ = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, q = be(
    () => Te(v),
    [v]
  ), G = q.length, k = be(() => e.search || !j ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(j.toLowerCase())
  ), [e.search, j, q]), K = (S, M) => {
    if (w.current?.open === !0 || A === !0)
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
    const b = Array.isArray(M) ? M : M ? [M] : [];
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
          }, { data: m } = await oe(l, h, e?.queryid), R = Array.isArray(m?.data) ? m.data[0] : m?.data;
          R && S.target.split(",").map((F) => F.trim()).forEach((F) => {
            R[F] !== void 0 && r.setFieldValue(F, R[F]);
          });
        }
        for (const a of b) {
          const o = a.src;
          if (!a || typeof a != "object" || !o || typeof o != "object" || !l) continue;
          const h = Y(o?.where ?? {}, {
            refid: c
          }), m = {
            ...o,
            table: o.table,
            cols: o.columns,
            where: h
          }, { data: R } = await oe(l, m, e?.queryid);
          let F = e.valueKey ?? "value", H = e.labelKey ?? "title";
          const W = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R, z = Array.isArray(W) ? W.map(re) : [], U = te(
            F,
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
    const S = Fe(e.columns ?? ""), M = new AbortController(), c = setTimeout(async () => {
      try {
        const b = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, $ = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: b
        };
        let a = {};
        Array.isArray(S) && S.forEach((W) => {
          a[W] = [j, "LIKE"];
        });
        let o = e.valueKey ?? "value", h = e.labelKey ?? "title";
        const { data: m } = await oe(l, $, e?.queryid, a), R = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m, F = Array.isArray(R) ? R.map(re) : [], H = te(
          o,
          h,
          { data: F },
          e.groupKey
        );
        x(H);
      } catch (b) {
        if (B.isCancel(b)) return;
        console.error("Search fetch failed", b);
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
      const b = await Promise.all(
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
        c ? b.map(($) => $.path) : b[0]?.path
      );
    } catch (b) {
      console.error("File upload failed", b), r.setFieldError(s, "File upload failed");
    }
  };
  switch (console.log("options", v), e.type) {
    case "autocomplete": {
      const c = r.values[s] ?? "", b = j !== "" ? j : je(v, c) ?? String(c ?? ""), $ = (o) => {
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
            className: `${_} ${V}`,
            value: b,
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
              K(o, !0);
            },
            disabled: e.disabled
          }
        ),
        A && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: g,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 ? k.map(([o, h], m) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": m,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === m ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(o),
                children: h
              },
              o
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${b}" ` })
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
              onKeyDown: (b) => K(b, !1),
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
                      onChange: (b) => {
                        E(b.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  k.length > 0 ? k.map(([b, $], a) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${b}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(b) ? "bg-indigo-50 text-indigo-600 font-medium" : T === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${b}`,
                            type: "checkbox",
                            checked: c?.includes(b),
                            onChange: (o) => {
                              const h = o.target.checked ? [...c, b] : c?.filter((m) => m !== b);
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
                    b
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
            onKeyDown: (c) => K(c, !0),
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
                    onKeyDown: (c) => K(c, !0),
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
                k.length > 0 ? k.map(([c, b], $) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": $,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, c), w.current?.removeAttribute("open"), E(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === c ? "bg-indigo-50 text-indigo-600 font-medium" : T === $ ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: b
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
              className: `${_} ${V} min-h-[120px] resize-none`,
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
              className: `${_} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || "Please select an option" }),
                !we(v) && Object.entries(v).map(([c, b]) => /* @__PURE__ */ t.jsx("option", { value: c, className: "py-2", children: b }, c)),
                we(v) && Object.entries(v).map(([c, b]) => /* @__PURE__ */ t.jsx("optgroup", { label: c, children: Object.entries(b).map(([$, a]) => /* @__PURE__ */ t.jsx("option", { value: $, children: a }, $)) }, c))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([c, b]) => /* @__PURE__ */ t.jsxs(
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
              b
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
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([b, $]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: c.includes(b),
                  onChange: (a) => {
                    const o = a.target.checked ? [...c, b] : c.filter((h) => h !== b);
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
          b
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const c = r.values[s], b = j.trim(), $ = Array.isArray(v) ? v : Object.entries(v || {}).map(([m, R]) => ({ value: m, label: R })), a = (m) => {
        m && !c.includes(m) && (r.setFieldValue(s, [...c, m]), E(""));
      }, o = (m) => {
        r.setFieldValue(
          s,
          c.filter((R) => R !== m)
        );
      }, h = (m) => $.find((R) => R.value === m)?.label ?? m;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              c.map((m) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: h(m) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (R) => {
                          R.stopPropagation(), e.disabled || o(m);
                        },
                        onMouseDown: (R) => R.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                m
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: j,
                  onChange: (m) => E(m.target.value),
                  onKeyDown: (m) => {
                    (m.key === "Enter" || m.key === ",") && (m.preventDefault(), a(b));
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
              className: `${_} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: s,
              multiple: S,
              onChange: (c) => {
                const b = c.currentTarget.files;
                b && X(b);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((c) => {
          const b = c?.split("/").pop();
          return b ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: b }) }, c) : null;
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
              className: `${_} ${V} min-h-[200px] font-mono text-sm resize-y`
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
              className: `${_} ${V} ${e.icon ? "pl-9" : ""}`
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
              className: `${_} ${V} ${e.icon ? "pl-9" : ""} `,
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
function _e({ title: e, children: r, isFirst: d }) {
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
  methods: u = {},
  components: p = {},
  sqlOpsUrls: i = {},
  refid: f
}) {
  const [v, x] = L.useState({}), j = (g, w) => {
    x((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
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
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], A) => /* @__PURE__ */ t.jsx(_e, { title: g, isFirst: A === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
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
            methods: u,
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
  onSubmit: l = (x) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: p = {},
  sqlOpsUrls: i = {},
  widget: f,
  refid: v
}) {
  const x = Object.keys(r), [j, E] = L.useState(0), [T, C] = L.useState({}), g = (N, P) => {
    C((q) => ({
      ...q,
      [N]: P
    }));
  }, { initialValues: w, validationSchema: A, stepperSchemas: y } = L.useMemo(() => {
    const N = {}, P = {}, q = {};
    return f ? Object.entries(r).forEach(([G, k]) => {
      const K = {};
      se(k, N, K, d), q[G] = K;
    }) : Object.entries(r).forEach(([G, k]) => {
      se(k, N, P, d);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, d, f]), I = x[j] ?? null, O = f && I ? y[I] ?? {} : A, s = le({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(O),
    onSubmit: (N) => {
      f ? (j < x.length - 1 && E((P) => P + 1), j === x.length - 1 && l(N)) : l(N);
    }
  }), _ = async (N) => {
    if (N.preventDefault(), !f) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((q, G) => ({ ...q, [G]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(N);
  }, V = () => {
    E((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: x.map((N, P) => /* @__PURE__ */ t.jsx(
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
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
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
                    methods: u,
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
                x.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: x.map((N, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === j ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      x[j]
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
  methods: u = {},
  sqlOpsUrls: p = {},
  refid: i
}) {
  const f = Ie(r, p.operation), [v, x] = L.useState({}), j = (g, w) => {
    x((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return f.forEach((A) => {
      se([A], g, w, d);
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
            methods: u,
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
  methods: u = {},
  components: p = {},
  sqlOpsUrls: i = {},
  refid: f
}) {
  const [v, x] = L.useState({}), j = (g, w) => {
    x((A) => ({
      ...A,
      [g]: w
    }));
  }, { initialValues: E, validationSchema: T } = L.useMemo(() => {
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
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      l(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], A) => /* @__PURE__ */ t.jsx(Le, { title: g, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
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
            methods: u,
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
    let n = !1, u;
    d && (n = !0, u = d), console.log("skipquery,dbopsid", n, d), n || (u = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    })), console.log("dbopsId", u);
    const p = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: u, datahash: l },
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
function Ke({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: d = null,
  onCancel: l = () => {
  },
  components: n = {},
  callback: u = () => {
  },
  initialvalues: p = {}
}) {
  let i = Oe(e);
  const f = e.endPoints, v = e?.source?.refid, x = Re(e?.fields ?? {}, f?.operation), [j, E] = L.useState(p), T = L.useMemo(() => Ce(e.fields), [e.fields]);
  L.useEffect(() => {
    let w = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (!y?.type) {
        w && E({});
        return;
      }
      if (y.type === "method") {
        const I = y.method, O = I ? r[I] : void 0;
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
    const A = e?.source ?? {};
    let y = null;
    if (T.length > 0)
      try {
        y = await $e();
      } catch (O) {
        console.log("catch fetchGeolocation", O), y = null;
      }
    const I = {
      ...w,
      ...Object.fromEntries(
        T.map((O) => [O, y])
      )
    };
    if (A.type === "method") {
      const O = A.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const _ = await Promise.resolve(s(I));
          u?.(_);
        } catch (_) {
          u?.(_), console.error("Method execution failed:", _);
        }
    }
    if (A.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await B({
          method: A.method || "POST",
          url: f.baseURL + A.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
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
        let s = !1, _;
        A?.dbopsid && (s = !0, _ = A?.dbopsid);
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
              refid: v
            })
          }), _ = (await B({
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
            refid: _,
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
        groupedFields: x,
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
        groupedFields: x,
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
        groupedFields: x,
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
  Ke as LogiksForm
};
