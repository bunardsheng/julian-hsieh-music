import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo3 from "@/assets/photo-3.jpg";
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
              <FadeInOnScroll delay={0.05}>
                <h1
                  className="font-display font-semibold text-foreground leading-[0.92] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
                >
                  About
                </h1>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.1}>
                <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
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

<Footer />
    </div>
  );
};

export default About;
