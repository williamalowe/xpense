"use client";
import { useExpense } from "@/providers/expense-context";
import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

export default function NewExpenseForm() {
  const {addExpense} = useExpense();
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <button 
      onClick={() => setShowForm(!showForm)}
      className="mb-4 w-4 h-4 flex items-center justify-center bg-emerald-400 rounded text-black" 
      >
        {
          showForm ? <BsDash /> : <BsPlus />
        }
      </button>
      {
        showForm &&
        <form onSubmit={(e) => e.preventDefault} className="w-full bg-white rounded text-black p-2 flex flex-col gap-y-2">
          <div className="flex">
            <label className="bg-emerald-400 px-2 rounded-l-md border border-emerald-400">Expense</label>
            <input type="text" className="border border-emerald-400 px-2 rounded-r-md w-[100%]" />
          </div>
          <div className="flex">
          <div className="flex">
            <label className="bg-emerald-400 px-2 rounded-l-md border border-emerald-400">$</label>
            <input type="number" className="border border-emerald-400 px-2 rounded-r-md w-[25%]" />
          </div>
            <button className="ml-auto px-2 bg-emerald-400 rounded">Add</button>
          </div>
        </form>
      }
    </div>
  );
}
