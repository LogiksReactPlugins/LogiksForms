import de, { useState as Ve, useRef as nn, useEffect as We, useMemo as ar, useLayoutEffect as lc } from "react";
import Ce from "axios";
import * as $e from "yup";
import { useFormik as Rr } from "formik";
import { createPortal as ac } from "react-dom";
import { useEditor as cc, EditorContent as uc } from "@tiptap/react";
import dc from "@tiptap/starter-kit";
var Gn = { exports: {} }, un = {};
var No;
function fc() {
  if (No) return un;
  No = 1;
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
var Eo;
function hc() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === D ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case y:
          return "Fragment";
        case k:
          return "Profiler";
        case b:
          return "StrictMode";
        case j:
          return "Suspense";
        case H:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case g:
            return "Portal";
          case R:
            return v.displayName || "Context";
          case A:
            return (v._context.displayName || "Context") + ".Consumer";
          case T:
            var W = v.render;
            return v = v.displayName, v || (v = W.displayName || W.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case ne:
            return W = v.displayName || null, W !== null ? W : t(v.type) || "Memo";
          case U:
            W = v._payload, v = v._init;
            try {
              return t(v(W));
            } catch {
            }
        }
      return null;
    }
    function e(v) {
      return "" + v;
    }
    function n(v) {
      try {
        e(v);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var M = W.error, K = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return M.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), e(v);
      }
    }
    function r(v) {
      if (v === y) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === U)
        return "<...>";
      try {
        var W = t(v);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var v = P.A;
      return v === null ? null : v.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(v) {
      if (C.call(v, "key")) {
        var W = Object.getOwnPropertyDescriptor(v, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function l(v, W) {
      function M() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: M,
        configurable: !0
      });
    }
    function a() {
      var v = t(this.type);
      return le[v] || (le[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function c(v, W, M, K, Z, be) {
      var ce = M.ref;
      return v = {
        $$typeof: m,
        type: v,
        key: W,
        props: M,
        _owner: K
      }, (ce !== void 0 ? ce : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: be
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function u(v, W, M, K, Z, be) {
      var ce = W.children;
      if (ce !== void 0)
        if (K)
          if (S(ce)) {
            for (K = 0; K < ce.length; K++)
              d(ce[K]);
            Object.freeze && Object.freeze(ce);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(ce);
      if (C.call(W, "key")) {
        ce = t(v);
        var Ae = Object.keys(W).filter(function(ee) {
          return ee !== "key";
        });
        K = 0 < Ae.length ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}", re[ce + K] || (Ae = 0 < Ae.length ? "{" + Ae.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          ce,
          Ae,
          ce
        ), re[ce + K] = !0);
      }
      if (ce = null, M !== void 0 && (n(M), ce = "" + M), i(W) && (n(W.key), ce = "" + W.key), "key" in W) {
        M = {};
        for (var $ in W)
          $ !== "key" && (M[$] = W[$]);
      } else M = W;
      return ce && l(
        M,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), c(
        v,
        ce,
        M,
        s(),
        Z,
        be
      );
    }
    function d(v) {
      f(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === U && (v._payload.status === "fulfilled" ? f(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
    }
    function f(v) {
      return typeof v == "object" && v !== null && v.$$typeof === m;
    }
    var h = de, m = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), H = /* @__PURE__ */ Symbol.for("react.suspense_list"), ne = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), D = /* @__PURE__ */ Symbol.for("react.client.reference"), P = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, S = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var w, le = {}, X = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), fe = E(r(o)), re = {};
    dn.Fragment = y, dn.jsx = function(v, W, M) {
      var K = 1e4 > P.recentlyCreatedOwnerStacks++;
      return u(
        v,
        W,
        M,
        !1,
        K ? Error("react-stack-top-frame") : X,
        K ? E(r(v)) : fe
      );
    }, dn.jsxs = function(v, W, M) {
      var K = 1e4 > P.recentlyCreatedOwnerStacks++;
      return u(
        v,
        W,
        M,
        !0,
        K ? Error("react-stack-top-frame") : X,
        K ? E(r(v)) : fe
      );
    };
  })()), dn;
}
var To;
function pc() {
  return To || (To = 1, process.env.NODE_ENV === "production" ? Gn.exports = fc() : Gn.exports = hc()), Gn.exports;
}
var p = pc();
const {
  entries: Hi,
  setPrototypeOf: Mo,
  isFrozen: mc,
  getPrototypeOf: gc,
  getOwnPropertyDescriptor: yc
} = Object;
let {
  freeze: _e,
  seal: Qe,
  create: Wi
} = Object, {
  apply: xs,
  construct: ws
} = typeof Reflect < "u" && Reflect;
_e || (_e = function(e) {
  return e;
});
Qe || (Qe = function(e) {
  return e;
});
xs || (xs = function(e, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return e.apply(n, s);
});
ws || (ws = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const Jn = Be(Array.prototype.forEach), bc = Be(Array.prototype.lastIndexOf), Ro = Be(Array.prototype.pop), fn = Be(Array.prototype.push), xc = Be(Array.prototype.splice), cr = Be(String.prototype.toLowerCase), qr = Be(String.prototype.toString), Gr = Be(String.prototype.match), hn = Be(String.prototype.replace), wc = Be(String.prototype.indexOf), vc = Be(String.prototype.trim), et = Be(Object.prototype.hasOwnProperty), Fe = Be(RegExp.prototype.test), pn = Sc(TypeError);
function Be(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return xs(t, e, r);
  };
}
function Sc(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return ws(t, n);
  };
}
function ie(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cr;
  Mo && Mo(t, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (mc(e) || (e[r] = o), s = o);
    }
    t[s] = !0;
  }
  return t;
}
function Cc(t) {
  for (let e = 0; e < t.length; e++)
    et(t, e) || (t[e] = null);
  return t;
}
function pt(t) {
  const e = Wi(null);
  for (const [n, r] of Hi(t))
    et(t, n) && (Array.isArray(r) ? e[n] = Cc(r) : r && typeof r == "object" && r.constructor === Object ? e[n] = pt(r) : e[n] = r);
  return e;
}
function mn(t, e) {
  for (; t !== null; ) {
    const r = yc(t, e);
    if (r) {
      if (r.get)
        return Be(r.get);
      if (typeof r.value == "function")
        return Be(r.value);
    }
    t = gc(t);
  }
  function n() {
    return null;
  }
  return n;
}
const Oo = _e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jr = _e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "slot", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yr = _e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kc = _e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xr = _e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ac = _e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Io = _e(["#text"]), jo = _e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Qr = _e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zo = _e(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yn = _e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nc = Qe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ec = Qe(/<%[\w\W]*|[\w\W]*%>/gm), Tc = Qe(/\$\{[\w\W]*/gm), Mc = Qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rc = Qe(/^aria-[\-\w]+$/), Vi = Qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Oc = Qe(/^(?:\w+script|data):/i), Ic = Qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ui = Qe(/^html$/i), jc = Qe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Do = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Rc,
  ATTR_WHITESPACE: Ic,
  CUSTOM_ELEMENT: jc,
  DATA_ATTR: Mc,
  DOCTYPE_NAME: Ui,
  ERB_EXPR: Ec,
  IS_ALLOWED_URI: Vi,
  IS_SCRIPT_OR_DATA: Oc,
  MUSTACHE_EXPR: Nc,
  TMPLIT_EXPR: Tc
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, zc = function() {
  return typeof window > "u" ? null : window;
}, Dc = function(e, n) {
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
}, Lo = function() {
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
function Ki() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zc();
  const e = (B) => Ki(B);
  if (e.version = "3.2.7", e.removed = [], !t || !t.document || t.document.nodeType !== gn.document || !t.Element)
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
  } = t, m = a.prototype, g = mn(m, "cloneNode"), y = mn(m, "remove"), b = mn(m, "nextSibling"), k = mn(m, "childNodes"), A = mn(m, "parentNode");
  if (typeof i == "function") {
    const B = n.createElement("template");
    B.content && B.content.ownerDocument && (n = B.content.ownerDocument);
  }
  let R, T = "";
  const {
    implementation: j,
    createNodeIterator: H,
    createDocumentFragment: ne,
    getElementsByTagName: U
  } = n, {
    importNode: z
  } = r;
  let D = Lo();
  e.isSupported = typeof Hi == "function" && typeof A == "function" && j && j.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: C,
    TMPLIT_EXPR: S,
    DATA_ATTR: E,
    ARIA_ATTR: w,
    IS_SCRIPT_OR_DATA: le,
    ATTR_WHITESPACE: X,
    CUSTOM_ELEMENT: fe
  } = Do;
  let {
    IS_ALLOWED_URI: re
  } = Do, v = null;
  const W = ie({}, [...Oo, ...Jr, ...Yr, ...Xr, ...Io]);
  let M = null;
  const K = ie({}, [...jo, ...Qr, ...zo, ...Yn]);
  let Z = Object.seal(Wi(null, {
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
  })), be = null, ce = null, Ae = !0, $ = !0, ee = !1, q = !0, ue = !1, te = !0, F = !1, oe = !1, J = !1, O = !1, G = !1, V = !1, ye = !0, Ne = !1;
  const ae = "user-content-";
  let pe = !0, Ze = !1, Je = {}, wt = null;
  const co = ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let uo = null;
  const fo = ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Br = null;
  const ho = ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Vn = "http://www.w3.org/1998/Math/MathML", Un = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let Kt = dt, Hr = !1, Wr = null;
  const ec = ie({}, [Vn, Un, dt], qr);
  let Kn = ie({}, ["mi", "mo", "mn", "ms", "mtext"]), qn = ie({}, ["annotation-xml"]);
  const tc = ie({}, ["title", "style", "font", "a", "script"]);
  let cn = null;
  const nc = ["application/xhtml+xml", "text/html"], rc = "text/html";
  let Ee = null, qt = null;
  const sc = n.createElement("form"), po = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Vr = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qt && qt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = pt(x), cn = // eslint-disable-next-line unicorn/prefer-includes
      nc.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? rc : x.PARSER_MEDIA_TYPE, Ee = cn === "application/xhtml+xml" ? qr : cr, v = et(x, "ALLOWED_TAGS") ? ie({}, x.ALLOWED_TAGS, Ee) : W, M = et(x, "ALLOWED_ATTR") ? ie({}, x.ALLOWED_ATTR, Ee) : K, Wr = et(x, "ALLOWED_NAMESPACES") ? ie({}, x.ALLOWED_NAMESPACES, qr) : ec, Br = et(x, "ADD_URI_SAFE_ATTR") ? ie(pt(ho), x.ADD_URI_SAFE_ATTR, Ee) : ho, uo = et(x, "ADD_DATA_URI_TAGS") ? ie(pt(fo), x.ADD_DATA_URI_TAGS, Ee) : fo, wt = et(x, "FORBID_CONTENTS") ? ie({}, x.FORBID_CONTENTS, Ee) : co, be = et(x, "FORBID_TAGS") ? ie({}, x.FORBID_TAGS, Ee) : pt({}), ce = et(x, "FORBID_ATTR") ? ie({}, x.FORBID_ATTR, Ee) : pt({}), Je = et(x, "USE_PROFILES") ? x.USE_PROFILES : !1, Ae = x.ALLOW_ARIA_ATTR !== !1, $ = x.ALLOW_DATA_ATTR !== !1, ee = x.ALLOW_UNKNOWN_PROTOCOLS || !1, q = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ue = x.SAFE_FOR_TEMPLATES || !1, te = x.SAFE_FOR_XML !== !1, F = x.WHOLE_DOCUMENT || !1, O = x.RETURN_DOM || !1, G = x.RETURN_DOM_FRAGMENT || !1, V = x.RETURN_TRUSTED_TYPE || !1, J = x.FORCE_BODY || !1, ye = x.SANITIZE_DOM !== !1, Ne = x.SANITIZE_NAMED_PROPS || !1, pe = x.KEEP_CONTENT !== !1, Ze = x.IN_PLACE || !1, re = x.ALLOWED_URI_REGEXP || Vi, Kt = x.NAMESPACE || dt, Kn = x.MATHML_TEXT_INTEGRATION_POINTS || Kn, qn = x.HTML_INTEGRATION_POINTS || qn, Z = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && po(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && po(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ue && ($ = !1), G && (O = !0), Je && (v = ie({}, Io), M = [], Je.html === !0 && (ie(v, Oo), ie(M, jo)), Je.svg === !0 && (ie(v, Jr), ie(M, Qr), ie(M, Yn)), Je.svgFilters === !0 && (ie(v, Yr), ie(M, Qr), ie(M, Yn)), Je.mathMl === !0 && (ie(v, Xr), ie(M, zo), ie(M, Yn))), x.ADD_TAGS && (v === W && (v = pt(v)), ie(v, x.ADD_TAGS, Ee)), x.ADD_ATTR && (M === K && (M = pt(M)), ie(M, x.ADD_ATTR, Ee)), x.ADD_URI_SAFE_ATTR && ie(Br, x.ADD_URI_SAFE_ATTR, Ee), x.FORBID_CONTENTS && (wt === co && (wt = pt(wt)), ie(wt, x.FORBID_CONTENTS, Ee)), pe && (v["#text"] = !0), F && ie(v, ["html", "head", "body"]), v.table && (ie(v, ["tbody"]), delete be.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = x.TRUSTED_TYPES_POLICY, T = R.createHTML("");
      } else
        R === void 0 && (R = Dc(h, s)), R !== null && typeof T == "string" && (T = R.createHTML(""));
      _e && _e(x), qt = x;
    }
  }, mo = ie({}, [...Jr, ...Yr, ...kc]), go = ie({}, [...Xr, ...Ac]), oc = function(x) {
    let I = A(x);
    (!I || !I.tagName) && (I = {
      namespaceURI: Kt,
      tagName: "template"
    });
    const _ = cr(x.tagName), me = cr(I.tagName);
    return Wr[x.namespaceURI] ? x.namespaceURI === Un ? I.namespaceURI === dt ? _ === "svg" : I.namespaceURI === Vn ? _ === "svg" && (me === "annotation-xml" || Kn[me]) : !!mo[_] : x.namespaceURI === Vn ? I.namespaceURI === dt ? _ === "math" : I.namespaceURI === Un ? _ === "math" && qn[me] : !!go[_] : x.namespaceURI === dt ? I.namespaceURI === Un && !qn[me] || I.namespaceURI === Vn && !Kn[me] ? !1 : !go[_] && (tc[_] || !mo[_]) : !!(cn === "application/xhtml+xml" && Wr[x.namespaceURI]) : !1;
  }, it = function(x) {
    fn(e.removed, {
      element: x
    });
    try {
      A(x).removeChild(x);
    } catch {
      y(x);
    }
  }, Rt = function(x, I) {
    try {
      fn(e.removed, {
        attribute: I.getAttributeNode(x),
        from: I
      });
    } catch {
      fn(e.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(x), x === "is")
      if (O || G)
        try {
          it(I);
        } catch {
        }
      else
        try {
          I.setAttribute(x, "");
        } catch {
        }
  }, yo = function(x) {
    let I = null, _ = null;
    if (J)
      x = "<remove></remove>" + x;
    else {
      const we = Gr(x, /^[\r\n\t ]+/);
      _ = we && we[0];
    }
    cn === "application/xhtml+xml" && Kt === dt && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const me = R ? R.createHTML(x) : x;
    if (Kt === dt)
      try {
        I = new f().parseFromString(me, cn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = j.createDocument(Kt, "template", null);
      try {
        I.documentElement.innerHTML = Hr ? T : me;
      } catch {
      }
    }
    const je = I.body || I.documentElement;
    return x && _ && je.insertBefore(n.createTextNode(_), je.childNodes[0] || null), Kt === dt ? U.call(I, F ? "html" : "body")[0] : F ? I.documentElement : je;
  }, bo = function(x) {
    return H.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ur = function(x) {
    return x instanceof d && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof u) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, xo = function(x) {
    return typeof l == "function" && x instanceof l;
  };
  function ft(B, x, I) {
    Jn(B, (_) => {
      _.call(e, x, I, qt);
    });
  }
  const wo = function(x) {
    let I = null;
    if (ft(D.beforeSanitizeElements, x, null), Ur(x))
      return it(x), !0;
    const _ = Ee(x.nodeName);
    if (ft(D.uponSanitizeElement, x, {
      tagName: _,
      allowedTags: v
    }), te && x.hasChildNodes() && !xo(x.firstElementChild) && Fe(/<[/\w!]/g, x.innerHTML) && Fe(/<[/\w!]/g, x.textContent) || x.nodeType === gn.progressingInstruction || te && x.nodeType === gn.comment && Fe(/<[/\w]/g, x.data))
      return it(x), !0;
    if (!v[_] || be[_]) {
      if (!be[_] && So(_) && (Z.tagNameCheck instanceof RegExp && Fe(Z.tagNameCheck, _) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(_)))
        return !1;
      if (pe && !wt[_]) {
        const me = A(x) || x.parentNode, je = k(x) || x.childNodes;
        if (je && me) {
          const we = je.length;
          for (let He = we - 1; He >= 0; --He) {
            const ht = g(je[He], !0);
            ht.__removalCount = (x.__removalCount || 0) + 1, me.insertBefore(ht, b(x));
          }
        }
      }
      return it(x), !0;
    }
    return x instanceof a && !oc(x) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && Fe(/<\/no(script|embed|frames)/i, x.innerHTML) ? (it(x), !0) : (ue && x.nodeType === gn.text && (I = x.textContent, Jn([P, C, S], (me) => {
      I = hn(I, me, " ");
    }), x.textContent !== I && (fn(e.removed, {
      element: x.cloneNode()
    }), x.textContent = I)), ft(D.afterSanitizeElements, x, null), !1);
  }, vo = function(x, I, _) {
    if (ye && (I === "id" || I === "name") && (_ in n || _ in sc))
      return !1;
    if (!($ && !ce[I] && Fe(E, I))) {
      if (!(Ae && Fe(w, I))) {
        if (!M[I] || ce[I]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(So(x) && (Z.tagNameCheck instanceof RegExp && Fe(Z.tagNameCheck, x) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(x)) && (Z.attributeNameCheck instanceof RegExp && Fe(Z.attributeNameCheck, I) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(I, x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            I === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && Fe(Z.tagNameCheck, _) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(_)))
          ) return !1;
        } else if (!Br[I]) {
          if (!Fe(re, hn(_, X, ""))) {
            if (!((I === "src" || I === "xlink:href" || I === "href") && x !== "script" && wc(_, "data:") === 0 && uo[x])) {
              if (!(ee && !Fe(le, hn(_, X, "")))) {
                if (_)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, So = function(x) {
    return x !== "annotation-xml" && Gr(x, fe);
  }, Co = function(x) {
    ft(D.beforeSanitizeAttributes, x, null);
    const {
      attributes: I
    } = x;
    if (!I || Ur(x))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: M,
      forceKeepAttr: void 0
    };
    let me = I.length;
    for (; me--; ) {
      const je = I[me], {
        name: we,
        namespaceURI: He,
        value: ht
      } = je, Gt = Ee(we), Kr = ht;
      let Re = we === "value" ? Kr : vc(Kr);
      if (_.attrName = Gt, _.attrValue = Re, _.keepAttr = !0, _.forceKeepAttr = void 0, ft(D.uponSanitizeAttribute, x, _), Re = _.attrValue, Ne && (Gt === "id" || Gt === "name") && (Rt(we, x), Re = ae + Re), te && Fe(/((--!?|])>)|<\/(style|title|textarea)/i, Re)) {
        Rt(we, x);
        continue;
      }
      if (Gt === "attributename" && Gr(Re, "href")) {
        Rt(we, x);
        continue;
      }
      if (_.forceKeepAttr)
        continue;
      if (!_.keepAttr) {
        Rt(we, x);
        continue;
      }
      if (!q && Fe(/\/>/i, Re)) {
        Rt(we, x);
        continue;
      }
      ue && Jn([P, C, S], (Ao) => {
        Re = hn(Re, Ao, " ");
      });
      const ko = Ee(x.nodeName);
      if (!vo(ko, Gt, Re)) {
        Rt(we, x);
        continue;
      }
      if (R && typeof h == "object" && typeof h.getAttributeType == "function" && !He)
        switch (h.getAttributeType(ko, Gt)) {
          case "TrustedHTML": {
            Re = R.createHTML(Re);
            break;
          }
          case "TrustedScriptURL": {
            Re = R.createScriptURL(Re);
            break;
          }
        }
      if (Re !== Kr)
        try {
          He ? x.setAttributeNS(He, we, Re) : x.setAttribute(we, Re), Ur(x) ? it(x) : Ro(e.removed);
        } catch {
          Rt(we, x);
        }
    }
    ft(D.afterSanitizeAttributes, x, null);
  }, ic = function B(x) {
    let I = null;
    const _ = bo(x);
    for (ft(D.beforeSanitizeShadowDOM, x, null); I = _.nextNode(); )
      ft(D.uponSanitizeShadowNode, I, null), wo(I), Co(I), I.content instanceof o && B(I.content);
    ft(D.afterSanitizeShadowDOM, x, null);
  };
  return e.sanitize = function(B) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, _ = null, me = null, je = null;
    if (Hr = !B, Hr && (B = "<!-->"), typeof B != "string" && !xo(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!e.isSupported)
      return B;
    if (oe || Vr(x), e.removed = [], typeof B == "string" && (Ze = !1), Ze) {
      if (B.nodeName) {
        const ht = Ee(B.nodeName);
        if (!v[ht] || be[ht])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof l)
      I = yo("<!---->"), _ = I.ownerDocument.importNode(B, !0), _.nodeType === gn.element && _.nodeName === "BODY" || _.nodeName === "HTML" ? I = _ : I.appendChild(_);
    else {
      if (!O && !ue && !F && // eslint-disable-next-line unicorn/prefer-includes
      B.indexOf("<") === -1)
        return R && V ? R.createHTML(B) : B;
      if (I = yo(B), !I)
        return O ? null : V ? T : "";
    }
    I && J && it(I.firstChild);
    const we = bo(Ze ? B : I);
    for (; me = we.nextNode(); )
      wo(me), Co(me), me.content instanceof o && ic(me.content);
    if (Ze)
      return B;
    if (O) {
      if (G)
        for (je = ne.call(I.ownerDocument); I.firstChild; )
          je.appendChild(I.firstChild);
      else
        je = I;
      return (M.shadowroot || M.shadowrootmode) && (je = z.call(r, je, !0)), je;
    }
    let He = F ? I.outerHTML : I.innerHTML;
    return F && v["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Fe(Ui, I.ownerDocument.doctype.name) && (He = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + He), ue && Jn([P, C, S], (ht) => {
      He = hn(He, ht, " ");
    }), R && V ? R.createHTML(He) : He;
  }, e.setConfig = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vr(B), oe = !0;
  }, e.clearConfig = function() {
    qt = null, oe = !1;
  }, e.isValidAttribute = function(B, x, I) {
    qt || Vr({});
    const _ = Ee(B), me = Ee(x);
    return vo(_, me, I);
  }, e.addHook = function(B, x) {
    typeof x == "function" && fn(D[B], x);
  }, e.removeHook = function(B, x) {
    if (x !== void 0) {
      const I = bc(D[B], x);
      return I === -1 ? void 0 : xc(D[B], I, 1)[0];
    }
    return Ro(D[B]);
  }, e.removeHooks = function(B) {
    D[B] = [];
  }, e.removeAllHooks = function() {
    D = Lo();
  }, e;
}
Ki();
const Fo = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Lc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
const Fc = (t) => /^https?:\/\//i.test(t);
function $c(t, e = "create", n = "Info") {
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
function $o(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const Po = (t) => t == null || t === "", Jt = (t) => t.type === "string", An = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? Ji(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? Gi(l) : null;
    o === "create" && u && i[u] !== void 0 && Po(c) && (c = i[u]), Po(c) && l.default && (c = l.default), Fo.includes(l.type ?? "") ? e[a] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    if (Fo.includes(l.type ?? "")) {
      const f = $e.array().of(
        $e.string()
      );
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else if (l.multiple === !0 || l.type === "tags") {
      const f = $e.array().of($e.string());
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else l.type === "email" ? d = $e.string().email("Invalid email") : l.type === "number" ? d = $e.number().typeError("Must be a number") : l.type === "json" ? d = $e.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = $e.string().nullable() : d = $e.string();
    l?.validate && Object.entries(l.validate).forEach(([f, h]) => {
      switch (f) {
        case "email":
          h && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          Jt(d) && (d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          ));
          break;
        case "regex":
          Jt(d) && (d = d.matches(
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
              const g = m.replace(/-/g, "/"), [y, b, k] = g.split("/");
              if (!y || !b || !k) return !1;
              const A = /* @__PURE__ */ new Date(`${k}-${b}-${y}`);
              return !isNaN(A.getTime());
            }
          );
          break;
        case "time":
          Jt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          ));
          break;
        case "timesec":
          Jt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          ));
          break;
        case "number":
        case "numeric":
          d = $e.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = $e.number().typeError("Must be a decimal").transform((m, g) => {
            if (g == null || g === "") return;
            const y = Number(g);
            if (isNaN(y)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const b = Number(m);
              return Number.isInteger(b) ? Number(y.toFixed(b)) : y;
            }
            return y;
          });
          break;
        case "alphanumeric":
          Jt(d) && (d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          ));
          break;
        case "alpha":
          Jt(d) && (d = d.matches(
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
}, Dn = {
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
const Fn = (t) => t === !0 || t === "true", gt = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => gt(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    gt(n, e),
    gt(r, e)
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
}, mr = (t, e) => {
  if (!(!t || e == null))
    return t.find((n) => String(n.value) === String(e))?.label;
}, Pc = (t) => t.reduce((e, n) => {
  const r = n.group || "__ungrouped__";
  return e[r] || (e[r] = []), e[r].push(n), e;
}, {}), _c = (t) => t.map((e) => [e.value, e.label]);
async function vs() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const t = await new Promise(
      (e, n) => {
        navigator.geolocation.getCurrentPosition(
          e,
          n,
          {
            enableHighAccuracy: !0,
            timeout: 3e4,
            maximumAge: 0
          }
        );
      }
    );
    return {
      latitude: t.coords.latitude,
      longitude: t.coords.longitude,
      altitude: t.coords.altitude,
      accuracy: t.coords.accuracy
    };
  } catch (t) {
    if (console.log("error", t), !(t instanceof GeolocationPositionError))
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
const Bc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e), Hc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "altitude").map(([e]) => e);
function Wc(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function Ot(t, e, n) {
  const r = Gi(e);
  r && n && qc(n, r, t);
}
function Vc(t) {
  if (!t || typeof t != "object") return !1;
  const e = t.src;
  return typeof t.target == "string" && typeof e == "object" && e !== null && (e.type === "api" || typeof e.queryid == "string" || typeof e.table == "string" && typeof e.columns < "u");
}
function Uc(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const Yt = (t) => {
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
}, Kc = "__form_persist__", qi = (t) => `${Kc}:${t}`;
function Gi(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Ji(t) {
  try {
    return JSON.parse(localStorage.getItem(qi(t)) || "{}");
  } catch {
    return {};
  }
}
function qc(t, e, n) {
  const r = Ji(t);
  localStorage.setItem(
    qi(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function Or(t, e) {
  const n = new Set(
    e.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => !n.has(r))
  );
}
function Xt(t) {
  return Ce.isAxiosError(t) ? t.response?.data?.message || t.message || "Something went wrong" : t instanceof Error ? t.message : typeof t == "string" ? t : "Something went wrong";
}
function es(t, e) {
  return e === !1 ? null : typeof e == "string" ? e : t?.data?.message ? t.data.message : t?.message ? t.message : "Operation completed successfully";
}
const Gc = (t) => t.type === "camera2" ? {
  accept: "image/*",
  capture: "environment"
} : {
  accept: "image/*"
}, Jc = (t) => {
  switch (t.type) {
    case "camera2":
      return "fa-camera";
    // strict camera
    case "camera":
      return "fa-camera-retro";
    default:
      return "fa-image";
  }
}, Yi = (t) => t && !t.includes("fakepath"), Xi = ({
  uploads: t,
  currentValue: e,
  multiple: n
}) => {
  const r = (Array.isArray(e) ? e : e ? [e] : []).filter(Yi), s = t.map((o) => `${o.fileId}&${o.path}`);
  return n ? [...r, ...s] : s;
}, Yc = (t) => t === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : t, Xc = (t) => t >= 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(2)} MB` : `${(t / 1024).toFixed(0)} KB`, Qc = (t, e) => {
  if (!e?.trim()) return !0;
  const n = (t.type || "").toLowerCase(), r = t.name.toLowerCase();
  return e.split(",").map((o) => o.trim().toLowerCase()).filter(Boolean).some((o) => {
    if (o.startsWith("."))
      return r.endsWith(o);
    if (o.endsWith("/*")) {
      const i = o.slice(0, -1);
      return n.startsWith(i);
    }
    return n === o;
  });
}, Qi = ({
  e: t,
  existingFiles: e,
  maxFiles: n,
  maxFileSize: r,
  accept: s
}) => {
  const o = t.currentTarget.files;
  if (!o) return null;
  const i = Array.from(o);
  if (e.length + i.length > n)
    return alert(`You can upload maximum ${n} file(s)`), t.currentTarget.value = "", null;
  if (r) {
    const a = Number(r), c = i.find((u) => u.size > a);
    if (c)
      return alert(
        `File "${c.name}" exceeds max size of ${Xc(r)}`
      ), t.currentTarget.value = "", null;
  }
  if (s) {
    const a = i.filter(
      (c) => !Qc(c, s)
    );
    if (a.length > 0)
      return alert(
        `Unsupported file type:

${a.map((c) => c.name).join(`
`)}

Allowed types:
${s}`
      ), t.currentTarget.value = "", null;
  }
  return o;
}, Qt = (t, e) => {
  const n = Zr(t.options_top), r = Zr(t.options), s = e ?? [], o = Zr(t.options_bottom), i = /* @__PURE__ */ new Set(), l = (a) => a.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(o)
  ];
}, Ir = (t) => {
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
}, Zc = ({
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
}, eu = (t) => {
  const e = t?.data;
  return Array.isArray(e?.results?.options) ? e.results.options[0] : Array.isArray(e?.data) ? e.data[0] : Array.isArray(e?.results) ? e.results[0] : Array.isArray(e) ? e[0] : e?.results ?? e;
}, vn = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), ts = async (t) => (await Ce.get(
  t.baseURL + t.dbopsGetHash,
  { headers: vn(t) }
)).data.refhash, ns = async (t, e) => (await Ce.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: vn(t) }
)).data.refid, tu = {
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
    const l = await Ce.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: vn(t) }
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
    return (await Ce.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: vn(t) }
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
    return (await Ce.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: vn(t) }
    )).data;
  }
};
async function Xn(t, e, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await Ce({
      method: "POST",
      url: t.baseURL + t.registerQuery,
      data: { query: e ?? {}, srcid: s },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    })).data.queryid), await Ce({
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
async function nu(t, e) {
  let n = e.previewPath ?? "/api/files/preview";
  const r = await Ce.get(
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
async function Zi(t, e) {
  if (!t?.uploadURL)
    throw new Error("Upload URL missing");
  const n = t.baseURL + t.uploadURL;
  return Promise.all(
    Array.from(e).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await Ce.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${t.accessToken}`
        }
      })).data;
    })
  );
}
async function ru(t, e) {
  let n = t?.removeFileURL ?? "/api/files/delete";
  return (await Ce.post(
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
function su({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: a,
  setFieldLoading: c,
  filesToDelete: u
}) {
  const d = [
    "select",
    "dataSelector",
    "dataSelectorFromTable",
    "dataSelectorFromUniques",
    "dataMethod",
    "suggest",
    "autosuggest",
    "autocomplete"
  ].includes(t?.type || "text"), [f, h] = Ve(!1), [m, g] = Ve(d), [y, b] = Ve(
    Qt(t, i ?? [])
  ), [k, A] = Ve(0), [R, T] = Ve(""), [j, H] = Ve(0), ne = nn(null), U = nn(null), [z, D] = Ve(!1), P = nn(R), C = t.disabled === !0;
  We(() => {
    P.current = R;
  }, [R]), We(() => {
    if (t.type !== "select" || t.multiple || t["no-option"] !== "false" || e.values[S] || y.length === 0) return;
    const ee = y[0]?.value;
    ee != null && e.setFieldValue(S, ee, !1);
  }, [y]), We(() => {
    i && b(Qt(t, i));
  }, [i]), We(() => {
    window.formAPI = {
      setValue: ($, ee) => {
        e.setFieldValue($, ee);
      },
      getValue: ($) => e.values[$],
      setValues: ($) => {
        Object.entries($).forEach(([ee, q]) => {
          e.setFieldValue(ee, q);
        });
      },
      getValues: () => e.values
    }, window.setFieldValue = ($, ee) => {
      e.setFieldValue($, ee);
    };
  }, [e]), We(() => {
    if (!z) return;
    const $ = (ee) => {
      const q = ee.target;
      U.current?.contains(q) || ne.current?.contains(q) || (D(!1), T(""));
    };
    return document.addEventListener("mousedown", $), () => {
      document.removeEventListener("mousedown", $);
    };
  }, [z]);
  const S = t.name;
  We(() => {
    let $ = !0;
    return (async () => {
      try {
        let q = t.valueKey ?? "value", ue = t.labelKey ?? "title";
        const te = t?.source ?? {};
        if (t.type === "dataMethod") {
          const F = t.method, oe = F ? n[F] : void 0;
          if (oe)
            try {
              const J = await oe(), O = Array.isArray(J.data?.results?.options) ? J.data?.results?.options : Array.isArray(J?.data?.data) ? J.data.data : Array.isArray(J.data?.results) ? J.data?.results : Array.isArray(J?.data) ? J.data : J, G = Array.isArray(O) ? O.map(Yt) : [], V = yn(q, ue, G, t.groupKey);
              $ && b(Qt(t, V));
              return;
            } catch (J) {
              console.error("Method execution failed:", J), $ && b([]);
              return;
            }
          else {
            $ && b([]);
            return;
          }
        }
        if (te.type === "api" && te.endpoint)
          try {
            let F = {};
            if (te.refid && (F.refid = te.refid), t.parameter) {
              const ye = Zc({ field: t, formValues: e.values });
              F = { ...F, ...ye };
            }
            const oe = {
              method: te.method || "GET",
              url: r?.baseURL + te.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...te.method === "GET" ? { params: { refid: te.refid } } : { data: F }
            }, J = await Ce(oe), O = Array.isArray(J.data?.results?.options) ? J.data?.results?.options : Array.isArray(J?.data?.data) ? J.data.data : Array.isArray(J.data?.results) ? J.data?.results : Array.isArray(J?.data) ? J.data : J, G = Array.isArray(O) ? O.map(Yt) : [], V = yn(q, ue, G, t.groupKey);
            $ && b(Qt(t, V));
            return;
          } catch (F) {
            console.error("API execution failed:", F), $ && b([]);
            return;
          }
        if (t.table || t.type === "dataSelector" || t.queryid) {
          if (!r) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            let F;
            if (t.type === "dataSelector")
              F = {
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
              F = {
                table: t.table,
                cols: t.columns,
                where: t.where ? s ? gt(t.where, { refid: s }) : t.where : void 0
              };
            }
            const oe = await Xn(r, F, t?.queryid, void 0, o), J = Array.isArray(oe?.data?.data) ? oe.data.data : Array.isArray(oe?.data) ? oe.data : oe, O = Array.isArray(J) ? J.map(Yt) : [], G = yn(q, ue, O, t.groupKey);
            $ && b(Qt(t, G));
          } catch (F) {
            console.error("API fetch failed:", F);
          }
        }
      } catch (q) {
        console.log(q);
      } finally {
        $ && d && g(!1);
      }
    })(), () => {
      $ = !1;
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
    k
  ]);
  const E = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${C ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, w = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, le = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, X = ar(
    () => _c(y),
    [y]
  ), fe = ar(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !R.trim()) return null;
    const $ = R.trim().toLowerCase();
    return X.find(([, ee]) => ee.trim().toLowerCase() === $);
  }, [t.type, R, X]), re = X.length, v = !!(t.search && (t.queryid || t.table)), W = ar(() => v || !R ? X : X.filter(
    ([, $]) => $.toLowerCase().includes(R.toLowerCase())
  ), [v, R, X]), M = ($, ee) => {
    if (z)
      if ($.key === "ArrowDown")
        $.preventDefault(), H(
          (q) => q + 1 < W.length ? q + 1 : 0
        );
      else if ($.key === "ArrowUp")
        $.preventDefault(), H(
          (q) => q - 1 >= 0 ? q - 1 : W.length - 1
        );
      else if ($.key === "Enter") {
        $.preventDefault();
        const [q] = W[j] || [];
        if (q) {
          let ue = ee ? q : [...e.values[t.name], q];
          e.setFieldValue(t.name, ue), Ot(ue, t, o);
        }
        D(!1);
      } else $.key === "Escape" && (T(""), D(!1));
  };
  We(() => {
    ne.current?.querySelector(
      `[data-index="${j}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [j]), We(() => {
    j >= W.length && H(0);
  }, [W, j]), We(() => {
    const $ = t.autocomplete, ee = t.ajaxchain;
    if (!$ && !ee) return;
    const q = e.values[t.name], ue = Array.isArray(ee) ? ee : ee ? [ee] : [];
    (async () => {
      try {
        if (Vc($)) {
          const F = $.src;
          if (!F || !r) return;
          let oe = {};
          if ("type" in F && F.type === "api" && q) {
            let O = t.name;
            typeof t.parameter == "string" && t.parameter && (O = t.parameter);
            const G = { [O]: q, refid: q };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [Ne, ae] of Object.entries(t.parameter))
                G[Ne] = Ne === O ? q : e.values?.[ae];
            const V = {
              method: F.method || "GET",
              url: r?.baseURL + F.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...F.method === "GET" ? { params: G } : { data: G }
            }, ye = await Ce(V);
            oe = eu(ye);
          } else if (q) {
            let O;
            if (!F.queryid) {
              if (!F.table || !F.columns)
                throw new Error("SQL query requires field.table");
              const V = gt(F?.where ?? {}, {
                refid: q
              });
              O = {
                ...F,
                table: F.table,
                cols: F.columns,
                where: V
              };
            }
            const { data: G } = await Xn(r, O, F?.queryid, q, o);
            oe = Array.isArray(G?.data?.data) ? G.data.data[0] : Array.isArray(G?.data) ? G.data[0] : G?.data;
          }
          let J = Yt(oe);
          console.log("normalizedRow", J), J && $.target.split(",").map((O) => O.trim()).forEach((O) => {
            e.setFieldValue(O, J[O] ?? "");
          });
          return;
        }
        if (!q) return;
        for (const F of ue) {
          c?.(F.target, !0);
          const oe = F.src;
          if (!F || typeof F != "object" || !oe || typeof oe != "object" || !r) continue;
          let J;
          if ("type" in oe && oe.type === "api") {
            let ae = t.name;
            typeof t.parameter == "string" && t.parameter && (ae = t.parameter);
            let pe = { [ae]: q, refid: q };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [Je, wt] of Object.entries(t.parameter))
                pe[Je] = Je === ae ? q : e.values?.[wt];
            const Ze = {
              method: oe.method || "GET",
              url: r?.baseURL + oe.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...oe.method === "GET" ? { params: pe } : { data: pe }
            };
            try {
              const { data: Je } = await Ce(Ze);
              J = Je;
            } catch {
            } finally {
              c?.(F.target, !1);
            }
          } else {
            let ae;
            if (!oe.queryid) {
              if (!oe.table || !oe.columns)
                throw new Error("SQL query requires field.table");
              const pe = gt(oe?.where ?? {}, {
                refid: q
              });
              ae = {
                ...oe,
                table: oe.table,
                cols: oe.columns,
                where: pe
              };
            }
            try {
              const { data: pe } = await Xn(r, ae, oe?.queryid, q, o);
              J = pe;
            } catch {
            } finally {
              c?.(F.target, !1);
            }
          }
          let O = t.valueKey ?? "value", G = t.labelKey ?? "title";
          const V = Array.isArray(J?.results?.options) ? J?.results?.options : Array.isArray(J.data) ? J.data : Array.isArray(J.results) ? J.results : J, ye = Array.isArray(V) ? V.map(Yt) : [], Ne = yn(
            O,
            G,
            ye,
            t.groupKey
          );
          e.setFieldValue(F.target, e.initialValues[F.target]), l?.(F.target, Ne);
        }
      } catch (F) {
        console.error("Autocomplete / AjaxChain fetch failed", F);
      }
    })();
  }, [e.values[t.name]]), We(() => {
    if (!v || !R.trim() || !r) return;
    const $ = Uc(t.columns ?? ""), ee = new AbortController(), q = setTimeout(async () => {
      try {
        g(!0);
        let ue;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const ye = s ? gt(t.where ?? {}, {
            refid: s
          }) : t.where;
          ue = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: ye
          };
        }
        let te = {};
        Array.isArray($) && $.forEach((ye) => {
          te[ye] = [R, "LIKE"];
        });
        let F = t.valueKey ?? "value", oe = t.labelKey ?? "title";
        const { data: J } = await Xn(r, ue, t?.queryid, void 0, o, te), O = Array.isArray(J?.data?.data) ? J.data.data : Array.isArray(J?.data) ? J.data : J, G = Array.isArray(O) ? O.map(Yt) : [], V = yn(
          F,
          oe,
          G,
          t.groupKey
        );
        b(Qt(t, V));
      } catch (ue) {
        if (Ce.isCancel(ue)) return;
        console.error("Search fetch failed", ue);
      } finally {
        g(!1);
      }
    }, 500);
    return () => {
      clearTimeout(q), ee.abort();
    };
  }, [v, R, s]);
  const K = async ($) => {
    if ($.length === 0) {
      console.error("No file");
      return;
    }
    try {
      g(!0);
      const ee = await Zi(r, $), q = Xi({
        uploads: ee,
        currentValue: e.values[S],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        S,
        q
      ), Ot(q, t, o);
    } catch (ee) {
      console.error("File upload failed", ee), e.setFieldError(S, "File upload failed");
    } finally {
      g(!1);
    }
  }, Z = async ($) => {
    const ee = Array.isArray(e.values[S]) ? e.values[S] : [], q = $.split("&")[0];
    if (!q) return;
    const ue = ee.filter((te) => te.split("&")[0] !== q);
    e.setFieldValue(S, ue), u?.current.push(q), Ot(ue, t, o);
  }, be = async ($, ee, q) => {
    const ue = ee[$];
    if (!ue) return;
    const te = n?.[ue];
    if (typeof te != "function") {
      console.error(`Method "${String(ue)}" not found`);
      return;
    }
    try {
      await Promise.resolve(te(q));
    } catch (F) {
      console.error(`Method "${String(ue)}" failed`, F);
    }
  };
  return {
    setHighlightedIndex: H,
    executeFieldMethod: be,
    handleFileUpload: K,
    handleKeyDown: M,
    setSearch: T,
    setOpen: D,
    setIsFocused: h,
    handleInputChange: ($) => {
      if (C) return;
      const ee = $.target.value;
      T(ee), H(0), ee.trim() ? D(!0) : (D(!1), e.setFieldValue(S, ""));
    },
    handleSelect: ($) => {
      e.setFieldValue(S, $), Ot($, t, o), T(""), D(!1), be("onChange", t, `${S}-${$}`);
    },
    handlePersist: Ot,
    setLoading: g,
    removeFile: Z,
    optionCount: re,
    baseInputClasses: E,
    focusClasses: w,
    labelClasses: le,
    search: R,
    highlightedIndex: j,
    options: y,
    isDisabled: C,
    key: S,
    filteredOptions: W,
    open: z,
    listRef: ne,
    isFocused: f,
    exactMatch: fe,
    triggerRef: U,
    loading: m,
    refreshOptions: () => A(($) => $ + 1)
  };
}
function _s({
  anchorRef: t,
  open: e,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = Ve({}), l = nn(null);
  return lc(() => {
    if (!e || !t.current || !l.current) return;
    const a = t.current, c = () => {
      const d = a.getBoundingClientRect(), f = window.innerHeight, h = l.current?.offsetHeight || s, m = f - d.bottom, g = d.top, b = m < h && g > m ? d.top - h - r : d.bottom + r;
      i({
        position: "fixed",
        top: b,
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
  }, [e, t, r, s]), e ? ac(
    /* @__PURE__ */ p.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function _o({
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
  loading: b
}) {
  const k = t.name;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: k,
        value: JSON.stringify(c.values[k] ?? "")
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: r, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: k,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${e ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: m,
        tabIndex: 0,
        onClick: () => {
          e || y((A) => !A);
        },
        onKeyDown: (A) => {
          e || n(A, !0);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: c.values[k] ? mr(h, c.values[k]) ?? "Select option" : `Select ${t.label}` }),
          b ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(_s, { anchorRef: m, open: g, children: /* @__PURE__ */ p.jsxs(
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
              onChange: (A) => {
                a(A.target.value);
              },
              onKeyDown: (A) => n(A, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: (A) => {
                A.preventDefault(), A.stopPropagation(), c.setFieldValue(k, ""), y(!1), d("", t, f), a("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([A, R], T) => /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `${k}-${A}`,
              "data-index": T,
              onClick: (j) => {
                j.preventDefault(), j.stopPropagation(), c.setFieldValue(k, A), d(A, t, f), y(!1), a(""), u("onChange", t, `${k}-${A}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[k] === A ? "bg-indigo-50 text-indigo-600 font-medium" : l === T ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: R
            },
            A
          )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[k] && c.errors[k] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[k]) })
  ] });
}
function Bo({
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
  setOpen: b,
  loading: k
}) {
  const A = t.name, R = m.map((j) => j.value), T = R.every((j) => r.includes(j));
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: A,
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
        id: A,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          e || b((j) => !j);
        },
        onKeyDown: (j) => {
          e || n(j, !1);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((j) => mr(m, j) ?? j).join(", ") : `Select ${t.label}` }),
          k ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(_s, { anchorRef: g, open: y && !e, children: /* @__PURE__ */ p.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (j) => {
            e || c(j.target.value);
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
                checked: T,
                onChange: (j) => {
                  const H = j.target.checked ? R : [];
                  u.setFieldValue(A, H), f(H, t, h), d("onChange", t, A);
                },
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([j, H], ne) => /* @__PURE__ */ p.jsxs(
        "label",
        {
          htmlFor: `${A}-${j}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(j) ? "bg-indigo-50 text-indigo-600 font-medium" : a === ne ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: `${A}-${j}`,
                type: "checkbox",
                checked: r?.includes(j),
                onChange: (U) => {
                  const z = U.target.checked ? Array.from(/* @__PURE__ */ new Set([...r, j])) : r?.filter((D) => D !== j);
                  u.setFieldValue(A, z), f(z, t, h), d("onChange", t, `${A}-${j}`);
                },
                onBlur: u.handleBlur,
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            H
          ]
        },
        j
      )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[A] && u.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[A]) })
  ] });
}
function ou({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const r = t?.replace(/^[^&]*&/, ""), [s, o] = Ve(null);
  return We(() => {
    if (Fc(r)) {
      o(r);
      return;
    }
    if (!n) return;
    let i = !0, l = null;
    if (!Yi(t)) {
      console.log("skipping preview:", t);
      return;
    }
    return nu(r, n).then((a) => {
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
  module_refid: r,
  filesToDelete: s
}) {
  let o = e?.name;
  const i = nn(null), l = e.max !== void 0 ? Number(e.max) : 1 / 0, [a, c] = Ve(!1), u = Array.isArray(t.values[o]) ? t.values[o] : t.values[o] ? [t.values[o]] : [], d = Gc(e), f = async (g) => {
    const y = Qi({
      e: g,
      existingFiles: u,
      maxFiles: l,
      maxFileSize: e.file_size,
      accept: d.accept
    });
    if (y)
      try {
        c(!0);
        const b = await Zi(n, y), k = Xi({
          uploads: b,
          currentValue: t.values[o],
          multiple: e.multiple ?? !1
        });
        t.setFieldValue(
          o,
          k
        ), Ot(k, e, r), g.target.value = "";
      } catch (b) {
        console.error("File upload failed", b), t.setFieldError(o, "File upload failed");
      } finally {
        c(!1);
      }
  }, h = async (g) => {
    const y = Array.isArray(t.values[o]) ? t.values[o] : [], b = g.split("&")[0];
    if (!b) return;
    const k = y.filter((A) => A.split("&")[0] !== b);
    t.setFieldValue(o, k), s?.current.push(b), Ot(k, e, r);
  }, m = e.multiple === !0;
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: [
      e.label,
      e.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: i,
        type: "file",
        className: "hidden",
        multiple: m,
        ...d,
        onChange: f
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          u.length > 0 ? u.map((g) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ p.jsx(
              ou,
              {
                field_name: g,
                filePath: g,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  h(g);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, g)) : null,
          /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: () => {
                a || i.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: a ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ p.jsx("i", { className: `fa-solid ${Jc(e)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    t.touched[o] && t.errors[o] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[o]) })
  ] });
}
function Oe(t) {
  this.content = t;
}
Oe.prototype = {
  constructor: Oe,
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
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new Oe(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Oe(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Oe([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Oe(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new Oe(s);
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
    return t = Oe.from(t), t.size ? new Oe(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Oe.from(t), t.size ? new Oe(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Oe.from(t);
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
Oe.from = function(t) {
  if (t instanceof Oe) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Oe(e);
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
      let i = s.text, l = o.text, a = 0;
      for (; i[a] == l[a]; a++)
        n++;
      return a && a < i.length && a < l.length && sl(i.charCodeAt(a - 1)) && rl(i.charCodeAt(a)) && n--, n;
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
      let c = i.text, u = l.text, d = c.length, f = u.length;
      for (; d > 0 && f > 0 && c[d - 1] == u[f - 1]; )
        d--, f--, n--, r--;
      return d && f && d < c.length && sl(c.charCodeAt(d - 1)) && rl(c.charCodeAt(d)) && (n++, r++), { a: n, b: r };
    }
    if (i.content.size || l.content.size) {
      let c = nl(i.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
function rl(t) {
  return t >= 56320 && t < 57344;
}
function sl(t) {
  return t >= 55296 && t < 56320;
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
      return Qn(0, e);
    if (e == this.size)
      return Qn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Qn(n + 1, o) : Qn(n, r);
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
    return N.fromArray(n.map(e.nodeFromJSON));
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
function Qn(t, e) {
  return rs.index = t, rs.offset = e, rs;
}
function gr(t, e) {
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
      if (!gr(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !gr(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ge = class Ss {
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
    return this == e || this.type == e.type && gr(this.attrs, e.attrs);
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
      return Ss.none;
    if (e instanceof Ss)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
ge.none = [];
class Nn extends Error {
}
class L {
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
    let r = il(this.content, e + this.openStart, n, this.openStart + 1, this.openEnd + 1);
    return r && new L(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new L(ol(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return L.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new L(N.fromJSON(e, n.content), r, s);
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
    return new L(e, r, s);
  }
}
L.empty = new L(N.empty, 0, 0);
function ol(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(ol(o.content, e - s - 1, n - s - 1)));
}
function il(t, e, n, r, s, o) {
  let { index: i, offset: l } = t.findIndex(e), a = t.maybeChild(i);
  if (l == e || a.isText)
    return o && r <= 0 && s <= 0 && !o.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let c = il(a.content, e - l - 1, n, i == 0 ? r - 1 : 0, i == t.childCount - 1 ? s - 1 : 0, a);
  return c && t.replaceChild(i, a.copy(c));
}
function iu(t, e, n) {
  if (n.openStart > t.depth)
    throw new Nn("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Nn("Inconsistent open depths");
  return ll(t, e, n, 0);
}
function ll(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = ll(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return Dt(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = lu(n, t);
      return Dt(o, cl(t, i, l, e, r));
    }
  else return Dt(o, yr(t, e, r));
}
function al(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Nn("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Cs(t, e, n) {
  let r = t.node(n);
  return al(r, e.node(n)), r;
}
function zt(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Sn(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (zt(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    zt(s.child(l), r);
  e && e.depth == n && e.textOffset && zt(e.nodeBefore, r);
}
function Dt(t, e) {
  if (!t.type.validContent(e))
    throw new Nn("Invalid content for node " + t.type.name);
  return t.copy(e);
}
function cl(t, e, n, r, s) {
  let o = t.depth > s && Cs(t, e, s + 1), i = r.depth > s && Cs(n, r, s + 1), l = [];
  return Sn(null, t, s, l), o && i && e.index(s) == n.index(s) ? (al(o, i), zt(Dt(o, cl(t, e, n, r, s + 1)), l)) : (o && zt(Dt(o, yr(t, e, s + 1)), l), Sn(e, n, s, l), i && zt(Dt(i, yr(n, r, s + 1)), l)), Sn(r, null, s, l), new N(l);
}
function yr(t, e, n) {
  let r = [];
  if (Sn(null, t, n, r), t.depth > n) {
    let s = Cs(t, e, n + 1);
    zt(Dt(s, yr(t, e, n + 1)), r);
  }
  return Sn(e, null, n, r), new N(r);
}
function lu(t, e) {
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
      return ge.none;
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
        return new br(this, e, r);
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
    let r = Ho.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      Ho.set(e, r = new au());
    let s = r.elts[r.i] = En.resolve(e, n);
    return r.i = (r.i + 1) % cu, s;
  }
}
class au {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const cu = 12, Ho = /* @__PURE__ */ new WeakMap();
class br {
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
const uu = /* @__PURE__ */ Object.create(null);
class lt {
  /**
  @internal
  */
  constructor(e, n, r, s = ge.none) {
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
  Invoke a callback for all descendant nodes recursively overlapping
  the given two positions that are relative to start of this
  node's content. This includes all ancestors of the nodes
  containing the two positions. The callback is invoked with the
  node, its position relative to the original node (method receiver),
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
    return this.type == e && gr(this.attrs, n || e.defaultAttrs || uu) && ge.sameSet(this.marks, r || ge.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new lt(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new lt(this.type, this.attrs, this.content, e);
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
      return L.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new L(c, s.depth - i, o.depth - i);
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
    return iu(this.resolve(e), this.resolve(n), r);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ul(this.marks, e);
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
    let e = ge.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ge.sameSet(e, this.marks))
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
lt.prototype.text = void 0;
class xr extends lt {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ul(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new xr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new xr(this.type, this.attrs, e, this.marks);
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
function ul(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class Pt {
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
    let r = new du(e, n);
    if (r.next == null)
      return Pt.empty;
    let s = dl(r);
    r.next && r.err("Unexpected trailing text");
    let o = bu(yu(s));
    return xu(o, r), o;
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
Pt.empty = new Pt(!0);
class du {
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
function dl(t) {
  let e = [];
  do
    e.push(fu(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function fu(t) {
  let e = [];
  do
    e.push(hu(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function hu(t) {
  let e = gu(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = pu(t, e);
    else
      break;
  return e;
}
function Wo(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function pu(t, e) {
  let n = Wo(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Wo(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function mu(t, e) {
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
function gu(t) {
  if (t.eat("(")) {
    let e = dl(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = mu(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function yu(t) {
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
function fl(t, e) {
  return e - t;
}
function Vo(t, e) {
  let n = [];
  return r(e), n.sort(fl);
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
function bu(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Vo(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Vo(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new Pt(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(fl);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function xu(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function hl(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function pl(t, e) {
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
function ml(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${r}`);
  for (let s in t)
    t[s].validate && t[s].validate(e[s]);
}
function gl(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new vu(t, r, e[r]);
  return n;
}
let Uo = class yl {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = gl(e, r.attrs), this.defaultAttrs = hl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == Pt.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : pl(this.attrs, e);
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
    return new lt(this, this.computeAttrs(e), N.from(n), ge.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = N.from(n), this.checkContent(n), new lt(this, this.computeAttrs(e), n, ge.setFrom(r));
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
    return o ? new lt(this, e, n.append(o), ge.setFrom(r)) : null;
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
    ml(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : ge.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new yl(o, n, i));
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
function wu(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class vu {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? wu(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class jr {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = gl(e, s.attrs), this.excluded = null;
    let o = hl(this.attrs);
    this.instance = o ? new ge(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ge(this, pl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new jr(o, s++, n, i)), r;
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
    ml(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Su {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = Oe.from(e.nodes), n.marks = Oe.from(e.marks || {}), this.nodes = Uo.compile(this.spec.nodes, this), this.marks = jr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = Pt.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Ko(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : Ko(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => lt.fromJSON(this, s), this.markFromJSON = (s) => ge.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Uo) {
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
    return new xr(r, r.defaultAttrs, e, ge.setFrom(n));
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
function Ko(t, e) {
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
function Cu(t) {
  return t.tag != null;
}
function ku(t) {
  return t.style != null;
}
class Lt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (Cu(s))
        this.tags.push(s);
      else if (ku(s)) {
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
    let r = new Go(this, n, !1);
    return r.addAll(e, ge.none, n.from, n.to), r.finish();
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
    let r = new Go(this, n, !0);
    return r.addAll(e, ge.none, n.from, n.to), L.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (Eu(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
        r(i = Jo(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = Jo(i)), i.node || i.ignore || i.mark || (i.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new Lt(e, Lt.schemaRules(e)));
  }
}
const bl = {
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
}, Au = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, xl = { ol: !0, ul: !0 }, Tn = 1, ks = 2, Cn = 4;
function qo(t, e, n) {
  return e != null ? (e ? Tn : 0) | (e === "full" ? ks : 0) : t && t.whitespace == "pre" ? Tn | ks : n & ~Cn;
}
class Zn {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = ge.none, this.match = o || (i & Cn ? null : e.contentMatch);
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
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !bl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Go {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = qo(null, n.preserveWhitespace, 0) | (r ? Cn : 0);
    s ? o = new Zn(s.type, s.attrs, ge.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new Zn(null, null, ge.none, !0, null, i) : o = new Zn(e.schema.topNodeType, null, ge.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, o = s.options & ks ? "full" : this.localPreserveWS || (s.options & Tn) > 0, { schema: i } = this.parser;
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
    xl.hasOwnProperty(i) && this.parser.normalizeLists && Nu(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Au.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (bl.hasOwnProperty(i))
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
      let i = ge.none;
      for (let l of s.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Yo(l.type, e.type)) && (i = l.addToSet(i));
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
    let l = qo(e, o, i.options);
    i.options & Cn && i.content.length == 0 && (l |= Cn);
    let a = ge.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : Yo(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Zn(e, n, a, s, null, l)), this.open++, r;
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
function Nu(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && xl.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Eu(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Jo(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Yo(t, e) {
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
class zr {
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
    r || (r = er(n).createDocumentFragment());
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
    if (e.isText)
      return er(n).createTextNode(e.text);
    let { dom: r, contentDOM: s } = ur(er(n), this.nodes[e.type.name](e), null, e.attrs);
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
    return s && ur(er(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return typeof n == "string" ? { dom: e.createTextNode(n) } : ur(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new zr(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Xo(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Xo(e.marks);
  }
}
function Xo(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function er(t) {
  return t.document || window.document;
}
const Qo = /* @__PURE__ */ new WeakMap();
function Tu(t) {
  let e = Qo.get(t);
  return e === void 0 && Qo.set(t, e = Mu(t)), e;
}
function Mu(t) {
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
function ur(t, e, n, r) {
  if (e.nodeType == 1)
    return { dom: e };
  if (e.dom && e.dom.nodeType == 1)
    return e;
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Tu(r)) && o.indexOf(e) > -1)
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
    } else if (typeof f == "string")
      a.appendChild(t.createTextNode(f));
    else {
      let { dom: h, contentDOM: m } = ur(t, f, n, r);
      if (a.appendChild(h), m) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = m;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const wl = 65535, vl = Math.pow(2, 16);
function Ru(t, e) {
  return t + e * vl;
}
function Zo(t) {
  return t & wl;
}
function Ou(t) {
  return (t - (t & wl)) / vl;
}
const Sl = 1, Cl = 2, dr = 4, kl = 8;
class As {
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
    return (this.delInfo & kl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Sl | dr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Cl | dr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & dr) > 0;
  }
}
class Ue {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Ue.empty)
      return Ue.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = Zo(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Ou(e);
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
        let m = e == (n < 0 ? a : d) ? null : Ru(l / 3, e - a), g = e == a ? Cl : e == d ? Sl : dr;
        return (n < 0 ? e != a : e != d) && (g |= kl), new As(h, g, m);
      }
      s += u - c;
    }
    return r ? e + s : new As(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = Zo(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
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
    return new Ue(this.ranges, !this.inverted);
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
    return e == 0 ? Ue.empty : new Ue(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ue.empty = new Ue([]);
class wr {
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
    return new wr(this._maps, this.mirror, e, n);
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
    let e = new wr();
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
    return r ? e : new As(e, s, null);
  }
}
const ss = /* @__PURE__ */ Object.create(null);
class Le {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ue.empty;
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
    let r = ss[n.stepType];
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
    if (e in ss)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return ss[e] = n, n.prototype.jsonID = e, n;
  }
}
class ke {
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
    return new ke(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ke(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return ke.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof Nn)
        return ke.fail(o.message);
      throw o;
    }
  }
}
function Bs(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(Bs(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return N.fromArray(r);
}
class Ct extends Le {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new L(Bs(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return ke.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new tt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ct(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ct && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ct(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Ct(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Le.jsonID("addMark", Ct);
class tt extends Le {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new L(Bs(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return ke.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Ct(this.from, this.to, this.mark);
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
    return new tt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Le.jsonID("removeMark", tt);
class kt extends Le {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ke.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ke.fromReplace(e, this.pos, this.pos + 1, new L(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new kt(this.pos, n.marks[s]);
        return new kt(this.pos, this.mark);
      }
    }
    return new _t(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new kt(n.pos, this.mark);
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
    return new kt(n.pos, e.markFromJSON(n.mark));
  }
}
Le.jsonID("addNodeMark", kt);
class _t extends Le {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ke.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ke.fromReplace(e, this.pos, this.pos + 1, new L(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new kt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new _t(n.pos, this.mark);
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
    return new _t(n.pos, e.markFromJSON(n.mark));
  }
}
Le.jsonID("removeNodeMark", _t);
class ve extends Le {
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
    return this.structure && Ns(e, this.from, this.to) ? ke.fail("Structure replace would overwrite content") : ke.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ue([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ve(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.to, -1), r = this.from == this.to && ve.MAP_BIAS < 0 ? n : e.mapResult(this.from, 1);
    return r.deletedAcross && n.deletedAcross ? null : new ve(r.pos, Math.max(r.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof ve) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ve(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ve(e.from, this.to, n, this.structure);
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
    return new ve(n.from, n.to, L.fromJSON(e, n.slice), !!n.structure);
  }
}
ve.MAP_BIAS = 1;
Le.jsonID("replace", ve);
class Me extends Le {
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
    if (this.structure && (Ns(e, this.from, this.gapFrom) || Ns(e, this.gapTo, this.to)))
      return ke.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ke.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? ke.fromReplace(e, this.from, this.to, r) : ke.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ue([
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
    return new Me(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new Me(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
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
    return new Me(n.from, n.to, n.gapFrom, n.gapTo, L.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
Le.jsonID("replaceAround", Me);
function Ns(t, e, n) {
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
function Iu(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), m = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(m) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new tt(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new Ct(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function ju(t, e, n, r) {
  let s = [], o = 0;
  t.doc.nodesBetween(e, n, (i, l) => {
    if (!i.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof jr) {
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
  }), s.forEach((i) => t.step(new tt(i.from, i.to, i.style)));
}
function Hs(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new ve(l, u, L.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new tt(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, m;
        for (; f = h.exec(c.text); )
          m || (m = new L(N.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new ve(l + f.index, l + f.index + f[0].length, m));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(N.empty, !0);
    t.replace(l, l, new L(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function zu(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function an(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !zu(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function Du(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = N.empty, d = 0;
  for (let m = o, g = !1; m > n; m--)
    g || r.index(m) > 0 ? (g = !0, u = N.from(r.node(m).copy(u)), d++) : a--;
  let f = N.empty, h = 0;
  for (let m = o, g = !1; m > n; m--)
    g || s.after(m + 1) < s.end(m) ? (g = !0, f = N.from(s.node(m).copy(f)), h++) : c++;
  t.step(new Me(a, c, i, l, new L(u.append(f), d, h), u.size - d, !0));
}
function Al(t, e, n = null, r = t) {
  let s = Lu(t, e), o = s && Fu(r, e);
  return o ? s.map(ei).concat({ type: e, attrs: n }).concat(o.map(ei)) : null;
}
function ei(t) {
  return { type: t, attrs: null };
}
function Lu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function Fu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function $u(t, e, n) {
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
  t.step(new Me(s, o, s, o, new L(r, 0, 0), n.length, !0));
}
function Pu(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && _u(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", m = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !m ? c = !1 : !h && m && (c = !0);
      }
      c === !1 && El(t, i, l, o), Hs(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new Me(d, f, d + 1, f - 1, new L(N.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && Nl(t, i, l, o), !1;
    }
  });
}
function Nl(t, e, n, r) {
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
function El(t, e, n, r) {
  e.forEach((s, o) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let i = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(i, i + 1, e.type.schema.text(`
`));
    }
  });
}
function _u(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function Bu(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new Me(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new L(N.from(i), 0, 0), 1, !0));
}
function bt(t, e, n = 1, r) {
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
function Hu(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = N.empty, i = N.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = N.from(s.node(l).copy(o));
    let u = r && r[c];
    i = N.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new ve(e, e, new L(o.append(i), n, n), !0));
}
function Wt(t, e) {
  let n = t.resolve(e), r = n.index();
  return Tl(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Wu(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function Tl(t, e) {
  return !!(t && e && !t.isLeaf && Wu(t, e));
}
function Dr(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, l = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), l++, i = r.node(s).maybeChild(l)) : (o = r.node(s).maybeChild(l - 1), i = r.node(s + 1)), o && !o.isTextblock && Tl(o, i) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function Vu(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, o = t.doc.resolve(e - n), i = o.node().type;
  if (s && i.inlineContent) {
    let u = i.whitespace == "pre", d = !!i.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    El(t, u.node(), u.before(), l);
  }
  i.inlineContent && Hs(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new ve(c, a.map(e + n, -1), L.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    Nl(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function Uu(t, e, n) {
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
function Ku(t, e, n) {
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
function Lr(t, e, n = e, r = L.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return Ml(s, o, r) ? new ve(e, n, r) : new qu(s, o, r).fit();
}
function Ml(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class qu {
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
    let a = new L(o, i, l);
    return e > -1 ? new Me(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new ve(r.pos, s.pos, a) : null;
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
        r ? (o = is(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
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
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = is(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new L(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = is(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new L(xn(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new L(xn(e, n, 1), n, r);
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
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(Rl(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = wn(this.placed, n, N.from(u)), this.frontier[n].match = d, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = m ? e == 0 ? L.empty : new L(xn(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new L(xn(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !ls(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = ls(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = ls(e, l, c, a, !0);
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
function is(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Rl(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Rl(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(N.empty, !0)))), t.copy(r);
}
function ls(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !Gu(n, o.content, i) ? l : null;
}
function Gu(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Ju(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Yu(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Ml(s, o, r))
    return t.step(new ve(e, n, r));
  let i = Il(s, o);
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
    let h = c[f], m = Ju(h.type);
    if (m && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (m || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < i.length; g++) {
        let y = i[(g + a) % i.length], b = !0;
        y < 0 && (b = !1, y = -y);
        let k = s.node(y - 1), A = s.index(y - 1);
        if (k.canReplaceWith(A, A, m.type, m.marks))
          return t.replace(s.before(y), b ? o.after(y) : n, new L(Ol(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function Ol(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Ol(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(N.empty, !0));
  }
  return t;
}
function Xu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = Uu(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new L(N.from(r), 0, 0));
}
function Qu(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n);
  if (r.parent.isTextblock && s.parent.isTextblock && r.start() != s.start() && r.parentOffset == 0 && s.parentOffset == 0) {
    let i = r.sharedDepth(n), l = !1;
    for (let a = r.depth; a > i; a--)
      r.node(a).type.spec.isolating && (l = !0);
    for (let a = s.depth; a > i; a--)
      s.node(a).type.spec.isolating && (l = !0);
    if (!l) {
      for (let a = r.depth; a > 0 && e == r.start(a); a--)
        e = r.before(a);
      for (let a = s.depth; a > 0 && n == s.start(a); a--)
        n = s.before(a);
      r = t.doc.resolve(e), s = t.doc.resolve(n);
    }
  }
  let o = Il(r, s);
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
function Il(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let o = t.start(s);
    if (o < t.pos - (t.depth - s) || e.end(s) > e.pos + (e.depth - s) || t.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (o == e.start(s) || s == t.depth && s == e.depth && t.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == o - 1) && n.push(s);
  }
  return n;
}
class rn extends Le {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ke.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return ke.fromReplace(e, this.pos, this.pos + 1, new L(N.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ue.empty;
  }
  invert(e) {
    return new rn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new rn(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new rn(n.pos, n.attr, n.value);
  }
}
Le.jsonID("attr", rn);
class Mn extends Le {
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
    return ke.ok(r);
  }
  getMap() {
    return Ue.empty;
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
Le.jsonID("docAttr", Mn);
let sn = class extends Error {
};
sn = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
sn.prototype = Object.create(Error.prototype);
sn.prototype.constructor = sn;
sn.prototype.name = "TransformError";
class jl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new wr();
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
      throw new sn(n.failed);
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
  replace(e, n = e, r = L.empty) {
    let s = Lr(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new L(N.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, L.empty);
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
    return Yu(this, e, n, r), this;
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
    return Xu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Qu(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Du(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return Vu(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return $u(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return Pu(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return Bu(this, e, n, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new rn(e, n, r)), this;
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
    return this.step(new kt(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof ge)
      n.isInSet(r.marks) && this.step(new _t(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new _t(e, o)), s = o.removeFromSet(s);
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
    return Hu(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Iu(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return ju(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Hs(this, e, n, r), this;
  }
}
const as = /* @__PURE__ */ Object.create(null);
class se {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new zl(e.min(n), e.max(n))];
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
  replace(e, n = L.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? L.empty : n), l == 0 && ri(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), ri(e, r, n.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new Q(e) : en(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? en(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : en(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new qe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return en(e, e, 0, 0, 1) || new qe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return en(e, e, e.content.size, e.childCount, -1) || new qe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = as[n.type];
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
    if (e in as)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return as[e] = n, n.prototype.jsonID = e, n;
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
    return Q.between(this.$anchor, this.$head).getBookmark();
  }
}
se.prototype.visible = !0;
class zl {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let ti = !1;
function ni(t) {
  !ti && !t.parent.inlineContent && (ti = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class Q extends se {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    ni(e), ni(n), super(e, n);
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
      return se.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new Q(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = L.empty) {
    if (super.replace(e, n), n == L.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof Q && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Fr(this.anchor, this.head);
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
    return new Q(e.resolve(n.anchor), e.resolve(n.head));
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
      let o = se.findFrom(n, r, !0) || se.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return se.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (se.findFrom(e, -r, !0) || se.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new Q(e, n);
  }
}
se.jsonID("text", Q);
class Fr {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Fr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return Q.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class Y extends se {
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
    return r ? se.near(o) : new Y(o);
  }
  content() {
    return new L(N.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof Y && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ws(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new Y(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new Y(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
Y.prototype.visible = !1;
se.jsonID("node", Y);
class Ws {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Fr(r, r) : new Ws(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && Y.isSelectable(r) ? new Y(n) : se.near(n);
  }
}
class qe extends se {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = L.empty) {
    if (n == L.empty) {
      e.delete(0, e.doc.content.size);
      let r = se.atStart(e.doc);
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
    return new qe(e);
  }
  map(e) {
    return new qe(e);
  }
  eq(e) {
    return e instanceof qe;
  }
  getBookmark() {
    return Zu;
  }
}
se.jsonID("all", qe);
const Zu = {
  map() {
    return this;
  },
  resolve(t) {
    return new qe(t);
  }
};
function en(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return Q.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && Y.isSelectable(l))
        return Y.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = en(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function ri(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof ve || s instanceof Me))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(se.near(t.doc.resolve(i), n));
}
function si(t, e) {
  return !e || !t ? t : t.bind(e);
}
class tr {
  constructor(e, n, r) {
    this.name = e, this.init = si(n.init, r), this.apply = si(n.apply, r);
  }
}
new tr("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new tr("selection", {
  init(t, e) {
    return t.selection || se.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new tr("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new tr("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function Dl(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = Dl(s, e, {})), n[r] = s;
  }
  return n;
}
class ct {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Dl(e.props, this, this.props), this.key = e.key ? e.key.key : Ll("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const cs = /* @__PURE__ */ Object.create(null);
function Ll(t) {
  return t in cs ? t + "$" + ++cs[t] : (cs[t] = 0, t + "$");
}
class nt {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Ll(e);
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
const Fl = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function $l(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Pl = (t, e, n) => {
  let r = $l(t, n);
  if (!r)
    return !1;
  let s = Vs(r);
  if (!s) {
    let i = r.blockRange(), l = i && an(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Gl(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (on(o, "end") || Y.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = Lr(t.doc, r.before(i), r.after(i), L.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(on(o, "end") ? se.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : Y.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, ed = (t, e, n) => {
  let r = $l(t, n);
  if (!r)
    return !1;
  let s = Vs(r);
  return s ? _l(t, s, e) : !1;
}, td = (t, e, n) => {
  let r = Hl(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  return s ? _l(t, s, e) : !1;
};
function _l(t, e, n) {
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
  let c = Lr(t.doc, o, a, L.empty);
  if (!c || c.from != o || c instanceof ve && c.slice.size >= a - o)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(Q.create(u.doc, o)), n(u.scrollIntoView());
  }
  return !0;
}
function on(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Bl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Vs(r);
  }
  let i = o && o.nodeBefore;
  return !i || !Y.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(Y.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Vs(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Hl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Wl = (t, e, n) => {
  let r = Hl(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Gl(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (on(o, "start") || Y.isSelectable(o))) {
    let i = Lr(t.doc, r.before(), r.after(), L.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(on(o, "start") ? se.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : Y.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Vl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Us(r);
  }
  let i = o && o.nodeAfter;
  return !i || !Y.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(Y.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Us(t) {
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
const nd = (t, e) => {
  let n = t.selection, r = n instanceof Y, s;
  if (r) {
    if (n.node.isTextblock || !Wt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Dr(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(Y.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, rd = (t, e) => {
  let n = t.selection, r;
  if (n instanceof Y) {
    if (n.node.isTextblock || !Wt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Dr(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, sd = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && an(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, Ul = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ks(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const od = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = Ks(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(se.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Kl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof qe || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = Ks(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(Q.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, ql = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (bt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && an(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function id(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof Y && e.selection.node.isBlock)
      return !r.parentOffset || !bt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Ks(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof Q || e.selection instanceof qe) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = bt(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = bt(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), m = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(m.index(), m.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const ld = id(), ad = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(Y.create(t.doc, s))), !0);
};
function cd(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || Wt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Gl(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && cd(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, m = N.empty;
      for (let b = i.length - 1; b >= 0; b--)
        m = N.from(i[b].create(null, m));
      m = N.from(s.copy(m));
      let g = t.tr.step(new Me(e.pos - 1, h, e.pos, h, new L(m, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && Wt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : se.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && an(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && on(o, "start", !0) && on(s, "end")) {
    let h = s, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let b = N.empty;
        for (let A = m.length - 1; A >= 0; A--)
          b = N.from(m[A].copy(b));
        let k = t.tr.step(new Me(e.pos - m.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new L(b, m.length, 0), 0, !0));
        n(k.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Jl(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(Q.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const ud = Jl(-1), dd = Jl(1);
function fd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && Al(i, t, e);
    return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
  };
}
function oi(t, e = null) {
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
function qs(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
qs(Fl, Pl, Bl);
qs(Fl, Wl, Vl);
qs(Ul, Kl, ql, ld);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function hd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return pd(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function pd(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new br(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new br(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = Al(o, n, r, e);
  return l ? (t && md(t, e, l, s, n), !0) : !1;
}
function md(t, e, n, r, s) {
  let o = N.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = N.from(n[u].type.create(n[u].attrs, o));
  t.step(new Me(e.start - (r ? 2 : 0), e.end, e.start, e.end, new L(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && bt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function gd(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? yd(e, n, t, o) : bd(e, n, o) : !0 : !1;
  };
}
function yd(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new Me(o - 1, i, o, i, new L(N.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new br(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = an(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return Wt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function bd(t, e, n) {
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
  return r.step(new Me(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new L((l ? N.empty : N.from(s.copy(N.empty))).append(a ? N.empty : N.from(s.copy(N.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function xd(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = N.from(c ? t.create() : null), d = new L(N.from(t.create(null, N.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new Me(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Vt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Yl = function(t, e, n, r) {
  return n && (ii(t, e, n, r, -1) || ii(t, e, n, r, 1));
}, wd = /^(img|br|input|textarea|hr)$/i;
function ii(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : vr(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || Gs(t) || wd.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Vt(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? vr(t) : 0;
    } else
      return !1;
  }
}
function vr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function vd(t, e, n) {
  for (let r = e == 0, s = e == vr(t); r || s; ) {
    if (t == n)
      return !0;
    let o = Vt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == vr(t);
  }
}
function Gs(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Xl = function(t) {
  return t.focusNode && Yl(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Ql(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const at = typeof navigator < "u" ? navigator : null, li = typeof document < "u" ? document : null, Tt = at && at.userAgent || "", Es = /Edge\/(\d+)/.exec(Tt), Zl = /MSIE \d/.exec(Tt), Ts = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Tt), $n = !!(Zl || Ts || Es), ea = Zl ? document.documentMode : Ts ? +Ts[1] : Es ? +Es[1] : 0, $r = !$n && /gecko\/(\d+)/i.test(Tt);
$r && +(/Firefox\/(\d+)/.exec(Tt) || [0, 0])[1];
const Ms = !$n && /Chrome\/(\d+)/.exec(Tt), xt = !!Ms, ta = Ms ? +Ms[1] : 0, Ut = !$n && !!at && /Apple Computer/.test(at.vendor), Js = Ut && (/Mobile\/\w+/.test(Tt) || !!at && at.maxTouchPoints > 2), Ye = Js || (at ? /Mac/.test(at.platform) : !1), na = at ? /Win/.test(at.platform) : !1, Pn = /Android \d/.test(Tt), Ys = !!li && "webkitFontSmoothing" in li.documentElement.style, Sd = Ys ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Cd(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), o = s && s.size == 0, i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (Xl(n)) {
    for (a = i; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && Y.isSelectable(d) && s.parent && !(d.isInline && vd(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new Y(i == f ? l : r.resolve(f));
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
    c = sa(t, u, l, d);
  }
  return c;
}
function ra(t) {
  return t.editable ? t.hasFocus() : Ed(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Xs(t, e = !1) {
  let n = t.state.selection;
  if (Nd(t, n), !ra(t))
    return;
  let r = t.input.mouseDown;
  if (!e && xt && r) {
    let s = t.domSelectionRange(), o = t.domObserver.currentSelection;
    if (s.anchorNode && o.anchorNode && Yl(s.anchorNode, s.anchorOffset, o.anchorNode, o.anchorOffset) && r.delaySelUpdate()) {
      t.domObserver.setCurSelection();
      return;
    }
  }
  if (t.domObserver.disconnectSelection(), t.cursorWrapper)
    Ad(t);
  else {
    let { anchor: s, head: o } = n, i, l;
    ai && !(n instanceof Q) && (n.$from.parent.inlineContent || (i = ci(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (l = ci(t, n.to))), t.docView.setSelection(s, o, t, e), ai && (i && ui(i), l && ui(l)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && kd(t));
  }
  t.domObserver.setCurSelection(), t.domObserver.connectSelection();
}
const ai = Ut || xt && ta < 63;
function ci(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Ut && s && s.contentEditable == "false")
    return us(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return us(s);
    if (o)
      return us(o);
  }
}
function us(t) {
  return t.contentEditable = "true", Ut && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function ui(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function kd(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!ra(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ad(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Vt(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && $n && ea <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Nd(t, e) {
  if (e instanceof Y) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (di(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    di(t);
}
function di(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function sa(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || Q.between(e, n, r);
}
function Ed(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Rs(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && se.findFrom(o, e);
}
function vt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function fi(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Q)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return vt(t, new Q(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Rs(t.state, e);
        return s && s instanceof Y ? vt(t, s) : !1;
      } else if (!(Ye && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? Y.isSelectable(o) ? vt(t, new Y(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : Ys ? vt(t, new Q(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof Y && r.node.isInline)
      return vt(t, new Q(e > 0 ? r.$to : r.$from));
    {
      let s = Rs(t.state, e);
      return s ? vt(t, s) : !1;
    }
  }
}
function Sr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function kn(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Zt(t, e) {
  return e < 0 ? Td(t) : Md(t);
}
function Td(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for ($r && n.nodeType == 1 && r < Sr(n) && kn(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (kn(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (oa(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && kn(l, -1); )
          s = n.parentNode, o = Vt(l), l = l.previousSibling;
        if (l)
          n = l, r = Sr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? Os(t, n, r) : s && Os(t, s, o);
}
function Md(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = Sr(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (kn(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (oa(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && kn(l, 1); )
          o = l.parentNode, i = Vt(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = Sr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && Os(t, o, i);
}
function oa(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Rd(t, e) {
  for (; t && e == t.childNodes.length && !Gs(t); )
    e = Vt(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Od(t, e) {
  for (; t && !e && !Gs(t); )
    e = Vt(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Os(t, e, n) {
  if (e.nodeType != 3) {
    let o, i;
    (i = Rd(e, n)) ? (e = i, n = 0) : (o = Od(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Xl(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Xs(t);
  }, 50);
}
function hi(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(xt || na) && n.parent.inlineContent) {
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
function pi(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Q && !r.empty || n.indexOf("s") > -1 || Ye && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = Rs(t.state, e);
    if (i && i instanceof Y)
      return vt(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof qe ? se.near(i, e) : se.findFrom(i, e);
    return l ? vt(t, l) : !1;
  }
  return !1;
}
function mi(t, e) {
  if (!(t.state.selection instanceof Q))
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
function gi(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Id(t) {
  if (!Ut || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    gi(t, r, "true"), setTimeout(() => gi(t, r, "false"), 20);
  }
  return !1;
}
function jd(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function zd(t, e) {
  let n = e.keyCode, r = jd(e);
  if (n == 8 || Ye && n == 72 && r == "c")
    return mi(t, -1) || Zt(t, -1);
  if (n == 46 && !e.shiftKey || Ye && n == 68 && r == "c")
    return mi(t, 1) || Zt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ye && n == 66 && r == "c") {
    let s = n == 37 ? hi(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return fi(t, s, r) || Zt(t, s);
  } else if (n == 39 || Ye && n == 70 && r == "c") {
    let s = n == 39 ? hi(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return fi(t, s, r) || Zt(t, s);
  } else {
    if (n == 38 || Ye && n == 80 && r == "c")
      return pi(t, -1, r) || Zt(t, -1);
    if (n == 40 || Ye && n == 78 && r == "c")
      return Id(t) || pi(t, 1, r) || Zt(t, 1);
    if (r == (Ye ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ia(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || zr.fromSchema(t.state.schema), l = fa(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = da[c.nodeName.toLowerCase()]); ) {
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
function la(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new L(N.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, m = zr.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = i.appendChild(document.createElement("p"));
        g && y.appendChild(m.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = $d(n), Ys && Pd(i);
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
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Lt.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Dd.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = _d(yi(l, +u[1], +u[2]), u[4]);
  else if (l = L.maxOpen(Ld(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = yi(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Dd = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Ld(t, e) {
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
      if (c = i.length && o.length && ca(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = ua(i[i.length - 1], o.length));
        let u = aa(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return N.from(i);
  }
  return t;
}
function aa(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, N.from(t));
  return t;
}
function ca(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = ca(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(N.from(aa(n, t, s + 1))));
  }
}
function ua(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, ua(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(N.empty, !0);
  return t.copy(n.append(r));
}
function Is(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = Is(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(N.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function yi(t, e, n) {
  return e < t.openStart && (t = new L(Is(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new L(Is(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const da = {
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
function fa() {
  return document.implementation.createHTMLDocument("title");
}
let ds = null;
function Fd(t) {
  let e = window.trustedTypes;
  return e ? (ds || (ds = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), ds.createHTML(t)) : t;
}
function $d(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = fa(), r = n.body, s = /<([a-z][^>\s]+)/i.exec(t), o;
  if ((o = s && da[s[1].toLowerCase()]) && (t = o.map((i) => "<" + i + ">").join("") + t + o.map((i) => "</" + i + ">").reverse().join("")), r.innerHTML = Fd(t), o)
    for (let i = 0; i < o.length; i++)
      r = r.querySelector(o[i]) || r;
  for (let i = 0; i < n.styleSheets.length; i++) {
    let l = n.styleSheets[i];
    for (let a = 0; a < l.rules.length; a++) {
      let c = l.rules[a];
      if (c instanceof CSSStyleRule) {
        let u = r.querySelectorAll(c.selectorText);
        for (let d = 0; d < u.length; d++)
          u[d].style.cssText += c.style.cssText;
      }
    }
  }
  return r;
}
function Pd(t) {
  let e = t.querySelectorAll(xt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function _d(t, e) {
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
  return new L(s, o, i);
}
const rt = {}, Ge = {};
function yt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Ge.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !ga(t) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Pn && xt && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Js && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Ql(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || zd(t, n) ? n.preventDefault() : yt(t, "key");
};
Ge.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Ge.keypress = (t, e) => {
  let n = e;
  if (ga(t) || !n.charCode || n.ctrlKey && !n.altKey || Ye && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof Q) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function _n(t) {
  return { left: t.clientX, top: t.clientY };
}
function Bd(t, e) {
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
function Bn(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function Hd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && Y.isSelectable(r) ? (Bn(t, new Y(n)), !0) : !1;
}
function Wd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof Y && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let l = i > o.depth ? o.nodeAfter : o.node(i);
    if (Y.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? s = o.before(n.$from.depth) : s = o.before(i);
      break;
    }
  }
  return s != null ? (Bn(t, Y.create(t.state.doc, s)), !0) : !1;
}
function Vd(t, e, n, r, s) {
  return Qs(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? Wd(t, n) : Hd(t, n));
}
function Ud(t, e, n, r) {
  return Qs(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function Kd(t, e, n, r) {
  return Qs(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || qd(t, n, r);
}
function qd(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = ha(t, e, !0), s = t.state.doc;
  return r ? (Bn(t, r), r instanceof Q && s.eq(t.state.doc) && (t.input.mouseDown = new Jd(t, r)), !0) : !1;
}
function ha(t, e, n) {
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? Q.create(r, 0, r.content.size) : null;
  let s = r.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let i = o > s.depth ? s.nodeAfter : s.node(o), l = s.before(o);
    if (i.inlineContent)
      return Q.create(r, l + 1, l + 1 + i.content.size);
    if (n && Y.isSelectable(i))
      return Y.create(r, l);
  }
  return null;
}
function Zs(t) {
  return Cr(t);
}
const pa = Ye ? "metaKey" : "ctrlKey";
rt.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Zs(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && Bd(n, t.input.lastClick) && !n[pa] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button }, t.input.mouseDown && t.input.mouseDown.done();
  let i = t.posAtCoords(_n(n));
  i && (o == "singleClick" ? t.input.mouseDown = new Gd(t, i, n, !!r) : (o == "doubleClick" ? Ud : Kd)(t, i.pos, i.inside, n) ? n.preventDefault() : yt(t, "pointer"));
};
class ma {
  constructor(e) {
    this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
  }
  up(e) {
    this.done();
  }
  move(e) {
    e.buttons == 0 && this.done();
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
  }
  delaySelUpdate() {
    return !1;
  }
}
class Gd extends ma {
  constructor(e, n, r, s) {
    super(e), this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!r[pa], this.allowDefault = r.shiftKey;
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
    r.button == 0 && (o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof Y && c.from <= i && c.to > i) && (this.mightDrag = {
      node: o,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && $r && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), yt(e, "pointer");
  }
  done() {
    super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
      this.view.isDestroyed || Xs(this.view);
    });
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(_n(e))), this.updateAllowDefault(e), this.allowDefault || !n ? yt(this.view, "pointer") : Vd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ut && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    xt && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Bn(this.view, se.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : yt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), yt(this.view, "pointer"), super.move(e);
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
  delaySelUpdate() {
    return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
  }
}
class Jd extends ma {
  constructor(e, n) {
    super(e), this.startSelection = n, this.startDoc = e.state.doc;
  }
  move(e) {
    if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
      this.done();
      return;
    }
    e.preventDefault(), yt(this.view, "pointer");
    let n = this.view.posAtCoords(_n(e)), r = n && ha(this.view, n.inside, !1);
    if (!r)
      return;
    let { doc: s } = this.view.state, o = this.startSelection, [i, l] = r.from < o.from ? [o.to, r.from] : [o.from, r.to];
    Bn(this.view, Q.create(s, i, l));
  }
}
rt.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Zs(t), yt(t, "pointer");
};
rt.touchmove = (t) => {
  t.input.lastTouch = Date.now(), yt(t, "pointer");
};
rt.contextmenu = (t) => Zs(t);
function ga(t, e) {
  return t.composing ? !0 : Ut && Math.abs(Date.now() - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const Yd = Pn ? 5e3 : -1;
Ge.compositionstart = Ge.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof Q && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || xt && na && Xd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Cr(t, !0), t.markCursor = null;
    else if (Cr(t, !e.selection.empty), $r && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  ya(t, Yd);
};
function Xd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Ge.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now(), t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, ya(t, 20));
};
function ya(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Cr(t), e));
}
function Qd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Cr(t, e = !1) {
  if (!(Pn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Qd(t), e || t.docView && t.docView.dirty) {
      let n = Cd(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Zd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Rn = $n && ea < 15 || Js && Sd < 604;
rt.copy = Ge.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = Rn ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = ia(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Zd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function ef(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function tf(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? js(t, r.value, null, s, e) : js(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function js(t, e, n, r, s) {
  let o = la(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || L.empty)))
    return !0;
  if (!o)
    return !1;
  let i = ef(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function ba(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Ge.paste = (t, e) => {
  let n = e;
  if (t.composing && !Pn)
    return;
  let r = Rn ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && js(t, ba(r), r.getData("text/html"), s, n) ? n.preventDefault() : tf(t, n);
};
class nf {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const rf = Ye ? "altKey" : "ctrlKey";
function xa(t, e) {
  let n;
  return t.someProp("dragCopies", (r) => {
    n = n || r(e);
  }), n != null ? !n : !e[rf];
}
rt.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords(_n(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof Y ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = Y.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = Y.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = ia(t, l);
  (!n.dataTransfer.files.length || !xt || ta > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Rn ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Rn || n.dataTransfer.setData("text/plain", c), t.dragging = new nf(u, xa(t, n), i);
};
rt.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Ge.dragover = Ge.dragenter = (t, e) => e.preventDefault();
Ge.drop = (t, e) => {
  try {
    sf(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function sf(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(_n(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = la(t, ba(e.dataTransfer), Rn ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && xa(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || L.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? Ku(t.state.doc, s.pos, o) : s.pos;
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
  if (u && Y.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new Y(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, y, b) => h = b), a.setSelection(sa(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
rt.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Xs(t);
  }, 20));
};
rt.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
rt.beforeinput = (t, e) => {
  if (xt && Pn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Ql(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Ge)
  rt[t] = Ge[t];
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
class kr {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Ft, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new Xe(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof kr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && On(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class At {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Ft;
  }
  map(e, n, r, s) {
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new Xe(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof At && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof At;
  }
  destroy() {
  }
}
class eo {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Ft;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new Xe(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof eo && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  destroy() {
  }
}
class Xe {
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
    return new Xe(e, n, this.type);
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
    return new Xe(e, e, new kr(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new Xe(e, n, new At(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new Xe(e, n, new eo(r, s));
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
    return this.type instanceof At;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof kr;
  }
}
const tn = [], Ft = {};
class Se {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : tn, this.children = n.length ? n : tn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Ar(n, e, 0, Ft) : Pe;
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
    return this == Pe || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Ft);
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
    return this.children.length ? of(this.children, i || [], e, n, r, s, o) : i ? new Se(i.sort($t), tn) : Pe;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Pe ? Se.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = va(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, Ar(u, l, c + 1, Ft)), o += 3;
      }
    });
    let i = wa(o ? Sa(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new Se(i.length ? this.local.concat(i).sort($t) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Pe ? this : this.removeInner(e, 0);
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
      c != Pe ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (s.length) {
      for (let o = 0, i; o < e.length; o++)
        if (i = e[o])
          for (let l = 0; l < s.length; l++)
            s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new Se(s, r) : Pe;
  }
  forChild(e, n) {
    if (this == Pe)
      return this;
    if (n.isLeaf)
      return Se.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof At) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new Se(s.sort($t), tn);
      return r ? new It([l, r]) : l;
    }
    return r || Pe;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Se) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return to(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Pe)
      return tn;
    if (e.inlineContent || !this.local.some(At.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof At || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Se.empty = new Se([], []);
Se.removeOverlap = to;
const Pe = Se.empty;
class It {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, Ft));
    return It.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Se.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let o = this.members[s].forChild(e, n);
      o != Pe && (o instanceof It ? r = r.concat(o.members) : r.push(o));
    }
    return It.from(r);
  }
  eq(e) {
    if (!(e instanceof It) || e.members.length != this.members.length)
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
    return n ? to(r ? n : n.sort($t)) : tn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Pe;
      case 1:
        return e[0];
      default:
        return new It(e.every((n) => n instanceof Se) ? e : e.reduce((n, r) => n.concat(r instanceof Se ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function of(t, e, n, r, s, o, i) {
  let l = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, m, g) => {
      let y = g - m - (h - f);
      for (let b = 0; b < l.length; b += 3) {
        let k = l[b + 1];
        if (k < 0 || f > k + u - d)
          continue;
        let A = l[b] + u - d;
        h >= A ? l[b + 1] = f <= A ? -2 : -1 : f >= u && y && (l[b] += y, l[b + 1] += y);
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
        let b = l[c + 2].mapInner(n, y, u + 1, t[c] + o + 1, i);
        b != Pe ? (l[c] = d, l[c + 1] = h, l[c + 2] = b) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = lf(l, t, e, n, s, o, i), u = Ar(c, r, 0, i);
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
  return new Se(e.sort($t), l);
}
function wa(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new Xe(s.from + e, s.to + e, s.type));
  }
  return n;
}
function lf(t, e, n, r, s, o, i) {
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
function va(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function Sa(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Ar(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = va(t, l, a + n);
    if (c) {
      o = !0;
      let u = Ar(c, l, n + a + 1, r);
      u != Pe && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = wa(o ? Sa(t) : t, -n).sort($t);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new Se(i, s) : Pe;
}
function $t(t, e) {
  return t.from - e.from || t.to - e.to;
}
function to(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let o = e[s];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[s] = o.copy(o.from, r.to), bi(e, s + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), bi(e, s, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function bi(t, e, n) {
  for (; e < t.length && $t(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var Nt = {
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
}, Nr = {
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
}, af = typeof navigator < "u" && /Mac/.test(navigator.platform), cf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ie = 0; Ie < 10; Ie++) Nt[48 + Ie] = Nt[96 + Ie] = String(Ie);
for (var Ie = 1; Ie <= 24; Ie++) Nt[Ie + 111] = "F" + Ie;
for (var Ie = 65; Ie <= 90; Ie++)
  Nt[Ie] = String.fromCharCode(Ie + 32), Nr[Ie] = String.fromCharCode(Ie);
for (var fs in Nt) Nr.hasOwnProperty(fs) || (Nr[fs] = Nt[fs]);
function uf(t) {
  var e = af && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || cf && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Nr : Nt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const df = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), ff = typeof navigator < "u" && /Win/.test(navigator.platform);
function hf(t) {
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
      df ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function pf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[hf(n)] = t[n];
  return e;
}
function hs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function mf(t) {
  let e = pf(t);
  return function(n, r) {
    let s = uf(r), o, i = e[hs(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[hs(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(ff && r.ctrlKey && r.altKey) && (o = Nt[r.keyCode]) && o != s) {
        let l = e[hs(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var gf = Object.defineProperty, no = (t, e) => {
  for (var n in e)
    gf(t, n, { get: e[n], enumerable: !0 });
};
function Ca(t) {
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
var yf = class {
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
      state: Ca({
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
}, ka = {};
no(ka, {
  blur: () => bf,
  clearContent: () => xf,
  clearNodes: () => wf,
  command: () => vf,
  createParagraphNear: () => Sf,
  cut: () => Cf,
  deleteCurrentNode: () => kf,
  deleteNode: () => Af,
  deleteRange: () => Nf,
  deleteSelection: () => Mf,
  enter: () => Rf,
  exitCode: () => Of,
  extendMarkRange: () => jf,
  first: () => zf,
  focus: () => Ff,
  forEach: () => $f,
  insertContent: () => Pf,
  insertContentAt: () => Hf,
  joinBackward: () => Uf,
  joinDown: () => Vf,
  joinForward: () => Kf,
  joinItemBackward: () => qf,
  joinItemForward: () => Gf,
  joinTextblockBackward: () => Jf,
  joinTextblockForward: () => Yf,
  joinUp: () => Wf,
  keyboardShortcut: () => Qf,
  lift: () => Zf,
  liftEmptyBlock: () => eh,
  liftListItem: () => th,
  newlineInCode: () => nh,
  resetAttributes: () => rh,
  scrollIntoView: () => sh,
  selectAll: () => oh,
  selectNodeBackward: () => ih,
  selectNodeForward: () => lh,
  selectParentNode: () => ah,
  selectTextblockEnd: () => ch,
  selectTextblockStart: () => uh,
  setContent: () => fh,
  setMark: () => Ah,
  setMeta: () => Nh,
  setNode: () => Eh,
  setNodeSelection: () => Th,
  setTextDirection: () => Mh,
  setTextSelection: () => Rh,
  sinkListItem: () => Oh,
  splitBlock: () => Ih,
  splitListItem: () => jh,
  toggleList: () => Dh,
  toggleMark: () => Lh,
  toggleNode: () => Fh,
  toggleWrap: () => $h,
  undoInputRule: () => Ph,
  unsetAllMarks: () => _h,
  unsetMark: () => Bh,
  unsetTextDirection: () => Hh,
  updateAttributes: () => Wh,
  wrapIn: () => Vh,
  wrapInList: () => Uh
});
var bf = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), xf = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), wf = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const m = an(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (m || m === 0) && e.lift(h, m);
    });
  }), !0;
}, vf = (t) => (e) => t(e), Sf = () => ({ state: t, dispatch: e }) => Kl(t, e), Cf = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new Q(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, kf = () => ({ tr: t, dispatch: e }) => {
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
function ze(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(
        `There is no node type named '${t}'. Maybe you forgot to add the extension?`
      );
    return e.nodes[t];
  }
  return t;
}
var Af = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = ze(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), c = o.after(i);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Nf = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Ef = (t) => t.content ? /^text(\*|\+)/.test(t.content) : !1, xi = (t, e, n) => {
  if (!t.parent.isInline || n === "left" && t.pos > t.start() || n === "right" && t.pos < t.end())
    return t.pos;
  const r = e.nodes[t.parent.type.name].spec;
  return Ef(r) ? n === "left" ? t.start() - 1 : t.end() + 1 : t.pos;
}, Tf = (t, e, n) => {
  const r = xi(t, n, "left"), s = xi(e, n, "right");
  return { from: r, to: s };
}, Mf = () => ({ state: t, dispatch: e }) => {
  const { $from: n, $to: r } = t.selection;
  if (t.selection.empty)
    return !1;
  const { from: s, to: o } = Tf(n, r, t.schema);
  return e && (t.tr.deleteRange(s, o).scrollIntoView(), e(t.tr)), !0;
}, Rf = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Of = () => ({ state: t, dispatch: e }) => od(t, e);
function If(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Er(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : If(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function Aa(t, e, n = {}) {
  return t.find((r) => r.type === e && Er(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function wi(t, e, n = {}) {
  return !!Aa(t, e, n);
}
function Na(t, e, n) {
  if (!t || !e)
    return;
  let r = t.parent.childAfter(t.parentOffset);
  if ((!r.node || !r.node.marks.some((c) => c.type === e)) && (r = t.parent.childBefore(t.parentOffset)), !r.node || !r.node.marks.some((c) => c.type === e))
    return;
  if (!n) {
    const c = r.node.marks.find((u) => u.type === e);
    c && (n = c.attrs);
  }
  if (!Aa([...r.node.marks], e, n))
    return;
  let o = r.index, i = t.start() + r.offset, l = o + 1, a = i + r.node.nodeSize;
  for (; o > 0 && wi([...t.parent.child(o - 1).marks], e, n); )
    o -= 1, i -= t.parent.child(o).nodeSize;
  for (; l < t.parent.childCount && wi([...t.parent.child(l).marks], e, n); )
    a += t.parent.child(l).nodeSize, l += 1;
  return {
    from: i,
    to: a
  };
}
function Mt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(
        `There is no mark type named '${t}'. Maybe you forgot to add the extension?`
      );
    return e.marks[t];
  }
  return t;
}
var jf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const o = Mt(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = Na(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = Q.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, zf = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ea(t) {
  return t instanceof Q;
}
function jt(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Df(t, e = null) {
  if (!e)
    return null;
  const n = se.atStart(t), r = se.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? Q.create(
    t,
    jt(0, s, o),
    jt(t.content.size, s, o)
  ) : Q.create(
    t,
    jt(e, s, o),
    jt(e, s, o)
  );
}
function vi() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Tr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
    navigator.platform
  ) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Lf() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var Ff = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Tr() || vi()) && r.dom.focus(), Lf() && !Tr() && !vi() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !Ea(n.state.selection))
    return i(), !0;
  const l = Df(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, $f = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), Pf = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt(
  { from: n.selection.from, to: n.selection.to },
  t,
  e
), Ta = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Ta(r);
  }
  return t;
};
function nr(t) {
  if (typeof window > "u")
    throw new Error(
      "[tiptap error]: there is no window object available, so this function cannot be used"
    );
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ta(n);
}
function In(t, e, n) {
  if (t instanceof lt || t instanceof N)
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
      const a = new Su({
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
      if (n.slice ? Lt.fromSchema(a).parseSlice(
        nr(t),
        n.parseOptions
      ) : Lt.fromSchema(a).parse(
        nr(t),
        n.parseOptions
      ), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = Lt.fromSchema(e);
    return n.slice ? o.parseSlice(nr(t), n.parseOptions).content : o.parse(nr(t), n.parseOptions);
  }
  return In("", e, n);
}
function _f(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof ve || s instanceof Me))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((l, a, c, u) => {
    i === 0 && (i = u);
  }), t.setSelection(se.near(t.doc.resolve(i), n));
}
var Bf = (t) => !("type" in t), Hf = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
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
    if ((Bf(l) ? l : [l]).forEach((y) => {
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
      const y = r.doc.resolve(u), b = y.node(), k = y.parentOffset === 0, A = b.isText || b.isTextblock, R = b.content.size > 0;
      k && A && R && h && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && _f(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Wf = () => ({ state: t, dispatch: e }) => nd(t, e), Vf = () => ({ state: t, dispatch: e }) => rd(t, e), Uf = () => ({ state: t, dispatch: e }) => Pl(t, e), Kf = () => ({ state: t, dispatch: e }) => Wl(t, e), qf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Dr(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Gf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Dr(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Jf = () => ({ state: t, dispatch: e }) => ed(t, e), Yf = () => ({ state: t, dispatch: e }) => td(t, e);
function Ma() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Xf(t) {
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
      Tr() || Ma() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var Qf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = Xf(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
  const { from: r, to: s, empty: o } = t.selection, i = e ? ze(e, t.schema) : null, l = [];
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
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => Er(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var Zf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ze(t, n.schema);
  return ro(n, s, e) ? sd(n, r) : !1;
}, eh = () => ({ state: t, dispatch: e }) => ql(t, e), th = (t) => ({ state: e, dispatch: n }) => {
  const r = ze(t, e.schema);
  return gd(r)(e, n);
}, nh = () => ({ state: t, dispatch: e }) => Ul(t, e);
function Ra(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Si(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var rh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ra(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ze(t, r.schema)), l === "mark" && (i = Mt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, Si(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(
          d,
          d + u.nodeSize,
          i.create(Si(f.attrs, e))
        ));
      });
    });
  }), a;
}, sh = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), oh = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new qe(t.doc);
    t.setSelection(n);
  }
  return !0;
}, ih = () => ({ state: t, dispatch: e }) => Bl(t, e), lh = () => ({ state: t, dispatch: e }) => Vl(t, e), ah = () => ({ state: t, dispatch: e }) => ad(t, e), ch = () => ({ state: t, dispatch: e }) => dd(t, e), uh = () => ({ state: t, dispatch: e }) => ud(t, e);
function dh(t, e, n = {}, r = {}) {
  return In(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var fh = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = dh(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function hh(t, e) {
  const n = Mt(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function ph(t, e) {
  const n = new jl(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function mh(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Oa(t, e) {
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
function so(t) {
  return (e) => Oa(e.$from, t);
}
function ln(t, e, n) {
  return t.config[e] === void 0 && t.parent ? ln(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? ln(t.parent, e, n) : null
  }) : t.config[e];
}
function gh(t) {
  return typeof t == "function";
}
function jn(t, e = void 0, ...n) {
  return gh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Ia(t) {
  const e = t.filter(
    (s) => s.type === "extension"
  ), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function yh(t) {
  const e = [];
  let n = "", r = !1, s = !1, o = 0;
  const i = t.length;
  for (let l = 0; l < i; l += 1) {
    const a = t[l];
    if (a === "'" && !s) {
      r = !r, n += a;
      continue;
    }
    if (a === '"' && !r) {
      s = !s, n += a;
      continue;
    }
    if (!r && !s) {
      if (a === "(") {
        o += 1, n += a;
        continue;
      }
      if (a === ")" && o > 0) {
        o -= 1, n += a;
        continue;
      }
      if (a === ";" && o === 0) {
        e.push(n), n = "";
        continue;
      }
    }
    n += a;
  }
  return n && e.push(n), e;
}
function Ci(t) {
  const e = [], n = yh(t || ""), r = n.length;
  for (let s = 0; s < r; s += 1) {
    const o = n[s], i = o.indexOf(":");
    if (i === -1)
      continue;
    const l = o.slice(0, i).trim(), a = o.slice(i + 1).trim();
    l && a && e.push([l, a]);
  }
  return e;
}
function Et(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([s, o]) => {
      if (!r[s]) {
        r[s] = o;
        return;
      }
      if (s === "class") {
        const l = o ? String(o).split(" ") : [], a = r[s] ? r[s].split(" ") : [], c = l.filter(
          (u) => !a.includes(u)
        );
        r[s] = [...a, ...c].join(" ");
      } else if (s === "style") {
        const l = new Map([
          ...Ci(r[s]),
          ...Ci(o)
        ]);
        r[s] = Array.from(l.entries()).map(([a, c]) => `${a}: ${c}`).join("; ");
      } else
        r[s] = o;
    }), r;
  }, {});
}
function bh(t, e, n) {
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
function xh(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function wh(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function vh(t) {
  const e = wh(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function Sh(t) {
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
  }), vh(r);
}
function fr(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function Ch(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? Mt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Er(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, y) => {
      if (o && g.inlineContent && !g.type.allowsMarkType(o))
        return !1;
      if (!g.isText && !g.marks.length)
        return;
      const b = Math.max(h, y), k = Math.min(m, y + g.nodeSize), A = k - b;
      i += A, l.push(
        ...g.marks.map((R) => ({
          mark: R,
          from: b,
          to: k
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Er(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function ps(t, e) {
  const { nodeExtensions: n } = Ia(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = jn(ln(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function ja(t, {
  checkChildren: e = !0,
  ignoreWhitespace: n = !1
} = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return !/\S/.test((r = t.text) != null ? r : "");
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
      s !== !1 && (ja(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function kh(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (Ea(s) && (o = s.$cursor), o) {
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
var Ah = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = Mt(t, r.schema);
  if (s)
    if (i) {
      const c = hh(r, a);
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
          f.marks.find((b) => b.type === a) ? f.marks.forEach((b) => {
            a === b.type && n.addMark(
              m,
              g,
              a.create({
                ...b.attrs,
                ...e
              })
            );
          }) : n.addMark(m, g, a.create(e));
        });
      });
  return kh(r, n, a);
}, Nh = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Eh = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = ze(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => oi(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => oi(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Th = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = jt(t, 0, r.content.size), o = Y.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, Mh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Rh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = Q.atStart(r).from, l = Q.atEnd(r).to, a = jt(s, i, l), c = jt(o, i, l), u = Q.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Oh = (t) => ({ state: e, dispatch: n }) => {
  const r = ze(t, e.schema);
  return xd(r)(e, n);
};
function ki(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Ih = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = fr(
    c,
    l.node().type.name,
    l.node().attrs
  );
  if (o instanceof Y && o.node.isBlock)
    return !l.parentOffset || !bt(i, l.pos) ? !1 : (r && (t && ki(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : mh(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = bt(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !m && bt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (o instanceof Q && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && ki(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, jh = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const l = ze(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
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
      const k = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let ne = a.depth - k; ne >= a.depth - 3; ne -= 1)
        b = N.from(a.node(ne).copy(b));
      const A = (
        // oxlint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), R = {
        ...fr(f, a.node().type.name, a.node().attrs),
        ...e
      }, T = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(R)) || void 0;
      b = b.append(N.from(l.createAndFill(null, T) || void 0));
      const j = a.before(a.depth - (k - 1));
      n.replace(j, a.after(-A), new L(b, 4 - k, 0));
      let H = -1;
      n.doc.nodesBetween(j, n.doc.content.size, (ne, U) => {
        if (H > -1)
          return !1;
        ne.isTextblock && ne.content.size === 0 && (H = U + 1);
      }), H > -1 && n.setSelection(Q.near(n.doc.resolve(H))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, m = {
    ...fr(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...fr(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: m }];
  if (!bt(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: k } = r, { splittableMarks: A } = o.extensionManager, R = k || b.$to.parentOffset && b.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !R || !s)
      return !0;
    const T = R.filter((j) => A.includes(j.type.name));
    n.ensureMarks(T);
  }
  return !0;
};
function Ai(t) {
  return !t || t === "1" ? null : t;
}
function za(t, e) {
  return Ai(t) === Ai(e);
}
var ms = (t, e) => {
  const n = so((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return !(n.node.type === s?.type && Wt(t.doc, n.pos)) || !za(n.node.attrs.type, s?.attrs.type) || t.join(n.pos), !0;
}, gs = (t, e) => {
  const n = so((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return !(n.node.type === s?.type && Wt(t.doc, r)) || !za(n.node.attrs.type, s?.attrs.type) || t.join(r), !0;
};
function zh(t) {
  const e = t.doc, n = e.firstChild;
  if (!n)
    return null;
  const r = e.resolve(1), s = e.resolve(n.nodeSize - 1);
  return Q.between(r, s);
}
var Dh = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = ze(t, i.schema), m = ze(e, i.schema), { selection: g, storedMarks: y } = i, { $from: b, $to: k } = g, A = b.blockRange(k), R = y || g.$to.parentOffset && g.$from.marks();
  if (!A)
    return !1;
  const T = so((C) => ps(C.type.name, d))(g), j = g.from === 0 && g.to === i.doc.content.size, H = i.doc.content.content, ne = H.length === 1 ? H[0] : null, U = j && ne && ps(ne.type.name, d) ? {
    node: ne,
    pos: 0
  } : null, z = T ?? U, D = !!T && A.depth >= 1 && A.depth - T.depth <= 1, P = !!U;
  if ((D || P) && z) {
    if (z.node.type === h)
      return j && P ? a().command(({ tr: C, dispatch: S }) => {
        const E = zh(C);
        return E ? (C.setSelection(E), S && S(C), !0) : !1;
      }).liftListItem(m).run() : c.liftListItem(m);
    if (ps(z.node.type.name, d) && h.validContent(z.node.content))
      return a().command(() => (o.setNodeMarkup(z.pos, h), !0)).command(() => ms(o, h)).command(() => gs(o, h)).run();
  }
  return !n || !R || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ms(o, h)).command(() => gs(o, h)).run() : a().command(() => {
    const C = u().wrapInList(h, r), S = R.filter((E) => f.includes(E.type.name));
    return o.ensureMarks(S), C ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ms(o, h)).command(() => gs(o, h)).run();
}, Lh = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = Mt(t, r.schema);
  return Ch(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, Fh = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = ze(t, r.schema), i = ze(e, r.schema), l = ro(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, $h = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = ze(t, n.schema);
  return ro(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Ph = () => ({ state: t, dispatch: e }) => {
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
}, _h = (t = {}) => ({ tr: e, dispatch: n, editor: r }) => {
  const { ignoreClearable: s = !1 } = t, { selection: o } = e, { empty: i, ranges: l } = o;
  if (i)
    return !0;
  const { nonClearableMarks: a } = r.extensionManager;
  if (n) {
    const c = Object.values(r.schema.marks).filter(
      (u) => s || !a.includes(u.name)
    );
    l.forEach((u) => {
      for (const d of c)
        e.removeMark(u.$from.pos, u.$to.pos, d);
    });
  }
  return !0;
}, Bh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = Mt(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const m = (o = c.marks().find((y) => y.type === a)) == null ? void 0 : o.attrs, g = Na(c, a, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Hh = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Wh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ra(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ze(t, r.schema)), l === "mark" && (i = Mt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, m, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (y, b) => {
      o && o === y.type && (a = !0, m = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y);
    }) : r.doc.nodesBetween(u, d, (y, b) => {
      b < u && o && o === y.type && (a = !0, m = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y), b >= u && b <= d && (o && o === y.type && (a = !0, s && n.setNodeMarkup(b, void 0, {
        ...y.attrs,
        ...e
      })), i && y.marks.length && y.marks.forEach((k) => {
        if (i === k.type && (a = !0, s)) {
          const A = Math.max(b, u), R = Math.min(b + y.nodeSize, d);
          n.addMark(
            A,
            R,
            i.create({
              ...k.attrs,
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
}, Vh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ze(t, n.schema);
  return fd(s, e)(n, r);
}, Uh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = ze(t, n.schema);
  return hd(s, e)(n, r);
};
function Kh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function rr(t) {
  return Kh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
var qh = {};
no(qh, {
  createAtomBlockMarkdownSpec: () => Gh,
  createBlockMarkdownSpec: () => Jh,
  createInlineMarkdownSpec: () => Qh,
  parseAttributes: () => oo,
  parseIndentedBlocks: () => Zh,
  renderNestedMarkdownContent: () => ep,
  serializeAttributes: () => io
});
function oo(t) {
  if (!t?.trim())
    return {};
  const e = {}, n = [], r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)), s = r.match(/(?:^|\s)\.([\w-]+)/g);
  if (s) {
    const c = s.map((u) => u.trim().slice(1));
    e.class = c.join(" ");
  }
  const o = r.match(/(?:^|\s)#([\w-]+)/);
  o && (e.id = o[1]);
  const i = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(i)).forEach(([, c, u]) => {
    var d;
    const f = parseInt(((d = u.match(/__QUOTED_(\d+)__/)) == null ? void 0 : d[1]) || "0", 10), h = n[f];
    h && (e[c] = h.slice(1, -1));
  });
  const a = r.replace(/(?:^|\s)\.([\w-]+)/g, "").replace(/(?:^|\s)#([\w-]+)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
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
function Gh(t) {
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
        const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), m = u.match(h);
        if (!m)
          return;
        const g = m[1] || "", y = r(g);
        if (!i.find((k) => !(k in y)))
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
function Jh(t) {
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
        const [b, k = ""] = y, A = s(k);
        let R = 1;
        const T = b.length;
        let j = "";
        const H = /^:::([\w-]*)(\s.*)?/gm, ne = d.slice(T);
        for (H.lastIndex = 0; ; ) {
          const U = H.exec(ne);
          if (U === null)
            break;
          const z = U.index, D = U[1];
          if (!((m = U[2]) != null && m.endsWith(":::"))) {
            if (D)
              R += 1;
            else if (R -= 1, R === 0) {
              const P = ne.slice(0, z);
              j = P.trim();
              const C = d.slice(0, T + z + U[0].length);
              let S = [];
              if (j)
                if (l === "block")
                  for (S = h.blockTokens(P), S.forEach((E) => {
                    E.text && (!E.tokens || E.tokens.length === 0) && (E.tokens = h.inlineTokens(E.text));
                  }); S.length > 0; ) {
                    const E = S[S.length - 1];
                    if (E.type === "paragraph" && (!E.text || E.text.trim() === ""))
                      S.pop();
                    else
                      break;
                  }
                else
                  S = h.inlineTokens(j);
              return {
                type: e,
                raw: C,
                attributes: A,
                content: j,
                tokens: S
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
function Yh(t) {
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
function Xh(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function Qh(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = Yh,
    serializeAttributes: o = Xh,
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
        const b = f[g];
        if (y !== void 0 && b === y)
          return;
        h[g] = b;
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
        const g = l ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(
          `^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`
        ), y = f.match(g);
        if (!y)
          return;
        let b = "", k = "";
        if (l) {
          const [, R] = y;
          k = R;
        } else {
          const [, R, T] = y;
          k = R, b = T || "";
        }
        const A = s(k.trim());
        return {
          type: e,
          raw: y[0],
          content: b.trim(),
          attributes: A
        };
      }
    },
    renderMarkdown: (f) => {
      let h = "";
      r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter((b) => b.type === "text").map((b) => b.text).join(""));
      const m = u(f.attrs || {}), g = o(m), y = g ? ` ${g}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${h}[/${c}]`;
    }
  };
}
function Zh(t, e, n) {
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
    const b = [y];
    for (u += 1; u < l.length; ) {
      const T = l[u];
      if (T.trim() === "") {
        const H = l.slice(u + 1).findIndex((z) => z.trim() !== "");
        if (H === -1)
          break;
        if ((((s = (r = l[u + 1 + H].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          b.push(T), c = `${c}${T}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = T.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        b.push(T), c = `${c}${T}
`, u += 1;
      else
        break;
    }
    let k;
    const A = b.slice(1);
    if (A.length > 0) {
      const T = A.map((j) => j.slice(g + d)).join(`
`);
      T.trim() && (e.customNestedParser ? k = e.customNestedParser(T) : k = n.blockTokens(T));
    }
    const R = e.createToken(m, k);
    a.push(R);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function ep(t, e, n, r) {
  if (!t || !Array.isArray(t.content))
    return "";
  const s = typeof n == "function" ? n(r) : n, [o, ...i] = t.content, l = e.renderChildren([o]);
  let a = `${s}${l}`;
  return i && i.length > 0 && i.forEach((c, u) => {
    var d, f;
    const h = (f = (d = e.renderChild) == null ? void 0 : d.call(e, c, u + 1)) != null ? f : e.renderChildren([c]);
    if (h != null) {
      const m = h.split(`
`).map((g) => g ? e.indent(g) : e.indent("")).join(`
`);
      a += c.type === "paragraph" ? `

${m}` : `
${m}`;
    }
  }), a;
}
function Da(t, e) {
  const n = { ...t };
  return rr(t) && rr(e) && Object.keys(e).forEach((r) => {
    rr(e[r]) && rr(t[r]) ? n[r] = Da(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var tp = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
}, lo = class {
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
        ln(this, "addOptions", {
          name: this.name
        })
      )
    };
  }
  get storage() {
    return {
      ...jn(
        ln(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      )
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Da(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, this.child = null, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, np = class La extends lo {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new La(n);
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
}, rp = {};
no(rp, {
  ClipboardTextSerializer: () => sp,
  Commands: () => op,
  Delete: () => ip,
  Drop: () => lp,
  Editable: () => ap,
  FocusEvents: () => cp,
  Keymap: () => up,
  Paste: () => dp,
  Tabindex: () => fp,
  TextDirection: () => hp,
  focusEventsPluginKey: () => $a
});
var st = class Fa extends lo {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Fa(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, sp = st.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new nt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, o = xh(n), { blockSeparator: i } = this.options, l = {
              ...i !== void 0 ? { blockSeparator: i } : {},
              textSerializers: o
            };
            return [...s.ranges].sort((c, u) => c.$from.pos - u.$from.pos).map(
              ({ $from: c, $to: u }) => bh(r, { from: c.pos, to: u.pos }, l)
            ).join(i ?? `

`);
          }
        }
      })
    ];
  }
}), op = st.create({
  name: "commands",
  addCommands() {
    return {
      ...ka
    };
  }
}), ip = st.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = ph(t.before, [
        t,
        ...e
      ]);
      Sh(u).forEach((h) => {
        u.mapping.mapResult(h.oldRange.from).deletedAfter && u.mapping.mapResult(h.oldRange.to).deletedBefore && u.before.nodesBetween(
          h.oldRange.from,
          h.oldRange.to,
          (m, g) => {
            const y = g + m.nodeSize - 2, b = h.oldRange.from <= g && y <= h.oldRange.to;
            this.editor.emit("delete", {
              type: "node",
              node: m,
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
          }
        );
      });
      const f = u.mapping;
      u.steps.forEach((h, m) => {
        var g, y;
        if (h instanceof tt) {
          const b = f.slice(m).map(h.from, -1), k = f.slice(m).map(h.to), A = f.invert().map(b, -1), R = f.invert().map(k), T = b > 0 ? (g = u.doc.nodeAt(b - 1)) == null ? void 0 : g.marks.some((H) => H.eq(h.mark)) : !1, j = (y = u.doc.nodeAt(k)) == null ? void 0 : y.marks.some((H) => H.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: A,
              to: R
            },
            newRange: {
              from: b,
              to: k
            },
            partial: !!(j || T),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), lp = st.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new nt("tiptapDrop"),
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
}), ap = st.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new nt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), $a = new nt("focusEvents"), cp = st.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new ct({
        key: $a,
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
}), up = st.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, m = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = m.parent.type.spec.isolating, y = d.pos - d.parentOffset, b = g && m.parent.childCount === 1 ? y === d.pos : se.atStart(c).from === f;
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
    return Tr() || Ma() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ct({
        key: new nt("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some(
            (g) => g.getMeta("preventClearDocument")
          );
          if (!r || s)
            return;
          const { empty: o, from: i, to: l } = e.selection, a = se.atStart(e.doc).from, c = se.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !ja(n.doc))
            return;
          const f = n.tr, h = Ca({
            state: n,
            transaction: f
          }), { commands: m } = new yf({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), dp = st.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new nt("tiptapPaste"),
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
}), fp = st.create({
  name: "tabindex",
  addOptions() {
    return {
      value: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new nt("tabindex"),
        props: {
          attributes: () => {
            var t;
            return !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: (t = this.options.value) != null ? t : "0" };
          }
        }
      })
    ];
  }
}), hp = st.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Ia(this.extensions);
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
      new ct({
        key: new nt("textDirection"),
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
function pp(t) {
  return new tp({
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
        o.insert(c, t.type.create(s)).delete(
          o.mapping.map(i),
          o.mapping.map(l)
        );
      }
      o.scrollIntoView();
    },
    undoable: t.undoable
  });
}
var mp = (t) => "touches" in t, gp = class {
  /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */
  constructor(t) {
    this.directions = [
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ], this.minSize = {
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
    this.node = t.node, this.editor = t.editor, this.element = t.element, this.element.draggable = !1, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = {
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
    return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = this.node.type.isInline ? "inline-flex" : "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t;
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
      ), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", (n) => this.handleResizeStart(n, t)), e.addEventListener(
        "touchstart",
        (n) => this.handleResizeStart(n, t)
      ), this.handleMap.set(t, e), this.wrapper.appendChild(e);
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, mp(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, Hn = class Pa extends lo {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Pa(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, yp = np.create({
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
    return ["u", Et(this.options.HTMLAttributes, t), 0];
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
}), bp = yp, xp = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, wp = Hn.create({
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
    return ["img", Et(this.options.HTMLAttributes, t)];
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
      a.draggable = !1;
      const c = Et(this.options.HTMLAttributes, i);
      Object.entries(c).forEach(([f, h]) => {
        if (h != null)
          switch (f) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(f, h);
              break;
          }
      }), c.src !== null && (a.src = c.src);
      const u = new gp({
        element: a,
        editor: l,
        node: s,
        getPos: o,
        onResize: (f, h) => {
          a.style.width = `${f}px`, a.style.height = `${h}px`;
        },
        onCommit: (f, h) => {
          const m = o();
          m !== void 0 && this.editor.chain().setNodeSelection(m).updateAttributes(this.name, {
            width: f,
            height: h
          }).run();
        },
        onUpdate: (f, h, m) => f.type === s.type,
        options: {
          directions: t,
          min: {
            width: e,
            height: n
          },
          preserveAspectRatio: r === !0
        }
      }), d = u.dom;
      return d.style.visibility = "hidden", d.style.pointerEvents = "none", a.onload = () => {
        d.style.visibility = "", d.style.pointerEvents = "";
      }, u;
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
      pp({
        find: xp,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), vp = wp;
let zs, Ds;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  zs = (e) => t.get(e), Ds = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  zs = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, Ds = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var xe = class {
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
    return zs(t) || Ds(t, Sp(t));
  }
};
function Sp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = Cp(t), n = t.childCount, r = [];
  let s = 0, o = null;
  const i = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let m = 0; ; m++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (m == d.childCount) break;
      const g = d.child(m), { colspan: y, rowspan: b, colwidth: k } = g.attrs;
      for (let A = 0; A < b; A++) {
        if (A + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - A
          });
          break;
        }
        const R = s + A * e;
        for (let T = 0; T < y; T++) {
          r[R + T] == 0 ? r[R + T] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - T
          });
          const j = k && k[T];
          if (j) {
            const H = (R + T) % e * 2, ne = i[H];
            ne == null || ne != j && i[H + 1] == 1 ? (i[H] = j, i[H + 1] = 1) : ne == j && i[H + 1]++;
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
  const l = new xe(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
  return a && kp(l, i, t), l;
}
function Cp(t) {
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
function kp(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = Ap(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function Ap(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function De(t) {
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
const St = new nt("selectingCells");
function Bt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function Np(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function ot(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Pr(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = Bt(e.$head) || Ep(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Ep(t) {
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
function Tp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ao(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function _a(t, e, n) {
  const r = t.node(-1), s = xe.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function Ht(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Ba(t, e, n = 1) {
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
function Mp(t, e, n) {
  const r = De(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var he = class mt extends se {
  constructor(e, n = e) {
    const r = e.node(-1), s = xe.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new zl(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (Ls(r) && Ls(s) && ao(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? mt.rowSelection(r, s) : o && this.isColSelection() ? mt.colSelection(r, s) : new mt(r, s);
    }
    return Q.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = xe.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, i = [];
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
          let b = m.attrs;
          if (g > 0 && (b = Ht(b, 0, g)), y > 0 && (b = Ht(b, b.colspan - y, y)), h.left < s.left) {
            if (m = m.type.createAndFill(b), !m) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
          } else m = m.type.create(b, m.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const b = {
            ...m.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? m = m.type.createAndFill(b) : m = m.type.create(b, m.content);
        }
        c.push(m);
      }
      i.push(e.child(a).copy(N.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new L(N.from(l), 1, 1);
  }
  replace(e, n = L.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? L.empty : n);
    }
    const o = se.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new L(N.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = xe.get(n), s = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = xe.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new mt(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = xe.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof mt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = xe.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new mt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new mt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new mt(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new Rp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
he.prototype.visible = !1;
se.jsonID("cell", he);
var Rp = class Ha {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Ha(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && ao(n, r) ? new he(n, r) : se.near(r, 1);
  }
};
function Op(t) {
  if (!(t.selection instanceof he)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(Xe.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), Se.create(t.doc, e);
}
function Ip({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function jp({ $from: t, $to: e }) {
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
function zp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof Y && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = he.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = he.rowSelection(l, l);
    } else if (!n) {
      const l = xe.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = he.create(s, a + 1, c);
    }
  } else r instanceof Q && Ip(r) ? o = Q.create(s, r.from) : r instanceof Q && jp(r) && (o = Q.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const Dp = new nt("fix-tables");
function Wa(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? Wa(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function Va(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = Lp(t, s, o, n));
  };
  return e ? e.doc != t.doc && Wa(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Lp(t, e, n, r) {
  const s = xe.get(e);
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
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, Ht(d, d.colspan - c.n, c.n));
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
        const b = De(t.schema)[h].createAndFill();
        b && m.push(b);
      }
      const g = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), m);
    }
    c = d;
  }
  return r.setMeta(Dp, { fixTables: !0 });
}
function ut(t) {
  const e = t.selection, n = Pr(t), r = n.node(-1), s = n.start(-1), o = xe.get(r);
  return {
    ...e instanceof he ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function Ua(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  Mp(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Ba(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? De(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Fp(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t);
    e(Ua(t.tr, n, n.left));
  }
  return !0;
}
function $p(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t);
    e(Ua(t.tr, n, n.right));
  }
  return !0;
}
function Pp(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, Ht(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function _p(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Pp(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = xe.get(o);
    }
    e(r);
  }
  return !0;
}
function Bp(t, e, n) {
  var r;
  const s = De(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function Ka(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  Bp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? De(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && i.push(f);
  }
  return t.insert(o, De(r.type.schema).row.create(null, i)), t;
}
function Hp(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t);
    e(Ka(t.tr, n, n.top));
  }
  return !0;
}
function Wp(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t);
    e(Ka(t.tr, n, n.bottom));
  }
  return !0;
}
function Vp(t, { map: e, table: n, tableStart: r }, s) {
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
function Up(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = ut(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Vp(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = xe.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Ni(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Kp({ width: t, height: e, map: n }, r) {
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
  if (!(n instanceof he) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = ut(t), { map: s } = r;
  if (Kp(s, r)) return !1;
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
      ...Ba(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = Ni(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new he(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Ti(t, e) {
  const n = De(t.schema);
  return qp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function qp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof he) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = Np(r.$from), !s) return !1;
      o = (i = Bt(r.$from)) === null || i === void 0 ? void 0 : i.pos;
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
      const u = ut(e), d = e.tr;
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
      }), a[0]), r instanceof he && d.setSelection(new he(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function Gp(t, e) {
  return function(n, r) {
    if (!ot(n)) return !1;
    const s = Pr(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof he ? n.selection.forEachCell((i, l) => {
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
function Jp(t) {
  return function(e, n) {
    if (!ot(e)) return !1;
    if (n) {
      const r = De(e.schema), s = ut(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
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
function zn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Jp(t) : function(n, r) {
    if (!ot(n)) return !1;
    if (r) {
      const s = De(n.schema), o = ut(n), i = n.tr, l = Mi("row", o, s), a = Mi("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
zn("row", { useDeprecatedLogic: !0 });
zn("column", { useDeprecatedLogic: !0 });
const Yp = zn("cell", { useDeprecatedLogic: !0 });
function Xp(t, e) {
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
    if (!ot(e)) return !1;
    const r = Xp(Pr(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(Q.between(s, Tp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Qp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function sr(t, e) {
  const n = t.selection;
  if (!(n instanceof he)) return !1;
  if (e) {
    const r = t.tr, s = De(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new L(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function Zp(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = Fs(De(i).row, new L(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? Fs(De(i).row, new L(e, n, r)).content : e);
  else return null;
  return em(i, l);
}
function em(t, e) {
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
      const o = De(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(N.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Fs(t, e) {
  const n = t.createAndFill();
  return new jl(n).replace(0, n.content.size, e).doc;
}
function tm({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(Ht(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
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
function nm(t, e, n, r, s, o, i) {
  const l = t.doc.type.schema, a = De(l);
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
      t.setNodeMarkup(m, null, Ht(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(m + f.nodeSize, f.type.createAndFill(Ht(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function ji(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = xe.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = xe.get(o), f = d.mapping.maps.length;
  }
  nm(d, i, o, n, c, u, f) && h(), Oi(d, i, o, n, a, c, l, f) && h(), Oi(d, i, o, n, a, c, u, f) && h(), Ii(d, i, o, n, l, u, a, f) && h(), Ii(d, i, o, n, l, u, c, f) && h();
  for (let m = l; m < u; m++) {
    const g = i.positionAt(m, a, o), y = i.positionAt(m, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new L(s.rows[m - l], 0, 0));
  }
  h(), d.setSelection(new he(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const rm = mf({
  ArrowLeft: or("horiz", -1),
  ArrowRight: or("horiz", 1),
  ArrowUp: or("vert", -1),
  ArrowDown: or("vert", 1),
  "Shift-ArrowLeft": ir("horiz", -1),
  "Shift-ArrowRight": ir("horiz", 1),
  "Shift-ArrowUp": ir("vert", -1),
  "Shift-ArrowDown": ir("vert", 1),
  Backspace: sr,
  "Mod-Backspace": sr,
  Delete: sr,
  "Mod-Delete": sr
});
function hr(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function or(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof he) return hr(n, r, se.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = qa(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return hr(n, r, se.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = _a(l, t, e);
      let c;
      return a ? c = se.near(a, 1) : e < 0 ? c = se.near(n.doc.resolve(l.before(-1)), -1) : c = se.near(n.doc.resolve(l.after(-1)), 1), hr(n, r, c);
    }
  };
}
function ir(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof he) i = o;
    else {
      const a = qa(s, t, e);
      if (a == null) return !1;
      i = new he(n.doc.resolve(a));
    }
    const l = _a(i.$headCell, t, e);
    return l ? hr(n, r, new he(i.$anchorCell, l)) : !1;
  };
}
function sm(t, e) {
  const n = t.state.doc, r = Bt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new he(r))), !0) : !1;
}
function om(t, e, n) {
  if (!ot(t.state)) return !1;
  let r = Zp(n);
  const s = t.state.selection;
  if (s instanceof he) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [N.from(Fs(De(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = xe.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = tm(r, l.right - l.left, l.bottom - l.top), ji(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = Pr(t.state), i = o.start(-1);
    return ji(t.state, t.dispatch, i, xe.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function im(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = zi(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof he)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Bt(t.state.selection.$anchor)) != null && ((n = ys(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = ys(t, c);
    const d = St.getState(t.state) == null;
    if (!u || !ao(a, u)) if (d) u = a;
    else return;
    const f = new he(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(St, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), St.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(St, -1));
  }
  function l(a) {
    const c = a, u = St.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (zi(t, c.target) != r && (d = ys(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function qa(t, e, n) {
  if (!(t.state.selection instanceof Q)) return null;
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
function zi(t, e) {
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
  return r >= 0 && Bt(t.state.doc.resolve(r)) || Bt(t.state.doc.resolve(s));
}
var lm = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), $s(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, $s(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function $s(t, e, n, r, s, o) {
  let i = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: h, colwidth: m } = c.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = s == f ? o : m && m[g], b = y ? y + "px" : "";
        if (i += y || r, y || (l = !1), a)
          a.style.width != b && (a.style.width = b), a = a.nextSibling;
        else {
          const k = document.createElement("col");
          k.style.width = b, e.appendChild(k);
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
const Ke = new nt("tableColumnResizing");
function am({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = lm, lastColumnResizable: s = !0 } = {}) {
  const o = new ct({
    key: Ke,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = De(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new cm(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = Ke.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          um(i, l, t, s);
        },
        mouseleave: (i) => {
          dm(i);
        },
        mousedown: (i, l) => {
          fm(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = Ke.getState(i);
        if (l && l.activeHandle > -1) return ym(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var cm = class pr {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Ke);
    if (r && r.setHandle != null) return new pr(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new pr(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return Ls(e.doc.resolve(s)) || (s = -1), new pr(s, n.dragging);
    }
    return n;
  }
};
function um(t, e, n, r) {
  if (!t.editable) return;
  const s = Ke.getState(t.state);
  if (s && !s.dragging) {
    const o = pm(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = Di(t, e, "left", n) : a - e.clientX <= n && (i = Di(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = xe.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Ga(t, i);
    }
  }
}
function dm(t) {
  if (!t.editable) return;
  const e = Ke.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ga(t, -1);
}
function fm(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = Ke.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = hm(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Ke, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = Ke.getState(t.state);
    f?.dragging && (mm(t, f.activeHandle, Li(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(Ke, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = Ke.getState(t.state);
    if (f && f.dragging) {
      const h = Li(f.dragging, d, n);
      Fi(t, f.activeHandle, h, r);
    }
  }
  return Fi(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function hm(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function pm(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Di(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = Bt(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = xe.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Li(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ga(t, e) {
  t.dispatch(t.state.tr.setMeta(Ke, { setHandle: e }));
}
function mm(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = xe.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const m = f.colwidth ? f.colwidth.slice() : gm(f.colspan);
    m[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: m
    });
  }
  a.docChanged && t.dispatch(a);
}
function Fi(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = xe.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && $s(o, a.firstChild, a, r, l, n);
}
function gm(t) {
  return Array(t).fill(0);
}
function ym(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return Se.empty;
  const o = xe.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Ke.getState(t)) === null || a === void 0) && a.dragging && n.push(Xe.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(Xe.widget(f, h));
    }
  }
  return Se.create(t.doc, n);
}
function bm({ allowTableNodeSelection: t = !1 } = {}) {
  return new ct({
    key: St,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(St);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: Op,
      handleDOMEvents: { mousedown: im },
      createSelectionBetween(e) {
        return St.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: sm,
      handleKeyDown: rm,
      handlePaste: om
    },
    appendTransaction(e, n, r) {
      return zp(r, Va(r, n), t);
    }
  });
}
function Mr(t) {
  return t === "left" || t === "right" || t === "center" ? t : null;
}
function xm(t) {
  const e = (t.style.textAlign || "").trim().toLowerCase(), n = (t.getAttribute("align") || "").trim().toLowerCase();
  return Mr(e || n);
}
function wm(t) {
  return Mr(t?.align);
}
function Ja() {
  return {
    default: null,
    parseHTML: (t) => xm(t),
    renderHTML: (t) => t.align ? {
      style: `text-align: ${t.align}`
    } : {}
  };
}
var Ya = Hn.create({
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
      },
      align: Ja()
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", Et(this.options.HTMLAttributes, t), 0];
  }
}), Xa = Hn.create({
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
      },
      align: Ja()
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", Et(this.options.HTMLAttributes, t), 0];
  }
}), Qa = Hn.create({
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
    return ["tr", Et(this.options.HTMLAttributes, t), 0];
  }
});
function Ps(t, e) {
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
        const b = s === h ? o : g && g[y], k = b ? `${b}px` : "";
        if (l += b || r, b || (a = !1), c) {
          if (c.style.width !== k) {
            const [A, R] = Ps(r, b);
            c.style.setProperty(A, R);
          }
          c = c.nextSibling;
        } else {
          const A = document.createElement("col"), [R, T] = Ps(r, b);
          A.style.setProperty(R, T), e.appendChild(A);
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
var vm = class {
  constructor(t, e, n, r = {}) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
    for (const [s, o] of Object.entries(r))
      o != null && (s === "style" ? this.table.style.cssText = String(o) : this.table.setAttribute(s, String(o)));
    t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), $i(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, $i(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function Sm(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: m } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : m && m[g];
      s += y || e, y || (o = !1);
      const [b, k] = Ps(e, y);
      i.push(["col", { style: `${b}: ${k}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Pi(t, e) {
  return t.createAndFill();
}
function Cm(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function km(t, e, n, r, s) {
  const o = Cm(t), i = [], l = [];
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
function Am(t) {
  return t instanceof he;
}
var lr = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Am(e))
    return !1;
  let n = 0;
  const r = Oa(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Nm = "";
function Em(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function Tm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : Nm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((g) => {
    const y = [];
    g.content && g.content.forEach((b) => {
      let k = "";
      b.content && Array.isArray(b.content) && b.content.length > 1 ? k = b.content.map(
        (H) => e.renderChildren(H)
      ).join(s) : k = b.content ? e.renderChildren(b.content) : "";
      const A = Em(k), R = b.type === "tableHeader", T = wm(b.attrs);
      y.push({ text: A, isHeader: R, align: T });
    }), o.push(y);
  });
  const i = o.reduce((g, y) => Math.max(g, y.length), 0);
  if (i === 0)
    return "";
  const l = Array.from({ length: i }).fill(0);
  o.forEach((g) => {
    var y;
    for (let b = 0; b < i; b += 1) {
      const A = (((y = g[b]) == null ? void 0 : y.text) || "").length;
      A > l[b] && (l[b] = A), l[b] < 3 && (l[b] = 3);
    }
  });
  const a = (g, y) => g + " ".repeat(Math.max(0, y - g.length)), c = o[0], u = c.some((g) => g.isHeader), d = Array.from({
    length: i
  }).fill(null);
  o.forEach((g) => {
    var y;
    for (let b = 0; b < i; b += 1)
      !d[b] && ((y = g[b]) != null && y.align) && (d[b] = g[b].align);
  });
  let f = `
`;
  const h = Array.from({ length: i }).map(
    (g, y) => u && c[y] && c[y].text || ""
  );
  return f += `| ${h.map((g, y) => a(g, l[y])).join(" | ")} |
`, f += `| ${l.map((g, y) => {
    const b = Math.max(3, g), k = d[y];
    return k === "left" ? `:${"-".repeat(b)}` : k === "right" ? `${"-".repeat(b)}:` : k === "center" ? `:${"-".repeat(b)}:` : "-".repeat(b);
  }).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((g) => {
    f += `| ${Array.from({ length: i }).fill(0).map((y, b) => a(g[b] && g[b].text || "", l[b])).join(" | ")} |
`;
  }), f;
}
var Mm = Tm, Za = Hn.create({
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
      View: vm,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = Sm(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      Et(this.options.HTMLAttributes, e, {
        style: i()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, l] : l;
  },
  parseMarkdown: (t, e) => {
    const n = [], r = Array.isArray(t.align) ? t.align : [];
    if (t.header) {
      const s = [];
      t.header.forEach((o, i) => {
        var l;
        const a = Mr((l = r[i]) != null ? l : o.align), c = a ? { align: a } : {};
        s.push(
          e.createNode("tableHeader", c, [
            { type: "paragraph", content: e.parseInline(o.tokens) }
          ])
        );
      }), n.push(e.createNode("tableRow", {}, s));
    }
    return t.rows && t.rows.forEach((s) => {
      const o = [];
      s.forEach((i, l) => {
        var a;
        const c = Mr((a = r[l]) != null ? a : i.align), u = c ? { align: c } : {};
        o.push(
          e.createNode("tableCell", u, [
            { type: "paragraph", content: e.parseInline(i.tokens) }
          ])
        );
      }), n.push(e.createNode("tableRow", {}, o));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => Mm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = km(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(Q.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Fp(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => $p(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => _p(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Hp(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Wp(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Up(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Qp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Ei(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Ti(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => zn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => zn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Yp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Ei(t, e) ? !0 : Ti(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Gp(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Ri(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Ri(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Va(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = he.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: lr,
      "Mod-Backspace": lr,
      Delete: lr,
      "Mod-Delete": lr
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        am({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      bm({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  addNodeView() {
    const t = this.options.resizable && this.editor.isEditable, e = this.options.View;
    return t || !e ? null : ({ node: n, view: r, HTMLAttributes: s }) => {
      const o = Et(this.options.HTMLAttributes, s);
      return new e(n, this.options.cellMinWidth, r, o);
    };
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: jn(ln(t, "tableRole", e))
    };
  }
});
st.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Za.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Ya.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Xa.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Qa.configure(this.options.tableRow)), t;
  }
});
function Te(t) {
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
function Rm({ editor: t }) {
  const [e, n] = Ve(!1);
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
function Om({ editor: t }) {
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50", children: [
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(Rm, { editor: t }),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(bn, {}),
    /* @__PURE__ */ p.jsx(
      Te,
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
      Te,
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
      Te,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    t.isActive("table") && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Add Row Above",
          icon: "fa-solid fa-arrow-up",
          disabled: !t.can().addRowBefore(),
          onClick: () => t.chain().focus().addRowBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Add Row Below",
          icon: "fa-solid fa-arrow-down",
          disabled: !t.can().addRowAfter(),
          onClick: () => t.chain().focus().addRowAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Add Column Left",
          icon: "fa-solid fa-arrow-left",
          disabled: !t.can().addColumnBefore(),
          onClick: () => t.chain().focus().addColumnBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Add Column Right",
          icon: "fa-solid fa-arrow-right",
          disabled: !t.can().addColumnAfter(),
          onClick: () => t.chain().focus().addColumnAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Delete Row",
          icon: "fa-solid fa-minus",
          disabled: !t.can().deleteRow(),
          onClick: () => t.chain().focus().deleteRow().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
        {
          title: "Delete Column",
          icon: "fa-solid fa-trash",
          disabled: !t.can().deleteColumn(),
          onClick: () => t.chain().focus().deleteColumn().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        Te,
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
      Te,
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
      Te,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      Te,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function Im({
  value: t,
  onChange: e,
  disabled: n,
  field_name: r
}) {
  const s = cc({
    extensions: [
      dc.configure({
        link: {
          openOnClick: !1,
          autolink: !0
        }
      }),
      bp,
      vp,
      Za.configure({ resizable: !0 }),
      Qa,
      Xa,
      Ya
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
  return We(() => {
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
        !n && /* @__PURE__ */ p.jsx(Om, { editor: s }),
        /* @__PURE__ */ p.jsxs("div", { className: "resize-y overflow-auto min-h-[200px] max-h-[500px]", children: [
          /* @__PURE__ */ p.jsx(
            uc,
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
function Wn({
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
  AttachmentPopup: d,
  filesToDelete: f
}) {
  const {
    executeFieldMethod: h,
    handleFileUpload: m,
    handleKeyDown: g,
    setSearch: y,
    setOpen: b,
    setIsFocused: k,
    handleInputChange: A,
    handleSelect: R,
    handlePersist: T,
    setLoading: j,
    removeFile: H,
    refreshOptions: ne,
    baseInputClasses: U,
    focusClasses: z,
    labelClasses: D,
    search: P,
    highlightedIndex: C,
    options: S,
    isDisabled: E,
    key: w,
    filteredOptions: le,
    open: X,
    listRef: fe,
    triggerRef: re,
    isFocused: v,
    exactMatch: W,
    loading: M
  } = su({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    chainMap: a,
    filesToDelete: f,
    ...u && { setFieldLoading: u },
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), K = (te) => te.icon ? /* @__PURE__ */ p.jsx("i", { className: te.icon }) : null, Z = t.buttons ? Object.entries(t.buttons) : [], be = Z.find(([te]) => te === "more")?.[1] ?? null, ce = Z.filter(([te]) => te !== "more"), [Ae, $] = Ve(!1), ee = nn(null);
  We(() => {
    if (!Ae) return;
    const te = (F) => {
      ee.current && !ee.current.contains(F.target) && $(!1);
    };
    return document.addEventListener("mousedown", te), () => document.removeEventListener("mousedown", te);
  }, [Ae]);
  const q = (te, F) => {
    console.log("called handleaction"), n?.handleActions?.({ [te]: F }, e.values, ne);
  }, ue = () => {
    switch (t.type) {
      case "suggest":
      case "autosuggest":
      case "autocomplete": {
        const O = e.values[w] ?? "", G = P !== "" ? P : mr(S, O) ?? String(O ?? "");
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { ref: re, className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                className: `${U} ${z}`,
                value: G,
                placeholder: t.placeholder || "Type to search...",
                onChange: A,
                onBlur: () => {
                  setTimeout(() => b(!1), 150);
                },
                onKeyDown: (V) => {
                  if (V.key === "Enter") {
                    if (V.preventDefault(), W) {
                      const [ye] = W;
                      e.setFieldValue(w, ye), T(ye, t, o);
                    } else P.trim() && (e.setFieldValue(w, P.trim()), T(P.trim(), t, o));
                    b(!1), y("");
                    return;
                  }
                  g(V, !0);
                },
                disabled: E
              }
            ),
            (M || c) && /* @__PURE__ */ p.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
          ] }),
          /* @__PURE__ */ p.jsx(_s, { anchorRef: re, open: X && !E, children: /* @__PURE__ */ p.jsx(
            "div",
            {
              ref: fe,
              className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
              children: le.length > 0 && W ? le.map(([V, ye], Ne) => /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `${w}-${V}`,
                  "data-index": Ne,
                  className: `px-3 py-2 cursor-pointer text-sm
                  ${C === Ne ? "bg-gray-100" : "hover:bg-gray-100"}`,
                  onMouseDown: () => R(V),
                  children: ye
                },
                V
              )) : /* @__PURE__ */ p.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${G}" ` })
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
          const O = e.values[w];
          return /* @__PURE__ */ p.jsx(
            Bo,
            {
              field: t,
              isDisabled: E,
              handleKeyDown: g,
              valueArray: O,
              labelClasses: D,
              listRef: fe,
              search: P,
              filteredOptions: le,
              highlightedIndex: C,
              setSearch: y,
              formik: e,
              executeFieldMethod: h,
              handlePersist: T,
              module_refid: o,
              options: S,
              triggerRef: re,
              open: X,
              setOpen: b,
              loading: M || !!c
            }
          );
        }
        return /* @__PURE__ */ p.jsx(
          _o,
          {
            field: t,
            isDisabled: E,
            handleKeyDown: g,
            labelClasses: D,
            listRef: fe,
            search: P,
            filteredOptions: le,
            highlightedIndex: C,
            setSearch: y,
            formik: e,
            executeFieldMethod: h,
            handlePersist: T,
            module_refid: o,
            options: S,
            triggerRef: re,
            open: X,
            setOpen: b,
            loading: M || !!c
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
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx(
            Im,
            {
              value: e.values[w] ?? "",
              disabled: E,
              field_name: w,
              onChange: (O) => {
                e.setFieldValue(w, O), T(O, t, o), h("onChange", t, w);
              }
            }
          ),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "textarea":
        return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "textarea",
              {
                id: w,
                className: `${U} ${z} min-h-[120px] resize-none`,
                onFocus: () => k(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (O) => {
                  e.setFieldValue(w, O.target.value), T(O.target.value, t, o), h("onChange", t, `${w}`);
                },
                placeholder: t.placeholder,
                disabled: E
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] }) });
      case "select":
        if (t.multiple === !0) {
          const O = e.values[w];
          return /* @__PURE__ */ p.jsx(
            Bo,
            {
              field: t,
              isDisabled: E,
              handleKeyDown: g,
              valueArray: O,
              labelClasses: D,
              listRef: fe,
              search: P,
              filteredOptions: le,
              highlightedIndex: C,
              setSearch: y,
              formik: e,
              executeFieldMethod: h,
              handlePersist: T,
              module_refid: o,
              options: S,
              triggerRef: re,
              open: X,
              setOpen: b,
              loading: M || !!c
            }
          );
        }
        if (t.search)
          return /* @__PURE__ */ p.jsx(
            _o,
            {
              field: t,
              isDisabled: E,
              handleKeyDown: g,
              labelClasses: D,
              listRef: fe,
              search: P,
              filteredOptions: le,
              highlightedIndex: C,
              setSearch: y,
              formik: e,
              executeFieldMethod: h,
              handlePersist: T,
              module_refid: o,
              options: S,
              triggerRef: re,
              open: X,
              setOpen: b,
              loading: M || !!c
            }
          );
        const te = Pc(S);
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsxs(
              "select",
              {
                className: `${U} ${z} appearance-none ${E ? "" : "cursor-pointer"} pr-12`,
                onFocus: () => k(!0),
                name: w,
                id: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (O) => {
                  e.setFieldValue(w, O.target.value), T(O.target.value, t, o), h("onChange", t, `${w}`);
                },
                disabled: E,
                children: [
                  t?.["no-option"] !== "false" && !e.values[w] && /* @__PURE__ */ p.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                  /* @__PURE__ */ p.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                  Object.entries(te).map(
                    ([O, G]) => O === "__ungrouped__" ? G.map((V) => /* @__PURE__ */ p.jsx("option", { value: V.value, className: "py-2", children: V.label }, V.value)) : /* @__PURE__ */ p.jsx("optgroup", { label: O, children: G.map((V) => /* @__PURE__ */ p.jsx("option", { value: V.value, children: V.label }, V.value)) }, O)
                  )
                ]
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: M || c ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ p.jsx(
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
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: `flex ${S.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: S.map((O) => /* @__PURE__ */ p.jsxs(
            "label",
            {
              htmlFor: `${w}-${O.value}`,
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${w}-${O.value}`,
                    type: "radio",
                    name: w,
                    checked: e.values[w] === O.value,
                    value: O.value,
                    onChange: (G) => {
                      e.setFieldValue(w, G.target.value), T(G.target.value, t, o), h("onChange", t, `${w}-${O.value}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: E,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${E ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                O.label
              ]
            },
            O.value
          )) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
        ] });
      case "checkbox": {
        const O = t.multiple === !0, G = e.values[w];
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 ml-1", children: S.map((V) => {
            const ye = O ? Array.isArray(G) && G.includes(V.value) : G === V.value;
            return /* @__PURE__ */ p.jsxs(
              "label",
              {
                className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
                children: [
                  /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      id: `${w}-${V.value}`,
                      type: "checkbox",
                      checked: ye,
                      onChange: (Ne) => {
                        let ae;
                        if (O) {
                          const pe = Array.isArray(G) ? G : [];
                          ae = Ne.target.checked ? [...pe, V.value] : pe.filter((Ze) => Ze !== V.value);
                        } else
                          ae = Ne.target.checked ? V.value : "false";
                        e.setFieldValue(w, ae), T(ae, t, o), h("onChange", t, `${w}-${V.value}`);
                      },
                      onBlur: e.handleBlur,
                      disabled: E,
                      className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${E ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                    }
                  ),
                  V.label
                ]
              },
              V.value
            );
          }) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[w]) })
        ] });
      }
      case "tags": {
        const O = e.values[w] ?? [], G = P.trim(), V = (ae) => {
          if (!E && ae && !O.includes(ae)) {
            let pe = [...O, ae];
            e.setFieldValue(w, pe), T(pe, t, o), y("");
          }
        }, ye = (ae) => {
          let pe = O.filter((Ze) => Ze !== ae);
          e.setFieldValue(
            w,
            pe
          ), T(pe, t, o);
        }, Ne = (ae) => mr(S, ae) ?? ae;
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `${U} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${E ? "pointer-events-none opacity-70" : ""}
            `,
              onClick: () => !E && document.getElementById(`${w}-input`)?.focus(),
              children: [
                O.map((ae) => /* @__PURE__ */ p.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                    children: [
                      /* @__PURE__ */ p.jsx("span", { className: "text-indigo-700", children: Ne(ae) }),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (pe) => {
                            pe.stopPropagation(), E || ye(ae);
                          },
                          onMouseDown: (pe) => pe.preventDefault(),
                          className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                          children: "×"
                        }
                      )
                    ]
                  },
                  ae
                )),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${w}-input`,
                    type: "text",
                    value: P,
                    onChange: (ae) => y(ae.target.value),
                    onKeyDown: (ae) => {
                      (ae.key === "Enter" || ae.key === ",") && (ae.preventDefault(), V(G));
                    },
                    placeholder: O.length === 0 ? t.placeholder || "Type and press Enter" : "",
                    className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                    disabled: E
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
            module_refid: o,
            filesToDelete: f
          }
        );
      case "attachment":
      case "file":
        const F = t.multiple === !0, oe = t.max !== void 0 ? Number(t.max) : 1 / 0, J = Array.isArray(e.values[w]) ? e.values[w] : e.values[w] ? [e.values[w]] : [];
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative mb-1", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: K(t) }),
            M && /* @__PURE__ */ p.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: "file",
                accept: t.accept,
                className: `${U} ${z} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => k(!0),
                name: w,
                multiple: F,
                onChange: (O) => {
                  const G = Qi({
                    e: O,
                    existingFiles: J,
                    maxFiles: oe,
                    maxFileSize: t.file_size,
                    accept: t?.accept
                  });
                  G && (G && m(G), h("onChange", t, w), O.currentTarget.value = "");
                },
                onBlur: e.handleBlur,
                placeholder: t.placeholder,
                disabled: E
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2", children: J.map((O) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
            d && /* @__PURE__ */ p.jsx(d, { url: O }),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => H(O),
                className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, O)) }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "json":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
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
                onChange: (O) => {
                  e.setFieldValue(w, O.target.value), T(O.target.value, t, o), h("onChange", t, `${w}`);
                },
                onBlur: e.handleBlur,
                placeholder: t.placeholder || "Enter valid JSON",
                disabled: E,
                className: `${U} ${z} min-h-[200px] font-mono text-sm resize-y`
              }
            ),
            /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`,
                style: { zIndex: -1, filter: "blur(8px)" }
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      case "date": {
        const O = Yc(t.max);
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
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
                    max: O,
                    value: e.values[w] ?? "",
                    onChange: (G) => {
                      e.setFieldValue(w, G.target.value), T(G.target.value, t, o), h("onChange", t, `${w}`);
                    },
                    onBlur: e.handleBlur,
                    placeholder: t.placeholder,
                    disabled: E,
                    className: `${U} ${z} ${t.icon ? "pl-9" : ""}`
                  }
                ),
                /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`,
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
        const O = e.values[w] || "", G = async () => {
          try {
            const { latitude: V, longitude: ye } = await vs(), Ne = `${V},${ye}`;
            e.setFieldValue(w, Ne), T(Ne, t, o);
          } catch (V) {
            console.error(V), e.setFieldError(w, "Failed to fetch location");
          } finally {
            j(!1);
          }
        };
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                value: O,
                readOnly: !0,
                className: `${U} ${z}`,
                placeholder: "Click to fetch location"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: G,
                disabled: M,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: M ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "altitude": {
        const O = e.values[w] || "", G = async () => {
          try {
            j(!0);
            const { altitude: V } = await vs();
            e.setFieldValue(w, V), T(V, t, o);
          } catch (V) {
            console.error(V), e.setFieldError(
              w,
              "Failed to fetch altitude"
            );
          } finally {
            j(!1);
          }
        };
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                value: O,
                readOnly: !0,
                className: `${U} ${z}`,
                placeholder: "Click to fetch altitude"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: G,
                disabled: M,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: M ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
              }
            )
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      }
      case "number":
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: K(t) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: "number",
                className: `${U} ${z} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => k(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (O) => {
                  e.setFieldValue(w, O.target.value), T(O.target.value, t, o), h("onChange", t, `${w}`);
                },
                step: t.step,
                placeholder: t.placeholder,
                disabled: E,
                min: t.min,
                max: t.max
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
      default:
        return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs("label", { className: D, children: [
            t.label,
            t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: K(t) }),
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: w,
                type: t.type || "text",
                className: `${U} ${z} ${t.icon ? "pl-9" : ""} `,
                onFocus: () => k(!0),
                name: w,
                value: e.values[w],
                onBlur: e.handleBlur,
                onChange: (O) => {
                  e.setFieldValue(w, O.target.value), T(O.target.value, t, o), h("onChange", t, `${w}`);
                },
                step: t.step,
                placeholder: t.placeholder,
                disabled: E,
                minLength: t.minlength,
                maxLength: t.maxlength
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${v ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          e.touched[w] && e.errors[w] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[w]) })
        ] });
    }
  };
  return Z.length === 0 ? ue() : /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-1.5", children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex-1 min-w-0", children: ue() }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex gap-1 shrink-0 pt-[22px]", children: [
      ce.map(([te, F]) => /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          onClick: () => q(te, F),
          className: F.class ? F.class : `inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold
             text-indigo-600 bg-indigo-50 hover:bg-indigo-100
             border border-indigo-200 rounded-lg shadow-sm
             hover:shadow-md transform hover:scale-105
             transition-all duration-200 cursor-pointer whitespace-nowrap`,
          children: F.icon ? /* @__PURE__ */ p.jsx("i", { className: F.icon }) : F.label
        },
        te
      )),
      be && /* @__PURE__ */ p.jsxs("div", { className: "relative", ref: ee, children: [
        /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            onClick: () => $((te) => !te),
            className: `inline-flex items-center justify-center px-2 py-2
            text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50
            border border-gray-200 rounded-lg shadow-sm
            hover:shadow-md transform hover:scale-105
            transition-all duration-200 cursor-pointer`,
            children: /* @__PURE__ */ p.jsxs("svg", { className: "w-3.5 h-3.5", fill: "currentColor", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ p.jsx("circle", { cx: "12", cy: "5", r: "1.8" }),
              /* @__PURE__ */ p.jsx("circle", { cx: "12", cy: "12", r: "1.8" }),
              /* @__PURE__ */ p.jsx("circle", { cx: "12", cy: "19", r: "1.8" })
            ] })
          }
        ),
        Ae && /* @__PURE__ */ p.jsx("div", { className: `absolute right-0 top-full mt-1.5 w-44 bg-white
              border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden
              animate-in fade-in slide-in-from-top-1 duration-150`, children: Object.entries(be).map(([te, F]) => /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              q(te, F), $(!1);
            },
            className: F.class ? `w-full flex items-center gap-2 px-3 py-2 text-sm cursor-pointer ${F.class}` : `w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700
                       hover:bg-gray-50 transition-colors duration-150 cursor-pointer`,
            children: [
              F.icon && /* @__PURE__ */ p.jsx("i", { className: `${F.icon} w-4 text-center text-gray-400` }),
              /* @__PURE__ */ p.jsx("span", { children: F.label })
            ]
          },
          te
        )) })
      ] })
    ] })
  ] });
}
function _i({ title: t, children: e, isFirst: n }) {
  const [r, s] = Ve(n);
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
function _r({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  fieldOptions: i,
  setFieldOptions: l,
  chainMap: a,
  AttachmentPopup: c,
  filesToDelete: u
}) {
  const d = ar(
    () => t?.find((h) => h.type === "avatar"),
    [t]
  ), f = d ? "lg:col-span-10" : "lg:col-span-12";
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white min-h-3/10 ", children: /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 ", children: [
    d && /* @__PURE__ */ p.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `wrapper-${d.name}`,
        className: `
                               
                          flex items-center justify-center
                         ${d.hidden ? "hidden" : ""}

                            `,
        children: /* @__PURE__ */ p.jsx(
          el,
          {
            formik: e,
            field: d,
            sqlOpsUrls: r,
            module_refid: o,
            filesToDelete: u
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: `${f} `, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((h, m) => {
      if (h.type === "avatar") return null;
      const g = Fn(h.hidden);
      return /* @__PURE__ */ p.jsx("div", { id: `wrapper-${h.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${Dn[Ln(Number(h.width))] || "lg:col-span-4"}
                                ${g ? "hidden" : ""}

                                `, children: /* @__PURE__ */ p.jsx(
        Wn,
        {
          refid: s,
          module_refid: o,
          sqlOpsUrls: r,
          field: h,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...i?.[h.name] ? { optionsOverride: i[h.name] } : {},
          chainMap: a,
          AttachmentPopup: c,
          filesToDelete: u
        },
        h?.name || m
      ) }, h.name);
    }) }) })
  ] }) });
}
function jm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (m) => Promise,
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c,
  buttons: u,
  button_labels: d,
  AttachmentPopup: f,
  filesToDelete: h
}) {
  const { common: m = [], ...g } = e, [y, b] = de.useState({}), k = (C, S) => {
    b((E) => ({
      ...E,
      [C]: S
    }));
  }, [A, R] = de.useState({}), T = (C, S) => {
    R((E) => ({
      ...E,
      [C]: S
    }));
  }, j = de.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: H, validationSchema: ne } = de.useMemo(() => {
    const C = {}, S = {}, E = l?.operation === "clone" ? "create" : l?.operation;
    return Object.values(e).flat().forEach((w) => {
      An([w], C, S, n, c, E);
    }), {
      initialValues: C,
      validationSchema: S
    };
  }, [e, n, c, l?.operation]), U = Rr({
    initialValues: H,
    enableReinitialize: !0,
    validationSchema: $e.object().shape(ne),
    onSubmit: async (C) => {
      try {
        let S = Or(C, j);
        const E = await r(S);
        console.log("res", E), U.resetForm();
      } catch (S) {
        console.log("error", S);
      }
    }
  }), z = de.useMemo(
    () => Ir(j),
    [j]
  ), D = () => {
    U.resetForm(), h && (h.current = []);
  }, P = () => {
    h && (h.current = []), s?.();
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: U.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      m.length > 0 && /* @__PURE__ */ p.jsx(_i, { title: "Common", isFirst: !0, children: /* @__PURE__ */ p.jsx(
        _r,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: m,
          formik: U,
          methods: o,
          setFieldOptions: k,
          fieldOptions: y,
          chainMap: z,
          AttachmentPopup: f,
          filesToDelete: h
        }
      ) }),
      g && Object.entries(g).map(([C, S], E) => /* @__PURE__ */ p.jsx(_i, { title: C, isFirst: E === 0 && m.length === 0, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((w, le) => {
        const X = Fn(w.hidden), fe = `
                        col-span-12 md:col-span-6
                        ${Dn[Ln(Number(w.width))] || "lg:col-span-4"}
                        ${X ? "hidden" : ""}
                      `;
        if (w.type === "static" || w.type === "static2") {
          const re = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${re ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${re ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
            className: fe,
            children: /* @__PURE__ */ p.jsx(
              Wn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: w,
                formik: U,
                methods: o,
                setFieldOptions: k,
                ...y[w.name] ? { optionsOverride: y[w.name] } : {},
                chainMap: z,
                fieldLoading: A[w.name] ?? !1,
                setFieldLoading: T,
                AttachmentPopup: f,
                filesToDelete: h
              },
              w.name
            )
          },
          w?.name ?? `field-${le}`
        );
      }) }) }, C))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: P, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: D, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: d?.reset || "Reset" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.submit || "Save" })
      ] })
    ] })
  ] }) }) });
}
function zm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (g) => {
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
  AttachmentPopup: h,
  filesToDelete: m
}) {
  const { common: g = [], ...y } = e, b = Object.keys(y), [k, A] = de.useState(0), [R, T] = de.useState({}), j = (M, K) => {
    T((Z) => ({
      ...Z,
      [M]: K
    }));
  }, { initialValues: H, validationSchema: ne, stepperSchemas: U } = de.useMemo(() => {
    const M = {}, K = {}, Z = {}, be = l?.operation === "clone" ? "create" : l?.operation;
    return a ? Object.entries(e).forEach(([ce, Ae]) => {
      const $ = {};
      An(Ae, M, $, n, u, be), Z[ce] = $;
    }) : Object.entries(e).forEach(([ce, Ae]) => {
      An(Ae, M, K, n, u, be);
    }), {
      initialValues: M,
      validationSchema: K,
      stepperSchemas: Z
    };
  }, [e, n, a, u, l?.operation]), z = de.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), D = b[k] ?? null, P = a && D ? U[D] ?? {} : ne, C = Rr({
    initialValues: H,
    enableReinitialize: !0,
    validationSchema: $e.object().shape(P),
    onSubmit: async (M) => {
      let K = Or(M, z);
      a ? (k < b.length - 1 && A((Z) => Z + 1), k === b.length - 1 && S(K)) : S(K);
    }
  }), S = async (M) => {
    try {
      const K = await r(M);
      console.log("res", K), C.resetForm();
    } catch (K) {
      console.log("error", K);
    }
  }, E = async (M) => {
    if (M.preventDefault(), !a) {
      const K = await C.validateForm();
      if (Object.keys(K).length > 0) {
        alert("Please fill all required fields before submitting."), C.setTouched(
          Object.keys(K).reduce((Z, be) => ({ ...Z, [be]: !0 }), {})
        );
        return;
      }
    }
    C.handleSubmit(M);
  }, w = () => {
    A((M) => M > 0 ? M - 1 : M);
  }, le = de.useMemo(
    () => Ir(z),
    [z]
  ), X = () => {
    C.resetForm(), m && (m.current = []);
  }, fe = () => {
    m && (m.current = []), s?.();
  }, [re, v] = de.useState({}), W = (M, K) => {
    v((Z) => ({
      ...Z,
      [M]: K
    }));
  };
  return /* @__PURE__ */ p.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: E, className: "w-full mx-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "relative", children: /* @__PURE__ */ p.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      g.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "p-3", children: /* @__PURE__ */ p.jsx(
        _r,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: g,
          formik: C,
          methods: o,
          setFieldOptions: j,
          fieldOptions: R,
          chainMap: le,
          AttachmentPopup: h,
          filesToDelete: m
        }
      ) }),
      /* @__PURE__ */ p.jsx("nav", { className: "relative flex bg-gray-100", children: b.map((M, K) => /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          onClick: () => A(K),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${k === K ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ p.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: M })
        },
        M
      )) })
    ] }) }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: D && y[D]?.map((M, K) => {
            const Z = Fn(M.hidden), be = `
                  col-span-12 md:col-span-6
                  ${Dn[Ln(Number(M.width))] || "lg:col-span-4"}
                  ${Z ? "hidden" : ""}
                `;
            if (M.type === "static" || M.type === "static2") {
              const ce = M.type === "static";
              return /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `wrapper-${M.name}`,
                  className: "col-span-12",
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: ` bg-gray-100 ${ce ? "mt-4" : "mt-3"}`,
                      children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                        "h2",
                        {
                          className: `${ce ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                          children: M.label
                        }
                      ) }) })
                    }
                  )
                },
                M?.name
              );
            }
            return /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `wrapper-${M.name}`,
                className: be,
                children: /* @__PURE__ */ p.jsx(
                  Wn,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: M,
                    formik: C,
                    methods: o,
                    components: i,
                    setFieldOptions: j,
                    ...R[M.name] ? { optionsOverride: R[M.name] } : {},
                    chainMap: le,
                    fieldLoading: re[M.name] ?? !1,
                    setFieldLoading: W,
                    AttachmentPopup: h,
                    filesToDelete: m
                  },
                  M.name
                )
              },
              M?.name ?? `field-${K}`
            );
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: `mt-8 flex ${k > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            k > 0 && /* @__PURE__ */ p.jsx("button", { onClick: w, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
            /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
              /* @__PURE__ */ p.jsx("button", { onClick: fe, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: f?.cancel || "Cancel" }),
              /* @__PURE__ */ p.jsx("button", { type: "button", onClick: X, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.reset || "Reset" }),
              /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: f?.submit ? f?.submit : a ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ p.jsxs("span", { children: [
                "Tab ",
                k + 1,
                " of ",
                b.length
              ] }),
              /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ p.jsx("div", { className: "flex gap-1", children: b.map((M, K) => /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${K === k ? "bg-action w-6" : "bg-gray-300"}`
              },
              K
            )) })
          ] }) })
        ]
      },
      b[k]
    )
  ] }) });
}
function Dm({
  title: t,
  fields: e,
  data: n,
  onSubmit: r = async (h) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: a,
  buttons: c,
  button_labels: u,
  AttachmentPopup: d,
  filesToDelete: f
}) {
  const h = i?.operation === "clone" ? "create" : i?.operation, m = de.useMemo(() => Wc(e, h), [e, h]), [g, y] = de.useState({}), b = (C, S) => {
    y((E) => ({
      ...E,
      [C]: S
    }));
  }, [k, A] = de.useState({}), R = (C, S) => {
    A((E) => ({
      ...E,
      [C]: S
    }));
  }, { commonFields: T, otherFields: j } = de.useMemo(() => m.reduce(
    (C, S) => (S.group === "common" ? C.commonFields.push(S) : C.otherFields.push(S), C),
    { commonFields: [], otherFields: [] }
  ), [m]), { initialValues: H, validationSchema: ne } = de.useMemo(() => {
    const C = {}, S = {};
    return m.forEach((E) => {
      An([E], C, S, n, a, h);
    }), {
      initialValues: C,
      validationSchema: S
    };
  }, [m, n, h]), U = de.useMemo(
    () => Ir(m),
    [m]
  ), z = Rr({
    initialValues: H,
    enableReinitialize: !0,
    validationSchema: $e.object().shape(ne),
    onSubmit: async (C) => {
      try {
        let S = Or(C, m);
        const E = await r(S);
        console.log("res", E), z.resetForm();
      } catch (S) {
        console.log("error", S);
      }
    }
  }), D = () => {
    z.resetForm(), f && (f.current = []);
  }, P = () => {
    f && (f.current = []), s?.();
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: z.handleSubmit, className: "p-4  mx-auto", children: [
    T.length > 0 && /* @__PURE__ */ p.jsx(
      _r,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: i,
        fields: T,
        formik: z,
        methods: o,
        setFieldOptions: b,
        fieldOptions: g,
        chainMap: U,
        AttachmentPopup: d,
        filesToDelete: f
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: j.map((C) => {
      const S = Fn(C.hidden), E = `col-span-12 md:col-span-6
    ${Dn[Ln(Number(C.width))] || "lg:col-span-4"}
    ${S ? "hidden" : ""}
  `;
      if (C.type === "static" || C.type === "static2") {
        const w = C.type === "static";
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${C.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: ` bg-gray-100 ${w ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                  "h2",
                  {
                    className: `${w ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
          className: E,
          children: /* @__PURE__ */ p.jsx(
            Wn,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: i,
              field: C,
              formik: z,
              methods: o,
              chainMap: U,
              setFieldOptions: b,
              ...g[C.name] ? { optionsOverride: g[C.name] } : {},
              fieldLoading: k[C.name] ?? !1,
              setFieldLoading: R,
              AttachmentPopup: d,
              filesToDelete: f
            }
          )
        },
        C?.name
      );
    }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: P, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: u?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: D, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: u?.reset || "Reset" }),
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
function Lm({
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
  refid: a,
  module_refid: c,
  buttons: u,
  button_labels: d,
  AttachmentPopup: f,
  filesToDelete: h
}) {
  const { common: m = [], ...g } = e, [y, b] = de.useState({}), k = (C, S) => {
    b((E) => ({
      ...E,
      [C]: S
    }));
  }, [A, R] = de.useState({}), T = (C, S) => {
    R((E) => ({
      ...E,
      [C]: S
    }));
  }, j = de.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: H, validationSchema: ne } = de.useMemo(() => {
    const C = {}, S = {}, E = l?.operation === "clone" ? "create" : l?.operation;
    return Object.values(e).flat().forEach((w) => {
      An([w], C, S, n, c, E);
    }), {
      initialValues: C,
      validationSchema: S
    };
  }, [e, n, c, l?.operation]), U = Rr({
    initialValues: H,
    enableReinitialize: !0,
    validationSchema: $e.object().shape(ne),
    onSubmit: async (C) => {
      try {
        let S = Or(C, j);
        const E = await r(S);
        console.log("res", E), U.resetForm();
      } catch (S) {
        console.log("error", S);
      }
    }
  }), z = de.useMemo(
    () => Ir(j),
    [j]
  ), D = () => {
    U.resetForm(), h && (h.current = []);
  }, P = () => {
    h && (h.current = []), s?.();
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: U.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      m.length > 0 && /* @__PURE__ */ p.jsx(Bi, { title: "Common", children: /* @__PURE__ */ p.jsx(
        _r,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: m,
          formik: U,
          methods: o,
          setFieldOptions: k,
          fieldOptions: y,
          chainMap: z,
          AttachmentPopup: f,
          filesToDelete: h
        }
      ) }),
      g && Object.entries(g).map(([C, S], E) => /* @__PURE__ */ p.jsx(Bi, { title: C, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: S.map((w, le) => {
        const X = Fn(w.hidden), fe = `
                                            col-span-12 md:col-span-6
                                            ${Dn[Ln(Number(w.width))] || "lg:col-span-4"}
                                            ${X ? "hidden" : ""}
                                          `;
        if (w.type === "static" || w.type === "static2") {
          const re = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${re ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${re ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
            className: fe,
            children: /* @__PURE__ */ p.jsx(
              Wn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: w,
                formik: U,
                methods: o,
                setFieldOptions: k,
                ...y[w.name] ? { optionsOverride: y[w.name] } : {},
                chainMap: z,
                fieldLoading: A[w.name] ?? !1,
                setFieldLoading: T,
                AttachmentPopup: f,
                filesToDelete: h
              },
              w.name
            )
          },
          w?.name ?? `field-${le}`
        );
      }) }) }, C))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: P, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.cancel || "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: D, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: d?.reset || "Reset" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: d?.submit || "Save" })
      ] })
    ] })
  ] }) }) });
}
function Vm({
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
  let c = Lc(t);
  const u = t.endPoints, d = t?.source?.refid, [f, h] = de.useState(o ?? {}), m = de.useRef([]), g = u?.operation, y = g === "clone" ? "create" : g, b = g !== "create", k = g === "create" || g === "clone", A = $c(t?.fields ?? {}, y), R = de.useMemo(() => Bc(t.fields), [t.fields]), T = de.useMemo(() => Hc(t.fields), [t.fields]);
  de.useEffect(() => () => {
    m.current = [];
  }, []), de.useEffect(() => {
    let z = !0;
    const D = async () => {
      try {
        let C, S, E = null;
        if (window.Capacitor?.isNativePlatform?.() && u?.native?.getGeoLocation) {
          const X = await u.native.getGeoLocation(), [fe, re] = X.split(",");
          C = fe ?? "0", S = re ?? "0";
        } else {
          const X = await vs();
          C = X.latitude, S = X.longitude, E = X.altitude;
        }
        const w = `${C},${S}`, le = {};
        R.forEach((X) => {
          le[X] = w;
        }), T.forEach((X) => {
          le[X] = E ?? "";
        }), z && h((X) => ({
          ...X,
          ...le
        }));
      } catch (C) {
        console.warn("Geo fetch failed", C);
      }
    }, P = setTimeout(() => {
      (R.length > 0 || T.length > 0) && D();
    }, 0);
    return () => {
      z = !1, clearTimeout(P);
    };
  }, [R, T]), de.useEffect(() => {
    h((z) => ({
      ...z,
      ...o ?? {}
    }));
  }, [o]);
  const j = de.useCallback(
    (z) => {
      z && h((D) => {
        const P = { ...D };
        for (const C in z)
          z[C] !== null && z[C] !== void 0 && (P[C] = z[C]);
        return P;
      });
    },
    []
  );
  de.useEffect(() => {
    let z = !0;
    return (async () => {
      const P = t?.source ?? {};
      if (!P?.type) {
        z && h((C) => C);
        return;
      }
      if (P.type === "method" && b) {
        const C = P.method, S = C ? e[C] : void 0;
        if (S)
          try {
            const E = await S();
            z && j(E);
          } catch (E) {
            console.error("Method execution failed:", E), z && h((w) => w);
          }
        else
          z && h((E) => E);
      }
      if (P.type === "api" && b)
        try {
          const C = {
            method: P.method || "GET",
            url: u?.baseURL + P.endpoint,
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            },
            ...P.method === "GET" ? { params: { refid: P.refid } } : { data: { refid: P.refid } }
          }, { data: S } = await Ce(C), E = S?.results?.options ? S?.results?.options : S.data ? S.data : S.results ? S.results : S;
          z && j(E ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), z && h((S) => S);
        }
      if (P.type === "sql" && P.refid && P.refid !== "0" && b || b && P.dbopsid) {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await tu.fetch(u, {
            source: {
              ...P,
              table: P.table,
              columns: P.columns,
              where: gt(P.where, {
                refid: d
              })
            },
            fields: $o(t.fields, y)
          }, P?.dbopsid, t?.module_refid);
          z && j(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      z = !1;
    };
  }, [
    u,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.endpoint || ""
  ]);
  const H = async () => {
    m.current.length && (await Promise.all(
      m.current.map(
        (z) => ru(u, z)
      )
    ), m.current = []);
  }, ne = async (z) => {
    const D = t?.source ?? {};
    let P = "0,0", C = { ...z };
    if (R.length > 0 || T.length > 0) {
      const S = R[0];
      P = (S ? z[S] : null) || "0,0";
      const w = R.filter(
        (re) => !z[re]
      ), le = T.filter(
        (re) => z[re] === void 0 || z[re] === null || z[re] === ""
      ), X = T[0], fe = X ? z[X] : null;
      (w.length > 0 || le.length > 0) && (C = {
        ...z,
        ...Object.fromEntries(
          w.map((re) => [re, P])
        ),
        ...Object.fromEntries(
          le.map((re) => [
            re,
            fe
          ])
        )
      });
    }
    if (D.type === "method") {
      const S = D.method, E = S ? e[S] : void 0;
      if (E)
        try {
          let w = C ? { ...C, geolocation: P } : {};
          const le = await E(w);
          await H(), s?.(le);
          const X = es(le, t?.submit_msg);
          if (X && i?.success?.(X), e?.handleActions) {
            let fe = k ? le?.data?.refid : d;
            const re = t?.gotolink?.replace(
              "{hashid}",
              String(fe)
            );
            e.handleActions(re);
          }
        } catch (w) {
          throw i?.error?.(Xt(w)), new Error(Xt(w));
        }
    }
    if (D.type === "api") {
      if (!u)
        throw console.error("SQL source requires formJson.endPoints but it is missing"), new Error("Something went wrong");
      try {
        const S = await Ce({
          method: D.method || "POST",
          url: u.baseURL + D.endpoint,
          data: C ? { ...C, geolocation: P } : {},
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        s?.(S), await H();
        const E = es(S, t?.submit_msg);
        if (E && i?.success?.(E), e?.handleActions) {
          let w = k ? S?.data?.refid : d;
          const le = t?.gotolink?.replace(
            "{hashid}",
            String(w)
          );
          e.handleActions(le);
        }
      } catch (S) {
        throw i?.error?.(Xt(S)), new Error(Xt(S));
      }
    }
    if (D.type === "sql") {
      const S = t.endPoints;
      if (!S)
        throw console.error("SQL source requires formJson.endPoints but it is missing"), new Error("SQL source requires formJson.endPoints but it is missing");
      try {
        let E = !1, w;
        D?.dbopsid && (E = !0, w = D?.dbopsid);
        const le = await Ce({
          method: "GET",
          url: S.baseURL + S.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${S?.accessToken}`
          }
        });
        if (!E) {
          let re = {
            ...D
          };
          D.where && (re = {
            ...D,
            where: gt(D.where, {
              refid: d
            })
          }), w = (await Ce({
            method: "POST",
            url: S.baseURL + S.dbopsGetRefId,
            data: {
              operation: y,
              source: re,
              fields: $o(t.fields, y),
              forcefill: t.forcefill,
              datahash: le.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${S?.accessToken}`
            }
          }))?.data.refid;
        }
        const X = await Ce({
          method: "POST",
          url: S.baseURL + S[k ? "dbopsCreate" : "dbopsUpdate"],
          data: {
            refid: w,
            fields: C,
            datahash: le.data.refhash,
            geolocation: P
          },
          headers: {
            Authorization: `Bearer ${S?.accessToken}`
          }
        });
        await H();
        const fe = es(X, t?.submit_msg);
        if (fe && i?.success?.(fe), s?.(X), e?.handleActions) {
          let re = k ? X?.data?.refid : d;
          const v = t?.gotolink?.replace(
            "{hashid}",
            String(re)
          );
          e.handleActions(v);
        }
      } catch (E) {
        throw i?.error?.(Xt(E)), new Error(Xt(E));
      }
    }
  }, U = {
    accordion: /* @__PURE__ */ p.jsx(
      jm,
      {
        title: t?.title ?? "",
        groupedFields: A,
        data: f,
        onSubmit: ne,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a,
        filesToDelete: m
      }
    ),
    cards: /* @__PURE__ */ p.jsx(
      Lm,
      {
        title: t?.title ?? "",
        groupedFields: A,
        data: f,
        onSubmit: ne,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a,
        filesToDelete: m
      }
    ),
    tab: /* @__PURE__ */ p.jsx(
      zm,
      {
        title: t?.title ?? "",
        groupedFields: A,
        data: f,
        onSubmit: ne,
        onCancel: n,
        methods: e,
        components: r,
        widget: t?.widget,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a,
        filesToDelete: m
      }
    ),
    simple: /* @__PURE__ */ p.jsx(
      Dm,
      {
        title: t?.title ?? "",
        fields: t.fields,
        data: f,
        onSubmit: ne,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: u,
        refid: d,
        module_refid: t?.module_refid,
        buttons: t?.buttons,
        button_labels: t.button_labels,
        AttachmentPopup: a,
        filesToDelete: m
      }
    )
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative", children: U[c] });
}
export {
  Vm as LogiksForm
};
