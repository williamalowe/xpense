"use client"

import { useExpense } from "@/providers/expense-context"

export default function Outputs() {
  const { expenses } = useExpense();

  const evaluateTotal = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].occurance === "daily") {
        total += expenses[i].value * 365
      }
      if (expenses[i].occurance === "weekly") {
        total += expenses[i].value * 52
      }
      if (expenses[i].occurance === "monthly") {
        total += expenses[i].value * 12
      }
    }
    return total;
  }
  const total = evaluateTotal();
  return (
    <div className="p-4 flex flex-col gap-y-2">
      <div className="flex gap-x-2">
        <div className="text-4xl font-bold bg-emerald-400 px-2 rounded-md">${total}</div>
        <div className="italic">Yearly</div>
      </div>
      <div className="flex gap-x-1 mt-2">
        <div className="text-xl font-bold  bg-emerald-400 px-2 rounded-md">${Math.round((total/365) * 100) /100}</div>
        <div className="italic text-xs">Daily</div>
      </div>
      <div className="flex gap-x-1">
        <div className="text-xl font-bold  bg-emerald-400 px-2 rounded-md">${Math.round((total/52) * 100) /100}</div>
        <div className="italic text-xs">Weekly</div>
      </div>
      <div className="flex gap-x-1">
        <div className="text-xl font-bold  bg-emerald-400 px-2 rounded-md">${Math.round((total/12) * 100) /100}</div>
        <div className="italic text-xs">Monthly</div>
      </div>
    </div>
  )
}
