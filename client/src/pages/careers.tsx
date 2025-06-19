import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Mail, Users, Award, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import careersImage from '@assets/careers-image.jpeg';

export default function Careers() {
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
              Join Our Team
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
            >
              Be part of an innovative IT solutions provider. We're looking for passionate and skilled professionals to join our growing team.
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
                src={careersImage}
                alt="Join our team - Professional career opportunities"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why R.K. ADS Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why <span className="text-gradient">R.K. ADS</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Professional Growth */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                {/* Icon */}
                <div className="inline-flex w-fit p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-white h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-foreground mb-4 text-2xl">
                  Professional Growth
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  Continuous learning and development opportunities to help you reach your full potential.
                </p>

                {/* Benefits List */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Professional certifications support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                    <span className="text-sm text-muted-foreground">Innovation and creativity encouraged</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Mentorship programs</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Work-Life Balance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                {/* Icon */}
                <div className="inline-flex w-fit p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-foreground mb-4 text-2xl">
                  Work-Life Balance
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  Flexible working hours and remote options that adapt to your lifestyle.
                </p>

                {/* Benefits List */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Flexible working hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-teal-500" />
                    <span className="text-sm text-muted-foreground">Remote work opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Competitive benefits package</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              How to <span className="text-gradient">Apply</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to take the next step in your career? Send your resume to our HR team and we'll get back to you soon.
            </p>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground text-lg">Send us your resume</h3>
                  <p className="text-muted-foreground text-sm">We'll review and get back to you</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hr@rkads.net"
                  className="inline-block text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  hr@rkads.net
                </a>
                
                <div className="pt-4">
                  <Button
                    onClick={() => window.location.href = 'mailto:hr@rkads.net'}
                    className="btn-primary"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 