"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import Link from "next/link";

import type { Event } from "@/types";
import { Button } from "@/components/ui/button";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  const formatted = date.toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      className="section-card flex flex-col gap-3 transition-shadow hover:shadow-lg"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <header className="space-y-1">
        <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
          {event.type}
        </p>
        <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base">
          {event.title}
        </h3>
      </header>

      <dl className="space-y-2 text-xs text-muted-foreground sm:text-sm">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <div>
            <dt className="sr-only">Date</dt>
            <dd>{formatted}</dd>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{event.location}</dd>
          </div>
        </div>
      </dl>

      <p className="text-xs text-muted-foreground sm:text-[13px]">
        {event.description}
      </p>

      <div className="mt-2 flex items-center justify-between gap-3">
        <Button
          asChild
          size="sm"
          className="rounded-full px-3 text-[11px] font-semibold"
        >
          <Link href="/registration">
            <Ticket className="mr-1.5 h-3.5 w-3.5" />
            Register
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}

