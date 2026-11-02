import React, { useState } from 'react';
import { Phone, ExternalLink, Globe, ChevronDown, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate, onOpenContact }) {
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('United States (English)');

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

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.querySelector('#need-help-section') || document.querySelector('#contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact-footer" className="bg-[#07092e] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Worldpay Exact Style) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          
          {/* Left: White VisionPay Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group focus:outline-none cursor-pointer"
            >
              <img 
                src="/visionpay-logo-white.png" 
                alt="VisionPay" 
                className="h-8 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity" 
              />
            </button>
          </div>

          {/* Right: Region Selector, Sign In, and Red Contact Us Pill */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            
            {/* Region Selector */}
            <div className="relative">
              <button 
                onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span className="text-sm">🇺🇸</span>
                <span>{selectedRegion}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {regionMenuOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-56 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 py-1.5 z-50 text-xs">
                  <button
                    onClick={() => { setSelectedRegion('United States (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <span>🇺🇸</span>
                    <span>United States (English)</span>
                  </button>
                  <button
                    onClick={() => { setSelectedRegion('Australia (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <span>🇦🇺</span>
                    <span>Australia (English)</span>
                  </button>
                  <button
                    onClick={() => { setSelectedRegion('United Kingdom (English)'); setRegionMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <span>🇬🇧</span>
                    <span>United Kingdom (English)</span>
                  </button>
                </div>
              )}
            </div>

            <span className="h-3 w-px bg-slate-700 hidden sm:block" />

            {/* Merchant Sign In */}
            <a 
              href="https://portal.visionpay.com.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Sign in</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Red Contact Us Pill */}
            <button 
              onClick={handleContactClick}
              className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-xs px-5 py-2 rounded-full transition shadow-xs cursor-pointer"
            >
              Contact us
            </button>

          </div>

        </div>

        {/* 7 Mega Columns Grid (Worldpay Exact Architecture) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 py-14 border-b border-slate-800/80 text-xs">
          
          {/* Col 1: Accept */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Accept</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('pos')} className="hover:text-white transition-colors text-left">POS Systems</button></li>
              <li><button onClick={() => handleNav('instore')} className="hover:text-white transition-colors text-left">In-Store EFTPOS</button></li>
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Online Payments</button></li>
              <li><button onClick={() => handleNav('links')} className="hover:text-white transition-colors text-left">Payment Links</button></li>
              <li><button onClick={() => handleNav('home', '#agentic-report')} className="hover:text-white transition-colors text-left">Agentic Commerce</button></li>
              <li><button onClick={() => handleNav('home', '#powering-payments')} className="hover:text-white transition-colors text-left">Payment Methods</button></li>
            </ul>
          </div>

          {/* Col 2: Protect */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Protect</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Fraud Prevention</button></li>
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">3DS2 Authentication</button></li>
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Dispute Management</button></li>
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Tokenization Vault</button></li>
            </ul>
          </div>

          {/* Col 3: Optimize */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Optimize</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Dynamic Routing</button></li>
              <li><button onClick={() => handleNav('instore')} className="hover:text-white transition-colors text-left">Least-Cost Routing</button></li>
              <li><button onClick={() => handleNav('gateway')} className="hover:text-white transition-colors text-left">Credential Management</button></li>
              <li><button onClick={() => handleNav('home', '#insights-section')} className="hover:text-white transition-colors text-left">Insights & Reporting</button></li>
              <li><button onClick={() => handleNav('pos')} className="hover:text-white transition-colors text-left">Loyalty & Gift Cards</button></li>
            </ul>
          </div>

          {/* Col 4: Who We Serve */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Who We Serve</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('home', '#who-we-serve')} className="hover:text-white transition-colors text-left">Small Business</button></li>
              <li><button onClick={() => handleNav('home', '#who-we-serve')} className="hover:text-white transition-colors text-left">Enterprise Brands</button></li>
              <li><button onClick={() => handleNav('pos')} className="hover:text-white transition-colors text-left">Cafes & Bakeries</button></li>
              <li><button onClick={() => handleNav('pos')} className="hover:text-white transition-colors text-left">Restaurants & Bars</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Software Platforms</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Marketplaces</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Retail & QSR</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Travel & Airlines</button></li>
            </ul>
          </div>

          {/* Col 5: Insights */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Insights</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('home', '#insights-section')} className="hover:text-white transition-colors text-left">Articles</button></li>
              <li><button onClick={() => handleNav('home', '#insights-section')} className="hover:text-white transition-colors text-left">Guides & Research</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Customer Stories</button></li>
              <li><button onClick={() => handleNav('home', '#feature-banners')} className="hover:text-white transition-colors text-left">Global Payments Report</button></li>
              <li><button onClick={() => handleNav('home', '#agentic-report')} className="hover:text-white transition-colors text-left">Agentic Commerce</button></li>
            </ul>
          </div>

          {/* Col 6: Resources */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors text-left">Support Desk</button></li>
              <li><a href="https://portal.visionpay.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Account Center</a></li>
              <li><button onClick={() => handleNav('gateway', '#api-showcase')} className="hover:text-white transition-colors text-left">Developer Hub</button></li>
              <li><button onClick={() => handleNav('home', '#powering-payments')} className="hover:text-white transition-colors text-left">Compliance & PCI DSS</button></li>
              <li><button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors text-left">Global Offices</button></li>
            </ul>
          </div>

          {/* Col 7: Company */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleNav('home')} className="hover:text-white transition-colors text-left">About VisionPay</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">Executive Team</button></li>
              <li><button onClick={() => handleNav('home', '#customer-stories')} className="hover:text-white transition-colors text-left">ESG & Governance</button></li>
              <li><button onClick={() => handleNav('home', '#insights-section')} className="hover:text-white transition-colors text-left">Newsroom</button></li>
              <li><button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors text-left">Legal & Privacy</button></li>
              <li><button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors text-left">Careers</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Cookie & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <span>© 2026 VisionPay. All rights reserved. Registered financial entity and PCI DSS Level 1 certified service provider.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors">Privacy Notice</button>
            <span>•</span>
            <button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors">Terms of Use</button>
            <span>•</span>
            <button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors">Security</button>
            <span>•</span>
            <button onClick={() => handleNav('home', '#need-help-section')} className="hover:text-white transition-colors">Cookie Preferences</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
