import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  Laptop, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  Lock, 
  HelpCircle, 
  ChevronDown, 
  Code, 
  ExternalLink, 
  Cpu, 
  RefreshCw, 
  Layers, 
  ShoppingCart, 
  Phone,
  Server
} from 'lucide-react';

export default function PaymentGatewayPage({ onNavigateHome }) {
  // Code snippet tabs state
  const [activeCodeTab, setActiveCodeTab] = useState('curl');
  const [copiedCode, setCopiedCode] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [monthlyVolume, setMonthlyVolume] = useState('20k_100k');
  const [needsOnline, setNeedsOnline] = useState(true);
  const [needsEftpos, setNeedsEftpos] = useState(false);
  const [needsPos, setNeedsPos] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const codeSnippets = {
    curl: `curl -X POST https://api.visionpay.com.au/v1/charges \\
  -H "Authorization: Bearer sec_live_920vp_au" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 8900,
    "currency": "AUD",
    "payment_method": "pm_card_4821",
    "description": "Sydney Artisan Roasters Order #1042",
    "settlement": "same_day_direct"
  }'`,
    node: `import VisionPay from '@visionpay/node';
const visionpay = new VisionPay('sec_live_920vp_au');

const charge = await visionpay.charges.create({
  amount: 8900, // $89.00 AUD
  currency: 'AUD',
  customer_id: 'cus_bondi_982',
  settlement_type: 'same_day',
  capture: true,
  metadata: { order_id: 'VP-1042' }
});

console.log('Payment Approved:', charge.status);`,
    python: `import visionpay
visionpay.api_key = "sec_live_920vp_au"

charge = visionpay.Charge.create(
    amount=8900,
    currency="AUD",
    payment_method="pm_card_4821",
    settlement_speed="same_day",
    description="Online Gateway Payment"
)

print(f"Settled: {charge.id} - Payout today")`,
    php: `\\VisionPay\\VisionPay::setApiKey('sec_live_920vp_au');

$charge = \\VisionPay\\Charge::create([
    'amount' => 8900,
    'currency' => 'AUD',
    'source' => $token,
    'settlement' => 'same_day_any_bank',
    'description' => 'WooCommerce Order #1042'
]);`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const faqs = [
    {
      q: 'What does VisionPay Online cost?',
      a: '$0 monthly gateway fees. Unlike legacy merchant banks charging $35 - $60/month just to keep a gateway active, VisionPay operates on a pure pay-as-you-go model. You only pay transparent, low per-transaction fees tailored to your sales volume.'
    },
    {
      q: 'Which eCommerce platforms and shopping carts do you support?',
      a: 'We provide certified plug-and-play plugins for WooCommerce, Magento, PrestaShop, and custom web applications via our REST APIs. Our official Shopify hosted checkout integration is actively in pilot and launching soon.'
    },
    {
      q: 'Can I accept recurring payments and subscription billing?',
      a: 'Yes. VisionPay Online includes comprehensive tokenization, automated weekly/monthly/annual billing schedules, card-on-file storage, and smart retry (dunning) logic to maximize subscription collection.'
    },
    {
      q: 'How secure is the VisionPay payment gateway?',
      a: 'VisionPay is Level 1 PCI-DSS compliant—the highest standard in global payment security. Every online transaction is backed by automated EMV 3-D Secure 2.0 (3DS2), which shifts fraud liability from your business to the issuing bank while keeping checkout seamless.'
    }
  ];

  const handleFormSubmit = (e) => {
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
              className="hover:text-brand-primary transition-colors font-medium flex items-center gap-1"
            >
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-brand-slate font-semibold">Payment Gateway</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-brand-primary font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            Accepting Australian Merchants
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
                  <span>🇦🇺 Australian Payment Gateway</span>
                </span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.14]">
                Accept online payments with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-600 to-indigo-600">
                  no monthly fees
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg text-brand-muted leading-relaxed max-w-xl font-normal">
                A secure Australian payment gateway for websites, apps and custom platforms. Plug into your shopping cart or build with our APIs, and get your money the same day.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="#gateway-quote" 
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="#api-showcase" 
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-border text-base font-bold px-7 py-4 rounded-xl shadow-xs hover:border-slate-300 transition-all"
                >
                  <Code className="w-5 h-5 text-brand-primary" />
                  <span>View API Docs</span>
                </a>
              </div>

              {/* Bullet Trust Points (Horizontal Icon Badges) */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs text-brand-slate font-medium">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Zap className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Same-day settlement to any bank</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>$0 monthly gateway fees</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <Lock className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>No lock-in contracts</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Built-in 3DS2 fraud protection</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Split Visual (Checkout UI + Dark Mode Code Box) */}
            <div className="lg:col-span-6 relative flex flex-col gap-4">
              
              {/* Top/Left Part of Split: Ultra-clean eCommerce Mobile Checkout Sheet */}
              <div className="bg-white rounded-2xl p-5 shadow-card border border-brand-border relative z-20">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-border">
                  <div className="flex items-center gap-2">
                    <img src="/visionpay-logo.png" alt="VisionPay" className="h-4 w-auto object-contain" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Fast Checkout</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    3DS2 Protected
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Apple Pay Button */}
                  <div className="bg-black text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer hover:bg-slate-900 transition-colors">
                    <span>Pay with</span>
                    <span className="font-serif font-black text-sm">Pay</span>
                  </div>

                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-3 text-[10px] uppercase tracking-wider text-slate-400 font-bold">Or Card</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  {/* Simulated Card Input Row */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-brand-primary" />
                      <span className="font-mono text-slate-700 font-semibold">•••• 4821</span>
                    </div>
                    <span className="text-[11px] text-slate-400">12/28</span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-500">Order Total</span>
                    <span className="font-bold text-brand-navy tabular-nums text-sm">$89.00 AUD</span>
                  </div>

                  <button className="w-full bg-brand-primary text-white text-xs font-bold py-2.5 rounded-xl shadow-md shadow-brand-primary/20 flex items-center justify-center gap-1.5">
                    <span>Complete Order · $89.00</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom/Right Part of Split: Modern Dark-Mode API Snippet Box */}
              <div id="api-showcase" className="bg-slate-900 rounded-2xl p-5 shadow-terminal border border-slate-800 text-white font-mono text-xs relative z-10">
                {/* Header & Tabs */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="text-[11px] text-slate-400 ml-2 font-sans font-semibold">VisionPay Gateway API</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {['curl', 'node', 'python', 'php'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveCodeTab(tab)}
                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition-colors ${
                          activeCodeTab === tab 
                            ? 'bg-brand-primary text-white' 
                            : 'text-slate-400 hover:text-slate-200 bg-slate-800'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                    <button 
                      onClick={handleCopyCode}
                      className="ml-2 text-slate-400 hover:text-white p-1 rounded bg-slate-800"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Preformatted Code Content */}
                <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed py-1 scrollbar-thin">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>

                {/* Status Bar */}
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-sans">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Live Production Ready
                  </span>
                  <span>Instant Settlement: Enabled</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           2. "BUILT FOR HOW YOU SELL ONLINE" (2x2 GRID)
           ========================================================================= */}
      <section className="py-24 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Flexible Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Built for how you sell online.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Whether you are launching your first shopping cart, scaling SaaS recurring subscriptions, or engineering a custom marketplace.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: eCommerce Stores */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  eCommerce Stores
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Mobile-friendly checkout designed specifically to prevent cart abandonment. Instant shopping cart plugins for WooCommerce, Magento, PrestaShop, and Shopify coming soon.
                </p>
                
                <ul className="mt-5 space-y-2.5 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Native Apple Pay & Google Pay 1-tap checkout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Zero monthly gateway maintenance fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Customizable branded checkout sheets</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold">
                <span className="text-brand-navy">WooCommerce & Shopify Ready</span>
                <a href="#gateway-quote" className="text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Cart Plugins <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Subscriptions & Recurring */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  Subscriptions & Recurring
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Automated weekly, monthly, and annual recurring billing schedules with smart retry logic. Trusted by healthcare & retail platforms like Storebase & PracShield.
                </p>
                
                <ul className="mt-5 space-y-2.5 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Automated card tokenization & PCI-compliant vaults</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Intelligent dunning & automated failed payment retries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Proration, custom discount coupons & trial periods</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold">
                <span className="text-brand-navy">Automated Dunning Included</span>
                <a href="#gateway-quote" className="text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Recurring Tools <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Apps & Platforms */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  Apps & Platforms
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Seamless in-app checkout flows and white-label merchant payouts. Embed Australian payments directly into your iOS, Android, or SaaS web application.
                </p>
                
                <ul className="mt-5 space-y-2.5 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Mobile SDKs for React Native, Flutter, iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>White-label checkout UI components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Multi-party split payouts & automated fee withholding</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold">
                <span className="text-brand-navy">Mobile SDKs</span>
                <a href="#gateway-quote" className="text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Platform Documentation <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: Custom Builds */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                  Custom Builds
                </h3>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  Developer-first REST APIs, comprehensive documentation, interactive sandbox keys, and real-time support from in-house Australian software engineers.
                </p>
                
                <ul className="mt-5 space-y-2.5 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Clean REST endpoints with idempotent request keys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Webhook event listeners for instant status reconciliation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Direct engineering Slack & phone access for developers</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold">
                <span className="text-brand-navy">Instant Sandbox Keys</span>
                <a href="#api-showcase" className="text-brand-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Sandbox <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
           3. "WHY VISIONPAY ONLINE" (5-PILLAR FEATURE SHOWCASE)
           ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Commercial Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Why Australian businesses choose VisionPay Online.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted mt-3">
              Compare our transparent Australian payments model against traditional merchant banks and overseas payment processors.
            </p>
          </div>

          {/* 5 Comparison Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-primary shadow-xs flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <span className="text-lg font-black">$0</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">$0 Monthly Fees</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Pay only when you sell. Low transparent fee per transaction. Save up to $720/year compared to legacy monthly gateway fees.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-blue-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Same-Day Settlement</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Today’s revenue in your bank today. Direct clearing to CBA, Westpac, ANZ, NAB or Macquarie without switching banks.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Fraud Protection</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Automated 3DS2 liability shift. Protect your store against chargeback fraud while keeping honest transactions friction-free.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-purple-600 shadow-xs flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">In-House Help</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Local Sydney developer support. We assist you directly with plugin setup, webhook testing, and checkout styling.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border hover:border-brand-primary transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white text-amber-500 shadow-xs flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">24/7 Aussie Support</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Real engineers and payment specialists round the clock. Reach an Australian technician in under 45 seconds.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
           4. "HOW IT WORKS" (3-STEP HORIZONTAL TIMELINE)
           ========================================================================= */}
      <section className="py-20 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Simple 3-Step Setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              How VisionPay Gateway Works
            </h2>
            <p className="text-base text-brand-muted mt-2">
              From application to your first same-day payout in less than a week.
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
                2 Minutes
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Apply online in minutes</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Fill out our simple digital form with your Australian business details. Get your tailored quote within 1 business day.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-primary text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white">
                02
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 text-blue-700 bg-blue-50">
                Plug & Play
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Connect your cart or API</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Install our pre-built cart plugin or drop our REST API keys into your code. Our Sydney tech team assists free of charge.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-brand-border shadow-card text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand-navy text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-4 border-white">
                03
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 text-emerald-700 bg-emerald-50">
                Daily Payouts
              </span>
              <h3 className="text-xl font-bold text-brand-navy">Go live & receive same-day deposits</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Accept customer payments smoothly. Your sales settle directly into your existing Australian bank account every single day.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
           5. TESTIMONIAL SECTION (PRACSHIELD & STOREBASE)
           ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-3 py-1 rounded-full border border-brand-primary-border">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
              Trusted by Australia's innovative platforms.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonial 1: PracShield */}
            <div className="bg-brand-light rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                      PS
                    </div>
                    <div>
                      <span className="font-extrabold text-brand-navy text-base">PracShield Health</span>
                      <span className="text-[11px] block text-brand-muted font-medium">Healthcare Practice Management</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-500">★★★★★</span>
                </div>

                <p className="text-sm sm:text-base text-brand-slate leading-relaxed italic font-medium">
                  "We run a high-volume healthcare practice management platform. Reliable recurring subscription payments are non-negotiable for our doctors and clinics. VisionPay's automated tokenization and same-day settlements have transformed our billing reliability and cut our gateway costs by 30%."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
                <div>
                  <span className="font-bold text-brand-navy block">Dr. Alistair Vance</span>
                  <span>Head of Product & Billing Infrastructure</span>
                </div>
                <span className="text-brand-primary font-semibold bg-brand-primary-light px-2.5 py-1 rounded-full">
                  Recurring Gateway Client
                </span>
              </div>
            </div>

            {/* Testimonial 2: Storebase */}
            <div className="bg-brand-light rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-brand-primary text-white font-black text-xs flex items-center justify-center">
                      SB
                    </div>
                    <div>
                      <span className="font-extrabold text-brand-navy text-base">Storebase Retail</span>
                      <span className="text-[11px] block text-brand-muted font-medium">Multi-Store SaaS Platform</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-500">★★★★★</span>
                </div>

                <p className="text-sm sm:text-base text-brand-slate leading-relaxed italic font-medium">
                  "For our multi-vendor store builder, we needed a developer-friendly Australian payment gateway with zero monthly overhead. VisionPay gave our merchants plug-and-play checkout in minutes and slashed their transaction overhead with instant daily bank payouts."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
                <div>
                  <span className="font-bold text-brand-navy block">Elena Rossi</span>
                  <span>Chief Technology Officer</span>
                </div>
                <span className="text-brand-primary font-semibold bg-brand-primary-light px-2.5 py-1 rounded-full">
                  API & Marketplace Client
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
           6. FREQUENTLY ASKED QUESTIONS (ACCORDION)
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
              Everything you need to know about setting up and running VisionPay Online.
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
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-brand-navy hover:text-brand-primary transition-colors focus:outline-none"
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
           7. BOTTOM LEAD FORM & CONVERSION BAND
           ========================================================================= */}
      <section id="gateway-quote" className="py-24 bg-gradient-to-b from-white via-slate-50 to-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-brand-primary/20 shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary-light px-3.5 py-1.5 rounded-full border border-brand-primary-border">
                <span>⚡ Instant Online Onboarding</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3">
                Start accepting online payments this week
              </h2>
              <p className="text-base text-brand-muted mt-2">
                Get a custom volume quote in 1 business day.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
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
                      placeholder="e.g. Sydney Artisan Roasters" 
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

                {/* Monthly Volume Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
                    Estimated Monthly Online Volume
                  </label>
                  <select 
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm font-medium transition-all"
                  >
                    <option value="under_20k">Under $20,000 / month (Startups & New Stores)</option>
                    <option value="20k_100k">$20,000 – $100,000 / month (Growing eCommerce)</option>
                    <option value="100k_500k">$100,000 – $500,000 / month (High-Volume Stores)</option>
                    <option value="500k_plus">$500,000+ / month (Enterprise & Platforms)</option>
                  </select>
                </div>

                {/* Pre-selected Services Checkbox Row */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                    Solutions Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-brand-primary bg-brand-primary-light text-brand-primary font-bold text-xs cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={needsOnline} 
                        onChange={(e) => setNeedsOnline(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>Online Payments (Selected)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${needsEftpos ? 'border-brand-primary bg-brand-primary-light text-brand-primary' : 'border-brand-border bg-slate-50 text-slate-700'}`}>
                      <input 
                        type="checkbox" 
                        checked={needsEftpos} 
                        onChange={(e) => setNeedsEftpos(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>In-Store EFTPOS (Optional)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${needsPos ? 'border-brand-primary bg-brand-primary-light text-brand-primary' : 'border-brand-border bg-slate-50 text-slate-700'}`}>
                      <input 
                        type="checkbox" 
                        checked={needsPos} 
                        onChange={(e) => setNeedsPos(e.target.checked)}
                        className="accent-brand-primary w-4 h-4"
                      />
                      <span>VisionPay POS (Optional)</span>
                    </label>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Get My Online Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust Footer Below Button */}
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
                <h3 className="text-2xl font-black text-brand-navy">Gateway Quote Requested!</h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName || 'Merchant'}</strong>! An Australian payment gateway specialist will review <strong>{businessName || 'your business'}</strong> and email your custom rate proposal within <strong>1 business day</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:0283199500" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline">
                    <span>Need immediate API credentials? Call 02 8319 9500 →</span>
                  </a>
                  <button onClick={() => setFormSubmitted(false)} className="text-xs text-slate-500 hover:text-slate-800 underline">
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
