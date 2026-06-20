import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-slate-200" style={{ background: "linear-gradient(160deg,#0F172A,#1E293B)" }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-500 mb-8">NumeroMobile</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          <p>
            This Privacy Policy describes how NumeroMobile ("we", "us", or "our") collects, uses,
            discloses, and protects your personal information when you visit or make a purchase
            from (the "Site") or use any of our services (collectively, the "Services").
          </p>
          <p>
            By using our Services, you agree to the collection and use of information as outlined
            in this Privacy Policy. If you do not agree, please do not use the Services.
          </p>

          <Section title="1. Information We Collect">
            <SubTitle>a) Information You Provide Directly</SubTitle>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details: Name, phone number, email address, postal address</li>
              <li>Order details: Product purchase history, billing/shipping information</li>
              <li>Account information: Login credentials, preferences</li>
              <li>Customer support queries and feedback</li>
            </ul>
            <SubTitle>b) Automatically Collected Information</SubTitle>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
            </ul>
            <p>
              This data is gathered using technologies like cookies and other tracking tools to
              enhance your browsing experience and improve our services.
            </p>
            <SubTitle>c) Third-Party Sources</SubTitle>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment gateways (e.g., to process transactions)</li>
              <li>Analytics providers (e.g., to analyze traffic and usage patterns)</li>
              <li>Advertising or marketing platforms (e.g., to optimize campaign performance)</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>Process and fulfill orders</li>
              <li>Communicate with you about orders, updates, or issues</li>
              <li>Improve the functionality and user experience of the website</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send promotional emails, newsletters, and marketing offers (you can opt out anytime)</li>
              <li>Monitor and prevent fraudulent transactions and abuse of our Services</li>
            </ul>
          </Section>

          <Section title="3. How We Share Your Information">
            <p>Your personal information may be shared only in limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>With service providers such as payment processors, hosting providers, and email service platforms</li>
              <li>With business partners to conduct joint promotions or events (only with your consent)</li>
              <li>With legal authorities where required by law, to protect our rights or in connection with a legal claim</li>
              <li>With affiliates or during business restructuring, such as mergers or acquisitions</li>
            </ul>
            <p className="mt-2">
              We do not sell your personal information. We do not share sensitive personal
              information for targeted advertising purposes.
            </p>
          </Section>

          <Section title="4. Cookies and Tracking Technologies">
            <p>
              Cookies help us provide, protect, and improve our services. They enable
              functionalities like remembering your preferences and measuring user activity. You
              can manage or disable cookies in your browser settings. However, disabling cookies
              may affect certain features or functionalities of the website.
            </p>
          </Section>

          <Section title="5. User-Generated Content">
            <p>
              If you post content (e.g., reviews or comments) on public areas of the Site, it
              becomes publicly accessible. We are not responsible for how others use this information.
            </p>
          </Section>

          <Section title="6. External Links">
            <p>
              Our website may include links to third-party sites. We are not responsible for the
              privacy or security practices of these external platforms. Please review their privacy
              policies separately.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Our Services are not intended for users under the age of 16. We do not knowingly
              collect personal data from children. If you believe a child has submitted personal
              information through our platform, please contact us immediately at{" "}
              <a href="mailto:bd@numeromobile.com" className="text-cyan-400 hover:underline">
                bd@numeromobile.com
              </a>{" "}
              and we will take prompt steps to delete such information from our records.
            </p>
          </Section>

          <Section title="8. Security and Retention">
            <p>
              We take reasonable precautions to protect your personal information. However, no
              online transmission or storage is completely secure. We retain your information only
              as long as necessary for our business purposes or to meet legal requirements.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Access and update your personal information</li>
              <li>Delete your data</li>
              <li>Opt out of marketing communications</li>
              <li>Restrict or object to certain data processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-2">To make any such request, please contact us at:</p>
            <div className="mt-2 space-y-1 pl-2 border-l-2 border-purple-500">
              <p>
                <a href="mailto:bd@numeromobile.com" className="text-cyan-400 hover:underline">
                  bd@numeromobile.com
                </a>
              </p>
              <p>NumeroMobile, 417, Tower A1, Sector-49, Gurgaon, Haryana, 122011</p>
            </div>
          </Section>

          <Section title="10. Disclaimer">
            <p>
              The content provided on this platform, including movies and shows, OTT streaming
              videos, and related materials, is intended for general informational and educational
              purposes only. It is not a substitute for professional advice. Users are advised to
              consult a qualified professional regarding specific needs before following any content
              or plans.
            </p>
            <p className="mt-2">
              By using this platform, you acknowledge that you do so voluntarily and at your own
              risk. The platform and its creators shall not be held responsible for any damages or
              losses resulting from the use of this content. Individual results and experiences may
              vary.
            </p>
          </Section>

          <Section title="11. Governing Law and Jurisdiction">
            <p>
              These Terms shall be governed and interpreted in accordance with the laws of India.
              Any disputes arising out of or relating to the use of this website shall be subject
              to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.
            </p>
          </Section>

          <Section title="12. Updates to this Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or
              legal obligations. Updates will be posted on this page with the revised date.
            </p>
          </Section>
        </div>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition mt-10"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold text-white mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-slate-200 mt-3 mb-1">{children}</p>;
}
