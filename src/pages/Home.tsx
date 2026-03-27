import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import shoot19 from "@/assets/Shoot 19 Edited.jpg";
import shoot11 from "@/assets/Shoot 11.jpeg";
import { ArrowRight, ArrowDownRight } from "lucide-react";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar invertOnTop />

      {/* ── Hero — full-bleed split: dark left / photo right ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        <h1 className="sr-only">Julian Hsieh - Violinist & Educator</h1>

        {/* Dark left half */}
        <div className="absolute inset-0 bg-[#13161f]" />

        {/* Top gradient — ensures navbar text is always legible */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#13161f]/80 to-transparent z-10 pointer-events-none" />

        {/* Photo fills the right portion of the hero on desktop, full-bleed on mobile */}
        <motion.div
          className="absolute inset-0 lg:left-[52%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={shoot19}
            alt="Julian Hsieh performing"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Left — solid blend into dark panel */}
          <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, #13161f 0%, #13161f 5%, rgba(19,22,31,0.6) 20%, rgba(19,22,31,0.15) 40%, transparent 60%)" }} />
          <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-[#13161f] via-[#13161f]/50 to-transparent" />
          {/* Top vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#13161f]/30 via-transparent to-transparent" />
          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161f]/30 via-transparent to-transparent" />
          {/* Right vignette */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#13161f]/65 via-transparent to-transparent" />
        </motion.div>

        {/* Mobile overlay — darken photo for text legibility */}
        <div className="absolute inset-0 bg-[#13161f]/55 lg:hidden" />


        <div className="relative container mx-auto px-6 lg:px-14 min-h-screen flex flex-col justify-center pb-16 pt-32">
          <motion.div
            className="max-w-2xl"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            {/* Eyebrow label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-5 h-px bg-accent/60" />
              <span className="text-[12px] uppercase tracking-[0.28em] text-white/90">San Francisco, CA</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block font-display font-semibold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3rem,9vw,7rem)" }}>
                Julian
              </span>
              <span className="block font-display font-semibold text-accent leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3rem,9vw,7rem)" }}>
                Hsieh
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 text-white/90 max-w-sm text-[15px] leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Classically trained at Carnegie Mellon, performing and teaching around the Bay Area.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-11 flex items-center gap-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white/25 text-white text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Book a Lesson</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
              </Link>
              <Link
                to="/about"
                className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300 tracking-wide cursor-pointer"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Location badge */}
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight size={15} className="text-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Bio ── */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Portrait */}
            <FadeInOnScroll className="lg:col-span-4">
              <div className="relative overflow-hidden">
                <img
                  src={shoot11}
                  alt="Julian Hsieh"
                  className="w-full aspect-[3/5] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </FadeInOnScroll>

            {/* Text */}
            <FadeInOnScroll delay={0.1} className="lg:col-span-8 lg:pt-2">
              <div className="space-y-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  About
                </p>
                <div className="space-y-4 text-[15px] text-foreground/85 leading-[1.8]">
                  <p>
                    Julian Hsieh is an active San Francisco-based violinist and chamber musician. He
                    currently plays with the Stanford Symphony Orchestra, Peninsula Symphony, hosts
                    chamber music concerts, and teaches masterclasses around the Bay Area. He also
                    performed in the Jacob Collier Audience Symphony Orchestra at Davies Symphony Hall
                    during his 2025 tour.
                  </p>
                  <p>
                    Julian graduated with a dual degree in Business and Violin Performance from Carnegie
                    Mellon University. He studied with Professor William van der Sloot and performed in
                    solo recitals, orchestral concerts with the CMU Philharmonic, and numerous chamber
                    music concerts.
                  </p>
                  <p>
                    Julian's additional musical training includes studies at the Meadowmount School of
                    Music, Borromeo Music Festival, Orford Musique, Valhalla Summer School of Music, and
                    the Eastman Summer Program. Before his undergraduate education, he was the 1st prize
                    winner of the 2019 California VOCE Chamber Music Competition and attended the 2018
                    and 2019 CODA All-State Symphony Orchestras.
                  </p>
                </div>
                <div className="h-px w-full bg-foreground/8" />
                <div className="flex items-center gap-4">
                  <Link
                    to="/teaching"
                    className="group relative inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground text-[13px] tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Teaching Philosophy</span>
                    <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
                  </Link>
                  <Link
                    to="/recordings"
                    className="group relative inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground text-[13px] tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Listen</span>
                    <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#13161f] px-10 py-28 lg:px-16 lg:py-40 flex flex-col items-center text-center">
        <FadeInOnScroll>
          <p className="text-[12px] uppercase tracking-[0.38em] text-accent/60 mb-10">
            Contact
          </p>
          <h2
            className="font-display text-white font-semibold leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(3rem,7vw,6.5rem)" }}
          >
            Let's work
            <br />
            <span className="text-accent">together</span>
          </h2>
          <div className="mt-8 mx-auto h-px w-12 bg-accent/30" />
          <p className="mt-8 text-white/90 text-[17px] max-w-sm leading-relaxed mx-auto">
            Available for lessons, performances, and collaborations around the Bay Area.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
            >
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Get in Touch</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
            </Link>
          </div>
        </FadeInOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
