import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RK</span>
              </div>
              <span className="text-xl font-bold">R K Ads</span>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering top-notch IT services centered around ServiceNow implementation and consulting.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  IT Staffing Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ServiceNow Implementation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ServiceNow Consulting
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-700">
              <li>rkads23@gmail.com</li>
              <li>+91-8096152094</li>
              <li>
                Flat # 401, R.K. Residency
                <br />
                Karmanghat, Hyderabad-500079
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-700">
            © 2024 R K Ads. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
