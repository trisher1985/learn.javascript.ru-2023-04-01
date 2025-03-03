var coursesFrontpage = function(t) {
var i = {};
function e(r) {
if (i[r]) return i[r].exports;
var s = i[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(s.exports, s, s.exports, e), s.l = !0, s.exports;
}
return e.m = t, e.c = i, e.d = function(t, i, r) {
e.o(t, i) || Object.defineProperty(t, i, {
enumerable: !0,
get: r
});
}, e.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, e.t = function(t, i) {
if (1 & i && (t = e(t)), 8 & i) return t;
if (4 & i && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (e.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & i && "string" != typeof t) for (var s in t) e.d(r, s, function(i) {
return t[i];
}.bind(null, s));
return r;
}, e.n = function(t) {
var i = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return e.d(i, "a", i), i;
}, e.o = function(t, i) {
return Object.prototype.hasOwnProperty.call(t, i);
}, e.p = "/pack/", e(e.s = 3);
}([ function(t, i) {
t.exports = function(t) {
var i = typeof t;
return null != t && ("object" == i || "function" == i);
};
}, function(t, i, e) {
var r = e(9), s = "object" == typeof self && self && self.Object === Object && self, n = r || s || Function("return this")();
t.exports = n;
}, function(t, i, e) {
var r = e(1).Symbol;
t.exports = r;
}, function(t, i, e) {
const r = e(4), s = e(5);
!function() {
const t = document.querySelector("[data-participants-slider]");
t && new s({
el: t
});
}();
const n = document.querySelector(".courses-feedback-inline");
n && new r({
elem: n
});
}, function(t, i) {
t.exports = class {
constructor({elem: t}) {
this.elem = t, this.list = t.querySelector("[data-slides]"), this.arrowLeft = t.querySelector("[data-arrow-left]"), 
this.arrowRight = t.querySelector("[data-arrow-right]"), this.position = 0, this.arrowRight.onclick = this.next.bind(this), 
this.arrowLeft.onclick = this.prev.bind(this), this.render();
}
next() {
this.position != this.list.children.length - 1 && (this.position++, this.render());
}
setPosition(t) {
this.position = t, this.render();
}
prev() {
0 != this.position && (this.position--, this.render());
}
render() {
this.list.style.transform = this.position ? "translate3d(-".concat(this.position, "00%,0,0)") : "", 
0 === this.position ? this.arrowLeft.setAttribute("data-arrow-hidden", 1) : this.arrowLeft.removeAttribute("data-arrow-hidden"), 
this.position == this.list.children.length - 1 ? this.arrowRight.setAttribute("data-arrow-hidden", 1) : this.arrowRight.removeAttribute("data-arrow-hidden");
}
};
}, function(t, i, e) {
let r = e(6);
t.exports = class {
constructor(t) {
this.slider = t.el, this.list = this.slider.querySelector("ul"), t.class && (this.classList = t.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const t = document.createElement("div");
t.classList.add("slider__container"), t.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(t), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce(((t, i) => {
const e = window.getComputedStyle(i);
return t + (i.offsetWidth + parseFloat(e.marginLeft) + parseFloat(e.marginRight));
}), 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", (() => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
})), this.arrowRight.addEventListener("click", (() => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
})), window.addEventListener("resize", r((() => {
this.onResize();
}), 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? "translateX(".concat(-this.transformX, "px)") : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
}, function(t, i, e) {
var r = e(7), s = e(0), n = "Expected a function";
t.exports = function(t, i, e) {
var o = !0, l = !0;
if ("function" != typeof t) throw new TypeError(n);
return s(e) && (o = "leading" in e ? !!e.leading : o, l = "trailing" in e ? !!e.trailing : l), 
r(t, i, {
leading: o,
maxWait: i,
trailing: l
});
};
}, function(t, i, e) {
var r = e(0), s = e(8), n = e(11), o = "Expected a function", l = Math.max, a = Math.min;
t.exports = function(t, i, e) {
var d, c, h, u, f, p, b = 0, v = !1, m = !1, g = !0;
if ("function" != typeof t) throw new TypeError(o);
function y(i) {
var e = d, r = c;
return d = c = void 0, b = i, u = t.apply(r, e);
}
function w(t) {
var e = t - p;
return void 0 === p || e >= i || e < 0 || m && t - b >= h;
}
function _() {
var t = s();
if (w(t)) return x(t);
f = setTimeout(_, function(t) {
var e = i - (t - p);
return m ? a(e, h - (t - b)) : e;
}(t));
}
function x(t) {
return f = void 0, g && d ? y(t) : (d = c = void 0, u);
}
function L() {
var t = s(), e = w(t);
if (d = arguments, c = this, p = t, e) {
if (void 0 === f) return function(t) {
return b = t, f = setTimeout(_, i), v ? y(t) : u;
}(p);
if (m) return clearTimeout(f), f = setTimeout(_, i), y(p);
}
return void 0 === f && (f = setTimeout(_, i)), u;
}
return i = n(i) || 0, r(e) && (v = !!e.leading, h = (m = "maxWait" in e) ? l(n(e.maxWait) || 0, i) : h, 
g = "trailing" in e ? !!e.trailing : g), L.cancel = function() {
void 0 !== f && clearTimeout(f), b = 0, d = p = c = f = void 0;
}, L.flush = function() {
return void 0 === f ? u : x(s());
}, L;
};
}, function(t, i, e) {
var r = e(1);
t.exports = function() {
return r.Date.now();
};
}, function(t, i, e) {
(function(i) {
var e = "object" == typeof i && i && i.Object === Object && i;
t.exports = e;
}).call(this, e(10));
}, function(t, i) {
var e;
e = function() {
return this;
}();
try {
e = e || new Function("return this")();
} catch (t) {
"object" == typeof window && (e = window);
}
t.exports = e;
}, function(t, i, e) {
var r = e(0), s = e(12), n = NaN, o = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, d = /^0o[0-7]+$/i, c = parseInt;
t.exports = function(t) {
if ("number" == typeof t) return t;
if (s(t)) return n;
if (r(t)) {
var i = "function" == typeof t.valueOf ? t.valueOf() : t;
t = r(i) ? i + "" : i;
}
if ("string" != typeof t) return 0 === t ? t : +t;
t = t.replace(o, "");
var e = a.test(t);
return e || d.test(t) ? c(t.slice(2), e ? 2 : 8) : l.test(t) ? n : +t;
};
}, function(t, i, e) {
var r = e(13), s = e(16), n = "[object Symbol]";
t.exports = function(t) {
return "symbol" == typeof t || s(t) && r(t) == n;
};
}, function(t, i, e) {
var r = e(2), s = e(14), n = e(15), o = "[object Null]", l = "[object Undefined]", a = r ? r.toStringTag : void 0;
t.exports = function(t) {
return null == t ? void 0 === t ? l : o : a && a in Object(t) ? s(t) : n(t);
};
}, function(t, i, e) {
var r = e(2), s = Object.prototype, n = s.hasOwnProperty, o = s.toString, l = r ? r.toStringTag : void 0;
t.exports = function(t) {
var i = n.call(t, l), e = t[l];
try {
t[l] = void 0;
var r = !0;
} catch (t) {}
var s = o.call(t);
return r && (i ? t[l] = e : delete t[l]), s;
};
}, function(t, i) {
var e = Object.prototype.toString;
t.exports = function(t) {
return e.call(t);
};
}, function(t, i) {
t.exports = function(t) {
return null != t && "object" == typeof t;
};
} ]);
//# sourceMappingURL=coursesFrontpage.919041c904855b7aaa06.js.map