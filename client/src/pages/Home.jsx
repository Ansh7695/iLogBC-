import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import SplitServicePanel from '../components/SplitServicePanel';
import StatCard from '../components/StatCard';
import IndustryExplorer from '../components/IndustryExplorer';
import LogoStrip from '../components/LogoStrip';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { whyCardsData } from '../data/whySectionData';
import { statsData } from '../data/statsData';

export default function Home({ onRequestConsultation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="home-page-enter">
      {/* 1. Hero Section */}
      <Hero 
        onRequestConsultation={onRequestConsultation}
        onExploreServices={() => scrollToSection('services')}
      />

      {/* 2. Integrated Logistics & Strategy Service Carousel */}
      <SplitServicePanel onRequestConsultation={onRequestConsultation} />

      

      {/* 4. Stats Section */}
      <section className="relative min-h-screen py-20 lg:py-24 bg-white flex flex-col justify-center border-b border-[#E8E2D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16140F] leading-tight">
              India's Logistics Economy{' '}
              <span className="text-[#C9A227] font-semibold italic">
                by the Numbers
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#33312A] mt-4 leading-relaxed">
              India's logistics sector is being reshaped by infrastructure development, manufacturing growth, multimodal freight networks and expanding domestic and international trade.
            </p>
          </div>

          {/* Horizontally Scrollable Stat Cards Strip with Navigation Controls */}
          <div className="relative">
            {/* Scroll Container */}
            <div 
              id="stats-scroll-container"
              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {statsData.map((stat) => (
                <div key={stat.id} className="w-68 sm:w-72 aspect-[4/5] shrink-0 snap-start">
                  <StatCard
                    label={stat.label}
                    stat={stat.stat}
                    description={stat.description}
                    metricLabel={stat.metricLabel}
                    metricValue={stat.metricValue}
                    progress={stat.progress}
                    icon={stat.icon}
                  />
                </div>
              ))}
            </div>

            {/* Scroll Indicators & Scroll Controls */}
            <div className="flex items-center justify-between mt-4 px-2">
              <span className="text-xs text-[#6B6858] font-medium">
                ← Scroll horizontally or hover on numbers for detailed breakdown →
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Scroll Left"
                  onClick={() => {
                    const el = document.getElementById('stats-scroll-container');
                    if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-full bg-white border border-[#E8E2D2] text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Scroll Right"
                  onClick={() => {
                    const el = document.getElementById('stats-scroll-container');
                    if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-full bg-white border border-[#E8E2D2] text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Section */}
      <section className="relative min-h-screen py-20 lg:py-24 bg-white flex flex-col justify-center border-b border-[#E8E2D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#16140F] leading-tight">
              Specialists,{' '}
              <span className="text-[#C9A227] font-semibold italic">
                not generalists
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#33312A] mt-4 leading-relaxed">
              Focused expertise for shipping, logistics, supply chain, ports, infrastructure and the Indian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCardsData.map((card) => (
              <FeatureCard
                key={card.id}
                label={card.label}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Connected Industries Explorer */}
      <IndustryExplorer onRequestConsultation={onRequestConsultation} />

      {/* 6. Team Experience Logo Strip */}
      <LogoStrip />

      {/* 7. CTA Banner */}
      <CTASection onRequestConsultation={onRequestConsultation} />

      {/* 8. Inline Contact Form Section */}
      <section className="relative min-h-screen py-20 lg:py-24 bg-[#FBF3DD]/20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
