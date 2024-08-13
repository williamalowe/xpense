"use client";
import { ChangeEvent, useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

interface expenseItem {
  name: string;
  value: number;
}

export default function ExpenseSection({
  header,
  placeholder,
}: {
  header: string;
  placeholder: string;
}) {
  const [expenses, setExpenses] = useState<expenseItem[]>(() => []);
  const [showForm, setShowForm] = useState(false);
  const [newExpenseName, setNewExpenseName] = useState("");
  const [newExpenseValue, setNewExpenseValue] = useState(0);
  const [showError, setShowError] = useState(false);

  const reset = () => {
    setNewExpenseName("");
    setNewExpenseValue(0);
    setShowError(false);
    setShowForm(false);
  };

  // const addNewExpense = (e: ChangeEvent<HTMLInputElement>) => {
  const addNewExpense = (e: any) => {
    e.preventDefault();
    const newExpense: expenseItem = {
      name: newExpenseName,
      value: newExpenseValue,
    };
    if (newExpense.name !== "" && newExpenseValue > 0) {
      setExpenses([...expenses, newExpense]);
      reset();
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center text-2xl font-bold tracking-wider">
        {header} Expenses
      </h3>
      {expenses && (
        <ul className="mt-4 w-full px-2">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="px-6 rounded-md flex gap-x-12 hover:bg-sky-200"
            >
              <h5 className="">{expense.name}</h5>
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
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-6 h-6 rounded-full bg-sky-800 text-white text-2xl flex items-center justify-center"
      >
        {showForm ? <BsDash /> : <BsPlus />}
      </button>
      {showForm && (
        <form className="flex flex-col gap-y-1 mt-4 items-center">
          <div className="flex gap-x-2">
            <div className="flex items-center">
              <label className="uppercase border-2 border-sky-800 bg-sky-800 px-2 rounded-l-md text-white font-bold tracking-wider">
                Expense
              </label>
              <input
                type="text"
                className="w-48 flex-1 border-2 border-sky-800 rounded-r-md pl-1"
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
          </div>
          <button
            onClick={addNewExpense}
            className="w-full py-1 border-2 border-sky-800 text-sky-800/80 uppercase font-bold tracking-wider text-xs rounded-md hover:bg-sky-800 hover:text-white transition"
          >
            Add Expense
          </button>
          {showError && (
            <p className="max-w-[200px] text-xs text-center">
              Oops something has gone wrong! Please esnure that you had included
              a name for your expense, and the value is greater than 0.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
