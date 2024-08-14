
type Expense = {
  id: number;
  expense: string;
  value: number;
  occurance: string;
};

export default function ExpenseList({ title, expenses }: {
  title: string,
  expenses: Expense[];
}) {
  return (
    <div>
      <h3 className="font-bold text-center text-lg"><span className="text-emerald-400">{title}</span> Expenses</h3>
      <ul>
        <li className="flex items-center gap-x-4">
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
        </li>
      </ul>
    </div>
  )
}
