import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-primary animate-fade-in-up">
              About Julian
            </h1>
            <div className="mt-4 mx-auto section-divider" />
          </div>

          {/* Portrait + Bio */}
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 max-w-5xl mx-auto items-start">
            {/* Photo */}
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={aboutPortrait}
                  alt="Julian Hsieh portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-3 space-y-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-5 text-foreground/80 font-body leading-relaxed text-base">
                <p>
                  Julian Hsieh is an active San Francisco-based violinist and chamber musician.
                  He currently plays with the Stanford Symphony Orchestra, Peninsula Symphony,
                  hosts chamber music concerts, and teaches masterclasses around the Bay Area.
                </p>
                <p>
                  He also performed in the Jacob Collier Audience Symphony Orchestra in San Francisco.
                </p>
                <p>
                  Julian graduated with a Bachelor's degree in 2024 from Carnegie Mellon University,
                  where he completed a dual-degree program in Business and Violin Performance,
                  studying with Professor William van der Sloot. He performed in solo recitals,
                  orchestral concerts with the CMU Philharmonic, and numerous chamber music concerts.
                </p>
                <p>
                  His musical training includes studies at the Meadowmount School of Music,
                  Orford Musique, Valhalla Summer School of Music, and the Eastman Summer Program.
                </p>
                <p>
                  Before his undergraduate education, Julian was the 1st prize winner of the 2019
                  California VOCE Chamber Music Competition and attended the 2018 and 2019 CODA
                  High School All-State Symphony Orchestras.
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xs tracking-[0.3em] uppercase text-secondary font-body mb-4">
                  Highlights
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li>Stanford Symphony Orchestra & Peninsula Symphony</li>
                  <li>Jacob Collier Audience Symphony Orchestra, SF</li>
                  <li>Carnegie Mellon — B.S. Business & B.F.A. Violin Performance</li>
                  <li>Meadowmount School of Music · Orford Musique · Eastman</li>
                  <li>1st Prize — 2019 California VOCE Chamber Music Competition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
