import React, { useState } from 'react';
import { 
  Phone, 
  ChevronDown, 
  X, 
  Menu, 
  ArrowRight, 
  Search, 
  ExternalLink, 
  Globe, 
  CreditCard, 
  Store, 
  Laptop, 
  Link as LinkIcon, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Building2,
  FileText
} from 'lucide-react';

export default function Header({ currentPage = 'home', onNavigate, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('United States (English)');

  const handleNav = (page, anchor) => {
    setProductsOpen(false);
    setWhoWeServeOpen(false);
    setInsightsOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.querySelector('#contact-section') || document.querySelector('#need-help-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-2xs font-sans">
      
      {/* 1. TOP UTILITY BAR (Exact Worldpay Corporate Style) */}
      <div className="bg-[#0b0e3b] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Top Left: Subtitle or subtle global announcement */}
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1 bg-[#ff3b47]/20 text-rose-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-rose-500/30 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b47] animate-pulse"></span>
              Global
            </span>
            <span className="text-slate-300 font-medium truncate hidden md:inline">
              Next-generation omnichannel payments and agentic commerce technology
            </span>
          </div>

          {/* Top Right: Region Selector, Careers & Sign In */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium ml-auto shrink-0">
            
            {/* Country / Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px] sm:text-xs"
              >
                <span className="text-sm">🇺🇸</span>
                <span>{selectedRegion}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {regionMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs">
                  <button
                    onClick={() => { setSelectedRegion('United States (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 font-medium"
                  >
                    <span>🇺🇸</span>
                    <span>United States (English)</span>
                  </button>
                  <button
                    onClick={() => { setSelectedRegion('Australia (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 font-medium"
                  >
                    <span>🇦🇺</span>
                    <span>Australia (English)</span>
                  </button>
                  <button
                    onClick={() => { setSelectedRegion('United Kingdom (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 font-medium"
                  >
                    <span>🇬🇧</span>
                    <span>United Kingdom (English)</span>
                  </button>
                </div>
              )}
            </div>

            <span className="h-3 w-px bg-slate-700 hidden sm:block" />

            <a 
              href="tel:0283199500" 
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>02 8319 9500</span>
            </a>

            <span className="h-3 w-px bg-slate-700 hidden lg:block" />

            <a 
              href="#careers" 
              onClick={(e) => { e.preventDefault(); handleNav('home', '#need-help-section'); }}
              className="text-slate-300 hover:text-white transition-colors text-[11px] sm:text-xs"
            >
              Careers
            </a>

            <span className="h-3 w-px bg-slate-700" />

            <a 
              href="https://portal.visionpay.com.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] sm:text-xs font-semibold"
            >
              <span>Sign in</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Left: VisionPay Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#ff3b47] rounded-lg py-1 text-left cursor-pointer"
          >
            <img 
              src="/visionpay-logo.png" 
              alt="VisionPay" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>
        </div>

        {/* Center: Desktop Navigation Links (Worldpay Style) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-semibold text-[#0e0e33]">
          
          {/* Products Mega Dropdown */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-[#ff3b47] focus:outline-none transition-colors cursor-pointer"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#ff3b47]' : ''}`} />
            </button>

            {/* Products Panel */}
            <div className={`absolute top-full left-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transition-all duration-200 ease-out z-50 ${
              productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}>
              <div className="grid grid-cols-2 gap-4">
                
                {/* Product 1: POS Systems */}
                <button 
                  onClick={() => handleNav('pos')} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-brand-primary">VisionPay POS</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">$0/MO</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Commercial counter POS, dual screens & KDS with $0 software fee.</p>
                  </div>
                </button>

                {/* Product 2: In-Store EFTPOS */}
                <button 
                  onClick={() => handleNav('instore')} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-primary">Smart EFTPOS</span>
                    <p className="text-xs text-slate-500 mt-0.5">PAX A920 terminals with 4G SIM, contactless tap & instant receipts.</p>
                  </div>
                </button>

                {/* Product 3: Online Gateway */}
                <button 
                  onClick={() => handleNav('gateway')} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-primary">Online Payments</span>
                    <p className="text-xs text-slate-500 mt-0.5">High-converting checkout SDKs, WooCommerce, Shopify & 3DS2.</p>
                  </div>
                </button>

                {/* Product 4: Payment Links */}
                <button 
                  onClick={() => handleNav('links')} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-primary">Payment Links</span>
                    <p className="text-xs text-slate-500 mt-0.5">Send instant payment links via SMS, WhatsApp & digital invoices.</p>
                  </div>
                </button>

              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Same-day settlement to any bank 7 days a week</span>
                <button 
                  onClick={() => handleNav('home', '#powering-payments')} 
                  className="font-bold text-[#ff3b47] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View all capabilities <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Who we serve Dropdown */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setWhoWeServeOpen(true)}
            onMouseLeave={() => setWhoWeServeOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-[#ff3b47] focus:outline-none transition-colors cursor-pointer"
              onClick={() => setWhoWeServeOpen(!whoWeServeOpen)}
            >
              <span>Who we serve</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${whoWeServeOpen ? 'rotate-180 text-[#ff3b47]' : ''}`} />
            </button>

            {whoWeServeOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50">
                <button 
                  onClick={() => handleNav('home', '#who-we-serve')} 
                  className="w-full text-left px-5 py-2 hover:bg-slate-50 text-slate-800 text-xs font-semibold block cursor-pointer"
                >
                  Small and mid-sized businesses
                </button>
                <button 
                  onClick={() => handleNav('home', '#who-we-serve')} 
                  className="w-full text-left px-5 py-2 hover:bg-slate-50 text-slate-800 text-xs font-semibold block cursor-pointer"
                >
                  Enterprise & Global Brands
                </button>
                <button 
                  onClick={() => handleNav('pos')} 
                  className="w-full text-left px-5 py-2 hover:bg-slate-50 text-slate-800 text-xs font-semibold block cursor-pointer"
                >
                  Cafes, Restaurants & Bars
                </button>
                <button 
                  onClick={() => handleNav('home', '#customer-stories')} 
                  className="w-full text-left px-5 py-2 hover:bg-slate-50 text-slate-800 text-xs font-semibold block cursor-pointer"
                >
                  Retail & Omnichannel Merchants
                </button>
              </div>
            )}
          </div>

          {/* Insights */}
          <button 
            onClick={() => handleNav('home', '#insights-section')} 
            className="hover:text-[#ff3b47] transition-colors cursor-pointer"
          >
            Insights
          </button>

          {/* Developers */}
          <button 
            onClick={() => handleNav('gateway', '#api-showcase')} 
            className="hover:text-[#ff3b47] transition-colors cursor-pointer"
          >
            Developers
          </button>

          {/* Support */}
          <button 
            onClick={() => handleNav('home', '#need-help-section')} 
            className="hover:text-[#ff3b47] transition-colors cursor-pointer"
          >
            Support
          </button>

          {/* About */}
          <button 
            onClick={() => handleNav('home', '#customer-stories')} 
            className="hover:text-[#ff3b47] transition-colors cursor-pointer"
          >
            About
          </button>

        </nav>

        {/* Right Action Group: Search Icon + Worldpay Red Pill "Contact us" Button */}
        <div className="flex items-center gap-3.5">
          
          {/* Search Toggle Icon */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Signature Worldpay Red Pill Button */}
          <button 
            onClick={handleContactClick}
            className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Contact us</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Optional Search Bar Drawer */}
      {searchOpen && (
        <div className="border-t border-slate-200 bg-slate-50 py-3 px-4 sm:px-8 animate-fadeIn">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search solutions, products, documentation, or reports..." 
              className="w-full bg-transparent border-none text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              autoFocus
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-700"
            >
              ESC
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="space-y-2 text-sm font-bold text-[#0e0e33]">
            <button onClick={() => handleNav('pos')} className="block w-full text-left py-2 hover:text-[#ff3b47]">VisionPay POS ($0/mo)</button>
            <button onClick={() => handleNav('instore')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Smart EFTPOS (PAX A920)</button>
            <button onClick={() => handleNav('gateway')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Online Payment Gateway</button>
            <button onClick={() => handleNav('links')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Payment Links</button>
            <button onClick={() => handleNav('home', '#who-we-serve')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Who we serve</button>
            <button onClick={() => handleNav('home', '#insights-section')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Insights</button>
            <button onClick={() => handleNav('home', '#customer-stories')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Customer Stories</button>
            <button onClick={() => handleNav('home', '#need-help-section')} className="block w-full text-left py-2 hover:text-[#ff3b47]">Support & Help</button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button 
              onClick={handleContactClick}
              className="w-full bg-[#ff3b47] text-white font-bold py-3 rounded-full text-center text-sm"
            >
              Contact us
            </button>
            <a 
              href="tel:0283199500" 
              className="w-full bg-slate-100 text-slate-800 font-bold py-2.5 rounded-full text-center text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>Call 02 8319 9500</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
