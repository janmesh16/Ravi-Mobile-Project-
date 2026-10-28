import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EnquiryModal } from './EnquiryModal';

describe('EnquiryModal Accessibility & Interaction', () => {
  it('should not render anything when isOpen is false', () => {
    const handleClose = vi.fn();
    render(<EnquiryModal isOpen={false} onClose={handleClose} currentLang="en" />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render accessible dialog and title when isOpen is true', () => {
    const handleClose = vi.fn();
    render(
      <EnquiryModal
        isOpen={true}
        onClose={handleClose}
        currentLang="en"
        contextItem={{ title: 'Diamond Grade Display Assembly', sku: 'RM-DSP-RN10' }}
      />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText('Diamond Grade Display Assembly')).toBeInTheDocument();
    expect(screen.getByText('SKU: RM-DSP-RN10')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<EnquiryModal isOpen={true} onClose={handleClose} currentLang="en" />);

    const closeBtn = screen.getByLabelText('Close enquiry modal');
    fireEvent.click(closeBtn);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(<EnquiryModal isOpen={true} onClose={handleClose} currentLang="en" />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    render(<EnquiryModal isOpen={true} onClose={handleClose} currentLang="en" />);

    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render Marathi labels when language is set to mr', () => {
    const handleClose = vi.fn();
    render(<EnquiryModal isOpen={true} onClose={handleClose} currentLang="mr" />);

    expect(screen.getByText('थेट व्हॉट्सअ‍ॅप चौकशी')).toBeInTheDocument();
    expect(screen.getByText('आपल्या मोबाईलचे नाव व मॉडेल')).toBeInTheDocument();
    expect(screen.getByText('व्हॉट्सअ‍ॅपवर पाठवा')).toBeInTheDocument();
  });
});
