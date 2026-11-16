import { MessageSquarePlus, Brain, Hammer, Eye } from "lucide-react";

const steps = [
  {
    icon: MessageSquarePlus,
    title: "Describe Your Idea",
    description: "Tell URBNED what you want to build using everyday language.",
  },
  {
    icon: Brain,
    title: "AI Plans Your Project",
    description: "The AI agent understands your requirements, creates a plan and selects the right approach.",
  },
  {
    icon: Hammer,
    title: "Build, Execute & Test",
    description: "Your AI agent writes code, executes commands, tests functionality and fixes errors.",
  },
  {
    icon: Eye,
    title: "Preview & Improve",
    description: "See your working project, request changes and continue building until you're happy.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            From a Simple Prompt to Working Software.
          </h2>
          <p className="mt-4 text-muted-foreground">
            You don't need to know how to code. Tell URBNED what you want, and let your AI agent do
            the heavy lifting.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-border bg-card p-6 transition-colors hover:border-white/30"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-white/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
