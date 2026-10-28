import { describe, it, expect } from 'vitest';
import { SHOP_CONFIG, buildWhatsAppLink } from './shop';

describe('SHOP_CONFIG & WhatsApp Link Engine', () => {
  it('should have valid default shop configuration for Shahada', () => {
    expect(SHOP_CONFIG.name).toBe('Ravi Mobile');
    expect(SHOP_CONFIG.city).toBe('Shahada');
    expect(SHOP_CONFIG.district).toBe('Nandurbar');
    expect(SHOP_CONFIG.pincode).toBe('425409');
    expect(SHOP_CONFIG.whatsappNumber).toBeDefined();
  });

  it('should build a valid wa.me link with URL-encoded text', () => {
    const message = 'Hello Ravi Mobile, I need a display for Redmi Note 10.';
    const link = buildWhatsAppLink(message);

    expect(link).toContain('https://wa.me/');
    expect(link).toContain('text=Hello%20Ravi%20Mobile%2C%20I%20need%20a%20display%20for%20Redmi%20Note%2010.');
  });

  it('should sanitize phone number by stripping non-numeric characters', () => {
    const dirtyPhone = '+91 98234-56789';
    const message = 'Test query';
    const link = buildWhatsAppLink(message, dirtyPhone);

    expect(link).toContain('https://wa.me/919823456789?text=Test%20query');
  });

  it('should preserve newlines in formatted WhatsApp quotation messages', () => {
    const multiline = 'Line 1\n• Item: Folder\n• Rate: Wholesale';
    const link = buildWhatsAppLink(multiline);

    expect(link).toContain(encodeURIComponent('Line 1\n• Item: Folder\n• Rate: Wholesale'));
  });
});
