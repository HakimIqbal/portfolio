import { facts, profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left: headline, asymmetric 7/12 */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-3">
              {profile.name} / {profile.location} ({profile.timezone})
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl"
            >
              Backend systems and AI pipelines,{" "}
              <span className="text-accent">built to hold up</span> in
              production.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
              {profile.subtext}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="media-frame inline-block whitespace-nowrap bg-accent px-6 py-3 font-mono text-sm font-medium text-paper transition-colors hover:bg-accent-ink"
              >
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="media-frame inline-block whitespace-nowrap border border-line-2 px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-ink"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: compact fact sheet, 5/12, hairline rows */}
        <div className="lg:col-span-5 lg:pt-1">
          <Reveal delay={0.2}>
            <dl className="border-t border-line-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                    {fact.label}
                  </dt>
                  <dd>
                    <span className="block text-sm font-medium text-ink">
                      {fact.value}
                    </span>
                    {fact.note ? (
                      <span className="mt-1 block text-sm leading-snug text-ink-3">
                        {fact.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
