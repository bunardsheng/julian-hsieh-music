import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-start gap-2 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">About</span>
          <div className="section-divider mt-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-snug text-foreground">
              A violinist passionate about performance, collaboration, and education.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Julian Hsieh is an active San Francisco-based violinist and chamber musician. He currently plays with the Stanford Symphony Orchestra, Peninsula Symphony, hosts chamber music concerts, and teaches masterclasses around the Bay Area.
              </p>
              <p>
                He also performed in the Jacob Collier Audience Symphony Orchestra in San Francisco.
              </p>
              <p>
                Julian graduated with a Bachelor's degree in 2024 from Carnegie Mellon University, where he completed a dual-degree program in Business and Violin Performance, studying with Professor William van der Sloot.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutPortrait}
                alt="Julian Hsieh portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
