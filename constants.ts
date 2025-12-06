import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'حمص بيروتي',
    description: 'حمص كريمي مع زيت الزيتون البكر، البقدونس، والصنوبر المحمص.',
    price: 25,
    category: Category.APPETIZER,
    imageUrl: 'https://picsum.photos/id/1080/400/300',
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'تبولة',
    description: 'سلطة بقدونس طازجة مع برغل ناعم، طماطم، ونعناع.',
    price: 28,
    category: Category.APPETIZER,
    imageUrl: 'https://picsum.photos/id/292/400/300',
    isVegetarian: true,
  },
  {
    id: '3',
    name: 'كبة مقلية',
    description: 'كرات من البرغل واللحم المفروم محشوة باللحم والصنوبر.',
    price: 35,
    category: Category.APPETIZER,
    imageUrl: 'https://picsum.photos/id/75/400/300',
  },
  {
    id: '4',
    name: 'مشاوي مشكلة',
    description: 'تشكيلة فاخرة من الكباب، الشيش طاووق، وريش الغنم.',
    price: 95,
    category: Category.MAIN,
    imageUrl: 'https://picsum.photos/id/429/400/300',
  },
  {
    id: '5',
    name: 'كبسة دجاج',
    description: 'أرز بسمتي مطبوخ مع الدجاج والتوابل العربية الخاصة.',
    price: 55,
    category: Category.MAIN,
    imageUrl: 'https://picsum.photos/id/488/400/300',
    isSpicy: true,
  },
  {
    id: '6',
    name: 'منسف أردني',
    description: 'لحم ضأن مطبوخ بالجميد الكركي الأصلي يقدم على خبز شراك وأرز.',
    price: 110,
    category: Category.MAIN,
    imageUrl: 'https://picsum.photos/id/493/400/300',
  },
  {
    id: '7',
    name: 'كنافة نابلسية',
    description: 'كنافة خشنة بالجبنة النابلسية الساخنة والقطر.',
    price: 30,
    category: Category.DESSERT,
    imageUrl: 'https://picsum.photos/id/835/400/300',
    isVegetarian: true,
  },
  {
    id: '8',
    name: 'أم علي',
    description: 'رقائق عجين بالحليب والمكسرات والقشطة.',
    price: 35,
    category: Category.DESSERT,
    imageUrl: 'https://picsum.photos/id/431/400/300',
    isVegetarian: true,
  },
  {
    id: '9',
    name: 'ليمون ونعناع',
    description: 'عصير ليمون طازج مثلج مع أوراق النعناع.',
    price: 20,
    category: Category.DRINK,
    imageUrl: 'https://picsum.photos/id/425/400/300',
    isVegetarian: true,
  },
  {
    id: '10',
    name: 'قهوة عربية',
    description: 'قهوة سعودية تقليدية بالهيل والزعفران تقدم مع التمر.',
    price: 15,
    category: Category.DRINK,
    imageUrl: 'https://picsum.photos/id/766/400/300',
    isVegetarian: true,
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Nadheem" (نديم), a friendly and knowledgeable AI waiter at "Laziz" (لذيذ) restaurant. 
Your goal is to help customers choose dishes from our menu based on their preferences, mood, or dietary restrictions.

Here is our Menu Data in JSON format:
${JSON.stringify(MENU_ITEMS)}

Rules:
1. Only recommend items that are strictly on the menu above.
2. If a user asks for something we don't have (e.g., Sushi, Pizza), politely apologize and suggest the closest alternative from our menu (e.g., "Sorry, we don't have Sushi, but our Vine Leaves are a great bite-sized appetizer!").
3. Be concise, warm, and appetizing in your descriptions.
4. Reply in Arabic unless the user speaks to you in another language.
5. If the user asks about price, mention it clearly in SAR (ريال).
6. Do not make up dishes.
7. Use emojis to make the conversation lively 🥘😋.
`;
