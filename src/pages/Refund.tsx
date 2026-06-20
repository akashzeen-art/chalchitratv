import LegalLayout from "../components/LegalLayout";

export default function Refund() {
  return (
    <LegalLayout title="Refund Policy">
      <p className="text-slate-400 text-sm mb-6">Last Updated: 19-06-2026</p>

      <p>
        Thank you for subscribing to NumeroMobile's services. We hope you are satisfied with our services,
        but if not, we're here to help.
      </p>

      <h2>1. Free Trial</h2>
      <p>
        NumeroMobile offers no free trial for new users to experience the services before purchasing a
        subscription. During the trial period, users can cancel their subscription at any time without being charged.
      </p>

      <h2>2. Cancellation Policy</h2>
      <p>
        Subscribers may cancel their recurring subscription at any time. Upon cancellation, your account will
        remain active until the end of your current billing cycle.
      </p>

      <h2>3. Refund Eligibility</h2>
      <p>
        To be eligible for a refund, you must submit a request within 2 days of your subscription start date.
        Refunds may be considered on a case-by-case basis and are granted at the sole discretion of NumeroMobile.
      </p>
      <p>
        Refund requests can be made if you encounter technical issues that prevent you from using our service
        and that cannot be resolved by our support team. Proof of the issue may be required.
      </p>
      <p>
        Please note that refunds are not guaranteed and may vary depending on the circumstances. Refund requests
        due to issues beyond NumeroMobile's control (e.g., changes in personal circumstances, third-party hardware
        or software failures) will not be honored.
      </p>

      <h2>4. Process for Requesting a Refund</h2>
      <p>
        To request a refund, please contact our customer support team at{" "}
        <a href="mailto:bd@numeromobile.com">bd@numeromobile.com</a>. Include your account information,
        subscription details, and a brief explanation of why you are requesting a refund.
      </p>

      <h2>5. Refund Processing</h2>
      <p>
        Once your refund request is received and inspected, we will send you an email to notify you of the
        approval or rejection of your refund. If approved, your refund will be processed, and a credit will
        automatically be applied to your original method of payment within 7 working days. Please note that
        refunds can only be made back to the original payment method used at the time of purchase.
      </p>

      <h2>6. Changes to Refund Policy</h2>
      <p>
        NumeroMobile reserves the right to modify this refund policy at any time. Changes will take effect
        immediately upon their posting on the website. By continuing to use our services after changes are made,
        you agree to be bound by the revised policy.
      </p>

      <h2>Scenarios Where Refunds Would Typically Be Granted</h2>
      <ul>
        <li>
          <strong>Technical Issues:</strong> The customer experiences persistent technical issues that prevent
          them from using the product effectively, despite multiple attempts by the support team to resolve the problem.
        </li>
        <li>
          <strong>Billing Error:</strong> The customer was incorrectly charged due to a billing error on
          NumeroMobile's part.
        </li>
      </ul>

      <h2>Scenarios Where Refunds Would Not Typically Be Granted</h2>
      <ul>
        <li>
          <strong>Change of Mind:</strong> The customer decides they no longer want or need the product after
          the refund eligibility period has passed.
        </li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our refund policy, please contact us at{" "}
        <a href="mailto:bd@numeromobile.com">bd@numeromobile.com</a>.
      </p>
    </LegalLayout>
  );
}
