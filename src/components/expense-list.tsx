import ExpenseSection from "./expense-section";

export default function ExpenseList() {
  return (
    <div className="flex-[3] overflow-scroll no-scrollbar">
      <div className="flex py-4 flex-col gap-y-4">
        <ExpenseSection header="Daily" placeholder="Coffee Costs"/>
        <ExpenseSection header="Weekly" placeholder="Grocery Costs"/>
        <ExpenseSection header="Monthly" placeholder="Rent Costs"/>
      </div>
    </div>
  );
}
