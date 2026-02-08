import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-violin.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — clean split layout */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text side */}
            <div className="order-2 md:order-1">
              <p
                className="text-xs tracking-[0.3em] uppercase text-secondary font-body mb-5 animate-fade-in-up"
              >
                San Francisco · Violinist
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-primary leading-[1.05] animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Julian
                <br />
                Hsieh
              </h1>
              <p
                className="mt-6 text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-md animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Violinist, chamber musician, and educator — performing and
                teaching across the Bay Area.
              </p>
              <div
                className="mt-8 flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-7 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-7 py-2.5 rounded-full border border-border text-muted-foreground font-body text-sm tracking-widest uppercase hover:text-primary hover:border-primary/40 transition-colors duration-300"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="aspect-[4/5] max-h-[75vh] overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Julian Hsieh performing violin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-4">
            Interested in lessons or collaborations?
          </h2>
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
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
