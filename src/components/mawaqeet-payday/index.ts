import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, t, isEn, smart, type Prod } from '../../shared/salla';
import { payDate, gregLabel } from '../../shared/seasons';
import { now } from '../../shared/occ';
import { rank } from '../../shared/memory';

/** Salary-season engine: knows Saudi payday (the 27th by default, moved off the Friday/Saturday weekend by the merchant's rule) and the Citizen Account day (10th); speaks differently before payday, on payday and after, and shows matching real products. */
export default class MawaqeetPayday extends Smart {
  @state() private prods: Prod[] = [];
  static styles = [Smart.base, css`
    .pd { display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; padding: clamp(18px, 3vw, 30px); border-radius: var(--r); background: linear-gradient(120deg, var(--p1, #103b2c), color-mix(in srgb, var(--p1, #103b2c) 70%, #000)); color: #fff; box-shadow: var(--sh); }
    @media (max-width: 860px) { .pd { grid-template-columns: 1fr; text-align: center; justify-items: center; } }
    .ring { width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--p2, #3ddc97) calc(var(--pct) * 1%), #ffffff22 0); position: relative; }
    .ring::before { content: ''; position: absolute; inset: 8px; border-radius: 50%; background: var(--p1, #103b2c); } .ring b { position: relative; font-size: 24px; line-height: 1; text-align: center; } .ring small { display: block; font-size: 11px; opacity: .8; }
    h3 { margin: 0 0 6px; font-size: clamp(22px, 3vw, 34px); } p { margin: 0; opacity: .85; line-height: 1.7; }
    .btn { background: var(--p2, #3ddc97); color: #062b1f; } .mini { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; } .mini a { display: flex; align-items: center; gap: 8px; background: #ffffff1a; color: #fff; text-decoration: none; padding: 5px 10px 5px 5px; border-radius: 12px; font-size: 12px; }
    .mini img { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; }
    @media (max-width: 860px) { .mini { justify-content: center; } }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) smart(this.c.products, opt(this.c.auto_source, 'offers'), num(this.c.limit, 3)).then((r) => (this.prods = rank(r.items.filter((p) => p.available), true))); }
  render() {
    const c = this.c; const en = isEn(); const at = now(c); const y = at.getFullYear(); const m = at.getMonth() + 1; const dom = num(c.pay_day, 27); const sh = opt(c.pay_shift, 'before') as 'before';
    let pay = payDate(y, m, dom, sh); if (+at > +pay + num(c.after_days, 4) * 864e5) pay = payDate(m === 12 ? y + 1 : y, m === 12 ? 1 : m + 1, dom, sh);
    const prev = payDate(m === 1 ? y - 1 : y, m === 1 ? 12 : m - 1, dom, sh);
    const diff = Math.ceil((+pay - +at) / 864e5); const sinceLast = Math.floor((+at - +prev) / 864e5);
    let phase: 'before' | 'on' | 'mid' = diff <= 0 ? 'on' : diff <= num(c.before_days, 5) ? 'before' : 'mid';
    if (diff < 0 && -diff > num(c.after_days, 4)) phase = 'mid';
    const cit = bool(c.citizen, false) && at.getDate() >= 10 && at.getDate() <= 11;
    if (phase === 'mid' && !cit && !bool(c.show_mid, false)) return this.hints([t(`العنصر يظهر قبل الراتب بـ ${num(c.before_days, 5)} أيام وبعده بـ ${num(c.after_days, 4)} أيام. الراتب القادم: ${gregLabel(pay, en)}.`, `Shows ${num(c.before_days, 5)} days before payday. Next payday: ${gregLabel(pay, en)}.`)]) || nothing;
    const T_ = cit ? [L(c.citizen_title, t('نزل حساب المواطن', 'Citizen Account is paid')), L(c.citizen_text, t('اختيارات ذكية تناسب ميزانيتك', 'Smart picks for your budget'))]
      : phase === 'on' ? [L(c.on_title, t('نزل الراتب 🎉', 'Payday 🎉')), L(c.on_text, t('وقت تدلّل نفسك، والعروض بانتظارك', 'Time to treat yourself'))]
      : phase === 'before' ? [L(c.before_title, t(`باقي ${diff} ${diff > 2 ? 'أيام' : 'يوم'} على الراتب`, `${diff} days to payday`)), L(c.before_text, t('عبّ سلتك من الحين، وأول ما ينزل الراتب كمّل طلبك', 'Fill your cart now and check out on payday'))]
      : [L(c.mid_title, t('اختيارات تناسب منتصف الشهر', 'Mid-month picks')), L(c.mid_text, t('أسعار تريحك لين الراتب', 'Easy prices until payday'))];
    const pct = phase === 'on' ? 100 : Math.max(4, Math.min(100, Math.round((sinceLast / Math.max(1, sinceLast + diff)) * 100)));
    return this.shell(html`<div class="pd" style=${`--p1:${c.color1 || '#103b2c'};--p2:${c.color2 || '#3ddc97'};--pct:${pct}`}>
      ${bool(c.ring, true) ? html`<div class="ring"><b>${phase === 'on' ? '💸' : diff}<small>${phase === 'on' ? t('اليوم', 'today') : t('يوم', 'days')}</small></b></div>` : html`<span></span>`}
      <div><h3>${T_[0]}</h3><p>${T_[1]}</p>${bool(c.show_date, true) ? html`<p style="font-size:13px;margin-top:6px">${t('موعد الراتب', 'Payday')}: ${gregLabel(pay, en)}</p>` : ''}
        ${this.prods.length && bool(c.show_products, true) ? html`<div class="mini">${this.prods.map((p) => html`<a href=${p.url}><img src=${p.image} alt="" />${p.name}</a>`)}</div>` : ''}</div>
      <a class="btn" href=${String(c.link || '/')}>${L(c.button, phase === 'before' ? t('عبّ سلتك', 'Fill your cart') : t('تسوّق الآن', 'Shop now'))}</a></div>`, { title: '' });
  }
}
