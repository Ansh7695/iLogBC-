import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Compass, Globe } from 'lucide-react';

export default function Hero({ onRequestConsultation, onExploreServices }) {
  const titlePrefix = 'One Sector. Every Stakeholder. ';
  const titleAccent = 'Every Mode.';
  const fullTitle = `${titlePrefix}${titleAccent}`;
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedTitle(fullTitle);
      return undefined;
    }

    let characterIndex = 0;
    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedTitle(fullTitle.slice(0, characterIndex));

      if (characterIndex === fullTitle.length) {
        window.clearInterval(typingTimer);
      }
    }, 55);

    return () => window.clearInterval(typingTimer);
  }, [fullTitle]);

  const visiblePrefix = typedTitle.slice(0, titlePrefix.length);
  const visibleAccent = typedTitle.slice(titlePrefix.length);
  const isTyping = typedTitle.length < fullTitle.length;

  return (
    <section className="relative min-h-[100dvh] h-[100dvh] max-h-[100dvh] bg-[#16140F] text-white flex items-center justify-center pt-32 sm:pt-28 lg:pt-20 pb-12 overflow-hidden snap-section">

      
      {/* Background Subtle Network Lines Graphic Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="3 3" />
              <circle cx="60" cy="0" r="1.5" fill="#C9A227" />
            </pattern>
            <radialGradient id="hero-glow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#16140F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#hero-glow)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">
          
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-tight mb-8">
            {visiblePrefix}
            <span className="text-[#C9A227] font-semibold italic underline decoration-[#C9A227]/40 underline-offset-8">
              {visibleAccent}
            </span>
            {isTyping && <span className="hero-typewriter-caret ml-1" aria-hidden="true" />}
          </h1>

          {/* Subtext */}
          <p className="font-sans text-lg sm:text-xl text-gray-300 leading-relaxed font-normal mb-10 max-w-3xl">
            Specialist advisory for shipping, logistics, infrastructure, manufacturing and supply-chain businesses navigating complex commercial decisions, investments and growth opportunities in India.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-16">
            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs sm:text-sm uppercase tracking-wide font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onRequestConsultation}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-[#16140F] text-xs sm:text-sm uppercase tracking-wide font-semibold transition-all duration-300 cursor-pointer"
            >
              <span>Request a Consultation</span>
            </button>
          </div>

          {/* Key Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#C9A227]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-300 font-medium">100% Sector Dedicated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#C9A227]">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-300 font-medium">India & Global Connectivity</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#C9A227]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-300 font-medium">Commercial & Policy Precision</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
