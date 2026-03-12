"use client";

import { motion } from "framer-motion";

import { homeStats } from "@/data/stats";
import { StatCard } from "@/components/cards/stat-card";

export function StatsSection() {
  return (
    <section className="space-y-4">
      <header className="space-y-1">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          Impact across the region
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Programs and partnerships that translate directly into better
          employment outcomes.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {homeStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </motion.div>
    </section>
  );
}

