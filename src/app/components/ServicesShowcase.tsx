import { ArrowRight } from "lucide-react";

export function ServicesShowcase() {
  const services = [
    { name: "Corporate Formation", tag: "C-Corp, LLC, Flips" },
    { name: "Stock Options", tag: "ESOP Setup" },
    { name: "M&A Transactions", tag: "Exits & Deals" },
    { name: "Commercial Contracts", tag: "Enterprise Ready" }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-start mb-16">
          <div>
            <button className="text-sm text-muted-foreground mb-4 flex items-center hover:text-primary transition-colors">
              See more <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Built for your reality.
              <br />
              We deliver legal excellence
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground leading-relaxed">
              Services that understand context, respond instantly, and adapt when you
              don't need them — operating seamlessly.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">{service.tag}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.name}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}