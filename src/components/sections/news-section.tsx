"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";

import { newsItems } from "@/data/news";

export function NewsSection() {
  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          News & Insights
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Latest announcements and research highlights.
        </p>
      </motion.header>
      <div className="grid gap-4 sm:grid-cols-3">
        {newsItems.map((item, i) => (
          <motion.article
            key={item.id}
            className="section-card flex flex-col gap-2 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            {item.date && (
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {item.date}
              </p>
            )}
            <h3 className="text-sm font-semibold tracking-tight text-primary">
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {item.excerpt}
            </p>
            <Link
              href={item.href}
              className="mt-auto text-xs font-semibold text-primary hover:underline"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
