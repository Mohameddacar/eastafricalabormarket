"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Globe, GraduationCap } from "lucide-react";

import { industriesServed } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-5 w-5 text-primary" />,
  GraduationCap: <GraduationCap className="h-5 w-5 text-primary" />,
  Globe: <Globe className="h-5 w-5 text-primary" />,
  Briefcase: <Briefcase className="h-5 w-5 text-primary" />,
};

export function IndustriesSection() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Industries & Sectors
      </motion.h2>
      <p className="max-w-2xl text-sm text-muted-foreground">
        We serve governments, institutions, and organizations across key sectors.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industriesServed.map((sector, i) => (
          <motion.article
            key={sector.id}
            className="rounded-2xl bg-card p-5 shadow-md ring-1 ring-border/60 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {iconMap[sector.icon] ?? <Building2 className="h-5 w-5 text-primary" />}
            </div>
            <h3 className="mt-3 text-sm font-semibold tracking-tight text-primary">
              {sector.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {sector.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
