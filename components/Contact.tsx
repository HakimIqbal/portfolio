import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line-2 bg-paper-2/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2
              id="contact-heading"
              className="max-w-lg text-3xl font-medium leading-tight tracking-tight text-ink sm:text-5xl"
            >
              Hiring for backend or AI engineering?{" "}
              <span className="text-accent">Let&apos;s talk.</span>
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-8 inline-block break-all font-mono text-lg text-ink hover:text-accent sm:text-2xl"
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-2">
            <dl className="border-t border-line-2">
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                  GitHub
                </dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-mono text-sm text-ink hover:text-accent"
                  >
                    {profile.githubLabel}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-mono text-sm text-ink hover:text-accent"
                  >
                    {profile.linkedinLabel}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                  Location
                </dt>
                <dd className="font-mono text-sm text-ink">
                  {profile.location} ({profile.timezone})
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-3">
                  Open to
                </dt>
                <dd className="font-mono text-sm text-ink">
                  Remote backend / AI engineering roles
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
