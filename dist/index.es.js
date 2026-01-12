import D, { useState as H, useRef as me, useEffect as X, useMemo as pe } from "react";
import z from "axios";
import * as k from "yup";
import { useFormik as ae } from "formik";
var re = { exports: {} }, Z = {};
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
  if (xe) return Z;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(d, n, b) {
    var N = null;
    if (b !== void 0 && (N = "" + b), n.key !== void 0 && (N = "" + n.key), "key" in n) {
      b = {};
      for (var l in n)
        l !== "key" && (b[l] = n[l]);
    } else b = n;
    return n = b.ref, {
      $$typeof: e,
      type: d,
      key: N,
      ref: n !== void 0 ? n : null,
      props: b
    };
  }
  return Z.Fragment = r, Z.jsx = o, Z.jsxs = o, Z;
}
var J = {};
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
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case x:
          return "Fragment";
        case O:
          return "Profiler";
        case f:
          return "StrictMode";
        case s:
          return "Suspense";
        case _:
          return "SuspenseList";
        case F:
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
          case R:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case B:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case y:
            m = a._payload, a = a._init;
            try {
              return e(a(m));
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
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var p = m.error, T = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), r(a);
      }
    }
    function d(a) {
      if (a === x) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === y)
        return "<...>";
      try {
        var m = e(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function b() {
      return Error("react-stack-top-frame");
    }
    function N(a) {
      if (I.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, m) {
      function p() {
        E || (E = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: p,
        configurable: !0
      });
    }
    function h() {
      var a = e(this.type);
      return c[a] || (c[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, m, p, T, V, M, U, ie) {
      return p = M.ref, a = {
        $$typeof: $,
        type: a,
        key: m,
        props: M,
        _owner: V
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: h
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
        value: U
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, m, p, T, V, M, U, ie) {
      var L = m.children;
      if (L !== void 0)
        if (T)
          if (Y(L)) {
            for (T = 0; T < L.length; T++)
              j(L[T]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(L);
      if (I.call(m, "key")) {
        L = e(a);
        var W = Object.keys(m).filter(function(je) {
          return je !== "key";
        });
        T = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", P[L + T] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), P[L + T] = !0);
      }
      if (L = null, p !== void 0 && (o(p), L = "" + p), N(m) && (o(m.key), L = "" + m.key), "key" in m) {
        p = {};
        for (var ce in m)
          ce !== "key" && (p[ce] = m[ce]);
      } else p = m;
      return L && l(
        p,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        L,
        M,
        V,
        n(),
        p,
        U,
        ie
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === $ && a._store && (a._store.validated = 1);
    }
    var w = D, $ = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), C = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), G = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, Y = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var E, c = {}, i = w["react-stack-bottom-frame"].bind(
      w,
      b
    )(), S = Q(d(b)), P = {};
    J.Fragment = x, J.jsx = function(a, m, p, T, V) {
      var M = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        a,
        m,
        p,
        !1,
        T,
        V,
        M ? Error("react-stack-top-frame") : i,
        M ? Q(d(a)) : S
      );
    }, J.jsxs = function(a, m, p, T, V) {
      var M = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        a,
        m,
        p,
        !0,
        T,
        V,
        M ? Error("react-stack-top-frame") : i,
        M ? Q(d(a)) : S
      );
    };
  }()), J;
}
var ge;
function Se() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? re.exports = Ne() : re.exports = we()), re.exports;
}
var t = Se();
function Ee(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((d) => d.group) ? "tab" : "simple";
}
function Oe(e, r = "Info") {
  const o = {};
  let d = !1;
  if (Object.values(e).forEach((b) => {
    b.group && (d = !0);
  }), !d) return {};
  const n = [];
  return Object.entries(e).forEach(([b, N]) => {
    const l = { ...N, name: b };
    if (N.group) {
      const h = N.group;
      o[h] || (o[h] = []), o[h].push(l);
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
const te = (e, r, o, d) => {
  e.forEach((n) => {
    const b = n?.name;
    if (!b) return;
    let N = d?.[b];
    N == null && (N = n.default), n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? r[b] = Array.isArray(N) ? N : typeof N == "string" ? N.split(",").map((h) => h.trim()).filter(Boolean) : [] : n.type === "json" ? r[b] = typeof N == "object" && N !== null ? JSON.stringify(N, null, 2) : N ?? "" : n.type === "date" ? r[b] = typeof N == "string" ? N.slice(0, 10) : "" : b === "blocked" || b === "blacklist" ? r[b] = String(N ?? "false") : r[b] = N ?? "";
    let l;
    n.type === "file" ? l = n.multiple ? k.array().of(k.mixed()) : k.mixed() : n.multiple === !0 || n.type === "checkbox" || n.type === "tags" ? l = k.array().of(k.string()) : n.type === "email" ? l = k.string().email("Invalid email") : n.type === "number" ? l = k.number().typeError("Must be a number") : n.type === "date" ? l = k.string().matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date"
    ) : n.type === "json" ? l = k.string().test("json", "Invalid JSON", (h) => {
      if (!h) return !0;
      try {
        return JSON.parse(h), !0;
      } catch {
        return !1;
      }
    }) : l = k.string(), n.required && (l = l.required(
      n.error_message || `${n.label || b} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (l = l.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([h, v]) => {
      switch (h) {
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
          l = k.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((u, j) => {
            if (typeof j == "string") {
              const w = j.replace(/-/g, "/"), [$, A, x] = w.split("/");
              if ($ && A && x)
                return /* @__PURE__ */ new Date(`${x}-${A}-${$}`);
            }
            return u;
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
          l = k.number().typeError("Must be a decimal").transform((u, j) => {
            if (j == null || j === "") return;
            const w = Number(j);
            if (isNaN(w)) return u;
            if (typeof u == "number" && !isNaN(u)) {
              const $ = Number(u);
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
            (u) => u && u.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (u) => u && u.toLowerCase()
          );
          break;
        case "length-min": {
          const u = Number(v);
          isNaN(u) || (l = l.min(u, `Minimum length is ${u}`));
          break;
        }
        case "length-max": {
          const u = Number(v);
          isNaN(u) || (l = l.max(u, `Maximum length is ${u}`));
          break;
        }
      }
    }), o[b] = l;
  });
}, se = {
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
function ne(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const oe = (e) => e === !0 || e === "true", K = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (o, d) => r[d] !== void 0 ? String(r[d]) : o
) : Array.isArray(e) ? e.map((o) => K(o, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([o, d]) => [
    K(o, r),
    K(d, r)
  ])
) : e, de = (e, r, o, d) => {
  const n = Array.isArray(o?.data?.data) ? o.data.data : Array.isArray(o?.data) ? o.data : o;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const b = d ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!b) {
    const l = {};
    return n.forEach((h) => {
      h[e] != null && h[r] != null && (l[h[e]] = h[r]);
    }), l;
  }
  const N = {};
  return n.forEach((l) => {
    const h = l[b] ?? "Others", v = l[e], u = l[r];
    v == null || u == null || (N[h] || (N[h] = {}), N[h][v] = u);
  }), N;
}, fe = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const d of Object.values(e))
    if (r in d)
      return d[r];
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
async function ve(e, r) {
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
function le({
  field: e,
  formik: r,
  methods: o = {},
  sqlOpsUrls: d,
  refid: n,
  optionsOverride: b,
  setFieldOptions: N
}) {
  const [l, h] = H(!1), [v, u] = H(
    b ?? e.options ?? {}
  ), [j, w] = H(""), [$, A] = H(0), x = me(null), f = me(null), [O, g] = H(!1), C = D.useRef(j);
  D.useEffect(() => {
    C.current = j;
  }, [j]);
  const R = (E) => {
    E.currentTarget.open || w("");
  };
  X(() => {
    b && u(b);
  }, [b]), X(() => {
    const E = (c) => {
      f.current && !f.current.contains(c.target) && (f.current.open = !1, w(""));
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
        u(e.options);
        return;
      }
      const i = e?.source ?? {};
      if (i.type === "method") {
        const S = i.method, P = S ? o[S] : void 0;
        if (P)
          try {
            const a = await Promise.resolve(P());
            E && u(a ?? {});
          } catch (a) {
            console.error("Method execution failed:", a), E && u({});
          }
        else
          E && u({});
      }
      if (i.type === "api" && i.url)
        try {
          const S = await z({
            method: i.method || "GET",
            url: i.url,
            data: i.body ?? {},
            params: i.params ?? {},
            headers: i.headers ?? {}
          }), P = e.valueKey || "value", a = e.labelKey || "title", m = de(P, a, S, e.groupKey);
          E && u(m);
        } catch (S) {
          console.error("API execution failed:", S), E && u({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let S;
          if (e.type === "dataSelector")
            S = {
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
            S = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (S.where = n ? K(e.where, { refid: n }) : e.where);
          const P = await ve(d, S), a = e.valueKey || "value", m = e.labelKey || "title", p = de(a, m, P, e.groupKey);
          E && u(p);
        } catch (S) {
          console.error("API fetch failed:", S);
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
  const _ = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, B = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, y = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, F = (E) => E.icon ? /* @__PURE__ */ t.jsx("i", { className: E.icon }) : null, q = pe(
    () => Te(v),
    [v]
  ), G = q.length, I = pe(() => j ? q.filter(
    ([, E]) => E.toLowerCase().includes(j.toLowerCase())
  ) : q, [j, q]), Y = (E, c) => {
    if (f.current?.open === !0 || O === !0)
      if (E.key === "ArrowDown")
        E.preventDefault(), A(
          (i) => i + 1 < I.length ? i + 1 : 0
        );
      else if (E.key === "ArrowUp")
        E.preventDefault(), A(
          (i) => i - 1 >= 0 ? i - 1 : I.length - 1
        );
      else if (E.key === "Enter") {
        E.preventDefault();
        const [i] = I[$] || [];
        i && r.setFieldValue(e.name, c ? i : [...r.values[e.name], i]), f.current && (f.current.open = !1);
      } else E.key === "Escape" && (f.current.open = !1, w(""), g(!1));
  };
  X(() => {
    x.current?.querySelector(
      `[data-index="${$}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [$]), X(() => {
    $ >= I.length && A(0);
  }, [I, $]), X(() => {
    const E = e.autocomplete, c = e.ajaxchain, i = E || c;
    if (!i || i === "off") return;
    const S = r.values[e.name];
    if (!S) return;
    (async () => {
      try {
        const a = i.src, m = K(a.where ?? {}, {
          refid: S
        });
        if (a.table && d) {
          let p = {
            ...a,
            table: a.table,
            cols: a.columns,
            where: m
          };
          const { data: T } = await ve(d, p);
          if (E) {
            const V = i.target.split(",").map((U) => U.trim()), M = Array.isArray(T?.data) ? T?.data[0] : T?.data;
            if (!M) return;
            V.forEach((U) => {
              M[U] !== void 0 && r.setFieldValue(U, M[U]);
            });
          }
          if (c) {
            const V = e.valueKey || "value", M = e.labelKey || "title", U = de(V, M, T, e.groupKey);
            N?.(c.target, U);
          }
        }
      } catch (a) {
        console.error("Autocomplete fetch failed", a);
      }
    })();
  }, [r.values[e.name]]);
  const Q = async (E) => {
    if (E.length === 0) {
      console.error("No file");
      return;
    }
    const c = d?.baseURL + d?.uploadURL;
    if (!c) {
      console.error("No Upload URL please ");
      return;
    }
    const i = e.multiple === !0;
    try {
      const S = await Promise.all(
        Array.from(E).map(async (P) => {
          const a = new FormData();
          return a.append("file", P), (await z({
            method: "POST",
            url: c,
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
        i ? S.map((P) => P.path) : S[0]?.path
      );
    } catch (S) {
      console.error("File upload failed", S), r.setFieldError(s, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const c = r.values[s] ?? "", i = O ? j : fe(v, c) ?? "", S = (a) => {
        w(a.target.value), g(!0), A(0);
      }, P = (a) => {
        r.setFieldValue(s, a), w(""), g(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${_} ${B}`,
            value: i,
            placeholder: e.placeholder || "Type to search...",
            onChange: S,
            onFocus: () => g(!0),
            onBlur: () => setTimeout(() => g(!1), 150),
            onKeyDown: (a) => Y(a, !0),
            disabled: e.disabled
          }
        ),
        O && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: x,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: I.length > 0 ? I.map(([a, m], p) => /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-index": p,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${$ === p ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => P(a),
                children: m
              },
              a
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: "No matches" })
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              className: `${_} ${B} min-h-[120px] resize-none`,
              onFocus: () => h(!0),
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
        const c = r.values[s];
        return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs("label", { className: y, children: [
            e.label,
            e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs(
            "details",
            {
              className: "relative w-full",
              onToggle: R,
              ref: f,
              onKeyDown: (i) => Y(i, !1),
              children: [
                /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: c?.length > 0 ? c.join(", ") : `Select ${e.label}` }),
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
                      value: j,
                      onChange: (i) => {
                        w(i.target.value), A(0);
                      },
                      placeholder: "Search...",
                      className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
                    }
                  ) }),
                  I.length > 0 ? I.map(([i, S], P) => /* @__PURE__ */ t.jsxs(
                    "label",
                    {
                      htmlFor: `${s}-${i}`,
                      className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(i) ? "bg-indigo-50 text-indigo-600 font-medium" : $ === P ? "bg-gray-100" : "hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            id: `${s}-${i}`,
                            type: "checkbox",
                            checked: c?.includes(i),
                            onChange: (a) => {
                              const m = a.target.checked ? [...c, i] : c?.filter((p) => p !== i);
                              r.setFieldValue(s, m);
                            },
                            onBlur: r.handleBlur,
                            disabled: e.disabled,
                            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          }
                        ),
                        S
                      ]
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
      return s === "category" && console.log("formik.values[key]", r.values[s]), /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: f,
            onKeyDown: (c) => Y(c, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? fe(v, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
                    value: j,
                    onChange: (c) => {
                      w(c.target.value), A(0);
                    },
                    onKeyDown: (c) => Y(c, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                I.length > 0 ? I.map(([c, i], S) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": S,
                    onClick: (P) => {
                      P.preventDefault(), P.stopPropagation(), r.setFieldValue(s, c), f.current?.removeAttribute("open"), w(""), A(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === c ? "bg-indigo-50 text-indigo-600 font-medium" : $ === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: i
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
    case "select":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${_} ${B} appearance-none cursor-pointer pr-12`,
              onFocus: () => h(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !ye(v) && Object.entries(v).map(([c, i]) => /* @__PURE__ */ t.jsx("option", { value: c, className: "py-2", children: i }, c)),
                ye(v) && Object.entries(v).map(([c, i]) => /* @__PURE__ */ t.jsx("optgroup", { label: c, children: Object.entries(i).map(([S, P]) => /* @__PURE__ */ t.jsx("option", { value: S, children: P }, S)) }, c))
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
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${G > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(v || {}).map(([c, i]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            htmlFor: `${s}-${c}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-${c}`,
                  type: "radio",
                  name: s,
                  checked: r.values[s] === c,
                  value: c,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              i
            ]
          },
          c
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      const c = r.values[s];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(v || {}).map(([i, S]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: c.includes(i),
                  onChange: (P) => {
                    const a = P.target.checked ? [...c, i] : c.filter((m) => m !== i);
                    r.setFieldValue(s, a);
                  },
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              S
            ]
          },
          i
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const c = r.values[s], i = j.trim(), S = Array.isArray(v) ? v : Object.entries(v || {}).map(([p, T]) => ({ value: p, label: T })), P = (p) => {
        p && !c.includes(p) && (r.setFieldValue(s, [...c, p]), w(""));
      }, a = (p) => {
        r.setFieldValue(
          s,
          c.filter((T) => T !== p)
        );
      }, m = (p) => S.find((T) => T.value === p)?.label ?? p;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${_} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              c.map((p) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: m(p) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (T) => {
                          T.stopPropagation(), e.disabled || a(p);
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
                  id: `${s}-input`,
                  type: "text",
                  value: j,
                  onChange: (p) => w(p.target.value),
                  onKeyDown: (p) => {
                    (p.key === "Enter" || p.key === ",") && (p.preventDefault(), P(i));
                  },
                  placeholder: c.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const E = e.multiple === !0;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type,
              className: `${_} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: s,
              multiple: E,
              onChange: (c) => {
                const i = c.currentTarget.files;
                i && Q(i);
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
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
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
              onChange: (c) => r.setFieldValue(s, c.target.value),
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${_} ${B} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
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
              className: `${_} ${B} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ t.jsxs("label", { className: y, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: F(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${_} ${B} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
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
  const [d, n] = H(o);
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
function Fe({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: d = (v) => {
  },
  onCancel: n = () => {
  },
  methods: b = {},
  components: N = {},
  sqlOpsUrls: l = {},
  refid: h
}) {
  const [v, u] = D.useState({}), j = (x, f) => {
    u((O) => ({
      ...O,
      [x]: f
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const x = {}, f = {};
    return Object.values(r).flat().forEach((O) => {
      te([O], x, f, o);
    }), {
      initialValues: x,
      validationSchema: f
    };
  }, [r, o]), A = ae({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (x) => {
      d(x);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([x, f], O) => /* @__PURE__ */ t.jsx(Pe, { title: x, isFirst: O === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((g, C) => oe(g.hidden) || g.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${se[ne(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          le,
          {
            refid: h,
            sqlOpsUrls: l,
            components: N,
            field: g,
            formik: A,
            methods: b,
            setFieldOptions: j,
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
function _e({
  title: e,
  groupedFields: r,
  data: o,
  onSubmit: d = (u) => {
  },
  onCancel: n = () => {
  },
  methods: b = {},
  components: N = {},
  sqlOpsUrls: l = {},
  widget: h,
  refid: v
}) {
  const u = Object.keys(r), [j, w] = D.useState(0), [$, A] = D.useState({});
  console.log("groupNames", u);
  const x = (y, F) => {
    A((q) => ({
      ...q,
      [y]: F
    }));
  }, { initialValues: f, validationSchema: O, stepperSchemas: g } = D.useMemo(() => {
    const y = {}, F = {}, q = {};
    return h ? Object.entries(r).forEach(([G, I]) => {
      const Y = {};
      te(I, y, Y, o), q[G] = Y;
    }) : Object.entries(r).forEach(([G, I]) => {
      te(I, y, F, o);
    }), {
      initialValues: y,
      validationSchema: F,
      stepperSchemas: q
    };
  }, [r, o, h]), C = u[j] ?? null, R = h && C ? g[C] ?? {} : O, s = ae({
    initialValues: f,
    enableReinitialize: !0,
    validationSchema: k.object().shape(R),
    onSubmit: (y) => {
      h ? (j < u.length - 1 && w((F) => F + 1), j === u.length - 1 && d(y)) : d(y);
    }
  }), _ = async (y) => {
    if (y.preventDefault(), !h) {
      const F = await s.validateForm();
      if (Object.keys(F).length > 0) {
        alert("Please fill all required fields before submitting."), s.setTouched(
          Object.keys(F).reduce((q, G) => ({ ...q, [G]: !0 }), {})
        );
        return;
      }
    }
    s.handleSubmit(y);
  }, B = () => {
    w((y) => y > 0 ? y - 1 : y);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: u.map((y, F) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(F),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${j === F ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: y })
      },
      y
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: C && r[C]?.map((y, F) => oe(y.hidden) || y.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${se[ne(Number(y.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  le,
                  {
                    refid: v,
                    sqlOpsUrls: l,
                    field: y,
                    formik: s,
                    methods: b,
                    components: N,
                    setFieldOptions: x,
                    ...$[y.name] ? { optionsOverride: $[y.name] } : {}
                  },
                  y.name
                )
              },
              y?.name ?? `field-${F}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${j > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              j > 0 && /* @__PURE__ */ t.jsx("button", { onClick: B, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: n, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: h ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                j + 1,
                " of ",
                u.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: u.map((y, F) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${F === j ? "bg-action w-6" : "bg-gray-300"}`
              },
              F
            )) })
          ] }) })
        ]
      },
      u[j]
    )
  ] });
}
function Ie({
  title: e,
  fields: r,
  data: o,
  onSubmit: d = (h) => {
  },
  onCancel: n = () => {
  },
  methods: b = {},
  sqlOpsUrls: N = {},
  refid: l
}) {
  const h = Ce(r), [v, u] = D.useState({}), j = (x, f) => {
    u((O) => ({
      ...O,
      [x]: f
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const x = {}, f = {};
    return h.forEach((O) => {
      te([O], x, f, o);
    }), {
      initialValues: x,
      validationSchema: f
    };
  }, [h, o]), A = ae({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (x) => {
      d(x);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((x, f) => oe(x.hidden) || x.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${se[ne(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          le,
          {
            refid: l,
            sqlOpsUrls: N,
            field: x,
            formik: A,
            methods: b,
            setFieldOptions: j,
            ...v[x.name] ? { optionsOverride: v[x.name] } : {}
          }
        )
      },
      x?.name ?? `field-${f}`
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
  onSubmit: d = (v) => {
  },
  onCancel: n = () => {
  },
  methods: b = {},
  components: N = {},
  sqlOpsUrls: l = {},
  refid: h
}) {
  const [v, u] = D.useState({}), j = (x, f) => {
    u((O) => ({
      ...O,
      [x]: f
    }));
  }, { initialValues: w, validationSchema: $ } = D.useMemo(() => {
    const x = {}, f = {};
    return Object.values(r).flat().forEach((O) => {
      te([O], x, f, o);
    }), {
      initialValues: x,
      validationSchema: f
    };
  }, [r, o]), A = ae({
    initialValues: w,
    enableReinitialize: !0,
    validationSchema: k.object().shape($),
    onSubmit: (x) => {
      d(x);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([x, f], O) => /* @__PURE__ */ t.jsx(ke, { title: x, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: f.map((g, C) => oe(g.hidden) || g.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${se[ne(Number(g.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          le,
          {
            refid: h,
            sqlOpsUrls: l,
            components: N,
            field: g,
            formik: A,
            methods: b,
            setFieldOptions: j,
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
const ee = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ue = async (e) => (await z.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ee(e) }
)).data.refhash, he = async (e, r) => (await z.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ee(e) }
)).data.refid, Le = {
  async fetch(e, r) {
    const o = await ue(e), d = await he(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: o
    }), n = await z.post(
      e.baseURL + e.dbopsFetch,
      { refid: d, datahash: o },
      { headers: ee(e) }
    );
    return n.data?.data ?? n.data;
  },
  async create(e, r) {
    const o = await ue(e), d = await he(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await z.post(
      e.baseURL + e.dbopsCreate,
      { refid: d, fields: r.values, datahash: o },
      { headers: ee(e) }
    )).data;
  },
  async update(e, r) {
    const o = await ue(e), d = await he(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: o
    });
    return (await z.post(
      e.baseURL + e.dbopsUpdate,
      { refid: d, fields: r.values, datahash: o },
      { headers: ee(e) }
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
  callback: b = () => {
  },
  initialvalues: N = {}
}) {
  let l = Ee(e);
  const h = e.endPoints, v = e?.source?.refid, u = Oe(e?.fields ?? {}), [j, w] = D.useState(N), $ = D.useMemo(() => Ae(e.fields), [e.fields]);
  D.useEffect(() => {
    let f = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (!g?.type) {
        f && w({});
        return;
      }
      if (g.type === "method") {
        const C = g.method, R = C ? r[C] : void 0;
        if (R)
          try {
            const s = await Promise.resolve(R());
            f && w(s ?? {});
          } catch (s) {
            console.error("Method execution failed:", s), f && w({});
          }
        else
          f && w({});
      }
      if (g.type === "api" && h?.operation !== "create")
        try {
          const C = await z({
            method: g.method || "GET",
            url: g.url ?? "",
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          });
          f && w(C.data ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), f && w({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0" && h?.operation !== "create") {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await Le.fetch(h, {
            source: {
              ...g,
              table: g.table,
              columns: g.columns,
              where: K(g.where, {
                refid: v
              })
            },
            fields: Re(e.fields)
          });
          f && w(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      f = !1;
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
  const A = async (f) => {
    const O = e?.source ?? {};
    let g = null;
    if ($.length > 0)
      try {
        g = await $e();
      } catch (R) {
        console.log("catch fetchGeolocation", R), g = null;
      }
    const C = {
      ...f,
      ...Object.fromEntries(
        $.map((R) => [R, g])
      )
    };
    if (O.type === "method") {
      const R = O.method, s = R ? r[R] : void 0;
      if (s)
        try {
          const _ = await Promise.resolve(s(C));
          b?.(_);
        } catch (_) {
          b?.(_), console.error("Method execution failed:", _);
        }
    }
    if (O.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const R = await z({
          method: O.method || "POST",
          url: h.baseURL + O.endpoint,
          data: C ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        b?.(R);
      } catch (R) {
        b?.(R), console.error("API fetch failed:", R);
      }
    }
    if (O.type === "sql") {
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
        let _ = {
          ...O
        };
        O.where && (_ = {
          ...O,
          where: K(O.where, {
            refid: v
          })
        });
        const B = await z({
          method: "POST",
          url: R.baseURL + R.dbopsGetRefId,
          data: {
            operation: R.operation,
            source: _,
            fields: e.fields,
            forcefill: e.forcefill,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        }), y = await z({
          method: "POST",
          url: R.baseURL + R[R.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: B.data.refid,
            fields: C,
            datahash: s.data.refhash
          },
          headers: {
            Authorization: `Bearer ${R?.accessToken}`
          }
        });
        b?.(y);
      } catch (s) {
        b?.(s), console.error("API fetch failed:", s);
      }
    }
  }, x = {
    accordion: /* @__PURE__ */ t.jsx(
      Fe,
      {
        title: e?.title ?? "",
        groupedFields: u,
        data: j,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: h,
        refid: v
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      Me,
      {
        title: e?.title ?? "",
        groupedFields: u,
        data: j,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: h,
        refid: v
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      _e,
      {
        title: e?.title ?? "",
        groupedFields: u,
        data: j,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        widget: e?.widget,
        sqlOpsUrls: h,
        refid: v
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: j,
        onSubmit: A,
        onCancel: d,
        methods: r,
        components: n,
        sqlOpsUrls: h,
        refid: v
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: x[l] ?? x.simple });
}
export {
  qe as LogiksForm
};
