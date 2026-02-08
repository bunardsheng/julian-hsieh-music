import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import heroImage from "@/assets/hero-violin.jpg";

const Home = () => {
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const imgY = useTransform(scrollY, [0, 800], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.35, 0.7]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero — full-screen image with overlaid text */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image with parallax zoom */}
        <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
          <img
            src={heroImage}
            alt="Julian Hsieh performing violin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dynamic overlay */}
        <motion.div
          className="absolute inset-0 bg-primary"
          style={{ opacity: overlayOpacity }}
        />

        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />

        {/* Text content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28"
          style={{ y: textY }}
        >
          <div className="container mx-auto px-6">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-primary-foreground/70 font-body mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              San Francisco · Violinist
            </motion.p>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-primary-foreground leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Julian
              <br />
              <span className="text-gradient-gold">Hsieh</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-primary-foreground/80 font-body leading-relaxed text-base md:text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Violinist, chamber musician, and educator — performing and
              teaching across the Bay Area.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Link
                to="/contact"
                className="inline-block px-7 py-2.5 rounded-full bg-primary-foreground/90 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary-foreground transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="inline-block px-7 py-2.5 rounded-full border border-primary-foreground/40 text-primary-foreground/90 font-body text-sm tracking-widest uppercase hover:border-primary-foreground hover:text-primary-foreground transition-all duration-300"
              >
                About
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50 font-body">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-primary-foreground/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* Contact teaser */}
      <FadeInOnScroll>
        <section className="py-28 bg-muted/40">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-4">
              Interested in lessons or collaborations?
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Contact for a trial lesson, performance booking, or business inquiries.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </FadeInOnScroll>

      <Footer />
    </div>
  );
};

export default Home;
