import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Check, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Mail, 
  Send, 
  Share2, 
  Lock, 
  ChevronDown, 
  CreditCard, 
  Building2, 
  Briefcase, 
  Receipt, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Globe, 
  DollarSign 
} from 'lucide-react';

export default function PaymentLinksPage({ onNavigateHome }) {
  // Interactive Simulation State: SMS tap to Mobile Checkout
  const [activeTab, setActiveTab] = useState('sms'); // 'sms' or 'checkout'
  const [invoiceAmount, setInvoiceAmount] = useState('480.00');
  const [paymentStatus, setPaymentStatus] = useState('pending'); // 'pending' | 'processing' | 'paid'

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [turnover, setTurnover] = useState('20k_100k');
  const [needsLinks, setNeedsLinks] = useState(true);
  const [needsXero, setNeedsXero] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePayNow = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('paid');
    }, 800);
  };

  const resetSimulation = () => {
    setPaymentStatus('pending');
    setActiveTab('sms');
  };

  const audiences = [
    {
      icon: Wrench,
      name: 'Trades & Home Services',
      description: 'Electricians, plumbers, builders and landscapers. Send a quick payment link directly from your phone on-site and collect payment before leaving the job driveway.',
      badge: 'On-site Payments',
      color: 'bg-blue-50 text-brand-primary'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Accountants, legal advisors, architects and consultants. Collect retainer payments and invoice balances instantly without waiting on 30-day net payment cycles.',
      badge: 'Retainer & Invoices',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Building2,
      name: 'Any Business That Invoices',
      description: 'Wholesalers, B2B suppliers, creative agencies and dental clinics. Eliminate unpaid accounts, collect upfront deposits, and confirm bookings seamlessly.',
      badge: 'Zero Chasing',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Link Generation',
      description: 'Create branded payment links from your merchant mobile or desktop dashboard in under 10 seconds. Auto-fill customer reference and amount.',
      highlight: 'Generated in 10s'
    },
    {
      icon: Share2,
      title: 'Omnichannel Delivery',
      description: 'Instantly dispatch links via SMS, Email, or WhatsApp chat. Customers receive a clickable secure preview with payment details.',
      highlight: 'SMS · Email · WhatsApp'
    },
    {
      icon: Sparkles,
      title: 'Fully Branded Checkout',
      description: 'Showcase your company logo, business name, and color accents on the payment page. Builds instant credibility and customer trust.',
      highlight: 'Custom Brand Identity'
    },
    {
      icon: Globe,
      title: 'Hosted Payment Page',
      description: 'Embed a permanent payment portal on your website (e.g. yourdomain.com/pay) for clients to settle outstanding invoices anytime.',
      highlight: 'Permanent Portal'
    },
    {
      icon: DollarSign,
      title: 'Same-Day Settlement',
      description: 'Card payments settle directly into your Australian bank account the exact same day. No waiting for traditional batch clearing.',
      highlight: '365 Days Payout'
    }
  ];

  const faqs = [
    {
      q: 'Does my customer need an account or app to pay?',
      a: 'No. Your customer simply taps the link from their SMS, email, or WhatsApp message. It opens instantly in their mobile browser, allowing them to complete payment in seconds with Apple Pay, Google Pay, or card. No password or registration needed.'
    },
    {
      q: 'Can I add my own business branding and logo?',
      a: 'Yes. Every payment link checkout page is fully customizable with your company logo, brand accent color, contact details, and custom thank-you notes.'
    },
    {
      q: 'Is there any monthly subscription fee for Payment Links?',
      a: 'No monthly subscription fee. VisionPay Payment Links operate on a zero-maintenance model—you only pay a transparent, low per-transaction fee when a customer completes payment.'
    },
    {
      q: 'How fast do payments settle into my bank account?',
      a: 'Same day. Card payments processed through VisionPay settle directly into your nominated Australian bank account (CBA, Westpac, ANZ, NAB, Macquarie, etc.) 365 days a year.'
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
            <span className="text-brand-slate font-semibold">Payment Links</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-brand-primary font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            $0 Monthly Fee · Instant Setup
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
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-light border border-brand-primary-border shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                  <span>🇦🇺 Australian Payment Links</span>
                </span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                Send a link.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-600 to-indigo-600">
                  Get paid in minutes.
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl font-normal">
                Create a secure payment link for any invoice and send it by SMS, email or WhatsApp. Your customer pays in a few taps, no login needed.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="#link-quote" 
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="#how-it-works" 
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-border text-base font-bold px-7 py-4 rounded-xl shadow-xs hover:border-slate-300 transition-all cursor-pointer"
                >
                  <Clock className="w-5 h-5 text-brand-primary" />
                  <span>See How It Works</span>
                </a>
              </div>

              {/* 4 Horizontal Trust Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs text-brand-slate font-medium">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Zap className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Same-day settlement to any bank</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>No monthly maintenance fees</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Lock className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>No customer app or login required</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Smartphone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Instant mobile tap-to-pay</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Realistic Dual Mockup (SMS Message -> Mobile Pay Sheet) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              
              {/* Decorative Backdrop Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 via-blue-500/15 to-indigo-500/10 rounded-3xl transform rotate-2 blur-2xl opacity-75" />

              {/* Smartphone Container Frame */}
              <div className="relative w-full max-w-[420px] bg-slate-900 rounded-[38px] p-4 shadow-2xl border-4 border-slate-700/80 text-slate-800 overflow-hidden">
                
                {/* Speaker Notch & Top Status */}
                <div className="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700"></div>
                </div>

                {/* Inner Screen */}
                <div className="bg-slate-50 rounded-[28px] p-4 shadow-inner min-h-[500px] flex flex-col justify-between">
                  
                  {/* Top Mode Toggle */}
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                      <span>Customer Flow</span>
                    </div>
                    <div className="flex items-center bg-slate-200 p-0.5 rounded-lg text-[10px] font-bold">
                      <button 
                        onClick={() => setActiveTab('sms')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${activeTab === 'sms' ? 'bg-white text-brand-primary shadow-xs' : 'text-slate-500'}`}
                      >
                        1. SMS Link
                      </button>
                      <button 
                        onClick={() => setActiveTab('checkout')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${activeTab === 'checkout' ? 'bg-white text-brand-primary shadow-xs' : 'text-slate-500'}`}
                      >
                        2. Tap-to-Pay
                      </button>
                    </div>
                  </div>

                  {/* Flow View 1: SMS Message Bubble */}
                  {activeTab === 'sms' && (
                    <div className="space-y-4 py-2 animate-in fade-in duration-200">
                      <div className="text-center text-[10px] text-slate-400 font-semibold">Today 2:15 PM</div>
                      
                      {/* Incoming SMS Bubble */}
                      <div className="bg-white p-4 rounded-2xl rounded-tl-xs shadow-card border border-slate-200/80 space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <img src="/visionpay-logo.png" alt="VisionPay" className="h-4 w-auto object-contain" />
                          <span className="font-bold text-brand-navy">Bondi Electrical Services</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-xs">
                          Hi Sarah, your switchboard upgrade is complete. You can securely settle invoice #VP-8921 ($480.00) using this link:
                        </p>
                        <div 
                          onClick={() => setActiveTab('checkout')}
                          className="bg-brand-primary-light border border-brand-primary-border p-2.5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-brand-primary-light/80 transition-colors"
                        >
                          <span className="font-mono text-brand-primary font-bold text-xs truncate">pay.visionpay.com.au/inv-8921</span>
                          <ArrowRight className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        </div>
                        <div className="text-[10px] text-slate-400">Tap link to pay in 2 clicks via Apple Pay or Card</div>
                      </div>

                      {/* Interactive Prompt Button */}
                      <div className="text-center pt-6">
                        <button 
                          onClick={() => setActiveTab('checkout')}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline cursor-pointer bg-white px-3 py-1.5 rounded-full shadow-xs border border-brand-primary-border"
                        >
                          <span>Open Customer Checkout View →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Flow View 2: Mobile Checkout Screen */}
                  {activeTab === 'checkout' && (
                    <div className="space-y-3.5 py-1 animate-in fade-in duration-200">
                      
                      {/* Merchant Header */}
                      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-brand-primary text-white font-black text-xs flex items-center justify-center">
                            BE
                          </div>
                          <div>
                            <span className="text-xs font-bold text-brand-navy block">Bondi Electrical Services</span>
                            <span className="text-[10px] text-slate-400">Invoice #VP-8921</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Secure 3DS2
                        </span>
                      </div>

                      {/* Payment Card Container */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-card space-y-3">
                        <div className="flex justify-between items-baseline border-b border-slate-100 pb-2">
                          <span className="text-xs text-slate-500">Amount Due</span>
                          <span className="text-2xl font-black text-brand-navy tabular-nums">${invoiceAmount} AUD</span>
                        </div>

                        {paymentStatus !== 'paid' ? (
                          <>
                            {/* Apple Pay 1-Tap */}
                            <button 
                              onClick={handlePayNow}
                              className="w-full bg-black hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                            >
                              <span>{paymentStatus === 'processing' ? 'Processing Payment...' : 'Pay with Pay'}</span>
                            </button>

                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-slate-200"></div>
                              <span className="flex-shrink mx-2 text-[9px] uppercase tracking-wider text-slate-400 font-bold">Or Card</span>
                              <div className="flex-grow border-t border-slate-200"></div>
                            </div>

                            {/* Card Input Simulation */}
                            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-brand-primary" />
                                <span className="font-mono text-slate-700 font-semibold text-xs">•••• 4821</span>
                              </div>
                              <span className="text-[10px] text-slate-400">12/28</span>
                            </div>

                            <button 
                              onClick={handlePayNow}
                              className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold py-2.5 rounded-xl shadow-md shadow-brand-primary/25 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <span>Pay $480.00 Now</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          /* Paid Success State */
                          <div className="text-center py-4 space-y-2 animate-in zoom-in-95 duration-200">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                              <Check className="w-6 h-6 stroke-[3]" />
                            </div>
                            <span className="text-sm font-black text-brand-navy block">Payment Successful!</span>
                            <p className="text-[11px] text-slate-500">
                              Receipt #VP-8921 sent to sarah@example.com · Settling same-day to Bondi Electrical.
                            </p>
                            <button 
                              onClick={resetSimulation} 
                              className="text-[10px] text-brand-primary font-bold hover:underline pt-2 cursor-pointer"
                            >
                              Reset Interactive Demo
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                  {/* Phone Bottom Trust Footer */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VisionPay PCI-DSS Encrypted
                    </span>
                    <span>Same-day Settlement</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           2. "BUILT FOR HOW YOU INVOICE" (TARGET AUDIENCES - 3-COLUMN GRID)
           ========================================================================= */}
      <section className="py-24 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Practical Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Built for how Australian businesses invoice.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Say goodbye to awkward late payment calls. Send a payment link and get paid while you are still on the phone or on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((aud, idx) => {
              const IconComponent = aud.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${aud.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {aud.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {aud.name}
                    </h3>
                    <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                      {aud.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-brand-border flex items-center justify-between text-xs font-bold text-brand-primary">
                    <span>Zero app required</span>
                    <a href="#link-quote" className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Get started <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
           3. FEATURE HIGHLIGHTS (CLEAN CARD GRID WITH VISUAL CALLOUTS)
           ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Feature Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Everything you need to collect invoice payments.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              A comprehensive toolkit for fast, branded, and secure online collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-brand-light rounded-2xl p-7 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white text-brand-primary shadow-xs flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-brand-primary bg-brand-primary-light px-2.5 py-1 rounded-full border border-brand-primary-border">
                        {feat.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted mt-2.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border flex items-center text-xs font-bold text-brand-primary">
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Custom Interactive Live Demo Card in Grid */}
            <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-2xl p-7 border border-slate-800 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-border bg-brand-primary/20 px-2.5 py-0.5 rounded-full border border-brand-primary/40">
                  Real-time Reconciliation
                </span>
                <h3 className="text-xl font-bold mt-4">Automated Status Tracking</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Every payment link tracks customer views, delivery receipts, and successful approvals in real-time. Automatically marks matching invoices as paid.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>✓ Direct Xero & MYOB Sync Ready</span>
                <a href="#link-quote" className="text-white hover:underline flex items-center gap-1">
                  Connect Now →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
           4. "HOW IT WORKS" (3-STEP VISUAL HORIZONTAL TIMELINE)
           ========================================================================= */}
      <section id="how-it-works" className="py-20 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              How VisionPay Payment Links Work
            </h2>
            <p className="text-base text-brand-muted mt-2">
              From creating a link to settled funds in your bank account today.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary to-brand-primary/20 -translate-y-8 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-navy text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white">
                01
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 text-brand-primary bg-brand-primary-light">
                10 Seconds
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Create the payment link</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Enter the amount and invoice reference into your merchant dashboard or mobile app.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-primary text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white">
                02
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 text-blue-700 bg-blue-50">
                1 Click
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Share via SMS, Email or Chat</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Send the secure link directly to your customer’s phone. They tap to view the branded pay sheet.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-navy text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white">
                03
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 text-emerald-700 bg-emerald-50">
                Same-Day
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Customer pays & funds settle</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Customer taps Apple Pay, Google Pay or enters card. Takings settle into your bank account the same day.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
           5. FREQUENTLY ASKED QUESTIONS (ACCORDION)
           ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Everything you need to know about setting up and sending VisionPay Payment Links.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-brand-light rounded-2xl border border-brand-border shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-brand-navy hover:text-brand-primary transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed border-t border-slate-200/80 pt-3 animate-in fade-in duration-150">
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
           6. BOTTOM LEAD FORM & CONVERSION BAND
           ========================================================================= */}
      <section id="link-quote" className="py-24 bg-gradient-to-b from-white via-slate-50 to-brand-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-brand-primary/20 shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow in Brand Blue */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary-light px-3.5 py-1.5 rounded-full border border-brand-primary-border">
                <span>⚡ Stop Chasing Invoices</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3">
                Stop chasing invoices
              </h2>
              <p className="text-base text-brand-muted mt-2">
                Get a tailored rate quote for your business in 1 business day.
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
                      placeholder="e.g. Bondi Electrical Services" 
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
                      placeholder="lachlan@bondielectrical.com.au" 
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Monthly Volume Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Estimated Monthly Invoiced Volume
                  </label>
                  <select 
                    value={turnover}
                    onChange={(e) => setTurnover(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                  >
                    <option value="under_20k">Under $20,000 / month (Sole Traders & Startups)</option>
                    <option value="20k_100k">$20,000 – $100,000 / month (Growing Services)</option>
                    <option value="100k_500k">$100,000 – $500,000 / month (High-Volume Invoicing)</option>
                    <option value="500k_plus">$500,000+ / month (Enterprise & Multi-entity)</option>
                  </select>
                </div>

                {/* Pre-checked option */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                    Services Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-brand-primary bg-brand-primary-light text-brand-primary font-bold text-xs cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={needsLinks} 
                        onChange={(e) => setNeedsLinks(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>Payment Links (Selected)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${needsXero ? 'border-brand-primary bg-brand-primary-light text-brand-primary' : 'border-brand-border bg-slate-50 text-slate-700'}`}>
                      <input 
                        type="checkbox" 
                        checked={needsXero} 
                        onChange={(e) => setNeedsXero(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>Xero / MYOB Sync (Optional)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Custom Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="text-center text-xs text-brand-muted font-medium pt-1">
                  <span>No obligation · No lock-in · Australian support 24/7</span>
                </div>

              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-primary-light text-brand-primary mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-brand-navy">Quote Request Received!</h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName || 'Merchant'}</strong>! A payments specialist will contact you and email your custom rate proposal for <strong>{businessName || 'your business'}</strong> within <strong>1 business day</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:0283199500" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline">
                    <span>Need an immediate link setup? Call 02 8319 9500 →</span>
                  </a>
                  <button onClick={() => setFormSubmitted(false)} className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer">
                    Submit another request
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

