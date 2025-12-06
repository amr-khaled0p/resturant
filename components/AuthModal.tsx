import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onLogin(name || 'عميلنا العزيز');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-secondary/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 overflow-hidden shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="bg-primary-600 p-6 text-center relative">
          <button onClick={onClose} className="absolute top-4 left-4 text-white/80 hover:text-white">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </h2>
          <p className="text-primary-100 text-sm">
            {isLogin ? 'مرحباً بعودتك إلى لذيذ' : 'انضم إلينا واستمتع بالعروض'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 text-center font-bold transition-colors ${isLogin ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            دخول
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 text-center font-bold transition-colors ${!isLogin ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-gray-600'}`}
          >
            تسجيل
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute right-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="الاسم الكامل" 
                  className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute right-3 top-3 text-gray-400" size={20} />
              <input 
                type="password" 
                placeholder="كلمة المرور" 
                className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`w-full py-3 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 ${isLogin ? 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/30' : 'bg-accent hover:bg-accent-hover shadow-accent/30'}`}
            >
              {isLogin ? 'دخول' : 'إنشاء حساب'}
              <ArrowRight size={20} />
            </button>
          </form>

          {isLogin && (
            <p className="text-center mt-6 text-sm text-gray-500">
              نسيت كلمة المرور؟ <a href="#" className="text-accent font-bold hover:underline">استعادة</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};