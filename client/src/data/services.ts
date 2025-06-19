import { 
  Users, 
  Settings, 
  Cog,
  Code,
  HeadphonesIcon,
  ArrowUpCircle,
  Database,
  Coffee,
  Zap,
  type LucideIcon
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    description: "At R.K. ADS, we provide highly skilled IT professionals to meet your business needs. Whether you require short-term contractors or full-time hires, we have a vast network of qualified experts proficient in ServiceNow and other IT domains.",
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    icon: Settings,
    title: "ServiceNow Implementation",
    description: "From initial setup to full-scale deployment, we ensure a seamless and efficient implementation of ServiceNow in your organization. Our experts help you configure and customize the platform to align with your business processes.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: Cog,
    title: "ServiceNow Consulting",
    description: "Leverage our deep industry knowledge to optimize your ServiceNow experience. We analyze your existing IT ecosystem and provide strategic recommendations to enhance efficiency, reduce costs, and improve service delivery.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Code,
    title: "ServiceNow Custom Development",
    description: "We understand that every business is unique. Our developers build custom applications and integrations on the ServiceNow platform, ensuring your IT infrastructure supports your business goals effectively.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: HeadphonesIcon,
    title: "ServiceNow Managed Services",
    description: "Let us handle the ongoing management, maintenance, and optimization of your ServiceNow environment. Our proactive approach ensures high performance, security, and compliance.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: ArrowUpCircle,
    title: "ServiceNow Upgrades & Support",
    description: "Stay ahead with the latest features and security updates. We provide end-to-end upgrade services and continuous support to ensure a smooth and uninterrupted experience.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Database,
    title: "SAP",
    description: "At R.K. ADS, we deliver fast and efficient SAP ERP implementation, integration, and support. From module setup to ABAP development and 24/7 helpdesk, our tailored solutions boost productivity, streamline processes, and drive business growth.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Coffee,
    title: "Java",
    description: "R.K. ADS delivers robust Java solutions tailored to your business needs—from modernizing legacy systems to building secure, scalable applications from scratch. Leveraging the latest frameworks and best practices.",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Salesforce",
    description: "At R.K. ADS, we provide powerful Salesforce CRM solutions to streamline sales, boost conversions, and optimize customer engagement. From lead tracking and automation to real-time reporting and opportunity management.",
    color: "from-blue-600 to-cyan-500",
  },
]; 