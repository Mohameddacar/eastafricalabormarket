import type { TimelineItem } from "@/types";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-4"
        aria-hidden
      />
      <ul className="space-y-8">
        {items.map((item, index) => (
          <li key={item.id} className="relative flex gap-6 pl-10 sm:pl-12">
            <span
              className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary sm:h-8 sm:w-8"
              aria-hidden
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-sm font-semibold tracking-tight text-primary">
                {item.year} — {item.title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
