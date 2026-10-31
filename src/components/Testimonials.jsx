import React from 'react';

export default function Testimonials() {
  const partners = [
    { code: 'EP', name: 'ElitePOS', bg: 'bg-slate-900 text-white' },
    { code: 'PS', name: 'PracShield Health', bg: 'bg-blue-600 text-white' },
    { code: 'SB', name: 'Storebase Retail', bg: 'bg-brand-primary text-white' },
    { code: 'W', name: 'WooCommerce', bg: 'bg-purple-600 text-white' },
    { code: 'X', name: 'Xero Connected', bg: 'bg-sky-500 text-white' },
  ];

  return (
    <section id="partners-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partner Integrations Strip */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
            Integrated with Australia’s leading software & POS platforms
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-all">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 font-bold text-lg text-slate-700">
                <div className={`w-8 h-8 rounded ${partner.bg} flex items-center justify-center text-xs font-black`}>
                  {partner.code}
                </div>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials & Google Review Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Live Google Reviews Card (Col 4) */}
          <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span className="text-sm font-bold tracking-tight text-slate-200">Google Customer Rating</span>
              </div>

              <div className="flex items-baseline gap-3 my-2">
                <span className="text-5xl font-black text-white">5.0</span>
                <div className="space-y-1">
                  <div className="text-amber-400 text-lg tracking-wider">★★★★★</div>
                  <div className="text-xs text-slate-400">180+ verified reviews</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                "Every review reflects an Australian merchant who escaped high gateway fees and delayed bank payouts."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary-border flex items-center justify-center font-bold text-xs">
                  100%
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Aussie Local Support</div>
                  <div className="text-slate-400">Sydney response under 45 secs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 1 */}
          <div className="lg:col-span-4 bg-brand-light rounded-3xl p-8 border border-brand-border flex flex-col justify-between hover:border-brand-primary/40 transition-colors">
            <div>
              <div className="text-amber-400 text-sm mb-3">★★★★★</div>
              <p className="text-sm text-brand-slate font-medium leading-relaxed italic">
                "We run 3 busy cafes in Sydney. Our previous big-four bank held our Saturday takings until Tuesday morning, creating huge payroll stress. VisionPay settles every single afternoon. That alone saved our business."
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-brand-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                MC
              </div>
              <div>
                <div className="text-sm font-bold text-brand-navy">Marcus Chen</div>
                <div className="text-xs text-brand-muted">Owner, Sydney Artisan Roasters (Turnover: $120k/mo)</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="lg:col-span-4 bg-brand-light rounded-3xl p-8 border border-brand-border flex flex-col justify-between hover:border-brand-primary/40 transition-colors">
            <div>
              <div className="text-amber-400 text-sm mb-3">★★★★★</div>
              <p className="text-sm text-brand-slate font-medium leading-relaxed italic">
                "We migrated our WooCommerce store and 2 physical boutiques to VisionPay. We cut out $75/mo in legacy gateway fees and got our PAX terminals delivered in 48 hours. The support team in Sydney is unmatched."
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-brand-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                SL
              </div>
              <div>
                <div className="text-sm font-bold text-brand-navy">Sarah Lindqvist</div>
                <div className="text-xs text-brand-muted">Founder, Byron Home & Apparel (Turnover: $340k/mo)</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
