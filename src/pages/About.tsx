import LegalLayout from "../components/LegalLayout";

export default function About() {
  return (
    <LegalLayout title="About Us">
      <p className="lead">Welcome – Your Digital Gateway to Premium Entertainment</p>
      <p>
        At Chalchitra, we believe that OTT streaming should be accessible, flexible, and empowering.
        That's why we created a modern OTT streaming platform designed to bring the joy of OTT streaming
        directly to your screen anytime, anywhere.
      </p>
      <p>
        Our platform offers a curated collection of high-quality OTT streaming videos led by experienced
        content curators, focused on improving your entertainment skills and confidence on the platform.
        Whether you're a beginner or an advanced viewer, our diverse video library helps you stay consistent
        with your OTT streaming journey, at your own pace.
      </p>
      <p>
        As an OTT streaming subscription service, Chalchitra bridges the gap between traditional OTT
        streaming classes and the demands of today's digital lifestyle. No more fixed schedules or crowded
        platforms — just pure, uninterrupted OTT streaming whenever you need it.
      </p>

      <h2>Our Mission</h2>
      <p>
        To make OTT streaming an everyday joy for everyone by delivering affordable, expert-guided, and
        engaging content that nurtures your entertainment passion and skills.
      </p>
      <p>Join the Chalchitra movement today — and let's view, experience, and grow together.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 not-prose">
        {[
          ["Platform", "Watch anytime"],
          ["Expert Content Curators", "Certified professionals"],
          ["Flexible Schedule", "Your own pace"],
          ["Entertainment Passion", "Content & entertainment"],
        ].map(([title, desc]) => (
          <div key={title} className="p-4 rounded-xl"
            style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
            <p className="text-white font-bold text-sm mb-1">{title}</p>
            <p className="text-slate-400 text-xs">{desc}</p>
          </div>
        ))}
      </div>
    </LegalLayout>
  );
}
