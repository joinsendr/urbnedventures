import { Link } from "react-router";
import { ModernHeader } from "../components/ModernHeader";
import { ModernFooter } from "../components/ModernFooter";

const sections = [
  {
    title: "1. Introduction",
    content: [
      'URBNED Inc. ("URBNED", "we", "us", or "our") provides consulting and guidance services relating to Delaware company formation, business administration, tax filing support, and business banking application processes.',
      "This Refund & Cancellation Policy explains the conditions under which refunds may be requested for services purchased through our platform or directly from URBNED Inc.",
      "By purchasing our services, customers acknowledge that they have had the opportunity to review this policy before completing their purchase.",
    ],
  },
  {
    title: "2. Nature of Our Services",
    content: [
      "Our services may include:",
      [
        "Delaware company formation consulting and procedural guidance.",
        "Guidance concerning business registration and ongoing compliance requirements.",
        "Tax filing assistance and related administrative guidance, where expressly included in the service purchased.",
        "Guidance regarding business banking applications and account-opening requirements.",
        "Individual consultations conducted by telephone, video call, or other agreed communication channels.",
        "Follow-up guidance and documentation expressly included in the purchased service.",
      ],
      "The specific scope of each engagement is determined by the service description, order confirmation, and any written agreement between URBNED Inc. and the customer.",
      "Unless expressly agreed in writing, our consulting services do not guarantee company registration approval, bank account approval, tax outcomes, or approval by any third-party institution or government authority.",
    ],
  },
  {
    title: "3. Refund Eligibility",
    content: [
      "Refund requests are assessed based on the service purchased, the stage of delivery, the applicable agreement, and the circumstances of the request.",
    ],
    subsections: [
      ["3.1 Services Not Yet Started", "If a customer requests cancellation before any substantive consulting work has commenced, the customer may be eligible for a full or partial refund, subject to the applicable agreement and any lawful charges for work already performed."],
      ["3.2 Partially Completed Services", "If work has commenced but the service has not been fully delivered, any eligible refund will be assessed proportionately, taking into account the work completed, time spent, third-party costs already incurred, and applicable legal requirements."],
      ["3.3 Completed Consulting Services", "Once the agreed consultation has been conducted and the purchased consulting service has been delivered, the service will generally be considered fulfilled. Refunds will not ordinarily be available solely because a customer subsequently changes their mind, no longer wishes to proceed, or does not achieve a particular business outcome, provided the service was delivered as agreed and applicable consumer rights permit this limitation. Nothing in this section excludes refunds or other remedies required by applicable law, including where a service was not supplied, was materially deficient, or was not performed in accordance with the agreement."],
      ["3.4 Government and Third-Party Fees", "Government filing fees, registered-agent fees, banking fees, and other third-party charges may be non-refundable once paid to the relevant provider, where permitted by law and the applicable third-party terms. Any such fees will be disclosed where applicable. URBNED Inc. will assess whether a refund is available for amounts retained by us separately from third-party charges."],
    ],
  },
  {
    title: "4. Cancellation and Rescheduling",
    content: [
      "Customers who need to cancel or reschedule a consultation should contact us as early as reasonably possible using the contact details provided in their order confirmation.",
      "Where a consultation has not yet taken place, we may offer rescheduling or a refund depending on the applicable service terms and circumstances.",
      "If a customer fails to attend a scheduled consultation without providing reasonable prior notice, the session may be treated as a missed appointment. Any fee retained in such circumstances will be subject to the terms disclosed at purchase and applicable law.",
      "Where URBNED Inc. cancels a consultation and cannot provide a reasonable alternative, the customer may request a refund for the undelivered portion of the service.",
    ],
  },
  {
    title: "5. Duplicate or Incorrect Payments",
    content: ["If a customer believes they have been charged twice for the same order or charged an incorrect amount, they should contact us with the relevant transaction reference.", "After verification, confirmed duplicate payments or erroneous charges will be refunded where appropriate."],
  },
  {
    title: "6. How to Request a Refund",
    content: ["To submit a refund request, customers should contact URBNED Inc. using the official contact details published on our website or included in their order confirmation.", "Please provide:", ["Full name used for the order.", "Order or payment reference.", "Date and amount of the transaction.", "Description of the service purchased.", "Reason for the refund request.", "Any relevant supporting documentation."], "We may request additional information reasonably necessary to verify the transaction and assess the request."],
  },
  {
    title: "7. Review and Processing",
    content: ["We aim to acknowledge refund requests within five business days and communicate the outcome after reviewing the relevant records.", "Where a refund is approved, it will generally be processed through the original payment method, where possible. The time required for the funds to appear in the customer's account depends on the payment provider and financial institution.", "If additional investigation is required, we will inform the customer where reasonably practicable."],
  },
  {
    title: "8. Customer Rights and Disputes",
    content: ["This policy does not limit any mandatory rights or remedies available to customers under applicable consumer protection laws.", "Customers who believe a service was not delivered as agreed are encouraged to contact us so that we can investigate and seek an appropriate resolution.", "Nothing in this policy prevents a customer from exercising a lawful right to dispute a transaction or excludes any rights that cannot legally be waived."],
  },
  {
    title: "9. Privacy and Verification",
    content: ["We may use relevant order records, customer communications, appointment records, and verification information to investigate refund requests and payment disputes, subject to applicable data-protection requirements.", "Personal information will be handled in accordance with our Privacy Policy."],
  },
  {
    title: "10. Changes to This Policy",
    content: ["URBNED Inc. may update this policy from time to time. The applicable terms for an existing purchase will be determined with reference to the terms provided at the time of purchase and any mandatory legal requirements.", "Any revised policy will be published on our website with an updated effective date."],
  },
  {
    title: "11. Contact Information",
    content: ["For refund requests or questions about this policy, please contact URBNED Inc. using the official contact details published on our website or included in your order confirmation.", "URBNED Inc.", "Website: [Insert official website URL]", "Email: [Insert customer support email]", "Registered business address: 2803 Philadelphia Pike, Suite B 1128, Claymont, 19703 DE, U.S.A."],
  },
] as const;

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ModernHeader />
      <main className="px-6 py-20">
        <article className="mx-auto max-w-4xl">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-primary">URBNED Inc.</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Refund &amp; Cancellation Policy</h1>
          <p className="mt-6 text-sm text-muted-foreground">Effective Date: [Insert publication date]</p>
          <div className="mt-12 space-y-10 border-t border-border pt-10">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {section.content.map((item, index) => Array.isArray(item) ? (
                  <ul key={index} className="list-disc space-y-2 pl-6 text-muted-foreground">{item.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : <p key={index} className="leading-7 text-muted-foreground">{item}</p>)}
                {"subsections" in section && section.subsections?.map(([title, text]) => <div key={title} className="space-y-2"><h3 className="text-lg font-medium">{title}</h3><p className="leading-7 text-muted-foreground">{text}</p></div>)}
              </section>
            ))}
          </div>
          <p className="mt-12 border-t border-border pt-8 text-sm italic text-muted-foreground">This policy is intended to explain our general refund and cancellation practices. It does not constitute legal advice.</p>
        </article>
      </main>
      <ModernFooter />
    </div>
  );
}
