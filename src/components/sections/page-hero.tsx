import Image from "next/image";

type PageHeroProps = {
  headline: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  headline,
  description,
  imageSrc = "/images/about-hero.jpg",
  imageAlt = "African policymakers and experts reviewing labor market data",
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`grid gap-8 lg:grid-cols-[1fr_minmax(0,1fr)] lg:items-center lg:gap-12 ${className}`}
    >
      <div className="space-y-4">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.5rem]">
          {headline}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/50 shadow-md ring-1 ring-border/60 lg:aspect-auto lg:min-h-[280px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </section>
  );
}
