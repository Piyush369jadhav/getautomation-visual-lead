import { useState, useEffect } from "react";
import logo from "@/assets/Automation-removebg-preview (1).png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Automation Logo"
              className="h-[200px] w-[200px] object-contain transition-transform duration-300 hover:scale-110 logo-nav"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all shadow-[0_0_20px_hsl(265_85%_58%/0.3)] hover:shadow-[0_0_30px_hsl(265_85%_58%/0.5)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
