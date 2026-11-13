import { LitElement as nt, nothing as G, html as d, css as R, svg as S } from "lit";
import { property as it, state as Q } from "lit/decorators.js";
const v = () => window.salla ?? window.Salla, T = async () => {
  var t, a;
  try {
    await ((a = (t = v()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, V = () => {
  var t, a, e, n, r;
  try {
    const i = ((a = (t = v()) == null ? void 0 : t.lang) == null ? void 0 : a.locale) ?? ((r = (n = (e = v()) == null ? void 0 : e.config) == null ? void 0 : n.get) == null ? void 0 : r.call(n, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, Z = () => V() === "en", x = (t, a) => Z() ? a : t, w = (t, a = "") => {
  if (t == null) return a;
  if (typeof t == "string") {
    const e = t.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return w(JSON.parse(e), a);
      } catch {
      }
    return e || a;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const e = t, n = e[V()] ?? e.ar ?? e.en ?? Object.values(e).find((r) => typeof r == "string" && r);
    return typeof n == "string" && n.trim() ? n : a;
  }
  return a;
}, m = (t, a = "") => {
  const e = Array.isArray(t) ? t[0] : t, n = typeof e == "object" && e ? e.value : e;
  return n == null || n === "" ? a : String(n);
}, g = (t, a = 0) => {
  const e = Number(t);
  return t === "" || t == null || !Number.isFinite(e) ? a : e;
}, u = (t, a = !1) => t == null || t === "" ? a : t === !0 || t === "true" || t === 1 || t === "1", ot = (t) => Array.isArray(t) ? t : [], k = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, e = Number(a);
  return Number.isFinite(e) ? e : 0;
}, st = (t) => {
  if (!t) return null;
  const a = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(a) && a > Date.now() ? a : null;
};
function tt(t) {
  var s, o, l, h, f, p, A, N, F;
  const a = k(t == null ? void 0 : t.sale_price), e = k((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), n = a && a < e ? a : k(t == null ? void 0 : t.price) || e, r = Math.max(k(t == null ? void 0 : t.regular_price), k(t == null ? void 0 : t.price), n), i = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((_) => String((_ == null ? void 0 : _.url) ?? _ ?? "")).filter(Boolean), c = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((s = t == null ? void 0 : t.image) == null ? void 0 : s.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? i[0] ?? ""),
    images: i,
    price: n,
    regular: r,
    discount: r > n ? Math.round((1 - n / r) * 100) : 0,
    rating: k(((o = t == null ? void 0 : t.rating) == null ? void 0 : o.stars) ?? ((l = t == null ? void 0 : t.rating) == null ? void 0 : l.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: k((h = t == null ? void 0 : t.rating) == null ? void 0 : h.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : k(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: c == null || c === "" || !Number.isFinite(Number(c)) ? null : Number(c),
    endsAt: st((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((f = t == null ? void 0 : t.category) == null ? void 0 : f.name) ?? ((A = (p = t == null ? void 0 : t.categories) == null ? void 0 : p[0]) == null ? void 0 : A.name) ?? ""),
    brand: String(((N = t == null ? void 0 : t.brand) == null ? void 0 : N.name) ?? ""),
    promo: String(((F = t == null ? void 0 : t.promotion) == null ? void 0 : F.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const ct = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0), D = /* @__PURE__ */ new Map();
async function lt(t) {
  var n, r, i;
  const a = (n = v()) == null ? void 0 : n.product;
  if (!a) return null;
  const e = a.getDetails ? a.getDetails.bind(a) : (i = (r = a.api) == null ? void 0 : r.getDetails) == null ? void 0 : i.bind(a.api);
  if (!e) return null;
  try {
    const c = await e(t, ["images", "sold_quantity", "category"]), s = tt((c == null ? void 0 : c.data) ?? c);
    return s.name ? s : null;
  } catch {
    return null;
  }
}
async function dt(t) {
  await T();
  const a = "ids:" + t.join(",");
  return D.has(a) || D.set(a, Promise.all(t.map(lt)).then((e) => e.filter((n) => !!n))), D.get(a);
}
async function Y(t, a = [], e = 12) {
  await T();
  const n = `src:${t}:${a.join(",")}:${e}`;
  return D.has(n) || D.set(n, (async () => {
    var c, s, o, l;
    const r = (c = v()) == null ? void 0 : c.product, i = r != null && r.fetch ? r.fetch.bind(r) : (o = (s = r == null ? void 0 : r.api) == null ? void 0 : s.fetch) == null ? void 0 : o.bind(r.api);
    if (!i) return [];
    try {
      const h = { source: t, per_page: e };
      a.length && (h.source_value = a);
      const f = await i(h);
      return (Array.isArray(f == null ? void 0 : f.data) ? f.data : Array.isArray(f) ? f : ((l = f == null ? void 0 : f.data) == null ? void 0 : l.products) ?? []).map(tt).filter((A) => A.name).slice(0, e);
    } catch {
      return [];
    }
  })()), D.get(n);
}
async function ft(t, a = "best_selling", e = 12) {
  const n = ct(t);
  if (n.length) return { items: (await dt(n)).slice(0, e), auto: !1 };
  let r = await Y(a, [], e);
  return !r.length && a !== "latest" && (r = await Y("latest", [], e)), { items: r, auto: !0 };
}
const I = (t) => {
  var a, e;
  try {
    const n = (e = (a = v()) == null ? void 0 : a.money) == null ? void 0 : e.call(a, t);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${x("ر.س", "SAR")}`;
};
async function ht(t, a = 1, e) {
  var n, r, i;
  await T();
  try {
    return await ((i = (r = (n = v()) == null ? void 0 : n.cart) == null ? void 0 : r.addItem) == null ? void 0 : i.call(r, e ? { id: t, quantity: a, notes: e } : { id: t, quantity: a })), !0;
  } catch {
    return !1;
  }
}
function ut(t, a = !0) {
  var e, n, r;
  try {
    (r = a ? (e = v()) == null ? void 0 : e.success : (n = v()) == null ? void 0 : n.error) == null || r(t);
  } catch {
  }
}
const pt = (t, a) => {
  var e, n, r;
  try {
    (r = (n = (e = v()) == null ? void 0 : e.event) == null ? void 0 : n.on) == null || r.call(n, t, a);
  } catch {
  }
}, E = "tw_smart_mem_v1", W = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function at() {
  try {
    return { ...W(), ...JSON.parse(localStorage.getItem(E) || "{}") };
  } catch {
    return W();
  }
}
function gt(t) {
  try {
    localStorage.setItem(E, JSON.stringify(t));
  } catch {
  }
}
function L(t) {
  const a = at();
  return t(a), gt(a), a;
}
function mt() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(E), sessionStorage.setItem(E, "1");
  } catch {
  }
  return t ? L((a) => {
    a.visits += 1, a.last = Date.now();
  }) : at();
}
const B = (t, a = 1) => L((e) => {
  e.seen[t.id] = (e.seen[t.id] || 0) + a, e.prices = [...e.prices.slice(-29), t.price], t.category && (e.tags[t.category] = (e.tags[t.category] || 0) + a);
});
let H = !1;
function bt() {
  H || (H = !0, pt("cart::item.added", (t) => {
    var e;
    const a = Number(((e = t == null ? void 0 : t.data) == null ? void 0 : e.product_id) ?? 0);
    a && L((n) => {
      n.carted.includes(a) || (n.carted = [...n.carted.slice(-40), a]);
    });
  }));
}
const yt = () => {
  const t = innerWidth, a = navigator.userAgent;
  return /iPad|Tablet/i.test(a) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(a) || t < 700 ? "mobile" : "desktop";
}, et = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
}, xt = () => {
  const t = new URLSearchParams(location.search).get("tw_date"), a = t ? /* @__PURE__ */ new Date(t + "T12:00:00") : null;
  return a && !isNaN(+a) ? a : /* @__PURE__ */ new Date();
};
var wt = Object.defineProperty, vt = (t, a, e, n) => {
  for (var r = void 0, i = t.length - 1, c; i >= 0; i--)
    (c = t[i]) && (r = c(a, e, r) || r);
  return r && wt(a, e, r), r;
};
const $t = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, U = /* @__PURE__ */ new Set();
function _t(t) {
  const a = $t[t];
  if (!a || U.has(a)) return a;
  U.add(a);
  const e = document.createElement("link");
  return e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(a)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e), a;
}
const kt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, At = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], O = class O extends nt {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), bt(), mt();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((a) => {
      var e;
      a.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (e = this.io) == null || e.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var a;
    super.disconnectedCallback(), (a = this.io) == null || a.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const a = this.c, e = Date.now(), n = Date.parse(String(a.s_from || "")), r = Date.parse(String(a.s_to || ""));
    if (Number.isFinite(n) && e < n || Number.isFinite(r) && e > r) return !0;
    const i = yt();
    return !!(u(a.s_hide_mobile) && i === "mobile" || u(a.s_hide_desktop) && i !== "mobile");
  }
  vars(a = "") {
    const e = this.c, n = [], r = (c, s) => {
      s !== "" && s != null && n.push(`${c}:${s}`);
    };
    r("--a", e.s_accent || ""), r("--a2", e.s_accent2 || ""), r("--bgc", e.s_bg || ""), r("--fgc", e.s_text || ""), r("--cardc", e.s_card || ""), r("--r", `${g(e.s_radius, 22)}px`), r("--gap", `${g(e.s_gap, 18)}px`), r("--ts", `${g(e.s_title_size, 38)}px`), r("--fs", `${g(e.s_text_size, 16)}px`), r("--pt", `${g(e.s_pad_top, 56)}px`), r("--pb", `${g(e.s_pad_bottom, 56)}px`), r("--maxw", kt[m(e.s_width, "normal")] ?? "1240px"), r("--sh", At[Math.max(0, Math.min(5, g(e.s_shadow, 2)))]), r("--ms", `${g(e.s_anim_ms, 700)}ms`), r("--ov", String(g(e.s_overlay, 45) / 100)), e.s_bg_image && r("--bgimg", `url("${String(e.s_bg_image)}")`);
    const i = _t(m(e.s_font, "inherit"));
    return i && r("font-family", `'${i}', inherit`), n.join(";") + (a ? ";" + a : "");
  }
  cls() {
    const a = this.c;
    return [
      "sec",
      `th-${m(a.s_theme, "auto")}`,
      `al-${m(a.s_align, "start")}`,
      `an-${m(a.s_anim, "rise")}`,
      `pt-${m(a.s_pattern, "none")}`,
      `bs-${m(a.s_btn_style, "pill")}`,
      u(a.s_border) ? "bordered" : "",
      u(a.s_stagger, !0) ? "stagger" : "",
      a.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(a, e = {}, n = "", r = "", i = !0) {
    if (this.hiddenNow()) return G;
    const c = this.c, s = w(c.eyebrow, e.eyebrow ?? ""), o = w(c.title, e.title ?? ""), l = w(c.subtitle, e.sub ?? ""), h = i && u(c.s_show_head, !0) && (s || o || l);
    return d`<section class="${this.cls()} ${n}" style=${this.vars(r)} id=${String(c.s_anchor || "") || G}>
      <div class="wrap">${h ? d`<header class="head">${s ? d`<span class="eyebrow">${s}</span>` : ""}${o ? d`<h2 class="title">${o}</h2>` : ""}${l ? d`<p class="sub">${l}</p>` : ""}</header>` : ""}
      ${a}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(a) {
    const e = a.filter(Boolean);
    return !e.length || !et() || !u(this.c.s_hints, !0) ? "" : d`<aside class="hints" role="note"><b>💡 ${x("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${e.map((n) => d`<li>${n}</li>`)}</ul></aside>`;
  }
  card(a, e = {}) {
    var n;
    return d`<article class="pc ${a.available ? "" : "oos"}">
      <a class="ph" href=${a.url} @click=${() => B(a)}><img src=${a.image} alt=${a.name} loading="lazy" />${(n = e.badges) != null && n.length ? d`<span class="badges">${e.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${a.url} @click=${() => B(a)}>${a.name}</a>
        <div class="pr"><b>${I(a.price)}</b>${a.regular > a.price ? d`<s>${I(a.regular)}</s>` : ""}</div>
        ${e.rating !== !1 && a.rating > 0 ? d`<div class="rt">★ ${a.rating.toFixed(1)}${a.ratingCount ? d` <small>(${a.ratingCount})</small>` : ""}</div>` : ""}
        ${e.extra ?? ""}
        ${e.quick !== !1 ? d`<button class="btn sm" ?disabled=${!a.available} @click=${() => this.add(a)}>${a.available ? x("أضف للسلة", "Add to cart") : x("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(a, e = 1, n) {
    B(a, 3), await ht(a.id, e, n) ? ut(x("تمت الإضافة للسلة", "Added to cart")) : location.href = a.url;
  }
};
O.base = R`
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
let z = O;
vt([
  it({ type: Object })
], z.prototype, "config");
const M = {
  ramadan: { ar: "رمضان", en: "Ramadan", emoji: "🌙", pal: ["#0f2a3f", "#d9b25f", "#f7efd9"], pri: 9 },
  eid_fitr: { ar: "عيد الفطر", en: "Eid al-Fitr", emoji: "🎉", pal: ["#3b1f5e", "#f2c14e", "#fff6e0"], pri: 10 },
  hajj: { ar: "عشر ذي الحجة", en: "First ten of Dhul-Hijjah", emoji: "🕋", pal: ["#1d2b24", "#c9a45c", "#f4efe2"], pri: 6 },
  arafah: { ar: "يوم عرفة", en: "Day of Arafah", emoji: "🤲", pal: ["#1d2b24", "#e7c873", "#f6f1e2"], pri: 8 },
  eid_adha: { ar: "عيد الأضحى", en: "Eid al-Adha", emoji: "🐑", pal: ["#14361f", "#e2b857", "#fbf5e4"], pri: 10 },
  hijri_new_year: { ar: "رأس السنة الهجرية", en: "Hijri New Year", emoji: "✨", pal: ["#1c1c2e", "#b9a26a", "#f3eee0"], pri: 4 },
  founding: { ar: "يوم التأسيس", en: "Founding Day", emoji: "🏰", pal: ["#4a2c17", "#c8a165", "#f7ecd9"], pri: 8 },
  national: { ar: "اليوم الوطني", en: "Saudi National Day", emoji: "🇸🇦", pal: ["#0b5d3b", "#ffffff", "#e8f5ee"], pri: 9 },
  white_friday: { ar: "الجمعة البيضاء", en: "White Friday", emoji: "🏷️", pal: ["#0d0d0f", "#ffffff", "#f2f2f2"], pri: 9 },
  payday: { ar: "موسم الرواتب", en: "Payday", emoji: "💸", pal: ["#103b2c", "#3ddc97", "#ecfff6"], pri: 5 },
  citizen: { ar: "حساب المواطن", en: "Citizen Account day", emoji: "🏦", pal: ["#0e3a4a", "#58c4dd", "#eaf8fc"], pri: 3 },
  mothers: { ar: "يوم الأم", en: "Mother's Day", emoji: "💐", pal: ["#5a1f3a", "#f2a7c3", "#fff0f6"], pri: 6 },
  back_to_school: { ar: "العودة للمدارس", en: "Back to school", emoji: "🎒", pal: ["#1e2f6b", "#ffcc33", "#eef2ff"], pri: 6 },
  summer: { ar: "الصيف", en: "Summer", emoji: "☀️", pal: ["#0f4c5c", "#ffb703", "#fff8e6"], pri: 1 },
  winter: { ar: "الشتاء", en: "Winter", emoji: "❄️", pal: ["#1b263b", "#9ad1ff", "#eef6ff"], pri: 1 }
}, C = 864e5, y = (t, a, e) => new Date(t, a - 1, e, 0, 0, 0), $ = (t, a) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + a);
let J = null;
function Dt(t) {
  try {
    J ?? (J = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const a = Object.fromEntries(J.formatToParts(t).map((e) => [e.type, e.value]));
    return { y: parseInt(a.year), m: parseInt(a.month), d: parseInt(a.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
const jt = (t, a = !1) => {
  try {
    return new Intl.DateTimeFormat(a ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(t);
  } catch {
    return "";
  }
}, St = (t, a = !1) => new Intl.DateTimeFormat(a ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(t);
function zt(t, a, e, n) {
  const r = [];
  for (let i = 0; i <= n; i++) {
    const c = $(e, i), s = Dt(c);
    s.m === t && s.d === a && (r.push(c), i += 300);
  }
  return r;
}
function Ct(t) {
  const a = y(t, 11, 30);
  for (; a.getDay() !== 5; ) a.setDate(a.getDate() - 1);
  return a;
}
function Nt(t, a, e = 27, n = "before") {
  const r = y(t, a, Math.min(e, new Date(t, a, 0).getDate()));
  if (n !== "none") for (; r.getDay() === 5 || r.getDay() === 6; ) r.setDate(r.getDate() + (n === "before" ? -1 : 1));
  return r;
}
function Ft(t, a = {}) {
  const e = $(t, -40), n = 440, r = [], i = (o, l, h, f) => zt(l, h, e, n).forEach((p) => r.push({ id: o, start: p, end: $(p, f) }));
  i("ramadan", 9, 1, 29), i("eid_fitr", 10, 1, 3), i("hajj", 12, 1, 7), i("arafah", 12, 9, 0), i("eid_adha", 12, 10, 3), i("hijri_new_year", 1, 1, 0);
  for (const o of [t.getFullYear() - 1, t.getFullYear(), t.getFullYear() + 1]) {
    r.push({ id: "founding", start: y(o, 2, 22), end: y(o, 2, 22) }), r.push({ id: "national", start: y(o, 9, 23), end: y(o, 9, 23) }), r.push({ id: "mothers", start: y(o, 3, 21), end: y(o, 3, 21) });
    const l = Ct(o);
    r.push({ id: "white_friday", start: $(l, -(a.whiteFridayDays ?? 7)), end: $(l, 3) }), r.push({ id: "summer", start: y(o, 6, 15), end: y(o, 8, 31) }), r.push({ id: "winter", start: y(o, 12, 1), end: y(o + 1, 2, 28) });
    for (let h = 1; h <= 12; h++) {
      const f = Nt(o, h, a.payDay ?? 27, a.payShift ?? "before");
      r.push({ id: "payday", start: f, end: $(f, 3) });
      const p = y(o, h, 10);
      r.push({ id: "citizen", start: p, end: $(p, 1) });
    }
  }
  if (a.school) {
    const o = /* @__PURE__ */ new Date(a.school + "T00:00:00");
    isNaN(+o) || r.push({ id: "back_to_school", start: $(o, -14), end: o });
  }
  for (const o of r.filter((l) => l.id === "ramadan")) {
    const l = r.find((h) => h.id === "eid_fitr" && +h.start > +o.start && +h.start - +o.start < 32 * C);
    l && (o.end = $(l.start, -1));
  }
  const c = +e, s = +e + n * C;
  return r.filter((o) => +o.end >= c && +o.start <= s).sort((o, l) => +o.start - +l.start);
}
const K = (t) => +t + C - 1;
function X(t, a, e = {}) {
  const n = Ft(t, e).filter((s) => !a || a.includes(s.id)), r = +t, i = n.filter((s) => r >= +s.start && r <= K(s.end)).sort((s, o) => M[o.id].pri - M[s.id].pri), c = n.filter((s) => +s.start > r);
  return {
    active: i,
    next: c,
    phase: (s) => r < +s.start ? "soon" : K(s.end) - r < 2 * C && +s.end > +s.start ? "last" : "on",
    dayOf: (s) => Math.floor((r - +s.start) / C) + 1
  };
}
const Et = {
  ramadan: { soon: ["رمضان على الأبواب", "جهّز سفرتك وهداياك قبل الزحمة", "Ramadan is near", "Get ready before the rush"], on: ["رمضان كريم", "كل احتياجات الشهر الفضيل في مكان واحد", "Ramadan Kareem", "Everything for the holy month"], cta: ["تسوّق رمضان", "Shop Ramadan"] },
  eid_fitr: { soon: ["العيد قرّب", "كمّل تجهيزات العيد قبل لا يخلص الوقت", "Eid is coming", "Finish your Eid shopping in time"], on: ["عيدكم مبارك", "كل عام وأنتم بخير، فرحة العيد تكمل معنا", "Eid Mubarak", "Celebrate with us"], cta: ["هدايا العيد", "Eid gifts"] },
  hajj: { soon: ["عشر ذي الحجة", "أيام مباركة قادمة", "Dhul-Hijjah", "Blessed days ahead"], on: ["أيام عشر ذي الحجة", "خير الأيام، وأجمل الهدايا", "The best ten days", "The best days, the finest gifts"], cta: ["تسوّق الآن", "Shop now"] },
  arafah: { soon: ["يوم عرفة", "يوم الدعاء قريب", "Day of Arafah", "The day of prayer is near"], on: ["يوم عرفة", "تقبّل الله منا ومنكم", "Day of Arafah", "May Allah accept from us and you"], cta: ["تجهيزات العيد", "Eid essentials"] },
  eid_adha: { soon: ["عيد الأضحى قرّب", "جهّز إطلالة العيد وهداياه", "Eid al-Adha is near", "Prepare your Eid look and gifts"], on: ["عيد أضحى مبارك", "أيام فرح وعطاء، معكم بكل جديد", "Eid al-Adha Mubarak", "Days of joy and giving"], cta: ["تسوّق العيد", "Shop Eid"] },
  hijri_new_year: { soon: ["عام هجري جديد", "بداية جديدة قريبة", "New Hijri year", "A new beginning"], on: ["كل عام وأنتم بخير", "عام هجري سعيد", "Happy Hijri New Year", "Wishing you a blessed year"], cta: ["اكتشف الجديد", "Discover"] },
  founding: { soon: ["يوم التأسيس", "من 1727… والحكاية مستمرة", "Founding Day", "Since 1727, the story continues"], on: ["يوم بدينا", "نحتفي بإرثنا بتشكيلة تليق", "The day we began", "Celebrating our heritage"], cta: ["تشكيلة التأسيس", "Founding collection"] },
  national: { soon: ["اليوم الوطني قرّب 🇸🇦", "جهّز أخضرك", "National Day is near 🇸🇦", "Get your green ready"], on: ["همة حتى القمة 🇸🇦", "نحتفل باليوم الوطني بعروض تليق", "Saudi National Day 🇸🇦", "Celebrating with offers worthy of the day"], cta: ["عروض اليوم الوطني", "National Day offers"] },
  white_friday: { soon: ["الجمعة البيضاء قرّبت", "جهّز قائمتك من الحين", "White Friday is coming", "Prepare your list now"], on: ["الجمعة البيضاء", "أقوى عروض السنة بدأت", "White Friday", "The biggest deals of the year are on"], cta: ["تسوّق العروض", "Shop deals"] },
  payday: { soon: ["الراتب قرّب", "جهّز سلتك من الحين", "Payday is near", "Fill your cart now"], on: ["نزل الراتب 🎉", "وقت تدلّل نفسك", "Payday 🎉", "Time to treat yourself"], cta: ["دلّل نفسك", "Treat yourself"] },
  citizen: { soon: ["حساب المواطن قريب", "خطط لمشترياتك", "Citizen Account soon", "Plan your shopping"], on: ["نزل حساب المواطن", "اختيارات ذكية بأسعار تناسبك", "Citizen Account paid", "Smart picks at good prices"], cta: ["تسوّق الآن", "Shop now"] },
  mothers: { soon: ["يوم الأم قريب", "هدية تليق بأغلى الناس", "Mother's Day is near", "A gift worthy of her"], on: ["كل عام وأمهاتنا بخير", "لأنها تستاهل الأجمل", "Happy Mother's Day", "Because she deserves the best"], cta: ["هدايا الأم", "Gifts for mom"] },
  back_to_school: { soon: ["العودة للمدارس", "جهّز كل شي قبل أول يوم", "Back to school", "Ready before day one"], on: ["العودة للمدارس", "بداية سنة بكل ما يحتاجونه", "Back to school", "Everything they need"], cta: ["تجهيزات المدارس", "School essentials"] },
  summer: { soon: ["الصيف جاي", "جهّز نفسك للإجازة", "Summer is coming", "Get vacation-ready"], on: ["صيفكم أحلى", "اختيارات الصيف والسفر", "Summer vibes", "Summer and travel picks"], cta: ["تسوّق الصيف", "Shop summer"] },
  winter: { soon: ["الشتاء قرّب", "دفّ نفسك بأجمل الاختيارات", "Winter is near", "Stay warm in style"], on: ["أجواء الشتاء", "دفء وأناقة", "Winter mood", "Warm and elegant"], cta: ["تسوّق الشتاء", "Shop winter"] }
}, Mt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"], Bt = ["citizen", "summer", "winter", "hijri_new_year"], Gt = (t) => Mt.filter((a) => u(t[`o_${a}`], !Bt.includes(a))), It = (t) => ({ payDay: g(t.pay_day, 27), payShift: m(t.pay_shift, "before"), school: String(t.school_date || "").slice(0, 10), whiteFridayDays: g(t.wf_days, 7) }), Rt = (t) => {
  const a = String(t.preview_date || "").slice(0, 10);
  if (a && (et() || window.__twDemo)) {
    const e = /* @__PURE__ */ new Date(a + "T12:00:00");
    if (!isNaN(+e)) return e;
  }
  return xt();
};
function Tt(t) {
  const a = Rt(t), e = Gt(t), n = It(t), r = X(a, e, n), i = m(t.override, "auto");
  if (i === "none") return { w: null, phase: "on", day: 0, left: 0, at: a };
  if (i !== "auto") {
    const o = X(a, [i], n), l = o.active[0] ?? o.next[0] ?? null;
    return { w: l, phase: l ? o.phase(l) : "on", day: l ? o.dayOf(l) : 0, left: l ? Math.ceil((+l.start - +a) / 864e5) : 0, at: a };
  }
  if (r.active[0]) return { w: r.active[0], phase: r.phase(r.active[0]), day: r.dayOf(r.active[0]), left: 0, at: a };
  const c = g(t.lead_days, 14), s = r.next.find((o) => (+o.start - +a) / 864e5 <= (M[o.id].pri >= 8 ? c : Math.min(c, 5)));
  return s ? { w: s, phase: "soon", day: 0, left: Math.ceil((+s.start - +a) / 864e5), at: a } : { w: null, phase: "on", day: 0, left: 0, at: a };
}
function Lt(t, a = "deco") {
  const e = "var(--o2, #d9b25f)";
  return t === "ramadan" || t === "hajj" || t === "arafah" || t === "hijri_new_year" ? d`<svg class=${a} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n, r) => S`<g transform=${`translate(${n} 0)`} class="sw" style=${`animation-delay:${r * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + r * 18} stroke=${e} stroke-width="1.5"/><g transform=${`translate(0 ${50 + r * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${e}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${e} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${e}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${e}/><circle cx="262" cy="52" r="3" fill=${e}/><circle cx="180" cy="30" r="2" fill=${e}/></svg>` : t === "eid_fitr" || t === "eid_adha" || t === "mothers" ? d`<svg class=${a} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n, r) => S`<path class="tw" style=${`animation-delay:${r % 5 * 0.3}s`} transform=${`translate(${r * 53 % 390} ${r * 37 % 200}) scale(${0.5 + r % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${e}/>`)}
      ${[60, 330].map((n, r) => S`<g class="sw" style=${`animation-delay:${r}s`}><line x1=${n} y1="0" x2=${n} y2="70" stroke=${e}/><circle cx=${n} cy="86" r="16" fill=${r ? "#f28fad" : e}/></g>`)}</svg>` : t === "national" || t === "founding" ? d`<svg class=${a} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${t === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n, r) => S`<path class="sw" style=${`animation-delay:${r * 0.2}s`} transform=${`translate(${20 + r * 45} 14)`} d="M0 0h26l-13 22z" fill=${r % 2 ? t === "national" ? "#fff" : "#c8a165" : t === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : t === "white_friday" || t === "payday" || t === "citizen" ? d`<svg class=${a} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n, r) => S`<g class="fall" style=${`animation-delay:${r * 0.5}s;transform-origin:${30 + r * 38}px 0`}><rect x=${20 + r * 38} y=${10 + r % 4 * 30} width="26" height="16" rx="4" fill=${r % 2 ? e : "currentColor"} opacity=".7" transform=${`rotate(${r % 5 * 12 - 24} ${30 + r * 38} ${18 + r % 4 * 30})`}/></g>`)}</svg>` : d``;
}
const Ot = R`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
var Pt = Object.defineProperty, rt = (t, a, e, n) => {
  for (var r = void 0, i = t.length - 1, c; i >= 0; i--)
    (c = t[i]) && (r = c(a, e, r) || r);
  return r && Pt(a, e, r), r;
};
const P = class P extends z {
  constructor() {
    super(...arguments), this.prods = [], this.copied = !1;
  }
  willUpdate(a) {
    a.has("config") && u(this.c.show_products, !0) && ft(this.c.products, m(this.c.auto_source, "offers"), 2).then((e) => this.prods = e.items);
  }
  render() {
    var q;
    const a = this.c, e = Z(), n = Tt(a);
    if (!n.w && (!u(a.fallback_show, !0) || !w(a.fallback_title)))
      return this.hints([x("لا يوجد موسم نشط أو قريب الآن؛ العنصر مخفي حتى يقترب الموسم القادم (أو اكتب عنواناً احتياطياً).", "No season now: hidden until the next one (or set a fallback title).")]) || G;
    const r = (q = n.w) == null ? void 0 : q.id, i = r ? M[r] : null, c = r ? Et[r] : null, s = n.phase === "soon" ? "soon" : "on", o = ot(a.overrides).find((b) => m(b.occasion) === r && (m(b.phase, "any") === "any" || m(b.phase) === s));
    let l = o && w(o.title) || (c ? c[s][e ? 2 : 0] : w(a.fallback_title));
    const h = o && w(o.subtitle) || (c ? c[s][e ? 3 : 1] : w(a.fallback_text));
    n.phase === "last" && u(a.last_days, !0) && !o && (l = x(`آخر أيام ${i.ar}`, `Last days of ${i.en}`));
    const f = u(a.store_colors) || !i ? ["var(--A)", "#fff", "#fff"] : [String(a.color1 || i.pal[0]), String(a.color2 || i.pal[1]), String(a.color3 || i.pal[2])], p = [];
    i && u(a.chip_occ, !0) && p.push(`${i.emoji} ${i[e ? "en" : "ar"]}`), n.phase === "soon" && u(a.chip_left, !0) && p.push(x(`باقي ${n.left} ${n.left > 10 ? "يوم" : "أيام"}`, `${n.left} days to go`)), r === "ramadan" && n.phase !== "soon" && u(a.chip_day, !0) && p.push(x(`اليوم ${n.day} رمضان`, `Day ${n.day} of Ramadan`)), u(a.chip_date, !0) && p.push(`${jt(n.at, e)} · ${St(n.at, e)}`);
    const A = String(o && o.image || a[`img_${r}`] || a.image || ""), N = o && w(o.button) || w(a.button) || (c ? c.cta[e ? 1 : 0] : x("تسوّق الآن", "Shop now")), F = String(o && o.link || a.link || "/"), _ = String(o && o.coupon || "");
    return this.shell(d`${this.hints([x("جرّب أي موسم: اختر «تحكم يدوي» أو «جرّب تاريخاً» أو أضف ?tw_date=2027-02-15 للرابط.", "Preview any season with the manual override or ?tw_date=2027-02-15.")])}
      <div class="hero" style=${`--o1:${f[0]};--o2:${f[1]};--o3:${f[2]};--h:${g(a.height, 460)}px;--hs:${g(a.headline_size, 64)}px`}>
        ${u(a.decor, !0) && !u(a.store_colors) ? Lt(r) : ""}
        <div class="txt">${p.length ? d`<div class="chips">${p.map((b) => d`<span>${b}</span>`)}</div>` : ""}<h1>${l}</h1><p class="lead">${h}</p>
          <div class="cta"><a class="btn" href=${F}>${N}</a>${_ ? d`<button class="cp" @click=${() => {
      var b;
      (b = navigator.clipboard) == null || b.writeText(_), this.copied = !0;
    }}>${x("الكود", "Code")} <b>${_}</b> ${this.copied ? "✓" : ""}</button>` : ""}</div></div>
        <div class="art">${A ? d`<img class="main" src=${A} alt="" />` : d`<span class="big">${(i == null ? void 0 : i.emoji) ?? "✨"}</span>`}
          ${this.prods.map((b) => d`<a class="pp" href=${b.url}><img src=${b.image} alt="" /><span>${b.name}<b>${I(b.price)}</b></span></a>`)}</div>
      </div>`, { title: "" }, m(a.s_width, "normal") === "full" ? "full" : "", "", !1);
  }
};
P.styles = [z.base, Ot, R`
    .hero { position: relative; overflow: hidden; border-radius: var(--r); min-height: var(--h, 460px); display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: 24px;
      background: radial-gradient(800px 400px at 80% 0%, color-mix(in srgb, var(--o2) 30%, transparent), transparent 60%), linear-gradient(160deg, var(--o1), color-mix(in srgb, var(--o1) 70%, #000)); color: var(--o3); box-shadow: var(--sh); }
    .full .hero { border-radius: 0; } @media (max-width: 860px) { .hero { grid-template-columns: 1fr; } }
    .txt { position: relative; z-index: 1; padding: clamp(28px, 5vw, 64px); display: grid; gap: 14px; }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; } .chips span { font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: color-mix(in srgb, var(--o3) 14%, transparent); border: 1px solid color-mix(in srgb, var(--o3) 25%, transparent); }
    h1 { margin: 0; font-size: clamp(32px, 5.4vw, var(--hs, 64px)); line-height: 1.1; font-weight: 900; } h1 em { font-style: normal; color: var(--o2); }
    .lead { margin: 0; font-size: clamp(15px, 1.8vw, 20px); opacity: .9; line-height: 1.8; }
    .btn { background: var(--o2); color: var(--o1); } .btn.ghost { color: var(--o3); background: transparent; border-color: var(--o3); }
    .cta { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; } .cp { border: 1.5px dashed var(--o2); padding: 10px 14px; border-radius: 12px; background: transparent; color: inherit; font: inherit; cursor: pointer; } .cp b { letter-spacing: .12em; }
    .art { position: relative; z-index: 1; height: 100%; min-height: 300px; display: grid; place-items: center; padding: 24px; }
    .art img.main { width: min(100%, 440px); aspect-ratio: 1; object-fit: cover; border-radius: 50% 50% var(--r) var(--r); border: 6px solid color-mix(in srgb, var(--o2) 60%, transparent); box-shadow: 0 40px 80px -30px #000a; }
    .pp { position: absolute; display: flex; gap: 8px; align-items: center; padding: 6px 12px 6px 6px; background: #fff; color: #111; border-radius: 14px; text-decoration: none; font-size: 12px; box-shadow: 0 16px 30px -14px #000a; max-width: 220px; animation: fl2 5s ease-in-out infinite alternate; }
    .pp img { width: 42px; height: 42px; border-radius: 10px; object-fit: cover; } .pp b { display: block; color: var(--o1); } @keyframes fl2 { to { transform: translateY(-10px); } }
    .pp:nth-of-type(1) { top: 12%; inset-inline-start: 4%; } .pp:nth-of-type(2) { bottom: 10%; inset-inline-end: 4%; animation-delay: 1s; }
    .big { font-size: clamp(90px, 14vw, 180px); line-height: 1; filter: drop-shadow(0 20px 40px #0006); }
  `];
let j = P;
rt([
  Q()
], j.prototype, "prods");
rt([
  Q()
], j.prototype, "copied");
typeof j < "u" && j.registerSallaComponent("salla-mawaqeet-hero");
export {
  j as default
};
