import { motion, AnimatePresence } from "framer-motion";
import { X, User, Smartphone, CreditCard, Calendar, LogOut } from "lucide-react";
import { UserAccess, formatPhone, formatPlan, formatMemberSince } from "../lib/access";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  access: UserAccess | null;
  onSubscribe: () => void;
  onLogout: () => void;
}

export default function AccountModal({ isOpen, onClose, access, onSubscribe, onLogout }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(160deg,#1E293B,#0F172A)", border: "1px solid rgba(139,92,246,0.35)" }}
          >
            <div className="p-6 relative">
              <button onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white transition"
                style={{ background: "rgba(15,23,42,0.6)" }}>
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-6 pt-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)" }}>
                  <User size={22} className="text-white" />
                </div>
                <h2 className="text-2xl font-black text-white">My Account</h2>
              </div>

              {access ? (
                <div className="space-y-4">
                  <div className="px-4 py-3 rounded-xl"
                    style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.35)" }}>
                    <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Active Subscription</p>
                  </div>

                  {[
                    { icon: Smartphone, label: "Mobile", value: formatPhone(access.phone) },
                    { icon: CreditCard, label: "Plan", value: formatPlan(access.plan) },
                    { icon: Calendar, label: "Member Since", value: formatMemberSince(access.memberSince) },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(30,41,59,0.5)", border: "1px solid rgba(100,116,139,0.25)" }}>
                      <div className="p-2 rounded-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
                        <Icon size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-1">{label}</p>
                        <p className="text-white font-semibold">{value}</p>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => { onLogout(); onClose(); }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-red-400 hover:text-red-300 transition mt-2"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <p className="text-slate-400 text-sm">No active subscription yet.</p>
                  <button onClick={() => { onClose(); onSubscribe(); }}
                    className="px-6 py-3 rounded-xl font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#8B5CF6,#7C3AED)" }}>
                    Subscribe Now
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
