"use client";

import { motion } from "framer-motion";

import { partners } from "@/data/partners";

const MARQUEE_PARTNERS = partners.slice(0, 7);

export function PartnersMarquee() {
  return (
    <section className="w-full overflow-hidden border-y border-border/60 bg-muted/30 py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by Global Partners
      </p>
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap px-4"
          animate={{ x: [0, -1280] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...MARQUEE_PARTNERS, ...MARQUEE_PARTNERS].map((partner, i) => (
            <span
              key={`${partner.id}-${i}`}
              className="text-sm font-medium text-muted-foreground"
            >
              {partner.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
