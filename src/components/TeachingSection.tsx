import { Music } from "lucide-react";

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-start gap-2 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Teaching</span>
          <div className="section-divider mt-2" />
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-medium leading-snug text-foreground mb-8">
            Private lessons & masterclasses
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Julian offers private violin instruction and masterclasses for students of all levels throughout the San Francisco Bay Area. Drawing on his background in both music and business, he brings a structured approach to each lesson, focused on building technical facility alongside musical expression.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Private Lessons", desc: "One-on-one instruction tailored to your goals, from beginner fundamentals to advanced repertoire." },
              { title: "Masterclasses", desc: "Group sessions focused on performance skills, stage presence, and musical interpretation." },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border p-6 hover:border-primary/50 transition-colors duration-300 group"
              >
                <Music size={20} className="text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
