import { User } from "lucide-react";
import type { Leadership } from "@/types";

type LeadershipCardProps = {
  member: Leadership;
};

export function LeadershipCard({ member }: LeadershipCardProps) {
  return (
    <article className="section-card flex flex-col gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <header className="space-y-0.5">
        <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base">
          {member.name}
        </h3>
        {member.role && member.role !== member.name && (
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            {member.role}
          </p>
        )}
      </header>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {member.bio}
      </p>
    </article>
  );
}
