import G, { useState as re, useRef as le, useEffect as J, useMemo as be } from "react";
import B from "axios";
import * as D from "yup";
import { useFormik as ue } from "formik";
var ie = { exports: {} }, ae = {};
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
function Ce() {
  if (ye) return ae;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(n, m, b) {
    var w = null;
    if (b !== void 0 && (w = "" + b), m.key !== void 0 && (w = "" + m.key), "key" in m) {
      b = {};
      for (var u in m)
        u !== "key" && (b[u] = m[u]);
    } else b = m;
    return m = b.ref, {
      $$typeof: e,
      type: n,
      key: w,
      ref: m !== void 0 ? m : null,
      props: b
    };
  }
  return ae.Fragment = r, ae.jsx = l, ae.jsxs = l, ae;
}
var se = {};
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
function Ie() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === E ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case O:
          return "Fragment";
        case p:
          return "Profiler";
        case d:
          return "StrictMode";
        case F:
          return "Suspense";
        case I:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case A:
            return "Portal";
          case S:
            return (a.displayName || "Context") + ".Provider";
          case g:
            return (a._context.displayName || "Context") + ".Consumer";
          case j:
            var o = a.render;
            return a = a.displayName, a || (a = o.displayName || o.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case M:
            return o = a.displayName || null, o !== null ? o : e(a.type) || "Memo";
          case z:
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
    function l(a) {
      try {
        r(a);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var h = o.error, v = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), r(a);
      }
    }
    function n(a) {
      if (a === O) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var o = e(a);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function m() {
      var a = s.A;
      return a === null ? null : a.getOwner();
    }
    function b() {
      return Error("react-stack-top-frame");
    }
    function w(a) {
      if (L.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, o) {
      function h() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: h,
        configurable: !0
      });
    }
    function x() {
      var a = e(this.type);
      return Y[a] || (Y[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function c(a, o, h, v, _, N, f, R) {
      return h = N.ref, a = {
        $$typeof: C,
        type: a,
        key: o,
        props: N,
        _owner: _
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: x
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
        value: f
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function P(a, o, h, v, _, N, f, R) {
      var T = o.children;
      if (T !== void 0)
        if (v)
          if (q(T)) {
            for (v = 0; v < T.length; v++)
              i(T[v]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else i(T);
      if (L.call(o, "key")) {
        T = e(a);
        var k = Object.keys(o).filter(function(Z) {
          return Z !== "key";
        });
        v = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", Q[T + v] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          T,
          k,
          T
        ), Q[T + v] = !0);
      }
      if (T = null, h !== void 0 && (l(h), T = "" + h), w(o) && (l(o.key), T = "" + o.key), "key" in o) {
        h = {};
        for (var V in o)
          V !== "key" && (h[V] = o[V]);
      } else h = o;
      return T && u(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), c(
        a,
        T,
        N,
        _,
        m(),
        h,
        f,
        R
      );
    }
    function i(a) {
      typeof a == "object" && a !== null && a.$$typeof === C && a._store && (a._store.validated = 1);
    }
    var y = G, C = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), S = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), s = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, q = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var W, Y = {}, X = y["react-stack-bottom-frame"].bind(
      y,
      b
    )(), H = K(n(b)), Q = {};
    se.Fragment = O, se.jsx = function(a, o, h, v, _) {
      var N = 1e4 > s.recentlyCreatedOwnerStacks++;
      return P(
        a,
        o,
        h,
        !1,
        v,
        _,
        N ? Error("react-stack-top-frame") : X,
        N ? K(n(a)) : H
      );
    }, se.jsxs = function(a, o, h, v, _) {
      var N = 1e4 > s.recentlyCreatedOwnerStacks++;
      return P(
        a,
        o,
        h,
        !0,
        v,
        _,
        N ? Error("react-stack-top-frame") : X,
        N ? K(n(a)) : H
      );
    };
  }()), se;
}
var fe;
function Fe() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? ie.exports = Ce() : ie.exports = Ie()), ie.exports;
}
var t = Fe();
function Pe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function _e(e, r = "create", l = "Info") {
  const n = {};
  let m = !1;
  if (Object.values(e).forEach((w) => {
    w.group && (m = !0);
  }), !m) return {};
  const b = [];
  return Object.entries(e).forEach(([w, u]) => {
    if (u.vmode === "edit" && r === "create") return;
    const x = { ...u, name: w };
    if (u.group) {
      const c = u.group;
      n[c] || (n[c] = []), n[c].push(x);
    } else
      b.push(x);
  }), b.length > 0 ? {
    [l]: b,
    ...n
  } : n;
}
function je(e, r = "create") {
  const l = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && r === "create" || (l[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), l;
}
const oe = (e, r, l, n, m, b) => {
  const w = b === "create" && m ? Ee(m) : {};
  e.forEach((u) => {
    const x = u?.name;
    if (!x) return;
    let c = n?.[x];
    const P = b === "create" && m ? $e(u) : null;
    b === "create" && P && w[P] !== void 0 && c == null && (c = w[P]), c == null && (c = u.default), u.multiple === !0 || u.type === "checkbox" || u.type === "tags" ? r[x] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((y) => y.trim()).filter(Boolean) : [] : u.type === "json" ? r[x] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : u.type === "date" ? r[x] = typeof c == "string" ? c.slice(0, 10) : "" : u.type === "time" ? typeof c == "string" ? c.includes("T") ? r[x] = c.slice(11, 16) : r[x] = c.slice(0, 5) : r[x] = "" : x === "blocked" || x === "blacklist" ? r[x] = String(c ?? "false") : r[x] = c ?? "";
    let i;
    u.type === "file" ? i = u.multiple ? D.array().of(D.mixed()) : D.mixed() : u.multiple === !0 || u.type === "checkbox" || u.type === "tags" ? i = D.array().of(D.string()) : u.type === "email" ? i = D.string().email("Invalid email") : u.type === "number" ? i = D.number().typeError("Must be a number") : u.type === "json" ? i = D.string().test("json", "Invalid JSON", (y) => {
      if (!y) return !0;
      try {
        return JSON.parse(y), !0;
      } catch {
        return !1;
      }
    }) : i = D.string(), u.required && (i = i.required(
      u.error_message || `${u.label || x} is required`
    )), u?.validate?.regex && typeof u.validate.regex == "string" && (i = i.matches(
      new RegExp(u?.validate?.regex),
      u?.error_message || "Invalid input format"
    )), u?.validate && Object.entries(u.validate).forEach(([y, C]) => {
      switch (y) {
        case "email":
          C && (i = i.email("Invalid email format"));
          break;
        case "mobile":
          i = i.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          i = i.matches(
            new RegExp(C),
            `Must match pattern: ${C}`
          );
          break;
        case "date":
          i = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((A, O) => {
            if (typeof O == "string") {
              const d = O.replace(/-/g, "/"), [p, g, S] = d.split("/");
              if (p && g && S)
                return /* @__PURE__ */ new Date(`${S}-${g}-${p}`);
            }
            return A;
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
          i = D.number().typeError("Must be a decimal").transform((A, O) => {
            if (O == null || O === "") return;
            const d = Number(O);
            if (isNaN(d)) return A;
            if (typeof A == "number" && !isNaN(A)) {
              const p = Number(A);
              return Number.isInteger(p) ? Number(d.toFixed(p)) : d;
            }
            return d;
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
            (A) => A && A.toUpperCase()
          );
          break;
        case "lower":
          i = i.transform(
            (A) => A && A.toLowerCase()
          );
          break;
        case "length-min": {
          const A = Number(C);
          isNaN(A) || (i = i.min(A, `Minimum length is ${A}`));
          break;
        }
        case "length-max": {
          const A = Number(C);
          isNaN(A) || (i = i.max(A, `Maximum length is ${A}`));
          break;
        }
      }
    }), l[x] = i;
  });
}, de = {
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
function he(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const me = (e) => e === !0 || e === "true", U = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (l, n) => r[n] !== void 0 ? String(r[n]) : l
) : Array.isArray(e) ? e.map((l) => U(l, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([l, n]) => [
    U(l, r),
    U(n, r)
  ])
) : e, ee = (e, r, l, n) => {
  if (!Array.isArray(l) || l.length === 0) return {};
  const m = n ?? (l[0] && typeof l[0] == "object" && "category" in l[0] ? "category" : void 0);
  if (!m) {
    const w = {};
    return l.forEach((u) => {
      const x = u[e], c = u[r];
      x != null && c != null && (w[String(x)] = String(c));
    }), w;
  }
  const b = {};
  return l.forEach((w) => {
    const u = w[m] ?? "Others", x = w[e], c = w[r];
    x == null || c == null || (b[u] || (b[u] = {}), b[u][String(x)] = String(c));
  }), b;
}, we = (e, r) => {
  if (!e || r == null) return;
  const l = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[l];
  for (const m of Object.values(e))
    if (l in m)
      return m[l];
}, Me = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (n) => [
        String(n.value),
        String(n.title ?? n.label ?? n.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([n, m]) => [String(n), m]) : Object.values(e).flatMap(
    (n) => Object.entries(n).map(
      ([m, b]) => [String(m), b]
    )
  ) : [];
}, Ne = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null && !Array.isArray(r);
};
async function Le() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (n, m) => {
        navigator.geolocation.getCurrentPosition(n, m, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: r, longitude: l } = e.coords;
    return `${r},${l}`;
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
const ze = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function ke(e, r = "create") {
  return Object.entries(e).filter(([, l]) => !(l.vmode === "edit" && r === "create")).map(([l, n]) => ({
    ...n,
    name: l
  }));
}
function De(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Ve(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const l = r.match(/^(.+?)\s+as\s+.+$/i);
    return l ? l[1]?.trim() : r;
  }).filter((r) => !!r);
}
const te = (e) => {
  const r = {};
  for (const [l, n] of Object.entries(e)) {
    const m = l.includes(".") ? l.split(".").pop() : l;
    if (m in r) {
      console.warn(`Duplicate key after normalization: ${m}`);
      continue;
    }
    r[m] = n;
  }
  return r;
}, Be = "__form_persist__", Ae = (e) => `${Be}:${e}`;
function $e(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Ee(e) {
  try {
    return JSON.parse(localStorage.getItem(Ae(e)) || "{}");
  } catch {
    return {};
  }
}
function qe(e, r, l) {
  const n = Ee(e);
  localStorage.setItem(
    Ae(e),
    JSON.stringify({
      ...n,
      [r]: l
    })
  );
}
const ne = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), xe = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ne(e) }
)).data.refhash, ge = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ne(e) }
)).data.refid, Ke = {
  async fetch(e, r, l, n) {
    const m = await xe(e);
    let b = !1, w;
    l && (b = !0, w = l), b || (w = await ge(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: m,
      srcid: n
    }));
    const u = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: w, datahash: m },
      { headers: ne(e) }
    );
    return u.data?.data ?? u.data;
  },
  async create(e, r, l) {
    const n = await xe(e), m = await ge(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: l
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: m, fields: r.values, datahash: n },
      { headers: ne(e) }
    )).data;
  },
  async update(e, r, l) {
    const n = await xe(e), m = await ge(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: l
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: m, fields: r.values, datahash: n },
      { headers: ne(e) }
    )).data;
  }
};
async function ce(e, r, l, n = void 0, m = void 0, b = {}) {
  try {
    let w = l;
    return w || (w = (await B({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {}, srcid: m },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await B({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: w,
        filter: b,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (w) {
    throw w;
  }
}
function Ge({
  field: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: m,
  module_refid: b = "menuManager.main",
  optionsOverride: w,
  setFieldOptions: u
}) {
  const [x, c] = re(!1), [P, i] = re(
    w ?? e.options ?? {}
  );
  le(null);
  const [y, C] = re(""), [A, O] = re(0), d = le(null), p = le(null), [g, S] = re(!1), j = le(y), F = e.disabled === !0;
  J(() => {
    j.current = y;
  }, [y]);
  const I = (a) => {
    if (F) {
      a.preventDefault(), p.current?.removeAttribute("open");
      return;
    }
    a.currentTarget.open || C("");
  };
  J(() => {
    w && Object.keys(w).length !== 0 && i(w);
  }, [w]), J(() => {
    const a = (o) => {
      p.current && !p.current.contains(o.target) && (p.current.open = !1, C(""));
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []);
  const M = e.name;
  J(() => {
    let a = !0;
    return (async () => {
      let h = e.valueKey ?? "value", v = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const T = Object.values(e.options);
          if (T.length && typeof T[0] == "string") {
            i(e.options);
            return;
          }
        }
        const f = (Array.isArray(e.options) ? e.options : [e.options]).map(te), R = ee(
          h,
          v,
          f,
          e.groupKey
          // auto-uses `category` if present
        );
        i(R);
        return;
      }
      const _ = e?.source ?? {};
      if (e.type === "dataMethod") {
        const N = e.method, f = N ? l[N] : void 0;
        if (f)
          try {
            const R = await Promise.resolve(f()), T = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R, k = Array.isArray(T) ? T.map(te) : [], V = ee(h, v, k, e.groupKey);
            a && i(V);
          } catch (R) {
            console.error("Method execution failed:", R), a && i({});
          }
        else
          a && i({});
      }
      if (_.type === "api" && _.url)
        try {
          const N = await B({
            method: _.method || "GET",
            url: _.url,
            data: _.body ?? {},
            params: _.params ?? {},
            headers: _.headers ?? {}
          }), f = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, R = Array.isArray(f) ? f.map(te) : [], T = ee(h, v, R, e.groupKey);
          a && i(T);
        } catch (N) {
          console.error("API execution failed:", N), a && i({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let N;
          if (e.type === "dataSelector")
            N = {
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
            N = {
              table: e.table,
              cols: e.columns,
              where: e.where ? m ? U(e.where, { refid: m }) : e.where : void 0
            };
          }
          const f = await ce(n, N, e?.queryid, void 0, b), R = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f, T = Array.isArray(R) ? R.map(te) : [], k = ee(h, v, T, e.groupKey);
          a && i(k);
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      a = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    m,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey
  ]);
  const z = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, $ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, E = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, s = be(
    () => Me(P),
    [P]
  ), L = s.length, q = be(() => e.search || !y ? s : s.filter(
    ([, a]) => a.toLowerCase().includes(y.toLowerCase())
  ), [e.search, y, s]), K = (a, o) => {
    if (p.current?.open === !0 || g === !0)
      if (a.key === "ArrowDown")
        a.preventDefault(), O(
          (h) => h + 1 < q.length ? h + 1 : 0
        );
      else if (a.key === "ArrowUp")
        a.preventDefault(), O(
          (h) => h - 1 >= 0 ? h - 1 : q.length - 1
        );
      else if (a.key === "Enter") {
        a.preventDefault();
        const [h] = q[A] || [];
        if (h) {
          let v = o ? h : [...r.values[e.name], h];
          r.setFieldValue(e.name, v), Q(v);
        }
        p.current && (p.current.open = !1);
      } else a.key === "Escape" && (p.current.open = !1, C(""), S(!1));
  };
  J(() => {
    d.current?.querySelector(
      `[data-index="${A}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [A]), J(() => {
    A >= q.length && O(0);
  }, [q, A]), J(() => {
    const a = e.autocomplete, o = e.ajaxchain;
    if (!a && !o) return;
    const h = r.values[e.name];
    if (!h) return;
    const v = Array.isArray(o) ? o : o ? [o] : [];
    (async () => {
      try {
        if (De(a)) {
          const N = a.src;
          if (!N || !n) return;
          const f = U(N.where ?? {}, {
            refid: h
          }), R = {
            ...N,
            table: N.table,
            cols: N.columns,
            where: f
          }, { data: T } = await ce(n, R, e?.queryid, void 0, b), k = Array.isArray(T?.data) ? T.data[0] : T?.data;
          k && a.target.split(",").map((V) => V.trim()).forEach((V) => {
            k[V] !== void 0 && r.setFieldValue(V, k[V]);
          });
        }
        for (const N of v) {
          const f = N.src;
          if (!N || typeof N != "object" || !f || typeof f != "object" || !n) continue;
          let R;
          if (!f.queryid) {
            if (!f.table || !f.columns)
              throw new Error("SQL query requires field.table");
            const Oe = U(f?.where ?? {}, {
              refid: h
            });
            R = {
              ...f,
              table: f.table,
              cols: f.columns,
              where: Oe
            };
          }
          const { data: T } = await ce(n, R, f?.queryid, h, b);
          let k = e.valueKey ?? "value", V = e.labelKey ?? "title";
          const Z = Array.isArray(T?.data?.data) ? T.data.data : Array.isArray(T?.data) ? T.data : T, Re = Array.isArray(Z) ? Z.map(te) : [], Te = ee(
            k,
            V,
            Re,
            e.groupKey
          );
          u?.(N.target, Te);
        }
      } catch (N) {
        console.error("Autocomplete / AjaxChain fetch failed", N);
      }
    })();
  }, [r.values[e.name]]), J(() => {
    if (!e.search || !y.trim() || !e.table || !n) return;
    const a = Ve(e.columns ?? ""), o = new AbortController(), h = setTimeout(async () => {
      try {
        let v;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Z = m ? U(e.where ?? {}, {
            refid: m
          }) : e.where;
          v = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Z
          };
        }
        let _ = {};
        Array.isArray(a) && a.forEach((Z) => {
          _[Z] = [y, "LIKE"];
        });
        let N = e.valueKey ?? "value", f = e.labelKey ?? "title";
        const { data: R } = await ce(n, v, e?.queryid, void 0, b, _), T = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R, k = Array.isArray(T) ? T.map(te) : [], V = ee(
          N,
          f,
          k,
          e.groupKey
        );
        i(V);
      } catch (v) {
        if (B.isCancel(v)) return;
        console.error("Search fetch failed", v);
      }
    }, 500);
    return () => {
      clearTimeout(h), o.abort();
    };
  }, [y, m]);
  const W = async (a) => {
    if (a.length === 0) {
      console.error("No file");
      return;
    }
    const o = n?.baseURL + n?.uploadURL;
    if (!o) {
      console.error("No Upload URL ");
      return;
    }
    const h = e.multiple === !0;
    try {
      const v = await Promise.all(
        Array.from(a).map(async (N) => {
          const f = new FormData();
          return f.append("file", N), (await B({
            method: "POST",
            url: o,
            data: f,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      let _ = h ? v.map((N) => N.path) : v[0]?.path;
      r.setFieldValue(
        M,
        _
      ), Q(_);
    } catch (v) {
      console.error("File upload failed", v), r.setFieldError(M, "File upload failed");
    }
  }, Y = async (a, o, h) => {
    const v = o[a];
    if (!v) return;
    const _ = l?.[v];
    if (typeof _ != "function") {
      console.error(`Method "${String(v)}" not found`);
      return;
    }
    try {
      await Promise.resolve(_(h));
    } catch (N) {
      console.error(`Method "${String(v)}" failed`, N);
    }
  }, X = (a) => {
    if (F) return;
    const o = a.target.value;
    C(o), O(0), o.trim() ? S(!0) : (S(!1), r.setFieldValue(M, ""));
  }, H = (a) => {
    r.setFieldValue(M, a), Q(a), C(""), S(!1), Y("onChange", e, `${M}-${a}`);
  };
  function Q(a) {
    const o = $e(e);
    o && b && qe(b, o, a);
  }
  return {
    setHighlightedIndex: O,
    executeFieldMethod: Y,
    handleFileUpload: W,
    handleKeyDown: K,
    handleToggle: I,
    setSearch: C,
    setOpen: S,
    setIsFocused: c,
    handleInputChange: X,
    handleSelect: H,
    handlePersist: Q,
    optionCount: L,
    baseInputClasses: z,
    focusClasses: $,
    labelClasses: E,
    search: y,
    highlightedIndex: A,
    options: P,
    isDisabled: F,
    key: M,
    filteredOptions: q,
    open: g,
    listRef: d,
    detailsRef: p,
    isFocused: x
  };
}
function Se({
  field: e,
  isDisabled: r,
  handleToggle: l,
  detailsRef: n,
  handleKeyDown: m,
  valueArray: b,
  labelClasses: w,
  listRef: u,
  search: x,
  filteredOptions: c,
  highlightedIndex: P,
  setSearch: i,
  formik: y,
  setHighlightedIndex: C,
  executeFieldMethod: A,
  handlePersist: O
}) {
  const d = e.name;
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsxs("label", { className: w, children: [
      e.label,
      e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t.jsxs(
      "details",
      {
        className: `relative w-full ${r ? " opacity-70" : ""}`,
        onToggle: l,
        ref: n,
        onKeyDown: (p) => {
          r || m(p, !1);
        },
        children: [
          /* @__PURE__ */ t.jsxs(
            "summary",
            {
              className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${r ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
              children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: b?.length > 0 ? b.join(", ") : `Select ${e.label}` }),
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
              ]
            }
          ),
          !r && /* @__PURE__ */ t.jsxs("div", { ref: u, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
            e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: x,
                onChange: (p) => {
                  r || (i(p.target.value), C(0));
                },
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
              }
            ) }),
            c.length > 0 ? c.map(([p, g], S) => /* @__PURE__ */ t.jsxs(
              "label",
              {
                htmlFor: `${d}-${p}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${b?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : P === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      id: `${d}-${p}`,
                      type: "checkbox",
                      checked: b?.includes(p),
                      onChange: (j) => {
                        const F = j.target.checked ? [...b, p] : b?.filter((I) => I !== p);
                        y.setFieldValue(d, F), O(F), A("onChange", e, `${d}-${p}`);
                      },
                      onBlur: y.handleBlur,
                      disabled: r,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  g
                ]
              },
              p
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ]
      }
    ),
    y.touched[d] && y.errors[d] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(y.errors[d]) })
  ] });
}
function pe({
  field: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: m,
  module_refid: b = "menuManager.main",
  optionsOverride: w,
  setFieldOptions: u
}) {
  const {
    setHighlightedIndex: x,
    executeFieldMethod: c,
    handleFileUpload: P,
    handleKeyDown: i,
    handleToggle: y,
    setSearch: C,
    setOpen: A,
    setIsFocused: O,
    handleInputChange: d,
    handleSelect: p,
    handlePersist: g,
    optionCount: S,
    baseInputClasses: j,
    focusClasses: F,
    labelClasses: I,
    search: M,
    highlightedIndex: z,
    options: $,
    isDisabled: E,
    key: s,
    filteredOptions: L,
    open: q,
    listRef: K,
    detailsRef: W,
    isFocused: Y
  } = Ge({
    field: e,
    formik: r,
    methods: l,
    sqlOpsUrls: n,
    refid: m,
    module_refid: b,
    ...w && { optionsOverride: w },
    ...u && { setFieldOptions: u }
  }), X = (H) => H.icon ? /* @__PURE__ */ t.jsx("i", { className: H.icon }) : null;
  switch (e.type) {
    case "autocomplete": {
      const a = r.values[s] ?? "", o = M !== "" ? M : we($, a) ?? String(a ?? "");
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${j} ${F}`,
            value: o,
            placeholder: e.placeholder || "Type to search...",
            onChange: d,
            onBlur: () => {
              setTimeout(() => A(!1), 150);
            },
            onKeyDown: (h) => {
              if (h.key === "Enter") {
                if (h.preventDefault(), L[z]) {
                  const [v] = L[z];
                  r.setFieldValue(s, v), g(v);
                } else M.trim() && (r.setFieldValue(s, M.trim()), g(M.trim()));
                A(!1);
                return;
              }
              i(h, !0);
            },
            disabled: E
          }
        ),
        q && !E && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: K,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: L.length > 0 ? L.map(([h, v], _) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${s}-${h}`,
                "data-index": _,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${z === _ ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => p(h),
                children: v
              },
              h
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${o}" ` })
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
        const a = r.values[s];
        return /* @__PURE__ */ t.jsx(
          Se,
          {
            field: e,
            isDisabled: E,
            handleToggle: y,
            detailsRef: W,
            handleKeyDown: i,
            valueArray: a,
            labelClasses: I,
            listRef: K,
            search: M,
            filteredOptions: L,
            highlightedIndex: z,
            setSearch: C,
            formik: r,
            executeFieldMethod: c,
            setHighlightedIndex: x,
            handlePersist: g
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: `relative w-full ${E ? "opacity-70" : ""}`,
            onToggle: y,
            ref: W,
            onKeyDown: (a) => {
              E || i(a, !0);
            },
            children: [
              /* @__PURE__ */ t.jsxs(
                "summary",
                {
                  className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${E ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? we($, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
                  ]
                }
              ),
              !E && /* @__PURE__ */ t.jsxs("div", { ref: K, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: M,
                    onChange: (a) => {
                      C(a.target.value), x(0);
                    },
                    onKeyDown: (a) => i(a, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                L.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, ""), g(""), W.current?.removeAttribute("open"), C("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                L.length > 0 ? L.map(([a, o], h) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${s}-${a}`,
                    "data-index": h,
                    onClick: (v) => {
                      v.preventDefault(), v.stopPropagation(), r.setFieldValue(s, a), g(a), W.current?.removeAttribute("open"), C(""), x(0), c("onChange", e, `${s}-${a}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === a ? "bg-indigo-50 text-indigo-600 font-medium" : z === h ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: o
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
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              className: `${j} ${F} min-h-[120px] resize-none`,
              onFocus: () => O(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: E
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const a = r.values[s];
        return /* @__PURE__ */ t.jsx(
          Se,
          {
            field: e,
            isDisabled: E,
            handleToggle: y,
            detailsRef: W,
            handleKeyDown: i,
            valueArray: a,
            labelClasses: I,
            listRef: K,
            search: M,
            filteredOptions: L,
            highlightedIndex: z,
            setSearch: C,
            formik: r,
            executeFieldMethod: c,
            setHighlightedIndex: x,
            handlePersist: g
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${j} ${F} appearance-none ${E ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => O(!0),
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
              },
              disabled: E,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ne($) && Object.entries($).map(([a, o]) => /* @__PURE__ */ t.jsx("option", { value: a, className: "py-2", children: o }, a)),
                Ne($) && Object.entries($).map(([a, o]) => /* @__PURE__ */ t.jsx("optgroup", { label: a, children: Object.entries(o).map(([h, v]) => /* @__PURE__ */ t.jsx("option", { value: h, children: v }, h)) }, a))
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
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${S > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries($ || {}).map(([a, o]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${a}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${a}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === a,
                  value: a,
                  onChange: (h) => {
                    r.setFieldValue(s, h.target.value), g(h.target.value), c("onChange", e, `${s}-${a}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: E,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${E ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              o
            ]
          },
          a
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const a = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries($ || {}).map(([o, h]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${o}`,
                  type: "checkbox",
                  checked: a.includes(o),
                  onChange: (v) => {
                    const _ = v.target.checked ? [...a, o] : a.filter((N) => N !== o);
                    r.setFieldValue(s, _), g(_), c("onChange", e, `${s}-${o}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: E,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${E ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              h
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const a = r.values[s], o = M.trim(), h = Array.isArray($) ? $ : Object.entries($ || {}).map(([f, R]) => ({ value: f, label: R })), v = (f) => {
        if (!E && f && !a.includes(f)) {
          let R = [...a, f];
          r.setFieldValue(s, R), g(R), C("");
        }
      }, _ = (f) => {
        let R = a.filter((T) => T !== f);
        r.setFieldValue(
          s,
          R
        ), g(R);
      }, N = (f) => h.find((R) => R.value === f)?.label ?? f;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${j} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${E ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !E && document.getElementById(`${s}-input`)?.focus(),
            children: [
              a.map((f) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: N(f) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (R) => {
                          R.stopPropagation(), E || _(f);
                        },
                        onMouseDown: (R) => R.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                f
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: M,
                  onChange: (f) => C(f.target.value),
                  onKeyDown: (f) => {
                    (f.key === "Enter" || f.key === ",") && (f.preventDefault(), v(o));
                  },
                  placeholder: a.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: E
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
      const H = e.multiple === !0, Q = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: X(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "file",
              className: `${j} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => O(!0),
              name: s,
              multiple: H,
              onChange: (a) => {
                const o = a.currentTarget.files;
                o && P(o), c("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: E
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Q.map((a) => {
          const o = a?.split("/").pop();
          return o ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: o }) }, a) : null;
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
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
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: E,
              className: `${j} ${F} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "relative",
            children: [
              /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ t.jsx("i", { className: "fa-solid fa-calendar" }) }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: s,
                  type: "date",
                  name: s,
                  min: e.min,
                  max: e.max,
                  value: r.values[s],
                  onChange: (a) => {
                    r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
                  },
                  onBlur: r.handleBlur,
                  placeholder: e.placeholder,
                  disabled: E,
                  className: `${j} ${F} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "number":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: X(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "number",
              className: `${j} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => O(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: E,
              min: e.min ?? 1,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: X(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: e.type || "text",
              className: `${j} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => O(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), g(a.target.value), c("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: E,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Ye({ title: e, children: r, isFirst: l }) {
  const [n, m] = re(l);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => m(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${n ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function We({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (P) => {
  },
  onCancel: m = () => {
  },
  methods: b = {},
  components: w = {},
  sqlOpsUrls: u = {},
  refid: x,
  module_refid: c
}) {
  const [P, i] = G.useState({}), y = (d, p) => {
    i((g) => ({
      ...g,
      [d]: p
    }));
  }, { initialValues: C, validationSchema: A } = G.useMemo(() => {
    const d = {}, p = {};
    return Object.values(r).flat().forEach((g) => {
      oe([g], d, p, l, c, u.operation);
    }), {
      initialValues: d,
      validationSchema: p
    };
  }, [r, l, c, u.operation]), O = ue({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (d) => {
      n(d);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: O.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ t.jsx(Ye, { title: d, isFirst: g === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((S, j) => me(S.hidden) || S.type === "geolocation" || S.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${de[he(Number(S.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          pe,
          {
            refid: x,
            module_refid: c,
            sqlOpsUrls: u,
            components: w,
            field: S,
            formik: O,
            methods: b,
            setFieldOptions: y,
            ...P[S.name] ? { optionsOverride: P[S.name] } : {}
          },
          S.name
        )
      },
      S?.name ?? `field-${j}`
    )) }) }, d)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function He({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (i) => {
  },
  onCancel: m = () => {
  },
  methods: b = {},
  components: w = {},
  sqlOpsUrls: u = {},
  widget: x,
  refid: c,
  module_refid: P
}) {
  const i = Object.keys(r), [y, C] = G.useState(0), [A, O] = G.useState({}), d = ($, E) => {
    O((s) => ({
      ...s,
      [$]: E
    }));
  }, { initialValues: p, validationSchema: g, stepperSchemas: S } = G.useMemo(() => {
    const $ = {}, E = {}, s = {};
    return x ? Object.entries(r).forEach(([L, q]) => {
      const K = {};
      oe(q, $, K, l, P, u.operation), s[L] = K;
    }) : Object.entries(r).forEach(([L, q]) => {
      oe(q, $, E, l, P, u.operation);
    }), {
      initialValues: $,
      validationSchema: E,
      stepperSchemas: s
    };
  }, [r, l, x, P, u.operation]), j = i[y] ?? null, F = x && j ? S[j] ?? {} : g, I = ue({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: D.object().shape(F),
    onSubmit: ($) => {
      x ? (y < i.length - 1 && C((E) => E + 1), y === i.length - 1 && n($)) : n($);
    }
  }), M = async ($) => {
    if ($.preventDefault(), !x) {
      const E = await I.validateForm();
      if (Object.keys(E).length > 0) {
        alert("Please fill all required fields before submitting."), I.setTouched(
          Object.keys(E).reduce((s, L) => ({ ...s, [L]: !0 }), {})
        );
        return;
      }
    }
    I.handleSubmit($);
  }, z = () => {
    C(($) => $ > 0 ? $ - 1 : $);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: i.map(($, E) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => C(E),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${y === E ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: $ })
      },
      $
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: M, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j && r[j]?.map(($, E) => me($.hidden) || $.type === "geolocation" || $.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${de[he(Number($.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  pe,
                  {
                    refid: c,
                    module_refid: P,
                    sqlOpsUrls: u,
                    field: $,
                    formik: I,
                    methods: b,
                    components: w,
                    setFieldOptions: d,
                    ...A[$.name] ? { optionsOverride: A[$.name] } : {}
                  },
                  $.name
                )
              },
              $?.name ?? `field-${E}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${y > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              y > 0 && /* @__PURE__ */ t.jsx("button", { onClick: z, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: m, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: x ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                y + 1,
                " of ",
                i.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: i.map(($, E) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${E === y ? "bg-action w-6" : "bg-gray-300"}`
              },
              E
            )) })
          ] }) })
        ]
      },
      i[y]
    )
  ] });
}
function Qe({
  title: e,
  fields: r,
  data: l,
  onSubmit: n = (c) => {
  },
  onCancel: m = () => {
  },
  methods: b = {},
  sqlOpsUrls: w = {},
  refid: u,
  module_refid: x
}) {
  const c = ke(r, w.operation), [P, i] = G.useState({}), y = (d, p) => {
    i((g) => ({
      ...g,
      [d]: p
    }));
  }, { initialValues: C, validationSchema: A } = G.useMemo(() => {
    const d = {}, p = {};
    return c.forEach((g) => {
      oe([g], d, p, l, x, w.operation);
    }), {
      initialValues: d,
      validationSchema: p
    };
  }, [c, l]), O = ue({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (d) => {
      n(d);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: O.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: c.map((d, p) => me(d.hidden) || d.type === "geolocation" || d.vmode === "edit" && w.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${de[he(Number(d.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          pe,
          {
            refid: u,
            module_refid: x,
            sqlOpsUrls: w,
            field: d,
            formik: O,
            methods: b,
            setFieldOptions: y,
            ...P[d.name] ? { optionsOverride: P[d.name] } : {}
          }
        )
      },
      d?.name ?? `field-${p}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Ue({ title: e, children: r }) {
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
function Xe({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (P) => {
  },
  onCancel: m = () => {
  },
  methods: b = {},
  components: w = {},
  sqlOpsUrls: u = {},
  refid: x,
  module_refid: c
}) {
  const [P, i] = G.useState({}), y = (d, p) => {
    i((g) => ({
      ...g,
      [d]: p
    }));
  }, { initialValues: C, validationSchema: A } = G.useMemo(() => {
    const d = {}, p = {};
    return Object.values(r).flat().forEach((g) => {
      oe([g], d, p, l, c, u.operation);
    }), {
      initialValues: d,
      validationSchema: p
    };
  }, [r, l, c, u.operation]), O = ue({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (d) => {
      n(d);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: O.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ t.jsx(Ue, { title: d, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((S, j) => me(S.hidden) || S.type === "geolocation" || S.vmode === "edit" && u.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${de[he(Number(S.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          pe,
          {
            refid: x,
            module_refid: c,
            sqlOpsUrls: u,
            components: w,
            field: S,
            formik: O,
            methods: b,
            setFieldOptions: y,
            ...P[S.name] ? { optionsOverride: P[S.name] } : {}
          },
          S.name
        )
      },
      S?.name ?? `field-${j}`
    )) }) }, d)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function tt({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: l = null,
  onCancel: n = () => {
  },
  components: m = {},
  callback: b = () => {
  },
  initialvalues: w = {}
}) {
  let u = Pe(e);
  const x = e.endPoints, c = e?.source?.refid, P = _e(e?.fields ?? {}, x?.operation), [i, y] = G.useState(w), C = G.useMemo(() => ze(e.fields), [e.fields]);
  G.useEffect(() => {
    let d = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (!g?.type) {
        d && y({});
        return;
      }
      if (g.type === "method") {
        const S = g.method, j = S ? r[S] : void 0;
        if (j)
          try {
            const F = await Promise.resolve(j());
            d && y(F ?? {});
          } catch (F) {
            console.error("Method execution failed:", F), d && y({});
          }
        else
          d && y({});
      }
      if (g.type === "api" && x?.operation !== "create")
        try {
          const S = await B({
            method: g.method || "GET",
            url: g.url ?? "",
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          d && y(S.data ?? {});
        } catch (S) {
          console.error("API fetch failed:", S), d && y({});
        }
      if (g.type === "sql" && g.refid && g.refid !== "0" && x?.operation !== "create" || x?.operation !== "create" && g.dbopsid) {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const S = await Ke.fetch(x, {
            source: {
              ...g,
              table: g.table,
              columns: g.columns,
              where: U(g.where, {
                refid: c
              })
            },
            fields: je(e.fields, x.operation)
          }, g?.dbopsid, e?.module_refid);
          d && y(S);
        } catch (S) {
          console.error("API fetch failed:", S);
        }
      }
    })(), () => {
      d = !1;
    };
  }, [
    l,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const A = async (d) => {
    const p = e?.source ?? {};
    let g = null;
    if (C.length > 0)
      try {
        g = await Le();
      } catch (j) {
        console.error("catch fetchGeolocation", j), g = null;
      }
    const S = {
      ...d,
      ...Object.fromEntries(
        C.map((j) => [j, g])
      )
    };
    if (p.type === "method") {
      const j = p.method, F = j ? r[j] : void 0;
      if (F)
        try {
          const I = await Promise.resolve(F(S));
          if (b?.(I), r?.handleActions) {
            let M = x?.operation === "update" ? c : I?.data?.refid;
            const z = e?.gotolink?.replace(
              "{hashid}",
              String(M)
            );
            r.handleActions(z);
          }
        } catch (I) {
          b?.(I), console.error("Method execution failed:", I);
        }
    }
    if (p.type === "api") {
      if (!x) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const j = await B({
          method: p.method || "POST",
          url: x.baseURL + p.endpoint,
          data: S ?? {},
          headers: {
            Authorization: `Bearer ${x?.accessToken}`
          }
        });
        if (b?.(j), r?.handleActions) {
          let F = x.operation === "update" ? c : j?.data?.refid;
          const I = e?.gotolink?.replace(
            "{hashid}",
            String(F)
          );
          r.handleActions(I);
        }
      } catch (j) {
        b?.(j), console.error("API fetch failed:", j);
      }
    }
    if (p.type === "sql") {
      const j = e.endPoints;
      if (!j) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let F = !1, I;
        p?.dbopsid && (F = !0, I = p?.dbopsid);
        const M = await B({
          method: "GET",
          url: j.baseURL + j.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${j?.accessToken}`
          }
        });
        if (!F) {
          let $ = {
            ...p
          };
          p.where && ($ = {
            ...p,
            where: U(p.where, {
              refid: c
            })
          }), I = (await B({
            method: "POST",
            url: j.baseURL + j.dbopsGetRefId,
            data: {
              operation: j.operation,
              source: $,
              fields: je(e.fields, j.operation),
              forcefill: e.forcefill,
              datahash: M.data.refhash,
              srcid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${j?.accessToken}`
            }
          }))?.data.refid;
        }
        const z = await B({
          method: "POST",
          url: j.baseURL + j[j.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: I,
            fields: S,
            datahash: M.data.refhash
          },
          headers: {
            Authorization: `Bearer ${j?.accessToken}`
          }
        });
        if (b?.(z), r?.handleActions) {
          let $ = j.operation === "update" ? c : z?.data?.refid;
          const E = e?.gotolink?.replace(
            "{hashid}",
            String($)
          );
          r.handleActions(E);
        }
      } catch (F) {
        b?.(F), console.error("API fetch failed:", F);
      }
    }
  }, O = {
    accordion: /* @__PURE__ */ t.jsx(
      We,
      {
        title: e?.title ?? "",
        groupedFields: P,
        data: i,
        onSubmit: A,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: x,
        refid: c,
        module_refid: e?.module_refid
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      Xe,
      {
        title: e?.title ?? "",
        groupedFields: P,
        data: i,
        onSubmit: A,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: x,
        refid: c,
        module_refid: e?.module_refid
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      He,
      {
        title: e?.title ?? "",
        groupedFields: P,
        data: i,
        onSubmit: A,
        onCancel: n,
        methods: r,
        components: m,
        widget: e?.widget,
        sqlOpsUrls: x,
        refid: c,
        module_refid: e?.module_refid
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Qe,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: i,
        onSubmit: A,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: x,
        refid: c,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: O[u] ?? O.simple });
}
export {
  tt as LogiksForm
};
