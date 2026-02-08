import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import heroImage from "@/assets/hero-violin.jpg";

const Home = () => {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 60]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero — offset overlap layout */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-0 md:gap-0">
            
            {/* Text — left side, bleeds over image */}
            <motion.div
              className="relative z-10 md:col-span-6 lg:col-span-5 md:pr-0"
              style={{ y: textY }}
            >
              <motion.p
                className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                San Francisco · Violinist
              </motion.p>

              <motion.h1
                className="text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-display font-medium text-foreground leading-[0.9] tracking-tight md:translate-x-[15%] lg:translate-x-[25%]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Julian
                <br />
                <span className="text-gradient-gold">Hsieh</span>
              </motion.h1>

              <motion.p
                className="mt-8 text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-sm"
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
                  className="inline-block px-7 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-7 py-2.5 rounded-full border border-border text-foreground font-body text-sm tracking-widest uppercase hover:border-foreground transition-all duration-300"
                >
                  About
                </Link>
              </motion.div>
            </motion.div>

            {/* Image — right side, rectangular */}
            <motion.div
              className="md:col-span-6 lg:col-span-7 md:col-start-7 lg:col-start-6 mt-12 md:mt-0"
              style={{ y: imgY }}
            >
              <motion.div
                className="relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-h-[80vh]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 }}
              >
                <img
                  src={heroImage}
                  alt="Julian Hsieh performing violin"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient on image edge where text overlaps */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent md:block hidden" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-border"
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
