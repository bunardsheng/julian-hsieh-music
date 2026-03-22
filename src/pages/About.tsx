import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo3 from "@/assets/photo-3.jpg";
import photo1 from "@/assets/photo-1.jpg";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Bio ── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Portrait */}
            <FadeInOnScroll className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative overflow-hidden">
                <img
                  src={photo3}
                  alt="Julian Hsieh"
                  className="w-full aspect-[3/4] object-cover object-[center_10%]"
                />
              </div>
            </FadeInOnScroll>

            {/* Text */}
            <div className="lg:col-span-7 space-y-12 lg:pt-4">
              <FadeInOnScroll delay={0.1}>
                <p className="font-display text-foreground font-semibold leading-[1.2] tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)" }}>
                  San Francisco-based violinist, chamber musician, and educator.
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.15}>
                <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
                  <p>
                    Julian currently performs with the Stanford Symphony Orchestra and Peninsula Symphony,
                    hosts chamber music concerts, and teaches masterclasses around the Bay Area.
                  </p>
                  <p>
                    In 2025, he performed in the Jacob Collier Audience Symphony Orchestra at Davies
                    Symphony Hall as part of Collier's North American tour, as part of an ensemble assembled
                    entirely from the audience.
                  </p>
                </div>
              </FadeInOnScroll>

              {/* Highlight callout */}
              <FadeInOnScroll delay={0.2}>
                <div className="border-l-2 border-accent pl-5 py-1">
                  <p className="text-[13px] text-foreground/50 uppercase tracking-[0.18em] mb-1">Featured</p>
                  <p className="font-display text-foreground font-medium tracking-tight text-[1.05rem]">
                    Jacob Collier Audience Symphony, Davies Symphony Hall, 2025
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.22}>
                <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
                  <p>
                    Julian graduated from Carnegie Mellon University with a dual degree in Business and
                    Violin Performance, studying with Professor William van der Sloot. His time at CMU
                    included solo recitals, orchestral concerts with the CMU Philharmonic, and extensive
                    chamber music performance.
                  </p>
                  <p>
                    His additional training spans the Borromeo Music Festival, Meadowmount School of
                    Music, Orford Musique, Valhalla Summer School of Music, and the Eastman Summer
                    Program. As a young musician, he was the 1st Prize winner of the 2019 California
                    VOCE Chamber Music Competition and performed with the 2018 and 2019 CODA All-State
                    Symphony Orchestras.
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.25}>
                <Link
                  to="/recordings"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-300 tracking-wide cursor-pointer"
                >
                  <span>Listen to Recordings</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Teaching philosophy ── */}
      <section className="bg-[#13161f] overflow-hidden">
        <div className="grid lg:grid-cols-12">

          {/* Portrait panel — sticky on desktop */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-0 h-[50vh] lg:h-screen overflow-hidden">
              <img
                src={photo1}
                alt="Julian Hsieh"
                className="w-full h-full object-cover object-[center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13161f]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#13161f]/20" />
            </div>
          </div>

          {/* Philosophy content */}
          <div className="lg:col-span-7 px-8 py-14 lg:px-16 lg:py-16 flex flex-col justify-center lg:min-h-screen">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent/70 mb-4">Teaching</p>
            <h2 className="font-display text-white font-semibold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              Teaching <em className="text-accent not-italic">Philosophy</em>
            </h2>
            <p className="font-display text-white/60 italic leading-[1.4] tracking-tight mb-8"
              style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)" }}>
              "Every student has their own methods of learning and problem solving. It is the
              teacher's responsibility to guide each student through their technique and musical
              discoveries."
            </p>

            <div className="divide-y divide-white/10">

              {/* Principle 01 */}
              <div className="py-5">
                <div className="flex items-start gap-5">
                  <span className="text-[11px] text-accent/60 tracking-[0.2em] mt-0.5 shrink-0">01</span>
                  <div>
                    <h3 className="font-display text-white font-semibold text-[1rem] tracking-tight mb-1.5">
                      Individualized Technique
                    </h3>
                    <p className="text-white/50 text-[13.5px] leading-[1.75]">
                      Every student holds the bow differently. I work around that rather than against it.
                      The goal is technique that fits the person well enough that it stops getting in the way.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="py-5">
                <div className="flex items-start gap-5">
                  <span className="text-[11px] text-accent/60 tracking-[0.2em] mt-0.5 shrink-0">02</span>
                  <div>
                    <h3 className="font-display text-white font-semibold text-[1rem] tracking-tight mb-1.5">
                      Music &amp; Technique Together
                    </h3>
                    <p className="text-white/50 text-[13.5px] leading-[1.75]">
                      Physical technique should always serve a musical idea. When the two are connected from
                      the start, students build real habits and depth, practicing with a reason rather than
                      just repeating passages until something sticks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="py-5">
                <div className="flex items-start gap-5">
                  <span className="text-[11px] text-accent/60 tracking-[0.2em] mt-0.5 shrink-0">03</span>
                  <div>
                    <h3 className="font-display text-white font-semibold text-[1rem] tracking-tight mb-1.5">
                      Joy &amp; Resilience
                    </h3>
                    <p className="text-white/50 text-[13.5px] leading-[1.75]">
                      I help students maintain curiosity and build resilience through inevitable plateaus.
                      Small, consistent gains add up. Getting a little better each session is less exciting
                      than a breakthrough, but it's what actually moves the needle over time.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <FadeInOnScroll delay={0.15}>
              <div className="mt-12">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
