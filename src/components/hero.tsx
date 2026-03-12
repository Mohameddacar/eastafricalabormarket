"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const CAROUSEL_SLIDES = [
  {
    id: "s1",
    title: "Labor Market Research",
    image: "/images/hero-carousel/research.jpg",
    alt: "Labor market research and data analysis",
    gradient: "from-primary/90 to-secondary/80",
  },
  {
    id: "s2",
    title: "Workforce Training Programs",
    image: "/images/hero-carousel/training.jpg",
    alt: "Professional workforce training session",
    gradient: "from-secondary/90 to-primary/70",
  },
  {
    id: "s3",
    title: "International Conferences",
    image: "/images/hero-carousel/conferences.jpg",
    alt: "International labor market conference",
    gradient: "from-accent/80 to-primary/80",
  },
  {
    id: "s4",
    title: "Human Development Initiatives",
    image: "/images/hero-carousel/human-dev.jpg",
    alt: "Human development and inclusion programs",
    gradient: "from-primary/80 to-accent/70",
  },
];

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-24 sm:pt-28">
      {/* Full-width two-column layout */}
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16 lg:px-8">
        {/* Left: Text + CTAs */}
        <div className="space-y-6">
          <motion.h1
            className="font-heading text-balance text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Advancing Labor Market Intelligence Across East Africa
          </motion.h1>
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          >
            Research • Training • Partnerships
          </motion.p>
          <motion.p
            className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            East Africa Labor Market is a regional platform dedicated to
            strengthening employment systems, workforce development, and labor
            market intelligence across East Africa. Through research, training,
            and strategic partnerships, we empower governments, institutions, and
            organizations with the insights needed to build sustainable and
            inclusive economies.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 text-sm font-semibold"
            >
              <Link href="/human-development">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary/20 bg-background px-6 text-sm font-semibold hover:bg-secondary/20"
            >
              <Link href="/registration">Register Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Carousel */}
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/50 shadow-xl ring-1 ring-border/60 lg:aspect-[4/3]"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {/* Animated gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
            aria-hidden
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={CAROUSEL_SLIDES[slideIndex].id}
              className={`relative flex h-full w-full items-end bg-gradient-to-br ${CAROUSEL_SLIDES[slideIndex].gradient} p-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-semibold text-white drop-shadow-sm sm:text-2xl">
                {CAROUSEL_SLIDES[slideIndex].title}
              </span>
            </motion.div>
          </AnimatePresence>
          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === slideIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
