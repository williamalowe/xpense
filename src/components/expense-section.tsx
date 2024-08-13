"use client";
import { useState } from "react";

export default function ExpenseSection({
  header,
  placeholder,
}: {
  header: string;
  placeholder: string;
}) {
  const [expenses, setExpenses] = useState([{ name: "test", value: 0 }]);
  const [showForm, setShowForm] = useState(false);
  const [newExpenseName, setNewExpenseName] = useState("");
  const [newExpenseValue, setNewExpenseValue] = useState(0);

  console.log(newExpenseName, newExpenseValue);

  return (
    <div>
      <h3 className="text-center text-2xl font-bold tracking-wider">
        {header} Expenses
      </h3>
      {expenses && (
        <ul className="mt-4">
          {expenses.map((expense) => (
            <li key={expense.name} className="flex">
              <h5 className="font-bold">{expense.name}</h5>
              <p className="ml-auto italic">
                ${expense.value}{" "}
                <span className="text-xs">
                  {header === "Daily"
                    ? "p/day"
                    : header === "Weekly"
                    ? "p/week"
                    : "p/month"}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShowForm(!showForm)}>click</button>
      {showForm && (
        <form className="flex flex-col gap-y-1">
          <div className="flex items-center">
            <label className="border-2 border-sky-800 bg-sky-800 px-2 rounded-l-md text-white font-bold tracking-wider">
              Expense
            </label>
            <input
              type="text"
              className="flex-1 border-2 border-sky-800 rounded-r-md pl-1"
              placeholder={placeholder}
              value={newExpenseName}
              onChange={(e) => setNewExpenseName(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label className="border-2 border-sky-800 bg-sky-800 px-2 rounded-l-md text-white font-bold tracking-wider">
              $
            </label>
            <input
              type="number"
              className="w-24 border-2 border-sky-800 rounded-r-md pl-1"
              placeholder="0.00" 
              value={newExpenseValue}
              onChange={(e) => setNewExpenseValue(e.target.valueAsNumber)}
              />
          </div>
          <button className="py-1 border-2 border-sky-800 text-sky-800/80 uppercase font-bold tracking-wider text-xs rounded-md hover:bg-sky-800 hover:text-white transition">Add Expense</button>
        </form>
      )}
    </div>
  );
}
