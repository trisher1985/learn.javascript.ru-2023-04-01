/*! For license information please see ebook.58c947811fed07aca489.js.LICENSE.txt */
var ebook = function(e) {
var t = {};
function r(n) {
if (t[n]) return t[n].exports;
var o = t[n] = {
i: n,
l: !1,
exports: {}
};
return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
}
return r.m = e, r.c = t, r.d = function(e, t, n) {
r.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: n
});
}, r.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, r.t = function(e, t) {
if (1 & t && (e = r(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var n = Object.create(null);
if (r.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function(t) {
return e[t];
}.bind(null, o));
return n;
}, r.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return r.d(t, "a", t), t;
}, r.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, r.p = "/pack/", r(r.s = 5);
}([ function(e, t) {
e.exports = {
lang: "ru",
localCurrency: "RUB",
shopCurrency: "RUB",
env: "production",
rateShopTo: void 0,
countryCode,
ordersMail: "orders@javascript.info",
providers: [ {
name: "Github",
id: "github"
}, {
name: "Discord",
id: "discord"
}, {
name: "Facebook",
id: "facebook"
}, {
name: "Google",
id: "google"
}, {
name: "Яндекс",
id: "yandex"
}, {
name: "Вконтакте",
id: "vkontakte"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
paypalClientId: "Ac86EanyVr7jcO5a_EwTK2vg1MGguuNX27jI4oC120g8xLMuAKmayooEcpc-mODQd4Gsmm7yqA1C7NM-",
lookatCodeUrlBase: "https://lookatcode.com"
};
}, function(e, t, r) {
"use strict";
r.r(t), r.d(t, "init", (function() {
return i;
})), r.d(t, "Info", (function() {
return s;
})), r.d(t, "Warning", (function() {
return c;
})), r.d(t, "Success", (function() {
return u;
})), r.d(t, "Error", (function() {
return l;
}));
let n = r(4);
class o {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout((() => this.recalculate()), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach((t => {
t.top = e, e += t.height + this.verticalSpace;
}));
}
}
function i(e) {
window.notificationManager || (window.notificationManager = new o(e));
}
class a {
constructor(e, t, r) {
let n = '<div class="notification notification_popup notification_'.concat(t, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", n), this.elem = document.body.lastElementChild, 
r) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = r;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", (() => this.close()));
}
setupCloseTimeout() {
this.timeout && setTimeout((() => this.close()), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
n.delegateMixin(a.prototype);
class s extends a {
constructor(e, t) {
super(e, "info", t);
}
}
class c extends a {
constructor(e, t) {
super(e, "warning", t);
}
}
class u extends a {
constructor(e, t) {
super(e, "success", t);
}
}
class l extends a {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
}, function(e, t, r) {
"use strict";
const n = new (r(9))("en");
let o = console.error;
function i(e) {
return n.hasPhrase(a, e) || o("No such phrase", e), n.t(a, ...arguments);
}
e.exports = i;
const a = r(0).lang;
"en" !== a && n.setFallback(a, "en"), n.add = (...e) => n.addPhrase(a, ...e), i.i18n = n;
}, function(e, t, r) {
let n = r(1), o = r(8);
const i = r(0).lang, a = r(2);
a.i18n.add("", r(13)("./" + i + ".yml")), a.i18n.add("error.network", r(15)("./" + i + ".yml")), 
document.addEventListener("xhrfail", (function(e) {
new n.Error(e.reason);
})), e.exports = function(e) {
let t = new XMLHttpRequest, r = e.method || "GET", n = e.body, i = e.url;
t.open(r, i, !e.sync), t.method = r;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(n) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
n = JSON.stringify(n)), e.noDocumentEvents || (t.addEventListener("loadstart", (e => {
t.timeStart = Date.now();
let r = u("xhrstart", e);
document.dispatchEvent(r);
})), t.addEventListener("loadend", (e => {
let t = u("xhrend", e);
document.dispatchEvent(t);
})), t.addEventListener("success", (e => {
let t = u("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
})), t.addEventListener("fail", (e => {
let t = u("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
}))), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function u(e, t) {
let r = new CustomEvent(e);
return r.originalEvent = t, r;
}
function l(e, r) {
let n = u("fail", r);
n.reason = e, t.dispatchEvent(n);
}
return t.addEventListener("error", (e => {
l(a("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
l(a("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
l(a("error.network.request_aborted"), e);
})), t.addEventListener("load", (r => {
if (!t.status) return void l(a("error.network.no_response"), r);
let n = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (r) {
return void l(a("error.network.invalid_format"), r);
}
if (c.includes(t.status)) !function(e, r) {
let n = u("success", r);
n.result = e, t.dispatchEvent(n);
}(n, r); else {
l(n.info ? a("error.network.server_error_info", {
status: t.status,
info: n.info
}) : a("error.network.server_error", {
status: t.status
}), r);
}
})), setTimeout((function() {
t.send(n);
})), t;
};
}, function(e, t) {
function r(e, t, r, n, o) {
e.addEventListener(r, (function(e) {
let r = function(e, t) {
let r = e.target;
for (;r; ) {
if (r.matches(t)) return r;
if (r == e.currentTarget) break;
r = r.parentElement;
}
return null;
}(e, t);
e.delegateTarget = r, r && n.call(o || this, e);
}));
}
r.delegateMixin = function(e) {
e.delegate = function(e, t, n) {
r(this.elem, e, t, n, this);
};
}, e.exports = r;
}, function(e, t, r) {
r(6), e.exports = r(26);
}, function(e, t, r) {
let n = r(7);
!function() {
let e = document.querySelector("[data-order-form]");
e && new n({
elem: e
});
}();
}, function(e, t, r) {
r(3);
let n = r(1), o = r(4), i = r(17).FormPayment;
r(0);
const a = r(2), s = r(0).lang;
a.i18n.add("ebook", r(24)("./" + s + ".yml"));
class c {
constructor(e) {
this.elem = e.elem, this.product = "ebook", this.elem.addEventListener("submit", (e => this.onSubmit(e))), 
this.delegate("[data-order-payment-change]", "click", (function(e) {
e.preventDefault(), this.elem.querySelector("[data-order-form-step-payment]").style.display = "block", 
this.elem.querySelector("[data-order-form-step-confirm]").style.display = "none", 
this.elem.querySelector("[data-order-form-step-receipt]").style.display = "none";
})), this.delegate(".new-complex-form__extract .extract__item", "click", (function(e) {
e.delegateTarget.querySelector('[type="radio"]').checked = !0;
})), this.elem.addEventListener("change", (e => this.onChange(e))), this.formPayment = new i(this, this.elem), 
this.showHidePaypalButtons();
}
onSubmit(e) {
e.preventDefault(), this.formPayment.submit();
}
onChange(e) {
this.showHidePaypalButtons();
}
showHidePaypalButtons() {
document.querySelector("#input-paypal") && (document.querySelector("#input-paypal").checked ? (document.querySelector("[data-pay-paypal-buttons]").style.display = "block", 
document.querySelector("[data-pay-regular-buttons]").style.display = "none") : (document.querySelector("[data-pay-paypal-buttons]").style.display = "none", 
document.querySelector("[data-pay-regular-buttons]").style.display = "block"));
}
getOrderData() {
let e = {};
if (window.order) e.orderNumber = window.order.number, e.amount = window.order.amount, 
e.title = window.order.title, e.email = window.order.email; else {
let t = this.elem.querySelector('input[name="orderTemplate"]:checked');
e.orderTemplate = t.value, e.amount = t.dataset.price, e.title = t.dataset.title;
}
if (this.elem.elements.email) {
if (!this.elem.elements.email.value) return new n.Error(a("ebook.client.enter_email")), 
this.elem.elements.email.scrollIntoView(), setTimeout((function() {
window.scrollBy(0, -200);
}), 0), void this.elem.elements.email.focus();
e.email = this.elem.elements.email.value;
}
return e.email || (e.email = window.currentUser.email), e;
}
}
o.delegateMixin(c.prototype), e.exports = c;
}, function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, function(e, t, r) {
e.exports = r(10);
}, function(e, t, r) {
"use strict";
var n = r(11), o = r(12);
function i(e) {
return Object.prototype.toString.call(e);
}
function a(e) {
return "[object String]" === i(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === i(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === i(e);
}, d = Array.prototype.forEach;
function p(e, t, r) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, r); else if (e.length === +e.length) for (var n = 0, o = e.length; n < o; n += 1) t.call(r, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(r, e[i], i, e);
}
var f = /%[sdj%]/g;
function h(e) {
var t = 1, r = arguments, n = r.length;
return String(e).replace(f, (function(e) {
if ("%%" === e) return "%";
if (t >= n) return e;
switch (e) {
case "%s":
return String(r[t++]);

case "%d":
return Number(r[t++]);

case "%j":
return JSON.stringify(r[t++]);

default:
return e;
}
}));
}
var m = "en";
function y(e) {
var t = {};
return p(e || {}, (function(e, r) {
e && "object" == typeof e ? p(y(e), (function(e, n) {
t[r + "." + n] = e;
})) : t[r] = e;
})), t;
}
var v = "#@$";
function _(e, t) {
return e + v + t;
}
function g(e, t, r) {
var n = _(t, r), o = e._storage;
if (o.hasOwnProperty(n)) return n;
if (t === e._defaultLocale) return null;
var i = e._fallbacks_cache;
if (i.hasOwnProperty(n)) return i[n];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (a = _(s[c], r), 
o.hasOwnProperty(a)) return i[n] = a, i[n];
return i[n] = null, null;
}
function b(e, t, r) {
var n = o.indexOf(e, t);
return -1 === n ? h('[pluralizer for "%s" locale not found]', e) : void 0 === r[n] ? h('[plural form %d ("%s") not found in translation]', n, o.forms(e)[n]) : r[n];
}
function w(e) {
if (!(this instanceof w)) return new w(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(e, t, r, n) {
var o, i = this;
if (c(n)) o = n ? 1 / 0 : 0; else if (s(n)) {
if ((o = Math.floor(n)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(r) && o > 0) return p(r, (function(r, n) {
i.addPhrase(e, (t ? t + "." : "") + n, r, o - 1);
})), this;
if (a(r)) this._storage[_(e, t)] = {
translation: r,
locale: e,
raw: !1
}; else {
if (!(l(r) || s(r) || c(r) || 0 === o && u(r))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[_(e, t)] = {
translation: r,
locale: e,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(e, t) {
var r = this._defaultLocale;
if (r === e) throw new Error("Default locale can't have fallbacks");
var n = l(t) ? t.slice() : [ t ];
return n[n.length - 1] !== r && n.push(r), this._fallbacks[e] = n, this._fallbacks_cache = {}, 
this;
};
var E = /#\{|\(\(|\\\\/;
w.prototype.translate = function(e, t, r) {
var o, c = g(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, r) {
var o, i, a, s, c, u;
return E.test(t) ? 1 === (o = n.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[r] || (e._plurals_cache[r] = new w(r)), 
u = e._plurals_cache[r], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), p(o, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void i.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, p(e.strict, (function(t, o) {
var i = n.parse(t);
if (1 === i.length && "literal" === i[0].type) return s[o] = !1, void (e.strict[o] = i[0].text);
s[o] = !0, u.hasPhrase(r, t, !0) || u.addPhrase(r, t, t);
})), c = {}, p(e.forms, (function(t, o) {
var i, a = n.parse(t);
if (1 === a.length && "literal" === a[0].type) return i = a[0].text, e.forms[o] = i, 
void (c[i] = !1);
c[t] = !0, u.hasPhrase(r, t, !0) || u.addPhrase(r, t, t);
})), i.push(h("loc = %j;", r)), i.push(h("loc_plzr = %j;", r.split(/[-_]/)[0])), 
i.push(h("anchor = params[%j];", a)), i.push(h("cache = this._plurals_cache[loc];")), 
i.push(h("strict = %j;", e.strict)), i.push(h("strict_exec = %j;", s)), i.push(h("forms = %j;", e.forms)), 
i.push(h("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(h("str += %j;", e.text));
})), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((s(r) || a(r)) && (r = {
count: r,
value: r
}), o.compiled.call(this, r, y, b))) : e + ": No translation for [" + t + "]";
}, w.prototype.hasPhrase = function(e, t, r) {
return r ? this._storage.hasOwnProperty(_(e, t)) : !!g(this, e, t);
}, w.prototype.getLocale = function(e, t, r) {
if (r) return this._storage.hasOwnProperty(_(e, t)) ? e : null;
var n = g(this, e, t);
return n ? n.split(v, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(e) {
var t = this, r = {};
p(this._storage, (function(e, t) {
r[t.split(v)[1]] = !0;
}));
var n = {};
p(r, (function(r, o) {
var i = g(t, e, o);
if (i) {
var a = t._storage[i].locale;
n[a] || (n[a] = {}), n[a][o] = t._storage[i].translation;
}
}));
var o = {
fallback: {},
locales: n
}, i = (t._fallbacks[e] || []).slice(0, -1);
return i.length && (o.fallback[e] = i), JSON.stringify(o);
}, w.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), p(e.locales, (function(e, r) {
p(e, (function(e, n) {
t.addPhrase(r, n, e, 0);
}));
})), p(e.fallback, (function(e, r) {
t.setFallback(r, e);
})), this;
}, e.exports = w;
}, function(e, t) {
e.exports = function() {
function e(e, t, r, n, o, i) {
this.message = e, this.expected = t, this.found = r, this.offset = n, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(e, t) {
function r() {
this.constructor = e;
}
r.prototype = t.prototype, e.prototype = new r;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var r, n = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: le
}, a = le, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, f = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: we(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, y = function(e, t) {
return [ e ].concat(t);
}, v = function(e) {
return [ e ];
}, _ = "=", g = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, E = " ", k = {
type: "literal",
value: " ",
description: '" "'
}, F = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, x = function() {
return {
text: ae()
};
}, S = "\\", j = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, A = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, T = function(e) {
return e;
}, C = void 0, P = {
type: "any",
description: "any character"
}, q = function() {
return ae();
}, M = ":", L = {
type: "literal",
value: ":",
description: '":"'
}, N = function(e) {
return e;
}, R = "#{", U = {
type: "literal",
value: "#{",
description: '"#{"'
}, I = "}", z = {
type: "literal",
value: "}",
description: '"}"'
}, D = function(e) {
return {
type: "variable",
anchor: e
};
}, B = ".", H = {
type: "literal",
value: ".",
description: '"."'
}, J = function() {
return ae();
}, W = /^[a-zA-Z_$]/, $ = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, G = /^[a-zA-Z0-9_$]/, K = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, V = function(e) {
return e;
}, X = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, Y = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, re = {
line: 1,
column: 1,
seenCR: !1
}, ne = 0, oe = [], ie = 0;
if ("startRule" in n) {
if (!(n.startRule in i)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
a = i[n.startRule];
}
function ae() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, re = {
line: 1,
column: 1,
seenCR: !1
}), function(e, r, n) {
var o, i;
for (o = r; o < n; o++) "\n" === (i = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(re, te, e), te = e), re;
}
function ce(e) {
Q < ne || (Q > ne && (ne = Q, oe = []), oe.push(e));
}
function ue(r, n, o) {
var i = se(o), a = o < t.length ? t.charAt(o) : null;
return null !== n && function(e) {
var t = 1;
for (e.sort((function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
})); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(n), new e(null !== r ? r : function(e, t) {
var r, n = new Array(e.length);
for (r = 0; r < e.length; r++) n[r] = e[r].description;
return "Expected " + (e.length > 1 ? n.slice(0, -1).join(", ") + " or " + n[e.length - 1] : n[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, (function(e) {
return "\\x0" + t(e);
})).replace(/[\x10-\x1F\x80-\xFF]/g, (function(e) {
return "\\x" + t(e);
})).replace(/[\u0180-\u0FFF]/g, (function(e) {
return "\\u0" + t(e);
})).replace(/[\u1080-\uFFFF]/g, (function(e) {
return "\\u" + t(e);
}));
}(t) + '"' : "end of input") + " found.";
}(n, a), n, a, o, i.line, i.column);
}
function le() {
var e, t;
for (e = [], (t = _e()) === o && (t = de()) === o && (t = me()); t !== o; ) e.push(t), 
(t = _e()) === o && (t = de()) === o && (t = me());
return e;
}
function de() {
var e, r, n, i, a;
return e = Q, t.substr(Q, 2) === c ? (r = c, Q += 2) : (r = o, 0 === ie && ce(u)), 
r !== o && (n = pe()) !== o ? (t.substr(Q, 2) === l ? (i = l, Q += 2) : (i = o, 
0 === ie && ce(d)), i !== o ? (a = function() {
var e, r, n;
e = Q, 58 === t.charCodeAt(Q) ? (r = M, Q++) : (r = o, 0 === ie && ce(L));
r !== o && (n = ye()) !== o ? (ee = e, e = r = N(n)) : (Q = e, e = s);
return e;
}(), a === o && (a = p), a !== o ? (ee = e, e = r = f(n, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function pe() {
var e, r, n, i;
return e = Q, (r = fe()) !== o ? (124 === t.charCodeAt(Q) ? (n = h, Q++) : (n = o, 
0 === ie && ce(m)), n !== o && (i = pe()) !== o ? (ee = e, e = r = y(r, i)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (r = fe()) !== o && (ee = e, r = v(r)), 
e = r), e;
}
function fe() {
var e, r, n, i, a, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (r = _, Q++) : (r = o, 0 === ie && ce(g)), r !== o) {
if (n = [], b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(w)), 
i !== o) for (;i !== o; ) n.push(i), b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 
0 === ie && ce(w)); else n = s;
if (n !== o) if (32 === t.charCodeAt(Q) ? (i = E, Q++) : (i = o, 0 === ie && ce(k)), 
i === o && (i = p), i !== o) {
if (a = [], (c = he()) !== o) for (;c !== o; ) a.push(c), c = he(); else a = s;
a !== o ? (ee = e, e = r = F(n, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, r = [], (n = he()) !== o) for (;n !== o; ) r.push(n), n = he(); else r = s;
r !== o && (ee = e, r = x()), e = r;
}
return e;
}
function he() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = S, Q++) : (r = o, 0 === ie && ce(j)), 
r !== o ? (O.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(A)), 
n !== o ? (ee = e, e = r = T(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
r = Q, ie++, 124 === t.charCodeAt(Q) ? (n = h, Q++) : (n = o, 0 === ie && ce(m)), 
n === o && (t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = o, 0 === ie && ce(d))), 
ie--, n === o ? r = C : (Q = r, r = s), r !== o ? (t.length > Q ? (n = t.charAt(Q), 
Q++) : (n = o, 0 === ie && ce(P)), n !== o ? (ee = e, e = r = q()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, r, n, i;
return e = Q, t.substr(Q, 2) === R ? (r = R, Q += 2) : (r = o, 0 === ie && ce(U)), 
r !== o && (n = ye()) !== o ? (125 === t.charCodeAt(Q) ? (i = I, Q++) : (i = o, 
0 === ie && ce(z)), i !== o ? (ee = e, e = r = D(n)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ye() {
var e, r, n, i;
if (e = Q, ve() !== o) if (46 === t.charCodeAt(Q) ? (r = B, Q++) : (r = o, 0 === ie && ce(H)), 
r !== o) {
if (n = [], (i = ye()) !== o) for (;i !== o; ) n.push(i), i = ye(); else n = s;
n !== o ? (ee = e, e = J()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ve()), e;
}
function ve() {
var e, r, n, i;
if (e = Q, W.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce($)), 
r !== o) {
for (n = [], G.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(K)); i !== o; ) n.push(i), 
G.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(K));
n !== o ? (ee = e, e = r = q()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function _e() {
var e, t, r, n, i;
if (e = Q, t = [], r = Q, n = Q, ie++, (i = de()) === o && (i = me()), ie--, i === o ? n = C : (Q = n, 
n = s), n !== o && (i = ge()) !== o ? (ee = r, r = n = V(i)) : (Q = r, r = s), r !== o) for (;r !== o; ) t.push(r), 
r = Q, n = Q, ie++, (i = de()) === o && (i = me()), ie--, i === o ? n = C : (Q = n, 
n = s), n !== o && (i = ge()) !== o ? (ee = r, r = n = V(i)) : (Q = r, r = s); else t = s;
return t !== o && (ee = e, t = X(t)), e = t;
}
function ge() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = S, Q++) : (r = o, 0 === ie && ce(j)), 
r !== o ? (Z.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(Y)), 
n !== o ? (ee = e, e = r = T(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ie && ce(P))), e;
}
function be(e) {
for (var t = [], r = 0; r < e.length; r++) void 0 === e[r].strict && t.push(e[r].text);
return t;
}
function we(e) {
for (var t = {}, r = 0; r < e.length; r++) void 0 !== e[r].strict && (t[e[r].strict] = e[r].text);
return t;
}
if ((r = a()) !== o && Q === t.length) return r;
throw r !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, oe, ne);
}
};
}();
}, function(e, t, r) {
"use strict";
var n = {};
function o(e) {
var t;
return n[e] ? e : (t = e.toLowerCase().replace("_", "-"), n[t] ? t : (t = t.split("-")[0], 
n[t] ? t : null));
}
function i(e, t) {
var r = o(e);
if (!r) return -1;
if (!n[r].cFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return n[r].cFn(c, u, s, +a, l);
}
function a(e, t) {
var r = o(e);
if (!r) return -1;
if (!n[r].oFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return n[r].oFn(c, u, s, +a, l);
}
e.exports = function(e, t) {
var r = o(e);
return r ? n[r].c[i(r, t)] : null;
}, e.exports.indexOf = i, e.exports.forms = function(e) {
var t = o(e);
return n[t] ? n[t].c : null;
}, e.exports.ordinal = function(e, t) {
var r = o(e);
return n[r] ? n[r].o[a(r, t)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var t = o(e);
return n[t] ? n[t].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function c(e) {
return s[e];
}
function u(e, t) {
var r;
for (t.c = t.c ? t.c.map(c) : [ "other" ], t.o = t.o ? t.o.map(c) : [ "other" ], 
r = 0; r < e.length; r++) n[e[r]] = t;
}
function l(e, t, r) {
return e <= r && r <= t && r % 1 == 0;
}
function d(e, t) {
return e.indexOf(t) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : l(3, 10, t) ? 3 : l(11, 99, t) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100, o = t % 1e3;
return d([ 1, 2, 5, 7, 8 ], r) || d([ 20, 50, 70, 80 ], n) ? 0 : d([ 3, 4 ], r) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === r || d([ 40, 60, 90 ], n) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : l(2, 4, t) && !l(12, 14, r) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, r) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, r = e % 100, n = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], r) ? 2 !== t || d([ 12, 72, 92 ], r) ? !l(3, 4, t) && 9 !== t || l(10, 19, r) || l(70, 79, r) || l(90, 99, r) ? 0 !== e && 0 === n ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, i = t % 100, a = n % 10, s = n % 100;
return 0 === r && 1 === o && 11 !== i || 1 === a && 11 !== s ? 0 : 0 === r && l(2, 4, o) && !l(12, 14, i) || l(2, 4, a) && !l(12, 14, s) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : l(2, 4, t) && 0 === r ? 1 : 0 !== r ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n, o) {
return 1 === e || 0 !== o && d([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 100, i = n % 100;
return 0 === r && 1 === o || 1 === i ? 0 : 0 === r && 2 === o || 2 === i ? 1 : 0 === r && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : 2 === t && 12 !== r ? 1 : 3 === t && 13 !== r ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, i = n % 10;
return 0 === r && d([ 1, 2, 3 ], t) || 0 === r && !d([ 4, 6, 9 ], o) || 0 !== r && !d([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : l(3, 6, e) ? 2 : l(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== r ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, r) {
var n = e % 10;
return 1 === t && 0 === r ? 0 : 2 === t && 0 === r ? 1 : 0 !== r || l(0, 10, e) || 0 !== n ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return d([ 1, 5 ], e) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return d([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var r = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, r) || 40 === r || 60 === r || 80 === r ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r, n) {
var o = e % 10, i = e % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== n ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, r, n) {
var o = e % 10, i = e % 100, a = n % 100, s = n % 10;
return 0 === o || l(11, 19, i) || 2 === r && l(11, 19, a) ? 0 : 1 === o && 11 !== i || 2 === r && 1 === s && 11 !== a || 2 !== r && 1 === s ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return 0 === r && 1 === t % 10 || 1 === n % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100;
return 1 === r && 11 !== n ? 0 : 2 === r && 12 !== n ? 1 : d([ 7, 8 ], r) && !d([ 17, 18 ], n) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 0 !== r || 0 === e || 1 !== e && l(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 10, t) ? 1 : l(11, 19, t) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l(1, 4, e) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 1 === t && 0 === r ? 0 : 0 === r && l(2, 4, n) && !l(12, 14, o) ? 1 : 0 === r && 1 !== t && l(0, 1, n) || 0 === r && l(5, 9, n) || 0 === r && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 2, e) && 2 !== e ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === e && 0 === r ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && l(2, 4, n) && !l(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && l(5, 9, n) || 0 === r && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return d([ 0, 1 ], e) || 0 === t && 1 === n ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r) {
var n = t % 100;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && l(3, 4, n) || 0 !== r ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && l(2, 4, n) && !l(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && l(5, 9, n) || 0 === r && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, r) {
var n = {
"./ru.yml": 14
};
function o(e) {
var t = i(e);
return r(t);
}
function i(e) {
var t = n[e];
if (!(t + 1)) {
var r = new Error("Cannot find module '" + e + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
return t;
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = i, e.exports = o, o.id = 13;
}, function(e, t) {
e.exports = {
site: {
privacy_policy: "политика конфиденциальности",
terms: "пользовательское соглашение",
banner_bottom: 'Проводим <a href="/courses">курсы по JavaScript и фреймворкам</a>.',
action_required: "Требуется действие",
gdpr_dialog: {
title: "Этот сайт использует cookie",
text: 'Мы используем браузерные технологии, такие как cookie и local storage для хранения ваших предпочтений. Вы принимаете <a href="/privacy">политику конфиденциальности</a> и <a href="/terms">соглашение пользователя</a>?',
accept: "Принять",
cancel: "Отмена"
},
theme: {
light: "Светлая тема",
dark: "Тёмная тема",
change: "Сменить тему оформления"
},
toolbar: {
lang_switcher: {
cta_text: 'Мы хотим сделать этот проект с открытым исходным кодом доступным для людей во всем мире. Пожалуйста, <a href="https://javascript.info/translate#help" rel="noopener noreferrer" target="_blank">помогите нам перевести</a> это руководство на свой язык',
footer_text: "количество контента, переведенное на соотвествующий язык",
old_version: "Опубликована полная, но предыдущая версия учебника."
},
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
"normal-white": {
svg: "sitetoolbar__logo_ru-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
},
"small-white": {
svg: "sitetoolbar__logo_small_ru-white.svg"
}
},
sections: [ {
slug: "tutorial",
url: "/",
title: "Учебник"
}, {
slug: "courses",
title: "Курсы"
}, {
url: "https://javascript.ru/forum/",
title: "Форум"
}, {
slug: "quiz",
title: "Тесты знаний"
} ],
sections_bak: [ {
slug: "jobs",
title: "Стажировки"
} ],
buy_ebook_extra: "Купить",
buy_ebook: "EPUB/PDF",
search_placeholder: "Искать на Javascript.ru",
search_button: "Найти",
public_profile: "Публичный профиль",
account: "Аккаунт",
notifications: "Уведомления",
admin: "Админ",
logout: "Выйти"
},
sorry_old_browser: "Извините, Internet Explorer не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
read_before_commenting: "перед тем как писать…",
last_updated_at: "Последнее обновление: #{date}",
"tablet-menu": {
choose_section: "Выберите раздел",
search_placeholder: "Поиск в учебнике",
search_button: "Поиск"
},
comment: {
help: [ 'Если вам кажется, что в статье что-то не так - вместо комментария напишите <a href="https://github.com/javascript-tutorial/ru.javascript.info/issues/new">на GitHub</a>.', "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
meta: {
description: "Современный учебник JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM."
},
edit_on_github: "Редактировать на GitHub",
error: "ошибка",
close: "закрыть",
hide_forever: "не показывать",
hidden_forever: "Эта информация больше не будет выводиться.",
subscribe: {
title: "Следите за обновлениями javascript.ru",
text: "Мы не рассылаем рекламу, все только по делу. Вы сами выбираете, что получать:",
agreement: 'Подписываясь на рассылку, вы соглашаетесь с <a href="#{link}" target="_blank">пользовательским соглашением</a>.',
button: "Подписаться",
button_unsubscribe: "Отписаться от всех",
common_updates: "Общие обновления",
common_updates_text: "новые курсы, интенсивы, выпуски статей и скринкастов",
your_email: "ваш@email",
newsletters: "рассылка,рассылки,рассылок",
no_selected: "Не выбрано"
},
form: {
value_must_not_be_empty: "Значение не должно быть пустым.",
value_is_too_long: "Значение слишком длинное.",
value_is_too_short: "Значение слишком короткое.",
invalid_email: "Некорректный email.",
invalid_value: "Некорректное значение.",
invalid_autocomplete: "Пожалуйста, выберите значение из списка",
invalid_date: "Дата неверна, формат: дд.мм.гггг.",
invalid_range: "Такой даты здесь не может быть.",
save: "Сохранить",
upload_file: "Загрузить файл",
cancel: "Отмена",
server_error: "Ошибка загрузки, статус"
}
}
};
}, function(e, t, r) {
var n = {
"./ru.yml": 16
};
function o(e) {
var t = i(e);
return r(t);
}
function i(e) {
var t = n[e];
if (!(t + 1)) {
var r = new Error("Cannot find module '" + e + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
return t;
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = i, e.exports = o, o.id = 15;
}, function(e, t) {
e.exports = {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
server_error_info: "Ошибка на стороне сервера (код #{status}). #{info}.",
invalid_format: "Некорректный формат ответа от сервера."
};
}, function(e, t, r) {
t.FormPayment = r(18);
}, function(e, t, r) {
let n = r(1), o = r(3), i = r(19);
const a = r(2), s = r(0), {localCurrency: c, shopCurrency: u} = r(0), l = r(20).loadScript;
a.i18n.add("payments", r(22)("./" + s.lang + ".yml"));
e.exports = class {
constructor(e, t) {
this.orderForm = e, this.paymentMethodElem = t, document.querySelector("[data-pay-paypal-buttons]") && l({
"client-id": s.paypalClientId,
currency: u,
components: "buttons,marks"
}).then((() => {
this.initPaypalButtons().render("[data-pay-paypal-buttons]"), window.paypal.Marks().render(document.getElementById("input-paypal").parentNode.querySelector(".pay-method__paypal-marks"));
}));
}
request(e) {
let t = o(e);
return t.addEventListener("loadstart", function() {
let e = this.startRequestIndication();
t.addEventListener("loadend", e);
}.bind(this)), t;
}
startRequestIndication() {
this.paymentMethodElem.classList.add("modal-overlay_light");
let e = new i({
elem: this.paymentMethodElem.querySelector('[type="submit"]'),
size: "small",
class: "",
elemClass: "button_loading"
});
return e.start(), () => {
this.paymentMethodElem.classList.remove("modal-overlay_light"), e && e.stop();
};
}
readPaymentFormValues() {
let e = {};
return [].forEach.call(this.paymentMethodElem.querySelectorAll("input,select,textarea"), (function(t) {
("radio" != t.type && "checkbox" != t.type || t.checked) && (e[t.name] = t.value);
})), e;
}
readOrderDataWithPayment() {
let e = this.orderForm.getOrderData();
if (!e) return;
let t = this.readPaymentFormValues();
if (t.paymentMethod) {
if ("invoice" == t.paymentMethod) {
if (!t.invoiceCompanyName) return new n.Error(a("payments.client.specify_company_name")), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
if (document.querySelector("#invoice-agreement").checked || document.querySelector("#invoice-act").checked) {
let e = document.querySelector("#invoice-contract-head");
if (!e.dataset.prefilled && e.value == e.defaultValue) return new n.Error("Введите, пожалуйста, шапку договора/акта."), 
void e.focus();
let t = document.querySelector("#invoice-company-address");
if (!t.dataset.prefilled && t.value == t.defaultValue) return new n.Error("Введите, пожалуйста, юридический адрес."), 
void t.focus();
let r = document.querySelector("#invoice-bank-details");
if (!r.dataset.prefilled && r.value == r.defaultValue) return new n.Error("Ведите, пожалуйста, реквизиты."), 
void r.focus();
if (document.querySelector("#invoice-document-exchange-edo").checked) {
let e = document.getElementById("invoice-inn"), t = e.value.trim();
if (!t) return new n.Error("Введите ИНН, пожалуйста."), void e.focus();
if (10 != t.length && 12 != t.length || /\D/.test(t)) return new n.Error("Некорректный ИНН (должно быть 10 или 12 цифр)"), 
void e.focus();
let r = document.getElementById("invoice-kpp");
if ("" == r.value) return new n.Error("Введите КПП, пожалуйста (или 0, если его нет)."), 
void r.focus();
let o = +r.value;
if (0 != o && (o < 1e8 || o >= 1e10)) return new n.Error("Некорректный КПП (должно быть 9 цифр)"), 
void r.focus();
}
if (document.querySelector("#invoice-document-exchange-mail").checked) {
let e = {
"invoice-company-mail-index": "Индекс",
"invoice-company-mail-who": "Кому",
"invoice-company-mail-address": "Адрес"
};
for (let [t, r] of Object.entries(e)) {
let e = document.getElementById(t);
if (!e.value) return new n.Error("Почтовый адрес: заполните поле ".concat(r, ".")), 
void e.focus();
}
let t = document.getElementById("invoice-company-mail-index").value;
if (t.length < 5 || t.length > 7) {
return new n.Error("Почтовый адрес: некорректный индекс (от 5 до 7 цифр)."), void document.getElementById("invoice-company-mail-index").focus();
}
}
}
}
for (let r in t) e[r] = t[r];
return e;
}
new n.Error(a("payments.client.choose_payment_method"));
}
async submit() {
let e = this.readOrderDataWithPayment();
if (e) return await this.sendPaymentRequest(e);
}
initPaypalButtons() {
return window.paypal.Buttons({
style: {
layout: "vertical",
size: "small",
color: "blue",
label: "pay",
height: 40,
tagline: !1
},
onClick: (e, t) => !!this.readOrderDataWithPayment(),
createOrder: async (e, t) => {
let r, n, o = await this.submit();
if (!o) throw new Error("Empty submitResult (must not happen, validate in onClick)");
return r = o.form, n = o.orderNumber, r.paypalOrderId;
},
onApprove: (e, t) => {
this.request({
method: "POST",
url: "/payments/paypal/capture",
json: !0,
body: {
paypalOrderId: e.orderID
}
}).addEventListener("success", (r => {
let o = r.result;
if (o.id !== e.orderID) throw new Error("Result id must match order id (assertion failed)");
"COMPLETED" == o.status ? t.redirect("".concat(window.location.protocol, "//").concat(window.location.host, "/payments/common/redirect/order/").concat(o.orderNumber)) : new n.Error(a("payments.client.error_start_again", {
message: "Error ".concat(o.status, " Order ").concat(o.id),
email: s.ordersMail
}));
}));
},
onCancel: e => {
new n.Error(a("payments.payment_failed"));
},
onError: e => {
new n.Error(a("payments.client.error_start_again", {
message: e.message,
email: s.ordersMail
}));
}
});
}
async sendPaymentRequest(e) {
let t = o({
method: "POST",
url: "/payments/common/checkout",
normalStatuses: [ 200, 403, 400, 503 ],
body: e,
noDocumentEvents: !0
});
e.orderTemplate && window.ga("ec:addProduct", {
id: this.orderForm.product,
variant: e.orderTemplate,
price: e.amount,
quantity: 1
}), window.ga("ec:setAction", "checkout", {
step: 1,
option: e.paymentMethod
}), window.ga("send", "event", {
eventCategory: this.orderForm.product,
eventAction: "checkout-payment"
});
let r = this.startRequestIndication();
return new Promise(((o, i) => {
t.addEventListener("success", (c => {
let u;
if (403 == t.status ? u = "payments.client.error_start_again" : 503 == t.status ? u = "payments.client.purchase_error" : 400 == t.status && (u = "payments.client.maybe_purchase_error"), 
u) return new n.Error(a(u, {
message: c.result.description || c.result.message || "",
email: s.ordersMail
})), r(), void i();
let l = c.result;
if (l.form) {
if (window.ga("ec:setAction", "purchase", {
id: l.orderNumber
}), "paypal" === e.paymentMethod) return r(), void o(l);
if (l.form.redirect) window.location.href = l.form.redirect; else {
let e = document.createElement("div");
e.hidden = !0, e.innerHTML = l.form, document.body.appendChild(e), e.firstChild.submit();
}
} else r(), new n.Error(a("payments.client.purchase_error", {
email: s.ordersMail
}));
})), t.addEventListener("fail", (e => {
new n.Error(e.reason), r(), i();
}));
}));
}
};
}, function(e, t) {
function r(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, e.exports = r;
}, function(e, t, r) {
e.exports = r(21);
}, function(e, t, r) {
"use strict";
function n(e) {
var t = "https://www.paypal.com/sdk/js";
e.sdkBaseURL && (t = e.sdkBaseURL, delete e.sdkBaseURL), function(e) {
var t = e["merchant-id"], r = e["data-merchant-id"], n = "", o = "";
Array.isArray(t) ? t.length > 1 ? (n = "*", o = t.toString()) : n = t.toString() : "string" == typeof t && t.length > 0 ? n = t : "string" == typeof r && r.length > 0 && (n = "*", 
o = r), e["merchant-id"] = n, e["data-merchant-id"] = o;
}(e);
var r = Object.keys(e).filter((function(t) {
return void 0 !== e[t] && null !== e[t] && "" !== e[t];
})).reduce((function(t, r) {
var n = e[r].toString();
return "data-" === r.substring(0, 5) ? t.dataAttributes[r] = n : t.queryParams[r] = n, 
t;
}), {
queryParams: {},
dataAttributes: {}
}), n = r.queryParams, i = r.dataAttributes;
return {
url: "".concat(t, "?").concat(o(n)),
dataAttributes: i
};
}
function o(e) {
var t = "";
return Object.keys(e).forEach((function(r) {
0 !== t.length && (t += "&"), t += r + "=" + e[r];
})), t;
}
function i(e, t) {
void 0 === t && (t = {});
var r = document.createElement("script");
return r.src = e, Object.keys(t).forEach((function(e) {
r.setAttribute(e, t[e]), "data-csp-nonce" === e && r.setAttribute("nonce", t["data-csp-nonce"]);
})), r;
}
function a(e, t) {
void 0 === t && (t = s()), u(e, t);
var r = e.url, n = e.attributes;
if ("string" != typeof r || 0 === r.length) throw new Error("Invalid url.");
if (void 0 !== n && "object" != typeof n) throw new Error("Expected attributes to be an object.");
return new t((function(e, t) {
if ("undefined" == typeof window) return e();
!function(e) {
var t = e.onSuccess, r = e.onError, n = i(e.url, e.attributes);
n.onerror = r, n.onload = t, document.head.insertBefore(n, document.head.firstElementChild);
}({
url: r,
attributes: n,
onSuccess: function() {
return e();
},
onError: function() {
var e = new Error('The script "'.concat(r, '" failed to load.'));
return window.fetch ? fetch(r).then((function(r) {
return 200 === r.status && t(e), r.text();
})).then((function(e) {
var r = function(e) {
var t = e.split("/* Original Error:")[1];
return t ? t.replace(/\n/g, "").replace("*/", "").trim() : e;
}(e);
t(new Error(r));
})).catch((function(e) {
t(e);
})) : t(e);
}
});
}));
}
function s() {
if ("undefined" == typeof Promise) throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");
return Promise;
}
function c(e) {
return window[e];
}
function u(e, t) {
if ("object" != typeof e || null === e) throw new Error("Expected an options object.");
if (void 0 !== t && "function" != typeof t) throw new Error("Expected PromisePonyfill to be a function.");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.loadCustomScript = a, t.loadScript = function(e, t) {
if (void 0 === t && (t = s()), u(e, t), "undefined" == typeof window) return t.resolve(null);
var r = n(e), o = r.url, l = r.dataAttributes, d = l["data-namespace"] || "paypal", p = c(d);
return function(e, t) {
var r = document.querySelector('script[src="'.concat(e, '"]'));
if (null === r) return null;
var n = i(e, t), o = r.cloneNode();
if (delete o.dataset.uidAuto, Object.keys(o.dataset).length !== Object.keys(n.dataset).length) return null;
var a = !0;
return Object.keys(o.dataset).forEach((function(e) {
o.dataset[e] !== n.dataset[e] && (a = !1);
})), a ? r : null;
}(o, l) && p ? t.resolve(p) : a({
url: o,
attributes: l
}, t).then((function() {
var e = c(d);
if (e) return e;
throw new Error("The window.".concat(d, " global variable is not available."));
}));
}, t.version = "5.0.3";
}, function(e, t, r) {
var n = {
"./ru.yml": 23
};
function o(e) {
var t = i(e);
return r(t);
}
function i(e) {
var t = n[e];
if (!(t + 1)) {
var r = new Error("Cannot find module '" + e + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
return t;
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = i, e.exports = o, o.id = 22;
}, function(e, t) {
e.exports = {
client: {
choose_payment_method: "Выберите метод оплаты.",
specify_company_name: "Укажите название компании.",
error_start_again: "<p>#{message}</p><p>Пожалуйста, перезагрузите страницу и попробуйте оформить заказ снова.</p> <p>Если вы считаете, что на сервере ошибка – свяжитесь со <a href='mailto:#{mail}'> службой поддержки</a>.</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>Если вы считаете, что произошла ошибка &mdash; свяжитесь со <a href='mailto:#{email}'>службой поддержки</a>.</p>\n",
purchase_error: "Ошибка на сервере, свяжитесь со <a href='mailto:#{email}'>службой поддержки</a>.\n"
},
currency: "RUB",
payment_for: "Оплата за",
payment: "Оплата",
pay: "Оплатить",
payment_received: "Оплата получена.",
payment_processing: "Оплата обрабатывается.",
payment_received_processing: "Оплата получена, заказ обрабатывается.",
payment_error: "Произошла ошибка.",
payment_error_accent: "При обработке платежа произошла ошибка.",
payment_failed: "Оплата не прошла.",
payment_failed_try_again: '<p>Оплата не прошла, попробуйте ещё раз или измените метод оплаты.</p> <div><button class="submit-button" onclick="location.href=\'/courses/orders/#{number}/edit#payment-method\'" type="button"><span class="submit-button__text">Перейти к оплате</span></button></div>\n',
payment_success_description: "<p>По окончании вам будет отправлено письмо на электронный адрес <b>#{orderEmail}</b>.</p><p>Если у вас возникли какие-нибудь вопросы, присылайте их на #{mailLink}.</p>",
discount_by_code: "Скидка предоставлена по коду.",
order_canceled: "Заказ отменён.",
contact_payment: "<p>По вопросам, касающимся оплаты, пишите на #{mailLink}.</p>",
contact_order: "<p>По вопросам, касающимся заказа, пишите на #{mailLink}.</p>",
thanks: "Спасибо за заказ!",
contact_support: "<p>Пожалуйста, напишите в поддержку #{mailLink}.</p>",
payment_usd: "оплата в долларах США по курсу ЦБ",
payment_eur: "оплата в евро по курсу ЦБ"
};
}, function(e, t, r) {
var n = {
"./ru.yml": 25
};
function o(e) {
var t = i(e);
return r(t);
}
function i(e) {
var t = n[e];
if (!(t + 1)) {
var r = new Error("Cannot find module '" + e + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
return t;
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = i, e.exports = o, o.id = 24;
}, function(e, t) {
e.exports = {
build_at: "Сборка от",
last_version: 'Последняя версия учебника находится на сайте <a href="#{url}">#{url}</a>',
tracker_ref: 'Мы постоянно работаем над улучшением учебника. При обнаружении ошибок пишите о них на <a href="#{url}/issues/new">нашем баг-трекере</a>',
tasks: "Задачи",
importance: "важность",
to_solution: "К решению",
solutions: "Решения",
to_formulation: "К условию",
more: "Дополнительно",
newOrder: {
title: "Покупка учебника JavaScript",
sample: "Скачать пример",
translate_notification: "<strong>ВНИМАНИЕ</strong>: #{progress}% содержимого учебника переведено на #{currentLang}. Не беспокойтесь, вы сможете скачать полностью переведенную книгу, как только она будет готова.",
choose_course: "Выберите курс",
price: "Стоимость",
specifyEmail: "Укажите свой email",
note: "После оплаты ссылка на скачивание учебника придет на этот адрес.",
choose_payment: "Выберите метод оплаты",
continue: "Продолжить",
continue_text: 'Нажимая на кнопку "Продолжить", вы соглашаетесь с нашим <a href="/terms">пользовательским соглашением</a> и <a href="/privacy">политикой конфиденциальности</a>.',
confirmation: "Подтверждение",
currency: "RUB",
continue_with_paypal: "Оплатить через PayPal",
continue_with_stripe: "Оплатить через Stripe",
continue_pay: "Перейти к оплате",
info: "<p><strong>PDF/EPUB</strong> книги - это оффлайновые версии содержимого учебника. Покупая их, вы поддерживаете проект и можете читать учебник как электронную книгу.</p> <p>Вы получаете все статьи, которые есть сейчас, плюс 1 год обновлений.</p>\n"
},
orders: {
order: "Заказ",
failed: "Оплата не прошла, попробуйте ещё раз.",
currency: "р.",
payment: "Оплата",
successful: "Осуществлена успешно",
pending: "Ожидается подтверждение",
amount: "Стоимость",
choose_another_payment: "Выберите другой метод оплаты, если она не прошла",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
questions: "Если у вас возникли какие-либо вопросы, присылайте их на",
thanks: "Оплата прошла успешно, спасибо за покупку!",
download: "Скачать учебник",
confirmation_soon: "На электронный адрес <b>#{email}</b> отправлено подтверждение.",
download_now: "Вы можете скачать учебник прямо сейчас, по ссылке:",
link_active_3_months: "Эта ссылка будет активна 1 год, по ней будет последняя версия учебника."
},
client: {
enter_email: "Введите email."
},
onPaid: {
subject: "Учебник для чтения оффлайн"
}
};
}, function(e, t, r) {} ]);
//# sourceMappingURL=ebook.58c947811fed07aca489.js.map