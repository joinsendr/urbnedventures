import { Button } from "./ui/button";

export function ModernHeader() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "34695969605";
    const message = encodeURIComponent("Hi, I'd like to book a consultation with URBNED.VENTURES");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">URBNED VENTURES</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="px-6 py-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-6 py-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('register')}
              className="px-6 py-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              Register
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={handleWhatsApp}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}