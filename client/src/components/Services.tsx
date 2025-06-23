import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/data/services";
import { ROUTES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-foreground">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Cutting-Edge Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
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
              className="group"
            >
              <div className={`card-bento h-full relative overflow-hidden p-8 ${
                service.featured 
                  ? 'bg-gradient-to-br from-blue-500/5 to-purple-600/5 border-2 border-blue-500/20' 
                  : 'bg-card/50 backdrop-blur-sm border border-border/50'
              }`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-r ${service.color} rounded-full blur-3xl`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex w-fit p-4 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white h-7 w-7" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-bold text-foreground mb-4 text-xl md:text-2xl">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1 text-base mb-6">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <Link href={ROUTES.CONTACT}>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                      className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-300 group-hover:text-blue-600"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
                
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
