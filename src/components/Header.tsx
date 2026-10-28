import React, { useState, useEffect } from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const headerWhatsAppUrl = buildWhatsAppLink(
    `Hello ${SHOP_CONFIG.name} (Shahada), I am visiting your website and have an enquiry.`
  );

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Identity */}
        <a href="#" className="brand-badge" onClick={closeMenu} aria-label={`${SHOP_CONFIG.name} Home`}>
          <div className="brand-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <div>
            <span className="brand-title">{SHOP_CONFIG.name}</span>
            <span className="brand-subtitle">{SHOP_CONFIG.city} Spares &amp; Lab</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list" style={{ display: 'flex', gap: 'var(--space-6)', listStyle: 'none' }}>
            <li><a href="#quick-problems" className="nav-link">{t.problemHeading.split('?')[0]}</a></li>
            <li><a href="#products" className="nav-link">{t.navProducts}</a></li>
            <li><a href="#repairs" className="nav-link">{t.navRepairs}</a></li>
            <li><a href="#wholesale" className="nav-link">{t.navWholesale}</a></li>
            <li><a href="#location" className="nav-link">{t.navLocation}</a></li>
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-right">
          {/* Multilingual Selector [EN | मराठी | हि] */}
          <div className="lang-indicator" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-pressed={currentLang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'mr' ? 'active' : ''}`}
              onClick={() => onLanguageChange('mr')}
              aria-pressed={currentLang === 'mr'}
            >
              मराठी
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'hi' ? 'active' : ''}`}
              onClick={() => onLanguageChange('hi')}
              aria-pressed={currentLang === 'hi'}
            >
              हि
            </button>
          </div>

          {onOpenQuote && (
            <button
              type="button"
              className="btn btn-secondary btn-sm header-cta-desktop"
              onClick={onOpenQuote}
            >
              <span>{currentLang === 'mr' ? 'कोटेशन मिळवा' : currentLang === 'hi' ? 'कोटेशन पाएं' : 'Get Quote'}</span>
            </button>
          )}

          {/* Desktop WhatsApp Action */}
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm header-cta-desktop"
            aria-label="Direct WhatsApp Enquiry"
          >
            <span>{t.navWhatsApp}</span>
          </a>

          {/* Mobile Drawer Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          <div className="container mobile-drawer-inner">
            <ul className="mobile-nav-links">
              <li><a href="#quick-problems" onClick={closeMenu}>{t.problemHeading.split('?')[0]}</a></li>
              <li><a href="#products" onClick={closeMenu}>{t.navProducts}</a></li>
              <li><a href="#repairs" onClick={closeMenu}>{t.navRepairs}</a></li>
              <li><a href="#wholesale" onClick={closeMenu}>{t.navWholesale}</a></li>
              <li><a href="#location" onClick={closeMenu}>{t.navLocation}</a></li>
            </ul>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <a
                href={headerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
                onClick={closeMenu}
              >
                <span>{t.navWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
