import React from 'react';
import { DollarSign, Percent, Unlock, MessageSquare, Zap } from 'lucide-react';

export default function WhySwitch() {
  const pillars = [
    {
      icon: DollarSign,
      iconColor: 'text-brand-primary group-hover:bg-brand-primary group-hover:text-white',
      title: '1. Your money sooner',
      description: 'Same-day settlement every single day. No waiting until Tuesday for your Friday or Saturday weekend takings.',
    },
    {
      icon: Percent,
      iconColor: 'text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      title: '2. Low fees, no surprises',
      description: 'Zero monthly gateway fees, zero maintenance charges, and clear interchange-plus or simple flat rate options.',
    },
    {
      icon: Unlock,
      iconColor: 'text-brand-primary group-hover:bg-brand-primary group-hover:text-white',
      title: '3. No lock-in contracts',
      description: 'We earn your partnership month by month. If you aren’t thrilled, cancel at any time with no penalties.',
    },
    {
      icon: MessageSquare,
      iconColor: 'text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      title: '4. Real people 24/7',
      description: 'Local Australian support team based in Sydney. Reach real human payment technicians, never overseas bots.',
    },
    {
      icon: Zap,
      iconColor: 'text-brand-amber group-hover:bg-brand-amber group-hover:text-white',
      title: '5. Up and running fast',
      description: 'Instant digital onboarding for online merchants, and plug-and-play terminals delivered in 2 business days.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
            The VisionPay Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
            Why Australian businesses switch to VisionPay.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted mt-3">
            We built VisionPay specifically to challenge predatory bank contracts, slow settlement windows, and opaque merchant fee structures.
          </p>
        </div>

        {/* 5 Value Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-5 transition-colors ${pillar.iconColor}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
