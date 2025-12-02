import { useLang } from '../context/LangContext';

const productsEn = [
  { title:'Rakeen Fleet', desc:'Enterprise fleet and asset tracking platform.' },
  { title:'Smart Parking', desc:'ANPR, visitor access, and parking systems.' },
  { title:'Environment & Senseware', desc:'Temperature, humidity, and air-quality monitoring.' },
  { title:'Smart Agriculture', desc:'Soil, irrigation, livestock tracking, and automation.' }
];

const productsAr = [
  { title:'ركين فليت', desc:'منصة متكاملة لإدارة وتتبع الأساطيل والأصول للمؤسسات.' },
  { title:'مواقف ذكية', desc:'أنظمة دخول بالمركبات (ANPR)، إدارة الزوار، وتوجيه مواقف parking.' },
  { title:'البيئة والحساسات', desc:'مراقبة الحرارة، الرطوبة، وجودة الهواء للمستودعات والمصانع وسلاسل التبريد.' },
  { title:'الزراعة الذكية', desc:'حلول تربة وري وتتبع مواشي لتحويل المزارع إلى منظومات رقمية ذكية.' }
];

export default function Products() {
  const { lang } = useLang();
  const list = lang === 'ar' ? productsAr : productsEn;

  return (
    <section className="page">
      <h1>{lang === 'ar' ? 'المنتجات' : 'Products'}</h1>
      <p>
        {lang === 'ar'
          ? 'باقة من المنتجات والحلول الذكية التي تقدمها ركين.'
          : 'Flagship smart systems and IoT products by Rakeen.'}
      </p>
      <div className="card-grid">
        {list.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}