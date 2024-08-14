
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
      <ul></ul>
    </div>
  )
}
