
import { useLang } from '../context/LangContext';

export default function Contact() {
  const { lang } = useLang();

  const labels = lang === 'ar'
    ? {
        title: 'تواصل معنا',
        subtitle: 'املأ النموذج أدناه وسيتواصل معك فريق ركين في أقرب وقت.',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الجوال (اختياري)',
        company: 'الجهة أو الشركة',
        message: 'وصف مختصر للاحتياج أو المشروع',
        submit: 'إرسال الطلب'
      }
    : {
        title: 'Contact',
        subtitle: 'Fill in the form below and the Rakeen team will get back to you shortly.',
        name: 'Full Name',
        email: 'Email',
        phone: 'Mobile (optional)',
        company: 'Organization / Company',
        message: 'Short description of your requirement or project',
        submit: 'Send Request'
      };

  return (
    <section className="page">
      <h1>{labels.title}</h1>
      <p>{labels.subtitle}</p>

      <form
        className="contact-form"
        action="mailto:info@rakeen-smart.com"
        method="post"
        encType="text/plain"
      >
        <div className="form-row">
          <label>
            {labels.name}
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            {labels.email}
            <input type="email" name="email" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            {labels.phone}
            <input type="text" name="phone" />
          </label>
        </div>
        <div className="form-row">
          <label>
            {labels.company}
            <input type="text" name="company" />
          </label>
        </div>
        <div className="form-row">
          <label>
            {labels.message}
            <textarea name="message" rows="4" required />
          </label>
        </div>
        <button type="submit" className="btn-primary" style={{ marginTop: '12px' }}>
          {labels.submit}
        </button>
      </form>
    </section>
  );
}
