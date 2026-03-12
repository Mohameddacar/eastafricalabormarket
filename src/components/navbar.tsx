"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/events", label: "Events" },
  { href: "/conferences", label: "Conferences" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur" : "bg-background/80"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="East Africa Labor Market logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden items-center justify-center md:flex">
          <ul className="flex items-center gap-4 text-xs font-medium lg:gap-6 lg:text-sm">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      active
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden rounded-full bg-accent px-5 py-2 text-xs font-semibold tracking-wide text-accent-foreground shadow-sm transition-colors duration-200 hover:bg-accent/90 sm:inline-flex"
          >
            <Link href="/registration">Register Now</Link>
          </Button>

          <Sheet>
            <SheetTrigger>
              <Button
                variant="outline"
                size="icon"
                className="flex h-9 w-9 items-center justify-center rounded-full border-border bg-background/80 text-foreground shadow-sm transition-colors duration-200 hover:bg-muted md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-72 flex-col gap-6">
              <SheetHeader className="flex flex-row items-center gap-3 space-y-0 text-left">
                <div className="relative h-8 w-8">
                  <Image
                    src="/logo.png"
                    alt="East Africa Labor Market logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </SheetHeader>
              <nav className="flex flex-1 flex-col gap-3 text-sm">
                {NAV_ITEMS.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <Button className="w-full rounded-full bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-accent-foreground hover:bg-accent/90">
                <Link href="/registration">Register Now</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

