import type { FoodCategory } from '@/types/wine';

export interface FoodCategoryInfo {
  id: FoodCategory;
  label: string;
  labelRu: string;
  emoji: string;
}

export const foodCategories: FoodCategoryInfo[] = [
  { id: 'red-meat', label: 'Red Meat', labelRu: 'Красное мясо', emoji: '🥩' },
  { id: 'poultry', label: 'Poultry', labelRu: 'Птица', emoji: '🍗' },
  { id: 'fish', label: 'Fish', labelRu: 'Рыба', emoji: '🐟' },
  { id: 'seafood', label: 'Seafood', labelRu: 'Морепродукты', emoji: '🦐' },
  { id: 'pasta', label: 'Pasta', labelRu: 'Паста', emoji: '🍝' },
  { id: 'cheese', label: 'Cheese', labelRu: 'Сыр', emoji: '🧀' },
  { id: 'salads', label: 'Salads', labelRu: 'Салаты', emoji: '🥗' },
  { id: 'desserts', label: 'Desserts', labelRu: 'Десерты', emoji: '🍰' },
  { id: 'charcuterie', label: 'Charcuterie', labelRu: 'Мясная нарезка', emoji: '🥓' },
  { id: 'grilled-vegetables', label: 'Grilled Vegetables', labelRu: 'Овощи гриль', emoji: '🌽' },
  { id: 'asian-cuisine', label: 'Asian Cuisine', labelRu: 'Азиатская кухня', emoji: '🍜' },
  { id: 'aperitif', label: 'Aperitif', labelRu: 'Аперитив', emoji: '🥂' },
];
