// Sample data only. Each block previews a different date so all seasons are visible in one page.
window.__twDemo = true; localStorage.removeItem('tw_smart_mem_v1'); sessionStorage.clear();
const sel = (v) => [{ value: v, label: v, key: v }];
window.__cfg = {
  'mawaqeet-hero': { config: { preview_date: '2027-02-12', image: 'img/perfume-bundle.webp', overrides: [], products: [{ value: 101 }, { value: 110 }], link: '#' } },
  'mawaqeet-countdown': { config: { link: '#' } },
  'mawaqeet-decor': { config: { preview_date: '2027-03-10', mode: sel('strip'), signature: 'فريق دار الريحان' } },
  'mawaqeet-calendar': { config: { offers: [{ occasion: sel('white_friday'), text: 'خصم حتى 40% على العطور', link: '#' }, { occasion: sel('ramadan'), text: 'باقات رمضان والبخور', link: '#' }, { occasion: sel('founding'), text: 'تشكيلة التأسيس', link: '#' }] } },
  'mawaqeet-payday': { config: { before_days: 14, link: '#' } },
};
