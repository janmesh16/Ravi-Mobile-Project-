import React, { useState } from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface RepairEstimatorProps {
  currentLang: Language;
}

type DeviceBrand = 'xiaomi' | 'samsung' | 'apple' | 'realme' | 'vivo' | 'oppo' | 'oneplus';
type IssueType = 'screen' | 'battery' | 'charging' | 'water' | 'camera' | 'board';
type QualityGrade = 'original' | 'diamond';

interface EstimateDetail {
  minPrice: number;
  maxPrice: number;
  turnaround: string;
  warranty: string;
}

export const RepairEstimator: React.FC<RepairEstimatorProps> = ({ currentLang }) => {
  const [selectedBrand, setSelectedBrand] = useState<DeviceBrand>('xiaomi');
  const [selectedIssue, setSelectedIssue] = useState<IssueType>('screen');
  const [selectedGrade, setSelectedGrade] = useState<QualityGrade>('original');

  const t = TRANSLATIONS[currentLang];

  const brandOptions: { id: DeviceBrand; name: string; icon: string }[] = [
    { id: 'xiaomi', name: 'Xiaomi / Redmi / POCO', icon: '📱' },
    { id: 'samsung', name: 'Samsung Galaxy (M/A/S)', icon: '📱' },
    { id: 'apple', name: 'Apple iPhone', icon: '🍎' },
    { id: 'realme', name: 'Realme / Narzo', icon: '⚡' },
    { id: 'vivo', name: 'Vivo / iQOO', icon: '💎' },
    { id: 'oppo', name: 'Oppo / Reno', icon: '✨' },
    { id: 'oneplus', name: 'OnePlus / Nord', icon: '🚀' },
  ];

  const issueOptions: { id: IssueType; label: string; icon: string }[] = [
    { id: 'screen', label: t.issueScreen, icon: '📱' },
    { id: 'battery', label: t.issueBattery, icon: '🔋' },
    { id: 'charging', label: t.issueCharging, icon: '🔌' },
    { id: 'water', label: t.issueWater, icon: '💧' },
    { id: 'camera', label: t.issueCamera, icon: '📷' },
    { id: 'board', label: t.issueBoard, icon: '⚡' },
  ];

  const calculateEstimate = (): EstimateDetail => {
    // Screen replacements
    if (selectedIssue === 'screen') {
      if (selectedBrand === 'apple') {
        return selectedGrade === 'original'
          ? { minPrice: 3800, maxPrice: 6500, turnaround: '45 – 60 Mins', warranty: '90 Days Counter Warranty' }
          : { minPrice: 1900, maxPrice: 2800, turnaround: '30 – 45 Mins', warranty: '30 Days Testing Warranty' };
      }
      if (selectedBrand === 'samsung') {
        return selectedGrade === 'original'
          ? { minPrice: 2200, maxPrice: 4200, turnaround: '30 – 45 Mins', warranty: '90 Days Counter Warranty' }
          : { minPrice: 1200, maxPrice: 1750, turnaround: '30 – 40 Mins', warranty: '30 Days Testing Warranty' };
      }
      // Xiaomi, Realme, Vivo, Oppo, OnePlus
      return selectedGrade === 'original'
        ? { minPrice: 1850, maxPrice: 2800, turnaround: '30 – 40 Mins', warranty: '90 Days Counter Warranty' }
        : { minPrice: 950, maxPrice: 1450, turnaround: '25 – 35 Mins', warranty: '30 Days Testing Warranty' };
    }

    // Battery replacements
    if (selectedIssue === 'battery') {
      if (selectedBrand === 'apple') {
        return selectedGrade === 'original'
          ? { minPrice: 2200, maxPrice: 3200, turnaround: '30 – 40 Mins', warranty: '6 Months Pure Cobalt Warranty' }
          : { minPrice: 1250, maxPrice: 1650, turnaround: '25 – 35 Mins', warranty: '30 Days Testing Warranty' };
      }
      if (selectedBrand === 'samsung') {
        return selectedGrade === 'original'
          ? { minPrice: 1350, maxPrice: 1850, turnaround: '25 – 35 Mins', warranty: '6 Months Pure Cobalt Warranty' }
          : { minPrice: 850, maxPrice: 1150, turnaround: '20 – 30 Mins', warranty: '30 Days Testing Warranty' };
      }
      return selectedGrade === 'original'
        ? { minPrice: 1150, maxPrice: 1600, turnaround: '25 – 35 Mins', warranty: '6 Months Pure Cobalt Warranty' }
        : { minPrice: 750, maxPrice: 950, turnaround: '20 – 30 Mins', warranty: '30 Days Testing Warranty' };
    }

    // Charging jack & sub-board
    if (selectedIssue === 'charging') {
      return {
        minPrice: selectedBrand === 'apple' ? 850 : 350,
        maxPrice: selectedBrand === 'apple' ? 1400 : 650,
        turnaround: '20 – 30 Mins',
        warranty: 'Direct Replacement Testing',
      };
    }

    // Water damage ultrasonic bath & short isolation
    if (selectedIssue === 'water') {
      return {
        minPrice: 450,
        maxPrice: 950,
        turnaround: '1 – 2 Hours',
        warranty: 'Bench Diagnosis Verified',
      };
    }

    // Camera glass / back glass housing
    if (selectedIssue === 'camera') {
      return {
        minPrice: selectedBrand === 'apple' ? 650 : 250,
        maxPrice: selectedBrand === 'apple' ? 1200 : 550,
        turnaround: '20 – 30 Mins',
        warranty: 'OEM Adhesive Seal Fit',
      };
    }

    // Motherboard short & dead phone IC diagnostic
    return {
      minPrice: 750,
      maxPrice: 1800,
      turnaround: 'Same Day / 24 Hours',
      warranty: 'Post-Repair Current Bench Test',
    };
  };

  const estimate = calculateEstimate();
  const selectedBrandObj = brandOptions.find((b) => b.id === selectedBrand);
  const selectedIssueObj = issueOptions.find((i) => i.id === selectedIssue);
  const gradeLabel = selectedGrade === 'original' ? t.gradeOriginal : t.gradeDiamond;

  const getWhatsAppEstimateUrl = () => {
    const text = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}),`,
      `I calculated an estimate on your website Repair Calculator:`,
      `• Brand: ${selectedBrandObj?.name}`,
      `• Component: ${selectedIssueObj?.label}`,
      `• Grade: ${gradeLabel}`,
      `• Estimated Price: ₹${estimate.minPrice.toLocaleString('en-IN')} – ₹${estimate.maxPrice.toLocaleString('en-IN')}`,
      `• Turnaround: ${estimate.turnaround}`,
      ``,
      `Please let me know counter slot availability and confirm exact price for my model.`
    ].join('\n');
    return buildWhatsAppLink(text);
  };

  return (
    <section id="estimator" className="estimator-section" aria-labelledby="estimator-heading">
      <div className="container">
        <div className="section-head-dark">
          <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
            {t.estimatorBadge}
          </span>
          <h2 id="estimator-heading" className="section-title-dark">
            {t.estimatorTitle}
          </h2>
          <p className="section-desc-dark">{t.estimatorSubtitle}</p>
        </div>

        <div className="estimator-grid">
          {/* Left Column: Interactive 3-Step Selectors */}
          <div className="estimator-controls-card">
            {/* Step 1: Smartphone Brand */}
            <div className="estimator-step-block">
              <label className="estimator-step-title">{t.estimatorStep1Brand}</label>
              <div className="brand-select-grid" role="radiogroup" aria-label="Select Brand">
                {brandOptions.map((brand) => (
                  <button
                    key={brand.id}
                    type="button"
                    className={`brand-choice-btn ${selectedBrand === brand.id ? 'active' : ''}`}
                    onClick={() => setSelectedBrand(brand.id)}
                    role="radio"
                    aria-checked={selectedBrand === brand.id}
                  >
                    <span className="brand-choice-icon" aria-hidden="true">{brand.icon}</span>
                    <span className="brand-choice-name">{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Component Issue */}
            <div className="estimator-step-block">
              <label className="estimator-step-title">{t.estimatorStep2Issue}</label>
              <div className="issue-select-grid" role="radiogroup" aria-label="Select Problem">
                {issueOptions.map((issue) => (
                  <button
                    key={issue.id}
                    type="button"
                    className={`issue-choice-btn ${selectedIssue === issue.id ? 'active' : ''}`}
                    onClick={() => setSelectedIssue(issue.id)}
                    role="radio"
                    aria-checked={selectedIssue === issue.id}
                  >
                    <span className="issue-choice-icon" aria-hidden="true">{issue.icon}</span>
                    <span className="issue-choice-text">{issue.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Quality Grade Tier */}
            <div className="estimator-step-block">
              <label className="estimator-step-title">{t.estimatorStep3Grade}</label>
              <div className="grade-choice-row" role="radiogroup" aria-label="Select Quality Grade">
                <button
                  type="button"
                  className={`grade-choice-card ${selectedGrade === 'original' ? 'active' : ''}`}
                  onClick={() => setSelectedGrade('original')}
                  role="radio"
                  aria-checked={selectedGrade === 'original'}
                >
                  <div className="grade-head">
                    <span className="grade-badge badge badge-cyan">Recommended</span>
                    <h4 className="grade-title">{t.gradeOriginal}</h4>
                  </div>
                  <p className="grade-desc">{t.gradeOriginalDesc}</p>
                </button>

                <button
                  type="button"
                  className={`grade-choice-card ${selectedGrade === 'diamond' ? 'active' : ''}`}
                  onClick={() => setSelectedGrade('diamond')}
                  role="radio"
                  aria-checked={selectedGrade === 'diamond'}
                >
                  <div className="grade-head">
                    <span className="grade-badge badge badge-amber">Budget Friendly</span>
                    <h4 className="grade-title">{t.gradeDiamond}</h4>
                  </div>
                  <p className="grade-desc">{t.gradeDiamondDesc}</p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Diagnostic Estimate Receipt Card */}
          <div className="estimator-result-card">
            <div className="estimate-header">
              <span className="badge badge-cyan">{t.estimatorEstimateTitle}</span>
              <div className="device-tag">
                <span className="tag-brand">{selectedBrandObj?.name}</span>
                <span className="tag-divider">/</span>
                <span className="tag-grade">{selectedGrade === 'original' ? 'OEM Grade' : 'Diamond Grade'}</span>
              </div>
            </div>

            <div className="estimate-price-box">
              <span className="price-label">{t.estimatorEstimatedRange}</span>
              <div className="price-display">
                <span className="price-currency">₹</span>
                <span className="price-digits">
                  {estimate.minPrice.toLocaleString('en-IN')} – {estimate.maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="estimate-specs-matrix">
              <div className="matrix-row">
                <span className="matrix-label">{t.estimatorTurnaroundLabel}:</span>
                <span className="matrix-val matrix-time">⏱ {estimate.turnaround}</span>
              </div>
              <div className="matrix-row">
                <span className="matrix-label">{t.estimatorWarrantyLabel}:</span>
                <span className="matrix-val matrix-warranty">🛡 {estimate.warranty}</span>
              </div>
            </div>

            <div className="estimate-perks">
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>{t.estimatorPerk1}</span>
              </div>
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>{t.estimatorPerk2}</span>
              </div>
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>{t.estimatorPerk3}</span>
              </div>
            </div>

            <div className="estimate-actions">
              <a
                href={getWhatsAppEstimateUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{t.estimatorBookWhatsAppBtn}</span>
                <span aria-hidden="true">💬</span>
              </a>

              <a
                href={`tel:${SHOP_CONFIG.phone}`}
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-2)' }}
              >
                <span>{t.estimatorCallCounterBtn}</span>
                <span aria-hidden="true">📞</span>
              </a>
            </div>

            <p className="estimate-disclaimer">{t.estimatorDisclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
