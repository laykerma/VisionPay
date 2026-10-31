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
├── App.jsx                     # Master application container
├── main.jsx                    # React entry point
├── index.css                   # Tailwind base directives & custom keyframes
└── components/
    ├── Header.jsx              # Announcement bar, mega-menu, phone link & CTA
    ├── Hero.jsx                # Value headline, dual CTAs, interactive PAX A920 3D mockup
    ├── SocialProof.jsx         # 4 trust badges (Same-day, 5.0 Google stars, 0 lock-in, 24/7 Aussie)
    ├── SameDaySettlement.jsx   # Dark navy highlight band, 3 stat tiles & bank logos
    ├── SolutionsGrid.jsx       # 3x2 Bento grid for all 6 core product verticals
    ├── WhySwitch.jsx           # 5 value pillar benefit cards
    ├── HowItWorks.jsx          # 3-step horizontal onboarding timeline
    ├── Testimonials.jsx        # ElitePOS, PracShield, Storebase + live Google Reviews
    ├── QuoteForm.jsx           # Inline 2-column quote form with dynamic savings calculator
    └── Footer.jsx              # Navigation, Sydney office, AFSL & PCI-DSS Level 1 compliance
```

---

## 🇦🇺 Brand Identity & Key Features

* **Palette:** Deep Trustworthy Navy (`#0B132B`, `#0F172A`), Crisp White, Slate Card Surfaces (`#F8FAFC`), and High-Conversion Emerald (`#059669`).
* **Interactive PAX A920 Terminal:** Click "Tap to Pay" on the hero mockup to simulate an instant NFC contactless transaction with receipt printing.
* **Dynamic Quote Savings Estimator:** Selecting monthly turnover dynamically calculates comparative annual savings against legacy Big Four banks.
* **Mega-Menu Navigation:** Full 2-column overview of Online Gateway, EFTPOS, VisionPay POS, Payment Links, Fraud Shield, and Gift Cards.

