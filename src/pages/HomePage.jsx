import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  Store, 
  Laptop, 
  Zap, 
  ChevronRight, 
  Sparkles, 
  ExternalLink, 
  Phone, 
  Lock, 
  CheckCircle2, 
  Volume2, 
  ShoppingBag, 
  Check, 
  X,
  Sliders,
  Globe,
  Radio
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  // Carousel State for "Who we serve"
  const [activeServeTab, setActiveServeTab] = useState(0);

  // Cookie banner state
  const [cookieVisible, setCookieVisible] = useState(true);

  // Interactive Voice / AI Prompt Simulator in Hero
  const [aiPromptActive, setAiPromptActive] = useState(false);
  const [aiPromptText, setAiPromptText] = useState('I need a dress for the weekend');
  const [selectedOutfitIndex, setSelectedOutfitIndex] = useState(0);

  // Video modal simulation state
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.querySelector('#need-help-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#ff3b47]">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Screenshot 1 - Worldpay Split Hero)
          ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Massive Worldpay Display Typography */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black text-[#0e0e33] leading-[1.02] tracking-tight">
                Making <br />
                everyday <br />
                commerce <br />
                better
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
                With VisionPay businesses of all sizes can boost revenue, innovate at pace and create payment experiences their customers love.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleContact}
                  className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold px-7 py-3.5 rounded-full text-base transition-all inline-flex items-center gap-2 shadow-xs hover:shadow cursor-pointer group"
                >
                  <span>Talk to an expert</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Lavender Card with Phone & AI Voice Prompt Mockup */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Soft Lavender / Violet Outer Rounded Container Card */}
                <div className="bg-[#ede9fe] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden min-h-[460px] sm:min-h-[500px] border border-purple-100 shadow-2xs">
                  
                  {/* Subtle ambient lighting */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

                  {/* Sleek Smartphone Mockup */}
                  <div className="relative w-full max-w-[290px] sm:max-w-[310px] bg-slate-900 rounded-[38px] p-3 shadow-2xl border-4 border-slate-800 text-white">
                    
                    {/* Phone Dynamic Island / Camera Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />

                    {/* Inside Phone Screen */}
                    <div className="bg-slate-950 rounded-[30px] pt-8 pb-4 px-4 min-h-[410px] flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Top Voice Prompt Pill */}
                      <div className="space-y-4 pt-2">
                        
                        {/* Interactive Voice Bubble */}
                        <div className="bg-white text-slate-900 rounded-full py-2.5 px-4 shadow-lg flex items-center gap-2.5 border border-slate-100">
                          <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          </span>
                          <span className="text-xs font-semibold text-slate-800 truncate">
                            "{aiPromptText}"
                          </span>
                        </div>

                        {/* Agentic Shopping Preview Card */}
                        <div className="bg-[#581c87] text-white rounded-2xl p-3.5 shadow-md border border-purple-700/60">
                          <div className="flex items-center justify-between text-[11px] font-bold text-purple-200 mb-2">
                            <span>VisionPay AI Agent</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          </div>

                          <div className="space-y-2">
                            <div className="bg-purple-900/60 p-2 rounded-xl flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <span className="text-base">👗</span>
                                <div>
                                  <div className="font-bold text-white text-[11px]">Silk Evening Midi</div>
                                  <div className="text-[10px] text-purple-300">In stock · Express Sat</div>
                                </div>
                              </div>
                              <span className="font-bold text-emerald-400 text-xs">$185</span>
                            </div>

                            <button 
                              onClick={() => {
                                setAiPromptActive(true);
                                setTimeout(() => setAiPromptActive(false), 2500);
                              }}
                              className="w-full bg-[#ff3b47] hover:bg-[#e62635] text-white text-[11px] font-bold py-2 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                            >
                              <CreditCard className="w-3 h-3" />
                              <span>{aiPromptActive ? 'Authorizing Biometric 3DS...' : '1-Click Agentic Pay'}</span>
                            </button>
                          </div>
                        </div>

                      </div>

                      {/* Phone Bottom Footer Branding */}
                      <div className="pt-4 border-t border-slate-900 text-center">
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-medium">
                          designed & powered by
                        </span>
                        <span className="text-xs font-black tracking-tight text-white mt-0.5 inline-block">
                          visionpay
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: CLIENT LOGOS / TRUST STRIP (Screenshot 1 - amazon, UNITED...)
          ========================================================================= */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 text-slate-400">
            
            {/* Amazon */}
            <div className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-0.5 hover:text-slate-900 transition-colors">
              <span>amazon</span>
              <span className="text-amber-500 text-sm">▾</span>
            </div>

            {/* United */}
            <div className="text-xl sm:text-2xl font-black tracking-widest uppercase text-slate-800 flex items-center gap-1 hover:text-slate-900 transition-colors">
              <span>UNITED</span>
              <span className="text-blue-600 text-lg">✈</span>
            </div>

            {/* Experian */}
            <div className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-1 hover:text-slate-900 transition-colors">
              <span className="text-blue-500 font-extrabold text-2xl">::</span>
              <span>experian</span>
            </div>

            {/* Booking.com */}
            <div className="text-xl sm:text-2xl font-extrabold text-[#003580] tracking-tight hover:opacity-90 transition-opacity">
              <span>Booking.com</span>
            </div>

            {/* Panda Express */}
            <div className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <span className="text-red-600 text-xl">🐼</span>
              <span>PANDA EXPRESS</span>
            </div>

            {/* Euronics */}
            <div className="text-lg sm:text-xl font-black tracking-wider text-slate-800 flex items-center gap-1 hover:text-slate-900 transition-colors">
              <span className="text-amber-500">★</span>
              <span>euronics</span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: DUAL HIGH-IMPACT FEATURE CARDS (Screenshot 1 & 2)
          ========================================================================= */}
      <section id="feature-banners" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: GPR 2026 (Global Payments Report 2026) */}
            <div className="relative bg-[#121624] text-white rounded-[28px] p-8 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[380px] shadow-sm group">
              
              {/* Card visual background glow & graphics */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Top Tag & Big Title */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Report</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-xs text-blue-300 font-semibold">Annual flagship</span>
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    GPR <br /> 2026
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
                    <Volume2 className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                {/* Floating Payment Badges */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded text-[11px] font-bold text-white border border-slate-700">VISA</span>
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded text-[11px] font-bold text-amber-400 border border-slate-700">Mastercard</span>
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded text-[11px] font-bold text-blue-300 border border-slate-700">Apple Pay</span>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs">
                  Commerce is in a constant state of flux. Keep pace with the latest Global Payments Report.
                </p>

                <button 
                  onClick={handleContact}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Download the report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Card 2: Innovation Focus Spring/Summer 2026 */}
            <div className="relative bg-gradient-to-br from-[#101036] via-[#1a1340] to-[#0e0e29] text-white rounded-[28px] p-8 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[380px] shadow-sm group">
              
              {/* Colorful bokeh circles overlay mimicking Screenshot 1 */}
              <div className="absolute top-1/4 right-8 w-44 h-44 rounded-full bg-pink-500/25 blur-2xl pointer-events-none" />
              <div className="absolute bottom-6 right-24 w-32 h-32 rounded-full bg-purple-500/30 blur-xl pointer-events-none" />
              <div className="absolute top-6 right-36 w-24 h-24 rounded-full bg-blue-500/30 blur-lg pointer-events-none" />

              {/* Top Tag & Title */}
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-300 block mb-4">
                  Product updates
                </span>

                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  innovation <br /> focus
                </h3>

                <span className="text-xs sm:text-sm font-semibold text-purple-200 mt-2 block">
                  Spring/Summer 2026
                </span>
              </div>

              {/* Card Bottom CTA */}
              <div className="relative z-10 mt-8 pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-purple-200 max-w-xs">
                  Discover new authorization boosters, autonomous checkout agents, and multi-rail real-time payouts.
                </p>

                <button 
                  onClick={() => handleNav('home', '#powering-payments')}
                  className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Explore now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: "WHO WE SERVE" CAROUSEL (Screenshot 2 - "We're everywhere...")
          ========================================================================= */}
      <section id="who-we-serve" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Headline */}
          <div className="mb-10 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Who we serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e0e33] tracking-tight">
              We're everywhere. You can be too.
            </h2>
          </div>

          {/* Cards Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: Small and mid-sized businesses (Wide Left 7 Cols) */}
            <div className="lg:col-span-8 bg-slate-50 rounded-[32px] p-8 sm:p-12 border border-slate-200/80 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Text */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0e0e33]">
                    Small and mid-sized businesses
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    It's time to think big with payments technology that's secure, flexible and designed with tomorrow in mind. Get a quote in minutes.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={handleContact}
                      className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-xs cursor-pointer"
                    >
                      Talk to sales
                    </button>

                    <button
                      onClick={() => handleNav('pos')}
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Explore products <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual: Soft Cyan Container with Small Business Merchant */}
                <div className="md:col-span-5 bg-[#e0f7fa] rounded-2xl p-5 border border-cyan-100 flex flex-col justify-between text-slate-800 relative shadow-2xs">
                  <div className="bg-white/95 rounded-xl p-3 shadow-xs border border-slate-100 space-y-2 mb-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>Total Due</span>
                      <span className="text-emerald-700 font-mono">$48.50 AUD</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Contactless Apple Pay ready</span>
                    </div>
                  </div>

                  {/* Merchant Graphic Container */}
                  <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
                    <span className="text-2xl block mb-1">🪴</span>
                    <span className="text-xs font-bold text-slate-900 block">Bondi Botanical Studio</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">✓ Settled today by 6 PM</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Enterprise (Right 4 Cols) */}
            <div className="lg:col-span-4 bg-[#0e0e33] text-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-slate-800 shadow-md">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  Global Scale
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Enterprise
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  When it comes to big business, we deliver massive-scale processing ($2.3 trillion) for some of the biggest brands.
                </p>

                <div className="pt-2 text-3xl font-black text-emerald-400">
                  $2.3 Trillion+
                  <span className="text-xs text-slate-400 block font-normal mt-0.5">Annual global transaction volume</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={handleContact}
                  className="w-full bg-[#1e293b] hover:bg-[#334155] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full transition border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Carousel Slider Progress Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="w-12 h-1 bg-slate-800 rounded-full" />
            <span className="w-3 h-1 bg-slate-200 rounded-full" />
            <span className="w-3 h-1 bg-slate-200 rounded-full" />
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: "WHAT'S YOUR BIG DREAM?" VIDEO/STORY (Screenshot 2 & 4)
          ========================================================================= */}
      <section className="py-20 bg-[#f4f0fd] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e0e33] tracking-tight">
                What's your big dream?
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Wherever you're going, getting payments right can get you there faster. VisionPay helps you to boost your business, protect your revenue and create payment experiences your customers love.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleContact}
                  className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-xs cursor-pointer inline-flex items-center gap-2"
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
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 min-h-[320px] sm:min-h-[380px] flex items-center justify-center group cursor-pointer"
                  onClick={() => setVideoModalOpen(true)}
                >
                  {/* Photo of Smiling Entrepreneur */}
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                    alt="Entrepreneur sharing payment journey"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

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
                    <span className="text-xs uppercase tracking-wider font-bold text-rose-300 block">Founder Story</span>
                    <span className="text-sm sm:text-base font-bold">"Scaling from 1 store to 40 locations with seamless unified payments"</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: "POWERING EVERY PART OF YOUR PAYMENTS JOURNEY" (Screenshot 4)
          ========================================================================= */}
      <section id="powering-payments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              End-to-End Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e0e33] tracking-tight">
              Powering every part of your payments journey
            </h2>
          </div>

          {/* 3 Clean Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Accept */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Pastel Purple Illustration Header */}
                <div className="w-full h-36 bg-[#ede9fe] rounded-2xl p-4 flex items-center justify-center mb-6 relative overflow-hidden border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col justify-between p-1.5">
                      <div className="w-6 h-1 bg-purple-500 rounded" />
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                      TAP
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0e0e33] mb-3">Accept</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Deliver seamless high-converting payments online and in-person with global payment methods and full customization.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <button 
                  onClick={() => handleNav('pos')}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Accept solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Protect */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Pastel Cyan Illustration Header */}
                <div className="w-full h-36 bg-[#e0f2fe] rounded-2xl p-4 flex items-center justify-center mb-6 relative overflow-hidden border border-sky-100">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-sky-200 flex items-center justify-center text-sky-600">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0e0e33] mb-3">Protect</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Safeguard every transaction with modern authentication, biometric verification and zero friction, reducing chargebacks while keeping good customers sound.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <button 
                  onClick={() => handleNav('gateway')}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Protect solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Optimize */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Pastel Peach Illustration Header */}
                <div className="w-full h-36 bg-[#ffedd5] rounded-2xl p-4 flex items-center justify-center mb-6 relative overflow-hidden border border-amber-100">
                  <div className="flex items-end gap-1.5">
                    <div className="w-3 h-8 bg-amber-400 rounded-t" />
                    <div className="w-3 h-12 bg-amber-500 rounded-t" />
                    <div className="w-3 h-16 bg-amber-600 rounded-t" />
                    <div className="w-3 h-20 bg-emerald-500 rounded-t shadow-xs" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0e0e33] mb-3">Optimize</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Maximize revenue with predictive routing, automated retry engines, and granular authorization optimization.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <button 
                  onClick={() => handleNav('instore')}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Optimize solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: GIANT ARCHITECTURAL BRIDGE BANNER (Screenshot 3 & 4)
          ========================================================================= */}
      <section id="agentic-report" className="relative py-28 sm:py-36 overflow-hidden bg-[#0c133a] text-white">
        
        {/* Cinematic Architectural Bridge Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1920&q=80" 
            alt="Architectural bridge under twilight"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c133a] via-[#0c133a]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Introducing the <br />
              Agentic Commerce <br />
              Report
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              A new chapter in commerce begins now. What merchants need to know to get ahead.
            </p>

            <div className="pt-3">
              <button
                onClick={handleContact}
                className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Download the report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 8: CUSTOMER STORIES (Screenshot 3 - "See how our customers...")
          ========================================================================= */}
      <section id="customer-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Customer stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0e0e33] tracking-tight">
                See how our customers have put VisionPay <br className="hidden sm:inline" />
                solutions into action
              </h2>
            </div>

            <button 
              onClick={handleContact}
              className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#ff3b47] px-4 py-2 rounded-full border border-slate-300 hover:border-[#ff3b47] transition-all shrink-0 cursor-pointer"
            >
              See all customer stories
            </button>
          </div>

          {/* 3 Customer Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Experian */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="Experian case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[11px] font-bold text-slate-900 shadow-xs">
                    experian
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                  <h3 className="text-lg font-bold text-[#0e0e33] mt-1.5 mb-2">
                    Experian
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Unleashing payments connectivity to build new fintech solutions and scale global data authorization.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Nu Skin */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Nu Skin case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[11px] font-bold text-slate-900 shadow-xs">
                    NU SKIN
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                  <h3 className="text-lg font-bold text-[#0e0e33] mt-1.5 mb-2">
                    Nu Skin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    A beautiful solution to global payments challenges across 50+ countries with local currency checkout.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Reynolds and Reynolds */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" 
                    alt="Reynolds and Reynolds automotive dealership software"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[11px] font-bold text-slate-900 shadow-xs">
                    Reynolds & Reynolds
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Software platforms, Transportation</span>
                  <h3 className="text-lg font-bold text-[#0e0e33] mt-1.5 mb-2">
                    Reynolds and Reynolds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    $2 billion builder of automotive dealership software turns to VisionPay for integrated in-store payments.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9: INSIGHTS ("Our expertise is your edge" - Screenshot 3 & 5)
          ========================================================================= */}
      <section id="insights-section" className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0e0e33] tracking-tight">
                Our expertise is your edge
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Win your payments. Check out our latest articles, white papers and market reports.
              </p>
            </div>

            <button 
              onClick={handleContact}
              className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#ff3b47] px-4 py-2 rounded-full border border-slate-300 hover:border-[#ff3b47] transition-all shrink-0 cursor-pointer"
            >
              See all insights articles
            </button>
          </div>

          {/* 3 Tech Diagram / Insights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Authentication wins the exemption debate */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Visual Technical Diagram Header */}
                <div className="w-full h-36 bg-[#f3e8ff] rounded-2xl p-4 flex items-center justify-center mb-5 border border-purple-100">
                  <div className="space-y-1.5 w-full max-w-[200px]">
                    <div className="bg-white p-1.5 rounded shadow-2xs text-[10px] font-mono text-purple-900 text-center font-bold">
                      SCA / 3DS Engine
                    </div>
                    <div className="flex justify-between items-center text-[8px] font-mono text-purple-700 px-1">
                      <span>Low-risk</span>
                      <span>→</span>
                      <span className="font-bold text-emerald-600">Exemption</span>
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded text-[10px] font-mono text-center font-bold">
                      Frictionless Pass (99.2%)
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0e0e33] mb-2 leading-snug">
                  Authentication wins the exemption debate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Shifting exemption friction into 3DS with smart risk models, frictionless approvals and seamless authentications aligned with schemes and regulatory changes.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: How agentic commerce will transform key industries */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Stylized Commerce Graphic Header */}
                <div className="w-full h-36 bg-[#fee2e2] rounded-2xl p-4 flex items-center justify-center mb-5 border border-rose-100">
                  <div className="flex items-center gap-4 text-3xl">
                    <span>🧳</span>
                    <span>👜</span>
                    <span>🛍️</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0e0e33] mb-2 leading-snug">
                  How agentic commerce will transform key industries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Agentic commerce is moving from invention to reality – enhancing retail, travel, finance, gaming and everyday shopping in ways that demand modern payment rails.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Localization unlocks global revenue */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                {/* Credit Card & Global Currency Graphic Header */}
                <div className="w-full h-36 bg-[#e0e7ff] rounded-2xl p-4 flex items-center justify-center mb-5 border border-indigo-100">
                  <div className="w-32 bg-[#1e1b4b] text-white p-2.5 rounded-xl shadow-md space-y-1">
                    <div className="flex justify-between items-center text-[9px] font-mono text-indigo-300">
                      <span>GLOBAL</span>
                      <span>AUD/USD/EUR</span>
                    </div>
                    <div className="text-[10px] font-bold font-mono">•••• 8821</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0e0e33] mb-2 leading-snug">
                  Localization unlocks global revenue
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Tailor payment methods and currency choices to local preferences and regulations. Expand into new markets with localized pricing and higher authorization rates.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button 
                  onClick={handleContact}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#ff3b47] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 10: "NEED HELP?" WITH RED ROTARY TELEPHONE (Screenshot 5)
          ========================================================================= */}
      <section id="need-help-section" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#dff3f9] rounded-[36px] p-8 sm:p-14 border border-cyan-100 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headline, Copy & Red Button */}
              <div className="md:col-span-7 space-y-5 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e0e33] tracking-tight">
                  Need help?
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Get in touch with one of our payment experts today.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleContact}
                    className="bg-[#ff3b47] hover:bg-[#e62635] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a 
                    href="tel:0283199500" 
                    className="bg-white/80 hover:bg-white text-slate-800 font-bold text-sm px-6 py-3.5 rounded-full border border-cyan-200 transition inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span>02 8319 9500</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Iconic Worldpay Red Rotary Telephone Mockup */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative group">
                  
                  {/* Subtle shadow underneath */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-slate-900/20 rounded-full blur-xl pointer-events-none" />

                  {/* Red Vintage Telephone Frame Crafted with Vector Precision */}
                  <div className="relative w-56 sm:w-64 h-56 sm:h-64 flex items-center justify-center">
                    
                    {/* Telephone Base (Crimson Red Glossy Body) */}
                    <div className="relative w-44 sm:w-52 h-36 sm:h-44 bg-gradient-to-br from-[#ff3344] via-[#e6192e] to-[#a80e1e] rounded-3xl shadow-2xl border-2 border-red-500/50 flex flex-col items-center justify-center p-3">
                      
                      {/* Rotary Dial Ring */}
                      <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-inner border-4 border-slate-100 flex items-center justify-center relative">
                        
                        {/* Rotary Number Hole Marks */}
                        <div className="absolute inset-2 rounded-full border border-slate-300 pointer-events-none" />
                        
                        {/* Dial Center Logo */}
                        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-[#e6192e] to-[#ff4d5e] text-white flex items-center justify-center font-black text-base shadow-md">
                          VP
                        </div>

                        {/* Dial Finger Stop */}
                        <div className="absolute bottom-1 right-2 w-3 h-3 bg-slate-300 rounded-full shadow-xs" />
                      </div>

                    </div>

                    {/* Telephone Handset Receiver on Top */}
                    <div className="absolute -top-3 w-52 sm:w-60 h-14 bg-gradient-to-r from-[#cc1427] via-[#ff3b47] to-[#cc1427] rounded-full shadow-xl border-2 border-red-400 flex items-center justify-between px-3">
                      <div className="w-10 h-10 rounded-full bg-[#990c1b] border-2 border-red-400/40" />
                      <div className="text-[10px] font-bold text-white uppercase tracking-widest">VISIONPAY</div>
                      <div className="w-10 h-10 rounded-full bg-[#990c1b] border-2 border-red-400/40" />
                    </div>

                    {/* Realistic Coiled Red Cord */}
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
          COOKIE BANNER (Matching Screenshot 1 & 2 Bottom Strip)
          ========================================================================= */}
      {cookieVisible && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3.5 px-4 sm:px-8 shadow-2xl animate-fadeIn">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-600 text-left max-w-3xl">
              <strong className="text-slate-900">Chúng tôi sử dụng cookie:</strong> Bằng cách nhấp vào "Chấp nhận tất cả", bạn đồng ý với việc lưu trữ cookie trên thiết bị của bạn cho mục đích chức năng, phân tích và quảng cáo.
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setCookieVisible(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-1.5 rounded-lg border border-slate-300 transition text-[11px] cursor-pointer"
              >
                Chấp nhận tất cả
              </button>
              <button
                onClick={() => setCookieVisible(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-1.5 rounded-lg border border-slate-300 transition text-[11px] cursor-pointer"
              >
                Từ chối tất cả
              </button>
              <button
                onClick={() => setCookieVisible(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium px-4 py-1.5 rounded-lg border border-slate-200 transition text-[11px] cursor-pointer"
              >
                Thiết lập nâng cao
              </button>
              <button
                onClick={() => setCookieVisible(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}


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
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 fill-emerald-400 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold">Watch how VisionPay unifies in-person POS & global e-commerce</h4>
                <p className="text-xs text-slate-400">
                  Hear firsthand from merchant founders who switched to VisionPay for $0 software fees, same-day settlement, and enterprise reliability.
                </p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    handleContact();
                  }}
                  className="bg-[#ff3b47] text-white font-bold px-6 py-2 rounded-full text-xs"
                >
                  Schedule a Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
