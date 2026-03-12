"use client";

import { motion } from "framer-motion";

import { ServiceCard } from "@/components/cards/service-card";

export function ServicesOverviewSection() {
  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          What We Do
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Services that connect evidence to action across the region.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <ServiceCard
          icon="research"
          title="Labor Market Research"
          description="We conduct comprehensive labor market research and workforce analysis to support evidence-based policy decisions."
        />
        <ServiceCard
          icon="policy"
          title="Policy Advisory"
          description="Supporting governments and institutions in designing employment and workforce policies."
        />
        <ServiceCard
          icon="capacity"
          title="Capacity Building"
          description="Training programs designed to strengthen institutional capacity and workforce planning."
        />
        <ServiceCard
          icon="human"
          title="Human Development Programs"
          description="Programs focused on youth employment, women’s economic empowerment, and inclusive workforce strategies."
        />
        <ServiceCard
          icon="ppp"
          title="Public Private Partnerships"
          description="Building partnerships between governments, private sector, and international organizations."
        />
      </motion.div>
    </section>
  );
}

