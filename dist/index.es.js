import se, { useState as He, useRef as tr, useEffect as De, useMemo as nr, useLayoutEffect as ki } from "react";
import fe from "axios";
import * as Te from "yup";
import { useFormik as kr } from "formik";
import { createPortal as tc } from "react-dom";
import { useEditor as nc, EditorContent as rc } from "@tiptap/react";
import sc from "@tiptap/starter-kit";
var Hn = { exports: {} }, on = {};
var Ai;
function ic() {
  if (Ai) return on;
  Ai = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return on.Fragment = e, on.jsx = n, on.jsxs = n, on;
}
var ln = {};
var Ei;
function oc() {
  return Ei || (Ei = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === W ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case v:
          return "Suspense";
        case T:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case m:
            return "Portal";
          case k:
            return (N.displayName || "Context") + ".Provider";
          case C:
            return (N._context.displayName || "Context") + ".Consumer";
          case w:
            var z = N.render;
            return N = N.displayName, N || (N = z.displayName || z.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case O:
            return z = N.displayName || null, z !== null ? z : t(N.type) || "Memo";
          case U:
            z = N._payload, N = N._init;
            try {
              return t(N(z));
            } catch {
            }
        }
      return null;
    }
    function e(N) {
      return "" + N;
    }
    function n(N) {
      try {
        e(N);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var Z = z.error, Y = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Z.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), e(N);
      }
    }
    function r(N) {
      if (N === g) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === U)
        return "<...>";
      try {
        var z = t(N);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var N = S.A;
      return N === null ? null : N.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(N) {
      if (ce.call(N, "key")) {
        var z = Object.getOwnPropertyDescriptor(N, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function l(N, z) {
      function Z() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: Z,
        configurable: !0
      });
    }
    function a() {
      var N = t(this.type);
      return oe[N] || (oe[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function c(N, z, Z, Y, A, M, R, G) {
      return Z = M.ref, N = {
        $$typeof: h,
        type: N,
        key: z,
        props: M,
        _owner: A
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function u(N, z, Z, Y, A, M, R, G) {
      var B = z.children;
      if (B !== void 0)
        if (Y)
          if (F(B)) {
            for (Y = 0; Y < B.length; Y++)
              d(B[Y]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(B);
      if (ce.call(z, "key")) {
        B = t(N);
        var D = Object.keys(z).filter(function(V) {
          return V !== "key";
        });
        Y = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", Xe[B + Y] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          B,
          D,
          B
        ), Xe[B + Y] = !0);
      }
      if (B = null, Z !== void 0 && (n(Z), B = "" + Z), o(z) && (n(z.key), B = "" + z.key), "key" in z) {
        Z = {};
        for (var L in z)
          L !== "key" && (Z[L] = z[L]);
      } else Z = z;
      return B && l(
        Z,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), c(
        N,
        B,
        M,
        A,
        s(),
        Z,
        R,
        G
      );
    }
    function d(N) {
      typeof N == "object" && N !== null && N.$$typeof === h && N._store && (N._store.validated = 1);
    }
    var f = se, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.activity"), W = /* @__PURE__ */ Symbol.for("react.client.reference"), S = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, F = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(N) {
        return N();
      }
    };
    var Q, oe = {}, le = f["react-stack-bottom-frame"].bind(
      f,
      i
    )(), je = q(r(i)), Xe = {};
    ln.Fragment = g, ln.jsx = function(N, z, Z, Y, A) {
      var M = 1e4 > S.recentlyCreatedOwnerStacks++;
      return u(
        N,
        z,
        Z,
        !1,
        Y,
        A,
        M ? Error("react-stack-top-frame") : le,
        M ? q(r(N)) : je
      );
    }, ln.jsxs = function(N, z, Z, Y, A) {
      var M = 1e4 > S.recentlyCreatedOwnerStacks++;
      return u(
        N,
        z,
        Z,
        !0,
        Y,
        A,
        M ? Error("react-stack-top-frame") : le,
        M ? q(r(N)) : je
      );
    };
  })()), ln;
}
var Ni;
function lc() {
  return Ni || (Ni = 1, process.env.NODE_ENV === "production" ? Hn.exports = ic() : Hn.exports = oc()), Hn.exports;
}
var p = lc();
const {
  entries: Ho,
  setPrototypeOf: Ti,
  isFrozen: ac,
  getPrototypeOf: cc,
  getOwnPropertyDescriptor: uc
} = Object;
let {
  freeze: Re,
  seal: Ve,
  create: ys
} = Object, {
  apply: bs,
  construct: xs
} = typeof Reflect < "u" && Reflect;
Re || (Re = function(e) {
  return e;
});
Ve || (Ve = function(e) {
  return e;
});
bs || (bs = function(e, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return e.apply(n, s);
});
xs || (xs = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const Wn = Ie(Array.prototype.forEach), dc = Ie(Array.prototype.lastIndexOf), Mi = Ie(Array.prototype.pop), an = Ie(Array.prototype.push), fc = Ie(Array.prototype.splice), rr = Ie(String.prototype.toLowerCase), Vr = Ie(String.prototype.toString), Ur = Ie(String.prototype.match), cn = Ie(String.prototype.replace), hc = Ie(String.prototype.indexOf), pc = Ie(String.prototype.trim), Ue = Ie(Object.prototype.hasOwnProperty), Ne = Ie(RegExp.prototype.test), un = mc(TypeError);
function Ie(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return bs(t, e, r);
  };
}
function mc(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return xs(t, n);
  };
}
function X(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rr;
  Ti && Ti(t, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (ac(e) || (e[r] = i), s = i);
    }
    t[s] = !0;
  }
  return t;
}
function gc(t) {
  for (let e = 0; e < t.length; e++)
    Ue(t, e) || (t[e] = null);
  return t;
}
function et(t) {
  const e = ys(null);
  for (const [n, r] of Ho(t))
    Ue(t, n) && (Array.isArray(r) ? e[n] = gc(r) : r && typeof r == "object" && r.constructor === Object ? e[n] = et(r) : e[n] = r);
  return e;
}
function dn(t, e) {
  for (; t !== null; ) {
    const r = uc(t, e);
    if (r) {
      if (r.get)
        return Ie(r.get);
      if (typeof r.value == "function")
        return Ie(r.value);
    }
    t = cc(t);
  }
  function n() {
    return null;
  }
  return n;
}
const Ri = Re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Kr = Re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qr = Re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yc = Re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Jr = Re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bc = Re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ii = Re(["#text"]), Oi = Re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Gr = Re(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ji = Re(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Vn = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xc = Ve(/\{\{[\w\W]*|[\w\W]*\}\}/gm), wc = Ve(/<%[\w\W]*|[\w\W]*%>/gm), vc = Ve(/\$\{[\w\W]*/gm), Sc = Ve(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cc = Ve(/^aria-[\-\w]+$/), Wo = Ve(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kc = Ve(/^(?:\w+script|data):/i), Ac = Ve(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vo = Ve(/^html$/i), Ec = Ve(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Di = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Cc,
  ATTR_WHITESPACE: Ac,
  CUSTOM_ELEMENT: Ec,
  DATA_ATTR: Sc,
  DOCTYPE_NAME: Vo,
  ERB_EXPR: wc,
  IS_ALLOWED_URI: Wo,
  IS_SCRIPT_OR_DATA: kc,
  MUSTACHE_EXPR: xc,
  TMPLIT_EXPR: vc
});
const fn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Nc = function() {
  return typeof window > "u" ? null : window;
}, Tc = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, zi = function() {
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
function Uo() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc();
  const e = (_) => Uo(_);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== fn.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: n
  } = t;
  const r = n, s = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: o,
    Node: l,
    Element: a,
    NodeFilter: c,
    NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: f,
    trustedTypes: h
  } = t, m = a.prototype, g = dn(m, "cloneNode"), y = dn(m, "remove"), b = dn(m, "nextSibling"), C = dn(m, "childNodes"), k = dn(m, "parentNode");
  if (typeof o == "function") {
    const _ = n.createElement("template");
    _.content && _.content.ownerDocument && (n = _.content.ownerDocument);
  }
  let w, v = "";
  const {
    implementation: T,
    createNodeIterator: O,
    createDocumentFragment: U,
    getElementsByTagName: $
  } = n, {
    importNode: W
  } = r;
  let S = zi();
  e.isSupported = typeof Ho == "function" && typeof k == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ce,
    ERB_EXPR: F,
    TMPLIT_EXPR: q,
    DATA_ATTR: Q,
    ARIA_ATTR: oe,
    IS_SCRIPT_OR_DATA: le,
    ATTR_WHITESPACE: je,
    CUSTOM_ELEMENT: Xe
  } = Di;
  let {
    IS_ALLOWED_URI: N
  } = Di, z = null;
  const Z = X({}, [...Ri, ...Kr, ...qr, ...Jr, ...Ii]);
  let Y = null;
  const A = X({}, [...Oi, ...Gr, ...ji, ...Vn]);
  let M = Object.seal(ys(null, {
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
  })), R = null, G = null;
  const B = Object.seal(ys(null, {
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
  let D = !0, L = !0, V = !1, ee = !0, te = !1, Ae = !0, Ee = !1, ft = !1, Fe = !1, _e = !1, ht = !1, Ft = !1, nn = !0, Pn = !1;
  const qa = "user-content-";
  let Lr = !0, rn = !1, _t = {}, Qe = null;
  const Pr = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ci = null;
  const ui = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let $r = null;
  const di = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $n = "http://www.w3.org/1998/Math/MathML", Fn = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let Bt = it, Fr = !1, _r = null;
  const Ja = X({}, [$n, Fn, it], Vr);
  let _n = X({}, ["mi", "mo", "mn", "ms", "mtext"]), Bn = X({}, ["annotation-xml"]);
  const Ga = X({}, ["title", "style", "font", "a", "script"]);
  let sn = null;
  const Ya = ["application/xhtml+xml", "text/html"], Xa = "text/html";
  let pe = null, Ht = null;
  const Qa = n.createElement("form"), fi = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Br = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ht && Ht === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = et(x), sn = // eslint-disable-next-line unicorn/prefer-includes
      Ya.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? Xa : x.PARSER_MEDIA_TYPE, pe = sn === "application/xhtml+xml" ? Vr : rr, z = Ue(x, "ALLOWED_TAGS") ? X({}, x.ALLOWED_TAGS, pe) : Z, Y = Ue(x, "ALLOWED_ATTR") ? X({}, x.ALLOWED_ATTR, pe) : A, _r = Ue(x, "ALLOWED_NAMESPACES") ? X({}, x.ALLOWED_NAMESPACES, Vr) : Ja, $r = Ue(x, "ADD_URI_SAFE_ATTR") ? X(et(di), x.ADD_URI_SAFE_ATTR, pe) : di, ci = Ue(x, "ADD_DATA_URI_TAGS") ? X(et(ui), x.ADD_DATA_URI_TAGS, pe) : ui, Qe = Ue(x, "FORBID_CONTENTS") ? X({}, x.FORBID_CONTENTS, pe) : Pr, R = Ue(x, "FORBID_TAGS") ? X({}, x.FORBID_TAGS, pe) : et({}), G = Ue(x, "FORBID_ATTR") ? X({}, x.FORBID_ATTR, pe) : et({}), _t = Ue(x, "USE_PROFILES") ? x.USE_PROFILES : !1, D = x.ALLOW_ARIA_ATTR !== !1, L = x.ALLOW_DATA_ATTR !== !1, V = x.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = x.SAFE_FOR_TEMPLATES || !1, Ae = x.SAFE_FOR_XML !== !1, Ee = x.WHOLE_DOCUMENT || !1, _e = x.RETURN_DOM || !1, ht = x.RETURN_DOM_FRAGMENT || !1, Ft = x.RETURN_TRUSTED_TYPE || !1, Fe = x.FORCE_BODY || !1, nn = x.SANITIZE_DOM !== !1, Pn = x.SANITIZE_NAMED_PROPS || !1, Lr = x.KEEP_CONTENT !== !1, rn = x.IN_PLACE || !1, N = x.ALLOWED_URI_REGEXP || Wo, Bt = x.NAMESPACE || it, _n = x.MATHML_TEXT_INTEGRATION_POINTS || _n, Bn = x.HTML_INTEGRATION_POINTS || Bn, M = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && fi(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && fi(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (L = !1), ht && (_e = !0), _t && (z = X({}, Ii), Y = [], _t.html === !0 && (X(z, Ri), X(Y, Oi)), _t.svg === !0 && (X(z, Kr), X(Y, Gr), X(Y, Vn)), _t.svgFilters === !0 && (X(z, qr), X(Y, Gr), X(Y, Vn)), _t.mathMl === !0 && (X(z, Jr), X(Y, ji), X(Y, Vn))), x.ADD_TAGS && (typeof x.ADD_TAGS == "function" ? B.tagCheck = x.ADD_TAGS : (z === Z && (z = et(z)), X(z, x.ADD_TAGS, pe))), x.ADD_ATTR && (typeof x.ADD_ATTR == "function" ? B.attributeCheck = x.ADD_ATTR : (Y === A && (Y = et(Y)), X(Y, x.ADD_ATTR, pe))), x.ADD_URI_SAFE_ATTR && X($r, x.ADD_URI_SAFE_ATTR, pe), x.FORBID_CONTENTS && (Qe === Pr && (Qe = et(Qe)), X(Qe, x.FORBID_CONTENTS, pe)), x.ADD_FORBID_CONTENTS && (Qe === Pr && (Qe = et(Qe)), X(Qe, x.ADD_FORBID_CONTENTS, pe)), Lr && (z["#text"] = !0), Ee && X(z, ["html", "head", "body"]), z.table && (X(z, ["tbody"]), delete R.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = x.TRUSTED_TYPES_POLICY, v = w.createHTML("");
      } else
        w === void 0 && (w = Tc(h, s)), w !== null && typeof v == "string" && (v = w.createHTML(""));
      Re && Re(x), Ht = x;
    }
  }, hi = X({}, [...Kr, ...qr, ...yc]), pi = X({}, [...Jr, ...bc]), Za = function(x) {
    let I = k(x);
    (!I || !I.tagName) && (I = {
      namespaceURI: Bt,
      tagName: "template"
    });
    const P = rr(x.tagName), re = rr(I.tagName);
    return _r[x.namespaceURI] ? x.namespaceURI === Fn ? I.namespaceURI === it ? P === "svg" : I.namespaceURI === $n ? P === "svg" && (re === "annotation-xml" || _n[re]) : !!hi[P] : x.namespaceURI === $n ? I.namespaceURI === it ? P === "math" : I.namespaceURI === Fn ? P === "math" && Bn[re] : !!pi[P] : x.namespaceURI === it ? I.namespaceURI === Fn && !Bn[re] || I.namespaceURI === $n && !_n[re] ? !1 : !pi[P] && (Ga[P] || !hi[P]) : !!(sn === "application/xhtml+xml" && _r[x.namespaceURI]) : !1;
  }, Ze = function(x) {
    an(e.removed, {
      element: x
    });
    try {
      k(x).removeChild(x);
    } catch {
      y(x);
    }
  }, Ct = function(x, I) {
    try {
      an(e.removed, {
        attribute: I.getAttributeNode(x),
        from: I
      });
    } catch {
      an(e.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(x), x === "is")
      if (_e || ht)
        try {
          Ze(I);
        } catch {
        }
      else
        try {
          I.setAttribute(x, "");
        } catch {
        }
  }, mi = function(x) {
    let I = null, P = null;
    if (Fe)
      x = "<remove></remove>" + x;
    else {
      const ue = Ur(x, /^[\r\n\t ]+/);
      P = ue && ue[0];
    }
    sn === "application/xhtml+xml" && Bt === it && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const re = w ? w.createHTML(x) : x;
    if (Bt === it)
      try {
        I = new f().parseFromString(re, sn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = T.createDocument(Bt, "template", null);
      try {
        I.documentElement.innerHTML = Fr ? v : re;
      } catch {
      }
    }
    const ve = I.body || I.documentElement;
    return x && P && ve.insertBefore(n.createTextNode(P), ve.childNodes[0] || null), Bt === it ? $.call(I, Ee ? "html" : "body")[0] : Ee ? I.documentElement : ve;
  }, gi = function(x) {
    return O.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Hr = function(x) {
    return x instanceof d && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof u) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, yi = function(x) {
    return typeof l == "function" && x instanceof l;
  };
  function ot(_, x, I) {
    Wn(_, (P) => {
      P.call(e, x, I, Ht);
    });
  }
  const bi = function(x) {
    let I = null;
    if (ot(S.beforeSanitizeElements, x, null), Hr(x))
      return Ze(x), !0;
    const P = pe(x.nodeName);
    if (ot(S.uponSanitizeElement, x, {
      tagName: P,
      allowedTags: z
    }), Ae && x.hasChildNodes() && !yi(x.firstElementChild) && Ne(/<[/\w!]/g, x.innerHTML) && Ne(/<[/\w!]/g, x.textContent) || x.nodeType === fn.progressingInstruction || Ae && x.nodeType === fn.comment && Ne(/<[/\w]/g, x.data))
      return Ze(x), !0;
    if (!(B.tagCheck instanceof Function && B.tagCheck(P)) && (!z[P] || R[P])) {
      if (!R[P] && wi(P) && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, P) || M.tagNameCheck instanceof Function && M.tagNameCheck(P)))
        return !1;
      if (Lr && !Qe[P]) {
        const re = k(x) || x.parentNode, ve = C(x) || x.childNodes;
        if (ve && re) {
          const ue = ve.length;
          for (let Oe = ue - 1; Oe >= 0; --Oe) {
            const lt = g(ve[Oe], !0);
            lt.__removalCount = (x.__removalCount || 0) + 1, re.insertBefore(lt, b(x));
          }
        }
      }
      return Ze(x), !0;
    }
    return x instanceof a && !Za(x) || (P === "noscript" || P === "noembed" || P === "noframes") && Ne(/<\/no(script|embed|frames)/i, x.innerHTML) ? (Ze(x), !0) : (te && x.nodeType === fn.text && (I = x.textContent, Wn([ce, F, q], (re) => {
      I = cn(I, re, " ");
    }), x.textContent !== I && (an(e.removed, {
      element: x.cloneNode()
    }), x.textContent = I)), ot(S.afterSanitizeElements, x, null), !1);
  }, xi = function(x, I, P) {
    if (nn && (I === "id" || I === "name") && (P in n || P in Qa))
      return !1;
    if (!(L && !G[I] && Ne(Q, I))) {
      if (!(D && Ne(oe, I))) {
        if (!(B.attributeCheck instanceof Function && B.attributeCheck(I, x))) {
          if (!Y[I] || G[I]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(wi(x) && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, x) || M.tagNameCheck instanceof Function && M.tagNameCheck(x)) && (M.attributeNameCheck instanceof RegExp && Ne(M.attributeNameCheck, I) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(I, x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              I === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, P) || M.tagNameCheck instanceof Function && M.tagNameCheck(P)))
            ) return !1;
          } else if (!$r[I]) {
            if (!Ne(N, cn(P, je, ""))) {
              if (!((I === "src" || I === "xlink:href" || I === "href") && x !== "script" && hc(P, "data:") === 0 && ci[x])) {
                if (!(V && !Ne(le, cn(P, je, "")))) {
                  if (P)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, wi = function(x) {
    return x !== "annotation-xml" && Ur(x, Xe);
  }, vi = function(x) {
    ot(S.beforeSanitizeAttributes, x, null);
    const {
      attributes: I
    } = x;
    if (!I || Hr(x))
      return;
    const P = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let re = I.length;
    for (; re--; ) {
      const ve = I[re], {
        name: ue,
        namespaceURI: Oe,
        value: lt
      } = ve, Wt = pe(ue), Wr = lt;
      let be = ue === "value" ? Wr : pc(Wr);
      if (P.attrName = Wt, P.attrValue = be, P.keepAttr = !0, P.forceKeepAttr = void 0, ot(S.uponSanitizeAttribute, x, P), be = P.attrValue, Pn && (Wt === "id" || Wt === "name") && (Ct(ue, x), be = qa + be), Ae && Ne(/((--!?|])>)|<\/(style|title|textarea)/i, be)) {
        Ct(ue, x);
        continue;
      }
      if (Wt === "attributename" && Ur(be, "href")) {
        Ct(ue, x);
        continue;
      }
      if (P.forceKeepAttr)
        continue;
      if (!P.keepAttr) {
        Ct(ue, x);
        continue;
      }
      if (!ee && Ne(/\/>/i, be)) {
        Ct(ue, x);
        continue;
      }
      te && Wn([ce, F, q], (Ci) => {
        be = cn(be, Ci, " ");
      });
      const Si = pe(x.nodeName);
      if (!xi(Si, Wt, be)) {
        Ct(ue, x);
        continue;
      }
      if (w && typeof h == "object" && typeof h.getAttributeType == "function" && !Oe)
        switch (h.getAttributeType(Si, Wt)) {
          case "TrustedHTML": {
            be = w.createHTML(be);
            break;
          }
          case "TrustedScriptURL": {
            be = w.createScriptURL(be);
            break;
          }
        }
      if (be !== Wr)
        try {
          Oe ? x.setAttributeNS(Oe, ue, be) : x.setAttribute(ue, be), Hr(x) ? Ze(x) : Mi(e.removed);
        } catch {
          Ct(ue, x);
        }
    }
    ot(S.afterSanitizeAttributes, x, null);
  }, ec = function _(x) {
    let I = null;
    const P = gi(x);
    for (ot(S.beforeSanitizeShadowDOM, x, null); I = P.nextNode(); )
      ot(S.uponSanitizeShadowNode, I, null), bi(I), vi(I), I.content instanceof i && _(I.content);
    ot(S.afterSanitizeShadowDOM, x, null);
  };
  return e.sanitize = function(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, P = null, re = null, ve = null;
    if (Fr = !_, Fr && (_ = "<!-->"), typeof _ != "string" && !yi(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw un("dirty is not a string, aborting");
      } else
        throw un("toString is not a function");
    if (!e.isSupported)
      return _;
    if (ft || Br(x), e.removed = [], typeof _ == "string" && (rn = !1), rn) {
      if (_.nodeName) {
        const lt = pe(_.nodeName);
        if (!z[lt] || R[lt])
          throw un("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof l)
      I = mi("<!---->"), P = I.ownerDocument.importNode(_, !0), P.nodeType === fn.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? I = P : I.appendChild(P);
    else {
      if (!_e && !te && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return w && Ft ? w.createHTML(_) : _;
      if (I = mi(_), !I)
        return _e ? null : Ft ? v : "";
    }
    I && Fe && Ze(I.firstChild);
    const ue = gi(rn ? _ : I);
    for (; re = ue.nextNode(); )
      bi(re), vi(re), re.content instanceof i && ec(re.content);
    if (rn)
      return _;
    if (_e) {
      if (ht)
        for (ve = U.call(I.ownerDocument); I.firstChild; )
          ve.appendChild(I.firstChild);
      else
        ve = I;
      return (Y.shadowroot || Y.shadowrootmode) && (ve = W.call(r, ve, !0)), ve;
    }
    let Oe = Ee ? I.outerHTML : I.innerHTML;
    return Ee && z["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Ne(Vo, I.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Oe), te && Wn([ce, F, q], (lt) => {
      Oe = cn(Oe, lt, " ");
    }), w && Ft ? w.createHTML(Oe) : Oe;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(_), ft = !0;
  }, e.clearConfig = function() {
    Ht = null, ft = !1;
  }, e.isValidAttribute = function(_, x, I) {
    Ht || Br({});
    const P = pe(_), re = pe(x);
    return xi(P, re, I);
  }, e.addHook = function(_, x) {
    typeof x == "function" && an(S[_], x);
  }, e.removeHook = function(_, x) {
    if (x !== void 0) {
      const I = dc(S[_], x);
      return I === -1 ? void 0 : fc(S[_], I, 1)[0];
    }
    return Mi(S[_]);
  }, e.removeHooks = function(_) {
    S[_] = [];
  }, e.removeAllHooks = function() {
    S = zi();
  }, e;
}
Uo();
const Mc = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Rc = ["mp4", "webm", "ogg"], Ic = ["txt", "json", "csv"], Oc = ["pdf"], Li = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function jc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
function Dc(t, e = "create", n = "Info") {
  const r = {};
  let s = !1;
  if (Object.values(t).forEach((o) => {
    o.group && (s = !0);
  }), !s) return {};
  const i = [];
  return Object.entries(t).forEach(([o, l]) => {
    if (l.vmode === "edit" && e === "create") return;
    const a = { ...l, name: o };
    if (l.group) {
      const c = l.group;
      r[c] || (r[c] = []), r[c].push(a);
    } else
      i.push(a);
  }), i.length > 0 ? {
    [n]: i,
    ...r
  } : r;
}
function Pi(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const $i = (t) => t == null || t === "", vn = (t, e, n, r, s, i) => {
  const o = i === "create" && s ? Jo(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = i === "create" && s ? qo(l) : null;
    i === "create" && u && o[u] !== void 0 && $i(c) && (c = o[u]), $i(c) && l.default && (c = l.default), Li.includes(l.type ?? "") ? e[a] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    if (Li.includes(l.type ?? "")) {
      const f = Te.array().of(
        Te.string()
      );
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else if (l.multiple === !0 || l.type === "tags") {
      const f = Te.array().of(Te.string());
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else l.type === "email" ? d = Te.string().email("Invalid email") : l.type === "number" ? d = Te.number().typeError("Must be a number") : l.type === "json" ? d = Te.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = Te.string().nullable() : d = Te.string();
    l?.validate && Object.entries(l.validate).forEach(([f, h]) => {
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
            (m) => {
              if (m == null || m === "") return !0;
              const g = m.replace(/-/g, "/"), [y, b, C] = g.split("/");
              if (!y || !b || !C) return !1;
              const k = /* @__PURE__ */ new Date(`${C}-${b}-${y}`);
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
          d = Te.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = Te.number().typeError("Must be a decimal").transform((m, g) => {
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
}, Rn = {
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
function In(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const On = (t) => t === !0 || t === "true", ct = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => ct(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    ct(n, e),
    ct(r, e)
  ])
) : t, Yr = (t) => t ? Array.isArray(t) ? t.map((e) => ({
  value: String(e.value),
  label: String(e.label ?? e.title ?? e.value),
  group: e.group ?? e.category ?? // 👈 support category if present
  void 0
})) : typeof t == "object" ? Object.entries(t).map(([e, n]) => ({
  value: String(e),
  label: String(n)
})) : [] : [], hn = (t, e, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return [];
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  return n.map((i) => {
    const o = i[t], l = i[e];
    return o == null || l == null ? null : {
      value: String(o),
      label: String(l),
      group: s && i[s] ? String(i[s]) : void 0
    };
  }).filter(Boolean);
}, cr = (t, e) => {
  if (!(!t || e == null))
    return t.find((n) => String(n.value) === String(e))?.label;
}, zc = (t) => t.reduce((e, n) => {
  const r = n.group || "__ungrouped__";
  return e[r] || (e[r] = []), e[r].push(n), e;
}, {}), Lc = (t) => t.map((e) => [e.value, e.label]);
async function ws() {
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
const Pc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function $c(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function kt(t, e, n) {
  const r = qo(e);
  r && n && Hc(n, r, t);
}
function Fc(t) {
  if (!t || typeof t != "object") return !1;
  const e = t.src;
  return typeof t.target == "string" && typeof e == "object" && e !== null && (e.type === "api" || typeof e.queryid == "string" || typeof e.table == "string" && typeof e.columns < "u");
}
function _c(t) {
  return t.split(",").map((e) => e.trim()).map((e) => {
    const n = e.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : e;
  }).filter((e) => !!e);
}
const Vt = (t) => {
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
}, Bc = "__form_persist__", Ko = (t) => `${Bc}:${t}`;
function qo(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Jo(t) {
  try {
    return JSON.parse(localStorage.getItem(Ko(t)) || "{}");
  } catch {
    return {};
  }
}
function Hc(t, e, n) {
  const r = Jo(t);
  localStorage.setItem(
    Ko(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function Wc(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function Vc(t) {
  return Mc.includes(t) ? "image" : Rc.includes(t) ? "video" : Oc.includes(t) ? "pdf" : Ic.includes(t) ? "text" : "other";
}
const Fi = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};
function Ar(t, e) {
  const n = new Set(
    e.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => !n.has(r))
  );
}
function Xr(t) {
  return fe.isAxiosError(t) ? t.response?.data?.message || t.message || "Something went wrong" : t instanceof Error ? t.message : typeof t == "string" ? t : "Something went wrong";
}
function Qr(t) {
  return t?.data?.message ? t.data.message : t?.message ? t.message : "Operation completed successfully";
}
const Uc = (t) => t.type === "camera2" ? {
  accept: "image/*",
  capture: "environment"
} : {
  accept: "image/*"
}, Kc = (t) => {
  switch (t.type) {
    case "camera2":
      return "fa-camera";
    // strict camera
    case "camera":
      return "fa-camera-retro";
    default:
      return "fa-image";
  }
}, Go = ({
  uploads: t,
  currentValue: e,
  multiple: n
}) => {
  const r = Array.isArray(e) ? e : e ? [e] : [], s = t.map((i) => `${i.fileId}&${i.path}`);
  return [...r, ...s];
}, qc = (t) => t === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : t, Jc = (t) => t >= 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(2)} MB` : `${(t / 1024).toFixed(0)} KB`, Yo = ({
  e: t,
  existingFiles: e,
  maxFiles: n,
  maxFileSize: r
}) => {
  const s = t.currentTarget.files;
  if (!s) return null;
  const i = Array.from(s);
  if (e.length + i.length > n)
    return alert(`You can upload maximum ${n} file(s)`), t.currentTarget.value = "", null;
  if (r) {
    const l = Number(r), a = i.find((c) => c.size > l);
    if (a)
      return alert(
        `File "${a.name}" exceeds max size of ${Jc(r)}`
      ), t.currentTarget.value = "", null;
  }
  return s;
}, Ut = (t, e) => {
  const n = Yr(t.options_top), r = Yr(t.options), s = e ?? [], i = Yr(t.options_bottom), o = /* @__PURE__ */ new Set(), l = (a) => a.filter((c) => o.has(c.value) ? !1 : (o.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(i)
  ];
}, Er = (t) => {
  const e = {};
  for (const n of t) {
    const r = n.name;
    if (!r) continue;
    const s = n.ajaxchain;
    if (!s) continue;
    const i = Array.isArray(s) ? s : [s];
    for (const o of i)
      o?.target && (e[r] || (e[r] = []), e[r].push(o.target));
  }
  return e;
}, Gc = (t) => {
  const e = t?.data;
  return Array.isArray(e?.results?.options) ? e.results.options[0] : Array.isArray(e?.data) ? e.data[0] : Array.isArray(e?.results) ? e.results[0] : Array.isArray(e) ? e[0] : e?.results ?? e;
}, yn = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Zr = async (t) => (await fe.get(
  t.baseURL + t.dbopsGetHash,
  { headers: yn(t) }
)).data.refhash, es = async (t, e) => (await fe.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: yn(t) }
)).data.refid, Yc = {
  async fetch(t, e, n, r) {
    const s = await Zr(t);
    let i = !1, o;
    n && (i = !0, o = n), i || (o = await es(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await fe.post(
      t.baseURL + t.dbopsFetch,
      { refid: o, datahash: s },
      { headers: yn(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await Zr(t), s = await es(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: yn(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await Zr(t), s = await es(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await fe.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: yn(t) }
    )).data;
  }
};
async function Un(t, e, n, r = void 0, s = void 0, i = {}) {
  try {
    let o = n;
    return o || (o = (await fe({
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
        queryid: o,
        filter: i,
        refid: r,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    });
  } catch (o) {
    throw o;
  }
}
async function Xo(t, e) {
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
async function Qo(t, e) {
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
async function Zo(t, e) {
  let n = t?.removeFileURL ?? "/api/files/delete";
  return (await fe.post(
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
function Xc({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: i = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l,
  chainMap: a
}) {
  const [c, u] = He(!1), [d, f] = He(!1), [h, m] = He(
    Ut(t, o ?? [])
  ), [g, y] = He(""), [b, C] = He(0), k = tr(null), w = tr(null), [v, T] = He(!1), O = tr(g), U = t.disabled === !0;
  De(() => {
    O.current = g;
  }, [g]), De(() => {
    if (t.type !== "select" || t.multiple || t["no-option"] !== "false" || e.values[$] || h.length === 0) return;
    const M = h[0]?.value;
    M != null && e.setFieldValue($, M, !1);
  }, [h]), De(() => {
    o && m(Ut(t, o));
  }, [o]), window.setFieldValue = (A, M) => {
    const R = document.querySelector(`[name="${A}"]`);
    R && (Array.isArray(M) ? R.value = JSON.stringify(M) : R.value = M ?? "", R.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, De(() => {
    const A = document.querySelector(
      `[name="${$}"]`
    );
    if (!A) return;
    const M = () => {
      let R = A.value;
      if (R?.startsWith("[") && R?.endsWith("]"))
        try {
          R = JSON.parse(R);
        } catch {
        }
      e.setFieldValue($, R);
    };
    return A.addEventListener("change", M), () => {
      A.removeEventListener("change", M);
    };
  }, []), De(() => {
    if (!v) return;
    const A = (M) => {
      const R = M.target;
      w.current?.contains(R) || k.current?.contains(R) || (T(!1), y(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [v]);
  const $ = t.name;
  De(() => {
    let A = !0;
    return (async () => {
      let R = t.valueKey ?? "value", G = t.labelKey ?? "title";
      const B = t?.source ?? {};
      if (t.type === "dataMethod") {
        const D = t.method, L = D ? n[D] : void 0;
        if (L)
          try {
            const V = await L(), ee = Array.isArray(V.data?.results?.options) ? V.data?.results?.options : Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V.data?.results) ? V.data?.results : Array.isArray(V?.data) ? V.data : V, te = Array.isArray(ee) ? ee.map(Vt) : [], Ae = hn(R, G, te, t.groupKey);
            A && m(Ut(t, Ae));
            return;
          } catch (V) {
            console.error("Method execution failed:", V), A && m([]);
            return;
          }
        else {
          A && m([]);
          return;
        }
      }
      if (B.type === "api" && B.endpoint)
        try {
          const D = {
            method: B.method || "GET",
            url: r?.baseURL + B.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...B.method === "GET" ? { params: { refid: B.refid } } : { data: { refid: B.refid } }
          }, L = await fe(D), V = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L, ee = Array.isArray(V) ? V.map(Vt) : [], te = hn(R, G, ee, t.groupKey);
          A && m(Ut(t, te));
          return;
        } catch (D) {
          console.error("API execution failed:", D), A && m([]);
          return;
        }
      if (t.table || t.type === "dataSelector" || t.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let D;
          if (t.type === "dataSelector")
            D = {
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
            D = {
              table: t.table,
              cols: t.columns,
              where: t.where ? s ? ct(t.where, { refid: s }) : t.where : void 0
            };
          }
          const L = await Un(r, D, t?.queryid, void 0, i), V = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, ee = Array.isArray(V) ? V.map(Vt) : [], te = hn(R, G, ee, t.groupKey);
          A && m(Ut(t, te));
        } catch (D) {
          console.error("API fetch failed:", D);
        }
      }
    })(), () => {
      A = !1;
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
  const W = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${U ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, S = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, ce = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, F = nr(
    () => Lc(h),
    [h]
  ), q = nr(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !g.trim()) return null;
    const A = g.trim().toLowerCase();
    return F.find(([, M]) => M.trim().toLowerCase() === A);
  }, [t.type, g, F]), Q = F.length, oe = !!(t.search && (t.queryid || t.table)), le = nr(() => oe || !g ? F : F.filter(
    ([, A]) => A.toLowerCase().includes(g.toLowerCase())
  ), [oe, g, F]), je = (A, M) => {
    if (v)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (R) => R + 1 < le.length ? R + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (R) => R - 1 >= 0 ? R - 1 : le.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [R] = le[b] || [];
        if (R) {
          let G = M ? R : [...e.values[t.name], R];
          e.setFieldValue(t.name, G), kt(G, t, i);
        }
        T(!1);
      } else A.key === "Escape" && (y(""), T(!1));
  };
  De(() => {
    k.current?.querySelector(
      `[data-index="${b}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [b]), De(() => {
    b >= le.length && C(0);
  }, [le, b]), De(() => {
    const A = t.autocomplete, M = t.ajaxchain;
    if (!A && !M) return;
    const R = e.values[t.name];
    if (!R) return;
    const G = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Fc(A)) {
          const D = A.src;
          if (!D || !r) return;
          let L;
          if ("type" in D && D.type === "api") {
            let ee = t.name;
            typeof t.parameter == "string" && t.parameter && (ee = t.parameter);
            const te = { [ee]: R, refid: R };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [ft, Fe] of Object.entries(t.parameter))
                te[ft] = ft === ee ? R : e.values?.[Fe];
            const Ae = {
              method: D.method || "GET",
              url: r?.baseURL + D.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...D.method === "GET" ? { params: te } : { data: te }
            }, Ee = await fe(Ae);
            L = Gc(Ee);
          } else {
            let ee;
            if (!D.queryid) {
              if (!D.table || !D.columns)
                throw new Error("SQL query requires field.table");
              const Ae = ct(D?.where ?? {}, {
                refid: R
              });
              ee = {
                ...D,
                table: D.table,
                cols: D.columns,
                where: Ae
              };
            }
            const { data: te } = await Un(r, ee, D?.queryid, R, i);
            L = Array.isArray(te?.data?.data) ? te.data.data[0] : Array.isArray(te?.data) ? te.data[0] : te?.data;
          }
          let V = Vt(L);
          V && A.target.split(",").map((ee) => ee.trim()).forEach((ee) => {
            V[ee] !== void 0 && e.setFieldValue(ee, V[ee]);
          });
        }
        for (const D of G) {
          const L = D.src;
          if (!D || typeof D != "object" || !L || typeof L != "object" || !r) continue;
          let V;
          if ("type" in L && L.type === "api") {
            let Fe = t.name;
            typeof t.parameter == "string" && t.parameter && (Fe = t.parameter);
            let _e = { [Fe]: R, refid: R };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [nn, Pn] of Object.entries(t.parameter))
                _e[nn] = nn === Fe ? R : e.values?.[Pn];
            const ht = {
              method: L.method || "GET",
              url: r?.baseURL + L.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...L.method === "GET" ? { params: _e } : { data: _e }
            }, { data: Ft } = await fe(ht);
            V = Ft;
          } else {
            let Fe;
            if (!L.queryid) {
              if (!L.table || !L.columns)
                throw new Error("SQL query requires field.table");
              const ht = ct(L?.where ?? {}, {
                refid: R
              });
              Fe = {
                ...L,
                table: L.table,
                cols: L.columns,
                where: ht
              };
            }
            const { data: _e } = await Un(r, Fe, L?.queryid, R, i);
            V = _e;
          }
          let ee = t.valueKey ?? "value", te = t.labelKey ?? "title";
          const Ae = Array.isArray(V?.results?.options) ? V?.results?.options : Array.isArray(V.data) ? V.data : Array.isArray(V.results) ? V.results : V, Ee = Array.isArray(Ae) ? Ae.map(Vt) : [], ft = hn(
            ee,
            te,
            Ee,
            t.groupKey
          );
          e.setFieldValue(D.target, e.initialValues[D.target]), l?.(D.target, ft);
        }
      } catch (D) {
        console.error("Autocomplete / AjaxChain fetch failed", D);
      }
    })();
  }, [e.values[t.name]]), De(() => {
    if (!oe || !g.trim() || !r) return;
    const A = _c(t.columns ?? ""), M = new AbortController(), R = setTimeout(async () => {
      try {
        let G;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const Ee = s ? ct(t.where ?? {}, {
            refid: s
          }) : t.where;
          G = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: Ee
          };
        }
        let B = {};
        Array.isArray(A) && A.forEach((Ee) => {
          B[Ee] = [g, "LIKE"];
        });
        let D = t.valueKey ?? "value", L = t.labelKey ?? "title";
        const { data: V } = await Un(r, G, t?.queryid, void 0, i, B), ee = Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V?.data) ? V.data : V, te = Array.isArray(ee) ? ee.map(Vt) : [], Ae = hn(
          D,
          L,
          te,
          t.groupKey
        );
        m(Ut(t, Ae));
      } catch (G) {
        if (fe.isCancel(G)) return;
        console.error("Search fetch failed", G);
      }
    }, 500);
    return () => {
      clearTimeout(R), M.abort();
    };
  }, [oe, g, s]);
  const Xe = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const M = await Qo(r, A), R = Go({
        uploads: M,
        currentValue: e.values[$],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        $,
        R
      ), kt(R, t, i);
    } catch (M) {
      console.error("File upload failed", M), e.setFieldError($, "File upload failed");
    }
  }, N = async (A) => {
    const M = Array.isArray(e.values[$]) ? e.values[$] : [], R = A.split("&")[0];
    if (!R) return;
    const G = M.filter((B) => B.split("&")[0] !== R);
    e.setFieldValue($, G);
    try {
      await Zo(r, R), kt(G, t, i);
    } catch (B) {
      console.log(B), e.setFieldValue($, M), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, z = async (A, M, R) => {
    const G = M[A];
    if (!G) return;
    const B = n?.[G];
    if (typeof B != "function") {
      console.error(`Method "${String(G)}" not found`);
      return;
    }
    try {
      await Promise.resolve(B(R));
    } catch (D) {
      console.error(`Method "${String(G)}" failed`, D);
    }
  };
  return {
    setHighlightedIndex: C,
    executeFieldMethod: z,
    handleFileUpload: Xe,
    handleKeyDown: je,
    setSearch: y,
    setOpen: T,
    setIsFocused: u,
    handleInputChange: (A) => {
      if (U) return;
      const M = A.target.value;
      y(M), C(0), M.trim() ? T(!0) : (T(!1), e.setFieldValue($, ""));
    },
    handleSelect: (A) => {
      e.setFieldValue($, A), kt(A, t, i), y(""), T(!1), z("onChange", t, `${$}-${A}`);
    },
    handlePersist: kt,
    setLoading: f,
    removeFile: N,
    optionCount: Q,
    baseInputClasses: W,
    focusClasses: S,
    labelClasses: ce,
    search: g,
    highlightedIndex: b,
    options: h,
    isDisabled: U,
    key: $,
    filteredOptions: le,
    open: v,
    listRef: k,
    isFocused: c,
    exactMatch: q,
    triggerRef: w,
    loading: d
  };
}
function Fs({
  anchorRef: t,
  open: e,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [i, o] = He({});
  return ki(() => {
    if (!e || !t.current) return;
    const l = t.current, a = () => {
      const u = l.getBoundingClientRect();
      o({
        position: "fixed",
        top: u.bottom + r,
        left: u.left,
        width: u.width,
        maxHeight: s,
        zIndex: 9999
      });
    };
    a();
    const c = requestAnimationFrame(a);
    return window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
      cancelAnimationFrame(c), window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
    };
  }, [e, t, r, s]), ki(() => {
    if (!e || !t.current) return;
    const l = t.current.getBoundingClientRect();
    o({
      position: "fixed",
      top: l.bottom + r,
      left: l.left,
      width: l.width,
      zIndex: 9999,
      maxHeight: 240,
      overflowY: "auto"
    });
  }, [e, t, r]), e ? tc(
    /* @__PURE__ */ p.jsx("div", { style: i, children: n }),
    document.body
  ) : null;
}
function _i({
  field: t,
  isDisabled: e,
  handleKeyDown: n,
  labelClasses: r,
  listRef: s,
  search: i,
  filteredOptions: o,
  highlightedIndex: l,
  setSearch: a,
  formik: c,
  executeFieldMethod: u,
  handlePersist: d,
  module_refid: f,
  options: h,
  triggerRef: m,
  open: g,
  setOpen: y
}) {
  const b = t.name;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: b,
        value: c.values[b] ?? ""
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: r, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: b,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${e ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: m,
        tabIndex: 0,
        onClick: () => {
          e || y((C) => !C);
        },
        onKeyDown: (C) => {
          e || n(C, !0);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: c.values[b] ? cr(h, c.values[b]) ?? "Select option" : `Select ${t.label}` }),
          /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(Fs, { anchorRef: m, open: g, children: /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: s,
        className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2",
        children: [
          t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (C) => {
                a(C.target.value);
              },
              onKeyDown: (C) => n(C, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          o.length > 0 && /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: (C) => {
                C.preventDefault(), C.stopPropagation(), c.setFieldValue(b, ""), y(!1), d("", t, f), a("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          o.length > 0 ? o.map(([C, k], w) => /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `${b}-${C}`,
              "data-index": w,
              onClick: (v) => {
                v.preventDefault(), v.stopPropagation(), c.setFieldValue(b, C), d(C, t, f), y(!1), a(""), u("onChange", t, `${b}-${C}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[b] === C ? "bg-indigo-50 text-indigo-600 font-medium" : l === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: k
            },
            C
          )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[b] && c.errors[b] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[b]) })
  ] });
}
const Qc = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ p.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ p.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ p.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ p.jsx("source", { src: t }) }) : /* @__PURE__ */ p.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ p.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ p.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function Zc(t) {
  const e = Fi[t] ?? Fi.other;
  return /* @__PURE__ */ p.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const eu = ({ filePath: t, sqlOpsUrls: e }) => {
  const n = t.replace(/^[^&]*&/, ""), [r, s] = He(null), [i, o] = He(!1), l = Wc(n), a = Vc(l);
  De(() => {
    if (!e || a !== "image" && !i) return;
    let u = !0, d = null;
    return Xo(n, e).then((f) => {
      u && (d = f, s(f));
    }), () => {
      u = !1, d && URL.revokeObjectURL(d);
    };
  }, [a, i, n, e]);
  let c = n.split("/").pop();
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    a === "image" && r ? /* @__PURE__ */ p.jsx(
      "img",
      {
        src: r,
        alt: c,
        title: "Click to preview",
        onClick: () => o(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ p.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => o(!0),
        onKeyDown: (u) => u.key === "Enter" && o(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Zc(a),
          /* @__PURE__ */ p.jsx("span", { className: "text-sm", children: c })
        ]
      }
    ),
    i && /* @__PURE__ */ p.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ p.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => o(!1),
          children: "✕"
        }
      ),
      r ? /* @__PURE__ */ p.jsx(Qc, { fileUrl: r, category: a }) : /* @__PURE__ */ p.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Bi({
  field: t,
  isDisabled: e,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: i,
  search: o,
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
  setOpen: b
}) {
  const C = t.name, k = m.map((v) => v.value), w = k.every((v) => r.includes(v));
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: C,
        value: r.join(",")
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: s, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: C,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          e || b((v) => !v);
        },
        onKeyDown: (v) => {
          e || n(v, !1);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((v) => cr(m, v) ?? v).join(", ") : `Select ${t.label}` }),
          /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(Fs, { anchorRef: g, open: y && !e, children: /* @__PURE__ */ p.jsxs("div", { ref: i, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (v) => {
            e || c(v.target.value);
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
                checked: w,
                onChange: (v) => {
                  const T = v.target.checked ? k : [];
                  u.setFieldValue(C, T), f(T, t, h), d("onChange", t, C);
                },
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([v, T], O) => /* @__PURE__ */ p.jsxs(
        "label",
        {
          htmlFor: `${C}-${v}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(v) ? "bg-indigo-50 text-indigo-600 font-medium" : a === O ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: `${C}-${v}`,
                type: "checkbox",
                checked: r?.includes(v),
                onChange: (U) => {
                  const $ = U.target.checked ? Array.from(/* @__PURE__ */ new Set([...r, v])) : r?.filter((W) => W !== v);
                  u.setFieldValue(C, $), f($, t, h), d("onChange", t, `${C}-${v}`);
                },
                onBlur: u.handleBlur,
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            T
          ]
        },
        v
      )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[C] && u.errors[C] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[C]) })
  ] });
}
function tu({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const r = t.replace(/^[^&]*&/, ""), [s, i] = He(null);
  return De(() => {
    if (!n) return;
    let o = !0, l = null;
    return Xo(r, n).then((a) => {
      o && (l = a, i(a));
    }), () => {
      o = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, r, n]), s ? /* @__PURE__ */ p.jsx(
    "img",
    {
      alt: e,
      title: e,
      src: s,
      className: "h-24 w-24 object-cover rounded border border-dashed   hover:opacity-90"
    }
  ) : null;
}
function el({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const i = tr(null), o = e.max !== void 0 ? Number(e.max) : 1 / 0, l = Array.isArray(t.values[s]) ? t.values[s] : t.values[s] ? [t.values[s]] : [], a = async (f) => {
    const h = Yo({
      e: f,
      existingFiles: l,
      maxFiles: o,
      maxFileSize: e.file_size
    });
    if (h)
      try {
        const m = await Qo(n, h), g = Go({
          uploads: m,
          currentValue: t.values[s],
          multiple: e.multiple ?? !1
        });
        t.setFieldValue(
          s,
          g
        ), kt(g, e, r), f.target.value = "";
      } catch (m) {
        console.error("File upload failed", m), t.setFieldError(s, "File upload failed");
      }
  }, c = async (f) => {
    const h = Array.isArray(t.values[s]) ? t.values[s] : [], m = f.split("&")[0];
    if (!m) return;
    const g = h.filter((y) => y.split("&")[0] !== m);
    t.setFieldValue(s, g);
    try {
      if (!f.split("&")[0]) return;
      await Zo(n, m), kt(g, e, r);
    } catch {
      t.setFieldValue(s, h), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, u = Uc(e), d = e.multiple === !0;
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
        multiple: d,
        ...u,
        onChange: a
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          l.length > 0 ? l.map((f) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ p.jsx(
              tu,
              {
                field_name: f,
                filePath: f,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  c(f);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, f)) : null,
          /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: () => i.current?.click(),
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ p.jsx("i", { className: `fa-solid ${Kc(e)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    t.touched[s] && t.errors[s] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
  ] });
}
function xe(t) {
  this.content = t;
}
xe.prototype = {
  constructor: xe,
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
    var r = n && n != t ? this.remove(n) : this, s = r.find(t), i = r.content.slice();
    return s == -1 ? i.push(n || t, e) : (i[s + 1] = e, n && (i[s] = n)), new xe(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new xe(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new xe([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new xe(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), i = r.find(t);
    return s.splice(i == -1 ? s.length : i, 0, e, n), new xe(s);
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
    return t = xe.from(t), t.size ? new xe(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = xe.from(t), t.size ? new xe(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = xe.from(t);
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
xe.from = function(t) {
  if (t instanceof xe) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new xe(e);
};
function tl(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let s = t.child(r), i = e.child(r);
    if (s == i) {
      n += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(i))
      return n;
    if (s.isText && s.text != i.text) {
      for (let o = 0; s.text[o] == i.text[o]; o++)
        n++;
      return n;
    }
    if (s.content.size || i.content.size) {
      let o = tl(s.content, i.content, n + 1);
      if (o != null)
        return o;
    }
    n += s.nodeSize;
  }
}
function nl(t, e, n, r) {
  for (let s = t.childCount, i = e.childCount; ; ) {
    if (s == 0 || i == 0)
      return s == i ? null : { a: n, b: r };
    let o = t.child(--s), l = e.child(--i), a = o.nodeSize;
    if (o == l) {
      n -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: n, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = nl(o.content, l.content, n - 1, r - 1);
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
  nodesBetween(e, n, r, s = 0, i) {
    for (let o = 0, l = 0; l < n; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, s + l, i || null, o) !== !1 && a.content.size) {
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
    let i = "", o = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? s ? typeof s == "function" ? s(l) : s : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : i += r), i += c;
    }, 0), i;
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
    let n = this.lastChild, r = e.firstChild, s = this.content.slice(), i = 0;
    for (n.isText && n.sameMarkup(r) && (s[s.length - 1] = n.withText(n.text + r.text), i = 1); i < e.content.length; i++)
      s.push(e.content[i]);
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
      for (let i = 0, o = 0; o < n; i++) {
        let l = this.content[i], a = o + l.nodeSize;
        a > e && ((o < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, n - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, n - o - 1))), r.push(l), s += l.nodeSize), o = a;
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
    let s = this.content.slice(), i = this.size + n.nodeSize - r.nodeSize;
    return s[e] = n, new E(s, i);
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
      return Kn(0, e);
    if (e == this.size)
      return Kn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), i = r + s.nodeSize;
      if (i >= e)
        return i == e ? Kn(n + 1, i) : Kn(n, r);
      r = i;
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
      let i = e[s];
      r += i.nodeSize, s && i.isText && e[s - 1].sameMarkup(i) ? (n || (n = e.slice(0, s)), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
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
const ts = { index: 0, offset: 0 };
function Kn(t, e) {
  return ts.index = t, ts.offset = e, ts;
}
function ur(t, e) {
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
      if (!ur(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !ur(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ie = class vs {
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
      let i = e[s];
      if (this.eq(i))
        return e;
      if (this.type.excludes(i.type))
        n || (n = e.slice(0, s));
      else {
        if (i.type.excludes(this.type))
          return e;
        !r && i.type.rank > this.type.rank && (n || (n = e.slice(0, s)), n.push(this), r = !0), n && n.push(i);
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
    return this == e || this.type == e.type && ur(this.attrs, e.attrs);
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
      return vs.none;
    if (e instanceof vs)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
ie.none = [];
class dr extends Error {
}
class j {
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
    return r && new j(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new j(rl(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return j.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new j(E.fromJSON(e, n.content), r, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, s = 0;
    for (let i = e.firstChild; i && !i.isLeaf && (n || !i.type.spec.isolating); i = i.firstChild)
      r++;
    for (let i = e.lastChild; i && !i.isLeaf && (n || !i.type.spec.isolating); i = i.lastChild)
      s++;
    return new j(e, r, s);
  }
}
j.empty = new j(E.empty, 0, 0);
function rl(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), i = t.maybeChild(r), { index: o, offset: l } = t.findIndex(n);
  if (s == e || i.isText) {
    if (l != n && !t.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, i.copy(rl(i.content, e - s - 1, n - s - 1)));
}
function sl(t, e, n, r) {
  let { index: s, offset: i } = t.findIndex(e), o = t.maybeChild(s);
  if (i == e || o.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = sl(o.content, e - i - 1, n, o);
  return l && t.replaceChild(s, o.copy(l));
}
function nu(t, e, n) {
  if (n.openStart > t.depth)
    throw new dr("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new dr("Inconsistent open depths");
  return il(t, e, n, 0);
}
function il(t, e, n, r) {
  let s = t.index(r), i = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let o = il(t, e, n, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let o = t.parent, l = o.content;
      return Tt(o, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = ru(n, t);
      return Tt(i, ll(t, o, l, e, r));
    }
  else return Tt(i, fr(t, e, r));
}
function ol(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new dr("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Ss(t, e, n) {
  let r = t.node(n);
  return ol(r, e.node(n)), r;
}
function Nt(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function bn(t, e, n, r) {
  let s = (e || t).node(n), i = 0, o = e ? e.index(n) : s.childCount;
  t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (Nt(t.nodeAfter, r), i++));
  for (let l = i; l < o; l++)
    Nt(s.child(l), r);
  e && e.depth == n && e.textOffset && Nt(e.nodeBefore, r);
}
function Tt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function ll(t, e, n, r, s) {
  let i = t.depth > s && Ss(t, e, s + 1), o = r.depth > s && Ss(n, r, s + 1), l = [];
  return bn(null, t, s, l), i && o && e.index(s) == n.index(s) ? (ol(i, o), Nt(Tt(i, ll(t, e, n, r, s + 1)), l)) : (i && Nt(Tt(i, fr(t, e, s + 1)), l), bn(e, n, s, l), o && Nt(Tt(o, fr(n, r, s + 1)), l)), bn(r, null, s, l), new E(l);
}
function fr(t, e, n) {
  let r = [];
  if (bn(null, t, n, r), t.depth > n) {
    let s = Ss(t, e, n + 1);
    Nt(Tt(s, fr(t, e, n + 1)), r);
  }
  return bn(e, null, n, r), new E(r);
}
function ru(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let i = n - 1; i >= 0; i--)
    s = e.node(i).copy(E.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class Sn {
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
    for (let i = 0; i < e; i++)
      s += r.child(i).nodeSize;
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
      return ie.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), s = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = s, s = l;
    }
    let i = r.marks;
    for (var o = 0; o < i.length; o++)
      i[o].type.spec.inclusive === !1 && (!s || !i[o].isInSet(s.marks)) && (i = i[o--].removeFromSet(i));
    return i;
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
    for (var i = 0; i < r.length; i++)
      r[i].type.spec.inclusive === !1 && (!s || !r[i].isInSet(s.marks)) && (r = r[i--].removeFromSet(r));
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
        return new hr(this, e, r);
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
    let r = [], s = 0, i = n;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(i), c = i - a;
      if (r.push(o, l, s + a), !c || (o = o.child(l), o.isText))
        break;
      i = c - 1, s += a + 1;
    }
    return new Sn(n, r, i);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Hi.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let o = r.elts[i];
        if (o.pos == n)
          return o;
      }
    else
      Hi.set(e, r = new su());
    let s = r.elts[r.i] = Sn.resolve(e, n);
    return r.i = (r.i + 1) % iu, s;
  }
}
class su {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const iu = 12, Hi = /* @__PURE__ */ new WeakMap();
class hr {
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
const ou = /* @__PURE__ */ Object.create(null);
class tt {
  /**
  @internal
  */
  constructor(e, n, r, s = ie.none) {
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
    return this.type == e && ur(this.attrs, n || e.defaultAttrs || ou) && ie.sameSet(this.marks, r || ie.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new tt(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new tt(this.type, this.attrs, this.content, e);
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
      return j.empty;
    let s = this.resolve(e), i = this.resolve(n), o = r ? 0 : s.sharedDepth(n), l = s.start(o), c = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new j(c, s.depth - o, i.depth - o);
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
    return nu(this.resolve(e), this.resolve(n), r);
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
    return Sn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Sn.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let s = !1;
    return n > e && this.nodesBetween(e, n, (i) => (r.isInSet(i.marks) && (s = !0), !s)), s;
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
  canReplace(e, n, r = E.empty, s = 0, i = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, s, i), l = o && o.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = s; a < i; a++)
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
    let i = this.contentMatchAt(e).matchType(r), o = i && i.matchFragment(this.content, n);
    return o ? o.validEnd : !1;
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
    let e = ie.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ie.sameSet(e, this.marks))
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
    let s = E.fromJSON(e, n.content), i = e.nodeType(n.type).create(n.attrs, s, r);
    return i.type.checkAttrs(i.attrs), i;
  }
}
tt.prototype.text = void 0;
class pr extends tt {
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
    return e == this.marks ? this : new pr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new pr(this.type, this.attrs, e, this.marks);
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
class Ot {
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
    let r = new lu(e, n);
    if (r.next == null)
      return Ot.empty;
    let s = cl(r);
    r.next && r.err("Unexpected trailing text");
    let i = pu(hu(s));
    return mu(i, r), i;
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
    for (let i = n; s && i < r; i++)
      s = s.matchType(e.child(i).type);
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
    function i(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return E.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
          s.push(d);
          let f = i(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return i(this, []);
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
      let s = r.shift(), i = s.match;
      if (i.matchType(e)) {
        let o = [];
        for (let l = s; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < i.next.length; o++) {
        let { type: l, next: a } = i.next[o];
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
      let i = s + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        i += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return i;
    }).join(`
`);
  }
}
Ot.empty = new Ot(!0);
class lu {
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
    e.push(au(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function au(t) {
  let e = [];
  do
    e.push(cu(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function cu(t) {
  let e = fu(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = uu(t, e);
    else
      break;
  return e;
}
function Wi(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function uu(t, e) {
  let n = Wi(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Wi(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function du(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let s = [];
  for (let i in n) {
    let o = n[i];
    o.isInGroup(e) && s.push(o);
  }
  return s.length == 0 && t.err("No node type or group '" + e + "' found"), s;
}
function fu(t) {
  if (t.eat("(")) {
    let e = cl(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = du(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function hu(t) {
  let e = [[]];
  return s(i(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function s(o, l) {
    o.forEach((a) => a.to = l);
  }
  function i(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(i(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = i(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        s(c, l = n());
      }
    else if (o.type == "star") {
      let a = n();
      return r(l, a), s(i(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = n();
      return s(i(o.expr, l), a), s(i(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(i(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = n();
          s(i(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          s(i(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = n();
            r(a, u), s(i(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function ul(t, e) {
  return e - t;
}
function Vi(t, e) {
  let n = [];
  return r(e), n.sort(ul);
  function r(s) {
    let i = t[s];
    if (i.length == 1 && !i[0].term)
      return r(i[0].to);
    n.push(s);
    for (let o = 0; o < i.length; o++) {
      let { term: l, to: a } = i[o];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function pu(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Vi(t, 0));
  function n(r) {
    let s = [];
    r.forEach((o) => {
      t[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Vi(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let i = e[r.join(",")] = new Ot(r.indexOf(t.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(ul);
      i.next.push({ type: s[o][0], next: e[l.join(",")] || n(l) });
    }
    return i;
  }
}
function mu(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], i = !s.validEnd, o = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      o.push(a.name), i && !(a.isText || a.hasRequiredAttrs()) && (i = !1), r.indexOf(c) == -1 && r.push(c);
    }
    i && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
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
      let i = t[r];
      if (i.hasDefault)
        s = i.default;
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
    let i = t[s];
    i.validate && i.validate(e[s]);
  }
}
function pl(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new yu(t, r, e[r]);
  return n;
}
let Ui = class ml {
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
    return this.contentMatch == Ot.empty;
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
    return new tt(this, this.computeAttrs(e), E.from(n), ie.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = E.from(n), this.checkContent(n), new tt(this, this.computeAttrs(e), n, ie.setFrom(r));
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
      let o = this.contentMatch.fillBefore(n);
      if (!o)
        return null;
      n = o.append(n);
    }
    let s = this.contentMatch.matchFragment(n), i = s && s.fillBefore(E.empty, !0);
    return i ? new tt(this, e, n.append(i), ie.setFrom(r)) : null;
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
    return n ? n.length ? n : ie.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((i, o) => r[i] = new ml(i, n, o));
    let s = n.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let i in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function gu(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${i}`);
  };
}
class yu {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? gu(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Nr {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = pl(e, s.attrs), this.excluded = null;
    let i = dl(this.attrs);
    this.instance = i ? new ie(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ie(this, fl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((i, o) => r[i] = new Nr(i, s++, n, o)), r;
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
class bu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = xe.from(e.nodes), n.marks = xe.from(e.marks || {}), this.nodes = Ui.compile(this.spec.nodes, this), this.marks = Nr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let i = this.nodes[s], o = i.spec.content || "", l = i.spec.marks;
      if (i.contentMatch = r[o] || (r[o] = Ot.parse(o, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = i;
      }
      i.markSet = l == "_" ? null : l ? Ki(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s], o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : Ki(this, o.split(" "));
    }
    this.nodeFromJSON = (s) => tt.fromJSON(this, s), this.markFromJSON = (s) => ie.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Ui) {
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
    return new pr(r, r.defaultAttrs, e, ie.setFrom(n));
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
function Ki(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r], i = t.marks[s], o = i;
    if (i)
      n.push(i);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (s == "_" || a.spec.group && a.spec.group.split(" ").indexOf(s) > -1) && n.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function xu(t) {
  return t.tag != null;
}
function wu(t) {
  return t.style != null;
}
class Mt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (xu(s))
        this.tags.push(s);
      else if (wu(s)) {
        let i = /[^=]*/.exec(s.style)[0];
        r.indexOf(i) < 0 && r.push(i), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let i = e.nodes[s.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new Ji(this, n, !1);
    return r.addAll(e, ie.none, n.from, n.to), r.finish();
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
    let r = new Ji(this, n, !0);
    return r.addAll(e, ie.none, n.from, n.to), j.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let i = this.tags[s];
      if (Cu(e, i.tag) && (i.namespace === void 0 || e.namespaceURI == i.namespace) && (!i.context || n.matchesContext(i.context))) {
        if (i.getAttrs) {
          let o = i.getAttrs(e);
          if (o === !1)
            continue;
          i.attrs = o || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, s) {
    for (let i = s ? this.styles.indexOf(s) + 1 : 0; i < this.styles.length; i++) {
      let o = this.styles[i], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (o.getAttrs) {
          let a = o.getAttrs(n);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(s) {
      let i = s.priority == null ? 50 : s.priority, o = 0;
      for (; o < n.length; o++) {
        let l = n[o];
        if ((l.priority == null ? 50 : l.priority) < i)
          break;
      }
      n.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let i = e.marks[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = Gi(o)), o.mark || o.ignore || o.clearMark || (o.mark = s);
      });
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = Gi(o)), o.node || o.ignore || o.mark || (o.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new Mt(e, Mt.schemaRules(e)));
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
}, vu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, yl = { ol: !0, ul: !0 }, Cn = 1, Cs = 2, xn = 4;
function qi(t, e, n) {
  return e != null ? (e ? Cn : 0) | (e === "full" ? Cs : 0) : t && t.whitespace == "pre" ? Cn | Cs : n & ~xn;
}
class qn {
  constructor(e, n, r, s, i, o) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = o, this.content = [], this.activeMarks = ie.none, this.match = i || (o & xn ? null : e.contentMatch);
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
    if (!(this.options & Cn)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - s[0].length));
      }
    }
    let n = E.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(E.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !gl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ji {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, i, o = qi(null, n.preserveWhitespace, 0) | (r ? xn : 0);
    s ? i = new qn(s.type, s.attrs, ie.none, !0, n.topMatch || s.type.contentMatch, o) : r ? i = new qn(null, null, ie.none, !0, null, o) : i = new qn(e.schema.topNodeType, null, ie.none, !0, null, o), this.nodes = [i], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, i = s.options & Cs ? "full" : this.localPreserveWS || (s.options & Cn) > 0, { schema: o } = this.parser;
    if (i === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i)
        if (i === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(o.linebreakReplacement.create(), n, !0), l[a] && this.insertNode(o.text(l[a]), n, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = s.content[s.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(o.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let s = this.localPreserveWS, i = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    yl.hasOwnProperty(o) && this.parser.normalizeLists && Su(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : vu.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (gl.hasOwnProperty(o))
        i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), c = !0, i.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let d = a && a.skip ? n : this.readStyles(e, n);
      d && this.addAll(e, d), c && this.sync(i), this.needsBlock = u;
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
        let i = this.parser.matchedStyles[s], o = r.getPropertyValue(i);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(i, o, this, l);
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
    let i, o;
    if (n.node)
      if (o = this.parser.schema.nodes[n.node], o.isLeaf)
        this.insertNode(o.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, n.attrs || null, r, n.preserveWhitespace);
        a && (i = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, r, s);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    i && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, s) {
    let i = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s]; o != l; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o, n);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let s, i;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!s || s.length > c.length + l) && (s = c, i = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!s)
      return null;
    this.sync(i);
    for (let o = 0; o < s.length; o++)
      n = this.enterInner(s[o], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (n = this.enterInner(i, null, n));
    }
    let s = this.findPlace(e, n, r);
    if (s) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = ie.none;
      for (let l of s.concat(e.marks))
        (i.type ? i.type.allowsMarkType(l.type) : Yi(l.type, e.type)) && (o = l.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, s) {
    let i = this.findPlace(e.create(n), r, !1);
    return i && (i = this.enterInner(e, n, r, !0, s)), i;
  }
  // Open a node of the given type
  enterInner(e, n, r, s = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = qi(e, i, o.options);
    o.options & xn && o.content.length == 0 && (l |= xn);
    let a = ie.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : Yi(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new qn(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= Cn);
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
    let n = e.split("/"), r = this.options.context, s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), i = -(r ? r.depth + 1 : 0) + (s ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= i; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && s ? this.nodes[a].type : r && a >= i ? r.node(a - i).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(n.length - 1, this.open);
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
function Su(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && yl.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Cu(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Gi(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Yi(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let s = n[r];
    if (!s.allowsMarkType(t))
      continue;
    let i = [], o = (l) => {
      i.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || i.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(s.contentMatch))
      return !0;
  }
}
class Tr {
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
    r || (r = ns(n).createDocumentFragment());
    let s = r, i = [];
    return e.forEach((o) => {
      if (i.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < i.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(i[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < i.length; )
          s = i.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, n);
          u && (i.push([c, s]), s.appendChild(u.dom), s = u.contentDOM || u.dom);
        }
      }
      s.appendChild(this.serializeNodeInner(o, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: s } = sr(ns(n), this.nodes[e.type.name](e), null, e.attrs);
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
      let i = this.serializeMark(e.marks[s], e.isInline, n);
      i && ((i.contentDOM || i.dom).appendChild(r), r = i.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let s = this.marks[e.type.name];
    return s && sr(ns(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return sr(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Tr(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Xi(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Xi(e.marks);
  }
}
function Xi(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function ns(t) {
  return t.document || window.document;
}
const Qi = /* @__PURE__ */ new WeakMap();
function ku(t) {
  let e = Qi.get(t);
  return e === void 0 && Qi.set(t, e = Au(t)), e;
}
function Au(t) {
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
function sr(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], i;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = ku(r)) && i.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = s.indexOf(" ");
  o > 0 && (n = s.slice(0, o), s = s.slice(o + 1));
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
      let { dom: h, contentDOM: m } = sr(t, f, n, r);
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
function Eu(t, e) {
  return t + e * xl;
}
function Zi(t) {
  return t & bl;
}
function Nu(t) {
  return (t - (t & bl)) / xl;
}
const wl = 1, vl = 2, ir = 4, Sl = 8;
class ks {
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
    return (this.delInfo & (wl | ir)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (vl | ir)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & ir) > 0;
  }
}
class ze {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && ze.empty)
      return ze.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = Zi(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Nu(e);
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
    let s = 0, i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], u = this.ranges[l + o], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : n : n, h = a + s + (f < 0 ? 0 : u);
        if (r)
          return h;
        let m = e == (n < 0 ? a : d) ? null : Eu(l / 3, e - a), g = e == a ? vl : e == d ? wl : ir;
        return (n < 0 ? e != a : e != d) && (g |= Sl), new ks(h, g, m);
      }
      s += u - c;
    }
    return r ? e + s : new ks(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = Zi(n), i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], u = a + c;
      if (e <= u && l == s * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let s = 0, i = 0; s < this.ranges.length; s += 3) {
      let o = this.ranges[s], l = o - (this.inverted ? i : 0), a = o + (this.inverted ? 0 : i), c = this.ranges[s + n], u = this.ranges[s + r];
      e(l, l + c, a, a + u), i += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new ze(this.ranges, !this.inverted);
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
    return e == 0 ? ze.empty : new ze(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ze.empty = new ze([]);
class mr {
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
    return new mr(this._maps, this.mirror, e, n);
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
    let e = new mr();
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
    for (let i = this.from; i < this.to; i++) {
      let o = this._maps[i], l = o.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          i = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      s |= l.delInfo, e = l.pos;
    }
    return r ? e : new ks(e, s, null);
  }
}
const rs = /* @__PURE__ */ Object.create(null);
class ke {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ze.empty;
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
    let r = rs[n.stepType];
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
    if (e in rs)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return rs[e] = n, n.prototype.jsonID = e, n;
  }
}
class he {
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
    return new he(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new he(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return he.ok(e.replace(n, r, s));
    } catch (i) {
      if (i instanceof dr)
        return he.fail(i.message);
      throw i;
    }
  }
}
function _s(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let i = t.child(s);
    i.content.size && (i = i.copy(_s(i.content, e, i))), i.isInline && (i = e(i, n, s)), r.push(i);
  }
  return E.fromArray(r);
}
class gt extends ke {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), i = new j(_s(n.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), s), n.openStart, n.openEnd);
    return he.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new Ke(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new gt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof gt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new gt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new gt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ke.jsonID("addMark", gt);
class Ke extends ke {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new j(_s(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return he.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new gt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ke(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ke(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Ke(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ke.jsonID("removeMark", Ke);
class yt extends ke {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return he.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return he.fromReplace(e, this.pos, this.pos + 1, new j(E.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new yt(this.pos, n.marks[s]);
        return new yt(this.pos, this.mark);
      }
    }
    return new jt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new yt(n.pos, this.mark);
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
    return new yt(n.pos, e.markFromJSON(n.mark));
  }
}
ke.jsonID("addNodeMark", yt);
class jt extends ke {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return he.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return he.fromReplace(e, this.pos, this.pos + 1, new j(E.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new yt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new jt(n.pos, this.mark);
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
    return new jt(n.pos, e.markFromJSON(n.mark));
  }
}
ke.jsonID("removeNodeMark", jt);
class ge extends ke {
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
    return this.structure && As(e, this.from, this.to) ? he.fail("Structure replace would overwrite content") : he.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ze([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ge(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new ge(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof ge) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? j.empty : new j(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ge(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? j.empty : new j(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ge(e.from, this.to, n, this.structure);
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
    return new ge(n.from, n.to, j.fromJSON(e, n.slice), !!n.structure);
  }
}
ke.jsonID("replace", ge);
class ye extends ke {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, s, i, o, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = s, this.slice = i, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (As(e, this.from, this.gapFrom) || As(e, this.gapTo, this.to)))
      return he.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return he.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? he.fromReplace(e, this.from, this.to, r) : he.fail("Content does not fit in gap");
  }
  getMap() {
    return new ze([
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
    return new ye(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || i > r.pos ? null : new ye(n.pos, r.pos, s, i, this.slice, this.insert, this.structure);
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
    return new ye(n.from, n.to, n.gapFrom, n.gapTo, j.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
ke.jsonID("replaceAround", ye);
function As(t, e, n) {
  let r = t.resolve(e), s = n - e, i = r.depth;
  for (; s > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
    i--, s--;
  if (s > 0) {
    let o = r.node(i).maybeChild(r.indexAfter(i));
    for (; s > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, s--;
    }
  }
  return !1;
}
function Tu(t, e, n, r) {
  let s = [], i = [], o, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), m = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(m) || (o && o.to == f && o.mark.eq(d[g]) ? o.to = h : s.push(o = new Ke(f, h, d[g])));
      l && l.to == f ? l.to = h : i.push(l = new gt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), i.forEach((a) => t.step(a));
}
function Mu(t, e, n, r) {
  let s = [], i = 0;
  t.doc.nodesBetween(e, n, (o, l) => {
    if (!o.isInline)
      return;
    i++;
    let a = null;
    if (r instanceof Nr) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, n);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < s.length; h++) {
          let m = s[h];
          m.step == i - 1 && d.eq(s[h].style) && (f = m);
        }
        f ? (f.to = c, f.step = i) : s.push({ style: d, from: Math.max(l, e), to: c, step: i });
      }
    }
  }), s.forEach((o) => t.step(new Ke(o.from, o.to, o.style)));
}
function Bs(t, e, n, r = n.contentMatch, s = !0) {
  let i = t.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      o.push(new ge(l, u, j.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Ke(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, m;
        for (; f = h.exec(c.text); )
          m || (m = new j(E.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), o.push(new ge(l + f.index, l + f.index + f[0].length, m));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(E.empty, !0);
    t.replace(l, l, new j(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    t.step(o[a]);
}
function Ru(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function en(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, i = 0; ; --r) {
    let o = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - i;
    if (r < t.depth && o.canReplace(l, a, n))
      return r;
    if (r == 0 || o.type.spec.isolating || !Ru(o, l, a))
      break;
    l && (s = 1), a < o.childCount && (i = 1);
  }
  return null;
}
function Iu(t, e, n) {
  let { $from: r, $to: s, depth: i } = e, o = r.before(i + 1), l = s.after(i + 1), a = o, c = l, u = E.empty, d = 0;
  for (let m = i, g = !1; m > n; m--)
    g || r.index(m) > 0 ? (g = !0, u = E.from(r.node(m).copy(u)), d++) : a--;
  let f = E.empty, h = 0;
  for (let m = i, g = !1; m > n; m--)
    g || s.after(m + 1) < s.end(m) ? (g = !0, f = E.from(s.node(m).copy(f)), h++) : c++;
  t.step(new ye(a, c, o, l, new j(u.append(f), d, h), u.size - d, !0));
}
function Cl(t, e, n = null, r = t) {
  let s = Ou(t, e), i = s && ju(r, e);
  return i ? s.map(eo).concat({ type: e, attrs: n }).concat(i.map(eo)) : null;
}
function eo(t) {
  return { type: t, attrs: null };
}
function Ou(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, i = n.contentMatchAt(r).findWrapping(e);
  if (!i)
    return null;
  let o = i.length ? i[0] : e;
  return n.canReplaceWith(r, s, o) ? i : null;
}
function ju(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, i = n.child(r), o = e.contentMatch.findWrapping(i.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Du(t, e, n) {
  let r = E.empty;
  for (let o = n.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = n[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = E.from(n[o].type.create(n[o].attrs, r));
  }
  let s = e.start, i = e.end;
  t.step(new ye(s, i, s, i, new j(r, 0, 0), n.length, !0));
}
function zu(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = t.steps.length;
  t.doc.nodesBetween(e, n, (o, l) => {
    let a = typeof s == "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(r, a) && Lu(t.doc, t.mapping.slice(i).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", m = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !m ? c = !1 : !h && m && (c = !0);
      }
      c === !1 && Al(t, o, l, i), Bs(t, t.mapping.slice(i).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(i), d = u.map(l, 1), f = u.map(l + o.nodeSize, 1);
      return t.step(new ye(d, f, d + 1, f - 1, new j(E.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && kl(t, o, l, i), !1;
    }
  });
}
function kl(t, e, n, r) {
  e.forEach((s, i) => {
    if (s.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(s.text); ) {
        let a = t.mapping.slice(r).map(n + 1 + i + o.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Al(t, e, n, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = t.mapping.slice(r).map(n + 1 + i);
      t.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function Lu(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function Pu(t, e, n, r, s) {
  let i = t.doc.nodeAt(e);
  if (!i)
    throw new RangeError("No node at given position");
  n || (n = i.type);
  let o = n.create(r, null, s || i.marks);
  if (i.isLeaf)
    return t.replaceWith(e, e + i.nodeSize, o);
  if (!n.validContent(i.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new ye(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new j(E.from(o), 0, 0), 1, !0));
}
function ut(t, e, n = 1, r) {
  let s = t.resolve(e), i = s.depth - n, o = r && r[r.length - 1] || s.parent;
  if (i < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !o.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let c = s.depth - 1, u = n - 2; c > i; c--, u--) {
    let d = s.node(c), f = s.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), m = r && r[u + 1];
    m && (h = h.replaceChild(0, m.type.create(m.attrs)));
    let g = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = s.indexAfter(i), a = r && r[0];
  return s.node(i).canReplaceWith(l, l, a ? a.type : s.node(i + 1).type);
}
function $u(t, e, n = 1, r) {
  let s = t.doc.resolve(e), i = E.empty, o = E.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    i = E.from(s.node(l).copy(i));
    let u = r && r[c];
    o = E.from(u ? u.type.create(u.attrs, o) : s.node(l).copy(o));
  }
  t.step(new ge(e, e, new j(i.append(o), n, n), !0));
}
function Lt(t, e) {
  let n = t.resolve(e), r = n.index();
  return El(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Fu(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let i = e.child(s), o = i.type == r ? t.type.schema.nodes.text : i.type;
    if (n = n.matchType(o), !n || !t.type.allowsMarks(i.marks))
      return !1;
  }
  return n.validEnd;
}
function El(t, e) {
  return !!(t && e && !t.isLeaf && Fu(t, e));
}
function Mr(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let i, o, l = r.index(s);
    if (s == r.depth ? (i = r.nodeBefore, o = r.nodeAfter) : n > 0 ? (i = r.node(s + 1), l++, o = r.node(s).maybeChild(l)) : (i = r.node(s).maybeChild(l - 1), o = r.node(s + 1)), i && !i.isTextblock && El(i, o) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function _u(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, i = t.doc.resolve(e - n), o = i.node().type;
  if (s && o.inlineContent) {
    let u = o.whitespace == "pre", d = !!o.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    Al(t, u.node(), u.before(), l);
  }
  o.inlineContent && Bs(t, e + n - 1, o, i.node().contentMatchAt(i.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new ge(c, a.map(e + n, -1), j.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    kl(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function Bu(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.index(s);
      if (r.node(s).canReplaceWith(i, i, n))
        return r.before(s + 1);
      if (i > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.indexAfter(s);
      if (r.node(s).canReplaceWith(i, i, n))
        return r.after(s + 1);
      if (i < r.node(s).childCount)
        return null;
    }
  return null;
}
function Hu(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let s = n.content;
  for (let i = 0; i < n.openStart; i++)
    s = s.firstChild.content;
  for (let i = 1; i <= (n.openStart == 0 && n.size ? 2 : 1); i++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (i == 1)
        u = c.canReplace(a, a, s);
      else {
        let d = c.contentMatchAt(a).findWrapping(s.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Rr(t, e, n = e, r = j.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), i = t.resolve(n);
  return Nl(s, i, r) ? new ge(e, n, r) : new Wu(s, i, r).fit();
}
function Nl(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Wu {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = E.empty;
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s))
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
    let i = this.placed, o = r.depth, l = s.depth;
    for (; o && l && i.childCount == 1; )
      i = i.firstChild.content, o--, l--;
    let a = new j(i, o, l);
    return e > -1 ? new ye(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new ge(r.pos, s.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
      let i = n.firstChild;
      if (n.childCount > 1 && (s = 0), i.type.spec.isolating && s <= r) {
        e = r;
        break;
      }
      n = i.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s, i = null;
        r ? (i = ss(this.unplaced.content, r - 1).firstChild, s = i.content) : s = this.unplaced.content;
        let o = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (n == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(E.from(o), !1)) : i && a.compatibleContent(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: d };
          if (n == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: u };
          if (i && c.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new j(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    if (s.childCount <= 1 && n > 0) {
      let i = e.size - n <= n + s.size;
      this.unplaced = new j(mn(e, n - 1, 1), n - 1, i ? n - 1 : r);
    } else
      this.unplaced = new j(mn(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: s, wrap: i }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (i)
      for (let g = 0; g < i.length; g++)
        this.openFrontierNode(i[g]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[n];
    if (s) {
      for (let g = 0; g < s.childCount; g++)
        u.push(s.child(g));
      d = d.matchFragment(s);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), y = d.matchType(g.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(Tl(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = gn(this.placed, n, E.from(u)), this.frontier[n].match = d, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = m ? e == 0 ? j.empty : new j(mn(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new j(mn(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !is(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], i = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), o = is(e, n, s, r, i);
      if (o) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = is(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: n, fit: o, move: i ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = gn(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), i = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = gn(this.placed, this.depth, E.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(E.empty, !0);
    n.childCount && (this.placed = gn(this.placed, this.frontier.length, n));
  }
}
function mn(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(mn(t.firstChild.content, e - 1, n)));
}
function gn(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(gn(t.lastChild.content, e - 1, n)));
}
function ss(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Tl(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Tl(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(E.empty, !0)))), t.copy(r);
}
function is(t, e, n, r, s) {
  let i = t.node(e), o = s ? t.indexAfter(e) : t.index(e);
  if (o == i.childCount && !n.compatibleContent(i.type))
    return null;
  let l = r.fillBefore(i.content, !0, o);
  return l && !Vu(n, i.content, o) ? l : null;
}
function Vu(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Uu(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Ku(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), i = t.doc.resolve(n);
  if (Nl(s, i, r))
    return t.step(new ge(e, n, r));
  let o = Rl(s, i);
  o[o.length - 1] == 0 && o.pop();
  let l = -(s.depth + 1);
  o.unshift(l);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let m = s.node(f).type.spec;
    if (m.defining || m.definingAsContext || m.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : s.before(f) == h && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let m = f.firstChild;
    if (c.push(m), h == r.openStart)
      break;
    f = m.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], m = Uu(h.type);
    if (m && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (m || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < o.length; g++) {
        let y = o[(g + a) % o.length], b = !0;
        y < 0 && (b = !1, y = -y);
        let C = s.node(y - 1), k = s.index(y - 1);
        if (C.canReplaceWith(k, k, m.type, m.marks))
          return t.replace(s.before(y), b ? i.after(y) : n, new j(Ml(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = o.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = o[f];
    h < 0 || (e = s.before(h), n = i.after(h));
  }
}
function Ml(t, e, n, r, s) {
  if (e < n) {
    let i = t.firstChild;
    t = t.replaceChild(0, i.copy(Ml(i.content, e + 1, n, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0), o = i.fillBefore(t).append(t);
    t = o.append(i.matchFragment(o).fillBefore(E.empty, !0));
  }
  return t;
}
function qu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = Bu(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new j(E.from(r), 0, 0));
}
function Ju(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), i = Rl(r, s);
  for (let o = 0; o < i.length; o++) {
    let l = i[o], a = o == i.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), s.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1))))
      return t.delete(r.before(l), s.after(l));
  }
  for (let o = 1; o <= r.depth && o <= s.depth; o++)
    if (e - r.start(o) == r.depth - o && n > r.end(o) && s.end(o) - n != s.depth - o && r.start(o - 1) == s.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), s.index(o - 1)))
      return t.delete(r.before(o), n);
  t.delete(e, n);
}
function Rl(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let i = t.start(s);
    if (i < t.pos - (t.depth - s) || e.end(s) > e.pos + (e.depth - s) || t.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (i == e.start(s) || s == t.depth && s == e.depth && t.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == i - 1) && n.push(s);
  }
  return n;
}
class Gt extends ke {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return he.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in n.attrs)
      r[i] = n.attrs[i];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return he.fromReplace(e, this.pos, this.pos + 1, new j(E.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return ze.empty;
  }
  invert(e) {
    return new Gt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Gt(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Gt(n.pos, n.attr, n.value);
  }
}
ke.jsonID("attr", Gt);
class kn extends ke {
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
    return he.ok(r);
  }
  getMap() {
    return ze.empty;
  }
  invert(e) {
    return new kn(this.attr, e.attrs[this.attr]);
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
    return new kn(n.attr, n.value);
  }
}
ke.jsonID("docAttr", kn);
let Xt = class extends Error {
};
Xt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Xt.prototype = Object.create(Error.prototype);
Xt.prototype.constructor = Xt;
Xt.prototype.name = "TransformError";
class Il {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new mr();
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
      throw new Xt(n.failed);
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
      r && (e = s.map(e, 1), n = s.map(n, -1)), s.forEach((i, o, l, a) => {
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
  replace(e, n = e, r = j.empty) {
    let s = Rr(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new j(E.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, j.empty);
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
    return Ku(this, e, n, r), this;
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
    return qu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Ju(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Iu(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return _u(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Du(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return zu(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return Pu(this, e, n, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Gt(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new kn(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new yt(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof ie)
      n.isInSet(r.marks) && this.step(new jt(e, n));
    else {
      let s = r.marks, i, o = [];
      for (; i = n.isInSet(s); )
        o.push(new jt(e, i)), s = i.removeFromSet(s);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
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
    return $u(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Tu(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Mu(this, e, n, r), this;
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
const ls = /* @__PURE__ */ Object.create(null);
class J {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Ol(e.min(n), e.max(n))];
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
  replace(e, n = j.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let i = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(i);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? j.empty : n), l == 0 && ro(e, i, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      let { $from: o, $to: l } = s[i], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      i ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), ro(e, r, n.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new K(e) : qt(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let i = e.depth - 1; i >= 0; i--) {
      let o = n < 0 ? qt(e.node(0), e.node(i), e.before(i + 1), e.index(i), n, r) : qt(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, n, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Pe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return qt(e, e, 0, 0, 1) || new Pe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return qt(e, e, e.content.size, e.childCount, -1) || new Pe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = ls[n.type];
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
    if (e in ls)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return ls[e] = n, n.prototype.jsonID = e, n;
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
    return K.between(this.$anchor, this.$head).getBookmark();
  }
}
J.prototype.visible = !0;
class Ol {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let to = !1;
function no(t) {
  !to && !t.parent.inlineContent && (to = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class K extends J {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    no(e), no(n), super(e, n);
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
      return J.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new K(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = j.empty) {
    if (super.replace(e, n), n == j.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof K && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ir(this.anchor, this.head);
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
    return new K(e.resolve(n.anchor), e.resolve(n.head));
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
      let i = J.findFrom(n, r, !0) || J.findFrom(n, -r, !0);
      if (i)
        n = i.$head;
      else
        return J.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (J.findFrom(e, -r, !0) || J.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new K(e, n);
  }
}
J.jsonID("text", K);
class Ir {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Ir(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return K.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class H extends J {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: s } = n.mapResult(this.anchor), i = e.resolve(s);
    return r ? J.near(i) : new H(i);
  }
  content() {
    return new j(E.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof H && e.anchor == this.anchor;
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
    return new H(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new H(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
H.prototype.visible = !1;
J.jsonID("node", H);
class Hs {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Ir(r, r) : new Hs(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && H.isSelectable(r) ? new H(n) : J.near(n);
  }
}
class Pe extends J {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = j.empty) {
    if (n == j.empty) {
      e.delete(0, e.doc.content.size);
      let r = J.atStart(e.doc);
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
    return new Pe(e);
  }
  map(e) {
    return new Pe(e);
  }
  eq(e) {
    return e instanceof Pe;
  }
  getBookmark() {
    return Gu;
  }
}
J.jsonID("all", Pe);
const Gu = {
  map() {
    return this;
  },
  resolve(t) {
    return new Pe(t);
  }
};
function qt(t, e, n, r, s, i = !1) {
  if (e.inlineContent)
    return K.create(t, n);
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && H.isSelectable(l))
        return H.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = qt(t, l, n + s, s < 0 ? l.childCount : 0, s, i);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function ro(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof ge || s instanceof ye))
    return;
  let i = t.mapping.maps[r], o;
  i.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), t.setSelection(J.near(t.doc.resolve(o), n));
}
function so(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Jn {
  constructor(e, n, r) {
    this.name = e, this.init = so(n.init, r), this.apply = so(n.apply, r);
  }
}
new Jn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Jn("selection", {
  init(t, e) {
    return t.selection || J.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Jn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new Jn("scrollToSelection", {
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
class rt {
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
const as = /* @__PURE__ */ Object.create(null);
function Dl(t) {
  return t in as ? t + "$" + ++as[t] : (as[t] = 0, t + "$");
}
class qe {
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
const Ws = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function zl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Ll = (t, e, n) => {
  let r = zl(t, n);
  if (!r)
    return !1;
  let s = Vs(r);
  if (!s) {
    let o = r.blockRange(), l = o && en(o);
    return l == null ? !1 : (e && e(t.tr.lift(o, l).scrollIntoView()), !0);
  }
  let i = s.nodeBefore;
  if (Ul(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(i, "end") || H.isSelectable(i)))
    for (let o = r.depth; ; o--) {
      let l = Rr(t.doc, r.before(o), r.after(o), j.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(Qt(i, "end") ? J.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : H.create(a.doc, s.pos - i.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - i.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Yu = (t, e, n) => {
  let r = zl(t, n);
  if (!r)
    return !1;
  let s = Vs(r);
  return s ? Pl(t, s, e) : !1;
}, Xu = (t, e, n) => {
  let r = Fl(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  return s ? Pl(t, s, e) : !1;
};
function Pl(t, e, n) {
  let r = e.nodeBefore, s = r, i = e.pos - 1;
  for (; !s.isTextblock; i--) {
    if (s.type.spec.isolating)
      return !1;
    let u = s.lastChild;
    if (!u)
      return !1;
    s = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = Rr(t.doc, i, a, j.empty);
  if (!c || c.from != i || c instanceof ge && c.slice.size >= a - i)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(K.create(u.doc, i)), n(u.scrollIntoView());
  }
  return !0;
}
function Qt(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const $l = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    i = Vs(r);
  }
  let o = i && i.nodeBefore;
  return !o || !H.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(H.create(t.doc, i.pos - o.nodeSize)).scrollIntoView()), !0);
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
function Fl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const _l = (t, e, n) => {
  let r = Fl(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  if (!s)
    return !1;
  let i = s.nodeAfter;
  if (Ul(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(i, "start") || H.isSelectable(i))) {
    let o = Rr(t.doc, r.before(), r.after(), j.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = t.tr.step(o);
        l.setSelection(Qt(i, "start") ? J.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : H.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, Bl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    i = Us(r);
  }
  let o = i && i.nodeAfter;
  return !o || !H.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(H.create(t.doc, i.pos)).scrollIntoView()), !0);
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
const Qu = (t, e) => {
  let n = t.selection, r = n instanceof H, s;
  if (r) {
    if (n.node.isTextblock || !Lt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Mr(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let i = t.tr.join(s);
    r && i.setSelection(H.create(i.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(i.scrollIntoView());
  }
  return !0;
}, Zu = (t, e) => {
  let n = t.selection, r;
  if (n instanceof H) {
    if (n.node.isTextblock || !Lt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Mr(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, ed = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), i = s && en(s);
  return i == null ? !1 : (e && e(t.tr.lift(s, i).scrollIntoView()), !0);
}, Hl = (t, e) => {
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
const td = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), i = n.indexAfter(-1), o = Ks(s.contentMatchAt(i));
  if (!o || !s.canReplaceWith(i, i, o))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(J.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Wl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof Pe || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let i = Ks(s.parent.contentMatchAt(s.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(o, i.createAndFill());
    l.setSelection(K.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Vl = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let i = n.before();
    if (ut(t.doc, i))
      return e && e(t.tr.split(i).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && en(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function nd(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof H && e.selection.node.isBlock)
      return !r.parentOffset || !ut(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let i = [], o, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Ks(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), i.unshift(a && l ? { type: l } : null), o = h;
        break;
      } else {
        if (h == 1)
          return !1;
        i.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof K || e.selection instanceof Pe) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = ut(u.doc, d, i.length, i);
    if (f || (i[0] = l ? { type: l } : null, f = ut(u.doc, d, i.length, i)), !f)
      return !1;
    if (u.split(d, i.length, i), !a && c && r.node(o).type != l) {
      let h = u.mapping.map(r.before(o)), m = u.doc.resolve(h);
      l && r.node(o - 1).canReplaceWith(m.index(), m.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const rd = nd(), sd = (t, e) => {
  let { $from: n, to: r } = t.selection, s, i = n.sharedDepth(r);
  return i == 0 ? !1 : (s = n.before(i), e && e(t.tr.setSelection(H.create(t.doc, s))), !0);
};
function id(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, i = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(i, i + 1) || !(s.isTextblock || Lt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Ul(t, e, n, r) {
  let s = e.nodeBefore, i = e.nodeAfter, o, l, a = s.type.spec.isolating || i.type.spec.isolating;
  if (!a && id(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = s.contentMatchAt(s.childCount)).findWrapping(i.type)) && l.matchType(o[0] || i.type).validEnd) {
    if (n) {
      let h = e.pos + i.nodeSize, m = E.empty;
      for (let b = o.length - 1; b >= 0; b--)
        m = E.from(o[b].create(null, m));
      m = E.from(s.copy(m));
      let g = t.tr.step(new ye(e.pos - 1, h, e.pos, h, new j(m, 1, 0), o.length, !0)), y = g.doc.resolve(h + 2 * o.length);
      y.nodeAfter && y.nodeAfter.type == s.type && Lt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = i.type.spec.isolating || r > 0 && a ? null : J.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && en(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Qt(i, "start", !0) && Qt(s, "end")) {
    let h = s, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = i, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let b = E.empty;
        for (let k = m.length - 1; k >= 0; k--)
          b = E.from(m[k].copy(b));
        let C = t.tr.step(new ye(e.pos - m.length, e.pos + i.nodeSize, e.pos + y, e.pos + i.nodeSize - y, new j(b, m.length, 0), 0, !0));
        n(C.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Kl(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, i = s.depth;
    for (; s.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return s.node(i).isTextblock ? (n && n(e.tr.setSelection(K.create(e.doc, t < 0 ? s.start(i) : s.end(i)))), !0) : !1;
  };
}
const od = Kl(-1), ld = Kl(1);
function ad(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: i } = n.selection, o = s.blockRange(i), l = o && Cl(o, t, e);
    return l ? (r && r(n.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function io(t, e = null) {
  return function(n, r) {
    let s = !1;
    for (let i = 0; i < n.selection.ranges.length && !s; i++) {
      let { $from: { pos: o }, $to: { pos: l } } = n.selection.ranges[i];
      n.doc.nodesBetween(o, l, (a, c) => {
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
      let i = n.tr;
      for (let o = 0; o < n.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[o];
        i.setBlockType(l, a, t, e);
      }
      r(i.scrollIntoView());
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
qs(Ws, Ll, $l);
qs(Ws, _l, Bl);
qs(Hl, Wl, Vl, rd);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function cd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: i } = n.selection, o = s.blockRange(i);
    if (!o)
      return !1;
    let l = r ? n.tr : null;
    return ud(l, o, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function ud(t, e, n, r = null) {
  let s = !1, i = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    i = new hr(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new hr(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = Cl(i, n, r, e);
  return l ? (t && dd(t, e, l, s, n), !0) : !1;
}
function dd(t, e, n, r, s) {
  let i = E.empty;
  for (let u = n.length - 1; u >= 0; u--)
    i = E.from(n[u].type.create(n[u].attrs, i));
  t.step(new ye(e.start - (r ? 2 : 0), e.end, e.start, e.end, new j(i, 0, 0), n.length, !0));
  let o = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (o = u + 1);
  let l = n.length - o, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && ut(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function fd(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == t);
    return i ? n ? r.node(i.depth - 1).type == t ? hd(e, n, t, i) : pd(e, n, i) : !0 : !1;
  };
}
function hd(t, e, n, r) {
  let s = t.tr, i = r.end, o = r.$to.end(r.depth);
  i < o && (s.step(new ye(i - 1, o, i, o, new j(E.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new hr(s.doc.resolve(r.$from.pos), s.doc.resolve(o), r.depth));
  const l = en(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(i, -1) - 1);
  return Lt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function pd(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= s.child(m).nodeSize, r.delete(h - 1, h + 1);
  let i = r.doc.resolve(n.start), o = i.nodeAfter;
  if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = i.node(-1), u = i.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? E.empty : E.from(s))))
    return !1;
  let d = i.pos, f = d + o.nodeSize;
  return r.step(new ye(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new j((l ? E.empty : E.from(s.copy(E.empty))).append(a ? E.empty : E.from(s.copy(E.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function md(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!i)
      return !1;
    let o = i.startIndex;
    if (o == 0)
      return !1;
    let l = i.parent, a = l.child(o - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, u = E.from(c ? t.create() : null), d = new j(E.from(t.create(null, E.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = i.start, h = i.end;
      n(e.tr.step(new ye(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Pt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, ql = function(t, e, n, r) {
  return n && (oo(t, e, n, r, -1) || oo(t, e, n, r, 1));
}, gd = /^(img|br|input|textarea|hr)$/i;
function oo(t, e, n, r, s) {
  for (var i; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : gr(t))) {
      let o = t.parentNode;
      if (!o || o.nodeType != 1 || Js(t) || gd.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Pt(t) + (s < 0 ? 0 : 1), t = o;
    } else if (t.nodeType == 1) {
      let o = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((i = o.pmViewDesc) === null || i === void 0) && i.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = o, e = s < 0 ? gr(t) : 0;
    } else
      return !1;
  }
}
function gr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function yd(t, e, n) {
  for (let r = e == 0, s = e == gr(t); r || s; ) {
    if (t == n)
      return !0;
    let i = Pt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && i == 0, s = s && i == gr(t);
  }
}
function Js(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Jl = function(t) {
  return t.focusNode && ql(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Gl(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const nt = typeof navigator < "u" ? navigator : null, lo = typeof document < "u" ? document : null, vt = nt && nt.userAgent || "", Es = /Edge\/(\d+)/.exec(vt), Yl = /MSIE \d/.exec(vt), Ns = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vt), jn = !!(Yl || Ns || Es), Xl = Yl ? document.documentMode : Ns ? +Ns[1] : Es ? +Es[1] : 0, Or = !jn && /gecko\/(\d+)/i.test(vt);
Or && +(/Firefox\/(\d+)/.exec(vt) || [0, 0])[1];
const Ts = !jn && /Chrome\/(\d+)/.exec(vt), dt = !!Ts, Ql = Ts ? +Ts[1] : 0, $t = !jn && !!nt && /Apple Computer/.test(nt.vendor), Gs = $t && (/Mobile\/\w+/.test(vt) || !!nt && nt.maxTouchPoints > 2), Be = Gs || (nt ? /Mac/.test(nt.platform) : !1), Zl = nt ? /Win/.test(nt.platform) : !1, Dn = /Android \d/.test(vt), Ys = !!lo && "webkitFontSmoothing" in lo.documentElement.style, bd = Ys ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function xd(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), i = s && s.size == 0, o = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Jl(n)) {
    for (a = o; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && H.isSelectable(d) && s.parent && !(d.isInline && yd(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new H(o == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let d = o, f = o;
      for (let h = 0; h < n.rangeCount; h++) {
        let m = n.getRangeAt(h);
        d = Math.min(d, t.docView.posFromDOM(m.startContainer, m.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(m.endContainer, m.endOffset, -1));
      }
      if (d < 0)
        return null;
      [a, o] = f == t.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(o);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let d = e == "pointer" || t.state.selection.head < l.pos && !i ? 1 : -1;
    c = ta(t, u, l, d);
  }
  return c;
}
function ea(t) {
  return t.editable ? t.hasFocus() : Cd(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Xs(t, e = !1) {
  let n = t.state.selection;
  if (Sd(t, n), !!ea(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && dt) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && ql(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      vd(t);
    else {
      let { anchor: r, head: s } = n, i, o;
      ao && !(n instanceof K) && (n.$from.parent.inlineContent || (i = co(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = co(t, n.to))), t.docView.setSelection(r, s, t, e), ao && (i && uo(i), o && uo(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && wd(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const ao = $t || dt && Ql < 63;
function co(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, i = r ? n.childNodes[r - 1] : null;
  if ($t && s && s.contentEditable == "false")
    return cs(s);
  if ((!s || s.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (s)
      return cs(s);
    if (i)
      return cs(i);
  }
}
function cs(t) {
  return t.contentEditable = "true", $t && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function uo(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function wd(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!ea(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function vd(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Pt(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && jn && Xl <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Sd(t, e) {
  if (e instanceof H) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (fo(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    fo(t);
}
function fo(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function ta(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || K.between(e, n, r);
}
function Cd(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Ms(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), i = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return i && J.findFrom(i, e);
}
function pt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function ho(t, e, n) {
  let r = t.state.selection;
  if (r instanceof K)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let o = t.state.doc.resolve(s.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return pt(t, new K(r.$anchor, o));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Ms(t.state, e);
        return s && s instanceof H ? pt(t, s) : !1;
      } else if (!(Be && n.indexOf("m") > -1)) {
        let s = r.$head, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, o;
        if (!i || i.isText)
          return !1;
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        return i.isAtom || (o = t.docView.descAt(l)) && !o.contentDOM ? H.isSelectable(i) ? pt(t, new H(e < 0 ? t.state.doc.resolve(s.pos - i.nodeSize) : s)) : Ys ? pt(t, new K(t.state.doc.resolve(e < 0 ? l : l + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof H && r.node.isInline)
      return pt(t, new K(e > 0 ? r.$to : r.$from));
    {
      let s = Ms(t.state, e);
      return s ? pt(t, s) : !1;
    }
  }
}
function yr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function wn(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Kt(t, e) {
  return e < 0 ? kd(t) : Ad(t);
}
function kd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, i, o = !1;
  for (Or && n.nodeType == 1 && r < yr(n) && wn(n.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (wn(l, -1))
          s = n, i = --r;
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
        for (; l && wn(l, -1); )
          s = n.parentNode, i = Pt(l), l = l.previousSibling;
        if (l)
          n = l, r = yr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Rs(t, n, r) : s && Rs(t, s, i);
}
function Ad(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = yr(n), i, o;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (wn(l, 1))
        i = n, o = ++r;
      else
        break;
    } else {
      if (na(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && wn(l, 1); )
          i = l.parentNode, o = Pt(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = yr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  i && Rs(t, i, o);
}
function na(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ed(t, e) {
  for (; t && e == t.childNodes.length && !Js(t); )
    e = Pt(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Nd(t, e) {
  for (; t && !e && !Js(t); )
    e = Pt(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Rs(t, e, n) {
  if (e.nodeType != 3) {
    let i, o;
    (o = Ed(e, n)) ? (e = o, n = 0) : (i = Nd(e, n)) && (e = i, n = i.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Jl(r)) {
    let i = document.createRange();
    i.setEnd(e, n), i.setStart(e, n), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Xs(t);
  }, 50);
}
function po(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(dt || Zl) && n.parent.inlineContent) {
    let s = t.coordsAtPos(e);
    if (e > n.start()) {
      let i = t.coordsAtPos(e - 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left < s.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let i = t.coordsAtPos(e + 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function mo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof K && !r.empty || n.indexOf("s") > -1 || Be && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: i } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Ms(t.state, e);
    if (o && o instanceof H)
      return pt(t, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : i, l = r instanceof Pe ? J.near(o, e) : J.findFrom(o, e);
    return l ? pt(t, l) : !1;
  }
  return !1;
}
function go(t, e) {
  if (!(t.state.selection instanceof K))
    return !0;
  let { $head: n, $anchor: r, empty: s } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!s)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (i && !i.isText) {
    let o = t.state.tr;
    return e < 0 ? o.delete(n.pos - i.nodeSize, n.pos) : o.delete(n.pos, n.pos + i.nodeSize), t.dispatch(o), !0;
  }
  return !1;
}
function yo(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Td(t) {
  if (!$t || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    yo(t, r, "true"), setTimeout(() => yo(t, r, "false"), 20);
  }
  return !1;
}
function Md(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Rd(t, e) {
  let n = e.keyCode, r = Md(e);
  if (n == 8 || Be && n == 72 && r == "c")
    return go(t, -1) || Kt(t, -1);
  if (n == 46 && !e.shiftKey || Be && n == 68 && r == "c")
    return go(t, 1) || Kt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Be && n == 66 && r == "c") {
    let s = n == 37 ? po(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return ho(t, s, r) || Kt(t, s);
  } else if (n == 39 || Be && n == 70 && r == "c") {
    let s = n == 39 ? po(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return ho(t, s, r) || Kt(t, s);
  } else {
    if (n == 38 || Be && n == 80 && r == "c")
      return mo(t, -1, r) || Kt(t, -1);
    if (n == 40 || Be && n == 78 && r == "c")
      return Td(t) || mo(t, 1, r) || Kt(t, 1);
    if (r == (Be ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ra(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: i } = e;
  for (; s > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, i--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = t.someProp("clipboardSerializer") || Tr.fromSchema(t.state.schema), l = ca(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
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
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${s} ${i}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function sa(t, e, n, r, s) {
  let i = s.parent.type.spec.code, o, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || i || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, i || r, t);
    }), i)
      return l = new j(E.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, m = Tr.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = o.appendChild(document.createElement("p"));
        g && y.appendChild(m.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), o = Dd(n), Ys && zd(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Mt.fromSchema(t.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Id.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Ld(bo(l, +u[1], +u[2]), u[4]);
  else if (l = j.maxOpen(Od(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = bo(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Id = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Od(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let s = e.node(n).contentMatchAt(e.index(n)), i, o = [];
    if (t.forEach((l) => {
      if (!o)
        return;
      let a = s.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && i.length && oa(a, i, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = la(o[o.length - 1], i.length));
        let u = ia(l, a);
        o.push(u), s = s.matchType(u.type), i = a;
      }
    }), o)
      return E.from(o);
  }
  return t;
}
function ia(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, E.from(t));
  return t;
}
function oa(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let i = oa(t, e, n, r.lastChild, s + 1);
    if (i)
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(E.from(ia(n, t, s + 1))));
  }
}
function la(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, la(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(E.empty, !0);
  return t.copy(n.append(r));
}
function Is(t, e, n, r, s, i) {
  let o = e < 0 ? t.firstChild : t.lastChild, l = o.content;
  return t.childCount > 1 && (i = 0), s < r - 1 && (l = Is(l, e, n, r, s + 1, i)), s >= n && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, i <= s).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(E.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, o.copy(l));
}
function bo(t, e, n) {
  return e < t.openStart && (t = new j(Is(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new j(Is(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
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
let xo = null;
function ca() {
  return xo || (xo = document.implementation.createHTMLDocument("title"));
}
let us = null;
function jd(t) {
  let e = window.trustedTypes;
  return e ? (us || (us = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), us.createHTML(t)) : t;
}
function Dd(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = ca().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && aa[r[1].toLowerCase()]) && (t = s.map((i) => "<" + i + ">").join("") + t + s.map((i) => "</" + i + ">").reverse().join("")), n.innerHTML = jd(t), s)
    for (let i = 0; i < s.length; i++)
      n = n.querySelector(s[i]) || n;
  return n;
}
function zd(t) {
  let e = t.querySelectorAll(dt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function Ld(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: s, openStart: i, openEnd: o } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    s = E.from(a.create(r[l + 1], s)), i++, o++;
  }
  return new j(s, i, o);
}
const Je = {}, $e = {};
function bt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
$e.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !da(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Dn && dt && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Gs && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Gl(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Rd(t, n) ? n.preventDefault() : bt(t, "key");
};
$e.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
$e.keypress = (t, e) => {
  let n = e;
  if (da(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Be && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof K) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), i = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (o) => o(t, r.$from.pos, r.$to.pos, s, i)) && t.dispatch(i()), n.preventDefault();
  }
};
function jr(t) {
  return { left: t.clientX, top: t.clientY };
}
function Pd(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Qs(t, e, n, r, s) {
  if (r == -1)
    return !1;
  let i = t.state.doc.resolve(r);
  for (let o = i.depth + 1; o > 0; o--)
    if (t.someProp(e, (l) => o > i.depth ? l(t, n, i.nodeAfter, i.before(o), s, !0) : l(t, n, i.node(o), i.before(o), s, !1)))
      return !0;
  return !1;
}
function Yt(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function $d(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && H.isSelectable(r) ? (Yt(t, new H(n)), !0) : !1;
}
function Fd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof H && (r = n.node);
  let i = t.state.doc.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if (H.isSelectable(l)) {
      r && n.$from.depth > 0 && o >= n.$from.depth && i.before(n.$from.depth + 1) == n.$from.pos ? s = i.before(n.$from.depth) : s = i.before(o);
      break;
    }
  }
  return s != null ? (Yt(t, H.create(t.state.doc, s)), !0) : !1;
}
function _d(t, e, n, r, s) {
  return Qs(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (i) => i(t, e, r)) || (s ? Fd(t, n) : $d(t, n));
}
function Bd(t, e, n, r) {
  return Qs(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function Hd(t, e, n, r) {
  return Qs(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || Wd(t, n, r);
}
function Wd(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Yt(t, K.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i), l = s.before(i);
    if (o.inlineContent)
      Yt(t, K.create(r, l + 1, l + 1 + o.content.size));
    else if (H.isSelectable(o))
      Yt(t, H.create(r, l));
    else
      continue;
    return !0;
  }
}
function Zs(t) {
  return br(t);
}
const ua = Be ? "metaKey" : "ctrlKey";
Je.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Zs(t), s = Date.now(), i = "singleClick";
  s - t.input.lastClick.time < 500 && Pd(n, t.input.lastClick) && !n[ua] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? i = "doubleClick" : t.input.lastClick.type == "doubleClick" && (i = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: i, button: n.button };
  let o = t.posAtCoords(jr(n));
  o && (i == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Vd(t, o, n, !!r)) : (i == "doubleClick" ? Bd : Hd)(t, o.pos, o.inside, n) ? n.preventDefault() : bt(t, "pointer"));
};
class Vd {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[ua], this.allowDefault = r.shiftKey;
    let i, o;
    if (n.inside > -1)
      i = e.state.doc.nodeAt(n.inside), o = n.inside;
    else {
      let u = e.state.doc.resolve(n.pos);
      i = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = s ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof H && c.from <= o && c.to > o) && (this.mightDrag = {
      node: i,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Or && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), bt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Xs(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(jr(e))), this.updateAllowDefault(e), this.allowDefault || !n ? bt(this.view, "pointer") : _d(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    $t && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    dt && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Yt(this.view, J.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : bt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), bt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Je.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Zs(t), bt(t, "pointer");
};
Je.touchmove = (t) => {
  t.input.lastTouch = Date.now(), bt(t, "pointer");
};
Je.contextmenu = (t) => Zs(t);
function da(t, e) {
  return t.composing ? !0 : $t && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const Ud = Dn ? 5e3 : -1;
$e.compositionstart = $e.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof K && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || dt && Zl && Kd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), br(t, !0), t.markCursor = null;
    else if (br(t, !e.selection.empty), Or && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let s = r.focusNode, i = r.focusOffset; s && s.nodeType == 1 && i != 0; ) {
        let o = i < 0 ? s.lastChild : s.childNodes[i - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          s = o, i = -1;
      }
    }
    t.input.composing = !0;
  }
  fa(t, Ud);
};
function Kd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
$e.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, fa(t, 20));
};
function fa(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => br(t), e));
}
function qd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Jd()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Jd() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function br(t, e = !1) {
  if (!(Dn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), qd(t), e || t.docView && t.docView.dirty) {
      let n = xd(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Gd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const An = jn && Xl < 15 || Gs && bd < 604;
Je.copy = $e.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let i = An ? null : n.clipboardData, o = r.content(), { dom: l, text: a } = ra(t, o);
  i ? (n.preventDefault(), i.clearData(), i.setData("text/html", l.innerHTML), i.setData("text/plain", a)) : Gd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Yd(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Xd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Os(t, r.value, null, s, e) : Os(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function Os(t, e, n, r, s) {
  let i = sa(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, i || j.empty)))
    return !0;
  if (!i)
    return !1;
  let o = Yd(i), l = o ? t.state.tr.replaceSelectionWith(o, r) : t.state.tr.replaceSelection(i);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function ha(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
$e.paste = (t, e) => {
  let n = e;
  if (t.composing && !Dn)
    return;
  let r = An ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Os(t, ha(r), r.getData("text/html"), s, n) ? n.preventDefault() : Xd(t, n);
};
class Qd {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const Zd = Be ? "altKey" : "ctrlKey";
function pa(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[Zd];
}
Je.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, i = s.empty ? null : t.posAtCoords(jr(n)), o;
  if (!(i && i.pos >= s.from && i.pos <= (s instanceof H ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      o = H.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (o = H.create(t.state.doc, d.posBefore));
    }
  }
  let l = (o || t.state.selection).content(), { dom: a, text: c, slice: u } = ra(t, l);
  (!n.dataTransfer.files.length || !dt || Ql > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(An ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", An || n.dataTransfer.setData("text/plain", c), t.dragging = new Qd(u, pa(t, n), o);
};
Je.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
$e.dragover = $e.dragenter = (t, e) => e.preventDefault();
$e.drop = (t, e) => {
  try {
    ef(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function ef(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(jr(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), i = n && n.slice;
  i ? t.someProp("transformPasted", (h) => {
    i = h(i, t, !1);
  }) : i = sa(t, ha(e.dataTransfer), An ? null : e.dataTransfer.getData("text/html"), !1, s);
  let o = !!(n && pa(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, i || j.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!i)
    return;
  e.preventDefault();
  let l = i ? Hu(t.state.doc, s.pos, i) : s.pos;
  l == null && (l = s.pos);
  let a = t.state.tr;
  if (o) {
    let { node: h } = n;
    h ? h.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), u = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1, d = a.doc;
  if (u ? a.replaceRangeWith(c, c, i.content.firstChild) : a.replaceRange(c, c, i), a.doc.eq(d))
    return;
  let f = a.doc.resolve(c);
  if (u && H.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild))
    a.setSelection(new H(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, y, b) => h = b), a.setSelection(ta(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Je.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Xs(t);
  }, 20));
};
Je.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Je.beforeinput = (t, e) => {
  if (dt && Dn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (i) => i(t, Gl(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in $e)
  Je[t] = $e[t];
function En(t, e) {
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
class xr {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Rt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: i, deleted: o } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return o ? null : new We(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof xr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && En(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class xt {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Rt;
  }
  map(e, n, r, s) {
    let i = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= o ? null : new We(i, o, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof xt && En(this.attrs, e.attrs) && En(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof xt;
  }
  destroy() {
  }
}
class ei {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Rt;
  }
  map(e, n, r, s) {
    let i = e.mapResult(n.from + s, 1);
    if (i.deleted)
      return null;
    let o = e.mapResult(n.to + s, -1);
    return o.deleted || o.pos <= i.pos ? null : new We(i.pos - r, o.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), i;
    return s == n.from && !(i = e.child(r)).isText && s + i.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof ei && En(this.attrs, e.attrs) && En(this.spec, e.spec);
  }
  destroy() {
  }
}
class We {
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
    return new We(e, n, this.type);
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
    return new We(e, e, new xr(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new We(e, n, new xt(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new We(e, n, new ei(r, s));
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
    return this.type instanceof xt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof xr;
  }
}
const Jt = [], Rt = {};
class de {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Jt, this.children = n.length ? n : Jt;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? wr(n, e, 0, Rt) : Me;
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
  findInner(e, n, r, s, i) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= n && l.to >= e && (!i || i(l.spec)) && r.push(l.copy(l.from + s, l.to + s));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < n && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, n - l, r, s + l, i);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Me || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Rt);
  }
  /**
  @internal
  */
  mapInner(e, n, r, s, i) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      a && a.type.valid(n, a) ? (o || (o = [])).push(a) : i.onRemove && i.onRemove(this.local[l].spec);
    }
    return this.children.length ? tf(this.children, o || [], e, n, r, s, i) : o ? new de(o.sort(It), Jt) : Me;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Me ? de.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, i = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = ga(n, l, c)) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a; )
          i += 3;
        s[i] == a ? s[i + 2] = s[i + 2].addInner(l, u, c + 1) : s.splice(i, 0, a, a + l.nodeSize, wr(u, l, c + 1, Rt)), i += 3;
      }
    });
    let o = ma(i ? ya(n) : n, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new de(o.length ? this.local.concat(o).sort(It) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Me ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, s = this.local;
    for (let i = 0; i < r.length; i += 3) {
      let o, l = r[i] + n, a = r[i + 1] + n;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (o || (o = [])).push(d));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[i + 2].removeInner(o, l + 1);
      c != Me ? r[i + 2] = c : (r.splice(i, 3), i -= 3);
    }
    if (s.length) {
      for (let i = 0, o; i < e.length; i++)
        if (o = e[i])
          for (let l = 0; l < s.length; l++)
            s[l].eq(o, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new de(s, r) : Me;
  }
  forChild(e, n) {
    if (this == Me)
      return this;
    if (n.isLeaf)
      return de.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1, o = i + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof xt) {
        let c = Math.max(i, a.from) - i, u = Math.min(o, a.to) - i;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new de(s.sort(It), Jt);
      return r ? new At([l, r]) : l;
    }
    return r || Me;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof de) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return ti(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Me)
      return Jt;
    if (e.inlineContent || !this.local.some(xt.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof xt || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
de.empty = new de([], []);
de.removeOverlap = ti;
const Me = de.empty;
class At {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, Rt));
    return At.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return de.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, n);
      i != Me && (i instanceof At ? r = r.concat(i.members) : r.push(i));
    }
    return At.from(r);
  }
  eq(e) {
    if (!(e instanceof At) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].localsInner(e);
      if (i.length)
        if (!n)
          n = i;
        else {
          r && (n = n.slice(), r = !1);
          for (let o = 0; o < i.length; o++)
            n.push(i[o]);
        }
    }
    return n ? ti(r ? n : n.sort(It)) : Jt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Me;
      case 1:
        return e[0];
      default:
        return new At(e.every((n) => n instanceof de) ? e : e.reduce((n, r) => n.concat(r instanceof de ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function tf(t, e, n, r, s, i, o) {
  let l = t.slice();
  for (let c = 0, u = i; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, m, g) => {
      let y = g - m - (h - f);
      for (let b = 0; b < l.length; b += 3) {
        let C = l[b + 1];
        if (C < 0 || f > C + u - d)
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
      let u = n.map(t[c] + i), d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + i, -1), h = f - s, { index: m, offset: g } = r.content.findIndex(d), y = r.maybeChild(m);
      if (y && g == d && g + y.nodeSize == h) {
        let b = l[c + 2].mapInner(n, y, u + 1, t[c] + i + 1, o);
        b != Me ? (l[c] = d, l[c + 1] = h, l[c + 2] = b) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = nf(l, t, e, n, s, i, o), u = wr(c, r, 0, o);
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
  return new de(e.sort(It), l);
}
function ma(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new We(s.from + e, s.to + e, s.type));
  }
  return n;
}
function nf(t, e, n, r, s, i, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, s, c);
      d ? n.push(d) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + i + 1);
  return n;
}
function ga(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let i = 0, o; i < t.length; i++)
    (o = t[i]) && o.from > n && o.to < r && ((s || (s = [])).push(o), t[i] = null);
  return s;
}
function ya(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function wr(t, e, n, r) {
  let s = [], i = !1;
  e.forEach((l, a) => {
    let c = ga(t, l, a + n);
    if (c) {
      i = !0;
      let u = wr(c, l, n + a + 1, r);
      u != Me && s.push(a, a + l.nodeSize, u);
    }
  });
  let o = ma(i ? ya(t) : t, -n).sort(It);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || s.length ? new de(o, s) : Me;
}
function It(t, e) {
  return t.from - e.from || t.to - e.to;
}
function ti(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          i.to != r.to && (e == t && (e = t.slice()), e[s] = i.copy(i.from, r.to), wo(e, s + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, i.from), wo(e, s, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function wo(t, e, n) {
  for (; e < t.length && It(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var wt = {
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
}, vr = {
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
}, rf = typeof navigator < "u" && /Mac/.test(navigator.platform), sf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var we = 0; we < 10; we++) wt[48 + we] = wt[96 + we] = String(we);
for (var we = 1; we <= 24; we++) wt[we + 111] = "F" + we;
for (var we = 65; we <= 90; we++)
  wt[we] = String.fromCharCode(we + 32), vr[we] = String.fromCharCode(we);
for (var ds in wt) vr.hasOwnProperty(ds) || (vr[ds] = wt[ds]);
function of(t) {
  var e = rf && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || sf && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? vr : wt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const lf = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), af = typeof navigator < "u" && /Win/.test(navigator.platform);
function cf(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      lf ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), o && (n = "Meta-" + n), i && (n = "Shift-" + n), n;
}
function uf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[cf(n)] = t[n];
  return e;
}
function fs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function df(t) {
  let e = uf(t);
  return function(n, r) {
    let s = of(r), i, o = e[fs(s, r)];
    if (o && o(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[fs(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(af && r.ctrlKey && r.altKey) && (i = wt[r.keyCode]) && i != s) {
        let l = e[fs(i, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var ff = Object.defineProperty, ni = (t, e) => {
  for (var n in e)
    ff(t, n, { get: e[n], enumerable: !0 });
};
function ba(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: s } = n, { storedMarks: i } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return i;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = n.selection, s = n.doc, i = n.storedMarks, n;
    }
  };
}
var hf = class {
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
    const { rawCommands: t, editor: e, state: n } = this, { view: r } = e, { tr: s } = n, i = this.buildProps(s);
    return Object.fromEntries(
      Object.entries(t).map(([o, l]) => [o, (...c) => {
        const u = l(...c)(i);
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
    const { rawCommands: n, editor: r, state: s } = this, { view: i } = r, o = [], l = !!t, a = t || s.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(a), o.every((d) => d === !0)), u = {
      ...Object.fromEntries(
        Object.entries(n).map(([d, f]) => [d, (...m) => {
          const g = this.buildProps(a, e), y = f(...m)(g);
          return o.push(y), u;
        }])
      ),
      run: c
    };
    return u;
  }
  createCan(t) {
    const { rawCommands: e, state: n } = this, r = !1, s = t || n.tr, i = this.buildProps(s, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...i, dispatch: void 0 })])
      ),
      chain: () => this.createChain(s, r)
    };
  }
  buildProps(t, e = !0) {
    const { rawCommands: n, editor: r, state: s } = this, { view: i } = r, o = {
      tr: t,
      editor: r,
      view: i,
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
          Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(o)])
        );
      }
    };
    return o;
  }
}, xa = {};
ni(xa, {
  blur: () => pf,
  clearContent: () => mf,
  clearNodes: () => gf,
  command: () => yf,
  createParagraphNear: () => bf,
  cut: () => xf,
  deleteCurrentNode: () => wf,
  deleteNode: () => vf,
  deleteRange: () => Sf,
  deleteSelection: () => Cf,
  enter: () => kf,
  exitCode: () => Af,
  extendMarkRange: () => Nf,
  first: () => Tf,
  focus: () => If,
  forEach: () => Of,
  insertContent: () => jf,
  insertContentAt: () => Lf,
  joinBackward: () => Ff,
  joinDown: () => $f,
  joinForward: () => _f,
  joinItemBackward: () => Bf,
  joinItemForward: () => Hf,
  joinTextblockBackward: () => Wf,
  joinTextblockForward: () => Vf,
  joinUp: () => Pf,
  keyboardShortcut: () => Kf,
  lift: () => qf,
  liftEmptyBlock: () => Jf,
  liftListItem: () => Gf,
  newlineInCode: () => Yf,
  resetAttributes: () => Xf,
  scrollIntoView: () => Qf,
  selectAll: () => Zf,
  selectNodeBackward: () => eh,
  selectNodeForward: () => th,
  selectParentNode: () => nh,
  selectTextblockEnd: () => rh,
  selectTextblockStart: () => sh,
  setContent: () => oh,
  setMark: () => bh,
  setMeta: () => xh,
  setNode: () => wh,
  setNodeSelection: () => vh,
  setTextDirection: () => Sh,
  setTextSelection: () => Ch,
  sinkListItem: () => kh,
  splitBlock: () => Ah,
  splitListItem: () => Eh,
  toggleList: () => Nh,
  toggleMark: () => Th,
  toggleNode: () => Mh,
  toggleWrap: () => Rh,
  undoInputRule: () => Ih,
  unsetAllMarks: () => Oh,
  unsetMark: () => jh,
  unsetTextDirection: () => Dh,
  updateAttributes: () => zh,
  wrapIn: () => Lh,
  wrapInList: () => Ph
});
var pf = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), mf = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), gf = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: i, $to: o }) => {
    t.doc.nodesBetween(i.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const m = en(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (m || m === 0) && e.lift(h, m);
    });
  }), !0;
}, yf = (t) => (e) => t(e), bf = () => ({ state: t, dispatch: e }) => Wl(t, e), xf = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, i = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const o = r.mapping.map(e);
  return r.insert(o, i.content), r.setSelection(new K(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, wf = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = t.selection.$anchor;
  for (let i = s.depth; i > 0; i -= 1)
    if (s.node(i).type === r.type) {
      if (e) {
        const l = s.before(i), a = s.after(i);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function Se(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var vf = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = Se(t, n.schema), i = e.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === s) {
      if (r) {
        const a = i.before(o), c = i.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Sf = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Cf = () => ({ state: t, dispatch: e }) => Ws(t, e), kf = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Af = () => ({ state: t, dispatch: e }) => td(t, e);
function Ef(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Sr(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : Ef(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function wa(t, e, n = {}) {
  return t.find((r) => r.type === e && Sr(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function vo(t, e, n = {}) {
  return !!wa(t, e, n);
}
function va(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !wa([...s.node.marks], e, n)))
    return;
  let o = s.index, l = t.start() + s.offset, a = o + 1, c = l + s.node.nodeSize;
  for (; o > 0 && vo([...t.parent.child(o - 1).marks], e, n); )
    o -= 1, l -= t.parent.child(o).nodeSize;
  for (; a < t.parent.childCount && vo([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function St(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var Nf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const i = St(t, r.schema), { doc: o, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = va(a, i, e);
    if (d && d.from <= c && d.to >= u) {
      const f = K.create(o, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Tf = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Sa(t) {
  return t instanceof K;
}
function Et(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Mf(t, e = null) {
  if (!e)
    return null;
  const n = J.atStart(t), r = J.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, i = r.to;
  return e === "all" ? K.create(t, Et(0, s, i), Et(t.content.size, s, i)) : K.create(t, Et(e, s, i), Et(e, s, i));
}
function So() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Cr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Rf() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var If = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: i }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Cr() || So()) && r.dom.focus(), Rf() && !Cr() && !So() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (i && t === null && !Sa(n.state.selection))
    return o(), !0;
  const l = Mf(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return i && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), o()), !0;
}, Of = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), jf = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), Ca = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Ca(r);
  }
  return t;
};
function Gn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ca(n);
}
function Nn(t, e, n) {
  if (t instanceof tt || t instanceof E)
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
      const o = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && o.check(), o;
    } catch (i) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", i), Nn("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new bu({
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
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? Mt.fromSchema(a).parseSlice(Gn(t), n.parseOptions) : Mt.fromSchema(a).parse(Gn(t), n.parseOptions), n.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const i = Mt.fromSchema(e);
    return n.slice ? i.parseSlice(Gn(t), n.parseOptions).content : i.parse(Gn(t), n.parseOptions);
  }
  return Nn("", e, n);
}
function Df(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof ge || s instanceof ye))
    return;
  const i = t.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), t.setSelection(J.near(t.doc.resolve(o), n));
}
var zf = (t) => !("type" in t), Lf = (t, e, n) => ({ tr: r, dispatch: s, editor: i }) => {
  var o;
  if (s) {
    n = {
      parseOptions: i.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const a = (y) => {
      i.emit("contentError", {
        editor: i,
        error: y,
        disableCollaboration: () => {
          "collaboration" in i.storage && typeof i.storage.collaboration == "object" && i.storage.collaboration && (i.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError)
      try {
        Nn(e, i.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = Nn(e, i.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = n.errorOnInvalidContent) != null ? o : i.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((zf(l) ? l : [l]).forEach((y) => {
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
      const y = r.doc.resolve(u), b = y.node(), C = y.parentOffset === 0, k = b.isText || b.isTextblock, w = b.content.size > 0;
      C && k && w && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && Df(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Pf = () => ({ state: t, dispatch: e }) => Qu(t, e), $f = () => ({ state: t, dispatch: e }) => Zu(t, e), Ff = () => ({ state: t, dispatch: e }) => Ll(t, e), _f = () => ({ state: t, dispatch: e }) => _l(t, e), Bf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mr(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Hf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mr(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Wf = () => ({ state: t, dispatch: e }) => Yu(t, e), Vf = () => ({ state: t, dispatch: e }) => Xu(t, e);
function ka() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Uf(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      Cr() || ka() ? o = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), i && (n = `Shift-${n}`), n;
}
var Kf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const i = Uf(t).split(/-(?!$)/), o = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
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
function ri(t, e, n = {}) {
  const { from: r, to: s, empty: i } = t.selection, o = e ? Se(e, t.schema) : null, l = [];
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
  const a = s - r, c = l.filter((d) => o ? o.name === d.node.type.name : !0).filter((d) => Sr(d.node.attrs, n, { strict: !1 }));
  return i ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var qf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return ri(n, s, e) ? ed(n, r) : !1;
}, Jf = () => ({ state: t, dispatch: e }) => Vl(t, e), Gf = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return fd(r)(e, n);
}, Yf = () => ({ state: t, dispatch: e }) => Hl(t, e);
function Aa(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Co(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var Xf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Aa(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (i = Se(t, r.schema)), l === "mark" && (o = St(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      i && i === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, Co(u.attrs, e))), o && u.marks.length && u.marks.forEach((f) => {
        o === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, o.create(Co(f.attrs, e))));
      });
    });
  }), a;
}, Qf = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Zf = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new Pe(t.doc);
    t.setSelection(n);
  }
  return !0;
}, eh = () => ({ state: t, dispatch: e }) => $l(t, e), th = () => ({ state: t, dispatch: e }) => Bl(t, e), nh = () => ({ state: t, dispatch: e }) => sd(t, e), rh = () => ({ state: t, dispatch: e }) => ld(t, e), sh = () => ({ state: t, dispatch: e }) => od(t, e);
function ih(t, e, n = {}, r = {}) {
  return Nn(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var oh = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: i, dispatch: o, commands: l }) => {
  const { doc: a } = i;
  if (r.preserveWhitespace !== "full") {
    const c = ih(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return o && i.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return o && i.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function lh(t, e) {
  const n = St(e, t.schema), { from: r, to: s, empty: i } = t.selection, o = [];
  i ? (t.storedMarks && o.push(...t.storedMarks), o.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function ah(t, e) {
  const n = new Il(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function ch(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Ea(t, e) {
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
function si(t) {
  return (e) => Ea(e.$from, t);
}
function Zt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? Zt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? Zt(t.parent, e, n) : null
  }) : t.config[e];
}
function uh(t) {
  return typeof t == "function";
}
function Tn(t, e = void 0, ...n) {
  return uh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Na(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function tn(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([s, i]) => {
      if (!r[s]) {
        r[s] = i;
        return;
      }
      if (s === "class") {
        const l = i ? String(i).split(" ") : [], a = r[s] ? r[s].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[s] = [...a, ...c].join(" ");
      } else if (s === "style") {
        const l = i ? i.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[s] ? r[s].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), l.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), r[s] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[s] = i;
    }), r;
  }, {});
}
function dh(t, e, n) {
  const { from: r, to: s } = e, { blockSeparator: i = `

`, textSerializers: o = {} } = n || {};
  let l = "";
  return t.nodesBetween(r, s, (a, c, u, d) => {
    var f;
    a.isBlock && c > r && (l += i);
    const h = o?.[a.type.name];
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
function fh(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function hh(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function ph(t) {
  const e = hh(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((i, o) => o !== r).some((i) => n.oldRange.from >= i.oldRange.from && n.oldRange.to <= i.oldRange.to && n.newRange.from >= i.newRange.from && n.newRange.to <= i.newRange.to));
}
function mh(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((s, i) => {
    const o = [];
    if (s.ranges.length)
      s.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[i];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(i).map(l, -1), u = e.slice(i).map(a), d = e.invert().map(c, -1), f = e.invert().map(u);
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
  }), ph(r);
}
function or(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((i) => i.type === e && i.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function gh(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, i = e ? St(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => i ? i.name === d.type.name : !0).find((d) => Sr(d.attrs, n, { strict: !1 }));
  let o = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const b = Math.max(h, y), C = Math.min(m, y + g.nodeSize), k = C - b;
      o += k, l.push(
        ...g.marks.map((w) => ({
          mark: w,
          from: b,
          to: C
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((d) => i ? i.name === d.mark.type.name : !0).filter((d) => Sr(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => i ? d.mark.type !== i && d.mark.type.excludes(i) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function ko(t, e) {
  const { nodeExtensions: n } = Na(e), r = n.find((o) => o.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, i = Tn(Zt(r, "group", s));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
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
    return t.content.forEach((i) => {
      s !== !1 && (Ta(i, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function yh(t, e, n) {
  var r;
  const { selection: s } = e;
  let i = null;
  if (Sa(s) && (i = s.$cursor), i) {
    const l = (r = t.storedMarks) != null ? r : i.marks();
    return i.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((c) => c.type.excludes(n)));
  }
  const { ranges: o } = s;
  return o.some(({ $from: l, $to: a }) => {
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
var bh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: i } = n, { empty: o, ranges: l } = i, a = St(t, r.schema);
  if (s)
    if (o) {
      const c = lh(r, a);
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
  return yh(r, n, a);
}, xh = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), wh = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const i = Se(t, n.schema);
  let o;
  return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), i.isTextblock ? s().command(({ commands: l }) => io(i, { ...o, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => io(i, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, vh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = Et(t, 0, r.content.size), i = H.create(r, s);
    e.setSelection(i);
  }
  return !0;
}, Sh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: i } = r;
  let o, l;
  return typeof e == "number" ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = e.from, l = e.to) : (o = i.from, l = i.to), s && n.doc.nodesBetween(o, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Ch = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: i } = typeof t == "number" ? { from: t, to: t } : t, o = K.atStart(r).from, l = K.atEnd(r).to, a = Et(s, o, l), c = Et(i, o, l), u = K.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, kh = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return md(r)(e, n);
};
function Ao(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Ah = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: i, doc: o } = e, { $from: l, $to: a } = i, c = s.extensionManager.attributes, u = or(c, l.node().type.name, l.node().attrs);
  if (i instanceof H && i.node.isBlock)
    return !l.parentOffset || !ut(o, l.pos) ? !1 : (r && (t && Ao(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : ch(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = ut(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !m && ut(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (i instanceof K && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && Ao(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, Eh = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: i }) => {
  var o;
  const l = Se(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const d = a.node(-1);
  if (d.type !== l)
    return !1;
  const f = i.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (s) {
      let b = E.empty;
      const C = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let U = a.depth - C; U >= a.depth - 3; U -= 1)
        b = E.from(a.node(U).copy(b));
      const k = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), w = {
        ...or(f, a.node().type.name, a.node().attrs),
        ...e
      }, v = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(w)) || void 0;
      b = b.append(E.from(l.createAndFill(null, v) || void 0));
      const T = a.before(a.depth - (C - 1));
      n.replace(T, a.after(-k), new j(b, 4 - C, 0));
      let O = -1;
      n.doc.nodesBetween(T, n.doc.content.size, (U, $) => {
        if (O > -1)
          return !1;
        U.isTextblock && U.content.size === 0 && (O = $ + 1);
      }), O > -1 && n.setSelection(K.near(n.doc.resolve(O))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, m = {
    ...or(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...or(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: m }];
  if (!ut(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: C } = r, { splittableMarks: k } = i.extensionManager, w = C || b.$to.parentOffset && b.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !w || !s)
      return !0;
    const v = w.filter((T) => k.includes(T.type.name));
    n.ensureMarks(v);
  }
  return !0;
}, hs = (t, e) => {
  const n = si((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, n.pos) && t.join(n.pos), !0;
}, ps = (t, e) => {
  const n = si((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, r) && t.join(r), !0;
}, Nh = (t, e, n, r = {}) => ({ editor: s, tr: i, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = Se(t, o.schema), m = Se(e, o.schema), { selection: g, storedMarks: y } = o, { $from: b, $to: C } = g, k = b.blockRange(C), w = y || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const v = si((T) => ko(T.type.name, d))(g);
  if (k.depth >= 1 && v && k.depth - v.depth <= 1) {
    if (v.node.type === h)
      return c.liftListItem(m);
    if (ko(v.node.type.name, d) && h.validContent(v.node.content) && l)
      return a().command(() => (i.setNodeMarkup(v.pos, h), !0)).command(() => hs(i, h)).command(() => ps(i, h)).run();
  }
  return !n || !w || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => hs(i, h)).command(() => ps(i, h)).run() : a().command(() => {
    const T = u().wrapInList(h, r), O = w.filter((U) => f.includes(U.type.name));
    return i.ensureMarks(O), T ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => hs(i, h)).command(() => ps(i, h)).run();
}, Th = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: i = !1 } = n, o = St(t, r.schema);
  return gh(r, o, e) ? s.unsetMark(o, { extendEmptyMarkRange: i }) : s.setMark(o, e);
}, Mh = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const i = Se(t, r.schema), o = Se(e, r.schema), l = ri(r, i, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(o, a) : s.setNode(i, { ...a, ...n });
}, Rh = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = Se(t, n.schema);
  return ri(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Ih = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const s = n[r];
    let i;
    if (s.spec.isInputRules && (i = s.getState(t))) {
      if (e) {
        const o = t.tr, l = i.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (i.text) {
          const a = o.doc.resolve(i.from).marks();
          o.replaceWith(i.from, i.to, t.schema.text(i.text, a));
        } else
          o.delete(i.from, i.to);
      }
      return !0;
    }
  }
  return !1;
}, Oh = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((i) => {
    t.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, jh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var i;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = n, a = St(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && o) {
    let { from: f, to: h } = l;
    const m = (i = c.marks().find((y) => y.type === a)) == null ? void 0 : i.attrs, g = va(c, a, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Dh = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let i, o;
  return typeof t == "number" ? (i = t, o = t) : t && "from" in t && "to" in t ? (i = t.from, o = t.to) : (i = s.from, o = s.to), r && e.doc.nodesBetween(i, o, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, zh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Aa(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (i = Se(t, r.schema)), l === "mark" && (o = St(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, m, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (y, b) => {
      i && i === y.type && (a = !0, m = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y);
    }) : r.doc.nodesBetween(u, d, (y, b) => {
      b < u && i && i === y.type && (a = !0, m = Math.max(b, u), g = Math.min(b + y.nodeSize, d), f = b, h = y), b >= u && b <= d && (i && i === y.type && (a = !0, s && n.setNodeMarkup(b, void 0, {
        ...y.attrs,
        ...e
      })), o && y.marks.length && y.marks.forEach((C) => {
        if (o === C.type && (a = !0, s)) {
          const k = Math.max(b, u), w = Math.min(b + y.nodeSize, d);
          n.addMark(
            k,
            w,
            o.create({
              ...C.attrs,
              ...e
            })
          );
        }
      }));
    }), h && (f !== void 0 && s && n.setNodeMarkup(f, void 0, {
      ...h.attrs,
      ...e
    }), o && h.marks.length && h.marks.forEach((y) => {
      o === y.type && s && n.addMark(
        m,
        g,
        o.create({
          ...y.attrs,
          ...e
        })
      );
    }));
  }), a;
}, Lh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return ad(s, e)(n, r);
}, Ph = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return cd(s, e)(n, r);
}, $h = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function Fh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Yn(t) {
  return Fh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Ma(t, e) {
  const n = { ...t };
  return Yn(t) && Yn(e) && Object.keys(e).forEach((r) => {
    Yn(e[r]) && Yn(t[r]) ? n[r] = Ma(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var ii = class {
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
      ...Tn(
        Zt(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...Tn(
        Zt(this, "addStorage", {
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
}, _h = class Ra extends ii {
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
      const o = s.marks();
      if (!!!o.find((c) => c?.type.name === n.name))
        return !1;
      const a = o.find((c) => c?.type.name === n.name);
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
}, Bh = {};
ni(Bh, {
  ClipboardTextSerializer: () => Hh,
  Commands: () => Wh,
  Delete: () => Vh,
  Drop: () => Uh,
  Editable: () => Kh,
  FocusEvents: () => qh,
  Keymap: () => Jh,
  Paste: () => Gh,
  Tabindex: () => Yh,
  TextDirection: () => Xh,
  focusEventsPluginKey: () => Oa
});
var Ge = class Ia extends ii {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Ia(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Hh = Ge.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new rt({
        key: new qe("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: i } = s, o = Math.min(...i.map((u) => u.$from.pos)), l = Math.max(...i.map((u) => u.$to.pos)), a = fh(n);
            return dh(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Wh = Ge.create({
  name: "commands",
  addCommands() {
    return {
      ...xa
    };
  }
}), Vh = Ge.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const i = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = ah(t.before, [t, ...e]);
      mh(u).forEach((h) => {
        u.mapping.mapResult(h.oldRange.from).deletedAfter && u.mapping.mapResult(h.oldRange.to).deletedBefore && u.before.nodesBetween(h.oldRange.from, h.oldRange.to, (m, g) => {
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
        });
      });
      const f = u.mapping;
      u.steps.forEach((h, m) => {
        var g, y;
        if (h instanceof Ke) {
          const b = f.slice(m).map(h.from, -1), C = f.slice(m).map(h.to), k = f.invert().map(b, -1), w = f.invert().map(C), v = (g = u.doc.nodeAt(b - 1)) == null ? void 0 : g.marks.some((O) => O.eq(h.mark)), T = (y = u.doc.nodeAt(C)) == null ? void 0 : y.marks.some((O) => O.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: k,
              to: w
            },
            newRange: {
              from: b,
              to: C
            },
            partial: !!(T || v),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(i, 0) : i();
  }
}), Uh = Ge.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new rt({
        key: new qe("tiptapDrop"),
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
}), Kh = Ge.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new rt({
        key: new qe("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Oa = new qe("focusEvents"), qh = Ge.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new rt({
        key: Oa,
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
}), Jh = Ge.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, m = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = m.parent.type.spec.isolating, y = d.pos - d.parentOffset, b = g && m.parent.childCount === 1 ? y === d.pos : J.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !b || b && d.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
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
    }, i = {
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
    return Cr() || ka() ? i : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new rt({
        key: new qe("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: i, from: o, to: l } = e.selection, a = J.atStart(e.doc).from, c = J.atEnd(e.doc).to;
          if (i || !(o === a && l === c) || !Ta(n.doc))
            return;
          const f = n.tr, h = ba({
            state: n,
            transaction: f
          }), { commands: m } = new hf({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Gh = Ge.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new rt({
        key: new qe("tiptapPaste"),
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
}), Yh = Ge.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new rt({
        key: new qe("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Xh = Ge.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Na(this.extensions);
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
      new rt({
        key: new qe("textDirection"),
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
function Qh(t) {
  return new $h({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Tn(t.getAttributes, void 0, r) || {}, { tr: i } = e, o = n.from;
      let l = n.to;
      const a = t.type.create(s);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        i.insertText(d, o + r[0].length - 1), i.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? o : o - 1;
        i.insert(c, t.type.create(s)).delete(i.mapping.map(o), i.mapping.map(l));
      }
      i.scrollIntoView();
    },
    undoable: t.undoable
  });
}
var Zh = (t) => "touches" in t, ep = class {
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
    var e, n, r, s, i, o;
    this.node = t.node, this.editor = t.editor, this.element = t.element, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = {
      ...this.minSize,
      ...t.options.min
    }), (n = t.options) != null && n.max && (this.maxSize = t.options.max), (r = t?.options) != null && r.directions && (this.directions = t.options.directions), (s = t.options) != null && s.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), (i = t.options) != null && i.className && (this.classNames = {
      container: t.options.className.container || "",
      wrapper: t.options.className.wrapper || "",
      handle: t.options.className.handle || "",
      resizing: t.options.className.resizing || ""
    }), (o = t.options) != null && o.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
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
    const n = e.includes("top"), r = e.includes("bottom"), s = e.includes("left"), i = e.includes("right");
    n && (t.style.top = "0"), r && (t.style.bottom = "0"), s && (t.style.left = "0"), i && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0");
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Zh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(t, e) {
    if (!this.activeHandle)
      return;
    const n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: r, height: s } = this.calculateNewDimensions(this.activeHandle, t, e), i = this.applyConstraints(r, s, n);
    this.element.style.width = `${i.width}px`, this.element.style.height = `${i.height}px`, this.onResize && this.onResize(i.width, i.height);
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
    const i = t.includes("right"), o = t.includes("left"), l = t.includes("bottom"), a = t.includes("top");
    return i ? r = this.startWidth + e : o && (r = this.startWidth - e), l ? s = this.startHeight + n : a && (s = this.startHeight - n), (t === "right" || t === "left") && (r = this.startWidth + (i ? e : -e)), (t === "top" || t === "bottom") && (s = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, s, t) : { width: r, height: s };
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
    var r, s, i, o;
    if (!n) {
      let c = Math.max(this.minSize.width, t), u = Math.max(this.minSize.height, e);
      return (r = this.maxSize) != null && r.width && (c = Math.min(this.maxSize.width, c)), (s = this.maxSize) != null && s.height && (u = Math.min(this.maxSize.height, u)), { width: c, height: u };
    }
    let l = t, a = e;
    return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), (i = this.maxSize) != null && i.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), (o = this.maxSize) != null && o.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), { width: l, height: a };
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
}, tp = {};
ni(tp, {
  createAtomBlockMarkdownSpec: () => np,
  createBlockMarkdownSpec: () => rp,
  createInlineMarkdownSpec: () => op,
  parseAttributes: () => oi,
  parseIndentedBlocks: () => lp,
  renderNestedMarkdownContent: () => ap,
  serializeAttributes: () => li
});
function oi(t) {
  if (!t?.trim())
    return {};
  const e = {}, n = [], r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)), s = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (s) {
    const c = s.map((u) => u.trim().slice(1));
    e.class = c.join(" ");
  }
  const i = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  i && (e.id = i[1]);
  const o = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(o)).forEach(([, c, u]) => {
    var d;
    const f = parseInt(((d = u.match(/__QUOTED_(\d+)__/)) == null ? void 0 : d[1]) || "0", 10), h = n[f];
    h && (e[c] = h.slice(1, -1));
  });
  const a = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((u) => {
    u.match(/^[a-zA-Z][\w-]*$/) && (e[u] = !0);
  }), e;
}
function li(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function np(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = oi,
    serializeAttributes: s = li,
    defaultAttributes: i = {},
    requiredAttributes: o = [],
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
      const f = { ...i, ...u.attributes };
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
        if (!o.find((C) => !(C in y)))
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
function rp(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = oi,
    serializeAttributes: i = li,
    defaultAttributes: o = {},
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
      const m = { ...o, ...d.attributes };
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
        const [b, C = ""] = y, k = s(C);
        let w = 1;
        const v = b.length;
        let T = "";
        const O = /^:::([\w-]*)(\s.*)?/gm, U = d.slice(v);
        for (O.lastIndex = 0; ; ) {
          const $ = O.exec(U);
          if ($ === null)
            break;
          const W = $.index, S = $[1];
          if (!((m = $[2]) != null && m.endsWith(":::"))) {
            if (S)
              w += 1;
            else if (w -= 1, w === 0) {
              const ce = U.slice(0, W);
              T = ce.trim();
              const F = d.slice(0, v + W + $[0].length);
              let q = [];
              if (T)
                if (l === "block")
                  for (q = h.blockTokens(ce), q.forEach((Q) => {
                    Q.text && (!Q.tokens || Q.tokens.length === 0) && (Q.tokens = h.inlineTokens(Q.text));
                  }); q.length > 0; ) {
                    const Q = q[q.length - 1];
                    if (Q.type === "paragraph" && (!Q.text || Q.text.trim() === ""))
                      q.pop();
                    else
                      break;
                  }
                else
                  q = h.inlineTokens(T);
              return {
                type: e,
                raw: F,
                attributes: k,
                content: T,
                tokens: q
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d, f) => {
      const h = u(d.attrs || {}), m = i(h), g = m ? ` {${m}}` : "", y = f.renderChildren(d.content || [], `

`);
      return `:::${c}${g}

${y}

:::`;
    }
  };
}
function sp(t) {
  if (!t.trim())
    return {};
  const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(t);
  for (; r !== null; ) {
    const [, s, i, o] = r;
    e[s] = i || o, r = n.exec(t);
  }
  return e;
}
function ip(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function op(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = sp,
    serializeAttributes: i = ip,
    defaultAttributes: o = {},
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
      const m = { ...o, ...f.attributes };
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
        let b = "", C = "";
        if (l) {
          const [, w] = y;
          C = w;
        } else {
          const [, w, v] = y;
          C = w, b = v || "";
        }
        const k = s(C.trim());
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
      const m = u(f.attrs || {}), g = i(m), y = g ? ` ${g}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${h}[/${c}]`;
    }
  };
}
function lp(t, e, n) {
  var r, s, i, o;
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
      const v = l[u];
      if (v.trim() === "") {
        const O = l.slice(u + 1).findIndex((W) => W.trim() !== "");
        if (O === -1)
          break;
        if ((((s = (r = l[u + 1 + O].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          b.push(v), c = `${c}${v}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((o = (i = v.match(/^(\s*)/)) == null ? void 0 : i[1]) == null ? void 0 : o.length) || 0) > g)
        b.push(v), c = `${c}${v}
`, u += 1;
      else
        break;
    }
    let C;
    const k = b.slice(1);
    if (k.length > 0) {
      const v = k.map((T) => T.slice(g + d)).join(`
`);
      v.trim() && (e.customNestedParser ? C = e.customNestedParser(v) : C = n.blockTokens(v));
    }
    const w = e.createToken(m, C);
    a.push(w);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function ap(t, e, n, r) {
  if (!t || !Array.isArray(t.content))
    return "";
  const s = typeof n == "function" ? n(r) : n, [i, ...o] = t.content, l = e.renderChildren([i]), a = [`${s}${l}`];
  return o && o.length > 0 && o.forEach((c) => {
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
var zn = class ja extends ii {
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
}, cp = _h.create({
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
    return ["u", tn(this.options.HTMLAttributes, t), 0];
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
      const i = s[2].trim();
      return {
        type: "underline",
        raw: s[0],
        text: i,
        tokens: n.inlineTokens(i)
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
}), up = cp, dp = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, fp = zn.create({
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
    return ["img", tn(this.options.HTMLAttributes, t)];
  },
  parseMarkdown: (t, e) => e.createNode("image", {
    src: t.href,
    title: t.title,
    alt: t.text
  }),
  renderMarkdown: (t) => {
    var e, n, r, s, i, o;
    const l = (n = (e = t.attrs) == null ? void 0 : e.src) != null ? n : "", a = (s = (r = t.attrs) == null ? void 0 : r.alt) != null ? s : "", c = (o = (i = t.attrs) == null ? void 0 : i.title) != null ? o : "";
    return c ? `![${a}](${l} "${c}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize;
    return ({ node: s, getPos: i, HTMLAttributes: o, editor: l }) => {
      const a = document.createElement("img");
      Object.entries(o).forEach(([d, f]) => {
        if (f != null)
          switch (d) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(d, f);
              break;
          }
      }), a.src = o.src;
      const c = new ep({
        element: a,
        editor: l,
        node: s,
        getPos: i,
        onResize: (d, f) => {
          a.style.width = `${d}px`, a.style.height = `${f}px`;
        },
        onCommit: (d, f) => {
          const h = i();
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
      Qh({
        find: dp,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), hp = fp;
let js, Ds;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  js = (e) => t.get(e), Ds = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  js = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, Ds = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var ae = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, s = e / this.width | 0;
      let i = r + 1, o = s + 1;
      for (let l = 1; i < this.width && this.map[e + l] == n; l++) i++;
      for (let l = 1; o < this.height && this.map[e + this.width * l] == n; l++) o++;
      return {
        left: r,
        top: s,
        right: i,
        bottom: o
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: r, right: s, top: i, bottom: o } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : s == this.width) ? null : this.map[i * this.width + (n < 0 ? r - 1 : s)] : (n < 0 ? i == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? i - 1 : o)];
  }
  rectBetween(t, e) {
    const { left: n, right: r, top: s, bottom: i } = this.findCell(t), { left: o, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, o),
      top: Math.min(s, a),
      right: Math.max(r, l),
      bottom: Math.max(i, c)
    };
  }
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++) for (let s = t.left; s < t.right; s++) {
      const i = r * this.width + s, o = this.map[i];
      n[o] || (n[o] = !0, !(s == t.left && s && this.map[i - 1] == o || r == t.top && r && this.map[i - this.width] == o) && e.push(o));
    }
    return e;
  }
  positionAt(t, e, n) {
    for (let r = 0, s = 0; ; r++) {
      const i = s + n.child(r).nodeSize;
      if (r == t) {
        let o = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; o < l && this.map[o] < s; ) o++;
        return o == l ? i - 1 : this.map[o];
      }
      s = i;
    }
  }
  static get(t) {
    return js(t) || Ds(t, pp(t));
  }
};
function pp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = mp(t), n = t.childCount, r = [];
  let s = 0, i = null;
  const o = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let m = 0; ; m++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (m == d.childCount) break;
      const g = d.child(m), { colspan: y, rowspan: b, colwidth: C } = g.attrs;
      for (let k = 0; k < b; k++) {
        if (k + c >= n) {
          (i || (i = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - k
          });
          break;
        }
        const w = s + k * e;
        for (let v = 0; v < y; v++) {
          r[w + v] == 0 ? r[w + v] = u : (i || (i = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - v
          });
          const T = C && C[v];
          if (T) {
            const O = (w + v) % e * 2, U = o[O];
            U == null || U != T && o[O + 1] == 1 ? (o[O] = T, o[O + 1] = 1) : U == T && o[O + 1]++;
          }
        }
      }
      s += y, u += g.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; s < f; ) r[s++] == 0 && h++;
    h && (i || (i = [])).push({
      type: "missing",
      row: c,
      n: h
    }), u++;
  }
  (e === 0 || n === 0) && (i || (i = [])).push({ type: "zero_sized" });
  const l = new ae(e, n, r, i);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2) o[c] != null && o[c + 1] < n && (a = !0);
  return a && gp(l, o, t), l;
}
function mp(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const s = t.child(r);
    let i = 0;
    if (n) for (let o = 0; o < r; o++) {
      const l = t.child(o);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        o + c.attrs.rowspan > r && (i += c.attrs.colspan);
      }
    }
    for (let o = 0; o < s.childCount; o++) {
      const l = s.child(o);
      i += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = i : e != i && (e = Math.max(e, i));
  }
  return e;
}
function gp(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let s = 0; s < t.map.length; s++) {
    const i = t.map[s];
    if (r[i]) continue;
    r[i] = !0;
    const o = n.nodeAt(i);
    if (!o) throw new RangeError(`No cell with offset ${i} found`);
    let l = null;
    const a = o.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = e[(s + c) % t.width * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = yp(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: i,
      colwidth: l
    });
  }
}
function yp(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Ce(t) {
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
const mt = new qe("selectingCells");
function Dt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function bp(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function Ye(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Dr(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = Dt(e.$head) || xp(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function xp(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function zs(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function wp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ai(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Da(t, e, n) {
  const r = t.node(-1), s = ae.get(r), i = t.start(-1), o = s.nextCell(t.pos - i, e, n);
  return o == null ? null : t.node(0).resolve(i + o);
}
function zt(t, e, n = 1) {
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
function vp(t, e, n) {
  const r = Ce(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var ne = class at extends J {
  constructor(e, n = e) {
    const r = e.node(-1), s = ae.get(r), i = e.start(-1), o = s.rectBetween(e.pos - i, n.pos - i), l = e.node(0), a = s.cellsInRect(o).filter((u) => u != n.pos - i);
    a.unshift(n.pos - i);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = i + u + 1;
      return new Ol(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (zs(r) && zs(s) && ai(r, s)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection() ? at.rowSelection(r, s) : i && this.isColSelection() ? at.colSelection(r, s) : new at(r, s);
    }
    return K.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = ae.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), i = {}, o = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = n.map[u];
        if (i[f]) continue;
        i[f] = !0;
        const h = n.findCell(f);
        let m = e.nodeAt(f);
        if (!m) throw new RangeError(`No cell with offset ${f} found`);
        const g = s.left - h.left, y = h.right - s.right;
        if (g > 0 || y > 0) {
          let b = m.attrs;
          if (g > 0 && (b = zt(b, 0, g)), y > 0 && (b = zt(b, b.colspan - y, y)), h.left < s.left) {
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
      o.push(e.child(a).copy(E.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : o;
    return new j(E.from(l), 1, 1);
  }
  replace(e, n = j.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: l, $to: a } = s[o], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), o ? j.empty : n);
    }
    const i = J.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    i && e.setSelection(i);
  }
  replaceWith(e, n) {
    this.replace(e, new j(E.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ae.get(n), s = this.$anchorCell.start(-1), i = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let o = 0; o < i.length; o++) e(n.nodeAt(i[o]), s + i[o]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = ae.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(n.pos - i), a = e.node(0);
    return o.top <= l.top ? (o.top > 0 && (e = a.resolve(i + s.map[o.left])), l.bottom < s.height && (n = a.resolve(i + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(i + s.map[l.left])), o.bottom < s.height && (e = a.resolve(i + s.map[s.width * (s.height - 1) + o.right - 1]))), new at(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ae.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), i = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, i) > 0) return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan, l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == n.width;
  }
  eq(e) {
    return e instanceof at && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = ae.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(n.pos - i), a = e.node(0);
    return o.left <= l.left ? (o.left > 0 && (e = a.resolve(i + s.map[o.top * s.width])), l.right < s.width && (n = a.resolve(i + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(i + s.map[l.top * s.width])), o.right < s.width && (e = a.resolve(i + s.map[s.width * (o.top + 1) - 1]))), new at(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new at(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new at(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new Sp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
ne.prototype.visible = !1;
J.jsonID("cell", ne);
var Sp = class La {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new La(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && ai(n, r) ? new ne(n, r) : J.near(r, 1);
  }
};
function Cp(t) {
  if (!(t.selection instanceof ne)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(We.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), de.create(t.doc, e);
}
function kp({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function Ap({ $from: t, $to: e }) {
  let n, r;
  for (let s = t.depth; s > 0; s--) {
    const i = t.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      n = i;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const i = e.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      r = i;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function Ep(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let i, o;
  if (r instanceof H && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell") i = ne.create(s, r.from);
    else if (o == "row") {
      const l = s.resolve(r.from + 1);
      i = ne.rowSelection(l, l);
    } else if (!n) {
      const l = ae.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      i = ne.create(s, a + 1, c);
    }
  } else r instanceof K && kp(r) ? i = K.create(s, r.from) : r instanceof K && Ap(r) && (i = K.create(s, r.$from.start(), r.$from.end()));
  return i && (e || (e = t.tr)).setSelection(i), e;
}
const Np = new qe("fix-tables");
function Pa(t, e, n, r) {
  const s = t.childCount, i = e.childCount;
  e: for (let o = 0, l = 0; o < i; o++) {
    const a = e.child(o);
    for (let c = l, u = Math.min(s, o + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? Pa(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function $a(t, e) {
  let n;
  const r = (s, i) => {
    s.type.spec.tableRole == "table" && (n = Tp(t, s, i, n));
  };
  return e ? e.doc != t.doc && Pa(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Tp(t, e, n, r) {
  const s = ae.get(e);
  if (!s.problems) return r;
  r || (r = t.tr);
  const i = [];
  for (let a = 0; a < s.height; a++) i.push(0);
  for (let a = 0; a < s.problems.length; a++) {
    const c = s.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) i[c.row + f] += c.n;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, zt(d, d.colspan - c.n, c.n));
    } else if (c.type == "missing") i[c.row] += c.n;
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
  let o, l;
  for (let a = 0; a < i.length; a++) i[a] && (o == null && (o = a), l = a);
  for (let a = 0, c = n + 1; a < s.height; a++) {
    const u = e.child(a), d = c + u.nodeSize, f = i[a];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const m = [];
      for (let y = 0; y < f; y++) {
        const b = Ce(t.schema)[h].createAndFill();
        b && m.push(b);
      }
      const g = (a == 0 || o == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), m);
    }
    c = d;
  }
  return r.setMeta(Np, { fixTables: !0 });
}
function st(t) {
  const e = t.selection, n = Dr(t), r = n.node(-1), s = n.start(-1), i = ae.get(r);
  return {
    ...e instanceof ne ? i.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : i.findCell(n.pos - s),
    tableStart: s,
    map: i,
    table: r
  };
}
function Fa(t, { map: e, tableStart: n, table: r }, s) {
  let i = s > 0 ? -1 : 0;
  vp(e, r, s + i) && (i = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, za(c.attrs, s - e.colCount(a))), o += c.attrs.rowspan - 1;
    } else {
      const a = i == null ? Ce(r.type.schema).cell : r.nodeAt(e.map[l + i]).type, c = e.positionAt(o, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Mp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(Fa(t.tr, n, n.left));
  }
  return !0;
}
function Rp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(Fa(t.tr, n, n.right));
  }
  return !0;
}
function Ip(t, { map: e, table: n, tableStart: r }, s) {
  const i = t.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const l = o * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(i).map(r + a), null, zt(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(i).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    o += u.rowspan;
  }
}
function Op(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Ip(r, n, s), s != n.left; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      n.table = i, n.map = ae.get(i);
    }
    e(r);
  }
  return !0;
}
function jp(t, e, n) {
  var r;
  const s = Ce(e.type.schema).header_cell;
  for (let i = 0; i < t.width; i++) if (((r = e.nodeAt(t.map[i + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function _a(t, { map: e, tableStart: n, table: r }, s) {
  let i = n;
  for (let c = 0; c < s; c++) i += r.child(c).nodeSize;
  const o = [];
  let l = s > 0 ? -1 : 0;
  jp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? Ce(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && o.push(f);
  }
  return t.insert(i, Ce(r.type.schema).row.create(null, o)), t;
}
function Dp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(_a(t.tr, n, n.top));
  }
  return !0;
}
function zp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(_a(t.tr, n, n.bottom));
  }
  return !0;
}
function Lp(t, { map: e, table: n, tableStart: r }, s) {
  let i = 0;
  for (let c = 0; c < s; c++) i += n.child(c).nodeSize;
  const o = i + n.child(s).nodeSize, l = t.mapping.maps.length;
  t.delete(i + r, o + r);
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
function Pp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Lp(r, n, s), s != n.top; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      n.table = i, n.map = ae.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Eo(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function $p({ width: t, height: e, map: n }, r) {
  let s = r.top * t + r.left, i = s, o = (r.bottom - 1) * t + r.left, l = s + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[i] == n[i - 1] || r.right < t && n[l] == n[l + 1]) return !0;
    i += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[s] == n[s - t] || r.bottom < e && n[o] == n[o + t]) return !0;
    s++, o++;
  }
  return !1;
}
function No(t, e) {
  const n = t.selection;
  if (!(n instanceof ne) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = st(t), { map: s } = r;
  if ($p(s, r)) return !1;
  if (e) {
    const i = t.tr, o = {};
    let l = E.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(o[f] || !h))
        if (o[f] = !0, a == null)
          a = f, c = h;
        else {
          Eo(h) || (l = l.append(h.content));
          const m = i.mapping.map(f + r.tableStart);
          i.delete(m, m + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (i.setNodeMarkup(a + r.tableStart, null, {
      ...za(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = Eo(c) ? a + 1 : u;
      i.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    i.setSelection(new ne(i.doc.resolve(a + r.tableStart))), e(i);
  }
  return !0;
}
function To(t, e) {
  const n = Ce(t.schema);
  return Fp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Fp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, i;
    if (r instanceof ne) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, i = r.$anchorCell.pos;
    } else {
      var o;
      if (s = bp(r.$from), !s) return !1;
      i = (o = Dt(r.$from)) === null || o === void 0 ? void 0 : o.pos;
    }
    if (s == null || i == null || s.attrs.colspan == 1 && s.attrs.rowspan == 1) return !1;
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
      const u = st(e), d = e.tr;
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
      d.setNodeMarkup(i, t({
        node: s,
        row: u.top,
        col: u.left
      }), a[0]), r instanceof ne && d.setSelection(new ne(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function _p(t, e) {
  return function(n, r) {
    if (!Ye(n)) return !1;
    const s = Dr(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const i = n.tr;
      n.selection instanceof ne ? n.selection.forEachCell((o, l) => {
        o.attrs[t] !== e && i.setNodeMarkup(l, null, {
          ...o.attrs,
          [t]: e
        });
      }) : i.setNodeMarkup(s.pos, null, {
        ...s.nodeAfter.attrs,
        [t]: e
      }), r(i);
    }
    return !0;
  };
}
function Bp(t) {
  return function(e, n) {
    if (!Ye(e)) return !1;
    if (n) {
      const r = Ce(e.schema), s = st(e), i = e.tr, o = s.map.cellsInRect(t == "column" ? {
        left: s.left,
        top: 0,
        right: s.right,
        bottom: s.map.height
      } : t == "row" ? {
        left: 0,
        top: s.top,
        right: s.map.width,
        bottom: s.bottom
      } : s), l = o.map((a) => s.table.nodeAt(a));
      for (let a = 0; a < o.length; a++) l[a].type == r.header_cell && i.setNodeMarkup(s.tableStart + o[a], r.cell, l[a].attrs);
      if (i.steps.length === 0) for (let a = 0; a < o.length; a++) i.setNodeMarkup(s.tableStart + o[a], r.header_cell, l[a].attrs);
      n(i);
    }
    return !0;
  };
}
function Mo(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let s = 0; s < r.length; s++) {
    const i = e.table.nodeAt(r[s]);
    if (i && i.type !== n.header_cell) return !1;
  }
  return !0;
}
function Mn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Bp(t) : function(n, r) {
    if (!Ye(n)) return !1;
    if (r) {
      const s = Ce(n.schema), i = st(n), o = n.tr, l = Mo("row", i, s), a = Mo("column", i, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: i.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: i.map.width,
        bottom: 1
      } : i, d = t == "column" ? a ? s.cell : s.header_cell : t == "row" ? l ? s.cell : s.header_cell : s.cell;
      i.map.cellsInRect(u).forEach((f) => {
        const h = f + i.tableStart, m = o.doc.nodeAt(h);
        m && o.setNodeMarkup(h, d, m.attrs);
      }), r(o);
    }
    return !0;
  };
}
Mn("row", { useDeprecatedLogic: !0 });
Mn("column", { useDeprecatedLogic: !0 });
const Hp = Mn("cell", { useDeprecatedLogic: !0 });
function Wp(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, s = t.before(); r >= 0; r--) {
      const i = t.node(-1).child(r), o = i.lastChild;
      if (o) return s - 1 - o.nodeSize;
      s -= i.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), s = t.after(); r < n.childCount; r++) {
      const i = n.child(r);
      if (i.childCount) return s + 1;
      s += i.nodeSize;
    }
  }
  return null;
}
function Ro(t) {
  return function(e, n) {
    if (!Ye(e)) return !1;
    const r = Wp(Dr(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(K.between(s, wp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Vp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function Xn(t, e) {
  const n = t.selection;
  if (!(n instanceof ne)) return !1;
  if (e) {
    const r = t.tr, s = Ce(t.schema).cell.createAndFill().content;
    n.forEachCell((i, o) => {
      i.content.eq(s) || r.replace(r.mapping.map(o + 1), r.mapping.map(o + i.nodeSize - 1), new j(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function Up(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), i = s.type.spec.tableRole, o = s.type.schema, l = [];
  if (i == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = Ls(Ce(o).row, new j(c, u, d)).content), l.push(c);
  }
  else if (i == "cell" || i == "header_cell") l.push(n || r ? Ls(Ce(o).row, new j(e, n, r)).content : e);
  else return null;
  return Kp(o, l);
}
function Kp(t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (let o = i.childCount - 1; o >= 0; o--) {
      const { rowspan: l, colspan: a } = i.child(o).attrs;
      for (let c = s; c < s + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let s = 0; s < n.length; s++) r = Math.max(r, n[s]);
  for (let s = 0; s < n.length; s++)
    if (s >= e.length && e.push(E.empty), n[s] < r) {
      const i = Ce(t).cell.createAndFill(), o = [];
      for (let l = n[s]; l < r; l++) o.push(i);
      e[s] = e[s].append(E.from(o));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Ls(t, e) {
  const n = t.createAndFill();
  return new Il(n).replace(0, n.content.size, e).doc;
}
function qp({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const i = [], o = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = i[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(zt(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) i[l + h] = (i[l + h] || 0) + f.attrs.colspan;
      }
      o.push(E.from(c));
    }
    n = o, t = r;
  }
  if (e != s) {
    const i = [];
    for (let o = 0, l = 0; o < s; o++, l++) {
      const a = [], c = n[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        o + d.attrs.rowspan > s && (d = d.type.create({
          ...d.attrs,
          rowspan: Math.max(1, s - d.attrs.rowspan)
        }, d.content)), a.push(d);
      }
      i.push(E.from(a));
    }
    n = i, e = s;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function Jp(t, e, n, r, s, i, o) {
  const l = t.doc.type.schema, a = Ce(l);
  let c, u;
  if (s > e.width) for (let d = 0, f = 0; d < e.height; d++) {
    const h = n.child(d);
    f += h.nodeSize;
    const m = [];
    let g;
    h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
    for (let y = e.width; y < s; y++) m.push(g);
    t.insert(t.mapping.slice(o).map(f - 1 + r), m);
  }
  if (i > e.height) {
    const d = [];
    for (let m = 0, g = (e.height - 1) * e.width; m < Math.max(e.width, s); m++) {
      const y = m >= e.width ? !1 : n.nodeAt(e.map[g + m]).type == a.header_cell;
      d.push(y ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, E.from(d)), h = [];
    for (let m = e.height; m < i; m++) h.push(f);
    t.insert(t.mapping.slice(o).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Io(t, e, n, r, s, i, o, l) {
  if (o == 0 || o == e.height) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = o * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = n.nodeAt(d), { top: h, left: m } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: o - h
      }), t.insert(t.mapping.slice(l).map(e.positionAt(o, m, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: h + f.attrs.rowspan - o
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Oo(t, e, n, r, s, i, o, l) {
  if (o == 0 || o == e.width) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = c * e.width + o, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), m = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(m, null, zt(f.attrs, o - h, f.attrs.colspan - (o - h))), t.insert(m + f.nodeSize, f.type.createAndFill(zt(f.attrs, 0, o - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function jo(t, e, n, r, s) {
  let i = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!i) throw new Error("No table found");
  let o = ae.get(i);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (i = n ? d.doc.nodeAt(n - 1) : d.doc, !i) throw new Error("No table found");
    o = ae.get(i), f = d.mapping.maps.length;
  }
  Jp(d, o, i, n, c, u, f) && h(), Io(d, o, i, n, a, c, l, f) && h(), Io(d, o, i, n, a, c, u, f) && h(), Oo(d, o, i, n, l, u, a, f) && h(), Oo(d, o, i, n, l, u, c, f) && h();
  for (let m = l; m < u; m++) {
    const g = o.positionAt(m, a, i), y = o.positionAt(m, c, i);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new j(s.rows[m - l], 0, 0));
  }
  h(), d.setSelection(new ne(d.doc.resolve(n + o.positionAt(l, a, i)), d.doc.resolve(n + o.positionAt(u - 1, c - 1, i)))), e(d);
}
const Gp = df({
  ArrowLeft: Qn("horiz", -1),
  ArrowRight: Qn("horiz", 1),
  ArrowUp: Qn("vert", -1),
  ArrowDown: Qn("vert", 1),
  "Shift-ArrowLeft": Zn("horiz", -1),
  "Shift-ArrowRight": Zn("horiz", 1),
  "Shift-ArrowUp": Zn("vert", -1),
  "Shift-ArrowDown": Zn("vert", 1),
  Backspace: Xn,
  "Mod-Backspace": Xn,
  Delete: Xn,
  "Mod-Delete": Xn
});
function lr(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Qn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    if (i instanceof ne) return lr(n, r, J.near(i.$headCell, e));
    if (t != "horiz" && !i.empty) return !1;
    const o = Ba(s, t, e);
    if (o == null) return !1;
    if (t == "horiz") return lr(n, r, J.near(n.doc.resolve(i.head + e), e));
    {
      const l = n.doc.resolve(o), a = Da(l, t, e);
      let c;
      return a ? c = J.near(a, 1) : e < 0 ? c = J.near(n.doc.resolve(l.before(-1)), -1) : c = J.near(n.doc.resolve(l.after(-1)), 1), lr(n, r, c);
    }
  };
}
function Zn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    let o;
    if (i instanceof ne) o = i;
    else {
      const a = Ba(s, t, e);
      if (a == null) return !1;
      o = new ne(n.doc.resolve(a));
    }
    const l = Da(o.$headCell, t, e);
    return l ? lr(n, r, new ne(o.$anchorCell, l)) : !1;
  };
}
function Yp(t, e) {
  const n = t.state.doc, r = Dt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new ne(r))), !0) : !1;
}
function Xp(t, e, n) {
  if (!Ye(t.state)) return !1;
  let r = Up(n);
  const s = t.state.selection;
  if (s instanceof ne) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [E.from(Ls(Ce(t.state.schema).cell, n))]
    });
    const i = s.$anchorCell.node(-1), o = s.$anchorCell.start(-1), l = ae.get(i).rectBetween(s.$anchorCell.pos - o, s.$headCell.pos - o);
    return r = qp(r, l.right - l.left, l.bottom - l.top), jo(t.state, t.dispatch, o, l, r), !0;
  } else if (r) {
    const i = Dr(t.state), o = i.start(-1);
    return jo(t.state, t.dispatch, o, ae.get(i.node(-1)).findCell(i.pos - o), r), !0;
  } else return !1;
}
function Qp(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Do(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof ne)
    i(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Dt(t.state.selection.$anchor)) != null && ((n = ms(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    i(s, e), e.preventDefault();
  else if (!r) return;
  function i(a, c) {
    let u = ms(t, c);
    const d = mt.getState(t.state) == null;
    if (!u || !ai(a, u)) if (d) u = a;
    else return;
    const f = new ne(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(mt, a.pos), t.dispatch(h);
    }
  }
  function o() {
    t.root.removeEventListener("mouseup", o), t.root.removeEventListener("dragstart", o), t.root.removeEventListener("mousemove", l), mt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(mt, -1));
  }
  function l(a) {
    const c = a, u = mt.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Do(t, c.target) != r && (d = ms(t, e), !d))
      return o();
    d && i(d, c);
  }
  t.root.addEventListener("mouseup", o), t.root.addEventListener("dragstart", o), t.root.addEventListener("mousemove", l);
}
function Ba(t, e, n) {
  if (!(t.state.selection instanceof K)) return null;
  const { $head: r } = t.state.selection;
  for (let s = r.depth - 1; s >= 0; s--) {
    const i = r.node(s);
    if ((n < 0 ? r.index(s) : r.indexAfter(s)) != (n < 0 ? 0 : i.childCount)) return null;
    if (i.type.spec.tableRole == "cell" || i.type.spec.tableRole == "header_cell") {
      const o = r.before(s), l = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(l) ? o : null;
    }
  }
  return null;
}
function Do(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function ms(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && Dt(t.state.doc.resolve(r)) || Dt(t.state.doc.resolve(s));
}
var Zp = class {
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
function Ps(t, e, n, r, s, i) {
  let o = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: h, colwidth: m } = c.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = s == f ? i : m && m[g], b = y ? y + "px" : "";
        if (o += y || r, y || (l = !1), a)
          a.style.width != b && (a.style.width = b), a = a.nextSibling;
        else {
          const C = document.createElement("col");
          C.style.width = b, e.appendChild(C);
        }
      }
    }
    for (; a; ) {
      var u;
      const d = a.nextSibling;
      (u = a.parentNode) === null || u === void 0 || u.removeChild(a), a = d;
    }
    l ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
  }
}
const Le = new qe("tableColumnResizing");
function em({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = Zp, lastColumnResizable: s = !0 } = {}) {
  const i = new rt({
    key: Le,
    state: {
      init(o, l) {
        var a;
        const c = (a = i.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = Ce(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new tm(-1, !1);
      },
      apply(o, l) {
        return l.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const l = Le.getState(o);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, l) => {
          nm(o, l, t, s);
        },
        mouseleave: (o) => {
          rm(o);
        },
        mousedown: (o, l) => {
          sm(o, l, e, n);
        }
      },
      decorations: (o) => {
        const l = Le.getState(o);
        if (l && l.activeHandle > -1) return cm(o, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var tm = class ar {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Le);
    if (r && r.setHandle != null) return new ar(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new ar(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return zs(e.doc.resolve(s)) || (s = -1), new ar(s, n.dragging);
    }
    return n;
  }
};
function nm(t, e, n, r) {
  if (!t.editable) return;
  const s = Le.getState(t.state);
  if (s && !s.dragging) {
    const i = om(e.target);
    let o = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= n ? o = zo(t, e, "left", n) : a - e.clientX <= n && (o = zo(t, e, "right", n));
    }
    if (o != s.activeHandle) {
      if (!r && o !== -1) {
        const l = t.state.doc.resolve(o), a = l.node(-1), c = ae.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Ha(t, o);
    }
  }
}
function rm(t) {
  if (!t.editable) return;
  const e = Le.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ha(t, -1);
}
function sm(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const i = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, o = Le.getState(t.state);
  if (!o || o.activeHandle == -1 || o.dragging) return !1;
  const l = t.state.doc.nodeAt(o.activeHandle), a = im(t, o.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Le, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", u);
    const f = Le.getState(t.state);
    f?.dragging && (lm(t, f.activeHandle, Lo(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(Le, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = Le.getState(t.state);
    if (f && f.dragging) {
      const h = Lo(f.dragging, d, n);
      Po(t, f.activeHandle, h, r);
    }
  }
  return Po(t, o.activeHandle, a, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function im(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const i = t.domAtPos(e);
  let o = i.node.childNodes[i.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (o -= r[a], l--);
  return o / l;
}
function om(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function zo(t, e, n, r) {
  const s = n == "right" ? -r : r, i = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!i) return -1;
  const { pos: o } = i, l = Dt(t.state.doc.resolve(o));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ae.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Lo(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ha(t, e) {
  t.dispatch(t.state.tr.setMeta(Le, { setHandle: e }));
}
function lm(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), i = ae.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < i.height; c++) {
    const u = c * i.width + l;
    if (c && i.map[u] == i.map[u - i.width]) continue;
    const d = i.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - i.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const m = f.colwidth ? f.colwidth.slice() : am(f.colspan);
    m[h] = n, a.setNodeMarkup(o + d, null, {
      ...f,
      colwidth: m
    });
  }
  a.docChanged && t.dispatch(a);
}
function Po(t, e, n, r) {
  const s = t.state.doc.resolve(e), i = s.node(-1), o = s.start(-1), l = ae.get(i).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ps(i, a.firstChild, a, r, l, n);
}
function am(t) {
  return Array(t).fill(0);
}
function cm(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return de.empty;
  const i = ae.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < i.height; c++) {
    const u = l + c * i.width;
    if ((l == i.width - 1 || i.map[u] != i.map[u + 1]) && (c == 0 || i.map[u] != i.map[u - i.width])) {
      var a;
      const d = i.map[u], f = o + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Le.getState(t)) === null || a === void 0) && a.dragging && n.push(We.node(o + d, o + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(We.widget(f, h));
    }
  }
  return de.create(t.doc, n);
}
function um({ allowTableNodeSelection: t = !1 } = {}) {
  return new rt({
    key: mt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(mt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: i } = e.mapping.mapResult(n);
        return s ? null : i;
      }
    },
    props: {
      decorations: Cp,
      handleDOMEvents: { mousedown: Qp },
      createSelectionBetween(e) {
        return mt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Yp,
      handleKeyDown: Gp,
      handlePaste: Xp
    },
    appendTransaction(e, n, r) {
      return Ep(r, $a(r, n), t);
    }
  });
}
var Wa = zn.create({
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
          const r = t.getAttribute("colwidth"), s = r ? r.split(",").map((i) => parseInt(i, 10)) : null;
          if (!s) {
            const i = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), o = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (o && o > -1 && i && i[o]) {
              const l = i[o].getAttribute("width");
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
    return ["td", tn(this.options.HTMLAttributes, t), 0];
  }
}), Va = zn.create({
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
    return ["th", tn(this.options.HTMLAttributes, t), 0];
  }
}), Ua = zn.create({
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
    return ["tr", tn(this.options.HTMLAttributes, t), 0];
  }
});
function $s(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function $o(t, e, n, r, s, i) {
  var o;
  let l = 0, a = !0, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: m, colwidth: g } = u.child(f).attrs;
      for (let y = 0; y < m; y += 1, h += 1) {
        const b = s === h ? i : g && g[y], C = b ? `${b}px` : "";
        if (l += b || r, b || (a = !1), c) {
          if (c.style.width !== C) {
            const [k, w] = $s(r, b);
            c.style.setProperty(k, w);
          }
          c = c.nextSibling;
        } else {
          const k = document.createElement("col"), [w, v] = $s(r, b);
          k.style.setProperty(w, v), e.appendChild(k);
        }
      }
    }
  for (; c; ) {
    const f = c.nextSibling;
    (o = c.parentNode) == null || o.removeChild(c), c = f;
  }
  const d = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  a && !d ? (n.style.width = `${l}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${l}px`);
}
var dm = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), $o(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, $o(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function fm(t, e, n, r) {
  let s = 0, i = !0;
  const o = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: m } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : m && m[g];
      s += y || e, y || (i = !1);
      const [b, C] = $s(e, y);
      o.push(["col", { style: `${b}: ${C}` }]);
    }
  }
  const a = i ? `${s}px` : "", c = i ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: a, tableMinWidth: c };
}
function Fo(t, e) {
  return t.createAndFill();
}
function hm(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function pm(t, e, n, r, s) {
  const i = hm(t), o = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Fo(i.cell);
    if (u && l.push(u), r) {
      const d = Fo(i.header_cell);
      d && o.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(i.row.createChecked(null, r && c === 0 ? o : l));
  return i.table.createChecked(null, a);
}
function mm(t) {
  return t instanceof ne;
}
var er = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!mm(e))
    return !1;
  let n = 0;
  const r = Ea(e.ranges[0].$from, (i) => i.type.name === "table");
  return r?.node.descendants((i) => {
    if (i.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(i.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, gm = "";
function ym(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function bm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : gm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const i = [];
  t.content.forEach((m) => {
    const g = [];
    m.content && m.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map((v) => e.renderChildren(v)).join(s) : b = y.content ? e.renderChildren(y.content) : "";
      const C = ym(b), k = y.type === "tableHeader";
      g.push({ text: C, isHeader: k });
    }), i.push(g);
  });
  const o = i.reduce((m, g) => Math.max(m, g.length), 0);
  if (o === 0)
    return "";
  const l = new Array(o).fill(0);
  i.forEach((m) => {
    var g;
    for (let y = 0; y < o; y += 1) {
      const C = (((g = m[y]) == null ? void 0 : g.text) || "").length;
      C > l[y] && (l[y] = C), l[y] < 3 && (l[y] = 3);
    }
  });
  const a = (m, g) => m + " ".repeat(Math.max(0, g - m.length)), c = i[0], u = c.some((m) => m.isHeader);
  let d = `
`;
  const f = new Array(o).fill(0).map((m, g) => u && c[g] && c[g].text || "");
  return d += `| ${f.map((m, g) => a(m, l[g])).join(" | ")} |
`, d += `| ${l.map((m) => "-".repeat(Math.max(3, m))).join(" | ")} |
`, (u ? i.slice(1) : i).forEach((m) => {
    d += `| ${new Array(o).fill(0).map((g, y) => a(m[y] && m[y].text || "", l[y])).join(" | ")} |
`;
  }), d;
}
var xm = bm, Ka = zn.create({
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
      View: dm,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = fm(t, this.options.cellMinWidth), i = e.style;
    function o() {
      return i || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      tn(this.options.HTMLAttributes, e, {
        style: o()
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
      r.forEach((i) => {
        s.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(i.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, s));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => xm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: i }) => {
        const o = pm(i.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(K.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Mp(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Rp(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Op(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Dp(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => zp(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Pp(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Vp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => No(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => To(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Mn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Mn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Hp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => No(t, e) ? !0 : To(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => _p(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Ro(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Ro(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && $a(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = ne.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: er,
      "Mod-Backspace": er,
      Delete: er,
      "Mod-Delete": er
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        em({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      um({
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
      tableRole: Tn(Zt(t, "tableRole", e))
    };
  }
});
Ge.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Ka.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Wa.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Va.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ua.configure(this.options.tableRow)), t;
  }
});
function me(t) {
  const { title: e, active: n, disabled: r, onClick: s } = t;
  return /* @__PURE__ */ p.jsx(
    "button",
    {
      type: "button",
      title: e,
      disabled: r,
      onMouseDown: (i) => {
        i.preventDefault(), s();
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
function wm({ editor: t }) {
  const [e, n] = He(!1);
  if (!t) return null;
  const r = t.isActive("heading", { level: 1 }) ? "Heading 1" : t.isActive("heading", { level: 2 }) ? "Heading 2" : "Paragraph";
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        onMouseDown: (s) => {
          s.preventDefault(), n((i) => !i);
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
        gs,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        gs,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        gs,
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
function gs({
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
function pn() {
  return /* @__PURE__ */ p.jsx("div", { className: "w-px h-5 bg-gray-300 mx-1" });
}
function vm({ editor: t }) {
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50", children: [
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ p.jsx(pn, {}),
    /* @__PURE__ */ p.jsx(wm, { editor: t }),
    /* @__PURE__ */ p.jsx(pn, {}),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(pn, {}),
    /* @__PURE__ */ p.jsx(
      me,
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
      me,
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
    /* @__PURE__ */ p.jsx(pn, {}),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    t.isActive("table") && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Add Row Above",
          icon: "fa-solid fa-arrow-up",
          disabled: !t.can().addRowBefore(),
          onClick: () => t.chain().focus().addRowBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Add Row Below",
          icon: "fa-solid fa-arrow-down",
          disabled: !t.can().addRowAfter(),
          onClick: () => t.chain().focus().addRowAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Add Column Left",
          icon: "fa-solid fa-arrow-left",
          disabled: !t.can().addColumnBefore(),
          onClick: () => t.chain().focus().addColumnBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Add Column Right",
          icon: "fa-solid fa-arrow-right",
          disabled: !t.can().addColumnAfter(),
          onClick: () => t.chain().focus().addColumnAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Delete Row",
          icon: "fa-solid fa-minus",
          disabled: !t.can().deleteRow(),
          onClick: () => t.chain().focus().deleteRow().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Delete Column",
          icon: "fa-solid fa-trash",
          disabled: !t.can().deleteColumn(),
          onClick: () => t.chain().focus().deleteColumn().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        me,
        {
          title: "Delete Table",
          icon: "fa-solid fa-xmark",
          disabled: !t.can().deleteTable(),
          onClick: () => t.chain().focus().deleteTable().run()
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(pn, {}),
    /* @__PURE__ */ p.jsx(
      me,
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
      me,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      me,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function Sm({
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
      up,
      hp,
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
    onUpdate: ({ editor: i }) => {
      e(i.getHTML());
    }
  });
  return De(() => {
    if (!s) return;
    const i = s.getHTML();
    t !== void 0 && t !== i && s.commands.setContent(t, {
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
        !n && /* @__PURE__ */ p.jsx(vm, { editor: s }),
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
function Ln({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: i = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l,
  chainMap: a
}) {
  const {
    executeFieldMethod: c,
    handleFileUpload: u,
    handleKeyDown: d,
    setSearch: f,
    setOpen: h,
    setIsFocused: m,
    handleInputChange: g,
    handleSelect: y,
    handlePersist: b,
    setLoading: C,
    removeFile: k,
    baseInputClasses: w,
    focusClasses: v,
    labelClasses: T,
    search: O,
    highlightedIndex: U,
    options: $,
    isDisabled: W,
    key: S,
    filteredOptions: ce,
    open: F,
    listRef: q,
    triggerRef: Q,
    isFocused: oe,
    exactMatch: le,
    loading: je
  } = Xc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: i,
    chainMap: a,
    ...o && { optionsOverride: o },
    ...l && { setFieldOptions: l }
  }), Xe = (N) => N.icon ? /* @__PURE__ */ p.jsx("i", { className: N.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const A = e.values[S] ?? "", M = O !== "" ? O : cr($, A) ?? String(A ?? "");
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { ref: Q, children: /* @__PURE__ */ p.jsx(
          "input",
          {
            className: `${w} ${v}`,
            value: M,
            placeholder: t.placeholder || "Type to search...",
            onChange: g,
            onBlur: () => {
              setTimeout(() => h(!1), 150);
            },
            onKeyDown: (R) => {
              if (R.key === "Enter") {
                if (R.preventDefault(), le) {
                  const [G] = le;
                  e.setFieldValue(S, G), b(G, t, i);
                } else O.trim() && (e.setFieldValue(S, O.trim()), b(O.trim(), t, i));
                h(!1);
                return;
              }
              d(R, !0);
            },
            disabled: W
          }
        ) }),
        /* @__PURE__ */ p.jsx(Fs, { anchorRef: Q, open: F && !W, children: /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: q,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: ce.length > 0 && le ? ce.map(([R, G], B) => /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `${S}-${R}`,
                "data-index": B,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${U === B ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => y(R),
                children: G
              },
              R
            )) : /* @__PURE__ */ p.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${M}" ` })
          }
        ) }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (t.multiple === !0) {
        const A = e.values[S];
        return /* @__PURE__ */ p.jsx(
          Bi,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            valueArray: A,
            labelClasses: T,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: b,
            module_refid: i,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      }
      return /* @__PURE__ */ p.jsx(
        _i,
        {
          field: t,
          isDisabled: W,
          handleKeyDown: d,
          labelClasses: T,
          listRef: q,
          search: O,
          filteredOptions: ce,
          highlightedIndex: U,
          setSearch: f,
          formik: e,
          executeFieldMethod: c,
          handlePersist: b,
          module_refid: i,
          options: $,
          triggerRef: Q,
          open: F,
          setOpen: h
        }
      );
    }
    case "richtextarea":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            type: "hidden",
            name: S,
            value: e.values[S] ?? ""
          }
        ),
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx(
          Sm,
          {
            value: e.values[S] ?? "",
            disabled: W,
            field_name: S,
            onChange: (A) => {
              e.setFieldValue(S, A), b(A, t, i), c("onChange", t, S);
            }
          }
        ),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              id: S,
              className: `${w} ${v} min-h-[120px] resize-none`,
              onFocus: () => m(!0),
              name: S,
              value: e.values[S],
              onBlur: e.handleBlur,
              onChange: (A) => {
                e.setFieldValue(S, A.target.value), b(A.target.value, t, i), c("onChange", t, `${S}`);
              },
              placeholder: t.placeholder,
              disabled: W
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const A = e.values[S];
        return /* @__PURE__ */ p.jsx(
          Bi,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            valueArray: A,
            labelClasses: T,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: b,
            module_refid: i,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      }
      if (t.search)
        return /* @__PURE__ */ p.jsx(
          _i,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            labelClasses: T,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: b,
            module_refid: i,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      const N = zc($);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              className: `${w} ${v} appearance-none ${W ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => m(!0),
              name: S,
              id: S,
              value: e.values[S],
              onBlur: e.handleBlur,
              onChange: (A) => {
                e.setFieldValue(S, A.target.value), b(A.target.value, t, i), c("onChange", t, `${S}`);
              },
              disabled: W,
              children: [
                t?.["no-option"] !== "false" && !e.values[S] && /* @__PURE__ */ p.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                /* @__PURE__ */ p.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                Object.entries(N).map(
                  ([A, M]) => A === "__ungrouped__" ? M.map((R) => /* @__PURE__ */ p.jsx("option", { value: R.value, className: "py-2", children: R.label }, R.value)) : /* @__PURE__ */ p.jsx("optgroup", { label: A, children: M.map((R) => /* @__PURE__ */ p.jsx("option", { value: R.value, children: R.label }, R.value)) }, A)
                )
              ]
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ p.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: `flex ${$.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: $.map((A) => /* @__PURE__ */ p.jsxs(
          "label",
          {
            htmlFor: `${S}-${A.value}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  id: `${S}-${A.value}`,
                  type: "radio",
                  name: S,
                  checked: e.values[S] === A.value,
                  value: A.value,
                  onChange: (M) => {
                    e.setFieldValue(S, M.target.value), b(M.target.value, t, i), c("onChange", t, `${S}-${A.value}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: W,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              A.label
            ]
          },
          A.value
        )) }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[S]) })
      ] });
    case "checkbox": {
      const A = t.multiple === !0, M = e.values[S];
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 ml-1", children: $.map((R) => {
          const G = A ? Array.isArray(M) && M.includes(R.value) : M === R.value;
          return /* @__PURE__ */ p.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${S}-${R.value}`,
                    type: "checkbox",
                    checked: G,
                    onChange: (B) => {
                      let D;
                      if (A) {
                        const L = Array.isArray(M) ? M : [];
                        D = B.target.checked ? [...L, R.value] : L.filter((V) => V !== R.value);
                      } else
                        D = B.target.checked ? R.value : "false";
                      e.setFieldValue(S, D), b(D, t, i), c("onChange", t, `${S}-${R.value}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: W,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                R.label
              ]
            },
            R.value
          );
        }) }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[S]) })
      ] });
    }
    case "tags": {
      const A = e.values[S] ?? [], M = O.trim(), R = (D) => {
        if (!W && D && !A.includes(D)) {
          let L = [...A, D];
          e.setFieldValue(S, L), b(L, t, i), f("");
        }
      }, G = (D) => {
        let L = A.filter((V) => V !== D);
        e.setFieldValue(
          S,
          L
        ), b(L, t, i);
      }, B = (D) => cr($, D) ?? D;
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: `${w} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${W ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !W && document.getElementById(`${S}-input`)?.focus(),
            children: [
              A.map((D) => /* @__PURE__ */ p.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ p.jsx("span", { className: "text-indigo-700", children: B(D) }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (L) => {
                          L.stopPropagation(), W || G(D);
                        },
                        onMouseDown: (L) => L.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                D
              )),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  id: `${S}-input`,
                  type: "text",
                  value: O,
                  onChange: (D) => f(D.target.value),
                  onKeyDown: (D) => {
                    (D.key === "Enter" || D.key === ",") && (D.preventDefault(), R(M));
                  },
                  placeholder: A.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: W
                }
              )
            ]
          }
        ),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
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
          module_refid: i
        }
      );
    case "attachment":
    case "file":
      const z = t.multiple === !0, Z = t.max !== void 0 ? Number(t.max) : 1 / 0, Y = Array.isArray(e.values[S]) ? e.values[S] : e.values[S] ? [e.values[S]] : [];
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative mb-1", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Xe(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: S,
              type: "file",
              accept: t.accept,
              className: `${w} ${v} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
              name: S,
              multiple: z,
              onChange: (A) => {
                const M = Yo({
                  e: A,
                  existingFiles: Y,
                  maxFiles: Z,
                  maxFileSize: t.file_size
                });
                M && (M && u(M), c("onChange", t, S), A.currentTarget.value = "");
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder,
              disabled: W
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2", children: Y.map((A) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ p.jsx(
            eu,
            {
              sqlOpsUrls: r,
              filePath: A
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => k(A),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, A)) }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "json":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              id: S,
              name: S,
              value: e.values[S],
              onChange: (A) => {
                e.setFieldValue(S, A.target.value), b(A.target.value, t, i), c("onChange", t, `${S}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: W,
              className: `${w} ${v} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "date": {
      const A = qc(t.max);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
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
                  id: S,
                  type: "date",
                  name: S,
                  min: t.min,
                  max: A,
                  value: e.values[S] ?? "",
                  onChange: (M) => {
                    e.setFieldValue(S, M.target.value), b(M.target.value, t, i), c("onChange", t, `${S}`);
                  },
                  onBlur: e.handleBlur,
                  placeholder: t.placeholder,
                  disabled: W,
                  className: `${w} ${v} ${t.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    }
    case "geolocation": {
      const A = e.values[S] || "", M = async () => {
        try {
          const R = await ws();
          e.setFieldValue(S, R), b(R, t, i);
        } catch (R) {
          console.error(R), e.setFieldError(S, "Failed to fetch location");
        } finally {
          C(!1);
        }
      };
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              value: A,
              readOnly: !0,
              className: `${w} ${v}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: M,
              disabled: je,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: je ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Xe(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: S,
              type: "number",
              className: `${w} ${v} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
              name: S,
              value: e.values[S],
              onBlur: e.handleBlur,
              onChange: (A) => {
                e.setFieldValue(S, A.target.value), b(A.target.value, t, i), c("onChange", t, `${S}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              min: t.min,
              max: t.max
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    default:
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: T, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Xe(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: S,
              type: t.type || "text",
              className: `${w} ${v} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => m(!0),
              name: S,
              value: e.values[S],
              onBlur: e.handleBlur,
              onChange: (A) => {
                e.setFieldValue(S, A.target.value), b(A.target.value, t, i), c("onChange", t, `${S}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${oe ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
  }
}
function _o({ title: t, children: e, isFirst: n }) {
  const [r, s] = He(n);
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
function zr({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: i,
  fieldOptions: o,
  setFieldOptions: l,
  chainMap: a
}) {
  const c = nr(
    () => t?.find((d) => d.type === "avatar"),
    [t]
  ), u = c ? "lg:col-span-10" : "lg:col-span-12";
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white min-h-3/10 ", children: /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 ", children: [
    c && /* @__PURE__ */ p.jsx("div", { className: "lg:col-span-2 flex flex-col items-center min-h-0 max-h-40 overflow-y-auto ", children: /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `wrapper-${c.name}`,
        className: `
                               
                          flex items-center justify-center
                         ${c.hidden ? "hidden" : ""}

                            `,
        children: /* @__PURE__ */ p.jsx(
          el,
          {
            formik: e,
            field: c,
            sqlOpsUrls: r,
            module_refid: i
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: `${u} min-h-0 max-h-40  overflow-y-auto `, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((d, f) => {
      if (d.type === "avatar") return null;
      const h = On(d.hidden);
      return /* @__PURE__ */ p.jsx("div", { id: `wrapper-${d.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${Rn[In(Number(d.width))] || "lg:col-span-4"}
                                ${h ? "hidden" : ""}

                                `, children: /* @__PURE__ */ p.jsx(
        Ln,
        {
          refid: s,
          module_refid: i,
          sqlOpsUrls: r,
          field: d,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...o?.[d.name] ? { optionsOverride: o[d.name] } : {},
          chainMap: a
        },
        d?.name || f
      ) }, d.name);
    }) }) })
  ] }) });
}
function Cm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (u) => {
  },
  onCancel: s = () => {
  },
  methods: i = {},
  components: o = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = se.useState({}), m = (w, v) => {
    h((T) => ({
      ...T,
      [w]: v
    }));
  }, g = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: y, validationSchema: b } = se.useMemo(() => {
    const w = {}, v = {};
    return Object.values(e).flat().forEach((T) => {
      vn([T], w, v, n, c, l?.operation);
    }), {
      initialValues: w,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), C = kr({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(b),
    onSubmit: (w) => {
      let v = Ar(w, g);
      r(v);
    }
  }), k = se.useMemo(
    () => Er(g),
    [g]
  );
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx(_o, { title: "Common", isFirst: !0, children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: C,
          methods: i,
          setFieldOptions: m,
          fieldOptions: f,
          chainMap: k
        }
      ) }),
      d && Object.entries(d).map(([w, v], T) => /* @__PURE__ */ p.jsx(_o, { title: w, isFirst: T === 0 && u.length === 0, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((O, U) => {
        const $ = On(O.hidden), W = `
                        col-span-12 md:col-span-6
                        ${Rn[In(Number(O.width))] || "lg:col-span-4"}
                        ${$ ? "hidden" : ""}
                      `;
        if (O.type === "static" || O.type === "static2") {
          const S = O.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${O.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${S ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${S ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                      children: O.label
                    }
                  ) }) })
                }
              )
            },
            O?.name
          );
        }
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${O.name}`,
            className: W,
            children: /* @__PURE__ */ p.jsx(
              Ln,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: o,
                field: O,
                formik: C,
                methods: i,
                setFieldOptions: m,
                ...f[O.name] ? { optionsOverride: f[O.name] } : {},
                chainMap: k
              },
              O.name
            )
          },
          O?.name ?? `field-${U}`
        );
      }) }) }, w))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function km({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (d) => {
  },
  onCancel: s = () => {
  },
  methods: i = {},
  components: o = {},
  sqlOpsUrls: l,
  widget: a,
  refid: c,
  module_refid: u
}) {
  const { common: d = [], ...f } = e, h = Object.keys(f), [m, g] = se.useState(0), [y, b] = se.useState({}), C = (F, q) => {
    b((Q) => ({
      ...Q,
      [F]: q
    }));
  }, { initialValues: k, validationSchema: w, stepperSchemas: v } = se.useMemo(() => {
    const F = {}, q = {}, Q = {};
    return a ? Object.entries(e).forEach(([oe, le]) => {
      const je = {};
      vn(le, F, je, n, u, l?.operation), Q[oe] = je;
    }) : Object.entries(e).forEach(([oe, le]) => {
      vn(le, F, q, n, u, l?.operation);
    }), {
      initialValues: F,
      validationSchema: q,
      stepperSchemas: Q
    };
  }, [e, n, a, u, l?.operation]), T = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), O = h[m] ?? null, U = a && O ? v[O] ?? {} : w, $ = kr({
    initialValues: k,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(U),
    onSubmit: (F) => {
      let q = Ar(F, T);
      a ? (m < h.length - 1 && g((Q) => Q + 1), m === h.length - 1 && r(q)) : r(q);
    }
  }), W = async (F) => {
    if (F.preventDefault(), !a) {
      const q = await $.validateForm();
      if (Object.keys(q).length > 0) {
        alert("Please fill all required fields before submitting."), $.setTouched(
          Object.keys(q).reduce((Q, oe) => ({ ...Q, [oe]: !0 }), {})
        );
        return;
      }
    }
    $.handleSubmit(F);
  }, S = () => {
    g((F) => F > 0 ? F - 1 : F);
  }, ce = se.useMemo(
    () => Er(T),
    [T]
  );
  return console.log("flatFields", T), /* @__PURE__ */ p.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: W, className: "w-full mx-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "relative", children: /* @__PURE__ */ p.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "p-3", children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: $,
          methods: i,
          setFieldOptions: C,
          fieldOptions: y,
          chainMap: ce
        }
      ) }),
      /* @__PURE__ */ p.jsx("nav", { className: "relative flex bg-gray-100", children: h.map((F, q) => /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(q),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${m === q ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ p.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: F })
        },
        F
      )) })
    ] }) }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: O && f[O]?.map((F, q) => {
            const Q = On(F.hidden), oe = `
                  col-span-12 md:col-span-6
                  ${Rn[In(Number(F.width))] || "lg:col-span-4"}
                  ${Q ? "hidden" : ""}
                `;
            if (F.type === "static" || F.type === "static2") {
              const le = F.type === "static";
              return /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `wrapper-${F.name}`,
                  className: "col-span-12",
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: ` bg-gray-100 ${le ? "mt-4" : "mt-3"}`,
                      children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                        "h2",
                        {
                          className: `${le ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                          children: F.label
                        }
                      ) }) })
                    }
                  )
                },
                F?.name
              );
            }
            return /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `wrapper-${F.name}`,
                className: oe,
                children: /* @__PURE__ */ p.jsx(
                  Ln,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: F,
                    formik: $,
                    methods: i,
                    components: o,
                    setFieldOptions: C,
                    ...y[F.name] ? { optionsOverride: y[F.name] } : {},
                    chainMap: ce
                  },
                  F.name
                )
              },
              F?.name ?? `field-${q}`
            );
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: `mt-8 flex ${m > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            m > 0 && /* @__PURE__ */ p.jsx("button", { onClick: S, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
            /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
              /* @__PURE__ */ p.jsx("button", { onClick: s, type: "button", className: "px-5 cursor-pointer py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
              /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 cursor-pointer py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: a ? "Next" : "Save" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 pt-3  border-t border-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ p.jsxs("span", { children: [
                "Tab ",
                m + 1,
                " of ",
                h.length
              ] }),
              /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700 ml-3", children: "All fields marked (*) are required" })
            ] }),
            /* @__PURE__ */ p.jsx("div", { className: "flex gap-1", children: h.map((F, q) => /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${q === m ? "bg-action w-6" : "bg-gray-300"}`
              },
              q
            )) })
          ] }) })
        ]
      },
      h[m]
    )
  ] }) });
}
function Am({
  title: t,
  fields: e,
  data: n,
  onSubmit: r = (c) => {
  },
  onCancel: s = () => {
  },
  methods: i = {},
  sqlOpsUrls: o,
  refid: l,
  module_refid: a
}) {
  const c = $c(e, o?.operation), [u, d] = se.useState({}), f = (k, w) => {
    d((v) => ({
      ...v,
      [k]: w
    }));
  }, { commonFields: h, otherFields: m } = se.useMemo(() => c.reduce(
    (k, w) => (w.group === "common" ? k.commonFields.push(w) : k.otherFields.push(w), k),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: y } = se.useMemo(() => {
    const k = {}, w = {};
    return c.forEach((v) => {
      vn([v], k, w, n, a, o?.operation);
    }), {
      initialValues: k,
      validationSchema: w
    };
  }, [c, n]), b = se.useMemo(
    () => Er(c),
    [c]
  ), C = kr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(y),
    onSubmit: (k) => {
      let w = Ar(k, c);
      r(w);
    }
  });
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ p.jsx(
      zr,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: o,
        fields: h,
        formik: C,
        methods: i,
        setFieldOptions: f,
        fieldOptions: u,
        chainMap: b
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((k) => {
      const w = On(k.hidden), v = `col-span-12 md:col-span-6
    ${Rn[In(Number(k.width))] || "lg:col-span-4"}
    ${w ? "hidden" : ""}
  `;
      if (k.type === "static" || k.type === "static2") {
        const T = k.type === "static";
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${k.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: ` bg-gray-100 ${T ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                  "h2",
                  {
                    className: `${T ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                    children: k.label
                  }
                ) }) })
              }
            )
          },
          k?.name
        );
      }
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          id: `wrapper-${k.name}`,
          className: v,
          children: /* @__PURE__ */ p.jsx(
            Ln,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: o,
              field: k,
              formik: C,
              methods: i,
              chainMap: b,
              setFieldOptions: f,
              ...u[k.name] ? { optionsOverride: u[k.name] } : {}
            }
          )
        },
        k?.name
      );
    }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function Bo({ title: t, children: e }) {
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
function Em({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = (u) => {
  },
  onCancel: s = () => {
  },
  methods: i = {},
  components: o = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = se.useState({}), m = (w, v) => {
    h((T) => ({
      ...T,
      [w]: v
    }));
  }, g = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: y, validationSchema: b } = se.useMemo(() => {
    const w = {}, v = {};
    return Object.values(e).flat().forEach((T) => {
      vn([T], w, v, n, c, l?.operation);
    }), {
      initialValues: w,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), C = kr({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(b),
    onSubmit: (w) => {
      let v = Ar(w, g);
      r(v);
    }
  }), k = se.useMemo(
    () => Er(g),
    [g]
  );
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx(Bo, { title: "Common", children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: C,
          methods: i,
          setFieldOptions: m,
          fieldOptions: f,
          chainMap: k
        }
      ) }),
      d && Object.entries(d).map(([w, v], T) => /* @__PURE__ */ p.jsx(Bo, { title: w, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((O, U) => {
        const $ = On(O.hidden), W = `
                                            col-span-12 md:col-span-6
                                            ${Rn[In(Number(O.width))] || "lg:col-span-4"}
                                            ${$ ? "hidden" : ""}
                                          `;
        if (O.type === "static" || O.type === "static2") {
          const S = O.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${O.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${S ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${S ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                      children: O.label
                    }
                  ) }) })
                }
              )
            },
            O?.name
          );
        }
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${O.name}`,
            className: W,
            children: /* @__PURE__ */ p.jsx(
              Ln,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: o,
                field: O,
                formik: C,
                methods: i,
                setFieldOptions: m,
                ...f[O.name] ? { optionsOverride: f[O.name] } : {},
                chainMap: k
              },
              O.name
            )
          },
          O?.name ?? `field-${U}`
        );
      }) }) }, w))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ p.jsx("p", { className: "px-4 pt-4 text-sm text-secondary", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: s, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Cancel" }),
        /* @__PURE__ */ p.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Save" })
      ] })
    ] })
  ] }) }) });
}
function Dm({
  formJson: t,
  methods: e = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: i,
  toast: o
}) {
  let l = jc(t);
  const a = t.endPoints, c = t?.source?.refid, u = Dc(t?.fields ?? {}, a?.operation), [d, f] = se.useState(i ?? {}), h = se.useMemo(() => Pc(t.fields), [t.fields]);
  se.useEffect(() => {
    let b = !0;
    return (async () => {
      try {
        const k = await ws();
        b && f((w) => ({
          ...w,
          ...Object.fromEntries(
            h.map((v) => [v, k])
          )
        }));
      } catch (k) {
        console.warn("Geo fetch failed", k);
      }
    })(), () => {
      b = !1;
    };
  }, [h]), se.useEffect(() => {
    f((b) => ({
      ...b,
      ...i ?? {}
    }));
  }, [i]);
  const m = se.useCallback(
    (b) => {
      b && Object.keys(b).length > 0 && f(b);
    },
    []
  );
  se.useEffect(() => {
    let b = !0;
    return (async () => {
      const k = t?.source ?? {};
      if (!k?.type) {
        b && f({});
        return;
      }
      if (k.type === "method" && a?.operation !== "create") {
        const w = k.method, v = w ? e[w] : void 0;
        if (v)
          try {
            const T = await v();
            b && m(T);
          } catch (T) {
            console.error("Method execution failed:", T), b && f({});
          }
        else
          b && f({});
      }
      if (k.type === "api" && a?.operation !== "create")
        try {
          const w = {
            method: k.method || "GET",
            url: a?.baseURL + k.endpoint,
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            },
            ...k.method === "GET" ? { params: { refid: k.refid } } : { data: { refid: k.refid } }
          }, v = await fe(w);
          b && f(v.data ?? {});
        } catch (w) {
          console.error("API fetch failed:", w), b && f({});
        }
      if (k.type === "sql" && k.refid && k.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && k.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const w = await Yc.fetch(a, {
            source: {
              ...k,
              table: k.table,
              columns: k.columns,
              where: ct(k.where, {
                refid: c
              })
            },
            fields: Pi(t.fields, a.operation)
          }, k?.dbopsid, t?.module_refid);
          b && f(w);
        } catch (w) {
          console.error("API fetch failed:", w);
        }
      }
    })(), () => {
      b = !1;
    };
  }, [
    a,
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params ?? {}),
    JSON.stringify(t?.source?.body ?? {}),
    JSON.stringify(t?.source?.headers ?? {})
  ]);
  const g = async (b) => {
    const C = t?.source ?? {};
    let k = { ...b };
    if (h.length > 0) {
      const w = h.filter((v) => !b[v]);
      if (w.length > 0)
        try {
          const v = await ws();
          k = {
            ...b,
            ...Object.fromEntries(
              w.map((T) => [T, v])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (C.type === "method") {
      const w = C.method, v = w ? e[w] : void 0;
      if (v)
        try {
          const T = await v(k);
          if (s?.(T), o?.success?.(Qr(T)), e?.handleActions) {
            let O = a?.operation === "update" ? c : T?.data?.refid;
            const U = t?.gotolink?.replace(
              "{hashid}",
              String(O)
            );
            e.handleActions(U);
          }
        } catch (T) {
          o?.error?.(Xr(T)), console.error("Method execution failed:", T);
        }
    }
    if (C.type === "api") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const w = await fe({
          method: C.method || "POST",
          url: a.baseURL + C.endpoint,
          data: k ?? {},
          headers: {
            Authorization: `Bearer ${a?.accessToken}`
          }
        });
        if (s?.(w), o?.success?.(Qr(w)), e?.handleActions) {
          let v = a.operation === "update" ? c : w?.data?.refid;
          const T = t?.gotolink?.replace(
            "{hashid}",
            String(v)
          );
          e.handleActions(T);
        }
      } catch (w) {
        o?.error?.(Xr(w)), console.error("API fetch failed:", w);
      }
    }
    if (C.type === "sql") {
      const w = t.endPoints;
      if (!w) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let v = !1, T;
        C?.dbopsid && (v = !0, T = C?.dbopsid);
        const O = await fe({
          method: "GET",
          url: w.baseURL + w.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        if (!v) {
          let $ = {
            ...C
          };
          C.where && ($ = {
            ...C,
            where: ct(C.where, {
              refid: c
            })
          }), T = (await fe({
            method: "POST",
            url: w.baseURL + w.dbopsGetRefId,
            data: {
              operation: w.operation,
              source: $,
              fields: Pi(t.fields, w.operation),
              forcefill: t.forcefill,
              datahash: O.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${w?.accessToken}`
            }
          }))?.data.refid;
        }
        const U = await fe({
          method: "POST",
          url: w.baseURL + w[w.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: T,
            fields: k,
            datahash: O.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        if (o?.success?.(Qr(U)), s?.(U), e?.handleActions) {
          let $ = w.operation === "update" ? c : U?.data?.refid;
          const W = t?.gotolink?.replace(
            "{hashid}",
            String($)
          );
          e.handleActions(W);
        }
      } catch (v) {
        o?.error?.(Xr(v)), console.error("API fetch failed:", v);
      }
    }
  }, y = {
    accordion: /* @__PURE__ */ p.jsx(
      Cm,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: g,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    cards: /* @__PURE__ */ p.jsx(
      Em,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: g,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    tab: /* @__PURE__ */ p.jsx(
      km,
      {
        title: t?.title ?? "",
        groupedFields: u,
        data: d,
        onSubmit: g,
        onCancel: n,
        methods: e,
        components: r,
        widget: t?.widget,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    ),
    simple: /* @__PURE__ */ p.jsx(
      Am,
      {
        title: t?.title ?? "",
        fields: t.fields,
        data: d,
        onSubmit: g,
        onCancel: n,
        methods: e,
        components: r,
        sqlOpsUrls: a,
        refid: c,
        module_refid: t?.module_refid
      }
    )
  };
  return /* @__PURE__ */ p.jsx("div", { className: "relative", children: y[l] });
}
export {
  Dm as LogiksForm
};
