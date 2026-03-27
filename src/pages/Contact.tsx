import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo1 from "@/assets/photo-1.jpg";
import { Check, ArrowRight } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 bg-background border border-foreground/12 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-muted-foreground/40 rounded-none";

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
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      let data: { error?: string; success?: boolean } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error(`Unexpected response (${res.status}). The email service may be unavailable.`);
      }

      if (!res.ok) {
        throw new Error(data?.error || `Failed to send (${res.status}). Please try again.`);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("Send error:", err);
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar invertOnTop />

      {/* ── Hero ── */}
      <section className="relative bg-[#13161f] min-h-[38vh] flex items-center overflow-hidden">
        {/* Mobile: full-width background image with bottom fade */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={photo1}
            alt="Julian Hsieh"
            className="w-full h-full object-cover object-[30%_10%]"
          />
          <div className="absolute inset-0 bg-[#13161f]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161f] via-[#13161f]/50 to-transparent" />
        </div>

        {/* Desktop: image pinned to left — fades right into dark bg */}
        <div className="absolute left-0 top-0 bottom-0 w-[35%] overflow-hidden hidden lg:block">
          <img
            src={photo1}
            alt="Julian Hsieh"
            className="w-full h-full object-cover object-[30%_10%]"
          />
          <div className="absolute inset-0 bg-[#13161f]/25" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#13161f] via-[#13161f]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-screen-lg">
          <FadeInOnScroll>
            <h1
              className="font-display font-semibold text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
            >
              Get in Touch
            </h1>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Form card — overlaps hero ── */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-14">
          <FadeInOnScroll delay={0.05}>
            <div className="max-w-[680px] mx-auto relative -mt-6 lg:-mt-8 z-20 bg-background border border-border shadow-[0_8px_40px_rgba(0,0,0,0.10)] px-8 py-10 lg:px-12 lg:py-12">

              {/* Accent top bar */}
              <div className="h-[3px] w-10 bg-accent mb-8" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-12 h-12 border border-accent flex items-center justify-center mb-5">
                    <Check size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl text-foreground font-medium mb-1.5 tracking-tight">
                    Message Sent
                  </h3>
                  <p className="text-muted-foreground text-sm">I'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Lesson inquiry, booking, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Your message..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-400 border border-red-400/30 px-4 py-3 bg-red-400/10">
                      {submitError}
                    </p>
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
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
