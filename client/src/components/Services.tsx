import { 
  Users, 
  Settings, 
  Lightbulb, 
  Brain, 
  Zap, 
  Shield, 
  Workflow, 
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Harness the power of artificial intelligence to automate complex workflows and enhance decision-making processes.",
    color: "from-blue-500 to-purple-600",
    size: "large",
    featured: true,
  },
  {
    icon: Settings,
    title: "ServiceNow Implementation",
    description: "End-to-end ServiceNow deployment with custom configurations.",
    color: "from-cyan-400 to-blue-600",
    size: "medium",
  },
  {
    icon: Users,
    title: "Expert IT Staffing",
    description: "Top-tier IT professionals for your critical projects.",
    color: "from-purple-500 to-pink-600",
    size: "medium",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize system efficiency and reduce operational costs.",
    color: "from-orange-400 to-red-500",
    size: "small",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive cybersecurity frameworks.",
    color: "from-green-400 to-teal-500",
    size: "small",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline business processes with intelligent automation.",
    color: "from-indigo-400 to-purple-500",
    size: "medium",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights for strategic decision making.",
    color: "from-pink-400 to-rose-500",
    size: "small",
  },
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    description: "Expert guidance for digital transformation initiatives.",
    color: "from-yellow-400 to-orange-500",
    size: "medium",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-foreground">Our Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Cutting-Edge Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            let gridClass = "";
            switch (service.size) {
              case "large":
                gridClass = "col-span-12 md:col-span-6 lg:col-span-8 row-span-2";
                break;
              case "medium":
                gridClass = "col-span-12 md:col-span-6 lg:col-span-4";
                break;
              case "small":
                gridClass = "col-span-12 sm:col-span-6 lg:col-span-4";
                break;
              default:
                gridClass = "col-span-12 md:col-span-4";
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className={`${gridClass} group`}
              >
                <div className={`card-bento h-full relative overflow-hidden ${
                  service.featured 
                    ? 'bg-gradient-to-br from-blue-500/5 to-purple-600/5 border-2 border-blue-500/20' 
                    : 'bg-card/50 backdrop-blur-sm'
                } ${service.size === 'large' ? 'p-8 md:p-12' : 'p-6'}`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-r ${service.color} rounded-full blur-3xl`} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex w-fit p-4 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`text-white ${service.size === 'large' ? 'h-8 w-8' : 'h-6 w-6'}`} />
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className={`font-bold text-foreground mb-4 ${
                      service.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed flex-1 ${
                      service.size === 'large' ? 'text-lg mb-8' : 'text-base mb-6'
                    }`}>
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-300 group-hover:text-blue-600"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-muted-foreground text-sm">
              Ready to transform your business? Let's discuss your needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
