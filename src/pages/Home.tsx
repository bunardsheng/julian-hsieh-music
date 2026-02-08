import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-violin.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Julian Hsieh performing violin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </section>

      {/* Short Bio */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1
            className="text-4xl md:text-6xl font-display font-medium text-primary leading-tight animate-fade-in-up"
          >
            Julian Hsieh
          </h1>
          <p
            className="mt-3 text-lg md:text-xl font-display italic text-secondary animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Violinist · Chamber Musician · Educator
          </p>
          <p
            className="mt-8 text-muted-foreground font-body leading-relaxed text-base md:text-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            San Francisco-based violinist performing with the Stanford Symphony Orchestra
            and Peninsula Symphony. Julian brings a thoughtful, expressive approach to
            performance, collaboration, and teaching across the Bay Area.
          </p>
          <div
            className="mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-4">
            Interested in lessons or collaborations?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
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

      <Footer />
    </div>
  );
};

export default Home;
