import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useScroll, scrollToSection } from "@/hooks/use-scroll";
import CompanyLogo from "../../../attached_assets/CompanyLogo.png";

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
          ? "bg-background/95 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-black/10"
          : "bg-transparent backdrop-blur-xl"
      }`}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={CompanyLogo}
              alt="RK Ads"
              className="w-15 h-12 object-contain filter brightness-110 contrast-110 mt-[-17px]"
            />
            <span className="text-2xl font-bold text-gray-800 ml-2">RK</span>
            <span className="text-2xl font-bold text-black ml-2">A D S</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeNavigation}
              className={`transition-all duration-300 font-medium hover:scale-105 ${
                location === "/"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
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
                  location === "/industries"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Industries
              </button>
            </Link>
            <Link href="/careers">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  location === "/careers"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
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
            className="md:hidden hover:bg-card/50"
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
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-background/95 border border-border/30 rounded-2xl shadow-2xl shadow-black/25"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <div className="flex flex-col p-6 space-y-1">
              <button
                onClick={handleHomeNavigation}
                className={`transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg ${
                  location === "/"
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                Home
              </button>
              <button
                onClick={handleServicesNavigation}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg"
              >
                Our Services
              </button>
              <Link href="/industries">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className={`w-full transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg ${
                    location === "/industries"
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
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
                  className={`w-full transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg ${
                    location === "/careers"
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  Careers
                </button>
              </Link>
              <div className="pt-4 mt-4 border-t border-border/30">
                <Link href="/contact">
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                    className="btn-primary w-full h-12 text-base font-medium"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
