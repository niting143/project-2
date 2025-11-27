import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-eucalyptus-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">RS</span>
              </div>
              <span className="text-2xl font-bold font-display tracking-tight">Re-Seal Shower</span>
            </div>
            <p className="text-ocean-200 mb-8 leading-relaxed font-light">
              Sydney's trusted experts in shower and balcony waterproofing. 
              Restoring beauty and functionality to your home.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-eucalyptus-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-eucalyptus-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-eucalyptus-500 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display text-sand-200">Services</h3>
            <ul className="space-y-4">
              {["Shower Repairs", "Balcony Sealing", "Grout Restoration", "Waterproofing"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-ocean-200 hover:text-eucalyptus-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display text-sand-200">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Work", path: "/gallery" },
                { name: "Reviews", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-ocean-200 hover:text-eucalyptus-400 transition-colors flex items-center group"
                  >
                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display text-sand-200">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-eucalyptus-500 shrink-0 mt-1" />
                <span className="text-ocean-200">
                  123 George Street,
                  <br />
                  Sydney, NSW 2000
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-eucalyptus-500 shrink-0" />
                <span className="text-ocean-200">0401 716 402</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-eucalyptus-500 shrink-0" />
                <span className="text-ocean-200">info@resealshower.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean-800 pt-8 flex flex-col md:flex-row justify-between items-center text-ocean-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Re-Seal Shower. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
