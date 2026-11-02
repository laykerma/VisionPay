import React, { useState } from 'react';
import { 
  Phone, 
  ChevronDown, 
  X, 
  Menu, 
  ArrowRight, 
  Laptop, 
  CreditCard, 
  Store, 
  Link as LinkIcon, 
  ShieldCheck, 
  Gift,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function Header({ currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

  const handleNav = (page, anchor) => {
    setMegaMenuHover(false);
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

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* 1. TOP UTILITY BAR (Worldpay Corporate Style) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Top Left: Value proposition & Australian badge */}
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1 bg-brand-primary/25 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-400/30 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {currentPage === 'pos' ? 'POS Special' : 'AU Special'}
            </span>
            <span className="text-slate-300 font-medium truncate">
              {currentPage === 'pos'
                ? '$0 monthly software fees · Same-day settlement 7 days · No lock-in'
                : 'Same-day settlement · No lock-in contracts · $0 monthly gateway fees'}
            </span>
          </div>

          {/* Top Right: Phone and Merchant Portal Log In */}
          <div className="flex items-center gap-5 text-xs font-semibold shrink-0">
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
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo with Australian Fintech Marker */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg py-1 text-left cursor-pointer"
          >
            <img 
              src="/visionpay-logo.png" 
              alt="VisionPay Logo" 
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-102 transition-transform"
            />
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 border border-blue-200/80 px-2 py-0.5 rounded-full shadow-2xs">
              <span className="text-xs leading-none">🇦🇺</span>
              <span>AU</span>
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links (Worldpay Style) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          
          {/* Solutions Dropdown with Mega Menu */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setMegaMenuHover(true)}
            onMouseLeave={() => setMegaMenuHover(false)}
          >
            <button 
              className="flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-brand-primary focus:outline-none transition-colors cursor-pointer"
              onClick={() => setMegaMenuHover(!megaMenuHover)}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${megaMenuHover ? 'rotate-180 text-brand-primary' : ''}`} />
            </button>

            {/* Mega Menu Dropdown Panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[740px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transition-all duration-200 ease-out z-50 ${
              megaMenuHover ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
            }`}>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Omnichannel Payment Solutions</span>
                </div>
                <span className="text-xs font-semibold text-brand-primary bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Same-day settlement included
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3.5">
                {/* In-Store EFTPOS */}
                <button 
                  onClick={() => handleNav('instore')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">In-Store EFTPOS</span>
                      <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">PAX A920</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Standalone or cloud-integrated smart terminals with 2-day delivery.</p>
                  </div>
                </button>

                {/* Online Payment Gateway */}
                <button 
                  onClick={() => handleNav('gateway')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Payment Gateway</span>
                      <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">$0 Fee</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Plug & play plugins for WooCommerce, Shopify & custom REST APIs.</p>
                  </div>
                </button>

                {/* VisionPay POS */}
                <button 
                  onClick={() => handleNav('pos')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">VisionPay POS</span>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded uppercase">$0 Software</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">$0/mo software fee POS with free menu setup & inventory sync.</p>
                  </div>
                </button>

                {/* Payment Links */}
                <button 
                  onClick={() => handleNav('links')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Payment Links</span>
                      <span className="text-[10px] font-bold bg-blue-100 text-brand-primary px-1.5 py-0.2 rounded">Fast SMS</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Send custom SMS & email pay-links with instant tap-to-pay clearance.</p>
                  </div>
                </button>

                {/* Fraud Protection */}
                <button 
                  onClick={() => handleNav('gateway', '#api-showcase')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Fraud Protection</span>
                    <p className="text-xs text-slate-500 mt-0.5">3DS2 automated liability shift with smart AI risk decisioning.</p>
                  </div>
                </button>

                {/* Gift Cards */}
                <button 
                  onClick={() => handleNav('home', '#solutions-grid')} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item text-left w-full cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-brand-primary">Gift Cards</span>
                      <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded uppercase">Loyalty</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Digital & physical cards via GiftPilot for retail & corporate perks.</p>
                  </div>
                </button>
              </div>

              {/* Bottom Mega Menu Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                <span className="text-xs text-slate-500">Compare rates or request tailored interchange-plus pricing:</span>
                <button 
                  onClick={() => handleNav(currentPage, '#quote-section')} 
                  className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Calculate your custom rate <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <button 
            onClick={() => handleNav('home', '#partners-section')} 
            className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Integrations
          </button>

          {/* Partners */}
          <button 
            onClick={() => handleNav('home', '#partners-section')} 
            className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Partners
          </button>

          {/* Contact */}
          <button 
            onClick={() => handleNav(currentPage, '#contact-footer')} 
            className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Primary Call to Action Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              let targetId = '#quote-section';
              if (currentPage === 'pos') targetId = '#pos-quote-form';
              else if (currentPage === 'instore') targetId = '#terminal-quote';
              else if (currentPage === 'gateway') targetId = '#gateway-quote';
              else if (currentPage === 'links') targetId = '#link-quote';
              handleNav(currentPage, targetId);
            }} 
            className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md shadow-brand-primary/25 hover:shadow-glow-primary transition-all transform active:scale-95 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Drawer Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer" 
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4 shadow-xl animate-in fade-in duration-150">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">Products & Solutions</p>
            <button 
              onClick={() => handleNav('home')} 
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Omnichannel Overview</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNav('instore')} 
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>In-Store EFTPOS (PAX A920)</span>
              <span className="text-xs text-brand-primary font-semibold">2-Day Delivery</span>
            </button>
            <button 
              onClick={() => handleNav('gateway')} 
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Payment Gateway</span>
              <span className="text-xs text-emerald-600 font-semibold">$0 Fee</span>
            </button>
            <button 
              onClick={() => handleNav('pos')} 
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>VisionPay POS System</span>
              <span className="text-xs text-purple-600 font-semibold">$0/mo</span>
            </button>
            <button 
              onClick={() => handleNav('links')} 
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Payment Links (SMS/Email)</span>
              <span className="text-xs text-blue-600 font-semibold">Instant Tap</span>
            </button>
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-1">
            <button 
              onClick={() => handleNav('home', '#partners-section')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Integrations (Xero, MYOB, WooCommerce)
            </button>
            <button 
              onClick={() => handleNav('home', '#partners-section')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Partners & Referral Program
            </button>
            <button 
              onClick={() => handleNav(currentPage, '#contact-footer')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact Us
            </button>
          </div>

          <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
            <a 
              href="tel:0283199500" 
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-bold py-3 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>Call 02 8319 9500</span>
            </a>
            <button 
              onClick={() => handleNav(currentPage, '#quote-section')} 
              className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl text-sm shadow-md"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
