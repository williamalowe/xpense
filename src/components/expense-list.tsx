"use client";
import { useExpense } from "@/providers/expense-context";
import NewExpenseForm from "./new-expense-form";

type Expense = {
  id: number;
  expense: string;
  value: number;
  occurance: string;
};

export default function ExpenseList({ title }: { title: string }) {
  const { expenses } = useExpense();
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
          <li key={expense.id} className="flex items-center gap-x-4">
            <h5>{expense.expense}</h5>
            <p className="ml-auto text-sm">
              ${expense.value}
              {title === "Daily"
                ? " p/day"
                : title === "Weekly"
                ? " p/week"
                : " p/month"}
            </p>
          </li>
        ))}
        {/* <li className="flex items-center gap-x-4">
          <h5>Coffee</h5>
          <p className="ml-auto text-sm">
            $5.00
            {
              title === "Daily" ? " p/day" : title === "Weekly" ? " p/week" : " p/month"
            }
          </p>
        </li>
        <li className="flex items-center gap-x-4">
          <h5>Coffee</h5>
          <p className="ml-auto text-sm">
            $5.00
            {
              title === "Daily" ? " p/day" : title === "Weekly" ? " p/week" : " p/month"
            }
          </p>
        </li> */}
      </ul>
      {
        displayList.length === 0 && <p className="text-center text-sm my-2">No Expenses</p>
      }
      <NewExpenseForm 
        occurance={title}
      />
    </div>
  );
}
