import React from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface MobileDockProps {
  currentLang: Language;
}

export const MobileDock: React.FC<MobileDockProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const quickWhatsAppUrl = buildWhatsAppLink(
    `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}), I am browsing your website and want to check counter stock and rates.`
  );

  return (
    <div className="mobile-sticky-dock" aria-label="Direct Mobile Actions">
      <a
        href={`tel:${SHOP_CONFIG.phone}`}
        className="btn btn-phone"
        aria-label="Call Shop Counter"
      >
        <span>{t.mobileCall}</span>
      </a>
      <a
        href={quickWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <span>{t.mobileWhatsApp}</span>
      </a>
    </div>
  );
};
