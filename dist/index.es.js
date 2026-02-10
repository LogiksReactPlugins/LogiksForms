import be, { useState as De, useRef as Mt, useEffect as ze, useMemo as bo } from "react";
import fe from "axios";
import * as de from "yup";
import { useFormik as Tr } from "formik";
import { useEditor as Va, EditorContent as Ua } from "@tiptap/react";
import qa from "@tiptap/starter-kit";
var vn = { exports: {} }, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Ja() {
  if (xo) return Bt;
  xo = 1;
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
var wo;
function Ga() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    function t(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === $ ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case C:
          return "Suspense";
        case T:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case p:
            return "Portal";
          case k:
            return (w.displayName || "Context") + ".Provider";
          case x:
            return (w._context.displayName || "Context") + ".Consumer";
          case E:
            var S = w.render;
            return w = w.displayName, w || (w = S.displayName || S.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case I:
            return S = w.displayName || null, S !== null ? S : t(w.type) || "Memo";
          case L:
            S = w._payload, w = w._init;
            try {
              return t(w(S));
            } catch {
            }
        }
      return null;
    }
    function e(w) {
      return "" + w;
    }
    function n(w) {
      try {
        e(w);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var R = S.error, j = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return R.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), e(w);
      }
    }
    function r(w) {
      if (w === g) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === L)
        return "<...>";
      try {
        var S = t(w);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var w = v.A;
      return w === null ? null : w.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(w) {
      if (B.call(w, "key")) {
        var S = Object.getOwnPropertyDescriptor(w, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function l(w, S) {
      function R() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: R,
        configurable: !0
      });
    }
    function a() {
      var w = t(this.type);
      return X[w] || (X[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function c(w, S, R, j, _, J, O, z) {
      return R = J.ref, w = {
        $$typeof: h,
        type: w,
        key: S,
        props: J,
        _owner: _
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(w, "ref", { enumerable: !1, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(w, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(w, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(w, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function u(w, S, R, j, _, J, O, z) {
      var P = S.children;
      if (P !== void 0)
        if (j)
          if (ie(P)) {
            for (j = 0; j < P.length; j++)
              d(P[j]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(P);
      if (B.call(S, "key")) {
        P = t(w);
        var U = Object.keys(S).filter(function(ue) {
          return ue !== "key";
        });
        j = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", Et[P + j] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          P,
          U,
          P
        ), Et[P + j] = !0);
      }
      if (P = null, R !== void 0 && (n(R), P = "" + R), i(S) && (n(S.key), P = "" + S.key), "key" in S) {
        R = {};
        for (var re in S)
          re !== "key" && (R[re] = S[re]);
      } else R = S;
      return P && l(
        R,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), c(
        w,
        P,
        J,
        _,
        s(),
        R,
        O,
        z
      );
    }
    function d(w) {
      typeof w == "object" && w !== null && w.$$typeof === h && w._store && (w._store.validated = 1);
    }
    var f = be, h = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), v = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ie = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(w) {
        return w();
      }
    };
    var q, X = {}, me = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), He = V(r(o)), Et = {};
    Ht.Fragment = g, Ht.jsx = function(w, S, R, j, _) {
      var J = 1e4 > v.recentlyCreatedOwnerStacks++;
      return u(
        w,
        S,
        R,
        !1,
        j,
        _,
        J ? Error("react-stack-top-frame") : me,
        J ? V(r(w)) : He
      );
    }, Ht.jsxs = function(w, S, R, j, _) {
      var J = 1e4 > v.recentlyCreatedOwnerStacks++;
      return u(
        w,
        S,
        R,
        !0,
        j,
        _,
        J ? Error("react-stack-top-frame") : me,
        J ? V(r(w)) : He
      );
    };
  }()), Ht;
}
var vo;
function Ya() {
  return vo || (vo = 1, process.env.NODE_ENV === "production" ? vn.exports = Ja() : vn.exports = Ga()), vn.exports;
}
var m = Ya();
const Qa = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Xa = ["mp4", "webm", "ogg"], Za = ["txt", "json", "csv"], ec = ["pdf"];
function tc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
function nc(t, e = "create", n = "Info") {
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
function ko(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const sn = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? zi(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? Ii(l) : null;
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
              const k = /* @__PURE__ */ new Date(`${x}-${b}-${y}`);
              return !isNaN(k.getTime());
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
}, mn = {
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
function gn(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const Mr = (t) => t === !0 || t === "true", qe = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => qe(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    qe(n, e),
    qe(r, e)
  ])
) : t, Nt = (t, e, n, r) => {
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
}, us = (t, e) => {
  if (!t || e == null) return;
  const n = String(e);
  if (typeof Object.values(t)[0] == "string")
    return t[n];
  for (const s of Object.values(t))
    if (n in s)
      return s[n];
}, rc = (t) => {
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
}, So = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = Object.values(t)[0];
  return typeof e == "object" && e !== null && !Array.isArray(e);
};
async function sc() {
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
const oc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function ic(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function Kt(t, e, n) {
  const r = Ii(e);
  r && n && uc(n, r, t);
}
function lc(t) {
  return typeof t == "object" && t !== null && typeof t.target == "string" && typeof t.src == "object" && t.src !== null && typeof t.src.table == "string";
}
function ac(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const At = (t) => {
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
}, cc = "__form_persist__", ji = (t) => `${cc}:${t}`;
function Ii(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function zi(t) {
  try {
    return JSON.parse(localStorage.getItem(ji(t)) || "{}");
  } catch {
    return {};
  }
}
function uc(t, e, n) {
  const r = zi(t);
  localStorage.setItem(
    ji(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function dc(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function fc(t) {
  return Qa.includes(t) ? "image" : Xa.includes(t) ? "video" : ec.includes(t) ? "pdf" : Za.includes(t) ? "text" : "other";
}
const Co = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Jt = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Br = async (t) => (await fe.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Jt(t) }
)).data.refhash, Hr = async (t, e) => (await fe.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: Jt(t) }
)).data.refid, hc = {
  async fetch(t, e, n, r) {
    const s = await Br(t);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await Hr(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await fe.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: Jt(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await Br(t), s = await Hr(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Jt(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await Br(t), s = await Hr(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Jt(t) }
    )).data;
  }
};
async function kn(t, e, n, r = void 0, s = void 0, o = {}) {
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
async function Li(t, e) {
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
async function Pi(t, e) {
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
function pc({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const [a, c] = De(!1), [u, d] = De(
    i ?? t.options ?? {}
  );
  Mt(null);
  const f = Mt(null), [h, p] = De(""), [g, y] = De(0), b = Mt(null), x = Mt(null), [k, E] = De(!1), C = Mt(h), T = t.disabled === !0;
  ze(() => {
    C.current = h;
  }, [h]);
  const I = (S) => {
    if (T) {
      S.preventDefault(), x.current?.removeAttribute("open");
      return;
    }
    S.currentTarget.open || p("");
  };
  ze(() => {
    i && Object.keys(i).length !== 0 && d(i);
  }, [i]), ze(() => {
    const S = (R) => {
      x.current && !x.current.contains(R.target) && (x.current.open = !1, p(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, []);
  const L = t.name;
  ze(() => {
    let S = !0;
    return (async () => {
      let j = t.valueKey ?? "value", _ = t.labelKey ?? "title";
      if (t?.options) {
        if (typeof t.options == "object" && !Array.isArray(t.options)) {
          const U = Object.values(t.options);
          if (U.length && typeof U[0] == "string") {
            d(t.options);
            return;
          }
        }
        const z = (Array.isArray(t.options) ? t.options : [t.options]).map(At), P = Nt(
          j,
          _,
          z,
          t.groupKey
          // auto-uses `category` if present
        );
        d(P);
        return;
      }
      const J = t?.source ?? {};
      if (t.type === "dataMethod") {
        const O = t.method, z = O ? n[O] : void 0;
        if (z)
          try {
            const P = await z(), U = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P;
            if (typeof U == "object" && !Array.isArray(U)) {
              const We = Object.values(U);
              if (We.length && typeof We[0] == "string") {
                d(U);
                return;
              }
            }
            const re = Array.isArray(U) ? U.map(At) : [], ue = Nt(j, _, re, t.groupKey);
            S && d(ue);
          } catch (P) {
            console.error("Method execution failed:", P), S && d({});
          }
        else
          S && d({});
      }
      if (J.type === "api" && J.url)
        try {
          const O = await fe({
            method: J.method || "GET",
            url: J.url,
            data: J.body ?? {},
            params: J.params ?? {},
            headers: J.headers ?? {}
          }), z = Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O?.data) ? O.data : O;
          if (typeof z == "object" && !Array.isArray(z)) {
            const re = Object.values(z);
            if (re.length && typeof re[0] == "string") {
              d(z);
              return;
            }
          }
          const P = Array.isArray(z) ? z.map(At) : [], U = Nt(j, _, P, t.groupKey);
          S && d(U);
        } catch (O) {
          console.error("API execution failed:", O), S && d({});
        }
      if (t.table || t.type === "dataSelector" || t.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let O;
          if (t.type === "dataSelector")
            O = {
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
            O = {
              table: t.table,
              cols: t.columns,
              where: t.where ? s ? qe(t.where, { refid: s }) : t.where : void 0
            };
          }
          const z = await kn(r, O, t?.queryid, void 0, o), P = Array.isArray(z?.data?.data) ? z.data.data : Array.isArray(z?.data) ? z.data : z;
          if (typeof P == "object" && !Array.isArray(P)) {
            const ue = Object.values(P);
            if (ue.length && typeof ue[0] == "string") {
              d(P);
              return;
            }
          }
          const U = Array.isArray(P) ? P.map(At) : [], re = Nt(j, _, U, t.groupKey);
          S && d(re);
        } catch (O) {
          console.error("API fetch failed:", O);
        }
      }
    })(), () => {
      S = !1;
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

  ${T ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, $ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, v = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, B = bo(
    () => rc(u),
    [u]
  ), ie = B.length, V = bo(() => t.search || !h ? B : B.filter(
    ([, S]) => S.toLowerCase().includes(h.toLowerCase())
  ), [t.search, h, B]), q = (S, R) => {
    if (x.current?.open === !0 || k === !0)
      if (S.key === "ArrowDown")
        S.preventDefault(), y(
          (j) => j + 1 < V.length ? j + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), y(
          (j) => j - 1 >= 0 ? j - 1 : V.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [j] = V[g] || [];
        if (j) {
          let _ = R ? j : [...e.values[t.name], j];
          e.setFieldValue(t.name, _), Kt(_, t, o);
        }
        x.current && (x.current.open = !1);
      } else S.key === "Escape" && (x.current.open = !1, p(""), E(!1));
  };
  ze(() => {
    b.current?.querySelector(
      `[data-index="${g}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [g]), ze(() => {
    g >= V.length && y(0);
  }, [V, g]), ze(() => {
    const S = t.autocomplete, R = t.ajaxchain;
    if (!S && !R) return;
    const j = e.values[t.name];
    if (!j) return;
    const _ = Array.isArray(R) ? R : R ? [R] : [];
    (async () => {
      try {
        if (lc(S)) {
          const O = S.src;
          if (!O || !r) return;
          const z = qe(O.where ?? {}, {
            refid: j
          }), P = {
            ...O,
            table: O.table,
            cols: O.columns,
            where: z
          }, { data: U } = await kn(r, P, t?.queryid, void 0, o), re = Array.isArray(U?.data) ? U.data[0] : U?.data;
          re && S.target.split(",").map((ue) => ue.trim()).forEach((ue) => {
            re[ue] !== void 0 && e.setFieldValue(ue, re[ue]);
          });
        }
        for (const O of _) {
          const z = O.src;
          if (!O || typeof O != "object" || !z || typeof z != "object" || !r) continue;
          let P;
          if (!z.queryid) {
            if (!z.table || !z.columns)
              throw new Error("SQL query requires field.table");
            const Ka = qe(z?.where ?? {}, {
              refid: j
            });
            P = {
              ...z,
              table: z.table,
              cols: z.columns,
              where: Ka
            };
          }
          const { data: U } = await kn(r, P, z?.queryid, j, o);
          let re = t.valueKey ?? "value", ue = t.labelKey ?? "title";
          const We = Array.isArray(U?.data?.data) ? U.data.data : Array.isArray(U?.data) ? U.data : U, Wa = Array.isArray(We) ? We.map(At) : [], _a = Nt(
            re,
            ue,
            Wa,
            t.groupKey
          );
          l?.(O.target, _a);
        }
      } catch (O) {
        console.error("Autocomplete / AjaxChain fetch failed", O);
      }
    })();
  }, [e.values[t.name]]), ze(() => {
    if (!t.search || !h.trim() || !t.table || !r) return;
    const S = ac(t.columns ?? ""), R = new AbortController(), j = setTimeout(async () => {
      try {
        let _;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const We = s ? qe(t.where ?? {}, {
            refid: s
          }) : t.where;
          _ = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: We
          };
        }
        let J = {};
        Array.isArray(S) && S.forEach((We) => {
          J[We] = [h, "LIKE"];
        });
        let O = t.valueKey ?? "value", z = t.labelKey ?? "title";
        const { data: P } = await kn(r, _, t?.queryid, void 0, o, J), U = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, re = Array.isArray(U) ? U.map(At) : [], ue = Nt(
          O,
          z,
          re,
          t.groupKey
        );
        d(ue);
      } catch (_) {
        if (fe.isCancel(_)) return;
        console.error("Search fetch failed", _);
      }
    }, 500);
    return () => {
      clearTimeout(j), R.abort();
    };
  }, [h, s]);
  const X = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const R = await Pi(r, S), j = t.multiple ? R.map((_) => _.path) : R[0]?.path;
      e.setFieldValue(
        L,
        j
      ), Kt(j, t, o);
    } catch (R) {
      console.error("File upload failed", R), e.setFieldError(L, "File upload failed");
    }
  }, me = async (S, R, j) => {
    const _ = R[S];
    if (!_) return;
    const J = n?.[_];
    if (typeof J != "function") {
      console.error(`Method "${String(_)}" not found`);
      return;
    }
    try {
      await Promise.resolve(J(j));
    } catch (O) {
      console.error(`Method "${String(_)}" failed`, O);
    }
  }, He = (S) => {
    if (T) return;
    const R = S.target.value;
    p(R), y(0), R.trim() ? E(!0) : (E(!1), e.setFieldValue(L, ""));
  }, Et = (S) => {
    e.setFieldValue(L, S), Kt(S, t, o), p(""), E(!1), me("onChange", t, `${L}-${S}`);
  };
  function w(S) {
    const R = S.currentTarget.files;
    R && X(R);
  }
  return {
    setHighlightedIndex: y,
    executeFieldMethod: me,
    handleFileUpload: X,
    handleKeyDown: q,
    handleToggle: I,
    setSearch: p,
    setOpen: E,
    setIsFocused: c,
    handleInputChange: He,
    handleSelect: Et,
    handlePersist: Kt,
    handleFileChange: w,
    optionCount: ie,
    baseInputClasses: K,
    focusClasses: $,
    labelClasses: v,
    search: h,
    highlightedIndex: g,
    options: u,
    isDisabled: T,
    key: L,
    filteredOptions: V,
    open: k,
    listRef: b,
    inputRef: f,
    detailsRef: x,
    isFocused: a
  };
}
const mc = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ m.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ m.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ m.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ m.jsx("source", { src: t }) }) : /* @__PURE__ */ m.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ m.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ m.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function gc(t) {
  const e = Co[t] ?? Co.other;
  return /* @__PURE__ */ m.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const yc = ({ filePath: t, sqlOpsUrls: e }) => {
  const [n, r] = De(null), [s, o] = De(!1), i = dc(t), l = fc(i);
  ze(() => {
    if (!e || l !== "image" && !s) return;
    let c = !0, u = null;
    return Li(t, e).then((d) => {
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
          gc(l),
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
      n ? /* @__PURE__ */ m.jsx(mc, { fileUrl: n, category: l }) : /* @__PURE__ */ m.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Eo({
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
        onKeyDown: (k) => {
          e || s(k, !1);
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
                /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: o?.length > 0 ? o.map((k) => us(b, k) ?? k).join(", ") : `Select ${t.label}` }),
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
                onChange: (k) => {
                  e || (d(k.target.value), h(0));
                },
                placeholder: "Search...",
                className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
              }
            ) }),
            c.length > 0 ? c.map(([k, E], C) => /* @__PURE__ */ m.jsxs(
              "label",
              {
                htmlFor: `${x}-${k}`,
                className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${o?.includes(k) ? "bg-indigo-50 text-indigo-600 font-medium" : u === C ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      id: `${x}-${k}`,
                      type: "checkbox",
                      checked: o?.includes(k),
                      onChange: (T) => {
                        const I = T.target.checked ? [...o, k] : o?.filter((L) => L !== k);
                        f.setFieldValue(x, I), g(I, t, y), p("onChange", t, `${x}-${k}`);
                      },
                      onBlur: f.handleBlur,
                      disabled: e,
                      className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    }
                  ),
                  E
                ]
              },
              k
            )) : /* @__PURE__ */ m.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
          ] })
        ]
      }
    ),
    f.touched[x] && f.errors[x] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[x]) })
  ] });
}
function bc({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const [r, s] = De(null);
  return ze(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return Li(t, n).then((l) => {
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
function Di({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const o = Mt(null), i = async (l) => {
    const a = l.currentTarget.files;
    if (!(!a || a.length === 0))
      try {
        const c = await Pi(n, a), u = e.multiple ? c.map((d) => d.path) : c[0]?.path;
        t.setFieldValue(
          s,
          u
        ), Kt(u, e, r);
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
        children: t.values[s] ? /* @__PURE__ */ m.jsx(bc, { field_name: s, filePath: t.values[s], sqlOpsUrls: n }) : /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center h-full text-gray-400", children: /* @__PURE__ */ m.jsx("i", { className: "fa-solid fa-user" }) })
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
function $i(t, e, n) {
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
      let i = $i(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function Fi(t, e, n, r) {
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
      let c = Fi(i.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class N {
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
    return new N(s, this.size + e.size);
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
    return new N(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? N.empty : e == 0 && n == this.content.length ? this : new N(this.content.slice(e, n));
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
    return s[e] = n, new N(s, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new N([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new N(this.content.concat(e), this.size + e.nodeSize);
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
    return $i(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Fi(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Sn(0, e);
    if (e == this.size)
      return Sn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Sn(n + 1, o) : Sn(n, r);
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
      return N.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new N(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return N.empty;
    let n, r = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      r += o.nodeSize, s && o.isText && e[s - 1].sameMarkup(o) ? (n || (n = e.slice(0, s)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new N(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return N.empty;
    if (e instanceof N)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new N([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
N.empty = new N([], 0);
const Wr = { index: 0, offset: 0 };
function Sn(t, e) {
  return Wr.index = t, Wr.offset = e, Wr;
}
function Hn(t, e) {
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
      if (!Hn(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !Hn(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let Q = class ds {
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
    return this == e || this.type == e.type && Hn(this.attrs, e.attrs);
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
      return ds.none;
    if (e instanceof ds)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
Q.none = [];
class Wn extends Error {
}
class M {
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
    let r = Hi(this.content, e + this.openStart, n);
    return r && new M(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new M(Bi(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return M.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new M(N.fromJSON(e, n.content), r, s);
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
    return new M(e, r, s);
  }
}
M.empty = new M(N.empty, 0, 0);
function Bi(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Bi(o.content, e - s - 1, n - s - 1)));
}
function Hi(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = Hi(i.content, e - o - 1, n, i);
  return l && t.replaceChild(s, i.copy(l));
}
function xc(t, e, n) {
  if (n.openStart > t.depth)
    throw new Wn("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Wn("Inconsistent open depths");
  return Wi(t, e, n, 0);
}
function Wi(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = Wi(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return pt(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = wc(n, t);
      return pt(o, Ki(t, i, l, e, r));
    }
  else return pt(o, _n(t, e, r));
}
function _i(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Wn("Cannot join " + e.type.name + " onto " + t.type.name);
}
function fs(t, e, n) {
  let r = t.node(n);
  return _i(r, e.node(n)), r;
}
function ht(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Gt(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (ht(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    ht(s.child(l), r);
  e && e.depth == n && e.textOffset && ht(e.nodeBefore, r);
}
function pt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Ki(t, e, n, r, s) {
  let o = t.depth > s && fs(t, e, s + 1), i = r.depth > s && fs(n, r, s + 1), l = [];
  return Gt(null, t, s, l), o && i && e.index(s) == n.index(s) ? (_i(o, i), ht(pt(o, Ki(t, e, n, r, s + 1)), l)) : (o && ht(pt(o, _n(t, e, s + 1)), l), Gt(e, n, s, l), i && ht(pt(i, _n(n, r, s + 1)), l)), Gt(r, null, s, l), new N(l);
}
function _n(t, e, n) {
  let r = [];
  if (Gt(null, t, n, r), t.depth > n) {
    let s = fs(t, e, n + 1);
    ht(pt(s, _n(t, e, n + 1)), r);
  }
  return Gt(e, null, n, r), new N(r);
}
function wc(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(N.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class on {
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
        return new Kn(this, e, r);
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
    return new on(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = No.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      No.set(e, r = new vc());
    let s = r.elts[r.i] = on.resolve(e, n);
    return r.i = (r.i + 1) % kc, s;
  }
}
class vc {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const kc = 12, No = /* @__PURE__ */ new WeakMap();
class Kn {
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
const Sc = /* @__PURE__ */ Object.create(null);
class $e {
  /**
  @internal
  */
  constructor(e, n, r, s = Q.none) {
    this.type = e, this.attrs = n, this.marks = s, this.content = r || N.empty;
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
    return this.type == e && Hn(this.attrs, n || e.defaultAttrs || Sc) && Q.sameSet(this.marks, r || Q.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new $e(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new $e(this.type, this.attrs, this.content, e);
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
      return M.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new M(c, s.depth - i, o.depth - i);
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
    return xc(this.resolve(e), this.resolve(n), r);
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
    return on.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return on.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Vi(this.marks, e);
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
  canReplace(e, n, r = N.empty, s = 0, o = r.childCount) {
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
    let s = N.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, s, r);
    return o.type.checkAttrs(o.attrs), o;
  }
}
$e.prototype.text = void 0;
class Vn extends $e {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Vi(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new Vn(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Vn(this.type, this.attrs, e, this.marks);
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
function Vi(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class bt {
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
    let r = new Cc(e, n);
    if (r.next == null)
      return bt.empty;
    let s = Ui(r);
    r.next && r.err("Unexpected trailing text");
    let o = Oc(Rc(s));
    return jc(o, r), o;
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
        return N.from(l.map((c) => c.createAndFill()));
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
bt.empty = new bt(!0);
class Cc {
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
function Ui(t) {
  let e = [];
  do
    e.push(Ec(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Ec(t) {
  let e = [];
  do
    e.push(Nc(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Nc(t) {
  let e = Mc(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Ac(t, e);
    else
      break;
  return e;
}
function Ao(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Ac(t, e) {
  let n = Ao(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Ao(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Tc(t, e) {
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
function Mc(t) {
  if (t.eat("(")) {
    let e = Ui(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Tc(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Rc(t) {
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
function qi(t, e) {
  return e - t;
}
function To(t, e) {
  let n = [];
  return r(e), n.sort(qi);
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
function Oc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(To(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        To(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new bt(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(qi);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function jc(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Ji(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Gi(t, e) {
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
function Yi(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function Qi(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new zc(t, r, e[r]);
  return n;
}
let Mo = class Xi {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Qi(e, r.attrs), this.defaultAttrs = Ji(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == bt.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : Gi(this.attrs, e);
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
    return new $e(this, this.computeAttrs(e), N.from(n), Q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = N.from(n), this.checkContent(n), new $e(this, this.computeAttrs(e), n, Q.setFrom(r));
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
    if (e = this.computeAttrs(e), n = N.from(n), n.size) {
      let i = this.contentMatch.fillBefore(n);
      if (!i)
        return null;
      n = i.append(n);
    }
    let s = this.contentMatch.matchFragment(n), o = s && s.fillBefore(N.empty, !0);
    return o ? new $e(this, e, n.append(o), Q.setFrom(r)) : null;
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
    Yi(this.attrs, e, "node", this.name);
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
    e.forEach((o, i) => r[o] = new Xi(o, n, i));
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
function Ic(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class zc {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Ic(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Rr {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = Qi(e, s.attrs), this.excluded = null;
    let o = Ji(this.attrs);
    this.instance = o ? new Q(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Q(this, Gi(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new Rr(o, s++, n, i)), r;
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
    Yi(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Lc {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = le.from(e.nodes), n.marks = le.from(e.marks || {}), this.nodes = Mo.compile(this.spec.nodes, this), this.marks = Rr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = bt.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Ro(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : Ro(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => $e.fromJSON(this, s), this.markFromJSON = (s) => Q.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Mo) {
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
    return new Vn(r, r.defaultAttrs, e, Q.setFrom(n));
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
function Ro(t, e) {
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
function Pc(t) {
  return t.tag != null;
}
function Dc(t) {
  return t.style != null;
}
class mt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (Pc(s))
        this.tags.push(s);
      else if (Dc(s)) {
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
    let r = new jo(this, n, !1);
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
    let r = new jo(this, n, !0);
    return r.addAll(e, Q.none, n.from, n.to), M.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (Bc(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
        r(i = Io(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = Io(i)), i.node || i.ignore || i.mark || (i.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new mt(e, mt.schemaRules(e)));
  }
}
const Zi = {
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
}, $c = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, el = { ol: !0, ul: !0 }, ln = 1, hs = 2, Yt = 4;
function Oo(t, e, n) {
  return e != null ? (e ? ln : 0) | (e === "full" ? hs : 0) : t && t.whitespace == "pre" ? ln | hs : n & ~Yt;
}
class Cn {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = Q.none, this.match = o || (i & Yt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(N.from(e));
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
    if (!(this.options & ln)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - s[0].length));
      }
    }
    let n = N.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(N.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Zi.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class jo {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = Oo(null, n.preserveWhitespace, 0) | (r ? Yt : 0);
    s ? o = new Cn(s.type, s.attrs, Q.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new Cn(null, null, Q.none, !0, null, i) : o = new Cn(e.schema.topNodeType, null, Q.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, o = s.options & hs ? "full" : this.localPreserveWS || (s.options & ln) > 0, { schema: i } = this.parser;
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
    el.hasOwnProperty(i) && this.parser.normalizeLists && Fc(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : $c.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (Zi.hasOwnProperty(i))
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
        (o.type ? o.type.allowsMarkType(l.type) : zo(l.type, e.type)) && (i = l.addToSet(i));
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
    let l = Oo(e, o, i.options);
    i.options & Yt && i.content.length == 0 && (l |= Yt);
    let a = Q.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : zo(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Cn(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= ln);
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
function Fc(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && el.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Bc(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Io(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function zo(t, e) {
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
class Or {
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
    r || (r = _r(n).createDocumentFragment());
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
    let { dom: r, contentDOM: s } = Ln(_r(n), this.nodes[e.type.name](e), null, e.attrs);
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
    return s && Ln(_r(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return Ln(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Or(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Lo(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Lo(e.marks);
  }
}
function Lo(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function _r(t) {
  return t.document || window.document;
}
const Po = /* @__PURE__ */ new WeakMap();
function Hc(t) {
  let e = Po.get(t);
  return e === void 0 && Po.set(t, e = Wc(t)), e;
}
function Wc(t) {
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
function Ln(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Hc(r)) && o.indexOf(e) > -1)
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
      let { dom: h, contentDOM: p } = Ln(t, f, n, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const tl = 65535, nl = Math.pow(2, 16);
function _c(t, e) {
  return t + e * nl;
}
function Do(t) {
  return t & tl;
}
function Kc(t) {
  return (t - (t & tl)) / nl;
}
const rl = 1, sl = 2, Pn = 4, ol = 8;
class ps {
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
    return (this.delInfo & ol) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (rl | Pn)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (sl | Pn)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Pn) > 0;
  }
}
class we {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && we.empty)
      return we.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = Do(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Kc(e);
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
        let p = e == (n < 0 ? a : d) ? null : _c(l / 3, e - a), g = e == a ? sl : e == d ? rl : Pn;
        return (n < 0 ? e != a : e != d) && (g |= ol), new ps(h, g, p);
      }
      s += u - c;
    }
    return r ? e + s : new ps(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = Do(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
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
    return new we(this.ranges, !this.inverted);
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
    return e == 0 ? we.empty : new we(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
we.empty = new we([]);
class Un {
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
    return new Un(this._maps, this.mirror, e, n);
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
    let e = new Un();
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
    return r ? e : new ps(e, s, null);
  }
}
const Kr = /* @__PURE__ */ Object.create(null);
class pe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return we.empty;
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
    let r = Kr[n.stepType];
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
    if (e in Kr)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Kr[e] = n, n.prototype.jsonID = e, n;
  }
}
class ne {
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
    return new ne(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ne(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return ne.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof Wn)
        return ne.fail(o.message);
      throw o;
    }
  }
}
function Ds(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(Ds(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return N.fromArray(r);
}
class tt extends pe {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new M(Ds(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return ne.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Re(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new tt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof tt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new tt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new tt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
pe.jsonID("addMark", tt);
class Re extends pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new M(Ds(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return ne.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new tt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Re(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Re && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Re(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Re(n.from, n.to, e.markFromJSON(n.mark));
  }
}
pe.jsonID("removeMark", Re);
class nt extends pe {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ne.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ne.fromReplace(e, this.pos, this.pos + 1, new M(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new nt(this.pos, n.marks[s]);
        return new nt(this.pos, this.mark);
      }
    }
    return new xt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new nt(n.pos, this.mark);
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
    return new nt(n.pos, e.markFromJSON(n.mark));
  }
}
pe.jsonID("addNodeMark", nt);
class xt extends pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ne.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ne.fromReplace(e, this.pos, this.pos + 1, new M(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new nt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new xt(n.pos, this.mark);
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
    return new xt(n.pos, e.markFromJSON(n.mark));
  }
}
pe.jsonID("removeNodeMark", xt);
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
    return this.structure && ms(e, this.from, this.to) ? ne.fail("Structure replace would overwrite content") : ne.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new we([this.from, this.to - this.from, this.slice.size]);
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
      let n = this.slice.size + e.slice.size == 0 ? M.empty : new M(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new se(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? M.empty : new M(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
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
    return new se(n.from, n.to, M.fromJSON(e, n.slice), !!n.structure);
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
    if (this.structure && (ms(e, this.from, this.gapFrom) || ms(e, this.gapTo, this.to)))
      return ne.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ne.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? ne.fromReplace(e, this.from, this.to, r) : ne.fail("Content does not fit in gap");
  }
  getMap() {
    return new we([
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
    return new oe(n.from, n.to, n.gapFrom, n.gapTo, M.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
pe.jsonID("replaceAround", oe);
function ms(t, e, n) {
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
function Vc(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), p = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(p) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new Re(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new tt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function Uc(t, e, n, r) {
  let s = [], o = 0;
  t.doc.nodesBetween(e, n, (i, l) => {
    if (!i.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Rr) {
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
  }), s.forEach((i) => t.step(new Re(i.from, i.to, i.style)));
}
function $s(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new se(l, u, M.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Re(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new M(N.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new se(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(N.empty, !0);
    t.replace(l, l, new M(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function qc(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Ft(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !qc(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function Jc(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = N.empty, d = 0;
  for (let p = o, g = !1; p > n; p--)
    g || r.index(p) > 0 ? (g = !0, u = N.from(r.node(p).copy(u)), d++) : a--;
  let f = N.empty, h = 0;
  for (let p = o, g = !1; p > n; p--)
    g || s.after(p + 1) < s.end(p) ? (g = !0, f = N.from(s.node(p).copy(f)), h++) : c++;
  t.step(new oe(a, c, i, l, new M(u.append(f), d, h), u.size - d, !0));
}
function il(t, e, n = null, r = t) {
  let s = Gc(t, e), o = s && Yc(r, e);
  return o ? s.map($o).concat({ type: e, attrs: n }).concat(o.map($o)) : null;
}
function $o(t) {
  return { type: t, attrs: null };
}
function Gc(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function Yc(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function Qc(t, e, n) {
  let r = N.empty;
  for (let i = n.length - 1; i >= 0; i--) {
    if (r.size) {
      let l = n[i].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = N.from(n[i].type.create(n[i].attrs, r));
  }
  let s = e.start, o = e.end;
  t.step(new oe(s, o, s, o, new M(r, 0, 0), n.length, !0));
}
function Xc(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && Zc(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && al(t, i, l, o), $s(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new oe(d, f, d + 1, f - 1, new M(N.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && ll(t, i, l, o), !1;
    }
  });
}
function ll(t, e, n, r) {
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
function al(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let i = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(i, i + 1, e.type.schema.text(`
`));
    }
  });
}
function Zc(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function eu(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new oe(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new M(N.from(i), 0, 0), 1, !0));
}
function Je(t, e, n = 1, r) {
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
function tu(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = N.empty, i = N.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = N.from(s.node(l).copy(o));
    let u = r && r[c];
    i = N.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new se(e, e, new M(o.append(i), n, n), !0));
}
function kt(t, e) {
  let n = t.resolve(e), r = n.index();
  return cl(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function nu(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function cl(t, e) {
  return !!(t && e && !t.isLeaf && nu(t, e));
}
function jr(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, l = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), l++, i = r.node(s).maybeChild(l)) : (o = r.node(s).maybeChild(l - 1), i = r.node(s + 1)), o && !o.isTextblock && cl(o, i) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function ru(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, o = t.doc.resolve(e - n), i = o.node().type;
  if (s && i.inlineContent) {
    let u = i.whitespace == "pre", d = !!i.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    al(t, u.node(), u.before(), l);
  }
  i.inlineContent && $s(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new se(c, a.map(e + n, -1), M.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    ll(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function su(t, e, n) {
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
function ou(t, e, n) {
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
function Ir(t, e, n = e, r = M.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return ul(s, o, r) ? new se(e, n, r) : new iu(s, o, r).fit();
}
function ul(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class iu {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = N.empty;
    for (let s = 0; s <= e.depth; s++) {
      let o = e.node(s);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = N.from(e.node(s).copy(this.placed));
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
    let a = new M(o, i, l);
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
        r ? (o = Vr(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
        let i = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (n == 1 && (i ? c.matchType(i.type) || (d = c.fillBefore(N.from(i), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
          if (n == 2 && i && (u = c.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = Vr(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new M(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = Vr(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new M(Vt(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new M(Vt(e, n, 1), n, r);
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
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(dl(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Ut(this.placed, n, N.from(u)), this.frontier[n].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = p ? e == 0 ? M.empty : new M(Vt(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new M(Vt(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Ur(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = Ur(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = Ur(e, l, c, a, !0);
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
    n.fit.childCount && (this.placed = Ut(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = Ut(this.placed, this.depth, N.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(N.empty, !0);
    n.childCount && (this.placed = Ut(this.placed, this.frontier.length, n));
  }
}
function Vt(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Vt(t.firstChild.content, e - 1, n)));
}
function Ut(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Ut(t.lastChild.content, e - 1, n)));
}
function Vr(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function dl(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, dl(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(N.empty, !0)))), t.copy(r);
}
function Ur(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !lu(n, o.content, i) ? l : null;
}
function lu(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function au(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function cu(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (ul(s, o, r))
    return t.step(new se(e, n, r));
  let i = hl(s, o);
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
    let h = c[f], p = au(h.type);
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
        let x = s.node(y - 1), k = s.index(y - 1);
        if (x.canReplaceWith(k, k, p.type, p.marks))
          return t.replace(s.before(y), b ? o.after(y) : n, new M(fl(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function fl(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(fl(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(N.empty, !0));
  }
  return t;
}
function uu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = su(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new M(N.from(r), 0, 0));
}
function du(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), o = hl(r, s);
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
function hl(t, e) {
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
      return ne.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return ne.fromReplace(e, this.pos, this.pos + 1, new M(N.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return we.empty;
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
class an extends pe {
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
    return ne.ok(r);
  }
  getMap() {
    return we.empty;
  }
  invert(e) {
    return new an(this.attr, e.attrs[this.attr]);
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
    return new an(n.attr, n.value);
  }
}
pe.jsonID("docAttr", an);
let Lt = class extends Error {
};
Lt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Lt.prototype = Object.create(Error.prototype);
Lt.prototype.constructor = Lt;
Lt.prototype.name = "TransformError";
class pl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Un();
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
  replace(e, n = e, r = M.empty) {
    let s = Ir(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new M(N.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, M.empty);
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
    return cu(this, e, n, r), this;
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
    return uu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return du(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Jc(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return ru(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Qc(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return Xc(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return eu(this, e, n, r, s), this;
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
    return this.step(new an(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new nt(e, n)), this;
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
      n.isInSet(r.marks) && this.step(new xt(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new xt(e, o)), s = o.removeFromSet(s);
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
    return tu(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Vc(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Uc(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return $s(this, e, n, r), this;
  }
}
const qr = /* @__PURE__ */ Object.create(null);
class H {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new ml(e.min(n), e.max(n))];
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
  replace(e, n = M.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? M.empty : n), l == 0 && Ho(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), Ho(e, r, n.isInline ? -1 : 1));
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new ke(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Rt(e, e, 0, 0, 1) || new ke(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Rt(e, e, e.content.size, e.childCount, -1) || new ke(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = qr[n.type];
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
    if (e in qr)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return qr[e] = n, n.prototype.jsonID = e, n;
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
H.prototype.visible = !0;
class ml {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Fo = !1;
function Bo(t) {
  !Fo && !t.parent.inlineContent && (Fo = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class F extends H {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Bo(e), Bo(n), super(e, n);
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
      return H.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new F(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = M.empty) {
    if (super.replace(e, n), n == M.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof F && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new zr(this.anchor, this.head);
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
      let o = H.findFrom(n, r, !0) || H.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return H.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (H.findFrom(e, -r, !0) || H.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new F(e, n);
  }
}
H.jsonID("text", F);
class zr {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new zr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return F.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class D extends H {
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
    return r ? H.near(o) : new D(o);
  }
  content() {
    return new M(N.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof D && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Fs(this.anchor);
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
H.jsonID("node", D);
class Fs {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new zr(r, r) : new Fs(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && D.isSelectable(r) ? new D(n) : H.near(n);
  }
}
class ke extends H {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = M.empty) {
    if (n == M.empty) {
      e.delete(0, e.doc.content.size);
      let r = H.atStart(e.doc);
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
    return new ke(e);
  }
  map(e) {
    return new ke(e);
  }
  eq(e) {
    return e instanceof ke;
  }
  getBookmark() {
    return fu;
  }
}
H.jsonID("all", ke);
const fu = {
  map() {
    return this;
  },
  resolve(t) {
    return new ke(t);
  }
};
function Rt(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return F.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && D.isSelectable(l))
        return D.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = Rt(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function Ho(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof se || s instanceof oe))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(H.near(t.doc.resolve(i), n));
}
function Wo(t, e) {
  return !e || !t ? t : t.bind(e);
}
class En {
  constructor(e, n, r) {
    this.name = e, this.init = Wo(n.init, r), this.apply = Wo(n.apply, r);
  }
}
new En("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new En("selection", {
  init(t, e) {
    return t.selection || H.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new En("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new En("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function gl(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = gl(s, e, {})), n[r] = s;
  }
  return n;
}
class Ce {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && gl(e.props, this, this.props), this.key = e.key ? e.key.key : yl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Jr = /* @__PURE__ */ Object.create(null);
function yl(t) {
  return t in Jr ? t + "$" + ++Jr[t] : (Jr[t] = 0, t + "$");
}
class xe {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = yl(e);
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
const Bs = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function bl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const xl = (t, e, n) => {
  let r = bl(t, n);
  if (!r)
    return !1;
  let s = Hs(r);
  if (!s) {
    let i = r.blockRange(), l = i && Ft(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Tl(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Pt(o, "end") || D.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = Ir(t.doc, r.before(i), r.after(i), M.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(Pt(o, "end") ? H.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : D.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, hu = (t, e, n) => {
  let r = bl(t, n);
  if (!r)
    return !1;
  let s = Hs(r);
  return s ? wl(t, s, e) : !1;
}, pu = (t, e, n) => {
  let r = kl(t, n);
  if (!r)
    return !1;
  let s = Ws(r);
  return s ? wl(t, s, e) : !1;
};
function wl(t, e, n) {
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
  let c = Ir(t.doc, o, a, M.empty);
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
const vl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Hs(r);
  }
  let i = o && o.nodeBefore;
  return !i || !D.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(D.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Hs(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function kl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Sl = (t, e, n) => {
  let r = kl(t, n);
  if (!r)
    return !1;
  let s = Ws(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Tl(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Pt(o, "start") || D.isSelectable(o))) {
    let i = Ir(t.doc, r.before(), r.after(), M.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(Pt(o, "start") ? H.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : D.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Cl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Ws(r);
  }
  let i = o && o.nodeAfter;
  return !i || !D.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(D.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Ws(t) {
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
const mu = (t, e) => {
  let n = t.selection, r = n instanceof D, s;
  if (r) {
    if (n.node.isTextblock || !kt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = jr(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(D.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, gu = (t, e) => {
  let n = t.selection, r;
  if (n instanceof D) {
    if (n.node.isTextblock || !kt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = jr(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, yu = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && Ft(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, El = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function _s(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const bu = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = _s(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(H.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Nl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof ke || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = _s(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(F.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Al = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Je(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && Ft(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function xu(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof D && e.selection.node.isBlock)
      return !r.parentOffset || !Je(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = _s(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof F || e.selection instanceof ke) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = Je(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = Je(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), p = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const wu = xu(), vu = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(D.create(t.doc, s))), !0);
};
function ku(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || kt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Tl(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && ku(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = N.empty;
      for (let b = i.length - 1; b >= 0; b--)
        p = N.from(i[b].create(null, p));
      p = N.from(s.copy(p));
      let g = t.tr.step(new oe(e.pos - 1, h, e.pos, h, new M(p, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && kt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : H.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && Ft(d);
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
        let b = N.empty;
        for (let k = p.length - 1; k >= 0; k--)
          b = N.from(p[k].copy(b));
        let x = t.tr.step(new oe(e.pos - p.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new M(b, p.length, 0), 0, !0));
        n(x.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Ml(t) {
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
const Su = Ml(-1), Cu = Ml(1);
function Eu(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && il(i, t, e);
    return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
  };
}
function _o(t, e = null) {
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
function Ks(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Ks(Bs, xl, vl);
Ks(Bs, Sl, Cl);
Ks(El, Nl, Al, wu);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Nu(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return Au(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Au(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new Kn(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Kn(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = il(o, n, r, e);
  return l ? (t && Tu(t, e, l, s, n), !0) : !1;
}
function Tu(t, e, n, r, s) {
  let o = N.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = N.from(n[u].type.create(n[u].attrs, o));
  t.step(new oe(e.start - (r ? 2 : 0), e.end, e.start, e.end, new M(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && Je(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function Mu(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? Ru(e, n, t, o) : Ou(e, n, o) : !0 : !1;
  };
}
function Ru(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new oe(o - 1, i, o, i, new M(N.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Kn(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = Ft(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return kt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function Ou(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, p = n.endIndex - 1, g = n.startIndex; p > g; p--)
    h -= s.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? N.empty : N.from(s))))
    return !1;
  let d = o.pos, f = d + i.nodeSize;
  return r.step(new oe(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new M((l ? N.empty : N.from(s.copy(N.empty))).append(a ? N.empty : N.from(s.copy(N.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function ju(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = N.from(c ? t.create() : null), d = new M(N.from(t.create(null, N.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new oe(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const St = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Rl = function(t, e, n, r) {
  return n && (Ko(t, e, n, r, -1) || Ko(t, e, n, r, 1));
}, Iu = /^(img|br|input|textarea|hr)$/i;
function Ko(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : qn(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || Vs(t) || Iu.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = St(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? qn(t) : 0;
    } else
      return !1;
  }
}
function qn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function zu(t, e, n) {
  for (let r = e == 0, s = e == qn(t); r || s; ) {
    if (t == n)
      return !0;
    let o = St(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == qn(t);
  }
}
function Vs(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Ol = function(t) {
  return t.focusNode && Rl(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function jl(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const Fe = typeof navigator < "u" ? navigator : null, Vo = typeof document < "u" ? document : null, lt = Fe && Fe.userAgent || "", gs = /Edge\/(\d+)/.exec(lt), Il = /MSIE \d/.exec(lt), ys = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(lt), yn = !!(Il || ys || gs), zl = Il ? document.documentMode : ys ? +ys[1] : gs ? +gs[1] : 0, Lr = !yn && /gecko\/(\d+)/i.test(lt);
Lr && +(/Firefox\/(\d+)/.exec(lt) || [0, 0])[1];
const bs = !yn && /Chrome\/(\d+)/.exec(lt), Ge = !!bs, Ll = bs ? +bs[1] : 0, Ct = !yn && !!Fe && /Apple Computer/.test(Fe.vendor), Us = Ct && (/Mobile\/\w+/.test(lt) || !!Fe && Fe.maxTouchPoints > 2), Ae = Us || (Fe ? /Mac/.test(Fe.platform) : !1), Pl = Fe ? /Win/.test(Fe.platform) : !1, bn = /Android \d/.test(lt), qs = !!Vo && "webkitFontSmoothing" in Vo.documentElement.style, Lu = qs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Pu(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), o = s && s.size == 0, i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (Ol(n)) {
    for (a = i; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && D.isSelectable(d) && s.parent && !(d.isInline && zu(n.focusNode, n.focusOffset, s.dom))) {
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
    c = $l(t, u, l, d);
  }
  return c;
}
function Dl(t) {
  return t.editable ? t.hasFocus() : Bu(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Js(t, e = !1) {
  let n = t.state.selection;
  if (Fu(t, n), !!Dl(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Ge) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && Rl(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      $u(t);
    else {
      let { anchor: r, head: s } = n, o, i;
      Uo && !(n instanceof F) && (n.$from.parent.inlineContent || (o = qo(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = qo(t, n.to))), t.docView.setSelection(r, s, t, e), Uo && (o && Jo(o), i && Jo(i)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Du(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const Uo = Ct || Ge && Ll < 63;
function qo(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Ct && s && s.contentEditable == "false")
    return Gr(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return Gr(s);
    if (o)
      return Gr(o);
  }
}
function Gr(t) {
  return t.contentEditable = "true", Ct && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Jo(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function Du(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Dl(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function $u(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, St(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && yn && zl <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Fu(t, e) {
  if (e instanceof D) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Go(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Go(t);
}
function Go(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function $l(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || F.between(e, n, r);
}
function Bu(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function xs(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && H.findFrom(o, e);
}
function Qe(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Yo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof F)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Qe(t, new F(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = xs(t.state, e);
        return s && s instanceof D ? Qe(t, s) : !1;
      } else if (!(Ae && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? D.isSelectable(o) ? Qe(t, new D(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : qs ? Qe(t, new F(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof D && r.node.isInline)
      return Qe(t, new F(e > 0 ? r.$to : r.$from));
    {
      let s = xs(t.state, e);
      return s ? Qe(t, s) : !1;
    }
  }
}
function Jn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Qt(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Tt(t, e) {
  return e < 0 ? Hu(t) : Wu(t);
}
function Hu(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for (Lr && n.nodeType == 1 && r < Jn(n) && Qt(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (Qt(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Fl(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && Qt(l, -1); )
          s = n.parentNode, o = St(l), l = l.previousSibling;
        if (l)
          n = l, r = Jn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? ws(t, n, r) : s && ws(t, s, o);
}
function Wu(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = Jn(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (Qt(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (Fl(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && Qt(l, 1); )
          o = l.parentNode, i = St(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = Jn(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && ws(t, o, i);
}
function Fl(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function _u(t, e) {
  for (; t && e == t.childNodes.length && !Vs(t); )
    e = St(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Ku(t, e) {
  for (; t && !e && !Vs(t); )
    e = St(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function ws(t, e, n) {
  if (e.nodeType != 3) {
    let o, i;
    (i = _u(e, n)) ? (e = i, n = 0) : (o = Ku(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Ol(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Js(t);
  }, 50);
}
function Qo(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Ge || Pl) && n.parent.inlineContent) {
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
function Xo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof F && !r.empty || n.indexOf("s") > -1 || Ae && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = xs(t.state, e);
    if (i && i instanceof D)
      return Qe(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof ke ? H.near(i, e) : H.findFrom(i, e);
    return l ? Qe(t, l) : !1;
  }
  return !1;
}
function Zo(t, e) {
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
function ei(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Vu(t) {
  if (!Ct || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    ei(t, r, "true"), setTimeout(() => ei(t, r, "false"), 20);
  }
  return !1;
}
function Uu(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function qu(t, e) {
  let n = e.keyCode, r = Uu(e);
  if (n == 8 || Ae && n == 72 && r == "c")
    return Zo(t, -1) || Tt(t, -1);
  if (n == 46 && !e.shiftKey || Ae && n == 68 && r == "c")
    return Zo(t, 1) || Tt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ae && n == 66 && r == "c") {
    let s = n == 37 ? Qo(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Yo(t, s, r) || Tt(t, s);
  } else if (n == 39 || Ae && n == 70 && r == "c") {
    let s = n == 39 ? Qo(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Yo(t, s, r) || Tt(t, s);
  } else {
    if (n == 38 || Ae && n == 80 && r == "c")
      return Xo(t, -1, r) || Tt(t, -1);
    if (n == 40 || Ae && n == 78 && r == "c")
      return Vu(t) || Xo(t, 1, r) || Tt(t, 1);
    if (r == (Ae ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Bl(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || Or.fromSchema(t.state.schema), l = Ul(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Vl[c.nodeName.toLowerCase()]); ) {
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
function Hl(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new M(N.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, p = Or.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = i.appendChild(document.createElement("p"));
        g && y.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = Qu(n), qs && Xu(i);
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
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || mt.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Ju.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Zu(ti(l, +u[1], +u[2]), u[4]);
  else if (l = M.maxOpen(Gu(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = ti(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Ju = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Gu(t, e) {
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
      if (c = i.length && o.length && _l(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = Kl(i[i.length - 1], o.length));
        let u = Wl(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return N.from(i);
  }
  return t;
}
function Wl(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, N.from(t));
  return t;
}
function _l(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = _l(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(N.from(Wl(n, t, s + 1))));
  }
}
function Kl(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Kl(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(N.empty, !0);
  return t.copy(n.append(r));
}
function vs(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = vs(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(N.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function ti(t, e, n) {
  return e < t.openStart && (t = new M(vs(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new M(vs(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Vl = {
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
let ni = null;
function Ul() {
  return ni || (ni = document.implementation.createHTMLDocument("title"));
}
let Yr = null;
function Yu(t) {
  let e = window.trustedTypes;
  return e ? (Yr || (Yr = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Yr.createHTML(t)) : t;
}
function Qu(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Ul().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && Vl[r[1].toLowerCase()]) && (t = s.map((o) => "<" + o + ">").join("") + t + s.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = Yu(t), s)
    for (let o = 0; o < s.length; o++)
      n = n.querySelector(s[o]) || n;
  return n;
}
function Xu(t) {
  let e = t.querySelectorAll(Ge ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function Zu(t, e) {
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
    s = N.from(a.create(r[l + 1], s)), o++, i++;
  }
  return new M(s, o, i);
}
const Oe = {}, Se = {};
function rt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Se.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Jl(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(bn && Ge && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Us && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, jl(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || qu(t, n) ? n.preventDefault() : rt(t, "key");
};
Se.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Se.keypress = (t, e) => {
  let n = e;
  if (Jl(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Ae && n.metaKey)
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
function Pr(t) {
  return { left: t.clientX, top: t.clientY };
}
function ed(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Gs(t, e, n, r, s) {
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
function td(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && D.isSelectable(r) ? (zt(t, new D(n)), !0) : !1;
}
function nd(t, e) {
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
  return s != null ? (zt(t, D.create(t.state.doc, s)), !0) : !1;
}
function rd(t, e, n, r, s) {
  return Gs(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? nd(t, n) : td(t, n));
}
function sd(t, e, n, r) {
  return Gs(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function od(t, e, n, r) {
  return Gs(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || id(t, n, r);
}
function id(t, e, n) {
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
    else if (D.isSelectable(i))
      zt(t, D.create(r, l));
    else
      continue;
    return !0;
  }
}
function Ys(t) {
  return Gn(t);
}
const ql = Ae ? "metaKey" : "ctrlKey";
Oe.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Ys(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && ed(n, t.input.lastClick) && !n[ql] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let i = t.posAtCoords(Pr(n));
  i && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new ld(t, i, n, !!r)) : (o == "doubleClick" ? sd : od)(t, i.pos, i.inside, n) ? n.preventDefault() : rt(t, "pointer"));
};
class ld {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[ql], this.allowDefault = r.shiftKey;
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
      setUneditable: !!(this.target && Lr && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), rt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Js(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Pr(e))), this.updateAllowDefault(e), this.allowDefault || !n ? rt(this.view, "pointer") : rd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ct && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Ge && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (zt(this.view, H.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : rt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), rt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Oe.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Ys(t), rt(t, "pointer");
};
Oe.touchmove = (t) => {
  t.input.lastTouch = Date.now(), rt(t, "pointer");
};
Oe.contextmenu = (t) => Ys(t);
function Jl(t, e) {
  return t.composing ? !0 : Ct && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const ad = bn ? 5e3 : -1;
Se.compositionstart = Se.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof F && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || Ge && Pl && cd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Gn(t, !0), t.markCursor = null;
    else if (Gn(t, !e.selection.empty), Lr && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  Gl(t, ad);
};
function cd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Se.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Gl(t, 20));
};
function Gl(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Gn(t), e));
}
function ud(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = dd()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function dd() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Gn(t, e = !1) {
  if (!(bn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), ud(t), e || t.docView && t.docView.dirty) {
      let n = Pu(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function fd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const cn = yn && zl < 15 || Us && Lu < 604;
Oe.copy = Se.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = cn ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = Bl(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : fd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function hd(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function pd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? ks(t, r.value, null, s, e) : ks(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function ks(t, e, n, r, s) {
  let o = Hl(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || M.empty)))
    return !0;
  if (!o)
    return !1;
  let i = hd(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Yl(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Se.paste = (t, e) => {
  let n = e;
  if (t.composing && !bn)
    return;
  let r = cn ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && ks(t, Yl(r), r.getData("text/html"), s, n) ? n.preventDefault() : pd(t, n);
};
class md {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const gd = Ae ? "altKey" : "ctrlKey";
function Ql(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[gd];
}
Oe.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords(Pr(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof D ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = D.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = D.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = Bl(t, l);
  (!n.dataTransfer.files.length || !Ge || Ll > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(cn ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", cn || n.dataTransfer.setData("text/plain", c), t.dragging = new md(u, Ql(t, n), i);
};
Oe.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Se.dragover = Se.dragenter = (t, e) => e.preventDefault();
Se.drop = (t, e) => {
  try {
    yd(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function yd(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(Pr(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = Hl(t, Yl(e.dataTransfer), cn ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && Ql(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || M.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? ou(t.state.doc, s.pos, o) : s.pos;
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
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, g, y, b) => h = b), a.setSelection($l(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Oe.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Js(t);
  }, 20));
};
Oe.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Oe.beforeinput = (t, e) => {
  if (Ge && bn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, jl(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Se)
  Oe[t] = Se[t];
function un(t, e) {
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
class Yn {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || gt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new Te(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Yn && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && un(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class st {
  constructor(e, n) {
    this.attrs = e, this.spec = n || gt;
  }
  map(e, n, r, s) {
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new Te(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof st && un(this.attrs, e.attrs) && un(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof st;
  }
  destroy() {
  }
}
class Qs {
  constructor(e, n) {
    this.attrs = e, this.spec = n || gt;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new Te(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Qs && un(this.attrs, e.attrs) && un(this.spec, e.spec);
  }
  destroy() {
  }
}
class Te {
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
    return new Te(e, n, this.type);
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
    return new Te(e, e, new Yn(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new Te(e, n, new st(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new Te(e, n, new Qs(r, s));
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
    return this.type instanceof st;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Yn;
  }
}
const Ot = [], gt = {};
class te {
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
    return n.length ? Qn(n, e, 0, gt) : ge;
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
    return this == ge || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || gt);
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
    return this.children.length ? bd(this.children, i || [], e, n, r, s, o) : i ? new te(i.sort(yt), Ot) : ge;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == ge ? te.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Zl(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, Qn(u, l, c + 1, gt)), o += 3;
      }
    });
    let i = Xl(o ? ea(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new te(i.length ? this.local.concat(i).sort(yt) : this.local, s || this.children);
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
    return r == this.children && s == this.local ? this : s.length || r.length ? new te(s, r) : ge;
  }
  forChild(e, n) {
    if (this == ge)
      return this;
    if (n.isLeaf)
      return te.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof st) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new te(s.sort(yt), Ot);
      return r ? new ut([l, r]) : l;
    }
    return r || ge;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof te) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return Xs(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ge)
      return Ot;
    if (e.inlineContent || !this.local.some(st.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof st || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
te.empty = new te([], []);
te.removeOverlap = Xs;
const ge = te.empty;
class ut {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, gt));
    return ut.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return te.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].forChild(e, n);
      o != ge && (o instanceof ut ? r = r.concat(o.members) : r.push(o));
    }
    return ut.from(r);
  }
  eq(e) {
    if (!(e instanceof ut) || e.members.length != this.members.length)
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
    return n ? Xs(r ? n : n.sort(yt)) : Ot;
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
        return new ut(e.every((n) => n instanceof te) ? e : e.reduce((n, r) => n.concat(r instanceof te ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function bd(t, e, n, r, s, o, i) {
  let l = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, p, g) => {
      let y = g - p - (h - f);
      for (let b = 0; b < l.length; b += 3) {
        let x = l[b + 1];
        if (x < 0 || f > x + u - d)
          continue;
        let k = l[b] + u - d;
        h >= k ? l[b + 1] = f <= k ? -2 : -1 : f >= u && y && (l[b] += y, l[b + 1] += y);
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
    let c = xd(l, t, e, n, s, o, i), u = Qn(c, r, 0, i);
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
  return new te(e.sort(yt), l);
}
function Xl(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new Te(s.from + e, s.to + e, s.type));
  }
  return n;
}
function xd(t, e, n, r, s, o, i) {
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
function Zl(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function ea(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Qn(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = Zl(t, l, a + n);
    if (c) {
      o = !0;
      let u = Qn(c, l, n + a + 1, r);
      u != ge && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = Xl(o ? ea(t) : t, -n).sort(yt);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new te(i, s) : ge;
}
function yt(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Xs(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let o = e[s];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[s] = o.copy(o.from, r.to), ri(e, s + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), ri(e, s, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function ri(t, e, n) {
  for (; e < t.length && yt(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var ot = {
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
}, Xn = {
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
}, wd = typeof navigator < "u" && /Mac/.test(navigator.platform), vd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ae = 0; ae < 10; ae++) ot[48 + ae] = ot[96 + ae] = String(ae);
for (var ae = 1; ae <= 24; ae++) ot[ae + 111] = "F" + ae;
for (var ae = 65; ae <= 90; ae++)
  ot[ae] = String.fromCharCode(ae + 32), Xn[ae] = String.fromCharCode(ae);
for (var Qr in ot) Xn.hasOwnProperty(Qr) || (Xn[Qr] = ot[Qr]);
function kd(t) {
  var e = wd && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || vd && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Xn : ot)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Sd = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Cd = typeof navigator < "u" && /Win/.test(navigator.platform);
function Ed(t) {
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
      Sd ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Nd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[Ed(n)] = t[n];
  return e;
}
function Xr(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function Ad(t) {
  let e = Nd(t);
  return function(n, r) {
    let s = kd(r), o, i = e[Xr(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[Xr(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Cd && r.ctrlKey && r.altKey) && (o = ot[r.keyCode]) && o != s) {
        let l = e[Xr(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var Td = Object.defineProperty, Zs = (t, e) => {
  for (var n in e)
    Td(t, n, { get: e[n], enumerable: !0 });
};
function ta(t) {
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
var Md = class {
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
      state: ta({
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
}, na = {};
Zs(na, {
  blur: () => Rd,
  clearContent: () => Od,
  clearNodes: () => jd,
  command: () => Id,
  createParagraphNear: () => zd,
  cut: () => Ld,
  deleteCurrentNode: () => Pd,
  deleteNode: () => Dd,
  deleteRange: () => $d,
  deleteSelection: () => Fd,
  enter: () => Bd,
  exitCode: () => Hd,
  extendMarkRange: () => _d,
  first: () => Kd,
  focus: () => qd,
  forEach: () => Jd,
  insertContent: () => Gd,
  insertContentAt: () => Xd,
  joinBackward: () => tf,
  joinDown: () => ef,
  joinForward: () => nf,
  joinItemBackward: () => rf,
  joinItemForward: () => sf,
  joinTextblockBackward: () => of,
  joinTextblockForward: () => lf,
  joinUp: () => Zd,
  keyboardShortcut: () => cf,
  lift: () => uf,
  liftEmptyBlock: () => df,
  liftListItem: () => ff,
  newlineInCode: () => hf,
  resetAttributes: () => pf,
  scrollIntoView: () => mf,
  selectAll: () => gf,
  selectNodeBackward: () => yf,
  selectNodeForward: () => bf,
  selectParentNode: () => xf,
  selectTextblockEnd: () => wf,
  selectTextblockStart: () => vf,
  setContent: () => Sf,
  setMark: () => Lf,
  setMeta: () => Pf,
  setNode: () => Df,
  setNodeSelection: () => $f,
  setTextDirection: () => Ff,
  setTextSelection: () => Bf,
  sinkListItem: () => Hf,
  splitBlock: () => Wf,
  splitListItem: () => _f,
  toggleList: () => Kf,
  toggleMark: () => Vf,
  toggleNode: () => Uf,
  toggleWrap: () => qf,
  undoInputRule: () => Jf,
  unsetAllMarks: () => Gf,
  unsetMark: () => Yf,
  unsetTextDirection: () => Qf,
  updateAttributes: () => Xf,
  wrapIn: () => Zf,
  wrapInList: () => eh
});
var Rd = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), Od = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), jd = () => ({ state: t, tr: e, dispatch: n }) => {
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
}, Id = (t) => (e) => t(e), zd = () => ({ state: t, dispatch: e }) => Nl(t, e), Ld = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new F(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Pd = () => ({ tr: t, dispatch: e }) => {
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
var Dd = (t) => ({ tr: e, state: n, dispatch: r }) => {
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
}, $d = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Fd = () => ({ state: t, dispatch: e }) => Bs(t, e), Bd = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Hd = () => ({ state: t, dispatch: e }) => bu(t, e);
function Wd(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Zn(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : Wd(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function ra(t, e, n = {}) {
  return t.find((r) => r.type === e && Zn(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function si(t, e, n = {}) {
  return !!ra(t, e, n);
}
function eo(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !ra([...s.node.marks], e, n)))
    return;
  let i = s.index, l = t.start() + s.offset, a = i + 1, c = l + s.node.nodeSize;
  for (; i > 0 && si([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, l -= t.parent.child(i).nodeSize;
  for (; a < t.parent.childCount && si([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function at(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var _d = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = at(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = eo(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = F.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Kd = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function sa(t) {
  return t instanceof F;
}
function dt(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Vd(t, e = null) {
  if (!e)
    return null;
  const n = H.atStart(t), r = H.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? F.create(t, dt(0, s, o), dt(t.content.size, s, o)) : F.create(t, dt(e, s, o), dt(e, s, o));
}
function oi() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function er() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Ud() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var qd = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (er() || oi()) && r.dom.focus(), Ud() && !er() && !oi() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !sa(n.state.selection))
    return i(), !0;
  const l = Vd(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Jd = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), Gd = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), oa = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && oa(r);
  }
  return t;
};
function Nn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return oa(n);
}
function dn(t, e, n) {
  if (t instanceof $e || t instanceof N)
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
        return N.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), dn("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, l = "";
      const a = new Lc({
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
      if (n.slice ? mt.fromSchema(a).parseSlice(Nn(t), n.parseOptions) : mt.fromSchema(a).parse(Nn(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = mt.fromSchema(e);
    return n.slice ? o.parseSlice(Nn(t), n.parseOptions).content : o.parse(Nn(t), n.parseOptions);
  }
  return dn("", e, n);
}
function Yd(t, e, n) {
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
  }), t.setSelection(H.near(t.doc.resolve(i), n));
}
var Qd = (t) => !("type" in t), Xd = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
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
        dn(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = dn(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Qd(l) ? l : [l]).forEach((y) => {
      y.check(), f = f ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), u === d && h) {
      const { parent: y } = r.doc.resolve(u);
      y.isTextblock && !y.type.spec.code && !y.childCount && (u -= 1, d += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof N) {
        let y = "";
        e.forEach((b) => {
          b.text && (y += b.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else {
      g = l;
      const y = r.doc.resolve(u), b = y.node(), x = y.parentOffset === 0, k = b.isText || b.isTextblock, E = b.content.size > 0;
      x && k && E && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && Yd(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Zd = () => ({ state: t, dispatch: e }) => mu(t, e), ef = () => ({ state: t, dispatch: e }) => gu(t, e), tf = () => ({ state: t, dispatch: e }) => xl(t, e), nf = () => ({ state: t, dispatch: e }) => Sl(t, e), rf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = jr(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, sf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = jr(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, of = () => ({ state: t, dispatch: e }) => hu(t, e), lf = () => ({ state: t, dispatch: e }) => pu(t, e);
function ia() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function af(t) {
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
      er() || ia() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var cf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = af(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
function to(t, e, n = {}) {
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
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => Zn(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var uf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return to(n, s, e) ? yu(n, r) : !1;
}, df = () => ({ state: t, dispatch: e }) => Al(t, e), ff = (t) => ({ state: e, dispatch: n }) => {
  const r = ce(t, e.schema);
  return Mu(r)(e, n);
}, hf = () => ({ state: t, dispatch: e }) => El(t, e);
function no(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function ii(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var pf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = no(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ce(t, r.schema)), l === "mark" && (i = at(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, ii(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, i.create(ii(f.attrs, e))));
      });
    });
  }), a;
}, mf = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), gf = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ke(t.doc);
    t.setSelection(n);
  }
  return !0;
}, yf = () => ({ state: t, dispatch: e }) => vl(t, e), bf = () => ({ state: t, dispatch: e }) => Cl(t, e), xf = () => ({ state: t, dispatch: e }) => vu(t, e), wf = () => ({ state: t, dispatch: e }) => Cu(t, e), vf = () => ({ state: t, dispatch: e }) => Su(t, e);
function kf(t, e, n = {}, r = {}) {
  return dn(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Sf = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = kf(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function la(t, e) {
  const n = at(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function aa(t, e) {
  const n = new pl(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function Cf(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Ef(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (s, o) => {
    n(s) && r.push({
      node: s,
      pos: o
    });
  }), r;
}
function ca(t, e) {
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
function ro(t) {
  return (e) => ca(e.$from, t);
}
function Dt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? Dt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? Dt(t.parent, e, n) : null
  }) : t.config[e];
}
function Nf(t) {
  return typeof t == "function";
}
function $t(t, e = void 0, ...n) {
  return Nf(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function ua(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function it(...t) {
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
function Af(t, e, n) {
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
function Tf(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function Mf(t, e) {
  const n = ce(e, t.schema), { from: r, to: s } = t.selection, o = [];
  t.doc.nodesBetween(r, s, (l) => {
    o.push(l);
  });
  const i = o.reverse().find((l) => l.type.name === n.name);
  return i ? { ...i.attrs } : {};
}
function Rf(t, e) {
  const n = no(
    typeof e == "string" ? e : e.name,
    t.schema
  );
  return n === "node" ? Mf(t, e) : n === "mark" ? la(t, e) : {};
}
function Of(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function jf(t) {
  const e = Of(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function da(t) {
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
  }), jf(r);
}
function fa(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((s) => {
    const o = n.resolve(t), i = eo(o, s.type);
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
function Dn(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function If(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? at(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Zn(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    t.doc.nodesBetween(h, p, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const b = Math.max(h, y), x = Math.min(p, y + g.nodeSize), k = x - b;
      i += k, l.push(
        ...g.marks.map((E) => ({
          mark: E,
          from: b,
          to: x
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Zn(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function li(t, e) {
  const { nodeExtensions: n } = ua(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = $t(Dt(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function ha(t, {
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
      s !== !1 && (ha(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function zf(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (sa(s) && (o = s.$cursor), o) {
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
var Lf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = at(t, r.schema);
  if (s)
    if (i) {
      const c = la(r, a);
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
  return zf(r, n, a);
}, Pf = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Df = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = ce(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => _o(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => _o(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, $f = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = dt(t, 0, r.content.size), o = D.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, Ff = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Bf = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = F.atStart(r).from, l = F.atEnd(r).to, a = dt(s, i, l), c = dt(o, i, l), u = F.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Hf = (t) => ({ state: e, dispatch: n }) => {
  const r = ce(t, e.schema);
  return ju(r)(e, n);
};
function ai(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Wf = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = Dn(c, l.node().type.name, l.node().attrs);
  if (o instanceof D && o.node.isBlock)
    return !l.parentOffset || !Je(i, l.pos) ? !1 : (r && (t && ai(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : Cf(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Je(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Je(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof F && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && ai(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, _f = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
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
      let b = N.empty;
      const x = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let L = a.depth - x; L >= a.depth - 3; L -= 1)
        b = N.from(a.node(L).copy(b));
      const k = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), E = {
        ...Dn(f, a.node().type.name, a.node().attrs),
        ...e
      }, C = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(E)) || void 0;
      b = b.append(N.from(l.createAndFill(null, C) || void 0));
      const T = a.before(a.depth - (x - 1));
      n.replace(T, a.after(-k), new M(b, 4 - x, 0));
      let I = -1;
      n.doc.nodesBetween(T, n.doc.content.size, (L, K) => {
        if (I > -1)
          return !1;
        L.isTextblock && L.content.size === 0 && (I = K + 1);
      }), I > -1 && n.setSelection(F.near(n.doc.resolve(I))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...Dn(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...Dn(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: p },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: p }];
  if (!Je(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: x } = r, { splittableMarks: k } = o.extensionManager, E = x || b.$to.parentOffset && b.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !E || !s)
      return !0;
    const C = E.filter((T) => k.includes(T.type.name));
    n.ensureMarks(C);
  }
  return !0;
}, Zr = (t, e) => {
  const n = ro((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && kt(t.doc, n.pos) && t.join(n.pos), !0;
}, es = (t, e) => {
  const n = ro((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && kt(t.doc, r) && t.join(r), !0;
}, Kf = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = ce(t, i.schema), p = ce(e, i.schema), { selection: g, storedMarks: y } = i, { $from: b, $to: x } = g, k = b.blockRange(x), E = y || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const C = ro((T) => li(T.type.name, d))(g);
  if (k.depth >= 1 && C && k.depth - C.depth <= 1) {
    if (C.node.type === h)
      return c.liftListItem(p);
    if (li(C.node.type.name, d) && h.validContent(C.node.content) && l)
      return a().command(() => (o.setNodeMarkup(C.pos, h), !0)).command(() => Zr(o, h)).command(() => es(o, h)).run();
  }
  return !n || !E || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Zr(o, h)).command(() => es(o, h)).run() : a().command(() => {
    const T = u().wrapInList(h, r), I = E.filter((L) => f.includes(L.type.name));
    return o.ensureMarks(I), T ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Zr(o, h)).command(() => es(o, h)).run();
}, Vf = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = at(t, r.schema);
  return If(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, Uf = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = ce(t, r.schema), i = ce(e, r.schema), l = to(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, qf = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = ce(t, n.schema);
  return to(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Jf = () => ({ state: t, dispatch: e }) => {
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
}, Gf = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Yf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = at(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((y) => y.type === a)) == null ? void 0 : o.attrs, g = eo(c, a, p);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Qf = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Xf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = no(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ce(t, r.schema)), l === "mark" && (i = at(t, r.schema));
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
          const k = Math.max(b, u), E = Math.min(b + y.nodeSize, d);
          n.addMark(
            k,
            E,
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
}, Zf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return Eu(s, e)(n, r);
}, eh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ce(t, n.schema);
  return Nu(s, e)(n, r);
}, th = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function nh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function An(t) {
  return nh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function pa(t, e) {
  const n = { ...t };
  return An(t) && An(e) && Object.keys(e).forEach((r) => {
    An(e[r]) && An(t[r]) ? n[r] = pa(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var so = class {
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
      addOptions: () => pa(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, ma = class ga extends so {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new ga(n);
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
}, rh = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, sh = {};
Zs(sh, {
  ClipboardTextSerializer: () => oh,
  Commands: () => ih,
  Delete: () => lh,
  Drop: () => ah,
  Editable: () => ch,
  FocusEvents: () => uh,
  Keymap: () => dh,
  Paste: () => fh,
  Tabindex: () => hh,
  TextDirection: () => ph,
  focusEventsPluginKey: () => ba
});
var je = class ya extends so {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new ya(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, oh = je.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ce({
        key: new xe("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = Tf(n);
            return Af(r, { from: i, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), ih = je.create({
  name: "commands",
  addCommands() {
    return {
      ...na
    };
  }
}), lh = je.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = aa(t.before, [t, ...e]);
      da(u).forEach((h) => {
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
        if (h instanceof Re) {
          const b = f.slice(p).map(h.from, -1), x = f.slice(p).map(h.to), k = f.invert().map(b, -1), E = f.invert().map(x), C = (g = u.doc.nodeAt(b - 1)) == null ? void 0 : g.marks.some((I) => I.eq(h.mark)), T = (y = u.doc.nodeAt(x)) == null ? void 0 : y.marks.some((I) => I.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: k,
              to: E
            },
            newRange: {
              from: b,
              to: x
            },
            partial: !!(T || C),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), ah = je.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Ce({
        key: new xe("tiptapDrop"),
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
}), ch = je.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Ce({
        key: new xe("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), ba = new xe("focusEvents"), uh = je.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new Ce({
        key: ba,
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
}), dh = je.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = p.parent.type.spec.isolating, y = d.pos - d.parentOffset, b = g && p.parent.childCount === 1 ? y === d.pos : H.atStart(c).from === f;
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
    return er() || ia() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Ce({
        key: new xe("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: l } = e.selection, a = H.atStart(e.doc).from, c = H.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !ha(n.doc))
            return;
          const f = n.tr, h = ta({
            state: n,
            transaction: f
          }), { commands: p } = new Md({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), fh = je.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Ce({
        key: new xe("tiptapPaste"),
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
}), hh = je.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Ce({
        key: new xe("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), ph = je.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = ua(this.extensions);
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
      new Ce({
        key: new xe("textDirection"),
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
function mh(t) {
  return new th({
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
var gh = (t) => "touches" in t, yh = class {
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, gh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, bh = {};
Zs(bh, {
  createAtomBlockMarkdownSpec: () => xh,
  createBlockMarkdownSpec: () => wh,
  createInlineMarkdownSpec: () => Sh,
  parseAttributes: () => oo,
  parseIndentedBlocks: () => Ch,
  renderNestedMarkdownContent: () => Eh,
  serializeAttributes: () => io
});
function oo(t) {
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
function io(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function xh(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = oo,
    serializeAttributes: s = io,
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
function wh(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = oo,
    serializeAttributes: o = io,
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
        const [b, x = ""] = y, k = s(x);
        let E = 1;
        const C = b.length;
        let T = "";
        const I = /^:::([\w-]*)(\s.*)?/gm, L = d.slice(C);
        for (I.lastIndex = 0; ; ) {
          const K = I.exec(L);
          if (K === null)
            break;
          const $ = K.index, v = K[1];
          if (!((p = K[2]) != null && p.endsWith(":::"))) {
            if (v)
              E += 1;
            else if (E -= 1, E === 0) {
              const B = L.slice(0, $);
              T = B.trim();
              const ie = d.slice(0, C + $ + K[0].length);
              let V = [];
              if (T)
                if (l === "block")
                  for (V = h.blockTokens(B), V.forEach((q) => {
                    q.text && (!q.tokens || q.tokens.length === 0) && (q.tokens = h.inlineTokens(q.text));
                  }); V.length > 0; ) {
                    const q = V[V.length - 1];
                    if (q.type === "paragraph" && (!q.text || q.text.trim() === ""))
                      V.pop();
                    else
                      break;
                  }
                else
                  V = h.inlineTokens(T);
              return {
                type: e,
                raw: ie,
                attributes: k,
                content: T,
                tokens: V
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
function vh(t) {
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
function kh(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function Sh(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = vh,
    serializeAttributes: o = kh,
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
          const [, E] = y;
          x = E;
        } else {
          const [, E, C] = y;
          x = E, b = C || "";
        }
        const k = s(x.trim());
        return {
          type: e,
          raw: y[0],
          content: b.trim(),
          attributes: k
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
function Ch(t, e, n) {
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
      const C = l[u];
      if (C.trim() === "") {
        const I = l.slice(u + 1).findIndex(($) => $.trim() !== "");
        if (I === -1)
          break;
        if ((((s = (r = l[u + 1 + I].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          b.push(C), c = `${c}${C}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = C.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        b.push(C), c = `${c}${C}
`, u += 1;
      else
        break;
    }
    let x;
    const k = b.slice(1);
    if (k.length > 0) {
      const C = k.map((T) => T.slice(g + d)).join(`
`);
      C.trim() && (e.customNestedParser ? x = e.customNestedParser(C) : x = n.blockTokens(C));
    }
    const E = e.createToken(p, x);
    a.push(E);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function Eh(t, e, n, r) {
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
var xn = class xa extends so {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new xa(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function Nh(t) {
  return new rh({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: s }) => {
      const o = $t(t.getAttributes, void 0, r, s);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = e, l = r[r.length - 1], a = r[0];
      let c = n.to;
      if (l) {
        const u = a.search(/\S/), d = n.from + a.indexOf(l), f = d + l.length;
        if (fa(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === t.type && y !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < n.to && i.delete(f, n.to), d > n.from && i.delete(n.from + u, d), c = n.from + u + l.length, i.addMark(n.from + u, c, t.type.create(o || {})), i.removeStoredMark(t.type);
      }
    }
  });
}
var Ah = ma.create({
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
    return ["u", it(this.options.HTMLAttributes, t), 0];
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
}), Th = Ah;
const Mh = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Rh = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ss = "numeric", Cs = "ascii", Es = "alpha", Xt = "asciinumeric", qt = "alphanumeric", Ns = "domain", wa = "emoji", Oh = "scheme", jh = "slashscheme", ts = "whitespace";
function Ih(t, e) {
  return t in e || (e[t] = []), e[t];
}
function ft(t, e, n) {
  e[Ss] && (e[Xt] = !0, e[qt] = !0), e[Cs] && (e[Xt] = !0, e[Es] = !0), e[Xt] && (e[qt] = !0), e[Es] && (e[qt] = !0), e[qt] && (e[Ns] = !0), e[wa] && (e[Ns] = !0);
  for (const r in e) {
    const s = Ih(r, n);
    s.indexOf(t) < 0 && s.push(t);
  }
}
function zh(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function ye(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
ye.groups = {};
ye.prototype = {
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
    r = r || ye.groups;
    let s;
    return e && e.j ? s = e : (s = new ye(e), n && r && ft(e, n, r)), this.jr.push([t, s]), s;
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
    r = r || ye.groups;
    const s = this;
    if (e && e.j)
      return s.j[t] = e, e;
    const o = e;
    let i, l = s.go(t);
    if (l ? (i = new ye(), Object.assign(i.j, l.j), i.jr.push.apply(i.jr, l.jr), i.jd = l.jd, i.t = l.t) : i = new ye(), o) {
      if (r)
        if (i.t && typeof i.t == "string") {
          const a = Object.assign(zh(i.t, r), n);
          ft(o, a, r);
        } else n && ft(o, n, r);
      i.t = o;
    }
    return s.j[t] = i, i;
  }
};
const W = (t, e, n, r, s) => t.ta(e, n, r, s), Z = (t, e, n, r, s) => t.tr(e, n, r, s), ci = (t, e, n, r, s) => t.ts(e, n, r, s), A = (t, e, n, r, s) => t.tt(e, n, r, s), Ve = "WORD", As = "UWORD", va = "ASCIINUMERICAL", ka = "ALPHANUMERICAL", fn = "LOCALHOST", Ts = "TLD", Ms = "UTLD", $n = "SCHEME", jt = "SLASH_SCHEME", lo = "NUM", Rs = "WS", ao = "NL", Zt = "OPENBRACE", en = "CLOSEBRACE", tr = "OPENBRACKET", nr = "CLOSEBRACKET", rr = "OPENPAREN", sr = "CLOSEPAREN", or = "OPENANGLEBRACKET", ir = "CLOSEANGLEBRACKET", lr = "FULLWIDTHLEFTPAREN", ar = "FULLWIDTHRIGHTPAREN", cr = "LEFTCORNERBRACKET", ur = "RIGHTCORNERBRACKET", dr = "LEFTWHITECORNERBRACKET", fr = "RIGHTWHITECORNERBRACKET", hr = "FULLWIDTHLESSTHAN", pr = "FULLWIDTHGREATERTHAN", mr = "AMPERSAND", gr = "APOSTROPHE", yr = "ASTERISK", Xe = "AT", br = "BACKSLASH", xr = "BACKTICK", wr = "CARET", Ze = "COLON", co = "COMMA", vr = "DOLLAR", Le = "DOT", kr = "EQUALS", uo = "EXCLAMATION", Ne = "HYPHEN", tn = "PERCENT", Sr = "PIPE", Cr = "PLUS", Er = "POUND", nn = "QUERY", fo = "QUOTE", Sa = "FULLWIDTHMIDDLEDOT", ho = "SEMI", Pe = "SLASH", rn = "TILDE", Nr = "UNDERSCORE", Ca = "EMOJI", Ar = "SYM";
var Ea = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: ka,
  AMPERSAND: mr,
  APOSTROPHE: gr,
  ASCIINUMERICAL: va,
  ASTERISK: yr,
  AT: Xe,
  BACKSLASH: br,
  BACKTICK: xr,
  CARET: wr,
  CLOSEANGLEBRACKET: ir,
  CLOSEBRACE: en,
  CLOSEBRACKET: nr,
  CLOSEPAREN: sr,
  COLON: Ze,
  COMMA: co,
  DOLLAR: vr,
  DOT: Le,
  EMOJI: Ca,
  EQUALS: kr,
  EXCLAMATION: uo,
  FULLWIDTHGREATERTHAN: pr,
  FULLWIDTHLEFTPAREN: lr,
  FULLWIDTHLESSTHAN: hr,
  FULLWIDTHMIDDLEDOT: Sa,
  FULLWIDTHRIGHTPAREN: ar,
  HYPHEN: Ne,
  LEFTCORNERBRACKET: cr,
  LEFTWHITECORNERBRACKET: dr,
  LOCALHOST: fn,
  NL: ao,
  NUM: lo,
  OPENANGLEBRACKET: or,
  OPENBRACE: Zt,
  OPENBRACKET: tr,
  OPENPAREN: rr,
  PERCENT: tn,
  PIPE: Sr,
  PLUS: Cr,
  POUND: Er,
  QUERY: nn,
  QUOTE: fo,
  RIGHTCORNERBRACKET: ur,
  RIGHTWHITECORNERBRACKET: fr,
  SCHEME: $n,
  SEMI: ho,
  SLASH: Pe,
  SLASH_SCHEME: jt,
  SYM: Ar,
  TILDE: rn,
  TLD: Ts,
  UNDERSCORE: Nr,
  UTLD: Ms,
  UWORD: As,
  WORD: Ve,
  WS: Rs
});
const _e = /[a-z]/, Wt = new RegExp("\\p{L}", "u"), ns = new RegExp("\\p{Emoji}", "u"), Ke = /\d/, rs = /\s/, ui = "\r", ss = `
`, Lh = "️", Ph = "‍", is = "￼";
let Tn = null, Mn = null;
function Dh(t = []) {
  const e = {};
  ye.groups = e;
  const n = new ye();
  Tn == null && (Tn = di(Mh)), Mn == null && (Mn = di(Rh)), A(n, "'", gr), A(n, "{", Zt), A(n, "}", en), A(n, "[", tr), A(n, "]", nr), A(n, "(", rr), A(n, ")", sr), A(n, "<", or), A(n, ">", ir), A(n, "（", lr), A(n, "）", ar), A(n, "「", cr), A(n, "」", ur), A(n, "『", dr), A(n, "』", fr), A(n, "＜", hr), A(n, "＞", pr), A(n, "&", mr), A(n, "*", yr), A(n, "@", Xe), A(n, "`", xr), A(n, "^", wr), A(n, ":", Ze), A(n, ",", co), A(n, "$", vr), A(n, ".", Le), A(n, "=", kr), A(n, "!", uo), A(n, "-", Ne), A(n, "%", tn), A(n, "|", Sr), A(n, "+", Cr), A(n, "#", Er), A(n, "?", nn), A(n, '"', fo), A(n, "/", Pe), A(n, ";", ho), A(n, "~", rn), A(n, "_", Nr), A(n, "\\", br), A(n, "・", Sa);
  const r = Z(n, Ke, lo, {
    [Ss]: !0
  });
  Z(r, Ke, r);
  const s = Z(r, _e, va, {
    [Xt]: !0
  }), o = Z(r, Wt, ka, {
    [qt]: !0
  }), i = Z(n, _e, Ve, {
    [Cs]: !0
  });
  Z(i, Ke, s), Z(i, _e, i), Z(s, Ke, s), Z(s, _e, s);
  const l = Z(n, Wt, As, {
    [Es]: !0
  });
  Z(l, _e), Z(l, Ke, o), Z(l, Wt, l), Z(o, Ke, o), Z(o, _e), Z(o, Wt, o);
  const a = A(n, ss, ao, {
    [ts]: !0
  }), c = A(n, ui, Rs, {
    [ts]: !0
  }), u = Z(n, rs, Rs, {
    [ts]: !0
  });
  A(n, is, u), A(c, ss, a), A(c, is, u), Z(c, rs, u), A(u, ui), A(u, ss), Z(u, rs, u), A(u, is, u);
  const d = Z(n, ns, Ca, {
    [wa]: !0
  });
  A(d, "#"), Z(d, ns, d), A(d, Lh, d);
  const f = A(d, Ph);
  A(f, "#"), Z(f, ns, d);
  const h = [[_e, i], [Ke, s]], p = [[_e, null], [Wt, l], [Ke, o]];
  for (let g = 0; g < Tn.length; g++)
    Ye(n, Tn[g], Ts, Ve, h);
  for (let g = 0; g < Mn.length; g++)
    Ye(n, Mn[g], Ms, As, p);
  ft(Ts, {
    tld: !0,
    ascii: !0
  }, e), ft(Ms, {
    utld: !0,
    alpha: !0
  }, e), Ye(n, "file", $n, Ve, h), Ye(n, "mailto", $n, Ve, h), Ye(n, "http", jt, Ve, h), Ye(n, "https", jt, Ve, h), Ye(n, "ftp", jt, Ve, h), Ye(n, "ftps", jt, Ve, h), ft($n, {
    scheme: !0,
    ascii: !0
  }, e), ft(jt, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((g, y) => g[0] > y[0] ? 1 : -1);
  for (let g = 0; g < t.length; g++) {
    const y = t[g][0], x = t[g][1] ? {
      [Oh]: !0
    } : {
      [jh]: !0
    };
    y.indexOf("-") >= 0 ? x[Ns] = !0 : _e.test(y) ? Ke.test(y) ? x[Xt] = !0 : x[Cs] = !0 : x[Ss] = !0, ci(n, y, y, x);
  }
  return ci(n, "localhost", fn, {
    ascii: !0
  }), n.jd = new ye(Ar), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, Ea)
  };
}
function Na(t, e) {
  const n = $h(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, s = [];
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
function $h(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let s = t.charCodeAt(r), o, i = s < 55296 || s > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(i), r += i.length;
  }
  return e;
}
function Ye(t, e, n, r, s) {
  let o;
  const i = e.length;
  for (let l = 0; l < i - 1; l++) {
    const a = e[l];
    t.j[a] ? o = t.j[a] : (o = new ye(r), o.jr = s.slice(), t.j[a] = o), t = o;
  }
  return o = new ye(n), o.jr = s.slice(), t.j[e[i - 1]] = o, o;
}
function di(t) {
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
const hn = {
  defaultProtocol: "http",
  events: null,
  format: fi,
  formatHref: fi,
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
function po(t, e = null) {
  let n = Object.assign({}, hn);
  t && (n = Object.assign(n, t instanceof po ? t.o : t));
  const r = n.ignoreTags, s = [];
  for (let o = 0; o < r.length; o++)
    s.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = s;
}
po.prototype = {
  o: hn,
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
    return s && (typeof s == "object" ? (s = n.t in s ? s[n.t] : hn[t], typeof s == "function" && r && (s = s(e, n))) : typeof s == "function" && r && (s = s(e, n.t, n)), s);
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
function fi(t) {
  return t;
}
function Aa(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
Aa.prototype = {
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
  toObject(t = hn.defaultProtocol) {
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
function Dr(t, e) {
  class n extends Aa {
    constructor(s, o) {
      super(s, o), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const hi = Dr("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), pi = Dr("text"), Fh = Dr("nl"), Rn = Dr("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = hn.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== fn && t[1].t === Ze;
  }
}), Ee = (t) => new ye(t);
function Bh({
  groups: t
}) {
  const e = t.domain.concat([mr, yr, Xe, br, xr, wr, vr, kr, Ne, lo, tn, Sr, Cr, Er, Pe, Ar, rn, Nr]), n = [gr, Ze, co, Le, uo, tn, nn, fo, ho, or, ir, Zt, en, nr, tr, rr, sr, lr, ar, cr, ur, dr, fr, hr, pr], r = [mr, gr, yr, br, xr, wr, vr, kr, Ne, Zt, en, tn, Sr, Cr, Er, nn, Pe, Ar, rn, Nr], s = Ee(), o = A(s, rn);
  W(o, r, o), W(o, t.domain, o);
  const i = Ee(), l = Ee(), a = Ee();
  W(s, t.domain, i), W(s, t.scheme, l), W(s, t.slashscheme, a), W(i, r, o), W(i, t.domain, i);
  const c = A(i, Xe);
  A(o, Xe, c), A(l, Xe, c), A(a, Xe, c);
  const u = A(o, Le);
  W(u, r, o), W(u, t.domain, o);
  const d = Ee();
  W(c, t.domain, d), W(d, t.domain, d);
  const f = A(d, Le);
  W(f, t.domain, d);
  const h = Ee(hi);
  W(f, t.tld, h), W(f, t.utld, h), A(c, fn, h);
  const p = A(d, Ne);
  A(p, Ne, p), W(p, t.domain, d), W(h, t.domain, d), A(h, Le, f), A(h, Ne, p);
  const g = A(h, Ze);
  W(g, t.numeric, hi);
  const y = A(i, Ne), b = A(i, Le);
  A(y, Ne, y), W(y, t.domain, i), W(b, r, o), W(b, t.domain, i);
  const x = Ee(Rn);
  W(b, t.tld, x), W(b, t.utld, x), W(x, t.domain, i), W(x, r, o), A(x, Le, b), A(x, Ne, y), A(x, Xe, c);
  const k = A(x, Ze), E = Ee(Rn);
  W(k, t.numeric, E);
  const C = Ee(Rn), T = Ee();
  W(C, e, C), W(C, n, T), W(T, e, C), W(T, n, T), A(x, Pe, C), A(E, Pe, C);
  const I = A(l, Ze), L = A(a, Ze), K = A(L, Pe), $ = A(K, Pe);
  W(l, t.domain, i), A(l, Le, b), A(l, Ne, y), W(a, t.domain, i), A(a, Le, b), A(a, Ne, y), W(I, t.domain, C), A(I, Pe, C), A(I, nn, C), W($, t.domain, C), W($, e, C), A($, Pe, C);
  const v = [
    [Zt, en],
    // {}
    [tr, nr],
    // []
    [rr, sr],
    // ()
    [or, ir],
    // <>
    [lr, ar],
    // （）
    [cr, ur],
    // 「」
    [dr, fr],
    // 『』
    [hr, pr]
    // ＜＞
  ];
  for (let B = 0; B < v.length; B++) {
    const [ie, V] = v[B], q = A(C, ie);
    A(T, ie, q), A(q, V, C);
    const X = Ee(Rn);
    W(q, e, X);
    const me = Ee();
    W(q, n), W(X, e, X), W(X, n, me), W(me, e, X), W(me, n, me), A(X, V, C), A(me, V, C);
  }
  return A(s, fn, x), A(s, ao, Fh), {
    start: s,
    tokens: Ea
  };
}
function Hh(t, e, n) {
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
      i.length > 0 && (o.push(ls(pi, e, i)), i = []), s -= f, u -= f;
      const h = d.t, p = n.slice(s - u, s);
      o.push(ls(h, e, p));
    }
  }
  return i.length > 0 && o.push(ls(pi, e, i)), o;
}
function ls(t, e, n) {
  const r = n[0].s, s = n[n.length - 1].e, o = e.slice(r, s);
  return new t(o, n);
}
const Wh = typeof console < "u" && console && console.warn || (() => {
}), _h = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", Y = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Kh() {
  return ye.groups = {}, Y.scanner = null, Y.parser = null, Y.tokenQueue = [], Y.pluginQueue = [], Y.customSchemes = [], Y.initialized = !1, Y;
}
function mi(t, e = !1) {
  if (Y.initialized && Wh(`linkifyjs: already initialized - will not register custom scheme "${t}" ${_h}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  Y.customSchemes.push([t, e]);
}
function Vh() {
  Y.scanner = Dh(Y.customSchemes);
  for (let t = 0; t < Y.tokenQueue.length; t++)
    Y.tokenQueue[t][1]({
      scanner: Y.scanner
    });
  Y.parser = Bh(Y.scanner.tokens);
  for (let t = 0; t < Y.pluginQueue.length; t++)
    Y.pluginQueue[t][1]({
      scanner: Y.scanner,
      parser: Y.parser
    });
  return Y.initialized = !0, Y;
}
function mo(t) {
  return Y.initialized || Vh(), Hh(Y.parser.start, t, Na(Y.scanner.start, t));
}
mo.scan = Na;
function Ta(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new po(n), s = mo(t), o = [];
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
var go = "[\0-   ᠎ -\u2029 　]", Uh = new RegExp(go), qh = new RegExp(`${go}$`), Jh = new RegExp(go, "g");
function Gh(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function Yh(t) {
  return new Ce({
    key: new xe("autolink"),
    appendTransaction: (e, n, r) => {
      const s = e.some((c) => c.docChanged) && !n.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!s || o)
        return;
      const { tr: i } = r, l = aa(n.doc, [...e]);
      if (da(l).forEach(({ newRange: c }) => {
        const u = Ef(r.doc, c, (h) => h.isTextblock);
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
          if (!qh.test(h))
            return;
          d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ");
        }
        if (d && f) {
          const h = f.split(Uh).filter(Boolean);
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], g = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const y = mo(p).map((b) => b.toObject(t.defaultProtocol));
          if (!Gh(y))
            return !1;
          y.filter((b) => b.isLink).map((b) => ({
            ...b,
            from: g + b.start + 1,
            to: g + b.end + 1
          })).filter((b) => r.schema.marks.code ? !r.doc.rangeHasMark(b.from, b.to, r.schema.marks.code) : !0).filter((b) => t.validate(b.value)).filter((b) => t.shouldAutoLink(b.value)).forEach((b) => {
            fa(b.from, b.to, r.doc).some((x) => x.mark.type === t.type) || i.addMark(
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
function Qh(t) {
  return new Ce({
    key: new xe("handleClickLink"),
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
          const a = Rf(e.state, t.type.name), c = (s = i.href) != null ? s : a.href, u = (o = i.target) != null ? o : a.target;
          c && (window.open(c, u), l = !0);
        }
        return l;
      }
    }
  });
}
function Xh(t) {
  return new Ce({
    key: new xe("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { shouldAutoLink: s } = t, { state: o } = e, { selection: i } = o, { empty: l } = i;
        if (l)
          return !1;
        let a = "";
        r.content.forEach((u) => {
          a += u.textContent;
        });
        const c = Ta(a, { defaultProtocol: t.defaultProtocol }).find(
          (u) => u.isLink && u.value === a
        );
        return !a || !c || s !== void 0 && !s(c.value) ? !1 : t.editor.commands.setMark(t.type, {
          href: c.href
        });
      }
    }
  });
}
function ct(t, e) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const s = typeof r == "string" ? r : r.scheme;
    s && n.push(s);
  }), !t || t.replace(Jh, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var Zh = ma.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        mi(t);
        return;
      }
      mi(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    Kh();
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
      isAllowedUri: (t, e) => !!ct(t, e.protocols),
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
            defaultValidate: (n) => !!ct(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!ct(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", it(this.options.HTMLAttributes, t), 0] : ["a", it(this.options.HTMLAttributes, { ...t, href: "" }), 0];
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
          defaultValidate: (r) => !!ct(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!ct(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Nh({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options, s = Ta(t).filter(
              (o) => o.isLink && this.options.isAllowedUri(o.value, {
                defaultValidate: (i) => !!ct(i, n),
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
      Yh({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (s) => !!ct(s, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t.push(
      Qh({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t.push(
      Xh({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t;
  }
}), ep = Zh, tp = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, np = xn.create({
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
    return ["img", it(this.options.HTMLAttributes, t)];
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
      const c = new yh({
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
      mh({
        find: tp,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), rp = np;
let Os, js;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  Os = (e) => t.get(e), js = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  Os = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, js = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
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
    return Os(t) || js(t, sp(t));
  }
};
function sp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = op(t), n = t.childCount, r = [];
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
      for (let k = 0; k < b; k++) {
        if (k + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - k
          });
          break;
        }
        const E = s + k * e;
        for (let C = 0; C < y; C++) {
          r[E + C] == 0 ? r[E + C] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - C
          });
          const T = x && x[C];
          if (T) {
            const I = (E + C) % e * 2, L = i[I];
            L == null || L != T && i[I + 1] == 1 ? (i[I] = T, i[I + 1] = 1) : L == T && i[I + 1]++;
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
  return a && ip(l, i, t), l;
}
function op(t) {
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
function ip(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = lp(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function lp(t) {
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
const et = new xe("selectingCells");
function wt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function ap(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function Ie(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function $r(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = wt(e.$head) || cp(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function cp(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function Is(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function up(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function yo(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Ma(t, e, n) {
  const r = t.node(-1), s = ee.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function vt(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Ra(t, e, n = 1) {
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
function dp(t, e, n) {
  const r = he(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var G = class Ue extends H {
  constructor(e, n = e) {
    const r = e.node(-1), s = ee.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new ml(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (Is(r) && Is(s) && yo(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Ue.rowSelection(r, s) : o && this.isColSelection() ? Ue.colSelection(r, s) : new Ue(r, s);
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
          if (g > 0 && (b = vt(b, 0, g)), y > 0 && (b = vt(b, b.colspan - y, y)), h.left < s.left) {
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
      i.push(e.child(a).copy(N.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new M(N.from(l), 1, 1);
  }
  replace(e, n = M.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? M.empty : n);
    }
    const o = H.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new M(N.from(n), 0, 0));
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
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new Ue(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ee.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof Ue && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = ee.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new Ue(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new Ue(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new Ue(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new fp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
G.prototype.visible = !1;
H.jsonID("cell", G);
var fp = class Oa {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Oa(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && yo(n, r) ? new G(n, r) : H.near(r, 1);
  }
};
function hp(t) {
  if (!(t.selection instanceof G)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(Te.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), te.create(t.doc, e);
}
function pp({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function mp({ $from: t, $to: e }) {
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
function gp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof D && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = G.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = G.rowSelection(l, l);
    } else if (!n) {
      const l = ee.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = G.create(s, a + 1, c);
    }
  } else r instanceof F && pp(r) ? o = F.create(s, r.from) : r instanceof F && mp(r) && (o = F.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const yp = new xe("fix-tables");
function ja(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? ja(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function Ia(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = bp(t, s, o, n));
  };
  return e ? e.doc != t.doc && ja(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function bp(t, e, n, r) {
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
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, vt(d, d.colspan - c.n, c.n));
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
  return r.setMeta(yp, { fixTables: !0 });
}
function Be(t) {
  const e = t.selection, n = $r(t), r = n.node(-1), s = n.start(-1), o = ee.get(r);
  return {
    ...e instanceof G ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function za(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  dp(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Ra(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? he(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function xp(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t);
    e(za(t.tr, n, n.left));
  }
  return !0;
}
function wp(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t);
    e(za(t.tr, n, n.right));
  }
  return !0;
}
function vp(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, vt(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function kp(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; vp(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ee.get(o);
    }
    e(r);
  }
  return !0;
}
function Sp(t, e, n) {
  var r;
  const s = he(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function La(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  Sp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
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
function Cp(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t);
    e(La(t.tr, n, n.top));
  }
  return !0;
}
function Ep(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t);
    e(La(t.tr, n, n.bottom));
  }
  return !0;
}
function Np(t, { map: e, table: n, tableStart: r }, s) {
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
function Ap(t, e) {
  if (!Ie(t)) return !1;
  if (e) {
    const n = Be(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Np(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ee.get(n.table);
    }
    e(r);
  }
  return !0;
}
function gi(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Tp({ width: t, height: e, map: n }, r) {
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
function yi(t, e) {
  const n = t.selection;
  if (!(n instanceof G) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = Be(t), { map: s } = r;
  if (Tp(s, r)) return !1;
  if (e) {
    const o = t.tr, i = {};
    let l = N.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(i[f] || !h))
        if (i[f] = !0, a == null)
          a = f, c = h;
        else {
          gi(h) || (l = l.append(h.content));
          const p = o.mapping.map(f + r.tableStart);
          o.delete(p, p + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Ra(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = gi(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new G(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function bi(t, e) {
  const n = he(t.schema);
  return Mp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Mp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof G) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = ap(r.$from), !s) return !1;
      o = (i = wt(r.$from)) === null || i === void 0 ? void 0 : i.pos;
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
      const u = Be(e), d = e.tr;
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
function Rp(t, e) {
  return function(n, r) {
    if (!Ie(n)) return !1;
    const s = $r(n);
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
function Op(t) {
  return function(e, n) {
    if (!Ie(e)) return !1;
    if (n) {
      const r = he(e.schema), s = Be(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
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
function xi(t, e, n) {
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
function pn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Op(t) : function(n, r) {
    if (!Ie(n)) return !1;
    if (r) {
      const s = he(n.schema), o = Be(n), i = n.tr, l = xi("row", o, s), a = xi("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
pn("row", { useDeprecatedLogic: !0 });
pn("column", { useDeprecatedLogic: !0 });
const jp = pn("cell", { useDeprecatedLogic: !0 });
function Ip(t, e) {
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
function wi(t) {
  return function(e, n) {
    if (!Ie(e)) return !1;
    const r = Ip($r(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(F.between(s, up(s))).scrollIntoView());
    }
    return !0;
  };
}
function zp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function On(t, e) {
  const n = t.selection;
  if (!(n instanceof G)) return !1;
  if (e) {
    const r = t.tr, s = he(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new M(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function Lp(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = zs(he(i).row, new M(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? zs(he(i).row, new M(e, n, r)).content : e);
  else return null;
  return Pp(i, l);
}
function Pp(t, e) {
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
    if (s >= e.length && e.push(N.empty), n[s] < r) {
      const o = he(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(N.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function zs(t, e) {
  const n = t.createAndFill();
  return new pl(n).replace(0, n.content.size, e).doc;
}
function Dp({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(vt(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      i.push(N.from(c));
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
      o.push(N.from(a));
    }
    n = o, e = s;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function $p(t, e, n, r, s, o, i) {
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
    const f = a.row.create(null, N.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function vi(t, e, n, r, s, o, i, l) {
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
function ki(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.width) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = c * e.width + i, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(p, null, vt(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(p + f.nodeSize, f.type.createAndFill(vt(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Si(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = ee.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = ee.get(o), f = d.mapping.maps.length;
  }
  $p(d, i, o, n, c, u, f) && h(), vi(d, i, o, n, a, c, l, f) && h(), vi(d, i, o, n, a, c, u, f) && h(), ki(d, i, o, n, l, u, a, f) && h(), ki(d, i, o, n, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const g = i.positionAt(p, a, o), y = i.positionAt(p, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new M(s.rows[p - l], 0, 0));
  }
  h(), d.setSelection(new G(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const Fp = Ad({
  ArrowLeft: jn("horiz", -1),
  ArrowRight: jn("horiz", 1),
  ArrowUp: jn("vert", -1),
  ArrowDown: jn("vert", 1),
  "Shift-ArrowLeft": In("horiz", -1),
  "Shift-ArrowRight": In("horiz", 1),
  "Shift-ArrowUp": In("vert", -1),
  "Shift-ArrowDown": In("vert", 1),
  Backspace: On,
  "Mod-Backspace": On,
  Delete: On,
  "Mod-Delete": On
});
function Fn(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function jn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof G) return Fn(n, r, H.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = Pa(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return Fn(n, r, H.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = Ma(l, t, e);
      let c;
      return a ? c = H.near(a, 1) : e < 0 ? c = H.near(n.doc.resolve(l.before(-1)), -1) : c = H.near(n.doc.resolve(l.after(-1)), 1), Fn(n, r, c);
    }
  };
}
function In(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof G) i = o;
    else {
      const a = Pa(s, t, e);
      if (a == null) return !1;
      i = new G(n.doc.resolve(a));
    }
    const l = Ma(i.$headCell, t, e);
    return l ? Fn(n, r, new G(i.$anchorCell, l)) : !1;
  };
}
function Bp(t, e) {
  const n = t.state.doc, r = wt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new G(r))), !0) : !1;
}
function Hp(t, e, n) {
  if (!Ie(t.state)) return !1;
  let r = Lp(n);
  const s = t.state.selection;
  if (s instanceof G) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [N.from(zs(he(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = ee.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = Dp(r, l.right - l.left, l.bottom - l.top), Si(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = $r(t.state), i = o.start(-1);
    return Si(t.state, t.dispatch, i, ee.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function Wp(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Ci(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof G)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = wt(t.state.selection.$anchor)) != null && ((n = as(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = as(t, c);
    const d = et.getState(t.state) == null;
    if (!u || !yo(a, u)) if (d) u = a;
    else return;
    const f = new G(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(et, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), et.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(et, -1));
  }
  function l(a) {
    const c = a, u = et.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Ci(t, c.target) != r && (d = as(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function Pa(t, e, n) {
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
function Ci(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function as(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && wt(t.state.doc.resolve(r)) || wt(t.state.doc.resolve(s));
}
var _p = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ls(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Ls(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Ls(t, e, n, r, s, o) {
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
const ve = new xe("tableColumnResizing");
function Kp({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = _p, lastColumnResizable: s = !0 } = {}) {
  const o = new Ce({
    key: ve,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = he(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new Vp(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = ve.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          Up(i, l, t, s);
        },
        mouseleave: (i) => {
          qp(i);
        },
        mousedown: (i, l) => {
          Jp(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = ve.getState(i);
        if (l && l.activeHandle > -1) return Zp(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Vp = class Bn {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(ve);
    if (r && r.setHandle != null) return new Bn(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new Bn(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return Is(e.doc.resolve(s)) || (s = -1), new Bn(s, n.dragging);
    }
    return n;
  }
};
function Up(t, e, n, r) {
  if (!t.editable) return;
  const s = ve.getState(t.state);
  if (s && !s.dragging) {
    const o = Yp(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = Ei(t, e, "left", n) : a - e.clientX <= n && (i = Ei(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = ee.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Da(t, i);
    }
  }
}
function qp(t) {
  if (!t.editable) return;
  const e = ve.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Da(t, -1);
}
function Jp(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = ve.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = Gp(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(ve, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = ve.getState(t.state);
    f?.dragging && (Qp(t, f.activeHandle, Ni(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(ve, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = ve.getState(t.state);
    if (f && f.dragging) {
      const h = Ni(f.dragging, d, n);
      Ai(t, f.activeHandle, h, r);
    }
  }
  return Ai(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Gp(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function Yp(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Ei(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = wt(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ee.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Ni(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Da(t, e) {
  t.dispatch(t.state.tr.setMeta(ve, { setHandle: e }));
}
function Qp(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = ee.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : Xp(f.colspan);
    p[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: p
    });
  }
  a.docChanged && t.dispatch(a);
}
function Ai(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = ee.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ls(o, a.firstChild, a, r, l, n);
}
function Xp(t) {
  return Array(t).fill(0);
}
function Zp(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return te.empty;
  const o = ee.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = ve.getState(t)) === null || a === void 0) && a.dragging && n.push(Te.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(Te.widget(f, h));
    }
  }
  return te.create(t.doc, n);
}
function em({ allowTableNodeSelection: t = !1 } = {}) {
  return new Ce({
    key: et,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(et);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: hp,
      handleDOMEvents: { mousedown: Wp },
      createSelectionBetween(e) {
        return et.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Bp,
      handleKeyDown: Fp,
      handlePaste: Hp
    },
    appendTransaction(e, n, r) {
      return gp(r, Ia(r, n), t);
    }
  });
}
var $a = xn.create({
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
    return ["td", it(this.options.HTMLAttributes, t), 0];
  }
}), Fa = xn.create({
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
    return ["th", it(this.options.HTMLAttributes, t), 0];
  }
}), Ba = xn.create({
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
    return ["tr", it(this.options.HTMLAttributes, t), 0];
  }
});
function Ps(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Ti(t, e, n, r, s, o) {
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
            const [k, E] = Ps(r, b);
            c.style.setProperty(k, E);
          }
          c = c.nextSibling;
        } else {
          const k = document.createElement("col"), [E, C] = Ps(r, b);
          k.style.setProperty(E, C), e.appendChild(k);
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
var tm = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ti(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Ti(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function nm(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : p && p[g];
      s += y || e, y || (o = !1);
      const [b, x] = Ps(e, y);
      i.push(["col", { style: `${b}: ${x}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Mi(t, e) {
  return t.createAndFill();
}
function rm(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function sm(t, e, n, r, s) {
  const o = rm(t), i = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Mi(o.cell);
    if (u && l.push(u), r) {
      const d = Mi(o.header_cell);
      d && i.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? i : l));
  return o.table.createChecked(null, a);
}
function om(t) {
  return t instanceof G;
}
var zn = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!om(e))
    return !1;
  let n = 0;
  const r = ca(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, im = "";
function lm(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function am(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : im;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const g = [];
    p.content && p.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map((C) => e.renderChildren(C)).join(s) : b = y.content ? e.renderChildren(y.content) : "";
      const x = lm(b), k = y.type === "tableHeader";
      g.push({ text: x, isHeader: k });
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
var cm = am, Ha = xn.create({
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
      View: tm,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = nm(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      it(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => cm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = sm(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(F.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => xp(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => wp(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => kp(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Cp(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Ep(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Ap(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => zp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => yi(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => bi(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => pn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => pn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => jp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => yi(t, e) ? !0 : bi(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Rp(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => wi(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => wi(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Ia(t), !0),
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
      Backspace: zn,
      "Mod-Backspace": zn,
      Delete: zn,
      "Mod-Delete": zn
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Kp({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      em({
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
je.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Ha.configure(this.options.table)), this.options.tableCell !== !1 && t.push($a.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Fa.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ba.configure(this.options.tableRow)), t;
  }
});
function Me(t) {
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
function um({ editor: t }) {
  const [e, n] = De(!1);
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
        cs,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        cs,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        cs,
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
function cs({
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
function dm({ editor: t }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 border-b bg-gray-50", children: [
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(um, { editor: t }),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Me,
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
      Me,
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
      Me,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    /* @__PURE__ */ m.jsx(_t, {}),
    /* @__PURE__ */ m.jsx(
      Me,
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
      Me,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ m.jsx(
      Me,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function fm({
  value: t,
  onChange: e,
  disabled: n
}) {
  const r = Va({
    extensions: [
      qa,
      Th,
      ep.configure({
        openOnClick: !1
      }),
      rp,
      Ha.configure({ resizable: !0 }),
      Ba,
      Fa,
      $a
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
        !n && /* @__PURE__ */ m.jsx(dm, { editor: r }),
        /* @__PURE__ */ m.jsx(
          Ua,
          {
            editor: r,
            className: "tiptap max-w-none p-3 min-h-[200px] max-h-[220px] overflow-auto focus:outline-none"
          }
        )
      ]
    }
  );
}
function wn({
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
    optionCount: k,
    baseInputClasses: E,
    focusClasses: C,
    labelClasses: T,
    search: I,
    highlightedIndex: L,
    options: K,
    isDisabled: $,
    key: v,
    filteredOptions: B,
    open: ie,
    listRef: V,
    detailsRef: q,
    isFocused: X
  } = pc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), me = (He) => He.icon ? /* @__PURE__ */ m.jsx("i", { className: He.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const w = e.values[v] ?? "", S = I !== "" ? I : us(K, w) ?? String(w ?? "");
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            className: `${E} ${C}`,
            value: S,
            placeholder: t.placeholder || "Type to search...",
            onChange: y,
            onBlur: () => {
              setTimeout(() => p(!1), 150);
            },
            onKeyDown: (R) => {
              if (R.key === "Enter") {
                if (R.preventDefault(), B[L]) {
                  const [j] = B[L];
                  e.setFieldValue(v, j), x(j, t, o);
                } else I.trim() && (e.setFieldValue(v, I.trim()), x(I.trim(), t, o));
                p(!1);
                return;
              }
              d(R, !0);
            },
            disabled: $
          }
        ),
        ie && !$ && /* @__PURE__ */ m.jsx(
          "div",
          {
            ref: V,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: B.length > 0 ? B.map(([R, j], _) => /* @__PURE__ */ m.jsx(
              "div",
              {
                id: `${v}-${R}`,
                "data-index": _,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${L === _ ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => b(R),
                children: j
              },
              R
            )) : /* @__PURE__ */ m.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${S}" ` })
          }
        ),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (t.multiple === !0) {
        const w = e.values[v];
        return /* @__PURE__ */ m.jsx(
          Eo,
          {
            field: t,
            isDisabled: $,
            handleToggle: f,
            detailsRef: q,
            handleKeyDown: d,
            valueArray: w,
            labelClasses: T,
            listRef: V,
            search: I,
            filteredOptions: B,
            highlightedIndex: L,
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
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "details",
          {
            className: `relative w-full ${$ ? "opacity-70" : ""}`,
            onToggle: f,
            ref: q,
            onKeyDown: (w) => {
              $ || d(w, !0);
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
                    /* @__PURE__ */ m.jsx("span", { className: "text-sm text-gray-700", children: e.values[v] ? us(K, e.values[v]) ?? "Select option" : `Select ${t.label}` }),
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
              !$ && /* @__PURE__ */ m.jsxs("div", { ref: V, className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2", children: [
                t.search && /* @__PURE__ */ m.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    value: I,
                    onChange: (w) => {
                      h(w.target.value), a(0);
                    },
                    onKeyDown: (w) => d(w, !0),
                    placeholder: "Search...",
                    className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                  }
                ) }),
                B.length > 0 && /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    onClick: (w) => {
                      w.preventDefault(), w.stopPropagation(), e.setFieldValue(v, ""), x("", t, o), q.current?.removeAttribute("open"), h("");
                    },
                    className: "px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm hover:bg-gray-50",
                    children: "Clear selection"
                  }
                ),
                B.length > 0 ? B.map(([w, S], R) => /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    id: `${v}-${w}`,
                    "data-index": R,
                    onClick: (j) => {
                      j.preventDefault(), j.stopPropagation(), e.setFieldValue(v, w), x(w, t, o), q.current?.removeAttribute("open"), h(""), a(0), c("onChange", t, `${v}-${w}`);
                    },
                    className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${e.values[v] === w ? "bg-indigo-50 text-indigo-600 font-medium" : L === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: S
                  },
                  w
                )) : /* @__PURE__ */ m.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ] })
            ]
          }
        ),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[v]) })
      ] });
    }
    case "richtextarea":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx(
          fm,
          {
            value: e.values[v] ?? "",
            disabled: $,
            onChange: (w) => {
              e.setFieldValue(v, w), x(w, t, o), c("onChange", t, v);
            }
          }
        ),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: v,
              className: `${E} ${C} min-h-[120px] resize-none`,
              onFocus: () => g(!0),
              name: v,
              value: e.values[v],
              onBlur: e.handleBlur,
              onChange: (w) => {
                e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
              },
              placeholder: t.placeholder,
              disabled: $
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const w = e.values[v];
        return /* @__PURE__ */ m.jsx(
          Eo,
          {
            field: t,
            isDisabled: $,
            handleToggle: f,
            detailsRef: q,
            handleKeyDown: d,
            valueArray: w,
            labelClasses: T,
            listRef: V,
            search: I,
            filteredOptions: B,
            highlightedIndex: L,
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
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              className: `${E} ${C} appearance-none ${$ ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => g(!0),
              name: v,
              id: v,
              value: e.values[v],
              onBlur: e.handleBlur,
              onChange: (w) => {
                e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
              },
              disabled: $,
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                !So(K) && Object.entries(K).map(([w, S]) => /* @__PURE__ */ m.jsx("option", { value: w, className: "py-2", children: S }, w)),
                So(K) && Object.entries(K).map(([w, S]) => /* @__PURE__ */ m.jsx("optgroup", { label: w, children: Object.entries(S).map(([R, j]) => /* @__PURE__ */ m.jsx("option", { value: R, children: j }, R)) }, w))
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
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: `flex ${k > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(K || {}).map(([w, S]) => /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: `${v}-${w}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${v}-${w}`,
                  type: "radio",
                  name: v,
                  checked: e.values[v] === w,
                  value: w,
                  onChange: (R) => {
                    e.setFieldValue(v, R.target.value), x(R.target.value, t, o), c("onChange", t, `${v}-${w}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: $,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              S
            ]
          },
          w
        )) }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[v]) })
      ] });
    case "checkbox": {
      const w = e.values[v];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(K || {}).map(([S, R]) => /* @__PURE__ */ m.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${v}-${S}`,
                  type: "checkbox",
                  checked: w.includes(S),
                  onChange: (j) => {
                    const _ = j.target.checked ? [...w, S] : w.filter((J) => J !== S);
                    e.setFieldValue(v, _), x(_, t, o), c("onChange", t, `${v}-${S}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: $,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${$ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              R
            ]
          },
          S
        )) }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[v]) })
      ] });
    }
    case "tags": {
      const w = e.values[v], S = I.trim(), R = Array.isArray(K) ? K : Object.entries(K || {}).map(([O, z]) => ({ value: O, label: z })), j = (O) => {
        if (!$ && O && !w.includes(O)) {
          let z = [...w, O];
          e.setFieldValue(v, z), x(z, t, o), h("");
        }
      }, _ = (O) => {
        let z = w.filter((P) => P !== O);
        e.setFieldValue(
          v,
          z
        ), x(z, t, o);
      }, J = (O) => R.find((z) => z.value === O)?.label ?? O;
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: `${E} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${$ ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !$ && document.getElementById(`${v}-input`)?.focus(),
            children: [
              w.map((O) => /* @__PURE__ */ m.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "text-indigo-700", children: J(O) }),
                    /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (z) => {
                          z.stopPropagation(), $ || _(O);
                        },
                        onMouseDown: (z) => z.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                O
              )),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: `${v}-input`,
                  type: "text",
                  value: I,
                  onChange: (O) => h(O.target.value),
                  onKeyDown: (O) => {
                    (O.key === "Enter" || O.key === ",") && (O.preventDefault(), j(S));
                  },
                  placeholder: w.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: $
                }
              )
            ]
          }
        ),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    }
    case "photo":
    case "avatar":
      return /* @__PURE__ */ m.jsx(
        Di,
        {
          formik: e,
          field: t,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const He = t.multiple === !0, Et = Array.isArray(e.values[v]) ? e.values[v] : e.values[v] ? [e.values[v]] : [];
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative mb-1", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: v,
              type: "file",
              className: `${E} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: v,
              multiple: He,
              onChange: (w) => {
                const S = w.currentTarget.files;
                S && u(S), c("onChange", t, `${v}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder,
              disabled: $
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Et.map((w) => {
          const S = w?.split("/").pop();
          return /* @__PURE__ */ m.jsx(yc, { sqlOpsUrls: r, filePath: w }, S);
        }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    case "json":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ m.jsx(
            "textarea",
            {
              id: v,
              name: v,
              value: e.values[v],
              onChange: (w) => {
                e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: $,
              className: `${E} ${C} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    case "date":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
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
                  id: v,
                  type: "date",
                  name: v,
                  min: t.min,
                  max: t.max,
                  value: e.values[v] ?? "",
                  onChange: (w) => {
                    e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
                  },
                  onBlur: e.handleBlur,
                  placeholder: t.placeholder,
                  disabled: $,
                  className: `${E} ${C} ${t.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    case "number":
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: v,
              type: "number",
              className: `${E} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: v,
              value: e.values[v],
              onBlur: e.handleBlur,
              onChange: (w) => {
                e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: $,
              min: t.min ?? 1,
              max: t.max
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
    default:
      return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ m.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ m.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ m.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(t) }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: v,
              type: t.type || "text",
              className: `${E} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: v,
              value: e.values[v],
              onBlur: e.handleBlur,
              onChange: (w) => {
                e.setFieldValue(v, w.target.value), x(w.target.value, t, o), c("onChange", t, `${v}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: $,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[v] && e.errors[v] && /* @__PURE__ */ m.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[v]) })
      ] });
  }
}
function Ri({ title: t, children: e, isFirst: n }) {
  const [r, s] = De(n);
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
function Fr({
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
      Di,
      {
        formik: e,
        field: a,
        sqlOpsUrls: r,
        module_refid: o
      }
    )) }) }),
    /* @__PURE__ */ m.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((a, c) => a.type === "avatar" ? null : /* @__PURE__ */ m.jsx("div", { className: `transition-colors duration-200 col-span-12 md:col-span-6 ${mn[gn(Number(a.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ m.jsx(
      wn,
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
function hm({
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
  const { common: u = [], ...d } = e, [f, h] = be.useState({}), p = (x, k) => {
    h((E) => ({
      ...E,
      [x]: k
    }));
  }, { initialValues: g, validationSchema: y } = be.useMemo(() => {
    const x = {}, k = {};
    return Object.values(e).flat().forEach((E) => {
      sn([E], x, k, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: k
    };
  }, [e, n, c, l?.operation]), b = Tr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(Ri, { title: "Common", isFirst: !0, children: /* @__PURE__ */ m.jsx(
        Fr,
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
      d && Object.entries(d).map(([x, k], E) => /* @__PURE__ */ m.jsx(Ri, { title: x, isFirst: E === 0 && u.length === 0, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: k.map((C, T) => Mr(C.hidden) || C.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${mn[gn(Number(C.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ m.jsx(
            wn,
            {
              refid: a,
              module_refid: c,
              sqlOpsUrls: l,
              components: i,
              field: C,
              formik: b,
              methods: o,
              setFieldOptions: p,
              ...f[C.name] ? { optionsOverride: f[C.name] } : {}
            },
            C.name
          )
        },
        C?.name ?? `field-${T}`
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
function pm({
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
  const { common: d = [], ...f } = e, h = Object.keys(f), [p, g] = be.useState(0), [y, b] = be.useState({}), x = (v, B) => {
    b((ie) => ({
      ...ie,
      [v]: B
    }));
  }, { initialValues: k, validationSchema: E, stepperSchemas: C } = be.useMemo(() => {
    const v = {}, B = {}, ie = {};
    return a ? Object.entries(e).forEach(([V, q]) => {
      const X = {};
      sn(q, v, X, n, u, l?.operation), ie[V] = X;
    }) : Object.entries(e).forEach(([V, q]) => {
      sn(q, v, B, n, u, l?.operation);
    }), {
      initialValues: v,
      validationSchema: B,
      stepperSchemas: ie
    };
  }, [e, n, a, u, l?.operation]), T = h[p] ?? null, I = a && T ? C[T] ?? {} : E, L = Tr({
    initialValues: k,
    enableReinitialize: !0,
    validationSchema: de.object().shape(I),
    onSubmit: (v) => {
      a ? (p < h.length - 1 && g((B) => B + 1), p === h.length - 1 && r(v)) : r(v);
    }
  }), K = async (v) => {
    if (v.preventDefault(), !a) {
      const B = await L.validateForm();
      if (Object.keys(B).length > 0) {
        alert("Please fill all required fields before submitting."), L.setTouched(
          Object.keys(B).reduce((ie, V) => ({ ...ie, [V]: !0 }), {})
        );
        return;
      }
    }
    L.handleSubmit(v);
  }, $ = () => {
    g((v) => v > 0 ? v - 1 : v);
  };
  return /* @__PURE__ */ m.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: K, className: "w-full mx-auto", children: [
    /* @__PURE__ */ m.jsx("div", { className: "relative", children: /* @__PURE__ */ m.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ m.jsx("div", { className: "p-3", children: /* @__PURE__ */ m.jsx(
        Fr,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: L,
          methods: o,
          setFieldOptions: x,
          fieldOptions: y
        }
      ) }),
      /* @__PURE__ */ m.jsx("nav", { className: "relative flex bg-gray-100", children: h.map((v, B) => /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(B),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${p === B ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ m.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: v })
        },
        v
      )) })
    ] }) }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: T && f[T]?.map((v, B) => Mr(v.hidden) || v.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
            "div",
            {
              className: `col-span-12  ${mn[gn(Number(v.width))] || "lg:col-span-4"}`,
              children: /* @__PURE__ */ m.jsx(
                wn,
                {
                  refid: c,
                  module_refid: u,
                  sqlOpsUrls: l,
                  field: v,
                  formik: L,
                  methods: o,
                  components: i,
                  setFieldOptions: x,
                  ...y[v.name] ? { optionsOverride: y[v.name] } : {}
                },
                v.name
              )
            },
            v?.name ?? `field-${B}`
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
            /* @__PURE__ */ m.jsx("div", { className: "flex gap-1", children: h.map((v, B) => /* @__PURE__ */ m.jsx(
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
function mm({
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
  const c = ic(e, i?.operation), [u, d] = be.useState({}), f = (x, k) => {
    d((E) => ({
      ...E,
      [x]: k
    }));
  }, { commonFields: h, otherFields: p } = be.useMemo(() => c.reduce(
    (x, k) => (k.group === "common" ? x.commonFields.push(k) : x.otherFields.push(k), x),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: y } = be.useMemo(() => {
    const x = {}, k = {};
    return c.forEach((E) => {
      sn([E], x, k, n, a, i?.operation);
    }), {
      initialValues: x,
      validationSchema: k
    };
  }, [c, n]), b = Tr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ m.jsx(
      Fr,
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
    /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: p.map((x, k) => Mr(x.hidden) || x.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
      "div",
      {
        className: `col-span-12 md:col-span-6 ${mn[gn(Number(x.width))] || "lg:col-span-4"}`,
        children: /* @__PURE__ */ m.jsx(
          wn,
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
      x?.name ?? `field-${k}`
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
function Oi({ title: t, children: e }) {
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
function gm({
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
  const { common: u = [], ...d } = e, [f, h] = be.useState({}), p = (x, k) => {
    h((E) => ({
      ...E,
      [x]: k
    }));
  }, { initialValues: g, validationSchema: y } = be.useMemo(() => {
    const x = {}, k = {};
    return Object.values(e).flat().forEach((E) => {
      sn([E], x, k, n, c, l?.operation);
    }), {
      initialValues: x,
      validationSchema: k
    };
  }, [e, n, c, l?.operation]), b = Tr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: de.object().shape(y),
    onSubmit: (x) => {
      r(x);
    }
  });
  return /* @__PURE__ */ m.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ m.jsxs("form", { onSubmit: b.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ m.jsx(Oi, { title: "Common", children: /* @__PURE__ */ m.jsx(
        Fr,
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
      d && Object.entries(d).map(([x, k], E) => /* @__PURE__ */ m.jsx(Oi, { title: x, children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-12 gap-4", children: k.map((C, T) => Mr(C.hidden) || C.type === "geolocation" ? null : /* @__PURE__ */ m.jsx(
        "div",
        {
          className: `col-span-12 md:col-span-6 ${mn[gn(Number(C.width))] || "lg:col-span-4"}`,
          children: /* @__PURE__ */ m.jsx(
            wn,
            {
              refid: a,
              module_refid: c,
              sqlOpsUrls: l,
              components: i,
              field: C,
              formik: b,
              methods: o,
              setFieldOptions: p,
              ...f[C.name] ? { optionsOverride: f[C.name] } : {}
            },
            C.name
          )
        },
        C?.name ?? `field-${T}`
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
function Sm({
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
  let l = tc(t);
  const a = t.endPoints, c = t?.source?.refid, u = nc(t?.fields ?? {}, a?.operation), [d, f] = be.useState(i), h = be.useMemo(() => oc(t.fields), [t.fields]);
  be.useEffect(() => {
    let y = !0;
    return (async () => {
      const x = t?.source ?? {};
      if (!x?.type) {
        y && f({});
        return;
      }
      if (x.type === "method") {
        const k = x.method, E = k ? e[k] : void 0;
        if (E)
          try {
            const C = await Promise.resolve(E());
            y && f(C ?? {});
          } catch (C) {
            console.error("Method execution failed:", C), y && f({});
          }
        else
          y && f({});
      }
      if (x.type === "api" && a?.operation !== "create")
        try {
          const k = await fe({
            method: x.method || "GET",
            url: x.url ?? "",
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          });
          y && f(k.data ?? {});
        } catch (k) {
          console.error("API fetch failed:", k), y && f({});
        }
      if (x.type === "sql" && x.refid && x.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && x.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const k = await hc.fetch(a, {
            source: {
              ...x,
              table: x.table,
              columns: x.columns,
              where: qe(x.where, {
                refid: c
              })
            },
            fields: ko(t.fields, a.operation)
          }, x?.dbopsid, t?.module_refid);
          y && f(k);
        } catch (k) {
          console.error("API fetch failed:", k);
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
        x = await sc();
      } catch (E) {
        console.error("catch fetchGeolocation", E), x = null;
      }
    const k = {
      ...y,
      ...Object.fromEntries(
        h.map((E) => [E, x])
      )
    };
    if (b.type === "method") {
      const E = b.method, C = E ? e[E] : void 0;
      if (C)
        try {
          const T = await Promise.resolve(C(k));
          if (o?.(T), e?.handleActions) {
            let I = a?.operation === "update" ? c : T?.data?.refid;
            const L = t?.gotolink?.replace(
              "{hashid}",
              String(I)
            );
            e.handleActions(L);
          }
        } catch (T) {
          o?.(T), console.error("Method execution failed:", T);
        }
    }
    if (b.type === "api") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const E = await fe({
          method: b.method || "POST",
          url: a.baseURL + b.endpoint,
          data: k ?? {},
          headers: {
            Authorization: `Bearer ${a?.accessToken}`
          }
        });
        if (o?.(E), e?.handleActions) {
          let C = a.operation === "update" ? c : E?.data?.refid;
          const T = t?.gotolink?.replace(
            "{hashid}",
            String(C)
          );
          e.handleActions(T);
        }
      } catch (E) {
        o?.(E), console.error("API fetch failed:", E);
      }
    }
    if (b.type === "sql") {
      const E = t.endPoints;
      if (!E) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let C = !1, T;
        b?.dbopsid && (C = !0, T = b?.dbopsid);
        const I = await fe({
          method: "GET",
          url: E.baseURL + E.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        if (!C) {
          let K = {
            ...b
          };
          b.where && (K = {
            ...b,
            where: qe(b.where, {
              refid: c
            })
          }), T = (await fe({
            method: "POST",
            url: E.baseURL + E.dbopsGetRefId,
            data: {
              operation: E.operation,
              source: K,
              fields: ko(t.fields, E.operation),
              forcefill: t.forcefill,
              datahash: I.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${E?.accessToken}`
            }
          }))?.data.refid;
        }
        const L = await fe({
          method: "POST",
          url: E.baseURL + E[E.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: T,
            fields: k,
            datahash: I.data.refhash
          },
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        if (o?.(L), e?.handleActions) {
          let K = E.operation === "update" ? c : L?.data?.refid;
          const $ = t?.gotolink?.replace(
            "{hashid}",
            String(K)
          );
          e.handleActions($);
        }
      } catch (C) {
        o?.(C), console.error("API fetch failed:", C);
      }
    }
  }, g = {
    accordion: /* @__PURE__ */ m.jsx(
      hm,
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
      gm,
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
      pm,
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
      mm,
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
  Sm as LogiksForm
};
