import D, { useState as Z, useRef as ge, useEffect as ee, useMemo as be } from "react";
import K from "axios";
import * as B from "yup";
import { useFormik as ie } from "formik";
var oe = { exports: {} }, te = {};
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
function $e() {
  if (ye) return te;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, o, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      h = {};
      for (var c in o)
        c !== "key" && (h[c] = o[c]);
    } else h = o;
    return o = h.ref, {
      $$typeof: e,
      type: l,
      key: d,
      ref: o !== void 0 ? o : null,
      props: h
    };
  }
  return te.Fragment = r, te.jsx = i, te.jsxs = i, te;
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
var fe;
function Ae() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === T ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case I:
          return "Fragment";
        case j:
          return "Profiler";
        case b:
          return "StrictMode";
        case y:
          return "Suspense";
        case k:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case F:
            return "Portal";
          case N:
            return (a.displayName || "Context") + ".Provider";
          case E:
            return (a._context.displayName || "Context") + ".Consumer";
          case O:
            var n = a.render;
            return a = a.displayName, a || (a = n.displayName || n.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case s:
            return n = a.displayName || null, n !== null ? n : e(a.type) || "Memo";
          case z:
            n = a._payload, a = a._init;
            try {
              return e(a(n));
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
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var m = n.error, u = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return m.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), r(a);
      }
    }
    function l(a) {
      if (a === I) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var n = e(a);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = V.A;
      return a === null ? null : a.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function d(a) {
      if (G.call(a, "key")) {
        var n = Object.getOwnPropertyDescriptor(a, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, n) {
      function m() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: m,
        configurable: !0
      });
    }
    function x() {
      var a = e(this.type);
      return ne[a] || (ne[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function A(a, n, m, u, p, w, v, _) {
      return m = w.ref, a = {
        $$typeof: C,
        type: a,
        key: n,
        props: w,
        _owner: p
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: v
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function g(a, n, m, u, p, w, v, _) {
      var P = n.children;
      if (P !== void 0)
        if (u)
          if (H(P)) {
            for (u = 0; u < P.length; u++)
              R(P[u]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(P);
      if (G.call(n, "key")) {
        P = e(a);
        var Y = Object.keys(n).filter(function(me) {
          return me !== "key";
        });
        u = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", L[P + u] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          P,
          Y,
          P
        ), L[P + u] = !0);
      }
      if (P = null, m !== void 0 && (i(m), P = "" + m), d(n) && (i(n.key), P = "" + n.key), "key" in n) {
        m = {};
        for (var J in n)
          J !== "key" && (m[J] = n[J]);
      } else m = n;
      return P && c(
        m,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), A(
        a,
        P,
        w,
        p,
        o(),
        m,
        v,
        _
      );
    }
    function R(a) {
      typeof a == "object" && a !== null && a.$$typeof === C && a._store && (a._store.validated = 1);
    }
    var f = D, C = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), N = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), V = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, H = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var U, ne = {}, q = f["react-stack-bottom-frame"].bind(
      f,
      h
    )(), $ = M(l(h)), L = {};
    re.Fragment = I, re.jsx = function(a, n, m, u, p) {
      var w = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        a,
        n,
        m,
        !1,
        u,
        p,
        w ? Error("react-stack-top-frame") : q,
        w ? M(l(a)) : $
      );
    }, re.jsxs = function(a, n, m, u, p) {
      var w = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        a,
        n,
        m,
        !0,
        u,
        p,
        w ? Error("react-stack-top-frame") : q,
        w ? M(l(a)) : $
      );
    };
  }()), re;
}
var ve;
function Ee() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? oe.exports = $e() : oe.exports = Ae()), oe.exports;
}
var t = Ee();
function Oe(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((l) => l.group) ? "tab" : "simple";
}
function Re(e, r = "create", i = "Info") {
  const l = {};
  let o = !1;
  if (Object.values(e).forEach((d) => {
    d.group && (o = !0);
  }), !o) return {};
  const h = [];
  return Object.entries(e).forEach(([d, c]) => {
    if (c.vmode === "edit" && r === "create") return;
    const x = { ...c, name: d };
    if (c.group) {
      const A = c.group;
      l[A] || (l[A] = []), l[A].push(x);
    } else
      h.push(x);
  }), h.length > 0 ? {
    [i]: h,
    ...l
  } : l;
}
function je(e, r = "create") {
  const i = {};
  return Object.keys(e).forEach((l) => {
    e[l].vmode === "edit" && r === "create" || (i[l] = {
      label: l,
      required: e[l].required ?? !1
    });
  }), i;
}
const se = (e, r, i, l) => {
  e.forEach((o) => {
    const h = o?.name;
    if (!h) return;
    let d = l?.[h];
    d == null && (d = o.default), o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? r[h] = Array.isArray(d) ? d : typeof d == "string" ? d.split(",").map((x) => x.trim()).filter(Boolean) : [] : o.type === "json" ? r[h] = typeof d == "object" && d !== null ? JSON.stringify(d, null, 2) : d ?? "" : o.type === "date" ? r[h] = typeof d == "string" ? d.slice(0, 10) : "" : o.type === "time" ? typeof d == "string" ? d.includes("T") ? r[h] = d.slice(11, 16) : r[h] = d.slice(0, 5) : r[h] = "" : h === "blocked" || h === "blacklist" ? r[h] = String(d ?? "false") : r[h] = d ?? "";
    let c;
    o.type === "file" ? c = o.multiple ? B.array().of(B.mixed()) : B.mixed() : o.multiple === !0 || o.type === "checkbox" || o.type === "tags" ? c = B.array().of(B.string()) : o.type === "email" ? c = B.string().email("Invalid email") : o.type === "number" ? c = B.number().typeError("Must be a number") : o.type === "json" ? c = B.string().test("json", "Invalid JSON", (x) => {
      if (!x) return !0;
      try {
        return JSON.parse(x), !0;
      } catch {
        return !1;
      }
    }) : c = B.string(), o.required && (c = c.required(
      o.error_message || `${o.label || h} is required`
    )), o?.validate?.regex && typeof o.validate.regex == "string" && (c = c.matches(
      new RegExp(o?.validate?.regex),
      o?.error_message || "Invalid input format"
    )), o?.validate && Object.entries(o.validate).forEach(([x, A]) => {
      switch (x) {
        case "email":
          A && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(A),
            `Must match pattern: ${A}`
          );
          break;
        case "date":
          c = B.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((g, R) => {
            if (typeof R == "string") {
              const f = R.replace(/-/g, "/"), [C, F, I] = f.split("/");
              if (C && F && I)
                return /* @__PURE__ */ new Date(`${I}-${F}-${C}`);
            }
            return g;
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
          c = B.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = B.number().typeError("Must be a decimal").transform((g, R) => {
            if (R == null || R === "") return;
            const f = Number(R);
            if (isNaN(f)) return g;
            if (typeof g == "number" && !isNaN(g)) {
              const C = Number(g);
              return Number.isInteger(C) ? Number(f.toFixed(C)) : f;
            }
            return f;
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
            (g) => g && g.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (g) => g && g.toLowerCase()
          );
          break;
        case "length-min": {
          const g = Number(A);
          isNaN(g) || (c = c.min(g, `Minimum length is ${g}`));
          break;
        }
        case "length-max": {
          const g = Number(A);
          isNaN(g) || (c = c.max(g, `Maximum length is ${g}`));
          break;
        }
      }
    }), i[h] = c;
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
const de = (e) => e === !0 || e === "true", W = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (i, l) => r[l] !== void 0 ? String(r[l]) : i
) : Array.isArray(e) ? e.map((i) => W(i, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([i, l]) => [
    W(i, r),
    W(l, r)
  ])
) : e, Q = (e, r, i, l) => {
  if (!Array.isArray(i) || i.length === 0) return {};
  const o = l ?? (i[0] && typeof i[0] == "object" && "category" in i[0] ? "category" : void 0);
  if (!o) {
    const d = {};
    return i.forEach((c) => {
      const x = c[e], A = c[r];
      x != null && A != null && (d[String(x)] = String(A));
    }), d;
  }
  const h = {};
  return i.forEach((d) => {
    const c = d[o] ?? "Others", x = d[e], A = d[r];
    x == null || A == null || (h[c] || (h[c] = {}), h[c][String(x)] = String(A));
  }), h;
}, we = (e, r) => {
  if (!e || r == null) return;
  const i = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[i];
  for (const o of Object.values(e))
    if (i in o)
      return o[i];
}, Te = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (l) => [
        String(l.value),
        String(l.title ?? l.label ?? l.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([l, o]) => [String(l), o]) : Object.values(e).flatMap(
    (l) => Object.entries(l).map(
      ([o, h]) => [String(o), h]
    )
  ) : [];
}, Ne = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null && !Array.isArray(r);
};
async function Ce() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (l, o) => {
        navigator.geolocation.getCurrentPosition(l, o, {
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
const Fe = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ie(e, r = "create") {
  return Object.entries(e).filter(([, i]) => !(i.vmode === "edit" && r === "create")).map(([i, l]) => ({
    ...l,
    name: i
  }));
}
async function le(e, r, i, l = void 0, o = void 0, h = {}) {
  try {
    let d = i;
    return d || (d = (await K({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {}, srcid: o },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await K({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: d,
        filter: h,
        refid: l,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (d) {
    throw d;
  }
}
function Pe(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function _e(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const i = r.match(/^(.+?)\s+as\s+.+$/i);
    return i ? i[1]?.trim() : r;
  }).filter((r) => !!r);
}
const X = (e) => {
  const r = {};
  for (const [i, l] of Object.entries(e)) {
    const o = i.includes(".") ? i.split(".").pop() : i;
    if (o in r) {
      console.warn(`Duplicate key after normalization: ${o}`);
      continue;
    }
    r[o] = l;
  }
  return r;
};
function he({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: l,
  refid: o,
  module_refid: h,
  optionsOverride: d,
  setFieldOptions: c
}) {
  const [x, A] = Z(!1), [g, R] = Z(
    d ?? e.options ?? {}
  ), [f, C] = Z(""), [F, I] = Z(0), b = ge(null), j = ge(null), [E, N] = Z(!1), O = D.useRef(f), y = e.disabled === !0;
  D.useEffect(() => {
    O.current = f;
  }, [f]);
  const k = ($) => {
    if (y) {
      $.preventDefault(), j.current?.removeAttribute("open");
      return;
    }
    $.currentTarget.open || C("");
  };
  ee(() => {
    d && Object.keys(d).length !== 0 && R(d);
  }, [d]), ee(() => {
    const $ = (L) => {
      j.current && !j.current.contains(L.target) && (j.current.open = !1, C(""));
    };
    return document.addEventListener("mousedown", $), () => {
      document.removeEventListener("mousedown", $);
    };
  }, []);
  const s = e.name;
  D.useEffect(() => {
    let $ = !0;
    return (async () => {
      let a = e.valueKey ?? "value", n = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const v = Object.values(e.options);
          if (v.length && typeof v[0] == "string") {
            R(e.options);
            return;
          }
        }
        const p = (Array.isArray(e.options) ? e.options : [e.options]).map(X), w = Q(
          a,
          n,
          p,
          e.groupKey
          // auto-uses `category` if present
        );
        R(w);
        return;
      }
      const m = e?.source ?? {};
      if (e.type === "dataMethod") {
        const u = e.method, p = u ? i[u] : void 0;
        if (p)
          try {
            const w = await Promise.resolve(p()), v = Array.isArray(w?.data?.data) ? w.data.data : Array.isArray(w?.data) ? w.data : w, _ = Array.isArray(v) ? v.map(X) : [], P = Q(a, n, _, e.groupKey);
            $ && R(P);
          } catch (w) {
            console.error("Method execution failed:", w), $ && R({});
          }
        else
          $ && R({});
      }
      if (m.type === "api" && m.url)
        try {
          const u = await K({
            method: m.method || "GET",
            url: m.url,
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          }), p = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u, w = Array.isArray(p) ? p.map(X) : [], v = Q(a, n, w, e.groupKey);
          $ && R(v);
        } catch (u) {
          console.error("API execution failed:", u), $ && R({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!l) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let u;
          if (e.type === "dataSelector")
            u = {
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
            u = {
              table: e.table,
              cols: e.columns,
              where: e.where ? o ? W(e.where, { refid: o }) : e.where : void 0
            };
          }
          const p = await le(l, u, e?.queryid, void 0, h), w = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, v = Array.isArray(w) ? w.map(X) : [], _ = Q(a, n, v, e.groupKey);
          $ && R(_);
        } catch (u) {
          console.error("API fetch failed:", u);
        }
      }
    })(), () => {
      $ = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    o
  ]);
  const z = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, S = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, T = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, V = ($) => $.icon ? /* @__PURE__ */ t.jsx("i", { className: $.icon }) : null, G = be(
    () => Te(g),
    [g]
  ), H = G.length, M = be(() => e.search || !f ? G : G.filter(
    ([, $]) => $.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, G]), U = ($, L) => {
    if (j.current?.open === !0 || E === !0)
      if ($.key === "ArrowDown")
        $.preventDefault(), I(
          (a) => a + 1 < M.length ? a + 1 : 0
        );
      else if ($.key === "ArrowUp")
        $.preventDefault(), I(
          (a) => a - 1 >= 0 ? a - 1 : M.length - 1
        );
      else if ($.key === "Enter") {
        $.preventDefault();
        const [a] = M[F] || [];
        a && r.setFieldValue(e.name, L ? a : [...r.values[e.name], a]), j.current && (j.current.open = !1);
      } else $.key === "Escape" && (j.current.open = !1, C(""), N(!1));
  };
  ee(() => {
    b.current?.querySelector(
      `[data-index="${F}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [F]), ee(() => {
    F >= M.length && I(0);
  }, [M, F]), ee(() => {
    const $ = e.autocomplete, L = e.ajaxchain;
    if (!$ && !L) return;
    const a = r.values[e.name];
    if (!a) return;
    const n = Array.isArray(L) ? L : L ? [L] : [];
    (async () => {
      try {
        if (Pe($)) {
          const u = $.src;
          if (!u || !l) return;
          const p = W(u.where ?? {}, {
            refid: a
          }), w = {
            ...u,
            table: u.table,
            cols: u.columns,
            where: p
          }, { data: v } = await le(l, w, e?.queryid, void 0, h), _ = Array.isArray(v?.data) ? v.data[0] : v?.data;
          _ && $.target.split(",").map((P) => P.trim()).forEach((P) => {
            _[P] !== void 0 && r.setFieldValue(P, _[P]);
          });
        }
        for (const u of n) {
          const p = u.src;
          if (!u || typeof u != "object" || !p || typeof p != "object" || !l) continue;
          let w;
          if (!p.queryid) {
            if (!p.table || !p.columns)
              throw new Error("SQL query requires field.table");
            const Se = W(p?.where ?? {}, {
              refid: a
            });
            w = {
              ...p,
              table: p.table,
              cols: p.columns,
              where: Se
            };
          }
          const { data: v } = await le(l, w, p?.queryid, a, h);
          let _ = e.valueKey ?? "value", P = e.labelKey ?? "title";
          const Y = Array.isArray(v?.data?.data) ? v.data.data : Array.isArray(v?.data) ? v.data : v, J = Array.isArray(Y) ? Y.map(X) : [], me = Q(
            _,
            P,
            J,
            e.groupKey
          );
          c?.(u.target, me);
        }
      } catch (u) {
        console.error("Autocomplete / AjaxChain fetch failed", u);
      }
    })();
  }, [r.values[e.name]]), D.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !l) return;
    const $ = _e(e.columns ?? ""), L = new AbortController(), a = setTimeout(async () => {
      try {
        let n;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Y = o ? W(e.where ?? {}, {
            refid: o
          }) : e.where;
          n = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Y
          };
        }
        let m = {};
        Array.isArray($) && $.forEach((Y) => {
          m[Y] = [f, "LIKE"];
        });
        let u = e.valueKey ?? "value", p = e.labelKey ?? "title";
        const { data: w } = await le(l, n, e?.queryid, void 0, h, m), v = Array.isArray(w?.data?.data) ? w.data.data : Array.isArray(w?.data) ? w.data : w, _ = Array.isArray(v) ? v.map(X) : [], P = Q(
          u,
          p,
          _,
          e.groupKey
        );
        R(P);
      } catch (n) {
        if (K.isCancel(n)) return;
        console.error("Search fetch failed", n);
      }
    }, 500);
    return () => {
      clearTimeout(a), L.abort();
    };
  }, [f, o]);
  const ne = async ($) => {
    if ($.length === 0) {
      console.error("No file");
      return;
    }
    const L = l?.baseURL + l?.uploadURL;
    if (!L) {
      console.error("No Upload URL ");
      return;
    }
    const a = e.multiple === !0;
    try {
      const n = await Promise.all(
        Array.from($).map(async (m) => {
          const u = new FormData();
          return u.append("file", m), (await K({
            method: "POST",
            url: L,
            data: u,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${l?.accessToken}`
            }
          })).data;
        })
      );
      r.setFieldValue(
        s,
        a ? n.map((m) => m.path) : n[0]?.path
      );
    } catch (n) {
      console.error("File upload failed", n), r.setFieldError(s, "File upload failed");
    }
  }, q = async ($, L, a) => {
    const n = L[$];
    if (!n) return;
    const m = i?.[n];
    if (typeof m != "function") {
      console.error(`Method "${String(n)}" not found`);
      return;
    }
    try {
      await Promise.resolve(m(a));
    } catch (u) {
      console.error(`Method "${String(n)}" failed`, u);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const a = r.values[s] ?? "", n = f !== "" ? f : we(g, a) ?? String(a ?? ""), m = (p) => {
        if (y) return;
        const w = p.target.value;
        C(w), I(0), w.trim() ? N(!0) : (N(!1), r.setFieldValue(s, ""));
      }, u = (p) => {
        r.setFieldValue(s, p), C(""), N(!1), q("onChange", e, `${s}-${p}`);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${z} ${S}`,
            value: n,
            placeholder: e.placeholder || "Type to search...",
            onChange: m,
            onBlur: () => {
              setTimeout(() => N(!1), 150);
            },
            onKeyDown: (p) => {
              if (p.key === "Enter") {
                if (p.preventDefault(), M[F]) {
                  const [w] = M[F];
                  r.setFieldValue(s, w);
                } else f.trim() && r.setFieldValue(s, f.trim());
                N(!1);
                return;
              }
              U(p, !0);
            },
            disabled: y
          }
        ),
        E && !y && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: b,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: M.length > 0 ? M.map(([p, w], v) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${s}-${p}`,
                "data-index": v,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${F === v ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => u(p),
                children: w
              },
              p
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${n}" ` })
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
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: T, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: `relative w-full ${y ? "opacity-70" : ""}`,
              onToggle: k,
              ref: j,
              onKeyDown: (n) => {
                y || U(n, !1);
              },
              children: [
                /* @__PURE__ */ t.jsxs(
                  "summary",
                  {
                    className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}`,
                    children: [
                      /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: a?.length > 0 ? a.join(", ") : `Select ${e.label}` }),
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
                !y && /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: f,
                      onChange: (n) => {
                        C(n.target.value), I(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  M.length > 0 ? M.map(([n, m], u) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${n}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${a?.includes(n) ? "bg-indigo-50 text-indigo-600 font-medium" : F === u ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${n}`,
                            type: "checkbox",
                            checked: a?.includes(n),
                            onChange: (p) => {
                              const w = p.target.checked ? [...a, n] : a?.filter((v) => v !== n);
                              r.setFieldValue(s, w), q("onChange", e, `${s}-${n}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: y,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        m
                      ]
                    },
                    n
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: `relative w-full ${y ? "opacity-70" : ""}`,
            onToggle: k,
            ref: j,
            onKeyDown: (a) => {
              y || U(a, !0);
            },
            children: [
              /* @__PURE__ */ t.jsxs(
                "summary",
                {
                  className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? we(g, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              !y && /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: (a) => {
                      C(a.target.value), I(0);
                    },
                    onKeyDown: (a) => U(a, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                M.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, ""), j.current?.removeAttribute("open"), C("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                M.length > 0 ? M.map(([a, n], m) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${s}-${a}`,
                    "data-index": m,
                    onClick: (u) => {
                      u.preventDefault(), u.stopPropagation(), r.setFieldValue(s, a), j.current?.removeAttribute("open"), C(""), I(0), q("onChange", e, `${s}-${a}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === a ? "bg-indigo-50 text-indigo-600 font-medium" : F === m ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: n
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
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              className: `${z} ${S} min-h-[120px] resize-none`,
              onFocus: () => A(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(
                  s,
                  a.target.value
                ), q("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: y
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const a = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: T, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: `relative w-full ${y ? " opacity-70" : ""}`,
              onToggle: k,
              ref: j,
              onKeyDown: (n) => {
                y || U(n, !1);
              },
              children: [
                /* @__PURE__ */ t.jsxs(
                  "summary",
                  {
                    className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                    children: [
                      /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: a?.length > 0 ? a.join(", ") : `Select ${e.label}` }),
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
                !y && /* @__PURE__ */ t.jsxs("div", { ref: b, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: f,
                      onChange: (n) => {
                        y || (C(n.target.value), I(0));
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  M.length > 0 ? M.map(([n, m], u) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${n}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${a?.includes(n) ? "bg-indigo-50 text-indigo-600 font-medium" : F === u ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${n}`,
                            type: "checkbox",
                            checked: a?.includes(n),
                            onChange: (p) => {
                              const w = p.target.checked ? [...a, n] : a?.filter((v) => v !== n);
                              r.setFieldValue(s, w), q("onChange", e, `${s}-${n}`);
                            },
                            onBlur: r.handleBlur,
                            disabled: y,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        m
                      ]
                    },
                    n
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${z} ${S} appearance-none ${y ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => A(!0),
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(
                  s,
                  a.target.value === "" ? "" : a.target.value
                ), q("onChange", e, `${s}`);
              },
              disabled: y,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ne(g) && Object.entries(g).map(([a, n]) => /* @__PURE__ */ t.jsx("option", { value: a, className: "py-2", children: n }, a)),
                Ne(g) && Object.entries(g).map(([a, n]) => /* @__PURE__ */ t.jsx("optgroup", { label: a, children: Object.entries(n).map(([m, u]) => /* @__PURE__ */ t.jsx("option", { value: m, children: u }, m)) }, a))
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
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${H > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(g || {}).map(([a, n]) => /* @__PURE__ */ t.jsxs(
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
                  onChange: (m) => {
                    r.setFieldValue(
                      s,
                      m.target.value === "" ? "" : m.target.value
                    ), q("onChange", e, `${s}-${a}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: y,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              n
            ]
          },
          a
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const a = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(g || {}).map(([n, m]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${n}`,
                  type: "checkbox",
                  checked: a.includes(n),
                  onChange: (u) => {
                    const p = u.target.checked ? [...a, n] : a.filter((w) => w !== n);
                    r.setFieldValue(s, p), q("onChange", e, `${s}-${n}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: y,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${y ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              m
            ]
          },
          n
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const a = r.values[s], n = f.trim(), m = Array.isArray(g) ? g : Object.entries(g || {}).map(([v, _]) => ({ value: v, label: _ })), u = (v) => {
        y || v && !a.includes(v) && (r.setFieldValue(s, [...a, v]), C(""));
      }, p = (v) => {
        r.setFieldValue(
          s,
          a.filter((_) => _ !== v)
        );
      }, w = (v) => m.find((_) => _.value === v)?.label ?? v;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${z} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${y ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !y && document.getElementById(`${s}-input`)?.focus(),
            children: [
              a.map((v) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: w(v) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (_) => {
                          _.stopPropagation(), y || p(v);
                        },
                        onMouseDown: (_) => _.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                v
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: f,
                  onChange: (v) => C(v.target.value),
                  onKeyDown: (v) => {
                    (v.key === "Enter" || v.key === ",") && (v.preventDefault(), u(n));
                  },
                  placeholder: a.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: y
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
      const $ = e.multiple === !0, L = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "file",
              className: `${z} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => A(!0),
              name: s,
              multiple: $,
              onChange: (a) => {
                const n = a.currentTarget.files;
                n && ne(n), q("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: y
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        L.map((a) => {
          const n = a?.split("/").pop();
          return n ? /* @__PURE__ */ t.jsx("div", { className: "mt-1", children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: n }) }, a) : null;
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
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
                r.setFieldValue(
                  s,
                  a.target.value
                ), q("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: y,
              className: `${z} ${S} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
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
                r.setFieldValue(
                  s,
                  a.target.value
                ), q("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: y,
              className: `${z} ${S} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "number":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: e.type || "text",
              className: `${z} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => A(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(
                  s,
                  a.target.value
                ), q("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: y,
              min: e.min ?? 1,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: e.type || "text",
              className: `${z} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => A(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(
                  s,
                  a.target.value
                ), q("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: y,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${x ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Me({ title: e, children: r, isFirst: i }) {
  const [l, o] = Z(i);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => o(!l),
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
function Le({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: l = (g) => {
  },
  onCancel: o = () => {
  },
  methods: h = {},
  components: d = {},
  sqlOpsUrls: c = {},
  refid: x,
  module_refid: A
}) {
  const [g, R] = D.useState({}), f = (b, j) => {
    R((E) => ({
      ...E,
      [b]: j
    }));
  }, { initialValues: C, validationSchema: F } = D.useMemo(() => {
    const b = {}, j = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [r, i]), I = ie({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: B.object().shape(F),
    onSubmit: (b) => {
      l(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: I.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, j], E) => /* @__PURE__ */ t.jsx(Me, { title: b, isFirst: E === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((N, O) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(N.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: x,
            module_refid: A,
            sqlOpsUrls: c,
            components: d,
            field: N,
            formik: I,
            methods: h,
            setFieldOptions: f,
            ...g[N.name] ? { optionsOverride: g[N.name] } : {}
          },
          N.name
        )
      },
      N?.name ?? `field-${O}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ke({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: l = (R) => {
  },
  onCancel: o = () => {
  },
  methods: h = {},
  components: d = {},
  sqlOpsUrls: c = {},
  widget: x,
  refid: A,
  module_refid: g
}) {
  const R = Object.keys(r), [f, C] = D.useState(0), [F, I] = D.useState({}), b = (S, T) => {
    I((V) => ({
      ...V,
      [S]: T
    }));
  }, { initialValues: j, validationSchema: E, stepperSchemas: N } = D.useMemo(() => {
    const S = {}, T = {}, V = {};
    return x ? Object.entries(r).forEach(([G, H]) => {
      const M = {};
      se(H, S, M, i), V[G] = M;
    }) : Object.entries(r).forEach(([G, H]) => {
      se(H, S, T, i);
    }), {
      initialValues: S,
      validationSchema: T,
      stepperSchemas: V
    };
  }, [r, i, x]), O = R[f] ?? null, y = x && O ? N[O] ?? {} : E, k = ie({
    initialValues: j,
    enableReinitialize: !0,
    validationSchema: B.object().shape(y),
    onSubmit: (S) => {
      x ? (f < R.length - 1 && C((T) => T + 1), f === R.length - 1 && l(S)) : l(S);
    }
  }), s = async (S) => {
    if (S.preventDefault(), !x) {
      const T = await k.validateForm();
      if (Object.keys(T).length > 0) {
        alert("Please fill all required fields before submitting."), k.setTouched(
          Object.keys(T).reduce((V, G) => ({ ...V, [G]: !0 }), {})
        );
        return;
      }
    }
    k.handleSubmit(S);
  }, z = () => {
    C((S) => S > 0 ? S - 1 : S);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: R.map((S, T) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => C(T),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${f === T ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: S })
      },
      S
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: s, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: O && r[O]?.map((S, T) => de(S.hidden) || S.type === "geolocation" || S.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ce[ue(Number(S.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  he,
                  {
                    refid: A,
                    module_refid: g,
                    sqlOpsUrls: c,
                    field: S,
                    formik: k,
                    methods: h,
                    components: d,
                    setFieldOptions: b,
                    ...F[S.name] ? { optionsOverride: F[S.name] } : {}
                  },
                  S.name
                )
              },
              S?.name ?? `field-${T}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${f > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              f > 0 && /* @__PURE__ */ t.jsx("button", { onClick: z, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: o, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: x ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                f + 1,
                " of ",
                R.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: R.map((S, T) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${T === f ? "bg-action w-6" : "bg-gray-300"}`
              },
              T
            )) })
          ] }) })
        ]
      },
      R[f]
    )
  ] });
}
function ze({
  title: e,
  fields: r,
  data: i,
  onSubmit: l = (A) => {
  },
  onCancel: o = () => {
  },
  methods: h = {},
  sqlOpsUrls: d = {},
  refid: c,
  module_refid: x
}) {
  const A = Ie(r, d.operation), [g, R] = D.useState({}), f = (b, j) => {
    R((E) => ({
      ...E,
      [b]: j
    }));
  }, { initialValues: C, validationSchema: F } = D.useMemo(() => {
    const b = {}, j = {};
    return A.forEach((E) => {
      se([E], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [A, i]), I = ie({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: B.object().shape(F),
    onSubmit: (b) => {
      l(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: I.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: A.map((b, j) => de(b.hidden) || b.type === "geolocation" || b.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: c,
            module_refid: x,
            sqlOpsUrls: d,
            field: b,
            formik: I,
            methods: h,
            setFieldOptions: f,
            ...g[b.name] ? { optionsOverride: g[b.name] } : {}
          }
        )
      },
      b?.name ?? `field-${j}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function De({ title: e, children: r }) {
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
  data: i,
  onSubmit: l = (g) => {
  },
  onCancel: o = () => {
  },
  methods: h = {},
  components: d = {},
  sqlOpsUrls: c = {},
  refid: x,
  module_refid: A
}) {
  const [g, R] = D.useState({}), f = (b, j) => {
    R((E) => ({
      ...E,
      [b]: j
    }));
  }, { initialValues: C, validationSchema: F } = D.useMemo(() => {
    const b = {}, j = {};
    return Object.values(r).flat().forEach((E) => {
      se([E], b, j, i);
    }), {
      initialValues: b,
      validationSchema: j
    };
  }, [r, i]), I = ie({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: B.object().shape(F),
    onSubmit: (b) => {
      l(b);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: I.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([b, j], E) => /* @__PURE__ */ t.jsx(De, { title: b, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((N, O) => de(N.hidden) || N.type === "geolocation" || N.vmode === "edit" && c.operation === "create" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ce[ue(Number(N.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: x,
            module_refid: A,
            sqlOpsUrls: c,
            components: d,
            field: N,
            formik: I,
            methods: h,
            setFieldOptions: f,
            ...g[N.name] ? { optionsOverride: g[N.name] } : {}
          },
          N.name
        )
      },
      N?.name ?? `field-${O}`
    )) }) }, b)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: o, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const ae = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), pe = async (e) => (await K.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ae(e) }
)).data.refhash, xe = async (e, r) => (await K.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ae(e) }
)).data.refid, Be = {
  async fetch(e, r, i, l) {
    const o = await pe(e);
    let h = !1, d;
    i && (h = !0, d = i), h || (d = await xe(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o,
      srcid: l
    }));
    const c = await K.post(
      e.baseURL + e.dbopsFetch,
      { refid: d, datahash: o },
      { headers: ae(e) }
    );
    return c.data?.data ?? c.data;
  },
  async create(e, r, i) {
    const l = await pe(e), o = await xe(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: l,
      srcid: i
    });
    return (await K.post(
      e.baseURL + e.dbopsCreate,
      { refid: o, fields: r.values, datahash: l },
      { headers: ae(e) }
    )).data;
  },
  async update(e, r, i) {
    const l = await pe(e), o = await xe(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: l,
      srcid: i
    });
    return (await K.post(
      e.baseURL + e.dbopsUpdate,
      { refid: o, fields: r.values, datahash: l },
      { headers: ae(e) }
    )).data;
  }
};
function Ye({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: i = null,
  onCancel: l = () => {
  },
  components: o = {},
  callback: h = () => {
  },
  initialvalues: d = {}
}) {
  let c = Oe(e);
  const x = e.endPoints, A = e?.source?.refid, g = Re(e?.fields ?? {}, x?.operation), [R, f] = D.useState(d), C = D.useMemo(() => Fe(e.fields), [e.fields]);
  D.useEffect(() => {
    let b = !0;
    return (async () => {
      const E = e?.source ?? {};
      if (!E?.type) {
        b && f({});
        return;
      }
      if (E.type === "method") {
        const N = E.method, O = N ? r[N] : void 0;
        if (O)
          try {
            const y = await Promise.resolve(O());
            b && f(y ?? {});
          } catch (y) {
            console.error("Method execution failed:", y), b && f({});
          }
        else
          b && f({});
      }
      if (E.type === "api" && x?.operation !== "create")
        try {
          const N = await K({
            method: E.method || "GET",
            url: E.url ?? "",
            data: E.body ?? {},
            params: E.params ?? {},
            headers: E.headers ?? {}
          });
          b && f(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), b && f({});
        }
      if (E.type === "sql" && E.refid && E.refid !== "0" && x?.operation !== "create" || x?.operation !== "create" && E.dbopsid) {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = await Be.fetch(x, {
            source: {
              ...E,
              table: E.table,
              columns: E.columns,
              where: W(E.where, {
                refid: A
              })
            },
            fields: je(e.fields, x.operation)
          }, E?.dbopsid, e?.module_refid);
          b && f(N);
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      b = !1;
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
  const F = async (b) => {
    const j = e?.source ?? {};
    let E = null;
    if (C.length > 0)
      try {
        E = await Ce();
      } catch (O) {
        console.error("catch fetchGeolocation", O), E = null;
      }
    const N = {
      ...b,
      ...Object.fromEntries(
        C.map((O) => [O, E])
      )
    };
    if (j.type === "method") {
      const O = j.method, y = O ? r[O] : void 0;
      if (y)
        try {
          const k = await Promise.resolve(y(N));
          if (h?.(k), r?.handleActions) {
            let s = x?.operation === "update" ? A : k?.data?.refid;
            const z = e?.gotolink?.replace(
              "{hashid}",
              String(s)
            );
            r.handleActions(z);
          }
        } catch (k) {
          h?.(k), console.error("Method execution failed:", k);
        }
    }
    if (j.type === "api") {
      if (!x) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const O = await K({
          method: j.method || "POST",
          url: x.baseURL + j.endpoint,
          data: N ?? {},
          headers: {
            Authorization: `Bearer ${x?.accessToken}`
          }
        });
        if (h?.(O), r?.handleActions) {
          let y = x.operation === "update" ? A : O?.data?.refid;
          const k = e?.gotolink?.replace(
            "{hashid}",
            String(y)
          );
          r.handleActions(k);
        }
      } catch (O) {
        h?.(O), console.error("API fetch failed:", O);
      }
    }
    if (j.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let y = !1, k;
        j?.dbopsid && (y = !0, k = j?.dbopsid);
        const s = await K({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        if (!y) {
          let S = {
            ...j
          };
          j.where && (S = {
            ...j,
            where: W(j.where, {
              refid: A
            })
          }), k = (await K({
            method: "POST",
            url: O.baseURL + O.dbopsGetRefId,
            data: {
              operation: O.operation,
              source: S,
              fields: je(e.fields, O.operation),
              forcefill: e.forcefill,
              datahash: s.data.refhash,
              srcid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${O?.accessToken}`
            }
          }))?.data.refid;
        }
        const z = await K({
          method: "POST",
          url: O.baseURL + O[O.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: k,
            fields: N,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        if (h?.(z), r?.handleActions) {
          let S = O.operation === "update" ? A : z?.data?.refid;
          const T = e?.gotolink?.replace(
            "{hashid}",
            String(S)
          );
          r.handleActions(T);
        }
      } catch (y) {
        h?.(y), console.error("API fetch failed:", y);
      }
    }
  }, I = {
    accordion: /* @__PURE__ */ t.jsx(
      Le,
      {
        title: e?.title ?? "",
        groupedFields: g,
        data: R,
        onSubmit: F,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: x,
        refid: A,
        module_refid: e?.module_refid
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: e?.title ?? "",
        groupedFields: g,
        data: R,
        onSubmit: F,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: x,
        refid: A,
        module_refid: e?.module_refid
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      ke,
      {
        title: e?.title ?? "",
        groupedFields: g,
        data: R,
        onSubmit: F,
        onCancel: l,
        methods: r,
        components: o,
        widget: e?.widget,
        sqlOpsUrls: x,
        refid: A,
        module_refid: e?.module_refid
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      ze,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: R,
        onSubmit: F,
        onCancel: l,
        methods: r,
        components: o,
        sqlOpsUrls: x,
        refid: A,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: I[c] ?? I.simple });
}
export {
  Ye as LogiksForm
};
