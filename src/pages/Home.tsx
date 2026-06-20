import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import UnlockModal from "../components/UnlockModal";
import AccountModal from "../components/AccountModal";
import VideoPlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";
import ScrollHUD from "../components/ScrollHUD";
import { useWebGLOcean } from "../hooks/useWebGLOcean";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { homeSections, Video } from "../data/videos";
import { loadAccess, saveAccess, clearAccess, UserAccess } from "../lib/access";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video|null>(null);
  const [showModal, setShowModal]         = useState(false);
  const [showAccount, setShowAccount]     = useState(false);
  const [showPlayer, setShowPlayer]       = useState(false);
  const [access, setAccess]               = useState<UserAccess | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollProgress = useScrollProgress();
  const canvasRef      = useWebGLOcean(scrollProgress);

  useEffect(() => {
    setAccess(loadAccess());
  }, []);

  const playVideo = (v: Video) => {
    setSelectedVideo(v);
    if (!access) setShowModal(true);
    else setShowPlayer(true);
  };

  const handleUnlock = (data: { phone: string; plan: "weekly"|"monthly" }) => {
    const val = saveAccess(data.phone, data.plan);
    setAccess(val);
    setShowModal(false);
    setShowPlayer(true);
  };

  const handleLogout = () => {
    clearAccess();
    setAccess(null);
    setShowPlayer(false);
    setSelectedVideo(null);
  };

  const scrollToCollection = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen relative" style={{ background:"transparent" }}>

      <canvas
        ref={canvasRef}
        style={{ position:"fixed", inset:0, width:"100vw", height:"100vh", zIndex:0, pointerEvents:"none" }}
      />

      <Navbar onMyAccount={() => setShowAccount(true)} />
      <ScrollHUD progress={scrollProgress} />

      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}
        style={{ position:"relative", zIndex:2 }}
      >
        <HeroSection onWatchNow={playVideo} onExplore={scrollToCollection} />

        <div ref={contentRef} id="premium-collection" className="scroll-mt-20">
          <section className="py-12 px-4 md:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-400 mb-2">Premium Collection</p>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Explore Top Picks</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
              Curated desi thrillers, crime & drama — stream anytime.
            </p>
          </section>

          {homeSections.map(sec => (
            <VideoSection
              key={sec.id}
              id={sec.id}
              title={sec.title}
              subtitle={sec.subtitle}
              videos={sec.videos}
              layout={sec.layout}
              onVideoClick={playVideo}
            />
          ))}
        </div>

        <Footer />
      </motion.div>

      <UnlockModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onUnlock={handleUnlock}
      />

      <AccountModal
        isOpen={showAccount}
        onClose={() => setShowAccount(false)}
        access={access}
        onSubscribe={() => setShowModal(true)}
        onLogout={handleLogout}
      />

      {selectedVideo && (
        <VideoPlayer
          isOpen={showPlayer}
          onClose={() => { setShowPlayer(false); setSelectedVideo(null); }}
          title={selectedVideo.title}
          videoUrl={selectedVideo.videoUrl}
        />
      )}
    </div>
  );
}
