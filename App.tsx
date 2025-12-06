import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { PickupSection } from './components/PickupSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [orderText, setOrderText] = useState('');

  const handleLogin = (name: string) => {
    setUser({ name });
  };

  const handleAddToOrder = (itemName: string) => {
    setOrderText(prev => {
      const separator = prev.length > 0 ? ' + ' : '';
      return prev + separator + itemName;
    });
    // Smooth scroll to pickup section
    const pickupSection = document.getElementById('pickup');
    if (pickupSection) {
      pickupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-primary-600 selection:text-white">
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} user={user} />
      <main>
        <Hero />
        <MenuSection onAddToOrder={handleAddToOrder} />
        <PickupSection initialOrder={orderText} />
      </main>
      <Footer />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;