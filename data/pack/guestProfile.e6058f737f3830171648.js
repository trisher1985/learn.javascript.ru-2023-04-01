var guestProfile = function(e) {
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
}, r.p = "/pack/", r(r.s = 3);
}([ function(e, t, r) {
"use strict";
const n = new (r(11))("en");
let o = console.error;
function i(e) {
return n.hasPhrase(a, e) || o("No such phrase", e), n.t(a, ...arguments);
}
e.exports = i;
const a = r(1).lang;
"en" !== a && n.setFallback(a, "en"), n.add = (...e) => n.addPhrase(a, ...e), i.i18n = n;
}, function(e, t) {
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
}, function(e, t, r) {
e.exports = r(4);
}, function(e, t, r) {
const n = r(5);
r(0).i18n.add("profile", r(29)), n();
}, function(e, t, r) {
const n = r(6);
r(0).i18n.add("courses", r(2)), e.exports = function() {
if (!window.FEEDBACK_LIST_INIT) return;
const e = new n(window.FEEDBACK_LIST_INIT), t = document.querySelector(".profile-feedback");
for (let r of document.querySelectorAll(".feedback-stat")) r.addEventListener("click", (r => {
const n = r.target.closest(".feedback-stat__item_clickable");
if (n) {
t.scrollIntoView(!0);
const r = n.getAttribute("data-stars"), o = n.closest(".course-stats").getAttribute("data-course");
e.applyFilter({
stars: r,
course: o
});
}
}));
for (let r of document.querySelectorAll(".course-stats__feedback-link")) r.addEventListener("click", (n => {
n.preventDefault(), t.scrollIntoView(!0);
const o = r.closest(".course-stats").getAttribute("data-course");
e.applyFilter({
course: o
});
}));
e.elem.addEventListener("feedbackChange", (() => {
const t = e.filter.course, r = e.filter.stars, n = document.querySelector("[data-stars].feedback-stat__item_active");
if (n && n.classList.remove("feedback-stat__item_active"), e.filter.stars) {
const e = document.querySelector(".course-stats[data-course='".concat(t, "'] [data-stars='").concat(r, "']"));
e && e.classList.add("feedback-stat__item_active");
}
}));
};
}, function(e, t, r) {
function n(e, t, r) {
return t in e ? Object.defineProperty(e, t, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = r, e;
}
const o = r(7), i = r(0), a = r(1).lang, s = r(19);
i.i18n.add("courses", r(20)("./" + a + ".yml"));
e.exports = class {
constructor({elem: e, filter: t, activeFilters: r, loadOnInit: n}) {
this.elem = e, this.container = e.querySelector("[data-feedback-container]"), (this.form = e.querySelector("[data-feedback-form]")) && this.initFilter(), 
this.baseUrl = "/courses/feedback-fetch", this.filter = this.defaults = t, this.activeFilters = r || [ "stars", "course", "teacher" ], 
this.applyFilter(t), n && this.load(), window.addEventListener("scroll", (e => this.onScroll(e))), 
this.onScroll();
}
initFilter() {
const e = this.elem.querySelector("[data-feedback-count]");
this.elem.addEventListener("feedbackChange", (function(t) {
e.hidden = !1, e.children[0].innerHTML = t.detail.loader.total, e.children[1].innerHTML = s(t.detail.loader.total, i("courses.group_feedback_list.plural_feedback"));
})), this.selects = this.form.elements;
for (let e of this.selects) e.addEventListener("change", (() => {
this.filter[e.name] = e.value, this.applyFilter(this.filter);
}));
}
onScroll() {
this.hasMore && this.container.getBoundingClientRect().bottom <= document.documentElement.clientHeight && !this.isLoading && this.load(!0);
}
applyFilter(e) {
this.filter = function(e) {
for (var t = 1; t < arguments.length; t++) {
var r = null != arguments[t] ? arguments[t] : {}, o = Object.keys(r);
"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
return Object.getOwnPropertyDescriptor(r, e).enumerable;
})))), o.forEach((function(t) {
n(e, t, r[t]);
}));
}
return e;
}({}, this.defaults, e);
for (let e in this.filter) this.selects && this.selects[e] && (this.selects[e].querySelector("option[value='".concat(this.filter[e], "']")).selected = !0);
for (let e of this.activeFilters) this.selects && this.selects[e] && !this.filter[e] && (this.selects[e].querySelector("option:first-child").selected = !0);
this.count = 0, this.total = null, this.hasMore = !0, this.load();
}
load(e = !1) {
let t = "".concat(this.baseUrl, "?skip=").concat(this.count, "&needTotal=").concat(null === this.total ? 1 : 0);
for (let e in this.filter) t += "&".concat(e, "=").concat(this.filter[e]);
const r = o({
method: "GET",
json: !0,
url: t
});
this.elem.classList.add("course-feedbacks_loading"), this.isLoading = !0, r.addEventListener("loadend", (() => {
this.isLoading = !1, this.elem.classList.remove("course-feedbacks_loading");
})), r.addEventListener("success", (t => {
void 0 !== t.result.total && (this.total = t.result.total), t.result.count ? (e ? this.container.insertAdjacentHTML("beforeend", t.result.html) : this.container.innerHTML = t.result.html, 
this.count += t.result.count) : this.count || (this.container.innerHTML = "<p>".concat(i("courses.feedback_loader.no_feedback"), "</p>"), 
this.elem.classList.add("course-feedbacks_no-feedback")), !1 === t.result.hasMore && (this.hasMore = !1), 
this.elem.dispatchEvent(new CustomEvent("feedbackChange", {
bubbles: !0,
detail: {
loader: this
}
}));
}));
}
};
}, function(e, t, r) {
let n = r(8), o = r(10);
const i = r(1).lang, a = r(0);
a.i18n.add("", r(15)("./" + i + ".yml")), a.i18n.add("error.network", r(17)("./" + i + ".yml")), 
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
let r = l("xhrstart", e);
document.dispatchEvent(r);
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
let r = new CustomEvent(e);
return r.originalEvent = t, r;
}
function u(e, r) {
let n = l("fail", r);
n.reason = e, t.dispatchEvent(n);
}
return t.addEventListener("error", (e => {
u(a("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
u(a("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
u(a("error.network.request_aborted"), e);
})), t.addEventListener("load", (r => {
if (!t.status) return void u(a("error.network.no_response"), r);
let n = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (r) {
return void u(a("error.network.invalid_format"), r);
}
if (c.includes(t.status)) !function(e, r) {
let n = l("success", r);
n.result = e, t.dispatchEvent(n);
}(n, r); else {
u(n.info ? a("error.network.server_error_info", {
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
}, function(e, t, r) {
"use strict";
r.r(t), r.d(t, "init", (function() {
return i;
})), r.d(t, "Info", (function() {
return s;
})), r.d(t, "Warning", (function() {
return c;
})), r.d(t, "Success", (function() {
return l;
})), r.d(t, "Error", (function() {
return u;
}));
let n = r(9);
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
}, function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, function(e, t, r) {
e.exports = r(12);
}, function(e, t, r) {
"use strict";
var n = r(13), o = r(14);
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
function l(e) {
return "[object Object]" === i(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === i(e);
}, p = Array.prototype.forEach;
function d(e, t, r) {
if (null !== e) if (p && e.forEach === p) e.forEach(t, r); else if (e.length === +e.length) for (var n = 0, o = e.length; n < o; n += 1) t.call(r, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(r, e[i], i, e);
}
var f = /%[sdj%]/g;
function _(e) {
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
var h = "en";
function m(e) {
var t = {};
return d(e || {}, (function(e, r) {
e && "object" == typeof e ? d(m(e), (function(e, n) {
t[r + "." + n] = e;
})) : t[r] = e;
})), t;
}
var v = "#@$";
function g(e, t) {
return e + v + t;
}
function y(e, t, r) {
var n = g(t, r), o = e._storage;
if (o.hasOwnProperty(n)) return n;
if (t === e._defaultLocale) return null;
var i = e._fallbacks_cache;
if (i.hasOwnProperty(n)) return i[n];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, l = s.length; c < l; c++) if (a = g(s[c], r), 
o.hasOwnProperty(a)) return i[n] = a, i[n];
return i[n] = null, null;
}
function b(e, t, r) {
var n = o.indexOf(e, t);
return -1 === n ? _('[pluralizer for "%s" locale not found]', e) : void 0 === r[n] ? _('[plural form %d ("%s") not found in translation]', n, o.forms(e)[n]) : r[n];
}
function k(e) {
if (!(this instanceof k)) return new k(e);
this._defaultLocale = e ? String(e) : h, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
k.prototype.addPhrase = function(e, t, r, n) {
var o, i = this;
if (c(n)) o = n ? 1 / 0 : 0; else if (s(n)) {
if ((o = Math.floor(n)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (l(r) && o > 0) return d(r, (function(r, n) {
i.addPhrase(e, (t ? t + "." : "") + n, r, o - 1);
})), this;
if (a(r)) this._storage[g(e, t)] = {
translation: r,
locale: e,
raw: !1
}; else {
if (!(u(r) || s(r) || c(r) || 0 === o && l(r))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: r,
locale: e,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, k.prototype.setFallback = function(e, t) {
var r = this._defaultLocale;
if (r === e) throw new Error("Default locale can't have fallbacks");
var n = u(t) ? t.slice() : [ t ];
return n[n.length - 1] !== r && n.push(r), this._fallbacks[e] = n, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
k.prototype.translate = function(e, t, r) {
var o, c = y(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, r) {
var o, i, a, s, c, l;
return w.test(t) ? 1 === (o = n.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[r] || (e._plurals_cache[r] = new k(r)), 
l = e._plurals_cache[r], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), d(o, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void i.push(_('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, d(e.strict, (function(t, o) {
var i = n.parse(t);
if (1 === i.length && "literal" === i[0].type) return s[o] = !1, void (e.strict[o] = i[0].text);
s[o] = !0, l.hasPhrase(r, t, !0) || l.addPhrase(r, t, t);
})), c = {}, d(e.forms, (function(t, o) {
var i, a = n.parse(t);
if (1 === a.length && "literal" === a[0].type) return i = a[0].text, e.forms[o] = i, 
void (c[i] = !1);
c[t] = !0, l.hasPhrase(r, t, !0) || l.addPhrase(r, t, t);
})), i.push(_("loc = %j;", r)), i.push(_("loc_plzr = %j;", r.split(/[-_]/)[0])), 
i.push(_("anchor = params[%j];", a)), i.push(_("cache = this._plurals_cache[loc];")), 
i.push(_("strict = %j;", e.strict)), i.push(_("strict_exec = %j;", s)), i.push(_("forms = %j;", e.forms)), 
i.push(_("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(_('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(_("str += %j;", e.text));
})), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((s(r) || a(r)) && (r = {
count: r,
value: r
}), o.compiled.call(this, r, m, b))) : e + ": No translation for [" + t + "]";
}, k.prototype.hasPhrase = function(e, t, r) {
return r ? this._storage.hasOwnProperty(g(e, t)) : !!y(this, e, t);
}, k.prototype.getLocale = function(e, t, r) {
if (r) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var n = y(this, e, t);
return n ? n.split(v, 2)[0] : null;
}, k.prototype.t = k.prototype.translate, k.prototype.stringify = function(e) {
var t = this, r = {};
d(this._storage, (function(e, t) {
r[t.split(v)[1]] = !0;
}));
var n = {};
d(r, (function(r, o) {
var i = y(t, e, o);
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
}, k.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), d(e.locales, (function(e, r) {
d(e, (function(e, n) {
t.addPhrase(r, n, e, 0);
}));
})), d(e.fallback, (function(e, r) {
t.setFallback(r, e);
})), this;
}, e.exports = k;
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
start: ue
}, a = ue, s = o, c = "((", l = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", p = {
type: "literal",
value: "))",
description: '"))"'
}, d = null, f = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: ke(e),
anchor: t || "count"
};
}, _ = "|", h = {
type: "literal",
value: "|",
description: '"|"'
}, m = function(e, t) {
return [ e ].concat(t);
}, v = function(e) {
return [ e ];
}, g = "=", y = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, k = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, w = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, F = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, j = function() {
return {
text: ae()
};
}, E = "\\", S = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, T = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, L = function(e) {
return e;
}, M = void 0, A = {
type: "any",
description: "any character"
}, C = function() {
return ae();
}, q = ":", N = {
type: "literal",
value: ":",
description: '":"'
}, D = function(e) {
return e;
}, P = "#{", z = {
type: "literal",
value: "#{",
description: '"#{"'
}, I = "}", U = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(e) {
return {
type: "variable",
anchor: e
};
}, R = ".", J = {
type: "literal",
value: ".",
description: '"."'
}, X = function() {
return ae();
}, G = /^[a-zA-Z_$]/, Y = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, B = /^[a-zA-Z0-9_$]/, K = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, W = function(e) {
return e;
}, $ = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, V = {
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
function le(r, n, o) {
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
function ue() {
var e, t;
for (e = [], (t = ge()) === o && (t = pe()) === o && (t = he()); t !== o; ) e.push(t), 
(t = ge()) === o && (t = pe()) === o && (t = he());
return e;
}
function pe() {
var e, r, n, i, a;
return e = Q, t.substr(Q, 2) === c ? (r = c, Q += 2) : (r = o, 0 === ie && ce(l)), 
r !== o && (n = de()) !== o ? (t.substr(Q, 2) === u ? (i = u, Q += 2) : (i = o, 
0 === ie && ce(p)), i !== o ? (a = function() {
var e, r, n;
e = Q, 58 === t.charCodeAt(Q) ? (r = q, Q++) : (r = o, 0 === ie && ce(N));
r !== o && (n = me()) !== o ? (ee = e, e = r = D(n)) : (Q = e, e = s);
return e;
}(), a === o && (a = d), a !== o ? (ee = e, e = r = f(n, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function de() {
var e, r, n, i;
return e = Q, (r = fe()) !== o ? (124 === t.charCodeAt(Q) ? (n = _, Q++) : (n = o, 
0 === ie && ce(h)), n !== o && (i = de()) !== o ? (ee = e, e = r = m(r, i)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (r = fe()) !== o && (ee = e, r = v(r)), 
e = r), e;
}
function fe() {
var e, r, n, i, a, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (r = g, Q++) : (r = o, 0 === ie && ce(y)), r !== o) {
if (n = [], b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(k)), 
i !== o) for (;i !== o; ) n.push(i), b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 
0 === ie && ce(k)); else n = s;
if (n !== o) if (32 === t.charCodeAt(Q) ? (i = w, Q++) : (i = o, 0 === ie && ce(x)), 
i === o && (i = d), i !== o) {
if (a = [], (c = _e()) !== o) for (;c !== o; ) a.push(c), c = _e(); else a = s;
a !== o ? (ee = e, e = r = F(n, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, r = [], (n = _e()) !== o) for (;n !== o; ) r.push(n), n = _e(); else r = s;
r !== o && (ee = e, r = j()), e = r;
}
return e;
}
function _e() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = E, Q++) : (r = o, 0 === ie && ce(S)), 
r !== o ? (O.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(T)), 
n !== o ? (ee = e, e = r = L(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
r = Q, ie++, 124 === t.charCodeAt(Q) ? (n = _, Q++) : (n = o, 0 === ie && ce(h)), 
n === o && (t.substr(Q, 2) === u ? (n = u, Q += 2) : (n = o, 0 === ie && ce(p))), 
ie--, n === o ? r = M : (Q = r, r = s), r !== o ? (t.length > Q ? (n = t.charAt(Q), 
Q++) : (n = o, 0 === ie && ce(A)), n !== o ? (ee = e, e = r = C()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function he() {
var e, r, n, i;
return e = Q, t.substr(Q, 2) === P ? (r = P, Q += 2) : (r = o, 0 === ie && ce(z)), 
r !== o && (n = me()) !== o ? (125 === t.charCodeAt(Q) ? (i = I, Q++) : (i = o, 
0 === ie && ce(U)), i !== o ? (ee = e, e = r = H(n)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function me() {
var e, r, n, i;
if (e = Q, ve() !== o) if (46 === t.charCodeAt(Q) ? (r = R, Q++) : (r = o, 0 === ie && ce(J)), 
r !== o) {
if (n = [], (i = me()) !== o) for (;i !== o; ) n.push(i), i = me(); else n = s;
n !== o ? (ee = e, e = X()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ve()), e;
}
function ve() {
var e, r, n, i;
if (e = Q, G.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(Y)), 
r !== o) {
for (n = [], B.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(K)); i !== o; ) n.push(i), 
B.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(K));
n !== o ? (ee = e, e = r = C()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, r, n, i;
if (e = Q, t = [], r = Q, n = Q, ie++, (i = pe()) === o && (i = he()), ie--, i === o ? n = M : (Q = n, 
n = s), n !== o && (i = ye()) !== o ? (ee = r, r = n = W(i)) : (Q = r, r = s), r !== o) for (;r !== o; ) t.push(r), 
r = Q, n = Q, ie++, (i = pe()) === o && (i = he()), ie--, i === o ? n = M : (Q = n, 
n = s), n !== o && (i = ye()) !== o ? (ee = r, r = n = W(i)) : (Q = r, r = s); else t = s;
return t !== o && (ee = e, t = $(t)), e = t;
}
function ye() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = E, Q++) : (r = o, 0 === ie && ce(S)), 
r !== o ? (Z.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(V)), 
n !== o ? (ee = e, e = r = L(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ie && ce(A))), e;
}
function be(e) {
for (var t = [], r = 0; r < e.length; r++) void 0 === e[r].strict && t.push(e[r].text);
return t;
}
function ke(e) {
for (var t = {}, r = 0; r < e.length; r++) void 0 !== e[r].strict && (t[e[r].strict] = e[r].text);
return t;
}
if ((r = a()) !== o && Q === t.length) return r;
throw r !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), le(null, oe, ne);
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
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, l = +i.split(".")[0], u = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return n[r].cFn(c, l, s, +a, u);
}
function a(e, t) {
var r = o(e);
if (!r) return -1;
if (!n[r].oFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, l = +i.split(".")[0], u = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return n[r].oFn(c, l, s, +a, u);
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
function l(e, t) {
var r;
for (t.c = t.c ? t.c.map(c) : [ "other" ], t.o = t.o ? t.o.map(c) : [ "other" ], 
r = 0; r < e.length; r++) n[e[r]] = t;
}
function u(e, t, r) {
return e <= r && r <= t && r % 1 == 0;
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
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
}
}), l([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100, o = t % 1e3;
return p([ 1, 2, 5, 7, 8 ], r) || p([ 20, 50, 70, 80 ], n) ? 0 : p([ 3, 4 ], r) || p([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === r || p([ 40, 60, 90 ], n) ? 2 : 3;
}
}), l([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : u(2, 4, t) && !u(12, 14, r) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, r) ? 2 : 3;
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
var t = e % 10, r = e % 100, n = e % 1e6;
return 1 !== t || p([ 11, 71, 91 ], r) ? 2 !== t || p([ 12, 72, 92 ], r) ? !u(3, 4, t) && 9 !== t || u(10, 19, r) || u(70, 79, r) || u(90, 99, r) ? 0 !== e && 0 === n ? 3 : 4 : 2 : 1 : 0;
}
}), l([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, i = t % 100, a = n % 10, s = n % 100;
return 0 === r && 1 === o && 11 !== i || 1 === a && 11 !== s ? 0 : 0 === r && u(2, 4, o) && !u(12, 14, i) || u(2, 4, a) && !u(12, 14, s) ? 1 : 2;
}
}), l([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return p([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), l([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : u(2, 4, t) && 0 === r ? 1 : 0 !== r ? 2 : 3;
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
cFn: function(e, t, r, n, o) {
return 1 === e || 0 !== o && p([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 100, i = n % 100;
return 0 === r && 1 === o || 1 === i ? 0 : 0 === r && 2 === o || 2 === i ? 1 : 0 === r && u(3, 4, o) || u(3, 4, i) ? 2 : 3;
}
}), l([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : 2 === t && 12 !== r ? 1 : 3 === t && 13 !== r ? 2 : 3;
}
}), l([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return p([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, i = n % 10;
return 0 === r && p([ 1, 2, 3 ], t) || 0 === r && !p([ 4, 6, 9 ], o) || 0 !== r && !p([ 4, 6, 9 ], i) ? 0 : 1;
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
cFn: function(e, t, r) {
var n = t % 10;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && p([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== r ? 3 : 4;
}
}), l([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, r) {
var n = e % 10;
return 1 === t && 0 === r ? 0 : 2 === t && 0 === r ? 1 : 0 !== r || u(0, 10, e) || 0 !== n ? 3 : 2;
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
cFn: function(e, t, r, n, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), l([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
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
var r = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, r) || 40 === r || 60 === r || 80 === r ? 1 : 2;
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
cFn: function(e, t, r, n) {
var o = e % 10, i = e % 100;
return 1 !== o || u(11, 19, i) ? u(2, 9, o) && !u(11, 19, i) ? 1 : 0 !== n ? 2 : 3 : 0;
}
}), l([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, r, n) {
var o = e % 10, i = e % 100, a = n % 100, s = n % 10;
return 0 === o || u(11, 19, i) || 2 === r && u(11, 19, a) ? 0 : 1 === o && 11 !== i || 2 === r && 1 === s && 11 !== a || 2 !== r && 1 === s ? 1 : 2;
}
}), l([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return 0 === r && 1 === t % 10 || 1 === n % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100;
return 1 === r && 11 !== n ? 0 : 2 === r && 12 !== n ? 1 : p([ 7, 8 ], r) && !p([ 17, 18 ], n) ? 2 : 3;
}
}), l([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 0 !== r || 0 === e || 1 !== e && u(1, 19, e % 100) ? 1 : 2;
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
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 1 === t && 0 === r ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 1 !== t && u(0, 1, n) || 0 === r && u(5, 9, n) || 0 === r && u(12, 14, o) ? 2 : 3;
}
}), l([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 2, e) && 2 !== e ? 0 : 1;
}
}), l([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === e && 0 === r ? 0 : 1;
}
}), l([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && u(5, 9, n) || 0 === r && u(11, 14, o) ? 2 : 3;
}
}), l([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), l([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return p([ 0, 1 ], e) || 0 === t && 1 === n ? 0 : 1;
}
}), l([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r) {
var n = t % 100;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && u(3, 4, n) || 0 !== r ? 2 : 3;
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
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
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
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && u(5, 9, n) || 0 === r && u(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
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
"./ru.yml": 18
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
}, o.resolve = i, e.exports = o, o.id = 17;
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
e.exports = function(e, t) {
var r, n = (r = e) % 10 == 1 && r % 100 != 11 ? "one" : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 12 || r % 100 > 14) && r == Math.floor(r) ? "few" : r % 10 == 0 || r % 10 >= 5 && r % 10 <= 9 || r % 100 >= 11 && r % 100 <= 14 && r == Math.floor(r) ? "many" : "other", o = t.split(",");
switch (n) {
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
}, function(e, t, r) {
var n = {
"./cert/ru.yml": 21,
"./email/ru.yml": 22,
"./feedback/ru.yml": 23,
"./frontpage/ru.yml": 24,
"./groups/ru.yml": 25,
"./models/ru.yml": 26,
"./ru.yml": 2,
"./signup/ru.yml": 27,
"./teacher/ru.yml": 28
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
}, o.resolve = i, e.exports = o, o.id = 20;
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
}, function(e, t) {
e.exports = {
loading: "Загрузка...",
profile_ok_cancel: {
save: "Сохранить",
cancel: "Отмена"
},
aboutme: {
title: "Информация о вас, которая будет видна другим посетителям.",
realName: "Имя",
placeholder: "Иван Иванович",
email: "Email",
publicEmail: "Публичный email",
country: "Страна",
town: "Город",
birthday: "Дата рождения",
interests: "Интересы",
aboutMe: "О себе",
teaches: "Ведёт курсы",
registered: "Зарегистрирован",
activity: "Активность",
text_only: "Только текст, без ссылок, не более 600 символов.",
signature: "Подпись для email",
no_info: "Пользователь решил ничего о себе не рассказывать"
},
account: {
title: "Управление аккаунтом",
email: "Email",
displayName: "Имя пользователя",
profileName: "Имя страницы профиля",
remove_account: "удалить аккаунт",
remove_provider: "Удалить привязку",
timezone: "Часовой пояс"
},
workspace: {
create: "Создать задачник",
creating: "Задачник создается",
failed: "Ошибка при создании",
update: "Обновить задачник",
goto: "Перейти к задачнику",
group_workspace: "Статистика группы"
},
course_groups: {
dateStart: "Начало",
lessons: "Занятия",
accepted: "Участие подтверждено",
accept: "Подтвердить участие",
signup: "Занятия еще не начались",
started: "Курс начался",
join_webinar: "Зайти в вебинар",
start_webinar: "Начать вебинар",
open_slack: "Открыть slack",
test_webinar: "Протестировать подключение к вебинару",
finished: "#{type} завершен",
canceled: "#{type} отменен",
give_feedback: "Оставить отзыв",
certificate: "Сертификат",
download_certificate: "Скачать сертификат",
finish_group: "Завершить группу",
cancel_group: "Отменить группу"
},
order_contact: {
title: "Контактная информация",
name_surname: "Имя и фамилия:",
name_placeholder: "Пушкин Александр Сергеевич",
phone: "Телефон:",
phone_placeholder: "+X XXX XXX-XX-XX"
},
order_participants: {
title: "Участники",
participant: "Участник",
participation_confirmed: "Участие подтверждено.",
confirmation_after_payment: "Подтверждение участия станет возможным после оплаты.",
confirmation_required: "Участнику требуется подтвердить участие.",
invalid_email: "Некорректный email.",
save: "Сохранить данные",
statistic: "Посмотреть статистику участников"
},
orders: {
enter_participants: "важно: укажите email'ы участников в деталях",
no_orders: "Нет активных заказов.",
order: "Заказ",
free: "свободно",
busy: "занято",
confirmed: "подтверждено",
all_confirmed: "все подтверждены",
order_details: "детали и управление заказом",
course_description: "Описание #{type}а",
currency: "RUB",
payment_pending: "В данный момент мы ожидаем от вас оплату. После того как мы получим подтверждение оплаты, вам и всем указанным участникам курсов придёт письмо со всей необходимой информацией. В случае возникновения ошибок при оплате или по другим причинам вы можете изменить заказ ниже.\n",
payment_success: "Укажите участников ниже. Каждому отправляется письмо-приглашение. Участника можно изменить до тех пор, пока он не принял его.\n",
payment_fail: "Оплата не удалась. Пожалуйста, выберите другой метод оплаты.\n",
payment: "Оплата",
edit_order: "редактировать заказ",
cancel_order: "отменить заказ",
vacancies: "место,места,мест"
},
invoice: {
download: "скачать инвойс на английском",
name: "Имя *",
company_name: "Название компании *",
address: "Адрес *",
submit: "Скачать"
},
auth_providers: {
connect: "Привязать:",
no_providers: "Привязок нет",
info: "Привязка аккаунта позволяет входить через соответствующий сервис."
},
profile_field: {
add: {
title: "добавить",
email: "email",
publicEmail: "email",
country: "страну",
realName: "имя",
displayName: "имя пользователя",
profileName: "имя профиля",
town: "город",
birthday: "дату рождения",
interests: "интересы",
aboutMe: "описание о себе"
},
value_must_not_be_empty: "Значение не должно быть пустым.",
value_is_too_short: "Значение слишком короткое.",
value_is_too_long: "Значение слишком длинное.",
invalid_autocomplete: "Пожалуйста, выберите значение из списка.",
invalid_email: "Некорректный email.",
invalid_value: "Некорректное значение.",
invalid_date: "Дата неверна, формат: дд.мм.гггг.",
invalid_range: "Такой даты здесь не может быть.",
save: "Сохранить",
cancel: "Отмена"
},
password: {
title: "изменить пароль",
old_password: "Старый пароль",
new_password: "Новый пароль",
specify_password: "Укажите пароль",
password_should_not_be_empty: "Пароль не должен быть пустым.",
password_is_too_short: "Пароль слишком короткий.",
save: "Сохранить",
cancel: "Отмена"
},
photo: {
upload: "Загрузить фотографию",
teacher: "Преподаватель",
created: "На сайте с"
},
quiz: {
no_quizes: "Нет пройденных тестов.",
test: "Тест",
date: "Дата",
time: "Время",
grade: "Уровень",
result: "Результат"
},
jobs: {
no_jobs: "У вас нет стажировок"
},
subscriptions: {
save: "Сохранить"
},
client: {
photo_updated: "Изображение обновлено.",
invalid_photo: "Неверный тип файла или изображение повреждено.",
password_updated: "Пароль обновлён.",
server_error: "Ошибка загрузки, статус",
displayname_updated: "Ваше имя пользователя изменено.",
confirm_email: "Требуется подтвердить смену email, проверьте почту.",
profilename_updated: "Ваш профиль доступен по новому адресу, страница будет перезагружена",
information_updated: "Информация обновлена.",
settings_updated: "Настройки обновлены.",
you_removed_participants: "Вы удалили участников, которые получили приглашения на курс: #{removedEmails}. При продолжении их приглашения станут недействительными. Продолжить?",
user_removed: "Пользователь удалён.",
remove_user: "удалить пользователя без возможности восстановления?",
remove_link: "удалить привязку",
order_will_be_canceled: "Заказ будет отменён, без возможности восстановления. Продолжать?",
order_removed: "Заказ удалён.",
notifications_updated: "Настройки обновлены.",
finish_group: "Вы уверены, что хотите завершить группу? Действие нельзя отменить.",
cancel_group: "Вы уверены, что хотите отменить группу? Это действие используется только для ошибочно созданных групп и не может быть отменено."
},
section_names: {
aboutme: "Публичный профиль",
account: "Настройки аккаунта",
quiz: "Тесты",
jobs: "Стажировки",
providers: "Привязанные внешние аккаунты",
subscriptions: "Управление подписками",
achievements: "Достижения",
orders: "Заказы",
courses: "Курсы",
teacher_about: "О преподавателе",
teacher_stats: "Статистика преподавания",
course_feedback: "Отзывы учеников"
},
achievements: {
bronze: "Бронза на курсе",
silver: "Серебро на курсе",
gold: "Золото на курсе"
},
teacher_courses: {
description: "описание #{type}а",
participants: "учеником,учениками,учениками",
lessons: "занятие,занятия,занятий",
canceled: "Курс закрыт",
feedbacks: "отзыв,отзыва,отзывов",
no_lessons: "еще не проводил занятий на этом курсе в рамках нашего проекта.",
no_lessons_new: "еще не проводил занятий на этом #{type}е в рамках нашего проекта. Поэтому для обеспечения гарантий хорошего качества на некоторых занятиях будет присутствовать более опытный преподаватель. <p>В случае, если вас что-либо не устроит, вы всегда сможете перевестись в другую группу на тот же #{type}.</p>\n",
no_lessons_new_course: "Мы только начали вести этот #{type} в рамках нашего проекта, поэтому статистики и отзывов пока нет. Но скоро обязательно будут! А пока у нас есть <a href='#{link}'>гарантированный возврат денег</a>, если не понравится, чтобы вы не переживали на этот счёт.\n",
stat_text: 'Ведет #{type} с <strong><date-local timestamp=#{firstGroupDate} format="D MMMM YYYY"/></strong>, провел <strong>#{lessons}</strong> с <strong>#{participants}</strong>. Последнее занятие провел <strong><date-local timestamp=#{lastLessonDate} format="D MMMM YYYY"/></strong>.\n',
stat_feedback: 'Получил <a href="#" class="course-stats__feedback-link">#{feedbacks}</a> от учеников:'
}
};
} ]);
//# sourceMappingURL=guestProfile.e6058f737f3830171648.js.map