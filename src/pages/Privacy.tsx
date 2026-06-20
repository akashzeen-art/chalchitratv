import LegalLayout from "../components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-slate-400 text-sm mb-6">Last Updated: 19-06-2026</p>

      <p>
        This Privacy Policy describes how NumeroMobile ("we", "us", or "our") collects, uses, discloses, and
        protects your personal information when you visit or make a purchase from the Site or use any of our
        services (collectively, the "Services").
      </p>
      <p>
        By using our Services, you agree to the collection and use of information as outlined in this Privacy
        Policy. If you do not agree, please do not use the Services.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a) Information You Provide Directly</h3>
      <ul>
        <li>Contact details: Name, phone number, email address, postal address</li>
        <li>Order details: Product purchase history, billing/shipping information</li>
        <li>Account information: Login credentials, preferences</li>
        <li>Customer support queries and feedback</li>
      </ul>

      <h3>b) Automatically Collected Information</h3>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device type and operating system</li>
        <li>Pages visited, time spent, and referring URLs</li>
      </ul>
      <p>
        This data is gathered using technologies like cookies and other tracking tools to enhance your browsing
        experience and improve our services.
      </p>

      <h3>c) Third-Party Sources</h3>
      <ul>
        <li>Payment gateways (e.g., to process transactions)</li>
        <li>Analytics providers (e.g., to analyze traffic and usage patterns)</li>
        <li>Advertising or marketing platforms (e.g., to optimize campaign performance)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Process and fulfill orders</li>
        <li>Communicate with you about orders, updates, or issues</li>
        <li>Improve the functionality and user experience of the website</li>
        <li>Respond to inquiries and provide customer support</li>
        <li>Send promotional emails, newsletters, and marketing offers (you can opt out anytime)</li>
        <li>Monitor and prevent fraudulent transactions and abuse of our Services</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>Your personal information may be shared only in limited circumstances:</p>
      <ul>
        <li>With service providers such as payment processors, hosting providers, and email service platforms</li>
        <li>With business partners to conduct joint promotions or events (only with your consent)</li>
        <li>With legal authorities where required by law, to protect our rights or in connection with a legal claim</li>
        <li>With affiliates or during business restructuring, such as mergers or acquisitions</li>
      </ul>
      <p>We do not sell your personal information. We do not share sensitive personal information for targeted advertising purposes.</p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        Cookies help us provide, protect, and improve our services. They enable functionalities like remembering
        your preferences and measuring user activity. You can manage or disable cookies in your browser settings.
        However, disabling cookies may affect certain features or functionalities of the website.
      </p>

      <h2>5. User-Generated Content</h2>
      <p>
        If you post content (e.g., reviews or comments) on public areas of the Site, it becomes publicly accessible.
        We are not responsible for how others use this information.
      </p>

      <h2>6. External Links</h2>
      <p>
        Our website may include links to third-party sites. We are not responsible for the privacy or security
        practices of these external platforms. Please review their privacy policies separately.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from
        children. If you believe a child has submitted personal information through our platform, please contact us
        immediately at <a href="mailto:bd@numeromobile.com">bd@numeromobile.com</a> and we will take prompt steps
        to delete such information from our records.
      </p>

      <h2>8. Security and Retention</h2>
      <p>
        We take reasonable precautions to protect your personal information. However, no online transmission or
        storage is completely secure. We retain your information only as long as necessary for our business purposes
        or to meet legal requirements.
      </p>

      <h2>9. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access and update your personal information</li>
        <li>Delete your data</li>
        <li>Opt out of marketing communications</li>
        <li>Restrict or object to certain data processing</li>
        <li>Request data portability</li>
      </ul>
      <p>To make any such request, please contact us at:</p>
      <ul>
        <li><a href="mailto:bd@numeromobile.com">bd@numeromobile.com</a></li>
        <li>NumeroMobile, 417, Tower A1, Sector-49, Gurgaon, Haryana, 122011</li>
      </ul>

      <h2>10. Disclaimer</h2>
      <p>
        The content provided on this platform, including movies and shows, OTT streaming videos, program information,
        and related materials, is intended for general informational and educational purposes only. It is not a substitute
        for professional medical, dietary, or program advice. Users are advised to consult a qualified health professional
        or expert regarding specific dietary needs, allergies, or medical conditions before following any movies and shows
        or watchlists.
      </p>
      <p>
        By using this platform and trying the movies and shows or OTT streaming techniques, you acknowledge that you do
        so voluntarily and at your own risk. The platform and its creators shall not be held responsible for any allergic
        reactions, content-related illnesses, injuries, damages, or losses resulting from the use of this content.
        Individual results and experiences may vary.
      </p>

      <h2>11. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or
        relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in
        Gurgaon, Haryana.
      </p>

      <h2>12. Updates to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations.
        Updates will be posted on this page with the revised date.
      </p>
    </LegalLayout>
  );
}
