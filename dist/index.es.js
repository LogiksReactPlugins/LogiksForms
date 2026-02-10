import xe, { useState as $e, useRef as Kt, useEffect as Le, useMemo as Hr } from "react";
import fe from "axios";
import * as de from "yup";
import { useFormik as Mr } from "formik";
import { useEditor as Ua, EditorContent as qa } from "@tiptap/react";
import Ja from "@tiptap/starter-kit";
var kn = { exports: {} }, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Ga() {
  if (wo) return Bt;
  wo = 1;
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
  return Bt.Fragment = e, Bt.jsx = n, Bt.jsxs = n, Bt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function Ya() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    function t(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === $ ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case S:
          return "Suspense";
        case M:
          return "SuspenseList";
        case V:
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
          case C:
            var k = A.render;
            return A = A.displayName, A || (A = k.displayName || k.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case z:
            return k = A.displayName || null, k !== null ? k : t(A.type) || "Memo";
          case D:
            k = A._payload, A = A._init;
            try {
              return t(A(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var N = k.error, O = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return N.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(A);
      }
    }
    function r(A) {
      if (A === g) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === D)
        return "<...>";
      try {
        var k = t(A);
        return k ? "<" + k + ">" : "<...>";
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
      if (B.call(A, "key")) {
        var k = Object.getOwnPropertyDescriptor(A, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, k) {
      function N() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: N,
        configurable: !0
      });
    }
    function a() {
      var A = t(this.type);
      return te[A] || (te[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, k, N, O, L, H, X, I) {
      return N = H.ref, A = {
        $$typeof: h,
        type: A,
        key: k,
        props: H,
        _owner: L
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
    function u(A, k, N, O, L, H, X, I) {
      var j = k.children;
      if (j !== void 0)
        if (O)
          if (ie(j)) {
            for (O = 0; O < j.length; O++)
              d(j[O]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(j);
      if (B.call(k, "key")) {
        j = t(A);
        var K = Object.keys(k).filter(function(ue) {
          return ue !== "key";
        });
        O = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", _e[j + O] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          j,
          K,
          j
        ), _e[j + O] = !0);
      }
      if (j = null, N !== void 0 && (n(N), j = "" + N), i(k) && (n(k.key), j = "" + k.key), "key" in k) {
        N = {};
        for (var q in k)
          q !== "key" && (N[q] = k[q]);
      } else N = k;
      return j && l(
        N,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        j,
        H,
        L,
        s(),
        N,
        X,
        I
      );
    }
    function d(A) {
      typeof A == "object" && A !== null && A.$$typeof === h && A._store && (A._store.validated = 1);
    }
    var f = xe, h = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), v = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), w = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ie = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(A) {
        return A();
      }
    };
    var U, te = {}, me = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), We = J(r(o)), _e = {};
    Ht.Fragment = g, Ht.jsx = function(A, k, N, O, L) {
      var H = 1e4 > w.recentlyCreatedOwnerStacks++;
      return u(
        A,
        k,
        N,
        !1,
        O,
        L,
        H ? Error("react-stack-top-frame") : me,
        H ? J(r(A)) : We
      );
    }, Ht.jsxs = function(A, k, N, O, L) {
      var H = 1e4 > w.recentlyCreatedOwnerStacks++;
      return u(
        A,
        k,
        N,
        !0,
        O,
        L,
        H ? Error("react-stack-top-frame") : me,
        H ? J(r(A)) : We
      );
    };
  }()), Ht;
}
var ko;
function Qa() {
  return ko || (ko = 1, process.env.NODE_ENV === "production" ? kn.exports = Ga() : kn.exports = Ya()), kn.exports;
}
var m = Qa();
const Xa = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Za = ["mp4", "webm", "ogg"], ec = ["txt", "json", "csv"], tc = ["pdf"];
function nc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
function rc(t, e = "create", n = "Info") {
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
function So(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const on = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? Li(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? zi(l) : null;
    o === "create" && u && i[u] !== void 0 && c == null && (c = i[u]), c == null && (c = l.default), l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    l.type === "file" ? d = l.multiple ? de.array().of(de.mixed()) : de.mixed() : l.multiple === !0 || l.type === "checkbox" || l.type === "tags" ? d = de.array().of(de.string()) : l.type === "email" ? d = de.string().email("Invalid email") : l.type === "number" ? d = de.number().typeError("Must be a number") : l.type === "json" ? d = de.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = de.string().nullable() : d = de.string(), l?.validate?.regex && typeof l.validate.regex == "string" && (d = d.matches(
      new RegExp(l?.validate?.regex),
      l?.error_message || "Invalid input format"
    )), l?.validate && Object.entries(l.validate).forEach(([f, h]) => {
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
            `Must match pattern: ${h}`
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
          d = de.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = de.number().typeError("Must be a decimal").transform((p, g) => {
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
}, gn = {
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
function yn(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const Rr = (t) => t === !0 || t === "true", Ge = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => Ge(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    Ge(n, e),
    Ge(r, e)
  ])
) : t, At = (t, e, n, r) => {
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
}, fs = (t, e) => {
  if (!t || e == null) return;
  const n = String(e);
  if (typeof Object.values(t)[0] == "string")
    return t[n];
  for (const s of Object.values(t))
    if (n in s)
      return s[n];
}, sc = (t) => {
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
}, Co = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = Object.values(t)[0];
  return typeof e == "object" && e !== null && !Array.isArray(e);
};
async function oc() {
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
const ic = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function lc(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function Vt(t, e, n) {
  const r = zi(e);
  r && n && dc(n, r, t);
}
function ac(t) {
  return typeof t == "object" && t !== null && typeof t.target == "string" && typeof t.src == "object" && t.src !== null && typeof t.src.table == "string";
}
function cc(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const Tt = (t) => {
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
}, uc = "__form_persist__", Ii = (t) => `${uc}:${t}`;
function zi(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Li(t) {
  try {
    return JSON.parse(localStorage.getItem(Ii(t)) || "{}");
  } catch {
    return {};
  }
}
function dc(t, e, n) {
  const r = Li(t);
  localStorage.setItem(
    Ii(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function fc(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function hc(t) {
  return Xa.includes(t) ? "image" : Za.includes(t) ? "video" : tc.includes(t) ? "pdf" : ec.includes(t) ? "text" : "other";
}
const Eo = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Gt = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Wr = async (t) => (await fe.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Gt(t) }
)).data.refhash, _r = async (t, e) => (await fe.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: Gt(t) }
)).data.refid, pc = {
  async fetch(t, e, n, r) {
    const s = await Wr(t);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await _r(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await fe.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: Gt(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await Wr(t), s = await _r(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Gt(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await Wr(t), s = await _r(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Gt(t) }
    )).data;
  }
};
async function Sn(t, e, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await fe({
      method: "POST",
      url: t.baseURL + t.registerQuery,
      data: { query: e ?? {}, srcid: s },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    })).data.queryid), await fe({
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
async function Pi(t, e) {
  let n = e.previewPath ?? "/api/files/preview";
  const r = await fe.get(
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
async function Di(t, e) {
  if (!t?.uploadURL)
    throw new Error("Upload URL missing");
  const n = t.baseURL + t.uploadURL;
  return Promise.all(
    Array.from(e).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await fe.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${t.accessToken}`
        }
      })).data;
    })
  );
}
function mc({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const [a, c] = $e(!1), [u, d] = $e(
    i ?? t.options ?? {}
  ), f = Kt(null), [h, p] = $e(""), [g, y] = $e(0), b = Kt(null), x = Kt(null), [v, C] = $e(!1), S = Kt(h), M = t.disabled === !0;
  Le(() => {
    S.current = h;
  }, [h]);
  const z = (N) => {
    if (M) {
      N.preventDefault(), x.current?.removeAttribute("open");
      return;
    }
    N.currentTarget.open || p("");
  };
  Le(() => {
    i && Object.keys(i).length !== 0 && d(i);
  }, [i]), Le(() => {
    const N = (O) => {
      x.current && !x.current.contains(O.target) && (x.current.open = !1, p(""));
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, []);
  const D = t.name;
  Le(() => {
    let N = !0;
    return (async () => {
      let L = t.valueKey ?? "value", H = t.labelKey ?? "title";
      if (t?.options) {
        if (typeof t.options == "object" && !Array.isArray(t.options)) {
          const q = Object.values(t.options);
          if (q.length && typeof q[0] == "string") {
            d(t.options);
            return;
          }
        }
        const j = (Array.isArray(t.options) ? t.options : [t.options]).map(Tt), K = At(
          L,
          H,
          j,
          t.groupKey
          // auto-uses `category` if present
        );
        d(K);
        return;
      }
      const X = t?.source ?? {};
      if (t.type === "dataMethod") {
        const I = t.method, j = I ? n[I] : void 0;
        if (j)
          try {
            const K = await j(), q = Array.isArray(K?.data?.data) ? K.data.data : Array.isArray(K?.data) ? K.data : K;
            if (typeof q == "object" && !Array.isArray(q)) {
              const Ke = Object.values(q);
              if (Ke.length && typeof Ke[0] == "string") {
                d(q);
                return;
              }
            }
            const ue = Array.isArray(q) ? q.map(Tt) : [], ye = At(L, H, ue, t.groupKey);
            N && d(ye);
          } catch (K) {
            console.error("Method execution failed:", K), N && d({});
          }
        else
          N && d({});
      }
      if (X.type === "api" && X.url)
        try {
          const I = await fe({
            method: X.method || "GET",
            url: X.url,
            data: X.body ?? {},
            params: X.params ?? {},
            headers: X.headers ?? {}
          }), j = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I;
          if (typeof j == "object" && !Array.isArray(j)) {
            const ue = Object.values(j);
            if (ue.length && typeof ue[0] == "string") {
              d(j);
              return;
            }
          }
          const K = Array.isArray(j) ? j.map(Tt) : [], q = At(L, H, K, t.groupKey);
          N && d(q);
        } catch (I) {
          console.error("API execution failed:", I), N && d({});
        }
      if (t.table || t.type === "dataSelector" || t.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let I;
          if (t.type === "dataSelector")
            I = {
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
            I = {
              table: t.table,
              cols: t.columns,
              where: t.where ? s ? Ge(t.where, { refid: s }) : t.where : void 0
            };
          }
          const j = await Sn(r, I, t?.queryid, void 0, o), K = Array.isArray(j?.data?.data) ? j.data.data : Array.isArray(j?.data) ? j.data : j;
          if (typeof K == "object" && !Array.isArray(K)) {
            const ye = Object.values(K);
            if (ye.length && typeof ye[0] == "string") {
              d(K);
              return;
            }
          }
          const q = Array.isArray(K) ? K.map(Tt) : [], ue = At(L, H, q, t.groupKey);
          N && d(ue);
        } catch (I) {
          console.error("API fetch failed:", I);
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
  const V = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${M ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, $ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, B = Hr(
    () => sc(u),
    [u]
  ), ie = Hr(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !h.trim()) return null;
    const N = h.trim().toLowerCase();
    return B.find(([, O]) => O.trim().toLowerCase() === N);
  }, [t.type, h, B]), J = B.length, U = Hr(() => t.search || !h ? B : B.filter(
    ([, N]) => N.toLowerCase().includes(h.toLowerCase())
  ), [t.search, h, B]), te = (N, O) => {
    if (x.current?.open === !0 || v === !0)
      if (N.key === "ArrowDown")
        N.preventDefault(), y(
          (L) => L + 1 < U.length ? L + 1 : 0
        );
      else if (N.key === "ArrowUp")
        N.preventDefault(), y(
          (L) => L - 1 >= 0 ? L - 1 : U.length - 1
        );
      else if (N.key === "Enter") {
        N.preventDefault();
        const [L] = U[g] || [];
        if (L) {
          let H = O ? L : [...e.values[t.name], L];
          e.setFieldValue(t.name, H), Vt(H, t, o);
        }
        x.current && (x.current.open = !1);
      } else N.key === "Escape" && (x.current.open = !1, p(""), C(!1));
  };
  Le(() => {
    b.current?.querySelector(
      `[data-index="${g}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [g]), Le(() => {
    g >= U.length && y(0);
  }, [U, g]), Le(() => {
    const N = t.autocomplete, O = t.ajaxchain;
    if (!N && !O) return;
    const L = e.values[t.name];
    if (!L) return;
    const H = Array.isArray(O) ? O : O ? [O] : [];
    (async () => {
      try {
        if (ac(N)) {
          const I = N.src;
          if (!I || !r) return;
          const j = Ge(I.where ?? {}, {
            refid: L
          }), K = {
            ...I,
            table: I.table,
            cols: I.columns,
            where: j
          }, { data: q } = await Sn(r, K, t?.queryid, void 0, o), ue = Array.isArray(q?.data) ? q.data[0] : q?.data;
          ue && N.target.split(",").map((ye) => ye.trim()).forEach((ye) => {
            ue[ye] !== void 0 && e.setFieldValue(ye, ue[ye]);
          });
        }
        for (const I of H) {
          const j = I.src;
          if (!I || typeof I != "object" || !j || typeof j != "object" || !r) continue;
          let K;
          if (!j.queryid) {
            if (!j.table || !j.columns)
              throw new Error("SQL query requires field.table");
            const Va = Ge(j?.where ?? {}, {
              refid: L
            });
            K = {
              ...j,
              table: j.table,
              cols: j.columns,
              where: Va
            };
          }
          const { data: q } = await Sn(r, K, j?.queryid, L, o);
          let ue = t.valueKey ?? "value", ye = t.labelKey ?? "title";
          const Ke = Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q?.data) ? q.data : q, _a = Array.isArray(Ke) ? Ke.map(Tt) : [], Ka = At(
            ue,
            ye,
            _a,
            t.groupKey
          );
          l?.(I.target, Ka);
        }
      } catch (I) {
        console.error("Autocomplete / AjaxChain fetch failed", I);
      }
    })();
  }, [e.values[t.name]]), Le(() => {
    if (!t.search || !h.trim() || !t.table || !r) return;
    const N = cc(t.columns ?? ""), O = new AbortController(), L = setTimeout(async () => {
      try {
        let H;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const Ke = s ? Ge(t.where ?? {}, {
            refid: s
          }) : t.where;
          H = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: Ke
          };
        }
        let X = {};
        Array.isArray(N) && N.forEach((Ke) => {
          X[Ke] = [h, "LIKE"];
        });
        let I = t.valueKey ?? "value", j = t.labelKey ?? "title";
        const { data: K } = await Sn(r, H, t?.queryid, void 0, o, X), q = Array.isArray(K?.data?.data) ? K.data.data : Array.isArray(K?.data) ? K.data : K, ue = Array.isArray(q) ? q.map(Tt) : [], ye = At(
          I,
          j,
          ue,
          t.groupKey
        );
        d(ye);
      } catch (H) {
        if (fe.isCancel(H)) return;
        console.error("Search fetch failed", H);
      }
    }, 500);
    return () => {
      clearTimeout(L), O.abort();
    };
  }, [h, s]);
  const me = async (N) => {
    if (N.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const O = await Di(r, N), L = t.multiple ? O.map((H) => H.path) : O[0]?.path;
      e.setFieldValue(
        D,
        L
      ), Vt(L, t, o);
    } catch (O) {
      console.error("File upload failed", O), e.setFieldError(D, "File upload failed");
    }
  }, We = async (N, O, L) => {
    const H = O[N];
    if (!H) return;
    const X = n?.[H];
    if (typeof X != "function") {
      console.error(`Method "${String(H)}" not found`);
      return;
    }
    try {
      await Promise.resolve(X(L));
    } catch (I) {
      console.error(`Method "${String(H)}" failed`, I);
    }
  }, _e = (N) => {
    if (M) return;
    const O = N.target.value;
    p(O), y(0), O.trim() ? C(!0) : (C(!1), e.setFieldValue(D, ""));
  }, A = (N) => {
    e.setFieldValue(D, N), Vt(N, t, o), p(""), C(!1), We("onChange", t, `${D}-${N}`);
  };
  function k(N) {
    const O = N.currentTarget.files;
    O && me(O);
  }
  return {
    setHighlightedIndex: y,
    executeFieldMethod: We,
    handleFileUpload: me,
    handleKeyDown: te,
    handleToggle: z,
    setSearch: p,
    setOpen: C,
    setIsFocused: c,
    handleInputChange: _e,
    handleSelect: A,
    handlePersist: Vt,
    handleFileChange: k,
    optionCount: J,
    baseInputClasses: V,
    focusClasses: $,
    labelClasses: w,
    search: h,
    highlightedIndex: g,
    options: u,
    isDisabled: M,
    key: D,
    filteredOptions: U,
    open: v,
    listRef: b,
    inputRef: f,
    detailsRef: x,
    isFocused: a,
    exactMatch: ie
  };
}
const gc = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ m.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ m.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ m.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ m.jsx("source", { src: t }) }) : /* @__PURE__ */ m.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ m.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ m.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function yc(t) {
  const e = Eo[t] ?? Eo.other;
  return /* @__PURE__ */ m.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const bc = ({ filePath: t, sqlOpsUrls: e }) => {
  const [n, r] = $e(null), [s, o] = $e(!1), i = fc(t), l = hc(i);
  Le(() => {
    if (!e || l !== "image" && !s) return;
    let c = !0, u = null;
    return Pi(t, e).then((d) => {
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
          yc(l),
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
      n ? /* @__PURE__ */ m.jsx(gc, { fileUrl: n, category: l }) : /* @__PURE__ */ m.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function No({
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
                /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: o?.length > 0 ? o.map((v) => fs(b, v) ?? v).join(", ") : `Select ${t.label}` }),
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
            c.length > 0 ? c.map(([v, C], S) => /* @__PURE__ */ m.jsxs(
              "label",
              {
                htmlFor: `${x}-${v}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${o?.includes(v) ? "bg-indigo-50 text-indigo-600 font-medium" : u === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      id: `${x}-${v}`,
                      type: "checkbox",
                      checked: o?.includes(v),
                      onChange: (M) => {
                        const z = M.target.checked ? [...o, v] : o?.filter((D) => D !== v);
                        f.setFieldValue(x, z), g(z, t, y), p("onChange", t, `${x}-${v}`);
                      },
                      onBlur: f.handleBlur,
                      disabled: e,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  C
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
function xc({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const [r, s] = $e(null);
  return Le(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return Pi(t, n).then((l) => {
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
function $i({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const o = Kt(null), i = async (l) => {
    const a = l.currentTarget.files;
    if (!(!a || a.length === 0))
      try {
        const c = await Di(n, a), u = e.multiple ? c.map((d) => d.path) : c[0]?.path;
        t.setFieldValue(
          s,
          u
        ), Vt(u, e, r);
      } catch (c) {
        console.error("File upload failed", c), t.setFieldError(s, "File upload failed");
      }
  };
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: e.label }),
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
        children: t.values[s] ? /* @__PURE__ */ m.jsx(xc, { field_name: s, filePath: t.values[s], sqlOpsUrls: n }) : /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center h-full text-gray-400", children: /* @__PURE__ */ m.jsx("i", { className: "fa-solid fa-user" }) })
      }
    )
  ] });
}
function le(t) {
  this.content = t;
}
le.prototype = {
  constructor: le,
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
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new le(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new le(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new le([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new le(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new le(s);
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
    return t = le.from(t), t.size ? new le(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = le.from(t), t.size ? new le(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = le.from(t);
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
le.from = function(t) {
  if (t instanceof le) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new le(e);
};
function Fi(t, e, n) {
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
      let i = Fi(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function Bi(t, e, n, r) {
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
      let c = Bi(i.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class E {
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
    return new E(s, this.size + e.size);
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
    return new E(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? E.empty : e == 0 && n == this.content.length ? this : new E(this.content.slice(e, n));
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
    return s[e] = n, new E(s, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new E([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new E(this.content.concat(e), this.size + e.nodeSize);
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
    return Fi(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Bi(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Cn(0, e);
    if (e == this.size)
      return Cn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Cn(n + 1, o) : Cn(n, r);
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
      return E.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new E(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return E.empty;
    let n, r = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      r += o.nodeSize, s && o.isText && e[s - 1].sameMarkup(o) ? (n || (n = e.slice(0, s)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new E(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return E.empty;
    if (e instanceof E)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new E([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
E.empty = new E([], 0);
const Kr = { index: 0, offset: 0 };
function Cn(t, e) {
  return Kr.index = t, Kr.offset = e, Kr;
}
function Wn(t, e) {
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
      if (!Wn(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !Wn(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let Q = class hs {
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
    return this == e || this.type == e.type && Wn(this.attrs, e.attrs);
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
      return hs.none;
    if (e instanceof hs)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
Q.none = [];
class _n extends Error {
}
class R {
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
    let r = Wi(this.content, e + this.openStart, n);
    return r && new R(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new R(Hi(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return R.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new R(E.fromJSON(e, n.content), r, s);
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
    return new R(e, r, s);
  }
}
R.empty = new R(E.empty, 0, 0);
function Hi(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Hi(o.content, e - s - 1, n - s - 1)));
}
function Wi(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = Wi(i.content, e - o - 1, n, i);
  return l && t.replaceChild(s, i.copy(l));
}
function wc(t, e, n) {
  if (n.openStart > t.depth)
    throw new _n("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new _n("Inconsistent open depths");
  return _i(t, e, n, 0);
}
function _i(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = _i(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return gt(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = vc(n, t);
      return gt(o, Vi(t, i, l, e, r));
    }
  else return gt(o, Kn(t, e, r));
}
function Ki(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new _n("Cannot join " + e.type.name + " onto " + t.type.name);
}
function ps(t, e, n) {
  let r = t.node(n);
  return Ki(r, e.node(n)), r;
}
function mt(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Yt(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (mt(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    mt(s.child(l), r);
  e && e.depth == n && e.textOffset && mt(e.nodeBefore, r);
}
function gt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Vi(t, e, n, r, s) {
  let o = t.depth > s && ps(t, e, s + 1), i = r.depth > s && ps(n, r, s + 1), l = [];
  return Yt(null, t, s, l), o && i && e.index(s) == n.index(s) ? (Ki(o, i), mt(gt(o, Vi(t, e, n, r, s + 1)), l)) : (o && mt(gt(o, Kn(t, e, s + 1)), l), Yt(e, n, s, l), i && mt(gt(i, Kn(n, r, s + 1)), l)), Yt(r, null, s, l), new E(l);
}
function Kn(t, e, n) {
  let r = [];
  if (Yt(null, t, n, r), t.depth > n) {
    let s = ps(t, e, n + 1);
    mt(gt(s, Kn(t, e, n + 1)), r);
  }
  return Yt(e, null, n, r), new E(r);
}
function vc(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(E.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class ln {
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
      return Q.none;
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
        return new Vn(this, e, r);
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
    return new ln(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Ao.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      Ao.set(e, r = new kc());
    let s = r.elts[r.i] = ln.resolve(e, n);
    return r.i = (r.i + 1) % Sc, s;
  }
}
class kc {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Sc = 12, Ao = /* @__PURE__ */ new WeakMap();
class Vn {
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
const Cc = /* @__PURE__ */ Object.create(null);
class Fe {
  /**
  @internal
  */
  constructor(e, n, r, s = Q.none) {
    this.type = e, this.attrs = n, this.marks = s, this.content = r || E.empty;
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
    return this.type == e && Wn(this.attrs, n || e.defaultAttrs || Cc) && Q.sameSet(this.marks, r || Q.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Fe(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Fe(this.type, this.attrs, this.content, e);
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
      return R.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new R(c, s.depth - i, o.depth - i);
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
    return wc(this.resolve(e), this.resolve(n), r);
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
    return ln.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ln.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ui(this.marks, e);
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
  canReplace(e, n, r = E.empty, s = 0, o = r.childCount) {
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
    let e = Q.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!Q.sameSet(e, this.marks))
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
    let s = E.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, s, r);
    return o.type.checkAttrs(o.attrs), o;
  }
}
Fe.prototype.text = void 0;
class Un extends Fe {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ui(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new Un(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Un(this.type, this.attrs, e, this.marks);
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
function Ui(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class wt {
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
    let r = new Ec(e, n);
    if (r.next == null)
      return wt.empty;
    let s = qi(r);
    r.next && r.err("Unexpected trailing text");
    let o = jc(Oc(s));
    return Ic(o, r), o;
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
        return E.from(l.map((c) => c.createAndFill()));
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
wt.empty = new wt(!0);
class Ec {
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
function qi(t) {
  let e = [];
  do
    e.push(Nc(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Nc(t) {
  let e = [];
  do
    e.push(Ac(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Ac(t) {
  let e = Rc(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Tc(t, e);
    else
      break;
  return e;
}
function To(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Tc(t, e) {
  let n = To(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = To(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Mc(t, e) {
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
function Rc(t) {
  if (t.eat("(")) {
    let e = qi(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Mc(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Oc(t) {
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
function Ji(t, e) {
  return e - t;
}
function Mo(t, e) {
  let n = [];
  return r(e), n.sort(Ji);
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
function jc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Mo(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Mo(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new wt(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(Ji);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function Ic(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Gi(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Yi(t, e) {
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
function Qi(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function Xi(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Lc(t, r, e[r]);
  return n;
}
let Ro = class Zi {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Xi(e, r.attrs), this.defaultAttrs = Gi(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == wt.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : Yi(this.attrs, e);
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
    return new Fe(this, this.computeAttrs(e), E.from(n), Q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = E.from(n), this.checkContent(n), new Fe(this, this.computeAttrs(e), n, Q.setFrom(r));
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
    if (e = this.computeAttrs(e), n = E.from(n), n.size) {
      let i = this.contentMatch.fillBefore(n);
      if (!i)
        return null;
      n = i.append(n);
    }
    let s = this.contentMatch.matchFragment(n), o = s && s.fillBefore(E.empty, !0);
    return o ? new Fe(this, e, n.append(o), Q.setFrom(r)) : null;
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
    Qi(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : Q.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new Zi(o, n, i));
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
function zc(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class Lc {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? zc(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Or {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = Xi(e, s.attrs), this.excluded = null;
    let o = Gi(this.attrs);
    this.instance = o ? new Q(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Q(this, Yi(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new Or(o, s++, n, i)), r;
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
    Qi(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Pc {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = le.from(e.nodes), n.marks = le.from(e.marks || {}), this.nodes = Ro.compile(this.spec.nodes, this), this.marks = Or.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = wt.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Oo(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : Oo(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => Fe.fromJSON(this, s), this.markFromJSON = (s) => Q.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Ro) {
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
    return new Un(r, r.defaultAttrs, e, Q.setFrom(n));
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
function Oo(t, e) {
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
function Dc(t) {
  return t.tag != null;
}
function $c(t) {
  return t.style != null;
}
class yt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (Dc(s))
        this.tags.push(s);
      else if ($c(s)) {
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
    let r = new Io(this, n, !1);
    return r.addAll(e, Q.none, n.from, n.to), r.finish();
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
    let r = new Io(this, n, !0);
    return r.addAll(e, Q.none, n.from, n.to), R.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (Hc(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
        r(i = zo(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = zo(i)), i.node || i.ignore || i.mark || (i.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new yt(e, yt.schemaRules(e)));
  }
}
const el = {
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
}, Fc = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, tl = { ol: !0, ul: !0 }, an = 1, ms = 2, Qt = 4;
function jo(t, e, n) {
  return e != null ? (e ? an : 0) | (e === "full" ? ms : 0) : t && t.whitespace == "pre" ? an | ms : n & ~Qt;
}
class En {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = Q.none, this.match = o || (i & Qt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(E.from(e));
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
    if (!(this.options & an)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - s[0].length));
      }
    }
    let n = E.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(E.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !el.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Io {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = jo(null, n.preserveWhitespace, 0) | (r ? Qt : 0);
    s ? o = new En(s.type, s.attrs, Q.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new En(null, null, Q.none, !0, null, i) : o = new En(e.schema.topNodeType, null, Q.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, o = s.options & ms ? "full" : this.localPreserveWS || (s.options & an) > 0, { schema: i } = this.parser;
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
    tl.hasOwnProperty(i) && this.parser.normalizeLists && Bc(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Fc.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (el.hasOwnProperty(i))
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
      let i = Q.none;
      for (let l of s.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Lo(l.type, e.type)) && (i = l.addToSet(i));
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
    let l = jo(e, o, i.options);
    i.options & Qt && i.content.length == 0 && (l |= Qt);
    let a = Q.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : Lo(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new En(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= an);
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
function Bc(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && tl.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Hc(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function zo(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Lo(t, e) {
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
class jr {
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
    r || (r = Vr(n).createDocumentFragment());
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
    let { dom: r, contentDOM: s } = Pn(Vr(n), this.nodes[e.type.name](e), null, e.attrs);
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
    return s && Pn(Vr(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return Pn(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new jr(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Po(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Po(e.marks);
  }
}
function Po(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Vr(t) {
  return t.document || window.document;
}
const Do = /* @__PURE__ */ new WeakMap();
function Wc(t) {
  let e = Do.get(t);
  return e === void 0 && Do.set(t, e = _c(t)), e;
}
function _c(t) {
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
function Pn(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Wc(r)) && o.indexOf(e) > -1)
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
      let { dom: h, contentDOM: p } = Pn(t, f, n, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const nl = 65535, rl = Math.pow(2, 16);
function Kc(t, e) {
  return t + e * rl;
}
function $o(t) {
  return t & nl;
}
function Vc(t) {
  return (t - (t & nl)) / rl;
}
const sl = 1, ol = 2, Dn = 4, il = 8;
class gs {
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
    return (this.delInfo & il) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (sl | Dn)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ol | Dn)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Dn) > 0;
  }
}
class ve {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && ve.empty)
      return ve.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = $o(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Vc(e);
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
        let p = e == (n < 0 ? a : d) ? null : Kc(l / 3, e - a), g = e == a ? ol : e == d ? sl : Dn;
        return (n < 0 ? e != a : e != d) && (g |= il), new gs(h, g, p);
      }
      s += u - c;
    }
    return r ? e + s : new gs(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = $o(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
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
    return new ve(this.ranges, !this.inverted);
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
    return e == 0 ? ve.empty : new ve(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ve.empty = new ve([]);
class qn {
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
    return new qn(this._maps, this.mirror, e, n);
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
    let e = new qn();
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
    return r ? e : new gs(e, s, null);
  }
}
const Ur = /* @__PURE__ */ Object.create(null);
class pe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ve.empty;
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
    let r = Ur[n.stepType];
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
    if (e in Ur)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ur[e] = n, n.prototype.jsonID = e, n;
  }
}
class re {
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
    return new re(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new re(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return re.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof _n)
        return re.fail(o.message);
      throw o;
    }
  }
}
function Fs(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(Fs(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return E.fromArray(r);
}
class rt extends pe {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new R(Fs(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return re.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Oe(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new rt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof rt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new rt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new rt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
pe.jsonID("addMark", rt);
class Oe extends pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new R(Fs(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return re.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new rt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Oe(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Oe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Oe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Oe(n.from, n.to, e.markFromJSON(n.mark));
  }
}
pe.jsonID("removeMark", Oe);
class st extends pe {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return re.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return re.fromReplace(e, this.pos, this.pos + 1, new R(E.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new st(this.pos, n.marks[s]);
        return new st(this.pos, this.mark);
      }
    }
    return new vt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new st(n.pos, this.mark);
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
    return new st(n.pos, e.markFromJSON(n.mark));
  }
}
pe.jsonID("addNodeMark", st);
class vt extends pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return re.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return re.fromReplace(e, this.pos, this.pos + 1, new R(E.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new st(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new vt(n.pos, this.mark);
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
    return new vt(n.pos, e.markFromJSON(n.mark));
  }
}
pe.jsonID("removeNodeMark", vt);
class se extends pe {
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
    return this.structure && ys(e, this.from, this.to) ? re.fail("Structure replace would overwrite content") : re.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ve([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new se(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new se(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof se) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? R.empty : new R(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new se(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? R.empty : new R(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new se(e.from, this.to, n, this.structure);
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
    return new se(n.from, n.to, R.fromJSON(e, n.slice), !!n.structure);
  }
}
pe.jsonID("replace", se);
class oe extends pe {
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
    if (this.structure && (ys(e, this.from, this.gapFrom) || ys(e, this.gapTo, this.to)))
      return re.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return re.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? re.fromReplace(e, this.from, this.to, r) : re.fail("Content does not fit in gap");
  }
  getMap() {
    return new ve([
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
    return new oe(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new oe(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
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
    return new oe(n.from, n.to, n.gapFrom, n.gapTo, R.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
pe.jsonID("replaceAround", oe);
function ys(t, e, n) {
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
function Uc(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), p = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(p) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new Oe(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new rt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function qc(t, e, n, r) {
  let s = [], o = 0;
  t.doc.nodesBetween(e, n, (i, l) => {
    if (!i.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Or) {
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
  }), s.forEach((i) => t.step(new Oe(i.from, i.to, i.style)));
}
function Bs(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new se(l, u, R.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Oe(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new R(E.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new se(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(E.empty, !0);
    t.replace(l, l, new R(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function Jc(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Ft(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Jc(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function Gc(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = E.empty, d = 0;
  for (let p = o, g = !1; p > n; p--)
    g || r.index(p) > 0 ? (g = !0, u = E.from(r.node(p).copy(u)), d++) : a--;
  let f = E.empty, h = 0;
  for (let p = o, g = !1; p > n; p--)
    g || s.after(p + 1) < s.end(p) ? (g = !0, f = E.from(s.node(p).copy(f)), h++) : c++;
  t.step(new oe(a, c, i, l, new R(u.append(f), d, h), u.size - d, !0));
}
function ll(t, e, n = null, r = t) {
  let s = Yc(t, e), o = s && Qc(r, e);
  return o ? s.map(Fo).concat({ type: e, attrs: n }).concat(o.map(Fo)) : null;
}
function Fo(t) {
  return { type: t, attrs: null };
}
function Yc(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function Qc(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function Xc(t, e, n) {
  let r = E.empty;
  for (let i = n.length - 1; i >= 0; i--) {
    if (r.size) {
      let l = n[i].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = E.from(n[i].type.create(n[i].attrs, r));
  }
  let s = e.start, o = e.end;
  t.step(new oe(s, o, s, o, new R(r, 0, 0), n.length, !0));
}
function Zc(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && eu(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && cl(t, i, l, o), Bs(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new oe(d, f, d + 1, f - 1, new R(E.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && al(t, i, l, o), !1;
    }
  });
}
function al(t, e, n, r) {
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
function cl(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let i = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(i, i + 1, e.type.schema.text(`
`));
    }
  });
}
function eu(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function tu(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new oe(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new R(E.from(i), 0, 0), 1, !0));
}
function Ye(t, e, n = 1, r) {
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
function nu(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = E.empty, i = E.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = E.from(s.node(l).copy(o));
    let u = r && r[c];
    i = E.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new se(e, e, new R(o.append(i), n, n), !0));
}
function Ct(t, e) {
  let n = t.resolve(e), r = n.index();
  return ul(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function ru(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function ul(t, e) {
  return !!(t && e && !t.isLeaf && ru(t, e));
}
function Ir(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, l = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), l++, i = r.node(s).maybeChild(l)) : (o = r.node(s).maybeChild(l - 1), i = r.node(s + 1)), o && !o.isTextblock && ul(o, i) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function su(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, o = t.doc.resolve(e - n), i = o.node().type;
  if (s && i.inlineContent) {
    let u = i.whitespace == "pre", d = !!i.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    cl(t, u.node(), u.before(), l);
  }
  i.inlineContent && Bs(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new se(c, a.map(e + n, -1), R.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    al(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function ou(t, e, n) {
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
function iu(t, e, n) {
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
function zr(t, e, n = e, r = R.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return dl(s, o, r) ? new se(e, n, r) : new lu(s, o, r).fit();
}
function dl(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class lu {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = E.empty;
    for (let s = 0; s <= e.depth; s++) {
      let o = e.node(s);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = E.from(e.node(s).copy(this.placed));
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
    let a = new R(o, i, l);
    return e > -1 ? new oe(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new se(r.pos, s.pos, a) : null;
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
        r ? (o = qr(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
        let i = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (n == 1 && (i ? c.matchType(i.type) || (d = c.fillBefore(E.from(i), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
          if (n == 2 && i && (u = c.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = qr(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new R(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = qr(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new R(Ut(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new R(Ut(e, n, 1), n, r);
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
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(fl(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = qt(this.placed, n, E.from(u)), this.frontier[n].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = p ? e == 0 ? R.empty : new R(Ut(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new R(Ut(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Jr(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = Jr(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = Jr(e, l, c, a, !0);
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
    n.fit.childCount && (this.placed = qt(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = qt(this.placed, this.depth, E.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(E.empty, !0);
    n.childCount && (this.placed = qt(this.placed, this.frontier.length, n));
  }
}
function Ut(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Ut(t.firstChild.content, e - 1, n)));
}
function qt(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(qt(t.lastChild.content, e - 1, n)));
}
function qr(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function fl(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, fl(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(E.empty, !0)))), t.copy(r);
}
function Jr(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !au(n, o.content, i) ? l : null;
}
function au(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function cu(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function uu(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (dl(s, o, r))
    return t.step(new se(e, n, r));
  let i = pl(s, o);
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
    let h = c[f], p = cu(h.type);
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
          return t.replace(s.before(y), b ? o.after(y) : n, new R(hl(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function hl(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(hl(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(E.empty, !0));
  }
  return t;
}
function du(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = ou(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new R(E.from(r), 0, 0));
}
function fu(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), o = pl(r, s);
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
function pl(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let o = t.start(s);
    if (o < t.pos - (t.depth - s) || e.end(s) > e.pos + (e.depth - s) || t.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (o == e.start(s) || s == t.depth && s == e.depth && t.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == o - 1) && n.push(s);
  }
  return n;
}
class It extends pe {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return re.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return re.fromReplace(e, this.pos, this.pos + 1, new R(E.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new It(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new It(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new It(n.pos, n.attr, n.value);
  }
}
pe.jsonID("attr", It);
class cn extends pe {
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
    return re.ok(r);
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new cn(this.attr, e.attrs[this.attr]);
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
    return new cn(n.attr, n.value);
  }
}
pe.jsonID("docAttr", cn);
let Lt = class extends Error {
};
Lt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Lt.prototype = Object.create(Error.prototype);
Lt.prototype.constructor = Lt;
Lt.prototype.name = "TransformError";
class ml {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new qn();
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
      throw new Lt(n.failed);
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
  replace(e, n = e, r = R.empty) {
    let s = zr(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new R(E.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, R.empty);
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
    return uu(this, e, n, r), this;
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
    return du(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return fu(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Gc(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return su(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Xc(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return Zc(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return tu(this, e, n, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new It(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new cn(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new st(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof Q)
      n.isInSet(r.marks) && this.step(new vt(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new vt(e, o)), s = o.removeFromSet(s);
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
    return nu(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Uc(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return qc(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Bs(this, e, n, r), this;
  }
}
const Gr = /* @__PURE__ */ Object.create(null);
class W {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new gl(e.min(n), e.max(n))];
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
  replace(e, n = R.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? R.empty : n), l == 0 && Wo(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), Wo(e, r, n.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new F(e) : Rt(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? Rt(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : Rt(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Se(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Rt(e, e, 0, 0, 1) || new Se(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Rt(e, e, e.content.size, e.childCount, -1) || new Se(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Gr[n.type];
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
    if (e in Gr)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Gr[e] = n, n.prototype.jsonID = e, n;
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
    return F.between(this.$anchor, this.$head).getBookmark();
  }
}
W.prototype.visible = !0;
class gl {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Bo = !1;
function Ho(t) {
  !Bo && !t.parent.inlineContent && (Bo = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class F extends W {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Ho(e), Ho(n), super(e, n);
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
      return W.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new F(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = R.empty) {
    if (super.replace(e, n), n == R.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof F && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Lr(this.anchor, this.head);
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
    return new F(e.resolve(n.anchor), e.resolve(n.head));
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
      let o = W.findFrom(n, r, !0) || W.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return W.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (W.findFrom(e, -r, !0) || W.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new F(e, n);
  }
}
W.jsonID("text", F);
class Lr {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Lr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return F.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class P extends W {
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
    return r ? W.near(o) : new P(o);
  }
  content() {
    return new R(E.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Hs(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new P(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new P(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
P.prototype.visible = !1;
W.jsonID("node", P);
class Hs {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Lr(r, r) : new Hs(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && P.isSelectable(r) ? new P(n) : W.near(n);
  }
}
class Se extends W {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = R.empty) {
    if (n == R.empty) {
      e.delete(0, e.doc.content.size);
      let r = W.atStart(e.doc);
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
    return new Se(e);
  }
  map(e) {
    return new Se(e);
  }
  eq(e) {
    return e instanceof Se;
  }
  getBookmark() {
    return hu;
  }
}
W.jsonID("all", Se);
const hu = {
  map() {
    return this;
  },
  resolve(t) {
    return new Se(t);
  }
};
function Rt(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return F.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && P.isSelectable(l))
        return P.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = Rt(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function Wo(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof se || s instanceof oe))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(W.near(t.doc.resolve(i), n));
}
function _o(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Nn {
  constructor(e, n, r) {
    this.name = e, this.init = _o(n.init, r), this.apply = _o(n.apply, r);
  }
}
new Nn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Nn("selection", {
  init(t, e) {
    return t.selection || W.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Nn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new Nn("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function yl(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = yl(s, e, {})), n[r] = s;
  }
  return n;
}
class Ee {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && yl(e.props, this, this.props), this.key = e.key ? e.key.key : bl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Yr = /* @__PURE__ */ Object.create(null);
function bl(t) {
  return t in Yr ? t + "$" + ++Yr[t] : (Yr[t] = 0, t + "$");
}
class we {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = bl(e);
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
const Ws = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function xl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const wl = (t, e, n) => {
  let r = xl(t, n);
  if (!r)
    return !1;
  let s = _s(r);
  if (!s) {
    let i = r.blockRange(), l = i && Ft(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Ml(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Pt(o, "end") || P.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = zr(t.doc, r.before(i), r.after(i), R.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(Pt(o, "end") ? W.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : P.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, pu = (t, e, n) => {
  let r = xl(t, n);
  if (!r)
    return !1;
  let s = _s(r);
  return s ? vl(t, s, e) : !1;
}, mu = (t, e, n) => {
  let r = Sl(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  return s ? vl(t, s, e) : !1;
};
function vl(t, e, n) {
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
  let c = zr(t.doc, o, a, R.empty);
  if (!c || c.from != o || c instanceof se && c.slice.size >= a - o)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(F.create(u.doc, o)), n(u.scrollIntoView());
  }
  return !0;
}
function Pt(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const kl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = _s(r);
  }
  let i = o && o.nodeBefore;
  return !i || !P.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function _s(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Sl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Cl = (t, e, n) => {
  let r = Sl(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Ml(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Pt(o, "start") || P.isSelectable(o))) {
    let i = zr(t.doc, r.before(), r.after(), R.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(Pt(o, "start") ? W.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : P.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, El = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Ks(r);
  }
  let i = o && o.nodeAfter;
  return !i || !P.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Ks(t) {
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
const gu = (t, e) => {
  let n = t.selection, r = n instanceof P, s;
  if (r) {
    if (n.node.isTextblock || !Ct(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Ir(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(P.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, yu = (t, e) => {
  let n = t.selection, r;
  if (n instanceof P) {
    if (n.node.isTextblock || !Ct(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Ir(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, bu = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && Ft(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, Nl = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Vs(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const xu = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = Vs(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(W.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Al = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof Se || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = Vs(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(F.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Tl = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Ye(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && Ft(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function wu(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof P && e.selection.node.isBlock)
      return !r.parentOffset || !Ye(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Vs(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof F || e.selection instanceof Se) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = Ye(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = Ye(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), p = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const vu = wu(), ku = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(P.create(t.doc, s))), !0);
};
function Su(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || Ct(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Ml(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && Su(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = E.empty;
      for (let b = i.length - 1; b >= 0; b--)
        p = E.from(i[b].create(null, p));
      p = E.from(s.copy(p));
      let g = t.tr.step(new oe(e.pos - 1, h, e.pos, h, new R(p, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && Ct(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : W.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && Ft(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Pt(o, "start", !0) && Pt(s, "end")) {
    let h = s, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let b = E.empty;
        for (let v = p.length - 1; v >= 0; v--)
          b = E.from(p[v].copy(b));
        let x = t.tr.step(new oe(e.pos - p.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new R(b, p.length, 0), 0, !0));
        n(x.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Rl(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(F.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const Cu = Rl(-1), Eu = Rl(1);
function Nu(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && ll(i, t, e);
    return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
  };
}
function Ko(t, e = null) {
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
function Us(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Us(Ws, wl, kl);
Us(Ws, Cl, El);
Us(Nl, Al, Tl, vu);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Au(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return Tu(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Tu(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new Vn(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Vn(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = ll(o, n, r, e);
  return l ? (t && Mu(t, e, l, s, n), !0) : !1;
}
function Mu(t, e, n, r, s) {
  let o = E.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = E.from(n[u].type.create(n[u].attrs, o));
  t.step(new oe(e.start - (r ? 2 : 0), e.end, e.start, e.end, new R(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && Ye(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function Ru(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? Ou(e, n, t, o) : ju(e, n, o) : !0 : !1;
  };
}
function Ou(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new oe(o - 1, i, o, i, new R(E.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Vn(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = Ft(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return Ct(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function ju(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, p = n.endIndex - 1, g = n.startIndex; p > g; p--)
    h -= s.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? E.empty : E.from(s))))
    return !1;
  let d = o.pos, f = d + i.nodeSize;
  return r.step(new oe(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new R((l ? E.empty : E.from(s.copy(E.empty))).append(a ? E.empty : E.from(s.copy(E.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Iu(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = E.from(c ? t.create() : null), d = new R(E.from(t.create(null, E.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new oe(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Et = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Ol = function(t, e, n, r) {
  return n && (Vo(t, e, n, r, -1) || Vo(t, e, n, r, 1));
}, zu = /^(img|br|input|textarea|hr)$/i;
function Vo(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : Jn(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || qs(t) || zu.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Et(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? Jn(t) : 0;
    } else
      return !1;
  }
}
function Jn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Lu(t, e, n) {
  for (let r = e == 0, s = e == Jn(t); r || s; ) {
    if (t == n)
      return !0;
    let o = Et(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == Jn(t);
  }
}
function qs(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const jl = function(t) {
  return t.focusNode && Ol(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Il(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const Be = typeof navigator < "u" ? navigator : null, Uo = typeof document < "u" ? document : null, ct = Be && Be.userAgent || "", bs = /Edge\/(\d+)/.exec(ct), zl = /MSIE \d/.exec(ct), xs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ct), bn = !!(zl || xs || bs), Ll = zl ? document.documentMode : xs ? +xs[1] : bs ? +bs[1] : 0, Pr = !bn && /gecko\/(\d+)/i.test(ct);
Pr && +(/Firefox\/(\d+)/.exec(ct) || [0, 0])[1];
const ws = !bn && /Chrome\/(\d+)/.exec(ct), Qe = !!ws, Pl = ws ? +ws[1] : 0, Nt = !bn && !!Be && /Apple Computer/.test(Be.vendor), Js = Nt && (/Mobile\/\w+/.test(ct) || !!Be && Be.maxTouchPoints > 2), Te = Js || (Be ? /Mac/.test(Be.platform) : !1), Dl = Be ? /Win/.test(Be.platform) : !1, xn = /Android \d/.test(ct), Gs = !!Uo && "webkitFontSmoothing" in Uo.documentElement.style, Pu = Gs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Du(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), o = s && s.size == 0, i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (jl(n)) {
    for (a = i; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && P.isSelectable(d) && s.parent && !(d.isInline && Lu(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new P(i == f ? l : r.resolve(f));
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
    c = Fl(t, u, l, d);
  }
  return c;
}
function $l(t) {
  return t.editable ? t.hasFocus() : Hu(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Ys(t, e = !1) {
  let n = t.state.selection;
  if (Bu(t, n), !!$l(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Qe) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && Ol(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      Fu(t);
    else {
      let { anchor: r, head: s } = n, o, i;
      qo && !(n instanceof F) && (n.$from.parent.inlineContent || (o = Jo(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = Jo(t, n.to))), t.docView.setSelection(r, s, t, e), qo && (o && Go(o), i && Go(i)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && $u(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const qo = Nt || Qe && Pl < 63;
function Jo(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Nt && s && s.contentEditable == "false")
    return Qr(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return Qr(s);
    if (o)
      return Qr(o);
  }
}
function Qr(t) {
  return t.contentEditable = "true", Nt && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Go(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function $u(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!$l(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Fu(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Et(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && bn && Ll <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Bu(t, e) {
  if (e instanceof P) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Yo(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Yo(t);
}
function Yo(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Fl(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || F.between(e, n, r);
}
function Hu(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function vs(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && W.findFrom(o, e);
}
function Ze(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Qo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof F)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Ze(t, new F(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = vs(t.state, e);
        return s && s instanceof P ? Ze(t, s) : !1;
      } else if (!(Te && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? P.isSelectable(o) ? Ze(t, new P(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : Gs ? Ze(t, new F(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof P && r.node.isInline)
      return Ze(t, new F(e > 0 ? r.$to : r.$from));
    {
      let s = vs(t.state, e);
      return s ? Ze(t, s) : !1;
    }
  }
}
function Gn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Xt(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Mt(t, e) {
  return e < 0 ? Wu(t) : _u(t);
}
function Wu(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for (Pr && n.nodeType == 1 && r < Gn(n) && Xt(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (Xt(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Bl(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && Xt(l, -1); )
          s = n.parentNode, o = Et(l), l = l.previousSibling;
        if (l)
          n = l, r = Gn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? ks(t, n, r) : s && ks(t, s, o);
}
function _u(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = Gn(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (Xt(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (Bl(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && Xt(l, 1); )
          o = l.parentNode, i = Et(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = Gn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && ks(t, o, i);
}
function Bl(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ku(t, e) {
  for (; t && e == t.childNodes.length && !qs(t); )
    e = Et(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Vu(t, e) {
  for (; t && !e && !qs(t); )
    e = Et(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function ks(t, e, n) {
  if (e.nodeType != 3) {
    let o, i;
    (i = Ku(e, n)) ? (e = i, n = 0) : (o = Vu(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (jl(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Ys(t);
  }, 50);
}
function Xo(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Qe || Dl) && n.parent.inlineContent) {
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
function Zo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof F && !r.empty || n.indexOf("s") > -1 || Te && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = vs(t.state, e);
    if (i && i instanceof P)
      return Ze(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof Se ? W.near(i, e) : W.findFrom(i, e);
    return l ? Ze(t, l) : !1;
  }
  return !1;
}
function ei(t, e) {
  if (!(t.state.selection instanceof F))
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
function ti(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Uu(t) {
  if (!Nt || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    ti(t, r, "true"), setTimeout(() => ti(t, r, "false"), 20);
  }
  return !1;
}
function qu(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Ju(t, e) {
  let n = e.keyCode, r = qu(e);
  if (n == 8 || Te && n == 72 && r == "c")
    return ei(t, -1) || Mt(t, -1);
  if (n == 46 && !e.shiftKey || Te && n == 68 && r == "c")
    return ei(t, 1) || Mt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Te && n == 66 && r == "c") {
    let s = n == 37 ? Xo(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Qo(t, s, r) || Mt(t, s);
  } else if (n == 39 || Te && n == 70 && r == "c") {
    let s = n == 39 ? Xo(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Qo(t, s, r) || Mt(t, s);
  } else {
    if (n == 38 || Te && n == 80 && r == "c")
      return Zo(t, -1, r) || Mt(t, -1);
    if (n == 40 || Te && n == 78 && r == "c")
      return Uu(t) || Zo(t, 1, r) || Mt(t, 1);
    if (r == (Te ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Hl(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || jr.fromSchema(t.state.schema), l = ql(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Ul[c.nodeName.toLowerCase()]); ) {
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
function Wl(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new R(E.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, p = jr.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = i.appendChild(document.createElement("p"));
        g && y.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = Xu(n), Gs && Zu(i);
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
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || yt.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Gu.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = ed(ni(l, +u[1], +u[2]), u[4]);
  else if (l = R.maxOpen(Yu(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = ni(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Gu = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Yu(t, e) {
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
      if (c = i.length && o.length && Kl(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = Vl(i[i.length - 1], o.length));
        let u = _l(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return E.from(i);
  }
  return t;
}
function _l(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, E.from(t));
  return t;
}
function Kl(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = Kl(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(E.from(_l(n, t, s + 1))));
  }
}
function Vl(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Vl(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(E.empty, !0);
  return t.copy(n.append(r));
}
function Ss(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = Ss(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(E.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function ni(t, e, n) {
  return e < t.openStart && (t = new R(Ss(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new R(Ss(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Ul = {
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
let ri = null;
function ql() {
  return ri || (ri = document.implementation.createHTMLDocument("title"));
}
let Xr = null;
function Qu(t) {
  let e = window.trustedTypes;
  return e ? (Xr || (Xr = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Xr.createHTML(t)) : t;
}
function Xu(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = ql().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && Ul[r[1].toLowerCase()]) && (t = s.map((o) => "<" + o + ">").join("") + t + s.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = Qu(t), s)
    for (let o = 0; o < s.length; o++)
      n = n.querySelector(s[o]) || n;
  return n;
}
function Zu(t) {
  let e = t.querySelectorAll(Qe ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function ed(t, e) {
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
    s = E.from(a.create(r[l + 1], s)), o++, i++;
  }
  return new R(s, o, i);
}
const je = {}, Ce = {};
function ot(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Ce.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Gl(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(xn && Qe && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Js && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Il(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Ju(t, n) ? n.preventDefault() : ot(t, "key");
};
Ce.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Ce.keypress = (t, e) => {
  let n = e;
  if (Gl(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Te && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof F) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function Dr(t) {
  return { left: t.clientX, top: t.clientY };
}
function td(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Qs(t, e, n, r, s) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let i = o.depth + 1; i > 0; i--)
    if (t.someProp(e, (l) => i > o.depth ? l(t, n, o.nodeAfter, o.before(i), s, !0) : l(t, n, o.node(i), o.before(i), s, !1)))
      return !0;
  return !1;
}
function zt(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function nd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && P.isSelectable(r) ? (zt(t, new P(n)), !0) : !1;
}
function rd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof P && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let l = i > o.depth ? o.nodeAfter : o.node(i);
    if (P.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? s = o.before(n.$from.depth) : s = o.before(i);
      break;
    }
  }
  return s != null ? (zt(t, P.create(t.state.doc, s)), !0) : !1;
}
function sd(t, e, n, r, s) {
  return Qs(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? rd(t, n) : nd(t, n));
}
function od(t, e, n, r) {
  return Qs(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function id(t, e, n, r) {
  return Qs(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || ld(t, n, r);
}
function ld(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (zt(t, F.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let i = o > s.depth ? s.nodeAfter : s.node(o), l = s.before(o);
    if (i.inlineContent)
      zt(t, F.create(r, l + 1, l + 1 + i.content.size));
    else if (P.isSelectable(i))
      zt(t, P.create(r, l));
    else
      continue;
    return !0;
  }
}
function Xs(t) {
  return Yn(t);
}
const Jl = Te ? "metaKey" : "ctrlKey";
je.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Xs(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && td(n, t.input.lastClick) && !n[Jl] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let i = t.posAtCoords(Dr(n));
  i && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new ad(t, i, n, !!r)) : (o == "doubleClick" ? od : id)(t, i.pos, i.inside, n) ? n.preventDefault() : ot(t, "pointer"));
};
class ad {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Jl], this.allowDefault = r.shiftKey;
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
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof P && c.from <= i && c.to > i) && (this.mightDrag = {
      node: o,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Pr && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ot(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ys(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Dr(e))), this.updateAllowDefault(e), this.allowDefault || !n ? ot(this.view, "pointer") : sd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Nt && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Qe && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (zt(this.view, W.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : ot(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), ot(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
je.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Xs(t), ot(t, "pointer");
};
je.touchmove = (t) => {
  t.input.lastTouch = Date.now(), ot(t, "pointer");
};
je.contextmenu = (t) => Xs(t);
function Gl(t, e) {
  return t.composing ? !0 : Nt && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const cd = xn ? 5e3 : -1;
Ce.compositionstart = Ce.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof F && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || Qe && Dl && ud(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Yn(t, !0), t.markCursor = null;
    else if (Yn(t, !e.selection.empty), Pr && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  Yl(t, cd);
};
function ud(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Ce.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Yl(t, 20));
};
function Yl(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Yn(t), e));
}
function dd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = fd()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function fd() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Yn(t, e = !1) {
  if (!(xn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), dd(t), e || t.docView && t.docView.dirty) {
      let n = Du(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function hd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const un = bn && Ll < 15 || Js && Pu < 604;
je.copy = Ce.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = un ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = Hl(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : hd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function pd(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function md(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Cs(t, r.value, null, s, e) : Cs(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function Cs(t, e, n, r, s) {
  let o = Wl(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || R.empty)))
    return !0;
  if (!o)
    return !1;
  let i = pd(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Ql(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Ce.paste = (t, e) => {
  let n = e;
  if (t.composing && !xn)
    return;
  let r = un ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Cs(t, Ql(r), r.getData("text/html"), s, n) ? n.preventDefault() : md(t, n);
};
class gd {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const yd = Te ? "altKey" : "ctrlKey";
function Xl(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[yd];
}
je.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords(Dr(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof P ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = P.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = P.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = Hl(t, l);
  (!n.dataTransfer.files.length || !Qe || Pl > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(un ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", un || n.dataTransfer.setData("text/plain", c), t.dragging = new gd(u, Xl(t, n), i);
};
je.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Ce.dragover = Ce.dragenter = (t, e) => e.preventDefault();
Ce.drop = (t, e) => {
  try {
    bd(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function bd(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(Dr(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = Wl(t, Ql(e.dataTransfer), un ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && Xl(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || R.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? iu(t.state.doc, s.pos, o) : s.pos;
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
  if (u && P.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new P(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, g, y, b) => h = b), a.setSelection(Fl(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
je.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Ys(t);
  }, 20));
};
je.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
je.beforeinput = (t, e) => {
  if (Qe && xn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Il(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Ce)
  je[t] = Ce[t];
function dn(t, e) {
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
class Qn {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || bt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new Me(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Qn && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && dn(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class it {
  constructor(e, n) {
    this.attrs = e, this.spec = n || bt;
  }
  map(e, n, r, s) {
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new Me(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof it && dn(this.attrs, e.attrs) && dn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof it;
  }
  destroy() {
  }
}
class Zs {
  constructor(e, n) {
    this.attrs = e, this.spec = n || bt;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new Me(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Zs && dn(this.attrs, e.attrs) && dn(this.spec, e.spec);
  }
  destroy() {
  }
}
class Me {
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
    return new Me(e, n, this.type);
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
    return new Me(e, e, new Qn(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new Me(e, n, new it(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new Me(e, n, new Zs(r, s));
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
    return this.type instanceof it;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Qn;
  }
}
const Ot = [], bt = {};
class ne {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Ot, this.children = n.length ? n : Ot;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Xn(n, e, 0, bt) : ge;
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
    return this == ge || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || bt);
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
    return this.children.length ? xd(this.children, i || [], e, n, r, s, o) : i ? new ne(i.sort(xt), Ot) : ge;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == ge ? ne.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = ea(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, Xn(u, l, c + 1, bt)), o += 3;
      }
    });
    let i = Zl(o ? ta(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new ne(i.length ? this.local.concat(i).sort(xt) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ge ? this : this.removeInner(e, 0);
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
      c != ge ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (s.length) {
      for (let o = 0, i; o < e.length; o++)
        if (i = e[o])
          for (let l = 0; l < s.length; l++)
            s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new ne(s, r) : ge;
  }
  forChild(e, n) {
    if (this == ge)
      return this;
    if (n.isLeaf)
      return ne.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof it) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new ne(s.sort(xt), Ot);
      return r ? new ft([l, r]) : l;
    }
    return r || ge;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ne) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return eo(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ge)
      return Ot;
    if (e.inlineContent || !this.local.some(it.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof it || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
ne.empty = new ne([], []);
ne.removeOverlap = eo;
const ge = ne.empty;
class ft {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, bt));
    return ft.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return ne.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].forChild(e, n);
      o != ge && (o instanceof ft ? r = r.concat(o.members) : r.push(o));
    }
    return ft.from(r);
  }
  eq(e) {
    if (!(e instanceof ft) || e.members.length != this.members.length)
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
    return n ? eo(r ? n : n.sort(xt)) : Ot;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ge;
      case 1:
        return e[0];
      default:
        return new ft(e.every((n) => n instanceof ne) ? e : e.reduce((n, r) => n.concat(r instanceof ne ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function xd(t, e, n, r, s, o, i) {
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
        b != ge ? (l[c] = d, l[c + 1] = h, l[c + 2] = b) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = wd(l, t, e, n, s, o, i), u = Xn(c, r, 0, i);
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
  return new ne(e.sort(xt), l);
}
function Zl(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new Me(s.from + e, s.to + e, s.type));
  }
  return n;
}
function wd(t, e, n, r, s, o, i) {
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
function ea(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function ta(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Xn(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = ea(t, l, a + n);
    if (c) {
      o = !0;
      let u = Xn(c, l, n + a + 1, r);
      u != ge && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = Zl(o ? ta(t) : t, -n).sort(xt);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new ne(i, s) : ge;
}
function xt(t, e) {
  return t.from - e.from || t.to - e.to;
}
function eo(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let o = e[s];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[s] = o.copy(o.from, r.to), si(e, s + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), si(e, s, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function si(t, e, n) {
  for (; e < t.length && xt(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var lt = {
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
}, Zn = {
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
}, vd = typeof navigator < "u" && /Mac/.test(navigator.platform), kd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ae = 0; ae < 10; ae++) lt[48 + ae] = lt[96 + ae] = String(ae);
for (var ae = 1; ae <= 24; ae++) lt[ae + 111] = "F" + ae;
for (var ae = 65; ae <= 90; ae++)
  lt[ae] = String.fromCharCode(ae + 32), Zn[ae] = String.fromCharCode(ae);
for (var Zr in lt) Zn.hasOwnProperty(Zr) || (Zn[Zr] = lt[Zr]);
function Sd(t) {
  var e = vd && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || kd && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Zn : lt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Cd = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Ed = typeof navigator < "u" && /Win/.test(navigator.platform);
function Nd(t) {
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
      Cd ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Ad(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[Nd(n)] = t[n];
  return e;
}
function es(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function Td(t) {
  let e = Ad(t);
  return function(n, r) {
    let s = Sd(r), o, i = e[es(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[es(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Ed && r.ctrlKey && r.altKey) && (o = lt[r.keyCode]) && o != s) {
        let l = e[es(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var Md = Object.defineProperty, to = (t, e) => {
  for (var n in e)
    Md(t, n, { get: e[n], enumerable: !0 });
};
function na(t) {
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
var Rd = class {
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
      state: na({
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
}, ra = {};
to(ra, {
  blur: () => Od,
  clearContent: () => jd,
  clearNodes: () => Id,
  command: () => zd,
  createParagraphNear: () => Ld,
  cut: () => Pd,
  deleteCurrentNode: () => Dd,
  deleteNode: () => $d,
  deleteRange: () => Fd,
  deleteSelection: () => Bd,
  enter: () => Hd,
  exitCode: () => Wd,
  extendMarkRange: () => Kd,
  first: () => Vd,
  focus: () => Jd,
  forEach: () => Gd,
  insertContent: () => Yd,
  insertContentAt: () => Zd,
  joinBackward: () => nf,
  joinDown: () => tf,
  joinForward: () => rf,
  joinItemBackward: () => sf,
  joinItemForward: () => of,
  joinTextblockBackward: () => lf,
  joinTextblockForward: () => af,
  joinUp: () => ef,
  keyboardShortcut: () => uf,
  lift: () => df,
  liftEmptyBlock: () => ff,
  liftListItem: () => hf,
  newlineInCode: () => pf,
  resetAttributes: () => mf,
  scrollIntoView: () => gf,
  selectAll: () => yf,
  selectNodeBackward: () => bf,
  selectNodeForward: () => xf,
  selectParentNode: () => wf,
  selectTextblockEnd: () => vf,
  selectTextblockStart: () => kf,
  setContent: () => Cf,
  setMark: () => Pf,
  setMeta: () => Df,
  setNode: () => $f,
  setNodeSelection: () => Ff,
  setTextDirection: () => Bf,
  setTextSelection: () => Hf,
  sinkListItem: () => Wf,
  splitBlock: () => _f,
  splitListItem: () => Kf,
  toggleList: () => Vf,
  toggleMark: () => Uf,
  toggleNode: () => qf,
  toggleWrap: () => Jf,
  undoInputRule: () => Gf,
  unsetAllMarks: () => Yf,
  unsetMark: () => Qf,
  unsetTextDirection: () => Xf,
  updateAttributes: () => Zf,
  wrapIn: () => eh,
  wrapInList: () => th
});
var Od = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), jd = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), Id = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = Ft(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, zd = (t) => (e) => t(e), Ld = () => ({ state: t, dispatch: e }) => Al(t, e), Pd = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new F(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Dd = () => ({ tr: t, dispatch: e }) => {
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
function ce(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var $d = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = ce(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), c = o.after(i);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Fd = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Bd = () => ({ state: t, dispatch: e }) => Ws(t, e), Hd = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Wd = () => ({ state: t, dispatch: e }) => xu(t, e);
function _d(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function er(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : _d(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function sa(t, e, n = {}) {
  return t.find((r) => r.type === e && er(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function oi(t, e, n = {}) {
  return !!sa(t, e, n);
}
function no(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !sa([...s.node.marks], e, n)))
    return;
  let i = s.index, l = t.start() + s.offset, a = i + 1, c = l + s.node.nodeSize;
  for (; i > 0 && oi([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, l -= t.parent.child(i).nodeSize;
  for (; a < t.parent.childCount && oi([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function ut(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var Kd = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = ut(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = no(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = F.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Vd = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function oa(t) {
  return t instanceof F;
}
function ht(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Ud(t, e = null) {
  if (!e)
    return null;
  const n = W.atStart(t), r = W.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? F.create(t, ht(0, s, o), ht(t.content.size, s, o)) : F.create(t, ht(e, s, o), ht(e, s, o));
}
function ii() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function tr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function qd() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var Jd = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (tr() || ii()) && r.dom.focus(), qd() && !tr() && !ii() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !oa(n.state.selection))
    return i(), !0;
  const l = Ud(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Gd = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), Yd = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), ia = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && ia(r);
  }
  return t;
};
function An(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return ia(n);
}
function fn(t, e, n) {
  if (t instanceof Fe || t instanceof E)
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
        return E.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), fn("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, l = "";
      const a = new Pc({
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
      if (n.slice ? yt.fromSchema(a).parseSlice(An(t), n.parseOptions) : yt.fromSchema(a).parse(An(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = yt.fromSchema(e);
    return n.slice ? o.parseSlice(An(t), n.parseOptions).content : o.parse(An(t), n.parseOptions);
  }
  return fn("", e, n);
}
function Qd(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof se || s instanceof oe))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((l, a, c, u) => {
    i === 0 && (i = u);
  }), t.setSelection(W.near(t.doc.resolve(i), n));
}
var Xd = (t) => !("type" in t), Zd = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
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
        fn(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = fn(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Xd(l) ? l : [l]).forEach((y) => {
      y.check(), f = f ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), u === d && h) {
      const { parent: y } = r.doc.resolve(u);
      y.isTextblock && !y.type.spec.code && !y.childCount && (u -= 1, d += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof E) {
        let y = "";
        e.forEach((b) => {
          b.text && (y += b.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else {
      g = l;
      const y = r.doc.resolve(u), b = y.node(), x = y.parentOffset === 0, v = b.isText || b.isTextblock, C = b.content.size > 0;
      x && v && C && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && Qd(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, ef = () => ({ state: t, dispatch: e }) => gu(t, e), tf = () => ({ state: t, dispatch: e }) => yu(t, e), nf = () => ({ state: t, dispatch: e }) => wl(t, e), rf = () => ({ state: t, dispatch: e }) => Cl(t, e), sf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Ir(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, of = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Ir(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, lf = () => ({ state: t, dispatch: e }) => pu(t, e), af = () => ({ state: t, dispatch: e }) => mu(t, e);
function la() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function cf(t) {
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
      tr() || la() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var uf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = cf(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
function ro(t, e, n = {}) {
  const { from: r, to: s, empty: o } = t.selection, i = e ? ce(e, t.schema) : null, l = [];
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
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => er(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var df = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return ro(n, s, e) ? bu(n, r) : !1;
}, ff = () => ({ state: t, dispatch: e }) => Tl(t, e), hf = (t) => ({ state: e, dispatch: n }) => {
  const r = ce(t, e.schema);
  return Ru(r)(e, n);
}, pf = () => ({ state: t, dispatch: e }) => Nl(t, e);
function so(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function li(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var mf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = so(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ce(t, r.schema)), l === "mark" && (i = ut(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, li(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, i.create(li(f.attrs, e))));
      });
    });
  }), a;
}, gf = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), yf = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new Se(t.doc);
    t.setSelection(n);
  }
  return !0;
}, bf = () => ({ state: t, dispatch: e }) => kl(t, e), xf = () => ({ state: t, dispatch: e }) => El(t, e), wf = () => ({ state: t, dispatch: e }) => ku(t, e), vf = () => ({ state: t, dispatch: e }) => Eu(t, e), kf = () => ({ state: t, dispatch: e }) => Cu(t, e);
function Sf(t, e, n = {}, r = {}) {
  return fn(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Cf = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = Sf(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function aa(t, e) {
  const n = ut(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function ca(t, e) {
  const n = new ml(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function Ef(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Nf(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (s, o) => {
    n(s) && r.push({
      node: s,
      pos: o
    });
  }), r;
}
function ua(t, e) {
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
function oo(t) {
  return (e) => ua(e.$from, t);
}
function Dt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? Dt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? Dt(t.parent, e, n) : null
  }) : t.config[e];
}
function Af(t) {
  return typeof t == "function";
}
function $t(t, e = void 0, ...n) {
  return Af(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function da(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function at(...t) {
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
function Tf(t, e, n) {
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
function Mf(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function Rf(t, e) {
  const n = ce(e, t.schema), { from: r, to: s } = t.selection, o = [];
  t.doc.nodesBetween(r, s, (l) => {
    o.push(l);
  });
  const i = o.reverse().find((l) => l.type.name === n.name);
  return i ? { ...i.attrs } : {};
}
function Of(t, e) {
  const n = so(
    typeof e == "string" ? e : e.name,
    t.schema
  );
  return n === "node" ? Rf(t, e) : n === "mark" ? aa(t, e) : {};
}
function jf(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function If(t) {
  const e = jf(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function fa(t) {
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
  }), If(r);
}
function ha(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((s) => {
    const o = n.resolve(t), i = no(o, s.type);
    i && r.push({
      mark: s,
      ...i
    });
  }) : n.nodesBetween(t, e, (s, o) => {
    !s || s?.nodeSize === void 0 || r.push(
      ...s.marks.map((i) => ({
        from: o,
        to: o + s.nodeSize,
        mark: i
      }))
    );
  }), r;
}
function $n(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function zf(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? ut(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => er(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    t.doc.nodesBetween(h, p, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const b = Math.max(h, y), x = Math.min(p, y + g.nodeSize), v = x - b;
      i += v, l.push(
        ...g.marks.map((C) => ({
          mark: C,
          from: b,
          to: x
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => er(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function ai(t, e) {
  const { nodeExtensions: n } = da(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = $t(Dt(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function pa(t, {
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
      s !== !1 && (pa(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function Lf(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (oa(s) && (o = s.$cursor), o) {
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
var Pf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = ut(t, r.schema);
  if (s)
    if (i) {
      const c = aa(r, a);
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
  return Lf(r, n, a);
}, Df = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), $f = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = ce(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => Ko(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => Ko(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Ff = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = ht(t, 0, r.content.size), o = P.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, Bf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Hf = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = F.atStart(r).from, l = F.atEnd(r).to, a = ht(s, i, l), c = ht(o, i, l), u = F.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Wf = (t) => ({ state: e, dispatch: n }) => {
  const r = ce(t, e.schema);
  return Iu(r)(e, n);
};
function ci(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var _f = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = $n(c, l.node().type.name, l.node().attrs);
  if (o instanceof P && o.node.isBlock)
    return !l.parentOffset || !Ye(i, l.pos) ? !1 : (r && (t && ci(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : Ef(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Ye(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Ye(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof F && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && ci(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Kf = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const l = ce(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
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
      let b = E.empty;
      const x = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let D = a.depth - x; D >= a.depth - 3; D -= 1)
        b = E.from(a.node(D).copy(b));
      const v = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), C = {
        ...$n(f, a.node().type.name, a.node().attrs),
        ...e
      }, S = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(C)) || void 0;
      b = b.append(E.from(l.createAndFill(null, S) || void 0));
      const M = a.before(a.depth - (x - 1));
      n.replace(M, a.after(-v), new R(b, 4 - x, 0));
      let z = -1;
      n.doc.nodesBetween(M, n.doc.content.size, (D, V) => {
        if (z > -1)
          return !1;
        D.isTextblock && D.content.size === 0 && (z = V + 1);
      }), z > -1 && n.setSelection(F.near(n.doc.resolve(z))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...$n(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...$n(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: p },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: p }];
  if (!Ye(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: x } = r, { splittableMarks: v } = o.extensionManager, C = x || b.$to.parentOffset && b.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !C || !s)
      return !0;
    const S = C.filter((M) => v.includes(M.type.name));
    n.ensureMarks(S);
  }
  return !0;
}, ts = (t, e) => {
  const n = oo((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Ct(t.doc, n.pos) && t.join(n.pos), !0;
}, ns = (t, e) => {
  const n = oo((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Ct(t.doc, r) && t.join(r), !0;
}, Vf = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = ce(t, i.schema), p = ce(e, i.schema), { selection: g, storedMarks: y } = i, { $from: b, $to: x } = g, v = b.blockRange(x), C = y || g.$to.parentOffset && g.$from.marks();
  if (!v)
    return !1;
  const S = oo((M) => ai(M.type.name, d))(g);
  if (v.depth >= 1 && S && v.depth - S.depth <= 1) {
    if (S.node.type === h)
      return c.liftListItem(p);
    if (ai(S.node.type.name, d) && h.validContent(S.node.content) && l)
      return a().command(() => (o.setNodeMarkup(S.pos, h), !0)).command(() => ts(o, h)).command(() => ns(o, h)).run();
  }
  return !n || !C || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ts(o, h)).command(() => ns(o, h)).run() : a().command(() => {
    const M = u().wrapInList(h, r), z = C.filter((D) => f.includes(D.type.name));
    return o.ensureMarks(z), M ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ts(o, h)).command(() => ns(o, h)).run();
}, Uf = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = ut(t, r.schema);
  return zf(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, qf = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = ce(t, r.schema), i = ce(e, r.schema), l = ro(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, Jf = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = ce(t, n.schema);
  return ro(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Gf = () => ({ state: t, dispatch: e }) => {
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
}, Yf = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Qf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = ut(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((y) => y.type === a)) == null ? void 0 : o.attrs, g = no(c, a, p);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Xf = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Zf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = so(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ce(t, r.schema)), l === "mark" && (i = ut(t, r.schema));
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
          const v = Math.max(b, u), C = Math.min(b + y.nodeSize, d);
          n.addMark(
            v,
            C,
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
}, eh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return Nu(s, e)(n, r);
}, th = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return Au(s, e)(n, r);
}, nh = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function rh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Tn(t) {
  return rh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function ma(t, e) {
  const n = { ...t };
  return Tn(t) && Tn(e) && Object.keys(e).forEach((r) => {
    Tn(e[r]) && Tn(t[r]) ? n[r] = ma(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var io = class {
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
      ...$t(
        Dt(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...$t(
        Dt(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => ma(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, ga = class ya extends io {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new ya(n);
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
}, sh = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, oh = {};
to(oh, {
  ClipboardTextSerializer: () => ih,
  Commands: () => lh,
  Delete: () => ah,
  Drop: () => ch,
  Editable: () => uh,
  FocusEvents: () => dh,
  Keymap: () => fh,
  Paste: () => hh,
  Tabindex: () => ph,
  TextDirection: () => mh,
  focusEventsPluginKey: () => xa
});
var Ie = class ba extends io {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new ba(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, ih = Ie.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ee({
        key: new we("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = Mf(n);
            return Tf(r, { from: i, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), lh = Ie.create({
  name: "commands",
  addCommands() {
    return {
      ...ra
    };
  }
}), ah = Ie.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = ca(t.before, [t, ...e]);
      fa(u).forEach((h) => {
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
        if (h instanceof Oe) {
          const b = f.slice(p).map(h.from, -1), x = f.slice(p).map(h.to), v = f.invert().map(b, -1), C = f.invert().map(x), S = (g = u.doc.nodeAt(b - 1)) == null ? void 0 : g.marks.some((z) => z.eq(h.mark)), M = (y = u.doc.nodeAt(x)) == null ? void 0 : y.marks.some((z) => z.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: v,
              to: C
            },
            newRange: {
              from: b,
              to: x
            },
            partial: !!(M || S),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), ch = Ie.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Ee({
        key: new we("tiptapDrop"),
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
}), uh = Ie.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Ee({
        key: new we("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), xa = new we("focusEvents"), dh = Ie.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new Ee({
        key: xa,
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
}), fh = Ie.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = p.parent.type.spec.isolating, y = d.pos - d.parentOffset, b = g && p.parent.childCount === 1 ? y === d.pos : W.atStart(c).from === f;
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
    return tr() || la() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Ee({
        key: new we("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: l } = e.selection, a = W.atStart(e.doc).from, c = W.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !pa(n.doc))
            return;
          const f = n.tr, h = na({
            state: n,
            transaction: f
          }), { commands: p } = new Rd({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), hh = Ie.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Ee({
        key: new we("tiptapPaste"),
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
}), ph = Ie.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Ee({
        key: new we("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), mh = Ie.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = da(this.extensions);
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
      new Ee({
        key: new we("textDirection"),
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
function gh(t) {
  return new nh({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = $t(t.getAttributes, void 0, r) || {}, { tr: o } = e, i = n.from;
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
var yh = (t) => "touches" in t, bh = class {
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, yh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, xh = {};
to(xh, {
  createAtomBlockMarkdownSpec: () => wh,
  createBlockMarkdownSpec: () => vh,
  createInlineMarkdownSpec: () => Ch,
  parseAttributes: () => lo,
  parseIndentedBlocks: () => Eh,
  renderNestedMarkdownContent: () => Nh,
  serializeAttributes: () => ao
});
function lo(t) {
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
function ao(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function wh(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = lo,
    serializeAttributes: s = ao,
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
function vh(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = lo,
    serializeAttributes: o = ao,
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
        let C = 1;
        const S = b.length;
        let M = "";
        const z = /^:::([\w-]*)(\s.*)?/gm, D = d.slice(S);
        for (z.lastIndex = 0; ; ) {
          const V = z.exec(D);
          if (V === null)
            break;
          const $ = V.index, w = V[1];
          if (!((p = V[2]) != null && p.endsWith(":::"))) {
            if (w)
              C += 1;
            else if (C -= 1, C === 0) {
              const B = D.slice(0, $);
              M = B.trim();
              const ie = d.slice(0, S + $ + V[0].length);
              let J = [];
              if (M)
                if (l === "block")
                  for (J = h.blockTokens(B), J.forEach((U) => {
                    U.text && (!U.tokens || U.tokens.length === 0) && (U.tokens = h.inlineTokens(U.text));
                  }); J.length > 0; ) {
                    const U = J[J.length - 1];
                    if (U.type === "paragraph" && (!U.text || U.text.trim() === ""))
                      J.pop();
                    else
                      break;
                  }
                else
                  J = h.inlineTokens(M);
              return {
                type: e,
                raw: ie,
                attributes: v,
                content: M,
                tokens: J
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
function kh(t) {
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
function Sh(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function Ch(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = kh,
    serializeAttributes: o = Sh,
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
          const [, C] = y;
          x = C;
        } else {
          const [, C, S] = y;
          x = C, b = S || "";
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
function Eh(t, e, n) {
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
      const S = l[u];
      if (S.trim() === "") {
        const z = l.slice(u + 1).findIndex(($) => $.trim() !== "");
        if (z === -1)
          break;
        if ((((s = (r = l[u + 1 + z].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          b.push(S), c = `${c}${S}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = S.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        b.push(S), c = `${c}${S}
`, u += 1;
      else
        break;
    }
    let x;
    const v = b.slice(1);
    if (v.length > 0) {
      const S = v.map((M) => M.slice(g + d)).join(`
`);
      S.trim() && (e.customNestedParser ? x = e.customNestedParser(S) : x = n.blockTokens(S));
    }
    const C = e.createToken(p, x);
    a.push(C);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function Nh(t, e, n, r) {
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
var wn = class wa extends io {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new wa(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function Ah(t) {
  return new sh({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: s }) => {
      const o = $t(t.getAttributes, void 0, r, s);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = e, l = r[r.length - 1], a = r[0];
      let c = n.to;
      if (l) {
        const u = a.search(/\S/), d = n.from + a.indexOf(l), f = d + l.length;
        if (ha(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === t.type && y !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < n.to && i.delete(f, n.to), d > n.from && i.delete(n.from + u, d), c = n.from + u + l.length, i.addMark(n.from + u, c, t.type.create(o || {})), i.removeStoredMark(t.type);
      }
    }
  });
}
var Th = ga.create({
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
    return ["u", at(this.options.HTMLAttributes, t), 0];
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
}), Mh = Th;
const Rh = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Oh = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Es = "numeric", Ns = "ascii", As = "alpha", Zt = "asciinumeric", Jt = "alphanumeric", Ts = "domain", va = "emoji", jh = "scheme", Ih = "slashscheme", rs = "whitespace";
function zh(t, e) {
  return t in e || (e[t] = []), e[t];
}
function pt(t, e, n) {
  e[Es] && (e[Zt] = !0, e[Jt] = !0), e[Ns] && (e[Zt] = !0, e[As] = !0), e[Zt] && (e[Jt] = !0), e[As] && (e[Jt] = !0), e[Jt] && (e[Ts] = !0), e[va] && (e[Ts] = !0);
  for (const r in e) {
    const s = zh(r, n);
    s.indexOf(t) < 0 && s.push(t);
  }
}
function Lh(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function be(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
be.groups = {};
be.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const s = e.jr[r][0], o = e.jr[r][1];
      if (o && s.test(t))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let s = 0; s < t.length; s++)
      this.tt(t[s], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || be.groups;
    let s;
    return e && e.j ? s = e : (s = new be(e), n && r && pt(e, n, r)), this.jr.push([t, s]), s;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let s = this;
    const o = t.length;
    if (!o)
      return s;
    for (let i = 0; i < o - 1; i++)
      s = s.tt(t[i]);
    return s.tt(t[o - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || be.groups;
    const s = this;
    if (e && e.j)
      return s.j[t] = e, e;
    const o = e;
    let i, l = s.go(t);
    if (l ? (i = new be(), Object.assign(i.j, l.j), i.jr.push.apply(i.jr, l.jr), i.jd = l.jd, i.t = l.t) : i = new be(), o) {
      if (r)
        if (i.t && typeof i.t == "string") {
          const a = Object.assign(Lh(i.t, r), n);
          pt(o, a, r);
        } else n && pt(o, n, r);
      i.t = o;
    }
    return s.j[t] = i, i;
  }
};
const _ = (t, e, n, r, s) => t.ta(e, n, r, s), Z = (t, e, n, r, s) => t.tr(e, n, r, s), ui = (t, e, n, r, s) => t.ts(e, n, r, s), T = (t, e, n, r, s) => t.tt(e, n, r, s), qe = "WORD", Ms = "UWORD", ka = "ASCIINUMERICAL", Sa = "ALPHANUMERICAL", hn = "LOCALHOST", Rs = "TLD", Os = "UTLD", Fn = "SCHEME", jt = "SLASH_SCHEME", co = "NUM", js = "WS", uo = "NL", en = "OPENBRACE", tn = "CLOSEBRACE", nr = "OPENBRACKET", rr = "CLOSEBRACKET", sr = "OPENPAREN", or = "CLOSEPAREN", ir = "OPENANGLEBRACKET", lr = "CLOSEANGLEBRACKET", ar = "FULLWIDTHLEFTPAREN", cr = "FULLWIDTHRIGHTPAREN", ur = "LEFTCORNERBRACKET", dr = "RIGHTCORNERBRACKET", fr = "LEFTWHITECORNERBRACKET", hr = "RIGHTWHITECORNERBRACKET", pr = "FULLWIDTHLESSTHAN", mr = "FULLWIDTHGREATERTHAN", gr = "AMPERSAND", yr = "APOSTROPHE", br = "ASTERISK", et = "AT", xr = "BACKSLASH", wr = "BACKTICK", vr = "CARET", tt = "COLON", fo = "COMMA", kr = "DOLLAR", Pe = "DOT", Sr = "EQUALS", ho = "EXCLAMATION", Ae = "HYPHEN", nn = "PERCENT", Cr = "PIPE", Er = "PLUS", Nr = "POUND", rn = "QUERY", po = "QUOTE", Ca = "FULLWIDTHMIDDLEDOT", mo = "SEMI", De = "SLASH", sn = "TILDE", Ar = "UNDERSCORE", Ea = "EMOJI", Tr = "SYM";
var Na = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Sa,
  AMPERSAND: gr,
  APOSTROPHE: yr,
  ASCIINUMERICAL: ka,
  ASTERISK: br,
  AT: et,
  BACKSLASH: xr,
  BACKTICK: wr,
  CARET: vr,
  CLOSEANGLEBRACKET: lr,
  CLOSEBRACE: tn,
  CLOSEBRACKET: rr,
  CLOSEPAREN: or,
  COLON: tt,
  COMMA: fo,
  DOLLAR: kr,
  DOT: Pe,
  EMOJI: Ea,
  EQUALS: Sr,
  EXCLAMATION: ho,
  FULLWIDTHGREATERTHAN: mr,
  FULLWIDTHLEFTPAREN: ar,
  FULLWIDTHLESSTHAN: pr,
  FULLWIDTHMIDDLEDOT: Ca,
  FULLWIDTHRIGHTPAREN: cr,
  HYPHEN: Ae,
  LEFTCORNERBRACKET: ur,
  LEFTWHITECORNERBRACKET: fr,
  LOCALHOST: hn,
  NL: uo,
  NUM: co,
  OPENANGLEBRACKET: ir,
  OPENBRACE: en,
  OPENBRACKET: nr,
  OPENPAREN: sr,
  PERCENT: nn,
  PIPE: Cr,
  PLUS: Er,
  POUND: Nr,
  QUERY: rn,
  QUOTE: po,
  RIGHTCORNERBRACKET: dr,
  RIGHTWHITECORNERBRACKET: hr,
  SCHEME: Fn,
  SEMI: mo,
  SLASH: De,
  SLASH_SCHEME: jt,
  SYM: Tr,
  TILDE: sn,
  TLD: Rs,
  UNDERSCORE: Ar,
  UTLD: Os,
  UWORD: Ms,
  WORD: qe,
  WS: js
});
const Ve = /[a-z]/, Wt = new RegExp("\\p{L}", "u"), ss = new RegExp("\\p{Emoji}", "u"), Ue = /\d/, is = /\s/, di = "\r", ls = `
`, Ph = "️", Dh = "‍", as = "￼";
let Mn = null, Rn = null;
function $h(t = []) {
  const e = {};
  be.groups = e;
  const n = new be();
  Mn == null && (Mn = fi(Rh)), Rn == null && (Rn = fi(Oh)), T(n, "'", yr), T(n, "{", en), T(n, "}", tn), T(n, "[", nr), T(n, "]", rr), T(n, "(", sr), T(n, ")", or), T(n, "<", ir), T(n, ">", lr), T(n, "（", ar), T(n, "）", cr), T(n, "「", ur), T(n, "」", dr), T(n, "『", fr), T(n, "』", hr), T(n, "＜", pr), T(n, "＞", mr), T(n, "&", gr), T(n, "*", br), T(n, "@", et), T(n, "`", wr), T(n, "^", vr), T(n, ":", tt), T(n, ",", fo), T(n, "$", kr), T(n, ".", Pe), T(n, "=", Sr), T(n, "!", ho), T(n, "-", Ae), T(n, "%", nn), T(n, "|", Cr), T(n, "+", Er), T(n, "#", Nr), T(n, "?", rn), T(n, '"', po), T(n, "/", De), T(n, ";", mo), T(n, "~", sn), T(n, "_", Ar), T(n, "\\", xr), T(n, "・", Ca);
  const r = Z(n, Ue, co, {
    [Es]: !0
  });
  Z(r, Ue, r);
  const s = Z(r, Ve, ka, {
    [Zt]: !0
  }), o = Z(r, Wt, Sa, {
    [Jt]: !0
  }), i = Z(n, Ve, qe, {
    [Ns]: !0
  });
  Z(i, Ue, s), Z(i, Ve, i), Z(s, Ue, s), Z(s, Ve, s);
  const l = Z(n, Wt, Ms, {
    [As]: !0
  });
  Z(l, Ve), Z(l, Ue, o), Z(l, Wt, l), Z(o, Ue, o), Z(o, Ve), Z(o, Wt, o);
  const a = T(n, ls, uo, {
    [rs]: !0
  }), c = T(n, di, js, {
    [rs]: !0
  }), u = Z(n, is, js, {
    [rs]: !0
  });
  T(n, as, u), T(c, ls, a), T(c, as, u), Z(c, is, u), T(u, di), T(u, ls), Z(u, is, u), T(u, as, u);
  const d = Z(n, ss, Ea, {
    [va]: !0
  });
  T(d, "#"), Z(d, ss, d), T(d, Ph, d);
  const f = T(d, Dh);
  T(f, "#"), Z(f, ss, d);
  const h = [[Ve, i], [Ue, s]], p = [[Ve, null], [Wt, l], [Ue, o]];
  for (let g = 0; g < Mn.length; g++)
    Xe(n, Mn[g], Rs, qe, h);
  for (let g = 0; g < Rn.length; g++)
    Xe(n, Rn[g], Os, Ms, p);
  pt(Rs, {
    tld: !0,
    ascii: !0
  }, e), pt(Os, {
    utld: !0,
    alpha: !0
  }, e), Xe(n, "file", Fn, qe, h), Xe(n, "mailto", Fn, qe, h), Xe(n, "http", jt, qe, h), Xe(n, "https", jt, qe, h), Xe(n, "ftp", jt, qe, h), Xe(n, "ftps", jt, qe, h), pt(Fn, {
    scheme: !0,
    ascii: !0
  }, e), pt(jt, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((g, y) => g[0] > y[0] ? 1 : -1);
  for (let g = 0; g < t.length; g++) {
    const y = t[g][0], x = t[g][1] ? {
      [jh]: !0
    } : {
      [Ih]: !0
    };
    y.indexOf("-") >= 0 ? x[Ts] = !0 : Ve.test(y) ? Ue.test(y) ? x[Zt] = !0 : x[Ns] = !0 : x[Es] = !0, ui(n, y, y, x);
  }
  return ui(n, "localhost", hn, {
    ascii: !0
  }), n.jd = new be(Tr), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, Na)
  };
}
function Aa(t, e) {
  const n = Fh(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, s = [];
  let o = 0, i = 0;
  for (; i < r; ) {
    let l = t, a = null, c = 0, u = null, d = -1, f = -1;
    for (; i < r && (a = l.go(n[i])); )
      l = a, l.accepts() ? (d = 0, f = 0, u = l) : d >= 0 && (d += n[i].length, f++), c += n[i].length, o += n[i].length, i++;
    o -= d, i -= f, c -= d, s.push({
      t: u.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return s;
}
function Fh(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let s = t.charCodeAt(r), o, i = s < 55296 || s > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(i), r += i.length;
  }
  return e;
}
function Xe(t, e, n, r, s) {
  let o;
  const i = e.length;
  for (let l = 0; l < i - 1; l++) {
    const a = e[l];
    t.j[a] ? o = t.j[a] : (o = new be(r), o.jr = s.slice(), t.j[a] = o), t = o;
  }
  return o = new be(n), o.jr = s.slice(), t.j[e[i - 1]] = o, o;
}
function fi(t) {
  const e = [], n = [];
  let r = 0, s = "0123456789";
  for (; r < t.length; ) {
    let o = 0;
    for (; s.indexOf(t[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let i = parseInt(t.substring(r, r + o), 10); i > 0; i--)
        n.pop();
      r += o;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const pn = {
  defaultProtocol: "http",
  events: null,
  format: hi,
  formatHref: hi,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function go(t, e = null) {
  let n = Object.assign({}, pn);
  t && (n = Object.assign(n, t instanceof go ? t.o : t));
  const r = n.ignoreTags, s = [];
  for (let o = 0; o < r.length; o++)
    s.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = s;
}
go.prototype = {
  o: pn,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let s = this.o[t];
    return s && (typeof s == "object" ? (s = n.t in s ? s[n.t] : pn[t], typeof s == "function" && r && (s = s(e, n))) : typeof s == "function" && r && (s = s(e, n.t, n)), s);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function hi(t) {
  return t;
}
function Ta(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
Ta.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t = pn.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), s = t.get("tagName", n, e), o = this.toFormattedString(t), i = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), u = t.getObj("attributes", n, e), d = t.getObj("events", n, e);
    return i.href = r, l && (i.class = l), a && (i.target = a), c && (i.rel = c), u && Object.assign(i, u), {
      tagName: s,
      attributes: i,
      content: o,
      eventListeners: d
    };
  }
};
function $r(t, e) {
  class n extends Ta {
    constructor(s, o) {
      super(s, o), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const pi = $r("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), mi = $r("text"), Bh = $r("nl"), On = $r("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = pn.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== hn && t[1].t === tt;
  }
}), Ne = (t) => new be(t);
function Hh({
  groups: t
}) {
  const e = t.domain.concat([gr, br, et, xr, wr, vr, kr, Sr, Ae, co, nn, Cr, Er, Nr, De, Tr, sn, Ar]), n = [yr, tt, fo, Pe, ho, nn, rn, po, mo, ir, lr, en, tn, rr, nr, sr, or, ar, cr, ur, dr, fr, hr, pr, mr], r = [gr, yr, br, xr, wr, vr, kr, Sr, Ae, en, tn, nn, Cr, Er, Nr, rn, De, Tr, sn, Ar], s = Ne(), o = T(s, sn);
  _(o, r, o), _(o, t.domain, o);
  const i = Ne(), l = Ne(), a = Ne();
  _(s, t.domain, i), _(s, t.scheme, l), _(s, t.slashscheme, a), _(i, r, o), _(i, t.domain, i);
  const c = T(i, et);
  T(o, et, c), T(l, et, c), T(a, et, c);
  const u = T(o, Pe);
  _(u, r, o), _(u, t.domain, o);
  const d = Ne();
  _(c, t.domain, d), _(d, t.domain, d);
  const f = T(d, Pe);
  _(f, t.domain, d);
  const h = Ne(pi);
  _(f, t.tld, h), _(f, t.utld, h), T(c, hn, h);
  const p = T(d, Ae);
  T(p, Ae, p), _(p, t.domain, d), _(h, t.domain, d), T(h, Pe, f), T(h, Ae, p);
  const g = T(h, tt);
  _(g, t.numeric, pi);
  const y = T(i, Ae), b = T(i, Pe);
  T(y, Ae, y), _(y, t.domain, i), _(b, r, o), _(b, t.domain, i);
  const x = Ne(On);
  _(b, t.tld, x), _(b, t.utld, x), _(x, t.domain, i), _(x, r, o), T(x, Pe, b), T(x, Ae, y), T(x, et, c);
  const v = T(x, tt), C = Ne(On);
  _(v, t.numeric, C);
  const S = Ne(On), M = Ne();
  _(S, e, S), _(S, n, M), _(M, e, S), _(M, n, M), T(x, De, S), T(C, De, S);
  const z = T(l, tt), D = T(a, tt), V = T(D, De), $ = T(V, De);
  _(l, t.domain, i), T(l, Pe, b), T(l, Ae, y), _(a, t.domain, i), T(a, Pe, b), T(a, Ae, y), _(z, t.domain, S), T(z, De, S), T(z, rn, S), _($, t.domain, S), _($, e, S), T($, De, S);
  const w = [
    [en, tn],
    // {}
    [nr, rr],
    // []
    [sr, or],
    // ()
    [ir, lr],
    // <>
    [ar, cr],
    // （）
    [ur, dr],
    // 「」
    [fr, hr],
    // 『』
    [pr, mr]
    // ＜＞
  ];
  for (let B = 0; B < w.length; B++) {
    const [ie, J] = w[B], U = T(S, ie);
    T(M, ie, U), T(U, J, S);
    const te = Ne(On);
    _(U, e, te);
    const me = Ne();
    _(U, n), _(te, e, te), _(te, n, me), _(me, e, te), _(me, n, me), T(te, J, S), T(me, J, S);
  }
  return T(s, hn, x), T(s, uo, Bh), {
    start: s,
    tokens: Na
  };
}
function Wh(t, e, n) {
  let r = n.length, s = 0, o = [], i = [];
  for (; s < r; ) {
    let l = t, a = null, c = null, u = 0, d = null, f = -1;
    for (; s < r && !(a = l.go(n[s].t)); )
      i.push(n[s++]);
    for (; s < r && (c = a || l.go(n[s].t)); )
      a = null, l = c, l.accepts() ? (f = 0, d = l) : f >= 0 && f++, s++, u++;
    if (f < 0)
      s -= u, s < r && (i.push(n[s]), s++);
    else {
      i.length > 0 && (o.push(cs(mi, e, i)), i = []), s -= f, u -= f;
      const h = d.t, p = n.slice(s - u, s);
      o.push(cs(h, e, p));
    }
  }
  return i.length > 0 && o.push(cs(mi, e, i)), o;
}
function cs(t, e, n) {
  const r = n[0].s, s = n[n.length - 1].e, o = e.slice(r, s);
  return new t(o, n);
}
const _h = typeof console < "u" && console && console.warn || (() => {
}), Kh = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", Y = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Vh() {
  return be.groups = {}, Y.scanner = null, Y.parser = null, Y.tokenQueue = [], Y.pluginQueue = [], Y.customSchemes = [], Y.initialized = !1, Y;
}
function gi(t, e = !1) {
  if (Y.initialized && _h(`linkifyjs: already initialized - will not register custom scheme "${t}" ${Kh}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  Y.customSchemes.push([t, e]);
}
function Uh() {
  Y.scanner = $h(Y.customSchemes);
  for (let t = 0; t < Y.tokenQueue.length; t++)
    Y.tokenQueue[t][1]({
      scanner: Y.scanner
    });
  Y.parser = Hh(Y.scanner.tokens);
  for (let t = 0; t < Y.pluginQueue.length; t++)
    Y.pluginQueue[t][1]({
      scanner: Y.scanner,
      parser: Y.parser
    });
  return Y.initialized = !0, Y;
}
function yo(t) {
  return Y.initialized || Uh(), Wh(Y.parser.start, t, Aa(Y.scanner.start, t));
}
yo.scan = Aa;
function Ma(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new go(n), s = yo(t), o = [];
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
var bo = "[\0-   ᠎ -\u2029 　]", qh = new RegExp(bo), Jh = new RegExp(`${bo}$`), Gh = new RegExp(bo, "g");
function Yh(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function Qh(t) {
  return new Ee({
    key: new we("autolink"),
    appendTransaction: (e, n, r) => {
      const s = e.some((c) => c.docChanged) && !n.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!s || o)
        return;
      const { tr: i } = r, l = ca(n.doc, [...e]);
      if (fa(l).forEach(({ newRange: c }) => {
        const u = Nf(r.doc, c, (h) => h.isTextblock);
        let d, f;
        if (u.length > 1)
          d = u[0], f = r.doc.textBetween(
            d.pos,
            d.pos + d.node.nodeSize,
            void 0,
            " "
          );
        else if (u.length) {
          const h = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!Jh.test(h))
            return;
          d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ");
        }
        if (d && f) {
          const h = f.split(qh).filter(Boolean);
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], g = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const y = yo(p).map((b) => b.toObject(t.defaultProtocol));
          if (!Yh(y))
            return !1;
          y.filter((b) => b.isLink).map((b) => ({
            ...b,
            from: g + b.start + 1,
            to: g + b.end + 1
          })).filter((b) => r.schema.marks.code ? !r.doc.rangeHasMark(b.from, b.to, r.schema.marks.code) : !0).filter((b) => t.validate(b.value)).filter((b) => t.shouldAutoLink(b.value)).forEach((b) => {
            ha(b.from, b.to, r.doc).some((x) => x.mark.type === t.type) || i.addMark(
              b.from,
              b.to,
              t.type.create({
                href: b.href
              })
            );
          });
        }
      }), !!i.steps.length)
        return i;
    }
  });
}
function Xh(t) {
  return new Ee({
    key: new we("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var s, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let i = null;
        if (r.target instanceof HTMLAnchorElement)
          i = r.target;
        else {
          const a = r.target;
          if (!a)
            return !1;
          const c = t.editor.view.dom;
          i = a.closest("a"), i && !c.contains(i) && (i = null);
        }
        if (!i)
          return !1;
        let l = !1;
        if (t.enableClickSelection && (l = t.editor.commands.extendMarkRange(t.type.name)), t.openOnClick) {
          const a = Of(e.state, t.type.name), c = (s = i.href) != null ? s : a.href, u = (o = i.target) != null ? o : a.target;
          c && (window.open(c, u), l = !0);
        }
        return l;
      }
    }
  });
}
function Zh(t) {
  return new Ee({
    key: new we("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { shouldAutoLink: s } = t, { state: o } = e, { selection: i } = o, { empty: l } = i;
        if (l)
          return !1;
        let a = "";
        r.content.forEach((u) => {
          a += u.textContent;
        });
        const c = Ma(a, { defaultProtocol: t.defaultProtocol }).find(
          (u) => u.isLink && u.value === a
        );
        return !a || !c || s !== void 0 && !s(c.value) ? !1 : t.editor.commands.setMark(t.type, {
          href: c.href
        });
      }
    }
  });
}
function dt(t, e) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const s = typeof r == "string" ? r : r.scheme;
    s && n.push(s);
  }), !t || t.replace(Gh, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var ep = ga.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        gi(t);
        return;
      }
      gi(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    Vh();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!dt(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => {
        const e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t), n = /^[a-z][a-z0-9+.-]*:/i.test(t);
        if (e || n && !t.includes("@"))
          return !0;
        const s = (t.includes("@") ? t.split("@").pop() : t).split(/[/?#:]/)[0];
        return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(s) || !/\./.test(s));
      }
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t) {
          return t.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!dt(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!dt(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", at(this.options.HTMLAttributes, t), 0] : ["a", at(this.options.HTMLAttributes, { ...t, href: "" }), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (t, e) => e.applyMark("link", e.parseInline(t.tokens || []), {
    href: t.href,
    title: t.title || null
  }),
  renderMarkdown: (t, e) => {
    var n, r, s, o;
    const i = (r = (n = t.attrs) == null ? void 0 : n.href) != null ? r : "", l = (o = (s = t.attrs) == null ? void 0 : s.title) != null ? o : "", a = e.renderChildren(t);
    return l ? `[${a}](${i} "${l}")` : `[${a}](${i})`;
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!dt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!dt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Ah({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options, s = Ma(t).filter(
              (o) => o.isLink && this.options.isAllowedUri(o.value, {
                defaultValidate: (i) => !!dt(i, n),
                protocols: n,
                defaultProtocol: r
              })
            );
            s.length && s.forEach((o) => {
              this.options.shouldAutoLink(o.value) && e.push({
                text: o.value,
                data: {
                  href: o.href
                },
                index: o.start
              });
            });
          }
          return e;
        },
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) == null ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(
      Qh({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (s) => !!dt(s, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t.push(
      Xh({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t.push(
      Zh({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t;
  }
}), tp = ep, np = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, rp = wn.create({
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
    return ["img", at(this.options.HTMLAttributes, t)];
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
      const c = new bh({
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
      gh({
        find: np,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), sp = rp;
let Is, zs;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  Is = (e) => t.get(e), zs = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  Is = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, zs = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var ee = class {
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
    return Is(t) || zs(t, op(t));
  }
};
function op(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = ip(t), n = t.childCount, r = [];
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
        const C = s + v * e;
        for (let S = 0; S < y; S++) {
          r[C + S] == 0 ? r[C + S] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - S
          });
          const M = x && x[S];
          if (M) {
            const z = (C + S) % e * 2, D = i[z];
            D == null || D != M && i[z + 1] == 1 ? (i[z] = M, i[z + 1] = 1) : D == M && i[z + 1]++;
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
  const l = new ee(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
  return a && lp(l, i, t), l;
}
function ip(t) {
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
function lp(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = ap(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function ap(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function he(t) {
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
const nt = new we("selectingCells");
function kt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function cp(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function ze(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Fr(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = kt(e.$head) || up(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function up(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function Ls(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function dp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function xo(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Ra(t, e, n) {
  const r = t.node(-1), s = ee.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function St(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Oa(t, e, n = 1) {
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
function fp(t, e, n) {
  const r = he(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var G = class Je extends W {
  constructor(e, n = e) {
    const r = e.node(-1), s = ee.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new gl(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (Ls(r) && Ls(s) && xo(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Je.rowSelection(r, s) : o && this.isColSelection() ? Je.colSelection(r, s) : new Je(r, s);
    }
    return F.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = ee.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, i = [];
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
          if (g > 0 && (b = St(b, 0, g)), y > 0 && (b = St(b, b.colspan - y, y)), h.left < s.left) {
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
      i.push(e.child(a).copy(E.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new R(E.from(l), 1, 1);
  }
  replace(e, n = R.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? R.empty : n);
    }
    const o = W.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new R(E.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ee.get(n), s = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = ee.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new Je(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ee.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof Je && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = ee.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new Je(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new Je(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new Je(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new hp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
G.prototype.visible = !1;
W.jsonID("cell", G);
var hp = class ja {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new ja(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && xo(n, r) ? new G(n, r) : W.near(r, 1);
  }
};
function pp(t) {
  if (!(t.selection instanceof G)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(Me.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), ne.create(t.doc, e);
}
function mp({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function gp({ $from: t, $to: e }) {
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
function yp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof P && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = G.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = G.rowSelection(l, l);
    } else if (!n) {
      const l = ee.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = G.create(s, a + 1, c);
    }
  } else r instanceof F && mp(r) ? o = F.create(s, r.from) : r instanceof F && gp(r) && (o = F.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const bp = new we("fix-tables");
function Ia(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? Ia(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function za(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = xp(t, s, o, n));
  };
  return e ? e.doc != t.doc && Ia(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function xp(t, e, n, r) {
  const s = ee.get(e);
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
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, St(d, d.colspan - c.n, c.n));
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
        const b = he(t.schema)[h].createAndFill();
        b && p.push(b);
      }
      const g = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = d;
  }
  return r.setMeta(bp, { fixTables: !0 });
}
function He(t) {
  const e = t.selection, n = Fr(t), r = n.node(-1), s = n.start(-1), o = ee.get(r);
  return {
    ...e instanceof G ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function La(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  fp(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Oa(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? he(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function wp(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t);
    e(La(t.tr, n, n.left));
  }
  return !0;
}
function vp(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t);
    e(La(t.tr, n, n.right));
  }
  return !0;
}
function kp(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, St(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function Sp(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; kp(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ee.get(o);
    }
    e(r);
  }
  return !0;
}
function Cp(t, e, n) {
  var r;
  const s = he(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function Pa(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  Cp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? he(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && i.push(f);
  }
  return t.insert(o, he(r.type.schema).row.create(null, i)), t;
}
function Ep(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t);
    e(Pa(t.tr, n, n.top));
  }
  return !0;
}
function Np(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t);
    e(Pa(t.tr, n, n.bottom));
  }
  return !0;
}
function Ap(t, { map: e, table: n, tableStart: r }, s) {
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
function Tp(t, e) {
  if (!ze(t)) return !1;
  if (e) {
    const n = He(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Ap(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ee.get(n.table);
    }
    e(r);
  }
  return !0;
}
function yi(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Mp({ width: t, height: e, map: n }, r) {
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
function bi(t, e) {
  const n = t.selection;
  if (!(n instanceof G) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = He(t), { map: s } = r;
  if (Mp(s, r)) return !1;
  if (e) {
    const o = t.tr, i = {};
    let l = E.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(i[f] || !h))
        if (i[f] = !0, a == null)
          a = f, c = h;
        else {
          yi(h) || (l = l.append(h.content));
          const p = o.mapping.map(f + r.tableStart);
          o.delete(p, p + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Oa(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = yi(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new G(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function xi(t, e) {
  const n = he(t.schema);
  return Rp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Rp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof G) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = cp(r.$from), !s) return !1;
      o = (i = kt(r.$from)) === null || i === void 0 ? void 0 : i.pos;
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
      const u = He(e), d = e.tr;
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
      }), a[0]), r instanceof G && d.setSelection(new G(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function Op(t, e) {
  return function(n, r) {
    if (!ze(n)) return !1;
    const s = Fr(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof G ? n.selection.forEachCell((i, l) => {
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
function jp(t) {
  return function(e, n) {
    if (!ze(e)) return !1;
    if (n) {
      const r = he(e.schema), s = He(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
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
function wi(t, e, n) {
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
function mn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? jp(t) : function(n, r) {
    if (!ze(n)) return !1;
    if (r) {
      const s = he(n.schema), o = He(n), i = n.tr, l = wi("row", o, s), a = wi("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
mn("row", { useDeprecatedLogic: !0 });
mn("column", { useDeprecatedLogic: !0 });
const Ip = mn("cell", { useDeprecatedLogic: !0 });
function zp(t, e) {
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
function vi(t) {
  return function(e, n) {
    if (!ze(e)) return !1;
    const r = zp(Fr(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(F.between(s, dp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Lp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function jn(t, e) {
  const n = t.selection;
  if (!(n instanceof G)) return !1;
  if (e) {
    const r = t.tr, s = he(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new R(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function Pp(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = Ps(he(i).row, new R(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? Ps(he(i).row, new R(e, n, r)).content : e);
  else return null;
  return Dp(i, l);
}
function Dp(t, e) {
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
    if (s >= e.length && e.push(E.empty), n[s] < r) {
      const o = he(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(E.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Ps(t, e) {
  const n = t.createAndFill();
  return new ml(n).replace(0, n.content.size, e).doc;
}
function $p({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(St(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      i.push(E.from(c));
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
      o.push(E.from(a));
    }
    n = o, e = s;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function Fp(t, e, n, r, s, o, i) {
  const l = t.doc.type.schema, a = he(l);
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
    const f = a.row.create(null, E.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function ki(t, e, n, r, s, o, i, l) {
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
function Si(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.width) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = c * e.width + i, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(p, null, St(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(p + f.nodeSize, f.type.createAndFill(St(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Ci(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = ee.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = ee.get(o), f = d.mapping.maps.length;
  }
  Fp(d, i, o, n, c, u, f) && h(), ki(d, i, o, n, a, c, l, f) && h(), ki(d, i, o, n, a, c, u, f) && h(), Si(d, i, o, n, l, u, a, f) && h(), Si(d, i, o, n, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const g = i.positionAt(p, a, o), y = i.positionAt(p, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new R(s.rows[p - l], 0, 0));
  }
  h(), d.setSelection(new G(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const Bp = Td({
  ArrowLeft: In("horiz", -1),
  ArrowRight: In("horiz", 1),
  ArrowUp: In("vert", -1),
  ArrowDown: In("vert", 1),
  "Shift-ArrowLeft": zn("horiz", -1),
  "Shift-ArrowRight": zn("horiz", 1),
  "Shift-ArrowUp": zn("vert", -1),
  "Shift-ArrowDown": zn("vert", 1),
  Backspace: jn,
  "Mod-Backspace": jn,
  Delete: jn,
  "Mod-Delete": jn
});
function Bn(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function In(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof G) return Bn(n, r, W.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = Da(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return Bn(n, r, W.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = Ra(l, t, e);
      let c;
      return a ? c = W.near(a, 1) : e < 0 ? c = W.near(n.doc.resolve(l.before(-1)), -1) : c = W.near(n.doc.resolve(l.after(-1)), 1), Bn(n, r, c);
    }
  };
}
function zn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof G) i = o;
    else {
      const a = Da(s, t, e);
      if (a == null) return !1;
      i = new G(n.doc.resolve(a));
    }
    const l = Ra(i.$headCell, t, e);
    return l ? Bn(n, r, new G(i.$anchorCell, l)) : !1;
  };
}
function Hp(t, e) {
  const n = t.state.doc, r = kt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new G(r))), !0) : !1;
}
function Wp(t, e, n) {
  if (!ze(t.state)) return !1;
  let r = Pp(n);
  const s = t.state.selection;
  if (s instanceof G) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [E.from(Ps(he(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = ee.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = $p(r, l.right - l.left, l.bottom - l.top), Ci(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = Fr(t.state), i = o.start(-1);
    return Ci(t.state, t.dispatch, i, ee.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function _p(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Ei(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof G)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = kt(t.state.selection.$anchor)) != null && ((n = us(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = us(t, c);
    const d = nt.getState(t.state) == null;
    if (!u || !xo(a, u)) if (d) u = a;
    else return;
    const f = new G(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(nt, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), nt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(nt, -1));
  }
  function l(a) {
    const c = a, u = nt.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Ei(t, c.target) != r && (d = us(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function Da(t, e, n) {
  if (!(t.state.selection instanceof F)) return null;
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
function Ei(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function us(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && kt(t.state.doc.resolve(r)) || kt(t.state.doc.resolve(s));
}
var Kp = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ds(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Ds(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Ds(t, e, n, r, s, o) {
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
const ke = new we("tableColumnResizing");
function Vp({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = Kp, lastColumnResizable: s = !0 } = {}) {
  const o = new Ee({
    key: ke,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = he(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new Up(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = ke.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          qp(i, l, t, s);
        },
        mouseleave: (i) => {
          Jp(i);
        },
        mousedown: (i, l) => {
          Gp(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = ke.getState(i);
        if (l && l.activeHandle > -1) return em(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Up = class Hn {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(ke);
    if (r && r.setHandle != null) return new Hn(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new Hn(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return Ls(e.doc.resolve(s)) || (s = -1), new Hn(s, n.dragging);
    }
    return n;
  }
};
function qp(t, e, n, r) {
  if (!t.editable) return;
  const s = ke.getState(t.state);
  if (s && !s.dragging) {
    const o = Qp(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = Ni(t, e, "left", n) : a - e.clientX <= n && (i = Ni(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = ee.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      $a(t, i);
    }
  }
}
function Jp(t) {
  if (!t.editable) return;
  const e = ke.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && $a(t, -1);
}
function Gp(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = ke.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = Yp(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(ke, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = ke.getState(t.state);
    f?.dragging && (Xp(t, f.activeHandle, Ai(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(ke, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = ke.getState(t.state);
    if (f && f.dragging) {
      const h = Ai(f.dragging, d, n);
      Ti(t, f.activeHandle, h, r);
    }
  }
  return Ti(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Yp(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function Qp(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Ni(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = kt(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ee.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Ai(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function $a(t, e) {
  t.dispatch(t.state.tr.setMeta(ke, { setHandle: e }));
}
function Xp(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = ee.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : Zp(f.colspan);
    p[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: p
    });
  }
  a.docChanged && t.dispatch(a);
}
function Ti(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = ee.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ds(o, a.firstChild, a, r, l, n);
}
function Zp(t) {
  return Array(t).fill(0);
}
function em(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return ne.empty;
  const o = ee.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = ke.getState(t)) === null || a === void 0) && a.dragging && n.push(Me.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(Me.widget(f, h));
    }
  }
  return ne.create(t.doc, n);
}
function tm({ allowTableNodeSelection: t = !1 } = {}) {
  return new Ee({
    key: nt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(nt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: pp,
      handleDOMEvents: { mousedown: _p },
      createSelectionBetween(e) {
        return nt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Hp,
      handleKeyDown: Bp,
      handlePaste: Wp
    },
    appendTransaction(e, n, r) {
      return yp(r, za(r, n), t);
    }
  });
}
var Fa = wn.create({
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
    return ["td", at(this.options.HTMLAttributes, t), 0];
  }
}), Ba = wn.create({
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
    return ["th", at(this.options.HTMLAttributes, t), 0];
  }
}), Ha = wn.create({
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
    return ["tr", at(this.options.HTMLAttributes, t), 0];
  }
});
function $s(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Mi(t, e, n, r, s, o) {
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
            const [v, C] = $s(r, b);
            c.style.setProperty(v, C);
          }
          c = c.nextSibling;
        } else {
          const v = document.createElement("col"), [C, S] = $s(r, b);
          v.style.setProperty(C, S), e.appendChild(v);
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
var nm = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Mi(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Mi(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function rm(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : p && p[g];
      s += y || e, y || (o = !1);
      const [b, x] = $s(e, y);
      i.push(["col", { style: `${b}: ${x}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Ri(t, e) {
  return t.createAndFill();
}
function sm(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function om(t, e, n, r, s) {
  const o = sm(t), i = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Ri(o.cell);
    if (u && l.push(u), r) {
      const d = Ri(o.header_cell);
      d && i.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? i : l));
  return o.table.createChecked(null, a);
}
function im(t) {
  return t instanceof G;
}
var Ln = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!im(e))
    return !1;
  let n = 0;
  const r = ua(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, lm = "";
function am(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function cm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : lm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const g = [];
    p.content && p.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map((S) => e.renderChildren(S)).join(s) : b = y.content ? e.renderChildren(y.content) : "";
      const x = am(b), v = y.type === "tableHeader";
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
var um = cm, Wa = wn.create({
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
      View: nm,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = rm(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      at(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => um(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = om(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(F.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => wp(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => vp(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Sp(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Ep(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Np(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Tp(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Lp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => bi(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => xi(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => mn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => mn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Ip(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => bi(t, e) ? !0 : xi(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Op(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => vi(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => vi(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && za(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = G.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: Ln,
      "Mod-Backspace": Ln,
      Delete: Ln,
      "Mod-Delete": Ln
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Vp({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      tm({
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
      tableRole: $t(Dt(t, "tableRole", e))
    };
  }
});
Ie.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Wa.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Fa.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Ba.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ha.configure(this.options.tableRow)), t;
  }
});
function Re(t) {
  const { title: e, active: n, disabled: r, onClick: s } = t;
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      title: e,
      disabled: r,
      onClick: s,
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
function dm({ editor: t }) {
  const [e, n] = $e(!1);
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
        ds,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        ds,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        ds,
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
function ds({
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
function _t() {
  return /* @__PURE__ */ m.jsx("div", { className: "w-px h-5 bg-gray-300 mx-1" });
}
function fm({ editor: t }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 border-b bg-gray-50", children: [
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(dm, { editor: t }),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Re,
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
      Re,
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
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Re,
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
      Re,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Re,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function hm({
  value: t,
  onChange: e,
  disabled: n
}) {
  const r = Ua({
    extensions: [
      Ja,
      Mh,
      tp.configure({
        openOnClick: !1
      }),
      sp,
      Wa.configure({ resizable: !0 }),
      Ha,
      Ba,
      Fa
    ],
    content: t || "",
    editable: !n,
    immediatelyRender: !1,
    editorProps: {
      attributes: {
        class: "tiptap focus:outline-none min-h-[120px]"
      }
    },
    onUpdate: ({ editor: o }) => {
      e(o.getHTML());
    }
  });
  if (!r) return null;
  const s = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${n ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `
    ${s} 
     py-2
    focus-within:ring-1 focus-within:ring-indigo-500
  `,
      children: [
        !n && /* @__PURE__ */ m.jsx(fm, { editor: r }),
        /* @__PURE__ */ m.jsx(
          qa,
          {
            editor: r,
            className: "tiptap max-w-none p-3 min-h-[200px] max-h-[220px] overflow-auto focus:outline-none"
          }
        )
      ]
    }
  );
}
function vn({
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
    baseInputClasses: C,
    focusClasses: S,
    labelClasses: M,
    search: z,
    highlightedIndex: D,
    options: V,
    isDisabled: $,
    key: w,
    filteredOptions: B,
    open: ie,
    listRef: J,
    detailsRef: U,
    isFocused: te,
    exactMatch: me
  } = mc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), We = (_e) => _e.icon ? /* @__PURE__ */ m.jsx("i", { className: _e.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const k = e.values[w] ?? "", N = z !== "" ? z : fs(V, k) ?? String(k ?? "");
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            className: `${C} ${S}`,
            value: N,
            placeholder: t.placeholder || "Type to search...",
            onChange: y,
            onBlur: () => {
              setTimeout(() => p(!1), 150);
            },
            onKeyDown: (O) => {
              if (O.key === "Enter") {
                if (O.preventDefault(), me) {
                  const [L] = me;
                  e.setFieldValue(w, L), x(L, t, o);
                } else z.trim() && (e.setFieldValue(w, z.trim()), x(z.trim(), t, o));
                p(!1);
                return;
              }
              d(O, !0);
            },
            disabled: $
          }
        ),
        ie && !$ && /* @__PURE__ */ m.jsx(
          "div",
          {
            ref: J,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: B.length > 0 && me ? B.map(([O, L], H) => /* @__PURE__ */ m.jsx(
              "div",
              {
                id: `${w}-${O}`,
                "data-index": H,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${D === H ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => b(O),
                children: L
              },
              O
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
        const k = e.values[w];
        return /* @__PURE__ */ m.jsx(
          No,
          {
            field: t,
            isDisabled: $,
            handleToggle: f,
            detailsRef: U,
            handleKeyDown: d,
            valueArray: k,
            labelClasses: M,
            listRef: J,
            search: z,
            filteredOptions: B,
            highlightedIndex: D,
            setSearch: h,
            formik: e,
            executeFieldMethod: c,
            setHighlightedIndex: a,
            handlePersist: x,
            module_refid: o,
            options: V
          }
        );
      }
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "details",
          {
            className: `relative w-full ${$ ? "opacity-70" : ""}`,
            onToggle: f,
            ref: U,
            onKeyDown: (k) => {
              $ || d(k, !0);
            },
            children: [
              /* @__PURE__ */ m.jsxs(
                "summary",
                {
                  className: `
    select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: e.values[w] ? fs(V, e.values[w]) ?? "Select option" : `Select ${t.label}` }),
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
              !$ && /* @__PURE__ */ m.jsxs("div", { ref: J, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                t.search && /* @__PURE__ */ m.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    value: z,
                    onChange: (k) => {
                      h(k.target.value), a(0);
                    },
                    onKeyDown: (k) => d(k, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                B.length > 0 && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    onClick: (k) => {
                      k.preventDefault(), k.stopPropagation(), e.setFieldValue(w, ""), x("", t, o), U.current?.removeAttribute("open"), h("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                B.length > 0 ? B.map(([k, N], O) => /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    id: `${w}-${k}`,
                    "data-index": O,
                    onClick: (L) => {
                      L.preventDefault(), L.stopPropagation(), e.setFieldValue(w, k), x(k, t, o), U.current?.removeAttribute("open"), h(""), a(0), c("onChange", t, `${w}-${k}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${e.values[w] === k ? "bg-indigo-50 text-indigo-600 font-medium" : D === O ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: N
                  },
                  k
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
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          hm,
          {
            value: e.values[w] ?? "",
            disabled: $,
            onChange: (k) => {
              e.setFieldValue(w, k), x(k, t, o), c("onChange", t, w);
            }
          }
        ),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: w,
              className: `${C} ${S} min-h-[120px] resize-none`,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (k) => {
                e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
              },
              placeholder: t.placeholder,
              disabled: $
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const k = e.values[w];
        return /* @__PURE__ */ m.jsx(
          No,
          {
            field: t,
            isDisabled: $,
            handleToggle: f,
            detailsRef: U,
            handleKeyDown: d,
            valueArray: k,
            labelClasses: M,
            listRef: J,
            search: z,
            filteredOptions: B,
            highlightedIndex: D,
            setSearch: h,
            formik: e,
            executeFieldMethod: c,
            setHighlightedIndex: a,
            handlePersist: x,
            module_refid: o,
            options: V
          }
        );
      }
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              className: `${C} ${S} appearance-none ${$ ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => g(!0),
              name: w,
              id: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (k) => {
                e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
              },
              disabled: $,
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                !Co(V) && Object.entries(V).map(([k, N]) => /* @__PURE__ */ m.jsx("option", { value: k, className: "py-2", children: N }, k)),
                Co(V) && Object.entries(V).map(([k, N]) => /* @__PURE__ */ m.jsx("optgroup", { label: k, children: Object.entries(N).map(([O, L]) => /* @__PURE__ */ m.jsx("option", { value: O, children: L }, O)) }, k))
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
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: `flex ${v > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(V || {}).map(([k, N]) => /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: `${w}-${k}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${w}-${k}`,
                  type: "radio",
                  name: w,
                  checked: e.values[w] === k,
                  value: k,
                  onChange: (O) => {
                    e.setFieldValue(w, O.target.value), x(O.target.value, t, o), c("onChange", t, `${w}-${k}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: $,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              N
            ]
          },
          k
        )) }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
      ] });
    case "checkbox": {
      const k = e.values[w];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(V || {}).map(([N, O]) => /* @__PURE__ */ m.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${w}-${N}`,
                  type: "checkbox",
                  checked: k.includes(N),
                  onChange: (L) => {
                    const H = L.target.checked ? [...k, N] : k.filter((X) => X !== N);
                    e.setFieldValue(w, H), x(H, t, o), c("onChange", t, `${w}-${N}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: $,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              O
            ]
          },
          N
        )) }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
      ] });
    }
    case "tags": {
      const k = e.values[w], N = z.trim(), O = Array.isArray(V) ? V : Object.entries(V || {}).map(([I, j]) => ({ value: I, label: j })), L = (I) => {
        if (!$ && I && !k.includes(I)) {
          let j = [...k, I];
          e.setFieldValue(w, j), x(j, t, o), h("");
        }
      }, H = (I) => {
        let j = k.filter((K) => K !== I);
        e.setFieldValue(
          w,
          j
        ), x(j, t, o);
      }, X = (I) => O.find((j) => j.value === I)?.label ?? I;
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: `${C} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${$ ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !$ && document.getElementById(`${w}-input`)?.focus(),
            children: [
              k.map((I) => /* @__PURE__ */ m.jsxs(
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
                          j.stopPropagation(), $ || H(I);
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
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), L(N));
                  },
                  placeholder: k.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: $
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
        $i,
        {
          formik: e,
          field: t,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const _e = t.multiple === !0, A = Array.isArray(e.values[w]) ? e.values[w] : e.values[w] ? [e.values[w]] : [];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative mb-1", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: We(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: "file",
              className: `${C} ${S} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              multiple: _e,
              onChange: (k) => {
                const N = k.currentTarget.files;
                N && u(N), c("onChange", t, `${w}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder,
              disabled: $
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        A.map((k) => {
          const N = k?.split("/").pop();
          return /* @__PURE__ */ m.jsx(bc, { sqlOpsUrls: r, filePath: k }, N);
        }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "json":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
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
              onChange: (k) => {
                e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: $,
              className: `${C} ${S} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    case "date":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
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
                  onChange: (k) => {
                    e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
                  },
                  onBlur: e.handleBlur,
                  placeholder: t.placeholder,
                  disabled: $,
                  className: `${C} ${S} ${t.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`,
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
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: We(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: "number",
              className: `${C} ${S} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (k) => {
                e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: $,
              min: t.min ?? 1,
              max: t.max
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
    default:
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: M, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: We(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: w,
              type: t.type || "text",
              className: `${C} ${S} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: w,
              value: e.values[w],
              onBlur: e.handleBlur,
              onChange: (k) => {
                e.setFieldValue(w, k.target.value), x(k.target.value, t, o), c("onChange", t, `${w}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: $,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[w] && e.errors[w] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
      ] });
  }
}
function Oi({ title: t, children: e, isFirst: n }) {
  const [r, s] = $e(n);
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
function Br({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  fieldOptions: i,
  setFieldOptions: l
}) {
  return /* @__PURE__ */ m.jsx("div", { className: "bg-white min-h-3/10 overflow-auto", children: /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ m.jsx("div", { className: "lg:col-span-2 flex flex-col ", children: /* @__PURE__ */ m.jsx("div", { className: "relative w-42 h-42 ", children: t?.filter((a) => a.type === "avatar").map((a) => /* @__PURE__ */ m.jsx(
      $i,
      {
        formik: e,
        field: a,
        sqlOpsUrls: r,
        module_refid: o
      }
    )) }) }),
    /* @__PURE__ */ m.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((a, c) => a.type === "avatar" ? null : /* @__PURE__ */ m.jsx("div", { className: `transition-colors duration-200 col-span-12 md:col-span-6 ${gn[yn(Number(a.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ m.jsx(
      vn,
      {
        refid: s,
        module_refid: o,
        sqlOpsUrls: r,
        field: a,
        formik: e,
        methods: n,
        setFieldOptions: l,
        ...i?.[a.name] ? { optionsOverride: i[a.name] } : {}
      },
      a?.name || c
    ) }, a.name)) }) })
  ] }) });
}
function pm({
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
  const { common: u = [], ...d } = e, [f, h] = xe.useState({}), p = (x, v) => {
    h((C) => ({
      ...C,
      [x]: v
    }));
  }, { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const x = {}, v = {};
    return Object.values(e).flat().forEach((C) => {
      on([C], x, v, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), b = Mr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(Oi, { title: "Common", isFirst: !0, children: /* @__PURE__ */ m.jsx(
        Br,
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
      d && Object.entries(d).map(([x, v], C) => /* @__PURE__ */ m.jsx(Oi, { title: x, isFirst: C === 0 && u.length === 0, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((S, M) => Rr(S.hidden) || S.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${gn[yn(Number(S.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ m.jsx(
            vn,
            {
              refid: a,
              module_refid: c,
              sqlOpsUrls: l,
              components: i,
              field: S,
              formik: b,
              methods: o,
              setFieldOptions: p,
              ...f[S.name] ? { optionsOverride: f[S.name] } : {}
            },
            S.name
          )
        },
        S?.name ?? `field-${M}`
      )) }) }, x))
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
function mm({
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
  const { common: d = [], ...f } = e, h = Object.keys(f), [p, g] = xe.useState(0), [y, b] = xe.useState({}), x = (w, B) => {
    b((ie) => ({
      ...ie,
      [w]: B
    }));
  }, { initialValues: v, validationSchema: C, stepperSchemas: S } = xe.useMemo(() => {
    const w = {}, B = {}, ie = {};
    return a ? Object.entries(e).forEach(([J, U]) => {
      const te = {};
      on(U, w, te, n, u, l?.operation), ie[J] = te;
    }) : Object.entries(e).forEach(([J, U]) => {
      on(U, w, B, n, u, l?.operation);
    }), {
      initialValues: w,
      validationSchema: B,
      stepperSchemas: ie
    };
  }, [e, n, a, u, l?.operation]), M = h[p] ?? null, z = a && M ? S[M] ?? {} : C, D = Mr({
    initialValues: v,
    enableReinitialize: !0,
    validationSchema: de.object().shape(z),
    onSubmit: (w) => {
      a ? (p < h.length - 1 && g((B) => B + 1), p === h.length - 1 && r(w)) : r(w);
    }
  }), V = async (w) => {
    if (w.preventDefault(), !a) {
      const B = await D.validateForm();
      if (Object.keys(B).length > 0) {
        alert("Please fill all required fields before submitting."), D.setTouched(
          Object.keys(B).reduce((ie, J) => ({ ...ie, [J]: !0 }), {})
        );
        return;
      }
    }
    D.handleSubmit(w);
  }, $ = () => {
    g((w) => w > 0 ? w - 1 : w);
  };
  return /* @__PURE__ */ m.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: V, className: "w-full mx-auto", children: [
    /* @__PURE__ */ m.jsx("div", { className: "relative", children: /* @__PURE__ */ m.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ m.jsx("div", { className: "p-3", children: /* @__PURE__ */ m.jsx(
        Br,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: D,
          methods: o,
          setFieldOptions: x,
          fieldOptions: y
        }
      ) }),
      /* @__PURE__ */ m.jsx("nav", { className: "relative flex bg-gray-100", children: h.map((w, B) => /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(B),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${p === B ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
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
          /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: M && f[M]?.map((w, B) => Rr(w.hidden) || w.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
            "div",
            {
              className: `col-span-12  ${gn[yn(Number(w.width))] || "lg:col-span-4"}`,
              children: /* @__PURE__ */ m.jsx(
                vn,
                {
                  refid: c,
                  module_refid: u,
                  sqlOpsUrls: l,
                  field: w,
                  formik: D,
                  methods: o,
                  components: i,
                  setFieldOptions: x,
                  ...y[w.name] ? { optionsOverride: y[w.name] } : {}
                },
                w.name
              )
            },
            w?.name ?? `field-${B}`
          )) }),
          /* @__PURE__ */ m.jsxs("div", { className: `mt-8 flex ${p > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            p > 0 && /* @__PURE__ */ m.jsx("button", { onClick: $, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
            /* @__PURE__ */ m.jsx("div", { className: "flex gap-1", children: h.map((w, B) => /* @__PURE__ */ m.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${B === p ? "bg-action w-6" : "bg-gray-300"}`
              },
              B
            )) })
          ] }) })
        ]
      },
      h[p]
    )
  ] }) });
}
function gm({
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
  const c = lc(e, i?.operation), [u, d] = xe.useState({}), f = (x, v) => {
    d((C) => ({
      ...C,
      [x]: v
    }));
  }, { commonFields: h, otherFields: p } = xe.useMemo(() => c.reduce(
    (x, v) => (v.group === "common" ? x.commonFields.push(v) : x.otherFields.push(v), x),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const x = {}, v = {};
    return c.forEach((C) => {
      on([C], x, v, n, a, i?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [c, n]), b = Mr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ m.jsx(
      Br,
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
    /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((x, v) => Rr(x.hidden) || x.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${gn[yn(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ m.jsx(
          vn,
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
      x?.name ?? `field-${v}`
    )) }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ m.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function ji({ title: t, children: e }) {
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
function ym({
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
  const { common: u = [], ...d } = e, [f, h] = xe.useState({}), p = (x, v) => {
    h((C) => ({
      ...C,
      [x]: v
    }));
  }, { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const x = {}, v = {};
    return Object.values(e).flat().forEach((C) => {
      on([C], x, v, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), b = Mr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(ji, { title: "Common", children: /* @__PURE__ */ m.jsx(
        Br,
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
      d && Object.entries(d).map(([x, v], C) => /* @__PURE__ */ m.jsx(ji, { title: x, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((S, M) => Rr(S.hidden) || S.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${gn[yn(Number(S.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ m.jsx(
            vn,
            {
              refid: a,
              module_refid: c,
              sqlOpsUrls: l,
              components: i,
              field: S,
              formik: b,
              methods: o,
              setFieldOptions: p,
              ...f[S.name] ? { optionsOverride: f[S.name] } : {}
            },
            S.name
          )
        },
        S?.name ?? `field-${M}`
      )) }) }, x))
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
function Cm({
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
  let l = nc(t);
  const a = t.endPoints, c = t?.source?.refid, u = rc(t?.fields ?? {}, a?.operation), [d, f] = xe.useState(i), h = xe.useMemo(() => ic(t.fields), [t.fields]);
  xe.useEffect(() => {
    let y = !0;
    return (async () => {
      const x = t?.source ?? {};
      if (!x?.type) {
        y && f({});
        return;
      }
      if (x.type === "method") {
        const v = x.method, C = v ? e[v] : void 0;
        if (C)
          try {
            const S = await Promise.resolve(C());
            y && f(S ?? {});
          } catch (S) {
            console.error("Method execution failed:", S), y && f({});
          }
        else
          y && f({});
      }
      if (x.type === "api" && a?.operation !== "create")
        try {
          const v = await fe({
            method: x.method || "GET",
            url: x.url ?? "",
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          });
          y && f(v.data ?? {});
        } catch (v) {
          console.error("API fetch failed:", v), y && f({});
        }
      if (x.type === "sql" && x.refid && x.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && x.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const v = await pc.fetch(a, {
            source: {
              ...x,
              table: x.table,
              columns: x.columns,
              where: Ge(x.where, {
                refid: c
              })
            },
            fields: So(t.fields, a.operation)
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
        x = await oc();
      } catch (C) {
        console.error("catch fetchGeolocation", C), x = null;
      }
    const v = {
      ...y,
      ...Object.fromEntries(
        h.map((C) => [C, x])
      )
    };
    if (b.type === "method") {
      const C = b.method, S = C ? e[C] : void 0;
      if (S)
        try {
          const M = await Promise.resolve(S(v));
          if (o?.(M), e?.handleActions) {
            let z = a?.operation === "update" ? c : M?.data?.refid;
            const D = t?.gotolink?.replace(
              "{hashid}",
              String(z)
            );
            e.handleActions(D);
          }
        } catch (M) {
          o?.(M), console.error("Method execution failed:", M);
        }
    }
    if (b.type === "api") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const C = await fe({
          method: b.method || "POST",
          url: a.baseURL + b.endpoint,
          data: v ?? {},
          headers: {
            Authorization: `Bearer ${a?.accessToken}`
          }
        });
        if (o?.(C), e?.handleActions) {
          let S = a.operation === "update" ? c : C?.data?.refid;
          const M = t?.gotolink?.replace(
            "{hashid}",
            String(S)
          );
          e.handleActions(M);
        }
      } catch (C) {
        o?.(C), console.error("API fetch failed:", C);
      }
    }
    if (b.type === "sql") {
      const C = t.endPoints;
      if (!C) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let S = !1, M;
        b?.dbopsid && (S = !0, M = b?.dbopsid);
        const z = await fe({
          method: "GET",
          url: C.baseURL + C.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${C?.accessToken}`
          }
        });
        if (!S) {
          let V = {
            ...b
          };
          b.where && (V = {
            ...b,
            where: Ge(b.where, {
              refid: c
            })
          }), M = (await fe({
            method: "POST",
            url: C.baseURL + C.dbopsGetRefId,
            data: {
              operation: C.operation,
              source: V,
              fields: So(t.fields, C.operation),
              forcefill: t.forcefill,
              datahash: z.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${C?.accessToken}`
            }
          }))?.data.refid;
        }
        const D = await fe({
          method: "POST",
          url: C.baseURL + C[C.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: M,
            fields: v,
            datahash: z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${C?.accessToken}`
          }
        });
        if (o?.(D), e?.handleActions) {
          let V = C.operation === "update" ? c : D?.data?.refid;
          const $ = t?.gotolink?.replace(
            "{hashid}",
            String(V)
          );
          e.handleActions($);
        }
      } catch (S) {
        o?.(S), console.error("API fetch failed:", S);
      }
    }
  }, g = {
    accordion: /* @__PURE__ */ m.jsx(
      pm,
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
      ym,
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
      mm,
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
      gm,
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
  Cm as LogiksForm
};
