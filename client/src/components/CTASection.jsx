import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import bgHomeVideo from '../assets/bghome.mp4';

export default function CTASection({ onRequestConsultation }) {
  return (
    <section className="relative min-h-screen py-20 lg:py-24 bg-[#16140F] text-white flex flex-col justify-center overflow-hidden">

      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src={bgHomeVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#16140F]/75" aria-hidden="true" />


      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="20%" r="300" fill="none" stroke="#C9A227" strokeWidth="1" />
          <circle cx="10%" cy="80%" r="200" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          
          <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white mb-6">
            Transform Commercial Decision-Making with{' '}
            <span className="text-[#C9A227] font-semibold italic">Strategic Advisory</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Connect with our logistics and supply chain advisory team to discuss market entry, network optimization, infrastructure transactions, or blockchain technology adoption in India.
          </p>

          <button
            type="button"
            onClick={onRequestConsultation}
            className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs sm:text-sm uppercase tracking-wide font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

        </div>
      </div>
    </section>
  );
}
