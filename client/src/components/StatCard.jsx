import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function StatCard({ label, stat, description, metricLabel, metricValue, progress, icon }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = Icons[icon] || Icons.BarChart3;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group h-full rounded-2xl p-6 bg-white border transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer relative overflow-hidden ${
        isHovered
          ? 'border-[#C9A227] shadow-xl bg-[#FBF3DD]/20 -translate-y-1'
          : 'border-[#E8E2D2] hover:border-[#C9A227]'
      }`}
    >
      {/* Top Gold Accent Highlight */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${isHovered ? 'bg-[#C9A227]' : 'bg-[#E8E2D2]'}`}></div>

      <div className="flex flex-1 flex-col">
        {/* Card Top Row: Label Pill + Icon */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-sans uppercase tracking-widest font-semibold text-[#9C7A1A] bg-[#FBF3DD] px-3 py-1 rounded-full border border-[#C9A227]/20">
            {label}
          </span>
          <div className={`p-2 rounded-xl transition-colors ${isHovered ? 'bg-[#C9A227] text-white' : 'bg-[#FBF3DD] text-[#C9A227]'}`}>
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Big Serif Stat Number (ALWAYS VISIBLE) */}
        <div className={`font-serif text-4xl sm:text-5xl font-semibold text-[#16140F] tracking-tight my-2 transition-all duration-300 z-10 ${
          isHovered
            ? 'relative text-left translate-y-0'
            : 'absolute inset-x-6 top-1/2 -translate-y-1/2 text-center'
        }`}>
          {stat}
        </div>

        {/* Keep the detail space reserved so hover does not resize the card. */}
        <div
          className={`flex-1 transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-100 mt-3 pt-3 border-t border-[#E8E2D2]' : 'opacity-0 mt-3 pt-3 border-t border-transparent'
          }`}
        >
          <p className="font-sans text-xs sm:text-sm text-[#33312A] font-normal leading-relaxed mb-4">
            {description}
          </p>

          {/* Footer Metric Row or Progress Bar */}
          {progress !== undefined ? (
            <div>
              <div className="flex justify-between text-[11px] font-semibold text-[#6B6858] mb-1">
                <span>{metricLabel}</span>
                <span className="text-[#C9A227]">{metricValue}</span>
              </div>
              <div className="w-full bg-[#E8E2D2] h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#C9A227] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-[#6B6858] font-medium text-[11px]">{metricLabel}:</span>
              <span className="font-semibold text-[#16140F] bg-white px-2.5 py-0.5 rounded border border-[#E8E2D2]">
                {metricValue}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Default State Hint */}
      <div className={`absolute bottom-6 left-6 text-[10px] uppercase tracking-widest font-semibold text-[#6B6858] opacity-70 transition-opacity ${isHovered ? 'opacity-0' : ''}`}>
        Hover for details →
      </div>
    </div>
  );
}
