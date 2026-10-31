import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import SameDaySettlement from '../components/SameDaySettlement';
import SolutionsGrid from '../components/SolutionsGrid';
import WhySwitch from '../components/WhySwitch';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero />
      <SocialProof />
      <SameDaySettlement />
      <SolutionsGrid onNavigate={onNavigate} />
      <WhySwitch />
      <HowItWorks />
      <Testimonials />
      <QuoteForm />
    </>
  );
}

