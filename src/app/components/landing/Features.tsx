import { Bot, Workflow, Code2, Bug, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Coding Agent",
    description:
      "Build websites, mobile app prototypes, dashboards, scripts and software through natural language instructions.",
  },
  {
    icon: Workflow,
    title: "Autonomous Task Execution",
    description:
      "Give your AI agent a task. It can plan, write code, execute commands, inspect results and work through errors.",
  },
  {
    icon: Code2,
    title: "Live Code Workspace",
    description:
      "Access your code, edit files, inspect project structure and work alongside your AI agent.",
  },
  {
    icon: Bug,
    title: "Debugging & Testing",
    description:
      "Find bugs, understand errors, improve code and test your application with AI assistance.",
  },
  {
    icon: Layers,
    title: "Multiple AI Models",
    description:
      "Use different AI models for different coding and reasoning tasks, subject to available integrations.",
  },
  {
    icon: Sparkles,
    title: "Build Without Coding",
    description: "Create useful digital products even if you have never programmed before.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-border bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Product Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Everything You Need to Build.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
