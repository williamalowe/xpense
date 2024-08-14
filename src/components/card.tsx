"use client";
import React from "react";
import ExpenseList from "./expense-list";
import { useExpense } from "@/providers/expense-context";

export default function Card() {
  const { expenses } = useExpense();
  console.log(expenses);
  return (
    <div className="relative w-full h-full bg-white rounded-[1rem] border-2 border-black">
      <div className="p-4 flex flex-col gap-y-4 overflow-scroll no-scrollbar">
        <h5 className="bg-sky-400 w-fit px-4 py-1 italic font-bold rounded-md">
          Expense Tracking
        </h5>
        <div className="h-[200px] w-full bg-sky-400 rounded-[1rem]"></div>
        <ExpenseList title="daily" listItems={expenses} />
        <ExpenseList title="weekly" listItems={expenses} />
        <ExpenseList title="monthly" listItems={expenses} />
      </div>
      <div className="-z-10 absolute w-full h-full bg-black/90 top-4 left-4 rounded-[1rem]" />
    </div>
  );
}
