import ExpenseList from "@/components/expense-list";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center p-8">
      <div className="h-full w-full bg-zinc-800 rounded-[1rem] flex flex-col overflow-hidden">
        <div className="flex-1 rounded-br-[2rem] bg-white"></div>
        <div className="h-[65vh] bg-zinc-800 text-white p-4 overflow-scroll no-scrollbar">
          <ExpenseList 
            title="Daily"
          />
          <ExpenseList 
            title="Weekly"
          />
          <ExpenseList 
            title="Monthly"
          />
        </div>
      </div>
    </main>
  );
}
