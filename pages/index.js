import { useLang } from '../context/LangContext';

export default function Home() {
  const { lang } = useLang();

  if (lang === 'ar') {
    return (
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badges">
            <span className="badge">إنترنت الأشياء · المدن الذكية · الذكاء الاصطناعي</span>
            <span className="badge">مدعوم من ركين</span>
          </div>
          <h1>
            بنية تحتية مترابطة،<br />
            بتصميم <span style={{ color: '#f97316' }}>ركين</span>.
          </h1>
          <p>
            صفحة هبوط حديثة لعرض حلول إنترنت الأشياء، أنظمة التتبع، ومنصات المدن الذكية
            وتحليلات البيانات، بهوية ركين التقنية.
          </p>
          <div className="cta-row">
            <a href="/services" className="btn-primary">استكشف الخدمات</a>
            <a href="/products" className="btn-ghost">تعرّف على المنتجات</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="logo-orbit">
            <div className="logo-core">
              <img src="/logo.png" alt="Logo" className="logo-img" />
            </div>
            <div className="orbit-dot" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badges">
          <span className="badge">IoT · Smart City · AI</span>
          <span className="badge">Powered by Rakeen</span>
        </div>
        <h1>
          Connected Infrastructure,<br />
          Designed by <span style={{color:'#f97316'}}>Rakeen</span>.
        </h1>
        <p>
          A modern landing page for smart systems, IoT solutions, fleet platforms,
          and AI analytics — built for Rakeen.
        </p>
        <div className="cta-row">
          <a href="/services" className="btn-primary">Explore Services</a>
          <a href="/products" className="btn-ghost">View Products</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="logo-orbit">
          <div className="logo-core">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </div>
          <div className="orbit-dot" />
        </div>
      </div>
    </section>
  );
}