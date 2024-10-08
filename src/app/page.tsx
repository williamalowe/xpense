import ExpenseList from "@/components/expense-list";
import GitHubLink from "@/components/github-link";
import Header from "@/components/header";
import Outputs from "@/components/outputs";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-8">
      <Header />
      <div className="h-full w-full bg-zinc-800 rounded-[1rem] flex flex-col overflow-hidden sm:flex-row">
        <div className="flex-1 rounded-br-[2rem] bg-white sm:flex-none">
          <Outputs />
        </div>
        <div className="h-[65vh] bg-zinc-800 text-white p-4 overflow-scroll no-scrollbar sm:h-full sm:flex-1">
          <ExpenseList 
            title="daily"
          />
          <ExpenseList 
            title="weekly"
          />
          <ExpenseList 
            title="monthly"
          />
        </div>
      </div>
      <GitHubLink />
    </main>
  );
}
