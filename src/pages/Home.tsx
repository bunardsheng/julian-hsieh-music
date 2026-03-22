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
          className="absolute inset-0 lg:left-[42%]"
          style={{ scale: imgScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
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


        <div className="relative container mx-auto px-6 lg:px-14 min-h-screen flex flex-col justify-end pb-28 lg:pb-28 pt-32">
          <motion.div
            className="max-w-2xl"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            {/* Eyebrow label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="w-5 h-px bg-accent/60" />
              <span className="text-[12px] uppercase tracking-[0.28em] text-white/60">Bay Area, CA</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="block font-display font-semibold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(4rem,13vw,10rem)" }}>
                Julian
              </span>
              <span className="block font-display font-semibold text-accent leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(4rem,13vw,10rem)" }}>
                Hsieh
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 text-white/65 max-w-sm text-[15px] leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Classically trained at Carnegie Mellon, performing with Stanford
              Symphony and Peninsula Symphony, teaching throughout the Bay Area.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-11 flex items-center gap-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
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
          transition={{ delay: 1.9, duration: 0.8 }}
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
      <section className="py-28 lg:py-48">
        <div className="container mx-auto px-6 lg:px-14">
          <FadeInOnScroll>
            <div className="max-w-4xl">
              <p className="font-display text-foreground font-medium leading-[1.2] tracking-tight"
                style={{ fontSize: "clamp(1.85rem,3.6vw,3.25rem)" }}>
                Classically trained with a passion for{" "}
                <em className="text-accent not-italic">chamber music</em>
                {" "}and the art of guiding students to find their own musical voice.
              </p>
              <div className="mt-12 flex items-center gap-10">
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground link-hover tracking-wide cursor-pointer"
                >
                  Read Bio
                </Link>
                <Link
                  to="/recordings"
                  className="text-sm text-muted-foreground link-hover tracking-wide cursor-pointer"
                >
                  Listen
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-14 lg:py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              { label: "Current", value: "Stanford & Peninsula Symphony" },
              { label: "Education", value: "Carnegie Mellon '24" },
              { label: "Recognition", value: "1st Prize, CA VOCE" },
              { label: "Focus", value: "Chamber Music & Teaching" },
            ].map((item, i) => (
              <FadeInOnScroll key={item.label} delay={i * 0.09}>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2.5">
                    {item.label}
                  </p>
                  <p className="font-display text-[1.05rem] text-foreground font-semibold tracking-tight leading-snug">{item.value}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching feature ── */}
      <section className="border-t border-border overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image panel */}
          <FadeInOnScroll direction="right" className="relative overflow-hidden">
            <div className="relative group h-[420px] lg:h-full min-h-[420px]">
              <img
                src={photo1}
                alt="Julian Hsieh"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[#13161f]/30" />
            </div>
          </FadeInOnScroll>

          {/* Text panel */}
          <FadeInOnScroll delay={0.15} className="bg-[#13161f] flex items-center">
            <div className="px-10 py-20 lg:px-16 lg:py-28 max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent/70 mb-6">
                Private Lessons
              </p>
              <h2 className="font-display text-white font-semibold leading-[1.1] tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Begin Your
                <br />
                <em className="text-accent not-italic">Musical Journey</em>
              </h2>
              <div className="space-y-4 text-white/45 text-[15px] leading-relaxed mb-10">
                <p>
                  Every student has their own methods of learning. My job is to
                  guide each person through discovering their own technique and
                  musical voice.
                </p>
                <p>
                  Currently accepting students of all levels throughout the Bay
                  Area. Trial lessons available.
                </p>
              </div>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
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
            Available for lessons, performances, and collaborations throughout the Bay Area.
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
