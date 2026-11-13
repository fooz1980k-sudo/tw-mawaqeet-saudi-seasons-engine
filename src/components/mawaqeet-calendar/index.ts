import { css, html } from 'lit';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, list, t, isEn, storeName } from '../../shared/salla';
import { OCC, windows, hijriLabel, gregLabel, type Window_ } from '../../shared/seasons';
import { enabled, opts, now } from '../../shared/occ';

type R = Record<string, unknown>;
const ics = (w: Window_, title: string) => {
  const d = (x: Date) => `${x.getFullYear()}${String(x.getMonth() + 1).padStart(2, '0')}${String(x.getDate()).padStart(2, '0')}`;
  const end = new Date(w.end.getFullYear(), w.end.getMonth(), w.end.getDate() + 1);
  const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//tw-mawaqeet//AR', 'BEGIN:VEVENT', `UID:${w.id}-${d(w.start)}@mawaqeet`, `DTSTART;VALUE=DATE:${d(w.start)}`, `DTEND;VALUE=DATE:${d(end)}`, `SUMMARY:${title}`,
    'BEGIN:VALARM', 'TRIGGER:-P2D', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  return URL.createObjectURL(new Blob([body], { type: 'text/calendar' }));
};
/** A year of Saudi occasions at a glance, computed automatically (Umm al-Qura + Gregorian), each with the merchant's offer and a one-tap calendar reminder (.ics, two days before). */
export default class MawaqeetCalendar extends Smart {
  static styles = [Smart.base, css`
    .tl { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(210px, 1fr); gap: var(--gap); overflow-x: auto; padding: 12px 2px 18px; scroll-snap-type: x mandatory; }
    .v .tl { grid-auto-flow: row; grid-auto-columns: auto; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); overflow: visible; }
    .ev { scroll-snap-align: start; position: relative; border-radius: var(--r); padding: 18px; background: var(--CARD); box-shadow: var(--sh); display: grid; gap: 8px; align-content: start; border-top: 5px solid var(--oc); }
    .ev.now { background: linear-gradient(160deg, color-mix(in srgb, var(--oc) 22%, var(--CARD)), var(--CARD)); outline: 2px solid var(--oc); }
    .em { font-size: 30px; } .ev b { font-size: 17px; } .dt { font-size: 13px; opacity: .75; line-height: 1.6; }
    .left { position: absolute; top: 14px; inset-inline-end: 14px; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 999px; background: color-mix(in srgb, var(--oc) 18%, transparent); }
    .of { font-size: 14px; font-weight: 700; color: var(--A); } .acts { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; align-items: center; } .acts a { font-size: 13px; }
    .bar { position: relative; height: 6px; border-radius: 9px; background: var(--LINE); margin: 6px 0 4px; } .bar i { position: absolute; inset-block: 0; inset-inline-start: 0; border-radius: 9px; background: var(--A); }
  `];
  render() {
    const c = this.c; const en = isEn(); const at = now(c); const en_ = enabled(c);
    const seen = new Set<string>(); const months = num(c.months, 12);
    const all = windows(at, opts(c)).filter((w) => en_.includes(w.id) && +w.end + 864e5 >= +at && +w.start <= +at + months * 30 * 864e5)
      .filter((w) => (bool(c.dedupe_monthly, true) && (w.id === 'payday' || w.id === 'citizen') ? (seen.has(w.id) ? false : (seen.add(w.id), true)) : true)).slice(0, num(c.limit, 10));
    const offers = list<R>(c.offers);
    const yearPct = Math.round(((+at - +new Date(at.getFullYear(), 0, 1)) / (365 * 864e5)) * 100);
    return this.shell(html`${bool(c.year_bar, true) ? html`<div class="muted" style="font-size:13px">${t(`مضى ${yearPct}% من السنة`, `${yearPct}% of the year has passed`)}</div><div class="bar"><i style=${`width:${yearPct}%`}></i></div>` : ''}
      <div class="${opt(c.layout, 'h') === 'v' ? 'v' : ''}"><div class="tl">${all.map((w) => {
        const m = OCC[w.id]; const on = +at >= +w.start && +at <= +w.end + 864e5 - 1; const left = Math.ceil((+w.start - +at) / 864e5); const of = offers.find((o) => opt(o.occasion) === w.id);
        return html`<div class="ev ${on ? 'now' : ''}" style=${`--oc:${m.pal[0] === '#0d0d0f' ? '#555' : m.pal[0]}`}>
          <span class="left">${on ? t('الآن', 'Now') : left <= 1 ? t('غداً', 'Tomorrow') : t(`بعد ${left} يوم`, `in ${left} days`)}</span>
          <span class="em">${m.emoji}</span><b>${m[en ? 'en' : 'ar']}</b>
          <div class="dt">${gregLabel(w.start, en)}${+w.end > +w.start ? ` – ${gregLabel(w.end, en)}` : ''}${bool(c.show_hijri, true) ? html`<br />${hijriLabel(w.start, en)}` : ''}</div>
          ${of && L(of.text) ? html`<div class="of">🎁 ${L(of.text)}</div>` : ''}
          <div class="acts">${of && of.link ? html`<a class="btn sm" href=${String(of.link)}>${L(of.button, t('شوف العرض', 'See offer'))}</a>` : ''}
            ${bool(c.reminders, true) && !on ? html`<a class="btn sm ghost" download=${`${w.id}.ics`} href=${ics(w, `${m[en ? 'en' : 'ar']} · ${storeName() || ''}`)}>⏰ ${t('ذكّرني', 'Remind me')}</a>` : ''}</div></div>`; })}</div></div>`,
      { eyebrow: t('تقويم المواسم', 'Season calendar'), title: t('مواسم السنة… وعروضنا فيها', 'The year’s occasions and our offers') });
  }
}
