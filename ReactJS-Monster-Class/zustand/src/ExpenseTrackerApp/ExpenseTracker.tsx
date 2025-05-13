import { useState } from "react";
import { useExpense } from "./store/useExpense";
import { ToastContainer, toast } from "react-toastify";
import { RiChatDeleteLine } from "react-icons/ri";

export default function ExpenseTracker() {
  const { expenses, addExpense, removeExpense } = useExpense();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const resetFields = () => {
    setDescription("");
    setAmount("");
  };

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") {
      toast.error("Fields are Empty");
      return;
    }
    addExpense({
      id: Date.now(),
      description,
      amount: Number(amount),
    });
    toast.success("Expense Added");
    resetFields();
  };

  const handleRemoveExpense = (id: number) => {
    removeExpense(id);
    toast.success("Expense Removed");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
  bg-gradient-to-r from-purple-400 to-blue-500"
    >
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Expense Tracker
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={description}
            placeholder="Expense Description"
            className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-purple-500 text-black
            transition duration-200"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            min={1}
            value={amount}
            placeholder="Expense Amount"
            className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-purple-500 text-black
            transition duration-200"
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <button className="btn btn-primary mt-2" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>

        <ul className="space-y-4 mb-6">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between
                items-center bg-purple-100 p-4 rounded-lg shadow-sm 
                transition-transform transform hover:scale-105"
            >
              <span className="text-gray-800 font-semibold capitalize">
                {expense.description} : $ {expense.amount.toFixed(2)}
              </span>
              <button
                className="btn btn-neutral"
                title="Remove Item"
                onClick={() => handleRemoveExpense(expense.id)}
              >
                <RiChatDeleteLine size={20} />
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-purple-700">
            Total Expenses :{" "}
            <span className="text-purple-600">
              ${" "}
              {expenses
                .reduce((total, expense) => total + expense.amount, 0)
                .toFixed(2)}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
