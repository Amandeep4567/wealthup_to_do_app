import { Hero, ToDoList } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ToDoList />
    </main>
  );
}
