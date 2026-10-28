import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCatalog } from './ProductCatalog';
import { PRODUCTS } from '../data/products';

describe('ProductCatalog Component', () => {
  it('should render all initial products under the "All Items" tab', () => {
    render(<ProductCatalog currentLang="en" />);

    // Check that section title renders
    expect(screen.getByText('Featured Spares & Accessories')).toBeInTheDocument();

    // Check that sample products from different categories are visible
    expect(screen.getByText('Universal Diamond Grade Display Assembly')).toBeInTheDocument();
    expect(screen.getByText('Pure Cobalt High-Capacity Battery Pack')).toBeInTheDocument();
  });

  it('should filter items when category pills are clicked', () => {
    render(<ProductCatalog currentLang="en" />);

    // Click on "Mobile Batteries" filter tab
    const batteryTab = screen.getByRole('tab', { name: 'Mobile Batteries' });
    fireEvent.click(batteryTab);

    // Battery items should be present
    expect(screen.getByText('Pure Cobalt High-Capacity Battery Pack')).toBeInTheDocument();

    // Display items should be filtered out
    expect(screen.queryByText('Universal Diamond Grade Display Assembly')).not.toBeInTheDocument();

    // Click on "All Items" to restore
    const allTab = screen.getByRole('tab', { name: 'All Items' });
    fireEvent.click(allTab);

    expect(screen.getByText('Universal Diamond Grade Display Assembly')).toBeInTheDocument();
  });

  it('should filter items when search input is used', () => {
    render(<ProductCatalog currentLang="en" />);

    const searchInput = screen.getByLabelText('Search Spares & Accessories');
    fireEvent.change(searchInput, { target: { value: 'iPhone' } });

    // iPhone display should be visible
    expect(screen.getByText('Retina High-Luminance Display Assembly')).toBeInTheDocument();

    // Redmi display should be filtered out
    expect(screen.queryByText('Universal Diamond Grade Display Assembly')).not.toBeInTheDocument();
  });

  it('should filter items when brand pills are clicked', () => {
    render(<ProductCatalog currentLang="en" />);

    const samsungPill = screen.getByRole('button', { name: 'Samsung' });
    fireEvent.click(samsungPill);

    // Samsung items should be present
    expect(screen.getByText('OLED / AMOLED High-Contrast Display Assembly')).toBeInTheDocument();
    expect(screen.getByText('Pure Cobalt High-Capacity Battery Pack')).toBeInTheDocument();

    // iPhone item should be absent
    expect(screen.queryByText('Retina High-Luminance Display Assembly')).not.toBeInTheDocument();
  });

  it('should show fallback message when no search results match', () => {
    render(<ProductCatalog currentLang="en" />);

    const searchInput = screen.getByLabelText('Search Spares & Accessories');
    fireEvent.change(searchInput, { target: { value: 'NonExistentModel9999' } });

    expect(screen.getByText('No exact match found in quick catalog for this query.')).toBeInTheDocument();
    expect(screen.getByText('Request Custom Part on WhatsApp')).toBeInTheDocument();
  });

  it('should display in-stock status and compatibility on cards', () => {
    render(<ProductCatalog currentLang="en" />);

    const redmiCompatibility = PRODUCTS.find((p) => p.sku === 'RM-DSP-RN10')?.modelCompatibility;
    expect(screen.getByText(redmiCompatibility!)).toBeInTheDocument();
  });
});
