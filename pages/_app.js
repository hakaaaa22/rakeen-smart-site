import '@/styles/globals.css';
import Link from 'next/link';
import { LangContext } from '../context/LangContext';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      <div className="app">
        <header className="navbar">
          <div className="nav-left">
            <img src="/logo.png" alt="Logo" className="nav-logo" />
            <div className="nav-title">Rakeen Smart Systems</div>
          </div>
          
          <nav className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/products" className="nav-link">Products</Link>
            <Link href="/solutions" className="nav-link">Solutions</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="nav-actions">
            <button onClick={toggleLang} className="lang-toggle">
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </header>
        <main className="main">
          <Component {...pageProps} />
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Rakeen Smart Systems
        </footer>
      </div>
    </LangContext.Provider>
  );
}