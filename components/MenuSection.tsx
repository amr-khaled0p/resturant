import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';
import { Flame, Leaf, Plus } from 'lucide-react';

interface MenuSectionProps {
  onAddToOrder: (itemName: string) => void;
}

const MenuItemCard: React.FC<{ item: MenuItem; onAdd: (name: string) => void }> = ({ item, onAdd }) => (
  <div className="group relative bg-white rounded-[2rem] border-2 border-transparent hover:border-brand-black transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-hard">
    
    {/* Image Popping Out */}
    <div className="h-48 w-full relative mb-4 overflow-hidden rounded-t-[2rem]">
       <div className="absolute inset-0 bg-gray-100 rounded-[1.5rem] m-2 group-hover:bg-brand-yellow/20 transition-colors"></div>
       <img
        src={item.imageUrl}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover p-2 rounded-[2rem] transform group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Price Tag Sticker */}
      <div className="absolute top-4 left-4 bg-brand-black text-white px-3 py-1 rounded-lg font-black text-lg transform -rotate-3 group-hover:rotate-0 transition-transform shadow-md z-10">
        {item.price} ريال
      </div>
    </div>

    {/* Content */}
    <div className="px-6 pb-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-black text-brand-black leading-tight">{item.name}</h3>
        <div className="flex gap-1">
            {item.isSpicy && <span title="حار"><Flame size={20} className="text-brand-red fill-brand-red" /></span>}
            {item.isVegetarian && <span title="نباتي"><Leaf size={20} className="text-green-500 fill-green-500" /></span>}
        </div>
      </div>
      
      <p className="text-gray-500 text-sm font-medium mb-4 flex-1">{item.description}</p>
      
      <button 
        onClick={() => onAdd(item.name)}
        className="w-full bg-gray-100 text-brand-black font-black py-3 rounded-xl hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-2 transform active:scale-95"
      >
        <Plus size={20} strokeWidth={3} />
        إضافة للطلب
      </button>
    </div>
  </div>
);

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToOrder }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');

  const filteredItems = activeCategory === 'ALL'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-brand-red font-black tracking-wider uppercase text-lg mb-2">المنيو الجبار</h2>
                <h3 className="text-5xl md:text-6xl font-black text-brand-black">إيش جاي عبالك؟</h3>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
            <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-6 py-2 rounded-full font-bold text-lg border-2 border-black transition-all ${
                activeCategory === 'ALL'
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
                الكل
            </button>
            {Object.values(Category).map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-lg border-2 border-black transition-all ${
                    activeCategory === cat
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} onAdd={onAddToOrder} />
          ))}
        </div>
      </div>
    </section>
  );
};