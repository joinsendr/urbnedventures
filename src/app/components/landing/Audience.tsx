import { Check } from "lucide-react";
import { Button } from "../ui/button";

const everyoneExamples = [
  "Create a personal website.",
  "Build a business landing page.",
  "Create a personal expense tracker.",
  "Build a custom productivity tool.",
  "Automate repetitive tasks.",
];

const developerExamples = [
  "Generate code and components.",
  "Debug complex issues.",
  "Build APIs and integrations.",
  "Refactor existing projects.",
  "Automate development workflows.",
];

export function Audience() {
  return (
    <section id="product" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h3 className="text-3xl font-bold tracking-tight">You Have an Idea. That's Enough.</h3>
            <p className="mt-4 text-muted-foreground">
              You don't need to be a developer to create software anymore. Explain what you want in
              simple language, and URBNED helps turn your ideas into real projects.
            </p>
            <ul className="mt-6 space-y-3">
              {everyoneExamples.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 h-11 rounded-full bg-white px-6 text-black hover:bg-white/90">
              Start Creating
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h3 className="text-3xl font-bold tracking-tight">Code Faster. Build Smarter.</h3>
            <p className="mt-4 text-muted-foreground">
              Your AI development partner helps you write, debug, test and improve software while
              keeping you in control.
            </p>
            <ul className="mt-6 space-y-3">
              {developerExamples.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-8 h-11 rounded-full border-border bg-transparent px-6 hover:bg-secondary"
            >
              Explore Developer Workspace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
