export interface Meals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface StoreState {
  meals: Meals[];
  searchQuery: string;
  setMeals: (meals: Meals[]) => void;
  setSearchQuery: (query: string) => void;
}
