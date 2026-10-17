import React from 'react';
import { Calendar, ShieldCheck, Heart, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { clinicAssets } from '../config/assets';
import { Link } from '../context/RouterContext';
import { SectionHeading } from '../components/SectionHeading';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { IllustrativeTag } from '../components/IllustrativeTag';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Editorial Page Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E5DE] pb-12 sm:pb-16 bg-[#F8F7F4]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
            About the Practice & Practitioner
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#20211F] font-normal tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Meet Dr. Dipali Modle-Senapati & Om Multispeciality Dental Clinic
          </h1>
          <p className="text-base sm:text-lg text-[#686A65] max-w-2xl leading-relaxed">
            A dedicated dental practice centered on personal communication, patient reassurance, and attentive clinical care.
          </p>
        </div>
      </section>

      {/* 6.1 Doctor Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Doctor Portrait */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] bg-[#F8F7F4] shadow-xs">
                <ImageWithFallback
                  src={clinicAssets.doctorPortrait.src}
                  alt={clinicAssets.doctorPortrait.alt}
                  aspectRatioClass="aspect-[3/4]"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.doctorPortrait.representativeNote} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE] text-xs text-[#686A65] leading-relaxed">
                <span className="font-semibold text-[#20211F] block mb-0.5">Verification Note</span>
                Clinical portrait is illustrative until verified photographs are published. Formal registration credentials and degree accreditations will be added upon verified clinic submission.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Doctor Profile & Care Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#8B6D35]">
                Principal Dental Surgeon
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#20211F] font-normal">
                {clinicConfig.doctorName}
              </h2>
              <p className="text-base sm:text-lg text-[#686A65] leading-relaxed">
                Dr. Dipali Modle-Senapati guides Om Multispeciality Dental Clinic with an emphasis on individualized attention. We believe visiting the dentist should be an unhurried, reassuring experience where patients feel heard and respected at every step.
              </p>
            </div>

            {/* Core Patient-Centered Principles */}
            <div className="space-y-4 pt-4 border-t border-[#E8E5DE]">
              <h3 className="text-xl font-serif text-[#20211F] font-medium">
                Our Patient-Centered Approach
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8E5DE] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E5DE] flex items-center justify-center text-[#8B6D35]">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-semibold text-[#20211F]">Unhurried Consultations</h4>
                  <p className="text-xs text-[#686A65] leading-relaxed">
                    Time is set aside to understand your personal concerns, dental history, and comfort preferences before conducting examinations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8E5DE] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E5DE] flex items-center justify-center text-[#8B6D35]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-semibold text-[#20211F]">Transparent Guidance</h4>
                  <p className="text-xs text-[#686A65] leading-relaxed">
                    Clear explanations of clinical findings without confusing jargon or pressurized treatment recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Clinical Credentials Status Block */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#20211F]">
                Verified Credentials & Registrations
              </h4>
              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                Om Multispeciality Dental Clinic maintains strict adherence to medical truthfulness. Detailed educational degrees, state council registration numbers, and specialist qualifications will be listed here upon direct verification from the practitioner.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#8B6D35] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Practitioner: Dr. Dipali Modle-Senapati</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Clinic Overview Section */}
      <section className="bg-[#F8F7F4] py-20 border-y border-[#E8E5DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="The Practice Environment"
            title="Designed for Calm & Cleanliness"
            description="Our clinical environment reflects our belief in high standards of hygiene, ergonomic patient comfort, and serene surroundings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Image 1 */}
            <div className="bg-white rounded-2xl border border-[#E8E5DE] overflow-hidden space-y-4 p-4 sm:p-5">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#F8F7F4]">
                <ImageWithFallback
                  src={clinicAssets.heroInterior.src}
                  alt={clinicAssets.heroInterior.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.heroInterior.representativeNote} />
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-serif text-[#20211F]">Operatory Suite</h3>
                <p className="text-xs sm:text-sm text-[#686A65] mt-1 leading-relaxed">
                  Tranquil patient operatory featuring natural daylight, clean architectural lines, and comfortable ergonomic seating.
                </p>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="bg-white rounded-2xl border border-[#E8E5DE] overflow-hidden space-y-4 p-4 sm:p-5">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#F8F7F4]">
                <ImageWithFallback
                  src={clinicAssets.receptionLounge.src}
                  alt={clinicAssets.receptionLounge.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.receptionLounge.representativeNote} />
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-serif text-[#20211F]">Reception Lounge</h3>
                <p className="text-xs sm:text-sm text-[#686A65] mt-1 leading-relaxed">
                  Welcoming arrival lounge providing a quiet space to complete check-in and consult with our clinic staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 About Page CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#20211F] text-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B39455]">
              Get in Touch
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              Have a question or need an appointment?
            </h3>
            <p className="text-sm text-[#E8E5DE]/80 leading-relaxed">
              We look forward to welcoming you to Om Multispeciality Dental Clinic. Contact us directly to arrange a consultation with Dr. Dipali Modle-Senapati.
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-[#20211F] hover:bg-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
          >
            <Calendar className="w-4 h-4 text-[#8B6D35]" />
            <span>Contact for Appointments</span>
            <ArrowRight className="w-4 h-4 text-[#8B6D35] ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};
