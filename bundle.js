/* @preserve
 * Leaflet 1.2.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function(t, i) { "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {}) }(this, function(t) { "use strict";

	function i(t) { var i, e, n, o; for (e = 1, n = arguments.length; e < n; e++) { o = arguments[e]; for (i in o) t[i] = o[i] } return t }

	function e(t, i) { var e = Array.prototype.slice; if (t.bind) return t.bind.apply(t, e.call(arguments, 1)); var n = e.call(arguments, 2); return function() { return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments) } }

	function n(t) { return t._leaflet_id = t._leaflet_id || ++ti, t._leaflet_id }

	function o(t, i, e) { var n, o, s, r; return r = function() { n = !1, o && (s.apply(e, o), o = !1) }, s = function() { n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0) } }

	function s(t, i, e) { var n = i[1],
			o = i[0],
			s = n - o; return t === n && e ? t : ((t - o) % s + s) % s + o }

	function r() { return !1 }

	function a(t, i) { var e = Math.pow(10, i || 5); return Math.round(t * e) / e }

	function h(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

	function u(t) { return h(t).split(/\s+/) }

	function l(t, i) { t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {}); for (var e in i) t.options[e] = i[e]; return t.options }

	function c(t, i, e) { var n = []; for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o])); return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&") }

	function _(t, i) { return t.replace(ii, function(t, e) { var n = i[e]; if (void 0 === n) throw new Error("No value provided for variable " + t); return "function" == typeof n && (n = n(i)), n }) }

	function d(t, i) { for (var e = 0; e < t.length; e++)
			if (t[e] === i) return e; return -1 }

	function p(t) { return window["webkit" + t] || window["moz" + t] || window["ms" + t] }

	function m(t) { var i = +new Date,
			e = Math.max(0, 16 - (i - oi)); return oi = i + e, window.setTimeout(t, e) }

	function f(t, i, n) { if (!n || si !== m) return si.call(window, e(t, i));
		t.call(i) }

	function g(t) { t && ri.call(window, t) }

	function v() {}

	function y(t) { if (L && L.Mixin) { t = ei(t) ? t : [t]; for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack) } }

	function x(t, i, e) { this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i }

	function w(t, i, e) { return t instanceof x ? t : ei(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e) }

	function P(t, i) { if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]) }

	function b(t, i) { return !t || t instanceof P ? t : new P(t, i) }

	function T(t, i) { if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]) }

	function z(t, i) { return t instanceof T ? t : new T(t, i) }

	function M(t, i, e) { if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e) }

	function C(t, i, e) { return t instanceof M ? t : ei(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e) }

	function Z(t, i, e, n) { if (ei(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
		this._a = t, this._b = i, this._c = e, this._d = n }

	function E(t, i, e, n) { return new Z(t, i, e, n) }

	function S(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) }

	function k(t, i) { var e, n, o, s, r, a, h = ""; for (e = 0, o = t.length; e < o; e++) { for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
			h += i ? qi ? "z" : "x" : "" } return h || "M0 0" }

	function B(t) { return navigator.userAgent.toLowerCase().indexOf(t) >= 0 }

	function I(t, i, e, n) { return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this }

	function A(t, i, e) { var n = t["_leaflet_" + i + e]; return "touchstart" === i ? t.removeEventListener(Xi, n, !1) : "touchmove" === i ? t.removeEventListener(Ji, n, !1) : "touchend" === i && (t.removeEventListener($i, n, !1), t.removeEventListener(Qi, n, !1)), this }

	function O(t, i, n) { var o = e(function(t) { if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) { if (!(te.indexOf(t.target.tagName) < 0)) return;
				$(t) } j(t, i) });
		t["_leaflet_touchstart" + n] = o, t.addEventListener(Xi, o, !1), ee || (document.documentElement.addEventListener(Xi, R, !0), document.documentElement.addEventListener(Ji, D, !0), document.documentElement.addEventListener($i, N, !0), document.documentElement.addEventListener(Qi, N, !0), ee = !0) }

	function R(t) { ie[t.pointerId] = t, ne++ }

	function D(t) { ie[t.pointerId] && (ie[t.pointerId] = t) }

	function N(t) { delete ie[t.pointerId], ne-- }

	function j(t, i) { t.touches = []; for (var e in ie) t.touches.push(ie[e]);
		t.changedTouches = [t], i(t) }

	function W(t, i, e) { var n = function(t) {
			(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i) };
		t["_leaflet_touchmove" + e] = n, t.addEventListener(Ji, n, !1) }

	function H(t, i, e) { var n = function(t) { j(t, i) };
		t["_leaflet_touchend" + e] = n, t.addEventListener($i, n, !1), t.addEventListener(Qi, n, !1) }

	function F(t, i, e) {
		function n(t) { var i; if (Wi) { if (!Li || "mouse" === t.pointerType) return;
				i = ne } else i = t.touches.length; if (!(i > 1)) { var e = Date.now(),
					n = e - (s || e);
				r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e } }

		function o(t) { if (a && !r.cancelBubble) { if (Wi) { if (!Li || "mouse" === t.pointerType) return; var e, n, o = {}; for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
					r = o } r.type = "dblclick", i(r), s = null } } var s, r, a = !1,
			h = 250; return t[re + oe + e] = n, t[re + se + e] = o, t[re + "dblclick" + e] = i, t.addEventListener(oe, n, !1), t.addEventListener(se, o, !1), t.addEventListener("dblclick", i, !1), this }

	function U(t, i) { var e = t[re + oe + i],
			n = t[re + se + i],
			o = t[re + "dblclick" + i]; return t.removeEventListener(oe, e, !1), t.removeEventListener(se, n, !1), Li || t.removeEventListener("dblclick", o, !1), this }

	function V(t, i, e, n) { if ("object" == typeof i)
			for (var o in i) q(t, o, i[o], e);
		else
			for (var s = 0, r = (i = u(i)).length; s < r; s++) q(t, i[s], e, n); return this }

	function G(t, i, e, n) { if ("object" == typeof i)
			for (var o in i) K(t, o, i[o], e);
		else if (i)
			for (var s = 0, r = (i = u(i)).length; s < r; s++) K(t, i[s], e, n);
		else { for (var a in t[ae]) K(t, a, t[ae][a]);
			delete t[ae] } return this }

	function q(t, i, e, o) { var s = i + n(e) + (o ? "_" + n(o) : ""); if (t[ae] && t[ae][s]) return this; var r = function(i) { return e.call(o || t, i || window.event) },
			a = r;
		Wi && 0 === i.indexOf("touch") ? I(t, i, r, s) : !Hi || "dblclick" !== i || !F || Wi && Mi ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) { i = i || window.event, ot(t, i) && a(i) }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && bi && (r = function(t) { st(t, a) }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ae] = t[ae] || {}, t[ae][s] = r }

	function K(t, i, e, o) { var s = i + n(e) + (o ? "_" + n(o) : ""),
			r = t[ae] && t[ae][s]; if (!r) return this;
		Wi && 0 === i.indexOf("touch") ? A(t, i, s) : Hi && "dblclick" === i && U ? U(t, s) : "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r), t[ae][s] = null }

	function Y(t) { return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, nt(t), this }

	function X(t) { return q(t, "mousewheel", Y), this }

	function J(t) { return V(t, "mousedown touchstart dblclick", Y), q(t, "click", et), this }

	function $(t) { return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this }

	function Q(t) { return $(t), Y(t), this }

	function tt(t, i) { if (!i) return new x(t.clientX, t.clientY); var e = i.getBoundingClientRect(); return new x(t.clientX - e.left - i.clientLeft, t.clientY - e.top - i.clientTop) }

	function it(t) { return Li ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / he : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0 }

	function et(t) { ue[t.type] = !0 }

	function nt(t) { var i = ue[t.type]; return ue[t.type] = !1, i }

	function ot(t, i) { var e = i.relatedTarget; if (!e) return !0; try { for (; e && e !== t;) e = e.parentNode } catch (t) { return !1 } return e !== t }

	function st(t, i) { var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
			n = di && e - di;
		n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Q(t) : (di = e, i(t)) }

	function rt(t) { return "string" == typeof t ? document.getElementById(t) : t }

	function at(t, i) { var e = t.style[i] || t.currentStyle && t.currentStyle[i]; if ((!e || "auto" === e) && document.defaultView) { var n = document.defaultView.getComputedStyle(t, null);
			e = n ? n[i] : null } return "auto" === e ? null : e }

	function ht(t, i, e) { var n = document.createElement(t); return n.className = i || "", e && e.appendChild(n), n }

	function ut(t) { var i = t.parentNode;
		i && i.removeChild(t) }

	function lt(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }

	function ct(t) { var i = t.parentNode;
		i.lastChild !== t && i.appendChild(t) }

	function _t(t) { var i = t.parentNode;
		i.firstChild !== t && i.insertBefore(t, i.firstChild) }

	function dt(t, i) { if (void 0 !== t.classList) return t.classList.contains(i); var e = gt(t); return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e) }

	function pt(t, i) { if (void 0 !== t.classList)
			for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
		else if (!dt(t, i)) { var s = gt(t);
			ft(t, (s ? s + " " : "") + i) } }

	function mt(t, i) { void 0 !== t.classList ? t.classList.remove(i) : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " "))) }

	function ft(t, i) { void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i }

	function gt(t) { return void 0 === t.className.baseVal ? t.className : t.className.baseVal }

	function vt(t, i) { "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && yt(t, i) }

	function yt(t, i) { var e = !1,
			n = "DXImageTransform.Microsoft.Alpha"; try { e = t.filters.item(n) } catch (t) { if (1 === i) return } i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")" }

	function xt(t) { for (var i = document.documentElement.style, e = 0; e < t.length; e++)
			if (t[e] in i) return t[e]; return !1 }

	function wt(t, i, e) { var n = i || new x(0, 0);
		t.style[ce] = (Bi ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "") }

	function Lt(t, i) { t._leaflet_pos = i, Oi ? wt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px") }

	function Pt(t) { return t._leaflet_pos || new x(0, 0) }

	function bt() { V(window, "dragstart", $) }

	function Tt() { G(window, "dragstart", $) }

	function zt(t) { for (; - 1 === t.tabIndex;) t = t.parentNode;
		t.style && (Mt(), me = t, fe = t.style.outline, t.style.outline = "none", V(window, "keydown", Mt)) }

	function Mt() { me && (me.style.outline = fe, me = void 0, fe = void 0, G(window, "keydown", Mt)) }

	function Ct(t, i) { if (!i || !t.length) return t.slice(); var e = i * i; return t = kt(t, e), t = Et(t, e) }

	function Zt(t, i, e) { return Math.sqrt(Rt(t, i, e, !0)) }

	function Et(t, i) { var e = t.length,
			n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
		n[0] = n[e - 1] = 1, St(t, n, i, 0, e - 1); var o, s = []; for (o = 0; o < e; o++) n[o] && s.push(t[o]); return s }

	function St(t, i, e, n, o) { var s, r, a, h = 0; for (r = n + 1; r <= o - 1; r++)(a = Rt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
		h > e && (i[s] = 1, St(t, i, e, n, s), St(t, i, e, s, o)) }

	function kt(t, i) { for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Ot(t[n], t[o]) > i && (e.push(t[n]), o = n); return o < s - 1 && e.push(t[s - 1]), e }

	function Bt(t, i, e, n, o) { var s, r, a, h = n ? ze : At(t, e),
			u = At(i, e); for (ze = u;;) { if (!(h | u)) return [t, i]; if (h & u) return !1;
			a = At(r = It(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a) } }

	function It(t, i, e, n, o) { var s, r, a = i.x - t.x,
			h = i.y - t.y,
			u = n.min,
			l = n.max; return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o) }

	function At(t, i) { var e = 0; return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e }

	function Ot(t, i) { var e = i.x - t.x,
			n = i.y - t.y; return e * e + n * n }

	function Rt(t, i, e, n) { var o, s = i.x,
			r = i.y,
			a = e.x - s,
			h = e.y - r,
			u = a * a + h * h; return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r) }

	function Dt(t) { return !ei(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0] }

	function Nt(t) { return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Dt(t) }

	function jt(t, i, e) { var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8]; for (o = 0, u = t.length; o < u; o++) t[o]._code = At(t[o], i); for (r = 0; r < 4; r++) { for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = It(h, a, l, i, e))._code = At(c, i), n.push(c)) : (h._code & l && ((c = It(h, a, l, i, e))._code = At(c, i), n.push(c)), n.push(a));
			t = n } return t }

	function Wt(t, i) { var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			u = i && i.pointToLayer,
			l = i && i.coordsToLatLng || Ht; if (!a && !r) return null; switch (r.type) {
			case "Point":
				return e = l(a), u ? u(t, e) : new qe(e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new qe(e)); return new Fe(h);
			case "LineString":
			case "MultiLineString":
				return n = Ft(a, "LineString" === r.type ? 0 : 1, l), new Je(n, i);
			case "Polygon":
			case "MultiPolygon":
				return n = Ft(a, "Polygon" === r.type ? 1 : 2, l), new $e(n, i);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) { var c = Wt({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, i);
					c && h.push(c) } return new Fe(h);
			default:
				throw new Error("Invalid GeoJSON object.") } }

	function Ht(t) { return new M(t[1], t[0], t[2]) }

	function Ft(t, i, e) { for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Ft(t[s], i - 1, e) : (e || Ht)(t[s]), o.push(n); return o }

	function Ut(t, i) { return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)] }

	function Vt(t, i, e, n) { for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Vt(t[s], i - 1, e, n) : Ut(t[s], n)); return !i && e && o.push(o[0]), o }

	function Gt(t, e) { return t.feature ? i({}, t.feature, { geometry: e }) : qt(e) }

	function qt(t) { return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t } }

	function Kt(t, i) { return new Qe(t, i) }

	function Yt(t, i) { return new ln(t, i) }

	function Xt(t) { return Gi ? new dn(t) : null }

	function Jt(t) { return qi || Ki ? new gn(t) : null } var $t = Object.freeze;
	Object.freeze = function(t) { return t }; var Qt = Object.create || function() {
			function t() {} return function(i) { return t.prototype = i, new t } }(),
		ti = 0,
		ii = /\{ *([\w_\-]+) *\}/g,
		ei = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
		ni = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		oi = 0,
		si = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
		ri = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) { window.clearTimeout(t) },
		ai = (Object.freeze || Object)({ freeze: $t, extend: i, create: Qt, bind: e, lastId: ti, stamp: n, throttle: o, wrapNum: s, falseFn: r, formatNum: a, trim: h, splitWords: u, setOptions: l, getParamString: c, template: _, isArray: ei, indexOf: d, emptyImageUrl: ni, requestFn: si, cancelFn: ri, requestAnimFrame: f, cancelAnimFrame: g });
	v.extend = function(t) { var e = function() { this.initialize && this.initialize.apply(this, arguments), this.callInitHooks() },
			n = e.__super__ = this.prototype,
			o = Qt(n);
		o.constructor = e, e.prototype = o; for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]); return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(Qt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function() { if (!this._initHooksCalled) { n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0; for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this) } }, e }, v.include = function(t) { return i(this.prototype, t), this }, v.mergeOptions = function(t) { return i(this.prototype.options, t), this }, v.addInitHook = function(t) { var i = Array.prototype.slice.call(arguments, 1),
			e = "function" == typeof t ? t : function() { this[t].apply(this, i) }; return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this }; var hi = { on: function(t, i, e) { if ("object" == typeof t)
				for (var n in t) this._on(n, t[n], i);
			else
				for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e); return this }, off: function(t, i, e) { if (t)
				if ("object" == typeof t)
					for (var n in t) this._off(n, t[n], i);
				else
					for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
			else delete this._events; return this }, _on: function(t, i, e) { this._events = this._events || {}; var n = this._events[t];
			n || (n = [], this._events[t] = n), e === this && (e = void 0); for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
				if (s[r].fn === i && s[r].ctx === e) return;
			s.push(o) }, _off: function(t, i, e) { var n, o, s; if (this._events && (n = this._events[t]))
				if (i) { if (e === this && (e = void 0), n)
						for (o = 0, s = n.length; o < s; o++) { var a = n[o]; if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1) } }
			else { for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
				delete this._events[t] } }, fire: function(t, e, n) { if (!this.listens(t, n)) return this; var o = i({}, e, { type: t, target: this }); if (this._events) { var s = this._events[t]; if (s) { this._firingCount = this._firingCount + 1 || 1; for (var r = 0, a = s.length; r < a; r++) { var h = s[r];
						h.fn.call(h.ctx || this, o) } this._firingCount-- } } return n && this._propagateEvent(o), this }, listens: function(t, i) { var e = this._events && this._events[t]; if (e && e.length) return !0; if (i)
				for (var n in this._eventParents)
					if (this._eventParents[n].listens(t, i)) return !0; return !1 }, once: function(t, i, n) { if ("object" == typeof t) { for (var o in t) this.once(o, t[o], i); return this } var s = e(function() { this.off(t, i, n).off(t, s, n) }, this); return this.on(t, i, n).on(t, s, n) }, addEventParent: function(t) { return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this }, removeEventParent: function(t) { return this._eventParents && delete this._eventParents[n(t)], this }, _propagateEvent: function(t) { for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({ layer: t.target }, t), !0) } };
	hi.addEventListener = hi.on, hi.removeEventListener = hi.clearAllEventListeners = hi.off, hi.addOneTimeEventListener = hi.once, hi.fireEvent = hi.fire, hi.hasEventListeners = hi.listens; var ui = v.extend(hi);
	x.prototype = { clone: function() { return new x(this.x, this.y) }, add: function(t) { return this.clone()._add(w(t)) }, _add: function(t) { return this.x += t.x, this.y += t.y, this }, subtract: function(t) { return this.clone()._subtract(w(t)) }, _subtract: function(t) { return this.x -= t.x, this.y -= t.y, this }, divideBy: function(t) { return this.clone()._divideBy(t) }, _divideBy: function(t) { return this.x /= t, this.y /= t, this }, multiplyBy: function(t) { return this.clone()._multiplyBy(t) }, _multiplyBy: function(t) { return this.x *= t, this.y *= t, this }, scaleBy: function(t) { return new x(this.x * t.x, this.y * t.y) }, unscaleBy: function(t) { return new x(this.x / t.x, this.y / t.y) }, round: function() { return this.clone()._round() }, _round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, floor: function() { return this.clone()._floor() }, _floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() { return this.clone()._ceil() }, _ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, distanceTo: function(t) { var i = (t = w(t)).x - this.x,
				e = t.y - this.y; return Math.sqrt(i * i + e * e) }, equals: function(t) { return (t = w(t)).x === this.x && t.y === this.y }, contains: function(t) { return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y) }, toString: function() { return "Point(" + a(this.x) + ", " + a(this.y) + ")" } }, P.prototype = { extend: function(t) { return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this }, getCenter: function(t) { return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t) }, getBottomLeft: function() { return new x(this.min.x, this.max.y) }, getTopRight: function() { return new x(this.max.x, this.min.y) }, getTopLeft: function() { return this.min }, getBottomRight: function() { return this.max }, getSize: function() { return this.max.subtract(this.min) }, contains: function(t) { var i, e; return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y }, intersects: function(t) { t = b(t); var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x >= i.x && n.x <= e.x,
				r = o.y >= i.y && n.y <= e.y; return s && r }, overlaps: function(t) { t = b(t); var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x > i.x && n.x < e.x,
				r = o.y > i.y && n.y < e.y; return s && r }, isValid: function() { return !(!this.min || !this.max) } }, T.prototype = { extend: function(t) { var i, e, n = this._southWest,
				o = this._northEast; if (t instanceof M) i = t, e = t;
			else { if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this; if (i = t._southWest, e = t._northEast, !i || !e) return this } return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this }, pad: function(t) { var i = this._southWest,
				e = this._northEast,
				n = Math.abs(i.lat - e.lat) * t,
				o = Math.abs(i.lng - e.lng) * t; return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o)) }, getCenter: function() { return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2) }, getSouthWest: function() { return this._southWest }, getNorthEast: function() { return this._northEast }, getNorthWest: function() { return new M(this.getNorth(), this.getWest()) }, getSouthEast: function() { return new M(this.getSouth(), this.getEast()) }, getWest: function() { return this._southWest.lng }, getSouth: function() { return this._southWest.lat }, getEast: function() { return this._northEast.lng }, getNorth: function() { return this._northEast.lat }, contains: function(t) { t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t); var i, e, n = this._southWest,
				o = this._northEast; return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng }, intersects: function(t) { t = z(t); var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat >= i.lat && n.lat <= e.lat,
				r = o.lng >= i.lng && n.lng <= e.lng; return s && r }, overlaps: function(t) { t = z(t); var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat > i.lat && n.lat < e.lat,
				r = o.lng > i.lng && n.lng < e.lng; return s && r }, toBBoxString: function() { return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",") }, equals: function(t, i) { return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i)) }, isValid: function() { return !(!this._southWest || !this._northEast) } }, M.prototype = { equals: function(t, i) { return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i)) }, toString: function(t) { return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")" }, distanceTo: function(t) { return ci.distance(this, C(t)) }, wrap: function() { return ci.wrapLatLng(this) }, toBounds: function(t) { var i = 180 * t / 40075017,
				e = i / Math.cos(Math.PI / 180 * this.lat); return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]) }, clone: function() { return new M(this.lat, this.lng, this.alt) } }; var li = { latLngToPoint: function(t, i) { var e = this.projection.project(t),
					n = this.scale(i); return this.transformation._transform(e, n) }, pointToLatLng: function(t, i) { var e = this.scale(i),
					n = this.transformation.untransform(t, e); return this.projection.unproject(n) }, project: function(t) { return this.projection.project(t) }, unproject: function(t) { return this.projection.unproject(t) }, scale: function(t) { return 256 * Math.pow(2, t) }, zoom: function(t) { return Math.log(t / 256) / Math.LN2 }, getProjectedBounds: function(t) { if (this.infinite) return null; var i = this.projection.bounds,
					e = this.scale(t); return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e)) }, infinite: !1, wrapLatLng: function(t) { var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng; return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt) }, wrapLatLngBounds: function(t) { var i = t.getCenter(),
					e = this.wrapLatLng(i),
					n = i.lat - e.lat,
					o = i.lng - e.lng; if (0 === n && 0 === o) return t; var s = t.getSouthWest(),
					r = t.getNorthEast(); return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o)) } },
		ci = i({}, li, { wrapLng: [-180, 180], R: 6371e3, distance: function(t, i) { var e = Math.PI / 180,
					n = t.lat * e,
					o = i.lat * e,
					s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((i.lng - t.lng) * e); return this.R * Math.acos(Math.min(s, 1)) } }),
		_i = { R: 6378137, MAX_LATITUDE: 85.0511287798, project: function(t) { var i = Math.PI / 180,
					e = this.MAX_LATITUDE,
					n = Math.max(Math.min(e, t.lat), -e),
					o = Math.sin(n * i); return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2) }, unproject: function(t) { var i = 180 / Math.PI; return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R) }, bounds: function() { var t = 6378137 * Math.PI; return new P([-t, -t], [t, t]) }() };
	Z.prototype = { transform: function(t, i) { return this._transform(t.clone(), i) }, _transform: function(t, i) { return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t }, untransform: function(t, i) { return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c) } }; var di, pi, mi, fi, gi = i({}, ci, { code: "EPSG:3857", projection: _i, transformation: function() { var t = .5 / (Math.PI * _i.R); return E(t, .5, -t, .5) }() }),
		vi = i({}, gi, { code: "EPSG:900913" }),
		yi = document.documentElement.style,
		xi = "ActiveXObject" in window,
		wi = xi && !document.addEventListener,
		Li = "msLaunchUri" in navigator && !("documentMode" in document),
		Pi = B("webkit"),
		bi = B("android"),
		Ti = B("android 2") || B("android 3"),
		zi = !!window.opera,
		Mi = B("chrome"),
		Ci = B("gecko") && !Pi && !zi && !xi,
		Zi = !Mi && B("safari"),
		Ei = B("phantom"),
		Si = "OTransition" in yi,
		ki = 0 === navigator.platform.indexOf("Win"),
		Bi = xi && "transition" in yi,
		Ii = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Ti,
		Ai = "MozPerspective" in yi,
		Oi = !window.L_DISABLE_3D && (Bi || Ii || Ai) && !Si && !Ei,
		Ri = "undefined" != typeof orientation || B("mobile"),
		Di = Ri && Pi,
		Ni = Ri && Ii,
		ji = !window.PointerEvent && window.MSPointerEvent,
		Wi = !(!window.PointerEvent && !ji),
		Hi = !window.L_NO_TOUCH && (Wi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
		Fi = Ri && zi,
		Ui = Ri && Ci,
		Vi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		Gi = !!document.createElement("canvas").getContext,
		qi = !(!document.createElementNS || !S("svg").createSVGRect),
		Ki = !qi && function() { try { var t = document.createElement("div");
				t.innerHTML = '<v:shape adj="1"/>'; var i = t.firstChild; return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj } catch (t) { return !1 } }(),
		Yi = (Object.freeze || Object)({ ie: xi, ielt9: wi, edge: Li, webkit: Pi, android: bi, android23: Ti, opera: zi, chrome: Mi, gecko: Ci, safari: Zi, phantom: Ei, opera12: Si, win: ki, ie3d: Bi, webkit3d: Ii, gecko3d: Ai, any3d: Oi, mobile: Ri, mobileWebkit: Di, mobileWebkit3d: Ni, msPointer: ji, pointer: Wi, touch: Hi, mobileOpera: Fi, mobileGecko: Ui, retina: Vi, canvas: Gi, svg: qi, vml: Ki }),
		Xi = ji ? "MSPointerDown" : "pointerdown",
		Ji = ji ? "MSPointerMove" : "pointermove",
		$i = ji ? "MSPointerUp" : "pointerup",
		Qi = ji ? "MSPointerCancel" : "pointercancel",
		te = ["INPUT", "SELECT", "OPTION"],
		ie = {},
		ee = !1,
		ne = 0,
		oe = ji ? "MSPointerDown" : Wi ? "pointerdown" : "touchstart",
		se = ji ? "MSPointerUp" : Wi ? "pointerup" : "touchend",
		re = "_leaflet_",
		ae = "_leaflet_events",
		he = ki && Mi ? 2 * window.devicePixelRatio : Ci ? window.devicePixelRatio : 1,
		ue = {},
		le = (Object.freeze || Object)({ on: V, off: G, stopPropagation: Y, disableScrollPropagation: X, disableClickPropagation: J, preventDefault: $, stop: Q, getMousePosition: tt, getWheelDelta: it, fakeStop: et, skipped: nt, isExternalTarget: ot, addListener: V, removeListener: G }),
		ce = xt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
		_e = xt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend"; if ("onselectstart" in document) pi = function() { V(window, "selectstart", $) }, mi = function() { G(window, "selectstart", $) };
	else { var pe = xt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		pi = function() { if (pe) { var t = document.documentElement.style;
				fi = t[pe], t[pe] = "none" } }, mi = function() { pe && (document.documentElement.style[pe] = fi, fi = void 0) } } var me, fe, ge = (Object.freeze || Object)({ TRANSFORM: ce, TRANSITION: _e, TRANSITION_END: de, get: rt, getStyle: at, create: ht, remove: ut, empty: lt, toFront: ct, toBack: _t, hasClass: dt, addClass: pt, removeClass: mt, setClass: ft, getClass: gt, setOpacity: vt, testProp: xt, setTransform: wt, setPosition: Lt, getPosition: Pt, disableTextSelection: pi, enableTextSelection: mi, disableImageDrag: bt, enableImageDrag: Tt, preventOutline: zt, restoreOutline: Mt }),
		ve = ui.extend({ run: function(t, i, e, n) { this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate() }, stop: function() { this._inProgress && (this._step(!0), this._complete()) }, _animate: function() { this._animId = f(this._animate, this), this._step() }, _step: function(t) { var i = +new Date - this._startTime,
					e = 1e3 * this._duration;
				i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete()) }, _runFrame: function(t, i) { var e = this._startPos.add(this._offset.multiplyBy(t));
				i && e._round(), Lt(this._el, e), this.fire("step") }, _complete: function() { g(this._animId), this._inProgress = !1, this.fire("end") }, _easeOut: function(t) { return 1 - Math.pow(1 - t, this._easeOutPower) } }),
		ye = ui.extend({ options: { crs: gi, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function(t, i) { i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, { reset: !0 }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = _e && Oi && !Fi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), V(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers) }, setView: function(t, e, n) { return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({ animate: n.animate }, n.zoom), n.pan = i({ animate: n.animate, duration: n.duration }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this) }, setZoom: function(t, i) { return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : (this._zoom = t, this) }, zoomIn: function(t, i) { return t = t || (Oi ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i) }, zoomOut: function(t, i) { return t = t || (Oi ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i) }, setZoomAround: function(t, i, e) { var n = this.getZoomScale(i),
					o = this.getSize().divideBy(2),
					s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					r = this.containerPointToLatLng(o.add(s)); return this.setView(r, i, { zoom: e }) }, _getBoundsCenterZoom: function(t, i) { i = i || {}, t = t.getBounds ? t.getBounds() : z(t); var e = w(i.paddingTopLeft || i.padding || [0, 0]),
					n = w(i.paddingBottomRight || i.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, e.add(n)); if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o }; var s = n.subtract(e).divideBy(2),
					r = this.project(t.getSouthWest(), o),
					a = this.project(t.getNorthEast(), o); return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o } }, fitBounds: function(t, i) { if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid."); var e = this._getBoundsCenterZoom(t, i); return this.setView(e.center, e.zoom, i) }, fitWorld: function(t) { return this.fitBounds([
					[-90, -180],
					[90, 180]
				], t) }, panTo: function(t, i) { return this.setView(t, this._zoom, { pan: i }) }, panBy: function(t, i) { if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend"); if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this; if (this._panAnim || (this._panAnim = new ve, this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) { pt(this._mapPane, "leaflet-pan-anim"); var e = this._getMapPanePos().subtract(t).round();
					this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity) } else this._rawPanBy(t), this.fire("move").fire("moveend"); return this }, flyTo: function(t, i, e) {
				function n(t) { var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
						e = Math.sqrt(i * i + 1) - i; return e < 1e-9 ? -18 : Math.log(e) }

				function o(t) { return (Math.exp(t) - Math.exp(-t)) / 2 }

				function s(t) { return (Math.exp(t) + Math.exp(-t)) / 2 }

				function r(t) { return o(t) / s(t) }

				function a(t) { return m * (s(w) / s(w + y * t)) }

				function h(t) { return m * (s(w) * r(w + y * t) - o(w)) / x }

				function u(t) { return 1 - Math.pow(1 - t, 1.5) }

				function l() { var e = (Date.now() - L) / b,
						n = u(e) * P;
					e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), { flyTo: !0 })) : this._move(t, i)._moveEnd(!0) } if (!1 === (e = e || {}).animate || !Oi) return this.setView(t, i, e);
				this._stop(); var c = this.project(this.getCenter()),
					_ = this.project(t),
					d = this.getSize(),
					p = this._zoom;
				t = C(t), i = void 0 === i ? p : i; var m = Math.max(d.x, d.y),
					g = m * this.getZoomScale(p, i),
					v = _.distanceTo(c) || 1,
					y = 1.42,
					x = y * y,
					w = n(0),
					L = Date.now(),
					P = (n(1) - w) / y,
					b = e.duration ? 1e3 * e.duration : 1e3 * P * .8; return this._moveStart(!0), l.call(this), this }, flyToBounds: function(t, i) { var e = this._getBoundsCenterZoom(t, i); return this.flyTo(e.center, e.zoom, i) }, setMaxBounds: function(t) { return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds)) }, setMinZoom: function(t) { return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this }, setMaxZoom: function(t) { return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this }, panInsideBounds: function(t, i) { this._enforcingBounds = !0; var e = this.getCenter(),
					n = this._limitCenter(e, this._zoom, z(t)); return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this }, invalidateSize: function(t) { if (!this._loaded) return this;
				t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t); var n = this.getSize();
				this._sizeChanged = !0, this._lastCenter = null; var o = this.getSize(),
					s = n.divideBy(2).round(),
					r = o.divideBy(2).round(),
					a = s.subtract(r); return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: n, newSize: o })) : this }, stop: function() { return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop() }, locate: function(t) { if (t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this; var n = e(this._handleGeolocationResponse, this),
					o = e(this._handleGeolocationError, this); return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this }, stopLocate: function() { return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this }, _handleGeolocationError: function(t) { var i = t.code,
					e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: i, message: "Geolocation error: " + e + "." }) }, _handleGeolocationResponse: function(t) { var i = new M(t.coords.latitude, t.coords.longitude),
					e = i.toBounds(t.coords.accuracy),
					n = this._locateOptions; if (n.setView) { var o = this.getBoundsZoom(e);
					this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o) } var s = { latlng: i, bounds: e, timestamp: t.timestamp }; for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
				this.fire("locationfound", s) }, addHandler: function(t, i) { if (!i) return this; var e = this[t] = new i(this); return this._handlers.push(e), this.options[t] && e.enable(), this }, remove: function() { if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance"); try { delete this._container._leaflet_id, delete this._containerId } catch (t) { this._container._leaflet_id = void 0, this._containerId = void 0 } ut(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"); var t; for (t in this._layers) this._layers[t].remove(); for (t in this._panes) ut(this._panes[t]); return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this }, createPane: function(t, i) { var e = ht("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane); return t && (this._panes[t] = e), e }, getCenter: function() { return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint()) }, getZoom: function() { return this._zoom }, getBounds: function() { var t = this.getPixelBounds(); return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight())) }, getMinZoom: function() { return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom }, getMaxZoom: function() { return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom }, getBoundsZoom: function(t, i, e) { t = z(t), e = w(e || [0, 0]); var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					a = t.getSouthEast(),
					h = this.getSize().subtract(e),
					u = b(this.project(a, n), this.project(r, n)).getSize(),
					l = Oi ? this.options.zoomSnap : 1,
					c = h.x / u.x,
					_ = h.y / u.y,
					d = i ? Math.max(c, _) : Math.min(c, _); return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n)) }, getSize: function() { return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone() }, getPixelBounds: function(t, i) { var e = this._getTopLeftPoint(t, i); return new P(e, e.add(this.getSize())) }, getPixelOrigin: function() { return this._checkIfLoaded(), this._pixelOrigin }, getPixelWorldBounds: function(t) { return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t) }, getPane: function(t) { return "string" == typeof t ? this._panes[t] : t }, getPanes: function() { return this._panes }, getContainer: function() { return this._container }, getZoomScale: function(t, i) { var e = this.options.crs; return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i) }, getScaleZoom: function(t, i) { var e = this.options.crs;
				i = void 0 === i ? this._zoom : i; var n = e.zoom(t * e.scale(i)); return isNaN(n) ? 1 / 0 : n }, project: function(t, i) { return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i) }, unproject: function(t, i) { return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i) }, layerPointToLatLng: function(t) { var i = w(t).add(this.getPixelOrigin()); return this.unproject(i) }, latLngToLayerPoint: function(t) { return this.project(C(t))._round()._subtract(this.getPixelOrigin()) }, wrapLatLng: function(t) { return this.options.crs.wrapLatLng(C(t)) }, wrapLatLngBounds: function(t) { return this.options.crs.wrapLatLngBounds(z(t)) }, distance: function(t, i) { return this.options.crs.distance(C(t), C(i)) }, containerPointToLayerPoint: function(t) { return w(t).subtract(this._getMapPanePos()) }, layerPointToContainerPoint: function(t) { return w(t).add(this._getMapPanePos()) }, containerPointToLatLng: function(t) { var i = this.containerPointToLayerPoint(w(t)); return this.layerPointToLatLng(i) }, latLngToContainerPoint: function(t) { return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t))) }, mouseEventToContainerPoint: function(t) { return tt(t, this._container) }, mouseEventToLayerPoint: function(t) { return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t)) }, mouseEventToLatLng: function(t) { return this.layerPointToLatLng(this.mouseEventToLayerPoint(t)) }, _initContainer: function(t) { var i = this._container = rt(t); if (!i) throw new Error("Map container not found."); if (i._leaflet_id) throw new Error("Map container is already initialized.");
				V(i, "scroll", this._onScroll, this), this._containerId = n(i) }, _initLayout: function() { var t = this._container;
				this._fadeAnimated = this.options.fadeAnimation && Oi, pt(t, "leaflet-container" + (Hi ? " leaflet-touch" : "") + (Vi ? " leaflet-retina" : "") + (wi ? " leaflet-oldie" : "") + (Zi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")); var i = at(t, "position"); "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos() }, _initPanes: function() { var t = this._panes = {};
				this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Lt(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide")) }, _resetView: function(t, i) { Lt(this._mapPane, new x(0, 0)); var e = !this._loaded;
				this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset"); var n = this._zoom !== i;
				this._moveStart(n)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load") }, _moveStart: function(t) { return t && this.fire("zoomstart"), this.fire("movestart") }, _move: function(t, i, e) { void 0 === i && (i = this._zoom); var n = this._zoom !== i; return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e) }, _moveEnd: function(t) { return t && this.fire("zoomend"), this.fire("moveend") }, _stop: function() { return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this }, _rawPanBy: function(t) { Lt(this._mapPane, this._getMapPanePos().subtract(t)) }, _getZoomSpan: function() { return this.getMaxZoom() - this.getMinZoom() }, _panInsideMaxBounds: function() { this._enforcingBounds || this.panInsideBounds(this.options.maxBounds) }, _checkIfLoaded: function() { if (!this._loaded) throw new Error("Set map center and zoom first.") }, _initEvents: function(t) { this._targets = {}, this._targets[n(this._container)] = this; var i = t ? G : V;
				i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Oi && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd) }, _onResize: function() { g(this._resizeRequest), this._resizeRequest = f(function() { this.invalidateSize({ debounceMoveend: !0 }) }, this) }, _onScroll: function() { this._container.scrollTop = 0, this._container.scrollLeft = 0 }, _onMoveEnd: function() { var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom()) }, _findEventTargets: function(t, i) { for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) { if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) { a = !0; break } if (e && e.listens(i, !0)) { if (s && !ot(r, t)) break; if (o.push(e), s) break } if (r === this._container) break;
					r = r.parentNode } return o.length || a || s || !ot(r, t) || (o = [this]), o }, _handleDOMEvent: function(t) { if (this._loaded && !nt(t)) { var i = t.type; "mousedown" !== i && "keypress" !== i || zt(t.target || t.srcElement), this._fireDOMEvent(t, i) } }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t, e, n) { if ("click" === t.type) { var o = i({}, t);
					o.type = "preclick", this._fireDOMEvent(o, o.type, n) } if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) { var s = n[0]; "contextmenu" === e && s.listens(e, !0) && $(t); var r = { originalEvent: t }; if ("keypress" !== t.type) { var a = s.options && "icon" in s.options;
						r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint) } for (var h = 0; h < n.length; h++)
						if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return } }, _draggableMoved: function(t) { return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved() }, _clearHandlers: function() { for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable() }, whenReady: function(t, i) { return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this }, _getMapPanePos: function() { return Pt(this._mapPane) || new x(0, 0) }, _moved: function() { var t = this._getMapPanePos(); return t && !t.equals([0, 0]) }, _getTopLeftPoint: function(t, i) { return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos()) }, _getNewPixelOrigin: function(t, i) { var e = this.getSize()._divideBy(2); return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round() }, _latLngToNewLayerPoint: function(t, i, e) { var n = this._getNewPixelOrigin(e, i); return this.project(t, i)._subtract(n) }, _latLngBoundsToNewLayerBounds: function(t, i, e) { var n = this._getNewPixelOrigin(e, i); return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]) }, _getCenterLayerPoint: function() { return this.containerPointToLayerPoint(this.getSize()._divideBy(2)) }, _getCenterOffset: function(t) { return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint()) }, _limitCenter: function(t, i, e) { if (!e) return t; var n = this.project(t, i),
					o = this.getSize().divideBy(2),
					s = new P(n.subtract(o), n.add(o)),
					r = this._getBoundsOffset(s, e, i); return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i) }, _limitOffset: function(t, i) { if (!i) return t; var e = this.getPixelBounds(),
					n = new P(e.min.add(t), e.max.add(t)); return t.add(this._getBoundsOffset(n, i)) }, _getBoundsOffset: function(t, i, e) { var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
					o = n.min.subtract(t.min),
					s = n.max.subtract(t.max); return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y)) }, _rebound: function(t, i) { return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i)) }, _limitZoom: function(t) { var i = this.getMinZoom(),
					e = this.getMaxZoom(),
					n = Oi ? this.options.zoomSnap : 1; return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t)) }, _onPanTransitionStep: function() { this.fire("move") }, _onPanTransitionEnd: function() { mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend") }, _tryAnimatedPan: function(t, i) { var e = this._getCenterOffset(t)._floor(); return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0) }, _createAnimProxy: function() { var t = this._proxy = ht("div", "leaflet-proxy leaflet-zoom-animated");
				this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) { var i = ce,
						e = this._proxy.style[i];
					wt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd() }, this), this.on("load moveend", function() { var t = this.getCenter(),
						i = this.getZoom();
					wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1)) }, this), this._on("unload", this._destroyAnimProxy, this) }, _destroyAnimProxy: function() { ut(this._proxy), delete this._proxy }, _catchTransitionEnd: function(t) { this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd() }, _nothingToAnimate: function() { return !this._container.getElementsByClassName("leaflet-zoom-animated").length }, _tryAnimatedZoom: function(t, i, e) { if (this._animatingZoom) return !0; if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1; var n = this.getZoomScale(i),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / n); return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function() { this._moveStart(!0)._animateZoom(t, i, !0) }, this), !0) }, _animateZoom: function(t, i, n, o) { n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }), setTimeout(e(this._onZoomTransitionEnd, this), 250) }, _onZoomTransitionEnd: function() { this._animatingZoom && (mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() { this._moveEnd(!0) }, this)) } }),
		xe = v.extend({ options: { position: "topright" }, initialize: function(t) { l(this, t) }, getPosition: function() { return this.options.position }, setPosition: function(t) { var i = this._map; return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this }, getContainer: function() { return this._container }, addTo: function(t) { this.remove(), this._map = t; var i = this._container = this.onAdd(t),
					e = this.getPosition(),
					n = t._controlCorners[e]; return pt(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this }, remove: function() { return this._map ? (ut(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this }, _refocusOnMap: function(t) { this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus() } }),
		we = function(t) { return new xe(t) };
	ye.include({ addControl: function(t) { return t.addTo(this), this }, removeControl: function(t) { return t.remove(), this }, _initControlPos: function() {
			function t(t, o) { var s = e + t + " " + e + o;
				i[t + o] = ht("div", s, n) } var i = this._controlCorners = {},
				e = "leaflet-",
				n = this._controlContainer = ht("div", e + "control-container", this._container);
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right") }, _clearControlPos: function() { for (var t in this._controlCorners) ut(this._controlCorners[t]);
			ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer } }); var Le = xe.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function(t, i, e, n) { return e < n ? -1 : n < e ? 1 : 0 } }, initialize: function(t, i, e) { l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1; for (var n in t) this._addLayer(t[n], n); for (n in i) this._addLayer(i[n], n, !0) }, onAdd: function(t) { this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this); for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this); return this._container }, addTo: function(t) { return xe.prototype.addTo.call(this, t), this._expandIfNotCollapsed() }, onRemove: function() { this._map.off("zoomend", this._checkDisabledLayers, this); for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this) }, addBaseLayer: function(t, i) { return this._addLayer(t, i), this._map ? this._update() : this }, addOverlay: function(t, i) { return this._addLayer(t, i, !0), this._map ? this._update() : this }, removeLayer: function(t) { t.off("add remove", this._onLayerChange, this); var i = this._getLayer(n(t)); return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this }, expand: function() { pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null; var t = this._map.getSize().y - (this._container.offsetTop + 50); return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this }, collapse: function() { return mt(this._container, "leaflet-control-layers-expanded"), this }, _initLayout: function() { var t = "leaflet-control-layers",
					i = this._container = ht("div", t),
					e = this.options.collapsed;
				i.setAttribute("aria-haspopup", !0), J(i), X(i); var n = this._form = ht("form", t + "-list");
				e && (this._map.on("click", this.collapse, this), bi || V(i, { mouseenter: this.expand, mouseleave: this.collapse }, this)); var o = this._layersLink = ht("a", t + "-toggle", i);
				o.href = "#", o.title = "Layers", Hi ? (V(o, "click", Q), V(o, "click", this.expand, this)) : V(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = ht("div", t + "-base", n), this._separator = ht("div", t + "-separator", n), this._overlaysList = ht("div", t + "-overlays", n), i.appendChild(n) }, _getLayer: function(t) { for (var i = 0; i < this._layers.length; i++)
					if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i] }, _addLayer: function(t, i, n) { this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: i, overlay: n }), this.options.sortLayers && this._layers.sort(e(function(t, i) { return this.options.sortFunction(t.layer, i.layer, t.name, i.name) }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed() }, _update: function() { if (!this._container) return this;
				lt(this._baseLayersList), lt(this._overlaysList), this._layerControlInputs = []; var t, i, e, n, o = 0; for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1; return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this }, _onLayerChange: function(t) { this._handlingClick || this._update(); var i = this._getLayer(n(t.target)),
					e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
				e && this._map.fire(e, i) }, _createRadioElement: function(t, i) { var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
					n = document.createElement("div"); return n.innerHTML = e, n.firstChild }, _addItem: function(t) { var i, e = document.createElement("label"),
					o = this._map.hasLayer(t.layer);
				t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), V(i, "click", this._onInputClick, this); var s = document.createElement("span");
				s.innerHTML = " " + t.name; var r = document.createElement("div"); return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e }, _onInputClick: function() { var t, i, e = this._layerControlInputs,
					n = [],
					o = [];
				this._handlingClick = !0; for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i); for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]); for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
				this._handlingClick = !1, this._refocusOnMap() }, _checkDisabledLayers: function() { for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom }, _expandIfNotCollapsed: function() { return this._map && !this.options.collapsed && this.expand(), this }, _expand: function() { return this.expand() }, _collapse: function() { return this.collapse() } }),
		Pe = xe.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" }, onAdd: function(t) { var i = "leaflet-control-zoom",
					e = ht("div", i + " leaflet-bar"),
					n = this.options; return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e }, onRemove: function(t) { t.off("zoomend zoomlevelschange", this._updateDisabled, this) }, disable: function() { return this._disabled = !0, this._updateDisabled(), this }, enable: function() { return this._disabled = !1, this._updateDisabled(), this }, _zoomIn: function(t) {!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _zoomOut: function(t) {!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _createButton: function(t, i, e, n, o) { var s = ht("a", e, n); return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), J(s), V(s, "click", Q), V(s, "click", o, this), V(s, "click", this._refocusOnMap, this), s }, _updateDisabled: function() { var t = this._map,
					i = "leaflet-disabled";
				mt(this._zoomInButton, i), mt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, i) } });
	ye.mergeOptions({ zoomControl: !0 }), ye.addInitHook(function() { this.options.zoomControl && (this.zoomControl = new Pe, this.addControl(this.zoomControl)) }); var be = xe.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function(t) { var i = ht("div", "leaflet-control-scale"),
					e = this.options; return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i }, onRemove: function(t) { t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this) }, _addScales: function(t, i, e) { t.metric && (this._mScale = ht("div", i, e)), t.imperial && (this._iScale = ht("div", i, e)) }, _update: function() { var t = this._map,
					i = t.getSize().y / 2,
					e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
				this._updateScales(e) }, _updateScales: function(t) { this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t) }, _updateMetric: function(t) { var i = this._getRoundNum(t),
					e = i < 1e3 ? i + " m" : i / 1e3 + " km";
				this._updateScale(this._mScale, e, i / t) }, _updateImperial: function(t) { var i, e, n, o = 3.2808399 * t;
				o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o)) }, _updateScale: function(t, i, e) { t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i }, _getRoundNum: function(t) { var i = Math.pow(10, (Math.floor(t) + "").length - 1),
					e = t / i; return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e } }),
		Te = xe.extend({ options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function(t) { l(this, t), this._attributions = {} }, onAdd: function(t) { t.attributionControl = this, this._container = ht("div", "leaflet-control-attribution"), J(this._container); for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution()); return this._update(), this._container }, setPrefix: function(t) { return this.options.prefix = t, this._update(), this }, addAttribution: function(t) { return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this }, removeAttribution: function(t) { return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this }, _update: function() { if (this._map) { var t = []; for (var i in this._attributions) this._attributions[i] && t.push(i); var e = [];
					this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ") } } });
	ye.mergeOptions({ attributionControl: !0 }), ye.addInitHook(function() { this.options.attributionControl && (new Te).addTo(this) });
	xe.Layers = Le, xe.Zoom = Pe, xe.Scale = be, xe.Attribution = Te, we.layers = function(t, i, e) { return new Le(t, i, e) }, we.zoom = function(t) { return new Pe(t) }, we.scale = function(t) { return new be(t) }, we.attribution = function(t) { return new Te(t) }; var ze, Me = v.extend({ initialize: function(t) { this._map = t }, enable: function() { return this._enabled ? this : (this._enabled = !0, this.addHooks(), this) }, disable: function() { return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this }, enabled: function() { return !!this._enabled } }),
		Ce = { Events: hi },
		Ze = Hi ? "touchstart mousedown" : "mousedown",
		Ee = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
		Se = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
		ke = ui.extend({ options: { clickTolerance: 3 }, initialize: function(t, i, e, n) { l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e }, enable: function() { this._enabled || (V(this._dragStartTarget, Ze, this._onDown, this), this._enabled = !0) }, disable: function() { this._enabled && (ke._dragging === this && this.finishDrag(), G(this._dragStartTarget, Ze, this._onDown, this), this._enabled = !1, this._moved = !1) }, _onDown: function(t) { if (!t._simulated && this._enabled && (this._moved = !1, !dt(this._element, "leaflet-zoom-anim") && !(ke._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (ke._dragging = this, this._preventOutline && zt(this._element), bt(), pi(), this._moving)))) { this.fire("down"); var i = t.touches ? t.touches[0] : t;
					this._startPoint = new x(i.clientX, i.clientY), V(document, Se[t.type], this._onMove, this), V(document, Ee[t.type], this._onUp, this) } }, _onMove: function(t) { if (!t._simulated && this._enabled)
					if (t.touches && t.touches.length > 1) this._moved = !0;
					else { var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
							e = new x(i.clientX, i.clientY).subtract(this._startPoint);
						(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || ($(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pt(this._element).subtract(e), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0))) } }, _updatePosition: function() { var t = { originalEvent: this._lastEvent };
				this.fire("predrag", t), Lt(this._element, this._newPos), this.fire("drag", t) }, _onUp: function(t) {!t._simulated && this._enabled && this.finishDrag() }, finishDrag: function() { mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null); for (var t in Se) G(document, Se[t], this._onMove, this), G(document, Ee[t], this._onUp, this);
				Tt(), mi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1, ke._dragging = !1 } }),
		Be = (Object.freeze || Object)({ simplify: Ct, pointToSegmentDistance: Zt, closestPointOnSegment: function(t, i, e) { return Rt(t, i, e) }, clipSegment: Bt, _getEdgeIntersection: It, _getBitCode: At, _sqClosestPointOnSegment: Rt, isFlat: Dt, _flat: Nt }),
		Ie = (Object.freeze || Object)({ clipPolygon: jt }),
		Ae = { project: function(t) { return new x(t.lng, t.lat) }, unproject: function(t) { return new M(t.y, t.x) }, bounds: new P([-180, -90], [180, 90]) },
		Oe = { R: 6378137, R_MINOR: 6356752.314245179, bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]), project: function(t) { var i = Math.PI / 180,
					e = this.R,
					n = t.lat * i,
					o = this.R_MINOR / e,
					s = Math.sqrt(1 - o * o),
					r = s * Math.sin(n),
					a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2); return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n) }, unproject: function(t) { for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a; return new M(a * e, t.x * e / n) } },
		Re = (Object.freeze || Object)({ LonLat: Ae, Mercator: Oe, SphericalMercator: _i }),
		De = i({}, ci, { code: "EPSG:3395", projection: Oe, transformation: function() { var t = .5 / (Math.PI * Oe.R); return E(t, .5, -t, .5) }() }),
		Ne = i({}, ci, { code: "EPSG:4326", projection: Ae, transformation: E(1 / 180, 1, -1 / 180, .5) }),
		je = i({}, li, { projection: Ae, transformation: E(1, 0, -1, 0), scale: function(t) { return Math.pow(2, t) }, zoom: function(t) { return Math.log(t) / Math.LN2 }, distance: function(t, i) { var e = i.lng - t.lng,
					n = i.lat - t.lat; return Math.sqrt(e * e + n * n) }, infinite: !0 });
	li.Earth = ci, li.EPSG3395 = De, li.EPSG3857 = gi, li.EPSG900913 = vi, li.EPSG4326 = Ne, li.Simple = je; var We = ui.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function(t) { return t.addLayer(this), this }, remove: function() { return this.removeFrom(this._map || this._mapToAdd) }, removeFrom: function(t) { return t && t.removeLayer(this), this }, getPane: function(t) { return this._map.getPane(t ? this.options[t] || t : this.options.pane) }, addInteractiveTarget: function(t) { return this._map._targets[n(t)] = this, this }, removeInteractiveTarget: function(t) { return delete this._map._targets[n(t)], this }, getAttribution: function() { return this.options.attribution }, _layerAdd: function(t) { var i = t.target; if (i.hasLayer(this)) { if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) { var e = this.getEvents();
					i.on(e, this), this.once("remove", function() { i.off(e, this) }, this) } this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this }) } } });
	ye.include({ addLayer: function(t) { if (!t._layerAdd) throw new Error("The provided object is not a Layer."); var i = n(t); return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this) }, removeLayer: function(t) { var i = n(t); return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this }, hasLayer: function(t) { return !!t && n(t) in this._layers }, eachLayer: function(t, i) { for (var e in this._layers) t.call(i, this._layers[e]); return this }, _addLayers: function(t) { for (var i = 0, e = (t = t ? ei(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i]) }, _addZoomLimit: function(t) {!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels()) }, _removeZoomLimit: function(t) { var i = n(t);
			this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels()) }, _updateZoomLevels: function() { var t = 1 / 0,
				i = -1 / 0,
				e = this._getZoomSpan(); for (var n in this._zoomBoundLayers) { var o = this._zoomBoundLayers[n].options;
				t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom) } this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom) } }); var He = We.extend({ initialize: function(t) { this._layers = {}; var i, e; if (t)
					for (i = 0, e = t.length; i < e; i++) this.addLayer(t[i]) }, addLayer: function(t) { var i = this.getLayerId(t); return this._layers[i] = t, this._map && this._map.addLayer(t), this }, removeLayer: function(t) { var i = t in this._layers ? t : this.getLayerId(t); return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this }, hasLayer: function(t) { return !!t && (t in this._layers || this.getLayerId(t) in this._layers) }, clearLayers: function() { for (var t in this._layers) this.removeLayer(this._layers[t]); return this }, invoke: function(t) { var i, e, n = Array.prototype.slice.call(arguments, 1); for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n); return this }, onAdd: function(t) { for (var i in this._layers) t.addLayer(this._layers[i]) }, onRemove: function(t) { for (var i in this._layers) t.removeLayer(this._layers[i]) }, eachLayer: function(t, i) { for (var e in this._layers) t.call(i, this._layers[e]); return this }, getLayer: function(t) { return this._layers[t] }, getLayers: function() { var t = []; for (var i in this._layers) t.push(this._layers[i]); return t }, setZIndex: function(t) { return this.invoke("setZIndex", t) }, getLayerId: function(t) { return n(t) } }),
		Fe = He.extend({ addLayer: function(t) { return this.hasLayer(t) ? this : (t.addEventParent(this), He.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t })) }, removeLayer: function(t) { return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), He.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this }, setStyle: function(t) { return this.invoke("setStyle", t) }, bringToFront: function() { return this.invoke("bringToFront") }, bringToBack: function() { return this.invoke("bringToBack") }, getBounds: function() { var t = new T; for (var i in this._layers) { var e = this._layers[i];
					t.extend(e.getBounds ? e.getBounds() : e.getLatLng()) } return t } }),
		Ue = v.extend({ initialize: function(t) { l(this, t) }, createIcon: function(t) { return this._createIcon("icon", t) }, createShadow: function(t) { return this._createIcon("shadow", t) }, _createIcon: function(t, i) { var e = this._getIconUrl(t); if (!e) { if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs)."); return null } var n = this._createImg(e, i && "IMG" === i.tagName ? i : null); return this._setIconStyles(n, t), n }, _setIconStyles: function(t, i) { var e = this.options,
					n = e[i + "Size"]; "number" == typeof n && (n = [n, n]); var o = w(n),
					s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
				t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px") }, _createImg: function(t, i) { return i = i || document.createElement("img"), i.src = t, i }, _getIconUrl: function(t) { return Vi && this.options[t + "RetinaUrl"] || this.options[t + "Url"] } }),
		Ve = Ue.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t) { return Ve.imagePath || (Ve.imagePath = this._detectIconPath()), (this.options.imagePath || Ve.imagePath) + Ue.prototype._getIconUrl.call(this, t) }, _detectIconPath: function() { var t = ht("div", "leaflet-default-icon-path", document.body),
					i = at(t, "background-image") || at(t, "backgroundImage"); return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") } }),
		Ge = Me.extend({ initialize: function(t) { this._marker = t }, addHooks: function() { var t = this._marker._icon;
				this._draggable || (this._draggable = new ke(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), pt(t, "leaflet-marker-draggable") }, removeHooks: function() { this._draggable.off({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable") }, moved: function() { return this._draggable && this._draggable._moved }, _onDragStart: function() { this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart") }, _onDrag: function(t) { var i = this._marker,
					e = i._shadow,
					n = Pt(i._icon),
					o = i._map.layerPointToLatLng(n);
				e && Lt(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t) }, _onDragEnd: function(t) { delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t) } }),
		qe = We.extend({ options: { icon: new Ve, interactive: !0, draggable: !1, keyboard: !0, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", bubblingMouseEvents: !1 }, initialize: function(t, i) { l(this, i), this._latlng = C(t) }, onAdd: function(t) { this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update() }, onRemove: function(t) { this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow() }, getEvents: function() { return { zoom: this.update, viewreset: this.update } }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { var i = this._latlng; return this._latlng = C(t), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng }) }, setZIndexOffset: function(t) { return this.options.zIndexOffset = t, this.update() }, setIcon: function(t) { return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this }, getElement: function() { return this._icon }, update: function() { if (this._icon) { var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t) } return this }, _initIcon: function() { var t = this.options,
					i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					e = t.icon.createIcon(this._icon),
					n = !1;
				e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), t.alt && (e.alt = t.alt)), pt(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }); var o = t.icon.createShadow(this._shadow),
					s = !1;
				o !== this._shadow && (this._removeShadow(), s = !0), o && (pt(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow) }, _removeIcon: function() { this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), ut(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null }, _removeShadow: function() { this._shadow && ut(this._shadow), this._shadow = null }, _setPos: function(t) { Lt(this._icon, t), this._shadow && Lt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex() }, _updateZIndex: function(t) { this._icon.style.zIndex = this._zIndex + t }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(i) }, _initInteraction: function() { if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ge)) { var t = this.options.draggable;
					this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ge(this), t && this.dragging.enable() } }, setOpacity: function(t) { return this.options.opacity = t, this._map && this._updateOpacity(), this }, _updateOpacity: function() { var t = this.options.opacity;
				vt(this._icon, t), this._shadow && vt(this._shadow, t) }, _bringToFront: function() { this._updateZIndex(this.options.riseOffset) }, _resetZIndex: function() { this._updateZIndex(0) }, _getPopupAnchor: function() { return this.options.icon.options.popupAnchor || [0, 0] }, _getTooltipAnchor: function() { return this.options.icon.options.tooltipAnchor || [0, 0] } }),
		Ke = We.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: .2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function(t) { this._renderer = t.getRenderer(this) }, onAdd: function() { this._renderer._initPath(this), this._reset(), this._renderer._addPath(this) }, onRemove: function() { this._renderer._removePath(this) }, redraw: function() { return this._map && this._renderer._updatePath(this), this }, setStyle: function(t) { return l(this, t), this._renderer && this._renderer._updateStyle(this), this }, bringToFront: function() { return this._renderer && this._renderer._bringToFront(this), this }, bringToBack: function() { return this._renderer && this._renderer._bringToBack(this), this }, getElement: function() { return this._path }, _reset: function() { this._project(), this._update() }, _clickTolerance: function() { return (this.options.stroke ? this.options.weight / 2 : 0) + (Hi ? 10 : 0) } }),
		Ye = Ke.extend({ options: { fill: !0, radius: 10 }, initialize: function(t, i) { l(this, i), this._latlng = C(t), this._radius = this.options.radius }, setLatLng: function(t) { return this._latlng = C(t), this.redraw(), this.fire("move", { latlng: this._latlng }) }, getLatLng: function() { return this._latlng }, setRadius: function(t) { return this.options.radius = this._radius = t, this.redraw() }, getRadius: function() { return this._radius }, setStyle: function(t) { var i = t && t.radius || this._radius; return Ke.prototype.setStyle.call(this, t), this.setRadius(i), this }, _project: function() { this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds() }, _updateBounds: function() { var t = this._radius,
					i = this._radiusY || t,
					e = this._clickTolerance(),
					n = [t + e, i + e];
				this._pxBounds = new P(this._point.subtract(n), this._point.add(n)) }, _update: function() { this._map && this._updatePath() }, _updatePath: function() { this._renderer._updateCircle(this) }, _empty: function() { return this._radius && !this._renderer._bounds.intersects(this._pxBounds) }, _containsPoint: function(t) { return t.distanceTo(this._point) <= this._radius + this._clickTolerance() } }),
		Xe = Ye.extend({ initialize: function(t, e, n) { if ("number" == typeof e && (e = i({}, n, { radius: e })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
				this._mRadius = this.options.radius }, setRadius: function(t) { return this._mRadius = t, this.redraw() }, getRadius: function() { return this._mRadius }, getBounds: function() { var t = [this._radius, this._radiusY || this._radius]; return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t))) }, setStyle: Ke.prototype.setStyle, _project: function() { var t = this._latlng.lng,
					i = this._latlng.lat,
					e = this._map,
					n = e.options.crs; if (n.distance === ci.distance) { var o = Math.PI / 180,
						s = this._mRadius / ci.R / o,
						r = e.project([i + s, t]),
						a = e.project([i - s, t]),
						h = r.add(a).divideBy(2),
						u = e.unproject(h).lat,
						l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
					(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : Math.max(Math.round(h.x - e.project([u, t - l]).x), 1), this._radiusY = Math.max(Math.round(h.y - r.y), 1) } else { var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
					this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x } this._updateBounds() } }),
		Je = Ke.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function(t, i) { l(this, i), this._setLatLngs(t) }, getLatLngs: function() { return this._latlngs }, setLatLngs: function(t) { return this._setLatLngs(t), this.redraw() }, isEmpty: function() { return !this._latlngs.length }, closestLayerPoint: function(t) { for (var i, e, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length; r < a; r++)
					for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) { var c = s(t, i = h[u - 1], e = h[u], !0);
						c < n && (n = c, o = s(t, i, e)) }
				return o && (o.distance = Math.sqrt(n)), o }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, i, e, n, o, s, r, a = this._rings[0],
					h = a.length; if (!h) return null; for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2; if (0 === i) return this._map.layerPointToLatLng(a[0]); for (t = 0, n = 0; t < h - 1; t++)
					if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]) }, getBounds: function() { return this._bounds }, addLatLng: function(t, i) { return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw() }, _setLatLngs: function(t) { this._bounds = new T, this._latlngs = this._convertLatLngs(t) }, _defaultShape: function() { return Dt(this._latlngs) ? this._latlngs : this._latlngs[0] }, _convertLatLngs: function(t) { for (var i = [], e = Dt(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]); return i }, _project: function() { var t = new P;
				this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t); var i = this._clickTolerance(),
					e = new x(i, i);
				this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t) }, _projectLatlngs: function(t, i, e) { var n, o, s = t[0] instanceof M,
					r = t.length; if (s) { for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
					i.push(o) } else
					for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e) }, _clipPoints: function() { var t = this._renderer._bounds; if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else { var i, e, n, o, s, r, a, h = this._parts; for (i = 0, n = 0, o = this._rings.length; i < o; i++)
							for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = Bt(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++)) } }, _simplifyPoints: function() { for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Ct(t[e], i) }, _update: function() { this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath()) }, _updatePath: function() { this._renderer._updatePoly(this) }, _containsPoint: function(t, i) { var e, n, o, s, r, a, h = this._clickTolerance(); if (!this._pxBounds || !this._pxBounds.contains(t)) return !1; for (e = 0, s = this._parts.length; e < s; e++)
					for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
						if ((i || 0 !== n) && Zt(t, a[o], a[n]) <= h) return !0; return !1 } });
	Je._flat = Nt; var $e = Je.extend({ options: { fill: !0 }, isEmpty: function() { return !this._latlngs.length || !this._latlngs[0].length }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, i, e, n, o, s, r, a, h, u = this._rings[0],
					l = u.length; if (!l) return null; for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o; return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h) }, _convertLatLngs: function(t) { var i = Je.prototype._convertLatLngs.call(this, t),
					e = i.length; return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i }, _setLatLngs: function(t) { Je.prototype._setLatLngs.call(this, t), Dt(this._latlngs) && (this._latlngs = [this._latlngs]) }, _defaultShape: function() { return Dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0] }, _clipPoints: function() { var t = this._renderer._bounds,
					i = this.options.weight,
					e = new x(i, i); if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else
						for (var n, o = 0, s = this._rings.length; o < s; o++)(n = jt(this._rings[o], t, !0)).length && this._parts.push(n) }, _updatePath: function() { this._renderer._updatePoly(this, !0) }, _containsPoint: function(t) { var i, e, n, o, s, r, a, h, u = !1; if (!this._pxBounds.contains(t)) return !1; for (o = 0, a = this._parts.length; o < a; o++)
					for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u); return u || Je.prototype._containsPoint.call(this, t, !0) } }),
		Qe = Fe.extend({ initialize: function(t, i) { l(this, i), this._layers = {}, t && this.addData(t) }, addData: function(t) { var i, e, n, o = ei(t) ? t : t.features; if (o) { for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n); return this } var s = this.options; if (s.filter && !s.filter(t)) return this; var r = Wt(t, s); return r ? (r.feature = qt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this }, resetStyle: function(t) { return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this }, setStyle: function(t) { return this.eachLayer(function(i) { this._setLayerStyle(i, t) }, this) }, _setLayerStyle: function(t, i) { "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i) } }),
		tn = { toGeoJSON: function(t) { return Gt(this, { type: "Point", coordinates: Ut(this.getLatLng(), t) }) } };
	qe.include(tn), Xe.include(tn), Ye.include(tn), Je.include({ toGeoJSON: function(t) { var i = !Dt(this._latlngs),
				e = Vt(this._latlngs, i ? 1 : 0, !1, t); return Gt(this, { type: (i ? "Multi" : "") + "LineString", coordinates: e }) } }), $e.include({ toGeoJSON: function(t) { var i = !Dt(this._latlngs),
				e = i && !Dt(this._latlngs[0]),
				n = Vt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t); return i || (n = [n]), Gt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n }) } }), He.include({ toMultiPoint: function(t) { var i = []; return this.eachLayer(function(e) { i.push(e.toGeoJSON(t).geometry.coordinates) }), Gt(this, { type: "MultiPoint", coordinates: i }) }, toGeoJSON: function(t) { var i = this.feature && this.feature.geometry && this.feature.geometry.type; if ("MultiPoint" === i) return this.toMultiPoint(t); var e = "GeometryCollection" === i,
				n = []; return this.eachLayer(function(i) { if (i.toGeoJSON) { var o = i.toGeoJSON(t); if (e) n.push(o.geometry);
					else { var s = qt(o); "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s) } } }), e ? Gt(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n } } }); var en = Kt,
		nn = We.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t, i, e) { this._url = t, this._bounds = z(i), l(this, e) }, onAdd: function() { this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset() }, onRemove: function() { ut(this._image), this.options.interactive && this.removeInteractiveTarget(this._image) }, setOpacity: function(t) { return this.options.opacity = t, this._image && this._updateOpacity(), this }, setStyle: function(t) { return t.opacity && this.setOpacity(t.opacity), this }, bringToFront: function() { return this._map && ct(this._image), this }, bringToBack: function() { return this._map && _t(this._image), this }, setUrl: function(t) { return this._url = t, this._image && (this._image.src = t), this }, setBounds: function(t) { return this._bounds = z(t), this._map && this._reset(), this }, getEvents: function() { var t = { zoom: this._reset, viewreset: this._reset }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, getBounds: function() { return this._bounds }, getElement: function() { return this._image }, _initImage: function() { var t = this._image = ht("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : "") + (this.options.className || ""));
				t.onselectstart = r, t.onmousemove = r, t.onload = e(this.fire, this, "load"), t.onerror = e(this._overlayOnError, this, "error"), this.options.crossOrigin && (t.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t.src = this._url, t.alt = this.options.alt }, _animateZoom: function(t) { var i = this._map.getZoomScale(t.zoom),
					e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				wt(this._image, e, i) }, _reset: function() { var t = this._image,
					i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					e = i.getSize();
				Lt(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px" }, _updateOpacity: function() { vt(this._image, this.options.opacity) }, _updateZIndex: function() { this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex) }, _overlayOnError: function() { this.fire("error"); var t = this.options.errorOverlayUrl;
				t && this._url !== t && (this._url = t, this._image.src = t) } }),
		on = nn.extend({ options: { autoplay: !0, loop: !0 }, _initImage: function() { var t = "VIDEO" === this._url.tagName,
					i = this._image = t ? this._url : ht("video"); if (i.class = i.class || "", i.class += "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), !t) { ei(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop; for (var n = 0; n < this._url.length; n++) { var o = ht("source");
						o.src = this._url[n], i.appendChild(o) } } } }),
		sn = We.extend({ options: { offset: [0, 7], className: "", pane: "popupPane" }, initialize: function(t, i) { l(this, t), this._source = i }, onAdd: function(t) { this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vt(this._container, 1), this.bringToFront() }, onRemove: function(t) { t._fadeAnimated ? (vt(this._container, 0), this._removeTimeout = setTimeout(e(ut, void 0, this._container), 200)) : ut(this._container) }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this }, getContent: function() { return this._content }, setContent: function(t) { return this._content = t, this.update(), this }, getElement: function() { return this._container }, update: function() { this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan()) }, getEvents: function() { var t = { zoom: this._updatePosition, viewreset: this._updatePosition }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, isOpen: function() { return !!this._map && this._map.hasLayer(this) }, bringToFront: function() { return this._map && ct(this._container), this }, bringToBack: function() { return this._map && _t(this._container), this }, _updateContent: function() { if (this._content) { var t = this._contentNode,
						i = "function" == typeof this._content ? this._content(this._source || this) : this._content; if ("string" == typeof i) t.innerHTML = i;
					else { for (; t.hasChildNodes();) t.removeChild(t.firstChild);
						t.appendChild(i) } this.fire("contentupdate") } }, _updatePosition: function() { if (this._map) { var t = this._map.latLngToLayerPoint(this._latlng),
						i = w(this.options.offset),
						e = this._getAnchor();
					this._zoomAnimated ? Lt(this._container, t.add(e)) : i = i.add(t).add(e); var n = this._containerBottom = -i.y,
						o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
					this._container.style.bottom = n + "px", this._container.style.left = o + "px" } }, _getAnchor: function() { return [0, 0] } }),
		rn = sn.extend({ options: { maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, className: "" }, openOn: function(t) { return t.openPopup(this), this }, onAdd: function(t) { sn.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ke || this._source.on("preclick", Y)) }, onRemove: function(t) { sn.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ke || this._source.off("preclick", Y)) }, getEvents: function() { var t = sn.prototype.getEvents.call(this); return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t }, _close: function() { this._map && this._map.closePopup(this) }, _initLayout: function() { var t = "leaflet-popup",
					i = this._container = ht("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
					e = this._wrapper = ht("div", t + "-content-wrapper", i); if (this._contentNode = ht("div", t + "-content", e), J(e), X(this._contentNode), V(e, "contextmenu", Y), this._tipContainer = ht("div", t + "-tip-container", i), this._tip = ht("div", t + "-tip", this._tipContainer), this.options.closeButton) { var n = this._closeButton = ht("a", t + "-close-button", i);
					n.href = "#close", n.innerHTML = "&#215;", V(n, "click", this._onCloseButtonClick, this) } }, _updateLayout: function() { var t = this._contentNode,
					i = t.style;
				i.width = "", i.whiteSpace = "nowrap"; var e = t.offsetWidth;
				e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = ""; var n = t.offsetHeight,
					o = this.options.maxHeight;
				o && n > o ? (i.height = o + "px", pt(t, "leaflet-popup-scrolled")) : mt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					e = this._getAnchor();
				Lt(this._container, i.add(e)) }, _adjustPan: function() { if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) { var t = this._map,
						i = parseInt(at(this._container, "marginBottom"), 10) || 0,
						e = this._container.offsetHeight + i,
						n = this._containerWidth,
						o = new x(this._containerLeft, -e - this._containerBottom);
					o._add(Pt(this._container)); var s = t.layerPointToContainerPoint(o),
						r = w(this.options.autoPanPadding),
						a = w(this.options.autoPanPaddingTopLeft || r),
						h = w(this.options.autoPanPaddingBottomRight || r),
						u = t.getSize(),
						l = 0,
						c = 0;
					s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]) } }, _onCloseButtonClick: function(t) { this._close(), Q(t) }, _getAnchor: function() { return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]) } });
	ye.mergeOptions({ closePopupOnClick: !0 }), ye.include({ openPopup: function(t, i, e) { return t instanceof rn || (t = new rn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t)) }, closePopup: function(t) { return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this } }), We.include({ bindPopup: function(t, i) { return t instanceof rn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new rn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this }, unbindPopup: function() { return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this }, openPopup: function(t, i) { if (t instanceof We || (i = t, t = this), t instanceof Fe)
				for (var e in this._layers) { t = this._layers[e]; break }
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this }, closePopup: function() { return this._popup && this._popup._close(), this }, togglePopup: function(t) { return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this }, isPopupOpen: function() { return !!this._popup && this._popup.isOpen() }, setPopupContent: function(t) { return this._popup && this._popup.setContent(t), this }, getPopup: function() { return this._popup }, _openPopup: function(t) { var i = t.layer || t.target;
			this._popup && this._map && (Q(t), i instanceof Ke ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng)) }, _movePopup: function(t) { this._popup.setLatLng(t.latlng) }, _onKeyPress: function(t) { 13 === t.originalEvent.keyCode && this._openPopup(t) } }); var an = sn.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: .9 }, onAdd: function(t) { sn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0) }, onRemove: function(t) { sn.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0) }, getEvents: function() { var t = sn.prototype.getEvents.call(this); return Hi && !this.options.permanent && (t.preclick = this._close), t }, _close: function() { this._map && this._map.closeTooltip(this) }, _initLayout: function() { var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
			this._contentNode = this._container = ht("div", t) }, _updateLayout: function() {}, _adjustPan: function() {}, _setPosition: function(t) { var i = this._map,
				e = this._container,
				n = i.latLngToContainerPoint(i.getCenter()),
				o = i.layerPointToContainerPoint(t),
				s = this.options.direction,
				r = e.offsetWidth,
				a = e.offsetHeight,
				h = w(this.options.offset),
				u = this._getAnchor(); "top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mt(e, "leaflet-tooltip-right"), mt(e, "leaflet-tooltip-left"), mt(e, "leaflet-tooltip-top"), mt(e, "leaflet-tooltip-bottom"), pt(e, "leaflet-tooltip-" + s), Lt(e, t) }, _updatePosition: function() { var t = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(t) }, setOpacity: function(t) { this.options.opacity = t, this._container && vt(this._container, t) }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			this._setPosition(i) }, _getAnchor: function() { return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]) } });
	ye.include({ openTooltip: function(t, i, e) { return t instanceof an || (t = new an(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t) }, closeTooltip: function(t) { return t && this.removeLayer(t), this } }), We.include({ bindTooltip: function(t, i) { return t instanceof an ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new an(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this }, unbindTooltip: function() { return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this }, _initTooltipInteractions: function(t) { if (t || !this._tooltipHandlersAdded) { var i = t ? "off" : "on",
					e = { remove: this.closeTooltip, move: this._moveTooltip };
				this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Hi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t } }, openTooltip: function(t, i) { if (t instanceof We || (i = t, t = this), t instanceof Fe)
				for (var e in this._layers) { t = this._layers[e]; break }
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this }, closeTooltip: function() { return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this }, toggleTooltip: function(t) { return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this }, isTooltipOpen: function() { return this._tooltip.isOpen() }, setTooltipContent: function(t) { return this._tooltip && this._tooltip.setContent(t), this }, getTooltip: function() { return this._tooltip }, _openTooltip: function(t) { var i = t.layer || t.target;
			this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0) }, _moveTooltip: function(t) { var i, e, n = t.latlng;
			this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n) } }); var hn = Ue.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t) { var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
				e = this.options; if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) { var n = w(e.bgPos);
				i.style.backgroundPosition = -n.x + "px " + -n.y + "px" } return this._setIconStyles(i, "icon"), i }, createShadow: function() { return null } });
	Ue.Default = Ve; var un = We.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: Ri, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t) { l(this, t) }, onAdd: function() { this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update() }, beforeAdd: function(t) { t._addZoomLimit(this) }, onRemove: function(t) { this._removeAllTiles(), ut(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null }, bringToFront: function() { return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this }, bringToBack: function() { return this._map && (_t(this._container), this._setAutoZIndex(Math.min)), this }, getContainer: function() { return this._container }, setOpacity: function(t) { return this.options.opacity = t, this._updateOpacity(), this }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, isLoading: function() { return this._loading }, redraw: function() { return this._map && (this._removeAllTiles(), this._update()), this }, getEvents: function() { var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd }; return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, createTile: function() { return document.createElement("div") }, getTileSize: function() { var t = this.options.tileSize; return t instanceof x ? t : new x(t, t) }, _updateZIndex: function() { this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex) }, _setAutoZIndex: function(t) { for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
				isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex()) }, _updateOpacity: function() { if (this._map && !wi) { vt(this._container, this.options.opacity); var t = +new Date,
						i = !1,
						e = !1; for (var n in this._tiles) { var o = this._tiles[n]; if (o.current && o.loaded) { var s = Math.min(1, (t - o.loaded) / 200);
							vt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0) } } e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) } }, _onOpaqueTile: r, _initContainer: function() { this._container || (this._container = ht("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container)) }, _updateLevels: function() { var t = this._tileZoom,
					i = this.options.maxZoom; if (void 0 !== t) { for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ut(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]); var n = this._levels[t],
						o = this._map; return n || ((n = this._levels[t] = {}).el = ht("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n } }, _onUpdateLevel: r, _onRemoveLevel: r, _onCreateLevel: r, _pruneTiles: function() { if (this._map) { var t, i, e = this._map.getZoom(); if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
					else { for (t in this._tiles)(i = this._tiles[t]).retain = i.current; for (t in this._tiles)
							if ((i = this._tiles[t]).current && !i.active) { var n = i.coords;
								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2) }
						for (t in this._tiles) this._tiles[t].retain || this._removeTile(t) } } }, _removeTilesAtZoom: function(t) { for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i) }, _removeAllTiles: function() { for (var t in this._tiles) this._removeTile(t) }, _invalidateAll: function() { for (var t in this._levels) ut(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
				this._removeAllTiles(), this._tileZoom = null }, _retainParent: function(t, i, e, n) { var o = Math.floor(t / 2),
					s = Math.floor(i / 2),
					r = e - 1,
					a = new x(+o, +s);
				a.z = +r; var h = this._tileCoordsToKey(a),
					u = this._tiles[h]; return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n)) }, _retainChildren: function(t, i, e, n) { for (var o = 2 * t; o < 2 * t + 2; o++)
					for (var s = 2 * i; s < 2 * i + 2; s++) { var r = new x(o, s);
						r.z = e + 1; var a = this._tileCoordsToKey(r),
							h = this._tiles[a];
						h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n)) } }, _resetView: function(t) { var i = t && (t.pinch || t.flyTo);
				this._setView(this._map.getCenter(), this._map.getZoom(), i, i) }, _animateZoom: function(t) { this._setView(t.center, t.zoom, !0, t.noUpdate) }, _clampZoom: function(t) { var i = this.options; return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t }, _setView: function(t, i, e, n) { var o = this._clampZoom(Math.round(i));
				(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0); var s = this.options.updateWhenZooming && o !== this._tileZoom;
				n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i) }, _setZoomTransforms: function(t, i) { for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i) }, _setZoomTransform: function(t, i, e) { var n = this._map.getZoomScale(e, t.zoom),
					o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
				Oi ? wt(t.el, o, n) : Lt(t.el, o) }, _resetGrid: function() { var t = this._map,
					i = t.options.crs,
					e = this._tileSize = this.getTileSize(),
					n = this._tileZoom,
					o = this._map.getPixelWorldBounds(this._tileZoom);
				o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)] }, _onMoveEnd: function() { this._map && !this._map._animatingZoom && this._update() }, _getTiledPixelBounds: function(t) { var i = this._map,
					e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
					n = i.getZoomScale(e, this._tileZoom),
					o = i.project(t, this._tileZoom).floor(),
					s = i.getSize().divideBy(2 * n); return new P(o.subtract(s), o.add(s)) }, _update: function(t) { var i = this._map; if (i) { var e = this._clampZoom(i.getZoom()); if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) { var n = this._getTiledPixelBounds(t),
							o = this._pxBoundsToTileRange(n),
							s = o.getCenter(),
							r = [],
							a = this.options.keepBuffer,
							h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a])); if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles"); for (var u in this._tiles) { var l = this._tiles[u].coords;
							l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1) } if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
						else { for (var c = o.min.y; c <= o.max.y; c++)
								for (var _ = o.min.x; _ <= o.max.x; _++) { var d = new x(_, c);
									d.z = this._tileZoom, this._isValidTile(d) && (this._tiles[this._tileCoordsToKey(d)] || r.push(d)) }
							if (r.sort(function(t, i) { return t.distanceTo(s) - i.distanceTo(s) }), 0 !== r.length) { this._loading || (this._loading = !0, this.fire("loading")); var p = document.createDocumentFragment(); for (_ = 0; _ < r.length; _++) this._addTile(r[_], p);
								this._level.el.appendChild(p) } } } } }, _isValidTile: function(t) { var i = this._map.options.crs; if (!i.infinite) { var e = this._globalTileRange; if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1 } if (!this.options.bounds) return !0; var n = this._tileCoordsToBounds(t); return z(this.options.bounds).overlaps(n) }, _keyToBounds: function(t) { return this._tileCoordsToBounds(this._keyToTileCoords(t)) }, _tileCoordsToBounds: function(t) { var i = this._map,
					e = this.getTileSize(),
					n = t.scaleBy(e),
					o = n.add(e),
					s = new T(i.unproject(n, t.z), i.unproject(o, t.z)); return this.options.noWrap || i.wrapLatLngBounds(s), s }, _tileCoordsToKey: function(t) { return t.x + ":" + t.y + ":" + t.z }, _keyToTileCoords: function(t) { var i = t.split(":"),
					e = new x(+i[0], +i[1]); return e.z = +i[2], e }, _removeTile: function(t) { var i = this._tiles[t];
				i && (ut(i.el), delete this._tiles[t], this.fire("tileunload", { tile: i.el, coords: this._keyToTileCoords(t) })) }, _initTile: function(t) { pt(t, "leaflet-tile"); var i = this.getTileSize();
				t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, wi && this.options.opacity < 1 && vt(t, this.options.opacity), bi && !Ti && (t.style.WebkitBackfaceVisibility = "hidden") }, _addTile: function(t, i) { var n = this._getTilePos(t),
					o = this._tileCoordsToKey(t),
					s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
				this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), Lt(s, n), this._tiles[o] = { el: s, coords: t, current: !0 }, i.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t }) }, _tileReady: function(t, i, n) { if (this._map) { i && this.fire("tileerror", { error: i, tile: n, coords: t }); var o = this._tileCoordsToKey(t);
					(n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (vt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: n.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), wi || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250))) } }, _getTilePos: function(t) { return t.scaleBy(this.getTileSize()).subtract(this._level.origin) }, _wrapCoords: function(t) { var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y); return i.z = t.z, i }, _pxBoundsToTileRange: function(t) { var i = this.getTileSize(); return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1])) }, _noTilesToLoad: function() { for (var t in this._tiles)
					if (!this._tiles[t].loaded) return !1; return !0 } }),
		ln = un.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 }, initialize: function(t, i) { this._url = t, (i = l(this, i)).detectRetina && Vi && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), bi || this.on("tileunload", this._onTileRemove) }, setUrl: function(t, i) { return this._url = t, i || this.redraw(), this }, createTile: function(t, i) { var n = document.createElement("img"); return V(n, "load", e(this._tileOnLoad, this, i, n)), V(n, "error", e(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n }, getTileUrl: function(t) { var e = { r: Vi ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() }; if (this._map && !this._map.options.crs.infinite) { var n = this._globalTileRange.max.y - t.y;
					this.options.tms && (e.y = n), e["-y"] = n } return _(this._url, i(e, this.options)) }, _tileOnLoad: function(t, i) { wi ? setTimeout(e(t, this, null, i), 0) : t(null, i) }, _tileOnError: function(t, i, e) { var n = this.options.errorTileUrl;
				n && i.src !== n && (i.src = n), t(e, i) }, _onTileRemove: function(t) { t.tile.onload = null }, _getZoomForUrl: function() { var t = this._tileZoom,
					i = this.options.maxZoom,
					e = this.options.zoomReverse,
					n = this.options.zoomOffset; return e && (t = i - t), t + n }, _getSubdomain: function(t) { var i = Math.abs(t.x + t.y) % this.options.subdomains.length; return this.options.subdomains[i] }, _abortLoading: function() { var t, i; for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = ni, ut(i))) } }),
		cn = ln.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function(t, e) { this._url = t; var n = i({}, this.defaultWmsParams); for (var o in e) o in this.options || (n[o] = e[o]);
				e = l(this, e), n.width = n.height = e.tileSize * (e.detectRetina && Vi ? 2 : 1), this.wmsParams = n }, onAdd: function(t) { this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version); var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[i] = this._crs.code, ln.prototype.onAdd.call(this, t) }, getTileUrl: function(t) { var i = this._tileCoordsToBounds(t),
					e = this._crs.project(i.getNorthWest()),
					n = this._crs.project(i.getSouthEast()),
					o = (this._wmsVersion >= 1.3 && this._crs === Ne ? [n.y, e.x, e.y, n.x] : [e.x, n.y, n.x, e.y]).join(","),
					s = ln.prototype.getTileUrl.call(this, t); return s + c(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o }, setParams: function(t, e) { return i(this.wmsParams, t), e || this.redraw(), this } });
	ln.WMS = cn, Yt.wms = function(t, i) { return new cn(t, i) }; var _n = We.extend({ options: { padding: .1 }, initialize: function(t) { l(this, t), n(this), this._layers = this._layers || {} }, onAdd: function() { this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this) }, onRemove: function() { this.off("update", this._updatePaths, this), this._destroyContainer() }, getEvents: function() { var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd }; return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t }, _onAnimZoom: function(t) { this._updateTransform(t.center, t.zoom) }, _onZoom: function() { this._updateTransform(this._map.getCenter(), this._map.getZoom()) }, _updateTransform: function(t, i) { var e = this._map.getZoomScale(i, this._zoom),
					n = Pt(this._container),
					o = this._map.getSize().multiplyBy(.5 + this.options.padding),
					s = this._map.project(this._center, i),
					r = this._map.project(t, i).subtract(s),
					a = o.multiplyBy(-e).add(n).add(o).subtract(r);
				Oi ? wt(this._container, a, e) : Lt(this._container, a) }, _reset: function() { this._update(), this._updateTransform(this._center, this._zoom); for (var t in this._layers) this._layers[t]._reset() }, _onZoomEnd: function() { for (var t in this._layers) this._layers[t]._project() }, _updatePaths: function() { for (var t in this._layers) this._layers[t]._update() }, _update: function() { var t = this.options.padding,
					i = this._map.getSize(),
					e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
				this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom() } }),
		dn = _n.extend({ getEvents: function() { var t = _n.prototype.getEvents.call(this); return t.viewprereset = this._onViewPreReset, t }, _onViewPreReset: function() { this._postponeUpdatePaths = !0 }, onAdd: function() { _n.prototype.onAdd.call(this), this._draw() }, _initContainer: function() { var t = this._container = document.createElement("canvas");
				V(t, "mousemove", o(this._onMouseMove, 32, this), this), V(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), V(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d") }, _destroyContainer: function() { delete this._ctx, ut(this._container), G(this._container), delete this._container }, _updatePaths: function() { if (!this._postponeUpdatePaths) { this._redrawBounds = null; for (var t in this._layers) this._layers[t]._update();
					this._redraw() } }, _update: function() { if (!this._map._animatingZoom || !this._bounds) { this._drawnLayers = {}, _n.prototype._update.call(this); var t = this._bounds,
						i = this._container,
						e = t.getSize(),
						n = Vi ? 2 : 1;
					Lt(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Vi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update") } }, _reset: function() { _n.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths()) }, _initPath: function(t) { this._updateDashArray(t), this._layers[n(t)] = t; var i = t._order = { layer: t, prev: this._drawLast, next: null };
				this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast }, _addPath: function(t) { this._requestRedraw(t) }, _removePath: function(t) { var i = t._order,
					e = i.next,
					n = i.prev;
				e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t) }, _updatePath: function(t) { this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t) }, _updateStyle: function(t) { this._updateDashArray(t), this._requestRedraw(t) }, _updateDashArray: function(t) { if (t.options.dashArray) { var i, e = t.options.dashArray.split(","),
						n = []; for (i = 0; i < e.length; i++) n.push(Number(e[i]));
					t.options._dashArray = n } }, _requestRedraw: function(t) { this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this)) }, _extendRedrawBounds: function(t) { if (t._pxBounds) { var i = (t.options.weight || 0) + 1;
					this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])) } }, _redraw: function() { this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null }, _clear: function() { var t = this._redrawBounds; if (t) { var i = t.getSize();
					this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y) } else this._ctx.clearRect(0, 0, this._container.width, this._container.height) }, _draw: function() { var t, i = this._redrawBounds; if (this._ctx.save(), i) { var e = i.getSize();
					this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip() } this._drawing = !0; for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
				this._drawing = !1, this._ctx.restore() }, _updatePoly: function(t, i) { if (this._drawing) { var e, n, o, s, r = t._parts,
						a = r.length,
						h = this._ctx; if (a) { for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) { for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
							i && h.closePath() } this._fillStroke(h, t) } } }, _updateCircle: function(t) { if (this._drawing && !t._empty()) { var i = t._point,
						e = this._ctx,
						n = t._radius,
						o = (t._radiusY || n) / n;
					this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t) } }, _fillStroke: function(t, i) { var e = i.options;
				e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke()) }, _onClick: function(t) { for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
				e && (et(t), this._fireEvent([e], t)) }, _onMouseMove: function(t) { if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) { var i = this._map.mouseEventToLayerPoint(t);
					this._handleMouseHover(t, i) } }, _handleMouseOut: function(t) { var i = this._hoveredLayer;
				i && (mt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null) }, _handleMouseHover: function(t, i) { for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
				n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t) }, _fireEvent: function(t, i, e) { this._map._fireDOMEvent(i, e || i.type, t) }, _bringToFront: function(t) { var i = t._order,
					e = i.next,
					n = i.prev;
				e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t)) }, _bringToBack: function(t) { var i = t._order,
					e = i.next,
					n = i.prev;
				n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t)) } }),
		pn = function() { try { return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function(t) { return document.createElement("<lvml:" + t + ' class="lvml">') } } catch (t) { return function(t) { return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">') } } }(),
		mn = { _initContainer: function() { this._container = ht("div", "leaflet-vml-container") }, _update: function() { this._map._animatingZoom || (_n.prototype._update.call(this), this.fire("update")) }, _initPath: function(t) { var i = t._container = pn("shape");
				pt(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = pn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t }, _addPath: function(t) { var i = t._container;
				this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i) }, _removePath: function(t) { var i = t._container;
				ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)] }, _updateStyle: function(t) { var i = t._stroke,
					e = t._fill,
					n = t.options,
					o = t._container;
				o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = pn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = ei(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = pn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null) }, _updateCircle: function(t) { var i = t._point.round(),
					e = Math.round(t._radius),
					n = Math.round(t._radiusY || e);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600") }, _setPath: function(t, i) { t._path.v = i }, _bringToFront: function(t) { ct(t._container) }, _bringToBack: function(t) { _t(t._container) } },
		fn = Ki ? pn : S,
		gn = _n.extend({ getEvents: function() { var t = _n.prototype.getEvents.call(this); return t.zoomstart = this._onZoomStart, t }, _initContainer: function() { this._container = fn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = fn("g"), this._container.appendChild(this._rootGroup) }, _destroyContainer: function() { ut(this._container), G(this._container), delete this._container, delete this._rootGroup }, _onZoomStart: function() { this._update() }, _update: function() { if (!this._map._animatingZoom || !this._bounds) { _n.prototype._update.call(this); var t = this._bounds,
						i = t.getSize(),
						e = this._container;
					this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Lt(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update") } }, _initPath: function(t) { var i = t._path = fn("path");
				t.options.className && pt(i, t.options.className), t.options.interactive && pt(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t }, _addPath: function(t) { this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path) }, _removePath: function(t) { ut(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)] }, _updatePath: function(t) { t._project(), t._update() }, _updateStyle: function(t) { var i = t._path,
					e = t.options;
				i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none")) }, _updatePoly: function(t, i) { this._setPath(t, k(t._parts, i)) }, _updateCircle: function(t) { var i = t._point,
					e = t._radius,
					n = "a" + e + "," + (t._radiusY || e) + " 0 1,0 ",
					o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
				this._setPath(t, o) }, _setPath: function(t, i) { t._path.setAttribute("d", i) }, _bringToFront: function(t) { ct(t._path) }, _bringToBack: function(t) { _t(t._path) } });
	Ki && gn.include(mn), ye.include({ getRenderer: function(t) { var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer; return i || (i = this._renderer = this.options.preferCanvas && Xt() || Jt()), this.hasLayer(i) || this.addLayer(i), i }, _getPaneRenderer: function(t) { if ("overlayPane" === t || void 0 === t) return !1; var i = this._paneRenderers[t]; return void 0 === i && (i = gn && Jt({ pane: t }) || dn && Xt({ pane: t }), this._paneRenderers[t] = i), i } }); var vn = $e.extend({ initialize: function(t, i) { $e.prototype.initialize.call(this, this._boundsToLatLngs(t), i) }, setBounds: function(t) { return this.setLatLngs(this._boundsToLatLngs(t)) }, _boundsToLatLngs: function(t) { return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()] } });
	gn.create = fn, gn.pointsToPath = k, Qe.geometryToLayer = Wt, Qe.coordsToLatLng = Ht, Qe.coordsToLatLngs = Ft, Qe.latLngToCoords = Ut, Qe.latLngsToCoords = Vt, Qe.getFeature = Gt, Qe.asFeature = qt, ye.mergeOptions({ boxZoom: !0 }); var yn = Me.extend({ initialize: function(t) { this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this) }, addHooks: function() { V(this._container, "mousedown", this._onMouseDown, this) }, removeHooks: function() { G(this._container, "mousedown", this._onMouseDown, this) }, moved: function() { return this._moved }, _destroy: function() { ut(this._pane), delete this._pane }, _resetState: function() { this._resetStateTimeout = 0, this._moved = !1 }, _clearDeferredResetState: function() { 0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0) }, _onMouseDown: function(t) { if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
			this._clearDeferredResetState(), this._resetState(), pi(), bt(), this._startPoint = this._map.mouseEventToContainerPoint(t), V(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseMove: function(t) { this._moved || (this._moved = !0, this._box = ht("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t); var i = new P(this._point, this._startPoint),
				e = i.getSize();
			Lt(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px" }, _finish: function() { this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")), mi(), Tt(), G(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseUp: function(t) { if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) { this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0); var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
				this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i }) } }, _onKeyDown: function(t) { 27 === t.keyCode && this._finish() } });
	ye.addInitHook("addHandler", "boxZoom", yn), ye.mergeOptions({ doubleClickZoom: !0 }); var xn = Me.extend({ addHooks: function() { this._map.on("dblclick", this._onDoubleClick, this) }, removeHooks: function() { this._map.off("dblclick", this._onDoubleClick, this) }, _onDoubleClick: function(t) { var i = this._map,
				e = i.getZoom(),
				n = i.options.zoomDelta,
				o = t.originalEvent.shiftKey ? e - n : e + n; "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o) } });
	ye.addInitHook("addHandler", "doubleClickZoom", xn), ye.mergeOptions({ dragging: !0, inertia: !Ti, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: .2, worldCopyJump: !1, maxBoundsViscosity: 0 }); var wn = Me.extend({ addHooks: function() { if (!this._draggable) { var t = this._map;
				this._draggable = new ke(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this)) } pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [] }, removeHooks: function() { mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable() }, moved: function() { return this._draggable && this._draggable._moved }, moving: function() { return this._draggable && this._draggable._moving }, _onDragStart: function() { var t = this._map; if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) { var i = z(this._map.options.maxBounds);
				this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)) } else this._offsetLimit = null;
			t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []) }, _onDrag: function(t) { if (this._map.options.inertia) { var i = this._lastTime = +new Date,
					e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
				this._positions.push(e), this._times.push(i), i - this._times[0] > 50 && (this._positions.shift(), this._times.shift()) } this._map.fire("move", t).fire("drag", t) }, _onZoomEnd: function() { var t = this._map.getSize().divideBy(2),
				i = this._map.latLngToLayerPoint([0, 0]);
			this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x }, _viscousLimit: function(t, i) { return t - (t - i) * this._viscosity }, _onPreDragLimit: function() { if (this._viscosity && this._offsetLimit) { var t = this._draggable._newPos.subtract(this._draggable._startPos),
					i = this._offsetLimit;
				t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t) } }, _onPreDragWrap: function() { var t = this._worldWidth,
				i = Math.round(t / 2),
				e = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				o = (n - i + e) % t + i - e,
				s = (n + i + e) % t - i - e,
				r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
			this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r }, _onDragEnd: function(t) { var i = this._map,
				e = i.options,
				n = !e.inertia || this._times.length < 2; if (i.fire("dragend", t), n) i.fire("moveend");
			else { var o = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime - this._times[0]) / 1e3,
					r = e.easeLinearity,
					a = o.multiplyBy(r / s),
					h = a.distanceTo([0, 0]),
					u = Math.min(e.inertiaMaxSpeed, h),
					l = a.multiplyBy(u / h),
					c = u / (e.inertiaDeceleration * r),
					_ = l.multiplyBy(-c / 2).round();
				_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function() { i.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 }) })) : i.fire("moveend") } } });
	ye.addInitHook("addHandler", "dragging", wn), ye.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }); var Ln = Me.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t) { this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta) }, addHooks: function() { var t = this._map._container;
			t.tabIndex <= 0 && (t.tabIndex = "0"), V(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this) }, removeHooks: function() { this._removeHooks(), G(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this) }, _onMouseDown: function() { if (!this._focused) { var t = document.body,
					i = document.documentElement,
					e = t.scrollTop || i.scrollTop,
					n = t.scrollLeft || i.scrollLeft;
				this._map._container.focus(), window.scrollTo(n, e) } }, _onFocus: function() { this._focused = !0, this._map.fire("focus") }, _onBlur: function() { this._focused = !1, this._map.fire("blur") }, _setPanDelta: function(t) { var i, e, n = this._panKeys = {},
				o = this.keyCodes; for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0]; for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0]; for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t]; for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t] }, _setZoomDelta: function(t) { var i, e, n = this._zoomKeys = {},
				o = this.keyCodes; for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t; for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t }, _addHooks: function() { V(document, "keydown", this._onKeyDown, this) }, _removeHooks: function() { G(document, "keydown", this._onKeyDown, this) }, _onKeyDown: function(t) { if (!(t.altKey || t.ctrlKey || t.metaKey)) { var i, e = t.keyCode,
					n = this._map; if (e in this._panKeys) { if (n._panAnim && n._panAnim._inProgress) return;
					i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds) } else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
				else { if (27 !== e || !n._popup) return;
					n.closePopup() } Q(t) } } });
	ye.addInitHook("addHandler", "keyboard", Ln), ye.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }); var Pn = Me.extend({ addHooks: function() { V(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0 }, removeHooks: function() { G(this._map._container, "mousewheel", this._onWheelScroll, this) }, _onWheelScroll: function(t) { var i = it(t),
				n = this._map.options.wheelDebounceTime;
			this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date); var o = Math.max(n - (+new Date - this._startTime), 0);
			clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Q(t) }, _performZoom: function() { var t = this._map,
				i = t.getZoom(),
				e = this._map.options.zoomSnap || 0;
			t._stop(); var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
				o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
				s = e ? Math.ceil(o / e) * e : o,
				r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
			this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r)) } });
	ye.addInitHook("addHandler", "scrollWheelZoom", Pn), ye.mergeOptions({ tap: !0, tapTolerance: 15 }); var bn = Me.extend({ addHooks: function() { V(this._map._container, "touchstart", this._onDown, this) }, removeHooks: function() { G(this._map._container, "touchstart", this._onDown, this) }, _onDown: function(t) { if (t.touches) { if ($(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout); var i = t.touches[0],
					n = i.target;
				this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function() { this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i)) }, this), 1e3), this._simulateEvent("mousedown", i), V(document, { touchmove: this._onMove, touchend: this._onUp }, this) } }, _onUp: function(t) { if (clearTimeout(this._holdTimeout), G(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches) { var i = t.changedTouches[0],
					e = i.target;
				e && e.tagName && "a" === e.tagName.toLowerCase() && mt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i) } }, _isTapValid: function() { return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance }, _onMove: function(t) { var i = t.touches[0];
			this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i) }, _simulateEvent: function(t, i) { var e = document.createEvent("MouseEvents");
			e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e) } });
	Hi && !Wi && ye.addInitHook("addHandler", "tap", bn), ye.mergeOptions({ touchZoom: Hi && !Ti, bounceAtZoomLimits: !0 }); var Tn = Me.extend({ addHooks: function() { pt(this._map._container, "leaflet-touch-zoom"), V(this._map._container, "touchstart", this._onTouchStart, this) }, removeHooks: function() { mt(this._map._container, "leaflet-touch-zoom"), G(this._map._container, "touchstart", this._onTouchStart, this) }, _onTouchStart: function(t) { var i = this._map; if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) { var e = i.mouseEventToContainerPoint(t.touches[0]),
					n = i.mouseEventToContainerPoint(t.touches[1]);
				this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), V(document, "touchmove", this._onTouchMove, this), V(document, "touchend", this._onTouchEnd, this), $(t) } }, _onTouchMove: function(t) { if (t.touches && 2 === t.touches.length && this._zooming) { var i = this._map,
					n = i.mouseEventToContainerPoint(t.touches[0]),
					o = i.mouseEventToContainerPoint(t.touches[1]),
					s = n.distanceTo(o) / this._startDist; if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) { if (this._center = this._startLatLng, 1 === s) return } else { var r = n._add(o)._divideBy(2)._subtract(this._centerPoint); if (1 === s && 0 === r.x && 0 === r.y) return;
					this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom) } this._moved || (i._moveStart(!0), this._moved = !0), g(this._animRequest); var a = e(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });
				this._animRequest = f(a, this, !0), $(t) } }, _onTouchEnd: function() { this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), G(document, "touchmove", this._onTouchMove), G(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1 } });
	ye.addInitHook("addHandler", "touchZoom", Tn), ye.BoxZoom = yn, ye.DoubleClickZoom = xn, ye.Drag = wn, ye.Keyboard = Ln, ye.ScrollWheelZoom = Pn, ye.Tap = bn, ye.TouchZoom = Tn; var zn = window.L;
	window.L = t, Object.freeze = $t, t.version = "1.2.0", t.noConflict = function() { return window.L = zn, this }, t.Control = xe, t.control = we, t.Browser = Yi, t.Evented = ui, t.Mixin = Ce, t.Util = ai, t.Class = v, t.Handler = Me, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = le, t.DomUtil = ge, t.PosAnimation = ve, t.Draggable = ke, t.LineUtil = Be, t.PolyUtil = Ie, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = Z, t.transformation = E, t.Projection = Re, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = li, t.GeoJSON = Qe, t.geoJSON = Kt, t.geoJson = en, t.Layer = We, t.LayerGroup = He, t.layerGroup = function(t) { return new He(t) }, t.FeatureGroup = Fe, t.featureGroup = function(t) { return new Fe(t) }, t.ImageOverlay = nn, t.imageOverlay = function(t, i, e) { return new nn(t, i, e) }, t.VideoOverlay = on, t.videoOverlay = function(t, i, e) { return new on(t, i, e) }, t.DivOverlay = sn, t.Popup = rn, t.popup = function(t, i) { return new rn(t, i) }, t.Tooltip = an, t.tooltip = function(t, i) { return new an(t, i) }, t.Icon = Ue, t.icon = function(t) { return new Ue(t) }, t.DivIcon = hn, t.divIcon = function(t) { return new hn(t) }, t.Marker = qe, t.marker = function(t, i) { return new qe(t, i) }, t.TileLayer = ln, t.tileLayer = Yt, t.GridLayer = un, t.gridLayer = function(t) { return new un(t) }, t.SVG = gn, t.svg = Jt, t.Renderer = _n, t.Canvas = dn, t.canvas = Xt, t.Path = Ke, t.CircleMarker = Ye, t.circleMarker = function(t, i) { return new Ye(t, i) }, t.Circle = Xe, t.circle = function(t, i, e) { return new Xe(t, i, e) }, t.Polyline = Je, t.polyline = function(t, i) { return new Je(t, i) }, t.Polygon = $e, t.polygon = function(t, i) { return new $e(t, i) }, t.Rectangle = vn, t.rectangle = function(t, i) { return new vn(t, i) }, t.Map = ye, t.map = function(t, i) { return new ye(t, i) } });
! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.GeoSearch = t() : e.GeoSearch = t() }(this, function() { return function(e) {
		function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) { n(2), e.exports = n(7) }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(2),
			a = (r(i), function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }()),
			u = function() {
				function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					o(this, e), this.options = t } return a(e, [{ key: "getParamString", value: function(e) { return Object.keys(e).map(function(t) { return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]) }).join("&") } }, { key: "search", value: function(e) { return new Promise(function(t, n) { var r, o, i, a, u; return r = e.query, o = ~location.protocol.indexOf("http") ? location.protocol : "https:", i = this.endpoint({ query: r, protocol: o }), fetch(i).then(function(e) { return a = e, a.json().then(function(e) { return u = e, t(this.parse({ data: u })) }.$asyncbind(this, n), n) }.$asyncbind(this, n), n) }.$asyncbind(this)) } }]), e }();
		t.default = u }, function(e, t, n) { "use strict";

		function r(e, t) { for (var n = "" + t, r = "return " + n, o = n.match(/.*\(([^)]*)\)/)[1], i = /['"]!!!([^'"]*)['"]/g, a = [];;) { var u = i.exec(r); if (!u) break;
				a.push(u) } return a.reverse().forEach(function(t) { r = r.slice(0, t.index) + e[t[1]] + r.substr(t.index + t[0].length) }), r = r.replace(/\/\*[^*]*\*\//g, " ").replace(/\s+/g, " "), Function(o, r)() }

		function o(e, t) { if (Function.prototype.$asyncspawn || Object.defineProperty(Function.prototype, "$asyncspawn", { value: o, enumerable: !1, configurable: !0, writable: !0 }), this instanceof Function) { var n = this; return new e(function(e, r) {
					function o(t, n) { var a; try { if (a = t.call(i, n), a.done) { if (a.value !== e) { if (a.value && a.value === a.value.then) return a.value(e, r);
									e && e(a.value), e = null } return } a.value.then ? a.value.then(function(e) { o(i.next, e) }, function(e) { o(i.throw, e) }) : o(i.next, a.value) } catch (e) { return r && r(e), void(r = null) } } var i = n.call(t, e, r);
					o(i.next) }) } } var i = r({ zousan: "" + n(16), thenable: "" + n(15) }, function e(t, n) {
			function r() { return o.apply(t, arguments) } Function.prototype.$asyncbind || Object.defineProperty(Function.prototype, "$asyncbind", { value: e, enumerable: !1, configurable: !0, writable: !0 }), e.trampoline || (e.trampoline = function(e, t, n, r, o) { return function i(a) { for (; a;) { if (a.then) return a = a.then(i, r), o ? void 0 : a; try { if (a.pop) { if (a.length) return a.pop() ? t.call(e) : a;
								a = n } else a = a.call(e) } catch (e) { return r(e) } } } }), e.LazyThenable || (e.LazyThenable = "!!!thenable" (), e.EagerThenable = e.Thenable = (e.EagerThenableFactory = "!!!zousan")()); var o = this; switch (n) {
				case !0:
					return new e.Thenable(r);
				case 0:
					return new e.LazyThenable(r);
				case void 0:
					return r.then = r, r;
				default:
					return function() { try { return o.apply(t, arguments) } catch (e) { return n(e) } } } });
		i(), o(), e.exports = { $asyncbind: i, $asyncspawn: o } }, function(e, t) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var n = t.createElement = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
				r = document.createElement(e); return r.className = t, n && n.appendChild(r), r };
		t.createScriptElement = function(e, t) { var r = n("script", null, document.body); return r.setAttribute("type", "text/javascript"), new Promise(function(n) { window[t] = function(e) { r.remove(), delete window[t], n(e) }, r.setAttribute("src", e) }) }, t.addClassName = function(e, t) { e && !e.classList.contains(t) && e.classList.add(t) }, t.removeClassName = function(e, t) { e && e.classList.contains(t) && e.classList.remove(t) } }, function(e, t) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var n = t.ENTER_KEY = 13,
			r = t.ESCAPE_KEY = 27,
			o = t.ARROW_DOWN_KEY = 40,
			i = t.ARROW_UP_KEY = 38,
			a = t.ARROW_LEFT_KEY = 37,
			u = t.ARROW_RIGHT_KEY = 39;
		t.SPECIAL_KEYS = [n, r, o, i, a, u] }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(2),
			a = (r(i), function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }()),
			u = n(3),
			s = n(4),
			c = function() {
				function e() { var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						r = n.handleSubmit,
						i = void 0 === r ? function() {} : r,
						a = n.searchLabel,
						s = void 0 === a ? "search" : a,
						c = n.classNames,
						l = void 0 === c ? {} : c;
					o(this, e); var f = (0, u.createElement)("div", ["geosearch", l.container].join(" ")),
						p = (0, u.createElement)("form", ["", l.form].join(" "), f),
						d = (0, u.createElement)("input", ["glass", l.input].join(" "), p);
					d.type = "text", d.placeholder = s, d.addEventListener("input", function(e) { t.onInput(e) }, !1), d.addEventListener("keyup", function(e) { t.onKeyUp(e) }, !1), d.addEventListener("keypress", function(e) { t.onKeyPress(e) }, !1), d.addEventListener("focus", function(e) { t.onFocus(e) }, !1), d.addEventListener("blur", function(e) { t.onBlur(e) }, !1), this.elements = { container: f, form: p, input: d }, this.handleSubmit = i } return a(e, [{ key: "onFocus", value: function() {
						(0, u.addClassName)(this.elements.form, "active") } }, { key: "onBlur", value: function() {
						(0, u.removeClassName)(this.elements.form, "active") } }, { key: "onSubmit", value: function(e) { return new Promise(function(t, n) { var r, o, i; return e.preventDefault(), e.stopPropagation(), r = this.elements, o = r.input, i = r.container, (0, u.removeClassName)(i, "error"), (0, u.addClassName)(i, "pending"), this.handleSubmit({ query: o.value }).then(function(e) { return (0, u.removeClassName)(i, "pending"), t() }.$asyncbind(this, n), n) }.$asyncbind(this)) } }, { key: "onInput", value: function() { var e = this.elements.container;
						this.hasError && ((0, u.removeClassName)(e, "error"), this.hasError = !1) } }, { key: "onKeyUp", value: function(e) { var t = this.elements,
							n = t.container,
							r = t.input;
						e.keyCode === s.ESCAPE_KEY && ((0, u.removeClassName)(n, "pending"), (0, u.removeClassName)(n, "active"), r.value = "", document.body.focus(), document.body.blur()) } }, { key: "onKeyPress", value: function(e) { e.keyCode === s.ENTER_KEY && this.onSubmit(e) } }, { key: "setQuery", value: function(e) { var t = this.elements.input;
						t.value = e } }]), e }();
		t.default = c }, function(e, t) {
		function n() { throw Error("setTimeout has not been defined") }

		function r() { throw Error("clearTimeout has not been defined") }

		function o(e) { if (l === setTimeout) return setTimeout(e, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0); try { return l(e, 0) } catch (t) { try { return l.call(null, e, 0) } catch (t) { return l.call(this, e, 0) } } }

		function i(e) { if (f === clearTimeout) return clearTimeout(e); if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e); try { return f(e) } catch (t) { try { return f.call(null, e) } catch (t) { return f.call(this, e) } } }

		function a() { v && d && (v = !1, d.length ? h = d.concat(h) : m = -1, h.length && u()) }

		function u() { if (!v) { var e = o(a);
				v = !0; for (var t = h.length; t;) { for (d = h, h = []; ++m < t;) d && d[m].run();
					m = -1, t = h.length } d = null, v = !1, i(e) } }

		function s(e, t) { this.fun = e, this.array = t }

		function c() {} var l, f, p = e.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (e) { l = n } try { f = "function" == typeof clearTimeout ? clearTimeout : r } catch (e) { f = r } }(); var d, h = [],
			v = !1,
			m = -1;
		p.nextTick = function(e) { var t = Array(arguments.length - 1); if (arguments.length > 1)
				for (var n = 1; arguments.length > n; n++) t[n - 1] = arguments[n];
			h.push(new s(e, t)), 1 !== h.length || v || o(u) }, s.prototype.run = function() { this.fun.apply(null, this.array) }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function(e) { throw Error("process.binding is not supported") }, p.cwd = function() { return "/" }, p.chdir = function(e) { throw Error("process.chdir is not supported") }, p.umask = function() { return 0 } }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(8);
		Object.defineProperty(t, "GeoSearchControl", { enumerable: !0, get: function() { return r(o).default } }); var i = n(5);
		Object.defineProperty(t, "SearchElement", { enumerable: !0, get: function() { return r(i).default } }); var a = n(9);
		Object.defineProperty(t, "BingProvider", { enumerable: !0, get: function() { return r(a).default } }); var u = n(10);
		Object.defineProperty(t, "EsriProvider", { enumerable: !0, get: function() { return r(u).default } }); var s = n(11);
		Object.defineProperty(t, "GoogleProvider", { enumerable: !0, get: function() { return r(s).default } }); var c = n(12);
		Object.defineProperty(t, "OpenStreetMapProvider", { enumerable: !0, get: function() { return r(c).default } }); var l = n(1);
		Object.defineProperty(t, "Provider", { enumerable: !0, get: function() { return r(l).default } }) }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o() { if (!L || !L.Control || !L.Control.extend) throw Error("Leaflet must be loaded before instantiating the GeoSearch control"); for (var e = L.Control.extend(b), t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r]; return new(Function.prototype.bind.apply(e, [null].concat(n))) } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(2),
			a = (r(i), Object.assign || function(e) { for (var t = 1; arguments.length > t; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e });
		t.default = o; var u = n(14),
			s = r(u),
			c = n(5),
			l = r(c),
			f = n(13),
			p = r(f),
			d = n(3),
			h = n(4),
			v = function() { return { position: "topleft", style: "button", showMarker: !0, showPopup: !1, popupFormat: function(e) { var t = e.result; return "" + t.label }, marker: { icon: new L.Icon.Default, draggable: !1 }, maxMarkers: 1, retainZoomLevel: !1, animateZoom: !0, searchLabel: "Enter address", notFoundMessage: "Sorry, that address could not be found.", messageHideDelay: 3e3, zoomLevel: 18, classNames: { container: "leaflet-bar leaflet-control leaflet-control-geosearch", button: "leaflet-bar-part leaflet-bar-part-single", resetButton: "reset", msgbox: "leaflet-bar message", form: "", input: "" }, autoComplete: !0, autoCompleteDelay: 250, autoClose: !1, keepResult: !1 } },
			m = {},
			y = ["dragging", "touchZoom", "doubleClickZoom", "scrollWheelZoom", "boxZoom", "keyboard"],
			b = { initialize: function(e) { var t = this;
					this.markers = new L.FeatureGroup, this.handlersDisabled = !1, this.options = a({}, v(), e); var n = this.options,
						r = n.style,
						o = n.classNames,
						i = n.searchLabel,
						u = n.autoComplete,
						c = n.autoCompleteDelay; "button" !== r && (this.options.classNames.container += " " + e.style), this.searchElement = new l.default(a({}, this.options, { handleSubmit: function(e) { return t.onSubmit(e) } })); var f = this.searchElement.elements,
						h = f.container,
						m = f.form,
						y = f.input,
						b = (0, d.createElement)("a", o.button, h);
					b.title = i, b.href = "#", b.addEventListener("click", function(e) { t.onClick(e) }, !1); var g = (0, d.createElement)("a", o.resetButton, m);
					g.innerHTML = "X", b.href = "#", g.addEventListener("click", function() { t.clearResults(null, !0) }, !1), u && (this.resultList = new p.default({ handleClick: function(e) { var n = e.result;
							y.value = n.label, t.onSubmit({ query: n.label }) } }), m.appendChild(this.resultList.elements.container), y.addEventListener("keyup", (0, s.default)(function(e) { return t.autoSearch(e) }, c), !0), y.addEventListener("keydown", function(e) { return t.selectResult(e) }, !0), y.addEventListener("keydown", function(e) { return t.clearResults(e, !0) }, !0)), m.addEventListener("mouseenter", function(e) { return t.disableHandlers(e) }, !0), m.addEventListener("mouseleave", function(e) { return t.restoreHandlers(e) }, !0), this.elements = { button: b, resetButton: g } }, onAdd: function(e) { var t = this.options,
						n = t.showMarker,
						r = t.style; if (this.map = e, n && this.markers.addTo(e), "bar" === r) { var o = this.searchElement.elements.form,
							i = e.getContainer().querySelector(".leaflet-control-container"),
							a = (0, d.createElement)("div", "leaflet-control-geosearch bar");
						a.appendChild(o), i.appendChild(a), this.elements.container = a } return this.searchElement.elements.container }, onRemove: function() { var e = this.elements.container; return e && e.remove(), this }, onClick: function(e) { e.preventDefault(); var t = this.searchElement.elements,
						n = t.container,
						r = t.input;
					n.classList.contains("active") ? ((0, d.removeClassName)(n, "active"), this.clearResults()) : ((0, d.addClassName)(n, "active"), r.focus()) }, disableHandlers: function(e) { var t = this,
						n = this.searchElement.elements.form;
					this.handlersDisabled || e && e.target !== n || (this.handlersDisabled = !0, y.forEach(function(e) { t.map[e] && (m[e] = t.map[e].enabled(), t.map[e].disable()) })) }, restoreHandlers: function(e) { var t = this,
						n = this.searchElement.elements.form;!this.handlersDisabled || e && e.target !== n || (this.handlersDisabled = !1, y.forEach(function(e) { m[e] && t.map[e].enable() })) }, selectResult: function(e) { if ([h.ENTER_KEY, h.ARROW_DOWN_KEY, h.ARROW_UP_KEY].includes(e.keyCode)) { e.preventDefault(); var t = this.searchElement.elements.input; if (e.keyCode === h.ENTER_KEY) return void this.onSubmit({ query: t.value }); var n = this.resultList,
							r = n.count() - 1; if (r >= 0) { var o = "ArrowDown" === e.code ? ~~n.selected + 1 : ~~n.selected - 1,
								i = 0 > o ? r : o > r ? 0 : o,
								a = n.select(i);
							t.value = a.label } } }, clearResults: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (!e || e.keyCode === h.ESCAPE_KEY) { var n = this.searchElement.elements.input,
							r = this.options,
							o = r.keepResult,
							i = r.autoComplete;!t && o || (n.value = "", this.markers.clearLayers()), i && this.resultList.clear() } }, autoSearch: function(e) { return new Promise(function(t, n) {
						function r() { return t() } var o, i, a; return h.SPECIAL_KEYS.includes(e.keyCode) ? t() : (o = e.target.value, i = this.options.provider, o.length ? i.search({ query: o }).then(function(e) { return a = e, this.resultList.render(a), r.call(this) }.$asyncbind(this, n), n) : (this.resultList.clear(), r.call(this))) }.$asyncbind(this)) }, onSubmit: function(e) { return new Promise(function(t, n) { var r, o; return r = this.options.provider, r.search(e).then(function(n) { return o = n, o && o.length > 0 && this.showResult(o[0], e), t() }.$asyncbind(this, n), n) }.$asyncbind(this)) }, showResult: function(e, t) { var n = t.query,
						r = this.options.autoClose,
						o = Object.keys(this.markers._layers);
					this.options.maxMarkers > o.length || this.markers.removeLayer(o[0]); var i = this.addMarker(e, n);
					this.centerMap(e), this.map.fireEvent("geosearch/showlocation", { location: e, marker: i }), r && this.closeResults() }, closeResults: function() { var e = this.searchElement.elements.container;
					e.classList.contains("active") && (0, d.removeClassName)(e, "active"), this.restoreHandlers(), this.clearResults() }, addMarker: function(e, t) { var n = this,
						r = this.options,
						o = r.marker,
						i = r.showPopup,
						a = r.popupFormat,
						u = new L.Marker([e.y, e.x], o),
						s = e.label; return "function" == typeof a && (s = a({ query: t, result: e })), u.bindPopup(s), this.markers.addLayer(u), i && u.openPopup(), o.draggable && u.on("dragend", function(e) { n.map.fireEvent("geosearch/marker/dragend", { location: u.getLatLng(), event: e }) }), u }, centerMap: function(e) { var t = this.options,
						n = t.retainZoomLevel,
						r = t.animateZoom,
						o = new L.LatLngBounds(e.bounds),
						i = o.isValid() ? o : this.markers.getBounds();!n && o.isValid() ? this.map.fitBounds(i, { animate: r }) : this.map.setView(i.getCenter(), this.getZoom(), { animate: r }) }, getZoom: function() { var e = this.options,
						t = e.retainZoomLevel,
						n = e.zoomLevel; return t ? this.map.getZoom() : n } } }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

		function i(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

		function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = n(2),
			s = (r(u), Object.assign || function(e) { for (var t = 1; arguments.length > t; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }),
			c = function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
			l = n(1),
			f = r(l),
			p = n(3),
			d = function(e) {
				function t() { return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return a(t, e), c(t, [{ key: "endpoint", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.query,
							n = e.protocol,
							r = e.jsonp,
							o = this.options.params,
							i = this.getParamString(s({}, o, { query: t, jsonp: r })); return n + "//dev.virtualearth.net/REST/v1/Locations?" + i } }, { key: "parse", value: function(e) { var t = e.data; return 0 === t.resourceSets.length ? [] : t.resourceSets[0].resources.map(function(e) { return { x: e.point.coordinates[1], y: e.point.coordinates[0], label: e.address.formattedAddress, bounds: [
									[e.bbox[0], e.bbox[1]],
									[e.bbox[2], e.bbox[3]]
								], raw: e } }) } }, { key: "search", value: function(e) { return new Promise(function(t, n) { var r, o, i, a, u; return r = e.query, o = ~location.protocol.indexOf("http") ? location.protocol : "https:", i = "BING_JSONP_CB_" + Date.now(), a = this.endpoint({ query: r, protocol: o, jsonp: i }), (0, p.createScriptElement)(a, i).then(function(e) { return u = e, t(this.parse({ data: u })) }.$asyncbind(this, n), n) }.$asyncbind(this)) } }]), t }(f.default);
		t.default = d }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

		function i(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

		function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = Object.assign || function(e) { for (var t = 1; arguments.length > t; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
			s = function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
			c = n(1),
			l = r(c),
			f = function(e) {
				function t() { return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return a(t, e), s(t, [{ key: "endpoint", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.query,
							n = e.protocol,
							r = this.options.params,
							o = this.getParamString(u({}, r, { f: "json", text: t })); return n + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find?" + o } }, { key: "parse", value: function(e) { var t = e.data; return t.locations.map(function(e) { return { x: e.feature.geometry.x, y: e.feature.geometry.y, label: e.name, bounds: [
									[e.extent.ymin, e.extent.xmin],
									[e.extent.ymax, e.extent.xmax]
								], raw: e } }) } }]), t }(l.default);
		t.default = f }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

		function i(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

		function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = Object.assign || function(e) { for (var t = 1; arguments.length > t; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
			s = function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
			c = n(1),
			l = r(c),
			f = function(e) {
				function t() { return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return a(t, e), s(t, [{ key: "endpoint", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.query,
							n = e.protocol,
							r = this.options.params,
							o = this.getParamString(u({}, r, { address: t })),
							i = r && r.key ? "https:" : n; return i + "//maps.googleapis.com/maps/api/geocode/json?" + o } }, { key: "parse", value: function(e) { var t = e.data; return t.results.map(function(e) { return { x: e.geometry.location.lng, y: e.geometry.location.lat, label: e.formatted_address, bounds: [
									[e.geometry.viewport.southwest.lat, e.geometry.viewport.southwest.lng],
									[e.geometry.viewport.northeast.lat, e.geometry.viewport.northeast.lng]
								], raw: e } }) } }]), t }(l.default);
		t.default = f }, function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } }

		function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

		function i(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

		function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = Object.assign || function(e) { for (var t = 1; arguments.length > t; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
			s = function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
			c = n(1),
			l = r(c),
			f = function(e) {
				function t() { return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return a(t, e), s(t, [{ key: "endpoint", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.query,
							n = e.protocol,
							r = this.options.params,
							o = this.getParamString(u({}, r, { format: "json", q: t })); return n + "//nominatim.openstreetmap.org/search?" + o } }, { key: "parse", value: function(e) { var t = e.data; return t.map(function(e) { return { x: e.lon, y: e.lat, label: e.display_name, bounds: [
									[parseFloat(e.boundingbox[0]), parseFloat(e.boundingbox[2])],
									[parseFloat(e.boundingbox[1]), parseFloat(e.boundingbox[3])]
								], raw: e } }) } }]), t }(l.default);
		t.default = f }, function(e, t, n) { "use strict";

		function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
				function e(e, t) { for (var n = 0; t.length > n; n++) { var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
			i = n(3),
			a = function() { for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n]; return t.join(" ").trim() },
			u = function() {
				function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.handleClick,
						o = void 0 === n ? function() {} : n,
						u = t.classNames,
						c = void 0 === u ? {} : u;
					r(this, e), s.call(this), this.props = { handleClick: o, classNames: c }, this.selected = -1; var l = (0, i.createElement)("div", a("results", c.container)),
						f = (0, i.createElement)("div", a(c.item));
					l.addEventListener("click", this.onClick, !0), this.elements = { container: l, resultItem: f } } return o(e, [{ key: "render", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
							t = this.elements,
							n = t.container,
							r = t.resultItem;
						this.clear(), e.forEach(function(e, t) { var o = r.cloneNode(!0);
							o.setAttribute("data-key", t), o.innerHTML = e.label, n.appendChild(o) }), e.length > 0 && (0, i.addClassName)(n, "active"), this.results = e } }, { key: "select", value: function(e) { var t = this.elements.container; return Array.from(t.children).forEach(function(t, n) { return n === e ? (0, i.addClassName)(t, "active") : (0, i.removeClassName)(t, "active") }), this.selected = e, this.results[e] } }, { key: "count", value: function() { return this.results ? this.results.length : 0 } }, { key: "clear", value: function() { var e = this.elements.container; for (this.selected = -1; e.lastChild;) e.removeChild(e.lastChild);
						(0, i.removeClassName)(e, "active") } }]), e }(),
			s = function() { var e = this;
				this.onClick = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.target,
						r = e.props.handleClick,
						o = e.elements.container; if (n.parentNode === o && n.hasAttribute("data-key")) { var i = n.getAttribute("data-key"),
							a = e.results[i];
						r({ result: a }) } } };
		t.default = u }, function(e, t) {
		(function(t) {
			function n(e, t, n) {
				function o(t) { var n = v,
						r = m; return v = m = void 0, O = t, b = e.apply(r, n) }

				function i(e) { return O = e, g = setTimeout(l, t), k ? o(e) : b }

				function s(e) { var n = e - j,
						r = e - O,
						o = t - n; return P ? _(o, y - r) : o }

				function c(e) { var n = e - j,
						r = e - O; return void 0 === j || n >= t || 0 > n || P && r >= y }

				function l() { var e = E(); return c(e) ? f(e) : void(g = setTimeout(l, s(e))) }

				function f(e) { return g = void 0, T && v ? o(e) : (v = m = void 0, b) }

				function p() { void 0 !== g && clearTimeout(g), O = 0, v = j = m = g = void 0 }

				function d() { return void 0 === g ? b : f(E()) }

				function h() { var e = E(),
						n = c(e); if (v = arguments, m = this, j = e, n) { if (void 0 === g) return i(j); if (P) return g = setTimeout(l, t), o(j) } return void 0 === g && (g = setTimeout(l, t)), b } var v, m, y, b, g, j, O = 0,
					k = !1,
					P = !1,
					T = !0; if ("function" != typeof e) throw new TypeError(u); return t = a(t) || 0, r(n) && (k = !!n.leading, P = "maxWait" in n, y = P ? w(a(n.maxWait) || 0, t) : y, T = "trailing" in n ? !!n.trailing : T), h.cancel = p, h.flush = d, h }

			function r(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

			function o(e) { return !!e && "object" == typeof e }

			function i(e) { return "symbol" == typeof e || o(e) && g.call(e) == c }

			function a(e) { if ("number" == typeof e) return e; if (i(e)) return s; if (r(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e;
					e = r(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e;
				e = e.replace(l, ""); var n = p.test(e); return n || d.test(e) ? h(e.slice(2), n ? 2 : 8) : f.test(e) ? s : +e } var u = "Expected a function",
				s = NaN,
				c = "[object Symbol]",
				l = /^\s+|\s+$/g,
				f = /^[-+]0x[0-9a-f]+$/i,
				p = /^0b[01]+$/i,
				d = /^0o[0-7]+$/i,
				h = parseInt,
				v = "object" == typeof t && t && t.Object === Object && t,
				m = "object" == typeof self && self && self.Object === Object && self,
				y = v || m || Function("return this")(),
				b = Object.prototype,
				g = b.toString,
				w = Math.max,
				_ = Math.min,
				E = function() { return y.Date.now() };
			e.exports = n }).call(t, function() { return this }()) }, function(e, t) { e.exports = function() {
			function e(e) { return e && e instanceof Object && "function" == typeof e.then }

			function t(n, r, o) { try { var i = o ? o(r) : r; if (n === i) return n.reject(new TypeError("Promise resolution loop"));
					e(i) ? i.then(function(e) { t(n, e) }, function(e) { n.reject(e) }) : n.resolve(i) } catch (e) { n.reject(e) } }

			function n() {}

			function r(e) {}

			function o(e, t) { this.resolve = e, this.reject = t }

			function i(r, o) { var i = new n; try { this._resolver(function(n) { return e(n) ? n.then(r, o) : t(i, n, r) }, function(e) { t(i, e, o) }) } catch (e) { t(i, e, o) } return i }

			function a(e) { this._resolver = e, this.then = i } return n.prototype = { resolve: r, reject: r, then: o }, a.resolve = function(e) { return a.isThenable(e) ? e : { then: function(t) { return t(e) } } }, a.isThenable = e, a } }, function(e, t, n) {
		(function(t, n) { "use strict";
			e.exports = function(e) {
				function r(e) { if (e) { var t = this;
						e(function(e) { t.resolve(e) }, function(e) { t.reject(e) }) } }

				function o(e, t) { if ("function" == typeof e.y) try { var n = e.y.call(void 0, t);
						e.p.resolve(n) }
					catch (t) { e.p.reject(t) } else e.p.resolve(t) }

				function i(e, t) { if ("function" == typeof e.n) try { var n = e.n.call(void 0, t);
						e.p.resolve(n) }
					catch (t) { e.p.reject(t) } else e.p.reject(t) } e = e || "object" == typeof t && t.nextTick || "function" == typeof n && n || function(e) { setTimeout(e, 0) }; var a = function() {
					function t() { for (; n.length - r;) { try { n[r]() } catch (e) {} n[r++] = void 0, r === o && (n.splice(0, o), r = 0) } } var n = [],
						r = 0,
						o = 1024; return function(o) { n.push(o), n.length - r === 1 && e(t) } }(); return r.prototype = { resolve: function(e) { if (void 0 === this.state) { if (e === this) return this.reject(new TypeError("Attempt to resolve promise with self")); var t = this; if (e && ("function" == typeof e || "object" == typeof e)) try { var n = 0,
									r = e.then; if ("function" == typeof r) return void r.call(e, function(e) { n++ || t.resolve(e) }, function(e) { n++ || t.reject(e) }) }
							catch (e) { return void(n || this.reject(e)) } this.state = o, this.v = e, t.c && a(function() { for (var n = 0, r = t.c.length; r > n; n++) o(t.c[n], e) }) } }, reject: function(e) { if (void 0 === this.state) { this.state = i, this.v = e; var t = this.c;
							t && a(function() { for (var n = 0, r = t.length; r > n; n++) i(t[n], e) }) } }, then: function(e, t) { var n = new r,
							o = { y: e, n: t, p: n }; if (void 0 === this.state) this.c ? this.c.push(o) : this.c = [o];
						else { var i = this.state,
								u = this.v;
							a(function() { i(o, u) }) } return n } }, r.resolve = function(e) { if (e && e instanceof r) return e; var t = new r; return t.resolve(e), t }, r.reject = function(e) { if (e && e instanceof r) return e; var t = new r; return t.reject(e), t }, r.version = "2.3.3-nodent", r } }).call(t, n(6), n(18).setImmediate) }, function(e, t, n) {
		(function(e, t) {! function(e, n) { "use strict";

				function r(e) { "function" != typeof e && (e = Function("" + e)); for (var t = Array(arguments.length - 1), n = 0; t.length > n; n++) t[n] = arguments[n + 1]; var r = { callback: e, args: t }; return v[h] = r, d(h), h++ }

				function o(e) { delete v[e] }

				function i(e) { var t = e.callback,
						r = e.args; switch (r.length) {
						case 0:
							t(); break;
						case 1:
							t(r[0]); break;
						case 2:
							t(r[0], r[1]); break;
						case 3:
							t(r[0], r[1], r[2]); break;
						default:
							t.apply(n, r) } }

				function a(e) { if (m) setTimeout(a, 0, e);
					else { var t = v[e]; if (t) { m = !0; try { i(t) } finally { o(e), m = !1 } } } }

				function u() { d = function(e) { t.nextTick(function() { a(e) }) } }

				function s() { if (e.postMessage && !e.importScripts) { var t = !0,
							n = e.onmessage; return e.onmessage = function() { t = !1 }, e.postMessage("", "*"), e.onmessage = n, t } }

				function c() { var t = "setImmediate$" + Math.random() + "$",
						n = function(n) { n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length)) };
					e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), d = function(n) { e.postMessage(t + n, "*") } }

				function l() { var e = new MessageChannel;
					e.port1.onmessage = function(e) { var t = e.data;
						a(t) }, d = function(t) { e.port2.postMessage(t) } }

				function f() { var e = y.documentElement;
					d = function(t) { var n = y.createElement("script");
						n.onreadystatechange = function() { a(t), n.onreadystatechange = null, e.removeChild(n), n = null }, e.appendChild(n) } }

				function p() { d = function(e) { setTimeout(a, 0, e) } } if (!e.setImmediate) { var d, h = 1,
						v = {},
						m = !1,
						y = e.document,
						b = Object.getPrototypeOf && Object.getPrototypeOf(e);
					b = b && b.setTimeout ? b : e, "[object process]" === {}.toString.call(e.process) ? u() : s() ? c() : e.MessageChannel ? l() : y && "onreadystatechange" in y.createElement("script") ? f() : p(), b.setImmediate = r, b.clearImmediate = o } }("undefined" == typeof self ? void 0 === e ? this : e : self) }).call(t, function() { return this }(), n(6)) }, function(e, t, n) {
		function r(e, t) { this._id = e, this._clearFn = t } var o = Function.prototype.apply;
		t.setTimeout = function() { return new r(o.call(setTimeout, window, arguments), clearTimeout) }, t.setInterval = function() { return new r(o.call(setInterval, window, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e && e.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(window, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;
			0 > t || (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t)) }, n(17), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate }]) });
/*
 Leaflet.draw 0.4.12, a plugin that adds drawing and editing tools to Leaflet powered maps.
 (c) 2012-2017, Jacob Toye, Jon West, Smartrak, Leaflet

 https://github.com/Leaflet/Leaflet.draw
 http://leafletjs.com
 */
