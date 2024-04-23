import Hero from "@/components/styled/hero";
import Partners from "@/components/styled/partners";
import Services from "@/components/styled/services";
import Intro from "@/components/styled/intro";
import Process from "@/components/styled/process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Partners />
    </main>
  );
}
