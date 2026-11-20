import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-line-2 bg-paper-2/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left rail: heading stays put conceptually, period column in mono */}
          <Reveal className="lg:col-span-4">
            <h2
              id="experience-heading"
              className="text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              Experience
            </h2>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-2">
              Backend, AI, and ML engineering across Indonesia and Malaysia,
              from internship to production ownership.
            </p>
          </Reveal>

          {/* Right: two-column timeline rows */}
          <ol className="lg:col-span-8">
            {experience.map((job, i) => (
              <Reveal
                as="li"
                key={`${job.org}-${job.period}`}
                delay={i * 0.05}
                className="grid grid-cols-1 gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <p className="font-mono text-xs leading-6 text-ink-3">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-ink">
                    {job.role}
                    <span className="text-accent"> / </span>
                    {job.org}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-ink-3">
                    {job.place}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-sm leading-relaxed text-ink-2"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.55em] h-px w-2 bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
