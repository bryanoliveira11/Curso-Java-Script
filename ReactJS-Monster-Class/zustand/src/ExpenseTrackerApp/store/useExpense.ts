import { create } from "zustand";
import type { ExpenseStore } from "../types";

export const useExpense = create<ExpenseStore>((set) => ({
  expenses: [],

  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));
