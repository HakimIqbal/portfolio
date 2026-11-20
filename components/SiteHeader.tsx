import { profile } from "@/lib/content";
import ScrollProgress from "./ScrollProgress";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-6xl items-baseline justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          <span className="text-accent">hakim</span>
          <span className="text-ink-3">.dev</span>
        </a>
        <nav aria-label="Primary" className="flex items-baseline gap-3 sm:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase()}`}
              className="link-underline font-mono text-[11px] uppercase tracking-wider text-ink-2 hover:text-ink sm:text-xs sm:tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="hidden font-mono text-xs uppercase tracking-widest text-accent-ink hover:text-accent sm:inline"
          >
            Email
          </a>
        </nav>
        <ScrollProgress />
      </div>
    </header>
  );
}
