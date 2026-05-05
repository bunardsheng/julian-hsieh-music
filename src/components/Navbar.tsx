import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Teaching", to: "/teaching" },
  { label: "Recordings", to: "/recordings" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ invertOnTop = false }: { invertOnTop?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isInverted = invertOnTop && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <nav
        style={
          scrolled
            ? { boxShadow: "0 1px 24px rgba(0,0,0,0.07)" }
            : undefined
        }
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl"
            : isInverted
            ? "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-14" style={{ height: 68 }}>

          {/* ── Logo ── */}
          <Link
            to="/"
            className={`font-display text-[22px] font-semibold tracking-tight leading-none transition-colors duration-500 cursor-pointer ${
              isInverted ? "text-white" : "text-foreground"
            }`}
          >
            Julian Hsieh
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group cursor-pointer"
                >
                  <span
                    className={`block text-[14px] font-medium tracking-[0.02em] transition-colors duration-300 ${
                      isActive
                        ? isInverted
                          ? "text-white"
                          : "text-foreground"
                        : isInverted
                        ? "text-white/90 group-hover:text-white"
                        : "text-foreground/60 group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Active / hover underline in gold */}
                  <span
                    className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-accent transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

          </div>

          {/* ── Mobile toggle ── */}
          <button
            className={`md:hidden p-2 -mr-2 transition-colors duration-500 cursor-pointer ${
              isInverted ? "text-white" : "text-foreground"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "#0d0e12" }}
          >
            {/* Links */}
            <nav className="flex flex-col justify-center h-full px-10 gap-1">
              {/* Eyebrow */}
              <motion.p
                className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Julian Hsieh
              </motion.p>

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`block font-display font-semibold leading-none py-4 border-b border-white/8 transition-colors duration-200 cursor-pointer ${
                        isActive ? "text-white" : "text-white/40 hover:text-white/80"
                      }`}
                      style={{ fontSize: "clamp(2rem,8vw,3rem)" }}
                    >
                      {isActive && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-3 mb-1 align-middle" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
