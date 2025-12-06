import React from 'react';
import { ShoppingBag, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen bg-brand-offwhite overflow-hidden pt-20 flex flex-col justify-center">
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-6 opacity-5 pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          <span className="text-[150px] font-black text-black">LAZIZ TASTY FAST HOT FRESH</span>
          <span className="text-[150px] font-black text-black">LAZIZ TASTY FAST HOT FRESH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block bg-brand-yellow px-4 py-1 rounded-full border-2 border-black font-black text-xs md:text-sm mb-4 shadow-hard-sm transform -rotate-2">
              🚀 أسرع توصيل في المدينة
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-brand-black leading-[0.9] mb-6 tracking-tight">
              مش مجرد <br />
              <span className="text-brand-red text-outline-white relative inline-block">
                أكل..
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="15" fill="none" />
                </svg>
              </span>
              <br />
              ده <span className="text-brand-yellow text-shadow-black">إدمان!</span>
            </h1>
            
            <p className="text-xl text-gray-700 font-bold mb-8 max-w-lg mx-auto lg:mx-0">
              استعد لتجربة طعم هتاخدك لعالم تاني. برجر، شاورما، ومشاوي معمولة بمزاج عالي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#pickup" className="group relative px-8 py-4 bg-brand-black text-white rounded-2xl font-black text-xl shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard hover:bg-gray-900 active:translate-y-0 active:shadow-none overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                   اطلب الآن <ShoppingBag size={22} className="group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></div>
              </a>
              
              <a href="#menu" className="px-8 py-4 bg-white text-brand-black border-2 border-brand-black rounded-2xl font-black text-xl hover:bg-brand-yellow transition-colors shadow-hard-sm">
                شوف المنيو 👀
              </a>
            </div>
          </div>

          {/* Visuals */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] flex items-center justify-center">
             {/* Abstract Shapes */}
             <div className="absolute w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             
             {/* Main Image - Floating */}
             <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Burger" 
                className="relative z-20 w-80 md:w-[450px] object-cover drop-shadow-2xl animate-float transform hover:scale-105 transition-transform duration-500"
                style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0 10%)', borderRadius: '40px' }}
             />

             {/* Floating Elements */}
             <div className="absolute top-10 right-10 z-30 bg-white border-2 border-black p-3 rounded-xl shadow-hard transform rotate-6 animate-pulse">
                <span className="text-3xl">🔥</span>
             </div>
             <div className="absolute bottom-20 left-10 z-30 bg-brand-yellow border-2 border-black px-4 py-2 rounded-xl shadow-hard transform -rotate-6">
                <span className="font-black text-xl">100% طازج</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown size={32} className="text-brand-black opacity-50" />
      </div>
    </div>
  );
};