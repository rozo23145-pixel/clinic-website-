/**
 * Centralized Asset Configuration
 *
 * Current status: High-fidelity illustrative assets are used as temporary visual assets.
 * Authentic clinic and doctor photography will be updated here as soon as verified photographs are supplied.
 */

export interface ClinicAsset {
  src: string;
  alt: string;
  isRepresentative: boolean;
  representativeNote?: string;
}

export const clinicAssets = {
  heroInterior: {
    src: '/src/assets/images/hero_clinic_interior_1791968506847.jpg',
    alt: 'Modern, tranquil dental operatory suite with warm natural lighting and state-of-the-art ergonomic dental chair',
    isRepresentative: true,
    representativeNote: 'Illustrative interior aesthetic · Official clinic photography will be updated',
  },
  receptionLounge: {
    src: '/src/assets/images/clinic_reception_lounge_1791968506949.jpg',
    alt: 'Serene dental clinic reception lounge with minimalist natural wood finishes and comfortable seating',
    isRepresentative: true,
    representativeNote: 'Illustrative clinic reception · Authentic photography pending',
  },
  operatoryTreatment: {
    src: '/src/assets/images/clinic_operatory_treatment_1791968507072.jpg',
    alt: 'Bright and hygienic clinical treatment suite equipped with modern dental diagnostic imaging',
    isRepresentative: true,
    representativeNote: 'Illustrative treatment operatory · Authentic photography pending',
  },
  doctorPortrait: {
    src: '/src/assets/images/doctor_clinical_portrait_1791968508233.jpg',
    alt: 'Representative portrait of a dental healthcare professional in clinical white coat',
    isRepresentative: true,
    representativeNote: 'Representative professional photograph · Authentic doctor portrait pending',
  },
};
