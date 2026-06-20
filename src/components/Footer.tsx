import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const legal = [
  { label: "Terms of Services", path: "/terms" },
  { label: "Refund Policy", path: "/refund" },
  { label: "Privacy Policy", path: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden" style={{ background:"rgba(0,0,0,0.3)", backdropFilter:"blur(8px)", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <motion.div
        animate={{ backgroundPosition:["0% 50%","100% 50%","0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease:"linear" }}
        className="h-px w-full"
        style={{ background:"linear-gradient(90deg,#8B5CF6,#06B6D4,#F59E0B,#8B5CF6)", backgroundSize:"300% 100%" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 text-center">
        <div className="flex items-center justify-center mb-3">
          <img src="/logo/chalcitratv.png" alt="Chalchitra" className="h-10 w-auto" />
        </div>
        <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
          Your gateway to premium desi thriller, crime & drama content
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mb-6">
          {legal.map((item, i) => (
            <span key={item.path} className="flex items-center gap-2">
              {i > 0 && <span className="text-slate-600">|</span>}
              <Link to={item.path} className="hover:text-cyan-400 transition">{item.label}</Link>
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          Copyright © 2026, NumeroMobile Private Limited All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
