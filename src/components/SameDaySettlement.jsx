import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function SameDaySettlement() {
  const statTiles = [
    {
      metric: 'Same-day',
      color: 'text-brand-emerald',
      borderColor: 'hover:border-brand-emerald/50',
      title: 'Daily Settlement 365 Days',
      description: 'No waiting over weekends or public holidays. Process today, clear today directly into your nominated account.',
      footerTag: 'Daily 10:00 PM cutoff',
      footerColor: 'text-brand-emerald',
    },
    {
      metric: 'Any',
      color: 'text-brand-blue',
      borderColor: 'hover:border-brand-blue/50',
      title: 'Australian Bank Accepted',
      description: 'No need to open a new commercial account or switch banks. We settle directly to CBA, Westpac, NAB, ANZ, Macquarie & more.',
      footerTag: 'Keep your existing BSB & Account',
      footerColor: 'text-brand-blue',
    },
    {
      metric: '$0',
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-400/50',
      title: 'Monthly Gateway Fees',
      description: 'Say goodbye to unnecessary $35 - $60 monthly gateway platform maintenance fees. You only pay transparent per-transaction rates.',
      footerTag: 'Save up to $720/year per merchant',
      footerColor: 'text-amber-400',
    },
  ];

  const banks = ['CommBank', 'Westpac', 'ANZ', 'NAB', 'Macquarie', 'Bendigo'];

  return (
    <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald bg-brand-emerald/15 px-3 py-1 rounded-full border border-brand-emerald/30">
            Cash Flow Accelerator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Today's sales. In your bank today.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Most legacy Australian banks and merchant gateways hold your hard-earned funds for 1 to 3 business days. 
            With VisionPay, your morning and evening card settlements land in your existing bank account daily—so you never run dry on cash flow.
          </p>
        </div>

        {/* 3 Stat Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {statTiles.map((tile, idx) => (
            <div 
              key={idx}
              className={`bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 ${tile.borderColor} transition-all shadow-lg group`}
            >
              <div className={`text-4xl sm:text-5xl font-black ${tile.color} tracking-tight group-hover:scale-105 transition-transform`}>
                {tile.metric}
              </div>
              <div className="text-lg font-bold text-white mt-2">{tile.title}</div>
              <p className="text-sm text-slate-300 mt-1 leading-normal">
                {tile.description}
              </p>
              <div className={`mt-4 pt-4 border-t border-slate-700/60 flex items-center text-xs ${tile.footerColor} font-semibold gap-1`}>
                <span>{tile.footerTag}</span>
                <Check className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Row & Bank Integration Logos */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-800">
          <a 
            href="#quote-section" 
            className="inline-flex items-center gap-2 text-base font-bold text-brand-emerald hover:text-white transition-colors group"
          >
            <span>Get Paid Same Day With VisionPay</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>Settling instantly to:</span>
            <div className="flex flex-wrap items-center gap-2 font-bold text-slate-300">
              {banks.map((bank, idx) => (
                <span key={idx} className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

