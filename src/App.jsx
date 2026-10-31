import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PaymentGatewayPage from './pages/PaymentGatewayPage';
import InStorePaymentsPage from './pages/InStorePaymentsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('instore') || hash.includes('instore')) {
      return 'instore';
    }
    if (path.includes('payment-gateway') || hash.includes('payment-gateway') || hash.includes('gateway')) {
      return 'gateway';
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('instore') || hash.includes('instore')) {
        setCurrentPage('instore');
      } else if (path.includes('payment-gateway') || hash.includes('payment-gateway') || hash.includes('gateway')) {
        setCurrentPage('gateway');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'instore') {
      window.history.pushState({}, '', '#/instore-payments');
    } else if (page === 'gateway') {
      window.history.pushState({}, '', '#/payment-gateway');
    } else {
      window.history.pushState({}, '', '#/');
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans selection:bg-brand-primary-light selection:text-brand-primary">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'instore' ? (
          <InStorePaymentsPage onNavigateHome={() => navigateTo('home')} />
        ) : currentPage === 'gateway' ? (
          <PaymentGatewayPage onNavigateHome={() => navigateTo('home')} />
        ) : (
          <HomePage onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
