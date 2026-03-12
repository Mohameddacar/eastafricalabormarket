"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Our Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact us" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11">
            <Image
              src="/east-africa-labor-market-logo.png"
              alt="East Africa Labor Market logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-primary sm:text-base">
              East Africa
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent sm:text-xs">
              Labor Market
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="lg"
            className="hidden rounded-full bg-accent px-5 text-[13px] font-semibold tracking-wide text-accent-foreground shadow-sm hover:bg-accent/90 sm:inline-flex"
          >
            <Link href="/shaqadoon">Shaqadoon</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            className="inline-flex rounded-full border-accent/40 bg-secondary/60 text-primary hover:border-accent hover:bg-secondary md:hidden"
            aria-label="Open navigation"
          >
            <Link href="/contact">
              <span className="px-2 text-xs font-semibold">Contact</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

