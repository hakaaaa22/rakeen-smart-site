import { useLang } from '../context/LangContext';

export default function About() {
  const { lang } = useLang();

  if (lang === 'ar') {
    return (
      <section className="page">
        <h1>من هي ركين؟</h1>
        <p>
          ركين للأنظمة الذكية تقدّم حلولاً متكاملة في إنترنت الأشياء، أنظمة التتبع،
          المدن الذكية، والبنية التحتية المعتمدة على البيانات، لخدمة القطاعات
          الحكومية والصناعية والتجارية.
        </p>
        <p>
          تم تصميم هذا الموقع كنقطة انطلاق مرنة يمكن تطويرها لاحقاً إلى بوابة عملاء،
          لوحات تحكم، ومنصات متكاملة لإدارة الأجهزة والبيانات في الزمن الحقيقي.
        </p>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>About Rakeen</h1>
      <p>
        Rakeen Smart Systems delivers modern IoT, GPS tracking, smart city
        integrations, and AI-powered infrastructure across enterprise and industrial sectors.
      </p>
      <p>
        This site is a clean Next.js base ready for expansion into portals,
        dashboards, and full smart-platform deployments.
      </p>
    </section>
  );
}