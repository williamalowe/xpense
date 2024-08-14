"use client";

import { createContext, useContext, useState } from "react";

type Expense = {
  id: number;
  expense: string;
  tag: string;
  value: number;
  occurance: string;
};

type ExpenseContextType = {
  expenses: Expense | any;
  addExpense: (expense: Expense) => void;
};

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export default function ExpenseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expenses, setExpenses] = useState([] as Expense[]);

  const addExpense = (newExpense: Expense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  const context = useContext(ExpenseContext);

  if (context === null) {
    throw new Error("useExpense must be used within a ExpenseContextProvider");
  }

  return context;
}
