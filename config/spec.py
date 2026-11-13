from fields import *
OV = lambda: COLL("overrides", "نصوصك لكل موسم (اختياري — بدونها يكتب العنصر نصاً جاهزاً)", [RADIO("occasion", "الموسم", OCCS), RADIO("phase", "المرحلة", [("any", "الكل"), ("soon", "قبل الموسم"), ("on", "أثناء الموسم")]),
    T("title", "العنوان", mx=80), TA("subtitle", "الوصف", mx=200), IMG("image", "الصورة"), T("button", "نص الزر", mx=30), URL("link", "الرابط"), T("coupon", "كود الموسم", ml=False, mx=30)], [], mx=30, item="نص موسم")
PAL = lambda: [SW("store_colors", "استخدم ألوان متجرك بدل ألوان الموسم"), COLOR("color1", "لون الموسم الأساسي (فارغ = تلقائي)"), COLOR("color2", "لون الموسم الذهبي"), COLOR("color3", "لون النص")]
hero = dict(title="مواقيت · واجهة الموسم التلقائية", icon="sicon-moon", name="mawaqeet-hero", fields=[OV()] + OCCCFG() + OCCSW() + PAL() + [
    SW("decor", "زينة الموسم المرسومة", True), SW("last_days", "🧠 «آخر أيام…» تلقائياً في نهاية الموسم", True), SW("chip_occ", "شارة اسم الموسم", True), SW("chip_left", "شارة «باقي X يوم»", True),
    SW("chip_day", "شارة «اليوم X رمضان»", True), SW("chip_date", "التاريخ الهجري والميلادي", True), IMG("image", "صورة عامة")] + [IMG(f"img_{k}", f"صورة {n}") for k, n in OCCS[:9]] + [
    T("button", "نص الزر (فارغ = حسب الموسم)", "", mx=30), URL("link", "رابط الزر"), SW("fallback_show", "عند عدم وجود موسم: اعرض نصاً احتياطياً", True), T("fallback_title", "العنوان الاحتياطي", "", mx=80), TA("fallback_text", "النص الاحتياطي", "", mx=200),
    NUM("height", "الارتفاع (px)", 460, 280, 800), NUM("headline_size", "حجم العنوان (px)", 64, 28, 100), SW("show_products", "منتجات عائمة من متجرك", True)] + SRC("offers", 2, 4)[:2] + DESIGN(anim="zoom"))
cd = dict(title="مواقيت · العدّ للمناسبة القادمة", icon="sicon-time", name="mawaqeet-countdown", fields=[
    RADIO("target", "العد إلى", [("next", "أقرب مناسبة مفعّلة (تلقائي)")] + OCCS), NUM("min_priority", "🧠 تجاهل المناسبات الصغيرة (أهمية أقل من)", 3, 0, 10),
    COLL("messages", "رسالة لكل مناسبة", [RADIO("occasion", "المناسبة", OCCS), T("title", "العنوان", mx=80), TA("text", "النص", mx=200), T("button", "نص الزر", mx=30), URL("link", "الرابط")], [], mx=20, item="رسالة"),
    SW("show_date", "إظهار التاريخ الهجري والميلادي", True), SW("show_seconds", "إظهار الثواني", True), SW("show_next", "إظهار المناسبات التالية", True), NUM("next_count", "عدد المناسبات التالية", 3, 0, 6),
    T("button", "نص الزر", "جهّز نفسك الآن", mx=30), URL("link", "رابط الزر"), SW("decor", "زينة المناسبة", True)] + PAL() + OCCCFG()[1:] + OCCSW() + DESIGN(align="center"))
cal = dict(title="مواقيت · تقويم المواسم", icon="sicon-calendar", name="mawaqeet-calendar", fields=HEAD("تقويم المواسم", "مواسم السنة… وعروضنا فيها", "") + [
    COLL("offers", "عرضك في كل موسم", [RADIO("occasion", "الموسم", OCCS), T("text", "العرض", mx=80), T("button", "نص الزر", mx=30), URL("link", "الرابط")], [], mx=20, item="عرض"),
    NUM("months", "كم شهراً للأمام", 12, 1, 13), NUM("limit", "أقصى عدد", 10, 3, 30), SW("reminders", "زر «ذكّرني» يضيف المناسبة لتقويم الجوال", True), SW("show_hijri", "التاريخ الهجري", True),
    SW("dedupe_monthly", "🧠 اعرض أقرب راتب/حساب مواطن فقط", True), SW("year_bar", "شريط تقدم السنة", True), RADIO("layout", "التخطيط", [("h", "خط زمني أفقي"), ("v", "شبكة")])] + OCCCFG()[2:] + OCCSW() + DESIGN())
