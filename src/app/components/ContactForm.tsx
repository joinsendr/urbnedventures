import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact Request from URBNED.VENTURES Website");
    const body = encodeURIComponent(`
Contact Request

From: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}
    `);

    window.location.href = `mailto:urbnedceo@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/20 shadow-xl bg-background">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. We'll get back to you as soon as possible, typically within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out and let's discuss how we can support your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Get in touch with our legal experts. We're available to answer your questions and guide you through the company formation process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                  <a href="mailto:urbnedceo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    urbnedceo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Phone / WhatsApp</h4>
                  <div className="space-y-1">
                    <a href="tel:+13026010025" className="text-muted-foreground hover:text-primary transition-colors block">
                      +1 302 601 0025 (US)
                    </a>
                    <a href="tel:+34695969605" className="text-muted-foreground hover:text-primary transition-colors block">
                      +34 695 969 605 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    URBNED INC.<br />
                    2803 Philadelphia Pike,<br />
                    Suite B 1128, Claymont,<br />
                    19703 DE, U.S.A.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mt-8 border border-primary/20">
              <h4 className="font-semibold mb-2 text-foreground">Office Hours</h4>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM EST
                <br />
                Saturday: 10:00 AM - 2:00 PM EST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border shadow-lg bg-background">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your needs..."
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-2xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}