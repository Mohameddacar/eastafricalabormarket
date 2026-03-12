"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { featuredConferences } from "@/data/conferences";
import { Button } from "@/components/ui/button";

export function ConferencesCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % featuredConferences.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Global Conferences
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Join international conferences on workforce development and labor market policy.
        </p>
      </motion.header>
      <div className="relative overflow-hidden rounded-2xl bg-muted/50 ring-1 ring-border/60">
        <AnimatePresence mode="wait">
          <motion.div
            key={featuredConferences[index].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-8"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
                {featuredConferences[index].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {featuredConferences[index].description}
              </p>
              <dl className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{featuredConferences[index].speakers} speakers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{featuredConferences[index].days} days</span>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="sm" variant="outline" className="rounded-full">
                  <Link href={featuredConferences[index].href}>Agenda</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full">
                  <Link href="/registration">Register</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-2 pb-4">
          {featuredConferences.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Conference ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
