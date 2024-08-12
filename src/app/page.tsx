import Container from "@/components/container"
import Results from "@/components/results";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
          <div className="flex-[3]"></div>
          <Results />
      </Container>
    </main>
  );
}
