import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Recordings", to: "/recordings" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="font-display text-2xl font-medium tracking-wide text-primary">
          Julian Hsieh
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Subtle bottom border */}
      <div className="h-px bg-border/60" />

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-body tracking-widest uppercase transition-colors ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
