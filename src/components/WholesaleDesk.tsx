import React, { useState } from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface WholesaleDeskProps {
  currentLang: Language;
}

export const WholesaleDesk: React.FC<WholesaleDeskProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [formData, setFormData] = useState({
    shopName: '',
    town: '',
    partsNeeded: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWholesaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}),`,
      `I want to register a Wholesale / Bulk Parts Enquiry:`,
      `• Workshop / Shop Name: ${formData.shopName || 'Mobile Repair Shop'}`,
      `• Town / City: ${formData.town || SHOP_CONFIG.city}`,
      `• Parts & Quantities Needed: ${formData.partsNeeded || 'Bulk spare parts request'}`,
      ``,
      `Please share your technician discount price list and today's availability.`
    ].join('\n');

    const url = buildWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="wholesale" className="wholesale-section" aria-labelledby="wholesale-heading">
      <div className="container">
        <div className="wholesale-box">
          <div className="wholesale-grid">
            {/* Left: Wholesale Advantages */}
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
                {t.wholesaleBadge}
              </span>
              <h2 id="wholesale-heading" className="wholesale-title">
                {t.wholesaleTitle}
              </h2>
              <p className="wholesale-desc">{t.wholesaleSubtitle}</p>

              <div className="wholesale-advantages">
                <div className="advantage-item">
                  <span className="advantage-icon" aria-hidden="true">📦</span>
                  <span>{t.wholesaleAdvantage1}</span>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon" aria-hidden="true">🏷️</span>
                  <span>{t.wholesaleAdvantage2}</span>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon" aria-hidden="true">🚌</span>
                  <span>{t.wholesaleAdvantage3}</span>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon" aria-hidden="true">⚡</span>
                  <span>{t.wholesaleAdvantage4}</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="wholesale-form-card">
              <h3 className="form-title">{t.wholesaleFormTitle}</h3>
              <form onSubmit={handleWholesaleSubmit}>
                <div className="form-group">
                  <label htmlFor="shopName" className="form-label">
                    {t.fieldShopName}
                  </label>
                  <input
                    type="text"
                    id="shopName"
                    name="shopName"
                    required
                    placeholder="e.g. Omkar Mobile Repairing"
                    value={formData.shopName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="town" className="form-label">
                    {t.fieldTown}
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    required
                    placeholder="e.g. Taloda / Shirpur / Shahada"
                    value={formData.town}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="partsNeeded" className="form-label">
                    {t.fieldPartsNeeded}
                  </label>
                  <textarea
                    id="partsNeeded"
                    name="partsNeeded"
                    rows={3}
                    required
                    placeholder="e.g. 5x Redmi Note 10 Folders, 2x Samsung M31 Batteries..."
                    value={formData.partsNeeded}
                    onChange={handleChange}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
                  <span>{t.btnSendWholesale}</span>
                  <span aria-hidden="true">💬</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
