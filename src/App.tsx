import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CTAButtons from './components/CTAButtons';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CTAButtons />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;