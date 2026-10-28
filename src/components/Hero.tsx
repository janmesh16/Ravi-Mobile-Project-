import React from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const heroWhatsAppUrl = buildWhatsAppLink(
    `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}), I am visiting your website and would like to check counter price and stock availability.`
  );

  return (
    <section className="hero-baseline" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Location, Headline & CTAs */}
          <div>
            <div className="hero-eyebrow">
              <span className="badge badge-cyan">{t.heroEyebrow}</span>
            </div>

            <h1 id="hero-title" className="hero-heading">
              {t.heroTitleLine1} <br />
              <span className="hero-accent">{t.heroTitleLine2}</span>
            </h1>

            <p className="hero-description">{t.heroSubtitle}</p>

            <div className="hero-actions">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>{t.heroCtaWhatsApp}</span>
                <span aria-hidden="true">💬</span>
              </a>

              <a href="#quick-problems" className="btn btn-secondary">
                <span>{t.heroCtaExplore}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Technical Reassurance Chips */}
            <div className="hero-specs-row">
              <div className="spec-item">
                <span className="spec-dot" aria-hidden="true"></span>
                <span>{t.heroSpecDisplays}</span>
              </div>
              <div className="spec-item">
                <span className="spec-dot" aria-hidden="true"></span>
                <span>{t.heroSpecBatteries}</span>
              </div>
              <div className="spec-item">
                <span className="spec-dot" aria-hidden="true"></span>
                <span>{t.heroSpecWholesale}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hardware Bench Quality Card */}
          <div className="bench-card">
            <div className="bench-card-head">
              <span className="bench-card-title">{t.heroBenchTitle}</span>
              <span className="badge badge-green">{t.heroCounterOpen}</span>
            </div>

            <div className="bench-visual-box">
              <div className="bench-visual-title">{t.heroBenchVisualTitle}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {t.heroBenchVisualDesc}
              </p>
            </div>

            <div className="bench-specs-list">
              <div className="bench-spec-row">
                <span className="bench-spec-label">Location:</span>
                <span className="bench-spec-val">{SHOP_CONFIG.city}, {SHOP_CONFIG.district}</span>
              </div>
              <div className="bench-spec-row">
                <span className="bench-spec-label">Operating Hours:</span>
                <span className="bench-spec-val">{SHOP_CONFIG.timing}</span>
              </div>
              <div className="bench-spec-row">
                <span className="bench-spec-label">Screen Turnaround:</span>
                <span className="bench-spec-val" style={{ color: 'var(--accent-amber)' }}>{t.heroBenchTurnaround}</span>
              </div>
              <div className="bench-spec-row">
                <span className="bench-spec-label">Technician Supply:</span>
                <span className="bench-spec-val" style={{ color: 'var(--accent-gold)' }}>{t.heroBenchSupply}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
