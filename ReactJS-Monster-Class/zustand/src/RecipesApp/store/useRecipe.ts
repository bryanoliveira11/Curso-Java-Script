import { create } from "zustand";
import type { RecipeStore } from "../types";

export const useRecipe = create<RecipeStore>((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
