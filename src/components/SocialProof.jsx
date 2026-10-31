import React from 'react';
import { Zap, Star, Unlock, Headphones } from 'lucide-react';

export default function SocialProof() {
  const badges = [
    {
      icon: Zap,
      iconBg: 'bg-brand-primary-light text-brand-primary border-brand-primary-border',
      title: 'Same-Day Settlement',
      subtitle: 'To any Australian bank, 365 days',
    },
    {
      icon: Star,
      iconBg: 'bg-amber-50 text-brand-amber border-amber-200',
      title: '5.0 / 5.0 Rating',
      subtitle: 'Verified Google Reviews (180+)',
      isStar: true,
    },
    {
      icon: Unlock,
      iconBg: 'bg-blue-50 text-brand-primary border-brand-primary-border',
      title: 'No Lock-in Contracts',
      subtitle: 'Cancel anytime, zero exit penalties',
    },
    {
      icon: Headphones,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
      title: '24/7 Australian Support',
      subtitle: 'Sydney & Melbourne direct support',
    },
  ];

  return (
    <section className="border-y border-brand-border bg-white py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${badge.iconBg} group-hover:scale-105 transition-transform`}>
                  <IconComponent className={`w-6 h-6 ${badge.isStar ? 'fill-current' : ''}`} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-brand-navy">{badge.title}</span>
                    {badge.isStar && <span className="text-xs text-amber-500 font-bold">★★★★★</span>}
                  </div>
                  <div className="text-xs text-brand-muted">{badge.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
