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

export default function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

  return (
    <>
      {/* 1. Announcement Bar */}
      {showAnnouncement && (
        <aside className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 mx-auto text-center font-medium">
              <span className="inline-flex items-center justify-center bg-brand-emerald/20 text-brand-emerald px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-emerald/30">
                Australian Special
              </span>
              <span className="text-slate-300">
                Same-day settlement. No lock-in contracts. No monthly gateway fees.{' '}
                <a href="#quote-section" className="text-white font-semibold underline decoration-brand-emerald underline-offset-4 hidden md:inline ml-1 hover:text-brand-emerald transition-colors">
                  Switch in days, not weeks.
                </a>
              </span>
            </div>
            <button 
              onClick={() => setShowAnnouncement(false)} 
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
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
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-emerald rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy via-brand-dark to-brand-slate flex items-center justify-center shadow-md shadow-brand-navy/15 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-brand-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-navy flex items-center gap-1">
                Vision<span className="text-brand-emerald">Pay</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded ml-1">AU</span>
              </span>
              <span className="text-[10px] text-brand-muted tracking-tight -mt-1 font-medium">All-in-One Australian Payments</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Mega Menu Trigger */}
            <div 
              className="relative py-6"
              onMouseEnter={() => setMegaMenuHover(true)}
              onMouseLeave={() => setMegaMenuHover(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-slate hover:text-brand-navy focus:outline-none transition-colors"
                onClick={() => setMegaMenuHover(!megaMenuHover)}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${megaMenuHover ? 'rotate-180 text-brand-emerald' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-2xl shadow-2xl border border-brand-border p-6 transition-all duration-200 ease-out z-50 ${
                megaMenuHover ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
              }`}>
                <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">Unified Payment Solutions</span>
                  <span className="text-xs font-medium text-brand-emerald bg-brand-emerald-light px-2.5 py-0.5 rounded-full border border-brand-emerald-border">
                    Same-day settlement included
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Online Payments */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">Online Payments</span>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">$0 Fee</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Plug & play gateway plugins for WooCommerce, Shopify & custom APIs.</p>
                    </div>
                  </a>

                  {/* In-Store EFTPOS */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-emerald flex items-center justify-center shrink-0 group-hover/item:bg-brand-emerald group-hover/item:text-white transition-colors">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">In-Store EFTPOS</span>
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">PAX A920</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Standalone or cloud-integrated smart terminals with 2-day delivery.</p>
                    </div>
                  </a>

                  {/* VisionPay POS */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">VisionPay POS</span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded uppercase">NEW</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">$0 monthly software fee POS with free menu/inventory setup.</p>
                    </div>
                  </a>

                  {/* Payment Links */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-brand-amber flex items-center justify-center shrink-0 group-hover/item:bg-brand-amber group-hover/item:text-white transition-colors">
                      <LinkIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">Payment Links</span>
                      <p className="text-xs text-brand-muted mt-0.5">Send custom SMS & email pay-links for instant tap-to-pay clearance.</p>
                    </div>
                  </a>

                  {/* Fraud Protection */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">Fraud Protection</span>
                      <p className="text-xs text-brand-muted mt-0.5">3DS2 automated liability shift with smart AI risk decisioning.</p>
                    </div>
                  </a>

                  {/* Gift Cards */}
                  <a href="#solutions-grid" onClick={() => setMegaMenuHover(false)} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-navy group-hover/item:text-brand-emerald">Gift Cards</span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded uppercase">NEW</span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">Digital & physical cards via GiftPilot for retail & corporate perks.</p>
                    </div>
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between bg-brand-light -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                  <span className="text-xs text-slate-500">Need advice on hardware or custom rate comparison?</span>
                  <a href="#quote-section" onClick={() => setMegaMenuHover(false)} className="text-xs font-bold text-brand-emerald hover:text-brand-emerald-hover flex items-center gap-1">
                    Calculate your custom rate <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <a href="#integrations-section" className="text-sm font-semibold text-brand-slate hover:text-brand-navy transition-colors">Integrations</a>
            <a href="#partners-section" className="text-sm font-semibold text-brand-slate hover:text-brand-navy transition-colors">Partners</a>
            <a href="#contact-footer" className="text-sm font-semibold text-brand-slate hover:text-brand-navy transition-colors">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Click-to-call Phone */}
            <a href="tel:0283199500" className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-emerald transition-colors py-1.5 px-2.5 rounded-lg hover:bg-brand-light">
              <div className="w-7 h-7 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-tight">02 8319 9500</span>
            </a>

            {/* Log In */}
            <a href="https://portal.visionpay.com.au" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors">
              Log in
            </a>

            {/* Sticky Primary CTA */}
            <a href="#quote-section" className="inline-flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-brand-emerald/25 hover:shadow-glow-emerald transition-all transform active:scale-95">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Drawer Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 text-brand-slate hover:text-brand-navy focus:outline-none" 
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border bg-white px-4 py-6 space-y-4 shadow-lg animate-in fade-in duration-150">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold pb-4 border-b border-brand-border">
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">Online Gateway</a>
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">EFTPOS PAX A920</a>
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">VisionPay POS</a>
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">Payment Links</a>
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">Fraud Protection</a>
              <a href="#solutions-grid" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-brand-light text-brand-navy">Gift Cards</a>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:0283199500" className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-brand-border text-brand-navy font-bold text-sm">
                <Phone className="w-4 h-4 text-brand-emerald" />
                <span>Call 02 8319 9500</span>
              </a>
              <a href="#quote-section" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-emerald text-white font-bold text-sm shadow-md">
                <span>Get a Quote in 1 Day</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

