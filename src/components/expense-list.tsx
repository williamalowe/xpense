
type Expense = {
  id: number;
  expense: string;
  tag: string;
  value: number;
  occurance: string;
};

export default function ExpenseList({ title, listItems }: {
  title: string,
  listItems: Expense[]
}) {
  return (
    <section>
      <h3 className="font-bold text-lg uppercase"><span className="text-sky-600">{title}</span> Expenses</h3>
      <ul>
        {
          listItems.map((item) => 
          <li key={item.id} className="flex items-center gap-x-4">
          <h5>{item.expense}</h5>
          <p className="ml-auto text-sm">${item.value}</p>
          </li>
        )
        }
        <li className="flex items-center gap-x-4">
          <h5>Rent</h5>
          <p className="ml-auto text-sm">$1200 p/month</p>
        </li>
        <li className="flex items-center gap-x-4">
          <h5>Rent</h5>
          <p className="ml-auto text-sm">$1200 p/month</p>
        </li>
        <li className="flex items-center gap-x-4">
          <h5>Rent</h5>
          <p className="ml-auto text-sm">$1200 p/month</p>
        </li>
        <li className="flex items-center gap-x-4">
          <h5>Rent</h5>
          <p className="ml-auto text-sm">$1200 p/month</p>
        </li>
      </ul>
    </section>
  );
}
