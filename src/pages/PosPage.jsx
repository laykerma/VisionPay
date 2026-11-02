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
  Wifi, 
  Printer, 
  Monitor, 
  Smartphone, 
  Building2,
  BadgeCheck,
  CheckCircle
} from 'lucide-react';

export default function PosPage({ onNavigateHome }) {
  // 1. Calculator State
  const [currentFee, setCurrentFee] = useState(129);
  const [tillsCount, setTillsCount] = useState(2);
  const [monthlyTurnover, setMonthlyTurnover] = useState(45000);

  const annualSoftwareSaved = currentFee * tillsCount * 12;
  const threeYearSavings = annualSoftwareSaved * 3;

  // 2. Active Venue Tab
  const [activeVenue, setActiveVenue] = useState('cafe');

  // 3. FAQ Accordion State (default first open)
  const [openFaq, setOpenFaq] = useState(0);

  // 4. Form Submission State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    venueName: '',
    phone: '',
    email: '',
    venueType: 'Cafe / Bakery',
    monthlyTurnover: '$30,000 - $60,000',
    terminalsCount: '2 Tills',
    includeEftpos: true,
    includeMenuSetup: true,
    includePos: true,
  });

  // Unique Form Field IDs
  const fullNameId = useId();
  const venueNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const venueTypeId = useId();
  const turnoverId = useId();

  // 5. Interactive Live POS Terminal Mockup State
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
    }, 3800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Industry Profiles
  const venueProfiles = {
    cafe: {
      name: 'Cafes & Bakeries',
      icon: Coffee,
      headline: 'Lightning-fast counter ordering with custom milk & coffee matrix routing.',
      description: 'Crush the 7 AM to 10 AM coffee rush with 1-touch milk modifications, custom cup sizing, and automatic barista docket routing. Card payments settle to your bank account today.',
      metrics: ['12s average checkout speed', '1-touch coffee modifiers', 'Direct barista KDS stream'],
      hardware: '15.6" Dual-Screen Counter POS + PAX A920 EFTPOS + Barista Thermal Printer',
      keyFeatures: [
        'Custom milk matrices (Oat, Almond, Soy, Lactose-free, Decaf)',
        'Barista ticket routing with sequence order numbering',
        'Customer-facing display showing line totals & tip prompts',
        'Digital stamp loyalty cards & recurring customer balance',
      ],
      previewTag: 'Optimal for: Specialty coffee bars, high-volume cafes & bakeries'
    },
    restaurant: {
      name: 'Restaurants',
      icon: Utensils,
      headline: 'Visual dining room floor plans, multi-course pacing & pay-at-table.',
      description: 'Design your dining room layout with real-time table status. Hold and fire courses to separate kitchen stations independently, and split bills by seat or item with zero calculation errors.',
      metrics: ['+18% table turnover speed', 'Multi-course hold & fire', 'Itemized split check by seat'],
      hardware: 'Master Server POS Terminal + Kitchen Display (KDS) + Mobile Waiter Tablets',
      keyFeatures: [
        'Live floor plan showing seated, ordering, served, and bill-printed status',
        'Course pacing controls (Entrée, Mains, Dessert, Drinks)',
        'Pay-at-table with PAX A920 mobile terminal with smart tip percentages',
        'Multi-kitchen docket split routing (Larder, Grill, Kitchen, Bar)',
      ],
      previewTag: 'Optimal for: Full-service dining, bistros & fine dining'
    },
    takeaway: {
      name: 'Takeaway',
      icon: ShoppingBag,
      headline: 'High-throughput counter ordering with automated customer SMS pickup alerts.',
      description: 'Engineered for velocity and order precision. Combine front-counter orders, phone orders, and web pickups into one unified kitchen queue with automated customer ready SMS alerts.',
      metrics: ['-40% counter queue times', 'Automated pickup SMS', 'Combo meal upselling'],
      hardware: 'High-Speed Touch POS + Integrated PAX A920 + Kitchen Display Screen (KDS)',
      keyFeatures: [
        'Dynamic combo meals and modifier prompts to lift average basket size',
        'Customer-ready pickup display and automatic SMS dispatch',
        'Caller ID integration for repeat customer history and address lookup',
        'End-of-day blind cash float reconciliation and audit trail',
      ],
      previewTag: 'Optimal for: QSR, burger shops, pizzerias & noodle bars'
    },
    foodtruck: {
      name: 'Food Trucks',
      icon: Truck,
      headline: '100% portable, compact smart POS with battery & built-in 4G SIM.',
      description: 'Trade anywhere across Australia. Operate all day at weekend food markets, festivals, and pop-ups with battery-powered Android hardware, built-in 4G multi-network SIM, and offline clearance.',
      metrics: ['12-hour battery life', 'Built-in 4G SIM fallback', 'Zero external cabling'],
      hardware: 'PAX A920 Smart POS Terminal with built-in receipt printer + 4G SIM',
      keyFeatures: [
        'Ultra-compact all-in-one terminal fits in your palm or apron pocket',
        'Standalone 4G SIM operation with no external router or hotspot needed',
        'Offline payment processing when festival mobile networks congest',
        'Quick menu switching between morning, event, and weekend pricing',
      ],
      previewTag: 'Optimal for: Food trucks, pop-up bars & weekend market stalls'
    },
    pub: {
      name: 'Pubs & Bars',
      icon: Beer,
      headline: 'Rapid bar tabs, speed-screens & automated surcharge automations.',
      description: 'Power through Friday night bar service. Open pre-authorized bar tabs with a single card tap, transfer tabs across bartending stations, and schedule automated weekend/holiday surcharge rules.',
      metrics: ['Sub-second tab creation', 'Zero unpaid walkouts', 'Scheduled happy hour pricing'],
      hardware: 'Spill-Resistant Touch Terminals + Mobile PAX EFTPOS + Bar Prep Printers',
      keyFeatures: [
        'Instant tab opening with EMV card pre-authorizations (zero walkouts)',
        'Automated Happy Hour and Sunday/Public Holiday surcharge pricing',
        'Keg, bottle, and spirit inventory tracking with pour variances',
        'Spill-resistant IP65 commercial hardware built for busy bar rails',
      ],
      previewTag: 'Optimal for: Pubs, rooftop bars, breweries & nightlife venues'
    },
    retail: {
      name: 'Retail',
      icon: Store,
      headline: 'Integrated barcode scanning, variant matrices & automatic Xero accounting.',
      description: 'Equip your boutique, bottle shop, or specialty retail store. Scan 1D/2D barcodes effortlessly, manage size and color variants, track purchase orders, and sync sales directly into Xero.',
      metrics: ['Instant 2D barcode lookup', 'Matrix variant inventory', 'Automated Xero bank sync'],
      hardware: '15.6" Touch Register + 2D Wireless Barcode Scanner + PAX EFTPOS',
      keyFeatures: [
        'Variant inventory matrix (Size, Color, Brand, Style, SKU)',
        'Integrated wireless handheld 1D/2D barcode scanning',
        'Low-stock threshold alerts and 1-click supplier purchase orders',
        'Customer VIP member profiles, store credits, and gift card redemption',
      ],
      previewTag: 'Optimal for: Boutiques, bottle shops, grocers & retail shops'
    }
  };

  const currentProfile = venueProfiles[activeVenue];
  const VenueIcon = currentProfile.icon;

  // 4 Minimalist FAQs
  const faqs = [
    {
      q: 'Is VisionPay POS software really $0 per month?',
      a: 'Yes, 100% guaranteed. Unlike traditional POS providers (who charge $69 to $250+ per month per register for software licenses), VisionPay POS software includes $0 monthly recurring fees. We earn a small, transparent margin on card processing only. If your venue closes for renovations or holidays, you pay $0.'
    },
    {
      q: 'When is the daily payout cutoff time for same-day settlement?',
      a: 'Today’s takings land in your bank account today — 7 days a week, 365 days a year. Transactions processed up to 5:00 PM are settled to any Australian bank by 6:00 PM the exact same day. This includes Saturdays, Sundays, and public holidays, solving weekend cashflow bottlenecks for good.'
    },
    {
      q: 'What happens if our venue Wi-Fi or NBN drops out?',
      a: 'You will never miss a single sale. VisionPay POS includes automatic offline mode: counter orders continue to route locally across your local venue network, while our PAX A920 smart terminals instantly switch to the complimentary 4G multi-network SIM card to process payments seamlessly.'
    },
    {
      q: 'Are there any lock-in contracts or exit fees?',
      a: 'No. You are never locked into 24, 36, or 48-month equipment leases. We operate on month-to-month flexibility because we earn your business through exceptional software speed, same-day payouts, and local 7-day Australian customer service.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100 selection:text-brand-primary">
      
      {/* =========================================================================
          SECTION 2: SPLIT HERO SECTION (2-Column Minimalist Corporate Fintech)
          ========================================================================= */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white border-b border-slate-200">
        
        {/* Subtle background enterprise grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Soft radial glow behind right mockup */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typographic Value Statement & Action Group */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="tracking-wide uppercase text-[11px] text-slate-700">POS + EFTPOS IN ONE SYSTEM</span>
                <span className="h-3 w-px bg-slate-300" />
                <span className="text-emerald-700 font-extrabold text-[11px]">$0 SOFTWARE</span>
              </div>

              {/* Massive Display H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                The POS with <br />
                <span className="text-brand-primary">
                  $0 monthly software fees
                </span>
              </h1>

              {/* Supporting Value Proposition Copy */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                An all-in-one point of sale with daily takings settled to any Australian bank by 6 PM, 7 days a week. Free menu setup, zero lock-in contracts, and $0 monthly software subscriptions forever.
              </p>

              {/* Action Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#pos-quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#182db8] text-white font-bold px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all text-base text-center group cursor-pointer"
                >
                  <span>Get My Free POS Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:0283199500"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-xl border border-slate-300 shadow-2xs hover:border-slate-400 transition-all text-base text-center cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call 02 8319 9500</span>
                </a>
              </div>

              {/* Inline Checkmarks Strip */}
              <div className="pt-4 border-t border-slate-200/90 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free menu setup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero lock-in</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Australian support 7 days</span>
                </div>
              </div>

            </div>

            {/* Right Column: Sleek High-Res Minimalist POS Counter Terminal Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Modern Dark Minimalist Counter Terminal Frame */}
                <div className="relative bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-4 sm:p-5 text-white">
                  
                  {/* Top Bar with Venue Status */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold text-slate-200">The Laneway Espresso · Till 01</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] font-mono text-blue-300 border border-slate-700">Table 04</span>
                      <span className="text-[11px] font-bold text-emerald-400">Online 4G</span>
                    </div>
                  </div>

                  {/* Dual Screen Display: Order Docket + 1-Touch Modifiers */}
                  <div className="grid grid-cols-12 gap-3 bg-slate-950 rounded-xl p-3 border border-slate-800/90">
                    
                    {/* Active Live Ticket (7 cols) */}
                    <div className="col-span-7 bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Ticket #142</span>
                          <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">Dine In</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          {/* Item 1 */}
                          <div className="border-b border-slate-800/70 pb-1.5">
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
                              <div className="text-[10px] text-slate-400 font-normal pl-2">• Sourdough, Cheddar</div>
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
                          <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 py-2 px-2 rounded-lg text-center text-xs font-bold flex items-center justify-center gap-1.5 animate-fadeIn">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>APPROVED · Settle 6 PM Today</span>
                          </div>
                        ) : (
                          <button
                            onClick={handlePaySimulation}
                            className="w-full bg-brand-primary hover:bg-[#182db8] text-white text-xs font-bold py-2 px-2 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Tap to Pay ${currentTotal} via PAX</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Quick Modifier Matrix & PAX Hardware Preview (5 cols) */}
                    <div className="col-span-5 flex flex-col justify-between space-y-2">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1-Touch Modifiers</span>
                        <div className="grid grid-cols-1 gap-1">
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, milk: prev.milk.includes('Oat') ? 'Almond Milk (+ $0.70)' : 'Oat Milk (+ $0.70)' }))}
                            className="text-[10px] font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 py-1.5 px-2 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            🥛 {selectedModifiers.milk.split(' ')[0]} Milk
                          </button>
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, size: prev.size.includes('Large') ? 'Regular (+ $0.00)' : 'Large (+ $0.80)' }))}
                            className="text-[10px] font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 py-1.5 px-2 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            ☕ {selectedModifiers.size.split(' ')[0]} Cup
                          </button>
                          <button 
                            onClick={() => setSelectedModifiers(prev => ({ ...prev, shot: prev.shot.includes('Extra') ? 'Decaf (+ $0.50)' : 'Extra Shot (+ $0.50)' }))}
                            className="text-[10px] font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 py-1.5 px-2 rounded border border-slate-700 text-left truncate transition-colors cursor-pointer"
                          >
                            ⚡ {selectedModifiers.shot.split(' ')[0]}
                          </button>
                        </div>
                      </div>

                      {/* Integrated PAX EFTPOS Mockup Dock */}
                      <div className="bg-slate-900 p-2.5 rounded-lg border border-blue-800/40 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-blue-400 mb-1">
                          <Zap className="w-3 h-3 text-blue-400" />
                          <span>PAX A920 INTEGRATED</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded border border-slate-800 text-[10px] text-slate-300">
                          <div className="text-[9px] text-slate-500 font-mono">Contactless NFC</div>
                          <div className="font-mono font-bold text-white text-[11px] mt-0.5">READY TO TAP</div>
                          <div className="flex justify-center gap-1.5 mt-1 text-[8px] text-slate-400 font-medium">
                            <span>Apple Pay</span>
                            <span>•</span>
                            <span>Google Pay</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* KDS (Kitchen Display System) Live Status Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3.5 h-3.5 text-blue-400" />
                      <span>KDS Kitchen Stream:</span>
                      <span className="text-slate-200 font-semibold">Live order sync</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px]">Zero Double-Keying</span>
                  </div>

                </div>

                {/* Floating Value Callout Pill */}
                <div className="absolute -bottom-4 -left-3 bg-white text-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm">
                    $0
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Software Fee Forever</div>
                    <div className="text-[11px] text-slate-500">Save $1,548+ every year per till</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: MINIMALIST TRUST STRIP (3 Clean Horizontally Aligned Badges)
          ========================================================================= */}
      <section className="bg-slate-50 py-5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center md:text-left">
            
            {/* Badge 1 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1 md:py-0 md:px-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 border border-blue-200/60">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Powered by ElitePOS technology</span>
                <span className="text-[11px] text-slate-500">Commercial enterprise hospitality core</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1 md:py-0 md:px-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Integrated EFTPOS</span>
                <span className="text-[11px] text-slate-500">Auto push to terminal · Zero double-keying</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center justify-center md:justify-start gap-3 py-1 md:py-0 md:px-6">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Works with any Australian bank</span>
                <span className="text-[11px] text-slate-500">CBA, NAB, ANZ, Westpac, Macquarie, Bendigo</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: COMPARISON TABLE ("The Offer")
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              The VisionPay Hospitality Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Stop paying for software. <br />
              <span className="text-brand-primary">Start getting paid faster.</span>
            </h2>
            <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
              Traditional POS providers lock Australian venues into recurring subscription licenses and delayed settlements. Here is how VisionPay compares:
            </p>
          </div>

          {/* 2-Column Minimalist Comparison Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-sm font-bold items-center">
              <div className="col-span-5 sm:col-span-4 text-slate-300">Feature Comparison</div>
              <div className="col-span-3 sm:col-span-4 text-center text-slate-400">Typical POS Provider</div>
              <div className="col-span-4 sm:col-span-4 text-center text-emerald-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>VisionPay POS</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              
              {/* Row 1: Monthly Fee */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Monthly software fee</div>
                <div className="col-span-3 sm:col-span-4 text-center text-rose-600 font-semibold flex items-center justify-center gap-1">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>$69 – $300+/mo</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="inline-block bg-emerald-50 text-emerald-700 font-extrabold px-3 py-1.5 rounded-lg border border-emerald-200">
                    $0 / month ($0 forever)
                  </span>
                </div>
              </div>

              {/* Row 2: Daily Settlement */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Daily sales settlement</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  1–3 business days (holds on weekends)
                </div>
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="inline-block bg-blue-50 text-brand-primary font-bold px-3 py-1.5 rounded-lg border border-blue-200">
                    Same day by 6 PM, 7 days
                  </span>
                </div>
              </div>

              {/* Row 3: Menu Setup */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Menu & inventory setup</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  Paid onboarding ($300–$800) or DIY
                </div>
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg border border-emerald-200">
                    100% Free, done-for-you
                  </span>
                </div>
              </div>

              {/* Row 4: Contract Commitment */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Contract commitment</div>
                <div className="col-span-3 sm:col-span-4 text-center text-rose-600 font-medium">
                  24–48 month lock-in
                </div>
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="inline-block bg-slate-100 text-slate-900 font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                    No lock-in contracts
                  </span>
                </div>
              </div>

              {/* Row 5: Local Support */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">Support availability</div>
                <div className="col-span-3 sm:col-span-4 text-center text-slate-600">
                  Offshore tickets or weekday 9-5
                </div>
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="inline-block bg-blue-50 text-brand-primary font-bold px-3 py-1.5 rounded-lg border border-blue-200">
                    Local Australian, 7 days/week
                  </span>
                </div>
              </div>

            </div>

            {/* Table Footer Banner */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-xs text-slate-600">
              <span className="font-bold text-slate-900">Transparent business model: </span> 
              Zero monthly software fee. We earn a small, competitive margin on card processing only. If your venue is closed, you pay $0.
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: FEATURES BENTO GRID (6 Cards, 1px Borders, Worldpay Style)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-white px-3 py-1 rounded-full border border-slate-200">
              End-to-End Hospitality Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              One system from order to payment.
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Eliminate disconnected printers, fragmented EFTPOS and expensive software add-ons. Everything communicates seamlessly.
            </p>
          </div>

          {/* 6 Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Fast Counter POS */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Fast Counter POS</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Sub-second tap response designed for extreme peak rushes. 1-touch modifiers for milk types, sizing, dietary requirements, and custom notes.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
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

            {/* Card 2: Integrated EFTPOS */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Integrated EFTPOS</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Zero manual double-keying. The exact bill amount pushes straight to your PAX A920 terminal. Automatic Least-Cost Routing (LCR) and surcharge passing.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
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

            {/* Card 3: Table & Floor Management */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Table & Floor Management</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Design dining sections, terraces and bar zones. Real-time table status (seated, ordered, bill printed). Split checks evenly or by individual guest seat.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Real-time table status & coursing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Itemized split bills & mobile table checkout</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Kitchen Display System (KDS) */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Kitchen Display System (KDS)</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Replace lost paper dockets with clean digital screens. Color-coded ticket timers, course pacing (hold & fire), and kitchen bump bar support.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Audio chime alerts for incoming orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Route tickets by Kitchen, Grill, or Bar stations</span>
                </li>
              </ul>
            </div>

            {/* Card 5: Self-Order Kiosks */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-5 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Order Kiosks</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Let guests order from interactive standing kiosks or directly from table QR codes. Automated modifier prompts increase average order size by 22%.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Smart automated upsells for drinks & sides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Queue busting during peak rush hours</span>
                </li>
              </ul>
            </div>

            {/* Card 6: Offline Mode with 4G SIM Backup */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Offline Mode & 4G Backup</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Internet dropouts will never stop your service. The system switches seamlessly to offline local mode, while EFTPOS terminals fall back to 4G SIM.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Zero missed orders during NBN outages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dual 4G SIM / Wi-Fi failover built-in</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: INDUSTRY FILTER TABS (Interactive Hospitality Profiles)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Industry Specific Workflows
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Built for how your venue operates.
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Select your venue type below to see tailored hardware bundles, workflows, and speed enhancements:
            </p>
          </div>

          {/* Horizontal Tab Switchers */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {Object.entries(venueProfiles).map(([key, data]) => {
              const TabIcon = data.icon;
              const isActive = activeVenue === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveVenue(key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{data.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-primary px-3 py-1 rounded-lg text-xs font-bold border border-blue-200">
                  <VenueIcon className="w-4 h-4" />
                  <span>{currentProfile.name} Configuration</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentProfile.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentProfile.description}
                </p>

                {/* Key feature checklist */}
                <div className="space-y-2 pt-2">
                  {currentProfile.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {currentProfile.metrics.map((metric, mIdx) => (
                    <span key={mIdx} className="bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                      ✓ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Hardware Bundle Box */}
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 sm:p-7 text-white border border-slate-800 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                    Recommended Hardware Bundle
                  </span>
                  <h4 className="text-lg font-bold text-white mt-3">
                    {currentProfile.hardware}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Delivered fully pre-configured with your digital menu loaded and tested. Plug in power and start taking orders immediately.
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Software Subscription:</span>
                      <strong className="text-emerald-400 font-bold">$0 / month forever</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Menu Entry & Build:</span>
                      <strong className="text-blue-300 font-bold">100% Free</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Daily Settlement:</span>
                      <strong className="text-white font-bold">Today by 6 PM (7 Days)</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#pos-quote-form"
                    className="w-full bg-brand-primary hover:bg-[#182db8] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request {currentProfile.name} Quote →</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: INTERACTIVE SAVINGS CALCULATOR
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center shrink-0 border border-blue-200/60">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
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
                    <span className="text-slate-900 text-base font-extrabold">${monthlyTurnover.toLocaleString()} /mo</span>
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

              {/* Output Callout Box */}
              <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between text-center relative overflow-hidden shadow-md">
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    Recurring Software Savings
                  </span>

                  <div className="mt-4">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">
                      ${annualSoftwareSaved.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-300 block mt-1">You could save ${annualSoftwareSaved.toLocaleString()}/year in software fees</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
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
                    className="w-full bg-brand-primary hover:bg-[#182db8] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free POS Setup →</span>
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-2">Zero lock-in contracts · Free menu rebuild</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: 3-STEP HORIZONTAL SWITCH PROCESS
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Hassle-Free Transition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Switch in days with zero downtime.
            </h2>
            <p className="text-base text-slate-600 mt-3">
              We handle the entire digital migration so you can focus on running your venue.
            </p>
          </div>

          {/* 3-Step Horizontal Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 relative flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-brand-primary text-white font-black text-base flex items-center justify-center mb-5 shadow-xs">
                  01
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Step 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Get a Quote</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Tell us about your venue type, register count, and average monthly turnover. We deliver a custom proposal with $0 software fee verification in 1 business day.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ No obligation · Transparent rates
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 relative flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-brand-primary text-white font-black text-base flex items-center justify-center mb-5 shadow-xs">
                  02
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Step 2</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Free Menu Rebuild</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Send us your current PDF menu, chalkboard photos, or CSV export. Our team builds and tests your complete modifier matrices, pricing, and tax settings for free.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ Done-for-you · Zero manual data entry
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 relative flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-5 shadow-xs">
                  03
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Step 3</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Plug & Play Hardware Delivery</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Hardware arrives fully configured and ready to trade. Connect to power and start processing orders immediately with Australian 7-day phone support on standby.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                ✓ Dispatched within 2 business days
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9: MINIMAL FAQ ACCORDION (4 Expandable Items)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-white px-3 py-1 rounded-full border border-slate-200">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently asked questions.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know about VisionPay POS and our $0 software model.
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
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
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
          SECTION 10: INLINE LEAD CAPTURE SECTION (#pos-quote-form)
          ========================================================================= */}
      <section id="pos-quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-900 text-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-700 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Hospitality Setup Proposal
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Keep more of every sale
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                $0 monthly software fees, same-day settlement and a menu built for you. Get a tailored quote in 1 business day.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-slate-800/90 border border-emerald-500/40 rounded-2xl p-8 text-center max-w-lg mx-auto animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName || 'mate'}</strong>. A Sydney POS specialist will review your venue details and deliver your proposal within 1 business day.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
                  Urgent setup? Call direct at <a href="tel:0283199500" className="text-blue-400 font-bold underline">02 8319 9500</a>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs sm:text-sm">
                
                {/* Full Name */}
                <div>
                  <label htmlFor={fullNameId} className="block font-bold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    id={fullNameId}
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Liam Walker"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
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
                    placeholder="Surry Hills Cafe & Bar"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
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
                    placeholder="0412 345 678"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
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
                    placeholder="liam@venue.com.au"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                {/* Venue Type */}
                <div className="sm:col-span-2">
                  <label htmlFor={venueTypeId} className="block font-bold text-slate-300 mb-1.5">Venue Type</label>
                  <select
                    id={venueTypeId}
                    value={formData.venueType}
                    onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Cafe / Bakery">Cafes & Bakeries</option>
                    <option value="Restaurant / Bistro">Restaurants</option>
                    <option value="Takeaway / QSR">Takeaway & QSR</option>
                    <option value="Food Truck / Pop-Up">Food Trucks & Pop-Ups</option>
                    <option value="Pub / Bar / Club">Pubs & Bars</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Other">Other Venue</option>
                  </select>
                </div>

                {/* Pre-Checked Box: Package Inclusions */}
                <div className="sm:col-span-2 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Package Inclusions Requested:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.includePos}
                        onChange={(e) => setFormData({ ...formData, includePos: e.target.checked })}
                        className="accent-brand-primary rounded" 
                      />
                      <span>POS System ($0/mo)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.includeEftpos}
                        onChange={(e) => setFormData({ ...formData, includeEftpos: e.target.checked })}
                        className="accent-brand-primary rounded" 
                      />
                      <span>PAX A920 EFTPOS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.includeMenuSetup}
                        onChange={(e) => setFormData({ ...formData, includeMenuSetup: e.target.checked })}
                        className="accent-brand-primary rounded" 
                      />
                      <span>Free Menu Rebuild</span>
                    </label>
                  </div>
                </div>

                {/* Submit Primary CTA */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-[#182db8] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Free POS Quote</span>
                    <ArrowRight className="w-4 h-4" />
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
                      Australian support 7 days
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
