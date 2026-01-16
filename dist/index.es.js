import L, { useState as U, useRef as pe, useEffect as Z, useMemo as be } from "react";
import B from "axios";
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
  function u(l, n, d) {
    var b = null;
    if (d !== void 0 && (b = "" + d), n.key !== void 0 && (b = "" + n.key), "key" in n) {
      d = {};
      for (var i in n)
        i !== "key" && (d[i] = n[i]);
    } else d = n;
    return n = d.ref, {
      $$typeof: e,
      type: l,
      key: b,
      ref: n !== void 0 ? n : null,
      props: d
    };
  }
  return J.Fragment = r, J.jsx = u, J.jsxs = u, J;
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
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case x:
          return "Fragment";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case s:
          return "Suspense";
        case F:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case T:
            return "Portal";
          case C:
            return (a.displayName || "Context") + ".Provider";
          case g:
            return (a._context.displayName || "Context") + ".Consumer";
          case $:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case V:
            return c = a.displayName || null, c !== null ? c : e(a.type) || "Memo";
          case w:
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
    function u(a) {
      try {
        r(a);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var j = c.error, y = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return j.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), r(a);
      }
    }
    function l(a) {
      if (a === x) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === w)
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
    function d() {
      return Error("react-stack-top-frame");
    }
    function b(a) {
      if (I.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function i(a, c) {
      function j() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: j,
        configurable: !0
      });
    }
    function m() {
      var a = e(this.type);
      return M[a] || (M[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, c, j, y, _, k, Q, X) {
      return j = k.ref, a = {
        $$typeof: A,
        type: a,
        key: c,
        props: k,
        _owner: _
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: m
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
    function h(a, c, j, y, _, k, Q, X) {
      var D = c.children;
      if (D !== void 0)
        if (y)
          if (G(D)) {
            for (y = 0; y < D.length; y++)
              f(D[y]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (I.call(c, "key")) {
        D = e(a);
        var W = Object.keys(c).filter(function(Ne) {
          return Ne !== "key";
        });
        y = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", R[D + y] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          D,
          W,
          D
        ), R[D + y] = !0);
      }
      if (D = null, j !== void 0 && (u(j), D = "" + j), b(c) && (u(c.key), D = "" + c.key), "key" in c) {
        j = {};
        for (var de in c)
          de !== "key" && (j[de] = c[de]);
      } else j = c;
      return D && i(
        j,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        D,
        k,
        _,
        n(),
        j,
        Q,
        X
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === A && a._store && (a._store.validated = 1);
    }
    var E = L, A = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), C = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), K = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, G = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var S, M = {}, o = E["react-stack-bottom-frame"].bind(
      E,
      d
    )(), p = H(l(d)), R = {};
    ee.Fragment = x, ee.jsx = function(a, c, j, y, _) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return h(
        a,
        c,
        j,
        !1,
        y,
        _,
        k ? Error("react-stack-top-frame") : o,
        k ? H(l(a)) : p
      );
    }, ee.jsxs = function(a, c, j, y, _) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return h(
        a,
        c,
        j,
        !0,
        y,
        _,
        k ? Error("react-stack-top-frame") : o,
        k ? H(l(a)) : p
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
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function $e(e, r = "create", u = "Info") {
  const l = {};
  let n = !1;
  if (Object.values(e).forEach((b) => {
    b.group && (n = !0);
  }), !n) return {};
  const d = [];
  return Object.entries(e).forEach(([b, i]) => {
    if (i.vmode === "edit" && r === "create") return;
    const m = { ...i, name: b };
    if (i.group) {
      const v = i.group;
      l[v] || (l[v] = []), l[v].push(m);
    } else
      d.push(m);
  }), d.length > 0 ? {
    [u]: d,
    ...l
  } : l;
}
function fe(e, r = "create") {
  const u = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (u[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), u;
}
const ae = (e, r, u, l) => {
  e.forEach((n) => {
    const d = n?.name;
    if (!d) return;
    let b = l?.[d];
    b == null && (b = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[d] = Array.isArray(b) ? b : typeof b == "string" ? b.split(",").map((m) => m.trim()).filter(Boolean) : [] : n.type === "json" ? r[d] = typeof b == "object" && b !== null ? JSON.stringify(b, null, 2) : b ?? "" : n.type === "date" ? r[d] = typeof b == "string" ? b.slice(0, 10) : "" : n.type === "time" ? typeof b == "string" ? b.includes("T") ? r[d] = b.slice(11, 16) : r[d] = b.slice(0, 5) : r[d] = "" : d === "blocked" || d === "blacklist" ? r[d] = String(b ?? "false") : r[d] = b ?? "";
    let i;
    n.type === "file" ? i = n.multiple ? z.array().of(z.mixed()) : z.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? i = z.array().of(z.string()) : n.type === "email" ? i = z.string().email("Invalid email") : n.type === "number" ? i = z.number().typeError("Must be a number") : n.type === "json" ? i = z.string().test("json", "Invalid JSON", (m) => {
      if (!m) return !0;
      try {
        return JSON.parse(m), !0;
      } catch {
        return !1;
      }
    }) : i = z.string(), n.required && (i = i.required(
      n.error_message || `${n.label || d} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (i = i.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([m, v]) => {
      switch (m) {
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
          i = z.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((h, f) => {
            if (typeof f == "string") {
              const E = f.replace(/-/g, "/"), [A, T, x] = E.split("/");
              if (A && T && x)
                return /* @__PURE__ */ new Date(`${x}-${T}-${A}`);
            }
            return h;
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
          i = z.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          i = z.number().typeError("Must be a decimal").transform((h, f) => {
            if (f == null || f === "") return;
            const E = Number(f);
            if (isNaN(E)) return h;
            if (typeof h == "number" && !isNaN(h)) {
              const A = Number(h);
              return Number.isInteger(A) ? Number(E.toFixed(A)) : E;
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
            (h) => h && h.toUpperCase()
          );
          break;
        case "lower":
          i = i.transform(
            (h) => h && h.toLowerCase()
          );
          break;
        case "length-min": {
          const h = Number(v);
          isNaN(h) || (i = i.min(h, `Minimum length is ${h}`));
          break;
        }
        case "length-max": {
          const h = Number(v);
          isNaN(h) || (i = i.max(h, `Maximum length is ${h}`));
          break;
        }
      }
    }), u[d] = i;
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
  (u, l) => r[l] !== void 0 ? String(r[l]) : u
) : Array.isArray(e) ? e.map((u) => Y(u, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([u, l]) => [
    Y(u, r),
    Y(l, r)
  ])
) : e, te = (e, r, u, l) => {
  const n = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const d = l ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!d) {
    const i = {};
    return n.forEach((m) => {
      m[e] != null && m[r] != null && (i[m[e]] = m[r]);
    }), i;
  }
  const b = {};
  return n.forEach((i) => {
    const m = i[d] ?? "Others", v = i[e], h = i[r];
    v == null || h == null || (b[m] || (b[m] = {}), b[m][v] = h);
  }), b;
}, ve = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const l of Object.values(e))
    if (r in l)
      return l[r];
}, Ae = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (u) => Object.entries(u)
) : [], je = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null;
};
async function Re() {
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
    ), { latitude: r, longitude: u } = e.coords;
    return `${r},${u}`;
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
const Te = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ce(e, r = "create") {
  return Object.entries(e).filter(([, u]) => !(u.vmode === "edit" && r === "create")).map(([u, l]) => ({
    ...l,
    name: u
  }));
}
async function ne(e, r, u, l = {}) {
  try {
    let n = u;
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
function _e(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const u = r.match(/^(.+?)\s+as\s+.+$/i);
    return u ? u[1]?.trim() : r;
  }).filter((r) => !!r);
}
function ue({
  field: e,
  formik: r,
  methods: u = {},
  sqlOpsUrls: l,
  refid: n,
  optionsOverride: d,
  setFieldOptions: b
}) {
  const [i, m] = U(!1), [v, h] = U(
    d ?? e.options ?? {}
  ), [f, E] = U(""), [A, T] = U(0), x = pe(null), N = pe(null), [O, g] = U(!1), C = L.useRef(f);
  L.useEffect(() => {
    C.current = f;
  }, [f]);
  const $ = (S) => {
    S.currentTarget.open || E("");
  };
  Z(() => {
    d && Object.keys(d).length !== 0 && h(d);
  }, [d]), Z(() => {
    const S = (M) => {
      N.current && !N.current.contains(M.target) && (N.current.open = !1, E(""));
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
        h(e.options);
        return;
      }
      let o = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, p = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
      const R = e?.source ?? {};
      if (e.type === "dataMethod") {
        const a = e.method, c = a ? u[a] : void 0;
        if (c)
          try {
            const j = await Promise.resolve(c()), y = te(o, p, j, e.groupKey);
            S && h(y);
          } catch (j) {
            console.error("Method execution failed:", j), S && h({});
          }
        else
          S && h({});
      }
      if (R.type === "api" && R.url)
        try {
          const a = await B({
            method: R.method || "GET",
            url: R.url,
            data: R.body ?? {},
            params: R.params ?? {},
            headers: R.headers ?? {}
          }), c = te(o, p, a, e.groupKey);
          S && h(c);
        } catch (a) {
          console.error("API execution failed:", a), S && h({});
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
          const c = await ne(l, a, e?.queryid), j = te(o, p, c, e.groupKey);
          S && h(j);
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
  const F = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, V = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (S) => S.icon ? /* @__PURE__ */ t.jsx("i", { className: S.icon }) : null, q = be(
    () => Ae(v),
    [v]
  ), K = q.length, I = be(() => e.search || !f ? q : q.filter(
    ([, S]) => S.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, q]), G = (S, M) => {
    if (N.current?.open === !0 || O === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), T(
          (o) => o + 1 < I.length ? o + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), T(
          (o) => o - 1 >= 0 ? o - 1 : I.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [o] = I[A] || [];
        o && r.setFieldValue(e.name, M ? o : [...r.values[e.name], o]), N.current && (N.current.open = !1);
      } else S.key === "Escape" && (N.current.open = !1, E(""), g(!1));
  };
  Z(() => {
    x.current?.querySelector(
      `[data-index="${A}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [A]), Z(() => {
    A >= I.length && T(0);
  }, [I, A]), Z(() => {
    const S = e.autocomplete, M = e.ajaxchain;
    if (!S && !M) return;
    const o = r.values[e.name];
    if (!o) return;
    const p = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Pe(S)) {
          const a = S.src;
          if (!a || !l) return;
          const c = Y(a.where ?? {}, {
            refid: o
          }), j = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: c
          }, { data: y } = await ne(l, j, e?.queryid), _ = Array.isArray(y?.data) ? y.data[0] : y?.data;
          _ && S.target.split(",").map((k) => k.trim()).forEach((k) => {
            _[k] !== void 0 && r.setFieldValue(k, _[k]);
          });
        }
        for (const a of p) {
          const c = a.src;
          if (!a || typeof a != "object" || !c || typeof c != "object" || !l) continue;
          const j = Y(c?.where ?? {}, {
            refid: o
          }), y = {
            ...c,
            table: c.table,
            cols: c.columns,
            where: j
          }, { data: _ } = await ne(l, y, e?.queryid);
          let k = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, Q = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
          const X = te(
            k,
            Q,
            _,
            e.groupKey
          );
          b?.(a.target, X);
        }
      } catch (a) {
        console.error("Autocomplete / AjaxChain fetch failed", a);
      }
    })();
  }, [r.values[e.name]]), L.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !l) return;
    const S = _e(e.columns ?? ""), M = new AbortController(), o = setTimeout(async () => {
      try {
        const p = n ? Y(e.where ?? {}, {
          refid: n
        }) : e.where, R = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: p
        };
        let a = {};
        Array.isArray(S) && S.forEach((k) => {
          a[k] = [f, "LIKE"];
        });
        const { data: c } = await ne(l, R, e?.queryid, a);
        let j = e.valueKey ? e.valueKey : e.type === "dataSelector" ? "do_lists.value" : `${e.table}.value`, y = e.labelKey ? e.labelKey : e.type === "dataSelector" ? "do_lists.title" : `${e.table}.title`;
        const _ = te(
          j,
          y,
          c,
          e.groupKey
        );
        h(_);
      } catch (p) {
        if (B.isCancel(p)) return;
        console.error("Search fetch failed", p);
      }
    }, 500);
    return () => {
      clearTimeout(o), M.abort();
    };
  }, [f, n]);
  const H = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    const M = l?.baseURL + l?.uploadURL;
    if (!M) {
      console.error("No Upload URL ");
      return;
    }
    const o = e.multiple === !0;
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
              Authorization: `Bearer ${l?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        o ? p.map((R) => R.path) : p[0]?.path
      );
    } catch (p) {
      console.error("File upload failed", p), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const o = r.values[s] ?? "", p = f !== "" ? f : ve(v, o) ?? String(o ?? ""), R = (c) => {
        const j = c.target.value;
        E(j), T(0), j.trim() ? g(!0) : (g(!1), r.setFieldValue(s, ""));
      }, a = (c) => {
        r.setFieldValue(s, c), E(""), g(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
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
              setTimeout(() => g(!1), 150);
            },
            onKeyDown: (c) => {
              if (c.key === "Enter") {
                if (c.preventDefault(), I[A]) {
                  const [j] = I[A];
                  r.setFieldValue(s, j);
                } else f.trim() && r.setFieldValue(s, f.trim());
                g(!1);
                return;
              }
              G(c, !0);
            },
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: x,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: I.length > 0 ? I.map(([c, j], y) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${A === y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => a(c),
                children: j
              },
              c
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
        const o = r.values[s];
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
              ref: N,
              onKeyDown: (p) => G(p, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: o?.length > 0 ? o.join(", ") : `Select ${e.label}` }),
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
                /* @__PURE__ */ t.jsxs("div", { ref: x, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: f,
                      onChange: (p) => {
                        E(p.target.value), T(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  I.length > 0 ? I.map(([p, R], a) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${p}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${o?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : A === a ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${p}`,
                            type: "checkbox",
                            checked: o?.includes(p),
                            onChange: (c) => {
                              const j = c.target.checked ? [...o, p] : o?.filter((y) => y !== p);
                              r.setFieldValue(s, j);
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: $,
            ref: N,
            onKeyDown: (o) => G(o, !0),
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
              /* @__PURE__ */ t.jsxs("div", { ref: x, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: (o) => {
                      E(o.target.value), T(0);
                    },
                    onKeyDown: (o) => G(o, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                I.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (o) => {
                      o.preventDefault(), o.stopPropagation(), r.setFieldValue(s, ""), N.current?.removeAttribute("open"), E("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                I.length > 0 ? I.map(([o, p], R) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, o), N.current?.removeAttribute("open"), E(""), T(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === o ? "bg-indigo-50 text-indigo-600 font-medium" : A === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: p
                  },
                  o
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${F} ${V} min-h-[120px] resize-none`,
              onFocus: () => m(!0),
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${F} ${V} appearance-none cursor-pointer pr-12`,
              onFocus: () => m(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || "Please select an option" }),
                !je(v) && Object.entries(v).map(([o, p]) => /* @__PURE__ */ t.jsx("option", { value: o, className: "py-2", children: p }, o)),
                je(v) && Object.entries(v).map(([o, p]) => /* @__PURE__ */ t.jsx("optgroup", { label: o, children: Object.entries(p).map(([R, a]) => /* @__PURE__ */ t.jsx("option", { value: R, children: a }, R)) }, o))
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${K > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([o, p]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${o}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${o}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === o,
                  value: o,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              p
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const o = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
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
                  checked: o.includes(p),
                  onChange: (a) => {
                    const c = a.target.checked ? [...o, p] : o.filter((j) => j !== p);
                    r.setFieldValue(s, c);
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
      const o = r.values[s], p = f.trim(), R = Array.isArray(v) ? v : Object.entries(v || {}).map(([y, _]) => ({ value: y, label: _ })), a = (y) => {
        y && !o.includes(y) && (r.setFieldValue(s, [...o, y]), E(""));
      }, c = (y) => {
        r.setFieldValue(
          s,
          o.filter((_) => _ !== y)
        );
      }, j = (y) => R.find((_) => _.value === y)?.label ?? y;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${F} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              o.map((y) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: j(y) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (_) => {
                          _.stopPropagation(), e.disabled || c(y);
                        },
                        onMouseDown: (_) => _.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                y
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: f,
                  onChange: (y) => E(y.target.value),
                  onKeyDown: (y) => {
                    (y.key === "Enter" || y.key === ",") && (y.preventDefault(), a(p));
                  },
                  placeholder: o.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "file",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
              name: s,
              multiple: S,
              onChange: (o) => {
                const p = o.currentTarget.files;
                p && H(p);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${i ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        M.map((o) => {
          const p = o?.split("/").pop();
          return p ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: p }) }, o) : null;
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
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
              id: `${s}-json`,
              name: s,
              value: r.values[s],
              onChange: (o) => r.setFieldValue(s, o.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${F} ${V} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
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
              className: `${F} ${V} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: w, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${F} ${V} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
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
function Fe({ title: e, children: r, isFirst: u }) {
  const [l, n] = U(u);
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
function Ie({
  title: e,
  groupedFields: r,
  data: u,
  onSubmit: l = (v) => {
  },
  onCancel: n = () => {
  },
  methods: d = {},
  components: b = {},
  sqlOpsUrls: i = {},
  refid: m
}) {
  const [v, h] = L.useState({}), f = (x, N) => {
    h((O) => ({
      ...O,
      [x]: N
    }));
  }, { initialValues: E, validationSchema: A } = L.useMemo(() => {
    const x = {}, N = {};
    return Object.values(r).flat().forEach((O) => {
      ae([O], x, N, u);
    }), {
      initialValues: x,
      validationSchema: N
    };
  }, [r, u]), T = oe({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: z.object().shape(A),
    onSubmit: (x) => {
      l(x);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([x, N], O) => /* @__PURE__ */ t.jsx(Fe, { title: x, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: N.map((g, C) => ce(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: m,
            sqlOpsUrls: i,
            components: b,
            field: g,
            formik: T,
            methods: d,
            setFieldOptions: f,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${C}`
    )) }) }, x)) }),
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
  data: u,
  onSubmit: l = (h) => {
  },
  onCancel: n = () => {
  },
  methods: d = {},
  components: b = {},
  sqlOpsUrls: i = {},
  widget: m,
  refid: v
}) {
  const h = Object.keys(r), [f, E] = L.useState(0), [A, T] = L.useState({}), x = (w, P) => {
    T((q) => ({
      ...q,
      [w]: P
    }));
  }, { initialValues: N, validationSchema: O, stepperSchemas: g } = L.useMemo(() => {
    const w = {}, P = {}, q = {};
    return m ? Object.entries(r).forEach(([K, I]) => {
      const G = {};
      ae(I, w, G, u), q[K] = G;
    }) : Object.entries(r).forEach(([K, I]) => {
      ae(I, w, P, u);
    }), {
      initialValues: w,
      validationSchema: P,
      stepperSchemas: q
    };
  }, [r, u, m]), C = h[f] ?? null, $ = m && C ? g[C] ?? {} : O, s = oe({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: z.object().shape($),
    onSubmit: (w) => {
      m ? (f < h.length - 1 && E((P) => P + 1), f === h.length - 1 && l(w)) : l(w);
    }
  }), F = async (w) => {
    if (w.preventDefault(), !m) {
      const P = await s.validateForm();
      if (Object.keys(P).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(P).reduce((q, K) => ({ ...q, [K]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(w);
  }, V = () => {
    E((w) => w > 0 ? w - 1 : w);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: h.map((w, P) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => E(P),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${f === P ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: w })
      },
      w
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: C && r[C]?.map((w, P) => ce(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${le[ie(Number(w.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  ue,
                  {
                    refid: v,
                    sqlOpsUrls: i,
                    field: w,
                    formik: s,
                    methods: d,
                    components: b,
                    setFieldOptions: x,
                    ...A[w.name] ? { optionsOverride: A[w.name] } : {}
                  },
                  w.name
                )
              },
              w?.name ?? `field-${P}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${f > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              f > 0 && /* @__PURE__ */ t.jsx("button", { onClick: V, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: m ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                f + 1,
                " of ",
                h.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: h.map((w, P) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${P === f ? "bg-action w-6" : "bg-gray-300"}`
              },
              P
            )) })
          ] }) })
        ]
      },
      h[f]
    )
  ] });
}
function ke({
  title: e,
  fields: r,
  data: u,
  onSubmit: l = (m) => {
  },
  onCancel: n = () => {
  },
  methods: d = {},
  sqlOpsUrls: b = {},
  refid: i
}) {
  const m = Ce(r, b.operation), [v, h] = L.useState({}), f = (x, N) => {
    h((O) => ({
      ...O,
      [x]: N
    }));
  }, { initialValues: E, validationSchema: A } = L.useMemo(() => {
    const x = {}, N = {};
    return m.forEach((O) => {
      ae([O], x, N, u);
    }), {
      initialValues: x,
      validationSchema: N
    };
  }, [m, u]), T = oe({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: z.object().shape(A),
    onSubmit: (x) => {
      l(x);
    }
  });
  return console.log("formik.values", T.values), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((x, N) => ce(x.hidden) || x.type === "geolocation" || x.vmode === "edit" && b.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: i,
            sqlOpsUrls: b,
            field: x,
            formik: T,
            methods: d,
            setFieldOptions: f,
            ...v[x.name] ? { optionsOverride: v[x.name] } : {}
          }
        )
      },
      x?.name ?? `field-${N}`
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
  data: u,
  onSubmit: l = (v) => {
  },
  onCancel: n = () => {
  },
  methods: d = {},
  components: b = {},
  sqlOpsUrls: i = {},
  refid: m
}) {
  const [v, h] = L.useState({}), f = (x, N) => {
    h((O) => ({
      ...O,
      [x]: N
    }));
  }, { initialValues: E, validationSchema: A } = L.useMemo(() => {
    const x = {}, N = {};
    return Object.values(r).flat().forEach((O) => {
      ae([O], x, N, u);
    }), {
      initialValues: x,
      validationSchema: N
    };
  }, [r, u]), T = oe({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: z.object().shape(A),
    onSubmit: (x) => {
      l(x);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([x, N], O) => /* @__PURE__ */ t.jsx(Le, { title: x, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: N.map((g, C) => ce(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && i.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${le[ie(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          ue,
          {
            refid: m,
            sqlOpsUrls: i,
            components: b,
            field: g,
            formik: T,
            methods: d,
            setFieldOptions: f,
            ...v[g.name] ? { optionsOverride: v[g.name] } : {}
          },
          g.name
        )
      },
      g?.name ?? `field-${C}`
    )) }) }, x)) }),
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
}), he = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: re(e) }
)).data.refhash, me = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: re(e) }
)).data.refid, ze = {
  async fetch(e, r, u) {
    const l = await he(e);
    let n = !1, d;
    u && (n = !0, d = u), n || (d = await me(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    }));
    const b = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: d, datahash: l },
      { headers: re(e) }
    );
    return b.data?.data ?? b.data;
  },
  async create(e, r) {
    const u = await he(e), l = await me(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: u
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: l, fields: r.values, datahash: u },
      { headers: re(e) }
    )).data;
  },
  async update(e, r) {
    const u = await he(e), l = await me(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: u
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: l, fields: r.values, datahash: u },
      { headers: re(e) }
    )).data;
  }
};
function Ke({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: u = null,
  onCancel: l = () => {
  },
  components: n = {},
  callback: d = () => {
  },
  initialvalues: b = {}
}) {
  let i = Oe(e);
  const m = e.endPoints, v = e?.source?.refid, h = $e(e?.fields ?? {}, m?.operation), [f, E] = L.useState(b), A = L.useMemo(() => Te(e.fields), [e.fields]);
  L.useEffect(() => {
    let N = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (!g?.type) {
        N && E({});
        return;
      }
      if (g.type === "method") {
        const C = g.method, $ = C ? r[C] : void 0;
        if ($)
          try {
            const s = await Promise.resolve($());
            N && E(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), N && E({});
          }
        else
          N && E({});
      }
      if (g.type === "api" && m?.operation !== "create")
        try {
          const C = await B({
            method: g.method || "GET",
            url: g.url ?? "",
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          N && E(C.data ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), N && E({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0" && m?.operation !== "create") {
        if (!m) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await ze.fetch(m, {
            source: {
              ...g,
              table: g.table,
              columns: g.columns,
              where: Y(g.where, {
                refid: v
              })
            },
            fields: fe(e.fields, m.operation)
          }, g?.dbopsid);
          N && E(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      N = !1;
    };
  }, [
    u,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const T = async (N) => {
    const O = e?.source ?? {};
    let g = null;
    if (A.length > 0)
      try {
        g = await Re();
      } catch ($) {
        console.log("catch fetchGeolocation", $), g = null;
      }
    const C = {
      ...N,
      ...Object.fromEntries(
        A.map(($) => [$, g])
      )
    };
    if (O.type === "method") {
      const $ = O.method, s = $ ? r[$] : void 0;
      if (s)
        try {
          const F = await Promise.resolve(s(C));
          d?.(F);
        } catch (F) {
          d?.(F), console.error("Method execution failed:", F);
        }
    }
    if (O.type === "api") {
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const $ = await B({
          method: O.method || "POST",
          url: m.baseURL + O.endpoint,
          data: C ?? {},
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        d?.($);
      } catch ($) {
        d?.($), console.error("API fetch failed:", $);
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
        const V = await B({
          method: "GET",
          url: $.baseURL + $.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        if (!s) {
          let P = {
            ...O
          };
          O.where && (P = {
            ...O,
            where: Y(O.where, {
              refid: v
            })
          }), F = (await B({
            method: "POST",
            url: $.baseURL + $.dbopsGetRefId,
            data: {
              operation: $.operation,
              source: P,
              fields: fe(e.fields, $.operation),
              forcefill: e.forcefill,
              datahash: V.data.refhash
            },
            headers: {
              Authorization: `Bearer ${$?.accessToken}`
            }
          }))?.data.refid;
        }
        const w = await B({
          method: "POST",
          url: $.baseURL + $[$.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: F,
            fields: C,
            datahash: V.data.refhash
          },
          headers: {
            Authorization: `Bearer ${$?.accessToken}`
          }
        });
        d?.(w);
      } catch (s) {
        d?.(s), console.error("API fetch failed:", s);
      }
    }
  }, x = {
    accordion: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: f,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      De,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: f,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: v
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: h,
        data: f,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: m,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: f,
        onSubmit: T,
        onCancel: l,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: x[i] ?? x.simple });
}
export {
  Ke as LogiksForm
};
