import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import contactImage from "@assets/contact_page.avif";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "✨ Message Sent Successfully!",
        description:
          "Thank you for reaching out! We've received your inquiry and our team will get back to you within 24 hours. Check your email for a confirmation.",
        duration: 6000,
        variant: "default",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "❌ Message Failed to Send",
        description:
          "We encountered an issue sending your message. Please check your connection and try again, or contact us directly at rkads23@gmail.com",
        variant: "destructive",
        duration: 8000,
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      toast({
        title: "⚠️ Missing Required Information",
        description:
          "Please fill in all required fields (marked with *) before submitting your message.",
        variant: "info",
        duration: 5000,
      });
      return;
    }
    submitContactForm.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "rkads23@gmail.com",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91-8096152094",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Office",
      info: "Flat # 401, R.K. Residency, House No.84258/R/ 18 & 19,\nBupesh Nagar, Greenland Colony,\nKarmanghat, Hyderabad-500079",
      color: "from-orange-500 to-red-600",
    },
  ];

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
              Get In
              <span className="block text-gradient">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
            >
              Ready to optimize your IT operations? Contact R K Ads today to
              discuss how we can help streamline your ServiceNow implementation,
              provide expert consulting, or connect you with top IT talent.
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
                src={contactImage}
                alt="Contact us - Professional team ready to help"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "1199/743" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Contact Information
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get in touch with us through any of the following channels.
                  We're here to help you with your IT needs.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-6 shadow-lg flex-shrink-0`}
                    >
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {info.info}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold text-foreground mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-semibold text-foreground"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="John"
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-semibold text-foreground"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Doe"
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-foreground"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="john@company.com"
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-semibold text-foreground"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your Company"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="service"
                        className="text-sm font-semibold text-foreground"
                      >
                        Service Interest *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it-staffing">
                            IT Staffing Solutions
                          </SelectItem>
                          <SelectItem value="servicenow-implementation">
                            ServiceNow Implementation
                          </SelectItem>
                          <SelectItem value="servicenow-consulting">
                            ServiceNow Consulting
                          </SelectItem>
                          <SelectItem value="general-inquiry">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-foreground"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project and how we can help..."
                        rows={6}
                        className="mt-2"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitContactForm.isPending}
                      className="btn-primary w-full text-lg py-4 h-auto"
                    >
                      {submitContactForm.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Hyderabad, we're here to serve you better.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4942!2d78.5552!3d17.3457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIwJzQ0LjUiTiA3OMKwMzMnMTguNyJF!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin&q=Flat+401+R.K.+Residency+House+No.84258+R+18+19+Bupesh+Nagar+Greenland+Colony+Karmanghat+Hyderabad+500079"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="R K Ads Office Location - Karmanghat, Hyderabad"
                ></iframe>

                {/* Overlay with office details */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-2">
                        R K Ads Office
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Flat # 401, R.K. Residency, House No.84258/R/ 18 & 19,
                        <br />
                        Bupesh Nagar, Greenland Colony,
                        <br />
                        Karmanghat, Hyderabad-500079, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
