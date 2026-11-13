import { LitElement as q, nothing as _, html as d, css as N, svg as $ } from "lit";
import { property as J, state as K } from "lit/decorators.js";
const y = () => window.salla ?? window.Salla, X = async () => {
  var e, t;
  try {
    await ((t = (e = y()) == null ? void 0 : e.onReady) == null ? void 0 : t.call(e));
  } catch {
  }
}, W = () => {
  var e, t, a, n, r;
  try {
    const i = ((t = (e = y()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((r = (n = (a = y()) == null ? void 0 : a.config) == null ? void 0 : n.get) == null ? void 0 : r.call(n, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, H = () => W() === "en", x = (e, t) => H() ? t : e, v = (e, t = "") => {
  if (e == null) return t;
  if (typeof e == "string") {
    const a = e.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return v(JSON.parse(a), t);
      } catch {
      }
    return a || t;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const a = e, n = a[W()] ?? a.ar ?? a.en ?? Object.values(a).find((r) => typeof r == "string" && r);
    return typeof n == "string" && n.trim() ? n : t;
  }
  return t;
}, g = (e, t = "") => {
  const a = Array.isArray(e) ? e[0] : e, n = typeof a == "object" && a ? a.value : a;
  return n == null || n === "" ? t : String(n);
}, f = (e, t = 0) => {
  const a = Number(e);
  return e === "" || e == null || !Number.isFinite(a) ? t : a;
}, u = (e, t = !1) => e == null || e === "" ? t : e === !0 || e === "true" || e === 1 || e === "1", Q = (e) => Array.isArray(e) ? e : [], I = (e) => {
  var t, a;
  try {
    const n = (a = (t = y()) == null ? void 0 : t.money) == null ? void 0 : a.call(t, e);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(e * 100) / 100} ${x("ر.س", "SAR")}`;
};
async function V(e, t = 1, a) {
  var n, r, i;
  await X();
  try {
    return await ((i = (r = (n = y()) == null ? void 0 : n.cart) == null ? void 0 : r.addItem) == null ? void 0 : i.call(r, a ? { id: e, quantity: t, notes: a } : { id: e, quantity: t })), !0;
  } catch {
    return !1;
  }
}
function Z(e, t = !0) {
  var a, n, r;
  try {
    (r = t ? (a = y()) == null ? void 0 : a.success : (n = y()) == null ? void 0 : n.error) == null || r(e);
  } catch {
  }
}
const tt = (e, t) => {
  var a, n, r;
  try {
    (r = (n = (a = y()) == null ? void 0 : a.event) == null ? void 0 : n.on) == null || r.call(n, e, t);
  } catch {
  }
}, D = "tw_smart_mem_v1", R = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function B() {
  try {
    return { ...R(), ...JSON.parse(localStorage.getItem(D) || "{}") };
  } catch {
    return R();
  }
}
function et(e) {
  try {
    localStorage.setItem(D, JSON.stringify(e));
  } catch {
  }
}
function z(e) {
  const t = B();
  return e(t), et(t), t;
}
function at() {
  let e = !1;
  try {
    e = !sessionStorage.getItem(D), sessionStorage.setItem(D, "1");
  } catch {
  }
  return e ? z((t) => {
    t.visits += 1, t.last = Date.now();
  }) : B();
}
const F = (e, t = 1) => z((a) => {
  a.seen[e.id] = (a.seen[e.id] || 0) + t, a.prices = [...a.prices.slice(-29), e.price], e.category && (a.tags[e.category] = (a.tags[e.category] || 0) + t);
});
let O = !1;
function rt() {
  O || (O = !0, tt("cart::item.added", (e) => {
    var a;
    const t = Number(((a = e == null ? void 0 : e.data) == null ? void 0 : a.product_id) ?? 0);
    t && z((n) => {
      n.carted.includes(t) || (n.carted = [...n.carted.slice(-40), t]);
    });
  }));
}
const nt = () => {
  const e = innerWidth, t = navigator.userAgent;
  return /iPad|Tablet/i.test(t) || e >= 700 && e < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t) || e < 700 ? "mobile" : "desktop";
}, U = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
}, it = () => {
  const e = new URLSearchParams(location.search).get("tw_date"), t = e ? /* @__PURE__ */ new Date(e + "T12:00:00") : null;
  return t && !isNaN(+t) ? t : /* @__PURE__ */ new Date();
};
var ot = Object.defineProperty, st = (e, t, a, n) => {
  for (var r = void 0, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (r = l(t, a, r) || r);
  return r && ot(t, a, r), r;
};
const ct = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, T = /* @__PURE__ */ new Set();
function lt(e) {
  const t = ct[e];
  if (!t || T.has(t)) return t;
  T.add(t);
  const a = document.createElement("link");
  return a.rel = "stylesheet", a.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a), t;
}
const dt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, pt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], G = class G extends q {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), rt(), at();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((t) => {
      var a;
      t.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (a = this.io) == null || a.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.io) == null || t.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const t = this.c, a = Date.now(), n = Date.parse(String(t.s_from || "")), r = Date.parse(String(t.s_to || ""));
    if (Number.isFinite(n) && a < n || Number.isFinite(r) && a > r) return !0;
    const i = nt();
    return !!(u(t.s_hide_mobile) && i === "mobile" || u(t.s_hide_desktop) && i !== "mobile");
  }
  vars(t = "") {
    const a = this.c, n = [], r = (l, s) => {
      s !== "" && s != null && n.push(`${l}:${s}`);
    };
    r("--a", a.s_accent || ""), r("--a2", a.s_accent2 || ""), r("--bgc", a.s_bg || ""), r("--fgc", a.s_text || ""), r("--cardc", a.s_card || ""), r("--r", `${f(a.s_radius, 22)}px`), r("--gap", `${f(a.s_gap, 18)}px`), r("--ts", `${f(a.s_title_size, 38)}px`), r("--fs", `${f(a.s_text_size, 16)}px`), r("--pt", `${f(a.s_pad_top, 56)}px`), r("--pb", `${f(a.s_pad_bottom, 56)}px`), r("--maxw", dt[g(a.s_width, "normal")] ?? "1240px"), r("--sh", pt[Math.max(0, Math.min(5, f(a.s_shadow, 2)))]), r("--ms", `${f(a.s_anim_ms, 700)}ms`), r("--ov", String(f(a.s_overlay, 45) / 100)), a.s_bg_image && r("--bgimg", `url("${String(a.s_bg_image)}")`);
    const i = lt(g(a.s_font, "inherit"));
    return i && r("font-family", `'${i}', inherit`), n.join(";") + (t ? ";" + t : "");
  }
  cls() {
    const t = this.c;
    return [
      "sec",
      `th-${g(t.s_theme, "auto")}`,
      `al-${g(t.s_align, "start")}`,
      `an-${g(t.s_anim, "rise")}`,
      `pt-${g(t.s_pattern, "none")}`,
      `bs-${g(t.s_btn_style, "pill")}`,
      u(t.s_border) ? "bordered" : "",
      u(t.s_stagger, !0) ? "stagger" : "",
      t.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(t, a = {}, n = "", r = "", i = !0) {
    if (this.hiddenNow()) return _;
    const l = this.c, s = v(l.eyebrow, a.eyebrow ?? ""), o = v(l.title, a.title ?? ""), c = v(l.subtitle, a.sub ?? ""), p = i && u(l.s_show_head, !0) && (s || o || c);
    return d`<section class="${this.cls()} ${n}" style=${this.vars(r)} id=${String(l.s_anchor || "") || _}>
      <div class="wrap">${p ? d`<header class="head">${s ? d`<span class="eyebrow">${s}</span>` : ""}${o ? d`<h2 class="title">${o}</h2>` : ""}${c ? d`<p class="sub">${c}</p>` : ""}</header>` : ""}
      ${t}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(t) {
    const a = t.filter(Boolean);
    return !a.length || !U() || !u(this.c.s_hints, !0) ? "" : d`<aside class="hints" role="note"><b>💡 ${x("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${a.map((n) => d`<li>${n}</li>`)}</ul></aside>`;
  }
  card(t, a = {}) {
    var n;
    return d`<article class="pc ${t.available ? "" : "oos"}">
      <a class="ph" href=${t.url} @click=${() => F(t)}><img src=${t.image} alt=${t.name} loading="lazy" />${(n = a.badges) != null && n.length ? d`<span class="badges">${a.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t.url} @click=${() => F(t)}>${t.name}</a>
        <div class="pr"><b>${I(t.price)}</b>${t.regular > t.price ? d`<s>${I(t.regular)}</s>` : ""}</div>
        ${a.rating !== !1 && t.rating > 0 ? d`<div class="rt">★ ${t.rating.toFixed(1)}${t.ratingCount ? d` <small>(${t.ratingCount})</small>` : ""}</div>` : ""}
        ${a.extra ?? ""}
        ${a.quick !== !1 ? d`<button class="btn sm" ?disabled=${!t.available} @click=${() => this.add(t)}>${t.available ? x("أضف للسلة", "Add to cart") : x("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(t, a = 1, n) {
    F(t, 3), await V(t.id, a, n) ? Z(x("تمت الإضافة للسلة", "Added to cart")) : location.href = t.url;
  }
};
G.base = N`
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
let k = G;
st([
  J({ type: Object })
], k.prototype, "config");
const C = {
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
}, A = 864e5, h = (e, t, a) => new Date(e, t - 1, a, 0, 0, 0), m = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
let L = null;
function ft(e) {
  try {
    L ?? (L = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t = Object.fromEntries(L.formatToParts(e).map((a) => [a.type, a.value]));
    return { y: parseInt(t.year), m: parseInt(t.month), d: parseInt(t.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
function ht(e, t, a, n) {
  const r = [];
  for (let i = 0; i <= n; i++) {
    const l = m(a, i), s = ft(l);
    s.m === e && s.d === t && (r.push(l), i += 300);
  }
  return r;
}
function gt(e) {
  const t = h(e, 11, 30);
  for (; t.getDay() !== 5; ) t.setDate(t.getDate() - 1);
  return t;
}
function ut(e, t, a = 27, n = "before") {
  const r = h(e, t, Math.min(a, new Date(e, t, 0).getDate()));
  if (n !== "none") for (; r.getDay() === 5 || r.getDay() === 6; ) r.setDate(r.getDate() + (n === "before" ? -1 : 1));
  return r;
}
function mt(e, t = {}) {
  const a = m(e, -40), n = 440, r = [], i = (o, c, p, w) => ht(c, p, a, n).forEach((b) => r.push({ id: o, start: b, end: m(b, w) }));
  i("ramadan", 9, 1, 29), i("eid_fitr", 10, 1, 3), i("hajj", 12, 1, 7), i("arafah", 12, 9, 0), i("eid_adha", 12, 10, 3), i("hijri_new_year", 1, 1, 0);
  for (const o of [e.getFullYear() - 1, e.getFullYear(), e.getFullYear() + 1]) {
    r.push({ id: "founding", start: h(o, 2, 22), end: h(o, 2, 22) }), r.push({ id: "national", start: h(o, 9, 23), end: h(o, 9, 23) }), r.push({ id: "mothers", start: h(o, 3, 21), end: h(o, 3, 21) });
    const c = gt(o);
    r.push({ id: "white_friday", start: m(c, -(t.whiteFridayDays ?? 7)), end: m(c, 3) }), r.push({ id: "summer", start: h(o, 6, 15), end: h(o, 8, 31) }), r.push({ id: "winter", start: h(o, 12, 1), end: h(o + 1, 2, 28) });
    for (let p = 1; p <= 12; p++) {
      const w = ut(o, p, t.payDay ?? 27, t.payShift ?? "before");
      r.push({ id: "payday", start: w, end: m(w, 3) });
      const b = h(o, p, 10);
      r.push({ id: "citizen", start: b, end: m(b, 1) });
    }
  }
  if (t.school) {
    const o = /* @__PURE__ */ new Date(t.school + "T00:00:00");
    isNaN(+o) || r.push({ id: "back_to_school", start: m(o, -14), end: o });
  }
  for (const o of r.filter((c) => c.id === "ramadan")) {
    const c = r.find((p) => p.id === "eid_fitr" && +p.start > +o.start && +p.start - +o.start < 32 * A);
    c && (o.end = m(c.start, -1));
  }
  const l = +a, s = +a + n * A;
  return r.filter((o) => +o.end >= l && +o.start <= s).sort((o, c) => +o.start - +c.start);
}
const P = (e) => +e + A - 1;
function Y(e, t, a = {}) {
  const n = mt(e, a).filter((s) => !t || t.includes(s.id)), r = +e, i = n.filter((s) => r >= +s.start && r <= P(s.end)).sort((s, o) => C[o.id].pri - C[s.id].pri), l = n.filter((s) => +s.start > r);
  return {
    active: i,
    next: l,
    phase: (s) => r < +s.start ? "soon" : P(s.end) - r < 2 * A && +s.end > +s.start ? "last" : "on",
    dayOf: (s) => Math.floor((r - +s.start) / A) + 1
  };
}
const bt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"], yt = ["citizen", "summer", "winter", "hijri_new_year"], xt = (e) => bt.filter((t) => u(e[`o_${t}`], !yt.includes(t))), vt = (e) => ({ payDay: f(e.pay_day, 27), payShift: g(e.pay_shift, "before"), school: String(e.school_date || "").slice(0, 10), whiteFridayDays: f(e.wf_days, 7) }), wt = (e) => {
  const t = String(e.preview_date || "").slice(0, 10);
  if (t && (U() || window.__twDemo)) {
    const a = /* @__PURE__ */ new Date(t + "T12:00:00");
    if (!isNaN(+a)) return a;
  }
  return it();
};
function $t(e) {
  const t = wt(e), a = xt(e), n = vt(e), r = Y(t, a, n), i = g(e.override, "auto");
  if (i === "none") return { w: null, phase: "on", day: 0, left: 0, at: t };
  if (i !== "auto") {
    const o = Y(t, [i], n), c = o.active[0] ?? o.next[0] ?? null;
    return { w: c, phase: c ? o.phase(c) : "on", day: c ? o.dayOf(c) : 0, left: c ? Math.ceil((+c.start - +t) / 864e5) : 0, at: t };
  }
  if (r.active[0]) return { w: r.active[0], phase: r.phase(r.active[0]), day: r.dayOf(r.active[0]), left: 0, at: t };
  const l = f(e.lead_days, 14), s = r.next.find((o) => (+o.start - +t) / 864e5 <= (C[o.id].pri >= 8 ? l : Math.min(l, 5)));
  return s ? { w: s, phase: "soon", day: 0, left: Math.ceil((+s.start - +t) / 864e5), at: t } : { w: null, phase: "on", day: 0, left: 0, at: t };
}
function E(e, t = "deco") {
  const a = "var(--o2, #d9b25f)";
  return e === "ramadan" || e === "hajj" || e === "arafah" || e === "hijri_new_year" ? d`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n, r) => $`<g transform=${`translate(${n} 0)`} class="sw" style=${`animation-delay:${r * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + r * 18} stroke=${a} stroke-width="1.5"/><g transform=${`translate(0 ${50 + r * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${a}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${a} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${a}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${a}/><circle cx="262" cy="52" r="3" fill=${a}/><circle cx="180" cy="30" r="2" fill=${a}/></svg>` : e === "eid_fitr" || e === "eid_adha" || e === "mothers" ? d`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n, r) => $`<path class="tw" style=${`animation-delay:${r % 5 * 0.3}s`} transform=${`translate(${r * 53 % 390} ${r * 37 % 200}) scale(${0.5 + r % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${a}/>`)}
      ${[60, 330].map((n, r) => $`<g class="sw" style=${`animation-delay:${r}s`}><line x1=${n} y1="0" x2=${n} y2="70" stroke=${a}/><circle cx=${n} cy="86" r="16" fill=${r ? "#f28fad" : a}/></g>`)}</svg>` : e === "national" || e === "founding" ? d`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${e === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n, r) => $`<path class="sw" style=${`animation-delay:${r * 0.2}s`} transform=${`translate(${20 + r * 45} 14)`} d="M0 0h26l-13 22z" fill=${r % 2 ? e === "national" ? "#fff" : "#c8a165" : e === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : e === "white_friday" || e === "payday" || e === "citizen" ? d`<svg class=${t} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n, r) => $`<g class="fall" style=${`animation-delay:${r * 0.5}s;transform-origin:${30 + r * 38}px 0`}><rect x=${20 + r * 38} y=${10 + r % 4 * 30} width="26" height="16" rx="4" fill=${r % 2 ? a : "currentColor"} opacity=".7" transform=${`rotate(${r % 5 * 12 - 24} ${30 + r * 38} ${18 + r % 4 * 30})`}/></g>`)}</svg>` : d``;
}
const _t = {
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
}, kt = N`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
var At = Object.defineProperty, jt = (e, t, a, n) => {
  for (var r = void 0, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (r = l(t, a, r) || r);
  return r && At(t, a, r), r;
};
const M = class M extends k {
  constructor() {
    super(...arguments), this.gone = !1;
  }
  connectedCallback() {
    super.connectedCallback();
    const t = f(this.c.overlay_seconds, 8);
    g(this.c.mode, "strip") === "overlay" && t && setTimeout(() => this.gone = !0, t * 1e3);
  }
  render() {
    const t = this.c, a = H(), n = $t(t);
    if (!n.w || n.phase === "soon" && !u(t.show_soon, !1) || this.gone) return this.hints([x("الزينة تظهر تلقائياً في أيام المواسم المفعلة فقط.", "Decorations appear by themselves on enabled occasion days.")]) || _;
    const r = n.w.id, i = C[r], l = g(t.mode, "strip"), s = `decor-${r}-${n.w.start.getFullYear()}`;
    if (u(t.once, !1) && B().dismissed[s]) return _;
    const o = () => {
      this.gone = !0, z((S) => {
        S.dismissed[s] = Date.now();
      });
    }, c = `--o1:${t.color1 || i.pal[0]};--o2:${t.color2 || i.pal[1]};--o3:${t.color3 || i.pal[2]};--sh2:${f(t.height, 180)}px`, p = Q(t.greetings).find((S) => g(S.occasion) === r), w = p && v(p.text) || _t[r].on[a ? 2 : 0], b = p && v(p.sub) || (n.phase === "soon" ? x(`باقي ${n.left} أيام`, `${n.left} days to go`) : v(t.signature, ""));
    return this.hiddenNow() ? _ : l === "overlay" ? d`<div class="overlay" style=${c}>${E(r)}</div>` : l === "corner" ? d`<div class="corner" style=${c}>${E(r)}<span style="position:relative">${i.emoji}</span><button class="x" @click=${o} aria-label="close">×</button></div>` : this.shell(d`<div class="strip" style=${c}>${E(r)}<div class="in"><b>${i.emoji} ${w}</b>${b ? d`<span>${b}</span>` : ""}</div>${u(t.closable, !1) ? d`<button class="x" @click=${o}>×</button>` : ""}</div>`, { title: "" });
  }
};
M.styles = [k.base, kt, N`
    .strip { position: relative; overflow: hidden; min-height: var(--sh2, 150px); border-radius: var(--r); display: grid; place-items: center; text-align: center; padding: 26px; background: linear-gradient(135deg, var(--o1), color-mix(in srgb, var(--o1) 60%, #000)); color: var(--o3); box-shadow: var(--sh); }
    .strip .deco { opacity: .55; } .strip .in { position: relative; z-index: 1; display: grid; gap: 6px; text-shadow: 0 2px 12px #0006; } .strip b { font-size: clamp(22px, 3.4vw, 38px); } .strip span { opacity: .85; }
    .overlay { position: fixed; inset: 0; z-index: 80; pointer-events: none; color: var(--o1); } .overlay .deco { height: 40vh; max-height: none; }
    .corner { position: fixed; z-index: 70; bottom: 16px; inset-inline-start: 16px; width: 120px; height: 120px; border-radius: 50%; overflow: hidden; background: var(--o1); box-shadow: 0 16px 40px -14px #000a; pointer-events: auto; display: grid; place-items: center; font-size: 46px; }
    .corner .deco { opacity: .7; } .x { position: absolute; top: 8px; inset-inline-end: 12px; background: none; border: 0; color: inherit; font-size: 22px; cursor: pointer; pointer-events: auto; z-index: 2; }
  `];
let j = M;
jt([
  K()
], j.prototype, "gone");
typeof j < "u" && j.registerSallaComponent("salla-mawaqeet-decor");
export {
  j as default
};
