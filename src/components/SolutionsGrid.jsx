import React from 'react';
import { 
  Laptop, 
  CreditCard, 
  Store, 
  Link as LinkIcon, 
  ShieldCheck, 
  Gift, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: Laptop,
      iconBg: 'bg-brand-primary-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white',
      badge: '$0 Monthly Fee',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      title: 'Online Payments',
      description: 'Frictionless checkout for modern eCommerce. Certified shopping cart plugins and developer-first REST APIs that accept cards, Apple Pay, and Google Pay with zero monthly gateway fees.',
      features: [
        'WooCommerce, Shopify & Magento verified',
        'Tokenized 1-click checkout & recurring billing',
      ],
      tag: 'API & Cart Plugins',
      cta: 'Explore Online',
    },
    {
      icon: CreditCard,
      iconBg: 'bg-brand-primary-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white',
      badge: 'PAX A920 Hardware',
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'In-Store EFTPOS',
      description: 'Supercharge counter or roaming transactions with the Android-powered PAX A920. Standalone or fully integrated with your current POS. Built-in 4G SIM and high-speed thermal printer.',
      features: [
        'Delivered pre-configured in 2 business days',
        'Automated Least-Cost Routing (LCR) enabled',
      ],
      tag: 'Fast 4G / Wi-Fi',
      cta: 'Order Terminals',
    },
    {
      icon: Store,
      iconBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      badge: 'NEW RELEASE',
      badgeColor: 'bg-brand-primary text-white',
      isHighlight: true,
      title: 'VisionPay POS',
      description: 'Why pay $120/month per terminal for POS software? VisionPay POS offers table management, modifier menus, barcode scanning, and multi-till syncing with $0 monthly software fees.',
      features: [
        'Free menu build & inventory migration included',
        'Hospitality & Retail custom configurations',
      ],
      tag: '$0 Software Fee',
      cta: 'See POS Demo',
    },
    {
      icon: LinkIcon,
      iconBg: 'bg-amber-50 text-brand-amber group-hover:bg-brand-amber group-hover:text-white',
      badge: 'No Website Needed',
      badgeColor: 'bg-amber-100 text-amber-800',
      title: 'Payment Links',
      description: 'Collect payments instantly over SMS, email, or WhatsApp. Generate custom branded pay links in 5 seconds from your mobile or dashboard. Customers pay securely via Apple Pay or card.',
      features: [
        'Automated SMS payment reminders',
        'Syncs directly with Xero and MYOB invoices',
      ],
      tag: 'Instant Tap-to-Pay',
      cta: 'Create Links',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      badge: '3DS2 Liability Shift',
      badgeColor: 'bg-teal-100 text-teal-800',
      title: 'Fraud Protection',
      description: 'Protect your business from costly chargebacks. Built-in EMV 3D Secure 2.0 shifts fraudulent card liability directly to the issuing bank while keeping legitimate checkout frictionless.',
      features: [
        'Zero chargeback liability on 3DS authenticated orders',
        'Custom IP, velocity & country blocking rules',
      ],
      tag: 'PCI-DSS Level 1',
      cta: 'Fraud Shield Details',
    },
    {
      icon: Gift,
      iconBg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      badge: 'GIFT PILOT',
      badgeColor: 'bg-rose-600 text-white',
      title: 'Branded Gift Cards',
      description: 'Unlock a lucrative upfront revenue stream with digital and plastic branded gift cards powered by GiftPilot. Customers purchase online and redeem across your EFTPOS or web store.',
      features: [
        'Apple Wallet & Google Pay digital delivery',
        'B2B corporate incentives & bulk distribution',
      ],
      tag: 'Omnichannel Ready',
      cta: 'Launch Gift Cards',
    },
  ];

  return (
    <section id="solutions-grid" className="py-24 bg-brand-light border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
            The Complete Payment Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
            Every way your Australian customers want to pay.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted mt-3">
            Eliminate fragmented providers. Manage in-store EFTPOS, online checkout, cloud POS, and digital payment links under one unified Australian roof.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-2xl p-7 border ${item.isHighlight ? 'border-2 border-brand-primary/30 relative overflow-hidden' : 'border-brand-border'} shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group`}
              >
                {item.isHighlight && (
                  <div className="absolute -right-12 -top-12 w-28 h-28 bg-brand-primary/10 rounded-full blur-xl pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${item.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs font-medium text-slate-700">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-navy">{item.tag}</span>
                  <a 
                    href="#quote-section" 
                    className="text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
