import { ArrowRight } from "lucide-react";

export function TechSpecs() {
  return (
    <section id="specs" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-16">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white">URBNED VENTURES</h1>
          </div>
          <button className="text-sm text-muted-foreground flex items-center hover:text-primary transition-colors">
            See more <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Discover more about advanced legal
            <br />
            intelligent systems and long-term vision
            <br />
            <span className="text-muted-foreground">
              shaping the future of business formation
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            We create dependable systems that layer real-time intelligence over your business — intuitive,
            adaptive and fully under your control
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-t border-border pt-8 group hover:bg-card transition-all -mx-8 px-8 rounded-2xl cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-2">01 | System Architecture</div>
                <h3 className="text-3xl font-bold text-foreground">Real-Time Legal Intelligence</h3>
              </div>
              <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-sm text-muted-foreground mb-2">02 | Performance Metrics</div>
                <h3 className="text-3xl font-bold text-foreground">Context Recognition Accuracy</h3>
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-8">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-24 bg-muted rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center px-4">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 mx-0.5 bg-primary rounded-full"
                    style={{
                      height: `${Math.random() * 60 + 40}%`,
                      opacity: 0.3 + Math.random() * 0.7
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-6xl font-bold text-foreground">
              99.4%
              <span className="text-2xl text-muted-foreground ml-4">Average Response Time: &lt;12h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}