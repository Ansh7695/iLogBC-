import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Network, Sparkles } from 'lucide-react';
import { industriesData } from '../data/industriesData';

export default function IndustryExplorer({ onRequestConsultation }) {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section id="industries" className="relative min-h-screen py-20 lg:py-24 bg-white flex flex-col justify-center border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Indicator */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16140F] text-white text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Industry Network</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#16140F] leading-tight">
            Connected Industries.
          </h2>
          <p className="font-sans text-base text-[#33312A] mt-4 leading-relaxed">
            Explore the sectors where iLogBC supports logistics, infrastructure, supply-chain transformation, market entry, transactions and investment.
          </p>
        </div>

        {/* Interactive Industry Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Scrollable Industry List */}
          <div className="lg:col-span-4 bg-[#FBF3DD]/30 p-4 rounded-2xl border border-[#E8E2D2] max-h-[580px] overflow-y-auto no-scrollbar space-y-2">
            <div className="px-3 py-2 text-xs uppercase tracking-widest font-semibold text-[#6B6858] border-b border-[#E8E2D2] mb-2 flex items-center gap-2">
              <Network className="w-4 h-4 text-[#C9A227]" />
              <span>Select Sector ({industriesData.length})</span>
            </div>

            {industriesData.map((ind) => {
              const isActive = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#16140F] text-white shadow-lg border-l-4 border-[#C9A227]'
                      : 'bg-white text-[#33312A] hover:bg-[#FBF3DD] border border-[#E8E2D2]'
                  }`}
                >
                  <span className="truncate">{ind.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#C9A227] shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Right Active Industry Detail Panel */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E2D2] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[520px]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#9C7A1A] to-[#16140F]"></div>

            <div>
              {/* Detail Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C9A227] bg-[#FBF3DD] px-3.5 py-1 rounded-full border border-[#C9A227]/30">
                  {selectedIndustry.tag}
                </span>
                <span className="text-xs text-[#6B6858] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
                  {selectedIndustry.networksIndicator}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#16140F] mb-3">
                {selectedIndustry.title}
              </h3>

              <p className="font-sans text-base text-[#33312A] leading-relaxed mb-6">
                {selectedIndustry.description}
              </p>

              {/* Advisory Area Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {selectedIndustry.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className={`text-xs uppercase tracking-wide font-semibold px-4 py-1.5 rounded-full ${
                      idx === 0 
                        ? 'bg-[#C9A227] text-white shadow-sm' 
                        : 'border border-[#16140F] text-[#16140F] bg-transparent'
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Bullets Grid */}
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#6B6858] mb-4">
                Core Advisory Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {selectedIndustry.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF3DD]/30 border border-[#E8E2D2]">
                    <CheckCircle className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span className="text-xs font-semibold text-[#16140F]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Footer Row */}
            <div className="pt-6 border-t border-[#E8E2D2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#6B6858] font-medium">
                Advising corporates, port authorities, and PE firms in India.
              </span>
              <button
                type="button"
                onClick={onRequestConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs uppercase tracking-wide font-semibold transition-all shadow-md cursor-pointer"
              >
                <span>Explore Industry Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
