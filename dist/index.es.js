import Y, { useState as H, useRef as me, useEffect as Q, useMemo as pe } from "react";
import k from "axios";
import * as M from "yup";
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
function ve() {
  if (xe) return X;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(n, u, i) {
    var S = null;
    if (i !== void 0 && (S = "" + i), u.key !== void 0 && (S = "" + u.key), "key" in u) {
      i = {};
      for (var w in u)
        w !== "key" && (i[w] = u[w]);
    } else i = u;
    return u = i.ref, {
      $$typeof: e,
      type: n,
      key: S,
      ref: u !== void 0 ? u : null,
      props: i
    };
  }
  return X.Fragment = r, X.jsx = l, X.jsxs = l, X;
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
function je() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === q ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case c:
          return "Fragment";
        case N:
          return "Profiler";
        case g:
          return "StrictMode";
        case T:
          return "Suspense";
        case _:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case C:
            return "Portal";
          case R:
            return (a.displayName || "Context") + ".Provider";
          case m:
            return (a._context.displayName || "Context") + ".Consumer";
          case s:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case I:
            return h = a.displayName || null, h !== null ? h : e(a.type) || "Memo";
          case f:
            h = a._payload, a = a._init;
            try {
              return e(a(h));
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
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var A = h.error, F = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return A.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), r(a);
      }
    }
    function n(a) {
      if (a === c) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === f)
        return "<...>";
      try {
        var h = e(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var a = L.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function S(a) {
      if (K.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function w(a, h) {
      function A() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: A,
        configurable: !0
      });
    }
    function d() {
      var a = e(this.type);
      return v[a] || (v[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function b(a, h, A, F, z, G, le, ie) {
      return A = G.ref, a = {
        $$typeof: O,
        type: a,
        key: h,
        props: G,
        _owner: z
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: d
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
    function y(a, h, A, F, z, G, le, ie) {
      var B = h.children;
      if (B !== void 0)
        if (F)
          if (o(B)) {
            for (F = 0; F < B.length; F++)
              j(B[F]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(B);
      if (K.call(h, "key")) {
        B = e(a);
        var W = Object.keys(h).filter(function(ye) {
          return ye !== "key";
        });
        F = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", V[B + F] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          B,
          W,
          B
        ), V[B + F] = !0);
      }
      if (B = null, A !== void 0 && (l(A), B = "" + A), S(h) && (l(h.key), B = "" + h.key), "key" in h) {
        A = {};
        for (var ce in h)
          ce !== "key" && (A[ce] = h[ce]);
      } else A = h;
      return B && w(
        A,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), b(
        a,
        B,
        G,
        z,
        u(),
        A,
        le,
        ie
      );
    }
    function j(a) {
      typeof a == "object" && a !== null && a.$$typeof === O && a._store && (a._store.validated = 1);
    }
    var p = Y, O = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), R = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), L = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, o = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var x, v = {}, D = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), P = E(n(i)), V = {};
    Z.Fragment = c, Z.jsx = function(a, h, A, F, z) {
      var G = 1e4 > L.recentlyCreatedOwnerStacks++;
      return y(
        a,
        h,
        A,
        !1,
        F,
        z,
        G ? Error("react-stack-top-frame") : D,
        G ? E(n(a)) : P
      );
    }, Z.jsxs = function(a, h, A, F, z) {
      var G = 1e4 > L.recentlyCreatedOwnerStacks++;
      return y(
        a,
        h,
        A,
        !0,
        F,
        z,
        G ? Error("react-stack-top-frame") : D,
        G ? E(n(a)) : P
      );
    };
  }()), Z;
}
var ge;
function Ne() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? te.exports = ve() : te.exports = je()), te.exports;
}
var t = Ne();
function we(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function Ee(e) {
  const r = {}, l = "General";
  return Object.entries(e).forEach(([n, u]) => {
    const i = u.group || l;
    r[i] || (r[i] = []);
    let S = { ...u, name: n };
    r[i].push(S);
  }), r;
}
function Se(e) {
  const r = {};
  return Object.keys(e).forEach((l) => {
    r[l] = {
      label: l,
      required: e[l].required ?? !1
    };
  }), r;
}
const ee = (e, r, l) => {
  e.forEach((n) => {
    const u = n?.name;
    if (!u) return;
    n?.default !== void 0 && n?.default !== null ? r[u] = n.default : n?.type === "checkbox" ? r[u] = n?.multiple === !0 ? [] : !1 : n?.type === "tags" ? r[u] = [] : u === "blocked" || u === "blacklist" ? r[u] = "false" : r[u] = n?.default ?? "";
    let i;
    n?.type === "checkbox" ? i = n?.multiple === !0 ? M.array().of(M.string()) : M.boolean() : n?.type === "tags" ? i = M.array().of(M.string()) : n?.type === "email" ? i = M.string().email("Invalid email format") : n?.type === "number" ? i = M.number().typeError("Must be a number") : n?.type === "date" ? i = M.date().typeError("Invalid date format") : n?.type === "json" ? i = M.string().test("is-json", "Invalid JSON format", (S) => {
      if (!S) return !0;
      try {
        return JSON.parse(S), !0;
      } catch {
        return !1;
      }
    }) : i = M.string(), n?.required && (i = i.required(
      n?.placeholder || n?.error_message || `${n?.label || u} is required`
    )), n?.validate?.regex && typeof n.validate.regex == "string" && (i = i.matches(
      new RegExp(n?.validate?.regex),
      n?.error_message || "Invalid input format"
    )), n?.validate && Object.entries(n.validate).forEach(([S, w]) => {
      switch (S) {
        case "email":
          w && (i = i.email("Invalid email format"));
          break;
        case "mobile":
          i = i.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          i = i.matches(
            new RegExp(w),
            `Must match pattern: ${w}`
          );
          break;
        case "date":
          i = M.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, b) => {
            if (typeof b == "string") {
              const y = b.replace(/-/g, "/"), [j, p, O] = y.split("/");
              if (j && p && O)
                return /* @__PURE__ */ new Date(`${O}-${p}-${j}`);
            }
            return d;
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
          i = M.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          i = M.number().typeError("Must be a decimal").transform((d, b) => {
            if (b == null || b === "") return;
            const y = Number(b);
            if (isNaN(y)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const j = Number(d);
              return Number.isInteger(j) ? Number(y.toFixed(j)) : y;
            }
            return y;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          i = i.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(w);
          isNaN(d) || (i = i.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(w);
          isNaN(d) || (i = i.max(d, `Maximum length is ${d}`));
          break;
        }
      }
    }), l[u] = i;
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
const ne = (e) => e === !0 || e === "true", U = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (l, n) => r[n] !== void 0 ? String(r[n]) : l
) : Array.isArray(e) ? e.map((l) => U(l, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([l, n]) => [
    U(l, r),
    U(n, r)
  ])
) : e, de = (e, r, l, n) => {
  const u = Array.isArray(l?.data?.data) ? l.data.data : Array.isArray(l?.data) ? l.data : l;
  if (!Array.isArray(u) || u.length === 0)
    return {};
  const i = n ?? (u[0] && typeof u[0] == "object" && "category" in u[0] ? "category" : void 0);
  if (!i) {
    const w = {};
    return u.forEach((d) => {
      d[e] != null && d[r] != null && (w[d[e]] = d[r]);
    }), w;
  }
  const S = {};
  return u.forEach((w) => {
    const d = w[i] ?? "Others", b = w[e], y = w[r];
    b == null || y == null || (S[d] || (S[d] = {}), S[d][b] = y);
  }), S;
}, Oe = (e, r) => {
  if (!e || r == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const n of Object.values(e))
    if (r in n)
      return n[r];
}, Re = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (l) => Object.entries(l)
) : [], fe = (e) => {
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
      (n, u) => {
        navigator.geolocation.getCurrentPosition(n, u, {
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
const Ae = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function oe({
  field: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: u,
  optionsOverride: i,
  setFieldOptions: S
}) {
  const [w, d] = H(!1), [b, y] = H(
    i ?? e.options ?? {}
  ), [j, p] = H(""), [O, C] = H(0), c = me(null), g = me(null), [N, m] = H(!1), R = (o) => {
    o.currentTarget.open || p("");
  };
  Q(() => {
    i && y(i);
  }, [i]), Q(() => {
    const o = (E) => {
      g.current && !g.current.contains(E.target) && (g.current.open = !1, p(""));
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, []);
  const s = e.name;
  Y.useEffect(() => {
    let o = !0;
    return (async () => {
      if (e?.options) {
        y(e.options);
        return;
      }
      const x = e?.source ?? {};
      if (x.type === "method") {
        const v = x.method, D = v ? l[v] : void 0;
        if (D)
          try {
            const P = await Promise.resolve(D());
            o && y(P ?? {});
          } catch (P) {
            console.error("Method execution failed:", P), o && y({});
          }
        else
          o && y({});
      }
      if (x.type === "api" && x.url)
        try {
          const v = await k({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), D = e.valueKey || "value", P = e.labelKey || "title", V = de(D, P, v, e.groupKey);
          o && y(V);
        } catch (v) {
          console.error("API execution failed:", v), o && y({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let v;
          if (e.type === "dataSelector")
            v = {
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
            v = {
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (v.where = u ? U(e.where, { refid: u }) : e.where);
          const D = await k({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: { query: v },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), P = await k({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: D.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), V = e.valueKey || "value", a = e.labelKey || "title", h = de(V, a, P, e.groupKey);
          o && y(h);
        } catch (v) {
          console.error("API fetch failed:", v);
        }
      }
    })(), () => {
      o = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    u
  ]);
  const T = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, _ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, I = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, f = (o) => o.icon ? /* @__PURE__ */ t.jsx("i", { className: o.icon }) : null, $ = pe(
    () => Re(b),
    [b]
  ), q = $.length, L = pe(() => j ? $.filter(
    ([, o]) => o.toLowerCase().includes(j.toLowerCase())
  ) : $, [j, $]), K = (o, E) => {
    if (g.current?.open === !0 || N === !0)
      if (o.key === "ArrowDown")
        o.preventDefault(), C(
          (x) => x + 1 < L.length ? x + 1 : 0
        );
      else if (o.key === "ArrowUp")
        o.preventDefault(), C(
          (x) => x - 1 >= 0 ? x - 1 : L.length - 1
        );
      else if (o.key === "Enter") {
        o.preventDefault();
        const [x] = L[O] || [];
        x && r.setFieldValue(e.name, E ? x : [...r.values[e.name], x]), g.current && (g.current.open = !1);
      } else o.key === "Escape" && (g.current.open = !1, p(""), m(!1));
  };
  switch (Q(() => {
    c.current?.querySelector(
      `[data-index="${O}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [O]), Q(() => {
    O >= L.length && C(0);
  }, [L, O]), Q(() => {
    const o = e.autocomplete, E = e.ajaxchain, x = o || E;
    if (!x || x === "off") return;
    const v = r.values[e.name];
    if (!v) return;
    (async () => {
      try {
        const P = x.src, V = U(P.where ?? {}, {
          refid: v
        });
        if (P.table && n) {
          const a = await k({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: {
              query: {
                ...P,
                table: P.table,
                cols: P.columns,
                where: V
              }
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), { data: h } = await k({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: a.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (o) {
            const A = x.target.split(",").map((z) => z.trim()), F = Array.isArray(h?.data) ? h?.data[0] : h?.data;
            if (!F) return;
            A.forEach((z) => {
              F[z] !== void 0 && r.setFieldValue(z, F[z]);
            });
          }
          if (E) {
            const A = e.valueKey || "value", F = e.labelKey || "title", z = de(A, F, h, e.groupKey);
            S?.(E.target, z);
          }
        }
      } catch (P) {
        console.error("Autocomplete fetch failed", P);
      }
    })();
  }, [r.values[e.name]]), e.type) {
    case "autocomplete": {
      const o = (x) => {
        const v = x.target.value;
        p(v), r.setFieldValue(s, v), m(!0);
      }, E = (x, v) => {
        v.preventDefault(), v.stopPropagation(), r.setFieldValue(s, x), m(!1);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${T} ${_}`,
            value: r.values[s],
            placeholder: e.placeholder || "Type to search...",
            onChange: o,
            onFocus: () => m(!0),
            onBlur: () => setTimeout(() => m(!1), 150),
            onKeyDown: (x) => K(x, !0)
          }
        ),
        N && /* @__PURE__ */ t.jsx("div", { ref: c, className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1", children: L.length > 0 ? L.map(([x, v], D) => /* @__PURE__ */ t.jsx(
          "div",
          {
            "data-index": D,
            className: `px-3 py-2 cursor-pointer text-sm 
    ${O === D ? "bg-gray-100" : "hover:bg-gray-100"}
  `,
            onMouseDown: (P) => E(x, P),
            children: v
          },
          D
        )) : /* @__PURE__ */ t.jsxs("div", { className: "px-3 py-2 text-sm text-gray-400 cursor-pointer", children: [
          'No matches — select to keep "',
          j,
          '"'
        ] }) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
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
              className: `${T} ${_} min-h-[120px] resize-none`,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod":
      return q > 10 ? /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: g,
            onKeyDown: (o) => K(o, !0),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? Oe(b, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: c, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: j,
                    onChange: (o) => {
                      p(o.target.value), C(0);
                    },
                    onKeyDown: (o) => K(o, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                L.length > 0 ? L.map(([o, E], x) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    "data-index": x,
                    onClick: (v) => {
                      v.preventDefault(), v.stopPropagation(), r.setFieldValue(s, o), g.current?.removeAttribute("open"), p(""), C(0);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === o ? "bg-indigo-50 text-indigo-600 font-medium" : O === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: E
                  },
                  o
                )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${T} ${_} appearance-none cursor-pointer pr-12`,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !fe(b) && Object.entries(b).map(([o, E]) => /* @__PURE__ */ t.jsx("option", { value: o, className: "py-2", children: E }, o)),
                fe(b) && Object.entries(b).map(([o, E]) => /* @__PURE__ */ t.jsx("optgroup", { label: o, children: Object.entries(E).map(([x, v]) => /* @__PURE__ */ t.jsx("option", { value: x, children: v }, x)) }, o))
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
        /* @__PURE__ */ t.jsx("div", { className: `flex ${q > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(b || {}).map(([o, E]) => /* @__PURE__ */ t.jsxs(
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
              E
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    case "checkbox": {
      if (q === 1) {
        const [o, E] = Object.entries(b || {})[0] || [s, e.label];
        return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex  space-x-2", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                id: s,
                type: "checkbox",
                name: s,
                checked: r.values[s] || !1,
                onChange: r.handleChange,
                onBlur: r.handleBlur,
                disabled: e.disabled,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ t.jsx("label", { htmlFor: s, className: "text-sm font-medium text-gray-700 cursor-pointer", children: E })
          ] }),
          r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
        ] });
      }
      return q > 1 && q <= 5 ? /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(b || {}).map(([o, E]) => /* @__PURE__ */ t.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  name: s,
                  value: o,
                  checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(o) : !1,
                  onChange: r.handleChange,
                  onBlur: r.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              E
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : q > 5 ? /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: "relative w-full",
            onToggle: R,
            ref: g,
            onKeyDown: (o) => K(o, !1),
            children: [
              /* @__PURE__ */ t.jsxs("summary", { className: "cursor-pointer select-none border border-gray-300 rounded-lg px-3 py-2 bg-white flex justify-between items-center", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s]?.length > 0 ? r.values[s].join(", ") : `Select ${e.label}` }),
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
              /* @__PURE__ */ t.jsxs("div", { ref: c, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: j,
                    onChange: (o) => {
                      p(o.target.value), C(0);
                    },
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0`
                  }
                ) }),
                L.length > 0 ? L.map(([o, E], x) => /* @__PURE__ */ t.jsxs(
                  "label",
                  {
                    htmlFor: `${s}-${o}`,
                    className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r.values[s] === o ? "bg-indigo-50 text-indigo-600 font-medium" : O === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ t.jsx(
                        "input",
                        {
                          id: `${s}-${o}`,
                          type: "checkbox",
                          name: s,
                          value: o,
                          checked: Array.isArray(r.values[s]) ? r.values[s]?.includes(o) : !1,
                          onChange: r.handleChange,
                          onBlur: r.handleBlur,
                          disabled: e.disabled,
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        }
                      ),
                      E
                    ]
                  },
                  o
                )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] }) : null;
    }
    case "tags": {
      const o = Array.isArray(r.values[s]) ? r.values[s] : [], E = Array.isArray(b) ? b : Object.entries(b || {}).map(([a, h]) => ({ value: a, label: h })), x = (a) => {
        a && !o.includes(a) && r.setFieldValue(s, [...o, a]);
      }, v = (a) => {
        (a.key === "Enter" || a.key === ",") && (a.preventDefault(), x(j), p(""));
      }, D = (a) => {
        r.setFieldValue(
          s,
          o.filter((h) => h !== a)
        );
      }, P = (a) => E.find((h) => h.value === a)?.label || a, V = () => /* @__PURE__ */ t.jsxs("svg", { className: "w-4 h-4 inline-block mr-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.59 13.41L11 3.83a2 2 0 00-2.83 0L2.41 9.59a2 2 0 000 2.82l9.59 9.59a2 2 0 002.83 0l6.75-6.75a2 2 0 000-2.83z" }),
        /* @__PURE__ */ t.jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" })
      ] });
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${T} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${s}-input`)?.focus(),
            children: [
              o.map((a) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ t.jsx(V, {}) }),
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: P(a) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${P(a)}`,
                        onClick: (h) => {
                          h.stopPropagation(), e.disabled || D(a);
                        },
                        onMouseDown: (h) => h.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                a
              )),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  id: `${s}-input`,
                  type: "text",
                  value: j,
                  onChange: (a) => p(a.target.value),
                  onKeyDown: v,
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
    case "file":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: f(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${T} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: s,
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json": {
      let o = r.values[s];
      if (typeof o == "object" && o !== null) {
        const v = JSON.stringify(o, null, 2);
        r.setFieldValue(s, v, !1), o = v;
      }
      const E = o || "", x = (v) => {
        r.setFieldValue(s, v.target.value);
      };
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: `${s}-json`,
              name: s,
              value: E,
              onChange: x,
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${T} ${_} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: I, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: f(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${T} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: r.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${w ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function $e({ title: e, children: r, isFirst: l }) {
  const [n, u] = H(l);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => u(!n),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${n ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function Ce({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (b) => {
  },
  onCancel: u = () => {
  },
  methods: i = {},
  components: S = {},
  sqlOpsUrls: w = {},
  refid: d
}) {
  const [b, y] = Y.useState({}), j = (c, g) => {
    y((N) => ({
      ...N,
      [c]: g
    }));
  }, p = {}, O = {};
  Object.entries(r).forEach(([c, g]) => {
    ee(g, p, O);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((c) => {
    c in p && (c === "tags" && typeof l[c] == "string" ? p[c] = l[c].split(",") : p[c] = l[c] ? l[c] : "");
  });
  const C = re({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: M.object().shape(O),
    onSubmit: (c) => {
      n(c);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([c, g], N) => /* @__PURE__ */ t.jsx($e, { title: c, isFirst: N === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((m, R) => ne(m.hidden) || m.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(m.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: d,
            sqlOpsUrls: w,
            components: S,
            field: m,
            formik: C,
            methods: i,
            setFieldOptions: j,
            ...b[m.name] ? { optionsOverride: b[m.name] } : {}
          },
          m.name
        )
      },
      m?.name ?? `field-${R}`
    )) }) }, c)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Pe({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (y) => {
  },
  onCancel: u = () => {
  },
  methods: i = {},
  components: S = {},
  sqlOpsUrls: w = {},
  widget: d,
  refid: b
}) {
  const y = Object.keys(r), [j, p] = Y.useState(0), [O, C] = Y.useState({}), c = (f, $) => {
    C((q) => ({
      ...q,
      [f]: $
    }));
  }, g = {}, N = {}, m = {};
  d ? Object.entries(r).forEach(([f, $]) => {
    const q = {};
    ee($, N, q), g[f] = q;
  }) : Object.entries(r).forEach(([f, $]) => {
    ee($, N, m);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((f) => {
    f in N && (f === "tags" && typeof l[f] == "string" ? N[f] = l[f].split(",") : N[f] = l[f] ? l[f] : "");
  });
  const R = y[j] ?? null, s = R && g[R] ? g[R] : {}, T = re({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: M.object().shape(d ? s : m),
    onSubmit: (f) => {
      d ? (j < y.length - 1 && p(($) => $ + 1), j === y.length - 1 && n(f)) : n(f);
    }
  }), _ = async (f) => {
    if (f.preventDefault(), !d) {
      const $ = await T.validateForm();
      if (Object.keys($).length > 0) {
        alert("Please fill all required fields before submitting."), T.setTouched(
          Object.keys($).reduce((q, L) => ({ ...q, [L]: !0 }), {})
        );
        return;
      }
    }
    T.handleSubmit(f);
  }, I = () => {
    p((f) => f > 0 ? f - 1 : f);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " max-w-full  m-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsx("div", { className: "relative bg-gray-100 rounded-t-lg px-1 pt-1  shadow-inner", children: /* @__PURE__ */ t.jsx("nav", { className: "relative flex", children: y.map((f, $) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => p($),
        className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${j === $ ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: f })
      },
      f
    )) }) }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: R && r[R]?.map((f, $) => ne(f.hidden) || f.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `col-span-12  ${ae[se(Number(f.width))] || "lg:col-span-4"}`,
                children: /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    refid: b,
                    sqlOpsUrls: w,
                    field: f,
                    formik: T,
                    methods: i,
                    components: S,
                    setFieldOptions: c,
                    ...O[f.name] ? { optionsOverride: O[f.name] } : {}
                  },
                  f.name
                )
              },
              f?.name ?? `field-${$}`
            )) }),
            /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${j > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
              j > 0 && /* @__PURE__ */ t.jsx("button", { onClick: I, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
              /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
                /* @__PURE__ */ t.jsx("button", { onClick: u, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
                /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d ? "Next" : "Save" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                j + 1,
                " of ",
                y.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: y.map((f, $) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${$ === j ? "bg-action w-6" : "bg-gray-300"}`
              },
              $
            )) })
          ] }) })
        ]
      },
      y[j]
    )
  ] });
}
function Fe({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (d) => {
  },
  onCancel: u = () => {
  },
  methods: i = {},
  sqlOpsUrls: S = {},
  refid: w
}) {
  const d = Object.values(r).flat(), [b, y] = Y.useState({}), j = (c, g) => {
    y((N) => ({
      ...N,
      [c]: g
    }));
  }, p = {}, O = {};
  Object.entries(r).forEach(([c, g]) => {
    ee(g, p, O);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((c) => {
    c in p && (c === "tags" && typeof l[c] == "string" ? p[c] = l[c].split(",") : p[c] = l[c] ? l[c] : "");
  });
  const C = re({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: M.object().shape(O),
    onSubmit: (c) => {
      n(c);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: d.map((c, g) => ne(c.hidden) || c.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(c.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: w,
            sqlOpsUrls: S,
            field: c,
            formik: C,
            methods: i,
            setFieldOptions: j,
            ...b[c.name] ? { optionsOverride: b[c.name] } : {}
          }
        )
      },
      c?.name ?? `field-${g}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function _e({ title: e, children: r }) {
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
function Ie({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (b) => {
  },
  onCancel: u = () => {
  },
  methods: i = {},
  components: S = {},
  sqlOpsUrls: w = {},
  refid: d
}) {
  const [b, y] = Y.useState({}), j = (c, g) => {
    y((N) => ({
      ...N,
      [c]: g
    }));
  }, p = {}, O = {};
  Object.entries(r).forEach(([c, g]) => {
    ee(g, p, O);
  }), l && Object.keys(l).length > 0 && Object.keys(l).forEach((c) => {
    c in p && (c === "tags" && typeof l[c] == "string" ? p[c] = l[c].split(",") : p[c] = l[c] ? l[c] : "");
  });
  const C = re({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: M.object().shape(O),
    onSubmit: (c) => {
      n(c);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: r && Object.entries(r).map(([c, g], N) => /* @__PURE__ */ t.jsx(_e, { title: c, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((m, R) => ne(m.hidden) || m.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ae[se(Number(m.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            refid: d,
            sqlOpsUrls: w,
            components: S,
            field: m,
            formik: C,
            methods: i,
            setFieldOptions: j,
            ...b[m.name] ? { optionsOverride: b[m.name] } : {}
          },
          m.name
        )
      },
      m?.name ?? `field-${R}`
    )) }) }, c)) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: u, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
const J = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ue = async (e) => (await k.get(
  e.baseURL + e.dbopsGetHash,
  { headers: J(e) }
)).data.refhash, he = async (e, r) => (await k.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: J(e) }
)).data.refid, Le = {
  async fetch(e, r) {
    const l = await ue(e), n = await he(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: l
    }), u = await k.post(
      e.baseURL + e.dbopsFetch,
      { refid: n, datahash: l },
      { headers: J(e) }
    );
    return u.data?.data ?? u.data;
  },
  async create(e, r) {
    const l = await ue(e), n = await he(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: l
    });
    return (await k.post(
      e.baseURL + e.dbopsCreate,
      { refid: n, fields: r.values, datahash: l },
      { headers: J(e) }
    )).data;
  },
  async update(e, r) {
    const l = await ue(e), n = await he(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: l
    });
    return (await k.post(
      e.baseURL + e.dbopsUpdate,
      { refid: n, fields: r.values, datahash: l },
      { headers: J(e) }
    )).data;
  }
};
function Be({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: r = {},
  userid: l = null,
  onCancel: n = () => {
  },
  components: u = {},
  callback: i = () => {
  },
  initialvalues: S = {}
}) {
  const w = we(e), d = e.endPoints, b = e?.source?.refid, y = Ee(e?.fields ?? {}), [j, p] = Y.useState(S), O = Y.useMemo(() => Ae(e.fields), [e.fields]);
  Y.useEffect(() => {
    let g = !0;
    return (async () => {
      const m = e?.source ?? {};
      if (!m?.type) {
        g && p({});
        return;
      }
      if (m.type === "method") {
        const R = m.method, s = R ? r[R] : void 0;
        if (s)
          try {
            const T = await Promise.resolve(s());
            g && p(T ?? {});
          } catch (T) {
            console.error("Method execution failed:", T), g && p({});
          }
        else
          g && p({});
      }
      if (m.type === "api" && d?.operation !== "create")
        try {
          const R = await k({
            method: m.method || "GET",
            url: m.url ?? "",
            data: m.body ?? {},
            params: m.params ?? {},
            headers: m.headers ?? {}
          });
          g && p(R.data ?? {});
        } catch (R) {
          console.error("API fetch failed:", R), g && p({});
        }
      if (m.type === "sql" && m.refid && m.refid != "0" && d?.operation !== "create") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const R = await Le.fetch(d, {
            source: {
              ...m,
              table: m.table,
              columns: m.columns,
              where: U(m.where, {
                refid: b
              })
            },
            fields: Se(e.fields)
          });
          g && p(R);
        } catch (R) {
          console.error("API fetch failed:", R);
        }
      }
    })(), () => {
      g = !1;
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
  const C = async (g) => {
    const N = e?.source ?? {};
    let m = null;
    if (O.length > 0)
      try {
        m = await Te();
      } catch (s) {
        console.log("catch fetchGeolocation", s), m = null;
      }
    const R = {
      ...g,
      ...Object.fromEntries(
        O.map((s) => [s, m])
      )
    };
    if (N.type === "method") {
      const s = N.method, T = s ? r[s] : void 0;
      if (T)
        try {
          const _ = await Promise.resolve(T(R));
          i?.(_);
        } catch (_) {
          i?.(_), console.error("Method execution failed:", _);
        }
    }
    if (N.type === "api")
      try {
        const s = await k({
          method: N.method || "POST",
          url: N.url,
          data: R ?? {},
          params: N.params ?? {},
          headers: N.headers ?? {}
        });
        i?.(s);
      } catch (s) {
        i?.(s), console.error("API fetch failed:", s);
      }
    if (N.type === "sql") {
      const s = e.endPoints;
      if (!s) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const T = await k({
          method: "GET",
          url: s.baseURL + s.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${s?.accessToken}`
          }
        });
        let _ = {
          ...N
        };
        N.where && (_ = {
          ...N,
          where: U(N.where, {
            refid: b
          })
        });
        const I = await k({
          method: "POST",
          url: s.baseURL + s.dbopsGetRefId,
          data: {
            operation: s.operation,
            source: _,
            fields: e.fields,
            forcefill: e.forcefill,
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${s?.accessToken}`
          }
        }), f = await k({
          method: "POST",
          url: s.baseURL + s[s.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: I.data.refid,
            fields: R,
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${s?.accessToken}`
          }
        });
        i?.(f);
      } catch (T) {
        i?.(T), console.error("API fetch failed:", T);
      }
    }
  }, c = {
    accordion: /* @__PURE__ */ t.jsx(
      Ce,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: j,
        onSubmit: C,
        onCancel: n,
        methods: r,
        components: u,
        sqlOpsUrls: d,
        refid: b
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      Ie,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: j,
        onSubmit: C,
        onCancel: n,
        methods: r,
        components: u,
        sqlOpsUrls: d,
        refid: b
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      Pe,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: j,
        onSubmit: C,
        onCancel: n,
        methods: r,
        components: u,
        widget: e?.widget,
        sqlOpsUrls: d,
        refid: b
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      Fe,
      {
        title: e?.title ?? "",
        groupedFields: y,
        data: j,
        onSubmit: C,
        onCancel: n,
        methods: r,
        components: u,
        sqlOpsUrls: d,
        refid: b
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: c[w] ?? c.simple });
}
export {
  Be as LogiksForm
};
