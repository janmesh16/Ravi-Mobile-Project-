import React from 'react';
import { SHOP_CONFIG } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="footer-brand-title">{SHOP_CONFIG.name}</span>
              <span className="footer-brand-sub">{SHOP_CONFIG.city} Spares &amp; Lab</span>
            </div>
            <p className="footer-desc">
              Customer enquiry and wholesale parts showcase for smartphone display folders, batteries, chargers, and hardware repair services in {SHOP_CONFIG.city}, Dist. {SHOP_CONFIG.district}, {SHOP_CONFIG.state}.
            </p>
            <div className="footer-towns">{t.footerTowns}</div>
          </div>

          <div>
            <h4 className="footer-head">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#quick-problems">Diagnostic Problems</a></li>
              <li><a href="#products">{t.navProducts}</a></li>
              <li><a href="#repairs">{t.navRepairs}</a></li>
              <li><a href="#wholesale">{t.navWholesale}</a></li>
              <li><a href="#location">{t.navLocation}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-notice-box">
          <p>{t.footerNotice}</p>
        </div>

        <div className="footer-bottom-bar">
          <span>&copy; {new Date().getFullYear()} {t.footerRights}</span>
          <span>Crafted with Precision for Shahada</span>
        </div>
      </div>
    </footer>
  );
};
