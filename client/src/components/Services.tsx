import { TrendingUp, Users, Settings, Lightbulb, Target, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies that align with your business objectives and market opportunities.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through leadership development and organizational culture transformation.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency through data-driven process improvements.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Foster innovation culture and implement cutting-edge solutions for competitive advantage.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Target,
    title: "Performance Management",
    description: "Implement robust performance measurement systems and accountability frameworks.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Handshake,
    title: "Change Management",
    description: "Navigate organizational transitions smoothly with proven change management methodologies.",
    color: "bg-indigo-100 text-indigo-600",
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
    <section id="services" className="py-20 bg-business-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-business-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to drive your organization's success and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover shadow-lg">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-business-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="text-primary font-semibold hover:underline transition-all duration-300"
                  >
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
