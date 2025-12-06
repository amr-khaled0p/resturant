export enum Category {
  APPETIZER = 'مقبلات',
  MAIN = 'أطباق رئيسية',
  DESSERT = 'حلويات',
  DRINK = 'مشروبات'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // In SAR or local currency
  category: Category;
  imageUrl: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}