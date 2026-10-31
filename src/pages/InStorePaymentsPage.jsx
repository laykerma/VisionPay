import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Check, 
  Zap, 
  CreditCard, 
  Wifi, 
  BatteryCharging, 
  Printer, 
  Layers, 
  Lock, 
  ChevronDown, 
  Store, 
  Coffee, 
  HeartPulse, 
  Wrench, 
  Tent, 
  Fuel, 
  ShieldCheck, 
  Cpu, 
  Truck, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function InStorePaymentsPage({ onNavigateHome }) {
  // Terminal Tap Simulation State
  const [terminalAmount, setTerminalAmount] = useState('45.00');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isApproved, setIsApproved] = useState(true);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [turnover, setTurnover] = useState('20k_100k');
  const [terminalsCount, setTerminalsCount] = useState('1');
  const [needsEftpos, setNeedsEftpos] = useState(true);
  const [needsIntegrated, setNeedsIntegrated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const simulateTap = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsApproved(true);
    }, 600);
  };

  const industries = [
    {
      icon: Store,
      name: 'Retail & Boutiques',
      description: 'Speedy counter checkout with inventory integration, barcode scanning and digital receipts.',
      color: 'bg-blue-50 text-brand-primary'
    },
    {
      icon: Coffee,
      name: 'Cafes, Pubs & Restaurants',
      description: 'Pay-at-table roaming 4G, tipping prompts, split bills and direct kitchen printer sync.',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      icon: HeartPulse,
      name: 'Health & Allied Beauty',
      description: 'Silent contactless tapping, appointment billing, and seamless Medicare/private health receipts.',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Wrench,
      name: 'Trades & Mobile Services',
      description: 'Pocket-sized PAX A920 with 4G SIM. Take card payments on-site at customer homes with instant SMS receipts.',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Tent,
      name: 'Weekend Markets & Pop-ups',
      description: 'All-day battery life, offline transaction buffering and dual SIM backup for remote locations.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Fuel,
      name: 'Fuel & EV Charging Stations',
      description: 'Outdoor weatherproof terminals and unattended contactless tap modules for 24/7 automated forecourts.',
      color: 'bg-rose-50 text-rose-600'
    }
  ];

  const faqs = [
    {
      q: 'How fast do VisionPay EFTPOS terminals arrive?',
      a: 'Terminals are delivered pre-configured within 2 business days of merchant account approval. They arrive unboxed, charged, and ready to take payments immediately.'
    },
    {
      q: 'When do I get my money into my bank?',
      a: 'Same day. Your daily morning, afternoon, and evening card takings settle directly into your nominated bank account 365 days a year—including weekends and public holidays.'
    },
    {
      q: 'Do I need to switch my bank account?',
      a: 'No. VisionPay settles into ANY Australian bank account (Commonwealth Bank, Westpac, ANZ, NAB, Macquarie, Bendigo Bank, or regional credit unions). Keep your existing accounts and BSB.'
    },
    {
      q: 'Can the PAX A920 connect to my current POS software?',
      a: 'Yes. VisionPay supports both cloud and local integration with major Australian POS platforms including ElitePOS, VisionPay POS, Storebase, and custom systems. You can also run it in Standalone mode without a POS.'
    },
    {
      q: 'Is there a lock-in contract or termination fee?',
      a: 'Zero lock-in contracts. We earn your partnership month by month. If you ever decide to leave, cancel anytime with zero exit penalties.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-brand-dark antialiased">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-slate-50 border-b border-brand-border py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-brand-muted">
          <div className="flex items-center gap-2">
            <button 
              onClick={onNavigateHome}
              className="hover:text-brand-primary transition-colors font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-brand-slate font-semibold">In-Store Payments & EFTPOS</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-brand-primary font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            Hardware In Stock · 2-Day Dispatch
          </span>
        </div>
      </div>

      {/* =========================================================================
           1. HERO SECTION (ABOVE THE FOLD)
           ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-brand-primary/15 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-light border border-brand-primary-border shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                  <span>🇦🇺 Australian EFTPOS & In-Store Solutions</span>
                </span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                EFTPOS with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-600 to-indigo-600">
                  same-day settlement
                </span>{' '}
                and low fees
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
                Integrated or standalone EFTPOS for retail, hospitality and service businesses. Delivered within 2 business days of approval, with takings settled the same day to any Australian bank.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="#terminal-quote" 
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="tel:0283199500" 
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-border text-base font-bold px-7 py-4 rounded-xl shadow-xs hover:border-slate-300 transition-all"
                >
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span>Call 02 8319 9500</span>
                </a>
              </div>

              {/* 4 Trust Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs text-brand-slate font-medium">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Truck className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Delivered within 2 business days</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Zap className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Same-day settlement to any bank</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Lock className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>No lock-in contracts</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>24/7 Australian local support</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Realistic 3D Mockup of PAX A920 Smart Android Terminal */}
            <div className="lg:col-span-5 relative perspective-mockup flex items-center justify-center">
              
              {/* Decorative Backdrop Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-brand-primary/20 via-blue-600/20 to-indigo-500/10 rounded-3xl transform rotate-2 blur-2xl opacity-75" />

              {/* Terminal Frame */}
              <div className="relative w-full max-w-[440px] bg-slate-900 rounded-3xl p-6 shadow-terminal border border-slate-700/70 text-white overflow-hidden tilt-terminal">
                
                {/* Hardware Bevel & Status Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-slate-300 font-semibold">PAX A920 Pro · 4G LTE Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <Wifi className="w-3.5 h-3.5 text-blue-400" />
                    <span>Battery 98%</span>
                  </div>
                </div>

                {/* Terminal Active Screen */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 border border-slate-700 shadow-inner relative overflow-hidden">
                  
                  {/* Merchant & Logo Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/visionpay-logo.png" 
                        alt="VisionPay" 
                        className="h-5 w-auto object-contain bg-white px-2 py-0.5 rounded shadow-xs" 
                      />
                      <span className="text-[11px] text-slate-300 font-semibold">Bondi Roasters</span>
                    </div>
                    <button 
                      onClick={simulateTap} 
                      className="text-[10px] bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary-border border border-brand-primary/40 px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer font-bold"
                      title="Click to simulate contactless tap"
                    >
                      <CreditCard className="w-3 h-3" />
                      <span>Tap Card</span>
                    </button>
                  </div>

                  {/* Payment Center Display */}
                  <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 text-center relative mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${isProcessing ? 'animate-spin bg-brand-primary/20 text-brand-primary' : 'bg-brand-primary/20 text-brand-primary animate-pulse-ring'}`}>
                      <Zap className="w-7 h-7" />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Tap, Insert or Swipe</div>
                    <div className="text-3xl font-black text-white tracking-tight tabular-nums my-1.5">
                      ${terminalAmount} AUD
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span>{isProcessing ? 'Authorising...' : 'Approved · Settling Today'}</span>
                    </div>
                  </div>

                  {/* Contactless Wave Indicators & Accepted Cards */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 pb-2 px-1">
                    <span className="flex items-center gap-1">
                      <span className="text-white font-bold">Pay</span> · GPay · Visa · MC · EFTPOS
                    </span>
                    <span className="text-emerald-400 font-mono font-semibold">LCR Active</span>
                  </div>

                  {/* Printed Receipt Strip Simulation */}
                  <div className="bg-white text-slate-900 rounded-lg p-3 text-xs shadow-md font-mono mt-2">
                    <div className="flex justify-between border-b border-dashed border-slate-300 pb-1 mb-1 font-bold">
                      <span className="text-brand-primary font-black">VISIONPAY EFTPOS</span>
                      <span className="text-emerald-600">APPROVED</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>CONTACTLESS TAP</span>
                      <span>*** 4821</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                      <span>SETTLEMENT</span>
                      <span className="text-slate-900">SAME-DAY (ANY BANK)</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Hardware Hardware Feature Callouts */}
                <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-300">
                  <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/60">
                    <Printer className="w-3.5 h-3.5 mx-auto mb-1 text-blue-400" />
                    <span>Thermal Printer</span>
                  </div>
                  <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/60">
                    <Wifi className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                    <span>4G + Wi-Fi</span>
                  </div>
                  <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/60">
                    <BatteryCharging className="w-3.5 h-3.5 mx-auto mb-1 text-amber-400" />
                    <span>All-Day Battery</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           2. "CHOOSE HOW YOU TAKE PAYMENTS" (2-COLUMN FEATURE CARD)
           ========================================================================= */}
      <section className="py-24 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Deployment Flexibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Choose how you take payments.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Whether you need automated point-of-sale synchronization or full standalone wireless mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Card A: Integrated EFTPOS */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold bg-blue-100 text-brand-primary px-3 py-1 rounded-full">
                    POS Connected
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  Integrated EFTPOS
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Automatic two-way sync with your Point of Sale system. Sale amounts push directly from your counter screen to the PAX terminal in milliseconds.
                </p>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span><strong>Zero double-keying:</strong> Eliminate costly staff manual entry mistakes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span><strong>Faster queue turnover:</strong> Cut transaction time down to under 2 seconds</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span><strong>Automatic end-of-day balance:</strong> Reconciles directly with ElitePOS & VisionPay POS</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Supports 50+ Australian POS</span>
                <a href="#terminal-quote" className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Integrated <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card B: Standalone EFTPOS */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    100% Wireless
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  Standalone EFTPOS
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Independent operation with no POS or cables required. Enter the sale amount straight onto the bright touchscreen and tap to pay anywhere with 4G.
                </p>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Ready straight out of the box:</strong> Turn on, key amount, collect payment</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Built-in Telstra/Optus 4G SIM:</strong> Uncapped mobile data included at no extra cost</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Ideal for roaming:</strong> Trades, outdoor events, weekend markets & table service</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Uncapped 4G SIM Included</span>
                <a href="#terminal-quote" className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Standalone <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Micro-Banner Below */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-brand-primary-border rounded-2xl p-4 text-center text-xs sm:text-sm font-semibold text-brand-navy flex items-center justify-center gap-2 shadow-xs">
            <span className="text-brand-primary font-bold">💡 Flexible Growth:</span>
            <span>Switch seamlessly between Standalone and Integrated modes anytime in settings without swapping hardware.</span>
          </div>

        </div>
      </section>


      {/* =========================================================================
           3. HARDWARE SPOTLIGHT - THE PAX A920 SMART TERMINAL
           ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Flagship Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              The PAX A920 Smart Terminal.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Built on secure Android architecture. Sleek, fast, and engineered specifically for high-speed Australian retail and hospitality.
            </p>
          </div>

          {/* Key Specs Grid (5 Features) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Spec 1 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-primary shadow-xs flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Smart Android OS</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                5-inch high-definition color touchscreen with intuitive smartphone-style touch responsiveness.
              </p>
            </div>

            {/* Spec 2 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-blue-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Fast Thermal Printer</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                High-speed 40-line/sec printer with drop-in paper loading, plus digital SMS & email receipt options.
              </p>
            </div>

            {/* Spec 3 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">All Payment Methods</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Contactless Tap & Go, Chip & PIN, Apple Pay, Google Pay, Visa, Mastercard, AMEX, and Australian EFTPOS.
              </p>
            </div>

            {/* Spec 4 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-purple-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Dual Connectivity</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                4G LTE SIM with automatic Wi-Fi failover. Never drop a transaction if your in-store internet goes down.
              </p>
            </div>

            {/* Spec 5 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-amber-500 shadow-xs flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">All-Day Battery</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                High-capacity 5250mAh lithium-ion battery powers over 12 hours of continuous high-volume peak service.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
           4. SUB-SOLUTION - "SELF-SERVICE & UNATTENDED PAYMENTS"
           ========================================================================= */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-border bg-brand-primary/20 px-3 py-1 rounded-full border border-brand-primary/40">
                Self-Service & Unattended Hardware
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Payments that work without staff.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                EVA-compliant contactless payment modules engineered for outdoor weather resistance and 24/7 unattended reliability. Perfect for EV charging stations, parking meters, car washes, laundromats, automated kiosks, and vending operations across Australia.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IP65 Weatherproof</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IK09 Vandal Resistant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>MDB & Pulse Ready</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a 
                href="#terminal-quote"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all"
              >
                <span>Talk to Our Unattended Team</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           5. INDUSTRY FIT SECTION
           ========================================================================= */}
      <section className="py-24 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Australian Commerce
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Trusted across every major industry.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Configured specifically for your daily operational workflow, whether you serve flat whites or manage multi-store fashion inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${ind.color} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-brand-muted mt-2.5 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
           6. SOCIAL PROOF & PARTNER TRUST (ELITEPOS)
           ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-brand-light rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-brand-border pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shadow-md">
                  EP
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-navy">ElitePOS Integration Partner</h3>
                  <p className="text-xs text-brand-muted">Hospitality & Multi-Venue Point of Sale</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <span>★★★★★</span>
                <span className="text-slate-600 font-semibold text-xs ml-1">Verified Partner Review</span>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-brand-slate font-medium leading-relaxed italic">
              "We have integrated VisionPay's PAX A920 EFTPOS terminals across more than 240 busy hospitality venues and pubs. The two-way sync is bulletproof—zero double-keying errors, lightning-fast table tipping, and our venue owners rave about receiving Saturday and Sunday takings on the exact same day. Their Sydney support team picks up the phone immediately when our managers need them."
            </blockquote>

            <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-extrabold text-brand-navy text-sm block">David Henderson</span>
                <span className="text-brand-muted">Head of Product Integrations, ElitePOS Australia</span>
              </div>
              <span className="text-brand-primary font-bold bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
                240+ Venue Terminals Active
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
           7. OBJECTION-REMOVING FAQ (INTERACTIVE ACCORDION)
           ========================================================================= */}
      <section className="py-20 bg-brand-light border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Everything you need to know about getting and using VisionPay EFTPOS hardware.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-brand-border shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-brand-navy hover:text-brand-primary transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
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
           8. BOTTOM LEAD CAPTURE SECTION
           ========================================================================= */}
      <section id="terminal-quote" className="py-24 bg-gradient-to-b from-white via-slate-50 to-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-brand-primary/20 shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow in Brand Blue */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary-light px-3.5 py-1.5 rounded-full border border-brand-primary-border">
                <span>⚡ Fast 2-Day Terminal Delivery</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3">
                Get your terminal in 2 business days
              </h2>
              <p className="text-base text-brand-muted mt-2">
                Request a custom rate quote in 1 business day.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Full Name <span className="text-brand-primary">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Lachlan Murdoch" 
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Business Name <span className="text-brand-primary">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Bondi Roasters Cafe" 
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Australian Mobile <span className="text-brand-primary">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required 
                      value={mobilePhone}
                      onChange={(e) => setMobilePhone(e.target.value)}
                      placeholder="0412 345 678" 
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Business Email <span className="text-brand-primary">*</span>
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="lachlan@bondiroasters.com.au" 
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Monthly Turnover & Terminals Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Monthly Card Turnover
                    </label>
                    <select 
                      value={turnover}
                      onChange={(e) => setTurnover(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    >
                      <option value="under_20k">Under $20,000 / month</option>
                      <option value="20k_100k">$20,000 – $100,000 / month</option>
                      <option value="100k_500k">$100,000 – $500,000 / month</option>
                      <option value="500k_plus">$500,000+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                      Number of Terminals Required
                    </label>
                    <select 
                      value={terminalsCount}
                      onChange={(e) => setTerminalsCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    >
                      <option value="1">1 Terminal</option>
                      <option value="2">2 Terminals</option>
                      <option value="3_5">3 – 5 Terminals</option>
                      <option value="6_plus">6+ Terminals (Multi-venue)</option>
                    </select>
                  </div>
                </div>

                {/* Pre-checked options */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                    Hardware Configuration
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-brand-primary bg-brand-primary-light text-brand-primary font-bold text-xs cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={needsEftpos} 
                        onChange={(e) => setNeedsEftpos(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>PAX A920 EFTPOS Terminals (Selected)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${needsIntegrated ? 'border-brand-primary bg-brand-primary-light text-brand-primary' : 'border-brand-border bg-slate-50 text-slate-700'}`}>
                      <input 
                        type="checkbox" 
                        checked={needsIntegrated} 
                        onChange={(e) => setNeedsIntegrated(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>POS Integration Sync (Optional)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request My Custom Rate Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust footer */}
                <div className="text-center text-xs text-brand-muted font-medium pt-1">
                  <span>No obligation · Free dispatch · Australian support 24/7</span>
                </div>

              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-primary-light text-brand-primary mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-brand-navy">Terminal Quote Requested!</h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName || 'Merchant'}</strong>! A senior payments specialist will contact you and email a custom rate comparison for <strong>{businessName || 'your business'}</strong> within <strong>1 business day</strong>. Your pre-configured PAX A920 terminals will be dispatched within 2 business days of approval.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:0283199500" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline">
                    <span>Need an urgent dispatch? Call 02 8319 9500 →</span>
                  </a>
                  <button onClick={() => setFormSubmitted(false)} className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer">
                    Submit another quote
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

