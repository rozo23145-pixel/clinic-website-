import React from 'react';
import { Calendar, User, MessageSquare, ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { clinicAssets } from '../config/assets';
import { Link } from '../context/RouterContext';
import { SectionHeading } from '../components/SectionHeading';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { IllustrativeTag } from '../components/IllustrativeTag';
import { ContactActions } from '../components/ContactActions';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 5.1 Hero Section */}
      <section className="relative pt-8 sm:pt-14 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
                <span>OM MULTISPECIALITY DENTAL CLINIC</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#20211F] font-normal tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Thoughtful Dental Care, Focused on Your Smile.
              </h1>

              <p className="text-base sm:text-lg text-[#686A65] leading-relaxed max-w-xl">
                Led by <span className="text-[#20211F] font-medium">{clinicConfig.doctorName}</span>, our practice provides personalized dental consultations in a calm, modern setting designed for patient comfort and peace of mind.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455] shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#B39455]" aria-hidden="true" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8E5DE]/70 text-[#20211F] border border-[#E8E5DE] font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
                >
                  <User className="w-4 h-4 text-[#8B6D35]" aria-hidden="true" />
                  <span>Meet the Doctor</span>
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-[#E8E5DE] flex flex-wrap items-center gap-6 text-xs text-[#686A65]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8B6D35]" aria-hidden="true" />
                  <span>Dr. Dipali Modle</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#8B6D35]" aria-hidden="true" />
                  <span>{clinicConfig.reportedReviewCount} reviews reported by clinic</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Anchor */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-sm bg-[#F8F7F4]">
                <ImageWithFallback
                  src={clinicAssets.heroInterior.src}
                  alt={clinicAssets.heroInterior.alt}
                  aspectRatioClass="aspect-[4/3] lg:aspect-[3/4]"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.heroInterior.representativeNote} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 Clinic Introduction Section */}
      <section className="bg-[#F8F7F4] py-20 border-y border-[#E8E5DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="A Calm Clinical Atmosphere"
                title="A Patient-First Dental Experience"
                description="At Om Multispeciality Dental Clinic, our priority is creating a respectful, supportive environment where you can discuss your oral health needs with complete confidence."
              />
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B6D35] hover:text-[#20211F] transition-colors group"
              >
                <span>Learn about the practice</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 2-Card Visual Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Reception Lounge */}
            <div className="bg-white rounded-2xl border border-[#E8E5DE] overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-[#F8F7F4]">
                <ImageWithFallback
                  src={clinicAssets.receptionLounge.src}
                  alt={clinicAssets.receptionLounge.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.receptionLounge.representativeNote} />
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h3 className="text-xl font-serif text-[#20211F]">Welcoming Reception Space</h3>
                <p className="text-sm text-[#686A65] leading-relaxed">
                  Designed to feel soothing and comfortable, minimizing anxiety and welcoming each patient warmly upon arrival.
                </p>
              </div>
            </div>

            {/* Card 2: Treatment Suite */}
            <div className="bg-white rounded-2xl border border-[#E8E5DE] overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-[#F8F7F4]">
                <ImageWithFallback
                  src={clinicAssets.operatoryTreatment.src}
                  alt={clinicAssets.operatoryTreatment.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <IllustrativeTag note={clinicAssets.operatoryTreatment.representativeNote} />
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h3 className="text-xl font-serif text-[#20211F]">Hygienic Clinical Suites</h3>
                <p className="text-sm text-[#686A65] leading-relaxed">
                  Spotlessly maintained clinical rooms equipped for clear visual consultations and careful dental examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Doctor Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E5DE] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] bg-[#F8F7F4]">
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
            </div>

            {/* Doctor Bio Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
                Principal Dental Surgeon
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#20211F] font-normal">
                {clinicConfig.doctorName}
              </h2>

              <p className="text-base text-[#686A65] leading-relaxed">
                As the leading dental practitioner at Om Multispeciality Dental Clinic, Dr. Dipali Modle is committed to attentive clinical examinations, thorough explanation of treatment options, and patient-centered oral healthcare.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#343530]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6D35] shrink-0 mt-0.5" />
                  <span>Attentive, unhurried consultations dedicated to your dental health questions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6D35] shrink-0 mt-0.5" />
                  <span>Clear, transparent explanations before any clinical recommendation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6D35] shrink-0 mt-0.5" />
                  <span>Respectful care focused on long-term oral wellness and comfort</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>Read Doctor Profile & Practice Details</span>
                  <ArrowRight className="w-4 h-4 text-[#B39455]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Reviews Preview Section */}
      <section className="bg-[#20211F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B39455]">
              Patient Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white">
              Genuine Patient Trust
            </h2>
            <p className="text-base text-[#E8E5DE]/80 leading-relaxed">
              Om Multispeciality Dental Clinic values the feedback and confidence of the patients and families we serve.
            </p>
          </div>

          {/* Qualified Proof Strip */}
          <div className="bg-[#343530]/60 rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-serif text-[#B39455] font-normal tabular-nums">
                  {clinicConfig.reportedReviewCount}
                </span>
                <span className="text-lg font-medium text-white">Patient Reviews</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E8E5DE]/70">
                Total review count as officially reported by the clinic. No aggregate star rating is assumed without third-party platform certification.
              </p>
            </div>

            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#20211F] hover:bg-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Explore Patient Reviews</span>
              <ArrowRight className="w-4 h-4 text-[#8B6D35]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5.5 Appointment Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F7F4] rounded-3xl border border-[#E8E5DE] p-8 sm:p-12 lg:p-16 space-y-8">
          <SectionHeading
            eyebrow="Consultations & Inquiries"
            title="Ready to Schedule Your Visit?"
            description="Contact Om Multispeciality Dental Clinic directly by telephone or WhatsApp message. Our staff will assist you with scheduling a convenient consultation."
          />

          <ContactActions layout="grid" showAvailabilityNotice={true} />
        </div>
      </section>
    </div>
  );
};
