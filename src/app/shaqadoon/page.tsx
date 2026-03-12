import { Button } from "@/components/ui/button";

export default function ShaqadoonPage() {
  return (
    <div className="container-page">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Shaqadoon – Job-Seeker Hub
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          This space is dedicated to job-seekers across East Africa. Get ready
          to access curated opportunities, training, and personalized guidance
          that brings you closer to your ideal role.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="section-card space-y-2">
          <h2 className="text-base font-semibold tracking-tight text-primary">
            1. Share your profile
          </h2>
          <p className="text-sm text-muted-foreground">
            Prepare your CV and experience so our team can match you with the
            right openings.
          </p>
        </div>
        <div className="section-card space-y-2">
          <h2 className="text-base font-semibold tracking-tight text-primary">
            2. Get interview-ready
          </h2>
          <p className="text-sm text-muted-foreground">
            Receive advice on interviews, communication, and professional
            presentation.
          </p>
        </div>
        <div className="section-card space-y-2">
          <h2 className="text-base font-semibold tracking-tight text-primary">
            3. Connect with employers
          </h2>
          <p className="text-sm text-muted-foreground">
            We connect you to verified organizations that are actively hiring.
          </p>
        </div>
      </section>

      <section className="section-card flex flex-col items-start justify-between gap-4 border border-dashed border-accent/50 bg-secondary/60 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <h2 className="text-base font-semibold tracking-tight text-primary">
            Ready to take the next step?
          </h2>
          <p className="text-sm text-muted-foreground">
            Contact our team with your latest CV and career interests. We will
            reach out with roles that fit your profile.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full px-6 text-sm">
          <a href="/contact">Talk to our team</a>
        </Button>
      </section>
    </div>
  );
}

