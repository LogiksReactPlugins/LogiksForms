import W, { useState as U, useRef as se, useEffect as Q, useMemo as fe } from "react";
import G from "axios";
import * as K from "yup";
import { useFormik as xe } from "formik";
import { Editor as De } from "@tinymce/tinymce-react";
var pe = { exports: {} }, ne = {};
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
function Ve() {
  if (we) return ne;
  we = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(n, p, c) {
    var g = null;
    if (c !== void 0 && (g = "" + c), p.key !== void 0 && (g = "" + p.key), "key" in p) {
      c = {};
      for (var d in p)
        d !== "key" && (c[d] = p[d]);
    } else c = p;
    return p = c.ref, {
      $$typeof: e,
      type: n,
      key: g,
      ref: p !== void 0 ? p : null,
      props: c
    };
  }
  return ne.Fragment = r, ne.jsx = i, ne.jsxs = i, ne;
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
function Be() {
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
        case N:
          return "Suspense";
        case $:
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
          case b:
            return (a.displayName || "Context") + ".Provider";
          case l:
            return (a._context.displayName || "Context") + ".Consumer";
          case y:
            var o = a.render;
            return a = a.displayName, a || (a = o.displayName || o.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case z:
            return o = a.displayName || null, o !== null ? o : e(a.type) || "Memo";
          case M:
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
    function i(a) {
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
      if (typeof a == "object" && a !== null && a.$$typeof === M)
        return "<...>";
      try {
        var o = e(a);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var a = s.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function g(a) {
      if (O.call(a, "key")) {
        var o = Object.getOwnPropertyDescriptor(a, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, o) {
      function x() {
        Y || (Y = !0, console.error(
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
      return q[a] || (q[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function u(a, o, x, j, T, k, f, w) {
      return x = k.ref, a = {
        $$typeof: E,
        type: a,
        key: o,
        props: k,
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
        value: w
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function F(a, o, x, j, T, k, f, w) {
      var S = o.children;
      if (S !== void 0)
        if (j)
          if (H(S)) {
            for (j = 0; j < S.length; j++)
              m(S[j]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(S);
      if (O.call(o, "key")) {
        S = e(a);
        var L = Object.keys(o).filter(function(B) {
          return B !== "key";
        });
        j = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", te[S + j] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          S,
          L,
          S
        ), te[S + j] = !0);
      }
      if (S = null, x !== void 0 && (i(x), S = "" + x), g(o) && (i(o.key), S = "" + o.key), "key" in o) {
        x = {};
        for (var V in o)
          V !== "key" && (x[V] = o[V]);
      } else x = o;
      return S && d(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), u(
        a,
        S,
        k,
        T,
        p(),
        x,
        f,
        w
      );
    }
    function m(a) {
      typeof a == "object" && a !== null && a.$$typeof === E && a._store && (a._store.validated = 1);
    }
    var A = W, E = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), b = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), s = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, H = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var Y, q = {}, X = A["react-stack-bottom-frame"].bind(
      A,
      c
    )(), Z = D(n(c)), te = {};
    oe.Fragment = I, oe.jsx = function(a, o, x, j, T) {
      var k = 1e4 > s.recentlyCreatedOwnerStacks++;
      return F(
        a,
        o,
        x,
        !1,
        j,
        T,
        k ? Error("react-stack-top-frame") : X,
        k ? D(n(a)) : Z
      );
    }, oe.jsxs = function(a, o, x, j, T) {
      var k = 1e4 > s.recentlyCreatedOwnerStacks++;
      return F(
        a,
        o,
        x,
        !0,
        j,
        T,
        k ? Error("react-stack-top-frame") : X,
        k ? D(n(a)) : Z
      );
    };
  }()), oe;
}
var Se;
function Ke() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? pe.exports = Ve() : pe.exports = Be()), pe.exports;
}
var t = Ke();
const Ge = ["jpg", "jpeg", "png", "gif", "svg", "webp"], qe = ["mp4", "webm", "ogg"], Ye = ["txt", "json", "csv"], We = ["pdf"];
function He(e) {
  return e.template === "accordion" ? "accordion" : e.template === "simple" ? "simple" : e.template === "cards" ? "cards" : Object.values(e.fields || {}).some((n) => n.group) ? "tab" : "simple";
}
function Qe(e, r = "create", i = "Info") {
  const n = {};
  let p = !1;
  if (Object.values(e).forEach((g) => {
    g.group && (p = !0);
  }), !p) return {};
  const c = [];
  return Object.entries(e).forEach(([g, d]) => {
    if (d.vmode === "edit" && r === "create") return;
    const h = { ...d, name: g };
    if (d.group) {
      const u = d.group;
      n[u] || (n[u] = []), n[u].push(h);
    } else
      c.push(h);
  }), c.length > 0 ? {
    [i]: c,
    ...n
  } : n;
}
function Ee(e, r = "create") {
  const i = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && r === "create" || (i[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), i;
}
const ce = (e, r, i, n, p, c) => {
  const g = c === "create" && p ? Oe(p) : {};
  e.forEach((d) => {
    const h = d?.name;
    if (!h) return;
    let u = n?.[h];
    const F = c === "create" && p ? Ie(d) : null;
    c === "create" && F && g[F] !== void 0 && u == null && (u = g[F]), u == null && (u = d.default), d.multiple === !0 || d.type === "checkbox" || d.type === "tags" ? r[h] = Array.isArray(u) ? u : typeof u == "string" ? u.split(",").map((A) => A.trim()).filter(Boolean) : [] : d.type === "json" ? r[h] = typeof u == "object" && u !== null ? JSON.stringify(u, null, 2) : u ?? "" : d.type === "date" ? r[h] = typeof u == "string" ? u.slice(0, 10) : "" : d.type === "time" ? typeof u == "string" ? u.includes("T") ? r[h] = u.slice(11, 16) : r[h] = u.slice(0, 5) : r[h] = "" : h === "blocked" || h === "blacklist" ? r[h] = String(u ?? "false") : r[h] = u ?? "";
    let m;
    d.type === "file" ? m = d.multiple ? K.array().of(K.mixed()) : K.mixed() : d.multiple === !0 || d.type === "checkbox" || d.type === "tags" ? m = K.array().of(K.string()) : d.type === "email" ? m = K.string().email("Invalid email") : d.type === "number" ? m = K.number().typeError("Must be a number") : d.type === "json" ? m = K.string().test("json", "Invalid JSON", (A) => {
      if (!A) return !0;
      try {
        return JSON.parse(A), !0;
      } catch {
        return !1;
      }
    }) : m = K.string(), d.required && (m = m.required(
      d.error_message || `${d.label || h} is required`
    )), d?.validate?.regex && typeof d.validate.regex == "string" && (m = m.matches(
      new RegExp(d?.validate?.regex),
      d?.error_message || "Invalid input format"
    )), d?.validate && Object.entries(d.validate).forEach(([A, E]) => {
      switch (A) {
        case "email":
          E && (m = m.email("Invalid email format"));
          break;
        case "mobile":
          m = m.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          m = m.matches(
            new RegExp(E),
            `Must match pattern: ${E}`
          );
          break;
        case "date":
          m = K.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((v, I) => {
            if (typeof I == "string") {
              const C = I.replace(/-/g, "/"), [R, l, b] = C.split("/");
              if (R && l && b)
                return /* @__PURE__ */ new Date(`${b}-${l}-${R}`);
            }
            return v;
          });
          break;
        case "time":
          m = m.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          m = m.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          m = K.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          m = K.number().typeError("Must be a decimal").transform((v, I) => {
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
          m = m.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          m = m.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          m = m.transform(
            (v) => v && v.toUpperCase()
          );
          break;
        case "lower":
          m = m.transform(
            (v) => v && v.toLowerCase()
          );
          break;
        case "length-min": {
          const v = Number(E);
          isNaN(v) || (m = m.min(v, `Minimum length is ${v}`));
          break;
        }
        case "length-max": {
          const v = Number(E);
          isNaN(v) || (m = m.max(v, `Maximum length is ${v}`));
          break;
        }
      }
    }), i[h] = m;
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
const ge = (e) => e === !0 || e === "true", ee = (e, r) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (i, n) => r[n] !== void 0 ? String(r[n]) : i
) : Array.isArray(e) ? e.map((i) => ee(i, r)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([i, n]) => [
    ee(i, r),
    ee(n, r)
  ])
) : e, re = (e, r, i, n) => {
  if (!Array.isArray(i) || i.length === 0) return {};
  const p = n ?? (i[0] && typeof i[0] == "object" && "category" in i[0] ? "category" : void 0);
  if (!p) {
    const g = {};
    return i.forEach((d) => {
      const h = d[e], u = d[r];
      h != null && u != null && (g[String(h)] = String(u));
    }), g;
  }
  const c = {};
  return i.forEach((g) => {
    const d = g[p] ?? "Others", h = g[e], u = g[r];
    h == null || u == null || (c[d] || (c[d] = {}), c[d][String(h)] = String(u));
  }), c;
}, je = (e, r) => {
  if (!e || r == null) return;
  const i = String(r);
  if (typeof Object.values(e)[0] == "string")
    return e[i];
  for (const p of Object.values(e))
    if (i in p)
      return p[i];
}, Ue = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (n) => [
        String(n.value),
        String(n.title ?? n.label ?? n.value)
      ]
    );
  const r = Object.values(e);
  return r.length ? typeof r[0] == "string" ? Object.entries(e).map(([n, p]) => [String(n), p]) : Object.values(e).flatMap(
    (n) => Object.entries(n).map(
      ([p, c]) => [String(p), c]
    )
  ) : [];
}, Ae = (e) => {
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
      (n, p) => {
        navigator.geolocation.getCurrentPosition(n, p, {
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
const Ze = (e) => Object.entries(e ?? {}).filter(([, r]) => r.type === "geolocation").map(([r]) => r);
function Je(e, r = "create") {
  return Object.entries(e).filter(([, i]) => !(i.vmode === "edit" && r === "create")).map(([i, n]) => ({
    ...n,
    name: i
  }));
}
function le(e, r, i) {
  const n = Ie(r);
  n && i && at(i, n, e);
}
function et(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function tt(e) {
  return e.split(",").map((r) => r.trim()).map((r) => {
    const i = r.match(/^(.+?)\s+as\s+.+$/i);
    return i ? i[1]?.trim() : r;
  }).filter((r) => !!r);
}
const ae = (e) => {
  if (e == null || typeof e != "object")
    return { value: e, title: e };
  const r = {};
  for (const [i, n] of Object.entries(e)) {
    const p = i.includes(".") ? i.split(".").pop() : i;
    if (p in r) {
      console.warn(`Duplicate key after normalization: ${p}`);
      continue;
    }
    r[p] = n;
  }
  return r;
}, rt = "__form_persist__", Te = (e) => `${rt}:${e}`;
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
function at(e, r, i) {
  const n = Oe(e);
  localStorage.setItem(
    Te(e),
    JSON.stringify({
      ...n,
      [r]: i
    })
  );
}
function st(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function nt(e) {
  return Ge.includes(e) ? "image" : qe.includes(e) ? "video" : We.includes(e) ? "pdf" : Ye.includes(e) ? "text" : "other";
}
const $e = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, ie = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ye = async (e) => (await G.get(
  e.baseURL + e.dbopsGetHash,
  { headers: ie(e) }
)).data.refhash, ve = async (e, r) => (await G.post(
  e.baseURL + e.dbopsGetRefId,
  r,
  { headers: ie(e) }
)).data.refid, ot = {
  async fetch(e, r, i, n) {
    const p = await ye(e);
    let c = !1, g;
    i && (c = !0, g = i), c || (g = await ve(e, {
      operation: "fetch",
      source: r.source,
      fields: r.fields ?? {},
      datahash: p,
      srcid: n
    }));
    const d = await G.post(
      e.baseURL + e.dbopsFetch,
      { refid: g, datahash: p },
      { headers: ie(e) }
    );
    return d.data?.data ?? d.data;
  },
  async create(e, r, i) {
    const n = await ye(e), p = await ve(e, {
      operation: "create",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: i
    });
    return (await G.post(
      e.baseURL + e.dbopsCreate,
      { refid: p, fields: r.values, datahash: n },
      { headers: ie(e) }
    )).data;
  },
  async update(e, r, i) {
    const n = await ye(e), p = await ve(e, {
      operation: "update",
      source: r.source,
      fields: r.values,
      datahash: n,
      srcid: i
    });
    return (await G.post(
      e.baseURL + e.dbopsUpdate,
      { refid: p, fields: r.values, datahash: n },
      { headers: ie(e) }
    )).data;
  }
};
async function me(e, r, i, n = void 0, p = void 0, c = {}) {
  try {
    let g = i;
    return g || (g = (await G({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: r ?? {}, srcid: p },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await G({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: g,
        filter: c,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (g) {
    throw g;
  }
}
async function Pe(e, r) {
  let i = r.previewPath ?? "/api/files/preview";
  const n = await G.get(
    `${r.baseURL}${i}?uri=${encodeURIComponent(e)}`,
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
  const i = e.baseURL + e.uploadURL;
  return Promise.all(
    Array.from(r).map(async (n) => {
      const p = new FormData();
      return p.append("file", n), (await G.post(i, p, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e.accessToken}`
        }
      })).data;
    })
  );
}
function lt({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: n,
  refid: p,
  module_refid: c = "menuManager.main",
  optionsOverride: g,
  setFieldOptions: d
}) {
  const [h, u] = U(!1), [F, m] = U(
    g ?? e.options ?? {}
  );
  se(null);
  const A = se(null), [E, v] = U(""), [I, C] = U(0), R = se(null), l = se(null), [b, y] = U(!1), N = se(E), $ = e.disabled === !0;
  Q(() => {
    N.current = E;
  }, [E]);
  const z = (o) => {
    if ($) {
      o.preventDefault(), l.current?.removeAttribute("open");
      return;
    }
    o.currentTarget.open || v("");
  };
  Q(() => {
    g && Object.keys(g).length !== 0 && m(g);
  }, [g]), Q(() => {
    const o = (x) => {
      l.current && !l.current.contains(x.target) && (l.current.open = !1, v(""));
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, []);
  const M = e.name;
  Q(() => {
    let o = !0;
    return (async () => {
      let j = e.valueKey ?? "value", T = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const L = Object.values(e.options);
          if (L.length && typeof L[0] == "string") {
            m(e.options);
            return;
          }
        }
        const w = (Array.isArray(e.options) ? e.options : [e.options]).map(ae), S = re(
          j,
          T,
          w,
          e.groupKey
          // auto-uses `category` if present
        );
        m(S);
        return;
      }
      const k = e?.source ?? {};
      if (e.type === "dataMethod") {
        const f = e.method, w = f ? i[f] : void 0;
        if (w)
          try {
            const S = await w(), L = Array.isArray(S?.data?.data) ? S.data.data : Array.isArray(S?.data) ? S.data : S;
            if (typeof L == "object" && !Array.isArray(L)) {
              const J = Object.values(L);
              if (J.length && typeof J[0] == "string") {
                m(L);
                return;
              }
            }
            const V = Array.isArray(L) ? L.map(ae) : [], B = re(j, T, V, e.groupKey);
            o && m(B);
          } catch (S) {
            console.error("Method execution failed:", S), o && m({});
          }
        else
          o && m({});
      }
      if (k.type === "api" && k.url)
        try {
          const f = await G({
            method: k.method || "GET",
            url: k.url,
            data: k.body ?? {},
            params: k.params ?? {},
            headers: k.headers ?? {}
          }), w = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f;
          if (typeof w == "object" && !Array.isArray(w)) {
            const V = Object.values(w);
            if (V.length && typeof V[0] == "string") {
              m(w);
              return;
            }
          }
          const S = Array.isArray(w) ? w.map(ae) : [], L = re(j, T, S, e.groupKey);
          o && m(L);
        } catch (f) {
          console.error("API execution failed:", f), o && m({});
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
              where: e.where ? p ? ee(e.where, { refid: p }) : e.where : void 0
            };
          }
          const w = await me(n, f, e?.queryid, void 0, c), S = Array.isArray(w?.data?.data) ? w.data.data : Array.isArray(w?.data) ? w.data : w;
          if (typeof S == "object" && !Array.isArray(S)) {
            const B = Object.values(S);
            if (B.length && typeof B[0] == "string") {
              m(S);
              return;
            }
          }
          const L = Array.isArray(S) ? S.map(ae) : [], V = re(j, T, L, e.groupKey);
          o && m(V);
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
    p,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey
  ]);
  const _ = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, P = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, s = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, O = fe(
    () => Ue(F),
    [F]
  ), H = O.length, D = fe(() => e.search || !E ? O : O.filter(
    ([, o]) => o.toLowerCase().includes(E.toLowerCase())
  ), [e.search, E, O]), Y = (o, x) => {
    if (l.current?.open === !0 || b === !0)
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
          r.setFieldValue(e.name, T), le(T, e, c);
        }
        l.current && (l.current.open = !1);
      } else o.key === "Escape" && (l.current.open = !1, v(""), y(!1));
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
        if (et(o)) {
          const f = o.src;
          if (!f || !n) return;
          const w = ee(f.where ?? {}, {
            refid: j
          }), S = {
            ...f,
            table: f.table,
            cols: f.columns,
            where: w
          }, { data: L } = await me(n, S, e?.queryid, void 0, c), V = Array.isArray(L?.data) ? L.data[0] : L?.data;
          V && o.target.split(",").map((B) => B.trim()).forEach((B) => {
            V[B] !== void 0 && r.setFieldValue(B, V[B]);
          });
        }
        for (const f of T) {
          const w = f.src;
          if (!f || typeof f != "object" || !w || typeof w != "object" || !n) continue;
          let S;
          if (!w.queryid) {
            if (!w.table || !w.columns)
              throw new Error("SQL query requires field.table");
            const _e = ee(w?.where ?? {}, {
              refid: j
            });
            S = {
              ...w,
              table: w.table,
              cols: w.columns,
              where: _e
            };
          }
          const { data: L } = await me(n, S, w?.queryid, j, c);
          let V = e.valueKey ?? "value", B = e.labelKey ?? "title";
          const J = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, ke = Array.isArray(J) ? J.map(ae) : [], ze = re(
            V,
            B,
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
    if (!e.search || !E.trim() || !e.table || !n) return;
    const o = tt(e.columns ?? ""), x = new AbortController(), j = setTimeout(async () => {
      try {
        let T;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const J = p ? ee(e.where ?? {}, {
            refid: p
          }) : e.where;
          T = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: J
          };
        }
        let k = {};
        Array.isArray(o) && o.forEach((J) => {
          k[J] = [E, "LIKE"];
        });
        let f = e.valueKey ?? "value", w = e.labelKey ?? "title";
        const { data: S } = await me(n, T, e?.queryid, void 0, c, k), L = Array.isArray(S?.data?.data) ? S.data.data : Array.isArray(S?.data) ? S.data : S, V = Array.isArray(L) ? L.map(ae) : [], B = re(
          f,
          w,
          V,
          e.groupKey
        );
        m(B);
      } catch (T) {
        if (G.isCancel(T)) return;
        console.error("Search fetch failed", T);
      }
    }, 500);
    return () => {
      clearTimeout(j), x.abort();
    };
  }, [E, p]);
  const q = async (o) => {
    if (o.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const x = await Le(n, o), j = e.multiple ? x.map((T) => T.path) : x[0]?.path;
      r.setFieldValue(
        M,
        j
      ), le(j, e, c);
    } catch (x) {
      console.error("File upload failed", x), r.setFieldError(M, "File upload failed");
    }
  }, X = async (o, x, j) => {
    const T = x[o];
    if (!T) return;
    const k = i?.[T];
    if (typeof k != "function") {
      console.error(`Method "${String(T)}" not found`);
      return;
    }
    try {
      await Promise.resolve(k(j));
    } catch (f) {
      console.error(`Method "${String(T)}" failed`, f);
    }
  }, Z = (o) => {
    if ($) return;
    const x = o.target.value;
    v(x), C(0), x.trim() ? y(!0) : (y(!1), r.setFieldValue(M, ""));
  }, te = (o) => {
    r.setFieldValue(M, o), le(o, e, c), v(""), y(!1), X("onChange", e, `${M}-${o}`);
  };
  function a(o) {
    const x = o.currentTarget.files;
    x && q(x);
  }
  return {
    setHighlightedIndex: C,
    executeFieldMethod: X,
    handleFileUpload: q,
    handleKeyDown: Y,
    handleToggle: z,
    setSearch: v,
    setOpen: y,
    setIsFocused: u,
    handleInputChange: Z,
    handleSelect: te,
    handlePersist: le,
    handleFileChange: a,
    optionCount: H,
    baseInputClasses: _,
    focusClasses: P,
    labelClasses: s,
    search: E,
    highlightedIndex: I,
    options: F,
    isDisabled: $,
    key: M,
    filteredOptions: D,
    open: b,
    listRef: R,
    inputRef: A,
    detailsRef: l,
    isFocused: h
  };
}
const it = ({ fileUrl: e, category: r }) => e ? r === "image" ? /* @__PURE__ */ t.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : r === "pdf" || r === "text" ? /* @__PURE__ */ t.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : r === "video" ? /* @__PURE__ */ t.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ t.jsx("source", { src: e }) }) : /* @__PURE__ */ t.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ t.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ t.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function ct(e) {
  const r = $e[e] ?? $e.other;
  return /* @__PURE__ */ t.jsx("i", { className: `${r} text-2xl text-gray-600` });
}
const ut = ({ filePath: e, sqlOpsUrls: r }) => {
  const [i, n] = U(null), [p, c] = U(!1), g = st(e), d = nt(g);
  Q(() => {
    if (!r || d !== "image" && !p) return;
    let u = !0, F = null;
    return Pe(e, r).then((m) => {
      u && (F = m, n(m));
    }), () => {
      u = !1, F && URL.revokeObjectURL(F);
    };
  }, [d, p, e, r]);
  let h = e.split("/").pop();
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    d === "image" && i ? /* @__PURE__ */ t.jsx(
      "img",
      {
        src: i,
        alt: h,
        title: "Click to preview",
        onClick: () => c(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ t.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => c(!0),
        onKeyDown: (u) => u.key === "Enter" && c(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          ct(d),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: h })
        ]
      }
    ),
    p && /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => c(!1),
          children: "✕"
        }
      ),
      i ? /* @__PURE__ */ t.jsx(it, { fileUrl: i, category: d }) : /* @__PURE__ */ t.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Fe({
  field: e,
  isDisabled: r,
  handleToggle: i,
  detailsRef: n,
  handleKeyDown: p,
  valueArray: c,
  labelClasses: g,
  listRef: d,
  search: h,
  filteredOptions: u,
  highlightedIndex: F,
  setSearch: m,
  formik: A,
  setHighlightedIndex: E,
  executeFieldMethod: v,
  handlePersist: I,
  module_refid: C,
  options: R
}) {
  const l = e.name;
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsxs("label", { className: g, children: [
      e.label,
      e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t.jsxs(
      "details",
      {
        className: `relative w-full ${r ? " opacity-70" : ""}`,
        onToggle: i,
        ref: n,
        onKeyDown: (b) => {
          r || p(b, !1);
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
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: c?.length > 0 ? c.map((b) => je(R, b) ?? b).join(", ") : `Select ${e.label}` }),
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
                onChange: (b) => {
                  r || (m(b.target.value), E(0));
                },
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
              }
            ) }),
            u.length > 0 ? u.map(([b, y], N) => /* @__PURE__ */ t.jsxs(
              "label",
              {
                htmlFor: `${l}-${b}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${c?.includes(b) ? "bg-indigo-50 text-indigo-600 font-medium" : F === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      id: `${l}-${b}`,
                      type: "checkbox",
                      checked: c?.includes(b),
                      onChange: ($) => {
                        const z = $.target.checked ? [...c, b] : c?.filter((M) => M !== b);
                        A.setFieldValue(l, z), I(z, e, C), v("onChange", e, `${l}-${b}`);
                      },
                      onBlur: A.handleBlur,
                      disabled: r,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  y
                ]
              },
              b
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ]
      }
    ),
    A.touched[l] && A.errors[l] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(A.errors[l]) })
  ] });
}
function dt({ filePath: e, field_name: r, sqlOpsUrls: i }) {
  const [n, p] = U(null);
  return Q(() => {
    if (!open || !i) return;
    let c = !0, g = null;
    return Pe(e, i).then((d) => {
      c && (g = d, p(d));
    }), () => {
      c = !1, g && URL.revokeObjectURL(g);
    };
  }, [open, e, i]), n ? /* @__PURE__ */ t.jsx(
    "img",
    {
      alt: r,
      title: r,
      src: n,
      className: "h-24 w-24 object-cover rounded border border-dashed  cursor-pointer hover:opacity-90"
    }
  ) : null;
}
function Me({
  formik: e,
  field: r,
  sqlOpsUrls: i,
  module_refid: n
}) {
  let p = r?.name;
  const c = se(null), g = async (d) => {
    const h = d.currentTarget.files;
    if (!(!h || h.length === 0))
      try {
        const u = await Le(i, h), F = r.multiple ? u.map((m) => m.path) : u[0]?.path;
        e.setFieldValue(
          p,
          F
        ), le(F, r, n);
      } catch (u) {
        console.error("File upload failed", u), e.setFieldError(p, "File upload failed");
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
        onChange: g
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => c.current?.click(),
        children: e.values[p] ? /* @__PURE__ */ t.jsx(dt, { field_name: p, filePath: e.values[p], sqlOpsUrls: i }) : /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center h-full text-gray-400", children: /* @__PURE__ */ t.jsx("i", { className: "fa-solid fa-user" }) })
      }
    )
  ] });
}
function ht() {
  return new Promise((e) => {
    if (window.tinymce) {
      e();
      return;
    }
    const r = setInterval(() => {
      window.tinymce && (clearInterval(r), e());
    }, 50);
  });
}
function pt({
  value: e,
  onChange: r,
  disabled: i = !1
}) {
  const [n, p] = U(!1);
  Q(() => {
    let g = !1;
    return ht().then(() => {
      g || p(!0);
    }), () => {
      g = !0;
    };
  }, []);
  const c = fe(
    () => ({
      height: 500,
      menubar: !1,
      statusbar: !1,
      branding: !1,
      promotion: !1,
      // IMPORTANT: host app provides CSS
      skin: !1,
      content_css: !1,
      plugins: ["lists", "link", "image", "table", "code"],
      toolbar: "undo redo | bold italic underline | bullist numlist | table | link image | code",
      table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
      content_style: `
        body {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
        }
      `
    }),
    []
  );
  return n ? /* @__PURE__ */ t.jsx(
    De,
    {
      licenseKey: "gpl",
      value: e,
      readonly: i,
      onEditorChange: r,
      init: c
    }
  ) : /* @__PURE__ */ t.jsx("div", { className: "p-3 text-sm text-gray-400 border rounded-lg", children: "Loading editor…" });
}
function he({
  field: e,
  formik: r,
  methods: i = {},
  sqlOpsUrls: n,
  refid: p,
  module_refid: c = "menuManager.main",
  optionsOverride: g,
  setFieldOptions: d
}) {
  const {
    setHighlightedIndex: h,
    executeFieldMethod: u,
    handleFileUpload: F,
    handleKeyDown: m,
    handleToggle: A,
    setSearch: E,
    setOpen: v,
    setIsFocused: I,
    handleInputChange: C,
    handleSelect: R,
    handlePersist: l,
    optionCount: b,
    baseInputClasses: y,
    focusClasses: N,
    labelClasses: $,
    search: z,
    highlightedIndex: M,
    options: _,
    isDisabled: P,
    key: s,
    filteredOptions: O,
    open: H,
    listRef: D,
    detailsRef: Y,
    isFocused: q
  } = lt({
    field: e,
    formik: r,
    methods: i,
    sqlOpsUrls: n,
    refid: p,
    module_refid: c,
    ...g && { optionsOverride: g },
    ...d && { setFieldOptions: d }
  }), X = (Z) => Z.icon ? /* @__PURE__ */ t.jsx("i", { className: Z.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const a = r.values[s] ?? "", o = z !== "" ? z : je(_, a) ?? String(a ?? "");
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: `${y} ${N}`,
            value: o,
            placeholder: e.placeholder || "Type to search...",
            onChange: C,
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (x) => {
              if (x.key === "Enter") {
                if (x.preventDefault(), O[M]) {
                  const [j] = O[M];
                  r.setFieldValue(s, j), l(j, e, c);
                } else z.trim() && (r.setFieldValue(s, z.trim()), l(z.trim(), e, c));
                v(!1);
                return;
              }
              m(x, !0);
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
                  ${M === T ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => R(x),
                children: j
              },
              x
            )) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${o}" ` })
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
            handleToggle: A,
            detailsRef: Y,
            handleKeyDown: m,
            valueArray: a,
            labelClasses: $,
            listRef: D,
            search: z,
            filteredOptions: O,
            highlightedIndex: M,
            setSearch: E,
            formik: r,
            executeFieldMethod: u,
            setHighlightedIndex: h,
            handlePersist: l,
            module_refid: c,
            options: _
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "details",
          {
            className: `relative w-full ${P ? "opacity-70" : ""}`,
            onToggle: A,
            ref: Y,
            onKeyDown: (a) => {
              P || m(a, !0);
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
                    /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: r.values[s] ? je(_, r.values[s]) ?? "Select option" : `Select ${e.label}` }),
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
                      E(a.target.value), h(0);
                    },
                    onKeyDown: (a) => m(a, !0),
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
                      a.preventDefault(), a.stopPropagation(), r.setFieldValue(s, ""), l("", e, c), Y.current?.removeAttribute("open"), E("");
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
                      j.preventDefault(), j.stopPropagation(), r.setFieldValue(s, a), l(a, e, c), Y.current?.removeAttribute("open"), E(""), h(0), u("onChange", e, `${s}-${a}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${r.values[s] === a ? "bg-indigo-50 text-indigo-600 font-medium" : M === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
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
    case "richtextarea":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx(
          pt,
          {
            value: r.values[s] ?? "",
            disabled: P,
            onChange: (a) => {
              r.setFieldValue(s, a), l(a, e, c), u("onChange", e, s);
            }
          }
        ),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsx(
            "textarea",
            {
              id: s,
              className: `${y} ${N} min-h-[120px] resize-none`,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              placeholder: e.placeholder,
              disabled: P
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
            handleToggle: A,
            detailsRef: Y,
            handleKeyDown: m,
            valueArray: a,
            labelClasses: $,
            listRef: D,
            search: z,
            filteredOptions: O,
            highlightedIndex: M,
            setSearch: E,
            formik: r,
            executeFieldMethod: u,
            setHighlightedIndex: h,
            handlePersist: l,
            module_refid: c,
            options: _
          }
        );
      }
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              className: `${y} ${N} appearance-none ${P ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => I(!0),
              name: s,
              id: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              disabled: P,
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                !Ae(_) && Object.entries(_).map(([a, o]) => /* @__PURE__ */ t.jsx("option", { value: a, className: "py-2", children: o }, a)),
                Ae(_) && Object.entries(_).map(([a, o]) => /* @__PURE__ */ t.jsx("optgroup", { label: a, children: Object.entries(o).map(([x, j]) => /* @__PURE__ */ t.jsx("option", { value: x, children: j }, x)) }, a))
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
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: `flex ${b > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(_ || {}).map(([a, o]) => /* @__PURE__ */ t.jsxs(
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
                    r.setFieldValue(s, x.target.value), l(x.target.value, e, c), u("onChange", e, `${s}-${a}`);
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
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
                    const T = j.target.checked ? [...a, o] : a.filter((k) => k !== o);
                    r.setFieldValue(s, T), l(T, e, c), u("onChange", e, `${s}-${o}`);
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
      const a = r.values[s], o = z.trim(), x = Array.isArray(_) ? _ : Object.entries(_ || {}).map(([f, w]) => ({ value: f, label: w })), j = (f) => {
        if (!P && f && !a.includes(f)) {
          let w = [...a, f];
          r.setFieldValue(s, w), l(w, e, c), E("");
        }
      }, T = (f) => {
        let w = a.filter((S) => S !== f);
        r.setFieldValue(
          s,
          w
        ), l(w, e, c);
      }, k = (f) => x.find((w) => w.value === f)?.label ?? f;
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `${y} 
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
                    /* @__PURE__ */ t.jsx("span", { className: "text-indigo-700", children: k(f) }),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (w) => {
                          w.stopPropagation(), P || T(f);
                        },
                        onMouseDown: (w) => w.preventDefault(),
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
                  onChange: (f) => E(f.target.value),
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
      const Z = e.multiple === !0, te = Array.isArray(r.values[s]) ? r.values[s] : r.values[s] ? [r.values[s]] : [];
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
              className: `${y} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              multiple: Z,
              onChange: (a) => {
                const o = a.currentTarget.files;
                o && F(o), u("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder,
              disabled: P
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        te.map((a) => {
          const o = a?.split("/").pop();
          return /* @__PURE__ */ t.jsx(ut, { sqlOpsUrls: n, filePath: a }, o);
        }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "json":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
                r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              onBlur: r.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: P,
              className: `${y} ${N} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    case "date":
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
                    r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
                  },
                  onBlur: r.handleBlur,
                  placeholder: e.placeholder,
                  disabled: P,
                  className: `${y} ${N} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`,
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
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
              className: `${y} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: P,
              min: e.min ?? 1,
              max: e.max
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
    default:
      return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs("label", { className: $, children: [
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
              className: `${y} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => I(!0),
              name: s,
              value: r.values[s],
              onBlur: r.handleBlur,
              onChange: (a) => {
                r.setFieldValue(s, a.target.value), l(a.target.value, e, c), u("onChange", e, `${s}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: P,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${q ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        r.touched[s] && r.errors[s] && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-red-500", children: String(r.errors[s]) })
      ] });
  }
}
function Re({ title: e, children: r, isFirst: i }) {
  const [n, p] = U(i);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ t.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => p(!n),
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
  methods: i = {},
  sqlOpsUrls: n,
  refid: p,
  module_refid: c,
  fieldOptions: g,
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
        refid: p,
        module_refid: c,
        sqlOpsUrls: n,
        field: h,
        formik: r,
        methods: i,
        setFieldOptions: d,
        ...g?.[h.name] ? { optionsOverride: g[h.name] } : {}
      },
      h?.name || u
    ) }, h.name)) }) })
  ] }) });
}
function mt({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: n = (F) => {
  },
  onCancel: p = () => {
  },
  methods: c = {},
  components: g = {},
  sqlOpsUrls: d,
  refid: h,
  module_refid: u
}) {
  const { common: F = [], ...m } = r, [A, E] = W.useState({}), v = (l, b) => {
    E((y) => ({
      ...y,
      [l]: b
    }));
  }, { initialValues: I, validationSchema: C } = W.useMemo(() => {
    const l = {}, b = {};
    return Object.values(r).flat().forEach((y) => {
      ce([y], l, b, i, u, d?.operation);
    }), {
      initialValues: l,
      validationSchema: b
    };
  }, [r, i, u, d?.operation]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: K.object().shape(C),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
      F.length > 0 && /* @__PURE__ */ t.jsx(Re, { title: "Common", isFirst: !0, children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: h,
          module_refid: u,
          sqlOpsUrls: d,
          fields: F,
          formik: R,
          methods: c,
          setFieldOptions: v,
          fieldOptions: A
        }
      ) }),
      m && Object.entries(m).map(([l, b], y) => /* @__PURE__ */ t.jsx(Re, { title: l, isFirst: y === 0 && F.length === 0, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: b.map((N, $) => ge(N.hidden) || N.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${ue[de(Number(N.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ t.jsx(
            he,
            {
              refid: h,
              module_refid: u,
              sqlOpsUrls: d,
              components: g,
              field: N,
              formik: R,
              methods: c,
              setFieldOptions: v,
              ...A[N.name] ? { optionsOverride: A[N.name] } : {}
            },
            N.name
          )
        },
        N?.name ?? `field-${$}`
      )) }) }, l))
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: p, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function xt({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: n = (m) => {
  },
  onCancel: p = () => {
  },
  methods: c = {},
  components: g = {},
  sqlOpsUrls: d,
  widget: h,
  refid: u,
  module_refid: F
}) {
  const { common: m = [], ...A } = r, E = Object.keys(A), [v, I] = W.useState(0), [C, R] = W.useState({}), l = (s, O) => {
    R((H) => ({
      ...H,
      [s]: O
    }));
  }, { initialValues: b, validationSchema: y, stepperSchemas: N } = W.useMemo(() => {
    const s = {}, O = {}, H = {};
    return h ? Object.entries(r).forEach(([D, Y]) => {
      const q = {};
      ce(Y, s, q, i, F, d?.operation), H[D] = q;
    }) : Object.entries(r).forEach(([D, Y]) => {
      ce(Y, s, O, i, F, d?.operation);
    }), {
      initialValues: s,
      validationSchema: O,
      stepperSchemas: H
    };
  }, [r, i, h, F, d?.operation]), $ = E[v] ?? null, z = h && $ ? N[$] ?? {} : y, M = xe({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: K.object().shape(z),
    onSubmit: (s) => {
      h ? (v < E.length - 1 && I((O) => O + 1), v === E.length - 1 && n(s)) : n(s);
    }
  }), _ = async (s) => {
    if (s.preventDefault(), !h) {
      const O = await M.validateForm();
      if (Object.keys(O).length > 0) {
        alert("Please fill all required fields before submitting."), M.setTouched(
          Object.keys(O).reduce((H, D) => ({ ...H, [D]: !0 }), {})
        );
        return;
      }
    }
    M.handleSubmit(s);
  }, P = () => {
    I((s) => s > 0 ? s - 1 : s);
  };
  return /* @__PURE__ */ t.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: _, className: "w-full mx-auto", children: [
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: /* @__PURE__ */ t.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      m.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "p-3", children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: u,
          module_refid: F,
          sqlOpsUrls: d,
          fields: m,
          formik: M,
          methods: c,
          setFieldOptions: l,
          fieldOptions: C
        }
      ) }),
      /* @__PURE__ */ t.jsx("nav", { className: "relative flex bg-gray-100", children: E.map((s, O) => /* @__PURE__ */ t.jsx(
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
          /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: $ && A[$]?.map((s, O) => ge(s.hidden) || s.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `col-span-12  ${ue[de(Number(s.width))] || "lg:col-span-4"}`,
              children: /* @__PURE__ */ t.jsx(
                he,
                {
                  refid: u,
                  module_refid: F,
                  sqlOpsUrls: d,
                  field: s,
                  formik: M,
                  methods: c,
                  components: g,
                  setFieldOptions: l,
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
              /* @__PURE__ */ t.jsx("button", { onClick: p, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
              /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: h ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsxs("span", { children: [
                "Tab ",
                v + 1,
                " of ",
                E.length
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: E.map((s, O) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${O === v ? "bg-action w-6" : "bg-gray-300"}`
              },
              O
            )) })
          ] }) })
        ]
      },
      E[v]
    )
  ] }) });
}
function gt({
  title: e,
  fields: r,
  data: i,
  onSubmit: n = (u) => {
  },
  onCancel: p = () => {
  },
  methods: c = {},
  sqlOpsUrls: g,
  refid: d,
  module_refid: h
}) {
  const u = Je(r, g?.operation), [F, m] = W.useState({}), A = (l, b) => {
    m((y) => ({
      ...y,
      [l]: b
    }));
  }, { commonFields: E, otherFields: v } = W.useMemo(() => u.reduce(
    (l, b) => (b.group === "common" ? l.commonFields.push(b) : l.otherFields.push(b), l),
    { commonFields: [], otherFields: [] }
  ), [u]), { initialValues: I, validationSchema: C } = W.useMemo(() => {
    const l = {}, b = {};
    return u.forEach((y) => {
      ce([y], l, b, i, h, g?.operation);
    }), {
      initialValues: l,
      validationSchema: b
    };
  }, [u, i]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: K.object().shape(C),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4  mx-auto", children: [
    E.length > 0 && /* @__PURE__ */ t.jsx(
      be,
      {
        refid: d,
        module_refid: h,
        sqlOpsUrls: g,
        fields: E,
        formik: R,
        methods: c,
        setFieldOptions: A,
        fieldOptions: F
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((l, b) => ge(l.hidden) || l.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${ue[de(Number(l.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ t.jsx(
          he,
          {
            refid: d,
            module_refid: h,
            sqlOpsUrls: g,
            field: l,
            formik: R,
            methods: c,
            setFieldOptions: A,
            ...F[l.name] ? { optionsOverride: F[l.name] } : {}
          }
        )
      },
      l?.name ?? `field-${b}`
    )) }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: p, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
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
function bt({
  title: e,
  groupedFields: r,
  data: i,
  onSubmit: n = (F) => {
  },
  onCancel: p = () => {
  },
  methods: c = {},
  components: g = {},
  sqlOpsUrls: d,
  refid: h,
  module_refid: u
}) {
  const { common: F = [], ...m } = r, [A, E] = W.useState({}), v = (l, b) => {
    E((y) => ({
      ...y,
      [l]: b
    }));
  }, { initialValues: I, validationSchema: C } = W.useMemo(() => {
    const l = {}, b = {};
    return Object.values(r).flat().forEach((y) => {
      ce([y], l, b, i, u, d?.operation);
    }), {
      initialValues: l,
      validationSchema: b
    };
  }, [r, i, u, d?.operation]), R = xe({
    initialValues: I,
    enableReinitialize: !0,
    validationSchema: K.object().shape(C),
    onSubmit: (l) => {
      n(l);
    }
  });
  return /* @__PURE__ */ t.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ t.jsxs("form", { onSubmit: R.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
      F.length > 0 && /* @__PURE__ */ t.jsx(Ce, { title: "Common", children: /* @__PURE__ */ t.jsx(
        be,
        {
          refid: h,
          module_refid: u,
          sqlOpsUrls: d,
          fields: F,
          formik: R,
          methods: c,
          setFieldOptions: v,
          fieldOptions: A
        }
      ) }),
      m && Object.entries(m).map(([l, b], y) => /* @__PURE__ */ t.jsx(Ce, { title: l, children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-4", children: b.map((N, $) => ge(N.hidden) || N.type === "geolocation" ? null : /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${ue[de(Number(N.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ t.jsx(
            he,
            {
              refid: h,
              module_refid: u,
              sqlOpsUrls: d,
              components: g,
              field: N,
              formik: R,
              methods: c,
              setFieldOptions: v,
              ...A[N.name] ? { optionsOverride: A[N.name] } : {}
            },
            N.name
          )
        },
        N?.name ?? `field-${$}`
      )) }) }, l))
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ t.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", onClick: p, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ t.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function wt({
  formJson: e,
  methods: r = {},
  userid: i = null,
  onCancel: n = () => {
  },
  components: p = {},
  callback: c = () => {
  },
  initialvalues: g = {}
}) {
  let d = He(e);
  const h = e.endPoints, u = e?.source?.refid, F = Qe(e?.fields ?? {}, h?.operation), [m, A] = W.useState(g), E = W.useMemo(() => Ze(e.fields), [e.fields]);
  W.useEffect(() => {
    let C = !0;
    return (async () => {
      const l = e?.source ?? {};
      if (!l?.type) {
        C && A({});
        return;
      }
      if (l.type === "method") {
        const b = l.method, y = b ? r[b] : void 0;
        if (y)
          try {
            const N = await Promise.resolve(y());
            C && A(N ?? {});
          } catch (N) {
            console.error("Method execution failed:", N), C && A({});
          }
        else
          C && A({});
      }
      if (l.type === "api" && h?.operation !== "create")
        try {
          const b = await G({
            method: l.method || "GET",
            url: l.url ?? "",
            data: l.body ?? {},
            params: l.params ?? {},
            headers: l.headers ?? {}
          });
          C && A(b.data ?? {});
        } catch (b) {
          console.error("API fetch failed:", b), C && A({});
        }
      if (l.type === "sql" && l.refid && l.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && l.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const b = await ot.fetch(h, {
            source: {
              ...l,
              table: l.table,
              columns: l.columns,
              where: ee(l.where, {
                refid: u
              })
            },
            fields: Ee(e.fields, h.operation)
          }, l?.dbopsid, e?.module_refid);
          C && A(b);
        } catch (b) {
          console.error("API fetch failed:", b);
        }
      }
    })(), () => {
      C = !1;
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
  const v = async (C) => {
    const R = e?.source ?? {};
    let l = null;
    if (E.length > 0)
      try {
        l = await Xe();
      } catch (y) {
        console.error("catch fetchGeolocation", y), l = null;
      }
    const b = {
      ...C,
      ...Object.fromEntries(
        E.map((y) => [y, l])
      )
    };
    if (R.type === "method") {
      const y = R.method, N = y ? r[y] : void 0;
      if (N)
        try {
          const $ = await Promise.resolve(N(b));
          if (c?.($), r?.handleActions) {
            let z = h?.operation === "update" ? u : $?.data?.refid;
            const M = e?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            r.handleActions(M);
          }
        } catch ($) {
          c?.($), console.error("Method execution failed:", $);
        }
    }
    if (R.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const y = await G({
          method: R.method || "POST",
          url: h.baseURL + R.endpoint,
          data: b ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        if (c?.(y), r?.handleActions) {
          let N = h.operation === "update" ? u : y?.data?.refid;
          const $ = e?.gotolink?.replace(
            "{hashid}",
            String(N)
          );
          r.handleActions($);
        }
      } catch (y) {
        c?.(y), console.error("API fetch failed:", y);
      }
    }
    if (R.type === "sql") {
      const y = e.endPoints;
      if (!y) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let N = !1, $;
        R?.dbopsid && (N = !0, $ = R?.dbopsid);
        const z = await G({
          method: "GET",
          url: y.baseURL + y.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${y?.accessToken}`
          }
        });
        if (!N) {
          let _ = {
            ...R
          };
          R.where && (_ = {
            ...R,
            where: ee(R.where, {
              refid: u
            })
          }), $ = (await G({
            method: "POST",
            url: y.baseURL + y.dbopsGetRefId,
            data: {
              operation: y.operation,
              source: _,
              fields: Ee(e.fields, y.operation),
              forcefill: e.forcefill,
              datahash: z.data.refhash,
              srcid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }))?.data.refid;
        }
        const M = await G({
          method: "POST",
          url: y.baseURL + y[y.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: $,
            fields: b,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${y?.accessToken}`
          }
        });
        if (c?.(M), r?.handleActions) {
          let _ = y.operation === "update" ? u : M?.data?.refid;
          const P = e?.gotolink?.replace(
            "{hashid}",
            String(_)
          );
          r.handleActions(P);
        }
      } catch (N) {
        c?.(N), console.error("API fetch failed:", N);
      }
    }
  }, I = {
    accordion: /* @__PURE__ */ t.jsx(
      mt,
      {
        title: e?.title ?? "",
        groupedFields: F,
        data: m,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: p,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    cards: /* @__PURE__ */ t.jsx(
      bt,
      {
        title: e?.title ?? "",
        groupedFields: F,
        data: m,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: p,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    tab: /* @__PURE__ */ t.jsx(
      xt,
      {
        title: e?.title ?? "",
        groupedFields: F,
        data: m,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: p,
        widget: e?.widget,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    ),
    simple: /* @__PURE__ */ t.jsx(
      gt,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: m,
        onSubmit: v,
        onCancel: n,
        methods: r,
        components: p,
        sqlOpsUrls: h,
        refid: u,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "relative", children: I[d] });
}
export {
  wt as LogiksForm
};
