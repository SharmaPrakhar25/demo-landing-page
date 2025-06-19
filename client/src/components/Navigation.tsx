import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useScroll, scrollToSection } from "@/hooks/use-scroll";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll({ threshold: 50 });
  const [location, setLocation] = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    // Only scroll to section if we're on the home page
    if (location === "/") {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    if (location !== "/") {
      // If not on home page, navigate to home
      setLocation("/");
    } else {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleServicesNavigation = () => {
    if (location !== "/") {
      // If not on home page, navigate to home with hash
      setLocation("/#services");
    } else {
      // If on home page, scroll to services section
      handleScrollToSection("services");
    }
  };


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" 
          : "bg-background/60 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">RK</span>
            </div>
            <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              R K Ads
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeNavigation}
              className={`transition-all duration-300 font-medium hover:scale-105 ${
                location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={handleServicesNavigation}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium hover:scale-105"
            >
              Our Services
            </button>
            <Link href="/industries">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  location === "/industries" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Industries
              </button>
            </Link>
            <Link href="/careers">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  location === "/careers" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Careers
              </button>
            </Link>
            <Link href="/contact">
              <Button 
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="btn-primary ml-4"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/50 bg-card/50 backdrop-blur-xl rounded-2xl mt-4">
            <div className="flex flex-col space-y-4 pt-6 px-4">
              <button
                onClick={handleHomeNavigation}
                className={`transition-colors duration-300 font-medium text-left py-2 ${
                  location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </button>
              <button
                onClick={handleServicesNavigation}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-left py-2"
              >
                Our Services
              </button>
              <Link href="/industries">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className={`transition-colors duration-300 font-medium text-left py-2 ${
                    location === "/industries" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Industries
                </button>
              </Link>
              <Link href="/careers">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className={`transition-colors duration-300 font-medium text-left py-2 ${
                    location === "/careers" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Careers
                </button>
              </Link>
              <Link href="/contact">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className="btn-primary w-full mt-4"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
