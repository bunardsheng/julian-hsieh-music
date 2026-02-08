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

        {/* Teaching Philosophy */}
        <div className="max-w-3xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary">
              Teaching Philosophy
            </h2>
            <div className="mt-4 mx-auto section-divider" />
          </div>

          <div className="space-y-6 text-foreground/80 font-body leading-relaxed">
            <p>
              Every student has their own methods of learning and problem solving. It is the
              teacher's responsibility to guide each student through the discovery of their
              technique and musical interpretations. There are two fundamental violin principles
              I learned during my time at CMU that I hope to instill in each student I teach.
            </p>

            <div className="pl-6 border-l-2 border-secondary/40 space-y-4">
              <p>
                Standard violin technique philosophies should be taught as guidelines rather than
                uncompromising law. Each student's anatomy, coordination, and learning process are
                unique. A specific approach that is effective for one violinist may be
                counterproductive for another. When instruction is limited to a single, fixed model
                of technique, it risks failing to address the specific challenges a student
                encounters. I believe it is essential to develop individualized solutions that
                respond to each student's physical needs and musical goals. This approach helps
                prevent the accumulation of inefficient habits that can lead to chronic pain or
                injury. I strive to improve a student's ability to evaluate their own playing so
                that they are capable of identifying technical issues independently and practice
                with purpose.
              </p>
            </div>

            <div className="pl-6 border-l-2 border-secondary/40 space-y-4">
              <p>
                Second, students should combine the ideas of technique and musicality. Each
                movement of the fingers or arms should have a specific purpose: to make music.
                Violinists require a physical foundation to enable the musical voice. Early
                students have a tendency to practice mindlessly. They not only develop poor
                practice habits, but also put their musical development on pause. By unifying
                these elements, students build reliable physical habits while developing their
                artistry.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
