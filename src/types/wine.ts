export type WineColor = 'red' | 'white' | 'rosé';
export type WineType = 'still' | 'sparkling';
export type WineSweetness = 'dry' | 'semi-dry' | 'brut';

export type FoodCategory =
  | 'red-meat'
  | 'poultry'
  | 'fish'
  | 'seafood'
  | 'pasta'
  | 'cheese'
  | 'salads'
  | 'desserts'
  | 'charcuterie'
  | 'grilled-vegetables'
  | 'asian-cuisine'
  | 'aperitif';

export interface WineCharacteristics {
  body: number;
  acidity: number;
  tannins: number;
  aromas: string[];
}

export interface Wine {
  id: string;
  name: string;
  producer: string;
  vintage: number | null;
  country: string;
  region: string;
  color: WineColor;
  type: WineType;
  sweetness: WineSweetness;
  grape: string;
  bottleCount: number;
  bottleImage: string;
  vivinoRating: number;
  vivinoUrl: string;
  description: string;
  characteristics: WineCharacteristics;
  foodPairings: FoodCategory[];
}
