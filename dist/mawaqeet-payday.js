import { LitElement as J, nothing as M, html as l, css as P } from "lit";
import { property as K, state as X } from "lit/decorators.js";
const x = () => window.salla ?? window.Salla, j = async () => {
  var t, e;
  try {
    await ((e = (t = x()) == null ? void 0 : t.onReady) == null ? void 0 : e.call(t));
  } catch {
  }
}, U = () => {
  var t, e, r, n, a;
  try {
    const i = ((e = (t = x()) == null ? void 0 : t.lang) == null ? void 0 : e.locale) ?? ((a = (n = (r = x()) == null ? void 0 : r.config) == null ? void 0 : n.get) == null ? void 0 : a.call(n, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, W = () => U() === "en", c = (t, e) => W() ? e : t, h = (t, e = "") => {
  if (t == null) return e;
  if (typeof t == "string") {
    const r = t.trim();
    if (r.startsWith("{") && r.endsWith("}"))
      try {
        return h(JSON.parse(r), e);
      } catch {
      }
    return r || e;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const r = t, n = r[U()] ?? r.ar ?? r.en ?? Object.values(r).find((a) => typeof a == "string" && a);
    return typeof n == "string" && n.trim() ? n : e;
  }
  return e;
}, y = (t, e = "") => {
  const r = Array.isArray(t) ? t[0] : t, n = typeof r == "object" && r ? r.value : r;
  return n == null || n === "" ? e : String(n);
}, g = (t, e = 0) => {
  const r = Number(t);
  return t === "" || t == null || !Number.isFinite(r) ? e : r;
}, p = (t, e = !1) => t == null || t === "" ? e : t === !0 || t === "true" || t === 1 || t === "1", w = (t) => {
  const e = typeof t == "object" && t ? t.amount : t, r = Number(e);
  return Number.isFinite(r) ? r : 0;
}, Q = (t) => {
  if (!t) return null;
  const e = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(e) && e > Date.now() ? e : null;
};
function Y(t) {
  var s, u, m, d, f, b, _, k, C;
  const e = w(t == null ? void 0 : t.sale_price), r = w((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), n = e && e < r ? e : w(t == null ? void 0 : t.price) || r, a = Math.max(w(t == null ? void 0 : t.regular_price), w(t == null ? void 0 : t.price), n), i = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((v) => String((v == null ? void 0 : v.url) ?? v ?? "")).filter(Boolean), o = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((s = t == null ? void 0 : t.image) == null ? void 0 : s.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? i[0] ?? ""),
    images: i,
    price: n,
    regular: a,
    discount: a > n ? Math.round((1 - n / a) * 100) : 0,
    rating: w(((u = t == null ? void 0 : t.rating) == null ? void 0 : u.stars) ?? ((m = t == null ? void 0 : t.rating) == null ? void 0 : m.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: w((d = t == null ? void 0 : t.rating) == null ? void 0 : d.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : w(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: o == null || o === "" || !Number.isFinite(Number(o)) ? null : Number(o),
    endsAt: Q((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((f = t == null ? void 0 : t.category) == null ? void 0 : f.name) ?? ((_ = (b = t == null ? void 0 : t.categories) == null ? void 0 : b[0]) == null ? void 0 : _.name) ?? ""),
    brand: String(((k = t == null ? void 0 : t.brand) == null ? void 0 : k.name) ?? ""),
    promo: String(((C = t == null ? void 0 : t.promotion) == null ? void 0 : C.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const V = (t) => (Array.isArray(t) ? t : []).map((e) => Number(typeof e == "object" && e ? e.value : e)).filter((e) => Number.isFinite(e) && e > 0), $ = /* @__PURE__ */ new Map();
async function Z(t) {
  var n, a, i;
  const e = (n = x()) == null ? void 0 : n.product;
  if (!e) return null;
  const r = e.getDetails ? e.getDetails.bind(e) : (i = (a = e.api) == null ? void 0 : a.getDetails) == null ? void 0 : i.bind(e.api);
  if (!r) return null;
  try {
    const o = await r(t, ["images", "sold_quantity", "category"]), s = Y((o == null ? void 0 : o.data) ?? o);
    return s.name ? s : null;
  } catch {
    return null;
  }
}
async function tt(t) {
  await j();
  const e = "ids:" + t.join(",");
  return $.has(e) || $.set(e, Promise.all(t.map(Z)).then((r) => r.filter((n) => !!n))), $.get(e);
}
async function R(t, e = [], r = 12) {
  await j();
  const n = `src:${t}:${e.join(",")}:${r}`;
  return $.has(n) || $.set(n, (async () => {
    var o, s, u, m;
    const a = (o = x()) == null ? void 0 : o.product, i = a != null && a.fetch ? a.fetch.bind(a) : (u = (s = a == null ? void 0 : a.api) == null ? void 0 : s.fetch) == null ? void 0 : u.bind(a.api);
    if (!i) return [];
    try {
      const d = { source: t, per_page: r };
      e.length && (d.source_value = e);
      const f = await i(d);
      return (Array.isArray(f == null ? void 0 : f.data) ? f.data : Array.isArray(f) ? f : ((m = f == null ? void 0 : f.data) == null ? void 0 : m.products) ?? []).map(Y).filter((_) => _.name).slice(0, r);
    } catch {
      return [];
    }
  })()), $.get(n);
}
async function et(t, e = "best_selling", r = 12) {
  const n = V(t);
  if (n.length) return { items: (await tt(n)).slice(0, r), auto: !1 };
  let a = await R(e, [], r);
  return !a.length && e !== "latest" && (a = await R("latest", [], r)), { items: a, auto: !0 };
}
const L = (t) => {
  var e, r;
  try {
    const n = (r = (e = x()) == null ? void 0 : e.money) == null ? void 0 : r.call(e, t);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${c("ر.س", "SAR")}`;
};
async function rt(t, e = 1, r) {
  var n, a, i;
  await j();
  try {
    return await ((i = (a = (n = x()) == null ? void 0 : n.cart) == null ? void 0 : a.addItem) == null ? void 0 : i.call(a, r ? { id: t, quantity: e, notes: r } : { id: t, quantity: e })), !0;
  } catch {
    return !1;
  }
}
function at(t, e = !0) {
  var r, n, a;
  try {
    (a = e ? (r = x()) == null ? void 0 : r.success : (n = x()) == null ? void 0 : n.error) == null || a(t);
  } catch {
  }
}
const nt = (t, e) => {
  var r, n, a;
  try {
    (a = (n = (r = x()) == null ? void 0 : r.event) == null ? void 0 : n.on) == null || a.call(n, t, e);
  } catch {
  }
}, z = "tw_smart_mem_v1", q = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function D() {
  try {
    return { ...q(), ...JSON.parse(localStorage.getItem(z) || "{}") };
  } catch {
    return q();
  }
}
function it(t) {
  try {
    localStorage.setItem(z, JSON.stringify(t));
  } catch {
  }
}
function E(t) {
  const e = D();
  return t(e), it(e), e;
}
function ot() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(z), sessionStorage.setItem(z, "1");
  } catch {
  }
  return t ? E((e) => {
    e.visits += 1, e.last = Date.now();
  }) : D();
}
const N = (t, e = 1) => E((r) => {
  r.seen[t.id] = (r.seen[t.id] || 0) + e, r.prices = [...r.prices.slice(-29), t.price], t.category && (r.tags[t.category] = (r.tags[t.category] || 0) + e);
});
function st() {
  const t = [...D().prices].sort((e, r) => e - r);
  return t.length >= 3 ? t[Math.floor(t.length / 2)] : 0;
}
function ct(t, e = D()) {
  let r = (e.seen[t.id] || 0) * 2 + (e.carted.includes(t.id) ? 4 : 0) + (t.category && e.tags[t.category] || 0);
  const n = st();
  return n && (r += Math.max(0, 2 - Math.abs(t.price - n) / n * 2)), r;
}
const lt = (t, e = !0) => {
  if (!e) return t;
  const r = D();
  return t.map((n, a) => ({ p: n, i: a, s: ct(n, r) })).sort((n, a) => a.s - n.s || n.i - a.i).map((n) => n.p);
};
let T = !1;
function dt() {
  T || (T = !0, nt("cart::item.added", (t) => {
    var r;
    const e = Number(((r = t == null ? void 0 : t.data) == null ? void 0 : r.product_id) ?? 0);
    e && E((n) => {
      n.carted.includes(e) || (n.carted = [...n.carted.slice(-40), e]);
    });
  }));
}
const gt = () => {
  const t = innerWidth, e = navigator.userAgent;
  return /iPad|Tablet/i.test(e) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(e) || t < 700 ? "mobile" : "desktop";
}, H = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
}, ut = () => {
  const t = new URLSearchParams(location.search).get("tw_date"), e = t ? /* @__PURE__ */ new Date(t + "T12:00:00") : null;
  return e && !isNaN(+e) ? e : /* @__PURE__ */ new Date();
};
var ft = Object.defineProperty, ht = (t, e, r, n) => {
  for (var a = void 0, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (a = o(e, r, a) || a);
  return a && ft(e, r, a), a;
};
const bt = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, O = /* @__PURE__ */ new Set();
function mt(t) {
  const e = bt[t];
  if (!e || O.has(e)) return e;
  O.add(e);
  const r = document.createElement("link");
  return r.rel = "stylesheet", r.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;500;700;800&display=swap`, document.head.appendChild(r), e;
}
const pt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, xt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], I = class I extends J {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), dt(), ot();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((e) => {
      var r;
      e.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (r = this.io) == null || r.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.io) == null || e.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const e = this.c, r = Date.now(), n = Date.parse(String(e.s_from || "")), a = Date.parse(String(e.s_to || ""));
    if (Number.isFinite(n) && r < n || Number.isFinite(a) && r > a) return !0;
    const i = gt();
    return !!(p(e.s_hide_mobile) && i === "mobile" || p(e.s_hide_desktop) && i !== "mobile");
  }
  vars(e = "") {
    const r = this.c, n = [], a = (o, s) => {
      s !== "" && s != null && n.push(`${o}:${s}`);
    };
    a("--a", r.s_accent || ""), a("--a2", r.s_accent2 || ""), a("--bgc", r.s_bg || ""), a("--fgc", r.s_text || ""), a("--cardc", r.s_card || ""), a("--r", `${g(r.s_radius, 22)}px`), a("--gap", `${g(r.s_gap, 18)}px`), a("--ts", `${g(r.s_title_size, 38)}px`), a("--fs", `${g(r.s_text_size, 16)}px`), a("--pt", `${g(r.s_pad_top, 56)}px`), a("--pb", `${g(r.s_pad_bottom, 56)}px`), a("--maxw", pt[y(r.s_width, "normal")] ?? "1240px"), a("--sh", xt[Math.max(0, Math.min(5, g(r.s_shadow, 2)))]), a("--ms", `${g(r.s_anim_ms, 700)}ms`), a("--ov", String(g(r.s_overlay, 45) / 100)), r.s_bg_image && a("--bgimg", `url("${String(r.s_bg_image)}")`);
    const i = mt(y(r.s_font, "inherit"));
    return i && a("font-family", `'${i}', inherit`), n.join(";") + (e ? ";" + e : "");
  }
  cls() {
    const e = this.c;
    return [
      "sec",
      `th-${y(e.s_theme, "auto")}`,
      `al-${y(e.s_align, "start")}`,
      `an-${y(e.s_anim, "rise")}`,
      `pt-${y(e.s_pattern, "none")}`,
      `bs-${y(e.s_btn_style, "pill")}`,
      p(e.s_border) ? "bordered" : "",
      p(e.s_stagger, !0) ? "stagger" : "",
      e.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(e, r = {}, n = "", a = "", i = !0) {
    if (this.hiddenNow()) return M;
    const o = this.c, s = h(o.eyebrow, r.eyebrow ?? ""), u = h(o.title, r.title ?? ""), m = h(o.subtitle, r.sub ?? ""), d = i && p(o.s_show_head, !0) && (s || u || m);
    return l`<section class="${this.cls()} ${n}" style=${this.vars(a)} id=${String(o.s_anchor || "") || M}>
      <div class="wrap">${d ? l`<header class="head">${s ? l`<span class="eyebrow">${s}</span>` : ""}${u ? l`<h2 class="title">${u}</h2>` : ""}${m ? l`<p class="sub">${m}</p>` : ""}</header>` : ""}
      ${e}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(e) {
    const r = e.filter(Boolean);
    return !r.length || !H() || !p(this.c.s_hints, !0) ? "" : l`<aside class="hints" role="note"><b>💡 ${c("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${r.map((n) => l`<li>${n}</li>`)}</ul></aside>`;
  }
  card(e, r = {}) {
    var n;
    return l`<article class="pc ${e.available ? "" : "oos"}">
      <a class="ph" href=${e.url} @click=${() => N(e)}><img src=${e.image} alt=${e.name} loading="lazy" />${(n = r.badges) != null && n.length ? l`<span class="badges">${r.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${e.url} @click=${() => N(e)}>${e.name}</a>
        <div class="pr"><b>${L(e.price)}</b>${e.regular > e.price ? l`<s>${L(e.regular)}</s>` : ""}</div>
        ${r.rating !== !1 && e.rating > 0 ? l`<div class="rt">★ ${e.rating.toFixed(1)}${e.ratingCount ? l` <small>(${e.ratingCount})</small>` : ""}</div>` : ""}
        ${r.extra ?? ""}
        ${r.quick !== !1 ? l`<button class="btn sm" ?disabled=${!e.available} @click=${() => this.add(e)}>${e.available ? c("أضف للسلة", "Add to cart") : c("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(e, r = 1, n) {
    N(e, 3), await rt(e.id, r, n) ? at(c("تمت الإضافة للسلة", "Added to cart")) : location.href = e.url;
  }
};
I.base = P`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
let A = I;
ht([
  K({ type: Object })
], A.prototype, "config");
const yt = (t, e, r) => new Date(t, e - 1, r, 0, 0, 0), F = (t, e = !1) => new Intl.DateTimeFormat(e ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(t);
function G(t, e, r = 27, n = "before") {
  const a = yt(t, e, Math.min(r, new Date(t, e, 0).getDate()));
  if (n !== "none") for (; a.getDay() === 5 || a.getDay() === 6; ) a.setDate(a.getDate() + (n === "before" ? -1 : 1));
  return a;
}
const vt = (t) => {
  const e = String(t.preview_date || "").slice(0, 10);
  if (e && (H() || window.__twDemo)) {
    const r = /* @__PURE__ */ new Date(e + "T12:00:00");
    if (!isNaN(+r)) return r;
  }
  return ut();
};
var wt = Object.defineProperty, _t = (t, e, r, n) => {
  for (var a = void 0, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (a = o(e, r, a) || a);
  return a && wt(e, r, a), a;
};
const B = class B extends A {
  constructor() {
    super(...arguments), this.prods = [];
  }
  willUpdate(e) {
    e.has("config") && et(this.c.products, y(this.c.auto_source, "offers"), g(this.c.limit, 3)).then((r) => this.prods = lt(r.items.filter((n) => n.available), !0));
  }
  render() {
    const e = this.c, r = W(), n = vt(e), a = n.getFullYear(), i = n.getMonth() + 1, o = g(e.pay_day, 27), s = y(e.pay_shift, "before");
    let u = G(a, i, o, s);
    +n > +u + g(e.after_days, 4) * 864e5 && (u = G(i === 12 ? a + 1 : a, i === 12 ? 1 : i + 1, o, s));
    const m = G(i === 1 ? a - 1 : a, i === 1 ? 12 : i - 1, o, s), d = Math.ceil((+u - +n) / 864e5), f = Math.floor((+n - +m) / 864e5);
    let b = d <= 0 ? "on" : d <= g(e.before_days, 5) ? "before" : "mid";
    d < 0 && -d > g(e.after_days, 4) && (b = "mid");
    const _ = p(e.citizen, !1) && n.getDate() >= 10 && n.getDate() <= 11;
    if (b === "mid" && !_ && !p(e.show_mid, !1)) return this.hints([c(`العنصر يظهر قبل الراتب بـ ${g(e.before_days, 5)} أيام وبعده بـ ${g(e.after_days, 4)} أيام. الراتب القادم: ${F(u, r)}.`, `Shows ${g(e.before_days, 5)} days before payday. Next payday: ${F(u, r)}.`)]) || M;
    const k = _ ? [h(e.citizen_title, c("نزل حساب المواطن", "Citizen Account is paid")), h(e.citizen_text, c("اختيارات ذكية تناسب ميزانيتك", "Smart picks for your budget"))] : b === "on" ? [h(e.on_title, c("نزل الراتب 🎉", "Payday 🎉")), h(e.on_text, c("وقت تدلّل نفسك، والعروض بانتظارك", "Time to treat yourself"))] : b === "before" ? [h(e.before_title, c(`باقي ${d} ${d > 2 ? "أيام" : "يوم"} على الراتب`, `${d} days to payday`)), h(e.before_text, c("عبّ سلتك من الحين، وأول ما ينزل الراتب كمّل طلبك", "Fill your cart now and check out on payday"))] : [h(e.mid_title, c("اختيارات تناسب منتصف الشهر", "Mid-month picks")), h(e.mid_text, c("أسعار تريحك لين الراتب", "Easy prices until payday"))], C = b === "on" ? 100 : Math.max(4, Math.min(100, Math.round(f / Math.max(1, f + d) * 100)));
    return this.shell(l`<div class="pd" style=${`--p1:${e.color1 || "#103b2c"};--p2:${e.color2 || "#3ddc97"};--pct:${C}`}>
      ${p(e.ring, !0) ? l`<div class="ring"><b>${b === "on" ? "💸" : d}<small>${b === "on" ? c("اليوم", "today") : c("يوم", "days")}</small></b></div>` : l`<span></span>`}
      <div><h3>${k[0]}</h3><p>${k[1]}</p>${p(e.show_date, !0) ? l`<p style="font-size:13px;margin-top:6px">${c("موعد الراتب", "Payday")}: ${F(u, r)}</p>` : ""}
        ${this.prods.length && p(e.show_products, !0) ? l`<div class="mini">${this.prods.map((v) => l`<a href=${v.url}><img src=${v.image} alt="" />${v.name}</a>`)}</div>` : ""}</div>
      <a class="btn" href=${String(e.link || "/")}>${h(e.button, b === "before" ? c("عبّ سلتك", "Fill your cart") : c("تسوّق الآن", "Shop now"))}</a></div>`, { title: "" });
  }
};
B.styles = [A.base, P`
    .pd { display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; padding: clamp(18px, 3vw, 30px); border-radius: var(--r); background: linear-gradient(120deg, var(--p1, #103b2c), color-mix(in srgb, var(--p1, #103b2c) 70%, #000)); color: #fff; box-shadow: var(--sh); }
    @media (max-width: 860px) { .pd { grid-template-columns: 1fr; text-align: center; justify-items: center; } }
    .ring { width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--p2, #3ddc97) calc(var(--pct) * 1%), #ffffff22 0); position: relative; }
    .ring::before { content: ''; position: absolute; inset: 8px; border-radius: 50%; background: var(--p1, #103b2c); } .ring b { position: relative; font-size: 24px; line-height: 1; text-align: center; } .ring small { display: block; font-size: 11px; opacity: .8; }
    h3 { margin: 0 0 6px; font-size: clamp(22px, 3vw, 34px); } p { margin: 0; opacity: .85; line-height: 1.7; }
    .btn { background: var(--p2, #3ddc97); color: #062b1f; } .mini { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; } .mini a { display: flex; align-items: center; gap: 8px; background: #ffffff1a; color: #fff; text-decoration: none; padding: 5px 10px 5px 5px; border-radius: 12px; font-size: 12px; }
    .mini img { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; }
    @media (max-width: 860px) { .mini { justify-content: center; } }
  `];
let S = B;
_t([
  X()
], S.prototype, "prods");
typeof S < "u" && S.registerSallaComponent("salla-mawaqeet-payday");
export {
  S as default
};
