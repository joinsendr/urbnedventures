import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function ModernHero() {
  const handleWhatsApp = () => {
    const phoneNumber = "34695969605";
    const message = encodeURIComponent("Hi, I'd like to book a consultation with URBNED.VENTURES");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3e] to-[#0a0a1f]">
      {/* Gradient orbs background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-foreground">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Beyond limits
              <br />
              beyond
              <br />
              <span className="text-primary">
                complexity
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Next-generation legal services redefining how you
              navigate, establish, and scale your ventures in the US.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                onClick={scrollToRegister}
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-lg"
              >
                Register Company
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">New Collection</span>
                <span className="text-foreground font-bold text-2xl">Starting $2,900</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Corporate Formation Suite</h3>
              <p className="text-muted-foreground mb-4">Complete business setup and compliance</p>
              <Button 
                variant="ghost" 
                onClick={scrollToRegister}
                className="text-primary hover:bg-primary/10 rounded-full"
              >
                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}