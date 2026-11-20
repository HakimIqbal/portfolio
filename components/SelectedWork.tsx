import { projects, secondaryProjects, type Project } from "@/lib/content";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{project.index}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
          {project.year}
        </span>
      </div>
      <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-sm text-ink-2">{project.role}</p>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-2">
        {project.description}
      </p>

      {project.metrics ? (
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {project.metrics.map((m) => (
            <li
              key={m}
              className="font-mono text-xs uppercase tracking-wider text-accent-ink"
            >
              {m}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="media-frame border border-line px-2.5 py-1 font-mono text-xs text-ink-2"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-6 inline-flex w-fit items-center gap-2 font-mono text-sm text-ink hover:text-accent"
        >
          {project.hrefLabel}
          <span aria-hidden="true" className="text-accent">
            &#8599;
          </span>
        </a>
      ) : null}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-line-2 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2
              id="work-heading"
              className="text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              Selected work
            </h2>
            <p className="hidden max-w-xs text-right font-mono text-xs leading-relaxed text-ink-3 sm:block">
              Four systems shipped to real users. Screenshots are the live
              products.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {projects.map((project, i) => {
            const mediaLeft = i % 2 === 0;
            // Vary media column width per row for editorial asymmetry.
            const mediaSpan = i === 0 ? "lg:col-span-7" : "lg:col-span-6";
            const textSpan = i === 0 ? "lg:col-span-5" : "lg:col-span-6";
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <Reveal
                  className={`${mediaSpan} ${mediaLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  {project.image ? (
                    <ParallaxImage {...project.image} priority={i === 0} />
                  ) : null}
                  {project.secondaryImage ? (
                    <div className="mt-4 hidden sm:block">
                      <ParallaxImage {...project.secondaryImage} />
                    </div>
                  ) : null}
                  {project.spec ? (
                    <dl className="border-t border-line-2">
                      {project.spec.map((row) => (
                        <div
                          key={row.k}
                          className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-4"
                        >
                          <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                            {row.k}
                          </dt>
                          <dd className="font-mono text-sm leading-6 text-ink">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={`${textSpan} ${mediaLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <ProjectMeta project={project} />
                </Reveal>
              </article>
            );
          })}
        </div>

        {/* Secondary work: compact hairline list, one real thumbnail */}
        <Reveal className="mt-20 border-t border-line-2 pt-10 sm:mt-28">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-3">
            Also building
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
            {secondaryProjects.map((p) => (
              <li key={p.name} className="border-t border-line pt-4">
                <div className="flex items-baseline justify-between gap-3">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-lg font-medium text-ink hover:text-accent"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-ink">
                      {p.name}
                    </span>
                  )}
                  <span className="font-mono text-xs text-ink-3">{p.stack}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
