import React from 'react';
import { Zap, Star, ShieldCheck, Headphones } from 'lucide-react';

export default function SocialProof() {
  const badges = [
    {
      icon: Zap,
      iconBg: 'bg-blue-50 text-brand-primary border-blue-200/80',
      title: 'Same-day settlement',
      subtitle: 'To any Aussie bank, 365 days a year',
    },
    {
      icon: Star,
      iconBg: 'bg-amber-50 text-amber-500 border-amber-200/80',
      title: '5/5 Rating on Google',
      subtitle: 'Verified Australian merchant reviews',
      isStar: true,
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      title: 'No lock-in contracts',
      subtitle: 'Zero exit penalties or termination fees',
    },
    {
      icon: Headphones,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200/80',
      title: '24/7 Australian support',
      subtitle: 'Sydney & Melbourne payment experts',
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-white py-6 shadow-2xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 py-3 sm:py-2 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx !== badges.length - 1 ? 'sm:pr-4' : ''} group`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${badge.iconBg} group-hover:scale-105 transition-transform duration-200 shadow-2xs`}>
                  <IconComponent className={`w-5 h-5 ${badge.isStar ? 'fill-current' : ''}`} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#0F172A] tracking-tight">{badge.title}</span>
                    {badge.isStar && (
                      <span className="text-[11px] text-amber-500 font-extrabold tracking-widest">
                        ★★★★★
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}