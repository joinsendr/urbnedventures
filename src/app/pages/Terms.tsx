import { LegalLayout } from "../components/legal/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="November 16, 2026">
      <p>
        These Terms of Service ("Terms") are a binding agreement between you and Urbned Inc., a
        Delaware corporation with its registered office at 16192 Coastal Highway, Lewes, Delaware
        19958, United States ("Urbned," "URBNED," "we," "us," or "our"). These Terms govern your
        access to and use of our AI-powered coding workspace and related services (the "Service").
        By accessing or using the Service, you agree to be bound by these Terms. If you do not
        agree, do not use the Service.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        URBNED provides an AI coding agent and development workspace that allows users to describe
        software they wish to build in natural language, and that can plan, generate, execute, test
        and help debug code on the user's behalf. Available features, AI models and capabilities
        may change over time and are not guaranteed to remain the same.
      </p>

      <h2>2. Eligibility and Account Registration</h2>
      <p>
        You must be at least 18 years old, or the age of majority in your jurisdiction, to create
        an account and use the Service. You are responsible for maintaining the confidentiality of
        your account credentials and for all activity that occurs under your account. You agree to
        provide accurate and complete information when registering and to keep it up to date.
      </p>

      <h2>3. Prepaid Credits and Payments</h2>
      <ul>
        <li>
          The Service operates on a prepaid credit basis. You purchase credits in advance, and
          credits are consumed based on your actual usage of AI models and computing resources.
        </li>
        <li>There is no mandatory subscription and no automatic recurring billing.</li>
        <li>
          The conversion rate between the currency you pay in and the number of credits you
          receive is set by Urbned and may be updated from time to time; the rate in effect at the
          time of your purchase will apply to that purchase.
        </li>
        <li>
          Credits are non-transferable and, except where required by applicable law, non-refundable
          once consumed. Unused credits may be subject to the refund or expiry terms shown at the
          time of purchase.
        </li>
        <li>
          You are responsible for any taxes associated with your purchase of credits, other than
          taxes based on Urbned's net income.
        </li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any applicable law or regulation;</li>
        <li>
          Build, generate or distribute malware, or software designed to gain unauthorized access
          to systems or data;
        </li>
        <li>Infringe the intellectual property, privacy or other rights of any third party;</li>
        <li>Attempt to disrupt, overload or circumvent the security of the Service; or</li>
        <li>
          Resell or provide unauthorized third-party access to the Service without our prior
          written consent.
        </li>
      </ul>

      <h2>5. Your Content and Projects</h2>
      <p>
        You retain ownership of the prompts, files and project content you submit to the Service
        ("Your Content"). You grant Urbned a limited license to host, process and transmit Your
        Content solely as necessary to provide and improve the Service. You are solely responsible
        for Your Content and for ensuring you have the necessary rights to submit it.
      </p>

      <h2>6. AI-Generated Output</h2>
      <p>
        The Service uses artificial intelligence models to generate code, text and other output
        ("Output"). AI-generated Output may contain errors, be incomplete, or infringe third-party
        rights despite our efforts to prevent this. You are responsible for reviewing, testing and
        validating any Output before relying on it or deploying it in a production environment.
        Urbned makes no warranty that Output will be accurate, secure, or fit for any particular
        purpose.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The Service, including its software, design, trademarks and underlying technology
        (excluding Your Content and Output), is owned by Urbned Inc. or its licensors and is
        protected by intellectual property laws. Except for the limited rights expressly granted
        in these Terms, no other rights are granted to you.
      </p>

      <h2>8. Service Availability and Disclaimers</h2>
      <p>
        The Service is provided "as is" and "as available," without warranties of any kind, whether
        express, implied or statutory, including implied warranties of merchantability, fitness
        for a particular purpose, and non-infringement. We do not warrant that the Service will be
        uninterrupted, error-free, or secure.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Urbned Inc. and its officers, directors, employees
        and agents will not be liable for any indirect, incidental, special, consequential or
        punitive damages, or any loss of profits, data, or goodwill, arising out of or related to
        your use of the Service. Our total aggregate liability for any claim arising out of or
        relating to these Terms or the Service will not exceed the amount you paid to Urbned for
        credits in the twelve (12) months preceding the claim.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Urbned Inc. and its officers, directors, employees
        and agents from any claims, damages, losses and expenses (including reasonable attorneys'
        fees) arising out of your use of the Service, Your Content, or your violation of these
        Terms or applicable law.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate your access to the Service at any time for violation of these
        Terms or for any other reason, with or without notice. You may stop using the Service at
        any time. Provisions that by their nature should survive termination (including ownership,
        disclaimers, limitation of liability, and governing law) will survive.
      </p>

      <h2>12. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States, without
        regard to its conflict of laws principles. Any dispute arising out of or relating to these
        Terms or the Service will be subject to the exclusive jurisdiction of the state or federal
        courts located in Delaware, and you consent to the personal jurisdiction of such courts.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the revised Terms on this page
        with an updated "Last updated" date. Your continued use of the Service after any changes
        constitutes your acceptance of the revised Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>Questions about these Terms should be directed to:</p>
      <p>
        Urbned Inc.
        <br />
        16192 Coastal Highway, Lewes, Delaware 19958, United States
        <br />
        Email:{" "}
        <a href="mailto:ceo@urbned.ventures">ceo@urbned.ventures</a>
      </p>
    </LegalLayout>
  );
}
