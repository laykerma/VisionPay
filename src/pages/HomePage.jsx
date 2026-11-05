import React, { useState, useEffect, useId } from 'react';
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
  ChevronLeft,
  Play,
  Volume2,
  Search,
  CheckCircle,
  MousePointer,
  Settings
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  // 1. FAQ Accordion State (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  // 2. Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // 3. Who We Serve Carousel State
  const [activeServeSlide, setActiveServeSlide] = useState(0);

  // 4. Hero Interactive Product Card State (Basket count simulation)
  const [basketCount, setBasketCount] = useState(0);
  const [addedItemToast, setAddedItemToast] = useState(null);

  // 4b. Hero Phone Staggered Animation Sequence ("hiệu ứng tin nhắn hiện dần lên")
  // Step 0: Initial Screen
  // Step 1: Voice message appears (0.5s)
  // Step 2: AI Assistant bubble appears (1.7s)
  // Step 3: Product card 1 slides in from left (2.9s)
  // Step 4: Product card 2 slides in (4.1s)
  // Step 5: "Add to basket" triggered / checkmark (5.3s)
  const [animStep, setAnimStep] = useState(1);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    let t1, t2, t3, t4, t5, tLoop;

    setAnimStep(0);
    t1 = setTimeout(() => setAnimStep(1), 500);
    t2 = setTimeout(() => setAnimStep(2), 1700);
    t3 = setTimeout(() => setAnimStep(3), 2900);
    t4 = setTimeout(() => setAnimStep(4), 4100);
    t5 = setTimeout(() => setAnimStep(5), 5300);

    tLoop = setTimeout(() => {
      setReplayKey(prev => prev + 1);
    }, 11500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(tLoop);
    };
  }, [replayKey]);

  const handleManualReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  // 5. Inline Lead Capture Form State
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

  const handleAddToBasket = (itemName) => {
    setBasketCount(prev => prev + 1);
    setAddedItemToast(itemName);
    setTimeout(() => {
      setAddedItemToast(null);
    }, 2400);
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
          SECTION 1: HERO SECTION (Exact Layout from Screenshot 1)
          ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Massive Authoritative Typography & Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="tracking-wide uppercase text-[11px] text-slate-700">
                  AUSTRALIAN PAYMENTS, POS AND GIFT CARDS
                </span>
              </div>

              {/* H1 Headline (Huge, Worldpay Style Tight Letter Spacing) */}
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black text-[#0B132B] leading-[1.02] tracking-tight">
                Get paid today. <br />
                <span className="text-brand-primary">
                  Pay less to get paid.
                </span>
              </h1>

              {/* Supporting Value Proposition Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
                Online payments, EFTPOS, POS and payment links from one Australian provider. Same-day settlement to any Australian bank, no monthly gateway fees and no lock-in contracts.
              </p>

              {/* Action Button & Microcopy */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleQuoteClick}
                    className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold px-8 py-4 rounded-full text-base transition-all inline-flex items-center gap-2 shadow-sm hover:shadow cursor-pointer group"
                  >
                    <span>Talk to an expert</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="tel:0283199500"
                    className="text-slate-800 hover:text-brand-primary font-bold text-sm px-4 py-2 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span>02 8319 9500</span>
                  </a>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Quote in 1 business day · Terminals delivered within 2 business days of approval.
                </p>
              </div>

            </div>

            {/* Right Column: Lavender Rounded Card with Phone & Conversational Shopping (Matching Worldpay Photo) */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Soft Lavender / Lilac Outer Rounded Container Card */}
                <div className="bg-[#ede9fe] rounded-[44px] p-6 sm:p-10 flex flex-col items-center justify-end relative overflow-hidden min-h-[580px] sm:min-h-[640px] border border-purple-200/70 shadow-2xs">
                  
                  {/* Subtle ambient lighting */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

                  {/* Manual Replay Pill Button */}
                  <button
                    onClick={handleManualReplay}
                    className="absolute top-5 right-6 z-40 bg-white/85 hover:bg-white text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xs border border-purple-200/80 flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm"
                    title="Replay conversation animation"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>↺ Replay demo</span>
                  </button>

                  {/* Toast Notification when adding item */}
                  {addedItemToast && (
                    <div className="absolute top-5 left-6 z-40 bg-[#0B132B] text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2 animate-fadeIn border border-slate-700">
                      <span>✓ Added {addedItemToast} to cart!</span>
                      <span className="text-emerald-400 font-mono">Cart: {basketCount} items</span>
                    </div>
                  )}

                  {/* Hand & Smartphone Realistic Mockup Composition */}
                  <div className="relative w-full max-w-[340px] sm:max-w-[360px] flex items-end justify-center pt-6">
                    
                    {/* Realistic Hand Graphic Silhouette Behind Phone (Worldpay Style) */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[380px] h-[460px] pointer-events-none z-0">
                      <svg viewBox="0 0 400 480" className="w-full h-full drop-shadow-xl" fill="none">
                        <defs>
                          <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4a2c1d" />
                            <stop offset="60%" stopColor="#3d2316" />
                            <stop offset="100%" stopColor="#2c180f" />
                          </linearGradient>
                          <linearGradient id="thumbHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#5d3927" />
                            <stop offset="100%" stopColor="#3d2316" />
                          </linearGradient>
                        </defs>
                        
                        {/* Palm and Forearm extending from bottom */}
                        <path 
                          d="M120 480 C110 390, 130 330, 160 280 C180 250, 200 240, 220 250 C240 260, 260 300, 270 360 C280 410, 280 480, 280 480 Z" 
                          fill="url(#skinTone)" 
                        />
                        
                        {/* Left Thumb resting on left bezel of phone */}
                        <path 
                          d="M85 240 C85 220, 105 210, 120 220 C135 230, 140 255, 135 280 C130 305, 110 315, 95 305 C85 295, 85 260, 85 240 Z" 
                          fill="url(#thumbHighlight)" 
                        />
                        <path d="M92 230 C94 224, 102 222, 108 226 C110 232, 106 238, 100 238 C95 238, 91 234, 92 230 Z" fill="#6d4633" opacity="0.6" />

                        {/* Right Fingertips wrapping around the right edge */}
                        <path d="M325 210 C340 215, 345 230, 335 242 C325 250, 318 245, 315 235 Z" fill="url(#skinTone)" />
                        <path d="M328 260 C342 265, 345 280, 336 292 C326 300, 319 295, 316 285 Z" fill="url(#skinTone)" />
                        <path d="M320 310 C335 315, 338 330, 328 342 C318 350, 312 345, 309 335 Z" fill="url(#skinTone)" />
                      </svg>
                    </div>

                    {/* Smartphone Titanium Frame (Matching iPhone Pro in Worldpay Screenshot) */}
                    <div className="relative z-10 w-[295px] sm:w-[325px] h-[545px] sm:h-[585px] rounded-[52px] p-[3px] bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#64748b] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] flex flex-col">
                      
                      {/* Inner Black Bezel */}
                      <div className="relative w-full h-full bg-black rounded-[49px] p-2 flex flex-col">
                        
                        {/* Dynamic Island Pill Notch */}
                        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md border border-slate-900">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0a0d1a] border border-blue-900/60 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-blue-500/40" />
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                        </div>

                        {/* Inner Display Screen */}
                        <div className="relative w-full h-full rounded-[41px] bg-gradient-to-b from-[#13172e] via-[#0b0e24] to-[#060814] pt-9 pb-5 px-3 flex flex-col justify-between overflow-visible text-left select-none">
                          
                          {/* Specular glass reflection diagonal highlight */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] rounded-[41px] pointer-events-none z-10" />

                          {/* Message Flow Area with Staggered Animations */}
                          <div className="space-y-3 relative z-20 pt-2">
                            
                            {/* 1. Voice Prompt Pill (Anim Step 1+) */}
                            {animStep >= 1 ? (
                              <div className="animate-pop-in bg-white text-slate-900 rounded-full py-2 px-3.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[95%] mx-auto">
                                <div className="flex items-center gap-0.5 h-3.5 text-purple-600 shrink-0">
                                  <span className="w-0.5 bg-purple-600 rounded-full h-3 animate-[soundwave_0.8s_ease-in-out_infinite]" />
                                  <span className="w-0.5 bg-purple-600 rounded-full h-4 animate-[soundwave_0.6s_ease-in-out_infinite_0.15s]" />
                                  <span className="w-0.5 bg-purple-600 rounded-full h-2 animate-[soundwave_0.9s_ease-in-out_infinite_0.3s]" />
                                  <span className="w-0.5 bg-purple-600 rounded-full h-3.5 animate-[soundwave_0.7s_ease-in-out_infinite_0.1s]" />
                                </div>
                                <span className="text-[11px] sm:text-xs font-semibold text-slate-800 truncate">
                                  I need a dress for the weekend
                                </span>
                              </div>
                            ) : (
                              <div className="h-9 transition-all opacity-0" />
                            )}

                            {/* 2. AI Assistant Speech Bubble (Anim Step 2+) */}
                            {animStep >= 2 ? (
                              <div className="animate-pop-in ml-auto mr-0 max-w-[240px] bg-[#581c87] text-white rounded-2xl rounded-tr-xs p-3 shadow-md border border-purple-500/40 text-[11px] sm:text-xs leading-relaxed">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-xs shrink-0">✨</span>
                                  <span className="font-medium text-purple-100">
                                    I found these dresses in your size, shall I order one?
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="h-12 transition-all opacity-0" />
                            )}

                            {/* 3. Product Card 1 - Patterned Dress (Anim Step 3+) */}
                            {/* Breaks out of the left border with -left-6 sm:-left-9 just like Worldpay screenshot! */}
                            {animStep >= 3 ? (
                              <div className="animate-slide-left relative -left-6 sm:-left-9 w-[285px] sm:w-[325px] z-30 bg-white text-slate-900 rounded-2xl p-3 shadow-[0_20px_35px_-8px_rgba(0,0,0,0.35)] border border-slate-100 flex items-center justify-between gap-2.5 transition-transform hover:scale-102">
                                <div className="flex items-center gap-2.5">
                                  <img 
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=220&q=80" 
                                    alt="Patterned dress"
                                    className="w-12 h-14 rounded-xl object-cover shrink-0 shadow-xs" 
                                  />
                                  <div>
                                    <div className="font-bold text-xs text-slate-900">Patterned dress</div>
                                    <div className="text-[10px] text-slate-500 font-medium">New arrival</div>
                                    <div className="flex items-center gap-0.5 text-amber-500 text-[9px] mt-0.5">
                                      <span>★★★★★</span>
                                      <span className="text-slate-400 font-mono">(136)</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  <div className="text-xs font-black text-slate-900 mb-1">$138.00</div>
                                  <button 
                                    onClick={() => handleAddToBasket('Patterned Dress')}
                                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                                      animStep >= 5 
                                        ? 'bg-emerald-600 text-white shadow-xs' 
                                        : 'bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-xs'
                                    }`}
                                  >
                                    {animStep >= 5 ? '✓ Added' : 'Add to basket'}
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="h-16 transition-all opacity-0" />
                            )}

                            {/* 4. Product Card 2 - Flowing Dress (Anim Step 4+) */}
                            {animStep >= 4 ? (
                              <div className="animate-pop-in relative left-1 sm:left-3 w-[265px] sm:w-[300px] z-20 bg-white/95 backdrop-blur-sm text-slate-900 rounded-2xl p-2.5 shadow-[0_15px_30px_-8px_rgba(0,0,0,0.22)] border border-slate-100 flex items-center justify-between gap-2.5">
                                <div className="flex items-center gap-2.5">
                                  <img 
                                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=220&q=80" 
                                    alt="Flowing Dress"
                                    className="w-10 h-11 rounded-lg object-cover shrink-0" 
                                  />
                                  <div>
                                    <div className="font-bold text-xs text-slate-900 truncate">Flowing Dress</div>
                                    <div className="text-[10px] text-slate-500 font-medium">Reduced price</div>
                                    <div className="flex items-center gap-0.5 text-amber-500 text-[9px]">
                                      <span>★★★★★</span>
                                      <span className="text-slate-400 font-mono">(98)</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  <div className="text-xs font-black text-slate-900 mb-1">$124.00</div>
                                  <button 
                                    onClick={() => handleAddToBasket('Flowing Dress')}
                                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg transition cursor-pointer"
                                  >
                                    Add to basket
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="h-12 transition-all opacity-0" />
                            )}

                          </div>

                          {/* Phone Bottom Footer Branding */}
                          <div className="pt-2 border-t border-slate-800/80 text-center relative z-20">
                            <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-widest block font-medium">
                              Payments powered by
                            </span>
                            <span className="text-xs sm:text-sm font-black tracking-tight text-white inline-block mt-0.5">
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

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: CLIENT TRUST STRIP (Screenshot 2: amazon, UNITED, experian...)
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
          SECTION 3: DUAL GIANT REPORT CARDS (Exact Layout from Screenshot 2)
          ========================================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            
            {/* Card 1: The Agentic Commerce Report 2026 (Screenshot 2 Left) */}
            <div className="space-y-4">
              <div className="relative bg-[#0d1021] text-white rounded-[28px] p-8 sm:p-10 overflow-hidden min-h-[380px] shadow-sm flex flex-col justify-between group border border-slate-800">
                
                {/* Cosmic Sphere Graphic Background */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-600/10 blur-2xl pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-blue-400/20 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>VisionPay Insights</span>
                    <span className="bg-slate-800 text-blue-300 px-2 py-0.5 rounded text-[10px] border border-slate-700">2026 EDITION</span>
                  </div>

                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    A year on, agentic commerce has moved from question to reality.
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    The Agentic <br /> Commerce <br /> Report
                  </h3>
                </div>

                <div className="relative z-10 pt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-400 group-hover:underline">Explore full findings</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Subtext below card (Screenshot 2) */}
              <div className="px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Report</span>
                <h4 className="text-lg font-bold text-slate-900">The Agentic Commerce Report 2026</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  + consumers across 7 markets and 6 industries said about autonomous shopping and real-time checkout.
                </p>
              </div>
            </div>

            {/* Card 2: The Global Payments Report (Screenshot 2 Right) */}
            <div className="space-y-4">
              <div className="relative bg-[#121624] text-white rounded-[28px] p-8 sm:p-10 overflow-hidden min-h-[380px] shadow-sm flex flex-col justify-between group border border-slate-800">
                
                {/* Fast-Motion Blurred Background with Overlay */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-700">
                        🎧
                      </span>
                      <span>VisionPay Research</span>
                    </div>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mt-2">
                    GPR <br /> 2026
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                    <Search className="w-3 h-3 text-slate-400" />
                    <span>Commerce in constant motion</span>
                  </div>
                </div>

                {/* Floating Payment Schemes Container */}
                <div className="relative z-10 pt-4 space-y-2 max-w-xs">
                  <button className="w-full bg-[#ff3b47] hover:bg-[#e62635] text-white text-xs font-bold py-2 rounded-lg text-center shadow-xs">
                    Pay by card
                  </button>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold font-mono">
                    <span className="bg-slate-900 p-1.5 rounded border border-slate-800 text-white">VISA</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-slate-800 text-amber-400">Mastercard</span>
                  </div>
                </div>

              </div>

              {/* Subtext below card (Screenshot 2) */}
              <div className="px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Report</span>
                <h4 className="text-lg font-bold text-slate-900">The Global Payments Report</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Commerce is in constant motion. Consumers expect payments at the speed of thought — with same-day settlement to your bank.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: "WHO WE SERVE" CAROUSEL (Exact Layout from Screenshot 3)
          ========================================================================= */}
      <section className="py-20 bg-white border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Headline */}
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Who we serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
              We're everywhere. You can be too.
            </h2>
          </div>

          {/* Carousel Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Slide 1: Small and mid-sized businesses (Exact Visual from Screenshot 3) */}
            <div className="lg:col-span-8 bg-slate-50 rounded-[32px] p-8 sm:p-12 border border-slate-200/80 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Text */}
                <div className="md:col-span-6 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                    Small and mid-sized businesses
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    It's time to think big with payments technology that's secure, flexible, and designed with tomorrow in mind. Get a quote in minutes.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={handleQuoteClick}
                      className="bg-[#203AE7] hover:bg-[#172DC2] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-xs cursor-pointer"
                    >
                      Talk to sales
                    </button>

                    <button
                      onClick={() => handleNav('pos')}
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-primary flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Explore products <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual: Cyan Box with Merchant holding plant + Checkout Modal (Screenshot 3) */}
                <div className="md:col-span-6 grid grid-cols-2 gap-3 items-center">
                  
                  {/* Left inner card: Checkout modal (Screenshot 3) */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 text-center space-y-2.5">
                    <span className="text-[10px] font-bold tracking-tight text-slate-400 block uppercase">
                      visionpay
                    </span>
                    <div className="border-t border-b border-slate-100 py-2 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>Subtotal</span>
                        <span>25.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Total</span>
                        <span>25.00</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#ff3b47] text-white text-[10px] font-bold py-1.5 rounded-lg shadow-xs">
                      Pay by card
                    </button>
                    <button className="w-full bg-slate-900 text-white text-[10px] font-bold py-1.5 rounded-lg">
                       Pay
                    </button>
                    <button className="w-full bg-slate-100 text-slate-800 text-[10px] font-bold py-1.5 rounded-lg border border-slate-200">
                      G Pay
                    </button>
                  </div>

                  {/* Right inner photo: Smiling Florist Merchant holding potted plant (Screenshot 3) */}
                  <div className="relative rounded-2xl overflow-hidden h-full min-h-[220px] bg-[#38bdf8] flex flex-col justify-end">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" 
                      alt="Merchant holding plant"
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="relative z-10 bg-slate-900/80 backdrop-blur-sm text-white p-2.5 rounded-b-2xl text-[10px] font-bold flex items-center justify-between">
                      <span>✓ Approved 6 PM</span>
                      <span className="text-emerald-400">$25.00</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Slide 2: Enterprise (Right 4 Cols, Screenshot 3) */}
            <div className="lg:col-span-4 bg-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-slate-200/80 shadow-2xs">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                  Enterprise
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  When it comes to big business, we deliver massive scale, processing $2.3 trillion and powering some of the biggest brands.
                </p>

                <div className="pt-2">
                  <span className="text-3xl sm:text-4xl font-black text-brand-primary block">
                    $2.3 Trillion+
                  </span>
                  <span className="text-xs text-slate-500 block font-normal mt-0.5">
                    Annual processing capacity
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={handleQuoteClick}
                  className="bg-[#0B132B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Carousel Arrows and Progress Line (Screenshot 3 Bottom) */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-grow max-w-xs">
              <span className="w-24 h-1 bg-[#0B132B] rounded-full" />
              <span className="w-full h-1 bg-slate-200 rounded-full" />
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveServeSlide(0)}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActiveServeSlide(1)}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: "WHAT'S YOUR BIG DREAM?" (Exact Layout from Screenshot 4)
          ========================================================================= */}
      <section className="py-24 bg-[#f4f0fd] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
                What's your big <br /> dream?
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Wherever you're going, getting payments right can get you there faster. VisionPay helps you to boost your business, protect your revenue and make every transaction count.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleQuoteClick}
                  className="bg-[#203AE7] hover:bg-[#172DC2] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Start your journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Founder Video Card with "With an idea," Quote (Screenshot 4) */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-100 overflow-hidden">
                
                {/* Visual Frame */}
                <div 
                  className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] bg-slate-50 flex items-center justify-center group cursor-pointer border border-slate-100"
                  onClick={() => setVideoModalOpen(true)}
                >
                  {/* Photo of founder sitting cross-legged (Screenshot 4) */}
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" 
                    alt="Founder sharing her dream"
                    className="absolute right-4 bottom-0 w-60 sm:w-72 h-auto object-contain z-10" 
                  />

                  {/* Bold Typography on Wall: "With an idea," (Screenshot 4) */}
                  <div className="absolute top-12 left-8 z-0 text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight max-w-[220px]">
                    With an idea,
                  </div>

                  {/* Red/Coral Geometric Shapes (Screenshot 4) */}
                  <div className="absolute bottom-0 right-12 w-28 h-28 bg-[#ff3b47] rounded-2xl rotate-12 -z-0 opacity-90" />
                  <div className="absolute bottom-0 right-48 w-24 h-24 bg-[#ff3b47] rounded-xl -rotate-6 -z-0 opacity-80" />

                  {/* Large Circular Video Play Button (Screenshot 4) */}
                  <div className="relative z-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-slate-900/80 text-white shadow-2xl flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-[#203AE7] transition-all">
                    <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-white text-white" />
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: CUSTOMER STORIES (Exact Layout from Screenshot 5)
          ========================================================================= */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Customer stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] tracking-tight">
                See how our customers have put VisionPay <br className="hidden sm:inline" />
                solutions into action
              </h2>
            </div>

            <button 
              onClick={handleQuoteClick}
              className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shrink-0 shadow-xs cursor-pointer"
            >
              See all customer stories
            </button>
          </div>

          {/* 3 Real Customer Story Cards (Screenshot 5: Experian, Nu Skin, Reynolds & Reynolds) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Experian (Screenshot 5 Left) */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="Experian case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    experian
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                  <h3 className="text-lg font-bold text-[#0B132B] mt-1.5 mb-2">
                    Experian
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Removing payments complexity helps Experian scale cross-platform authorizations and streamline reconciliation.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Nu Skin (Screenshot 5 Center) */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Nu Skin case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    NU SKIN
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                  <h3 className="text-lg font-bold text-[#0B132B] mt-1.5 mb-2">
                    Nu Skin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    A beautiful solution to global payments challenges across retail and direct selling networks.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Reynolds and Reynolds (Screenshot 5 Right) */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" 
                    alt="Reynolds and Reynolds dealership software"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-900 shadow-xs">
                    Reynolds & Reynolds
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Software platforms, Transportation</span>
                  <h3 className="text-lg font-bold text-[#0B132B] mt-1.5 mb-2">
                    Reynolds and Reynolds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Leading provider of automobile dealership software turns to VisionPay for integrated in-store payments.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: INSIGHTS ("OUR EXPERTISE IS YOUR EDGE" - Worldpay Screenshot)
          ========================================================================= */}
      <section id="insights-section" className="py-20 bg-white border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Insights
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
                Our expertise is your edge
              </h2>
              <p className="text-base text-slate-600 mt-2 font-normal">
                We know payments. Check out our latest articles, white papers and market reports.
              </p>
            </div>

            <button 
              onClick={handleQuoteClick}
              className="bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shrink-0 shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>See all insight articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Real Insight Cards matching user screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: AI and payment acceptance */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                {/* Visual Graphic Header: Flowchart diagram with Pay button */}
                <div className="h-56 bg-gradient-to-br from-[#ff5a60] to-[#e63946] p-4 relative overflow-hidden flex flex-col items-center justify-center select-none">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20" />
                  
                  {/* Flow Diagram */}
                  <div className="relative z-10 w-full max-w-[260px] space-y-2">
                    {/* Top Pay Button with cursor */}
                    <div className="flex items-center justify-center relative">
                      <div className="bg-black text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                        <span>Pay</span>
                      </div>
                      <MousePointer className="w-4 h-4 text-white fill-white absolute -bottom-2 right-20 drop-shadow animate-pulse" />
                    </div>

                    {/* Decision Branch */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[9px] font-bold">
                      {/* Left: Optimized */}
                      <div className="bg-white text-slate-900 rounded-lg p-2 shadow-xs border border-white/40 space-y-1">
                        <div className="flex items-center gap-1 text-blue-600">
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>Optimized</span>
                        </div>
                        <div className="grid grid-cols-3 gap-0.5 pt-1 text-[8px] text-slate-500">
                          <span className="bg-slate-100 p-0.5 rounded text-center">Buyer</span>
                          <span className="bg-slate-100 p-0.5 rounded text-center">Network</span>
                          <span className="bg-slate-100 p-0.5 rounded text-center">Risk</span>
                        </div>
                      </div>

                      {/* Right: Not optimized */}
                      <div className="bg-white/80 text-slate-700 rounded-lg p-2 shadow-xs space-y-1 opacity-75">
                        <div className="text-red-500 font-bold">Not optimized</div>
                        <div className="text-[8px] text-slate-500">In processing...</div>
                      </div>
                    </div>

                    {/* Bottom Result: Payment Approved */}
                    <div className="bg-emerald-500 text-white text-[10px] font-bold py-1 px-3 rounded-full flex items-center justify-center gap-1 shadow-xs max-w-[170px] mx-auto">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Payment approved</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-brand-primary transition-colors leading-snug">
                    AI and payment acceptance: more approvals, fewer false declines
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                    Shift from static rules to real-time decisions that drive better outcomes.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: What doesn't change when you build on VisionPay APIs */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                {/* Visual Graphic Header: Massive Bridge Piers Photo with Gear Icon */}
                <div className="h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80" 
                    alt="Infrastructure Bridge Piers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  {/* Black Gear Badge Overlay on the Right (as in screenshot) */}
                  <div className="absolute top-8 right-8 w-11 h-11 bg-black/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/20 shadow-lg">
                    <Settings className="w-5 h-5 text-white animate-spin-slow" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-brand-primary transition-colors leading-snug">
                    What doesn't change when you build on VisionPay APIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                    When payment infrastructure changes, developers bear the cost of uncertainty. Here's why building on VisionPay remains stable — and what that means in practice.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Agentic commerce: what it means for your business */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                {/* Visual Graphic Header: Agentic Commerce Flow Nodes Diagram */}
                <div className="h-56 bg-[#ede9fe] p-4 relative overflow-hidden flex flex-col items-center justify-center select-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-300/40 rounded-full blur-2xl pointer-events-none" />

                  {/* Flow Diagram */}
                  <div className="relative z-10 w-full max-w-[260px] space-y-2">
                    {/* Top Row: Search input + BUY tag */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="bg-white rounded-lg px-2.5 py-1 text-[9px] font-semibold text-slate-700 shadow-2xs border border-purple-200/60 flex items-center gap-1.5 flex-1">
                        <Search className="w-3 h-3 text-purple-600" />
                        <span className="truncate">Search for purchase</span>
                      </div>
                      <span className="bg-[#7c3aed] text-white text-[9px] font-black px-2 py-1 rounded-md shadow-2xs">
                        BUY
                      </span>
                    </div>

                    {/* Middle Row: AI Node & Token Authentication */}
                    <div className="bg-white/95 rounded-xl p-2.5 shadow-xs border border-purple-100 flex items-center justify-between text-[9px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-bold">
                          ✨
                        </span>
                        <span className="font-semibold text-slate-800">Agentic Checkout Node</span>
                      </div>
                      <Lock className="w-3 h-3 text-emerald-600" />
                    </div>

                    {/* Bottom Row: Green Completed Badge */}
                    <div className="flex items-center justify-center">
                      <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold py-1 px-3 rounded-full flex items-center gap-1 shadow-2xs">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Completed · $0 gateway fee</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-brand-primary transition-colors leading-snug">
                    Agentic commerce: what it means for your business
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                    Get a clear view of how AI-driven purchasing is changing checkout, fraud and liability, and what merchants should do now to prepare.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button 
                  onClick={handleQuoteClick}
                  className="text-xs font-bold text-slate-900 group-hover:text-brand-primary flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: SAME-DAY SETTLEMENT LEAD FEATURE BAND
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/90 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0B132B] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-5">
              
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

              <div className="pt-4">
                <a
                  href="#quote-section"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#172DC2] text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer"
                >
                  <span>Get Paid Same Day →</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: SOLUTIONS & PRODUCTS (6 Bento Cards, 1px Borders)
          ========================================================================= */}
      <section id="solutions-grid" className="py-20 bg-slate-50 border-b border-slate-200/90 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Complete Payment Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight mt-3">
              One provider. Every way your customers pay.
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Eliminate disconnected providers, multiple invoices and delayed payouts. Everything connects under one Australian roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Online Payments */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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

            {/* Card 3: VisionPay POS */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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

            {/* Card 6: Gift Cards */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
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
                  onClick={handleQuoteClick}
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
          SECTION 9: WHY AUSTRALIAN BUSINESSES SWITCH (5 Core Benefits)
          ========================================================================= */}
      <section id="why-switch" className="py-20 bg-white border-b border-slate-200/90 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Direct & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight mt-3">
              Built for Australian businesses that are tired of waiting to get paid
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Traditional banks hold weekend takings, charge monthly fees and lock you into long contracts. Here is why Australian venues and merchants choose VisionPay:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
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
                  className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-xs px-5 py-2.5 rounded-full transition shadow-xs cursor-pointer inline-flex items-center gap-1"
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
          SECTION 10: "NEED HELP?" WITH THE GLOSSY RED ROTARY PHONE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#dff3f9] rounded-[36px] p-8 sm:p-14 border border-cyan-100 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headline, Copy & Action */}
              <div className="md:col-span-7 space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
                  Need help?
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Get in touch with one of our Australian payment experts today.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleQuoteClick}
                    className="bg-brand-primary hover:bg-[#172DC2] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a 
                    href="tel:0283199500" 
                    className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-full border border-cyan-200 transition inline-flex items-center gap-2 shadow-2xs"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span>02 8319 9500</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Worldpay Glossy Red Rotary Telephone */}
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
          SECTION 11: FREQUENTLY ASKED QUESTIONS (Objection Removing)
          ========================================================================= */}
      <section id="faq-section" className="py-20 bg-white border-b border-slate-200/90 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Clear & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight mt-3">
              Frequently asked questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about switching your payments to VisionPay.
            </p>
          </div>

          <div className="space-y-3.5">
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
          SECTION 12: CLOSING INLINE LEAD FORM (#quote-section)
          ========================================================================= */}
      <section id="quote-section" className="py-20 bg-slate-50 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0B132B] text-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
            
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
                    className="w-full bg-brand-primary hover:bg-[#172DC2] text-white font-extrabold py-3.5 px-6 rounded-full shadow-md transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
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
              <button onClick={() => setVideoModalOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
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
                  className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-[#172DC2] transition cursor-pointer"
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
