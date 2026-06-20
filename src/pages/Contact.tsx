import LegalLayout from "../components/LegalLayout";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <LegalLayout title="Contact Us">
      <p className="text-center text-lg font-bold text-white mb-8">NUMERO MOBILE PRIVATE LIMITED</p>

      <div className="space-y-4 not-prose">
        <div className="flex items-start gap-4 p-5 rounded-xl"
          style={{ background: "rgba(30,41,59,0.5)", border: "1px solid rgba(100,116,139,0.25)" }}>
          <div className="p-2 rounded-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
            <Phone size={20} className="text-purple-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Contact Number</p>
            <a href="tel:9217523567" className="text-white font-semibold hover:text-cyan-400 transition">
              9217523567
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl"
          style={{ background: "rgba(30,41,59,0.5)", border: "1px solid rgba(100,116,139,0.25)" }}>
          <div className="p-2 rounded-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
            <Mail size={20} className="text-purple-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Email ID</p>
            <a href="mailto:bd@numeromobile.com" className="text-white font-semibold hover:text-cyan-400 transition">
              bd@numeromobile.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl"
          style={{ background: "rgba(30,41,59,0.5)", border: "1px solid rgba(100,116,139,0.25)" }}>
          <div className="p-2 rounded-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
            <MapPin size={20} className="text-purple-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Full Address</p>
            <p className="text-white font-semibold leading-relaxed">
              4th floor, Tower A1, SPAZE ITECH PARK, 417, Sector 49, Gurugram, Haryana 122018
            </p>
          </div>
        </div>
      </div>
    </LegalLayout>
  );
}
