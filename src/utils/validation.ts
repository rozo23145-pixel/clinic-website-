import { WHATSAPP_PLACEHOLDER_KEY } from '../config/clinic';

/**
 * Validates whether a phone number is configured and usable for voice calls
 */
export function isPhoneNumberConfigured(phone: string | null | undefined): boolean {
  if (!phone) return false;
  const trimmed = phone.trim();
  if (trimmed.length < 6) return false;
  // Ensure it has at least some numbers and isn't just placeholder text
  const digitsOnly = trimmed.replace(/\D/g, '');
  return digitsOnly.length >= 7;
}

/**
 * Validates whether a WhatsApp number is configured with a real verified phone number
 */
export function isWhatsAppConfigured(whatsapp: string | null | undefined): boolean {
  if (!whatsapp) return false;
  const trimmed = whatsapp.trim();
  if (trimmed === WHATSAPP_PLACEHOLDER_KEY || trimmed.length === 0) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  return digitsOnly.length >= 8 && digitsOnly.length <= 15;
}

/**
 * Validates whether an external reviews URL is a valid, secure HTTPS destination
 */
export function isValidHttpsUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed.startsWith('https://')) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' && parsed.hostname.length > 3;
  } catch {
    return false;
  }
}
