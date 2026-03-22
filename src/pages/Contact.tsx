import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo1 from "@/assets/photo-1.jpg";
import { Mail, MapPin, Check, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    console.log("Submitting form...", formState);
    try {
      const res = await fetch("https://formspree.io/f/xyknqwzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      console.log("Formspree response:", res.status, data);
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        setSubmitError(data?.error || `Submission failed (${res.status}). Please try again.`);
      }
    } catch (err) {
      console.error("Formspree error:", err);
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Split hero ── */}
      <section className="pt-20 lg:pt-0 border-b border-border">
        <div className="grid lg:grid-cols-2 min-h-[45vh] lg:min-h-[60vh]">
          {/* Photo panel — hidden on mobile (shows below as accent) */}
          <div className="hidden lg:block relative overflow-hidden">
            <img
              src={photo1}
              alt="Julian Hsieh"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-[#13161f]/20" />
            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="bg-[#13161f]/60 backdrop-blur-sm p-8 max-w-xs">
                <p className="font-display text-white/90 text-base italic leading-relaxed tracking-tight">
                  "Music gives a soul to the universe, wings to the mind."
                </p>
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="flex items-end px-6 lg:px-16 pb-12 pt-32 lg:pt-0 lg:pb-16">
            <div>
              <FadeInOnScroll>
                <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">Contact</p>
                <h1 className="font-display font-semibold text-foreground leading-[0.92] tracking-tight"
                  style={{ fontSize: "clamp(3rem,6vw,5rem)" }}>
                  Get in Touch
                </h1>
                <p className="mt-6 text-muted-foreground max-w-sm text-[15px]">
                  Available for lessons, performances, and collaborations.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 lg:py-28 pb-28 lg:pb-52">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact info */}
            <div className="lg:col-span-4 space-y-10">
              <FadeInOnScroll delay={0.05}>
                <div className="space-y-5">
                  <a
                    href="mailto:julianhsiehcontact@gmail.com"
                    className="group flex items-center gap-3.5 text-foreground text-sm transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-accent"><Mail size={15} /></span>
                    <span className="group-hover:text-accent transition-colors duration-300">julianhsiehcontact@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3.5 text-muted-foreground text-sm">
                    <MapPin size={15} />
                    <span>San Francisco Bay Area</span>
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.1}>
                <div className="pt-8 border-t border-border space-y-6">
                  <div>
                    <p className="font-display text-base text-foreground font-medium mb-2 tracking-tight">Lessons</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Accepting students of all levels. Trial lessons available.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-base text-foreground font-medium mb-2 tracking-tight">Performances</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Available for concerts, chamber events, and private engagements.
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <FadeInOnScroll delay={0.1}>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-28 text-center"
                  >
                    <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center mb-6">
                      <Check size={22} className="text-accent" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground font-medium mb-2 tracking-tight">
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground text-sm">I'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-9">
                    <div className="grid sm:grid-cols-2 gap-9">
                      <div>
                        <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/40"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/40"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-muted-foreground/40"
                        placeholder="Lesson inquiry, booking, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
                        placeholder="Your message..."
                      />
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-400">{submitError}</p>
                    )}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-foreground/70 text-foreground text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      >
                        <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                        {!isSubmitting && (
                          <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
