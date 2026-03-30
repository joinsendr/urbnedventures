import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Corporate & Talent",
    price: "$ varies",
    subtitle: "(see below)",
    description: "Complete corporate setup and team onboarding solutions",
    services: [
      {
        name: "Company Formations | C-Corp, LLC, US Flips",
        price: "from $2,900"
      },
      {
        name: "Employee Stock Option Plan Setup and Management",
        price: "from $3,500"
      },
      {
        name: "Talent Management | Employee, Consultants, Advisors",
        price: "from $750"
      },
      {
        name: "Corporate Cleanups & Cap Table Audits",
        price: "from $1,800"
      }
    ],
    details: "We set up your Delaware company and handle all the paperwork to bring your team on board - from incorporation documents and founder equity to offer letters, contractor agreements, and option plans. As you grow, we keep your corporate house in order with board meetings, annual compliance, and cap table management.",
    popular: false
  },
  {
    name: "M&A and Financing",
    price: "$ varies",
    subtitle: "(see below)",
    description: "Fundraising and exit transaction support",
    services: [
      {
        name: "Safe or CLA Issuance",
        price: "from $1,700"
      },
      {
        name: "NVCA Priced Rounds",
        price: "from $25,000"
      },
      {
        name: "Full Scope M&A Exits",
        price: "from $30,000"
      },
      {
        name: "SEC and Blue Sky Filings",
        price: "$1,800"
      }
    ],
    details: "Whether you're raising on a Safe, convertible note, or closing a priced round, we handle the documents, board approvals, negotiations, and filings from term sheet to wire. We represent both founders and investors, and can run due diligence when you're on the other side of a deal.",
    popular: true
  },
  {
    name: "Commercial",
    price: "$ varies",
    subtitle: "(see below)",
    description: "Contract drafting and commercial negotiations",
    services: [
      {
        name: "GTM Paperwork | Service Agreements, SLA, DPA",
        price: "from $4,900"
      },
      {
        name: "Enterprise Deal Negotiations",
        price: "from $950"
      },
      {
        name: "Ongoing Sales Playbooks",
        price: "from $750"
      },
      {
        name: "Drafting and Review of any Agreement",
        price: "from $490"
      }
    ],
    details: "We draft and review the contracts that run your business - customer agreements, vendor terms, NDAs, and everything in between. Need a full sales playbook or terms of service and privacy policy? We do that too. Fixed-fee for standard work, with bespoke drafting available for complex deals.",
    popular: false
  }
];

export function Pricing() {
  const handleWhatsApp = () => {
    const phoneNumber = "34695969605";
    const message = encodeURIComponent("Hi, I'd like to discuss pricing for URBNED.VENTURES services");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fixed-fee legal services tailored to your business needs. No hourly billing, no surprises.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col bg-background ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  {plan.subtitle && <span className="text-sm text-muted-foreground ml-1">{plan.subtitle}</span>}
                </div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start gap-2 pb-3 border-b border-border last:border-0">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-foreground">{service.name}</div>
                        <div className="text-sm text-primary font-semibold">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">{plan.details}</p>
                </div>
                <Button 
                  onClick={handleWhatsApp}
                  className={`w-full rounded-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-card border border-border text-foreground hover:bg-muted'}`}
                >
                  Book Your Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Reach out today to discuss your specific needs and get a detailed quote.
        </p>
      </div>
    </section>
  );
}