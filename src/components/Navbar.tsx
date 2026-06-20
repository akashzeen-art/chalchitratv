import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  onMyAccount: () => void;
}

const links: { label: string; path?: string; action?: "account" }[] = [
  { label: "Home", path: "/" },
  { label: "My Account", action: "account" },
  { label: "About Us", path: "/about" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Refund Policy", path: "/refund" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar({ onMyAccount }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = (item: typeof links[number]) => {
    setOpen(false);
    if (item.action === "account") {
      onMyAccount();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,15,0.6)" : "rgba(10,10,15,0.1)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(6px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo/chalcitratv.png" alt="Chalchitra" className="h-10 w-auto" />
          </Link>

          <button
            onClick={() => setOpen(o => !o)}
            className="p-2 text-slate-300 hover:text-white transition"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 z-50 h-full w-72 glass border-l border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                <span className="text-white font-bold">Menu</span>
                <button onClick={() => setOpen(false)} className="p-2 text-slate-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <p className="px-5 pt-4 pb-2 text-xs text-slate-500">Premium desi thriller & crime content</p>
              <nav className="flex flex-col gap-1 p-4 pt-2">
                {links.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleLink(item)}
                    className="text-left px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition text-sm font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
