import Y, { useState as Z, useRef as se, useEffect as Q, useMemo as je } from "react";
import B from "axios";
import * as V from "yup";
import { useFormik as xe } from "formik";
var me = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function De() {
  if (we) return ne;
  we = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(n, m, c) {
    var y = null;
    if (c !== void 0 && (y = "" + c), m.key !== void 0 && (y = "" + m.key), "key" in m) {
      c = {};
      for (var d in m)
        d !== "key" && (c[d] = m[d]);
    } else c = m;
    return m = c.ref, {
      $$typeof: e,
      type: n,
      key: y,
      ref: m !== void 0 ? m : null,
      props: c
    };
  }
  return ne.Fragment = r, ne.jsx = l, ne.jsxs = l, ne;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ve() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === P ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case I:
          return "Fragment";
        case R:
          return "Profiler";
        case C:
          return "StrictMode";
        case w:
          return "Suspense";
        case A:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case v:
            return "Portal";
          case g:
            return (a.displayName || "Context") + ".Provider";
          case i:
            return (a._context.displayName || "Context") + ".Consumer";
          case b:
            var o = a.render;
            return a = a.displayName, a || (a = o.displayName || o.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case z:
            return o = a.displayName || null, o !== null ? o : e(a.type) || "Memo";
          case L:
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
        var x = o.error, j = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return x.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), r(a);
      }
    }
    function n(a) {
      if (a === I) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === L)
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
    function c() {
      return Error("react-stack-top-frame");
    }
    function y(a) {
      if (O.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, o) {
      function x() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: x,
        configurable: !0
      });
    }
    function h() {
      var a = e(this.type);
      return K[a] || (K[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function u(a, o, x, j, T, M, f, S) {
      return x = M.ref, a = {
        $$typeof: N,
        type: a,
        key: o,
        props: M,
        _owner: T
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: f
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function $(a, o, x, j, T, M, f, S) {
      var F = o.children;
      if (F !== void 0)
        if (j)
          if (H(F)) {
            for (j = 0; j < F.length; j++)
              p(F[j]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(F);
      if (O.call(o, "key")) {
        F = e(a);
        var k = Object.keys(o).filter(function(W) {
          return W !== "key";
        });
        j = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", ee[F + j] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          F,
          k,
          F
        ), ee[F + j] = !0);
      }
      if (F = null, x !== void 0 && (l(x), F = "" + x), y(o) && (l(o.key), F = "" + o.key), "key" in o) {
        x = {};
        for (var G in o)
          G !== "key" && (x[G] = o[G]);
      } else x = o;
      return F && d(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), u(
        a,
        F,
        M,
        T,
        m(),
        x,
        f,
        S
      );
    }
    function p(a) {
      typeof a == "object" && a !== null && a.$$typeof === N && a._store && (a._store.validated = 1);
    }
    var E = Y, N = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), g = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), s = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, H = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var q, K = {}, X = E["react-stack-bottom-frame"].bind(
      E,
      c
    )(), U = D(n(c)), ee = {};
    oe.Fragment = I, oe.jsx = function(a, o, x, j, T) {
      var M = 1e4 > s.recentlyCreatedOwnerStacks++;
      return $(
        a,
        o,
        x,
        !1,
        j,
        T,
        M ? Error("react-stack-top-frame") : X,
        M ? D(n(a)) : U
      );
    }, oe.jsxs = function(a, o, x, j, T) {
      var M = 1e4 > s.recentlyCreatedOwnerStacks++;
      return $(
        a,
        o,
        x,
        !0,
        j,
        T,
        M ? Error("react-stack-top-frame") : X,
        M ? D(n(a)) : U
      );
    };
  }()), oe;
}
var Se;
function Be() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? me.exports = De() : me.exports = Ve()), me.exports;
}
var t = Be();
const Ke = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Ge = ["mp4", "webm", "ogg"], qe = ["txt", "json", "csv"], Ye = ["pdf"];
function We(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function He(e, r = "create", l = "Info") {
  const n = {};
  let m = !1;
  if (Object.values(e).forEach((y) => {
    y.group && (m = !0);
  }), !m) return {};
  const c = [];
  return Object.entries(e).forEach(([y, d]) => {
    if (d.vmode === "edit" && r === "create") return;
    const h = { ...d, name: y };
    if (d.group) {
      const u = d.group;
      n[u] || (n[u] = []), n[u].push(h);
    } else
      c.push(h);
  }), c.length > 0 ? {
    [l]: c,
    ...n
  } : n;
}
function Ee(e, r = "create") {
  const l = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && r === "create" || (l[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), l;
}
const ce = (e, r, l, n, m, c) => {
  const y = c === "create" && m ? Oe(m) : {};
  e.forEach((d) => {
    const h = d?.name;
    if (!h) return;
    let u = n?.[h];
    const $ = c === "create" && m ? Ie(d) : null;
    c === "create" && $ && y[$] !== void 0 && u == null && (u = y[$]), u == null && (u = d.default), d.multiple === !0 || d.type === "checkbox" || d.type === "tags" ? r[h] = Array.isArray(u) ? u : typeof u == "string" ? u.split(",").map((E) => E.trim()).filter(Boolean) : [] : d.type === "json" ? r[h] = typeof u == "object" && u !== null ? JSON.stringify(u, null, 2) : u ?? "" : d.type === "date" ? r[h] = typeof u == "string" ? u.slice(0, 10) : "" : d.type === "time" ? typeof u == "string" ? u.includes("T") ? r[h] = u.slice(11, 16) : r[h] = u.slice(0, 5) : r[h] = "" : h === "blocked" || h === "blacklist" ? r[h] = String(u ?? "false") : r[h] = u ?? "";
    let p;
    d.type === "file" ? p = d.multiple ? V.array().of(V.mixed()) : V.mixed() : d.multiple === !0 || d.type === "checkbox" || d.type === "tags" ? p = V.array().of(V.string()) : d.type === "email" ? p = V.string().email("Invalid email") : d.type === "number" ? p = V.number().typeError("Must be a number") : d.type === "json" ? p = V.string().test("json", "Invalid JSON", (E) => {
      if (!E) return !0;
      try {
        return JSON.parse(E), !0;
      } catch {
        return !1;
      }
    }) : p = V.string(), d.required && (p = p.required(
      d.error_message || `${d.label || h} is required`
    )), d?.validate?.regex && typeof d.validate.regex == "string" && (p = p.matches(
      new RegExp(d?.validate?.regex),
      d?.error_message || "Invalid input format"
    )), d?.validate && Object.entries(d.validate).forEach(([E, N]) => {
      switch (E) {
        case "email":
          N && (p = p.email("Invalid email format"));
          break;
        case "mobile":
          p = p.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          p = p.matches(
            new RegExp(N),
            `Must match pattern: ${N}`
          );
          break;
        case "date":
          p = V.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((v, I) => {
            if (typeof I == "string") {
              const C = I.replace(/-/g, "/"), [R, i, g] = C.split("/");
              if (R && i && g)
                return /* @__PURE__ */ new Date(`${g}-${i}-${R}`);
            }
            return v;
          });
          break;
        case "time":
          p = p.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          p = p.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          p = V.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          p = V.number().typeError("Must be a decimal").transform((v, I) => {
            if (I == null || I === "") return;
            const C = Number(I);
            if (isNaN(C)) return v;
            if (typeof v == "number" && !isNaN(v)) {
              const R = Number(v);
              return Number.isInteger(R) ? Number(C.toFixed(R)) : C;
            }
            return C;
          });
          break;
        case "alphanumeric":
          p = p.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          p = p.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          p = p.transform(
            (v) => v && v.toUpperCase()
          );
          break;
        case "lower":
          p = p.transform(
            (v) => v && v.toLowerCase()
          );
          break;
        case "length-min": {
          const v = Number(N);
          isNaN(v) || (p = p.min(v, `Minimum length is ${v}`));
          break;
        }
        case "length-max": {
          const v = Number(N);
          isNaN(v) || (p = p.max(v, `Maximum length is ${v}`));
          break;
        }
      }
    }), l[h] = p;
  });
}, ue = {
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
function de(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const ge = (e) => e === !0 || e === "true", J = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (l, n) => r[n] !== void 0 ? String(r[n]) : l
) : Array.isArray(e) ? e.map((l) => J(l, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([l, n]) => [
    J(l, r),
    J(n, r)
  ])
) : e, re = (e, r, l, n) => {
  if (!Array.isArray(l) || l.length === 0) return {};
  const m = n ?? (l[0] && typeof l[0] == "object" && "category" in l[0] ? "category" : void 0);
  if (!m) {
    const y = {};
    return l.forEach((d) => {
      const h = d[e], u = d[r];
      h != null && u != null && (y[String(h)] = String(u));
    }), y;
  }
  const c = {};
  return l.forEach((y) => {
    const d = y[m] ?? "Others", h = y[e], u = y[r];
    h == null || u == null || (c[d] || (c[d] = {}), c[d][String(h)] = String(u));
  }), c;
}, fe = (e, r) => {
  if (!e || r == null) return;
  const l = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[l];
  for (const m of Object.values(e))
    if (l in m)
      return m[l];
}, Qe = (e) => {
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
      ([m, c]) => [String(m), c]
    )
  ) : [];
}, $e = (e) => {
  if (!e || typeof e != "object") return !1;
  const r = Object.values(e)[0];
  return typeof r == "object" && r !== null && !Array.isArray(r);
};
async function Xe() {
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
const Ue = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Ze(e, r = "create") {
  return Object.entries(e).filter(([, l]) => !(l.vmode === "edit" && r === "create")).map(([l, n]) => ({
    ...n,
    name: l
  }));
}
function ie(e, r, l) {
  console.log("field", r);
  const n = Ie(r);
  console.log("sssssssssssssssssssss", n), console.log("sssssssssdddddddddddddddddddd", l), n && l && rt(l, n, e);
}
function Je(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function et(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const l = r.match(/^(.+?)\s+as\s+.+$/i);
    return l ? l[1]?.trim() : r;
  }).filter((r) => !!r);
}
const ae = (e) => {
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
}, tt = "__form_persist__", Te = (e) => `${tt}:${e}`;
function Ie(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Oe(e) {
  try {
    return JSON.parse(localStorage.getItem(Te(e)) || "{}");
  } catch {
    return {};
  }
}
function rt(e, r, l) {
  const n = Oe(e);
  localStorage.setItem(
    Te(e),
    JSON.stringify({
      ...n,
      [r]: l
    })
  );
}
function at(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function st(e) {
  return Ke.includes(e) ? "image" : Ge.includes(e) ? "video" : Ye.includes(e) ? "pdf" : qe.includes(e) ? "text" : "other";
}
const Ae = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, le = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ye = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: le(e) }
)).data.refhash, ve = async (e, r) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: le(e) }
)).data.refid, nt = {
  async fetch(e, r, l, n) {
    const m = await ye(e);
    let c = !1, y;
    l && (c = !0, y = l), c || (y = await ve(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: m,
      srcid: n
    }));
    const d = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: y, datahash: m },
      { headers: le(e) }
    );
    return d.data?.data ?? d.data;
  },
  async create(e, r, l) {
    const n = await ye(e), m = await ve(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: l
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: m, fields: r.values, datahash: n },
      { headers: le(e) }
    )).data;
  },
  async update(e, r, l) {
    const n = await ye(e), m = await ve(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: l
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: m, fields: r.values, datahash: n },
      { headers: le(e) }
    )).data;
  }
};
async function pe(e, r, l, n = void 0, m = void 0, c = {}) {
  try {
    let y = l;
    return y || (y = (await B({
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
        queryid: y,
        filter: c,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (y) {
    throw y;
  }
}
async function Pe(e, r) {
  let l = r.previewPath ?? "/api/files/preview";
  const n = await B.get(
    `${r.baseURL}${l}?uri=${encodeURIComponent(e)}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${r?.accessToken}`
      }
    }
  );
  return URL.createObjectURL(n.data);
}
async function Le(e, r) {
  if (!e?.uploadURL)
    throw new Error("Upload URL missing");
  const l = e.baseURL + e.uploadURL;
  return Promise.all(
    Array.from(r).map(async (n) => {
      const m = new FormData();
      return m.append("file", n), (await B.post(l, m, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e.accessToken}`
        }
      })).data;
    })
  );
}
function ot({
  field: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: m,
  module_refid: c = "menuManager.main",
  optionsOverride: y,
  setFieldOptions: d
}) {
  const [h, u] = Z(!1), [$, p] = Z(
    y ?? e.options ?? {}
  );
  se(null);
  const E = se(null), [N, v] = Z(""), [I, C] = Z(0), R = se(null), i = se(null), [g, b] = Z(!1), w = se(N), A = e.disabled === !0;
  Q(() => {
    w.current = N;
  }, [N]);
  const z = (o) => {
    if (A) {
      o.preventDefault(), i.current?.removeAttribute("open");
      return;
    }
    o.currentTarget.open || v("");
  };
  Q(() => {
    y && Object.keys(y).length !== 0 && p(y);
  }, [y]), Q(() => {
    const o = (x) => {
      i.current && !i.current.contains(x.target) && (i.current.open = !1, v(""));
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, []);
  const L = e.name;
  Q(() => {
    let o = !0;
    return (async () => {
      let j = e.valueKey ?? "value", T = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            p(e.options);
            return;
          }
        }
        const S = (Array.isArray(e.options) ? e.options : [e.options]).map(ae), F = re(
          j,
          T,
          S,
          e.groupKey
          // auto-uses `category` if present
        );
        p(F);
        return;
      }
      const M = e?.source ?? {};
      if (e.type === "dataMethod") {
        const f = e.method, S = f ? l[f] : void 0;
        if (S)
          try {
            const F = await Promise.resolve(S()), k = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, G = Array.isArray(k) ? k.map(ae) : [], W = re(j, T, G, e.groupKey);
            o && p(W);
          } catch (F) {
            console.error("Method execution failed:", F), o && p({});
          }
        else
          o && p({});
      }
      if (M.type === "api" && M.url)
        try {
          const f = await B({
            method: M.method || "GET",
            url: M.url,
            data: M.body ?? {},
            params: M.params ?? {},
            headers: M.headers ?? {}
          }), S = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f, F = Array.isArray(S) ? S.map(ae) : [], k = re(j, T, F, e.groupKey);
          o && p(k);
        } catch (f) {
          console.error("API execution failed:", f), o && p({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let f;
          if (e.type === "dataSelector")
            f = {
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
            f = {
              table: e.table,
              cols: e.columns,
              where: e.where ? m ? J(e.where, { refid: m }) : e.where : void 0
            };
          }
          const S = await pe(n, f, e?.queryid, void 0, c), F = Array.isArray(S?.data?.data) ? S.data.data : Array.isArray(S?.data) ? S.data : S, k = Array.isArray(F) ? F.map(ae) : [], G = re(j, T, k, e.groupKey);
          o && p(G);
        } catch (f) {
          console.error("API fetch failed:", f);
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
    m,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey
  ]);
  const _ = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${A ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, P = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, s = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, O = je(
    () => Qe($),
    [$]
  ), H = O.length, D = je(() => e.search || !N ? O : O.filter(
    ([, o]) => o.toLowerCase().includes(N.toLowerCase())
  ), [e.search, N, O]), q = (o, x) => {
    if (i.current?.open === !0 || g === !0)
      if (o.key === "ArrowDown")
        o.preventDefault(), C(
          (j) => j + 1 < D.length ? j + 1 : 0
        );
      else if (o.key === "ArrowUp")
        o.preventDefault(), C(
          (j) => j - 1 >= 0 ? j - 1 : D.length - 1
        );
      else if (o.key === "Enter") {
        o.preventDefault();
        const [j] = D[I] || [];
        if (j) {
          let T = x ? j : [...r.values[e.name], j];
          r.setFieldValue(e.name, T), ie(T, e, c);
        }
        i.current && (i.current.open = !1);
      } else o.key === "Escape" && (i.current.open = !1, v(""), b(!1));
  };
  Q(() => {
    R.current?.querySelector(
      `[data-index="${I}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [I]), Q(() => {
    I >= D.length && C(0);
  }, [D, I]), Q(() => {
    const o = e.autocomplete, x = e.ajaxchain;
    if (!o && !x) return;
    const j = r.values[e.name];
    if (!j) return;
    const T = Array.isArray(x) ? x : x ? [x] : [];
    (async () => {
      try {
        if (Je(o)) {
          const f = o.src;
          if (!f || !n) return;
          const S = J(f.where ?? {}, {
            refid: j
          }), F = {
            ...f,
            table: f.table,
            cols: f.columns,
            where: S
          }, { data: k } = await pe(n, F, e?.queryid, void 0, c), G = Array.isArray(k?.data) ? k.data[0] : k?.data;
          G && o.target.split(",").map((W) => W.trim()).forEach((W) => {
            G[W] !== void 0 && r.setFieldValue(W, G[W]);
          });
        }
        for (const f of T) {
          const S = f.src;
          if (!f || typeof f != "object" || !S || typeof S != "object" || !n) continue;
          let F;
          if (!S.queryid) {
            if (!S.table || !S.columns)
              throw new Error("SQL query requires field.table");
            const _e = J(S?.where ?? {}, {
              refid: j
            });
            F = {
              ...S,
              table: S.table,
              cols: S.columns,
              where: _e
            };
          }
          const { data: k } = await pe(n, F, S?.queryid, j, c);
          let G = e.valueKey ?? "value", W = e.labelKey ?? "title";
          const te = Array.isArray(k?.data?.data) ? k.data.data : Array.isArray(k?.data) ? k.data : k, ke = Array.isArray(te) ? te.map(ae) : [], ze = re(
            G,
            W,
            ke,
            e.groupKey
          );
          d?.(f.target, ze);
        }
      } catch (f) {
        console.error("Autocomplete / AjaxChain fetch failed", f);
      }
    })();
  }, [r.values[e.name]]), Q(() => {
    if (!e.search || !N.trim() || !e.table || !n) return;
    const o = et(e.columns ?? ""), x = new AbortController(), j = setTimeout(async () => {
      try {
        let T;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const te = m ? J(e.where ?? {}, {
            refid: m
          }) : e.where;
          T = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: te
          };
        }
        let M = {};
        Array.isArray(o) && o.forEach((te) => {
          M[te] = [N, "LIKE"];
        });
        let f = e.valueKey ?? "value", S = e.labelKey ?? "title";
        const { data: F } = await pe(n, T, e?.queryid, void 0, c, M), k = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, G = Array.isArray(k) ? k.map(ae) : [], W = re(
          f,
          S,
          G,
          e.groupKey
        );
        p(W);
      } catch (T) {
        if (B.isCancel(T)) return;
        console.error("Search fetch failed", T);
      }
    }, 500);
    return () => {
      clearTimeout(j), x.abort();
    };
  }, [N, m]);
  const K = async (o) => {
    if (o.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const x = await Le(n, o), j = e.multiple ? x.map((T) => T.path) : x[0]?.path;
      r.setFieldValue(
        L,
        j
      ), ie(j, e, c);
    } catch (x) {
      console.error("File upload failed", x), r.setFieldError(L, "File upload failed");
    }
  }, X = async (o, x, j) => {
    const T = x[o];
    if (!T) return;
    const M = l?.[T];
    if (typeof M != "function") {
      console.error(`Method "${String(T)}" not found`);
      return;
    }
    try {
      await Promise.resolve(M(j));
    } catch (f) {
      console.error(`Method "${String(T)}" failed`, f);
    }
  }, U = (o) => {
    if (A) return;
    const x = o.target.value;
    v(x), C(0), x.trim() ? b(!0) : (b(!1), r.setFieldValue(L, ""));
  }, ee = (o) => {
    r.setFieldValue(L, o), ie(o, e, c), v(""), b(!1), X("onChange", e, `${L}-${o}`);
  };
  function a(o) {
    const x = o.currentTarget.files;
    x && K(x);
  }
  return {
    setHighlightedIndex: C,
    executeFieldMethod: X,
    handleFileUpload: K,
    handleKeyDown: q,
    handleToggle: z,
    setSearch: v,
    setOpen: b,
    setIsFocused: u,
    handleInputChange: U,
    handleSelect: ee,
    handlePersist: ie,
    handleFileChange: a,
    optionCount: H,
    baseInputClasses: _,
    focusClasses: P,
    labelClasses: s,
    search: N,
    highlightedIndex: I,
    options: $,
    isDisabled: A,
    key: L,
    filteredOptions: D,
    open: g,
    listRef: R,
    inputRef: E,
    detailsRef: i,
    isFocused: h
  };
}
const it = ({ fileUrl: e, category: r }) => e ? r === "image" ? /* @__PURE__ */ t.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : r === "pdf" || r === "text" ? /* @__PURE__ */ t.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : r === "video" ? /* @__PURE__ */ t.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ t.jsx("source", { src: e }) }) : /* @__PURE__ */ t.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ t.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ t.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function lt(e) {
  const r = Ae[e] ?? Ae.other;
  return /* @__PURE__ */ t.jsx("i", { className: `${r} text-2xl text-gray-600` });
}
const ct = ({ filePath: e, sqlOpsUrls: r }) => {
  const [l, n] = Z(null), [m, c] = Z(!1);
  Q(() => {
    if (!m || !r) return;
    let u = !0, $ = null;
    return Pe(e, r).then((p) => {
      u && ($ = p, n(p));
    }), () => {
      u = !1, $ && URL.revokeObjectURL($);
    };
  }, [m, e, r]);
  const y = at(e), d = st(y), h = lt(d);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => c(!0),
        onKeyDown: (u) => u.key === "Enter" && c(!0),
        className: "inline-flex cursor-pointer",
        children: [
          h,
          "   ",
          e?.split("/").pop()
        ]
      }
    ),
    m && /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => c(!1),
          children: "✕"
        }
      ),
      l ? /* @__PURE__ */ t.jsx(it, { fileUrl: l, category: d }) : /* @__PURE__ */ t.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Fe({
  field: e,
  isDisabled: r,
  handleToggle: l,
  detailsRef: n,
  handleKeyDown: m,
  valueArray: c,
  labelClasses: y,
  listRef: d,
  search: h,
  filteredOptions: u,
  highlightedIndex: $,
  setSearch: p,
  formik: E,
  setHighlightedIndex: N,
  executeFieldMethod: v,
  handlePersist: I,
  module_refid: C,
  options: R
}) {
  const i = e.name;
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsxs("label", { className: y, children: [
      e.label,
      e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t.jsxs(
      "details",
      {
        className: `relative w-full ${r ? " opacity-70" : ""}`,
        onToggle: l,
        ref: n,
        onKeyDown: (g) => {
          r || m(g, !1);
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
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: c?.length > 0 ? c.map((g) => fe(R, g) ?? g).join(", ") : `Select ${e.label}` }),
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
          !r && /* @__PURE__ */ t.jsxs("div", { ref: d, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
            e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: h,
                onChange: (g) => {
                  r || (p(g.target.value), N(0));
                },
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
              }
            ) }),
            u.length > 0 ? u.map(([g, b], w) => /* @__PURE__ */ t.jsxs(
              "label",
              {
                htmlFor: `${i}-${g}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(g) ? "bg-indigo-50 text-indigo-600 font-medium" : $ === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      id: `${i}-${g}`,
                      type: "checkbox",
                      checked: c?.includes(g),
                      onChange: (A) => {
                        const z = A.target.checked ? [...c, g] : c?.filter((L) => L !== g);
                        E.setFieldValue(i, z), I(z, e, C), v("onChange", e, `${i}-${g}`);
                      },
                      onBlur: E.handleBlur,
                      disabled: r,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  b
                ]
              },
              g
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ]
      }
    ),
    E.touched[i] && E.errors[i] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(E.errors[i]) })
  ] });
}
function ut({ filePath: e, field_name: r, sqlOpsUrls: l }) {
  const [n, m] = Z(null);
  return Q(() => {
    if (!open || !l) return;
    let c = !0, y = null;
    return Pe(e, l).then((d) => {
      c && (y = d, m(d));
    }), () => {
      c = !1, y && URL.revokeObjectURL(y);
    };
  }, [open, e, l]), n ? /* @__PURE__ */ t.jsx(
    "img",
    {
      alt: r,
      title: r,
      src: n,
      className: "object-contain h-full w-full"
    }
  ) : null;
}
function Me({
  formik: e,
  field: r,
  sqlOpsUrls: l,
  module_refid: n
}) {
  let m = r?.name;
  const c = se(null), y = async (d) => {
    const h = d.currentTarget.files;
    if (!(!h || h.length === 0))
      try {
        const u = await Le(l, h), $ = r.multiple ? u.map((p) => p.path) : u[0]?.path;
        e.setFieldValue(
          m,
          $
        ), ie($, r, n);
      } catch (u) {
        console.error("File upload failed", u), e.setFieldError(m, "File upload failed");
      }
  };
  return /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: r.label }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        ref: c,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: y
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => c.current?.click(),
        className: "h-24 w-24 border border-dashed cursor-pointer overflow-hidden",
        children: e.values[m] ? /* @__PURE__ */ t.jsx(ut, { field_name: m, filePath: e.values[m], sqlOpsUrls: l }) : /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center h-full text-gray-400", children: /* @__PURE__ */ t.jsx("i", { className: "fa-solid fa-user" }) })
      }
    )
  ] });
}
function he({
  field: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: m,
  module_refid: c = "menuManager.main",
  optionsOverride: y,
  setFieldOptions: d
}) {
  const {
    setHighlightedIndex: h,
    executeFieldMethod: u,
    handleFileUpload: $,
    handleKeyDown: p,
    handleToggle: E,
    setSearch: N,
    setOpen: v,
    setIsFocused: I,
    handleInputChange: C,
    handleSelect: R,
    handlePersist: i,
    optionCount: g,
    baseInputClasses: b,
    focusClasses: w,
    labelClasses: A,
    search: z,
    highlightedIndex: L,
    options: _,
    isDisabled: P,
    key: s,
    filteredOptions: O,
    open: H,
    listRef: D,
    detailsRef: q,
    isFocused: K
  } = ot({
    field: e,
    formik: r,
    methods: l,
    sqlOpsUrls: n,
    refid: m,
    module_refid: c,
    ...y && { optionsOverride: y },
    ...d && { setFieldOptions: d }
  }), X = (U) => U.icon ? /* @__PURE__ */ t.jsx("i", { className: U.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const a = r.values[s] ?? "", o = z !== "" ? z : fe(_, a) ?? String(a ?? "");
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${b} ${w}`,
            value: o,
            placeholder: e.placeholder || "Type to search...",
            onChange: C,
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (x) => {
              if (x.key === "Enter") {
                if (x.preventDefault(), O[L]) {
                  const [j] = O[L];
                  r.setFieldValue(s, j), i(j, e, c);
                } else z.trim() && (r.setFieldValue(s, z.trim()), i(z.trim(), e, c));
                v(!1);
                return;
              }
              p(x, !0);
            },
            disabled: P
          }
        ),
        H && !P && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: D,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: O.length > 0 ? O.map(([x, j], T) => /* @__PURE__ */ t.jsx(
              "div",
              {
                id: `${s}-${x}`,
                "data-index": T,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${L === T ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => R(x),
                children: j
              },
              x
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
          Fe,
          {
            field: e,
            isDisabled: P,
            handleToggle: E,
            detailsRef: q,
            handleKeyDown: p,
            valueArray: a,
            labelClasses: A,
            listRef: D,
            search: z,
            filteredOptions: O,
            highlightedIndex: L,
            setSearch: N,
            formik: r,
            executeFieldMethod: u,
            setHighlightedIndex: h,
            handlePersist: i,
            module_refid: c,
            options: _
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: `relative w-full ${P ? "opacity-70" : ""}`,
            onToggle: E,
            ref: q,
            onKeyDown: (a) => {
              P || p(a, !0);
            },
            children: [
              /* @__PURE__ */ t.jsxs(
                "summary",
                {
                  className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${P ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? fe(_, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
              !P && /* @__PURE__ */ t.jsxs("div", { ref: D, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                e.search && /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    value: z,
                    onChange: (a) => {
                      N(a.target.value), h(0);
                    },
                    onKeyDown: (a) => p(a, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                O.length > 0 && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: (a) => {
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, ""), i("", e, c), q.current?.removeAttribute("open"), N("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                O.length > 0 ? O.map(([a, o], x) => /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    id: `${s}-${a}`,
                    "data-index": x,
                    onClick: (j) => {
                      j.preventDefault(), j.stopPropagation(), r.setFieldValue(s, a), i(a, e, c), q.current?.removeAttribute("open"), N(""), h(0), u("onChange", e, `${s}-${a}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === a ? "bg-indigo-50 text-indigo-600 font-medium" : L === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              className: `${b} ${w} min-h-[120px] resize-none`,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: P
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const a = r.values[s];
        return /* @__PURE__ */ t.jsx(
          Fe,
          {
            field: e,
            isDisabled: P,
            handleToggle: E,
            detailsRef: q,
            handleKeyDown: p,
            valueArray: a,
            labelClasses: A,
            listRef: D,
            search: z,
            filteredOptions: O,
            highlightedIndex: L,
            setSearch: N,
            formik: r,
            executeFieldMethod: u,
            setHighlightedIndex: h,
            handlePersist: i,
            module_refid: c,
            options: _
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${b} ${w} appearance-none ${P ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => I(!0),
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              disabled: P,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !$e(_) && Object.entries(_).map(([a, o]) => /* @__PURE__ */ t.jsx("option", { value: a, className: "py-2", children: o }, a)),
                $e(_) && Object.entries(_).map(([a, o]) => /* @__PURE__ */ t.jsx("optgroup", { label: a, children: Object.entries(o).map(([x, j]) => /* @__PURE__ */ t.jsx("option", { value: x, children: j }, x)) }, a))
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
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${g > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(_ || {}).map(([a, o]) => /* @__PURE__ */ t.jsxs(
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
                  onChange: (x) => {
                    r.setFieldValue(s, x.target.value), i(x.target.value, e, c), u("onChange", e, `${s}-${a}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: P,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${P ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
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
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(_ || {}).map(([o, x]) => /* @__PURE__ */ t.jsxs(
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
                  onChange: (j) => {
                    const T = j.target.checked ? [...a, o] : a.filter((M) => M !== o);
                    r.setFieldValue(s, T), i(T, e, c), u("onChange", e, `${s}-${o}`);
                  },
                  onBlur: r.handleBlur,
                  disabled: P,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${P ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              x
            ]
          },
          o
        )) }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(r.errors[s]) })
      ] });
    }
    case "tags": {
      const a = r.values[s], o = z.trim(), x = Array.isArray(_) ? _ : Object.entries(_ || {}).map(([f, S]) => ({ value: f, label: S })), j = (f) => {
        if (!P && f && !a.includes(f)) {
          let S = [...a, f];
          r.setFieldValue(s, S), i(S, e, c), N("");
        }
      }, T = (f) => {
        let S = a.filter((F) => F !== f);
        r.setFieldValue(
          s,
          S
        ), i(S, e, c);
      }, M = (f) => x.find((S) => S.value === f)?.label ?? f;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${b} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${P ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !P && document.getElementById(`${s}-input`)?.focus(),
            children: [
              a.map((f) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: M(f) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (S) => {
                          S.stopPropagation(), P || T(f);
                        },
                        onMouseDown: (S) => S.preventDefault(),
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
                  value: z,
                  onChange: (f) => N(f.target.value),
                  onKeyDown: (f) => {
                    (f.key === "Enter" || f.key === ",") && (f.preventDefault(), j(o));
                  },
                  placeholder: a.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: P
                }
              )
            ]
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    }
    case "photo":
    case "avatar":
      return /* @__PURE__ */ t.jsx(
        Me,
        {
          formik: r,
          field: e,
          sqlOpsUrls: n,
          module_refid: c
        }
      );
    case "attachment":
    case "file":
      const U = e.multiple === !0, ee = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ t.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: X(e) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: s,
              type: "file",
              className: `${b} ${w} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              multiple: U,
              onChange: (a) => {
                const o = a.currentTarget.files;
                o && $(o), u("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: P
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        ee.map((a) => {
          const o = a?.split("/").pop();
          return /* @__PURE__ */ t.jsx(ct, { sqlOpsUrls: n, filePath: a }, o);
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
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
                r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: P,
              className: `${b} ${w} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
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
                    r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
                  },
                  onBlur: r.handleBlur,
                  placeholder: e.placeholder,
                  disabled: P,
                  className: `${b} ${w} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`,
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
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
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
              className: `${b} ${w} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: P,
              min: e.min ?? 1,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: A, children: [
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
              className: `${b} ${w} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), i(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: P,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${K ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Re({ title: e, children: r, isFirst: l }) {
  const [n, m] = Z(l);
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
function be({
  fields: e,
  formik: r,
  methods: l = {},
  sqlOpsUrls: n,
  refid: m,
  module_refid: c,
  fieldOptions: y,
  setFieldOptions: d
}) {
  return /* @__PURE__ */ t.jsx("div", { className: "bg-white min-h-3/10 overflow-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ t.jsx("div", { className: "lg:col-span-2 flex flex-col ", children: /* @__PURE__ */ t.jsx("div", { className: "relative w-42 h-42 ", children: e?.filter((h) => h.type === "avatar").map((h) => /* @__PURE__ */ t.jsx(
      Me,
      {
        formik: r,
        field: h,
        sqlOpsUrls: n,
        module_refid: c
      }
    )) }) }),
    /* @__PURE__ */ t.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-2", children: e?.map((h, u) => h.type === "avatar" ? null : /* @__PURE__ */ t.jsx("div", { className: `transition-colors duration-200 col-span-12 md:col-span-6 ${ue[de(Number(h.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ t.jsx(
      he,
      {
        refid: m,
        module_refid: c,
        sqlOpsUrls: n,
        field: h,
        formik: r,
        methods: l,
        setFieldOptions: d,
        ...y?.[h.name] ? { optionsOverride: y[h.name] } : {}
      },
      h?.name || u
    ) }, h.name)) }) })
  ] }) });
}
function dt({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = ($) => {
  },
  onCancel: m = () => {
  },
  methods: c = {},
  components: y = {},
  sqlOpsUrls: d,
  refid: h,
  module_refid: u
}) {
  const { common: $ = [], ...p } = r, [E, N] = Y.useState({}), v = (i, g) => {
    N((b) => ({
      ...b,
      [i]: g
    }));
  }, { initialValues: I, validationSchema: C } = Y.useMemo(() => {
    const i = {}, g = {};
    return Object.values(r).flat().forEach((b) => {
      ce([b], i, g, l, u, d.operation);
    }), {
      initialValues: i,
      validationSchema: g
    };
  }, [r, l, u, d.operation]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: V.object().shape(C),
    onSubmit: (i) => {
      n(i);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
      $.length > 0 && /* @__PURE__ */ t.jsx(Re, { title: "Common", isFirst: !0, children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: h,
          module_refid: u,
          sqlOpsUrls: d,
          fields: $,
          formik: R,
          methods: c,
          setFieldOptions: v,
          fieldOptions: E
        }
      ) }),
      p && Object.entries(p).map(([i, g], b) => /* @__PURE__ */ t.jsx(Re, { title: i, isFirst: b === 0 && $.length === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((w, A) => ge(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${ue[de(Number(w.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ t.jsx(
            he,
            {
              refid: h,
              module_refid: u,
              sqlOpsUrls: d,
              components: y,
              field: w,
              formik: R,
              methods: c,
              setFieldOptions: v,
              ...E[w.name] ? { optionsOverride: E[w.name] } : {}
            },
            w.name
          )
        },
        w?.name ?? `field-${A}`
      )) }) }, i))
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function ht({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = (p) => {
  },
  onCancel: m = () => {
  },
  methods: c = {},
  components: y = {},
  sqlOpsUrls: d,
  widget: h,
  refid: u,
  module_refid: $
}) {
  const { common: p = [], ...E } = r, N = Object.keys(E), [v, I] = Y.useState(0), [C, R] = Y.useState({}), i = (s, O) => {
    R((H) => ({
      ...H,
      [s]: O
    }));
  }, { initialValues: g, validationSchema: b, stepperSchemas: w } = Y.useMemo(() => {
    const s = {}, O = {}, H = {};
    return h ? Object.entries(r).forEach(([D, q]) => {
      const K = {};
      ce(q, s, K, l, $, d.operation), H[D] = K;
    }) : Object.entries(r).forEach(([D, q]) => {
      ce(q, s, O, l, $, d.operation);
    }), {
      initialValues: s,
      validationSchema: O,
      stepperSchemas: H
    };
  }, [r, l, h, $, d.operation]), A = N[v] ?? null, z = h && A ? w[A] ?? {} : b, L = xe({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: V.object().shape(z),
    onSubmit: (s) => {
      h ? (v < N.length - 1 && I((O) => O + 1), v === N.length - 1 && n(s)) : n(s);
    }
  }), _ = async (s) => {
    if (s.preventDefault(), !h) {
      const O = await L.validateForm();
      if (Object.keys(O).length > 0) {
        alert("Please fill all required fields before submitting."), L.setTouched(
          Object.keys(O).reduce((H, D) => ({ ...H, [D]: !0 }), {})
        );
        return;
      }
    }
    L.handleSubmit(s);
  }, P = () => {
    I((s) => s > 0 ? s - 1 : s);
  };
  return /* @__PURE__ */ t.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      p.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "p-3", children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: u,
          module_refid: $,
          sqlOpsUrls: d,
          fields: p,
          formik: L,
          methods: c,
          setFieldOptions: i,
          fieldOptions: C
        }
      ) }),
      /* @__PURE__ */ t.jsx("nav", { className: "relative flex bg-gray-100", children: N.map((s, O) => /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          onClick: () => I(O),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${v === O ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: s })
        },
        s
      )) })
    ] }) }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: A && E[A]?.map((s, O) => ge(s.hidden) || s.type === "geolocation" || s.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `col-span-12  ${ue[de(Number(s.width))] || "lg:col-span-4"}`,
              children: /* @__PURE__ */ t.jsx(
                he,
                {
                  refid: u,
                  module_refid: $,
                  sqlOpsUrls: d,
                  field: s,
                  formik: L,
                  methods: c,
                  components: y,
                  setFieldOptions: i,
                  ...C[s.name] ? { optionsOverride: C[s.name] } : {}
                },
                s.name
              )
            },
            s?.name ?? `field-${O}`
          )) }),
          /* @__PURE__ */ t.jsxs("div", { className: `mt-8 flex ${v > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            v > 0 && /* @__PURE__ */ t.jsx("button", { onClick: P, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
            /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
              /* @__PURE__ */ t.jsx("button", { onClick: m, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
              /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: h ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                v + 1,
                " of ",
                N.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: N.map((s, O) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${O === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              O
            )) })
          ] }) })
        ]
      },
      N[v]
    )
  ] }) });
}
function mt({
  title: e,
  fields: r,
  data: l,
  onSubmit: n = (u) => {
  },
  onCancel: m = () => {
  },
  methods: c = {},
  sqlOpsUrls: y,
  refid: d,
  module_refid: h
}) {
  const u = Ze(r, y.operation), [$, p] = Y.useState({}), E = (i, g) => {
    p((b) => ({
      ...b,
      [i]: g
    }));
  }, { commonFields: N, otherFields: v } = Y.useMemo(() => u.reduce(
    (i, g) => (g.group === "common" ? i.commonFields.push(g) : i.otherFields.push(g), i),
    { commonFields: [], otherFields: [] }
  ), [u]), { initialValues: I, validationSchema: C } = Y.useMemo(() => {
    const i = {}, g = {};
    return u.forEach((b) => {
      ce([b], i, g, l, h, y.operation);
    }), {
      initialValues: i,
      validationSchema: g
    };
  }, [u, l]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: V.object().shape(C),
    onSubmit: (i) => {
      n(i);
    }
  });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4  mx-auto", children: [
    N.length > 0 && /* @__PURE__ */ t.jsx(
      be,
      {
        refid: d,
        module_refid: h,
        sqlOpsUrls: y,
        fields: N,
        formik: R,
        methods: c,
        setFieldOptions: E,
        fieldOptions: $
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((i, g) => ge(i.hidden) || i.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ue[de(Number(i.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: d,
            module_refid: h,
            sqlOpsUrls: y,
            field: i,
            formik: R,
            methods: c,
            setFieldOptions: E,
            ...$[i.name] ? { optionsOverride: $[i.name] } : {}
          }
        )
      },
      i?.name ?? `field-${g}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function Ce({ title: e, children: r }) {
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
        children: /* @__PURE__ */ t.jsx("div", { className: "px-4 pb-4 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4", children: r }) })
      }
    )
  ] }) });
}
function pt({
  title: e,
  groupedFields: r,
  data: l,
  onSubmit: n = ($) => {
  },
  onCancel: m = () => {
  },
  methods: c = {},
  components: y = {},
  sqlOpsUrls: d,
  refid: h,
  module_refid: u
}) {
  const { common: $ = [], ...p } = r, [E, N] = Y.useState({}), v = (i, g) => {
    N((b) => ({
      ...b,
      [i]: g
    }));
  }, { initialValues: I, validationSchema: C } = Y.useMemo(() => {
    const i = {}, g = {};
    return Object.values(r).flat().forEach((b) => {
      ce([b], i, g, l, u, d.operation);
    }), {
      initialValues: i,
      validationSchema: g
    };
  }, [r, l, u, d.operation]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: V.object().shape(C),
    onSubmit: (i) => {
      n(i);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
      $.length > 0 && /* @__PURE__ */ t.jsx(Ce, { title: "Common", children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: h,
          module_refid: u,
          sqlOpsUrls: d,
          fields: $,
          formik: R,
          methods: c,
          setFieldOptions: v,
          fieldOptions: E
        }
      ) }),
      p && Object.entries(p).map(([i, g], b) => /* @__PURE__ */ t.jsx(Ce, { title: i, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: g.map((w, A) => ge(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && d.operation === "create" ? null : /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${ue[de(Number(w.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ t.jsx(
            he,
            {
              refid: h,
              module_refid: u,
              sqlOpsUrls: d,
              components: y,
              field: w,
              formik: R,
              methods: c,
              setFieldOptions: v,
              ...E[w.name] ? { optionsOverride: E[w.name] } : {}
            },
            w.name
          )
        },
        w?.name ?? `field-${A}`
      )) }) }, i))
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: m, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function yt({
  formJson: e,
  methods: r = {},
  userid: l = null,
  onCancel: n = () => {
  },
  components: m = {},
  callback: c = () => {
  },
  initialvalues: y = {}
}) {
  let d = We(e);
  const h = e.endPoints, u = e?.source?.refid, $ = He(e?.fields ?? {}, h?.operation), [p, E] = Y.useState(y), N = Y.useMemo(() => Ue(e.fields), [e.fields]);
  Y.useEffect(() => {
    let C = !0;
    return (async () => {
      const i = e?.source ?? {};
      if (!i?.type) {
        C && E({});
        return;
      }
      if (i.type === "method") {
        const g = i.method, b = g ? r[g] : void 0;
        if (b)
          try {
            const w = await Promise.resolve(b());
            C && E(w ?? {});
          } catch (w) {
            console.error("Method execution failed:", w), C && E({});
          }
        else
          C && E({});
      }
      if (i.type === "api" && h?.operation !== "create")
        try {
          const g = await B({
            method: i.method || "GET",
            url: i.url ?? "",
            data: i.body ?? {},
            params: i.params ?? {},
            headers: i.headers ?? {}
          });
          C && E(g.data ?? {});
        } catch (g) {
          console.error("API fetch failed:", g), C && E({});
        }
      if (i.type === "sql" && i.refid && i.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && i.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const g = await nt.fetch(h, {
            source: {
              ...i,
              table: i.table,
              columns: i.columns,
              where: J(i.where, {
                refid: u
              })
            },
            fields: Ee(e.fields, h.operation)
          }, i?.dbopsid, e?.module_refid);
          C && E(g);
        } catch (g) {
          console.error("API fetch failed:", g);
        }
      }
    })(), () => {
      C = !1;
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
  const v = async (C) => {
    const R = e?.source ?? {};
    let i = null;
    if (N.length > 0)
      try {
        i = await Xe();
      } catch (b) {
        console.error("catch fetchGeolocation", b), i = null;
      }
    const g = {
      ...C,
      ...Object.fromEntries(
        N.map((b) => [b, i])
      )
    };
    if (R.type === "method") {
      const b = R.method, w = b ? r[b] : void 0;
      if (w)
        try {
          const A = await Promise.resolve(w(g));
          if (c?.(A), r?.handleActions) {
            let z = h?.operation === "update" ? u : A?.data?.refid;
            const L = e?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            r.handleActions(L);
          }
        } catch (A) {
          c?.(A), console.error("Method execution failed:", A);
        }
    }
    if (R.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const b = await B({
          method: R.method || "POST",
          url: h.baseURL + R.endpoint,
          data: g ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        if (c?.(b), r?.handleActions) {
          let w = h.operation === "update" ? u : b?.data?.refid;
          const A = e?.gotolink?.replace(
            "{hashid}",
            String(w)
          );
          r.handleActions(A);
        }
      } catch (b) {
        c?.(b), console.error("API fetch failed:", b);
      }
    }
    if (R.type === "sql") {
      const b = e.endPoints;
      if (!b) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let w = !1, A;
        R?.dbopsid && (w = !0, A = R?.dbopsid);
        const z = await B({
          method: "GET",
          url: b.baseURL + b.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${b?.accessToken}`
          }
        });
        if (!w) {
          let _ = {
            ...R
          };
          R.where && (_ = {
            ...R,
            where: J(R.where, {
              refid: u
            })
          }), A = (await B({
            method: "POST",
            url: b.baseURL + b.dbopsGetRefId,
            data: {
              operation: b.operation,
              source: _,
              fields: Ee(e.fields, b.operation),
              forcefill: e.forcefill,
              datahash: z.data.refhash,
              srcid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${b?.accessToken}`
            }
          }))?.data.refid;
        }
        const L = await B({
          method: "POST",
          url: b.baseURL + b[b.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: A,
            fields: g,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${b?.accessToken}`
          }
        });
        if (c?.(L), r?.handleActions) {
          let _ = b.operation === "update" ? u : L?.data?.refid;
          const P = e?.gotolink?.replace(
            "{hashid}",
            String(_)
          );
          r.handleActions(P);
        }
      } catch (w) {
        c?.(w), console.error("API fetch failed:", w);
      }
    }
  }, I = {
    accordion: /* @__PURE__ */ t.jsx(
      dt,
      {
        title: e?.title ?? "",
        groupedFields: $,
        data: p,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      pt,
      {
        title: e?.title ?? "",
        groupedFields: $,
        data: p,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      ht,
      {
        title: e?.title ?? "",
        groupedFields: $,
        data: p,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: m,
        widget: e?.widget,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      mt,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: p,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: m,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: I[d] });
}
export {
  yt as LogiksForm
};
