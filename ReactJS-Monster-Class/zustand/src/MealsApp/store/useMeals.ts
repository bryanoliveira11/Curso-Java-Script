import { create } from "zustand";
import type { StoreState } from "../types";

export const useMeals = create<StoreState>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals) => set({ meals }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
