import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";
import { Video } from "../data/videos";

interface Props {
  id?: string;
  title: string;
  subtitle?: string;
  videos: Video[];
  layout: string;
  onVideoClick: (v: Video) => void;
}

export default function VideoSection({ id, title, subtitle, videos, layout, onVideoClick }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanL(el.scrollLeft > 0);
    setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) { el.addEventListener("scroll", checkScroll); checkScroll(); }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, [videos]);

  const scroll = (dir: 1 | -1) =>
    sliderRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  const renderContent = () => {
    // --- SLIDER ---
    if (layout === "slider") return (
      <div className="relative group/slider">
        <div ref={sliderRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {videos.map(v => (
            <div key={v.id} className="flex-shrink-0 w-80 h-48 md:w-96 md:h-56">
              <VideoCard {...v} onClick={() => onVideoClick(v)} />
            </div>
          ))}
        </div>
        {canL && <SliderBtn dir="left" onClick={() => scroll(-1)} />}
        {canR && <SliderBtn dir="right" onClick={() => scroll(1)} />}
      </div>
    );

    // --- MASONRY ---
    if (layout === "masonry") return (
      <motion.div variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {videos.map((v, i) => (
          <motion.div key={v.id} variants={fade} className="break-inside-avoid mb-4"
            style={{ height: i % 3 === 0 ? 280 : 220 }}>
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );

    // --- PINTEREST (portrait) ---
    if (layout === "pinterest") return (
      <motion.div variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {videos.map(v => (
          <motion.div key={v.id} variants={fade} className="break-inside-avoid mb-4 h-64 md:h-80">
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );

    // --- CAROUSEL (3d staggered) ---
    if (layout === "carousel") return (
      <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="flex gap-4 flex-wrap justify-center">
        {videos.map((v, i) => (
          <motion.div key={v.id} variants={fade}
            whileHover={{ scale: 1.06, zIndex: 10 }}
            className="w-44 h-60 md:w-52 md:h-72 flex-shrink-0"
            style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 2}deg)` }}>
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );

    // --- FEATURED ---
    if (layout === "featured") return (
      <motion.div variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="space-y-4">
        <motion.div variants={fade} className="h-72 md:h-96">
          <VideoCard {...videos[0]} onClick={() => onVideoClick(videos[0])} />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.slice(1, 9).map(v => (
            <motion.div key={v.id} variants={fade} className="h-40 md:h-48">
              <VideoCard {...v} onClick={() => onVideoClick(v)} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );

    // --- GRID 2 rows x 5 cols ---
    if (layout === "grid2x5") return (
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
      >
        {videos.slice(0, 10).map(v => (
          <motion.div key={v.id} variants={fade} className="w-full">
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );

    // --- GRID 2 rows x 6 cols ---
    if (layout === "grid2x6") return (
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
      >
        {videos.slice(0, 12).map(v => (
          <motion.div key={v.id} variants={fade} className="w-full">
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );

    // --- GRID (default) ---
    return (
      <motion.div variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map(v => (
          <motion.div key={v.id} variants={fade} className="h-44 md:h-52">
            <VideoCard {...v} onClick={() => onVideoClick(v)} />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id={id} className="py-10 md:py-14 px-4 md:px-8 scroll-mt-20" style={{ background:"transparent" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8 md:mb-10"
        >
          <div className="flex items-center gap-3 md:gap-4 w-full max-w-3xl mb-4">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6))" }} />
            <span className="text-purple-400 text-lg">✦</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.6), transparent)" }} />
          </div>

          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide leading-tight px-4"
            style={{
              background: "linear-gradient(90deg, #8B5CF6, #06B6D4, #F59E0B, #8B5CF6)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 12px rgba(139,92,246,0.35))",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl px-4">{subtitle}</p>
          )}

          <div
            className="mt-4 h-1 rounded-full"
            style={{
              width: "4rem",
              background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
              boxShadow: "0 0 16px rgba(139,92,246,0.5)",
            }}
          />
        </motion.div>
        {renderContent()}
      </div>
    </section>
  );
}

function SliderBtn({ dir, onClick }: { dir: "left"|"right"; onClick: () => void }) {
  const isLeft = dir === "left";
  return (
    <button onClick={onClick}
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-10 p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition`}
      style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(139,92,246,0.4)" }}>
      {isLeft ? <ChevronLeft size={22} className="text-white" /> : <ChevronRight size={22} className="text-white" />}
    </button>
  );
}
