import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const servicePaths = {
  'logistics-supply-chain': '/services/logistic-and-supply-chain-consulting',
  'port-terminal': '/services/infrastructure-and-terminal-advisory',
  'india-regulatory': '/services/market-entry-india-advisory',
  'tech-blockchain': '/services/specialized-services',
  'rail-multimodal': '/services/infrastructure-and-terminal-advisory',
  'cold-chain': '/services/specialized-services',
  'capital-ma': '/services/ma-valuation-and-transaction-advisory',
  'manufacturing-industrial': '/services/manufacturing-trading-scm'
};

export default function SplitServicePanel({ onRequestConsultation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousService, setPreviousService] = useState(null);

  const activeService = servicesData[currentIndex];

  useEffect(() => {
    if (!previousService) return undefined;

    const timeoutId = window.setTimeout(() => setPreviousService(null), 500);
    return () => window.clearTimeout(timeoutId);
  }, [previousService]);

  const changeService = (nextIndex) => {
    if (nextIndex === currentIndex) return;
    setPreviousService(activeService);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    changeService(currentIndex === 0 ? servicesData.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    changeService(currentIndex === servicesData.length - 1 ? 0 : currentIndex + 1);
  };

  const renderServiceContent = (service) => (
    <div className="p-8 sm:p-12 flex flex-col justify-between h-full">
      <div>
        <span className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#C9A227]">
          {service.eyebrow}
        </span>
        <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#16140F] mt-2 mb-3">
          {service.headline}
        </h4>
        <p className="font-sans text-sm text-[#33312A] mb-8 leading-relaxed">
          {service.subtext}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.checklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FBF3DD]/40 border border-[#E8E2D2]/60">
              <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-[#16140F] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#E8E2D2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-xs text-[#6B6858]">
          Custom engagements tailored to Indian and international regulations.
        </span>
        <button
          type="button"
          onClick={onRequestConsultation}
          className="rounded-full px-6 py-2.5 bg-[#16140F] hover:bg-[#C9A227] text-white text-xs uppercase tracking-wide font-semibold transition-all cursor-pointer shadow-md"
        >
          Schedule Advisory Call
        </button>
      </div>
    </div>
  );

  return (
    <section id="services" className="relative min-h-screen py-20 lg:py-24 bg-[#FBF3DD]/30 border-y border-[#E8E2D2] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#16140F] leading-tight">
              Integrated Logistics & Strategy
            </h2>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <span className="text-xs font-semibold text-[#6B6858] mr-2">
              {currentIndex + 1} of {servicesData.length}
            </span>
            <button
              type="button"
              aria-label="Previous Service Slide"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-[#E8E2D2] text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next Service Slide"
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-[#E8E2D2] text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Split Carousel Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D2]">
          
          {/* Left Dark Image Overlay Panel */}
          <div className="lg:col-span-5 relative bg-[#16140F] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[420px]">
            {/* Background Image with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-30"
              style={{ backgroundImage: `url(${activeService.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16140F] via-[#16140F]/80 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full border border-[#C9A227]/30 mb-6">
                SERVICE MODULE 0{currentIndex + 1}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white mb-4">
                {activeService.title}
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
                {activeService.sub}
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-auto flex items-center justify-between border-t border-white/10">
              <Link
                to={servicePaths[activeService.id] || '/services'}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C9A227] hover:text-white transition-colors cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Pagination Dots */}
              <div className="flex gap-1.5">
                {servicesData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => changeService(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'w-6 bg-[#C9A227]' : 'w-2 bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right White Content & Checklist Panel */}
          <div className="lg:col-span-7 relative overflow-hidden bg-white min-h-[420px]">
            {previousService && (
              <div className="absolute inset-0 z-0">
                {renderServiceContent(previousService)}
              </div>
            )}
            <div
              key={activeService.id}
              className="relative z-10 h-full bg-white animate-[service-card-enter_500ms_ease-out]"
            >
              {renderServiceContent(activeService)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
