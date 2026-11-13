import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, list, t, isEn } from '../../shared/salla';
import { OCC, detect, hijriLabel, gregLabel } from '../../shared/seasons';
import { enabled, opts, now, decor } from '../../shared/occ';
import { occCss } from '../../shared/occstyle';

type R = Record<string, unknown>;
/** Countdown to the next Saudi occasion, with its exact Umm al-Qura / Gregorian date computed automatically; flips digits every second and lists what comes after. */
export default class MawaqeetCountdown extends Smart {
  @state() private tick = Date.now();
  private tm = 0;
  static styles = [Smart.base, occCss, css`
    .box { position: relative; overflow: hidden; border-radius: var(--r); padding: clamp(24px, 4vw, 48px); background: linear-gradient(150deg, var(--o1), color-mix(in srgb, var(--o1) 65%, #000)); color: var(--o3); box-shadow: var(--sh); text-align: center; }
    .in { position: relative; z-index: 1; display: grid; gap: 12px; justify-items: center; } .em { font-size: 48px; } h3 { margin: 0; font-size: clamp(26px, 4vw, 44px); }
    .date { opacity: .85; font-size: 15px; }
    .cd { display: flex; gap: clamp(8px, 2vw, 18px); direction: ltr; margin: 10px 0; }
    .u { display: grid; gap: 6px; } .u b { display: block; min-width: clamp(62px, 9vw, 96px); padding: 14px 6px; font-size: clamp(30px, 5vw, 56px); font-weight: 900; border-radius: 16px; background: color-mix(in srgb, var(--o3) 12%, transparent); border: 1px solid color-mix(in srgb, var(--o3) 22%, transparent); font-variant-numeric: tabular-nums; position: relative; }
    .u b::after { content: ''; position: absolute; inset: 50% 0 auto; border-top: 1px solid color-mix(in srgb, var(--o1) 40%, transparent); } .u small { font-size: 12px; opacity: .8; }
    .nx { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 8px; } .nx span { font-size: 12px; padding: 6px 12px; border-radius: 999px; background: color-mix(in srgb, var(--o3) 12%, transparent); }
    .btn { background: var(--o2); color: var(--o1); }
  `];
  connectedCallback() { super.connectedCallback(); this.tm = window.setInterval(() => (this.tick = Date.now()), 1000); }
  disconnectedCallback() { super.disconnectedCallback(); clearInterval(this.tm); }
  render() {
    const c = this.c; const en = isEn(); const at = now(c); const real = Math.abs(+at - Date.now()) < 864e5 ? new Date(this.tick) : at;
    const target = opt(c.target, 'next');
    const d = detect(at, target === 'next' ? enabled(c) : [target as never], opts(c));
    const w = d.next.find((x) => OCC[x.id].pri >= num(c.min_priority, 3)) ?? d.next[0]; if (!w) return nothing;
    const m = OCC[w.id]; const s = Math.max(0, Math.floor((+w.start - +real) / 1000));
    const u = [[Math.floor(s / 86400), t('يوم', 'days')], [Math.floor((s % 86400) / 3600), t('ساعة', 'hrs')], [Math.floor((s % 3600) / 60), t('دقيقة', 'min')], [s % 60, t('ثانية', 'sec')]] as [number, string][];
    const ov = list<R>(c.messages).find((x) => opt(x.occasion) === w.id);
    const pal = bool(c.store_colors) ? ['var(--A)', '#fff', '#fff'] : [String(c.color1 || m.pal[0]), String(c.color2 || m.pal[1]), String(c.color3 || m.pal[2])];
    return this.shell(html`<div class="box" style=${`--o1:${pal[0]};--o2:${pal[1]};--o3:${pal[2]}`}>${bool(c.decor, true) ? decor(w.id) : ''}<div class="in">
      <span class="em">${m.emoji}</span><h3>${(ov && L(ov.title)) || t(`باقي على ${m.ar}`, `Countdown to ${m.en}`)}</h3>
      ${bool(c.show_date, true) ? html`<div class="date">${gregLabel(w.start, en)} · ${hijriLabel(w.start, en)}</div>` : ''}
      <div class="cd">${u.slice(0, bool(c.show_seconds, true) ? 4 : 3).map(([v, l]) => html`<div class="u"><b>${String(v).padStart(2, '0')}</b><small>${l}</small></div>`)}</div>
      ${ov && L(ov.text) ? html`<p>${L(ov.text)}</p>` : ''}${(ov && ov.link) || c.link ? html`<a class="btn" href=${String((ov && ov.link) || c.link)}>${(ov && L(ov.button)) || L(c.button, t('جهّز نفسك الآن', 'Get ready now'))}</a>` : ''}
      ${bool(c.show_next, true) ? html`<div class="nx">${d.next.filter((x) => x !== w && OCC[x.id].pri >= num(c.min_priority, 3)).slice(0, num(c.next_count, 3)).map((x) => html`<span>${OCC[x.id].emoji} ${OCC[x.id][en ? 'en' : 'ar']} · ${gregLabel(x.start, en)}</span>`)}</div>` : ''}
    </div></div>`, { title: '' });
  }
}
