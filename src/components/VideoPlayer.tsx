import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, Minimize, SkipForward, X, PictureInPicture2 } from "lucide-react";

interface Props { isOpen: boolean; onClose: () => void; title: string; videoUrl: string; }

export default function VideoPlayer({ isOpen, onClose, title, videoUrl }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fs, setFs] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showCtrl, setShowCtrl] = useState(true);
  const [showSpeed, setShowSpeed] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const v = ref.current; if (!v) return;
    const on = (e: Event) => {
      if (e.type === "play") setPlaying(true);
      if (e.type === "pause") setPlaying(false);
      if (e.type === "timeupdate") setCurrent(v.currentTime);
      if (e.type === "loadedmetadata") setDuration(v.duration);
    };
    ["play","pause","timeupdate","loadedmetadata"].forEach(t => v.addEventListener(t, on));
    return () => ["play","pause","timeupdate","loadedmetadata"].forEach(t => v.removeEventListener(t, on));
  }, [isOpen]);

  useEffect(() => {
    const onFs = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFs = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) await el.requestFullscreen();
      else await document.exitFullscreen();
    } catch { /* fullscreen not supported */ }
  };

  const toggle = () => { if (!ref.current) return; playing ? ref.current.pause() : ref.current.play(); };
  const skip = (n: number) => { if (ref.current) ref.current.currentTime += n; };
  const fmt = (t: number) => { const m = Math.floor(t/60), s = Math.floor(t%60); return `${m}:${s.toString().padStart(2,"0")}`; };
  const handleMove = () => {
    setShowCtrl(true);
    clearTimeout(hideTimer.current);
    if (playing) hideTimer.current = setTimeout(() => setShowCtrl(false), 3000);
  };

  useEffect(() => {
    if (!isOpen) return;
    setPlaying(false);
    setCurrent(0);
    const v = ref.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [isOpen, videoUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(139,92,246,0.35)", background: "#000" }}
            onMouseMove={handleMove}
          >
            <div className="relative w-full aspect-video bg-black">
              <video
                ref={ref}
                src={videoUrl}
                className="absolute inset-0 w-full h-full object-contain"
                onClick={toggle}
                playsInline
              />

            {/* top bar */}
            <AnimatePresence>
              {showCtrl && (
                <motion.div initial={{ opacity:0,y:-8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }}
                  className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
                  style={{ background:"linear-gradient(to bottom,rgba(0,0,0,0.7),transparent)" }}>
                  <p className="text-white font-semibold truncate max-w-xs">{title}</p>
                  <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 transition">
                    <X size={20} className="text-white" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* center play */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background:"rgba(139,92,246,0.7)", backdropFilter:"blur(4px)" }}>
                  <Play size={28} className="text-white fill-white ml-1" />
                </div>
              </div>
            )}

            {/* bottom controls */}
            <AnimatePresence>
              {showCtrl && (
                <motion.div initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:8 }}
                  className="absolute bottom-0 left-0 right-0 px-4 py-4 space-y-3"
                  style={{ background:"linear-gradient(to top,rgba(0,0,0,0.85),transparent)" }}>

                  {/* progress */}
                  <input type="range" min={0} max={duration||0} value={current}
                    onChange={e => { const t = +e.target.value; if(ref.current) ref.current.currentTime=t; setCurrent(t); }}
                    className="w-full h-1 appearance-none rounded-full cursor-pointer accent-purple-500"
                    style={{ background:`linear-gradient(to right,#8B5CF6 ${(current/duration||0)*100}%,rgba(148,163,184,0.3) 0)` }}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Btn onClick={() => skip(-10)} title="−10s"><SkipForward size={18} className="text-white rotate-180" /></Btn>
                      <Btn onClick={toggle}>{playing ? <Pause size={20} className="text-white"/> : <Play size={20} className="text-white fill-white ml-0.5"/>}</Btn>
                      <Btn onClick={() => skip(10)} title="+10s"><SkipForward size={18} className="text-white"/></Btn>

                      <span className="text-slate-300 text-xs hidden sm:block">{fmt(current)} / {fmt(duration)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* speed */}
                      <div className="relative">
                        <button onClick={() => setShowSpeed(s=>!s)}
                          className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded transition hidden sm:block">
                          {speed}x
                        </button>
                        {showSpeed && (
                          <div className="absolute bottom-full right-0 mb-1 rounded-xl overflow-hidden shadow-xl"
                            style={{ background:"#1E293B", border:"1px solid rgba(139,92,246,0.3)" }}>
                            {[0.5,0.75,1,1.25,1.5,2].map(s => (
                              <button key={s} onClick={() => { setSpeed(s); if(ref.current) ref.current.playbackRate=s; setShowSpeed(false); }}
                                className="block w-full px-4 py-1.5 text-xs text-left transition"
                                style={{ color: speed===s?"#8B5CF6":"#cbd5e1", background: speed===s?"rgba(139,92,246,0.15)":"transparent" }}>
                                {s}x
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <Btn onClick={() => ref.current?.requestPictureInPicture().catch(()=>{})} title="PiP">
                        <PictureInPicture2 size={18} className="text-white hidden sm:block"/>
                      </Btn>
                      <Btn onClick={toggleFs} title="Fullscreen">
                        {fs ? <Minimize size={18} className="text-white"/> : <Maximize size={18} className="text-white"/>}
                      </Btn>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Btn({ children, onClick, title }: { children: React.ReactNode; onClick?: () => void; title?: string }) {
  return (
    <button onClick={onClick} title={title}
      className="p-2 rounded-lg hover:bg-white/10 transition">
      {children}
    </button>
  );
}
