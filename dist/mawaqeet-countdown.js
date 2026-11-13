import { LitElement as U, nothing as S, html as c, css as F, svg as k } from "lit";
import { property as J, state as K } from "lit/decorators.js";
const $ = () => window.salla ?? window.Salla, X = async () => {
  var a, t;
  try {
    await ((t = (a = $()) == null ? void 0 : a.onReady) == null ? void 0 : t.call(a));
  } catch {
  }
}, P = () => {
  var a, t, r, n, e;
  try {
    const o = ((t = (a = $()) == null ? void 0 : a.lang) == null ? void 0 : t.locale) ?? ((e = (n = (r = $()) == null ? void 0 : r.config) == null ? void 0 : n.get) == null ? void 0 : e.call(n, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, Y = () => P() === "en", b = (a, t) => Y() ? t : a, w = (a, t = "") => {
  if (a == null) return t;
  if (typeof a == "string") {
    const r = a.trim();
    if (r.startsWith("{") && r.endsWith("}"))
      try {
        return w(JSON.parse(r), t);
      } catch {
      }
    return r || t;
  }
  if (typeof a == "number" || typeof a == "boolean") return String(a);
  if (typeof a == "object") {
    const r = a, n = r[P()] ?? r.ar ?? r.en ?? Object.values(r).find((e) => typeof e == "string" && e);
    return typeof n == "string" && n.trim() ? n : t;
  }
  return t;
}, x = (a, t = "") => {
  const r = Array.isArray(a) ? a[0] : a, n = typeof r == "object" && r ? r.value : r;
  return n == null || n === "" ? t : String(n);
}, g = (a, t = 0) => {
  const r = Number(a);
  return a === "" || a == null || !Number.isFinite(r) ? t : r;
}, m = (a, t = !1) => a == null || a === "" ? t : a === !0 || a === "true" || a === 1 || a === "1", Q = (a) => Array.isArray(a) ? a : [], G = (a) => {
  var t, r;
  try {
    const n = (r = (t = $()) == null ? void 0 : t.money) == null ? void 0 : r.call(t, a);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(a * 100) / 100} ${b("ر.س", "SAR")}`;
};
async function V(a, t = 1, r) {
  var n, e, o;
  await X();
  try {
    return await ((o = (e = (n = $()) == null ? void 0 : n.cart) == null ? void 0 : e.addItem) == null ? void 0 : o.call(e, r ? { id: a, quantity: t, notes: r } : { id: a, quantity: t })), !0;
  } catch {
    return !1;
  }
}
function Z(a, t = !0) {
  var r, n, e;
  try {
    (e = t ? (r = $()) == null ? void 0 : r.success : (n = $()) == null ? void 0 : n.error) == null || e(a);
  } catch {
  }
}
const tt = (a, t) => {
  var r, n, e;
  try {
    (e = (n = (r = $()) == null ? void 0 : r.event) == null ? void 0 : n.on) == null || e.call(n, a, t);
  } catch {
  }
}, z = "tw_smart_mem_v1", M = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function H() {
  try {
    return { ...M(), ...JSON.parse(localStorage.getItem(z) || "{}") };
  } catch {
    return M();
  }
}
function at(a) {
  try {
    localStorage.setItem(z, JSON.stringify(a));
  } catch {
  }
}
function N(a) {
  const t = H();
  return a(t), at(t), t;
}
function rt() {
  let a = !1;
  try {
    a = !sessionStorage.getItem(z), sessionStorage.setItem(z, "1");
  } catch {
  }
  return a ? N((t) => {
    t.visits += 1, t.last = Date.now();
  }) : H();
}
const C = (a, t = 1) => N((r) => {
  r.seen[a.id] = (r.seen[a.id] || 0) + t, r.prices = [...r.prices.slice(-29), a.price], a.category && (r.tags[a.category] = (r.tags[a.category] || 0) + t);
});
let B = !1;
function et() {
  B || (B = !0, tt("cart::item.added", (a) => {
    var r;
    const t = Number(((r = a == null ? void 0 : a.data) == null ? void 0 : r.product_id) ?? 0);
    t && N((n) => {
      n.carted.includes(t) || (n.carted = [...n.carted.slice(-40), t]);
    });
  }));
}
const nt = () => {
  const a = innerWidth, t = navigator.userAgent;
  return /iPad|Tablet/i.test(t) || a >= 700 && a < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t) || a < 700 ? "mobile" : "desktop";
}, W = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
}, it = () => {
  const a = new URLSearchParams(location.search).get("tw_date"), t = a ? /* @__PURE__ */ new Date(a + "T12:00:00") : null;
  return t && !isNaN(+t) ? t : /* @__PURE__ */ new Date();
};
var ot = Object.defineProperty, st = (a, t, r, n) => {
  for (var e = void 0, o = a.length - 1, l; o >= 0; o--)
    (l = a[o]) && (e = l(t, r, e) || e);
  return e && ot(t, r, e), e;
};
const ct = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, L = /* @__PURE__ */ new Set();
function lt(a) {
  const t = ct[a];
  if (!t || L.has(t)) return t;
  L.add(t);
  const r = document.createElement("link");
  return r.rel = "stylesheet", r.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t)}:wght@400;500;700;800&display=swap`, document.head.appendChild(r), t;
}
const dt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, pt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], I = class I extends U {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), et(), rt();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((t) => {
      var r;
      t.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (r = this.io) == null || r.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.io) == null || t.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const t = this.c, r = Date.now(), n = Date.parse(String(t.s_from || "")), e = Date.parse(String(t.s_to || ""));
    if (Number.isFinite(n) && r < n || Number.isFinite(e) && r > e) return !0;
    const o = nt();
    return !!(m(t.s_hide_mobile) && o === "mobile" || m(t.s_hide_desktop) && o !== "mobile");
  }
  vars(t = "") {
    const r = this.c, n = [], e = (l, s) => {
      s !== "" && s != null && n.push(`${l}:${s}`);
    };
    e("--a", r.s_accent || ""), e("--a2", r.s_accent2 || ""), e("--bgc", r.s_bg || ""), e("--fgc", r.s_text || ""), e("--cardc", r.s_card || ""), e("--r", `${g(r.s_radius, 22)}px`), e("--gap", `${g(r.s_gap, 18)}px`), e("--ts", `${g(r.s_title_size, 38)}px`), e("--fs", `${g(r.s_text_size, 16)}px`), e("--pt", `${g(r.s_pad_top, 56)}px`), e("--pb", `${g(r.s_pad_bottom, 56)}px`), e("--maxw", dt[x(r.s_width, "normal")] ?? "1240px"), e("--sh", pt[Math.max(0, Math.min(5, g(r.s_shadow, 2)))]), e("--ms", `${g(r.s_anim_ms, 700)}ms`), e("--ov", String(g(r.s_overlay, 45) / 100)), r.s_bg_image && e("--bgimg", `url("${String(r.s_bg_image)}")`);
    const o = lt(x(r.s_font, "inherit"));
    return o && e("font-family", `'${o}', inherit`), n.join(";") + (t ? ";" + t : "");
  }
  cls() {
    const t = this.c;
    return [
      "sec",
      `th-${x(t.s_theme, "auto")}`,
      `al-${x(t.s_align, "start")}`,
      `an-${x(t.s_anim, "rise")}`,
      `pt-${x(t.s_pattern, "none")}`,
      `bs-${x(t.s_btn_style, "pill")}`,
      m(t.s_border) ? "bordered" : "",
      m(t.s_stagger, !0) ? "stagger" : "",
      t.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(t, r = {}, n = "", e = "", o = !0) {
    if (this.hiddenNow()) return S;
    const l = this.c, s = w(l.eyebrow, r.eyebrow ?? ""), i = w(l.title, r.title ?? ""), d = w(l.subtitle, r.sub ?? ""), f = o && m(l.s_show_head, !0) && (s || i || d);
    return c`<section class="${this.cls()} ${n}" style=${this.vars(e)} id=${String(l.s_anchor || "") || S}>
      <div class="wrap">${f ? c`<header class="head">${s ? c`<span class="eyebrow">${s}</span>` : ""}${i ? c`<h2 class="title">${i}</h2>` : ""}${d ? c`<p class="sub">${d}</p>` : ""}</header>` : ""}
      ${t}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(t) {
    const r = t.filter(Boolean);
    return !r.length || !W() || !m(this.c.s_hints, !0) ? "" : c`<aside class="hints" role="note"><b>💡 ${b("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${r.map((n) => c`<li>${n}</li>`)}</ul></aside>`;
  }
  card(t, r = {}) {
    var n;
    return c`<article class="pc ${t.available ? "" : "oos"}">
      <a class="ph" href=${t.url} @click=${() => C(t)}><img src=${t.image} alt=${t.name} loading="lazy" />${(n = r.badges) != null && n.length ? c`<span class="badges">${r.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t.url} @click=${() => C(t)}>${t.name}</a>
        <div class="pr"><b>${G(t.price)}</b>${t.regular > t.price ? c`<s>${G(t.regular)}</s>` : ""}</div>
        ${r.rating !== !1 && t.rating > 0 ? c`<div class="rt">★ ${t.rating.toFixed(1)}${t.ratingCount ? c` <small>(${t.ratingCount})</small>` : ""}</div>` : ""}
        ${r.extra ?? ""}
        ${r.quick !== !1 ? c`<button class="btn sm" ?disabled=${!t.available} @click=${() => this.add(t)}>${t.available ? b("أضف للسلة", "Add to cart") : b("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(t, r = 1, n) {
    C(t, 3), await V(t.id, r, n) ? Z(b("تمت الإضافة للسلة", "Added to cart")) : location.href = t.url;
  }
};
I.base = F`
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
st([
  J({ type: Object })
], A.prototype, "config");
const _ = {
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
}, j = 864e5, h = (a, t, r) => new Date(a, t - 1, r, 0, 0, 0), v = (a, t) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + t);
let R = null;
function ft(a) {
  try {
    R ?? (R = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t = Object.fromEntries(R.formatToParts(a).map((r) => [r.type, r.value]));
    return { y: parseInt(t.year), m: parseInt(t.month), d: parseInt(t.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
const gt = (a, t = !1) => {
  try {
    return new Intl.DateTimeFormat(t ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(a);
  } catch {
    return "";
  }
}, O = (a, t = !1) => new Intl.DateTimeFormat(t ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(a);
function ht(a, t, r, n) {
  const e = [];
  for (let o = 0; o <= n; o++) {
    const l = v(r, o), s = ft(l);
    s.m === a && s.d === t && (e.push(l), o += 300);
  }
  return e;
}
function ut(a) {
  const t = h(a, 11, 30);
  for (; t.getDay() !== 5; ) t.setDate(t.getDate() - 1);
  return t;
}
function mt(a, t, r = 27, n = "before") {
  const e = h(a, t, Math.min(r, new Date(a, t, 0).getDate()));
  if (n !== "none") for (; e.getDay() === 5 || e.getDay() === 6; ) e.setDate(e.getDate() + (n === "before" ? -1 : 1));
  return e;
}
function bt(a, t = {}) {
  const r = v(a, -40), n = 440, e = [], o = (i, d, f, p) => ht(d, f, r, n).forEach((y) => e.push({ id: i, start: y, end: v(y, p) }));
  o("ramadan", 9, 1, 29), o("eid_fitr", 10, 1, 3), o("hajj", 12, 1, 7), o("arafah", 12, 9, 0), o("eid_adha", 12, 10, 3), o("hijri_new_year", 1, 1, 0);
  for (const i of [a.getFullYear() - 1, a.getFullYear(), a.getFullYear() + 1]) {
    e.push({ id: "founding", start: h(i, 2, 22), end: h(i, 2, 22) }), e.push({ id: "national", start: h(i, 9, 23), end: h(i, 9, 23) }), e.push({ id: "mothers", start: h(i, 3, 21), end: h(i, 3, 21) });
    const d = ut(i);
    e.push({ id: "white_friday", start: v(d, -(t.whiteFridayDays ?? 7)), end: v(d, 3) }), e.push({ id: "summer", start: h(i, 6, 15), end: h(i, 8, 31) }), e.push({ id: "winter", start: h(i, 12, 1), end: h(i + 1, 2, 28) });
    for (let f = 1; f <= 12; f++) {
      const p = mt(i, f, t.payDay ?? 27, t.payShift ?? "before");
      e.push({ id: "payday", start: p, end: v(p, 3) });
      const y = h(i, f, 10);
      e.push({ id: "citizen", start: y, end: v(y, 1) });
    }
  }
  if (t.school) {
    const i = /* @__PURE__ */ new Date(t.school + "T00:00:00");
    isNaN(+i) || e.push({ id: "back_to_school", start: v(i, -14), end: i });
  }
  for (const i of e.filter((d) => d.id === "ramadan")) {
    const d = e.find((f) => f.id === "eid_fitr" && +f.start > +i.start && +f.start - +i.start < 32 * j);
    d && (i.end = v(d.start, -1));
  }
  const l = +r, s = +r + n * j;
  return e.filter((i) => +i.end >= l && +i.start <= s).sort((i, d) => +i.start - +d.start);
}
const T = (a) => +a + j - 1;
function xt(a, t, r = {}) {
  const n = bt(a, r).filter((s) => !t || t.includes(s.id)), e = +a, o = n.filter((s) => e >= +s.start && e <= T(s.end)).sort((s, i) => _[i.id].pri - _[s.id].pri), l = n.filter((s) => +s.start > e);
  return {
    active: o,
    next: l,
    phase: (s) => e < +s.start ? "soon" : T(s.end) - e < 2 * j && +s.end > +s.start ? "last" : "on",
    dayOf: (s) => Math.floor((e - +s.start) / j) + 1
  };
}
const yt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"], vt = ["citizen", "summer", "winter", "hijri_new_year"], wt = (a) => yt.filter((t) => m(a[`o_${t}`], !vt.includes(t))), $t = (a) => ({ payDay: g(a.pay_day, 27), payShift: x(a.pay_shift, "before"), school: String(a.school_date || "").slice(0, 10), whiteFridayDays: g(a.wf_days, 7) }), _t = (a) => {
  const t = String(a.preview_date || "").slice(0, 10);
  if (t && (W() || window.__twDemo)) {
    const r = /* @__PURE__ */ new Date(t + "T12:00:00");
    if (!isNaN(+r)) return r;
  }
  return it();
};
function kt(a, t = "deco") {
  const r = "var(--o2, #d9b25f)";
  return a === "ramadan" || a === "hajj" || a === "arafah" || a === "hijri_new_year" ? c`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n, e) => k`<g transform=${`translate(${n} 0)`} class="sw" style=${`animation-delay:${e * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + e * 18} stroke=${r} stroke-width="1.5"/><g transform=${`translate(0 ${50 + e * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${r}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${r} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${r}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${r}/><circle cx="262" cy="52" r="3" fill=${r}/><circle cx="180" cy="30" r="2" fill=${r}/></svg>` : a === "eid_fitr" || a === "eid_adha" || a === "mothers" ? c`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n, e) => k`<path class="tw" style=${`animation-delay:${e % 5 * 0.3}s`} transform=${`translate(${e * 53 % 390} ${e * 37 % 200}) scale(${0.5 + e % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${r}/>`)}
      ${[60, 330].map((n, e) => k`<g class="sw" style=${`animation-delay:${e}s`}><line x1=${n} y1="0" x2=${n} y2="70" stroke=${r}/><circle cx=${n} cy="86" r="16" fill=${e ? "#f28fad" : r}/></g>`)}</svg>` : a === "national" || a === "founding" ? c`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${a === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n, e) => k`<path class="sw" style=${`animation-delay:${e * 0.2}s`} transform=${`translate(${20 + e * 45} 14)`} d="M0 0h26l-13 22z" fill=${e % 2 ? a === "national" ? "#fff" : "#c8a165" : a === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : a === "white_friday" || a === "payday" || a === "citizen" ? c`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n, e) => k`<g class="fall" style=${`animation-delay:${e * 0.5}s;transform-origin:${30 + e * 38}px 0`}><rect x=${20 + e * 38} y=${10 + e % 4 * 30} width="26" height="16" rx="4" fill=${e % 2 ? r : "currentColor"} opacity=".7" transform=${`rotate(${e % 5 * 12 - 24} ${30 + e * 38} ${18 + e % 4 * 30})`}/></g>`)}</svg>` : c``;
}
const At = F`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
var jt = Object.defineProperty, Dt = (a, t, r, n) => {
  for (var e = void 0, o = a.length - 1, l; o >= 0; o--)
    (l = a[o]) && (e = l(t, r, e) || e);
  return e && jt(t, r, e), e;
};
const E = class E extends A {
  constructor() {
    super(...arguments), this.tick = Date.now(), this.tm = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.tm = window.setInterval(() => this.tick = Date.now(), 1e3);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this.tm);
  }
  render() {
    const t = this.c, r = Y(), n = _t(t), e = Math.abs(+n - Date.now()) < 864e5 ? new Date(this.tick) : n, o = x(t.target, "next"), l = xt(n, o === "next" ? wt(t) : [o], $t(t)), s = l.next.find((u) => _[u.id].pri >= g(t.min_priority, 3)) ?? l.next[0];
    if (!s) return S;
    const i = _[s.id], d = Math.max(0, Math.floor((+s.start - +e) / 1e3)), f = [[Math.floor(d / 86400), b("يوم", "days")], [Math.floor(d % 86400 / 3600), b("ساعة", "hrs")], [Math.floor(d % 3600 / 60), b("دقيقة", "min")], [d % 60, b("ثانية", "sec")]], p = Q(t.messages).find((u) => x(u.occasion) === s.id), y = m(t.store_colors) ? ["var(--A)", "#fff", "#fff"] : [String(t.color1 || i.pal[0]), String(t.color2 || i.pal[1]), String(t.color3 || i.pal[2])];
    return this.shell(c`<div class="box" style=${`--o1:${y[0]};--o2:${y[1]};--o3:${y[2]}`}>${m(t.decor, !0) ? kt(s.id) : ""}<div class="in">
      <span class="em">${i.emoji}</span><h3>${p && w(p.title) || b(`باقي على ${i.ar}`, `Countdown to ${i.en}`)}</h3>
      ${m(t.show_date, !0) ? c`<div class="date">${O(s.start, r)} · ${gt(s.start, r)}</div>` : ""}
      <div class="cd">${f.slice(0, m(t.show_seconds, !0) ? 4 : 3).map(([u, q]) => c`<div class="u"><b>${String(u).padStart(2, "0")}</b><small>${q}</small></div>`)}</div>
      ${p && w(p.text) ? c`<p>${w(p.text)}</p>` : ""}${p && p.link || t.link ? c`<a class="btn" href=${String(p && p.link || t.link)}>${p && w(p.button) || w(t.button, b("جهّز نفسك الآن", "Get ready now"))}</a>` : ""}
      ${m(t.show_next, !0) ? c`<div class="nx">${l.next.filter((u) => u !== s && _[u.id].pri >= g(t.min_priority, 3)).slice(0, g(t.next_count, 3)).map((u) => c`<span>${_[u.id].emoji} ${_[u.id][r ? "en" : "ar"]} · ${O(u.start, r)}</span>`)}</div>` : ""}
    </div></div>`, { title: "" });
  }
};
E.styles = [A.base, At, F`
    .box { position: relative; overflow: hidden; border-radius: var(--r); padding: clamp(24px, 4vw, 48px); background: linear-gradient(150deg, var(--o1), color-mix(in srgb, var(--o1) 65%, #000)); color: var(--o3); box-shadow: var(--sh); text-align: center; }
    .in { position: relative; z-index: 1; display: grid; gap: 12px; justify-items: center; } .em { font-size: 48px; } h3 { margin: 0; font-size: clamp(26px, 4vw, 44px); }
    .date { opacity: .85; font-size: 15px; }
    .cd { display: flex; gap: clamp(8px, 2vw, 18px); direction: ltr; margin: 10px 0; }
    .u { display: grid; gap: 6px; } .u b { display: block; min-width: clamp(62px, 9vw, 96px); padding: 14px 6px; font-size: clamp(30px, 5vw, 56px); font-weight: 900; border-radius: 16px; background: color-mix(in srgb, var(--o3) 12%, transparent); border: 1px solid color-mix(in srgb, var(--o3) 22%, transparent); font-variant-numeric: tabular-nums; position: relative; }
    .u b::after { content: ''; position: absolute; inset: 50% 0 auto; border-top: 1px solid color-mix(in srgb, var(--o1) 40%, transparent); } .u small { font-size: 12px; opacity: .8; }
    .nx { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 8px; } .nx span { font-size: 12px; padding: 6px 12px; border-radius: 999px; background: color-mix(in srgb, var(--o3) 12%, transparent); }
    .btn { background: var(--o2); color: var(--o1); }
  `];
let D = E;
Dt([
  K()
], D.prototype, "tick");
typeof D < "u" && D.registerSallaComponent("salla-mawaqeet-countdown");
export {
  D as default
};
