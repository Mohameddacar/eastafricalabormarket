const testimonials = [
  {
    quote:
      "East Africa Labor Market helped us fill critical roles with verified professionals in record time.",
    name: "Regional Hospital Partner",
    role: "Human Resources Lead",
  },
  {
    quote:
      "As a job-seeker, I received guidance at every step. From my CV to interviews, I always felt supported.",
    name: "Healthcare Professional",
    role: "Placed Candidate",
  },
  {
    quote:
      "Their market insights helped us understand salary benchmarks and plan our recruitment strategy.",
    name: "International Organization",
    role: "Talent Acquisition Manager",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container-page">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Testimonials
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our work is defined by the success of the people and organizations we
          serve. Here are a few words from partners and candidates who have
          worked with East Africa Labor Market.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="section-card flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              “{item.quote}”
            </p>
            <figcaption className="mt-auto text-xs text-primary">
              <div className="font-semibold">{item.name}</div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}

