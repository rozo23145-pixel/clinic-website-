/**
 * Centralized Clinic Configuration
 *
 * Authoritative source of editable clinic information for Om Multispeciality Dental Clinic.
 * To update contact details, reviews destination, or clinic hours, modify the fields below.
 * No information is fabricated; placeholder and empty states are handled safely by UI components.
 */

export interface OpeningHourEntry {
  days: string;
  hours: string;
}

export interface ClinicConfig {
  /** Official clinic name */
  name: string;
  /** Full name of the principal dentist */
  doctorName: string;
  /**
   * Verified phone number for voice calls.
   * If left blank, UI renders a clear configuration placeholder state.
   * Format example: "+91 98765 43210" or "022 1234 5678"
   */
  phoneNumber: string;
  /**
   * Verified WhatsApp-enabled number.
   * Kept as 'WHATSAPP_NUMBER_PLACEHOLDER' until verified by the clinic.
   * Once supplied, replace with numeric string (e.g., '919876543210' without '+' or spaces).
   */
  whatsappNumber: string;
  /** Reported patient reviews count from verified clinic sources */
  reportedReviewCount: number;
  /** Verified aggregate star rating if officially certified (null when not verified) */
  aggregateRating: number | null;
  /**
   * Official external review page link (e.g. verified Google Business listing).
   * If left blank, external reviews button remains in an informative placeholder state.
   */
  reviewsUrl: string;
  /** Verified physical address of the clinic (empty until verified) */
  address: string;
  /** Verified weekly operating hours (null until verified) */
  openingHours: OpeningHourEntry[] | null;
  /** Verified email address (empty until verified) */
  email: string;
  /** Default enquiry message for patient-initiated WhatsApp chat */
  whatsappPrefillMessage: string;
  mapsUrl: string;
}

export const clinicConfig: ClinicConfig = {
  name: 'Om Multispeciality Dental Clinic',
  doctorName: 'Dr. Dipali Modle-Senapati',
  // Verified phone number to be configured by the clinic:
  phoneNumber: '',
  // WhatsApp number placeholder strictly maintained until verified:
  whatsappNumber: 'WHATSAPP_NUMBER_PLACEHOLDER',
  // Reported reviews count as provided by the clinic:
  reportedReviewCount: 65,
  // Not fabricated - kept null until an official source rating is supplied:
  aggregateRating: null,
  // Verified review destination URL:
  reviewsUrl: '',
  // Verified address to be entered when supplied:
  address: 'Shop no.2, Shivkripa HCS, opposite Patanjali shop, near kabutarkhana, Misquita Nagar, Krishna Colony, Dahisar East, Mumbai, Maharashtra 400068',
  mapsUrl: 'https://maps.app.goo.gl/PR8qBctnmfGQZemF9',
  // Verified hours to be configured when confirmed:
  openingHours: null,
  // Verified email to be configured:
  email: '',
  // Professional prefilled enquiry message (patient remains in full control):
  whatsappPrefillMessage:
    'Hello, I would like to enquire about an appointment at Om Multispeciality Dental Clinic.',
};

/**
 * Placeholder constant identifier for comparison
 */
export const WHATSAPP_PLACEHOLDER_KEY = 'WHATSAPP_NUMBER_PLACEHOLDER';
