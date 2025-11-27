import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the home page (for transparency logic)
  const isHome = location.pathname === "/";

  // Dynamic styling based on scroll position and page
  // If we are Home & Not Scrolled: Transparent Background, White Text
  // Otherwise: White Background, Dark Text
  const isTransparent = isHome && !scrolled;
  
  const headerBgClass = isTransparent 
    ? "bg-transparent py-6" 
    : "bg-white/90 backdrop-blur-md shadow-sm py-4";

  const textColorClass = isTransparent ? "text-white" : "text-ocean-900";
  const logoBoxClass = isTransparent ? "bg-white/20 backdrop-blur-sm text-white" : "bg-ocean-900 text-white";
  const hoverTextClass = isTransparent ? "hover:text-eucalyptus-300" : "hover:text-eucalyptus-600";
  const mobileMenuBtnClass = isTransparent ? "text-white hover:bg-white/10" : "text-ocean-900 hover:bg-ocean-50";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${headerBgClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${logoBoxClass} group-hover:rotate-6`}>
              <span className="font-display font-bold text-xl">RS</span>
            </div>
            <span className={`text-xl lg:text-2xl font-display font-bold tracking-tight transition-colors ${textColorClass}`}>
              Re-Seal Shower
            </span>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/10 shadow-sm">
            {navLinks.map((link) => {
               // Logic for nav pill styling
               const activeStyle = isTransparent 
                 ? "bg-white text-ocean-900 shadow-md" 
                 : "bg-ocean-900 text-white shadow-md";
               
               const inactiveStyle = isTransparent
                 ? "text-white/90 hover:bg-white/20 hover:text-white"
                 : "text-charcoal-600 hover:bg-gray-100 hover:text-ocean-900";

               return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path) ? activeStyle : inactiveStyle
                  }`}
                >
                  {link.name}
                </Link>
               )
            })}
          </nav>

          {/* --- ACTIONS (Phone & CTA) --- */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:0401716402" 
              className={`flex items-center space-x-2 text-sm font-bold transition-colors ${textColorClass} ${hoverTextClass}`}
            >
              <Phone className={`w-4 h-4 ${isTransparent ? 'text-eucalyptus-400' : 'text-eucalyptus-600'}`} />
              <span>0401 716 402</span>
            </a>
            
            <Link
              to="/contact"
              className={`group flex items-center px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm font-bold ${
                isTransparent
                 ? "bg-white text-ocean-900 hover:bg-sand-50"
                 : "bg-eucalyptus-500 text-white hover:bg-eucalyptus-600"
              }`}
            >
              Get Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${mobileMenuBtnClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        {/* We keep this solid white for legibility on mobile */}
        <div 
            className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
              isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-ocean-50 text-ocean-900 font-bold"
                    : "text-charcoal-600 hover:bg-gray-50 hover:text-ocean-900"
                }`}
              >
                {link.name}
                {isActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-eucalyptus-500" />}
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
               <a 
                 href="tel:0401716402"
                 className="flex items-center justify-center w-full px-4 py-3 rounded-xl border border-gray-200 text-ocean-900 font-bold hover:bg-gray-50"
               >
                 <Phone className="w-4 h-4 mr-2 text-eucalyptus-600" />
                 Call 0401 716 402
               </a>
               <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full bg-ocean-900 text-white px-4 py-3 rounded-xl hover:bg-ocean-800 transition-colors font-bold"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}