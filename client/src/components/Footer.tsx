import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import CompanyLogo from "../../../attached_assets/CompanyLogo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-muted/50 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={CompanyLogo}
                alt="RK Ads"
                className="w-12 h-12 object-contain filter brightness-110 contrast-110 mt-[-20px]"
              />
              <span
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                R K Ads
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Pioneering the future of IT solutions with AI-powered ServiceNow
              implementations and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2 md:order-none">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 transform block"
                >
                  AI-Powered Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 transform block"
                >
                  Service Now Implementation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 transform block"
                >
                  Expert IT Staffing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 transform block"
                >
                  Strategic Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="order-3 md:order-none">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs">@</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-foreground font-medium break-words">
                    rkads23@gmail.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Business inquiries
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-foreground font-medium">+91-8096152094</p>
                  <p className="text-muted-foreground text-sm">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-foreground font-medium">
                    Hyderabad, India
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Karmanghat - 500079
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 R K Ads. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6 text-sm">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <span className="text-red-500">♥</span>
              <span>for the future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
