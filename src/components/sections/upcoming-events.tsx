"use client";

import { motion } from "framer-motion";

import { events } from "@/data/events";
import { EventCard } from "@/components/cards/event-card";

export function UpcomingEventsSection() {
  const featured = events.filter((e) => e.isFeatured).slice(0, 3);

  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Upcoming Events & Policy Dialogues
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Workshops, forums, and dialogues bringing together governments, employers, and partners.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {featured.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </section>
  );
}

