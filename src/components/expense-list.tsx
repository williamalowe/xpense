"use client";
import { useExpense } from "@/providers/expense-context";
import NewExpenseForm from "./new-expense-form";
import { BsTrash } from "react-icons/bs";

type Expense = {
  id: number;
  expense: string;
  value: number;
  occurance: string;
};

export default function ExpenseList({ title }: { title: string }) {
  const { expenses, deleteExpense } = useExpense();
  const displayList = expenses.filter(
    (expense: Expense) => expense.occurance === title
  );

  return (
    <div>
      <h3 className="font-bold text-center text-lg">
        <span className="text-emerald-400 capitalize">{title}</span> Expenses
      </h3>
      <ul>
        {displayList.map((expense: Expense) => (
          <li key={expense.id} className="flex items-center gap-x-4 hover:bg-black px-2 rounded-md">
            <button className="text-red-600 hover:scale-110 transition" onClick={() => deleteExpense(expense.id)}><BsTrash /></button>
            <h5 className="text-wrap">{expense.expense}</h5>
            <p className="ml-auto text-sm">
              ${expense.value}
              {title === "daily"
                ? " p/day"
                : title === "weekly"
                ? " p/week"
                : " p/month"}
            </p>
          </li>
        ))}
      </ul>
      {displayList.length === 0 && (
        <p className="text-center text-sm my-2 capitalize">
          No {title} Expenses
        </p>
      )}
      <NewExpenseForm occurance={title} />
    </div>
  );
}
