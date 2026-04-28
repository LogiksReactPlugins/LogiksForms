import se, { useState as He, useRef as yn, useEffect as De, useMemo as nr, useLayoutEffect as nc } from "react";
import fe from "axios";
import * as Te from "yup";
import { useFormik as kr } from "formik";
import { createPortal as rc } from "react-dom";
import { useEditor as sc, EditorContent as oc } from "@tiptap/react";
import ic from "@tiptap/starter-kit";
var Wn = { exports: {} }, on = {};
var Eo;
function lc() {
  if (Eo) return on;
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
  return on.Fragment = e, on.jsx = n, on.jsxs = n, on;
}
var ln = {};
var No;
function ac() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === W ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case g:
          return "Fragment";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case v:
          return "Suspense";
        case N:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case m:
            return "Portal";
          case k:
            return (T.displayName || "Context") + ".Provider";
          case C:
            return (T._context.displayName || "Context") + ".Consumer";
          case w:
            var z = T.render;
            return T = T.displayName, T || (T = z.displayName || z.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case O:
            return z = T.displayName || null, z !== null ? z : t(T.type) || "Memo";
          case U:
            z = T._payload, T = T._init;
            try {
              return t(T(z));
            } catch {
            }
        }
      return null;
    }
    function e(T) {
      return "" + T;
    }
    function n(T) {
      try {
        e(T);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var Z = z.error, Y = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return Z.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), e(T);
      }
    }
    function r(T) {
      if (T === g) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === U)
        return "<...>";
      try {
        var z = t(T);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = S.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (ce.call(T, "key")) {
        var z = Object.getOwnPropertyDescriptor(T, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, z) {
      function Z() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: Z,
        configurable: !0
      });
    }
    function a() {
      var T = t(this.type);
      return ie[T] || (ie[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function c(T, z, Z, Y, A, M, I, G) {
      return Z = M.ref, T = {
        $$typeof: h,
        type: T,
        key: z,
        props: M,
        _owner: A
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, z, Z, Y, A, M, I, G) {
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
        B = t(T);
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
      if (B = null, Z !== void 0 && (n(Z), B = "" + Z), i(z) && (n(z.key), B = "" + z.key), "key" in z) {
        Z = {};
        for (var L in z)
          L !== "key" && (Z[L] = z[L]);
      } else Z = z;
      return B && l(
        Z,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), c(
        T,
        B,
        M,
        A,
        s(),
        Z,
        I,
        G
      );
    }
    function d(T) {
      typeof T == "object" && T !== null && T.$$typeof === h && T._store && (T._store.validated = 1);
    }
    var f = se, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), y = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.activity"), W = /* @__PURE__ */ Symbol.for("react.client.reference"), S = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, F = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(T) {
        return T();
      }
    };
    var Q, ie = {}, le = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), je = q(r(o)), Xe = {};
    ln.Fragment = g, ln.jsx = function(T, z, Z, Y, A) {
      var M = 1e4 > S.recentlyCreatedOwnerStacks++;
      return u(
        T,
        z,
        Z,
        !1,
        Y,
        A,
        M ? Error("react-stack-top-frame") : le,
        M ? q(r(T)) : je
      );
    }, ln.jsxs = function(T, z, Z, Y, A) {
      var M = 1e4 > S.recentlyCreatedOwnerStacks++;
      return u(
        T,
        z,
        Z,
        !0,
        Y,
        A,
        M ? Error("react-stack-top-frame") : le,
        M ? q(r(T)) : je
      );
    };
  })()), ln;
}
var To;
function cc() {
  return To || (To = 1, process.env.NODE_ENV === "production" ? Wn.exports = lc() : Wn.exports = ac()), Wn.exports;
}
var p = cc();
const {
  entries: Hi,
  setPrototypeOf: Mo,
  isFrozen: uc,
  getPrototypeOf: dc,
  getOwnPropertyDescriptor: fc
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
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return e.apply(n, s);
});
xs || (xs = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const Vn = Ie(Array.prototype.forEach), hc = Ie(Array.prototype.lastIndexOf), Ro = Ie(Array.prototype.pop), an = Ie(Array.prototype.push), pc = Ie(Array.prototype.splice), rr = Ie(String.prototype.toLowerCase), Vr = Ie(String.prototype.toString), Ur = Ie(String.prototype.match), cn = Ie(String.prototype.replace), mc = Ie(String.prototype.indexOf), gc = Ie(String.prototype.trim), Ue = Ie(Object.prototype.hasOwnProperty), Ne = Ie(RegExp.prototype.test), un = yc(TypeError);
function Ie(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return bs(t, e, r);
  };
}
function yc(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return xs(t, n);
  };
}
function X(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rr;
  Mo && Mo(t, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (uc(e) || (e[r] = o), s = o);
    }
    t[s] = !0;
  }
  return t;
}
function bc(t) {
  for (let e = 0; e < t.length; e++)
    Ue(t, e) || (t[e] = null);
  return t;
}
function et(t) {
  const e = ys(null);
  for (const [n, r] of Hi(t))
    Ue(t, n) && (Array.isArray(r) ? e[n] = bc(r) : r && typeof r == "object" && r.constructor === Object ? e[n] = et(r) : e[n] = r);
  return e;
}
function dn(t, e) {
  for (; t !== null; ) {
    const r = fc(t, e);
    if (r) {
      if (r.get)
        return Ie(r.get);
      if (typeof r.value == "function")
        return Ie(r.value);
    }
    t = dc(t);
  }
  function n() {
    return null;
  }
  return n;
}
const Io = Re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Kr = Re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qr = Re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), xc = Re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Jr = Re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wc = Re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Oo = Re(["#text"]), jo = Re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Gr = Re(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Do = Re(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Un = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vc = Ve(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sc = Ve(/<%[\w\W]*|[\w\W]*%>/gm), Cc = Ve(/\$\{[\w\W]*/gm), kc = Ve(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ac = Ve(/^aria-[\-\w]+$/), Wi = Ve(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ec = Ve(/^(?:\w+script|data):/i), Nc = Ve(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vi = Ve(/^html$/i), Tc = Ve(/^[a-z][.\w]*(-[.\w]+)+$/i);
var zo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Ac,
  ATTR_WHITESPACE: Nc,
  CUSTOM_ELEMENT: Tc,
  DATA_ATTR: kc,
  DOCTYPE_NAME: Vi,
  ERB_EXPR: Sc,
  IS_ALLOWED_URI: Wi,
  IS_SCRIPT_OR_DATA: Ec,
  MUSTACHE_EXPR: vc,
  TMPLIT_EXPR: Cc
});
const fn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Mc = function() {
  return typeof window > "u" ? null : window;
}, Rc = function(e, n) {
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
function Ui() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mc();
  const e = (_) => Ui(_);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== fn.document || !t.Element)
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
  } = t, m = a.prototype, g = dn(m, "cloneNode"), b = dn(m, "remove"), y = dn(m, "nextSibling"), C = dn(m, "childNodes"), k = dn(m, "parentNode");
  if (typeof i == "function") {
    const _ = n.createElement("template");
    _.content && _.content.ownerDocument && (n = _.content.ownerDocument);
  }
  let w, v = "";
  const {
    implementation: N,
    createNodeIterator: O,
    createDocumentFragment: U,
    getElementsByTagName: $
  } = n, {
    importNode: W
  } = r;
  let S = Lo();
  e.isSupported = typeof Hi == "function" && typeof k == "function" && N && N.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ce,
    ERB_EXPR: F,
    TMPLIT_EXPR: q,
    DATA_ATTR: Q,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: le,
    ATTR_WHITESPACE: je,
    CUSTOM_ELEMENT: Xe
  } = zo;
  let {
    IS_ALLOWED_URI: T
  } = zo, z = null;
  const Z = X({}, [...Io, ...Kr, ...qr, ...Jr, ...Oo]);
  let Y = null;
  const A = X({}, [...jo, ...Gr, ...Do, ...Un]);
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
  })), I = null, G = null;
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
  let D = !0, L = !0, V = !1, ee = !0, te = !1, Ae = !0, Ee = !1, ft = !1, Fe = !1, _e = !1, ht = !1, Ft = !1, nn = !0, $n = !1;
  const Ja = "user-content-";
  let Lr = !0, rn = !1, _t = {}, Qe = null;
  const Pr = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let uo = null;
  const fo = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let $r = null;
  const ho = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fn = "http://www.w3.org/1998/Math/MathML", _n = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml";
  let Bt = ot, Fr = !1, _r = null;
  const Ga = X({}, [Fn, _n, ot], Vr);
  let Bn = X({}, ["mi", "mo", "mn", "ms", "mtext"]), Hn = X({}, ["annotation-xml"]);
  const Ya = X({}, ["title", "style", "font", "a", "script"]);
  let sn = null;
  const Xa = ["application/xhtml+xml", "text/html"], Qa = "text/html";
  let pe = null, Ht = null;
  const Za = n.createElement("form"), po = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Br = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ht && Ht === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = et(x), sn = // eslint-disable-next-line unicorn/prefer-includes
      Xa.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? Qa : x.PARSER_MEDIA_TYPE, pe = sn === "application/xhtml+xml" ? Vr : rr, z = Ue(x, "ALLOWED_TAGS") ? X({}, x.ALLOWED_TAGS, pe) : Z, Y = Ue(x, "ALLOWED_ATTR") ? X({}, x.ALLOWED_ATTR, pe) : A, _r = Ue(x, "ALLOWED_NAMESPACES") ? X({}, x.ALLOWED_NAMESPACES, Vr) : Ga, $r = Ue(x, "ADD_URI_SAFE_ATTR") ? X(et(ho), x.ADD_URI_SAFE_ATTR, pe) : ho, uo = Ue(x, "ADD_DATA_URI_TAGS") ? X(et(fo), x.ADD_DATA_URI_TAGS, pe) : fo, Qe = Ue(x, "FORBID_CONTENTS") ? X({}, x.FORBID_CONTENTS, pe) : Pr, I = Ue(x, "FORBID_TAGS") ? X({}, x.FORBID_TAGS, pe) : et({}), G = Ue(x, "FORBID_ATTR") ? X({}, x.FORBID_ATTR, pe) : et({}), _t = Ue(x, "USE_PROFILES") ? x.USE_PROFILES : !1, D = x.ALLOW_ARIA_ATTR !== !1, L = x.ALLOW_DATA_ATTR !== !1, V = x.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = x.SAFE_FOR_TEMPLATES || !1, Ae = x.SAFE_FOR_XML !== !1, Ee = x.WHOLE_DOCUMENT || !1, _e = x.RETURN_DOM || !1, ht = x.RETURN_DOM_FRAGMENT || !1, Ft = x.RETURN_TRUSTED_TYPE || !1, Fe = x.FORCE_BODY || !1, nn = x.SANITIZE_DOM !== !1, $n = x.SANITIZE_NAMED_PROPS || !1, Lr = x.KEEP_CONTENT !== !1, rn = x.IN_PLACE || !1, T = x.ALLOWED_URI_REGEXP || Wi, Bt = x.NAMESPACE || ot, Bn = x.MATHML_TEXT_INTEGRATION_POINTS || Bn, Hn = x.HTML_INTEGRATION_POINTS || Hn, M = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && po(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && po(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (L = !1), ht && (_e = !0), _t && (z = X({}, Oo), Y = [], _t.html === !0 && (X(z, Io), X(Y, jo)), _t.svg === !0 && (X(z, Kr), X(Y, Gr), X(Y, Un)), _t.svgFilters === !0 && (X(z, qr), X(Y, Gr), X(Y, Un)), _t.mathMl === !0 && (X(z, Jr), X(Y, Do), X(Y, Un))), x.ADD_TAGS && (typeof x.ADD_TAGS == "function" ? B.tagCheck = x.ADD_TAGS : (z === Z && (z = et(z)), X(z, x.ADD_TAGS, pe))), x.ADD_ATTR && (typeof x.ADD_ATTR == "function" ? B.attributeCheck = x.ADD_ATTR : (Y === A && (Y = et(Y)), X(Y, x.ADD_ATTR, pe))), x.ADD_URI_SAFE_ATTR && X($r, x.ADD_URI_SAFE_ATTR, pe), x.FORBID_CONTENTS && (Qe === Pr && (Qe = et(Qe)), X(Qe, x.FORBID_CONTENTS, pe)), x.ADD_FORBID_CONTENTS && (Qe === Pr && (Qe = et(Qe)), X(Qe, x.ADD_FORBID_CONTENTS, pe)), Lr && (z["#text"] = !0), Ee && X(z, ["html", "head", "body"]), z.table && (X(z, ["tbody"]), delete I.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = x.TRUSTED_TYPES_POLICY, v = w.createHTML("");
      } else
        w === void 0 && (w = Rc(h, s)), w !== null && typeof v == "string" && (v = w.createHTML(""));
      Re && Re(x), Ht = x;
    }
  }, mo = X({}, [...Kr, ...qr, ...xc]), go = X({}, [...Jr, ...wc]), ec = function(x) {
    let R = k(x);
    (!R || !R.tagName) && (R = {
      namespaceURI: Bt,
      tagName: "template"
    });
    const P = rr(x.tagName), re = rr(R.tagName);
    return _r[x.namespaceURI] ? x.namespaceURI === _n ? R.namespaceURI === ot ? P === "svg" : R.namespaceURI === Fn ? P === "svg" && (re === "annotation-xml" || Bn[re]) : !!mo[P] : x.namespaceURI === Fn ? R.namespaceURI === ot ? P === "math" : R.namespaceURI === _n ? P === "math" && Hn[re] : !!go[P] : x.namespaceURI === ot ? R.namespaceURI === _n && !Hn[re] || R.namespaceURI === Fn && !Bn[re] ? !1 : !go[P] && (Ya[P] || !mo[P]) : !!(sn === "application/xhtml+xml" && _r[x.namespaceURI]) : !1;
  }, Ze = function(x) {
    an(e.removed, {
      element: x
    });
    try {
      k(x).removeChild(x);
    } catch {
      b(x);
    }
  }, Ct = function(x, R) {
    try {
      an(e.removed, {
        attribute: R.getAttributeNode(x),
        from: R
      });
    } catch {
      an(e.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(x), x === "is")
      if (_e || ht)
        try {
          Ze(R);
        } catch {
        }
      else
        try {
          R.setAttribute(x, "");
        } catch {
        }
  }, yo = function(x) {
    let R = null, P = null;
    if (Fe)
      x = "<remove></remove>" + x;
    else {
      const ue = Ur(x, /^[\r\n\t ]+/);
      P = ue && ue[0];
    }
    sn === "application/xhtml+xml" && Bt === ot && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const re = w ? w.createHTML(x) : x;
    if (Bt === ot)
      try {
        R = new f().parseFromString(re, sn);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = N.createDocument(Bt, "template", null);
      try {
        R.documentElement.innerHTML = Fr ? v : re;
      } catch {
      }
    }
    const ve = R.body || R.documentElement;
    return x && P && ve.insertBefore(n.createTextNode(P), ve.childNodes[0] || null), Bt === ot ? $.call(R, Ee ? "html" : "body")[0] : Ee ? R.documentElement : ve;
  }, bo = function(x) {
    return O.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Hr = function(x) {
    return x instanceof d && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof u) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, xo = function(x) {
    return typeof l == "function" && x instanceof l;
  };
  function it(_, x, R) {
    Vn(_, (P) => {
      P.call(e, x, R, Ht);
    });
  }
  const wo = function(x) {
    let R = null;
    if (it(S.beforeSanitizeElements, x, null), Hr(x))
      return Ze(x), !0;
    const P = pe(x.nodeName);
    if (it(S.uponSanitizeElement, x, {
      tagName: P,
      allowedTags: z
    }), Ae && x.hasChildNodes() && !xo(x.firstElementChild) && Ne(/<[/\w!]/g, x.innerHTML) && Ne(/<[/\w!]/g, x.textContent) || x.nodeType === fn.progressingInstruction || Ae && x.nodeType === fn.comment && Ne(/<[/\w]/g, x.data))
      return Ze(x), !0;
    if (!(B.tagCheck instanceof Function && B.tagCheck(P)) && (!z[P] || I[P])) {
      if (!I[P] && So(P) && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, P) || M.tagNameCheck instanceof Function && M.tagNameCheck(P)))
        return !1;
      if (Lr && !Qe[P]) {
        const re = k(x) || x.parentNode, ve = C(x) || x.childNodes;
        if (ve && re) {
          const ue = ve.length;
          for (let Oe = ue - 1; Oe >= 0; --Oe) {
            const lt = g(ve[Oe], !0);
            lt.__removalCount = (x.__removalCount || 0) + 1, re.insertBefore(lt, y(x));
          }
        }
      }
      return Ze(x), !0;
    }
    return x instanceof a && !ec(x) || (P === "noscript" || P === "noembed" || P === "noframes") && Ne(/<\/no(script|embed|frames)/i, x.innerHTML) ? (Ze(x), !0) : (te && x.nodeType === fn.text && (R = x.textContent, Vn([ce, F, q], (re) => {
      R = cn(R, re, " ");
    }), x.textContent !== R && (an(e.removed, {
      element: x.cloneNode()
    }), x.textContent = R)), it(S.afterSanitizeElements, x, null), !1);
  }, vo = function(x, R, P) {
    if (nn && (R === "id" || R === "name") && (P in n || P in Za))
      return !1;
    if (!(L && !G[R] && Ne(Q, R))) {
      if (!(D && Ne(ie, R))) {
        if (!(B.attributeCheck instanceof Function && B.attributeCheck(R, x))) {
          if (!Y[R] || G[R]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(So(x) && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, x) || M.tagNameCheck instanceof Function && M.tagNameCheck(x)) && (M.attributeNameCheck instanceof RegExp && Ne(M.attributeNameCheck, R) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(R, x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              R === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && Ne(M.tagNameCheck, P) || M.tagNameCheck instanceof Function && M.tagNameCheck(P)))
            ) return !1;
          } else if (!$r[R]) {
            if (!Ne(T, cn(P, je, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && x !== "script" && mc(P, "data:") === 0 && uo[x])) {
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
  }, So = function(x) {
    return x !== "annotation-xml" && Ur(x, Xe);
  }, Co = function(x) {
    it(S.beforeSanitizeAttributes, x, null);
    const {
      attributes: R
    } = x;
    if (!R || Hr(x))
      return;
    const P = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let re = R.length;
    for (; re--; ) {
      const ve = R[re], {
        name: ue,
        namespaceURI: Oe,
        value: lt
      } = ve, Wt = pe(ue), Wr = lt;
      let be = ue === "value" ? Wr : gc(Wr);
      if (P.attrName = Wt, P.attrValue = be, P.keepAttr = !0, P.forceKeepAttr = void 0, it(S.uponSanitizeAttribute, x, P), be = P.attrValue, $n && (Wt === "id" || Wt === "name") && (Ct(ue, x), be = Ja + be), Ae && Ne(/((--!?|])>)|<\/(style|title|textarea)/i, be)) {
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
      te && Vn([ce, F, q], (Ao) => {
        be = cn(be, Ao, " ");
      });
      const ko = pe(x.nodeName);
      if (!vo(ko, Wt, be)) {
        Ct(ue, x);
        continue;
      }
      if (w && typeof h == "object" && typeof h.getAttributeType == "function" && !Oe)
        switch (h.getAttributeType(ko, Wt)) {
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
          Oe ? x.setAttributeNS(Oe, ue, be) : x.setAttribute(ue, be), Hr(x) ? Ze(x) : Ro(e.removed);
        } catch {
          Ct(ue, x);
        }
    }
    it(S.afterSanitizeAttributes, x, null);
  }, tc = function _(x) {
    let R = null;
    const P = bo(x);
    for (it(S.beforeSanitizeShadowDOM, x, null); R = P.nextNode(); )
      it(S.uponSanitizeShadowNode, R, null), wo(R), Co(R), R.content instanceof o && _(R.content);
    it(S.afterSanitizeShadowDOM, x, null);
  };
  return e.sanitize = function(_) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, P = null, re = null, ve = null;
    if (Fr = !_, Fr && (_ = "<!-->"), typeof _ != "string" && !xo(_))
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
        if (!z[lt] || I[lt])
          throw un("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof l)
      R = yo("<!---->"), P = R.ownerDocument.importNode(_, !0), P.nodeType === fn.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? R = P : R.appendChild(P);
    else {
      if (!_e && !te && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return w && Ft ? w.createHTML(_) : _;
      if (R = yo(_), !R)
        return _e ? null : Ft ? v : "";
    }
    R && Fe && Ze(R.firstChild);
    const ue = bo(rn ? _ : R);
    for (; re = ue.nextNode(); )
      wo(re), Co(re), re.content instanceof o && tc(re.content);
    if (rn)
      return _;
    if (_e) {
      if (ht)
        for (ve = U.call(R.ownerDocument); R.firstChild; )
          ve.appendChild(R.firstChild);
      else
        ve = R;
      return (Y.shadowroot || Y.shadowrootmode) && (ve = W.call(r, ve, !0)), ve;
    }
    let Oe = Ee ? R.outerHTML : R.innerHTML;
    return Ee && z["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Ne(Vi, R.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Oe), te && Vn([ce, F, q], (lt) => {
      Oe = cn(Oe, lt, " ");
    }), w && Ft ? w.createHTML(Oe) : Oe;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(_), ft = !0;
  }, e.clearConfig = function() {
    Ht = null, ft = !1;
  }, e.isValidAttribute = function(_, x, R) {
    Ht || Br({});
    const P = pe(_), re = pe(x);
    return vo(P, re, R);
  }, e.addHook = function(_, x) {
    typeof x == "function" && an(S[_], x);
  }, e.removeHook = function(_, x) {
    if (x !== void 0) {
      const R = hc(S[_], x);
      return R === -1 ? void 0 : pc(S[_], R, 1)[0];
    }
    return Ro(S[_]);
  }, e.removeHooks = function(_) {
    S[_] = [];
  }, e.removeAllHooks = function() {
    S = Lo();
  }, e;
}
Ui();
const Ic = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Oc = ["mp4", "webm", "ogg"], jc = ["txt", "json", "csv"], Dc = ["pdf"], Po = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function zc(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
const Ki = (t) => /^https?:\/\//i.test(t);
function Lc(t, e = "create", n = "Info") {
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
const Fo = (t) => t == null || t === "", Sn = (t, e, n, r, s, o) => {
  const i = o === "create" && s ? Gi(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = o === "create" && s ? Ji(l) : null;
    o === "create" && u && i[u] !== void 0 && Fo(c) && (c = i[u]), Fo(c) && l.default && (c = l.default), Po.includes(l.type ?? "") ? e[a] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    if (Po.includes(l.type ?? "")) {
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
              const g = m.replace(/-/g, "/"), [b, y, C] = g.split("/");
              if (!b || !y || !C) return !1;
              const k = /* @__PURE__ */ new Date(`${C}-${y}-${b}`);
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
            const b = Number(g);
            if (isNaN(b)) return m;
            if (typeof m == "number" && !isNaN(m)) {
              const y = Number(m);
              return Number.isInteger(y) ? Number(b.toFixed(y)) : b;
            }
            return b;
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
}, In = {
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
function On(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const jn = (t) => t === !0 || t === "true", ct = (t, e) => typeof t == "string" ? t.replace(
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
  return n.map((o) => {
    const i = o[t], l = o[e];
    return i == null || l == null ? null : {
      value: String(i),
      label: String(l),
      group: s && o[s] ? String(o[s]) : void 0
    };
  }).filter(Boolean);
}, cr = (t, e) => {
  if (!(!t || e == null))
    return t.find((n) => String(n.value) === String(e))?.label;
}, Pc = (t) => t.reduce((e, n) => {
  const r = n.group || "__ungrouped__";
  return e[r] || (e[r] = []), e[r].push(n), e;
}, {}), $c = (t) => t.map((e) => [e.value, e.label]);
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
const Fc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function _c(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function kt(t, e, n) {
  const r = Ji(e);
  r && n && Vc(n, r, t);
}
function Bc(t) {
  if (!t || typeof t != "object") return !1;
  const e = t.src;
  return typeof t.target == "string" && typeof e == "object" && e !== null && (e.type === "api" || typeof e.queryid == "string" || typeof e.table == "string" && typeof e.columns < "u");
}
function Hc(t) {
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
}, Wc = "__form_persist__", qi = (t) => `${Wc}:${t}`;
function Ji(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Gi(t) {
  try {
    return JSON.parse(localStorage.getItem(qi(t)) || "{}");
  } catch {
    return {};
  }
}
function Vc(t, e, n) {
  const r = Gi(t);
  localStorage.setItem(
    qi(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function Uc(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function Kc(t) {
  return Ic.includes(t) ? "image" : Oc.includes(t) ? "video" : Dc.includes(t) ? "pdf" : jc.includes(t) ? "text" : "other";
}
const _o = {
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
const qc = (t) => t.type === "camera2" ? {
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
}, Fs = (t) => t && !t.includes("fakepath"), Yi = ({
  uploads: t,
  currentValue: e,
  multiple: n
}) => {
  const r = (Array.isArray(e) ? e : e ? [e] : []).filter(Fs), s = t.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...s];
}, Gc = (t) => t === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : t, Yc = (t) => t >= 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(2)} MB` : `${(t / 1024).toFixed(0)} KB`, Xi = ({
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
        `File "${a.name}" exceeds max size of ${Yc(r)}`
      ), t.currentTarget.value = "", null;
  }
  return s;
}, Ut = (t, e) => {
  const n = Yr(t.options_top), r = Yr(t.options), s = e ?? [], o = Yr(t.options_bottom), i = /* @__PURE__ */ new Set(), l = (a) => a.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(o)
  ];
}, Er = (t) => {
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
}, Xc = (t) => {
  const e = t?.data;
  return Array.isArray(e?.results?.options) ? e.results.options[0] : Array.isArray(e?.data) ? e.data[0] : Array.isArray(e?.results) ? e.results[0] : Array.isArray(e) ? e[0] : e?.results ?? e;
}, bn = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Zr = async (t) => (await fe.get(
  t.baseURL + t.dbopsGetHash,
  { headers: bn(t) }
)).data.refhash, es = async (t, e) => (await fe.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: bn(t) }
)).data.refid, Qc = {
  async fetch(t, e, n, r) {
    const s = await Zr(t);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await es(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await fe.post(
      t.baseURL + t.dbopsFetch,
      { refid: i, datahash: s },
      { headers: bn(t) }
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
      { headers: bn(t) }
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
      { headers: bn(t) }
    )).data;
  }
};
async function Kn(t, e, n, r = void 0, s = void 0, o = {}) {
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
async function Qi(t, e) {
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
async function Zi(t, e) {
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
async function el(t, e) {
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
function Zc({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: a
}) {
  const [c, u] = He(!1), [d, f] = He(!1), [h, m] = He(
    Ut(t, i ?? [])
  ), [g, b] = He(""), [y, C] = He(0), k = yn(null), w = yn(null), [v, N] = He(!1), O = yn(g), U = t.disabled === !0;
  De(() => {
    O.current = g;
  }, [g]), De(() => {
    if (t.type !== "select" || t.multiple || t["no-option"] !== "false" || e.values[$] || h.length === 0) return;
    const M = h[0]?.value;
    M != null && e.setFieldValue($, M, !1);
  }, [h]), De(() => {
    i && m(Ut(t, i));
  }, [i]), De(() => {
    window.formAPI = {
      setValue: (A, M) => {
        e.setFieldValue(A, M);
      },
      getValue: (A) => e.values[A],
      setValues: (A) => {
        Object.entries(A).forEach(([M, I]) => {
          e.setFieldValue(M, I);
        });
      },
      getValues: () => e.values
    }, window.setFieldValue = (A, M) => {
      e.setFieldValue(A, M);
    };
  }, [e]), De(() => {
    if (!v) return;
    const A = (M) => {
      const I = M.target;
      w.current?.contains(I) || k.current?.contains(I) || (N(!1), b(""));
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [v]);
  const $ = t.name;
  De(() => {
    let A = !0;
    return (async () => {
      let I = t.valueKey ?? "value", G = t.labelKey ?? "title";
      const B = t?.source ?? {};
      if (t.type === "dataMethod") {
        const D = t.method, L = D ? n[D] : void 0;
        if (L)
          try {
            const V = await L(), ee = Array.isArray(V.data?.results?.options) ? V.data?.results?.options : Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V.data?.results) ? V.data?.results : Array.isArray(V?.data) ? V.data : V, te = Array.isArray(ee) ? ee.map(Vt) : [], Ae = hn(I, G, te, t.groupKey);
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
          }, L = await fe(D), V = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L, ee = Array.isArray(V) ? V.map(Vt) : [], te = hn(I, G, ee, t.groupKey);
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
          const L = await Kn(r, D, t?.queryid, void 0, o), V = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, ee = Array.isArray(V) ? V.map(Vt) : [], te = hn(I, G, ee, t.groupKey);
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
    () => $c(h),
    [h]
  ), q = nr(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !g.trim()) return null;
    const A = g.trim().toLowerCase();
    return F.find(([, M]) => M.trim().toLowerCase() === A);
  }, [t.type, g, F]), Q = F.length, ie = !!(t.search && (t.queryid || t.table)), le = nr(() => ie || !g ? F : F.filter(
    ([, A]) => A.toLowerCase().includes(g.toLowerCase())
  ), [ie, g, F]), je = (A, M) => {
    if (v)
      if (A.key === "ArrowDown")
        A.preventDefault(), C(
          (I) => I + 1 < le.length ? I + 1 : 0
        );
      else if (A.key === "ArrowUp")
        A.preventDefault(), C(
          (I) => I - 1 >= 0 ? I - 1 : le.length - 1
        );
      else if (A.key === "Enter") {
        A.preventDefault();
        const [I] = le[y] || [];
        if (I) {
          let G = M ? I : [...e.values[t.name], I];
          e.setFieldValue(t.name, G), kt(G, t, o);
        }
        N(!1);
      } else A.key === "Escape" && (b(""), N(!1));
  };
  De(() => {
    k.current?.querySelector(
      `[data-index="${y}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [y]), De(() => {
    y >= le.length && C(0);
  }, [le, y]), De(() => {
    const A = t.autocomplete, M = t.ajaxchain;
    if (!A && !M) return;
    const I = e.values[t.name];
    if (!I) return;
    const G = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Bc(A)) {
          const D = A.src;
          if (!D || !r) return;
          let L;
          if ("type" in D && D.type === "api") {
            let ee = t.name;
            typeof t.parameter == "string" && t.parameter && (ee = t.parameter);
            const te = { [ee]: I, refid: I };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [ft, Fe] of Object.entries(t.parameter))
                te[ft] = ft === ee ? I : e.values?.[Fe];
            const Ae = {
              method: D.method || "GET",
              url: r?.baseURL + D.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...D.method === "GET" ? { params: te } : { data: te }
            }, Ee = await fe(Ae);
            L = Xc(Ee);
          } else {
            let ee;
            if (!D.queryid) {
              if (!D.table || !D.columns)
                throw new Error("SQL query requires field.table");
              const Ae = ct(D?.where ?? {}, {
                refid: I
              });
              ee = {
                ...D,
                table: D.table,
                cols: D.columns,
                where: Ae
              };
            }
            const { data: te } = await Kn(r, ee, D?.queryid, I, o);
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
            let _e = { [Fe]: I, refid: I };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [nn, $n] of Object.entries(t.parameter))
                _e[nn] = nn === Fe ? I : e.values?.[$n];
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
                refid: I
              });
              Fe = {
                ...L,
                table: L.table,
                cols: L.columns,
                where: ht
              };
            }
            const { data: _e } = await Kn(r, Fe, L?.queryid, I, o);
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
    if (!ie || !g.trim() || !r) return;
    const A = Hc(t.columns ?? ""), M = new AbortController(), I = setTimeout(async () => {
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
        const { data: V } = await Kn(r, G, t?.queryid, void 0, o, B), ee = Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V?.data) ? V.data : V, te = Array.isArray(ee) ? ee.map(Vt) : [], Ae = hn(
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
      clearTimeout(I), M.abort();
    };
  }, [ie, g, s]);
  const Xe = async (A) => {
    if (A.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const M = await Zi(r, A), I = Yi({
        uploads: M,
        currentValue: e.values[$],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        $,
        I
      ), kt(I, t, o);
    } catch (M) {
      console.error("File upload failed", M), e.setFieldError($, "File upload failed");
    }
  }, T = async (A) => {
    const M = Array.isArray(e.values[$]) ? e.values[$] : [], I = A.split("&")[0];
    if (!I) return;
    const G = M.filter((B) => B.split("&")[0] !== I);
    e.setFieldValue($, G);
    try {
      await el(r, I), kt(G, t, o);
    } catch (B) {
      console.log(B), e.setFieldValue($, M), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, z = async (A, M, I) => {
    const G = M[A];
    if (!G) return;
    const B = n?.[G];
    if (typeof B != "function") {
      console.error(`Method "${String(G)}" not found`);
      return;
    }
    try {
      await Promise.resolve(B(I));
    } catch (D) {
      console.error(`Method "${String(G)}" failed`, D);
    }
  };
  return {
    setHighlightedIndex: C,
    executeFieldMethod: z,
    handleFileUpload: Xe,
    handleKeyDown: je,
    setSearch: b,
    setOpen: N,
    setIsFocused: u,
    handleInputChange: (A) => {
      if (U) return;
      const M = A.target.value;
      b(M), C(0), M.trim() ? N(!0) : (N(!1), e.setFieldValue($, ""));
    },
    handleSelect: (A) => {
      e.setFieldValue($, A), kt(A, t, o), b(""), N(!1), z("onChange", t, `${$}-${A}`);
    },
    handlePersist: kt,
    setLoading: f,
    removeFile: T,
    optionCount: Q,
    baseInputClasses: W,
    focusClasses: S,
    labelClasses: ce,
    search: g,
    highlightedIndex: y,
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
function _s({
  anchorRef: t,
  open: e,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = He({}), l = yn(null);
  return nc(() => {
    if (!e || !t.current || !l.current) return;
    const a = t.current, c = () => {
      const d = a.getBoundingClientRect(), f = window.innerHeight, h = l.current?.offsetHeight || s, m = f - d.bottom, g = d.top, y = m < h && g > m ? d.top - h - r : d.bottom + r;
      i({
        position: "fixed",
        top: y,
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
  }, [e, t, r, s]), e ? rc(
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
  setOpen: b
}) {
  const y = t.name;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: y,
        value: JSON.stringify(c.values[y] ?? "")
      }
    ),
    /* @__PURE__ */ p.jsxs("label", { className: r, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: y,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${e ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: m,
        tabIndex: 0,
        onClick: () => {
          e || b((C) => !C);
        },
        onKeyDown: (C) => {
          e || n(C, !0);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: c.values[y] ? cr(h, c.values[y]) ?? "Select option" : `Select ${t.label}` }),
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
          i.length > 0 && /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: (C) => {
                C.preventDefault(), C.stopPropagation(), c.setFieldValue(y, ""), b(!1), d("", t, f), a("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([C, k], w) => /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `${y}-${C}`,
              "data-index": w,
              onClick: (v) => {
                v.preventDefault(), v.stopPropagation(), c.setFieldValue(y, C), d(C, t, f), b(!1), a(""), u("onChange", t, `${y}-${C}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[y] === C ? "bg-indigo-50 text-indigo-600 font-medium" : l === w ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: k
            },
            C
          )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[y] && c.errors[y] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[y]) })
  ] });
}
const eu = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ p.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ p.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ p.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ p.jsx("source", { src: t }) }) : /* @__PURE__ */ p.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ p.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ p.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function tu(t) {
  const e = _o[t] ?? _o.other;
  return /* @__PURE__ */ p.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const nu = ({ filePath: t, sqlOpsUrls: e }) => {
  const n = t.replace(/^[^&]*&/, ""), [r, s] = He(null), [o, i] = He(!1), l = Uc(n), a = Kc(l);
  De(() => {
    if (Ki(n)) {
      s(n);
      return;
    }
    if (!e) return;
    if (!Fs(t)) {
      console.log("skipping preview:", t);
      return;
    }
    if (a !== "image" && !o) return;
    let u = !0, d = null;
    return Qi(n, e).then((f) => {
      u && (d = f, s(f));
    }), () => {
      u = !1, d && URL.revokeObjectURL(d);
    };
  }, [a, o, n, e]);
  let c = n.split("/").pop();
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    a === "image" && r ? /* @__PURE__ */ p.jsx(
      "img",
      {
        src: r,
        alt: c,
        title: "Click to preview",
        onClick: () => i(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ p.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (u) => u.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          tu(a),
          /* @__PURE__ */ p.jsx("span", { className: "text-sm", children: c })
        ]
      }
    ),
    o && /* @__PURE__ */ p.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ p.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => i(!1),
          children: "✕"
        }
      ),
      r ? /* @__PURE__ */ p.jsx(eu, { fileUrl: r, category: a }) : /* @__PURE__ */ p.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
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
  open: b,
  setOpen: y
}) {
  const C = t.name, k = m.map((v) => v.value), w = k.every((v) => r.includes(v));
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "hidden",
        name: C,
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
        id: C,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          e || y((v) => !v);
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
    /* @__PURE__ */ p.jsx(_s, { anchorRef: g, open: b && !e, children: /* @__PURE__ */ p.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: i,
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
                  const N = v.target.checked ? k : [];
                  u.setFieldValue(C, N), f(N, t, h), d("onChange", t, C);
                },
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([v, N], O) => /* @__PURE__ */ p.jsxs(
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
            N
          ]
        },
        v
      )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[C] && u.errors[C] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[C]) })
  ] });
}
function ru({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const r = t.replace(/^[^&]*&/, ""), [s, o] = He(null);
  return De(() => {
    if (Ki(r)) {
      o(r);
      return;
    }
    if (!n) return;
    let i = !0, l = null;
    if (!Fs(t)) {
      console.log("skipping preview:", t);
      return;
    }
    return Qi(r, n).then((a) => {
      i && (l = a, o(a));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
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
function tl({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const o = yn(null), i = e.max !== void 0 ? Number(e.max) : 1 / 0, l = Array.isArray(t.values[s]) ? t.values[s] : t.values[s] ? [t.values[s]] : [], a = async (f) => {
    const h = Xi({
      e: f,
      existingFiles: l,
      maxFiles: i,
      maxFileSize: e.file_size
    });
    if (h)
      try {
        const m = await Zi(n, h), g = Yi({
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
    const g = h.filter((b) => b.split("&")[0] !== m);
    t.setFieldValue(s, g);
    try {
      if (!f.split("&")[0]) return;
      await el(n, m), kt(g, e, r);
    } catch {
      t.setFieldValue(s, h), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, u = qc(e), d = e.multiple === !0;
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
              ru,
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
              onClick: () => o.current?.click(),
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ p.jsx("i", { className: `fa-solid ${Jc(e)} text-2xl text-gray-400` })
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
    var r = n && n != t ? this.remove(n) : this, s = r.find(t), o = r.content.slice();
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new xe(o);
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
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new xe(s);
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
function nl(t, e, n) {
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
      let i = nl(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function rl(t, e, n, r) {
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
      let c = rl(i.content, l.content, n - 1, r - 1);
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
    return nl(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return rl(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return qn(0, e);
    if (e == this.size)
      return qn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? qn(n + 1, o) : qn(n, r);
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
const ts = { index: 0, offset: 0 };
function qn(t, e) {
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
let oe = class vs {
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
oe.none = [];
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
    let r = ol(this.content, e + this.openStart, n);
    return r && new j(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new j(sl(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      s++;
    return new j(e, r, s);
  }
}
j.empty = new j(E.empty, 0, 0);
function sl(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: l } = t.findIndex(n);
  if (s == e || o.isText) {
    if (l != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(sl(o.content, e - s - 1, n - s - 1)));
}
function ol(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = ol(i.content, e - o - 1, n, i);
  return l && t.replaceChild(s, i.copy(l));
}
function su(t, e, n) {
  if (n.openStart > t.depth)
    throw new dr("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new dr("Inconsistent open depths");
  return il(t, e, n, 0);
}
function il(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = il(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, l = i.content;
      return Tt(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: i, end: l } = ou(n, t);
      return Tt(o, al(t, i, l, e, r));
    }
  else return Tt(o, fr(t, e, r));
}
function ll(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new dr("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Ss(t, e, n) {
  let r = t.node(n);
  return ll(r, e.node(n)), r;
}
function Nt(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function xn(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (Nt(t.nodeAfter, r), o++));
  for (let l = o; l < i; l++)
    Nt(s.child(l), r);
  e && e.depth == n && e.textOffset && Nt(e.nodeBefore, r);
}
function Tt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function al(t, e, n, r, s) {
  let o = t.depth > s && Ss(t, e, s + 1), i = r.depth > s && Ss(n, r, s + 1), l = [];
  return xn(null, t, s, l), o && i && e.index(s) == n.index(s) ? (ll(o, i), Nt(Tt(o, al(t, e, n, r, s + 1)), l)) : (o && Nt(Tt(o, fr(t, e, s + 1)), l), xn(e, n, s, l), i && Nt(Tt(i, fr(n, r, s + 1)), l)), xn(r, null, s, l), new E(l);
}
function fr(t, e, n) {
  let r = [];
  if (xn(null, t, n, r), t.depth > n) {
    let s = Ss(t, e, n + 1);
    Nt(Tt(s, fr(t, e, n + 1)), r);
  }
  return xn(e, null, n, r), new E(r);
}
function ou(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(E.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class Cn {
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
      return oe.none;
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
    let r = [], s = 0, o = n;
    for (let i = e; ; ) {
      let { index: l, offset: a } = i.content.findIndex(o), c = o - a;
      if (r.push(i, l, s + a), !c || (i = i.child(l), i.isText))
        break;
      o = c - 1, s += a + 1;
    }
    return new Cn(n, r, o);
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
      Wo.set(e, r = new iu());
    let s = r.elts[r.i] = Cn.resolve(e, n);
    return r.i = (r.i + 1) % lu, s;
  }
}
class iu {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const lu = 12, Wo = /* @__PURE__ */ new WeakMap();
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
const au = /* @__PURE__ */ Object.create(null);
class tt {
  /**
  @internal
  */
  constructor(e, n, r, s = oe.none) {
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
    return this.type == e && ur(this.attrs, n || e.defaultAttrs || au) && oe.sameSet(this.marks, r || oe.none);
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
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), l = s.start(i), c = s.node(i).content.cut(s.pos - l, o.pos - l);
    return new j(c, s.depth - i, o.depth - i);
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
    return su(this.resolve(e), this.resolve(n), r);
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
    return Cn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Cn.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), cl(this.marks, e);
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
    let e = oe.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!oe.sameSet(e, this.marks))
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
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : cl(this.marks, JSON.stringify(this.text));
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
function cl(t, e) {
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
    let r = new cu(e, n);
    if (r.next == null)
      return Ot.empty;
    let s = ul(r);
    r.next && r.err("Unexpected trailing text");
    let o = gu(mu(s));
    return yu(o, r), o;
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
Ot.empty = new Ot(!0);
class cu {
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
function ul(t) {
  let e = [];
  do
    e.push(uu(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function uu(t) {
  let e = [];
  do
    e.push(du(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function du(t) {
  let e = pu(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = fu(t, e);
    else
      break;
  return e;
}
function Vo(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function fu(t, e) {
  let n = Vo(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Vo(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function hu(t, e) {
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
function pu(t) {
  if (t.eat("(")) {
    let e = ul(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = hu(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function mu(t) {
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
function dl(t, e) {
  return e - t;
}
function Uo(t, e) {
  let n = [];
  return r(e), n.sort(dl);
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
function gu(t) {
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
    let o = e[r.join(",")] = new Ot(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let l = s[i][1].sort(dl);
      o.next.push({ type: s[i][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function yu(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      i.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function fl(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function hl(t, e) {
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
function pl(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function ml(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new xu(t, r, e[r]);
  return n;
}
let Ko = class gl {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ml(e, r.attrs), this.defaultAttrs = fl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return !e && this.defaultAttrs ? this.defaultAttrs : hl(this.attrs, e);
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
    return new tt(this, this.computeAttrs(e), E.from(n), oe.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = E.from(n), this.checkContent(n), new tt(this, this.computeAttrs(e), n, oe.setFrom(r));
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
    return o ? new tt(this, e, n.append(o), oe.setFrom(r)) : null;
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
    pl(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : oe.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new gl(o, n, i));
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
function bu(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class xu {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? bu(e, n, r.validate) : r.validate;
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
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = ml(e, s.attrs), this.excluded = null;
    let o = fl(this.attrs);
    this.instance = o ? new oe(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new oe(this, hl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new Nr(o, s++, n, i)), r;
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
    pl(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class wu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = xe.from(e.nodes), n.marks = xe.from(e.marks || {}), this.nodes = Ko.compile(this.spec.nodes, this), this.marks = Nr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = Ot.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
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
    this.nodeFromJSON = (s) => tt.fromJSON(this, s), this.markFromJSON = (s) => oe.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    return new pr(r, r.defaultAttrs, e, oe.setFrom(n));
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
function vu(t) {
  return t.tag != null;
}
function Su(t) {
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
      if (vu(s))
        this.tags.push(s);
      else if (Su(s)) {
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
    return r.addAll(e, oe.none, n.from, n.to), r.finish();
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
    return r.addAll(e, oe.none, n.from, n.to), j.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (Au(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
    return e.cached.domParser || (e.cached.domParser = new Mt(e, Mt.schemaRules(e)));
  }
}
const yl = {
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
}, Cu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, bl = { ol: !0, ul: !0 }, kn = 1, Cs = 2, wn = 4;
function Jo(t, e, n) {
  return e != null ? (e ? kn : 0) | (e === "full" ? Cs : 0) : t && t.whitespace == "pre" ? kn | Cs : n & ~wn;
}
class Jn {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = oe.none, this.match = o || (i & wn ? null : e.contentMatch);
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
    if (!(this.options & kn)) {
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
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !yl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Go {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = Jo(null, n.preserveWhitespace, 0) | (r ? wn : 0);
    s ? o = new Jn(s.type, s.attrs, oe.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new Jn(null, null, oe.none, !0, null, i) : o = new Jn(e.schema.topNodeType, null, oe.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, o = s.options & Cs ? "full" : this.localPreserveWS || (s.options & kn) > 0, { schema: i } = this.parser;
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
    bl.hasOwnProperty(i) && this.parser.normalizeLists && ku(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Cu.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (yl.hasOwnProperty(i))
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
      let i = oe.none;
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
    let l = Jo(e, o, i.options);
    i.options & wn && i.content.length == 0 && (l |= wn);
    let a = oe.none;
    return r = r.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : Xo(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Jn(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= kn);
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
function ku(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && bl.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Au(t, e) {
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
function ns(t) {
  return t.document || window.document;
}
const Zo = /* @__PURE__ */ new WeakMap();
function Eu(t) {
  let e = Zo.get(t);
  return e === void 0 && Zo.set(t, e = Nu(t)), e;
}
function Nu(t) {
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
  let s = e[0], o;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Eu(r)) && o.indexOf(e) > -1)
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
const xl = 65535, wl = Math.pow(2, 16);
function Tu(t, e) {
  return t + e * wl;
}
function ei(t) {
  return t & xl;
}
function Mu(t) {
  return (t - (t & xl)) / wl;
}
const vl = 1, Sl = 2, or = 4, Cl = 8;
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
    return (this.delInfo & Cl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (vl | or)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Sl | or)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & or) > 0;
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
    let n = 0, r = ei(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Mu(e);
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
        let m = e == (n < 0 ? a : d) ? null : Tu(l / 3, e - a), g = e == a ? Sl : e == d ? vl : or;
        return (n < 0 ? e != a : e != d) && (g |= Cl), new ks(h, g, m);
      }
      s += u - c;
    }
    return r ? e + s : new ks(e + s, 0, null);
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
    } catch (o) {
      if (o instanceof dr)
        return he.fail(o.message);
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
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new j(Bs(n.content, (i, l) => !i.isAtom || !l.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return he.fromReplace(e, this.from, this.to, o);
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
    let n = e.slice(this.from, this.to), r = new j(Bs(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
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
  constructor(e, n, r, s, o, i, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = s, this.slice = o, this.insert = i, this.structure = l;
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
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new ye(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
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
function Ru(t, e, n, r) {
  let s = [], o = [], i, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), m = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(m) || (i && i.to == f && i.mark.eq(d[g]) ? i.to = h : s.push(i = new Ke(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new gt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function Iu(t, e, n, r) {
  let s = [], o = 0;
  t.doc.nodesBetween(e, n, (i, l) => {
    if (!i.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Nr) {
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
  }), s.forEach((i) => t.step(new Ke(i.from, i.to, i.style)));
}
function Hs(t, e, n, r = n.contentMatch, s = !0) {
  let o = t.doc.nodeAt(e), i = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      i.push(new ge(l, u, j.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Ke(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, m;
        for (; f = h.exec(c.text); )
          m || (m = new j(E.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), i.push(new ge(l + f.index, l + f.index + f[0].length, m));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(E.empty, !0);
    t.replace(l, l, new j(a, 0, 0));
  }
  for (let a = i.length - 1; a >= 0; a--)
    t.step(i[a]);
}
function Ou(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function en(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(l, a, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Ou(i, l, a))
      break;
    l && (s = 1), a < i.childCount && (o = 1);
  }
  return null;
}
function ju(t, e, n) {
  let { $from: r, $to: s, depth: o } = e, i = r.before(o + 1), l = s.after(o + 1), a = i, c = l, u = E.empty, d = 0;
  for (let m = o, g = !1; m > n; m--)
    g || r.index(m) > 0 ? (g = !0, u = E.from(r.node(m).copy(u)), d++) : a--;
  let f = E.empty, h = 0;
  for (let m = o, g = !1; m > n; m--)
    g || s.after(m + 1) < s.end(m) ? (g = !0, f = E.from(s.node(m).copy(f)), h++) : c++;
  t.step(new ye(a, c, i, l, new j(u.append(f), d, h), u.size - d, !0));
}
function kl(t, e, n = null, r = t) {
  let s = Du(t, e), o = s && zu(r, e);
  return o ? s.map(ti).concat({ type: e, attrs: n }).concat(o.map(ti)) : null;
}
function ti(t) {
  return { type: t, attrs: null };
}
function Du(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function zu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let a = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : i;
}
function Lu(t, e, n) {
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
  t.step(new ye(s, o, s, o, new j(r, 0, 0), n.length, !0));
}
function Pu(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (i, l) => {
    let a = typeof s == "function" ? s(i) : s;
    if (i.isTextblock && !i.hasMarkup(r, a) && $u(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", m = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !m ? c = !1 : !h && m && (c = !0);
      }
      c === !1 && El(t, i, l, o), Hs(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(o), d = u.map(l, 1), f = u.map(l + i.nodeSize, 1);
      return t.step(new ye(d, f, d + 1, f - 1, new j(E.from(r.create(a, null, i.marks)), 0, 0), 1, !0)), c === !0 && Al(t, i, l, o), !1;
    }
  });
}
function Al(t, e, n, r) {
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
function $u(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function Fu(t, e, n, r, s) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let i = n.create(r, null, s || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, i);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new ye(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new j(E.from(i), 0, 0), 1, !0));
}
function ut(t, e, n = 1, r) {
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
function _u(t, e, n = 1, r) {
  let s = t.doc.resolve(e), o = E.empty, i = E.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    o = E.from(s.node(l).copy(o));
    let u = r && r[c];
    i = E.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
  }
  t.step(new ge(e, e, new j(o.append(i), n, n), !0));
}
function Lt(t, e) {
  let n = t.resolve(e), r = n.index();
  return Nl(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Bu(t, e) {
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
  return !!(t && e && !t.isLeaf && Bu(t, e));
}
function Mr(t, e, n = -1) {
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
function Hu(t, e, n) {
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
  if (t.step(new ge(c, a.map(e + n, -1), j.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    Al(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function Wu(t, e, n) {
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
function Vu(t, e, n) {
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
function Rr(t, e, n = e, r = j.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return Tl(s, o, r) ? new ge(e, n, r) : new Uu(s, o, r).fit();
}
function Tl(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Uu {
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
    let a = new j(o, i, l);
    return e > -1 ? new ye(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new ge(r.pos, s.pos, a) : null;
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
        r ? (o = ss(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
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
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new j(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new j(mn(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new j(mn(e, n, 1), n, r);
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
      let g = l.child(c), b = d.matchType(g.type);
      if (!b)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (d = b, u.push(Ml(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = gn(this.placed, n, E.from(u)), this.frontier[n].match = d, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, b = l; g < h; g++) {
      let y = b.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), b = y.content;
    }
    this.unplaced = m ? e == 0 ? j.empty : new j(mn(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new j(mn(i.content, e, c), i.openStart, i.openEnd);
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
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = is(e, n, s, r, o);
      if (i) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = is(e, l, c, a, !0);
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
    n.fit.childCount && (this.placed = gn(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
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
function Ml(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Ml(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(E.empty, !0)))), t.copy(r);
}
function is(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, i);
  return l && !Ku(n, o.content, i) ? l : null;
}
function Ku(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function qu(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Ju(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Tl(s, o, r))
    return t.step(new ge(e, n, r));
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
    let h = c[f], m = qu(h.type);
    if (m && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (m || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < i.length; g++) {
        let b = i[(g + a) % i.length], y = !0;
        b < 0 && (y = !1, b = -b);
        let C = s.node(b - 1), k = s.index(b - 1);
        if (C.canReplaceWith(k, k, m.type, m.marks))
          return t.replace(s.before(b), y ? o.after(b) : n, new j(Rl(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = i[f];
    h < 0 || (e = s.before(h), n = o.after(h));
  }
}
function Rl(t, e, n, r, s) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Rl(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = s.contentMatchAt(0), i = o.fillBefore(t).append(t);
    t = i.append(o.matchFragment(i).fillBefore(E.empty, !0));
  }
  return t;
}
function Gu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = Wu(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new j(E.from(r), 0, 0));
}
function Yu(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), o = Il(r, s);
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
    for (let o in n.attrs)
      r[o] = n.attrs[o];
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
class An extends ke {
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
    return new An(this.attr, e.attrs[this.attr]);
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
    return new An(n.attr, n.value);
  }
}
ke.jsonID("docAttr", An);
let Xt = class extends Error {
};
Xt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Xt.prototype = Object.create(Error.prototype);
Xt.prototype.constructor = Xt;
Xt.prototype.name = "TransformError";
class Ol {
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
    return Ju(this, e, n, r), this;
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
    return Gu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Yu(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return ju(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return Hu(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Lu(this, e, n), this;
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
    return Fu(this, e, n, r, s), this;
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
    return this.step(new An(e, n)), this;
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
    if (n instanceof oe)
      n.isInSet(r.marks) && this.step(new jt(e, n));
    else {
      let s = r.marks, o, i = [];
      for (; o = n.isInSet(s); )
        i.push(new jt(e, o)), s = o.removeFromSet(s);
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
    return _u(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Ru(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Iu(this, e, n, r), this;
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
const ls = /* @__PURE__ */ Object.create(null);
class J {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new jl(e.min(n), e.max(n))];
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
    let o = e.steps.length, i = this.ranges;
    for (let l = 0; l < i.length; l++) {
      let { $from: a, $to: c } = i[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? j.empty : n), l == 0 && si(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
    let s = e.parent.inlineContent ? new K(e) : qt(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? qt(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : qt(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
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
class jl {
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
class K extends J {
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
      let o = J.findFrom(n, r, !0) || J.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
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
    let { deleted: r, pos: s } = n.mapResult(this.anchor), o = e.resolve(s);
    return r ? J.near(o) : new H(o);
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
    return new Ws(this.anchor);
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
class Ws {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Ir(r, r) : new Ws(r);
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
    return Xu;
  }
}
J.jsonID("all", Pe);
const Xu = {
  map() {
    return this;
  },
  resolve(t) {
    return new Pe(t);
  }
};
function qt(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return K.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let l = e.child(i);
    if (l.isAtom) {
      if (!o && H.isSelectable(l))
        return H.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = qt(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
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
  if (!(s instanceof ge || s instanceof ye))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((l, a, c, u) => {
    i == null && (i = u);
  }), t.setSelection(J.near(t.doc.resolve(i), n));
}
function oi(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Gn {
  constructor(e, n, r) {
    this.name = e, this.init = oi(n.init, r), this.apply = oi(n.apply, r);
  }
}
new Gn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Gn("selection", {
  init(t, e) {
    return t.selection || J.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Gn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new Gn("scrollToSelection", {
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
class rt {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Dl(e.props, this, this.props), this.key = e.key ? e.key.key : zl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const as = /* @__PURE__ */ Object.create(null);
function zl(t) {
  return t in as ? t + "$" + ++as[t] : (as[t] = 0, t + "$");
}
class qe {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = zl(e);
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
const Vs = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Ll(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Pl = (t, e, n) => {
  let r = Ll(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  if (!s) {
    let i = r.blockRange(), l = i && en(i);
    return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (Kl(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(o, "end") || H.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let l = Rr(t.doc, r.before(i), r.after(i), j.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(Qt(o, "end") ? J.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : H.create(a.doc, s.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Qu = (t, e, n) => {
  let r = Ll(t, n);
  if (!r)
    return !1;
  let s = Us(r);
  return s ? $l(t, s, e) : !1;
}, Zu = (t, e, n) => {
  let r = _l(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  return s ? $l(t, s, e) : !1;
};
function $l(t, e, n) {
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
  let c = Rr(t.doc, o, a, j.empty);
  if (!c || c.from != o || c instanceof ge && c.slice.size >= a - o)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(K.create(u.doc, o)), n(u.scrollIntoView());
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
const Fl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Us(r);
  }
  let i = o && o.nodeBefore;
  return !i || !H.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(H.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Us(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function _l(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Bl = (t, e, n) => {
  let r = _l(t, n);
  if (!r)
    return !1;
  let s = Ks(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (Kl(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(o, "start") || H.isSelectable(o))) {
    let i = Rr(t.doc, r.before(), r.after(), j.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let l = t.tr.step(i);
        l.setSelection(Qt(o, "start") ? J.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : H.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Hl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Ks(r);
  }
  let i = o && o.nodeAfter;
  return !i || !H.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(H.create(t.doc, o.pos)).scrollIntoView()), !0);
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
const ed = (t, e) => {
  let n = t.selection, r = n instanceof H, s;
  if (r) {
    if (n.node.isTextblock || !Lt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Mr(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(H.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, td = (t, e) => {
  let n = t.selection, r;
  if (n instanceof H) {
    if (n.node.isTextblock || !Lt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Mr(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, nd = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && en(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, Wl = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function qs(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const rd = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = qs(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, i.createAndFill());
    a.setSelection(J.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Vl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof Pe || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = qs(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(i, o.createAndFill());
    l.setSelection(K.create(l.doc, i + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Ul = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (ut(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && en(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function sd(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof H && e.selection.node.isBlock)
      return !r.parentOffset || !ut(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = qs(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof K || e.selection instanceof Pe) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = ut(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = ut(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(i).type != l) {
      let h = u.mapping.map(r.before(i)), m = u.doc.resolve(h);
      l && r.node(i - 1).canReplaceWith(m.index(), m.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(i)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const od = sd(), id = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(H.create(t.doc, s))), !0);
};
function ld(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || Lt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Kl(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, l, a = s.type.spec.isolating || o.type.spec.isolating;
  if (!a && ld(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && l.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, m = E.empty;
      for (let y = i.length - 1; y >= 0; y--)
        m = E.from(i[y].create(null, m));
      m = E.from(s.copy(m));
      let g = t.tr.step(new ye(e.pos - 1, h, e.pos, h, new j(m, 1, 0), i.length, !0)), b = g.doc.resolve(h + 2 * i.length);
      b.nodeAfter && b.nodeAfter.type == s.type && Lt(g.doc, b.pos) && g.join(b.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : J.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && en(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Qt(o, "start", !0) && Qt(s, "end")) {
    let h = s, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, b = 1;
    for (; !g.isTextblock; g = g.firstChild)
      b++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let y = E.empty;
        for (let k = m.length - 1; k >= 0; k--)
          y = E.from(m[k].copy(y));
        let C = t.tr.step(new ye(e.pos - m.length, e.pos + o.nodeSize, e.pos + b, e.pos + o.nodeSize - b, new j(y, m.length, 0), 0, !0));
        n(C.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function ql(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(K.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const ad = ql(-1), cd = ql(1);
function ud(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), l = i && kl(i, t, e);
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
Js(Vs, Pl, Fl);
Js(Vs, Bl, Hl);
Js(Wl, Vl, Ul, od);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function dd(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let l = r ? n.tr : null;
    return fd(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function fd(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = i.resolve(e.start - 2);
    o = new hr(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new hr(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = kl(o, n, r, e);
  return l ? (t && hd(t, e, l, s, n), !0) : !1;
}
function hd(t, e, n, r, s) {
  let o = E.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = E.from(n[u].type.create(n[u].attrs, o));
  t.step(new ye(e.start - (r ? 2 : 0), e.end, e.start, e.end, new j(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let l = n.length - i, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && ut(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function pd(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? md(e, n, t, o) : gd(e, n, o) : !0 : !1;
  };
}
function md(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new ye(o - 1, i, o, i, new j(E.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new hr(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const l = en(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return Lt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function gd(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= s.child(m).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? E.empty : E.from(s))))
    return !1;
  let d = o.pos, f = d + i.nodeSize;
  return r.step(new ye(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new j((l ? E.empty : E.from(s.copy(E.empty))).append(a ? E.empty : E.from(s.copy(E.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function yd(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = E.from(c ? t.create() : null), d = new j(E.from(t.create(null, E.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new ye(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Pt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Jl = function(t, e, n, r) {
  return n && (li(t, e, n, r, -1) || li(t, e, n, r, 1));
}, bd = /^(img|br|input|textarea|hr)$/i;
function li(t, e, n, r, s) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : gr(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || Gs(t) || bd.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Pt(t) + (s < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      let i = t.childNodes[e + (s < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        t = i, e = s < 0 ? gr(t) : 0;
    } else
      return !1;
  }
}
function gr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function xd(t, e, n) {
  for (let r = e == 0, s = e == gr(t); r || s; ) {
    if (t == n)
      return !0;
    let o = Pt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, s = s && o == gr(t);
  }
}
function Gs(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Gl = function(t) {
  return t.focusNode && Jl(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Yl(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const nt = typeof navigator < "u" ? navigator : null, ai = typeof document < "u" ? document : null, vt = nt && nt.userAgent || "", Es = /Edge\/(\d+)/.exec(vt), Xl = /MSIE \d/.exec(vt), Ns = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vt), Dn = !!(Xl || Ns || Es), Ql = Xl ? document.documentMode : Ns ? +Ns[1] : Es ? +Es[1] : 0, Or = !Dn && /gecko\/(\d+)/i.test(vt);
Or && +(/Firefox\/(\d+)/.exec(vt) || [0, 0])[1];
const Ts = !Dn && /Chrome\/(\d+)/.exec(vt), dt = !!Ts, Zl = Ts ? +Ts[1] : 0, $t = !Dn && !!nt && /Apple Computer/.test(nt.vendor), Ys = $t && (/Mobile\/\w+/.test(vt) || !!nt && nt.maxTouchPoints > 2), Be = Ys || (nt ? /Mac/.test(nt.platform) : !1), ea = nt ? /Win/.test(nt.platform) : !1, zn = /Android \d/.test(vt), Xs = !!ai && "webkitFontSmoothing" in ai.documentElement.style, wd = Xs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function vd(t, e = null) {
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
    if (s && d.isAtom && H.isSelectable(d) && s.parent && !(d.isInline && xd(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new H(i == f ? l : r.resolve(f));
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
    c = na(t, u, l, d);
  }
  return c;
}
function ta(t) {
  return t.editable ? t.hasFocus() : Ad(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Qs(t, e = !1) {
  let n = t.state.selection;
  if (kd(t, n), !!ta(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && dt) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && Jl(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      Cd(t);
    else {
      let { anchor: r, head: s } = n, o, i;
      ci && !(n instanceof K) && (n.$from.parent.inlineContent || (o = ui(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = ui(t, n.to))), t.docView.setSelection(r, s, t, e), ci && (o && di(o), i && di(i)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Sd(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const ci = $t || dt && Zl < 63;
function ui(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if ($t && s && s.contentEditable == "false")
    return cs(s);
  if ((!s || s.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (s)
      return cs(s);
    if (o)
      return cs(o);
  }
}
function cs(t) {
  return t.contentEditable = "true", $t && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function di(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function Sd(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!ta(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Cd(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Pt(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && Dn && Ql <= 11 && (n.disabled = !0, n.disabled = !1);
}
function kd(t, e) {
  if (e instanceof H) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (fi(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    fi(t);
}
function fi(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function na(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || K.between(e, n, r);
}
function Ad(t) {
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
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), o = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return o && J.findFrom(o, e);
}
function pt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function hi(t, e, n) {
  let r = t.state.selection;
  if (r instanceof K)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return pt(t, new K(r.$anchor, i));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Ms(t.state, e);
        return s && s instanceof H ? pt(t, s) : !1;
      } else if (!(Be && n.indexOf("m") > -1)) {
        let s = r.$head, o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, i;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? s.pos - o.nodeSize : s.pos;
        return o.isAtom || (i = t.docView.descAt(l)) && !i.contentDOM ? H.isSelectable(o) ? pt(t, new H(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s)) : Xs ? pt(t, new K(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
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
function vn(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Kt(t, e) {
  return e < 0 ? Ed(t) : Nd(t);
}
function Ed(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, o, i = !1;
  for (Or && n.nodeType == 1 && r < yr(n) && vn(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (vn(l, -1))
          s = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (ra(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && vn(l, -1); )
          s = n.parentNode, o = Pt(l), l = l.previousSibling;
        if (l)
          n = l, r = yr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  i ? Rs(t, n, r) : s && Rs(t, s, o);
}
function Nd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = yr(n), o, i;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (vn(l, 1))
        o = n, i = ++r;
      else
        break;
    } else {
      if (ra(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && vn(l, 1); )
          o = l.parentNode, i = Pt(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = yr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  o && Rs(t, o, i);
}
function ra(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Td(t, e) {
  for (; t && e == t.childNodes.length && !Gs(t); )
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
function Md(t, e) {
  for (; t && !e && !Gs(t); )
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
    let o, i;
    (i = Td(e, n)) ? (e = i, n = 0) : (o = Md(e, n)) && (e = o, n = o.nodeValue.length);
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
    t.state == s && Qs(t);
  }, 50);
}
function pi(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(dt || ea) && n.parent.inlineContent) {
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
  if (r instanceof K && !r.empty || n.indexOf("s") > -1 || Be && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: o } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = Ms(t.state, e);
    if (i && i instanceof H)
      return pt(t, i);
  }
  if (!s.parent.inlineContent) {
    let i = e < 0 ? s : o, l = r instanceof Pe ? J.near(i, e) : J.findFrom(i, e);
    return l ? pt(t, l) : !1;
  }
  return !1;
}
function gi(t, e) {
  if (!(t.state.selection instanceof K))
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
function Rd(t) {
  if (!$t || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    yi(t, r, "true"), setTimeout(() => yi(t, r, "false"), 20);
  }
  return !1;
}
function Id(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Od(t, e) {
  let n = e.keyCode, r = Id(e);
  if (n == 8 || Be && n == 72 && r == "c")
    return gi(t, -1) || Kt(t, -1);
  if (n == 46 && !e.shiftKey || Be && n == 68 && r == "c")
    return gi(t, 1) || Kt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Be && n == 66 && r == "c") {
    let s = n == 37 ? pi(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return hi(t, s, r) || Kt(t, s);
  } else if (n == 39 || Be && n == 70 && r == "c") {
    let s = n == 39 ? pi(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return hi(t, s, r) || Kt(t, s);
  } else {
    if (n == 38 || Be && n == 80 && r == "c")
      return mi(t, -1, r) || Kt(t, -1);
    if (n == 40 || Be && n == 78 && r == "c")
      return Rd(t) || mi(t, 1, r) || Kt(t, 1);
    if (r == (Be ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function sa(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: o } = e;
  for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let i = t.someProp("clipboardSerializer") || Tr.fromSchema(t.state.schema), l = ua(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = ca[c.nodeName.toLowerCase()]); ) {
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
function oa(t, e, n, r, s) {
  let o = s.parent.type.spec.code, i, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new j(E.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, m = Tr.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let b = i.appendChild(document.createElement("p"));
        g && b.appendChild(m.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), i = Ld(n), Xs && Pd(i);
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
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Mt.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !jd.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = $d(bi(l, +u[1], +u[2]), u[4]);
  else if (l = j.maxOpen(Dd(l.content, s), !0), l.openStart || l.openEnd) {
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
const jd = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Dd(t, e) {
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
      if (c = i.length && o.length && la(a, o, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = aa(i[i.length - 1], o.length));
        let u = ia(l, a);
        i.push(u), s = s.matchType(u.type), o = a;
      }
    }), i)
      return E.from(i);
  }
  return t;
}
function ia(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, E.from(t));
  return t;
}
function la(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let o = la(t, e, n, r.lastChild, s + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(E.from(ia(n, t, s + 1))));
  }
}
function aa(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, aa(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(E.empty, !0);
  return t.copy(n.append(r));
}
function Is(t, e, n, r, s, o) {
  let i = e < 0 ? t.firstChild : t.lastChild, l = i.content;
  return t.childCount > 1 && (o = 0), s < r - 1 && (l = Is(l, e, n, r, s + 1, o)), s >= n && (l = e < 0 ? i.contentMatchAt(0).fillBefore(l, o <= s).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(E.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l));
}
function bi(t, e, n) {
  return e < t.openStart && (t = new j(Is(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new j(Is(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const ca = {
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
function ua() {
  return xi || (xi = document.implementation.createHTMLDocument("title"));
}
let us = null;
function zd(t) {
  let e = window.trustedTypes;
  return e ? (us || (us = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), us.createHTML(t)) : t;
}
function Ld(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = ua().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && ca[r[1].toLowerCase()]) && (t = s.map((o) => "<" + o + ">").join("") + t + s.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = zd(t), s)
    for (let o = 0; o < s.length; o++)
      n = n.querySelector(s[o]) || n;
  return n;
}
function Pd(t) {
  let e = t.querySelectorAll(dt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function $d(t, e) {
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
  return new j(s, o, i);
}
const Je = {}, $e = {};
function bt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
$e.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !fa(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(zn && dt && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Ys && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, Yl(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Od(t, n) ? n.preventDefault() : bt(t, "key");
};
$e.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
$e.keypress = (t, e) => {
  let n = e;
  if (fa(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Be && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof K) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function jr(t) {
  return { left: t.clientX, top: t.clientY };
}
function Fd(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Zs(t, e, n, r, s) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let i = o.depth + 1; i > 0; i--)
    if (t.someProp(e, (l) => i > o.depth ? l(t, n, o.nodeAfter, o.before(i), s, !0) : l(t, n, o.node(i), o.before(i), s, !1)))
      return !0;
  return !1;
}
function Yt(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function _d(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && H.isSelectable(r) ? (Yt(t, new H(n)), !0) : !1;
}
function Bd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof H && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let l = i > o.depth ? o.nodeAfter : o.node(i);
    if (H.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? s = o.before(n.$from.depth) : s = o.before(i);
      break;
    }
  }
  return s != null ? (Yt(t, H.create(t.state.doc, s)), !0) : !1;
}
function Hd(t, e, n, r, s) {
  return Zs(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (s ? Bd(t, n) : _d(t, n));
}
function Wd(t, e, n, r) {
  return Zs(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function Vd(t, e, n, r) {
  return Zs(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || Ud(t, n, r);
}
function Ud(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Yt(t, K.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let i = o > s.depth ? s.nodeAfter : s.node(o), l = s.before(o);
    if (i.inlineContent)
      Yt(t, K.create(r, l + 1, l + 1 + i.content.size));
    else if (H.isSelectable(i))
      Yt(t, H.create(r, l));
    else
      continue;
    return !0;
  }
}
function eo(t) {
  return br(t);
}
const da = Be ? "metaKey" : "ctrlKey";
Je.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = eo(t), s = Date.now(), o = "singleClick";
  s - t.input.lastClick.time < 500 && Fd(n, t.input.lastClick) && !n[da] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let i = t.posAtCoords(jr(n));
  i && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Kd(t, i, n, !!r)) : (o == "doubleClick" ? Wd : Vd)(t, i.pos, i.inside, n) ? n.preventDefault() : bt(t, "pointer"));
};
class Kd {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[da], this.allowDefault = r.shiftKey;
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
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof H && c.from <= i && c.to > i) && (this.mightDrag = {
      node: o,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Or && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), bt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Qs(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(jr(e))), this.updateAllowDefault(e), this.allowDefault || !n ? bt(this.view, "pointer") : Hd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
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
  t.input.lastTouch = Date.now(), eo(t), bt(t, "pointer");
};
Je.touchmove = (t) => {
  t.input.lastTouch = Date.now(), bt(t, "pointer");
};
Je.contextmenu = (t) => eo(t);
function fa(t, e) {
  return t.composing ? !0 : $t && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const qd = zn ? 5e3 : -1;
$e.compositionstart = $e.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof K && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || dt && ea && Jd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), br(t, !0), t.markCursor = null;
    else if (br(t, !e.selection.empty), Or && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  ha(t, qd);
};
function Jd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
$e.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, ha(t, 20));
};
function ha(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => br(t), e));
}
function Gd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Yd()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Yd() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function br(t, e = !1) {
  if (!(zn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Gd(t), e || t.docView && t.docView.dirty) {
      let n = vd(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Xd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const En = Dn && Ql < 15 || Ys && wd < 604;
Je.copy = $e.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let o = En ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = sa(t, i);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Xd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Qd(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Zd(t, e) {
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
  let o = oa(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, o || j.empty)))
    return !0;
  if (!o)
    return !1;
  let i = Qd(o), l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function pa(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
$e.paste = (t, e) => {
  let n = e;
  if (t.composing && !zn)
    return;
  let r = En ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Os(t, pa(r), r.getData("text/html"), s, n) ? n.preventDefault() : Zd(t, n);
};
class ef {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const tf = Be ? "altKey" : "ctrlKey";
function ma(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[tf];
}
Je.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, o = s.empty ? null : t.posAtCoords(jr(n)), i;
  if (!(o && o.pos >= s.from && o.pos <= (s instanceof H ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      i = H.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (i = H.create(t.state.doc, d.posBefore));
    }
  }
  let l = (i || t.state.selection).content(), { dom: a, text: c, slice: u } = sa(t, l);
  (!n.dataTransfer.files.length || !dt || Zl > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(En ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", En || n.dataTransfer.setData("text/plain", c), t.dragging = new ef(u, ma(t, n), i);
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
    nf(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function nf(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(jr(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = oa(t, pa(e.dataTransfer), En ? null : e.dataTransfer.getData("text/html"), !1, s);
  let i = !!(n && ma(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || j.empty, i))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? Vu(t.state.doc, s.pos, o) : s.pos;
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
  if (u && H.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new H(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, b, y) => h = y), a.setSelection(na(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Je.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Qs(t);
  }, 20));
};
Je.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Je.beforeinput = (t, e) => {
  if (dt && zn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Yl(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in $e)
  Je[t] = $e[t];
function Nn(t, e) {
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
    let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return i ? null : new We(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof xr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Nn(this.spec, e.spec));
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
    let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= i ? null : new We(o, i, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof xt && Nn(this.attrs, e.attrs) && Nn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof xt;
  }
  destroy() {
  }
}
class to {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Rt;
  }
  map(e, n, r, s) {
    let o = e.mapResult(n.from + s, 1);
    if (o.deleted)
      return null;
    let i = e.mapResult(n.to + s, -1);
    return i.deleted || i.pos <= o.pos ? null : new We(o.pos - r, i.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), o;
    return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof to && Nn(this.attrs, e.attrs) && Nn(this.spec, e.spec);
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
    return new We(e, n, new to(r, s));
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
    return this == Me || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Rt);
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
    return this.children.length ? rf(this.children, i || [], e, n, r, s, o) : i ? new de(i.sort(It), Jt) : Me;
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
    let s, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = ya(n, l, c)) {
        for (s || (s = this.children.slice()); o < s.length && s[o] < a; )
          o += 3;
        s[o] == a ? s[o + 2] = s[o + 2].addInner(l, u, c + 1) : s.splice(o, 0, a, a + l.nodeSize, wr(u, l, c + 1, Rt)), o += 3;
      }
    });
    let i = ga(o ? ba(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(e, i[l]) || i.splice(l--, 1);
    return new de(i.length ? this.local.concat(i).sort(It) : this.local, s || this.children);
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
    for (let o = 0; o < r.length; o += 3) {
      let i, l = r[o] + n, a = r[o + 1] + n;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (i || (i = [])).push(d));
      if (!i)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(i, l + 1);
      c != Me ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (s.length) {
      for (let o = 0, i; o < e.length; o++)
        if (i = e[o])
          for (let l = 0; l < s.length; l++)
            s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
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
    let o = e + 1, i = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > o && a.type instanceof xt) {
        let c = Math.max(o, a.from) - o, u = Math.min(i, a.to) - o;
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
    return no(this.localsInner(e));
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
de.removeOverlap = no;
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
      let o = this.members[s].forChild(e, n);
      o != Me && (o instanceof At ? r = r.concat(o.members) : r.push(o));
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
    return n ? no(r ? n : n.sort(It)) : Jt;
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
function rf(t, e, n, r, s, o, i) {
  let l = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, m, g) => {
      let b = g - m - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let C = l[y + 1];
        if (C < 0 || f > C + u - d)
          continue;
        let k = l[y] + u - d;
        h >= k ? l[y + 1] = f <= k ? -2 : -1 : f >= u && b && (l[y] += b, l[y + 1] += b);
      }
      d += b;
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
      let f = n.map(t[c + 1] + o, -1), h = f - s, { index: m, offset: g } = r.content.findIndex(d), b = r.maybeChild(m);
      if (b && g == d && g + b.nodeSize == h) {
        let y = l[c + 2].mapInner(n, b, u + 1, t[c] + o + 1, i);
        y != Me ? (l[c] = d, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = sf(l, t, e, n, s, o, i), u = wr(c, r, 0, i);
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
function ga(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new We(s.from + e, s.to + e, s.type));
  }
  return n;
}
function sf(t, e, n, r, s, o, i) {
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
function ya(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let o = 0, i; o < t.length; o++)
    (i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), t[o] = null);
  return s;
}
function ba(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function wr(t, e, n, r) {
  let s = [], o = !1;
  e.forEach((l, a) => {
    let c = ya(t, l, a + n);
    if (c) {
      o = !0;
      let u = wr(c, l, n + a + 1, r);
      u != Me && s.push(a, a + l.nodeSize, u);
    }
  });
  let i = ga(o ? ba(t) : t, -n).sort(It);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || s.length ? new de(i, s) : Me;
}
function It(t, e) {
  return t.from - e.from || t.to - e.to;
}
function no(t) {
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
}, of = typeof navigator < "u" && /Mac/.test(navigator.platform), lf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var we = 0; we < 10; we++) wt[48 + we] = wt[96 + we] = String(we);
for (var we = 1; we <= 24; we++) wt[we + 111] = "F" + we;
for (var we = 65; we <= 90; we++)
  wt[we] = String.fromCharCode(we + 32), vr[we] = String.fromCharCode(we);
for (var ds in wt) vr.hasOwnProperty(ds) || (vr[ds] = wt[ds]);
function af(t) {
  var e = of && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || lf && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? vr : wt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const cf = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), uf = typeof navigator < "u" && /Win/.test(navigator.platform);
function df(t) {
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
      cf ? i = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), i && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function ff(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[df(n)] = t[n];
  return e;
}
function fs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function hf(t) {
  let e = ff(t);
  return function(n, r) {
    let s = af(r), o, i = e[fs(s, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[fs(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(uf && r.ctrlKey && r.altKey) && (o = wt[r.keyCode]) && o != s) {
        let l = e[fs(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var pf = Object.defineProperty, ro = (t, e) => {
  for (var n in e)
    pf(t, n, { get: e[n], enumerable: !0 });
};
function xa(t) {
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
var mf = class {
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
          const g = this.buildProps(a, e), b = f(...m)(g);
          return i.push(b), u;
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
      state: xa({
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
}, wa = {};
ro(wa, {
  blur: () => gf,
  clearContent: () => yf,
  clearNodes: () => bf,
  command: () => xf,
  createParagraphNear: () => wf,
  cut: () => vf,
  deleteCurrentNode: () => Sf,
  deleteNode: () => Cf,
  deleteRange: () => kf,
  deleteSelection: () => Af,
  enter: () => Ef,
  exitCode: () => Nf,
  extendMarkRange: () => Mf,
  first: () => Rf,
  focus: () => jf,
  forEach: () => Df,
  insertContent: () => zf,
  insertContentAt: () => $f,
  joinBackward: () => Bf,
  joinDown: () => _f,
  joinForward: () => Hf,
  joinItemBackward: () => Wf,
  joinItemForward: () => Vf,
  joinTextblockBackward: () => Uf,
  joinTextblockForward: () => Kf,
  joinUp: () => Ff,
  keyboardShortcut: () => Jf,
  lift: () => Gf,
  liftEmptyBlock: () => Yf,
  liftListItem: () => Xf,
  newlineInCode: () => Qf,
  resetAttributes: () => Zf,
  scrollIntoView: () => eh,
  selectAll: () => th,
  selectNodeBackward: () => nh,
  selectNodeForward: () => rh,
  selectParentNode: () => sh,
  selectTextblockEnd: () => oh,
  selectTextblockStart: () => ih,
  setContent: () => ah,
  setMark: () => wh,
  setMeta: () => vh,
  setNode: () => Sh,
  setNodeSelection: () => Ch,
  setTextDirection: () => kh,
  setTextSelection: () => Ah,
  sinkListItem: () => Eh,
  splitBlock: () => Nh,
  splitListItem: () => Th,
  toggleList: () => Mh,
  toggleMark: () => Rh,
  toggleNode: () => Ih,
  toggleWrap: () => Oh,
  undoInputRule: () => jh,
  unsetAllMarks: () => Dh,
  unsetMark: () => zh,
  unsetTextDirection: () => Lh,
  updateAttributes: () => Ph,
  wrapIn: () => $h,
  wrapInList: () => Fh
});
var gf = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), yf = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), bf = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
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
}, xf = (t) => (e) => t(e), wf = () => ({ state: t, dispatch: e }) => Vl(t, e), vf = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new K(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Sf = () => ({ tr: t, dispatch: e }) => {
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
function Se(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var Cf = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = Se(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), c = o.after(i);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, kf = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Af = () => ({ state: t, dispatch: e }) => Vs(t, e), Ef = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Nf = () => ({ state: t, dispatch: e }) => rd(t, e);
function Tf(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Sr(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : Tf(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function va(t, e, n = {}) {
  return t.find((r) => r.type === e && Sr(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function vi(t, e, n = {}) {
  return !!va(t, e, n);
}
function Sa(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !va([...s.node.marks], e, n)))
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
function St(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var Mf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = St(t, r.schema), { doc: i, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = Sa(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = K.create(i, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Rf = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ca(t) {
  return t instanceof K;
}
function Et(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function If(t, e = null) {
  if (!e)
    return null;
  const n = J.atStart(t), r = J.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? K.create(t, Et(0, s, o), Et(t.content.size, s, o)) : K.create(t, Et(e, s, o), Et(e, s, o));
}
function Si() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Cr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Of() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var jf = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Cr() || Si()) && r.dom.focus(), Of() && !Cr() && !Si() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !Ca(n.state.selection))
    return i(), !0;
  const l = If(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Df = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), zf = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), ka = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && ka(r);
  }
  return t;
};
function Yn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return ka(n);
}
function Tn(t, e, n) {
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
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), Tn("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, l = "";
      const a = new wu({
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
      if (n.slice ? Mt.fromSchema(a).parseSlice(Yn(t), n.parseOptions) : Mt.fromSchema(a).parse(Yn(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = Mt.fromSchema(e);
    return n.slice ? o.parseSlice(Yn(t), n.parseOptions).content : o.parse(Yn(t), n.parseOptions);
  }
  return Tn("", e, n);
}
function Lf(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof ge || s instanceof ye))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((l, a, c, u) => {
    i === 0 && (i = u);
  }), t.setSelection(J.near(t.doc.resolve(i), n));
}
var Pf = (t) => !("type" in t), $f = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
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
    const a = (b) => {
      o.emit("contentError", {
        editor: o,
        error: b,
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
        Tn(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (b) {
        a(b);
      }
    try {
      l = Tn(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
      });
    } catch (b) {
      return a(b), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Pf(l) ? l : [l]).forEach((b) => {
      b.check(), f = f ? b.isText && b.marks.length === 0 : !1, h = h ? b.isBlock : !1;
    }), u === d && h) {
      const { parent: b } = r.doc.resolve(u);
      b.isTextblock && !b.type.spec.code && !b.childCount && (u -= 1, d += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((b) => b.text || "").join("");
      else if (e instanceof E) {
        let b = "";
        e.forEach((y) => {
          y.text && (b += y.text);
        }), g = b;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else {
      g = l;
      const b = r.doc.resolve(u), y = b.node(), C = b.parentOffset === 0, k = y.isText || y.isTextblock, w = y.content.size > 0;
      C && k && w && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && Lf(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Ff = () => ({ state: t, dispatch: e }) => ed(t, e), _f = () => ({ state: t, dispatch: e }) => td(t, e), Bf = () => ({ state: t, dispatch: e }) => Pl(t, e), Hf = () => ({ state: t, dispatch: e }) => Bl(t, e), Wf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mr(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Vf = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mr(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Uf = () => ({ state: t, dispatch: e }) => Qu(t, e), Kf = () => ({ state: t, dispatch: e }) => Zu(t, e);
function Aa() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function qf(t) {
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
      Cr() || Aa() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var Jf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = qf(t).split(/-(?!$)/), i = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
function so(t, e, n = {}) {
  const { from: r, to: s, empty: o } = t.selection, i = e ? Se(e, t.schema) : null, l = [];
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
  const a = s - r, c = l.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => Sr(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var Gf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return so(n, s, e) ? nd(n, r) : !1;
}, Yf = () => ({ state: t, dispatch: e }) => Ul(t, e), Xf = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return pd(r)(e, n);
}, Qf = () => ({ state: t, dispatch: e }) => Wl(t, e);
function Ea(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ci(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var Zf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ea(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = Se(t, r.schema)), l === "mark" && (i = St(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      o && o === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, Ci(u.attrs, e))), i && u.marks.length && u.marks.forEach((f) => {
        i === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, i.create(Ci(f.attrs, e))));
      });
    });
  }), a;
}, eh = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), th = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new Pe(t.doc);
    t.setSelection(n);
  }
  return !0;
}, nh = () => ({ state: t, dispatch: e }) => Fl(t, e), rh = () => ({ state: t, dispatch: e }) => Hl(t, e), sh = () => ({ state: t, dispatch: e }) => id(t, e), oh = () => ({ state: t, dispatch: e }) => cd(t, e), ih = () => ({ state: t, dispatch: e }) => ad(t, e);
function lh(t, e, n = {}, r = {}) {
  return Tn(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var ah = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: o, dispatch: i, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = lh(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return i && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return i && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function ch(t, e) {
  const n = St(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const l = i.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function uh(t, e) {
  const n = new Ol(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function dh(t) {
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
function oo(t) {
  return (e) => Na(e.$from, t);
}
function Zt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? Zt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? Zt(t.parent, e, n) : null
  }) : t.config[e];
}
function fh(t) {
  return typeof t == "function";
}
function Mn(t, e = void 0, ...n) {
  return fh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Ta(t) {
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
function hh(t, e, n) {
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
function ph(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function mh(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function gh(t) {
  const e = mh(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function yh(t) {
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
  }), gh(r);
}
function ir(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((o) => o.type === e && o.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function bh(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? St(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Sr(d.attrs, n, { strict: !1 }));
  let i = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, b) => {
      if (!g.isText && !g.marks.length)
        return;
      const y = Math.max(h, b), C = Math.min(m, b + g.nodeSize), k = C - y;
      i += k, l.push(
        ...g.marks.map((w) => ({
          mark: w,
          from: y,
          to: C
        }))
      );
    });
  }), i === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Sr(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= i;
}
function ki(t, e) {
  const { nodeExtensions: n } = Ta(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = Mn(Zt(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Ma(t, {
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
      s !== !1 && (Ma(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function xh(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (Ca(s) && (o = s.$cursor), o) {
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
var wh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: l } = o, a = St(t, r.schema);
  if (s)
    if (i) {
      const c = ch(r, a);
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
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && n.addMark(
              m,
              g,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : n.addMark(m, g, a.create(e));
        });
      });
  return xh(r, n, a);
}, vh = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Sh = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = Se(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: l }) => ii(o, { ...i, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => ii(o, { ...i, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Ch = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = Et(t, 0, r.content.size), o = H.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, kh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = r;
  let i, l;
  return typeof e == "number" ? (i = e, l = e) : e && "from" in e && "to" in e ? (i = e.from, l = e.to) : (i = o.from, l = o.to), s && n.doc.nodesBetween(i, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Ah = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = K.atStart(r).from, l = K.atEnd(r).to, a = Et(s, i, l), c = Et(o, i, l), u = K.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Eh = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return yd(r)(e, n);
};
function Ai(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Nh = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: l, $to: a } = o, c = s.extensionManager.attributes, u = ir(c, l.node().type.name, l.node().attrs);
  if (o instanceof H && o.node.isBlock)
    return !l.parentOffset || !ut(i, l.pos) ? !1 : (r && (t && Ai(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : dh(l.node(-1).contentMatchAt(l.indexAfter(-1)));
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
    if (m && (o instanceof K && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), b = e.doc.resolve(g);
      l.node(-1).canReplaceWith(b.index(), b.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && Ai(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, Th = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const l = Se(t, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
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
      let y = E.empty;
      const C = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let U = a.depth - C; U >= a.depth - 3; U -= 1)
        y = E.from(a.node(U).copy(y));
      const k = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), w = {
        ...ir(f, a.node().type.name, a.node().attrs),
        ...e
      }, v = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(w)) || void 0;
      y = y.append(E.from(l.createAndFill(null, v) || void 0));
      const N = a.before(a.depth - (C - 1));
      n.replace(N, a.after(-k), new j(y, 4 - C, 0));
      let O = -1;
      n.doc.nodesBetween(N, n.doc.content.size, (U, $) => {
        if (O > -1)
          return !1;
        U.isTextblock && U.content.size === 0 && (O = $ + 1);
      }), O > -1 && n.setSelection(K.near(n.doc.resolve(O))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, m = {
    ...ir(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...ir(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const b = h ? [
    { type: l, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: m }];
  if (!ut(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: y, storedMarks: C } = r, { splittableMarks: k } = o.extensionManager, w = C || y.$to.parentOffset && y.$from.marks();
    if (n.split(a.pos, 2, b).scrollIntoView(), !w || !s)
      return !0;
    const v = w.filter((N) => k.includes(N.type.name));
    n.ensureMarks(v);
  }
  return !0;
}, hs = (t, e) => {
  const n = oo((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, n.pos) && t.join(n.pos), !0;
}, ps = (t, e) => {
  const n = oo((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, r) && t.join(r), !0;
}, Mh = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = Se(t, i.schema), m = Se(e, i.schema), { selection: g, storedMarks: b } = i, { $from: y, $to: C } = g, k = y.blockRange(C), w = b || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const v = oo((N) => ki(N.type.name, d))(g);
  if (k.depth >= 1 && v && k.depth - v.depth <= 1) {
    if (v.node.type === h)
      return c.liftListItem(m);
    if (ki(v.node.type.name, d) && h.validContent(v.node.content) && l)
      return a().command(() => (o.setNodeMarkup(v.pos, h), !0)).command(() => hs(o, h)).command(() => ps(o, h)).run();
  }
  return !n || !w || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => hs(o, h)).command(() => ps(o, h)).run() : a().command(() => {
    const N = u().wrapInList(h, r), O = w.filter((U) => f.includes(U.type.name));
    return o.ensureMarks(O), N ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => hs(o, h)).command(() => ps(o, h)).run();
}, Rh = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = St(t, r.schema);
  return bh(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, Ih = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = Se(t, r.schema), i = Se(e, r.schema), l = so(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n });
}, Oh = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = Se(t, n.schema);
  return so(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, jh = () => ({ state: t, dispatch: e }) => {
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
}, Dh = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, zh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: l } = n, a = St(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = l;
    const m = (o = c.marks().find((b) => b.type === a)) == null ? void 0 : o.attrs, g = Sa(c, a, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Lh = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let o, i;
  return typeof t == "number" ? (o = t, i = t) : t && "from" in t && "to" in t ? (o = t.from, i = t.to) : (o = s.from, i = s.to), r && e.doc.nodesBetween(o, i, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Ph = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const l = Ea(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = Se(t, r.schema)), l === "mark" && (i = St(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, m, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (b, y) => {
      o && o === b.type && (a = !0, m = Math.max(y, u), g = Math.min(y + b.nodeSize, d), f = y, h = b);
    }) : r.doc.nodesBetween(u, d, (b, y) => {
      y < u && o && o === b.type && (a = !0, m = Math.max(y, u), g = Math.min(y + b.nodeSize, d), f = y, h = b), y >= u && y <= d && (o && o === b.type && (a = !0, s && n.setNodeMarkup(y, void 0, {
        ...b.attrs,
        ...e
      })), i && b.marks.length && b.marks.forEach((C) => {
        if (i === C.type && (a = !0, s)) {
          const k = Math.max(y, u), w = Math.min(y + b.nodeSize, d);
          n.addMark(
            k,
            w,
            i.create({
              ...C.attrs,
              ...e
            })
          );
        }
      }));
    }), h && (f !== void 0 && s && n.setNodeMarkup(f, void 0, {
      ...h.attrs,
      ...e
    }), i && h.marks.length && h.marks.forEach((b) => {
      i === b.type && s && n.addMark(
        m,
        g,
        i.create({
          ...b.attrs,
          ...e
        })
      );
    }));
  }), a;
}, $h = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return ud(s, e)(n, r);
}, Fh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return dd(s, e)(n, r);
}, _h = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function Bh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Xn(t) {
  return Bh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Ra(t, e) {
  const n = { ...t };
  return Xn(t) && Xn(e) && Object.keys(e).forEach((r) => {
    Xn(e[r]) && Xn(t[r]) ? n[r] = Ra(t[r], e[r]) : n[r] = e[r];
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
      ...Mn(
        Zt(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...Mn(
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
      addOptions: () => Ra(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, Hh = class Ia extends io {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Ia(n);
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
}, Wh = {};
ro(Wh, {
  ClipboardTextSerializer: () => Vh,
  Commands: () => Uh,
  Delete: () => Kh,
  Drop: () => qh,
  Editable: () => Jh,
  FocusEvents: () => Gh,
  Keymap: () => Yh,
  Paste: () => Xh,
  Tabindex: () => Qh,
  TextDirection: () => Zh,
  focusEventsPluginKey: () => ja
});
var Ge = class Oa extends io {
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
}, Vh = Ge.create({
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
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = ph(n);
            return hh(r, { from: i, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Uh = Ge.create({
  name: "commands",
  addCommands() {
    return {
      ...wa
    };
  }
}), Kh = Ge.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const o = () => {
      var i, l, a, c;
      if ((c = (a = (l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = uh(t.before, [t, ...e]);
      yh(u).forEach((h) => {
        u.mapping.mapResult(h.oldRange.from).deletedAfter && u.mapping.mapResult(h.oldRange.to).deletedBefore && u.before.nodesBetween(h.oldRange.from, h.oldRange.to, (m, g) => {
          const b = g + m.nodeSize - 2, y = h.oldRange.from <= g && b <= h.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: m,
            from: g,
            to: b,
            newFrom: u.mapping.map(g),
            newTo: u.mapping.map(b),
            deletedRange: h.oldRange,
            newRange: h.newRange,
            partial: !y,
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        });
      });
      const f = u.mapping;
      u.steps.forEach((h, m) => {
        var g, b;
        if (h instanceof Ke) {
          const y = f.slice(m).map(h.from, -1), C = f.slice(m).map(h.to), k = f.invert().map(y, -1), w = f.invert().map(C), v = (g = u.doc.nodeAt(y - 1)) == null ? void 0 : g.marks.some((O) => O.eq(h.mark)), N = (b = u.doc.nodeAt(C)) == null ? void 0 : b.marks.some((O) => O.eq(h.mark));
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
              from: y,
              to: C
            },
            partial: !!(N || v),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(o, 0) : o();
  }
}), qh = Ge.create({
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
}), Jh = Ge.create({
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
}), ja = new qe("focusEvents"), Gh = Ge.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new rt({
        key: ja,
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
}), Yh = Ge.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, m = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = m.parent.type.spec.isolating, b = d.pos - d.parentOffset, y = g && m.parent.childCount === 1 ? b === d.pos : J.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
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
    return Cr() || Aa() ? o : s;
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
          const { empty: o, from: i, to: l } = e.selection, a = J.atStart(e.doc).from, c = J.atEnd(e.doc).to;
          if (o || !(i === a && l === c) || !Ma(n.doc))
            return;
          const f = n.tr, h = xa({
            state: n,
            transaction: f
          }), { commands: m } = new mf({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Xh = Ge.create({
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
}), Qh = Ge.create({
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
}), Zh = Ge.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Ta(this.extensions);
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
function ep(t) {
  return new _h({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Mn(t.getAttributes, void 0, r) || {}, { tr: o } = e, i = n.from;
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
var tp = (t) => "touches" in t, np = class {
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, tp(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, rp = {};
ro(rp, {
  createAtomBlockMarkdownSpec: () => sp,
  createBlockMarkdownSpec: () => op,
  createInlineMarkdownSpec: () => ap,
  parseAttributes: () => lo,
  parseIndentedBlocks: () => cp,
  renderNestedMarkdownContent: () => up,
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
function sp(t) {
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
        const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), m = u.match(h);
        if (!m)
          return;
        const g = m[1] || "", b = r(g);
        if (!i.find((C) => !(C in b)))
          return {
            type: e,
            raw: m[0],
            attributes: b
          };
      }
    },
    renderMarkdown: (u) => {
      const d = c(u.attrs || {}), f = s(d), h = f ? ` {${f}}` : "";
      return `:::${a}${h} :::`;
    }
  };
}
function op(t) {
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
        const g = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), b = d.match(g);
        if (!b)
          return;
        const [y, C = ""] = b, k = s(C);
        let w = 1;
        const v = y.length;
        let N = "";
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
              N = ce.trim();
              const F = d.slice(0, v + W + $[0].length);
              let q = [];
              if (N)
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
                  q = h.inlineTokens(N);
              return {
                type: e,
                raw: F,
                attributes: k,
                content: N,
                tokens: q
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d, f) => {
      const h = u(d.attrs || {}), m = o(h), g = m ? ` {${m}}` : "", b = f.renderChildren(d.content || [], `

`);
      return `:::${c}${g}

${b}

:::`;
    }
  };
}
function ip(t) {
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
function lp(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function ap(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = ip,
    serializeAttributes: o = lp,
    defaultAttributes: i = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = t, c = n || e, u = (f) => {
    if (!a)
      return f;
    const h = {};
    return a.forEach((m) => {
      const g = typeof m == "string" ? m : m.name, b = typeof m == "string" ? void 0 : m.skipIfDefault;
      if (g in f) {
        const y = f[g];
        if (b !== void 0 && y === b)
          return;
        h[g] = y;
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
        const g = l ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), b = f.match(g);
        if (!b)
          return;
        let y = "", C = "";
        if (l) {
          const [, w] = b;
          C = w;
        } else {
          const [, w, v] = b;
          C = w, y = v || "";
        }
        const k = s(C.trim());
        return {
          type: e,
          raw: b[0],
          content: y.trim(),
          attributes: k
        };
      }
    },
    renderMarkdown: (f) => {
      let h = "";
      r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter((y) => y.type === "text").map((y) => y.text).join(""));
      const m = u(f.attrs || {}), g = o(m), b = g ? ` ${g}` : "";
      return l ? `[${c}${b}]` : `[${c}${b}]${h}[/${c}]`;
    }
  };
}
function cp(t, e, n) {
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
    const m = e.extractItemData(h), { indentLevel: g, mainContent: b } = m;
    c = `${c}${f}
`;
    const y = [b];
    for (u += 1; u < l.length; ) {
      const v = l[u];
      if (v.trim() === "") {
        const O = l.slice(u + 1).findIndex((W) => W.trim() !== "");
        if (O === -1)
          break;
        if ((((s = (r = l[u + 1 + O].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          y.push(v), c = `${c}${v}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((i = (o = v.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) > g)
        y.push(v), c = `${c}${v}
`, u += 1;
      else
        break;
    }
    let C;
    const k = y.slice(1);
    if (k.length > 0) {
      const v = k.map((N) => N.slice(g + d)).join(`
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
function up(t, e, n, r) {
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
var Ln = class Da extends io {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Da(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, dp = Hh.create({
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
}), fp = dp, hp = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, pp = Ln.create({
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
      const c = new np({
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
      ep({
        find: hp,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), mp = pp;
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
    return js(t) || Ds(t, gp(t));
  }
};
function gp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = yp(t), n = t.childCount, r = [];
  let s = 0, o = null;
  const i = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let m = 0; ; m++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (m == d.childCount) break;
      const g = d.child(m), { colspan: b, rowspan: y, colwidth: C } = g.attrs;
      for (let k = 0; k < y; k++) {
        if (k + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: y - k
          });
          break;
        }
        const w = s + k * e;
        for (let v = 0; v < b; v++) {
          r[w + v] == 0 ? r[w + v] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: b - v
          });
          const N = C && C[v];
          if (N) {
            const O = (w + v) % e * 2, U = i[O];
            U == null || U != N && i[O + 1] == 1 ? (i[O] = N, i[O + 1] = 1) : U == N && i[O + 1]++;
          }
        }
      }
      s += b, u += g.nodeSize;
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
  const l = new ae(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
  return a && bp(l, i, t), l;
}
function yp(t) {
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
function bp(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = xp(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function xp(t) {
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
function wp(t) {
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
  const n = Dt(e.$head) || vp(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function vp(t) {
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
function Sp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function co(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function za(t, e, n) {
  const r = t.node(-1), s = ae.get(r), o = t.start(-1), i = s.nextCell(t.pos - o, e, n);
  return i == null ? null : t.node(0).resolve(o + i);
}
function zt(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function La(t, e, n = 1) {
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
function Cp(t, e, n) {
  const r = Ce(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var ne = class at extends J {
  constructor(e, n = e) {
    const r = e.node(-1), s = ae.get(r), o = e.start(-1), i = s.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = s.cellsInRect(i).filter((u) => u != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new jl(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (zs(r) && zs(s) && co(r, s)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? at.rowSelection(r, s) : o && this.isColSelection() ? at.colSelection(r, s) : new at(r, s);
    }
    return K.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = ae.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, i = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = n.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let m = e.nodeAt(f);
        if (!m) throw new RangeError(`No cell with offset ${f} found`);
        const g = s.left - h.left, b = h.right - s.right;
        if (g > 0 || b > 0) {
          let y = m.attrs;
          if (g > 0 && (y = zt(y, 0, g)), b > 0 && (y = zt(y, y.colspan - b, b)), h.left < s.left) {
            if (m = m.type.createAndFill(y), !m) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
          } else m = m.type.create(y, m.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const y = {
            ...m.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? m = m.type.createAndFill(y) : m = m.type.create(y, m.content);
        }
        c.push(m);
      }
      i.push(e.child(a).copy(E.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : i;
    return new j(E.from(l), 1, 1);
  }
  replace(e, n = j.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      const { $from: l, $to: a } = s[i], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), i ? j.empty : n);
    }
    const o = J.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new j(E.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ae.get(n), s = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = ae.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.top <= l.top ? (i.top > 0 && (e = a.resolve(o + s.map[i.left])), l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + s.map[l.left])), i.bottom < s.height && (e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))), new at(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ae.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, o) > 0) return !1;
    const i = s + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(i, l) == n.width;
  }
  eq(e) {
    return e instanceof at && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = ae.get(r), o = e.start(-1), i = s.findCell(e.pos - o), l = s.findCell(n.pos - o), a = e.node(0);
    return i.left <= l.left ? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])), l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])), i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))), new at(e, n);
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
    return new kp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
ne.prototype.visible = !1;
J.jsonID("cell", ne);
var kp = class Pa {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Pa(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && co(n, r) ? new ne(n, r) : J.near(r, 1);
  }
};
function Ap(t) {
  if (!(t.selection instanceof ne)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(We.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), de.create(t.doc, e);
}
function Ep({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function Np({ $from: t, $to: e }) {
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
function Tp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let o, i;
  if (r instanceof H && (i = r.node.type.spec.tableRole)) {
    if (i == "cell" || i == "header_cell") o = ne.create(s, r.from);
    else if (i == "row") {
      const l = s.resolve(r.from + 1);
      o = ne.rowSelection(l, l);
    } else if (!n) {
      const l = ae.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = ne.create(s, a + 1, c);
    }
  } else r instanceof K && Ep(r) ? o = K.create(s, r.from) : r instanceof K && Np(r) && (o = K.create(s, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const Mp = new qe("fix-tables");
function $a(t, e, n, r) {
  const s = t.childCount, o = e.childCount;
  e: for (let i = 0, l = 0; i < o; i++) {
    const a = e.child(i);
    for (let c = l, u = Math.min(s, i + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? $a(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function Fa(t, e) {
  let n;
  const r = (s, o) => {
    s.type.spec.tableRole == "table" && (n = Rp(t, s, o, n));
  };
  return e ? e.doc != t.doc && $a(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Rp(t, e, n, r) {
  const s = ae.get(e);
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
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, zt(d, d.colspan - c.n, c.n));
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
      for (let b = 0; b < f; b++) {
        const y = Ce(t.schema)[h].createAndFill();
        y && m.push(y);
      }
      const g = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), m);
    }
    c = d;
  }
  return r.setMeta(Mp, { fixTables: !0 });
}
function st(t) {
  const e = t.selection, n = Dr(t), r = n.node(-1), s = n.start(-1), o = ae.get(r);
  return {
    ...e instanceof ne ? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : o.findCell(n.pos - s),
    tableStart: s,
    map: o,
    table: r
  };
}
function _a(t, { map: e, tableStart: n, table: r }, s) {
  let o = s > 0 ? -1 : 0;
  Cp(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
  for (let i = 0; i < e.height; i++) {
    const l = i * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, La(c.attrs, s - e.colCount(a))), i += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? Ce(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(i, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Ip(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(_a(t.tr, n, n.left));
  }
  return !0;
}
function Op(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(_a(t.tr, n, n.right));
  }
  return !0;
}
function jp(t, { map: e, table: n, tableStart: r }, s) {
  const o = t.mapping.maps.length;
  for (let i = 0; i < e.height; ) {
    const l = i * e.width + s, a = e.map[l], c = n.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, zt(u, s - e.colCount(a)));
    else {
      const d = t.mapping.slice(o).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    i += u.rowspan;
  }
}
function Dp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; jp(r, n, s), s != n.left; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ae.get(o);
    }
    e(r);
  }
  return !0;
}
function zp(t, e, n) {
  var r;
  const s = Ce(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function Ba(t, { map: e, tableStart: n, table: r }, s) {
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const i = [];
  let l = s > 0 ? -1 : 0;
  zp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++) if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
    const d = e.map[u], f = r.nodeAt(d).attrs;
    t.setNodeMarkup(n + d, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const d = l == null ? Ce(r.type.schema).cell : (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = d?.createAndFill();
    f && i.push(f);
  }
  return t.insert(o, Ce(r.type.schema).row.create(null, i)), t;
}
function Lp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(Ba(t.tr, n, n.top));
  }
  return !0;
}
function Pp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t);
    e(Ba(t.tr, n, n.bottom));
  }
  return !0;
}
function $p(t, { map: e, table: n, tableStart: r }, s) {
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
function Fp(t, e) {
  if (!Ye(t)) return !1;
  if (e) {
    const n = st(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; $p(r, n, s), s != n.top; s--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ae.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Ei(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function _p({ width: t, height: e, map: n }, r) {
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
function Ni(t, e) {
  const n = t.selection;
  if (!(n instanceof ne) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = st(t), { map: s } = r;
  if (_p(s, r)) return !1;
  if (e) {
    const o = t.tr, i = {};
    let l = E.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(i[f] || !h))
        if (i[f] = !0, a == null)
          a = f, c = h;
        else {
          Ei(h) || (l = l.append(h.content));
          const m = o.mapping.map(f + r.tableStart);
          o.delete(m, m + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...La(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = Ei(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(new ne(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Ti(t, e) {
  const n = Ce(t.schema);
  return Bp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Bp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, o;
    if (r instanceof ne) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var i;
      if (s = wp(r.$from), !s) return !1;
      o = (i = Dt(r.$from)) === null || i === void 0 ? void 0 : i.pos;
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
      const u = st(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++) a.push(c ? {
        ...l,
        colwidth: c && c[h] ? [c[h]] : null
      } : l);
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let m = u.map.positionAt(h, u.left, u.table);
        h == u.top && (m += s.nodeSize);
        for (let g = u.left, b = 0; g < u.right; g++, b++)
          g == u.left && h == u.top || d.insert(f = d.mapping.map(m + u.tableStart, 1), t({
            node: s,
            row: h,
            col: g
          }).createAndFill(a[b]));
      }
      d.setNodeMarkup(o, t({
        node: s,
        row: u.top,
        col: u.left
      }), a[0]), r instanceof ne && d.setSelection(new ne(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function Hp(t, e) {
  return function(n, r) {
    if (!Ye(n)) return !1;
    const s = Dr(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof ne ? n.selection.forEachCell((i, l) => {
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
function Wp(t) {
  return function(e, n) {
    if (!Ye(e)) return !1;
    if (n) {
      const r = Ce(e.schema), s = st(e), o = e.tr, i = s.map.cellsInRect(t == "column" ? {
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
function Rn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Wp(t) : function(n, r) {
    if (!Ye(n)) return !1;
    if (r) {
      const s = Ce(n.schema), o = st(n), i = n.tr, l = Mi("row", o, s), a = Mi("column", o, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
Rn("row", { useDeprecatedLogic: !0 });
Rn("column", { useDeprecatedLogic: !0 });
const Vp = Rn("cell", { useDeprecatedLogic: !0 });
function Up(t, e) {
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
    if (!Ye(e)) return !1;
    const r = Up(Dr(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(K.between(s, Sp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Kp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function Qn(t, e) {
  const n = t.selection;
  if (!(n instanceof ne)) return !1;
  if (e) {
    const r = t.tr, s = Ce(t.schema).cell.createAndFill().content;
    n.forEachCell((o, i) => {
      o.content.eq(s) || r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new j(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function qp(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), o = s.type.spec.tableRole, i = s.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = Ls(Ce(i).row, new j(c, u, d)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? Ls(Ce(i).row, new j(e, n, r)).content : e);
  else return null;
  return Jp(i, l);
}
function Jp(t, e) {
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
      const o = Ce(t).cell.createAndFill(), i = [];
      for (let l = n[s]; l < r; l++) i.push(o);
      e[s] = e[s].append(E.from(i));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Ls(t, e) {
  const n = t.createAndFill();
  return new Ol(n).replace(0, n.content.size, e).doc;
}
function Gp({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const o = [], i = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(zt(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
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
function Yp(t, e, n, r, s, o, i) {
  const l = t.doc.type.schema, a = Ce(l);
  let c, u;
  if (s > e.width) for (let d = 0, f = 0; d < e.height; d++) {
    const h = n.child(d);
    f += h.nodeSize;
    const m = [];
    let g;
    h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
    for (let b = e.width; b < s; b++) m.push(g);
    t.insert(t.mapping.slice(i).map(f - 1 + r), m);
  }
  if (o > e.height) {
    const d = [];
    for (let m = 0, g = (e.height - 1) * e.width; m < Math.max(e.width, s); m++) {
      const b = m >= e.width ? !1 : n.nodeAt(e.map[g + m]).type == a.header_cell;
      d.push(b ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, E.from(d)), h = [];
    for (let m = e.height; m < o; m++) h.push(f);
    t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Ii(t, e, n, r, s, o, i, l) {
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
function Oi(t, e, n, r, s, o, i, l) {
  if (i == 0 || i == e.width) return !1;
  let a = !1;
  for (let c = s; c < o; c++) {
    const u = c * e.width + i, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = n.nodeAt(d), h = e.colCount(d), m = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(m, null, zt(f.attrs, i - h, f.attrs.colspan - (i - h))), t.insert(m + f.nodeSize, f.type.createAndFill(zt(f.attrs, 0, i - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function ji(t, e, n, r, s) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let i = ae.get(o);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o) throw new Error("No table found");
    i = ae.get(o), f = d.mapping.maps.length;
  }
  Yp(d, i, o, n, c, u, f) && h(), Ii(d, i, o, n, a, c, l, f) && h(), Ii(d, i, o, n, a, c, u, f) && h(), Oi(d, i, o, n, l, u, a, f) && h(), Oi(d, i, o, n, l, u, c, f) && h();
  for (let m = l; m < u; m++) {
    const g = i.positionAt(m, a, o), b = i.positionAt(m, c, o);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(b + n), new j(s.rows[m - l], 0, 0));
  }
  h(), d.setSelection(new ne(d.doc.resolve(n + i.positionAt(l, a, o)), d.doc.resolve(n + i.positionAt(u - 1, c - 1, o)))), e(d);
}
const Xp = hf({
  ArrowLeft: Zn("horiz", -1),
  ArrowRight: Zn("horiz", 1),
  ArrowUp: Zn("vert", -1),
  ArrowDown: Zn("vert", 1),
  "Shift-ArrowLeft": er("horiz", -1),
  "Shift-ArrowRight": er("horiz", 1),
  "Shift-ArrowUp": er("vert", -1),
  "Shift-ArrowDown": er("vert", 1),
  Backspace: Qn,
  "Mod-Backspace": Qn,
  Delete: Qn,
  "Mod-Delete": Qn
});
function lr(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Zn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    if (o instanceof ne) return lr(n, r, J.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const i = Ha(s, t, e);
    if (i == null) return !1;
    if (t == "horiz") return lr(n, r, J.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(i), a = za(l, t, e);
      let c;
      return a ? c = J.near(a, 1) : e < 0 ? c = J.near(n.doc.resolve(l.before(-1)), -1) : c = J.near(n.doc.resolve(l.after(-1)), 1), lr(n, r, c);
    }
  };
}
function er(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const o = n.selection;
    let i;
    if (o instanceof ne) i = o;
    else {
      const a = Ha(s, t, e);
      if (a == null) return !1;
      i = new ne(n.doc.resolve(a));
    }
    const l = za(i.$headCell, t, e);
    return l ? lr(n, r, new ne(i.$anchorCell, l)) : !1;
  };
}
function Qp(t, e) {
  const n = t.state.doc, r = Dt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new ne(r))), !0) : !1;
}
function Zp(t, e, n) {
  if (!Ye(t.state)) return !1;
  let r = qp(n);
  const s = t.state.selection;
  if (s instanceof ne) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [E.from(Ls(Ce(t.state.schema).cell, n))]
    });
    const o = s.$anchorCell.node(-1), i = s.$anchorCell.start(-1), l = ae.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
    return r = Gp(r, l.right - l.left, l.bottom - l.top), ji(t.state, t.dispatch, i, l, r), !0;
  } else if (r) {
    const o = Dr(t.state), i = o.start(-1);
    return ji(t.state, t.dispatch, i, ae.get(o.node(-1)).findCell(o.pos - i), r), !0;
  } else return !1;
}
function em(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Di(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof ne)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Dt(t.state.selection.$anchor)) != null && ((n = ms(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    o(s, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let u = ms(t, c);
    const d = mt.getState(t.state) == null;
    if (!u || !co(a, u)) if (d) u = a;
    else return;
    const f = new ne(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(mt, a.pos), t.dispatch(h);
    }
  }
  function i() {
    t.root.removeEventListener("mouseup", i), t.root.removeEventListener("dragstart", i), t.root.removeEventListener("mousemove", l), mt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(mt, -1));
  }
  function l(a) {
    const c = a, u = mt.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Di(t, c.target) != r && (d = ms(t, e), !d))
      return i();
    d && o(d, c);
  }
  t.root.addEventListener("mouseup", i), t.root.addEventListener("dragstart", i), t.root.addEventListener("mousemove", l);
}
function Ha(t, e, n) {
  if (!(t.state.selection instanceof K)) return null;
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
function ms(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && Dt(t.state.doc.resolve(r)) || Dt(t.state.doc.resolve(s));
}
var tm = class {
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
        const b = s == f ? o : m && m[g], y = b ? b + "px" : "";
        if (i += b || r, b || (l = !1), a)
          a.style.width != y && (a.style.width = y), a = a.nextSibling;
        else {
          const C = document.createElement("col");
          C.style.width = y, e.appendChild(C);
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
const Le = new qe("tableColumnResizing");
function nm({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = tm, lastColumnResizable: s = !0 } = {}) {
  const o = new rt({
    key: Le,
    state: {
      init(i, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = Ce(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new rm(-1, !1);
      },
      apply(i, l) {
        return l.apply(i);
      }
    },
    props: {
      attributes: (i) => {
        const l = Le.getState(i);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (i, l) => {
          sm(i, l, t, s);
        },
        mouseleave: (i) => {
          om(i);
        },
        mousedown: (i, l) => {
          im(i, l, e, n);
        }
      },
      decorations: (i) => {
        const l = Le.getState(i);
        if (l && l.activeHandle > -1) return dm(i, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var rm = class ar {
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
function sm(t, e, n, r) {
  if (!t.editable) return;
  const s = Le.getState(t.state);
  if (s && !s.dragging) {
    const o = am(e.target);
    let i = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? i = zi(t, e, "left", n) : a - e.clientX <= n && (i = zi(t, e, "right", n));
    }
    if (i != s.activeHandle) {
      if (!r && i !== -1) {
        const l = t.state.doc.resolve(i), a = l.node(-1), c = ae.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Wa(t, i);
    }
  }
}
function om(t) {
  if (!t.editable) return;
  const e = Le.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Wa(t, -1);
}
function im(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, i = Le.getState(t.state);
  if (!i || i.activeHandle == -1 || i.dragging) return !1;
  const l = t.state.doc.nodeAt(i.activeHandle), a = lm(t, i.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Le, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = Le.getState(t.state);
    f?.dragging && (cm(t, f.activeHandle, Li(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(Le, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = Le.getState(t.state);
    if (f && f.dragging) {
      const h = Li(f.dragging, d, n);
      Pi(t, f.activeHandle, h, r);
    }
  }
  return Pi(t, i.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function lm(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const o = t.domAtPos(e);
  let i = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (i -= r[a], l--);
  return i / l;
}
function am(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function zi(t, e, n, r) {
  const s = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: i } = o, l = Dt(t.state.doc.resolve(i));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ae.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Li(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Wa(t, e) {
  t.dispatch(t.state.tr.setMeta(Le, { setHandle: e }));
}
function cm(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), o = ae.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const m = f.colwidth ? f.colwidth.slice() : um(f.colspan);
    m[h] = n, a.setNodeMarkup(i + d, null, {
      ...f,
      colwidth: m
    });
  }
  a.docChanged && t.dispatch(a);
}
function Pi(t, e, n, r) {
  const s = t.state.doc.resolve(e), o = s.node(-1), i = s.start(-1), l = ae.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ps(o, a.firstChild, a, r, l, n);
}
function um(t) {
  return Array(t).fill(0);
}
function dm(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return de.empty;
  const o = ae.get(s), i = r.start(-1), l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      var a;
      const d = o.map[u], f = i + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Le.getState(t)) === null || a === void 0) && a.dragging && n.push(We.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(We.widget(f, h));
    }
  }
  return de.create(t.doc, n);
}
function fm({ allowTableNodeSelection: t = !1 } = {}) {
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
        const { deleted: s, pos: o } = e.mapping.mapResult(n);
        return s ? null : o;
      }
    },
    props: {
      decorations: Ap,
      handleDOMEvents: { mousedown: em },
      createSelectionBetween(e) {
        return mt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Qp,
      handleKeyDown: Xp,
      handlePaste: Zp
    },
    appendTransaction(e, n, r) {
      return Tp(r, Fa(r, n), t);
    }
  });
}
var Va = Ln.create({
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
    return ["td", tn(this.options.HTMLAttributes, t), 0];
  }
}), Ua = Ln.create({
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
}), Ka = Ln.create({
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
function $i(t, e, n, r, s, o) {
  var i;
  let l = 0, a = !0, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: m, colwidth: g } = u.child(f).attrs;
      for (let b = 0; b < m; b += 1, h += 1) {
        const y = s === h ? o : g && g[b], C = y ? `${y}px` : "";
        if (l += y || r, y || (a = !1), c) {
          if (c.style.width !== C) {
            const [k, w] = $s(r, y);
            c.style.setProperty(k, w);
          }
          c = c.nextSibling;
        } else {
          const k = document.createElement("col"), [w, v] = $s(r, y);
          k.style.setProperty(w, v), e.appendChild(k);
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
var hm = class {
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
function pm(t, e, n, r) {
  let s = 0, o = !0;
  const i = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: m } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const b = n === f ? r : m && m[g];
      s += b || e, b || (o = !1);
      const [y, C] = $s(e, b);
      i.push(["col", { style: `${y}: ${C}` }]);
    }
  }
  const a = o ? `${s}px` : "", c = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Fi(t, e) {
  return t.createAndFill();
}
function mm(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function gm(t, e, n, r, s) {
  const o = mm(t), i = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Fi(o.cell);
    if (u && l.push(u), r) {
      const d = Fi(o.header_cell);
      d && i.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? i : l));
  return o.table.createChecked(null, a);
}
function ym(t) {
  return t instanceof ne;
}
var tr = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!ym(e))
    return !1;
  let n = 0;
  const r = Na(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, bm = "";
function xm(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function wm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : bm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((m) => {
    const g = [];
    m.content && m.content.forEach((b) => {
      let y = "";
      b.content && Array.isArray(b.content) && b.content.length > 1 ? y = b.content.map((v) => e.renderChildren(v)).join(s) : y = b.content ? e.renderChildren(b.content) : "";
      const C = xm(y), k = b.type === "tableHeader";
      g.push({ text: C, isHeader: k });
    }), o.push(g);
  });
  const i = o.reduce((m, g) => Math.max(m, g.length), 0);
  if (i === 0)
    return "";
  const l = new Array(i).fill(0);
  o.forEach((m) => {
    var g;
    for (let b = 0; b < i; b += 1) {
      const C = (((g = m[b]) == null ? void 0 : g.text) || "").length;
      C > l[b] && (l[b] = C), l[b] < 3 && (l[b] = 3);
    }
  });
  const a = (m, g) => m + " ".repeat(Math.max(0, g - m.length)), c = o[0], u = c.some((m) => m.isHeader);
  let d = `
`;
  const f = new Array(i).fill(0).map((m, g) => u && c[g] && c[g].text || "");
  return d += `| ${f.map((m, g) => a(m, l[g])).join(" | ")} |
`, d += `| ${l.map((m) => "-".repeat(Math.max(3, m))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((m) => {
    d += `| ${new Array(i).fill(0).map((g, b) => a(m[b] && m[b].text || "", l[b])).join(" | ")} |
`;
  }), d;
}
var vm = wm, qa = Ln.create({
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
      View: hm,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = pm(t, this.options.cellMinWidth), o = e.style;
    function i() {
      return o || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      tn(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => vm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = gm(o.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(K.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Ip(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Op(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Dp(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Lp(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Pp(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Fp(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Kp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Ni(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Ti(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Rn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Rn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Vp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Ni(t, e) ? !0 : Ti(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Hp(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Ri(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Ri(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Fa(t), !0),
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
      Backspace: tr,
      "Mod-Backspace": tr,
      Delete: tr,
      "Mod-Delete": tr
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        nm({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      fm({
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
      tableRole: Mn(Zt(t, "tableRole", e))
    };
  }
});
Ge.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(qa.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Va.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Ua.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Ka.configure(this.options.tableRow)), t;
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
function Sm({ editor: t }) {
  const [e, n] = He(!1);
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
function Cm({ editor: t }) {
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
    /* @__PURE__ */ p.jsx(Sm, { editor: t }),
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
function km({
  value: t,
  onChange: e,
  disabled: n,
  field_name: r
}) {
  const s = sc({
    extensions: [
      ic.configure({
        link: {
          openOnClick: !1,
          autolink: !0
        }
      }),
      fp,
      mp,
      qa.configure({ resizable: !0 }),
      Ka,
      Ua,
      Va
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
  return De(() => {
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
        !n && /* @__PURE__ */ p.jsx(Cm, { editor: s }),
        /* @__PURE__ */ p.jsxs("div", { className: "resize-y overflow-auto min-h-[200px] max-h-[500px]", children: [
          /* @__PURE__ */ p.jsx(
            oc,
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
function Pn({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
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
    handleSelect: b,
    handlePersist: y,
    setLoading: C,
    removeFile: k,
    baseInputClasses: w,
    focusClasses: v,
    labelClasses: N,
    search: O,
    highlightedIndex: U,
    options: $,
    isDisabled: W,
    key: S,
    filteredOptions: ce,
    open: F,
    listRef: q,
    triggerRef: Q,
    isFocused: ie,
    exactMatch: le,
    loading: je
  } = Zc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    chainMap: a,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), Xe = (T) => T.icon ? /* @__PURE__ */ p.jsx("i", { className: T.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const A = e.values[S] ?? "", M = O !== "" ? O : cr($, A) ?? String(A ?? "");
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
            onKeyDown: (I) => {
              if (I.key === "Enter") {
                if (I.preventDefault(), le) {
                  const [G] = le;
                  e.setFieldValue(S, G), y(G, t, o);
                } else O.trim() && (e.setFieldValue(S, O.trim()), y(O.trim(), t, o));
                h(!1);
                return;
              }
              d(I, !0);
            },
            disabled: W
          }
        ) }),
        /* @__PURE__ */ p.jsx(_s, { anchorRef: Q, open: F && !W, children: /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: q,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: ce.length > 0 && le ? ce.map(([I, G], B) => /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `${S}-${I}`,
                "data-index": B,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${U === B ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => b(I),
                children: G
              },
              I
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
          Ho,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            valueArray: A,
            labelClasses: N,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: y,
            module_refid: o,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      }
      return /* @__PURE__ */ p.jsx(
        Bo,
        {
          field: t,
          isDisabled: W,
          handleKeyDown: d,
          labelClasses: N,
          listRef: q,
          search: O,
          filteredOptions: ce,
          highlightedIndex: U,
          setSearch: f,
          formik: e,
          executeFieldMethod: c,
          handlePersist: y,
          module_refid: o,
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
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx(
          km,
          {
            value: e.values[S] ?? "",
            disabled: W,
            field_name: S,
            onChange: (A) => {
              e.setFieldValue(S, A), y(A, t, o), c("onChange", t, S);
            }
          }
        ),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                e.setFieldValue(S, A.target.value), y(A.target.value, t, o), c("onChange", t, `${S}`);
              },
              placeholder: t.placeholder,
              disabled: W
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const A = e.values[S];
        return /* @__PURE__ */ p.jsx(
          Ho,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            valueArray: A,
            labelClasses: N,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: y,
            module_refid: o,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      }
      if (t.search)
        return /* @__PURE__ */ p.jsx(
          Bo,
          {
            field: t,
            isDisabled: W,
            handleKeyDown: d,
            labelClasses: N,
            listRef: q,
            search: O,
            filteredOptions: ce,
            highlightedIndex: U,
            setSearch: f,
            formik: e,
            executeFieldMethod: c,
            handlePersist: y,
            module_refid: o,
            options: $,
            triggerRef: Q,
            open: F,
            setOpen: h
          }
        );
      const T = Pc($);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                e.setFieldValue(S, A.target.value), y(A.target.value, t, o), c("onChange", t, `${S}`);
              },
              disabled: W,
              children: [
                t?.["no-option"] !== "false" && !e.values[S] && /* @__PURE__ */ p.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                /* @__PURE__ */ p.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                Object.entries(T).map(
                  ([A, M]) => A === "__ungrouped__" ? M.map((I) => /* @__PURE__ */ p.jsx("option", { value: I.value, className: "py-2", children: I.label }, I.value)) : /* @__PURE__ */ p.jsx("optgroup", { label: A, children: M.map((I) => /* @__PURE__ */ p.jsx("option", { value: I.value, children: I.label }, I.value)) }, A)
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
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                    e.setFieldValue(S, M.target.value), y(M.target.value, t, o), c("onChange", t, `${S}-${A.value}`);
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
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 ml-1", children: $.map((I) => {
          const G = A ? Array.isArray(M) && M.includes(I.value) : M === I.value;
          return /* @__PURE__ */ p.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${S}-${I.value}`,
                    type: "checkbox",
                    checked: G,
                    onChange: (B) => {
                      let D;
                      if (A) {
                        const L = Array.isArray(M) ? M : [];
                        D = B.target.checked ? [...L, I.value] : L.filter((V) => V !== I.value);
                      } else
                        D = B.target.checked ? I.value : "false";
                      e.setFieldValue(S, D), y(D, t, o), c("onChange", t, `${S}-${I.value}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: W,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${W ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                I.label
              ]
            },
            I.value
          );
        }) }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[S]) })
      ] });
    }
    case "tags": {
      const A = e.values[S] ?? [], M = O.trim(), I = (D) => {
        if (!W && D && !A.includes(D)) {
          let L = [...A, D];
          e.setFieldValue(S, L), y(L, t, o), f("");
        }
      }, G = (D) => {
        let L = A.filter((V) => V !== D);
        e.setFieldValue(
          S,
          L
        ), y(L, t, o);
      }, B = (D) => cr($, D) ?? D;
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                    (D.key === "Enter" || D.key === ",") && (D.preventDefault(), I(M));
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
        tl,
        {
          formik: e,
          field: t,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const z = t.multiple === !0, Z = t.max !== void 0 ? Number(t.max) : 1 / 0, Y = Array.isArray(e.values[S]) ? e.values[S] : e.values[S] ? [e.values[S]] : [];
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                const M = Xi({
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
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2", children: Y.map((A) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ p.jsx(
            nu,
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
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                e.setFieldValue(S, A.target.value), y(A.target.value, t, o), c("onChange", t, `${S}`);
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
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    case "date": {
      const A = Gc(t.max);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                    e.setFieldValue(S, M.target.value), y(M.target.value, t, o), c("onChange", t, `${S}`);
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
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`,
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
          const I = await ws();
          e.setFieldValue(S, I), y(I, t, o);
        } catch (I) {
          console.error(I), e.setFieldError(S, "Failed to fetch location");
        } finally {
          C(!1);
        }
      };
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                e.setFieldValue(S, A.target.value), y(A.target.value, t, o), c("onChange", t, `${S}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              min: t.min,
              max: t.max
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
    default:
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: N, children: [
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
                e.setFieldValue(S, A.target.value), y(A.target.value, t, o), c("onChange", t, `${S}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: W,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[S] && e.errors[S] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[S]) })
      ] });
  }
}
function _i({ title: t, children: e, isFirst: n }) {
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
  module_refid: o,
  fieldOptions: i,
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
          tl,
          {
            formik: e,
            field: c,
            sqlOpsUrls: r,
            module_refid: o
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: `${u} min-h-0 max-h-40  overflow-y-auto `, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((d, f) => {
      if (d.type === "avatar") return null;
      const h = jn(d.hidden);
      return /* @__PURE__ */ p.jsx("div", { id: `wrapper-${d.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${In[On(Number(d.width))] || "lg:col-span-4"}
                                ${h ? "hidden" : ""}

                                `, children: /* @__PURE__ */ p.jsx(
        Pn,
        {
          refid: s,
          module_refid: o,
          sqlOpsUrls: r,
          field: d,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...i?.[d.name] ? { optionsOverride: i[d.name] } : {},
          chainMap: a
        },
        d?.name || f
      ) }, d.name);
    }) }) })
  ] }) });
}
function Am({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (u) => Promise,
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = se.useState({}), m = (w, v) => {
    h((N) => ({
      ...N,
      [w]: v
    }));
  }, g = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: b, validationSchema: y } = se.useMemo(() => {
    const w = {}, v = {};
    return Object.values(e).flat().forEach((N) => {
      Sn([N], w, v, n, c, l?.operation);
    }), {
      initialValues: w,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), C = kr({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(y),
    onSubmit: async (w) => {
      let v = Ar(w, g);
      await r(v), C.resetForm();
    }
  }), k = se.useMemo(
    () => Er(g),
    [g]
  );
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx(_i, { title: "Common", isFirst: !0, children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: C,
          methods: o,
          setFieldOptions: m,
          fieldOptions: f,
          chainMap: k
        }
      ) }),
      d && Object.entries(d).map(([w, v], N) => /* @__PURE__ */ p.jsx(_i, { title: w, isFirst: N === 0 && u.length === 0, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((O, U) => {
        const $ = jn(O.hidden), W = `
                        col-span-12 md:col-span-6
                        ${In[On(Number(O.width))] || "lg:col-span-4"}
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
              Pn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: O,
                formik: C,
                methods: o,
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
function Em({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (d) => {
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
  const { common: d = [], ...f } = e, h = Object.keys(f), [m, g] = se.useState(0), [b, y] = se.useState({}), C = (F, q) => {
    y((Q) => ({
      ...Q,
      [F]: q
    }));
  }, { initialValues: k, validationSchema: w, stepperSchemas: v } = se.useMemo(() => {
    const F = {}, q = {}, Q = {};
    return a ? Object.entries(e).forEach(([ie, le]) => {
      const je = {};
      Sn(le, F, je, n, u, l?.operation), Q[ie] = je;
    }) : Object.entries(e).forEach(([ie, le]) => {
      Sn(le, F, q, n, u, l?.operation);
    }), {
      initialValues: F,
      validationSchema: q,
      stepperSchemas: Q
    };
  }, [e, n, a, u, l?.operation]), N = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), O = h[m] ?? null, U = a && O ? v[O] ?? {} : w, $ = kr({
    initialValues: k,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(U),
    onSubmit: async (F) => {
      let q = Ar(F, N);
      a ? (m < h.length - 1 && g((Q) => Q + 1), m === h.length - 1 && await r(q)) : await r(q), $.resetForm();
    }
  }), W = async (F) => {
    if (F.preventDefault(), !a) {
      const q = await $.validateForm();
      if (Object.keys(q).length > 0) {
        alert("Please fill all required fields before submitting."), $.setTouched(
          Object.keys(q).reduce((Q, ie) => ({ ...Q, [ie]: !0 }), {})
        );
        return;
      }
    }
    $.handleSubmit(F);
  }, S = () => {
    g((F) => F > 0 ? F - 1 : F);
  }, ce = se.useMemo(
    () => Er(N),
    [N]
  );
  return console.log("flatFields", N), /* @__PURE__ */ p.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: W, className: "w-full mx-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "relative", children: /* @__PURE__ */ p.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "p-3", children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: $,
          methods: o,
          setFieldOptions: C,
          fieldOptions: b,
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
            const Q = jn(F.hidden), ie = `
                  col-span-12 md:col-span-6
                  ${In[On(Number(F.width))] || "lg:col-span-4"}
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
                className: ie,
                children: /* @__PURE__ */ p.jsx(
                  Pn,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: F,
                    formik: $,
                    methods: o,
                    components: i,
                    setFieldOptions: C,
                    ...b[F.name] ? { optionsOverride: b[F.name] } : {},
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
function Nm({
  title: t,
  fields: e,
  data: n,
  onSubmit: r = async (c) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: a
}) {
  const c = _c(e, i?.operation), [u, d] = se.useState({}), f = (k, w) => {
    d((v) => ({
      ...v,
      [k]: w
    }));
  }, { commonFields: h, otherFields: m } = se.useMemo(() => c.reduce(
    (k, w) => (w.group === "common" ? k.commonFields.push(w) : k.otherFields.push(w), k),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: b } = se.useMemo(() => {
    const k = {}, w = {};
    return c.forEach((v) => {
      Sn([v], k, w, n, a, i?.operation);
    }), {
      initialValues: k,
      validationSchema: w
    };
  }, [c, n]), y = se.useMemo(
    () => Er(c),
    [c]
  ), C = kr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(b),
    onSubmit: async (k) => {
      let w = Ar(k, c);
      await r(w), C.resetForm();
    }
  });
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ p.jsx(
      zr,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: i,
        fields: h,
        formik: C,
        methods: o,
        setFieldOptions: f,
        fieldOptions: u,
        chainMap: y
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((k) => {
      const w = jn(k.hidden), v = `col-span-12 md:col-span-6
    ${In[On(Number(k.width))] || "lg:col-span-4"}
    ${w ? "hidden" : ""}
  `;
      if (k.type === "static" || k.type === "static2") {
        const N = k.type === "static";
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${k.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: ` bg-gray-100 ${N ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                  "h2",
                  {
                    className: `${N ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
            Pn,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: i,
              field: k,
              formik: C,
              methods: o,
              chainMap: y,
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
function Tm({
  title: t,
  groupedFields: e,
  data: n,
  onSubmit: r = async (u) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  components: i = {},
  sqlOpsUrls: l,
  refid: a,
  module_refid: c
}) {
  const { common: u = [], ...d } = e, [f, h] = se.useState({});
  console.log("ccccccccccccc", e);
  const m = (w, v) => {
    h((N) => ({
      ...N,
      [w]: v
    }));
  }, g = se.useMemo(
    () => Object.values(e).flat(),
    [e]
  ), { initialValues: b, validationSchema: y } = se.useMemo(() => {
    const w = {}, v = {};
    return Object.values(e).flat().forEach((N) => {
      Sn([N], w, v, n, c, l?.operation);
    }), {
      initialValues: w,
      validationSchema: v
    };
  }, [e, n, c, l?.operation]), C = kr({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: Te.object().shape(y),
    onSubmit: async (w) => {
      let v = Ar(w, g);
      await r(v), C.resetForm();
    }
  }), k = se.useMemo(
    () => Er(g),
    [g]
  );
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: C.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx(Bi, { title: "Common", children: /* @__PURE__ */ p.jsx(
        zr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: C,
          methods: o,
          setFieldOptions: m,
          fieldOptions: f,
          chainMap: k
        }
      ) }),
      d && Object.entries(d).map(([w, v], N) => /* @__PURE__ */ p.jsx(Bi, { title: w, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: v.map((O, U) => {
        const $ = jn(O.hidden), W = `
                                            col-span-12 md:col-span-6
                                            ${In[On(Number(O.width))] || "lg:col-span-4"}
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
              Pn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: i,
                field: O,
                formik: C,
                methods: o,
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
function Lm({
  formJson: t,
  methods: e = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o,
  toast: i
}) {
  let l = zc(t);
  const a = t.endPoints, c = t?.source?.refid, u = Lc(t?.fields ?? {}, a?.operation), [d, f] = se.useState(o ?? {}), h = se.useMemo(() => Fc(t.fields), [t.fields]);
  se.useEffect(() => {
    let y = !0;
    const C = async () => {
      try {
        const w = await ws();
        y && f((v) => ({
          ...v,
          ...Object.fromEntries(
            h.map((N) => [N, w])
          )
        }));
      } catch (w) {
        console.warn("Geo fetch failed", w);
      }
    }, k = setTimeout(() => {
      h.length > 0 && C();
    }, 0);
    return () => {
      y = !1, clearTimeout(k);
    };
  }, [h]), se.useEffect(() => {
    f((y) => ({
      ...y,
      ...o ?? {}
    }));
  }, [o]);
  const m = se.useCallback(
    (y) => {
      y && f((C) => {
        const k = { ...C };
        for (const w in y)
          y[w] !== null && y[w] !== void 0 && (k[w] = y[w]);
        return k;
      });
    },
    []
  );
  se.useEffect(() => {
    let y = !0;
    return (async () => {
      const k = t?.source ?? {};
      if (!k?.type) {
        y && f((w) => w);
        return;
      }
      if (k.type === "method" && a?.operation !== "create") {
        const w = k.method, v = w ? e[w] : void 0;
        if (v)
          try {
            const N = await v();
            y && m(N);
          } catch (N) {
            console.error("Method execution failed:", N), y && f((O) => O);
          }
        else
          y && f((N) => N);
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
          y && m(v.data ?? {});
        } catch (w) {
          console.error("API fetch failed:", w), y && f((v) => v);
        }
      if (k.type === "sql" && k.refid && k.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && k.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const w = await Qc.fetch(a, {
            source: {
              ...k,
              table: k.table,
              columns: k.columns,
              where: ct(k.where, {
                refid: c
              })
            },
            fields: $o(t.fields, a.operation)
          }, k?.dbopsid, t?.module_refid);
          y && m(w);
        } catch (w) {
          console.error("API fetch failed:", w);
        }
      }
    })(), () => {
      y = !1;
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
  const g = async (y) => {
    const C = t?.source ?? {};
    let k = { ...y };
    if (h.length > 0) {
      const w = h.filter((v) => !y[v]);
      if (w.length > 0)
        try {
          const v = await ws();
          k = {
            ...y,
            ...Object.fromEntries(
              w.map((N) => [N, v])
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
          const N = await v(k);
          if (s?.(N), i?.success?.(Qr(N)), e?.handleActions) {
            let O = a?.operation === "update" ? c : N?.data?.refid;
            const U = t?.gotolink?.replace(
              "{hashid}",
              String(O)
            );
            e.handleActions(U);
          }
        } catch (N) {
          i?.error?.(Xr(N)), console.error("Method execution failed:", N);
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
        if (s?.(w), i?.success?.(Qr(w)), e?.handleActions) {
          let v = a.operation === "update" ? c : w?.data?.refid;
          const N = t?.gotolink?.replace(
            "{hashid}",
            String(v)
          );
          e.handleActions(N);
        }
      } catch (w) {
        i?.error?.(Xr(w)), console.error("API fetch failed:", w);
      }
    }
    if (C.type === "sql") {
      const w = t.endPoints;
      if (!w) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let v = !1, N;
        C?.dbopsid && (v = !0, N = C?.dbopsid);
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
          }), N = (await fe({
            method: "POST",
            url: w.baseURL + w.dbopsGetRefId,
            data: {
              operation: w.operation,
              source: $,
              fields: $o(t.fields, w.operation),
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
            refid: N,
            fields: k,
            datahash: O.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        if (i?.success?.(Qr(U)), s?.(U), e?.handleActions) {
          let $ = w.operation === "update" ? c : U?.data?.refid;
          const W = t?.gotolink?.replace(
            "{hashid}",
            String($)
          );
          e.handleActions(W);
        }
      } catch (v) {
        i?.error?.(Xr(v)), console.error("API fetch failed:", v);
      }
    }
  }, b = {
    accordion: /* @__PURE__ */ p.jsx(
      Am,
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
      Tm,
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
      Em,
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
      Nm,
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
  return /* @__PURE__ */ p.jsx("div", { className: "relative", children: b[l] });
}
export {
  Lm as LogiksForm
};
