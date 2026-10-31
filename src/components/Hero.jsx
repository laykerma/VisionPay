import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Laptop, 
  Smartphone, 
  Check, 
  Sparkles,
  CreditCard
} from 'lucide-react';

export default function Hero() {
  const [terminalAmount, setTerminalAmount] = useState('142.50');
  const [isApproved, setIsApproved] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateTap = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsApproved(true);
    }, 600);
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-brand-emerald/10 via-brand-blue/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: High-converting copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-slate-200/80 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-slate flex items-center gap-1.5">
                <span>🇦🇺 Australian payments, POS and gift cards</span>
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              Get paid today.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-slate-800 to-brand-emerald">
                Pay less to get paid.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
              Online payments, EFTPOS, POS and payment links from one Australian provider.{' '}
              <strong className="text-brand-slate font-semibold">Same-day settlement</strong> to any Australian bank,{' '}
              <strong className="text-brand-slate font-semibold">no monthly gateway fees</strong>, and{' '}
              <strong className="text-brand-slate font-semibold">no lock-in contracts</strong>.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#quote-section" 
                className="inline-flex items-center justify-center gap-2.5 bg-brand-emerald hover:bg-brand-emerald-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-emerald/30 hover:shadow-glow-emerald transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="tel:0283199500" 
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-border text-base font-bold px-7 py-4 rounded-xl shadow-xs hover:border-slate-300 transition-all"
              >
                <Phone className="w-5 h-5 text-brand-emerald" />
                <span>Call 02 8319 9500</span>
              </a>
            </div>

            {/* Microcopy Underneath CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-muted font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>Quote in <strong>1 business day</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>Terminals delivered within <strong>2 business days</strong> of approval</span>
              </div>
            </div>

          </div>

          {/* Right Side: High-End 3D Visual Device Composition */}
          <div className="lg:col-span-5 relative perspective-mockup flex items-center justify-center">
            
            {/* Decorative background glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-emerald/20 to-brand-blue/20 rounded-3xl transform rotate-2 blur-xl opacity-70" />

            {/* Main Terminal Mockup Frame */}
            <div className="relative w-full max-w-[480px] bg-slate-900 rounded-3xl p-6 shadow-terminal border border-slate-700/60 text-white overflow-hidden tilt-terminal">
              
              {/* Terminal Top Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">PAX A920 · 4G LTE Active</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-emerald bg-brand-emerald/15 px-2 py-0.5 rounded-full border border-brand-emerald/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                  Same-Day Ready
                </span>
              </div>

              {/* Terminal Screen Simulation */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 border border-slate-700 shadow-inner relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">VisionPay Smart Terminal</p>
                    <p className="text-xs text-slate-300 font-medium">Bondi Roasters Cafe #04</p>
                  </div>
                  <button 
                    onClick={simulateTap} 
                    className="text-[10px] bg-brand-emerald/20 hover:bg-brand-emerald/30 text-brand-emerald border border-brand-emerald/30 px-2 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
                    title="Click to simulate tap"
                  >
                    <CreditCard className="w-3 h-3" />
                    <span>Tap to Pay</span>
                  </button>
                </div>

                {/* Animated Display Card */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 text-center relative mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${isProcessing ? 'animate-spin bg-brand-blue/20 text-brand-blue' : 'bg-brand-emerald/20 text-brand-emerald animate-pulse-ring'}`}>
                    <Zap className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Amount Due</div>
                  <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums my-1">
                    ${terminalAmount} AUD
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-brand-emerald">
                    <Check className="w-4 h-4" />
                    <span>{isProcessing ? 'Authorising...' : 'Approved · Settling Today'}</span>
                  </div>
                </div>

                {/* Thermal Receipt Preview */}
                <div className="bg-white text-slate-900 rounded-lg p-3 text-xs shadow-md font-mono">
                  <div className="flex justify-between border-b border-dashed border-slate-300 pb-1 mb-1 font-bold">
                    <span>VISIONPAY EFTPOS</span>
                    <span className="text-brand-emerald">APPROVED</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-600">
                    <span>VISA CONTACTLESS</span>
                    <span>*** 4821</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-600">
                    <span>SETTLEMENT</span>
                    <span className="font-bold text-slate-900">SAME-DAY (ANZ)</span>
                  </div>
                </div>
              </div>

              {/* Floating Widgets: Laptop + Phone */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Online Checkout */}
                <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700/80 text-xs">
                  <div className="flex items-center gap-2 mb-2 text-slate-300 font-semibold text-[11px]">
                    <Laptop className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Online Checkout</span>
                  </div>
                  <div className="bg-slate-950 p-2 rounded border border-slate-800 text-[10px] space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Cart Subtotal</span>
                      <span className="text-white font-mono">$89.00</span>
                    </div>
                    <div className="flex items-center justify-between text-brand-emerald font-semibold">
                      <span>Gateway Fee</span>
                      <span>$0.00 / mo</span>
                    </div>
                  </div>
                </div>

                {/* SMS Payment Link */}
                <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700/80 text-xs">
                  <div className="flex items-center gap-2 mb-2 text-slate-300 font-semibold text-[11px]">
                    <Smartphone className="w-3.5 h-3.5 text-brand-amber" />
                    <span>SMS Payment Link</span>
                  </div>
                  <div className="bg-slate-950 p-2 rounded border border-slate-800 text-[10px] space-y-1">
                    <div className="text-slate-400 truncate">vp.link/inv-4829</div>
                    <div className="text-brand-emerald font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                      Paid via Apple Pay
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Network Status */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                  Direct to CBA, NAB, ANZ & Westpac
                </span>
                <span className="font-mono text-brand-emerald">99.99% Uptime</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

