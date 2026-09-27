import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, ArrowUpRight, ShieldCheck, Compass, Anchor, TrainTrack, Factory, Layers, Building2, Globe2 } from 'lucide-react';

export default function Header({ onRequestConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState('services');
  const [hoverSubCategory, setHoverSubCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuData = {
    services: {
      label: 'Our Services',
      tag: 'Advisory Services',
      description: 'Sector-focused support spanning operations, infrastructure, investment, compliance and India market entry.',
      subCategories: [
        {
          name: 'Logistics & Supply Chain Consulting',
          icon: Compass,
          items: [{ name: 'Operations', description: 'Network, freight and operational advisory', path: '/services/logistic-and-supply-chain-consulting' }]
        },
        {
          name: 'Infrastructure & Terminal Advisory',
          icon: Anchor,
          items: [{ name: 'Infrastructure', description: 'Ports, terminals, ICDs and logistics parks', path: '/services/infrastructure-and-terminal-advisory' }]
        },
        {
          name: 'Manufacturing & Trading SCM',
          icon: Factory,
          items: [{ name: 'Supply chain', description: 'Sourcing, inventory and distribution strategy', path: '/services/manufacturing-trading-scm' }]
        },
        {
          name: 'Market Entry & India Advisory',
          icon: Globe2,
          items: [{ name: 'India entry', description: 'Partner search, setup and regulatory navigation', path: '/services/market-entry-india-advisory' }]
        },
        {
          name: 'M&A, Valuation & Transaction Advisory',
          icon: ShieldCheck,
          items: [{ name: 'Transactions', description: 'Valuation, diligence and transaction support', path: '/services/ma-valuation-and-transaction-advisory' }]
        },
        {
          name: 'Legal, Compliance & Governance',
          icon: ShieldCheck,
          items: [{ name: 'Governance', description: 'Contracts, compliance and risk advisory', path: '/services/legal-compliance-and-governance-support' }]
        },
        {
          name: 'Trade Finance & Investment Advisory',
          icon: Building2,
          items: [{ name: 'Capital', description: 'Finance, working capital and investor support', path: '/services/trade-finance-and-investment-advisory' }]
        },
        {
          name: 'ESG',
          icon: Layers,
          items: [{ name: 'SUSTAINABILITY', description: 'ESG expertise, data intelligence, decarbonisation, and sustainable finance', path: '/services/esg' }]
        },
        {
          name: 'Specialized Services',
          icon: Compass,
          items: [{ name: 'Specialist', description: 'Focused support for specialist business needs', path: '/services/specialized-services' }]
        }
      ]
    },
    industries: {
      label: 'Connected Industries',
      tag: 'Sector Expertise',
      description: 'Navigating commercial realities across maritime, rail corridors, and industrial manufacturing.',
      subCategories: [
        {
          name: 'Shipping Lines & Carriers',
          icon: Anchor,
          hash: '#industries',
          items: ['Fleet Deployment', 'Berth Productivity', 'Cabotage Filings']
        },
        {
          name: 'Port & Terminal Operations',
          icon: Building2,
          hash: '#industries',
          items: ['TOC Operating Model Audit', 'Hinterland Rail Link', 'Tariff Structuring']
        },
        {
          name: 'Rail Logistics & DFC',
          icon: TrainTrack,
          hash: '#industries',
          items: ['Private Freight Terminals (PFT)', 'Wagon Investment Schemes', 'ICD Layout']
        },
        {
          name: 'Auto & Heavy Manufacturing',
          icon: Factory,
          hash: '#industries',
          items: ['In-Plant Milk-Runs', 'PLI Incentive Alignment', 'Vendor Managed Inventory']
        }
      ]
    },
    advisory: {
      label: 'Advisory & Transactions',
      tag: 'Deals & Strategy',
      description: 'Commercial due diligence, valuation, and strategic advisory for institutional investors.',
      subCategories: [
        {
          name: 'M&A & Deal Structuring',
          icon: ShieldCheck,
          hash: '#services',
          items: ['Commercial Due Diligence', 'Target Screening', 'Synergies & Integration Audit']
        },
        {
          name: 'Policy & Regulatory Filings',
          icon: Globe2,
          hash: '#services',
          items: ['Customs Duty Optimization', 'Logistics Park Filings', 'ESG Compliance']
        }
      ]
    },
    company: {
      label: 'Company & Resources',
      tag: 'iLogBC Platform',
      description: 'Learn about our practice leadership, team background, publications, and career desk.',
      subCategories: [
        {
          name: 'Explore iLogBC',
          icon: Compass,
          items: [
            { name: 'Home Page', path: '/' },
            { name: 'About iLogBC Advisory', path: '/about' },
            { name: 'Leadership & Team Experience', path: '/about' }
          ]
        },
        {
          name: 'Knowledge & Contact',
          icon: Mail,
          items: [
            { name: 'Resource Hub & Notes', hash: '#resources' },
            { name: 'Investor Desk', hash: '#investor-desk' },
            { name: 'Request Consultation', action: 'consultation' }
          ]
        }
      ]
    }
  };

  const handleLinkClick = (path, hash, action) => {
    setMegaMenuOpen(false);
    if (action === 'consultation') {
      onRequestConsultation();
      return;
    }
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#16140F]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#C9A227]/20' : 'bg-[#16140F] py-5 border-b border-[#E8E2D2]/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side: Burger Menu Button + Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              aria-label="Open Left Mega Menu"
              onClick={() => setMegaMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A227] hover:bg-[#C9A227]/10 text-white transition-all duration-200 cursor-pointer group"
            >
              <Menu className="w-5 h-5 text-[#C9A227] group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-200 group-hover:text-[#C9A227]">
                Menu
              </span>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="iLogBC Logo" 
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
              />
              <div className="flex max-w-[190px] flex-col leading-tight">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white font-semibold">
                  International Logistics
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#C9A227] font-medium">
                  &amp; Blockchain Consulting
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side: CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={onRequestConsultation}
              className="rounded-full px-6 py-2.5 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs uppercase tracking-wide font-semibold transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-0.5"
            >
              Partner With Us
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop Overlay when Mega Menu is Open */}
      {megaMenuOpen && (
        <div 
          onClick={() => setMegaMenuOpen(false)} 
          className="fixed inset-0 bg-[#16140F]/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        />
      )}

      {/* Left Mega Menu Drawer — Multi-Column Hover Expandable */}
      <div 
        className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-4xl bg-[#16140F] border-r border-[#C9A227]/30 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto no-scrollbar ${
          megaMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header Bar inside Drawer */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#16140F] sticky top-0 z-20">
          <Link to="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center gap-3">
            <img src="/logo.png" alt="iLogBC Logo" className="h-8 w-auto object-contain" />
            <div className="flex max-w-[190px] flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] text-white font-semibold">
                International Logistics
              </span>
              <span className="text-[9px] uppercase tracking-[0.12em] text-[#C9A227] font-medium">
                &amp; Blockchain Consulting
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close Navigation Menu"
            onClick={() => setMegaMenuOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-[#C9A227] text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-Column Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-grow min-h-[480px]">
          
          {/* Column 1: Main Category Options (Hover to Switch Subcategories) */}
          <div className="md:col-span-4 bg-[#16140F] p-6 border-r border-white/10 space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#6B6858] block mb-4 px-2">
              Main Options (Hover to Expand)
            </span>

            {Object.keys(megaMenuData).map((catKey) => {
              const cat = megaMenuData[catKey];
              const isHovered = hoverCategory === catKey;
              return (
                <button
                  key={catKey}
                  type="button"
                  onMouseEnter={() => {
                    setHoverCategory(catKey);
                    setHoverSubCategory(null);
                  }}
                  onClick={() => {
                    setHoverCategory(catKey);
                    setHoverSubCategory(null);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isHovered
                      ? 'bg-[#C9A227] text-white shadow-lg font-semibold transform translate-x-1'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      {cat.label}
                    </span>
                    <span className={`text-[10px] mt-0.5 ${isHovered ? 'text-white/80' : 'text-gray-400'}`}>
                      {cat.tag}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1 text-white' : 'text-gray-500'}`} />
                </button>
              );
            })}

            {/* Quick Page Links */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#6B6858] block px-2">
                Quick Pages
              </span>
              <Link
                to="/"
                onClick={() => setMegaMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  location.pathname === '/' ? 'text-[#C9A227] bg-[#C9A227]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home Page
              </Link>
              <Link
                to="/about"
                onClick={() => setMegaMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  location.pathname === '/about' ? 'text-[#C9A227] bg-[#C9A227]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                About Us Page
              </Link>
              <Link
                to="/services"
                onClick={() => setMegaMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'text-[#C9A227] bg-[#C9A227]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Services
              </Link>
              <Link
                to="/industries"
                onClick={() => setMegaMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  location.pathname === '/industries' ? 'text-[#C9A227] bg-[#C9A227]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Industries
              </Link>
            </div>
          </div>

          {/* Column 2 & 3: Subcategories Panel (Revealed on Hover of Main Option) */}
          <div className="md:col-span-8 bg-[#16140F]/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category Header */}
              <div className="mb-6 pb-4 border-b border-white/10">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full border border-[#C9A227]/30">
                  {megaMenuData[hoverCategory].tag}
                </span>
                <h3 className="font-serif text-2xl font-normal text-white mt-3">
                  {megaMenuData[hoverCategory].label}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {megaMenuData[hoverCategory].description}
                </p>
                {hoverCategory === 'services' && (
                  <Link
                    to="/services"
                    onClick={() => setMegaMenuOpen(false)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#C9A227] hover:text-white transition-colors"
                  >
                    View all services <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                {hoverCategory === 'industries' && (
                  <Link
                    to="/industries"
                    onClick={() => setMegaMenuOpen(false)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#C9A227] hover:text-white transition-colors"
                  >
                    View all industries <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* Subcategories Hover Expansion Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {megaMenuData[hoverCategory].subCategories.map((sub, idx) => {
                  const Icon = sub.icon || ChevronRight;
                  const isSubHovered = hoverSubCategory === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoverSubCategory(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSubHovered
                          ? 'bg-[#C9A227]/20 border-[#C9A227] shadow-xl'
                          : 'bg-white/5 border-white/10 hover:border-[#C9A227]/50'
                      }`}
                    >
                      {/* Subcategory Title */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`p-1.5 rounded-lg ${isSubHovered ? 'bg-[#C9A227] text-white' : 'bg-white/10 text-[#C9A227]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-sm font-semibold text-white">
                          {sub.name}
                        </h4>
                      </div>

                      {/* Expanded Sub-items List (Revealed cleanly) */}
                      <ul className="space-y-1.5 pl-7 text-xs text-gray-300">
                        {sub.items.map((item, itemIdx) => {
                          if (typeof item === 'string') {
                            return (
                              <li key={itemIdx}>
                                <a
                                  href={sub.hash || '#services'}
                                  onClick={() => handleLinkClick(null, sub.hash || '#services')}
                                  className="hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
                                  <span>{item}</span>
                                </a>
                              </li>
                            );
                          }
                          return (
                            <li key={itemIdx}>
                              {item.url ? (
                                <a
                                  href={item.url}
                                  onClick={() => setMegaMenuOpen(false)}
                                  className="group/service flex flex-col gap-1 transition-colors"
                                >
                                  <span className="flex items-center gap-1.5 font-semibold text-white group-hover/service:text-[#C9A227]">
                                    <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
                                    <span>{item.name}</span>
                                  </span>
                                  <span className="pl-2.5 text-[11px] leading-relaxed text-gray-400 group-hover/service:text-gray-300">
                                    {item.description}
                                  </span>
                                </a>
                              ) : item.path ? (
                                <Link
                                  to={item.path}
                                  onClick={() => handleLinkClick(item.path)}
                                  className="hover:text-[#C9A227] transition-colors flex items-center gap-1.5 font-medium"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
                                  <span>{item.name}</span>
                                </Link>
                              ) : item.action ? (
                                <button
                                  type="button"
                                  onClick={() => handleLinkClick(null, null, item.action)}
                                  className="hover:text-[#C9A227] transition-colors flex items-center gap-1.5 text-left cursor-pointer text-[#C9A227] font-semibold"
                                >
                                  <span>→ {item.name}</span>
                                </button>
                              ) : (
                                <a
                                  href={item.hash}
                                  onClick={() => handleLinkClick(null, item.hash)}
                                  className="hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
                                  <span>{item.name}</span>
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Footer Info inside Mega Menu */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div className="text-xs text-gray-400">
                <span>Advising Indian & international logistics decision makers.</span>
              </div>
              <button
                type="button"
                onClick={() => { setMegaMenuOpen(false); onRequestConsultation(); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs uppercase tracking-wide font-semibold shadow-md cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
