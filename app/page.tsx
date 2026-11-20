import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
