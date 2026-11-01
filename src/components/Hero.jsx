import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Laptop, 
  Smartphone, 
  Check, 
  CreditCard,
  ShieldCheck,
  Lock,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  const [terminalAmount, setTerminalAmount] = useState('48.50');
  const [isApproved, setIsApproved] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateTap = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsApproved(true);
    }, 700);
  };

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle Worldpay Enterprise Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-blue-50/70 via-slate-50/80 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Asymmetric Typographic Statement (Worldpay Style) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Tag: Subtle Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <span>Australian payments, POS and gift cards</span>
              </span>
            </div>

            {/* H1 Headline: Massive, bold display typography with tight leading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Get paid today.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-600 to-[#0F172A]">
                Pay less to get paid.
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Online payments, EFTPOS, POS and payment links from one Australian provider.{' '}
              <strong className="text-slate-900 font-semibold">Same-day settlement</strong> to any Australian bank,{' '}
              <strong className="text-slate-900 font-semibold">no monthly gateway fees</strong> and{' '}
              <strong className="text-slate-900 font-semibold">no lock-in contracts</strong>.
            </p>

            {/* CTA Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#quote-section" 
                className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-glow-primary transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="tel:0283199500" 
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 text-base font-bold px-7 py-4 rounded-xl shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>Call 02 8319 9500</span>
              </a>
            </div>

            {/* Microcopy Underneath CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quote in <strong>1 business day</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Terminals delivered within <strong>2 business days</strong> of approval</span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Realistic Hardware & Payment Showcase (Worldpay) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Backdrop Soft Gradient Elevation */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/10 via-blue-500/10 to-transparent rounded-[40px] blur-2xl opacity-80 pointer-events-none" />

            {/* Container for multi-layered hardware & payment cards */}
            <div className="relative w-full max-w-[490px]">

              {/* ------------------------------------------------------ */}
              {/* FLOATING LAYER 1: Modern Laptop/Desktop Online Checkout */}
              {/* ------------------------------------------------------ */}
              <div className="absolute -top-6 -right-3 sm:-right-6 z-30 w-[240px] sm:w-[260px] bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 text-slate-800 transform hover:-translate-y-1 transition-transform duration-300">
                {/* Browser Header with macOS dots */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[10px] font-semibold text-slate-500 ml-1.5 truncate">Online Gateway</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    $0 Fee
                  </span>
                </div>

                {/* Checkout Summary */}
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-slate-500">
                    <span>Order Total</span>
                    <span className="text-slate-900 font-bold font-mono">$149.00 AUD</span>
                  </div>
                  <div className="flex items-center justify-between text-brand-primary font-semibold text-[10px] bg-blue-50/70 p-1.5 rounded-lg border border-blue-100">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      3DS2 Protected
                    </span>
                    <span className="text-emerald-600 font-bold">Passed</span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------ */}
              {/* CENTERPIECE: PAX A920 Smart EFTPOS Terminal */}
              {/* ------------------------------------------------------ */}
              <div className="relative z-20 w-full bg-[#0F172A] rounded-[32px] p-5 sm:p-6 shadow-2xl shadow-slate-900/40 border-2 border-slate-700/80 text-white overflow-hidden">
                
                {/* Terminal Hardware Top Status Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-slate-400">PAX A920 · 4G LTE Active</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-800">
                    Same-Day Ready
                  </span>
                </div>

                {/* Touch Screen Interface Simulation */}
                <div className="bg-gradient-to-b from-slate-900 to-[#0B132B] rounded-2xl p-4 sm:p-5 border border-slate-750 shadow-inner relative overflow-hidden">
                  
                  {/* Screen Header: Merchant Identification */}
                  <div className="flex justify-between items-center mb-3.5">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/visionpay-logo.png" 
                        alt="VisionPay" 
                        className="h-5 w-auto object-contain bg-white px-2 py-0.5 rounded shadow-xs" 
                      />
                      <span className="text-[11px] text-slate-300 font-medium">Bondi Roasters #04</span>
                    </div>

                    {/* Interactive Tap Simulator Button */}
                    <button 
                      onClick={simulateTap} 
                      className="text-[10px] bg-brand-primary hover:bg-brand-primary-hover text-white px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer font-bold shadow-xs active:scale-95"
                      title="Click to simulate tap payment"
                    >
                      <CreditCard className="w-3 h-3" />
                      <span>Tap Card</span>
                    </button>
                  </div>

                  {/* Transaction Display Card */}
                  <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 text-center relative mb-3.5">
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${isProcessing ? 'animate-spin bg-blue-500/20 text-blue-400' : 'bg-brand-primary/20 text-brand-primary'}`}>
                        <Zap className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tap to Pay</span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums my-1">
                      ${terminalAmount} <span className="text-lg text-slate-400 font-semibold">AUD</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 mt-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{isProcessing ? 'Authorising...' : 'Approved · Settling Today (ANZ)'}</span>
                    </div>

                    {/* Contactless Schemes Supported */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-center gap-3 text-[10px] text-slate-400">
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded font-bold text-slate-300">Apple Pay</span>
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded font-bold text-slate-300">Google Pay</span>
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded font-bold text-slate-300">Visa / MC</span>
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded font-bold text-slate-300">EFTPOS</span>
                    </div>
                  </div>

                  {/* Thermal Paper Receipt Simulation */}
                  <div className="bg-white text-slate-900 rounded-lg p-3 text-xs shadow-md font-mono">
                    <div className="flex justify-between border-b border-dashed border-slate-300 pb-1 mb-1 font-bold">
                      <span className="text-brand-primary font-black">VISIONPAY EFTPOS</span>
                      <span className="text-emerald-700">APPROVED</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>VISA CONTACTLESS</span>
                      <span>*** 4821</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>SETTLEMENT</span>
                      <span className="font-bold text-slate-900">SAME-DAY (ANZ / CBA)</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Hardware Bezel Status */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Direct to all Aussie banks
                  </span>
                  <span className="font-mono text-blue-400 font-semibold">99.99% Uptime</span>
                </div>

              </div>

              {/* ------------------------------------------------------ */}
              {/* FLOATING LAYER 2: Mobile SMS Payment Link */}
              {/* ------------------------------------------------------ */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-30 w-[240px] sm:w-[260px] bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 text-slate-800 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center shrink-0">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">SMS Payment Link</span>
                    <span className="text-[11px] font-bold text-slate-900">Bondi Roasters</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-[10px] space-y-1">
                  <div className="flex justify-between text-slate-600">
                    <span>Payment Request</span>
                    <span className="font-bold text-slate-900 font-mono">$48.50 AUD</span>
                  </div>
                  <div className="text-emerald-700 font-bold flex items-center gap-1 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Paid via Apple Pay · Cleared
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}