import { LitElement as U, nothing as C, html as c, css as B } from "lit";
import { property as q } from "lit/decorators.js";
const y = () => window.salla ?? window.Salla, H = async () => {
  var a, t;
  try {
    await ((t = (a = y()) == null ? void 0 : a.onReady) == null ? void 0 : t.call(a));
  } catch {
  }
}, O = () => {
  var a, t, e, n, r;
  try {
    const i = ((t = (a = y()) == null ? void 0 : a.lang) == null ? void 0 : t.locale) ?? ((r = (n = (e = y()) == null ? void 0 : e.config) == null ? void 0 : n.get) == null ? void 0 : r.call(n, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, M = () => O() === "en", u = (a, t) => M() ? t : a, W = (a) => {
  var t, e, n;
  try {
    return (n = (e = (t = y()) == null ? void 0 : t.config) == null ? void 0 : e.get) == null ? void 0 : n.call(e, a);
  } catch {
    return;
  }
}, $ = (a, t = "") => {
  if (a == null) return t;
  if (typeof a == "string") {
    const e = a.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return $(JSON.parse(e), t);
      } catch {
      }
    return e || t;
  }
  if (typeof a == "number" || typeof a == "boolean") return String(a);
  if (typeof a == "object") {
    const e = a, n = e[O()] ?? e.ar ?? e.en ?? Object.values(e).find((r) => typeof r == "string" && r);
    return typeof n == "string" && n.trim() ? n : t;
  }
  return t;
}, b = (a, t = "") => {
  const e = Array.isArray(a) ? a[0] : a, n = typeof e == "object" && e ? e.value : e;
  return n == null || n === "" ? t : String(n);
}, g = (a, t = 0) => {
  const e = Number(a);
  return a === "" || a == null || !Number.isFinite(e) ? t : e;
}, h = (a, t = !1) => a == null || a === "" ? t : a === !0 || a === "true" || a === 1 || a === "1", J = (a) => Array.isArray(a) ? a : [], z = (a) => {
  var t, e;
  try {
    const n = (e = (t = y()) == null ? void 0 : t.money) == null ? void 0 : e.call(t, a);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(a * 100) / 100} ${u("ر.س", "SAR")}`;
};
async function K(a, t = 1, e) {
  var n, r, i;
  await H();
  try {
    return await ((i = (r = (n = y()) == null ? void 0 : n.cart) == null ? void 0 : r.addItem) == null ? void 0 : i.call(r, e ? { id: a, quantity: t, notes: e } : { id: a, quantity: t })), !0;
  } catch {
    return !1;
  }
}
function X(a, t = !0) {
  var e, n, r;
  try {
    (r = t ? (e = y()) == null ? void 0 : e.success : (n = y()) == null ? void 0 : n.error) == null || r(a);
  } catch {
  }
}
const Q = (a, t) => {
  var e, n, r;
  try {
    (r = (n = (e = y()) == null ? void 0 : e.event) == null ? void 0 : n.on) == null || r.call(n, a, t);
  } catch {
  }
}, Z = () => String(W("store.name") ?? ""), k = "tw_smart_mem_v1", I = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function P() {
  try {
    return { ...I(), ...JSON.parse(localStorage.getItem(k) || "{}") };
  } catch {
    return I();
  }
}
function tt(a) {
  try {
    localStorage.setItem(k, JSON.stringify(a));
  } catch {
  }
}
function S(a) {
  const t = P();
  return a(t), tt(t), t;
}
function et() {
  let a = !1;
  try {
    a = !sessionStorage.getItem(k), sessionStorage.setItem(k, "1");
  } catch {
  }
  return a ? S((t) => {
    t.visits += 1, t.last = Date.now();
  }) : P();
}
const j = (a, t = 1) => S((e) => {
  e.seen[a.id] = (e.seen[a.id] || 0) + t, e.prices = [...e.prices.slice(-29), a.price], a.category && (e.tags[a.category] = (e.tags[a.category] || 0) + t);
});
let R = !1;
function at() {
  R || (R = !0, Q("cart::item.added", (a) => {
    var e;
    const t = Number(((e = a == null ? void 0 : a.data) == null ? void 0 : e.product_id) ?? 0);
    t && S((n) => {
      n.carted.includes(t) || (n.carted = [...n.carted.slice(-40), t]);
    });
  }));
}
const rt = () => {
  const a = innerWidth, t = navigator.userAgent;
  return /iPad|Tablet/i.test(t) || a >= 700 && a < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t) || a < 700 ? "mobile" : "desktop";
}, Y = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
}, nt = () => {
  const a = new URLSearchParams(location.search).get("tw_date"), t = a ? /* @__PURE__ */ new Date(a + "T12:00:00") : null;
  return t && !isNaN(+t) ? t : /* @__PURE__ */ new Date();
};
var it = Object.defineProperty, ot = (a, t, e, n) => {
  for (var r = void 0, i = a.length - 1, l; i >= 0; i--)
    (l = a[i]) && (r = l(t, e, r) || r);
  return r && it(t, e, r), r;
};
const st = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, F = /* @__PURE__ */ new Set();
function ct(a) {
  const t = st[a];
  if (!t || F.has(t)) return t;
  F.add(t);
  const e = document.createElement("link");
  return e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e), t;
}
const dt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, lt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], E = class E extends U {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), at(), et();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((t) => {
      var e;
      t.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (e = this.io) == null || e.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.io) == null || t.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const t = this.c, e = Date.now(), n = Date.parse(String(t.s_from || "")), r = Date.parse(String(t.s_to || ""));
    if (Number.isFinite(n) && e < n || Number.isFinite(r) && e > r) return !0;
    const i = rt();
    return !!(h(t.s_hide_mobile) && i === "mobile" || h(t.s_hide_desktop) && i !== "mobile");
  }
  vars(t = "") {
    const e = this.c, n = [], r = (l, p) => {
      p !== "" && p != null && n.push(`${l}:${p}`);
    };
    r("--a", e.s_accent || ""), r("--a2", e.s_accent2 || ""), r("--bgc", e.s_bg || ""), r("--fgc", e.s_text || ""), r("--cardc", e.s_card || ""), r("--r", `${g(e.s_radius, 22)}px`), r("--gap", `${g(e.s_gap, 18)}px`), r("--ts", `${g(e.s_title_size, 38)}px`), r("--fs", `${g(e.s_text_size, 16)}px`), r("--pt", `${g(e.s_pad_top, 56)}px`), r("--pb", `${g(e.s_pad_bottom, 56)}px`), r("--maxw", dt[b(e.s_width, "normal")] ?? "1240px"), r("--sh", lt[Math.max(0, Math.min(5, g(e.s_shadow, 2)))]), r("--ms", `${g(e.s_anim_ms, 700)}ms`), r("--ov", String(g(e.s_overlay, 45) / 100)), e.s_bg_image && r("--bgimg", `url("${String(e.s_bg_image)}")`);
    const i = ct(b(e.s_font, "inherit"));
    return i && r("font-family", `'${i}', inherit`), n.join(";") + (t ? ";" + t : "");
  }
  cls() {
    const t = this.c;
    return [
      "sec",
      `th-${b(t.s_theme, "auto")}`,
      `al-${b(t.s_align, "start")}`,
      `an-${b(t.s_anim, "rise")}`,
      `pt-${b(t.s_pattern, "none")}`,
      `bs-${b(t.s_btn_style, "pill")}`,
      h(t.s_border) ? "bordered" : "",
      h(t.s_stagger, !0) ? "stagger" : "",
      t.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(t, e = {}, n = "", r = "", i = !0) {
    if (this.hiddenNow()) return C;
    const l = this.c, p = $(l.eyebrow, e.eyebrow ?? ""), o = $(l.title, e.title ?? ""), d = $(l.subtitle, e.sub ?? ""), s = i && h(l.s_show_head, !0) && (p || o || d);
    return c`<section class="${this.cls()} ${n}" style=${this.vars(r)} id=${String(l.s_anchor || "") || C}>
      <div class="wrap">${s ? c`<header class="head">${p ? c`<span class="eyebrow">${p}</span>` : ""}${o ? c`<h2 class="title">${o}</h2>` : ""}${d ? c`<p class="sub">${d}</p>` : ""}</header>` : ""}
      ${t}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(t) {
    const e = t.filter(Boolean);
    return !e.length || !Y() || !h(this.c.s_hints, !0) ? "" : c`<aside class="hints" role="note"><b>💡 ${u("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${e.map((n) => c`<li>${n}</li>`)}</ul></aside>`;
  }
  card(t, e = {}) {
    var n;
    return c`<article class="pc ${t.available ? "" : "oos"}">
      <a class="ph" href=${t.url} @click=${() => j(t)}><img src=${t.image} alt=${t.name} loading="lazy" />${(n = e.badges) != null && n.length ? c`<span class="badges">${e.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t.url} @click=${() => j(t)}>${t.name}</a>
        <div class="pr"><b>${z(t.price)}</b>${t.regular > t.price ? c`<s>${z(t.regular)}</s>` : ""}</div>
        ${e.rating !== !1 && t.rating > 0 ? c`<div class="rt">★ ${t.rating.toFixed(1)}${t.ratingCount ? c` <small>(${t.ratingCount})</small>` : ""}</div>` : ""}
        ${e.extra ?? ""}
        ${e.quick !== !1 ? c`<button class="btn sm" ?disabled=${!t.available} @click=${() => this.add(t)}>${t.available ? u("أضف للسلة", "Add to cart") : u("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(t, e = 1, n) {
    j(t, 3), await K(t.id, e, n) ? X(u("تمت الإضافة للسلة", "Added to cart")) : location.href = t.url;
  }
};
E.base = B`
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
let _ = E;
ot([
  q({ type: Object })
], _.prototype, "config");
const pt = {
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
}, G = 864e5, f = (a, t, e) => new Date(a, t - 1, e, 0, 0, 0), v = (a, t) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + t);
let L = null;
function ft(a) {
  try {
    L ?? (L = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t = Object.fromEntries(L.formatToParts(a).map((e) => [e.type, e.value]));
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
}, T = (a, t = !1) => new Intl.DateTimeFormat(t ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(a);
function ut(a, t, e, n) {
  const r = [];
  for (let i = 0; i <= n; i++) {
    const l = v(e, i), p = ft(l);
    p.m === a && p.d === t && (r.push(l), i += 300);
  }
  return r;
}
function ht(a) {
  const t = f(a, 11, 30);
  for (; t.getDay() !== 5; ) t.setDate(t.getDate() - 1);
  return t;
}
function mt(a, t, e = 27, n = "before") {
  const r = f(a, t, Math.min(e, new Date(a, t, 0).getDate()));
  if (n !== "none") for (; r.getDay() === 5 || r.getDay() === 6; ) r.setDate(r.getDate() + (n === "before" ? -1 : 1));
  return r;
}
function bt(a, t = {}) {
  const e = v(a, -40), n = 440, r = [], i = (o, d, s, m) => ut(d, s, e, n).forEach((x) => r.push({ id: o, start: x, end: v(x, m) }));
  i("ramadan", 9, 1, 29), i("eid_fitr", 10, 1, 3), i("hajj", 12, 1, 7), i("arafah", 12, 9, 0), i("eid_adha", 12, 10, 3), i("hijri_new_year", 1, 1, 0);
  for (const o of [a.getFullYear() - 1, a.getFullYear(), a.getFullYear() + 1]) {
    r.push({ id: "founding", start: f(o, 2, 22), end: f(o, 2, 22) }), r.push({ id: "national", start: f(o, 9, 23), end: f(o, 9, 23) }), r.push({ id: "mothers", start: f(o, 3, 21), end: f(o, 3, 21) });
    const d = ht(o);
    r.push({ id: "white_friday", start: v(d, -(t.whiteFridayDays ?? 7)), end: v(d, 3) }), r.push({ id: "summer", start: f(o, 6, 15), end: f(o, 8, 31) }), r.push({ id: "winter", start: f(o, 12, 1), end: f(o + 1, 2, 28) });
    for (let s = 1; s <= 12; s++) {
      const m = mt(o, s, t.payDay ?? 27, t.payShift ?? "before");
      r.push({ id: "payday", start: m, end: v(m, 3) });
      const x = f(o, s, 10);
      r.push({ id: "citizen", start: x, end: v(x, 1) });
    }
  }
  if (t.school) {
    const o = /* @__PURE__ */ new Date(t.school + "T00:00:00");
    isNaN(+o) || r.push({ id: "back_to_school", start: v(o, -14), end: o });
  }
  for (const o of r.filter((d) => d.id === "ramadan")) {
    const d = r.find((s) => s.id === "eid_fitr" && +s.start > +o.start && +s.start - +o.start < 32 * G);
    d && (o.end = v(d.start, -1));
  }
  const l = +e, p = +e + n * G;
  return r.filter((o) => +o.end >= l && +o.start <= p).sort((o, d) => +o.start - +d.start);
}
const xt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"], vt = ["citizen", "summer", "winter", "hijri_new_year"], yt = (a) => xt.filter((t) => h(a[`o_${t}`], !vt.includes(t))), wt = (a) => ({ payDay: g(a.pay_day, 27), payShift: b(a.pay_shift, "before"), school: String(a.school_date || "").slice(0, 10), whiteFridayDays: g(a.wf_days, 7) }), $t = (a) => {
  const t = String(a.preview_date || "").slice(0, 10);
  if (t && (Y() || window.__twDemo)) {
    const e = /* @__PURE__ */ new Date(t + "T12:00:00");
    if (!isNaN(+e)) return e;
  }
  return nt();
}, _t = (a, t) => {
  const e = (i) => `${i.getFullYear()}${String(i.getMonth() + 1).padStart(2, "0")}${String(i.getDate()).padStart(2, "0")}`, n = new Date(a.end.getFullYear(), a.end.getMonth(), a.end.getDate() + 1), r = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//tw-mawaqeet//AR",
    "BEGIN:VEVENT",
    `UID:${a.id}-${e(a.start)}@mawaqeet`,
    `DTSTART;VALUE=DATE:${e(a.start)}`,
    `DTEND;VALUE=DATE:${e(n)}`,
    `SUMMARY:${t}`,
    "BEGIN:VALARM",
    "TRIGGER:-P2D",
    "ACTION:DISPLAY",
    `DESCRIPTION:${t}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join(`\r
`);
  return URL.createObjectURL(new Blob([r], { type: "text/calendar" }));
}, N = class N extends _ {
  render() {
    const t = this.c, e = M(), n = $t(t), r = yt(t), i = /* @__PURE__ */ new Set(), l = g(t.months, 12), p = bt(n, wt(t)).filter((s) => r.includes(s.id) && +s.end + 864e5 >= +n && +s.start <= +n + l * 30 * 864e5).filter((s) => h(t.dedupe_monthly, !0) && (s.id === "payday" || s.id === "citizen") ? i.has(s.id) ? !1 : (i.add(s.id), !0) : !0).slice(0, g(t.limit, 10)), o = J(t.offers), d = Math.round((+n - +new Date(n.getFullYear(), 0, 1)) / (365 * 864e5) * 100);
    return this.shell(
      c`${h(t.year_bar, !0) ? c`<div class="muted" style="font-size:13px">${u(`مضى ${d}% من السنة`, `${d}% of the year has passed`)}</div><div class="bar"><i style=${`width:${d}%`}></i></div>` : ""}
      <div class="${b(t.layout, "h") === "v" ? "v" : ""}"><div class="tl">${p.map((s) => {
        const m = pt[s.id], x = +n >= +s.start && +n <= +s.end + 864e5 - 1, D = Math.ceil((+s.start - +n) / 864e5), w = o.find((V) => b(V.occasion) === s.id);
        return c`<div class="ev ${x ? "now" : ""}" style=${`--oc:${m.pal[0] === "#0d0d0f" ? "#555" : m.pal[0]}`}>
          <span class="left">${x ? u("الآن", "Now") : D <= 1 ? u("غداً", "Tomorrow") : u(`بعد ${D} يوم`, `in ${D} days`)}</span>
          <span class="em">${m.emoji}</span><b>${m[e ? "en" : "ar"]}</b>
          <div class="dt">${T(s.start, e)}${+s.end > +s.start ? ` – ${T(s.end, e)}` : ""}${h(t.show_hijri, !0) ? c`<br />${gt(s.start, e)}` : ""}</div>
          ${w && $(w.text) ? c`<div class="of">🎁 ${$(w.text)}</div>` : ""}
          <div class="acts">${w && w.link ? c`<a class="btn sm" href=${String(w.link)}>${$(w.button, u("شوف العرض", "See offer"))}</a>` : ""}
            ${h(t.reminders, !0) && !x ? c`<a class="btn sm ghost" download=${`${s.id}.ics`} href=${_t(s, `${m[e ? "en" : "ar"]} · ${Z() || ""}`)}>⏰ ${u("ذكّرني", "Remind me")}</a>` : ""}</div></div>`;
      })}</div></div>`,
      { eyebrow: u("تقويم المواسم", "Season calendar"), title: u("مواسم السنة… وعروضنا فيها", "The year’s occasions and our offers") }
    );
  }
};
N.styles = [_.base, B`
    .tl { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(210px, 1fr); gap: var(--gap); overflow-x: auto; padding: 12px 2px 18px; scroll-snap-type: x mandatory; }
    .v .tl { grid-auto-flow: row; grid-auto-columns: auto; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); overflow: visible; }
    .ev { scroll-snap-align: start; position: relative; border-radius: var(--r); padding: 18px; background: var(--CARD); box-shadow: var(--sh); display: grid; gap: 8px; align-content: start; border-top: 5px solid var(--oc); }
    .ev.now { background: linear-gradient(160deg, color-mix(in srgb, var(--oc) 22%, var(--CARD)), var(--CARD)); outline: 2px solid var(--oc); }
    .em { font-size: 30px; } .ev b { font-size: 17px; } .dt { font-size: 13px; opacity: .75; line-height: 1.6; }
    .left { position: absolute; top: 14px; inset-inline-end: 14px; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 999px; background: color-mix(in srgb, var(--oc) 18%, transparent); }
    .of { font-size: 14px; font-weight: 700; color: var(--A); } .acts { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; align-items: center; } .acts a { font-size: 13px; }
    .bar { position: relative; height: 6px; border-radius: 9px; background: var(--LINE); margin: 6px 0 4px; } .bar i { position: absolute; inset-block: 0; inset-inline-start: 0; border-radius: 9px; background: var(--A); }
  `];
let A = N;
typeof A < "u" && A.registerSallaComponent("salla-mawaqeet-calendar");
export {
  A as default
};
