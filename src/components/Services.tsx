import { 
  Droplets, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ClipboardCheck, 
  FileText, 
  Hammer, 
  ShieldCheck 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Shower Leaking Repairs",
    description: "Stop leaks instantly with our advanced epoxy sealing technology. No tile removal required.",
    features: ["Waterproof Seal", "2-Hour Service", "10-Year Guarantee"],
    price: "$395",
    popular: true,
  },
  {
    icon: Shield,
    title: "Balcony Sealing",
    description: "Protect your balcony from water damage and efflorescence with our premium membrane system.",
    features: ["UV Resistant", "Non-Slip Finish", "Weather Protection"],
    price: "$495",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Grout & Tile Restoration",
    description: "Revitalize your bathroom with professional regrouting and deep cleaning services.",
    features: ["Stain Resistant", "Colour Matching", "Mould Removal"],
    price: "$295",
    popular: false,
  },
  {
    icon: Droplets,
    title: "Epoxy Grouting",
    description: "The ultimate stain-resistant solution for showers and floors. Durable, waterproof, and easy to clean.",
    features: ["Stain Proof", "No Sealing Needed", "Lifetime Durability"],
    price: "$450",
    popular: false,
  },
  {
    icon: Shield,
    title: "Silicone Replacement",
    description: "Remove old, mouldy silicone and replace it with high-grade, sanitary sealant for a fresh look.",
    features: ["Mould Resistant", "Colour Matched", "Perfect Finish"],
    price: "$195",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Full Waterproofing",
    description: "Comprehensive waterproofing membranes for new builds or full renovations. AS3740 Compliant.",
    features: ["Certificate Provided", "Multi-Layer System", "10-Year Warranty"],
    price: "Custom",
    popular: false,
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Free Assessment",
    description: "We visit your property to inspect using moisture meters and thermal imaging.",
  },
  {
    icon: FileText,
    title: "Fixed Price Quote",
    description: "Receive a transparent, upfront quote with no hidden costs or surprises.",
  },
  {
    icon: Hammer,
    title: "The Repair",
    description: "Our technicians perform the epoxy sealing without removing any tiles.",
  },
  {
    icon: ShieldCheck,
    title: "Ready Next Day",
    description: "Your shower is dry and ready to use in 24 hours, backed by warranty.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* 1. Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sand-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eucalyptus-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ==================== SERVICES SECTION ==================== */}
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-ocean-50 border border-ocean-100">
             <span className="text-sm font-bold text-ocean-600 tracking-wider uppercase">
               Our Expertise
             </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-ocean-900 mb-6 font-display">
            Premium Waterproofing Services
          </h2>
          <p className="text-xl text-charcoal-600 font-light leading-relaxed">
            Specialized restoration solutions designed for <span className="font-semibold text-ocean-800">Perth homes</span>. 
            We fix the problem at the source.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col relative bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  service.popular 
                    ? "border-eucalyptus-200 shadow-xl shadow-eucalyptus-900/5 ring-1 ring-eucalyptus-100" 
                    : "border-gray-100 shadow-lg shadow-ocean-900/5 hover:border-ocean-200"
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-eucalyptus-500 text-white px-4 py-1.5 rounded-bl-2xl rounded-tr-[1.8rem] text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  service.popular 
                    ? "bg-eucalyptus-100 text-eucalyptus-600 group-hover:bg-eucalyptus-500 group-hover:text-white" 
                    : "bg-ocean-50 text-ocean-600 group-hover:bg-ocean-600 group-hover:text-white"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-ocean-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 bg-sand-50/50 p-4 rounded-xl border border-sand-100">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-charcoal-700">
                      <Check className="w-4 h-4 text-eucalyptus-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer (Price & CTA) */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-charcoal-400 font-bold uppercase tracking-wide block mb-0.5">From</span>
                    <span className="text-xl font-bold text-ocean-900">{service.price}</span>
                  </div>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group-hover:scale-105 ${
                        service.popular
                        ? "bg-eucalyptus-500 text-white shadow-lg shadow-eucalyptus-500/30"
                        : "bg-ocean-900 text-white shadow-lg shadow-ocean-900/20"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== PROCESS SECTION ==================== */}
        
        <div className="relative rounded-[3rem] p-8 lg:p-16 overflow-hidden">
          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-eucalyptus-400 via-ocean-500 to-eucalyptus-400 opacity-20" />
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ocean-900 mb-4 font-display">
              How It Works
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our seamless 4-step process ensures your bathroom is back in action as quickly as possible.
            </p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-charcoal-200 to-transparent -z-0" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center group z-10">
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-eucalyptus-200">
                    <Icon className="w-8 h-8 text-ocean-600 group-hover:text-eucalyptus-600 transition-colors" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 translate-x-10 bg-ocean-900 text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold text-ocean-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-ocean-900 text-white font-bold hover:bg-ocean-800 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Start Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}