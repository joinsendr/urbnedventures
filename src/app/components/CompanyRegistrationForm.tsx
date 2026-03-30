import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Briefcase, Check } from "lucide-react";

export function CompanyRegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    entityType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    businessActivity: "",
    numberOfFounders: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with all form data
    const subject = encodeURIComponent(`Company Registration: ${formData.companyName}`);
    const body = encodeURIComponent(`
Company Registration Application

Company Information:
- Company Name: ${formData.companyName}
- Entity Type: ${formData.entityType}
- Business Activity: ${formData.businessActivity}
- Number of Founders: ${formData.numberOfFounders}

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Country: ${formData.country}
- State: ${formData.state}

Additional Notes:
${formData.additionalNotes}
    `);

    window.location.href = `mailto:urbnedceo@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/20 shadow-xl bg-card">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Application Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Your company registration application has been sent. Our team will review your information and contact you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-5xl font-bold mb-4 text-foreground">Register Your Company</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to start your US company formation process. We'll handle everything from incorporation to compliance.
          </p>
        </div>

        <Card className="border-border shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Company Registration Application</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the information below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b border-border pb-2 text-foreground">Company Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                      required
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="entityType">Entity Type *</Label>
                    <select
                      id="entityType"
                      name="entityType"
                      value={formData.entityType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Type</option>
                      <option value="C-Corp">C-Corp</option>
                      <option value="LLC">LLC</option>
                      <option value="US Flip">US Flip</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessActivity">Business Activity *</Label>
                    <Input
                      id="businessActivity"
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      placeholder="E.g., Software Development"
                      required
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="numberOfFounders">Number of Founders *</Label>
                    <Input
                      id="numberOfFounders"
                      name="numberOfFounders"
                      type="number"
                      value={formData.numberOfFounders}
                      onChange={handleChange}
                      placeholder="1"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b border-border pb-2 text-foreground">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      required
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State (if US) *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Delaware"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b border-border pb-2 text-foreground">Additional Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-2xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Submit Application
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}