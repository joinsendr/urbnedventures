import { Check } from "lucide-react";

const points = [
  "No programming experience required.",
  "AI coding and autonomous execution in one workspace.",
  "Build and improve projects through conversations.",
  "Flexible prepaid usage.",
  "Suitable for beginners and experienced developers.",
  "Transparent credit consumption.",
  "One workspace for multiple development tasks.",
];

export function WhyUrbned() {
  return (
    <section className="relative border-t border-border bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Why URBNED
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Built for How People Actually Build Today.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
