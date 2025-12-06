import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="reservation" className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 hidden lg:block"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div>
            <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-2">حجز الطاولات</h2>
            <h3 className="text-4xl font-extrabold text-secondary sm:text-5xl mb-6">
              استمتع بتجربة<br/>
              <span className="text-primary-600">عشاء فاخرة</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              سواء كانت مناسبة خاصة، عشاء عمل، أو مجرد تجمع عائلي، نحن نضمن لك أفضل طاولة وأفضل خدمة. احجز الآن وتجنب الانتظار.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600 ml-4">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">حجز مرن</h4>
                  <p className="text-sm text-gray-500">يمكنك تعديل موعد الحجز قبل ساعتين</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-accent-light p-3 rounded-full text-accent ml-4">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">مجموعات وعائلات</h4>
                  <p className="text-sm text-gray-500">طاولات مخصصة للعائلات والمجموعات الكبيرة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-600">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">تم استلام طلبك!</h3>
                <p className="text-gray-500 mb-6">سنتصل بك قريباً لتأكيد الحجز.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-600 font-bold hover:underline"
                >
                  حجز طاولة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">أكمل بيانات الحجز</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                    <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none" placeholder="الاسم الكريم" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input required type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none" placeholder="05xxxxxxxx" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">التاريخ</label>
                    <div className="relative">
                      <input required type="date" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الوقت</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                      <input required type="time" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">عدد الضيوف</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none">
                    <option>شخصين</option>
                    <option>3 أشخاص</option>
                    <option>4 أشخاص</option>
                    <option>5 أشخاص</option>
                    <option>6 - 10 أشخاص</option>
                    <option>أكثر من 10 (وليمة)</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                  تأكيد الحجز
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};