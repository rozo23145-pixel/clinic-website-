import { isPhoneNumberConfigured, isWhatsAppConfigured } from './validation';

/**
 * Generates a clean tel: URI for telephone calling
 */
export function getTelLink(phone: string | null | undefined): string | null {
  if (!isPhoneNumberConfigured(phone)) return null;
  // Keep leading + if international, strip spaces, parens, hyphens
  const cleaned = phone!.trim().replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
}

/**
 * Generates a clean, compliant WhatsApp click-to-chat URL
 * Strictly excludes +, spaces, brackets, and hyphens from the phone digits
 */
export function getWhatsAppLink(
  whatsappNumber: string | null | undefined,
  message: string
): string | null {
  if (!isWhatsAppConfigured(whatsappNumber)) return null;
  // WhatsApp international format: digits only, NO '+' sign, NO spaces
  const digitsOnly = whatsappNumber!.trim().replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${digitsOnly}?text=${encodedText}`;
}
