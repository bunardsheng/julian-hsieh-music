import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-muted/30">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg text-primary tracking-wide">
          Julian Hsieh
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-secondary transition-colors">About</Link>
          <Link to="/recordings" className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-secondary transition-colors">Recordings</Link>
          <Link to="/contact" className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-secondary transition-colors">Contact</Link>
        </div>
        <span className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
