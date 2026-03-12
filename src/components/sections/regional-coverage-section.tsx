"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const COUNTRIES = [
  "Kenya",
  "Ethiopia",
  "Somalia",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Djibouti",
];

export function RegionalCoverageSection() {
  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Regional Coverage
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          We work across East Africa to strengthen labor markets and workforce development.
        </p>
      </motion.header>
      <motion.div
        className="section-card flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {COUNTRIES.map((country) => (
          <span
            key={country}
            className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <MapPin className="h-4 w-4 text-accent" />
            {country}
          </span>
        ))}
      </motion.div>
      <div className="relative aspect-[2/1] max-w-2xl overflow-hidden rounded-2xl bg-muted/50">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <span className="text-sm">East Africa map</span>
        </div>
      </div>
    </section>
  );
}
