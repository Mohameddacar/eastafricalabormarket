import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  about: [
    { label: "About", href: "/about" },
    { label: "Human Development", href: "/human-development" },
    { label: "Government Partners", href: "/government-partners" },
  ],
  programs: [
    { label: "Services", href: "/services" },
    { label: "Training", href: "/training" },
    { label: "Partnerships", href: "/partnerships" },
  ],
  research: [
    { label: "Research", href: "/research" },
    { label: "Events", href: "/events" },
    { label: "Conferences", href: "/conferences" },
  ],
  contact: [
    { label: "Registration", href: "/registration" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image
                  src="/logo.png"
                  alt="East Africa Labor Market logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-primary">
                  East Africa Labor Market
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  Labor Market Intelligence
                </span>
              </div>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              A regional platform advancing labor market research, training, and
              partnerships that strengthen employment systems across East
              Africa.
            </p>
          </div>

          <div className="grid gap-6 text-xs text-muted-foreground sm:grid-cols-2 md:grid-cols-4 sm:text-sm">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                About
              </h3>
              <ul className="space-y-2">
                {footerLinks.about.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Programs
              </h3>
              <ul className="space-y-2">
                {footerLinks.programs.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Research
              </h3>
              <ul className="space-y-2">
                {footerLinks.research.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Contact
              </h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-4 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 East Africa Labor Market. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-border bg-background p-1.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="rounded-full border border-border bg-background p-1.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="rounded-full border border-border bg-background p-1.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

