import Container from "@/components/container"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
          <div className="flex-[3]"></div>
          <div className="flex-[2] rounded-bl-[4rem] bg-sky-800"></div>
      </Container>
    </main>
  );
}
