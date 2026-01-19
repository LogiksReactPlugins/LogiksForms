import q, { useState as Z, useRef as xe, useEffect as te, useMemo as be } from "react";
import K from "axios";
import * as B from "yup";
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
    var v = null;
    if (m !== void 0 && (v = "" + m), l.key !== void 0 && (v = "" + l.key), "key" in l) {
      m = {};
      for (var d in l)
        d !== "key" && (m[d] = l[d]);
    } else m = l;
    return l = m.ref, {
      $$typeof: e,
      type: i,
      key: v,
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
        return s.$$typeof === M ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case f:
          return "Fragment";
        case O:
          return "Profiler";
        case S:
          return "StrictMode";
        case a:
          return "Suspense";
        case P:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case C:
            return "Portal";
          case I:
            return (s.displayName || "Context") + ".Provider";
          case j:
            return (s._context.displayName || "Context") + ".Consumer";
          case $:
            var o = s.render;
            return s = s.displayName, s || (s = o.displayName || o.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case z:
            return o = s.displayName || null, o !== null ? o : e(s.type) || "Memo";
          case N:
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
      if (s === f) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === N)
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
    function v(s) {
      if (_.call(s, "key")) {
        var o = Object.getOwnPropertyDescriptor(s, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function d(s, o) {
      function h() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: h,
        configurable: !0
      });
    }
    function b() {
      var s = e(this.type);
      return A[s] || (A[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function g(s, o, h, x, p, T, V, W) {
      return h = T.ref, s = {
        $$typeof: R,
        type: s,
        key: o,
        props: T,
        _owner: p
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: b
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
    function y(s, o, h, x, p, T, V, W) {
      var L = o.children;
      if (L !== void 0)
        if (x)
          if (Y(L)) {
            for (x = 0; x < L.length; x++)
              w(L[x]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(L);
      if (_.call(o, "key")) {
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
      if (L = null, h !== void 0 && (c(h), L = "" + h), v(o) && (c(o.key), L = "" + o.key), "key" in o) {
        h = {};
        for (var ee in o)
          ee !== "key" && (h[ee] = o[ee]);
      } else h = o;
      return L && d(
        h,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), g(
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
    function w(s) {
      typeof s == "object" && s !== null && s.$$typeof === R && s._store && (s._store.validated = 1);
    }
    var E = q, R = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), I = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), G = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, Y = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var D, A = {}, k = E["react-stack-bottom-frame"].bind(
      E,
      m
    )(), n = J(i(m)), u = {};
    ae.Fragment = f, ae.jsx = function(s, o, h, x, p) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        s,
        o,
        h,
        !1,
        x,
        p,
        T ? Error("react-stack-top-frame") : k,
        T ? J(i(s)) : n
      );
    }, ae.jsxs = function(s, o, h, x, p) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        s,
        o,
        h,
        !0,
        x,
        p,
        T ? Error("react-stack-top-frame") : k,
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
  if (Object.values(e).forEach((v) => {
    v.group && (l = !0);
  }), !l) return {};
  const m = [];
  return Object.entries(e).forEach(([v, d]) => {
    if (d.vmode === "edit" && r === "create") return;
    const b = { ...d, name: v };
    if (d.group) {
      const g = d.group;
      i[g] || (i[g] = []), i[g].push(b);
    } else
      m.push(b);
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
    let v = i?.[m];
    v == null && (v = l.default), l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? r[m] = Array.isArray(v) ? v : typeof v == "string" ? v.split(",").map((b) => b.trim()).filter(Boolean) : [] : l.type === "json" ? r[m] = typeof v == "object" && v !== null ? JSON.stringify(v, null, 2) : v ?? "" : l.type === "date" ? r[m] = typeof v == "string" ? v.slice(0, 10) : "" : l.type === "time" ? typeof v == "string" ? v.includes("T") ? r[m] = v.slice(11, 16) : r[m] = v.slice(0, 5) : r[m] = "" : m === "blocked" || m === "blacklist" ? r[m] = String(v ?? "false") : r[m] = v ?? "";
    let d;
    l.type === "file" ? d = l.multiple ? B.array().of(B.mixed()) : B.mixed() : l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? d = B.array().of(B.string()) : l.type === "email" ? d = B.string().email("Invalid email") : l.type === "number" ? d = B.number().typeError("Must be a number") : l.type === "json" ? d = B.string().test("json", "Invalid JSON", (b) => {
      if (!b) return !0;
      try {
        return JSON.parse(b), !0;
      } catch {
        return !1;
      }
    }) : d = B.string(), l.required && (d = d.required(
      l.error_message || `${l.label || m} is required`
    )), l?.validate?.regex && typeof l.validate.regex == "string" && (d = d.matches(
      new RegExp(l?.validate?.regex),
      l?.error_message || "Invalid input format"
    )), l?.validate && Object.entries(l.validate).forEach(([b, g]) => {
      switch (b) {
        case "email":
          g && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          d = d.matches(
            new RegExp(g),
            `Must match pattern: ${g}`
          );
          break;
        case "date":
          d = B.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((y, w) => {
            if (typeof w == "string") {
              const E = w.replace(/-/g, "/"), [R, C, f] = E.split("/");
              if (R && C && f)
                return /* @__PURE__ */ new Date(`${f}-${C}-${R}`);
            }
            return y;
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
          d = B.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = B.number().typeError("Must be a decimal").transform((y, w) => {
            if (w == null || w === "") return;
            const E = Number(w);
            if (isNaN(E)) return y;
            if (typeof y == "number" && !isNaN(y)) {
              const R = Number(y);
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
            (y) => y && y.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (y) => y && y.toLowerCase()
          );
          break;
        case "length-min": {
          const y = Number(g);
          isNaN(y) || (d = d.min(y, `Minimum length is ${y}`));
          break;
        }
        case "length-max": {
          const y = Number(g);
          isNaN(y) || (d = d.max(y, `Maximum length is ${y}`));
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
    const v = {};
    return c.forEach((d) => {
      const b = d[e], g = d[r];
      b != null && g != null && (v[String(b)] = String(g));
    }), v;
  }
  const m = {};
  return c.forEach((v) => {
    const d = v[l] ?? "Others", b = v[e], g = v[r];
    b == null || g == null || (m[d] || (m[d] = {}), m[d][String(b)] = String(g));
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
  setFieldOptions: v
}) {
  const [d, b] = Z(!1), [g, y] = Z(
    m ?? e.options ?? {}
  ), [w, E] = Z(""), [R, C] = Z(0), f = xe(null), S = xe(null), [O, j] = Z(!1), I = q.useRef(w);
  q.useEffect(() => {
    I.current = w;
  }, [w]);
  const $ = (A) => {
    A.currentTarget.open || E("");
  };
  te(() => {
    m && Object.keys(m).length !== 0 && y(m);
  }, [m]), te(() => {
    const A = (k) => {
      S.current && !S.current.contains(k.target) && (S.current.open = !1, E(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, []);
  const a = e.name;
  q.useEffect(() => {
    let A = !0;
    return (async () => {
      let n = e.valueKey ?? "value", u = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const p = Object.values(e.options);
          if (p.length && typeof p[0] == "string") {
            y(e.options);
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
        y(x);
        return;
      }
      const s = e?.source ?? {};
      if (e.type === "dataMethod") {
        const o = e.method, h = o ? c[o] : void 0;
        if (h)
          try {
            const x = await Promise.resolve(h()), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, T = Array.isArray(p) ? p.map(X) : [], V = Q(n, u, T, e.groupKey);
            A && y(V);
          } catch (x) {
            console.error("Method execution failed:", x), A && y({});
          }
        else
          A && y({});
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
          A && y(p);
        } catch (o) {
          console.error("API execution failed:", o), A && y({});
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
          A && y(T);
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
  const P = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, z = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, F = (A) => A.icon ? /* @__PURE__ */ t.jsx("i", { className: A.icon }) : null, M = be(
    () => Re(g),
    [g]
  );
  console.log("flatOptions", M);
  const G = M.length, _ = be(() => e.search || !w ? M : M.filter(
    ([, A]) => A.toLowerCase().includes(w.toLowerCase())
  ), [e.search, w, M]), Y = (A, k) => {
    if (S.current?.open === !0 || O === !0)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (n) => n + 1 < _.length ? n + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (n) => n - 1 >= 0 ? n - 1 : _.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [n] = _[R] || [];
        n && r.setFieldValue(e.name, k ? n : [...r.values[e.name], n]), S.current && (S.current.open = !1);
      } else A.key === "Escape" && (S.current.open = !1, E(""), j(!1));
  };
  te(() => {
    f.current?.querySelector(
      `[data-index="${R}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [R]), te(() => {
    R >= _.length && C(0);
  }, [_, R]), te(() => {
    const A = e.autocomplete, k = e.ajaxchain;
    if (!A && !k) return;
    const n = r.values[e.name];
    if (!n) return;
    const u = Array.isArray(k) ? k : k ? [k] : [];
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
          v?.(o.target, H);
        }
      } catch (o) {
        console.error("Autocomplete / AjaxChain fetch failed", o);
      }
    })();
  }, [r.values[e.name]]), q.useEffect(() => {
    if (!e.search || !w.trim() || !e.table || !i) return;
    const A = Pe(e.columns ?? ""), k = new AbortController(), n = setTimeout(async () => {
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
          s[W] = [w, "LIKE"];
        });
        let o = e.valueKey ?? "value", h = e.labelKey ?? "title";
        const { data: x } = await le(i, u, e?.queryid, void 0, s), p = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, T = Array.isArray(p) ? p.map(X) : [], V = Q(
          o,
          h,
          T,
          e.groupKey
        );
        y(V);
      } catch (u) {
        if (K.isCancel(u)) return;
        console.error("Search fetch failed", u);
      }
    }, 500);
    return () => {
      clearTimeout(n), k.abort();
    };
  }, [w, l]);
  const J = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    const k = i?.baseURL + i?.uploadURL;
    if (!k) {
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
            url: k,
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
  console.log("options", g);
  const D = async (A, k, n) => {
    const u = k[A];
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
      const n = r.values[a] ?? "", u = w !== "" ? w : je(g, n) ?? String(n ?? ""), s = (h) => {
        const x = h.target.value;
        E(x), C(0), x.trim() ? j(!0) : (j(!1), r.setFieldValue(a, ""));
      }, o = (h) => {
        r.setFieldValue(a, h), E(""), j(!1), D("onChange", e, `${a}-${h}`);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${P} ${z}`,
            value: u,
            placeholder: e.placeholder || "Type to search...",
            onChange: s,
            onBlur: () => {
              setTimeout(() => j(!1), 150);
            },
            onKeyDown: (h) => {
              if (h.key === "Enter") {
                if (h.preventDefault(), _[R]) {
                  const [x] = _[R];
                  r.setFieldValue(a, x);
                } else w.trim() && r.setFieldValue(a, w.trim());
                j(!1);
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
            ref: f,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: _.length > 0 ? _.map(([h, x], p) => /* @__PURE__ */ t.jsx(
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
          /* @__PURE__ */ t.jsxs("label", { className: N, children: [
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
                /* @__PURE__ */ t.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (u) => {
                        E(u.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  _.length > 0 ? _.map(([u, s], o) => /* @__PURE__ */ t.jsxs(
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
                              r.setFieldValue(a, x), D("onChange", e, `${a}-${u}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
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
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[a] ? je(g, r.values[a]) ?? "Select option" : `Select ${e.label}` }),
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
                    value: w,
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
                _.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (n) => {
                      n.preventDefault(), n.stopPropagation(), r.setFieldValue(a, ""), S.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                _.length > 0 ? _.map(([n, u], s) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${a}-${n}`,
                    "data-index": s,
                    onClick: (o) => {
                      o.preventDefault(), o.stopPropagation(), r.setFieldValue(a, n), S.current?.removeAttribute("open"), E(""), C(0), D("onChange", e, `${a}-${n}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: a,
              className: `${P} ${z} min-h-[120px] resize-none`,
              onFocus: () => b(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), D("onChange", e, `${a}`);
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
          /* @__PURE__ */ t.jsxs("label", { className: N, children: [
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
                /* @__PURE__ */ t.jsxs("div", { ref: f, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (u) => {
                        E(u.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  _.length > 0 ? _.map(([u, s], o) => /* @__PURE__ */ t.jsxs(
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
                              r.setFieldValue(a, x), D("onChange", e, `${a}-${u}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${P} ${z} appearance-none cursor-pointer pr-12`,
              onFocus: () => b(!0),
              name: a,
              id: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value === "" ? "" : n.target.value
                ), D("onChange", e, `${a}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ne(g) && Object.entries(g).map(([n, u]) => /* @__PURE__ */ t.jsx("option", { value: n, className: "py-2", children: u }, n)),
                Ne(g) && Object.entries(g).map(([n, u]) => /* @__PURE__ */ t.jsx("optgroup", { label: n, children: Object.entries(u).map(([s, o]) => /* @__PURE__ */ t.jsx("option", { value: s, children: o }, s)) }, n))
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(g || {}).map(([n, u]) => /* @__PURE__ */ t.jsxs(
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
                    ), D("onChange", e, `${a}-${n}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(g || {}).map(([u, s]) => /* @__PURE__ */ t.jsxs(
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
                    r.setFieldValue(a, h), D("onChange", e, `${a}-${u}`);
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
      const n = r.values[a], u = w.trim(), s = Array.isArray(g) ? g : Object.entries(g || {}).map(([p, T]) => ({ value: p, label: T })), o = (p) => {
        p && !n.includes(p) && (r.setFieldValue(a, [...n, p]), E(""));
      }, h = (p) => {
        r.setFieldValue(
          a,
          n.filter((T) => T !== p)
        );
      }, x = (p) => s.find((T) => T.value === p)?.label ?? p;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${P} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
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
                  value: w,
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
      const A = e.multiple === !0, k = Array.isArray(r.values[a]) ? r.values[a] : r.values[a] ? [r.values[a]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: "file",
              className: `${P} ${z} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: a,
              multiple: A,
              onChange: (n) => {
                const u = n.currentTarget.files;
                u && J(u), D("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        k.map((n) => {
          const u = n?.split("/").pop();
          return u ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: u }) }, n) : null;
        }),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[a]) })
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
              id: a,
              name: a,
              value: r.values[a],
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), D("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${P} ${z} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
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
                ), D("onChange", e, `${a}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${P} ${z} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: e.type || "text",
              className: `${P} ${z} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), D("onChange", e, `${a}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: a,
              type: e.type || "text",
              className: `${P} ${z} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: a,
              value: r.values[a],
              onBlur: r.handleBlur,
              onChange: (n) => {
                r.setFieldValue(
                  a,
                  n.target.value
                ), D("onChange", e, `${a}`);
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
function ke({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: i = (g) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: v = {},
  sqlOpsUrls: d = {},
  refid: b
}) {
  const [g, y] = q.useState({}), w = (f, S) => {
    y((O) => ({
      ...O,
      [f]: S
    }));
  }, { initialValues: E, validationSchema: R } = q.useMemo(() => {
    const f = {}, S = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], f, S, c);
    }), {
      initialValues: f,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: B.object().shape(R),
    onSubmit: (f) => {
      i(f);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([f, S], O) => /* @__PURE__ */ t.jsx(_e, { title: f, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((j, I) => de(j.hidden) || j.type === "geolocation" || j.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: b,
            sqlOpsUrls: d,
            components: v,
            field: j,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...g[j.name] ? { optionsOverride: g[j.name] } : {}
          },
          j.name
        )
      },
      j?.name ?? `field-${I}`
    )) }) }, f)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: l, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Me({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: i = (y) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: v = {},
  sqlOpsUrls: d = {},
  widget: b,
  refid: g
}) {
  const y = Object.keys(r), [w, E] = q.useState(0), [R, C] = q.useState({}), f = (N, F) => {
    C((M) => ({
      ...M,
      [N]: F
    }));
  }, { initialValues: S, validationSchema: O, stepperSchemas: j } = q.useMemo(() => {
    const N = {}, F = {}, M = {};
    return b ? Object.entries(r).forEach(([G, _]) => {
      const Y = {};
      ne(_, N, Y, c), M[G] = Y;
    }) : Object.entries(r).forEach(([G, _]) => {
      ne(_, N, F, c);
    }), {
      initialValues: N,
      validationSchema: F,
      stepperSchemas: M
    };
  }, [r, c, b]), I = y[w] ?? null, $ = b && I ? j[I] ?? {} : O, a = ie({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: B.object().shape($),
    onSubmit: (N) => {
      b ? (w < y.length - 1 && E((F) => F + 1), w === y.length - 1 && i(N)) : i(N);
    }
  }), P = async (N) => {
    if (N.preventDefault(), !b) {
      const F = await a.validateForm();
      if (Object.keys(F).length > 0) {
        alert("Please fill all required fields before submitting."), a.setTouched(
          Object.keys(F).reduce((M, G) => ({ ...M, [G]: !0 }), {})
        );
        return;
      }
    }
    a.handleSubmit(N);
  }, z = () => {
    E((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: y.map((N, F) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(F),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${w === F ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: N })
      },
      N
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: P, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && r[I]?.map((N, F) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[ue(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  he,
                  {
                    refid: g,
                    sqlOpsUrls: d,
                    field: N,
                    formik: a,
                    methods: m,
                    components: v,
                    setFieldOptions: f,
                    ...R[N.name] ? { optionsOverride: R[N.name] } : {}
                  },
                  N.name
                )
              },
              N?.name ?? `field-${F}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${w > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              w > 0 && /* @__PURE__ */ t.jsx("button", { onClick: z, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: l, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: b ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                w + 1,
                " of ",
                y.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: y.map((N, F) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${F === w ? "bg-action w-6" : "bg-gray-300"}`
              },
              F
            )) })
          ] }) })
        ]
      },
      y[w]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: c,
  onSubmit: i = (b) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  sqlOpsUrls: v = {},
  refid: d
}) {
  const b = Fe(r, v.operation), [g, y] = q.useState({}), w = (f, S) => {
    y((O) => ({
      ...O,
      [f]: S
    }));
  }, { initialValues: E, validationSchema: R } = q.useMemo(() => {
    const f = {}, S = {};
    return b.forEach((O) => {
      ne([O], f, S, c);
    }), {
      initialValues: f,
      validationSchema: S
    };
  }, [b, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: B.object().shape(R),
    onSubmit: (f) => {
      i(f);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: b.map((f, S) => de(f.hidden) || f.type === "geolocation" || f.vmode === "edit" && v.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(f.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: d,
            sqlOpsUrls: v,
            field: f,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...g[f.name] ? { optionsOverride: g[f.name] } : {}
          }
        )
      },
      f?.name ?? `field-${S}`
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
  onSubmit: i = (g) => {
  },
  onCancel: l = () => {
  },
  methods: m = {},
  components: v = {},
  sqlOpsUrls: d = {},
  refid: b
}) {
  const [g, y] = q.useState({}), w = (f, S) => {
    y((O) => ({
      ...O,
      [f]: S
    }));
  }, { initialValues: E, validationSchema: R } = q.useMemo(() => {
    const f = {}, S = {};
    return Object.values(r).flat().forEach((O) => {
      ne([O], f, S, c);
    }), {
      initialValues: f,
      validationSchema: S
    };
  }, [r, c]), C = ie({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: B.object().shape(R),
    onSubmit: (f) => {
      i(f);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([f, S], O) => /* @__PURE__ */ t.jsx(ze, { title: f, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((j, I) => de(j.hidden) || j.type === "geolocation" || j.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(j.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: b,
            sqlOpsUrls: d,
            components: v,
            field: j,
            formik: C,
            methods: m,
            setFieldOptions: w,
            ...g[j.name] ? { optionsOverride: g[j.name] } : {}
          },
          j.name
        )
      },
      j?.name ?? `field-${I}`
    )) }) }, f)) }),
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
    const v = await K.post(
      e.baseURL + e.dbopsFetch,
      { refid: m, datahash: i },
      { headers: se(e) }
    );
    return v.data?.data ?? v.data;
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
  initialvalues: v = {}
}) {
  let d = $e(e);
  const b = e.endPoints, g = e?.source?.refid, y = Oe(e?.fields ?? {}, b?.operation), [w, E] = q.useState(v), R = q.useMemo(() => Ce(e.fields), [e.fields]);
  q.useEffect(() => {
    let S = !0;
    return (async () => {
      const j = e?.source ?? {};
      if (!j?.type) {
        S && E({});
        return;
      }
      if (j.type === "method") {
        const I = j.method, $ = I ? r[I] : void 0;
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
      if (j.type === "api" && b?.operation !== "create")
        try {
          const I = await K({
            method: j.method || "GET",
            url: j.url ?? "",
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          });
          S && E(I.data ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), S && E({});
        }
      if (j.type === "sql" && j.refid && j.refid !== "0" && b?.operation !== "create" || b?.operation !== "create" && j.dbopsid) {
        if (!b) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const I = await De.fetch(b, {
            source: {
              ...j,
              table: j.table,
              columns: j.columns,
              where: U(j.where, {
                refid: g
              })
            },
            fields: fe(e.fields, b.operation)
          }, j?.dbopsid);
          S && E(I);
        } catch (I) {
          console.error("API fetch failed:", I);
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
    let j = null;
    if (R.length > 0)
      try {
        j = await Te();
      } catch ($) {
        console.log("catch fetchGeolocation", $), j = null;
      }
    const I = {
      ...S,
      ...Object.fromEntries(
        R.map(($) => [$, j])
      )
    };
    if (O.type === "method") {
      const $ = O.method, a = $ ? r[$] : void 0;
      if (a)
        try {
          const P = await Promise.resolve(a(I));
          if (m?.(P), r?.handleActions) {
            let z = b?.operation === "update" ? g : P?.data?.refid;
            const N = e?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            r.handleActions(N);
          }
        } catch (P) {
          m?.(P), console.error("Method execution failed:", P);
        }
    }
    if (O.type === "api") {
      if (!b) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await K({
          method: O.method || "POST",
          url: b.baseURL + O.endpoint,
          data: I ?? {},
          headers: {
            Authorization: `Bearer ${b?.accessToken}`
          }
        });
        if (m?.($), r?.handleActions) {
          let a = b.operation === "update" ? g : $?.data?.refid;
          const P = e?.gotolink?.replace(
            "{hashid}",
            String(a)
          );
          r.handleActions(P);
        }
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
        let a = !1, P;
        O?.dbopsid && (a = !0, P = O?.dbopsid);
        const z = await K({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!a) {
          let F = {
            ...O
          };
          O.where && (F = {
            ...O,
            where: U(O.where, {
              refid: g
            })
          }), P = (await K({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: F,
              fields: fe(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: z.data.refhash
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const N = await K({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: P,
            fields: I,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (console.log("res", N), m?.(N), r?.handleActions) {
          let F = $.operation === "update" ? g : N?.data?.refid;
          const M = e?.gotolink?.replace(
            "{hashid}",
            String(F)
          );
          r.handleActions(M);
        }
      } catch (a) {
        m?.(a), console.error("API fetch failed:", a);
      }
    }
  }, f = {
    accordion: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: w,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: b,
        refid: g
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: w,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: b,
        refid: g
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: w,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        widget: e?.widget,
        sqlOpsUrls: b,
        refid: g
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: w,
        onSubmit: C,
        onCancel: i,
        methods: r,
        components: l,
        sqlOpsUrls: b,
        refid: g
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: f[d] ?? f.simple });
}
export {
  Ge as LogiksForm
};