dec = dict(title="مواقيت · زينة المواسم التلقائية", icon="sicon-star", name="mawaqeet-decor", fields=[
    RADIO("mode", "شكل الزينة", [("strip", "شريط تهنئة مزيّن"), ("corner", "زاوية عائمة صغيرة"), ("overlay", "طبقة زينة خفيفة فوق الصفحة")]),
    COLL("greetings", "تهنئتك لكل موسم", [RADIO("occasion", "الموسم", OCCS), T("text", "التهنئة", mx=80), T("sub", "سطر ثانٍ", mx=120)], [], mx=20, item="تهنئة"),
    T("signature", "توقيع (مثلاً: فريق المتجر)", "", mx=40), SW("show_soon", "أظهرها قبل الموسم أيضاً"), NUM("overlay_seconds", "مدة طبقة الزينة (ثوانٍ، 0 = دائماً)", 8, 0, 60),
    SW("once", "🧠 لا تظهر مرة ثانية بعد إغلاقها في نفس الموسم"), SW("closable", "زر إغلاق"), NUM("height", "ارتفاع الشريط (px)", 180, 80, 400)] + PAL()[1:] + OCCCFG() + OCCSW() + DESIGN())
pay = dict(title="مواقيت · موسم الرواتب", icon="sicon-wallet", name="mawaqeet-payday", fields=[
    NUM("pay_day", "💸 يوم الراتب", 27, 1, 31), RADIO("pay_shift", "💸 إذا وافق الجمعة أو السبت", [("before", "يُقدَّم للخميس"), ("after", "يُؤخَّر للأحد"), ("none", "لا يتغير")]),
    NUM("before_days", "يظهر قبل الراتب بـ (أيام)", 5, 0, 20), NUM("after_days", "ويستمر بعده (أيام)", 4, 0, 15), SW("show_mid", "أظهر رسالة منتصف الشهر أيضاً"), SW("citizen", "🏦 رسالة يوم حساب المواطن (10 من كل شهر)"),
    T("before_title", "عنوان قبل الراتب (فارغ = ذكي)", "", mx=60), TA("before_text", "نص قبل الراتب", "", mx=160), T("on_title", "عنوان يوم الراتب", "", mx=60), TA("on_text", "نص يوم الراتب", "", mx=160),
    T("mid_title", "عنوان منتصف الشهر", "", mx=60), TA("mid_text", "نص منتصف الشهر", "", mx=160), T("citizen_title", "عنوان حساب المواطن", "", mx=60), TA("citizen_text", "نص حساب المواطن", "", mx=160),
    SW("ring", "دائرة العد", True), SW("show_date", "إظهار موعد الراتب", True), SW("show_products", "منتجات مقترحة", True), T("button", "نص الزر", "", mx=30), URL("link", "الرابط"),
    COLOR("color1", "اللون الأساسي", "#103b2c"), COLOR("color2", "لون التمييز", "#3ddc97"), DATE("preview_date", "🧪 جرّب تاريخاً (داخل المحرر فقط)")] + SRC("offers", 3, 6)[:3] + DESIGN())
build("tw-mawaqeet", {"ar": "مَواقيت — محرك المواسم السعودية التلقائي", "en": "Mawaqeet — Automatic Saudi Seasons Engine"},
      {"ar": "5 عناصر تدير مواسم متجرك وحدها: تكتشف رمضان والعيدين وعشر ذي الحجة واليوم الوطني ويوم التأسيس والجمعة البيضاء والرواتب من تقويم أم القرى تلقائياً كل سنة، وتغيّر الألوان والزينة والنصوص قبل الموسم وأثناءه وفي آخره، مع عدّاد للمناسبة القادمة، تقويم سنوي بتذكير في الجوال، زينة تلقائية، وموسم الرواتب.",
       "en": "5 components that run your seasons by themselves: Ramadan, both Eids, Dhul-Hijjah, National Day, Founding Day, White Friday and paydays are detected from the Umm al-Qura calendar every year, switching colours, decorations and copy before, during and at the end of each season; plus a next-occasion countdown, a yearly calendar with phone reminders, auto decorations and a payday engine."},
      [hero, cd, cal, dec, pay])
