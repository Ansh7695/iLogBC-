import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Globe } from 'lucide-react';

export default function Footer({ onRequestConsultation }) {
  return (
    <footer className="bg-[#16140F] text-white pt-20 pb-12 border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="iLogBC Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight text-white">
                  iLog<span className="text-[#C9A227]">BC</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#6B6858] uppercase font-medium">
                  Logistics & Blockchain
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
              iLogBC advises shipping, logistics, supply chain, infrastructure, manufacturing and investment businesses across India and international markets.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="iLogBC LinkedIn"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="iLogBC X"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C9A227] mb-6">
              Company
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C9A227] transition-colors">About iLogBC</Link>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#C9A227] transition-colors">Industries</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C9A227] transition-colors">Advisory Services</a>
              </li>
              <li>
                <button type="button" onClick={onRequestConsultation} className="hover:text-[#C9A227] transition-colors text-left cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C9A227] mb-6">
              Resources
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li><a href="#resources" className="hover:text-[#C9A227] transition-colors">Resource Hub</a></li>
              <li><a href="#articles" className="hover:text-[#C9A227] transition-colors">Articles</a></li>
              <li><a href="#case-studies" className="hover:text-[#C9A227] transition-colors">Case Studies</a></li>
              <li><a href="#events" className="hover:text-[#C9A227] transition-colors">Events</a></li>
              <li><a href="#policy-notes" className="hover:text-[#C9A227] transition-colors">Policy Notes</a></li>
            </ul>
          </div>

          {/* Contact Details Block (4 cols) */}
          <div className="lg:col-span-4 bg-[#FBF3DD]/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C9A227] mb-2">
              Contact Specialists
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Direct access to sector specialists.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:contact@ilogbc.com" className="hover:text-[#C9A227] transition-colors font-medium">
                  contact@ilogbc.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="tel:+919871040256" className="hover:text-[#C9A227] transition-colors font-medium">
                  +91 9871040256
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Monday–Friday, 09:00 AM–06:00 PM</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Globe className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span className="text-[#C9A227] font-semibold">Coverage: India & International Markets</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 iLogBC. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-[#C9A227] transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-[#C9A227] transition-colors">Terms & Conditions</a>
            <span>·</span>
            <a href="#disclaimer" className="hover:text-[#C9A227] transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
