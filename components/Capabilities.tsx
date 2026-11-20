import { capabilities, languages } from "@/lib/content";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-line-2"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <h2
            id="capabilities-heading"
            className="text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            Capabilities
          </h2>
        </Reveal>

        {/* Grouped lists, two columns, hairlines. No cards, no badges. */}
        <div className="mt-12 grid grid-cols-1 gap-x-14 sm:grid-cols-2">
          {capabilities.map((group, i) => (
            <Reveal
              key={group.discipline}
              delay={(i % 2) * 0.06}
              className="border-t border-line py-6"
            >
              <div className="grid grid-cols-[8rem_1fr] gap-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent-ink">
                  {group.discipline}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-base leading-snug text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 border-t border-line-2 pt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[8rem_1fr]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-ink">
              Languages
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-base text-ink">
                  {lang.name}
                  <span className="ml-2 font-mono text-xs text-ink-3">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
