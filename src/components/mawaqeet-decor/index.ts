import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, list, t, isEn } from '../../shared/salla';
import { OCC } from '../../shared/seasons';
import { current, decor } from '../../shared/occ';
import { COPY } from '../../shared/occcopy';
import { occCss } from '../../shared/occstyle';
import { mem, update } from '../../shared/memory';

type R = Record<string, unknown>;
/** Automatic festive layer: lanterns and crescent in Ramadan, stars and balloons for Eid, flags for National Day, falling tags for White Friday… appears by itself on the right days as a greeting strip, a corner ornament or a light overlay. */
export default class MawaqeetDecor extends Smart {
  @state() private gone = false;
  static styles = [Smart.base, occCss, css`
    .strip { position: relative; overflow: hidden; min-height: var(--sh2, 150px); border-radius: var(--r); display: grid; place-items: center; text-align: center; padding: 26px; background: linear-gradient(135deg, var(--o1), color-mix(in srgb, var(--o1) 60%, #000)); color: var(--o3); box-shadow: var(--sh); }
    .strip .deco { opacity: .55; } .strip .in { position: relative; z-index: 1; display: grid; gap: 6px; text-shadow: 0 2px 12px #0006; } .strip b { font-size: clamp(22px, 3.4vw, 38px); } .strip span { opacity: .85; }
    .overlay { position: fixed; inset: 0; z-index: 80; pointer-events: none; color: var(--o1); } .overlay .deco { height: 40vh; max-height: none; }
    .corner { position: fixed; z-index: 70; bottom: 16px; inset-inline-start: 16px; width: 120px; height: 120px; border-radius: 50%; overflow: hidden; background: var(--o1); box-shadow: 0 16px 40px -14px #000a; pointer-events: auto; display: grid; place-items: center; font-size: 46px; }
    .corner .deco { opacity: .7; } .x { position: absolute; top: 8px; inset-inline-end: 12px; background: none; border: 0; color: inherit; font-size: 22px; cursor: pointer; pointer-events: auto; z-index: 2; }
  `];
  connectedCallback() { super.connectedCallback(); const sec = num(this.c.overlay_seconds, 8); if (opt(this.c.mode, 'strip') === 'overlay' && sec) setTimeout(() => (this.gone = true), sec * 1000); }
  render() {
    const c = this.c; const en = isEn(); const cur = current(c);
    if (!cur.w || (cur.phase === 'soon' && !bool(c.show_soon, false)) || this.gone) return this.hints([t('الزينة تظهر تلقائياً في أيام المواسم المفعلة فقط.', 'Decorations appear by themselves on enabled occasion days.')]) || nothing;
    const id = cur.w.id; const m = OCC[id]; const mode = opt(c.mode, 'strip');
    const key = `decor-${id}-${cur.w.start.getFullYear()}`; if (bool(c.once, false) && mem().dismissed[key]) return nothing;
    const close = () => { this.gone = true; update((x) => { x.dismissed[key] = Date.now(); }); };
    const pal = `--o1:${c.color1 || m.pal[0]};--o2:${c.color2 || m.pal[1]};--o3:${c.color3 || m.pal[2]};--sh2:${num(c.height, 180)}px`;
    const ov = list<R>(c.greetings).find((g) => opt(g.occasion) === id);
    const text = (ov && L(ov.text)) || COPY[id].on[en ? 2 : 0]; const sub = (ov && L(ov.sub)) || (cur.phase === 'soon' ? t(`باقي ${cur.left} أيام`, `${cur.left} days to go`) : L(c.signature, ''));
    if (this.hiddenNow()) return nothing;
    if (mode === 'overlay') return html`<div class="overlay" style=${pal}>${decor(id)}</div>`;
    if (mode === 'corner') return html`<div class="corner" style=${pal}>${decor(id)}<span style="position:relative">${m.emoji}</span><button class="x" @click=${close} aria-label="close">×</button></div>`;
    return this.shell(html`<div class="strip" style=${pal}>${decor(id)}<div class="in"><b>${m.emoji} ${text}</b>${sub ? html`<span>${sub}</span>` : ''}</div>${bool(c.closable, false) ? html`<button class="x" @click=${close}>×</button>` : ''}</div>`, { title: '' });
  }
}
