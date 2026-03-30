import { Button } from "./ui/button";

export function FinalCTA() {
  const handleWhatsApp = () => {
    const phoneNumber = "34695969605";
    const message = encodeURIComponent("Hi, I'd like to learn more about URBNED.VENTURES services");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-card via-[#1a1a2e] to-background">
      {/* Gradient orb effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
          Ready to experience
          <br />
          legal differently?
        </h2>
        <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
          See more, understand more, respond instantly with
          <br />
          intelligent legal services built for real-time execution.
        </p>
        <Button 
          size="lg"
          onClick={handleWhatsApp}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
        >
          Book Consultation
        </Button>
      </div>
    </section>
  );
}