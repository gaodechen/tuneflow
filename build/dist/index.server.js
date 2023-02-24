var Hi = "1.13.6", ui = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, nn = Array.prototype, Qn = Object.prototype, li = typeof Symbol < "u" ? Symbol.prototype : null, $o = nn.push, we = nn.slice, de = Qn.toString, Go = Qn.hasOwnProperty, $i = typeof ArrayBuffer < "u", Mo = typeof DataView < "u", Do = Array.isArray, fi = Object.keys, hi = Object.create, gi = $i && ArrayBuffer.isView, zo = isNaN, Ko = isFinite, Gi = !{ toString: null }.propertyIsEnumerable("toString"), di = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], qo = Math.pow(2, 53) - 1;
function J(t, e) {
  return e = e == null ? t.length - 1 : +e, function() {
    for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++)
      r[i] = arguments[i + e];
    switch (e) {
      case 0:
        return t.call(this, r);
      case 1:
        return t.call(this, arguments[0], r);
      case 2:
        return t.call(this, arguments[0], arguments[1], r);
    }
    var s = Array(e + 1);
    for (i = 0; i < e; i++)
      s[i] = arguments[i];
    return s[e] = r, t.apply(this, s);
  };
}
function Ht(t) {
  var e = typeof t;
  return e === "function" || e === "object" && !!t;
}
function Wo(t) {
  return t === null;
}
function Mi(t) {
  return t === void 0;
}
function Di(t) {
  return t === !0 || t === !1 || de.call(t) === "[object Boolean]";
}
function Jo(t) {
  return !!(t && t.nodeType === 1);
}
function V(t) {
  var e = "[object " + t + "]";
  return function(n) {
    return de.call(n) === e;
  };
}
const Yn = V("String"), Zn = V("Number"), Xo = V("Date"), jo = V("RegExp"), Qo = V("Error"), zi = V("Symbol"), Ki = V("ArrayBuffer");
var qi = V("Function"), Yo = ui.document && ui.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof Yo != "function" && (qi = function(t) {
  return typeof t == "function" || !1;
});
const M = qi, Wi = V("Object");
var Ji = Mo && Wi(new DataView(new ArrayBuffer(8))), tr = typeof Map < "u" && Wi(/* @__PURE__ */ new Map()), Zo = V("DataView");
function tc(t) {
  return t != null && M(t.getInt8) && Ki(t.buffer);
}
const De = Ji ? tc : Zo, $t = Do || V("Array");
function Et(t, e) {
  return t != null && Go.call(t, e);
}
var Bn = V("Arguments");
(function() {
  Bn(arguments) || (Bn = function(t) {
    return Et(t, "callee");
  });
})();
const er = Bn;
function ec(t) {
  return !zi(t) && Ko(t) && !isNaN(parseFloat(t));
}
function Xi(t) {
  return Zn(t) && zo(t);
}
function ji(t) {
  return function() {
    return t;
  };
}
function Qi(t) {
  return function(e) {
    var n = t(e);
    return typeof n == "number" && n >= 0 && n <= qo;
  };
}
function Yi(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
const ze = Yi("byteLength"), nc = Qi(ze);
var rc = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function ic(t) {
  return gi ? gi(t) && !De(t) : nc(t) && rc.test(de.call(t));
}
const Zi = $i ? ic : ji(!1), X = Yi("length");
function sc(t) {
  for (var e = {}, n = t.length, r = 0; r < n; ++r)
    e[t[r]] = !0;
  return {
    contains: function(i) {
      return e[i] === !0;
    },
    push: function(i) {
      return e[i] = !0, t.push(i);
    }
  };
}
function ts(t, e) {
  e = sc(e);
  var n = di.length, r = t.constructor, i = M(r) && r.prototype || Qn, s = "constructor";
  for (Et(t, s) && !e.contains(s) && e.push(s); n--; )
    s = di[n], s in t && t[s] !== i[s] && !e.contains(s) && e.push(s);
}
function y(t) {
  if (!Ht(t))
    return [];
  if (fi)
    return fi(t);
  var e = [];
  for (var n in t)
    Et(t, n) && e.push(n);
  return Gi && ts(t, e), e;
}
function ac(t) {
  if (t == null)
    return !0;
  var e = X(t);
  return typeof e == "number" && ($t(t) || Yn(t) || er(t)) ? e === 0 : X(y(t)) === 0;
}
function es(t, e) {
  var n = y(e), r = n.length;
  if (t == null)
    return !r;
  for (var i = Object(t), s = 0; s < r; s++) {
    var a = n[s];
    if (e[a] !== i[a] || !(a in i))
      return !1;
  }
  return !0;
}
function _(t) {
  if (t instanceof _)
    return t;
  if (!(this instanceof _))
    return new _(t);
  this._wrapped = t;
}
_.VERSION = Hi;
_.prototype.value = function() {
  return this._wrapped;
};
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
_.prototype.toString = function() {
  return String(this._wrapped);
};
function pi(t) {
  return new Uint8Array(
    t.buffer || t,
    t.byteOffset || 0,
    ze(t)
  );
}
var mi = "[object DataView]";
function Fn(t, e, n, r) {
  if (t === e)
    return t !== 0 || 1 / t === 1 / e;
  if (t == null || e == null)
    return !1;
  if (t !== t)
    return e !== e;
  var i = typeof t;
  return i !== "function" && i !== "object" && typeof e != "object" ? !1 : ns(t, e, n, r);
}
function ns(t, e, n, r) {
  t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped);
  var i = de.call(t);
  if (i !== de.call(e))
    return !1;
  if (Ji && i == "[object Object]" && De(t)) {
    if (!De(e))
      return !1;
    i = mi;
  }
  switch (i) {
    case "[object RegExp]":
    case "[object String]":
      return "" + t == "" + e;
    case "[object Number]":
      return +t != +t ? +e != +e : +t == 0 ? 1 / +t === 1 / e : +t == +e;
    case "[object Date]":
    case "[object Boolean]":
      return +t == +e;
    case "[object Symbol]":
      return li.valueOf.call(t) === li.valueOf.call(e);
    case "[object ArrayBuffer]":
    case mi:
      return ns(pi(t), pi(e), n, r);
  }
  var s = i === "[object Array]";
  if (!s && Zi(t)) {
    var a = ze(t);
    if (a !== ze(e))
      return !1;
    if (t.buffer === e.buffer && t.byteOffset === e.byteOffset)
      return !0;
    s = !0;
  }
  if (!s) {
    if (typeof t != "object" || typeof e != "object")
      return !1;
    var o = t.constructor, u = e.constructor;
    if (o !== u && !(M(o) && o instanceof o && M(u) && u instanceof u) && "constructor" in t && "constructor" in e)
      return !1;
  }
  n = n || [], r = r || [];
  for (var l = n.length; l--; )
    if (n[l] === t)
      return r[l] === e;
  if (n.push(t), r.push(e), s) {
    if (l = t.length, l !== e.length)
      return !1;
    for (; l--; )
      if (!Fn(t[l], e[l], n, r))
        return !1;
  } else {
    var d = y(t), f;
    if (l = d.length, y(e).length !== l)
      return !1;
    for (; l--; )
      if (f = d[l], !(Et(e, f) && Fn(t[f], e[f], n, r)))
        return !1;
  }
  return n.pop(), r.pop(), !0;
}
function oc(t, e) {
  return Fn(t, e);
}
function ke(t) {
  if (!Ht(t))
    return [];
  var e = [];
  for (var n in t)
    e.push(n);
  return Gi && ts(t, e), e;
}
function nr(t) {
  var e = X(t);
  return function(n) {
    if (n == null)
      return !1;
    var r = ke(n);
    if (X(r))
      return !1;
    for (var i = 0; i < e; i++)
      if (!M(n[t[i]]))
        return !1;
    return t !== ss || !M(n[rr]);
  };
}
var rr = "forEach", rs = "has", ir = ["clear", "delete"], is = ["get", rs, "set"], cc = ir.concat(rr, is), ss = ir.concat(is), uc = ["add"].concat(ir, rr, rs);
const lc = tr ? nr(cc) : V("Map"), fc = tr ? nr(ss) : V("WeakMap"), hc = tr ? nr(uc) : V("Set"), gc = V("WeakSet");
function re(t) {
  for (var e = y(t), n = e.length, r = Array(n), i = 0; i < n; i++)
    r[i] = t[e[i]];
  return r;
}
function dc(t) {
  for (var e = y(t), n = e.length, r = Array(n), i = 0; i < n; i++)
    r[i] = [e[i], t[e[i]]];
  return r;
}
function as(t) {
  for (var e = {}, n = y(t), r = 0, i = n.length; r < i; r++)
    e[t[n[r]]] = n[r];
  return e;
}
function Vn(t) {
  var e = [];
  for (var n in t)
    M(t[n]) && e.push(n);
  return e.sort();
}
function sr(t, e) {
  return function(n) {
    var r = arguments.length;
    if (e && (n = Object(n)), r < 2 || n == null)
      return n;
    for (var i = 1; i < r; i++)
      for (var s = arguments[i], a = t(s), o = a.length, u = 0; u < o; u++) {
        var l = a[u];
        (!e || n[l] === void 0) && (n[l] = s[l]);
      }
    return n;
  };
}
const os = sr(ke), Ke = sr(y), cs = sr(ke, !0);
function pc() {
  return function() {
  };
}
function us(t) {
  if (!Ht(t))
    return {};
  if (hi)
    return hi(t);
  var e = pc();
  e.prototype = t;
  var n = new e();
  return e.prototype = null, n;
}
function mc(t, e) {
  var n = us(t);
  return e && Ke(n, e), n;
}
function vc(t) {
  return Ht(t) ? $t(t) ? t.slice() : os({}, t) : t;
}
function bc(t, e) {
  return e(t), t;
}
function ls(t) {
  return $t(t) ? t : [t];
}
_.toPath = ls;
function Se(t) {
  return _.toPath(t);
}
function ar(t, e) {
  for (var n = e.length, r = 0; r < n; r++) {
    if (t == null)
      return;
    t = t[e[r]];
  }
  return n ? t : void 0;
}
function fs(t, e, n) {
  var r = ar(t, Se(e));
  return Mi(r) ? n : r;
}
function wc(t, e) {
  e = Se(e);
  for (var n = e.length, r = 0; r < n; r++) {
    var i = e[r];
    if (!Et(t, i))
      return !1;
    t = t[i];
  }
  return !!n;
}
function or(t) {
  return t;
}
function pe(t) {
  return t = Ke({}, t), function(e) {
    return es(e, t);
  };
}
function cr(t) {
  return t = Se(t), function(e) {
    return ar(e, t);
  };
}
function Ce(t, e, n) {
  if (e === void 0)
    return t;
  switch (n ?? 3) {
    case 1:
      return function(r) {
        return t.call(e, r);
      };
    case 3:
      return function(r, i, s) {
        return t.call(e, r, i, s);
      };
    case 4:
      return function(r, i, s, a) {
        return t.call(e, r, i, s, a);
      };
  }
  return function() {
    return t.apply(e, arguments);
  };
}
function hs(t, e, n) {
  return t == null ? or : M(t) ? Ce(t, e, n) : Ht(t) && !$t(t) ? pe(t) : cr(t);
}
function ur(t, e) {
  return hs(t, e, 1 / 0);
}
_.iteratee = ur;
function j(t, e, n) {
  return _.iteratee !== ur ? _.iteratee(t, e) : hs(t, e, n);
}
function kc(t, e, n) {
  e = j(e, n);
  for (var r = y(t), i = r.length, s = {}, a = 0; a < i; a++) {
    var o = r[a];
    s[o] = e(t[o], o, t);
  }
  return s;
}
function gs() {
}
function Sc(t) {
  return t == null ? gs : function(e) {
    return fs(t, e);
  };
}
function Cc(t, e, n) {
  var r = Array(Math.max(0, t));
  e = Ce(e, n, 1);
  for (var i = 0; i < t; i++)
    r[i] = e(i);
  return r;
}
function Un(t, e) {
  return e == null && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
}
const me = Date.now || function() {
  return new Date().getTime();
};
function ds(t) {
  var e = function(s) {
    return t[s];
  }, n = "(?:" + y(t).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
  return function(s) {
    return s = s == null ? "" : "" + s, r.test(s) ? s.replace(i, e) : s;
  };
}
const ps = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, Ic = ds(ps), _c = as(ps), Ec = ds(_c), xc = _.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var xn = /(.)^/, Tc = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, Pc = /\\|'|\r|\n|\u2028|\u2029/g;
function Nc(t) {
  return "\\" + Tc[t];
}
var Ac = /^\s*(\w|\$)+\s*$/;
function Oc(t, e, n) {
  !e && n && (e = n), e = cs({}, e, _.templateSettings);
  var r = RegExp([
    (e.escape || xn).source,
    (e.interpolate || xn).source,
    (e.evaluate || xn).source
  ].join("|") + "|$", "g"), i = 0, s = "__p+='";
  t.replace(r, function(l, d, f, g, m) {
    return s += t.slice(i, m).replace(Pc, Nc), i = m + l.length, d ? s += `'+
((__t=(` + d + `))==null?'':_.escape(__t))+
'` : f ? s += `'+
((__t=(` + f + `))==null?'':__t)+
'` : g && (s += `';
` + g + `
__p+='`), l;
  }), s += `';
`;
  var a = e.variable;
  if (a) {
    if (!Ac.test(a))
      throw new Error(
        "variable is not a bare identifier: " + a
      );
  } else
    s = `with(obj||{}){
` + s + `}
`, a = "obj";
  s = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + s + `return __p;
`;
  var o;
  try {
    o = new Function(a, "_", s);
  } catch (l) {
    throw l.source = s, l;
  }
  var u = function(l) {
    return o.call(this, l, _);
  };
  return u.source = "function(" + a + `){
` + s + "}", u;
}
function yc(t, e, n) {
  e = Se(e);
  var r = e.length;
  if (!r)
    return M(n) ? n.call(t) : n;
  for (var i = 0; i < r; i++) {
    var s = t == null ? void 0 : t[e[i]];
    s === void 0 && (s = n, i = r), t = M(s) ? s.call(t) : s;
  }
  return t;
}
var Rc = 0;
function Bc(t) {
  var e = ++Rc + "";
  return t ? t + e : e;
}
function Fc(t) {
  var e = _(t);
  return e._chain = !0, e;
}
function ms(t, e, n, r, i) {
  if (!(r instanceof e))
    return t.apply(n, i);
  var s = us(t.prototype), a = t.apply(s, i);
  return Ht(a) ? a : s;
}
var ie = J(function(t, e) {
  var n = ie.placeholder, r = function() {
    for (var i = 0, s = e.length, a = Array(s), o = 0; o < s; o++)
      a[o] = e[o] === n ? arguments[i++] : e[o];
    for (; i < arguments.length; )
      a.push(arguments[i++]);
    return ms(t, r, this, this, a);
  };
  return r;
});
ie.placeholder = _;
const vs = J(function(t, e, n) {
  if (!M(t))
    throw new TypeError("Bind must be called on a function");
  var r = J(function(i) {
    return ms(t, r, e, this, n.concat(i));
  });
  return r;
}), Q = Qi(X);
function Gt(t, e, n, r) {
  if (r = r || [], !e && e !== 0)
    e = 1 / 0;
  else if (e <= 0)
    return r.concat(t);
  for (var i = r.length, s = 0, a = X(t); s < a; s++) {
    var o = t[s];
    if (Q(o) && ($t(o) || er(o)))
      if (e > 1)
        Gt(o, e - 1, n, r), i = r.length;
      else
        for (var u = 0, l = o.length; u < l; )
          r[i++] = o[u++];
    else
      n || (r[i++] = o);
  }
  return r;
}
const Vc = J(function(t, e) {
  e = Gt(e, !1, !1);
  var n = e.length;
  if (n < 1)
    throw new Error("bindAll must be passed function names");
  for (; n--; ) {
    var r = e[n];
    t[r] = vs(t[r], t);
  }
  return t;
});
function Uc(t, e) {
  var n = function(r) {
    var i = n.cache, s = "" + (e ? e.apply(this, arguments) : r);
    return Et(i, s) || (i[s] = t.apply(this, arguments)), i[s];
  };
  return n.cache = {}, n;
}
const bs = J(function(t, e, n) {
  return setTimeout(function() {
    return t.apply(null, n);
  }, e);
}), Lc = ie(bs, _, 1);
function Hc(t, e, n) {
  var r, i, s, a, o = 0;
  n || (n = {});
  var u = function() {
    o = n.leading === !1 ? 0 : me(), r = null, a = t.apply(i, s), r || (i = s = null);
  }, l = function() {
    var d = me();
    !o && n.leading === !1 && (o = d);
    var f = e - (d - o);
    return i = this, s = arguments, f <= 0 || f > e ? (r && (clearTimeout(r), r = null), o = d, a = t.apply(i, s), r || (i = s = null)) : !r && n.trailing !== !1 && (r = setTimeout(u, f)), a;
  };
  return l.cancel = function() {
    clearTimeout(r), o = 0, r = i = s = null;
  }, l;
}
function $c(t, e, n) {
  var r, i, s, a, o, u = function() {
    var d = me() - i;
    e > d ? r = setTimeout(u, e - d) : (r = null, n || (a = t.apply(o, s)), r || (s = o = null));
  }, l = J(function(d) {
    return o = this, s = d, i = me(), r || (r = setTimeout(u, e), n && (a = t.apply(o, s))), a;
  });
  return l.cancel = function() {
    clearTimeout(r), r = s = o = null;
  }, l;
}
function Gc(t, e) {
  return ie(e, t);
}
function lr(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Mc() {
  var t = arguments, e = t.length - 1;
  return function() {
    for (var n = e, r = t[e].apply(this, arguments); n--; )
      r = t[n].call(this, r);
    return r;
  };
}
function Dc(t, e) {
  return function() {
    if (--t < 1)
      return e.apply(this, arguments);
  };
}
function ws(t, e) {
  var n;
  return function() {
    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
  };
}
const zc = ie(ws, 2);
function ks(t, e, n) {
  e = j(e, n);
  for (var r = y(t), i, s = 0, a = r.length; s < a; s++)
    if (i = r[s], e(t[i], i, t))
      return i;
}
function Ss(t) {
  return function(e, n, r) {
    n = j(n, r);
    for (var i = X(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t)
      if (n(e[s], s, e))
        return s;
    return -1;
  };
}
const ee = Ss(1), Cs = Ss(-1);
function Is(t, e, n, r) {
  n = j(n, r, 1);
  for (var i = n(e), s = 0, a = X(t); s < a; ) {
    var o = Math.floor((s + a) / 2);
    n(t[o]) < i ? s = o + 1 : a = o;
  }
  return s;
}
function _s(t, e, n) {
  return function(r, i, s) {
    var a = 0, o = X(r);
    if (typeof s == "number")
      t > 0 ? a = s >= 0 ? s : Math.max(s + o, a) : o = s >= 0 ? Math.min(s + 1, o) : s + o + 1;
    else if (n && s && o)
      return s = n(r, i), r[s] === i ? s : -1;
    if (i !== i)
      return s = e(we.call(r, a, o), Xi), s >= 0 ? s + a : -1;
    for (s = t > 0 ? a : o - 1; s >= 0 && s < o; s += t)
      if (r[s] === i)
        return s;
    return -1;
  };
}
const Es = _s(1, ee, Is), Kc = _s(-1, Cs);
function qe(t, e, n) {
  var r = Q(t) ? ee : ks, i = r(t, e, n);
  if (i !== void 0 && i !== -1)
    return t[i];
}
function qc(t, e) {
  return qe(t, pe(e));
}
function dt(t, e, n) {
  e = Ce(e, n);
  var r, i;
  if (Q(t))
    for (r = 0, i = t.length; r < i; r++)
      e(t[r], r, t);
  else {
    var s = y(t);
    for (r = 0, i = s.length; r < i; r++)
      e(t[s[r]], s[r], t);
  }
  return t;
}
function Vt(t, e, n) {
  e = j(e, n);
  for (var r = !Q(t) && y(t), i = (r || t).length, s = Array(i), a = 0; a < i; a++) {
    var o = r ? r[a] : a;
    s[a] = e(t[o], o, t);
  }
  return s;
}
function xs(t) {
  var e = function(n, r, i, s) {
    var a = !Q(n) && y(n), o = (a || n).length, u = t > 0 ? 0 : o - 1;
    for (s || (i = n[a ? a[u] : u], u += t); u >= 0 && u < o; u += t) {
      var l = a ? a[u] : u;
      i = r(i, n[l], l, n);
    }
    return i;
  };
  return function(n, r, i, s) {
    var a = arguments.length >= 3;
    return e(n, Ce(r, s, 4), i, a);
  };
}
const Tn = xs(1), vi = xs(-1);
function ne(t, e, n) {
  var r = [];
  return e = j(e, n), dt(t, function(i, s, a) {
    e(i, s, a) && r.push(i);
  }), r;
}
function Wc(t, e, n) {
  return ne(t, lr(j(e)), n);
}
function bi(t, e, n) {
  e = j(e, n);
  for (var r = !Q(t) && y(t), i = (r || t).length, s = 0; s < i; s++) {
    var a = r ? r[s] : s;
    if (!e(t[a], a, t))
      return !1;
  }
  return !0;
}
function wi(t, e, n) {
  e = j(e, n);
  for (var r = !Q(t) && y(t), i = (r || t).length, s = 0; s < i; s++) {
    var a = r ? r[s] : s;
    if (e(t[a], a, t))
      return !0;
  }
  return !1;
}
function gt(t, e, n, r) {
  return Q(t) || (t = re(t)), (typeof n != "number" || r) && (n = 0), Es(t, e, n) >= 0;
}
const Jc = J(function(t, e, n) {
  var r, i;
  return M(e) ? i = e : (e = Se(e), r = e.slice(0, -1), e = e[e.length - 1]), Vt(t, function(s) {
    var a = i;
    if (!a) {
      if (r && r.length && (s = ar(s, r)), s == null)
        return;
      a = s[e];
    }
    return a == null ? a : a.apply(s, n);
  });
});
function fr(t, e) {
  return Vt(t, cr(e));
}
function Xc(t, e) {
  return ne(t, pe(e));
}
function Ts(t, e, n) {
  var r = -1 / 0, i = -1 / 0, s, a;
  if (e == null || typeof e == "number" && typeof t[0] != "object" && t != null) {
    t = Q(t) ? t : re(t);
    for (var o = 0, u = t.length; o < u; o++)
      s = t[o], s != null && s > r && (r = s);
  } else
    e = j(e, n), dt(t, function(l, d, f) {
      a = e(l, d, f), (a > i || a === -1 / 0 && r === -1 / 0) && (r = l, i = a);
    });
  return r;
}
function jc(t, e, n) {
  var r = 1 / 0, i = 1 / 0, s, a;
  if (e == null || typeof e == "number" && typeof t[0] != "object" && t != null) {
    t = Q(t) ? t : re(t);
    for (var o = 0, u = t.length; o < u; o++)
      s = t[o], s != null && s < r && (r = s);
  } else
    e = j(e, n), dt(t, function(l, d, f) {
      a = e(l, d, f), (a < i || a === 1 / 0 && r === 1 / 0) && (r = l, i = a);
    });
  return r;
}
var Qc = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function Ps(t) {
  return t ? $t(t) ? we.call(t) : Yn(t) ? t.match(Qc) : Q(t) ? Vt(t, or) : re(t) : [];
}
function Ns(t, e, n) {
  if (e == null || n)
    return Q(t) || (t = re(t)), t[Un(t.length - 1)];
  var r = Ps(t), i = X(r);
  e = Math.max(Math.min(e, i), 0);
  for (var s = i - 1, a = 0; a < e; a++) {
    var o = Un(a, s), u = r[a];
    r[a] = r[o], r[o] = u;
  }
  return r.slice(0, e);
}
function Yc(t) {
  return Ns(t, 1 / 0);
}
function Zc(t, e, n) {
  var r = 0;
  return e = j(e, n), fr(Vt(t, function(i, s, a) {
    return {
      value: i,
      index: r++,
      criteria: e(i, s, a)
    };
  }).sort(function(i, s) {
    var a = i.criteria, o = s.criteria;
    if (a !== o) {
      if (a > o || a === void 0)
        return 1;
      if (a < o || o === void 0)
        return -1;
    }
    return i.index - s.index;
  }), "value");
}
function rn(t, e) {
  return function(n, r, i) {
    var s = e ? [[], []] : {};
    return r = j(r, i), dt(n, function(a, o) {
      var u = r(a, o, n);
      t(s, a, u);
    }), s;
  };
}
const tu = rn(function(t, e, n) {
  Et(t, n) ? t[n].push(e) : t[n] = [e];
}), eu = rn(function(t, e, n) {
  t[n] = e;
}), nu = rn(function(t, e, n) {
  Et(t, n) ? t[n]++ : t[n] = 1;
}), ru = rn(function(t, e, n) {
  t[n ? 0 : 1].push(e);
}, !0);
function iu(t) {
  return t == null ? 0 : Q(t) ? t.length : y(t).length;
}
function su(t, e, n) {
  return e in n;
}
const As = J(function(t, e) {
  var n = {}, r = e[0];
  if (t == null)
    return n;
  M(r) ? (e.length > 1 && (r = Ce(r, e[1])), e = ke(t)) : (r = su, e = Gt(e, !1, !1), t = Object(t));
  for (var i = 0, s = e.length; i < s; i++) {
    var a = e[i], o = t[a];
    r(o, a, t) && (n[a] = o);
  }
  return n;
}), au = J(function(t, e) {
  var n = e[0], r;
  return M(n) ? (n = lr(n), e.length > 1 && (r = e[1])) : (e = Vt(Gt(e, !1, !1), String), n = function(i, s) {
    return !gt(e, s);
  }), As(t, n, r);
});
function Os(t, e, n) {
  return we.call(t, 0, Math.max(0, t.length - (e == null || n ? 1 : e)));
}
function Pn(t, e, n) {
  return t == null || t.length < 1 ? e == null || n ? void 0 : [] : e == null || n ? t[0] : Os(t, t.length - e);
}
function Ge(t, e, n) {
  return we.call(t, e == null || n ? 1 : e);
}
function ou(t, e, n) {
  return t == null || t.length < 1 ? e == null || n ? void 0 : [] : e == null || n ? t[t.length - 1] : Ge(t, Math.max(0, t.length - e));
}
function cu(t) {
  return ne(t, Boolean);
}
function uu(t, e) {
  return Gt(t, e, !1);
}
const ys = J(function(t, e) {
  return e = Gt(e, !0, !0), ne(t, function(n) {
    return !gt(e, n);
  });
}), lu = J(function(t, e) {
  return ys(t, e);
});
function Ln(t, e, n, r) {
  Di(e) || (r = n, n = e, e = !1), n != null && (n = j(n, r));
  for (var i = [], s = [], a = 0, o = X(t); a < o; a++) {
    var u = t[a], l = n ? n(u, a, t) : u;
    e && !n ? ((!a || s !== l) && i.push(u), s = l) : n ? gt(s, l) || (s.push(l), i.push(u)) : gt(i, u) || i.push(u);
  }
  return i;
}
const fu = J(function(t) {
  return Ln(Gt(t, !0, !0));
});
function hu(t) {
  for (var e = [], n = arguments.length, r = 0, i = X(t); r < i; r++) {
    var s = t[r];
    if (!gt(e, s)) {
      var a;
      for (a = 1; a < n && gt(arguments[a], s); a++)
        ;
      a === n && e.push(s);
    }
  }
  return e;
}
function Hn(t) {
  for (var e = t && Ts(t, X).length || 0, n = Array(e), r = 0; r < e; r++)
    n[r] = fr(t, r);
  return n;
}
const gu = J(Hn);
function du(t, e) {
  for (var n = {}, r = 0, i = X(t); r < i; r++)
    e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
  return n;
}
function pu(t, e, n) {
  e == null && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);
  for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++, t += n)
    i[s] = t;
  return i;
}
function mu(t, e) {
  if (e == null || e < 1)
    return [];
  for (var n = [], r = 0, i = t.length; r < i; )
    n.push(we.call(t, r, r += e));
  return n;
}
function hr(t, e) {
  return t._chain ? _(e).chain() : e;
}
function Rs(t) {
  return dt(Vn(t), function(e) {
    var n = _[e] = t[e];
    _.prototype[e] = function() {
      var r = [this._wrapped];
      return $o.apply(r, arguments), hr(this, n.apply(_, r));
    };
  }), _;
}
dt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
  var e = nn[t];
  _.prototype[t] = function() {
    var n = this._wrapped;
    return n != null && (e.apply(n, arguments), (t === "shift" || t === "splice") && n.length === 0 && delete n[0]), hr(this, n);
  };
});
dt(["concat", "join", "slice"], function(t) {
  var e = nn[t];
  _.prototype[t] = function() {
    var n = this._wrapped;
    return n != null && (n = e.apply(n, arguments)), hr(this, n);
  };
});
const vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Hi,
  restArguments: J,
  isObject: Ht,
  isNull: Wo,
  isUndefined: Mi,
  isBoolean: Di,
  isElement: Jo,
  isString: Yn,
  isNumber: Zn,
  isDate: Xo,
  isRegExp: jo,
  isError: Qo,
  isSymbol: zi,
  isArrayBuffer: Ki,
  isDataView: De,
  isArray: $t,
  isFunction: M,
  isArguments: er,
  isFinite: ec,
  isNaN: Xi,
  isTypedArray: Zi,
  isEmpty: ac,
  isMatch: es,
  isEqual: oc,
  isMap: lc,
  isWeakMap: fc,
  isSet: hc,
  isWeakSet: gc,
  keys: y,
  allKeys: ke,
  values: re,
  pairs: dc,
  invert: as,
  functions: Vn,
  methods: Vn,
  extend: os,
  extendOwn: Ke,
  assign: Ke,
  defaults: cs,
  create: mc,
  clone: vc,
  tap: bc,
  get: fs,
  has: wc,
  mapObject: kc,
  identity: or,
  constant: ji,
  noop: gs,
  toPath: ls,
  property: cr,
  propertyOf: Sc,
  matcher: pe,
  matches: pe,
  times: Cc,
  random: Un,
  now: me,
  escape: Ic,
  unescape: Ec,
  templateSettings: xc,
  template: Oc,
  result: yc,
  uniqueId: Bc,
  chain: Fc,
  iteratee: ur,
  partial: ie,
  bind: vs,
  bindAll: Vc,
  memoize: Uc,
  delay: bs,
  defer: Lc,
  throttle: Hc,
  debounce: $c,
  wrap: Gc,
  negate: lr,
  compose: Mc,
  after: Dc,
  before: ws,
  once: zc,
  findKey: ks,
  findIndex: ee,
  findLastIndex: Cs,
  sortedIndex: Is,
  indexOf: Es,
  lastIndexOf: Kc,
  find: qe,
  detect: qe,
  findWhere: qc,
  each: dt,
  forEach: dt,
  map: Vt,
  collect: Vt,
  reduce: Tn,
  foldl: Tn,
  inject: Tn,
  reduceRight: vi,
  foldr: vi,
  filter: ne,
  select: ne,
  reject: Wc,
  every: bi,
  all: bi,
  some: wi,
  any: wi,
  contains: gt,
  includes: gt,
  include: gt,
  invoke: Jc,
  pluck: fr,
  where: Xc,
  max: Ts,
  min: jc,
  shuffle: Yc,
  sample: Ns,
  sortBy: Zc,
  groupBy: tu,
  indexBy: eu,
  countBy: nu,
  partition: ru,
  toArray: Ps,
  size: iu,
  pick: As,
  omit: au,
  first: Pn,
  head: Pn,
  take: Pn,
  initial: Os,
  last: ou,
  rest: Ge,
  tail: Ge,
  drop: Ge,
  compact: cu,
  flatten: uu,
  without: lu,
  uniq: Ln,
  unique: Ln,
  union: fu,
  intersection: hu,
  difference: ys,
  unzip: Hn,
  transpose: Hn,
  zip: gu,
  object: du,
  range: pu,
  chunk: mu,
  mixin: Rs,
  default: _
}, Symbol.toStringTag, { value: "Module" }));
var P = Rs(vu);
P._ = P;
let sn = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class $n {
  instanceIdInternal = $n.generatePluginIdInternal();
  enabledInternal = !0;
  paramsResultInternal = {};
  generatedTrackIdsInternal = [];
  isRollbackable = !1;
  songCacheInternal;
  allowManualApplyAdjust = !1;
  allowReset = !1;
  progress = null;
  isExecuting = !1;
  static providerId() {
    throw new Error("providerId() should be overwritten.");
  }
  static pluginId() {
    throw new Error("pluginId() should be overwritten.");
  }
  async init(e, n) {
  }
  params() {
    return {};
  }
  async run(e, n, r) {
  }
  static async create(e, n, r) {
    const i = new this();
    return i.allowManualApplyAdjust = r.allowManualApplyAdjust, i.allowReset = r.allowReset, i.resetInternal(), await i.init(e, n), i;
  }
  get instanceId() {
    return this.instanceIdInternal;
  }
  getParam(e, n) {
    return e[n];
  }
  hasAllParamsSet() {
    for (const e of y(this.params()))
      if (!this.isParamProvided(e))
        return !1;
    return !0;
  }
  isParamProvided(e) {
    if (this.params()[e].optional)
      return !0;
    const n = this.paramsResultInternal[e];
    if (n == null)
      return !1;
    const i = this.params()[e].widget.type;
    switch (i) {
      case F.Input:
      case F.Pitch:
      case F.Slider:
      case F.TrackSelector:
      case F.Select:
      case F.SelectList:
      case F.Switch:
      case F.InputNumber:
      case F.FileSelector:
        return !0;
      case F.MultiTrackSelector:
        return n.length > 0;
      case F.TrackPitchSelector:
        return n.track !== void 0 && n.track !== null && n.pitch !== void 0 && n.pitch !== null;
      case F.InstrumentSelector:
        return n.program !== void 0 && n.program !== null && n.isDrum !== void 0 && n.isDrum !== null;
      case F.MultiSourceAudioSelector:
        return n != null && n.audioInfo !== void 0 && n.audioInfo !== null;
      case F.None:
        return n != null;
      case F.TextArea:
        return n !== "";
      default:
        throw new Error(
          `Param nullness check needs to be implemented for widget type ${i}. Either use default nullness check or define custom logic.`
        );
    }
  }
  static id() {
    return $n.getPluginFullId(this.providerId(), this.pluginId());
  }
  static getPluginFullId(e, n) {
    return `${e}^_^${n}`;
  }
  static getPrefixedArtifactId(e) {
    return `${this.id()}.${e}`;
  }
  setProgress(e) {
    this.progress = e;
  }
  getProgress() {
    return this.progress;
  }
  getIsExecuting() {
    return this.isExecuting;
  }
  setParamsInternal(e) {
    this.paramsResultInternal = e, this.maybeSyncEnabledWithParamsReadiness();
  }
  getParamsInternal() {
    return this.paramsResultInternal;
  }
  resetParamsInternal() {
    for (const e of y(this.params())) {
      const n = this.params()[e];
      this.paramsResultInternal[e] = n.defaultValue;
    }
    this.maybeSyncEnabledWithParamsReadiness();
  }
  resetInternal() {
    this.resetParamsInternal(), this.allowManualApplyAdjust && (this.enabledInternal = !1);
  }
  setEnabledInternal(e) {
    this.enabledInternal = e;
  }
  maybeSyncEnabledWithParamsReadiness() {
    this.allowManualApplyAdjust && !this.hasAllParamsSet() && this.setEnabledInternal(!1);
  }
  static generatePluginIdInternal() {
    return sn(10);
  }
}
class Bs {
  plugins = [];
  threwErrorInLastRun = !1;
  maxNumPluginsToKeep = 50;
  originalSong;
  cloneSongFnInternal;
  materializeSongFnInternal;
  currentSongIdInternal;
  readApisInternal;
  activePluginIndex = -1;
  addAsOrReplaceActivePlugin(e) {
    let n;
    return this.activePluginIndex <= -1 ? n = 0 : this.plugins[this.activePluginIndex].isRollbackable ? n = this.activePluginIndex + 1 : n = this.activePluginIndex, this.plugins.length > 0 && this.plugins.splice(n, this.plugins.length - n), this.addPluginAt(e, n), this.getPluginIndexByPluginInstanceId(e.instanceId);
  }
  getPlugins() {
    return this.plugins;
  }
  resetCache() {
    for (const e of this.plugins)
      delete e.songCacheInternal;
  }
  setOriginalSong(e) {
    this.originalSong = e;
  }
  hasOriginalSong() {
    return !!this.originalSong;
  }
  async run(e = 0) {
    if (!this.originalSong)
      return this.threwErrorInLastRun = !0, null;
    e = Math.max(0, e), this.setActivePluginIndex(e), this.threwErrorInLastRun = !1;
    const n = this.getIndexOfLatestPluginWithCacheBeforeIndex(e), r = await this.cloneCachedSongAtPluginIndex(n);
    for (let i = e; i < this.plugins.length; i += 1)
      delete this.plugins[i].songCacheInternal;
    for (let i = 0; i < this.plugins.length; i += 1)
      this.plugins[i].isRollbackable = i <= n;
    for (let i = n >= 0 ? n + 1 : 0; i < this.plugins.length; i += 1) {
      const s = this.plugins[i];
      if (!Bs.isPluginRunnable(s))
        return r;
      r.setPluginContextInternal(s);
      try {
        s.isExecuting = !0, s.setProgress(null), await s.run(r, s.getParamsInternal(), this.readApisInternal), r.clearPluginContextInternal(), await this.materializeSongFnInternal(r, this.currentSongIdInternal), s.isExecuting = !1;
      } catch {
        this.threwErrorInLastRun = !0, r.clearPluginContextInternal(), s.isExecuting = !1;
        const o = this.getIndexOfLatestPluginWithCacheBeforeIndex(i);
        return o >= 0 ? await this.cloneSong(this.plugins[o].songCacheInternal) : await this.cloneSong(this.originalSong);
      }
      s.songCacheInternal = await this.cloneSong(r), s.isRollbackable = !0;
    }
    return r;
  }
  restoreCachedPlugin(e) {
    return this.setActivePluginIndex(e), this.cloneCachedSongAtPluginIndex(e);
  }
  async cloneSong(e) {
    if (!this.cloneSongFnInternal)
      throw new Error("Pipeline is not provided with a clone song function.");
    return this.cloneSongFnInternal(e);
  }
  getActivePluginIndex() {
    return this.activePluginIndex;
  }
  setActivePluginIndex(e) {
    this.activePluginIndex = e;
  }
  async cloneCachedSongAtPluginIndex(e) {
    if (e >= 0)
      return await this.cloneSong(this.plugins[e].songCacheInternal);
    if (!this.originalSong)
      throw new Error("Original song is not avaiable to clone.");
    return await this.cloneSong(this.originalSong);
  }
  reset() {
    this.plugins.splice(0, this.plugins.length), this.originalSong = void 0, this.activePluginIndex = -1, this.threwErrorInLastRun = !1;
  }
  isPluginFunctioning(e) {
    return !!e.songCacheInternal;
  }
  getPluginIndexByPluginInstanceId(e) {
    return ee(this.plugins, (n) => n.instanceId === e);
  }
  getThrewErrorInLastRun() {
    return this.threwErrorInLastRun;
  }
  getPluginCache(e) {
    return e.songCacheInternal;
  }
  setMaxNumPluginsToKeep(e) {
    this.maxNumPluginsToKeep = e, this.maintainPluginListSize();
  }
  getIndexOfLatestPluginWithCacheBeforeIndex(e) {
    for (let n = e - 1; n >= 0; n -= 1)
      if (this.getPluginCache(this.plugins[n]))
        return n;
    return -1;
  }
  maintainPluginListSize() {
    for (; this.plugins.length > this.maxNumPluginsToKeep && this.plugins.length > 0; )
      this.plugins.shift();
  }
  addPluginAt(e, n) {
    this.plugins.splice(n, 0, e), this.maintainPluginListSize();
  }
  static isPluginRunnable(e) {
    return e.enabledInternal && e.hasAllParamsSet();
  }
}
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bu(t) {
  var e = t.default;
  if (typeof e == "function") {
    var n = function() {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
function wu(t, e, n, r, i) {
  for (var s = i + 1; r <= i; ) {
    var a = r + i >>> 1, o = t[a], u = n !== void 0 ? n(o, e) : o - e;
    u >= 0 ? (s = a, i = a - 1) : r = a + 1;
  }
  return s;
}
function ku(t, e, n, r, i) {
  for (var s = i + 1; r <= i; ) {
    var a = r + i >>> 1, o = t[a], u = n !== void 0 ? n(o, e) : o - e;
    u > 0 ? (s = a, i = a - 1) : r = a + 1;
  }
  return s;
}
function Su(t, e, n, r, i) {
  for (var s = r - 1; r <= i; ) {
    var a = r + i >>> 1, o = t[a], u = n !== void 0 ? n(o, e) : o - e;
    u < 0 ? (s = a, r = a + 1) : i = a - 1;
  }
  return s;
}
function Cu(t, e, n, r, i) {
  for (var s = r - 1; r <= i; ) {
    var a = r + i >>> 1, o = t[a], u = n !== void 0 ? n(o, e) : o - e;
    u <= 0 ? (s = a, r = a + 1) : i = a - 1;
  }
  return s;
}
function Iu(t, e, n, r, i) {
  for (; r <= i; ) {
    var s = r + i >>> 1, a = t[s], o = n !== void 0 ? n(a, e) : a - e;
    if (o === 0)
      return s;
    o <= 0 ? r = s + 1 : i = s - 1;
  }
  return -1;
}
function oe(t, e, n, r, i, s) {
  return typeof n == "function" ? s(t, e, n, r === void 0 ? 0 : r | 0, i === void 0 ? t.length - 1 : i | 0) : s(t, e, void 0, n === void 0 ? 0 : n | 0, r === void 0 ? t.length - 1 : r | 0);
}
var T = {
  ge: function(t, e, n, r, i) {
    return oe(t, e, n, r, i, wu);
  },
  gt: function(t, e, n, r, i) {
    return oe(t, e, n, r, i, ku);
  },
  lt: function(t, e, n, r, i) {
    return oe(t, e, n, r, i, Su);
  },
  le: function(t, e, n, r, i) {
    return oe(t, e, n, r, i, Cu);
  },
  eq: function(t, e, n, r, i) {
    return oe(t, e, n, r, i, Iu);
  }
}, Gn = { exports: {} };
(function(t, e) {
  var n = 200, r = "__lodash_hash_undefined__", i = 9007199254740991, s = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", u = "[object Date]", l = "[object Error]", d = "[object Function]", f = "[object GeneratorFunction]", g = "[object Map]", m = "[object Number]", b = "[object Object]", v = "[object Promise]", k = "[object RegExp]", C = "[object Set]", U = "[object String]", I = "[object Symbol]", S = "[object WeakMap]", A = "[object ArrayBuffer]", ot = "[object DataView]", Mt = "[object Float32Array]", Ar = "[object Float64Array]", Or = "[object Int8Array]", yr = "[object Int16Array]", Rr = "[object Int32Array]", Br = "[object Uint8Array]", Fr = "[object Uint8ClampedArray]", Vr = "[object Uint16Array]", Ur = "[object Uint32Array]", pa = /[\\^$.*+?()[\]{}|]/g, ma = /\w*$/, va = /^\[object .+?Constructor\]$/, ba = /^(?:0|[1-9]\d*)$/, x = {};
  x[s] = x[a] = x[A] = x[ot] = x[o] = x[u] = x[Mt] = x[Ar] = x[Or] = x[yr] = x[Rr] = x[g] = x[m] = x[b] = x[k] = x[C] = x[U] = x[I] = x[Br] = x[Fr] = x[Vr] = x[Ur] = !0, x[l] = x[d] = x[S] = !1;
  var wa = typeof lt == "object" && lt && lt.Object === Object && lt, ka = typeof self == "object" && self && self.Object === Object && self, ft = wa || ka || Function("return this")(), Lr = e && !e.nodeType && e, Hr = Lr && !0 && t && !t.nodeType && t, Sa = Hr && Hr.exports === Lr;
  function Ca(c, h) {
    return c.set(h[0], h[1]), c;
  }
  function Ia(c, h) {
    return c.add(h), c;
  }
  function _a(c, h) {
    for (var p = -1, w = c ? c.length : 0; ++p < w && h(c[p], p, c) !== !1; )
      ;
    return c;
  }
  function Ea(c, h) {
    for (var p = -1, w = h.length, B = c.length; ++p < w; )
      c[B + p] = h[p];
    return c;
  }
  function $r(c, h, p, w) {
    var B = -1, L = c ? c.length : 0;
    for (w && L && (p = c[++B]); ++B < L; )
      p = h(p, c[B], B, c);
    return p;
  }
  function xa(c, h) {
    for (var p = -1, w = Array(c); ++p < c; )
      w[p] = h(p);
    return w;
  }
  function Ta(c, h) {
    return c == null ? void 0 : c[h];
  }
  function Gr(c) {
    var h = !1;
    if (c != null && typeof c.toString != "function")
      try {
        h = !!(c + "");
      } catch {
      }
    return h;
  }
  function Mr(c) {
    var h = -1, p = Array(c.size);
    return c.forEach(function(w, B) {
      p[++h] = [B, w];
    }), p;
  }
  function pn(c, h) {
    return function(p) {
      return c(h(p));
    };
  }
  function Dr(c) {
    var h = -1, p = Array(c.size);
    return c.forEach(function(w) {
      p[++h] = w;
    }), p;
  }
  var Pa = Array.prototype, Na = Function.prototype, Ie = Object.prototype, mn = ft["__core-js_shared__"], zr = function() {
    var c = /[^.]+$/.exec(mn && mn.keys && mn.keys.IE_PROTO || "");
    return c ? "Symbol(src)_1." + c : "";
  }(), Kr = Na.toString, pt = Ie.hasOwnProperty, _e = Ie.toString, Aa = RegExp(
    "^" + Kr.call(pt).replace(pa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qr = Sa ? ft.Buffer : void 0, Wr = ft.Symbol, Jr = ft.Uint8Array, Oa = pn(Object.getPrototypeOf, Object), ya = Object.create, Ra = Ie.propertyIsEnumerable, Ba = Pa.splice, Xr = Object.getOwnPropertySymbols, Fa = qr ? qr.isBuffer : void 0, Va = pn(Object.keys, Object), vn = Kt(ft, "DataView"), se = Kt(ft, "Map"), bn = Kt(ft, "Promise"), wn = Kt(ft, "Set"), kn = Kt(ft, "WeakMap"), ae = Kt(Object, "create"), Ua = Pt(vn), La = Pt(se), Ha = Pt(bn), $a = Pt(wn), Ga = Pt(kn), jr = Wr ? Wr.prototype : void 0, Qr = jr ? jr.valueOf : void 0;
  function xt(c) {
    var h = -1, p = c ? c.length : 0;
    for (this.clear(); ++h < p; ) {
      var w = c[h];
      this.set(w[0], w[1]);
    }
  }
  function Ma() {
    this.__data__ = ae ? ae(null) : {};
  }
  function Da(c) {
    return this.has(c) && delete this.__data__[c];
  }
  function za(c) {
    var h = this.__data__;
    if (ae) {
      var p = h[c];
      return p === r ? void 0 : p;
    }
    return pt.call(h, c) ? h[c] : void 0;
  }
  function Ka(c) {
    var h = this.__data__;
    return ae ? h[c] !== void 0 : pt.call(h, c);
  }
  function qa(c, h) {
    var p = this.__data__;
    return p[c] = ae && h === void 0 ? r : h, this;
  }
  xt.prototype.clear = Ma, xt.prototype.delete = Da, xt.prototype.get = za, xt.prototype.has = Ka, xt.prototype.set = qa;
  function ht(c) {
    var h = -1, p = c ? c.length : 0;
    for (this.clear(); ++h < p; ) {
      var w = c[h];
      this.set(w[0], w[1]);
    }
  }
  function Wa() {
    this.__data__ = [];
  }
  function Ja(c) {
    var h = this.__data__, p = Ee(h, c);
    if (p < 0)
      return !1;
    var w = h.length - 1;
    return p == w ? h.pop() : Ba.call(h, p, 1), !0;
  }
  function Xa(c) {
    var h = this.__data__, p = Ee(h, c);
    return p < 0 ? void 0 : h[p][1];
  }
  function ja(c) {
    return Ee(this.__data__, c) > -1;
  }
  function Qa(c, h) {
    var p = this.__data__, w = Ee(p, c);
    return w < 0 ? p.push([c, h]) : p[w][1] = h, this;
  }
  ht.prototype.clear = Wa, ht.prototype.delete = Ja, ht.prototype.get = Xa, ht.prototype.has = ja, ht.prototype.set = Qa;
  function Dt(c) {
    var h = -1, p = c ? c.length : 0;
    for (this.clear(); ++h < p; ) {
      var w = c[h];
      this.set(w[0], w[1]);
    }
  }
  function Ya() {
    this.__data__ = {
      hash: new xt(),
      map: new (se || ht)(),
      string: new xt()
    };
  }
  function Za(c) {
    return xe(this, c).delete(c);
  }
  function to(c) {
    return xe(this, c).get(c);
  }
  function eo(c) {
    return xe(this, c).has(c);
  }
  function no(c, h) {
    return xe(this, c).set(c, h), this;
  }
  Dt.prototype.clear = Ya, Dt.prototype.delete = Za, Dt.prototype.get = to, Dt.prototype.has = eo, Dt.prototype.set = no;
  function zt(c) {
    this.__data__ = new ht(c);
  }
  function ro() {
    this.__data__ = new ht();
  }
  function io(c) {
    return this.__data__.delete(c);
  }
  function so(c) {
    return this.__data__.get(c);
  }
  function ao(c) {
    return this.__data__.has(c);
  }
  function oo(c, h) {
    var p = this.__data__;
    if (p instanceof ht) {
      var w = p.__data__;
      if (!se || w.length < n - 1)
        return w.push([c, h]), this;
      p = this.__data__ = new Dt(w);
    }
    return p.set(c, h), this;
  }
  zt.prototype.clear = ro, zt.prototype.delete = io, zt.prototype.get = so, zt.prototype.has = ao, zt.prototype.set = oo;
  function co(c, h) {
    var p = In(c) || Ro(c) ? xa(c.length, String) : [], w = p.length, B = !!w;
    for (var L in c)
      (h || pt.call(c, L)) && !(B && (L == "length" || No(L, w))) && p.push(L);
    return p;
  }
  function Yr(c, h, p) {
    var w = c[h];
    (!(pt.call(c, h) && ni(w, p)) || p === void 0 && !(h in c)) && (c[h] = p);
  }
  function Ee(c, h) {
    for (var p = c.length; p--; )
      if (ni(c[p][0], h))
        return p;
    return -1;
  }
  function uo(c, h) {
    return c && Zr(h, _n(h), c);
  }
  function Sn(c, h, p, w, B, L, Y) {
    var K;
    if (w && (K = L ? w(c, B, L, Y) : w(c)), K !== void 0)
      return K;
    if (!Te(c))
      return c;
    var si = In(c);
    if (si) {
      if (K = xo(c), !h)
        return Io(c, K);
    } else {
      var qt = Tt(c), ai = qt == d || qt == f;
      if (Fo(c))
        return mo(c, h);
      if (qt == b || qt == s || ai && !L) {
        if (Gr(c))
          return L ? c : {};
        if (K = To(ai ? {} : c), !h)
          return _o(c, uo(K, c));
      } else {
        if (!x[qt])
          return L ? c : {};
        K = Po(c, qt, Sn, h);
      }
    }
    Y || (Y = new zt());
    var oi = Y.get(c);
    if (oi)
      return oi;
    if (Y.set(c, K), !si)
      var ci = p ? Eo(c) : _n(c);
    return _a(ci || c, function(En, Pe) {
      ci && (Pe = En, En = c[Pe]), Yr(K, Pe, Sn(En, h, p, w, Pe, c, Y));
    }), K;
  }
  function lo(c) {
    return Te(c) ? ya(c) : {};
  }
  function fo(c, h, p) {
    var w = h(c);
    return In(c) ? w : Ea(w, p(c));
  }
  function ho(c) {
    return _e.call(c);
  }
  function go(c) {
    if (!Te(c) || Oo(c))
      return !1;
    var h = ii(c) || Gr(c) ? Aa : va;
    return h.test(Pt(c));
  }
  function po(c) {
    if (!ei(c))
      return Va(c);
    var h = [];
    for (var p in Object(c))
      pt.call(c, p) && p != "constructor" && h.push(p);
    return h;
  }
  function mo(c, h) {
    if (h)
      return c.slice();
    var p = new c.constructor(c.length);
    return c.copy(p), p;
  }
  function Cn(c) {
    var h = new c.constructor(c.byteLength);
    return new Jr(h).set(new Jr(c)), h;
  }
  function vo(c, h) {
    var p = h ? Cn(c.buffer) : c.buffer;
    return new c.constructor(p, c.byteOffset, c.byteLength);
  }
  function bo(c, h, p) {
    var w = h ? p(Mr(c), !0) : Mr(c);
    return $r(w, Ca, new c.constructor());
  }
  function wo(c) {
    var h = new c.constructor(c.source, ma.exec(c));
    return h.lastIndex = c.lastIndex, h;
  }
  function ko(c, h, p) {
    var w = h ? p(Dr(c), !0) : Dr(c);
    return $r(w, Ia, new c.constructor());
  }
  function So(c) {
    return Qr ? Object(Qr.call(c)) : {};
  }
  function Co(c, h) {
    var p = h ? Cn(c.buffer) : c.buffer;
    return new c.constructor(p, c.byteOffset, c.length);
  }
  function Io(c, h) {
    var p = -1, w = c.length;
    for (h || (h = Array(w)); ++p < w; )
      h[p] = c[p];
    return h;
  }
  function Zr(c, h, p, w) {
    p || (p = {});
    for (var B = -1, L = h.length; ++B < L; ) {
      var Y = h[B], K = w ? w(p[Y], c[Y], Y, p, c) : void 0;
      Yr(p, Y, K === void 0 ? c[Y] : K);
    }
    return p;
  }
  function _o(c, h) {
    return Zr(c, ti(c), h);
  }
  function Eo(c) {
    return fo(c, _n, ti);
  }
  function xe(c, h) {
    var p = c.__data__;
    return Ao(h) ? p[typeof h == "string" ? "string" : "hash"] : p.map;
  }
  function Kt(c, h) {
    var p = Ta(c, h);
    return go(p) ? p : void 0;
  }
  var ti = Xr ? pn(Xr, Object) : Lo, Tt = ho;
  (vn && Tt(new vn(new ArrayBuffer(1))) != ot || se && Tt(new se()) != g || bn && Tt(bn.resolve()) != v || wn && Tt(new wn()) != C || kn && Tt(new kn()) != S) && (Tt = function(c) {
    var h = _e.call(c), p = h == b ? c.constructor : void 0, w = p ? Pt(p) : void 0;
    if (w)
      switch (w) {
        case Ua:
          return ot;
        case La:
          return g;
        case Ha:
          return v;
        case $a:
          return C;
        case Ga:
          return S;
      }
    return h;
  });
  function xo(c) {
    var h = c.length, p = c.constructor(h);
    return h && typeof c[0] == "string" && pt.call(c, "index") && (p.index = c.index, p.input = c.input), p;
  }
  function To(c) {
    return typeof c.constructor == "function" && !ei(c) ? lo(Oa(c)) : {};
  }
  function Po(c, h, p, w) {
    var B = c.constructor;
    switch (h) {
      case A:
        return Cn(c);
      case o:
      case u:
        return new B(+c);
      case ot:
        return vo(c, w);
      case Mt:
      case Ar:
      case Or:
      case yr:
      case Rr:
      case Br:
      case Fr:
      case Vr:
      case Ur:
        return Co(c, w);
      case g:
        return bo(c, w, p);
      case m:
      case U:
        return new B(c);
      case k:
        return wo(c);
      case C:
        return ko(c, w, p);
      case I:
        return So(c);
    }
  }
  function No(c, h) {
    return h = h ?? i, !!h && (typeof c == "number" || ba.test(c)) && c > -1 && c % 1 == 0 && c < h;
  }
  function Ao(c) {
    var h = typeof c;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? c !== "__proto__" : c === null;
  }
  function Oo(c) {
    return !!zr && zr in c;
  }
  function ei(c) {
    var h = c && c.constructor, p = typeof h == "function" && h.prototype || Ie;
    return c === p;
  }
  function Pt(c) {
    if (c != null) {
      try {
        return Kr.call(c);
      } catch {
      }
      try {
        return c + "";
      } catch {
      }
    }
    return "";
  }
  function yo(c) {
    return Sn(c, !0, !0);
  }
  function ni(c, h) {
    return c === h || c !== c && h !== h;
  }
  function Ro(c) {
    return Bo(c) && pt.call(c, "callee") && (!Ra.call(c, "callee") || _e.call(c) == s);
  }
  var In = Array.isArray;
  function ri(c) {
    return c != null && Vo(c.length) && !ii(c);
  }
  function Bo(c) {
    return Uo(c) && ri(c);
  }
  var Fo = Fa || Ho;
  function ii(c) {
    var h = Te(c) ? _e.call(c) : "";
    return h == d || h == f;
  }
  function Vo(c) {
    return typeof c == "number" && c > -1 && c % 1 == 0 && c <= i;
  }
  function Te(c) {
    var h = typeof c;
    return !!c && (h == "object" || h == "function");
  }
  function Uo(c) {
    return !!c && typeof c == "object";
  }
  function _n(c) {
    return ri(c) ? co(c) : po(c);
  }
  function Lo() {
    return [];
  }
  function Ho() {
    return !1;
  }
  t.exports = yo;
})(Gn, Gn.exports);
const ki = Gn.exports;
class Ne {
  ticks;
  bpm;
  time;
  constructor({
    ticks: e,
    bpm: n,
    time: r
  }) {
    this.ticks = e, this.bpm = n, this.time = r;
  }
  getTicks() {
    return this.ticks;
  }
  getBpm() {
    return this.bpm;
  }
  setBpmInternal(e) {
    this.bpm = e;
  }
  getTime() {
    return this.time;
  }
  setTimeInternal(e) {
    this.time = e;
  }
}
class Si {
  ticks;
  numerator;
  denominator;
  constructor({
    ticks: e,
    numerator: n,
    denominator: r
  }) {
    this.ticks = e, this.numerator = n, this.denominator = r;
  }
  getTicks() {
    return this.ticks;
  }
  setTicks(e) {
    this.ticks = e;
  }
  getNumerator() {
    return this.numerator;
  }
  setNumerator(e) {
    this.numerator = e;
  }
  getDenominator() {
    return this.denominator;
  }
  setDenominator(e) {
    this.denominator = e;
  }
}
function _u(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function gr(t) {
  if (N(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = at(r) ? Pu(r) : gr(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else {
    if (at(t))
      return t;
    if (W(t))
      return t;
  }
}
const Eu = /;(?![^(]*\))/g, xu = /:([^]+)/, Tu = /\/\*.*?\*\//gs;
function Pu(t) {
  const e = {};
  return t.replace(Tu, "").split(Eu).forEach((n) => {
    if (n) {
      const r = n.split(xu);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function dr(t) {
  let e = "";
  if (at(t))
    e = t;
  else if (N(t))
    for (let n = 0; n < t.length; n++) {
      const r = dr(t[n]);
      r && (e += r + " ");
    }
  else if (W(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const ut = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const pr = () => {
}, Nu = () => !1, Au = /^on[^a-z]/, Ou = (t) => Au.test(t), st = Object.assign, yu = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Ru = Object.prototype.hasOwnProperty, O = (t, e) => Ru.call(t, e), N = Array.isArray, Qt = (t) => an(t) === "[object Map]", Bu = (t) => an(t) === "[object Set]", D = (t) => typeof t == "function", at = (t) => typeof t == "string", mr = (t) => typeof t == "symbol", W = (t) => t !== null && typeof t == "object", Fu = (t) => W(t) && D(t.then) && D(t.catch), Vu = Object.prototype.toString, an = (t) => Vu.call(t), Fs = (t) => an(t).slice(8, -1), Uu = (t) => an(t) === "[object Object]", vr = (t) => at(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Lu = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, wh = Lu((t) => t.charAt(0).toUpperCase() + t.slice(1)), We = (t, e) => !Object.is(t, e), Hu = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, $u = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ci;
const Gu = () => Ci || (Ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ii(t, ...e) {
}
let Mu;
function Du(t, e = Mu) {
  e && e.active && e.effects.push(t);
}
const Mn = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Vs = (t) => (t.w & It) > 0, Us = (t) => (t.n & It) > 0, zu = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= It;
}, Ku = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      Vs(i) && !Us(i) ? i.delete(t) : e[n++] = i, i.w &= ~It, i.n &= ~It;
    }
    e.length = n;
  }
}, Dn = /* @__PURE__ */ new WeakMap();
let ue = 0, It = 1;
const zn = 30;
let q;
const Ot = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Kn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class qu {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Du(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = q, n = yt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = q, q = this, yt = !0, It = 1 << ++ue, ue <= zn ? zu(this) : _i(this), this.fn();
    } finally {
      ue <= zn && Ku(this), It = 1 << --ue, q = this.parent, yt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    q === this ? this.deferStop = !0 : this.active && (_i(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function _i(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let yt = !0;
const Ls = [];
function Hs() {
  Ls.push(yt), yt = !1;
}
function $s() {
  const t = Ls.pop();
  yt = t === void 0 ? !0 : t;
}
function rt(t, e, n) {
  if (yt && q) {
    let r = Dn.get(t);
    r || Dn.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Mn());
    const s = process.env.NODE_ENV !== "production" ? { effect: q, target: t, type: e, key: n } : void 0;
    Wu(i, s);
  }
}
function Wu(t, e) {
  let n = !1;
  ue <= zn ? Us(t) || (t.n |= It, n = !Vs(t)) : n = !t.has(q), n && (t.add(q), q.deps.push(t), process.env.NODE_ENV !== "production" && q.onTrack && q.onTrack(Object.assign({ effect: q }, e)));
}
function _t(t, e, n, r, i, s) {
  const a = Dn.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && N(t)) {
    const l = $u(r);
    a.forEach((d, f) => {
      (f === "length" || f >= l) && o.push(d);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        N(t) ? vr(n) && o.push(a.get("length")) : (o.push(a.get(Ot)), Qt(t) && o.push(a.get(Kn)));
        break;
      case "delete":
        N(t) || (o.push(a.get(Ot)), Qt(t) && o.push(a.get(Kn)));
        break;
      case "set":
        Qt(t) && o.push(a.get(Ot));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s } : void 0;
  if (o.length === 1)
    o[0] && (process.env.NODE_ENV !== "production" ? Ae(o[0], u) : Ae(o[0]));
  else {
    const l = [];
    for (const d of o)
      d && l.push(...d);
    process.env.NODE_ENV !== "production" ? Ae(Mn(l), u) : Ae(Mn(l));
  }
}
function Ae(t, e) {
  const n = N(t) ? t : [...t];
  for (const r of n)
    r.computed && Ei(r, e);
  for (const r of n)
    r.computed || Ei(r, e);
}
function Ei(t, e) {
  (t !== q || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(st({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Ju = /* @__PURE__ */ _u("__proto__,__v_isRef,__isVue"), Gs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(mr)
), Xu = /* @__PURE__ */ br(), ju = /* @__PURE__ */ br(!0), Qu = /* @__PURE__ */ br(!0, !0), xi = /* @__PURE__ */ Yu();
function Yu() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = E(this);
      for (let s = 0, a = this.length; s < a; s++)
        rt(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(E)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Hs();
      const r = E(this)[e].apply(this, n);
      return $s(), r;
    };
  }), t;
}
function br(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !t;
    if (i === "__v_isReadonly")
      return t;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && s === (t ? e ? qs : Ks : e ? dl : zs).get(r))
      return r;
    const a = N(r);
    if (!t && a && O(xi, i))
      return Reflect.get(xi, i, s);
    const o = Reflect.get(r, i, s);
    return (mr(i) ? Gs.has(i) : Ju(i)) || (t || rt(r, "get", i), e) ? o : G(o) ? a && vr(i) ? o : o.value : W(o) ? t ? Js(o) : Ws(o) : o;
  };
}
const Zu = /* @__PURE__ */ tl();
function tl(t = !1) {
  return function(n, r, i, s) {
    let a = n[r];
    if (Ut(a) && G(a) && !G(i))
      return !1;
    if (!t && (!qn(i) && !Ut(i) && (a = E(a), i = E(i)), !N(n) && G(a) && !G(i)))
      return a.value = i, !0;
    const o = N(n) && vr(r) ? Number(r) < n.length : O(n, r), u = Reflect.set(n, r, i, s);
    return n === E(s) && (o ? We(i, a) && _t(n, "set", r, i, a) : _t(n, "add", r, i)), u;
  };
}
function el(t, e) {
  const n = O(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && _t(t, "delete", e, void 0, r), i;
}
function nl(t, e) {
  const n = Reflect.has(t, e);
  return (!mr(e) || !Gs.has(e)) && rt(t, "has", e), n;
}
function rl(t) {
  return rt(t, "iterate", N(t) ? "length" : Ot), Reflect.ownKeys(t);
}
const il = {
  get: Xu,
  set: Zu,
  deleteProperty: el,
  has: nl,
  ownKeys: rl
}, Ms = {
  get: ju,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Ii(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Ii(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, sl = /* @__PURE__ */ st({}, Ms, {
  get: Qu
}), wr = (t) => t, on = (t) => Reflect.getPrototypeOf(t);
function Oe(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = E(t), s = E(e);
  n || (e !== s && rt(i, "get", e), rt(i, "get", s));
  const { has: a } = on(i), o = r ? wr : n ? Ir : Cr;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function ye(t, e = !1) {
  const n = this.__v_raw, r = E(n), i = E(t);
  return e || (t !== i && rt(r, "has", t), rt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Re(t, e = !1) {
  return t = t.__v_raw, !e && rt(E(t), "iterate", Ot), Reflect.get(t, "size", t);
}
function Ti(t) {
  t = E(t);
  const e = E(this);
  return on(e).has.call(e, t) || (e.add(t), _t(e, "add", t, t)), this;
}
function Pi(t, e) {
  e = E(e);
  const n = E(this), { has: r, get: i } = on(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && Ds(n, r, t) : (t = E(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? We(e, a) && _t(n, "set", t, e, a) : _t(n, "add", t, e), this;
}
function Ni(t) {
  const e = E(this), { has: n, get: r } = on(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && Ds(e, n, t) : (t = E(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && _t(e, "delete", t, void 0, s), a;
}
function Ai() {
  const t = E(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Qt(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && _t(t, "clear", void 0, void 0, n), r;
}
function Be(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = E(a), u = e ? wr : t ? Ir : Cr;
    return !t && rt(o, "iterate", Ot), a.forEach((l, d) => r.call(i, u(l), u(d), s));
  };
}
function Fe(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = E(i), a = Qt(s), o = t === "entries" || t === Symbol.iterator && a, u = t === "keys" && a, l = i[t](...r), d = n ? wr : e ? Ir : Cr;
    return !e && rt(s, "iterate", u ? Kn : Ot), {
      next() {
        const { value: f, done: g } = l.next();
        return g ? { value: f, done: g } : {
          value: o ? [d(f[0]), d(f[1])] : d(f),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function mt(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
    }
    return t === "delete" ? !1 : this;
  };
}
function al() {
  const t = {
    get(s) {
      return Oe(this, s);
    },
    get size() {
      return Re(this);
    },
    has: ye,
    add: Ti,
    set: Pi,
    delete: Ni,
    clear: Ai,
    forEach: Be(!1, !1)
  }, e = {
    get(s) {
      return Oe(this, s, !1, !0);
    },
    get size() {
      return Re(this);
    },
    has: ye,
    add: Ti,
    set: Pi,
    delete: Ni,
    clear: Ai,
    forEach: Be(!1, !0)
  }, n = {
    get(s) {
      return Oe(this, s, !0);
    },
    get size() {
      return Re(this, !0);
    },
    has(s) {
      return ye.call(this, s, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Be(!0, !1)
  }, r = {
    get(s) {
      return Oe(this, s, !0, !0);
    },
    get size() {
      return Re(this, !0);
    },
    has(s) {
      return ye.call(this, s, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Be(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Fe(s, !1, !1), n[s] = Fe(s, !0, !1), e[s] = Fe(s, !1, !0), r[s] = Fe(s, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [ol, cl, ul, ll] = /* @__PURE__ */ al();
function kr(t, e) {
  const n = e ? t ? ll : ul : t ? cl : ol;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(O(n, i) && i in r ? n : r, i, s);
}
const fl = {
  get: /* @__PURE__ */ kr(!1, !1)
}, hl = {
  get: /* @__PURE__ */ kr(!0, !1)
}, gl = {
  get: /* @__PURE__ */ kr(!0, !0)
};
function Ds(t, e, n) {
  const r = E(n);
  if (r !== n && e.call(t, r)) {
    const i = Fs(t);
  }
}
const zs = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap();
function pl(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ml(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : pl(Fs(t));
}
function Ws(t) {
  return Ut(t) ? t : Sr(t, !1, il, fl, zs);
}
function Js(t) {
  return Sr(t, !0, Ms, hl, Ks);
}
function Ve(t) {
  return Sr(t, !0, sl, gl, qs);
}
function Sr(t, e, n, r, i) {
  if (!W(t))
    return process.env.NODE_ENV, t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = ml(t);
  if (a === 0)
    return t;
  const o = new Proxy(t, a === 2 ? r : n);
  return i.set(t, o), o;
}
function Rt(t) {
  return Ut(t) ? Rt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ut(t) {
  return !!(t && t.__v_isReadonly);
}
function qn(t) {
  return !!(t && t.__v_isShallow);
}
function Je(t) {
  return Rt(t) || Ut(t);
}
function E(t) {
  const e = t && t.__v_raw;
  return e ? E(e) : t;
}
function vl(t) {
  return Hu(t, "__v_skip", !0), t;
}
const Cr = (t) => W(t) ? Ws(t) : t, Ir = (t) => W(t) ? Js(t) : t;
function G(t) {
  return !!(t && t.__v_isRef === !0);
}
function bl(t) {
  return G(t) ? t.value : t;
}
const wl = {
  get: (t, e, n) => bl(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return G(i) && !G(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function kl(t) {
  return Rt(t) ? t : new Proxy(t, wl);
}
const Bt = [];
function Sl(t) {
  Bt.push(t);
}
function Cl() {
  Bt.pop();
}
function $(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  Hs();
  const n = Bt.length ? Bt[Bt.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Il();
  if (r)
    Ft(r, n, 11, [
      t + e.join(""),
      n && n.proxy,
      i.map(({ vnode: s }) => `at <${ua(n, s.type)}>`).join(`
`),
      i
    ]);
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ..._l(i));
  }
  $s();
}
function Il() {
  let t = Bt[Bt.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function _l(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...El(n));
  }), e;
}
function El({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${ua(t.component, t.type, r)}`, s = ">" + n;
  return t.props ? [i, ...xl(t.props), s] : [i + s];
}
function xl(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...Xs(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Xs(t, e, n) {
  return at(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : G(e) ? (e = Xs(t, E(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : D(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = E(e), n ? e : [`${t}=`, e]);
}
const js = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ft(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    Qs(s, e, n);
  }
  return i;
}
function Wn(t, e, n, r) {
  if (D(t)) {
    const s = Ft(t, e, n, r);
    return s && Fu(s) && s.catch((a) => {
      Qs(a, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Wn(t[s], e, n, r));
  return i;
}
function Qs(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? js[n] : n;
    for (; s; ) {
      const l = s.ec;
      if (l) {
        for (let d = 0; d < l.length; d++)
          if (l[d](t, a, o) === !1)
            return;
      }
      s = s.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      Ft(u, null, 10, [t, a, o]);
      return;
    }
  }
  Tl(t, n, i, r);
}
function Tl(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = js[e];
    if (n && Sl(n), $(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Cl(), r)
      throw t;
  }
}
let Xe = !1, Jn = !1;
const it = [];
let wt = 0;
const Yt = [];
let ct = null, bt = 0;
const Ys = /* @__PURE__ */ Promise.resolve();
let _r = null;
const Pl = 100;
function Nl(t) {
  const e = _r || Ys;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Al(t) {
  let e = wt + 1, n = it.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    ve(it[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function Er(t) {
  (!it.length || !it.includes(t, Xe && t.allowRecurse ? wt + 1 : wt)) && (t.id == null ? it.push(t) : it.splice(Al(t.id), 0, t), Zs());
}
function Zs() {
  !Xe && !Jn && (Jn = !0, _r = Ys.then(ea));
}
function ta(t) {
  N(t) ? Yt.push(...t) : (!ct || !ct.includes(t, t.allowRecurse ? bt + 1 : bt)) && Yt.push(t), Zs();
}
function Ol(t) {
  if (Yt.length) {
    const e = [...new Set(Yt)];
    if (Yt.length = 0, ct) {
      ct.push(...e);
      return;
    }
    for (ct = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ct.sort((n, r) => ve(n) - ve(r)), bt = 0; bt < ct.length; bt++)
      process.env.NODE_ENV !== "production" && na(t, ct[bt]) || ct[bt]();
    ct = null, bt = 0;
  }
}
const ve = (t) => t.id == null ? 1 / 0 : t.id, yl = (t, e) => {
  const n = ve(t) - ve(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function ea(t) {
  Jn = !1, Xe = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), it.sort(yl);
  const e = process.env.NODE_ENV !== "production" ? (n) => na(t, n) : pr;
  try {
    for (wt = 0; wt < it.length; wt++) {
      const n = it[wt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Ft(n, null, 14);
      }
    }
  } finally {
    wt = 0, it.length = 0, Ol(t), Xe = !1, _r = null, (it.length || Yt.length) && ea(t);
  }
}
function na(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Pl) {
      const r = e.ownerInstance, i = r && ca(r.type);
      return $(`Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      t.set(e, n + 1);
  }
}
const ce = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Gu().__VUE_HMR_RUNTIME__ = {
  createRecord: Nn(Rl),
  rerender: Nn(Bl),
  reload: Nn(Fl)
});
const je = /* @__PURE__ */ new Map();
function Rl(t, e) {
  return je.has(t) ? !1 : (je.set(t, {
    initialDef: fe(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function fe(t) {
  return la(t) ? t.__vccOpts : t;
}
function Bl(t, e) {
  const n = je.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, fe(r.type).render = e), r.renderCache = [], r.update();
  }));
}
function Fl(t, e) {
  const n = je.get(t);
  if (!n)
    return;
  e = fe(e), Oi(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = fe(i.type);
    ce.has(s) || (s !== n.initialDef && Oi(s, e), ce.add(s)), i.appContext.optionsCache.delete(i.type), i.ceReload ? (ce.add(s), i.ceReload(e.styles), ce.delete(s)) : i.parent ? Er(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" && window.location.reload();
  }
  ta(() => {
    for (const i of r)
      ce.delete(fe(i.type));
  });
}
function Oi(t, e) {
  st(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Nn(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch {
    }
  };
}
let kt = null, Vl = null;
const Ul = (t) => t.__isSuspense;
function Ll(t, e) {
  e && e.pendingBranch ? N(t) ? e.effects.push(...t) : e.effects.push(t) : ta(t);
}
const Ue = {};
function Hl(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: a } = ut) {
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && $('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && $('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const o = (I) => {
    $("Invalid watch source: ", I, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Zt;
  let l, d = !1, f = !1;
  if (G(t) ? (l = () => t.value, d = qn(t)) : Rt(t) ? (l = () => t, r = !0) : N(t) ? (f = !0, d = t.some((I) => Rt(I) || qn(I)), l = () => t.map((I) => {
    if (G(I))
      return I.value;
    if (Rt(I))
      return Xt(I);
    if (D(I))
      return Ft(I, u, 2);
    process.env.NODE_ENV !== "production" && o(I);
  })) : D(t) ? e ? l = () => Ft(t, u, 2) : l = () => {
    if (!(u && u.isUnmounted))
      return g && g(), Wn(t, u, 3, [m]);
  } : (l = pr, process.env.NODE_ENV !== "production" && o(t)), e && r) {
    const I = l;
    l = () => Xt(I());
  }
  let g, m = (I) => {
    g = C.onStop = () => {
      Ft(I, u, 4);
    };
  }, b = f ? new Array(t.length).fill(Ue) : Ue;
  const v = () => {
    if (!!C.active)
      if (e) {
        const I = C.run();
        (r || d || (f ? I.some((S, A) => We(S, b[A])) : We(I, b))) && (g && g(), Wn(e, u, 3, [
          I,
          b === Ue ? void 0 : f && b[0] === Ue ? [] : b,
          m
        ]), b = I);
      } else
        C.run();
  };
  v.allowRecurse = !!e;
  let k;
  i === "sync" ? k = v : i === "post" ? k = () => Bi(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), k = () => Er(v));
  const C = new qu(l, k);
  return process.env.NODE_ENV !== "production" && (C.onTrack = s, C.onTrigger = a), e ? n ? v() : b = C.run() : i === "post" ? Bi(C.run.bind(C), u && u.suspense) : C.run(), () => {
    C.stop(), u && u.scope && yu(u.scope.effects, C);
  };
}
function $l(t, e, n) {
  const r = this.proxy, i = at(t) ? t.includes(".") ? Gl(r, t) : () => r[t] : t.bind(r, r);
  let s;
  D(e) ? s = e : (s = e.handler, n = e);
  const a = Zt;
  Fi(this);
  const o = Hl(i, s.bind(r), n);
  return a ? Fi(a) : cf(), o;
}
function Gl(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Xt(t, e) {
  if (!W(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), G(t))
    Xt(t.value, e);
  else if (N(t))
    for (let n = 0; n < t.length; n++)
      Xt(t[n], e);
  else if (Bu(t) || Qt(t))
    t.forEach((n) => {
      Xt(n, e);
    });
  else if (Uu(t))
    for (const n in t)
      Xt(t[n], e);
  return t;
}
const Ml = Symbol(), Xn = (t) => t ? uf(t) ? lf(t) || t.proxy : Xn(t.parent) : null, he = /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Ve(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Ve(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Ve(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Ve(t.refs) : t.refs,
  $parent: (t) => Xn(t.parent),
  $root: (t) => Xn(t.root),
  $emit: (t) => t.emit,
  $options: (t) => __VUE_OPTIONS_API__ ? ql(t) : t.type,
  $forceUpdate: (t) => t.f || (t.f = () => Er(t.update)),
  $nextTick: (t) => t.n || (t.n = Nl.bind(t.proxy)),
  $watch: (t) => __VUE_OPTIONS_API__ ? $l.bind(t) : pr
}), Dl = (t) => t === "_" || t === "$", An = (t, e) => t !== ut && !t.__isScriptSetup && O(t, e), zl = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: a, type: o, appContext: u } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let l;
    if (e[0] !== "$") {
      const m = a[e];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (An(r, e))
          return a[e] = 1, r[e];
        if (i !== ut && O(i, e))
          return a[e] = 2, i[e];
        if ((l = t.propsOptions[0]) && O(l, e))
          return a[e] = 3, s[e];
        if (n !== ut && O(n, e))
          return a[e] = 4, n[e];
        (!__VUE_OPTIONS_API__ || Kl) && (a[e] = 0);
      }
    }
    const d = he[e];
    let f, g;
    if (d)
      return e === "$attrs" && (rt(t, "get", e), process.env.NODE_ENV !== "production" && void 0), d(t);
    if ((f = o.__cssModules) && (f = f[e]))
      return f;
    if (n !== ut && O(n, e))
      return a[e] = 4, n[e];
    if (g = u.config.globalProperties, O(g, e))
      return g[e];
    process.env.NODE_ENV !== "production" && kt && (!at(e) || e.indexOf("__v") !== 0) && (i !== ut && Dl(e[0]) && O(i, e) ? $(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === kt && $(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return An(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && O(i, e) ? ($(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== ut && O(r, e) ? (r[e] = n, !0) : O(t.props, e) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s } }, a) {
    let o;
    return !!n[a] || t !== ut && O(t, a) || An(e, a) || (o = s[0]) && O(o, a) || O(r, a) || O(he, a) || O(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : O(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (zl.ownKeys = (t) => ($("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
let Kl = !0;
function ql(t) {
  const e = t.type, { mixins: n, extends: r } = e, { mixins: i, optionsCache: s, config: { optionMergeStrategies: a } } = t.appContext, o = s.get(e);
  let u;
  return o ? u = o : !i.length && !n && !r ? u = e : (u = {}, i.length && i.forEach((l) => Qe(u, l, a, !0)), Qe(u, e, a)), W(e) && s.set(e, u), u;
}
function Qe(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Qe(t, s, n, !0), i && i.forEach((a) => Qe(t, a, n, !0));
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && $('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const o = Wl[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const Wl = {
  data: yi,
  props: At,
  emits: At,
  methods: At,
  computed: At,
  beforeCreate: H,
  created: H,
  beforeMount: H,
  mounted: H,
  beforeUpdate: H,
  updated: H,
  beforeDestroy: H,
  beforeUnmount: H,
  destroyed: H,
  unmounted: H,
  activated: H,
  deactivated: H,
  errorCaptured: H,
  serverPrefetch: H,
  components: At,
  directives: At,
  watch: Xl,
  provide: yi,
  inject: Jl
};
function yi(t, e) {
  return e ? t ? function() {
    return st(D(t) ? t.call(this, this) : t, D(e) ? e.call(this, this) : e);
  } : e : t;
}
function Jl(t, e) {
  return At(Ri(t), Ri(e));
}
function Ri(t) {
  if (N(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function H(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function At(t, e) {
  return t ? st(st(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function Xl(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = st(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = H(t[r], e[r]);
  return n;
}
function jl() {
  return {
    app: null,
    config: {
      isNativeTag: Nu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const Bi = Ll, Ql = (t) => t.__isTeleport, ra = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Yl = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Zl = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
let jt = null;
function tf(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const ef = (...t) => aa(...t), ia = "__vInternal", sa = ({ key: t }) => t ?? null, Me = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? at(t) || G(t) || D(t) ? { i: kt, r: t, k: e, f: !!n } : t : null;
function nf(t, e = null, n = null, r = 0, i = null, s = t === ra ? 0 : 1, a = !1, o = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && sa(e),
    ref: e && Me(e),
    scopeId: Vl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: kt
  };
  return o ? (xr(u, n), s & 128 && t.normalize(u)) : n && (u.shapeFlag |= at(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && $("VNode created with invalid key (NaN). VNode type:", u.type), !a && jt && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && jt.push(u), u;
}
const rf = process.env.NODE_ENV !== "production" ? ef : aa;
function aa(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Ml) && (process.env.NODE_ENV !== "production" && !t && $(`Invalid vnode type when creating vnode: ${t}.`), t = Zl), tf(t)) {
    const o = Ye(t, e, !0);
    return n && xr(o, n), !s && jt && (o.shapeFlag & 6 ? jt[jt.indexOf(t)] = o : jt.push(o)), o.patchFlag |= -2, o;
  }
  if (la(t) && (t = t.__vccOpts), e) {
    e = sf(e);
    let { class: o, style: u } = e;
    o && !at(o) && (e.class = dr(o)), W(u) && (Je(u) && !N(u) && (u = st({}, u)), e.style = gr(u));
  }
  const a = at(t) ? 1 : Ul(t) ? 128 : Ql(t) ? 64 : W(t) ? 4 : D(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Je(t) && (t = E(t), $("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), nf(t, e, n, r, i, a, s, !0);
}
function sf(t) {
  return t ? Je(t) || ia in t ? st({}, t) : t : null;
}
function Ye(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? of(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && sa(o),
    ref: e && e.ref ? n && i ? N(i) ? i.concat(Me(e)) : [i, Me(e)] : Me(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && N(a) ? a.map(oa) : a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== ra ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ye(t.ssContent),
    ssFallback: t.ssFallback && Ye(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx
  };
}
function oa(t) {
  const e = Ye(t);
  return N(t.children) && (e.children = t.children.map(oa)), e;
}
function af(t = " ", e = 0) {
  return rf(Yl, null, t, e);
}
function xr(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (N(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), xr(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(ia in e) ? e._ctx = kt : i === 3 && kt && (kt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    D(e) ? (e = { default: e, _ctx: kt }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [af(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function of(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = dr([e.class, r.class]));
      else if (i === "style")
        e.style = gr([e.style, r.style]);
      else if (Ou(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(N(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
jl();
let Zt = null;
const Fi = (t) => {
  Zt = t, t.scope.on();
}, cf = () => {
  Zt && Zt.scope.off(), Zt = null;
};
function uf(t) {
  return t.vnode.shapeFlag & 4;
}
function lf(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(kl(vl(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in he)
          return he[n](t);
      },
      has(e, n) {
        return n in e || n in he;
      }
    }));
}
const ff = /(?:^|[-_])(\w)/g, hf = (t) => t.replace(ff, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ca(t, e = !0) {
  return D(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ua(t, e, n = !1) {
  let r = ca(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const a in s)
        if (s[a] === e)
          return a;
    };
    r = i(t.components || t.parent.type.components) || i(t.appContext.components);
  }
  return r ? hf(r) : n ? "App" : "Anonymous";
}
function la(t) {
  return D(t) && "__vccOpts" in t;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function On(t) {
  return !!(t && t.__v_isShallow);
}
function gf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(f) {
      return W(f) ? f.__isVue ? ["div", t, "VueInstance"] : G(f) ? [
        "div",
        {},
        ["span", t, d(f)],
        "<",
        o(f.value),
        ">"
      ] : Rt(f) ? [
        "div",
        {},
        ["span", t, On(f) ? "ShallowReactive" : "Reactive"],
        "<",
        o(f),
        `>${Ut(f) ? " (readonly)" : ""}`
      ] : Ut(f) ? [
        "div",
        {},
        ["span", t, On(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        o(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const g = [];
    f.type.props && f.props && g.push(a("props", E(f.props))), f.setupState !== ut && g.push(a("setup", f.setupState)), f.data !== ut && g.push(a("data", E(f.data)));
    const m = u(f, "computed");
    m && g.push(a("computed", m));
    const b = u(f, "inject");
    return b && g.push(a("injected", b)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), g;
  }
  function a(f, g) {
    return g = st({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          o(g[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(f, g = !0) {
    return typeof f == "number" ? ["span", e, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : W(f) ? ["object", { object: g ? E(f) : f }] : ["span", n, String(f)];
  }
  function u(f, g) {
    const m = f.type;
    if (D(m))
      return;
    const b = {};
    for (const v in f.ctx)
      l(m, v, g) && (b[v] = f.ctx[v]);
    return b;
  }
  function l(f, g, m) {
    const b = f[m];
    if (N(b) && b.includes(g) || W(b) && g in b || f.extends && l(f.extends, g, m) || f.mixins && f.mixins.some((v) => l(v, g, m)))
      return !0;
  }
  function d(f) {
    return On(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
function df() {
  gf();
}
process.env.NODE_ENV !== "production" && df();
function pf(t) {
  const e = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], n = t % 12;
  return e[n];
}
function kh(t) {
  const e = Math.floor(t / 12) - 2;
  return pf(t) + e.toString();
}
const mf = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, vf = {
  cbb: -2,
  cb: -1,
  c: 0,
  "c#": 1,
  cx: 2,
  dbb: 0,
  db: 1,
  d: 2,
  "d#": 3,
  dx: 4,
  ebb: 2,
  eb: 3,
  e: 4,
  "e#": 5,
  ex: 6,
  fbb: 3,
  fb: 4,
  f: 5,
  "f#": 6,
  fx: 7,
  gbb: 5,
  gb: 6,
  g: 7,
  "g#": 8,
  gx: 9,
  abb: 7,
  ab: 8,
  a: 9,
  "a#": 10,
  ax: 11,
  bbb: 9,
  bb: 10,
  b: 11,
  "b#": 12,
  bx: 13
};
function Sh(t) {
  const e = mf.exec(t);
  if (!e)
    return -1;
  const n = e[1], r = e[2];
  return vf[n.toLowerCase()] + (parseInt(r, 10) + 2) * 12;
}
function Vi(t, e, n, r) {
  return `${t} // ${e} // ${n} // ${r}`;
}
function bf(t, e, n) {
  return `${t} // ${e} // ${n}`;
}
function Ch(t) {
  const e = Ze(t);
  return bf(
    e.manufacturerName,
    e.pluginFormatName,
    e.name
  );
}
function Ze(t) {
  const e = t.split(" // ");
  if (e.length < 4)
    throw new Error("Invalid audio plugin tuneflow id.");
  return {
    name: e[2],
    manufacturerName: e[0],
    pluginFormatName: e[1],
    pluginVersion: e[3]
  };
}
function wf(t, e) {
  return t === e;
}
function kf(t, e) {
  const n = Ze(t), r = Ze(e);
  if (P.keys(n).length !== P.keys(r).length)
    return !1;
  for (const i of P.keys(n))
    if (i !== "pluginVersion" && n[i] !== r[i])
      return !1;
  return !0;
}
class Ih {
  tempoInfos = [];
  currentTempoIndex = 0;
  ticksPerSecondAtTempoTick = {};
  constructor(e, n) {
    for (const r of e)
      this.tempoInfos.push({
        ticks: r.getTicks(),
        time: r.getTime()
      }), this.ticksPerSecondAtTempoTick[r.getTicks()] = r.getBpm() * n / 60;
  }
  secondsToTick(e) {
    let n = this.tempoInfos[this.currentTempoIndex];
    for (; this.tempoInfos[this.currentTempoIndex + 1] && this.tempoInfos[this.currentTempoIndex + 1].time <= e; )
      this.currentTempoIndex += 1, n = this.tempoInfos[this.currentTempoIndex];
    for (; n.time > e && this.currentTempoIndex > 0; )
      this.currentTempoIndex -= 1, n = this.tempoInfos[this.currentTempoIndex];
    n.time > e && (n = this.tempoInfos[0]);
    const r = e - n.time, i = this.ticksPerSecondAtTempoTick[n.ticks];
    return Math.round(n.ticks + r * i);
  }
  tickToSeconds(e) {
    let n = this.tempoInfos[this.currentTempoIndex];
    for (; this.tempoInfos[this.currentTempoIndex + 1] && this.tempoInfos[this.currentTempoIndex + 1].ticks <= e; )
      this.currentTempoIndex += 1, n = this.tempoInfos[this.currentTempoIndex];
    for (; n.ticks > e && this.currentTempoIndex > 0; )
      this.currentTempoIndex -= 1, n = this.tempoInfos[this.currentTempoIndex];
    n.ticks > e && (n = this.tempoInfos[0]);
    const r = e - n.ticks, i = this.ticksPerSecondAtTempoTick[n.ticks];
    return n.time + r / i;
  }
}
function Sf(t) {
  return t > -100 ? Math.exp((t - 6) * (1 / 20)) : 0;
}
function _h(t) {
  return t <= 0 ? -100 : 20 * Math.log10(t);
}
function Eh(t) {
  return t > 0 ? 20 * Math.log(t) + 6 : -100;
}
function xh(t) {
  return t > 0 ? Math.pow(10, (20 * Math.log(t) + 6) * (1 / 20)) : 0;
}
function Th(t) {
  return t > 0 ? Math.exp((20 * Math.log10(t) - 6) * (1 / 20)) : 0;
}
function Ph(t, e, n, r, i) {
  return (t - e) / (n - e) * (i - r) + r;
}
function Nh(t) {
  return 440 * Math.pow(2, (t - 69) / 12);
}
function Ah(t) {
  return Je(t) || G(t) ? E(t) : t;
}
var Cf = /* @__PURE__ */ ((t) => (t[t.BassDrum2 = 35] = "BassDrum2", t[t.BassDrum1 = 36] = "BassDrum1", t[t.SideStick = 37] = "SideStick", t[t.SnareDrum1 = 38] = "SnareDrum1", t[t.HandClap = 39] = "HandClap", t[t.SnareDrum2 = 40] = "SnareDrum2", t[t.LowTom2 = 41] = "LowTom2", t[t.ClosedHiHat = 42] = "ClosedHiHat", t[t.LowTom1 = 43] = "LowTom1", t[t.PedalHiHat = 44] = "PedalHiHat", t[t.MidTom2 = 45] = "MidTom2", t[t.OpenHiHat = 46] = "OpenHiHat", t[t.MidTom1 = 47] = "MidTom1", t[t.HighTom2 = 48] = "HighTom2", t[t.CrashCymbal1 = 49] = "CrashCymbal1", t[t.HighTom1 = 50] = "HighTom1", t[t.RideCymbal1 = 51] = "RideCymbal1", t[t.ChineseCymbal = 52] = "ChineseCymbal", t[t.RideBell = 53] = "RideBell", t[t.Tambourine = 54] = "Tambourine", t[t.SplashCymbal = 55] = "SplashCymbal", t[t.Cowbell = 56] = "Cowbell", t[t.CrashCymbal2 = 57] = "CrashCymbal2", t[t.VibraSlap = 58] = "VibraSlap", t[t.RideCymbal2 = 59] = "RideCymbal2", t[t.HighBongo = 60] = "HighBongo", t[t.LowBongo = 61] = "LowBongo", t[t.MuteHighConga = 62] = "MuteHighConga", t[t.OpenHighConga = 63] = "OpenHighConga", t[t.LowConga = 64] = "LowConga", t[t.HighTimbale = 65] = "HighTimbale", t[t.LowTimbale = 66] = "LowTimbale", t[t.HighAgogo = 67] = "HighAgogo", t[t.LowAgogo = 68] = "LowAgogo", t[t.Cabasa = 69] = "Cabasa", t[t.Maracas = 70] = "Maracas", t[t.ShortWhistle = 71] = "ShortWhistle", t[t.LongWhistle = 72] = "LongWhistle", t[t.ShortGuiro = 73] = "ShortGuiro", t[t.LongGuiro = 74] = "LongGuiro", t[t.Claves = 75] = "Claves", t[t.HighWoodBlock = 76] = "HighWoodBlock", t[t.LowWoodBlock = 77] = "LowWoodBlock", t[t.MuteCuica = 78] = "MuteCuica", t[t.OpenCuica = 79] = "OpenCuica", t[t.MuteTriangle = 80] = "MuteTriangle", t[t.OpenTriangle = 81] = "OpenTriangle", t[t.Shaker = 82] = "Shaker", t))(Cf || {});
class cn {
  name;
  manufacturerName;
  pluginFormatName;
  pluginVersion;
  isEnabled = !0;
  localInstanceIdInternal;
  base64StatesInternal;
  constructor(e, n, r, i) {
    this.name = e, this.manufacturerName = n, this.pluginFormatName = r, this.pluginVersion = i, this.localInstanceIdInternal = cn.generateAudioPluginInstanceIdInternal();
  }
  getTuneflowId() {
    return Vi(
      this.manufacturerName,
      this.pluginFormatName,
      this.name,
      this.pluginVersion
    );
  }
  clone(e) {
    const n = e.createAudioPlugin(this.getTuneflowId());
    return n.setIsEnabled(this.isEnabled), n;
  }
  matchesTfId(e) {
    return wf(e, this.getTuneflowId());
  }
  matchesTfIdIgnoreVersion(e) {
    return kf(e, this.getTuneflowId());
  }
  getInstanceId() {
    return this.localInstanceIdInternal;
  }
  toJSON() {
    return {
      name: this.name,
      manufacturerName: this.manufacturerName,
      pluginFormatName: this.pluginFormatName,
      pluginVersion: this.pluginVersion,
      isEnabled: this.isEnabled
    };
  }
  setIsEnabled(e) {
    this.isEnabled = e;
  }
  getIsEnabled() {
    return this.isEnabled;
  }
  setBase64States(e) {
    this.base64StatesInternal = e;
  }
  getBase64States() {
    return this.base64StatesInternal;
  }
  static generateAudioPluginInstanceIdInternal() {
    return sn(10);
  }
  static DEFAULT_SYNTH_TFID = Vi("TuneFlow", "VST3", "TFSynth", "1.0.0");
}
class St {
  pitch;
  velocity;
  startTick;
  endTick;
  idInternal;
  clipInternal;
  constructor({
    pitch: e,
    velocity: n,
    startTick: r,
    endTick: i,
    id: s,
    clip: a
  }) {
    this.pitch = e, this.velocity = n, this.startTick = r, this.endTick = i, this.idInternal = s, this.clipInternal = a;
  }
  getPitch() {
    return this.pitch;
  }
  setPitch(e) {
    if (!St.isValidPitch(e))
      throw new Error(`Invalid pitch ${e}`);
    this.pitch = e;
  }
  getVelocity() {
    return this.velocity;
  }
  setVelocity(e) {
    this.velocity = Math.max(Math.min(e, 127), 0);
  }
  getStartTick() {
    return this.startTick;
  }
  getEndTick() {
    return this.endTick;
  }
  setStartTick(e) {
    this.startTick = e;
  }
  setEndTick(e) {
    this.endTick = e;
  }
  equals(e) {
    return this.startTick === e.getStartTick() && this.endTick === e.getEndTick() && this.pitch === e.getPitch() && this.velocity === e.getVelocity();
  }
  deleteFromParent() {
    !this.clipInternal || this.clipInternal.deleteNote(this);
  }
  moveNote(e) {
    if (e === 0)
      return;
    const n = this.clipInternal;
    n && n.deleteNote(this), this.startTick = Math.max(0, this.startTick + e), this.endTick = this.endTick + e, !!this.isRangeValid() && n && n.orderedInsertNote(n.getRawNotes(), this);
  }
  adjustLeft(e) {
    if (e === 0)
      return;
    const n = this.clipInternal;
    n && n.deleteNote(this), this.startTick += e, !!this.isRangeValid() && n && n.orderedInsertNote(n.getRawNotes(), this);
  }
  adjustLeftTo(e) {
    this.adjustLeft(e - this.startTick);
  }
  adjustRight(e) {
    this.endTick += e, this.isRangeValid() || this.deleteFromParent();
  }
  adjustRightTo(e) {
    this.adjustRight(e - this.endTick);
  }
  isRangeValid() {
    return St.isNoteRangeValid(this.startTick, this.endTick);
  }
  transpose(e) {
    this.setPitch(Math.min(127, Math.max(0, this.pitch + e)));
  }
  static isValidPitch(e) {
    return e >= 0 && e <= 127 && Number.isInteger(e);
  }
  static isNoteRangeValid(e, n) {
    return n >= 0 && e <= n && Number.isInteger(e) && Number.isInteger(n);
  }
  static isNoteVelocityValid(e) {
    return e >= 0 && e <= 127 && Number.isInteger(e);
  }
  getClip() {
    return this.clipInternal;
  }
  adjustPitch(e) {
    this.pitch = this.pitch + e, St.isValidPitch(this.pitch) || this.deleteFromParent();
  }
  getId() {
    return this.idInternal;
  }
}
var le = /* @__PURE__ */ ((t) => (t[t.MIDI_CLIP = 1] = "MIDI_CLIP", t[t.AUDIO_CLIP = 2] = "AUDIO_CLIP", t))(le || {});
class et {
  song;
  track;
  id;
  notes;
  clipStartTick = 0;
  clipEndTick = 0;
  nextNoteIdInternal = 1;
  type;
  audioClipData;
  constructor({
    song: e,
    type: n,
    clipStartTick: r,
    id: i = et.generateClipIdInternal(),
    track: s = void 0,
    clipEndTick: a = void 0,
    audioClipData: o = void 0
  }) {
    if (this.song = e, this.track = s, this.id = i, this.type = n, this.notes = [], n === 2) {
      if (!o)
        throw new Error("Audio clip data must be provided for audio clips.");
      this.audioClipData = {
        audioFilePath: o.audioFilePath,
        startTick: o.startTick,
        duration: o.duration,
        audioData: o.audioData && o.audioData.data ? {
          ...o.audioData
        } : void 0
      }, r = P.isNumber(r) ? Math.max(r, o.startTick) : o.startTick;
      const u = this.getAudioEndTick();
      (!P.isNumber(a) || u < a) && (a = u), this.clipStartTick = r, this.clipEndTick = a;
    } else if (n === 1) {
      if (this.clipStartTick = r, !P.isNumber(a))
        throw new Error("clip end tick must be provided when creating MIDI clip.");
      this.clipEndTick = a;
    }
  }
  getId() {
    return this.id;
  }
  getType() {
    return this.type;
  }
  getAudioClipData() {
    return this.audioClipData;
  }
  setAudioFile(e, n, r) {
    this.audioClipData ? (this.audioClipData.audioFilePath = e, this.audioClipData.startTick = n, this.audioClipData.duration = r) : this.audioClipData = {
      audioFilePath: e,
      startTick: n,
      duration: r
    };
  }
  getNotes() {
    return et.getNotesInRange(this.notes, this.clipStartTick, this.clipEndTick);
  }
  getRawNotes() {
    return this.notes;
  }
  getDuration() {
    return this.song.tickToSeconds(this.clipEndTick) - this.song.tickToSeconds(this.clipStartTick);
  }
  getAudioDuration() {
    if (!(this.type !== 2 || !this.audioClipData))
      return this.audioClipData.duration;
  }
  getClipStartTick() {
    return this.clipStartTick;
  }
  getClipEndTick() {
    return this.clipEndTick;
  }
  getTrack() {
    return this.track;
  }
  createNote({
    pitch: e,
    velocity: n,
    startTick: r,
    endTick: i,
    updateClipRange: s = !0,
    resolveClipConflict: a = !0
  }) {
    if (this.type !== 1 || !St.isValidPitch(e) || !St.isNoteRangeValid(r, i) || !St.isNoteVelocityValid(n))
      return null;
    const o = new St({
      pitch: e,
      velocity: n,
      startTick: r,
      endTick: i,
      id: this.getNextNoteIdInternal()
    });
    return r < this.clipStartTick && s && this.adjustClipLeft(r, a), i > this.clipEndTick && s && this.adjustClipRight(i, a), this.orderedInsertNote(this.notes, o), o;
  }
  getNoteIndexInternal(e) {
    const n = T.lt(
      this.notes,
      e,
      (r, i) => r.getStartTick() - i.getStartTick()
    );
    for (let r = Math.max(0, n); r < this.notes.length; r += 1) {
      const i = this.notes[r];
      if (i && i === e)
        return r;
      if (i && i.getStartTick() > e.getStartTick())
        break;
    }
    return -1;
  }
  deleteNote(e) {
    const n = this.getNoteIndexInternal(e);
    n >= 0 && this.deleteNoteAt(n);
  }
  deleteNoteAt(e) {
    const n = this.notes[e];
    n && (n.clipInternal = null, this.notes.splice(e, 1));
  }
  orderedInsertNote(e, n) {
    if (this.type !== 1 || n.getClip() === this)
      return;
    const r = T.ge(
      e,
      n,
      (i, s) => i.getStartTick() - s.getStartTick()
    );
    r < 0 ? e.push(n) : e.splice(r, 0, n), n.clipInternal = this;
  }
  adjustClipLeft(e, n = !0) {
    e = Math.max(0, e), this.type === 2 && this.audioClipData && (e = Math.max(e, this.audioClipData.startTick)), e > this.clipEndTick ? this.deleteFromParent(!0) : (n && this.track && this.track.resolveClipConflictInternal(
      this.getId(),
      Math.min(this.clipStartTick, e),
      this.clipEndTick
    ), this.clipStartTick = e);
  }
  adjustClipRight(e, n = !0) {
    if (this.type === 2) {
      const r = this.getAudioEndTick();
      P.isNumber(r) && (e = Math.min(e, r));
    }
    e < this.clipStartTick || e < 0 ? this.deleteFromParent(!0) : (n && this.track && this.track.resolveClipConflictInternal(
      this.getId(),
      this.clipStartTick,
      Math.max(this.clipEndTick, e)
    ), this.clipEndTick = e);
  }
  moveClip(e, n) {
    const r = Math.max(0, this.clipStartTick + e), i = this.clipEndTick + e;
    if (i < 0) {
      this.deleteFromParent(!0);
      return;
    }
    if (this.track && this.track.resolveClipConflictInternal(this.getId(), r, i), this.track) {
      const o = this.track.getClipIndex(this);
      this.track.deleteClipAt(o, !1);
    }
    const s = this.clipStartTick, a = this.clipEndTick;
    if (this.type === 1) {
      this.clipStartTick = r, this.clipEndTick = i;
      for (const o of this.notes)
        o.setStartTick(o.getStartTick() + e), o.setEndTick(o.getEndTick() + e);
    } else if (this.type === 2) {
      if (!this.audioClipData)
        throw new Error("Cannot move audio clip without audio data");
      const o = this.song, u = o.tickToSeconds(this.audioClipData.startTick), l = o.tickToSeconds(s), f = o.tickToSeconds(a) - l, g = l - u, m = o.tickToSeconds(this.clipStartTick + e), b = m - g, v = m + f;
      if (this.clipStartTick = r, this.clipEndTick = o.secondsToTick(v), this.audioClipData.startTick = o.secondsToTick(b), this.clipEndTick < 0) {
        this.deleteFromParent(!0);
        return;
      }
    }
    this.track && (this.track.orderedInsertClipInternal(this), n && this.track.getAutomation().moveAllPointsWithinRange(
      s,
      a,
      e,
      0
    ));
  }
  moveClipTo(e, n) {
    const r = e - this.getClipStartTick();
    this.moveClip(r, n);
  }
  deleteFromParent(e) {
    this.track && (this.track.deleteClip(this, e), this.track = void 0);
  }
  getNotesByIds(e) {
    const n = new Set(e), r = [];
    for (const i of this.notes)
      n.has(i.getId()) && r.push(i);
    return r;
  }
  getAudioEndTick() {
    if (this.type !== 2 || !this.audioClipData)
      return;
    const e = this.getAudioDuration();
    if (!P.isNumber(e))
      return;
    const n = this.song.tickToSeconds(this.audioClipData.startTick);
    return this.song.secondsToTick(n + e);
  }
  static getNotesInRange(e, n, r) {
    return et.getNotesInRangeImpl(
      e,
      n,
      r,
      (i) => ({ getStartTick: () => i }),
      (i) => i.getStartTick(),
      (i) => i.getEndTick()
    );
  }
  static getNotesInRangeImpl(e, n, r, i, s, a) {
    let o = Math.max(
      0,
      T.lt(
        e,
        i(n),
        (l, d) => s(l) - s(d)
      )
    );
    for (; e[o] && !et.isNoteInClip(
      s(e[o]),
      a(e[o]),
      n,
      r
    ); )
      o += 1;
    if (o >= e.length)
      return [];
    let u = Math.min(
      e.length - 1,
      T.gt(
        e,
        i(r),
        (l, d) => s(l) - s(d)
      )
    );
    for (; e[u] && !et.isNoteInClip(
      s(e[u]),
      a(e[u]),
      n,
      r
    ); )
      u -= 1;
    return u < 0 ? [] : u < o ? [] : e.slice(o, u + 1);
  }
  static getOverlappingNotesWithinRangeImpl(e, n, r, i, s) {
    const a = [];
    for (const o of e) {
      const u = i(o);
      if (u > r)
        break;
      const l = s(o);
      (u >= n && u <= r || l >= n && l <= r) && a.push(o);
    }
    return a;
  }
  static isNoteInClip(e, n, r, i) {
    return (e >= r || r === 0 && e <= 0) && e < i && n > e;
  }
  static getNotePlayableRange(e, n, r, i) {
    if (!et.isNoteInClip(e, n, r, i))
      return null;
    const s = Math.max(e, r), a = Math.min(n, i);
    return s > a ? null : {
      startTick: s,
      endTick: a
    };
  }
  trimConflictPartInternal(e, n) {
    const r = Math.max(e, this.getClipStartTick()), i = Math.min(n, this.getClipEndTick());
    if (!(r > i) && !(r > this.getClipEndTick() || i < this.getClipStartTick())) {
      if (i >= this.getClipEndTick() && r <= this.getClipStartTick()) {
        this.deleteFromParent(!0);
        return;
      }
      if (i < this.getClipEndTick() && r > this.getClipStartTick()) {
        const s = i + 1, a = this.getClipEndTick();
        if (this.adjustClipRight(r - 1, !1), this.track) {
          if (this.type === 1) {
            const o = this.track.createMIDIClip({
              clipStartTick: s,
              clipEndTick: a
            }), u = et.getNotesInRange(this.notes, s, a);
            for (const l of u)
              o.createNote({
                pitch: l.getPitch(),
                velocity: l.getVelocity(),
                startTick: l.getStartTick(),
                endTick: l.getEndTick(),
                updateClipRange: !1,
                resolveClipConflict: !1
              });
          } else if (this.type === 2) {
            const o = this.audioClipData;
            this.track.createAudioClip({
              clipStartTick: s,
              clipEndTick: a,
              audioClipData: {
                audioFilePath: o.audioFilePath,
                startTick: o.startTick,
                duration: o.duration
              }
            });
          }
        }
        return;
      }
      r > this.getClipStartTick() && r <= this.getClipEndTick() ? this.adjustClipRight(r - 1, !1) : i < this.getClipEndTick() && i >= this.getClipStartTick() && this.adjustClipLeft(i + 1, !1);
    }
  }
  getNextNoteIdInternal() {
    const e = this.nextNoteIdInternal;
    return this.nextNoteIdInternal >= 2147483647 ? this.nextNoteIdInternal = 1 : this.nextNoteIdInternal += 1, e;
  }
  static generateClipIdInternal() {
    return sn(10);
  }
}
var jn = /* @__PURE__ */ ((t) => (t[t.UNDEFINED = 0] = "UNDEFINED", t[t.VOLUME = 1] = "VOLUME", t[t.PAN = 2] = "PAN", t[t.AUDIO_PLUGIN = 3] = "AUDIO_PLUGIN", t))(jn || {});
class tt {
  type;
  pluginInstanceId;
  paramId;
  constructor(e, n, r) {
    this.type = e, this.pluginInstanceId = n, this.paramId = r;
  }
  getType() {
    return this.type;
  }
  setType(e) {
    this.type = e;
  }
  getPluginInstanceId() {
    return this.pluginInstanceId;
  }
  setPluginInstanceId(e) {
    this.pluginInstanceId = e;
  }
  getParamId() {
    return this.paramId;
  }
  setParamId(e) {
    this.paramId = e;
  }
  equals(e) {
    return tt.areAutomationTargetsEqual(
      this.getType(),
      e.getType(),
      this.getPluginInstanceId(),
      e.getPluginInstanceId(),
      this.getParamId(),
      e.getParamId()
    );
  }
  clone() {
    return new tt(this.type, this.pluginInstanceId, this.paramId);
  }
  toTfAutomationTargetId() {
    return tt.encodeAutomationTarget(this.type, this.pluginInstanceId, this.paramId);
  }
  static fromTfAutomationTargetId(e) {
    return tt.decodeAutomationTarget(e);
  }
  static encodeAutomationTarget(e, n, r) {
    return e === 3 ? `${e}^^${n}^^${r}` : `${e}`;
  }
  static decodeAutomationTarget(e) {
    const n = e.split("^^");
    if (n.length === 0)
      throw new Error(`Invalid automation target id: ${e}`);
    const r = Number(n[0]);
    return n.length > 2 ? new tt(r, n[1], n[2]) : new tt(r);
  }
  static areAutomationTargetsEqual(e, n, r, i, s, a) {
    return tt.encodeAutomationTarget(e, r, s) === tt.encodeAutomationTarget(n, i, a);
  }
}
class te {
  points = [];
  disabled = !1;
  nextPointIdInternal = 1;
  getDisabled() {
    return this.disabled;
  }
  setDisabled(e) {
    this.disabled = e;
  }
  getPoints() {
    return this.points;
  }
  getPointsInRange(e, n) {
    return te.getPointsInRangeImpl(this.points, e, n);
  }
  static getPointsInRangeImpl(e, n, r) {
    const i = T.ge(
      e,
      { tick: n },
      (a, o) => a.tick - o.tick
    ), s = [];
    for (let a = i; a < e.length; a += 1) {
      const o = e[a];
      if (o.tick > r)
        break;
      s.push(o);
    }
    return s;
  }
  addPoint(e, n, r = !1) {
    const i = {
      tick: e,
      value: Math.max(0, Math.min(1, n)),
      id: this.getNextPointIdInternal()
    };
    return te.orderedInsertPointInternal(this.points, i, r), i;
  }
  removePoints(e) {
    const n = new Set(e);
    for (let r = this.points.length - 1; r >= 0; r -= 1) {
      const i = this.points[r];
      n.has(i.id) && this.points.splice(r, 1);
    }
  }
  removePointsInRange(e, n) {
    const r = T.ge(
      this.points,
      { tick: e },
      (s, a) => s.tick - a.tick
    );
    if (r >= this.points.length)
      return;
    let i = r;
    for (; i + 1 < this.points.length && this.points[i + 1].tick <= n; )
      i += 1;
    this.points.splice(r, i - r + 1);
  }
  movePointsInRange(e, n, r, i, s = !0) {
    const a = this.getPointsInRange(e, n);
    this.movePoints(
      a.map((o) => o.id),
      r,
      i,
      s
    );
  }
  moveAllPoints(e, n, r = !0) {
    this.movePoints(
      this.points.map((i) => i.id),
      e,
      n,
      r
    );
  }
  movePoints(e, n, r, i = !0) {
    if (e.length === 0)
      return;
    const s = new Set(e);
    let a, o;
    const u = [];
    for (let l = 0; l < this.points.length; l += 1) {
      const d = this.points[l];
      !s.has(d.id) || (u.push(d), a === void 0 && (a = l), o = l);
    }
    if (!(a === void 0 || o === void 0)) {
      if (i) {
        if (n < 0) {
          const l = Math.max(
            0,
            this.points[a].tick + n
          ), d = T.gt(
            this.points,
            { tick: l },
            (f, g) => f.tick - g.tick
          );
          d < a && this.points.splice(d, a - d);
        } else if (n > 0) {
          const l = this.points[o].tick + n, d = T.lt(
            this.points,
            { tick: l },
            (f, g) => f.tick - g.tick
          );
          d > o && this.points.splice(o + 1, d - o);
        }
      }
      for (const l of u)
        l.tick = Math.max(0, l.tick + n), l.value = Math.max(0, Math.min(1, l.value + r));
      Math.abs(n) > 0 && this.points.sort((l, d) => l.tick - d.tick);
    }
  }
  clone() {
    const e = new te();
    e.setDisabled(this.disabled);
    for (const n of this.points)
      e.addPoint(n.tick, n.value, !1);
    return e;
  }
  getNextPointIdInternal() {
    const e = this.nextPointIdInternal;
    return this.nextPointIdInternal >= 2147483647 ? this.nextPointIdInternal = 1 : this.nextPointIdInternal += 1, e;
  }
  static orderedInsertPointInternal(e, n, r = !1) {
    const i = T.ge(
      e,
      n,
      (s, a) => s.tick - a.tick
    );
    for (; r && e[i] && e[i].tick === n.tick; )
      e.splice(i, 1);
    e.splice(i, 0, n);
  }
}
class Tr {
  targets = [];
  targetValues = {};
  getAutomationTargets() {
    return this.targets;
  }
  getAutomationTargetValues() {
    return this.targetValues;
  }
  getOrCreateAutomationValueById(e) {
    return this.targetValues[e] || (this.targetValues[e] = new te()), this.targetValues[e];
  }
  getAutomationValueById(e) {
    return this.targetValues[e];
  }
  getAutomationValueByTarget(e) {
    const n = e.toTfAutomationTargetId();
    return this.getAutomationValueById(n);
  }
  addAutomation(e, n = 0) {
    P.isNumber(n) || (n = 0), this.targets.splice(n, 0, e);
    const r = e.toTfAutomationTargetId();
    this.getAutomationValueById(r) || (this.targetValues[r] = new te());
  }
  removeAutomation(e) {
    for (let r = this.targets.length - 1; r >= 0; r -= 1)
      this.targets[r].equals(e) && this.targets.splice(r, 1);
    const n = e.toTfAutomationTargetId();
    delete this.targetValues[n];
  }
  removeAutomationOfPlugin(e) {
    for (let n = this.targets.length - 1; n >= 0; n -= 1) {
      const r = this.targets[n];
      r.getPluginInstanceId() === e && this.removeAutomation(r);
    }
    for (const n of P.keys(this.targetValues)) {
      const r = tt.decodeAutomationTarget(n);
      r.getPluginInstanceId() === e && this.removeAutomation(r);
    }
  }
  removeAllPointsWithinRange(e, n) {
    for (const r of P.keys(this.targetValues))
      this.targetValues[r].removePointsInRange(e, n);
  }
  moveAllPointsWithinRange(e, n, r, i) {
    for (const s of P.keys(this.targetValues))
      this.targetValues[s].movePointsInRange(
        e,
        n,
        r,
        i,
        !1
      );
  }
  clone() {
    const e = new Tr();
    for (const n of this.targets)
      e.addAutomation(n.clone());
    for (const n of P.keys(this.targetValues)) {
      const r = this.targetValues[n];
      e.targetValues[n] = r.clone();
    }
    return e;
  }
}
var Jt = /* @__PURE__ */ ((t) => (t[t.MIDI_TRACK = 1] = "MIDI_TRACK", t[t.AUDIO_TRACK = 2] = "AUDIO_TRACK", t[t.MASTER_TRACK = 3] = "MASTER_TRACK", t[t.AUX_TRACK = 4] = "AUX_TRACK", t))(Jt || {});
class nt {
  static MAX_NUM_EFFECTS_PLUGINS = 5;
  static MAX_NUM_SENDS = 5;
  insturment;
  clips;
  suggestedInstruments;
  uuid;
  volume;
  solo;
  muted;
  rank;
  pan;
  samplerPlugin;
  audioPlugins = {};
  song;
  automation;
  type;
  auxTrackData;
  sends = {};
  output;
  constructor({
    type: e,
    song: n,
    uuid: r = nt.generateTrackIdInternal(),
    clips: i = [],
    instrument: s,
    suggestedInstruments: a = [],
    volume: o = Sf(0),
    solo: u = !1,
    muted: l = !1,
    rank: d = 0,
    pan: f = 0
  }) {
    this.song = n, this.type = e, s ? this.insturment = s : e === 1 && (this.insturment = new ge({
      program: 0,
      isDrum: !1
    })), e === 4 && (this.auxTrackData = new _f(), this.auxTrackData.setInputBusRank(1)), this.clips = [...i], this.suggestedInstruments = [...a], this.uuid = r, this.volume = o, this.solo = u, this.muted = l, this.rank = d, this.pan = f, this.automation = new Tr();
  }
  getType() {
    return this.type;
  }
  getSong() {
    return this.song;
  }
  getInstrument() {
    return this.insturment;
  }
  setInstrument({
    program: e,
    isDrum: n
  }) {
    this.type === 1 && (this.insturment = new ge({ program: e, isDrum: n }));
  }
  getSuggestedInstruments() {
    return this.suggestedInstruments;
  }
  createSuggestedInstrument({
    program: e,
    isDrum: n
  }) {
    if (this.type !== 1)
      return;
    const r = new ge({ program: e, isDrum: n });
    return this.suggestedInstruments.push(r), r;
  }
  clearSuggestedInstruments() {
    this.suggestedInstruments = [];
  }
  getId() {
    return this.uuid;
  }
  setId(e) {
    this.uuid = e;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(e) {
    this.volume = e;
  }
  setPan(e) {
    this.pan = e;
  }
  getPan() {
    return this.pan;
  }
  getSolo() {
    return this.solo;
  }
  setSolo(e) {
    this.solo = e, e && this.muted && (this.muted = !1);
  }
  getMuted() {
    return this.muted;
  }
  setMuted(e) {
    this.muted = e;
  }
  getRank() {
    return this.rank;
  }
  createAudioPlugin(e) {
    const n = Ze(e);
    return new cn(
      n.name,
      n.manufacturerName,
      n.pluginFormatName,
      n.pluginVersion
    );
  }
  getSamplerPlugin() {
    return this.samplerPlugin;
  }
  setSamplerPlugin(e, n = !0) {
    if (this.type !== 1)
      return;
    const r = !this.samplerPlugin && !!e || !e && !!this.samplerPlugin || !!e && !!this.samplerPlugin && !e.matchesTfId(this.samplerPlugin.getTuneflowId()), i = this.samplerPlugin;
    this.samplerPlugin = e, r && i && n && this.automation.removeAutomationOfPlugin(i.getInstanceId());
  }
  getAudioPluginCount() {
    return P.keys(this.audioPlugins).length;
  }
  getAudioPluginAt(e) {
    return this.audioPlugins[e];
  }
  setAudioPluginAt(e, n, r = !0) {
    if (e > nt.MAX_NUM_EFFECTS_PLUGINS - 1)
      throw new Error(
        `The maximum number of effects plugin per track is ${nt.MAX_NUM_EFFECTS_PLUGINS}`
      );
    const i = this.audioPlugins ? this.audioPlugins[e] : void 0, s = !i && !!n || !n && !!i || !!n && !!i && !n.matchesTfId(i.getTuneflowId());
    this.audioPlugins[e] = n, s && i && r && this.automation.removeAutomationOfPlugin(i.getInstanceId());
  }
  removeAudioPluginAt(e) {
    const n = this.audioPlugins ? this.audioPlugins[e] : void 0;
    delete this.audioPlugins[e], n && this.automation.removeAutomationOfPlugin(n.getInstanceId());
  }
  getPluginByInstanceId(e) {
    if (this.samplerPlugin && this.samplerPlugin.getInstanceId() === e)
      return this.samplerPlugin;
    if (this.audioPlugins)
      for (const n of P.keys(this.audioPlugins)) {
        const r = this.audioPlugins[n];
        if (!!r && r.getInstanceId() === e)
          return r;
      }
    return null;
  }
  getTrackStartTick() {
    return !this.clips || this.clips.length === 0 ? 0 : this.clips[0].getClipStartTick();
  }
  getTrackEndTick() {
    return !this.clips || this.clips.length === 0 ? 0 : this.clips[this.clips.length - 1].getClipEndTick();
  }
  getClipById(e) {
    for (const n of this.clips)
      if (n.getId() === e)
        return n;
    return null;
  }
  getClips() {
    return this.clips;
  }
  getClipsOverlappingWith(e, n) {
    const r = [], i = T.lt(
      this.clips,
      { getClipStartTick: () => e },
      (s, a) => s.getClipStartTick() - a.getClipStartTick()
    );
    for (let s = Math.max(i, 0); s < this.clips.length; s += 1) {
      const a = this.clips[s];
      if (!(a.getClipEndTick() < e)) {
        if (a.getClipStartTick() > n)
          break;
        r.push(a);
      }
    }
    return r;
  }
  createMIDIClip({
    clipStartTick: e,
    clipEndTick: n = void 0,
    insertClip: r = !0
  }) {
    if (!P.isNumber(e))
      throw new Error("clipStartTick must be specified when creating a clip.");
    const i = n ?? e + 1;
    if (i < e)
      throw new Error(
        `clipEndTick must be greater or equal to clipStartTick, got clipStartTick: ${e}, clipEndTick: ${n}`
      );
    const s = new et({
      id: et.generateClipIdInternal(),
      type: le.MIDI_CLIP,
      song: this.song,
      track: void 0,
      clipStartTick: e,
      clipEndTick: i
    });
    return r && this.insertClip(s), s;
  }
  createAudioClip({
    clipStartTick: e,
    audioClipData: n,
    clipEndTick: r,
    insertClip: i = !0
  }) {
    if (!P.isNumber(e))
      throw new Error("clipStartTick must be specified when creating a clip.");
    const s = new et({
      id: et.generateClipIdInternal(),
      type: le.AUDIO_CLIP,
      song: this.song,
      track: void 0,
      clipStartTick: e,
      clipEndTick: r,
      audioClipData: n
    });
    return i && this.insertClip(s), s;
  }
  insertClip(e) {
    if (e.getTrack() !== this)
      e.getTrack() && e.deleteFromParent(!1), e.track = this;
    else
      return;
    this.resolveClipConflictInternal(e.getId(), e.getClipStartTick(), e.getClipEndTick()), this.orderedInsertClipInternal(e);
  }
  cloneClip(e) {
    if (e.getType() === le.MIDI_CLIP) {
      const n = this.createMIDIClip({
        clipStartTick: e.getClipStartTick(),
        clipEndTick: e.getClipEndTick(),
        insertClip: !1
      });
      for (const r of e.getRawNotes())
        n.createNote({
          pitch: r.getPitch(),
          velocity: r.getVelocity(),
          startTick: r.getStartTick(),
          endTick: r.getEndTick(),
          updateClipRange: !1,
          resolveClipConflict: !1
        });
      return n;
    } else {
      if (e.getType() === le.AUDIO_CLIP)
        return this.createAudioClip({
          clipStartTick: e.getClipStartTick(),
          clipEndTick: e.getClipEndTick(),
          audioClipData: e.getAudioClipData(),
          insertClip: !1
        });
      throw new Error(`Unsupported clip type ${e.getType()}`);
    }
  }
  getClipIndex(e) {
    const n = T.le(
      this.clips,
      e,
      (r, i) => r.getClipStartTick() - i.getClipStartTick()
    );
    return this.clips.indexOf(e, n);
  }
  deleteClip(e, n) {
    const r = this.getClipIndex(e);
    this.deleteClipAt(r, n);
  }
  deleteClipAt(e, n) {
    if (!(e < 0)) {
      if (n) {
        const r = this.clips[e];
        if (!r)
          return;
        this.automation.removeAllPointsWithinRange(r.getClipStartTick(), r.getClipEndTick());
      }
      this.clips.splice(e, 1);
    }
  }
  deleteFromParent() {
    this.song.removeTrack(this.getId());
  }
  getAutomation() {
    return this.automation;
  }
  setAutomation(e) {
    this.automation = e.clone();
  }
  hasAnyAutomation() {
    return this.automation.getAutomationTargets().length > 0 && !P.isEmpty(this.automation.getAutomationTargetValues());
  }
  getAuxTrackData() {
    return this.auxTrackData;
  }
  getSendCount() {
    return P.keys(this.sends).length;
  }
  getSendAt(e) {
    return this.sends[e];
  }
  removeSendAt(e) {
    delete this.sends[e];
  }
  setSendAt(e, n) {
    if (e >= nt.MAX_NUM_SENDS)
      throw new Error(`Maximum of supported sends is ${nt.MAX_NUM_SENDS}`);
    if (this.type === 3)
      throw new Error("Cannot add send for master track");
    this.sends[e] = n;
  }
  getOutput() {
    return this.output;
  }
  setOutput({ type: e, trackId: n = void 0 }) {
    if (this.type === 3)
      throw new Error("Master track can only output to the default device.");
    if (e !== Pr.Track)
      throw new Error("Non-track output type is not supported yet.");
    if (n === this.getId())
      throw new Error("Cannot set output to the track itself.");
    this.output = new Ef({
      type: e,
      trackId: n
    });
  }
  removeOutput() {
    delete this.output;
  }
  getVisibleNotes() {
    const e = [];
    for (const n of this.getClips())
      for (const r of n.getNotes())
        e.push(r);
    return e.sort((n, r) => n.getStartTick() - r.getStartTick());
  }
  static generateTrackIdInternal() {
    return sn();
  }
  resolveClipConflictInternal(e, n, r) {
    const i = this.getClipsOverlappingWith(n, r);
    for (const s of i)
      s.getId() !== e && s.trimConflictPartInternal(n, r);
  }
  orderedInsertClipInternal(e) {
    const n = T.ge(
      this.clips,
      e,
      (r, i) => r.getClipStartTick() - i.getClipStartTick()
    );
    this.clips.splice(n, 0, e);
  }
}
var If = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.PreFader = 1] = "PreFader", t[t.PostFader = 2] = "PostFader", t))(If || {});
class tn {
  outputBusRank;
  gainLevel;
  position;
  muted;
  constructor({
    outputBusRank: e,
    gainLevel: n,
    position: r = 2,
    muted: i = !1
  }) {
    this.outputBusRank = e, this.gainLevel = tn.checkGainLevel(n), this.position = r, this.muted = P.isBoolean(i) ? i : !1;
  }
  static checkGainLevel(e) {
    if (e < 0 || e > 1)
      throw new Error(`Send gain level ${e} out of valid range 0 - 1.`);
    return e;
  }
  getOutputBusRank() {
    return this.outputBusRank;
  }
  setOutputBusRank(e) {
    this.outputBusRank = e;
  }
  getGainLevel() {
    return this.gainLevel;
  }
  setGainLevel(e) {
    this.gainLevel = tn.checkGainLevel(e);
  }
  getPosition() {
    return this.position;
  }
  setPosition(e) {
    this.position = e;
  }
  getMuted() {
    return this.muted;
  }
  setMuted(e) {
    this.muted = e;
  }
}
class ge {
  program;
  isDrum;
  constructor({
    program: e,
    isDrum: n
  }) {
    this.program = e, this.isDrum = n;
  }
  getProgram() {
    return this.program;
  }
  getIsDrum() {
    return this.isDrum;
  }
  clone() {
    return new ge({
      program: this.program,
      isDrum: this.isDrum
    });
  }
}
class _f {
  inputBusRank;
  setInputBusRank(e) {
    this.inputBusRank = e;
  }
  getInputBusRank() {
    return this.inputBusRank;
  }
  removeInputBus() {
    delete this.inputBusRank;
  }
}
var Pr = /* @__PURE__ */ ((t) => (t[t.Undefined = 0] = "Undefined", t[t.Device = 1] = "Device", t[t.Track = 2] = "Track", t))(Pr || {});
class Ef {
  type;
  trackId;
  constructor({ type: e, trackId: n = void 0 }) {
    this.type = e, this.trackId = n;
  }
  getType() {
    return this.type;
  }
  getTrackId() {
    return this.trackId;
  }
}
var xf = /* @__PURE__ */ ((t) => (t[t.AcousticGrandPiano = 0] = "AcousticGrandPiano", t[t.BrightAcousticPiano = 1] = "BrightAcousticPiano", t[t.ElectricGrandPiano = 2] = "ElectricGrandPiano", t[t.HonkyTonkPiano = 3] = "HonkyTonkPiano", t[t.ElectricPiano1 = 4] = "ElectricPiano1", t[t.ElectricPiano2 = 5] = "ElectricPiano2", t[t.Harpsichord = 6] = "Harpsichord", t[t.Clavinet = 7] = "Clavinet", t[t.Celesta = 8] = "Celesta", t[t.Glockenspiel = 9] = "Glockenspiel", t[t.Musicalbox = 10] = "Musicalbox", t[t.Vibraphone = 11] = "Vibraphone", t[t.Marimba = 12] = "Marimba", t[t.Xylophone = 13] = "Xylophone", t[t.TubularBell = 14] = "TubularBell", t[t.Dulcimer = 15] = "Dulcimer", t[t.DrawbarOrgan = 16] = "DrawbarOrgan", t[t.PercussiveOrgan = 17] = "PercussiveOrgan", t[t.RockOrgan = 18] = "RockOrgan", t[t.Churchorgan = 19] = "Churchorgan", t[t.Reedorgan = 20] = "Reedorgan", t[t.Accordion = 21] = "Accordion", t[t.Harmonica = 22] = "Harmonica", t[t.TangoAccordion = 23] = "TangoAccordion", t[t.AcousticGuitarNylon = 24] = "AcousticGuitarNylon", t[t.AcousticGuitarSteel = 25] = "AcousticGuitarSteel", t[t.ElectricGuitarJazz = 26] = "ElectricGuitarJazz", t[t.ElectricGuitarClean = 27] = "ElectricGuitarClean", t[t.ElectricGuitarMuted = 28] = "ElectricGuitarMuted", t[t.OverdrivenGuitar = 29] = "OverdrivenGuitar", t[t.DistortionGuitar = 30] = "DistortionGuitar", t[t.Guitarharmonics = 31] = "Guitarharmonics", t[t.AcousticBass = 32] = "AcousticBass", t[t.ElectricBassFinger = 33] = "ElectricBassFinger", t[t.ElectricBassPick = 34] = "ElectricBassPick", t[t.FretlessBass = 35] = "FretlessBass", t[t.SlapBass1 = 36] = "SlapBass1", t[t.SlapBass2 = 37] = "SlapBass2", t[t.SynthBass1 = 38] = "SynthBass1", t[t.SynthBass2 = 39] = "SynthBass2", t[t.Violin = 40] = "Violin", t[t.Viola = 41] = "Viola", t[t.Cello = 42] = "Cello", t[t.Contrabass = 43] = "Contrabass", t[t.TremoloStrings = 44] = "TremoloStrings", t[t.PizzicatoStrings = 45] = "PizzicatoStrings", t[t.OrchestralHarp = 46] = "OrchestralHarp", t[t.Timpani = 47] = "Timpani", t[t.StringEnsemble1 = 48] = "StringEnsemble1", t[t.StringEnsemble2 = 49] = "StringEnsemble2", t[t.SynthStrings1 = 50] = "SynthStrings1", t[t.SynthStrings2 = 51] = "SynthStrings2", t[t.VoiceAahs = 52] = "VoiceAahs", t[t.VoiceOohs = 53] = "VoiceOohs", t[t.SynthVoice = 54] = "SynthVoice", t[t.OrchestraHit = 55] = "OrchestraHit", t[t.Trumpet = 56] = "Trumpet", t[t.Trombone = 57] = "Trombone", t[t.Tuba = 58] = "Tuba", t[t.MutedTrumpet = 59] = "MutedTrumpet", t[t.Frenchhorn = 60] = "Frenchhorn", t[t.BrassSection = 61] = "BrassSection", t[t.SynthBrass1 = 62] = "SynthBrass1", t[t.SynthBrass2 = 63] = "SynthBrass2", t[t.SopranoSax = 64] = "SopranoSax", t[t.AltoSax = 65] = "AltoSax", t[t.TenorSax = 66] = "TenorSax", t[t.BaritoneSax = 67] = "BaritoneSax", t[t.Oboe = 68] = "Oboe", t[t.EnglishHorn = 69] = "EnglishHorn", t[t.Bassoon = 70] = "Bassoon", t[t.Clarinet = 71] = "Clarinet", t[t.Piccolo = 72] = "Piccolo", t[t.Flute = 73] = "Flute", t[t.Recorder = 74] = "Recorder", t[t.PanFlute = 75] = "PanFlute", t[t.BlownBottle = 76] = "BlownBottle", t[t.Shakuhachi = 77] = "Shakuhachi", t[t.Whistle = 78] = "Whistle", t[t.Ocarina = 79] = "Ocarina", t[t.Lead1Square = 80] = "Lead1Square", t[t.Lead2Sawtooth = 81] = "Lead2Sawtooth", t[t.Lead3Calliope = 82] = "Lead3Calliope", t[t.Lead4Chiff = 83] = "Lead4Chiff", t[t.Lead5Charang = 84] = "Lead5Charang", t[t.Lead6Voice = 85] = "Lead6Voice", t[t.Lead7Fifths = 86] = "Lead7Fifths", t[t.Lead8BassLead = 87] = "Lead8BassLead", t[t.Pad1NewAge = 88] = "Pad1NewAge", t[t.Pad2Warm = 89] = "Pad2Warm", t[t.Pad3PolySynth = 90] = "Pad3PolySynth", t[t.Pad4Choir = 91] = "Pad4Choir", t[t.Pad5Bowed = 92] = "Pad5Bowed", t[t.Pad6Metallic = 93] = "Pad6Metallic", t[t.Pad7Halo = 94] = "Pad7Halo", t[t.Pad8Sweep = 95] = "Pad8Sweep", t[t.FX1Rain = 96] = "FX1Rain", t[t.FX2Soundtrack = 97] = "FX2Soundtrack", t[t.FX3Crystal = 98] = "FX3Crystal", t[t.FX4Atmosphere = 99] = "FX4Atmosphere", t[t.FX5Brightness = 100] = "FX5Brightness", t[t.FX6Goblins = 101] = "FX6Goblins", t[t.FX7Echoes = 102] = "FX7Echoes", t[t.FX8SciFi = 103] = "FX8SciFi", t[t.Sitar = 104] = "Sitar", t[t.Banjo = 105] = "Banjo", t[t.Shamisen = 106] = "Shamisen", t[t.Guzheng = 107] = "Guzheng", t[t.Kalimba = 108] = "Kalimba", t[t.Bagpipe = 109] = "Bagpipe", t[t.Fiddle = 110] = "Fiddle", t[t.Shanai = 111] = "Shanai", t[t.TinkleBell = 112] = "TinkleBell", t[t.Agogo = 113] = "Agogo", t[t.SteelDrums = 114] = "SteelDrums", t[t.Woodblock = 115] = "Woodblock", t[t.TaikoDrum = 116] = "TaikoDrum", t[t.MelodicTom = 117] = "MelodicTom", t[t.SynthDrum = 118] = "SynthDrum", t[t.ReverseCymbal = 119] = "ReverseCymbal", t[t.GuitarFretNoise = 120] = "GuitarFretNoise", t[t.BreathNoise = 121] = "BreathNoise", t[t.Seashore = 122] = "Seashore", t[t.BirdTweet = 123] = "BirdTweet", t[t.TelephoneRing = 124] = "TelephoneRing", t[t.Helicopter = 125] = "Helicopter", t[t.Applause = 126] = "Applause", t[t.Gunshot = 127] = "Gunshot", t))(xf || {}), Tf = /* @__PURE__ */ ((t) => (t[t.BassDrum2 = 35] = "BassDrum2", t[t.BassDrum1 = 36] = "BassDrum1", t[t.SideStick = 37] = "SideStick", t[t.SnareDrum1 = 38] = "SnareDrum1", t[t.HandClap = 39] = "HandClap", t[t.SnareDrum2 = 40] = "SnareDrum2", t[t.LowTom2 = 41] = "LowTom2", t[t.ClosedHiHat = 42] = "ClosedHiHat", t[t.LowTom1 = 43] = "LowTom1", t[t.PedalHiHat = 44] = "PedalHiHat", t[t.MidTom2 = 45] = "MidTom2", t[t.OpenHiHat = 46] = "OpenHiHat", t[t.MidTom1 = 47] = "MidTom1", t[t.HighTom2 = 48] = "HighTom2", t[t.CrashCymbal1 = 49] = "CrashCymbal1", t[t.HighTom1 = 50] = "HighTom1", t[t.RideCymbal1 = 51] = "RideCymbal1", t[t.ChineseCymbal = 52] = "ChineseCymbal", t[t.RideBell = 53] = "RideBell", t[t.Tambourine = 54] = "Tambourine", t[t.SplashCymbal = 55] = "SplashCymbal", t[t.Cowbell = 56] = "Cowbell", t[t.CrashCymbal2 = 57] = "CrashCymbal2", t[t.VibraSlap = 58] = "VibraSlap", t[t.RideCymbal2 = 59] = "RideCymbal2", t[t.HighBongo = 60] = "HighBongo", t[t.LowBongo = 61] = "LowBongo", t[t.MuteHighConga = 62] = "MuteHighConga", t[t.OpenHighConga = 63] = "OpenHighConga", t[t.LowConga = 64] = "LowConga", t[t.HighTimbale = 65] = "HighTimbale", t[t.LowTimbale = 66] = "LowTimbale", t[t.HighAgogo = 67] = "HighAgogo", t[t.LowAgogo = 68] = "LowAgogo", t[t.Cabasa = 69] = "Cabasa", t[t.Maracas = 70] = "Maracas", t[t.ShortWhistle = 71] = "ShortWhistle", t[t.LongWhistle = 72] = "LongWhistle", t[t.ShortGuiro = 73] = "ShortGuiro", t[t.LongGuiro = 74] = "LongGuiro", t[t.Claves = 75] = "Claves", t[t.HighWoodBlock = 76] = "HighWoodBlock", t[t.LowWoodBlock = 77] = "LowWoodBlock", t[t.MuteCuica = 78] = "MuteCuica", t[t.OpenCuica = 79] = "OpenCuica", t[t.MuteTriangle = 80] = "MuteTriangle", t[t.OpenTriangle = 81] = "OpenTriangle", t[t.Shaker = 82] = "Shaker", t))(Tf || {}), fa = {}, un = {};
function Pf(t) {
  var e = new z(t), n = e.readChunk();
  if (n.id != "MThd")
    throw "Bad MIDI file.  Expected 'MHdr', got: '" + n.id + "'";
  for (var r = Nf(n.data), i = [], s = 0; !e.eof() && s < r.numTracks; s++) {
    var a = e.readChunk();
    if (a.id != "MTrk")
      throw "Bad MIDI file.  Expected 'MTrk', got: '" + a.id + "'";
    var o = Af(a.data);
    i.push(o);
  }
  return {
    header: r,
    tracks: i
  };
}
function Nf(t) {
  var e = new z(t), n = e.readUInt16(), r = e.readUInt16(), i = {
    format: n,
    numTracks: r
  }, s = e.readUInt16();
  return s & 32768 ? (i.framesPerSecond = 256 - (s >> 8), i.ticksPerFrame = s & 255) : i.ticksPerBeat = s, i;
}
function Af(t) {
  for (var e = new z(t), n = []; !e.eof(); ) {
    var r = s();
    n.push(r);
  }
  return n;
  var i;
  function s() {
    var a = {};
    a.deltaTime = e.readVarInt();
    var o = e.readUInt8();
    if ((o & 240) === 240)
      if (o === 255) {
        a.meta = !0;
        var u = e.readUInt8(), l = e.readVarInt();
        switch (u) {
          case 0:
            if (a.type = "sequenceNumber", l !== 2)
              throw "Expected length for sequenceNumber event is 2, got " + l;
            return a.number = e.readUInt16(), a;
          case 1:
            return a.type = "text", a.text = e.readString(l), a;
          case 2:
            return a.type = "copyrightNotice", a.text = e.readString(l), a;
          case 3:
            return a.type = "trackName", a.text = e.readString(l), a;
          case 4:
            return a.type = "instrumentName", a.text = e.readString(l), a;
          case 5:
            return a.type = "lyrics", a.text = e.readString(l), a;
          case 6:
            return a.type = "marker", a.text = e.readString(l), a;
          case 7:
            return a.type = "cuePoint", a.text = e.readString(l), a;
          case 32:
            if (a.type = "channelPrefix", l != 1)
              throw "Expected length for channelPrefix event is 1, got " + l;
            return a.channel = e.readUInt8(), a;
          case 33:
            if (a.type = "portPrefix", l != 1)
              throw "Expected length for portPrefix event is 1, got " + l;
            return a.port = e.readUInt8(), a;
          case 47:
            if (a.type = "endOfTrack", l != 0)
              throw "Expected length for endOfTrack event is 0, got " + l;
            return a;
          case 81:
            if (a.type = "setTempo", l != 3)
              throw "Expected length for setTempo event is 3, got " + l;
            return a.microsecondsPerBeat = e.readUInt24(), a;
          case 84:
            if (a.type = "smpteOffset", l != 5)
              throw "Expected length for smpteOffset event is 5, got " + l;
            var d = e.readUInt8(), f = { 0: 24, 32: 25, 64: 29, 96: 30 };
            return a.frameRate = f[d & 96], a.hour = d & 31, a.min = e.readUInt8(), a.sec = e.readUInt8(), a.frame = e.readUInt8(), a.subFrame = e.readUInt8(), a;
          case 88:
            if (a.type = "timeSignature", l != 2 && l != 4)
              throw "Expected length for timeSignature event is 4 or 2, got " + l;
            return a.numerator = e.readUInt8(), a.denominator = 1 << e.readUInt8(), l === 4 ? (a.metronome = e.readUInt8(), a.thirtyseconds = e.readUInt8()) : (a.metronome = 36, a.thirtyseconds = 8), a;
          case 89:
            if (a.type = "keySignature", l != 2)
              throw "Expected length for keySignature event is 2, got " + l;
            return a.key = e.readInt8(), a.scale = e.readUInt8(), a;
          case 127:
            return a.type = "sequencerSpecific", a.data = e.readBytes(l), a;
          default:
            return a.type = "unknownMeta", a.data = e.readBytes(l), a.metatypeByte = u, a;
        }
      } else if (o == 240) {
        a.type = "sysEx";
        var l = e.readVarInt();
        return a.data = e.readBytes(l), a;
      } else if (o == 247) {
        a.type = "endSysEx";
        var l = e.readVarInt();
        return a.data = e.readBytes(l), a;
      } else
        throw "Unrecognised MIDI event type byte: " + o;
    else {
      var g;
      if ((o & 128) === 0) {
        if (i === null)
          throw "Running status byte encountered before status byte";
        g = o, o = i, a.running = !0;
      } else
        g = e.readUInt8(), i = o;
      var m = o >> 4;
      switch (a.channel = o & 15, m) {
        case 8:
          return a.type = "noteOff", a.noteNumber = g, a.velocity = e.readUInt8(), a;
        case 9:
          var b = e.readUInt8();
          return a.type = b === 0 ? "noteOff" : "noteOn", a.noteNumber = g, a.velocity = b, b === 0 && (a.byte9 = !0), a;
        case 10:
          return a.type = "noteAftertouch", a.noteNumber = g, a.amount = e.readUInt8(), a;
        case 11:
          return a.type = "controller", a.controllerType = g, a.value = e.readUInt8(), a;
        case 12:
          return a.type = "programChange", a.programNumber = g, a;
        case 13:
          return a.type = "channelAftertouch", a.amount = g, a;
        case 14:
          return a.type = "pitchBend", a.value = g + (e.readUInt8() << 7) - 8192, a;
        default:
          throw "Unrecognised MIDI event type: " + m;
      }
    }
  }
}
function z(t) {
  this.buffer = t, this.bufferLen = this.buffer.length, this.pos = 0;
}
z.prototype.eof = function() {
  return this.pos >= this.bufferLen;
};
z.prototype.readUInt8 = function() {
  var t = this.buffer[this.pos];
  return this.pos += 1, t;
};
z.prototype.readInt8 = function() {
  var t = this.readUInt8();
  return t & 128 ? t - 256 : t;
};
z.prototype.readUInt16 = function() {
  var t = this.readUInt8(), e = this.readUInt8();
  return (t << 8) + e;
};
z.prototype.readInt16 = function() {
  var t = this.readUInt16();
  return t & 32768 ? t - 65536 : t;
};
z.prototype.readUInt24 = function() {
  var t = this.readUInt8(), e = this.readUInt8(), n = this.readUInt8();
  return (t << 16) + (e << 8) + n;
};
z.prototype.readInt24 = function() {
  var t = this.readUInt24();
  return t & 8388608 ? t - 16777216 : t;
};
z.prototype.readUInt32 = function() {
  var t = this.readUInt8(), e = this.readUInt8(), n = this.readUInt8(), r = this.readUInt8();
  return (t << 24) + (e << 16) + (n << 8) + r;
};
z.prototype.readBytes = function(t) {
  var e = this.buffer.slice(this.pos, this.pos + t);
  return this.pos += t, e;
};
z.prototype.readString = function(t) {
  var e = this.readBytes(t);
  return String.fromCharCode.apply(null, e);
};
z.prototype.readVarInt = function() {
  for (var t = 0; !this.eof(); ) {
    var e = this.readUInt8();
    if (e & 128)
      t += e & 127, t <<= 7;
    else
      return t + e;
  }
  return t;
};
z.prototype.readChunk = function() {
  var t = this.readString(4), e = this.readUInt32(), n = this.readBytes(e);
  return {
    id: t,
    length: e,
    data: n
  };
};
var Of = Pf;
function yf(t, e) {
  if (typeof t != "object")
    throw "Invalid MIDI data";
  e = e || {};
  var n = t.header || {}, r = t.tracks || [], i, s = r.length, a = new R();
  for (Rf(a, n, s), i = 0; i < s; i++)
    Bf(a, r[i], e);
  return a.buffer;
}
function Rf(t, e, n) {
  var r = e.format == null ? 1 : e.format, i = 128;
  e.timeDivision ? i = e.timeDivision : e.ticksPerFrame && e.framesPerSecond ? i = -(e.framesPerSecond & 255) << 8 | e.ticksPerFrame & 255 : e.ticksPerBeat && (i = e.ticksPerBeat & 32767);
  var s = new R();
  s.writeUInt16(r), s.writeUInt16(n), s.writeUInt16(i), t.writeChunk("MThd", s.buffer);
}
function Bf(t, e, n) {
  var r = new R(), i, s = e.length, a = null;
  for (i = 0; i < s; i++)
    (n.running === !1 || !n.running && !e[i].running) && (a = null), a = Ff(r, e[i], a, n.useByte9ForNoteOff);
  t.writeChunk("MTrk", r.buffer);
}
function Ff(t, e, n, r) {
  var i = e.type, s = e.deltaTime, a = e.text || "", o = e.data || [], u = null;
  switch (t.writeVarInt(s), i) {
    case "sequenceNumber":
      t.writeUInt8(255), t.writeUInt8(0), t.writeVarInt(2), t.writeUInt16(e.number);
      break;
    case "text":
      t.writeUInt8(255), t.writeUInt8(1), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "copyrightNotice":
      t.writeUInt8(255), t.writeUInt8(2), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "trackName":
      t.writeUInt8(255), t.writeUInt8(3), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "instrumentName":
      t.writeUInt8(255), t.writeUInt8(4), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "lyrics":
      t.writeUInt8(255), t.writeUInt8(5), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "marker":
      t.writeUInt8(255), t.writeUInt8(6), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "cuePoint":
      t.writeUInt8(255), t.writeUInt8(7), t.writeVarInt(a.length), t.writeString(a);
      break;
    case "channelPrefix":
      t.writeUInt8(255), t.writeUInt8(32), t.writeVarInt(1), t.writeUInt8(e.channel);
      break;
    case "portPrefix":
      t.writeUInt8(255), t.writeUInt8(33), t.writeVarInt(1), t.writeUInt8(e.port);
      break;
    case "endOfTrack":
      t.writeUInt8(255), t.writeUInt8(47), t.writeVarInt(0);
      break;
    case "setTempo":
      t.writeUInt8(255), t.writeUInt8(81), t.writeVarInt(3), t.writeUInt24(e.microsecondsPerBeat);
      break;
    case "smpteOffset":
      t.writeUInt8(255), t.writeUInt8(84), t.writeVarInt(5);
      var l = { 24: 0, 25: 32, 29: 64, 30: 96 }, d = e.hour & 31 | l[e.frameRate];
      t.writeUInt8(d), t.writeUInt8(e.min), t.writeUInt8(e.sec), t.writeUInt8(e.frame), t.writeUInt8(e.subFrame);
      break;
    case "timeSignature":
      t.writeUInt8(255), t.writeUInt8(88), t.writeVarInt(4), t.writeUInt8(e.numerator);
      var f = Math.floor(Math.log(e.denominator) / Math.LN2) & 255;
      t.writeUInt8(f), t.writeUInt8(e.metronome), t.writeUInt8(e.thirtyseconds || 8);
      break;
    case "keySignature":
      t.writeUInt8(255), t.writeUInt8(89), t.writeVarInt(2), t.writeInt8(e.key), t.writeUInt8(e.scale);
      break;
    case "sequencerSpecific":
      t.writeUInt8(255), t.writeUInt8(127), t.writeVarInt(o.length), t.writeBytes(o);
      break;
    case "unknownMeta":
      e.metatypeByte != null && (t.writeUInt8(255), t.writeUInt8(e.metatypeByte), t.writeVarInt(o.length), t.writeBytes(o));
      break;
    case "sysEx":
      t.writeUInt8(240), t.writeVarInt(o.length), t.writeBytes(o);
      break;
    case "endSysEx":
      t.writeUInt8(247), t.writeVarInt(o.length), t.writeBytes(o);
      break;
    case "noteOff":
      var g = r !== !1 && e.byte9 || r && e.velocity == 0 ? 144 : 128;
      u = g | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
      break;
    case "noteOn":
      u = 144 | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
      break;
    case "noteAftertouch":
      u = 160 | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.noteNumber), t.writeUInt8(e.amount);
      break;
    case "controller":
      u = 176 | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.controllerType), t.writeUInt8(e.value);
      break;
    case "programChange":
      u = 192 | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.programNumber);
      break;
    case "channelAftertouch":
      u = 208 | e.channel, u !== n && t.writeUInt8(u), t.writeUInt8(e.amount);
      break;
    case "pitchBend":
      u = 224 | e.channel, u !== n && t.writeUInt8(u);
      var m = 8192 + e.value, b = m & 127, v = m >> 7 & 127;
      t.writeUInt8(b), t.writeUInt8(v);
      break;
    default:
      throw "Unrecognized event type: " + i;
  }
  return u;
}
function R() {
  this.buffer = [];
}
R.prototype.writeUInt8 = function(t) {
  this.buffer.push(t & 255);
};
R.prototype.writeInt8 = R.prototype.writeUInt8;
R.prototype.writeUInt16 = function(t) {
  var e = t >> 8 & 255, n = t & 255;
  this.writeUInt8(e), this.writeUInt8(n);
};
R.prototype.writeInt16 = R.prototype.writeUInt16;
R.prototype.writeUInt24 = function(t) {
  var e = t >> 16 & 255, n = t >> 8 & 255, r = t & 255;
  this.writeUInt8(e), this.writeUInt8(n), this.writeUInt8(r);
};
R.prototype.writeInt24 = R.prototype.writeUInt24;
R.prototype.writeUInt32 = function(t) {
  var e = t >> 24 & 255, n = t >> 16 & 255, r = t >> 8 & 255, i = t & 255;
  this.writeUInt8(e), this.writeUInt8(n), this.writeUInt8(r), this.writeUInt8(i);
};
R.prototype.writeInt32 = R.prototype.writeUInt32;
R.prototype.writeBytes = function(t) {
  this.buffer = this.buffer.concat(Array.prototype.slice.call(t, 0));
};
R.prototype.writeString = function(t) {
  var e, n = t.length, r = [];
  for (e = 0; e < n; e++)
    r.push(t.codePointAt(e));
  this.writeBytes(r);
};
R.prototype.writeVarInt = function(t) {
  if (t < 0)
    throw "Cannot write negative variable-length integer";
  if (t <= 127)
    this.writeUInt8(t);
  else {
    var e = t, n = [];
    for (n.push(e & 127), e >>= 7; e; ) {
      var r = e & 127 | 128;
      n.push(r), e >>= 7;
    }
    this.writeBytes(n.reverse());
  }
};
R.prototype.writeChunk = function(t, e) {
  this.writeString(t), this.writeUInt32(e.length), this.writeBytes(e);
};
var Vf = yf;
un.parseMidi = Of;
un.writeMidi = Vf;
var en = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.insert = Lt.search = void 0;
function ha(t, e, n) {
  n === void 0 && (n = "ticks");
  var r = 0, i = t.length, s = i;
  if (i > 0 && t[i - 1][n] <= e)
    return i - 1;
  for (; r < s; ) {
    var a = Math.floor(r + (s - r) / 2), o = t[a], u = t[a + 1];
    if (o[n] === e) {
      for (var l = a; l < t.length; l++) {
        var d = t[l];
        d[n] === e && (a = l);
      }
      return a;
    } else {
      if (o[n] < e && u[n] > e)
        return a;
      o[n] > e ? s = a : o[n] < e && (r = a + 1);
    }
  }
  return -1;
}
Lt.search = ha;
function Uf(t, e, n) {
  if (n === void 0 && (n = "ticks"), t.length) {
    var r = ha(t, e[n], n);
    t.splice(r + 1, 0, e);
  } else
    t.push(e);
}
Lt.insert = Uf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Header = t.keySignatureKeys = void 0;
  var e = Lt, n = /* @__PURE__ */ new WeakMap();
  t.keySignatureKeys = [
    "Cb",
    "Gb",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#"
  ];
  var r = function() {
    function i(s) {
      var a = this;
      if (this.tempos = [], this.timeSignatures = [], this.keySignatures = [], this.meta = [], this.name = "", n.set(this, 480), s) {
        n.set(this, s.header.ticksPerBeat), s.tracks.forEach(function(u) {
          u.forEach(function(l) {
            l.meta && (l.type === "timeSignature" ? a.timeSignatures.push({
              ticks: l.absoluteTime,
              timeSignature: [
                l.numerator,
                l.denominator
              ]
            }) : l.type === "setTempo" ? a.tempos.push({
              bpm: 6e7 / l.microsecondsPerBeat,
              ticks: l.absoluteTime
            }) : l.type === "keySignature" && a.keySignatures.push({
              key: t.keySignatureKeys[l.key + 7],
              scale: l.scale === 0 ? "major" : "minor",
              ticks: l.absoluteTime
            }));
          });
        });
        var o = 0;
        s.tracks[0].forEach(function(u) {
          o += u.deltaTime, u.meta && (u.type === "trackName" ? a.name = u.text : (u.type === "text" || u.type === "cuePoint" || u.type === "marker" || u.type === "lyrics") && a.meta.push({
            text: u.text,
            ticks: o,
            type: u.type
          }));
        }), this.update();
      }
    }
    return i.prototype.update = function() {
      var s = this, a = 0, o = 0;
      this.tempos.sort(function(u, l) {
        return u.ticks - l.ticks;
      }), this.tempos.forEach(function(u, l) {
        var d = l > 0 ? s.tempos[l - 1].bpm : s.tempos[0].bpm, f = u.ticks / s.ppq - o, g = 60 / d * f;
        u.time = g + a, a = u.time, o += f;
      }), this.timeSignatures.sort(function(u, l) {
        return u.ticks - l.ticks;
      }), this.timeSignatures.forEach(function(u, l) {
        var d = l > 0 ? s.timeSignatures[l - 1] : s.timeSignatures[0], f = (u.ticks - d.ticks) / s.ppq, g = f / d.timeSignature[0] / (d.timeSignature[1] / 4);
        d.measures = d.measures || 0, u.measures = g + d.measures;
      });
    }, i.prototype.ticksToSeconds = function(s) {
      var a = (0, e.search)(this.tempos, s);
      if (a !== -1) {
        var o = this.tempos[a], u = o.time, l = (s - o.ticks) / this.ppq;
        return u + 60 / o.bpm * l;
      } else {
        var d = s / this.ppq;
        return 60 / 120 * d;
      }
    }, i.prototype.ticksToMeasures = function(s) {
      var a = (0, e.search)(this.timeSignatures, s);
      if (a !== -1) {
        var o = this.timeSignatures[a], u = (s - o.ticks) / this.ppq;
        return o.measures + u / (o.timeSignature[0] / o.timeSignature[1]) / 4;
      } else
        return s / this.ppq / 4;
    }, Object.defineProperty(i.prototype, "ppq", {
      get: function() {
        return n.get(this);
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.secondsToTicks = function(s) {
      var a = (0, e.search)(this.tempos, s, "time");
      if (a !== -1) {
        var o = this.tempos[a], u = o.time, l = s - u, d = l / (60 / o.bpm);
        return Math.round(o.ticks + d * this.ppq);
      } else {
        var f = s / 0.5;
        return Math.round(f * this.ppq);
      }
    }, i.prototype.toJSON = function() {
      return {
        keySignatures: this.keySignatures,
        meta: this.meta,
        name: this.name,
        ppq: this.ppq,
        tempos: this.tempos.map(function(s) {
          return {
            bpm: s.bpm,
            ticks: s.ticks
          };
        }),
        timeSignatures: this.timeSignatures
      };
    }, i.prototype.fromJSON = function(s) {
      this.name = s.name, this.tempos = s.tempos.map(function(a) {
        return Object.assign({}, a);
      }), this.timeSignatures = s.timeSignatures.map(function(a) {
        return Object.assign({}, a);
      }), this.keySignatures = s.keySignatures.map(function(a) {
        return Object.assign({}, a);
      }), this.meta = s.meta.map(function(a) {
        return Object.assign({}, a);
      }), n.set(this, s.ppq), this.update();
    }, i.prototype.setTempo = function(s) {
      this.tempos = [
        {
          bpm: s,
          ticks: 0
        }
      ], this.update();
    }, i;
  }();
  t.Header = r;
})(en);
var be = {}, Nr = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ControlChange = t.controlChangeIds = t.controlChangeNames = void 0, t.controlChangeNames = {
    1: "modulationWheel",
    2: "breath",
    4: "footController",
    5: "portamentoTime",
    7: "volume",
    8: "balance",
    10: "pan",
    64: "sustain",
    65: "portamentoTime",
    66: "sostenuto",
    67: "softPedal",
    68: "legatoFootswitch",
    84: "portamentoControl"
  }, t.controlChangeIds = Object.keys(t.controlChangeNames).reduce(function(i, s) {
    return i[t.controlChangeNames[s]] = s, i;
  }, {});
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = function() {
    function i(s, a) {
      e.set(this, a), n.set(this, s.controllerType), this.ticks = s.absoluteTime, this.value = s.value;
    }
    return Object.defineProperty(i.prototype, "number", {
      get: function() {
        return n.get(this);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "name", {
      get: function() {
        return t.controlChangeNames[this.number] ? t.controlChangeNames[this.number] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "time", {
      get: function() {
        var s = e.get(this);
        return s.ticksToSeconds(this.ticks);
      },
      set: function(s) {
        var a = e.get(this);
        this.ticks = a.secondsToTicks(s);
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.toJSON = function() {
      return {
        number: this.number,
        ticks: this.ticks,
        time: this.time,
        value: this.value
      };
    }, i;
  }();
  t.ControlChange = r;
})(Nr);
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.createControlChanges = void 0;
var Le = Nr;
function Lf() {
  return new Proxy({}, {
    get: function(t, e) {
      if (t[e])
        return t[e];
      if (Le.controlChangeIds.hasOwnProperty(e))
        return t[Le.controlChangeIds[e]];
    },
    set: function(t, e, n) {
      return Le.controlChangeIds.hasOwnProperty(e) ? t[Le.controlChangeIds[e]] = n : t[e] = n, !0;
    }
  });
}
ln.createControlChanges = Lf;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.PitchBend = void 0;
var yn = /* @__PURE__ */ new WeakMap(), Hf = function() {
  function t(e, n) {
    yn.set(this, n), this.ticks = e.absoluteTime, this.value = e.value;
  }
  return Object.defineProperty(t.prototype, "time", {
    get: function() {
      var e = yn.get(this);
      return e.ticksToSeconds(this.ticks);
    },
    set: function(e) {
      var n = yn.get(this);
      this.ticks = n.secondsToTicks(e);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toJSON = function() {
    return {
      ticks: this.ticks,
      time: this.time,
      value: this.value
    };
  }, t;
}();
fn.PitchBend = Hf;
var hn = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.DrumKitByPatchID = Ct.InstrumentFamilyByID = Ct.instrumentByPatchID = void 0;
Ct.instrumentByPatchID = [
  "acoustic grand piano",
  "bright acoustic piano",
  "electric grand piano",
  "honky-tonk piano",
  "electric piano 1",
  "electric piano 2",
  "harpsichord",
  "clavi",
  "celesta",
  "glockenspiel",
  "music box",
  "vibraphone",
  "marimba",
  "xylophone",
  "tubular bells",
  "dulcimer",
  "drawbar organ",
  "percussive organ",
  "rock organ",
  "church organ",
  "reed organ",
  "accordion",
  "harmonica",
  "tango accordion",
  "acoustic guitar (nylon)",
  "acoustic guitar (steel)",
  "electric guitar (jazz)",
  "electric guitar (clean)",
  "electric guitar (muted)",
  "overdriven guitar",
  "distortion guitar",
  "guitar harmonics",
  "acoustic bass",
  "electric bass (finger)",
  "electric bass (pick)",
  "fretless bass",
  "slap bass 1",
  "slap bass 2",
  "synth bass 1",
  "synth bass 2",
  "violin",
  "viola",
  "cello",
  "contrabass",
  "tremolo strings",
  "pizzicato strings",
  "orchestral harp",
  "timpani",
  "string ensemble 1",
  "string ensemble 2",
  "synthstrings 1",
  "synthstrings 2",
  "choir aahs",
  "voice oohs",
  "synth voice",
  "orchestra hit",
  "trumpet",
  "trombone",
  "tuba",
  "muted trumpet",
  "french horn",
  "brass section",
  "synthbrass 1",
  "synthbrass 2",
  "soprano sax",
  "alto sax",
  "tenor sax",
  "baritone sax",
  "oboe",
  "english horn",
  "bassoon",
  "clarinet",
  "piccolo",
  "flute",
  "recorder",
  "pan flute",
  "blown bottle",
  "shakuhachi",
  "whistle",
  "ocarina",
  "lead 1 (square)",
  "lead 2 (sawtooth)",
  "lead 3 (calliope)",
  "lead 4 (chiff)",
  "lead 5 (charang)",
  "lead 6 (voice)",
  "lead 7 (fifths)",
  "lead 8 (bass + lead)",
  "pad 1 (new age)",
  "pad 2 (warm)",
  "pad 3 (polysynth)",
  "pad 4 (choir)",
  "pad 5 (bowed)",
  "pad 6 (metallic)",
  "pad 7 (halo)",
  "pad 8 (sweep)",
  "fx 1 (rain)",
  "fx 2 (soundtrack)",
  "fx 3 (crystal)",
  "fx 4 (atmosphere)",
  "fx 5 (brightness)",
  "fx 6 (goblins)",
  "fx 7 (echoes)",
  "fx 8 (sci-fi)",
  "sitar",
  "banjo",
  "shamisen",
  "koto",
  "kalimba",
  "bag pipe",
  "fiddle",
  "shanai",
  "tinkle bell",
  "agogo",
  "steel drums",
  "woodblock",
  "taiko drum",
  "melodic tom",
  "synth drum",
  "reverse cymbal",
  "guitar fret noise",
  "breath noise",
  "seashore",
  "bird tweet",
  "telephone ring",
  "helicopter",
  "applause",
  "gunshot"
];
Ct.InstrumentFamilyByID = [
  "piano",
  "chromatic percussion",
  "organ",
  "guitar",
  "bass",
  "strings",
  "ensemble",
  "brass",
  "reed",
  "pipe",
  "synth lead",
  "synth pad",
  "synth effects",
  "world",
  "percussive",
  "sound effects"
];
Ct.DrumKitByPatchID = {
  0: "standard kit",
  8: "room kit",
  16: "power kit",
  24: "electronic kit",
  25: "tr-808 kit",
  32: "jazz kit",
  40: "brush kit",
  48: "orchestra kit",
  56: "sound fx kit"
};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.Instrument = void 0;
var He = Ct, Ui = /* @__PURE__ */ new WeakMap(), $f = function() {
  function t(e, n) {
    if (this.number = 0, Ui.set(this, n), this.number = 0, e) {
      var r = e.find(function(i) {
        return i.type === "programChange";
      });
      r && (this.number = r.programNumber);
    }
  }
  return Object.defineProperty(t.prototype, "name", {
    get: function() {
      return this.percussion ? He.DrumKitByPatchID[this.number] : He.instrumentByPatchID[this.number];
    },
    set: function(e) {
      var n = He.instrumentByPatchID.indexOf(e);
      n !== -1 && (this.number = n);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "family", {
    get: function() {
      return this.percussion ? "drums" : He.InstrumentFamilyByID[Math.floor(this.number / 8)];
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "percussion", {
    get: function() {
      var e = Ui.get(this);
      return e.channel === 9;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toJSON = function() {
    return {
      family: this.family,
      number: this.number,
      name: this.name
    };
  }, t.prototype.fromJSON = function(e) {
    this.number = e.number;
  }, t;
}();
hn.Instrument = $f;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.Note = void 0;
function Gf(t) {
  var e = Math.floor(t / 12) - 1;
  return ga(t) + e.toString();
}
function ga(t) {
  var e = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], n = t % 12;
  return e[n];
}
function Mf(t) {
  var e = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return e.indexOf(t);
}
var Df = function() {
  var t = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, e = {
    cbb: -2,
    cb: -1,
    c: 0,
    "c#": 1,
    cx: 2,
    dbb: 0,
    db: 1,
    d: 2,
    "d#": 3,
    dx: 4,
    ebb: 2,
    eb: 3,
    e: 4,
    "e#": 5,
    ex: 6,
    fbb: 3,
    fb: 4,
    f: 5,
    "f#": 6,
    fx: 7,
    gbb: 5,
    gb: 6,
    g: 7,
    "g#": 8,
    gx: 9,
    abb: 7,
    ab: 8,
    a: 9,
    "a#": 10,
    ax: 11,
    bbb: 9,
    bb: 10,
    b: 11,
    "b#": 12,
    bx: 13
  };
  return function(n) {
    var r = t.exec(n), i = r[1], s = r[2], a = e[i.toLowerCase()];
    return a + (parseInt(s, 10) + 1) * 12;
  };
}(), Wt = /* @__PURE__ */ new WeakMap(), zf = function() {
  function t(e, n, r) {
    Wt.set(this, r), this.midi = e.midi, this.velocity = e.velocity, this.noteOffVelocity = n.velocity, this.ticks = e.ticks, this.durationTicks = n.ticks - e.ticks;
  }
  return Object.defineProperty(t.prototype, "name", {
    get: function() {
      return Gf(this.midi);
    },
    set: function(e) {
      this.midi = Df(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "octave", {
    get: function() {
      return Math.floor(this.midi / 12) - 1;
    },
    set: function(e) {
      var n = e - this.octave;
      this.midi += n * 12;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "pitch", {
    get: function() {
      return ga(this.midi);
    },
    set: function(e) {
      this.midi = 12 * (this.octave + 1) + Mf(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "duration", {
    get: function() {
      var e = Wt.get(this);
      return e.ticksToSeconds(this.ticks + this.durationTicks) - e.ticksToSeconds(this.ticks);
    },
    set: function(e) {
      var n = Wt.get(this), r = n.secondsToTicks(this.time + e);
      this.durationTicks = r - this.ticks;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "time", {
    get: function() {
      var e = Wt.get(this);
      return e.ticksToSeconds(this.ticks);
    },
    set: function(e) {
      var n = Wt.get(this);
      this.ticks = n.secondsToTicks(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "bars", {
    get: function() {
      var e = Wt.get(this);
      return e.ticksToMeasures(this.ticks);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toJSON = function() {
    return {
      duration: this.duration,
      durationTicks: this.durationTicks,
      midi: this.midi,
      name: this.name,
      ticks: this.ticks,
      time: this.time,
      velocity: this.velocity
    };
  }, t;
}();
gn.Note = zf;
Object.defineProperty(be, "__esModule", { value: !0 });
be.Track = void 0;
var Rn = Lt, Kf = Nr, qf = ln, Wf = fn, Li = hn, Jf = gn, $e = /* @__PURE__ */ new WeakMap(), Xf = function() {
  function t(e, n) {
    var r = this;
    if (this.name = "", this.notes = [], this.controlChanges = (0, qf.createControlChanges)(), this.pitchBends = [], $e.set(this, n), e) {
      var i = e.find(function(g) {
        return g.type === "trackName";
      });
      this.name = i ? i.text : "";
    }
    if (this.instrument = new Li.Instrument(e, this), this.channel = 0, e) {
      for (var s = e.filter(function(g) {
        return g.type === "noteOn";
      }), a = e.filter(function(g) {
        return g.type === "noteOff";
      }), o = function() {
        var g = s.shift();
        u.channel = g.channel;
        var m = a.findIndex(function(v) {
          return v.noteNumber === g.noteNumber && v.absoluteTime >= g.absoluteTime;
        });
        if (m !== -1) {
          var b = a.splice(m, 1)[0];
          u.addNote({
            durationTicks: b.absoluteTime - g.absoluteTime,
            midi: g.noteNumber,
            noteOffVelocity: b.velocity / 127,
            ticks: g.absoluteTime,
            velocity: g.velocity / 127
          });
        }
      }, u = this; s.length; )
        o();
      var l = e.filter(function(g) {
        return g.type === "controller";
      });
      l.forEach(function(g) {
        r.addCC({
          number: g.controllerType,
          ticks: g.absoluteTime,
          value: g.value / 127
        });
      });
      var d = e.filter(function(g) {
        return g.type === "pitchBend";
      });
      d.forEach(function(g) {
        r.addPitchBend({
          ticks: g.absoluteTime,
          value: g.value / Math.pow(2, 13)
        });
      });
      var f = e.find(function(g) {
        return g.type === "endOfTrack";
      });
      this.endOfTrackTicks = f !== void 0 ? f.absoluteTime : void 0;
    }
  }
  return t.prototype.addNote = function(e) {
    var n = $e.get(this), r = new Jf.Note({
      midi: 0,
      ticks: 0,
      velocity: 1
    }, {
      ticks: 0,
      velocity: 0
    }, n);
    return Object.assign(r, e), (0, Rn.insert)(this.notes, r, "ticks"), this;
  }, t.prototype.addCC = function(e) {
    var n = $e.get(this), r = new Kf.ControlChange({
      controllerType: e.number
    }, n);
    return delete e.number, Object.assign(r, e), Array.isArray(this.controlChanges[r.number]) || (this.controlChanges[r.number] = []), (0, Rn.insert)(this.controlChanges[r.number], r, "ticks"), this;
  }, t.prototype.addPitchBend = function(e) {
    var n = $e.get(this), r = new Wf.PitchBend({}, n);
    return Object.assign(r, e), (0, Rn.insert)(this.pitchBends, r, "ticks"), this;
  }, Object.defineProperty(t.prototype, "duration", {
    get: function() {
      if (!this.notes.length)
        return 0;
      for (var e = this.notes[this.notes.length - 1].time + this.notes[this.notes.length - 1].duration, n = 0; n < this.notes.length - 1; n++) {
        var r = this.notes[n].time + this.notes[n].duration;
        e < r && (e = r);
      }
      return e;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "durationTicks", {
    get: function() {
      if (!this.notes.length)
        return 0;
      for (var e = this.notes[this.notes.length - 1].ticks + this.notes[this.notes.length - 1].durationTicks, n = 0; n < this.notes.length - 1; n++) {
        var r = this.notes[n].ticks + this.notes[n].durationTicks;
        e < r && (e = r);
      }
      return e;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.fromJSON = function(e) {
    var n = this;
    this.name = e.name, this.channel = e.channel, this.instrument = new Li.Instrument(void 0, this), this.instrument.fromJSON(e.instrument), e.endOfTrackTicks !== void 0 && (this.endOfTrackTicks = e.endOfTrackTicks);
    for (var r in e.controlChanges)
      e.controlChanges[r] && e.controlChanges[r].forEach(function(i) {
        n.addCC({
          number: i.number,
          ticks: i.ticks,
          value: i.value
        });
      });
    e.notes.forEach(function(i) {
      n.addNote({
        durationTicks: i.durationTicks,
        midi: i.midi,
        ticks: i.ticks,
        velocity: i.velocity
      });
    });
  }, t.prototype.toJSON = function() {
    for (var e = {}, n = 0; n < 127; n++)
      this.controlChanges.hasOwnProperty(n) && (e[n] = this.controlChanges[n].map(function(i) {
        return i.toJSON();
      }));
    var r = {
      channel: this.channel,
      controlChanges: e,
      pitchBends: this.pitchBends.map(function(i) {
        return i.toJSON();
      }),
      instrument: this.instrument.toJSON(),
      name: this.name,
      notes: this.notes.map(function(i) {
        return i.toJSON();
      })
    };
    return this.endOfTrackTicks !== void 0 && (r.endOfTrackTicks = this.endOfTrackTicks), r;
  }, t;
}();
be.Track = Xf;
var dn = {};
function jf(t) {
  var e = [];
  return da(t, e), e;
}
function da(t, e) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    Array.isArray(r) ? da(r, e) : e.push(r);
  }
}
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  flatten: jf
}, Symbol.toStringTag, { value: "Module" })), Yf = /* @__PURE__ */ bu(Qf);
var vt = lt && lt.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.encode = void 0;
var Zf = un, th = en, eh = Yf;
function nh(t, e) {
  return [
    {
      absoluteTime: t.ticks,
      channel: e,
      deltaTime: 0,
      noteNumber: t.midi,
      type: "noteOn",
      velocity: Math.floor(t.velocity * 127)
    },
    {
      absoluteTime: t.ticks + t.durationTicks,
      channel: e,
      deltaTime: 0,
      noteNumber: t.midi,
      type: "noteOff",
      velocity: Math.floor(t.noteOffVelocity * 127)
    }
  ];
}
function rh(t) {
  return (0, eh.flatten)(t.notes.map(function(e) {
    return nh(e, t.channel);
  }));
}
function ih(t, e) {
  return {
    absoluteTime: t.ticks,
    channel: e,
    controllerType: t.number,
    deltaTime: 0,
    type: "controller",
    value: Math.floor(t.value * 127)
  };
}
function sh(t) {
  for (var e = [], n = 0; n < 127; n++)
    t.controlChanges.hasOwnProperty(n) && t.controlChanges[n].forEach(function(r) {
      e.push(ih(r, t.channel));
    });
  return e;
}
function ah(t, e) {
  return {
    absoluteTime: t.ticks,
    channel: e,
    deltaTime: 0,
    type: "pitchBend",
    value: t.value
  };
}
function oh(t) {
  var e = [];
  return t.pitchBends.forEach(function(n) {
    e.push(ah(n, t.channel));
  }), e;
}
function ch(t) {
  return {
    absoluteTime: 0,
    channel: t.channel,
    deltaTime: 0,
    programNumber: t.instrument.number,
    type: "programChange"
  };
}
function uh(t) {
  return {
    absoluteTime: 0,
    deltaTime: 0,
    meta: !0,
    text: t,
    type: "trackName"
  };
}
function lh(t) {
  return {
    absoluteTime: t.ticks,
    deltaTime: 0,
    meta: !0,
    microsecondsPerBeat: Math.floor(6e7 / t.bpm),
    type: "setTempo"
  };
}
function fh(t) {
  return {
    absoluteTime: t.ticks,
    deltaTime: 0,
    denominator: t.timeSignature[1],
    meta: !0,
    metronome: 24,
    numerator: t.timeSignature[0],
    thirtyseconds: 8,
    type: "timeSignature"
  };
}
function hh(t) {
  var e = th.keySignatureKeys.indexOf(t.key);
  return {
    absoluteTime: t.ticks,
    deltaTime: 0,
    key: e + 7,
    meta: !0,
    scale: t.scale === "major" ? 0 : 1,
    type: "keySignature"
  };
}
function gh(t) {
  return {
    absoluteTime: t.ticks,
    deltaTime: 0,
    meta: !0,
    text: t.text,
    type: t.type
  };
}
function dh(t) {
  var e = {
    header: {
      format: 1,
      numTracks: t.tracks.length + 1,
      ticksPerBeat: t.header.ppq
    },
    tracks: vt([
      vt(vt(vt(vt([
        {
          absoluteTime: 0,
          deltaTime: 0,
          meta: !0,
          text: t.header.name,
          type: "trackName"
        }
      ], t.header.keySignatures.map(function(n) {
        return hh(n);
      }), !0), t.header.meta.map(function(n) {
        return gh(n);
      }), !0), t.header.tempos.map(function(n) {
        return lh(n);
      }), !0), t.header.timeSignatures.map(function(n) {
        return fh(n);
      }), !0)
    ], t.tracks.map(function(n) {
      return vt(vt(vt([
        uh(n.name),
        ch(n)
      ], rh(n), !0), sh(n), !0), oh(n), !0);
    }), !0)
  };
  return e.tracks = e.tracks.map(function(n) {
    n = n.sort(function(i, s) {
      return i.absoluteTime - s.absoluteTime;
    });
    var r = 0;
    return n.forEach(function(i) {
      i.deltaTime = i.absoluteTime - r, r = i.absoluteTime, delete i.absoluteTime;
    }), n.push({
      deltaTime: 0,
      meta: !0,
      type: "endOfTrack"
    }), n;
  }), new Uint8Array((0, Zf.writeMidi)(e));
}
dn.encode = dh;
(function(t) {
  var e = lt && lt.__awaiter || function(f, g, m, b) {
    function v(k) {
      return k instanceof m ? k : new m(function(C) {
        C(k);
      });
    }
    return new (m || (m = Promise))(function(k, C) {
      function U(A) {
        try {
          S(b.next(A));
        } catch (ot) {
          C(ot);
        }
      }
      function I(A) {
        try {
          S(b.throw(A));
        } catch (ot) {
          C(ot);
        }
      }
      function S(A) {
        A.done ? k(A.value) : v(A.value).then(U, I);
      }
      S((b = b.apply(f, g || [])).next());
    });
  }, n = lt && lt.__generator || function(f, g) {
    var m = { label: 0, sent: function() {
      if (k[0] & 1)
        throw k[1];
      return k[1];
    }, trys: [], ops: [] }, b, v, k, C;
    return C = { next: U(0), throw: U(1), return: U(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
      return this;
    }), C;
    function U(S) {
      return function(A) {
        return I([S, A]);
      };
    }
    function I(S) {
      if (b)
        throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (b = 1, v && (k = S[0] & 2 ? v.return : S[0] ? v.throw || ((k = v.return) && k.call(v), 0) : v.next) && !(k = k.call(v, S[1])).done)
            return k;
          switch (v = 0, k && (S = [S[0] & 2, k.value]), S[0]) {
            case 0:
            case 1:
              k = S;
              break;
            case 4:
              return m.label++, { value: S[1], done: !1 };
            case 5:
              m.label++, v = S[1], S = [0];
              continue;
            case 7:
              S = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (k = m.trys, !(k = k.length > 0 && k[k.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                m = 0;
                continue;
              }
              if (S[0] === 3 && (!k || S[1] > k[0] && S[1] < k[3])) {
                m.label = S[1];
                break;
              }
              if (S[0] === 6 && m.label < k[1]) {
                m.label = k[1], k = S;
                break;
              }
              if (k && m.label < k[2]) {
                m.label = k[2], m.ops.push(S);
                break;
              }
              k[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          S = g.call(f, m);
        } catch (A) {
          S = [6, A], v = 0;
        } finally {
          b = k = 0;
        }
      if (S[0] & 5)
        throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Header = t.Track = t.Midi = void 0;
  var r = un, i = en, s = be, a = dn, o = function() {
    function f(g) {
      var m = this, b = null;
      if (g) {
        var v = g instanceof ArrayBuffer ? new Uint8Array(g) : g;
        b = (0, r.parseMidi)(v), b.tracks.forEach(function(k) {
          var C = 0;
          k.forEach(function(U) {
            C += U.deltaTime, U.absoluteTime = C;
          });
        }), b.tracks = d(b.tracks);
      }
      this.header = new i.Header(b), this.tracks = [], g && (this.tracks = b.tracks.map(function(k) {
        return new s.Track(k, m.header);
      }), b.header.format === 1 && this.tracks[0].duration === 0 && this.tracks.shift());
    }
    return f.fromUrl = function(g) {
      return e(this, void 0, void 0, function() {
        var m, b;
        return n(this, function(v) {
          switch (v.label) {
            case 0:
              return [4, fetch(g)];
            case 1:
              return m = v.sent(), m.ok ? [4, m.arrayBuffer()] : [3, 3];
            case 2:
              return b = v.sent(), [2, new f(b)];
            case 3:
              throw new Error("Could not load '".concat(g, "'"));
          }
        });
      });
    }, Object.defineProperty(f.prototype, "name", {
      get: function() {
        return this.header.name;
      },
      set: function(g) {
        this.header.name = g;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "duration", {
      get: function() {
        var g = this.tracks.map(function(m) {
          return m.duration;
        });
        return Math.max.apply(Math, g);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "durationTicks", {
      get: function() {
        var g = this.tracks.map(function(m) {
          return m.durationTicks;
        });
        return Math.max.apply(Math, g);
      },
      enumerable: !1,
      configurable: !0
    }), f.prototype.addTrack = function() {
      var g = new s.Track(void 0, this.header);
      return this.tracks.push(g), g;
    }, f.prototype.toArray = function() {
      return (0, a.encode)(this);
    }, f.prototype.toJSON = function() {
      return {
        header: this.header.toJSON(),
        tracks: this.tracks.map(function(g) {
          return g.toJSON();
        })
      };
    }, f.prototype.fromJSON = function(g) {
      var m = this;
      this.header = new i.Header(), this.header.fromJSON(g.header), this.tracks = g.tracks.map(function(b) {
        var v = new s.Track(void 0, m.header);
        return v.fromJSON(b), v;
      });
    }, f.prototype.clone = function() {
      var g = new f();
      return g.fromJSON(this.toJSON()), g;
    }, f;
  }();
  t.Midi = o;
  var u = be;
  Object.defineProperty(t, "Track", { enumerable: !0, get: function() {
    return u.Track;
  } });
  var l = en;
  Object.defineProperty(t, "Header", { enumerable: !0, get: function() {
    return l.Header;
  } });
  function d(f) {
    for (var g = [], m = 0; m < f.length; m++)
      for (var b = g.length, v = /* @__PURE__ */ new Map(), k = Array(16).fill(0), C = 0, U = f[m]; C < U.length; C++) {
        var I = U[C], S = b, A = I.channel;
        if (A !== void 0) {
          I.type === "programChange" && (k[A] = I.programNumber);
          var ot = k[A], Mt = "".concat(ot, " ").concat(A);
          v.has(Mt) ? S = v.get(Mt) : (S = b + v.size, v.set(Mt, S));
        }
        g[S] || g.push([]), g[S].push(I);
      }
    return g;
  }
})(fa);
var ph = /* @__PURE__ */ ((t) => (t[t.UNKNOWN = 0] = "UNKNOWN", t[t.INTRO = 1] = "INTRO", t[t.VERSE = 2] = "VERSE", t[t.CHORUS = 3] = "CHORUS", t[t.BRIDGE = 4] = "BRIDGE", t[t.OUTRO = 5] = "OUTRO", t))(ph || {});
class mh {
  tick;
  type;
  constructor({ tick: e, type: n }) {
    this.tick = e, this.type = n;
  }
  getTick() {
    return this.tick;
  }
  setTick(e) {
    this.tick = e;
  }
  getType() {
    return this.type;
  }
  setType(e) {
    this.type = e;
  }
}
class Z {
  static DEFAULT_PPQ = 480;
  static NUM_BUSES = 32;
  masterTrack;
  tracks;
  PPQ;
  tempos;
  timeSignatures;
  structures;
  pluginContext;
  nextTrackRank = 1;
  buses = [];
  constructor() {
    this.tracks = [], this.PPQ = 0, this.tempos = [], this.timeSignatures = [], this.structures = [];
  }
  getBusByRank(e) {
    return this.buses[e - 1];
  }
  setBus(e, n) {
    if (e > Z.NUM_BUSES)
      throw new Error(`Only ${Z.NUM_BUSES} buses are supported.`);
    const r = e - 1;
    this.buses[r] ? this.buses[r].setName(n) : this.buses[r] = new vh({ rank: e, name: n });
  }
  getMasterTrack() {
    return this.masterTrack || (this.masterTrack = new nt({
      type: Jt.MASTER_TRACK,
      song: this,
      uuid: nt.generateTrackIdInternal()
    })), this.masterTrack;
  }
  getTracks() {
    return this.tracks;
  }
  getTrackById(e) {
    return qe(this.tracks, (n) => n.getId() === e);
  }
  getTracksByIds(e) {
    if (!this.tracks)
      return [];
    const n = new Set(e);
    return this.tracks.filter((r) => n.has(r.getId()));
  }
  getTrackIndex(e) {
    return ee(this.tracks, (n) => n.getId() === e);
  }
  createTrack({
    type: e,
    index: n,
    rank: r,
    assignDefaultSamplerPlugin: i = !1
  }) {
    r == null || r === null ? r = this.getNextTrackRank() : this.nextTrackRank = Math.max(r + 1, this.nextTrackRank);
    const s = new nt({
      type: e,
      song: this,
      uuid: this.getNextTrackId(),
      rank: r == null || r === null ? this.getNextTrackRank() : r
    });
    return i && e === Jt.MIDI_TRACK && s.setSamplerPlugin(s.createAudioPlugin(cn.DEFAULT_SYNTH_TFID)), e === Jt.AUX_TRACK && s.getAuxTrackData().setInputBusRank(1), n != null ? this.tracks.splice(n, 0, s) : this.tracks.push(s), s;
  }
  cloneTrack(e) {
    let n = this.getTrackIndex(e.getId());
    n < 0 && (n = void 0);
    const r = this.createTrack({
      type: e.getType(),
      index: n
    });
    if (r.setVolume(e.getVolume()), r.setPan(e.getPan()), r.setSolo(e.getSolo()), r.setMuted(e.getMuted()), e.getType() === Jt.MIDI_TRACK) {
      const s = e.getInstrument();
      s && r.setInstrument({
        program: s.getProgram(),
        isDrum: s.getIsDrum()
      });
      for (const o of e.getSuggestedInstruments())
        r.createSuggestedInstrument({
          program: o.getProgram(),
          isDrum: o.getIsDrum()
        });
      const a = e.getSamplerPlugin();
      a && r.setSamplerPlugin(a.clone(r));
    }
    for (let s = 0; s < nt.MAX_NUM_EFFECTS_PLUGINS; s += 1) {
      const a = e.getAudioPluginAt(s);
      !a || r.setAudioPluginAt(s, a.clone(r));
    }
    for (const s of e.getClips()) {
      const a = r.cloneClip(s);
      r.insertClip(a);
    }
    const i = e.getAuxTrackData();
    i && Zn(i.getInputBusRank()) && i.getInputBusRank() > 0 && r.getAuxTrackData().setInputBusRank(
      i.getInputBusRank()
    );
    for (let s = 0; s < nt.MAX_NUM_SENDS; s += 1) {
      const a = e.getSendAt(s);
      !a || r.setSendAt(
        s,
        new tn({
          outputBusRank: a.getOutputBusRank(),
          gainLevel: a.getGainLevel(),
          position: a.getPosition(),
          muted: a.getMuted()
        })
      );
    }
    if (e.hasAnyAutomation() && r.setAutomation(e.getAutomation()), e.getOutput()) {
      const s = e.getOutput();
      r.setOutput({
        type: s.getType(),
        trackId: s.getTrackId()
      });
    }
    return r;
  }
  removeTrack(e) {
    const n = this.getTrackById(e);
    if (!n)
      return null;
    this.tracks.splice(
      ee(this.tracks, (r) => r.getId() === e),
      1
    );
    for (const r of this.tracks) {
      const i = r.getOutput();
      i && i.getType() === Pr.Track && i.getTrackId() === e && r.removeOutput();
    }
    return n;
  }
  getResolution() {
    return this.PPQ;
  }
  setResolution(e) {
    this.PPQ = e;
  }
  static getLeadingBar(e, n) {
    if (!n || n.length === 0)
      return null;
    if (e < 0)
      return n[0];
    let r = T.le(n, { tick: e }, (i, s) => i.tick - s.tick);
    for (; r > 0 && n[r].beat !== 1; )
      r -= 1;
    return n[r];
  }
  static getLeadingBeat(e, n) {
    if (!n || n.length === 0)
      return null;
    if (e < 0)
      return n[0];
    const r = T.le(n, { tick: e }, (i, s) => i.tick - s.tick);
    return n[r];
  }
  static getTrailingBeat(e, n) {
    if (!n || n.length === 0)
      return null;
    if (e < 0)
      return n[0];
    const r = T.ge(n, { tick: e }, (i, s) => i.tick - s.tick);
    return r > n.length - 1 ? n[n.length - 1] : n[r];
  }
  static getClosestBeat(e, n) {
    if (!n || n.length === 0)
      return null;
    if (e < 0)
      return n[0];
    const r = T.le(n, { tick: e }, (i, s) => i.tick - s.tick);
    return r >= n.length - 1 ? n[r] : Math.abs(n[r].tick - e) > Math.abs(n[r + 1].tick - e) ? n[r + 1] : n[r];
  }
  getBarBeats(e) {
    return Z.getBarBeatsImpl(
      e,
      this.PPQ,
      this.timeSignatures,
      (n) => ({
        tick: n.getTicks(),
        numerator: n.getNumerator(),
        denominator: n.getDenominator()
      })
    );
  }
  static getBarBeatsImpl(e, n, r, i) {
    if (r.length === 0)
      return [];
    const s = [];
    for (let f = 0; f < r.length; f += 1)
      if (s.length === 0)
        s.push(r[f]);
      else {
        const g = i(r[f]), m = i(
          s[s.length - 1]
        );
        (g.numerator !== m.numerator || g.denominator !== m.denominator) && s.push(r[f]);
      }
    const a = [];
    let o = 0, u = 0, l = 1, d = 1;
    for (; o <= e; ) {
      if (u < s.length - 1) {
        const m = i(
          s[u + 1]
        ).tick;
        o >= m && (o = m, u += 1, d > 1 && (d = 1, l += 1));
      }
      const f = i(
        s[u]
      );
      a.push({
        bar: l,
        beat: d,
        tick: o,
        numerator: d === 1 ? f.numerator : void 0,
        denominator: d === 1 ? f.denominator : void 0,
        ticksPerBeat: d === 1 ? n * 4 / f.denominator : void 0
      }), d >= f.numerator ? (d = 1, l += 1) : d += 1, o += n * 4 / f.denominator;
    }
    return a;
  }
  getTempoChanges() {
    return this.tempos;
  }
  getTempoAtTick(e) {
    return Z.getTempoAtTickImpl(
      e,
      this.tempos,
      (n) => ({
        getTicks: () => n
      }),
      (n) => n.getTicks()
    );
  }
  static getTempoAtTickImpl(e, n, r, i) {
    let s = T.le(
      n,
      r(e),
      (a, o) => i(a) - i(o)
    );
    return s < 0 && (s = 0), s >= n.length && (s = n.length - 1), n[s];
  }
  createTempoChange({
    ticks: e,
    bpm: n
  }) {
    if (this.PPQ <= 0)
      throw new Error("Song resolution must be provided before creating tempo changes.");
    if (this.tempos.length === 0 && e !== 0)
      throw new Error("The first tempo event must be at tick 0");
    const r = new Ne({ ticks: e, bpm: n, time: this.tickToSeconds(e) }), i = T.ge(
      this.tempos,
      r,
      (s, a) => s.getTicks() - a.getTicks()
    );
    return i < 0 ? this.tempos.push(r) : this.tempos.splice(i, 0, r), this.retimingTempoEvents(), r;
  }
  removeTempoChange(e) {
    if (this.getTempoChanges().length <= 1)
      throw new Error("Song has to have at least one tempo change.");
    if (e === 0)
      throw new Error("Cannot remove the first tempo.");
    this.getTempoChanges().splice(e, 1), this.retimingTempoEvents();
  }
  overwriteTempoChanges(e) {
    if (e.length === 0)
      throw new Error("Cannot clear all the tempo events.");
    const n = ki(e);
    n.sort((i, s) => i.getTicks() - s.getTicks());
    const r = n[0];
    if (r.getTicks() > 0)
      throw new Error("The first tempo event needs to start from tick 0");
    this.tempos = [
      new Ne({
        ticks: 0,
        time: 0,
        bpm: r.getBpm()
      })
    ];
    for (let i = 1; i < n.length; i += 1) {
      const s = n[i];
      this.createTempoChange({
        ticks: s.getTicks(),
        bpm: s.getBpm()
      });
    }
    this.retimingTempoEvents();
  }
  updateTempo(e, n) {
    e.setBpmInternal(n), this.retimingTempoEvents();
  }
  moveTempo(e, n) {
    const r = this.getTempoChanges()[e];
    if (!r || e === 0)
      return;
    if (this.getTempoChanges()[e - 1].getTicks() === n)
      this.removeTempoChange(e - 1);
    else if (e < this.getTempoChanges().length - 1) {
      const s = this.getTempoChanges()[e + 1];
      s && s.getTicks() === n && this.removeTempoChange(e + 1);
    }
    r.ticks = n, this.retimingTempoEvents();
  }
  updateTempoAtTick(e, n) {
    const r = this.getTempoAtTick(e);
    r ? this.updateTempo(r, n) : this.createTempoChange({
      ticks: e,
      bpm: n
    });
  }
  getTimeSignatures() {
    return this.timeSignatures;
  }
  overwriteTimeSignatures(e) {
    if (e.length === 0)
      throw new Error("At least one time signature needs to be present.");
    this.timeSignatures = ki(e);
  }
  createTimeSignature({
    ticks: e,
    numerator: n,
    denominator: r
  }) {
    const i = new Si({ ticks: e, numerator: n, denominator: r }), s = T.ge(
      this.timeSignatures,
      i,
      (a, o) => a.getTicks() - o.getTicks()
    );
    return s < 0 ? this.timeSignatures.push(i) : this.timeSignatures.splice(s, 0, i), i;
  }
  removeTimeSignature(e) {
    if (this.getTimeSignatures().length <= 1)
      throw new Error("Song has to have at least one time signature change.");
    if (e === 0)
      throw new Error("Cannot remove the first time signature.");
    this.getTimeSignatures().splice(e, 1);
  }
  updateTimeSignatureAtTick(e, n, r) {
    const i = this.getTimeSignatureAtTick(e);
    i ? (i.setNumerator(n), i.setDenominator(r)) : this.createTimeSignature({
      ticks: e,
      numerator: n,
      denominator: r
    });
  }
  moveTimeSignature(e, n) {
    const r = this.getTimeSignatures()[e];
    if (!r || e == 0)
      return;
    if (this.getTimeSignatures()[e - 1].getTicks() === n)
      this.removeTimeSignature(e - 1);
    else if (e < this.getTimeSignatures().length - 1) {
      const s = this.getTimeSignatures()[e + 1];
      s && s.getTicks() === n && this.removeTimeSignature(e + 1);
    }
    r.ticks = n, this.timeSignatures.sort((s, a) => s.getTicks() - a.getTicks());
  }
  getStructures() {
    return this.structures;
  }
  getStructureAtIndex(e) {
    return this.structures[e];
  }
  getStructureAtTick(e) {
    return Z.getStructureAtTickImpl(
      e,
      this.structures,
      (n) => ({ getTick: () => n }),
      (n) => n.getTick()
    );
  }
  static getStructureAtTickImpl(e, n, r, i) {
    let s = T.le(
      n,
      r(e),
      (a, o) => i(a) - i(o)
    );
    return s < 0 && (s = 0), s >= n.length && (s = n.length - 1), n[s];
  }
  createStructure({ tick: e, type: n }) {
    const r = new mh({
      tick: e,
      type: n
    });
    this.structures.push(r), this.structures.length === 1 && r.setTick(0), this.structures.sort((i, s) => i.getTick() - s.getTick());
  }
  moveStructure(e, n) {
    const r = this.getStructures()[e];
    if (!r || e <= 0)
      return;
    if (this.getStructures()[e - 1].getTick() === n)
      this.removeStructure(e - 1);
    else if (e < this.getStructures().length - 1) {
      const s = this.getStructures()[e + 1];
      s && s.getTick() === n && this.removeStructure(e + 1);
    }
    r.tick = n, this.structures.sort((s, a) => s.getTick() - a.getTick());
  }
  updateStructureAtTick(e, n) {
    const r = this.getStructureAtTick(e);
    r ? r.setType(n) : this.createStructure({
      tick: e,
      type: n
    });
  }
  removeStructure(e) {
    e < 0 || e >= this.structures.length || (this.getStructures().splice(e, 1), this.structures.length > 0 && this.structures[0].getTick() > 0 && this.structures[0].setTick(0), this.structures.sort((n, r) => n.getTick() - r.getTick()));
  }
  getLastTick() {
    let e = 0;
    for (const n of this.tracks)
      e = Math.max(e, n.getTrackEndTick());
    return e;
  }
  getDuration() {
    return this.tickToSeconds(this.getLastTick());
  }
  getTicksPerBeatAtTick(e) {
    const n = this.getTimeSignatureAtTick(e);
    return this.getResolution() * (4 / n.getDenominator());
  }
  getTimeSignatureAtTick(e) {
    return Z.getTimeSignatureAtTickImpl(
      e,
      this.timeSignatures,
      (n) => ({
        getTicks: () => n
      }),
      (n) => n.getTicks()
    );
  }
  static getTimeSignatureAtTickImpl(e, n, r, i) {
    let s = T.le(
      n,
      r(e),
      (a, o) => i(a) - i(o)
    );
    return s < 0 && (s = 0), s >= n.length && (s = n.length - 1), n[s];
  }
  tickToSeconds(e) {
    return Z.tickToSecondsImpl(
      e,
      this.getTempoChanges(),
      this.getResolution(),
      (n) => ({
        getTicks: () => n
      }),
      (n) => n.getTicks(),
      (n) => ({
        tick: n.getTicks(),
        bpm: n.getBpm(),
        time: n.getTime()
      })
    );
  }
  static tickToSecondsImpl(e, n, r, i, s, a) {
    if (e === 0)
      return 0;
    let o = T.lt(
      n,
      i(e),
      (g, m) => s(g) - s(m)
    );
    o == -1 && (o = 0);
    const u = n[o], l = a(u), d = e - l.tick, f = Z.tempoBPMToTicksPerSecond(
      l.bpm,
      r
    );
    return l.time + d / f;
  }
  secondsToTick(e) {
    return Z.secondsToTickImpl(
      e,
      this.PPQ,
      this.tempos,
      (n) => ({ getTime: () => n }),
      (n) => n.getTime(),
      (n) => ({
        tick: n.getTicks(),
        bpm: n.getBpm(),
        time: n.getTime()
      })
    );
  }
  advanceTickByBars(e, n, r, i) {
    if (e < 0 || n < 0 || r < 0)
      return null;
    let s = T.le(
      i,
      { tick: e },
      (u, l) => u.tick - l.tick
    );
    const a = i[s < 0 ? 0 : s];
    if (!a)
      return null;
    for (; s < i.length; s += 1) {
      const u = i[s];
      if (u.bar - a.bar >= n && (u.bar - a.bar > n || u.beat >= r + 1))
        break;
    }
    const o = i[s];
    return o ? o.tick : null;
  }
  static secondsToTickImpl(e, n, r, i, s, a) {
    if (e === 0)
      return 0;
    let o = T.lt(
      r,
      i(e),
      (g, m) => s(g) - s(m)
    );
    o == -1 && (o = 0);
    const u = r[o], l = a(u), d = e - l.time, f = Z.tempoBPMToTicksPerSecond(
      l.bpm,
      n
    );
    return Math.round(l.tick + d * f);
  }
  static importMIDI(e, n, r = 0, i = !1) {
    const s = new fa.Midi(n), a = r, o = Z.DEFAULT_PPQ / s.header.ppq;
    if (i) {
      const l = [];
      for (const f of s.header.timeSignatures)
        l.push(
          new Si({
            ticks: a + Nt(f.ticks, o),
            numerator: f.timeSignature[0],
            denominator: f.timeSignature[1]
          })
        );
      e.overwriteTimeSignatures(l);
      const d = [];
      a > 0 && d.push(
        new Ne({
          ticks: 0,
          time: 0,
          bpm: 120
        })
      );
      for (const f of s.header.tempos)
        d.push(
          new Ne({
            ticks: a + Nt(f.ticks, o),
            time: f.time,
            bpm: f.bpm
          })
        );
      e.overwriteTempoChanges(d);
    }
    const u = [];
    for (const l of s.tracks) {
      const d = e.createTrack({
        type: Jt.MIDI_TRACK,
        assignDefaultSamplerPlugin: !0
      });
      u.push(d), d.setInstrument({
        program: l.instrument.number,
        isDrum: l.instrument.percussion
      });
      const f = d.createMIDIClip({ clipStartTick: a });
      let g = Number.MAX_SAFE_INTEGER;
      for (const v of l.notes)
        f.createNote({
          pitch: v.midi,
          velocity: Math.round(v.velocity * 127),
          startTick: a + Nt(v.ticks, o),
          endTick: a + Nt(v.ticks + v.durationTicks, o)
        }), g = Math.min(
          g,
          a + Nt(v.ticks, o)
        );
      const m = l.controlChanges[7];
      if (m)
        if (m.length === 1)
          d.setVolume(m[0].value);
        else {
          const v = new tt(jn.VOLUME);
          d.getAutomation().addAutomation(v);
          const k = d.getAutomation().getAutomationValueByTarget(v);
          for (const C of m)
            k.addPoint(
              a + Nt(C.ticks, o),
              C.value
            );
        }
      const b = l.controlChanges[10];
      if (b)
        if (b.length === 1) {
          const v = Math.round(b[0].value * 127 - 64);
          d.setPan(v);
        } else {
          const v = new tt(jn.PAN);
          d.getAutomation().addAutomation(v);
          const k = d.getAutomation().getAutomationValueByTarget(v);
          for (const C of b)
            k.addPoint(a + Nt(C.ticks, o), C.value);
        }
      g !== Number.MAX_SAFE_INTEGER && f.adjustClipLeft(g);
    }
    return u;
  }
  setPluginContextInternal(e) {
    this.pluginContext = {
      plugin: e,
      numTracksCreatedByPlugin: 0
    };
  }
  clearPluginContextInternal() {
    this.pluginContext = void 0;
  }
  getNextTrackId() {
    const e = this.pluginContext, n = e.plugin.generatedTrackIdsInternal;
    if (e.numTracksCreatedByPlugin === n.length)
      n.push(nt.generateTrackIdInternal());
    else if (e.numTracksCreatedByPlugin > n.length)
      throw new Error("Plugin generated track ids out of sync.");
    const r = n[e.numTracksCreatedByPlugin];
    return e.numTracksCreatedByPlugin += 1, r;
  }
  getNextTrackRank() {
    const e = this.nextTrackRank;
    return this.nextTrackRank += 1, e;
  }
  static tempoBPMToTicksPerSecond(e, n) {
    return e * n / 60;
  }
  retimingTempoEvents() {
    this.tempos.sort((e, n) => e.getTicks() - n.getTicks());
    for (const e of this.tempos)
      e.setTimeInternal(this.tickToSeconds(e.getTicks()));
  }
}
function Nt(t, e) {
  return Math.round(t * e);
}
class vh {
  rank;
  name;
  constructor({
    rank: e,
    name: n
  }) {
    this.rank = e, this.name = n;
  }
  getRank() {
    return this.rank;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
}
var F = /* @__PURE__ */ ((t) => (t[t.Slider = 1] = "Slider", t[t.Input = 2] = "Input", t[t.TrackSelector = 3] = "TrackSelector", t[t.Pitch = 4] = "Pitch", t[t.TrackPitchSelector = 5] = "TrackPitchSelector", t[t.InstrumentSelector = 6] = "InstrumentSelector", t[t.Select = 7] = "Select", t[t.Switch = 8] = "Switch", t[t.InputNumber = 9] = "InputNumber", t[t.MultiTrackSelector = 10] = "MultiTrackSelector", t[t.None = 11] = "None", t[t.FileSelector = 12] = "FileSelector", t[t.MultiSourceAudioSelector = 13] = "MultiSourceAudioSelector", t[t.AudioRecorder = 14] = "AudioRecorder", t[t.SelectList = 15] = "SelectList", t[t.Descriptions = 16] = "Descriptions", t[t.TextArea = 17] = "TextArea", t))(F || {});
async function Oh(t) {
  return t.arrayBuffer();
}
var bh = /* @__PURE__ */ ((t) => (t[t.SelectedTrackIds = 1] = "SelectedTrackIds", t[t.SelectedClipInfos = 2] = "SelectedClipInfos", t[t.TickAtPlayhead = 3] = "TickAtPlayhead", t[t.EditingClipInfo = 4] = "EditingClipInfo", t[t.EditingNoteIds = 5] = "EditingNoteIds", t[t.TickAtPlayheadSnappedToBeat = 6] = "TickAtPlayheadSnappedToBeat", t))(bh || {});
export {
  cn as AudioPlugin,
  Tr as AutomationData,
  tt as AutomationTarget,
  jn as AutomationTargetType,
  te as AutomationValue,
  _f as AuxTrackData,
  et as Clip,
  le as ClipType,
  Tf as DrumInstrumentType,
  Cf as DrumPitch,
  bh as InjectSource,
  xf as MelodicInstrumentType,
  St as Note,
  Z as Song,
  mh as StructureMarker,
  ph as StructureType,
  Ne as TempoEvent,
  Ih as TickToSecondStepper,
  Si as TimeSignatureEvent,
  nt as Track,
  Ef as TrackOutput,
  Pr as TrackOutputType,
  tn as TrackSend,
  If as TrackSendPosition,
  Jt as TrackType,
  Bs as TuneflowPipeline,
  $n as TuneflowPlugin,
  F as WidgetType,
  wf as areTuneflowIdsEqual,
  kf as areTuneflowIdsEqualIgnoreVersion,
  Sf as dbToVolumeValue,
  Ze as decodeAudioPluginTuneflowId,
  _h as gainToDb,
  Th as gainToVolumeValue,
  Vi as getAudioPluginTuneflowId,
  bf as getAudioPluginVersionlessTuneflowId,
  Oh as getFileContentFromFileSelector,
  Ah as maybeToRaw,
  kh as midiNumberToPitch,
  Nh as pitchToHz,
  Sh as pitchToMidiNumber,
  Ph as remapRange,
  Ch as toVersionlessTfId,
  Eh as volumeValueToDb,
  xh as volumeValueToGain
};
