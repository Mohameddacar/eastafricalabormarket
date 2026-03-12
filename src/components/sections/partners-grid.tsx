"use client";

import { motion } from "framer-motion";

import { partners } from "@/data/partners";
import { PartnerCard } from "@/components/cards/partner-card";

const HOME_PARTNERS = partners.slice(0, 5);

export function PartnersGridSection() {
  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Partners
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
          We work with leading international and regional organizations.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {HOME_PARTNERS.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </motion.div>
    </section>
  );
}

