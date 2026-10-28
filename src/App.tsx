import { useState } from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from './config/shop';
import './App.css';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'mr' | 'hi'>('en');

  // WhatsApp click-to-chat links
  const heroWhatsAppUrl = buildWhatsAppLink(
    `Hello ${SHOP_CONFIG.name} (Shahada), I am visiting your website and would like to check counter price and stock availability.`
  );

  const getProblemWhatsAppUrl = (problemName: string) =>
    buildWhatsAppLink(
      `Hello ${SHOP_CONFIG.name} (Shahada), I need assistance with: ${problemName}. Please share availability and estimated counter quotation.`
    );

  return (
    <div className={`app-wrapper ${currentLang === 'mr' || currentLang === 'hi' ? 'lang-devanagari' : ''}`}>
      {/* 1. Header with Brand, Shahada Focus & Language Selector */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand-badge" aria-label={`${SHOP_CONFIG.name} Home`}>
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

          <div className="header-right">
            {/* Multilingual Selector [EN | मराठी | हि] */}
            <div className="lang-indicator" role="group" aria-label="Language selection">
              <button
                type="button"
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => setCurrentLang('en')}
                aria-pressed={currentLang === 'en'}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === 'mr' ? 'active' : ''}`}
                onClick={() => setCurrentLang('mr')}
                aria-pressed={currentLang === 'mr'}
              >
                मराठी
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === 'hi' ? 'active' : ''}`}
                onClick={() => setCurrentLang('hi')}
                aria-pressed={currentLang === 'hi'}
              >
                हि
              </button>
            </div>

            {/* Direct Header WhatsApp Action */}
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="Direct WhatsApp Enquiry"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* 2. Hero Section — Alternative A (Precision Workshop Authority) */}
        <section className="hero-baseline" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Location, Headline & CTAs */}
              <div>
                <div className="hero-eyebrow">
                  <span className="badge badge-cyan">
                    📍 {SHOP_CONFIG.city.toUpperCase()}, DIST. {SHOP_CONFIG.district.toUpperCase()} • WORKSHOP &amp; COUNTER
                  </span>
                </div>

                <h1 id="hero-title" className="hero-heading">
                  Mobile Hardware. <br />
                  <span className="hero-accent">Handled with Precision.</span>
                </h1>

                <p className="hero-description">
                  Tested display folders, pure cobalt batteries, and component-level repairs in {SHOP_CONFIG.city}. Direct counter quotations with zero hidden fees.
                </p>

                <div className="hero-actions">
                  <a
                    href={heroWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <span>Check Price on WhatsApp</span>
                    <span aria-hidden="true">💬</span>
                  </a>

                  <a href="#quick-problems" className="btn btn-secondary">
                    <span>Explore Diagnostics</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                {/* Technical Reassurance Chips */}
                <div className="hero-specs-row">
                  <div className="spec-item">
                    <span className="spec-dot" aria-hidden="true"></span>
                    <span>Bench-Tested Displays</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-dot" aria-hidden="true"></span>
                    <span>Safe Dual-IC Cells</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-dot" aria-hidden="true"></span>
                    <span>Technician Wholesale Tiers</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hardware Bench Quality Card */}
              <div className="bench-card">
                <div className="bench-card-head">
                  <span className="bench-card-title">Hardware Quality &amp; Bench Status</span>
                  <span className="badge badge-green">Counter Open</span>
                </div>

                <div className="bench-visual-box">
                  <div className="bench-visual-title">Display &amp; Power Diagnostics</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Frame alignment &bull; 90Hz touch pass-through &bull; Pure cobalt chemistry
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
                    <span className="bench-spec-val" style={{ color: 'var(--accent-amber)' }}>30 &ndash; 45 Minutes</span>
                  </div>
                  <div className="bench-spec-row">
                    <span className="bench-spec-label">Technician Supply:</span>
                    <span className="bench-spec-val" style={{ color: 'var(--accent-gold)' }}>Bulk Box Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Section 1: Quick Problem Selector — Alternative B (Warm Ivory Surface) */}
        <section id="quick-problems" className="problem-selector-section" aria-labelledby="selector-heading">
          <div className="container">
            <div className="section-head">
              <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
                Instant Counter Routing
              </span>
              <h2 id="selector-heading">What do you need assistance with today?</h2>
              <p>Tap your smartphone&apos;s symptom for immediate counter availability and quotation:</p>
            </div>

            <div className="tiles-grid">
              {/* Tile 1: Screen */}
              <div className="diagnostic-tile">
                <div>
                  <div className="tile-icon" aria-hidden="true">📱</div>
                  <h3 className="tile-title">Screen / Touch Display</h3>
                  <p className="tile-desc">
                    Cracked outer glass, touch dead zones, black ink spots, or flickering lines.
                  </p>
                </div>
                <a
                  href={getProblemWhatsAppUrl('Screen / Touch Display Replacement')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-action-link"
                >
                  <span>Check Display Stock &rarr;</span>
                </a>
              </div>

              {/* Tile 2: Battery */}
              <div className="diagnostic-tile">
                <div>
                  <div className="tile-icon" aria-hidden="true">🔋</div>
                  <h3 className="tile-title">Battery Drain &amp; Backup</h3>
                  <p className="tile-desc">
                    Phone dies in 2 hours, unexpected shutdowns at 20%, or swollen back cover.
                  </p>
                </div>
                <a
                  href={getProblemWhatsAppUrl('Battery Drain & Replacement')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-action-link"
                >
                  <span>Check Battery Stock &rarr;</span>
                </a>
              </div>

              {/* Tile 3: Charging */}
              <div className="diagnostic-tile">
                <div>
                  <div className="tile-icon" aria-hidden="true">🔌</div>
                  <h3 className="tile-title">Charging Port / Sub-Board</h3>
                  <p className="tile-desc">
                    Cable is loose, fast charging not detected, mic not working during calls.
                  </p>
                </div>
                <a
                  href={getProblemWhatsAppUrl('Charging Port Micro-Soldering')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-action-link"
                >
                  <span>Diagnose Port Fix &rarr;</span>
                </a>
              </div>

              {/* Tile 4: Wholesale */}
              <div className="diagnostic-tile">
                <div>
                  <div className="tile-icon" aria-hidden="true">📦</div>
                  <h3 className="tile-title">Technician Wholesale</h3>
                  <p className="tile-desc">
                    Box lot folders, tested battery packs, and sub-boards for repair shops.
                  </p>
                </div>
                <a
                  href={getProblemWhatsAppUrl('Technician Wholesale Rate Card')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-action-link"
                >
                  <span>Get Wholesale Rates &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Mobile Sticky Bottom Action Bar (Thumb zone on smartphones) */}
      <div className="mobile-sticky-dock" aria-label="Direct Mobile Actions">
        <a
          href={`tel:${SHOP_CONFIG.phone}`}
          className="btn btn-phone"
          aria-label="Call Shop Counter"
        >
          <span>📞 Call</span>
        </a>
        <a
          href={heroWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <span>💬 WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
