import React from 'react';
import { SHOP_CONFIG } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface LocationCardProps {
  currentLang: Language;
}

export const LocationCard: React.FC<LocationCardProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="location" className="location-section" aria-labelledby="location-heading">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
            {t.locationBadge}
          </span>
          <h2 id="location-heading">{t.locationTitle}</h2>
          <p>{t.locationSubtitle}</p>
        </div>

        <div className="location-grid">
          {/* Address Details Card */}
          <div className="location-detail-card">
            <div className="location-icon-box" aria-hidden="true">
              📍
            </div>
            <div>
              <h3 className="location-subhead">{t.counterAddressHeading}</h3>
              <address className="location-address">
                <strong>{SHOP_CONFIG.name}</strong><br />
                {SHOP_CONFIG.fullAddress}
              </address>
              <div className="location-landmark">
                <span>Landmark:</span> {SHOP_CONFIG.landmark}
              </div>
            </div>

            <div className="location-actions">
              <a
                href={SHOP_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>🗺️ {t.openGoogleMapsBtn}</span>
              </a>
              <a href={`tel:${SHOP_CONFIG.phone}`} className="btn btn-phone">
                <span>{t.callCounterBtn}</span>
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="location-hours-card">
            <div className="location-icon-box" aria-hidden="true">
              ⏱️
            </div>
            <div>
              <h3 className="location-subhead">{t.timingsHeading}</h3>
              <p className="hours-text">{SHOP_CONFIG.timing}</p>
              <div className="badge badge-green" style={{ marginTop: '12px' }}>
                Open All 7 Days for Counter Inquiries
              </div>
            </div>
            <p className="visit-note">
              Technicians and walk-in customers are welcome to test displays, inspect battery cells, or consult on board-level diagnostics directly at the counter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
