import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-md" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RK</span>
            </div>
            <span className="text-xl font-bold text-business-dark">R K Ads</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-business-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-business-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-business-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-business-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-business-dark hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-business-dark hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-business-dark hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-business-dark hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Team
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-primary w-full"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