! function(t, e, i) {
	function o(t, e) { for (;
			(t = t.parentElement) && !t.classList.contains(e);); return t } L.drawVersion = "0.4.12", L.Draw = {}, L.drawLocal = { draw: { toolbar: { actions: { title: "Cancel drawing", text: "Cancel" }, finish: { title: "Finish drawing", text: "Finish" }, undo: { title: "Delete last point drawn", text: "Delete last point" }, buttons: { polyline: "Draw a polyline", polygon: "Draw a polygon", rectangle: "Draw a rectangle", circle: "Draw a circle", marker: "Draw a marker", circlemarker: "Draw a circlemarker" } }, handlers: { circle: { tooltip: { start: "Click and drag to draw circle." }, radius: "Radius" }, circlemarker: { tooltip: { start: "Click map to place circle marker." } }, marker: { tooltip: { start: "Click map to place marker." } }, polygon: { tooltip: { start: "Click to start drawing shape.", cont: "Click to continue drawing shape.", end: "Click first point to close this shape." } }, polyline: { error: "<strong>Error:</strong> shape edges cannot cross!", tooltip: { start: "Click to start drawing line.", cont: "Click to continue drawing line.", end: "Click last point to finish line." } }, rectangle: { tooltip: { start: "Click and drag to draw rectangle." } }, simpleshape: { tooltip: { end: "Release mouse to finish drawing." } } } }, edit: { toolbar: { actions: { save: { title: "Save changes", text: "Save" }, cancel: { title: "Cancel editing, discards all changes", text: "Cancel" }, clearAll: { title: "Clear all layers", text: "Clear All" } }, buttons: { edit: "Edit layers", editDisabled: "No layers to edit", remove: "Delete layers", removeDisabled: "No layers to delete" } }, handlers: { edit: { tooltip: { text: "Drag handles or markers to edit features.", subtext: "Click cancel to undo changes." } }, remove: { tooltip: { text: "Click on a feature to remove." } } } } }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({ includes: L.Mixin.Events, initialize: function(t, e) { this._map = t, this._container = t._container, this._overlayPane = t._panes.overlayPane, this._popupPane = t._panes.popupPane, e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)), L.setOptions(this, e) }, enable: function() { this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type })) }, disable: function() { this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }), this.fire("disabled", { handler: this.type })) }, addHooks: function() { var t = this._map;
				t && (L.DomUtil.disableTextSelection(), t.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this)) }, removeHooks: function() { this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this)) }, setOptions: function(t) { L.setOptions(this, t) }, _fireCreatedEvent: function(t) { this._map.fire(L.Draw.Event.CREATED, { layer: t, layerType: this.type }) }, _cancelDrawing: function(t) { 27 === t.keyCode && (this._map.fire("draw:canceled", { layerType: this.type }), this.disable()) } }), L.Draw.Polyline = L.Draw.Feature.extend({ statics: { TYPE: "polyline" }, Poly: L.Polyline, options: { allowIntersection: !0, repeatMode: !1, drawError: { color: "#b00b00", timeout: 2500 }, icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), guidelineDistance: 20, maxGuideLineLength: 4e3, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !1, clickable: !0 }, metric: !0, feet: !0, nautic: !1, showLength: !0, zIndexOffset: 2e3, factor: 1 }, initialize: function(t, e) { L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e) }, addHooks: function() { L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup, this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this)) }, removeHooks: function() { L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this) }, deleteLastVertex: function() { if (!(this._markers.length <= 1)) { var t = this._markers.pop(),
						e = this._poly,
						i = e.getLatLngs(),
						o = i.splice(-1, 1)[0];
					this._poly.setLatLngs(i), this._markerGroup.removeLayer(t), e.getLatLngs().length < 2 && this._map.removeLayer(e), this._vertexChanged(o, !1) } }, addVertex: function(t) { if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t)) return void this._showErrorTooltip();
				this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(t)), this._poly.addLatLng(t), 2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly), this._vertexChanged(t, !0) }, completeShape: function() { this._markers.length <= 1 || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()) }, _finishShape: function() { var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
					e = this._poly.newLatLngIntersects(t[t.length - 1]); if (!this.options.allowIntersection && e || !this._shapeIsValid()) return void this._showErrorTooltip();
				this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable() }, _shapeIsValid: function() { return !0 }, _onZoomEnd: function() { null !== this._markers && this._updateGuide() }, _onMouseMove: function(t) { var e = this._map.mouseEventToLayerPoint(t.originalEvent),
					i = this._map.layerPointToLatLng(e);
				this._currentLatLng = i, this._updateTooltip(i), this._updateGuide(e), this._mouseMarker.setLatLng(i), L.DomEvent.preventDefault(t.originalEvent) }, _vertexChanged: function(t, e) { this._map.fire(L.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }), this._updateFinishHandler(), this._updateRunningMeasure(t, e), this._clearGuides(), this._updateTooltip() }, _onMouseDown: function(t) { if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) { this._onMouseMove(t), this._clickHandled = !0, this._disableNewMarkers(); var e = t.originalEvent,
						i = e.clientX,
						o = e.clientY;
					this._startPoint.call(this, i, o) } }, _startPoint: function(t, e) { this._mouseDownOrigin = L.point(t, e) }, _onMouseUp: function(t) { var e = t.originalEvent,
					i = e.clientX,
					o = e.clientY;
				this._endPoint.call(this, i, o, t), this._clickHandled = null }, _endPoint: function(e, i, o) { if (this._mouseDownOrigin) { var n = L.point(e, i).distanceTo(this._mouseDownOrigin);
					this._calculateFinishDistance(o.latlng) < 10 && L.Browser.touch ? this._finishShape() : Math.abs(n) < 9 * (t.devicePixelRatio || 1) && this.addVertex(o.latlng), this._enableNewMarkers() } this._mouseDownOrigin = null }, _onTouch: function(t) { var e, i, o = t.originalEvent;!o.touches || !o.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = o.touches[0].clientX, i = o.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, e, i), this._endPoint.call(this, e, i, t), this._touchHandled = null), this._clickHandled = null }, _onMouseOut: function() { this._tooltip && this._tooltip._onMouseOut.call(this._tooltip) }, _calculateFinishDistance: function(t) { var e; if (this._markers.length > 0) { var i; if (this.type === L.Draw.Polyline.TYPE) i = this._markers[this._markers.length - 1];
					else { if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
						i = this._markers[0] } var o = this._map.latLngToContainerPoint(i.getLatLng()),
						n = new L.Marker(t, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset }),
						a = this._map.latLngToContainerPoint(n.getLatLng());
					e = o.distanceTo(a) } else e = 1 / 0; return e }, _updateFinishHandler: function() { var t = this._markers.length;
				t > 1 && this._markers[t - 1].on("click", this._finishShape, this), t > 2 && this._markers[t - 2].off("click", this._finishShape, this) }, _createMarker: function(t) { var e = new L.Marker(t, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset }); return this._markerGroup.addLayer(e), e }, _updateGuide: function(t) { var e = this._markers ? this._markers.length : 0;
				e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t)) }, _updateTooltip: function(t) { var e = this._getTooltipText();
				t && this._tooltip.updatePosition(t), this._errorShown || this._tooltip.updateContent(e) }, _drawGuide: function(t, e) { var i, o, n, a = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
					s = this.options.guidelineDistance,
					r = this.options.maxGuideLineLength,
					l = a > r ? a - r : s; for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < a; l += this.options.guidelineDistance) i = l / a, o = { x: Math.floor(t.x * (1 - i) + i * e.x), y: Math.floor(t.y * (1 - i) + i * e.y) }, n = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), n.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(n, o) }, _updateGuideColor: function(t) { if (this._guidesContainer)
					for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++) this._guidesContainer.childNodes[e].style.backgroundColor = t }, _clearGuides: function() { if (this._guidesContainer)
					for (; this._guidesContainer.firstChild;) this._guidesContainer.removeChild(this._guidesContainer.firstChild) }, _getTooltipText: function() { var t, e, i = this.options.showLength; return L.Browser.touch && (i = !1), 0 === this._markers.length ? t = { text: L.drawLocal.draw.handlers.polyline.tooltip.start } : (e = i ? this._getMeasurementString() : "", t = 1 === this._markers.length ? { text: L.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: e } : { text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: e }), t }, _updateRunningMeasure: function(t, e) { var i, o, n = this._markers.length;
				1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = n - (e ? 2 : 1), o = this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += o * (e ? 1 : -1)) }, _getMeasurementString: function() { var t, e = this._currentLatLng,
					i = this._markers[this._markers.length - 1].getLatLng(); return t = i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision) }, _showErrorTooltip: function() { this._errorShown = !0, this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({ color: this.options.drawError.color }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout) }, _hideErrorTooltip: function() { this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({ color: this.options.shapeOptions.color }) }, _clearHideErrorTimeout: function() { this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null) }, _disableNewMarkers: function() { this._disableMarkers = !0 }, _enableNewMarkers: function() { setTimeout(function() { this._disableMarkers = !1 }.bind(this), 50) }, _cleanUpShape: function() { this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this) }, _fireCreatedEvent: function() { var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
				L.Draw.Feature.prototype._fireCreatedEvent.call(this, t) } }), L.Draw.Polygon = L.Draw.Polyline.extend({ statics: { TYPE: "polygon" }, Poly: L.Polygon, options: { showArea: !1, showLength: !1, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !0, fillColor: null, fillOpacity: .2, clickable: !0 }, metric: !0, feet: !0, nautic: !1, precision: {} }, initialize: function(t, e) { L.Draw.Polyline.prototype.initialize.call(this, t, e), this.type = L.Draw.Polygon.TYPE }, _updateFinishHandler: function() { var t = this._markers.length;
				1 === t && this._markers[0].on("click", this._finishShape, this), t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this), t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this)) }, _getTooltipText: function() { var t, e; return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont, e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end, e = this._getMeasurementString()), { text: t, subtext: e } }, _getMeasurementString: function() { var t = this._area,
					e = ""; return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)), t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)), e) : null }, _shapeIsValid: function() { return this._markers.length >= 3 }, _vertexChanged: function(t, e) { var i;!this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(i)), L.Draw.Polyline.prototype._vertexChanged.call(this, t, e) }, _cleanUpShape: function() { var t = this._markers.length;
				t > 0 && (this._markers[0].off("click", this._finishShape, this), t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this)) } }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({ options: { repeatMode: !1 }, initialize: function(t, e) { this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, t, e) }, addHooks: function() { L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({ text: this._initialLabelText }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this)) }, removeHooks: function() { L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(e, "mouseup", this._onMouseUp, this), L.DomEvent.off(e, "touchend", this._onMouseUp, this), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1 }, _getTooltipText: function() { return { text: this._endLabelText } }, _onMouseDown: function(t) { this._isDrawing = !0, this._startLatLng = t.latlng, L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent) }, _onMouseMove: function(t) { var e = t.latlng;
				this._tooltip.updatePosition(e), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(e)) }, _onMouseUp: function() { this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable() } }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({ statics: { TYPE: "rectangle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !0, fillColor: null, fillOpacity: .2, showArea: !0, clickable: !0 }, metric: !0 }, initialize: function(t, e) { this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e) }, disable: function() { this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this)) }, _onMouseUp: function(t) { if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void(this._isCurrentlyTwoClickDrawing = !0);
				this._isCurrentlyTwoClickDrawing && !o(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) }, _drawShape: function(t) { this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, t), this.options.shapeOptions), this._map.addLayer(this._shape)) }, _fireCreatedEvent: function() { var t = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
				L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t) }, _getTooltipText: function() { var t, e, i, o = L.Draw.SimpleShape.prototype._getTooltipText.call(this),
					n = this._shape,
					a = this.options.showArea; return n && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), e = L.GeometryUtil.geodesicArea(t), i = a ? L.GeometryUtil.readableArea(e, this.options.metric) : ""), { text: o.text, subtext: i } } }), L.Draw.Marker = L.Draw.Feature.extend({ statics: { TYPE: "marker" }, options: { icon: new L.Icon.Default, repeatMode: !1, zIndexOffset: 2e3 }, initialize: function(t, e) { this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e) }, addHooks: function() { L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({ text: this._initialLabelText }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this)) }, removeHooks: function() { L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._marker && (this._marker.off("click", this._onClick, this), this._map.off("click", this._onClick, this).off("click", this._onTouch, this).removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this)) }, _onMouseMove: function(t) { var e = t.latlng;
				this._tooltip.updatePosition(e), this._mouseMarker.setLatLng(e), this._marker ? (e = this._mouseMarker.getLatLng(), this._marker.setLatLng(e)) : (this._marker = this._createMarker(e), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker)) }, _createMarker: function(t) { return new L.Marker(t, { icon: this.options.icon, zIndexOffset: this.options.zIndexOffset }) }, _onClick: function() { this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable() }, _onTouch: function(t) { this._onMouseMove(t), this._onClick() }, _fireCreatedEvent: function() { var t = new L.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
				L.Draw.Feature.prototype._fireCreatedEvent.call(this, t) } }), L.Draw.CircleMarker = L.Draw.Marker.extend({ statics: { TYPE: "circlemarker" }, options: { stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !0, fillColor: null, fillOpacity: .2, clickable: !0, zIndexOffset: 2e3 }, initialize: function(t, e) { this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e) }, _fireCreatedEvent: function() { var t = new L.CircleMarker(this._marker.getLatLng(), this.options);
				L.Draw.Feature.prototype._fireCreatedEvent.call(this, t) }, _createMarker: function(t) { return new L.CircleMarker(t, this.options) } }), L.Draw.Circle = L.Draw.SimpleShape.extend({ statics: { TYPE: "circle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !0, fillColor: null, fillOpacity: .2, clickable: !0 }, showRadius: !0, metric: !0, feet: !0, nautic: !1 }, initialize: function(t, e) { this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e) }, _drawShape: function(t) { var e = this._map.distance(this._startLatLng, t);
				this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng, e, this.options.shapeOptions), this._map.addLayer(this._shape)) }, _fireCreatedEvent: function() { var t = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
				L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t) }, _onMouseMove: function(t) { var e, i = t.latlng,
					o = this.options.showRadius,
					n = this.options.metric; if (this._tooltip.updatePosition(i), this._isDrawing) { this._drawShape(i), e = this._shape.getRadius().toFixed(1); var a = "";
					o && (a = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, n, this.options.feet, this.options.nautic)), this._tooltip.updateContent({ text: this._endLabelText, subtext: a }) } } }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({ initialize: function(t, e) { this._marker = t, L.setOptions(this, e) }, addHooks: function() { var t = this._marker;
				t.dragging.enable(), t.on("dragend", this._onDragEnd, t), this._toggleMarkerHighlight() }, removeHooks: function() { var t = this._marker;
				t.dragging.disable(), t.off("dragend", this._onDragEnd, t), this._toggleMarkerHighlight() }, _onDragEnd: function(t) { var e = t.target;
				e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: e }) }, _toggleMarkerHighlight: function() { var t = this._marker._icon;
				t && (t.style.display = "none", L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, 4)), t.style.display = "") }, _offsetMarker: function(t, e) { var i = parseInt(t.style.marginTop, 10) - e,
					o = parseInt(t.style.marginLeft, 10) - e;
				t.style.marginTop = i + "px", t.style.marginLeft = o + "px" } }), L.Marker.addInitHook(function() { L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable()) }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({ options: {}, initialize: function(t, e) { this.latlngs = [t._latlngs], t._holes && (this.latlngs = this.latlngs.concat(t._holes)), this._poly = t, L.setOptions(this, e), this._poly.on("revert-edited", this._updateLatLngs, this) }, _defaultShape: function() { return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs }, _eachVertexHandler: function(t) { for (var e = 0; e < this._verticesHandlers.length; e++) t(this._verticesHandlers[e]) }, addHooks: function() { this._initHandlers(), this._eachVertexHandler(function(t) { t.addHooks() }) }, removeHooks: function() { this._eachVertexHandler(function(t) { t.removeHooks() }) }, updateMarkers: function() { this._eachVertexHandler(function(t) { t.updateMarkers() }) }, _initHandlers: function() { this._verticesHandlers = []; for (var t = 0; t < this.latlngs.length; t++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this.options)) }, _updateLatLngs: function(t) { this.latlngs = [t.layer._latlngs], t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes)) } }), L.Edit.PolyVerticesEdit = L.Handler.extend({ options: { icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), drawError: { color: "#b00b00", timeout: 1e3 } }, initialize: function(t, e, i) { L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = t, i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)), this._latlngs = e, L.setOptions(this, i) }, _defaultShape: function() { return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs }, addHooks: function() { var t = this._poly;
				t instanceof L.Polygon || (t.options.fill = !1, t.options.editing && (t.options.editing.fill = !1)), t.setStyle(t.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup)) }, removeHooks: function() { var t = this._poly;
				t.setStyle(t.options.original), t._map && (t._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers) }, updateMarkers: function() { this._markerGroup.clearLayers(), this._initMarkers() }, _initMarkers: function() { this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = []; var t, e, i, o, n = this._defaultShape(); for (t = 0, i = n.length; t < i; t++) o = this._createMarker(n[t], t), o.on("click", this._onMarkerClick, this), this._markers.push(o); var a, s; for (t = 0, e = i - 1; t < i; e = t++)(0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (a = this._markers[e], s = this._markers[t], this._createMiddleMarker(a, s), this._updatePrevNext(a, s)) }, _createMarker: function(t, e) { var i = new L.Marker.Touch(t, { draggable: !0, icon: this.options.icon }); return i._origLatLng = t, i._index = e, i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(i), i }, _onMarkerDragStart: function() { this._poly.fire("editstart") }, _spliceLatLngs: function() { var t = this._defaultShape(),
					e = [].splice.apply(t, arguments); return this._poly._convertLatLngs(t, !0), this._poly.redraw(), e }, _removeMarker: function(t) { var e = t._index;
				this._markerGroup.removeLayer(t), this._markers.splice(e, 1), this._spliceLatLngs(e, 1), this._updateIndexes(e, -1), t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this) }, _fireEdit: function() { this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, { layers: this._markerGroup, poly: this._poly }) }, _onMarkerDrag: function(t) { var e = t.target,
					i = this._poly; if (L.extend(e._origLatLng, e._latlng), e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), i.options.poly) { var o = i._map._editTooltip; if (!i.options.poly.allowIntersection && i.intersects()) { var n = i.options.color;
						i.setStyle({ color: this.options.drawError.color }), 0 !== L.version.indexOf("0.7") && e.dragging._draggable._onUp(t), this._onMarkerClick(t), o && o.updateContent({ text: L.drawLocal.draw.handlers.polyline.error }), setTimeout(function() { i.setStyle({ color: n }), o && o.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext }) }, 1e3) } } this._poly.redraw(), this._poly.fire("editdrag") }, _onMarkerClick: function(t) { var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
					i = t.target;
				this._defaultShape().length < e || (this._removeMarker(i), this._updatePrevNext(i._prev, i._next), i._middleLeft && this._markerGroup.removeLayer(i._middleLeft), i._middleRight && this._markerGroup.removeLayer(i._middleRight), i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null, this._fireEdit()) }, _onTouchMove: function(t) { var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
					i = this._map.layerPointToLatLng(e),
					o = t.target;
				L.extend(o._origLatLng, i), o._middleLeft && o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev, o)), o._middleRight && o._middleRight.setLatLng(this._getMiddleLatLng(o, o._next)), this._poly.redraw(), this.updateMarkers() }, _updateIndexes: function(t, e) { this._markerGroup.eachLayer(function(i) { i._index > t && (i._index += e) }) }, _createMiddleMarker: function(t, e) { var i, o, n, a = this._getMiddleLatLng(t, e),
					s = this._createMarker(a);
				s.setOpacity(.6), t._middleRight = e._middleLeft = s, o = function() { s.off("touchmove", o, this); var n = e._index;
					s._index = n, s.off("click", i, this).on("click", this._onMarkerClick, this), a.lat = s.getLatLng().lat, a.lng = s.getLatLng().lng, this._spliceLatLngs(n, 0, a), this._markers.splice(n, 0, s), s.setOpacity(1), this._updateIndexes(n, 1), e._index++, this._updatePrevNext(t, s), this._updatePrevNext(s, e), this._poly.fire("editstart") }, n = function() { s.off("dragstart", o, this), s.off("dragend", n, this), s.off("touchmove", o, this), this._createMiddleMarker(t, s), this._createMiddleMarker(s, e) }, i = function() { o.call(this), n.call(this), this._fireEdit() }, s.on("click", i, this).on("dragstart", o, this).on("dragend", n, this).on("touchmove", o, this), this._markerGroup.addLayer(s) }, _updatePrevNext: function(t, e) { t && (t._next = e), e && (e._prev = t) }, _getMiddleLatLng: function(t, e) { var i = this._poly._map,
					o = i.project(t.getLatLng()),
					n = i.project(e.getLatLng()); return i.unproject(o._add(n)._divideBy(2)) } }), L.Polyline.addInitHook(function() { this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this, this.options.poly), this.options.editable && this.editing.enable()), this.on("add", function() { this.editing && this.editing.enabled() && this.editing.addHooks() }), this.on("remove", function() { this.editing && this.editing.enabled() && this.editing.removeHooks() })) }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
			options: { moveIcon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move" }), resizeIcon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize" }), touchMoveIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon" }), touchResizeIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon" }) },
			initialize: function(t, e) { L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = t, L.Util.setOptions(this, e) },
			addHooks: function() { var t = this._shape;
				this._shape._map && (this._map = this._shape._map, t.setStyle(t.options.editing), t._map && (this._map = t._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup))) },
			removeHooks: function() { var t = this._shape; if (t.setStyle(t.options.original), t._map) { this._unbindMarker(this._moveMarker); for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._unbindMarker(this._resizeMarkers[e]);
					this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup } this._map = null },
			updateMarkers: function() { this._markerGroup.clearLayers(), this._initMarkers() },
			_initMarkers: function() { this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createMoveMarker(), this._createResizeMarker() },
			_createMoveMarker: function() {},
			_createResizeMarker: function() {},
			_createMarker: function(t, e) { var i = new L.Marker.Touch(t, { draggable: !0, icon: e, zIndexOffset: 10 }); return this._bindMarker(i), this._markerGroup.addLayer(i), i },
			_bindMarker: function(t) {
				t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
			},
			_unbindMarker: function(t) { t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this) },
			_onMarkerDragStart: function(t) { t.target.setOpacity(0), this._shape.fire("editstart") },
			_fireEdit: function() { this._shape.edited = !0, this._shape.fire("edit") },
			_onMarkerDrag: function(t) { var e = t.target,
					i = e.getLatLng();
				e === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), this._shape.fire("editdrag") },
			_onMarkerDragEnd: function(t) { t.target.setOpacity(1), this._fireEdit() },
			_onTouchStart: function(t) { if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t), "function" == typeof this._getCorners) { var e = this._getCorners(),
						i = t.target,
						o = i._cornerIndex;
					i.setOpacity(0), this._oppositeCorner = e[(o + 2) % 4], this._toggleCornerMarkers(0, o) } this._shape.fire("editstart") },
			_onTouchMove: function(t) { var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
					i = this._map.layerPointToLatLng(e); return t.target === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), !1 },
			_onTouchEnd: function(t) { t.target.setOpacity(1), this.updateMarkers(), this._fireEdit() },
			_move: function() {},
			_resize: function() {}
		}), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({ _createMoveMarker: function() { var t = this._shape.getBounds(),
					e = t.getCenter();
				this._moveMarker = this._createMarker(e, this.options.moveIcon) }, _createResizeMarker: function() { var t = this._getCorners();
				this._resizeMarkers = []; for (var e = 0, i = t.length; e < i; e++) this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)), this._resizeMarkers[e]._cornerIndex = e }, _onMarkerDragStart: function(t) { L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t); var e = this._getCorners(),
					i = t.target,
					o = i._cornerIndex;
				this._oppositeCorner = e[(o + 2) % 4], this._toggleCornerMarkers(0, o) }, _onMarkerDragEnd: function(t) { var e, i, o = t.target;
				o === this._moveMarker && (e = this._shape.getBounds(), i = e.getCenter(), o.setLatLng(i)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t) }, _move: function(t) { for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), o = this._shape.getBounds(), n = o.getCenter(), a = [], s = 0, r = i.length; s < r; s++) e = [i[s].lat - n.lat, i[s].lng - n.lng], a.push([t.lat + e[0], t.lng + e[1]]);
				this._shape.setLatLngs(a), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape }) }, _resize: function(t) { var e;
				this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds(), this._moveMarker.setLatLng(e.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape }) }, _getCorners: function() { var t = this._shape.getBounds(); return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()] }, _toggleCornerMarkers: function(t) { for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setOpacity(t) }, _repositionCornerMarkers: function() { for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setLatLng(t[e]) } }), L.Rectangle.addInitHook(function() { L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable()) }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({ _createMoveMarker: function() { var t = this._shape.getLatLng();
				this._moveMarker = this._createMarker(t, this.options.moveIcon) }, _createResizeMarker: function() { this._resizeMarkers = [] }, _move: function(t) { if (this._resizeMarkers.length) { var e = this._getResizeMarkerPoint(t);
					this._resizeMarkers[0].setLatLng(e) } this._shape.setLatLng(t), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape }) } }), L.CircleMarker.addInitHook(function() { L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() { this.editing && this.editing.enabled() && this.editing.addHooks() }), this.on("remove", function() { this.editing && this.editing.enabled() && this.editing.removeHooks() }) }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({ _createResizeMarker: function() { var t = this._shape.getLatLng(),
					e = this._getResizeMarkerPoint(t);
				this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon)) }, _getResizeMarkerPoint: function(t) { var e = this._shape._radius * Math.cos(Math.PI / 4),
					i = this._map.project(t); return this._map.unproject([i.x + e, i.y - e]) }, _resize: function(t) { var e = this._moveMarker.getLatLng(),
					i = this._map.distance(e, t);
				this._shape.setRadius(i), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape }) } }), L.Circle.addInitHook(function() { L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable()), this.on("add", function() { this.editing && this.editing.enabled() && this.editing.addHooks() }), this.on("remove", function() { this.editing && this.editing.enabled() && this.editing.removeHooks() }) }), L.Map.mergeOptions({ touchExtend: !0 }), L.Map.TouchExtend = L.Handler.extend({ initialize: function(t) { this._map = t, this._container = t._container, this._pane = t._panes.overlayPane }, addHooks: function() { L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this)) }, removeHooks: function() { L.DomEvent.off(this._container, "touchstart", this._onTouchStart), L.DomEvent.off(this._container, "touchend", this._onTouchEnd), L.DomEvent.off(this._container, "touchmove", this._onTouchMove), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDowm", this._onTouchStart), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave)) }, _touchEvent: function(t, e) { var i = {}; if (void 0 !== t.touches) { if (!t.touches.length) return;
					i = t.touches[0] } else { if ("touch" !== t.pointerType) return; if (i = t, !this._filterClick(t)) return } var o = this._map.mouseEventToContainerPoint(i),
					n = this._map.mouseEventToLayerPoint(i),
					a = this._map.layerPointToLatLng(n);
				this._map.fire(e, { latlng: a, layerPoint: n, containerPoint: o, pageX: i.pageX, pageY: i.pageY, originalEvent: t }) }, _filterClick: function(t) { var e = t.timeStamp || t.originalEvent.timeStamp,
					i = L.DomEvent._lastClick && e - L.DomEvent._lastClick; return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t), !1) : (L.DomEvent._lastClick = e, !0) }, _onTouchStart: function(t) { if (this._map._loaded) { this._touchEvent(t, "touchstart") } }, _onTouchEnd: function(t) { if (this._map._loaded) { this._touchEvent(t, "touchend") } }, _onTouchCancel: function(t) { if (this._map._loaded) { var e = "touchcancel";
					this._detectIE() && (e = "pointercancel"), this._touchEvent(t, e) } }, _onTouchLeave: function(t) { if (this._map._loaded) { this._touchEvent(t, "touchleave") } }, _onTouchMove: function(t) { if (this._map._loaded) { this._touchEvent(t, "touchmove") } }, _detectIE: function() { var e = t.navigator.userAgent,
					i = e.indexOf("MSIE "); if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10); if (e.indexOf("Trident/") > 0) { var o = e.indexOf("rv:"); return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10) } var n = e.indexOf("Edge/"); return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) } }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({ _initInteraction: function() { return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy() }, _initInteractionLegacy: function() { if (this.options.clickable) { var t = this._icon,
						e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
					this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]), L.DomUtil.addClass(t, "leaflet-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this), L.DomEvent.on(t, "keypress", this._onKeyPress, this); for (var i = 0; i < e.length; i++) L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
					L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable()) } }, _detectIE: function() { var e = t.navigator.userAgent,
					i = e.indexOf("MSIE "); if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10); if (e.indexOf("Trident/") > 0) { var o = e.indexOf("rv:"); return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10) } var n = e.indexOf("Edge/"); return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) } }), L.LatLngUtil = { cloneLatLngs: function(t) { for (var e = [], i = 0, o = t.length; i < o; i++) Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i])); return e }, cloneLatLng: function(t) { return L.latLng(t.lat, t.lng) } },
		function() { var t = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
			L.GeometryUtil = L.extend(L.GeometryUtil || {}, { geodesicArea: function(t) { var e, i, o = t.length,
						n = 0,
						a = Math.PI / 180; if (o > 2) { for (var s = 0; s < o; s++) e = t[s], i = t[(s + 1) % o], n += (i.lng - e.lng) * a * (2 + Math.sin(e.lat * a) + Math.sin(i.lat * a));
						n = 6378137 * n * 6378137 / 2 } return Math.abs(n) }, formattedNumber: function(t, e) { var i = parseFloat(t).toFixed(e),
						o = L.drawLocal.format && L.drawLocal.format.numeric,
						n = o && o.delimiters,
						a = n && n.thousands,
						s = n && n.decimal; if (a || s) { var r = i.split(".");
						i = a ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + a) : r[0], s = s || ".", r.length > 1 && (i = i + s + r[1]) } return i }, readableArea: function(e, i, o) { var n, a, o = L.Util.extend({}, t, o); return i ? (a = ["ha", "m"], type = typeof i, "string" === type ? a = [i] : "boolean" !== type && (a = i), n = e >= 1e6 && -1 !== a.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, o.km) + " km²" : e >= 1e4 && -1 !== a.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, o.ha) + " ha" : L.GeometryUtil.formattedNumber(e, o.m) + " m²") : (e /= .836127, n = e >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, o.mi) + " mi²" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, o.ac) + " acres" : L.GeometryUtil.formattedNumber(e, o.yd) + " yd²"), n }, readableDistance: function(e, i, o, n, a) { var s, a = L.Util.extend({}, t, a); switch (i ? "string" == typeof i ? i : "metric" : o ? "feet" : n ? "nauticalMile" : "yards") {
						case "metric":
							s = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, a.km) + " km" : L.GeometryUtil.formattedNumber(e, a.m) + " m"; break;
						case "feet":
							e *= 3.28083, s = L.GeometryUtil.formattedNumber(e, a.ft) + " ft"; break;
						case "nauticalMile":
							e *= .53996, s = L.GeometryUtil.formattedNumber(e / 1e3, a.nm) + " nm"; break;
						case "yards":
						default:
							e *= 1.09361, s = e > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, a.mi) + " miles" : L.GeometryUtil.formattedNumber(e, a.yd) + " yd" } return s } }) }(), L.Util.extend(L.LineUtil, { segmentsIntersect: function(t, e, i, o) { return this._checkCounterclockwise(t, i, o) !== this._checkCounterclockwise(e, i, o) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, o) }, _checkCounterclockwise: function(t, e, i) { return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x) } }), L.Polyline.include({ intersects: function() { var t, e, i, o = this._getProjectedPoints(),
					n = o ? o.length : 0; if (this._tooFewPointsForIntersection()) return !1; for (t = n - 1; t >= 3; t--)
					if (e = o[t - 1], i = o[t], this._lineSegmentsIntersectsRange(e, i, t - 2)) return !0; return !1 }, newLatLngIntersects: function(t, e) { return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e) }, newPointIntersects: function(t, e) { var i = this._getProjectedPoints(),
					o = i ? i.length : 0,
					n = i ? i[o - 1] : null,
					a = o - 2; return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(n, t, a, e ? 1 : 0) }, _tooFewPointsForIntersection: function(t) { var e = this._getProjectedPoints(),
					i = e ? e.length : 0; return i += t || 0, !e || i <= 3 }, _lineSegmentsIntersectsRange: function(t, e, i, o) { var n, a, s = this._getProjectedPoints();
				o = o || 0; for (var r = i; r > o; r--)
					if (n = s[r - 1], a = s[r], L.LineUtil.segmentsIntersect(t, e, n, a)) return !0; return !1 }, _getProjectedPoints: function() { if (!this._defaultShape) return this._originalPoints; for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++) t.push(this._map.latLngToLayerPoint(e[i])); return t } }), L.Polygon.include({ intersects: function() { var t, e, i, o, n = this._getProjectedPoints(); return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = n.length, e = n[0], i = n[t - 1], o = t - 2, this._lineSegmentsIntersectsRange(i, e, o, 1))) } }), L.Control.Draw = L.Control.extend({ options: { position: "topleft", draw: {}, edit: !1 }, initialize: function(t) { if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
				L.Control.prototype.initialize.call(this, t); var e;
				this._toolbars = {}, L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = e, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = e, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this }, onAdd: function(t) { var e, i = L.DomUtil.create("div", "leaflet-draw"),
					o = !1; for (var n in this._toolbars) this._toolbars.hasOwnProperty(n) && (e = this._toolbars[n].addToolbar(t)) && (o || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"), o = !0), i.appendChild(e)); return i }, onRemove: function() { for (var t in this._toolbars) this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar() }, setDrawingOptions: function(t) { for (var e in this._toolbars) this._toolbars[e] instanceof L.DrawToolbar && this._toolbars[e].setOptions(t) }, _toolbarEnabled: function(t) { var e = t.target; for (var i in this._toolbars) this._toolbars[i] !== e && this._toolbars[i].disable() } }), L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }), L.Map.addInitHook(function() { this.options.drawControl && (this.drawControl = new L.Control.Draw, this.addControl(this.drawControl)) }), L.Toolbar = L.Class.extend({ includes: [L.Mixin.Events], initialize: function(t) { L.setOptions(this, t), this._modes = {}, this._actionButtons = [], this._activeMode = null }, enabled: function() { return null !== this._activeMode }, disable: function() { this.enabled() && this._activeMode.handler.disable() }, addToolbar: function(t) { var e, i = L.DomUtil.create("div", "leaflet-draw-section"),
					o = 0,
					n = this._toolbarClass || "",
					a = this.getModeHandlers(t); for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = t, e = 0; e < a.length; e++) a[e].enabled && this._initModeHandler(a[e].handler, this._toolbarContainer, o++, n, a[e].title); if (o) return this._lastButtonIndex = --o, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), i.appendChild(this._toolbarContainer), i.appendChild(this._actionsContainer), i }, removeToolbar: function() { for (var t in this._modes) this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler), this._modes[t].handler.disable(), this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
				this._modes = {}; for (var e = 0, i = this._actionButtons.length; e < i; e++) this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
				this._actionButtons = [], this._actionsContainer = null }, _initModeHandler: function(t, e, i, o, n) { var a = t.type;
				this._modes[a] = {}, this._modes[a].handler = t, this._modes[a].button = this._createButton({ type: a, title: n, className: o + "-" + a, container: e, callback: this._modes[a].handler.enable, context: this._modes[a].handler }), this._modes[a].buttonIndex = i, this._modes[a].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this) }, _detectIOS: function() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream }, _createButton: function(t) { var e = L.DomUtil.create("a", t.className || "", t.container),
					i = L.DomUtil.create("span", "sr-only", t.container);
				e.href = "#", e.appendChild(i), t.title && (e.title = t.title, i.innerHTML = t.title), t.text && (e.innerHTML = t.text, i.innerHTML = t.text); var o = this._detectIOS() ? "touchstart" : "click"; return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, o, t.callback, t.context), e }, _disposeButton: function(t, e) { var i = this._detectIOS() ? "touchstart" : "click";
				L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e) }, _handlerActivated: function(t) { this.disable(), this._activeMode = this._modes[t.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable") }, _handlerDeactivated: function() { this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable") }, _createActions: function(t) { var e, i, o, n, a = this._actionsContainer,
					s = this.getActions(t),
					r = s.length; for (i = 0, o = this._actionButtons.length; i < o; i++) this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback); for (this._actionButtons = []; a.firstChild;) a.removeChild(a.firstChild); for (var l = 0; l < r; l++) "enabled" in s[l] && !s[l].enabled || (e = L.DomUtil.create("li", "", a), n = this._createButton({ title: s[l].title, text: s[l].text, container: e, callback: s[l].callback, context: s[l].context }), this._actionButtons.push({ button: n, callback: s[l].callback })) }, _showActionsToolbar: function() { var t = this._activeMode.buttonIndex,
					e = this._lastButtonIndex,
					i = this._activeMode.button.offsetTop - 1;
				this._createActions(this._activeMode.handler), this._actionsContainer.style.top = i + "px", 0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block" }, _hideActionsToolbar: function() { this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom") } }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({ initialize: function(t) { this._map = t, this._popupPane = t._panes.popupPane, this._visible = !1, this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this) }, dispose: function() { this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null) }, updateContent: function(t) { return this._container ? (t.subtext = t.subtext || "", 0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>", t.text || t.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this }, updatePosition: function(t) { var e = this._map.latLngToLayerPoint(t),
					i = this._container; return this._container && (this._visible && (i.style.visibility = "inherit"), L.DomUtil.setPosition(i, e)), this }, showAsError: function() { return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this }, removeError: function() { return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this }, _onMouseOut: function() { this._container && (this._container.style.visibility = "hidden") } }), L.DrawToolbar = L.Toolbar.extend({ statics: { TYPE: "draw" }, options: { polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {} }, initialize: function(t) { for (var e in this.options) this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
				this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, t) }, getModeHandlers: function(t) { return [{ enabled: this.options.polyline, handler: new L.Draw.Polyline(t, this.options.polyline), title: L.drawLocal.draw.toolbar.buttons.polyline }, { enabled: this.options.polygon, handler: new L.Draw.Polygon(t, this.options.polygon), title: L.drawLocal.draw.toolbar.buttons.polygon }, { enabled: this.options.rectangle, handler: new L.Draw.Rectangle(t, this.options.rectangle), title: L.drawLocal.draw.toolbar.buttons.rectangle }, { enabled: this.options.circle, handler: new L.Draw.Circle(t, this.options.circle), title: L.drawLocal.draw.toolbar.buttons.circle }, { enabled: this.options.marker, handler: new L.Draw.Marker(t, this.options.marker), title: L.drawLocal.draw.toolbar.buttons.marker }, { enabled: this.options.circlemarker, handler: new L.Draw.CircleMarker(t, this.options.circlemarker), title: L.drawLocal.draw.toolbar.buttons.circlemarker }] }, getActions: function(t) { return [{ enabled: t.completeShape, title: L.drawLocal.draw.toolbar.finish.title, text: L.drawLocal.draw.toolbar.finish.text, callback: t.completeShape, context: t }, { enabled: t.deleteLastVertex, title: L.drawLocal.draw.toolbar.undo.title, text: L.drawLocal.draw.toolbar.undo.text, callback: t.deleteLastVertex, context: t }, { title: L.drawLocal.draw.toolbar.actions.title, text: L.drawLocal.draw.toolbar.actions.text, callback: this.disable, context: this }] }, setOptions: function(t) { L.setOptions(this, t); for (var e in this._modes) this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e]) } }), L.EditToolbar = L.Toolbar.extend({ statics: { TYPE: "edit" }, options: { edit: { selectedPathOptions: { dashArray: "10, 10", fill: !0, fillColor: "#fe57a1", fillOpacity: .1, maintainColor: !1 } }, remove: {}, poly: null, featureGroup: null }, initialize: function(t) { t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions), t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)), t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)), t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, t), this._selectedFeatureCount = 0 }, getModeHandlers: function(t) { var e = this.options.featureGroup; return [{ enabled: this.options.edit, handler: new L.EditToolbar.Edit(t, { featureGroup: e, selectedPathOptions: this.options.edit.selectedPathOptions, poly: this.options.poly }), title: L.drawLocal.edit.toolbar.buttons.edit }, { enabled: this.options.remove, handler: new L.EditToolbar.Delete(t, { featureGroup: e }), title: L.drawLocal.edit.toolbar.buttons.remove }] }, getActions: function(t) { var e = [{ title: L.drawLocal.edit.toolbar.actions.save.title, text: L.drawLocal.edit.toolbar.actions.save.text, callback: this._save, context: this }, { title: L.drawLocal.edit.toolbar.actions.cancel.title, text: L.drawLocal.edit.toolbar.actions.cancel.text, callback: this.disable, context: this }]; return t.removeAllLayers && e.push({ title: L.drawLocal.edit.toolbar.actions.clearAll.title, text: L.drawLocal.edit.toolbar.actions.clearAll.text, callback: this._clearAllLayers, context: this }), e }, addToolbar: function(t) { var e = L.Toolbar.prototype.addToolbar.call(this, t); return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), e }, removeToolbar: function() { this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this) }, disable: function() { this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this)) }, _save: function() { this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable() }, _clearAllLayers: function() { this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable() }, _checkDisabled: function() { var t, e = this.options.featureGroup,
					i = 0 !== e.getLayers().length;
				this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button, i ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", i ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button, i ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", i ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled)) } }), L.EditToolbar.Edit = L.Handler.extend({ statics: { TYPE: "edit" }, includes: L.Mixin.Events, initialize: function(t, e) { if (L.Handler.prototype.initialize.call(this, t), L.setOptions(this, e), this._featureGroup = e.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
				this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE }, enable: function() {!this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this)) }, disable: function() { this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type })) }, addHooks: function() { var t = this._map;
				t && (t.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext }), t._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this)) }, removeHooks: function() { this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this)) }, revertLayers: function() { this._featureGroup.eachLayer(function(t) { this._revertLayer(t) }, this) }, save: function() { var t = new L.LayerGroup;
				this._featureGroup.eachLayer(function(e) { e.edited && (t.addLayer(e), e.edited = !1) }), this._map.fire(L.Draw.Event.EDITED, { layers: t }) }, _backupLayer: function(t) { var e = L.Util.stamp(t);
				this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = { latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs()) } : t instanceof L.Circle ? this._uneditedLayerProps[e] = { latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()), radius: t.getRadius() } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = { latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()) })) }, _getTooltipText: function() { return { text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext } }, _updateTooltip: function() { this._tooltip.updateContent(this._getTooltipText()) }, _revertLayer: function(t) { var e = L.Util.stamp(t);
				t.edited = !1, this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng), t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng), t.fire("revert-edited", { layer: t })) }, _enableLayerEdit: function(t) { var e, i, o = t.layer || t.target || t;
				this._backupLayer(o), this.options.poly && (i = L.Util.extend({}, this.options.poly), o.options.poly = i), this.options.selectedPathOptions && (e = L.Util.extend({}, this.options.selectedPathOptions), e.maintainColor && (e.color = o.options.color, e.fillColor = o.options.fillColor), o.options.original = L.extend({}, o.options), o.options.editing = e), o instanceof L.Marker ? (o.editing && o.editing.enable(), o.dragging.enable(), o.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : o.editing.enable() }, _disableLayerEdit: function(t) { var e = t.layer || t.target || t;
				e.edited = !1, e.editing && e.editing.disable(), delete e.options.editing, delete e.options.original, this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions)), e instanceof L.Marker ? (e.dragging.disable(), e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable() }, _onMouseMove: function(t) { this._tooltip.updatePosition(t.latlng) }, _onMarkerDragEnd: function(t) { var e = t.target;
				e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: e }) }, _onTouchMove: function(t) { var e = t.originalEvent.changedTouches[0],
					i = this._map.mouseEventToLayerPoint(e),
					o = this._map.layerPointToLatLng(i);
				t.target.setLatLng(o) }, _hasAvailableLayers: function() { return 0 !== this._featureGroup.getLayers().length } }), L.EditToolbar.Delete = L.Handler.extend({
			statics: { TYPE: "remove" },
			includes: L.Mixin.Events,
			initialize: function(t, e) { if (L.Handler.prototype.initialize.call(this, t), L.Util.setOptions(this, e), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
				this.type = L.EditToolbar.Delete.TYPE },
			enable: function() {!this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this)) },
			disable: function() { this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }), this.fire("disabled", { handler: this.type })) },
			addHooks: function() { var t = this._map;
				t && (t.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup, this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.remove.tooltip.text }), this._map.on("mousemove", this._onMouseMove, this)) },
			removeHooks: function() {
				this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
			},
			revertLayers: function() { this._deletedLayers.eachLayer(function(t) { this._deletableLayers.addLayer(t), t.fire("revert-deleted", { layer: t }) }, this) },
			save: function() { this._map.fire(L.Draw.Event.DELETED, { layers: this._deletedLayers }) },
			removeAllLayers: function() { this._deletableLayers.eachLayer(function(t) { this._removeLayer({ layer: t }) }, this), this.save() },
			_enableLayerDelete: function(t) {
				(t.layer || t.target || t).on("click", this._removeLayer, this) },
			_disableLayerDelete: function(t) { var e = t.layer || t.target || t;
				e.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(e) },
			_removeLayer: function(t) { var e = t.layer || t.target || t;
				this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), e.fire("deleted") },
			_onMouseMove: function(t) { this._tooltip.updatePosition(t.latlng) },
			_hasAvailableLayers: function() { return 0 !== this._deletableLayers.getLayers().length }
		})
}(window, document);

