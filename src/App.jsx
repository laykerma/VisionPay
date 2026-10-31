import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PaymentGatewayPage from './pages/PaymentGatewayPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('payment-gateway') || hash.includes('payment-gateway')) {
      return 'gateway';
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('payment-gateway') || hash.includes('payment-gateway')) {
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
    if (page === 'gateway') {
      window.history.pushState({}, '', '#/payment-gateway');
    } else {
      window.history.pushState({}, '', '#/');
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans selection:bg-brand-primary-light selection:text-brand-primary">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'gateway' ? (
          <PaymentGatewayPage onNavigateHome={() => navigateTo('home')} />
        ) : (
          <HomePage onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
