import { Button } from "./ui/button";

export function DarkFeature() {
  const handleWhatsApp = () => {
    const phoneNumber = "34695969605";
    const message = encodeURIComponent("Hi, I'd like to book a consultation with URBNED.VENTURES");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="experience" className="relative py-32 px-6 bg-gradient-to-br from-[#0a0a1f] via-[#1a1a2e] to-[#2a2a3e] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <h1 className="text-4xl font-bold text-white">URBNED VENTURES</h1>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Smarter vision.
            <br />
            Seamless reality
          </h2>
          
          <p className="text-muted-foreground text-lg mb-4">
            Legal services that understand context instantly.
          </p>
          <p className="text-muted-foreground/70 text-sm mb-12">
            Designed to adapt, respond, and deliver when you need them.
          </p>

          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}