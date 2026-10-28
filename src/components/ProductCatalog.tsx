import React, { useState, useId } from 'react';
import { PRODUCTS } from '../data/products';
import { SHOP_CONFIG, buildWhatsAppLink } from '../config/shop';
import type { Language, ProductCategory } from '../types/catalog';
import { TRANSLATIONS } from '../i18n/translations';

interface ProductCatalogProps {
  currentLang: Language;
  onOpenEnquiry?: (item: { title: string; sku?: string; compatibility?: string }) => void;
}

type BrandFilter = 'all' | 'xiaomi' | 'samsung' | 'apple' | 'realme' | 'vivo' | 'universal';

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ currentLang, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputId = useId();

  const t = TRANSLATIONS[currentLang];

  const brandPills: { id: BrandFilter; label: string }[] = [
    { id: 'all', label: t.catalogAllBrands },
    { id: 'xiaomi', label: 'Xiaomi / Redmi' },
    { id: 'samsung', label: 'Samsung' },
    { id: 'apple', label: 'Apple iPhone' },
    { id: 'realme', label: 'Realme' },
    { id: 'vivo', label: 'Vivo' },
    { id: 'universal', label: 'Universal / GaN' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    // 1. Category Filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }

    // 2. Brand Filter
    if (selectedBrand !== 'all' && item.brand !== selectedBrand) {
      return false;
    }

    // 3. Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchSku = item.sku.toLowerCase().includes(q);
      const matchCompat = item.modelCompatibility.toLowerCase().includes(q);
      const matchSpecs = item.specs.some((s) => s.toLowerCase().includes(q));

      if (!matchName && !matchSku && !matchCompat && !matchSpecs) {
        return false;
      }
    }

    return true;
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

  const getCustomPartWhatsAppUrl = (query: string) => {
    const text = [
      `Hello ${SHOP_CONFIG.name} (${SHOP_CONFIG.city}),`,
      `I searched your online catalog for: "${query || 'Specific Spare Part'}", but couldn't find an exact match.`,
      ``,
      `Please check your Shahada counter stock or wholesale shipment for my model.`
    ].join('\n');
    return buildWhatsAppLink(text);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
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

        {/* Search & Quick Filter Workbench Toolbar */}
        <div className="catalog-toolbar">
          <div className="search-bar-wrapper">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              id={searchInputId}
              type="search"
              className="catalog-search-input"
              placeholder={t.catalogSearchPlaceholder}
              aria-label={t.catalogSearchLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label={t.catalogClearSearch}
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Brand Filter Pills */}
          <div className="brand-filter-bar" role="group" aria-label="Filter by brand">
            {brandPills.map((pill) => (
              <button
                key={pill.id}
                type="button"
                className={`brand-pill ${selectedBrand === pill.id ? 'active' : ''}`}
                onClick={() => setSelectedBrand(pill.id)}
                aria-pressed={selectedBrand === pill.id}
              >
                {pill.label}
              </button>
            ))}
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

          {/* Active Filter Metrics */}
          <div className="filter-status-row">
            <span className="results-count">
              <span className="count-bullet" aria-hidden="true">•</span>
              {filteredProducts.length} {t.catalogResultsCount}
            </span>
            {(searchQuery || selectedBrand !== 'all' || selectedCategory !== 'all') && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleClearFilters}
              >
                {t.catalogClearSearch} ↺
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid or Empty State */}
        {filteredProducts.length > 0 ? (
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

                  <div className="product-card-actions">
                    <a
                      href={getProductWhatsAppUrl(product.name, product.sku, product.modelCompatibility)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ flex: 1 }}
                    >
                      <span>{t.enquirePriceBtn}</span>
                      <span aria-hidden="true">💬</span>
                    </a>
                    {onOpenEnquiry && (
                      <button
                        type="button"
                        className="btn-card-quote"
                        onClick={() =>
                          onOpenEnquiry({
                            title: product.name,
                            sku: product.sku,
                            compatibility: product.modelCompatibility,
                          })
                        }
                        title="Open Counter Quotation Form"
                      >
                        📋
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="catalog-empty-card">
            <span className="empty-icon" aria-hidden="true">🔎</span>
            <h3 className="empty-title">{t.catalogNoResults}</h3>
            <p className="empty-desc">
              We carry 1,500+ folder displays, batteries, and connectors at our physical workshop in Shahada. Send your model number directly to our counter technician on WhatsApp for an immediate stock check.
            </p>
            <div className="empty-actions">
              <a
                href={getCustomPartWhatsAppUrl(searchQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>{t.catalogRequestPartBtn}</span>
                <span aria-hidden="true">💬</span>
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleClearFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
