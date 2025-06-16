import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import React, { useState, useEffect } from 'react';
import './App.css';
import heroImage from '@assets/Gemini_Generated_Image_j77lpkj77lpkj77l.png';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Transforming Business Through Technology";

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 80); // Adjust speed here (lower = faster)

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={heroImage}
          className="hero-image"
          alt="Professional working with advanced technology solutions"
        />
        <div className="hero-content">
          <h1 className="typewriter-text">
            {typewriterText}
            <span className="cursor">|</span>
          </h1>
          <p>Expert ServiceNow solutions, AI automation, and strategic IT consulting to accelerate your digital transformation journey.</p>
          <div className="hero-badges">
            <span className="badge">ServiceNow Certified</span>
            <span className="badge">AI-Powered Solutions</span>
            <span className="badge">24/7 Support</span>
          </div>
        </div>
        
        {/* Scroll indicator that disappears after scrolling */}
        <div className={`scroll-indicator ${hasScrolled ? 'hidden' : ''}`}>
          <div className="scroll-text">Scroll</div>
          <div className="scroll-arrow">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </header>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
