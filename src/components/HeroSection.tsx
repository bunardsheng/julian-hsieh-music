import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-violin.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Violin performance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body animate-fade-in-up">
            San Francisco · Violinist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tight text-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Julian
            <br />
            Hsieh
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Violinist, chamber musician, and educator. Performing and teaching across the Bay Area.
          </p>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 right-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors font-body"
        >
          Scroll
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
