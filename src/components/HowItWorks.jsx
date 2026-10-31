import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      badge: 'Time: 2 Minutes',
      badgeColor: 'text-brand-emerald bg-brand-emerald-light',
      title: 'Tell us about your business',
      description: 'Fill out our quick 2-minute quote form below or call 02 8319 9500 with your estimated monthly sales volume.',
      numBg: 'bg-brand-navy',
    },
    {
      num: '02',
      badge: 'Time: 1 Business Day',
      badgeColor: 'text-brand-blue bg-blue-50',
      title: 'Get your custom quote',
      description: 'Our Australian payments team reviews your turnover and delivers tailored, low merchant rates with zero lock-in contracts.',
      numBg: 'bg-brand-emerald',
    },
    {
      num: '03',
      badge: 'Time: 2 Business Days',
      badgeColor: 'text-purple-700 bg-purple-50',
      title: 'Start getting paid',
      description: 'Instant API access for online gateways, or pre-configured PAX A920 terminals arrive unboxed and ready to transact.',
      numBg: 'bg-brand-navy',
    },
  ];

  return (
    <section className="py-20 bg-brand-light border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald bg-brand-emerald-light px-3 py-1 rounded-full border border-brand-emerald-border">
            Frictionless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
            Switching to VisionPay takes 3 simple steps.
          </h2>
          <p className="text-base text-brand-muted mt-2">
            Keep your existing bank account. We handle terminal configuration and cart integrations.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-emerald/20 via-brand-emerald to-brand-emerald/20 -translate-y-8 z-0" />

          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-full ${step.numBg} text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white`}>
                {step.num}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${step.badgeColor}`}>
                {step.badge}
              </span>
              <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

