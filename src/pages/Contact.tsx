import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-primary animate-fade-in-up">
              Contact
            </h1>
            <p className="mt-4 text-muted-foreground font-body animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              For trial lessons, performance bookings, or business inquiries.
            </p>
            <div className="mt-4 mx-auto section-divider" />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact links */}
            <div className="flex flex-col items-center gap-5 mb-14">
              <a
                href="mailto:julian@example.com"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors font-body group text-lg"
              >
                <Mail size={20} className="text-secondary" />
                <span className="border-b border-transparent group-hover:border-secondary transition-colors">
                  julian@example.com
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors font-body group text-lg"
              >
                <Instagram size={20} className="text-secondary" />
                <span className="border-b border-transparent group-hover:border-secondary transition-colors">
                  @julianhsieh
                </span>
              </a>
            </div>

            {/* Message form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-display font-medium text-primary mb-6">Send a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Trial lesson, booking, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
