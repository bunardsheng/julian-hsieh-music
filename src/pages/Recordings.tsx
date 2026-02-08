import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

const recordings = [
  {
    title: "Brahms Violin Sonata No. 1",
    description: "Senior Recital, Carnegie Mellon University",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Mendelssohn Violin Concerto",
    description: "CMU Philharmonic Orchestra",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Beethoven String Quartet Op. 18",
    description: "Chamber Music Concert, Bay Area",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Bach Partita No. 2 in D minor",
    description: "Solo Recital",
    videoId: "dQw4w9WgXcQ",
  },
];

const Recordings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-primary animate-fade-in-up">
              Recordings
            </h1>
            <p className="mt-4 text-muted-foreground font-body animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Selected performances and recitals.
            </p>
            <div className="mt-4 mx-auto section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recordings.map((rec, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/watch?v=${rec.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-3">
                  <img
                    src={`https://img.youtube.com/vi/${rec.videoId}/hqdefault.jpg`}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={22} className="text-secondary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg text-primary group-hover:text-secondary transition-colors">
                  {rec.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{rec.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recordings;
