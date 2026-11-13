import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/mawaqeet-calendar.js');
await import('../dist/mawaqeet-countdown.js');
await import('../dist/mawaqeet-decor.js');
await import('../dist/mawaqeet-hero.js');
await import('../dist/mawaqeet-payday.js');
window.__ready = true;
