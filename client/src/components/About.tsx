import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { number: "300+", label: "ServiceNow Implementations" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
  { number: "25+", label: "IT Professionals" },
];

export default function About() {
  const scrollToTeam = () => {
    const element = document.getElementById("team");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-business-dark mb-6">
              About R K Ads
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              At R.K. ADS, we specialize in delivering top-notch IT services centered around ServiceNow. 
              Our expertise lies in helping businesses streamline their IT operations, enhance workflow automation, 
              and maximize the full potential of the ServiceNow platform.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With a team of certified professionals, we provide tailored solutions to meet your unique business needs. 
              Our staffing solutions ensure you get the right talent to drive your projects forward efficiently.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button onClick={scrollToTeam} className="btn-primary text-lg px-8 py-4 h-auto">
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern professional office environment"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
