import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "R K Ads implemented ServiceNow for our organization seamlessly. Their technical expertise and project management skills ensured we went live on time with zero disruptions to our operations.",
    author: "Suresh Reddy",
    role: "IT Director, TechFlow Solutions",
    initials: "SR",
  },
  {
    quote: "The IT staffing solutions from R K Ads helped us find qualified ServiceNow developers quickly. Their candidates were well-screened and ready to contribute from day one.",
    author: "Meera Joshi",
    role: "HR Manager, InnovateTech",
    initials: "MJ",
  },
  {
    quote: "R K Ads consulting team optimized our ServiceNow workflows and reduced our ticket resolution time by 40%. Their deep platform knowledge made all the difference.",
    author: "Vikram Singh",
    role: "Operations Head, DataSystems Ltd",
    initials: "VS",
  },
];

const avatarColors = ["bg-primary", "bg-secondary", "bg-accent"];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our team of certified ServiceNow experts is dedicated to transforming your IT operations. 
            We bring deep hands-on understanding of the platform and commitment to delivering real value to your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover shadow-lg bg-business-light">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${avatarColors[index]} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-business-dark">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
