import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

// Creates a Stripe Checkout Session with a fixed, server-set amount — used by
// the Sendr Buy Crypto (INR card) flow so the customer never has to manually
// type the amount on Stripe's own page. Requires STRIPE_SECRET_KEY to be set
// as an environment variable in the Vercel project (never committed to code).
const SITE_URL = "https://www.urbned.ventures";
const ALLOWED_CURRENCIES = ["INR"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error("[create-checkout-session] STRIPE_SECRET_KEY is not set");
    res.status(500).json({ error: "Payment processing is not configured" });
    return;
  }

  const { amount, currency, ref, email } = req.body ?? {};
  const amountNum = parseFloat(amount);
  const currencyCode = String(currency ?? "").toUpperCase();

  if (!isFinite(amountNum) || amountNum <= 0) {
    res.status(400).json({ error: "Invalid amount" });
    return;
  }
  if (!ALLOWED_CURRENCIES.includes(currencyCode)) {
    res.status(400).json({ error: `currency must be one of ${ALLOWED_CURRENCIES.join(", ")}` });
    return;
  }
  if (!ref || typeof ref !== "string") {
    res.status(400).json({ error: "ref is required" });
    return;
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currencyCode.toLowerCase(),
            // Deliberately generic — no mention of Sendr or crypto here, since
            // some card issuers flag/decline crypto-related line items.
            product_data: { name: "Payment for your selected URBNED Service" },
            unit_amount: Math.round(amountNum * 100), // smallest currency unit (paise for INR)
          },
          quantity: 1,
        },
      ],
      client_reference_id: ref,
      customer_email: typeof email === "string" && email ? email : undefined,
      success_url: `${SITE_URL}/checkout/success?ref=${encodeURIComponent(ref)}`,
      cancel_url: `${SITE_URL}/checkout?amount=${encodeURIComponent(amount)}&currency=${encodeURIComponent(currencyCode)}&ref=${encodeURIComponent(ref)}${email ? `&email=${encodeURIComponent(email)}` : ""}`,
      custom_text: {
        submit: {
          message:
            "Card payments are processed through an international payment gateway, so delivery to your service can take anywhere from 15 minutes to 48 hours depending on your bank. Please be patient - contact support if you need assistance.",
        },
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("[create-checkout-session] Stripe error:", err instanceof Error ? err.message : err);
    res.status(500).json({ error: "Could not start checkout. Please try again." });
  }
}
