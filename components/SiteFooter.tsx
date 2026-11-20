import { profile } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-xs text-ink-3 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p>
          {profile.name} / {profile.location}
        </p>
        <p>
          Built with Next.js. Static export on Cloudflare Pages.{" "}
          <a href="#top" className="link-underline text-ink-2 hover:text-accent">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
