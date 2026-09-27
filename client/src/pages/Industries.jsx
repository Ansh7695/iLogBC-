import React from 'react';
import { ArrowDown, ArrowUpRight, Network, Ship, TrainFront } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import bgHomeVideo from '../assets/bghome.mp4';

const signals = [
  { value: '10', label: 'connected sectors', icon: Network },
  { value: '360°', label: 'commercial view', icon: Ship },
  { value: '01', label: 'integrated lens', icon: TrainFront }
];

const industryImages = {
  'logistics-supply-chain': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=85&w=900',
  'shipping-carriers': 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=85&w=900',
  'freight-forwarders': 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=85&w=900',
  'port-terminal-ops': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=85&w=900',
  'rail-logistics': 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=85&w=900',
  'manufacturing-auto': 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=85&w=900',
  'ecommerce-retail': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=85&w=900',
  'cold-chain': 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=85&w=900',
  'logistics-tech': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=85&w=900',
  'global-entrants': 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&q=85&w=900',
  'investors-pe': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=900'
};

function IndustryAtlas({ onRequestConsultation }) {
  const bentoSpans = [
    'sm:col-span-2',
    'sm:col-span-1',
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-1',
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-1',
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-2'
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Sector atlas</p><h2 className="mt-2 font-serif text-4xl text-[#16140F] sm:text-5xl">Connected by consequence.</h2></div>
        <span className="text-xs font-semibold text-[#6B6858]">{industriesData.length} sectors</span>
      </div>
      <div className="grid auto-rows-[270px] grid-cols-2 gap-3 sm:auto-rows-[310px] sm:grid-cols-4 sm:gap-4">
        {industriesData.map((industry, index) => (
          <article
            key={industry.id}
            className={`group relative h-full overflow-hidden rounded-[1.5rem] border border-[#E8E2D2] bg-[#16140F] p-5 text-white transition-[transform,box-shadow] duration-500 hover:z-20 hover:-translate-y-1 hover:shadow-[12px_12px_28px_rgba(22,20,15,0.25)] ${bentoSpans[index]}`}
          >
            <img src={industryImages[industry.id]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-110 group-hover:opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16140F] via-[#16140F]/65 to-[#16140F]/10" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-3"><span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A227]">0{index + 1}</span><span className="text-[10px] uppercase tracking-wider text-white/55">{industry.tag}</span></div>
              <div className="mt-auto">
                <h3 className="font-serif text-xl leading-tight sm:text-2xl">{industry.name}</h3>
                <div className="mt-3 max-h-40 overflow-hidden opacity-100 transition-all duration-500 ease-out sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-40 sm:group-hover:opacity-100 sm:group-focus-within:mt-3 sm:group-focus-within:max-h-40 sm:group-focus-within:opacity-100">
                  <p className="text-xs leading-relaxed text-white/70">{industry.description}</p><button type="button" onClick={onRequestConsultation} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#C9A227] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#16140F]">Explore more <ArrowUpRight className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Industries({ onRequestConsultation }) {
  return (
    <main className="bg-[#FBF3DD]/30 text-[#33312A]">
      <section className="relative min-h-[680px] overflow-hidden bg-[#16140F] text-white">
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
        <div className="industries-grid-overlay absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">Connected industries</p>
              <h1 className="mt-5 font-serif text-5xl font-normal leading-[1.05] sm:text-7xl">One logistics lens. Every industry it touches.</h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">From ocean freight and ports to rail corridors and industrial manufacturing, we connect the decisions that keep complex trade moving.</p>
              <Link to="#industry-explorer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#9C7A1A] hover:shadow-xl">Explore industries <ArrowDown className="h-4 w-4" /></Link>
            </div>

            <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:gap-5">
              {signals.map(({ value, label, icon: Icon }, index) => (
                <div key={label} className={`industry-float rounded-[2rem] border border-white/10 bg-[#26231B]/80 p-5 shadow-[12px_12px_26px_rgba(0,0,0,0.45),-8px_-8px_22px_rgba(72,65,46,0.22)] backdrop-blur-md ${index === 2 ? 'col-span-2 mx-auto w-3/5' : ''}`} style={{ animationDelay: `${index * 500}ms` }}>
                  <Icon className="h-5 w-5 text-[#C9A227]" />
                  <p className="mt-8 font-serif text-3xl text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">{label}</p>
                </div>
              ))}
              <div className="industry-orbit pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-[#C9A227]/20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="industry-explorer" className="scroll-mt-20 border-b border-[#E8E2D2] bg-white py-16 sm:py-20 lg:py-24">
        <IndustryAtlas onRequestConsultation={onRequestConsultation} />
      </section>

      <section className="bg-[#FBF3DD]/45 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[2rem] bg-[#16140F] p-8 text-white shadow-[12px_12px_28px_rgba(22,20,15,0.2),-8px_-8px_24px_rgba(255,255,255,0.5)] sm:flex-row sm:items-center sm:p-10">
          <div><p className="font-serif text-3xl">Your industry is part of a larger system.</p><p className="mt-2 text-sm text-white/60">Bring us the connection that needs to work better.</p></div>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[#C9A227] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#C9A227] transition-all hover:bg-[#C9A227] hover:text-white">Back to iLogBC <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
