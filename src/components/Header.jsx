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
  Gift 
} from 'lucide-react';

export default function Header({ currentPage = 'home', onNavigate }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
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
    <>
      {/* 1. Announcement Bar */}
      {showAnnouncement && (
        <aside className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 mx-auto text-center font-medium">
              <span className="inline-flex items-center justify-center bg-brand-primary/20 text-brand-primary-border px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-primary/30">
                Australian Special
              </span>
              <span className="text-slate-300">
                Same-day settlement · No lock-in contracts · Terminals delivered within 2 business days.{' '}
                <button 
                  onClick={() => handleNav('instore', '#terminal-quote')} 
                  className="text-white font-semibold underline decoration-brand-primary underline-offset-4 hidden md:inline ml-1 hover:text-brand-primary-border transition-colors cursor-pointer"
                >
                  Order Terminals →
                </button>
              </span>
            </div>
            <button 
              onClick={() => setShowAnnouncement(false)} 
              className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Sticky Global Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Brand Logo with Official Uploaded Logo Image */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg p-1 text-left cursor-pointer"
          >
            <img 
              src="/visionpay-logo.png" 
              alt="VisionPay Logo" 
              className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary-light px-1.5 py-0.5 rounded border border-brand-primary-border">
              AU
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            
            {/* Quick 3-Way Product View Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold border border-slate-200 mr-2">
              <button
                onClick={() => handleNav('home')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${currentPage === 'home' ? 'bg-white text-brand-navy shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Ecosystem
              </button>
              <button
                onClick={() => handleNav('instore')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${currentPage === 'instore' ? 'bg-brand-primary text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span>In-Store EFTPOS</span>
                <span className="text-[9px] font-extrabold uppercase px-1 py-0.2 rounded bg-white/20">PAX</span>
              </button>
              <button
                onClick={() => handleNav('gateway')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${currentPage === 'gateway' ? 'bg-brand-primary text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span>Online Gateway</span>
                <span className="text-[9px] font-extrabold uppercase px-1 py-0.2 rounded bg-white/20">$0 Fee</span>
              </button>
            </div>

            {/* Mega Menu Trigger */}
            <div 
              className="relative py-6"
              onMouseEnter={() => setMegaMenuHover(true)}
              onMouseLeave={() => setMegaMenuHover(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-slate hover:text-brand-primary focus:outline-none transition-colors cursor-pointer"
                onClick={() => setMegaMenuHover(!megaMenuHover)}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${megaMenuHover ? 'rotate-180 text-brand-primary' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-2xl shadow-2xl border border-brand-border p-6 transition-all duration-200 ease-out z-50 ${
                megaMenuHover ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
              }`}>
                <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">Unified Payment Solutions</span>
                  <span className="text-xs font-semibold text-brand-primary bg-brand-primary-light px-2.5 py-0.5 rounded-full border border-brand-primary-border">
                    Same-day settlement included
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* In-Store EFTPOS -> Navigates to instore */}
                  <button 
                    onClick={() => handleNav('instore')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-primary-light text-brand-primary flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">In-Store EFTPOS</span>
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">PAX A920</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Standalone or cloud-integrated smart terminals with 2-day delivery.</p>
                    </div>
                  </button>

                  {/* Online Payments -> Navigates to gateway */}
                  <button 
                    onClick={() => handleNav('gateway')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-primary-light text-brand-primary flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">Online Payments</span>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">$0 Fee</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Plug & play gateway plugins for WooCommerce, Shopify & custom APIs.</p>
                    </div>
                  </button>

                  {/* VisionPay POS */}
                  <button 
                    onClick={() => handleNav('home', '#solutions-grid')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">VisionPay POS</span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded uppercase">NEW</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">$0 monthly software fee POS with free menu/inventory setup.</p>
                    </div>
                  </button>

                  {/* Payment Links */}
                  <button 
                    onClick={() => handleNav('home', '#solutions-grid')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-brand-amber flex items-center justify-center shrink-0 group-hover/item:bg-brand-amber group-hover/item:text-white transition-colors">
                      <LinkIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">Payment Links</span>
                      <p className="text-xs text-brand-muted mt-0.5">Send custom SMS & email pay-links for instant tap-to-pay clearance.</p>
                    </div>
                  </button>

                  {/* Fraud Protection */}
                  <button 
                    onClick={() => handleNav('gateway', '#api-showcase')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">Fraud Protection</span>
                      <p className="text-xs text-brand-muted mt-0.5">3DS2 automated liability shift with smart AI risk decisioning.</p>
                    </div>
                  </button>

                  {/* Gift Cards */}
                  <button 
                    onClick={() => handleNav('home', '#solutions-grid')} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item text-left w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-primary">Gift Cards</span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded uppercase">NEW</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Digital & physical cards via GiftPilot for retail & corporate perks.</p>
                    </div>
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between bg-brand-light -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                  <span className="text-xs text-slate-500">Need advice on hardware or custom rate comparison?</span>
                  <button 
                    onClick={() => handleNav(currentPage, '#quote-section')} 
                    className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Calculate your custom rate <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNav('home', '#partners-section')} 
              className="text-sm font-semibold text-brand-slate hover:text-brand-primary transition-colors cursor-pointer"
            >
              Integrations
            </button>
            <button 
              onClick={() => handleNav('home', '#partners-section')} 
              className="text-sm font-semibold text-brand-slate hover:text-brand-primary transition-colors cursor-pointer"
            >
              Partners
            </button>
            <button 
              onClick={() => handleNav(currentPage, '#contact-footer')} 
              className="text-sm font-semibold text-brand-slate hover:text-brand-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Click-to-call Phone */}
            <a href="tel:0283199500" className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-primary transition-colors py-1.5 px-2.5 rounded-lg hover:bg-brand-light">
              <div className="w-7 h-7 rounded-full bg-brand-primary-light text-brand-primary flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-tight">02 8319 9500</span>
            </a>

            {/* Log In */}
            <a href="https://portal.visionpay.com.au" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors">
              Log in
            </a>

            {/* Sticky Primary CTA */}
            <button 
              onClick={() => {
                let targetId = '#quote-section';
                if (currentPage === 'instore') targetId = '#terminal-quote';
                if (currentPage === 'gateway') targetId = '#gateway-quote';
                handleNav(currentPage, targetId);
              }} 
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-brand-primary/25 hover:shadow-glow-primary transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Drawer Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 text-brand-slate hover:text-brand-navy focus:outline-none cursor-pointer" 
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border bg-white px-4 py-6 space-y-4 shadow-lg animate-in fade-in duration-150">
            <div className="flex items-center gap-2 pb-3 border-b border-brand-border">
              <button 
                onClick={() => handleNav('home')} 
                className={`flex-1 py-2 rounded-lg text-xs font-bold ${currentPage === 'home' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                Ecosystem
              </button>
              <button 
                onClick={() => handleNav('instore')} 
                className={`flex-1 py-2 rounded-lg text-xs font-bold ${currentPage === 'instore' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                EFTPOS
              </button>
              <button 
                onClick={() => handleNav('gateway')} 
                className={`flex-1 py-2 rounded-lg text-xs font-bold ${currentPage === 'gateway' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                Online
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm font-semibold pb-4 border-b border-brand-border">
              <button onClick={() => handleNav('instore')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-primary font-bold">
                In-Store EFTPOS →
              </button>
              <button onClick={() => handleNav('gateway')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-primary font-bold">
                Online Gateway →
              </button>
              <button onClick={() => handleNav('home', '#solutions-grid')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-navy">
                VisionPay POS
              </button>
              <button onClick={() => handleNav('home', '#solutions-grid')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-navy">
                Payment Links
              </button>
              <button onClick={() => handleNav('gateway', '#api-showcase')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-navy">
                Developer API
              </button>
              <button onClick={() => handleNav('home', '#solutions-grid')} className="p-2 text-left rounded-lg hover:bg-brand-light text-brand-navy">
                Gift Cards
              </button>
            </div>
            
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:0283199500" className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-brand-border text-brand-navy font-bold text-sm">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>Call 02 8319 9500</span>
              </a>
              <button 
                onClick={() => {
                  let targetId = '#quote-section';
                  if (currentPage === 'instore') targetId = '#terminal-quote';
                  if (currentPage === 'gateway') targetId = '#gateway-quote';
                  handleNav(currentPage, targetId);
                }} 
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-primary text-white font-bold text-sm shadow-md"
              >
                <span>Get a Quote in 1 Day</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
