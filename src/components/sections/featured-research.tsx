"use client";

import { motion } from "framer-motion";

import { researchReports } from "@/data/research";
import { ResearchCard } from "@/components/cards/research-card";

export function FeaturedResearchSection() {
  const featured = researchReports.filter((r) => r.isFeatured).slice(0, 3);

  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Latest Research & Publications
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Evidence-based reports and publications for policymakers and practitioners.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {featured.map((report) => (
          <ResearchCard key={report.id} report={report} />
        ))}
      </motion.div>
    </section>
  );
}

