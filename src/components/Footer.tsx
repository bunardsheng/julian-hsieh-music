import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 lg:px-14 flex items-center justify-between">
      <Link to="/" className="font-display text-sm font-semibold text-foreground tracking-tight cursor-pointer">
        Julian Hsieh
      </Link>

      <p className="text-[12px] text-muted-foreground">
        &copy; {new Date().getFullYear()}
      </p>

      <div className="flex items-center gap-5">
        <a
          href="mailto:julianhsiehcontact@gmail.com"
          className="text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
          aria-label="Email"
        >
          <Mail size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
