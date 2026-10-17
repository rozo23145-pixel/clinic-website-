import React, { useState } from 'react';
import { MessageSquare, ExternalLink, ShieldCheck, Info, Calendar, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { isValidHttpsUrl } from '../utils/validation';
import { clinicAssets } from '../config/assets';
import { Link } from '../context/RouterContext';
import { SectionHeading } from '../components/SectionHeading';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { IllustrativeTag } from '../components/IllustrativeTag';

export const ReviewsPage: React.FC = () => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const isReviewsUrlConfigured = isValidHttpsUrl(clinicConfig.reviewsUrl);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Editorial Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E5DE] pb-12 sm:pb-16 bg-[#F8F7F4]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
            Verified Feedback & Community Trust
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#20211F] font-normal tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Patient Reviews & Clinical Trust
          </h1>
          <p className="text-base sm:text-lg text-[#686A65] max-w-2xl leading-relaxed">
            Transparent presentation of community feedback for Om Multispeciality Dental Clinic.
          </p>
        </div>
      </section>

      {/* 7.1 Review Summary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E5DE] p-8 sm:p-12 lg:p-16 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Review Metric */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
                Reported Review Count
              </span>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-serif text-[#20211F] font-normal tabular-nums">
                  {clinicConfig.reportedReviewCount}
                </span>
                <span className="text-lg text-[#686A65] font-medium">
                  Patient Reviews
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                150+ reviews reported by the clinic. In adherence to strict medical reporting integrity, no aggregate star rating is displayed until officially certified from a verified public review registry.
              </p>
            </div>

            {/* External Review Link Handler */}
            <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-[#E8E5DE] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#20211F]">
                <ShieldCheck className="w-4 h-4 text-[#8B6D35]" />
                <span>Original Review Source Verification</span>
              </div>

              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                We believe prospective patients should read authentic, unedited feedback directly on the original platform where patients post their candid experiences.
              </p>

              <div className="pt-2">
                {isReviewsUrlConfigured ? (
                  <a
                    href={clinicConfig.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
                  >
                    <span>Read Verified Reviews on Official Listing</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B39455]" />
                  </a>
                ) : (
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setShowConfigNotice(!showConfigNotice)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#E8E5DE]/40 text-[#20211F] border border-[#E8E5DE] text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
                    >
                      <Info className="w-3.5 h-3.5 text-[#8B6D35]" />
                      <span>Review Platform Destination Awaiting Configuration</span>
                    </button>

                    {showConfigNotice && (
                      <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] text-xs text-[#686A65] space-y-2">
                        <span className="font-semibold text-[#20211F] block">
                          Configuration Instruction:
                        </span>
                        <p>
                          To connect the verified Google Business or third-party clinic review page, enter the verified URL into <code className="font-mono text-[#8B6D35] bg-[#F8F7F4] px-1 py-0.5 rounded border border-[#E8E5DE]">reviewsUrl</code> within <code className="font-mono text-[#8B6D35] bg-[#F8F7F4] px-1 py-0.5 rounded border border-[#E8E5DE]">src/config/clinic.ts</code>.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 Patient Care & Clinic Environment Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F7F4] rounded-3xl border border-[#E8E5DE] p-8 sm:p-12 space-y-10">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Earning Trust With Every Visit"
            description="Our practice focuses on careful listening, unhurried examinations, and patient reassurance during every clinical visit."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6D35]">
                Pillar 01
              </span>
              <h3 className="text-lg font-serif text-[#20211F]">Gentle Care</h3>
              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                Prioritizing patient comfort and a calm chairside manner to help anxious individuals feel at ease.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6D35]">
                Pillar 02
              </span>
              <h3 className="text-lg font-serif text-[#20211F]">Open Consultation</h3>
              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                Thoroughly explaining diagnostic observations and walking through every available option together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6D35]">
                Pillar 03
              </span>
              <h3 className="text-lg font-serif text-[#20211F]">Hygienic Standards</h3>
              <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
                Maintaining clean, modern clinical spaces where health and safety are never compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.3 Reviews Page Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#20211F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B39455]">
              Experience Thoughtful Dental Care
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              Schedule Your Consultation
            </h2>
            <p className="text-sm text-[#E8E5DE]/80 leading-relaxed">
              Reach out directly to Om Multispeciality Dental Clinic via telephone or WhatsApp message to arrange your visit.
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-[#20211F] hover:bg-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
          >
            <Calendar className="w-4 h-4 text-[#8B6D35]" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 text-[#8B6D35] ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};
