import L, { useState as X, useRef as be, useEffect as ee, useMemo as xe } from "react";
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
  function d(o, n, u) {
    var b = null;
    if (u !== void 0 && (b = "" + u), n.key !== void 0 && (b = "" + n.key), "key" in n) {
      u = {};
      for (var c in n)
        c !== "key" && (u[c] = n[c]);
    } else u = n;
    return n = u.ref, {
      $$typeof: e,
      type: o,
      key: b,
      ref: n !== void 0 ? n : null,
      props: u
    };
  }
  return te.Fragment = r, te.jsx = d, te.jsxs = d, te;
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
        case g:
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
          case y:
            return (a._context.displayName || "Context") + ".Consumer";
          case O:
            var l = a.render;
            return a = a.displayName, a || (a = l.displayName || l.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return l = a.displayName || null, l !== null ? l : e(a.type) || "Memo";
          case N:
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
    function d(a) {
      try {
        r(a);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var m = l.error, h = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return m.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), r(a);
      }
    }
    function o(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === N)
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
    function u() {
      return Error("react-stack-top-frame");
    }
    function b(a) {
      if (F.call(a, "key")) {
        var l = Object.getOwnPropertyDescriptor(a, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, l) {
      function m() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: m,
        configurable: !0
      });
    }
    function f() {
      var a = e(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, l, m, h, $, _, G, J) {
      return m = _.ref, a = {
        $$typeof: T,
        type: a,
        key: l,
        props: _,
        _owner: $
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: G
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function x(a, l, m, h, $, _, G, J) {
      var z = l.children;
      if (z !== void 0)
        if (h)
          if (Y(z)) {
            for (h = 0; h < z.length; h++)
              j(z[h]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(z);
      if (F.call(l, "key")) {
        z = e(a);
        var U = Object.keys(l).filter(function(Ne) {
          return Ne !== "key";
        });
        h = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", R[z + h] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), R[z + h] = !0);
      }
      if (z = null, m !== void 0 && (d(m), z = "" + m), b(l) && (d(l.key), z = "" + l.key), "key" in l) {
        m = {};
        for (var me in l)
          me !== "key" && (m[me] = l[me]);
      } else m = l;
      return z && c(
        m,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        z,
        _,
        $,
        n(),
        m,
        G,
        J
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var A = L, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), K = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, Y = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, i = A["react-stack-bottom-frame"].bind(
      A,
      u
    )(), p = Z(o(u)), R = {};
    re.Fragment = g, re.jsx = function(a, l, m, h, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return x(
        a,
        l,
        m,
        !1,
        h,
        $,
        _ ? Error("react-stack-top-frame") : i,
        _ ? Z(o(a)) : p
      );
    }, re.jsxs = function(a, l, m, h, $) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return x(
        a,
        l,
        m,
        !0,
        h,
        $,
        _ ? Error("react-stack-top-frame") : i,
        _ ? Z(o(a)) : p
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
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((o) => o.group) ? "tab" : "simple";
}
function Re(e, r = "create", d = "Info") {
  const o = {};
  let n = !1;
  if (Object.values(e).forEach((b) => {
    b.group && (n = !0);
  }), !n) return {};
  const u = [];
  return Object.entries(e).forEach(([b, c]) => {
    if (c.vmode === "edit" && r === "create") return;
    const f = { ...c, name: b };
    if (c.group) {
      const v = c.group;
      o[v] || (o[v] = []), o[v].push(f);
    } else
      u.push(f);
  }), u.length > 0 ? {
    [d]: u,
    ...o
  } : o;
}
function ve(e, r = "create") {
  const d = {};
  return Object.keys(e).forEach((o) => {
    e[o].vmode === "edit" && r === "create" || (d[o] = {
      label: o,
      required: e[o].required ?? !1
    });
  }), d;
}
const se = (e, r, d, o) => {
  e.forEach((n) => {
    const u = n?.name;
    if (!u) return;
    let b = o?.[u];
    b == null && (b = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[u] = Array.isArray(b) ? b : typeof b == "string" ? b.split(",").map((f) => f.trim()).filter(Boolean) : [] : n.type === "json" ? r[u] = typeof b == "object" && b !== null ? JSON.stringify(b, null, 2) : b ?? "" : n.type === "date" ? r[u] = typeof b == "string" ? b.slice(0, 10) : "" : n.type === "time" ? typeof b == "string" ? b.includes("T") ? r[u] = b.slice(11, 16) : r[u] = b.slice(0, 5) : r[u] = "" : u === "blocked" || u === "blacklist" ? r[u] = String(b ?? "false") : r[u] = b ?? "";
    let c;
    n.type === "file" ? c = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? c = D.array().of(D.string()) : n.type === "email" ? c = D.string().email("Invalid email") : n.type === "number" ? c = D.number().typeError("Must be a number") : n.type === "json" ? c = D.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : c = D.string(), n.required && (c = c.required(
      n.error_message || `${n.label || u} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (c = c.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([f, v]) => {
      switch (f) {
        case "email":
          v && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(v),
            `Must match pattern: ${v}`
          );
          break;
        case "date":
          c = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((x, j) => {
            if (typeof j == "string") {
              const A = j.replace(/-/g, "/"), [T, C, g] = A.split("/");
              if (T && C && g)
                return /* @__PURE__ */ new Date(`${g}-${C}-${T}`);
            }
            return x;
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
          c = D.number().typeError("Must be a decimal").transform((x, j) => {
            if (j == null || j === "") return;
            const A = Number(j);
            if (isNaN(A)) return x;
            if (typeof x == "number" && !isNaN(x)) {
              const T = Number(x);
              return Number.isInteger(T) ? Number(A.toFixed(T)) : A;
            }
            return A;
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
            (x) => x && x.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (x) => x && x.toLowerCase()
          );
          break;
        case "length-min": {
          const x = Number(v);
          isNaN(x) || (c = c.min(x, `Minimum length is ${x}`));
          break;
        }
        case "length-max": {
          const x = Number(v);
          isNaN(x) || (c = c.max(x, `Maximum length is ${x}`));
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
const de = (e) => e === !0 || e === "true", W = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (d, o) => r[o] !== void 0 ? String(r[o]) : d
) : Array.isArray(e) ? e.map((d) => W(d, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([d, o]) => [
    W(d, r),
    W(o, r)
  ])
) : e, H = (e, r, d, o) => {
  if (console.log("items", d), !Array.isArray(d) || d.length === 0)
    return {};
  const n = o ?? (d[0] && typeof d[0] == "object" && "category" in d[0] ? "category" : void 0);
  if (!n) {
    const b = {};
    return d.forEach((c) => {
      c[e] != null && c[r] != null && (b[c[e]] = c[r]);
    }), b;
  }
  const u = {};
  return d.forEach((b) => {
    const c = b[n] ?? "Others", f = b[e], v = b[r];
    f == null || v == null || (u[c] || (u[c] = {}), u[c][f] = v);
  }), u;
}, je = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const o of Object.values(e))
    if (r in o)
      return o[r];
}, Te = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (o) => [
        String(o.value),
        String(o.title ?? o.label ?? o.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([o, n]) => [String(o), n]) : Object.values(e).flatMap(
    (o) => Object.entries(o).map(
      ([n, u]) => [String(n), u]
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
      (o, n) => {
        navigator.geolocation.getCurrentPosition(o, n, {
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
  return Object.entries(e).filter(([, d]) => !(d.vmode === "edit" && r === "create")).map(([d, o]) => ({
    ...o,
    name: d
  }));
}
async function oe(e, r, d, o = {}) {
  try {
    console.log("query", r);
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
        filter: o,
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
    const d = r.match(/^(.+?)\s+as\s+.+$/i);
    return d ? d[1]?.trim() : r;
  }).filter((r) => !!r);
}
const Q = (e) => {
  const r = {};
  console.log("row", e);
  for (const [d, o] of Object.entries(e)) {
    const n = d.includes(".") ? d.split(".").pop() : d;
    if (n in r) {
      console.warn(`Duplicate key after normalization: ${n}`);
      continue;
    }
    r[n] = o;
  }
  return console.log("result", r), r;
};
function ue({
  field: e,
  formik: r,
  methods: d = {},
  sqlOpsUrls: o,
  refid: n,
  optionsOverride: u,
  setFieldOptions: b
}) {
  const [c, f] = X(!1), [v, x] = X(
    u ?? e.options ?? {}
  ), [j, A] = X(""), [T, C] = X(0), g = be(null), w = be(null), [E, y] = X(!1), I = L.useRef(j);
  L.useEffect(() => {
    I.current = j;
  }, [j]);
  const O = (S) => {
    S.currentTarget.open || A("");
  };
  ee(() => {
    u && Object.keys(u).length !== 0 && x(u);
  }, [u]), ee(() => {
    const S = (M) => {
      w.current && !w.current.contains(M.target) && (w.current.open = !1, A(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, []);
  const s = e.name;
  L.useEffect(() => {
    let S = !0;
    return (async () => {
      let i = e.valueKey ?? "value", p = e.labelKey ?? "title";
      if (e?.options) {
        console.log("field?.options", e?.options);
        const a = Array.isArray(e?.options) ? e?.options : [e?.options];
        console.log("rawItems", a);
        const l = Array.isArray(a) ? a.map(Q) : [];
        console.log("normalizedItems", l);
        const m = H(i, p, l, e.groupKey);
        console.log("mappedddddddddddddddddddddddd", m), x(m);
        return;
      }
      const R = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, l = a ? d[a] : void 0;
        if (l)
          try {
            const m = await Promise.resolve(l()), h = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m, $ = Array.isArray(h) ? h.map(Q) : [], _ = H(i, p, $, e.groupKey);
            S && x(_);
          } catch (m) {
            console.error("Method execution failed:", m), S && x({});
          }
        else
          S && x({});
      }
      if (R.type === "api" && R.url)
        try {
          const a = await B({
            method: R.method || "GET",
            url: R.url,
            data: R.body ?? {},
            params: R.params ?? {},
            headers: R.headers ?? {}
          }), l = Array.isArray(a?.data?.data) ? a.data.data : Array.isArray(a?.data) ? a.data : a, m = Array.isArray(l) ? l.map(Q) : [], h = H(i, p, m, e.groupKey);
          S && x(h);
        } catch (a) {
          console.error("API execution failed:", a), S && x({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!o) {
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
          const l = await oe(o, a, e?.queryid), m = Array.isArray(l?.data?.data) ? l.data.data : Array.isArray(l?.data) ? l.data : l, h = Array.isArray(m) ? m.map(Q) : [], $ = H(i, p, h, e.groupKey);
          S && x($);
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
    () => Te(v),
    [v]
  );
  console.log("flatOptions", q);
  const K = q.length, F = xe(() => e.search || !j ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(j.toLowerCase())
  ), [e.search, j, q]), Y = (S, M) => {
    if (w.current?.open === !0 || E === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), C(
          (i) => i + 1 < F.length ? i + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), C(
          (i) => i - 1 >= 0 ? i - 1 : F.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [i] = F[T] || [];
        i && r.setFieldValue(e.name, M ? i : [...r.values[e.name], i]), w.current && (w.current.open = !1);
      } else S.key === "Escape" && (w.current.open = !1, A(""), y(!1));
  };
  ee(() => {
    g.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), ee(() => {
    T >= F.length && C(0);
  }, [F, T]), ee(() => {
    const S = e.autocomplete, M = e.ajaxchain;
    if (!S && !M) return;
    const i = r.values[e.name];
    if (!i) return;
    const p = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Pe(S)) {
          const a = S.src;
          if (!a || !o) return;
          const l = W(a.where ?? {}, {
            refid: i
          }), m = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: l
          }, { data: h } = await oe(o, m, e?.queryid), $ = Array.isArray(h?.data) ? h.data[0] : h?.data;
          $ && S.target.split(",").map((_) => _.trim()).forEach((_) => {
            $[_] !== void 0 && r.setFieldValue(_, $[_]);
          });
        }
        for (const a of p) {
          const l = a.src;
          if (!a || typeof a != "object" || !l || typeof l != "object" || !o) continue;
          let m;
          if (!l.queryid) {
            if (!l.table || !l.columns)
              throw new Error("SQL query requires field.table");
            const U = W(l?.where ?? {}, {
              refid: i
            });
            m = {
              ...l,
              table: l.table,
              cols: l.columns,
              where: U
            };
          }
          const { data: h } = await oe(o, m, l?.queryid);
          let $ = e.valueKey ?? "value", _ = e.labelKey ?? "title";
          const G = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, J = Array.isArray(G) ? G.map(Q) : [], z = H(
            $,
            _,
            J,
            e.groupKey
          );
          b?.(a.target, z);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !j.trim() || !e.table || !o) return;
    const S = Fe(e.columns ?? ""), M = new AbortController(), i = setTimeout(async () => {
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
        let a = e.valueKey ?? "value", l = e.labelKey ?? "title";
        const { data: m } = await oe(o, p, e?.queryid, R), h = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m, $ = Array.isArray(h) ? h.map(Q) : [], _ = H(
          a,
          l,
          { data: $ },
          e.groupKey
        );
        x(_);
      } catch (p) {
        if (B.isCancel(p)) return;
        console.error("Search fetch failed", p);
      }
    }, 500);
    return () => {
      clearTimeout(i), M.abort();
    };
  }, [j, n]);
  const Z = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const M = o?.baseURL + o?.uploadURL;
    if (!M) {
      console.error("No Upload URL ");
      return;
    }
    const i = e.multiple === !0;
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
              Authorization: `Bearer ${o?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        i ? p.map((R) => R.path) : p[0]?.path
      );
    } catch (p) {
      console.error("File upload failed", p), r.setFieldError(s, "File upload failed");
    }
  };
  switch (console.log("options", v), e.type) {
    case "autocomplete": {
      const i = r.values[s] ?? "", p = j !== "" ? j : je(v, i) ?? String(i ?? ""), R = (l) => {
        const m = l.target.value;
        A(m), C(0), m.trim() ? y(!0) : (y(!1), r.setFieldValue(s, ""));
      }, a = (l) => {
        r.setFieldValue(s, l), A(""), y(!1);
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
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: (l) => {
              if (l.key === "Enter") {
                if (l.preventDefault(), F[T]) {
                  const [m] = F[T];
                  r.setFieldValue(s, m);
                } else j.trim() && r.setFieldValue(s, j.trim());
                y(!1);
                return;
              }
              Y(l, !0);
            },
            disabled: e.disabled
          }
        ),
        E && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: g,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: F.length > 0 ? F.map(([l, m], h) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": h,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === h ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(l),
                children: m
              },
              l
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
              onKeyDown: (p) => Y(p, !1),
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
                        ${i?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : T === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${p}`,
                            type: "checkbox",
                            checked: i?.includes(p),
                            onChange: (l) => {
                              const m = l.target.checked ? [...i, p] : i?.filter((h) => h !== p);
                              r.setFieldValue(s, m);
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
            onKeyDown: (i) => Y(i, !0),
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
                    onChange: (i) => {
                      A(i.target.value), C(0);
                    },
                    onKeyDown: (i) => Y(i, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                F.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (i) => {
                      i.preventDefault(), i.stopPropagation(), r.setFieldValue(s, ""), w.current?.removeAttribute("open"), A("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                F.length > 0 ? F.map(([i, p], R) => (console.log("label", p), /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, i), w.current?.removeAttribute("open"), A(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === i ? "bg-indigo-50 text-indigo-600 font-medium" : T === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: p
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${k} ${V} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
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
              className: `${k} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !we(v) && Object.entries(v).map(([i, p]) => /* @__PURE__ */ t.jsx("option", { value: i, className: "py-2", children: p }, i)),
                we(v) && Object.entries(v).map(([i, p]) => /* @__PURE__ */ t.jsx("optgroup", { label: i, children: Object.entries(p).map(([R, a]) => /* @__PURE__ */ t.jsx("option", { value: R, children: a }, R)) }, i))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([i, p]) => /* @__PURE__ */ t.jsxs(
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
              p
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
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([p, R]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: i.includes(p),
                  onChange: (a) => {
                    const l = a.target.checked ? [...i, p] : i.filter((m) => m !== p);
                    r.setFieldValue(s, l);
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
      const i = r.values[s], p = j.trim(), R = Array.isArray(v) ? v : Object.entries(v || {}).map(([h, $]) => ({ value: h, label: $ })), a = (h) => {
        h && !i.includes(h) && (r.setFieldValue(s, [...i, h]), A(""));
      }, l = (h) => {
        r.setFieldValue(
          s,
          i.filter(($) => $ !== h)
        );
      }, m = (h) => R.find(($) => $.value === h)?.label ?? h;
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
              i.map((h) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: m(h) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: ($) => {
                          $.stopPropagation(), e.disabled || l(h);
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
                  value: j,
                  onChange: (h) => A(h.target.value),
                  onKeyDown: (h) => {
                    (h.key === "Enter" || h.key === ",") && (h.preventDefault(), a(p));
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: s,
              multiple: S,
              onChange: (i) => {
                const p = i.currentTarget.files;
                p && Z(p);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${c ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((i) => {
          const p = i?.split("/").pop();
          return p ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: p }) }, i) : null;
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
              className: `${k} ${V} min-h-[200px] font-mono text-sm resize-y`
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""}`
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
              className: `${k} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
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
function _e({ title: e, children: r, isFirst: d }) {
  const [o, n] = X(d);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => n(!o),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${o ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${o ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${o ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${o ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function ke({
  title: e,
  groupedFields: r,
  data: d,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: b = {},
  sqlOpsUrls: c = {},
  refid: f
}) {
  const [v, x] = L.useState({}), j = (g, w) => {
    x((E) => ({
      ...E,
      [g]: w
    }));
  }, { initialValues: A, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], E) => /* @__PURE__ */ t.jsx(_e, { title: g, isFirst: E === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: f,
            sqlOpsUrls: c,
            components: b,
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
  onSubmit: o = (x) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: b = {},
  sqlOpsUrls: c = {},
  widget: f,
  refid: v
}) {
  const x = Object.keys(r), [j, A] = L.useState(0), [T, C] = L.useState({}), g = (N, P) => {
    C((q) => ({
      ...q,
      [N]: P
    }));
  }, { initialValues: w, validationSchema: E, stepperSchemas: y } = L.useMemo(() => {
    const N = {}, P = {}, q = {};
    return f ? Object.entries(r).forEach(([K, F]) => {
      const Y = {};
      se(F, N, Y, d), q[K] = Y;
    }) : Object.entries(r).forEach(([K, F]) => {
      se(F, N, P, d);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, d, f]), I = x[j] ?? null, O = f && I ? y[I] ?? {} : E, s = le({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(O),
    onSubmit: (N) => {
      f ? (j < x.length - 1 && A((P) => P + 1), j === x.length - 1 && o(N)) : o(N);
    }
  }), k = async (N) => {
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
    A((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: x.map((N, P) => /* @__PURE__ */ t.jsx(
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
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((N, P) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ie[ce(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ue,
                  {
                    refid: v,
                    sqlOpsUrls: c,
                    field: N,
                    formik: s,
                    methods: u,
                    components: b,
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
  onSubmit: o = (f) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  sqlOpsUrls: b = {},
  refid: c
}) {
  const f = Ie(r, b.operation), [v, x] = L.useState({}), j = (g, w) => {
    x((E) => ({
      ...E,
      [g]: w
    }));
  }, { initialValues: A, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return f.forEach((E) => {
      se([E], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [f, d]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((g, w) => de(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && b.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: c,
            sqlOpsUrls: b,
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
function qe({
  title: e,
  groupedFields: r,
  data: d,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: u = {},
  components: b = {},
  sqlOpsUrls: c = {},
  refid: f
}) {
  const [v, x] = L.useState({}), j = (g, w) => {
    x((E) => ({
      ...E,
      [g]: w
    }));
  }, { initialValues: A, validationSchema: T } = L.useMemo(() => {
    const g = {}, w = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], g, w, d);
    }), {
      initialValues: g,
      validationSchema: w
    };
  }, [r, d]), C = le({
    initialValues: A,
    enableReinitialize: !0,
    validationSchema: D.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, w], E) => /* @__PURE__ */ t.jsx(Le, { title: g, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: w.map((y, I) => de(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ie[ce(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: f,
            sqlOpsUrls: c,
            components: b,
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
)).data.refid, De = {
  async fetch(e, r, d) {
    const o = await he(e);
    let n = !1, u;
    d && (n = !0, u = d), console.log("skipquery,dbopsid", n, d), n || (u = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    })), console.log("dbopsId", u);
    const b = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: u, datahash: o },
      { headers: ae(e) }
    );
    return b.data?.data ?? b.data;
  },
  async create(e, r) {
    const d = await he(e), o = await pe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: d
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: o, fields: r.values, datahash: d },
      { headers: ae(e) }
    )).data;
  },
  async update(e, r) {
    const d = await he(e), o = await pe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: d
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: o, fields: r.values, datahash: d },
      { headers: ae(e) }
    )).data;
  }
};
function Ge({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: d = null,
  onCancel: o = () => {
  },
  components: n = {},
  callback: u = () => {
  },
  initialvalues: b = {}
}) {
  let c = Oe(e);
  const f = e.endPoints, v = e?.source?.refid, x = Re(e?.fields ?? {}, f?.operation), [j, A] = L.useState(b), T = L.useMemo(() => Ce(e.fields), [e.fields]);
  L.useEffect(() => {
    let w = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (!y?.type) {
        w && A({});
        return;
      }
      if (y.type === "method") {
        const I = y.method, O = I ? r[I] : void 0;
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
      if (y.type === "api" && f?.operation !== "create")
        try {
          const I = await B({
            method: y.method || "GET",
            url: y.url ?? "",
            data: y.body ?? {},
            params: y.params ?? {},
            headers: y.headers ?? {}
          });
          w && A(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), w && A({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0" && f?.operation !== "create") {
        if (!f) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await De.fetch(f, {
            source: {
              ...y,
              table: y.table,
              columns: y.columns,
              where: W(y.where, {
                refid: v
              })
            },
            fields: ve(e.fields, f.operation)
          }, y?.dbopsid);
          w && A(I);
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
    const E = e?.source ?? {};
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
    if (E.type === "method") {
      const O = E.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const k = await Promise.resolve(s(I));
          u?.(k);
        } catch (k) {
          u?.(k), console.error("Method execution failed:", k);
        }
    }
    if (E.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await B({
          method: E.method || "POST",
          url: f.baseURL + E.endpoint,
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
              refid: v
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
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: f,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: x,
        data: j,
        onSubmit: C,
        onCancel: o,
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
        onCancel: o,
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
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: f,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: g[c] ?? g.simple });
}
export {
  Ge as LogiksForm
};
