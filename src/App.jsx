import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import SameDaySettlement from './components/SameDaySettlement';
import SolutionsGrid from './components/SolutionsGrid';
import WhySwitch from './components/WhySwitch';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <SameDaySettlement />
        <SolutionsGrid />
        <WhySwitch />
        <HowItWorks />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

