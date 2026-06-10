import ne, { useState as We, useRef as vn, useEffect as He, useMemo as or, useLayoutEffect as ec } from "react";
import pe from "axios";
import * as Ie from "yup";
import { useFormik as Er } from "formik";
import { createPortal as tc } from "react-dom";
import { useEditor as nc, EditorContent as rc } from "@tiptap/react";
import sc from "@tiptap/starter-kit";
var Kn = { exports: {} }, un = {};
var Eo;
function oc() {
  if (Eo) return un;
  Eo = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
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
  return un.Fragment = e, un.jsx = n, un.jsxs = n, un;
}
var dn = {};
var To;
function ic() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === D ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case g:
          return "Fragment";
        case x:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case E:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case m:
            return "Portal";
          case k:
            return (A.displayName || "Context") + ".Provider";
          case M:
            return (A._context.displayName || "Context") + ".Consumer";
          case S:
            var C = A.render;
            return A = A.displayName, A || (A = C.displayName || C.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case z:
            return C = A.displayName || null, C !== null ? C : t(A.type) || "Memo";
          case T:
            C = A._payload, A = A._init;
            try {
              return t(A(C));
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
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var W = C.error, K = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return W.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), e(A);
      }
    }
    function r(A) {
      if (A === g) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === T)
        return "<...>";
      try {
        var C = t(A);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var A = O.A;
      return A === null ? null : A.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(A) {
      if (L.call(A, "key")) {
        var C = Object.getOwnPropertyDescriptor(A, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, C) {
      function W() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: W,
        configurable: !0
      });
    }
    function a() {
      var A = t(this.type);
      return ge[A] || (ge[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, C, W, K, oe, J, Re, qe) {
      return W = J.ref, A = {
        $$typeof: h,
        type: A,
        key: C,
        props: J,
        _owner: oe
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(A, "ref", {
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
        value: Re
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function u(A, C, W, K, oe, J, Re, qe) {
      var v = C.children;
      if (v !== void 0)
        if (K)
          if (F(v)) {
            for (K = 0; K < v.length; K++)
              d(v[K]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(v);
      if (L.call(C, "key")) {
        v = t(A);
        var _ = Object.keys(C).filter(function(Q) {
          return Q !== "key";
        });
        K = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", Me[v + K] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          v,
          _,
          v
        ), Me[v + K] = !0);
      }
      if (v = null, W !== void 0 && (n(W), v = "" + W), i(C) && (n(C.key), v = "" + C.key), "key" in C) {
        W = {};
        for (var j in C)
          j !== "key" && (W[j] = C[j]);
      } else W = C;
      return v && l(
        W,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        v,
        J,
        oe,
        s(),
        W,
        Re,
        qe
      );
    }
    function d(A) {
      typeof A == "object" && A !== null && A.$$typeof === h && A._store && (A._store.validated = 1);
    }
    var f = ne, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.suspense_list"), z = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), D = /* @__PURE__ */ Symbol.for("react.client.reference"), O = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, F = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(A) {
        return A();
      }
    };
    var te, ge = {}, ie = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), ue = w(r(o)), Me = {};
    dn.Fragment = g, dn.jsx = function(A, C, W, K, oe) {
      var J = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        A,
        C,
        W,
        !1,
        K,
        oe,
        J ? Error("react-stack-top-frame") : ie,
        J ? w(r(A)) : ue
      );
    }, dn.jsxs = function(A, C, W, K, oe) {
      var J = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        A,
        C,
        W,
        !0,
        K,
        oe,
        J ? Error("react-stack-top-frame") : ie,
        J ? w(r(A)) : ue
      );
    };
  })()), dn;
}
var Mo;
function lc() {
  return Mo || (Mo = 1, process.env.NODE_ENV === "production" ? Kn.exports = oc() : Kn.exports = ic()), Kn.exports;
}
var p = lc();
const {
  entries: Hi,
  setPrototypeOf: Ro,
  isFrozen: ac,
  getPrototypeOf: cc,
  getOwnPropertyDescriptor: uc
} = Object;
let {
  freeze: De,
  seal: Ke,
  create: xs
} = Object, {
  apply: ws,
  construct: vs
} = typeof Reflect < "u" && Reflect;
De || (De = function(e) {
  return e;
});
Ke || (Ke = function(e) {
  return e;
});
ws || (ws = function(e, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return e.apply(n, s);
});
vs || (vs = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const qn = ze(Array.prototype.forEach), dc = ze(Array.prototype.lastIndexOf), Oo = ze(Array.prototype.pop), fn = ze(Array.prototype.push), fc = ze(Array.prototype.splice), ir = ze(String.prototype.toLowerCase), qr = ze(String.prototype.toString), Gr = ze(String.prototype.match), hn = ze(String.prototype.replace), hc = ze(String.prototype.indexOf), pc = ze(String.prototype.trim), Ye = ze(Object.prototype.hasOwnProperty), Oe = ze(RegExp.prototype.test), pn = mc(TypeError);
function ze(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return ws(t, e, r);
  };
}
function mc(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return vs(t, n);
  };
}
function Z(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ir;
  Ro && Ro(t, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (ac(e) || (e[r] = o), s = o);
    }
    t[s] = !0;
  }
  return t;
}
function gc(t) {
  for (let e = 0; e < t.length; e++)
    Ye(t, e) || (t[e] = null);
  return t;
}
function st(t) {
  const e = xs(null);
  for (const [n, r] of Hi(t))
    Ye(t, n) && (Array.isArray(r) ? e[n] = gc(r) : r && typeof r == "object" && r.constructor === Object ? e[n] = st(r) : e[n] = r);
  return e;
}
function mn(t, e) {
  for (; t !== null; ) {
    const r = uc(t, e);
    if (r) {
      if (r.get)
        return ze(r.get);
      if (typeof r.value == "function")
        return ze(r.value);
    }
    t = cc(t);
  }
  function n() {
    return null;
  }
  return n;
}
const Io = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jr = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yr = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yc = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xr = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bc = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jo = De(["#text"]), Do = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Qr = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zo = De(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gn = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xc = Ke(/\{\{[\w\W]*|[\w\W]*\}\}/gm), wc = Ke(/<%[\w\W]*|[\w\W]*%>/gm), vc = Ke(/\$\{[\w\W]*/gm), Sc = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cc = Ke(/^aria-[\-\w]+$/), Wi = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kc = Ke(/^(?:\w+script|data):/i), Ac = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vi = Ke(/^html$/i), Nc = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Lo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Cc,
  ATTR_WHITESPACE: Ac,
  CUSTOM_ELEMENT: Nc,
  DATA_ATTR: Sc,
  DOCTYPE_NAME: Vi,
  ERB_EXPR: wc,
  IS_ALLOWED_URI: Wi,
  IS_SCRIPT_OR_DATA: kc,
  MUSTACHE_EXPR: xc,
  TMPLIT_EXPR: vc
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ec = function() {
  return typeof window > "u" ? null : window;
}, Tc = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Fo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Ui() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ec();
  const e = (U) => Ui(U);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== gn.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: n
  } = t;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: a,
    NodeFilter: c,
    NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: f,
    trustedTypes: h
  } = t, m = a.prototype, g = mn(m, "cloneNode"), y = mn(m, "remove"), x = mn(m, "nextSibling"), M = mn(m, "childNodes"), k = mn(m, "parentNode");
  if (typeof i == "function") {
    const U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  let S, R = "";
  const {
    implementation: E,
    createNodeIterator: z,
    createDocumentFragment: T,
    getElementsByTagName: B
  } = n, {
    importNode: D
  } = r;
  let O = Fo();
  e.isSupported = typeof Hi == "function" && typeof k == "function" && E && E.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: L,
    ERB_EXPR: F,
    TMPLIT_EXPR: w,
    DATA_ATTR: te,
    ARIA_ATTR: ge,
    IS_SCRIPT_OR_DATA: ie,
    ATTR_WHITESPACE: ue,
    CUSTOM_ELEMENT: Me
  } = Lo;
  let {
    IS_ALLOWED_URI: A
  } = Lo, C = null;
  const W = Z({}, [...Io, ...Jr, ...Yr, ...Xr, ...jo]);
  let K = null;
  const oe = Z({}, [...Do, ...Qr, ...zo, ...Gn]);
  let J = Object.seal(xs(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Re = null, qe = null;
  const v = Object.seal(xs(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let _ = !0, j = !0, Q = !1, ee = !0, $ = !1, q = !0, V = !1, re = !1, ce = !1, ye = !1, Le = !1, ct = !1, Ge = !0, Je = !1;
  const Pr = "user-content-";
  let ut = !0, Et = !1, Vt = {}, nt = null;
  const _r = Z({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let fo = null;
  const ho = Z({}, ["audio", "video", "img", "source", "image", "track"]);
  let Br = null;
  const po = Z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Hn = "http://www.w3.org/1998/Math/MathML", Wn = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let Ut = dt, Hr = !1, Wr = null;
  const qa = Z({}, [Hn, Wn, dt], qr);
  let Vn = Z({}, ["mi", "mo", "mn", "ms", "mtext"]), Un = Z({}, ["annotation-xml"]);
  const Ga = Z({}, ["title", "style", "font", "a", "script"]);
  let cn = null;
  const Ja = ["application/xhtml+xml", "text/html"], Ya = "text/html";
  let be = null, Kt = null;
  const Xa = n.createElement("form"), mo = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Vr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Kt && Kt === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = st(b), cn = // eslint-disable-next-line unicorn/prefer-includes
      Ja.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Ya : b.PARSER_MEDIA_TYPE, be = cn === "application/xhtml+xml" ? qr : ir, C = Ye(b, "ALLOWED_TAGS") ? Z({}, b.ALLOWED_TAGS, be) : W, K = Ye(b, "ALLOWED_ATTR") ? Z({}, b.ALLOWED_ATTR, be) : oe, Wr = Ye(b, "ALLOWED_NAMESPACES") ? Z({}, b.ALLOWED_NAMESPACES, qr) : qa, Br = Ye(b, "ADD_URI_SAFE_ATTR") ? Z(st(po), b.ADD_URI_SAFE_ATTR, be) : po, fo = Ye(b, "ADD_DATA_URI_TAGS") ? Z(st(ho), b.ADD_DATA_URI_TAGS, be) : ho, nt = Ye(b, "FORBID_CONTENTS") ? Z({}, b.FORBID_CONTENTS, be) : _r, Re = Ye(b, "FORBID_TAGS") ? Z({}, b.FORBID_TAGS, be) : st({}), qe = Ye(b, "FORBID_ATTR") ? Z({}, b.FORBID_ATTR, be) : st({}), Vt = Ye(b, "USE_PROFILES") ? b.USE_PROFILES : !1, _ = b.ALLOW_ARIA_ATTR !== !1, j = b.ALLOW_DATA_ATTR !== !1, Q = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $ = b.SAFE_FOR_TEMPLATES || !1, q = b.SAFE_FOR_XML !== !1, V = b.WHOLE_DOCUMENT || !1, ye = b.RETURN_DOM || !1, Le = b.RETURN_DOM_FRAGMENT || !1, ct = b.RETURN_TRUSTED_TYPE || !1, ce = b.FORCE_BODY || !1, Ge = b.SANITIZE_DOM !== !1, Je = b.SANITIZE_NAMED_PROPS || !1, ut = b.KEEP_CONTENT !== !1, Et = b.IN_PLACE || !1, A = b.ALLOWED_URI_REGEXP || Wi, Ut = b.NAMESPACE || dt, Vn = b.MATHML_TEXT_INTEGRATION_POINTS || Vn, Un = b.HTML_INTEGRATION_POINTS || Un, J = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && mo(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (J.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && mo(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (J.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (J.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $ && (j = !1), Le && (ye = !0), Vt && (C = Z({}, jo), K = [], Vt.html === !0 && (Z(C, Io), Z(K, Do)), Vt.svg === !0 && (Z(C, Jr), Z(K, Qr), Z(K, Gn)), Vt.svgFilters === !0 && (Z(C, Yr), Z(K, Qr), Z(K, Gn)), Vt.mathMl === !0 && (Z(C, Xr), Z(K, zo), Z(K, Gn))), b.ADD_TAGS && (typeof b.ADD_TAGS == "function" ? v.tagCheck = b.ADD_TAGS : (C === W && (C = st(C)), Z(C, b.ADD_TAGS, be))), b.ADD_ATTR && (typeof b.ADD_ATTR == "function" ? v.attributeCheck = b.ADD_ATTR : (K === oe && (K = st(K)), Z(K, b.ADD_ATTR, be))), b.ADD_URI_SAFE_ATTR && Z(Br, b.ADD_URI_SAFE_ATTR, be), b.FORBID_CONTENTS && (nt === _r && (nt = st(nt)), Z(nt, b.FORBID_CONTENTS, be)), b.ADD_FORBID_CONTENTS && (nt === _r && (nt = st(nt)), Z(nt, b.ADD_FORBID_CONTENTS, be)), ut && (C["#text"] = !0), V && Z(C, ["html", "head", "body"]), C.table && (Z(C, ["tbody"]), delete Re.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = b.TRUSTED_TYPES_POLICY, R = S.createHTML("");
      } else
        S === void 0 && (S = Tc(h, s)), S !== null && typeof R == "string" && (R = S.createHTML(""));
      De && De(b), Kt = b;
    }
  }, go = Z({}, [...Jr, ...Yr, ...yc]), yo = Z({}, [...Xr, ...bc]), Qa = function(b) {
    let I = k(b);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ut,
      tagName: "template"
    });
    const H = ir(b.tagName), le = ir(I.tagName);
    return Wr[b.namespaceURI] ? b.namespaceURI === Wn ? I.namespaceURI === dt ? H === "svg" : I.namespaceURI === Hn ? H === "svg" && (le === "annotation-xml" || Vn[le]) : !!go[H] : b.namespaceURI === Hn ? I.namespaceURI === dt ? H === "math" : I.namespaceURI === Wn ? H === "math" && Un[le] : !!yo[H] : b.namespaceURI === dt ? I.namespaceURI === Wn && !Un[le] || I.namespaceURI === Hn && !Vn[le] ? !1 : !yo[H] && (Ga[H] || !go[H]) : !!(cn === "application/xhtml+xml" && Wr[b.namespaceURI]) : !1;
  }, rt = function(b) {
    fn(e.removed, {
      element: b
    });
    try {
      k(b).removeChild(b);
    } catch {
      y(b);
    }
  }, Tt = function(b, I) {
    try {
      fn(e.removed, {
        attribute: I.getAttributeNode(b),
        from: I
      });
    } catch {
      fn(e.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(b), b === "is")
      if (ye || Le)
        try {
          rt(I);
        } catch {
        }
      else
        try {
          I.setAttribute(b, "");
        } catch {
        }
  }, bo = function(b) {
    let I = null, H = null;
    if (ce)
      b = "<remove></remove>" + b;
    else {
      const fe = Gr(b, /^[\r\n\t ]+/);
      H = fe && fe[0];
    }
    cn === "application/xhtml+xml" && Ut === dt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const le = S ? S.createHTML(b) : b;
    if (Ut === dt)
      try {
        I = new f().parseFromString(le, cn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = E.createDocument(Ut, "template", null);
      try {
        I.documentElement.innerHTML = Hr ? R : le;
      } catch {
      }
    }
    const Ae = I.body || I.documentElement;
    return b && H && Ae.insertBefore(n.createTextNode(H), Ae.childNodes[0] || null), Ut === dt ? B.call(I, V ? "html" : "body")[0] : V ? I.documentElement : Ae;
  }, xo = function(b) {
    return z.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ur = function(b) {
    return b instanceof d && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof u) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, wo = function(b) {
    return typeof l == "function" && b instanceof l;
  };
  function ft(U, b, I) {
    qn(U, (H) => {
      H.call(e, b, I, Kt);
    });
  }
  const vo = function(b) {
    let I = null;
    if (ft(O.beforeSanitizeElements, b, null), Ur(b))
      return rt(b), !0;
    const H = be(b.nodeName);
    if (ft(O.uponSanitizeElement, b, {
      tagName: H,
      allowedTags: C
    }), q && b.hasChildNodes() && !wo(b.firstElementChild) && Oe(/<[/\w!]/g, b.innerHTML) && Oe(/<[/\w!]/g, b.textContent) || b.nodeType === gn.progressingInstruction || q && b.nodeType === gn.comment && Oe(/<[/\w]/g, b.data))
      return rt(b), !0;
    if (!(v.tagCheck instanceof Function && v.tagCheck(H)) && (!C[H] || Re[H])) {
      if (!Re[H] && Co(H) && (J.tagNameCheck instanceof RegExp && Oe(J.tagNameCheck, H) || J.tagNameCheck instanceof Function && J.tagNameCheck(H)))
        return !1;
      if (ut && !nt[H]) {
        const le = k(b) || b.parentNode, Ae = M(b) || b.childNodes;
        if (Ae && le) {
          const fe = Ae.length;
          for (let Fe = fe - 1; Fe >= 0; --Fe) {
            const ht = g(Ae[Fe], !0);
            ht.__removalCount = (b.__removalCount || 0) + 1, le.insertBefore(ht, x(b));
          }
        }
      }
      return rt(b), !0;
    }
    return b instanceof a && !Qa(b) || (H === "noscript" || H === "noembed" || H === "noframes") && Oe(/<\/no(script|embed|frames)/i, b.innerHTML) ? (rt(b), !0) : ($ && b.nodeType === gn.text && (I = b.textContent, qn([L, F, w], (le) => {
      I = hn(I, le, " ");
    }), b.textContent !== I && (fn(e.removed, {
      element: b.cloneNode()
    }), b.textContent = I)), ft(O.afterSanitizeElements, b, null), !1);
  }, So = function(b, I, H) {
    if (Ge && (I === "id" || I === "name") && (H in n || H in Xa))
      return !1;
    if (!(j && !qe[I] && Oe(te, I))) {
      if (!(_ && Oe(ge, I))) {
        if (!(v.attributeCheck instanceof Function && v.attributeCheck(I, b))) {
          if (!K[I] || qe[I]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Co(b) && (J.tagNameCheck instanceof RegExp && Oe(J.tagNameCheck, b) || J.tagNameCheck instanceof Function && J.tagNameCheck(b)) && (J.attributeNameCheck instanceof RegExp && Oe(J.attributeNameCheck, I) || J.attributeNameCheck instanceof Function && J.attributeNameCheck(I, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              I === "is" && J.allowCustomizedBuiltInElements && (J.tagNameCheck instanceof RegExp && Oe(J.tagNameCheck, H) || J.tagNameCheck instanceof Function && J.tagNameCheck(H)))
            ) return !1;
          } else if (!Br[I]) {
            if (!Oe(A, hn(H, ue, ""))) {
              if (!((I === "src" || I === "xlink:href" || I === "href") && b !== "script" && hc(H, "data:") === 0 && fo[b])) {
                if (!(Q && !Oe(ie, hn(H, ue, "")))) {
                  if (H)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Co = function(b) {
    return b !== "annotation-xml" && Gr(b, Me);
  }, ko = function(b) {
    ft(O.beforeSanitizeAttributes, b, null);
    const {
      attributes: I
    } = b;
    if (!I || Ur(b))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: K,
      forceKeepAttr: void 0
    };
    let le = I.length;
    for (; le--; ) {
      const Ae = I[le], {
        name: fe,
        namespaceURI: Fe,
        value: ht
      } = Ae, qt = be(fe), Kr = ht;
      let Se = fe === "value" ? Kr : pc(Kr);
      if (H.attrName = qt, H.attrValue = Se, H.keepAttr = !0, H.forceKeepAttr = void 0, ft(O.uponSanitizeAttribute, b, H), Se = H.attrValue, Je && (qt === "id" || qt === "name") && (Tt(fe, b), Se = Pr + Se), q && Oe(/((--!?|])>)|<\/(style|title|textarea)/i, Se)) {
        Tt(fe, b);
        continue;
      }
      if (qt === "attributename" && Gr(Se, "href")) {
        Tt(fe, b);
        continue;
      }
      if (H.forceKeepAttr)
        continue;
      if (!H.keepAttr) {
        Tt(fe, b);
        continue;
      }
      if (!ee && Oe(/\/>/i, Se)) {
        Tt(fe, b);
        continue;
      }
      $ && qn([L, F, w], (No) => {
        Se = hn(Se, No, " ");
      });
      const Ao = be(b.nodeName);
      if (!So(Ao, qt, Se)) {
        Tt(fe, b);
        continue;
      }
      if (S && typeof h == "object" && typeof h.getAttributeType == "function" && !Fe)
        switch (h.getAttributeType(Ao, qt)) {
          case "TrustedHTML": {
            Se = S.createHTML(Se);
            break;
          }
          case "TrustedScriptURL": {
            Se = S.createScriptURL(Se);
            break;
          }
        }
      if (Se !== Kr)
        try {
          Fe ? b.setAttributeNS(Fe, fe, Se) : b.setAttribute(fe, Se), Ur(b) ? rt(b) : Oo(e.removed);
        } catch {
          Tt(fe, b);
        }
    }
    ft(O.afterSanitizeAttributes, b, null);
  }, Za = function U(b) {
    let I = null;
    const H = xo(b);
    for (ft(O.beforeSanitizeShadowDOM, b, null); I = H.nextNode(); )
      ft(O.uponSanitizeShadowNode, I, null), vo(I), ko(I), I.content instanceof o && U(I.content);
    ft(O.afterSanitizeShadowDOM, b, null);
  };
  return e.sanitize = function(U) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, H = null, le = null, Ae = null;
    if (Hr = !U, Hr && (U = "<!-->"), typeof U != "string" && !wo(U))
      if (typeof U.toString == "function") {
        if (U = U.toString(), typeof U != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!e.isSupported)
      return U;
    if (re || Vr(b), e.removed = [], typeof U == "string" && (Et = !1), Et) {
      if (U.nodeName) {
        const ht = be(U.nodeName);
        if (!C[ht] || Re[ht])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (U instanceof l)
      I = bo("<!---->"), H = I.ownerDocument.importNode(U, !0), H.nodeType === gn.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? I = H : I.appendChild(H);
    else {
      if (!ye && !$ && !V && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return S && ct ? S.createHTML(U) : U;
      if (I = bo(U), !I)
        return ye ? null : ct ? R : "";
    }
    I && ce && rt(I.firstChild);
    const fe = xo(Et ? U : I);
    for (; le = fe.nextNode(); )
      vo(le), ko(le), le.content instanceof o && Za(le.content);
    if (Et)
      return U;
    if (ye) {
      if (Le)
        for (Ae = T.call(I.ownerDocument); I.firstChild; )
          Ae.appendChild(I.firstChild);
      else
        Ae = I;
      return (K.shadowroot || K.shadowrootmode) && (Ae = D.call(r, Ae, !0)), Ae;
    }
    let Fe = V ? I.outerHTML : I.innerHTML;
    return V && C["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Oe(Vi, I.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Fe), $ && qn([L, F, w], (ht) => {
      Fe = hn(Fe, ht, " ");
    }), S && ct ? S.createHTML(Fe) : Fe;
  }, e.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vr(U), re = !0;
  }, e.clearConfig = function() {
    Kt = null, re = !1;
  }, e.isValidAttribute = function(U, b, I) {
    Kt || Vr({});
    const H = be(U), le = be(b);
    return So(H, le, I);
  }, e.addHook = function(U, b) {
    typeof b == "function" && fn(O[U], b);
  }, e.removeHook = function(U, b) {
    if (b !== void 0) {
      const I = dc(O[U], b);
      return I === -1 ? void 0 : fc(O[U], I, 1)[0];
    }
    return Oo(O[U]);
  }, e.removeHooks = function(U) {
    O[U] = [];
  }, e.removeAllHooks = function() {
    O = Fo();
  }, e;
}
Ui();
const $o = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Mc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
const Rc = (t) => /^https?:\/\//i.test(t);
function Oc(t, e = "create", n = "Info") {
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
function Po(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const _o = (t) => t == null || t === "", Gt = (t) => t.type === "string", Nn = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? Gi(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? qi(l) : null;
    o === "create" && u && i[u] !== void 0 && _o(c) && (c = i[u]), _o(c) && l.default && (c = l.default), $o.includes(l.type ?? "") ? e[a] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    if ($o.includes(l.type ?? "")) {
      const f = Ie.array().of(
        Ie.string()
      );
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else if (l.multiple === !0 || l.type === "tags") {
      const f = Ie.array().of(Ie.string());
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else l.type === "email" ? d = Ie.string().email("Invalid email") : l.type === "number" ? d = Ie.number().typeError("Must be a number") : l.type === "json" ? d = Ie.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = Ie.string().nullable() : d = Ie.string();
    l?.validate && Object.entries(l.validate).forEach(([f, h]) => {
      switch (f) {
        case "email":
          h && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          Gt(d) && (d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          ));
          break;
        case "regex":
          Gt(d) && (d = d.matches(
            new RegExp(h),
            l?.error_message || `Must match pattern: ${h}`
          ));
          break;
        case "date":
          d = d.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (m) => {
              if (m == null || m === "") return !0;
              const g = m.replace(/-/g, "/"), [y, x, M] = g.split("/");
              if (!y || !x || !M) return !1;
              const k = /* @__PURE__ */ new Date(`${M}-${x}-${y}`);
              return !isNaN(k.getTime());
            }
          );
          break;
        case "time":
          Gt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          ));
          break;
        case "timesec":
          Gt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          ));
          break;
        case "number":
        case "numeric":
          d = Ie.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = Ie.number().typeError("Must be a decimal").transform((m, g) => {
            if (g == null || g === "") return;
            const y = Number(g);
            if (isNaN(y)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const x = Number(m);
              return Number.isInteger(x) ? Number(y.toFixed(x)) : y;
            }
            return y;
          });
          break;
        case "alphanumeric":
          Gt(d) && (d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          ));
          break;
        case "alpha":
          Gt(d) && (d = d.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          ));
          break;
        case "upper":
          d = d.transform(
            (m) => m && m.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (m) => m && m.toLowerCase()
          );
          break;
        case "length-min": {
          const m = Number(h);
          isNaN(m) || (d = d.min(m, `Minimum length is ${m}`));
          break;
        }
        case "length-max": {
          const m = Number(h);
          isNaN(m) || (d = d.max(m, `Maximum length is ${m}`));
          break;
        }
      }
    }), l.required && (d = d.required(
      l.error_message || `${l.label || a} is required`
    )), n[a] = d;
  });
}, zn = {
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
function Ln(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const Fn = (t) => t === !0 || t === "true", mt = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => mt(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    mt(n, e),
    mt(r, e)
  ])
) : t, Zr = (t) => t ? Array.isArray(t) ? t.map((e) => ({
  value: String(e.value),
  label: String(e.label ?? e.title ?? e.value),
  group: e.group ?? e.category ?? // 👈 support category if present
  void 0
})) : typeof t == "object" ? Object.entries(t).map(([e, n]) => ({
  value: String(e),
  label: String(n)
})) : [] : [], yn = (t, e, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return [];
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  return n.map((o) => {
    const i = o[t], l = o[e];
    return i == null || l == null ? null : {
      value: String(i),
      label: String(l),
      group: s && o[s] ? String(o[s]) : void 0
    };
  }).filter(Boolean);
}, fr = (t, e) => {
  if (!(!t || e == null))
    return t.find((n) => String(n.value) === String(e))?.label;
}, Ic = (t) => t.reduce((e, n) => {
  const r = n.group || "__ungrouped__";
  return e[r] || (e[r] = []), e[r].push(n), e;
}, {}), jc = (t) => t.map((e) => [e.value, e.label]);
async function Ss() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const t = await new Promise(
      (o, i) => {
        navigator.geolocation.getCurrentPosition(o, i, {
          enableHighAccuracy: !0,
          timeout: 3e4,
          maximumAge: 0
        });
      }
    ), {
      latitude: e,
      longitude: n,
      altitude: r,
      accuracy: s
    } = t.coords;
    return {
      latitude: e,
      longitude: n,
      altitude: r,
      accuracy: s
    };
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
const Dc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e), zc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "altitude").map(([e]) => e);
function Lc(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function Mt(t, e, n) {
  const r = qi(e);
  r && n && _c(n, r, t);
}
function Fc(t) {
  if (!t || typeof t != "object") return !1;
  const e = t.src;
  return typeof t.target == "string" && typeof e == "object" && e !== null && (e.type === "api" || typeof e.queryid == "string" || typeof e.table == "string" && typeof e.columns < "u");
}
function $c(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const Jt = (t) => {
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
}, Pc = "__form_persist__", Ki = (t) => `${Pc}:${t}`;
function qi(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Gi(t) {
  try {
    return JSON.parse(localStorage.getItem(Ki(t)) || "{}");
  } catch {
    return {};
  }
}
function _c(t, e, n) {
  const r = Gi(t);
  localStorage.setItem(
    Ki(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function Tr(t, e) {
  const n = new Set(
    e.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => !n.has(r))
  );
}
function Yt(t) {
  return pe.isAxiosError(t) ? t.response?.data?.message || t.message || "Something went wrong" : t instanceof Error ? t.message : typeof t == "string" ? t : "Something went wrong";
}
function es(t, e) {
  return e === !1 ? null : typeof e == "string" ? e : t?.data?.message ? t.data.message : t?.message ? t.message : "Operation completed successfully";
}
const Bc = (t) => t.type === "camera2" ? {
  accept: "image/*",
  capture: "environment"
} : {
  accept: "image/*"
}, Hc = (t) => {
  switch (t.type) {
    case "camera2":
      return "fa-camera";
    // strict camera
    case "camera":
      return "fa-camera-retro";
    default:
      return "fa-image";
  }
}, Ji = (t) => t && !t.includes("fakepath"), Yi = ({
  uploads: t,
  currentValue: e,
  multiple: n
}) => {
  const r = (Array.isArray(e) ? e : e ? [e] : []).filter(Ji), s = t.map((o) => `${o.fileId}&${o.path}`);
  return n ? [...r, ...s] : s;
}, Wc = (t) => t === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : t, Vc = (t) => t >= 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(2)} MB` : `${(t / 1024).toFixed(0)} KB`, Xi = ({
  e: t,
  existingFiles: e,
  maxFiles: n,
  maxFileSize: r
}) => {
  const s = t.currentTarget.files;
  if (!s) return null;
  const o = Array.from(s);
  if (e.length + o.length > n)
    return alert(`You can upload maximum ${n} file(s)`), t.currentTarget.value = "", null;
  if (r) {
    const l = Number(r), a = o.find((c) => c.size > l);
    if (a)
      return alert(
        `File "${a.name}" exceeds max size of ${Vc(r)}`
      ), t.currentTarget.value = "", null;
  }
  return s;
}, Xt = (t, e) => {
  const n = Zr(t.options_top), r = Zr(t.options), s = e ?? [], o = Zr(t.options_bottom), i = /* @__PURE__ */ new Set(), l = (a) => a.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(o)
  ];
}, Mr = (t) => {
  const e = {};
  for (const n of t) {
    const r = n.name;
    if (!r) continue;
    const s = n.ajaxchain;
    if (!s) continue;
    const o = Array.isArray(s) ? s : [s];
    for (const i of o)
      i?.target && (e[r] || (e[r] = []), e[r].push(i.target));
  }
  return e;
}, Uc = ({
  field: t,
  formValues: e
}) => {
  const n = {};
  if (typeof t.parameter == "string" && t.parameter)
    return n[t.parameter] = e[t.parameter], n;
  if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
    for (const [r, s] of Object.entries(t.parameter))
      n[r] = e?.[s];
  return console.log("ddddddddparams", n), n;
}, Kc = (t) => {
  const e = t?.data;
  return Array.isArray(e?.results?.options) ? e.results.options[0] : Array.isArray(e?.data) ? e.data[0] : Array.isArray(e?.results) ? e.results[0] : Array.isArray(e) ? e[0] : e?.results ?? e;
}, Sn = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), ts = async (t) => (await pe.get(
  t.baseURL + t.dbopsGetHash,
  { headers: Sn(t) }
)).data.refhash, ns = async (t, e) => (await pe.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: Sn(t) }
)).data.refid, qc = {
  async fetch(t, e, n, r) {
    const s = await ts(t);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await ns(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await pe.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: Sn(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await ts(t), s = await ns(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await pe.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Sn(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await ts(t), s = await ns(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await pe.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: Sn(t) }
    )).data;
  }
};
async function Jn(t, e, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await pe({
      method: "POST",
      url: t.baseURL + t.registerQuery,
      data: { query: e ?? {}, srcid: s },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    })).data.queryid), await pe({
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
async function Gc(t, e) {
  let n = e.previewPath ?? "/api/files/preview";
  const r = await pe.get(
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
async function Qi(t, e) {
  if (!t?.uploadURL)
    throw new Error("Upload URL missing");
  const n = t.baseURL + t.uploadURL;
  return Promise.all(
    Array.from(e).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await pe.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${t.accessToken}`
        }
      })).data;
    })
  );
}
async function Zi(t, e) {
  let n = t?.removeFileURL ?? "/api/files/delete";
  return (await pe.post(
    `${t?.baseURL}${n}`,
    { fileId: String(e) },
    {
      headers: {
        Authorization: `Bearer ${t?.accessToken}`,
        "Content-Type": "application/json"
      }
    }
  )).data;
}
function Jc({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: a,
  setFieldLoading: c
}) {
  const u = [
    "select",
    "dataSelector",
    "dataSelectorFromTable",
    "dataSelectorFromUniques",
    "dataMethod",
    "suggest",
    "autosuggest",
    "autocomplete"
  ].includes(t?.type || "text"), [d, f] = We(!1), [h, m] = We(u), [g, y] = We(
    Xt(t, i ?? [])
  ), [x, M] = We(0), [k, S] = We(""), [R, E] = We(0), z = vn(null), T = vn(null), [B, D] = We(!1), O = vn(k), L = t.disabled === !0;
  He(() => {
    O.current = k;
  }, [k]), He(() => {
    if (t.type !== "select" || t.multiple || t["no-option"] !== "false" || e.values[F] || g.length === 0) return;
    const _ = g[0]?.value;
    _ != null && e.setFieldValue(F, _, !1);
  }, [g]), He(() => {
    i && y(Xt(t, i));
  }, [i]), He(() => {
    window.formAPI = {
      setValue: (v, _) => {
        e.setFieldValue(v, _);
      },
      getValue: (v) => e.values[v],
      setValues: (v) => {
        Object.entries(v).forEach(([_, j]) => {
          e.setFieldValue(_, j);
        });
      },
      getValues: () => e.values
    }, window.setFieldValue = (v, _) => {
      e.setFieldValue(v, _);
    };
  }, [e]), He(() => {
    if (!B) return;
    const v = (_) => {
      const j = _.target;
      T.current?.contains(j) || z.current?.contains(j) || (D(!1), S(""));
    };
    return document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [B]);
  const F = t.name;
  He(() => {
    let v = !0;
    return (async () => {
      try {
        let j = t.valueKey ?? "value", Q = t.labelKey ?? "title";
        const ee = t?.source ?? {};
        if (t.type === "dataMethod") {
          const $ = t.method, q = $ ? n[$] : void 0;
          if (q)
            try {
              const V = await q(), re = Array.isArray(V.data?.results?.options) ? V.data?.results?.options : Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V.data?.results) ? V.data?.results : Array.isArray(V?.data) ? V.data : V, ce = Array.isArray(re) ? re.map(Jt) : [], ye = yn(j, Q, ce, t.groupKey);
              v && y(Xt(t, ye));
              return;
            } catch (V) {
              console.error("Method execution failed:", V), v && y([]);
              return;
            }
          else {
            v && y([]);
            return;
          }
        }
        if (ee.type === "api" && ee.endpoint)
          try {
            let $ = {};
            if (ee.refid && ($.refid = ee.refid), t.parameter) {
              const Le = Uc({ field: t, formValues: e.values });
              $ = { ...$, ...Le };
            }
            const q = {
              method: ee.method || "GET",
              url: r?.baseURL + ee.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...ee.method === "GET" ? { params: { refid: ee.refid } } : { data: $ }
            }, V = await pe(q), re = Array.isArray(V.data?.results?.options) ? V.data?.results?.options : Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V.data?.results) ? V.data?.results : Array.isArray(V?.data) ? V.data : V, ce = Array.isArray(re) ? re.map(Jt) : [], ye = yn(j, Q, ce, t.groupKey);
            v && y(Xt(t, ye));
            return;
          } catch ($) {
            console.error("API execution failed:", $), v && y([]);
            return;
          }
        if (t.table || t.type === "dataSelector" || t.queryid) {
          if (!r) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            let $;
            if (t.type === "dataSelector")
              $ = {
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
              $ = {
                table: t.table,
                cols: t.columns,
                where: t.where ? s ? mt(t.where, { refid: s }) : t.where : void 0
              };
            }
            const q = await Jn(r, $, t?.queryid, void 0, o), V = Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q?.data) ? q.data : q, re = Array.isArray(V) ? V.map(Jt) : [], ce = yn(j, Q, re, t.groupKey);
            v && y(Xt(t, ce));
          } catch ($) {
            console.error("API fetch failed:", $);
          }
        }
      } catch (j) {
        console.log(j);
      } finally {
        v && u && m(!1);
      }
    })(), () => {
      v = !1;
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
    t.labelKey,
    x
  ]);
  const w = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${L ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, te = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, ge = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, ie = or(
    () => jc(g),
    [g]
  ), ue = or(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !k.trim()) return null;
    const v = k.trim().toLowerCase();
    return ie.find(([, _]) => _.trim().toLowerCase() === v);
  }, [t.type, k, ie]), Me = ie.length, A = !!(t.search && (t.queryid || t.table)), C = or(() => A || !k ? ie : ie.filter(
    ([, v]) => v.toLowerCase().includes(k.toLowerCase())
  ), [A, k, ie]), W = (v, _) => {
    if (B)
      if (v.key === "ArrowDown")
        v.preventDefault(), E(
          (j) => j + 1 < C.length ? j + 1 : 0
        );
      else if (v.key === "ArrowUp")
        v.preventDefault(), E(
          (j) => j - 1 >= 0 ? j - 1 : C.length - 1
        );
      else if (v.key === "Enter") {
        v.preventDefault();
        const [j] = C[R] || [];
        if (j) {
          let Q = _ ? j : [...e.values[t.name], j];
          e.setFieldValue(t.name, Q), Mt(Q, t, o);
        }
        D(!1);
      } else v.key === "Escape" && (S(""), D(!1));
  };
  He(() => {
    z.current?.querySelector(
      `[data-index="${R}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [R]), He(() => {
    R >= C.length && E(0);
  }, [C, R]), He(() => {
    const v = t.autocomplete, _ = t.ajaxchain;
    if (!v && !_) return;
    const j = e.values[t.name];
    if (!j) return;
    const Q = Array.isArray(_) ? _ : _ ? [_] : [];
    (async () => {
      try {
        if (Fc(v)) {
          const $ = v.src;
          if (!$ || !r) return;
          let q;
          if ("type" in $ && $.type === "api") {
            let re = t.name;
            typeof t.parameter == "string" && t.parameter && (re = t.parameter);
            const ce = { [re]: j, refid: j };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [ct, Ge] of Object.entries(t.parameter))
                ce[ct] = ct === re ? j : e.values?.[Ge];
            const ye = {
              method: $.method || "GET",
              url: r?.baseURL + $.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...$.method === "GET" ? { params: ce } : { data: ce }
            }, Le = await pe(ye);
            q = Kc(Le);
          } else {
            let re;
            if (!$.queryid) {
              if (!$.table || !$.columns)
                throw new Error("SQL query requires field.table");
              const ye = mt($?.where ?? {}, {
                refid: j
              });
              re = {
                ...$,
                table: $.table,
                cols: $.columns,
                where: ye
              };
            }
            const { data: ce } = await Jn(r, re, $?.queryid, j, o);
            q = Array.isArray(ce?.data?.data) ? ce.data.data[0] : Array.isArray(ce?.data) ? ce.data[0] : ce?.data;
          }
          let V = Jt(q);
          V && v.target.split(",").map((re) => re.trim()).forEach((re) => {
            V[re] !== void 0 && e.setFieldValue(re, V[re]);
          });
        }
        for (const $ of Q) {
          c?.($.target, !0);
          const q = $.src;
          if (!$ || typeof $ != "object" || !q || typeof q != "object" || !r) continue;
          let V;
          if ("type" in q && q.type === "api") {
            let Ge = t.name;
            typeof t.parameter == "string" && t.parameter && (Ge = t.parameter);
            let Je = { [Ge]: j, refid: j };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [ut, Et] of Object.entries(t.parameter))
                Je[ut] = ut === Ge ? j : e.values?.[Et];
            const Pr = {
              method: q.method || "GET",
              url: r?.baseURL + q.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...q.method === "GET" ? { params: Je } : { data: Je }
            };
            try {
              const { data: ut } = await pe(Pr);
              V = ut;
            } catch {
            } finally {
              c?.($.target, !1);
            }
          } else {
            let Ge;
            if (!q.queryid) {
              if (!q.table || !q.columns)
                throw new Error("SQL query requires field.table");
              const Je = mt(q?.where ?? {}, {
                refid: j
              });
              Ge = {
                ...q,
                table: q.table,
                cols: q.columns,
                where: Je
              };
            }
            try {
              const { data: Je } = await Jn(r, Ge, q?.queryid, j, o);
              V = Je;
            } catch {
            } finally {
              c?.($.target, !1);
            }
          }
          let re = t.valueKey ?? "value", ce = t.labelKey ?? "title";
          const ye = Array.isArray(V?.results?.options) ? V?.results?.options : Array.isArray(V.data) ? V.data : Array.isArray(V.results) ? V.results : V, Le = Array.isArray(ye) ? ye.map(Jt) : [], ct = yn(
            re,
            ce,
            Le,
            t.groupKey
          );
          e.setFieldValue($.target, e.initialValues[$.target]), l?.($.target, ct);
        }
      } catch ($) {
        console.error("Autocomplete / AjaxChain fetch failed", $);
      }
    })();
  }, [e.values[t.name]]), He(() => {
    if (!A || !k.trim() || !r) return;
    const v = $c(t.columns ?? ""), _ = new AbortController(), j = setTimeout(async () => {
      try {
        m(!0);
        let Q;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const Le = s ? mt(t.where ?? {}, {
            refid: s
          }) : t.where;
          Q = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: Le
          };
        }
        let ee = {};
        Array.isArray(v) && v.forEach((Le) => {
          ee[Le] = [k, "LIKE"];
        });
        let $ = t.valueKey ?? "value", q = t.labelKey ?? "title";
        const { data: V } = await Jn(r, Q, t?.queryid, void 0, o, ee), re = Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V?.data) ? V.data : V, ce = Array.isArray(re) ? re.map(Jt) : [], ye = yn(
          $,
          q,
          ce,
          t.groupKey
        );
        y(Xt(t, ye));
      } catch (Q) {
        if (pe.isCancel(Q)) return;
        console.error("Search fetch failed", Q);
      } finally {
        m(!1);
      }
    }, 500);
    return () => {
      clearTimeout(j), _.abort();
    };
  }, [A, k, s]);
  const K = async (v) => {
    if (v.length === 0) {
      console.error("No file");
      return;
    }
    try {
      m(!0);
      const _ = await Qi(r, v), j = Yi({
        uploads: _,
        currentValue: e.values[F],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        F,
        j
      ), Mt(j, t, o);
    } catch (_) {
      console.error("File upload failed", _), e.setFieldError(F, "File upload failed");
    } finally {
      m(!1);
    }
  }, oe = async (v) => {
    const _ = Array.isArray(e.values[F]) ? e.values[F] : [], j = v.split("&")[0];
    if (!j) return;
    const Q = _.filter((ee) => ee.split("&")[0] !== j);
    e.setFieldValue(F, Q);
    try {
      await Zi(r, j), Mt(Q, t, o);
    } catch (ee) {
      console.log(ee), e.setFieldValue(F, _), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, J = async (v, _, j) => {
    const Q = _[v];
    if (!Q) return;
    const ee = n?.[Q];
    if (typeof ee != "function") {
      console.error(`Method "${String(Q)}" not found`);
      return;
    }
    try {
      await Promise.resolve(ee(j));
    } catch ($) {
      console.error(`Method "${String(Q)}" failed`, $);
    }
  };
  return {
    setHighlightedIndex: E,
    executeFieldMethod: J,
    handleFileUpload: K,
    handleKeyDown: W,
    setSearch: S,
    setOpen: D,
    setIsFocused: f,
    handleInputChange: (v) => {
      if (L) return;
      const _ = v.target.value;
      S(_), E(0), _.trim() ? D(!0) : (D(!1), e.setFieldValue(F, ""));
    },
    handleSelect: (v) => {
      e.setFieldValue(F, v), Mt(v, t, o), S(""), D(!1), J("onChange", t, `${F}-${v}`);
    },
    handlePersist: Mt,
    setLoading: m,
    removeFile: oe,
    optionCount: Me,
    baseInputClasses: w,
    focusClasses: te,
    labelClasses: ge,
    search: k,
    highlightedIndex: R,
    options: g,
    isDisabled: L,
    key: F,
    filteredOptions: C,
    open: B,
    listRef: z,
    isFocused: d,
    exactMatch: ue,
    triggerRef: T,
    loading: h,
    refreshOptions: () => M((v) => v + 1)
  };
}
function Bs({
  anchorRef: t,
  open: e,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = We({}), l = vn(null);
  return ec(() => {
    if (!e || !t.current || !l.current) return;
    const a = t.current, c = () => {
      const d = a.getBoundingClientRect(), f = window.innerHeight, h = l.current?.offsetHeight || s, m = f - d.bottom, g = d.top, x = m < h && g > m ? d.top - h - r : d.bottom + r;
      i({
        position: "fixed",
        top: x,
        left: d.left,
        width: d.width,
        maxHeight: s,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    c();
    const u = requestAnimationFrame(c);
    return window.addEventListener("scroll", c, !0), window.addEventListener("resize", c), () => {
      cancelAnimationFrame(u), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    };
  }, [e, t, r, s]), e ? tc(
    /* @__PURE__ */ p.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function Bo({
  field: t,
  isDisabled: e,
  handleKeyDown: n,
  labelClasses: r,
  listRef: s,
  search: o,
  filteredOptions: i,
  highlightedIndex: l,
  setSearch: a,
  formik: c,
  executeFieldMethod: u,
  handlePersist: d,
  module_refid: f,
  options: h,
  triggerRef: m,
  open: g,
  setOpen: y,
  loading: x
}) {
  const M = t.name;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: M,
        value: JSON.stringify(c.values[M] ?? "")
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: r, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: M,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${e ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: m,
        tabIndex: 0,
        onClick: () => {
          e || y((k) => !k);
        },
        onKeyDown: (k) => {
          e || n(k, !0);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: c.values[M] ? fr(h, c.values[M]) ?? "Select option" : `Select ${t.label}` }),
          x ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(Bs, { anchorRef: m, open: g, children: /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: s,
        className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2",
        children: [
          t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              value: o,
              onChange: (k) => {
                a(k.target.value);
              },
              onKeyDown: (k) => n(k, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: (k) => {
                k.preventDefault(), k.stopPropagation(), c.setFieldValue(M, ""), y(!1), d("", t, f), a("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([k, S], R) => /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `${M}-${k}`,
              "data-index": R,
              onClick: (E) => {
                E.preventDefault(), E.stopPropagation(), c.setFieldValue(M, k), d(k, t, f), y(!1), a(""), u("onChange", t, `${M}-${k}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[M] === k ? "bg-indigo-50 text-indigo-600 font-medium" : l === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: S
            },
            k
          )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[M] && c.errors[M] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[M]) })
  ] });
}
function Ho({
  field: t,
  isDisabled: e,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: a,
  setSearch: c,
  formik: u,
  executeFieldMethod: d,
  handlePersist: f,
  module_refid: h,
  options: m,
  triggerRef: g,
  open: y,
  setOpen: x,
  loading: M
}) {
  const k = t.name, S = m.map((E) => E.value), R = S.every((E) => r.includes(E));
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: k,
        value: JSON.stringify(r ?? [])
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: s, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: k,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          e || x((E) => !E);
        },
        onKeyDown: (E) => {
          e || n(E, !1);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((E) => fr(m, E) ?? E).join(", ") : `Select ${t.label}` }),
          M ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(Bs, { anchorRef: g, open: y && !e, children: /* @__PURE__ */ p.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (E) => {
            e || c(E.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      /* @__PURE__ */ p.jsxs(
        "label",
        {
          className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm font-medium border-b mb-1",
          children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "checkbox",
                checked: R,
                onChange: (E) => {
                  const z = E.target.checked ? S : [];
                  u.setFieldValue(k, z), f(z, t, h), d("onChange", t, k);
                },
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([E, z], T) => /* @__PURE__ */ p.jsxs(
        "label",
        {
          htmlFor: `${k}-${E}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(E) ? "bg-indigo-50 text-indigo-600 font-medium" : a === T ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: `${k}-${E}`,
                type: "checkbox",
                checked: r?.includes(E),
                onChange: (B) => {
                  const D = B.target.checked ? Array.from(/* @__PURE__ */ new Set([...r, E])) : r?.filter((O) => O !== E);
                  u.setFieldValue(k, D), f(D, t, h), d("onChange", t, `${k}-${E}`);
                },
                onBlur: u.handleBlur,
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            z
          ]
        },
        E
      )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[k] && u.errors[k] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[k]) })
  ] });
}
function Yc({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const r = t?.replace(/^[^&]*&/, ""), [s, o] = We(null);
  return He(() => {
    if (Rc(r)) {
      o(r);
      return;
    }
    if (!n) return;
    let i = !0, l = null;
    if (!Ji(t)) {
      console.log("skipping preview:", t);
      return;
    }
    return Gc(r, n).then((a) => {
      i && (l = a, o(a));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, r, n]), /* @__PURE__ */ p.jsx("div", { className: "h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center", children: s ? /* @__PURE__ */ p.jsx(
    "img",
    {
      alt: e,
      title: e,
      src: s,
      className: "h-24 w-24 object-cover rounded"
    }
  ) : /* @__PURE__ */ p.jsx("i", { className: "fa-regular fa-image text-gray-400 text-2xl" }) });
}
function el({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const o = vn(null), i = e.max !== void 0 ? Number(e.max) : 1 / 0, [l, a] = We(!1), c = Array.isArray(t.values[s]) ? t.values[s] : t.values[s] ? [t.values[s]] : [], u = async (m) => {
    const g = Xi({
      e: m,
      existingFiles: c,
      maxFiles: i,
      maxFileSize: e.file_size
    });
    if (g)
      try {
        a(!0);
        const y = await Qi(n, g), x = Yi({
          uploads: y,
          currentValue: t.values[s],
          multiple: e.multiple ?? !1
        });
        t.setFieldValue(
          s,
          x
        ), Mt(x, e, r), m.target.value = "";
      } catch (y) {
        console.error("File upload failed", y), t.setFieldError(s, "File upload failed");
      } finally {
        a(!1);
      }
  }, d = async (m) => {
    const g = Array.isArray(t.values[s]) ? t.values[s] : [], y = m.split("&")[0];
    if (!y) return;
    const x = g.filter((M) => M.split("&")[0] !== y);
    t.setFieldValue(s, x);
    try {
      if (!m.split("&")[0]) return;
      await Zi(n, y), Mt(x, e, r);
    } catch {
      t.setFieldValue(s, g), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, f = Bc(e), h = e.multiple === !0;
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: [
      e.label,
      e.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: o,
        type: "file",
        className: "hidden",
        multiple: h,
        ...f,
        onChange: u
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          c.length > 0 ? c.map((m) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ p.jsx(
              Yc,
              {
                field_name: m,
                filePath: m,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  d(m);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, m)) : null,
          /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: () => {
                l || o.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ p.jsx("i", { className: `fa-solid ${Hc(e)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    t.touched[s] && t.errors[s] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
  ] });
}
function Ce(t) {
  this.content = t;
}
Ce.prototype = {
  constructor: Ce,
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
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new Ce(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ce(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ce([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ce(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new Ce(s);
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
    return t = Ce.from(t), t.size ? new Ce(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ce.from(t), t.size ? new Ce(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ce.from(t);
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
Ce.from = function(t) {
  if (t instanceof Ce) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Ce(e);
};
function tl(t, e, n) {
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
      let i = tl(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function nl(t, e, n, r) {
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
      let c = nl(i.content, l.content, n - 1, r - 1);
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
    return tl(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return nl(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Yn(0, e);
    if (e == this.size)
      return Yn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Yn(n + 1, o) : Yn(n, r);
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
const rs = { index: 0, offset: 0 };
function Yn(t, e) {
  return rs.index = t, rs.offset = e, rs;
}
function hr(t, e) {
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
      if (!hr(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !hr(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ae = class Cs {
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
    return this == e || this.type == e.type && hr(this.attrs, e.attrs);
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
      return Cs.none;
    if (e instanceof Cs)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
ae.none = [];
class pr extends Error {
}
class P {
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
    let r = sl(this.content, e + this.openStart, n);
    return r && new P(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new P(rl(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return P.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new P(N.fromJSON(e, n.content), r, s);
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
    return new P(e, r, s);
  }
}
P.empty = new P(N.empty, 0, 0);
function rl(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(rl(o.content, e - s - 1, n - s - 1)));
}
function sl(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = sl(i.content, e - o - 1, n, i);
  return l && t.replaceChild(s, i.copy(l));
}
function Xc(t, e, n) {
  if (n.openStart > t.depth)
    throw new pr("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new pr("Inconsistent open depths");
  return ol(t, e, n, 0);
}
function ol(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = ol(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return jt(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = Qc(n, t);
      return jt(o, ll(t, i, l, e, r));
    }
  else return jt(o, mr(t, e, r));
}
function il(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new pr("Cannot join " + e.type.name + " onto " + t.type.name);
}
function ks(t, e, n) {
  let r = t.node(n);
  return il(r, e.node(n)), r;
}
function It(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Cn(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (It(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    It(s.child(l), r);
  e && e.depth == n && e.textOffset && It(e.nodeBefore, r);
}
function jt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function ll(t, e, n, r, s) {
  let o = t.depth > s && ks(t, e, s + 1), i = r.depth > s && ks(n, r, s + 1), l = [];
  return Cn(null, t, s, l), o && i && e.index(s) == n.index(s) ? (il(o, i), It(jt(o, ll(t, e, n, r, s + 1)), l)) : (o && It(jt(o, mr(t, e, s + 1)), l), Cn(e, n, s, l), i && It(jt(i, mr(n, r, s + 1)), l)), Cn(r, null, s, l), new N(l);
}
function mr(t, e, n) {
  let r = [];
  if (Cn(null, t, n, r), t.depth > n) {
    let s = ks(t, e, n + 1);
    It(jt(s, mr(t, e, n + 1)), r);
  }
  return Cn(e, null, n, r), new N(r);
}
function Qc(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(N.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class En {
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
      return ae.none;
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
        return new gr(this, e, r);
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
    return new En(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Wo.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      Wo.set(e, r = new Zc());
    let s = r.elts[r.i] = En.resolve(e, n);
    return r.i = (r.i + 1) % eu, s;
  }
}
class Zc {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const eu = 12, Wo = /* @__PURE__ */ new WeakMap();
class gr {
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
const tu = /* @__PURE__ */ Object.create(null);
class ot {
  /**
  @internal
  */
  constructor(e, n, r, s = ae.none) {
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
    return this.type == e && hr(this.attrs, n || e.defaultAttrs || tu) && ae.sameSet(this.marks, r || ae.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new ot(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new ot(this.type, this.attrs, this.content, e);
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
      return P.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new P(c, s.depth - i, o.depth - i);
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
    return Xc(this.resolve(e), this.resolve(n), r);
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
    return En.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return En.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), al(this.marks, e);
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
    let e = ae.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ae.sameSet(e, this.marks))
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
ot.prototype.text = void 0;
class yr extends ot {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : al(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new yr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new yr(this.type, this.attrs, e, this.marks);
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
function al(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class Ft {
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
    let r = new nu(e, n);
    if (r.next == null)
      return Ft.empty;
    let s = cl(r);
    r.next && r.err("Unexpected trailing text");
    let o = cu(au(s));
    return uu(o, r), o;
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
Ft.empty = new Ft(!0);
class nu {
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
function cl(t) {
  let e = [];
  do
    e.push(ru(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function ru(t) {
  let e = [];
  do
    e.push(su(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function su(t) {
  let e = lu(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = ou(t, e);
    else
      break;
  return e;
}
function Vo(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function ou(t, e) {
  let n = Vo(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Vo(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function iu(t, e) {
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
function lu(t) {
  if (t.eat("(")) {
    let e = cl(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = iu(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function au(t) {
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
function ul(t, e) {
  return e - t;
}
function Uo(t, e) {
  let n = [];
  return r(e), n.sort(ul);
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
function cu(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Uo(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Uo(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new Ft(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(ul);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function uu(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function dl(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function fl(t, e) {
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
function hl(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function pl(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new fu(t, r, e[r]);
  return n;
}
let Ko = class ml {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = pl(e, r.attrs), this.defaultAttrs = dl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == Ft.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : fl(this.attrs, e);
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
    return new ot(this, this.computeAttrs(e), N.from(n), ae.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = N.from(n), this.checkContent(n), new ot(this, this.computeAttrs(e), n, ae.setFrom(r));
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
    return o ? new ot(this, e, n.append(o), ae.setFrom(r)) : null;
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
    hl(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : ae.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new ml(o, n, i));
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
function du(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class fu {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? du(e, n, r.validate) : r.validate;
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
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = pl(e, s.attrs), this.excluded = null;
    let o = dl(this.attrs);
    this.instance = o ? new ae(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ae(this, fl(this.attrs, e));
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
    hl(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class hu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = Ce.from(e.nodes), n.marks = Ce.from(e.marks || {}), this.nodes = Ko.compile(this.spec.nodes, this), this.marks = Rr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = Ft.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? qo(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : qo(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => ot.fromJSON(this, s), this.markFromJSON = (s) => ae.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Ko) {
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
    return new yr(r, r.defaultAttrs, e, ae.setFrom(n));
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
function qo(t, e) {
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
function pu(t) {
  return t.tag != null;
}
function mu(t) {
  return t.style != null;
}
class Dt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (pu(s))
        this.tags.push(s);
      else if (mu(s)) {
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
    let r = new Jo(this, n, !1);
    return r.addAll(e, ae.none, n.from, n.to), r.finish();
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
    let r = new Jo(this, n, !0);
    return r.addAll(e, ae.none, n.from, n.to), P.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (bu(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
        r(i = Yo(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = Yo(i)), i.node || i.ignore || i.mark || (i.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new Dt(e, Dt.schemaRules(e)));
  }
}
const gl = {
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
}, gu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, yl = { ol: !0, ul: !0 }, Tn = 1, As = 2, kn = 4;
function Go(t, e, n) {
  return e != null ? (e ? Tn : 0) | (e === "full" ? As : 0) : t && t.whitespace == "pre" ? Tn | As : n & ~kn;
}
class Xn {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = ae.none, this.match = o || (i & kn ? null : e.contentMatch);
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
    if (!(this.options & Tn)) {
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
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !gl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Jo {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = Go(null, n.preserveWhitespace, 0) | (r ? kn : 0);
    s ? o = new Xn(s.type, s.attrs, ae.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new Xn(null, null, ae.none, !0, null, i) : o = new Xn(e.schema.topNodeType, null, ae.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, o = s.options & As ? "full" : this.localPreserveWS || (s.options & Tn) > 0, { schema: i } = this.parser;
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
    yl.hasOwnProperty(i) && this.parser.normalizeLists && yu(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : gu.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (gl.hasOwnProperty(i))
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
      let i = ae.none;
      for (let l of s.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Xo(l.type, e.type)) && (i = l.addToSet(i));
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
    let l = Go(e, o, i.options);
    i.options & kn && i.content.length == 0 && (l |= kn);
    let a = ae.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : Xo(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Xn(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= Tn);
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
function yu(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && yl.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function bu(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Yo(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Xo(t, e) {
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
    r || (r = ss(n).createDocumentFragment());
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
    let { dom: r, contentDOM: s } = lr(ss(n), this.nodes[e.type.name](e), null, e.attrs);
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
    return s && lr(ss(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return lr(e, n, r, s);
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
    let n = Qo(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Qo(e.marks);
  }
}
function Qo(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function ss(t) {
  return t.document || window.document;
}
const Zo = /* @__PURE__ */ new WeakMap();
function xu(t) {
  let e = Zo.get(t);
  return e === void 0 && Zo.set(t, e = wu(t)), e;
}
function wu(t) {
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
function lr(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = xu(r)) && o.indexOf(e) > -1)
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
      let { dom: h, contentDOM: m } = lr(t, f, n, r);
      if (a.appendChild(h), m) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = m;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const bl = 65535, xl = Math.pow(2, 16);
function vu(t, e) {
  return t + e * xl;
}
function ei(t) {
  return t & bl;
}
function Su(t) {
  return (t - (t & bl)) / xl;
}
const wl = 1, vl = 2, ar = 4, Sl = 8;
class Ns {
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
    return (this.delInfo & Sl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (wl | ar)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (vl | ar)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & ar) > 0;
  }
}
class $e {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && $e.empty)
      return $e.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = ei(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Su(e);
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
        let m = e == (n < 0 ? a : d) ? null : vu(l / 3, e - a), g = e == a ? vl : e == d ? wl : ar;
        return (n < 0 ? e != a : e != d) && (g |= Sl), new Ns(h, g, m);
      }
      s += u - c;
    }
    return r ? e + s : new Ns(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = ei(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
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
    return new $e(this.ranges, !this.inverted);
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
    return e == 0 ? $e.empty : new $e(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
$e.empty = new $e([]);
class br {
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
    return new br(this._maps, this.mirror, e, n);
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
    let e = new br();
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
    return r ? e : new Ns(e, s, null);
  }
}
const is = /* @__PURE__ */ Object.create(null);
class Te {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return $e.empty;
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
    let r = is[n.stepType];
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
    if (e in is)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return is[e] = n, n.prototype.jsonID = e, n;
  }
}
class me {
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
    return new me(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new me(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return me.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof pr)
        return me.fail(o.message);
      throw o;
    }
  }
}
function Hs(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(Hs(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return N.fromArray(r);
}
class wt extends Te {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new P(Hs(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return me.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Xe(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new wt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof wt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new wt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new wt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Te.jsonID("addMark", wt);
class Xe extends Te {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new P(Hs(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return me.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new wt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Xe(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Xe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Xe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Xe(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Te.jsonID("removeMark", Xe);
class vt extends Te {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new P(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new vt(this.pos, n.marks[s]);
        return new vt(this.pos, this.mark);
      }
    }
    return new $t(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new vt(n.pos, this.mark);
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
    return new vt(n.pos, e.markFromJSON(n.mark));
  }
}
Te.jsonID("addNodeMark", vt);
class $t extends Te {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new P(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new vt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new $t(n.pos, this.mark);
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
    return new $t(n.pos, e.markFromJSON(n.mark));
  }
}
Te.jsonID("removeNodeMark", $t);
class we extends Te {
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
    return this.structure && Es(e, this.from, this.to) ? me.fail("Structure replace would overwrite content") : me.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new $e([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new we(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new we(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof we) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? P.empty : new P(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new we(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? P.empty : new P(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new we(e.from, this.to, n, this.structure);
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
    return new we(n.from, n.to, P.fromJSON(e, n.slice), !!n.structure);
  }
}
Te.jsonID("replace", we);
class ve extends Te {
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
    if (this.structure && (Es(e, this.from, this.gapFrom) || Es(e, this.gapTo, this.to)))
      return me.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return me.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? me.fromReplace(e, this.from, this.to, r) : me.fail("Content does not fit in gap");
  }
  getMap() {
    return new $e([
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
    return new ve(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new ve(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
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
    return new ve(n.from, n.to, n.gapFrom, n.gapTo, P.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
Te.jsonID("replaceAround", ve);
function Es(t, e, n) {
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
function Cu(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), m = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(m) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new Xe(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new wt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function ku(t, e, n, r) {
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
          let m = s[h];
          m.step == o - 1 && d.eq(s[h].style) && (f = m);
        }
        f ? (f.to = c, f.step = o) : s.push({ style: d, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), s.forEach((i) => t.step(new Xe(i.from, i.to, i.style)));
}
function Ws(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new we(l, u, P.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Xe(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, m;
        for (; f = h.exec(c.text); )
          m || (m = new P(N.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new we(l + f.index, l + f.index + f[0].length, m));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(N.empty, !0);
    t.replace(l, l, new P(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function Au(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function ln(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Au(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function Nu(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = N.empty, d = 0;
  for (let m = o, g = !1; m > n; m--)
    g || r.index(m) > 0 ? (g = !0, u = N.from(r.node(m).copy(u)), d++) : a--;
  let f = N.empty, h = 0;
  for (let m = o, g = !1; m > n; m--)
    g || s.after(m + 1) < s.end(m) ? (g = !0, f = N.from(s.node(m).copy(f)), h++) : c++;
  t.step(new ve(a, c, i, l, new P(u.append(f), d, h), u.size - d, !0));
}
function Cl(t, e, n = null, r = t) {
  let s = Eu(t, e), o = s && Tu(r, e);
  return o ? s.map(ti).concat({ type: e, attrs: n }).concat(o.map(ti)) : null;
}
function ti(t) {
  return { type: t, attrs: null };
}
function Eu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function Tu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function Mu(t, e, n) {
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
  t.step(new ve(s, o, s, o, new P(r, 0, 0), n.length, !0));
}
function Ru(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && Ou(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", m = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !m ? c = !1 : !h && m && (c = !0);
      }
      c === !1 && Al(t, i, l, o), Ws(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new ve(d, f, d + 1, f - 1, new P(N.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && kl(t, i, l, o), !1;
    }
  });
}
function kl(t, e, n, r) {
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
function Al(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let i = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(i, i + 1, e.type.schema.text(`
`));
    }
  });
}
function Ou(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function Iu(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new ve(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new P(N.from(i), 0, 0), 1, !0));
}
function gt(t, e, n = 1, r) {
  let s = t.resolve(e), o = s.depth - n, i = r && r[r.length - 1] || s.parent;
  if (o < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !i.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let c = s.depth - 1, u = n - 2; c > o; c--, u--) {
    let d = s.node(c), f = s.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), m = r && r[u + 1];
    m && (h = h.replaceChild(0, m.type.create(m.attrs)));
    let g = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = s.indexAfter(o), a = r && r[0];
  return s.node(o).canReplaceWith(l, l, a ? a.type : s.node(o + 1).type);
}
function ju(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = N.empty, i = N.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = N.from(s.node(l).copy(o));
    let u = r && r[c];
    i = N.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new we(e, e, new P(o.append(i), n, n), !0));
}
function Bt(t, e) {
  let n = t.resolve(e), r = n.index();
  return Nl(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Du(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function Nl(t, e) {
  return !!(t && e && !t.isLeaf && Du(t, e));
}
function Ir(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, l = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), l++, i = r.node(s).maybeChild(l)) : (o = r.node(s).maybeChild(l - 1), i = r.node(s + 1)), o && !o.isTextblock && Nl(o, i) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function zu(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, o = t.doc.resolve(e - n), i = o.node().type;
  if (s && i.inlineContent) {
    let u = i.whitespace == "pre", d = !!i.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    Al(t, u.node(), u.before(), l);
  }
  i.inlineContent && Ws(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new we(c, a.map(e + n, -1), P.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    kl(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function Lu(t, e, n) {
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
function Fu(t, e, n) {
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
function jr(t, e, n = e, r = P.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return El(s, o, r) ? new we(e, n, r) : new $u(s, o, r).fit();
}
function El(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class $u {
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
    let a = new P(o, i, l);
    return e > -1 ? new ve(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new we(r.pos, s.pos, a) : null;
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
        r ? (o = ls(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
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
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ls(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new P(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ls(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new P(xn(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new P(xn(e, n, 1), n, r);
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
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(Tl(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = wn(this.placed, n, N.from(u)), this.frontier[n].match = d, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let x = y.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), y = x.content;
    }
    this.unplaced = m ? e == 0 ? P.empty : new P(xn(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new P(xn(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !as(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = as(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = as(e, l, c, a, !0);
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
    n.fit.childCount && (this.placed = wn(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = wn(this.placed, this.depth, N.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(N.empty, !0);
    n.childCount && (this.placed = wn(this.placed, this.frontier.length, n));
  }
}
function xn(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(xn(t.firstChild.content, e - 1, n)));
}
function wn(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(wn(t.lastChild.content, e - 1, n)));
}
function ls(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Tl(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Tl(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(N.empty, !0)))), t.copy(r);
}
function as(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !Pu(n, o.content, i) ? l : null;
}
function Pu(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function _u(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Bu(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (El(s, o, r))
    return t.step(new we(e, n, r));
  let i = Rl(s, o);
  i[i.length - 1] == 0 && i.pop();
  let l = -(s.depth + 1);
  i.unshift(l);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let m = s.node(f).type.spec;
    if (m.defining || m.definingAsContext || m.isolating)
      break;
    i.indexOf(f) > -1 ? l = f : s.before(f) == h && i.splice(1, 0, -f);
  }
  let a = i.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let m = f.firstChild;
    if (c.push(m), h == r.openStart)
      break;
    f = m.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], m = _u(h.type);
    if (m && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (m || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < i.length; g++) {
        let y = i[(g + a) % i.length], x = !0;
        y < 0 && (x = !1, y = -y);
        let M = s.node(y - 1), k = s.index(y - 1);
        if (M.canReplaceWith(k, k, m.type, m.marks))
          return t.replace(s.before(y), x ? o.after(y) : n, new P(Ml(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function Ml(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Ml(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(N.empty, !0));
  }
  return t;
}
function Hu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = Lu(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new P(N.from(r), 0, 0));
}
function Wu(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), o = Rl(r, s);
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
function Rl(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let o = t.start(s);
    if (o < t.pos - (t.depth - s) || e.end(s) > e.pos + (e.depth - s) || t.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (o == e.start(s) || s == t.depth && s == e.depth && t.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == o - 1) && n.push(s);
  }
  return n;
}
class tn extends Te {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return me.fromReplace(e, this.pos, this.pos + 1, new P(N.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return $e.empty;
  }
  invert(e) {
    return new tn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new tn(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new tn(n.pos, n.attr, n.value);
  }
}
Te.jsonID("attr", tn);
class Mn extends Te {
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
    return me.ok(r);
  }
  getMap() {
    return $e.empty;
  }
  invert(e) {
    return new Mn(this.attr, e.attrs[this.attr]);
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
    return new Mn(n.attr, n.value);
  }
}
Te.jsonID("docAttr", Mn);
let rn = class extends Error {
};
rn = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
rn.prototype = Object.create(Error.prototype);
rn.prototype.constructor = rn;
rn.prototype.name = "TransformError";
class Ol {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new br();
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
      throw new rn(n.failed);
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
  replace(e, n = e, r = P.empty) {
    let s = jr(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new P(N.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, P.empty);
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
    return Bu(this, e, n, r), this;
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
    return Hu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Wu(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Nu(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return zu(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Mu(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return Ru(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return Iu(this, e, n, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new tn(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new Mn(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new vt(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof ae)
      n.isInSet(r.marks) && this.step(new $t(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new $t(e, o)), s = o.removeFromSet(s);
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
    return ju(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Cu(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return ku(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Ws(this, e, n, r), this;
  }
}
const cs = /* @__PURE__ */ Object.create(null);
class X {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Il(e.min(n), e.max(n))];
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
  replace(e, n = P.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? P.empty : n), l == 0 && si(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), si(e, r, n.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new Y(e) : Zt(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? Zt(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : Zt(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new _e(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Zt(e, e, 0, 0, 1) || new _e(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Zt(e, e, e.content.size, e.childCount, -1) || new _e(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = cs[n.type];
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
    if (e in cs)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return cs[e] = n, n.prototype.jsonID = e, n;
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
    return Y.between(this.$anchor, this.$head).getBookmark();
  }
}
X.prototype.visible = !0;
class Il {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let ni = !1;
function ri(t) {
  !ni && !t.parent.inlineContent && (ni = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class Y extends X {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    ri(e), ri(n), super(e, n);
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
      return X.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new Y(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = P.empty) {
    if (super.replace(e, n), n == P.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof Y && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Dr(this.anchor, this.head);
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
    return new Y(e.resolve(n.anchor), e.resolve(n.head));
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
      let o = X.findFrom(n, r, !0) || X.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return X.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (X.findFrom(e, -r, !0) || X.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new Y(e, n);
  }
}
X.jsonID("text", Y);
class Dr {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Dr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return Y.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class G extends X {
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
    return r ? X.near(o) : new G(o);
  }
  content() {
    return new P(N.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof G && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Vs(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new G(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new G(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
G.prototype.visible = !1;
X.jsonID("node", G);
class Vs {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Dr(r, r) : new Vs(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && G.isSelectable(r) ? new G(n) : X.near(n);
  }
}
class _e extends X {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = P.empty) {
    if (n == P.empty) {
      e.delete(0, e.doc.content.size);
      let r = X.atStart(e.doc);
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
    return new _e(e);
  }
  map(e) {
    return new _e(e);
  }
  eq(e) {
    return e instanceof _e;
  }
  getBookmark() {
    return Vu;
  }
}
X.jsonID("all", _e);
const Vu = {
  map() {
    return this;
  },
  resolve(t) {
    return new _e(t);
  }
};
function Zt(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return Y.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && G.isSelectable(l))
        return G.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = Zt(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function si(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof we || s instanceof ve))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(X.near(t.doc.resolve(i), n));
}
function oi(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Qn {
  constructor(e, n, r) {
    this.name = e, this.init = oi(n.init, r), this.apply = oi(n.apply, r);
  }
}
new Qn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Qn("selection", {
  init(t, e) {
    return t.selection || X.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Qn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new Qn("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function jl(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = jl(s, e, {})), n[r] = s;
  }
  return n;
}
class lt {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && jl(e.props, this, this.props), this.key = e.key ? e.key.key : Dl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const us = /* @__PURE__ */ Object.create(null);
function Dl(t) {
  return t in us ? t + "$" + ++us[t] : (us[t] = 0, t + "$");
}
class Qe {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Dl(e);
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
const Us = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function zl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Ll = (t, e, n) => {
  let r = zl(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  if (!s) {
    let i = r.blockRange(), l = i && ln(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Ul(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (sn(o, "end") || G.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = jr(t.doc, r.before(i), r.after(i), P.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(sn(o, "end") ? X.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : G.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Uu = (t, e, n) => {
  let r = zl(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  return s ? Fl(t, s, e) : !1;
}, Ku = (t, e, n) => {
  let r = Pl(t, n);
  if (!r)
    return !1;
  let s = qs(r);
  return s ? Fl(t, s, e) : !1;
};
function Fl(t, e, n) {
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
  let c = jr(t.doc, o, a, P.empty);
  if (!c || c.from != o || c instanceof we && c.slice.size >= a - o)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(Y.create(u.doc, o)), n(u.scrollIntoView());
  }
  return !0;
}
function sn(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const $l = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Ks(r);
  }
  let i = o && o.nodeBefore;
  return !i || !G.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(G.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Ks(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Pl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const _l = (t, e, n) => {
  let r = Pl(t, n);
  if (!r)
    return !1;
  let s = qs(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Ul(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (sn(o, "start") || G.isSelectable(o))) {
    let i = jr(t.doc, r.before(), r.after(), P.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(sn(o, "start") ? X.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : G.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Bl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = qs(r);
  }
  let i = o && o.nodeAfter;
  return !i || !G.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(G.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function qs(t) {
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
const qu = (t, e) => {
  let n = t.selection, r = n instanceof G, s;
  if (r) {
    if (n.node.isTextblock || !Bt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Ir(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(G.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Gu = (t, e) => {
  let n = t.selection, r;
  if (n instanceof G) {
    if (n.node.isTextblock || !Bt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Ir(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Ju = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && ln(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, Hl = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Gs(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const Yu = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = Gs(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(X.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Wl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof _e || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = Gs(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(Y.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Vl = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (gt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && ln(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function Xu(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof G && e.selection.node.isBlock)
      return !r.parentOffset || !gt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Gs(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof Y || e.selection instanceof _e) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = gt(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = gt(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), m = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(m.index(), m.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const Qu = Xu(), Zu = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(G.create(t.doc, s))), !0);
};
function ed(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || Bt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Ul(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && ed(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, m = N.empty;
      for (let x = i.length - 1; x >= 0; x--)
        m = N.from(i[x].create(null, m));
      m = N.from(s.copy(m));
      let g = t.tr.step(new ve(e.pos - 1, h, e.pos, h, new P(m, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && Bt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : X.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && ln(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && sn(o, "start", !0) && sn(s, "end")) {
    let h = s, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let x = N.empty;
        for (let k = m.length - 1; k >= 0; k--)
          x = N.from(m[k].copy(x));
        let M = t.tr.step(new ve(e.pos - m.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new P(x, m.length, 0), 0, !0));
        n(M.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Kl(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(Y.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const td = Kl(-1), nd = Kl(1);
function rd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && Cl(i, t, e);
    return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
  };
}
function ii(t, e = null) {
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
function Js(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Js(Us, Ll, $l);
Js(Us, _l, Bl);
Js(Hl, Wl, Vl, Qu);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function sd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return od(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function od(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new gr(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new gr(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = Cl(o, n, r, e);
  return l ? (t && id(t, e, l, s, n), !0) : !1;
}
function id(t, e, n, r, s) {
  let o = N.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = N.from(n[u].type.create(n[u].attrs, o));
  t.step(new ve(e.start - (r ? 2 : 0), e.end, e.start, e.end, new P(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && gt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function ld(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? ad(e, n, t, o) : cd(e, n, o) : !0 : !1;
  };
}
function ad(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new ve(o - 1, i, o, i, new P(N.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new gr(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = ln(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return Bt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function cd(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= s.child(m).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? N.empty : N.from(s))))
    return !1;
  let d = o.pos, f = d + i.nodeSize;
  return r.step(new ve(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new P((l ? N.empty : N.from(s.copy(N.empty))).append(a ? N.empty : N.from(s.copy(N.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function ud(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = N.from(c ? t.create() : null), d = new P(N.from(t.create(null, N.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new ve(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Ht = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, ql = function(t, e, n, r) {
  return n && (li(t, e, n, r, -1) || li(t, e, n, r, 1));
}, dd = /^(img|br|input|textarea|hr)$/i;
function li(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : xr(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || Ys(t) || dd.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Ht(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? xr(t) : 0;
    } else
      return !1;
  }
}
function xr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function fd(t, e, n) {
  for (let r = e == 0, s = e == xr(t); r || s; ) {
    if (t == n)
      return !0;
    let o = Ht(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == xr(t);
  }
}
function Ys(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Gl = function(t) {
  return t.focusNode && ql(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Jl(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const it = typeof navigator < "u" ? navigator : null, ai = typeof document < "u" ? document : null, At = it && it.userAgent || "", Ts = /Edge\/(\d+)/.exec(At), Yl = /MSIE \d/.exec(At), Ms = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(At), $n = !!(Yl || Ms || Ts), Xl = Yl ? document.documentMode : Ms ? +Ms[1] : Ts ? +Ts[1] : 0, zr = !$n && /gecko\/(\d+)/i.test(At);
zr && +(/Firefox\/(\d+)/.exec(At) || [0, 0])[1];
const Rs = !$n && /Chrome\/(\d+)/.exec(At), yt = !!Rs, Ql = Rs ? +Rs[1] : 0, Wt = !$n && !!it && /Apple Computer/.test(it.vendor), Xs = Wt && (/Mobile\/\w+/.test(At) || !!it && it.maxTouchPoints > 2), Ve = Xs || (it ? /Mac/.test(it.platform) : !1), Zl = it ? /Win/.test(it.platform) : !1, Pn = /Android \d/.test(At), Qs = !!ai && "webkitFontSmoothing" in ai.documentElement.style, hd = Qs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function pd(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), o = s && s.size == 0, i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (Gl(n)) {
    for (a = i; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && G.isSelectable(d) && s.parent && !(d.isInline && fd(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new G(i == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let d = i, f = i;
      for (let h = 0; h < n.rangeCount; h++) {
        let m = n.getRangeAt(h);
        d = Math.min(d, t.docView.posFromDOM(m.startContainer, m.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(m.endContainer, m.endOffset, -1));
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
    c = ta(t, u, l, d);
  }
  return c;
}
function ea(t) {
  return t.editable ? t.hasFocus() : bd(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Zs(t, e = !1) {
  let n = t.state.selection;
  if (yd(t, n), !!ea(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && yt) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && ql(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      gd(t);
    else {
      let { anchor: r, head: s } = n, o, i;
      ci && !(n instanceof Y) && (n.$from.parent.inlineContent || (o = ui(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = ui(t, n.to))), t.docView.setSelection(r, s, t, e), ci && (o && di(o), i && di(i)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && md(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const ci = Wt || yt && Ql < 63;
function ui(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Wt && s && s.contentEditable == "false")
    return ds(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return ds(s);
    if (o)
      return ds(o);
  }
}
function ds(t) {
  return t.contentEditable = "true", Wt && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function di(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function md(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!ea(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function gd(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Ht(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && $n && Xl <= 11 && (n.disabled = !0, n.disabled = !1);
}
function yd(t, e) {
  if (e instanceof G) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (fi(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    fi(t);
}
function fi(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function ta(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || Y.between(e, n, r);
}
function bd(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Os(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && X.findFrom(o, e);
}
function bt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function hi(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Y)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return bt(t, new Y(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Os(t.state, e);
        return s && s instanceof G ? bt(t, s) : !1;
      } else if (!(Ve && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? G.isSelectable(o) ? bt(t, new G(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : Qs ? bt(t, new Y(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof G && r.node.isInline)
      return bt(t, new Y(e > 0 ? r.$to : r.$from));
    {
      let s = Os(t.state, e);
      return s ? bt(t, s) : !1;
    }
  }
}
function wr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function An(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Qt(t, e) {
  return e < 0 ? xd(t) : wd(t);
}
function xd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for (zr && n.nodeType == 1 && r < wr(n) && An(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (An(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (na(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && An(l, -1); )
          s = n.parentNode, o = Ht(l), l = l.previousSibling;
        if (l)
          n = l, r = wr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? Is(t, n, r) : s && Is(t, s, o);
}
function wd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = wr(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (An(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (na(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && An(l, 1); )
          o = l.parentNode, i = Ht(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = wr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && Is(t, o, i);
}
function na(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function vd(t, e) {
  for (; t && e == t.childNodes.length && !Ys(t); )
    e = Ht(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Sd(t, e) {
  for (; t && !e && !Ys(t); )
    e = Ht(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Is(t, e, n) {
  if (e.nodeType != 3) {
    let o, i;
    (i = vd(e, n)) ? (e = i, n = 0) : (o = Sd(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Gl(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Zs(t);
  }, 50);
}
function pi(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(yt || Zl) && n.parent.inlineContent) {
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
function mi(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Y && !r.empty || n.indexOf("s") > -1 || Ve && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = Os(t.state, e);
    if (i && i instanceof G)
      return bt(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof _e ? X.near(i, e) : X.findFrom(i, e);
    return l ? bt(t, l) : !1;
  }
  return !1;
}
function gi(t, e) {
  if (!(t.state.selection instanceof Y))
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
function yi(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Cd(t) {
  if (!Wt || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    yi(t, r, "true"), setTimeout(() => yi(t, r, "false"), 20);
  }
  return !1;
}
function kd(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Ad(t, e) {
  let n = e.keyCode, r = kd(e);
  if (n == 8 || Ve && n == 72 && r == "c")
    return gi(t, -1) || Qt(t, -1);
  if (n == 46 && !e.shiftKey || Ve && n == 68 && r == "c")
    return gi(t, 1) || Qt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ve && n == 66 && r == "c") {
    let s = n == 37 ? pi(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return hi(t, s, r) || Qt(t, s);
  } else if (n == 39 || Ve && n == 70 && r == "c") {
    let s = n == 39 ? pi(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return hi(t, s, r) || Qt(t, s);
  } else {
    if (n == 38 || Ve && n == 80 && r == "c")
      return mi(t, -1, r) || Qt(t, -1);
    if (n == 40 || Ve && n == 78 && r == "c")
      return Cd(t) || mi(t, 1, r) || Qt(t, 1);
    if (r == (Ve ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ra(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || Or.fromSchema(t.state.schema), l = ca(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = aa[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let m = l.createElement(u[h]);
      for (; a.firstChild; )
        m.appendChild(a.firstChild);
      a.appendChild(m), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${s} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function sa(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new P(N.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, m = Or.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = i.appendChild(document.createElement("p"));
        g && y.appendChild(m.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = Md(n), Qs && Rd(i);
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
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Dt.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Nd.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Od(bi(l, +u[1], +u[2]), u[4]);
  else if (l = P.maxOpen(Ed(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = bi(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Nd = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Ed(t, e) {
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
      if (c = i.length && o.length && ia(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = la(i[i.length - 1], o.length));
        let u = oa(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return N.from(i);
  }
  return t;
}
function oa(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, N.from(t));
  return t;
}
function ia(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = ia(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(N.from(oa(n, t, s + 1))));
  }
}
function la(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, la(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(N.empty, !0);
  return t.copy(n.append(r));
}
function js(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = js(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(N.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function bi(t, e, n) {
  return e < t.openStart && (t = new P(js(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new P(js(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const aa = {
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
let xi = null;
function ca() {
  return xi || (xi = document.implementation.createHTMLDocument("title"));
}
let fs = null;
function Td(t) {
  let e = window.trustedTypes;
  return e ? (fs || (fs = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), fs.createHTML(t)) : t;
}
function Md(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = ca().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && aa[r[1].toLowerCase()]) && (t = s.map((o) => "<" + o + ">").join("") + t + s.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = Td(t), s)
    for (let o = 0; o < s.length; o++)
      n = n.querySelector(s[o]) || n;
  return n;
}
function Rd(t) {
  let e = t.querySelectorAll(yt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function Od(t, e) {
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
  return new P(s, o, i);
}
const Ze = {}, Be = {};
function St(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Be.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !da(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Pn && yt && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Xs && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Jl(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Ad(t, n) ? n.preventDefault() : St(t, "key");
};
Be.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Be.keypress = (t, e) => {
  let n = e;
  if (da(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Ve && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof Y) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function Lr(t) {
  return { left: t.clientX, top: t.clientY };
}
function Id(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function eo(t, e, n, r, s) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let i = o.depth + 1; i > 0; i--)
    if (t.someProp(e, (l) => i > o.depth ? l(t, n, o.nodeAfter, o.before(i), s, !0) : l(t, n, o.node(i), o.before(i), s, !1)))
      return !0;
  return !1;
}
function nn(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function jd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && G.isSelectable(r) ? (nn(t, new G(n)), !0) : !1;
}
function Dd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof G && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let l = i > o.depth ? o.nodeAfter : o.node(i);
    if (G.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? s = o.before(n.$from.depth) : s = o.before(i);
      break;
    }
  }
  return s != null ? (nn(t, G.create(t.state.doc, s)), !0) : !1;
}
function zd(t, e, n, r, s) {
  return eo(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? Dd(t, n) : jd(t, n));
}
function Ld(t, e, n, r) {
  return eo(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function Fd(t, e, n, r) {
  return eo(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || $d(t, n, r);
}
function $d(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (nn(t, Y.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let i = o > s.depth ? s.nodeAfter : s.node(o), l = s.before(o);
    if (i.inlineContent)
      nn(t, Y.create(r, l + 1, l + 1 + i.content.size));
    else if (G.isSelectable(i))
      nn(t, G.create(r, l));
    else
      continue;
    return !0;
  }
}
function to(t) {
  return vr(t);
}
const ua = Ve ? "metaKey" : "ctrlKey";
Ze.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = to(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && Id(n, t.input.lastClick) && !n[ua] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let i = t.posAtCoords(Lr(n));
  i && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Pd(t, i, n, !!r)) : (o == "doubleClick" ? Ld : Fd)(t, i.pos, i.inside, n) ? n.preventDefault() : St(t, "pointer"));
};
class Pd {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[ua], this.allowDefault = r.shiftKey;
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
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof G && c.from <= i && c.to > i) && (this.mightDrag = {
      node: o,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && zr && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), St(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Zs(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Lr(e))), this.updateAllowDefault(e), this.allowDefault || !n ? St(this.view, "pointer") : zd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Wt && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    yt && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (nn(this.view, X.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : St(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), St(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ze.touchstart = (t) => {
  t.input.lastTouch = Date.now(), to(t), St(t, "pointer");
};
Ze.touchmove = (t) => {
  t.input.lastTouch = Date.now(), St(t, "pointer");
};
Ze.contextmenu = (t) => to(t);
function da(t, e) {
  return t.composing ? !0 : Wt && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const _d = Pn ? 5e3 : -1;
Be.compositionstart = Be.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof Y && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || yt && Zl && Bd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), vr(t, !0), t.markCursor = null;
    else if (vr(t, !e.selection.empty), zr && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  fa(t, _d);
};
function Bd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Be.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, fa(t, 20));
};
function fa(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => vr(t), e));
}
function Hd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Wd()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Wd() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function vr(t, e = !1) {
  if (!(Pn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Hd(t), e || t.docView && t.docView.dirty) {
      let n = pd(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Vd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Rn = $n && Xl < 15 || Xs && hd < 604;
Ze.copy = Be.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = Rn ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = ra(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Vd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Ud(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Kd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Ds(t, r.value, null, s, e) : Ds(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function Ds(t, e, n, r, s) {
  let o = sa(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || P.empty)))
    return !0;
  if (!o)
    return !1;
  let i = Ud(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function ha(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Be.paste = (t, e) => {
  let n = e;
  if (t.composing && !Pn)
    return;
  let r = Rn ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Ds(t, ha(r), r.getData("text/html"), s, n) ? n.preventDefault() : Kd(t, n);
};
class qd {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const Gd = Ve ? "altKey" : "ctrlKey";
function pa(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[Gd];
}
Ze.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords(Lr(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof G ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = G.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = G.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = ra(t, l);
  (!n.dataTransfer.files.length || !yt || Ql > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Rn ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Rn || n.dataTransfer.setData("text/plain", c), t.dragging = new qd(u, pa(t, n), i);
};
Ze.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Be.dragover = Be.dragenter = (t, e) => e.preventDefault();
Be.drop = (t, e) => {
  try {
    Jd(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function Jd(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(Lr(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = sa(t, ha(e.dataTransfer), Rn ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && pa(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || P.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? Fu(t.state.doc, s.pos, o) : s.pos;
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
  if (u && G.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new G(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, y, x) => h = x), a.setSelection(ta(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Ze.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Zs(t);
  }, 20));
};
Ze.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Ze.beforeinput = (t, e) => {
  if (yt && Pn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Jl(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Be)
  Ze[t] = Be[t];
function On(t, e) {
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
class Sr {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || zt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new Ue(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Sr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && On(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ct {
  constructor(e, n) {
    this.attrs = e, this.spec = n || zt;
  }
  map(e, n, r, s) {
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new Ue(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof Ct && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ct;
  }
  destroy() {
  }
}
class no {
  constructor(e, n) {
    this.attrs = e, this.spec = n || zt;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new Ue(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof no && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  destroy() {
  }
}
class Ue {
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
    return new Ue(e, n, this.type);
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
    return new Ue(e, e, new Sr(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new Ue(e, n, new Ct(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new Ue(e, n, new no(r, s));
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
    return this.type instanceof Ct;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Sr;
  }
}
const en = [], zt = {};
class he {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : en, this.children = n.length ? n : en;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Cr(n, e, 0, zt) : je;
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
    return this == je || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || zt);
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
    return this.children.length ? Yd(this.children, i || [], e, n, r, s, o) : i ? new he(i.sort(Lt), en) : je;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == je ? he.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = ga(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, Cr(u, l, c + 1, zt)), o += 3;
      }
    });
    let i = ma(o ? ya(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new he(i.length ? this.local.concat(i).sort(Lt) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == je ? this : this.removeInner(e, 0);
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
      c != je ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (s.length) {
      for (let o = 0, i; o < e.length; o++)
        if (i = e[o])
          for (let l = 0; l < s.length; l++)
            s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new he(s, r) : je;
  }
  forChild(e, n) {
    if (this == je)
      return this;
    if (n.isLeaf)
      return he.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof Ct) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new he(s.sort(Lt), en);
      return r ? new Rt([l, r]) : l;
    }
    return r || je;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof he) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return ro(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == je)
      return en;
    if (e.inlineContent || !this.local.some(Ct.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Ct || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
he.empty = new he([], []);
he.removeOverlap = ro;
const je = he.empty;
class Rt {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, zt));
    return Rt.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return he.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].forChild(e, n);
      o != je && (o instanceof Rt ? r = r.concat(o.members) : r.push(o));
    }
    return Rt.from(r);
  }
  eq(e) {
    if (!(e instanceof Rt) || e.members.length != this.members.length)
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
    return n ? ro(r ? n : n.sort(Lt)) : en;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return je;
      case 1:
        return e[0];
      default:
        return new Rt(e.every((n) => n instanceof he) ? e : e.reduce((n, r) => n.concat(r instanceof he ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function Yd(t, e, n, r, s, o, i) {
  let l = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, m, g) => {
      let y = g - m - (h - f);
      for (let x = 0; x < l.length; x += 3) {
        let M = l[x + 1];
        if (M < 0 || f > M + u - d)
          continue;
        let k = l[x] + u - d;
        h >= k ? l[x + 1] = f <= k ? -2 : -1 : f >= u && y && (l[x] += y, l[x + 1] += y);
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
      let f = n.map(t[c + 1] + o, -1), h = f - s, { index: m, offset: g } = r.content.findIndex(d), y = r.maybeChild(m);
      if (y && g == d && g + y.nodeSize == h) {
        let x = l[c + 2].mapInner(n, y, u + 1, t[c] + o + 1, i);
        x != je ? (l[c] = d, l[c + 1] = h, l[c + 2] = x) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Xd(l, t, e, n, s, o, i), u = Cr(c, r, 0, i);
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
  return new he(e.sort(Lt), l);
}
function ma(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new Ue(s.from + e, s.to + e, s.type));
  }
  return n;
}
function Xd(t, e, n, r, s, o, i) {
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
function ga(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function ya(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Cr(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = ga(t, l, a + n);
    if (c) {
      o = !0;
      let u = Cr(c, l, n + a + 1, r);
      u != je && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = ma(o ? ya(t) : t, -n).sort(Lt);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new he(i, s) : je;
}
function Lt(t, e) {
  return t.from - e.from || t.to - e.to;
}
function ro(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let o = e[s];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[s] = o.copy(o.from, r.to), wi(e, s + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), wi(e, s, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function wi(t, e, n) {
  for (; e < t.length && Lt(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var kt = {
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
}, kr = {
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
}, Qd = typeof navigator < "u" && /Mac/.test(navigator.platform), Zd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ke = 0; ke < 10; ke++) kt[48 + ke] = kt[96 + ke] = String(ke);
for (var ke = 1; ke <= 24; ke++) kt[ke + 111] = "F" + ke;
for (var ke = 65; ke <= 90; ke++)
  kt[ke] = String.fromCharCode(ke + 32), kr[ke] = String.fromCharCode(ke);
for (var hs in kt) kr.hasOwnProperty(hs) || (kr[hs] = kt[hs]);
function ef(t) {
  var e = Qd && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Zd && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? kr : kt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const tf = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), nf = typeof navigator < "u" && /Win/.test(navigator.platform);
function rf(t) {
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
      tf ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function sf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[rf(n)] = t[n];
  return e;
}
function ps(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function of(t) {
  let e = sf(t);
  return function(n, r) {
    let s = ef(r), o, i = e[ps(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[ps(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(nf && r.ctrlKey && r.altKey) && (o = kt[r.keyCode]) && o != s) {
        let l = e[ps(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var lf = Object.defineProperty, so = (t, e) => {
  for (var n in e)
    lf(t, n, { get: e[n], enumerable: !0 });
};
function ba(t) {
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
var af = class {
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
        Object.entries(n).map(([d, f]) => [d, (...m) => {
          const g = this.buildProps(a, e), y = f(...m)(g);
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
      state: ba({
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
}, xa = {};
so(xa, {
  blur: () => cf,
  clearContent: () => uf,
  clearNodes: () => df,
  command: () => ff,
  createParagraphNear: () => hf,
  cut: () => pf,
  deleteCurrentNode: () => mf,
  deleteNode: () => gf,
  deleteRange: () => yf,
  deleteSelection: () => bf,
  enter: () => xf,
  exitCode: () => wf,
  extendMarkRange: () => Sf,
  first: () => Cf,
  focus: () => Nf,
  forEach: () => Ef,
  insertContent: () => Tf,
  insertContentAt: () => Of,
  joinBackward: () => Df,
  joinDown: () => jf,
  joinForward: () => zf,
  joinItemBackward: () => Lf,
  joinItemForward: () => Ff,
  joinTextblockBackward: () => $f,
  joinTextblockForward: () => Pf,
  joinUp: () => If,
  keyboardShortcut: () => Bf,
  lift: () => Hf,
  liftEmptyBlock: () => Wf,
  liftListItem: () => Vf,
  newlineInCode: () => Uf,
  resetAttributes: () => Kf,
  scrollIntoView: () => qf,
  selectAll: () => Gf,
  selectNodeBackward: () => Jf,
  selectNodeForward: () => Yf,
  selectParentNode: () => Xf,
  selectTextblockEnd: () => Qf,
  selectTextblockStart: () => Zf,
  setContent: () => th,
  setMark: () => hh,
  setMeta: () => ph,
  setNode: () => mh,
  setNodeSelection: () => gh,
  setTextDirection: () => yh,
  setTextSelection: () => bh,
  sinkListItem: () => xh,
  splitBlock: () => wh,
  splitListItem: () => vh,
  toggleList: () => Sh,
  toggleMark: () => Ch,
  toggleNode: () => kh,
  toggleWrap: () => Ah,
  undoInputRule: () => Nh,
  unsetAllMarks: () => Eh,
  unsetMark: () => Th,
  unsetTextDirection: () => Mh,
  updateAttributes: () => Rh,
  wrapIn: () => Oh,
  wrapInList: () => Ih
});
var cf = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), uf = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), df = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const m = ln(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (m || m === 0) && e.lift(h, m);
    });
  }), !0;
}, ff = (t) => (e) => t(e), hf = () => ({ state: t, dispatch: e }) => Wl(t, e), pf = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new Y(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, mf = () => ({ tr: t, dispatch: e }) => {
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
function Ne(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var gf = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = Ne(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), c = o.after(i);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, yf = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, bf = () => ({ state: t, dispatch: e }) => Us(t, e), xf = () => ({ commands: t }) => t.keyboardShortcut("Enter"), wf = () => ({ state: t, dispatch: e }) => Yu(t, e);
function vf(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Ar(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : vf(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function wa(t, e, n = {}) {
  return t.find((r) => r.type === e && Ar(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function vi(t, e, n = {}) {
  return !!wa(t, e, n);
}
function va(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !wa([...s.node.marks], e, n)))
    return;
  let i = s.index, l = t.start() + s.offset, a = i + 1, c = l + s.node.nodeSize;
  for (; i > 0 && vi([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, l -= t.parent.child(i).nodeSize;
  for (; a < t.parent.childCount && vi([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Nt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var Sf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = Nt(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = va(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = Y.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Cf = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Sa(t) {
  return t instanceof Y;
}
function Ot(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function kf(t, e = null) {
  if (!e)
    return null;
  const n = X.atStart(t), r = X.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? Y.create(t, Ot(0, s, o), Ot(t.content.size, s, o)) : Y.create(t, Ot(e, s, o), Ot(e, s, o));
}
function Si() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Nr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Af() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var Nf = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Nr() || Si()) && r.dom.focus(), Af() && !Nr() && !Si() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !Sa(n.state.selection))
    return i(), !0;
  const l = kf(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Ef = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), Tf = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), Ca = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Ca(r);
  }
  return t;
};
function Zn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ca(n);
}
function In(t, e, n) {
  if (t instanceof ot || t instanceof N)
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
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), In("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, l = "";
      const a = new hu({
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
      if (n.slice ? Dt.fromSchema(a).parseSlice(Zn(t), n.parseOptions) : Dt.fromSchema(a).parse(Zn(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = Dt.fromSchema(e);
    return n.slice ? o.parseSlice(Zn(t), n.parseOptions).content : o.parse(Zn(t), n.parseOptions);
  }
  return In("", e, n);
}
function Mf(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof we || s instanceof ve))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((l, a, c, u) => {
    i === 0 && (i = u);
  }), t.setSelection(X.near(t.doc.resolve(i), n));
}
var Rf = (t) => !("type" in t), Of = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
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
        In(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = In(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Rf(l) ? l : [l]).forEach((y) => {
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
        e.forEach((x) => {
          x.text && (y += x.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else {
      g = l;
      const y = r.doc.resolve(u), x = y.node(), M = y.parentOffset === 0, k = x.isText || x.isTextblock, S = x.content.size > 0;
      M && k && S && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && Mf(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, If = () => ({ state: t, dispatch: e }) => qu(t, e), jf = () => ({ state: t, dispatch: e }) => Gu(t, e), Df = () => ({ state: t, dispatch: e }) => Ll(t, e), zf = () => ({ state: t, dispatch: e }) => _l(t, e), Lf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Ir(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Ff = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Ir(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, $f = () => ({ state: t, dispatch: e }) => Uu(t, e), Pf = () => ({ state: t, dispatch: e }) => Ku(t, e);
function ka() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function _f(t) {
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
      Nr() || ka() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var Bf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = _f(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
function oo(t, e, n = {}) {
  const { from: r, to: s, empty: o } = t.selection, i = e ? Ne(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, s, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), m = Math.min(s, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: m
    });
  });
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => Ar(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var Hf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ne(t, n.schema);
  return oo(n, s, e) ? Ju(n, r) : !1;
}, Wf = () => ({ state: t, dispatch: e }) => Vl(t, e), Vf = (t) => ({ state: e, dispatch: n }) => {
  const r = Ne(t, e.schema);
  return ld(r)(e, n);
}, Uf = () => ({ state: t, dispatch: e }) => Hl(t, e);
function Aa(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ci(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var Kf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Aa(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = Ne(t, r.schema)), l === "mark" && (i = Nt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, Ci(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, i.create(Ci(f.attrs, e))));
      });
    });
  }), a;
}, qf = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Gf = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new _e(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Jf = () => ({ state: t, dispatch: e }) => $l(t, e), Yf = () => ({ state: t, dispatch: e }) => Bl(t, e), Xf = () => ({ state: t, dispatch: e }) => Zu(t, e), Qf = () => ({ state: t, dispatch: e }) => nd(t, e), Zf = () => ({ state: t, dispatch: e }) => td(t, e);
function eh(t, e, n = {}, r = {}) {
  return In(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var th = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = eh(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function nh(t, e) {
  const n = Nt(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function rh(t, e) {
  const n = new Ol(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function sh(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Na(t, e) {
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
function io(t) {
  return (e) => Na(e.$from, t);
}
function on(t, e, n) {
  return t.config[e] === void 0 && t.parent ? on(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? on(t.parent, e, n) : null
  }) : t.config[e];
}
function oh(t) {
  return typeof t == "function";
}
function jn(t, e = void 0, ...n) {
  return oh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Ea(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function an(...t) {
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
function ih(t, e, n) {
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
function lh(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function ah(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function ch(t) {
  const e = ah(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function uh(t) {
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
  }), ch(r);
}
function cr(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function dh(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? Nt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Ar(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const x = Math.max(h, y), M = Math.min(m, y + g.nodeSize), k = M - x;
      i += k, l.push(
        ...g.marks.map((S) => ({
          mark: S,
          from: x,
          to: M
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Ar(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function ki(t, e) {
  const { nodeExtensions: n } = Ea(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = jn(on(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Ta(t, {
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
      s !== !1 && (Ta(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function fh(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (Sa(s) && (o = s.$cursor), o) {
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
        const h = !f || f.type.allowsMarkType(n), m = !!n.isInSet(u.marks) || !u.marks.some((g) => g.type.excludes(n));
        c = h && m;
      }
      return !c;
    }), c;
  });
}
var hh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = Nt(t, r.schema);
  if (s)
    if (i) {
      const c = nh(r, a);
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
          const m = Math.max(h, u), g = Math.min(h + f.nodeSize, d);
          f.marks.find((x) => x.type === a) ? f.marks.forEach((x) => {
            a === x.type && n.addMark(
              m,
              g,
              a.create({
                ...x.attrs,
                ...e
              })
            );
          }) : n.addMark(m, g, a.create(e));
        });
      });
  return fh(r, n, a);
}, ph = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), mh = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = Ne(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => ii(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => ii(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, gh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = Ot(t, 0, r.content.size), o = G.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, yh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, bh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = Y.atStart(r).from, l = Y.atEnd(r).to, a = Ot(s, i, l), c = Ot(o, i, l), u = Y.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, xh = (t) => ({ state: e, dispatch: n }) => {
  const r = Ne(t, e.schema);
  return ud(r)(e, n);
};
function Ai(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var wh = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = cr(c, l.node().type.name, l.node().attrs);
  if (o instanceof G && o.node.isBlock)
    return !l.parentOffset || !gt(i, l.pos) ? !1 : (r && (t && Ai(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : sh(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = gt(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !m && gt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (o instanceof Y && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && Ai(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, vh = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const l = Ne(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
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
      let x = N.empty;
      const M = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let T = a.depth - M; T >= a.depth - 3; T -= 1)
        x = N.from(a.node(T).copy(x));
      const k = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), S = {
        ...cr(f, a.node().type.name, a.node().attrs),
        ...e
      }, R = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(S)) || void 0;
      x = x.append(N.from(l.createAndFill(null, R) || void 0));
      const E = a.before(a.depth - (M - 1));
      n.replace(E, a.after(-k), new P(x, 4 - M, 0));
      let z = -1;
      n.doc.nodesBetween(E, n.doc.content.size, (T, B) => {
        if (z > -1)
          return !1;
        T.isTextblock && T.content.size === 0 && (z = B + 1);
      }), z > -1 && n.setSelection(Y.near(n.doc.resolve(z))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, m = {
    ...cr(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...cr(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: m }];
  if (!gt(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: x, storedMarks: M } = r, { splittableMarks: k } = o.extensionManager, S = M || x.$to.parentOffset && x.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !S || !s)
      return !0;
    const R = S.filter((E) => k.includes(E.type.name));
    n.ensureMarks(R);
  }
  return !0;
}, ms = (t, e) => {
  const n = io((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Bt(t.doc, n.pos) && t.join(n.pos), !0;
}, gs = (t, e) => {
  const n = io((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Bt(t.doc, r) && t.join(r), !0;
}, Sh = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = Ne(t, i.schema), m = Ne(e, i.schema), { selection: g, storedMarks: y } = i, { $from: x, $to: M } = g, k = x.blockRange(M), S = y || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const R = io((E) => ki(E.type.name, d))(g);
  if (k.depth >= 1 && R && k.depth - R.depth <= 1) {
    if (R.node.type === h)
      return c.liftListItem(m);
    if (ki(R.node.type.name, d) && h.validContent(R.node.content) && l)
      return a().command(() => (o.setNodeMarkup(R.pos, h), !0)).command(() => ms(o, h)).command(() => gs(o, h)).run();
  }
  return !n || !S || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ms(o, h)).command(() => gs(o, h)).run() : a().command(() => {
    const E = u().wrapInList(h, r), z = S.filter((T) => f.includes(T.type.name));
    return o.ensureMarks(z), E ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ms(o, h)).command(() => gs(o, h)).run();
}, Ch = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = Nt(t, r.schema);
  return dh(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, kh = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = Ne(t, r.schema), i = Ne(e, r.schema), l = oo(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, Ah = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = Ne(t, n.schema);
  return oo(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Nh = () => ({ state: t, dispatch: e }) => {
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
}, Eh = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Th = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = Nt(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const m = (o = c.marks().find((y) => y.type === a)) == null ? void 0 : o.attrs, g = va(c, a, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Mh = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Rh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Aa(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = Ne(t, r.schema)), l === "mark" && (i = Nt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, m, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (y, x) => {
      o && o === y.type && (a = !0, m = Math.max(x, u), g = Math.min(x + y.nodeSize, d), f = x, h = y);
    }) : r.doc.nodesBetween(u, d, (y, x) => {
      x < u && o && o === y.type && (a = !0, m = Math.max(x, u), g = Math.min(x + y.nodeSize, d), f = x, h = y), x >= u && x <= d && (o && o === y.type && (a = !0, s && n.setNodeMarkup(x, void 0, {
        ...y.attrs,
        ...e
      })), i && y.marks.length && y.marks.forEach((M) => {
        if (i === M.type && (a = !0, s)) {
          const k = Math.max(x, u), S = Math.min(x + y.nodeSize, d);
          n.addMark(
            k,
            S,
            i.create({
              ...M.attrs,
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
        m,
        g,
        i.create({
          ...y.attrs,
          ...e
        })
      );
    }));
  }), a;
}, Oh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ne(t, n.schema);
  return rd(s, e)(n, r);
}, Ih = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ne(t, n.schema);
  return sd(s, e)(n, r);
}, jh = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function Dh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function er(t) {
  return Dh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Ma(t, e) {
  const n = { ...t };
  return er(t) && er(e) && Object.keys(e).forEach((r) => {
    er(e[r]) && er(t[r]) ? n[r] = Ma(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var lo = class {
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
      ...jn(
        on(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...jn(
        on(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Ma(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, zh = class Ra extends lo {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Ra(n);
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
}, Lh = {};
so(Lh, {
  ClipboardTextSerializer: () => Fh,
  Commands: () => $h,
  Delete: () => Ph,
  Drop: () => _h,
  Editable: () => Bh,
  FocusEvents: () => Hh,
  Keymap: () => Wh,
  Paste: () => Vh,
  Tabindex: () => Uh,
  TextDirection: () => Kh,
  focusEventsPluginKey: () => Ia
});
var et = class Oa extends lo {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Oa(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Fh = et.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new lt({
        key: new Qe("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = lh(n);
            return ih(r, { from: i, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), $h = et.create({
  name: "commands",
  addCommands() {
    return {
      ...xa
    };
  }
}), Ph = et.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = rh(t.before, [t, ...e]);
      uh(u).forEach((h) => {
        u.mapping.mapResult(h.oldRange.from).deletedAfter && u.mapping.mapResult(h.oldRange.to).deletedBefore && u.before.nodesBetween(h.oldRange.from, h.oldRange.to, (m, g) => {
          const y = g + m.nodeSize - 2, x = h.oldRange.from <= g && y <= h.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: m,
            from: g,
            to: y,
            newFrom: u.mapping.map(g),
            newTo: u.mapping.map(y),
            deletedRange: h.oldRange,
            newRange: h.newRange,
            partial: !x,
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        });
      });
      const f = u.mapping;
      u.steps.forEach((h, m) => {
        var g, y;
        if (h instanceof Xe) {
          const x = f.slice(m).map(h.from, -1), M = f.slice(m).map(h.to), k = f.invert().map(x, -1), S = f.invert().map(M), R = (g = u.doc.nodeAt(x - 1)) == null ? void 0 : g.marks.some((z) => z.eq(h.mark)), E = (y = u.doc.nodeAt(M)) == null ? void 0 : y.marks.some((z) => z.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: k,
              to: S
            },
            newRange: {
              from: x,
              to: M
            },
            partial: !!(E || R),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), _h = et.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new lt({
        key: new Qe("tiptapDrop"),
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
}), Bh = et.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new lt({
        key: new Qe("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ia = new Qe("focusEvents"), Hh = et.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new lt({
        key: Ia,
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
}), Wh = et.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, m = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = m.parent.type.spec.isolating, y = d.pos - d.parentOffset, x = g && m.parent.childCount === 1 ? y === d.pos : X.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !x || x && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
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
    return Nr() || ka() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new lt({
        key: new Qe("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: l } = e.selection, a = X.atStart(e.doc).from, c = X.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !Ta(n.doc))
            return;
          const f = n.tr, h = ba({
            state: n,
            transaction: f
          }), { commands: m } = new af({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Vh = et.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new lt({
        key: new Qe("tiptapPaste"),
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
}), Uh = et.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new lt({
        key: new Qe("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Kh = et.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Ea(this.extensions);
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
      new lt({
        key: new Qe("textDirection"),
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
function qh(t) {
  return new jh({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = jn(t.getAttributes, void 0, r) || {}, { tr: o } = e, i = n.from;
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
var Gh = (t) => "touches" in t, Jh = class {
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Gh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, Yh = {};
so(Yh, {
  createAtomBlockMarkdownSpec: () => Xh,
  createBlockMarkdownSpec: () => Qh,
  createInlineMarkdownSpec: () => tp,
  parseAttributes: () => ao,
  parseIndentedBlocks: () => np,
  renderNestedMarkdownContent: () => rp,
  serializeAttributes: () => co
});
function ao(t) {
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
function co(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function Xh(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = ao,
    serializeAttributes: s = co,
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
        const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), m = u.match(h);
        if (!m)
          return;
        const g = m[1] || "", y = r(g);
        if (!i.find((M) => !(M in y)))
          return {
            type: e,
            raw: m[0],
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
function Qh(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = ao,
    serializeAttributes: o = co,
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
      const m = { ...i, ...d.attributes };
      return f.createNode(e, m, h);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(d) {
        var f;
        const h = new RegExp(`^:::${c}`, "m"), m = (f = d.match(h)) == null ? void 0 : f.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(d, f, h) {
        var m;
        const g = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), y = d.match(g);
        if (!y)
          return;
        const [x, M = ""] = y, k = s(M);
        let S = 1;
        const R = x.length;
        let E = "";
        const z = /^:::([\w-]*)(\s.*)?/gm, T = d.slice(R);
        for (z.lastIndex = 0; ; ) {
          const B = z.exec(T);
          if (B === null)
            break;
          const D = B.index, O = B[1];
          if (!((m = B[2]) != null && m.endsWith(":::"))) {
            if (O)
              S += 1;
            else if (S -= 1, S === 0) {
              const L = T.slice(0, D);
              E = L.trim();
              const F = d.slice(0, R + D + B[0].length);
              let w = [];
              if (E)
                if (l === "block")
                  for (w = h.blockTokens(L), w.forEach((te) => {
                    te.text && (!te.tokens || te.tokens.length === 0) && (te.tokens = h.inlineTokens(te.text));
                  }); w.length > 0; ) {
                    const te = w[w.length - 1];
                    if (te.type === "paragraph" && (!te.text || te.text.trim() === ""))
                      w.pop();
                    else
                      break;
                  }
                else
                  w = h.inlineTokens(E);
              return {
                type: e,
                raw: F,
                attributes: k,
                content: E,
                tokens: w
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d, f) => {
      const h = u(d.attrs || {}), m = o(h), g = m ? ` {${m}}` : "", y = f.renderChildren(d.content || [], `

`);
      return `:::${c}${g}

${y}

:::`;
    }
  };
}
function Zh(t) {
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
function ep(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function tp(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = Zh,
    serializeAttributes: o = ep,
    defaultAttributes: i = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = t, c = n || e, u = (f) => {
    if (!a)
      return f;
    const h = {};
    return a.forEach((m) => {
      const g = typeof m == "string" ? m : m.name, y = typeof m == "string" ? void 0 : m.skipIfDefault;
      if (g in f) {
        const x = f[g];
        if (y !== void 0 && x === y)
          return;
        h[g] = x;
      }
    }), h;
  }, d = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (f, h) => {
      const m = { ...i, ...f.attributes };
      if (l)
        return h.createNode(e, m);
      const g = r ? r(f) : f.content || "";
      return g ? h.createNode(e, m, [h.createTextNode(g)]) : h.createNode(e, m, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(f) {
        const h = l ? new RegExp(`\\[${d}\\s*[^\\]]*\\]`) : new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`), m = f.match(h), g = m?.index;
        return g !== void 0 ? g : -1;
      },
      tokenize(f, h, m) {
        const g = l ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), y = f.match(g);
        if (!y)
          return;
        let x = "", M = "";
        if (l) {
          const [, S] = y;
          M = S;
        } else {
          const [, S, R] = y;
          M = S, x = R || "";
        }
        const k = s(M.trim());
        return {
          type: e,
          raw: y[0],
          content: x.trim(),
          attributes: k
        };
      }
    },
    renderMarkdown: (f) => {
      let h = "";
      r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter((x) => x.type === "text").map((x) => x.text).join(""));
      const m = u(f.attrs || {}), g = o(m), y = g ? ` ${g}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${h}[/${c}]`;
    }
  };
}
function np(t, e, n) {
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
    const m = e.extractItemData(h), { indentLevel: g, mainContent: y } = m;
    c = `${c}${f}
`;
    const x = [y];
    for (u += 1; u < l.length; ) {
      const R = l[u];
      if (R.trim() === "") {
        const z = l.slice(u + 1).findIndex((D) => D.trim() !== "");
        if (z === -1)
          break;
        if ((((s = (r = l[u + 1 + z].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          x.push(R), c = `${c}${R}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = R.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        x.push(R), c = `${c}${R}
`, u += 1;
      else
        break;
    }
    let M;
    const k = x.slice(1);
    if (k.length > 0) {
      const R = k.map((E) => E.slice(g + d)).join(`
`);
      R.trim() && (e.customNestedParser ? M = e.customNestedParser(R) : M = n.blockTokens(R));
    }
    const S = e.createToken(m, M);
    a.push(S);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function rp(t, e, n, r) {
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
var _n = class ja extends lo {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new ja(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, sp = zh.create({
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
    return ["u", an(this.options.HTMLAttributes, t), 0];
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
}), op = sp, ip = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, lp = _n.create({
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
    return ["img", an(this.options.HTMLAttributes, t)];
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
      const c = new Jh({
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
      qh({
        find: ip,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), ap = lp;
let zs, Ls;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  zs = (e) => t.get(e), Ls = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  zs = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, Ls = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var de = class {
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
    return zs(t) || Ls(t, cp(t));
  }
};
function cp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = up(t), n = t.childCount, r = [];
  let s = 0, o = null;
  const i = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let m = 0; ; m++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (m == d.childCount) break;
      const g = d.child(m), { colspan: y, rowspan: x, colwidth: M } = g.attrs;
      for (let k = 0; k < x; k++) {
        if (k + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: x - k
          });
          break;
        }
        const S = s + k * e;
        for (let R = 0; R < y; R++) {
          r[S + R] == 0 ? r[S + R] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - R
          });
          const E = M && M[R];
          if (E) {
            const z = (S + R) % e * 2, T = i[z];
            T == null || T != E && i[z + 1] == 1 ? (i[z] = E, i[z + 1] = 1) : T == E && i[z + 1]++;
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
  const l = new de(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
  return a && dp(l, i, t), l;
}
function up(t) {
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
function dp(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = fp(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function fp(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Ee(t) {
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
const xt = new Qe("selectingCells");
function Pt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function hp(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function tt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Fr(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = Pt(e.$head) || pp(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function pp(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function Fs(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function mp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function uo(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Da(t, e, n) {
  const r = t.node(-1), s = de.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function _t(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function za(t, e, n = 1) {
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
function gp(t, e, n) {
  const r = Ee(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var se = class pt extends X {
  constructor(e, n = e) {
    const r = e.node(-1), s = de.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Il(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (Fs(r) && Fs(s) && uo(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? pt.rowSelection(r, s) : o && this.isColSelection() ? pt.colSelection(r, s) : new pt(r, s);
    }
    return Y.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = de.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, i = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = n.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let m = e.nodeAt(f);
        if (!m) throw new RangeError(`No cell with offset ${f} found`);
        const g = s.left - h.left, y = h.right - s.right;
        if (g > 0 || y > 0) {
          let x = m.attrs;
          if (g > 0 && (x = _t(x, 0, g)), y > 0 && (x = _t(x, x.colspan - y, y)), h.left < s.left) {
            if (m = m.type.createAndFill(x), !m) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(x)}`);
          } else m = m.type.create(x, m.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const x = {
            ...m.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? m = m.type.createAndFill(x) : m = m.type.create(x, m.content);
        }
        c.push(m);
      }
      i.push(e.child(a).copy(N.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new P(N.from(l), 1, 1);
  }
  replace(e, n = P.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? P.empty : n);
    }
    const o = X.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new P(N.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = de.get(n), s = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = de.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new pt(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = de.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof pt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = de.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new pt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new pt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new pt(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new yp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
se.prototype.visible = !1;
X.jsonID("cell", se);
var yp = class La {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new La(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && uo(n, r) ? new se(n, r) : X.near(r, 1);
  }
};
function bp(t) {
  if (!(t.selection instanceof se)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(Ue.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), he.create(t.doc, e);
}
function xp({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function wp({ $from: t, $to: e }) {
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
function vp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof G && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = se.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = se.rowSelection(l, l);
    } else if (!n) {
      const l = de.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = se.create(s, a + 1, c);
    }
  } else r instanceof Y && xp(r) ? o = Y.create(s, r.from) : r instanceof Y && wp(r) && (o = Y.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const Sp = new Qe("fix-tables");
function Fa(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? Fa(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function $a(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = Cp(t, s, o, n));
  };
  return e ? e.doc != t.doc && Fa(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Cp(t, e, n, r) {
  const s = de.get(e);
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
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, _t(d, d.colspan - c.n, c.n));
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
      const m = [];
      for (let y = 0; y < f; y++) {
        const x = Ee(t.schema)[h].createAndFill();
        x && m.push(x);
      }
      const g = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), m);
    }
    c = d;
  }
  return r.setMeta(Sp, { fixTables: !0 });
}
function at(t) {
  const e = t.selection, n = Fr(t), r = n.node(-1), s = n.start(-1), o = de.get(r);
  return {
    ...e instanceof se ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function Pa(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  gp(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, za(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? Ee(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function kp(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t);
    e(Pa(t.tr, n, n.left));
  }
  return !0;
}
function Ap(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t);
    e(Pa(t.tr, n, n.right));
  }
  return !0;
}
function Np(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, _t(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function Ep(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Np(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = de.get(o);
    }
    e(r);
  }
  return !0;
}
function Tp(t, e, n) {
  var r;
  const s = Ee(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function _a(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  Tp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? Ee(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && i.push(f);
  }
  return t.insert(o, Ee(r.type.schema).row.create(null, i)), t;
}
function Mp(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t);
    e(_a(t.tr, n, n.top));
  }
  return !0;
}
function Rp(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t);
    e(_a(t.tr, n, n.bottom));
  }
  return !0;
}
function Op(t, { map: e, table: n, tableStart: r }, s) {
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
        const f = n.nodeAt(d), h = f.attrs, m = f.type.create({
          ...h,
          rowspan: f.attrs.rowspan - 1
        }, f.content), g = e.positionAt(s + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + g), m), c += h.colspan - 1;
      }
    }
  }
}
function Ip(t, e) {
  if (!tt(t)) return !1;
  if (e) {
    const n = at(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Op(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = de.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Ni(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function jp({ width: t, height: e, map: n }, r) {
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
function Ei(t, e) {
  const n = t.selection;
  if (!(n instanceof se) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = at(t), { map: s } = r;
  if (jp(s, r)) return !1;
  if (e) {
    const o = t.tr, i = {};
    let l = N.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(i[f] || !h))
        if (i[f] = !0, a == null)
          a = f, c = h;
        else {
          Ni(h) || (l = l.append(h.content));
          const m = o.mapping.map(f + r.tableStart);
          o.delete(m, m + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...za(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = Ni(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new se(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Ti(t, e) {
  const n = Ee(t.schema);
  return Dp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Dp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof se) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = hp(r.$from), !s) return !1;
      o = (i = Pt(r.$from)) === null || i === void 0 ? void 0 : i.pos;
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
      const u = at(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++) a.push(c ? {
        ...l,
        colwidth: c && c[h] ? [c[h]] : null
      } : l);
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let m = u.map.positionAt(h, u.left, u.table);
        h == u.top && (m += s.nodeSize);
        for (let g = u.left, y = 0; g < u.right; g++, y++)
          g == u.left && h == u.top || d.insert(f = d.mapping.map(m + u.tableStart, 1), t({
            node: s,
            row: h,
            col: g
          }).createAndFill(a[y]));
      }
      d.setNodeMarkup(o, t({
        node: s,
        row: u.top,
        col: u.left
      }), a[0]), r instanceof se && d.setSelection(new se(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function zp(t, e) {
  return function(n, r) {
    if (!tt(n)) return !1;
    const s = Fr(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof se ? n.selection.forEachCell((i, l) => {
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
function Lp(t) {
  return function(e, n) {
    if (!tt(e)) return !1;
    if (n) {
      const r = Ee(e.schema), s = at(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
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
function Mi(t, e, n) {
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
function Dn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Lp(t) : function(n, r) {
    if (!tt(n)) return !1;
    if (r) {
      const s = Ee(n.schema), o = at(n), i = n.tr, l = Mi("row", o, s), a = Mi("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
        const h = f + o.tableStart, m = i.doc.nodeAt(h);
        m && i.setNodeMarkup(h, d, m.attrs);
      }), r(i);
    }
    return !0;
  };
}
Dn("row", { useDeprecatedLogic: !0 });
Dn("column", { useDeprecatedLogic: !0 });
const Fp = Dn("cell", { useDeprecatedLogic: !0 });
function $p(t, e) {
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
function Ri(t) {
  return function(e, n) {
    if (!tt(e)) return !1;
    const r = $p(Fr(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(Y.between(s, mp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Pp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function tr(t, e) {
  const n = t.selection;
  if (!(n instanceof se)) return !1;
  if (e) {
    const r = t.tr, s = Ee(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new P(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function _p(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = $s(Ee(i).row, new P(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? $s(Ee(i).row, new P(e, n, r)).content : e);
  else return null;
  return Bp(i, l);
}
function Bp(t, e) {
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
      const o = Ee(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(N.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function $s(t, e) {
  const n = t.createAndFill();
  return new Ol(n).replace(0, n.content.size, e).doc;
}
function Hp({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(_t(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
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
function Wp(t, e, n, r, s, o, i) {
  const l = t.doc.type.schema, a = Ee(l);
  let c, u;
  if (s > e.width) for (let d = 0, f = 0; d < e.height; d++) {
    const h = n.child(d);
    f += h.nodeSize;
    const m = [];
    let g;
    h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
    for (let y = e.width; y < s; y++) m.push(g);
    t.insert(t.mapping.slice(i).map(f - 1 + r), m);
  }
  if (o > e.height) {
    const d = [];
    for (let m = 0, g = (e.height - 1) * e.width; m < Math.max(e.width, s); m++) {
      const y = m >= e.width ? !1 : n.nodeAt(e.map[g + m]).type == a.header_cell;
      d.push(y ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, N.from(d)), h = [];
    for (let m = e.height; m < o; m++) h.push(f);
    t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Oi(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.height) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = i * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = n.nodeAt(d), { top: h, left: m } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: i - h
      }), t.insert(t.mapping.slice(l).map(e.positionAt(i, m, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: h + f.attrs.rowspan - i
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Ii(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.width) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = c * e.width + i, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), m = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(m, null, _t(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(m + f.nodeSize, f.type.createAndFill(_t(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function ji(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = de.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = de.get(o), f = d.mapping.maps.length;
  }
  Wp(d, i, o, n, c, u, f) && h(), Oi(d, i, o, n, a, c, l, f) && h(), Oi(d, i, o, n, a, c, u, f) && h(), Ii(d, i, o, n, l, u, a, f) && h(), Ii(d, i, o, n, l, u, c, f) && h();
  for (let m = l; m < u; m++) {
    const g = i.positionAt(m, a, o), y = i.positionAt(m, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new P(s.rows[m - l], 0, 0));
  }
  h(), d.setSelection(new se(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const Vp = of({
  ArrowLeft: nr("horiz", -1),
  ArrowRight: nr("horiz", 1),
  ArrowUp: nr("vert", -1),
  ArrowDown: nr("vert", 1),
  "Shift-ArrowLeft": rr("horiz", -1),
  "Shift-ArrowRight": rr("horiz", 1),
  "Shift-ArrowUp": rr("vert", -1),
  "Shift-ArrowDown": rr("vert", 1),
  Backspace: tr,
  "Mod-Backspace": tr,
  Delete: tr,
  "Mod-Delete": tr
});
function ur(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function nr(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof se) return ur(n, r, X.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = Ba(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return ur(n, r, X.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = Da(l, t, e);
      let c;
      return a ? c = X.near(a, 1) : e < 0 ? c = X.near(n.doc.resolve(l.before(-1)), -1) : c = X.near(n.doc.resolve(l.after(-1)), 1), ur(n, r, c);
    }
  };
}
function rr(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof se) i = o;
    else {
      const a = Ba(s, t, e);
      if (a == null) return !1;
      i = new se(n.doc.resolve(a));
    }
    const l = Da(i.$headCell, t, e);
    return l ? ur(n, r, new se(i.$anchorCell, l)) : !1;
  };
}
function Up(t, e) {
  const n = t.state.doc, r = Pt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new se(r))), !0) : !1;
}
function Kp(t, e, n) {
  if (!tt(t.state)) return !1;
  let r = _p(n);
  const s = t.state.selection;
  if (s instanceof se) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [N.from($s(Ee(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = de.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = Hp(r, l.right - l.left, l.bottom - l.top), ji(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = Fr(t.state), i = o.start(-1);
    return ji(t.state, t.dispatch, i, de.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function qp(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Di(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof se)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Pt(t.state.selection.$anchor)) != null && ((n = ys(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = ys(t, c);
    const d = xt.getState(t.state) == null;
    if (!u || !uo(a, u)) if (d) u = a;
    else return;
    const f = new se(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(xt, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), xt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(xt, -1));
  }
  function l(a) {
    const c = a, u = xt.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Di(t, c.target) != r && (d = ys(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function Ba(t, e, n) {
  if (!(t.state.selection instanceof Y)) return null;
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
function Di(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function ys(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && Pt(t.state.doc.resolve(r)) || Pt(t.state.doc.resolve(s));
}
var Gp = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ps(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Ps(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Ps(t, e, n, r, s, o) {
  let i = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: h, colwidth: m } = c.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = s == f ? o : m && m[g], x = y ? y + "px" : "";
        if (i += y || r, y || (l = !1), a)
          a.style.width != x && (a.style.width = x), a = a.nextSibling;
        else {
          const M = document.createElement("col");
          M.style.width = x, e.appendChild(M);
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
const Pe = new Qe("tableColumnResizing");
function Jp({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = Gp, lastColumnResizable: s = !0 } = {}) {
  const o = new lt({
    key: Pe,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = Ee(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new Yp(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = Pe.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          Xp(i, l, t, s);
        },
        mouseleave: (i) => {
          Qp(i);
        },
        mousedown: (i, l) => {
          Zp(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = Pe.getState(i);
        if (l && l.activeHandle > -1) return sm(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Yp = class dr {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Pe);
    if (r && r.setHandle != null) return new dr(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new dr(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return Fs(e.doc.resolve(s)) || (s = -1), new dr(s, n.dragging);
    }
    return n;
  }
};
function Xp(t, e, n, r) {
  if (!t.editable) return;
  const s = Pe.getState(t.state);
  if (s && !s.dragging) {
    const o = tm(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = zi(t, e, "left", n) : a - e.clientX <= n && (i = zi(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = de.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Ha(t, i);
    }
  }
}
function Qp(t) {
  if (!t.editable) return;
  const e = Pe.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ha(t, -1);
}
function Zp(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = Pe.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = em(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Pe, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = Pe.getState(t.state);
    f?.dragging && (nm(t, f.activeHandle, Li(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(Pe, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = Pe.getState(t.state);
    if (f && f.dragging) {
      const h = Li(f.dragging, d, n);
      Fi(t, f.activeHandle, h, r);
    }
  }
  return Fi(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function em(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function tm(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function zi(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = Pt(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = de.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Li(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ha(t, e) {
  t.dispatch(t.state.tr.setMeta(Pe, { setHandle: e }));
}
function nm(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = de.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const m = f.colwidth ? f.colwidth.slice() : rm(f.colspan);
    m[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: m
    });
  }
  a.docChanged && t.dispatch(a);
}
function Fi(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = de.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ps(o, a.firstChild, a, r, l, n);
}
function rm(t) {
  return Array(t).fill(0);
}
function sm(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return he.empty;
  const o = de.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Pe.getState(t)) === null || a === void 0) && a.dragging && n.push(Ue.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(Ue.widget(f, h));
    }
  }
  return he.create(t.doc, n);
}
function om({ allowTableNodeSelection: t = !1 } = {}) {
  return new lt({
    key: xt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(xt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: bp,
      handleDOMEvents: { mousedown: qp },
      createSelectionBetween(e) {
        return xt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Up,
      handleKeyDown: Vp,
      handlePaste: Kp
    },
    appendTransaction(e, n, r) {
      return vp(r, $a(r, n), t);
    }
  });
}
var Wa = _n.create({
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
    return ["td", an(this.options.HTMLAttributes, t), 0];
  }
}), Va = _n.create({
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
    return ["th", an(this.options.HTMLAttributes, t), 0];
  }
}), Ua = _n.create({
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
    return ["tr", an(this.options.HTMLAttributes, t), 0];
  }
});
function _s(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function $i(t, e, n, r, s, o) {
  var i;
  let l = 0, a = !0, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: m, colwidth: g } = u.child(f).attrs;
      for (let y = 0; y < m; y += 1, h += 1) {
        const x = s === h ? o : g && g[y], M = x ? `${x}px` : "";
        if (l += x || r, x || (a = !1), c) {
          if (c.style.width !== M) {
            const [k, S] = _s(r, x);
            c.style.setProperty(k, S);
          }
          c = c.nextSibling;
        } else {
          const k = document.createElement("col"), [S, R] = _s(r, x);
          k.style.setProperty(S, R), e.appendChild(k);
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
var im = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), $i(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, $i(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function lm(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: m } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : m && m[g];
      s += y || e, y || (o = !1);
      const [x, M] = _s(e, y);
      i.push(["col", { style: `${x}: ${M}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Pi(t, e) {
  return t.createAndFill();
}
function am(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function cm(t, e, n, r, s) {
  const o = am(t), i = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Pi(o.cell);
    if (u && l.push(u), r) {
      const d = Pi(o.header_cell);
      d && i.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? i : l));
  return o.table.createChecked(null, a);
}
function um(t) {
  return t instanceof se;
}
var sr = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!um(e))
    return !1;
  let n = 0;
  const r = Na(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, dm = "";
function fm(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function hm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : dm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((m) => {
    const g = [];
    m.content && m.content.forEach((y) => {
      let x = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? x = y.content.map((R) => e.renderChildren(R)).join(s) : x = y.content ? e.renderChildren(y.content) : "";
      const M = fm(x), k = y.type === "tableHeader";
      g.push({ text: M, isHeader: k });
    }), o.push(g);
  });
  const i = o.reduce((m, g) => Math.max(m, g.length), 0);
  if (i === 0)
    return "";
  const l = new Array(i).fill(0);
  o.forEach((m) => {
    var g;
    for (let y = 0; y < i; y += 1) {
      const M = (((g = m[y]) == null ? void 0 : g.text) || "").length;
      M > l[y] && (l[y] = M), l[y] < 3 && (l[y] = 3);
    }
  });
  const a = (m, g) => m + " ".repeat(Math.max(0, g - m.length)), c = o[0], u = c.some((m) => m.isHeader);
  let d = `
`;
  const f = new Array(i).fill(0).map((m, g) => u && c[g] && c[g].text || "");
  return d += `| ${f.map((m, g) => a(m, l[g])).join(" | ")} |
`, d += `| ${l.map((m) => "-".repeat(Math.max(3, m))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((m) => {
    d += `| ${new Array(i).fill(0).map((g, y) => a(m[y] && m[y].text || "", l[y])).join(" | ")} |
`;
  }), d;
}
var pm = hm, Ka = _n.create({
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
      View: im,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = lm(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      an(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => pm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = cm(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(Y.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => kp(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Ap(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Ep(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Mp(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Rp(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Ip(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Pp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Ei(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Ti(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Dn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Dn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Fp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Ei(t, e) ? !0 : Ti(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => zp(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Ri(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Ri(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && $a(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = se.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: sr,
      "Mod-Backspace": sr,
      Delete: sr,
      "Mod-Delete": sr
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Jp({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      om({
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
      tableRole: jn(on(t, "tableRole", e))
    };
  }
});
et.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Ka.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Wa.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Va.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ua.configure(this.options.tableRow)), t;
  }
});
function xe(t) {
  const { title: e, active: n, disabled: r, onClick: s } = t;
  return /* @__PURE__ */ p.jsx(
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
      children: "icon" in t ? /* @__PURE__ */ p.jsx("i", { className: t.icon }) : t.children
    }
  );
}
function mm({ editor: t }) {
  const [e, n] = We(!1);
  if (!t) return null;
  const r = t.isActive("heading", { level: 1 }) ? "Heading 1" : t.isActive("heading", { level: 2 }) ? "Heading 2" : "Paragraph";
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsxs(
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
          /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-heading" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-xs font-medium", children: r }),
          /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-chevron-down text-[10px]" })
        ]
      }
    ),
    e && /* @__PURE__ */ p.jsxs("div", { className: "absolute z-20 mt-1 w-40 bg-white border rounded-md shadow", children: [
      /* @__PURE__ */ p.jsx(
        bs,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        bs,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        bs,
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
function bs({
  label: t,
  onClick: e
}) {
  return /* @__PURE__ */ p.jsx(
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
function bn() {
  return /* @__PURE__ */ p.jsx("div", { className: "w-px h-5 bg-gray-300 mx-1" });
}
function gm({ editor: t }) {
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50", children: [
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(mm, { editor: t }),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      xe,
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
    /* @__PURE__ */ p.jsx(
      xe,
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
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    t.isActive("table") && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Add Row Above",
          icon: "fa-solid fa-arrow-up",
          disabled: !t.can().addRowBefore(),
          onClick: () => t.chain().focus().addRowBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Add Row Below",
          icon: "fa-solid fa-arrow-down",
          disabled: !t.can().addRowAfter(),
          onClick: () => t.chain().focus().addRowAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Add Column Left",
          icon: "fa-solid fa-arrow-left",
          disabled: !t.can().addColumnBefore(),
          onClick: () => t.chain().focus().addColumnBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Add Column Right",
          icon: "fa-solid fa-arrow-right",
          disabled: !t.can().addColumnAfter(),
          onClick: () => t.chain().focus().addColumnAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Delete Row",
          icon: "fa-solid fa-minus",
          disabled: !t.can().deleteRow(),
          onClick: () => t.chain().focus().deleteRow().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Delete Column",
          icon: "fa-solid fa-trash",
          disabled: !t.can().deleteColumn(),
          onClick: () => t.chain().focus().deleteColumn().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        xe,
        {
          title: "Delete Table",
          icon: "fa-solid fa-xmark",
          disabled: !t.can().deleteTable(),
          onClick: () => t.chain().focus().deleteTable().run()
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Code Block",
        icon: "fa-solid fa-code",
        active: t.isActive("codeBlock"),
        disabled: !t.can().toggleCodeBlock(),
        onClick: () => t.chain().focus().toggleCodeBlock().run()
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "flex-1" }),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      xe,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function ym({
  value: t,
  onChange: e,
  disabled: n,
  field_name: r
}) {
  const s = nc({
    extensions: [
      sc.configure({
        link: {
          openOnClick: !1,
          autolink: !0
        }
      }),
      op,
      ap,
      Ka.configure({ resizable: !0 }),
      Ua,
      Va,
      Wa
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
  return He(() => {
    if (!s) return;
    const o = s.getHTML();
    t !== void 0 && t !== o && s.commands.setContent(t, {
      emitUpdate: !1
    });
  }, [t, s]), s ? /* @__PURE__ */ p.jsxs(
    "div",
    {
      id: r,
      className: `
        w-full rounded-lg border border-gray-200 transition-all duration-300
        backdrop-blur-sm text-gray-800
        ${n ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed opacity-60" : "bg-white border-gray-300 hover:border-gray-400 focus-within:ring-1 focus-within:ring-indigo-500"}
      `,
      children: [
        !n && /* @__PURE__ */ p.jsx(gm, { editor: s }),
        /* @__PURE__ */ p.jsxs("div", { className: "resize-y overflow-auto min-h-[200px] max-h-[500px]", children: [
          /* @__PURE__ */ p.jsx(
            rc,
            {
              editor: s,
              className: "tiptap p-3 focus:outline-none min-h-[200px] "
            }
          ),
          "      "
        ] })
      ]
    }
  ) : null;
}
function Bn({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: a,
  fieldLoading: c,
  setFieldLoading: u,
  AttachmentPopup: d
}) {
  const {
    executeFieldMethod: f,
    handleFileUpload: h,
    handleKeyDown: m,
    setSearch: g,
    setOpen: y,
    setIsFocused: x,
    handleInputChange: M,
    handleSelect: k,
    handlePersist: S,
    setLoading: R,
    removeFile: E,
    baseInputClasses: z,
    focusClasses: T,
    labelClasses: B,
    search: D,
    highlightedIndex: O,
    options: L,
    isDisabled: F,
    key: w,
    filteredOptions: te,
    open: ge,
    listRef: ie,
    triggerRef: ue,
    isFocused: Me,
    exactMatch: A,
    loading: C
  } = Jc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    chainMap: a,
    ...u && { setFieldLoading: u },
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), W = (oe) => oe.icon ? /* @__PURE__ */ p.jsx("i", { className: oe.icon }) : null;
  return (() => {
    switch (t.type) {
      case "suggest":
      case "autosuggest":
      case "autocomplete": {
        const v = e.values[w] ?? "", _ = D !== "" ? D : fr(L, v) ?? String(v ?? "");
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { ref: ue, className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                className: `${z} ${T}`,
                value: _,
                placeholder: t.placeholder || "Type to search...",
                onChange: M,
                onBlur: () => {
                  setTimeout(() => y(!1), 150);
                },
                onKeyDown: (j) => {
                  if (j.key === "Enter") {
                    if (j.preventDefault(), A) {
                      const [Q] = A;
                      e.setFieldValue(w, Q), S(Q, t, o);
                    } else D.trim() && (e.setFieldValue(w, D.trim()), S(D.trim(), t, o));
                    y(!1), g("");
                    return;
                  }
                  m(j, !0);
                },
                disabled: F
              }
            ),
            (C || c) && /* @__PURE__ */ p.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
          ] }),
          /* @__PURE__ */ p.jsx(Bs, { anchorRef: ue, open: ge && !F, children: /* @__PURE__ */ p.jsx(
            "div",
            {
              ref: ie,
              className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
              children: te.length > 0 && A ? te.map(([j, Q], ee) => /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `${w}-${j}`,
                  "data-index": ee,
                  className: `px-3 py-2 cursor-pointer text-sm
                  ${O === ee ? "bg-gray-100" : "hover:bg-gray-100"}`,
                  onMouseDown: () => k(j),
                  children: Q
                },
                j
              )) : /* @__PURE__ */ p.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${_}" ` })
            }
          ) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "dataSelector":
      case "dataSelectorFromTable":
      case "dataSelectorFromUniques":
      case "dataMethod": {
        if (t.multiple === !0) {
          const v = e.values[w];
          return /* @__PURE__ */ p.jsx(
            Ho,
            {
              field: t,
              isDisabled: F,
              handleKeyDown: m,
              valueArray: v,
              labelClasses: B,
              listRef: ie,
              search: D,
              filteredOptions: te,
              highlightedIndex: O,
              setSearch: g,
              formik: e,
              executeFieldMethod: f,
              handlePersist: S,
              module_refid: o,
              options: L,
              triggerRef: ue,
              open: ge,
              setOpen: y,
              loading: C || !!c
            }
          );
        }
        return /* @__PURE__ */ p.jsx(
          Bo,
          {
            field: t,
            isDisabled: F,
            handleKeyDown: m,
            labelClasses: B,
            listRef: ie,
            search: D,
            filteredOptions: te,
            highlightedIndex: O,
            setSearch: g,
            formik: e,
            executeFieldMethod: f,
            handlePersist: S,
            module_refid: o,
            options: L,
            triggerRef: ue,
            open: ge,
            setOpen: y,
            loading: C || !!c
          }
        );
      }
      case "richtextarea":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "hidden",
              name: w,
              value: e.values[w] ?? ""
            }
          ),
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx(
            ym,
            {
              value: e.values[w] ?? "",
              disabled: F,
              field_name: w,
              onChange: (v) => {
                e.setFieldValue(w, v), S(v, t, o), f("onChange", t, w);
              }
            }
          ),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "textarea":
        return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "textarea",
              {
                id: w,
                className: `${z} ${T} min-h-[120px] resize-none`,
                onFocus: () => x(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (v) => {
                  e.setFieldValue(w, v.target.value), S(v.target.value, t, o), f("onChange", t, `${w}`);
                },
                placeholder: t.placeholder,
                disabled: F
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] }) });
      case "select":
        if (t.multiple === !0) {
          const v = e.values[w];
          return /* @__PURE__ */ p.jsx(
            Ho,
            {
              field: t,
              isDisabled: F,
              handleKeyDown: m,
              valueArray: v,
              labelClasses: B,
              listRef: ie,
              search: D,
              filteredOptions: te,
              highlightedIndex: O,
              setSearch: g,
              formik: e,
              executeFieldMethod: f,
              handlePersist: S,
              module_refid: o,
              options: L,
              triggerRef: ue,
              open: ge,
              setOpen: y,
              loading: C || !!c
            }
          );
        }
        if (t.search)
          return /* @__PURE__ */ p.jsx(
            Bo,
            {
              field: t,
              isDisabled: F,
              handleKeyDown: m,
              labelClasses: B,
              listRef: ie,
              search: D,
              filteredOptions: te,
              highlightedIndex: O,
              setSearch: g,
              formik: e,
              executeFieldMethod: f,
              handlePersist: S,
              module_refid: o,
              options: L,
              triggerRef: ue,
              open: ge,
              setOpen: y,
              loading: C || !!c
            }
          );
        const oe = Ic(L);
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsxs(
              "select",
              {
                className: `${z} ${T} appearance-none ${F ? "" : "cursor-pointer"} pr-12`,
                onFocus: () => x(!0),
                name: w,
                id: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (v) => {
                  e.setFieldValue(w, v.target.value), S(v.target.value, t, o), f("onChange", t, `${w}`);
                },
                disabled: F,
                children: [
                  t?.["no-option"] !== "false" && !e.values[w] && /* @__PURE__ */ p.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                  /* @__PURE__ */ p.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                  Object.entries(oe).map(
                    ([v, _]) => v === "__ungrouped__" ? _.map((j) => /* @__PURE__ */ p.jsx("option", { value: j.value, className: "py-2", children: j.label }, j.value)) : /* @__PURE__ */ p.jsx("optgroup", { label: v, children: _.map((j) => /* @__PURE__ */ p.jsx("option", { value: j.value, children: j.label }, j.value)) }, v)
                  )
                ]
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: C || c ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
              "svg",
              {
                className: "w-5 h-5 transition-colors duration-300 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ p.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                  }
                )
              }
            ) })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "radioList":
      case "radio":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: `flex ${L.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: L.map((v) => /* @__PURE__ */ p.jsxs(
            "label",
            {
              htmlFor: `${w}-${v.value}`,
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${w}-${v.value}`,
                    type: "radio",
                    name: w,
                    checked: e.values[w] === v.value,
                    value: v.value,
                    onChange: (_) => {
                      e.setFieldValue(w, _.target.value), S(_.target.value, t, o), f("onChange", t, `${w}-${v.value}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: F,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                v.label
              ]
            },
            v.value
          )) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
        ] });
      case "checkbox": {
        const v = t.multiple === !0, _ = e.values[w];
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 ml-1", children: L.map((j) => {
            const Q = v ? Array.isArray(_) && _.includes(j.value) : _ === j.value;
            return /* @__PURE__ */ p.jsxs(
              "label",
              {
                className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
                children: [
                  /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      id: `${w}-${j.value}`,
                      type: "checkbox",
                      checked: Q,
                      onChange: (ee) => {
                        let $;
                        if (v) {
                          const q = Array.isArray(_) ? _ : [];
                          $ = ee.target.checked ? [...q, j.value] : q.filter((V) => V !== j.value);
                        } else
                          $ = ee.target.checked ? j.value : "false";
                        e.setFieldValue(w, $), S($, t, o), f("onChange", t, `${w}-${j.value}`);
                      },
                      onBlur: e.handleBlur,
                      disabled: F,
                      className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                    }
                  ),
                  j.label
                ]
              },
              j.value
            );
          }) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
        ] });
      }
      case "tags": {
        const v = e.values[w] ?? [], _ = D.trim(), j = ($) => {
          if (!F && $ && !v.includes($)) {
            let q = [...v, $];
            e.setFieldValue(w, q), S(q, t, o), g("");
          }
        }, Q = ($) => {
          let q = v.filter((V) => V !== $);
          e.setFieldValue(
            w,
            q
          ), S(q, t, o);
        }, ee = ($) => fr(L, $) ?? $;
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `${z} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${F ? "pointer-events-none opacity-70" : ""}
            `,
              onClick: () => !F && document.getElementById(`${w}-input`)?.focus(),
              children: [
                v.map(($) => /* @__PURE__ */ p.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                    children: [
                      /* @__PURE__ */ p.jsx("span", { className: "text-indigo-700", children: ee($) }),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (q) => {
                            q.stopPropagation(), F || Q($);
                          },
                          onMouseDown: (q) => q.preventDefault(),
                          className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                          children: "×"
                        }
                      )
                    ]
                  },
                  $
                )),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${w}-input`,
                    type: "text",
                    value: D,
                    onChange: ($) => g($.target.value),
                    onKeyDown: ($) => {
                      ($.key === "Enter" || $.key === ",") && ($.preventDefault(), j(_));
                    },
                    placeholder: v.length === 0 ? t.placeholder || "Type and press Enter" : "",
                    className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                    disabled: F
                  }
                )
              ]
            }
          ),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "camera":
      case "camera2":
      case "photo":
      case "avatar":
        return /* @__PURE__ */ p.jsx(
          el,
          {
            formik: e,
            field: t,
            sqlOpsUrls: r,
            module_refid: o
          }
        );
      case "attachment":
      case "file":
        const J = t.multiple === !0, Re = t.max !== void 0 ? Number(t.max) : 1 / 0, qe = Array.isArray(e.values[w]) ? e.values[w] : e.values[w] ? [e.values[w]] : [];
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative mb-1", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: W(t) }),
            C && /* @__PURE__ */ p.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: "file",
                accept: t.accept,
                className: `${z} ${T} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => x(!0),
                name: w,
                multiple: J,
                onChange: (v) => {
                  const _ = Xi({
                    e: v,
                    existingFiles: qe,
                    maxFiles: Re,
                    maxFileSize: t.file_size
                  });
                  _ && (_ && h(_), f("onChange", t, w), v.currentTarget.value = "");
                },
                onBlur: e.handleBlur,
                placeholder: t.placeholder,
                disabled: F
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2", children: qe.map((v) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
            d && /* @__PURE__ */ p.jsx(d, { url: v }),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => E(v),
                className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, v)) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "json":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "textarea",
              {
                id: w,
                name: w,
                value: e.values[w],
                onChange: (v) => {
                  e.setFieldValue(w, v.target.value), S(v.target.value, t, o), f("onChange", t, `${w}`);
                },
                onBlur: e.handleBlur,
                placeholder: t.placeholder || "Enter valid JSON",
                disabled: F,
                className: `${z} ${T} min-h-[200px] font-mono text-sm resize-y`
              }
            ),
            /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`,
                style: { zIndex: -1, filter: "blur(8px)" }
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "date": {
        const v = Wc(t.max);
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: "relative",
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-calendar" }) }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: w,
                    type: "date",
                    name: w,
                    min: t.min,
                    max: v,
                    value: e.values[w] ?? "",
                    onChange: (_) => {
                      e.setFieldValue(w, _.target.value), S(_.target.value, t, o), f("onChange", t, `${w}`);
                    },
                    onBlur: e.handleBlur,
                    placeholder: t.placeholder,
                    disabled: F,
                    className: `${z} ${T} ${t.icon ? "pl-9" : ""}`
                  }
                ),
                /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`,
                    style: { zIndex: -1, filter: "blur(8px)" }
                  }
                )
              ]
            }
          ),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "geolocation": {
        const v = e.values[w] || "", _ = async () => {
          try {
            const { latitude: j, longitude: Q } = await Ss(), ee = `${j},${Q}`;
            e.setFieldValue(w, ee), S(ee, t, o);
          } catch (j) {
            console.error(j), e.setFieldError(w, "Failed to fetch location");
          } finally {
            R(!1);
          }
        };
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                value: v,
                readOnly: !0,
                className: `${z} ${T}`,
                placeholder: "Click to fetch location"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: _,
                disabled: C,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: C ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "altitude": {
        const v = e.values[w] || "", _ = async () => {
          try {
            R(!0);
            const { altitude: j } = await Ss();
            e.setFieldValue(w, j), S(j, t, o);
          } catch (j) {
            console.error(j), e.setFieldError(
              w,
              "Failed to fetch altitude"
            );
          } finally {
            R(!1);
          }
        };
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                value: v,
                readOnly: !0,
                className: `${z} ${T}`,
                placeholder: "Click to fetch altitude"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: _,
                disabled: C,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: C ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "number":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: W(t) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: "number",
                className: `${z} ${T} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => x(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (v) => {
                  e.setFieldValue(w, v.target.value), S(v.target.value, t, o), f("onChange", t, `${w}`);
                },
                step: t.step,
                placeholder: t.placeholder,
                disabled: F,
                min: t.min,
                max: t.max
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      default:
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: B, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: W(t) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: t.type || "text",
                className: `${z} ${T} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => x(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (v) => {
                  e.setFieldValue(w, v.target.value), S(v.target.value, t, o), f("onChange", t, `${w}`);
                },
                step: t.step,
                placeholder: t.placeholder,
                disabled: F,
                minLength: t.minlength,
                maxLength: t.maxlength
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Me ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
    }
  })();
}
function _i({ title: t, children: e, isFirst: n }) {
  const [r, s] = We(n);
  return /* @__PURE__ */ p.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ p.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        onClick: () => s(!r),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ p.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${r ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ p.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: `relative transition-all duration-300 ${r ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${r ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ p.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden  ${r ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ p.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white overflow-auto mb-5", children: /* @__PURE__ */ p.jsx("div", { className: "space-y-5 pt-4", children: e }) })
      }
    )
  ] }) });
}
function $r({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  fieldOptions: i,
  setFieldOptions: l,
  chainMap: a,
  AttachmentPopup: c
}) {
  const u = or(
    () => t?.find((f) => f.type === "avatar"),
    [t]
  ), d = u ? "lg:col-span-10" : "lg:col-span-12";
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white min-h-3/10 ", children: /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 ", children: [
    u && /* @__PURE__ */ p.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `wrapper-${u.name}`,
        className: `
                               
                          flex items-center justify-center
                         ${u.hidden ? "hidden" : ""}

                            `,
        children: /* @__PURE__ */ p.jsx(
          el,
          {
            formik: e,
            field: u,
            sqlOpsUrls: r,
            module_refid: o
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: `${d} `, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((f, h) => {
      if (f.type === "avatar") return null;
      const m = Fn(f.hidden);
      return /* @__PURE__ */ p.jsx("div", { id: `wrapper-${f.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${zn[Ln(Number(f.width))] || "lg:col-span-4"}
                                ${m ? "hidden" : ""}

                                `, children: /* @__PURE__ */ p.jsx(
        Bn,
        {
          refid: s,
          module_refid: o,
          sqlOpsUrls: r,
          field: f,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...i?.[f.name] ? { optionsOverride: i[f.name] } : {},
          chainMap: a,
          AttachmentPopup: c
        },
        f?.name || h
      ) }, f.name);
    }) }) })
  ] }) });
}
function bm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (h) => Promise,
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c,
  buttons: u,
  button_labels: d,
  AttachmentPopup: f
}) {
  const { common: h = [], ...m } = e, [g, y] = ne.useState({}), x = (O, L) => {
    y((F) => ({
      ...F,
      [O]: L
    }));
  }, [M, k] = ne.useState({}), S = (O, L) => {
    k((F) => ({
      ...F,
      [O]: L
    }));
  }, R = ne.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: E, validationSchema: z } = ne.useMemo(() => {
    const O = {}, L = {};
    return Object.values(e).flat().forEach((F) => {
      Nn([F], O, L, n, c, l?.operation);
    }), {
      initialValues: O,
      validationSchema: L
    };
  }, [e, n, c, l?.operation]), T = Er({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: Ie.object().shape(z),
    onSubmit: async (O) => {
      try {
        let L = Tr(O, R);
        const F = await r(L);
        console.log("res", F), T.resetForm();
      } catch (L) {
        console.log("error", L);
      }
    }
  }), B = ne.useMemo(
    () => Mr(R),
    [R]
  ), D = () => {
    T.resetForm();
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      h.length > 0 && /* @__PURE__ */ p.jsx(_i, { title: "Common", isFirst: !0, children: /* @__PURE__ */ p.jsx(
        $r,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: h,
          formik: T,
          methods: o,
          setFieldOptions: x,
          fieldOptions: g,
          chainMap: B,
          AttachmentPopup: f
        }
      ) }),
      m && Object.entries(m).map(([O, L], F) => /* @__PURE__ */ p.jsx(_i, { title: O, isFirst: F === 0 && h.length === 0, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: L.map((w, te) => {
        const ge = Fn(w.hidden), ie = `
                        col-span-12 md:col-span-6
                        ${zn[Ln(Number(w.width))] || "lg:col-span-4"}
                        ${ge ? "hidden" : ""}
                      `;
        if (w.type === "static" || w.type === "static2") {
          const ue = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${ue ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${ue ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                      children: w.label
                    }
                  ) }) })
                }
              )
            },
            w?.name
          );
        }
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${w.name}`,
            className: ie,
            children: /* @__PURE__ */ p.jsx(
              Bn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: w,
                formik: T,
                methods: o,
                setFieldOptions: x,
                ...g[w.name] ? { optionsOverride: g[w.name] } : {},
                chainMap: B,
                fieldLoading: M[w.name] ?? !1,
                setFieldLoading: S,
                AttachmentPopup: f
              },
              w.name
            )
          },
          w?.name ?? `field-${te}`
        );
      }) }) }, O))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: D, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: d?.reset || "Reset" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.submit || "Save" })
      ] })
    ] })
  ] }) }) });
}
function xm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (m) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  widget: a,
  refid: c,
  module_refid: u,
  buttons: d,
  button_labels: f,
  AttachmentPopup: h
}) {
  const { common: m = [], ...g } = e, y = Object.keys(g), [x, M] = ne.useState(0), [k, S] = ne.useState({}), R = (C, W) => {
    S((K) => ({
      ...K,
      [C]: W
    }));
  }, { initialValues: E, validationSchema: z, stepperSchemas: T } = ne.useMemo(() => {
    const C = {}, W = {}, K = {};
    return a ? Object.entries(e).forEach(([oe, J]) => {
      const Re = {};
      Nn(J, C, Re, n, u, l?.operation), K[oe] = Re;
    }) : Object.entries(e).forEach(([oe, J]) => {
      Nn(J, C, W, n, u, l?.operation);
    }), {
      initialValues: C,
      validationSchema: W,
      stepperSchemas: K
    };
  }, [e, n, a, u, l?.operation]), B = ne.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), D = y[x] ?? null, O = a && D ? T[D] ?? {} : z, L = Er({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: Ie.object().shape(O),
    onSubmit: async (C) => {
      let W = Tr(C, B);
      a ? (x < y.length - 1 && M((K) => K + 1), x === y.length - 1 && F(W)) : F(W);
    }
  }), F = async (C) => {
    try {
      const W = await r(C);
      console.log("res", W), L.resetForm();
    } catch (W) {
      console.log("error", W);
    }
  }, w = async (C) => {
    if (C.preventDefault(), !a) {
      const W = await L.validateForm();
      if (Object.keys(W).length > 0) {
        alert("Please fill all required fields before submitting."), L.setTouched(
          Object.keys(W).reduce((K, oe) => ({ ...K, [oe]: !0 }), {})
        );
        return;
      }
    }
    L.handleSubmit(C);
  }, te = () => {
    M((C) => C > 0 ? C - 1 : C);
  }, ge = ne.useMemo(
    () => Mr(B),
    [B]
  ), ie = () => {
    L.resetForm();
  }, [ue, Me] = ne.useState({}), A = (C, W) => {
    Me((K) => ({
      ...K,
      [C]: W
    }));
  };
  return /* @__PURE__ */ p.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: w, className: "w-full mx-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "relative", children: /* @__PURE__ */ p.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      m.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "p-3", children: /* @__PURE__ */ p.jsx(
        $r,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: m,
          formik: L,
          methods: o,
          setFieldOptions: R,
          fieldOptions: k,
          chainMap: ge,
          AttachmentPopup: h
        }
      ) }),
      /* @__PURE__ */ p.jsx("nav", { className: "relative flex bg-gray-100", children: y.map((C, W) => /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          onClick: () => M(W),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${x === W ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ p.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: C })
        },
        C
      )) })
    ] }) }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: D && g[D]?.map((C, W) => {
            const K = Fn(C.hidden), oe = `
                  col-span-12 md:col-span-6
                  ${zn[Ln(Number(C.width))] || "lg:col-span-4"}
                  ${K ? "hidden" : ""}
                `;
            if (C.type === "static" || C.type === "static2") {
              const J = C.type === "static";
              return /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `wrapper-${C.name}`,
                  className: "col-span-12",
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: ` bg-gray-100 ${J ? "mt-4" : "mt-3"}`,
                      children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                        "h2",
                        {
                          className: `${J ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                          children: C.label
                        }
                      ) }) })
                    }
                  )
                },
                C?.name
              );
            }
            return /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `wrapper-${C.name}`,
                className: oe,
                children: /* @__PURE__ */ p.jsx(
                  Bn,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: C,
                    formik: L,
                    methods: o,
                    components: i,
                    setFieldOptions: R,
                    ...k[C.name] ? { optionsOverride: k[C.name] } : {},
                    chainMap: ge,
                    fieldLoading: ue[C.name] ?? !1,
                    setFieldLoading: A,
                    AttachmentPopup: h
                  },
                  C.name
                )
              },
              C?.name ?? `field-${W}`
            );
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: `mt-8 flex ${x > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            x > 0 && /* @__PURE__ */ p.jsx("button", { onClick: te, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
            /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
              /* @__PURE__ */ p.jsx("button", { onClick: s, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: f?.cancel || "Cancel" }),
              /* @__PURE__ */ p.jsx("button", { type: "button", onClick: ie, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.reset || "Reset" }),
              /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: f?.submit ? f?.submit : a ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ p.jsxs("span", { children: [
                "Tab ",
                x + 1,
                " of ",
                y.length
              ] }),
              /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ p.jsx("div", { className: "flex gap-1", children: y.map((C, W) => /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${W === x ? "bg-action w-6" : "bg-gray-300"}`
              },
              W
            )) })
          ] }) })
        ]
      },
      y[x]
    )
  ] }) });
}
function wm({
  title: t,
  fields: e,
  data: n,
  onSubmit: r = async (f) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: a,
  buttons: c,
  button_labels: u,
  AttachmentPopup: d
}) {
  const f = ne.useMemo(() => Lc(e, i?.operation), [e, i?.operation]), [h, m] = ne.useState({}), g = (D, O) => {
    m((L) => ({
      ...L,
      [D]: O
    }));
  }, [y, x] = ne.useState({}), M = (D, O) => {
    x((L) => ({
      ...L,
      [D]: O
    }));
  }, { commonFields: k, otherFields: S } = ne.useMemo(() => f.reduce(
    (D, O) => (O.group === "common" ? D.commonFields.push(O) : D.otherFields.push(O), D),
    { commonFields: [], otherFields: [] }
  ), [f]), { initialValues: R, validationSchema: E } = ne.useMemo(() => {
    console.log("dddd");
    const D = {}, O = {};
    return f.forEach((L) => {
      Nn([L], D, O, n, a, i?.operation);
    }), {
      initialValues: D,
      validationSchema: O
    };
  }, [f, n]), z = ne.useMemo(
    () => Mr(f),
    [f]
  ), T = Er({
    initialValues: R,
    enableReinitialize: !0,
    validationSchema: Ie.object().shape(E),
    onSubmit: async (D) => {
      try {
        let O = Tr(D, f);
        const L = await r(O);
        console.log("res", L), T.resetForm();
      } catch (O) {
        console.log("error", O);
      }
    }
  }), B = () => {
    T.resetForm();
  };
  return console.log("formik.values", T.values), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4  mx-auto", children: [
    k.length > 0 && /* @__PURE__ */ p.jsx(
      $r,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: i,
        fields: k,
        formik: T,
        methods: o,
        setFieldOptions: g,
        fieldOptions: h,
        chainMap: z,
        AttachmentPopup: d
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((D) => {
      const O = Fn(D.hidden), L = `col-span-12 md:col-span-6
    ${zn[Ln(Number(D.width))] || "lg:col-span-4"}
    ${O ? "hidden" : ""}
  `;
      if (D.type === "static" || D.type === "static2") {
        const F = D.type === "static";
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${D.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: ` bg-gray-100 ${F ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                  "h2",
                  {
                    className: `${F ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                    children: D.label
                  }
                ) }) })
              }
            )
          },
          D?.name
        );
      }
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          id: `wrapper-${D.name}`,
          className: L,
          children: /* @__PURE__ */ p.jsx(
            Bn,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: i,
              field: D,
              formik: T,
              methods: o,
              chainMap: z,
              setFieldOptions: g,
              ...h[D.name] ? { optionsOverride: h[D.name] } : {},
              fieldLoading: y[D.name] ?? !1,
              setFieldLoading: M,
              AttachmentPopup: d
            }
          )
        },
        D?.name
      );
    }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: u?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: B, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: u?.reset || "Reset" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: u?.submit || "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function Bi({ title: t, children: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ p.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ p.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ p.jsx("div", { className: "space-y-5 pt-4", children: e }) })
      }
    )
  ] }) });
}
function vm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (h) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c,
  buttons: u,
  button_labels: d,
  AttachmentPopup: f
}) {
  const { common: h = [], ...m } = e, [g, y] = ne.useState({}), x = (O, L) => {
    y((F) => ({
      ...F,
      [O]: L
    }));
  }, [M, k] = ne.useState({}), S = (O, L) => {
    k((F) => ({
      ...F,
      [O]: L
    }));
  }, R = ne.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: E, validationSchema: z } = ne.useMemo(() => {
    const O = {}, L = {};
    return Object.values(e).flat().forEach((F) => {
      Nn([F], O, L, n, c, l?.operation);
    }), {
      initialValues: O,
      validationSchema: L
    };
  }, [e, n, c, l?.operation]), T = Er({
    initialValues: E,
    enableReinitialize: !0,
    validationSchema: Ie.object().shape(z),
    onSubmit: async (O) => {
      try {
        let L = Tr(O, R);
        const F = await r(L);
        console.log("res", F), T.resetForm();
      } catch (L) {
        console.log("error", L);
      }
    }
  }), B = ne.useMemo(
    () => Mr(R),
    [R]
  ), D = () => {
    T.resetForm();
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: T.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      h.length > 0 && /* @__PURE__ */ p.jsx(Bi, { title: "Common", children: /* @__PURE__ */ p.jsx(
        $r,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: h,
          formik: T,
          methods: o,
          setFieldOptions: x,
          fieldOptions: g,
          chainMap: B,
          AttachmentPopup: f
        }
      ) }),
      m && Object.entries(m).map(([O, L], F) => /* @__PURE__ */ p.jsx(Bi, { title: O, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: L.map((w, te) => {
        const ge = Fn(w.hidden), ie = `
                                            col-span-12 md:col-span-6
                                            ${zn[Ln(Number(w.width))] || "lg:col-span-4"}
                                            ${ge ? "hidden" : ""}
                                          `;
        if (w.type === "static" || w.type === "static2") {
          const ue = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${ue ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${ue ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                      children: w.label
                    }
                  ) }) })
                }
              )
            },
            w?.name
          );
        }
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${w.name}`,
            className: ie,
            children: /* @__PURE__ */ p.jsx(
              Bn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: w,
                formik: T,
                methods: o,
                setFieldOptions: x,
                ...g[w.name] ? { optionsOverride: g[w.name] } : {},
                chainMap: B,
                fieldLoading: M[w.name] ?? !1,
                setFieldLoading: S,
                AttachmentPopup: f
              },
              w.name
            )
          },
          w?.name ?? `field-${te}`
        );
      }) }) }, O))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: D, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: d?.reset || "Reset" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.submit || "Save" })
      ] })
    ] })
  ] }) }) });
}
function Mm({
  formJson: t,
  methods: e = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o,
  toast: i,
  location_required: l = !0,
  AttachmentPopup: a
}) {
  let c = Mc(t);
  const u = t.endPoints, d = t?.source?.refid, f = Oc(t?.fields ?? {}, u?.operation), [h, m] = ne.useState(o ?? {}), g = ne.useMemo(() => Dc(t.fields), [t.fields]), y = ne.useMemo(() => zc(t.fields), [t.fields]);
  ne.useEffect(() => {
    let S = !0;
    const R = async () => {
      try {
        const { latitude: z, longitude: T, altitude: B } = await Ss(), D = `${z},${T}`, O = {};
        g.forEach((L) => {
          O[L] = D;
        }), y.forEach((L) => {
          O[L] = B ?? "";
        }), S && m((L) => ({
          ...L,
          ...O
        }));
      } catch (z) {
        console.warn("Geo fetch failed", z);
      }
    }, E = setTimeout(() => {
      (g.length > 0 || y.length > 0) && R();
    }, 0);
    return () => {
      S = !1, clearTimeout(E);
    };
  }, [g, y]), ne.useEffect(() => {
    m((S) => ({
      ...S,
      ...o ?? {}
    }));
  }, [o]);
  const x = ne.useCallback(
    (S) => {
      S && m((R) => {
        const E = { ...R };
        for (const z in S)
          S[z] !== null && S[z] !== void 0 && (E[z] = S[z]);
        return E;
      });
    },
    []
  );
  ne.useEffect(() => {
    let S = !0;
    return (async () => {
      const E = t?.source ?? {};
      if (!E?.type) {
        S && m((z) => z);
        return;
      }
      if (E.type === "method" && u?.operation !== "create") {
        const z = E.method, T = z ? e[z] : void 0;
        if (T)
          try {
            const B = await T();
            S && x(B);
          } catch (B) {
            console.error("Method execution failed:", B), S && m((D) => D);
          }
        else
          S && m((B) => B);
      }
      if (E.type === "api" && u?.operation !== "create")
        try {
          const z = {
            method: E.method || "GET",
            url: u?.baseURL + E.endpoint,
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            },
            ...E.method === "GET" ? { params: { refid: E.refid } } : { data: { refid: E.refid } }
          }, { data: T } = await pe(z), B = T?.results?.options ? T?.results?.options : T.data ? T.data : T.results ? T.results : T;
          S && x(B ?? {});
        } catch (z) {
          console.error("API fetch failed:", z), S && m((T) => T);
        }
      if (E.type === "sql" && E.refid && E.refid !== "0" && u?.operation !== "create" || u?.operation !== "create" && E.dbopsid) {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const z = await qc.fetch(u, {
            source: {
              ...E,
              table: E.table,
              columns: E.columns,
              where: mt(E.where, {
                refid: d
              })
            },
            fields: Po(t.fields, u.operation)
          }, E?.dbopsid, t?.module_refid);
          S && x(z);
        } catch (z) {
          console.error("API fetch failed:", z);
        }
      }
    })(), () => {
      S = !1;
    };
  }, [
    u,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.endpoint || ""
  ]);
  const M = async (S) => {
    const R = t?.source ?? {};
    let E = "0,0", z = { ...S };
    if (g.length > 0 || y.length > 0) {
      const T = g[0];
      E = (T ? S[T] : null) || "0,0";
      const D = g.filter(
        (w) => !S[w]
      ), O = y.filter(
        (w) => S[w] === void 0 || S[w] === null || S[w] === ""
      ), L = y[0], F = L ? S[L] : null;
      (D.length > 0 || O.length > 0) && (z = {
        ...S,
        ...Object.fromEntries(
          D.map((w) => [w, E])
        ),
        ...Object.fromEntries(
          O.map((w) => [
            w,
            F
          ])
        )
      });
    }
    if (R.type === "method") {
      const T = R.method, B = T ? e[T] : void 0;
      if (B)
        try {
          let D = z ? { ...z, geolocation: E } : {};
          const O = await B(D);
          s?.(O);
          const L = es(O, t?.submit_msg);
          if (L && i?.success?.(L), e?.handleActions) {
            let F = u?.operation === "update" ? d : O?.data?.refid;
            const w = t?.gotolink?.replace(
              "{hashid}",
              String(F)
            );
            e.handleActions(w);
          }
        } catch (D) {
          throw i?.error?.(Yt(D)), new Error(Yt(D));
        }
    }
    if (R.type === "api") {
      if (!u)
        throw console.error("SQL source requires formJson.endPoints but it is missing"), new Error("Something went wrong");
      try {
        const T = await pe({
          method: R.method || "POST",
          url: u.baseURL + R.endpoint,
          data: z ? { ...z, geolocation: E } : {},
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        s?.(T);
        const B = es(T, t?.submit_msg);
        if (B && i?.success?.(B), e?.handleActions) {
          let D = u.operation === "update" ? d : T?.data?.refid;
          const O = t?.gotolink?.replace(
            "{hashid}",
            String(D)
          );
          e.handleActions(O);
        }
      } catch (T) {
        throw i?.error?.(Yt(T)), new Error(Yt(T));
      }
    }
    if (R.type === "sql") {
      const T = t.endPoints;
      if (!T)
        throw console.error("SQL source requires formJson.endPoints but it is missing"), new Error("SQL source requires formJson.endPoints but it is missing");
      try {
        let B = !1, D;
        R?.dbopsid && (B = !0, D = R?.dbopsid);
        const O = await pe({
          method: "GET",
          url: T.baseURL + T.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${T?.accessToken}`
          }
        });
        if (!B) {
          let w = {
            ...R
          };
          R.where && (w = {
            ...R,
            where: mt(R.where, {
              refid: d
            })
          }), D = (await pe({
            method: "POST",
            url: T.baseURL + T.dbopsGetRefId,
            data: {
              operation: T.operation,
              source: w,
              fields: Po(t.fields, T.operation),
              forcefill: t.forcefill,
              datahash: O.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${T?.accessToken}`
            }
          }))?.data.refid;
        }
        const L = await pe({
          method: "POST",
          url: T.baseURL + T[T.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: D,
            fields: z,
            datahash: O.data.refhash,
            geolocation: E
          },
          headers: {
            Authorization: `Bearer ${T?.accessToken}`
          }
        }), F = es(L, t?.submit_msg);
        if (F && i?.success?.(F), s?.(L), e?.handleActions) {
          let w = T.operation === "update" ? d : L?.data?.refid;
          const te = t?.gotolink?.replace(
            "{hashid}",
            String(w)
          );
          e.handleActions(te);
        }
      } catch (B) {
        throw i?.error?.(Yt(B)), new Error(Yt(B));
      }
    }
  }, k = {
    accordion: /* @__PURE__ */ p.jsx(
      bm,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: h,
        onSubmit: M,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a
      }
    ),
    cards: /* @__PURE__ */ p.jsx(
      vm,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: h,
        onSubmit: M,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a
      }
    ),
    tab: /* @__PURE__ */ p.jsx(
      xm,
      {
        title: t?.title ?? "",
        groupedFields: f,
        data: h,
        onSubmit: M,
        onCancel: n,
        methods: e,
        components: r,
        widget: t?.widget,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a
      }
    ),
    simple: /* @__PURE__ */ p.jsx(
      wm,
      {
        title: t?.title ?? "",
        fields: t.fields,
        data: h,
        onSubmit: M,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a
      }
    )
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative", children: k[c] });
}
export {
  Mm as LogiksForm
};
