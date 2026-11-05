import React, { useState } from 'react';
import { 
  Phone, 
  ChevronDown, 
  X, 
  Menu, 
  ArrowRight, 
  CreditCard, 
  Store, 
  Laptop, 
  Link as LinkIcon, 
  ShieldCheck, 
  Gift, 
  ExternalLink, 
  Sparkles,
  Zap,
  Building2,
  Search
} from 'lucide-react';

export default function Header({ currentPage = 'home', onNavigate, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsHover, setSolutionsHover] = useState(false);

  const handleNav = (page, anchor) => {
    setSolutionsHover(false);
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

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (currentPage === 'home') {
      const el = document.querySelector('#quote-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === 'pos') {
      const el = document.querySelector('#pos-quote-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      handleNav('home', '#quote-section');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-2xs font-sans">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#0B132B] text-slate-300 text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Top Left: Exact Value Proposition Copy */}
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 bg-brand-primary/25 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-400/30 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              AU Notice
            </span>
            <span className="text-slate-300 font-medium truncate">
              Same-day settlement · No lock-in contracts · No monthly gateway fees · Switch in days, not weeks.
            </span>
            <button
              onClick={handleQuoteClick}
              className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline ml-1 cursor-pointer"
            >
              Get a quote →
            </button>
          </div>

          {/* Top Right: Phone, Log In & AU Indicator */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold shrink-0">
            <a 
              href="tel:0283199500" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="tracking-tight">02 8319 9500</span>
            </a>

            <span className="h-3 w-px bg-slate-700 hidden sm:block" />

            <a 
              href="https://portal.visionpay.com.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Log in</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <span className="h-3 w-px bg-slate-700 hidden sm:block" />

            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-300">
              <span>🇦🇺</span>
              <span>Sydney, AU</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo (Worldpay Style - Clean wordmark without distracting badges) */}
        <div className="flex items-center shrink-0">
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg py-1 text-left cursor-pointer"
            aria-label="VisionPay Home"
          >
            <img 
              src="/visionpay-logo.png" 
              alt="VisionPay" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>
        </div>

        {/* Center: Navigation Links Matching Worldpay Layout (Products, Who we serve, Insights, Developers, Support, About) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-semibold text-slate-800">
          
          {/* Products Dropdown with Mega-Menu */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setSolutionsHover(true)}
            onMouseLeave={() => setSolutionsHover(false)}
          >
            <button 
              className="flex items-center gap-1.5 hover:text-brand-primary focus:outline-none transition-colors cursor-pointer"
              onClick={() => setSolutionsHover(!solutionsHover)}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${solutionsHover ? 'rotate-180 text-brand-primary' : ''}`} />
            </button>

            {/* Mega Menu Dropdown Panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[740px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transition-all duration-200 ease-out z-50 ${
              solutionsHover ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Australian Payment Ecosystem</span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Same-day settlement included
                </span>
              </div>

              {/* 6 Grid Items */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* 1. Online Payments */}
                <button 
                  onClick={() => handleNav('gateway')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Online Payments</span>
                    <p className="text-xs text-slate-500 mt-0.5">Accept cards on your website, app or platform. Plugins or APIs with $0 monthly fees.</p>
                  </div>
                </button>

                {/* 2. In-Store EFTPOS */}
                <button 
                  onClick={() => handleNav('instore')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">In-Store EFTPOS</span>
                    <p className="text-xs text-slate-500 mt-0.5">Standalone or integrated PAX A920 smart terminals delivered in 2 business days.</p>
                  </div>
                </button>

                {/* 3. VisionPay POS (New) */}
                <button 
                  onClick={() => handleNav('pos')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">VisionPay POS</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded uppercase">NEW · $0/MO</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">All-in-one POS with built-in payments, $0 monthly software fees and same-day settlement.</p>
                  </div>
                </button>

                {/* 4. Payment Links */}
                <button 
                  onClick={() => handleNav('links')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Payment Links</span>
                    <p className="text-xs text-slate-500 mt-0.5">Send invoice links by SMS, email or WhatsApp and get paid before you leave the job.</p>
                  </div>
                </button>

                {/* 5. Fraud Protection */}
                <button 
                  onClick={() => handleNav('gateway', '#api-showcase')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Fraud Protection</span>
                    <p className="text-xs text-slate-500 mt-0.5">3DS2 authentication and smart transaction screening that blocks fraud without blocking good customers.</p>
                  </div>
                </button>

                {/* 6. Gift Cards */}
                <button 
                  onClick={() => handleNav('home', '#solutions-grid')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Gift Cards</span>
                      <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded uppercase">Loyalty</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Digital gift cards from Australia's favourite brands for gifting, staff and client rewards.</p>
                  </div>
                </button>

              </div>

              {/* Bottom Mega Menu Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                <span className="text-xs text-slate-500">Need a custom volume or interchange-plus rate?</span>
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Calculate your custom rate <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Who we serve (Worldpay Section 3) */}
          <button 
            onClick={() => handleNav('home', '#who-we-serve')} 
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Who we serve
          </button>

          {/* Insights (Worldpay Reports & Industry Insights) */}
          <button 
            onClick={() => handleNav('home', '#insights-section')} 
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Insights
          </button>

          {/* Developers & Integrations */}
          <button 
            onClick={() => handleNav('home', '#partners-section')} 
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Developers
          </button>

          {/* Support */}
          <button 
            onClick={() => handleNav('home', '#need-help-section')} 
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Support
          </button>

          {/* About */}
          <button 
            onClick={() => handleNav('home', '#partner-banner')} 
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            About
          </button>

        </nav>

        {/* Right: Search, Phone & Primary CTA Pill Button (Worldpay Style in Brand Blue) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Quick Phone Call */}
          <a 
            href="tel:0283199500" 
            className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-primary" />
            <span>02 8319 9500</span>
          </a>

          {/* Search Trigger Icon (Worldpay style) */}
          <button
            onClick={handleQuoteClick}
            aria-label="Search or Quick Quote"
            className="p-2 text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Primary CTA [Contact us] Rounded Pill in Brand Blue */}
          <button 
            onClick={handleQuoteClick}
            className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 rounded-full shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Contact us</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="space-y-2 text-sm font-bold text-slate-900">
            <button onClick={() => handleNav('gateway')} className="block w-full text-left py-2 hover:text-brand-primary">Online Payments</button>
            <button onClick={() => handleNav('instore')} className="block w-full text-left py-2 hover:text-brand-primary">In-Store EFTPOS</button>
            <button onClick={() => handleNav('pos')} className="block w-full text-left py-2 hover:text-brand-primary">VisionPay POS ($0/mo)</button>
            <button onClick={() => handleNav('links')} className="block w-full text-left py-2 hover:text-brand-primary">Payment Links</button>
            <button onClick={() => handleNav('home', '#solutions-grid')} className="block w-full text-left py-2 hover:text-brand-primary">Gift Cards & Loyalty</button>
            <button onClick={() => handleNav('home', '#partners-section')} className="block w-full text-left py-2 hover:text-brand-primary">Integrations & Partners</button>
            <button onClick={() => handleNav('home', '#faq-section')} className="block w-full text-left py-2 hover:text-brand-primary">FAQ</button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button 
              onClick={handleQuoteClick}
              className="w-full bg-brand-primary hover:bg-[#172DC2] text-white font-bold py-3 rounded-xl text-center text-sm shadow-xs"
            >
              Get a Quote
            </button>
            <a 
              href="tel:0283199500" 
              className="w-full bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5"
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
