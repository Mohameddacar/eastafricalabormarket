import Link from "next/link";

import { Button } from "@/components/ui/button";

type CTASectionProps = {
  headline: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  headline,
  description,
  primaryLabel = "Explore Programs",
  primaryHref = "/human-development",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`rounded-2xl bg-primary/5 px-6 py-10 ring-1 ring-primary/10 sm:px-8 sm:py-12 ${className}`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          {headline}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6 font-semibold">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary/30 bg-background px-6 font-semibold hover:bg-primary/5"
          >
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
