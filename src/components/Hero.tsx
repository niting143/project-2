import { CheckCircle, Star, MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          // Using the image from your snippet
          src="/hero_luxury_bathroom_1764143528001.png" 
          // Fallback if local image fails
          onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'}}
          alt="Luxury Modern Bathroom Renovation Perth"
          className="w-full h-full object-cover animate-slow-zoom" 
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-900/60 to-transparent" />
      </div>

      {/* 2. Main Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl animate-slide-up">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">
              #1 Rated in Perth
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-display drop-shadow-lg">
            Perth's Premier
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eucalyptus-300 to-sand-200 block mt-2">
              Shower & Balcony
            </span>
            Restoration Experts
          </h1>

          {/* Subtext */}
          <p className="text-xl text-ocean-50 mb-10 leading-relaxed max-w-xl font-light drop-shadow-md">
            Transforming bathrooms across WA with our premium epoxy sealing solutions. 
            Waterproof, durable, and beautifully finished without the need for demolition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <Link
              to="/contact"
              className="group bg-eucalyptus-500 hover:bg-eucalyptus-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-eucalyptus-500/50 flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="tel:0401716402" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              0401 716 402
            </a>
          </div>

          {/* Trust Indicators (Badges) */}
          <div className="flex flex-wrap gap-6 text-white/90">
            {[
              "25 Year Warranty",
              "Same Day Service", 
              "Licensed & Insured"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-eucalyptus-400" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Glassmorphism Stats Bar (Replaces the Side Card) */}
      <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-ocean-900/40 backdrop-blur-xl hidden lg:block">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            
            {/* Location Badge */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-eucalyptus-400" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Serving Areas</p>
                <p className="font-display font-bold text-xl text-white">All Perth Metro</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-12 w-px bg-white/20" />

            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-3xl font-bold text-white font-display">200+</p>
                <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Jobs Done</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-12 w-px bg-white/20" />

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-3xl font-bold text-white font-display">10+</p>
                <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Years Exp</p>
              </div>
            </div>

             {/* Vertical Divider */}
             <div className="h-12 w-px bg-white/20" />

             {/* Google Review Badge */}
             <div className="flex items-center gap-3 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                <div className="text-center">
                    <p className="text-xs text-ocean-900 font-bold uppercase">Google</p>
                    <p className="text-[10px] text-ocean-600 font-medium">Reviews</p>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-ocean-900">5.0</span>
                    <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}