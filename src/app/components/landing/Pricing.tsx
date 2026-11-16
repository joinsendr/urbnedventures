import { useState } from "react";
import { Wallet, Check, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";

const MIN_RECHARGE = 499;
const MAX_RECHARGE = 500000;
const POPULAR_AMOUNT = 4999;

const packages = [499, 999, 2499, 4999, 9999, 24999, 49999, 99999, 249999, 500000];

const benefits = [
  "No mandatory monthly subscription.",
  "No automatic recurring billing.",
  "Recharge whenever you need.",
  "Track usage and remaining balance.",
  "Access available AI models and tools through one account.",
];

const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export function Pricing() {
  const [customAmount, setCustomAmount] = useState(POPULAR_AMOUNT);

  const handleSliderChange = (value: number[]) => setCustomAmount(value[0]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const n = raw ? parseInt(raw, 10) : MIN_RECHARGE;
    setCustomAmount(Math.min(MAX_RECHARGE, Math.max(MIN_RECHARGE, n)));
  };

  return (
    <section id="pricing" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Your Ideas. Your Budget. Your Credits.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start with what you need. Recharge whenever you want. Pay only for the AI usage you choose.
          </p>
        </div>

        {/* Preset packages */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {packages.map((amount) => {
            const isPopular = amount === POPULAR_AMOUNT;
            return (
              <button
                key={amount}
                type="button"
                onClick={() => setCustomAmount(amount)}
                className={`relative rounded-2xl border p-5 text-left transition-colors ${
                  customAmount === amount
                    ? "border-white bg-white text-black"
                    : "border-border bg-card hover:border-white/40"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black">
                    Popular
                  </span>
                )}
                <div className="text-lg font-bold">{inr(amount)}</div>
                <div
                  className={`mt-1 text-xs ${
                    customAmount === amount ? "text-black/60" : "text-muted-foreground"
                  }`}
                >
                  Recharge credits
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom slider + wallet preview */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Custom Recharge</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose any amount between {inr(MIN_RECHARGE)} and {inr(MAX_RECHARGE)}.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-muted-foreground">₹</span>
              <Input
                value={customAmount}
                onChange={handleInputChange}
                inputMode="numeric"
                className="h-12 border-border bg-background text-xl font-bold"
              />
            </div>

            <Slider
              className="mt-6"
              min={MIN_RECHARGE}
              max={MAX_RECHARGE}
              step={100}
              value={[customAmount]}
              onValueChange={handleSliderChange}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{inr(MIN_RECHARGE)}</span>
              <span>{inr(MAX_RECHARGE)}</span>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-secondary/60 px-4 py-3">
              <div>
                <div className="text-xs text-muted-foreground">Selected recharge</div>
                <div className="text-lg font-bold">{inr(customAmount)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Est. credit balance</div>
                <div className="text-lg font-bold">{customAmount.toLocaleString("en-IN")}</div>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Illustrative 1:1 example — the final INR-to-credit conversion rate is configured by URBNED.
            </p>

            <Button className="mt-6 h-12 w-full rounded-full bg-white text-black hover:bg-white/90">
              Choose Your Credits
            </Button>
          </div>

          {/* Wallet mockup */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="h-4 w-4" /> Your URBNED Wallet
            </div>
            <div className="mt-4 text-sm text-muted-foreground">Available Credits</div>
            <div className="mt-1 text-4xl font-bold tracking-tight">5,000</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="h-10 rounded-full bg-white px-5 text-black hover:bg-white/90">
                Recharge Credits
              </Button>
              <Button variant="outline" className="h-10 rounded-full border-border bg-transparent px-5 hover:bg-secondary">
                View Usage
              </Button>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Credits are consumed based on actual AI model usage and computing resources. This is a
              product preview — no real wallet, payment or credit deduction happens on this page.
            </p>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Zap className="h-4 w-4" /> Why prepaid credits
              </div>
              <ul className="mt-4 space-y-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
