import { Twitter } from "lucide-react";

export function ModernFooter() {
  return (
    <footer className="bg-background border-t border-border text-foreground py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-xl font-bold text-white">URBNED VENTURES</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Intelligent legal services.
              <br />
              Business formations designed to understand context
              <br />
              and respond in real time.
            </p>
            <div className="mt-6 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">URBNED INC.</p>
              <p>2803 Philadelphia Pike,</p>
              <p>Suite B 1128, Claymont,</p>
              <p>19703 DE, U.S.A.</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              SITE MAP
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              JOIN US
            </h4>
            <div className="flex gap-3">
              <a href="https://x.com/urbnedventures" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card hover:bg-primary/20 border border-border transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 URBNED.VENTURES. All rights reserved</p>
          <p className="text-xs">Built for real-time legal excellence</p>
        </div>
      </div>
    </footer>
  );
}