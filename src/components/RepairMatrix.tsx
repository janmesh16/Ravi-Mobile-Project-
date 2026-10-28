import React from 'react';
import { REPAIR_SERVICES } from '../data/services';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface RepairMatrixProps {
  currentLang: Language;
}

export const RepairMatrix: React.FC<RepairMatrixProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getRepairWhatsAppUrl = (serviceTitle: string, turnaround: string) => {
    const text = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}),`,
      `I need hardware repair service for my smartphone:`,
      `• Service: ${serviceTitle}`,
      `• Estimated Time: ${turnaround}`,
      ``,
      `Please let me know the diagnostic slot and cost estimate for my model.`
    ].join('\n');
    return buildWhatsAppLink(text);
  };

  const processSteps = [
    { title: t.step1Title, desc: t.step1Desc },
    { title: t.step2Title, desc: t.step2Desc },
    { title: t.step3Title, desc: t.step3Desc },
    { title: t.step4Title, desc: t.step4Desc },
  ];

  return (
    <section id="repairs" className="repairs-section" aria-labelledby="repairs-heading">
      <div className="container">
        <div className="section-head-dark">
          <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
            {t.repairBadge}
          </span>
          <h2 id="repairs-heading" className="section-title-dark">
            {t.repairTitle}
          </h2>
          <p className="section-desc-dark">{t.repairSubtitle}</p>
        </div>

        {/* 4-Step Hardware Process Bar */}
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card">
              <span className="process-step-num">0{index + 1}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Repair Services Cards Grid */}
        <div className="services-grid">
          {REPAIR_SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-header">
                <div>
                  <span className="badge badge-amber">{service.badge}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="turnaround-pill">
                  <span className="time-icon" aria-hidden="true">⏱</span>
                  <span>{service.turnaroundTime}</span>
                </div>
              </div>

              <p className="service-desc">{service.description}</p>

              <div className="service-highlights">
                <ul>
                  {service.highlights.map((h, i) => (
                    <li key={i} className="service-highlight-item">
                      <span className="check-icon" aria-hidden="true">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getRepairWhatsAppUrl(service.title, service.turnaroundTime)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: 'var(--space-4)' }}
              >
                <span>{t.enquireRepairBtn}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
