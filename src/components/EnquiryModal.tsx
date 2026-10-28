import React, { useState, useEffect, useRef } from 'react';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language } from '../types/catalog';

export interface ModalContextItem {
  title: string;
  category?: string;
  sku?: string;
  compatibility?: string;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextItem?: ModalContextItem | null;
  currentLang: Language;
}

interface InnerFormProps {
  contextItem?: ModalContextItem | null;
  onClose: () => void;
  currentLang: Language;
}

const InnerEnquiryForm: React.FC<InnerFormProps> = ({ contextItem, onClose, currentLang }) => {
  const [customerName, setCustomerName] = useState('');
  const [deviceModel, setDeviceModel] = useState(() =>
    contextItem?.compatibility ? contextItem.compatibility.split('(')[0].trim() : ''
  );
  const [customerType, setCustomerType] = useState('Retail');
  const [notes, setNotes] = useState('');

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus first input on mount
    firstInputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parts = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}), I am sending an enquiry from your website:`,
      contextItem ? `• Selected Item: ${contextItem.title}` : `• General Inquiry`,
      contextItem?.sku ? `• SKU: ${contextItem.sku}` : null,
      deviceModel ? `• My Phone Model: ${deviceModel}` : null,
      customerName ? `• From: ${customerName}` : null,
      `• Customer Type: ${customerType}`,
      notes ? `• Question / Note: ${notes}` : null,
      ``,
      `Please let me know today's counter price and availability in Shahada.`
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppLink(parts);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  // Multilingual Modal Copy
  const modalLabels = {
    en: {
      tag: 'Direct WhatsApp Quotation',
      title: contextItem ? `Enquire: ${contextItem.title}` : 'Store Quotation & Parts Query',
      modelLabel: 'Your Phone Brand & Model',
      modelPlaceholder: 'e.g. Redmi Note 10 Pro / Samsung M31',
      nameLabel: 'Your Name (Optional)',
      namePlaceholder: 'e.g. Rahul Sharma',
      typeLabel: 'Enquiry Type',
      typeRetail: 'Retail Customer (Single Part / Repair)',
      typeTech: 'Mobile Repair Technician / Bulk Order',
      typeShop: 'Electronics Retail Shopkeeper',
      notesLabel: 'Additional Note / Symptom (Optional)',
      notesPlaceholder: 'e.g. Cracked screen, please check if in stock today and share fitting charges...',
      noPaymentNotice: 'No online payment: We will confirm counter price and stock directly with you on WhatsApp.',
      cancelBtn: 'Cancel',
      submitBtn: 'Send to WhatsApp',
    },
    mr: {
      tag: 'थेट व्हॉट्सअ‍ॅप चौकशी',
      title: contextItem ? `चौकशी: ${contextItem.title}` : 'काउंटर कोटेशन व स्पेअर्स चौकशी',
      modelLabel: 'आपल्या मोबाईलचे नाव व मॉडेल',
      modelPlaceholder: 'उदा. रेडमी नोट १० प्रो / सॅमसंग M31',
      nameLabel: 'आपले नाव (पर्यायी)',
      namePlaceholder: 'उदा. राहुल शर्मा',
      typeLabel: 'ग्राहक प्रकार',
      typeRetail: 'किरकोळ ग्राहक (एक नग / रिपेअरिंग)',
      typeTech: 'मोबाईल मेकॅनिक / होलसेल ऑर्डर',
      typeShop: 'इलेक्ट्रॉनिक्स दुकानदार',
      notesLabel: 'काही विशेष अडचण / प्रश्न',
      notesPlaceholder: 'उदा. स्क्रीन फुटली आहे, आज काउंटरवर उपलब्ध आहे का आणि बसवून मिळण्याचा खर्च किती होईल?',
      noPaymentNotice: 'सूचना: कोणतेही ऑनलाईन पेमेंट घेतले जात नाही. किंमत व उपलब्धता व्हॉट्सअ‍ॅपवर निश्चित केली जाईल.',
      cancelBtn: 'रद्द करा',
      submitBtn: 'व्हॉट्सअ‍ॅपवर पाठवा',
    },
    hi: {
      tag: 'सीधे व्हाट्सअ‍ॅप पूछताछ',
      title: contextItem ? `पूछताछ: ${contextItem.title}` : 'काउंटर कोटेशन व स्पेयर जांच',
      modelLabel: 'आपके मोबाइल का ब्रांड व मॉडल',
      modelPlaceholder: 'उदा. रेडमी नोट १० प्रो / सैमसंग M31',
      nameLabel: 'आपका नाम (वैकल्पिक)',
      namePlaceholder: 'उदा. राहुल शर्मा',
      typeLabel: 'ग्राहक प्रकार',
      typeRetail: 'खुदरा ग्राहक (एक पीस / रिपेयर)',
      typeTech: 'मोबाइल रिपेयर तकनीशियन / थोक ऑर्डर',
      typeShop: 'इलेक्ट्रॉनिक्स दुकानदार',
      notesLabel: 'अतिरिक्त सवाल / समस्या',
      notesPlaceholder: 'उदा. स्क्रीन टूटी है, आज काउंटर पर स्टॉक व फिटिंग चार्ज बताएं...',
      noPaymentNotice: 'सूचना: कोई ऑनलाइन पेमेंट नहीं लिया जाता। सही रेट और उपलब्धता सीधे व्हाट्सअ‍ॅप पर बताई जाएगी।',
      cancelBtn: 'रद्द करें',
      submitBtn: 'व्हाट्सअ‍ॅप पर भेजें',
    },
  }[currentLang];

  return (
    <>
      {/* Header */}
      <div className="modal-header">
        <div>
          <span className="badge badge-green">{modalLabels.tag}</span>
          <h2 id="modal-title" className="modal-title">
            {modalLabels.title}
          </h2>
        </div>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close enquiry modal"
        >
          ✕
        </button>
      </div>

      {/* Selected Context Item Pill */}
      {contextItem && (
        <div className="modal-item-highlight">
          <span className="item-label">Part / Service:</span>
          <strong>{contextItem.title}</strong>
          {contextItem.sku && <span className="item-sku">SKU: {contextItem.sku}</span>}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="form-group">
          <label htmlFor="deviceModel" className="form-label">
            {modalLabels.modelLabel} <span style={{ color: 'var(--accent-cyan)' }}>*</span>
          </label>
          <input
            ref={firstInputRef}
            type="text"
            id="deviceModel"
            required
            placeholder={modalLabels.modelPlaceholder}
            value={deviceModel}
            onChange={(e) => setDeviceModel(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="customerName" className="form-label">
            {modalLabels.nameLabel}
          </label>
          <input
            type="text"
            id="customerName"
            placeholder={modalLabels.namePlaceholder}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="customerType" className="form-label">
            {modalLabels.typeLabel}
          </label>
          <select
            id="customerType"
            value={customerType}
            onChange={(e) => setCustomerType(e.target.value)}
            className="form-input"
            style={{ cursor: 'pointer' }}
          >
            <option value="Retail Customer">{modalLabels.typeRetail}</option>
            <option value="Mobile Technician">{modalLabels.typeTech}</option>
            <option value="Retail Shopkeeper">{modalLabels.typeShop}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes" className="form-label">
            {modalLabels.notesLabel}
          </label>
          <textarea
            id="notes"
            rows={2}
            placeholder={modalLabels.notesPlaceholder}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="form-input"
          ></textarea>
        </div>

        <div className="modal-notice">
          <span aria-hidden="true">🔒</span>
          <span>{modalLabels.noPaymentNotice}</span>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            {modalLabels.cancelBtn}
          </button>
          <button type="submit" className="btn btn-whatsapp" style={{ flex: 1 }}>
            <span>{modalLabels.submitBtn}</span>
            <span aria-hidden="true">💬</span>
          </button>
        </div>
      </form>
    </>
  );
};

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  contextItem,
  currentLang,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle Escape key & Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
      data-testid="modal-backdrop"
    >
      <div
        ref={modalRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        data-testid="enquiry-modal"
      >
        <InnerEnquiryForm
          key={contextItem?.sku || contextItem?.title || 'general-modal'}
          contextItem={contextItem}
          onClose={onClose}
          currentLang={currentLang}
        />
      </div>
    </div>
  );
};
