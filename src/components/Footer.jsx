import React from 'react';
import { Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Bio & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 text-brand-emerald flex items-center justify-center border border-slate-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Vision<span className="text-brand-emerald">Pay</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Australia’s independent, all-in-one payment ecosystem. Empowering local merchants with same-day settlements, low transparent interchange fees, and cutting-edge hardware.
            </p>
            
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-4 h-4 text-brand-emerald" />
                <span>Sales & Support: 02 8319 9500</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Head Office: Level 14, 175 Pitt Street, Sydney NSW 2000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="inline-flex items-center gap-1.5 bg-brand-emerald/15 text-brand-emerald px-2 py-0.5 rounded text-[11px] font-bold border border-brand-emerald/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                  24/7 Aussie Tech Support Active
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Payment Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">Online Gateway ($0 Fee)</a></li>
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">In-Store EFTPOS PAX A920</a></li>
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">VisionPay Cloud POS</a></li>
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">SMS & Email Payment Links</a></li>
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">3DS2 Fraud Shield</a></li>
              <li><a href="#solutions-grid" className="hover:text-brand-emerald transition-colors">Digital Branded Gift Cards</a></li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Developers & ISVs</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">REST API Reference</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">WooCommerce Plugin</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Shopify Hosted Checkout</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Developer Sandbox</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Webhook Documentation</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">SDKs (Node, PHP, Python)</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company & Trust</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">About VisionPay</a></li>
              <li><a href="#partners-section" className="hover:text-brand-emerald transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">PCI-DSS Level 1 Compliance</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Dispute Resolution</a></li>
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
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
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

