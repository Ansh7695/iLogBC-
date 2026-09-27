import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import FeatureCard from '../components/FeatureCard';
import { ArrowRight, Quote, Award, Sparkles, Building2, Globe2, Layers, CheckCircle2 } from 'lucide-react';

export default function About({ onRequestConsultation }) {
  const [activeTab, setActiveTab] = useState('industries');

  // Placeholder stats data clearly labeled as instructed
  const aboutStats = [
    {
      id: 'stat-1',
      label: 'TEAM EXPERIENCE [PLACEHOLDER]',
      stat: '25+ Yrs',
      description: 'Combined senior leadership experience across global ocean carriers and Indian port terminals.',
      metricLabel: 'Senior Advisory Panel',
      metricValue: '12 Specialists',
      icon: 'Award'
    },
    {
      id: 'stat-2',
      label: 'ENGAGEMENTS DELIVERED [PLACEHOLDER]',
      stat: '150+',
      description: 'Strategic advisory, commercial due diligence, and network optimization projects completed.',
      metricLabel: 'Client Satisfaction',
      metricValue: '98% Repeat Business',
      icon: 'Building2'
    },
    {
      id: 'stat-3',
      label: 'INDIAN STATES COVERED [PLACEHOLDER]',
      stat: '18 States',
      description: 'Active advisory presence spanning major maritime gateways, ICD hubs, and manufacturing corridors.',
      metricLabel: 'Hinterland Reach',
      metricValue: 'Pan-India',
      icon: 'Globe2'
    }
  ];

  const tabContents = {
    industries: {
      title: 'Multimodal Industries Served',
      subtitle: 'Advising stakeholders across ocean freight, port terminals, dedicated rail corridors, and industrial manufacturing.',
      bullets: [
        'Shipping Lines & Ocean Carriers (Cabotage & Berth Operations)',
        'Container Train Operators & DFC Corridor Rail Freight',
        'Multi-Modal Logistics Parks (MMLP) & Free Trade Warehousing Zones',
        'Industrial OEMs & Auto Manufacturers (In-plant & Factory dispatch)'
      ]
    },
    advisory: {
      title: 'Core Advisory Practices',
      subtitle: 'Specialized commercial, regulatory, and technological consulting tailored to India\'s growth trajectory.',
      bullets: [
        'Commercial Due Diligence & M&A Asset Valuation',
        'Blockchain eBL (Electronic Bill of Lading) & Traceability',
        'PM Gati Shakti & Sagarmala Scheme Alignment',
        'Customs Brokerage, AEO & SEZ Compliance Frameworks'
      ]
    },
    partnerships: {
      title: 'Strategic Alliances & Ecosystem',
      subtitle: 'Connecting global shipping leaders, technology innovators, and institutional investors.',
      bullets: [
        'Global Ocean Freight & Terminal Operator Partnerships',
        'Leading Logistics SaaS & Smart Contract Developers',
        'Indian Infrastructure Funds & Private Equity Consortia',
        'Port Authorities & Customs Regulatory Working Groups'
      ]
    }
  };

  return (
    <main className="bg-white">
      
      {/* 1. About Hero Section */}
      <section className="relative bg-[#16140F] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight mb-6">
              Pioneering Logistics & Blockchain Advisory in India
            </h1>
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              [PLACEHOLDER — replace with real content]: iLogBC (International Logistics & Blockchain Consulting) brings deep domain expertise to commercial strategy, infrastructure investments, and supply chain digitalization across Indian and global trade routes.
            </p>
          </div>

          {/* Full-Width Team / Office Hero Banner Image */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-[#C9A227]/30 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
              alt="iLogBC Advisory Team Collaboration" 
              className="w-full h-80 sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16140F] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold">Leadership & Senior Practice</span>
                <p className="font-serif text-xl sm:text-2xl text-white mt-1">Dedicated Sector Specialists, Hands-On Commercial Execution</p>
              </div>
              <button
                type="button"
                onClick={onRequestConsultation}
                className="rounded-full px-6 py-2.5 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs uppercase tracking-wide font-semibold shrink-0 cursor-pointer shadow-lg"
              >
                Meet Our Advisors
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stat Row (3 Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-normal text-[#16140F]">
              Impact by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutStats.map((stat) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                stat={stat.stat}
                description={stat.description}
                metricLabel={stat.metricLabel}
                metricValue={stat.metricValue}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Expertise Section */}
      <section className="py-20 bg-[#FBF3DD]/30 border-y border-[#E8E2D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#16140F] leading-tight mb-6">
                Uniquely Positioned at the Intersection of Logistics, Policy & Technology
              </h2>
              <p className="font-sans text-base text-[#33312A] leading-relaxed mb-4">
                [PLACEHOLDER — replace with real content]: Unlike generalist management consultancies, iLogBC focuses 100% of its resources on shipping, port infrastructure, freight logistics, and blockchain traceability.
              </p>
              <p className="font-sans text-base text-[#33312A] leading-relaxed mb-6">
                [PLACEHOLDER — replace with real content]: Our team combines decades of operational leadership from world-leading container lines, terminal operators, and supply chain technology providers with deep regulatory insight into India's PM Gati Shakti National Master Plan.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-semibold text-[#16140F]">Practical operational knowledge from global ocean carriers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-semibold text-[#16140F]">Customized regulatory frameworks for Indian SEZ & customs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-semibold text-[#16140F]">Blockchain & electronic Bill of Lading (eBL) implementation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-white border border-[#E8E2D2] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBF3DD] rounded-bl-full -z-0 opacity-50"></div>
                
                <h3 className="font-serif text-2xl text-[#16140F] font-normal mb-4 relative z-10">
                  Our Mission
                </h3>
                <p className="font-sans text-sm text-[#33312A] leading-relaxed mb-6 relative z-10">
                  [PLACEHOLDER — replace with real content]: To empower maritime, freight, manufacturing, and investment leaders with actionable intelligence, commercial clarity, and technological edge to dominate Indian supply chain corridors.
                </p>

                <div className="pt-6 border-t border-[#E8E2D2] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A227]">Core Philosophy</span>
                  <span className="text-xs font-semibold text-[#16140F] bg-[#FBF3DD] px-3 py-1 rounded-full border border-[#E8E2D2]">
                    Precision & Integrity
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Tabbed Panel (Industries / Advisory Areas / Partnerships) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#9C7A1A] bg-[#FBF3DD] px-3.5 py-1.5 rounded-full">
              PRACTICE DOMAINS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#16140F] mt-3">
              Explore Our Capabilities
            </h2>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex justify-center gap-3 mb-10">
            {[
              { id: 'industries', label: 'Industries' },
              { id: 'advisory', label: 'Advisory Areas' },
              { id: 'partnerships', label: 'Partnerships' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#16140F] text-white shadow-md'
                    : 'bg-[#FBF3DD]/50 text-[#33312A] hover:bg-[#FBF3DD] border border-[#E8E2D2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E2D2] shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#16140F] font-normal mb-3">
              {tabContents[activeTab].title}
            </h3>
            <p className="font-sans text-sm text-[#33312A] leading-relaxed mb-8">
              {tabContents[activeTab].subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabContents[activeTab].bullets.map((b, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[#FBF3DD]/30 border border-[#E8E2D2]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#16140F]">{b}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Transformative Impact — 2 Case Study Cards */}
      <section className="py-20 bg-[#FBF3DD]/20 border-t border-[#E8E2D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#9C7A1A] bg-[#FBF3DD] px-3.5 py-1.5 rounded-full">
              CASE STUDIES [PLACEHOLDER]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#16140F] mt-3">
              Transformative Client Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E8E2D2] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C9A227] bg-[#FBF3DD] px-3 py-1 rounded-full">
                  MARITIME PORT ADVISORY [PLACEHOLDER]
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#16140F] mt-4 mb-3">
                  Indian Major Port Rail hinterland Expansion
                </h3>
                <p className="font-sans text-sm text-[#33312A] leading-relaxed mb-6">
                  [PLACEHOLDER — replace with real content]: Structured a joint-venture rail concession connecting a major West Coast Indian port terminal directly to the Dedicated Freight Corridor, reducing container turnaround time by 38%.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#C9A227]">
                <span>Result: +2.4M TEU Throughput Capacity</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8E2D2] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C9A227] bg-[#FBF3DD] px-3 py-1 rounded-full">
                  BLOCKCHAIN & eBL TRACEABILITY [PLACEHOLDER]
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#16140F] mt-4 mb-3">
                  Digital Bill of Lading Integration for Global Freight Forwarder
                </h3>
                <p className="font-sans text-sm text-[#33312A] leading-relaxed mb-6">
                  [PLACEHOLDER — replace with real content]: Deployed blockchain-backed electronic Bill of Lading architecture compliant with Indian customs and international maritime law, cutting documentation processing from 5 days to 20 minutes.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold text-[#C9A227]">
                <span>Result: 95% Time Savings on Trade Clearance</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Pull-Quote Block from Leadership */}
      <section className="py-20 bg-[#16140F] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-[#C9A227] mx-auto mb-6 opacity-80" />
          
          <blockquote className="font-serif text-2xl sm:text-4xl font-normal leading-relaxed text-gray-200 mb-8 italic">
            "[PLACEHOLDER — replace with real founder quote]: India's logistics revolution isn't just about building highways and berth terminals — it's about connecting data, capital, regulatory frameworks, and operational precision into a seamless commercial ecosystem."
          </blockquote>

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-semibold text-[#C9A227]">
              [PLACEHOLDER Founder / Managing Partner]
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">
              iLogBC Advisory Board & Practice Leadership
            </span>
          </div>
        </div>
      </section>

      {/* 7. Recognition & Awards Row (2 Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#9C7A1A] bg-[#FBF3DD] px-3.5 py-1.5 rounded-full">
              RECOGNITION [PLACEHOLDER]
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#16140F] mt-3">
              Industry Recognition & Thought Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-[#FBF3DD]/30 border border-[#E8E2D2] flex items-start gap-5">
              <div className="p-3 rounded-2xl bg-[#C9A227] text-white shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9C7A1A]">AWARD [PLACEHOLDER]</span>
                <h3 className="font-serif text-xl font-normal text-[#16140F] mt-1 mb-2">
                  Best Maritime Advisory Firm — India Logistics Summit
                </h3>
                <p className="text-xs text-[#33312A] leading-relaxed">
                  Recognized for outstanding contribution to port concession structuring and DFC freight corridor adoption.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FBF3DD]/30 border border-[#E8E2D2] flex items-start gap-5">
              <div className="p-3 rounded-2xl bg-[#C9A227] text-white shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9C7A1A]">INNOVATION [PLACEHOLDER]</span>
                <h3 className="font-serif text-xl font-normal text-[#16140F] mt-1 mb-2">
                  Pioneer in Supply Chain Blockchain Frameworks
                </h3>
                <p className="text-xs text-[#33312A] leading-relaxed">
                  Honored for pioneering eBL and IoT smart-contract integrations across Indian port customs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Explore More Links */}
      <section className="py-16 bg-[#FBF3DD]/40 border-t border-[#E8E2D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl text-[#16140F] mb-6">Explore More About iLogBC</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#services" className="rounded-full px-6 py-2.5 bg-white border border-[#E8E2D2] text-xs font-semibold uppercase tracking-wider text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all">
              Advisory Services
            </a>
            <a href="#impact" className="rounded-full px-6 py-2.5 bg-white border border-[#E8E2D2] text-xs font-semibold uppercase tracking-wider text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all">
              Client Impact
            </a>
            <a href="#careers" className="rounded-full px-6 py-2.5 bg-white border border-[#E8E2D2] text-xs font-semibold uppercase tracking-wider text-[#16140F] hover:bg-[#C9A227] hover:text-white transition-all">
              Careers & Practice
            </a>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <CTASection onRequestConsultation={onRequestConsultation} />

    </main>
  );
}
