import React from 'react';
import { ArrowLeft, ArrowUpRight, ChevronRight, CircleDot, Compass, Factory, Landmark, Leaf, Scale, Ship, WalletCards } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { servicePagesData } from '../data/servicePagesData';

const iconSet = [Ship, Landmark, Factory, Compass, Scale, WalletCards, Leaf];

function SwipeRail({ items }) {
  return (
    <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 touch-pan-x no-scrollbar">
      {items.map((item, index) => {
        const Icon = iconSet[index % iconSet.length];
        return (
          <div key={item} className="group min-w-[190px] snap-start rounded-2xl border border-[#E8E2D2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg sm:min-w-0 sm:flex-1">
            <Icon className="mb-8 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-hover:scale-125" />
            <span className="text-sm font-semibold text-[#16140F]">{item}</span>
            <ChevronRight className="mt-4 h-4 w-4 text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        );
      })}
    </div>
  );
}

function MetricGrid({ metrics, className = '' }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {metrics.map(([number, title, copy], index) => (
        <article key={title} className="service-reveal group rounded-2xl border border-[#E8E2D2] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl" style={{ animationDelay: `${index * 90}ms` }}>
          <span className="font-serif text-3xl text-[#C9A227]">{number}</span>
          <h3 className="mt-8 font-serif text-xl text-[#16140F]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6B6858]">{copy}</p>
        </article>
      ))}
    </div>
  );
}

function OperationsLayout({ service }) {
  return <div className="space-y-16"><MetricGrid metrics={service.metrics} /><section><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Operational levers</p><h2 className="font-serif text-3xl text-[#16140F]">A connected view of movement</h2><SwipeRail items={service.rail} /></section></div>;
}

function InfrastructureLayout({ service }) {
  return <div className="grid gap-5 lg:grid-cols-12"><div className="service-reveal rounded-[2rem] bg-[#16140F] p-8 text-white lg:col-span-5" style={{ animationDelay: '80ms' }}><Landmark className="h-9 w-9 text-[#C9A227]" /><p className="mt-20 text-xs uppercase tracking-[0.2em] text-[#C9A227]">Asset perspective</p><h2 className="mt-3 font-serif text-3xl">From gateway capacity to hinterland reach.</h2><p className="mt-4 text-sm leading-relaxed text-white/60">The strongest infrastructure decisions connect engineering, operations and commercial demand in one model.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{service.metrics.map(([number, title, copy], index) => <article key={title} className="service-reveal rounded-2xl border border-[#E8E2D2] bg-[#FBF3DD]/40 p-6 transition-colors duration-300 hover:bg-[#C9A227] hover:text-white" style={{ animationDelay: `${index * 100}ms` }}><span className="text-xs font-bold tracking-widest opacity-60">{number}</span><h3 className="mt-12 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed opacity-70">{copy}</p></article>)}</div><div className="lg:col-span-12"><SwipeRail items={service.rail} /></div></div>;
}

