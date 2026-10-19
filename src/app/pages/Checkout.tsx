import { useState } from "react";
import { useSearchParams } from "react-router";
import { Button } from "../components/ui/button";
import { Loader2, ShieldCheck, ArrowRight } from "lucide-react";

const CURRENCY_SYMBOLS: Record<string, string> = { INR: "₹", USD: "$", CAD: "C$" };

export default function Checkout() {
  const [params] = useSearchParams();
  const amount = params.get("amount") ?? "";
  const currency = (params.get("currency") ?? "INR").toUpperCase();
  const ref = params.get("ref") ?? "";
  const email = params.get("email") ?? "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amountNum = parseFloat(amount);
  const valid = isFinite(amountNum) && amountNum > 0 && !!ref;
  const symbol = CURRENCY_SYMBOLS[currency] ?? "";

  const proceed = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountNum, currency, ref, email }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Could not start checkout");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-12">
      <h1 className="text-xl font-bold text-white mb-8">URBNED VENTURES</h1>

      <div className="w-full max-w-sm rounded-2xl border border-border/50 bg-card p-6 sm:p-8 text-center space-y-6">
        {!valid ? (
          <p className="text-sm text-destructive">This payment link is missing required details. Please go back and try again.</p>
        ) : (
          <>
            <div>
              <p className="text-xs text-muted-foreground mb-1">You're completing a payment for</p>
              <p className="text-sm text-foreground font-medium">Sendr crypto purchase</p>
            </div>

            <div className="rounded-xl bg-secondary/40 border border-border/50 py-6">
              <div className="text-3xl font-bold text-white">{symbol}{amountNum.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">{currency}</div>
            </div>

            <div className="flex items-start gap-2 text-left text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>This amount is fixed — you won't need to enter it again on the payment page.</span>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button className="w-full rounded-full" size="lg" disabled={loading} onClick={proceed}>
              {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Starting checkout…</> : <>Proceed to secure payment <ArrowRight className="w-4 h-4 ml-2" /></>}
            </Button>

            <p className="text-[11px] text-muted-foreground">Reference: {ref}</p>
          </>
        )}
      </div>
    </div>
  );
}
