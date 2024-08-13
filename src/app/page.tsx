import Container from "@/components/container";
import ExpenseList from "@/components/expense-list";
import Results from "@/components/results";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
        <ExpenseList />
        <Results />
      </Container>
    </main>
  );
}
