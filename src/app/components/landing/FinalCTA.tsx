import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Stop Waiting to Build. Start Creating.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Your next idea could become your next application. Bring your vision to URBNED and let AI
          help you build it.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="h-14 rounded-full bg-white px-8 text-black hover:bg-white/90">
            Start Building with URBNED <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          No coding experience required. No mandatory subscription. Just build.
        </p>
      </div>
    </section>
  );
}
