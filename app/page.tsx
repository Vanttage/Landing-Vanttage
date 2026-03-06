import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import Portfolio from "@/app/components/sections/Portafolio";
import Clients from "@/app/components/sections/Clients";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
    </main>
  );
}
