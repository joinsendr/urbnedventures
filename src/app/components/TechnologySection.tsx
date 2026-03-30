import { Button } from "./ui/button";

export function TechnologySection() {
  return (
    <section id="technology" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 text-sm text-primary mb-6">
              Vision
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-4xl text-foreground">
              Built on clear intent and careful craft we
              design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                smart legal systems
              </span>{" "}
              for speed comfort and
              daily flow delivering real time insight{" "}
              <span className="text-muted-foreground">
                with quick response so each moment feels calm
                steady sharp and fully within your control
              </span>
            </h2>
            <p className="text-muted-foreground mt-8">
              Designed to move with you — intelligently, seamlessly, and responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}