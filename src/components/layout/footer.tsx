import Link from "next/link";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-heading text-lg font-bold text-white">
                SJ
              </div>
              <span className="font-heading text-lg font-semibold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              AI/ML Intern &amp; Full Stack Developer crafting intelligent
              digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-surface-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-surface-200">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/swastikjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-800 text-muted transition-all hover:border-brand-500/50 hover:text-brand-400"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/swastikjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-800 text-muted transition-all hover:border-brand-500/50 hover:text-brand-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/swastikjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-800 text-muted transition-all hover:border-brand-500/50 hover:text-brand-400"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-800 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Built with{" "}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
          </p>
          <p className="text-sm text-muted">
            Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
