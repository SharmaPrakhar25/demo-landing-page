import { TrendingUp, Users, Settings, Lightbulb, Target, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    description: "At R.K. ADS, we provide highly skilled IT professionals to meet your business needs. Whether you require short-term contractors or full-time hires, we have a vast network of qualified experts proficient in ServiceNow and other IT domains.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Settings,
    title: "ServiceNow Implementation",
    description: "From initial setup to full-scale deployment, we ensure a seamless and efficient implementation of ServiceNow in your organization. Our experts help you configure and customize the platform to align with your business processes.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Lightbulb,
    title: "ServiceNow Consulting",
    description: "Leverage our deep industry knowledge to optimize your ServiceNow experience. We analyze your existing IT ecosystem and provide strategic recommendations to enhance efficiency, reduce costs, and improve service delivery.",
    color: "bg-accent/10 text-accent",
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
    <section id="services" className="py-20 bg-business-dark text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to maximize your ServiceNow potential and streamline operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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
                    + Learn More
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
