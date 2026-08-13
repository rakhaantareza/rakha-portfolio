import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}
