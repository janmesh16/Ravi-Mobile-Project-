/**
 * RAVI MOBILE — DOMAIN & ENVIRONMENT CONFIGURATION
 * Single source of truth for business contact, address, and WhatsApp integration.
 */

export interface ShopConfig {
  name: string;
  tagline: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  landmark: string;
  fullAddress: string;
  phone: string;
  whatsappNumber: string;
  googleMapsUrl: string;
  timing: string;
}

export const SHOP_CONFIG: ShopConfig = {
  name: import.meta.env.VITE_SHOP_NAME || 'Ravi Mobile',
  tagline: 'Mobile Spares, Batteries & Precision Repairs',
  city: import.meta.env.VITE_SHOP_CITY || 'Shahada',
  district: import.meta.env.VITE_SHOP_DISTRICT || 'Nandurbar',
  state: import.meta.env.VITE_SHOP_STATE || 'Maharashtra',
  pincode: import.meta.env.VITE_SHOP_PINCODE || '425409',
  landmark: import.meta.env.VITE_SHOP_LANDMARK || 'Near Old Bus Stand / Market Yard Road',
  fullAddress:
    import.meta.env.VITE_SHOP_FULL_ADDRESS ||
    'Shop No. 12, Market Yard Road, Near Old Bus Stand, Shahada, Dist. Nandurbar, Maharashtra - 425409',
  phone: import.meta.env.VITE_SHOP_PHONE || '+919800000000',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919800000000',
  googleMapsUrl:
    import.meta.env.VITE_GOOGLE_MAPS_URL ||
    'https://maps.google.com/?q=Shahada+Nandurbar+Maharashtra',
  timing: import.meta.env.VITE_SHOP_TIMING || 'Monday to Sunday: 9:30 AM - 9:00 PM',
};

/**
 * Cleanly generates a direct WhatsApp click-to-chat URL with URL-encoded message text.
 * Sanitizes phone numbers by stripping non-numeric characters.
 */
export function buildWhatsAppLink(
  message: string,
  phone: string = SHOP_CONFIG.whatsappNumber
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
