import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container-page">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            Contact us
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether you&apos;re an employer looking for trusted recruitment
            support or a job-seeker searching for your next opportunity, we are
            here to help.
          </p>

          <div className="section-card space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Get in touch
            </h2>
            <p className="text-sm text-muted-foreground">
              Share your request and our team will respond with the next steps.
            </p>
          </div>
        </div>

        <form className="section-card space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5 text-xs sm:text-sm">
              <label className="font-medium text-foreground/80">
                Full name
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-lg border border-border bg-background px-3 text-xs outline-none ring-0 placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 sm:h-10 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <label className="font-medium text-foreground/80">Email</label>
              <input
                type="email"
                className="h-9 w-full rounded-lg border border-border bg-background px-3 text-xs outline-none ring-0 placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 sm:h-10 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm">
            <label className="font-medium text-foreground/80">
              How can we help?
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs outline-none ring-0 placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 sm:text-sm"
              placeholder="Tell us if you are an employer, job-seeker, or partner and what you are looking for."
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-[11px] text-muted-foreground">
              We aim to respond within 1–2 business days.
            </p>
            <Button type="submit" size="lg" className="rounded-full px-6 text-sm">
              Send message
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

