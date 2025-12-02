
import { useLang } from '../context/LangContext';

const sectorsEn = [
  {
    title: 'Smart City & Municipal',
    desc: 'Integrated platforms for lighting, parking, waste, traffic, and safety across modern cities.'
  },
  {
    title: 'Fleet, Transport & Logistics',
    desc: 'Full visibility for trucks, trailers, buses, and service fleets with telematics and route optimization.'
  },
  {
    title: 'Industrial, Utilities & Energy',
    desc: 'Monitoring plants, substations, chillers, and critical assets with IoT sensors and BMS/SCADA integration.'
  },
  {
    title: 'Agriculture & Remote Sites',
    desc: 'Digitizing farms, wells, remote tanks, and off-grid locations using sensors, gateways, and satellite or LTE.'
  }
];

const sectorsAr = [
  {
    title: 'المدن الذكية والبلديات',
    desc: 'منصات متكاملة لإنارة الشوارع، المواقف، النفايات، المرور، والسلامة في المدن الحديثة.'
  },
  {
    title: 'النقل والخدمات اللوجستية',
    desc: 'رؤية كاملة للشاحنات والمقطورات والحافلات وأساطيل الخدمة مع تتبع لحظي وتحسين للطرق.'
  },
  {
    title: 'القطاع الصناعي والطاقة والمرافق',
    desc: 'مراقبة المصانع ومحطات الطاقة والمبردات والأصول الحيوية عبر حساسات إنترنت الأشياء وتكامل BMS/SCADA.'
  },
  {
    title: 'الزراعة والمواقع البعيدة',
    desc: 'رقمنة المزارع والآبار والخزانات والمواقع النائية باستخدام الحساسات والبوابات والاتصال عبر LTE أو الأقمار الصناعية.'
  }
];

export default function Solutions() {
  const { lang } = useLang();
  const list = lang === 'ar' ? sectorsAr : sectorsEn;

  return (
    <section className="page">
      <h1>{lang === 'ar' ? 'الحلول والقطاعات' : 'Solutions & Sectors'}</h1>
      <p>
        {lang === 'ar'
          ? 'نظرة عامة على أهم القطاعات التي تخدمها ركين من خلال منصات إنترنت الأشياء والأنظمة الذكية.'
          : 'An overview of the key sectors served by Rakeen using IoT platforms and smart systems.'}
      </p>

      <div className="card-grid">
        {list.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
