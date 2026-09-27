import React from 'react';
import { partnerLogos, disclosureNote } from '../data/partnerLogos';
import { Info } from 'lucide-react';

export default function LogoStrip() {
  const bentoClass = (idx) => {
    if (idx === 0 || idx === 5) return 'row-span-2 min-h-[236px]';
    if (idx === 2 || idx === 7) return 'min-h-[108px] translate-y-2';
    return 'min-h-[108px]';
  };

  const renderLogo = (logo, idx, copy) => (
    <div
      key={`${copy ? 'copy' : 'original'}-${logo.name}`}
      className={`group flex w-[190px] flex-col justify-between rounded-2xl border border-[#E8E2D2] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-xl sm:w-[220px] ${bentoClass(idx)}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">0{(idx % partnerLogos.length) + 1}</span>
      <div>
        <span className="block font-serif text-lg font-semibold leading-tight text-[#16140F] transition-colors group-hover:text-[#9C7A1A]">
          {logo.name}
        </span>
        <span className="mt-1 block text-[10px] uppercase tracking-wider text-[#6B6858]">
          {logo.category}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen py-20 lg:py-24 bg-[#FBF3DD]/20 border-y border-[#E8E2D2] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#16140F] leading-tight">
            Our Team's{' '}
            <span className="relative inline-block text-[#16140F] underline decoration-[#C9A227] decoration-4 underline-offset-8">
              Experience
            </span>{' '}
            Includes
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#33312A] mt-4 leading-relaxed">
            Our team brings hands-on experience from leading organisations across shipping, logistics, infrastructure and supply chain, shaped by years of working on real business challenges.
          </p>
        </div>

        {/* Auto-scrolling bento grid; the viewport remains touch-scrollable. */}
        <div className="team-marquee mb-12 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          <div className="team-marquee-track grid w-max grid-flow-col grid-rows-[108px_108px] gap-4">
            {partnerLogos.map((logo, idx) => renderLogo(logo, idx, false))}
            {partnerLogos.map((logo, idx) => renderLogo(logo, idx, true))}
          </div>
        </div>

        {/* Disclosure Note Box */}
        <div className="max-w-4xl mx-auto p-5 rounded-xl bg-white border border-[#E8E2D2] flex items-start gap-4 shadow-sm">
          <Info className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-[#6B6858] leading-relaxed">
            {disclosureNote}
          </p>
        </div>

      </div>
    </section>
  );
}
