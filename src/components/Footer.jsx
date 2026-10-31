import React from 'react';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleInStoreNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('instore');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGatewayNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('gateway');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinksNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('links');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePosNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('pos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact-footer" className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Bio & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={handleHomeNav} className="flex items-center gap-3 text-left cursor-pointer">
              <img 
                src="/visionpay-logo-white.png" 
                alt="VisionPay Logo" 
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                AU
              </span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Australia’s independent, all-in-one payment ecosystem. Empowering local merchants with same-day settlements, low transparent interchange fees, and cutting-edge hardware.
            </p>
            
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Sales & Support: 02 8319 9500</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Head Office: Level 14, 175 Pitt Street, Sydney NSW 2000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="inline-flex items-center gap-1.5 bg-brand-primary/20 text-brand-primary-border px-2 py-0.5 rounded text-[11px] font-bold border border-brand-primary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  24/7 Aussie Tech Support Active
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Payment Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={handleInStoreNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left font-semibold text-blue-300">
                  In-Store EFTPOS (PAX A920) →
                </button>
              </li>
              <li>
                <button onClick={handleGatewayNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left font-semibold text-blue-300">
                  Online Gateway ($0 Fee) →
                </button>
              </li>
              <li>
                <button onClick={handlePosNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left font-semibold text-blue-300">
                  VisionPay Cloud POS ($0 Fee) →
                </button>
              </li>
              <li>
                <button onClick={handleLinksNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left font-semibold text-blue-300">
                  Payment Links (SMS & Email) →
                </button>
              </li>
              <li><a href="#solutions-grid" className="hover:text-blue-400 transition-colors">3DS2 Fraud Shield</a></li>
              <li><a href="#solutions-grid" className="hover:text-blue-400 transition-colors">Digital Branded Gift Cards</a></li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Developers & ISVs</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={handleGatewayNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  REST API Reference
                </button>
              </li>
              <li><button onClick={handleGatewayNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left">WooCommerce Plugin</button></li>
              <li><button onClick={handleGatewayNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Shopify Hosted Checkout</button></li>
              <li><button onClick={handleGatewayNav} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Developer Sandbox</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Webhook Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SDKs (Node, PHP, Python)</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company & Trust</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About VisionPay</a></li>
              <li><a href="#partners-section" className="hover:text-blue-400 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">PCI-DSS Level 1 Compliance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dispute Resolution</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Compliance & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 VisionPay Pty Ltd. ABN 84 629 184 920. Australian Financial Services Licensee.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Bank-Grade 256-bit Encryption
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Made with pride in Sydney, Australia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
