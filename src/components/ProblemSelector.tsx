import React from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface ProblemSelectorProps {
  currentLang: Language;
}

export const ProblemSelector: React.FC<ProblemSelectorProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getProblemWhatsAppUrl = (problemName: string) =>
    buildWhatsAppLink(
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}), I need assistance with: ${problemName}. Please let me know counter availability and estimated cost.`
    );

  return (
    <section id="quick-problems" className="problem-selector-section" aria-labelledby="selector-heading">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
            Instant Counter Routing
          </span>
          <h2 id="selector-heading">{t.problemHeading}</h2>
          <p>{t.problemSubheading}</p>
        </div>

        <div className="tiles-grid">
          {/* Tile 1: Screen */}
          <div className="diagnostic-tile">
            <div>
              <div className="tile-icon" aria-hidden="true">📱</div>
              <h3 className="tile-title">{t.problemScreenTitle}</h3>
              <p className="tile-desc">{t.problemScreenDesc}</p>
            </div>
            <a
              href={getProblemWhatsAppUrl('Screen / Touch Display Replacement')}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-action-link"
            >
              <span>{t.problemScreenAction}</span>
            </a>
          </div>

          {/* Tile 2: Battery */}
          <div className="diagnostic-tile">
            <div>
              <div className="tile-icon" aria-hidden="true">🔋</div>
              <h3 className="tile-title">{t.problemBatteryTitle}</h3>
              <p className="tile-desc">{t.problemBatteryDesc}</p>
            </div>
            <a
              href={getProblemWhatsAppUrl('Battery Drain & Health Replacement')}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-action-link"
            >
              <span>{t.problemBatteryAction}</span>
            </a>
          </div>

          {/* Tile 3: Charging */}
          <div className="diagnostic-tile">
            <div>
              <div className="tile-icon" aria-hidden="true">🔌</div>
              <h3 className="tile-title">{t.problemChargingTitle}</h3>
              <p className="tile-desc">{t.problemChargingDesc}</p>
            </div>
            <a
              href={getProblemWhatsAppUrl('Charging Port Micro-Soldering')}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-action-link"
            >
              <span>{t.problemChargingAction}</span>
            </a>
          </div>

          {/* Tile 4: Wholesale */}
          <div className="diagnostic-tile">
            <div>
              <div className="tile-icon" aria-hidden="true">📦</div>
              <h3 className="tile-title">{t.problemWholesaleTitle}</h3>
              <p className="tile-desc">{t.problemWholesaleDesc}</p>
            </div>
            <a
              href={getProblemWhatsAppUrl('Technician Wholesale Rate Card')}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-action-link"
            >
              <span>{t.problemWholesaleAction}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
