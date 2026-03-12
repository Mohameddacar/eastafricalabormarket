export default function TeamPage() {
  const team = [
    {
      name: "Leadership & Strategy",
      description:
        "Guiding the vision, partnerships, and long-term growth of East Africa Labor Market.",
    },
    {
      name: "Recruitment Specialists",
      description:
        "On-the-ground experts who understand local talent pools and employer needs.",
    },
    {
      name: "Career Advisors",
      description:
        "Supporting job-seekers with CV improvement, interview preparation, and career planning.",
    },
    {
      name: "Research & Insights",
      description:
        "Collecting and analyzing labor market data to inform smarter hiring and workforce decisions.",
    },
  ];

  return (
    <div className="container-page">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Our Team
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Behind every successful placement is a committed team. Our recruiters,
          advisors, and analysts work together to support both employers and
          job-seekers with care and professionalism.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {team.map((item) => (
          <article key={item.name} className="section-card space-y-2">
            <h2 className="text-base font-semibold tracking-tight text-primary">
              {item.name}
            </h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

