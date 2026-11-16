import {
  Sparkles,
  ArrowRight,
  FolderKanban,
  Bot,
  LayoutGrid,
  Wallet,
  Settings,
  CheckCircle2,
  Loader2,
  Terminal,
} from "lucide-react";
import { Button } from "../ui/button";

const executionSteps = [
  { label: "Understanding requirements", done: true },
  { label: "Creating project structure", done: true },
  { label: "Writing components", done: true },
  { label: "Building frontend", done: true },
  { label: "Testing application", active: true },
];

const sidebarItems = [
  { icon: FolderKanban, label: "Projects" },
  { icon: Bot, label: "AI Agents" },
  { icon: LayoutGrid, label: "Workspace" },
  { icon: Wallet, label: "Usage & Credits" },
  { icon: Settings, label: "Settings" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Introducing URBNED AI Coding Agent
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl">
            Your Ideas Deserve to Become Software.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet your AI coding agent. Build websites, applications and software by simply describing
            what you want. No coding experience required. Just bring your ideas.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-12 rounded-full bg-white px-7 text-black hover:bg-white/90">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-transparent px-7 hover:bg-secondary"
            >
              Explore How It Works
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Built for beginners. Powerful enough for developers.
          </p>
        </div>

        {/* Product mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up [animation-delay:150ms]">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-muted-foreground">URBNED Workspace</span>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden w-48 flex-col gap-1 border-r border-border p-4 sm:flex">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                      item.label === "Workspace"
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main workspace */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
                {/* Chat */}
                <div className="border-r border-border p-4 sm:p-5 space-y-3">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-4 py-2.5 text-sm text-black">
                    Build me a modern e-commerce website for a fashion brand with product pages,
                    shopping cart and checkout.
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-sm">
                    Let's build it. I'm planning your application and setting up the project.
                  </div>

                  <div className="rounded-xl border border-border bg-background/50 p-3 space-y-2">
                    {executionSteps.map((step) => (
                      <div key={step.label} className="flex items-center gap-2 text-xs">
                        {step.active ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-foreground" />
                        ) : (
                          <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
                        )}
                        <span className={step.active ? "text-foreground" : "text-muted-foreground"}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code + preview */}
                <div className="flex flex-col">
                  <div className="flex-1 bg-[#0a0a0a] p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
                    <div className="text-muted-foreground">// ProductCard.tsx</div>
                    <div>
                      <span className="text-[#ff79c6]">export function</span>{" "}
                      <span className="text-[#50fa7b]">ProductCard</span>
                      <span className="text-white">({"{ product }"}) {"{"}</span>
                    </div>
                    <div className="pl-4 text-white">
                      <span className="text-[#ff79c6]">return</span> (
                    </div>
                    <div className="pl-8 text-[#8be9fd]">&lt;div className="card"&gt;</div>
                    <div className="pl-12 text-[#8be9fd]">
                      &lt;img src={"{product.image}"} /&gt;
                    </div>
                    <div className="pl-12 text-[#8be9fd]">
                      &lt;h3&gt;{"{product.name}"}&lt;/h3&gt;
                    </div>
                    <div className="pl-8 text-[#8be9fd]">&lt;/div&gt;</div>
                    <div className="pl-4 text-white">);</div>
                    <div className="text-white">{"}"}</div>
                  </div>

                  {/* Live preview strip */}
                  <div className="border-t border-border p-3">
                    <div className="rounded-lg border border-border bg-white/[0.03] p-2">
                      <div className="h-8 rounded-md bg-gradient-to-r from-white/20 to-white/5" />
                      <div className="mt-2 grid grid-cols-3 gap-1.5">
                        <div className="h-10 rounded-md bg-white/10" />
                        <div className="h-10 rounded-md bg-white/10" />
                        <div className="h-10 rounded-md bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal strip */}
            <div className="flex items-center gap-2 border-t border-border bg-black px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[#50fa7b]">$</span>
              <span>npm run build</span>
              <span className="inline-block h-3 w-1.5 animate-pulse bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
