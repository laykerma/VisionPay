# VisionPay - Modern Australian Fintech Homepage (React + Vite + Tailwind CSS)

This project is a high-fidelity, high-conversion React web application for **VisionPay**, an Australian payment provider repositioning as an all-in-one payment ecosystem (In-Store EFTPOS, Online Gateway, POS, and Payment Links).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🎨 Component Architecture

```
src/
├── App.jsx                     # Master container with 5-way routing (Home, POS, EFTPOS, Gateway, Links)
├── main.jsx                    # React entry point
├── index.css                   # Tailwind base directives & custom keyframes
├── pages/
│   ├── HomePage.jsx            # All-in-One Australian Payments Ecosystem (/)
│   ├── PosPage.jsx             # VisionPay POS with $0 Software Fee & Same-Day 7-Day Settlement (/pos/)
│   ├── InStorePaymentsPage.jsx # In-Store Payments & EFTPOS PAX A920 (/instore-payments/)
│   ├── PaymentGatewayPage.jsx  # Online Payments & Gateway ($0 Fee) (/payment-gateway/)
│   └── PaymentLinksPage.jsx    # Australian Payment Links via SMS & Email (/payment-link/)
└── components/
    ├── Header.jsx              # Logo, 5-way switcher, mega-menu, phone link & CTA
    ├── Hero.jsx                # Hero with 3D PAX A920 contactless tap simulation
    ├── SocialProof.jsx         # 4 trust badges (Same-day, 5.0 Google stars, 0 lock-in, 24/7 Aussie)
    ├── SameDaySettlement.jsx   # Dark navy highlight band, 3 stat tiles & bank logos
    ├── SolutionsGrid.jsx       # 3x2 Bento grid with direct routing for all core verticals
    ├── WhySwitch.jsx           # 5 value pillar benefit cards
    ├── HowItWorks.jsx          # 3-step horizontal onboarding timeline
    ├── Testimonials.jsx        # ElitePOS, PracShield, Storebase + live Google Reviews
    ├── QuoteForm.jsx           # Inline 2-column quote form with dynamic savings calculator
    └── Footer.jsx              # Navigation, Sydney office, AFSL & PCI-DSS Level 1 compliance
```

---

## 🇦🇺 Brand Identity & Key Features

* **Official Brand Identity:** Royal Electric Blue (`#203AE7`) extracted directly from the official VisionPay brand logo, paired with Deep Slate/Navy (`#0B132B`, `#0F172A`), crisp white surfaces, and subtle slate borders (`#E2E8F0`).
* **VisionPay POS ($0 Monthly Fee):** Interactive dual-screen counter POS simulation with live itemized ticket, 1-touch modifier matrix, PAX A920 contactless charge simulation, dynamic ROI software savings calculator, and 6-tab venue workflow builder.
* **Interactive PAX A920 Terminal:** Click "Tap to Pay" on the hero mockup to simulate an instant NFC contactless transaction with receipt printing.
* **Payment Links Showcase:** Interactive dual-state smartphone demo showing an SMS invoice notification transition into a frictionless checkout (Apple Pay / Google Pay / Card) with instant paid clearance.
* **Dynamic Quote Savings Estimator:** Selecting monthly turnover dynamically calculates comparative annual savings against legacy Big Four banks.
* **Mega-Menu Navigation & Quick Switcher:** 5-way pill switcher (`Ecosystem`, `POS $0`, `EFTPOS`, `Gateway`, `Links`) + comprehensive 2-column mega-menu.

