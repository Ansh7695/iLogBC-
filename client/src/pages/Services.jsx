import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicePagesData } from '../data/servicePagesData';

const serviceEntries = Object.entries(servicePagesData);

export default function Services() {
  return (
    <main className="bg-[#FBF3DD]/30 text-[#33312A]">
      <section className="relative overflow-hidden bg-[#16140F] px-4 py-20 text-white sm:px-6 lg:py-28">
        <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full border border-[#C9A227]/20" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">Advisory services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-normal leading-tight sm:text-7xl">Services built for complex logistics decisions.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">Sector-focused support spanning operations, infrastructure, investment, compliance and India market entry.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Explore the practice</p>
            <h2 className="mt-3 font-serif text-4xl text-[#16140F]">Choose the decision you need to move.</h2>
          </div>
          <span className="text-xs text-[#6B6858]">{serviceEntries.length} specialist service areas</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceEntries.map(([slug, service], index) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className={`service-reveal group relative min-h-[250px] overflow-hidden rounded-[2rem] border border-[#E8E2D2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl ${index === 0 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#C9A227]">0{index + 1}</span>
                  <ArrowUpRight className="h-5 w-5 text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B6858]">{service.eyebrow}</p>
                  <h3 className="mt-2 max-w-md font-serif text-2xl leading-tight text-[#16140F]">{service.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#6B6858]">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#16140F] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div><p className="font-serif text-2xl">Have a complex decision ahead?</p><p className="mt-1 text-sm text-white/60">Bring us the context. We will help shape the next move.</p></div>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-[#9C7A1A]">Start with iLogBC <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
