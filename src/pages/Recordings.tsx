import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import { Play, X } from "lucide-react";

const recordings = [
  {
    title: "Rachmaninoff / Heifetz",
    description: "It's Peaceful Here · Julian Hsieh · Violin",
    videoId: "LoMTDmGdOLs",
    year: "2026",
  },
  {
    title: "Dvořák Piano Quintet No. 2",
    description: "Op. 81 · March 2026",
    videoId: "u5zt7Mwpe8g",
    year: "2026",
  },
  {
    title: "Chausson Poème",
    description: "Op. 25 · Violin & Piano Quintet · March 2026",
    videoId: "w6qT5j_1Sio",
    year: "2026",
  },
  {
    title: "Student Recital: Julian Hsieh",
    description: "Solo Recital · Carnegie Mellon University · April 2024",
    videoId: "Zm6blwXRefo",
    year: "2024",
  },
  {
    title: "Student Chamber Recital",
    description: "Andrew Gray, Julian Hsieh & Bernard Sheng · April 2024",
    videoId: "AUKusTpRuRA",
    year: "2024",
  },
];

const Recordings = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = recordings.find((r) => r.videoId === activeId);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Page header ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-14">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="w-5 h-px bg-accent/60" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Performances
            </span>
          </motion.div>
          <motion.h1
            className="font-display font-semibold text-foreground leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem,7vw,6rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Recordings
          </motion.h1>
        </div>
      </section>

      {/* ── Bento grid ── */}
      <section className="pb-28 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-14">
          <FadeInOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {recordings.map((rec) => (
                <button
                  key={rec.videoId}
                  className="group relative aspect-video overflow-hidden cursor-pointer text-left hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  onClick={() => setActiveId(rec.videoId)}
                >
                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${rec.videoId}/maxresdefault.jpg`}
                    alt={rec.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />

                  {/* Gradient overlay — stronger at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Play button — centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full backdrop-blur-md bg-white/15 border border-white/25 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                      <Play
                        size={13}
                        className="text-white group-hover:text-background ml-0.5 transition-colors duration-300"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Text overlay — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1.5">
                      {rec.year}
                    </p>
                    <h3 className="font-display text-white font-semibold tracking-tight leading-snug text-[1rem]">
                      {rec.title}
                    </h3>
                    <p className="text-white/55 text-[12px] mt-1 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </button>
              ))}
              {/* Placeholder card */}
              <div className="group relative aspect-video overflow-hidden rounded-sm border border-border flex flex-col items-center justify-center gap-3 bg-muted/30">
                <div className="w-6 h-px bg-accent/50" />
                <p className="font-display text-foreground/30 text-[13px] tracking-tight">More coming soon</p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Video modal ── */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveId(null)}
                className="absolute -top-11 right-0 flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close"
              >
                <span className="text-[11px] uppercase tracking-[0.2em]">Close</span>
                <X size={18} strokeWidth={1.5} />
              </button>

              {/* Embed */}
              <div className="aspect-video w-full border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
                  title={active?.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Meta */}
              {active && (
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/35 mb-1.5">
                      {active.year}
                    </p>
                    <h3 className="font-display text-white font-semibold text-lg tracking-tight">
                      {active.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-1">{active.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Recordings;
