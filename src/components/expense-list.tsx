"use client";
import { useState } from "react";
import ExpenseSection from "./expense-section";

interface expenseItem {
  name: string;
  value: number;
}

export default function ExpenseList() {
  const [dailyExpenses, setDailyExpenses] = useState<expenseItem[]>(() => []);
  const [weeklyExpenses, setWeeklyExpenses] = useState<expenseItem[]>(() => []);
  const [monthlyExpenses, setMonthlyExpenses] = useState<expenseItem[]>(
    () => []
  );

  return (
    <div className="flex-[3] overflow-scroll no-scrollbar">
      <div className="flex py-4 flex-col gap-y-8">
        <ExpenseSection
          header="Daily"
          placeholder="Coffee Costs"
          expenseList={dailyExpenses}
          handleAdd={(newExpense: expenseItem) =>
            setDailyExpenses([...dailyExpenses, newExpense])
          }
        />
        <ExpenseSection
          header="Weekly"
          placeholder="Grocery Costs"
          expenseList={weeklyExpenses}
          handleAdd={(newExpense: expenseItem) =>
            setWeeklyExpenses([...weeklyExpenses, newExpense])
          }
        />
        <ExpenseSection
          header="Monthly"
          placeholder="Rent Costs"
          expenseList={monthlyExpenses}
          handleAdd={(newExpense: expenseItem) =>
            setMonthlyExpenses([...monthlyExpenses, newExpense])
          }
        />
      </div>
    </div>
  );
}