function cloneOptions(options) {
	var ret = {};
	for (var i in options) {
		var item = options[i];
		if (item && item.clone) {
			ret[i] = item.clone();
		}
		else if (item instanceof L.Layer) {
			ret[i] = cloneLayer(item);
		}
		else {
			ret[i] = item;
		}
	}
	return ret;
}

function cloneInnerLayers(layer) {
	var layers = [];
	layer.eachLayer(function(inner) {
		layers.push(cloneLayer(inner));
	});
	return layers;
}

function cloneLayer(layer) {
	var options = cloneOptions(layer.options);
	// we need to test for the most specific class first, i.e.
	// Circle before CircleMarker
	// Renderers
	if (layer instanceof L.SVG) {
		return L.svg(options);
	}
	if (layer instanceof L.Canvas) {
		return L.canvas(options);
	}
	// Tile layers
	if (layer instanceof L.TileLayer) {
		return L.tileLayer(layer._url, options);
	}
	if (layer instanceof L.ImageOverlay) {
		return L.imageOverlay(layer._url, layer._bounds, options);
	}
	// Marker layers
	if (layer instanceof L.Marker) {
		return L.marker(layer.getLatLng(), options);
	}
	if (layer instanceof L.Circle) {
		return L.circle(layer.getLatLng(), layer.getRadius(), options);
	}
	if (layer instanceof L.CircleMarker) {
		return L.circleMarker(layer.getLatLng(), options);
	}
	if (layer instanceof L.Rectangle) {
		return L.rectangle(layer.getBounds(), options);
	}
	if (layer instanceof L.Polygon) {
		return L.polygon(layer.getLatLngs(), options);
	}
	if (layer instanceof L.Polyline) {
		return L.polyline(layer.getLatLngs(), options);
	}
	if (layer instanceof L.GeoJSON) {
		return L.geoJson(layer.toGeoJSON(), options);
	}
	if (layer instanceof L.LayerGroup) {
		return L.layerGroup(cloneInnerLayers(layer));
	}
	if (layer instanceof L.FeatureGroup) {
		return L.FeatureGroup(cloneInnerLayers(layer));
	}
	throw 'Unknown layer, cannot clone this layer. Leaflet-version: ' + L.version;
}
if (typeof exports === 'object') {
	module.exports = cloneLayer;
}
