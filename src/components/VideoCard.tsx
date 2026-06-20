import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "../data/videos";

interface Props extends Video { onClick: () => void; }

export default function VideoCard({ title, thumbnail, category, aspect, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-xl overflow-hidden w-full"
      style={{
        aspectRatio: aspect === "portrait" ? "2/3" : "16/9",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "transparent",
      }}
    >
      {/* thumbnail */}
      <img
        src={thumbnail} alt={title} loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ opacity: 0.7 }}
        onError={e => { (e.target as HTMLImageElement).style.opacity = "0"; }}
      />

      {/* subtle gradient at bottom only */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />

      {/* glow border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ boxShadow:"inset 0 0 0 2px #8B5CF6" }} />

      {/* play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <motion.div whileHover={{ scale:1.15 }}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background:"rgba(139,92,246,0.85)", backdropFilter:"blur(4px)" }}>
          <Play size={18} className="text-white fill-white ml-0.5" />
        </motion.div>
      </div>

      {/* info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5"
          style={{ color:"#a78bfa", textShadow:"0 1px 6px rgba(0,0,0,0.9)" }}>{category}</p>
        <p className="text-white text-sm font-bold line-clamp-1"
          style={{ textShadow:"0 1px 6px rgba(0,0,0,0.9)" }}>{title}</p>
      </div>
    </motion.div>
  );
}