function SupplyChainLayout({ service }) {
  return <div><div className="relative grid gap-6 md:grid-cols-3">{service.metrics.map(([number, title, copy], index) => <article key={title} className="service-reveal relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E8E2D2] md:odd:mt-10" style={{ animationDelay: `${index * 100}ms` }}><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16140F] text-sm font-semibold text-[#C9A227]">{number}</span><h3 className="mt-12 font-serif text-2xl text-[#16140F]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#6B6858]">{copy}</p></article>)}</div><div className="mt-12 border-l-2 border-[#C9A227] pl-6"><p className="text-sm font-semibold text-[#16140F]">The result</p><p className="mt-2 max-w-2xl font-serif text-2xl text-[#6B6858]">A supply chain that can absorb change without losing its rhythm.</p></div><SwipeRail items={service.rail} /></div>;
}

function IndiaLayout({ service }) {
  return <div className="grid gap-5 lg:grid-cols-12"><div className="rounded-[2rem] border border-[#E8E2D2] bg-white p-7 lg:col-span-7 lg:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Entry sequence</p><div className="mt-8 space-y-5">{service.metrics.map(([number, title, copy], index) => <div key={title} className="service-reveal flex gap-5 border-b border-[#E8E2D2] pb-5 last:border-0" style={{ animationDelay: `${index * 100}ms` }}><span className="font-serif text-3xl text-[#C9A227]">{number}</span><div><h3 className="font-serif text-xl text-[#16140F]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#6B6858]">{copy}</p></div></div>)}</div></div><div className="rounded-[2rem] bg-[#C9A227] p-8 text-[#16140F] lg:col-span-5 lg:p-10"><Compass className="h-8 w-8" /><p className="mt-24 text-4xl font-serif">India, with a clearer point of entry.</p><p className="mt-5 text-sm leading-relaxed text-[#16140F]/70">Local context turns ambition into an executable market plan.</p></div><div className="lg:col-span-12"><SwipeRail items={service.rail} /></div></div>;
}

function TransactionsLayout({ service }) {
  return <div><div className="grid gap-4 sm:grid-cols-2">{service.metrics.map(([number, title, copy], index) => <article key={title} className="service-reveal group rounded-xl border border-[#E8E2D2] bg-white p-6 transition-all duration-300 hover:rounded-[2rem] hover:border-[#16140F] hover:bg-[#16140F] hover:text-white" style={{ animationDelay: `${index * 80}ms` }}><div className="flex items-center justify-between"><span className="text-xs tracking-widest opacity-50">{number}</span><ArrowUpRight className="h-5 w-5 text-[#C9A227] transition-transform group-hover:rotate-45" /></div><h3 className="mt-16 font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-relaxed opacity-60">{copy}</p></article>)}</div><div className="mt-6 rounded-2xl bg-[#FBF3DD] p-7"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7A1A]">Decision lens</p><p className="mt-3 font-serif text-2xl text-[#16140F]">A better transaction starts with a more honest commercial story.</p></div><SwipeRail items={service.rail} /></div>;
}

function GovernanceLayout({ service }) {
  return <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Scale className="h-10 w-10 text-[#C9A227]" /><h2 className="mt-8 font-serif text-4xl text-[#16140F]">Clarity where exposure hides.</h2><p className="mt-4 text-sm leading-relaxed text-[#6B6858]">Practical governance brings contracts, controls and commercial intent into the same frame.</p></div><div className="divide-y divide-[#E8E2D2] rounded-2xl border border-[#E8E2D2] bg-white">{service.metrics.map(([number, title, copy], index) => <div key={title} className="service-reveal grid gap-3 p-6 sm:grid-cols-[80px_1fr]" style={{ animationDelay: `${index * 90}ms` }}><span className="text-xs font-bold tracking-widest text-[#C9A227]">{number}</span><div><h3 className="font-serif text-xl text-[#16140F]">{title}</h3><p className="mt-1 text-sm text-[#6B6858]">{copy}</p></div></div>)}</div><div className="lg:col-span-2"><SwipeRail items={service.rail} /></div></div>;
}

function CapitalLayout({ service }) {
  return <div><div className="grid gap-5 lg:grid-cols-12"><div className="rounded-[2rem] bg-[#16140F] p-8 text-white lg:col-span-7 lg:p-12"><p className="text-xs uppercase tracking-[0.2em] text-[#C9A227]">Capital architecture</p><p className="mt-16 max-w-xl font-serif text-4xl">Make the growth story legible to the people funding it.</p><div className="mt-10 flex flex-wrap gap-2">{service.rail.map((item) => <span key={item} className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70">{item}</span>)}</div></div><div className="grid gap-4 lg:col-span-5">{service.metrics.map(([number, title, copy], index) => <article key={title} className="service-reveal border-b border-[#E8E2D2] pb-4" style={{ animationDelay: `${index * 100}ms` }}><span className="text-xs text-[#C9A227]">{number}</span><h3 className="mt-2 font-serif text-2xl text-[#16140F]">{title}</h3><p className="mt-1 text-sm text-[#6B6858]">{copy}</p></article>)}</div></div></div>;
}

function EsgLayout({ service }) {
  return <div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{service.metrics.map(([number, title, copy], index) => <article key={title} className="service-reveal rounded-2xl border border-[#BFC9A8] bg-[#EEF1E5] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[#DCE5C9]" style={{ animationDelay: `${index * 90}ms` }}><Leaf className="h-6 w-6 text-[#60734C]" /><span className="mt-12 block text-xs font-bold tracking-widest text-[#60734C]">{number}</span><h3 className="mt-2 font-serif text-xl text-[#263322]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#526048]">{copy}</p></article>)}</div><div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#60734C]"><CircleDot className="h-5 w-5" /> Progress you can measure and finance.</div><SwipeRail items={service.rail} /></div>;
}

function SpecialistLayout({ service }) {
  const spanClasses = ['md:col-span-3', 'md:col-span-4', 'md:col-span-2', 'md:col-span-3'];
  return <div><div className="grid gap-4 md:grid-cols-6">{service.metrics.map(([number, title, copy], index) => <article key={title} className={`service-reveal rounded-[2rem] border border-[#E8E2D2] p-7 transition-all duration-300 hover:border-[#C9A227] hover:shadow-xl ${spanClasses[index]}`} style={{ animationDelay: `${index * 100}ms` }}><span className="text-xs font-bold tracking-widest text-[#C9A227]">{number}</span><h3 className="mt-16 font-serif text-2xl text-[#16140F]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B6858]">{copy}</p></article>)}</div><SwipeRail items={service.rail} /></div>;
}

function ServiceBody({ service }) {
  const layouts = { operations: OperationsLayout, infrastructure: InfrastructureLayout, 'supply-chain': SupplyChainLayout, india: IndiaLayout, transactions: TransactionsLayout, governance: GovernanceLayout, capital: CapitalLayout, esg: EsgLayout, specialist: SpecialistLayout };
  const Layout = layouts[service.layout] || OperationsLayout;
  return <Layout service={service} />;
}

export default function ServicePage({ onRequestConsultation }) {
  const { slug } = useParams();
  const service = servicePagesData[slug] || servicePagesData['specialized-services'];

  return (
    <main className="service-page-enter bg-[#FBF3DD]/30 text-[#33312A]">
      <section className="relative min-h-[620px] overflow-hidden bg-[#16140F] text-white">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16140F] via-[#16140F]/85 to-[#16140F]/35" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Link to="/" className="mb-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[#C9A227]"><ArrowLeft className="h-4 w-4" /> Back to iLogBC</Link>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">{service.eyebrow}</p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[1.05] sm:text-7xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{service.description}</p>
            <button type="button" onClick={onRequestConsultation} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#9C7A1A] hover:shadow-xl">Discuss this service <ArrowUpRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">How we help</p><h2 className="mt-3 font-serif text-4xl text-[#16140F] sm:text-5xl">Advice built for the decision in front of you.</h2></div>
        <ServiceBody service={service} />
      </section>
      <section className="bg-[#16140F] px-4 py-16 text-center text-white sm:px-6 lg:py-20"><h2 className="font-serif text-3xl sm:text-4xl">Move the next decision forward.</h2><button type="button" onClick={onRequestConsultation} className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#C9A227] transition-all hover:bg-[#C9A227] hover:text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></button></section>
    </main>
  );
}
