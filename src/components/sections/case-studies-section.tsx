"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { caseStudies } from "@/data/services";

export function CaseStudiesSection() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Case Studies
      </motion.h2>
      <p className="max-w-2xl text-sm text-muted-foreground">
        Examples of our work with governments and institutions across the region.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {caseStudies.map((study, i) => (
          <motion.article
            key={study.id}
            className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-border/60 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
          >
            <h3 className="text-base font-semibold tracking-tight text-primary">
              {study.title}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {study.location}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {study.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
