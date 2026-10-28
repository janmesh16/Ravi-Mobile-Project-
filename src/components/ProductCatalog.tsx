import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language, ProductCategory } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface ProductCatalogProps {
  currentLang: Language;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const t = TRANSLATIONS[currentLang];

  const filteredProducts = PRODUCTS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getProductWhatsAppUrl = (productName: string, sku: string, compatibility: string) => {
    const text = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}),`,
      `I am enquiring about this product from your website:`,
      `• Part: ${productName}`,
      `• SKU: ${sku}`,
      `• Compatible Models: ${compatibility}`,
      ``,
      `Please let me know today's counter price and availability in Shahada.`
    ].join('\n');
    return buildWhatsAppLink(text);
  };

  return (
    <section id="products" className="products-section" aria-labelledby="catalog-heading">
      <div className="container">
        <div className="section-head-dark">
          <span className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            {t.catalogBadge}
          </span>
          <h2 id="catalog-heading" className="section-title-dark">
            {t.catalogTitle}
          </h2>
          <p className="section-desc-dark">{t.catalogSubtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="category-filter-bar" role="tablist" aria-label="Product categories">
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
            role="tab"
            aria-selected={selectedCategory === 'all'}
          >
            {t.catAll}
          </button>
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'displays' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('displays')}
            role="tab"
            aria-selected={selectedCategory === 'displays'}
          >
            {t.catDisplays}
          </button>
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'batteries' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('batteries')}
            role="tab"
            aria-selected={selectedCategory === 'batteries'}
          >
            {t.catBatteries}
          </button>
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'chargers' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('chargers')}
            role="tab"
            aria-selected={selectedCategory === 'chargers'}
          >
            {t.catChargers}
          </button>
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'accessories' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('accessories')}
            role="tab"
            aria-selected={selectedCategory === 'accessories'}
          >
            {t.catAccessories}
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-top">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="product-sku">{product.sku}</span>
                  {product.badge && <span className="badge badge-cyan">{product.badge}</span>}
                </div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-compat-box">
                  <span className="compat-label">{t.compatibleModels}</span>
                  <span className="compat-text">{product.modelCompatibility}</span>
                </div>
              </div>

              <div className="product-card-bottom">
                <div className="specs-list">
                  <span className="specs-head">{t.specLabel}</span>
                  <ul>
                    {product.specs.map((spec, i) => (
                      <li key={i} className="spec-bullet">
                        <span className="bullet-cyan">&bull;</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-status-row">
                  <span className="stock-pill">
                    <span className="stock-dot"></span>
                    <span>{product.inStockStatus}</span>
                  </span>
                  <span className="price-note">{product.priceNote}</span>
                </div>

                <a
                  href={getProductWhatsAppUrl(product.name, product.sku, product.modelCompatibility)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', marginTop: 'var(--space-3)' }}
                >
                  <span>{t.enquirePriceBtn}</span>
                  <span aria-hidden="true">💬</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
