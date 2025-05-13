export interface Expense {
  id: number;
  description: string;
  amount: number;
}

export interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}