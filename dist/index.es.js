import L, { useState as U, useRef as pe, useEffect as Q, useMemo as xe } from "react";
import z from "axios";
import * as D from "yup";
import { useFormik as se } from "formik";
var re = { exports: {} }, X = {};
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
function we() {
  if (be) return X;
  be = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(o, n, x) {
    var f = null;
    if (x !== void 0 && (f = "" + x), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      x = {};
      for (var l in n)
        l !== "key" && (x[l] = n[l]);
    } else x = n;
    return n = x.ref, {
      $$typeof: e,
      type: o,
      key: f,
      ref: n !== void 0 ? n : null,
      props: x
    };
  }
  return X.Fragment = r, X.jsx = i, X.jsxs = i, X;
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
function Se() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case b:
          return "Fragment";
        case T:
          return "Profiler";
        case j:
          return "StrictMode";
        case s:
          return "Suspense";
        case I:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case $:
            return "Portal";
          case F:
            return (a.displayName || "Context") + ".Provider";
          case g:
            return (a._context.displayName || "Context") + ".Consumer";
          case R:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case q:
            return c = a.displayName || null, c !== null ? c : e(a.type) || "Memo";
          case N:
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
        var h = c.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(a);
      }
    }
    function o(a) {
      if (a === b) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === N)
        return "<...>";
      try {
        var c = e(a);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = K.A;
      return a === null ? null : a.getOwner();
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function f(a) {
      if (_.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, c) {
      function h() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: h,
        configurable: !0
      });
    }
    function p() {
      var a = e(this.type);
      return u[a] || (u[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, c, h, O, V, M, ie, ue) {
      return h = M.ref, a = {
        $$typeof: A,
        type: a,
        key: c,
        props: M,
        _owner: V
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: ie
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, c, h, O, V, M, ie, ue) {
      var k = c.children;
      if (k !== void 0)
        if (O)
          if (G(k)) {
            for (O = 0; O < k.length; O++)
              y(k[O]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(k);
      if (_.call(c, "key")) {
        k = e(a);
        var W = Object.keys(c).filter(function(Ne) {
          return Ne !== "key";
        });
        O = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", C[k + O] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          k,
          W,
          k
        ), C[k + O] = !0);
      }
      if (k = null, h !== void 0 && (i(h), k = "" + h), f(c) && (i(c.key), k = "" + c.key), "key" in c) {
        h = {};
        for (var de in c)
          de !== "key" && (h[de] = c[de]);
      } else h = c;
      return k && l(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        k,
        M,
        V,
        n(),
        h,
        ie,
        ue
      );
    }
    function y(a) {
      typeof a == "object" && a !== null && a.$$typeof === A && a._store && (a._store.validated = 1);
    }
    var w = L, A = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), F = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), K = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, G = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, u = {}, d = w["react-stack-bottom-frame"].bind(
      w,
      x
    )(), E = H(o(x)), C = {};
    Z.Fragment = b, Z.jsx = function(a, c, h, O, V) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        c,
        h,
        !1,
        O,
        V,
        M ? Error("react-stack-top-frame") : d,
        M ? H(o(a)) : E
      );
    }, Z.jsxs = function(a, c, h, O, V) {
      var M = 1e4 > K.recentlyCreatedOwnerStacks++;
      return m(
        a,
        c,
        h,
        !0,
        O,
        V,
        M ? Error("react-stack-top-frame") : d,
        M ? H(o(a)) : E
      );
    };
  }()), Z;
}
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? re.exports = we() : re.exports = Se()), re.exports;
}
var t = Ee();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((o) => o.group) ? "tab" : "simple";
}
function Re(e, r = "create", i = "Info") {
  const o = {};
  let n = !1;
  if (Object.values(e).forEach((f) => {
    f.group && (n = !0);
  }), !n) return {};
  const x = [];
  return Object.entries(e).forEach(([f, l]) => {
    if (l.vmode === "edit" && r === "create") return;
    const p = { ...l, name: f };
    if (l.group) {
      const v = l.group;
      o[v] || (o[v] = []), o[v].push(p);
    } else
      x.push(p);
  }), x.length > 0 ? {
    [i]: x,
    ...o
  } : o;
}
function fe(e, r = "create") {
  const i = {};
  return Object.keys(e).forEach((o) => {
    e[o].vmode === "edit" && r === "create" || (i[o] = {
      label: o,
      required: e[o].required ?? !1
    });
  }), i;
}
const te = (e, r, i, o) => {
  e.forEach((n) => {
    const x = n?.name;
    if (!x) return;
    let f = o?.[x];
    f == null && (f = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[x] = Array.isArray(f) ? f : typeof f == "string" ? f.split(",").map((p) => p.trim()).filter(Boolean) : [] : n.type === "json" ? r[x] = typeof f == "object" && f !== null ? JSON.stringify(f, null, 2) : f ?? "" : n.type === "date" ? r[x] = typeof f == "string" ? f.slice(0, 10) : "" : n.type === "time" ? typeof f == "string" ? f.includes("T") ? r[x] = f.slice(11, 16) : r[x] = f.slice(0, 5) : r[x] = "" : x === "blocked" || x === "blacklist" ? r[x] = String(f ?? "false") : r[x] = f ?? "";
    let l;
    n.type === "file" ? l = n.multiple ? D.array().of(D.mixed()) : D.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? l = D.array().of(D.string()) : n.type === "email" ? l = D.string().email("Invalid email") : n.type === "number" ? l = D.number().typeError("Must be a number") : n.type === "json" ? l = D.string().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : l = D.string(), n.required && (l = l.required(
      n.error_message || `${n.label || x} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (l = l.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([p, v]) => {
      switch (p) {
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
          l = D.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((m, y) => {
            if (typeof y == "string") {
              const w = y.replace(/-/g, "/"), [A, $, b] = w.split("/");
              if (A && $ && b)
                return /* @__PURE__ */ new Date(`${b}-${$}-${A}`);
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
          l = D.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = D.number().typeError("Must be a decimal").transform((m, y) => {
            if (y == null || y === "") return;
            const w = Number(y);
            if (isNaN(w)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const A = Number(m);
              return Number.isInteger(A) ? Number(w.toFixed(A)) : w;
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
    }), i[x] = l;
  });
}, ne = {
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
function oe(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const le = (e) => e === !0 || e === "true", Y = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (i, o) => r[o] !== void 0 ? String(r[o]) : i
) : Array.isArray(e) ? e.map((i) => Y(i, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([i, o]) => [
    Y(i, r),
    Y(o, r)
  ])
) : e, J = (e, r, i, o) => {
  const n = Array.isArray(i?.data?.data) ? i.data.data : Array.isArray(i?.data) ? i.data : i;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const x = o ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!x) {
    const l = {};
    return n.forEach((p) => {
      p[e] != null && p[r] != null && (l[p[e]] = p[r]);
    }), l;
  }
  const f = {};
  return n.forEach((l) => {
    const p = l[x] ?? "Others", v = l[e], m = l[r];
    v == null || m == null || (f[p] || (f[p] = {}), f[p][v] = m);
  }), f;
}, ve = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const o of Object.values(e))
    if (r in o)
      return o[r];
}, Te = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (i) => Object.entries(i)
) : [], je = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function Ae() {
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
const $e = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ce(e, r = "create") {
  return Object.entries(e).filter(([, i]) => !(i.vmode === "edit" && r === "create")).map(([i, o]) => ({
    ...o,
    name: i
  }));
}
async function ae(e, r, i = {}) {
  try {
    const o = await z({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
    return await z({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: o.data.queryid,
        filter: i
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (o) {
    throw o;
  }
}
function Fe(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function Pe(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const i = r.match(/^(.+?)\s+as\s+.+$/i);
    return i ? i[1]?.trim() : r;
  }).filter((r) => !!r);
}
function ce({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: o,
  refid: n,
  optionsOverride: x,
  setFieldOptions: f
}) {
  const [l, p] = U(!1), [v, m] = U(
    x ?? e.options ?? {}
  ), [y, w] = U(""), [A, $] = U(0), b = pe(null), j = pe(null), [T, g] = U(!1), F = L.useRef(y);
  L.useEffect(() => {
    F.current = y;
  }, [y]);
  const R = (S) => {
    S.currentTarget.open || w("");
  };
  Q(() => {
    x && m(x);
  }, [x]), Q(() => {
    const S = (u) => {
      j.current && !j.current.contains(u.target) && (j.current.open = !1, w(""));
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
        m(e.options);
        return;
      }
      const d = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, C = E ? i[E] : void 0;
        if (C)
          try {
            const a = await Promise.resolve(C()), c = e.valueKey || "value", h = e.labelKey || "title", O = J(c, h, a, e.groupKey);
            S && m(O);
          } catch (a) {
            console.error("Method execution failed:", a), S && m({});
          }
        else
          S && m({});
      }
      if (d.type === "api" && d.url)
        try {
          const E = await z({
            method: d.method || "GET",
            url: d.url,
            data: d.body ?? {},
            params: d.params ?? {},
            headers: d.headers ?? {}
          }), C = e.valueKey || "value", a = e.labelKey || "title", c = J(C, a, E, e.groupKey);
          S && m(c);
        } catch (E) {
          console.error("API execution failed:", E), S && m({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!o) {
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
          const C = await ae(o, E), a = e.valueKey || "value", c = e.labelKey || "title", h = J(a, c, C, e.groupKey);
          S && m(h);
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
  const I = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, q = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, B = xe(
    () => Te(v),
    [v]
  ), K = B.length, _ = xe(() => e.search || !y ? B : B.filter(
    ([, S]) => S.toLowerCase().includes(y.toLowerCase())
  ), [e.search, y, B]), G = (S, u) => {
    if (j.current?.open === !0 || T === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), $(
          (d) => d + 1 < _.length ? d + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), $(
          (d) => d - 1 >= 0 ? d - 1 : _.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [d] = _[A] || [];
        d && r.setFieldValue(e.name, u ? d : [...r.values[e.name], d]), j.current && (j.current.open = !1);
      } else S.key === "Escape" && (j.current.open = !1, w(""), g(!1));
  };
  Q(() => {
    b.current?.querySelector(
      `[data-index="${A}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [A]), Q(() => {
    A >= _.length && $(0);
  }, [_, A]), Q(() => {
    const S = e.autocomplete, u = e.ajaxchain;
    if (!S && !u) return;
    const d = r.values[e.name];
    if (!d) return;
    const E = Array.isArray(u) ? u : u ? [u] : [];
    (async () => {
      try {
        if (Fe(S)) {
          const a = S.src;
          if (!a || !o) return;
          const c = Y(a.where ?? {}, {
            refid: d
          }), h = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: c
          }, { data: O } = await ae(o, h), V = Array.isArray(O?.data) ? O.data[0] : O?.data;
          V && S.target.split(",").map((M) => M.trim()).forEach((M) => {
            V[M] !== void 0 && r.setFieldValue(M, V[M]);
          });
        }
        for (const a of E) {
          const c = a.src;
          if (!a || typeof a != "object" || !c || typeof c != "object" || !o) continue;
          const h = Y(c?.where ?? {}, {
            refid: d
          }), O = {
            ...c,
            table: c.table,
            cols: c.columns,
            where: h
          }, { data: V } = await ae(o, O), M = J(
            e.valueKey || "value",
            e.labelKey || "title",
            V,
            e.groupKey
          );
          f?.(a.target, M);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !y.trim() || !e.table || !o) return;
    const S = Pe(e.columns ?? ""), u = new AbortController(), d = setTimeout(async () => {
      try {
        const E = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, C = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: E
        };
        let a = {};
        Array.isArray(S) && S.forEach((O) => {
          a[O] = [y, "LIKE"];
        });
        const { data: c } = await ae(o, C, a), h = J(
          e.valueKey || "value",
          e.labelKey || "title",
          c,
          e.groupKey
        );
        m(h);
      } catch (E) {
        if (z.isCancel(E)) return;
        console.error("Search fetch failed", E);
      }
    }, 500);
    return () => {
      clearTimeout(d), u.abort();
    };
  }, [y, n]);
  const H = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const u = o?.baseURL + o?.uploadURL;
    if (!u) {
      console.error("No Upload URL ");
      return;
    }
    const d = e.multiple === !0;
    try {
      const E = await Promise.all(
        Array.from(S).map(async (C) => {
          const a = new FormData();
          return a.append("file", C), (await z({
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
        d ? E.map((C) => C.path) : E[0]?.path
      );
    } catch (E) {
      console.error("File upload failed", E), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const u = r.values[s] ?? "", d = y !== "" ? y : ve(v, u) ?? String(u ?? ""), E = (a) => {
        const c = a.target.value;
        w(c), $(0), c.trim() ? g(!0) : (g(!1), r.setFieldValue(s, ""));
      }, C = (a) => {
        r.setFieldValue(s, a), w(""), g(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${I} ${q}`,
            value: d,
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
                if (a.preventDefault(), _[A]) {
                  const [c] = _[A];
                  r.setFieldValue(s, c);
                } else y.trim() && r.setFieldValue(s, y.trim());
                g(!1);
                return;
              }
              G(a, !0);
            },
            disabled: e.disabled
          }
        ),
        T && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: b,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: _.length > 0 ? _.map(([a, c], h) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": h,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${A === h ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => C(a),
                children: c
              },
              a
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${d}" ` })
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
              onToggle: R,
              ref: j,
              onKeyDown: (d) => G(d, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: y,
                      onChange: (d) => {
                        w(d.target.value), $(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  _.length > 0 ? _.map(([d, E], C) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${d}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${u?.includes(d) ? "bg-indigo-50 text-indigo-600 font-medium" : A === C ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${d}`,
                            type: "checkbox",
                            checked: u?.includes(d),
                            onChange: (a) => {
                              const c = a.target.checked ? [...u, d] : u?.filter((h) => h !== d);
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
                    d
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
              /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: y,
                    onChange: (u) => {
                      w(u.target.value), $(0);
                    },
                    onKeyDown: (u) => G(u, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                _.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (u) => {
                      u.preventDefault(), u.stopPropagation(), r.setFieldValue(s, ""), j.current?.removeAttribute("open"), w("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                _.length > 0 ? _.map(([u, d], E) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": E,
                    onClick: (C) => {
                      C.preventDefault(), C.stopPropagation(), r.setFieldValue(s, u), j.current?.removeAttribute("open"), w(""), $(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === u ? "bg-indigo-50 text-indigo-600 font-medium" : A === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: d
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
              className: `${I} ${q} min-h-[120px] resize-none`,
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
              className: `${I} ${q} appearance-none cursor-pointer pr-12`,
              onFocus: () => p(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !je(v) && Object.entries(v).map(([u, d]) => /* @__PURE__ */ t.jsx("option", { value: u, className: "py-2", children: d }, u)),
                je(v) && Object.entries(v).map(([u, d]) => /* @__PURE__ */ t.jsx("optgroup", { label: u, children: Object.entries(d).map(([E, C]) => /* @__PURE__ */ t.jsx("option", { value: E, children: C }, E)) }, u))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([u, d]) => /* @__PURE__ */ t.jsxs(
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
              d
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
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([d, E]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: u.includes(d),
                  onChange: (C) => {
                    const a = C.target.checked ? [...u, d] : u.filter((c) => c !== d);
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
          d
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const u = r.values[s], d = y.trim(), E = Array.isArray(v) ? v : Object.entries(v || {}).map(([h, O]) => ({ value: h, label: O })), C = (h) => {
        h && !u.includes(h) && (r.setFieldValue(s, [...u, h]), w(""));
      }, a = (h) => {
        r.setFieldValue(
          s,
          u.filter((O) => O !== h)
        );
      }, c = (h) => E.find((O) => O.value === h)?.label ?? h;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              u.map((h) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: c(h) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (O) => {
                          O.stopPropagation(), e.disabled || a(h);
                        },
                        onMouseDown: (O) => O.preventDefault(),
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
                  value: y,
                  onChange: (h) => w(h.target.value),
                  onKeyDown: (h) => {
                    (h.key === "Enter" || h.key === ",") && (h.preventDefault(), C(d));
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
      const S = e.multiple === !0;
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
              className: `${I} ${q} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => p(!0),
              name: s,
              multiple: S,
              onChange: (u) => {
                const d = u.currentTarget.files;
                d && H(d);
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
              className: `${I} ${q} min-h-[200px] font-mono text-sm resize-y`
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
              className: `${I} ${q} ${e.icon ? "pl-9" : ""}`
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
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${I} ${q} ${e.icon ? "pl-9" : ""} `,
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
function _e({ title: e, children: r, isFirst: i }) {
  const [o, n] = U(i);
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
  data: i,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  refid: p
}) {
  const [v, m] = L.useState({}), y = (b, j) => {
    m((T) => ({
      ...T,
      [b]: j
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, j = {};
    return Object.values(r).flat().forEach((T) => {
      te([T], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [r, i]), $ = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      o(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: $.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, j], T) => /* @__PURE__ */ t.jsx(_e, { title: b, isFirst: T === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((g, F) => le(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: p,
            sqlOpsUrls: l,
            components: f,
            field: g,
            formik: $,
            methods: x,
            setFieldOptions: y,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${F}`
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
function Me({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: o = (m) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  widget: p,
  refid: v
}) {
  const m = Object.keys(r), [y, w] = L.useState(0), [A, $] = L.useState({}), b = (N, P) => {
    $((B) => ({
      ...B,
      [N]: P
    }));
  }, { initialValues: j, validationSchema: T, stepperSchemas: g } = L.useMemo(() => {
    const N = {}, P = {}, B = {};
    return p ? Object.entries(r).forEach(([K, _]) => {
      const G = {};
      te(_, N, G, i), B[K] = G;
    }) : Object.entries(r).forEach(([K, _]) => {
      te(_, N, P, i);
    }), {
      initialValues: N,
      validationSchema: P,
      stepperSchemas: B
    };
  }, [r, i, p]), F = m[y] ?? null, R = p && F ? g[F] ?? {} : T, s = se({
    initialValues: j,
    enableReinitialize: !0,
    validationSchema: D.object().shape(R),
    onSubmit: (N) => {
      p ? (y < m.length - 1 && w((P) => P + 1), y === m.length - 1 && o(N)) : o(N);
    }
  }), I = async (N) => {
    if (N.preventDefault(), !p) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((B, K) => ({ ...B, [K]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(N);
  }, q = () => {
    w((N) => N > 0 ? N - 1 : N);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: m.map((N, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${y === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: N })
      },
      N
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: I, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: F && r[F]?.map((N, P) => le(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ne[oe(Number(N.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ce,
                  {
                    refid: v,
                    sqlOpsUrls: l,
                    field: N,
                    formik: s,
                    methods: x,
                    components: f,
                    setFieldOptions: b,
                    ...A[N.name] ? { optionsOverride: A[N.name] } : {}
                  },
                  N.name
                )
              },
              N?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${y > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              y > 0 && /* @__PURE__ */ t.jsx("button", { onClick: q, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
                y + 1,
                " of ",
                m.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: m.map((N, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === y ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      m[y]
    )
  ] });
}
function Le({
  title: e,
  fields: r,
  data: i,
  onSubmit: o = (p) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  sqlOpsUrls: f = {},
  refid: l
}) {
  const p = Ce(r, f.operation), [v, m] = L.useState({}), y = (b, j) => {
    m((T) => ({
      ...T,
      [b]: j
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, j = {};
    return p.forEach((T) => {
      te([T], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [p, i]), $ = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      o(b);
    }
  });
  return console.log("formik.values", $.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: $.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((b, j) => le(b.hidden) || b.type === "geolocation" || b.vmode === "edit" && f.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: l,
            sqlOpsUrls: f,
            field: b,
            formik: $,
            methods: x,
            setFieldOptions: y,
            ...v[b.name] ? { optionsOverride: v[b.name] } : {}
          }
        )
      },
      b?.name ?? `field-${j}`
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
function De({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: o = (v) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: f = {},
  sqlOpsUrls: l = {},
  refid: p
}) {
  const [v, m] = L.useState({}), y = (b, j) => {
    m((T) => ({
      ...T,
      [b]: j
    }));
  }, { initialValues: w, validationSchema: A } = L.useMemo(() => {
    const b = {}, j = {};
    return Object.values(r).flat().forEach((T) => {
      te([T], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [r, i]), $ = se({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: D.object().shape(A),
    onSubmit: (b) => {
      o(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: $.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, j], T) => /* @__PURE__ */ t.jsx(ke, { title: b, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((g, F) => le(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && l.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ne[oe(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ce,
          {
            refid: p,
            sqlOpsUrls: l,
            components: f,
            field: g,
            formik: $,
            methods: x,
            setFieldOptions: y,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${F}`
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
const ee = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), he = async (e) => (await z.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ee(e) }
)).data.refhash, me = async (e, r) => (await z.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ee(e) }
)).data.refid, ze = {
  async fetch(e, r) {
    const i = await he(e), o = await me(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: i
    }), n = await z.post(
      e.baseURL + e.dbopsFetch,
      { refid: o, datahash: i },
      { headers: ee(e) }
    );
    return n.data?.data ?? n.data;
  },
  async create(e, r) {
    const i = await he(e), o = await me(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await z.post(
      e.baseURL + e.dbopsCreate,
      { refid: o, fields: r.values, datahash: i },
      { headers: ee(e) }
    )).data;
  },
  async update(e, r) {
    const i = await he(e), o = await me(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: i
    });
    return (await z.post(
      e.baseURL + e.dbopsUpdate,
      { refid: o, fields: r.values, datahash: i },
      { headers: ee(e) }
    )).data;
  }
};
function Ke({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: i = null,
  onCancel: o = () => {
  },
  components: n = {},
  callback: x = () => {
  },
  initialvalues: f = {}
}) {
  let l = Oe(e);
  const p = e.endPoints, v = e?.source?.refid, m = Re(e?.fields ?? {}, p?.operation), [y, w] = L.useState(f), A = L.useMemo(() => $e(e.fields), [e.fields]);
  L.useEffect(() => {
    let j = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (!g?.type) {
        j && w({});
        return;
      }
      if (g.type === "method") {
        const F = g.method, R = F ? r[F] : void 0;
        if (R)
          try {
            const s = await Promise.resolve(R());
            j && w(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), j && w({});
          }
        else
          j && w({});
      }
      if (g.type === "api" && p?.operation !== "create")
        try {
          const F = await z({
            method: g.method || "GET",
            url: g.url ?? "",
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          j && w(F.data ?? {});
        } catch (F) {
          console.error("API fetch failed:", F), j && w({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0" && p?.operation !== "create") {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const F = await ze.fetch(p, {
            source: {
              ...g,
              table: g.table,
              columns: g.columns,
              where: Y(g.where, {
                refid: v
              })
            },
            fields: fe(e.fields, p.operation)
          });
          j && w(F);
        } catch (F) {
          console.error("API fetch failed:", F);
        }
      }
    })(), () => {
      j = !1;
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
  const $ = async (j) => {
    const T = e?.source ?? {};
    let g = null;
    if (A.length > 0)
      try {
        g = await Ae();
      } catch (R) {
        console.log("catch fetchGeolocation", R), g = null;
      }
    const F = {
      ...j,
      ...Object.fromEntries(
        A.map((R) => [R, g])
      )
    };
    if (T.type === "method") {
      const R = T.method, s = R ? r[R] : void 0;
      if (s)
        try {
          const I = await Promise.resolve(s(F));
          x?.(I);
        } catch (I) {
          x?.(I), console.error("Method execution failed:", I);
        }
    }
    if (T.type === "api") {
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const R = await z({
          method: T.method || "POST",
          url: p.baseURL + T.endpoint,
          data: F ?? {},
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        x?.(R);
      } catch (R) {
        x?.(R), console.error("API fetch failed:", R);
      }
    }
    if (T.type === "sql") {
      const R = e.endPoints;
      if (!R) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const s = await z({
          method: "GET",
          url: R.baseURL + R.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        let I = {
          ...T
        };
        T.where && (I = {
          ...T,
          where: Y(T.where, {
            refid: v
          })
        });
        const q = await z({
          method: "POST",
          url: R.baseURL + R.dbopsGetRefId,
          data: {
            operation: R.operation,
            source: I,
            fields: fe(e.fields, R.operation),
            forcefill: e.forcefill,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        }), N = await z({
          method: "POST",
          url: R.baseURL + R[R.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: q.data.refid,
            fields: F,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        x?.(N);
      } catch (s) {
        x?.(s), console.error("API fetch failed:", s);
      }
    }
  }, b = {
    accordion: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: y,
        onSubmit: $,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: y,
        onSubmit: $,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: v
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: m,
        data: y,
        onSubmit: $,
        onCancel: o,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: p,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: y,
        onSubmit: $,
        onCancel: o,
        methods: r,
        components: n,
        sqlOpsUrls: p,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: b[l] ?? b.simple });
}
export {
  Ke as LogiksForm
};
