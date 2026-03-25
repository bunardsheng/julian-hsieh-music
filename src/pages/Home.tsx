import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo2 from "@/assets/photo-2.jpg";
import photo1 from "@/assets/photo-1.jpg";
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
          className="absolute inset-0 lg:left-[50%]"
          style={{ scale: imgScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={photo2}
            alt="Julian Hsieh at Stanford"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* gradient bleeding the photo into the dark left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#13161f] via-[#13161f]/30 to-transparent lg:via-[#13161f]/10" />
          {/* subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161f]/60 via-transparent to-transparent" />
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
              <span className="text-[12px] uppercase tracking-[0.28em] text-white/60">San Francisco, CA</span>
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
              className="mt-6 text-white/65 max-w-sm text-[15px] leading-relaxed"
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

      {/* ── Pull quote ── */}
      <section className="bg-[#13161f] py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-14">
          <FadeInOnScroll>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-12">
              Philosophy
            </p>
            <p className="font-display text-white font-semibold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.5rem,2.8vw,2.6rem)" }}>
              Classically trained with a passion
              <br className="hidden lg:block" /> for{" "}
              <em className="not-italic text-accent">chamber music</em>
              {" "}and the art of
              <br className="hidden lg:block" /> guiding students to find their own
              <br className="hidden lg:block" />{" "}
              <em className="not-italic text-white/40">musical voice.</em>
            </p>
            <div className="mt-14 h-px w-full bg-white/8" />
            <div className="mt-8 flex items-center gap-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[13px] text-white/35 hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                <span>Read Bio</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/recordings"
                className="group inline-flex items-center gap-2 text-[13px] text-white/35 hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                <span>Listen</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Teaching feature ── */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image panel */}
          <FadeInOnScroll direction="right" className="relative overflow-hidden">
            <div className="relative group h-[420px] lg:h-full min-h-[420px]">
              <img
                src={photo1}
                alt="Julian Hsieh"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </FadeInOnScroll>

          {/* Text panel */}
          <FadeInOnScroll delay={0.15} className="bg-background flex items-center">
            <div className="px-10 py-20 lg:px-16 lg:py-28 max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Private Lessons
              </p>
              <h2 className="font-display text-foreground font-semibold leading-[1.1] tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Begin Your
                <br />
                <em className="not-italic" style={{ color: "hsl(44 88% 38%)" }}>Musical Journey</em>
              </h2>
              <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed mb-10">
                <p>
                  Every student has their own methods of learning. My job is to
                  guide each person through discovering their own technique and
                  musical voice.
                </p>
                <p>
                  Currently accepting students of all levels around the Bay
                  Area. Trial lessons available.
                </p>
              </div>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-foreground/20 text-foreground text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
              >
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Schedule a Trial Lesson</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#13161f] px-10 py-28 lg:px-16 lg:py-40 flex flex-col items-center text-center">
        <FadeInOnScroll>
          <p className="text-[10px] uppercase tracking-[0.38em] text-accent/60 mb-10">
            Lessons · Performances · Collaborations
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
          <p className="mt-8 text-white/65 text-[17px] max-w-sm leading-relaxed mx-auto">
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
