import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AIWaiter: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'أهلاً بك في مطعم لذيذ! 🥘 أنا نديم، نادلك الذكي. كيف يمكنني مساعدتك اليوم؟ هل تبحث عن شيء محدد أو تريد توصية خاصة؟',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-waiter" className="py-24 bg-orange-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4">
            <Sparkles className="text-primary-500 w-6 h-6 ml-2" />
            <span className="font-bold text-secondary">تجربة ذكية</span>
          </div>
          <h2 className="text-4xl font-extrabold text-secondary mb-4">تحدث مع "نديم"</h2>
          <p className="text-gray-600 text-lg">
            محتار ماذا تطلب؟ أخبر نديم بمزاجك، أو ما تحب، وسيقترح عليك الطبق المثالي!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-secondary p-4 flex items-center shadow-md z-10">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white ml-3 shadow-inner">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold">نديم - النادل الذكي</h3>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></span>
                <span className="text-slate-300 text-xs">متصل الآن</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] md:max-w-[70%] ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      msg.role === 'user'
                        ? 'bg-primary-600 text-white mr-2' // user icon margin
                        : 'bg-white text-primary-600 border border-gray-200 ml-2' // bot icon margin
                    }`}
                  >
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  <div
                    className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary-600 text-white rounded-tr-none'
                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="flex flex-row max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-white text-primary-600 border border-gray-200 ml-2 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center">
                      <Loader2 className="animate-spin text-primary-500 h-5 w-5 ml-2" />
                      <span className="text-gray-500 text-sm">نديم يكتب...</span>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="مثال: أنا نباتي وأحب الأكل الحار، بماذا تنصحني؟"
                className="flex-1 bg-transparent border-none outline-none py-2 text-gray-700 placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-2 rounded-full transition-colors ${
                  input.trim() && !isLoading
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={20} className={isLoading ? 'opacity-0' : ''} />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              مدعوم بواسطة Gemini AI 2.5 Flash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
