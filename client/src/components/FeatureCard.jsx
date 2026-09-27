import React from 'react';
import * as Icons from 'lucide-react';

export default function FeatureCard({ icon, label, title, description }) {
  const IconComponent = Icons[icon] || Icons.CheckCircle2;

  return (
    <div className="group rounded-2xl p-8 bg-white border border-[#E8E2D2] hover:border-[#C9A227] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Top Subtle Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FBF3DD] group-hover:bg-[#C9A227] transition-colors duration-300"></div>

      <div>
        {/* Card Header Label & Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-block text-[11px] font-sans uppercase tracking-widest font-semibold text-[#9C7A1A] bg-[#FBF3DD] px-3 py-1 rounded-full">
            {label}
          </span>
          <div className="p-3 rounded-xl bg-[#FBF3DD]/50 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-serif text-2xl font-normal text-[#16140F] mb-3 group-hover:text-[#9C7A1A] transition-colors">
          {title}
        </h3>

        {/* Card Description */}
        <p className="font-sans text-sm leading-relaxed text-[#33312A]">
          {description}
        </p>
      </div>

      {/* Decorative hairline link footer */}
      <div className="mt-8 pt-4 border-t border-[#E8E2D2] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#6B6858] group-hover:text-[#C9A227] transition-colors">
        <span>Strategic Advisory</span>
        <span className="text-lg">→</span>
      </div>
    </div>
  );
}
