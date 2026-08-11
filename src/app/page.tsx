import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
