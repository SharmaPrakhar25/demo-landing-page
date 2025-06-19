import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/home";
import Industries from "@/pages/industries";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import './App.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/industries" component={Industries} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
