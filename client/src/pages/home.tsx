import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  // Handle hash navigation and scroll to top for fresh page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // If there's a hash, scroll to that section after a short delay
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
