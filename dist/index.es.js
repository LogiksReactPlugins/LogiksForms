import xe, { useState as Fe, useRef as er, useEffect as Pe, useMemo as tr, useLayoutEffect as Ci } from "react";
import ce from "axios";
import * as Ee from "yup";
import { useFormik as Cr } from "formik";
import { createPortal as Za } from "react-dom";
import { useEditor as ec, EditorContent as tc } from "@tiptap/react";
import nc from "@tiptap/starter-kit";
var Bn = { exports: {} }, sn = {};
var ki;
function rc() {
  if (ki) return sn;
  ki = 1;
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
  return sn.Fragment = e, sn.jsx = n, sn.jsxs = n, sn;
}
var on = {};
var Ai;
function sc() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === A ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case g:
          return "Fragment";
        case x:
          return "Profiler";
        case y:
          return "StrictMode";
        case w:
          return "Suspense";
        case I:
          return "SuspenseList";
        case F:
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
          case v:
            return (T._context.displayName || "Context") + ".Consumer";
          case C:
            var $ = T.render;
            return T = T.displayName, T || (T = $.displayName || $.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case B:
            return $ = T.displayName || null, $ !== null ? $ : t(T.type) || "Memo";
          case D:
            $ = T._payload, T = T._init;
            try {
              return t(T($));
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
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var Q = $.error, S = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return Q.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), e(T);
      }
    }
    function r(T) {
      if (T === g) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === D)
        return "<...>";
      try {
        var $ = t(T);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = z.A;
      return T === null ? null : T.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(T) {
      if (U.call(T, "key")) {
        var $ = Object.getOwnPropertyDescriptor(T, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, $) {
      function Q() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: Q,
        configurable: !0
      });
    }
    function a() {
      var T = t(this.type);
      return fe[T] || (fe[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function c(T, $, Q, S, j, E, K, Y) {
      return Q = E.ref, T = {
        $$typeof: h,
        type: T,
        key: $,
        props: E,
        _owner: j
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(T, "ref", {
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
        value: K
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, $, Q, S, j, E, K, Y) {
      var R = $.children;
      if (R !== void 0)
        if (S)
          if (ee(R)) {
            for (S = 0; S < R.length; S++)
              d(R[S]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (U.call($, "key")) {
        R = t(T);
        var L = Object.keys($).filter(function(Z) {
          return Z !== "key";
        });
        S = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", We[R + S] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          R,
          L,
          R
        ), We[R + S] = !0);
      }
      if (R = null, Q !== void 0 && (n(Q), R = "" + Q), o($) && (n($.key), R = "" + $.key), "key" in $) {
        Q = {};
        for (var H in $)
          H !== "key" && (Q[H] = $[H]);
      } else Q = $;
      return R && l(
        Q,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), c(
        T,
        R,
        E,
        j,
        s(),
        Q,
        K,
        Y
      );
    }
    function d(T) {
      typeof T == "object" && T !== null && T.$$typeof === h && T._store && (T._store.validated = 1);
    }
    var f = xe, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, ee = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(T) {
        return T();
      }
    };
    var X, fe = {}, st = f["react-stack-bottom-frame"].bind(
      f,
      i
    )(), He = G(r(i)), We = {};
    on.Fragment = g, on.jsx = function(T, $, Q, S, j) {
      var E = 1e4 > z.recentlyCreatedOwnerStacks++;
      return u(
        T,
        $,
        Q,
        !1,
        S,
        j,
        E ? Error("react-stack-top-frame") : st,
        E ? G(r(T)) : He
      );
    }, on.jsxs = function(T, $, Q, S, j) {
      var E = 1e4 > z.recentlyCreatedOwnerStacks++;
      return u(
        T,
        $,
        Q,
        !0,
        S,
        j,
        E ? Error("react-stack-top-frame") : st,
        E ? G(r(T)) : He
      );
    };
  })()), on;
}
var Ei;
function ic() {
  return Ei || (Ei = 1, process.env.NODE_ENV === "production" ? Bn.exports = rc() : Bn.exports = sc()), Bn.exports;
}
var p = ic();
const {
  entries: _o,
  setPrototypeOf: Ni,
  isFrozen: oc,
  getPrototypeOf: lc,
  getOwnPropertyDescriptor: ac
} = Object;
let {
  freeze: Te,
  seal: Be,
  create: ms
} = Object, {
  apply: gs,
  construct: ys
} = typeof Reflect < "u" && Reflect;
Te || (Te = function(e) {
  return e;
});
Be || (Be = function(e) {
  return e;
});
gs || (gs = function(e, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return e.apply(n, s);
});
ys || (ys = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const Hn = Me(Array.prototype.forEach), cc = Me(Array.prototype.lastIndexOf), Ti = Me(Array.prototype.pop), ln = Me(Array.prototype.push), uc = Me(Array.prototype.splice), nr = Me(String.prototype.toLowerCase), Hr = Me(String.prototype.toString), Wr = Me(String.prototype.match), an = Me(String.prototype.replace), dc = Me(String.prototype.indexOf), fc = Me(String.prototype.trim), Ve = Me(Object.prototype.hasOwnProperty), Ae = Me(RegExp.prototype.test), cn = hc(TypeError);
function Me(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return gs(t, e, r);
  };
}
function hc(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return ys(t, n);
  };
}
function J(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nr;
  Ni && Ni(t, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (oc(e) || (e[r] = i), s = i);
    }
    t[s] = !0;
  }
  return t;
}
function pc(t) {
  for (let e = 0; e < t.length; e++)
    Ve(t, e) || (t[e] = null);
  return t;
}
function Ze(t) {
  const e = ms(null);
  for (const [n, r] of _o(t))
    Ve(t, n) && (Array.isArray(r) ? e[n] = pc(r) : r && typeof r == "object" && r.constructor === Object ? e[n] = Ze(r) : e[n] = r);
  return e;
}
function un(t, e) {
  for (; t !== null; ) {
    const r = ac(t, e);
    if (r) {
      if (r.get)
        return Me(r.get);
      if (typeof r.value == "function")
        return Me(r.value);
    }
    t = lc(t);
  }
  function n() {
    return null;
  }
  return n;
}
const Mi = Te(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Vr = Te(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ur = Te(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), mc = Te(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Kr = Te(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), gc = Te(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ri = Te(["#text"]), Ii = Te(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), qr = Te(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Oi = Te(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), yc = Be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bc = Be(/<%[\w\W]*|[\w\W]*%>/gm), xc = Be(/\$\{[\w\W]*/gm), wc = Be(/^data-[\-\w.\u00B7-\uFFFF]+$/), vc = Be(/^aria-[\-\w]+$/), Bo = Be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Sc = Be(/^(?:\w+script|data):/i), Cc = Be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ho = Be(/^html$/i), kc = Be(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ji = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: vc,
  ATTR_WHITESPACE: Cc,
  CUSTOM_ELEMENT: kc,
  DATA_ATTR: wc,
  DOCTYPE_NAME: Ho,
  ERB_EXPR: bc,
  IS_ALLOWED_URI: Bo,
  IS_SCRIPT_OR_DATA: Sc,
  MUSTACHE_EXPR: yc,
  TMPLIT_EXPR: xc
});
const dn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ac = function() {
  return typeof window > "u" ? null : window;
}, Ec = function(e, n) {
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
}, Di = function() {
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
function Wo() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ac();
  const e = (_) => Wo(_);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== dn.document || !t.Element)
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
  } = t, m = a.prototype, g = un(m, "cloneNode"), y = un(m, "remove"), x = un(m, "nextSibling"), v = un(m, "childNodes"), k = un(m, "parentNode");
  if (typeof o == "function") {
    const _ = n.createElement("template");
    _.content && _.content.ownerDocument && (n = _.content.ownerDocument);
  }
  let C, w = "";
  const {
    implementation: I,
    createNodeIterator: B,
    createDocumentFragment: D,
    getElementsByTagName: F
  } = n, {
    importNode: A
  } = r;
  let z = Di();
  e.isSupported = typeof _o == "function" && typeof k == "function" && I && I.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: U,
    ERB_EXPR: ee,
    TMPLIT_EXPR: G,
    DATA_ATTR: X,
    ARIA_ATTR: fe,
    IS_SCRIPT_OR_DATA: st,
    ATTR_WHITESPACE: He,
    CUSTOM_ELEMENT: We
  } = ji;
  let {
    IS_ALLOWED_URI: T
  } = ji, $ = null;
  const Q = J({}, [...Mi, ...Vr, ...Ur, ...Kr, ...Ri]);
  let S = null;
  const j = J({}, [...Ii, ...qr, ...Oi, ...Wn]);
  let E = Object.seal(ms(null, {
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
  })), K = null, Y = null;
  const R = Object.seal(ms(null, {
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
  let L = !0, H = !0, Z = !1, se = !0, ge = !1, oe = !0, ze = !1, Le = !1, it = !1, Ye = !1, Ft = !1, St = !1, Ln = !0, li = !1;
  const Ua = "user-content-";
  let Dr = !0, nn = !1, _t = {}, Xe = null;
  const zr = J({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ai = null;
  const ci = J({}, ["audio", "video", "img", "source", "image", "track"]);
  let Lr = null;
  const ui = J({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pn = "http://www.w3.org/1998/Math/MathML", $n = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml";
  let Bt = ot, Pr = !1, $r = null;
  const Ka = J({}, [Pn, $n, ot], Hr);
  let Fn = J({}, ["mi", "mo", "mn", "ms", "mtext"]), _n = J({}, ["annotation-xml"]);
  const qa = J({}, ["title", "style", "font", "a", "script"]);
  let rn = null;
  const Ja = ["application/xhtml+xml", "text/html"], Ga = "text/html";
  let de = null, Ht = null;
  const Ya = n.createElement("form"), di = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Fr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ht && Ht === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = Ze(b), rn = // eslint-disable-next-line unicorn/prefer-includes
      Ja.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Ga : b.PARSER_MEDIA_TYPE, de = rn === "application/xhtml+xml" ? Hr : nr, $ = Ve(b, "ALLOWED_TAGS") ? J({}, b.ALLOWED_TAGS, de) : Q, S = Ve(b, "ALLOWED_ATTR") ? J({}, b.ALLOWED_ATTR, de) : j, $r = Ve(b, "ALLOWED_NAMESPACES") ? J({}, b.ALLOWED_NAMESPACES, Hr) : Ka, Lr = Ve(b, "ADD_URI_SAFE_ATTR") ? J(Ze(ui), b.ADD_URI_SAFE_ATTR, de) : ui, ai = Ve(b, "ADD_DATA_URI_TAGS") ? J(Ze(ci), b.ADD_DATA_URI_TAGS, de) : ci, Xe = Ve(b, "FORBID_CONTENTS") ? J({}, b.FORBID_CONTENTS, de) : zr, K = Ve(b, "FORBID_TAGS") ? J({}, b.FORBID_TAGS, de) : Ze({}), Y = Ve(b, "FORBID_ATTR") ? J({}, b.FORBID_ATTR, de) : Ze({}), _t = Ve(b, "USE_PROFILES") ? b.USE_PROFILES : !1, L = b.ALLOW_ARIA_ATTR !== !1, H = b.ALLOW_DATA_ATTR !== !1, Z = b.ALLOW_UNKNOWN_PROTOCOLS || !1, se = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ge = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, ze = b.WHOLE_DOCUMENT || !1, Ye = b.RETURN_DOM || !1, Ft = b.RETURN_DOM_FRAGMENT || !1, St = b.RETURN_TRUSTED_TYPE || !1, it = b.FORCE_BODY || !1, Ln = b.SANITIZE_DOM !== !1, li = b.SANITIZE_NAMED_PROPS || !1, Dr = b.KEEP_CONTENT !== !1, nn = b.IN_PLACE || !1, T = b.ALLOWED_URI_REGEXP || Bo, Bt = b.NAMESPACE || ot, Fn = b.MATHML_TEXT_INTEGRATION_POINTS || Fn, _n = b.HTML_INTEGRATION_POINTS || _n, E = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && di(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (E.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && di(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (E.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (E.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ge && (H = !1), Ft && (Ye = !0), _t && ($ = J({}, Ri), S = [], _t.html === !0 && (J($, Mi), J(S, Ii)), _t.svg === !0 && (J($, Vr), J(S, qr), J(S, Wn)), _t.svgFilters === !0 && (J($, Ur), J(S, qr), J(S, Wn)), _t.mathMl === !0 && (J($, Kr), J(S, Oi), J(S, Wn))), b.ADD_TAGS && (typeof b.ADD_TAGS == "function" ? R.tagCheck = b.ADD_TAGS : ($ === Q && ($ = Ze($)), J($, b.ADD_TAGS, de))), b.ADD_ATTR && (typeof b.ADD_ATTR == "function" ? R.attributeCheck = b.ADD_ATTR : (S === j && (S = Ze(S)), J(S, b.ADD_ATTR, de))), b.ADD_URI_SAFE_ATTR && J(Lr, b.ADD_URI_SAFE_ATTR, de), b.FORBID_CONTENTS && (Xe === zr && (Xe = Ze(Xe)), J(Xe, b.FORBID_CONTENTS, de)), b.ADD_FORBID_CONTENTS && (Xe === zr && (Xe = Ze(Xe)), J(Xe, b.ADD_FORBID_CONTENTS, de)), Dr && ($["#text"] = !0), ze && J($, ["html", "head", "body"]), $.table && (J($, ["tbody"]), delete K.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = b.TRUSTED_TYPES_POLICY, w = C.createHTML("");
      } else
        C === void 0 && (C = Ec(h, s)), C !== null && typeof w == "string" && (w = C.createHTML(""));
      Te && Te(b), Ht = b;
    }
  }, fi = J({}, [...Vr, ...Ur, ...mc]), hi = J({}, [...Kr, ...gc]), Xa = function(b) {
    let M = k(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: Bt,
      tagName: "template"
    });
    const P = nr(b.tagName), ne = nr(M.tagName);
    return $r[b.namespaceURI] ? b.namespaceURI === $n ? M.namespaceURI === ot ? P === "svg" : M.namespaceURI === Pn ? P === "svg" && (ne === "annotation-xml" || Fn[ne]) : !!fi[P] : b.namespaceURI === Pn ? M.namespaceURI === ot ? P === "math" : M.namespaceURI === $n ? P === "math" && _n[ne] : !!hi[P] : b.namespaceURI === ot ? M.namespaceURI === $n && !_n[ne] || M.namespaceURI === Pn && !Fn[ne] ? !1 : !hi[P] && (qa[P] || !fi[P]) : !!(rn === "application/xhtml+xml" && $r[b.namespaceURI]) : !1;
  }, Qe = function(b) {
    ln(e.removed, {
      element: b
    });
    try {
      k(b).removeChild(b);
    } catch {
      y(b);
    }
  }, Ct = function(b, M) {
    try {
      ln(e.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      ln(e.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is")
      if (Ye || Ft)
        try {
          Qe(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, pi = function(b) {
    let M = null, P = null;
    if (it)
      b = "<remove></remove>" + b;
    else {
      const le = Wr(b, /^[\r\n\t ]+/);
      P = le && le[0];
    }
    rn === "application/xhtml+xml" && Bt === ot && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ne = C ? C.createHTML(b) : b;
    if (Bt === ot)
      try {
        M = new f().parseFromString(ne, rn);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = I.createDocument(Bt, "template", null);
      try {
        M.documentElement.innerHTML = Pr ? w : ne;
      } catch {
      }
    }
    const ve = M.body || M.documentElement;
    return b && P && ve.insertBefore(n.createTextNode(P), ve.childNodes[0] || null), Bt === ot ? F.call(M, ze ? "html" : "body")[0] : ze ? M.documentElement : ve;
  }, mi = function(b) {
    return B.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, _r = function(b) {
    return b instanceof d && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof u) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, gi = function(b) {
    return typeof l == "function" && b instanceof l;
  };
  function lt(_, b, M) {
    Hn(_, (P) => {
      P.call(e, b, M, Ht);
    });
  }
  const yi = function(b) {
    let M = null;
    if (lt(z.beforeSanitizeElements, b, null), _r(b))
      return Qe(b), !0;
    const P = de(b.nodeName);
    if (lt(z.uponSanitizeElement, b, {
      tagName: P,
      allowedTags: $
    }), oe && b.hasChildNodes() && !gi(b.firstElementChild) && Ae(/<[/\w!]/g, b.innerHTML) && Ae(/<[/\w!]/g, b.textContent) || b.nodeType === dn.progressingInstruction || oe && b.nodeType === dn.comment && Ae(/<[/\w]/g, b.data))
      return Qe(b), !0;
    if (!(R.tagCheck instanceof Function && R.tagCheck(P)) && (!$[P] || K[P])) {
      if (!K[P] && xi(P) && (E.tagNameCheck instanceof RegExp && Ae(E.tagNameCheck, P) || E.tagNameCheck instanceof Function && E.tagNameCheck(P)))
        return !1;
      if (Dr && !Xe[P]) {
        const ne = k(b) || b.parentNode, ve = v(b) || b.childNodes;
        if (ve && ne) {
          const le = ve.length;
          for (let Re = le - 1; Re >= 0; --Re) {
            const at = g(ve[Re], !0);
            at.__removalCount = (b.__removalCount || 0) + 1, ne.insertBefore(at, x(b));
          }
        }
      }
      return Qe(b), !0;
    }
    return b instanceof a && !Xa(b) || (P === "noscript" || P === "noembed" || P === "noframes") && Ae(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Qe(b), !0) : (ge && b.nodeType === dn.text && (M = b.textContent, Hn([U, ee, G], (ne) => {
      M = an(M, ne, " ");
    }), b.textContent !== M && (ln(e.removed, {
      element: b.cloneNode()
    }), b.textContent = M)), lt(z.afterSanitizeElements, b, null), !1);
  }, bi = function(b, M, P) {
    if (Ln && (M === "id" || M === "name") && (P in n || P in Ya))
      return !1;
    if (!(H && !Y[M] && Ae(X, M))) {
      if (!(L && Ae(fe, M))) {
        if (!(R.attributeCheck instanceof Function && R.attributeCheck(M, b))) {
          if (!S[M] || Y[M]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(xi(b) && (E.tagNameCheck instanceof RegExp && Ae(E.tagNameCheck, b) || E.tagNameCheck instanceof Function && E.tagNameCheck(b)) && (E.attributeNameCheck instanceof RegExp && Ae(E.attributeNameCheck, M) || E.attributeNameCheck instanceof Function && E.attributeNameCheck(M, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              M === "is" && E.allowCustomizedBuiltInElements && (E.tagNameCheck instanceof RegExp && Ae(E.tagNameCheck, P) || E.tagNameCheck instanceof Function && E.tagNameCheck(P)))
            ) return !1;
          } else if (!Lr[M]) {
            if (!Ae(T, an(P, He, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && dc(P, "data:") === 0 && ai[b])) {
                if (!(Z && !Ae(st, an(P, He, "")))) {
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
  }, xi = function(b) {
    return b !== "annotation-xml" && Wr(b, We);
  }, wi = function(b) {
    lt(z.beforeSanitizeAttributes, b, null);
    const {
      attributes: M
    } = b;
    if (!M || _r(b))
      return;
    const P = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let ne = M.length;
    for (; ne--; ) {
      const ve = M[ne], {
        name: le,
        namespaceURI: Re,
        value: at
      } = ve, Wt = de(le), Br = at;
      let ye = le === "value" ? Br : fc(Br);
      if (P.attrName = Wt, P.attrValue = ye, P.keepAttr = !0, P.forceKeepAttr = void 0, lt(z.uponSanitizeAttribute, b, P), ye = P.attrValue, li && (Wt === "id" || Wt === "name") && (Ct(le, b), ye = Ua + ye), oe && Ae(/((--!?|])>)|<\/(style|title|textarea)/i, ye)) {
        Ct(le, b);
        continue;
      }
      if (Wt === "attributename" && Wr(ye, "href")) {
        Ct(le, b);
        continue;
      }
      if (P.forceKeepAttr)
        continue;
      if (!P.keepAttr) {
        Ct(le, b);
        continue;
      }
      if (!se && Ae(/\/>/i, ye)) {
        Ct(le, b);
        continue;
      }
      ge && Hn([U, ee, G], (Si) => {
        ye = an(ye, Si, " ");
      });
      const vi = de(b.nodeName);
      if (!bi(vi, Wt, ye)) {
        Ct(le, b);
        continue;
      }
      if (C && typeof h == "object" && typeof h.getAttributeType == "function" && !Re)
        switch (h.getAttributeType(vi, Wt)) {
          case "TrustedHTML": {
            ye = C.createHTML(ye);
            break;
          }
          case "TrustedScriptURL": {
            ye = C.createScriptURL(ye);
            break;
          }
        }
      if (ye !== Br)
        try {
          Re ? b.setAttributeNS(Re, le, ye) : b.setAttribute(le, ye), _r(b) ? Qe(b) : Ti(e.removed);
        } catch {
          Ct(le, b);
        }
    }
    lt(z.afterSanitizeAttributes, b, null);
  }, Qa = function _(b) {
    let M = null;
    const P = mi(b);
    for (lt(z.beforeSanitizeShadowDOM, b, null); M = P.nextNode(); )
      lt(z.uponSanitizeShadowNode, M, null), yi(M), wi(M), M.content instanceof i && _(M.content);
    lt(z.afterSanitizeShadowDOM, b, null);
  };
  return e.sanitize = function(_) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, P = null, ne = null, ve = null;
    if (Pr = !_, Pr && (_ = "<!-->"), typeof _ != "string" && !gi(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw cn("dirty is not a string, aborting");
      } else
        throw cn("toString is not a function");
    if (!e.isSupported)
      return _;
    if (Le || Fr(b), e.removed = [], typeof _ == "string" && (nn = !1), nn) {
      if (_.nodeName) {
        const at = de(_.nodeName);
        if (!$[at] || K[at])
          throw cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof l)
      M = pi("<!---->"), P = M.ownerDocument.importNode(_, !0), P.nodeType === dn.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? M = P : M.appendChild(P);
    else {
      if (!Ye && !ge && !ze && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return C && St ? C.createHTML(_) : _;
      if (M = pi(_), !M)
        return Ye ? null : St ? w : "";
    }
    M && it && Qe(M.firstChild);
    const le = mi(nn ? _ : M);
    for (; ne = le.nextNode(); )
      yi(ne), wi(ne), ne.content instanceof i && Qa(ne.content);
    if (nn)
      return _;
    if (Ye) {
      if (Ft)
        for (ve = D.call(M.ownerDocument); M.firstChild; )
          ve.appendChild(M.firstChild);
      else
        ve = M;
      return (S.shadowroot || S.shadowrootmode) && (ve = A.call(r, ve, !0)), ve;
    }
    let Re = ze ? M.outerHTML : M.innerHTML;
    return ze && $["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ae(Ho, M.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Re), ge && Hn([U, ee, G], (at) => {
      Re = an(Re, at, " ");
    }), C && St ? C.createHTML(Re) : Re;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fr(_), Le = !0;
  }, e.clearConfig = function() {
    Ht = null, Le = !1;
  }, e.isValidAttribute = function(_, b, M) {
    Ht || Fr({});
    const P = de(_), ne = de(b);
    return bi(P, ne, M);
  }, e.addHook = function(_, b) {
    typeof b == "function" && ln(z[_], b);
  }, e.removeHook = function(_, b) {
    if (b !== void 0) {
      const M = cc(z[_], b);
      return M === -1 ? void 0 : uc(z[_], M, 1)[0];
    }
    return Ti(z[_]);
  }, e.removeHooks = function(_) {
    z[_] = [];
  }, e.removeAllHooks = function() {
    z = Di();
  }, e;
}
Wo();
const Nc = ["jpg", "jpeg", "png", "gif", "svg", "webp"], Tc = ["mp4", "webm", "ogg"], Mc = ["txt", "json", "csv"], Rc = ["pdf"], zi = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Ic(t) {
  return t.template === "accordion" ? "accordion" : t.template === "simple" ? "simple" : t.template === "cards" ? "cards" : Object.values(t.fields || {}).some((r) => r.group) ? "tab" : "simple";
}
function Oc(t, e = "create", n = "Info") {
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
function Li(t, e = "create") {
  const n = {};
  return Object.keys(t).forEach((r) => {
    t[r].vmode === "edit" && e === "create" || (n[r] = {
      label: r,
      required: t[r].required ?? !1
    });
  }), n;
}
const wn = (t, e, n, r, s, i) => {
  const o = i === "create" && s ? Ko(s) : {};
  t.forEach((l) => {
    const a = l?.name;
    if (!a) return;
    let c = r?.[a];
    const u = i === "create" && s ? Uo(l) : null;
    i === "create" && u && o[u] !== void 0 && c == null && (c = o[u]), c == null && (c = l.default), zi.includes(l.type ?? "") ? e[a] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? e[a] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((f) => f.trim()).filter(Boolean) : [] : l.type === "checkbox" ? e[a] = String(c ?? "false") : l.type === "json" ? e[a] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? e[a] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? e[a] = c.slice(11, 16) : e[a] = c.slice(0, 5) : e[a] = "" : a === "blocked" || a === "blacklist" ? e[a] = String(c ?? "false") : e[a] = c ?? "";
    let d;
    if (zi.includes(l.type ?? "")) {
      const f = Ee.array().of(
        Ee.string()
      );
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else if (l.multiple === !0 || l.type === "tags") {
      const f = Ee.array().of(Ee.string());
      d = l.required ? f.min(1, l.error_message || `${l.label} is required`) : f;
    } else l.type === "email" ? d = Ee.string().email("Invalid email") : l.type === "number" ? d = Ee.number().typeError("Must be a number") : l.type === "json" ? d = Ee.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = Ee.string().nullable() : d = Ee.string();
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
              const g = m.replace(/-/g, "/"), [y, x, v] = g.split("/");
              if (!y || !x || !v) return !1;
              const k = /* @__PURE__ */ new Date(`${v}-${x}-${y}`);
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
          d = Ee.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = Ee.number().typeError("Must be a decimal").transform((m, g) => {
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
}, Mn = {
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
function Rn(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
const In = (t) => t === !0 || t === "true", ut = (t, e) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (n, r) => e[r] !== void 0 ? String(e[r]) : n
) : Array.isArray(t) ? t.map((n) => ut(n, e)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([n, r]) => [
    ut(n, e),
    ut(r, e)
  ])
) : t, Jr = (t) => t ? Array.isArray(t) ? t.map((e) => ({
  value: String(e.value),
  label: String(e.label ?? e.title ?? e.value),
  group: e.group ?? e.category ?? // 👈 support category if present
  void 0
})) : typeof t == "object" ? Object.entries(t).map(([e, n]) => ({
  value: String(e),
  label: String(n)
})) : [] : [], fn = (t, e, n, r) => {
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
}, ar = (t, e) => {
  if (!(!t || e == null))
    return t.find((n) => String(n.value) === String(e))?.label;
}, jc = (t) => t.reduce((e, n) => {
  const r = n.group || "__ungrouped__";
  return e[r] || (e[r] = []), e[r].push(n), e;
}, {}), Dc = (t) => t.map((e) => [e.value, e.label]);
async function bs() {
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
const zc = (t) => Object.entries(t ?? {}).filter(([, e]) => e.type === "geolocation").map(([e]) => e);
function Lc(t, e = "create") {
  return Object.entries(t).filter(([, n]) => !(n.vmode === "edit" && e === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
function kt(t, e, n) {
  const r = Uo(e);
  r && n && _c(n, r, t);
}
function Pc(t) {
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
}, Fc = "__form_persist__", Vo = (t) => `${Fc}:${t}`;
function Uo(t) {
  return t.persistent ? t.persistent === !0 ? t.name : typeof t.persistent == "string" ? t.persistent : null : null;
}
function Ko(t) {
  try {
    return JSON.parse(localStorage.getItem(Vo(t)) || "{}");
  } catch {
    return {};
  }
}
function _c(t, e, n) {
  const r = Ko(t);
  localStorage.setItem(
    Vo(t),
    JSON.stringify({
      ...r,
      [e]: n
    })
  );
}
function Bc(t = "") {
  return t.split(".").pop()?.toLowerCase() ?? "";
}
function Hc(t) {
  return Nc.includes(t) ? "image" : Tc.includes(t) ? "video" : Rc.includes(t) ? "pdf" : Mc.includes(t) ? "text" : "other";
}
const Pi = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};
function kr(t, e) {
  const n = new Set(
    e.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => !n.has(r))
  );
}
function Gr(t) {
  return ce.isAxiosError(t) ? t.response?.data?.message || t.message || "Something went wrong" : t instanceof Error ? t.message : typeof t == "string" ? t : "Something went wrong";
}
function Yr(t) {
  return t?.data?.message ? t.data.message : t?.message ? t.message : "Operation completed successfully";
}
const Wc = (t) => t.type === "camera2" ? {
  accept: "image/*",
  capture: "environment"
} : {
  accept: "image/*"
}, Vc = (t) => {
  switch (t.type) {
    case "camera2":
      return "fa-camera";
    // strict camera
    case "camera":
      return "fa-camera-retro";
    default:
      return "fa-image";
  }
}, qo = ({
  uploads: t,
  currentValue: e,
  multiple: n
}) => {
  const r = Array.isArray(e) ? e : e ? [e] : [], s = t.map((i) => `${i.fileId}&${i.path}`);
  return [...r, ...s];
}, Uc = (t) => t === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : t, Kc = (t) => t >= 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(2)} MB` : `${(t / 1024).toFixed(0)} KB`, Jo = ({
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
        `File "${a.name}" exceeds max size of ${Kc(r)}`
      ), t.currentTarget.value = "", null;
  }
  return s;
}, Ut = (t, e) => {
  const n = Jr(t.options_top), r = Jr(t.options), s = e ?? [], i = Jr(t.options_bottom), o = /* @__PURE__ */ new Set(), l = (a) => a.filter((c) => o.has(c.value) ? !1 : (o.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(i)
  ];
}, gn = (t) => ({
  Authorization: `Bearer ${t.accessToken}`
}), Xr = async (t) => (await ce.get(
  t.baseURL + t.dbopsGetHash,
  { headers: gn(t) }
)).data.refhash, Qr = async (t, e) => (await ce.post(
  t.baseURL + t.dbopsGetRefId,
  e,
  { headers: gn(t) }
)).data.refid, qc = {
  async fetch(t, e, n, r) {
    const s = await Xr(t);
    let i = !1, o;
    n && (i = !0, o = n), i || (o = await Qr(t, {
      operation: "fetch",
      source: e.source,
      fields: e.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await ce.post(
      t.baseURL + t.dbopsFetch,
      { refid: o, datahash: s },
      { headers: gn(t) }
    );
    return l.data?.data ?? l.data;
  },
  async create(t, e, n) {
    const r = await Xr(t), s = await Qr(t, {
      operation: "create",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await ce.post(
      t.baseURL + t.dbopsCreate,
      { refid: s, fields: e.values, datahash: r },
      { headers: gn(t) }
    )).data;
  },
  async update(t, e, n) {
    const r = await Xr(t), s = await Qr(t, {
      operation: "update",
      source: e.source,
      fields: e.values,
      datahash: r,
      srcid: n
    });
    return (await ce.post(
      t.baseURL + t.dbopsUpdate,
      { refid: s, fields: e.values, datahash: r },
      { headers: gn(t) }
    )).data;
  }
};
async function Vn(t, e, n, r = void 0, s = void 0, i = {}) {
  try {
    let o = n;
    return o || (o = (await ce({
      method: "POST",
      url: t.baseURL + t.registerQuery,
      data: { query: e ?? {}, srcid: s },
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    })).data.queryid), await ce({
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
async function Go(t, e) {
  let n = e.previewPath ?? "/api/files/preview";
  const r = await ce.get(
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
async function Yo(t, e) {
  if (!t?.uploadURL)
    throw new Error("Upload URL missing");
  const n = t.baseURL + t.uploadURL;
  return Promise.all(
    Array.from(e).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await ce.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${t.accessToken}`
        }
      })).data;
    })
  );
}
async function Xo(t, e) {
  let n = t?.removeFileURL ?? "/api/files/delete";
  return (await ce.post(
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
  module_refid: i = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l
}) {
  const [a, c] = Fe(!1), [u, d] = Fe(!1), [f, h] = Fe(
    Ut(t, o ?? [])
  ), [m, g] = Fe(""), [y, x] = Fe(0), v = er(null), k = er(null), [C, w] = Fe(!1), I = er(m), B = t.disabled === !0;
  Pe(() => {
    I.current = m;
  }, [m]), Pe(() => {
    if (t.type !== "select" || t.multiple || t["no-option"] !== "false" || e.values[D] || f.length === 0) return;
    const j = f[0]?.value;
    j != null && e.setFieldValue(D, j, !1);
  }, [f]), Pe(() => {
    o && h(Ut(t, o));
  }, [o]), Pe(() => {
    if (!C) return;
    const S = (j) => {
      const E = j.target;
      k.current?.contains(E) || v.current?.contains(E) || (w(!1), g(""));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, [C]);
  const D = t.name;
  Pe(() => {
    let S = !0;
    return (async () => {
      let E = t.valueKey ?? "value", K = t.labelKey ?? "title";
      const Y = t?.source ?? {};
      if (t.type === "dataMethod") {
        const R = t.method, L = R ? n[R] : void 0;
        if (L)
          try {
            const H = await L(), Z = Array.isArray(H.data?.results?.options) ? H.data?.results?.options : Array.isArray(H?.data?.data) ? H.data.data : Array.isArray(H.data?.results) ? H.data?.results : Array.isArray(H?.data) ? H.data : H, se = Array.isArray(Z) ? Z.map(Vt) : [], ge = fn(E, K, se, t.groupKey);
            S && h(Ut(t, ge));
            return;
          } catch (H) {
            console.error("Method execution failed:", H), S && h([]);
            return;
          }
        else {
          S && h([]);
          return;
        }
      }
      if (Y.type === "api" && Y.endpoint)
        try {
          const R = {
            method: Y.method || "GET",
            url: r?.baseURL + Y.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...Y.method === "GET" ? { params: { refid: Y.refid } } : { data: { refid: Y.refid } }
          }, L = await ce(R), H = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L, Z = Array.isArray(H) ? H.map(Vt) : [], se = fn(E, K, Z, t.groupKey);
          S && h(Ut(t, se));
          return;
        } catch (R) {
          console.error("API execution failed:", R), S && h([]);
          return;
        }
      if (t.table || t.type === "dataSelector" || t.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let R;
          if (t.type === "dataSelector")
            R = {
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
            R = {
              table: t.table,
              cols: t.columns,
              where: t.where ? s ? ut(t.where, { refid: s }) : t.where : void 0
            };
          }
          const L = await Vn(r, R, t?.queryid, void 0, i), H = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, Z = Array.isArray(H) ? H.map(Vt) : [], se = fn(E, K, Z, t.groupKey);
          S && h(Ut(t, se));
        } catch (R) {
          console.error("API fetch failed:", R);
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
  const F = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${B ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, A = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, z = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, U = tr(
    () => Dc(f),
    [f]
  ), ee = tr(() => {
    if (!t.type || !["suggest", "autosuggest", "autocomplete"].includes(t.type) || !m.trim()) return null;
    const S = m.trim().toLowerCase();
    return U.find(([, j]) => j.trim().toLowerCase() === S);
  }, [t.type, m, U]), G = U.length, X = !!(t.search && (t.queryid || t.table)), fe = tr(() => X || !m ? U : U.filter(
    ([, S]) => S.toLowerCase().includes(m.toLowerCase())
  ), [X, m, U]), st = (S, j) => {
    if (C)
      if (S.key === "ArrowDown")
        S.preventDefault(), x(
          (E) => E + 1 < fe.length ? E + 1 : 0
        );
      else if (S.key === "ArrowUp")
        S.preventDefault(), x(
          (E) => E - 1 >= 0 ? E - 1 : fe.length - 1
        );
      else if (S.key === "Enter") {
        S.preventDefault();
        const [E] = fe[y] || [];
        if (E) {
          let K = j ? E : [...e.values[t.name], E];
          e.setFieldValue(t.name, K), kt(K, t, i);
        }
        w(!1);
      } else S.key === "Escape" && (g(""), w(!1));
  };
  Pe(() => {
    v.current?.querySelector(
      `[data-index="${y}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [y]), Pe(() => {
    y >= fe.length && x(0);
  }, [fe, y]), Pe(() => {
    const S = t.autocomplete, j = t.ajaxchain;
    if (!S && !j) return;
    const E = e.values[t.name];
    if (!E) return;
    const K = Array.isArray(j) ? j : j ? [j] : [];
    (async () => {
      try {
        if (Pc(S)) {
          const R = S.src;
          if (!R || !r) return;
          let L;
          if ("type" in R && R.type === "api") {
            let Z = t.name;
            typeof t.parameter == "string" && t.parameter && (Z = t.parameter);
            const se = { [Z]: E, refid: E };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [ze, Le] of Object.entries(t.parameter))
                se[ze] = ze === Z ? E : e.values?.[Le];
            const ge = {
              method: R.method || "GET",
              url: r?.baseURL + R.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...R.method === "GET" ? { params: se } : { data: se }
            }, { data: oe } = await ce(ge);
            L = Array.isArray(oe?.data?.results?.options) ? oe?.data?.results?.options[0] : Array.isArray(oe?.data?.data) ? oe.data.data[0] : Array.isArray(oe?.data?.results) ? oe.data.results[0] : Array.isArray(oe?.data) ? oe.data[0] : oe?.data;
          } else {
            let Z;
            if (!R.queryid) {
              if (!R.table || !R.columns)
                throw new Error("SQL query requires field.table");
              const ge = ut(R?.where ?? {}, {
                refid: E
              });
              Z = {
                ...R,
                table: R.table,
                cols: R.columns,
                where: ge
              };
            }
            const { data: se } = await Vn(r, Z, R?.queryid, E, i);
            L = Array.isArray(se?.data?.data) ? se.data.data[0] : Array.isArray(se?.data) ? se.data[0] : se?.data;
          }
          let H = Vt(L);
          H && S.target.split(",").map((Z) => Z.trim()).forEach((Z) => {
            H[Z] !== void 0 && e.setFieldValue(Z, H[Z]);
          });
        }
        for (const R of K) {
          const L = R.src;
          if (!R || typeof R != "object" || !L || typeof L != "object" || !r) continue;
          let H;
          if ("type" in L && L.type === "api") {
            let Le = t.name;
            typeof t.parameter == "string" && t.parameter && (Le = t.parameter);
            let it = { [Le]: E, refid: E };
            if (typeof t.parameter == "object" && t.parameter !== null && Object.keys(t.parameter).length > 0)
              for (const [St, Ln] of Object.entries(t.parameter))
                it[St] = St === Le ? E : e.values?.[Ln];
            const Ye = {
              method: L.method || "GET",
              url: r?.baseURL + L.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...L.method === "GET" ? { params: it } : { data: it }
            }, { data: Ft } = await ce(Ye);
            H = Ft;
          } else {
            let Le;
            if (!L.queryid) {
              if (!L.table || !L.columns)
                throw new Error("SQL query requires field.table");
              const Ye = ut(L?.where ?? {}, {
                refid: E
              });
              Le = {
                ...L,
                table: L.table,
                cols: L.columns,
                where: Ye
              };
            }
            const { data: it } = await Vn(r, Le, L?.queryid, E, i);
            H = it;
          }
          let Z = t.valueKey ?? "value", se = t.labelKey ?? "title";
          const ge = Array.isArray(H?.results?.options) ? H?.results?.options : Array.isArray(H.data) ? H.data : Array.isArray(H.results) ? H.results : H, oe = Array.isArray(ge) ? ge.map(Vt) : [], ze = fn(
            Z,
            se,
            oe,
            t.groupKey
          );
          e.setFieldValue(R.target, e.initialValues[R.target]), l?.(R.target, ze);
        }
      } catch (R) {
        console.error("Autocomplete / AjaxChain fetch failed", R);
      }
    })();
  }, [e.values[t.name]]), Pe(() => {
    if (!X || !m.trim() || !r) return;
    const S = $c(t.columns ?? ""), j = new AbortController(), E = setTimeout(async () => {
      try {
        let K;
        if (!t.queryid) {
          if (!t.table || !t.cols)
            throw new Error("SQL query requires field.table");
          const oe = s ? ut(t.where ?? {}, {
            refid: s
          }) : t.where;
          K = {
            ...t,
            table: t.table,
            cols: t.columns || t.cols,
            where: oe
          };
        }
        let Y = {};
        Array.isArray(S) && S.forEach((oe) => {
          Y[oe] = [m, "LIKE"];
        });
        let R = t.valueKey ?? "value", L = t.labelKey ?? "title";
        const { data: H } = await Vn(r, K, t?.queryid, void 0, i, Y), Z = Array.isArray(H?.data?.data) ? H.data.data : Array.isArray(H?.data) ? H.data : H, se = Array.isArray(Z) ? Z.map(Vt) : [], ge = fn(
          R,
          L,
          se,
          t.groupKey
        );
        h(Ut(t, ge));
      } catch (K) {
        if (ce.isCancel(K)) return;
        console.error("Search fetch failed", K);
      }
    }, 500);
    return () => {
      clearTimeout(E), j.abort();
    };
  }, [X, m, s]);
  const He = async (S) => {
    if (S.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const j = await Yo(r, S), E = qo({
        uploads: j,
        currentValue: e.values[D],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        D,
        E
      ), kt(E, t, i);
    } catch (j) {
      console.error("File upload failed", j), e.setFieldError(D, "File upload failed");
    }
  }, We = async (S) => {
    const j = Array.isArray(e.values[D]) ? e.values[D] : [], E = S.split("&")[0];
    if (!E) return;
    const K = j.filter((Y) => Y.split("&")[0] !== E);
    e.setFieldValue(D, K);
    try {
      await Xo(r, E), kt(K, t, i);
    } catch (Y) {
      console.log(Y), e.setFieldValue(D, j), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, T = async (S, j, E) => {
    const K = j[S];
    if (!K) return;
    const Y = n?.[K];
    if (typeof Y != "function") {
      console.error(`Method "${String(K)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Y(E));
    } catch (R) {
      console.error(`Method "${String(K)}" failed`, R);
    }
  };
  return {
    setHighlightedIndex: x,
    executeFieldMethod: T,
    handleFileUpload: He,
    handleKeyDown: st,
    setSearch: g,
    setOpen: w,
    setIsFocused: c,
    handleInputChange: (S) => {
      if (B) return;
      const j = S.target.value;
      g(j), x(0), j.trim() ? w(!0) : (w(!1), e.setFieldValue(D, ""));
    },
    handleSelect: (S) => {
      e.setFieldValue(D, S), kt(S, t, i), g(""), w(!1), T("onChange", t, `${D}-${S}`);
    },
    handlePersist: kt,
    setLoading: d,
    removeFile: We,
    optionCount: G,
    baseInputClasses: F,
    focusClasses: A,
    labelClasses: z,
    search: m,
    highlightedIndex: y,
    options: f,
    isDisabled: B,
    key: D,
    filteredOptions: fe,
    open: C,
    listRef: v,
    isFocused: a,
    exactMatch: ee,
    triggerRef: k,
    loading: u
  };
}
function Ps({
  anchorRef: t,
  open: e,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [i, o] = Fe({});
  return Ci(() => {
    if (!e || !t.current) return;
    const l = t.current, a = () => {
      const c = l.getBoundingClientRect();
      o({
        position: "fixed",
        top: c.bottom + r,
        left: c.left,
        width: c.width,
        maxHeight: s,
        zIndex: 9999
      });
    };
    return a(), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
      window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
    };
  }, [e, t, r, s]), Ci(() => {
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
  }, [e, t, r]), e ? Za(
    /* @__PURE__ */ p.jsx("div", { style: i, children: n }),
    document.body
  ) : null;
}
function $i({
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
  const x = t.name;
  return console.log("options", h), /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsxs("label", { className: r, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${e ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: m,
        tabIndex: 0,
        onClick: () => {
          e || y(!0);
        },
        onKeyDown: (v) => {
          e || n(v, !0);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: c.values[x] ? ar(h, c.values[x]) ?? "Select option" : `Select ${t.label}` }),
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
    /* @__PURE__ */ p.jsx(Ps, { anchorRef: m, open: g, children: /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: s,
        className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2",
        children: [
          t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (v) => {
                a(v.target.value);
              },
              onKeyDown: (v) => n(v, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          o.length > 0 && /* @__PURE__ */ p.jsx(
            "div",
            {
              onClick: (v) => {
                v.preventDefault(), v.stopPropagation(), c.setFieldValue(x, ""), y(!1), d("", t, f), a("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          o.length > 0 ? o.map(([v, k], C) => /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `${x}-${v}`,
              "data-index": C,
              onClick: (w) => {
                w.preventDefault(), w.stopPropagation(), c.setFieldValue(x, v), d(v, t, f), y(!1), a(""), u("onChange", t, `${x}-${v}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[x] === v ? "bg-indigo-50 text-indigo-600 font-medium" : l === C ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: k
            },
            v
          )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[x] && c.errors[x] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[x]) })
  ] });
}
const Gc = ({ fileUrl: t, category: e }) => t ? e === "image" ? /* @__PURE__ */ p.jsx("img", { src: t, className: "max-h-[80vh] mx-auto" }) : e === "pdf" || e === "text" ? /* @__PURE__ */ p.jsx("iframe", { src: t, className: "w-full h-[80vh]" }) : e === "video" ? /* @__PURE__ */ p.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ p.jsx("source", { src: t }) }) : /* @__PURE__ */ p.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ p.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ p.jsx("a", { href: t, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null;
function Yc(t) {
  const e = Pi[t] ?? Pi.other;
  return /* @__PURE__ */ p.jsx("i", { className: `${e} text-2xl text-gray-600` });
}
const Xc = ({ filePath: t, sqlOpsUrls: e }) => {
  const n = t.replace(/^[^&]*&/, ""), [r, s] = Fe(null), [i, o] = Fe(!1), l = Bc(n), a = Hc(l);
  Pe(() => {
    if (!e || a !== "image" && !i) return;
    let u = !0, d = null;
    return Go(n, e).then((f) => {
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
          Yc(a),
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
      r ? /* @__PURE__ */ p.jsx(Gc, { fileUrl: r, category: a }) : /* @__PURE__ */ p.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Fi({
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
  setOpen: x
}) {
  const v = t.name, k = m.map((w) => w.value), C = k.every((w) => r.includes(w));
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ p.jsxs("label", { className: s, children: [
      t.label,
      t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${e ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          e || x(!0);
        },
        onKeyDown: (w) => {
          e || n(w, !1);
        },
        onBlur: () => {
          t.multiple || setTimeout(() => {
            x(!1), c("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((w) => ar(m, w) ?? w).join(", ") : `Select ${t.label}` }),
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
    /* @__PURE__ */ p.jsx(Ps, { anchorRef: g, open: y && !e, children: /* @__PURE__ */ p.jsxs("div", { ref: i, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      t.search && /* @__PURE__ */ p.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (w) => {
            e || c(w.target.value);
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
                checked: C,
                onChange: (w) => {
                  const I = w.target.checked ? k : [];
                  u.setFieldValue(v, I), f(I, t, h), d("onChange", t, v);
                },
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([w, I], B) => /* @__PURE__ */ p.jsxs(
        "label",
        {
          htmlFor: `${v}-${w}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(w) ? "bg-indigo-50 text-indigo-600 font-medium" : a === B ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: `${v}-${w}`,
                type: "checkbox",
                checked: r?.includes(w),
                onChange: (D) => {
                  const F = D.target.checked ? Array.from(/* @__PURE__ */ new Set([...r, w])) : r?.filter((A) => A !== w);
                  u.setFieldValue(v, F), f(F, t, h), d("onChange", t, `${v}-${w}`);
                },
                onBlur: u.handleBlur,
                disabled: e,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            I
          ]
        },
        w
      )) : /* @__PURE__ */ p.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[v] && u.errors[v] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[v]) })
  ] });
}
function Qc({ filePath: t, field_name: e, sqlOpsUrls: n }) {
  const r = t.replace(/^[^&]*&/, ""), [s, i] = Fe(null);
  return Pe(() => {
    if (!n) return;
    let o = !0, l = null;
    return Go(r, n).then((a) => {
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
function Qo({
  formik: t,
  field: e,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = e?.name;
  const i = er(null), o = e.max !== void 0 ? Number(e.max) : 1 / 0, l = Array.isArray(t.values[s]) ? t.values[s] : t.values[s] ? [t.values[s]] : [], a = async (f) => {
    const h = Jo({
      e: f,
      existingFiles: l,
      maxFiles: o,
      maxFileSize: e.file_size
    });
    if (h)
      try {
        const m = await Yo(n, h), g = qo({
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
      await Xo(n, m), kt(g, e, r);
    } catch {
      t.setFieldValue(s, h), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, u = Wc(e), d = e.multiple === !0;
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
              Qc,
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
              children: /* @__PURE__ */ p.jsx("i", { className: `fa-solid ${Vc(e)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    t.touched[s] && t.errors[s] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[s]) })
  ] });
}
function be(t) {
  this.content = t;
}
be.prototype = {
  constructor: be,
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
    return s == -1 ? i.push(n || t, e) : (i[s + 1] = e, n && (i[s] = n)), new be(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new be(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new be([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new be(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), i = r.find(t);
    return s.splice(i == -1 ? s.length : i, 0, e, n), new be(s);
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
    return t = be.from(t), t.size ? new be(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = be.from(t), t.size ? new be(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = be.from(t);
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
be.from = function(t) {
  if (t instanceof be) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new be(e);
};
function Zo(t, e, n) {
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
      let o = Zo(s.content, i.content, n + 1);
      if (o != null)
        return o;
    }
    n += s.nodeSize;
  }
}
function el(t, e, n, r) {
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
      let c = el(o.content, l.content, n - 1, r - 1);
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
      for (let i = 0, o = 0; o < n; i++) {
        let l = this.content[i], a = o + l.nodeSize;
        a > e && ((o < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, n - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, n - o - 1))), r.push(l), s += l.nodeSize), o = a;
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
    let s = this.content.slice(), i = this.size + n.nodeSize - r.nodeSize;
    return s[e] = n, new N(s, i);
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
    return Zo(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return el(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Un(0, e);
    if (e == this.size)
      return Un(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), i = r + s.nodeSize;
      if (i >= e)
        return i == e ? Un(n + 1, i) : Un(n, r);
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
      let i = e[s];
      r += i.nodeSize, s && i.isText && e[s - 1].sameMarkup(i) ? (n || (n = e.slice(0, s)), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
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
const Zr = { index: 0, offset: 0 };
function Un(t, e) {
  return Zr.index = t, Zr.offset = e, Zr;
}
function cr(t, e) {
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
      if (!cr(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !cr(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let re = class xs {
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
    return this == e || this.type == e.type && cr(this.attrs, e.attrs);
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
      return xs.none;
    if (e instanceof xs)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
re.none = [];
class ur extends Error {
}
class O {
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
    let r = nl(this.content, e + this.openStart, n);
    return r && new O(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new O(tl(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return O.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new O(N.fromJSON(e, n.content), r, s);
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
    return new O(e, r, s);
  }
}
O.empty = new O(N.empty, 0, 0);
function tl(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), i = t.maybeChild(r), { index: o, offset: l } = t.findIndex(n);
  if (s == e || i.isText) {
    if (l != n && !t.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, i.copy(tl(i.content, e - s - 1, n - s - 1)));
}
function nl(t, e, n, r) {
  let { index: s, offset: i } = t.findIndex(e), o = t.maybeChild(s);
  if (i == e || o.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = nl(o.content, e - i - 1, n, o);
  return l && t.replaceChild(s, o.copy(l));
}
function Zc(t, e, n) {
  if (n.openStart > t.depth)
    throw new ur("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new ur("Inconsistent open depths");
  return rl(t, e, n, 0);
}
function rl(t, e, n, r) {
  let s = t.index(r), i = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let o = rl(t, e, n, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let o = t.parent, l = o.content;
      return Tt(o, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = eu(n, t);
      return Tt(i, il(t, o, l, e, r));
    }
  else return Tt(i, dr(t, e, r));
}
function sl(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new ur("Cannot join " + e.type.name + " onto " + t.type.name);
}
function ws(t, e, n) {
  let r = t.node(n);
  return sl(r, e.node(n)), r;
}
function Nt(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function yn(t, e, n, r) {
  let s = (e || t).node(n), i = 0, o = e ? e.index(n) : s.childCount;
  t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (Nt(t.nodeAfter, r), i++));
  for (let l = i; l < o; l++)
    Nt(s.child(l), r);
  e && e.depth == n && e.textOffset && Nt(e.nodeBefore, r);
}
function Tt(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function il(t, e, n, r, s) {
  let i = t.depth > s && ws(t, e, s + 1), o = r.depth > s && ws(n, r, s + 1), l = [];
  return yn(null, t, s, l), i && o && e.index(s) == n.index(s) ? (sl(i, o), Nt(Tt(i, il(t, e, n, r, s + 1)), l)) : (i && Nt(Tt(i, dr(t, e, s + 1)), l), yn(e, n, s, l), o && Nt(Tt(o, dr(n, r, s + 1)), l)), yn(r, null, s, l), new N(l);
}
function dr(t, e, n) {
  let r = [];
  if (yn(null, t, n, r), t.depth > n) {
    let s = ws(t, e, n + 1);
    Nt(Tt(s, dr(t, e, n + 1)), r);
  }
  return yn(e, null, n, r), new N(r);
}
function eu(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let i = n - 1; i >= 0; i--)
    s = e.node(i).copy(N.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class vn {
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
      return re.none;
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
        return new fr(this, e, r);
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
    return new vn(n, r, i);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = _i.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let o = r.elts[i];
        if (o.pos == n)
          return o;
      }
    else
      _i.set(e, r = new tu());
    let s = r.elts[r.i] = vn.resolve(e, n);
    return r.i = (r.i + 1) % nu, s;
  }
}
class tu {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const nu = 12, _i = /* @__PURE__ */ new WeakMap();
class fr {
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
const ru = /* @__PURE__ */ Object.create(null);
class et {
  /**
  @internal
  */
  constructor(e, n, r, s = re.none) {
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
    return this.type == e && cr(this.attrs, n || e.defaultAttrs || ru) && re.sameSet(this.marks, r || re.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new et(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new et(this.type, this.attrs, this.content, e);
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
      return O.empty;
    let s = this.resolve(e), i = this.resolve(n), o = r ? 0 : s.sharedDepth(n), l = s.start(o), c = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new O(c, s.depth - o, i.depth - o);
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
    return Zc(this.resolve(e), this.resolve(n), r);
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
    return vn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return vn.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ol(this.marks, e);
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
  canReplace(e, n, r = N.empty, s = 0, i = r.childCount) {
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
    let e = re.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!re.sameSet(e, this.marks))
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
    let s = N.fromJSON(e, n.content), i = e.nodeType(n.type).create(n.attrs, s, r);
    return i.type.checkAttrs(i.attrs), i;
  }
}
et.prototype.text = void 0;
class hr extends et {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ol(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new hr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new hr(this.type, this.attrs, e, this.marks);
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
function ol(t, e) {
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
    let r = new su(e, n);
    if (r.next == null)
      return Ot.empty;
    let s = ll(r);
    r.next && r.err("Unexpected trailing text");
    let i = du(uu(s));
    return fu(i, r), i;
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
        return N.from(l.map((c) => c.createAndFill()));
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
class su {
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
function ll(t) {
  let e = [];
  do
    e.push(iu(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function iu(t) {
  let e = [];
  do
    e.push(ou(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function ou(t) {
  let e = cu(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = lu(t, e);
    else
      break;
  return e;
}
function Bi(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function lu(t, e) {
  let n = Bi(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Bi(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function au(t, e) {
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
function cu(t) {
  if (t.eat("(")) {
    let e = ll(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = au(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function uu(t) {
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
function al(t, e) {
  return e - t;
}
function Hi(t, e) {
  let n = [];
  return r(e), n.sort(al);
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
function du(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Hi(t, 0));
  function n(r) {
    let s = [];
    r.forEach((o) => {
      t[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Hi(t, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let i = e[r.join(",")] = new Ot(r.indexOf(t.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(al);
      i.next.push({ type: s[o][0], next: e[l.join(",")] || n(l) });
    }
    return i;
  }
}
function fu(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], i = !s.validEnd, o = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      o.push(a.name), i && !(a.isText || a.hasRequiredAttrs()) && (i = !1), r.indexOf(c) == -1 && r.push(c);
    }
    i && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function cl(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function ul(t, e) {
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
function dl(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let i = t[s];
    i.validate && i.validate(e[s]);
  }
}
function fl(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new pu(t, r, e[r]);
  return n;
}
let Wi = class hl {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = fl(e, r.attrs), this.defaultAttrs = cl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return !e && this.defaultAttrs ? this.defaultAttrs : ul(this.attrs, e);
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
    return new et(this, this.computeAttrs(e), N.from(n), re.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = N.from(n), this.checkContent(n), new et(this, this.computeAttrs(e), n, re.setFrom(r));
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
      let o = this.contentMatch.fillBefore(n);
      if (!o)
        return null;
      n = o.append(n);
    }
    let s = this.contentMatch.matchFragment(n), i = s && s.fillBefore(N.empty, !0);
    return i ? new et(this, e, n.append(i), re.setFrom(r)) : null;
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
    dl(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : re.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((i, o) => r[i] = new hl(i, n, o));
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
function hu(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${i}`);
  };
}
class pu {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? hu(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ar {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = fl(e, s.attrs), this.excluded = null;
    let i = cl(this.attrs);
    this.instance = i ? new re(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new re(this, ul(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((i, o) => r[i] = new Ar(i, s++, n, o)), r;
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
    dl(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class mu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = be.from(e.nodes), n.marks = be.from(e.marks || {}), this.nodes = Wi.compile(this.spec.nodes, this), this.marks = Ar.compile(this.spec.marks, this);
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
      i.markSet = l == "_" ? null : l ? Vi(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s], o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : Vi(this, o.split(" "));
    }
    this.nodeFromJSON = (s) => et.fromJSON(this, s), this.markFromJSON = (s) => re.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof Wi) {
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
    return new hr(r, r.defaultAttrs, e, re.setFrom(n));
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
function Vi(t, e) {
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
function gu(t) {
  return t.tag != null;
}
function yu(t) {
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
      if (gu(s))
        this.tags.push(s);
      else if (yu(s)) {
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
    let r = new Ki(this, n, !1);
    return r.addAll(e, re.none, n.from, n.to), r.finish();
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
    let r = new Ki(this, n, !0);
    return r.addAll(e, re.none, n.from, n.to), O.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let i = this.tags[s];
      if (wu(e, i.tag) && (i.namespace === void 0 || e.namespaceURI == i.namespace) && (!i.context || n.matchesContext(i.context))) {
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
        r(o = qi(o)), o.mark || o.ignore || o.clearMark || (o.mark = s);
      });
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = qi(o)), o.node || o.ignore || o.mark || (o.node = s);
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
const pl = {
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
}, bu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, ml = { ol: !0, ul: !0 }, Sn = 1, vs = 2, bn = 4;
function Ui(t, e, n) {
  return e != null ? (e ? Sn : 0) | (e === "full" ? vs : 0) : t && t.whitespace == "pre" ? Sn | vs : n & ~bn;
}
class Kn {
  constructor(e, n, r, s, i, o) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = o, this.content = [], this.activeMarks = re.none, this.match = i || (o & bn ? null : e.contentMatch);
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
    if (!(this.options & Sn)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - s[0].length));
      }
    }
    let n = N.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(N.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !pl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ki {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, i, o = Ui(null, n.preserveWhitespace, 0) | (r ? bn : 0);
    s ? i = new Kn(s.type, s.attrs, re.none, !0, n.topMatch || s.type.contentMatch, o) : r ? i = new Kn(null, null, re.none, !0, null, o) : i = new Kn(e.schema.topNodeType, null, re.none, !0, null, o), this.nodes = [i], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, i = s.options & vs ? "full" : this.localPreserveWS || (s.options & Sn) > 0, { schema: o } = this.parser;
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
    ml.hasOwnProperty(o) && this.parser.normalizeLists && xu(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : bu.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (pl.hasOwnProperty(o))
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
      let o = re.none;
      for (let l of s.concat(e.marks))
        (i.type ? i.type.allowsMarkType(l.type) : Ji(l.type, e.type)) && (o = l.addToSet(o));
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
    let l = Ui(e, i, o.options);
    o.options & bn && o.content.length == 0 && (l |= bn);
    let a = re.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : Ji(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Kn(e, n, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= Sn);
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
function xu(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && ml.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function wu(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function qi(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Ji(t, e) {
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
class Er {
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
    r || (r = es(n).createDocumentFragment());
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
    let { dom: r, contentDOM: s } = rr(es(n), this.nodes[e.type.name](e), null, e.attrs);
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
    return s && rr(es(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return rr(e, n, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Er(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Gi(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Gi(e.marks);
  }
}
function Gi(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function es(t) {
  return t.document || window.document;
}
const Yi = /* @__PURE__ */ new WeakMap();
function vu(t) {
  let e = Yi.get(t);
  return e === void 0 && Yi.set(t, e = Su(t)), e;
}
function Su(t) {
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
function rr(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], i;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = vu(r)) && i.indexOf(e) > -1)
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
      let { dom: h, contentDOM: m } = rr(t, f, n, r);
      if (a.appendChild(h), m) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = m;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const gl = 65535, yl = Math.pow(2, 16);
function Cu(t, e) {
  return t + e * yl;
}
function Xi(t) {
  return t & gl;
}
function ku(t) {
  return (t - (t & gl)) / yl;
}
const bl = 1, xl = 2, sr = 4, wl = 8;
class Ss {
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
    return (this.delInfo & wl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (bl | sr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (xl | sr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & sr) > 0;
  }
}
class Ie {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Ie.empty)
      return Ie.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = Xi(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + ku(e);
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
        let m = e == (n < 0 ? a : d) ? null : Cu(l / 3, e - a), g = e == a ? xl : e == d ? bl : sr;
        return (n < 0 ? e != a : e != d) && (g |= wl), new Ss(h, g, m);
      }
      s += u - c;
    }
    return r ? e + s : new Ss(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = Xi(n), i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
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
    return new Ie(this.ranges, !this.inverted);
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
    return e == 0 ? Ie.empty : new Ie(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ie.empty = new Ie([]);
class pr {
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
    return new pr(this._maps, this.mirror, e, n);
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
    let e = new pr();
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
    return r ? e : new Ss(e, s, null);
  }
}
const ts = /* @__PURE__ */ Object.create(null);
class ke {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ie.empty;
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
    let r = ts[n.stepType];
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
    if (e in ts)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return ts[e] = n, n.prototype.jsonID = e, n;
  }
}
class ue {
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
    return new ue(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ue(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return ue.ok(e.replace(n, r, s));
    } catch (i) {
      if (i instanceof ur)
        return ue.fail(i.message);
      throw i;
    }
  }
}
function $s(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let i = t.child(s);
    i.content.size && (i = i.copy($s(i.content, e, i))), i.isInline && (i = e(i, n, s)), r.push(i);
  }
  return N.fromArray(r);
}
class mt extends ke {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), i = new O($s(n.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), s), n.openStart, n.openEnd);
    return ue.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new Ue(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new mt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof mt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new mt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new mt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ke.jsonID("addMark", mt);
class Ue extends ke {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new O($s(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return ue.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new mt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ue(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ue && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ue(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Ue(n.from, n.to, e.markFromJSON(n.mark));
  }
}
ke.jsonID("removeMark", Ue);
class gt extends ke {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ue.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ue.fromReplace(e, this.pos, this.pos + 1, new O(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new gt(this.pos, n.marks[s]);
        return new gt(this.pos, this.mark);
      }
    }
    return new jt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new gt(n.pos, this.mark);
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
    return new gt(n.pos, e.markFromJSON(n.mark));
  }
}
ke.jsonID("addNodeMark", gt);
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
      return ue.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ue.fromReplace(e, this.pos, this.pos + 1, new O(N.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new gt(this.pos, this.mark);
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
class pe extends ke {
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
    return this.structure && Cs(e, this.from, this.to) ? ue.fail("Structure replace would overwrite content") : ue.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ie([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new pe(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new pe(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof pe) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new pe(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new pe(e.from, this.to, n, this.structure);
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
    return new pe(n.from, n.to, O.fromJSON(e, n.slice), !!n.structure);
  }
}
ke.jsonID("replace", pe);
class me extends ke {
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
    if (this.structure && (Cs(e, this.from, this.gapFrom) || Cs(e, this.gapTo, this.to)))
      return ue.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ue.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? ue.fromReplace(e, this.from, this.to, r) : ue.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ie([
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
    return new me(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || i > r.pos ? null : new me(n.pos, r.pos, s, i, this.slice, this.insert, this.structure);
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
    return new me(n.from, n.to, n.gapFrom, n.gapTo, O.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
ke.jsonID("replaceAround", me);
function Cs(t, e, n) {
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
function Au(t, e, n, r) {
  let s = [], i = [], o, l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), m = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(m) || (o && o.to == f && o.mark.eq(d[g]) ? o.to = h : s.push(o = new Ue(f, h, d[g])));
      l && l.to == f ? l.to = h : i.push(l = new mt(f, h, r));
    }
  }), s.forEach((a) => t.step(a)), i.forEach((a) => t.step(a));
}
function Eu(t, e, n, r) {
  let s = [], i = 0;
  t.doc.nodesBetween(e, n, (o, l) => {
    if (!o.isInline)
      return;
    i++;
    let a = null;
    if (r instanceof Ar) {
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
  }), s.forEach((o) => t.step(new Ue(o.from, o.to, o.style)));
}
function Fs(t, e, n, r = n.contentMatch, s = !0) {
  let i = t.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      o.push(new pe(l, u, O.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Ue(l, u, c.marks[f]));
      if (s && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, m;
        for (; f = h.exec(c.text); )
          m || (m = new O(N.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), o.push(new pe(l + f.index, l + f.index + f[0].length, m));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(N.empty, !0);
    t.replace(l, l, new O(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    t.step(o[a]);
}
function Nu(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function en(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, i = 0; ; --r) {
    let o = t.$from.node(r), l = t.$from.index(r) + s, a = t.$to.indexAfter(r) - i;
    if (r < t.depth && o.canReplace(l, a, n))
      return r;
    if (r == 0 || o.type.spec.isolating || !Nu(o, l, a))
      break;
    l && (s = 1), a < o.childCount && (i = 1);
  }
  return null;
}
function Tu(t, e, n) {
  let { $from: r, $to: s, depth: i } = e, o = r.before(i + 1), l = s.after(i + 1), a = o, c = l, u = N.empty, d = 0;
  for (let m = i, g = !1; m > n; m--)
    g || r.index(m) > 0 ? (g = !0, u = N.from(r.node(m).copy(u)), d++) : a--;
  let f = N.empty, h = 0;
  for (let m = i, g = !1; m > n; m--)
    g || s.after(m + 1) < s.end(m) ? (g = !0, f = N.from(s.node(m).copy(f)), h++) : c++;
  t.step(new me(a, c, o, l, new O(u.append(f), d, h), u.size - d, !0));
}
function vl(t, e, n = null, r = t) {
  let s = Mu(t, e), i = s && Ru(r, e);
  return i ? s.map(Qi).concat({ type: e, attrs: n }).concat(i.map(Qi)) : null;
}
function Qi(t) {
  return { type: t, attrs: null };
}
function Mu(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, i = n.contentMatchAt(r).findWrapping(e);
  if (!i)
    return null;
  let o = i.length ? i[0] : e;
  return n.canReplaceWith(r, s, o) ? i : null;
}
function Ru(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, i = n.child(r), o = e.contentMatch.findWrapping(i.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Iu(t, e, n) {
  let r = N.empty;
  for (let o = n.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = n[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = N.from(n[o].type.create(n[o].attrs, r));
  }
  let s = e.start, i = e.end;
  t.step(new me(s, i, s, i, new O(r, 0, 0), n.length, !0));
}
function Ou(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = t.steps.length;
  t.doc.nodesBetween(e, n, (o, l) => {
    let a = typeof s == "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(r, a) && ju(t.doc, t.mapping.slice(i).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", m = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !m ? c = !1 : !h && m && (c = !0);
      }
      c === !1 && Cl(t, o, l, i), Fs(t, t.mapping.slice(i).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(i), d = u.map(l, 1), f = u.map(l + o.nodeSize, 1);
      return t.step(new me(d, f, d + 1, f - 1, new O(N.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Sl(t, o, l, i), !1;
    }
  });
}
function Sl(t, e, n, r) {
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
function Cl(t, e, n, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = t.mapping.slice(r).map(n + 1 + i);
      t.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function ju(t, e, n) {
  let r = t.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function Du(t, e, n, r, s) {
  let i = t.doc.nodeAt(e);
  if (!i)
    throw new RangeError("No node at given position");
  n || (n = i.type);
  let o = n.create(r, null, s || i.marks);
  if (i.isLeaf)
    return t.replaceWith(e, e + i.nodeSize, o);
  if (!n.validContent(i.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new me(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new O(N.from(o), 0, 0), 1, !0));
}
function dt(t, e, n = 1, r) {
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
function zu(t, e, n = 1, r) {
  let s = t.doc.resolve(e), i = N.empty, o = N.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    i = N.from(s.node(l).copy(i));
    let u = r && r[c];
    o = N.from(u ? u.type.create(u.attrs, o) : s.node(l).copy(o));
  }
  t.step(new pe(e, e, new O(i.append(o), n, n), !0));
}
function Lt(t, e) {
  let n = t.resolve(e), r = n.index();
  return kl(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Lu(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let i = e.child(s), o = i.type == r ? t.type.schema.nodes.text : i.type;
    if (n = n.matchType(o), !n || !t.type.allowsMarks(i.marks))
      return !1;
  }
  return n.validEnd;
}
function kl(t, e) {
  return !!(t && e && !t.isLeaf && Lu(t, e));
}
function Nr(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let i, o, l = r.index(s);
    if (s == r.depth ? (i = r.nodeBefore, o = r.nodeAfter) : n > 0 ? (i = r.node(s + 1), l++, o = r.node(s).maybeChild(l)) : (i = r.node(s).maybeChild(l - 1), o = r.node(s + 1)), i && !i.isTextblock && kl(i, o) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function Pu(t, e, n) {
  let r = null, { linebreakReplacement: s } = t.doc.type.schema, i = t.doc.resolve(e - n), o = i.node().type;
  if (s && o.inlineContent) {
    let u = o.whitespace == "pre", d = !!o.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    Cl(t, u.node(), u.before(), l);
  }
  o.inlineContent && Fs(t, e + n - 1, o, i.node().contentMatchAt(i.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new pe(c, a.map(e + n, -1), O.empty, !0)), r === !0) {
    let u = t.doc.resolve(c);
    Sl(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function $u(t, e, n) {
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
function Fu(t, e, n) {
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
function Tr(t, e, n = e, r = O.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), i = t.resolve(n);
  return Al(s, i, r) ? new pe(e, n, r) : new _u(s, i, r).fit();
}
function Al(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class _u {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = N.empty;
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s))
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
    let i = this.placed, o = r.depth, l = s.depth;
    for (; o && l && i.childCount == 1; )
      i = i.firstChild.content, o--, l--;
    let a = new O(i, o, l);
    return e > -1 ? new me(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new pe(r.pos, s.pos, a) : null;
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
        r ? (i = ns(this.unplaced.content, r - 1).firstChild, s = i.content) : s = this.unplaced.content;
        let o = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (n == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(N.from(o), !1)) : i && a.compatibleContent(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: d };
          if (n == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: u };
          if (i && c.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ns(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new O(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ns(e, n);
    if (s.childCount <= 1 && n > 0) {
      let i = e.size - n <= n + s.size;
      this.unplaced = new O(pn(e, n - 1, 1), n - 1, i ? n - 1 : r);
    } else
      this.unplaced = new O(pn(e, n, 1), n, r);
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
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(El(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = mn(this.placed, n, N.from(u)), this.frontier[n].match = d, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let x = y.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), y = x.content;
    }
    this.unplaced = m ? e == 0 ? O.empty : new O(pn(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new O(pn(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !rs(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], i = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), o = rs(e, n, s, r, i);
      if (o) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = rs(e, l, c, a, !0);
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
    n.fit.childCount && (this.placed = mn(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), i = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = mn(this.placed, this.depth, N.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(N.empty, !0);
    n.childCount && (this.placed = mn(this.placed, this.frontier.length, n));
  }
}
function pn(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(pn(t.firstChild.content, e - 1, n)));
}
function mn(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(mn(t.lastChild.content, e - 1, n)));
}
function ns(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function El(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, El(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(N.empty, !0)))), t.copy(r);
}
function rs(t, e, n, r, s) {
  let i = t.node(e), o = s ? t.indexAfter(e) : t.index(e);
  if (o == i.childCount && !n.compatibleContent(i.type))
    return null;
  let l = r.fillBefore(i.content, !0, o);
  return l && !Bu(n, i.content, o) ? l : null;
}
function Bu(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Hu(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Wu(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let s = t.doc.resolve(e), i = t.doc.resolve(n);
  if (Al(s, i, r))
    return t.step(new pe(e, n, r));
  let o = Tl(s, i);
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
    let h = c[f], m = Hu(h.type);
    if (m && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (m || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < o.length; g++) {
        let y = o[(g + a) % o.length], x = !0;
        y < 0 && (x = !1, y = -y);
        let v = s.node(y - 1), k = s.index(y - 1);
        if (v.canReplaceWith(k, k, m.type, m.marks))
          return t.replace(s.before(y), x ? i.after(y) : n, new O(Nl(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = o.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let h = o[f];
    h < 0 || (e = s.before(h), n = i.after(h));
  }
}
function Nl(t, e, n, r, s) {
  if (e < n) {
    let i = t.firstChild;
    t = t.replaceChild(0, i.copy(Nl(i.content, e + 1, n, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0), o = i.fillBefore(t).append(t);
    t = o.append(i.matchFragment(o).fillBefore(N.empty, !0));
  }
  return t;
}
function Vu(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = $u(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new O(N.from(r), 0, 0));
}
function Uu(t, e, n) {
  let r = t.doc.resolve(e), s = t.doc.resolve(n), i = Tl(r, s);
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
function Tl(t, e) {
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
      return ue.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in n.attrs)
      r[i] = n.attrs[i];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return ue.fromReplace(e, this.pos, this.pos + 1, new O(N.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ie.empty;
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
class Cn extends ke {
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
    return ue.ok(r);
  }
  getMap() {
    return Ie.empty;
  }
  invert(e) {
    return new Cn(this.attr, e.attrs[this.attr]);
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
    return new Cn(n.attr, n.value);
  }
}
ke.jsonID("docAttr", Cn);
let Xt = class extends Error {
};
Xt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Xt.prototype = Object.create(Error.prototype);
Xt.prototype.constructor = Xt;
Xt.prototype.name = "TransformError";
class Ml {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new pr();
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
  replace(e, n = e, r = O.empty) {
    let s = Tr(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new O(N.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, O.empty);
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
    return Wu(this, e, n, r), this;
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
    return Vu(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Uu(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Tu(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return Pu(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return Iu(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, s = null) {
    return Ou(this, e, n, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, s) {
    return Du(this, e, n, r, s), this;
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
    return this.step(new Cn(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new gt(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof re)
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
    return zu(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Au(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Eu(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Fs(this, e, n, r), this;
  }
}
const ss = /* @__PURE__ */ Object.create(null);
class q {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Rl(e.min(n), e.max(n))];
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
  replace(e, n = O.empty) {
    let r = n.content.lastChild, s = null;
    for (let l = 0; l < n.openEnd; l++)
      s = r, r = r.lastChild;
    let i = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(i);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? O.empty : n), l == 0 && to(e, i, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
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
      i ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), to(e, r, n.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new V(e) : qt(e.node(0), e.parent, e.pos, e.index(), n, r);
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new je(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return qt(e, e, 0, 0, 1) || new je(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return qt(e, e, e.content.size, e.childCount, -1) || new je(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = ss[n.type];
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
    if (e in ss)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return ss[e] = n, n.prototype.jsonID = e, n;
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
    return V.between(this.$anchor, this.$head).getBookmark();
  }
}
q.prototype.visible = !0;
class Rl {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Zi = !1;
function eo(t) {
  !Zi && !t.parent.inlineContent && (Zi = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class V extends q {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    eo(e), eo(n), super(e, n);
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
      return q.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new V(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = O.empty) {
    if (super.replace(e, n), n == O.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof V && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Mr(this.anchor, this.head);
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
    return new V(e.resolve(n.anchor), e.resolve(n.head));
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
      let i = q.findFrom(n, r, !0) || q.findFrom(n, -r, !0);
      if (i)
        n = i.$head;
      else
        return q.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (q.findFrom(e, -r, !0) || q.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new V(e, n);
  }
}
q.jsonID("text", V);
class Mr {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Mr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return V.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class W extends q {
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
    return r ? q.near(i) : new W(i);
  }
  content() {
    return new O(N.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof W && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new _s(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new W(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new W(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
W.prototype.visible = !1;
q.jsonID("node", W);
class _s {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Mr(r, r) : new _s(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && W.isSelectable(r) ? new W(n) : q.near(n);
  }
}
class je extends q {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = O.empty) {
    if (n == O.empty) {
      e.delete(0, e.doc.content.size);
      let r = q.atStart(e.doc);
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
    return new je(e);
  }
  map(e) {
    return new je(e);
  }
  eq(e) {
    return e instanceof je;
  }
  getBookmark() {
    return Ku;
  }
}
q.jsonID("all", je);
const Ku = {
  map() {
    return this;
  },
  resolve(t) {
    return new je(t);
  }
};
function qt(t, e, n, r, s, i = !1) {
  if (e.inlineContent)
    return V.create(t, n);
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && W.isSelectable(l))
        return W.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = qt(t, l, n + s, s < 0 ? l.childCount : 0, s, i);
      if (a)
        return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function to(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof pe || s instanceof me))
    return;
  let i = t.mapping.maps[r], o;
  i.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), t.setSelection(q.near(t.doc.resolve(o), n));
}
function no(t, e) {
  return !e || !t ? t : t.bind(e);
}
class qn {
  constructor(e, n, r) {
    this.name = e, this.init = no(n.init, r), this.apply = no(n.apply, r);
  }
}
new qn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new qn("selection", {
  init(t, e) {
    return t.selection || q.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new qn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new qn("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function Il(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = Il(s, e, {})), n[r] = s;
  }
  return n;
}
class nt {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Il(e.props, this, this.props), this.key = e.key ? e.key.key : Ol("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const is = /* @__PURE__ */ Object.create(null);
function Ol(t) {
  return t in is ? t + "$" + ++is[t] : (is[t] = 0, t + "$");
}
class Ke {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Ol(e);
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
function jl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Dl = (t, e, n) => {
  let r = jl(t, n);
  if (!r)
    return !1;
  let s = Hs(r);
  if (!s) {
    let o = r.blockRange(), l = o && en(o);
    return l == null ? !1 : (e && e(t.tr.lift(o, l).scrollIntoView()), !0);
  }
  let i = s.nodeBefore;
  if (Wl(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(i, "end") || W.isSelectable(i)))
    for (let o = r.depth; ; o--) {
      let l = Tr(t.doc, r.before(o), r.after(o), O.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(Qt(i, "end") ? q.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : W.create(a.doc, s.pos - i.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - i.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, qu = (t, e, n) => {
  let r = jl(t, n);
  if (!r)
    return !1;
  let s = Hs(r);
  return s ? zl(t, s, e) : !1;
}, Ju = (t, e, n) => {
  let r = Pl(t, n);
  if (!r)
    return !1;
  let s = Ws(r);
  return s ? zl(t, s, e) : !1;
};
function zl(t, e, n) {
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
  let c = Tr(t.doc, i, a, O.empty);
  if (!c || c.from != i || c instanceof pe && c.slice.size >= a - i)
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(V.create(u.doc, i)), n(u.scrollIntoView());
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
const Ll = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    i = Hs(r);
  }
  let o = i && i.nodeBefore;
  return !o || !W.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(W.create(t.doc, i.pos - o.nodeSize)).scrollIntoView()), !0);
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
function Pl(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const $l = (t, e, n) => {
  let r = Pl(t, n);
  if (!r)
    return !1;
  let s = Ws(r);
  if (!s)
    return !1;
  let i = s.nodeAfter;
  if (Wl(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Qt(i, "start") || W.isSelectable(i))) {
    let o = Tr(t.doc, r.before(), r.after(), O.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = t.tr.step(o);
        l.setSelection(Qt(i, "start") ? q.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : W.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, Fl = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    i = Ws(r);
  }
  let o = i && i.nodeAfter;
  return !o || !W.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(W.create(t.doc, i.pos)).scrollIntoView()), !0);
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
const Gu = (t, e) => {
  let n = t.selection, r = n instanceof W, s;
  if (r) {
    if (n.node.isTextblock || !Lt(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Nr(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let i = t.tr.join(s);
    r && i.setSelection(W.create(i.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(i.scrollIntoView());
  }
  return !0;
}, Yu = (t, e) => {
  let n = t.selection, r;
  if (n instanceof W) {
    if (n.node.isTextblock || !Lt(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Nr(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Xu = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), i = s && en(s);
  return i == null ? !1 : (e && e(t.tr.lift(s, i).scrollIntoView()), !0);
}, _l = (t, e) => {
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
const Qu = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), i = n.indexAfter(-1), o = Vs(s.contentMatchAt(i));
  if (!o || !s.canReplaceWith(i, i, o))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(q.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Bl = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof je || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let i = Vs(s.parent.contentMatchAt(s.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = t.tr.insert(o, i.createAndFill());
    l.setSelection(V.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Hl = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let i = n.before();
    if (dt(t.doc, i))
      return e && e(t.tr.split(i).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && en(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function Zu(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof W && e.selection.node.isBlock)
      return !r.parentOffset || !dt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let i = [], o, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Vs(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), i.unshift(a && l ? { type: l } : null), o = h;
        break;
      } else {
        if (h == 1)
          return !1;
        i.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof V || e.selection instanceof je) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = dt(u.doc, d, i.length, i);
    if (f || (i[0] = l ? { type: l } : null, f = dt(u.doc, d, i.length, i)), !f)
      return !1;
    if (u.split(d, i.length, i), !a && c && r.node(o).type != l) {
      let h = u.mapping.map(r.before(o)), m = u.doc.resolve(h);
      l && r.node(o - 1).canReplaceWith(m.index(), m.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const ed = Zu(), td = (t, e) => {
  let { $from: n, to: r } = t.selection, s, i = n.sharedDepth(r);
  return i == 0 ? !1 : (s = n.before(i), e && e(t.tr.setSelection(W.create(t.doc, s))), !0);
};
function nd(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, i = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(i, i + 1) || !(s.isTextblock || Lt(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Wl(t, e, n, r) {
  let s = e.nodeBefore, i = e.nodeAfter, o, l, a = s.type.spec.isolating || i.type.spec.isolating;
  if (!a && nd(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = s.contentMatchAt(s.childCount)).findWrapping(i.type)) && l.matchType(o[0] || i.type).validEnd) {
    if (n) {
      let h = e.pos + i.nodeSize, m = N.empty;
      for (let x = o.length - 1; x >= 0; x--)
        m = N.from(o[x].create(null, m));
      m = N.from(s.copy(m));
      let g = t.tr.step(new me(e.pos - 1, h, e.pos, h, new O(m, 1, 0), o.length, !0)), y = g.doc.resolve(h + 2 * o.length);
      y.nodeAfter && y.nodeAfter.type == s.type && Lt(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = i.type.spec.isolating || r > 0 && a ? null : q.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && en(d);
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
        let x = N.empty;
        for (let k = m.length - 1; k >= 0; k--)
          x = N.from(m[k].copy(x));
        let v = t.tr.step(new me(e.pos - m.length, e.pos + i.nodeSize, e.pos + y, e.pos + i.nodeSize - y, new O(x, m.length, 0), 0, !0));
        n(v.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Vl(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, i = s.depth;
    for (; s.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return s.node(i).isTextblock ? (n && n(e.tr.setSelection(V.create(e.doc, t < 0 ? s.start(i) : s.end(i)))), !0) : !1;
  };
}
const rd = Vl(-1), sd = Vl(1);
function id(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: i } = n.selection, o = s.blockRange(i), l = o && vl(o, t, e);
    return l ? (r && r(n.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function ro(t, e = null) {
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
function Us(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Us(Bs, Dl, Ll);
Us(Bs, $l, Fl);
Us(_l, Bl, Hl, ed);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function od(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: i } = n.selection, o = s.blockRange(i);
    if (!o)
      return !1;
    let l = r ? n.tr : null;
    return ld(l, o, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function ld(t, e, n, r = null) {
  let s = !1, i = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    i = new fr(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new fr(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = vl(i, n, r, e);
  return l ? (t && ad(t, e, l, s, n), !0) : !1;
}
function ad(t, e, n, r, s) {
  let i = N.empty;
  for (let u = n.length - 1; u >= 0; u--)
    i = N.from(n[u].type.create(n[u].attrs, i));
  t.step(new me(e.start - (r ? 2 : 0), e.end, e.start, e.end, new O(i, 0, 0), n.length, !0));
  let o = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (o = u + 1);
  let l = n.length - o, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && dt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return t;
}
function cd(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == t);
    return i ? n ? r.node(i.depth - 1).type == t ? ud(e, n, t, i) : dd(e, n, i) : !0 : !1;
  };
}
function ud(t, e, n, r) {
  let s = t.tr, i = r.end, o = r.$to.end(r.depth);
  i < o && (s.step(new me(i - 1, o, i, o, new O(N.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new fr(s.doc.resolve(r.$from.pos), s.doc.resolve(o), r.depth));
  const l = en(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(i, -1) - 1);
  return Lt(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function dd(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= s.child(m).nodeSize, r.delete(h - 1, h + 1);
  let i = r.doc.resolve(n.start), o = i.nodeAfter;
  if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == s.childCount, c = i.node(-1), u = i.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? N.empty : N.from(s))))
    return !1;
  let d = i.pos, f = d + o.nodeSize;
  return r.step(new me(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new O((l ? N.empty : N.from(s.copy(N.empty))).append(a ? N.empty : N.from(s.copy(N.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function fd(t) {
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
      let c = a.lastChild && a.lastChild.type == l.type, u = N.from(c ? t.create() : null), d = new O(N.from(t.create(null, N.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = i.start, h = i.end;
      n(e.tr.step(new me(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Pt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Ul = function(t, e, n, r) {
  return n && (so(t, e, n, r, -1) || so(t, e, n, r, 1));
}, hd = /^(img|br|input|textarea|hr)$/i;
function so(t, e, n, r, s) {
  for (var i; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (s < 0 ? 0 : mr(t))) {
      let o = t.parentNode;
      if (!o || o.nodeType != 1 || Ks(t) || hd.test(t.nodeName) || t.contentEditable == "false")
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
        t = o, e = s < 0 ? mr(t) : 0;
    } else
      return !1;
  }
}
function mr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function pd(t, e, n) {
  for (let r = e == 0, s = e == mr(t); r || s; ) {
    if (t == n)
      return !0;
    let i = Pt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && i == 0, s = s && i == mr(t);
  }
}
function Ks(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Kl = function(t) {
  return t.focusNode && Ul(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function ql(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
const tt = typeof navigator < "u" ? navigator : null, io = typeof document < "u" ? document : null, wt = tt && tt.userAgent || "", ks = /Edge\/(\d+)/.exec(wt), Jl = /MSIE \d/.exec(wt), As = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(wt), On = !!(Jl || As || ks), Gl = Jl ? document.documentMode : As ? +As[1] : ks ? +ks[1] : 0, Rr = !On && /gecko\/(\d+)/i.test(wt);
Rr && +(/Firefox\/(\d+)/.exec(wt) || [0, 0])[1];
const Es = !On && /Chrome\/(\d+)/.exec(wt), ft = !!Es, Yl = Es ? +Es[1] : 0, $t = !On && !!tt && /Apple Computer/.test(tt.vendor), qs = $t && (/Mobile\/\w+/.test(wt) || !!tt && tt.maxTouchPoints > 2), $e = qs || (tt ? /Mac/.test(tt.platform) : !1), Xl = tt ? /Win/.test(tt.platform) : !1, jn = /Android \d/.test(wt), Js = !!io && "webkitFontSmoothing" in io.documentElement.style, md = Js ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function gd(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let s = t.docView.nearestDesc(n.focusNode), i = s && s.size == 0, o = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Kl(n)) {
    for (a = o; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && W.isSelectable(d) && s.parent && !(d.isInline && pd(n.focusNode, n.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new W(o == f ? l : r.resolve(f));
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
    c = Zl(t, u, l, d);
  }
  return c;
}
function Ql(t) {
  return t.editable ? t.hasFocus() : wd(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Gs(t, e = !1) {
  let n = t.state.selection;
  if (xd(t, n), !!Ql(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && ft) {
      let r = t.domSelectionRange(), s = t.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && Ul(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      bd(t);
    else {
      let { anchor: r, head: s } = n, i, o;
      oo && !(n instanceof V) && (n.$from.parent.inlineContent || (i = lo(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = lo(t, n.to))), t.docView.setSelection(r, s, t, e), oo && (i && ao(i), o && ao(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && yd(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const oo = $t || ft && Yl < 63;
function lo(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), s = r < n.childNodes.length ? n.childNodes[r] : null, i = r ? n.childNodes[r - 1] : null;
  if ($t && s && s.contentEditable == "false")
    return ls(s);
  if ((!s || s.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (s)
      return ls(s);
    if (i)
      return ls(i);
  }
}
function ls(t) {
  return t.contentEditable = "true", $t && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function ao(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function yd(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, s = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != s) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Ql(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function bd(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Pt(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && On && Gl <= 11 && (n.disabled = !0, n.disabled = !1);
}
function xd(t, e) {
  if (e instanceof W) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (co(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    co(t);
}
function co(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Zl(t, e, n, r) {
  return t.someProp("createSelectionBetween", (s) => s(t, e, n)) || V.between(e, n, r);
}
function wd(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Ns(t, e) {
  let { $anchor: n, $head: r } = t.selection, s = e > 0 ? n.max(r) : n.min(r), i = s.parent.inlineContent ? s.depth ? t.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return i && q.findFrom(i, e);
}
function ht(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function uo(t, e, n) {
  let r = t.state.selection;
  if (r instanceof V)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let o = t.state.doc.resolve(s.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return ht(t, new V(r.$anchor, o));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Ns(t.state, e);
        return s && s instanceof W ? ht(t, s) : !1;
      } else if (!($e && n.indexOf("m") > -1)) {
        let s = r.$head, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, o;
        if (!i || i.isText)
          return !1;
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        return i.isAtom || (o = t.docView.descAt(l)) && !o.contentDOM ? W.isSelectable(i) ? ht(t, new W(e < 0 ? t.state.doc.resolve(s.pos - i.nodeSize) : s)) : Js ? ht(t, new V(t.state.doc.resolve(e < 0 ? l : l + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof W && r.node.isInline)
      return ht(t, new V(e > 0 ? r.$to : r.$from));
    {
      let s = Ns(t.state, e);
      return s ? ht(t, s) : !1;
    }
  }
}
function gr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function xn(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Kt(t, e) {
  return e < 0 ? vd(t) : Sd(t);
}
function vd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s, i, o = !1;
  for (Rr && n.nodeType == 1 && r < gr(n) && xn(n.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (xn(l, -1))
          s = n, i = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (ea(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && xn(l, -1); )
          s = n.parentNode, i = Pt(l), l = l.previousSibling;
        if (l)
          n = l, r = gr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Ts(t, n, r) : s && Ts(t, s, i);
}
function Sd(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let s = gr(n), i, o;
  for (; ; )
    if (r < s) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (xn(l, 1))
        i = n, o = ++r;
      else
        break;
    } else {
      if (ea(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && xn(l, 1); )
          i = l.parentNode, o = Pt(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, s = gr(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = s = 0;
        }
      }
    }
  i && Ts(t, i, o);
}
function ea(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Cd(t, e) {
  for (; t && e == t.childNodes.length && !Ks(t); )
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
function kd(t, e) {
  for (; t && !e && !Ks(t); )
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
function Ts(t, e, n) {
  if (e.nodeType != 3) {
    let i, o;
    (o = Cd(e, n)) ? (e = o, n = 0) : (i = kd(e, n)) && (e = i, n = i.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Kl(r)) {
    let i = document.createRange();
    i.setEnd(e, n), i.setStart(e, n), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && Gs(t);
  }, 50);
}
function fo(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(ft || Xl) && n.parent.inlineContent) {
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
function ho(t, e, n) {
  let r = t.state.selection;
  if (r instanceof V && !r.empty || n.indexOf("s") > -1 || $e && n.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: i } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Ns(t.state, e);
    if (o && o instanceof W)
      return ht(t, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : i, l = r instanceof je ? q.near(o, e) : q.findFrom(o, e);
    return l ? ht(t, l) : !1;
  }
  return !1;
}
function po(t, e) {
  if (!(t.state.selection instanceof V))
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
function mo(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Ad(t) {
  if (!$t || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    mo(t, r, "true"), setTimeout(() => mo(t, r, "false"), 20);
  }
  return !1;
}
function Ed(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function Nd(t, e) {
  let n = e.keyCode, r = Ed(e);
  if (n == 8 || $e && n == 72 && r == "c")
    return po(t, -1) || Kt(t, -1);
  if (n == 46 && !e.shiftKey || $e && n == 68 && r == "c")
    return po(t, 1) || Kt(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || $e && n == 66 && r == "c") {
    let s = n == 37 ? fo(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return uo(t, s, r) || Kt(t, s);
  } else if (n == 39 || $e && n == 70 && r == "c") {
    let s = n == 39 ? fo(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return uo(t, s, r) || Kt(t, s);
  } else {
    if (n == 38 || $e && n == 80 && r == "c")
      return ho(t, -1, r) || Kt(t, -1);
    if (n == 40 || $e && n == 78 && r == "c")
      return Ad(t) || ho(t, 1, r) || Kt(t, 1);
    if (r == ($e ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ta(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: s, openEnd: i } = e;
  for (; s > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, i--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = t.someProp("clipboardSerializer") || Er.fromSchema(t.state.schema), l = la(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = oa[c.nodeName.toLowerCase()]); ) {
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
function na(t, e, n, r, s) {
  let i = s.parent.type.spec.code, o, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || i || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, i || r, t);
    }), i)
      return l = new O(N.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let d = t.someProp("clipboardTextParser", (f) => f(e, s, r, t));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = t.state, m = Er.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = o.appendChild(document.createElement("p"));
        g && y.appendChild(m.serializeNode(h.text(g, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), o = Id(n), Js && Od(o);
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
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Td.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = jd(go(l, +u[1], +u[2]), u[4]);
  else if (l = O.maxOpen(Md(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = go(l, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    l = d(l, t, a);
  }), l;
}
const Td = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Md(t, e) {
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
      if (c = o.length && i.length && sa(a, i, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = ia(o[o.length - 1], i.length));
        let u = ra(l, a);
        o.push(u), s = s.matchType(u.type), i = a;
      }
    }), o)
      return N.from(o);
  }
  return t;
}
function ra(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, N.from(t));
  return t;
}
function sa(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let i = sa(t, e, n, r.lastChild, s + 1);
    if (i)
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
      return r.copy(r.content.append(N.from(ra(n, t, s + 1))));
  }
}
function ia(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, ia(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(N.empty, !0);
  return t.copy(n.append(r));
}
function Ms(t, e, n, r, s, i) {
  let o = e < 0 ? t.firstChild : t.lastChild, l = o.content;
  return t.childCount > 1 && (i = 0), s < r - 1 && (l = Ms(l, e, n, r, s + 1, i)), s >= n && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, i <= s).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(N.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, o.copy(l));
}
function go(t, e, n) {
  return e < t.openStart && (t = new O(Ms(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new O(Ms(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const oa = {
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
let yo = null;
function la() {
  return yo || (yo = document.implementation.createHTMLDocument("title"));
}
let as = null;
function Rd(t) {
  let e = window.trustedTypes;
  return e ? (as || (as = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), as.createHTML(t)) : t;
}
function Id(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = la().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), s;
  if ((s = r && oa[r[1].toLowerCase()]) && (t = s.map((i) => "<" + i + ">").join("") + t + s.map((i) => "</" + i + ">").reverse().join("")), n.innerHTML = Rd(t), s)
    for (let i = 0; i < s.length; i++)
      n = n.querySelector(s[i]) || n;
  return n;
}
function Od(t) {
  let e = t.querySelectorAll(ft ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function jd(t, e) {
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
    s = N.from(a.create(r[l + 1], s)), i++, o++;
  }
  return new O(s, i, o);
}
const qe = {}, De = {};
function yt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
De.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !ca(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(jn && ft && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), qs && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (s) => s(t, ql(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || Nd(t, n) ? n.preventDefault() : yt(t, "key");
};
De.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
De.keypress = (t, e) => {
  let n = e;
  if (ca(t, n) || !n.charCode || n.ctrlKey && !n.altKey || $e && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof V) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode), i = () => t.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !t.someProp("handleTextInput", (o) => o(t, r.$from.pos, r.$to.pos, s, i)) && t.dispatch(i()), n.preventDefault();
  }
};
function Ir(t) {
  return { left: t.clientX, top: t.clientY };
}
function Dd(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Ys(t, e, n, r, s) {
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
function zd(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && W.isSelectable(r) ? (Yt(t, new W(n)), !0) : !1;
}
function Ld(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, s;
  n instanceof W && (r = n.node);
  let i = t.state.doc.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if (W.isSelectable(l)) {
      r && n.$from.depth > 0 && o >= n.$from.depth && i.before(n.$from.depth + 1) == n.$from.pos ? s = i.before(n.$from.depth) : s = i.before(o);
      break;
    }
  }
  return s != null ? (Yt(t, W.create(t.state.doc, s)), !0) : !1;
}
function Pd(t, e, n, r, s) {
  return Ys(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (i) => i(t, e, r)) || (s ? Ld(t, n) : zd(t, n));
}
function $d(t, e, n, r) {
  return Ys(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (s) => s(t, e, r));
}
function Fd(t, e, n, r) {
  return Ys(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (s) => s(t, e, r)) || _d(t, n, r);
}
function _d(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Yt(t, V.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i), l = s.before(i);
    if (o.inlineContent)
      Yt(t, V.create(r, l + 1, l + 1 + o.content.size));
    else if (W.isSelectable(o))
      Yt(t, W.create(r, l));
    else
      continue;
    return !0;
  }
}
function Xs(t) {
  return yr(t);
}
const aa = $e ? "metaKey" : "ctrlKey";
qe.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Xs(t), s = Date.now(), i = "singleClick";
  s - t.input.lastClick.time < 500 && Dd(n, t.input.lastClick) && !n[aa] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? i = "doubleClick" : t.input.lastClick.type == "doubleClick" && (i = "tripleClick")), t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: i, button: n.button };
  let o = t.posAtCoords(Ir(n));
  o && (i == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Bd(t, o, n, !!r)) : (i == "doubleClick" ? $d : Fd)(t, o.pos, o.inside, n) ? n.preventDefault() : yt(t, "pointer"));
};
class Bd {
  constructor(e, n, r, s) {
    this.view = e, this.pos = n, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[aa], this.allowDefault = r.shiftKey;
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
    (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof W && c.from <= o && c.to > o) && (this.mightDrag = {
      node: i,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Rr && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), yt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Gs(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Ir(e))), this.updateAllowDefault(e), this.allowDefault || !n ? yt(this.view, "pointer") : Pd(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    $t && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    ft && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Yt(this.view, q.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : yt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), yt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
qe.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Xs(t), yt(t, "pointer");
};
qe.touchmove = (t) => {
  t.input.lastTouch = Date.now(), yt(t, "pointer");
};
qe.contextmenu = (t) => Xs(t);
function ca(t, e) {
  return t.composing ? !0 : $t && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const Hd = jn ? 5e3 : -1;
De.compositionstart = De.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof V && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || ft && Xl && Wd(t)))
      t.markCursor = t.state.storedMarks || n.marks(), yr(t, !0), t.markCursor = null;
    else if (yr(t, !e.selection.empty), Rr && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
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
  ua(t, Hd);
};
function Wd(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
De.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, ua(t, 20));
};
function ua(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => yr(t), e));
}
function Vd(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Ud()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Ud() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function yr(t, e = !1) {
  if (!(jn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Vd(t), e || t.docView && t.docView.dirty) {
      let n = gd(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Kd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const kn = On && Gl < 15 || qs && md < 604;
qe.copy = De.cut = (t, e) => {
  let n = e, r = t.state.selection, s = n.type == "cut";
  if (r.empty)
    return;
  let i = kn ? null : n.clipboardData, o = r.content(), { dom: l, text: a } = ta(t, o);
  i ? (n.preventDefault(), i.clearData(), i.setData("text/html", l.innerHTML), i.setData("text/plain", a)) : Kd(t, l), s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function qd(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Jd(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Rs(t, r.value, null, s, e) : Rs(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function Rs(t, e, n, r, s) {
  let i = na(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, i || O.empty)))
    return !0;
  if (!i)
    return !1;
  let o = qd(i), l = o ? t.state.tr.replaceSelectionWith(o, r) : t.state.tr.replaceSelection(i);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function da(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
De.paste = (t, e) => {
  let n = e;
  if (t.composing && !jn)
    return;
  let r = kn ? null : n.clipboardData, s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Rs(t, da(r), r.getData("text/html"), s, n) ? n.preventDefault() : Jd(t, n);
};
class Gd {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const Yd = $e ? "altKey" : "ctrlKey";
function fa(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[Yd];
}
qe.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let s = t.state.selection, i = s.empty ? null : t.posAtCoords(Ir(n)), o;
  if (!(i && i.pos >= s.from && i.pos <= (s instanceof W ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      o = W.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (o = W.create(t.state.doc, d.posBefore));
    }
  }
  let l = (o || t.state.selection).content(), { dom: a, text: c, slice: u } = ta(t, l);
  (!n.dataTransfer.files.length || !ft || Yl > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(kn ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", kn || n.dataTransfer.setData("text/plain", c), t.dragging = new Gd(u, fa(t, n), o);
};
qe.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
De.dragover = De.dragenter = (t, e) => e.preventDefault();
De.drop = (t, e) => {
  try {
    Xd(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function Xd(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(Ir(e));
  if (!r)
    return;
  let s = t.state.doc.resolve(r.pos), i = n && n.slice;
  i ? t.someProp("transformPasted", (h) => {
    i = h(i, t, !1);
  }) : i = na(t, da(e.dataTransfer), kn ? null : e.dataTransfer.getData("text/html"), !1, s);
  let o = !!(n && fa(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, i || O.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!i)
    return;
  e.preventDefault();
  let l = i ? Fu(t.state.doc, s.pos, i) : s.pos;
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
  if (u && W.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild))
    a.setSelection(new W(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, y, x) => h = x), a.setSelection(Zl(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
qe.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Gs(t);
  }, 20));
};
qe.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
qe.beforeinput = (t, e) => {
  if (ft && jn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (i) => i(t, ql(8, "Backspace")))))
        return;
      let { $cursor: s } = t.state.selection;
      s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in De)
  qe[t] = De[t];
function An(t, e) {
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
class br {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Rt, this.side = this.spec.side || 0;
  }
  map(e, n, r, s) {
    let { pos: i, deleted: o } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
    return o ? null : new _e(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof br && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && An(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class bt {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Rt;
  }
  map(e, n, r, s) {
    let i = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= o ? null : new _e(i, o, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof bt && An(this.attrs, e.attrs) && An(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof bt;
  }
  destroy() {
  }
}
class Qs {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Rt;
  }
  map(e, n, r, s) {
    let i = e.mapResult(n.from + s, 1);
    if (i.deleted)
      return null;
    let o = e.mapResult(n.to + s, -1);
    return o.deleted || o.pos <= i.pos ? null : new _e(i.pos - r, o.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from), i;
    return s == n.from && !(i = e.child(r)).isText && s + i.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Qs && An(this.attrs, e.attrs) && An(this.spec, e.spec);
  }
  destroy() {
  }
}
class _e {
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
    return new _e(e, n, this.type);
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
    return new _e(e, e, new br(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, s) {
    return new _e(e, n, new bt(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, s) {
    return new _e(e, n, new Qs(r, s));
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
    return this.type instanceof bt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof br;
  }
}
const Jt = [], Rt = {};
class ae {
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
    return n.length ? xr(n, e, 0, Rt) : Ne;
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
    return this == Ne || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Rt);
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
    return this.children.length ? Qd(this.children, o || [], e, n, r, s, i) : o ? new ae(o.sort(It), Jt) : Ne;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Ne ? ae.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let s, i = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = pa(n, l, c)) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a; )
          i += 3;
        s[i] == a ? s[i + 2] = s[i + 2].addInner(l, u, c + 1) : s.splice(i, 0, a, a + l.nodeSize, xr(u, l, c + 1, Rt)), i += 3;
      }
    });
    let o = ha(i ? ma(n) : n, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new ae(o.length ? this.local.concat(o).sort(It) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Ne ? this : this.removeInner(e, 0);
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
      c != Ne ? r[i + 2] = c : (r.splice(i, 3), i -= 3);
    }
    if (s.length) {
      for (let i = 0, o; i < e.length; i++)
        if (o = e[i])
          for (let l = 0; l < s.length; l++)
            s[l].eq(o, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new ae(s, r) : Ne;
  }
  forChild(e, n) {
    if (this == Ne)
      return this;
    if (n.isLeaf)
      return ae.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1, o = i + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof bt) {
        let c = Math.max(i, a.from) - i, u = Math.min(o, a.to) - i;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new ae(s.sort(It), Jt);
      return r ? new At([l, r]) : l;
    }
    return r || Ne;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ae) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return Zs(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Ne)
      return Jt;
    if (e.inlineContent || !this.local.some(bt.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof bt || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
ae.empty = new ae([], []);
ae.removeOverlap = Zs;
const Ne = ae.empty;
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
      return ae.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, n);
      i != Ne && (i instanceof At ? r = r.concat(i.members) : r.push(i));
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
    return n ? Zs(r ? n : n.sort(It)) : Jt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Ne;
      case 1:
        return e[0];
      default:
        return new At(e.every((n) => n instanceof ae) ? e : e.reduce((n, r) => n.concat(r instanceof ae ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function Qd(t, e, n, r, s, i, o) {
  let l = t.slice();
  for (let c = 0, u = i; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((f, h, m, g) => {
      let y = g - m - (h - f);
      for (let x = 0; x < l.length; x += 3) {
        let v = l[x + 1];
        if (v < 0 || f > v + u - d)
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
      let u = n.map(t[c] + i), d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + i, -1), h = f - s, { index: m, offset: g } = r.content.findIndex(d), y = r.maybeChild(m);
      if (y && g == d && g + y.nodeSize == h) {
        let x = l[c + 2].mapInner(n, y, u + 1, t[c] + i + 1, o);
        x != Ne ? (l[c] = d, l[c + 1] = h, l[c + 2] = x) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Zd(l, t, e, n, s, i, o), u = xr(c, r, 0, o);
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
  return new ae(e.sort(It), l);
}
function ha(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new _e(s.from + e, s.to + e, s.type));
  }
  return n;
}
function Zd(t, e, n, r, s, i, o) {
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
function pa(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, s = null;
  for (let i = 0, o; i < t.length; i++)
    (o = t[i]) && o.from > n && o.to < r && ((s || (s = [])).push(o), t[i] = null);
  return s;
}
function ma(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function xr(t, e, n, r) {
  let s = [], i = !1;
  e.forEach((l, a) => {
    let c = pa(t, l, a + n);
    if (c) {
      i = !0;
      let u = xr(c, l, n + a + 1, r);
      u != Ne && s.push(a, a + l.nodeSize, u);
    }
  });
  let o = ha(i ? ma(t) : t, -n).sort(It);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || s.length ? new ae(o, s) : Ne;
}
function It(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Zs(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          i.to != r.to && (e == t && (e = t.slice()), e[s] = i.copy(i.from, r.to), bo(e, s + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, i.from), bo(e, s, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function bo(t, e, n) {
  for (; e < t.length && It(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
var xt = {
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
}, wr = {
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
}, ef = typeof navigator < "u" && /Mac/.test(navigator.platform), tf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var we = 0; we < 10; we++) xt[48 + we] = xt[96 + we] = String(we);
for (var we = 1; we <= 24; we++) xt[we + 111] = "F" + we;
for (var we = 65; we <= 90; we++)
  xt[we] = String.fromCharCode(we + 32), wr[we] = String.fromCharCode(we);
for (var cs in xt) wr.hasOwnProperty(cs) || (wr[cs] = xt[cs]);
function nf(t) {
  var e = ef && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || tf && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? wr : xt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const rf = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), sf = typeof navigator < "u" && /Win/.test(navigator.platform);
function of(t) {
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
      rf ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), o && (n = "Meta-" + n), i && (n = "Shift-" + n), n;
}
function lf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[of(n)] = t[n];
  return e;
}
function us(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function af(t) {
  let e = lf(t);
  return function(n, r) {
    let s = nf(r), i, o = e[us(s, r)];
    if (o && o(n.state, n.dispatch, n))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[us(s, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(sf && r.ctrlKey && r.altKey) && (i = xt[r.keyCode]) && i != s) {
        let l = e[us(i, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var cf = Object.defineProperty, ei = (t, e) => {
  for (var n in e)
    cf(t, n, { get: e[n], enumerable: !0 });
};
function ga(t) {
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
var uf = class {
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
      state: ga({
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
}, ya = {};
ei(ya, {
  blur: () => df,
  clearContent: () => ff,
  clearNodes: () => hf,
  command: () => pf,
  createParagraphNear: () => mf,
  cut: () => gf,
  deleteCurrentNode: () => yf,
  deleteNode: () => bf,
  deleteRange: () => xf,
  deleteSelection: () => wf,
  enter: () => vf,
  exitCode: () => Sf,
  extendMarkRange: () => kf,
  first: () => Af,
  focus: () => Tf,
  forEach: () => Mf,
  insertContent: () => Rf,
  insertContentAt: () => jf,
  joinBackward: () => Lf,
  joinDown: () => zf,
  joinForward: () => Pf,
  joinItemBackward: () => $f,
  joinItemForward: () => Ff,
  joinTextblockBackward: () => _f,
  joinTextblockForward: () => Bf,
  joinUp: () => Df,
  keyboardShortcut: () => Wf,
  lift: () => Vf,
  liftEmptyBlock: () => Uf,
  liftListItem: () => Kf,
  newlineInCode: () => qf,
  resetAttributes: () => Jf,
  scrollIntoView: () => Gf,
  selectAll: () => Yf,
  selectNodeBackward: () => Xf,
  selectNodeForward: () => Qf,
  selectParentNode: () => Zf,
  selectTextblockEnd: () => eh,
  selectTextblockStart: () => th,
  setContent: () => rh,
  setMark: () => mh,
  setMeta: () => gh,
  setNode: () => yh,
  setNodeSelection: () => bh,
  setTextDirection: () => xh,
  setTextSelection: () => wh,
  sinkListItem: () => vh,
  splitBlock: () => Sh,
  splitListItem: () => Ch,
  toggleList: () => kh,
  toggleMark: () => Ah,
  toggleNode: () => Eh,
  toggleWrap: () => Nh,
  undoInputRule: () => Th,
  unsetAllMarks: () => Mh,
  unsetMark: () => Rh,
  unsetTextDirection: () => Ih,
  updateAttributes: () => Oh,
  wrapIn: () => jh,
  wrapInList: () => Dh
});
var df = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), ff = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), hf = () => ({ state: t, tr: e, dispatch: n }) => {
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
}, pf = (t) => (e) => t(e), mf = () => ({ state: t, dispatch: e }) => Bl(t, e), gf = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, i = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const o = r.mapping.map(e);
  return r.insert(o, i.content), r.setSelection(new V(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, yf = () => ({ tr: t, dispatch: e }) => {
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
var bf = (t) => ({ tr: e, state: n, dispatch: r }) => {
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
}, xf = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, wf = () => ({ state: t, dispatch: e }) => Bs(t, e), vf = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Sf = () => ({ state: t, dispatch: e }) => Qu(t, e);
function Cf(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function vr(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : Cf(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function ba(t, e, n = {}) {
  return t.find((r) => r.type === e && vr(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function xo(t, e, n = {}) {
  return !!ba(t, e, n);
}
function xa(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs), !ba([...s.node.marks], e, n)))
    return;
  let o = s.index, l = t.start() + s.offset, a = o + 1, c = l + s.node.nodeSize;
  for (; o > 0 && xo([...t.parent.child(o - 1).marks], e, n); )
    o -= 1, l -= t.parent.child(o).nodeSize;
  for (; a < t.parent.childCount && xo([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function vt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var kf = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const i = vt(t, r.schema), { doc: o, selection: l } = n, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = xa(a, i, e);
    if (d && d.from <= c && d.to >= u) {
      const f = V.create(o, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Af = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function wa(t) {
  return t instanceof V;
}
function Et(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Ef(t, e = null) {
  if (!e)
    return null;
  const n = q.atStart(t), r = q.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, i = r.to;
  return e === "all" ? V.create(t, Et(0, s, i), Et(t.content.size, s, i)) : V.create(t, Et(e, s, i), Et(e, s, i));
}
function wo() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Sr() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Nf() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var Tf = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: i }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Sr() || wo()) && r.dom.focus(), Nf() && !Sr() && !wo() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (i && t === null && !wa(n.state.selection))
    return o(), !0;
  const l = Ef(s.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return i && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), o()), !0;
}, Mf = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), Rf = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), va = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && va(r);
  }
  return t;
};
function Jn(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return va(n);
}
function En(t, e, n) {
  if (t instanceof et || t instanceof N)
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
      const o = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && o.check(), o;
    } catch (i) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", i), En("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new mu({
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
      if (n.slice ? Mt.fromSchema(a).parseSlice(Jn(t), n.parseOptions) : Mt.fromSchema(a).parse(Jn(t), n.parseOptions), n.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const i = Mt.fromSchema(e);
    return n.slice ? i.parseSlice(Jn(t), n.parseOptions).content : i.parse(Jn(t), n.parseOptions);
  }
  return En("", e, n);
}
function If(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof pe || s instanceof me))
    return;
  const i = t.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), t.setSelection(q.near(t.doc.resolve(o), n));
}
var Of = (t) => !("type" in t), jf = (t, e, n) => ({ tr: r, dispatch: s, editor: i }) => {
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
        En(e, i.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = En(e, i.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = n.errorOnInvalidContent) != null ? o : i.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: u, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Of(l) ? l : [l]).forEach((y) => {
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
      const y = r.doc.resolve(u), x = y.node(), v = y.parentOffset === 0, k = x.isText || x.isTextblock, C = x.content.size > 0;
      v && k && C && (u = Math.max(0, u - 1)), r.replaceWith(u, d, g);
    }
    n.updateSelection && If(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Df = () => ({ state: t, dispatch: e }) => Gu(t, e), zf = () => ({ state: t, dispatch: e }) => Yu(t, e), Lf = () => ({ state: t, dispatch: e }) => Dl(t, e), Pf = () => ({ state: t, dispatch: e }) => $l(t, e), $f = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Nr(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Ff = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Nr(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, _f = () => ({ state: t, dispatch: e }) => qu(t, e), Bf = () => ({ state: t, dispatch: e }) => Ju(t, e);
function Sa() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Hf(t) {
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
      Sr() || Sa() ? o = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), i && (n = `Shift-${n}`), n;
}
var Wf = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const i = Hf(t).split(/-(?!$)/), o = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
function ti(t, e, n = {}) {
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
  const a = s - r, c = l.filter((d) => o ? o.name === d.node.type.name : !0).filter((d) => vr(d.node.attrs, n, { strict: !1 }));
  return i ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var Vf = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return ti(n, s, e) ? Xu(n, r) : !1;
}, Uf = () => ({ state: t, dispatch: e }) => Hl(t, e), Kf = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return cd(r)(e, n);
}, qf = () => ({ state: t, dispatch: e }) => _l(t, e);
function Ca(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function vo(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var Jf = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Ca(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (i = Se(t, r.schema)), l === "mark" && (o = vt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      i && i === u.type && (a = !0, s && n.setNodeMarkup(d, void 0, vo(u.attrs, e))), o && u.marks.length && u.marks.forEach((f) => {
        o === f.type && (a = !0, s && n.addMark(d, d + u.nodeSize, o.create(vo(f.attrs, e))));
      });
    });
  }), a;
}, Gf = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Yf = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new je(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Xf = () => ({ state: t, dispatch: e }) => Ll(t, e), Qf = () => ({ state: t, dispatch: e }) => Fl(t, e), Zf = () => ({ state: t, dispatch: e }) => td(t, e), eh = () => ({ state: t, dispatch: e }) => sd(t, e), th = () => ({ state: t, dispatch: e }) => rd(t, e);
function nh(t, e, n = {}, r = {}) {
  return En(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var rh = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: s, tr: i, dispatch: o, commands: l }) => {
  const { doc: a } = i;
  if (r.preserveWhitespace !== "full") {
    const c = nh(t, s.schema, r, {
      errorOnInvalidContent: e ?? s.options.enableContentCheck
    });
    return o && i.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return o && i.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? s.options.enableContentCheck
  });
};
function sh(t, e) {
  const n = vt(e, t.schema), { from: r, to: s, empty: i } = t.selection, o = [];
  i ? (t.storedMarks && o.push(...t.storedMarks), o.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function ih(t, e) {
  const n = new Ml(t);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function oh(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function ka(t, e) {
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
function ni(t) {
  return (e) => ka(e.$from, t);
}
function Zt(t, e, n) {
  return t.config[e] === void 0 && t.parent ? Zt(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? Zt(t.parent, e, n) : null
  }) : t.config[e];
}
function lh(t) {
  return typeof t == "function";
}
function Nn(t, e = void 0, ...n) {
  return lh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Aa(t) {
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
function ah(t, e, n) {
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
function ch(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function uh(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function dh(t) {
  const e = uh(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((i, o) => o !== r).some((i) => n.oldRange.from >= i.oldRange.from && n.oldRange.to <= i.oldRange.to && n.newRange.from >= i.newRange.from && n.newRange.to <= i.newRange.to));
}
function fh(t) {
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
  }), dh(r);
}
function ir(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((i) => i.type === e && i.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    })
  );
}
function hh(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, i = e ? vt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => i ? i.name === d.type.name : !0).find((d) => vr(d.attrs, n, { strict: !1 }));
  let o = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const x = Math.max(h, y), v = Math.min(m, y + g.nodeSize), k = v - x;
      o += k, l.push(
        ...g.marks.map((C) => ({
          mark: C,
          from: x,
          to: v
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((d) => i ? i.name === d.mark.type.name : !0).filter((d) => vr(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => i ? d.mark.type !== i && d.mark.type.excludes(i) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function So(t, e) {
  const { nodeExtensions: n } = Aa(e), r = n.find((o) => o.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, i = Nn(Zt(r, "group", s));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function Ea(t, {
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
      s !== !1 && (Ea(i, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function ph(t, e, n) {
  var r;
  const { selection: s } = e;
  let i = null;
  if (wa(s) && (i = s.$cursor), i) {
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
var mh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: i } = n, { empty: o, ranges: l } = i, a = vt(t, r.schema);
  if (s)
    if (o) {
      const c = sh(r, a);
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
  return ph(r, n, a);
}, gh = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), yh = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const i = Se(t, n.schema);
  let o;
  return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), i.isTextblock ? s().command(({ commands: l }) => ro(i, { ...o, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => ro(i, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, bh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = Et(t, 0, r.content.size), i = W.create(r, s);
    e.setSelection(i);
  }
  return !0;
}, xh = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: i } = r;
  let o, l;
  return typeof e == "number" ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = e.from, l = e.to) : (o = i.from, l = i.to), s && n.doc.nodesBetween(o, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, wh = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: i } = typeof t == "number" ? { from: t, to: t } : t, o = V.atStart(r).from, l = V.atEnd(r).to, a = Et(s, o, l), c = Et(i, o, l), u = V.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, vh = (t) => ({ state: e, dispatch: n }) => {
  const r = Se(t, e.schema);
  return fd(r)(e, n);
};
function Co(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
var Sh = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: i, doc: o } = e, { $from: l, $to: a } = i, c = s.extensionManager.attributes, u = ir(c, l.node().type.name, l.node().attrs);
  if (i instanceof W && i.node.isBlock)
    return !l.parentOffset || !dt(o, l.pos) ? !1 : (r && (t && Co(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : oh(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = dt(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !m && dt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (i instanceof V && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && Co(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, Ch = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: i }) => {
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
      let x = N.empty;
      const v = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let D = a.depth - v; D >= a.depth - 3; D -= 1)
        x = N.from(a.node(D).copy(x));
      const k = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), C = {
        ...ir(f, a.node().type.name, a.node().attrs),
        ...e
      }, w = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(C)) || void 0;
      x = x.append(N.from(l.createAndFill(null, w) || void 0));
      const I = a.before(a.depth - (v - 1));
      n.replace(I, a.after(-k), new O(x, 4 - v, 0));
      let B = -1;
      n.doc.nodesBetween(I, n.doc.content.size, (D, F) => {
        if (B > -1)
          return !1;
        D.isTextblock && D.content.size === 0 && (B = F + 1);
      }), B > -1 && n.setSelection(V.near(n.doc.resolve(B))), n.scrollIntoView();
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
  const y = h ? [
    { type: l, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: m }];
  if (!dt(n.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: x, storedMarks: v } = r, { splittableMarks: k } = i.extensionManager, C = v || x.$to.parentOffset && x.$from.marks();
    if (n.split(a.pos, 2, y).scrollIntoView(), !C || !s)
      return !0;
    const w = C.filter((I) => k.includes(I.type.name));
    n.ensureMarks(w);
  }
  return !0;
}, ds = (t, e) => {
  const n = ni((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, n.pos) && t.join(n.pos), !0;
}, fs = (t, e) => {
  const n = ni((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === s?.type && Lt(t.doc, r) && t.join(r), !0;
}, kh = (t, e, n, r = {}) => ({ editor: s, tr: i, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = Se(t, o.schema), m = Se(e, o.schema), { selection: g, storedMarks: y } = o, { $from: x, $to: v } = g, k = x.blockRange(v), C = y || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const w = ni((I) => So(I.type.name, d))(g);
  if (k.depth >= 1 && w && k.depth - w.depth <= 1) {
    if (w.node.type === h)
      return c.liftListItem(m);
    if (So(w.node.type.name, d) && h.validContent(w.node.content) && l)
      return a().command(() => (i.setNodeMarkup(w.pos, h), !0)).command(() => ds(i, h)).command(() => fs(i, h)).run();
  }
  return !n || !C || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ds(i, h)).command(() => fs(i, h)).run() : a().command(() => {
    const I = u().wrapInList(h, r), B = C.filter((D) => f.includes(D.type.name));
    return i.ensureMarks(B), I ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ds(i, h)).command(() => fs(i, h)).run();
}, Ah = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: i = !1 } = n, o = vt(t, r.schema);
  return hh(r, o, e) ? s.unsetMark(o, { extendEmptyMarkRange: i }) : s.setMark(o, e);
}, Eh = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const i = Se(t, r.schema), o = Se(e, r.schema), l = ti(r, i, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(o, a) : s.setNode(i, { ...a, ...n });
}, Nh = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = Se(t, n.schema);
  return ti(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Th = () => ({ state: t, dispatch: e }) => {
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
}, Mh = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((i) => {
    t.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, Rh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var i;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = n, a = vt(t, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && o) {
    let { from: f, to: h } = l;
    const m = (i = c.marks().find((y) => y.type === a)) == null ? void 0 : i.attrs, g = xa(c, a, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, Ih = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: s } = n;
  let i, o;
  return typeof t == "number" ? (i = t, o = t) : t && "from" in t && "to" in t ? (i = t.from, o = t.to) : (i = s.from, o = s.to), r && e.doc.nodesBetween(i, o, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Oh = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Ca(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (i = Se(t, r.schema)), l === "mark" && (o = vt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const u = c.$from.pos, d = c.$to.pos;
    let f, h, m, g;
    n.selection.empty ? r.doc.nodesBetween(u, d, (y, x) => {
      i && i === y.type && (a = !0, m = Math.max(x, u), g = Math.min(x + y.nodeSize, d), f = x, h = y);
    }) : r.doc.nodesBetween(u, d, (y, x) => {
      x < u && i && i === y.type && (a = !0, m = Math.max(x, u), g = Math.min(x + y.nodeSize, d), f = x, h = y), x >= u && x <= d && (i && i === y.type && (a = !0, s && n.setNodeMarkup(x, void 0, {
        ...y.attrs,
        ...e
      })), o && y.marks.length && y.marks.forEach((v) => {
        if (o === v.type && (a = !0, s)) {
          const k = Math.max(x, u), C = Math.min(x + y.nodeSize, d);
          n.addMark(
            k,
            C,
            o.create({
              ...v.attrs,
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
}, jh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return id(s, e)(n, r);
}, Dh = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Se(t, n.schema);
  return od(s, e)(n, r);
}, zh = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
};
function Lh(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Gn(t) {
  return Lh(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Na(t, e) {
  const n = { ...t };
  return Gn(t) && Gn(e) && Object.keys(e).forEach((r) => {
    Gn(e[r]) && Gn(t[r]) ? n[r] = Na(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var ri = class {
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
      ...Nn(
        Zt(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...Nn(
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
      addOptions: () => Na(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, Ph = class Ta extends ri {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Ta(n);
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
}, $h = {};
ei($h, {
  ClipboardTextSerializer: () => Fh,
  Commands: () => _h,
  Delete: () => Bh,
  Drop: () => Hh,
  Editable: () => Wh,
  FocusEvents: () => Vh,
  Keymap: () => Uh,
  Paste: () => Kh,
  Tabindex: () => qh,
  TextDirection: () => Jh,
  focusEventsPluginKey: () => Ra
});
var Je = class Ma extends ri {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Ma(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Fh = Je.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new nt({
        key: new Ke("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: i } = s, o = Math.min(...i.map((u) => u.$from.pos)), l = Math.max(...i.map((u) => u.$to.pos)), a = ch(n);
            return ah(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), _h = Je.create({
  name: "commands",
  addCommands() {
    return {
      ...ya
    };
  }
}), Bh = Je.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, s;
    const i = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const u = ih(t.before, [t, ...e]);
      fh(u).forEach((h) => {
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
        if (h instanceof Ue) {
          const x = f.slice(m).map(h.from, -1), v = f.slice(m).map(h.to), k = f.invert().map(x, -1), C = f.invert().map(v), w = (g = u.doc.nodeAt(x - 1)) == null ? void 0 : g.marks.some((B) => B.eq(h.mark)), I = (y = u.doc.nodeAt(v)) == null ? void 0 : y.marks.some((B) => B.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: k,
              to: C
            },
            newRange: {
              from: x,
              to: v
            },
            partial: !!(I || w),
            editor: this.editor,
            transaction: t,
            combinedTransform: u
          });
        }
      });
    };
    (s = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || s ? setTimeout(i, 0) : i();
  }
}), Hh = Je.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new nt({
        key: new Ke("tiptapDrop"),
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
}), Wh = Je.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new nt({
        key: new Ke("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ra = new Ke("focusEvents"), Vh = Je.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new nt({
        key: Ra,
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
}), Uh = Je.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, m = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = m.parent.type.spec.isolating, y = d.pos - d.parentOffset, x = g && m.parent.childCount === 1 ? y === d.pos : q.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !x || x && d.parent.type.name === "paragraph" ? !1 : o.clearNodes();
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
    return Sr() || Sa() ? i : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new nt({
        key: new Ke("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: i, from: o, to: l } = e.selection, a = q.atStart(e.doc).from, c = q.atEnd(e.doc).to;
          if (i || !(o === a && l === c) || !Ea(n.doc))
            return;
          const f = n.tr, h = ga({
            state: n,
            transaction: f
          }), { commands: m } = new uf({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Kh = Je.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new nt({
        key: new Ke("tiptapPaste"),
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
}), qh = Je.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new nt({
        key: new Ke("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Jh = Je.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Aa(this.extensions);
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
      new nt({
        key: new Ke("textDirection"),
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
function Gh(t) {
  return new zh({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Nn(t.getAttributes, void 0, r) || {}, { tr: i } = e, o = n.from;
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
var Yh = (t) => "touches" in t, Xh = class {
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
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Yh(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
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
}, Qh = {};
ei(Qh, {
  createAtomBlockMarkdownSpec: () => Zh,
  createBlockMarkdownSpec: () => ep,
  createInlineMarkdownSpec: () => rp,
  parseAttributes: () => si,
  parseIndentedBlocks: () => sp,
  renderNestedMarkdownContent: () => ip,
  serializeAttributes: () => ii
});
function si(t) {
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
function ii(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function Zh(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = si,
    serializeAttributes: s = ii,
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
        if (!o.find((v) => !(v in y)))
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
function ep(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = si,
    serializeAttributes: i = ii,
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
        const [x, v = ""] = y, k = s(v);
        let C = 1;
        const w = x.length;
        let I = "";
        const B = /^:::([\w-]*)(\s.*)?/gm, D = d.slice(w);
        for (B.lastIndex = 0; ; ) {
          const F = B.exec(D);
          if (F === null)
            break;
          const A = F.index, z = F[1];
          if (!((m = F[2]) != null && m.endsWith(":::"))) {
            if (z)
              C += 1;
            else if (C -= 1, C === 0) {
              const U = D.slice(0, A);
              I = U.trim();
              const ee = d.slice(0, w + A + F[0].length);
              let G = [];
              if (I)
                if (l === "block")
                  for (G = h.blockTokens(U), G.forEach((X) => {
                    X.text && (!X.tokens || X.tokens.length === 0) && (X.tokens = h.inlineTokens(X.text));
                  }); G.length > 0; ) {
                    const X = G[G.length - 1];
                    if (X.type === "paragraph" && (!X.text || X.text.trim() === ""))
                      G.pop();
                    else
                      break;
                  }
                else
                  G = h.inlineTokens(I);
              return {
                type: e,
                raw: ee,
                attributes: k,
                content: I,
                tokens: G
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
function tp(t) {
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
function np(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function rp(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: s = tp,
    serializeAttributes: i = np,
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
        const x = f[g];
        if (y !== void 0 && x === y)
          return;
        h[g] = x;
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
        let x = "", v = "";
        if (l) {
          const [, C] = y;
          v = C;
        } else {
          const [, C, w] = y;
          v = C, x = w || "";
        }
        const k = s(v.trim());
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
      const m = u(f.attrs || {}), g = i(m), y = g ? ` ${g}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${h}[/${c}]`;
    }
  };
}
function sp(t, e, n) {
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
    const x = [y];
    for (u += 1; u < l.length; ) {
      const w = l[u];
      if (w.trim() === "") {
        const B = l.slice(u + 1).findIndex((A) => A.trim() !== "");
        if (B === -1)
          break;
        if ((((s = (r = l[u + 1 + B].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : s.length) || 0) > g) {
          x.push(w), c = `${c}${w}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((o = (i = w.match(/^(\s*)/)) == null ? void 0 : i[1]) == null ? void 0 : o.length) || 0) > g)
        x.push(w), c = `${c}${w}
`, u += 1;
      else
        break;
    }
    let v;
    const k = x.slice(1);
    if (k.length > 0) {
      const w = k.map((I) => I.slice(g + d)).join(`
`);
      w.trim() && (e.customNestedParser ? v = e.customNestedParser(w) : v = n.blockTokens(w));
    }
    const C = e.createToken(m, v);
    a.push(C);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function ip(t, e, n, r) {
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
var Dn = class Ia extends ri {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
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
}, op = Ph.create({
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
}), lp = op, ap = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, cp = Dn.create({
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
      const c = new Xh({
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
      Gh({
        find: ap,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), up = cp;
let Is, Os;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  Is = (e) => t.get(e), Os = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  Is = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }, Os = (r, s) => (n == 10 && (n = 0), t[n++] = r, t[n++] = s);
}
var ie = class {
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
    return Is(t) || Os(t, dp(t));
  }
};
function dp(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = fp(t), n = t.childCount, r = [];
  let s = 0, i = null;
  const o = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let m = 0; ; m++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (m == d.childCount) break;
      const g = d.child(m), { colspan: y, rowspan: x, colwidth: v } = g.attrs;
      for (let k = 0; k < x; k++) {
        if (k + c >= n) {
          (i || (i = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: x - k
          });
          break;
        }
        const C = s + k * e;
        for (let w = 0; w < y; w++) {
          r[C + w] == 0 ? r[C + w] = u : (i || (i = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - w
          });
          const I = v && v[w];
          if (I) {
            const B = (C + w) % e * 2, D = o[B];
            D == null || D != I && o[B + 1] == 1 ? (o[B] = I, o[B + 1] = 1) : D == I && o[B + 1]++;
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
  const l = new ie(e, n, r, i);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2) o[c] != null && o[c + 1] < n && (a = !0);
  return a && hp(l, o, t), l;
}
function fp(t) {
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
function hp(t, e, n) {
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
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = pp(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: i,
      colwidth: l
    });
  }
}
function pp(t) {
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
const pt = new Ke("selectingCells");
function Dt(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function mp(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function Ge(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Or(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = Dt(e.$head) || gp(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function gp(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function js(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function yp(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function oi(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Oa(t, e, n) {
  const r = t.node(-1), s = ie.get(r), i = t.start(-1), o = s.nextCell(t.pos - i, e, n);
  return o == null ? null : t.node(0).resolve(i + o);
}
function zt(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function ja(t, e, n = 1) {
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
function bp(t, e, n) {
  const r = Ce(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var te = class ct extends q {
  constructor(e, n = e) {
    const r = e.node(-1), s = ie.get(r), i = e.start(-1), o = s.rectBetween(e.pos - i, n.pos - i), l = e.node(0), a = s.cellsInRect(o).filter((u) => u != n.pos - i);
    a.unshift(n.pos - i);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = i + u + 1;
      return new Rl(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), s = e.resolve(n.map(this.$headCell.pos));
    if (js(r) && js(s) && oi(r, s)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection() ? ct.rowSelection(r, s) : i && this.isColSelection() ? ct.colSelection(r, s) : new ct(r, s);
    }
    return V.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = ie.get(e), r = this.$anchorCell.start(-1), s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), i = {}, o = [];
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
          let x = m.attrs;
          if (g > 0 && (x = zt(x, 0, g)), y > 0 && (x = zt(x, x.colspan - y, y)), h.left < s.left) {
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
      o.push(e.child(a).copy(N.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : o;
    return new O(N.from(l), 1, 1);
  }
  replace(e, n = O.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: l, $to: a } = s[o], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), o ? O.empty : n);
    }
    const i = q.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    i && e.setSelection(i);
  }
  replaceWith(e, n) {
    this.replace(e, new O(N.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ie.get(n), s = this.$anchorCell.start(-1), i = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let o = 0; o < i.length; o++) e(n.nodeAt(i[o]), s + i[o]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), s = ie.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(n.pos - i), a = e.node(0);
    return o.top <= l.top ? (o.top > 0 && (e = a.resolve(i + s.map[o.left])), l.bottom < s.height && (n = a.resolve(i + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(i + s.map[l.left])), o.bottom < s.height && (e = a.resolve(i + s.map[s.width * (s.height - 1) + o.right - 1]))), new ct(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ie.get(e), r = this.$anchorCell.start(-1), s = n.colCount(this.$anchorCell.pos - r), i = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, i) > 0) return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan, l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == n.width;
  }
  eq(e) {
    return e instanceof ct && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), s = ie.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(n.pos - i), a = e.node(0);
    return o.left <= l.left ? (o.left > 0 && (e = a.resolve(i + s.map[o.top * s.width])), l.right < s.width && (n = a.resolve(i + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(i + s.map[l.top * s.width])), o.right < s.width && (e = a.resolve(i + s.map[s.width * (o.top + 1) - 1]))), new ct(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new ct(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new ct(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new xp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
te.prototype.visible = !1;
q.jsonID("cell", te);
var xp = class Da {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Da(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && oi(n, r) ? new te(n, r) : q.near(r, 1);
  }
};
function wp(t) {
  if (!(t.selection instanceof te)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(_e.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), ae.create(t.doc, e);
}
function vp({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++) ;
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--) ;
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function Sp({ $from: t, $to: e }) {
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
function Cp(t, e, n) {
  const r = (e || t).selection, s = (e || t).doc;
  let i, o;
  if (r instanceof W && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell") i = te.create(s, r.from);
    else if (o == "row") {
      const l = s.resolve(r.from + 1);
      i = te.rowSelection(l, l);
    } else if (!n) {
      const l = ie.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      i = te.create(s, a + 1, c);
    }
  } else r instanceof V && vp(r) ? i = V.create(s, r.from) : r instanceof V && Sp(r) && (i = V.create(s, r.$from.start(), r.$from.end()));
  return i && (e || (e = t.tr)).setSelection(i), e;
}
const kp = new Ke("fix-tables");
function za(t, e, n, r) {
  const s = t.childCount, i = e.childCount;
  e: for (let o = 0, l = 0; o < i; o++) {
    const a = e.child(o);
    for (let c = l, u = Math.min(s, o + 3); c < u; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < s && t.child(l).sameMarkup(a) ? za(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function La(t, e) {
  let n;
  const r = (s, i) => {
    s.type.spec.tableRole == "table" && (n = Ap(t, s, i, n));
  };
  return e ? e.doc != t.doc && za(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Ap(t, e, n, r) {
  const s = ie.get(e);
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
        const x = Ce(t.schema)[h].createAndFill();
        x && m.push(x);
      }
      const g = (a == 0 || o == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), m);
    }
    c = d;
  }
  return r.setMeta(kp, { fixTables: !0 });
}
function rt(t) {
  const e = t.selection, n = Or(t), r = n.node(-1), s = n.start(-1), i = ie.get(r);
  return {
    ...e instanceof te ? i.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : i.findCell(n.pos - s),
    tableStart: s,
    map: i,
    table: r
  };
}
function Pa(t, { map: e, tableStart: n, table: r }, s) {
  let i = s > 0 ? -1 : 0;
  bp(e, r, s + i) && (i = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, ja(c.attrs, s - e.colCount(a))), o += c.attrs.rowspan - 1;
    } else {
      const a = i == null ? Ce(r.type.schema).cell : r.nodeAt(e.map[l + i]).type, c = e.positionAt(o, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Ep(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t);
    e(Pa(t.tr, n, n.left));
  }
  return !0;
}
function Np(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t);
    e(Pa(t.tr, n, n.right));
  }
  return !0;
}
function Tp(t, { map: e, table: n, tableStart: r }, s) {
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
function Mp(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Tp(r, n, s), s != n.left; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      n.table = i, n.map = ie.get(i);
    }
    e(r);
  }
  return !0;
}
function Rp(t, e, n) {
  var r;
  const s = Ce(e.type.schema).header_cell;
  for (let i = 0; i < t.width; i++) if (((r = e.nodeAt(t.map[i + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function $a(t, { map: e, tableStart: n, table: r }, s) {
  let i = n;
  for (let c = 0; c < s; c++) i += r.child(c).nodeSize;
  const o = [];
  let l = s > 0 ? -1 : 0;
  Rp(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
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
function Ip(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t);
    e($a(t.tr, n, n.top));
  }
  return !0;
}
function Op(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t);
    e($a(t.tr, n, n.bottom));
  }
  return !0;
}
function jp(t, { map: e, table: n, tableStart: r }, s) {
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
function Dp(t, e) {
  if (!Ge(t)) return !1;
  if (e) {
    const n = rt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; jp(r, n, s), s != n.top; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      n.table = i, n.map = ie.get(n.table);
    }
    e(r);
  }
  return !0;
}
function ko(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function zp({ width: t, height: e, map: n }, r) {
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
function Ao(t, e) {
  const n = t.selection;
  if (!(n instanceof te) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = rt(t), { map: s } = r;
  if (zp(s, r)) return !1;
  if (e) {
    const i = t.tr, o = {};
    let l = N.empty, a, c;
    for (let u = r.top; u < r.bottom; u++) for (let d = r.left; d < r.right; d++) {
      const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
      if (!(o[f] || !h))
        if (o[f] = !0, a == null)
          a = f, c = h;
        else {
          ko(h) || (l = l.append(h.content));
          const m = i.mapping.map(f + r.tableStart);
          i.delete(m, m + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (i.setNodeMarkup(a + r.tableStart, null, {
      ...ja(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const u = a + 1 + c.content.size, d = ko(c) ? a + 1 : u;
      i.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    i.setSelection(new te(i.doc.resolve(a + r.tableStart))), e(i);
  }
  return !0;
}
function Eo(t, e) {
  const n = Ce(t.schema);
  return Lp(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Lp(t) {
  return (e, n) => {
    const r = e.selection;
    let s, i;
    if (r instanceof te) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, i = r.$anchorCell.pos;
    } else {
      var o;
      if (s = mp(r.$from), !s) return !1;
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
      const u = rt(e), d = e.tr;
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
      }), a[0]), r instanceof te && d.setSelection(new te(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)), n(d);
    }
    return !0;
  };
}
function Pp(t, e) {
  return function(n, r) {
    if (!Ge(n)) return !1;
    const s = Or(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const i = n.tr;
      n.selection instanceof te ? n.selection.forEachCell((o, l) => {
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
function $p(t) {
  return function(e, n) {
    if (!Ge(e)) return !1;
    if (n) {
      const r = Ce(e.schema), s = rt(e), i = e.tr, o = s.map.cellsInRect(t == "column" ? {
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
function No(t, e, n) {
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
function Tn(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? $p(t) : function(n, r) {
    if (!Ge(n)) return !1;
    if (r) {
      const s = Ce(n.schema), i = rt(n), o = n.tr, l = No("row", i, s), a = No("column", i, s), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, u = t == "column" ? {
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
Tn("row", { useDeprecatedLogic: !0 });
Tn("column", { useDeprecatedLogic: !0 });
const Fp = Tn("cell", { useDeprecatedLogic: !0 });
function _p(t, e) {
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
function To(t) {
  return function(e, n) {
    if (!Ge(e)) return !1;
    const r = _p(Or(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(V.between(s, yp(s))).scrollIntoView());
    }
    return !0;
  };
}
function Bp(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function Yn(t, e) {
  const n = t.selection;
  if (!(n instanceof te)) return !1;
  if (e) {
    const r = t.tr, s = Ce(t.schema).cell.createAndFill().content;
    n.forEachCell((i, o) => {
      i.content.eq(s) || r.replace(r.mapping.map(o + 1), r.mapping.map(o + i.nodeSize - 1), new O(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function Hp(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const s = e.child(0), i = s.type.spec.tableRole, o = s.type.schema, l = [];
  if (i == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const u = a ? 0 : Math.max(0, n - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (u || d) && (c = Ds(Ce(o).row, new O(c, u, d)).content), l.push(c);
  }
  else if (i == "cell" || i == "header_cell") l.push(n || r ? Ds(Ce(o).row, new O(e, n, r)).content : e);
  else return null;
  return Wp(o, l);
}
function Wp(t, e) {
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
    if (s >= e.length && e.push(N.empty), n[s] < r) {
      const i = Ce(t).cell.createAndFill(), o = [];
      for (let l = n[s]; l < r; l++) o.push(i);
      e[s] = e[s].append(N.from(o));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Ds(t, e) {
  const n = t.createAndFill();
  return new Ml(n).replace(0, n.content.size, e).doc;
}
function Vp({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const i = [], o = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let u = i[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(zt(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r), f.content)), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) i[l + h] = (i[l + h] || 0) + f.attrs.colspan;
      }
      o.push(N.from(c));
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
      i.push(N.from(a));
    }
    n = i, e = s;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function Up(t, e, n, r, s, i, o) {
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
    const f = a.row.create(null, N.from(d)), h = [];
    for (let m = e.height; m < i; m++) h.push(f);
    t.insert(t.mapping.slice(o).map(r + n.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Mo(t, e, n, r, s, i, o, l) {
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
function Ro(t, e, n, r, s, i, o, l) {
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
function Io(t, e, n, r, s) {
  let i = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!i) throw new Error("No table found");
  let o = ie.get(i);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = t.tr;
  let f = 0;
  function h() {
    if (i = n ? d.doc.nodeAt(n - 1) : d.doc, !i) throw new Error("No table found");
    o = ie.get(i), f = d.mapping.maps.length;
  }
  Up(d, o, i, n, c, u, f) && h(), Mo(d, o, i, n, a, c, l, f) && h(), Mo(d, o, i, n, a, c, u, f) && h(), Ro(d, o, i, n, l, u, a, f) && h(), Ro(d, o, i, n, l, u, c, f) && h();
  for (let m = l; m < u; m++) {
    const g = o.positionAt(m, a, i), y = o.positionAt(m, c, i);
    d.replace(d.mapping.slice(f).map(g + n), d.mapping.slice(f).map(y + n), new O(s.rows[m - l], 0, 0));
  }
  h(), d.setSelection(new te(d.doc.resolve(n + o.positionAt(l, a, i)), d.doc.resolve(n + o.positionAt(u - 1, c - 1, i)))), e(d);
}
const Kp = af({
  ArrowLeft: Xn("horiz", -1),
  ArrowRight: Xn("horiz", 1),
  ArrowUp: Xn("vert", -1),
  ArrowDown: Xn("vert", 1),
  "Shift-ArrowLeft": Qn("horiz", -1),
  "Shift-ArrowRight": Qn("horiz", 1),
  "Shift-ArrowUp": Qn("vert", -1),
  "Shift-ArrowDown": Qn("vert", 1),
  Backspace: Yn,
  "Mod-Backspace": Yn,
  Delete: Yn,
  "Mod-Delete": Yn
});
function or(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Xn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    if (i instanceof te) return or(n, r, q.near(i.$headCell, e));
    if (t != "horiz" && !i.empty) return !1;
    const o = Fa(s, t, e);
    if (o == null) return !1;
    if (t == "horiz") return or(n, r, q.near(n.doc.resolve(i.head + e), e));
    {
      const l = n.doc.resolve(o), a = Oa(l, t, e);
      let c;
      return a ? c = q.near(a, 1) : e < 0 ? c = q.near(n.doc.resolve(l.before(-1)), -1) : c = q.near(n.doc.resolve(l.after(-1)), 1), or(n, r, c);
    }
  };
}
function Qn(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    let o;
    if (i instanceof te) o = i;
    else {
      const a = Fa(s, t, e);
      if (a == null) return !1;
      o = new te(n.doc.resolve(a));
    }
    const l = Oa(o.$headCell, t, e);
    return l ? or(n, r, new te(o.$anchorCell, l)) : !1;
  };
}
function qp(t, e) {
  const n = t.state.doc, r = Dt(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new te(r))), !0) : !1;
}
function Jp(t, e, n) {
  if (!Ge(t.state)) return !1;
  let r = Hp(n);
  const s = t.state.selection;
  if (s instanceof te) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [N.from(Ds(Ce(t.state.schema).cell, n))]
    });
    const i = s.$anchorCell.node(-1), o = s.$anchorCell.start(-1), l = ie.get(i).rectBetween(s.$anchorCell.pos - o, s.$headCell.pos - o);
    return r = Vp(r, l.right - l.left, l.bottom - l.top), Io(t.state, t.dispatch, o, l, r), !0;
  } else if (r) {
    const i = Or(t.state), o = i.start(-1);
    return Io(t.state, t.dispatch, o, ie.get(i.node(-1)).findCell(i.pos - o), r), !0;
  } else return !1;
}
function Gp(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Oo(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof te)
    i(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Dt(t.state.selection.$anchor)) != null && ((n = hs(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos)
    i(s, e), e.preventDefault();
  else if (!r) return;
  function i(a, c) {
    let u = hs(t, c);
    const d = pt.getState(t.state) == null;
    if (!u || !oi(a, u)) if (d) u = a;
    else return;
    const f = new te(a, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(pt, a.pos), t.dispatch(h);
    }
  }
  function o() {
    t.root.removeEventListener("mouseup", o), t.root.removeEventListener("dragstart", o), t.root.removeEventListener("mousemove", l), pt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(pt, -1));
  }
  function l(a) {
    const c = a, u = pt.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Oo(t, c.target) != r && (d = hs(t, e), !d))
      return o();
    d && i(d, c);
  }
  t.root.addEventListener("mouseup", o), t.root.addEventListener("dragstart", o), t.root.addEventListener("mousemove", l);
}
function Fa(t, e, n) {
  if (!(t.state.selection instanceof V)) return null;
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
function Oo(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function hs(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: s } = n;
  return r >= 0 && Dt(t.state.doc.resolve(r)) || Dt(t.state.doc.resolve(s));
}
var Yp = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), zs(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, zs(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function zs(t, e, n, r, s, i) {
  let o = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: h, colwidth: m } = c.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = s == f ? i : m && m[g], x = y ? y + "px" : "";
        if (o += y || r, y || (l = !1), a)
          a.style.width != x && (a.style.width = x), a = a.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = x, e.appendChild(v);
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
const Oe = new Ke("tableColumnResizing");
function Xp({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = Yp, lastColumnResizable: s = !0 } = {}) {
  const i = new nt({
    key: Oe,
    state: {
      init(o, l) {
        var a;
        const c = (a = i.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, u = Ce(l.schema).table.name;
        return r && c && (c[u] = (d, f) => new r(d, n, f)), new Qp(-1, !1);
      },
      apply(o, l) {
        return l.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const l = Oe.getState(o);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, l) => {
          Zp(o, l, t, s);
        },
        mouseleave: (o) => {
          em(o);
        },
        mousedown: (o, l) => {
          tm(o, l, e, n);
        }
      },
      decorations: (o) => {
        const l = Oe.getState(o);
        if (l && l.activeHandle > -1) return om(o, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var Qp = class lr {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Oe);
    if (r && r.setHandle != null) return new lr(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new lr(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return js(e.doc.resolve(s)) || (s = -1), new lr(s, n.dragging);
    }
    return n;
  }
};
function Zp(t, e, n, r) {
  if (!t.editable) return;
  const s = Oe.getState(t.state);
  if (s && !s.dragging) {
    const i = rm(e.target);
    let o = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= n ? o = jo(t, e, "left", n) : a - e.clientX <= n && (o = jo(t, e, "right", n));
    }
    if (o != s.activeHandle) {
      if (!r && o !== -1) {
        const l = t.state.doc.resolve(o), a = l.node(-1), c = ie.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      _a(t, o);
    }
  }
}
function em(t) {
  if (!t.editable) return;
  const e = Oe.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && _a(t, -1);
}
function tm(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const i = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, o = Oe.getState(t.state);
  if (!o || o.activeHandle == -1 || o.dragging) return !1;
  const l = t.state.doc.nodeAt(o.activeHandle), a = nm(t, o.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Oe, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(d) {
    i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", u);
    const f = Oe.getState(t.state);
    f?.dragging && (sm(t, f.activeHandle, Do(f.dragging, d, n)), t.dispatch(t.state.tr.setMeta(Oe, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = Oe.getState(t.state);
    if (f && f.dragging) {
      const h = Do(f.dragging, d, n);
      zo(t, f.activeHandle, h, r);
    }
  }
  return zo(t, o.activeHandle, a, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function nm(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const i = t.domAtPos(e);
  let o = i.node.childNodes[i.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (o -= r[a], l--);
  return o / l;
}
function rm(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function jo(t, e, n, r) {
  const s = n == "right" ? -r : r, i = t.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!i) return -1;
  const { pos: o } = i, l = Dt(t.state.doc.resolve(o));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ie.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Do(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function _a(t, e) {
  t.dispatch(t.state.tr.setMeta(Oe, { setHandle: e }));
}
function sm(t, e, n) {
  const r = t.state.doc.resolve(e), s = r.node(-1), i = ie.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < i.height; c++) {
    const u = c * i.width + l;
    if (c && i.map[u] == i.map[u - i.width]) continue;
    const d = i.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - i.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const m = f.colwidth ? f.colwidth.slice() : im(f.colspan);
    m[h] = n, a.setNodeMarkup(o + d, null, {
      ...f,
      colwidth: m
    });
  }
  a.docChanged && t.dispatch(a);
}
function zo(t, e, n, r) {
  const s = t.state.doc.resolve(e), i = s.node(-1), o = s.start(-1), l = ie.get(i).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && zs(i, a.firstChild, a, r, l, n);
}
function im(t) {
  return Array(t).fill(0);
}
function om(t, e) {
  const n = [], r = t.doc.resolve(e), s = r.node(-1);
  if (!s) return ae.empty;
  const i = ie.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < i.height; c++) {
    const u = l + c * i.width;
    if ((l == i.width - 1 || i.map[u] != i.map[u + 1]) && (c == 0 || i.map[u] != i.map[u - i.width])) {
      var a;
      const d = i.map[u], f = o + d + s.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Oe.getState(t)) === null || a === void 0) && a.dragging && n.push(_e.node(o + d, o + d + s.nodeAt(d).nodeSize, { class: "column-resize-dragging" })), n.push(_e.widget(f, h));
    }
  }
  return ae.create(t.doc, n);
}
function lm({ allowTableNodeSelection: t = !1 } = {}) {
  return new nt({
    key: pt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(pt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: i } = e.mapping.mapResult(n);
        return s ? null : i;
      }
    },
    props: {
      decorations: wp,
      handleDOMEvents: { mousedown: Gp },
      createSelectionBetween(e) {
        return pt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: qp,
      handleKeyDown: Kp,
      handlePaste: Jp
    },
    appendTransaction(e, n, r) {
      return Cp(r, La(r, n), t);
    }
  });
}
var Ba = Dn.create({
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
}), Ha = Dn.create({
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
}), Wa = Dn.create({
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
function Ls(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Lo(t, e, n, r, s, i) {
  var o;
  let l = 0, a = !0, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: m, colwidth: g } = u.child(f).attrs;
      for (let y = 0; y < m; y += 1, h += 1) {
        const x = s === h ? i : g && g[y], v = x ? `${x}px` : "";
        if (l += x || r, x || (a = !1), c) {
          if (c.style.width !== v) {
            const [k, C] = Ls(r, x);
            c.style.setProperty(k, C);
          }
          c = c.nextSibling;
        } else {
          const k = document.createElement("col"), [C, w] = Ls(r, x);
          k.style.setProperty(C, w), e.appendChild(k);
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
var am = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Lo(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Lo(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function cm(t, e, n, r) {
  let s = 0, i = !0;
  const o = [], l = t.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: m } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = n === f ? r : m && m[g];
      s += y || e, y || (i = !1);
      const [x, v] = Ls(e, y);
      o.push(["col", { style: `${x}: ${v}` }]);
    }
  }
  const a = i ? `${s}px` : "", c = i ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: a, tableMinWidth: c };
}
function Po(t, e) {
  return t.createAndFill();
}
function um(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function dm(t, e, n, r, s) {
  const i = um(t), o = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Po(i.cell);
    if (u && l.push(u), r) {
      const d = Po(i.header_cell);
      d && o.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(i.row.createChecked(null, r && c === 0 ? o : l));
  return i.table.createChecked(null, a);
}
function fm(t) {
  return t instanceof te;
}
var Zn = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!fm(e))
    return !1;
  let n = 0;
  const r = ka(e.ranges[0].$from, (i) => i.type.name === "table");
  return r?.node.descendants((i) => {
    if (i.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(i.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, hm = "";
function pm(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function mm(t, e, n = {}) {
  var r;
  const s = (r = n.cellLineSeparator) != null ? r : hm;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const i = [];
  t.content.forEach((m) => {
    const g = [];
    m.content && m.content.forEach((y) => {
      let x = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? x = y.content.map((w) => e.renderChildren(w)).join(s) : x = y.content ? e.renderChildren(y.content) : "";
      const v = pm(x), k = y.type === "tableHeader";
      g.push({ text: v, isHeader: k });
    }), i.push(g);
  });
  const o = i.reduce((m, g) => Math.max(m, g.length), 0);
  if (o === 0)
    return "";
  const l = new Array(o).fill(0);
  i.forEach((m) => {
    var g;
    for (let y = 0; y < o; y += 1) {
      const v = (((g = m[y]) == null ? void 0 : g.text) || "").length;
      v > l[y] && (l[y] = v), l[y] < 3 && (l[y] = 3);
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
var gm = mm, Va = Dn.create({
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
      View: am,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = cm(t, this.options.cellMinWidth), i = e.style;
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
  renderMarkdown: (t, e) => gm(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: i }) => {
        const o = dm(i.schema, t, e, n);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(V.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Ep(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Np(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Mp(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Ip(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Op(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Dp(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Bp(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Ao(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Eo(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Tn("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Tn("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Fp(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Ao(t, e) ? !0 : Eo(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Pp(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => To(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => To(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && La(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = te.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: Zn,
      "Mod-Backspace": Zn,
      Delete: Zn,
      "Mod-Delete": Zn
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Xp({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      lm({
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
      tableRole: Nn(Zt(t, "tableRole", e))
    };
  }
});
Je.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Va.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Ba.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Ha.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Wa.configure(this.options.tableRow)), t;
  }
});
function he(t) {
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
function ym({ editor: t }) {
  const [e, n] = Fe(!1);
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
        ps,
        {
          label: "Paragraph",
          onClick: () => {
            t.chain().focus().setParagraph().run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        ps,
        {
          label: "Heading 1",
          onClick: () => {
            t.chain().focus().toggleHeading({ level: 1 }).run(), n(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        ps,
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
function ps({
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
function hn() {
  return /* @__PURE__ */ p.jsx("div", { className: "w-px h-5 bg-gray-300 mx-1" });
}
function bm({ editor: t }) {
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50", children: [
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Bold",
        icon: "fa-solid fa-bold",
        onClick: () => t.chain().focus().toggleBold().run(),
        active: t.isActive("bold")
      }
    ),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Italic",
        icon: "fa-solid fa-italic",
        active: t.isActive("italic"),
        onClick: () => t.chain().focus().toggleItalic().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Underline",
        icon: "fa-solid fa-underline",
        active: t.isActive("underline"),
        onClick: () => t.chain().focus().toggleUnderline().run()
      }
    ),
    /* @__PURE__ */ p.jsx(hn, {}),
    /* @__PURE__ */ p.jsx(ym, { editor: t }),
    /* @__PURE__ */ p.jsx(hn, {}),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Bullet List",
        icon: "fa-solid fa-list-ul",
        active: t.isActive("bulletList"),
        onClick: () => t.chain().focus().toggleBulletList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        active: t.isActive("orderedList"),
        onClick: () => t.chain().focus().toggleOrderedList().run()
      }
    ),
    /* @__PURE__ */ p.jsx(hn, {}),
    /* @__PURE__ */ p.jsx(
      he,
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
      he,
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
    /* @__PURE__ */ p.jsx(hn, {}),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Insert Table",
        icon: "fa-solid fa-table",
        active: t.isActive("table"),
        onClick: () => t.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run()
      }
    ),
    t.isActive("table") && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Add Row Above",
          icon: "fa-solid fa-arrow-up",
          disabled: !t.can().addRowBefore(),
          onClick: () => t.chain().focus().addRowBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Add Row Below",
          icon: "fa-solid fa-arrow-down",
          disabled: !t.can().addRowAfter(),
          onClick: () => t.chain().focus().addRowAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Add Column Left",
          icon: "fa-solid fa-arrow-left",
          disabled: !t.can().addColumnBefore(),
          onClick: () => t.chain().focus().addColumnBefore().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Add Column Right",
          icon: "fa-solid fa-arrow-right",
          disabled: !t.can().addColumnAfter(),
          onClick: () => t.chain().focus().addColumnAfter().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Delete Row",
          icon: "fa-solid fa-minus",
          disabled: !t.can().deleteRow(),
          onClick: () => t.chain().focus().deleteRow().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Delete Column",
          icon: "fa-solid fa-trash",
          disabled: !t.can().deleteColumn(),
          onClick: () => t.chain().focus().deleteColumn().run()
        }
      ),
      /* @__PURE__ */ p.jsx(
        he,
        {
          title: "Delete Table",
          icon: "fa-solid fa-xmark",
          disabled: !t.can().deleteTable(),
          onClick: () => t.chain().focus().deleteTable().run()
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(hn, {}),
    /* @__PURE__ */ p.jsx(
      he,
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
      he,
      {
        title: "Undo",
        icon: "fa-solid fa-rotate-left",
        disabled: !t.can().undo(),
        onClick: () => t.chain().focus().undo().run()
      }
    ),
    /* @__PURE__ */ p.jsx(
      he,
      {
        title: "Redo",
        icon: "fa-solid fa-rotate-right",
        disabled: !t.can().redo(),
        onClick: () => t.chain().focus().redo().run()
      }
    )
  ] });
}
function xm({
  value: t,
  onChange: e,
  disabled: n
}) {
  const r = ec({
    extensions: [
      nc.configure({
        link: {
          openOnClick: !1,
          autolink: !0
        }
      }),
      lp,
      up,
      Va.configure({ resizable: !0 }),
      Wa,
      Ha,
      Ba
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
  return Pe(() => {
    if (!r) return;
    const s = r.getHTML();
    t !== void 0 && t !== s && r.commands.setContent(t, {
      emitUpdate: !1
    });
  }, [t, r]), r ? /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: `
        w-full rounded-lg border border-gray-200 transition-all duration-300
        backdrop-blur-sm text-gray-800
        ${n ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed opacity-60" : "bg-white border-gray-300 hover:border-gray-400 focus-within:ring-1 focus-within:ring-indigo-500"}
      `,
      children: [
        !n && /* @__PURE__ */ p.jsx(bm, { editor: r }),
        /* @__PURE__ */ p.jsxs("div", { className: "resize-y overflow-auto min-h-[200px] max-h-[500px]", children: [
          /* @__PURE__ */ p.jsx(
            tc,
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
function zn({
  field: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: i = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l
}) {
  const {
    executeFieldMethod: a,
    handleFileUpload: c,
    handleKeyDown: u,
    setSearch: d,
    setOpen: f,
    setIsFocused: h,
    handleInputChange: m,
    handleSelect: g,
    handlePersist: y,
    setLoading: x,
    removeFile: v,
    baseInputClasses: k,
    focusClasses: C,
    labelClasses: w,
    search: I,
    highlightedIndex: B,
    options: D,
    isDisabled: F,
    key: A,
    filteredOptions: z,
    open: U,
    listRef: ee,
    triggerRef: G,
    isFocused: X,
    exactMatch: fe,
    loading: st
  } = Jc({
    field: t,
    formik: e,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: i,
    ...o && { optionsOverride: o },
    ...l && { setFieldOptions: l }
  }), He = (We) => We.icon ? /* @__PURE__ */ p.jsx("i", { className: We.icon }) : null;
  switch (t.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const S = e.values[A] ?? "", j = I !== "" ? I : ar(D, S) ?? String(S ?? "");
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { ref: G, children: /* @__PURE__ */ p.jsx(
          "input",
          {
            className: `${k} ${C}`,
            value: j,
            placeholder: t.placeholder || "Type to search...",
            onChange: m,
            onBlur: () => {
              setTimeout(() => f(!1), 150);
            },
            onKeyDown: (E) => {
              if (E.key === "Enter") {
                if (E.preventDefault(), fe) {
                  const [K] = fe;
                  e.setFieldValue(A, K), y(K, t, i);
                } else I.trim() && (e.setFieldValue(A, I.trim()), y(I.trim(), t, i));
                f(!1);
                return;
              }
              u(E, !0);
            },
            disabled: F
          }
        ) }),
        /* @__PURE__ */ p.jsx(Ps, { anchorRef: G, open: U && !F, children: /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: ee,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: z.length > 0 && fe ? z.map(([E, K], Y) => /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `${A}-${E}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${B === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => g(E),
                children: K
              },
              E
            )) : /* @__PURE__ */ p.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${j}" ` })
          }
        ) }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (t.multiple === !0) {
        const S = e.values[A];
        return /* @__PURE__ */ p.jsx(
          Fi,
          {
            field: t,
            isDisabled: F,
            handleKeyDown: u,
            valueArray: S,
            labelClasses: w,
            listRef: ee,
            search: I,
            filteredOptions: z,
            highlightedIndex: B,
            setSearch: d,
            formik: e,
            executeFieldMethod: a,
            handlePersist: y,
            module_refid: i,
            options: D,
            triggerRef: G,
            open: U,
            setOpen: f
          }
        );
      }
      return /* @__PURE__ */ p.jsx(
        $i,
        {
          field: t,
          isDisabled: F,
          handleKeyDown: u,
          labelClasses: w,
          listRef: ee,
          search: I,
          filteredOptions: z,
          highlightedIndex: B,
          setSearch: d,
          formik: e,
          executeFieldMethod: a,
          handlePersist: y,
          module_refid: i,
          options: D,
          triggerRef: G,
          open: U,
          setOpen: f
        }
      );
    }
    case "richtextarea":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx(
          xm,
          {
            value: e.values[A] ?? "",
            disabled: F,
            onChange: (S) => {
              e.setFieldValue(A, S), y(S, t, i), a("onChange", t, A);
            }
          }
        ),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    case "textarea":
      return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              id: A,
              className: `${k} ${C} min-h-[120px] resize-none`,
              onFocus: () => h(!0),
              name: A,
              value: e.values[A],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(A, S.target.value), y(S.target.value, t, i), a("onChange", t, `${A}`);
              },
              placeholder: t.placeholder,
              disabled: F
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] }) });
    case "select":
      if (t.multiple === !0) {
        const S = e.values[A];
        return /* @__PURE__ */ p.jsx(
          Fi,
          {
            field: t,
            isDisabled: F,
            handleKeyDown: u,
            valueArray: S,
            labelClasses: w,
            listRef: ee,
            search: I,
            filteredOptions: z,
            highlightedIndex: B,
            setSearch: d,
            formik: e,
            executeFieldMethod: a,
            handlePersist: y,
            module_refid: i,
            options: D,
            triggerRef: G,
            open: U,
            setOpen: f
          }
        );
      }
      if (t.search)
        return /* @__PURE__ */ p.jsx(
          $i,
          {
            field: t,
            isDisabled: F,
            handleKeyDown: u,
            labelClasses: w,
            listRef: ee,
            search: I,
            filteredOptions: z,
            highlightedIndex: B,
            setSearch: d,
            formik: e,
            executeFieldMethod: a,
            handlePersist: y,
            module_refid: i,
            options: D,
            triggerRef: G,
            open: U,
            setOpen: f
          }
        );
      const We = jc(D);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              className: `${k} ${C} appearance-none ${F ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => h(!0),
              name: A,
              id: A,
              value: e.values[A],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(A, S.target.value), y(S.target.value, t, i), a("onChange", t, `${A}`);
              },
              disabled: F,
              children: [
                t?.["no-option"] !== "false" && !e.values[A] && /* @__PURE__ */ p.jsx("option", { value: "", disabled: !0, children: t?.["no-option"] || `Please select ${t.label}` }),
                /* @__PURE__ */ p.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                Object.entries(We).map(
                  ([S, j]) => S === "__ungrouped__" ? j.map((E) => /* @__PURE__ */ p.jsx("option", { value: E.value, className: "py-2", children: E.label }, E.value)) : /* @__PURE__ */ p.jsx("optgroup", { label: S, children: j.map((E) => /* @__PURE__ */ p.jsx("option", { value: E.value, children: E.label }, E.value)) }, S)
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
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: `flex ${D.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: D.map((S) => /* @__PURE__ */ p.jsxs(
          "label",
          {
            htmlFor: `${A}-${S.value}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  id: `${A}-${S.value}`,
                  type: "radio",
                  name: A,
                  checked: e.values[A] === S.value,
                  value: S.value,
                  onChange: (j) => {
                    e.setFieldValue(A, j.target.value), y(j.target.value, t, i), a("onChange", t, `${A}-${S.value}`);
                  },
                  onBlur: e.handleBlur,
                  disabled: F,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              S.label
            ]
          },
          S.value
        )) }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[A]) })
      ] });
    case "checkbox": {
      const S = t.multiple === !0, j = e.values[A];
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 ml-1", children: D.map((E) => {
          const K = S ? Array.isArray(j) && j.includes(E.value) : j === E.value;
          return /* @__PURE__ */ p.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    id: `${A}-${E.value}`,
                    type: "checkbox",
                    checked: K,
                    onChange: (Y) => {
                      let R;
                      if (S) {
                        const L = Array.isArray(j) ? j : [];
                        R = Y.target.checked ? [...L, E.value] : L.filter((H) => H !== E.value);
                      } else
                        R = Y.target.checked ? E.value : "false";
                      e.setFieldValue(A, R), y(R, t, i), a("onChange", t, `${A}-${E.value}`);
                    },
                    onBlur: e.handleBlur,
                    disabled: F,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                E.label
              ]
            },
            E.value
          );
        }) }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(e.errors[A]) })
      ] });
    }
    case "tags": {
      const S = e.values[A] ?? [], j = I.trim(), E = (R) => {
        if (!F && R && !S.includes(R)) {
          let L = [...S, R];
          e.setFieldValue(A, L), y(L, t, i), d("");
        }
      }, K = (R) => {
        let L = S.filter((H) => H !== R);
        e.setFieldValue(
          A,
          L
        ), y(L, t, i);
      }, Y = (R) => ar(D, R) ?? R;
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: `${k} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${F ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !F && document.getElementById(`${A}-input`)?.focus(),
            children: [
              S.map((R) => /* @__PURE__ */ p.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ p.jsx("span", { className: "text-indigo-700", children: Y(R) }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (L) => {
                          L.stopPropagation(), F || K(R);
                        },
                        onMouseDown: (L) => L.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                R
              )),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  id: `${A}-input`,
                  type: "text",
                  value: I,
                  onChange: (R) => d(R.target.value),
                  onKeyDown: (R) => {
                    (R.key === "Enter" || R.key === ",") && (R.preventDefault(), E(j));
                  },
                  placeholder: S.length === 0 ? t.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: F
                }
              )
            ]
          }
        ),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    }
    case "camera":
    case "camera2":
    case "photo":
    case "avatar":
      return /* @__PURE__ */ p.jsx(
        Qo,
        {
          formik: e,
          field: t,
          sqlOpsUrls: r,
          module_refid: i
        }
      );
    case "attachment":
    case "file":
      const T = t.multiple === !0, $ = t.max !== void 0 ? Number(t.max) : 1 / 0, Q = Array.isArray(e.values[A]) ? e.values[A] : e.values[A] ? [e.values[A]] : [];
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative mb-1", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: He(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: A,
              type: "file",
              accept: t.accept,
              className: `${k} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: A,
              multiple: T,
              onChange: (S) => {
                const j = Jo({
                  e: S,
                  existingFiles: Q,
                  maxFiles: $,
                  maxFileSize: t.file_size
                });
                j && (j && c(j), a("onChange", t, A), S.currentTarget.value = "");
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder,
              disabled: F
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2", children: Q.map((S) => /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ p.jsx(
            Xc,
            {
              sqlOpsUrls: r,
              filePath: S
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => v(S),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, S)) }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    case "json":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              id: A,
              name: A,
              value: e.values[A],
              onChange: (S) => {
                e.setFieldValue(A, S.target.value), y(S.target.value, t, i), a("onChange", t, `${A}`);
              },
              onBlur: e.handleBlur,
              placeholder: t.placeholder || "Enter valid JSON",
              disabled: F,
              className: `${k} ${C} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    case "date": {
      const S = Uc(t.max);
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
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
                  id: A,
                  type: "date",
                  name: A,
                  min: t.min,
                  max: S,
                  value: e.values[A] ?? "",
                  onChange: (j) => {
                    e.setFieldValue(A, j.target.value), y(j.target.value, t, i), a("onChange", t, `${A}`);
                  },
                  onBlur: e.handleBlur,
                  placeholder: t.placeholder,
                  disabled: F,
                  className: `${k} ${C} ${t.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    }
    case "geolocation": {
      const S = e.values[A] || "", j = async () => {
        try {
          const E = await bs();
          e.setFieldValue(A, E), y(E, t, i);
        } catch (E) {
          console.error(E), e.setFieldError(A, "Failed to fetch location");
        } finally {
          x(!1);
        }
      };
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              value: S,
              readOnly: !0,
              className: `${k} ${C}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: j,
              disabled: st,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: st ? /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ p.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: He(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: A,
              type: "number",
              className: `${k} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: A,
              value: e.values[A],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(A, S.target.value), y(S.target.value, t, i), a("onChange", t, `${A}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: F,
              min: t.min,
              max: t.max
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
    default:
      return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: w, children: [
          t.label,
          t.required && /* @__PURE__ */ p.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          t.icon && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: He(t) }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: A,
              type: t.type || "text",
              className: `${k} ${C} ${t.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: A,
              value: e.values[A],
              onBlur: e.handleBlur,
              onChange: (S) => {
                e.setFieldValue(A, S.target.value), y(S.target.value, t, i), a("onChange", t, `${A}`);
              },
              step: t.step,
              placeholder: t.placeholder,
              disabled: F,
              minLength: t.minlength,
              maxLength: t.maxlength
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${X ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        e.touched[A] && e.errors[A] && /* @__PURE__ */ p.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[A]) })
      ] });
  }
}
function $o({ title: t, children: e, isFirst: n }) {
  const [r, s] = Fe(n);
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
function jr({
  fields: t,
  formik: e,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: i,
  fieldOptions: o,
  setFieldOptions: l
}) {
  const a = tr(
    () => t?.find((u) => u.type === "avatar"),
    [t]
  ), c = a ? "lg:col-span-10" : "lg:col-span-12";
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white min-h-3/10 ", children: /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 ", children: [
    a && /* @__PURE__ */ p.jsx("div", { className: "lg:col-span-2 flex flex-col items-center min-h-0 max-h-40 overflow-y-auto ", children: /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `wrapper-${a.name}`,
        className: `
                               
                          flex items-center justify-center
                         ${a.hidden ? "hidden" : ""}

                            `,
        children: /* @__PURE__ */ p.jsx(
          Qo,
          {
            formik: e,
            field: a,
            sqlOpsUrls: r,
            module_refid: i
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: `${c} min-h-0 max-h-40  overflow-y-auto `, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-2", children: t?.map((u, d) => {
      if (u.type === "avatar") return null;
      const f = In(u.hidden);
      return /* @__PURE__ */ p.jsx("div", { id: `wrapper-${u.name}`, className: `transition-colors duration-200 col-span-12 md:col-span-6 
                                ${Mn[Rn(Number(u.width))] || "lg:col-span-4"}
                                ${f ? "hidden" : ""}

                                `, children: /* @__PURE__ */ p.jsx(
        zn,
        {
          refid: s,
          module_refid: i,
          sqlOpsUrls: r,
          field: u,
          formik: e,
          methods: n,
          setFieldOptions: l,
          ...o?.[u.name] ? { optionsOverride: o[u.name] } : {}
        },
        u?.name || d
      ) }, u.name);
    }) }) })
  ] }) });
}
function wm({
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
  const { common: u = [], ...d } = e, [f, h] = xe.useState({}), m = (v, k) => {
    h((C) => ({
      ...C,
      [v]: k
    }));
  }, { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const v = {}, k = {};
    return Object.values(e).flat().forEach((C) => {
      wn([C], v, k, n, c, l?.operation);
    }), {
      initialValues: v,
      validationSchema: k
    };
  }, [e, n, c, l?.operation]), x = Cr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Ee.object().shape(y),
    onSubmit: (v) => {
      let k = Object.values(e).flat(), C = kr(v, k);
      r(C);
    }
  });
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx($o, { title: "Common", isFirst: !0, children: /* @__PURE__ */ p.jsx(
        jr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: x,
          methods: i,
          setFieldOptions: m,
          fieldOptions: f
        }
      ) }),
      d && Object.entries(d).map(([v, k], C) => /* @__PURE__ */ p.jsx($o, { title: v, isFirst: C === 0 && u.length === 0, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: k.map((w, I) => {
        const B = In(w.hidden), D = `
                        col-span-12 md:col-span-6
                        ${Mn[Rn(Number(w.width))] || "lg:col-span-4"}
                        ${B ? "hidden" : ""}
                      `;
        if (w.type === "static" || w.type === "static2") {
          const F = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${F ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${F ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
            className: D,
            children: /* @__PURE__ */ p.jsx(
              zn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: o,
                field: w,
                formik: x,
                methods: i,
                setFieldOptions: m,
                ...f[w.name] ? { optionsOverride: f[w.name] } : {}
              },
              w.name
            )
          },
          w?.name ?? `field-${I}`
        );
      }) }) }, v))
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
function vm({
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
  const { common: d = [], ...f } = e, h = Object.keys(f), [m, g] = xe.useState(0), [y, x] = xe.useState({}), v = (z, U) => {
    x((ee) => ({
      ...ee,
      [z]: U
    }));
  }, { initialValues: k, validationSchema: C, stepperSchemas: w } = xe.useMemo(() => {
    const z = {}, U = {}, ee = {};
    return a ? Object.entries(e).forEach(([G, X]) => {
      const fe = {};
      wn(X, z, fe, n, u, l?.operation), ee[G] = fe;
    }) : Object.entries(e).forEach(([G, X]) => {
      wn(X, z, U, n, u, l?.operation);
    }), {
      initialValues: z,
      validationSchema: U,
      stepperSchemas: ee
    };
  }, [e, n, a, u, l?.operation]), I = h[m] ?? null, B = a && I ? w[I] ?? {} : C, D = Cr({
    initialValues: k,
    enableReinitialize: !0,
    validationSchema: Ee.object().shape(B),
    onSubmit: (z) => {
      let U = Object.values(e).flat(), ee = kr(z, U);
      a ? (m < h.length - 1 && g((G) => G + 1), m === h.length - 1 && r(ee)) : r(ee);
    }
  }), F = async (z) => {
    if (z.preventDefault(), !a) {
      const U = await D.validateForm();
      if (Object.keys(U).length > 0) {
        alert("Please fill all required fields before submitting."), D.setTouched(
          Object.keys(U).reduce((ee, G) => ({ ...ee, [G]: !0 }), {})
        );
        return;
      }
    }
    D.handleSubmit(z);
  }, A = () => {
    g((z) => z > 0 ? z - 1 : z);
  };
  return /* @__PURE__ */ p.jsx("div", { className: " max-w-full  m-4", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: F, className: "w-full mx-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "relative", children: /* @__PURE__ */ p.jsxs("div", { className: "relative  rounded-t-lg px-1 pt-1  shadow-inner", children: [
      d.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "p-3", children: /* @__PURE__ */ p.jsx(
        jr,
        {
          refid: c,
          module_refid: u,
          sqlOpsUrls: l,
          fields: d,
          formik: D,
          methods: i,
          setFieldOptions: v,
          fieldOptions: y
        }
      ) }),
      /* @__PURE__ */ p.jsx("nav", { className: "relative flex bg-gray-100", children: h.map((z, U) => /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(U),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg  text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${m === U ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ p.jsx("span", { className: "relative z-10 flex items-center justify-center gap-2 capitalize", children: z })
        },
        z
      )) })
    ] }) }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "bg-white  border border-gray-100 border-t-0 rounded-b-lg p-3 animate-in fade-in duration-300",
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: I && f[I]?.map((z, U) => {
            const ee = In(z.hidden), G = `
                  col-span-12 md:col-span-6
                  ${Mn[Rn(Number(z.width))] || "lg:col-span-4"}
                  ${ee ? "hidden" : ""}
                `;
            if (z.type === "static" || z.type === "static2") {
              const X = z.type === "static";
              return /* @__PURE__ */ p.jsx(
                "div",
                {
                  id: `wrapper-${z.name}`,
                  className: "col-span-12",
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: ` bg-gray-100 ${X ? "mt-4" : "mt-3"}`,
                      children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                        "h2",
                        {
                          className: `${X ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                          children: z.label
                        }
                      ) }) })
                    }
                  )
                },
                z?.name
              );
            }
            return /* @__PURE__ */ p.jsx(
              "div",
              {
                id: `wrapper-${z.name}`,
                className: G,
                children: /* @__PURE__ */ p.jsx(
                  zn,
                  {
                    refid: c,
                    module_refid: u,
                    sqlOpsUrls: l,
                    field: z,
                    formik: D,
                    methods: i,
                    components: o,
                    setFieldOptions: v,
                    ...y[z.name] ? { optionsOverride: y[z.name] } : {}
                  },
                  z.name
                )
              },
              z?.name ?? `field-${U}`
            );
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: `mt-8 flex ${m > 0 ? "justify-between" : "justify-end"} space-x-3`, children: [
            m > 0 && /* @__PURE__ */ p.jsx("button", { onClick: A, type: "button", className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ", children: "Previous" }),
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
            /* @__PURE__ */ p.jsx("div", { className: "flex gap-1", children: h.map((z, U) => /* @__PURE__ */ p.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${U === m ? "bg-action w-6" : "bg-gray-300"}`
              },
              U
            )) })
          ] }) })
        ]
      },
      h[m]
    )
  ] }) });
}
function Sm({
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
  const c = Lc(e, o?.operation), [u, d] = xe.useState({}), f = (v, k) => {
    d((C) => ({
      ...C,
      [v]: k
    }));
  }, { commonFields: h, otherFields: m } = xe.useMemo(() => c.reduce(
    (v, k) => (k.group === "common" ? v.commonFields.push(k) : v.otherFields.push(k), v),
    { commonFields: [], otherFields: [] }
  ), [c]), { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const v = {}, k = {};
    return c.forEach((C) => {
      wn([C], v, k, n, a, o?.operation);
    }), {
      initialValues: v,
      validationSchema: k
    };
  }, [c, n]), x = Cr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Ee.object().shape(y),
    onSubmit: (v) => {
      let k = kr(v, c);
      r(k);
    }
  });
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4  mx-auto", children: [
    h.length > 0 && /* @__PURE__ */ p.jsx(
      jr,
      {
        refid: l,
        module_refid: a,
        sqlOpsUrls: o,
        fields: h,
        formik: x,
        methods: i,
        setFieldOptions: f,
        fieldOptions: u
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: m.map((v) => {
      const k = In(v.hidden), C = `col-span-12 md:col-span-6
    ${Mn[Rn(Number(v.width))] || "lg:col-span-4"}
    ${k ? "hidden" : ""}
  `;
      if (v.type === "static" || v.type === "static2") {
        const w = v.type === "static";
        return /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `wrapper-${v.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: ` bg-gray-100 ${w ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                  "h2",
                  {
                    className: `${w ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                    children: v.label
                  }
                ) }) })
              }
            )
          },
          v?.name
        );
      }
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          id: `wrapper-${v.name}`,
          className: C,
          children: /* @__PURE__ */ p.jsx(
            zn,
            {
              refid: l,
              module_refid: a,
              sqlOpsUrls: o,
              field: v,
              formik: x,
              methods: i,
              setFieldOptions: f,
              ...u[v.name] ? { optionsOverride: u[v.name] } : {}
            }
          )
        },
        v?.name
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
function Fo({ title: t, children: e }) {
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
  const { common: u = [], ...d } = e, [f, h] = xe.useState({}), m = (v, k) => {
    h((C) => ({
      ...C,
      [v]: k
    }));
  }, { initialValues: g, validationSchema: y } = xe.useMemo(() => {
    const v = {}, k = {};
    return Object.values(e).flat().forEach((C) => {
      wn([C], v, k, n, c, l?.operation);
    }), {
      initialValues: v,
      validationSchema: k
    };
  }, [e, n, c, l?.operation]), x = Cr({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Ee.object().shape(y),
    onSubmit: (v) => {
      let k = Object.values(e).flat(), C = kr(v, k);
      r(C);
    }
  });
  return /* @__PURE__ */ p.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white animate-in fade-in duration-300", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4 mx-auto", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
      u.length > 0 && /* @__PURE__ */ p.jsx(Fo, { title: "Common", children: /* @__PURE__ */ p.jsx(
        jr,
        {
          refid: a,
          module_refid: c,
          sqlOpsUrls: l,
          fields: u,
          formik: x,
          methods: i,
          setFieldOptions: m,
          fieldOptions: f
        }
      ) }),
      d && Object.entries(d).map(([v, k], C) => /* @__PURE__ */ p.jsx(Fo, { title: v, children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-12 gap-4", children: k.map((w, I) => {
        const B = In(w.hidden), D = `
                                            col-span-12 md:col-span-6
                                            ${Mn[Rn(Number(w.width))] || "lg:col-span-4"}
                                            ${B ? "hidden" : ""}
                                          `;
        if (w.type === "static" || w.type === "static2") {
          const F = w.type === "static";
          return /* @__PURE__ */ p.jsx(
            "div",
            {
              id: `wrapper-${w.name}`,
              className: "col-span-12",
              children: /* @__PURE__ */ p.jsx(
                "div",
                {
                  className: ` bg-gray-100 ${F ? "mt-4" : "mt-3"}`,
                  children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ p.jsx(
                    "h2",
                    {
                      className: `${F ? "text-base " : "text-sm"} font-semibold text-gray-800`,
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
            className: D,
            children: /* @__PURE__ */ p.jsx(
              zn,
              {
                refid: a,
                module_refid: c,
                sqlOpsUrls: l,
                components: o,
                field: w,
                formik: x,
                methods: i,
                setFieldOptions: m,
                ...f[w.name] ? { optionsOverride: f[w.name] } : {}
              },
              w.name
            )
          },
          w?.name ?? `field-${I}`
        );
      }) }) }, v))
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
function Im({
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
  let l = Ic(t);
  const a = t.endPoints, c = t?.source?.refid, u = Oc(t?.fields ?? {}, a?.operation), [d, f] = xe.useState(i ?? {}), h = xe.useMemo(() => zc(t.fields), [t.fields]);
  xe.useEffect(() => {
    let x = !0;
    return (async () => {
      try {
        const k = await bs();
        x && f((C) => ({
          ...C,
          ...Object.fromEntries(
            h.map((w) => [w, k])
          )
        }));
      } catch (k) {
        console.warn("Geo fetch failed", k);
      }
    })(), () => {
      x = !1;
    };
  }, [h]), xe.useEffect(() => {
    f((x) => ({
      ...x,
      ...i ?? {}
    }));
  }, [i]);
  const m = xe.useCallback(
    (x) => {
      x && Object.keys(x).length > 0 && f(x);
    },
    []
  );
  xe.useEffect(() => {
    let x = !0;
    return (async () => {
      const k = t?.source ?? {};
      if (!k?.type) {
        x && f({});
        return;
      }
      if (k.type === "method" && a?.operation !== "create") {
        const C = k.method, w = C ? e[C] : void 0;
        if (w)
          try {
            const I = await w();
            x && m(I);
          } catch (I) {
            console.error("Method execution failed:", I), x && f({});
          }
        else
          x && f({});
      }
      if (k.type === "api" && a?.operation !== "create")
        try {
          const C = {
            method: k.method || "GET",
            url: a?.baseURL + k.endpoint,
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            },
            ...k.method === "GET" ? { params: { refid: k.refid } } : { data: { refid: k.refid } }
          }, w = await ce(C);
          x && f(w.data ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), x && f({});
        }
      if (k.type === "sql" && k.refid && k.refid !== "0" && a?.operation !== "create" || a?.operation !== "create" && k.dbopsid) {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await qc.fetch(a, {
            source: {
              ...k,
              table: k.table,
              columns: k.columns,
              where: ut(k.where, {
                refid: c
              })
            },
            fields: Li(t.fields, a.operation)
          }, k?.dbopsid, t?.module_refid);
          x && f(C);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      x = !1;
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
  const g = async (x) => {
    const v = t?.source ?? {};
    let k = { ...x };
    if (h.length > 0) {
      const C = h.filter((w) => !x[w]);
      if (C.length > 0)
        try {
          const w = await bs();
          k = {
            ...x,
            ...Object.fromEntries(
              C.map((I) => [I, w])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (v.type === "method") {
      const C = v.method, w = C ? e[C] : void 0;
      if (w)
        try {
          const I = await w(k);
          if (s?.(I), o?.success?.(Yr(I)), e?.handleActions) {
            let B = a?.operation === "update" ? c : I?.data?.refid;
            const D = t?.gotolink?.replace(
              "{hashid}",
              String(B)
            );
            e.handleActions(D);
          }
        } catch (I) {
          o?.error?.(Gr(I)), console.error("Method execution failed:", I);
        }
    }
    if (v.type === "api") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const C = await ce({
          method: v.method || "POST",
          url: a.baseURL + v.endpoint,
          data: k ?? {},
          headers: {
            Authorization: `Bearer ${a?.accessToken}`
          }
        });
        if (s?.(C), o?.success?.(Yr(C)), e?.handleActions) {
          let w = a.operation === "update" ? c : C?.data?.refid;
          const I = t?.gotolink?.replace(
            "{hashid}",
            String(w)
          );
          e.handleActions(I);
        }
      } catch (C) {
        o?.error?.(Gr(C)), console.error("API fetch failed:", C);
      }
    }
    if (v.type === "sql") {
      const C = t.endPoints;
      if (!C) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let w = !1, I;
        v?.dbopsid && (w = !0, I = v?.dbopsid);
        const B = await ce({
          method: "GET",
          url: C.baseURL + C.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${C?.accessToken}`
          }
        });
        if (!w) {
          let F = {
            ...v
          };
          v.where && (F = {
            ...v,
            where: ut(v.where, {
              refid: c
            })
          }), I = (await ce({
            method: "POST",
            url: C.baseURL + C.dbopsGetRefId,
            data: {
              operation: C.operation,
              source: F,
              fields: Li(t.fields, C.operation),
              forcefill: t.forcefill,
              datahash: B.data.refhash,
              srcid: t?.module_refid
            },
            headers: {
              Authorization: `Bearer ${C?.accessToken}`
            }
          }))?.data.refid;
        }
        const D = await ce({
          method: "POST",
          url: C.baseURL + C[C.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: I,
            fields: k,
            datahash: B.data.refhash
          },
          headers: {
            Authorization: `Bearer ${C?.accessToken}`
          }
        });
        if (o?.success?.(Yr(D)), s?.(D), e?.handleActions) {
          let F = C.operation === "update" ? c : D?.data?.refid;
          const A = t?.gotolink?.replace(
            "{hashid}",
            String(F)
          );
          e.handleActions(A);
        }
      } catch (w) {
        o?.error?.(Gr(w)), console.error("API fetch failed:", w);
      }
    }
  }, y = {
    accordion: /* @__PURE__ */ p.jsx(
      wm,
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
    tab: /* @__PURE__ */ p.jsx(
      vm,
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
      Sm,
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
  Im as LogiksForm
};
