import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate, onOpenContact }) {
  const handleNav = (page, anchor) => {
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
    const el = document.querySelector('#quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      handleNav('home', '#quote-section');
    }
  };

  return (
    <footer id="contact-footer" className="bg-[#0B132B] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800">
          
          {/* Left: White VisionPay Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group focus:outline-none cursor-pointer"
            >
              <img 
                src="/visionpay-logo-white.png" 
                alt="VisionPay" 
                className="h-8 sm:h-9 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity" 
              />
            </button>
            <span className="hidden sm:block text-slate-600">|</span>
            <span className="text-xs text-slate-400">
              Australian payments, POS and gift cards.
            </span>
          </div>

          {/* Right: Quick Quote & Support Hotline */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a 
              href="tel:0283199500" 
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-700/80"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>02 8319 9500 (24/7 AU)</span>
            </a>

            <button 
              onClick={handleQuoteClick}
              className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* 4 Clean Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 border-b border-slate-800 text-xs">
          
          {/* Column 1: Solutions */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Online Payments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instore')} className="hover:text-white transition-colors text-left cursor-pointer">
                  In-Store Payments (EFTPOS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('links')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Payment Links
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gateway', '#api-showcase')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Fraud Protection (3DS2)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pos')} className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <span>VisionPay POS</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-800/80">$0/MO</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', '#solutions-grid')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Gift Cards & Rewards
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Developers */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Developers</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('gateway', '#api-showcase')} className="hover:text-white transition-colors text-left cursor-pointer">
                  API Documentation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', '#partners-section')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Integrations (WooCommerce, Shopify)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gateway', '#api-showcase')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Integration Guides & Webhooks
                </button>
              </li>
              <li>
                <a href="https://portal.visionpay.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Merchant Portal Login</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors text-left cursor-pointer">
                  About VisionPay
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', '#partner-banner')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Partner Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', '#quote-section')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', '#why-switch')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Careers (Sydney HQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:support@visionpay.com.au" className="hover:text-white transition-colors">
                  support@visionpay.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:0283199500" className="hover:text-white transition-colors font-bold text-slate-200">
                  02 8319 9500
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>24/7 Australian customer & tech support</span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Level 14, 175 Pitt Street, Sydney NSW 2000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Meta Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center md:text-left">
          <div>
            <span>VisionPay Pty Ltd · Sydney, Australia · © 2026. All rights reserved. Registered Australian financial entity & PCI DSS Level 1 Certified.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <button onClick={() => handleNav('home', '#quote-section')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => handleNav('home', '#quote-section')} className="hover:text-white transition-colors">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => handleNav('home', '#quote-section')} className="hover:text-white transition-colors">Merchant Agreement</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
