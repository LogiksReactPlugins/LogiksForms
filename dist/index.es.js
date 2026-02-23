import he, { useState as Te, useRef as Ct, useEffect as Se, useMemo as an } from "react";
import ne from "axios";
import * as le from "yup";
import { useFormik as Tn } from "formik";
import { useEditor as Xi, EditorContent as Qi } from "@tiptap/react";
import Zi from "@tiptap/starter-kit";
var Yt = { exports: {} }, vt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function el() {
  if (_r) return vt;
  _r = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: t,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return vt.Fragment = e, vt.jsx = n, vt.jsxs = n, vt;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function tl() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === W ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case R:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case p:
            return "Portal";
          case v:
            return (A.displayName || "Context") + ".Provider";
          case x:
            return (A._context.displayName || "Context") + ".Consumer";
          case k:
            var S = A.render;
            return A = A.displayName, A || (A = S.displayName || S.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case z:
            return S = A.displayName || null, S !== null ? S : t(A.type) || "Memo";
          case F:
            S = A._payload, A = A._init;
            try {
              return t(A(S));
            } catch {
            }
        }
      return null;
    }
    function e(A) {
      return "" + A;
    }
    function n(A) {
      try {
        e(A);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var N = S.error, M = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return N.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), e(A);
      }
    }
    function r(A) {
      if (A === g) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === F)
        return "<...>";
      try {
        var S = t(A);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var A = w.A;
      return A === null ? null : A.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(A) {
      if (V.call(A, "key")) {
        var S = Object.getOwnPropertyDescriptor(A, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, S) {
      function N() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: N,
        configurable: !0
      });
    }
    function a() {
      var A = t(this.type);
      return fe[A] || (fe[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, S, N, M, O, H, X, I) {
      return N = H.ref, A = {
        $$typeof: h,
        type: A,
        key: S,
        props: H,
        _owner: O
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function u(A, S, N, M, O, H, X, I) {
      var j = S.children;
      if (j !== void 0)
        if (M)
          if (ie(j)) {
            for (M = 0; M < j.length; M++)
              d(j[M]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(j);
      if (V.call(S, "key")) {
        j = t(A);
        var $ = Object.keys(S).filter(function(_) {
          return _ !== "key";
        });
        M = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", $e[j + M] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          j,
          $,
          j
        ), $e[j + M] = !0);
      }
      if (j = null, N !== void 0 && (n(N), j = "" + N), i(S) && (n(S.key), j = "" + S.key), "key" in S) {
        N = {};
        for (var P in S)
          P !== "key" && (N[P] = S[P]);
      } else N = S;
      return j && l(
        N,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        j,
        H,
        O,
        s(),
        N,
        X,
        I
      );
    }
    function d(A) {
      typeof A == "object" && A !== null && A.$$typeof === h && A._store && (A._store.validated = 1);
    }
    var f = he, h = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), v = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), w = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ie = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(A) {
        return A();
      }
    };
    var q, fe = {}, Oe = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), ze = U(r(o)), $e = {};
    St.Fragment = g, St.jsx = function(A, S, N, M, O) {
      var H = 1e4 > w.recentlyCreatedOwnerStacks++;
      return u(
        A,
        S,
        N,
        !1,
        M,
        O,
        H ? Error("react-stack-top-frame") : Oe,
        H ? U(r(A)) : ze
      );
    }, St.jsxs = function(A, S, N, M, O) {
      var H = 1e4 > w.recentlyCreatedOwnerStacks++;
      return u(
        A,
        S,
        N,
        !0,
        M,
        O,
        H ? Error("react-stack-top-frame") : Oe,
        H ? U(r(A)) : ze
      );
    };
  }()), St;
}
var qr;
function nl() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Yt.exports = el() : Yt.exports = tl()), Yt.exports;
}
var m = nl();
const rl = ["jpg", "jpeg", "png", "gif", "svg", "webp"], sl = ["mp4", "webm", "ogg"], ol = ["txt", "json", "csv"], il = ["pdf"];
function ll(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
function al(t, e = "create", n = "Info") {
  const r = {};
  let s = !1;
  if (Object.values(t).forEach((i) => {
    i.group && (s = !0);
  }), !s) return {};
  const o = [];
  return Object.entries(t).forEach(([i, l]) => {
    if (l.vmode === "edit" && e === "create") return;
    const a = { ...l, name: i };
    if (l.group) {
      const c = l.group;
      r[c] || (r[c] = []), r[c].push(a);
    } else
      o.push(a);
  }), o.length > 0 ? {
    [n]: o,
    ...r
  } : r;
}
function Jr(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const It = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? Zs(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? Qs(l) : null;
    o === "create" && u && i[u] !== void 0 && c == null && (c = i[u]), c == null && (c = l.default), l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    l.type === "file" ? d = l.multiple ? le.array().of(le.mixed()) : le.mixed() : l.multiple === !0 || l.type === "tags" ? d = le.array().of(le.string()) : l.type === "email" ? d = le.string().email("Invalid email") : l.type === "number" ? d = le.number().typeError("Must be a number") : l.type === "json" ? d = le.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = le.string().nullable() : d = le.string(), l?.validate && Object.entries(l.validate).forEach(([f, h]) => {
      switch (f) {
        case "email":
          h && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          d = d.matches(
            new RegExp(h),
            l?.error_message || `Must match pattern: ${h}`
          );
          break;
        case "date":
          d = d.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (p) => {
              if (p == null || p === "") return !0;
              const g = p.replace(/-/g, "/"), [y, b, x] = g.split("/");
              if (!y || !b || !x) return !1;
              const v = /* @__PURE__ */ new Date(`${x}-${b}-${y}`);
              return !isNaN(v.getTime());
            }
          );
          break;
        case "time":
          d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          d = le.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = le.number().typeError("Must be a decimal").transform((p, g) => {
            if (g == null || g === "") return;
            const y = Number(g);
            if (isNaN(y)) return p;
            if (typeof p == "number" && !isNaN(p)) {
              const b = Number(p);
              return Number.isInteger(b) ? Number(y.toFixed(b)) : y;
            }
            return y;
          });
          break;
        case "alphanumeric":
          d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          d = d.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          d = d.transform(
            (p) => p && p.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (p) => p && p.toLowerCase()
          );
          break;
        case "length-min": {
          const p = Number(h);
          isNaN(p) || (d = d.min(p, `Minimum length is ${p}`));
          break;
        }
        case "length-max": {
          const p = Number(h);
          isNaN(p) || (d = d.max(p, `Maximum length is ${p}`));
          break;
        }
      }
    }), l.required && (d = d.required(
      l.error_message || `${l.label || a} is required`
    )), n[a] = d;
  });
}, Wt = {
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
function Ht(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const Vt = (t) => t === !0 || t === "true", Pe = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => Pe(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    Pe(n, e),
    Pe(r, e)
  ])
) : t, ut = (t, e, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const a = l[t], c = l[e];
      a != null && c != null && (i[String(a)] = String(c));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", a = i[t], c = i[e];
    a == null || c == null || (o[l] || (o[l] = {}), o[l][String(a)] = String(c));
  }), o;
}, nr = (t, e) => {
  if (!t || e == null) return;
  const n = String(e);
  if (typeof Object.values(t)[0] == "string")
    return t[n];
  for (const s of Object.values(t))
    if (n in s)
      return s[n];
}, cl = (t) => {
  if (!t) return [];
  if (Array.isArray(t))
    return t.map(
      (r) => [
        String(r.value),
        String(r.title ?? r.label ?? r.value)
      ]
    );
  const e = Object.values(t);
  return e.length ? typeof e[0] == "string" ? Object.entries(t).map(([r, s]) => [String(r), s]) : Object.values(t).flatMap(
    (r) => Object.entries(r).map(
      ([s, o]) => [String(s), o]
    )
  ) : [];
}, Ur = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = Object.values(t)[0];
  return typeof e == "object" && e !== null && !Array.isArray(e);
};
async function ul() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const t = await new Promise(
      (r, s) => {
        navigator.geolocation.getCurrentPosition(r, s, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: e, longitude: n } = t.coords;
    return `${e},${n}`;
  } catch (t) {
    if (!(t instanceof GeolocationPositionError))
      throw new Error("Failed to get your location.");
    switch (t.code) {
      case t.PERMISSION_DENIED:
        throw new Error("Please allow location access in browser settings.");
      case t.POSITION_UNAVAILABLE:
        throw new Error(
          "Unable to detect your location. Try connecting to Wi-Fi."
        );
      case t.TIMEOUT:
        throw new Error("Your device took too long to fetch GPS position.");
      default:
        throw new Error("Failed to get your location.");
    }
  }
}
const dl = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function fl(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function Nt(t, e, n) {
  const r = Qs(e);
  r && n && gl(n, r, t);
}
function hl(t) {
  if (!t || typeof t != "object") return !1;
  const e = t.src;
  return typeof t.target == "string" && typeof e == "object" && e !== null && (e.type === "api" || typeof e.queryid == "string" || typeof e.table == "string" && typeof e.columns < "u");
}
function pl(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const Ge = (t) => {
  if (t == null || typeof t != "object")
    return { value: t, title: t };
  const e = {};
  for (const [n, r] of Object.entries(t)) {
    const s = n.includes(".") ? n.split(".").pop() : n;
    if (s in e) {
      console.warn(`Duplicate key after normalization: ${s}`);
      continue;
    }
    e[s] = r;
  }
  return e;
}, ml = "__form_persist__", Xs = (t) => `${ml}:${t}`;
function Qs(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Zs(t) {
  try {
    return JSON.parse(localStorage.getItem(Xs(t)) || "{}");
  } catch {
    return {};
  }
}
function gl(t, e, n) {
  const r = Zs(t);
  localStorage.setItem(
    Xs(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function yl(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function bl(t) {
  return rl.includes(t) ? "image" : sl.includes(t) ? "video" : il.includes(t) ? "pdf" : ol.includes(t) ? "text" : "other";
}
const Gr = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Tt = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Bn = async (t) => (await ne.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Tt(t) }
)).data.refhash, Ln = async (t, e) => (await ne.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: Tt(t) }
)).data.refid, xl = {
  async fetch(t, e, n, r) {
    const s = await Bn(t);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await Ln(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await ne.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: Tt(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await Bn(t), s = await Ln(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await ne.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Tt(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await Bn(t), s = await Ln(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await ne.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Tt(t) }
    )).data;
  }
};
async function Xt(t, e, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await ne({
      method: "POST",
      url: t.baseURL + t.registerQuery,
      data: { query: e ?? {}, srcid: s },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    })).data.queryid), await ne({
      method: "POST",
      url: t.baseURL + t.runQuery,
      data: {
        queryid: i,
        filter: o,
        refid: r,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    });
  } catch (i) {
    throw i;
  }
}
async function eo(t, e) {
  let n = e.previewPath ?? "/api/files/preview";
  const r = await ne.get(
    `${e.baseURL}${n}?uri=${encodeURIComponent(t)}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    }
  );
  return URL.createObjectURL(r.data);
}
async function to(t, e) {
  if (!t?.uploadURL)
    throw new Error("Upload URL missing");
  const n = t.baseURL + t.uploadURL;
  return Promise.all(
    Array.from(e).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await ne.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${t.accessToken}`
        }
      })).data;
    })
  );
}
function wl({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const [a, c] = Te(!1), [u, d] = Te(
    i ?? t.options ?? {}
  ), f = Ct(null), [h, p] = Te(""), [g, y] = Te(0), b = Ct(null), x = Ct(null), [v, k] = Te(!1), E = Ct(h), R = t.disabled === !0;
  Se(() => {
    E.current = h;
  }, [h]);
  const z = (N) => {
    if (R) {
      N.preventDefault(), x.current?.removeAttribute("open");
      return;
    }
    N.currentTarget.open || p("");
  };
  Se(() => {
    i && Object.keys(i).length !== 0 && d(i);
  }, [i]), Se(() => {
    const N = (M) => {
      x.current && !x.current.contains(M.target) && (x.current.open = !1, p(""));
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, []);
  const F = t.name;
  Se(() => {
    let N = !0;
    return (async () => {
      let O = t.valueKey ?? "value", H = t.labelKey ?? "title", X = t?.options;
      if (X && (Array.isArray(X) && X.length > 0 || !Array.isArray(X) && Object.keys(X).length > 0)) {
        if (typeof t.options == "object" && !Array.isArray(t.options)) {
          const _ = Object.values(t.options);
          if (_.length && typeof _[0] == "string") {
            d(t.options);
            return;
          }
        }
        const $ = (Array.isArray(t.options) ? t.options : [t.options]).map(Ge), P = ut(
          O,
          H,
          $,
          t.groupKey
          // auto-uses `category` if present
        );
        d(P);
        return;
      }
      const I = t?.source ?? {};
      if (t.type === "dataMethod") {
        const j = t.method, $ = j ? n[j] : void 0;
        if ($)
          try {
            const P = await $(), _ = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P.data.results) ? P.data.results : Array.isArray(P?.data) ? P.data : P;
            if (typeof _ == "object" && !Array.isArray(_)) {
              const Ut = Object.values(_);
              if (Ut.length && typeof Ut[0] == "string") {
                d(_);
                return;
              }
            }
            const xe = Array.isArray(_) ? _.map(Ge) : [], pe = ut(O, H, xe, t.groupKey);
            N && d(pe);
          } catch (P) {
            console.error("Method execution failed:", P), N && d({});
          }
        else
          N && d({});
      }
      if (I.type === "api" && I.endpoint)
        try {
          const j = {
            method: I.method || "GET",
            url: r?.baseURL + I.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...I.method === "GET" ? { params: { refid: I.refid } } : { data: { refid: I.refid } }
          }, $ = await ne(j), P = Array.isArray($.data?.results?.options) ? $.data?.results?.options : Array.isArray($?.data?.data) ? $.data.data : Array.isArray($.data?.results) ? $.data?.results : Array.isArray($?.data) ? $.data : $;
          if (console.log("rawItems", P), typeof P == "object" && !Array.isArray(P)) {
            const pe = Object.values(P);
            if (pe.length && typeof pe[0] == "string") {
              d(P);
              return;
            }
          }
          const _ = Array.isArray(P) ? P.map(Ge) : [], xe = ut(O, H, _, t.groupKey);
          N && d(xe);
        } catch (j) {
          console.error("API execution failed:", j), N && d({});
        }
      if (t.table || t.type === "dataSelector" || t.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j;
          if (t.type === "dataSelector")
            j = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: t.groupid ?? ""
              }
            };
          else if (!t.queryid) {
            if (!t.table || !t.columns) {
              console.error("Invalid SQL field config", t);
              return;
            }
            j = {
              table: t.table,
              cols: t.columns,
              where: t.where ? s ? Pe(t.where, { refid: s }) : t.where : void 0
            };
          }
          const $ = await Xt(r, j, t?.queryid, void 0, o), P = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $;
          if (typeof P == "object" && !Array.isArray(P)) {
            const pe = Object.values(P);
            if (pe.length && typeof pe[0] == "string") {
              d(P);
              return;
            }
          }
          const _ = Array.isArray(P) ? P.map(Ge) : [], xe = ut(O, H, _, t.groupKey);
          N && d(xe);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      N = !1;
    };
  }, [
    t.options,
    t.source,
    t.table,
    t.columns,
    t.where,
    s,
    t.queryid,
    t.groupKey,
    t.valueKey,
    t.labelKey
  ]);
  const K = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${R ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, W = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, V = an(
    () => cl(u),
    [u]
  ), ie = an(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !h.trim()) return null;
    const N = h.trim().toLowerCase();
    return V.find(([, M]) => M.trim().toLowerCase() === N);
  }, [t.type, h, V]), U = V.length, q = an(() => t.search || !h ? V : V.filter(
    ([, N]) => N.toLowerCase().includes(h.toLowerCase())
  ), [t.search, h, V]), fe = (N, M) => {
    if (x.current?.open === !0 || v === !0)
      if (N.key === "ArrowDown")
        N.preventDefault(), y(
          (O) => O + 1 < q.length ? O + 1 : 0
        );
      else if (N.key === "ArrowUp")
        N.preventDefault(), y(
          (O) => O - 1 >= 0 ? O - 1 : q.length - 1
        );
      else if (N.key === "Enter") {
        N.preventDefault();
        const [O] = q[g] || [];
        if (O) {
          let H = M ? O : [...e.values[t.name], O];
          e.setFieldValue(t.name, H), Nt(H, t, o);
        }
        x.current && (x.current.open = !1);
      } else N.key === "Escape" && (x.current.open = !1, p(""), k(!1));
  };
  Se(() => {
    b.current?.querySelector(
      `[data-index="${g}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [g]), Se(() => {
    g >= q.length && y(0);
  }, [q, g]), Se(() => {
    const N = t.autocomplete, M = t.ajaxchain;
    if (!N && !M) return;
    const O = e.values[t.name];
    if (console.log("value", O), !O) return;
    const H = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (hl(N)) {
          const I = N.src;
          if (!I || !r) return;
          let j;
          if ("type" in I && I.type === "api") {
            const P = {
              method: I.method || "GET",
              url: r?.baseURL + I.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...I.method === "GET" ? { params: { refid: O } } : { data: { refid: O } }
            }, { data: _ } = await ne(P);
            j = Array.isArray(_?.data?.results.options) ? _?.data?.results.options[0] : Array.isArray(_?.data?.data) ? _.data.data[0] : Array.isArray(_?.data?.results) ? _.data.results[0] : Array.isArray(_?.data) ? _.data[0] : _?.data;
          } else {
            let P;
            if (!I.queryid) {
              if (!I.table || !I.columns)
                throw new Error("SQL query requires field.table");
              const xe = Pe(I?.where ?? {}, {
                refid: O
              });
              P = {
                ...I,
                table: I.table,
                cols: I.columns,
                where: xe
              };
            }
            const { data: _ } = await Xt(r, P, I?.queryid, O, o);
            j = Array.isArray(_?.data?.data) ? _.data.data[0] : Array.isArray(_?.data) ? _.data[0] : _?.data;
          }
          let $ = Ge(j);
          $ && N.target.split(",").map((P) => P.trim()).forEach((P) => {
            $[P] !== void 0 && e.setFieldValue(P, $[P]);
          });
        }
        for (const I of H) {
          const j = I.src;
          if (!I || typeof I != "object" || !j || typeof j != "object" || !r) continue;
          let $;
          if ("type" in j && j.type === "api") {
            const Gt = {
              method: j.method || "GET",
              url: r?.baseURL + j.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...j.method === "GET" ? { params: { refid: O } } : { data: { refid: O } }
            }, { data: Fn } = await ne(Gt);
            $ = Fn;
          } else {
            let Gt;
            if (!j.queryid) {
              if (!j.table || !j.columns)
                throw new Error("SQL query requires field.table");
              const Yi = Pe(j?.where ?? {}, {
                refid: O
              });
              Gt = {
                ...j,
                table: j.table,
                cols: j.columns,
                where: Yi
              };
            }
            const { data: Fn } = await Xt(r, Gt, j?.queryid, O, o);
            $ = Fn;
          }
          let P = t.valueKey ?? "value", _ = t.labelKey ?? "title";
          const xe = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($.data.results) ? $.data.results : Array.isArray($?.data) ? $.data : $, pe = Array.isArray(xe) ? xe.map(Ge) : [], Ut = ut(
            P,
            _,
            pe,
            t.groupKey
          );
          l?.(I.target, Ut);
        }
      } catch (I) {
        console.error("Autocomplete / AjaxChain fetch failed", I);
      }
    })();
  }, [e.values[t.name]]), Se(() => {
    if (!t.search || !h.trim() || !t.table || !r) return;
    const N = pl(t.columns ?? ""), M = new AbortController(), O = setTimeout(async () => {
      try {
        let H;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const pe = s ? Pe(t.where ?? {}, {
            refid: s
          }) : t.where;
          H = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: pe
          };
        }
        let X = {};
        Array.isArray(N) && N.forEach((pe) => {
          X[pe] = [h, "LIKE"];
        });
        let I = t.valueKey ?? "value", j = t.labelKey ?? "title";
        const { data: $ } = await Xt(r, H, t?.queryid, void 0, o, X), P = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, _ = Array.isArray(P) ? P.map(Ge) : [], xe = ut(
          I,
          j,
          _,
          t.groupKey
        );
        d(xe);
      } catch (H) {
        if (ne.isCancel(H)) return;
        console.error("Search fetch failed", H);
      }
    }, 500);
    return () => {
      clearTimeout(O), M.abort();
    };
  }, [h, s]);
  const Oe = async (N) => {
    if (N.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const M = await to(r, N), O = t.multiple ? M.map((H) => H.path) : M[0]?.path;
      e.setFieldValue(
        F,
        O
      ), Nt(O, t, o);
    } catch (M) {
      console.error("File upload failed", M), e.setFieldError(F, "File upload failed");
    }
  }, ze = async (N, M, O) => {
    const H = M[N];
    if (!H) return;
    const X = n?.[H];
    if (typeof X != "function") {
      console.error(`Method "${String(H)}" not found`);
      return;
    }
    try {
      await Promise.resolve(X(O));
    } catch (I) {
      console.error(`Method "${String(H)}" failed`, I);
    }
  }, $e = (N) => {
    if (R) return;
    const M = N.target.value;
    p(M), y(0), M.trim() ? k(!0) : (k(!1), e.setFieldValue(F, ""));
  }, A = (N) => {
    e.setFieldValue(F, N), Nt(N, t, o), p(""), k(!1), ze("onChange", t, `${F}-${N}`);
  };
  function S(N) {
    const M = N.currentTarget.files;
    M && Oe(M);
  }
  return {
    setHighlightedIndex: y,
    executeFieldMethod: ze,
    handleFileUpload: Oe,
    handleKeyDown: fe,
    handleToggle: z,
    setSearch: p,
    setOpen: k,
    setIsFocused: c,
    handleInputChange: $e,
    handleSelect: A,
    handlePersist: Nt,
    handleFileChange: S,
    optionCount: U,
    baseInputClasses: K,
    focusClasses: W,
    labelClasses: w,
    search: h,
    highlightedIndex: g,
    options: u,
    isDisabled: R,
    key: F,
    filteredOptions: q,
    open: v,
    listRef: b,
    inputRef: f,
    detailsRef: x,
    isFocused: a,
    exactMatch: ie
  };
}
const vl = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ m.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ m.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ m.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ m.jsx("source", { src: t }) }) : /* @__PURE__ */ m.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ m.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ m.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function Sl(t) {
  const e = Gr[t] ?? Gr.other;
  return /* @__PURE__ */ m.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const kl = ({ filePath: t, sqlOpsUrls: e }) => {
  const [n, r] = Te(null), [s, o] = Te(!1), i = yl(t), l = bl(i);
  Se(() => {
    if (!e || l !== "image" && !s) return;
    let c = !0, u = null;
    return eo(t, e).then((d) => {
      c && (u = d, r(d));
    }), () => {
      c = !1, u && URL.revokeObjectURL(u);
    };
  }, [l, s, t, e]);
  let a = t.split("/").pop();
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    l === "image" && n ? /* @__PURE__ */ m.jsx(
      "img",
      {
        src: n,
        alt: a,
        title: "Click to preview",
        onClick: () => o(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ m.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => o(!0),
        onKeyDown: (c) => c.key === "Enter" && o(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Sl(l),
          /* @__PURE__ */ m.jsx("span", { className: "text-sm", children: a })
        ]
      }
    ),
    s && /* @__PURE__ */ m.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ m.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => o(!1),
          children: "✕"
        }
      ),
      n ? /* @__PURE__ */ m.jsx(vl, { fileUrl: n, category: l }) : /* @__PURE__ */ m.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Yr({
  field: t,
  isDisabled: e,
  handleToggle: n,
  detailsRef: r,
  handleKeyDown: s,
  valueArray: o,
  labelClasses: i,
  listRef: l,
  search: a,
  filteredOptions: c,
  highlightedIndex: u,
  setSearch: d,
  formik: f,
  setHighlightedIndex: h,
  executeFieldMethod: p,
  handlePersist: g,
  module_refid: y,
  options: b
}) {
  const x = t.name;
  return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ m.jsxs("label", { className: i, children: [
      t.label,
      t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ m.jsxs(
      "details",
      {
        className: `relative w-full ${e ? " opacity-70" : ""}`,
        onToggle: n,
        ref: r,
        onKeyDown: (v) => {
          e || s(v, !1);
        },
        children: [
          /* @__PURE__ */ m.jsxs(
            "summary",
            {
              className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
              children: [
                /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: o?.length > 0 ? o.map((v) => nr(b, v) ?? v).join(", ") : `Select ${t.label}` }),
                /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ m.jsx(
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
          !e && /* @__PURE__ */ m.jsxs("div", { ref: l, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
            t.search && /* @__PURE__ */ m.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "text",
                value: a,
                onChange: (v) => {
                  e || (d(v.target.value), h(0));
                },
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
              }
            ) }),
            c.length > 0 ? c.map(([v, k], E) => /* @__PURE__ */ m.jsxs(
              "label",
              {
                htmlFor: `${x}-${v}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${o?.includes(v) ? "bg-indigo-50 text-indigo-600 font-medium" : u === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      id: `${x}-${v}`,
                      type: "checkbox",
                      checked: o?.includes(v),
                      onChange: (R) => {
                        const z = R.target.checked ? [...o, v] : o?.filter((F) => F !== v);
                        f.setFieldValue(x, z), g(z, t, y), p("onChange", t, `${x}-${v}`);
                      },
                      onBlur: f.handleBlur,
                      disabled: e,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  k
                ]
              },
              v
            )) : /* @__PURE__ */ m.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ]
      }
    ),
    f.touched[x] && f.errors[x] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[x]) })
  ] });
}
function Cl({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const [r, s] = Te(null);
  return Se(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return eo(t, n).then((l) => {
      o && (i = l, s(l));
    }), () => {
      o = !1, i && URL.revokeObjectURL(i);
    };
  }, [open, t, n]), r ? /* @__PURE__ */ m.jsx(
    "img",
    {
      alt: e,
      title: e,
      src: r,
      className: "h-24 w-24 object-cover rounded border border-dashed  cursor-pointer hover:opacity-90"
    }
  ) : null;
}
function no({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const o = Ct(null), i = async (l) => {
    const a = l.currentTarget.files;
    if (!(!a || a.length === 0))
      try {
        const c = await to(n, a), u = e.multiple ? c.map((d) => d.path) : c[0]?.path;
        t.setFieldValue(
          s,
          u
        ), Nt(u, e, r);
      } catch (c) {
        console.error("File upload failed", c), t.setFieldError(s, "File upload failed");
      }
  };
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        ref: o,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: i
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        onClick: () => o.current?.click(),
        className: "relative w-42 h-42 p-2 rounded-sm ",
        children: t.values[s] ? /* @__PURE__ */ m.jsx(Cl, { field_name: s, filePath: t.values[s], sqlOpsUrls: n }) : /* @__PURE__ */ m.jsx(
          "img",
          {
            src: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
            alt: "avatar placeholder",
            className: "w-full h-full object-cover opacity-60"
          }
        )
      }
    )
  ] });
}
function se(t) {
  this.content = t;
}
se.prototype = {
  constructor: se,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, s = r.find(t), o = r.content.slice();
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new se(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new se(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new se([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new se(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new se(s);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = se.from(t), t.size ? new se(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = se.from(t), t.size ? new se(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = se.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
se.from = function(t) {
  if (t instanceof se) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new se(e);
};
function ro(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let s = t.child(r), o = e.child(r);
    if (s == o) {
      n += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(o))
      return n;
    if (s.isText && s.text != o.text) {
      for (let i = 0; s.text[i] == o.text[i]; i++)
        n++;
      return n;
    }
    if (s.content.size || o.content.size) {
      let i = ro(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function so(t, e, n, r) {
  for (let s = t.childCount, o = e.childCount; ; ) {
    if (s == 0 || o == 0)
      return s == o ? null : { a: n, b: r };
    let i = t.child(--s), l = e.child(--o), a = i.nodeSize;
    if (i == l) {
      n -= a, r -= a;
      continue;
    }
    if (!i.sameMarkup(l))
      return { a: n, b: r };
    if (i.isText && i.text != l.text) {
      let c = 0, u = Math.min(i.text.length, l.text.length);
      for (; c < u && i.text[i.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (i.content.size || l.content.size) {
      let c = so(i.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class C {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, s = 0, o) {
    for (let i = 0, l = 0; l < n; i++) {
      let a = this.content[i], c = l + a.nodeSize;
      if (c > e && r(a, s + l, o || null, i) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, n - u), r, s + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, s) {
    let o = "", i = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? s ? typeof s == "function" ? s(l) : s : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (i ? i = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, s = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (s[s.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      s.push(e.content[o]);
    return new C(s, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], s = 0;
    if (n > e)
      for (let o = 0, i = 0; i < n; o++) {
        let l = this.content[o], a = i + l.nodeSize;
        a > e && ((i < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - i), Math.min(l.text.length, n - i)) : l = l.cut(Math.max(0, e - i - 1), Math.min(l.content.size, n - i - 1))), r.push(l), s += l.nodeSize), i = a;
      }
    return new C(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? C.empty : e == 0 && n == this.content.length ? this : new C(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let s = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return s[e] = n, new C(s, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new C([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new C(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let s = this.content[n];
      e(s, r, n), r += s.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return ro(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return so(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Qt(0, e);
    if (e == this.size)
      return Qt(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Qt(n + 1, o) : Qt(n, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return C.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new C(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return C.empty;
    let n, r = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      r += o.nodeSize, s && o.isText && e[s - 1].sameMarkup(o) ? (n || (n = e.slice(0, s)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new C(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return C.empty;
    if (e instanceof C)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new C([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
C.empty = new C([], 0);
const Wn = { index: 0, offset: 0 };
function Qt(t, e) {
  return Wn.index = t, Wn.offset = e, Wn;
}
function pn(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!pn(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !pn(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let G = class rr {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, s));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, s)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && pn(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let s = r.create(n.attrs);
    return r.checkAttrs(s.attrs), s;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return rr.none;
    if (e instanceof rr)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
G.none = [];
class mn extends Error {
}
class T {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = io(this.content, e + this.openStart, n);
    return r && new T(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new T(oo(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return T.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new T(C.fromJSON(e, n.content), r, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, s = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      s++;
    return new T(e, r, s);
  }
}
T.empty = new T(C.empty, 0, 0);
function oo(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(oo(o.content, e - s - 1, n - s - 1)));
}
function io(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = io(i.content, e - o - 1, n, i);
  return l && t.replaceChild(s, i.copy(l));
}
function Nl(t, e, n) {
  if (n.openStart > t.depth)
    throw new mn("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new mn("Inconsistent open depths");
  return lo(t, e, n, 0);
}
function lo(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = lo(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return Ze(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = Al(n, t);
      return Ze(o, co(t, i, l, e, r));
    }
  else return Ze(o, gn(t, e, r));
}
function ao(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new mn("Cannot join " + e.type.name + " onto " + t.type.name);
}
function sr(t, e, n) {
  let r = t.node(n);
  return ao(r, e.node(n)), r;
}
function Qe(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Mt(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (Qe(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    Qe(s.child(l), r);
  e && e.depth == n && e.textOffset && Qe(e.nodeBefore, r);
}
function Ze(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function co(t, e, n, r, s) {
  let o = t.depth > s && sr(t, e, s + 1), i = r.depth > s && sr(n, r, s + 1), l = [];
  return Mt(null, t, s, l), o && i && e.index(s) == n.index(s) ? (ao(o, i), Qe(Ze(o, co(t, e, n, r, s + 1)), l)) : (o && Qe(Ze(o, gn(t, e, s + 1)), l), Mt(e, n, s, l), i && Qe(Ze(i, gn(n, r, s + 1)), l)), Mt(r, null, s, l), new C(l);
}
function gn(t, e, n) {
  let r = [];
  if (Mt(null, t, n, r), t.depth > n) {
    let s = sr(t, e, n + 1);
    Qe(Ze(s, gn(t, e, n + 1)), r);
  }
  return Mt(e, null, n, r), new C(r);
}
function Al(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(C.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class Ot {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], s = e.child(n);
    return r ? e.child(n).cut(r) : s;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], s = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      s += r.child(o).nodeSize;
    return s;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return G.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), s = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = s, s = l;
    }
    let o = r.marks;
    for (var i = 0; i < o.length; i++)
      o[i].type.spec.inclusive === !1 && (!s || !o[i].isInSet(s.marks)) && (o = o[i--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, s = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!s || !r[o].isInSet(s.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new yn(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], s = 0, o = n;
    for (let i = e; ; ) {
      let { index: l, offset: a } = i.content.findIndex(o), c = o - a;
      if (r.push(i, l, s + a), !c || (i = i.child(l), i.isText))
        break;
      o = c - 1, s += a + 1;
    }
    return new Ot(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Xr.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      Xr.set(e, r = new El());
    let s = r.elts[r.i] = Ot.resolve(e, n);
    return r.i = (r.i + 1) % Tl, s;
  }
}
class El {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Tl = 12, Xr = /* @__PURE__ */ new WeakMap();
class yn {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Ml = /* @__PURE__ */ Object.create(null);
class Me {
  /**
  @internal
  */
  constructor(e, n, r, s = G.none) {
    this.type = e, this.attrs = n, this.marks = s, this.content = r || C.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, s = 0) {
    this.content.nodesBetween(e, n, r, s, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, r, s) {
    return this.content.textBetween(e, n, r, s);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && pn(this.attrs, n || e.defaultAttrs || Ml) && G.sameSet(this.marks, r || G.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Me(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Me(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return T.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new T(c, s.depth - i, o.depth - i);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return Nl(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: s } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (s == e || n.isText)
        return n;
      e -= s + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let s = this.content.child(n - 1);
    return { node: s, index: n - 1, offset: r - s.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Ot.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Ot.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let s = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (s = !0), !s)), s;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), uo(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = C.empty, s = 0, o = r.childCount) {
    let i = this.contentMatchAt(e).matchFragment(r, s, o), l = i && i.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = s; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, s) {
    if (s && !this.type.allowsMarks(s))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), i = o && o.matchFragment(this.content, n);
    return i ? i.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = G.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!G.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let s = C.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, s, r);
    return o.type.checkAttrs(o.attrs), o;
  }
}
Me.prototype.text = void 0;
class bn extends Me {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : uo(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new bn(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new bn(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function uo(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class rt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new Rl(e, n);
    if (r.next == null)
      return rt.empty;
    let s = fo(r);
    r.next && r.err("Unexpected trailing text");
    let o = Pl(Dl(s));
    return Fl(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let s = this;
    for (let o = n; s && o < r; o++)
      s = s.matchType(e.child(o).type);
    return s;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let s = [this];
    function o(i, l) {
      let a = i.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return C.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < i.next.length; c++) {
        let { type: u, next: d } = i.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
          s.push(d);
          let f = o(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let s = r.shift(), o = s.match;
      if (o.matchType(e)) {
        let i = [];
        for (let l = s; l.type; l = l.via)
          i.push(l.type);
        return i.reverse();
      }
      for (let i = 0; i < o.next.length; i++) {
        let { type: l, next: a } = o.next[i];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!s.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: s }), n[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let s = 0; s < r.next.length; s++)
        e.indexOf(r.next[s].next) == -1 && n(r.next[s].next);
    }
    return n(this), e.map((r, s) => {
      let o = s + (r.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < r.next.length; i++)
        o += (i ? ", " : "") + r.next[i].type.name + "->" + e.indexOf(r.next[i].next);
      return o;
    }).join(`
`);
  }
}
rt.empty = new rt(!0);
class Rl {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function fo(t) {
  let e = [];
  do
    e.push(jl(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function jl(t) {
  let e = [];
  do
    e.push(Il(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Il(t) {
  let e = $l(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Ol(t, e);
    else
      break;
  return e;
}
function Qr(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Ol(t, e) {
  let n = Qr(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Qr(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function zl(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let s = [];
  for (let o in n) {
    let i = n[o];
    i.isInGroup(e) && s.push(i);
  }
  return s.length == 0 && t.err("No node type or group '" + e + "' found"), s;
}
function $l(t) {
  if (t.eat("(")) {
    let e = fo(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = zl(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Dl(t) {
  let e = [[]];
  return s(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(i, l, a) {
    let c = { term: a, to: l };
    return e[i].push(c), c;
  }
  function s(i, l) {
    i.forEach((a) => a.to = l);
  }
  function o(i, l) {
    if (i.type == "choice")
      return i.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (i.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(i.exprs[a], l);
        if (a == i.exprs.length - 1)
          return c;
        s(c, l = n());
      }
    else if (i.type == "star") {
      let a = n();
      return r(l, a), s(o(i.expr, a), a), [r(a)];
    } else if (i.type == "plus") {
      let a = n();
      return s(o(i.expr, l), a), s(o(i.expr, a), a), [r(a)];
    } else {
      if (i.type == "opt")
        return [r(l)].concat(o(i.expr, l));
      if (i.type == "range") {
        let a = l;
        for (let c = 0; c < i.min; c++) {
          let u = n();
          s(o(i.expr, a), u), a = u;
        }
        if (i.max == -1)
          s(o(i.expr, a), a);
        else
          for (let c = i.min; c < i.max; c++) {
            let u = n();
            r(a, u), s(o(i.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (i.type == "name")
          return [r(l, void 0, i.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function ho(t, e) {
  return e - t;
}
function Zr(t, e) {
  let n = [];
  return r(e), n.sort(ho);
  function r(s) {
    let o = t[s];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(s);
    for (let i = 0; i < o.length; i++) {
      let { term: l, to: a } = o[i];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function Pl(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Zr(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Zr(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new rt(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(ho);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function Fl(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function po(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function mo(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let s = e && e[r];
    if (s === void 0) {
      let o = t[r];
      if (o.hasDefault)
        s = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = s;
  }
  return n;
}
function go(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function yo(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Ll(t, r, e[r]);
  return n;
}
let es = class bo {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = yo(e, r.attrs), this.defaultAttrs = po(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == rt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : mo(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Me(this, this.computeAttrs(e), C.from(n), G.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = C.from(n), this.checkContent(n), new Me(this, this.computeAttrs(e), n, G.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = C.from(n), n.size) {
      let i = this.contentMatch.fillBefore(n);
      if (!i)
        return null;
      n = i.append(n);
    }
    let s = this.contentMatch.matchFragment(n), o = s && s.fillBefore(C.empty, !0);
    return o ? new Me(this, e, n.append(o), G.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    go(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : G.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new bo(o, n, i));
    let s = n.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Bl(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class Ll {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Bl(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Mn {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = yo(e, s.attrs), this.excluded = null;
    let o = po(this.attrs);
    this.instance = o ? new G(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new G(this, mo(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new Mn(o, s++, n, i)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    go(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Wl {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = se.from(e.nodes), n.marks = se.from(e.marks || {}), this.nodes = es.compile(this.spec.nodes, this), this.marks = Mn.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = rt.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? ts(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : ts(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => Me.fromJSON(this, s), this.markFromJSON = (s) => G.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, s) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof es) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, s);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new bn(r, r.defaultAttrs, e, G.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function ts(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r], o = t.marks[s], i = o;
    if (o)
      n.push(o);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (s == "_" || a.spec.group && a.spec.group.split(" ").indexOf(s) > -1) && n.push(i = a);
      }
    if (!i)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Hl(t) {
  return t.tag != null;
}
function Vl(t) {
  return t.style != null;
}
class et {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (Hl(s))
        this.tags.push(s);
      else if (Vl(s)) {
        let o = /[^=]*/.exec(s.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let o = e.nodes[s.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new rs(this, n, !1);
    return r.addAll(e, G.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new rs(this, n, !0);
    return r.addAll(e, G.none, n.from, n.to), T.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (ql(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let i = o.getAttrs(e);
          if (i === !1)
            continue;
          o.attrs = i || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, s) {
    for (let o = s ? this.styles.indexOf(s) + 1 : 0; o < this.styles.length; o++) {
      let i = this.styles[o], l = i.style;
      if (!(l.indexOf(e) != 0 || i.context && !r.matchesContext(i.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (i.getAttrs) {
          let a = i.getAttrs(n);
          if (a === !1)
            continue;
          i.attrs = a || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(s) {
      let o = s.priority == null ? 50 : s.priority, i = 0;
      for (; i < n.length; i++) {
        let l = n[i];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      n.splice(i, 0, s);
    }
    for (let s in e.marks) {
      let o = e.marks[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = ss(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = ss(i)), i.node || i.ignore || i.mark || (i.node = s);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new et(e, et.schemaRules(e)));
  }
}
const xo = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, _l = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, wo = { ol: !0, ul: !0 }, zt = 1, or = 2, Rt = 4;
function ns(t, e, n) {
  return e != null ? (e ? zt : 0) | (e === "full" ? or : 0) : t && t.whitespace == "pre" ? zt | or : n & ~Rt;
}
class Zt {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = G.none, this.match = o || (i & Rt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(C.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, s;
        return (s = r.findWrapping(e.type)) ? (this.match = r, s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & zt)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - s[0].length));
      }
    }
    let n = C.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(C.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !xo.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class rs {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = ns(null, n.preserveWhitespace, 0) | (r ? Rt : 0);
    s ? o = new Zt(s.type, s.attrs, G.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new Zt(null, null, G.none, !0, null, i) : o = new Zt(e.schema.topNodeType, null, G.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, s = this.top, o = s.options & or ? "full" : this.localPreserveWS || (s.options & zt) > 0, { schema: i } = this.parser;
    if (o === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        if (o === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (i.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(i.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(i.linebreakReplacement.create(), n, !0), l[a] && this.insertNode(i.text(l[a]), n, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = s.content[s.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(i.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let s = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let i = e.nodeName.toLowerCase(), l;
    wo.hasOwnProperty(i) && this.parser.normalizeLists && Kl(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : _l.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (xo.hasOwnProperty(i))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let d = a && a.skip ? n : this.readStyles(e, n);
      d && this.addAll(e, d), c && this.sync(o), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = s;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let o = this.parser.matchedStyles[s], i = r.getPropertyValue(o);
        if (i)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, i, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? n = n.filter((c) => !a.clearMark(c)) : n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, s) {
    let o, i;
    if (n.node)
      if (i = this.parser.schema.nodes[n.node], i.isLeaf)
        this.insertNode(i.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(i, n.attrs || null, r, n.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (i && i.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, r, s);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, s) {
    let o = r || 0;
    for (let i = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s]; i != l; i = i.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(i, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let s, o;
    for (let i = this.open, l = 0; i >= 0; i--) {
      let a = this.nodes[i], c = a.findWrapping(e);
      if (c && (!s || s.length > c.length + l) && (s = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!s)
      return null;
    this.sync(o);
    for (let i = 0; i < s.length; i++)
      n = this.enterInner(s[i], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let s = this.findPlace(e, n, r);
    if (s) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let i = G.none;
      for (let l of s.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : is(l.type, e.type)) && (i = l.addToSet(i));
      return o.content.push(e.mark(i)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, s) {
    let o = this.findPlace(e.create(n), r, !1);
    return o && (o = this.enterInner(e, n, r, !0, s)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, s = !1, o) {
    this.closeExtra();
    let i = this.top;
    i.match = i.match && i.match.matchType(e);
    let l = ns(e, o, i.options);
    i.options & Rt && i.content.length == 0 && (l |= Rt);
    let a = G.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : is(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Zt(e, n, a, s, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= zt);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let s = r.length - 1; s >= 0; s--)
        e += r[s].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && n.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) && (this.find[s].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (s ? 0 : 1), i = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (i(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && s ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return i(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Kl(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && wo.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function ql(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function ss(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function is(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let s = n[r];
    if (!s.allowsMarkType(t))
      continue;
    let o = [], i = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || o.indexOf(u) < 0 && i(u))
          return !0;
      }
    };
    if (i(s.contentMatch))
      return !0;
  }
}
class Rn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = Hn(n).createDocumentFragment());
    let s = r, o = [];
    return e.forEach((i) => {
      if (o.length || i.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < i.marks.length; ) {
          let c = i.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          s = o.pop()[1];
        for (; a < i.marks.length; ) {
          let c = i.marks[a++], u = this.serializeMark(c, i.isInline, n);
          u && (o.push([c, s]), s.appendChild(u.dom), s = u.contentDOM || u.dom);
        }
      }
      s.appendChild(this.serializeNodeInner(i, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: s } = cn(Hn(n), this.nodes[e.type.name](e), null, e.attrs);
    if (s) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, s);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let o = this.serializeMark(e.marks[s], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let s = this.marks[e.type.name];
    return s && cn(Hn(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return cn(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Rn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = ls(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ls(e.marks);
  }
}
function ls(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Hn(t) {
  return t.document || window.document;
}
const as = /* @__PURE__ */ new WeakMap();
function Jl(t) {
  let e = as.get(t);
  return e === void 0 && as.set(t, e = Ul(t)), e;
}
function Ul(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let s = 0; s < r.length; s++)
            n(r[s]);
      else
        for (let s in r)
          n(r[s]);
  }
  return n(t), e;
}
function cn(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Jl(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let i = s.indexOf(" ");
  i > 0 && (n = s.slice(0, i), s = s.slice(i + 1));
  let l, a = n ? t.createElementNS(n, s) : t.createElement(s), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : d == "style" && a.style ? a.style.cssText = c[d] : a.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = cn(t, f, n, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const vo = 65535, So = Math.pow(2, 16);
function Gl(t, e) {
  return t + e * So;
}
function cs(t) {
  return t & vo;
}
function Yl(t) {
  return (t - (t & vo)) / So;
}
const ko = 1, Co = 2, un = 4, No = 8;
class ir {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & No) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (ko | un)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Co | un)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & un) > 0;
  }
}
class me {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && me.empty)
      return me.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = cs(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Yl(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let s = 0, o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = this.ranges[l + i], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : n : n, h = a + s + (f < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (n < 0 ? a : d) ? null : Gl(l / 3, e - a), g = e == a ? Co : e == d ? ko : un;
        return (n < 0 ? e != a : e != d) && (g |= No), new ir(h, g, p);
      }
      s += u - c;
    }
    return r ? e + s : new ir(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = cs(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = a + c;
      if (e <= u && l == s * 3)
        return !0;
      r += this.ranges[l + i] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let s = 0, o = 0; s < this.ranges.length; s += 3) {
      let i = this.ranges[s], l = i - (this.inverted ? o : 0), a = i + (this.inverted ? 0 : o), c = this.ranges[s + n], u = this.ranges[s + r];
      e(l, l + c, a, a + u), o += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new me(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? me.empty : new me(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
me.empty = new me([]);
class xn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, n, r = 0, s = e ? e.length : 0) {
    this.mirror = n, this.from = r, this.to = s, this._maps = e || [], this.ownData = !(e || n);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new xn(this._maps, this.mirror, e, n);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
      let s = e.getMirror(n);
      this.appendMap(e._maps[n], s != null && s < n ? r + s : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
      let s = e.getMirror(n);
      this.appendMap(e._maps[n].invert(), s != null && s > n ? r - s - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new xn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let s = 0;
    for (let o = this.from; o < this.to; o++) {
      let i = this._maps[o], l = i.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      s |= l.delInfo, e = l.pos;
    }
    return r ? e : new ir(e, s, null);
  }
}
const Vn = /* @__PURE__ */ Object.create(null);
class ue {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return me.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Vn[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in Vn)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Vn[e] = n, n.prototype.jsonID = e, n;
  }
}
class Z {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new Z(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Z(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return Z.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof mn)
        return Z.fail(o.message);
      throw o;
    }
  }
}
function vr(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(vr(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return C.fromArray(r);
}
class He extends ue {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new T(vr(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return Z.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new ke(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new He(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof He && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new He(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new He(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ue.jsonID("addMark", He);
class ke extends ue {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new T(vr(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return Z.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new He(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new ke(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ke(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ke(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ue.jsonID("removeMark", ke);
class Ve extends ue {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Z.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return Z.fromReplace(e, this.pos, this.pos + 1, new T(C.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new Ve(this.pos, n.marks[s]);
        return new Ve(this.pos, this.mark);
      }
    }
    return new st(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Ve(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ve(n.pos, e.markFromJSON(n.mark));
  }
}
ue.jsonID("addNodeMark", Ve);
class st extends ue {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Z.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return Z.fromReplace(e, this.pos, this.pos + 1, new T(C.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new Ve(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new st(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new st(n.pos, e.markFromJSON(n.mark));
  }
}
ue.jsonID("removeNodeMark", st);
class te extends ue {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, s = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = s;
  }
  apply(e) {
    return this.structure && lr(e, this.from, this.to) ? Z.fail("Structure replace would overwrite content") : Z.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new me([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new te(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new te(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof te) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? T.empty : new T(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new te(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? T.empty : new T(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new te(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new te(n.from, n.to, T.fromJSON(e, n.slice), !!n.structure);
  }
}
ue.jsonID("replace", te);
class re extends ue {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, s, o, i, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = s, this.slice = o, this.insert = i, this.structure = l;
  }
  apply(e) {
    if (this.structure && (lr(e, this.from, this.gapFrom) || lr(e, this.gapTo, this.to)))
      return Z.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return Z.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? Z.fromReplace(e, this.from, this.to, r) : Z.fail("Content does not fit in gap");
  }
  getMap() {
    return new me([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new re(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new re(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new re(n.from, n.to, n.gapFrom, n.gapTo, T.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
ue.jsonID("replaceAround", re);
function lr(t, e, n) {
  let r = t.resolve(e), s = n - e, o = r.depth;
  for (; s > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, s--;
  if (s > 0) {
    let i = r.node(o).maybeChild(r.indexAfter(o));
    for (; s > 0; ) {
      if (!i || i.isLeaf)
        return !0;
      i = i.firstChild, s--;
    }
  }
  return !1;
}
function Xl(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), p = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(p) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new ke(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new He(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function Ql(t, e, n, r) {
  let s = [], o = 0;
  t.doc.nodesBetween(e, n, (i, l) => {
    if (!i.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Mn) {
      let c = i.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(i.marks) && (a = [r]) : a = i.marks;
    if (a && a.length) {
      let c = Math.min(l + i.nodeSize, n);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < s.length; h++) {
          let p = s[h];
          p.step == o - 1 && d.eq(s[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : s.push({ style: d, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), s.forEach((i) => t.step(new ke(i.from, i.to, i.style)));
}
function Sr(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new te(l, u, T.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new ke(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new T(C.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new te(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(C.empty, !0);
    t.replace(l, l, new T(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function Zl(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function xt(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Zl(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function ea(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = C.empty, d = 0;
  for (let p = o, g = !1; p > n; p--)
    g || r.index(p) > 0 ? (g = !0, u = C.from(r.node(p).copy(u)), d++) : a--;
  let f = C.empty, h = 0;
  for (let p = o, g = !1; p > n; p--)
    g || s.after(p + 1) < s.end(p) ? (g = !0, f = C.from(s.node(p).copy(f)), h++) : c++;
  t.step(new re(a, c, i, l, new T(u.append(f), d, h), u.size - d, !0));
}
function Ao(t, e, n = null, r = t) {
  let s = ta(t, e), o = s && na(r, e);
  return o ? s.map(us).concat({ type: e, attrs: n }).concat(o.map(us)) : null;
}
function us(t) {
  return { type: t, attrs: null };
}
function ta(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function na(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function ra(t, e, n) {
  let r = C.empty;
  for (let i = n.length - 1; i >= 0; i--) {
    if (r.size) {
      let l = n[i].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = C.from(n[i].type.create(n[i].attrs, r));
  }
  let s = e.start, o = e.end;
  t.step(new re(s, o, s, o, new T(r, 0, 0), n.length, !0));
}
function sa(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && oa(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && To(t, i, l, o), Sr(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new re(d, f, d + 1, f - 1, new T(C.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && Eo(t, i, l, o), !1;
    }
  });
}
function Eo(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.isText) {
      let i, l = /\r?\n|\r/g;
      for (; i = l.exec(s.text); ) {
        let a = t.mapping.slice(r).map(n + 1 + o + i.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function To(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let i = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(i, i + 1, e.type.schema.text(`
`));
    }
  });
}
function oa(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function ia(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new re(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new T(C.from(i), 0, 0), 1, !0));
}
function Fe(t, e, n = 1, r) {
  let s = t.resolve(e), o = s.depth - n, i = r && r[r.length - 1] || s.parent;
  if (o < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !i.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let c = s.depth - 1, u = n - 2; c > o; c--, u--) {
    let d = s.node(c), f = s.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let g = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = s.indexAfter(o), a = r && r[0];
  return s.node(o).canReplaceWith(l, l, a ? a.type : s.node(o + 1).type);
}
function la(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = C.empty, i = C.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = C.from(s.node(l).copy(o));
    let u = r && r[c];
    i = C.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new te(e, e, new T(o.append(i), n, n), !0));
}
function lt(t, e) {
  let n = t.resolve(e), r = n.index();
  return Mo(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function aa(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function Mo(t, e) {
  return !!(t && e && !t.isLeaf && aa(t, e));
}
function jn(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, l = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), l++, i = r.node(s).maybeChild(l)) : (o = r.node(s).maybeChild(l - 1), i = r.node(s + 1)), o && !o.isTextblock && Mo(o, i) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function ca(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, o = t.doc.resolve(e - n), i = o.node().type;
  if (s && i.inlineContent) {
    let u = i.whitespace == "pre", d = !!i.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    To(t, u.node(), u.before(), l);
  }
  i.inlineContent && Sr(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new te(c, a.map(e + n, -1), T.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    Eo(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function ua(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let s = r.depth - 1; s >= 0; s--) {
      let o = r.index(s);
      if (r.node(s).canReplaceWith(o, o, n))
        return r.before(s + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let s = r.depth - 1; s >= 0; s--) {
      let o = r.indexAfter(s);
      if (r.node(s).canReplaceWith(o, o, n))
        return r.after(s + 1);
      if (o < r.node(s).childCount)
        return null;
    }
  return null;
}
function da(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let s = n.content;
  for (let o = 0; o < n.openStart; o++)
    s = s.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let i = r.depth; i >= 0; i--) {
      let l = i == r.depth ? 0 : r.pos <= (r.start(i + 1) + r.end(i + 1)) / 2 ? -1 : 1, a = r.index(i) + (l > 0 ? 1 : 0), c = r.node(i), u = !1;
      if (o == 1)
        u = c.canReplace(a, a, s);
      else {
        let d = c.contentMatchAt(a).findWrapping(s.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(i + 1) : r.after(i + 1);
    }
  return null;
}
function In(t, e, n = e, r = T.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return Ro(s, o, r) ? new te(e, n, r) : new fa(s, o, r).fit();
}
function Ro(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class fa {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = C.empty;
    for (let s = 0; s <= e.depth; s++) {
      let o = e.node(s);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = C.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!s)
      return null;
    let o = this.placed, i = r.depth, l = s.depth;
    for (; i && l && o.childCount == 1; )
      o = o.firstChild.content, i--, l--;
    let a = new T(o, i, l);
    return e > -1 ? new re(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new te(r.pos, s.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (s = 0), o.type.spec.isolating && s <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s, o = null;
        r ? (o = _n(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
        let i = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (n == 1 && (i ? c.matchType(i.type) || (d = c.fillBefore(C.from(i), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
          if (n == 2 && i && (u = c.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = _n(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new T(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = _n(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new T(At(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new T(At(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: s, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let i = this.unplaced, l = r ? r.content : i.content, a = i.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[n];
    if (s) {
      for (let g = 0; g < s.childCount; g++)
        u.push(s.child(g));
      d = d.matchFragment(s);
    }
    let h = l.size + e - (i.content.size - i.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), y = d.matchType(g.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(jo(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Et(this.placed, n, C.from(u)), this.frontier[n].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = p ? e == 0 ? T.empty : new T(At(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new T(At(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Kn(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = Kn(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = Kn(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: n, fit: i, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = Et(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = Et(this.placed, this.depth, C.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(C.empty, !0);
    n.childCount && (this.placed = Et(this.placed, this.frontier.length, n));
  }
}
function At(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(At(t.firstChild.content, e - 1, n)));
}
function Et(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Et(t.lastChild.content, e - 1, n)));
}
function _n(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function jo(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, jo(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(C.empty, !0)))), t.copy(r);
}
function Kn(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !ha(n, o.content, i) ? l : null;
}
function ha(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function pa(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function ma(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Ro(s, o, r))
    return t.step(new te(e, n, r));
  let i = Oo(s, o);
  i[i.length - 1] == 0 && i.pop();
  let l = -(s.depth + 1);
  i.unshift(l);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let p = s.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    i.indexOf(f) > -1 ? l = f : s.before(f) == h && i.splice(1, 0, -f);
  }
  let a = i.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], p = pa(h.type);
    if (p && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let g = 0; g < i.length; g++) {
        let y = i[(g + a) % i.length], b = !0;
        y < 0 && (b = !1, y = -y);
        let x = s.node(y - 1), v = s.index(y - 1);
        if (x.canReplaceWith(v, v, p.type, p.marks))
          return t.replace(s.before(y), b ? o.after(y) : n, new T(Io(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function Io(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Io(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(C.empty, !0));
  }
  return t;
}
function ga(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = ua(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new T(C.from(r), 0, 0));
}
function ya(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), o = Oo(r, s);
  for (let i = 0; i < o.length; i++) {
    let l = o[i], a = i == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), s.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1))))
      return t.delete(r.before(l), s.after(l));
  }
  for (let i = 1; i <= r.depth && i <= s.depth; i++)
    if (e - r.start(i) == r.depth - i && n > r.end(i) && s.end(i) - n != s.depth - i && r.start(i - 1) == s.start(i - 1) && r.node(i - 1).canReplace(r.index(i - 1), s.index(i - 1)))
      return t.delete(r.before(i), n);
  t.delete(e, n);
}
function Oo(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let o = t.start(s);
    if (o < t.pos - (t.depth - s) || e.end(s) > e.pos + (e.depth - s) || t.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (o == e.start(s) || s == t.depth && s == e.depth && t.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == o - 1) && n.push(s);
  }
  return n;
}
class pt extends ue {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Z.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return Z.fromReplace(e, this.pos, this.pos + 1, new T(C.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return me.empty;
  }
  invert(e) {
    return new pt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new pt(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new pt(n.pos, n.attr, n.value);
  }
}
ue.jsonID("attr", pt);
class $t extends ue {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      n[s] = e.attrs[s];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return Z.ok(r);
  }
  getMap() {
    return me.empty;
  }
  invert(e) {
    return new $t(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new $t(n.attr, n.value);
  }
}
ue.jsonID("docAttr", $t);
let gt = class extends Error {
};
gt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
gt.prototype = Object.create(Error.prototype);
gt.prototype.constructor = gt;
gt.prototype.name = "TransformError";
class zo {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new xn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new gt(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, n = -1e9;
    for (let r = 0; r < this.mapping.maps.length; r++) {
      let s = this.mapping.maps[r];
      r && (e = s.map(e, 1), n = s.map(n, -1)), s.forEach((o, i, l, a) => {
        e = Math.min(e, l), n = Math.max(n, a);
      });
    }
    return e == 1e9 ? null : { from: e, to: n };
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = T.empty) {
    let s = In(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new T(C.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, T.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return ma(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return ga(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return ya(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return ea(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return ca(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return ra(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return sa(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return ia(this, e, n, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new pt(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new $t(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new Ve(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof G)
      n.isInSet(r.marks) && this.step(new st(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new st(e, o)), s = o.removeFromSet(s);
      for (let l = i.length - 1; l >= 0; l--)
        this.step(i[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, n = 1, r) {
    return la(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Xl(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Ql(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Sr(this, e, n, r), this;
  }
}
const qn = /* @__PURE__ */ Object.create(null);
class L {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new $o(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = T.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? T.empty : n), l == 0 && hs(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      let { $from: i, $to: l } = s[o], a = e.mapping.slice(r), c = a.map(i.pos), u = a.map(l.pos);
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), hs(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let s = e.parent.inlineContent ? new B(e) : ft(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? ft(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : ft(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (i)
        return i;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new ye(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return ft(e, e, 0, 0, 1) || new ye(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return ft(e, e, e.content.size, e.childCount, -1) || new ye(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = qn[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in qn)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return qn[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return B.between(this.$anchor, this.$head).getBookmark();
  }
}
L.prototype.visible = !0;
class $o {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let ds = !1;
function fs(t) {
  !ds && !t.parent.inlineContent && (ds = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class B extends L {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    fs(e), fs(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return L.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new B(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = T.empty) {
    if (super.replace(e, n), n == T.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof B && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new On(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new B(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let s = e.resolve(n);
    return new this(s, r == n ? s : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let s = e.pos - n.pos;
    if ((!r || s) && (r = s >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = L.findFrom(n, r, !0) || L.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return L.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (L.findFrom(e, -r, !0) || L.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new B(e, n);
  }
}
L.jsonID("text", B);
class On {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new On(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return B.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class D extends L {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: s } = n.mapResult(this.anchor), o = e.resolve(s);
    return r ? L.near(o) : new D(o);
  }
  content() {
    return new T(C.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof D && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new kr(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new D(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new D(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
D.prototype.visible = !1;
L.jsonID("node", D);
class kr {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new On(r, r) : new kr(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && D.isSelectable(r) ? new D(n) : L.near(n);
  }
}
class ye extends L {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = T.empty) {
    if (n == T.empty) {
      e.delete(0, e.doc.content.size);
      let r = L.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ye(e);
  }
  map(e) {
    return new ye(e);
  }
  eq(e) {
    return e instanceof ye;
  }
  getBookmark() {
    return ba;
  }
}
L.jsonID("all", ye);
const ba = {
  map() {
    return this;
  },
  resolve(t) {
    return new ye(t);
  }
};
function ft(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return B.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && D.isSelectable(l))
        return D.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = ft(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function hs(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof te || s instanceof re))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(L.near(t.doc.resolve(i), n));
}
function ps(t, e) {
  return !e || !t ? t : t.bind(e);
}
class en {
  constructor(e, n, r) {
    this.name = e, this.init = ps(n.init, r), this.apply = ps(n.apply, r);
  }
}
new en("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new en("selection", {
  init(t, e) {
    return t.selection || L.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new en("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new en("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function Do(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = Do(s, e, {})), n[r] = s;
  }
  return n;
}
class je {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Do(e.props, this, this.props), this.key = e.key ? e.key.key : Po("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Jn = /* @__PURE__ */ Object.create(null);
function Po(t) {
  return t in Jn ? t + "$" + ++Jn[t] : (Jn[t] = 0, t + "$");
}
class Ce {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Po(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Cr = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Fo(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Bo = (t, e, n) => {
  let r = Fo(t, n);
  if (!r)
    return !1;
  let s = Nr(r);
  if (!s) {
    let i = r.blockRange(), l = i && xt(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Uo(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (yt(o, "end") || D.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = In(t.doc, r.before(i), r.after(i), T.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(yt(o, "end") ? L.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : D.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, xa = (t, e, n) => {
  let r = Fo(t, n);
  if (!r)
    return !1;
  let s = Nr(r);
  return s ? Lo(t, s, e) : !1;
}, wa = (t, e, n) => {
  let r = Ho(t, n);
  if (!r)
    return !1;
  let s = Ar(r);
  return s ? Lo(t, s, e) : !1;
};
function Lo(t, e, n) {
  let r = e.nodeBefore, s = r, o = e.pos - 1;
  for (; !s.isTextblock; o--) {
    if (s.type.spec.isolating)
      return !1;
    let u = s.lastChild;
    if (!u)
      return !1;
    s = u;
  }
  let i = e.nodeAfter, l = i, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = In(t.doc, o, a, T.empty);
  if (!c || c.from != o || c instanceof te && c.slice.size >= a - o)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(B.create(u.doc, o)), n(u.scrollIntoView());
  }
  return !0;
}
function yt(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Wo = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Nr(r);
  }
  let i = o && o.nodeBefore;
  return !i || !D.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(D.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Nr(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Ho(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Vo = (t, e, n) => {
  let r = Ho(t, n);
  if (!r)
    return !1;
  let s = Ar(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Uo(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (yt(o, "start") || D.isSelectable(o))) {
    let i = In(t.doc, r.before(), r.after(), T.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(yt(o, "start") ? L.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : D.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, _o = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Ar(r);
  }
  let i = o && o.nodeAfter;
  return !i || !D.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(D.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Ar(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const va = (t, e) => {
  let n = t.selection, r = n instanceof D, s;
  if (r) {
    if (n.node.isTextblock || !lt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = jn(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(D.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Sa = (t, e) => {
  let n = t.selection, r;
  if (n instanceof D) {
    if (n.node.isTextblock || !lt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = jn(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, ka = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && xt(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, Ko = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Er(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const Ca = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = Er(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(L.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, qo = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof ye || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = Er(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(B.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Jo = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Fe(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && xt(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function Na(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof D && e.selection.node.isBlock)
      return !r.parentOffset || !Fe(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Er(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof B || e.selection instanceof ye) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = Fe(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = Fe(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), p = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const Aa = Na(), Ea = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(D.create(t.doc, s))), !0);
};
function Ta(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || lt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Uo(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && Ta(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = C.empty;
      for (let b = i.length - 1; b >= 0; b--)
        p = C.from(i[b].create(null, p));
      p = C.from(s.copy(p));
      let g = t.tr.step(new re(e.pos - 1, h, e.pos, h, new T(p, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && lt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : L.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && xt(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && yt(o, "start", !0) && yt(s, "end")) {
    let h = s, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let b = C.empty;
        for (let v = p.length - 1; v >= 0; v--)
          b = C.from(p[v].copy(b));
        let x = t.tr.step(new re(e.pos - p.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new T(b, p.length, 0), 0, !0));
        n(x.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Go(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(B.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const Ma = Go(-1), Ra = Go(1);
function ja(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && Ao(i, t, e);
    return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
  };
}
function ms(t, e = null) {
  return function(n, r) {
    let s = !1;
    for (let o = 0; o < n.selection.ranges.length && !s; o++) {
      let { $from: { pos: i }, $to: { pos: l } } = n.selection.ranges[o];
      n.doc.nodesBetween(i, l, (a, c) => {
        if (s)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            s = !0;
          else {
            let u = n.doc.resolve(c), d = u.index();
            s = u.parent.canReplaceWith(d, d + 1, t);
          }
      });
    }
    if (!s)
      return !1;
    if (r) {
      let o = n.tr;
      for (let i = 0; i < n.selection.ranges.length; i++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[i];
        o.setBlockType(l, a, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function Tr(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Tr(Cr, Bo, Wo);
Tr(Cr, Vo, _o);
Tr(Ko, qo, Jo, Aa);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Ia(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return Oa(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Oa(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new yn(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new yn(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = Ao(o, n, r, e);
  return l ? (t && za(t, e, l, s, n), !0) : !1;
}
function za(t, e, n, r, s) {
  let o = C.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = C.from(n[u].type.create(n[u].attrs, o));
  t.step(new re(e.start - (r ? 2 : 0), e.end, e.start, e.end, new T(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && Fe(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function $a(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? Da(e, n, t, o) : Pa(e, n, o) : !0 : !1;
  };
}
function Da(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new re(o - 1, i, o, i, new T(C.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new yn(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = xt(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return lt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function Pa(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, p = n.endIndex - 1, g = n.startIndex; p > g; p--)
    h -= s.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? C.empty : C.from(s))))
    return !1;
  let d = o.pos, f = d + i.nodeSize;
  return r.step(new re(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new T((l ? C.empty : C.from(s.copy(C.empty))).append(a ? C.empty : C.from(s.copy(C.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Fa(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!o)
      return !1;
    let i = o.startIndex;
    if (i == 0)
      return !1;
    let l = o.parent, a = l.child(i - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, u = C.from(c ? t.create() : null), d = new T(C.from(t.create(null, C.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new re(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const at = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Yo = function(t, e, n, r) {
  return n && (gs(t, e, n, r, -1) || gs(t, e, n, r, 1));
}, Ba = /^(img|br|input|textarea|hr)$/i;
function gs(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : wn(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || Mr(t) || Ba.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = at(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? wn(t) : 0;
    } else
      return !1;
  }
}
function wn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function La(t, e, n) {
  for (let r = e == 0, s = e == wn(t); r || s; ) {
    if (t == n)
      return !0;
    let o = at(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == wn(t);
  }
}
function Mr(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Xo = function(t) {
  return t.focusNode && Yo(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Qo(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const Re = typeof navigator < "u" ? navigator : null, ys = typeof document < "u" ? document : null, Je = Re && Re.userAgent || "", ar = /Edge\/(\d+)/.exec(Je), Zo = /MSIE \d/.exec(Je), cr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Je), _t = !!(Zo || cr || ar), ei = Zo ? document.documentMode : cr ? +cr[1] : ar ? +ar[1] : 0, zn = !_t && /gecko\/(\d+)/i.test(Je);
zn && +(/Firefox\/(\d+)/.exec(Je) || [0, 0])[1];
const ur = !_t && /Chrome\/(\d+)/.exec(Je), Be = !!ur, ti = ur ? +ur[1] : 0, ct = !_t && !!Re && /Apple Computer/.test(Re.vendor), Rr = ct && (/Mobile\/\w+/.test(Je) || !!Re && Re.maxTouchPoints > 2), we = Rr || (Re ? /Mac/.test(Re.platform) : !1), ni = Re ? /Win/.test(Re.platform) : !1, Kt = /Android \d/.test(Je), jr = !!ys && "webkitFontSmoothing" in ys.documentElement.style, Wa = jr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Ha(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), o = s && s.size == 0, i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (Xo(n)) {
    for (a = i; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && D.isSelectable(d) && s.parent && !(d.isInline && La(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new D(i == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let d = i, f = i;
      for (let h = 0; h < n.rangeCount; h++) {
        let p = n.getRangeAt(h);
        d = Math.min(d, t.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (d < 0)
        return null;
      [a, i] = f == t.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(i);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let d = e == "pointer" || t.state.selection.head < l.pos && !o ? 1 : -1;
    c = si(t, u, l, d);
  }
  return c;
}
function ri(t) {
  return t.editable ? t.hasFocus() : qa(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Ir(t, e = !1) {
  let n = t.state.selection;
  if (Ka(t, n), !!ri(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Be) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && Yo(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      _a(t);
    else {
      let { anchor: r, head: s } = n, o, i;
      bs && !(n instanceof B) && (n.$from.parent.inlineContent || (o = xs(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = xs(t, n.to))), t.docView.setSelection(r, s, t, e), bs && (o && ws(o), i && ws(i)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Va(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const bs = ct || Be && ti < 63;
function xs(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (ct && s && s.contentEditable == "false")
    return Un(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return Un(s);
    if (o)
      return Un(o);
  }
}
function Un(t) {
  return t.contentEditable = "true", ct && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function ws(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function Va(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!ri(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function _a(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, at(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && _t && ei <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Ka(t, e) {
  if (e instanceof D) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (vs(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    vs(t);
}
function vs(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function si(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || B.between(e, n, r);
}
function qa(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function dr(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && L.findFrom(o, e);
}
function Le(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Ss(t, e, n) {
  let r = t.state.selection;
  if (r instanceof B)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Le(t, new B(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = dr(t.state, e);
        return s && s instanceof D ? Le(t, s) : !1;
      } else if (!(we && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? D.isSelectable(o) ? Le(t, new D(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : jr ? Le(t, new B(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof D && r.node.isInline)
      return Le(t, new B(e > 0 ? r.$to : r.$from));
    {
      let s = dr(t.state, e);
      return s ? Le(t, s) : !1;
    }
  }
}
function vn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function jt(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function dt(t, e) {
  return e < 0 ? Ja(t) : Ua(t);
}
function Ja(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for (zn && n.nodeType == 1 && r < vn(n) && jt(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (jt(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (oi(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && jt(l, -1); )
          s = n.parentNode, o = at(l), l = l.previousSibling;
        if (l)
          n = l, r = vn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? fr(t, n, r) : s && fr(t, s, o);
}
function Ua(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = vn(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (jt(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (oi(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && jt(l, 1); )
          o = l.parentNode, i = at(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = vn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && fr(t, o, i);
}
function oi(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ga(t, e) {
  for (; t && e == t.childNodes.length && !Mr(t); )
    e = at(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Ya(t, e) {
  for (; t && !e && !Mr(t); )
    e = at(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function fr(t, e, n) {
  if (e.nodeType != 3) {
    let o, i;
    (i = Ga(e, n)) ? (e = i, n = 0) : (o = Ya(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Xo(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Ir(t);
  }, 50);
}
function ks(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Be || ni) && n.parent.inlineContent) {
    let s = t.coordsAtPos(e);
    if (e > n.start()) {
      let o = t.coordsAtPos(e - 1), i = (o.top + o.bottom) / 2;
      if (i > s.top && i < s.bottom && Math.abs(o.left - s.left) > 1)
        return o.left < s.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t.coordsAtPos(e + 1), i = (o.top + o.bottom) / 2;
      if (i > s.top && i < s.bottom && Math.abs(o.left - s.left) > 1)
        return o.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Cs(t, e, n) {
  let r = t.state.selection;
  if (r instanceof B && !r.empty || n.indexOf("s") > -1 || we && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = dr(t.state, e);
    if (i && i instanceof D)
      return Le(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof ye ? L.near(i, e) : L.findFrom(i, e);
    return l ? Le(t, l) : !1;
  }
  return !1;
}
function Ns(t, e) {
  if (!(t.state.selection instanceof B))
    return !0;
  let { $head: n, $anchor: r, empty: s } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!s)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let i = t.state.tr;
    return e < 0 ? i.delete(n.pos - o.nodeSize, n.pos) : i.delete(n.pos, n.pos + o.nodeSize), t.dispatch(i), !0;
  }
  return !1;
}
function As(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Xa(t) {
  if (!ct || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    As(t, r, "true"), setTimeout(() => As(t, r, "false"), 20);
  }
  return !1;
}
function Qa(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Za(t, e) {
  let n = e.keyCode, r = Qa(e);
  if (n == 8 || we && n == 72 && r == "c")
    return Ns(t, -1) || dt(t, -1);
  if (n == 46 && !e.shiftKey || we && n == 68 && r == "c")
    return Ns(t, 1) || dt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || we && n == 66 && r == "c") {
    let s = n == 37 ? ks(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Ss(t, s, r) || dt(t, s);
  } else if (n == 39 || we && n == 70 && r == "c") {
    let s = n == 39 ? ks(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Ss(t, s, r) || dt(t, s);
  } else {
    if (n == 38 || we && n == 80 && r == "c")
      return Cs(t, -1, r) || dt(t, -1);
    if (n == 40 || we && n == 78 && r == "c")
      return Xa(t) || Cs(t, 1, r) || dt(t, 1);
    if (r == (we ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ii(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || Rn.fromSchema(t.state.schema), l = fi(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = di[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${s} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function li(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new T(C.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, p = Rn.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = i.appendChild(document.createElement("p"));
        g && y.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = rc(n), jr && sc(i);
  let c = i && i.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = i.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      i = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || et.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !ec.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = oc(Es(l, +u[1], +u[2]), u[4]);
  else if (l = T.maxOpen(tc(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = Es(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const ec = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function tc(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let s = e.node(n).contentMatchAt(e.index(n)), o, i = [];
    if (t.forEach((l) => {
      if (!i)
        return;
      let a = s.findWrapping(l.type), c;
      if (!a)
        return i = null;
      if (c = i.length && o.length && ci(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = ui(i[i.length - 1], o.length));
        let u = ai(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return C.from(i);
  }
  return t;
}
function ai(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, C.from(t));
  return t;
}
function ci(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = ci(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(C.from(ai(n, t, s + 1))));
  }
}
function ui(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, ui(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(C.empty, !0);
  return t.copy(n.append(r));
}
function hr(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = hr(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(C.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function Es(t, e, n) {
  return e < t.openStart && (t = new T(hr(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new T(hr(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const di = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Ts = null;
function fi() {
  return Ts || (Ts = document.implementation.createHTMLDocument("title"));
}
let Gn = null;
function nc(t) {
  let e = window.trustedTypes;
  return e ? (Gn || (Gn = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Gn.createHTML(t)) : t;
}
function rc(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = fi().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && di[r[1].toLowerCase()]) && (t = s.map((o) => "<" + o + ">").join("") + t + s.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = nc(t), s)
    for (let o = 0; o < s.length; o++)
      n = n.querySelector(s[o]) || n;
  return n;
}
function sc(t) {
  let e = t.querySelectorAll(Be ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function oc(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: s, openStart: o, openEnd: i } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    s = C.from(a.create(r[l + 1], s)), o++, i++;
  }
  return new T(s, o, i);
}
const Ne = {}, be = {};
function _e(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
be.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !pi(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Kt && Be && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Rr && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Qo(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Za(t, n) ? n.preventDefault() : _e(t, "key");
};
be.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
be.keypress = (t, e) => {
  let n = e;
  if (pi(t, n) || !n.charCode || n.ctrlKey && !n.altKey || we && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof B) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function $n(t) {
  return { left: t.clientX, top: t.clientY };
}
function ic(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Or(t, e, n, r, s) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let i = o.depth + 1; i > 0; i--)
    if (t.someProp(e, (l) => i > o.depth ? l(t, n, o.nodeAfter, o.before(i), s, !0) : l(t, n, o.node(i), o.before(i), s, !1)))
      return !0;
  return !1;
}
function mt(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function lc(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && D.isSelectable(r) ? (mt(t, new D(n)), !0) : !1;
}
function ac(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof D && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let l = i > o.depth ? o.nodeAfter : o.node(i);
    if (D.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? s = o.before(n.$from.depth) : s = o.before(i);
      break;
    }
  }
  return s != null ? (mt(t, D.create(t.state.doc, s)), !0) : !1;
}
function cc(t, e, n, r, s) {
  return Or(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? ac(t, n) : lc(t, n));
}
function uc(t, e, n, r) {
  return Or(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function dc(t, e, n, r) {
  return Or(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || fc(t, n, r);
}
function fc(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (mt(t, B.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let i = o > s.depth ? s.nodeAfter : s.node(o), l = s.before(o);
    if (i.inlineContent)
      mt(t, B.create(r, l + 1, l + 1 + i.content.size));
    else if (D.isSelectable(i))
      mt(t, D.create(r, l));
    else
      continue;
    return !0;
  }
}
function zr(t) {
  return Sn(t);
}
const hi = we ? "metaKey" : "ctrlKey";
Ne.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = zr(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && ic(n, t.input.lastClick) && !n[hi] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let i = t.posAtCoords($n(n));
  i && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new hc(t, i, n, !!r)) : (o == "doubleClick" ? uc : dc)(t, i.pos, i.inside, n) ? n.preventDefault() : _e(t, "pointer"));
};
class hc {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[hi], this.allowDefault = r.shiftKey;
    let o, i;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), i = n.inside;
    else {
      let u = e.state.doc.resolve(n.pos);
      o = u.parent, i = u.depth ? u.before() : 0;
    }
    const l = s ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof D && c.from <= i && c.to > i) && (this.mightDrag = {
      node: o,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && zn && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), _e(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ir(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords($n(e))), this.updateAllowDefault(e), this.allowDefault || !n ? _e(this.view, "pointer") : cc(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ct && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Be && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (mt(this.view, L.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : _e(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), _e(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ne.touchstart = (t) => {
  t.input.lastTouch = Date.now(), zr(t), _e(t, "pointer");
};
Ne.touchmove = (t) => {
  t.input.lastTouch = Date.now(), _e(t, "pointer");
};
Ne.contextmenu = (t) => zr(t);
function pi(t, e) {
  return t.composing ? !0 : ct && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const pc = Kt ? 5e3 : -1;
be.compositionstart = be.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof B && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || Be && ni && mc(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Sn(t, !0), t.markCursor = null;
    else if (Sn(t, !e.selection.empty), zn && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let s = r.focusNode, o = r.focusOffset; s && s.nodeType == 1 && o != 0; ) {
        let i = o < 0 ? s.lastChild : s.childNodes[o - 1];
        if (!i)
          break;
        if (i.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(i, i.nodeValue.length);
          break;
        } else
          s = i, o = -1;
      }
    }
    t.input.composing = !0;
  }
  mi(t, pc);
};
function mc(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
be.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, mi(t, 20));
};
function mi(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Sn(t), e));
}
function gc(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = yc()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function yc() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Sn(t, e = !1) {
  if (!(Kt && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), gc(t), e || t.docView && t.docView.dirty) {
      let n = Ha(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function bc(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Dt = _t && ei < 15 || Rr && Wa < 604;
Ne.copy = be.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = Dt ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = ii(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : bc(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function xc(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function wc(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? pr(t, r.value, null, s, e) : pr(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function pr(t, e, n, r, s) {
  let o = li(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || T.empty)))
    return !0;
  if (!o)
    return !1;
  let i = xc(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function gi(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
be.paste = (t, e) => {
  let n = e;
  if (t.composing && !Kt)
    return;
  let r = Dt ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && pr(t, gi(r), r.getData("text/html"), s, n) ? n.preventDefault() : wc(t, n);
};
class vc {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const Sc = we ? "altKey" : "ctrlKey";
function yi(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[Sc];
}
Ne.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords($n(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof D ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = D.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = D.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = ii(t, l);
  (!n.dataTransfer.files.length || !Be || ti > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Dt ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Dt || n.dataTransfer.setData("text/plain", c), t.dragging = new vc(u, yi(t, n), i);
};
Ne.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
be.dragover = be.dragenter = (t, e) => e.preventDefault();
be.drop = (t, e) => {
  try {
    kc(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function kc(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords($n(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = li(t, gi(e.dataTransfer), Dt ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && yi(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || T.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? da(t.state.doc, s.pos, o) : s.pos;
  l == null && (l = s.pos);
  let a = t.state.tr;
  if (i) {
    let { node: h } = n;
    h ? h.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), u = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = a.doc;
  if (u ? a.replaceRangeWith(c, c, o.content.firstChild) : a.replaceRange(c, c, o), a.doc.eq(d))
    return;
  let f = a.doc.resolve(c);
  if (u && D.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new D(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, g, y, b) => h = b), a.setSelection(si(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Ne.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Ir(t);
  }, 20));
};
Ne.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Ne.beforeinput = (t, e) => {
  if (Be && Kt && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Qo(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in be)
  Ne[t] = be[t];
function Pt(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class kn {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || tt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new ve(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof kn && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Pt(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ke {
  constructor(e, n) {
    this.attrs = e, this.spec = n || tt;
  }
  map(e, n, r, s) {
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new ve(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof Ke && Pt(this.attrs, e.attrs) && Pt(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ke;
  }
  destroy() {
  }
}
class $r {
  constructor(e, n) {
    this.attrs = e, this.spec = n || tt;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new ve(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof $r && Pt(this.attrs, e.attrs) && Pt(this.spec, e.spec);
  }
  destroy() {
  }
}
class ve {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new ve(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new ve(e, e, new kn(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new ve(e, n, new Ke(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new ve(e, n, new $r(r, s));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Ke;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof kn;
  }
}
const ht = [], tt = {};
class Q {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : ht, this.children = n.length ? n : ht;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Cn(n, e, 0, tt) : de;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let s = [];
    return this.findInner(e ?? 0, n ?? 1e9, s, 0, r), s;
  }
  findInner(e, n, r, s, o) {
    for (let i = 0; i < this.local.length; i++) {
      let l = this.local[i];
      l.from <= n && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + s, l.to + s));
    }
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] < n && this.children[i + 1] > e) {
        let l = this.children[i] + 1;
        this.children[i + 2].findInner(e - l, n - l, r, s + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == de || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || tt);
  }
  /**
  @internal
  */
  mapInner(e, n, r, s, o) {
    let i;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      a && a.type.valid(n, a) ? (i || (i = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? Cc(this.children, i || [], e, n, r, s, o) : i ? new Q(i.sort(nt), ht) : de;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == de ? Q.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = xi(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, Cn(u, l, c + 1, tt)), o += 3;
      }
    });
    let i = bi(o ? wi(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new Q(i.length ? this.local.concat(i).sort(nt) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == de ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, s = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let i, l = r[o] + n, a = r[o + 1] + n;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (i || (i = [])).push(d));
      if (!i)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(i, l + 1);
      c != de ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (s.length) {
      for (let o = 0, i; o < e.length; o++)
        if (i = e[o])
          for (let l = 0; l < s.length; l++)
            s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new Q(s, r) : de;
  }
  forChild(e, n) {
    if (this == de)
      return this;
    if (n.isLeaf)
      return Q.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof Ke) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new Q(s.sort(nt), ht);
      return r ? new Ye([l, r]) : l;
    }
    return r || de;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Q) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Dr(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == de)
      return ht;
    if (e.inlineContent || !this.local.some(Ke.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Ke || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Q.empty = new Q([], []);
Q.removeOverlap = Dr;
const de = Q.empty;
class Ye {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, tt));
    return Ye.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Q.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].forChild(e, n);
      o != de && (o instanceof Ye ? r = r.concat(o.members) : r.push(o));
    }
    return Ye.from(r);
  }
  eq(e) {
    if (!(e instanceof Ye) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = !1);
          for (let i = 0; i < o.length; i++)
            n.push(o[i]);
        }
    }
    return n ? Dr(r ? n : n.sort(nt)) : ht;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return de;
      case 1:
        return e[0];
      default:
        return new Ye(e.every((n) => n instanceof Q) ? e : e.reduce((n, r) => n.concat(r instanceof Q ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function Cc(t, e, n, r, s, o, i) {
  let l = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, p, g) => {
      let y = g - p - (h - f);
      for (let b = 0; b < l.length; b += 3) {
        let x = l[b + 1];
        if (x < 0 || f > x + u - d)
          continue;
        let v = l[b] + u - d;
        h >= v ? l[b + 1] = f <= v ? -2 : -1 : f >= u && y && (l[b] += y, l[b + 1] += y);
      }
      d += y;
    }), u = n.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = n.map(t[c] + o), d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + o, -1), h = f - s, { index: p, offset: g } = r.content.findIndex(d), y = r.maybeChild(p);
      if (y && g == d && g + y.nodeSize == h) {
        let b = l[c + 2].mapInner(n, y, u + 1, t[c] + o + 1, i);
        b != de ? (l[c] = d, l[c + 1] = h, l[c + 2] = b) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Nc(l, t, e, n, s, o, i), u = Cn(c, r, 0, i);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new Q(e.sort(nt), l);
}
function bi(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new ve(s.from + e, s.to + e, s.type));
  }
  return n;
}
function Nc(t, e, n, r, s, o, i) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, s, c);
      d ? n.push(d) : i.onRemove && i.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + o + 1);
  return n;
}
function xi(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function wi(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Cn(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = xi(t, l, a + n);
    if (c) {
      o = !0;
      let u = Cn(c, l, n + a + 1, r);
      u != de && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = bi(o ? wi(t) : t, -n).sort(nt);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new Q(i, s) : de;
}
function nt(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Dr(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let o = e[s];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[s] = o.copy(o.from, r.to), Ms(e, s + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), Ms(e, s, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Ms(t, e, n) {
  for (; e < t.length && nt(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var qe = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Nn = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Ac = typeof navigator < "u" && /Mac/.test(navigator.platform), Ec = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var oe = 0; oe < 10; oe++) qe[48 + oe] = qe[96 + oe] = String(oe);
for (var oe = 1; oe <= 24; oe++) qe[oe + 111] = "F" + oe;
for (var oe = 65; oe <= 90; oe++)
  qe[oe] = String.fromCharCode(oe + 32), Nn[oe] = String.fromCharCode(oe);
for (var Yn in qe) Nn.hasOwnProperty(Yn) || (Nn[Yn] = qe[Yn]);
function Tc(t) {
  var e = Ac && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Ec && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Nn : qe)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Mc = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Rc = typeof navigator < "u" && /Win/.test(navigator.platform);
function jc(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, s, o, i;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      i = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Mc ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Ic(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[jc(n)] = t[n];
  return e;
}
function Xn(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function Oc(t) {
  let e = Ic(t);
  return function(n, r) {
    let s = Tc(r), o, i = e[Xn(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[Xn(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Rc && r.ctrlKey && r.altKey) && (o = qe[r.keyCode]) && o != s) {
        let l = e[Xn(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var zc = Object.defineProperty, Pr = (t, e) => {
  for (var n in e)
    zc(t, n, { get: e[n], enumerable: !0 });
};
function vi(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: s } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = n.selection, s = n.doc, o = n.storedMarks, n;
    }
  };
}
var $c = class {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: e, state: n } = this, { view: r } = e, { tr: s } = n, o = this.buildProps(s);
    return Object.fromEntries(
      Object.entries(t).map(([i, l]) => [i, (...c) => {
        const u = l(...c)(o);
        return !s.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(s), u;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, e = !0) {
    const { rawCommands: n, editor: r, state: s } = this, { view: o } = r, i = [], l = !!t, a = t || s.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(a), i.every((d) => d === !0)), u = {
      ...Object.fromEntries(
        Object.entries(n).map(([d, f]) => [d, (...p) => {
          const g = this.buildProps(a, e), y = f(...p)(g);
          return i.push(y), u;
        }])
      ),
      run: c
    };
    return u;
  }
  createCan(t) {
    const { rawCommands: e, state: n } = this, r = !1, s = t || n.tr, o = this.buildProps(s, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...o, dispatch: void 0 })])
      ),
      chain: () => this.createChain(s, r)
    };
  }
  buildProps(t, e = !0) {
    const { rawCommands: n, editor: r, state: s } = this, { view: o } = r, i = {
      tr: t,
      editor: r,
      view: o,
      state: vi({
        state: s,
        transaction: t
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t, e),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(
          Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(i)])
        );
      }
    };
    return i;
  }
}, Si = {};
Pr(Si, {
  blur: () => Dc,
  clearContent: () => Pc,
  clearNodes: () => Fc,
  command: () => Bc,
  createParagraphNear: () => Lc,
  cut: () => Wc,
  deleteCurrentNode: () => Hc,
  deleteNode: () => Vc,
  deleteRange: () => _c,
  deleteSelection: () => Kc,
  enter: () => qc,
  exitCode: () => Jc,
  extendMarkRange: () => Gc,
  first: () => Yc,
  focus: () => Zc,
  forEach: () => eu,
  insertContent: () => tu,
  insertContentAt: () => su,
  joinBackward: () => lu,
  joinDown: () => iu,
  joinForward: () => au,
  joinItemBackward: () => cu,
  joinItemForward: () => uu,
  joinTextblockBackward: () => du,
  joinTextblockForward: () => fu,
  joinUp: () => ou,
  keyboardShortcut: () => pu,
  lift: () => mu,
  liftEmptyBlock: () => gu,
  liftListItem: () => yu,
  newlineInCode: () => bu,
  resetAttributes: () => xu,
  scrollIntoView: () => wu,
  selectAll: () => vu,
  selectNodeBackward: () => Su,
  selectNodeForward: () => ku,
  selectParentNode: () => Cu,
  selectTextblockEnd: () => Nu,
  selectTextblockStart: () => Au,
  setContent: () => Tu,
  setMark: () => Lu,
  setMeta: () => Wu,
  setNode: () => Hu,
  setNodeSelection: () => Vu,
  setTextDirection: () => _u,
  setTextSelection: () => Ku,
  sinkListItem: () => qu,
  splitBlock: () => Ju,
  splitListItem: () => Uu,
  toggleList: () => Gu,
  toggleMark: () => Yu,
  toggleNode: () => Xu,
  toggleWrap: () => Qu,
  undoInputRule: () => Zu,
  unsetAllMarks: () => ed,
  unsetMark: () => td,
  unsetTextDirection: () => nd,
  updateAttributes: () => rd,
  wrapIn: () => sd,
  wrapInList: () => od
});
var Dc = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), Pc = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), Fc = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = xt(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Bc = (t) => (e) => t(e), Lc = () => ({ state: t, dispatch: e }) => qo(t, e), Wc = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new B(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Hc = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = t.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === r.type) {
      if (e) {
        const l = s.before(o), a = s.after(o);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function ae(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var Vc = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = ae(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), c = o.after(i);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, _c = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Kc = () => ({ state: t, dispatch: e }) => Cr(t, e), qc = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Jc = () => ({ state: t, dispatch: e }) => Ca(t, e);
function Uc(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function An(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : Uc(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function ki(t, e, n = {}) {
  return t.find((r) => r.type === e && An(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function Rs(t, e, n = {}) {
  return !!ki(t, e, n);
}
function Ci(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !ki([...s.node.marks], e, n)))
    return;
  let i = s.index, l = t.start() + s.offset, a = i + 1, c = l + s.node.nodeSize;
  for (; i > 0 && Rs([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, l -= t.parent.child(i).nodeSize;
  for (; a < t.parent.childCount && Rs([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Ue(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var Gc = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = Ue(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = Ci(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = B.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Yc = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ni(t) {
  return t instanceof B;
}
function Xe(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Xc(t, e = null) {
  if (!e)
    return null;
  const n = L.atStart(t), r = L.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? B.create(t, Xe(0, s, o), Xe(t.content.size, s, o)) : B.create(t, Xe(e, s, o), Xe(e, s, o));
}
function js() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function En() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Qc() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var Zc = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (En() || js()) && r.dom.focus(), Qc() && !En() && !js() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !Ni(n.state.selection))
    return i(), !0;
  const l = Xc(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, eu = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), tu = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), Ai = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Ai(r);
  }
  return t;
};
function tn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ai(n);
}
function Ft(t, e, n) {
  if (t instanceof Me || t instanceof C)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, s = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return C.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), Ft("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, l = "";
      const a = new Wl({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (i = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? et.fromSchema(a).parseSlice(tn(t), n.parseOptions) : et.fromSchema(a).parse(tn(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = et.fromSchema(e);
    return n.slice ? o.parseSlice(tn(t), n.parseOptions).content : o.parse(tn(t), n.parseOptions);
  }
  return Ft("", e, n);
}
function nu(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof te || s instanceof re))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((l, a, c, u) => {
    i === 0 && (i = u);
  }), t.setSelection(L.near(t.doc.resolve(i), n));
}
var ru = (t) => !("type" in t), su = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
  var i;
  if (s) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const a = (y) => {
      o.emit("contentError", {
        editor: o,
        error: y,
        disableCollaboration: () => {
          "collaboration" in o.storage && typeof o.storage.collaboration == "object" && o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        Ft(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = Ft(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((ru(l) ? l : [l]).forEach((y) => {
      y.check(), f = f ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), u === d && h) {
      const { parent: y } = r.doc.resolve(u);
      y.isTextblock && !y.type.spec.code && !y.childCount && (u -= 1, d += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof C) {
        let y = "";
        e.forEach((b) => {
          b.text && (y += b.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else {
      g = l;
      const y = r.doc.resolve(u), b = y.node(), x = y.parentOffset === 0, v = b.isText || b.isTextblock, k = b.content.size > 0;
      x && v && k && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && nu(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, ou = () => ({ state: t, dispatch: e }) => va(t, e), iu = () => ({ state: t, dispatch: e }) => Sa(t, e), lu = () => ({ state: t, dispatch: e }) => Bo(t, e), au = () => ({ state: t, dispatch: e }) => Vo(t, e), cu = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = jn(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, uu = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = jn(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, du = () => ({ state: t, dispatch: e }) => xa(t, e), fu = () => ({ state: t, dispatch: e }) => wa(t, e);
function Ei() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function hu(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, s, o, i;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      i = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      En() || Ei() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var pu = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = hu(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a?.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && s && r.maybeStep(u);
  }), !0;
};
function Fr(t, e, n = {}) {
  const { from: r, to: s, empty: o } = t.selection, i = e ? ae(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, s, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), p = Math.min(s, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: p
    });
  });
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => An(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var mu = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ae(t, n.schema);
  return Fr(n, s, e) ? ka(n, r) : !1;
}, gu = () => ({ state: t, dispatch: e }) => Jo(t, e), yu = (t) => ({ state: e, dispatch: n }) => {
  const r = ae(t, e.schema);
  return $a(r)(e, n);
}, bu = () => ({ state: t, dispatch: e }) => Ko(t, e);
function Ti(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Is(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var xu = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ti(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ae(t, r.schema)), l === "mark" && (i = Ue(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, Is(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, i.create(Is(f.attrs, e))));
      });
    });
  }), a;
}, wu = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), vu = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ye(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Su = () => ({ state: t, dispatch: e }) => Wo(t, e), ku = () => ({ state: t, dispatch: e }) => _o(t, e), Cu = () => ({ state: t, dispatch: e }) => Ea(t, e), Nu = () => ({ state: t, dispatch: e }) => Ra(t, e), Au = () => ({ state: t, dispatch: e }) => Ma(t, e);
function Eu(t, e, n = {}, r = {}) {
  return Ft(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Tu = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = Eu(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function Mu(t, e) {
  const n = Ue(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function Ru(t, e) {
  const n = new zo(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function ju(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Mi(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Br(t) {
  return (e) => Mi(e.$from, t);
}
function bt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? bt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? bt(t.parent, e, n) : null
  }) : t.config[e];
}
function Iu(t) {
  return typeof t == "function";
}
function Bt(t, e = void 0, ...n) {
  return Iu(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Ri(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function wt(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([s, o]) => {
      if (!r[s]) {
        r[s] = o;
        return;
      }
      if (s === "class") {
        const l = o ? String(o).split(" ") : [], a = r[s] ? r[s].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[s] = [...a, ...c].join(" ");
      } else if (s === "style") {
        const l = o ? o.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[s] ? r[s].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), l.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), r[s] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[s] = o;
    }), r;
  }, {});
}
function Ou(t, e, n) {
  const { from: r, to: s } = e, { blockSeparator: o = `

`, textSerializers: i = {} } = n || {};
  let l = "";
  return t.nodesBetween(r, s, (a, c, u, d) => {
    var f;
    a.isBlock && c > r && (l += o);
    const h = i?.[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: d,
        range: e
      })), !1;
    a.isText && (l += (f = a?.text) == null ? void 0 : f.slice(Math.max(r, c) - c, s - c));
  }), l;
}
function zu(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function $u(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function Du(t) {
  const e = $u(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function Pu(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((s, o) => {
    const i = [];
    if (s.ranges.length)
      s.forEach((l, a) => {
        i.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[o];
      if (l === void 0 || a === void 0)
        return;
      i.push({ from: l, to: a });
    }
    i.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), u = e.slice(o).map(a), d = e.invert().map(c, -1), f = e.invert().map(u);
      r.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), Du(r);
}
function dn(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function Fu(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? Ue(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => An(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    t.doc.nodesBetween(h, p, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const b = Math.max(h, y), x = Math.min(p, y + g.nodeSize), v = x - b;
      i += v, l.push(
        ...g.marks.map((k) => ({
          mark: k,
          from: b,
          to: x
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => An(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function Os(t, e) {
  const { nodeExtensions: n } = Ri(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = Bt(bt(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function ji(t, {
  checkChildren: e = !0,
  ignoreWhitespace: n = !1
} = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) != null ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let s = !0;
    return t.content.forEach((o) => {
      s !== !1 && (ji(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function Bu(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (Ni(s) && (o = s.$cursor), o) {
    const l = (r = t.storedMarks) != null ? r : o.marks();
    return o.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((c) => c.type.excludes(n)));
  }
  const { ranges: i } = s;
  return i.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(n), p = !!n.isInSet(u.marks) || !u.marks.some((g) => g.type.excludes(n));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
var Lu = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = Ue(t, r.schema);
  if (s)
    if (i) {
      const c = Mu(r, a);
      n.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        r.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), g = Math.min(h + f.nodeSize, d);
          f.marks.find((b) => b.type === a) ? f.marks.forEach((b) => {
            a === b.type && n.addMark(
              p,
              g,
              a.create({
                ...b.attrs,
                ...e
              })
            );
          }) : n.addMark(p, g, a.create(e));
        });
      });
  return Bu(r, n, a);
}, Wu = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Hu = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = ae(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => ms(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => ms(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Vu = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = Xe(t, 0, r.content.size), o = D.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, _u = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Ku = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = B.atStart(r).from, l = B.atEnd(r).to, a = Xe(s, i, l), c = Xe(o, i, l), u = B.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, qu = (t) => ({ state: e, dispatch: n }) => {
  const r = ae(t, e.schema);
  return Fa(r)(e, n);
};
function zs(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Ju = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = dn(c, l.node().type.name, l.node().attrs);
  if (o instanceof D && o.node.isBlock)
    return !l.parentOffset || !Fe(i, l.pos) ? !1 : (r && (t && zs(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : ju(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Fe(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Fe(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof B && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && zs(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Uu = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const l = ae(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const d = a.node(-1);
  if (d.type !== l)
    return !1;
  const f = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (s) {
      let b = C.empty;
      const x = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let F = a.depth - x; F >= a.depth - 3; F -= 1)
        b = C.from(a.node(F).copy(b));
      const v = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), k = {
        ...dn(f, a.node().type.name, a.node().attrs),
        ...e
      }, E = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(k)) || void 0;
      b = b.append(C.from(l.createAndFill(null, E) || void 0));
      const R = a.before(a.depth - (x - 1));
      n.replace(R, a.after(-v), new T(b, 4 - x, 0));
      let z = -1;
      n.doc.nodesBetween(R, n.doc.content.size, (F, K) => {
        if (z > -1)
          return !1;
        F.isTextblock && F.content.size === 0 && (z = K + 1);
      }), z > -1 && n.setSelection(B.near(n.doc.resolve(z))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...dn(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...dn(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: p },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: p }];
  if (!Fe(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: x } = r, { splittableMarks: v } = o.extensionManager, k = x || b.$to.parentOffset && b.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !k || !s)
      return !0;
    const E = k.filter((R) => v.includes(R.type.name));
    n.ensureMarks(E);
  }
  return !0;
}, Qn = (t, e) => {
  const n = Br((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && lt(t.doc, n.pos) && t.join(n.pos), !0;
}, Zn = (t, e) => {
  const n = Br((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && lt(t.doc, r) && t.join(r), !0;
}, Gu = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = ae(t, i.schema), p = ae(e, i.schema), { selection: g, storedMarks: y } = i, { $from: b, $to: x } = g, v = b.blockRange(x), k = y || g.$to.parentOffset && g.$from.marks();
  if (!v)
    return !1;
  const E = Br((R) => Os(R.type.name, d))(g);
  if (v.depth >= 1 && E && v.depth - E.depth <= 1) {
    if (E.node.type === h)
      return c.liftListItem(p);
    if (Os(E.node.type.name, d) && h.validContent(E.node.content) && l)
      return a().command(() => (o.setNodeMarkup(E.pos, h), !0)).command(() => Qn(o, h)).command(() => Zn(o, h)).run();
  }
  return !n || !k || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Qn(o, h)).command(() => Zn(o, h)).run() : a().command(() => {
    const R = u().wrapInList(h, r), z = k.filter((F) => f.includes(F.type.name));
    return o.ensureMarks(z), R ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Qn(o, h)).command(() => Zn(o, h)).run();
}, Yu = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = Ue(t, r.schema);
  return Fu(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, Xu = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = ae(t, r.schema), i = ae(e, r.schema), l = Fr(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, Qu = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = ae(t, n.schema);
  return Fr(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Zu = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const s = n[r];
    let o;
    if (s.spec.isInputRules && (o = s.getState(t))) {
      if (e) {
        const i = t.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          i.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = i.doc.resolve(o.from).marks();
          i.replaceWith(o.from, o.to, t.schema.text(o.text, a));
        } else
          i.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, ed = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, td = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = Ue(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((y) => y.type === a)) == null ? void 0 : o.attrs, g = Ci(c, a, p);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, nd = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, rd = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ti(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ae(t, r.schema)), l === "mark" && (i = Ue(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, p, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (y, b) => {
      o && o === y.type && (a = !0, p = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y);
    }) : r.doc.nodesBetween(u, d, (y, b) => {
      b < u && o && o === y.type && (a = !0, p = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y), b >= u && b <= d && (o && o === y.type && (a = !0, s && n.setNodeMarkup(b, void 0, {
        ...y.attrs,
        ...e
      })), i && y.marks.length && y.marks.forEach((x) => {
        if (i === x.type && (a = !0, s)) {
          const v = Math.max(b, u), k = Math.min(b + y.nodeSize, d);
          n.addMark(
            v,
            k,
            i.create({
              ...x.attrs,
              ...e
            })
          );
        }
      }));
    }), h && (f !== void 0 && s && n.setNodeMarkup(f, void 0, {
      ...h.attrs,
      ...e
    }), i && h.marks.length && h.marks.forEach((y) => {
      i === y.type && s && n.addMark(
        p,
        g,
        i.create({
          ...y.attrs,
          ...e
        })
      );
    }));
  }), a;
}, sd = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ae(t, n.schema);
  return ja(s, e)(n, r);
}, od = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ae(t, n.schema);
  return Ia(s, e)(n, r);
}, id = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function ld(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function nn(t) {
  return ld(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Ii(t, e) {
  const n = { ...t };
  return nn(t) && nn(e) && Object.keys(e).forEach((r) => {
    nn(e[r]) && nn(t[r]) ? n[r] = Ii(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var Lr = class {
  constructor(t = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...Bt(
        bt(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...Bt(
        bt(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Ii(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, ad = class Oi extends Lr {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Oi(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, s = e.state.selection.$from;
    if (s.pos === s.end()) {
      const i = s.marks();
      if (!!!i.find((c) => c?.type.name === n.name))
        return !1;
      const a = i.find((c) => c?.type.name === n.name);
      return a && r.removeStoredMark(a), r.insertText(" ", s.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, cd = {};
Pr(cd, {
  ClipboardTextSerializer: () => ud,
  Commands: () => dd,
  Delete: () => fd,
  Drop: () => hd,
  Editable: () => pd,
  FocusEvents: () => md,
  Keymap: () => gd,
  Paste: () => yd,
  Tabindex: () => bd,
  TextDirection: () => xd,
  focusEventsPluginKey: () => $i
});
var Ae = class zi extends Lr {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new zi(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, ud = Ae.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = zu(n);
            return Ou(r, { from: i, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), dd = Ae.create({
  name: "commands",
  addCommands() {
    return {
      ...Si
    };
  }
}), fd = Ae.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = Ru(t.before, [t, ...e]);
      Pu(u).forEach((h) => {
        u.mapping.mapResult(h.oldRange.from).deletedAfter && u.mapping.mapResult(h.oldRange.to).deletedBefore && u.before.nodesBetween(h.oldRange.from, h.oldRange.to, (p, g) => {
          const y = g + p.nodeSize - 2, b = h.oldRange.from <= g && y <= h.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: g,
            to: y,
            newFrom: u.mapping.map(g),
            newTo: u.mapping.map(y),
            deletedRange: h.oldRange,
            newRange: h.newRange,
            partial: !b,
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        });
      });
      const f = u.mapping;
      u.steps.forEach((h, p) => {
        var g, y;
        if (h instanceof ke) {
          const b = f.slice(p).map(h.from, -1), x = f.slice(p).map(h.to), v = f.invert().map(b, -1), k = f.invert().map(x), E = (g = u.doc.nodeAt(b - 1)) == null ? void 0 : g.marks.some((z) => z.eq(h.mark)), R = (y = u.doc.nodeAt(x)) == null ? void 0 : y.marks.some((z) => z.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: v,
              to: k
            },
            newRange: {
              from: b,
              to: x
            },
            partial: !!(R || E),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), hd = Ae.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), pd = Ae.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), $i = new Ce("focusEvents"), md = Ae.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new je({
        key: $i,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), gd = Ae.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = p.parent.type.spec.isolating, y = d.pos - d.parentOffset, b = g && p.parent.childCount === 1 ? y === d.pos : L.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !b || b && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
      }),
      () => i.deleteSelection(),
      () => i.joinBackward(),
      () => i.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: i }) => [
      () => i.deleteSelection(),
      () => i.deleteCurrentNode(),
      () => i.joinForward(),
      () => i.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        () => i.newlineInCode(),
        () => i.createParagraphNear(),
        () => i.liftEmptyBlock(),
        () => i.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return En() || Ei() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new je({
        key: new Ce("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: l } = e.selection, a = L.atStart(e.doc).from, c = L.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !ji(n.doc))
            return;
          const f = n.tr, h = vi({
            state: n,
            transaction: f
          }), { commands: p } = new $c({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), yd = Ae.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), bd = Ae.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), xd = Ae.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Ri(this.extensions);
    return [
      {
        types: t.filter((e) => e.name !== "text").map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              const n = e.getAttribute("dir");
              return n && (n === "ltr" || n === "rtl" || n === "auto") ? n : this.options.direction;
            },
            renderHTML: (e) => e.dir ? {
              dir: e.dir
            } : {}
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new je({
        key: new Ce("textDirection"),
        props: {
          attributes: () => {
            const t = this.options.direction;
            return t ? {
              dir: t
            } : {};
          }
        }
      })
    ];
  }
});
function wd(t) {
  return new id({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Bt(t.getAttributes, void 0, r) || {}, { tr: o } = e, i = n.from;
      let l = n.to;
      const a = t.type.create(s);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = i + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, i + r[0].length - 1), o.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? i : i - 1;
        o.insert(c, t.type.create(s)).delete(o.mapping.map(i), o.mapping.map(l));
      }
      o.scrollIntoView();
    },
    undoable: t.undoable
  });
}
var vd = (t) => "touches" in t, Sd = class {
  /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */
  constructor(t) {
    this.directions = ["bottom-left", "bottom-right", "top-left", "top-right"], this.minSize = {
      height: 8,
      width: 8
    }, this.preserveAspectRatio = !1, this.classNames = {
      container: "",
      wrapper: "",
      handle: "",
      resizing: ""
    }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = /* @__PURE__ */ new Map(), this.handleMouseMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.clientX - this.startX, c = l.clientY - this.startY;
      this.handleResize(a, c);
    }, this.handleTouchMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.touches[0];
      if (!a)
        return;
      const c = a.clientX - this.startX, u = a.clientY - this.startY;
      this.handleResize(c, u);
    }, this.handleMouseUp = () => {
      if (!this.isResizing)
        return;
      const l = this.element.offsetWidth, a = this.element.offsetHeight;
      this.onCommit(l, a), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
    }, this.handleKeyDown = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !0);
    }, this.handleKeyUp = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !1);
    };
    var e, n, r, s, o, i;
    this.node = t.node, this.editor = t.editor, this.element = t.element, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = {
      ...this.minSize,
      ...t.options.min
    }), (n = t.options) != null && n.max && (this.maxSize = t.options.max), (r = t?.options) != null && r.directions && (this.directions = t.options.directions), (s = t.options) != null && s.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), (o = t.options) != null && o.className && (this.classNames = {
      container: t.options.className.container || "",
      wrapper: t.options.className.wrapper || "",
      handle: t.options.className.handle || "",
      resizing: t.options.className.resizing || ""
    }), (i = t.options) != null && i.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
  }
  /**
   * Returns the top-level DOM node that should be placed in the editor.
   *
   * This is required by the ProseMirror NodeView interface. The container
   * includes the wrapper, handles, and the actual content element.
   *
   * @returns The container element to be inserted into the editor
   */
  get dom() {
    return this.container;
  }
  get contentDOM() {
    var t;
    return (t = this.contentElement) != null ? t : null;
  }
  handleEditorUpdate() {
    const t = this.editor.isEditable;
    t !== this.lastEditableState && (this.lastEditableState = t, t ? t && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
  }
  /**
   * Called when the node's content or attributes change.
   *
   * Updates the internal node reference. If a custom `onUpdate` callback
   * was provided, it will be called to handle additional update logic.
   *
   * @param node - The new/updated node
   * @param decorations - Node decorations
   * @param innerDecorations - Inner decorations
   * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
   */
  update(t, e, n) {
    return t.type !== this.node.type ? !1 : (this.node = t, this.onUpdate ? this.onUpdate(t, e, n) : !0);
  }
  /**
   * Cleanup method called when the node view is being removed.
   *
   * Removes all event listeners to prevent memory leaks. This is required
   * by the ProseMirror NodeView interface. If a resize is active when
   * destroy is called, it will be properly cancelled.
   */
  destroy() {
    this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove();
  }
  /**
   * Creates the outer container element.
   *
   * The container is the top-level element returned by the NodeView and
   * wraps the entire resizable node. It's set up with flexbox to handle
   * alignment and includes data attributes for styling and identification.
   *
   * @returns The container element
   */
  createContainer() {
    const t = document.createElement("div");
    return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t;
  }
  /**
   * Creates the wrapper element that contains the content and handles.
   *
   * The wrapper uses relative positioning so that resize handles can be
   * positioned absolutely within it. This is the direct parent of the
   * content element being made resizable.
   *
   * @returns The wrapper element
   */
  createWrapper() {
    const t = document.createElement("div");
    return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t;
  }
  /**
   * Creates a resize handle element for a specific direction.
   *
   * Each handle is absolutely positioned and includes a data attribute
   * identifying its direction for styling purposes.
   *
   * @param direction - The resize direction for this handle
   * @returns The handle element
   */
  createHandle(t) {
    const e = document.createElement("div");
    return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e;
  }
  /**
   * Positions a handle element according to its direction.
   *
   * Corner handles (e.g., 'top-left') are positioned at the intersection
   * of two edges. Edge handles (e.g., 'top') span the full width or height.
   *
   * @param handle - The handle element to position
   * @param direction - The direction determining the position
   */
  positionHandle(t, e) {
    const n = e.includes("top"), r = e.includes("bottom"), s = e.includes("left"), o = e.includes("right");
    n && (t.style.top = "0"), r && (t.style.bottom = "0"), s && (t.style.left = "0"), o && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0");
  }
  /**
   * Creates and attaches all resize handles to the wrapper.
   *
   * Iterates through the configured directions, creates a handle for each,
   * positions it, attaches the mousedown listener, and appends it to the DOM.
   */
  attachHandles() {
    this.directions.forEach((t) => {
      let e;
      this.createCustomHandle ? e = this.createCustomHandle(t) : e = this.createHandle(t), e instanceof HTMLElement || (console.warn(
        `[ResizableNodeView] createCustomHandle("${t}") did not return an HTMLElement. Falling back to default handle.`
      ), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", (n) => this.handleResizeStart(n, t)), e.addEventListener("touchstart", (n) => this.handleResizeStart(n, t)), this.handleMap.set(t, e), this.wrapper.appendChild(e);
    });
  }
  /**
   * Removes all resize handles from the wrapper.
   *
   * Cleans up the handle map and removes each handle element from the DOM.
   */
  removeHandles() {
    this.handleMap.forEach((t) => t.remove()), this.handleMap.clear();
  }
  /**
   * Applies initial sizing from node attributes to the element.
   *
   * If width/height attributes exist on the node, they're applied to the element.
   * Otherwise, the element's natural/current dimensions are measured. The aspect
   * ratio is calculated for later use in aspect-ratio-preserving resizes.
   */
  applyInitialSize() {
    const t = this.node.attrs.width, e = this.node.attrs.height;
    t ? (this.element.style.width = `${t}px`, this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = `${e}px`, this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
  }
  /**
   * Initiates a resize operation when a handle is clicked.
   *
   * Captures the starting mouse position and element dimensions, sets up
   * the resize state, adds the resizing class and state attribute, and
   * attaches document-level listeners for mouse movement and keyboard input.
   *
   * @param event - The mouse down event
   * @param direction - The direction of the handle being dragged
   */
  handleResizeStart(t, e) {
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, vd(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(t, e) {
    if (!this.activeHandle)
      return;
    const n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: r, height: s } = this.calculateNewDimensions(this.activeHandle, t, e), o = this.applyConstraints(r, s, n);
    this.element.style.width = `${o.width}px`, this.element.style.height = `${o.height}px`, this.onResize && this.onResize(o.width, o.height);
  }
  /**
   * Calculates new dimensions based on mouse delta and resize direction.
   *
   * Takes the starting dimensions and applies the mouse movement delta
   * according to the handle direction. For corner handles, both dimensions
   * are affected. For edge handles, only one dimension changes. If aspect
   * ratio should be preserved, delegates to applyAspectRatio.
   *
   * @param direction - The active resize handle direction
   * @param deltaX - Horizontal mouse movement since resize start
   * @param deltaY - Vertical mouse movement since resize start
   * @returns The calculated width and height
   */
  calculateNewDimensions(t, e, n) {
    let r = this.startWidth, s = this.startHeight;
    const o = t.includes("right"), i = t.includes("left"), l = t.includes("bottom"), a = t.includes("top");
    return o ? r = this.startWidth + e : i && (r = this.startWidth - e), l ? s = this.startHeight + n : a && (s = this.startHeight - n), (t === "right" || t === "left") && (r = this.startWidth + (o ? e : -e)), (t === "top" || t === "bottom") && (s = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, s, t) : { width: r, height: s };
  }
  /**
   * Applies min/max constraints to dimensions.
   *
   * When aspect ratio is NOT preserved, constraints are applied independently
   * to width and height. When aspect ratio IS preserved, constraints are
   * applied while maintaining the aspect ratio—if one dimension hits a limit,
   * the other is recalculated proportionally.
   *
   * This ensures that aspect ratio is never broken when constrained.
   *
   * @param width - The unconstrained width
   * @param height - The unconstrained height
   * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
   * @returns The constrained dimensions
   */
  applyConstraints(t, e, n) {
    var r, s, o, i;
    if (!n) {
      let c = Math.max(this.minSize.width, t), u = Math.max(this.minSize.height, e);
      return (r = this.maxSize) != null && r.width && (c = Math.min(this.maxSize.width, c)), (s = this.maxSize) != null && s.height && (u = Math.min(this.maxSize.height, u)), { width: c, height: u };
    }
    let l = t, a = e;
    return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), (o = this.maxSize) != null && o.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), (i = this.maxSize) != null && i.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), { width: l, height: a };
  }
  /**
   * Adjusts dimensions to maintain the original aspect ratio.
   *
   * For horizontal handles (left/right), uses width as the primary dimension
   * and calculates height from it. For vertical handles (top/bottom), uses
   * height as primary and calculates width. For corner handles, uses width
   * as the primary dimension.
   *
   * @param width - The new width
   * @param height - The new height
   * @param direction - The active resize direction
   * @returns Dimensions adjusted to preserve aspect ratio
   */
  applyAspectRatio(t, e, n) {
    const r = n === "left" || n === "right", s = n === "top" || n === "bottom";
    return r ? {
      width: t,
      height: t / this.aspectRatio
    } : s ? {
      width: e * this.aspectRatio,
      height: e
    } : {
      width: t,
      height: t / this.aspectRatio
    };
  }
}, kd = {};
Pr(kd, {
  createAtomBlockMarkdownSpec: () => Cd,
  createBlockMarkdownSpec: () => Nd,
  createInlineMarkdownSpec: () => Td,
  parseAttributes: () => Wr,
  parseIndentedBlocks: () => Md,
  renderNestedMarkdownContent: () => Rd,
  serializeAttributes: () => Hr
});
function Wr(t) {
  if (!t?.trim())
    return {};
  const e = {}, n = [], r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)), s = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (s) {
    const c = s.map((u) => u.trim().slice(1));
    e.class = c.join(" ");
  }
  const o = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  o && (e.id = o[1]);
  const i = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(i)).forEach(([, c, u]) => {
    var d;
    const f = parseInt(((d = u.match(/__QUOTED_(\d+)__/)) == null ? void 0 : d[1]) || "0", 10), h = n[f];
    h && (e[c] = h.slice(1, -1));
  });
  const a = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((u) => {
    u.match(/^[a-zA-Z][\w-]*$/) && (e[u] = !0);
  }), e;
}
function Hr(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function Cd(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = Wr,
    serializeAttributes: s = Hr,
    defaultAttributes: o = {},
    requiredAttributes: i = [],
    allowedAttributes: l
  } = t, a = n || e, c = (u) => {
    if (!l)
      return u;
    const d = {};
    return l.forEach((f) => {
      f in u && (d[f] = u[f]);
    }), d;
  };
  return {
    parseMarkdown: (u, d) => {
      const f = { ...o, ...u.attributes };
      return d.createNode(e, f, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u) {
        var d;
        const f = new RegExp(`^:::${a}(?:\\s|$)`, "m"), h = (d = u.match(f)) == null ? void 0 : d.index;
        return h !== void 0 ? h : -1;
      },
      tokenize(u, d, f) {
        const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), p = u.match(h);
        if (!p)
          return;
        const g = p[1] || "", y = r(g);
        if (!i.find((x) => !(x in y)))
          return {
            type: e,
            raw: p[0],
            attributes: y
          };
      }
    },
    renderMarkdown: (u) => {
      const d = c(u.attrs || {}), f = s(d), h = f ? ` {${f}}` : "";
      return `:::${a}${h} :::`;
    }
  };
}
function Nd(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = Wr,
    serializeAttributes: o = Hr,
    defaultAttributes: i = {},
    content: l = "block",
    allowedAttributes: a
  } = t, c = n || e, u = (d) => {
    if (!a)
      return d;
    const f = {};
    return a.forEach((h) => {
      h in d && (f[h] = d[h]);
    }), f;
  };
  return {
    parseMarkdown: (d, f) => {
      let h;
      if (r) {
        const g = r(d);
        h = typeof g == "string" ? [{ type: "text", text: g }] : g;
      } else l === "block" ? h = f.parseChildren(d.tokens || []) : h = f.parseInline(d.tokens || []);
      const p = { ...i, ...d.attributes };
      return f.createNode(e, p, h);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(d) {
        var f;
        const h = new RegExp(`^:::${c}`, "m"), p = (f = d.match(h)) == null ? void 0 : f.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(d, f, h) {
        var p;
        const g = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), y = d.match(g);
        if (!y)
          return;
        const [b, x = ""] = y, v = s(x);
        let k = 1;
        const E = b.length;
        let R = "";
        const z = /^:::([\w-]*)(\s.*)?/gm, F = d.slice(E);
        for (z.lastIndex = 0; ; ) {
          const K = z.exec(F);
          if (K === null)
            break;
          const W = K.index, w = K[1];
          if (!((p = K[2]) != null && p.endsWith(":::"))) {
            if (w)
              k += 1;
            else if (k -= 1, k === 0) {
              const V = F.slice(0, W);
              R = V.trim();
              const ie = d.slice(0, E + W + K[0].length);
              let U = [];
              if (R)
                if (l === "block")
                  for (U = h.blockTokens(V), U.forEach((q) => {
                    q.text && (!q.tokens || q.tokens.length === 0) && (q.tokens = h.inlineTokens(q.text));
                  }); U.length > 0; ) {
                    const q = U[U.length - 1];
                    if (q.type === "paragraph" && (!q.text || q.text.trim() === ""))
                      U.pop();
                    else
                      break;
                  }
                else
                  U = h.inlineTokens(R);
              return {
                type: e,
                raw: ie,
                attributes: v,
                content: R,
                tokens: U
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d, f) => {
      const h = u(d.attrs || {}), p = o(h), g = p ? ` {${p}}` : "", y = f.renderChildren(d.content || [], `

`);
      return `:::${c}${g}

${y}

:::`;
    }
  };
}
function Ad(t) {
  if (!t.trim())
    return {};
  const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(t);
  for (; r !== null; ) {
    const [, s, o, i] = r;
    e[s] = o || i, r = n.exec(t);
  }
  return e;
}
function Ed(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function Td(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = Ad,
    serializeAttributes: o = Ed,
    defaultAttributes: i = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = t, c = n || e, u = (f) => {
    if (!a)
      return f;
    const h = {};
    return a.forEach((p) => {
      const g = typeof p == "string" ? p : p.name, y = typeof p == "string" ? void 0 : p.skipIfDefault;
      if (g in f) {
        const b = f[g];
        if (y !== void 0 && b === y)
          return;
        h[g] = b;
      }
    }), h;
  }, d = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (f, h) => {
      const p = { ...i, ...f.attributes };
      if (l)
        return h.createNode(e, p);
      const g = r ? r(f) : f.content || "";
      return g ? h.createNode(e, p, [h.createTextNode(g)]) : h.createNode(e, p, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(f) {
        const h = l ? new RegExp(`\\[${d}\\s*[^\\]]*\\]`) : new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`), p = f.match(h), g = p?.index;
        return g !== void 0 ? g : -1;
      },
      tokenize(f, h, p) {
        const g = l ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), y = f.match(g);
        if (!y)
          return;
        let b = "", x = "";
        if (l) {
          const [, k] = y;
          x = k;
        } else {
          const [, k, E] = y;
          x = k, b = E || "";
        }
        const v = s(x.trim());
        return {
          type: e,
          raw: y[0],
          content: b.trim(),
          attributes: v
        };
      }
    },
    renderMarkdown: (f) => {
      let h = "";
      r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter((b) => b.type === "text").map((b) => b.text).join(""));
      const p = u(f.attrs || {}), g = o(p), y = g ? ` ${g}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${h}[/${c}]`;
    }
  };
}
function Md(t, e, n) {
  var r, s, o, i;
  const l = t.split(`
`), a = [];
  let c = "", u = 0;
  const d = e.baseIndentSize || 2;
  for (; u < l.length; ) {
    const f = l[u], h = f.match(e.itemPattern);
    if (!h) {
      if (a.length > 0)
        break;
      if (f.trim() === "") {
        u += 1, c = `${c}${f}
`;
        continue;
      } else
        return;
    }
    const p = e.extractItemData(h), { indentLevel: g, mainContent: y } = p;
    c = `${c}${f}
`;
    const b = [y];
    for (u += 1; u < l.length; ) {
      const E = l[u];
      if (E.trim() === "") {
        const z = l.slice(u + 1).findIndex((W) => W.trim() !== "");
        if (z === -1)
          break;
        if ((((s = (r = l[u + 1 + z].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          b.push(E), c = `${c}${E}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = E.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        b.push(E), c = `${c}${E}
`, u += 1;
      else
        break;
    }
    let x;
    const v = b.slice(1);
    if (v.length > 0) {
      const E = v.map((R) => R.slice(g + d)).join(`
`);
      E.trim() && (e.customNestedParser ? x = e.customNestedParser(E) : x = n.blockTokens(E));
    }
    const k = e.createToken(p, x);
    a.push(k);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function Rd(t, e, n, r) {
  if (!t || !Array.isArray(t.content))
    return "";
  const s = typeof n == "function" ? n(r) : n, [o, ...i] = t.content, l = e.renderChildren([o]), a = [`${s}${l}`];
  return i && i.length > 0 && i.forEach((c) => {
    const u = e.renderChildren([c]);
    if (u) {
      const d = u.split(`
`).map((f) => f ? e.indent(f) : "").join(`
`);
      a.push(d);
    }
  }), a.join(`
`);
}
var qt = class Di extends Lr {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Di(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, jd = ad.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", wt(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown(t, e) {
    return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []));
  },
  renderMarkdown(t, e) {
    return `++${e.renderChildren(t)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(t) {
      return t.indexOf("++");
    },
    tokenize(t, e, n) {
      const s = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
      if (!s)
        return;
      const o = s[2].trim();
      return {
        type: "underline",
        raw: s[0],
        text: o,
        tokens: n.inlineTokens(o)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Id = jd, Od = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, zd = qt.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", wt(this.options.HTMLAttributes, t)];
  },
  parseMarkdown: (t, e) => e.createNode("image", {
    src: t.href,
    title: t.title,
    alt: t.text
  }),
  renderMarkdown: (t) => {
    var e, n, r, s, o, i;
    const l = (n = (e = t.attrs) == null ? void 0 : e.src) != null ? n : "", a = (s = (r = t.attrs) == null ? void 0 : r.alt) != null ? s : "", c = (i = (o = t.attrs) == null ? void 0 : o.title) != null ? i : "";
    return c ? `![${a}](${l} "${c}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize;
    return ({ node: s, getPos: o, HTMLAttributes: i, editor: l }) => {
      const a = document.createElement("img");
      Object.entries(i).forEach(([d, f]) => {
        if (f != null)
          switch (d) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(d, f);
              break;
          }
      }), a.src = i.src;
      const c = new Sd({
        element: a,
        editor: l,
        node: s,
        getPos: o,
        onResize: (d, f) => {
          a.style.width = `${d}px`, a.style.height = `${f}px`;
        },
        onCommit: (d, f) => {
          const h = o();
          h !== void 0 && this.editor.chain().setNodeSelection(h).updateAttributes(this.name, {
            width: d,
            height: f
          }).run();
        },
        onUpdate: (d, f, h) => d.type === s.type,
        options: {
          directions: t,
          min: {
            width: e,
            height: n
          },
          preserveAspectRatio: r === !0
        }
      }), u = c.dom;
      return u.style.visibility = "hidden", u.style.pointerEvents = "none", a.onload = () => {
        u.style.visibility = "", u.style.pointerEvents = "";
      }, c;
    };
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      wd({
        find: Od,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), $d = zd;
let mr, gr;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  mr = (e) => t.get(e), gr = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  mr = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, gr = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var Y = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, s = e / this.width | 0;
      let o = r + 1, i = s + 1;
      for (let l = 1; o < this.width && this.map[e + l] == n; l++) o++;
      for (let l = 1; i < this.height && this.map[e + this.width * l] == n; l++) i++;
      return {
        left: r,
        top: s,
        right: o,
        bottom: i
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: r, right: s, top: o, bottom: i } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : s == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : s)] : (n < 0 ? o == 0 : i == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : i)];
  }
  rectBetween(t, e) {
    const { left: n, right: r, top: s, bottom: o } = this.findCell(t), { left: i, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, i),
      top: Math.min(s, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++) for (let s = t.left; s < t.right; s++) {
      const o = r * this.width + s, i = this.map[o];
      n[i] || (n[i] = !0, !(s == t.left && s && this.map[o - 1] == i || r == t.top && r && this.map[o - this.width] == i) && e.push(i));
    }
    return e;
  }
  positionAt(t, e, n) {
    for (let r = 0, s = 0; ; r++) {
      const o = s + n.child(r).nodeSize;
      if (r == t) {
        let i = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; i < l && this.map[i] < s; ) i++;
        return i == l ? o - 1 : this.map[i];
      }
      s = o;
    }
  }
  static get(t) {
    return mr(t) || gr(t, Dd(t));
  }
};
function Dd(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = Pd(t), n = t.childCount, r = [];
  let s = 0, o = null;
  const i = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (p == d.childCount) break;
      const g = d.child(p), { colspan: y, rowspan: b, colwidth: x } = g.attrs;
      for (let v = 0; v < b; v++) {
        if (v + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - v
          });
          break;
        }
        const k = s + v * e;
        for (let E = 0; E < y; E++) {
          r[k + E] == 0 ? r[k + E] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - E
          });
          const R = x && x[E];
          if (R) {
            const z = (k + E) % e * 2, F = i[z];
            F == null || F != R && i[z + 1] == 1 ? (i[z] = R, i[z + 1] = 1) : F == R && i[z + 1]++;
          }
        }
      }
      s += y, u += g.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; s < f; ) r[s++] == 0 && h++;
    h && (o || (o = [])).push({
      type: "missing",
      row: c,
      n: h
    }), u++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new Y(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
  return a && Fd(l, i, t), l;
}
function Pd(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const s = t.child(r);
    let o = 0;
    if (n) for (let i = 0; i < r; i++) {
      const l = t.child(i);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        i + c.attrs.rowspan > r && (o += c.attrs.colspan);
      }
    }
    for (let i = 0; i < s.childCount; i++) {
      const l = s.child(i);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function Fd(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let s = 0; s < t.map.length; s++) {
    const o = t.map[s];
    if (r[o]) continue;
    r[o] = !0;
    const i = n.nodeAt(o);
    if (!i) throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = i.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = e[(s + c) % t.width * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = Bd(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function Bd(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function ce(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], s = r.spec.tableRole;
      s && (e[s] = r);
    }
  }
  return e;
}
const We = new Ce("selectingCells");
function ot(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function Ld(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function Ee(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Dn(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = ot(e.$head) || Wd(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Wd(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function yr(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function Hd(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Vr(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Pi(t, e, n) {
  const r = t.node(-1), s = Y.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function it(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Fi(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan + n
  };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let s = 0; s < n; s++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function Vd(t, e, n) {
  const r = ce(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var J = class De extends L {
  constructor(e, n = e) {
    const r = e.node(-1), s = Y.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new $o(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (yr(r) && yr(s) && Vr(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? De.rowSelection(r, s) : o && this.isColSelection() ? De.colSelection(r, s) : new De(r, s);
    }
    return B.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = Y.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, i = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = n.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let p = e.nodeAt(f);
        if (!p) throw new RangeError(`No cell with offset ${f} found`);
        const g = s.left - h.left, y = h.right - s.right;
        if (g > 0 || y > 0) {
          let b = p.attrs;
          if (g > 0 && (b = it(b, 0, g)), y > 0 && (b = it(b, b.colspan - y, y)), h.left < s.left) {
            if (p = p.type.createAndFill(b), !p) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
          } else p = p.type.create(b, p.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const b = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? p = p.type.createAndFill(b) : p = p.type.create(b, p.content);
        }
        c.push(p);
      }
      i.push(e.child(a).copy(C.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new T(C.from(l), 1, 1);
  }
  replace(e, n = T.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? T.empty : n);
    }
    const o = L.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new T(C.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = Y.get(n), s = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = Y.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new De(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = Y.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof De && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = Y.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new De(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new De(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new De(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new _d(this.$anchorCell.pos, this.$headCell.pos);
  }
};
J.prototype.visible = !1;
L.jsonID("cell", J);
var _d = class Bi {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Bi(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && Vr(n, r) ? new J(n, r) : L.near(r, 1);
  }
};
function Kd(t) {
  if (!(t.selection instanceof J)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(ve.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), Q.create(t.doc, e);
}
function qd({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function Jd({ $from: t, $to: e }) {
  let n, r;
  for (let s = t.depth; s > 0; s--) {
    const o = t.node(s);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const o = e.node(s);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function Ud(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof D && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = J.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = J.rowSelection(l, l);
    } else if (!n) {
      const l = Y.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = J.create(s, a + 1, c);
    }
  } else r instanceof B && qd(r) ? o = B.create(s, r.from) : r instanceof B && Jd(r) && (o = B.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const Gd = new Ce("fix-tables");
function Li(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? Li(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function Wi(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = Yd(t, s, o, n));
  };
  return e ? e.doc != t.doc && Li(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Yd(t, e, n, r) {
  const s = Y.get(e);
  if (!s.problems) return r;
  r || (r = t.tr);
  const o = [];
  for (let a = 0; a < s.height; a++) o.push(0);
  for (let a = 0; a < s.problems.length; a++) {
    const c = s.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) o[c.row + f] += c.n;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, it(d, d.colspan - c.n, c.n));
    } else if (c.type == "missing") o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const u = r.mapping.map(n);
      r.delete(u, u + e.nodeSize);
    }
  }
  let i, l;
  for (let a = 0; a < o.length; a++) o[a] && (i == null && (i = a), l = a);
  for (let a = 0, c = n + 1; a < s.height; a++) {
    const u = e.child(a), d = c + u.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let y = 0; y < f; y++) {
        const b = ce(t.schema)[h].createAndFill();
        b && p.push(b);
      }
      const g = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = d;
  }
  return r.setMeta(Gd, { fixTables: !0 });
}
function Ie(t) {
  const e = t.selection, n = Dn(t), r = n.node(-1), s = n.start(-1), o = Y.get(r);
  return {
    ...e instanceof J ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function Hi(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  Vd(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Fi(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? ce(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Xd(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t);
    e(Hi(t.tr, n, n.left));
  }
  return !0;
}
function Qd(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t);
    e(Hi(t.tr, n, n.right));
  }
  return !0;
}
function Zd(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, it(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function ef(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Zd(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = Y.get(o);
    }
    e(r);
  }
  return !0;
}
function tf(t, e, n) {
  var r;
  const s = ce(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function Vi(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  tf(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? ce(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && i.push(f);
  }
  return t.insert(o, ce(r.type.schema).row.create(null, i)), t;
}
function nf(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t);
    e(Vi(t.tr, n, n.top));
  }
  return !0;
}
function rf(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t);
    e(Vi(t.tr, n, n.bottom));
  }
  return !0;
}
function sf(t, { map: e, table: n, tableStart: r }, s) {
  let o = 0;
  for (let c = 0; c < s; c++) o += n.child(c).nodeSize;
  const i = o + n.child(s).nodeSize, l = t.mapping.maps.length;
  t.delete(o + r, i + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, u = s * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!a.has(d)) {
      if (a.add(d), s > 0 && d == e.map[u - e.width]) {
        const f = n.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (s < e.height && d == e.map[u + e.width]) {
        const f = n.nodeAt(d), h = f.attrs, p = f.type.create({
          ...h,
          rowspan: f.attrs.rowspan - 1
        }, f.content), g = e.positionAt(s + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + g), p), c += h.colspan - 1;
      }
    }
  }
}
function of(t, e) {
  if (!Ee(t)) return !1;
  if (e) {
    const n = Ie(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; sf(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = Y.get(n.table);
    }
    e(r);
  }
  return !0;
}
function $s(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function lf({ width: t, height: e, map: n }, r) {
  let s = r.top * t + r.left, o = s, i = (r.bottom - 1) * t + r.left, l = s + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[l] == n[l + 1]) return !0;
    o += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[s] == n[s - t] || r.bottom < e && n[i] == n[i + t]) return !0;
    s++, i++;
  }
  return !1;
}
function Ds(t, e) {
  const n = t.selection;
  if (!(n instanceof J) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = Ie(t), { map: s } = r;
  if (lf(s, r)) return !1;
  if (e) {
    const o = t.tr, i = {};
    let l = C.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(i[f] || !h))
        if (i[f] = !0, a == null)
          a = f, c = h;
        else {
          $s(h) || (l = l.append(h.content));
          const p = o.mapping.map(f + r.tableStart);
          o.delete(p, p + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Fi(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = $s(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new J(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Ps(t, e) {
  const n = ce(t.schema);
  return af(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function af(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof J) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = Ld(r.$from), !s) return !1;
      o = (i = ot(r.$from)) === null || i === void 0 ? void 0 : i.pos;
    }
    if (s == null || o == null || s.attrs.colspan == 1 && s.attrs.rowspan == 1) return !1;
    if (n) {
      let l = s.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = {
        ...l,
        rowspan: 1
      }), l.colspan > 1 && (l = {
        ...l,
        colspan: 1
      });
      const u = Ie(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++) a.push(c ? {
        ...l,
        colwidth: c && c[h] ? [c[h]] : null
      } : l);
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += s.nodeSize);
        for (let g = u.left, y = 0; g < u.right; g++, y++)
          g == u.left && h == u.top || d.insert(f = d.mapping.map(p + u.tableStart, 1), t({
            node: s,
            row: h,
            col: g
          }).createAndFill(a[y]));
      }
      d.setNodeMarkup(o, t({
        node: s,
        row: u.top,
        col: u.left
      }), a[0]), r instanceof J && d.setSelection(new J(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function cf(t, e) {
  return function(n, r) {
    if (!Ee(n)) return !1;
    const s = Dn(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof J ? n.selection.forEachCell((i, l) => {
        i.attrs[t] !== e && o.setNodeMarkup(l, null, {
          ...i.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(s.pos, null, {
        ...s.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function uf(t) {
  return function(e, n) {
    if (!Ee(e)) return !1;
    if (n) {
      const r = ce(e.schema), s = Ie(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
        left: s.left,
        top: 0,
        right: s.right,
        bottom: s.map.height
      } : t == "row" ? {
        left: 0,
        top: s.top,
        right: s.map.width,
        bottom: s.bottom
      } : s), l = i.map((a) => s.table.nodeAt(a));
      for (let a = 0; a < i.length; a++) l[a].type == r.header_cell && o.setNodeMarkup(s.tableStart + i[a], r.cell, l[a].attrs);
      if (o.steps.length === 0) for (let a = 0; a < i.length; a++) o.setNodeMarkup(s.tableStart + i[a], r.header_cell, l[a].attrs);
      n(o);
    }
    return !0;
  };
}
function Fs(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let s = 0; s < r.length; s++) {
    const o = e.table.nodeAt(r[s]);
    if (o && o.type !== n.header_cell) return !1;
  }
  return !0;
}
function Lt(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? uf(t) : function(n, r) {
    if (!Ee(n)) return !1;
    if (r) {
      const s = ce(n.schema), o = Ie(n), i = n.tr, l = Fs("row", o, s), a = Fs("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, d = t == "column" ? a ? s.cell : s.header_cell : t == "row" ? l ? s.cell : s.header_cell : s.cell;
      o.map.cellsInRect(u).forEach((f) => {
        const h = f + o.tableStart, p = i.doc.nodeAt(h);
        p && i.setNodeMarkup(h, d, p.attrs);
      }), r(i);
    }
    return !0;
  };
}
Lt("row", { useDeprecatedLogic: !0 });
Lt("column", { useDeprecatedLogic: !0 });
const df = Lt("cell", { useDeprecatedLogic: !0 });
function ff(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, s = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), i = o.lastChild;
      if (i) return s - 1 - i.nodeSize;
      s -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), s = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount) return s + 1;
      s += o.nodeSize;
    }
  }
  return null;
}
function Bs(t) {
  return function(e, n) {
    if (!Ee(e)) return !1;
    const r = ff(Dn(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(B.between(s, Hd(s))).scrollIntoView());
    }
    return !0;
  };
}
function hf(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function rn(t, e) {
  const n = t.selection;
  if (!(n instanceof J)) return !1;
  if (e) {
    const r = t.tr, s = ce(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new T(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function pf(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = br(ce(i).row, new T(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? br(ce(i).row, new T(e, n, r)).content : e);
  else return null;
  return mf(i, l);
}
function mf(t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    for (let i = o.childCount - 1; i >= 0; i--) {
      const { rowspan: l, colspan: a } = o.child(i).attrs;
      for (let c = s; c < s + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let s = 0; s < n.length; s++) r = Math.max(r, n[s]);
  for (let s = 0; s < n.length; s++)
    if (s >= e.length && e.push(C.empty), n[s] < r) {
      const o = ce(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(C.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function br(t, e) {
  const n = t.createAndFill();
  return new zo(n).replace(0, n.content.size, e).doc;
}
function gf({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(it(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      i.push(C.from(c));
    }
    n = i, t = r;
  }
  if (e != s) {
    const o = [];
    for (let i = 0, l = 0; i < s; i++, l++) {
      const a = [], c = n[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        i + d.attrs.rowspan > s && (d = d.type.create({
          ...d.attrs,
          rowspan: Math.max(1, s - d.attrs.rowspan)
        }, d.content)), a.push(d);
      }
      o.push(C.from(a));
    }
    n = o, e = s;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function yf(t, e, n, r, s, o, i) {
  const l = t.doc.type.schema, a = ce(l);
  let c, u;
  if (s > e.width) for (let d = 0, f = 0; d < e.height; d++) {
    const h = n.child(d);
    f += h.nodeSize;
    const p = [];
    let g;
    h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
    for (let y = e.width; y < s; y++) p.push(g);
    t.insert(t.mapping.slice(i).map(f - 1 + r), p);
  }
  if (o > e.height) {
    const d = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, s); p++) {
      const y = p >= e.width ? !1 : n.nodeAt(e.map[g + p]).type == a.header_cell;
      d.push(y ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, C.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Ls(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.height) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = i * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = n.nodeAt(d), { top: h, left: p } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: i - h
      }), t.insert(t.mapping.slice(l).map(e.positionAt(i, p, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: h + f.attrs.rowspan - i
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Ws(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.width) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = c * e.width + i, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(p, null, it(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(p + f.nodeSize, f.type.createAndFill(it(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Hs(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = Y.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = Y.get(o), f = d.mapping.maps.length;
  }
  yf(d, i, o, n, c, u, f) && h(), Ls(d, i, o, n, a, c, l, f) && h(), Ls(d, i, o, n, a, c, u, f) && h(), Ws(d, i, o, n, l, u, a, f) && h(), Ws(d, i, o, n, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const g = i.positionAt(p, a, o), y = i.positionAt(p, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new T(s.rows[p - l], 0, 0));
  }
  h(), d.setSelection(new J(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const bf = Oc({
  ArrowLeft: sn("horiz", -1),
  ArrowRight: sn("horiz", 1),
  ArrowUp: sn("vert", -1),
  ArrowDown: sn("vert", 1),
  "Shift-ArrowLeft": on("horiz", -1),
  "Shift-ArrowRight": on("horiz", 1),
  "Shift-ArrowUp": on("vert", -1),
  "Shift-ArrowDown": on("vert", 1),
  Backspace: rn,
  "Mod-Backspace": rn,
  Delete: rn,
  "Mod-Delete": rn
});
function fn(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function sn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof J) return fn(n, r, L.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = _i(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return fn(n, r, L.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = Pi(l, t, e);
      let c;
      return a ? c = L.near(a, 1) : e < 0 ? c = L.near(n.doc.resolve(l.before(-1)), -1) : c = L.near(n.doc.resolve(l.after(-1)), 1), fn(n, r, c);
    }
  };
}
function on(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof J) i = o;
    else {
      const a = _i(s, t, e);
      if (a == null) return !1;
      i = new J(n.doc.resolve(a));
    }
    const l = Pi(i.$headCell, t, e);
    return l ? fn(n, r, new J(i.$anchorCell, l)) : !1;
  };
}
function xf(t, e) {
  const n = t.state.doc, r = ot(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new J(r))), !0) : !1;
}
function wf(t, e, n) {
  if (!Ee(t.state)) return !1;
  let r = pf(n);
  const s = t.state.selection;
  if (s instanceof J) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [C.from(br(ce(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = Y.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = gf(r, l.right - l.left, l.bottom - l.top), Hs(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = Dn(t.state), i = o.start(-1);
    return Hs(t.state, t.dispatch, i, Y.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function vf(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Vs(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof J)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = ot(t.state.selection.$anchor)) != null && ((n = er(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = er(t, c);
    const d = We.getState(t.state) == null;
    if (!u || !Vr(a, u)) if (d) u = a;
    else return;
    const f = new J(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(We, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), We.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(We, -1));
  }
  function l(a) {
    const c = a, u = We.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Vs(t, c.target) != r && (d = er(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function _i(t, e, n) {
  if (!(t.state.selection instanceof B)) return null;
  const { $head: r } = t.state.selection;
  for (let s = r.depth - 1; s >= 0; s--) {
    const o = r.node(s);
    if ((n < 0 ? r.index(s) : r.indexAfter(s)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const i = r.before(s), l = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(l) ? i : null;
    }
  }
  return null;
}
function Vs(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function er(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && ot(t.state.doc.resolve(r)) || ot(t.state.doc.resolve(s));
}
var Sf = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), xr(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, xr(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function xr(t, e, n, r, s, o) {
  let i = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: h, colwidth: p } = c.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = s == f ? o : p && p[g], b = y ? y + "px" : "";
        if (i += y || r, y || (l = !1), a)
          a.style.width != b && (a.style.width = b), a = a.nextSibling;
        else {
          const x = document.createElement("col");
          x.style.width = b, e.appendChild(x);
        }
      }
    }
    for (; a; ) {
      var u;
      const d = a.nextSibling;
      (u = a.parentNode) === null || u === void 0 || u.removeChild(a), a = d;
    }
    l ? (n.style.width = i + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = i + "px");
  }
}
const ge = new Ce("tableColumnResizing");
function kf({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = Sf, lastColumnResizable: s = !0 } = {}) {
  const o = new je({
    key: ge,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = ce(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new Cf(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = ge.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          Nf(i, l, t, s);
        },
        mouseleave: (i) => {
          Af(i);
        },
        mousedown: (i, l) => {
          Ef(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = ge.getState(i);
        if (l && l.activeHandle > -1) return If(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Cf = class hn {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(ge);
    if (r && r.setHandle != null) return new hn(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new hn(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return yr(e.doc.resolve(s)) || (s = -1), new hn(s, n.dragging);
    }
    return n;
  }
};
function Nf(t, e, n, r) {
  if (!t.editable) return;
  const s = ge.getState(t.state);
  if (s && !s.dragging) {
    const o = Mf(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = _s(t, e, "left", n) : a - e.clientX <= n && (i = _s(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = Y.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Ki(t, i);
    }
  }
}
function Af(t) {
  if (!t.editable) return;
  const e = ge.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ki(t, -1);
}
function Ef(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = ge.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = Tf(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(ge, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = ge.getState(t.state);
    f?.dragging && (Rf(t, f.activeHandle, Ks(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(ge, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = ge.getState(t.state);
    if (f && f.dragging) {
      const h = Ks(f.dragging, d, n);
      qs(t, f.activeHandle, h, r);
    }
  }
  return qs(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Tf(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function Mf(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function _s(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = ot(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = Y.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Ks(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ki(t, e) {
  t.dispatch(t.state.tr.setMeta(ge, { setHandle: e }));
}
function Rf(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = Y.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : jf(f.colspan);
    p[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: p
    });
  }
  a.docChanged && t.dispatch(a);
}
function qs(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = Y.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && xr(o, a.firstChild, a, r, l, n);
}
function jf(t) {
  return Array(t).fill(0);
}
function If(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return Q.empty;
  const o = Y.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = ge.getState(t)) === null || a === void 0) && a.dragging && n.push(ve.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(ve.widget(f, h));
    }
  }
  return Q.create(t.doc, n);
}
function Of({ allowTableNodeSelection: t = !1 } = {}) {
  return new je({
    key: We,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(We);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: Kd,
      handleDOMEvents: { mousedown: vf },
      createSelectionBetween(e) {
        return We.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: xf,
      handleKeyDown: bf,
      handlePaste: wf
    },
    appendTransaction(e, n, r) {
      return Ud(r, Wi(r, n), t);
    }
  });
}
var qi = qt.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          var e, n;
          const r = t.getAttribute("colwidth"), s = r ? r.split(",").map((o) => parseInt(o, 10)) : null;
          if (!s) {
            const o = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), i = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (i && i > -1 && o && o[i]) {
              const l = o[i].getAttribute("width");
              return l ? [parseInt(l, 10)] : null;
            }
          }
          return s;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", wt(this.options.HTMLAttributes, t), 0];
  }
}), Ji = qt.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", wt(this.options.HTMLAttributes, t), 0];
  }
}), Ui = qt.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", wt(this.options.HTMLAttributes, t), 0];
  }
});
function wr(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Js(t, e, n, r, s, o) {
  var i;
  let l = 0, a = !0, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: p, colwidth: g } = u.child(f).attrs;
      for (let y = 0; y < p; y += 1, h += 1) {
        const b = s === h ? o : g && g[y], x = b ? `${b}px` : "";
        if (l += b || r, b || (a = !1), c) {
          if (c.style.width !== x) {
            const [v, k] = wr(r, b);
            c.style.setProperty(v, k);
          }
          c = c.nextSibling;
        } else {
          const v = document.createElement("col"), [k, E] = wr(r, b);
          v.style.setProperty(k, E), e.appendChild(v);
        }
      }
    }
  for (; c; ) {
    const f = c.nextSibling;
    (i = c.parentNode) == null || i.removeChild(c), c = f;
  }
  const d = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  a && !d ? (n.style.width = `${l}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${l}px`);
}
var zf = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Js(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Js(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function $f(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : p && p[g];
      s += y || e, y || (o = !1);
      const [b, x] = wr(e, y);
      i.push(["col", { style: `${b}: ${x}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Us(t, e) {
  return t.createAndFill();
}
function Df(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function Pf(t, e, n, r, s) {
  const o = Df(t), i = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Us(o.cell);
    if (u && l.push(u), r) {
      const d = Us(o.header_cell);
      d && i.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? i : l));
  return o.table.createChecked(null, a);
}
function Ff(t) {
  return t instanceof J;
}
var ln = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Ff(e))
    return !1;
  let n = 0;
  const r = Mi(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Bf = "";
function Lf(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function Wf(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : Bf;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const g = [];
    p.content && p.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map((E) => e.renderChildren(E)).join(s) : b = y.content ? e.renderChildren(y.content) : "";
      const x = Lf(b), v = y.type === "tableHeader";
      g.push({ text: x, isHeader: v });
    }), o.push(g);
  });
  const i = o.reduce((p, g) => Math.max(p, g.length), 0);
  if (i === 0)
    return "";
  const l = new Array(i).fill(0);
  o.forEach((p) => {
    var g;
    for (let y = 0; y < i; y += 1) {
      const x = (((g = p[y]) == null ? void 0 : g.text) || "").length;
      x > l[y] && (l[y] = x), l[y] < 3 && (l[y] = 3);
    }
  });
  const a = (p, g) => p + " ".repeat(Math.max(0, g - p.length)), c = o[0], u = c.some((p) => p.isHeader);
  let d = `
`;
  const f = new Array(i).fill(0).map((p, g) => u && c[g] && c[g].text || "");
  return d += `| ${f.map((p, g) => a(p, l[g])).join(" | ")} |
`, d += `| ${l.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((p) => {
    d += `| ${new Array(i).fill(0).map((g, y) => a(p[y] && p[y].text || "", l[y])).join(" | ")} |
`;
  }), d;
}
var Hf = Wf, Gi = qt.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: zf,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = $f(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      wt(this.options.HTMLAttributes, e, {
        style: i()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, l] : l;
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.header) {
      const r = [];
      t.header.forEach((s) => {
        r.push(e.createNode("tableHeader", {}, [{ type: "paragraph", content: e.parseInline(s.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, r));
    }
    return t.rows && t.rows.forEach((r) => {
      const s = [];
      r.forEach((o) => {
        s.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(o.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, s));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => Hf(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = Pf(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(B.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Xd(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Qd(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => ef(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => nf(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => rf(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => of(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => hf(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Ds(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Ps(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Lt("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Lt("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => df(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Ds(t, e) ? !0 : Ps(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => cf(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Bs(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Bs(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Wi(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = J.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: ln,
      "Mod-Backspace": ln,
      Delete: ln,
      "Mod-Delete": ln
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        kf({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Of({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: Bt(bt(t, "tableRole", e))
    };
  }
});
Ae.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Gi.configure(this.options.table)), this.options.tableCell !== !1 && t.push(qi.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Ji.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ui.configure(this.options.tableRow)), t;
  }
});
function ee(t) {
  const { title: e, active: n, disabled: r, onClick: s } = t;
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      title: e,
      disabled: r,
      onMouseDown: (o) => {
        o.preventDefault(), s();
      },
      className: `
        h-8 min-w-[32px] px-2
        flex items-center justify-center gap-1
        rounded-md text-sm transition
        ${n ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100"}
        disabled:opacity-40 disabled:cursor-not-allowed
      `,
      children: "icon" in t ? /* @__PURE__ */ m.jsx("i", { className: t.icon }) : t.children
    }
  );
}
function Vf({ editor: t }) {
  const [e, n] = Te(!1);
  if (!t) return null;
  const r = t.isActive("heading", { level: 1 }) ? "Heading 1" : t.isActive("heading", { level: 2 }) ? "Heading 2" : "Paragraph";
  return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        onMouseDown: (s) => {
          s.preventDefault(), n((o) => !o);
        },
        className: `
          h-8 px-2 flex items-center gap-2
          rounded-md text-sm
          text-gray-700 hover:bg-gray-100
        `,
        children: [
          /* @__PURE__ */ m.jsx("i", { className: "fa-solid fa-heading" }),
          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-medium", children: r }),
          /* @__PURE__ */ m.jsx("i", { className: "fa-solid fa-chevron-down text-[10px]" })
        ]
      }
    ),
    e && /* @__PURE__ */ m.jsxs("div", { className: "absolute z-20 mt-1 w-40 bg-white border rounded-md shadow", children: [
      /* @__PURE__ */ m.jsx(
        tr,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        tr,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        tr,
        {
          label: "Heading 2",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 2 }).run(), n(!1);
          }
        }
      )
    ] })
  ] });
}
function tr({
  label: t,
  onClick: e
}) {
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      onMouseDown: (n) => {
        n.preventDefault(), e();
      },
      className: "w-full text-left px-3 py-2 text-sm hover:bg-gray-100",
      children: t
    }
  );
}
function kt() {
  return /* @__PURE__ */ m.jsx("div", { className: "w-px h-5 bg-gray-300 mx-1" });
}
function _f({ editor: t }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50", children: [
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ m.jsx(kt, {}),
    /* @__PURE__ */ m.jsx(Vf, { editor: t }),
    /* @__PURE__ */ m.jsx(kt, {}),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(kt, {}),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        icon: "fa-solid fa-link",
        title: "Add Link",
        active: t.isActive("link"),
        onClick: () => {
          const e = t.getAttributes("link").href;
          let n = window.prompt("Enter URL", e);
          if (n === null) return;
          if (n === "") {
            t.chain().focus().unsetLink().run();
            return;
          }
          /^https?:\/\//i.test(n) || (n = `https://${n}`);
          const { empty: r } = t.state.selection;
          r ? t.chain().focus().insertContent({
            type: "text",
            text: n,
            marks: [
              {
                type: "link",
                attrs: { href: n }
              }
            ]
          }).run() : t.chain().focus().extendMarkRange("link").setLink({ href: n }).run();
        }
      }
    ),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Insert Image",
        icon: "fa-regular fa-image",
        active: t.isActive("image"),
        onClick: () => {
          const e = prompt("Enter image URL");
          e && t.chain().focus().setImage({ src: e }).run();
        }
      }
    ),
    /* @__PURE__ */ m.jsx(kt, {}),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    t.isActive("table") && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Add Row Above",
          icon: "fa-solid fa-arrow-up",
          disabled: !t.can().addRowBefore(),
          onClick: () => t.chain().focus().addRowBefore().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Add Row Below",
          icon: "fa-solid fa-arrow-down",
          disabled: !t.can().addRowAfter(),
          onClick: () => t.chain().focus().addRowAfter().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Add Column Left",
          icon: "fa-solid fa-arrow-left",
          disabled: !t.can().addColumnBefore(),
          onClick: () => t.chain().focus().addColumnBefore().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Add Column Right",
          icon: "fa-solid fa-arrow-right",
          disabled: !t.can().addColumnAfter(),
          onClick: () => t.chain().focus().addColumnAfter().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Delete Row",
          icon: "fa-solid fa-minus",
          disabled: !t.can().deleteRow(),
          onClick: () => t.chain().focus().deleteRow().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Delete Column",
          icon: "fa-solid fa-trash",
          disabled: !t.can().deleteColumn(),
          onClick: () => t.chain().focus().deleteColumn().run()
        }
      ),
      /* @__PURE__ */ m.jsx(
        ee,
        {
          title: "Delete Table",
          icon: "fa-solid fa-xmark",
          disabled: !t.can().deleteTable(),
          onClick: () => t.chain().focus().deleteTable().run()
        }
      )
    ] }),
    /* @__PURE__ */ m.jsx(kt, {}),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Code Block",
        icon: "fa-solid fa-code",
        active: t.isActive("codeBlock"),
        disabled: !t.can().toggleCodeBlock(),
        onClick: () => t.chain().focus().toggleCodeBlock().run()
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "flex-1" }),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      ee,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function Kf({
  value: t,
  onChange: e,
  disabled: n
}) {
  const r = Xi({
    extensions: [
      Zi.configure({
        link: {
          openOnClick: !1,
          autolink: !0
        }
      }),
      Id,
      $d,
      Gi.configure({ resizable: !0 }),
      Ui,
      Ji,
      qi
    ],
    content: t || "",
    editable: !n,
    immediatelyRender: !1,
    editorProps: {
      attributes: {
        class: "tiptap focus:outline-none min-h-[120px]"
      }
    },
    onUpdate: ({ editor: s }) => {
      e(s.getHTML());
    }
  });
  return Se(() => {
    if (!r) return;
    const s = r.getHTML();
    t !== void 0 && t !== s && r.commands.setContent(t, {
      emitUpdate: !1
    });
  }, [t, r]), r ? /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `
        w-full rounded-lg border border-gray-200 transition-all duration-300
        backdrop-blur-sm text-gray-800
        ${n ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed opacity-60" : "bg-white border-gray-300 hover:border-gray-400 focus-within:ring-1 focus-within:ring-indigo-500"}
      `,
      children: [
        !n && /* @__PURE__ */ m.jsx(_f, { editor: r }),
        /* @__PURE__ */ m.jsxs("div", { className: "resize-y overflow-auto min-h-[200px] max-h-[500px]", children: [
          /* @__PURE__ */ m.jsx(
            Qi,
            {
              editor: r,
              className: "tiptap p-3 focus:outline-none min-h-[200px] "
            }
          ),
          "      "
        ] })
      ]
    }
  ) : null;
}
function Jt({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const {
    setHighlightedIndex: a,
    executeFieldMethod: c,
    handleFileUpload: u,
    handleKeyDown: d,
    handleToggle: f,
    setSearch: h,
    setOpen: p,
    setIsFocused: g,
    handleInputChange: y,
    handleSelect: b,
    handlePersist: x,
    optionCount: v,
    baseInputClasses: k,
    focusClasses: E,
    labelClasses: R,
    search: z,
    highlightedIndex: F,
    options: K,
    isDisabled: W,
    key: w,
    filteredOptions: V,
    open: ie,
    listRef: U,
    detailsRef: q,
    isFocused: fe,
    exactMatch: Oe
  } = wl({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), ze = ($e) => $e.icon ? /* @__PURE__ */ m.jsx("i", { className: $e.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const S = e.values[w] ?? "", N = z !== "" ? z : nr(K, S) ?? String(S ?? "");
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            className: `${k} ${E}`,
            value: N,
            placeholder: t.placeholder || "Type to search...",
            onChange: y,
            onBlur: () => {
              setTimeout(() => p(!1), 150);
            },
            onKeyDown: (M) => {
              if (M.key === "Enter") {
                if (M.preventDefault(), Oe) {
                  const [O] = Oe;
                  e.setFieldValue(w, O), x(O, t, o);
                } else z.trim() && (e.setFieldValue(w, z.trim()), x(z.trim(), t, o));
                p(!1);
                return;
              }
              d(M, !0);
            },
            disabled: W
          }
        ),
        ie && !W && /* @__PURE__ */ m.jsx(
          "div",
          {
            ref: U,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: V.length > 0 && Oe ? V.map(([M, O], H) => /* @__PURE__ */ m.jsx(
              "div",
              {
                id: `${w}-${M}`,
                "data-index": H,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${F === H ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => b(M),
                children: O
              },
              M
            )) : /* @__PURE__ */ m.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${N}" ` })
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (t.multiple === !0) {
        const S = e.values[w];
        return /* @__PURE__ */ m.jsx(
          Yr,
          {
            field: t,
            isDisabled: W,
            handleToggle: f,
            detailsRef: q,
            handleKeyDown: d,
            valueArray: S,
            labelClasses: R,
            listRef: U,
            search: z,
            filteredOptions: V,
            highlightedIndex: F,
            setSearch: h,
            formik: e,
            executeFieldMethod: c,
            setHighlightedIndex: a,
            handlePersist: x,
            module_refid: o,
            options: K
          }
        );
      }
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "details",
          {
            className: `relative w-full ${W ? "opacity-70" : ""}`,
            onToggle: f,
            ref: q,
            onKeyDown: (S) => {
              W || d(S, !0);
            },
            children: [
              /* @__PURE__ */ m.jsxs(
                "summary",
                {
                  className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: e.values[w] ? nr(K, e.values[w]) ?? "Select option" : `Select ${t.label}` }),
                    /* @__PURE__ */ m.jsx(
                      "svg",
                      {
                        className: "w-4 h-4 text-gray-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ m.jsx(
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
              !W && /* @__PURE__ */ m.jsxs("div", { ref: U, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                t.search && /* @__PURE__ */ m.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    value: z,
                    onChange: (S) => {
                      h(S.target.value), a(0);
                    },
                    onKeyDown: (S) => d(S, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                V.length > 0 && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    onClick: (S) => {
                      S.preventDefault(), S.stopPropagation(), e.setFieldValue(w, ""), x("", t, o), q.current?.removeAttribute("open"), h("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                V.length > 0 ? V.map(([S, N], M) => /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    id: `${w}-${S}`,
                    "data-index": M,
                    onClick: (O) => {
                      O.preventDefault(), O.stopPropagation(), e.setFieldValue(w, S), x(S, t, o), q.current?.removeAttribute("open"), h(""), a(0), c("onChange", t, `${w}-${S}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${e.values[w] === S ? "bg-indigo-50 text-indigo-600 font-medium" : F === M ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: N
                  },
                  S
                )) : /* @__PURE__ */ m.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
      ] });
    }
    case "richtextarea":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          Kf,
          {
            value: e.values[w] ?? "",
            disabled: W,
            onChange: (S) => {
              e.setFieldValue(w, S), x(S, t, o), c("onChange", t, w);
            }
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: w,
              className: `${k} ${E} min-h-[120px] resize-none`,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
              },
              placeholder: t.placeholder,
              disabled: W
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const S = e.values[w];
        return /* @__PURE__ */ m.jsx(
          Yr,
          {
            field: t,
            isDisabled: W,
            handleToggle: f,
            detailsRef: q,
            handleKeyDown: d,
            valueArray: S,
            labelClasses: R,
            listRef: U,
            search: z,
            filteredOptions: V,
            highlightedIndex: F,
            setSearch: h,
            formik: e,
            executeFieldMethod: c,
            setHighlightedIndex: a,
            handlePersist: x,
            module_refid: o,
            options: K
          }
        );
      }
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              className: `${k} ${E} appearance-none ${W ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => g(!0),
              name: w,
              id: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
              },
              disabled: W,
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                /* @__PURE__ */ m.jsx("option", { value: "", children: "Clear Selection" }),
                !Ur(K) && Object.entries(K).map(([S, N]) => /* @__PURE__ */ m.jsx("option", { value: S, className: "py-2", children: N }, S)),
                Ur(K) && Object.entries(K).map(([S, N]) => /* @__PURE__ */ m.jsx("optgroup", { label: S, children: Object.entries(N).map(([M, O]) => /* @__PURE__ */ m.jsx("option", { value: M, children: O }, M)) }, S))
              ]
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ m.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: `flex ${v > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(K || {}).map(([S, N]) => /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: `${w}-${S}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${w}-${S}`,
                  type: "radio",
                  name: w,
                  checked: e.values[w] === S,
                  value: S,
                  onChange: (M) => {
                    e.setFieldValue(w, M.target.value), x(M.target.value, t, o), c("onChange", t, `${w}-${S}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: W,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              N
            ]
          },
          S
        )) }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
      ] });
    case "checkbox": {
      const S = t.multiple === !0, N = e.values[w];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(K || {}).map(([M, O]) => {
          const H = S ? Array.isArray(N) && N.includes(M) : N === M;
          return /* @__PURE__ */ m.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    id: `${w}-${M}`,
                    type: "checkbox",
                    checked: H,
                    onChange: (X) => {
                      let I;
                      if (S) {
                        const j = Array.isArray(N) ? N : [];
                        I = X.target.checked ? [...j, M] : j.filter(($) => $ !== M);
                      } else
                        I = X.target.checked ? M : "false";
                      e.setFieldValue(w, I), x(I, t, o), c("onChange", t, `${w}-${M}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: W,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                O
              ]
            },
            M
          );
        }) }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
      ] });
    }
    case "tags": {
      const S = e.values[w], N = z.trim(), M = Array.isArray(K) ? K : Object.entries(K || {}).map(([I, j]) => ({ value: I, label: j })), O = (I) => {
        if (!W && I && !S.includes(I)) {
          let j = [...S, I];
          e.setFieldValue(w, j), x(j, t, o), h("");
        }
      }, H = (I) => {
        let j = S.filter(($) => $ !== I);
        e.setFieldValue(
          w,
          j
        ), x(j, t, o);
      }, X = (I) => M.find((j) => j.value === I)?.label ?? I;
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: `${k} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${W ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !W && document.getElementById(`${w}-input`)?.focus(),
            children: [
              S.map((I) => /* @__PURE__ */ m.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "text-indigo-700", children: X(I) }),
                    /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (j) => {
                          j.stopPropagation(), W || H(I);
                        },
                        onMouseDown: (j) => j.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                I
              )),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${w}-input`,
                  type: "text",
                  value: z,
                  onChange: (I) => h(I.target.value),
                  onKeyDown: (I) => {
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), O(N));
                  },
                  placeholder: S.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: W
                }
              )
            ]
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    }
    case "photo":
    case "avatar":
      return /* @__PURE__ */ m.jsx(
        no,
        {
          formik: e,
          field: t,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const $e = t.multiple === !0, A = Array.isArray(e.values[w]) ? e.values[w] : e.values[w] ? [e.values[w]] : [];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative mb-1", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ze(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: "file",
              className: `${k} ${E} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              multiple: $e,
              onChange: (S) => {
                const N = S.currentTarget.files;
                N && u(N), c("onChange", t, w);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder,
              disabled: W
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        A.map((S) => {
          const N = S?.split("/").pop();
          return /* @__PURE__ */ m.jsx(kl, { sqlOpsUrls: r, filePath: S }, N);
        }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "json":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: w,
              name: w,
              value: e.values[w],
              onChange: (S) => {
                e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: W,
              className: `${k} ${E} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "date":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: "relative",
            children: [
              /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ m.jsx("i", { className: "fa-solid fa-calendar" }) }),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: w,
                  type: "date",
                  name: w,
                  min: t.min,
                  max: t.max,
                  value: e.values[w] ?? "",
                  onChange: (S) => {
                    e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
                  },
                  onBlur: e.handleBlur,
                  placeholder: t.placeholder,
                  disabled: W,
                  className: `${k} ${E} ${t.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "number":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ze(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: "number",
              className: `${k} ${E} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              min: t.min,
              max: t.max
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    default:
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: R, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ze(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: t.type || "text",
              className: `${k} ${E} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(w, S.target.value), x(S.target.value, t, o), c("onChange", t, `${w}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${fe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
  }
}
function Gs({ title: t, children: e, isFirst: n }) {
  const [r, s] = Te(n);
  return /* @__PURE__ */ m.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ m.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        onClick: () => s(!r),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ m.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${r ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: `relative transition-all duration-300 ${r ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${r ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ m.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${r ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ m.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ m.jsx("div", { className: "space-y-5 pt-4", children: e }) })
      }
    )
  ] }) });
}
function Pn({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  fieldOptions: i,
  setFieldOptions: l
}) {
  const a = an(
    () => t?.find((c) => c.type === "avatar"),
    [t]
  );
  return /* @__PURE__ */ m.jsx("div", { className: "bg-white min-h-3/10 overflow-auto", children: /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    a && /* @__PURE__ */ m.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ m.jsx(
      "div",
      {
        id: `wrapper-${a.name}`,
        className: `
                        overflow-hidden bg-gray-100 flex items-center justify-center
                         ${a.hidden ? "hidden" : ""}

                            `,
        children: /* @__PURE__ */ m.jsx(
          no,
          {
            formik: e,
            field: a,
            sqlOpsUrls: r,
            module_refid: o
          }
        )
      }
    ) }),
    /* @__PURE__ */ m.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((c, u) => {
      if (c.type === "avatar") return null;
      const d = Vt(c.hidden) || c.type === "geolocation";
      return /* @__PURE__ */ m.jsx("div", { id: `wrapper-${c.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${Wt[Ht(Number(c.width))] || "lg:col-span-4"}
                                ${d ? "hidden" : ""}

                                `, children: /* @__PURE__ */ m.jsx(
        Jt,
        {
          refid: s,
          module_refid: o,
          sqlOpsUrls: r,
          field: c,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...i?.[c.name] ? { optionsOverride: i[c.name] } : {}
        },
        c?.name || u
      ) }, c.name);
    }) }) })
  ] }) });
}
function qf({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (u) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = he.useState({}), p = (x, v) => {
    h((k) => ({
      ...k,
      [x]: v
    }));
  }, { initialValues: g, validationSchema: y } = he.useMemo(() => {
    const x = {}, v = {};
    return Object.values(e).flat().forEach((k) => {
      It([k], x, v, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), b = Tn({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: le.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(Gs, { title: "Common", isFirst: !0, children: /* @__PURE__ */ m.jsx(
        Pn,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: b,
          methods: o,
          setFieldOptions: p,
          fieldOptions: f
        }
      ) }),
      d && Object.entries(d).map(([x, v], k) => /* @__PURE__ */ m.jsx(Gs, { title: x, isFirst: k === 0 && u.length === 0, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((E, R) => {
        const z = Vt(E.hidden) || E.type === "geolocation";
        return /* @__PURE__ */ m.jsx(
          "div",
          {
            id: `wrapper-${E.name}`,
            className: `col-span-12 md:col-span-6 ${Wt[Ht(Number(E.width))] || "lg:col-span-4"}
                        ${z ? "hidden" : ""}
                        `,
            children: /* @__PURE__ */ m.jsx(
              Jt,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: E,
                formik: b,
                methods: o,
                setFieldOptions: p,
                ...f[E.name] ? { optionsOverride: f[E.name] } : {}
              },
              E.name
            )
          },
          E?.name ?? `field-${R}`
        );
      }) }) }, x))
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ m.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Jf({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (d) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  widget: a,
  refid: c,
  module_refid: u
}) {
  const { common: d = [], ...f } = e, h = Object.keys(f), [p, g] = he.useState(0), [y, b] = he.useState({}), x = (w, V) => {
    b((ie) => ({
      ...ie,
      [w]: V
    }));
  }, { initialValues: v, validationSchema: k, stepperSchemas: E } = he.useMemo(() => {
    const w = {}, V = {}, ie = {};
    return a ? Object.entries(e).forEach(([U, q]) => {
      const fe = {};
      It(q, w, fe, n, u, l?.operation), ie[U] = fe;
    }) : Object.entries(e).forEach(([U, q]) => {
      It(q, w, V, n, u, l?.operation);
    }), {
      initialValues: w,
      validationSchema: V,
      stepperSchemas: ie
    };
  }, [e, n, a, u, l?.operation]), R = h[p] ?? null, z = a && R ? E[R] ?? {} : k, F = Tn({
    initialValues: v,
    enableReinitialize: !0,
    validationSchema: le.object().shape(z),
    onSubmit: (w) => {
      a ? (p < h.length - 1 && g((V) => V + 1), p === h.length - 1 && r(w)) : r(w);
    }
  }), K = async (w) => {
    if (w.preventDefault(), !a) {
      const V = await F.validateForm();
      if (Object.keys(V).length > 0) {
        alert("Please fill all required fields before submitting."), F.setTouched(
          Object.keys(V).reduce((ie, U) => ({ ...ie, [U]: !0 }), {})
        );
        return;
      }
    }
    F.handleSubmit(w);
  }, W = () => {
    g((w) => w > 0 ? w - 1 : w);
  };
  return /* @__PURE__ */ m.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: K, className: "w-full mx-auto", children: [
    /* @__PURE__ */ m.jsx("div", { className: "relative", children: /* @__PURE__ */ m.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ m.jsx("div", { className: "p-3", children: /* @__PURE__ */ m.jsx(
        Pn,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: F,
          methods: o,
          setFieldOptions: x,
          fieldOptions: y
        }
      ) }),
      /* @__PURE__ */ m.jsx("nav", { className: "relative flex bg-gray-100", children: h.map((w, V) => /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(V),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${p === V ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ m.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: w })
        },
        w
      )) })
    ] }) }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: R && f[R]?.map((w, V) => {
            const ie = Vt(w.hidden) || w.type === "geolocation";
            return /* @__PURE__ */ m.jsx(
              "div",
              {
                id: `wrapper-${w.name}`,
                className: `col-span-12  ${Wt[Ht(Number(w.width))] || "lg:col-span-4"}
                ${ie ? "hidden" : ""}
                `,
                children: /* @__PURE__ */ m.jsx(
                  Jt,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: w,
                    formik: F,
                    methods: o,
                    components: i,
                    setFieldOptions: x,
                    ...y[w.name] ? { optionsOverride: y[w.name] } : {}
                  },
                  w.name
                )
              },
              w?.name ?? `field-${V}`
            );
          }) }),
          /* @__PURE__ */ m.jsxs("div", { className: `mt-8 flex ${p > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            p > 0 && /* @__PURE__ */ m.jsx("button", { onClick: W, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
            /* @__PURE__ */ m.jsxs("div", { className: "space-x-3", children: [
              /* @__PURE__ */ m.jsx("button", { onClick: s, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
              /* @__PURE__ */ m.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: a ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ m.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ m.jsxs("span", { children: [
                "Tab ",
                p + 1,
                " of ",
                h.length
              ] }),
              /* @__PURE__ */ m.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "flex gap-1", children: h.map((w, V) => /* @__PURE__ */ m.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${V === p ? "bg-action w-6" : "bg-gray-300"}`
              },
              V
            )) })
          ] }) })
        ]
      },
      h[p]
    )
  ] }) });
}
function Uf({
  title: t,
  fields: e,
  data: n,
  onSubmit: r = (c) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: a
}) {
  const c = fl(e, i?.operation), [u, d] = he.useState({}), f = (x, v) => {
    d((k) => ({
      ...k,
      [x]: v
    }));
  }, { commonFields: h, otherFields: p } = he.useMemo(() => c.reduce(
    (x, v) => (v.group === "common" ? x.commonFields.push(v) : x.otherFields.push(v), x),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: y } = he.useMemo(() => {
    const x = {}, v = {};
    return c.forEach((k) => {
      It([k], x, v, n, a, i?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [c, n]), b = Tn({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: le.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ m.jsx(
      Pn,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: i,
        fields: h,
        formik: b,
        methods: o,
        setFieldOptions: f,
        fieldOptions: u
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((x) => {
      const v = Vt(x.hidden) || x.type === "geolocation";
      return /* @__PURE__ */ m.jsx(
        "div",
        {
          id: `wrapper-${x.name}`,
          className: `
                    col-span-12 md:col-span-6 
                    ${Wt[Ht(Number(x.width))] || "lg:col-span-4"} 
                    ${v ? "hidden" : ""}
                    `,
          children: /* @__PURE__ */ m.jsx(
            Jt,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: i,
              field: x,
              formik: b,
              methods: o,
              setFieldOptions: f,
              ...u[x.name] ? { optionsOverride: u[x.name] } : {}
            }
          )
        },
        x?.name
      );
    }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ m.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function Ys({ title: t, children: e }) {
  return /* @__PURE__ */ m.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ m.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ m.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
        ] })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ m.jsx("div", { className: "px-4 pb-4 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ m.jsx("div", { className: "space-y-5 pt-4", children: e }) })
      }
    )
  ] }) });
}
function Gf({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (u) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = he.useState({}), p = (x, v) => {
    h((k) => ({
      ...k,
      [x]: v
    }));
  }, { initialValues: g, validationSchema: y } = he.useMemo(() => {
    const x = {}, v = {};
    return Object.values(e).flat().forEach((k) => {
      It([k], x, v, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), b = Tn({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: le.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(Ys, { title: "Common", children: /* @__PURE__ */ m.jsx(
        Pn,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: b,
          methods: o,
          setFieldOptions: p,
          fieldOptions: f
        }
      ) }),
      d && Object.entries(d).map(([x, v], k) => /* @__PURE__ */ m.jsx(Ys, { title: x, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((E, R) => {
        const z = Vt(E.hidden) || E.type === "geolocation";
        return /* @__PURE__ */ m.jsx(
          "div",
          {
            id: `wrapper-${E.name}`,
            className: `col-span-12 md:col-span-6 ${Wt[Ht(Number(E.width))] || "lg:col-span-4"}
                      ${z ? "hidden" : ""}
                        `,
            children: /* @__PURE__ */ m.jsx(
              Jt,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: E,
                formik: b,
                methods: o,
                setFieldOptions: p,
                ...f[E.name] ? { optionsOverride: f[E.name] } : {}
              },
              E.name
            )
          },
          E?.name ?? `field-${R}`
        );
      }) }) }, x))
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ m.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ m.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function nh({
  formJson: t,
  methods: e = {},
  userid: n = null,
  onCancel: r = () => {
  },
  components: s = {},
  callback: o = () => {
  },
  initialvalues: i = {}
}) {
  let l = ll(t);
  const a = t.endPoints, c = t?.source?.refid, u = al(t?.fields ?? {}, a?.operation), [d, f] = he.useState(i), h = he.useMemo(() => dl(t.fields), [t.fields]);
  he.useEffect(() => {
    let y = !0;
    return (async () => {
      const x = t?.source ?? {};
      if (!x?.type) {
        y && f({});
        return;
      }
      if (x.type === "method" && a?.operation !== "create") {
        const v = x.method, k = v ? e[v] : void 0;
        if (k)
          try {
            const E = await Promise.resolve(k());
            y && f(E ?? {});
          } catch (E) {
            console.error("Method execution failed:", E), y && f({});
          }
        else
          y && f({});
      }
      if (x.type === "api" && a?.operation !== "create")
        try {
          const v = {
            method: x.method || "GET",
            url: a?.baseURL + x.endpoint,
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            },
            ...x.method === "GET" ? { params: { refid: x.refid } } : { data: { refid: x.refid } }
          }, k = await ne(v);
          y && f(k.data ?? {});
        } catch (v) {
          console.error("API fetch failed:", v), y && f({});
        }
      if (x.type === "sql" && x.refid && x.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && x.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const v = await xl.fetch(a, {
            source: {
              ...x,
              table: x.table,
              columns: x.columns,
              where: Pe(x.where, {
                refid: c
              })
            },
            fields: Jr(t.fields, a.operation)
          }, x?.dbopsid, t?.module_refid);
          y && f(v);
        } catch (v) {
          console.error("API fetch failed:", v);
        }
      }
    })(), () => {
      y = !1;
    };
  }, [
    n,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const p = async (y) => {
    const b = t?.source ?? {};
    let x = null;
    if (h.length > 0)
      try {
        x = await ul();
      } catch (k) {
        console.error("catch fetchGeolocation", k), x = null;
      }
    const v = {
      ...y,
      ...Object.fromEntries(
        h.map((k) => [k, x])
      )
    };
    if (b.type === "method") {
      const k = b.method, E = k ? e[k] : void 0;
      if (E)
        try {
          const R = await Promise.resolve(E(v));
          if (o?.(R), e?.handleActions) {
            let z = a?.operation === "update" ? c : R?.data?.refid;
            const F = t?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            e.handleActions(F);
          }
        } catch (R) {
          o?.(R), console.error("Method execution failed:", R);
        }
    }
    if (b.type === "api") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const k = await ne({
          method: b.method || "POST",
          url: a.baseURL + b.endpoint,
          data: v ?? {},
          headers: {
            Authorization: `Bearer ${a?.accessToken}`
          }
        });
        if (o?.(k), e?.handleActions) {
          let E = a.operation === "update" ? c : k?.data?.refid;
          const R = t?.gotolink?.replace(
            "{hashid}",
            String(E)
          );
          e.handleActions(R);
        }
      } catch (k) {
        o?.(k), console.error("API fetch failed:", k);
      }
    }
    if (b.type === "sql") {
      const k = t.endPoints;
      if (!k) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let E = !1, R;
        b?.dbopsid && (E = !0, R = b?.dbopsid);
        const z = await ne({
          method: "GET",
          url: k.baseURL + k.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${k?.accessToken}`
          }
        });
        if (!E) {
          let K = {
            ...b
          };
          b.where && (K = {
            ...b,
            where: Pe(b.where, {
              refid: c
            })
          }), R = (await ne({
            method: "POST",
            url: k.baseURL + k.dbopsGetRefId,
            data: {
              operation: k.operation,
              source: K,
              fields: Jr(t.fields, k.operation),
              forcefill: t.forcefill,
              datahash: z.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${k?.accessToken}`
            }
          }))?.data.refid;
        }
        const F = await ne({
          method: "POST",
          url: k.baseURL + k[k.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: R,
            fields: v,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${k?.accessToken}`
          }
        });
        if (o?.(F), e?.handleActions) {
          let K = k.operation === "update" ? c : F?.data?.refid;
          const W = t?.gotolink?.replace(
            "{hashid}",
            String(K)
          );
          e.handleActions(W);
        }
      } catch (E) {
        o?.(E), console.error("API fetch failed:", E);
      }
    }
  }, g = {
    accordion: /* @__PURE__ */ m.jsx(
      qf,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: p,
        onCancel: r,
        methods: e,
        components: s,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    cards: /* @__PURE__ */ m.jsx(
      Gf,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: p,
        onCancel: r,
        methods: e,
        components: s,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    tab: /* @__PURE__ */ m.jsx(
      Jf,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: p,
        onCancel: r,
        methods: e,
        components: s,
        widget: t?.widget,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    simple: /* @__PURE__ */ m.jsx(
      Uf,
      {
        title: t?.title ?? "",
        fields: t.fields,
        data: d,
        onSubmit: p,
        onCancel: r,
        methods: e,
        components: s,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    )
  };
  return /* @__PURE__ */ m.jsx("div", { className: "relative", children: g[l] });
}
export {
  nh as LogiksForm
};
