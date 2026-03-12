"use client";

import { motion } from "framer-motion";

import { trainings } from "@/data/training";
import { TrainingCard } from "@/components/cards/training-card";

export function FeaturedTrainingsSection() {
  const featured = trainings.filter((t) => t.isFeatured).slice(0, 3);

  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Professional Training Programs
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Develop skills and knowledge in labor market analysis and workforce development.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {featured.map((training) => (
          <TrainingCard key={training.id} training={training} />
        ))}
      </motion.div>
    </section>
  );
}

