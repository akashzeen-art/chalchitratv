import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Compass } from "lucide-react";
import { Video, trendingVideos } from "../data/videos";

const FEATURED: { video: Video; tag: string; desc: string }[] = [
  { video: trendingVideos[2], tag: "Featured",      desc: "High-stakes missions. Zero room for error." },
  { video: trendingVideos[0], tag: "Crime Thriller", desc: "A gripping investigation unfolds with deadly consequences." },
  { video: trendingVideos[3], tag: "Mystery",        desc: "A witness vanishes. The truth won't stay buried." },
  { video: trendingVideos[8], tag: "Action",         desc: "One shot. One chance. No second takes." },
  { video: trendingVideos[9], tag: "Thriller",       desc: "Classified files surface with deadly consequences." },
];

interface Props {
  onWatchNow: (video: Video) => void;
  onExplore: () => void;
}

export default function HeroSection({ onWatchNow, onExplore }: Props) {
  const [idx, setIdx] = useState(0);
  const featured = FEATURED[idx];
  const next = FEATURED[(idx + 1) % FEATURED.length];

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FEATURED.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center px-6 md:px-16 pt-16">
      <div className="max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={featured.video.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background:"rgba(139,92,246,0.25)", color:"#8B5CF6", border:"1px solid rgba(139,92,246,0.5)" }}>
                {featured.tag}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400"
                style={{ background:"rgba(6,182,212,0.12)", border:"1px solid rgba(6,182,212,0.35)" }}>
                {featured.video.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 uppercase"
              style={{ textShadow:"0 2px 20px rgba(0,0,0,0.8)" }}>
              {featured.video.title}
            </h1>

            <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-lg"
              style={{ textShadow:"0 1px 10px rgba(0,0,0,0.9)" }}>
              {featured.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale:1.05, boxShadow:"0 0 30px rgba(139,92,246,0.6)" }}
            whileTap={{ scale:0.95 }}
            onClick={() => onWatchNow(featured.video)}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
            style={{ background:"linear-gradient(135deg,#8B5CF6,#7C3AED)" }}>
            <Play size={18} fill="white" /> Watch Now
          </motion.button>
          <motion.button
            whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
            onClick={onExplore}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border transition"
            style={{ borderColor:"#06B6D4", color:"#06B6D4", background:"rgba(6,182,212,0.08)" }}>
            <Compass size={18} /> Explore Collection
          </motion.button>
        </motion.div>

        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-400 uppercase tracking-widest">Up Next</p>
          <button
            onClick={() => setIdx((idx + 1) % FEATURED.length)}
            className="text-sm text-slate-300 hover:text-white transition truncate max-w-[200px]"
          >
            {next.video.title}
          </button>
          <div className="flex gap-1.5 ml-auto">
            {FEATURED.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === idx ? 20 : 6,
                  height: 6,
                  background: i === idx ? "#8B5CF6" : "rgba(148,163,184,0.4)",
                }}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-mono ml-2">
            {String(idx + 1).padStart(2,"0")} / {String(FEATURED.length).padStart(2,"0")}
          </span>
        </div>
      </div>

      <motion.div animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
        Scroll
      </motion.div>
    </div>
  );
}
