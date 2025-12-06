import React, { useState, useEffect } from 'react';
import { ShoppingBag, Clock, CheckCircle, Truck, ArrowRight } from 'lucide-react';

interface PickupSectionProps {
  initialOrder: string;
}

export const PickupSection: React.FC<PickupSectionProps> = ({ initialOrder }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderText, setOrderText] = useState('');

  useEffect(() => {
    if (initialOrder) {
      setOrderText(initialOrder);
    }
  }, [initialOrder]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setOrderText('');
    }, 1000);
  };

  return (
    <section id="pickup" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute right-0 top-0 text-[200px] font-black text-white opacity-[0.03] leading-none pointer-events-none select-none">
        PICK<br/>UP
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div>
                <div className="inline-block bg-brand-red px-3 py-1 rounded-lg font-bold text-sm mb-6 rotate-2">
                    ⚡ خدمة سريعة
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    ما عندك وقت؟ <br/>
                    <span className="text-brand-yellow">احنا جاهزين.</span>
                </h2>
                <p className="text-gray-400 text-xl font-medium mb-10 max-w-md">
                    اطلب أونلاين، حدد الوقت، ومُر علينا خذ طلبك وهو نار. بدون طوابير، بدون تأخير.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow font-bold text-xl">1</div>
                        <div className="text-lg font-bold">اختار طلباتك من المنيو</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow font-bold text-xl">2</div>
                        <div className="text-lg font-bold">حدد وقت الوصول</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold text-xl">3</div>
                        <div className="text-lg font-bold text-brand-yellow">استلم في ثواني!</div>
                    </div>
                </div>
            </div>

            {/* Form Side - Designed like a Receipt/Ticket */}
            <div className="bg-white text-black p-2 rounded-[2.5rem] transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-[0_0_40px_rgba(255,199,44,0.2)]">
                <div className="border-4 border-black border-dashed rounded-[2rem] p-6 md:p-8 bg-brand-offwhite h-full">
                    
                    {isSubmitted ? (
                        <div className="text-center py-20">
                            <CheckCircle size={80} className="mx-auto text-green-500 mb-6 animate-bounce" />
                            <h3 className="text-3xl font-black mb-2">طلبك وصل!</h3>
                            <p className="font-bold text-gray-500 mb-8">رقم الطلب #991</p>
                            <button onClick={() => setIsSubmitted(false)} className="text-brand-red font-black underline text-lg">طلب جديد</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="text-center border-b-2 border-black pb-4 mb-6">
                                <h3 className="text-2xl font-black uppercase">تذكرة الطلب</h3>
                                <p className="font-bold text-gray-500 text-sm">ORDER TICKET</p>
                            </div>

                            <div>
                                <label className="block font-black text-sm mb-2 uppercase">طلباتك</label>
                                <textarea 
                                    required 
                                    value={orderText}
                                    onChange={(e) => setOrderText(e.target.value)}
                                    className="w-full bg-white border-2 border-black rounded-xl p-4 font-bold focus:ring-4 focus:ring-brand-yellow/50 focus:border-black outline-none transition-all resize-none h-32 placeholder-gray-300"
                                    placeholder="اكتب طلبك هنا..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-black text-sm mb-2">الاسم</label>
                                    <input required type="text" className="w-full bg-white border-2 border-black rounded-xl p-3 font-bold focus:ring-4 focus:ring-brand-yellow/50 focus:border-black outline-none" />
                                </div>
                                <div>
                                    <label className="block font-black text-sm mb-2">الجوال</label>
                                    <input required type="tel" className="w-full bg-white border-2 border-black rounded-xl p-3 font-bold focus:ring-4 focus:ring-brand-yellow/50 focus:border-black outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block font-black text-sm mb-2">وقت الوصول</label>
                                <div className="relative">
                                    <input required type="time" className="w-full bg-white border-2 border-black rounded-xl p-3 font-bold focus:ring-4 focus:ring-brand-yellow/50 focus:border-black outline-none" />
                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-brand-red text-white font-black text-xl py-4 rounded-xl shadow-hard border-2 border-black hover:bg-brand-black hover:border-brand-yellow hover:text-brand-yellow transition-all mt-4 flex items-center justify-center gap-2 group">
                                <span>تأكيد الطلب</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};