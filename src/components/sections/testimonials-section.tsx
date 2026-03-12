"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Testimonials
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
          What partners and policymakers say about our work.
        </p>
      </motion.header>
      <div className="relative overflow-hidden rounded-2xl bg-muted/30 px-6 py-8 ring-1 ring-border/60 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[index].id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-center"
          >
            <Quote className="mx-auto h-8 w-8 text-primary/40" />
            <p className="text-sm leading-relaxed text-foreground sm:text-base">
              &ldquo;{testimonials[index].quote}&rdquo;
            </p>
            <footer>
              <cite className="not-italic font-semibold text-primary">
                — {testimonials[index].author}
              </cite>
              <p className="text-xs text-muted-foreground">{testimonials[index].role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
