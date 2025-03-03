/*! For license information please see screencast.e47874fbdcf9759b1a79.js.LICENSE.txt */
var screencast = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var o = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
return e[t];
}.bind(null, o));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 7);
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
}, function(e, t, n) {
"use strict";
const r = new (n(13))("en");
let o = console.error;
function i(e) {
return r.hasPhrase(a, e) || o("No such phrase", e), r.t(a, ...arguments);
}
e.exports = i;
const a = n(0).lang;
"en" !== a && r.setFallback(a, "en"), r.add = (...e) => r.addPhrase(a, ...e), i.i18n = r;
}, function(e, t) {
var n;
n = function() {
return this;
}();
try {
n = n || new Function("return this")();
} catch (e) {
"object" == typeof window && (n = window);
}
e.exports = n;
}, function(e, t, n) {
"use strict";
n.r(t), n.d(t, "init", (function() {
return i;
})), n.d(t, "Info", (function() {
return s;
})), n.d(t, "Warning", (function() {
return c;
})), n.d(t, "Success", (function() {
return u;
})), n.d(t, "Error", (function() {
return l;
}));
let r = n(11);
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
constructor(e, t, n) {
let r = '<div class="notification notification_popup notification_'.concat(t, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
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
this.timeout = n;
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
r.delegateMixin(a.prototype);
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
}, function(e, t, n) {
let r = n(5);
e.exports = class {
constructor(e) {
this.elem = e, this.renderPromise = new Promise(((e, t) => {
this.renderPromiseResolve = e, this.renderPromiseReject = t;
})), this.render();
}
async render() {
if (!window.RECAPTCHA_ID) return;
if (void 0 !== this.widgetId) return;
await r();
let e = document.createElement("div");
this.elem.append(e), this.widgetId = grecaptcha.render(e, {
sitekey: window.RECAPTCHA_ID,
size: "invisible",
callback: this.renderPromiseResolve
});
}
async execute() {
if (!window.RECAPTCHA_ID) return "";
await this.render();
let e = grecaptcha.getResponse(this.widgetId);
return e || (grecaptcha.execute(this.widgetId), this.renderPromise);
}
async validateForm(e) {
if (!window.RECAPTCHA_ID) return;
let t = await this.execute(), n = e.elements["g-recaptcha-response"];
n || (n = document.createElement("input"), n.name = "g-recaptcha-response", n.type = "hidden", 
e.append(n)), n.value = t;
}
};
}, function(e, t) {
let n;
e.exports = async function() {
if (window.RECAPTCHA_ID) return n || (n = new Promise(((e, t) => {
window.recaptchaCallback = e;
let n = document.createElement("script");
n.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit", 
n.onerror = t, document.head.appendChild(n);
})), n);
};
}, function(e, t) {
e.exports = function(e, t) {
let n, r, o = !1;
return function i() {
if (o) return n = arguments, void (r = this);
e.apply(this, arguments), o = !0, setTimeout((() => {
o = !1, n && (i.apply(r, n), n = r = null);
}), t);
};
};
}, function(e, t, n) {
n(34), e.exports = n(33);
}, function(e, t, n) {
const r = n(9), o = n(10), i = n(3), a = n(21), {Recaptcha: s} = n(23), c = n(1), u = n(0).lang;
function l(e, t) {
if (!e.elements.email.value) return;
const n = e.elements.slug;
let a, s = [ ...n.querySelectorAll("option:checked") ].map((e => e.value));
if (s.length || (s = n.value), e.elements["subscribe-email"] && (a = !0), !a && !s.length) return void new i.Error(c("newsletter.client.choose_newsletter"));
const u = {
email: e.elements.email.value,
slug: s
};
e.elements["g-recaptcha-response"] && (u["g-recaptcha-response"] = e.elements["g-recaptcha-response"].value), 
a && (u.replace = !0);
const l = o({
method: "POST",
url: e.action,
body: u
}), f = e.querySelector('[type="submit"]'), d = new r({
elem: f,
size: "small",
elemClass: "button_loading"
});
d.start(), f.disabled = !0, l.addEventListener("loadend", (() => {
d.stop(), f.disabled = !1;
})), l.addEventListener("success", (function(n) {
if (200 == this.status) {
new i.Success(n.result.message, "slow");
let r = e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
r && window.ga("send", "event", r), t && t();
} else new i.Error(n.result.message);
}));
}
c.i18n.add("newsletter.client", n(25)("./" + u + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
for (let t of e) {
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new a({
elem: n
}), o = t.querySelector('button[type="submit"]'), i = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", (() => {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? i.textContent = c("site.subscribe.button_unsubscribe") : i.textContent = c("site.subscribe.button");
}));
}
let r = new s(t);
t.onsubmit = async function(e) {
e.preventDefault(), await r.validateForm(t), l(t);
};
}
}, t.submitSubscribeForm = l;
}, function(e, t) {
function n(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, e.exports = n;
}, function(e, t, n) {
let r = n(3), o = n(12);
const i = n(0).lang, a = n(1);
a.i18n.add("", n(17)("./" + i + ".yml")), a.i18n.add("error.network", n(19)("./" + i + ".yml")), 
document.addEventListener("xhrfail", (function(e) {
new r.Error(e.reason);
})), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, i = e.url;
t.open(n, i, !e.sync), t.method = n;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", (e => {
t.timeStart = Date.now();
let n = u("xhrstart", e);
document.dispatchEvent(n);
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
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function l(e, n) {
let r = u("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", (e => {
l(a("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
l(a("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
l(a("error.network.request_aborted"), e);
})), t.addEventListener("load", (n => {
if (!t.status) return void l(a("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(a("error.network.invalid_format"), n);
}
if (c.includes(t.status)) !function(e, n) {
let r = u("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n); else {
l(r.info ? a("error.network.server_error_info", {
status: t.status,
info: r.info
}) : a("error.network.server_error", {
status: t.status
}), n);
}
})), setTimeout((function() {
t.send(r);
})), t;
};
}, function(e, t) {
function n(e, t, n, r, o) {
e.addEventListener(n, (function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(o || this, e);
}));
}
n.delegateMixin = function(e) {
e.delegate = function(e, t, r) {
n(this.elem, e, t, r, this);
};
}, e.exports = n;
}, function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, function(e, t, n) {
e.exports = n(14);
}, function(e, t, n) {
"use strict";
var r = n(15), o = n(16);
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
}, f = Array.prototype.forEach;
function d(e, t, n) {
if (null !== e) if (f && e.forEach === f) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e);
}
var h = /%[sdj%]/g;
function p(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(h, (function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
}));
}
var m = "en";
function v(e) {
var t = {};
return d(e || {}, (function(e, n) {
e && "object" == typeof e ? d(v(e), (function(e, r) {
t[n + "." + r] = e;
})) : t[n] = e;
})), t;
}
var y = "#@$";
function g(e, t) {
return e + y + t;
}
function w(e, t, n) {
var r = g(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var i = e._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (a = g(s[c], n), 
o.hasOwnProperty(a)) return i[r] = a, i[r];
return i[r] = null, null;
}
function _(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? p('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? p('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function b(e) {
if (!(this instanceof b)) return new b(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(e, t, n, r) {
var o, i = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (s(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return d(n, (function(n, r) {
i.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
})), this;
if (a(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || s(n) || c(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var k = /#\{|\(\(|\\\\/;
b.prototype.translate = function(e, t, n) {
var o, c = w(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, i, a, s, c, u;
return k.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new b(n)), 
u = e._plurals_cache[n], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), d(o, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void i.push(p('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, d(e.strict, (function(t, o) {
var i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return s[o] = !1, void (e.strict[o] = i[0].text);
s[o] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), c = {}, d(e.forms, (function(t, o) {
var i, a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return i = a[0].text, e.forms[o] = i, 
void (c[i] = !1);
c[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), i.push(p("loc = %j;", n)), i.push(p("loc_plzr = %j;", n.split(/[-_]/)[0])), 
i.push(p("anchor = params[%j];", a)), i.push(p("cache = this._plurals_cache[loc];")), 
i.push(p("strict = %j;", e.strict)), i.push(p("strict_exec = %j;", s)), i.push(p("forms = %j;", e.forms)), 
i.push(p("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(p('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(p("str += %j;", e.text));
})), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, v, _))) : e + ": No translation for [" + t + "]";
}, b.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(g(e, t)) : !!w(this, e, t);
}, b.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var r = w(this, e, t);
return r ? r.split(y, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(e) {
var t = this, n = {};
d(this._storage, (function(e, t) {
n[t.split(y)[1]] = !0;
}));
var r = {};
d(n, (function(n, o) {
var i = w(t, e, o);
if (i) {
var a = t._storage[i].locale;
r[a] || (r[a] = {}), r[a][o] = t._storage[i].translation;
}
}));
var o = {
fallback: {},
locales: r
}, i = (t._fallbacks[e] || []).slice(0, -1);
return i.length && (o.fallback[e] = i), JSON.stringify(o);
}, b.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), d(e.locales, (function(e, n) {
d(e, (function(e, r) {
t.addPhrase(n, r, e, 0);
}));
})), d(e.fallback, (function(e, n) {
t.setFallback(n, e);
})), this;
}, e.exports = b;
}, function(e, t) {
e.exports = function() {
function e(e, t, n, r, o, i) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: le
}, a = le, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, d = null, h = function(e, t) {
return {
type: "plural",
forms: _e(e),
strict: be(e),
anchor: t || "count"
};
}, p = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, y = function(e) {
return [ e ];
}, g = "=", w = {
type: "literal",
value: "=",
description: '"="'
}, _ = /^[0-9]/, b = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", E = {
type: "literal",
value: " ",
description: '" "'
}, T = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, x = function() {
return {
text: ae()
};
}, F = "\\", A = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, C = /^[\\|)(]/, S = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, j = function(e) {
return e;
}, P = void 0, O = {
type: "any",
description: "any character"
}, L = function() {
return ae();
}, M = ":", I = {
type: "literal",
value: ":",
description: '":"'
}, q = function(e) {
return e;
}, R = "#{", N = {
type: "literal",
value: "#{",
description: '"#{"'
}, z = "}", D = {
type: "literal",
value: "}",
description: '"}"'
}, V = function(e) {
return {
type: "variable",
anchor: e
};
}, H = ".", U = {
type: "literal",
value: ".",
description: '"."'
}, W = function() {
return ae();
}, Y = /^[a-zA-Z_$]/, B = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, J = /^[a-zA-Z0-9_$]/, $ = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, G = function(e) {
return {
type: "literal",
text: e.join("")
};
}, K = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], ie = 0;
if ("startRule" in r) {
if (!(r.startRule in i)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = i[r.startRule];
}
function ae() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, i;
for (o = n; o < r; o++) "\n" === (i = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function ue(n, r, o) {
var i = se(o), a = o < t.length ? t.charAt(o) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort((function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
})); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
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
}(r, a), r, a, o, i.line, i.column);
}
function le() {
var e, t;
for (e = [], (t = ge()) === o && (t = fe()) === o && (t = me()); t !== o; ) e.push(t), 
(t = ge()) === o && (t = fe()) === o && (t = me());
return e;
}
function fe() {
var e, n, r, i, a;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === ie && ce(u)), 
n !== o && (r = de()) !== o ? (t.substr(Q, 2) === l ? (i = l, Q += 2) : (i = o, 
0 === ie && ce(f)), i !== o ? (a = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = M, Q++) : (n = o, 0 === ie && ce(I));
n !== o && (r = ve()) !== o ? (ee = e, e = n = q(r)) : (Q = e, e = s);
return e;
}(), a === o && (a = d), a !== o ? (ee = e, e = n = h(r, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function de() {
var e, n, r, i;
return e = Q, (n = he()) !== o ? (124 === t.charCodeAt(Q) ? (r = p, Q++) : (r = o, 
0 === ie && ce(m)), r !== o && (i = de()) !== o ? (ee = e, e = n = v(n, i)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (n = he()) !== o && (ee = e, n = y(n)), 
e = n), e;
}
function he() {
var e, n, r, i, a, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = g, Q++) : (n = o, 0 === ie && ce(w)), n !== o) {
if (r = [], _.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(b)), 
i !== o) for (;i !== o; ) r.push(i), _.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 
0 === ie && ce(b)); else r = s;
if (r !== o) if (32 === t.charCodeAt(Q) ? (i = k, Q++) : (i = o, 0 === ie && ce(E)), 
i === o && (i = d), i !== o) {
if (a = [], (c = pe()) !== o) for (;c !== o; ) a.push(c), c = pe(); else a = s;
a !== o ? (ee = e, e = n = T(r, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, n = [], (r = pe()) !== o) for (;r !== o; ) n.push(r), r = pe(); else n = s;
n !== o && (ee = e, n = x()), e = n;
}
return e;
}
function pe() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = F, Q++) : (n = o, 0 === ie && ce(A)), 
n !== o ? (C.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(S)), 
r !== o ? (ee = e, e = n = j(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
n = Q, ie++, 124 === t.charCodeAt(Q) ? (r = p, Q++) : (r = o, 0 === ie && ce(m)), 
r === o && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === ie && ce(f))), 
ie--, r === o ? n = P : (Q = n, n = s), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === ie && ce(O)), r !== o ? (ee = e, e = n = L()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, n, r, i;
return e = Q, t.substr(Q, 2) === R ? (n = R, Q += 2) : (n = o, 0 === ie && ce(N)), 
n !== o && (r = ve()) !== o ? (125 === t.charCodeAt(Q) ? (i = z, Q++) : (i = o, 
0 === ie && ce(D)), i !== o ? (ee = e, e = n = V(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ve() {
var e, n, r, i;
if (e = Q, ye() !== o) if (46 === t.charCodeAt(Q) ? (n = H, Q++) : (n = o, 0 === ie && ce(U)), 
n !== o) {
if (r = [], (i = ve()) !== o) for (;i !== o; ) r.push(i), i = ve(); else r = s;
r !== o ? (ee = e, e = W()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ye()), e;
}
function ye() {
var e, n, r, i;
if (e = Q, Y.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(B)), 
n !== o) {
for (r = [], J.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce($)); i !== o; ) r.push(i), 
J.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce($));
r !== o ? (ee = e, e = n = L()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, n, r, i;
if (e = Q, t = [], n = Q, r = Q, ie++, (i = fe()) === o && (i = me()), ie--, i === o ? r = P : (Q = r, 
r = s), r !== o && (i = we()) !== o ? (ee = n, n = r = X(i)) : (Q = n, n = s), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, ie++, (i = fe()) === o && (i = me()), ie--, i === o ? r = P : (Q = r, 
r = s), r !== o && (i = we()) !== o ? (ee = n, n = r = X(i)) : (Q = n, n = s); else t = s;
return t !== o && (ee = e, t = G(t)), e = t;
}
function we() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = F, Q++) : (n = o, 0 === ie && ce(A)), 
n !== o ? (K.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(Z)), 
r !== o ? (ee = e, e = n = j(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ie && ce(O))), e;
}
function _e(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function be(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = a()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, oe, re);
}
};
}();
}, function(e, t, n) {
"use strict";
var r = {};
function o(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function i(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].cFn(c, u, s, +a, l);
}
function a(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].oFn(c, u, s, +a, l);
}
e.exports = function(e, t) {
var n = o(e);
return n ? r[n].c[i(n, t)] : null;
}, e.exports.indexOf = i, e.exports.forms = function(e) {
var t = o(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = o(e);
return r[n] ? r[n].o[a(n, t)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var t = o(e);
return r[t] ? r[t].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function c(e) {
return s[e];
}
function u(e, t) {
var n;
for (t.c = t.c ? t.c.map(c) : [ "other" ], t.o = t.o ? t.o.map(c) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function l(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function f(e, t) {
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
return f([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, o = t % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : l(2, 4, t) && !l(12, 14, n) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 2, 3 ], e % 10) && !f([ 12, 13 ], t) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || f([ 11, 71, 91 ], n) ? 2 !== t || f([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = t % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === a && 11 !== s ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, i) || l(2, 4, a) && !l(12, 14, s) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return f([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : l(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : f([ 3, 4 ], e) ? 3 : f([ 5, 6 ], e) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = r % 10;
return 0 === n && f([ 1, 2, 3 ], t) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
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
return f([ 1, 11 ], e) ? 0 : f([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || l(0, 10, e) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return f([ 1, 5 ], e) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return f([ 11, 8, 80, 800 ], e) ? 0 : 1;
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
var n = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
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
return 0 === e ? 0 : f([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100, a = r % 100, s = r % 10;
return 0 === o || l(11, 19, i) || 2 === n && l(11, 19, a) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && l(1, 19, e % 100) ? 1 : 2;
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
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
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
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 2, e) && 2 !== e ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return f([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
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
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 1, 2 ], e % 10) && !f([ 11, 12 ], t) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, n) {
var r = {
"./ru.yml": 18
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 17;
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
}, function(e, t, n) {
var r = {
"./ru.yml": 20
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 19;
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
}, function(e, t, n) {
const r = n(1), o = n(22);
e.exports = class {
constructor(e) {
this.elem = e.elem, this.select = this.elem.querySelector("select"), this.textContainer = this.elem.querySelector(".multiselect__active-button"), 
this.options = [ ...this.select.querySelectorAll("option") ], this.defaultValue = this.textContainer.textContent, 
this.status = "closed", this.elem.querySelector(".multiselect__container").insertAdjacentHTML("beforeend", this.createDropdown()), 
this.setButtonTitle(), this.bindHandlers();
}
createDropdown() {
return "\n      <div class='multiselect__dropdown-container'>\n        <div class='multiselect__dropdown'>\n          ".concat(this.options.map((e => "<div class='multiselect__item".concat(e.selected ? " multiselect__item_checked" : "", "' data-value='").concat(e.value, "'>\n                <span class='multiselect__item-title'>").concat(e.textContent + ("advanced" === e.value ? "<span class='multiselect__greyed-text'>".concat(r("site.subscribe.common_updates_text"), "</span>") : ""), "</span>\n              </div>"))).join(""), "\n        </div>\n      </div>\n    ");
}
bindHandlers() {
this.textContainer.addEventListener("click", this.toggleDropdown.bind(this));
for (let e of this.elem.querySelectorAll(".multiselect__item")) e.addEventListener("click", this.onChange.bind(this));
this.select.addEventListener("change", this.setButtonTitle.bind(this));
}
toggleDropdown(e) {
e.stopPropagation(), this.elem.classList.toggle("multiselect_opened"), this.toggleStatus(), 
"opened" === this.status && (this.boundCloseDropdown = this.closeDropdown.bind(this), 
document.addEventListener("click", this.boundCloseDropdown));
}
toggleStatus() {
"closed" === this.status ? this.status = "opened" : this.status = "closed";
}
closeDropdown(e) {
e.target.closest(".multiselect__dropdown-container") || (this.status = "closed", 
this.elem.classList.remove("multiselect_opened"), document.removeEventListener("click", this.boundCloseDropdown));
}
onChange(e) {
const t = e.target.closest(".multiselect__item");
t.classList.toggle("multiselect__item_checked");
this.options.filter((e => e.value === t.getAttribute("data-value"))).pop().selected = t.classList.contains("multiselect__item_checked"), 
this.select.dispatchEvent(new Event("change"));
}
setButtonTitle() {
const e = this.getValues();
1 === e.length && e.includes("advanced") ? this.textContainer.textContent = this.defaultValue : e.length ? this.textContainer.textContent = e.length + " " + o(e.length, r("site.subscribe.newsletters")) : this.textContainer.textContent = r("site.subscribe.no_selected");
}
getValues() {
return this.options.filter((e => e.selected)).map((e => e.value));
}
};
}, function(e, t) {
e.exports = function(e, t) {
var n, r = (n = e) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = t.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + e);
}
};
}, function(e, t, n) {
t.Recaptcha = n(4), t.initForms = n(24);
}, function(e, t, n) {
let r = n(5), o = n(4);
e.exports = async function() {
let e = document.querySelectorAll("[data-recaptcha-submit]");
if (e.length) {
for (let t of e) t.disabled = !0;
await r();
for (let t of e) {
let e = t.form, n = new o(e);
e.onsubmit = async t => {
t.preventDefault(), await n.validateForm(e), e.checkValidity() ? e.submit() : e.reportValidity();
}, t.disabled = !1;
}
}
};
}, function(e, t, n) {
var r = {
"./ru.yml": 26
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 25;
}, function(e, t) {
e.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
}, function(e, t, n) {
const r = n(28), o = (document.querySelector(".playlist"), document.querySelector(".screencast-player")), i = document.querySelector(".screencast-player__nav"), a = document.querySelector(".screencast-player__main"), s = document.querySelector(".notification.notification_top") || null, c = s ? s.offsetHeight : 0, u = document.querySelector(".page-footer");
let l = 0, f = !1, d = !0;
e.exports = function() {
if (a.scrollTop, a.scrollTop, 0) cancelAnimationFrame(undefined); else if (!d) return;
l = a.scrollTop;
const e = parseInt(getComputedStyle(u).bottom), t = a.scrollTop, n = i.scrollTop;
if (a.offsetHeight + a.scrollTop >= a.scrollHeight) {
if (f) return;
const s = -e;
if (0 === s) return;
d = !1, r({
timing: e => s * e,
duration: s / 72 * 200,
draw: r => {
u.style.bottom = e + r + "px", o.style.height = "calc(100vh - 60px - ".concat(c, "px - ").concat(r, "px"), 
a.scrollTop = t + r, i.scrollTop = n + r;
},
callback: () => {
f = !0, d = !0;
}
});
} else {
if (!f) return;
const s = 72 + e;
if (0 === s) return;
d = !1, r({
timing: e => s * e,
duration: s / 72 * 200,
draw: r => {
u.style.bottom = e - r + "px", o.style.height = "calc(100vh - 60px - ".concat(c, "px - ").concat(72 - r, "px"), 
a.scrollTop = t - r, i.scrollTop = n - r;
},
callback: () => {
f = !1, d = !0;
}
});
}
};
}, function(e, t) {
e.exports = function(e) {
const t = performance.now();
requestAnimationFrame((function n() {
let r = (performance.now() - t) / e.duration;
r > 1 && (r = 1);
const o = e.timing(r);
e.draw(o), r < 1 ? requestAnimationFrame(n) : e.callback && e.callback();
}));
};
}, function(e, t, n) {
(function(t, n) {
var r;
r = function() {
"use strict";
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var r = t[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(e, r.key, r);
}
}
var r = void 0 !== t && "[object global]" === {}.toString.call(t);
function o(e, t) {
return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1));
}
function i(e) {
return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
}
function a() {
var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.id, r = t.url, o = n || r;
if (!o) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
if (e = o, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(o);
if (i(o)) return o.replace("http:", "https:");
if (n) throw new TypeError("“".concat(n, "” is not a valid video id."));
throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
}
var s = void 0 !== Array.prototype.indexOf, c = "undefined" != typeof window && void 0 !== window.postMessage;
if (!(r || s && c)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var u = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
!function(e) {
if (!e.WeakMap) {
var t = Object.prototype.hasOwnProperty, n = function(e, t, n) {
Object.defineProperty ? Object.defineProperty(e, t, {
configurable: !0,
writable: !0,
value: n
}) : e[t] = n;
};
e.WeakMap = function() {
function e() {
if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
if (n(this, "_id", "_WeakMap_" + i() + "." + i()), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported");
}
function o(e, n) {
if (!r(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e);
}
function i() {
return Math.random().toString().substring(2);
}
return n(e.prototype, "delete", (function(e) {
if (o(this, "delete"), !r(e)) return !1;
var t = e[this._id];
return !(!t || t[0] !== e || (delete e[this._id], 0));
})), n(e.prototype, "get", (function(e) {
if (o(this, "get"), r(e)) {
var t = e[this._id];
return t && t[0] === e ? t[1] : void 0;
}
})), n(e.prototype, "has", (function(e) {
if (o(this, "has"), !r(e)) return !1;
var t = e[this._id];
return !(!t || t[0] !== e);
})), n(e.prototype, "set", (function(e, t) {
if (o(this, "set"), !r(e)) throw new TypeError("Invalid value used as weak map key");
var i = e[this._id];
return i && i[0] === e ? (i[1] = t, this) : (n(e, this._id, [ e, t ]), this);
})), n(e, "_polyfill", !0), e;
}();
}
function r(e) {
return Object(e) === e;
}
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : u);
var l = function(e, t) {
return e(t = {
exports: {}
}, t.exports), t.exports;
}((function(e) {
var t, r, o;
o = function() {
var e, t, r, o = Object.prototype.toString, i = void 0 !== n ? function(e) {
return n(e);
} : setTimeout;
try {
Object.defineProperty({}, "x", {}), e = function(e, t, n, r) {
return Object.defineProperty(e, t, {
value: n,
writable: !0,
configurable: !1 !== r
});
};
} catch (t) {
e = function(e, t, n) {
return e[t] = n, e;
};
}
function a(e, n) {
r.add(e, n), t || (t = i(r.drain));
}
function s(e) {
var t, n = typeof e;
return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t;
}
function c() {
for (var e = 0; e < this.chain.length; e++) u(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
this.chain.length = 0;
}
function u(e, t, n) {
var r, o;
try {
!1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = s(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r);
} catch (e) {
n.reject(e);
}
}
function l(e) {
var t, n = this;
if (!n.triggered) {
n.triggered = !0, n.def && (n = n.def);
try {
(t = s(e)) ? a((function() {
var r = new h(n);
try {
t.call(e, (function() {
l.apply(r, arguments);
}), (function() {
f.apply(r, arguments);
}));
} catch (e) {
f.call(r, e);
}
})) : (n.msg = e, n.state = 1, n.chain.length > 0 && a(c, n));
} catch (e) {
f.call(new h(n), e);
}
}
}
function f(e) {
var t = this;
t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 
t.chain.length > 0 && a(c, t));
}
function d(e, t, n, r) {
for (var o = 0; o < t.length; o++) !function(o) {
e.resolve(t[o]).then((function(e) {
n(o, e);
}), r);
}(o);
}
function h(e) {
this.def = e, this.triggered = !1;
}
function p(e) {
this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
}
function m(e) {
if ("function" != typeof e) throw TypeError("Not a function");
if (0 !== this.__NPO__) throw TypeError("Not a promise");
this.__NPO__ = 1;
var t = new p(this);
this.then = function(e, n) {
var r = {
success: "function" != typeof e || e,
failure: "function" == typeof n && n
};
return r.promise = new this.constructor((function(e, t) {
if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
r.resolve = e, r.reject = t;
})), t.chain.push(r), 0 !== t.state && a(c, t), r.promise;
}, this.catch = function(e) {
return this.then(void 0, e);
};
try {
e.call(void 0, (function(e) {
l.call(t, e);
}), (function(e) {
f.call(t, e);
}));
} catch (e) {
f.call(t, e);
}
}
r = function() {
var e, n, r;
function o(e, t) {
this.fn = e, this.self = t, this.next = void 0;
}
return {
add: function(t, i) {
r = new o(t, i), n ? n.next = r : e = r, n = r, r = void 0;
},
drain: function() {
var r = e;
for (e = n = t = void 0; r; ) r.fn.call(r.self), r = r.next;
}
};
}();
var v = e({}, "constructor", m, !1);
return m.prototype = v, e(v, "__NPO__", 0, !1), e(m, "resolve", (function(e) {
return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, n) {
if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
t(e);
}));
})), e(m, "reject", (function(e) {
return new this((function(t, n) {
if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
n(e);
}));
})), e(m, "all", (function(e) {
var t = this;
return "[object Array]" != o.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(n, r) {
if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
var o = e.length, i = Array(o), a = 0;
d(t, e, (function(e, t) {
i[e] = t, ++a === o && n(i);
}), r);
}));
})), e(m, "race", (function(e) {
var t = this;
return "[object Array]" != o.call(e) ? t.reject(TypeError("Not an array")) : new t((function(n, r) {
if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
d(t, e, (function(e, t) {
n(t);
}), r);
}));
})), m;
}, (r = u)[t = "Promise"] = r[t] || o(), e.exports && (e.exports = r[t]);
})), f = new WeakMap;
function d(e, t, n) {
var r = f.get(e.element) || {};
t in r || (r[t] = []), r[t].push(n), f.set(e.element, r);
}
function h(e, t) {
return (f.get(e.element) || {})[t] || [];
}
function p(e, t, n) {
var r = f.get(e.element) || {};
if (!r[t]) return !0;
if (!n) return r[t] = [], f.set(e.element, r), !0;
var o = r[t].indexOf(n);
return -1 !== o && r[t].splice(o, 1), f.set(e.element, r), r[t] && 0 === r[t].length;
}
var m = [ "autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width" ];
function v(e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return m.reduce((function(t, n) {
var r = e.getAttribute("data-vimeo-".concat(n));
return (r || "" === r) && (t[n] = "" === r ? 1 : r), t;
}), t);
}
function y(e, t) {
var n = e.html;
if (!t) throw new TypeError("An element must be provided");
if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
var r = document.createElement("div");
return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), 
t.querySelector("iframe");
}
function g(e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
return new Promise((function(r, o) {
if (!i(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
var a = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
for (var s in t) t.hasOwnProperty(s) && (a += "&".concat(s, "=").concat(encodeURIComponent(t[s])));
var c = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
c.open("GET", a, !0), c.onload = function() {
if (404 !== c.status) if (403 !== c.status) try {
var t = JSON.parse(c.responseText);
if (403 === t.domain_status_code) return y(t, n), void o(new Error("“".concat(e, "” is not embeddable.")));
r(t);
} catch (e) {
o(e);
} else o(new Error("“".concat(e, "” is not embeddable."))); else o(new Error("“".concat(e, "” was not found.")));
}, c.onerror = function() {
var e = c.status ? " (".concat(c.status, ")") : "";
o(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")));
}, c.send();
}));
}
function w(e) {
if ("string" == typeof e) try {
e = JSON.parse(e);
} catch (e) {
return {};
}
return e;
}
function _(e, t, n) {
if (e.element.contentWindow && e.element.contentWindow.postMessage) {
var r = {
method: t
};
void 0 !== n && (r.value = n);
var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
o >= 8 && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin);
}
}
function b(e, t) {
var n, r = [];
if ((t = w(t)).event) "error" === t.event && h(e, t.data.method).forEach((function(n) {
var r = new Error(t.data.message);
r.name = t.data.name, n.reject(r), p(e, t.data.method, n);
})), r = h(e, "event:".concat(t.event)), n = t.data; else if (t.method) {
var o = function(e, t) {
var n = h(e, t);
if (n.length < 1) return !1;
var r = n.shift();
return p(e, t, r), r;
}(e, t.method);
o && (r.push(o), n = t.value);
}
r.forEach((function(t) {
try {
if ("function" == typeof t) return void t.call(e, n);
t.resolve(n);
} catch (e) {}
}));
}
var k = new WeakMap, E = new WeakMap, T = function() {
function t(e) {
var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
if (function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn, 
e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), 
!function(e) {
return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView);
}(e)) throw new TypeError("You must pass either a valid element or a valid id.");
var o = e.ownerDocument.defaultView;
if ("IFRAME" !== e.nodeName) {
var s = e.querySelector("iframe");
s && (e = s);
}
if ("IFRAME" === e.nodeName && !i(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
if (k.has(e)) return k.get(e);
this.element = e, this.origin = "*";
var c = new l((function(t, s) {
var c = function(e) {
if (i(e.origin) && n.element.contentWindow === e.source) {
"*" === n.origin && (n.origin = e.origin);
var r = w(e.data);
if (r && "error" === r.event && r.data && "ready" === r.data.method) {
var o = new Error(r.data.message);
return o.name = r.data.name, void s(o);
}
var a = r && "ready" === r.event, c = r && "ping" === r.method;
if (a || c) return n.element.setAttribute("data-ready", "true"), void t();
b(n, r);
}
};
if (o.addEventListener ? o.addEventListener("message", c, !1) : o.attachEvent && o.attachEvent("onmessage", c), 
"IFRAME" !== n.element.nodeName) {
var u = v(e, r);
g(a(u), u, e).then((function(t) {
var r, o, i, a = y(t, e);
return n.element = a, n._originalElement = e, r = e, o = a, i = f.get(r), f.set(o, i), 
f.delete(r), k.set(n.element, n), t;
})).catch(s);
}
}));
return E.set(this, c), k.set(this.element, this), "IFRAME" === this.element.nodeName && _(this, "ping"), 
this;
}
var n, r, s;
return n = t, r = [ {
key: "callMethod",
value: function(e) {
var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return new l((function(r, o) {
return t.ready().then((function() {
d(t, e, {
resolve: r,
reject: o
}), _(t, e, n);
})).catch(o);
}));
}
}, {
key: "get",
value: function(e) {
var t = this;
return new l((function(n, r) {
return e = o(e, "get"), t.ready().then((function() {
d(t, e, {
resolve: n,
reject: r
}), _(t, e);
})).catch(r);
}));
}
}, {
key: "set",
value: function(e, t) {
var n = this;
return new l((function(r, i) {
if (e = o(e, "set"), null == t) throw new TypeError("There must be a value to set.");
return n.ready().then((function() {
d(n, e, {
resolve: r,
reject: i
}), _(n, e, t);
})).catch(i);
}));
}
}, {
key: "on",
value: function(e, t) {
if (!e) throw new TypeError("You must pass an event name.");
if (!t) throw new TypeError("You must pass a callback function.");
if ("function" != typeof t) throw new TypeError("The callback must be a function.");
0 === h(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {})), 
d(this, "event:".concat(e), t);
}
}, {
key: "off",
value: function(e, t) {
if (!e) throw new TypeError("You must pass an event name.");
if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
p(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}));
}
}, {
key: "loadVideo",
value: function(e) {
return this.callMethod("loadVideo", e);
}
}, {
key: "ready",
value: function() {
var e = E.get(this) || new l((function(e, t) {
t(new Error("Unknown player. Probably unloaded."));
}));
return l.resolve(e);
}
}, {
key: "addCuePoint",
value: function(e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return this.callMethod("addCuePoint", {
time: e,
data: t
});
}
}, {
key: "removeCuePoint",
value: function(e) {
return this.callMethod("removeCuePoint", e);
}
}, {
key: "enableTextTrack",
value: function(e, t) {
if (!e) throw new TypeError("You must pass a language.");
return this.callMethod("enableTextTrack", {
language: e,
kind: t
});
}
}, {
key: "disableTextTrack",
value: function() {
return this.callMethod("disableTextTrack");
}
}, {
key: "pause",
value: function() {
return this.callMethod("pause");
}
}, {
key: "play",
value: function() {
return this.callMethod("play");
}
}, {
key: "unload",
value: function() {
return this.callMethod("unload");
}
}, {
key: "destroy",
value: function() {
var e = this;
return new l((function(t) {
E.delete(e), k.delete(e.element), e._originalElement && (k.delete(e._originalElement), 
e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), 
t();
}));
}
}, {
key: "getAutopause",
value: function() {
return this.get("autopause");
}
}, {
key: "setAutopause",
value: function(e) {
return this.set("autopause", e);
}
}, {
key: "getBuffered",
value: function() {
return this.get("buffered");
}
}, {
key: "getColor",
value: function() {
return this.get("color");
}
}, {
key: "setColor",
value: function(e) {
return this.set("color", e);
}
}, {
key: "getCuePoints",
value: function() {
return this.get("cuePoints");
}
}, {
key: "getCurrentTime",
value: function() {
return this.get("currentTime");
}
}, {
key: "setCurrentTime",
value: function(e) {
return this.set("currentTime", e);
}
}, {
key: "getDuration",
value: function() {
return this.get("duration");
}
}, {
key: "getEnded",
value: function() {
return this.get("ended");
}
}, {
key: "getLoop",
value: function() {
return this.get("loop");
}
}, {
key: "setLoop",
value: function(e) {
return this.set("loop", e);
}
}, {
key: "getPaused",
value: function() {
return this.get("paused");
}
}, {
key: "getPlaybackRate",
value: function() {
return this.get("playbackRate");
}
}, {
key: "setPlaybackRate",
value: function(e) {
return this.set("playbackRate", e);
}
}, {
key: "getPlayed",
value: function() {
return this.get("played");
}
}, {
key: "getSeekable",
value: function() {
return this.get("seekable");
}
}, {
key: "getSeeking",
value: function() {
return this.get("seeking");
}
}, {
key: "getTextTracks",
value: function() {
return this.get("textTracks");
}
}, {
key: "getVideoEmbedCode",
value: function() {
return this.get("videoEmbedCode");
}
}, {
key: "getVideoId",
value: function() {
return this.get("videoId");
}
}, {
key: "getVideoTitle",
value: function() {
return this.get("videoTitle");
}
}, {
key: "getVideoWidth",
value: function() {
return this.get("videoWidth");
}
}, {
key: "getVideoHeight",
value: function() {
return this.get("videoHeight");
}
}, {
key: "getVideoUrl",
value: function() {
return this.get("videoUrl");
}
}, {
key: "getVolume",
value: function() {
return this.get("volume");
}
}, {
key: "setVolume",
value: function(e) {
return this.set("volume", e);
}
} ], r && e(n.prototype, r), s && e(n, s), t;
}();
return r || (function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), n = function(e) {
"console" in window && console.error;
};
t.forEach((function(e) {
try {
if (null !== e.getAttribute("data-vimeo-defer")) return;
var t = v(e);
g(a(t), t, e).then((function(t) {
return y(t, e);
})).catch(n);
} catch (e) {
n();
}
}));
}(), function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
if (!window.VimeoPlayerResizeEmbeds_) {
window.VimeoPlayerResizeEmbeds_ = !0;
var t = function(t) {
if (i(t.origin) && t.data && "spacechange" === t.data.event) for (var n = e.querySelectorAll("iframe"), r = 0; r < n.length; r++) if (n[r].contentWindow === t.source) {
n[r].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
break;
}
};
window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t);
}
}()), T;
}, e.exports = r();
}).call(this, n(2), n(30).setImmediate);
}, function(e, t, n) {
(function(e) {
var r = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;
function i(e, t) {
this._id = e, this._clearFn = t;
}
t.setTimeout = function() {
return new i(o.call(setTimeout, r, arguments), clearTimeout);
}, t.setInterval = function() {
return new i(o.call(setInterval, r, arguments), clearInterval);
}, t.clearTimeout = t.clearInterval = function(e) {
e && e.close();
}, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
this._clearFn.call(r, this._id);
}, t.enroll = function(e, t) {
clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
}, t.unenroll = function(e) {
clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
}, t._unrefActive = t.active = function(e) {
clearTimeout(e._idleTimeoutId);
var t = e._idleTimeout;
t >= 0 && (e._idleTimeoutId = setTimeout((function() {
e._onTimeout && e._onTimeout();
}), t));
}, n(31), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
}).call(this, n(2));
}, function(e, t, n) {
(function(e, t) {
!function(e, n) {
"use strict";
if (!e.setImmediate) {
var r, o, i, a, s, c = 1, u = {}, l = !1, f = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
t.nextTick((function() {
p(e);
}));
} : !function() {
if (e.postMessage && !e.importScripts) {
var t = !0, n = e.onmessage;
return e.onmessage = function() {
t = !1;
}, e.postMessage("", "*"), e.onmessage = n, t;
}
}() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
p(e.data);
}, r = function(e) {
i.port2.postMessage(e);
}) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, 
r = function(e) {
var t = f.createElement("script");
t.onreadystatechange = function() {
p(e), t.onreadystatechange = null, o.removeChild(t), t = null;
}, o.appendChild(t);
}) : r = function(e) {
setTimeout(p, 0, e);
} : (a = "setImmediate$" + Math.random() + "$", s = function(t) {
t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length));
}, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), 
r = function(t) {
e.postMessage(a + t, "*");
}), d.setImmediate = function(e) {
"function" != typeof e && (e = new Function("" + e));
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
var o = {
callback: e,
args: t
};
return u[c] = o, r(c), c++;
}, d.clearImmediate = h;
}
function h(e) {
delete u[e];
}
function p(e) {
if (l) setTimeout(p, 0, e); else {
var t = u[e];
if (t) {
l = !0;
try {
!function(e) {
var t = e.callback, n = e.args;
switch (n.length) {
case 0:
t();
break;

case 1:
t(n[0]);
break;

case 2:
t(n[0], n[1]);
break;

case 3:
t(n[0], n[1], n[2]);
break;

default:
t.apply(void 0, n);
}
}(t);
} finally {
h(e), l = !1;
}
}
}
}
}("undefined" == typeof self ? void 0 === e ? this : e : self);
}).call(this, n(2), n(32));
}, function(e, t) {
var n, r, o = e.exports = {};
function i() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
function s(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
try {
return n(e, 0);
} catch (t) {
try {
return n.call(null, e, 0);
} catch (t) {
return n.call(this, e, 0);
}
}
}
!function() {
try {
n = "function" == typeof setTimeout ? setTimeout : i;
} catch (e) {
n = i;
}
try {
r = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
r = a;
}
}();
var c, u = [], l = !1, f = -1;
function d() {
l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && h());
}
function h() {
if (!l) {
var e = s(d);
l = !0;
for (var t = u.length; t; ) {
for (c = u, u = []; ++f < t; ) c && c[f].run();
f = -1, t = u.length;
}
c = null, l = !1, function(e) {
if (r === clearTimeout) return clearTimeout(e);
if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
try {
return r(e);
} catch (t) {
try {
return r.call(null, e);
} catch (t) {
return r.call(this, e);
}
}
}(e);
}
}
function p(e, t) {
this.fun = e, this.array = t;
}
function m() {}
o.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new p(e, t)), 1 !== u.length || l || s(h);
}, p.prototype.run = function() {
this.fun.apply(null, this.array);
}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", 
o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, 
o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, 
o.listeners = function(e) {
return [];
}, o.binding = function(e) {
throw new Error("process.binding is not supported");
}, o.cwd = function() {
return "/";
}, o.chdir = function(e) {
throw new Error("process.chdir is not supported");
}, o.umask = function() {
return 0;
};
}, function(e, t, n) {}, function(e, t, n) {
"use strict";
n.r(t);
n(29);
var r = n(6), o = n.n(r);
class i {
constructor() {
this.playerEl = document.querySelector(".video-player"), this.buildPlaylist();
let e = window.location.hash;
if (e) {
e = e.slice(1);
let t = this.playlist.findIndex((t => t.mnemo == e));
-1 !== t && (this.initPlayer(t), document.querySelector(".screencast-player__nav").scrollTop = this.playlist[t].el.offsetTop);
} else this.initPlayer(0);
}
bindHandlers() {
for (let e = 0; e < this.playlist.length; e++) {
this.playlist[e].el.onclick = t => {
t.preventDefault(), this.setCurrentVideo(e), this.scrollPlayerIntoView();
};
}
window.addEventListener("resize", o()((() => {
this.onResize();
}), 100));
}
scrollPlayerIntoView() {
this.playerEl.getBoundingClientRect().bottom < 0 && this.playerEl.scrollIntoView(!0);
}
onResize() {
this.iframe.width = this.playerEl.offsetWidth, this.iframe.height = (this.iframe.width * this.playerAspectRatio).toFixed(4);
}
async setCurrentVideo(e) {
this.player || await this.initPlayer(), await this.player.playVideoAt(e);
}
buildPlaylist() {
this.playlist = [];
const e = document.querySelectorAll(".playlist-item[data-video-id]");
for (let t = 0; t < e.length; t++) {
const n = e[t], r = n.getAttribute("data-video-id");
this.playlist.push({
weight: n.querySelector(".playlist-item__id").innerHTML,
videoId: r,
title: n.querySelector(".playlist-item__name").innerHTML,
el: n,
mnemo: n.getAttribute("data-mnemo"),
duration: n.getAttribute("data-duration")
});
}
}
getVideoSize() {
this.currentWidth = this.playerEl.offsetWidth;
}
getVideoAspectRatio() {
const e = this.iframe.width;
return (this.iframe.height / e).toFixed(4);
}
showPlaylistActiveIdx(e) {
const t = document.querySelector(".playlist-item_active");
t && t.classList.remove("playlist-item_active"), this.playlist[e].el.classList.add("playlist-item_active");
}
async initPlayer(e = 0) {
this.player && this.player.destroy(), this.getVideoSize(), window.YT && YT.Player || await new Promise((e => {
window.onYouTubeIframeAPIReady = e;
}));
let t = this.playlist[e].videoId;
this.player = new YT.Player("player", {
videoId: t,
width: this.currentWidth,
playerVars: {
controls: 1,
enablejsapi: 1,
modestbranding: 1,
rel: 0,
listType: "playlist",
list: window.SCREENCAST_DATA.playlistId
},
events: {
onReady: () => {
this.iframe = this.playerEl.querySelector("iframe"), this.playerAspectRatio = this.getVideoAspectRatio(), 
this.bindHandlers(), this.showPlaylistActiveIdx(e);
},
onStateChange: ({data: e}) => {
switch (e) {
case YT.PlayerState.PLAYING:
this.playerEl.classList.add("video-player_playing");
let e = this.player.getPlaylistIndex();
this.showPlaylistActiveIdx(e), window.location.hash = this.playlist[e].mnemo;
break;

case YT.PlayerState.PAUSED:
this.playerEl.classList.remove("video-player_playing");
}
}
}
});
}
}
const {initNewsletterForm: a} = n(8), s = n(27), c = (document.querySelector(".comments"), 
document.querySelector(".screencast-tabmodules__module_description"), document.querySelector(".screencast-tabmodules__module_comments"), 
document.querySelector(".playlist"), document.querySelector(".screencast-tabmodules__module_playlist"), 
document.querySelector(".screencast-player__nav-inner"), document.querySelector(".screencast-player__main"));
let u = !1;
function l() {
document.documentElement.clientWidth <= 890 ? c.removeEventListener("scroll", s) : (document.documentElement.scrollTop = 0, 
u || (c.addEventListener("scroll", s), u = !0));
}
window.addEventListener("resize", (() => {
l();
})), l(), new i, a();
} ]);
//# sourceMappingURL=screencast.e47874fbdcf9759b1a79.js.map