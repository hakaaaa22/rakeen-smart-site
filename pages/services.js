import { useLang } from '../context/LangContext';

const servicesEn = [
  { title:'Fleet & Asset Tracking', desc:'GPS, CAN bus, telematics, and real-time tracking.' },
  { title:'Smart City Solutions', desc:'Smart poles, sensors, parking, waste management, and more.' },
  { title:'AI CCTV & Analytics', desc:'LPR/ANPR, security AI, and automated surveillance.' },
  { title:'Industrial IoT & BMS', desc:'Modbus, SCADA, BACnet, and large-scale monitoring.' }
];

const servicesAr = [
  { title:'إدارة الأساطيل والأصول', desc:'منصات تتبع لحظي، CAN Bus، وتليماتكس للمركبات والمعدات الثقيلة.' },
  { title:'حلول المدن الذكية', desc:'أعمدة ذكية، حساسات، مواقف، إدارة نفايات، وأنظمة بنية تحتية متصلة.' },
  { title:'كاميرات ذكية وتحليلات فيديو', desc:'تعرف لوحات (ANPR)، مراقبة سلوكية، وتحليلات أمان معتمدة على الذكاء الاصطناعي.' },
  { title:'إنترنت الأشياء الصناعي و BMS', desc:'تكامل Modbus و SCADA و BACnet لمراقبة المصانع والمباني والمنشآت الحيوية.' }
];

export default function Services() {
  const { lang } = useLang();
  const list = lang === 'ar' ? servicesAr : servicesEn;

  return (
    <section className="page">
      <h1>{lang === 'ar' ? 'الخدمات' : 'Services'}</h1>
      <p>
        {lang === 'ar'
          ? 'أهم مجالات وخدمات ركين في الأنظمة الذكية وإنترنت الأشياء.'
          : 'Core smart-technology services engineered by Rakeen.'}
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