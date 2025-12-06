import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: () => void;
  user: { name: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 px-4`}>
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-xl py-2 px-6' : 'bg-transparent py-2 px-0'}`}>
        <div className="flex justify-between items-center h-14">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className={`font-black text-3xl tracking-tighter ${isScrolled ? 'text-brand-yellow' : 'text-brand-black'}`}>
                لذيذ<span className="text-brand-red">.</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 space-x-reverse ${isScrolled ? 'text-white' : 'text-brand-black'}`}>
            <a href="#home" className="hover:text-brand-yellow font-bold text-lg transition-colors">الرئيسية</a>
            <a href="#menu" className="hover:text-brand-yellow font-bold text-lg transition-colors">القائمة</a>
            <a href="#pickup" className="hover:text-brand-yellow font-bold text-lg transition-colors">اطلب واستلم</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2 font-bold bg-white text-brand-black px-4 py-2 rounded-full shadow-hard-sm">
                <User size={18} />
                <span>{user.name}</span>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className={`font-bold hover:text-brand-yellow transition-colors ${isScrolled ? 'text-white' : 'text-brand-black'}`}
              >
                دخول
              </button>
            )}
            
            <a href="#pickup" className="bg-brand-red text-white px-6 py-2 rounded-full font-black hover:bg-red-600 transition-all shadow-hard-sm flex items-center gap-2 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95">
              <ShoppingBag size={18} />
              <span>اطلب الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-white' : 'text-brand-black'} p-2`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-brand-black rounded-3xl p-6 shadow-2xl md:hidden animate-fade-in-up border-2 border-brand-yellow">
            <div className="flex flex-col space-y-4">
                <a href="#home" className="text-white text-xl font-bold hover:text-brand-yellow" onClick={() => setIsOpen(false)}>الرئيسية</a>
                <a href="#menu" className="text-white text-xl font-bold hover:text-brand-yellow" onClick={() => setIsOpen(false)}>القائمة</a>
                <a href="#pickup" className="text-white text-xl font-bold hover:text-brand-yellow" onClick={() => setIsOpen(false)}>اطلب واستلم</a>
                <div className="h-px bg-gray-800 my-2"></div>
                <button 
                    onClick={() => { setIsOpen(false); onOpenAuth(); }}
                    className="bg-gray-800 text-white w-full py-3 rounded-xl font-bold"
                >
                    {user ? user.name : 'تسجيل الدخول'}
                </button>
                <a href="#pickup" onClick={() => setIsOpen(false)} className="bg-brand-red text-white w-full py-3 rounded-xl font-black text-center shadow-hard-sm">
                    ابدأ الطلب 🔥
                </a>
            </div>
        </div>
      )}
    </nav>
  );
};