import React, { useState, useId } from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Star, 
  CreditCard, 
  Store, 
  Laptop, 
  Link as LinkIcon, 
  Gift, 
  Sparkles, 
  ChevronDown, 
  ExternalLink, 
  Zap, 
  Building2, 
  Users, 
  Utensils, 
  Coffee, 
  Beer, 
  Stethoscope, 
  Wrench, 
  Briefcase, 
  ShoppingBag, 
  RefreshCw, 
  Fuel, 
  Check, 
  X,
  Lock,
  Layers,
  ChevronRight,
  Play,
  Volume2
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  // 1. FAQ Accordion State (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  // 2. Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // 3. Inline Lead Capture Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    mobile: '',
    email: '',
    turnover: '$20k–$100k',
    currentProvider: '',
    needs: {
      online: true,
      eftpos: true,
      pos: false,
      links: false,
      giftcards: false,
      partner: false
    }
  });

  const fullNameId = useId();
  const businessNameId = useId();
  const mobileId = useId();
  const emailId = useId();
  const turnoverId = useId();
  const providerId = useId();

  // Navigation handler helper
  const handleNav = (page, anchor) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    const el = document.querySelector('#quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenContact) {
      onOpenContact();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleNeedToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      needs: {
        ...prev.needs,
        [key]: !prev.needs[key]
      }
    }));
  };

  // 5 FAQs (Objection Removing)
  const faqs = [
    {
      q: 'How fast do I get my money?',
      a: 'The same day. Your card takings settle to your Australian bank account on the day you take them — 7 days a week, 365 days a year. Transactions processed up to 5:00 PM land in your account by 6:00 PM.'
    },
    {
      q: 'Do I need to change banks?',
      a: 'No. We settle directly into any Australian bank account, including Commonwealth Bank, NAB, ANZ, Westpac, Macquarie, Bendigo and all regional credit unions.'
    },
    {
      q: 'Are there lock-in contracts?',
      a: 'No. You can leave at any time with zero termination penalties or exit fees. We earn your business month-to-month through superior speed and service.'
    },
    {
      q: 'How quickly can I start?',
      a: 'Online onboarding is instant. Smart EFTPOS terminals (PAX A920) and POS hardware are pre-configured and dispatched within 2 business days of approval.'
    },
    {
      q: 'Can you help with integration?',
      a: 'Yes. Our Sydney-based in-house development team helps as much or as little as you need, from shopping cart plugins (WooCommerce, Shopify, Magento) to custom API integrations.'
    }
  ];

  // 9 Target Industries
  const industries = [
    { name: 'Retail', icon: Store, tag: 'In-store & Online' },
    { name: 'Cafes and restaurants', icon: Coffee, tag: 'Fast table pacing' },
    { name: 'Pubs and bars', icon: Beer, tag: 'High-speed bar tabs' },
    { name: 'Healthcare and allied health', icon: Stethoscope, tag: 'HICAPS & Medipass ready' },
    { name: 'Trades and home services', icon: Wrench, tag: 'SMS Payment links' },
    { name: 'Professional services', icon: Briefcase, tag: 'Invoicing & Retainers' },
    { name: 'eCommerce', icon: ShoppingBag, tag: 'Checkout API & Plugins' },
    { name: 'Subscription & SaaS platforms', icon: RefreshCw, tag: 'Automated recurring billing' },
    { name: 'Fuel, parking, EV charging & vending', icon: Fuel, tag: 'Unattended self-service' },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-brand-primary">
      
      {/* =========================================================================
          2. HERO SECTION (Asymmetric 2-Column Worldpay Enterprise Layout)
          ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white border-b border-slate-200/90">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Soft radial blue glow behind right visual composition */}
        <div className="absolute right-0 top-1/4 w-[650px] h-[650px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typographic Statement & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="tracking-wide uppercase text-[11px] text-slate-700">
                  AUSTRALIAN PAYMENTS, POS AND GIFT CARDS
                </span>
              </div>

              {/* H1 Headline (Massive Display Typography - Worldpay Style) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tight leading-[1.04]">
                Get paid today. <br />
                <span className="text-brand-primary">
                  Pay less to get paid.
                </span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Online payments, EFTPOS, POS and payment links from one Australian provider. Same-day settlement to any Australian bank, no monthly gateway fees and no lock-in contracts.
              </p>

              {/* Action Buttons Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#172DC2] text-white font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-base text-center group cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:0283199500"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-4 rounded-xl border border-slate-300 shadow-2xs hover:border-slate-400 transition-all text-base text-center cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call 02 8319 9500</span>
                </a>
              </div>

              {/* Microcopy Below Buttons */}
              <p className="text-xs text-slate-500 font-medium pt-1">
                Quote in 1 business day · Terminals delivered within 2 business days of approval.
              </p>

            </div>

            {/* Right Column: Hardware & Payment Visual Composition (Worldpay Luxury Container) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Worldpay-style Soft Rounded Lavender/Blue Container Frame */}
                <div className="bg-[#f1f5f9]/80 rounded-[38px] p-4 sm:p-7 border border-slate-200/80 shadow-2xs relative">
                  
                  {/* Centerpiece: Smart EFTPOS Terminal (PAX A920) Showcase */}
                  <div className="relative bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-800 p-5 text-white">
                    
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold text-slate-200">PAX A920 · 4G Active</span>
                      </div>
                      <span className="bg-emerald-950/90 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-800">
                        Same-Day Ready
                      </span>
                    </div>

                    {/* Terminal Display Screen */}
                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-center space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Store className="w-3.5 h-3.5 text-blue-400" />
                          Bondi Roasters #04
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">TAP TO PAY</span>
                      </div>

                      <div className="py-1.5">
                        <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">Amount Due</span>
                        <span className="text-3xl font-black text-white tracking-tight">$142.50 AUD</span>
                        <div className="flex items-center justify-center gap-1 text-xs text-emerald-400 font-bold mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>APPROVED · Settling Today (ANZ)</span>
                        </div>
                      </div>

                      {/* Contactless Tap & Card Schemes */}
                      <div className="pt-2.5 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>VISA CONTACTLESS</span>
                        <span className="text-white font-bold">•••• 4821</span>
                      </div>
                    </div>

                    {/* Scheme Badges */}
                    <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-slate-400 font-medium">
                      <span>Apple Pay</span>
                      <span>•</span>
                      <span>Google Pay</span>
                      <span>•</span>
                      <span>Visa</span>
                      <span>•</span>
                      <span>Mastercard</span>
                      <span>•</span>
                      <span>EFTPOS LCR</span>
                    </div>

                  </div>

                  {/* Floating Layer 1 (Online Gateway 3DS2 Badge) */}
                  <div className="absolute -top-4 -left-4 bg-white text-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center font-bold">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>Online Gateway</span>
                        <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-1 rounded">3DS2</span>
                      </div>
                      <div className="text-[10px] text-slate-500">$0 monthly gateway fees</div>
                    </div>
                  </div>

                  {/* Floating Layer 2 (Mobile SMS Payment Link) */}
                  <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <LinkIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">SMS Payment Link</div>
                      <div className="text-[10px] text-emerald-600 font-semibold">Paid in 12 seconds</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          AUSTRALIAN BANK & PLATFORM TRUST STRIP (Worldpay Monochrome Style)
          ========================================================================= */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-10 text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span className="text-slate-400 text-[11px] font-semibold tracking-normal block w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
              Settles to any Australian bank:
            </span>
            <span className="hover:text-slate-900 transition-colors">Commonwealth Bank</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors">Westpac</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors">NAB</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors">ANZ</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors">Macquarie</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors">Bendigo Bank</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. TRUST BADGE STRIP (Directly below Hero)
          ========================================================================= */}
      <section className="bg-slate-50 py-5 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center md:text-left">
            
            {/* Badge 1 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1.5 md:py-0 md:px-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 border border-blue-200/60">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block">Same-day settlement</span>
                <span className="text-[11px] text-slate-500">Into any Australian bank</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1.5 md:py-0 md:px-5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block">5/5 Rating on Google</span>
                <span className="text-[11px] text-slate-500">Verified Australian merchants</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1.5 md:py-0 md:px-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block">No lock-in contracts</span>
                <span className="text-[11px] text-slate-500">Leave anytime with zero fees</span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1.5 md:py-0 md:px-5">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200/60">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block">24/7 Australian local support</span>
                <span className="text-[11px] text-slate-500">Sydney-based tech desk</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4. SECTION: SAME-DAY SETTLEMENT (Lead Feature Band)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0B132B] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden shadow-xl">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5 text-left">
              
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Zap className="w-3.5 h-3.5" />
                Primary Competitive Advantage
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Today's sales. In your bank today.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Most providers make you wait 1 to 3 business days for your money. With VisionPay, your card takings settle the same day to any Australian bank account. Better cash flow for wages, stock and suppliers, without changing banks.
              </p>

              {/* 3 Stat Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                
                <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">Same day</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1 block">Daily settlement</span>
                  <p className="text-xs text-slate-300 mt-1">Takings land by 6 PM 7 days a week</p>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
                  <span className="text-3xl sm:text-4xl font-black text-white block">Any</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1 block">Australian bank</span>
                  <p className="text-xs text-slate-300 mt-1">CBA, NAB, ANZ, Westpac, Bendigo & more</p>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
                  <span className="text-3xl sm:text-4xl font-black text-blue-400 block">$0</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1 block">Monthly gateway fees</span>
                  <p className="text-xs text-slate-300 mt-1">Transparent pay-as-you-go pricing</p>
                </div>

              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#quote-section"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#172DC2] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md cursor-pointer"
                >
                  <span>Get Paid Same Day →</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. SECTION: PRODUCT & SOLUTIONS GRID (6 Bento Cards, 1px Borders)
          ========================================================================= */}
      <section id="solutions-grid" className="py-20 bg-slate-50 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Complete Payment Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              One provider. Every way your customers pay.
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Eliminate disconnected providers, multiple invoices and delayed payouts. Everything connects under one Australian roof.
            </p>
          </div>

          {/* 6 Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Online Payments */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Online Payments</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  Accept cards on your website, app or custom platform. Shopping-cart plugins or our APIs. No monthly fees.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('gateway')}
                  className="text-xs sm:text-sm font-bold text-brand-primary group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore online payments →</span>
                </button>
              </div>
            </div>

            {/* Card 2: In-Store EFTPOS */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">In-Store EFTPOS</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  Integrated or standalone terminals for retail, hospitality and services. Delivered within 2 business days of approval.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('instore')}
                  className="text-xs sm:text-sm font-bold text-emerald-700 group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore EFTPOS →</span>
                </button>
              </div>
            </div>

            {/* Card 3: VisionPay POS (New) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">VisionPay POS</h3>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                    NEW · $0/MO
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  An all-in-one point of sale with built-in payments, $0 monthly software fees and same-day settlement.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('pos')}
                  className="text-xs sm:text-sm font-bold text-brand-primary group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore POS →</span>
                </button>
              </div>
            </div>

            {/* Card 4: Payment Links */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <LinkIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Payment Links</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  Send an invoice link by SMS, email or WhatsApp and get paid before you leave the job.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('links')}
                  className="text-xs sm:text-sm font-bold text-amber-700 group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore payment links →</span>
                </button>
              </div>
            </div>

            {/* Card 5: Fraud Protection */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Fraud Protection</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  3DS2 authentication and smart transaction screening that blocks fraud without blocking good customers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('gateway', '#api-showcase')}
                  className="text-xs sm:text-sm font-bold text-teal-700 group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore fraud protection →</span>
                </button>
              </div>
            </div>

            {/* Card 6: Gift Cards (New) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">Gift Cards</h3>
                  <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-200">
                    LOYALTY
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                  Digital gift cards from Australia's favourite brands, for gifting and for staff and client rewards.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleNav('home', '#quote-section')}
                  className="text-xs sm:text-sm font-bold text-rose-700 group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore gift cards →</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. SECTION: WHY AUSTRALIAN BUSINESSES SWITCH (5 Core Benefits)
          ========================================================================= */}
      <section id="why-switch" className="py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Direct & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Built for Australian businesses that are tired of waiting to get paid
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Traditional banks hold weekend takings, charge monthly fees and lock you into long contracts. Here is why Australian venues and merchants choose VisionPay:
            </p>
          </div>

          {/* 5 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            
            {/* Benefit 1 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-primary flex items-center justify-center font-black text-sm mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Your money, sooner.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Same-day settlement to any Australian bank, so today's takings are in your account today. No need to change banks.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Settled daily by 6 PM 7 days</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Low fees, no surprises.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  No monthly gateway fees and transparent pricing. You only pay when you get paid.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>$0 monthly gateway or POS fee</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No lock-in. Ever.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Stay because it works, not because a contract says so. Leave anytime with zero penalties.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero lock-in commitment</span>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Real people, 24/7.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Australian support around the clock, plus an in-house team that helps you integrate.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Sydney desk at 02 8319 9500</span>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black text-sm mb-4">
                  05
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Up and running fast.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Instant online onboarding and terminals delivered within 2 business days of approval. Pre-configured plug-and-play setup.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Fast courier dispatch Australia-wide
                </span>
                <a
                  href="#quote-section"
                  className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. SECTION: HOW IT WORKS (3-Step Onboarding)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-white px-3 py-1 rounded-full border border-slate-200">
              Hassle-Free Switch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Start taking payments in 3 steps
            </h2>
            <p className="text-base text-slate-600 mt-2">
              No paperwork hurdles, no weeks of waiting. We streamline every step.
            </p>
          </div>

          {/* 3 Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  01
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Step 1</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Tell us about your business.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Two-minute form or a quick call with our Australian payments team. Share your venue type and rough monthly volume.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                ✓ 2-minute quick form
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  02
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Step 2</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Get your custom quote.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A payments specialist sends rates matched to your volume within 1 business day. Clear, transparent fees with zero hidden clauses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                ✓ Within 1 business day
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  03
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Step 3</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Start getting paid.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Go live online or receive your terminals within 2 business days of approval. Plug in, turn on, and see sales settle today.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                ✓ Delivered in 2 business days
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          8. SECTION: TARGET AUDIENCE (Who We Work With - 9 Badges)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Payments for every kind of business
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Whether you are pulling espresso shots in Melbourne, billing telehealth sessions in Sydney, or selling online Australia-wide:
            </p>
          </div>

          {/* 9 Industry Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {industries.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-brand-primary/40 hover:shadow-xs transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-blue-200 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          WORLDPAY SIGNATURE SECTION: "WHAT'S YOUR BIG DREAM?" VIDEO CARD
          ========================================================================= */}
      <section className="py-20 bg-[#f4f0fd] border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
                What's your big dream?
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Wherever you're going, getting payments right can get you there faster. VisionPay helps you to boost your cashflow, protect your revenue and create payment experiences your customers love.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleQuoteClick}
                  className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Start your journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Founder Video Card with Eureka! Bubble */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-xl bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-100 overflow-hidden">
                
                {/* Video Image Frame */}
                <div 
                  className="relative rounded-2xl overflow-hidden bg-slate-900 min-h-[300px] sm:min-h-[360px] flex items-center justify-center group cursor-pointer"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                    alt="Entrepreneur sharing payment journey"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Large Center Circular Play Button */}
                  <div className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/95 text-slate-900 shadow-2xl flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-white transition-all">
                    <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-slate-900 text-slate-900" />
                  </div>

                  {/* Floating Speech Bubble: Eureka! */}
                  <div className="absolute top-6 right-6 z-10 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5 text-xs font-bold animate-bounce">
                    <span>💡</span>
                    <span>Eureka!</span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-4 left-6 right-6 z-10 text-white text-left">
                    <span className="text-xs uppercase tracking-wider font-bold text-blue-300 block">Founder Story</span>
                    <span className="text-sm sm:text-base font-bold">"Scaling from 1 venue to 8 locations with same-day settlement and $0 software fees"</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          9. SECTION: SOCIAL PROOF & PARTNERS (Testimonials, Google Widget, Partner Banner)
          ========================================================================= */}
      <section id="partners-section" className="py-20 bg-slate-50 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-white px-3 py-1 rounded-full border border-slate-200">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Trusted by Australian businesses and platforms
            </h2>

            {/* Google Reviews Live Widget */}
            <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs mt-4">
              <span className="text-xs font-bold text-slate-800">Google Rating</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-extrabold text-slate-900">5.0 / 5.0</span>
              <span className="text-[11px] text-slate-500">(Verified Australian Merchant Reviews)</span>
            </div>
          </div>

          {/* 3 Real Partner Testimonials (Worldpay Photography Card Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-14">
            
            {/* Testimonial 1: ElitePOS */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80" 
                    alt="ElitePOS hospitality partnership"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    ElitePOS
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Hospitality POS Provider</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                    "Integrates seamlessly with our POS, fast settlement and transparent pricing. Our hospitality clients love seeing today's takings in their accounts by 6 PM every day."
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <span className="text-xs font-bold text-brand-primary">Case Study: 300+ Venue Rollout →</span>
              </div>
            </div>

            {/* Testimonial 2: PracShield */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                    alt="PracShield healthcare platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    PracShield
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Healthcare Software</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                    "Reliable recurring subscription payments for medical practices. Onboarding is rapid and the zero gateway fee model saves our clinics thousands annually."
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <span className="text-xs font-bold text-emerald-700">Case Study: Medical Billing Cloud →</span>
              </div>
            </div>

            {/* Testimonial 3: Storebase */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80" 
                    alt="Storebase online store builder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    Storebase
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Online Store Builder</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                    "Dependable recurring billing and merchant payments. The developer APIs and local Sydney support team made integration completely effortless."
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <span className="text-xs font-bold text-brand-primary">Case Study: eCommerce Scale →</span>
              </div>
            </div>

          </div>

          {/* Partner Program Banner */}
          <div id="partner-banner" className="bg-[#0B132B] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-left relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-8 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  Revenue Share Partnership
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Run a platform, POS or agency? Earn from every payment.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                  Offer white-label payments to your customers and earn recurring revenue on every transaction processed.
                </p>
              </div>

              <div className="md:col-span-4 flex items-center md:justify-end">
                <a
                  href="#quote-section"
                  onClick={() => handleNeedToggle('partner')}
                  className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Become a Partner →</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          WORLDPAY SIGNATURE BANNER: ARCHITECTURAL REPORT BANNER
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0c133a] text-white">
        
        {/* Cinematic Architectural Bridge Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1920&q=80" 
            alt="Sydney Harbour architecture at twilight"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c133a] via-[#0c133a]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              Market Intelligence 2026
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Introducing the <br />
              Australian Payments <br />
              Report
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              A new chapter in commerce begins now. What Australian merchants and venue operators need to know to get ahead.
            </p>

            <div className="pt-2">
              <button
                onClick={handleQuoteClick}
                className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Download the report →</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          10. SECTION: FREQUENTLY ASKED QUESTIONS (Objection Removing)
          ========================================================================= */}
      <section id="faq-section" className="py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Clear & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently asked questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about switching your payments to VisionPay.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          WORLDPAY SIGNATURE "NEED HELP?" WITH VINTAGE ROTARY PHONE (Screenshot 5)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#dff3f9] rounded-[36px] p-8 sm:p-14 border border-cyan-100 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headline, Copy & Action */}
              <div className="md:col-span-7 space-y-5 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
                  Need help?
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Get in touch with one of our Australian payment experts today.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleQuoteClick}
                    className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a 
                    href="tel:0283199500" 
                    className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-xl border border-cyan-200 transition inline-flex items-center gap-2 shadow-2xs"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span>02 8319 9500</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Worldpay Iconic Glossy Red Rotary Telephone */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative group">
                  
                  {/* Subtle shadow underneath */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-slate-900/20 rounded-full blur-xl pointer-events-none" />

                  {/* Red Vintage Telephone Frame */}
                  <div className="relative w-56 sm:w-64 h-56 sm:h-64 flex items-center justify-center">
                    
                    {/* Telephone Base */}
                    <div className="relative w-44 sm:w-52 h-36 sm:h-44 bg-gradient-to-br from-[#ff3344] via-[#e6192e] to-[#a80e1e] rounded-3xl shadow-2xl border-2 border-red-500/50 flex flex-col items-center justify-center p-3">
                      
                      {/* Rotary Dial Ring */}
                      <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-inner border-4 border-slate-100 flex items-center justify-center relative">
                        <div className="absolute inset-2 rounded-full border border-slate-300 pointer-events-none" />
                        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-[#e6192e] to-[#ff4d5e] text-white flex items-center justify-center font-black text-base shadow-md">
                          VP
                        </div>
                        <div className="absolute bottom-1 right-2 w-3 h-3 bg-slate-300 rounded-full shadow-xs" />
                      </div>

                    </div>

                    {/* Telephone Handset Receiver */}
                    <div className="absolute -top-3 w-52 sm:w-60 h-14 bg-gradient-to-r from-[#cc1427] via-[#ff3b47] to-[#cc1427] rounded-full shadow-xl border-2 border-red-400 flex items-center justify-between px-3">
                      <div className="w-10 h-10 rounded-full bg-[#990c1b] border-2 border-red-400/40" />
                      <div className="text-[10px] font-bold text-white uppercase tracking-widest">VISIONPAY</div>
                      <div className="w-10 h-10 rounded-full bg-[#990c1b] border-2 border-red-400/40" />
                    </div>

                    {/* Coiled Cord */}
                    <div className="absolute -bottom-2 -left-4 text-3xl font-black text-[#e6192e] rotate-45 select-none pointer-events-none opacity-80">
                      ➰➰➰
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          11. CLOSING CTA STRIP & INLINE LEAD FORM (#quote-section)
          ========================================================================= */}
      <section id="quote-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0B132B] text-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden text-left">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-700 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Payment Proposal
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                See how much you could save on payments
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Send us a recent statement and we'll show you what you'd pay with VisionPay. No obligation.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-8 text-center max-w-lg mx-auto animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName || 'mate'}</strong>. An Australian payments specialist will review your details and send your custom rate proposal within 1 business day.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Need immediate help? Call our Sydney desk at <a href="tel:0283199500" className="text-blue-400 font-bold underline">02 8319 9500</a>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4 text-xs sm:text-sm">
                
                {/* Row 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={fullNameId} className="block font-bold text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      id={fullNameId}
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Michael Harris"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor={businessNameId} className="block font-bold text-slate-300 mb-1.5">Business Name *</label>
                    <input
                      id={businessNameId}
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Harris & Co. Hospitality"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={mobileId} className="block font-bold text-slate-300 mb-1.5">Mobile Phone *</label>
                    <input
                      id={mobileId}
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor={emailId} className="block font-bold text-slate-300 mb-1.5">Work Email *</label>
                    <input
                      id={emailId}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="michael@harris.com.au"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* What do you need? Multi-Select Checkboxes */}
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    What do you need? (Select all that apply)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-200">
                    
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.online}
                        onChange={() => handleNeedToggle('online')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>Online payments</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.eftpos}
                        onChange={() => handleNeedToggle('eftpos')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>EFTPOS terminals</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.pos}
                        onChange={() => handleNeedToggle('pos')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>POS system ($0/mo)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.links}
                        onChange={() => handleNeedToggle('links')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>Payment links</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.giftcards}
                        onChange={() => handleNeedToggle('giftcards')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>Gift cards</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.needs.partner}
                        onChange={() => handleNeedToggle('partner')}
                        className="accent-brand-primary rounded" 
                      />
                      <span>Partner program</span>
                    </label>

                  </div>
                </div>

                {/* Row 3: Monthly Card Turnover & Current Provider */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={turnoverId} className="block font-bold text-slate-300 mb-1.5">Monthly Card Turnover</label>
                    <select
                      id={turnoverId}
                      value={formData.turnover}
                      onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Under $20k">Under $20k / month</option>
                      <option value="$20k–$100k">$20k–$100k / month</option>
                      <option value="$100k–$500k">$100k–$500k / month</option>
                      <option value="$500k+">$500k+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={providerId} className="block font-bold text-slate-300 mb-1.5">Current Provider (Optional)</label>
                    <input
                      id={providerId}
                      type="text"
                      value={formData.currentProvider}
                      onChange={(e) => setFormData({ ...formData, currentProvider: e.target.value })}
                      placeholder="e.g. CBA, Tyro, Square, Stripe"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* Form CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-[#172DC2] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mt-4 text-center">
                    <span>No obligation. No lock-in. We reply within 1 business day.</span>
                    <span className="hidden sm:inline">·</span>
                    <span>Direct contact: <a href="tel:0283199500" className="text-blue-400 font-bold underline">or call 02 8319 9500</a></span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Video Modal Simulation */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 text-white">
              <span className="text-sm font-bold">VisionPay Founder Stories · What's your big dream?</span>
              <button onClick={() => setVideoModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center p-8 text-center text-white">
              <div className="space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-brand-primary flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 fill-brand-primary text-brand-primary" />
                </div>
                <h4 className="text-lg font-bold">Watch how VisionPay unifies in-person POS & global e-commerce</h4>
                <p className="text-xs text-slate-400">
                  Hear firsthand from Australian venue founders who switched to VisionPay for $0 software fees, same-day settlement, and local 24/7 support.
                </p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    handleQuoteClick();
                  }}
                  className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#172DC2] transition cursor-pointer"
                >
                  Get Your Free Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
