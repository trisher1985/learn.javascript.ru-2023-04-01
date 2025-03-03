var coursesFeedbackShow = function(e) {
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
}, n.p = "/pack/", n(n.s = 4);
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
const r = new (n(7))("en");
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
return l;
})), n.d(t, "Error", (function() {
return u;
}));
let r = n(3);
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
class l extends a {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends a {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
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
}, function(e, t, n) {
let r = n(5), i = n(15), o = n(3), a = n(2), s = n(16), c = n(18);
const l = n(1), u = n(0).lang;
l.i18n.add("courses", n(21)("./" + u + ".yml"));
class p {
constructor() {
this.elem = document, this.delegate("[data-action-coursefeedback-comment-add]", "click", (e => {
e.preventDefault(), this.getItem(e.target).addComment();
})), this.delegate("[data-action-coursefeedback-comment-edit]", "click", (e => {
e.preventDefault(), this.getItem(e.target).editComment();
}));
}
getItem(e) {
return (e = e.closest(".course-feedback")).feedbackItem || (e.feedbackItem = new f(e)), 
e.feedbackItem;
}
}
o.delegateMixin(p.prototype);
class f {
constructor(e) {
this.elem = e, this.number = +e.getAttribute("data-coursefeedback-number");
let t = this.elem.querySelector("[data-coursefeedback-comment-raw]");
this.teacherCommentRaw = t ? t.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/, "&") : "", 
this.delegate(".course-feedback-comment-form", "submit", (e => {
e.preventDefault(), this.onSubmitComment();
})), this.delegate("[data-action-comment-cancel]", "click", (e => {
e.preventDefault(), this.onCancelComment();
})), document.addEventListener("profile-tab-change", this.onCancelComment.bind(this));
}
addComment() {
this.renderCommentForm();
}
editComment() {
this.renderCommentForm();
}
renderCommentForm() {
let e = this.elem.querySelector(".course-feedback__teacher-comment");
e ? this.teacherComment = e.firstChild.innerHTML : (this.teacherComment = "", e = document.createElement("div"), 
e.className = "course-feedback__teacher-comment", this.elem.querySelector(".course-feedback__teacher").appendChild(e)), 
e.innerHTML = s(c, {
teacherCommentRaw: this.teacherCommentRaw
}), e.querySelector("textarea").focus();
}
onCancelComment() {
this.renderComment();
}
onSubmitComment() {
let e = this.elem.querySelector("form"), t = e.elements.teacherComment.value.trim();
const n = r({
method: "PATCH",
url: "/courses/feedback/comment",
body: {
number: this.number,
teacherComment: t
}
});
let o = e.querySelector('[type="submit"]'), s = new i({
elem: o,
size: "small",
elemClass: "button_loading"
});
s.start(), o.disabled = !0, n.addEventListener("loadend", (e => {
s.stop(), o.disabled = !1;
})), n.addEventListener("success", (e => {
200 == n.status ? (new a.Success(l("courses.group_feedback_show.comment_saved")), 
this.teacherCommentRaw = t, this.teacherComment = e.result.teacherComment, this.renderComment()) : new a.Error(l("courses.group_feedback_show.comment_save_error"));
}));
}
renderComment() {
let e = this.elem.querySelector(".course-feedback__teacher-comment");
if (!this.teacherComment) return e && e.remove(), void (this.elem.querySelector("[data-action-coursefeedback-comment-add]").style.display = "");
this.elem.querySelector("[data-action-coursefeedback-comment-add]").style.display = "none", 
e.innerHTML = "<div></div>\n          <a class=\"course-feedback__edit\" href='#' data-action-coursefeedback-comment-edit>".concat(l("courses.group_feedback_show.edit"), "</a>\n          "), 
e.firstChild.innerHTML = this.teacherComment;
}
}
o.delegateMixin(f.prototype), new p;
}, function(e, t, n) {
let r = n(2), i = n(6);
const o = n(0).lang, a = n(1);
a.i18n.add("", n(11)("./" + o + ".yml")), a.i18n.add("error.network", n(13)("./" + o + ".yml")), 
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
let n = l("xhrstart", e);
document.dispatchEvent(n);
})), t.addEventListener("loadend", (e => {
let t = l("xhrend", e);
document.dispatchEvent(t);
})), t.addEventListener("success", (e => {
let t = l("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
})), t.addEventListener("fail", (e => {
let t = l("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
}))), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function l(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = l("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", (e => {
u(a("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
u(a("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
u(a("error.network.request_aborted"), e);
})), t.addEventListener("load", (n => {
if (!t.status) return void u(a("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(a("error.network.invalid_format"), n);
}
if (c.includes(t.status)) !function(e, n) {
let r = l("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n); else {
u(r.info ? a("error.network.server_error_info", {
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
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, function(e, t, n) {
e.exports = n(8);
}, function(e, t, n) {
"use strict";
var r = n(9), i = n(10);
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
function l(e) {
return "[object Object]" === o(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === o(e);
}, p = Array.prototype.forEach;
function f(e, t, n) {
if (null !== e) if (p && e.forEach === p) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
}
var d = /%[sdj%]/g;
function m(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(d, (function(e) {
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
var h = "en";
function _(e) {
var t = {};
return f(e || {}, (function(e, n) {
e && "object" == typeof e ? f(_(e), (function(e, r) {
t[n + "." + r] = e;
})) : t[n] = e;
})), t;
}
var g = "#@$";
function v(e, t) {
return e + g + t;
}
function y(e, t, n) {
var r = v(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var o = e._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, l = s.length; c < l; c++) if (a = v(s[c], n), 
i.hasOwnProperty(a)) return o[r] = a, o[r];
return o[r] = null, null;
}
function b(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? m('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? m('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function x(e) {
if (!(this instanceof x)) return new x(e);
this._defaultLocale = e ? String(e) : h, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
x.prototype.addPhrase = function(e, t, n, r) {
var i, o = this;
if (c(r)) i = r ? 1 / 0 : 0; else if (s(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (l(n) && i > 0) return f(n, (function(n, r) {
o.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
})), this;
if (a(n)) this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || s(n) || c(n) || 0 === i && l(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, x.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var k = /#\{|\(\(|\\\\/;
x.prototype.translate = function(e, t, n) {
var i, c = y(this, e, t);
return c ? (i = this._storage[c]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, o, a, s, c, l;
return k.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new x(n)), 
l = e._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), f(i, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void o.push(m('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, f(e.strict, (function(t, i) {
var o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return s[i] = !1, void (e.strict[i] = o[0].text);
s[i] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
})), c = {}, f(e.forms, (function(t, i) {
var o, a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return o = a[0].text, e.forms[i] = o, 
void (c[o] = !1);
c[t] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
})), o.push(m("loc = %j;", n)), o.push(m("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(m("anchor = params[%j];", a)), o.push(m("cache = this._plurals_cache[loc];")), 
o.push(m("strict = %j;", e.strict)), o.push(m("strict_exec = %j;", s)), o.push(m("forms = %j;", e.forms)), 
o.push(m("forms_exec = %j;", c)), o.push("if (+(anchor) != anchor) {"), o.push(m('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(m("str += %j;", e.text));
})), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, _, b))) : e + ": No translation for [" + t + "]";
}, x.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(v(e, t)) : !!y(this, e, t);
}, x.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(v(e, t)) ? e : null;
var r = y(this, e, t);
return r ? r.split(g, 2)[0] : null;
}, x.prototype.t = x.prototype.translate, x.prototype.stringify = function(e) {
var t = this, n = {};
f(this._storage, (function(e, t) {
n[t.split(g)[1]] = !0;
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
}, x.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), f(e.locales, (function(e, n) {
f(e, (function(e, r) {
t.addPhrase(n, r, e, 0);
}));
})), f(e.fallback, (function(e, n) {
t.setFallback(n, e);
})), this;
}, e.exports = x;
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
start: ue
}, a = ue, s = i, c = "((", l = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", p = {
type: "literal",
value: "))",
description: '"))"'
}, f = null, d = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: xe(e),
anchor: t || "count"
};
}, m = "|", h = {
type: "literal",
value: "|",
description: '"|"'
}, _ = function(e, t) {
return [ e ].concat(t);
}, g = function(e) {
return [ e ];
}, v = "=", y = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, x = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", w = {
type: "literal",
value: " ",
description: '" "'
}, F = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, A = function() {
return {
text: ae()
};
}, j = "\\", C = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, E = /^[\\|)(]/, O = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, S = function(e) {
return e;
}, T = void 0, L = {
type: "any",
description: "any character"
}, z = function() {
return ae();
}, M = ":", R = {
type: "literal",
value: ":",
description: '":"'
}, q = function(e) {
return e;
}, D = "#{", N = {
type: "literal",
value: "#{",
description: '"#{"'
}, P = "}", H = {
type: "literal",
value: "}",
description: '"}"'
}, I = function(e) {
return {
type: "variable",
anchor: e
};
}, U = ".", Z = {
type: "literal",
value: ".",
description: '"."'
}, J = function() {
return ae();
}, $ = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, B = /^[a-zA-Z0-9_$]/, W = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, K = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Y = /^[\\#()|]/, Q = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, V = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], oe = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = o[r.startRule];
}
function ae() {
return t.substring(ee, V);
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
V < re || (V > re && (re = V, ie = []), ie.push(e));
}
function le(n, r, i) {
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
function ue() {
var e, t;
for (e = [], (t = ve()) === i && (t = pe()) === i && (t = he()); t !== i; ) e.push(t), 
(t = ve()) === i && (t = pe()) === i && (t = he());
return e;
}
function pe() {
var e, n, r, o, a;
return e = V, t.substr(V, 2) === c ? (n = c, V += 2) : (n = i, 0 === oe && ce(l)), 
n !== i && (r = fe()) !== i ? (t.substr(V, 2) === u ? (o = u, V += 2) : (o = i, 
0 === oe && ce(p)), o !== i ? (a = function() {
var e, n, r;
e = V, 58 === t.charCodeAt(V) ? (n = M, V++) : (n = i, 0 === oe && ce(R));
n !== i && (r = _e()) !== i ? (ee = e, e = n = q(r)) : (V = e, e = s);
return e;
}(), a === i && (a = f), a !== i ? (ee = e, e = n = d(r, a)) : (V = e, e = s)) : (V = e, 
e = s)) : (V = e, e = s), e;
}
function fe() {
var e, n, r, o;
return e = V, (n = de()) !== i ? (124 === t.charCodeAt(V) ? (r = m, V++) : (r = i, 
0 === oe && ce(h)), r !== i && (o = fe()) !== i ? (ee = e, e = n = _(n, o)) : (V = e, 
e = s)) : (V = e, e = s), e === i && (e = V, (n = de()) !== i && (ee = e, n = g(n)), 
e = n), e;
}
function de() {
var e, n, r, o, a, c;
if (e = V, 61 === t.charCodeAt(V) ? (n = v, V++) : (n = i, 0 === oe && ce(y)), n !== i) {
if (r = [], b.test(t.charAt(V)) ? (o = t.charAt(V), V++) : (o = i, 0 === oe && ce(x)), 
o !== i) for (;o !== i; ) r.push(o), b.test(t.charAt(V)) ? (o = t.charAt(V), V++) : (o = i, 
0 === oe && ce(x)); else r = s;
if (r !== i) if (32 === t.charCodeAt(V) ? (o = k, V++) : (o = i, 0 === oe && ce(w)), 
o === i && (o = f), o !== i) {
if (a = [], (c = me()) !== i) for (;c !== i; ) a.push(c), c = me(); else a = s;
a !== i ? (ee = e, e = n = F(r, a)) : (V = e, e = s);
} else V = e, e = s; else V = e, e = s;
} else V = e, e = s;
if (e === i) {
if (e = V, n = [], (r = me()) !== i) for (;r !== i; ) n.push(r), r = me(); else n = s;
n !== i && (ee = e, n = A()), e = n;
}
return e;
}
function me() {
var e, n, r;
return e = V, 92 === t.charCodeAt(V) ? (n = j, V++) : (n = i, 0 === oe && ce(C)), 
n !== i ? (E.test(t.charAt(V)) ? (r = t.charAt(V), V++) : (r = i, 0 === oe && ce(O)), 
r !== i ? (ee = e, e = n = S(r)) : (V = e, e = s)) : (V = e, e = s), e === i && (e = V, 
n = V, oe++, 124 === t.charCodeAt(V) ? (r = m, V++) : (r = i, 0 === oe && ce(h)), 
r === i && (t.substr(V, 2) === u ? (r = u, V += 2) : (r = i, 0 === oe && ce(p))), 
oe--, r === i ? n = T : (V = n, n = s), n !== i ? (t.length > V ? (r = t.charAt(V), 
V++) : (r = i, 0 === oe && ce(L)), r !== i ? (ee = e, e = n = z()) : (V = e, e = s)) : (V = e, 
e = s)), e;
}
function he() {
var e, n, r, o;
return e = V, t.substr(V, 2) === D ? (n = D, V += 2) : (n = i, 0 === oe && ce(N)), 
n !== i && (r = _e()) !== i ? (125 === t.charCodeAt(V) ? (o = P, V++) : (o = i, 
0 === oe && ce(H)), o !== i ? (ee = e, e = n = I(r)) : (V = e, e = s)) : (V = e, 
e = s), e;
}
function _e() {
var e, n, r, o;
if (e = V, ge() !== i) if (46 === t.charCodeAt(V) ? (n = U, V++) : (n = i, 0 === oe && ce(Z)), 
n !== i) {
if (r = [], (o = _e()) !== i) for (;o !== i; ) r.push(o), o = _e(); else r = s;
r !== i ? (ee = e, e = J()) : (V = e, e = s);
} else V = e, e = s; else V = e, e = s;
return e === i && (e = ge()), e;
}
function ge() {
var e, n, r, o;
if (e = V, $.test(t.charAt(V)) ? (n = t.charAt(V), V++) : (n = i, 0 === oe && ce(G)), 
n !== i) {
for (r = [], B.test(t.charAt(V)) ? (o = t.charAt(V), V++) : (o = i, 0 === oe && ce(W)); o !== i; ) r.push(o), 
B.test(t.charAt(V)) ? (o = t.charAt(V), V++) : (o = i, 0 === oe && ce(W));
r !== i ? (ee = e, e = n = z()) : (V = e, e = s);
} else V = e, e = s;
return e;
}
function ve() {
var e, t, n, r, o;
if (e = V, t = [], n = V, r = V, oe++, (o = pe()) === i && (o = he()), oe--, o === i ? r = T : (V = r, 
r = s), r !== i && (o = ye()) !== i ? (ee = n, n = r = X(o)) : (V = n, n = s), n !== i) for (;n !== i; ) t.push(n), 
n = V, r = V, oe++, (o = pe()) === i && (o = he()), oe--, o === i ? r = T : (V = r, 
r = s), r !== i && (o = ye()) !== i ? (ee = n, n = r = X(o)) : (V = n, n = s); else t = s;
return t !== i && (ee = e, t = K(t)), e = t;
}
function ye() {
var e, n, r;
return e = V, 92 === t.charCodeAt(V) ? (n = j, V++) : (n = i, 0 === oe && ce(C)), 
n !== i ? (Y.test(t.charAt(V)) ? (r = t.charAt(V), V++) : (r = i, 0 === oe && ce(Q)), 
r !== i ? (ee = e, e = n = S(r)) : (V = e, e = s)) : (V = e, e = s), e === i && (t.length > V ? (e = t.charAt(V), 
V++) : (e = i, 0 === oe && ce(L))), e;
}
function be(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function xe(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = a()) !== i && V === t.length) return n;
throw n !== i && V < t.length && ce({
type: "end",
description: "end of input"
}), le(null, ie, re);
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
var o = String(t), a = o.indexOf(".") < 0 ? "" : o.split(".")[1], s = a.length, c = +t, l = +o.split(".")[0], u = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].cFn(c, l, s, +a, u);
}
function a(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(t), a = o.indexOf(".") < 0 ? "" : o.split(".")[1], s = a.length, c = +t, l = +o.split(".")[0], u = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].oFn(c, l, s, +a, u);
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
function l(e, t) {
var n;
for (t.c = t.c ? t.c.map(c) : [ "other" ], t.o = t.o ? t.o.map(c) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function p(e, t) {
return e.indexOf(t) >= 0;
}
l([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) ? 0 : 1;
}
}), l([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), l([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), l([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return p([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : p([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), l([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), l([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return p([ 1, 2, 5, 7, 8 ], n) || p([ 20, 50, 70, 80 ], r) ? 0 : p([ 3, 4 ], n) || p([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || p([ 40, 60, 90 ], r) ? 2 : 3;
}
}), l([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return p([ 2, 3 ], e % 10) && !p([ 12, 13 ], t) ? 0 : 1;
}
}), l([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
l([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || p([ 11, 71, 91 ], n) ? 2 !== t || p([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), l([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = t % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === a && 11 !== s ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, o) || u(2, 4, a) && !u(12, 14, s) ? 1 : 2;
}
}), l([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return p([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), l([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), l([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return p([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : p([ 3, 4 ], e) ? 3 : p([ 5, 6 ], e) ? 4 : 5;
}
}), l([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && p([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && u(3, 4, i) || u(3, 4, o) ? 2 : 3;
}
}), l([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), l([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return p([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = r % 10;
return 0 === n && p([ 1, 2, 3 ], t) || 0 === n && !p([ 4, 6, 9 ], i) || 0 !== n && !p([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return p([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return p([ 1, 11 ], e) ? 0 : p([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
}
}), l([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : p([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), l([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && p([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), l([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
}
}), l([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return p([ 1, 5 ], e) ? 0 : 1;
}
}), l([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), l([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return p([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), l([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), l([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), l([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), l([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), l([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : p([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), l([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100;
return 1 !== i || u(11, 19, o) ? u(2, 9, i) && !u(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), l([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100, a = r % 100, s = r % 10;
return 0 === i || u(11, 19, o) || 2 === n && u(11, 19, a) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), l([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : p([ 7, 8 ], n) && !p([ 17, 18 ], r) ? 2 : 3;
}
}), l([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && u(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : p([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), l([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), l([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), l([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), l([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 2, e) && 2 !== e ? 0 : 1;
}
}), l([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), l([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), l([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), l([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return p([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), l([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), l([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), l([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return p([ 1, 2 ], e % 10) && !p([ 11, 12 ], t) ? 0 : 1;
}
}), l([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), l([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, n) {
var r = {
"./ru.yml": 12
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
}, i.resolve = o, e.exports = i, i.id = 11;
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
"./ru.yml": 14
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
}, i.resolve = o, e.exports = i, i.id = 13;
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
const r = n(17).thumb, i = n(0), o = n(1);
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
}, function(e, n, r) {
var i = r(19);
e.exports = function(e) {
var n, r = "", o = {}, a = e || {};
return function(e, t, a, s, c, l, u, p, f, d, m) {
var h = function(n) {
var r;
if (null == n || "object" != typeof n) return n;
if (n instanceof t) return (r = new t).setTime(n.getTime()), r;
if (n instanceof e) {
r = [];
for (var i = 0, o = n.length; i < o; i++) r[i] = h(n[i]);
return r;
}
if (n instanceof s) {
for (var c in r = {}, n) n.hasOwnProperty(c) && (r[c] = h(n[c]));
return r;
}
throw new a("Unable to copy obj! Its type isn't supported.");
}, _ = {
hr: {
type: "self_closing"
},
br: {
type: "self_closing"
},
wbr: {
type: "self_closing"
},
source: {
type: "self_closing"
},
img: {
type: "self_closing"
},
input: {
type: "self_closing"
},
a: {
type: "inline"
},
abbr: {
type: "inline"
},
acronym: {
type: "inline"
},
b: {
type: "inline"
},
code: {
type: "inline"
},
em: {
type: "inline"
},
font: {
type: "inline"
},
i: {
type: "inline"
},
ins: {
type: "inline"
},
kbd: {
type: "inline"
},
map: {
type: "inline"
},
pre: {
type: "inline"
},
samp: {
type: "inline"
},
small: {
type: "inline"
},
span: {
type: "inline"
},
strong: {
type: "inline"
},
sub: {
type: "inline"
},
sup: {
type: "inline"
},
textarea: {
type: "inline"
},
time: {
type: "inline"
},
label: {
content_type: "inline"
},
p: {
content_type: "inline"
},
h1: {
content_type: "inline"
},
h2: {
content_type: "inline"
},
h3: {
content_type: "inline"
},
h4: {
content_type: "inline"
},
h5: {
content_type: "inline"
},
h6: {
content_type: "inline"
},
ul: {
content_type: "list"
},
ol: {
content_type: "list"
},
select: {
content_type: "optionlist"
},
datalist: {
content_type: "optionlist"
}
}, g = [ "element", "modifier" ], v = {
prefix: "",
element: "__",
modifier: "_",
default_tag: "div",
nosrc_substitute: !0,
flat_elements: !0,
class_delimiter: ""
}, y = function() {
var e = h(v);
void 0 !== f && (e.prefix = f), void 0 !== u && (e.element = u), void 0 !== p && (e.modifier = p), 
void 0 !== l && (e.default_tag = l);
for (var t = 0; t < g.length; t++) {
var n = g[t];
void 0 === e["output_" + n] && (e["output_" + n] = e[n]);
}
return e;
};
o.bemto_custom_inline_tag = n = function(e, t) {
var o = this && this.block, a = this && this.attributes || {};
if (t = t || !1, r += (null == (n = "<") ? "" : n) + i.escape(null == (n = e) ? "" : n), 
a) for (var s in a) a.hasOwnProperty(s) && !1 !== a[s] && void 0 !== a[s] && (r += i.escape(null == (n = " ") ? "" : n) + i.escape(null == (n = s) ? "" : n) + (null == (n = '="') ? "" : n) + (null == (n = !0 === a[s] ? s : a[s]) ? "" : n) + (null == (n = '"') ? "" : n));
t ? r += null == (n = "/>") ? "" : n : (r += null == (n = ">") ? "" : n, o && o(), 
r += (null == (n = "</") ? "" : n) + i.escape(null == (n = e) ? "" : n) + (null == (n = ">") ? "" : n));
}, o.bemto_custom_tag = n = function(e, t) {
var n = this && this.block, a = this && this.attributes || {};
t = t || {};
var s, c, l = !1;
switch ("/" === (e = e || "div").substr(-1) && (l = !0, e = e.slice(0, -1)), t.type || (c = "block", 
_[s = e] && (c = _[s].type || c), c)) {
case "inline":
o.bemto_custom_inline_tag.call({
block: function() {
n && n();
},
attributes: a
}, e);
break;

case "self_closing":
o.bemto_custom_inline_tag.call({
attributes: a
}, e, !0);
break;

default:
l ? r = r + "<" + e + i.attrs(a, !0) + "/>" : (r = r + "<" + e + i.attrs(a, !0) + ">", 
n && n(), r = r + "</" + e + ">");
}
}, o.bemto_tag = n = function(e, t) {
var n = this && this.block, i = this && this.attributes || {}, a = y();
t = t || {};
var s = e || a.default_tag, c = x.length;
e || ("inline" === x[c - 1] ? s = "span" : "list" === x[c - 1] ? s = "li" : "optionlist" === x[c - 1] && (s = "option")), 
e && "span" != e && "div" != e || (i.href && (s = "a"), i.for && (s = "label"), 
i.type ? s = n ? "button" : "input" : i.src && (s = "img")), "list" === x[c - 1] && "li" !== s ? r += "<li>" : "list" !== x[c - 1] && "pseudo-list" !== x[c - 1] && "li" === s ? (r += "<ul>", 
x[x.length] = "pseudo-list") : "pseudo-list" === x[c - 1] && "li" !== s && (r += "</ul>", 
x = x.splice(0, x.length - 1));
var l, u, p = t.content_type || (u = "block", _[l = s] && (u = _[l].content_type || _[l].type || u), 
u);
x[x.length] = p, "img" == s && (i.alt && !i.title && (i.title = ""), i.title && !i.alt && (i.alt = i.title), 
i.alt || (i.alt = ""), "" === i.alt && (i.role = "presentation"), i.src || (!0 === a.nosrc_substitute ? i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : a.nosrc_substitute && (i.src = a.nosrc_substitute))), 
"input" == s && (i.type || (i.type = "text")), "main" == s && (i.role || (i.role = "main")), 
"html" == s && (r += "<!DOCTYPE html>"), o.bemto_custom_tag.call({
block: function() {
n && n && n();
},
attributes: i
}, s, t), "list" === x[c - 1] && "li" != s && (r += "</li>");
};
var b = [], x = [ "block" ];
o.b = n = function(t) {
var n = this && this.block, r = this && this.attributes || {}, i = y();
t && void 0 !== t.prefix && (i.prefix = t.prefix);
var a = t && t.tag || ("string" == typeof t ? t : ""), l = t && t.isElement, u = t && t.metadata, p = !1;
if (r.class) {
var f = r.class;
f instanceof e && (f = f.join(" ")), f = f.split(" ");
var d = [], m = !0, _ = [];
if (function() {
var e = f;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t], o = {}, u = d[d.length - 1], g = !1;
if (r.match(/^[A-Z-]+[A-Z0-9-]?$/)) a = r.toLowerCase(); else if (m && l && (o.context = b[b.length - 1]), 
(k = r.match(new c("^(?!" + i.element + "[A-Za-z0-9])" + i.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(k[1]); else {
(w = r.match(new c("^(?!" + i.modifier + "[A-Za-z0-9])" + i.element + "(.+)$"))) && (o.context = b[b.length - 1], 
r = w[1]), (F = r.match(new c("^(.*[A-Za-z0-9])(?!" + i.modifier + "$)" + i.element + "$"))) && (r = F[1], 
o.is_context = !0, g = !0, p = !0, l = !1), (A = r.match(new c("^(.*?[A-Za-z0-9])(?!" + i.element + "[A-Za-z0-9])" + i.modifier + "(.+)$"))) && (r = A[1], 
o.modifiers || (o.modifiers = []), o.modifiers.push(A[2]));
var v = "", y = "()?";
if (i.prefix) {
"string" == typeof (j = i.prefix) && (j = {
"": j
});
var x = [];
j instanceof s && (function() {
var e = j;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
"string" == typeof t && "" != t && -1 == x.indexOf(t) && x.push(t), "string" == typeof r && "" != r && -1 == x.indexOf(r) && x.push(r);
} else {
n = 0;
for (var t in e) {
n++;
r = e[t];
"string" == typeof t && "" != t && -1 == x.indexOf(t) && x.push(t), "string" == typeof r && "" != r && -1 == x.indexOf(r) && x.push(r);
}
}
}.call(this), y = "(" + x.join("|") + ")?"), (C = r.match(new c("^" + y + "([A-Za-z0-9]+.*)$"))) && (r = C[2], 
v = C[1] || "", void 0 !== (v = j[v]) && !0 !== v || (v = C[1]));
}
o.prefix = (v || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), g && r.match(/^[a-zA-Z0-9]+.*/) && _.push(o.context ? o.context + i.element + r : o.prefix + r), 
o.name = r, m = !1, o.context && o.context.length > 1 ? function() {
var e = o.context;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
(i = h(o)).context = [ r ], d.push(i);
} else {
n = 0;
for (var t in e) {
n++;
var i;
r = e[t];
(i = h(o)).context = [ r ], d.push(i);
}
}
}.call(this) : d.push(o);
}
} else {
n = 0;
for (var t in e) {
n++;
var k;
r = e[t], o = {}, u = d[d.length - 1], g = !1;
if (r.match(/^[A-Z-]+[A-Z0-9-]?$/)) a = r.toLowerCase(); else if (m && l && (o.context = b[b.length - 1]), 
(k = r.match(new c("^(?!" + i.element + "[A-Za-z0-9])" + i.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(k[1]); else {
var w, F, A;
(w = r.match(new c("^(?!" + i.modifier + "[A-Za-z0-9])" + i.element + "(.+)$"))) && (o.context = b[b.length - 1], 
r = w[1]), (F = r.match(new c("^(.*[A-Za-z0-9])(?!" + i.modifier + "$)" + i.element + "$"))) && (r = F[1], 
o.is_context = !0, g = !0, p = !0, l = !1), (A = r.match(new c("^(.*?[A-Za-z0-9])(?!" + i.element + "[A-Za-z0-9])" + i.modifier + "(.+)$"))) && (r = A[1], 
o.modifiers || (o.modifiers = []), o.modifiers.push(A[2]));
v = "", y = "()?";
if (i.prefix) {
var j;
"string" == typeof (j = i.prefix) && (j = {
"": j
});
var C;
x = [];
j instanceof s && (function() {
var e = j;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
"string" == typeof t && "" != t && -1 == x.indexOf(t) && x.push(t), "string" == typeof r && "" != r && -1 == x.indexOf(r) && x.push(r);
} else {
n = 0;
for (var t in e) {
n++;
r = e[t];
"string" == typeof t && "" != t && -1 == x.indexOf(t) && x.push(t), "string" == typeof r && "" != r && -1 == x.indexOf(r) && x.push(r);
}
}
}.call(this), y = "(" + x.join("|") + ")?"), (C = r.match(new c("^" + y + "([A-Za-z0-9]+.*)$"))) && (r = C[2], 
v = C[1] || "", void 0 !== (v = j[v]) && !0 !== v || (v = C[1]));
}
o.prefix = (v || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), g && r.match(/^[a-zA-Z0-9]+.*/) && _.push(o.context ? o.context + i.element + r : o.prefix + r), 
o.name = r, m = !1, o.context && o.context.length > 1 ? function() {
var e = o.context;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
(i = h(o)).context = [ r ], d.push(i);
} else {
n = 0;
for (var t in e) {
n++;
var i;
r = e[t];
(i = h(o)).context = [ r ], d.push(i);
}
}
}.call(this) : d.push(o);
}
}
}
}.call(this), !l && !_.length && d[0] && d[0].name && d[0].name.match(/^[a-zA-Z0-9]+.*/) && (d[0].is_context = !0, 
_.push(d[0].context ? d[0].context + i.element + d[0].name : d[0].prefix + d[0].name), 
p = !0), _.length && (i.flat_elements && function() {
var e = _;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
(r = e[t].match(new c("^(.*?[A-Za-z0-9])(?!" + i.modifier + "[A-Za-z0-9])" + i.element + ".+$"))) && (_[t] = r[1]);
} else {
n = 0;
for (var t in e) {
var r;
n++, (r = e[t].match(new c("^(.*?[A-Za-z0-9])(?!" + i.modifier + "[A-Za-z0-9])" + i.element + ".+$"))) && (_[t] = r[1]);
}
}
}.call(this), b[b.length] = _), d.length) {
var g = [];
(function() {
var e = d;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
if ((o = e[t]).name) {
var r = o.prefix;
o.context && (r = o.context + i.output_element), g.push(r + o.name), o.modifiers && function() {
var e = o.modifiers;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var a = e[t];
g.push(r + o.name + i.output_modifier + a);
} else {
n = 0;
for (var t in e) {
n++;
a = e[t];
g.push(r + o.name + i.output_modifier + a);
}
}
}.call(this);
}
} else {
n = 0;
for (var t in e) {
var o;
if (n++, (o = e[t]).name) {
r = o.prefix;
o.context && (r = o.context + i.output_element), g.push(r + o.name), o.modifiers && function() {
var e = o.modifiers;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var a = e[t];
g.push(r + o.name + i.output_modifier + a);
} else {
n = 0;
for (var t in e) {
n++;
a = e[t];
g.push(r + o.name + i.output_modifier + a);
}
}
}.call(this);
}
}
}
}).call(this);
var v = i.class_delimiter;
v = v ? " " + v + " " : " ", r.class = g.join(v).replace(/%DASH%/g, "-").replace(/%UNDERSCORE%/g, "_");
} else r.class = void 0;
}
n ? o.bemto_tag.call({
block: function() {
n && n();
},
attributes: r
}, a, u) : o.bemto_tag.call({
attributes: r
}, a, u), !l && p && (b = b.splice(0, b.length - 1)), x = x.splice(0, x.length - 1);
}, o.e = n = function(e) {
var t = this && this.block, n = this && this.attributes || {};
(e = e && "string" == typeof e ? {
tag: e
} : e || {}).isElement = !0, o.b.call({
block: function() {
t && t();
},
attributes: n
}, e);
}, o.b.call({
block: function() {
o.b.call({
block: function() {
r += i.escape(null == (n = m) ? "" : n);
},
attributes: {
class: "textarea-input",
name: "teacherComment"
}
}, "textarea"), o.e.call({
block: function() {
o.b.call({
block: function() {
o.e.call({
block: function() {
r += i.escape(null == (n = d("courses.comment_form.submit")) ? "" : n);
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
class: "button _action __item-save",
type: "submit"
}
}, "button"), o.e.call({
block: function() {
r += i.escape(null == (n = d("courses.comment_form.cancel")) ? "" : n);
},
attributes: {
class: "item-cancel",
type: "button",
"data-action-comment-cancel": i.escape(!0)
}
}, "button");
},
attributes: {
class: "ok-cancel"
}
});
},
attributes: {
class: "course-feedback-comment-form"
}
}, "form");
}.call(this, "Array" in a ? a.Array : "undefined" != typeof Array ? Array : void 0, "Date" in a ? a.Date : "undefined" != typeof Date ? Date : void 0, "Error" in a ? a.Error : "undefined" != typeof Error ? Error : void 0, "Object" in a ? a.Object : "undefined" != typeof Object ? Object : void 0, "RegExp" in a ? a.RegExp : "undefined" != typeof RegExp ? RegExp : void 0, "bemto_settings_default_tag" in a ? a.bemto_settings_default_tag : "undefined" != typeof bemto_settings_default_tag ? bemto_settings_default_tag : void 0, "bemto_settings_element" in a ? a.bemto_settings_element : "undefined" != typeof bemto_settings_element ? bemto_settings_element : void 0, "bemto_settings_modifier" in a ? a.bemto_settings_modifier : "undefined" != typeof bemto_settings_modifier ? bemto_settings_modifier : void 0, "bemto_settings_prefix" in a ? a.bemto_settings_prefix : "undefined" != typeof bemto_settings_prefix ? bemto_settings_prefix : void 0, "t" in a ? a.t : "undefined" != typeof t ? t : void 0, "teacherCommentRaw" in a ? a.teacherCommentRaw : "undefined" != typeof teacherCommentRaw ? teacherCommentRaw : void 0), 
r;
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
o = o || n(20).readFileSync(r, "utf8");
} catch (n) {
e(t, null, i);
}
var a = 3, s = o.split("\n"), c = Math.max(i - a, 0), l = Math.min(s.length, i + a);
a = s.slice(c, l).map((function(e, t) {
var n = t + c + 1;
return (n == i ? "  > " : "    ") + n + "| " + e;
})).join("\n");
throw t.path = r, t.message = (r || "Pug") + ":" + i + "\n" + a + "\n\n" + t.message, 
t;
};
}, function(e, t) {}, function(e, t, n) {
var r = {
"./cert/ru.yml": 22,
"./email/ru.yml": 23,
"./feedback/ru.yml": 24,
"./frontpage/ru.yml": 25,
"./groups/ru.yml": 26,
"./models/ru.yml": 27,
"./ru.yml": 28,
"./signup/ru.yml": 29,
"./teacher/ru.yml": 30
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
}, i.resolve = o, e.exports = i, i.id = 21;
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
} ]);
//# sourceMappingURL=coursesFeedbackShow.2abdc4d49e686da3ad79.js.map