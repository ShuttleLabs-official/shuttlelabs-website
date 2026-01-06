'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Products':
        return <ProductsPage />;
      case 'Careers':
        return <CareersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-20">{renderContent()}</div>
    </div>
  );
}
