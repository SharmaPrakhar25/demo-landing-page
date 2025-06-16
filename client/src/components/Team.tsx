import { Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description: "ServiceNow expert with 10+ years in IT consulting and implementation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Priya Sharma",
    role: "ServiceNow Technical Lead",
    description: "Certified ServiceNow developer and implementation specialist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Amit Patel",
    role: "IT Staffing Manager",
    description: "Expert in connecting top IT talent with leading organizations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Kavya Reddy",
    role: "ServiceNow Consultant",
    description: "Business analyst specializing in ServiceNow optimization and workflow automation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-business-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-business-dark mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who drive our success and deliver exceptional results for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-business-dark mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="text-primary hover:text-blue-700 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="text-primary hover:text-blue-700 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
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
