"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeCTASection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-primary/90 px-6 py-14 ring-1 ring-primary/80 sm:px-10 sm:py-16">
      <div className="absolute inset-0 bg-[url('/images/cta-workshop.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Join Our Programs and Strengthen Workforce Development
        </motion.h2>
        <motion.p
          className="mt-3 text-sm text-white/90 sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Register for training, explore research, and partner with us.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-6 font-semibold text-primary hover:bg-white/90"
          >
            <Link href="/registration">Register Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/50 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/research">Explore Research</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
