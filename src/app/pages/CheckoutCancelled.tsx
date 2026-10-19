import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { XCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const AUTO_CLOSE_SECONDS = 5;

export default function CheckoutCancelled() {
  const [params] = useSearchParams();
  const ref = params.get("ref") ?? "";
  const [secondsLeft, setSecondsLeft] = useState(AUTO_CLOSE_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      window.close();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-12">
      <h1 className="text-xl font-bold text-white mb-8">URBNED VENTURES</h1>

      <div className="w-full max-w-sm rounded-2xl border border-border/50 bg-card p-6 sm:p-8 text-center space-y-4">
        <XCircle className="w-14 h-14 text-destructive mx-auto" />
        <h2 className="text-lg font-semibold text-white">Payment not completed</h2>
        <p className="text-sm text-muted-foreground">
          Return to the Sendr tab to try again. This window will close automatically in {secondsLeft}s.
        </p>
        {ref && <p className="text-[11px] text-muted-foreground">Reference: {ref}</p>}
        <Button variant="outline" className="w-full rounded-full" onClick={() => window.close()}>
          Close now
        </Button>
      </div>
    </div>
  );
}
