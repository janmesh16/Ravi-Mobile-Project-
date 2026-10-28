import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RepairEstimator } from './RepairEstimator';

describe('RepairEstimator Component', () => {
  it('should render section title and initial estimate correctly', () => {
    render(<RepairEstimator currentLang="en" />);

    // Section title
    expect(screen.getByText('Interactive Smartphone Repair Cost Estimator')).toBeInTheDocument();

    // Default brand is Xiaomi and default issue is screen
    expect(screen.getByText(/Diagnostic Workshop Estimate/i)).toBeInTheDocument();
    expect(screen.getByText(/Estimated Counter Price Range/i)).toBeInTheDocument();

    // Initial price for Xiaomi screen OEM grade
    expect(screen.getByText(/1,850/)).toBeInTheDocument();
  });

  it('should dynamically update pricing when another brand is selected', () => {
    render(<RepairEstimator currentLang="en" />);

    // Click Apple iPhone
    const appleBtn = screen.getByRole('radio', { name: /Apple iPhone/i });
    fireEvent.click(appleBtn);

    // Apple screen OEM grade should show higher price tier (3,800 - 6,500)
    expect(screen.getByText(/3,800/)).toBeInTheDocument();
    expect(screen.getByText(/6,500/)).toBeInTheDocument();
  });

  it('should dynamically update turnaround and price when battery issue is selected', () => {
    render(<RepairEstimator currentLang="en" />);

    // Click Battery issue
    const batteryIssueBtn = screen.getByRole('radio', { name: /Battery Drain/i });
    fireEvent.click(batteryIssueBtn);

    // Battery warranty should be displayed
    expect(screen.getByText(/Pure Cobalt Warranty/i)).toBeInTheDocument();
  });

  it('should toggle between OEM Grade and Diamond Tested Grade', () => {
    render(<RepairEstimator currentLang="en" />);

    // Click Diamond Grade
    const diamondBtn = screen.getByRole('radio', { name: /Diamond Tested Grade/i });
    fireEvent.click(diamondBtn);

    // Diamond grade screen for Xiaomi should show 950 - 1,450
    expect(screen.getByText(/950/)).toBeInTheDocument();
    expect(screen.getByText(/1,450/)).toBeInTheDocument();
  });

  it('should provide WhatsApp booking link with selected parameters', () => {
    render(<RepairEstimator currentLang="en" />);

    const bookBtn = screen.getByRole('link', { name: /Book Repair Slot on WhatsApp/i });
    const href = bookBtn.getAttribute('href');

    expect(href).toContain('https://wa.me/919800000000?text=');
    expect(href).toContain('Xiaomi');
    expect(href).toContain('Display');
  });

  it('should render authentic Marathi translations when lang is mr', () => {
    render(<RepairEstimator currentLang="mr" />);

    expect(screen.getByText('तुमच्या मोबाईलचा दुरुस्ती खर्च तपासा')).toBeInTheDocument();
    expect(screen.getByText(/वर्कशॉप दुरुस्ती अंदाज/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /व्हॉट्सअ‍ॅपवर स्लॉट बुक करा/i })).toBeInTheDocument();
  });
});
