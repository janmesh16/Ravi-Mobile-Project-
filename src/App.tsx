import { useState, useEffect } from 'react';
import type { Language } from './types/catalog';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSelector } from './components/ProblemSelector';
import { ProductCatalog } from './components/ProductCatalog';
import { RepairMatrix } from './components/RepairMatrix';
import { WholesaleDesk } from './components/WholesaleDesk';
import { LocationCard } from './components/LocationCard';
import { Footer } from './components/Footer';
import { MobileDock } from './components/MobileDock';
import './App.css';

export default function App() {
  // Multilingual preference with localStorage persistence
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('rm_lang_pref');
    if (saved === 'mr' || saved === 'hi' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('rm_lang_pref', lang);
  };

  // Synchronize <html> lang attribute for screen readers & font scaling
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const isDevanagari = currentLang === 'mr' || currentLang === 'hi';

  return (
    <div className={`app-wrapper ${isDevanagari ? 'lang-devanagari' : ''}`}>
      {/* 1. Header with Brand, Shahada Focus & Language Switcher */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      <main id="main-content">
        {/* 2. Hero Section — Alternative A (Precision Workshop Authority) */}
        <Hero currentLang={currentLang} />

        {/* 3. Section 1: Quick Problem Selector — Alternative B (Warm Ivory Surface) */}
        <ProblemSelector currentLang={currentLang} />

        {/* 4. Section 2: Hardware Spares & Fast Chargers Showcase */}
        <ProductCatalog currentLang={currentLang} />

        {/* 5. Section 3: Precision Repair & Component Diagnostics */}
        <RepairMatrix currentLang={currentLang} />

        {/* 6. Section 4: Wholesale & Technician Partner Desk */}
        <WholesaleDesk currentLang={currentLang} />

        {/* 7. Section 5: Counter Location, Directions & Operating Hours */}
        <LocationCard currentLang={currentLang} />
      </main>

      {/* 8. Footer & Operational Transparency Notice */}
      <Footer currentLang={currentLang} />

      {/* 9. Mobile Persistent Thumb Dock (Call & WhatsApp) */}
      <MobileDock currentLang={currentLang} />
    </div>
  );
}
