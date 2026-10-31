import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState(['Online Gateway', 'In-Store EFTPOS']);
  const [turnover, setTurnover] = useState('20k_100k');

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter(s => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const getSavingsHint = () => {
    switch (turnover) {
      case 'under_20k':
        return 'Estimated savings on Under $20k/mo: ~$720/year (Zero monthly gateway fees) + Instant same-day payouts.';
      case '20k_100k':
        return 'Estimated savings on $20k–$100k/mo: ~$1,850/year in gateway & merchant fees + Same-day settlement.';
      case '100k_500k':
        return 'Estimated savings on $100k–$500k/mo: ~$4,200/year with custom Interchange-Plus rates + Dedicated account manager.';
      case '500k_plus':
        return 'Enterprise volume ($500k+/mo): Bespoke wholesale interchange pricing + Custom SLA & dedicated Sydney tech team.';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    'Online Gateway',
    'In-Store EFTPOS',
    'VisionPay POS',
    'Payment Links',
    'Gift Cards',
  ];

  const turnoverOptions = [
    { id: 'under_20k', label: 'Under $20k', sub: 'Startups & Sole Traders' },
    { id: '20k_100k', label: '$20k – $100k', sub: 'Growing Retail & Hospitality' },
    { id: '100k_500k', label: '$100k – $500k', sub: 'High Volume Stores' },
    { id: '500k_plus', label: '$500k+', sub: 'Enterprise Custom Rates' },
  ];

  return (
    <section id="quote-section" className="py-24 bg-gradient-to-b from-brand-light via-white to-slate-50 border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-brand-emerald/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-emerald bg-brand-emerald-light px-3.5 py-1.5 rounded-full border border-brand-emerald-border">
              <span>⚡ Custom Rate Comparison</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3">
              Get your custom quote in 1 business day
            </h2>
            <p className="text-base text-brand-muted mt-2">
              No obligation. No lock-in contracts. See exactly how much you will save on merchant fees and terminal hardware.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Full Name <span className="text-brand-emerald">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    required 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Lachlan Murdoch" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent text-sm font-medium transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Business Name <span className="text-brand-emerald">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="businessName" 
                    required 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Bondi Roasters Cafe" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent text-sm font-medium transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Mobile Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobilePhone" className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Australian Mobile <span className="text-brand-emerald">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="mobilePhone" 
                    required 
                    value={mobilePhone}
                    onChange={(e) => setMobilePhone(e.target.value)}
                    placeholder="0412 345 678" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent text-sm font-medium transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Business Email <span className="text-brand-emerald">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="lachlan@bondiroasters.com.au" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent text-sm font-medium transition-all"
                  />
                </div>
              </div>

              {/* Multi-select: What do you need? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                  What do you need? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isChecked = services.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleService(opt)}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all text-left ${
                          isChecked 
                            ? 'border-brand-emerald bg-brand-emerald-light text-brand-emerald shadow-xs' 
                            : 'border-brand-border bg-slate-50 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-brand-emerald border-brand-emerald text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Turnover Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                  Monthly Card Turnover
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {turnoverOptions.map((opt) => {
                    const isSelected = turnover === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setTurnover(opt.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                          isSelected 
                            ? 'border-2 border-brand-emerald bg-brand-emerald-light text-brand-emerald shadow-xs' 
                            : 'border-brand-border bg-slate-50 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <span className="text-sm font-bold">{opt.label}</span>
                        <span className={`text-[10px] font-normal mt-0.5 ${isSelected ? 'text-brand-emerald' : 'text-slate-500'}`}>
                          {opt.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Estimated Savings Hint Banner */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-brand-emerald-border rounded-xl p-4 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">💡</span>
                  <span className="text-emerald-950 font-semibold">
                    {getSavingsHint()}
                  </span>
                </div>
                <span className="text-brand-emerald font-bold hidden sm:inline whitespace-nowrap ml-2">
                  No exit fees
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-brand-emerald hover:bg-brand-emerald-hover text-white text-base font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-brand-emerald/30 hover:shadow-glow-emerald transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>Get My Custom Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Microcopy */}
              <div className="text-center text-xs text-brand-muted font-medium pt-1 space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>100% Secure & Confidential · No obligation · No lock-in contracts.</span>
                </p>
                <p className="text-slate-400">
                  Our Australian payments specialist will respond within 1 business day with your comparative rate sheet.
                </p>
              </div>

            </form>
          ) : (
            /* Success Feedback State */
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-emerald-light text-brand-emerald mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-brand-navy">Quote Request Received!</h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName || 'Merchant'}</strong>! A senior payments specialist from our Sydney office will review your requirements for <strong>{businessName || 'your business'}</strong> and email your custom proposal within <strong>1 business day</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:0283199500" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-emerald hover:underline"
                >
                  <span>Need an immediate terminal? Call 02 8319 9500 now →</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

