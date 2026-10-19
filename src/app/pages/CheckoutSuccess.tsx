import { useSearchParams } from "react-router";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const ref = params.get("ref") ?? "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-12">
      <h1 className="text-xl font-bold text-white mb-8">URBNED VENTURES</h1>

      <div className="w-full max-w-sm rounded-2xl border border-border/50 bg-card p-6 sm:p-8 text-center space-y-4">
        <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto" />
        <h2 className="text-lg font-semibold text-white">Payment received</h2>
        <p className="text-sm text-muted-foreground">
          You can close this window now and return to the Sendr tab to confirm your order.
        </p>
        {ref && <p className="text-[11px] text-muted-foreground">Reference: {ref}</p>}
      </div>
    </div>
  );
}
