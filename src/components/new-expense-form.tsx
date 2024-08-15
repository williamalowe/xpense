"use client";
const { v4: uuidv4 } = require("uuid");
import { useExpense } from "@/providers/expense-context";
import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

export default function NewExpenseForm({ occurance }: { occurance: string }) {
  const { addExpense } = useExpense();
  const [showForm, setShowForm] = useState(false);
  const [newExpenseName, setNewExpenseName] = useState<string>("");
  const [newExpenseValue, setNewExpenseValue] = useState<number>(0.0);
  const [showError, setShowError] = useState(false);

  const resetFields = () => {
    setShowForm(false);
    setNewExpenseName("");
    setNewExpenseValue(0);
    setShowError(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newExpense = {
      id: uuidv4(),
      expense: newExpenseName,
      value: Math.round(newExpenseValue * 100) / 100,
      occurance: occurance,
    };

    if (newExpense.expense === "" || newExpense.value < 1) {
      setShowError(true);
    } else {
      addExpense(newExpense);
      resetFields();
    }
  };

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center py-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-4 h-4 flex items-center justify-center bg-emerald-400 rounded text-black"
      >
        {showForm ? <BsDash /> : <BsPlus />}
      </button>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full rounded text-black flex flex-col gap-y-2"
        >
          <div className="flex">
            <label className="bg-emerald-400 px-2 rounded-l-md border border-emerald-400 font-bold">
              Expense
            </label>
            <input
              required
              type="text"
              className="border border-emerald-400 px-2 rounded-r-md w-[100%]"
              value={newExpenseName}
              onChange={(e) => setNewExpenseName(e.target.value)}
              placeholder={
                occurance === "daily"
                  ? "Morning Coffee"
                  : occurance === "weekly"
                  ? "Grocery Shopping"
                  : "Rent"
              }
            />
          </div>
          <div className="flex">
            <div className="flex">
              <label className="bg-emerald-400 px-2 rounded-l-md border border-emerald-400 font-bold">
                $
              </label>
              <input
                required
                type="number"
                step={0.01}
                className="border border-emerald-400 px-2 rounded-r-md w-[25%]"
                value={newExpenseValue}
                min={0}
                onChange={(e) => setNewExpenseValue(e.target.valueAsNumber)}
              />
            </div>
            <button
              className="ml-auto px-2 bg-emerald-400 rounded font-bold"
              type="submit"
            >
              Add
            </button>
          </div>
          {showError && (
            <p className="text-red-600 text-sm text-center">
              Oops! Something went wrong. Please make sure your inputs are
              valid.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
