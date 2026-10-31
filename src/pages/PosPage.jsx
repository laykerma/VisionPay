import React, { useState, useId } from 'react';
import { 
  Store, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Calculator, 
  TrendingUp, 
  Zap, 
  ChevronDown, 
  Check, 
  Utensils, 
  Coffee, 
  ShoppingBag, 
  Beer, 
  Truck, 
  Layers, 
  Wifi, 
  Printer, 
  Monitor, 
  Smartphone, 
  Sliders, 
  Star,
  DollarSign,
  AlertCircle
} from 'lucide-react';

export default function PosPage({ onNavigateHome }) {
  // Calculator State
  const [currentFee, setCurrentFee] = useState(129);
  const [tillsCount, setTillsCount] = useState(2);
  const [monthlyTurnover, setMonthlyTurnover] = useState(45000);

  const annualSoftwareSaved = currentFee * tillsCount * 12;
  const threeYearSavings = annualSoftwareSaved * 3;

  // Active Venue Tab
  const [activeVenue, setActiveVenue] = useState('cafe');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form Submission State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    venueName: '',
    phone: '',
    email: '',
    venueType: 'Cafe / Bakery',
    monthlyTurnover: '$30,000 - $60,000',
    terminalsCount: '2 Tills',
    notes: '',
  });

  // Unique Form Field IDs
  const fullNameId = useId();
  const venueNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const venueTypeId = useId();
  const turnoverId = useId();
  const terminalsId = useId();
  const notesId = useId();

  // Interactive Live POS Terminal Mockup State
  const [selectedModifiers, setSelectedModifiers] = useState({
    milk: 'Oat Milk (+ $0.70)',
    size: 'Large (+ $0.80)',
    shot: 'Extra Shot (+ $0.50)',
  });
  const [paidState, setPaidState] = useState(false);

  const baseCoffeePrice = 5.00;
  const modifierPrice = 0.70 + 0.80 + 0.50;
  const toastiePrice = 13.50;
  const currentTotal = (baseCoffeePrice + modifierPrice + toastiePrice).toFixed(2);

  const handlePaySimulation = () => {
    setPaidState(true);
    setTimeout(() => {
      setPaidState(false);
    }, 3500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Venue Data
  const venueProfiles = {
    cafe: {
      name: 'Cafes & Bakeries',
      icon: Coffee,
      headline: 'Lightning-fast counter ordering with custom milk & bean routing.',
      description: 'Streamline morning rush with 1-tap milk mods, cup sizes, and dietary notes. Orders print instantly to the barista docket printer while card payments settle to your bank today.',
      metrics: ['Avg 12s transaction speed', '1-touch coffee matrix', 'Automated bump-screen'],
      hardware: '15.6" Dual-Screen Counter POS + PAX A920 EFTPOS + Barista Thermal Printer',
      keyFeatures: [
        'Custom milk matrices (Oat, Almond, Soy, Lactose-free, Extra hot)',
        'Barista ticket routing with sequence queue numbering',
        'Customer-facing display for itemized totals & contactless tip prompts',
        'Customer loyalty points & digital coffee cards built-in',
      ]
    },
    restaurant: {
      name: 'Restaurants & Bistros',
      icon: Utensils,
      headline: 'Interactive visual floor plans, course firing & pay-at-table.',
      description: 'Design your custom dining room layout in minutes. Track table status, fire appetizers and mains to kitchen screens independently, and split bills by seat or item with zero hassle.',
      metrics: ['Table turnaround +18%', 'Seamless course pacing', 'Split-bill by seat'],
      hardware: 'Master Server POS Terminal + Kitchen Display (KDS) + Mobile Waiter Tablets',
      keyFeatures: [
        'Visual floor plan with real-time occupied, reserved, and bill-printed status',
        'Course hold & fire control (Entrée, Mains, Dessert, Drinks)',
        'Pay-at-table with PAX A920 mobile terminal (itemized tip prompts)',
        'Multi-kitchen docket routing (Kitchen, Grill, Cold Larder, Bar)',
      ]
    },
    takeaway: {
      name: 'Takeaway & QSR',
      icon: ShoppingBag,
      headline: 'High-volume throughput with automated kitchen dockets & SMS alerts.',
      description: 'Built for speed and order accuracy. Combine in-person counter orders, phone orders, and web pickups into one live kitchen queue with automatic customer SMS pickup notifications.',
      metrics: ['Queue clearance -40%', 'Automated SMS ready alerts', 'Combo meal upselling'],
      hardware: 'High-Speed Touch POS + Integrated PAX A920 + Kitchen Display Screen (KDS)',
      keyFeatures: [
        'Dynamic combo meals and modifier prompts to increase average order value',
        'Order ready display screen and automated SMS notification to customers',
        'Caller ID integration for repeat customer address and order history',
        'End-of-day cash reconciliation with blind float balancing',
      ]
    },
    foodtruck: {
      name: 'Food Trucks & Pop-Ups',
      icon: Truck,
      headline: 'Compact, 100% portable POS with 4G SIM & battery operation.',
      description: 'Take your venue anywhere. Operate all day at weekend markets, festivals, and roadside spots with battery-powered Android hardware, built-in 4G SIM fallback, and offline clearance.',
      metrics: ['All-day battery backup', 'Built-in 4G SIM connectivity', 'Zero cabling required'],
      hardware: 'PAX A920 Smart POS Terminal with built-in receipt printer + 4G SIM',
      keyFeatures: [
        'Ultra-compact all-in-one terminal fits in your palm or apron',
        'Runs standalone on 4G SIM with no external Wi-Fi router needed',
        'Offline payment processing when festival mobile networks congest',
        'Rapid menu switching between morning, event, and catering menus',
      ]
    },
    pub: {
      name: 'Pubs & Bars',
      icon: Beer,
      headline: 'Rapid bar tabs, speed-screens & instant pre-authorizations.',
      description: 'Crush the Friday night bar rush. Open secure bar tabs with a quick card tap, transfer tabs across bartending stations, and activate automated surcharge rules on public holidays.',
      metrics: ['Sub-second tab opening', 'Happy hour auto-schedule', 'Zero lost tabs'],
      hardware: 'Spill-Resistant Touch Terminals + Mobile PAX EFTPOS + Bar Prep Printers',
      keyFeatures: [
        'Fast tab management with EMV card pre-authorizations (zero walkouts)',
        'Scheduled Happy Hour and weekend surcharge pricing automations',
        'Keg and spirit inventory tracking with automatic pour variances',
        'Spill-resistant IP65 certified commercial hardware',
      ]
    },
    retail: {
      name: 'Retail Stores',
      icon: Store,
      headline: 'Integrated barcode scanning, multi-location inventory & Xero sync.',
      description: 'Power your boutique, bottle shop, or specialty store. Scan barcodes effortlessly, manage variants (size/color), track supplier purchase orders, and sync sales directly to Xero.',
      metrics: ['Instant barcode lookup', 'Matrix inventory tracking', 'Automatic Xero sync'],
      hardware: '15.6" Touch Register + 2D Bluetooth Barcode Scanner + PAX EFTPOS',
      keyFeatures: [
        'Variant inventory matrix (Size, Color, Brand, Style)',
        'Integrated 1D/2D wireless handheld barcode scanning',
        'Low-stock threshold alerts and 1-click supplier purchase orders',
        'Customer VIP accounts with store credit and gift card redemption',
      ]
    }
  };

  const currentProfile = venueProfiles[activeVenue];
  const VenueIcon = currentProfile.icon;

  const faqs = [
    {
      q: 'Is VisionPay POS software really $0 per month?',
      a: 'Yes, 100% guaranteed. Unlike traditional POS providers (like Lightspeed, Square, or Toast) who charge $69 to $250+ per month per register for software licenses, VisionPay POS software is completely free with $0 monthly recurring fees. We earn a small, transparent margin on your card transactions only. If your venue is closed for renovations or holiday breaks, you pay $0.'
    },
    {
      q: 'When do our daily sales land in our bank account?',
      a: 'Today’s takings land in your bank account today — 7 days a week, 365 days a year. Card transactions processed up to 5:00 PM are settled to any Australian bank by 6:00 PM the exact same day. This includes Saturdays, Sundays, and public holidays, solving weekend cashflow bottlenecks for hospitality.'
    },
    {
      q: 'Can you migrate our existing menu and inventory for us?',
      a: 'Yes! Menu setup and data entry are completely free. Once you get in touch, simply email us your PDF menu, photos of your chalkboard, or export your old POS CSV. Our Sydney-based POS specialists will build, categorize, price, and test your digital menu with all modifier matrices before your hardware ships.'
    },
    {
      q: 'What hardware do I need to get started?',
      a: 'We provide modular, plug-and-play commercial hardware packages tailored to your venue: premium 15.6" commercial capacitive dual-screen terminals, Android mobile tablets, PAX A920 smart EFTPOS, high-speed thermal kitchen docket printers, Kitchen Display Screens (KDS), and heavy-duty cash drawers. You can also run our POS app on your existing compatible Android or iOS tablets.'
    },
    {
      q: 'What happens if our venue internet or NBN drops out?',
      a: 'You never miss a sale. VisionPay POS features automatic offline mode. If your NBN goes down, counter orders continue to route locally across your venue network. Furthermore, our PAX A920 terminals include a complimentary 4G multi-network SIM card that instantly takes over processing payments without interrupting service.'
    }
  ];

  return (
    <div className="bg-white text-brand-dark">
      
      {/* 1. Specialized POS Announcement Strip */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium">
            <span className="inline-flex items-center gap-1 bg-brand-primary text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              AU Hospitality Deal
            </span>
            <span className="text-slate-300">
              <strong className="text-white">$0 monthly software fees</strong> · Same-day settlement 7 days a week · Free menu setup included.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a href="tel:0283199500" className="flex items-center gap-1.5 text-blue-300 hover:text-white font-semibold transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call 02 8319 9500</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Local 7-Day Tech Support
            </span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section (Above the fold) */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-brand-border">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-primary-light border border-brand-primary-border px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
                  POS + EFTPOS In One System
                </span>
                <span className="bg-brand-primary text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded">
                  $0 SOFTWARE
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.08]">
                The POS with <br />
                <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent">
                  $0 monthly software fees
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl">
                An all-in-one point of sale for cafes, restaurants, takeaway, food trucks, pubs and retail. Low payment fees, free menu setup, and today's takings in your bank by 6 PM, 7 days a week.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#pos-quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/35 transition-all text-base text-center group cursor-pointer"
                >
                  <span>Get My Free POS Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:0283199500"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-navy font-bold px-6 py-4 rounded-xl border border-slate-300 shadow-xs hover:border-brand-primary transition-all text-base text-center cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call 02 8319 9500</span>
                </a>
              </div>

              {/* Bullet Value Strip (5 key pillars) */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Why Australian Venues Are Switching to VisionPay POS:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>$0 monthly software fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Same-day settlement (7 days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Free menu setup included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Zero lock-in contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Local Australian 7-day support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Plug & Play hardware delivery</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive 3D Dual-Screen Counter POS Simulation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-brand-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

                {/* Main POS Device Mockup Container */}
                <div className="relative bg-brand-navy rounded-2xl shadow-2xl border border-slate-700 p-4 sm:p-5 text-white">
                  
                  {/* Top Bar with Live Cafe Status */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold text-slate-200">The Laneway Espresso · Till 01</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] font-mono text-blue-300 border border-slate-700">Table 04</span>
                      <span className="text-[11px] font-bold text-emerald-400">Online</span>
                    </div>
                  </div>

                  {/* Dual Screen Display: Order Docket + Modifiers Matrix */}
                  <div className="grid grid-cols-12 gap-3 bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                    
                    {/* Left: Active Live Ticket (7 cols) */}
                    <div className="col-span-7 bg-slate-950 rounded-lg p-3 border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Ticket #142</span>
                          <span className="text-[10px] text-slate-500">Dine In</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          {/* Item 1 */}
                          <div className="border-b border-slate-800/60 pb-1.5">
                            <div className="flex justify-between font-bold text-slate-200">
                              <span>1x Flat White</span>
                              <span>${(baseCoffeePrice + modifierPrice).toFixed(2)}</span>
                            </div>
                            <div className="text-[10px] text-blue-400 pl-2 space-y-0.5 mt-0.5">
                              <div>• {selectedModifiers.milk}</div>
                              <div>• {selectedModifiers.size}</div>
                              <div>• {selectedModifiers.shot}</div>
                            </div>
                          </div>

                          {/* Item 2 */}
                          <div className="flex justify-between font-bold text-slate-200">
                            <div>
                              <span>1x Truffle Melt Toastie</span>
                              <div className="text-[10px] text-slate-400 font-normal pl-2">• Sourdough, Aged Cheddar</div>
                            </div>
                            <span>${toastiePrice.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Ticket Total & Fast Pay Simulation */}
                      <div className="pt-3 border-t border-slate-800 mt-2">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Subtotal</span>
                          <span>${currentTotal}</span>
                        </div>
                        <div className="flex justify-between text-sm font-extrabold text-white mb-2">
                          <span>Total AUD</span>
                          <span className="text-emerald-400">${currentTotal}</span>
                        </div>

                        {paidState ? (
                          <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 py-1.5 px-2 rounded-lg text-center text-xs font-bold flex items-center justify-center gap-1.5 animate-fadeIn">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>APPROVED · Settle 6 PM</span>
                          </div>
                        ) : (
                          <button
                            onClick={handlePaySimulation}
                            className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold py-2 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Charge ${currentTotal} via PAX</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right: Quick Modifier Matrix & PAX Hardware Preview (5 cols) */}
                    <div className="col-span-5 flex flex-col justify-between space-y-2">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1-Touch Modifiers</span>
                        <div className="grid grid-cols-1 gap-1">
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, milk: prev.milk.includes('Oat') ? 'Almond Milk (+ $0.70)' : 'Oat Milk (+ $0.70)' }))}
                            className="text-[10px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 py-1 px-1.5 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            🥛 {selectedModifiers.milk.split(' ')[0]} Milk
                          </button>
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, size: prev.size.includes('Large') ? 'Regular (+ $0.00)' : 'Large (+ $0.80)' }))}
                            className="text-[10px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 py-1 px-1.5 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            ☕ {selectedModifiers.size.split(' ')[0]} Cup
                          </button>
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, shot: prev.shot.includes('Extra') ? 'Decaf (+ $0.50)' : 'Extra Shot (+ $0.50)' }))}
                            className="text-[10px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 py-1 px-1.5 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            ⚡ {selectedModifiers.shot.split(' ')[0]}
                          </button>
                        </div>
                      </div>

                      {/* Integrated PAX EFTPOS Mockup Dock */}
                      <div className="bg-slate-950 p-2.5 rounded-lg border border-blue-900/40 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-blue-400 mb-1">
                          <Zap className="w-3 h-3 text-blue-400" />
                          <span>PAX A920 DOCKED</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800 text-[10px] text-slate-300">
                          <div className="text-[9px] text-slate-500">Contactless NFC</div>
                          <div className="font-mono font-bold text-white mt-0.5">TAP TO PAY</div>
                          <div className="flex justify-center gap-1 mt-1 text-[8px] text-slate-400">
                            <span>Apple Pay</span>
                            <span>•</span>
                            <span>Google</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* KDS (Kitchen Display System) Live Status Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3.5 h-3.5 text-purple-400" />
                      <span>KDS Kitchen Stream:</span>
                      <span className="text-slate-200 font-semibold">3 orders prepping</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px]">Zero Manual Keying</span>
                  </div>

                </div>

                {/* Floating Value Pill */}
                <div className="absolute -bottom-4 -left-4 bg-white text-brand-navy p-3 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    $0
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Software Fee Forever</div>
                    <div className="text-[11px] text-slate-500">Save $1,500+ every year per till</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Trust Proof Band */}
      <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-bold text-slate-200">
                Powered by ElitePOS technology · Built-in EFTPOS · Works with any Australian bank
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="hover:text-white transition-colors">Commonwealth Bank</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">NAB</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">ANZ</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Westpac</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Macquarie</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Bendigo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "The Offer" - High-Impact Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              The VisionPay Hospitality Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Stop paying for software. <br />
              <span className="text-brand-primary">Start getting paid faster.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Traditional POS providers bleed Aussie venues with recurring subscription licenses and delayed settlements. Here is how VisionPay compares:
            </p>
          </div>

          {/* Clean 2-Column Comparison Table */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-sm sm:text-base font-bold">
              <div className="col-span-5 sm:col-span-4 text-slate-300">Feature Comparison</div>
              <div className="col-span-3 sm:col-span-4 text-center text-slate-400">Typical POS Provider</div>
              <div className="col-span-4 sm:col-span-4 text-center text-emerald-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span>VisionPay POS</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {/* Row 1: Monthly Fee */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Monthly software fee</div>
                <div className="col-span-3 sm:col-span-4 text-center text-rose-600 font-semibold flex items-center justify-center gap-1">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>$69 – $300+/mo</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-center text-emerald-700 font-extrabold bg-emerald-50/80 py-1.5 rounded-lg border border-emerald-200">
                  $0 / month ($0 forever)
                </div>
              </div>

              {/* Row 2: Settlement Speed */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Daily sales settlement</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  1–3 business days (holds on weekends)
                </div>
                <div className="col-span-4 sm:col-span-4 text-center text-brand-navy font-bold bg-blue-50/80 py-1.5 rounded-lg border border-blue-200">
                  Same day by 6 PM, 7 days
                </div>
              </div>

              {/* Row 3: Menu Setup */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Menu & inventory setup</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  Paid onboarding ($300–$800) or DIY
                </div>
                <div className="col-span-4 sm:col-span-4 text-center text-emerald-700 font-bold bg-emerald-50/80 py-1.5 rounded-lg border border-emerald-200">
                  100% Free, done-for-you
                </div>
              </div>

              {/* Row 4: Contracts */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Contract commitment</div>
                <div className="col-span-3 sm:col-span-4 text-center text-rose-600 font-medium">
                  24–48 month lock-in
                </div>
                <div className="col-span-4 sm:col-span-4 text-center text-slate-900 font-bold bg-slate-50 py-1.5 rounded-lg">
                  No lock-in contracts
                </div>
              </div>

              {/* Row 5: Local Support */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Support availability</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  Offshore tickets or weekday 9-5
                </div>
                <div className="col-span-4 sm:col-span-4 text-center text-brand-primary font-bold bg-blue-50/80 py-1.5 rounded-lg border border-blue-200">
                  Local Australian, 7 days a week
                </div>
              </div>
            </div>

            {/* Subtext Banner */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-xs text-slate-600">
              <span className="font-bold text-slate-900">Transparent business model: </span> 
              No monthly software fee. We earn a small, competitive margin on card processing only. If you don't trade, you don't pay.
            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive ROI / Fee Calculator */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                  How much are you paying for POS software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Drag the sliders below to estimate your annual recurring software savings with VisionPay POS.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
              
              {/* Sliders Column */}
              <div className="space-y-6">
                {/* Slider 1: Current POS Monthly Fee */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
                    <label htmlFor="current-fee-slider">Current POS Software Fee (per till/mo):</label>
                    <span className="text-brand-primary text-base font-extrabold">${currentFee}/mo</span>
                  </div>
                  <input
                    id="current-fee-slider"
                    type="range"
                    min="49"
                    max="299"
                    step="10"
                    value={currentFee}
                    onChange={(e) => setCurrentFee(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$49/mo</span>
                    <span>$149/mo</span>
                    <span>$299/mo</span>
                  </div>
                </div>

                {/* Slider 2: Number of Tills */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
                    <label htmlFor="tills-slider">Number of Registers / Tills:</label>
                    <span className="text-brand-primary text-base font-extrabold">{tillsCount} {tillsCount > 1 ? 'Tills' : 'Till'}</span>
                  </div>
                  <input
                    id="tills-slider"
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={tillsCount}
                    onChange={(e) => setTillsCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1 Till</span>
                    <span>3 Tills</span>
                    <span>6 Tills</span>
                  </div>
                </div>

                {/* Slider 3: Monthly Card Turnover */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
                    <label htmlFor="turnover-slider">Estimated Monthly Card Turnover:</label>
                    <span className="text-brand-navy text-base font-extrabold">${monthlyTurnover.toLocaleString()} /mo</span>
                  </div>
                  <input
                    id="turnover-slider"
                    type="range"
                    min="10000"
                    max="150000"
                    step="5000"
                    value={monthlyTurnover}
                    onChange={(e) => setMonthlyTurnover(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$10,000</span>
                    <span>$75,000</span>
                    <span>$150,000+</span>
                  </div>
                </div>
              </div>

              {/* Savings Results Callout Box */}
              <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-xl p-6 sm:p-7 border border-slate-700 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    Recurring Software Savings
                  </span>

                  <div className="mt-4">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">
                      ${annualSoftwareSaved.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">saved per year in software licenses</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="flex justify-between">
                      <span>3-Year Cumulative Savings:</span>
                      <strong className="text-white">${threeYearSavings.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>VisionPay Monthly Software Fee:</span>
                      <strong className="text-emerald-400">$0 / month</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Settlement Cycle:</span>
                      <strong className="text-blue-300">Same day by 6 PM (7 days)</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#pos-quote-form"
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free POS Setup →</span>
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-2">Zero lock-in · Free menu transfer</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. "One System from Order to Payment" (Feature Bento Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              End-to-End Hospitality Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              One system from order to payment.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Eliminate disconnected printers, fragmented EFTPOS and expensive software add-ons. Everything communicates seamlessly.
            </p>
          </div>

          {/* 6-Card Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Bento Card 1: Fast Counter POS */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Fast Counter POS</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Sub-second tap response designed for extreme peak rushes. 1-touch modifiers for milk types, sizing, dietary requirements, and custom notes.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Custom milk & coffee matrix templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Sub-second order clearing for queues</span>
                </li>
              </ul>
            </div>

            {/* Bento Card 2: Fully Integrated EFTPOS */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Fully Integrated EFTPOS</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Zero manual double-keying. The exact bill amount pushes straight to your PAX A920 terminal. Automatic Least-Cost Routing (LCR) and surcharge passing.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Eliminates costly cashier keying mistakes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Contactless Apple Pay, Google Pay & Tap-to-Pay</span>
                </li>
              </ul>
            </div>

            {/* Bento Card 3: Visual Floor Plan & Pay at Table */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Visual Floor Plan & Table Pay</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Design dining sections, terraces and bar zones. Real-time table status (seated, ordered, bill printed). Split checks evenly or by individual guest seat.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Real-time table status color codes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Itemized split bills & mobile table checkout</span>
                </li>
              </ul>
            </div>

            {/* Bento Card 4: Kitchen Display System (KDS) */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Kitchen Display System (KDS)</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Replace lost paper dockets with clean digital screens. Color-coded ticket timers, course pacing (hold & fire), and bump bar support.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Audio chime alerts for incoming orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Filter orders by Kitchen, Grill or Bar stations</span>
                </li>
              </ul>
            </div>

            {/* Bento Card 5: Self-Order Kiosks & QR Menus */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Self-Order Kiosks & QR Pay</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Let guests order from interactive standing kiosks or directly from table QR codes. Automated prompts increase average order size by 22%.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Smart automated upsells for drinks & sides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Reduces front-of-house wage costs during peak times</span>
                </li>
              </ul>
            </div>

            {/* Bento Card 6: Offline Reliability & 4G Backup */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Offline Reliability & 4G SIM</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Internet dropouts will never stop your service. The system switches seamlessly to offline local mode, while EFTPOS terminals fall back to 4G SIM.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Zero missed orders during NBN outages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dual 4G/Wi-Fi failover built into hardware</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 7. "Built for Your Venue" (Interactive Tabbed Showcase) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Industry Specific Workflows
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Built for how your venue operates.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Select your venue type below to see tailored hardware bundles, workflows, and speed enhancements:
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.entries(venueProfiles).map(([key, data]) => {
              const TabIcon = data.icon;
              const isActive = activeVenue === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveVenue(key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{data.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-brand-primary-light text-brand-primary px-3 py-1 rounded-lg text-xs font-bold">
                  <VenueIcon className="w-4 h-4" />
                  <span>{currentProfile.name} Configuration</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  {currentProfile.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentProfile.description}
                </p>

                {/* Key feature checklist */}
                <div className="space-y-2.5 pt-2">
                  {currentProfile.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {currentProfile.metrics.map((metric, mIdx) => (
                    <span key={mIdx} className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                      ✓ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Hardware Bundle Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-navy rounded-2xl p-6 sm:p-8 text-white border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                    Recommended Hardware Bundle
                  </span>
                  <h4 className="text-lg font-bold text-white mt-3">
                    {currentProfile.hardware}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Delivered fully pre-configured with your digital menu loaded and tested. Plug in power and start taking orders immediately.
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Software Subscription:</span>
                      <strong className="text-emerald-400 font-bold">$0 / month</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Menu Entry & Build:</span>
                      <strong className="text-blue-300 font-bold">100% Free</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Daily Settlement:</span>
                      <strong className="text-white font-bold">Today by 6 PM</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#pos-quote-form"
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request {currentProfile.name} Quote →</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. "Switch in Days with Zero Downtime" (3-Step Horizontal Timeline) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Hassle-Free Transition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Switch in days with zero downtime.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              We handle the entire digital migration so you can focus on serving your customers.
            </p>
          </div>

          {/* 3-Step Horizontal Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white font-black text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-primary/30">
                01
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Day 1</span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">Get Your Tailored Quote</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Tell us about your venue type, current register setup, and average turnover. We provide a custom hardware proposal with $0 software fee confirmation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ No obligation · Transparent card rates
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white font-black text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-primary/30">
                02
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Day 2</span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">Free Menu Build & Testing</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Send us your current PDF menu, chalkboard photos, or CSV export. Our Sydney team builds your complete modifier matrix, pricing tiers, and tax settings for free.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ Done-for-you · Zero manual data entry
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-6 shadow-md shadow-emerald-600/30">
                03
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Day 3</span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">Plug & Play Live Launch</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Hardware arrives configured and ready to trade. Connect to power and start processing orders immediately with local Australian 7-day phone support on standby.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ 2 business day courier delivery
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Frequently Asked Questions (Interactive Accordion) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Frequently asked questions.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted mt-2">
              Everything you need to know about VisionPay POS and our $0 software model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all"
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

      {/* 10. Closing Conversion Form */}
      <section id="pos-quote-form" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white rounded-3xl shadow-2xl p-8 sm:p-14 border border-slate-700 relative overflow-hidden">
            
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 bg-brand-primary/20 text-brand-primary-border px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-primary/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Specialist Hospitality Onboarding
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Keep more of every sale
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                $0 monthly software fees, same-day settlement and a menu built for you. Get a tailored quote in 1 business day.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-slate-800/80 border border-emerald-500/40 rounded-2xl p-8 text-center max-w-lg mx-auto animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName || 'mate'}</strong>. One of our Sydney POS specialists will review your venue details and contact you within 1 business day with your custom hardware proposal.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
                  Urgent question? Call our direct hospitality desk at <a href="tel:0283199500" className="text-blue-400 font-bold underline">02 8319 9500</a>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 text-left text-xs sm:text-sm">
                
                {/* Full Name */}
                <div>
                  <label htmlFor={fullNameId} className="block font-bold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    id={fullNameId}
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Liam Walker"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                {/* Business / Venue Name */}
                <div>
                  <label htmlFor={venueNameId} className="block font-bold text-slate-300 mb-1.5">Business / Venue Name *</label>
                  <input
                    id={venueNameId}
                    type="text"
                    required
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g. Surry Hills Cafe & Bar"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                {/* Mobile Phone */}
                <div>
                  <label htmlFor={phoneId} className="block font-bold text-slate-300 mb-1.5">Mobile Phone *</label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0412 345 678"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor={emailId} className="block font-bold text-slate-300 mb-1.5">Work Email *</label>
                  <input
                    id={emailId}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. liam@venue.com.au"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                {/* Venue Type */}
                <div>
                  <label htmlFor={venueTypeId} className="block font-bold text-slate-300 mb-1.5">Venue Type</label>
                  <select
                    id={venueTypeId}
                    value={formData.venueType}
                    onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Cafe / Bakery">Cafe / Bakery</option>
                    <option value="Restaurant / Bistro">Restaurant / Bistro</option>
                    <option value="Takeaway / Fast Casual">Takeaway / Fast Casual</option>
                    <option value="Pub / Bar / Club">Pub / Bar / Club</option>
                    <option value="Food Truck / Pop-up">Food Truck / Pop-up</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Other">Other Venue</option>
                  </select>
                </div>

                {/* Estimated Monthly Card Turnover */}
                <div>
                  <label htmlFor={turnoverId} className="block font-bold text-slate-300 mb-1.5">Estimated Card Turnover</label>
                  <select
                    id={turnoverId}
                    value={formData.monthlyTurnover}
                    onChange={(e) => setFormData({ ...formData, monthlyTurnover: e.target.value })}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Under $20,000">Under $20,000 / month</option>
                    <option value="$20,000 - $50,000">$20,000 - $50,000 / month</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 / month</option>
                    <option value="$100,000 - $250,000">$100,000 - $250,000 / month</option>
                    <option value="$250,000+">$250,000+ / month (Enterprise)</option>
                  </select>
                </div>

                {/* Pre-Selected Options Checklist */}
                <div className="sm:col-span-2 bg-slate-800/50 p-4 rounded-xl border border-slate-700/80">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Package Inclusions Requested:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-brand-primary rounded" />
                      <span>VisionPay POS ($0/mo)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-brand-primary rounded" />
                      <span>PAX A920 EFTPOS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-brand-primary rounded" />
                      <span>Free Menu Build Setup</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Free POS Quote & Menu Review</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-4">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      No obligation
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Zero lock-in contract
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Australian support 7 days a week
                    </span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
