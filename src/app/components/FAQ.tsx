import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What makes URBNED.VENTURES different from other law firms?",
    answer: "Most of the legal market is quite stiff and old-school. Lawyers tend to use legalese, seem hard to reach, difficult to work with, and expensive with their (often) high hourly rates. URBNED.VENTURES is antithesis to that – we are transparent with our employees and clients, focus on empowering our clients' success above all else, and do everything we can to align our needs with our clients. We don't use legalese if not necessary and we are available on our clients's tech stack. We are our client's partner."
  },
  {
    question: "How are you pricing your work?",
    answer: "Unless requested by you or in matters where our output is truly measurable only by time (think negotiations, bespoke or ad hoc advice), we will strive to provide services through fixed fees to align with our client's goals. How do we make money? We create internal workflows and focus on efficiencies in our delivery, therefore increasing our margins. We benefit if you benefit. We call that a win-win!"
  },
  {
    question: "Who is your ideal client?",
    answer: "Our clients are founders and funders in fast growing industries. They are from all around the world, but all of them are building global businesses. Our specialty is helping international founders to move or expand to the US."
  },
  {
    question: "What services does URBNED.VENTURES not provide?",
    answer: "We do not do litigation. We are business lawyers. Our focus is on making sure no litigation ever needs to happen. If you do need to litigate, we have terrific partners who are ready to protect your rights in court. You can also expect that if you need anything for your business, we will do our best to make it happen. Whether it's a legal issue or not."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card px-8 py-2 rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}