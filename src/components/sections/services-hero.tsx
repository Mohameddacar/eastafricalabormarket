"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_minmax(0,1fr)] lg:items-center lg:gap-12">
      <div className="space-y-5">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          What We Provide
        </motion.p>
        <motion.h1
          className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.25rem]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-sm font-medium text-primary/90"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Strengthening Labor Markets Through Research, Training, and Strategic
          Advisory
        </motion.p>
        <motion.div
          className="space-y-3 text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <p>
            East Africa Labor Market provides a wide range of professional
            services designed to support governments, institutions, and
            organizations in understanding and improving labor market systems
            across the region.
          </p>
          <p>
            Our services combine research expertise, policy advisory, and
            capacity building programs to support sustainable workforce
            development and inclusive economic growth.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button asChild size="lg" className="rounded-full px-6 font-semibold">
            <Link href="/training">Explore Training</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary/20 px-6 font-semibold"
          >
            <Link href="/research">View Research</Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/10 shadow-lg ring-1 ring-border/60 lg:min-h-[300px]"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <span className="text-center text-sm font-medium text-primary/80">
            Professional meeting with economists and policymakers reviewing
            labor market data
          </span>
        </div>
      </motion.div>
    </section>
  );
}
