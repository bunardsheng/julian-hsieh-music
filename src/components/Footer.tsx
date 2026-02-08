const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-foreground tracking-wider">
          Julian Hsieh
        </span>
        <span className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
