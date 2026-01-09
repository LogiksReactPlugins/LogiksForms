import D, { useState as H, useRef as me, useEffect as Q, useMemo as pe } from "react";
import G from "axios";
import * as L from "yup";
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
var xe;
function Ne() {
  if (xe) return X;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(h, n, x) {
    var j = null;
    if (x !== void 0 && (j = "" + x), n.key !== void 0 && (j = "" + n.key), "key" in n) {
      x = {};
      for (var l in n)
        l !== "key" && (x[l] = n[l]);
    } else x = n;
    return n = x.ref, {
      $$typeof: e,
      type: h,
      key: j,
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
var be;
function we() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === V ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case p:
          return "Fragment";
        case S:
          return "Profiler";
        case g:
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
          case A:
            return "Portal";
          case C:
            return (a.displayName || "Context") + ".Provider";
          case b:
            return (a._context.displayName || "Context") + ".Consumer";
          case O:
            var i = a.render;
            return a = a.displayName, a || (a = i.displayName || i.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case B:
            return i = a.displayName || null, i !== null ? i : e(a.type) || "Memo";
          case f:
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
    function o(a) {
      try {
        r(a);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var w = i.error, I = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), r(a);
      }
    }
    function h(a) {
      if (a === p) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === f)
        return "<...>";
      try {
        var i = e(a);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = Y.A;
      return a === null ? null : a.getOwner();
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function j(a) {
      if (k.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, i) {
      function w() {
        u || (u = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: w,
        configurable: !0
      });
    }
    function m() {
      var a = e(this.type);
      return c[a] || (c[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function y(a, i, w, I, q, M, le, ie) {
      return w = M.ref, a = {
        $$typeof: $,
        type: a,
        key: i,
        props: M,
        _owner: q
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: le
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, i, w, I, q, M, le, ie) {
      var z = i.children;
      if (z !== void 0)
        if (I)
          if (U(z)) {
            for (I = 0; I < z.length; I++)
              v(z[I]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(z);
      if (k.call(i, "key")) {
        z = e(a);
        var W = Object.keys(i).filter(function(je) {
          return je !== "key";
        });
        I = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", T[z + I] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          z,
          W,
          z
        ), T[z + I] = !0);
      }
      if (z = null, w !== void 0 && (o(w), z = "" + w), j(i) && (o(i.key), z = "" + i.key), "key" in i) {
        w = {};
        for (var ce in i)
          ce !== "key" && (w[ce] = i[ce]);
      } else w = i;
      return z && l(
        w,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), y(
        a,
        z,
        M,
        q,
        n(),
        w,
        le,
        ie
      );
    }
    function v(a) {
      typeof a == "object" && a !== null && a.$$typeof === $ && a._store && (a._store.validated = 1);
    }
    var N = D, $ = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), C = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), Y = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, U = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var u, c = {}, R = N["react-stack-bottom-frame"].bind(
      N,
      x
    )(), P = E(h(x)), T = {};
    Z.Fragment = p, Z.jsx = function(a, i, w, I, q) {
      var M = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        a,
        i,
        w,
        !1,
        I,
        q,
        M ? Error("react-stack-top-frame") : R,
        M ? E(h(a)) : P
      );
    }, Z.jsxs = function(a, i, w, I, q) {
      var M = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        a,
        i,
        w,
        !0,
        I,
        q,
        M ? Error("react-stack-top-frame") : R,
        M ? E(h(a)) : P
      );
    };
  }()), Z;
}
var ge;
function Se() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? te.exports = Ne() : te.exports = we()), te.exports;
}
var t = Se();
function Ee(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((h) => h.group) ? "tab" : "simple";
}
function Oe(e, r = "Info") {
  const o = {};
  let h = !1;
  if (Object.values(e).forEach((x) => {
    x.group && (h = !0);
  }), !h) return {};
  const n = [];
  return Object.entries(e).forEach(([x, j]) => {
    const l = { ...j, name: x };
    if (j.group) {
      const m = j.group;
      o[m] || (o[m] = []), o[m].push(l);
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
const ee = (e, r, o, h) => {
  e.forEach((n) => {
    const x = n?.name;
    if (!x) return;
    let j = h?.[x];
    j == null && (j = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[x] = Array.isArray(j) ? j : typeof j == "string" ? j.split(",").map((m) => m.trim()).filter(Boolean) : [] : n.type === "json" ? r[x] = typeof j == "object" && j !== null ? JSON.stringify(j, null, 2) : j ?? "" : n.type === "date" ? r[x] = typeof j == "string" ? j.slice(0, 10) : "" : x === "blocked" || x === "blacklist" ? r[x] = String(j ?? "false") : r[x] = j ?? "";
    let l;
    n.type === "file" ? l = n.multiple ? L.array().of(L.mixed()) : L.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? l = L.array().of(L.string()) : n.type === "email" ? l = L.string().email("Invalid email") : n.type === "number" ? l = L.number().typeError("Must be a number") : n.type === "date" ? l = L.string().matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date"
    ) : n.type === "json" ? l = L.string().test("json", "Invalid JSON", (m) => {
      if (!m) return !0;
      try {
        return JSON.parse(m), !0;
      } catch {
        return !1;
      }
    }) : l = L.string(), n.required && (l = l.required(
      n.error_message || `${n.label || x} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (l = l.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([m, y]) => {
      switch (m) {
        case "email":
          y && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(y),
            `Must match pattern: ${y}`
          );
          break;
        case "date":
          l = L.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, v) => {
            if (typeof v == "string") {
              const N = v.replace(/-/g, "/"), [$, A, p] = N.split("/");
              if ($ && A && p)
                return /* @__PURE__ */ new Date(`${p}-${A}-${$}`);
            }
            return d;
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
          l = L.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = L.number().typeError("Must be a decimal").transform((d, v) => {
            if (v == null || v === "") return;
            const N = Number(v);
            if (isNaN(N)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const $ = Number(d);
              return Number.isInteger($) ? Number(N.toFixed($)) : N;
            }
            return N;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(y);
          isNaN(d) || (l = l.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(y);
          isNaN(d) || (l = l.max(d, `Maximum length is ${d}`));
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
const ne = (e) => e === !0 || e === "true", K = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (o, h) => r[h] !== void 0 ? String(r[h]) : o
) : Array.isArray(e) ? e.map((o) => K(o, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([o, h]) => [
    K(o, r),
    K(h, r)
  ])
) : e, de = (e, r, o, h) => {
  const n = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const x = h ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!x) {
    const l = {};
    return n.forEach((m) => {
      m[e] != null && m[r] != null && (l[m[e]] = m[r]);
    }), l;
  }
  const j = {};
  return n.forEach((l) => {
    const m = l[x] ?? "Others", y = l[e], d = l[r];
    y == null || d == null || (j[m] || (j[m] = {}), j[m][y] = d);
  }), j;
}, fe = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const h of Object.values(e))
    if (r in h)
      return h[r];
}, Te = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (o) => Object.entries(o)
) : [], ye = (e) => {
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
      (h, n) => {
        navigator.geolocation.getCurrentPosition(h, n, {
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
async function ve(e, r) {
  try {
    const o = await G({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
    return await G({
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
  sqlOpsUrls: h,
  refid: n,
  optionsOverride: x,
  setFieldOptions: j
}) {
  const [l, m] = H(!1), [y, d] = H(
    x ?? e.options ?? {}
  ), [v, N] = H(""), [$, A] = H(0), p = me(null), g = me(null), [S, b] = H(!1), C = D.useRef(v);
  D.useEffect(() => {
    C.current = v;
  }, [v]);
  const O = (E) => {
    E.currentTarget.open || N("");
  };
  Q(() => {
    x && d(x);
  }, [x]), Q(() => {
    const E = (u) => {
      g.current && !g.current.contains(u.target) && (g.current.open = !1, N(""));
    };
    return document.addEventListener("mousedown", E), () => {
      document.removeEventListener("mousedown", E);
    };
  }, []);
  const s = e.name;
  D.useEffect(() => {
    let E = !0;
    return (async () => {
      if (e?.options) {
        d(e.options);
        return;
      }
      const c = e?.source ?? {};
      if (c.type === "method") {
        const R = c.method, P = R ? o[R] : void 0;
        if (P)
          try {
            const T = await Promise.resolve(P());
            E && d(T ?? {});
          } catch (T) {
            console.error("Method execution failed:", T), E && d({});
          }
        else
          E && d({});
      }
      if (c.type === "api" && c.url)
        try {
          const R = await G({
            method: c.method || "GET",
            url: c.url,
            data: c.body ?? {},
            params: c.params ?? {},
            headers: c.headers ?? {}
          }), P = e.valueKey || "value", T = e.labelKey || "title", a = de(P, T, R, e.groupKey);
          E && d(a);
        } catch (R) {
          console.error("API execution failed:", R), E && d({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let R;
          if (e.type === "dataSelector")
            R = {
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
            R = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (R.where = n ? K(e.where, { refid: n }) : e.where);
          const P = await ve(h, R);
          console.log("resssssssssssssssssssssssssss", P);
          const T = e.valueKey || "value", a = e.labelKey || "title", i = de(T, a, P, e.groupKey);
          E && d(i);
        } catch (R) {
          console.error("API fetch failed:", R);
        }
      }
    })(), () => {
      E = !1;
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
  `, B = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, f = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, _ = (E) => E.icon ? /* @__PURE__ */ t.jsx("i", { className: E.icon }) : null, V = pe(
    () => Te(y),
    [y]
  ), Y = V.length, k = pe(() => v ? V.filter(
    ([, E]) => E.toLowerCase().includes(v.toLowerCase())
  ) : V, [v, V]), U = (E, u) => {
    if (g.current?.open === !0 || S === !0)
      if (E.key === "ArrowDown")
        E.preventDefault(), A(
          (c) => c + 1 < k.length ? c + 1 : 0
        );
      else if (E.key === "ArrowUp")
        E.preventDefault(), A(
          (c) => c - 1 >= 0 ? c - 1 : k.length - 1
        );
      else if (E.key === "Enter") {
        E.preventDefault();
        const [c] = k[$] || [];
        c && r.setFieldValue(e.name, u ? c : [...r.values[e.name], c]), g.current && (g.current.open = !1);
      } else E.key === "Escape" && (g.current.open = !1, N(""), b(!1));
  };
  switch (Q(() => {
    p.current?.querySelector(
      `[data-index="${$}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [$]), Q(() => {
    $ >= k.length && A(0);
  }, [k, $]), Q(() => {
    const E = e.autocomplete, u = e.ajaxchain, c = E || u;
    if (!c || c === "off") return;
    const R = r.values[e.name];
    if (!R) return;
    (async () => {
      try {
        const T = c.src, a = K(T.where ?? {}, {
          refid: R
        });
        if (T.table && h) {
          let i = {
            ...T,
            table: T.table,
            cols: T.columns,
            where: a
          };
          const { data: w } = await ve(h, i);
          if (E) {
            const I = c.target.split(",").map((M) => M.trim()), q = Array.isArray(w?.data) ? w?.data[0] : w?.data;
            if (!q) return;
            I.forEach((M) => {
              q[M] !== void 0 && r.setFieldValue(M, q[M]);
            });
          }
          if (u) {
            const I = e.valueKey || "value", q = e.labelKey || "title", M = de(I, q, w, e.groupKey);
            j?.(u.target, M);
          }
        }
      } catch (T) {
        console.error("Autocomplete fetch failed", T);
      }
    })();
  }, [r.values[e.name]]), e.type) {
    case "autocomplete": {
      const u = r.values[s] ?? "", c = S ? v : fe(y, u) ?? "", R = (T) => {
        N(T.target.value), b(!0), A(0);
      }, P = (T) => {
        r.setFieldValue(s, T), N(""), b(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${F} ${B}`,
            value: c,
            placeholder: e.placeholder || "Type to search...",
            onChange: R,
            onFocus: () => b(!0),
            onBlur: () => setTimeout(() => b(!1), 150),
            onKeyDown: (T) => U(T, !0),
            disabled: e.disabled
          }
        ),
        S && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: p,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 ? k.map(([T, a], i) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": i,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${$ === i ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => P(T),
                children: a
              },
              T
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: "No matches" })
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${F} ${B} min-h-[120px] resize-none`,
              onFocus: () => m(!0),
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
        const u = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: f, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: O,
              ref: g,
              onKeyDown: (c) => U(c, !1),
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
                /* @__PURE__ */ t.jsxs("div", { ref: p, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                  e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (c) => {
                        N(c.target.value), A(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  k.length > 0 ? k.map(([c, R], P) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${c}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${u?.includes(c) ? "bg-indigo-50 text-indigo-600 font-medium" : $ === P ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${c}`,
                            type: "checkbox",
                            checked: u?.includes(c),
                            onChange: (T) => {
                              const a = T.target.checked ? [...u, c] : u?.filter((i) => i !== c);
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
                    c
                  )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
                ] })
              ]
            }
          ),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return s === "category" && console.log("formik.values[key]", r.values[s]), /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: O,
            ref: g,
            onKeyDown: (u) => U(u, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? fe(y, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: p, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: v,
                    onChange: (u) => {
                      N(u.target.value), A(0);
                    },
                    onKeyDown: (u) => U(u, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                k.length > 0 ? k.map(([u, c], R) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": R,
                    onClick: (P) => {
                      P.preventDefault(), P.stopPropagation(), r.setFieldValue(s, u), g.current?.removeAttribute("open"), N(""), A(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === u ? "bg-indigo-50 text-indigo-600 font-medium" : $ === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: c
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
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${F} ${B} appearance-none cursor-pointer pr-12`,
              onFocus: () => m(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !ye(y) && Object.entries(y).map(([u, c]) => /* @__PURE__ */ t.jsx("option", { value: u, className: "py-2", children: c }, u)),
                ye(y) && Object.entries(y).map(([u, c]) => /* @__PURE__ */ t.jsx("optgroup", { label: u, children: Object.entries(c).map(([R, P]) => /* @__PURE__ */ t.jsx("option", { value: R, children: P }, R)) }, u))
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
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${Y > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(y || {}).map(([u, c]) => /* @__PURE__ */ t.jsxs(
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
              c
            ]
          },
          u
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const u = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(y || {}).map(([c, R]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: u.includes(c),
                  onChange: (P) => {
                    const T = P.target.checked ? [...u, c] : u.filter((a) => a !== c);
                    r.setFieldValue(s, T);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              R
            ]
          },
          c
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const u = r.values[s], c = v.trim(), R = Array.isArray(y) ? y : Object.entries(y || {}).map(([i, w]) => ({ value: i, label: w })), P = (i) => {
        i && !u.includes(i) && (r.setFieldValue(s, [...u, i]), N(""));
      }, T = (i) => {
        r.setFieldValue(
          s,
          u.filter((w) => w !== i)
        );
      }, a = (i) => R.find((w) => w.value === i)?.label ?? i;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${F} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              u.map((i) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: a(i) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (w) => {
                          w.stopPropagation(), e.disabled || T(i);
                        },
                        onMouseDown: (w) => w.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                i
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: v,
                  onChange: (i) => N(i.target.value),
                  onKeyDown: (i) => {
                    (i.key === "Enter" || i.key === ",") && (i.preventDefault(), P(c));
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
    case "file":
      const E = e.multiple === !0;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${F} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
              name: s,
              multiple: E,
              onChange: (u) => {
                const c = u.currentTarget.files;
                c && r.setFieldValue(
                  s,
                  E ? Array.from(c) : c[0]
                );
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
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
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
              className: `${F} ${B} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
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
              className: `${F} ${B} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: f, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${F} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
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
function Pe({ title: e, children: r, isFirst: o }) {
  const [h, n] = H(o);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => n(!h),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${h ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${h ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${h ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${h ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function _e({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: h = (y) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: j = {},
  sqlOpsUrls: l = {},
  refid: m
}) {
  const [y, d] = D.useState({}), v = (p, g) => {
    d((S) => ({
      ...S,
      [p]: g
    }));
  }, { initialValues: N, validationSchema: $ } = D.useMemo(() => {
    const p = {}, g = {};
    return Object.values(r).flat().forEach((S) => {
      ee([S], p, g, o);
    }), {
      initialValues: p,
      validationSchema: g
    };
  }, [r, o]), A = re({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: L.object().shape($),
    onSubmit: (p) => {
      h(p);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([p, g], S) => /* @__PURE__ */ t.jsx(Pe, { title: p, isFirst: S === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((b, C) => ne(b.hidden) || b.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: m,
            sqlOpsUrls: l,
            components: j,
            field: b,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...y[b.name] ? { optionsOverride: y[b.name] } : {}
          },
          b.name
        )
      },
      b?.name ?? `field-${C}`
    )) }) }, p)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: n, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Fe({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: h = (d) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: j = {},
  sqlOpsUrls: l = {},
  widget: m,
  refid: y
}) {
  const d = Object.keys(r), [v, N] = D.useState(0), [$, A] = D.useState({});
  console.log("groupNames", d);
  const p = (f, _) => {
    A((V) => ({
      ...V,
      [f]: _
    }));
  }, { initialValues: g, validationSchema: S, stepperSchemas: b } = D.useMemo(() => {
    const f = {}, _ = {}, V = {};
    return m ? Object.entries(r).forEach(([Y, k]) => {
      const U = {};
      ee(k, f, U, o), V[Y] = U;
    }) : Object.entries(r).forEach(([Y, k]) => {
      ee(k, f, _, o);
    }), {
      initialValues: f,
      validationSchema: _,
      stepperSchemas: V
    };
  }, [r, o, m]), C = d[v] ?? null, O = m && C ? b[C] ?? {} : S, s = re({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: L.object().shape(O),
    onSubmit: (f) => {
      m ? (v < d.length - 1 && N((_) => _ + 1), v === d.length - 1 && h(f)) : h(f);
    }
  }), F = async (f) => {
    if (f.preventDefault(), !m) {
      const _ = await s.validateForm();
      if (Object.keys(_).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(_).reduce((V, Y) => ({ ...V, [Y]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(f);
  }, B = () => {
    N((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: d.map((f, _) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => N(_),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === _ ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: f })
      },
      f
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: C && r[C]?.map((f, _) => ne(f.hidden) || f.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ae[se(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    refid: y,
                    sqlOpsUrls: l,
                    field: f,
                    formik: s,
                    methods: x,
                    components: j,
                    setFieldOptions: p,
                    ...$[f.name] ? { optionsOverride: $[f.name] } : {}
                  },
                  f.name
                )
              },
              f?.name ?? `field-${_}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              v > 0 && /* @__PURE__ */ t.jsx("button", { onClick: B, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
                v + 1,
                " of ",
                d.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: d.map((f, _) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${_ === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              _
            )) })
          ] }) })
        ]
      },
      d[v]
    )
  ] });
}
function Ie({
  title: e,
  fields: r,
  data: o,
  onSubmit: h = (m) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  sqlOpsUrls: j = {},
  refid: l
}) {
  const m = Ce(r), [y, d] = D.useState({}), v = (p, g) => {
    d((S) => ({
      ...S,
      [p]: g
    }));
  }, { initialValues: N, validationSchema: $ } = D.useMemo(() => {
    const p = {}, g = {};
    return m.forEach((S) => {
      ee([S], p, g, o);
    }), {
      initialValues: p,
      validationSchema: g
    };
  }, [m, o]), A = re({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: L.object().shape($),
    onSubmit: (p) => {
      h(p);
    }
  });
  return D.useEffect(() => {
    A.validateForm();
  }, []), /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((p, g) => ne(p.hidden) || p.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(p.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: l,
            sqlOpsUrls: j,
            field: p,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...y[p.name] ? { optionsOverride: y[p.name] } : {}
          }
        )
      },
      p?.name ?? `field-${g}`
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
function Me({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: h = (y) => {
  },
  onCancel: n = () => {
  },
  methods: x = {},
  components: j = {},
  sqlOpsUrls: l = {},
  refid: m
}) {
  const [y, d] = D.useState({}), v = (p, g) => {
    d((S) => ({
      ...S,
      [p]: g
    }));
  }, { initialValues: N, validationSchema: $ } = D.useMemo(() => {
    const p = {}, g = {};
    return Object.values(r).flat().forEach((S) => {
      ee([S], p, g, o);
    }), {
      initialValues: p,
      validationSchema: g
    };
  }, [r, o]), A = re({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: L.object().shape($),
    onSubmit: (p) => {
      h(p);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([p, g], S) => /* @__PURE__ */ t.jsx(ke, { title: p, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((b, C) => ne(b.hidden) || b.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(b.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: m,
            sqlOpsUrls: l,
            components: j,
            field: b,
            formik: A,
            methods: x,
            setFieldOptions: v,
            ...y[b.name] ? { optionsOverride: y[b.name] } : {}
          },
          b.name
        )
      },
      b?.name ?? `field-${C}`
    )) }) }, p)) }),
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
}), ue = async (e) => (await G.get(
  e.baseURL + e.dbopsGetHash,
  { headers: J(e) }
)).data.refhash, he = async (e, r) => (await G.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: J(e) }
)).data.refid, Le = {
  async fetch(e, r) {
    const o = await ue(e), h = await he(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), n = await G.post(
      e.baseURL + e.dbopsFetch,
      { refid: h, datahash: o },
      { headers: J(e) }
    );
    return n.data?.data ?? n.data;
  },
  async create(e, r) {
    const o = await ue(e), h = await he(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await G.post(
      e.baseURL + e.dbopsCreate,
      { refid: h, fields: r.values, datahash: o },
      { headers: J(e) }
    )).data;
  },
  async update(e, r) {
    const o = await ue(e), h = await he(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await G.post(
      e.baseURL + e.dbopsUpdate,
      { refid: h, fields: r.values, datahash: o },
      { headers: J(e) }
    )).data;
  }
};
function Be({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: o = null,
  onCancel: h = () => {
  },
  components: n = {},
  callback: x = () => {
  },
  initialvalues: j = {}
}) {
  let l = Ee(e);
  const m = e.endPoints, y = e?.source?.refid, d = Oe(e?.fields ?? {}), [v, N] = D.useState(j), $ = D.useMemo(() => Ae(e.fields), [e.fields]);
  D.useEffect(() => {
    let g = !0;
    return (async () => {
      const b = e?.source ?? {};
      if (!b?.type) {
        g && N({});
        return;
      }
      if (b.type === "method") {
        const C = b.method, O = C ? r[C] : void 0;
        if (O)
          try {
            const s = await Promise.resolve(O());
            g && N(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), g && N({});
          }
        else
          g && N({});
      }
      if (b.type === "api" && m?.operation !== "create")
        try {
          const C = await G({
            method: b.method || "GET",
            url: b.url ?? "",
            data: b.body ?? {},
            params: b.params ?? {},
            headers: b.headers ?? {}
          });
          g && N(C.data ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), g && N({});
        }
      if (b.type === "sql" && b.refid && b.refid != "0" && m?.operation !== "create") {
        if (!m) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await Le.fetch(m, {
            source: {
              ...b,
              table: b.table,
              columns: b.columns,
              where: K(b.where, {
                refid: y
              })
            },
            fields: Re(e.fields)
          });
          g && N(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      g = !1;
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
  const A = async (g) => {
    const S = e?.source ?? {};
    let b = null;
    if ($.length > 0)
      try {
        b = await $e();
      } catch (O) {
        console.log("catch fetchGeolocation", O), b = null;
      }
    const C = {
      ...g,
      ...Object.fromEntries(
        $.map((O) => [O, b])
      )
    };
    if (S.type === "method") {
      const O = S.method, s = O ? r[O] : void 0;
      if (s)
        try {
          const F = await Promise.resolve(s(C));
          x?.(F);
        } catch (F) {
          x?.(F), console.error("Method execution failed:", F);
        }
    }
    if (S.type === "api")
      try {
        const O = await G({
          method: S.method || "POST",
          url: S.url,
          data: C ?? {},
          params: S.params ?? {},
          headers: S.headers ?? {}
        });
        x?.(O);
      } catch (O) {
        x?.(O), console.error("API fetch failed:", O);
      }
    if (S.type === "sql") {
      const O = e.endPoints;
      if (!O) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const s = await G({
          method: "GET",
          url: O.baseURL + O.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        let F = {
          ...S
        };
        S.where && (F = {
          ...S,
          where: K(S.where, {
            refid: y
          })
        });
        const B = await G({
          method: "POST",
          url: O.baseURL + O.dbopsGetRefId,
          data: {
            operation: O.operation,
            source: F,
            fields: e.fields,
            forcefill: e.forcefill,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        }), f = await G({
          method: "POST",
          url: O.baseURL + O[O.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: B.data.refid,
            fields: C,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${O?.accessToken}`
          }
        });
        x?.(f);
      } catch (s) {
        x?.(s), console.error("API fetch failed:", s);
      }
    }
  }, p = {
    accordion: /* @__PURE__ */ t.jsx(
      _e,
      {
        title: e?.title ?? "",
        groupedFields: d,
        data: v,
        onSubmit: A,
        onCancel: h,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: y
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: d,
        data: v,
        onSubmit: A,
        onCancel: h,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: y
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Fe,
      {
        title: e?.title ?? "",
        groupedFields: d,
        data: v,
        onSubmit: A,
        onCancel: h,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: m,
        refid: y
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: v,
        onSubmit: A,
        onCancel: h,
        methods: r,
        components: n,
        sqlOpsUrls: m,
        refid: y
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: p[l] ?? p.simple });
}
export {
  Be as LogiksForm
};
