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
    src: '/hero.jpg',
    alt: 'Modern, tranquil dental operatory suite with warm natural lighting and state-of-the-art ergonomic dental chair',
    isRepresentative: true,
    representativeNote: 'Sample image',
  },
  receptionLounge: {
    src: '/reception.jpg',
    alt: 'Serene dental clinic reception lounge with minimalist natural wood finishes and comfortable seating',
    isRepresentative: true,
    representativeNote: 'Sample image',
  },
  operatoryTreatment: {
    src: '/clinic-room.jpg',
    alt: 'Bright and hygienic clinical treatment suite equipped with modern dental diagnostic imaging',
    isRepresentative: true,
    representativeNote: 'Sample image',
  },
  doctorPortrait: {
    src: '/doctor.jpg',
    alt: 'Representative portrait of a dental healthcare professional in clinical white coat',
    isRepresentative: true,
    representativeNote: 'Sample image',
  },
};
