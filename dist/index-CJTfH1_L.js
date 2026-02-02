import * as H from "react";
var K = { exports: {} }, G = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Be() {
  if (he) return R;
  he = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, c = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, e = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, y = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, v = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") : 60116, C = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, L = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
  function j(d) {
    if (typeof d == "object" && d !== null) {
      var Y = d.$$typeof;
      switch (Y) {
        case t:
          switch (d = d.type, d) {
            case l:
            case y:
            case o:
            case s:
            case c:
            case v:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case a:
                case h:
                case A:
                case w:
                case e:
                  return d;
                default:
                  return Y;
              }
          }
        case i:
          return Y;
      }
    }
  }
  function M(d) {
    return j(d) === y;
  }
  return R.AsyncMode = l, R.ConcurrentMode = y, R.ContextConsumer = a, R.ContextProvider = e, R.Element = t, R.ForwardRef = h, R.Fragment = o, R.Lazy = A, R.Memo = w, R.Portal = i, R.Profiler = s, R.StrictMode = c, R.Suspense = v, R.isAsyncMode = function(d) {
    return M(d) || j(d) === l;
  }, R.isConcurrentMode = M, R.isContextConsumer = function(d) {
    return j(d) === a;
  }, R.isContextProvider = function(d) {
    return j(d) === e;
  }, R.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, R.isForwardRef = function(d) {
    return j(d) === h;
  }, R.isFragment = function(d) {
    return j(d) === o;
  }, R.isLazy = function(d) {
    return j(d) === A;
  }, R.isMemo = function(d) {
    return j(d) === w;
  }, R.isPortal = function(d) {
    return j(d) === i;
  }, R.isProfiler = function(d) {
    return j(d) === s;
  }, R.isStrictMode = function(d) {
    return j(d) === c;
  }, R.isSuspense = function(d) {
    return j(d) === v;
  }, R.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === o || d === y || d === s || d === c || d === v || d === g || typeof d == "object" && d !== null && (d.$$typeof === A || d.$$typeof === w || d.$$typeof === e || d.$$typeof === a || d.$$typeof === h || d.$$typeof === k || d.$$typeof === L || d.$$typeof === q || d.$$typeof === C);
  }, R.typeOf = j, R;
}
var x = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function qe() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, c = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, e = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, y = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, v = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") : 60116, C = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, L = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
    function j(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === o || f === y || f === s || f === c || f === v || f === g || typeof f == "object" && f !== null && (f.$$typeof === A || f.$$typeof === w || f.$$typeof === e || f.$$typeof === a || f.$$typeof === h || f.$$typeof === k || f.$$typeof === L || f.$$typeof === q || f.$$typeof === C);
    }
    function M(f) {
      if (typeof f == "object" && f !== null) {
        var B = f.$$typeof;
        switch (B) {
          case t:
            var V = f.type;
            switch (V) {
              case l:
              case y:
              case o:
              case s:
              case c:
              case v:
                return V;
              default:
                var ye = V && V.$$typeof;
                switch (ye) {
                  case a:
                  case h:
                  case A:
                  case w:
                  case e:
                    return ye;
                  default:
                    return B;
                }
            }
          case i:
            return B;
        }
      }
    }
    var d = l, Y = y, J = a, X = e, Z = t, Q = h, W = o, ee = A, ne = w, U = i, re = s, $ = c, N = v, z = !1;
    function te(f) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(f) || M(f) === l;
    }
    function u(f) {
      return M(f) === y;
    }
    function p(f) {
      return M(f) === a;
    }
    function S(f) {
      return M(f) === e;
    }
    function E(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function b(f) {
      return M(f) === h;
    }
    function _(f) {
      return M(f) === o;
    }
    function m(f) {
      return M(f) === A;
    }
    function T(f) {
      return M(f) === w;
    }
    function O(f) {
      return M(f) === i;
    }
    function I(f) {
      return M(f) === s;
    }
    function P(f) {
      return M(f) === c;
    }
    function D(f) {
      return M(f) === v;
    }
    x.AsyncMode = d, x.ConcurrentMode = Y, x.ContextConsumer = J, x.ContextProvider = X, x.Element = Z, x.ForwardRef = Q, x.Fragment = W, x.Lazy = ee, x.Memo = ne, x.Portal = U, x.Profiler = re, x.StrictMode = $, x.Suspense = N, x.isAsyncMode = te, x.isConcurrentMode = u, x.isContextConsumer = p, x.isContextProvider = S, x.isElement = E, x.isForwardRef = b, x.isFragment = _, x.isLazy = m, x.isMemo = T, x.isPortal = O, x.isProfiler = I, x.isStrictMode = P, x.isSuspense = D, x.isValidElementType = j, x.typeOf = M;
  }()), x;
}
var be;
function je() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? G.exports = Be() : G.exports = qe()), G.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, me;
function Ye() {
  if (me) return oe;
  me = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function o(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function c() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var e = {}, a = 0; a < 10; a++)
        e["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(e).map(function(h) {
        return e[h];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        y[h] = h;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = c() ? Object.assign : function(s, e) {
    for (var a, l = o(s), y, h = 1; h < arguments.length; h++) {
      a = Object(arguments[h]);
      for (var v in a)
        t.call(a, v) && (l[v] = a[v]);
      if (n) {
        y = n(a);
        for (var g = 0; g < y.length; g++)
          i.call(a, y[g]) && (l[y[g]] = a[y[g]]);
      }
    }
    return l;
  }, oe;
}
var ie, Ee;
function ve() {
  if (Ee) return ie;
  Ee = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = n, ie;
}
var ae, Te;
function Me() {
  return Te || (Te = 1, ae = Function.call.bind(Object.prototype.hasOwnProperty)), ae;
}
var se, Se;
function Ne() {
  if (Se) return se;
  Se = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ve(), i = {}, o = /* @__PURE__ */ Me();
    n = function(s) {
      var e = "Warning: " + s;
      typeof console < "u" && console.error(e);
      try {
        throw new Error(e);
      } catch {
      }
    };
  }
  function c(s, e, a, l, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (o(s, h)) {
          var v;
          try {
            if (typeof s[h] != "function") {
              var g = Error(
                (l || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            v = s[h](e, h, l, a, null, t);
          } catch (A) {
            v = A;
          }
          if (v && !(v instanceof Error) && n(
            (l || "React class") + ": type specification of " + a + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in i)) {
            i[v.message] = !0;
            var w = y ? y() : "";
            n(
              "Failed " + a + " type: " + v.message + (w ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, se = c, se;
}
var ue, Ce;
function Ue() {
  if (Ce) return ue;
  Ce = 1;
  var n = je(), t = Ye(), i = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Me(), c = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function e() {
    return null;
  }
  return ue = function(a, l) {
    var y = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function v(u) {
      var p = u && (y && u[y] || u[h]);
      if (typeof p == "function")
        return p;
    }
    var g = "<<anonymous>>", w = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: q(),
      arrayOf: j,
      element: M(),
      elementType: d(),
      instanceOf: Y,
      node: Q(),
      objectOf: X,
      oneOf: J,
      oneOfType: Z,
      shape: ee,
      exact: ne
    };
    function A(u, p) {
      return u === p ? u !== 0 || 1 / u === 1 / p : u !== u && p !== p;
    }
    function C(u, p) {
      this.message = u, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function k(u) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, S = 0;
      function E(_, m, T, O, I, P, D) {
        if (O = O || g, P = P || T, D !== i) {
          if (l) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = O + ":" + T;
            !p[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[B] = !0, S++);
          }
        }
        return m[T] == null ? _ ? m[T] === null ? new C("The " + I + " `" + P + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new C("The " + I + " `" + P + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : u(m, T, O, I, P);
      }
      var b = E.bind(null, !1);
      return b.isRequired = E.bind(null, !0), b;
    }
    function L(u) {
      function p(S, E, b, _, m, T) {
        var O = S[E], I = $(O);
        if (I !== u) {
          var P = N(O);
          return new C(
            "Invalid " + _ + " `" + m + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return k(p);
    }
    function q() {
      return k(e);
    }
    function j(u) {
      function p(S, E, b, _, m) {
        if (typeof u != "function")
          return new C("Property `" + m + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var T = S[E];
        if (!Array.isArray(T)) {
          var O = $(T);
          return new C("Invalid " + _ + " `" + m + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an array."));
        }
        for (var I = 0; I < T.length; I++) {
          var P = u(T, I, b, _, m + "[" + I + "]", i);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return k(p);
    }
    function M() {
      function u(p, S, E, b, _) {
        var m = p[S];
        if (!a(m)) {
          var T = $(m);
          return new C("Invalid " + b + " `" + _ + "` of type " + ("`" + T + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(u);
    }
    function d() {
      function u(p, S, E, b, _) {
        var m = p[S];
        if (!n.isValidElementType(m)) {
          var T = $(m);
          return new C("Invalid " + b + " `" + _ + "` of type " + ("`" + T + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(u);
    }
    function Y(u) {
      function p(S, E, b, _, m) {
        if (!(S[E] instanceof u)) {
          var T = u.name || g, O = te(S[E]);
          return new C("Invalid " + _ + " `" + m + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return k(p);
    }
    function J(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), e;
      function p(S, E, b, _, m) {
        for (var T = S[E], O = 0; O < u.length; O++)
          if (A(T, u[O]))
            return null;
        var I = JSON.stringify(u, function(D, f) {
          var B = N(f);
          return B === "symbol" ? String(f) : f;
        });
        return new C("Invalid " + _ + " `" + m + "` of value `" + String(T) + "` " + ("supplied to `" + b + "`, expected one of " + I + "."));
      }
      return k(p);
    }
    function X(u) {
      function p(S, E, b, _, m) {
        if (typeof u != "function")
          return new C("Property `" + m + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var T = S[E], O = $(T);
        if (O !== "object")
          return new C("Invalid " + _ + " `" + m + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an object."));
        for (var I in T)
          if (o(T, I)) {
            var P = u(T, I, b, _, m + "." + I, i);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return k(p);
    }
    function Z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), e;
      for (var p = 0; p < u.length; p++) {
        var S = u[p];
        if (typeof S != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(S) + " at index " + p + "."
          ), e;
      }
      function E(b, _, m, T, O) {
        for (var I = [], P = 0; P < u.length; P++) {
          var D = u[P], f = D(b, _, m, T, O, i);
          if (f == null)
            return null;
          f.data && o(f.data, "expectedType") && I.push(f.data.expectedType);
        }
        var B = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new C("Invalid " + T + " `" + O + "` supplied to " + ("`" + m + "`" + B + "."));
      }
      return k(E);
    }
    function Q() {
      function u(p, S, E, b, _) {
        return U(p[S]) ? null : new C("Invalid " + b + " `" + _ + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return k(u);
    }
    function W(u, p, S, E, b) {
      return new C(
        (u || "React class") + ": " + p + " type `" + S + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function ee(u) {
      function p(S, E, b, _, m) {
        var T = S[E], O = $(T);
        if (O !== "object")
          return new C("Invalid " + _ + " `" + m + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var I in u) {
          var P = u[I];
          if (typeof P != "function")
            return W(b, _, m, I, N(P));
          var D = P(T, I, b, _, m + "." + I, i);
          if (D)
            return D;
        }
        return null;
      }
      return k(p);
    }
    function ne(u) {
      function p(S, E, b, _, m) {
        var T = S[E], O = $(T);
        if (O !== "object")
          return new C("Invalid " + _ + " `" + m + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        var I = t({}, S[E], u);
        for (var P in I) {
          var D = u[P];
          if (o(u, P) && typeof D != "function")
            return W(b, _, m, P, N(D));
          if (!D)
            return new C(
              "Invalid " + _ + " `" + m + "` key `" + P + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(S[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var f = D(T, P, b, _, m + "." + P, i);
          if (f)
            return f;
        }
        return null;
      }
      return k(p);
    }
    function U(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(U);
          if (u === null || a(u))
            return !0;
          var p = v(u);
          if (p) {
            var S = p.call(u), E;
            if (p !== u.entries) {
              for (; !(E = S.next()).done; )
                if (!U(E.value))
                  return !1;
            } else
              for (; !(E = S.next()).done; ) {
                var b = E.value;
                if (b && !U(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(u, p) {
      return u === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function $(u) {
      var p = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : re(p, u) ? "symbol" : p;
    }
    function N(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var p = $(u);
      if (p === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function z(u) {
      var p = N(u);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function te(u) {
      return !u.constructor || !u.constructor.name ? g : u.constructor.name;
    }
    return w.checkPropTypes = c, w.resetWarningCache = c.resetWarningCache, w.PropTypes = w, w;
  }, ue;
}
var ce, _e;
function Fe() {
  if (_e) return ce;
  _e = 1;
  var n = /* @__PURE__ */ ve();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, ce = function() {
    function o(e, a, l, y, h, v) {
      if (v !== n) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ce;
}
var Oe;
function We() {
  if (Oe) return K.exports;
  if (Oe = 1, process.env.NODE_ENV !== "production") {
    var n = je(), t = !0;
    K.exports = /* @__PURE__ */ Ue()(n.isElement, t);
  } else
    K.exports = /* @__PURE__ */ Fe()();
  return K.exports;
}
var r = /* @__PURE__ */ We(), de = function() {
  return de = Object.assign || function(n) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (n[c] = t[c]);
    }
    return n;
  }, de.apply(this, arguments);
}, Le = {
  onActivate: r.func,
  onAddUndo: r.func,
  onBeforeAddUndo: r.func,
  onBeforeExecCommand: r.func,
  onBeforeGetContent: r.func,
  onBeforeRenderUI: r.func,
  onBeforeSetContent: r.func,
  onBeforePaste: r.func,
  onBlur: r.func,
  onChange: r.func,
  onClearUndos: r.func,
  onClick: r.func,
  onContextMenu: r.func,
  onCommentChange: r.func,
  onCompositionEnd: r.func,
  onCompositionStart: r.func,
  onCompositionUpdate: r.func,
  onCopy: r.func,
  onCut: r.func,
  onDblclick: r.func,
  onDeactivate: r.func,
  onDirty: r.func,
  onDrag: r.func,
  onDragDrop: r.func,
  onDragEnd: r.func,
  onDragGesture: r.func,
  onDragOver: r.func,
  onDrop: r.func,
  onExecCommand: r.func,
  onFocus: r.func,
  onFocusIn: r.func,
  onFocusOut: r.func,
  onGetContent: r.func,
  onHide: r.func,
  onInit: r.func,
  onInput: r.func,
  onKeyDown: r.func,
  onKeyPress: r.func,
  onKeyUp: r.func,
  onLoadContent: r.func,
  onMouseDown: r.func,
  onMouseEnter: r.func,
  onMouseLeave: r.func,
  onMouseMove: r.func,
  onMouseOut: r.func,
  onMouseOver: r.func,
  onMouseUp: r.func,
  onNodeChange: r.func,
  onObjectResizeStart: r.func,
  onObjectResized: r.func,
  onObjectSelected: r.func,
  onPaste: r.func,
  onPostProcess: r.func,
  onPostRender: r.func,
  onPreProcess: r.func,
  onProgressState: r.func,
  onRedo: r.func,
  onRemove: r.func,
  onReset: r.func,
  onSaveContent: r.func,
  onSelectionChange: r.func,
  onSetAttrib: r.func,
  onSetContent: r.func,
  onShow: r.func,
  onSubmit: r.func,
  onUndo: r.func,
  onVisualAid: r.func,
  onSkinLoadError: r.func,
  onThemeLoadError: r.func,
  onModelLoadError: r.func,
  onPluginLoadError: r.func,
  onIconsLoadError: r.func,
  onLanguageLoadError: r.func,
  onScriptsLoad: r.func,
  onScriptsLoadError: r.func
}, ze = de({ apiKey: r.string, licenseKey: r.string, id: r.string, inline: r.bool, init: r.object, initialValue: r.string, onEditorChange: r.func, value: r.string, tagName: r.string, tabIndex: r.number, cloudChannel: r.string, plugins: r.oneOfType([r.string, r.array]), toolbar: r.oneOfType([r.string, r.array]), disabled: r.bool, readonly: r.bool, textareaName: r.string, tinymceScriptSrc: r.oneOfType([
  r.string,
  r.arrayOf(r.string),
  r.arrayOf(r.shape({
    src: r.string,
    async: r.bool,
    defer: r.bool
  }))
]), rollback: r.oneOfType([r.number, r.oneOf([!1])]), scriptLoading: r.shape({
  async: r.bool,
  defer: r.bool,
  delay: r.number
}) }, Le), De = function(n) {
  var t = n;
  return t && t.tinymce ? t.tinymce : null;
}, fe = function(n) {
  return typeof n == "function";
}, Pe = function(n) {
  return n in Le;
}, we = function(n) {
  return n.substr(2);
}, Ve = function(n, t, i, o, c, s, e) {
  var a = Object.keys(c).filter(Pe), l = Object.keys(s).filter(Pe), y = a.filter(function(v) {
    return s[v] === void 0;
  }), h = l.filter(function(v) {
    return c[v] === void 0;
  });
  y.forEach(function(v) {
    var g = we(v), w = e[g];
    i(g, w), delete e[g];
  }), h.forEach(function(v) {
    var g = o(n, v), w = we(v);
    e[w] = g, t(w, g);
  });
}, He = function(n, t, i, o, c) {
  return Ve(
    c,
    n.on.bind(n),
    n.off.bind(n),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function(s, e) {
      return function(a) {
        var l;
        return (l = s(e)) === null || l === void 0 ? void 0 : l(a, n);
      };
    },
    t,
    i,
    o
  );
}, Re = 0, $e = function(n) {
  var t = Date.now(), i = Math.floor(Math.random() * 1e9);
  return Re++, n + "_" + i + Re + String(t);
}, xe = function(n) {
  return n !== null && (n.tagName.toLowerCase() === "textarea" || n.tagName.toLowerCase() === "input");
}, Ie = function(n) {
  return typeof n > "u" || n === "" ? [] : Array.isArray(n) ? n : n.split(" ");
}, Ke = function(n, t) {
  return Ie(n).concat(Ie(t));
}, Ge = function() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
}, Je = function(n) {
  if (!("isConnected" in Node.prototype)) {
    for (var t = n, i = n.parentNode; i != null; )
      t = i, i = t.parentNode;
    return t === n.ownerDocument;
  }
  return n.isConnected;
}, Ae = function(n, t) {
  n !== void 0 && (n.mode != null && typeof n.mode == "object" && typeof n.mode.set == "function" ? n.mode.set(t) : n.setMode(t));
}, Xe = function(n) {
  var t = De(n);
  if (!t)
    throw new Error("tinymce should have been loaded into global scope");
  return t;
}, ke = function(n) {
  return n.options && n.options.isRegistered("disabled");
}, pe = function() {
  return pe = Object.assign || function(n) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (n[c] = t[c]);
    }
    return n;
  }, pe.apply(this, arguments);
}, Ze = function(n, t, i) {
  var o, c, s = n.createElement("script");
  s.referrerPolicy = "origin", s.type = "application/javascript", s.id = t.id, s.src = t.src, s.async = (o = t.async) !== null && o !== void 0 ? o : !1, s.defer = (c = t.defer) !== null && c !== void 0 ? c : !1;
  var e = function() {
    s.removeEventListener("load", e), s.removeEventListener("error", a), i(t.src);
  }, a = function(l) {
    s.removeEventListener("load", e), s.removeEventListener("error", a), i(t.src, l);
  };
  s.addEventListener("load", e), s.addEventListener("error", a), n.head && n.head.appendChild(s);
}, Qe = function(n) {
  var t = {}, i = function(e, a) {
    var l = t[e];
    l.done = !0, l.error = a;
    for (var y = 0, h = l.handlers; y < h.length; y++) {
      var v = h[y];
      v(e, a);
    }
    l.handlers = [];
  }, o = function(e, a, l) {
    var y = function(q) {
      return l !== void 0 ? l(q) : console.error(q);
    };
    if (e.length === 0) {
      y(new Error("At least one script must be provided"));
      return;
    }
    for (var h = 0, v = !1, g = function(q, j) {
      v || (j ? (v = !0, y(j)) : ++h === e.length && a());
    }, w = 0, A = e; w < A.length; w++) {
      var C = A[w], k = t[C.src];
      if (k)
        k.done ? g(C.src, k.error) : k.handlers.push(g);
      else {
        var L = $e("tiny-");
        t[C.src] = {
          id: L,
          src: C.src,
          done: !1,
          error: null,
          handlers: [g]
        }, Ze(n, pe({ id: L }, C), i);
      }
    }
  }, c = function() {
    for (var e, a = 0, l = Object.values(t); a < l.length; a++) {
      var y = l[a], h = n.getElementById(y.id);
      h != null && h.tagName === "SCRIPT" && ((e = h.parentNode) === null || e === void 0 || e.removeChild(h));
    }
    t = {};
  }, s = function() {
    return n;
  };
  return {
    loadScripts: o,
    deleteScripts: c,
    getDocument: s
  };
}, en = function() {
  var n = [], t = function(c) {
    var s = n.find(function(e) {
      return e.getDocument() === c;
    });
    return s === void 0 && (s = Qe(c), n.push(s)), s;
  }, i = function(c, s, e, a, l) {
    var y = function() {
      return t(c).loadScripts(s, a, l);
    };
    e > 0 ? setTimeout(y, e) : y();
  }, o = function() {
    for (var c = n.pop(); c != null; c = n.pop())
      c.deleteScripts();
  };
  return {
    loadList: i,
    reinitialize: o
  };
}, nn = en(), rn = /* @__PURE__ */ function() {
  var n = function(t, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (o[s] = c[s]);
    }, n(t, i);
  };
  return function(t, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(t, i);
    function o() {
      this.constructor = t;
    }
    t.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
  };
}(), F = function() {
  return F = Object.assign || function(n) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (n[c] = t[c]);
    }
    return n;
  }, F.apply(this, arguments);
}, le = "change keyup compositionend setcontent CommentChange", tn = (
  /** @class */
  function(n) {
    rn(t, n);
    function t(i) {
      var o, c, s, e = n.call(this, i) || this;
      return e.rollbackTimer = void 0, e.valueCursor = void 0, e.rollbackChange = function() {
        var a = e.editor, l = e.props.value;
        a && l && l !== e.currentContent && a.undoManager.ignore(function() {
          if (a.setContent(l), e.valueCursor && (!e.inline || a.hasFocus()))
            try {
              a.selection.moveToBookmark(e.valueCursor);
            } catch {
            }
        }), e.rollbackTimer = void 0;
      }, e.handleBeforeInput = function(a) {
        if (e.props.value !== void 0 && e.props.value === e.currentContent && e.editor && (!e.inline || e.editor.hasFocus()))
          try {
            e.valueCursor = e.editor.selection.getBookmark(3);
          } catch {
          }
      }, e.handleBeforeInputSpecial = function(a) {
        (a.key === "Enter" || a.key === "Backspace" || a.key === "Delete") && e.handleBeforeInput(a);
      }, e.handleEditorChange = function(a) {
        var l = e.editor;
        if (l && l.initialized) {
          var y = l.getContent();
          e.props.value !== void 0 && e.props.value !== y && e.props.rollback !== !1 && (e.rollbackTimer || (e.rollbackTimer = window.setTimeout(e.rollbackChange, typeof e.props.rollback == "number" ? e.props.rollback : 200))), y !== e.currentContent && (e.currentContent = y, fe(e.props.onEditorChange) && e.props.onEditorChange(y, l));
        }
      }, e.handleEditorChangeSpecial = function(a) {
        (a.key === "Backspace" || a.key === "Delete") && e.handleEditorChange(a);
      }, e.initialise = function(a) {
        var l, y, h;
        a === void 0 && (a = 0);
        var v = e.elementRef.current;
        if (v) {
          if (!Je(v)) {
            if (a === 0)
              setTimeout(function() {
                return e.initialise(1);
              }, 1);
            else if (a < 100)
              setTimeout(function() {
                return e.initialise(a + 1);
              }, 100);
            else
              throw new Error("tinymce can only be initialised when in a document");
            return;
          }
          var g = Xe(e.view), w = F(F(F(F({}, e.props.init), { selector: void 0, target: v, disabled: e.props.disabled, readonly: e.props.readonly, inline: e.inline, plugins: Ke((l = e.props.init) === null || l === void 0 ? void 0 : l.plugins, e.props.plugins), toolbar: (y = e.props.toolbar) !== null && y !== void 0 ? y : (h = e.props.init) === null || h === void 0 ? void 0 : h.toolbar }), e.props.licenseKey ? { license_key: e.props.licenseKey } : {}), { setup: function(A) {
            e.editor = A, e.bindHandlers({}), e.inline && !xe(v) && A.once("PostRender", function(C) {
              A.setContent(e.getInitialValue(), { no_events: !0 });
            }), e.props.init && fe(e.props.init.setup) && e.props.init.setup(A), e.props.disabled && (ke(e.editor) ? e.editor.options.set("disabled", e.props.disabled) : e.editor.mode.set("readonly"));
          }, init_instance_callback: function(A) {
            var C, k = e.getInitialValue();
            e.currentContent = (C = e.currentContent) !== null && C !== void 0 ? C : A.getContent(), e.currentContent !== k && (e.currentContent = k, A.setContent(k), A.undoManager.clear(), A.undoManager.add(), A.setDirty(!1)), e.props.init && fe(e.props.init.init_instance_callback) && e.props.init.init_instance_callback(A);
          } });
          e.inline || (v.style.visibility = ""), xe(v) && (v.value = e.getInitialValue()), g.init(w);
        }
      }, e.id = e.props.id || $e("tiny-react"), e.elementRef = H.createRef(), e.inline = (s = (o = e.props.inline) !== null && o !== void 0 ? o : (c = e.props.init) === null || c === void 0 ? void 0 : c.inline) !== null && s !== void 0 ? s : !1, e.boundHandlers = {}, e;
    }
    return Object.defineProperty(t.prototype, "view", {
      get: function() {
        var i, o;
        return (o = (i = this.elementRef.current) === null || i === void 0 ? void 0 : i.ownerDocument.defaultView) !== null && o !== void 0 ? o : window;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.componentDidUpdate = function(i) {
      var o = this, c, s;
      if (this.rollbackTimer && (clearTimeout(this.rollbackTimer), this.rollbackTimer = void 0), this.editor && (this.bindHandlers(i), this.editor.initialized)) {
        if (this.currentContent = (c = this.currentContent) !== null && c !== void 0 ? c : this.editor.getContent(), typeof this.props.initialValue == "string" && this.props.initialValue !== i.initialValue)
          this.editor.setContent(this.props.initialValue), this.editor.undoManager.clear(), this.editor.undoManager.add(), this.editor.setDirty(!1);
        else if (typeof this.props.value == "string" && this.props.value !== this.currentContent) {
          var e = this.editor;
          e.undoManager.transact(function() {
            var l;
            if (!o.inline || e.hasFocus())
              try {
                l = e.selection.getBookmark(3);
              } catch {
              }
            var y = o.valueCursor;
            if (e.setContent(o.props.value), !o.inline || e.hasFocus())
              for (var h = 0, v = [l, y]; h < v.length; h++) {
                var g = v[h];
                if (g)
                  try {
                    e.selection.moveToBookmark(g), o.valueCursor = g;
                    break;
                  } catch {
                  }
              }
          });
        }
        if (this.props.readonly !== i.readonly) {
          var a = (s = this.props.readonly) !== null && s !== void 0 ? s : !1;
          Ae(this.editor, a ? "readonly" : "design");
        }
        this.props.disabled !== i.disabled && (ke(this.editor) ? this.editor.options.set("disabled", this.props.disabled) : Ae(this.editor, this.props.disabled ? "readonly" : "design"));
      }
    }, t.prototype.componentDidMount = function() {
      var i = this, o, c, s, e, a;
      if (De(this.view) !== null)
        this.initialise();
      else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0)
        (c = (o = this.props).onScriptsLoadError) === null || c === void 0 || c.call(o, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
      else if (!((s = this.elementRef.current) === null || s === void 0) && s.ownerDocument) {
        var l = function() {
          var h, v;
          (v = (h = i.props).onScriptsLoad) === null || v === void 0 || v.call(h), i.initialise();
        }, y = function(h) {
          var v, g;
          (g = (v = i.props).onScriptsLoadError) === null || g === void 0 || g.call(v, h);
        };
        nn.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (a = (e = this.props.scriptLoading) === null || e === void 0 ? void 0 : e.delay) !== null && a !== void 0 ? a : 0, l, y);
      }
    }, t.prototype.componentWillUnmount = function() {
      var i = this, o = this.editor;
      o && (o.off(le, this.handleEditorChange), o.off(this.beforeInputEvent(), this.handleBeforeInput), o.off("keypress", this.handleEditorChangeSpecial), o.off("keydown", this.handleBeforeInputSpecial), o.off("NewBlock", this.handleEditorChange), Object.keys(this.boundHandlers).forEach(function(c) {
        o.off(c, i.boundHandlers[c]);
      }), this.boundHandlers = {}, o.remove(), this.editor = void 0);
    }, t.prototype.render = function() {
      return this.inline ? this.renderInline() : this.renderIframe();
    }, t.prototype.beforeInputEvent = function() {
      return Ge() ? "beforeinput SelectionChange" : "SelectionChange";
    }, t.prototype.renderInline = function() {
      var i = this.props.tagName, o = i === void 0 ? "div" : i;
      return H.createElement(o, {
        ref: this.elementRef,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    }, t.prototype.renderIframe = function() {
      return H.createElement("textarea", {
        ref: this.elementRef,
        style: { visibility: "hidden" },
        name: this.props.textareaName,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    }, t.prototype.getScriptSources = function() {
      var i, o, c = (i = this.props.scriptLoading) === null || i === void 0 ? void 0 : i.async, s = (o = this.props.scriptLoading) === null || o === void 0 ? void 0 : o.defer;
      if (this.props.tinymceScriptSrc !== void 0)
        return typeof this.props.tinymceScriptSrc == "string" ? [{ src: this.props.tinymceScriptSrc, async: c, defer: s }] : this.props.tinymceScriptSrc.map(function(y) {
          return typeof y == "string" ? { src: y, async: c, defer: s } : y;
        });
      var e = this.props.cloudChannel, a = this.props.apiKey ? this.props.apiKey : "no-api-key", l = "https://cdn.tiny.cloud/1/".concat(a, "/tinymce/").concat(e, "/tinymce.min.js");
      return [{ src: l, async: c, defer: s }];
    }, t.prototype.getInitialValue = function() {
      return typeof this.props.initialValue == "string" ? this.props.initialValue : typeof this.props.value == "string" ? this.props.value : "";
    }, t.prototype.bindHandlers = function(i) {
      var o = this;
      if (this.editor !== void 0) {
        He(this.editor, i, this.props, this.boundHandlers, function(a) {
          return o.props[a];
        });
        var c = function(a) {
          return a.onEditorChange !== void 0 || a.value !== void 0;
        }, s = c(i), e = c(this.props);
        !s && e ? (this.editor.on(le, this.handleEditorChange), this.editor.on(this.beforeInputEvent(), this.handleBeforeInput), this.editor.on("keydown", this.handleBeforeInputSpecial), this.editor.on("keyup", this.handleEditorChangeSpecial), this.editor.on("NewBlock", this.handleEditorChange)) : s && !e && (this.editor.off(le, this.handleEditorChange), this.editor.off(this.beforeInputEvent(), this.handleBeforeInput), this.editor.off("keydown", this.handleBeforeInputSpecial), this.editor.off("keyup", this.handleEditorChangeSpecial), this.editor.off("NewBlock", this.handleEditorChange));
      }
    }, t.propTypes = ze, t.defaultProps = {
      cloudChannel: "8"
    }, t;
  }(H.Component)
);
export {
  tn as Editor
};
