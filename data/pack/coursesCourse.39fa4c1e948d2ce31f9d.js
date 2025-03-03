/*! For license information please see coursesCourse.39fa4c1e948d2ce31f9d.js.LICENSE.txt */
var coursesCourse = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var i = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
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
}), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
return e[t];
}.bind(null, i));
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
}, n.p = "/pack/", n(n.s = 46);
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
const r = new (n(12))("en");
let i = console.error;
function o(e) {
return r.hasPhrase(a, e) || i("No such phrase", e), r.t(a, ...arguments);
}
e.exports = o;
const a = n(0).lang;
"en" !== a && r.setFallback(a, "en"), r.add = (...e) => r.addPhrase(a, ...e), o.i18n = r;
}, function(e, t, n) {
"use strict";
n.r(t), n.d(t, "init", (function() {
return o;
})), n.d(t, "Info", (function() {
return s;
})), n.d(t, "Warning", (function() {
return c;
})), n.d(t, "Success", (function() {
return u;
})), n.d(t, "Error", (function() {
return l;
}));
let r = n(10);
class i {
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
function o(e) {
window.notificationManager || (window.notificationManager = new i(e));
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
function i(e, t) {
return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1));
}
function o(e) {
return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
}
function a() {
var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.id, r = t.url, i = n || r;
if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
if (e = i, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(i);
if (o(i)) return i.replace("http:", "https:");
if (n) throw new TypeError("“".concat(n, "” is not a valid video id."));
throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
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
if (n(this, "_id", "_WeakMap_" + o() + "." + o()), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported");
}
function i(e, n) {
if (!r(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e);
}
function o() {
return Math.random().toString().substring(2);
}
return n(e.prototype, "delete", (function(e) {
if (i(this, "delete"), !r(e)) return !1;
var t = e[this._id];
return !(!t || t[0] !== e || (delete e[this._id], 0));
})), n(e.prototype, "get", (function(e) {
if (i(this, "get"), r(e)) {
var t = e[this._id];
return t && t[0] === e ? t[1] : void 0;
}
})), n(e.prototype, "has", (function(e) {
if (i(this, "has"), !r(e)) return !1;
var t = e[this._id];
return !(!t || t[0] !== e);
})), n(e.prototype, "set", (function(e, t) {
if (i(this, "set"), !r(e)) throw new TypeError("Invalid value used as weak map key");
var o = e[this._id];
return o && o[0] === e ? (o[1] = t, this) : (n(e, this._id, [ e, t ]), this);
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
var t, r, i;
i = function() {
var e, t, r, i = Object.prototype.toString, o = void 0 !== n ? function(e) {
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
r.add(e, n), t || (t = o(r.drain));
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
var r, i;
try {
!1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = s(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r);
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
var r = new p(n);
try {
t.call(e, (function() {
l.apply(r, arguments);
}), (function() {
d.apply(r, arguments);
}));
} catch (e) {
d.call(r, e);
}
})) : (n.msg = e, n.state = 1, n.chain.length > 0 && a(c, n));
} catch (e) {
d.call(new p(n), e);
}
}
}
function d(e) {
var t = this;
t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 
t.chain.length > 0 && a(c, t));
}
function f(e, t, n, r) {
for (var i = 0; i < t.length; i++) !function(i) {
e.resolve(t[i]).then((function(e) {
n(i, e);
}), r);
}(i);
}
function p(e) {
this.def = e, this.triggered = !1;
}
function h(e) {
this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
}
function m(e) {
if ("function" != typeof e) throw TypeError("Not a function");
if (0 !== this.__NPO__) throw TypeError("Not a promise");
this.__NPO__ = 1;
var t = new h(this);
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
d.call(t, e);
}));
} catch (e) {
d.call(t, e);
}
}
r = function() {
var e, n, r;
function i(e, t) {
this.fn = e, this.self = t, this.next = void 0;
}
return {
add: function(t, o) {
r = new i(t, o), n ? n.next = r : e = r, n = r, r = void 0;
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
return "[object Array]" != i.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(n, r) {
if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
var i = e.length, o = Array(i), a = 0;
f(t, e, (function(e, t) {
o[e] = t, ++a === i && n(o);
}), r);
}));
})), e(m, "race", (function(e) {
var t = this;
return "[object Array]" != i.call(e) ? t.reject(TypeError("Not an array")) : new t((function(n, r) {
if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
f(t, e, (function(e, t) {
n(t);
}), r);
}));
})), m;
}, (r = u)[t = "Promise"] = r[t] || i(), e.exports && (e.exports = r[t]);
})), d = new WeakMap;
function f(e, t, n) {
var r = d.get(e.element) || {};
t in r || (r[t] = []), r[t].push(n), d.set(e.element, r);
}
function p(e, t) {
return (d.get(e.element) || {})[t] || [];
}
function h(e, t, n) {
var r = d.get(e.element) || {};
if (!r[t]) return !0;
if (!n) return r[t] = [], d.set(e.element, r), !0;
var i = r[t].indexOf(n);
return -1 !== i && r[t].splice(i, 1), d.set(e.element, r), r[t] && 0 === r[t].length;
}
var m = [ "autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width" ];
function v(e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return m.reduce((function(t, n) {
var r = e.getAttribute("data-vimeo-".concat(n));
return (r || "" === r) && (t[n] = "" === r ? 1 : r), t;
}), t);
}
function _(e, t) {
var n = e.html;
if (!t) throw new TypeError("An element must be provided");
if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
var r = document.createElement("div");
return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), 
t.querySelector("iframe");
}
function g(e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
return new Promise((function(r, i) {
if (!o(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
var a = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
for (var s in t) t.hasOwnProperty(s) && (a += "&".concat(s, "=").concat(encodeURIComponent(t[s])));
var c = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
c.open("GET", a, !0), c.onload = function() {
if (404 !== c.status) if (403 !== c.status) try {
var t = JSON.parse(c.responseText);
if (403 === t.domain_status_code) return _(t, n), void i(new Error("“".concat(e, "” is not embeddable.")));
r(t);
} catch (e) {
i(e);
} else i(new Error("“".concat(e, "” is not embeddable."))); else i(new Error("“".concat(e, "” was not found.")));
}, c.onerror = function() {
var e = c.status ? " (".concat(c.status, ")") : "";
i(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")));
}, c.send();
}));
}
function y(e) {
if ("string" == typeof e) try {
e = JSON.parse(e);
} catch (e) {
return {};
}
return e;
}
function w(e, t, n) {
if (e.element.contentWindow && e.element.contentWindow.postMessage) {
var r = {
method: t
};
void 0 !== n && (r.value = n);
var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
i >= 8 && i < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin);
}
}
function b(e, t) {
var n, r = [];
if ((t = y(t)).event) "error" === t.event && p(e, t.data.method).forEach((function(n) {
var r = new Error(t.data.message);
r.name = t.data.name, n.reject(r), h(e, t.data.method, n);
})), r = p(e, "event:".concat(t.event)), n = t.data; else if (t.method) {
var i = function(e, t) {
var n = p(e, t);
if (n.length < 1) return !1;
var r = n.shift();
return h(e, t, r), r;
}(e, t.method);
i && (r.push(i), n = t.value);
}
r.forEach((function(t) {
try {
if ("function" == typeof t) return void t.call(e, n);
t.resolve(n);
} catch (e) {}
}));
}
var k = new WeakMap, x = new WeakMap, E = function() {
function t(e) {
var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
if (function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn, 
e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), 
!function(e) {
return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView);
}(e)) throw new TypeError("You must pass either a valid element or a valid id.");
var i = e.ownerDocument.defaultView;
if ("IFRAME" !== e.nodeName) {
var s = e.querySelector("iframe");
s && (e = s);
}
if ("IFRAME" === e.nodeName && !o(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
if (k.has(e)) return k.get(e);
this.element = e, this.origin = "*";
var c = new l((function(t, s) {
var c = function(e) {
if (o(e.origin) && n.element.contentWindow === e.source) {
"*" === n.origin && (n.origin = e.origin);
var r = y(e.data);
if (r && "error" === r.event && r.data && "ready" === r.data.method) {
var i = new Error(r.data.message);
return i.name = r.data.name, void s(i);
}
var a = r && "ready" === r.event, c = r && "ping" === r.method;
if (a || c) return n.element.setAttribute("data-ready", "true"), void t();
b(n, r);
}
};
if (i.addEventListener ? i.addEventListener("message", c, !1) : i.attachEvent && i.attachEvent("onmessage", c), 
"IFRAME" !== n.element.nodeName) {
var u = v(e, r);
g(a(u), u, e).then((function(t) {
var r, i, o, a = _(t, e);
return n.element = a, n._originalElement = e, r = e, i = a, o = d.get(r), d.set(i, o), 
d.delete(r), k.set(n.element, n), t;
})).catch(s);
}
}));
return x.set(this, c), k.set(this.element, this), "IFRAME" === this.element.nodeName && w(this, "ping"), 
this;
}
var n, r, s;
return n = t, r = [ {
key: "callMethod",
value: function(e) {
var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return new l((function(r, i) {
return t.ready().then((function() {
f(t, e, {
resolve: r,
reject: i
}), w(t, e, n);
})).catch(i);
}));
}
}, {
key: "get",
value: function(e) {
var t = this;
return new l((function(n, r) {
return e = i(e, "get"), t.ready().then((function() {
f(t, e, {
resolve: n,
reject: r
}), w(t, e);
})).catch(r);
}));
}
}, {
key: "set",
value: function(e, t) {
var n = this;
return new l((function(r, o) {
if (e = i(e, "set"), null == t) throw new TypeError("There must be a value to set.");
return n.ready().then((function() {
f(n, e, {
resolve: r,
reject: o
}), w(n, e, t);
})).catch(o);
}));
}
}, {
key: "on",
value: function(e, t) {
if (!e) throw new TypeError("You must pass an event name.");
if (!t) throw new TypeError("You must pass a callback function.");
if ("function" != typeof t) throw new TypeError("The callback must be a function.");
0 === p(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {})), 
f(this, "event:".concat(e), t);
}
}, {
key: "off",
value: function(e, t) {
if (!e) throw new TypeError("You must pass an event name.");
if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
h(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}));
}
}, {
key: "loadVideo",
value: function(e) {
return this.callMethod("loadVideo", e);
}
}, {
key: "ready",
value: function() {
var e = x.get(this) || new l((function(e, t) {
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
x.delete(e), k.delete(e.element), e._originalElement && (k.delete(e._originalElement), 
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
return _(t, e);
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
if (o(t.origin) && t.data && "spacechange" === t.data.event) for (var n = e.querySelectorAll("iframe"), r = 0; r < n.length; r++) if (n[r].contentWindow === t.source) {
n[r].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
break;
}
};
window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t);
}
}()), E;
}, e.exports = r();
}).call(this, n(3), n(28).setImmediate);
}, function(e, t, n) {
const r = n(8), i = n(9), o = n(2), a = n(20), {Recaptcha: s} = n(22), c = n(1), u = n(0).lang;
function l(e, t) {
if (!e.elements.email.value) return;
const n = e.elements.slug;
let a, s = [ ...n.querySelectorAll("option:checked") ].map((e => e.value));
if (s.length || (s = n.value), e.elements["subscribe-email"] && (a = !0), !a && !s.length) return void new o.Error(c("newsletter.client.choose_newsletter"));
const u = {
email: e.elements.email.value,
slug: s
};
e.elements["g-recaptcha-response"] && (u["g-recaptcha-response"] = e.elements["g-recaptcha-response"].value), 
a && (u.replace = !0);
const l = i({
method: "POST",
url: e.action,
body: u
}), d = e.querySelector('[type="submit"]'), f = new r({
elem: d,
size: "small",
elemClass: "button_loading"
});
f.start(), d.disabled = !0, l.addEventListener("loadend", (() => {
f.stop(), d.disabled = !1;
})), l.addEventListener("success", (function(n) {
if (200 == this.status) {
new o.Success(n.result.message, "slow");
let r = e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
r && window.ga("send", "event", r), t && t();
} else new o.Error(n.result.message);
}));
}
c.i18n.add("newsletter.client", n(24)("./" + u + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
for (let t of e) {
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new a({
elem: n
}), i = t.querySelector('button[type="submit"]'), o = i.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", (() => {
i.disabled = !r.getValues().length && !e, !r.getValues().length && e ? o.textContent = c("site.subscribe.button_unsubscribe") : o.textContent = c("site.subscribe.button");
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
let r = n(2), i = n(11);
const o = n(0).lang, a = n(1);
a.i18n.add("", n(16)("./" + o + ".yml")), a.i18n.add("error.network", n(18)("./" + o + ".yml")), 
document.addEventListener("xhrfail", (function(e) {
new r.Error(e.reason);
})), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, o = e.url;
t.open(n, o, !e.sync), t.method = n;
let s = i();
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
function n(e, t, n, r, i) {
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
e.delegateTarget = n, n && r.call(i || this, e);
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
e.exports = n(13);
}, function(e, t, n) {
"use strict";
var r = n(14), i = n(15);
function o(e) {
return Object.prototype.toString.call(e);
}
function a(e) {
return "[object String]" === o(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === o(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === o(e);
}, d = Array.prototype.forEach;
function f(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
}
var p = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(p, (function(e) {
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
return f(e || {}, (function(e, n) {
e && "object" == typeof e ? f(v(e), (function(e, r) {
t[n + "." + r] = e;
})) : t[n] = e;
})), t;
}
var _ = "#@$";
function g(e, t) {
return e + _ + t;
}
function y(e, t, n) {
var r = g(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var o = e._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (a = g(s[c], n), 
i.hasOwnProperty(a)) return o[r] = a, o[r];
return o[r] = null, null;
}
function w(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function b(e) {
if (!(this instanceof b)) return new b(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(e, t, n, r) {
var i, o = this;
if (c(r)) i = r ? 1 / 0 : 0; else if (s(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (u(n) && i > 0) return f(n, (function(n, r) {
o.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
})), this;
if (a(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || s(n) || c(n) || 0 === i && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var k = /#\{|\(\(|\\\\/;
b.prototype.translate = function(e, t, n) {
var i, c = y(this, e, t);
return c ? (i = this._storage[c]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, o, a, s, c, u;
return k.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new b(n)), 
u = e._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), f(i, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void o.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, f(e.strict, (function(t, i) {
var o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return s[i] = !1, void (e.strict[i] = o[0].text);
s[i] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), c = {}, f(e.forms, (function(t, i) {
var o, a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return o = a[0].text, e.forms[i] = o, 
void (c[o] = !1);
c[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), o.push(h("loc = %j;", n)), o.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(h("anchor = params[%j];", a)), o.push(h("cache = this._plurals_cache[loc];")), 
o.push(h("strict = %j;", e.strict)), o.push(h("strict_exec = %j;", s)), o.push(h("forms = %j;", e.forms)), 
o.push(h("forms_exec = %j;", c)), o.push("if (+(anchor) != anchor) {"), o.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(h("str += %j;", e.text));
})), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, v, w))) : e + ": No translation for [" + t + "]";
}, b.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(g(e, t)) : !!y(this, e, t);
}, b.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var r = y(this, e, t);
return r ? r.split(_, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(e) {
var t = this, n = {};
f(this._storage, (function(e, t) {
n[t.split(_)[1]] = !0;
}));
var r = {};
f(n, (function(n, i) {
var o = y(t, e, i);
if (o) {
var a = t._storage[o].locale;
r[a] || (r[a] = {}), r[a][i] = t._storage[o].translation;
}
}));
var i = {
fallback: {},
locales: r
}, o = (t._fallbacks[e] || []).slice(0, -1);
return o.length && (i.fallback[e] = o), JSON.stringify(i);
}, b.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), f(e.locales, (function(e, n) {
f(e, (function(e, r) {
t.addPhrase(n, r, e, 0);
}));
})), f(e.fallback, (function(e, n) {
t.setFallback(n, e);
})), this;
}, e.exports = b;
}, function(e, t) {
e.exports = function() {
function e(e, t, n, r, i, o) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = o, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, o = {
start: le
}, a = le, s = i, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, f = null, p = function(e, t) {
return {
type: "plural",
forms: we(e),
strict: be(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, _ = function(e) {
return [ e ];
}, g = "=", y = {
type: "literal",
value: "=",
description: '"="'
}, w = /^[0-9]/, b = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, E = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, T = function() {
return {
text: ae()
};
}, j = "\\", F = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, C = /^[\\|)(]/, A = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, S = function(e) {
return e;
}, O = void 0, L = {
type: "any",
description: "any character"
}, M = function() {
return ae();
}, P = ":", I = {
type: "literal",
value: ":",
description: '":"'
}, q = function(e) {
return e;
}, N = "#{", R = {
type: "literal",
value: "#{",
description: '"#{"'
}, D = "}", z = {
type: "literal",
value: "}",
description: '"}"'
}, U = function(e) {
return {
type: "variable",
anchor: e
};
}, H = ".", J = {
type: "literal",
value: ".",
description: '"."'
}, V = function() {
return ae();
}, W = /^[a-zA-Z_$]/, B = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, $ = /^[a-zA-Z0-9_$]/, G = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, Y = function(e) {
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
}, re = 0, ie = [], oe = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = o[r.startRule];
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
var i, o;
for (i = n; i < r; i++) "\n" === (o = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ue(n, r, i) {
var o = se(i), a = i < t.length ? t.charAt(i) : null;
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
}(r, a), r, a, i, o.line, o.column);
}
function le() {
var e, t;
for (e = [], (t = ge()) === i && (t = de()) === i && (t = me()); t !== i; ) e.push(t), 
(t = ge()) === i && (t = de()) === i && (t = me());
return e;
}
function de() {
var e, n, r, o, a;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = i, 0 === oe && ce(u)), 
n !== i && (r = fe()) !== i ? (t.substr(Q, 2) === l ? (o = l, Q += 2) : (o = i, 
0 === oe && ce(d)), o !== i ? (a = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = P, Q++) : (n = i, 0 === oe && ce(I));
n !== i && (r = ve()) !== i ? (ee = e, e = n = q(r)) : (Q = e, e = s);
return e;
}(), a === i && (a = f), a !== i ? (ee = e, e = n = p(r, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function fe() {
var e, n, r, o;
return e = Q, (n = pe()) !== i ? (124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = i, 
0 === oe && ce(m)), r !== i && (o = fe()) !== i ? (ee = e, e = n = v(n, o)) : (Q = e, 
e = s)) : (Q = e, e = s), e === i && (e = Q, (n = pe()) !== i && (ee = e, n = _(n)), 
e = n), e;
}
function pe() {
var e, n, r, o, a, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = g, Q++) : (n = i, 0 === oe && ce(y)), n !== i) {
if (r = [], w.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && ce(b)), 
o !== i) for (;o !== i; ) r.push(o), w.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 
0 === oe && ce(b)); else r = s;
if (r !== i) if (32 === t.charCodeAt(Q) ? (o = k, Q++) : (o = i, 0 === oe && ce(x)), 
o === i && (o = f), o !== i) {
if (a = [], (c = he()) !== i) for (;c !== i; ) a.push(c), c = he(); else a = s;
a !== i ? (ee = e, e = n = E(r, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === i) {
if (e = Q, n = [], (r = he()) !== i) for (;r !== i; ) n.push(r), r = he(); else n = s;
n !== i && (ee = e, n = T()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = j, Q++) : (n = i, 0 === oe && ce(F)), 
n !== i ? (C.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && ce(A)), 
r !== i ? (ee = e, e = n = S(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (e = Q, 
n = Q, oe++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = i, 0 === oe && ce(m)), 
r === i && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = i, 0 === oe && ce(d))), 
oe--, r === i ? n = O : (Q = n, n = s), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === oe && ce(L)), r !== i ? (ee = e, e = n = M()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, n, r, o;
return e = Q, t.substr(Q, 2) === N ? (n = N, Q += 2) : (n = i, 0 === oe && ce(R)), 
n !== i && (r = ve()) !== i ? (125 === t.charCodeAt(Q) ? (o = D, Q++) : (o = i, 
0 === oe && ce(z)), o !== i ? (ee = e, e = n = U(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ve() {
var e, n, r, o;
if (e = Q, _e() !== i) if (46 === t.charCodeAt(Q) ? (n = H, Q++) : (n = i, 0 === oe && ce(J)), 
n !== i) {
if (r = [], (o = ve()) !== i) for (;o !== i; ) r.push(o), o = ve(); else r = s;
r !== i ? (ee = e, e = V()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === i && (e = _e()), e;
}
function _e() {
var e, n, r, o;
if (e = Q, W.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === oe && ce(B)), 
n !== i) {
for (r = [], $.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && ce(G)); o !== i; ) r.push(o), 
$.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && ce(G));
r !== i ? (ee = e, e = n = M()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, n, r, o;
if (e = Q, t = [], n = Q, r = Q, oe++, (o = de()) === i && (o = me()), oe--, o === i ? r = O : (Q = r, 
r = s), r !== i && (o = ye()) !== i ? (ee = n, n = r = X(o)) : (Q = n, n = s), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, oe++, (o = de()) === i && (o = me()), oe--, o === i ? r = O : (Q = r, 
r = s), r !== i && (o = ye()) !== i ? (ee = n, n = r = X(o)) : (Q = n, n = s); else t = s;
return t !== i && (ee = e, t = Y(t)), e = t;
}
function ye() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = j, Q++) : (n = i, 0 === oe && ce(F)), 
n !== i ? (K.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && ce(Z)), 
r !== i ? (ee = e, e = n = S(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === oe && ce(L))), e;
}
function we(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function be(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = a()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, ie, re);
}
};
}();
}, function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function o(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var o = String(t), a = o.indexOf(".") < 0 ? "" : o.split(".")[1], s = a.length, c = +t, u = +o.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].cFn(c, u, s, +a, l);
}
function a(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(t), a = o.indexOf(".") < 0 ? "" : o.split(".")[1], s = a.length, c = +t, u = +o.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].oFn(c, u, s, +a, l);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[o(n, t)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[a(n, t)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var t = i(e);
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
var n = t % 10, r = t % 100, i = t % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
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
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], n) ? 2 !== t || d([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = t % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === a && 11 !== s ? 0 : 0 === n && l(2, 4, i) && !l(12, 14, o) || l(2, 4, a) && !l(12, 14, s) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
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
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && d([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && l(3, 4, i) || l(3, 4, o) ? 2 : 3;
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
return d([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], o) ? 0 : 1;
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
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
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
return d([ 1, 5 ], e) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
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
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100;
return 1 !== i || l(11, 19, o) ? l(2, 9, i) && !l(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100, a = r % 100, s = r % 10;
return 0 === i || l(11, 19, o) || 2 === n && l(11, 19, a) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
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
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, i) ? 2 : 3;
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
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return d([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
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
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, n) {
var r = {
"./ru.yml": 17
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 16;
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
"./ru.yml": 19
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 18;
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
const r = n(1), i = n(21);
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
1 === e.length && e.includes("advanced") ? this.textContainer.textContent = this.defaultValue : e.length ? this.textContainer.textContent = e.length + " " + i(e.length, r("site.subscribe.newsletters")) : this.textContainer.textContent = r("site.subscribe.no_selected");
}
getValues() {
return this.options.filter((e => e.selected)).map((e => e.value));
}
};
}, function(e, t) {
e.exports = function(e, t) {
var n, r = (n = e) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", i = t.split(",");
switch (r) {
case "one":
return i[0];

case "few":
return i[1];

case "many":
return i[2];

default:
throw new Error("Unsupported count: " + e);
}
};
}, function(e, t, n) {
t.Recaptcha = n(4), t.initForms = n(23);
}, function(e, t, n) {
let r = n(5), i = n(4);
e.exports = async function() {
let e = document.querySelectorAll("[data-recaptcha-submit]");
if (e.length) {
for (let t of e) t.disabled = !0;
await r();
for (let t of e) {
let e = t.form, n = new i(e);
e.onsubmit = async t => {
t.preventDefault(), await n.validateForm(e), e.checkValidity() ? e.submit() : e.reportValidity();
}, t.disabled = !1;
}
}
};
}, function(e, t, n) {
var r = {
"./ru.yml": 25
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 24;
}, function(e, t) {
e.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
}, function(e, t) {
e.exports = class {
constructor({elem: e}) {
this.elem = e, this.list = e.querySelector("[data-slides]"), this.arrowLeft = e.querySelector("[data-arrow-left]"), 
this.arrowRight = e.querySelector("[data-arrow-right]"), this.position = 0, this.arrowRight.onclick = this.next.bind(this), 
this.arrowLeft.onclick = this.prev.bind(this), this.render();
}
next() {
this.position != this.list.children.length - 1 && (this.position++, this.render());
}
setPosition(e) {
this.position = e, this.render();
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
}, function(e, t) {
e.exports = function(e) {
function t() {
t.wasCalled || (t.wasCalled = !0, e());
}
return setTimeout(t, 500), t;
};
}, function(e, t, n) {
(function(e) {
var r = void 0 !== e && e || "undefined" != typeof self && self || window, i = Function.prototype.apply;
function o(e, t) {
this._id = e, this._clearFn = t;
}
t.setTimeout = function() {
return new o(i.call(setTimeout, r, arguments), clearTimeout);
}, t.setInterval = function() {
return new o(i.call(setInterval, r, arguments), clearInterval);
}, t.clearTimeout = t.clearInterval = function(e) {
e && e.close();
}, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
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
}, n(29), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
}).call(this, n(3));
}, function(e, t, n) {
(function(e, t) {
!function(e, n) {
"use strict";
if (!e.setImmediate) {
var r, i, o, a, s, c = 1, u = {}, l = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
t.nextTick((function() {
h(e);
}));
} : !function() {
if (e.postMessage && !e.importScripts) {
var t = !0, n = e.onmessage;
return e.onmessage = function() {
t = !1;
}, e.postMessage("", "*"), e.onmessage = n, t;
}
}() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
h(e.data);
}, r = function(e) {
o.port2.postMessage(e);
}) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, 
r = function(e) {
var t = d.createElement("script");
t.onreadystatechange = function() {
h(e), t.onreadystatechange = null, i.removeChild(t), t = null;
}, i.appendChild(t);
}) : r = function(e) {
setTimeout(h, 0, e);
} : (a = "setImmediate$" + Math.random() + "$", s = function(t) {
t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length));
}, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), 
r = function(t) {
e.postMessage(a + t, "*");
}), f.setImmediate = function(e) {
"function" != typeof e && (e = new Function("" + e));
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
var i = {
callback: e,
args: t
};
return u[c] = i, r(c), c++;
}, f.clearImmediate = p;
}
function p(e) {
delete u[e];
}
function h(e) {
if (l) setTimeout(h, 0, e); else {
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
p(e), l = !1;
}
}
}
}
}("undefined" == typeof self ? void 0 === e ? this : e : self);
}).call(this, n(3), n(30));
}, function(e, t) {
var n, r, i = e.exports = {};
function o() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
function s(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
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
n = "function" == typeof setTimeout ? setTimeout : o;
} catch (e) {
n = o;
}
try {
r = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
r = a;
}
}();
var c, u = [], l = !1, d = -1;
function f() {
l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && p());
}
function p() {
if (!l) {
var e = s(f);
l = !0;
for (var t = u.length; t; ) {
for (c = u, u = []; ++d < t; ) c && c[d].run();
d = -1, t = u.length;
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
function h(e, t) {
this.fun = e, this.array = t;
}
function m() {}
i.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new h(e, t)), 1 !== u.length || l || s(p);
}, h.prototype.run = function() {
this.fun.apply(null, this.array);
}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", 
i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, 
i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, 
i.listeners = function(e) {
return [];
}, i.binding = function(e) {
throw new Error("process.binding is not supported");
}, i.cwd = function() {
return "/";
}, i.chdir = function(e) {
throw new Error("process.chdir is not supported");
}, i.umask = function() {
return 0;
};
}, function(e, t, n) {
var r = n(32);
e.exports = function(e) {
var t = "", n = e || {};
return function(e, n, i) {
t += '<div class="modal-carousel"><div class="modal-carousel__arrow modal-carousel__arrow_next" data-arrow-right></div><div class="modal-carousel__arrow modal-carousel__arrow_prev" data-arrow-left></div><div class="modal-carousel__inner" data-slides>';
let o = 0;
for (;o < e; ) o++, t = t + '<div class="modal-carousel__slide"><img' + r.attr("src", `/courses/project-screenshot/${i}/${o}.png`, !0, !0) + ' alt="img"></div>';
t += "</div></div>", n && (t = t + '<div class="modal-link"><a' + r.attr("href", `https://course-${i}.javascript.ru`, !0, !0) + ">Посмотреть законченый проект</a></div>");
}.call(this, "count" in n ? n.count : "undefined" != typeof count ? count : void 0, "deployed" in n ? n.deployed : "undefined" != typeof deployed ? deployed : void 0, "slug" in n ? n.slug : "undefined" != typeof slug ? slug : void 0), 
t;
};
}, function(e, t, n) {
"use strict";
var r = Object.prototype.hasOwnProperty;
function i(e, t) {
return Array.isArray(e) ? function(e, t) {
for (var n, r = "", o = "", a = Array.isArray(t), s = 0; s < e.length; s++) (n = i(e[s])) && (a && t[s] && (n = c(n)), 
r = r + o + n, o = " ");
return r;
}(e, t) : e && "object" == typeof e ? function(e) {
var t = "", n = "";
for (var i in e) i && e[i] && r.call(e, i) && (t = t + n + i, n = " ");
return t;
}(e) : e || "";
}
function o(e) {
if (!e) return "";
if ("object" == typeof e) {
var t = "";
for (var n in e) r.call(e, n) && (t = t + n + ":" + e[n] + ";");
return t;
}
return e + "";
}
function a(e, t, n, r) {
return !1 !== t && null != t && (t || "class" !== e && "style" !== e) ? !0 === t ? " " + (r ? e : e + '="' + e + '"') : ("function" == typeof t.toJSON && (t = t.toJSON()), 
"string" == typeof t || (t = JSON.stringify(t), n || -1 === t.indexOf('"')) ? (n && (t = c(t)), 
" " + e + '="' + t + '"') : " " + e + "='" + t.replace(/'/g, "&#39;") + "'") : "";
}
t.merge = function e(t, n) {
if (1 === arguments.length) {
for (var r = t[0], i = 1; i < t.length; i++) r = e(r, t[i]);
return r;
}
for (var a in n) if ("class" === a) {
var s = t[a] || [];
t[a] = (Array.isArray(s) ? s : [ s ]).concat(n[a] || []);
} else if ("style" === a) {
s = (s = o(t[a])) && ";" !== s[s.length - 1] ? s + ";" : s;
var c = o(n[a]);
c = c && ";" !== c[c.length - 1] ? c + ";" : c, t[a] = s + c;
} else t[a] = n[a];
return t;
}, t.classes = i, t.style = o, t.attr = a, t.attrs = function(e, t) {
var n = "";
for (var s in e) if (r.call(e, s)) {
var c = e[s];
if ("class" === s) {
n = a(s, c = i(c), !1, t) + n;
continue;
}
"style" === s && (c = o(c)), n += a(s, c, !1, t);
}
return n;
};
var s = /["&<>]/;
function c(e) {
var t = "" + e, n = s.exec(t);
if (!n) return e;
var r, i, o, a = "";
for (r = n.index, i = 0; r < t.length; r++) {
switch (t.charCodeAt(r)) {
case 34:
o = "&quot;";
break;

case 38:
o = "&amp;";
break;

case 60:
o = "&lt;";
break;

case 62:
o = "&gt;";
break;

default:
continue;
}
i !== r && (a += t.substring(i, r)), i = r + 1, a += o;
}
return i !== r ? a + t.substring(i, r) : a;
}
t.escape = c, t.rethrow = function e(t, r, i, o) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && r || o)) throw t.message += " on line " + i, 
t;
try {
o = o || n(33).readFileSync(r, "utf8");
} catch (n) {
e(t, null, i);
}
var a = 3, s = o.split("\n"), c = Math.max(i - a, 0), u = Math.min(s.length, i + a);
a = s.slice(c, u).map((function(e, t) {
var n = t + c + 1;
return (n == i ? "  > " : "    ") + n + "| " + e;
})).join("\n");
throw t.path = r, t.message = (r || "Pug") + ":" + i + "\n" + a + "\n\n" + t.message, 
t;
};
}, function(e, t) {}, function(e, t, n) {
const r = n(35).thumb, i = n(0), o = n(1);
e.exports = function(e, t) {
return function(e) {
e.t = o, e.thumb = r, e.lang = i.lang, e.env = i.env;
}(t = t ? Object.create(t) : {}), e(t);
};
}, function(e, t) {
t.thumb = function(e, t, n) {
if (!e) return e;
let r = window.devicePixelRatio;
n *= r;
let i = (t *= r) <= 160 && n <= 160 ? "t" : t <= 320 && n <= 320 ? "m" : t <= 640 && n <= 640 ? "i" : t <= 1024 && n <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + i + e.slice(e.lastIndexOf("."));
};
}, function(e, t, n) {
var r = {
"./cert/ru.yml": 37,
"./email/ru.yml": 38,
"./feedback/ru.yml": 39,
"./frontpage/ru.yml": 40,
"./groups/ru.yml": 41,
"./models/ru.yml": 42,
"./ru.yml": 43,
"./signup/ru.yml": 44,
"./teacher/ru.yml": 45
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 36;
}, function(e, t) {
e.exports = {
line1: "Настоящим удостоверяется, что с #{dateStart} по #{dateEnd}",
line1_0: "Настоящим удостоверяется, что #{date}",
line2: "прошёл(а) обучение по программе",
no_user: "Нет такого пользователя",
no_participant: "Нет такого участника",
no_certificate: "Нет такого сертификата"
};
}, function(e, t) {
e.exports = {
invite: {
invitation: "Приглашение на курс",
invitation_masterclass: "Приглашение на интенсив",
seat_has_been_reserved: "На сайте javascript.ru была оформлена запись для вас на #{title}.",
click_to_join: 'Перейдите по ссылке <a href="#{link}">#{link}</a>, чтобы присоединиться к группе.',
contact_person: "Контактное лицо, указанное в записи: #{name}.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
},
invite_remind: {
title: "Присоединитесь, пожалуйста, к группе",
hello: "Здравствуйте!",
still_not_joined: "Вы – в списке участников, но до сих пор не присоединились к группе #{title}.",
join_for: "Это нужно сделать, чтобы вы могли участвовать и получать материалы группы.",
click_to_join: 'Присоединиться к группе можно по ссылке <a href="#{link}">#{link}</a>.',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
materials: {
title: "Уведомление о материалах #{type}а",
materials_added: 'На страницу <a href="#{link}">#{link}</a> добавлены материалы.',
click_to_download: 'Вы можете скачать файл по прямой ссылке (если залогинены на сайте): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Оповещение о переводе",
hello: "Здравствуйте!",
you_were_moved: 'Вы были переведены из группы "#{oldGroup}" в группу "#{newGroup}".',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
order_cancel: {
subject: "[Курсы, система регистрации] Отмена заказа #{number} на сайте #{host}",
title: "Ваш заказ #{number} аннулирован по истечению времени",
order_cancelled: "Ваш заказ на Javascript.ru под номером #{number} автоматически аннулирован",
group_start_soon: "&nbsp;в связи со скорым началом обучения, ввиду отсутствия информации о платеже.",
payment_expired: "&nbsp;по истечению времени ожидания, ввиду отсутствия информации о платеже.",
duplicate: "У вас есть другой, оплаченный, заказ под номером #{number} в ту же группу, так что, вероятно, аннулирован лишний, дублирующий, заказ.",
list_orders: "Список активных заказов доступен в личном кабинете:&nbsp;",
need_login: "&nbsp;(нужно авторизоваться на сайте).",
already_payed_or_soon: 'Если вы собираетесь оплатить заказ сегодня – перейдите по одноразовой ссылке <a href="#{restoreLink}">#{restoreLink}</a>.',
already_payed: 'Для того, чтобы восстановить заказ – перейдите по одноразовой ссылке: <a href="#{restoreLink}">#{restoreLink}</a>.',
valid_one_day: "Ссылка будет активна в течение суток.",
info: "Автоматическая отмена неоплаченных заказов предназначена для удаления несостоявшихся заказов."
},
payment_confirmation: {
title: "Подтверждение оплаты",
payment_confirmed: "Подтверждаем получение оплаты за заказ #{number}",
participation_confirmed: "Ваша запись одобрена",
free_participation: "Ваш заказ #{number} одобрен без оплаты",
is_participant: 'Перейдите по ссылке <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a>, чтобы присоединиться к группе.',
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
}
};
}, function(e, t) {
e.exports = {
title: "Отзыв о #{type}е\n #{title}",
title_all: "Отзывы о #{type}е\n #{title}",
average_grade: "средняя оценка",
grades: {
1: "Плохо",
2: "Так себе",
3: "Нормально",
4: "Хорошо",
5: "Отлично"
},
participated: "Оценки от разработчиков, которые участвовали в #{type}е",
recommend_text: "учеников, оставивших отзывы, рекомендуют этот #{type}",
recommend_text_frontpage: "Пользователей рекомендуют этот #{type}",
all_feedbacks: "все отзывы",
feedback_cut: "весь отзыв",
page: {
recommend: 'Рекомендует #{type} "#{title}"',
course: "#{type}",
teacher: "Преподаватель",
edit: "редактировать",
share: "Поделиться"
},
form: {
grade: "Как вы в целом оцениваете #{type}?*",
recommend: "Порекомендовали бы вы этот #{type} другим?*",
recommend_yes: "Да",
recommend_no: "Нет",
feedback: "Отзыв*",
feedback_placeholder: "Несколько слов о том, насколько полезным #{type} оказался для вас, доступно ли излагается материал, устраивает ли квалификация ведущего и т.д.",
is_public: "Публичный отзыв",
is_public_note: "(будет опубликован на javascript.ru)",
edit: "Редактировать",
name: "Имя",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна",
city: "Город",
occupation: "Область работы",
social: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности",
social_note: "Эта ссылка будет доступна только в контексте вашего отзыва. пожалуйста, укажите её.",
submit: "Отправить",
delete: "удалить",
delete_confirm: "Вы уверены, что хотите удалить этот отзыв?",
deleted: "Отзыв был успешно удален"
},
list: {
policy: "Политика отзывов javascript.ru",
policy_list: 'Отзыв может оставить любой участник #{type}а, после прохождения.\n Показываются все опубликованные отзывы, даже если оценка нам "не нравится".\n Отзывы показываются "как есть", не модерируются, если нет нарушения правил сайта и #{type}а (нецензурная лексика и др).\n Отзывы показываются только для последней версии #{type}а.'
},
filter: {
teachers: "все преподаватели",
all: "с любой оценкой",
courses: "на любой курс",
grade: "с оценкой"
}
};
}, function(e, t) {
e.exports = {
title: "Онлайн-курсы по JavaScript-технологиям",
description: 'Здесь находятся «правильные» курсы по профессиональному JavaScript и смежным технологиям. С теорией, ответами на вопросы, практикой, обратной связью по коду ("code review"). Каждый курс ведёт преподаватель - опытный действующий разработчик.\n',
opened_courses: "Перейти к списку открытых курсов",
people_talk_about: "Что говорят о курсах участники",
people_talk_about_single: "Что говорят о #{type}е участники",
features: [ {
name: "quality",
title: "Качество",
text: "Это самое главное. Мы изучаем разработку на профессиональном уровне"
}, {
name: "online",
onclick: "document.getElementById('online').checked = true",
title: "Дистанционность",
text: "На практике это оказывается удобнее, чем очные курсы"
}, {
name: "study",
title: "Поддержка",
text: "Вы получите советы по развитию именно для вас"
}, {
name: "feedback",
title: "Результат",
text: "Цель курсов - получить конкретные результаты в плане знаний и умений"
}, {
name: "guarantee",
title: "Гарантия",
text: "Возврат денег, если что-то не так"
} ],
program: "Программа курсов и запись",
master_class: "Интенсивы",
master_class_text: "В отличии от курсов, интенсивы - это однодневные или двухдневные вебинары с более узкой программой. Основная цель интенсивов – приобрести или закрепить знания по конкретной технологии в сжатые сроки. Интенсивы, как и курсы, являются интерактивными и предусматривают общение с преподавателем.\n",
opinions: "Мнение профессионалов",
ongoing: "Идёт набор в группы",
teachers_title: "Преподаватель,Преподаватели,Преподаватели",
teachers_description: "Курсы проводятся только опытными и проверенными профессионалами. Каждый преподаватель обладает как практическими, так и теоретическими знаниями, приобретёнными за годы работы в сфере веб-разработки.\n",
phone_toggler: "Информация о ведущем и особенностях курсов.",
learn_more: "Подробнее",
faq: {
title: "Часто задаваемые вопросы",
another_question: 'У вас другой вопрос? Напишите его в комментариях внизу этой страницы или на почту <a href="mailto:help@javascript.ru">help@javascript.ru</a> (ответ обычно в течение дня), а если срочно&nbsp;— по телефону +7-903-5419441.',
old_comments: 'Почитать предыдущие комментарии к этой странице можно в <a href="https://javascript.ru/courses">старом движке</a>.'
},
participant_logos: {
title: "У нас обучались",
description: "Интенсивы и мастер-классы для профессионалов в области JavaScript проводятся примерно с 2006 года, а курсы – с 2011 года. За это время обучились тысячи человек из сотен компаний, всех их перечислить сложно. В частности, проходили обучение сотрудники этих компаний:\n",
notes: "За время обучения были оставлены сотни отзывов, некоторые из которых вы можете видеть выше на этой странице, а также, в более подробном виде, на странице курса и в профилях преподавателей. Мнение о курсах профессионалов вы также можете увидеть выше.\n"
},
professionals: {
title: "Мнение профессионалов",
articles: [ {
userpic: "/img/courses/dmitryx.jpg",
username: "Дмитрий Поляков",
linkedin_link: "https://www.linkedin.com/in/dmitryx",
about: 'Frontend-разработчик в <a href="http://google.com">Google</a>, делает <a href="http://youtube.com">Youtube</a>, общий опыт работы архитектором и ведущим разработчиком различных проектов более 15 лет.\n',
feedback: "Участвовал в мастер-классах Ильи несколько раз, узнал много полезного. Очень нравится профессиональное и отлично организованное изложение и структуризация материала, приводимые примеры и паттерны применения в настоящей разработке. Считаю Илью одним из лучших JS разработчиков и ведущих. Крайне рекомендую курсы для тех, кто хочет отточить свои знания и стать профессионалом.\n"
}, {
userpic: "/img/courses/andrewsumin.jpg",
username: "Андрей Сумин",
linkedin_link: "https://ru.linkedin.com/in/andrewsumin",
about: 'Главный по Frontend в компании <a href="http://mail.ru">Mail.ru</a>, также принимал участие в таких проектах как <a href="http://hh.ru">hh.ru</a> и <a href="http://yandex.ru">yandex.ru</a>.\n',
feedback: "В далёком 2006 году, будучи frontend-разработчиком в Яндекс, я посетил курс по JavaScript. Уже тогда его занятия отличались сильной базой, подробным разбором важных и сложных аспектов и грамотной организацией. Я искренне рекомендую курсы Ильи всем кто хочет знать всё о языке JavaScript.\n"
}, {
userpic: "/img/courses/tyv.jpg",
username: "Юрий Ткаченко",
linkedin_link: "https://ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend-разработчик, в <a href="http://yandex.ru">Яндекс</a> 3 года руководил одной из команд верстальщиков, общий опыт Frontend-разработки более 10 лет .\n',
feedback: "Во время работы руководителем одной из групп верстки в Яндексе передо мной встала задача повышения квалификации большой команды верстальщиков. После длительного анализа я выбрал курс на learn.javascript.ru и остался очень доволен результатом, считаю этот курс лучшим из существующих на русском языке.\n"
} ]
}
};
}, function(e, t) {
e.exports = {
dropbox_share: {
enter_email: "Введите ниже email, с которым вы зарегистрированы на Dropbox. Вам придёт инвайт (функциональность в бете).\n",
by_default: '"По умолчанию" в поле введён ваш email на этом сайте, но, если вы уже используете Dropbox с другим email, то можете его поменять.\n',
request_access: "Запросить доступ к каталогу",
no_dropbox: "У этой группы не включён Dropbox",
success: "Готово, проверьте, в Dropbox должен быть инвайт. Он также придёт на email."
},
materials: {
notify_me: "Уведомлять меня по email о появлении материалов.",
title: "Добавление материалов",
filename: "Имя файла, по времени занятия:&nbsp;&nbsp;",
comment: "Комментарий (опционально)",
notifications: "Рассылать уведомления",
submit: "Добавить",
serial_number: "Серийный номер для видео:",
name: "Название",
size: "Размер",
added_date: "Добавлено",
no_materials: "Материалов пока нет, будут доступны позже.",
chat_logs: "Логи чата"
},
slack_logs: {
title: "Логи группового чата"
}
};
}, function(e, t) {
e.exports = {
course_feedback: {
missing_score: "Не стоит оценка.",
missing_text: "Отсутствует текст отзыва.",
missing_country: "Страна не указана."
},
course_group: {
invalid_timeStart: "Некорректное время начала",
invalid_timeEnd: "Некорректное время конца"
},
course_participant: {
missing_name: "Имя отсутствует.",
invalid_name: "Имя дожно состоять из одного слова.",
missing_surname: "Фамилия отсутствует.",
invalid_surname: "Фамилия должна состоять из одного слова.",
missing_country: "Страна не указана.",
invalid_url: "Некорректный URL страницы."
}
};
}, function(e, t) {
e.exports = {
courses: "Курсы",
type: {
masterclass: "интенсив",
course: "курс"
},
by_user: {
title: "Описание",
info: "Инструкции по настройке окружения",
slack_logs: "Логи slack чата",
jb: "Скидка на редакторы Jetbrains",
ical: "Расписание в формате iCal",
tasklist: "Задачник",
materials: "Материалы для обучения",
participants: "Анкеты участников",
participants_json: "JSON участников (для CORS)"
},
group_feedback_list: {
plural_feedback: "отзыв,отзыва,отзывов"
},
group_feedback_edit: {
no_participant: "Оставлять отзыв могут только участники группы.",
no_rights: "Не хватает прав",
title: "Отзыв",
public_feedback: "Ваш отзыв успешно сохранен. При желании, вы можете поделиться им в соц сетях.",
private_feedback: "Ваш отзыв успешно сохранен. Он будет виден только нам.",
rate_course: "Поставьте, пожалуйста, #{type}у оценку.",
missing_feedback_text: "Вы забыли написать текст отзыва."
},
group_feedback_show: {
private_feedback: "Отзыв не публичный",
title: "Отзыв",
head_title: "Отзыв на",
comment_saved: "Комментарий сохранён",
comment_save_error: "Не получилось сохранить комментарий",
edit: "редактировать"
},
group_finish: "Группа #{title} успешно завершена.",
group_cancel: "Группа #{title} успешно отменена.",
group_materials: {
title: "Материалы для обучения",
added_with_notifications: "Материал добавлен, уведомления разосланы.",
added_wo_notifications: "Материал добавлен, уведомления НЕ рассылались.",
email_subject: "Добавлены материалы #{type}а",
remove_file: "Удалить файл",
file_removed: "Файл удалён.",
settings_saved: "Настройка сохранена."
},
group_materials_download: {
invalid_link: "Ссылка неверна. Возможно, этот материал был добавлен по ошибке и позже удалён из преподавателем."
},
group_slack_register: {
already_slack_user: "Пользователь с адресом #{email} уже зарегистрирован в Slack.",
user_invited: "Приглашение отправлено на адрес #{email}."
},
group_discord_role: {
not_participant: "Не участник курса",
no_target: "Не участник и не преподаватель",
no_discord: "Не привязан Discord",
no_member: 'Нет такого Discord-пользователя, войдите на сервер по ссылке: <a href="https://discord.gg/X8yWNWpTQs">https://discord.gg/X8yWNWpTQs</a>',
no_channel: "Нет такого Discord-канала",
no_group_channel: "Нет группового Discord-канала",
user_added: "Вы приглашены discord-канал #{groupSlug}."
},
group_slack_invite: {
not_participant: "Не участник курса",
no_slack_user: "Пользователь с адресом #{email} не зарегистрирован в Slack, сначала запросите приглашение.",
user_added: "Пользователь #{email} приглашён в slack-канал #{groupSlug}."
},
participants: {
data_updated: "Данные обновлены.",
fix_errors: "Исправьте, пожалуйста, ошибки."
},
invite: {
order: "Заказ #{order}",
success: "Поздравляем, вы присоединились к #{type}у. Ниже, рядом с #{type}ом, вы найдёте инструкцию.",
already_accepted_title: "Это приглашение уже принято",
already_accepted: "Это приглашение уже принято. Зайдите в учётную запись участника для доступа к #{type}у.",
outdated_link_title: "Ссылка устарела",
outdated_link: 'Извините, ссылка по которой вы перешли, устарела. Если у вас возникли какие-либо вопросы – пишите на <a href="mailto:#{email}">#{email}</a>',
already_added: "Вы уже участник #{type}а. Ниже, рядом с #{type}ом, вы найдёте инструкцию.",
choose_country: " выберите страну ",
details_form: {
title: "Анкета участника",
first_name: "Имя на русском*",
surname: "Фамилия на русском*",
first_name_en: "Имя на английском*",
surname_en: "Фамилия на английском*",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна *",
city: "Город",
occupation: "Текущая работа (если есть)",
occupation_note: "Кем или в какой области работаете (кратко)",
experienceGit: "Знаете Git? *",
experienceGitOptions: [ null, "Нет", "Использовал для себя", "Использовал в командной разработке" ],
experienceDoc: "Умеете пользоваться технической документацией и справочной литературой? *",
experienceDocOptions: [ null, "Почти не читал таковую", "Иногда у меня возникают проблемы с чтением тех. документации", "Да, у меня хороший опыт самостоятельной работы с тех. документацией" ],
experienceHtmlCss: "Сколько лет опыта с HTML/CSS? *",
experienceHtmlCss_note: "Можно дробное число, например, полгода: 0.5",
experienceProgramming: "Сколько лет опыта в коммерческой (оплачиваемой) разработке на любом языке с ООП? *",
experienceProgramming_note: "Например, на PHP, Java, C# или другом языке, НЕ считая HTML/CSS",
experienceJs: "Сколько лет опыта в JavaScript? *",
experienceJs_note: "Можно дробное число, например, полгода: 0.5",
needJob: "Ищу работу",
social_note: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности.",
purpose: "С какой целью записались на #{type}?",
wishes: "Ваши пожелания по #{type}у?",
submit: "Отправить"
},
signup_form: {
signup_needed: "Для продолжения вам необходимо зарегистрироваться.",
username: "Имя пользователя",
password: "Пароль",
submit: "Зарегистрироваться"
}
},
signup: {
order: "Заказ",
title: "Запись на #{course}",
title_order: "Заказ #{order}",
amount: "Стоимость",
no_such_group: "Нет такой группы.",
signup_finished_title: "Запись в эту группу завершена",
signup_finished: 'Запись в эту группу завершена. Перейдите на <a href="/courses/#{slug}">страницу #{type}а</a>, чтобы увидеть открытые группы.',
signup_title: "Регистрация\n #{title}",
tutorial: "Учебник",
course_description: "описание курса",
choose_group: "Выберите, пожалуйста, группу из списка.",
login_please: "Пожалуйста, войдите в сайт или зарегистрируйтесь.",
plural_human: "человека,человек,человек",
plural_participant: "участник,участника,участников",
plural_participant2: "участника,участников,участников",
receiptTitle: "Участие в #{type}е для #{count} #{people}",
email_subject: "Заказ #{order}",
payment_failed: "Оплата не прошла, попробуйте ещё раз.",
questions: 'По вопросам, касающимся оплаты, пишите на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Контактная информация:",
payment: "Оплата:",
payment_succeed: "Осуществлена успешно",
payment_pending: "Ожидается подтверждение",
thanks_for_order: "Спасибо за заказ!",
confirmation: 'Вам направлено уведомление на адрес <a href="mailto:#{email}">#{email}</a>.',
click_to_join_group: 'Перейдите в раздел <a href="#{url}/courses">Курсы</a> вашей учетной записи, чтобы присоединиться к группе.',
edit_participants: '<p>В разделе профиля <a href="#{url}/orders#order-#{number}">Заказы</a> введите, пожалуйста, данные участников.</p>',
questions_after: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{email}">#{emailText}</a>.',
teacher: "Ведущий",
seats_pluralize: "место,места,мест",
seats_left: "Осталось #{seats} #{seats_pluralized}",
seats_limited: "Количество мест ограничено",
signup_button: "Записаться",
subscribe: "Подписаться",
confirmation_email: "На ваш email придёт письмо с информацией о дате и деталях программы.",
this_course: "Этот курс",
conducted_plural: "ведут:",
conducted_single: "ведёт:"
},
statistic: {
title: "Статистика участников"
},
feedback_loader: {
no_feedback: "Отзывов пока нет."
},
photo_load_widget: {
wrong_format: "Неверный тип файла или изображение повреждено."
},
participant_item: {
participant: "Участник",
invalid_email: "введите корректный email"
},
comment_form: {
submit: "Опубликовать",
cancel: "Отмена"
},
admin: {
no_such_order: "Нет такого заказа.",
no_such_group: "Нет такого заказа",
no_such_file: "Нет такого файла",
transfer_participant: "Вы переведены в группу #{title}",
transfer_succeed_notified: "Перевод завершён, уведомление отослано.",
transfer_succeed_not_notified: "Перевод завершён, уведомление НЕ отсылалось.",
participant_edited: "Данные участника успешно изменены: #{email}",
participant_deducted: "Участник отчислен: #{email}",
document_uploaded: "Администратор загрузил документы к заказу #{order}"
},
course: {
participant_discount: 'Скидка 10% предоставлена <a href="mailto:EMAIL">EMAIL</a> как участнику предыдущих курсов.'
},
patch: {
information_updated_notified: "Информация обновлена, приглашения высланы на адреса: #{emails}.",
information_updated_not_notified: "Информация об участниках обновлена."
},
chat_logs: {
title: "Логи группового чата",
timeframe_from: "Временной диапазон c",
timeframe_to: "по",
apply: "Применить"
},
contacts: {
title: "Контактная информация",
note: "Оставьте ваши контактные данные, чтобы мы могли связаться с вами в случае необходимости",
name_surname: "Имя и Фамилия:",
phone: "Телефон:",
data_secured: "Ваши данные в безопасности",
personal_info: "Никакие ваши личные данные не будут переданы третьим лицам, кроме как по вашему желанию или для целей выполнения заключенного с вами договора.",
save_and_continue: "Сохранить и продолжить"
},
grayed_list: {
contact_info: "Контактная информация",
payment: "Оплата",
confirmation: "Подтверждение"
},
participant_register: {
title: "Места и участники",
participants_count: "Количество мест",
only_one_place: "есть только 1 место, извините",
enter_count: "введите значение от 1 до #{max}",
already_participant: "Я являюсь участником",
no: "НЕТ",
yes: "ДА",
amount: "Стоимость",
add_participants: "Указать участников",
add_later: "(это можно сделать позже)",
save_and_continue: "Сохранить и продолжить"
},
payment: {
title: "Оплата",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
terms_accept: 'Оплачивая #{type}, вы соглашаетесь с <a href="/courses/offer.ru.pdf" target="_blank">договором оферты</a>.',
questions: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
renew_order: "Заказ #{number} успешно переведен в статус ожидания оплаты.",
renew_order_fail: "Вы не можете перевести заказ #{number} в статус ожидания оплаты, так как занятия уже начались.",
goto_payment: "Перейти к оплате"
},
participant_info: {
country: "Страна",
city: "Город",
about_link: "Ссылка на профиль",
occupation: "Область работы",
purpose: "С какой целью записались на #{type}?",
wishes: "Ваши пожелания по #{type}у"
},
guarantee: {
title: "Гарантия",
description: '<ul>\n  <li>Если объяснения будут вам непонятны</li>\n  <li>Если курсы не дадут вам новых знаний и умений</li>\n  <li>Если вы не сможете подключиться к системе онлайн-обучения</li>\n</ul> <p>…то вы сможете получить деньги назад.</p>\n<p>Для этого достаточно не позже окончания первой недели курса <a href="mailto:help@javascript.ru">написать</a>, что именно вас не устраивает, и тогда ваше участие будет прекращено, а вы получите деньги обратно.</p>\n'
},
certificate: {
title: "Сертификат",
description: "По окончанию курсов каждый участник получает сертификат в электронном виде на русском и английском языках. Лицензия на обучение у нас тоже есть."
},
additional_information: "Дополнительная информация",
back_to_all: "Все курсы",
create_order: {
signup_finished: "Запись в эту группу завершена, извините.",
no_seats: "Извините, в этой группе уже нет мест.",
seats_limit: "Извините, уже нет такого количества мест. Уменьшите количество участников до #{max}.",
no_contact_person: "Не указано контактное лицо.",
no_email: "Не указан email.",
invalid_email: "Некорректный email.",
set_participants: "Отсутствуют участники.",
not_authorized: "Вы не авторизованы.",
title_check_prefix: "Обучение на #{type}е: #{title} (#{count}чел)"
},
invite_email_subject: "Приглашение на #{type}: #{title}",
invite_remind_email_subject: "#{group} – вы не присоединились к группе",
request_notification: "Вы можете запросить уведомление:",
promo_video: {
text: "Обзор #{type}а"
}
};
}, function(e, t) {
e.exports = {
enter_email: "Введите, пожалуйста, email."
};
}, function(e, t) {
e.exports = {
group_start_soon: "Скоро группа: #{title}",
reminder: "Напоминание #{title}",
no_such_course: "Нет такого курса",
not_a_teacher: "Вы не ведёте данный курс",
days: [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
group_exists: "Группа #{slug} уже существует"
};
}, function(e, t, n) {
"use strict";
n.r(t);
var r = n(6), i = n.n(r);
class o {
constructor(e) {
this.videoId = e.videoId, this.onClose = e.onClose, this.sizeList = [ {
width: 0,
height: 0
}, {
width: 640,
height: 360
}, {
width: 853,
height: 480
}, {
width: 1280,
height: 720
} ];
}
openVideo() {
let e = 0;
for (;e < this.sizeList.length && !(document.documentElement.clientHeight < this.sizeList[e].height || document.documentElement.clientWidth < this.sizeList[e].width); e++) ;
if (e--, this.currentWidth = this.sizeList[e].width, 0 === e) window.location.href = "https://vimeo.com/".concat(this.videoId); else {
let e = new Modal;
e.setContent('<div id="player"></div>'), e.elem.addEventListener("modal-remove", (() => {
this.player && (this.player.destroy(), this.player = null), this.onClose && this.onClose.call(this);
})), this.initPlayer();
}
}
initPlayer() {
this.player && this.player.destroy(), this.player = new i.a("player", {
id: this.videoId,
autoplay: !0,
width: this.currentWidth
});
}
}
let a = n(7), s = n(26);
n(2), n(27);
const c = n(31), u = n(34);
a.initNewsletterForm();
const l = n(0).lang, d = n(1), f = document.querySelector(".courses-overview__video-container");
f && function(e) {
const t = e.querySelector(".courses-overview__video[data-video-id]"), n = t.getAttribute("data-video-id");
t.addEventListener("click", (t => {
t.preventDefault(), e.classList.add("courses-overview__video-container_playing");
new o({
videoId: n,
onClose: function() {
e.classList.remove("courses-overview__video-container_playing");
}
}).openVideo();
}));
}(f), d.i18n.add("courses", n(36)("./" + l + ".yml"));
const p = document.querySelector(".courses-feedback-inline");
p && new s({
elem: p
});
{
let h = document.getElementById("course-signup-ref-1"), m = document.getElementById("course-signup-ref-2");
if (h && m) {
let v = h.getBoundingClientRect().bottom + window.pageYOffset;
window.addEventListener("scroll", (function() {
h.getBoundingClientRect().bottom < 0 ? m.style.display = "" : window.pageYOffset < v && (m.style.display = "none");
}));
}
}
{
function _() {
let e = document.querySelector(".course-nav__bar-link");
for (let t of document.querySelectorAll(".course-nav__bar-link")) {
let n = t.getAttribute("href").slice(1), r = document.getElementById(n);
if (r) {
if (!(r.getBoundingClientRect().top < 160)) break;
e = t;
}
}
let t = document.querySelector(".course-nav__bar-link_active");
t != e && (t && t.classList.remove("course-nav__bar-link_active"), e.classList.add("course-nav__bar-link_active"));
}
window.addEventListener("scroll", _, {
passive: !0
});
}
{
let g = document.querySelector("[data-course-subscribe-open]");
g && (g.onclick = () => {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
e = e[e.length - 1], e.style.display = "none" == e.style.display ? "" : "none";
});
}
{
function y(e) {
let t = new Modal;
t.elem.classList.add("course-modal");
let n = document.querySelector("[data-course-carousel]"), r = JSON.parse(n.dataset.courseCarousel);
t.setContent(u(c, r));
let i = new s({
elem: t.elem
});
function o(e) {
"ArrowLeft" == e.code && i.prev(), "ArrowRight" == e.code && i.next();
}
i.setPosition(e - 1), document.addEventListener("keydown", o), t.elem.addEventListener("modal-remove", (() => document.removeEventListener("keydown", o)));
}
document.body.addEventListener("click", (e => {
let t = e.target.closest("[data-course-carousel-open-image]");
t && y(+t.dataset.courseCarouselOpenImage);
}));
}
} ]);
//# sourceMappingURL=coursesCourse.39fa4c1e948d2ce31f9d.js.map