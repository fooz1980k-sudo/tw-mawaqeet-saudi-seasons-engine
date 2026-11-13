import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, list, t, isEn, smart, money, type Prod } from '../../shared/salla';
import { OCC, hijriLabel, gregLabel } from '../../shared/seasons';
import { COPY } from '../../shared/occcopy';
import { current, decor } from '../../shared/occ';
import { occCss } from '../../shared/occstyle';

type R = Record<string, unknown>;
/** Season hero that runs itself: detects Ramadan, both Eids, National Day, Founding Day, White Friday, payday… from the Umm al-Qura calendar, switches palette, decoration and copy by phase (coming / on / last days), and shows real products for the season. */
export default class MawaqeetHero extends Smart {
  @state() private prods: Prod[] = [];
  @state() private copied = false;
  static styles = [Smart.base, occCss, css`
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
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config') && bool(this.c.show_products, true)) smart(this.c.products, opt(this.c.auto_source, 'offers'), 2).then((r) => (this.prods = r.items)); }
  render() {
    const c = this.c; const en = isEn(); const cur = current(c);
    if (!cur.w) { if (!bool(c.fallback_show, true) || !L(c.fallback_title)) return this.hints([t('لا يوجد موسم نشط أو قريب الآن؛ العنصر مخفي حتى يقترب الموسم القادم (أو اكتب عنواناً احتياطياً).', 'No season now: hidden until the next one (or set a fallback title).')]) || nothing; }
    const id = cur.w?.id; const meta = id ? OCC[id] : null; const cp = id ? COPY[id] : null; const ph = cur.phase === 'soon' ? 'soon' : 'on';
    const ov = list<R>(c.overrides).find((o) => opt(o.occasion) === id && (opt(o.phase, 'any') === 'any' || opt(o.phase) === ph));
    let title = (ov && L(ov.title)) || (cp ? cp[ph][en ? 2 : 0] : L(c.fallback_title)); const sub = (ov && L(ov.subtitle)) || (cp ? cp[ph][en ? 3 : 1] : L(c.fallback_text));
    if (cur.phase === 'last' && bool(c.last_days, true) && !ov) title = t(`آخر أيام ${meta!.ar}`, `Last days of ${meta!.en}`);
    const pal = bool(c.store_colors) || !meta ? ['var(--A)', '#fff', '#fff'] : [String(c.color1 || meta.pal[0]), String(c.color2 || meta.pal[1]), String(c.color3 || meta.pal[2])];
    const chips: string[] = [];
    if (meta && bool(c.chip_occ, true)) chips.push(`${meta.emoji} ${meta[en ? 'en' : 'ar']}`);
    if (cur.phase === 'soon' && bool(c.chip_left, true)) chips.push(t(`باقي ${cur.left} ${cur.left > 10 ? 'يوم' : 'أيام'}`, `${cur.left} days to go`));
    if (id === 'ramadan' && cur.phase !== 'soon' && bool(c.chip_day, true)) chips.push(t(`اليوم ${cur.day} رمضان`, `Day ${cur.day} of Ramadan`));
    if (bool(c.chip_date, true)) chips.push(`${hijriLabel(cur.at, en)} · ${gregLabel(cur.at, en)}`);
    const img = String((ov && ov.image) || c[`img_${id}`] || c.image || '');
    const btn = (ov && L(ov.button)) || L(c.button) || (cp ? cp.cta[en ? 1 : 0] : t('تسوّق الآن', 'Shop now')); const link = String((ov && ov.link) || c.link || '/');
    const coupon = String((ov && ov.coupon) || '');
    return this.shell(html`${this.hints([t('جرّب أي موسم: اختر «تحكم يدوي» أو «جرّب تاريخاً» أو أضف ?tw_date=2027-02-15 للرابط.', 'Preview any season with the manual override or ?tw_date=2027-02-15.')])}
      <div class="hero" style=${`--o1:${pal[0]};--o2:${pal[1]};--o3:${pal[2]};--h:${num(c.height, 460)}px;--hs:${num(c.headline_size, 64)}px`}>
        ${bool(c.decor, true) && !bool(c.store_colors) ? decor(id) : ''}
        <div class="txt">${chips.length ? html`<div class="chips">${chips.map((x) => html`<span>${x}</span>`)}</div>` : ''}<h1>${title}</h1><p class="lead">${sub}</p>
          <div class="cta"><a class="btn" href=${link}>${btn}</a>${coupon ? html`<button class="cp" @click=${() => { navigator.clipboard?.writeText(coupon); this.copied = true; }}>${t('الكود', 'Code')} <b>${coupon}</b> ${this.copied ? '✓' : ''}</button>` : ''}</div></div>
        <div class="art">${img ? html`<img class="main" src=${img} alt="" />` : html`<span class="big">${meta?.emoji ?? '✨'}</span>`}
          ${this.prods.map((p) => html`<a class="pp" href=${p.url}><img src=${p.image} alt="" /><span>${p.name}<b>${money(p.price)}</b></span></a>`)}</div>
      </div>`, { title: '' }, opt(c.s_width, 'normal') === 'full' ? 'full' : '', '', false);
  }
}
