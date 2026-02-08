import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-start gap-2 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Contact</span>
          <div className="section-divider mt-2" />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-display font-medium leading-snug text-foreground mb-6">
            Let's connect.
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-10">
            Interested in lessons, collaborations, or booking Julian for a performance? Get in touch.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:julian@example.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body group"
            >
              <Mail size={18} className="text-primary" />
              <span className="border-b border-transparent group-hover:border-primary transition-colors">
                julian@example.com
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body group"
            >
              <Instagram size={18} className="text-primary" />
              <span className="border-b border-transparent group-hover:border-primary transition-colors">
                @julianhsieh
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
