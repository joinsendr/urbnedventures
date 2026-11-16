import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "Do I need coding experience to use URBNED?",
    a: "No. You can describe what you want to build in everyday language. Developers can also use the workspace for more advanced development tasks.",
  },
  {
    q: "What can I build using URBNED?",
    a: "You can use URBNED to create websites, applications, dashboards, scripts, prototypes and other software projects, subject to platform capabilities.",
  },
  {
    q: "How does the credit system work?",
    a: "You purchase prepaid credits and use them for AI operations. Usage depends on the models, tasks and computing resources consumed.",
  },
  {
    q: "Do I need to pay monthly?",
    a: "No. URBNED uses prepaid credits. You choose when and how much to recharge.",
  },
  {
    q: "Can I recharge more credits later?",
    a: "Yes. You can recharge whenever your available balance is insufficient.",
  },
  {
    q: "Can experienced developers use URBNED?",
    a: "Absolutely. URBNED is designed for beginners, developers, freelancers and software professionals.",
  },
  {
    q: "Does URBNED automatically write and execute code?",
    a: "URBNED's AI agent can help plan, write, execute and test code within supported environments. Users retain control over their projects and execution permissions.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Questions, Answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
