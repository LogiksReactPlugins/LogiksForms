import D, { useState as K, useRef as pe, useEffect as Q, useMemo as xe } from "react";
import B from "axios";
import * as k from "yup";
import { useFormik as re } from "formik";
var te = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ne() {
  if (be) return X;
  be = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(d, n, x) {
    var f = null;
    if (x !== void 0 && (f = "" + x), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      x = {};
      for (var l in n)
        l !== "key" && (x[l] = n[l]);
    } else x = n;
    return n = x.ref, {
      $$typeof: e,
      type: d,
      key: f,
      ref: n !== void 0 ? n : null,
      props: x
    };
  }
  return X.Fragment = r, X.jsx = o, X.jsxs = o, X;
}
var Z = {};
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
function we() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === V ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case b:
          return "Fragment";
        case R:
          return "Profiler";
        case y:
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
          case A:
            return "Portal";
          case C:
            return (a.displayName || "Context") + ".Provider";
          case g:
            return (a._context.displayName || "Context") + ".Consumer";
          case O:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case q:
            return c = a.displayName || null, c !== null ? c : e(a.type) || "Memo";
          case j:
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
    function o(a) {
      try {
        r(a);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var m = c.error, T = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return m.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), r(a);
      }
    }
    function d(a) {
      if (a === b) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === j)
        return "<...>";
      try {
        var c = e(a);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function f(a) {
      if (I.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, c) {
      function m() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: m,
        configurable: !0
      });
    }
    function p() {
      var a = e(this.type);
      return i[a] || (i[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function N(a, c, m, T, z, M, le, ie) {
      return m = M.ref, a = {
        $$typeof: $,
        type: a,
        key: c,
        props: M,
        _owner: z
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: p
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
        value: le
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function h(a, c, m, T, z, M, le, ie) {
      var L = c.children;
      if (L !== void 0)
        if (T)
          if (U(L)) {
            for (T = 0; T < L.length; T++)
              v(L[T]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(L);
      if (I.call(c, "key")) {
        L = e(a);
        var W = Object.keys(c).filter(function(je) {
          return je !== "key";
        });
        T = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", F[L + T] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          L,
          W,
          L
        ), F[L + T] = !0);
      }
      if (L = null, m !== void 0 && (o(m), L = "" + m), f(c) && (o(c.key), L = "" + c.key), "key" in c) {
        m = {};
        for (var ce in c)
          ce !== "key" && (m[ce] = c[ce]);
      } else m = c;
      return L && l(
        m,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), N(
        a,
        L,
        M,
        z,
        n(),
        m,
        le,
        ie
      );
    }
    function v(a) {
      typeof a == "object" && a !== null && a.$$typeof === $ && a._store && (a._store.validated = 1);
    }
    var w = D, $ = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), C = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), G = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, U = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, i = {}, u = w["react-stack-bottom-frame"].bind(
      w,
      x
    )(), E = H(d(x)), F = {};
    Z.Fragment = b, Z.jsx = function(a, c, m, T, z) {
      var M = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        a,
        c,
        m,
        !1,
        T,
        z,
        M ? Error("react-stack-top-frame") : u,
        M ? H(d(a)) : E
      );
    }, Z.jsxs = function(a, c, m, T, z) {
      var M = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        a,
        c,
        m,
        !0,
        T,
        z,
        M ? Error("react-stack-top-frame") : u,
        M ? H(d(a)) : E
      );
    };
  }()), Z;
}
var fe;
function Se() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? te.exports = Ne() : te.exports = we()), te.exports;
}
var t = Se();
function Ee(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((d) => d.group) ? "tab" : "simple";
}
function Oe(e, r = "Info") {
  const o = {};
  let d = !1;
  if (Object.values(e).forEach((x) => {
    x.group && (d = !0);
  }), !d) return {};
  const n = [];
  return Object.entries(e).forEach(([x, f]) => {
    const l = { ...f, name: x };
    if (f.group) {
      const p = f.group;
      o[p] || (o[p] = []), o[p].push(l);
    } else
      n.push(l);
  }), n.length > 0 ? {
    [r]: n,
    ...o
  } : o;
}
function Re(e) {
  const r = {};
  return Object.keys(e).forEach((o) => {
    r[o] = {
      label: o,
      required: e[o].required ?? !1
    };
  }), r;
}
const ee = (e, r, o, d) => {
  e.forEach((n) => {
    const x = n?.name;
    if (!x) return;
    let f = d?.[x];
    console.log("value,", f, n.type), f == null && (f = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[x] = Array.isArray(f) ? f : typeof f == "string" ? f.split(",").map((p) => p.trim()).filter(Boolean) : [] : n.type === "json" ? r[x] = typeof f == "object" && f !== null ? JSON.stringify(f, null, 2) : f ?? "" : n.type === "date" ? r[x] = typeof f == "string" ? f.slice(0, 10) : "" : n.type === "time" ? typeof f == "string" ? f.includes("T") ? r[x] = f.slice(11, 16) : r[x] = f.slice(0, 5) : r[x] = "" : x === "blocked" || x === "blacklist" ? r[x] = String(f ?? "false") : r[x] = f ?? "";
    let l;
    n.type === "file" ? l = n.multiple ? k.array().of(k.mixed()) : k.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? l = k.array().of(k.string()) : n.type === "email" ? l = k.string().email("Invalid email") : n.type === "number" ? l = k.number().typeError("Must be a number") : n.type === "date" ? l = k.string().matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date"
    ) : n.type === "json" ? l = k.string().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : l = k.string(), n.required && (l = l.required(
      n.error_message || `${n.label || x} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (l = l.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([p, N]) => {
      switch (p) {
        case "email":
          N && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(N),
            `Must match pattern: ${N}`
          );
          break;
        case "date":
          l = k.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((h, v) => {
            if (typeof v == "string") {
              const w = v.replace(/-/g, "/"), [$, A, b] = w.split("/");
              if ($ && A && b)
                return /* @__PURE__ */ new Date(`${b}-${A}-${$}`);
            }
            return h;
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
          l = k.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = k.number().typeError("Must be a decimal").transform((h, v) => {
            if (v == null || v === "") return;
            const w = Number(v);
            if (isNaN(w)) return h;
            if (typeof h == "number" && !isNaN(h)) {
              const $ = Number(h);
              return Number.isInteger($) ? Number(w.toFixed($)) : w;
            }
            return w;
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
            (h) => h && h.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (h) => h && h.toLowerCase()
          );
          break;
        case "length-min": {
          const h = Number(N);
          isNaN(h) || (l = l.min(h, `Minimum length is ${h}`));
          break;
        }
        case "length-max": {
          const h = Number(N);
          isNaN(h) || (l = l.max(h, `Maximum length is ${h}`));
          break;
        }
      }
    }), o[x] = l;
  });
}, ae = {
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
function se(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const ne = (e) => e === !0 || e === "true", Y = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (o, d) => r[d] !== void 0 ? String(r[d]) : o
) : Array.isArray(e) ? e.map((o) => Y(o, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([o, d]) => [
    Y(o, r),
    Y(d, r)
  ])
) : e, de = (e, r, o, d) => {
  const n = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const x = d ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!x) {
    const l = {};
    return n.forEach((p) => {
      p[e] != null && p[r] != null && (l[p[e]] = p[r]);
    }), l;
  }
  const f = {};
  return n.forEach((l) => {
    const p = l[x] ?? "Others", N = l[e], h = l[r];
    N == null || h == null || (f[p] || (f[p] = {}), f[p][N] = h);
  }), f;
}, ye = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const d of Object.values(e))
    if (r in d)
      return d[r];
}, Te = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (o) => Object.entries(o)
) : [], ve = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function $e() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (d, n) => {
        navigator.geolocation.getCurrentPosition(d, n, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: r, longitude: o } = e.coords;
    return `${r},${o}`;
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
function Ce(e) {
  return Object.entries(e).map(([r, o]) => ({
    ...o,
    name: r
  }));
}
async function ue(e, r) {
  try {
    const o = await B({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
    return await B({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: o.data.queryid,
        filter: {}
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (o) {
    throw o;
  }
}
function oe({
  field: e,
  formik: r,
  methods: o = {},
  sqlOpsUrls: d,
  refid: n,
  optionsOverride: x,
  setFieldOptions: f
}) {
  const [l, p] = K(!1), [N, h] = K(
    x ?? e.options ?? {}
  ), [v, w] = K(""), [$, A] = K(0), b = pe(null), y = pe(null), [R, g] = K(!1), C = D.useRef(v);
  D.useEffect(() => {
    C.current = v;
  }, [v]);
  const O = (S) => {
    S.currentTarget.open || w("");
  };
  Q(() => {
    x && h(x);
  }, [x]), Q(() => {
    const S = (i) => {
      y.current && !y.current.contains(i.target) && (y.current.open = !1, w(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, []);
  const s = e.name;
  D.useEffect(() => {
    let S = !0;
    return (async () => {
      if (e?.options) {
        h(e.options);
        return;
      }
      const u = e?.source ?? {};
      if (u.type === "method") {
        const E = u.method, F = E ? o[E] : void 0;
        if (F)
          try {
            const a = await Promise.resolve(F());
            S && h(a ?? {});
          } catch (a) {
            console.error("Method execution failed:", a), S && h({});
          }
        else
          S && h({});
      }
      if (u.type === "api" && u.url)
        try {
          const E = await B({
            method: u.method || "GET",
            url: u.url,
            data: u.body ?? {},
            params: u.params ?? {},
            headers: u.headers ?? {}
          }), F = e.valueKey || "value", a = e.labelKey || "title", c = de(F, a, E, e.groupKey);
          S && h(c);
        } catch (E) {
          console.error("API execution failed:", E), S && h({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E;
          if (e.type === "dataSelector")
            E = {
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
            E = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (E.where = n ? Y(e.where, { refid: n }) : e.where);
          const F = await ue(d, E), a = e.valueKey || "value", c = e.labelKey || "title", m = de(a, c, F, e.groupKey);
          S && h(m);
        } catch (E) {
          console.error("API fetch failed:", E);
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
  `, q = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, j = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, V = xe(
    () => Te(N),
    [N]
  ), G = V.length, I = xe(() => v ? V.filter(
    ([, S]) => S.toLowerCase().includes(v.toLowerCase())
  ) : V, [v, V]), U = (S, i) => {
    if (y.current?.open === !0 || R === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), A(
          (u) => u + 1 < I.length ? u + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), A(
          (u) => u - 1 >= 0 ? u - 1 : I.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [u] = I[$] || [];
        u && r.setFieldValue(e.name, i ? u : [...r.values[e.name], u]), y.current && (y.current.open = !1);
      } else S.key === "Escape" && (y.current.open = !1, w(""), g(!1));
  };
  Q(() => {
    b.current?.querySelector(
      `[data-index="${$}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [$]), Q(() => {
    $ >= I.length && A(0);
  }, [I, $]), Q(() => {
    const S = e.autocomplete, i = e.ajaxchain;
    if (!S && !i) return;
    const u = r.values[e.name];
    if (!u) return;
    const E = Array.isArray(i) ? i : i ? [i] : [];
    (async () => {
      try {
        if (S && S !== "off") {
          const a = S.src;
          if (!a || !d) return;
          const c = Y(a.where ?? {}, {
            refid: u
          }), m = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: c
          }, { data: T } = await ue(d, m), z = Array.isArray(T?.data) ? T.data[0] : T?.data;
          z && S.target.split(",").map((M) => M.trim()).forEach((M) => {
            z[M] !== void 0 && r.setFieldValue(M, z[M]);
          });
        }
        for (const a of E) {
          const c = a.src;
          if (!c || !d) continue;
          const m = Y(c.where ?? {}, {
            refid: u
          }), T = {
            ...c,
            table: c.table,
            cols: c.columns,
            where: m
          }, { data: z } = await ue(d, T), M = de(
            e.valueKey || "value",
            e.labelKey || "title",
            z,
            e.groupKey
          );
          f?.(a.target, M);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]);
  const H = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const i = d?.baseURL + d?.uploadURL;
    if (!i) {
      console.error("No Upload URL ");
      return;
    }
    const u = e.multiple === !0;
    try {
      const E = await Promise.all(
        Array.from(S).map(async (F) => {
          const a = new FormData();
          return a.append("file", F), (await B({
            method: "POST",
            url: i,
            data: a,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${d?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        u ? E.map((F) => F.path) : E[0]?.path
      );
    } catch (E) {
      console.error("File upload failed", E), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const i = r.values[s] ?? "", u = v !== "" ? v : ye(N, i) ?? String(i ?? ""), E = (a) => {
        const c = a.target.value;
        w(c), A(0), c.trim() ? g(!0) : (g(!1), r.setFieldValue(s, ""));
      }, F = (a) => {
        r.setFieldValue(s, a), w(""), g(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${_} ${q}`,
            value: u,
            placeholder: e.placeholder || "Type to search...",
            onChange: E,
            onFocus: () => {
              const a = String(r.values[s] ?? "");
              w(a);
            },
            onBlur: () => {
              setTimeout(() => g(!1), 150);
            },
            onKeyDown: (a) => {
              if (a.key === "Enter") {
                if (a.preventDefault(), I[$]) {
                  const [c] = I[$];
                  r.setFieldValue(s, c);
                } else v.trim() && r.setFieldValue(s, v.trim());
                g(!1);
                return;
              }
              U(a, !0);
            },
            disabled: e.disabled
          }
        ),
        R && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: b,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: I.length > 0 ? I.map(([a, c], m) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": m,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${$ === m ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => F(a),
                children: c
              },
              a
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${u}" ` })
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
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
              className: `${_} ${q} min-h-[120px] resize-none`,
              onFocus: () => p(!0),
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
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const i = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: j, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: O,
              ref: y,
              onKeyDown: (u) => U(u, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (u) => {
                        w(u.target.value), A(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  I.length > 0 ? I.map(([u, E], F) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${u}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${i?.includes(u) ? "bg-indigo-50 text-indigo-600 font-medium" : $ === F ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${u}`,
                            type: "checkbox",
                            checked: i?.includes(u),
                            onChange: (a) => {
                              const c = a.target.checked ? [...i, u] : i?.filter((m) => m !== u);
                              r.setFieldValue(s, c);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        E
                      ]
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
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: O,
            ref: y,
            onKeyDown: (i) => U(i, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? ye(N, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: v,
                    onChange: (i) => {
                      w(i.target.value), A(0);
                    },
                    onKeyDown: (i) => U(i, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (i) => {
                      i.preventDefault(), i.stopPropagation(), r.setFieldValue(s, ""), y.current?.removeAttribute("open"), w("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                I.length > 0 ? I.map(([i, u], E) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": E,
                    onClick: (F) => {
                      F.preventDefault(), F.stopPropagation(), r.setFieldValue(s, i), y.current?.removeAttribute("open"), w(""), A(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === i ? "bg-indigo-50 text-indigo-600 font-medium" : $ === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: u
                  },
                  i
                )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${_} ${q} appearance-none cursor-pointer pr-12`,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !ve(N) && Object.entries(N).map(([i, u]) => /* @__PURE__ */ t.jsx("option", { value: i, className: "py-2", children: u }, i)),
                ve(N) && Object.entries(N).map(([i, u]) => /* @__PURE__ */ t.jsx("optgroup", { label: i, children: Object.entries(u).map(([E, F]) => /* @__PURE__ */ t.jsx("option", { value: E, children: F }, E)) }, i))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(N || {}).map(([i, u]) => /* @__PURE__ */ t.jsxs(
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
              u
            ]
          },
          i
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const i = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(N || {}).map(([u, E]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: i.includes(u),
                  onChange: (F) => {
                    const a = F.target.checked ? [...i, u] : i.filter((c) => c !== u);
                    r.setFieldValue(s, a);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              E
            ]
          },
          u
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const i = r.values[s], u = v.trim(), E = Array.isArray(N) ? N : Object.entries(N || {}).map(([m, T]) => ({ value: m, label: T })), F = (m) => {
        m && !i.includes(m) && (r.setFieldValue(s, [...i, m]), w(""));
      }, a = (m) => {
        r.setFieldValue(
          s,
          i.filter((T) => T !== m)
        );
      }, c = (m) => E.find((T) => T.value === m)?.label ?? m;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              i.map((m) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: c(m) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (T) => {
                          T.stopPropagation(), e.disabled || a(m);
                        },
                        onMouseDown: (T) => T.preventDefault(),
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
                  value: v,
                  onChange: (m) => w(m.target.value),
                  onKeyDown: (m) => {
                    (m.key === "Enter" || m.key === ",") && (m.preventDefault(), F(u));
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
      const S = e.multiple === !0;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type,
              className: `${_} ${q} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
              name: s,
              multiple: S,
              onChange: (i) => {
                const u = i.currentTarget.files;
                u && H(u);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
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
              id: `${s}-json`,
              name: s,
              value: r.values[s],
              onChange: (i) => r.setFieldValue(s, i.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${_} ${q} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
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
              className: `${_} ${q} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: j, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${_} ${q} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
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
function Fe({ title: e, children: r, isFirst: o }) {
  const [d, n] = K(o);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => n(!d),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${d ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${d ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${d ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${d ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Pe({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: d = (N) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  refid: p
}) {
  const [N, h] = D.useState({}), v = (b, y) => {
    h((R) => ({
      ...R,
      [b]: y
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const b = {}, y = {};
    return Object.values(r).flat().forEach((R) => {
      ee([R], b, y, o);
    }), {
      initialValues: b,
      validationSchema: y
    };
  }, [r, o]), A = re({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (b) => {
      d(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, y], R) => /* @__PURE__ */ t.jsx(Fe, { title: b, isFirst: R === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: y.map((g, C) => ne(g.hidden) || g.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: p,
            sqlOpsUrls: l,
            components: f,
            field: g,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...N[g.name] ? { optionsOverride: N[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${C}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function _e({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: d = (h) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  widget: p,
  refid: N
}) {
  const h = Object.keys(r), [v, w] = D.useState(0), [$, A] = D.useState({});
  console.log("groupNames", h);
  const b = (j, P) => {
    A((V) => ({
      ...V,
      [j]: P
    }));
  }, { initialValues: y, validationSchema: R, stepperSchemas: g } = D.useMemo(() => {
    const j = {}, P = {}, V = {};
    return p ? Object.entries(r).forEach(([G, I]) => {
      const U = {};
      ee(I, j, U, o), V[G] = U;
    }) : Object.entries(r).forEach(([G, I]) => {
      ee(I, j, P, o);
    }), {
      initialValues: j,
      validationSchema: P,
      stepperSchemas: V
    };
  }, [r, o, p]), C = h[v] ?? null, O = p && C ? g[C] ?? {} : R, s = re({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: k.object().shape(O),
    onSubmit: (j) => {
      p ? (v < h.length - 1 && w((P) => P + 1), v === h.length - 1 && d(j)) : d(j);
    }
  }), _ = async (j) => {
    if (j.preventDefault(), !p) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((V, G) => ({ ...V, [G]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(j);
  }, q = () => {
    w((j) => j > 0 ? j - 1 : j);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: h.map((j, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: j })
      },
      j
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: C && r[C]?.map((j, P) => ne(j.hidden) || j.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ae[se(Number(j.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    refid: N,
                    sqlOpsUrls: l,
                    field: j,
                    formik: s,
                    methods: x,
                    components: f,
                    setFieldOptions: b,
                    ...$[j.name] ? { optionsOverride: $[j.name] } : {}
                  },
                  j.name
                )
              },
              j?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              v > 0 && /* @__PURE__ */ t.jsx("button", { onClick: q, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: p ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                v + 1,
                " of ",
                h.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: h.map((j, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      h[v]
    )
  ] });
}
function Ie({
  title: e,
  fields: r,
  data: o,
  onSubmit: d = (p) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  sqlOpsUrls: f = {},
  refid: l
}) {
  const p = Ce(r), [N, h] = D.useState({}), v = (b, y) => {
    h((R) => ({
      ...R,
      [b]: y
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const b = {}, y = {};
    return p.forEach((R) => {
      ee([R], b, y, o);
    }), {
      initialValues: b,
      validationSchema: y
    };
  }, [p, o]), A = re({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (b) => {
      d(b);
    }
  });
  return console.log(A.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((b, y) => ne(b.hidden) || b.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: l,
            sqlOpsUrls: f,
            field: b,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...N[b.name] ? { optionsOverride: N[b.name] } : {}
          }
        )
      },
      b?.name ?? `field-${y}`
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
function Me({ title: e, children: r }) {
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
function ke({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: d = (N) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  refid: p
}) {
  const [N, h] = D.useState({}), v = (b, y) => {
    h((R) => ({
      ...R,
      [b]: y
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const b = {}, y = {};
    return Object.values(r).flat().forEach((R) => {
      ee([R], b, y, o);
    }), {
      initialValues: b,
      validationSchema: y
    };
  }, [r, o]), A = re({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (b) => {
      d(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, y], R) => /* @__PURE__ */ t.jsx(Me, { title: b, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: y.map((g, C) => ne(g.hidden) || g.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: p,
            sqlOpsUrls: l,
            components: f,
            field: g,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...N[g.name] ? { optionsOverride: N[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${C}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const J = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: J(e) }
)).data.refhash, me = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: J(e) }
)).data.refid, Le = {
  async fetch(e, r) {
    const o = await he(e), d = await me(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), n = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: d, datahash: o },
      { headers: J(e) }
    );
    return n.data?.data ?? n.data;
  },
  async create(e, r) {
    const o = await he(e), d = await me(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: d, fields: r.values, datahash: o },
      { headers: J(e) }
    )).data;
  },
  async update(e, r) {
    const o = await he(e), d = await me(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: d, fields: r.values, datahash: o },
      { headers: J(e) }
    )).data;
  }
};
function qe({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: o = null,
  onCancel: d = () => {
  },
  components: n = {},
  callback: x = () => {
  },
  initialvalues: f = {}
}) {
  let l = Ee(e);
  const p = e.endPoints, N = e?.source?.refid, h = Oe(e?.fields ?? {}), [v, w] = D.useState(f), $ = D.useMemo(() => Ae(e.fields), [e.fields]);
  D.useEffect(() => {
    let y = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (!g?.type) {
        y && w({});
        return;
      }
      if (g.type === "method") {
        const C = g.method, O = C ? r[C] : void 0;
        if (O)
          try {
            const s = await Promise.resolve(O());
            y && w(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), y && w({});
          }
        else
          y && w({});
      }
      if (g.type === "api" && p?.operation !== "create")
        try {
          const C = await B({
            method: g.method || "GET",
            url: g.url ?? "",
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          y && w(C.data ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), y && w({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0" && p?.operation !== "create") {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await Le.fetch(p, {
            source: {
              ...g,
              table: g.table,
              columns: g.columns,
              where: Y(g.where, {
                refid: N
              })
            },
            fields: Re(e.fields)
          });
          y && w(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      y = !1;
    };
  }, [
    o,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const A = async (y) => {
    const R = e?.source ?? {};
    let g = null;
    if ($.length > 0)
      try {
        g = await $e();
      } catch (O) {
        console.log("catch fetchGeolocation", O), g = null;
      }
    const C = {
      ...y,
      ...Object.fromEntries(
        $.map((O) => [O, g])
      )
    };
    if (R.type === "method") {
      const O = R.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const _ = await Promise.resolve(s(C));
          x?.(_);
        } catch (_) {
          x?.(_), console.error("Method execution failed:", _);
        }
    }
    if (R.type === "api") {
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await B({
          method: R.method || "POST",
          url: p.baseURL + R.endpoint,
          data: C ?? {},
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        x?.(O);
      } catch (O) {
        x?.(O), console.error("API fetch failed:", O);
      }
    }
    if (R.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const s = await B({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        let _ = {
          ...R
        };
        R.where && (_ = {
          ...R,
          where: Y(R.where, {
            refid: N
          })
        });
        const q = await B({
          method: "POST",
          url: O.baseURL + O.dbopsGetRefId,
          data: {
            operation: O.operation,
            source: _,
            fields: e.fields,
            forcefill: e.forcefill,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        }), j = await B({
          method: "POST",
          url: O.baseURL + O[O.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: q.data.refid,
            fields: C,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        x?.(j);
      } catch (s) {
        x?.(s), console.error("API fetch failed:", s);
      }
    }
  }, b = {
    accordion: /* @__PURE__ */ t.jsx(
      Pe,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: v,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: v,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      _e,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: v,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: p,
        refid: N
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: v,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: N
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: b[l] ?? b.simple });
}
export {
  qe as LogiksForm
};
