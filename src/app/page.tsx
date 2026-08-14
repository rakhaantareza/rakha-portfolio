import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="lg:grid lg:min-h-svh lg:grid-rows-[auto_1fr]">
          <Navigation />
          <Hero />
        </div>
        <SelectedWork />
        <Capabilities />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
