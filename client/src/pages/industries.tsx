import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Pill, Fuel, Heart, Car } from "lucide-react";
import { useEffect } from "react";
import industryImage from '@assets/industry~mv2.avif';

const industries = [
  {
    icon: Pill,
    title: "Pharmaceutical Industry",
    description: "We assist pharmaceutical companies in optimizing their IT infrastructure to ensure seamless operations, regulatory compliance, and efficient data management through ServiceNow solutions and IT staffing.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Fuel,
    title: "Oil & Gas Industry", 
    description: "Our IT services support the oil & gas sector by enhancing workflow automation, asset management, and operational efficiency, enabling businesses to maximize productivity and reduce downtime.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Medical Industry",
    description: "We provide IT solutions to medical institutions, helping them manage patient data, streamline workflows, and improve service delivery with our specialized ServiceNow implementations and staffing services.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Car,
    title: "Automobile Industry", 
    description: "In the fast-paced automobile sector, we help companies optimize their IT processes, enhance supply chain management, and implement innovative technology solutions tailored to their business needs.",
    color: "from-purple-500 to-indigo-600"
  }
];

export default function Industries() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solutions
              <span className="block text-gradient">for Your Industry</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
            >
              Tailored IT solutions designed to meet the unique challenges and requirements of your specific industry sector.
            </motion.p>
          </motion.div>

          {/* Horizontal Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <img
                src={industryImage}
                alt="Industry solutions and technology"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '1570/911' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  {/* Icon */}
                  <div className={`inline-flex w-fit p-4 bg-gradient-to-r ${industry.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="text-white h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-4 text-2xl">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 