"use client";

import { useExpense } from "@/providers/expense-context";

export default function Outputs() {
  const { expenses } = useExpense();

  const evaluateTotal = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].occurance === "daily") {
        total += expenses[i].value * 365;
      }
      if (expenses[i].occurance === "weekly") {
        total += expenses[i].value * 52;
      }
      if (expenses[i].occurance === "monthly") {
        total += expenses[i].value * 12;
      }
    }
    return total;
  };
  const total = evaluateTotal();
  return (
    <div className="p-4 flex flex-col">
      <h3 className="font-bold text-2xl hover:italic hover:translate-x-4 transition"><span className="text-4xl text-emerald-600">${total}</span> Yearly</h3>
      <h5 className="font-bold text-xl opacity-60 hover:opacity-100 hover:italic hover:translate-x-4 transition"><span className="text-2xl text-emerald-600">${Math.round((total / 12) * 100) / 100}</span> Monthly</h5>
      <h5 className="font-bold text-xl opacity-60 hover:opacity-100 hover:italic hover:translate-x-4 transition"><span className="text-2xl text-emerald-600">${Math.round((total / 52) * 100) / 100}</span> Weekly</h5>
      <h5 className="font-bold text-xl opacity-60 hover:opacity-100 hover:italic hover:translate-x-4 transition"><span className="text-2xl text-emerald-600">${Math.round((total / 365) * 100) / 100}</span> Daily</h5>
    </div>
  );
}
