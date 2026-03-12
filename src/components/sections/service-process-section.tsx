"use client";

import { motion } from "framer-motion";

import { serviceProcessSteps } from "@/data/services";

export function ServiceProcessSection() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Service Process
      </motion.h2>
      <p className="max-w-2xl text-sm text-muted-foreground">
        How we work with clients to deliver impact.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceProcessSteps.map((step, i) => (
          <motion.article
            key={step.id}
            className="rounded-2xl bg-card p-5 shadow-md ring-1 ring-border/60 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
          >
            <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {step.step}
            </span>
            <h3 className="text-base font-semibold tracking-tight text-primary">
              Step {step.step} — {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
