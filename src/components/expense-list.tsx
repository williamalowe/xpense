import ExpenseSection from "./expense-section";

export default function ExpenseList() {
  return (
    <div className="flex-[3]">
      <div className="px-12 py-4 flex flex-col gap-y-4">
        <ExpenseSection header="Daily" placeholder="Coffee Costs"/>
        <ExpenseSection header="Weekly" placeholder="Grocery Costs"/>
        <ExpenseSection header="Monthly" placeholder="Rent Costs"/>
      </div>
    </div>
  );
}
