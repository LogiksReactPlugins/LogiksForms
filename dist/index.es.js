import z, { useState as Z, useRef as xe, useEffect as te, useMemo as be } from "react";
import K from "axios";
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
  function c(i, l, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), l.key !== void 0 && (g = "" + l.key), "key" in l) {
      m = {};
      for (var u in l)
        u !== "key" && (m[u] = l[u]);
    } else m = l;
    return l = m.ref, {
      $$typeof: e,
      type: i,
      key: g,
      ref: l !== void 0 ? l : null,
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
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === k ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case j:
          return "Fragment";
        case $:
          return "Profiler";
        case S:
          return "StrictMode";
        case a:
          return "Suspense";
        case _:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case C:
            return "Portal";
          case F:
            return (s.displayName || "Context") + ".Provider";
          case v:
            return (s._context.displayName || "Context") + ".Consumer";
          case O:
            var o = s.render;
            return s = s.displayName, s || (s = o.displayName || o.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case D:
            return o = s.displayName || null, o !== null ? o : e(s.type) || "Memo";
          case w:
            o = s._payload, s = s._init;
            try {
              return e(s(o));
            } catch {
            }
        }
      return null;
    }
    function r(s) {
      return "" + s;
    }
    function c(s) {
      try {
        r(s);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var d = o.error, b = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return d.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), r(s);
      }
    }
    function i(s) {
      if (s === j) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === w)
        return "<...>";
      try {
        var o = e(s);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var s = G.A;
      return s === null ? null : s.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function g(s) {
      if (M.call(s, "key")) {
        var o = Object.getOwnPropertyDescriptor(s, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, o) {
      function d() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: d,
        configurable: !0
      });
    }
    function y() {
      var s = e(this.type);
      return A[s] || (A[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function f(s, o, d, b, p, R, V, Y) {
      return d = R.ref, s = {
        $$typeof: T,
        type: s,
        key: o,
        props: R,
        _owner: p
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function x(s, o, d, b, p, R, V, Y) {
      var L = o.children;
      if (L !== void 0)
        if (b)
          if (W(L)) {
            for (b = 0; b < L.length; b++)
              N(L[b]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(L);
      if (M.call(o, "key")) {
        L = e(s);
        var H = Object.keys(o).filter(function(we) {
          return we !== "key";
        });
        b = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", h[L + b] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          L,
          H,
          L
        ), h[L + b] = !0);
      }
      if (L = null, d !== void 0 && (c(d), L = "" + d), g(o) && (c(o.key), L = "" + o.key), "key" in o) {
        d = {};
        for (var ee in o)
          ee !== "key" && (d[ee] = o[ee]);
      } else d = o;
      return L && u(
        d,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), f(
        s,
        L,
        R,
        p,
        l(),
        d,
        V,
        Y
      );
    }
    function N(s) {
      typeof s == "object" && s !== null && s.$$typeof === T && s._store && (s._store.validated = 1);
    }
    var E = z, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), F = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), G = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, W = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var B, A = {}, P = E["react-stack-bottom-frame"].bind(
      E,
      m
    )(), n = J(i(m)), h = {};
    ae.Fragment = j, ae.jsx = function(s, o, d, b, p) {
      var R = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        s,
        o,
        d,
        !1,
        b,
        p,
        R ? Error("react-stack-top-frame") : P,
        R ? J(i(s)) : n
      );
    }, ae.jsxs = function(s, o, d, b, p) {
      var R = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        s,
        o,
        d,
        !0,
        b,
        p,
        R ? Error("react-stack-top-frame") : P,
        R ? J(i(s)) : n
      );
    };
  }()), ae;
}
var ve;
function Ee() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? oe.exports = Se() : oe.exports = Ae()), oe.exports;
}
var t = Ee();
function $e(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((i) => i.group) ? "tab" : "simple";
}
function Oe(e, r = "create", c = "Info") {
  const i = {};
  let l = !1;
  if (Object.values(e).forEach((g) => {
    g.group && (l = !0);
  }), !l) return {};
  const m = [];
  return Object.entries(e).forEach(([g, u]) => {
    if (u.vmode === "edit" && r === "create") return;
    const y = { ...u, name: g };
    if (u.group) {
      const f = u.group;
      i[f] || (i[f] = []), i[f].push(y);
    } else
      m.push(y);
  }), m.length > 0 ? {
    [c]: m,
    ...i
  } : i;
}
function fe(e, r = "create") {
  const c = {};
  return Object.keys(e).forEach((i) => {
    e[i].vmode === "edit" && r === "create" || (c[i] = {
      label: i,
      required: e[i].required ?? !1
    });
  }), c;
}
const ne = (e, r, c, i) => {
  e.forEach((l) => {
    const m = l?.name;
    if (!m) return;
    let g = i?.[m];
    g == null && (g = l.default), l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? r[m] = Array.isArray(g) ? g : typeof g == "string" ? g.split(",").map((y) => y.trim()).filter(Boolean) : [] : l.type === "json" ? r[m] = typeof g == "object" && g !== null ? JSON.stringify(g, null, 2) : g ?? "" : l.type === "date" ? r[m] = typeof g == "string" ? g.slice(0, 10) : "" : l.type === "time" ? typeof g == "string" ? g.includes("T") ? r[m] = g.slice(11, 16) : r[m] = g.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(g ?? "false") : r[m] = g ?? "";
    let u;
    l.type === "file" ? u = l.multiple ? q.array().of(q.mixed()) : q.mixed() : l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? u = q.array().of(q.string()) : l.type === "email" ? u = q.string().email("Invalid email") : l.type === "number" ? u = q.number().typeError("Must be a number") : l.type === "json" ? u = q.string().test("json", "Invalid JSON", (y) => {
      if (!y) return !0;
      try {
        return JSON.parse(y), !0;
      } catch {
        return !1;
      }
    }) : u = q.string(), l.required && (u = u.required(
      l.error_message || `${l.label || m} is required`
    )), l?.validate?.regex && typeof l.validate.regex == "string" && (u = u.matches(
      new RegExp(l?.validate?.regex),
      l?.error_message || "Invalid input format"
    )), l?.validate && Object.entries(l.validate).forEach(([y, f]) => {
      switch (y) {
        case "email":
          f && (u = u.email("Invalid email format"));
          break;
        case "mobile":
          u = u.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          u = u.matches(
            new RegExp(f),
            `Must match pattern: ${f}`
          );
          break;
        case "date":
          u = q.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((x, N) => {
            if (typeof N == "string") {
              const E = N.replace(/-/g, "/"), [T, C, j] = E.split("/");
              if (T && C && j)
                return /* @__PURE__ */ new Date(`${j}-${C}-${T}`);
            }
            return x;
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
          u = q.number().typeError("Must be a decimal").transform((x, N) => {
            if (N == null || N === "") return;
            const E = Number(N);
            if (isNaN(E)) return x;
            if (typeof x == "number" && !isNaN(x)) {
              const T = Number(x);
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
            (x) => x && x.toUpperCase()
          );
          break;
        case "lower":
          u = u.transform(
            (x) => x && x.toLowerCase()
          );
          break;
        case "length-min": {
          const x = Number(f);
          isNaN(x) || (u = u.min(x, `Minimum length is ${x}`));
          break;
        }
        case "length-max": {
          const x = Number(f);
          isNaN(x) || (u = u.max(x, `Maximum length is ${x}`));
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
  (c, i) => r[i] !== void 0 ? String(r[i]) : c
) : Array.isArray(e) ? e.map((c) => U(c, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([c, i]) => [
    U(c, r),
    U(i, r)
  ])
) : e, Q = (e, r, c, i) => {
  if (!Array.isArray(c) || c.length === 0) return {};
  const l = i ?? (c[0] && typeof c[0] == "object" && "category" in c[0] ? "category" : void 0);
  if (!l) {
    const g = {};
    return c.forEach((u) => {
      const y = u[e], f = u[r];
      y != null && f != null && (g[String(y)] = String(f));
    }), g;
  }
  const m = {};
  return c.forEach((g) => {
    const u = g[l] ?? "Others", y = g[e], f = g[r];
    y == null || f == null || (m[u] || (m[u] = {}), m[u][String(y)] = String(f));
  }), m;
}, je = (e, r) => {
  if (!e || r == null) return;
  const c = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[c];
  for (const l of Object.values(e))
    if (c in l)
      return l[c];
}, Re = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (i) => [
        String(i.value),
        String(i.title ?? i.label ?? i.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([i, l]) => [String(i), l]) : Object.values(e).flatMap(
    (i) => Object.entries(i).map(
      ([l, m]) => [String(l), m]
    )
  ) : [];
}, Ne = (e) => {
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
      (i, l) => {
        navigator.geolocation.getCurrentPosition(i, l, {
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
function Fe(e, r = "create") {
  return Object.entries(e).filter(([, c]) => !(c.vmode === "edit" && r === "create")).map(([c, i]) => ({
    ...i,
    name: c
  }));
}
async function le(e, r, c, i = void 0, l = {}) {
  try {
    let m = c;
    return m || (m = (await K({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {} },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await K({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: m,
        filter: l,
        refid: i,
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
function Ie(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Pe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const c = r.match(/^(.+?)\s+as\s+.+$/i);
    return c ? c[1]?.trim() : r;
  }).filter((r) => !!r);
}
const X = (e) => {
  const r = {};
  for (const [c, i] of Object.entries(e)) {
    const l = c.includes(".") ? c.split(".").pop() : c;
    if (l in r) {
      console.warn(`Duplicate key after normalization: ${l}`);
      continue;
    }
    r[l] = i;
  }
  return r;
};
function me({
  field: e,
  formik: r,
  methods: c = {},
  sqlOpsUrls: i,
  refid: l,
  optionsOverride: m,
  setFieldOptions: g
}) {
  const [u, y] = Z(!1), [f, x] = Z(
    m ?? e.options ?? {}
  ), [N, E] = Z(""), [T, C] = Z(0), j = xe(null), S = xe(null), [$, v] = Z(!1), F = z.useRef(N);
  z.useEffect(() => {
    F.current = N;
  }, [N]);
  const O = (A) => {
    A.currentTarget.open || E("");
  };
  te(() => {
    m && Object.keys(m).length !== 0 && x(m);
  }, [m]), te(() => {
    const A = (P) => {
      S.current && !S.current.contains(P.target) && (S.current.open = !1, E(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, []);
  const a = e.name;
  z.useEffect(() => {
    let A = !0;
    return (async () => {
      let n = e.valueKey ?? "value", h = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const p = Object.values(e.options);
          if (p.length && typeof p[0] == "string") {
            x(e.options);
            return;
          }
        }
        const d = (Array.isArray(e.options) ? e.options : [e.options]).map(X), b = Q(
          n,
          h,
          d,
          e.groupKey
          // auto-uses `category` if present
        );
        x(b);
        return;
      }
      const s = e?.source ?? {};
      if (e.type === "dataMethod") {
        const o = e.method, d = o ? c[o] : void 0;
        if (d)
          try {
            const b = await Promise.resolve(d()), p = Array.isArray(b?.data?.data) ? b.data.data : Array.isArray(b?.data) ? b.data : b, R = Array.isArray(p) ? p.map(X) : [], V = Q(n, h, R, e.groupKey);
            A && x(V);
          } catch (b) {
            console.error("Method execution failed:", b), A && x({});
          }
        else
          A && x({});
      }
      if (s.type === "api" && s.url)
        try {
          const o = await K({
            method: s.method || "GET",
            url: s.url,
            data: s.body ?? {},
            params: s.params ?? {},
            headers: s.headers ?? {}
          }), d = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, b = Array.isArray(d) ? d.map(X) : [], p = Q(n, h, b, e.groupKey);
          A && x(p);
        } catch (o) {
          console.error("API execution failed:", o), A && x({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!i) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let o;
          if (e.type === "dataSelector")
            o = {
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
            o = {
              table: e.table,
              cols: e.columns,
              where: e.where ? l ? U(e.where, { refid: l }) : e.where : void 0
            };
          }
          const d = await le(i, o, e?.queryid), b = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, p = Array.isArray(b) ? b.map(X) : [], R = Q(n, h, p, e.groupKey);
          A && x(R);
        } catch (o) {
          console.error("API fetch failed:", o);
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
    l
  ]);
  const _ = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, D = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, I = (A) => A.icon ? /* @__PURE__ */ t.jsx("i", { className: A.icon }) : null, k = be(
    () => Re(f),
    [f]
  );
  console.log("flatOptions", k);
  const G = k.length, M = be(() => e.search || !N ? k : k.filter(
    ([, A]) => A.toLowerCase().includes(N.toLowerCase())
  ), [e.search, N, k]), W = (A, P) => {
    if (S.current?.open === !0 || $ === !0)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (n) => n + 1 < M.length ? n + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (n) => n - 1 >= 0 ? n - 1 : M.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [n] = M[T] || [];
        n && r.setFieldValue(e.name, P ? n : [...r.values[e.name], n]), S.current && (S.current.open = !1);
      } else A.key === "Escape" && (S.current.open = !1, E(""), v(!1));
  };
  te(() => {
    j.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), te(() => {
    T >= M.length && C(0);
  }, [M, T]), te(() => {
    const A = e.autocomplete, P = e.ajaxchain;
    if (!A && !P) return;
    const n = r.values[e.name];
    if (!n) return;
    const h = Array.isArray(P) ? P : P ? [P] : [];
    (async () => {
      try {
        if (Ie(A)) {
          const o = A.src;
          if (!o || !i) return;
          const d = U(o.where ?? {}, {
            refid: n
          }), b = {
            ...o,
            table: o.table,
            cols: o.columns,
            where: d
          }, { data: p } = await le(i, b, e?.queryid), R = Array.isArray(p?.data) ? p.data[0] : p?.data;
          R && A.target.split(",").map((V) => V.trim()).forEach((V) => {
            R[V] !== void 0 && r.setFieldValue(V, R[V]);
          });
        }
        for (const o of h) {
          const d = o.src;
          if (!o || typeof o != "object" || !d || typeof d != "object" || !i) continue;
          let b;
          if (!d.queryid) {
            if (!d.table || !d.columns)
              throw new Error("SQL query requires field.table");
            const ee = U(d?.where ?? {}, {
              refid: n
            });
            b = {
              ...d,
              table: d.table,
              cols: d.columns,
              where: ee
            };
          }
          const { data: p } = await le(i, b, d?.queryid, n);
          let R = e.valueKey ?? "value", V = e.labelKey ?? "title";
          const Y = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, L = Array.isArray(Y) ? Y.map(X) : [], H = Q(
            R,
            V,
            L,
            e.groupKey
          );
          g?.(o.target, H);
        }
      } catch (o) {
        console.error("Autocomplete / AjaxChain fetch failed", o);
      }
    })();
  }, [r.values[e.name]]), z.useEffect(() => {
    if (!e.search || !N.trim() || !e.table || !i) return;
    const A = Pe(e.columns ?? ""), P = new AbortController(), n = setTimeout(async () => {
      try {
        let h;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Y = l ? U(e.where ?? {}, {
            refid: l
          }) : e.where;
          h = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Y
          };
        }
        let s = {};
        Array.isArray(A) && A.forEach((Y) => {
          s[Y] = [N, "LIKE"];
        });
        let o = e.valueKey ?? "value", d = e.labelKey ?? "title";
        const { data: b } = await le(i, h, e?.queryid, void 0, s), p = Array.isArray(b?.data?.data) ? b.data.data : Array.isArray(b?.data) ? b.data : b, R = Array.isArray(p) ? p.map(X) : [], V = Q(
          o,
          d,
          R,
          e.groupKey
        );
        x(V);
      } catch (h) {
        if (K.isCancel(h)) return;
        console.error("Search fetch failed", h);
      }
    }, 500);
    return () => {
      clearTimeout(n), P.abort();
    };
  }, [N, l]);
  const J = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    const P = i?.baseURL + i?.uploadURL;
    if (!P) {
      console.error("No Upload URL ");
      return;
    }
    const n = e.multiple === !0;
    try {
      const h = await Promise.all(
        Array.from(A).map(async (s) => {
          const o = new FormData();
          return o.append("file", s), (await K({
            method: "POST",
            url: P,
            data: o,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${i?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        a,
        n ? h.map((s) => s.path) : h[0]?.path
      );
    } catch (h) {
      console.error("File upload failed", h), r.setFieldError(a, "File upload failed");
    }
  };
  console.log("options", f);
  const B = async (A, P, n) => {
    const h = P[A];
    if (!h) return;
    const s = c?.[h];
    if (typeof s != "function") {
      console.error(`Method "${String(h)}" not found`);
      return;
    }
    try {
      await Promise.resolve(s(n));
    } catch (o) {
      console.error(`Method "${String(h)}" failed`, o);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const n = r.values[a] ?? "", h = N !== "" ? N : je(f, n) ?? String(n ?? ""), s = (d) => {
        const b = d.target.value;
        E(b), C(0), b.trim() ? v(!0) : (v(!1), r.setFieldValue(a, ""));
      }, o = (d) => {
        r.setFieldValue(a, d), E(""), v(!1), B("onChange", e, `${a}-${d}`);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${_} ${D}`,
            value: h,
            placeholder: e.placeholder || "Type to search...",
            onChange: s,
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (d) => {
              if (d.key === "Enter") {
                if (d.preventDefault(), M[T]) {
                  const [b] = M[T];
                  r.setFieldValue(a, b);
                } else N.trim() && r.setFieldValue(a, N.trim());
                v(!1);
                return;
              }
              W(d, !0);
            },
            disabled: e.disabled
          }
        ),
        $ && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: j,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: M.length > 0 ? M.map(([d, b], p) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${a}-${d}`,
                "data-index": p,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === p ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => o(d),
                children: b
              },
              d
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${h}" ` })
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const n = r.values[a];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: w, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: O,
              ref: S,
              onKeyDown: (h) => W(h, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: j, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: N,
                      onChange: (h) => {
                        E(h.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  M.length > 0 ? M.map(([h, s], o) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${a}-${h}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(h) ? "bg-indigo-50 text-indigo-600 font-medium" : T === o ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${a}-${h}`,
                            type: "checkbox",
                            checked: n?.includes(h),
                            onChange: (d) => {
                              const b = d.target.checked ? [...n, h] : n?.filter((p) => p !== h);
                              r.setFieldValue(a, b), B("onChange", e, `${a}-${h}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        s
                      ]
                    },
                    h
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: O,
            ref: S,
            onKeyDown: (n) => W(n, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[a] ? je(f, r.values[a]) ?? "Select option" : `Select ${e.label}` }),
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
                    value: N,
                    onChange: (n) => {
                      E(n.target.value), C(0);
                    },
                    onKeyDown: (n) => W(n, !0),
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
                      n.preventDefault(), n.stopPropagation(), r.setFieldValue(a, ""), S.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                M.length > 0 ? M.map(([n, h], s) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${a}-${n}`,
                    "data-index": s,
                    onClick: (o) => {
                      o.preventDefault(), o.stopPropagation(), r.setFieldValue(a, n), S.current?.removeAttribute("open"), E(""), C(0), B("onChange", e, `${a}-${n}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : T === s ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: h
                  },
                  n
                )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: a,
              className: `${_} ${D} min-h-[120px] resize-none`,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), B("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${_} ${D} appearance-none cursor-pointer pr-12`,
              onFocus: () => y(!0),
              name: a,
              id: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value === "" ? "" : n.target.value
                ), B("onChange", e, `${a}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ne(f) && Object.entries(f).map(([n, h]) => /* @__PURE__ */ t.jsx("option", { value: n, className: "py-2", children: h }, n)),
                Ne(f) && Object.entries(f).map(([n, h]) => /* @__PURE__ */ t.jsx("optgroup", { label: n, children: Object.entries(h).map(([s, o]) => /* @__PURE__ */ t.jsx("option", { value: s, children: o }, s)) }, n))
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(f || {}).map(([n, h]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${a}-${n}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${a}-${n}`,
                  type: "radio",
                  name: a,
                  checked: r.values[a] === n,
                  value: n,
                  onChange: (s) => {
                    r.setFieldValue(
                      a,
                      s.target.value === "" ? "" : s.target.value
                    ), B("onChange", e, `${a}-${n}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              h
            ]
          },
          n
        )) }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] });
    case "checkbox": {
      const n = r.values[a];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(f || {}).map(([h, s]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${a}-${h}`,
                  type: "checkbox",
                  checked: n.includes(h),
                  onChange: (o) => {
                    const d = o.target.checked ? [...n, h] : n.filter((b) => b !== h);
                    r.setFieldValue(a, d), B("onChange", e, `${a}-${h}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              s
            ]
          },
          h
        )) }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] });
    }
    case "tags": {
      const n = r.values[a], h = N.trim(), s = Array.isArray(f) ? f : Object.entries(f || {}).map(([p, R]) => ({ value: p, label: R })), o = (p) => {
        p && !n.includes(p) && (r.setFieldValue(a, [...n, p]), E(""));
      }, d = (p) => {
        r.setFieldValue(
          a,
          n.filter((R) => R !== p)
        );
      }, b = (p) => s.find((R) => R.value === p)?.label ?? p;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${a}-input`)?.focus(),
            children: [
              n.map((p) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: b(p) }),
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
                  id: `${a}-input`,
                  type: "text",
                  value: N,
                  onChange: (p) => E(p.target.value),
                  onKeyDown: (p) => {
                    (p.key === "Enter" || p.key === ",") && (p.preventDefault(), o(h));
                  },
                  placeholder: n.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const A = e.multiple === !0, P = Array.isArray(r.values[a]) ? r.values[a] : r.values[a] ? [r.values[a]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: I(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: "file",
              className: `${_} ${D} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              multiple: A,
              onChange: (n) => {
                const h = n.currentTarget.files;
                h && J(h), B("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        P.map((n) => {
          const h = n?.split("/").pop();
          return h ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: h }) }, n) : null;
        }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: a,
              name: a,
              value: r.values[a],
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), B("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${_} ${D} min-h-[200px] font-mono text-sm resize-y`
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: I(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: "date",
              name: a,
              min: e.min,
              max: e.max,
              value: r.values[a],
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), B("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${_} ${D} ${e.icon ? "pl-9" : ""}`
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
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    case "number":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: I(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: e.type || "text",
              className: `${_} ${D} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), B("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: I(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: e.type || "text",
              className: `${_} ${D} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), B("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] });
  }
}
function _e({ title: e, children: r, isFirst: c }) {
  const [i, l] = Z(c);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => l(!i),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${i ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${i ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${i ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Me({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: i = (f) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  refid: y
}) {
  const [f, x] = z.useState({}), N = (j, S) => {
    x(($) => ({
      ...$,
      [j]: S
    }));
  }, { initialValues: E, validationSchema: T } = z.useMemo(() => {
    const j = {}, S = {};
    return Object.values(r).flat().forEach(($) => {
      ne([$], j, S, c);
    }), {
      initialValues: j,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      i(j);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([j, S], $) => /* @__PURE__ */ t.jsx(_e, { title: j, isFirst: $ === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((v, F) => de(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          me,
          {
            refid: y,
            sqlOpsUrls: u,
            components: g,
            field: v,
            formik: C,
            methods: m,
            setFieldOptions: N,
            ...f[v.name] ? { optionsOverride: f[v.name] } : {}
          },
          v.name
        )
      },
      v?.name ?? `field-${F}`
    )) }) }, j)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Le({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: i = (x) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  widget: y,
  refid: f
}) {
  const x = Object.keys(r), [N, E] = z.useState(0), [T, C] = z.useState({}), j = (w, I) => {
    C((k) => ({
      ...k,
      [w]: I
    }));
  }, { initialValues: S, validationSchema: $, stepperSchemas: v } = z.useMemo(() => {
    const w = {}, I = {}, k = {};
    return y ? Object.entries(r).forEach(([G, M]) => {
      const W = {};
      ne(M, w, W, c), k[G] = W;
    }) : Object.entries(r).forEach(([G, M]) => {
      ne(M, w, I, c);
    }), {
      initialValues: w,
      validationSchema: I,
      stepperSchemas: k
    };
  }, [r, c, y]), F = x[N] ?? null, O = y && F ? v[F] ?? {} : $, a = ie({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: q.object().shape(O),
    onSubmit: (w) => {
      y ? (N < x.length - 1 && E((I) => I + 1), N === x.length - 1 && i(w)) : i(w);
    }
  }), _ = async (w) => {
    if (w.preventDefault(), !y) {
      const I = await a.validateForm();
      if (Object.keys(I).length > 0) {
        alert("Please fill all required fields before submitting."), a.setTouched(
          Object.keys(I).reduce((k, G) => ({ ...k, [G]: !0 }), {})
        );
        return;
      }
    }
    a.handleSubmit(w);
  }, D = () => {
    E((w) => w > 0 ? w - 1 : w);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: x.map((w, I) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(I),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${N === I ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: w })
      },
      w
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: F && r[F]?.map((w, I) => de(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[ue(Number(w.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  me,
                  {
                    refid: f,
                    sqlOpsUrls: u,
                    field: w,
                    formik: a,
                    methods: m,
                    components: g,
                    setFieldOptions: j,
                    ...T[w.name] ? { optionsOverride: T[w.name] } : {}
                  },
                  w.name
                )
              },
              w?.name ?? `field-${I}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${N > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              N > 0 && /* @__PURE__ */ t.jsx("button", { onClick: D, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: l, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: y ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                N + 1,
                " of ",
                x.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: x.map((w, I) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${I === N ? "bg-action w-6" : "bg-gray-300"}`
              },
              I
            )) })
          ] }) })
        ]
      },
      x[N]
    )
  ] });
}
function ze({
  title: e,
  fields: r,
  data: c,
  onSubmit: i = (y) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  sqlOpsUrls: g = {},
  refid: u
}) {
  const y = Fe(r, g.operation), [f, x] = z.useState({}), N = (j, S) => {
    x(($) => ({
      ...$,
      [j]: S
    }));
  }, { initialValues: E, validationSchema: T } = z.useMemo(() => {
    const j = {}, S = {};
    return y.forEach(($) => {
      ne([$], j, S, c);
    }), {
      initialValues: j,
      validationSchema: S
    };
  }, [y, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      i(j);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: y.map((j, S) => de(j.hidden) || j.type === "geolocation" || j.vmode === "edit" && g.operation === "create" ? null : /* @__PURE__ */ t.jsx(
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
            setFieldOptions: N,
            ...f[j.name] ? { optionsOverride: f[j.name] } : {}
          }
        )
      },
      j?.name ?? `field-${S}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
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
function qe({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: i = (f) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: u = {},
  refid: y
}) {
  const [f, x] = z.useState({}), N = (j, S) => {
    x(($) => ({
      ...$,
      [j]: S
    }));
  }, { initialValues: E, validationSchema: T } = z.useMemo(() => {
    const j = {}, S = {};
    return Object.values(r).flat().forEach(($) => {
      ne([$], j, S, c);
    }), {
      initialValues: j,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: q.object().shape(T),
    onSubmit: (j) => {
      i(j);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([j, S], $) => /* @__PURE__ */ t.jsx(ke, { title: j, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((v, F) => de(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          me,
          {
            refid: y,
            sqlOpsUrls: u,
            components: g,
            field: v,
            formik: C,
            methods: m,
            setFieldOptions: N,
            ...f[v.name] ? { optionsOverride: f[v.name] } : {}
          },
          v.name
        )
      },
      v?.name ?? `field-${F}`
    )) }) }, j)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const se = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await K.get(
  e.baseURL + e.dbopsGetHash,
  { headers: se(e) }
)).data.refhash, pe = async (e, r) => (await K.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: se(e) }
)).data.refid, De = {
  async fetch(e, r, c) {
    const i = await he(e);
    let l = !1, m;
    c && (l = !0, m = c), console.log("skipquery,dbopsid", l, c), l || (m = await pe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: i
    }));
    const g = await K.post(
      e.baseURL + e.dbopsFetch,
      { refid: m, datahash: i },
      { headers: se(e) }
    );
    return g.data?.data ?? g.data;
  },
  async create(e, r) {
    const c = await he(e), i = await pe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await K.post(
      e.baseURL + e.dbopsCreate,
      { refid: i, fields: r.values, datahash: c },
      { headers: se(e) }
    )).data;
  },
  async update(e, r) {
    const c = await he(e), i = await pe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await K.post(
      e.baseURL + e.dbopsUpdate,
      { refid: i, fields: r.values, datahash: c },
      { headers: se(e) }
    )).data;
  }
};
function Ge({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: c = null,
  onCancel: i = () => {
  },
  components: l = {},
  callback: m = () => {
  },
  initialvalues: g = {}
}) {
  let u = $e(e);
  const y = e.endPoints, f = e?.source?.refid, x = Oe(e?.fields ?? {}, y?.operation), [N, E] = z.useState(g), T = z.useMemo(() => Ce(e.fields), [e.fields]);
  z.useEffect(() => {
    let S = !0;
    return (async () => {
      const v = e?.source ?? {};
      if (!v?.type) {
        S && E({});
        return;
      }
      if (v.type === "method") {
        const F = v.method, O = F ? r[F] : void 0;
        if (O)
          try {
            const a = await Promise.resolve(O());
            S && E(a ?? {});
          } catch (a) {
            console.error("Method execution failed:", a), S && E({});
          }
        else
          S && E({});
      }
      if (v.type === "api" && y?.operation !== "create")
        try {
          const F = await K({
            method: v.method || "GET",
            url: v.url ?? "",
            data: v.body ?? {},
            params: v.params ?? {},
            headers: v.headers ?? {}
          });
          S && E(F.data ?? {});
        } catch (F) {
          console.error("API fetch failed:", F), S && E({});
        }
      if (v.type === "sql" && v.refid && v.refid !== "0" && y?.operation !== "create" || y?.operation !== "create" && v.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const F = await De.fetch(y, {
            source: {
              ...v,
              table: v.table,
              columns: v.columns,
              where: U(v.where, {
                refid: f
              })
            },
            fields: fe(e.fields, y.operation)
          }, v?.dbopsid);
          S && E(F);
        } catch (F) {
          console.error("API fetch failed:", F);
        }
      }
    })(), () => {
      S = !1;
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
  const C = async (S) => {
    const $ = e?.source ?? {};
    let v = null;
    if (T.length > 0)
      try {
        v = await Te();
      } catch (O) {
        console.log("catch fetchGeolocation", O), v = null;
      }
    const F = {
      ...S,
      ...Object.fromEntries(
        T.map((O) => [O, v])
      )
    };
    if ($.type === "method") {
      const O = $.method, a = O ? r[O] : void 0;
      if (a)
        try {
          const _ = await Promise.resolve(a(F));
          m?.(_), r?.handleActions && r.handleActions(e?.gotolinks);
        } catch (_) {
          m?.(_), console.error("Method execution failed:", _);
        }
    }
    if ($.type === "api") {
      if (!y) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await K({
          method: $.method || "POST",
          url: y.baseURL + $.endpoint,
          data: F ?? {},
          headers: {
            Authorization: `Bearer ${y?.accessToken}`
          }
        });
        m?.(O), r?.handleActions && r.handleActions(e?.gotolinks);
      } catch (O) {
        m?.(O), console.error("API fetch failed:", O);
      }
    }
    if ($.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let a = !1, _;
        $?.dbopsid && (a = !0, _ = $?.dbopsid);
        const D = await K({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        if (!a) {
          let I = {
            ...$
          };
          $.where && (I = {
            ...$,
            where: U($.where, {
              refid: f
            })
          }), _ = (await K({
            method: "POST",
            url: O.baseURL + O.dbopsGetRefId,
            data: {
              operation: O.operation,
              source: I,
              fields: fe(e.fields, O.operation),
              forcefill: e.forcefill,
              datahash: D.data.refhash
            },
            headers: {
              Authorization: `Bearer ${O?.accessToken}`
            }
          }))?.data.refid;
        }
        const w = await K({
          method: "POST",
          url: O.baseURL + O[O.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: _,
            fields: F,
            datahash: D.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        m?.(w), r?.handleActions && r.handleActions(e?.gotolinks);
      } catch (a) {
        m?.(a), console.error("API fetch failed:", a);
      }
    }
  }, j = {
    accordion: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: x,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: f
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: x,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: f
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        groupedFields: x,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        widget: e?.widget,
        sqlOpsUrls: y,
        refid: f
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ze,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: f
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: j[u] ?? j.simple });
}
export {
  Ge as LogiksForm
};
