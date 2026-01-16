import k, { useState as U, useRef as pe, useEffect as Z, useMemo as be } from "react";
import q from "axios";
import * as z from "yup";
import { useFormik as oe } from "formik";
var se = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function we() {
  if (xe) return J;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function c(o, n, h) {
    var x = null;
    if (h !== void 0 && (x = "" + h), n.key !== void 0 && (x = "" + n.key), "key" in n) {
      h = {};
      for (var l in n)
        l !== "key" && (h[l] = n[l]);
    } else h = n;
    return n = h.ref, {
      $$typeof: e,
      type: o,
      key: x,
      ref: n !== void 0 ? n : null,
      props: h
    };
  }
  return J.Fragment = r, J.jsx = c, J.jsxs = c, J;
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
var ge;
function Se() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case O:
          return "Profiler";
        case j:
          return "StrictMode";
        case s:
          return "Suspense";
        case F:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case P:
            return (a.displayName || "Context") + ".Provider";
          case y:
            return (a._context.displayName || "Context") + ".Consumer";
          case $:
            var i = a.render;
            return a = a.displayName, a || (a = i.displayName || i.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return i = a.displayName || null, i !== null ? i : e(a.type) || "Memo";
          case N:
            i = a._payload, a = a._init;
            try {
              return e(a(i));
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
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var d = i.error, E = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return d.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), r(a);
      }
    }
    function o(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === N)
        return "<...>";
      try {
        var i = e(a);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = K.A;
      return a === null ? null : a.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function x(a) {
      if (I.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, i) {
      function d() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: d,
        configurable: !0
      });
    }
    function b() {
      var a = e(this.type);
      return u[a] || (u[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, i, d, E, L, M, Q, X) {
      return d = M.ref, a = {
        $$typeof: T,
        type: a,
        key: i,
        props: M,
        _owner: L
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: b
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
        value: Q
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, i, d, E, L, M, Q, X) {
      var D = i.children;
      if (D !== void 0)
        if (E)
          if (G(D)) {
            for (E = 0; E < D.length; E++)
              f(D[E]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (I.call(i, "key")) {
        D = e(a);
        var W = Object.keys(i).filter(function(Ne) {
          return Ne !== "key";
        });
        E = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", A[D + E] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          D,
          W,
          D
        ), A[D + E] = !0);
      }
      if (D = null, d !== void 0 && (c(d), D = "" + d), x(i) && (c(i.key), D = "" + i.key), "key" in i) {
        d = {};
        for (var de in i)
          de !== "key" && (d[de] = i[de]);
      } else d = i;
      return D && l(
        d,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        D,
        M,
        L,
        n(),
        d,
        Q,
        X
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === T && a._store && (a._store.validated = 1);
    }
    var S = k, T = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), P = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), K = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, G = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var w, u = {}, p = S["react-stack-bottom-frame"].bind(
      S,
      h
    )(), R = H(o(h)), A = {};
    ee.Fragment = g, ee.jsx = function(a, i, d, E, L) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        i,
        d,
        !1,
        E,
        L,
        M ? Error("react-stack-top-frame") : p,
        M ? H(o(a)) : R
      );
    }, ee.jsxs = function(a, i, d, E, L) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        i,
        d,
        !0,
        E,
        L,
        M ? Error("react-stack-top-frame") : p,
        M ? H(o(a)) : R
      );
    };
  }()), ee;
}
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? se.exports = we() : se.exports = Se()), se.exports;
}
var t = Ee();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((o) => o.group) ? "tab" : "simple";
}
function $e(e, r = "create", c = "Info") {
  const o = {};
  let n = !1;
  if (Object.values(e).forEach((x) => {
    x.group && (n = !0);
  }), !n) return {};
  const h = [];
  return Object.entries(e).forEach(([x, l]) => {
    if (l.vmode === "edit" && r === "create") return;
    const b = { ...l, name: x };
    if (l.group) {
      const v = l.group;
      o[v] || (o[v] = []), o[v].push(b);
    } else
      h.push(b);
  }), h.length > 0 ? {
    [c]: h,
    ...o
  } : o;
}
function fe(e, r = "create") {
  const c = {};
  return Object.keys(e).forEach((o) => {
    e[o].vmode === "edit" && r === "create" || (c[o] = {
      label: o,
      required: e[o].required ?? !1
    });
  }), c;
}
const ae = (e, r, c, o) => {
  e.forEach((n) => {
    const h = n?.name;
    if (!h) return;
    let x = o?.[h];
    x == null && (x = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[h] = Array.isArray(x) ? x : typeof x == "string" ? x.split(",").map((b) => b.trim()).filter(Boolean) : [] : n.type === "json" ? r[h] = typeof x == "object" && x !== null ? JSON.stringify(x, null, 2) : x ?? "" : n.type === "date" ? r[h] = typeof x == "string" ? x.slice(0, 10) : "" : n.type === "time" ? typeof x == "string" ? x.includes("T") ? r[h] = x.slice(11, 16) : r[h] = x.slice(0, 5) : r[h] = "" : h === "blocked" || h === "blacklist" ? r[h] = String(x ?? "false") : r[h] = x ?? "";
    let l;
    n.type === "file" ? l = n.multiple ? z.array().of(z.mixed()) : z.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? l = z.array().of(z.string()) : n.type === "email" ? l = z.string().email("Invalid email") : n.type === "number" ? l = z.number().typeError("Must be a number") : n.type === "json" ? l = z.string().test("json", "Invalid JSON", (b) => {
      if (!b) return !0;
      try {
        return JSON.parse(b), !0;
      } catch {
        return !1;
      }
    }) : l = z.string(), n.required && (l = l.required(
      n.error_message || `${n.label || h} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (l = l.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([b, v]) => {
      switch (b) {
        case "email":
          v && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(v),
            `Must match pattern: ${v}`
          );
          break;
        case "date":
          l = z.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((m, f) => {
            if (typeof f == "string") {
              const S = f.replace(/-/g, "/"), [T, C, g] = S.split("/");
              if (T && C && g)
                return /* @__PURE__ */ new Date(`${g}-${C}-${T}`);
            }
            return m;
          });
          break;
        case "time":
          l = l.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          l = l.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          l = z.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = z.number().typeError("Must be a decimal").transform((m, f) => {
            if (f == null || f === "") return;
            const S = Number(f);
            if (isNaN(S)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const T = Number(m);
              return Number.isInteger(T) ? Number(S.toFixed(T)) : S;
            }
            return S;
          });
          break;
        case "alphanumeric":
          l = l.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          l = l.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          l = l.transform(
            (m) => m && m.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (m) => m && m.toLowerCase()
          );
          break;
        case "length-min": {
          const m = Number(v);
          isNaN(m) || (l = l.min(m, `Minimum length is ${m}`));
          break;
        }
        case "length-max": {
          const m = Number(v);
          isNaN(m) || (l = l.max(m, `Maximum length is ${m}`));
          break;
        }
      }
    }), c[h] = l;
  });
}, le = {
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
function ie(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const ce = (e) => e === !0 || e === "true", Y = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (c, o) => r[o] !== void 0 ? String(r[o]) : c
) : Array.isArray(e) ? e.map((c) => Y(c, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([c, o]) => [
    Y(c, r),
    Y(o, r)
  ])
) : e, te = (e, r, c, o) => {
  const n = Array.isArray(c?.data?.data) ? c.data.data : Array.isArray(c?.data) ? c.data : c;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const h = o ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!h) {
    const l = {};
    return n.forEach((b) => {
      b[e] != null && b[r] != null && (l[b[e]] = b[r]);
    }), l;
  }
  const x = {};
  return n.forEach((l) => {
    const b = l[h] ?? "Others", v = l[e], m = l[r];
    v == null || m == null || (x[b] || (x[b] = {}), x[b][v] = m);
  }), x;
}, ve = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const o of Object.values(e))
    if (r in o)
      return o[r];
}, Re = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (c) => Object.entries(c)
) : [], je = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function Te() {
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
const Ae = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ce(e, r = "create") {
  return Object.entries(e).filter(([, c]) => !(c.vmode === "edit" && r === "create")).map(([c, o]) => ({
    ...o,
    name: c
  }));
}
async function ne(e, r, c, o = {}) {
  try {
    let n = c;
    return n || (n = (await q({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await q({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: n,
        filter: o
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
    const c = r.match(/^(.+?)\s+as\s+.+$/i);
    return c ? c[1]?.trim() : r;
  }).filter((r) => !!r);
}
function ue({
  field: e,
  formik: r,
  methods: c = {},
  sqlOpsUrls: o,
  refid: n,
  optionsOverride: h,
  setFieldOptions: x
}) {
  const [l, b] = U(!1), [v, m] = U(
    h ?? e.options ?? {}
  ), [f, S] = U(""), [T, C] = U(0), g = pe(null), j = pe(null), [O, y] = U(!1), P = k.useRef(f);
  k.useEffect(() => {
    P.current = f;
  }, [f]);
  const $ = (w) => {
    w.currentTarget.open || S("");
  };
  Z(() => {
    h && Object.keys(h).length !== 0 && m(h);
  }, [h]), Z(() => {
    const w = (u) => {
      j.current && !j.current.contains(u.target) && (j.current.open = !1, S(""));
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, []);
  const s = e.name;
  k.useEffect(() => {
    let w = !0;
    return (async () => {
      if (e?.options) {
        m(e.options);
        return;
      }
      let p = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, R = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
      const A = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, i = a ? c[a] : void 0;
        if (i)
          try {
            const d = await Promise.resolve(i()), E = te(p, R, d, e.groupKey);
            w && m(E);
          } catch (d) {
            console.error("Method execution failed:", d), w && m({});
          }
        else
          w && m({});
      }
      if (A.type === "api" && A.url)
        try {
          const a = await q({
            method: A.method || "GET",
            url: A.url,
            data: A.body ?? {},
            params: A.params ?? {},
            headers: A.headers ?? {}
          }), i = te(p, R, a, e.groupKey);
          w && m(i);
        } catch (a) {
          console.error("API execution failed:", a), w && m({});
        }
      if (e.table || e.type === "dataSelector") {
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
          else {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            a = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (a.where = n ? Y(e.where, { refid: n }) : e.where);
          const i = await ne(o, a, e?.queryid), d = te(p, R, i, e.groupKey);
          w && m(d);
        } catch (a) {
          console.error("API fetch failed:", a);
        }
      }
    })(), () => {
      w = !1;
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
  `, _ = (w) => w.icon ? /* @__PURE__ */ t.jsx("i", { className: w.icon }) : null, B = be(
    () => Re(v),
    [v]
  ), K = B.length, I = be(() => e.search || !f ? B : B.filter(
    ([, w]) => w.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, B]), G = (w, u) => {
    if (j.current?.open === !0 || O === !0)
      if (w.key === "ArrowDown")
        w.preventDefault(), C(
          (p) => p + 1 < I.length ? p + 1 : 0
        );
      else if (w.key === "ArrowUp")
        w.preventDefault(), C(
          (p) => p - 1 >= 0 ? p - 1 : I.length - 1
        );
      else if (w.key === "Enter") {
        w.preventDefault();
        const [p] = I[T] || [];
        p && r.setFieldValue(e.name, u ? p : [...r.values[e.name], p]), j.current && (j.current.open = !1);
      } else w.key === "Escape" && (j.current.open = !1, S(""), y(!1));
  };
  Z(() => {
    g.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), Z(() => {
    T >= I.length && C(0);
  }, [I, T]), Z(() => {
    const w = e.autocomplete, u = e.ajaxchain;
    if (!w && !u) return;
    const p = r.values[e.name];
    if (!p) return;
    const R = Array.isArray(u) ? u : u ? [u] : [];
    (async () => {
      try {
        if (Pe(w)) {
          const a = w.src;
          if (!a || !o) return;
          const i = Y(a.where ?? {}, {
            refid: p
          }), d = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: i
          }, { data: E } = await ne(o, d, e?.queryid), L = Array.isArray(E?.data) ? E.data[0] : E?.data;
          L && w.target.split(",").map((M) => M.trim()).forEach((M) => {
            L[M] !== void 0 && r.setFieldValue(M, L[M]);
          });
        }
        for (const a of R) {
          const i = a.src;
          if (!a || typeof a != "object" || !i || typeof i != "object" || !o) continue;
          const d = Y(i?.where ?? {}, {
            refid: p
          }), E = {
            ...i,
            table: i.table,
            cols: i.columns,
            where: d
          }, { data: L } = await ne(o, E, e?.queryid);
          let M = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, Q = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
          const X = te(
            M,
            Q,
            L,
            e.groupKey
          );
          x?.(a.target, X);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), k.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !o) return;
    const w = _e(e.columns ?? ""), u = new AbortController(), p = setTimeout(async () => {
      try {
        const R = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, A = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: R
        };
        let a = {};
        Array.isArray(w) && w.forEach((M) => {
          a[M] = [f, "LIKE"];
        });
        const { data: i } = await ne(o, A, e?.queryid, a);
        let d = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, E = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
        const L = te(
          d,
          E,
          i,
          e.groupKey
        );
        m(L);
      } catch (R) {
        if (q.isCancel(R)) return;
        console.error("Search fetch failed", R);
      }
    }, 500);
    return () => {
      clearTimeout(p), u.abort();
    };
  }, [f, n]);
  const H = async (w) => {
    if (w.length === 0) {
      console.error("No file");
      return;
    }
    const u = o?.baseURL + o?.uploadURL;
    if (!u) {
      console.error("No Upload URL ");
      return;
    }
    const p = e.multiple === !0;
    try {
      const R = await Promise.all(
        Array.from(w).map(async (A) => {
          const a = new FormData();
          return a.append("file", A), (await q({
            method: "POST",
            url: u,
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
        p ? R.map((A) => A.path) : R[0]?.path
      );
    } catch (R) {
      console.error("File upload failed", R), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const u = r.values[s] ?? "", p = f !== "" ? f : ve(v, u) ?? String(u ?? ""), R = (a) => {
        const i = a.target.value;
        S(i), C(0), i.trim() ? y(!0) : (y(!1), r.setFieldValue(s, ""));
      }, A = (a) => {
        r.setFieldValue(s, a), S(""), y(!1);
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
            value: p,
            placeholder: e.placeholder || "Type to search...",
            onChange: R,
            onBlur: () => {
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: (a) => {
              if (a.key === "Enter") {
                if (a.preventDefault(), I[T]) {
                  const [i] = I[T];
                  r.setFieldValue(s, i);
                } else f.trim() && r.setFieldValue(s, f.trim());
                y(!1);
                return;
              }
              G(a, !0);
            },
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: g,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: I.length > 0 ? I.map(([a, i], d) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": d,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === d ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => A(a),
                children: i
              },
              a
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
        const u = r.values[s];
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
              ref: j,
              onKeyDown: (p) => G(p, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u?.length > 0 ? u.join(", ") : `Select ${e.label}` }),
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
                      value: f,
                      onChange: (p) => {
                        S(p.target.value), C(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  I.length > 0 ? I.map(([p, R], A) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${p}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${u?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : T === A ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${p}`,
                            type: "checkbox",
                            checked: u?.includes(p),
                            onChange: (a) => {
                              const i = a.target.checked ? [...u, p] : u?.filter((d) => d !== p);
                              r.setFieldValue(s, i);
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
            ref: j,
            onKeyDown: (u) => G(u, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? ve(v, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
                    value: f,
                    onChange: (u) => {
                      S(u.target.value), C(0);
                    },
                    onKeyDown: (u) => G(u, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                I.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (u) => {
                      u.preventDefault(), u.stopPropagation(), r.setFieldValue(s, ""), j.current?.removeAttribute("open"), S("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                I.length > 0 ? I.map(([u, p], R) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: (A) => {
                      A.preventDefault(), A.stopPropagation(), r.setFieldValue(s, u), j.current?.removeAttribute("open"), S(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === u ? "bg-indigo-50 text-indigo-600 font-medium" : T === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: p
                  },
                  u
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
              onFocus: () => b(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
              onFocus: () => b(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || "Please select an option" }),
                !je(v) && Object.entries(v).map(([u, p]) => /* @__PURE__ */ t.jsx("option", { value: u, className: "py-2", children: p }, u)),
                je(v) && Object.entries(v).map(([u, p]) => /* @__PURE__ */ t.jsx("optgroup", { label: u, children: Object.entries(p).map(([R, A]) => /* @__PURE__ */ t.jsx("option", { value: R, children: A }, R)) }, u))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([u, p]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${u}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${u}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === u,
                  value: u,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              p
            ]
          },
          u
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const u = r.values[s];
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
                  checked: u.includes(p),
                  onChange: (A) => {
                    const a = A.target.checked ? [...u, p] : u.filter((i) => i !== p);
                    r.setFieldValue(s, a);
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
      const u = r.values[s], p = f.trim(), R = Array.isArray(v) ? v : Object.entries(v || {}).map(([d, E]) => ({ value: d, label: E })), A = (d) => {
        d && !u.includes(d) && (r.setFieldValue(s, [...u, d]), S(""));
      }, a = (d) => {
        r.setFieldValue(
          s,
          u.filter((E) => E !== d)
        );
      }, i = (d) => R.find((E) => E.value === d)?.label ?? d;
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
              u.map((d) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: i(d) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (E) => {
                          E.stopPropagation(), e.disabled || a(d);
                        },
                        onMouseDown: (E) => E.preventDefault(),
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
                  value: f,
                  onChange: (d) => S(d.target.value),
                  onKeyDown: (d) => {
                    (d.key === "Enter" || d.key === ",") && (d.preventDefault(), A(p));
                  },
                  placeholder: u.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const w = e.multiple === !0;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "file",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: s,
              multiple: w,
              onChange: (u) => {
                const p = u.currentTarget.files;
                p && H(p);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.values[s]?.split("/").pop() && /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm ", children: String(r.values[s]?.split("/").pop()) }) }),
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
              onChange: (u) => r.setFieldValue(s, u.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${F} ${V} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`,
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
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _(e) }),
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
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`,
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
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Fe({ title: e, children: r, isFirst: c }) {
  const [o, n] = U(c);
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
function Ie({
  title: e,
  groupedFields: r,
  data: c,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: h = {},
  components: x = {},
  sqlOpsUrls: l = {},
  refid: b
}) {
  const [v, m] = k.useState({}), f = (g, j) => {
    m((O) => ({
      ...O,
      [g]: j
    }));
  }, { initialValues: S, validationSchema: T } = k.useMemo(() => {
    const g = {}, j = {};
    return Object.values(r).flat().forEach((O) => {
      ae([O], g, j, c);
    }), {
      initialValues: g,
      validationSchema: j
    };
  }, [r, c]), C = oe({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: z.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, j], O) => /* @__PURE__ */ t.jsx(Fe, { title: g, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((y, P) => ce(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: b,
            sqlOpsUrls: l,
            components: x,
            field: y,
            formik: C,
            methods: h,
            setFieldOptions: f,
            ...v[y.name] ? { optionsOverride: v[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${P}`
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
  data: c,
  onSubmit: o = (m) => {
  },
  onCancel: n = () => {
  },
  methods: h = {},
  components: x = {},
  sqlOpsUrls: l = {},
  widget: b,
  refid: v
}) {
  const m = Object.keys(r), [f, S] = k.useState(0), [T, C] = k.useState({}), g = (N, _) => {
    C((B) => ({
      ...B,
      [N]: _
    }));
  }, { initialValues: j, validationSchema: O, stepperSchemas: y } = k.useMemo(() => {
    const N = {}, _ = {}, B = {};
    return b ? Object.entries(r).forEach(([K, I]) => {
      const G = {};
      ae(I, N, G, c), B[K] = G;
    }) : Object.entries(r).forEach(([K, I]) => {
      ae(I, N, _, c);
    }), {
      initialValues: N,
      validationSchema: _,
      stepperSchemas: B
    };
  }, [r, c, b]), P = m[f] ?? null, $ = b && P ? y[P] ?? {} : O, s = oe({
    initialValues: j,
    enableReinitialize: !0,
    validationSchema: z.object().shape($),
    onSubmit: (N) => {
      b ? (f < m.length - 1 && S((_) => _ + 1), f === m.length - 1 && o(N)) : o(N);
    }
  }), F = async (N) => {
    if (N.preventDefault(), !b) {
      const _ = await s.validateForm();
      if (Object.keys(_).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(_).reduce((B, K) => ({ ...B, [K]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(N);
  }, V = () => {
    S((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: m.map((N, _) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => S(_),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${f === _ ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
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
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: P && r[P]?.map((N, _) => ce(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${le[ie(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ue,
                  {
                    refid: v,
                    sqlOpsUrls: l,
                    field: N,
                    formik: s,
                    methods: h,
                    components: x,
                    setFieldOptions: g,
                    ...T[N.name] ? { optionsOverride: T[N.name] } : {}
                  },
                  N.name
                )
              },
              N?.name ?? `field-${_}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${f > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              f > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: b ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                f + 1,
                " of ",
                m.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: m.map((N, _) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${_ === f ? "bg-action w-6" : "bg-gray-300"}`
              },
              _
            )) })
          ] }) })
        ]
      },
      m[f]
    )
  ] });
}
function ke({
  title: e,
  fields: r,
  data: c,
  onSubmit: o = (b) => {
  },
  onCancel: n = () => {
  },
  methods: h = {},
  sqlOpsUrls: x = {},
  refid: l
}) {
  const b = Ce(r, x.operation), [v, m] = k.useState({}), f = (g, j) => {
    m((O) => ({
      ...O,
      [g]: j
    }));
  }, { initialValues: S, validationSchema: T } = k.useMemo(() => {
    const g = {}, j = {};
    return b.forEach((O) => {
      ae([O], g, j, c);
    }), {
      initialValues: g,
      validationSchema: j
    };
  }, [b, c]), C = oe({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: z.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return console.log("formik.values", C.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: b.map((g, j) => ce(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && x.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: l,
            sqlOpsUrls: x,
            field: g,
            formik: C,
            methods: h,
            setFieldOptions: f,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
          }
        )
      },
      g?.name ?? `field-${j}`
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
  data: c,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: h = {},
  components: x = {},
  sqlOpsUrls: l = {},
  refid: b
}) {
  const [v, m] = k.useState({}), f = (g, j) => {
    m((O) => ({
      ...O,
      [g]: j
    }));
  }, { initialValues: S, validationSchema: T } = k.useMemo(() => {
    const g = {}, j = {};
    return Object.values(r).flat().forEach((O) => {
      ae([O], g, j, c);
    }), {
      initialValues: g,
      validationSchema: j
    };
  }, [r, c]), C = oe({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: z.object().shape(T),
    onSubmit: (g) => {
      o(g);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([g, j], O) => /* @__PURE__ */ t.jsx(Le, { title: g, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((y, P) => ce(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(y.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: b,
            sqlOpsUrls: l,
            components: x,
            field: y,
            formik: C,
            methods: h,
            setFieldOptions: f,
            ...v[y.name] ? { optionsOverride: v[y.name] } : {}
          },
          y.name
        )
      },
      y?.name ?? `field-${P}`
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
const re = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await q.get(
  e.baseURL + e.dbopsGetHash,
  { headers: re(e) }
)).data.refhash, me = async (e, r) => (await q.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: re(e) }
)).data.refid, ze = {
  async fetch(e, r, c) {
    const o = await he(e);
    let n = !1, h;
    c && (n = !0, h = c), n || (h = await me(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }));
    const x = await q.post(
      e.baseURL + e.dbopsFetch,
      { refid: h, datahash: o },
      { headers: re(e) }
    );
    return x.data?.data ?? x.data;
  },
  async create(e, r) {
    const c = await he(e), o = await me(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await q.post(
      e.baseURL + e.dbopsCreate,
      { refid: o, fields: r.values, datahash: c },
      { headers: re(e) }
    )).data;
  },
  async update(e, r) {
    const c = await he(e), o = await me(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: c
    });
    return (await q.post(
      e.baseURL + e.dbopsUpdate,
      { refid: o, fields: r.values, datahash: c },
      { headers: re(e) }
    )).data;
  }
};
function Ke({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: c = null,
  onCancel: o = () => {
  },
  components: n = {},
  callback: h = () => {
  },
  initialvalues: x = {}
}) {
  let l = Oe(e);
  const b = e.endPoints, v = e?.source?.refid, m = $e(e?.fields ?? {}, b?.operation), [f, S] = k.useState(x), T = k.useMemo(() => Ae(e.fields), [e.fields]);
  k.useEffect(() => {
    let j = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (!y?.type) {
        j && S({});
        return;
      }
      if (y.type === "method") {
        const P = y.method, $ = P ? r[P] : void 0;
        if ($)
          try {
            const s = await Promise.resolve($());
            j && S(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), j && S({});
          }
        else
          j && S({});
      }
      if (y.type === "api" && b?.operation !== "create")
        try {
          const P = await q({
            method: y.method || "GET",
            url: y.url ?? "",
            data: y.body ?? {},
            params: y.params ?? {},
            headers: y.headers ?? {}
          });
          j && S(P.data ?? {});
        } catch (P) {
          console.error("API fetch failed:", P), j && S({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0" && b?.operation !== "create") {
        if (!b) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const P = await ze.fetch(b, {
            source: {
              ...y,
              table: y.table,
              columns: y.columns,
              where: Y(y.where, {
                refid: v
              })
            },
            fields: fe(e.fields, b.operation)
          }, y?.dbopsid);
          j && S(P);
        } catch (P) {
          console.error("API fetch failed:", P);
        }
      }
    })(), () => {
      j = !1;
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
  const C = async (j) => {
    const O = e?.source ?? {};
    let y = null;
    if (T.length > 0)
      try {
        y = await Te();
      } catch ($) {
        console.log("catch fetchGeolocation", $), y = null;
      }
    const P = {
      ...j,
      ...Object.fromEntries(
        T.map(($) => [$, y])
      )
    };
    if (O.type === "method") {
      const $ = O.method, s = $ ? r[$] : void 0;
      if (s)
        try {
          const F = await Promise.resolve(s(P));
          h?.(F);
        } catch (F) {
          h?.(F), console.error("Method execution failed:", F);
        }
    }
    if (O.type === "api") {
      if (!b) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await q({
          method: O.method || "POST",
          url: b.baseURL + O.endpoint,
          data: P ?? {},
          headers: {
            Authorization: `Bearer ${b?.accessToken}`
          }
        });
        h?.($);
      } catch ($) {
        h?.($), console.error("API fetch failed:", $);
      }
    }
    if (O.type === "sql") {
      const $ = e.endPoints;
      if (!$) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let s = !1, F;
        O?.dbopsid && (s = !0, F = O?.dbopsid);
        const V = await q({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!s) {
          let _ = {
            ...O
          };
          O.where && (_ = {
            ...O,
            where: Y(O.where, {
              refid: v
            })
          }), F = (await q({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: _,
              fields: fe(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: V.data.refhash
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const N = await q({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: F,
            fields: P,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        h?.(N);
      } catch (s) {
        h?.(s), console.error("API fetch failed:", s);
      }
    }
  }, g = {
    accordion: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: f,
        onSubmit: C,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: b,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: f,
        onSubmit: C,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: b,
        refid: v
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: f,
        onSubmit: C,
        onCancel: o,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: b,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: f,
        onSubmit: C,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: b,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: g[l] ?? g.simple });
}
export {
  Ke as LogiksForm
};
