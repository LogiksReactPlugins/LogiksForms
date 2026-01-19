import k, { useState as Z, useRef as xe, useEffect as te, useMemo as be } from "react";
import K from "axios";
import * as D from "yup";
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
      for (var d in l)
        d !== "key" && (m[d] = l[d]);
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
        return s.$$typeof === z ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case v:
          return "Fragment";
        case O:
          return "Profiler";
        case S:
          return "StrictMode";
        case a:
          return "Suspense";
        case M:
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
          case f:
            return (s._context.displayName || "Context") + ".Consumer";
          case $:
            var o = s.render;
            return s = s.displayName, s || (s = o.displayName || o.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case B:
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
        var h = o.error, x = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return h.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), r(s);
      }
    }
    function i(s) {
      if (s === v) return "<>";
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
      if (P.call(s, "key")) {
        var o = Object.getOwnPropertyDescriptor(s, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function d(s, o) {
      function h() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: h,
        configurable: !0
      });
    }
    function y() {
      var s = e(this.type);
      return A[s] || (A[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function j(s, o, h, x, p, T, V, W) {
      return h = T.ref, s = {
        $$typeof: R,
        type: s,
        key: o,
        props: T,
        _owner: p
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(s, "ref", {
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
        value: W
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function b(s, o, h, x, p, T, V, W) {
      var L = o.children;
      if (L !== void 0)
        if (x)
          if (Y(L)) {
            for (x = 0; x < L.length; x++)
              N(L[x]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(L);
      if (P.call(o, "key")) {
        L = e(s);
        var H = Object.keys(o).filter(function(we) {
          return we !== "key";
        });
        x = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", u[L + x] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          L,
          H,
          L
        ), u[L + x] = !0);
      }
      if (L = null, h !== void 0 && (c(h), L = "" + h), g(o) && (c(o.key), L = "" + o.key), "key" in o) {
        h = {};
        for (var ee in o)
          ee !== "key" && (h[ee] = o[ee]);
      } else h = o;
      return L && d(
        h,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), j(
        s,
        L,
        T,
        p,
        l(),
        h,
        V,
        W
      );
    }
    function N(s) {
      typeof s == "object" && s !== null && s.$$typeof === R && s._store && (s._store.validated = 1);
    }
    var E = k, R = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), F = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), G = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Y = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var q, A = {}, _ = E["react-stack-bottom-frame"].bind(
      E,
      m
    )(), n = J(i(m)), u = {};
    ae.Fragment = v, ae.jsx = function(s, o, h, x, p) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return b(
        s,
        o,
        h,
        !1,
        x,
        p,
        T ? Error("react-stack-top-frame") : _,
        T ? J(i(s)) : n
      );
    }, ae.jsxs = function(s, o, h, x, p) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return b(
        s,
        o,
        h,
        !0,
        x,
        p,
        T ? Error("react-stack-top-frame") : _,
        T ? J(i(s)) : n
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
  return Object.entries(e).forEach(([g, d]) => {
    if (d.vmode === "edit" && r === "create") return;
    const y = { ...d, name: g };
    if (d.group) {
      const j = d.group;
      i[j] || (i[j] = []), i[j].push(y);
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
    let d;
    l.type === "file" ? d = l.multiple ? D.array().of(D.mixed()) : D.mixed() : l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? d = D.array().of(D.string()) : l.type === "email" ? d = D.string().email("Invalid email") : l.type === "number" ? d = D.number().typeError("Must be a number") : l.type === "json" ? d = D.string().test("json", "Invalid JSON", (y) => {
      if (!y) return !0;
      try {
        return JSON.parse(y), !0;
      } catch {
        return !1;
      }
    }) : d = D.string(), l.required && (d = d.required(
      l.error_message || `${l.label || m} is required`
    )), l?.validate?.regex && typeof l.validate.regex == "string" && (d = d.matches(
      new RegExp(l?.validate?.regex),
      l?.error_message || "Invalid input format"
    )), l?.validate && Object.entries(l.validate).forEach(([y, j]) => {
      switch (y) {
        case "email":
          j && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          d = d.matches(
            new RegExp(j),
            `Must match pattern: ${j}`
          );
          break;
        case "date":
          d = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((b, N) => {
            if (typeof N == "string") {
              const E = N.replace(/-/g, "/"), [R, C, v] = E.split("/");
              if (R && C && v)
                return /* @__PURE__ */ new Date(`${v}-${C}-${R}`);
            }
            return b;
          });
          break;
        case "time":
          d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          d = D.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = D.number().typeError("Must be a decimal").transform((b, N) => {
            if (N == null || N === "") return;
            const E = Number(N);
            if (isNaN(E)) return b;
            if (typeof b == "number" && !isNaN(b)) {
              const R = Number(b);
              return Number.isInteger(R) ? Number(E.toFixed(R)) : E;
            }
            return E;
          });
          break;
        case "alphanumeric":
          d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          d = d.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          d = d.transform(
            (b) => b && b.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (b) => b && b.toLowerCase()
          );
          break;
        case "length-min": {
          const b = Number(j);
          isNaN(b) || (d = d.min(b, `Minimum length is ${b}`));
          break;
        }
        case "length-max": {
          const b = Number(j);
          isNaN(b) || (d = d.max(b, `Maximum length is ${b}`));
          break;
        }
      }
    }), c[m] = d;
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
    return c.forEach((d) => {
      const y = d[e], j = d[r];
      y != null && j != null && (g[String(y)] = String(j));
    }), g;
  }
  const m = {};
  return c.forEach((g) => {
    const d = g[l] ?? "Others", y = g[e], j = g[r];
    y == null || j == null || (m[d] || (m[d] = {}), m[d][String(y)] = String(j));
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
function he({
  field: e,
  formik: r,
  methods: c = {},
  sqlOpsUrls: i,
  refid: l,
  optionsOverride: m,
  setFieldOptions: g
}) {
  const [d, y] = Z(!1), [j, b] = Z(
    m ?? e.options ?? {}
  ), [N, E] = Z(""), [R, C] = Z(0), v = xe(null), S = xe(null), [O, f] = Z(!1), F = k.useRef(N);
  k.useEffect(() => {
    F.current = N;
  }, [N]);
  const $ = (A) => {
    A.currentTarget.open || E("");
  };
  te(() => {
    m && Object.keys(m).length !== 0 && b(m);
  }, [m]), te(() => {
    const A = (_) => {
      S.current && !S.current.contains(_.target) && (S.current.open = !1, E(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, []);
  const a = e.name;
  k.useEffect(() => {
    let A = !0;
    return (async () => {
      let n = e.valueKey ?? "value", u = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const p = Object.values(e.options);
          if (p.length && typeof p[0] == "string") {
            b(e.options);
            return;
          }
        }
        const h = (Array.isArray(e.options) ? e.options : [e.options]).map(X), x = Q(
          n,
          u,
          h,
          e.groupKey
          // auto-uses `category` if present
        );
        b(x);
        return;
      }
      const s = e?.source ?? {};
      if (e.type === "dataMethod") {
        const o = e.method, h = o ? c[o] : void 0;
        if (h)
          try {
            const x = await Promise.resolve(h()), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, T = Array.isArray(p) ? p.map(X) : [], V = Q(n, u, T, e.groupKey);
            A && b(V);
          } catch (x) {
            console.error("Method execution failed:", x), A && b({});
          }
        else
          A && b({});
      }
      if (s.type === "api" && s.url)
        try {
          const o = await K({
            method: s.method || "GET",
            url: s.url,
            data: s.body ?? {},
            params: s.params ?? {},
            headers: s.headers ?? {}
          }), h = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o, x = Array.isArray(h) ? h.map(X) : [], p = Q(n, u, x, e.groupKey);
          A && b(p);
        } catch (o) {
          console.error("API execution failed:", o), A && b({});
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
          const h = await le(i, o, e?.queryid), x = Array.isArray(h?.data?.data) ? h.data.data : Array.isArray(h?.data) ? h.data : h, p = Array.isArray(x) ? x.map(X) : [], T = Q(n, u, p, e.groupKey);
          A && b(T);
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
  const M = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, B = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, I = (A) => A.icon ? /* @__PURE__ */ t.jsx("i", { className: A.icon }) : null, z = be(
    () => Re(j),
    [j]
  );
  console.log("flatOptions", z);
  const G = z.length, P = be(() => e.search || !N ? z : z.filter(
    ([, A]) => A.toLowerCase().includes(N.toLowerCase())
  ), [e.search, N, z]), Y = (A, _) => {
    if (S.current?.open === !0 || O === !0)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (n) => n + 1 < P.length ? n + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (n) => n - 1 >= 0 ? n - 1 : P.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [n] = P[R] || [];
        n && r.setFieldValue(e.name, _ ? n : [...r.values[e.name], n]), S.current && (S.current.open = !1);
      } else A.key === "Escape" && (S.current.open = !1, E(""), f(!1));
  };
  te(() => {
    v.current?.querySelector(
      `[data-index="${R}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [R]), te(() => {
    R >= P.length && C(0);
  }, [P, R]), te(() => {
    const A = e.autocomplete, _ = e.ajaxchain;
    if (!A && !_) return;
    const n = r.values[e.name];
    if (!n) return;
    const u = Array.isArray(_) ? _ : _ ? [_] : [];
    (async () => {
      try {
        if (Ie(A)) {
          const o = A.src;
          if (!o || !i) return;
          const h = U(o.where ?? {}, {
            refid: n
          }), x = {
            ...o,
            table: o.table,
            cols: o.columns,
            where: h
          }, { data: p } = await le(i, x, e?.queryid), T = Array.isArray(p?.data) ? p.data[0] : p?.data;
          T && A.target.split(",").map((V) => V.trim()).forEach((V) => {
            T[V] !== void 0 && r.setFieldValue(V, T[V]);
          });
        }
        for (const o of u) {
          const h = o.src;
          if (!o || typeof o != "object" || !h || typeof h != "object" || !i) continue;
          let x;
          if (!h.queryid) {
            if (!h.table || !h.columns)
              throw new Error("SQL query requires field.table");
            const ee = U(h?.where ?? {}, {
              refid: n
            });
            x = {
              ...h,
              table: h.table,
              cols: h.columns,
              where: ee
            };
          }
          const { data: p } = await le(i, x, h?.queryid, n);
          let T = e.valueKey ?? "value", V = e.labelKey ?? "title";
          const W = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, L = Array.isArray(W) ? W.map(X) : [], H = Q(
            T,
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
  }, [r.values[e.name]]), k.useEffect(() => {
    if (!e.search || !N.trim() || !e.table || !i) return;
    const A = Pe(e.columns ?? ""), _ = new AbortController(), n = setTimeout(async () => {
      try {
        let u;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const W = l ? U(e.where ?? {}, {
            refid: l
          }) : e.where;
          u = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: W
          };
        }
        let s = {};
        Array.isArray(A) && A.forEach((W) => {
          s[W] = [N, "LIKE"];
        });
        let o = e.valueKey ?? "value", h = e.labelKey ?? "title";
        const { data: x } = await le(i, u, e?.queryid, void 0, s), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, T = Array.isArray(p) ? p.map(X) : [], V = Q(
          o,
          h,
          T,
          e.groupKey
        );
        b(V);
      } catch (u) {
        if (K.isCancel(u)) return;
        console.error("Search fetch failed", u);
      }
    }, 500);
    return () => {
      clearTimeout(n), _.abort();
    };
  }, [N, l]);
  const J = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    const _ = i?.baseURL + i?.uploadURL;
    if (!_) {
      console.error("No Upload URL ");
      return;
    }
    const n = e.multiple === !0;
    try {
      const u = await Promise.all(
        Array.from(A).map(async (s) => {
          const o = new FormData();
          return o.append("file", s), (await K({
            method: "POST",
            url: _,
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
        n ? u.map((s) => s.path) : u[0]?.path
      );
    } catch (u) {
      console.error("File upload failed", u), r.setFieldError(a, "File upload failed");
    }
  };
  console.log("options", j);
  const q = async (A, _, n) => {
    const u = _[A];
    if (!u) return;
    const s = c?.[u];
    if (typeof s != "function") {
      console.error(`Method "${String(u)}" not found`);
      return;
    }
    try {
      await Promise.resolve(s(n));
    } catch (o) {
      console.error(`Method "${String(u)}" failed`, o);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const n = r.values[a] ?? "", u = N !== "" ? N : je(j, n) ?? String(n ?? ""), s = (h) => {
        const x = h.target.value;
        E(x), C(0), x.trim() ? f(!0) : (f(!1), r.setFieldValue(a, ""));
      }, o = (h) => {
        r.setFieldValue(a, h), E(""), f(!1), q("onChange", e, `${a}-${h}`);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${M} ${B}`,
            value: u,
            placeholder: e.placeholder || "Type to search...",
            onChange: s,
            onBlur: () => {
              setTimeout(() => f(!1), 150);
            },
            onKeyDown: (h) => {
              if (h.key === "Enter") {
                if (h.preventDefault(), P[R]) {
                  const [x] = P[R];
                  r.setFieldValue(a, x);
                } else N.trim() && r.setFieldValue(a, N.trim());
                f(!1);
                return;
              }
              Y(h, !0);
            },
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: v,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: P.length > 0 ? P.map(([h, x], p) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${a}-${h}`,
                "data-index": p,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${R === p ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => o(h),
                children: x
              },
              h
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${u}" ` })
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
              onToggle: $,
              ref: S,
              onKeyDown: (u) => Y(u, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: v, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: N,
                      onChange: (u) => {
                        E(u.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  P.length > 0 ? P.map(([u, s], o) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${a}-${u}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(u) ? "bg-indigo-50 text-indigo-600 font-medium" : R === o ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${a}-${u}`,
                            type: "checkbox",
                            checked: n?.includes(u),
                            onChange: (h) => {
                              const x = h.target.checked ? [...n, u] : n?.filter((p) => p !== u);
                              r.setFieldValue(a, x), q("onChange", e, `${a}-${u}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        s
                      ]
                    },
                    u
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
            onToggle: $,
            ref: S,
            onKeyDown: (n) => Y(n, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[a] ? je(j, r.values[a]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: v, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: N,
                    onChange: (n) => {
                      E(n.target.value), C(0);
                    },
                    onKeyDown: (n) => Y(n, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                P.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (n) => {
                      n.preventDefault(), n.stopPropagation(), r.setFieldValue(a, ""), S.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                P.length > 0 ? P.map(([n, u], s) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${a}-${n}`,
                    "data-index": s,
                    onClick: (o) => {
                      o.preventDefault(), o.stopPropagation(), r.setFieldValue(a, n), S.current?.removeAttribute("open"), E(""), C(0), q("onChange", e, `${a}-${n}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[a] === n ? "bg-indigo-50 text-indigo-600 font-medium" : R === s ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: u
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
              className: `${M} ${B} min-h-[120px] resize-none`,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), q("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
      ] }) });
    case "select":
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
              onToggle: $,
              ref: S,
              onKeyDown: (u) => Y(u, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: v, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: N,
                      onChange: (u) => {
                        E(u.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  P.length > 0 ? P.map(([u, s], o) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${a}-${u}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(u) ? "bg-indigo-50 text-indigo-600 font-medium" : R === o ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${a}-${u}`,
                            type: "checkbox",
                            checked: n?.includes(u),
                            onChange: (h) => {
                              const x = h.target.checked ? [...n, u] : n?.filter((p) => p !== u);
                              r.setFieldValue(a, x), q("onChange", e, `${a}-${u}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        s
                      ]
                    },
                    u
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
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${M} ${B} appearance-none cursor-pointer pr-12`,
              onFocus: () => y(!0),
              name: a,
              id: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value === "" ? "" : n.target.value
                ), q("onChange", e, `${a}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ne(j) && Object.entries(j).map(([n, u]) => /* @__PURE__ */ t.jsx("option", { value: n, className: "py-2", children: u }, n)),
                Ne(j) && Object.entries(j).map(([n, u]) => /* @__PURE__ */ t.jsx("optgroup", { label: n, children: Object.entries(u).map(([s, o]) => /* @__PURE__ */ t.jsx("option", { value: s, children: o }, s)) }, n))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(j || {}).map(([n, u]) => /* @__PURE__ */ t.jsxs(
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
                    ), q("onChange", e, `${a}-${n}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              u
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
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(j || {}).map(([u, s]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${a}-${u}`,
                  type: "checkbox",
                  checked: n.includes(u),
                  onChange: (o) => {
                    const h = o.target.checked ? [...n, u] : n.filter((x) => x !== u);
                    r.setFieldValue(a, h), q("onChange", e, `${a}-${u}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              s
            ]
          },
          u
        )) }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[a]) })
      ] });
    }
    case "tags": {
      const n = r.values[a], u = N.trim(), s = Array.isArray(j) ? j : Object.entries(j || {}).map(([p, T]) => ({ value: p, label: T })), o = (p) => {
        p && !n.includes(p) && (r.setFieldValue(a, [...n, p]), E(""));
      }, h = (p) => {
        r.setFieldValue(
          a,
          n.filter((T) => T !== p)
        );
      }, x = (p) => s.find((T) => T.value === p)?.label ?? p;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${M} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${a}-input`)?.focus(),
            children: [
              n.map((p) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: x(p) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (T) => {
                          T.stopPropagation(), e.disabled || h(p);
                        },
                        onMouseDown: (T) => T.preventDefault(),
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
                    (p.key === "Enter" || p.key === ",") && (p.preventDefault(), o(u));
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
      const A = e.multiple === !0, _ = Array.isArray(r.values[a]) ? r.values[a] : r.values[a] ? [r.values[a]] : [];
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
              className: `${M} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              multiple: A,
              onChange: (n) => {
                const u = n.currentTarget.files;
                u && J(u), q("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        _.map((n) => {
          const u = n?.split("/").pop();
          return u ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: u }) }, n) : null;
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
                ), q("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${M} ${B} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
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
                ), q("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${M} ${B} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
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
              className: `${M} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), q("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
              className: `${M} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), q("onChange", e, `${a}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
  onSubmit: i = (j) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: d = {},
  refid: y
}) {
  const [j, b] = k.useState({}), N = (v, S) => {
    b((O) => ({
      ...O,
      [v]: S
    }));
  }, { initialValues: E, validationSchema: R } = k.useMemo(() => {
    const v = {}, S = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], v, S, c);
    }), {
      initialValues: v,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (v) => {
      i(v);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([v, S], O) => /* @__PURE__ */ t.jsx(_e, { title: v, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((f, F) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: y,
            sqlOpsUrls: d,
            components: g,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: N,
            ...j[f.name] ? { optionsOverride: j[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${F}`
    )) }) }, v)) }),
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
  onSubmit: i = (b) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: d = {},
  widget: y,
  refid: j
}) {
  const b = Object.keys(r), [N, E] = k.useState(0), [R, C] = k.useState({}), v = (w, I) => {
    C((z) => ({
      ...z,
      [w]: I
    }));
  }, { initialValues: S, validationSchema: O, stepperSchemas: f } = k.useMemo(() => {
    const w = {}, I = {}, z = {};
    return y ? Object.entries(r).forEach(([G, P]) => {
      const Y = {};
      ne(P, w, Y, c), z[G] = Y;
    }) : Object.entries(r).forEach(([G, P]) => {
      ne(P, w, I, c);
    }), {
      initialValues: w,
      validationSchema: I,
      stepperSchemas: z
    };
  }, [r, c, y]), F = b[N] ?? null, $ = y && F ? f[F] ?? {} : O, a = ie({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: D.object().shape($),
    onSubmit: (w) => {
      y ? (N < b.length - 1 && E((I) => I + 1), N === b.length - 1 && i(w)) : i(w);
    }
  }), M = async (w) => {
    if (w.preventDefault(), !y) {
      const I = await a.validateForm();
      if (Object.keys(I).length > 0) {
        alert("Please fill all required fields before submitting."), a.setTouched(
          Object.keys(I).reduce((z, G) => ({ ...z, [G]: !0 }), {})
        );
        return;
      }
    }
    a.handleSubmit(w);
  }, B = () => {
    E((w) => w > 0 ? w - 1 : w);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: b.map((w, I) => /* @__PURE__ */ t.jsx(
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
          /* @__PURE__ */ t.jsxs("form", { onSubmit: M, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: F && r[F]?.map((w, I) => de(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[ue(Number(w.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  he,
                  {
                    refid: j,
                    sqlOpsUrls: d,
                    field: w,
                    formik: a,
                    methods: m,
                    components: g,
                    setFieldOptions: v,
                    ...R[w.name] ? { optionsOverride: R[w.name] } : {}
                  },
                  w.name
                )
              },
              w?.name ?? `field-${I}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${N > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              N > 0 && /* @__PURE__ */ t.jsx("button", { onClick: B, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
                b.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: b.map((w, I) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${I === N ? "bg-action w-6" : "bg-gray-300"}`
              },
              I
            )) })
          ] }) })
        ]
      },
      b[N]
    )
  ] });
}
function ke({
  title: e,
  fields: r,
  data: c,
  onSubmit: i = (y) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  sqlOpsUrls: g = {},
  refid: d
}) {
  const y = Fe(r, g.operation), [j, b] = k.useState({}), N = (v, S) => {
    b((O) => ({
      ...O,
      [v]: S
    }));
  }, { initialValues: E, validationSchema: R } = k.useMemo(() => {
    const v = {}, S = {};
    return y.forEach((O) => {
      ne([O], v, S, c);
    }), {
      initialValues: v,
      validationSchema: S
    };
  }, [y, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (v) => {
      i(v);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: y.map((v, S) => de(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && g.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(v.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: d,
            sqlOpsUrls: g,
            field: v,
            formik: C,
            methods: m,
            setFieldOptions: N,
            ...j[v.name] ? { optionsOverride: j[v.name] } : {}
          }
        )
      },
      v?.name ?? `field-${S}`
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
  onSubmit: i = (j) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: g = {},
  sqlOpsUrls: d = {},
  refid: y
}) {
  const [j, b] = k.useState({}), N = (v, S) => {
    b((O) => ({
      ...O,
      [v]: S
    }));
  }, { initialValues: E, validationSchema: R } = k.useMemo(() => {
    const v = {}, S = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], v, S, c);
    }), {
      initialValues: v,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (v) => {
      i(v);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([v, S], O) => /* @__PURE__ */ t.jsx(ze, { title: v, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((f, F) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: y,
            sqlOpsUrls: d,
            components: g,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: N,
            ...j[f.name] ? { optionsOverride: j[f.name] } : {}
          },
          f.name
        )
      },
      f?.name ?? `field-${F}`
    )) }) }, v)) }),
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
}), me = async (e) => (await K.get(
  e.baseURL + e.dbopsGetHash,
  { headers: se(e) }
)).data.refhash, pe = async (e, r) => (await K.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: se(e) }
)).data.refid, De = {
  async fetch(e, r, c) {
    const i = await me(e);
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
    const c = await me(e), i = await pe(e, {
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
    const c = await me(e), i = await pe(e, {
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
  let d = $e(e);
  const y = e.endPoints, j = e?.source?.refid, b = Oe(e?.fields ?? {}, y?.operation), [N, E] = k.useState(g), R = k.useMemo(() => Ce(e.fields), [e.fields]);
  k.useEffect(() => {
    let S = !0;
    return (async () => {
      const f = e?.source ?? {};
      if (!f?.type) {
        S && E({});
        return;
      }
      if (f.type === "method") {
        const F = f.method, $ = F ? r[F] : void 0;
        if ($)
          try {
            const a = await Promise.resolve($());
            S && E(a ?? {});
          } catch (a) {
            console.error("Method execution failed:", a), S && E({});
          }
        else
          S && E({});
      }
      if (f.type === "api" && y?.operation !== "create")
        try {
          const F = await K({
            method: f.method || "GET",
            url: f.url ?? "",
            data: f.body ?? {},
            params: f.params ?? {},
            headers: f.headers ?? {}
          });
          S && E(F.data ?? {});
        } catch (F) {
          console.error("API fetch failed:", F), S && E({});
        }
      if (f.type === "sql" && f.refid && f.refid !== "0" && y?.operation !== "create" || y?.operation !== "create" && f.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const F = await De.fetch(y, {
            source: {
              ...f,
              table: f.table,
              columns: f.columns,
              where: U(f.where, {
                refid: j
              })
            },
            fields: fe(e.fields, y.operation)
          }, f?.dbopsid);
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
    const O = e?.source ?? {};
    let f = null;
    if (R.length > 0)
      try {
        f = await Te();
      } catch ($) {
        console.log("catch fetchGeolocation", $), f = null;
      }
    const F = {
      ...S,
      ...Object.fromEntries(
        R.map(($) => [$, f])
      )
    };
    if (O.type === "method") {
      const $ = O.method, a = $ ? r[$] : void 0;
      if (a)
        try {
          const M = await Promise.resolve(a(F));
          m?.(M), r?.handleActions && r.handleActions(e?.gotolink);
        } catch (M) {
          m?.(M), console.error("Method execution failed:", M);
        }
    }
    if (O.type === "api") {
      if (!y) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await K({
          method: O.method || "POST",
          url: y.baseURL + O.endpoint,
          data: F ?? {},
          headers: {
            Authorization: `Bearer ${y?.accessToken}`
          }
        });
        m?.($), r?.handleActions && r.handleActions(e?.gotolink);
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
        let a = !1, M;
        O?.dbopsid && (a = !0, M = O?.dbopsid);
        const B = await K({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!a) {
          let I = {
            ...O
          };
          O.where && (I = {
            ...O,
            where: U(O.where, {
              refid: j
            })
          }), M = (await K({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: I,
              fields: fe(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: B.data.refhash
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const w = await K({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: M,
            fields: F,
            datahash: B.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        m?.(w), r?.handleActions && r.handleActions(e?.gotolink);
      } catch (a) {
        m?.(a), console.error("API fetch failed:", a);
      }
    }
  }, v = {
    accordion: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: j
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: j
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        groupedFields: b,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        widget: e?.widget,
        sqlOpsUrls: y,
        refid: j
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: N,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: y,
        refid: j
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: v[d] ?? v.simple });
}
export {
  Ge as LogiksForm
};
