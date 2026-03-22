import chamberImage from "@/assets/chamber-music.jpg";

const highlights = [
  {
    category: "Current",
    items: [
      "Stanford Symphony Orchestra",
      "Peninsula Symphony",
      "Chamber music concerts & masterclasses, Bay Area",
      "Jacob Collier Audience Symphony Orchestra, SF",
    ],
  },
  {
    category: "Education",
    items: [
      "Carnegie Mellon University, B.S. Business & B.F.A. Violin Performance (2024)",
      "Studied with Professor William van der Sloot",
      "Solo recitals, CMU Philharmonic, chamber concerts",
    ],
  },
  {
    category: "Training & Awards",
    items: [
      "Meadowmount School of Music",
      "Orford Musique",
      "Valhalla Summer School of Music",
      "Eastman Summer Program",
      "1st Prize, 2019 California VOCE Chamber Music Competition",
      "CODA High School All-State Symphony Orchestra (2018, 2019)",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-start gap-2 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Experience</span>
          <div className="section-divider mt-2" />
        </div>

        {/* Chamber music image */}
        <div className="w-full aspect-[2.5/1] overflow-hidden mb-20">
          <img
            src={chamberImage}
            alt="Chamber music performance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground font-body leading-relaxed border-l border-border pl-4 hover:border-primary hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
