import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen relative" style={{ background: "transparent" }}>
      <div className="fixed inset-0 -z-10" style={{ background: "#0a0a0f" }} />
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5"
        style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo/chalcitratv.png" alt="Chalchitra" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 md:px-8">
        <article className="max-w-3xl mx-auto legal-prose">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-8 text-center"
            style={{ background: "linear-gradient(90deg,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {title}
          </h1>
          {children}
        </article>
      </main>

      <Footer />
    </div>
  );
}
