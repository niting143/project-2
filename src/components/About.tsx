import { Award, Users, Shield, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import imgs from "../assets/epoxygrout.png";

// Placeholder for a team or job-site image to complement your product image
const TeamImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop";

export default function About() {
  const certifications = [
    "Licensed Waterproofing Technician",
    "Australian Building Codes Board Certified",
    "Fully Insured & Bonded",
    "WorkSafe Compliance Certified",
    "Environmental Safety Standards",
    "25+ Years Material Warranty",
  ];

  return (
    <section className="bg-white overflow-hidden">
      
      {/* 1. HERO SECTION (Text Only Center) */}
      <div className="relative pt-24 pb-20 bg-sand-50">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-eucalyptus-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm mb-8">
              <MapPin className="w-4 h-4 text-eucalyptus-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-ocean-900">
                Proudly Perth Owned & Operated
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-ocean-900 mb-6 font-display">
              We Don't Just Fix Leaks.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eucalyptus-500 to-ocean-600">
                We Restore Peace of Mind.
              </span>
            </h1>
            
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Perth's trusted specialists in non-invasive waterproofing. We provide top-quality service at an affordable price, offering value you can trust without the need for costly renovations.
            </p>
         </div>
      </div>

      {/* 2. THE JOURNEY (Split Layout) */}
      <div className="py-24 container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ocean-900 mb-8 font-display">
              A Decade of Excellence
            </h2>
            <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed font-light">
              <p>
                We have been in the trade for over <span className="font-bold text-ocean-900">10 years</span> as qualified waterproofers and skilled tilers. Our expertise lies in repairing shower and balcony leaks without removing tiles—saving you time, mess, and money.
              </p>
              
              <p>
                We utilize <span className="font-bold text-eucalyptus-600">High-Quality Epoxy Grout</span>, which is far superior to standard cement-based grout. It's stain-proof, waterproof, and comes with a <span className="font-bold text-ocean-900">25-year warranty</span>.
              </p>

              
              
              <p>
                For loose or hollow tiles, we use our specialized <span className="font-bold text-eucalyptus-600">Hyper Strong Bond</span> injection system. It's a clean, surgical solution that avoids major demolition.
              </p>

              {/* USP Box */}
              <div className="bg-ocean-50 border-l-4 border-ocean-900 p-6 rounded-r-xl mt-8">
                <h3 className="text-xl font-bold text-ocean-900 mb-2">Our "No Subcontractor" Promise</h3>
                <p className="text-charcoal-700 text-base">
                  We never pass work to subcontractors. When you book Re-Seal Shower, 
                  <span className="font-bold"> we personally handle the inspection and the job.</span> 
                  No third parties, just our dedicated team ensuring the best results.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative">
            {/* Background Image (Team/Work) */}
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src={TeamImage} 
                alt="Re-Seal Shower Team at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ocean-900/10" />
            </div>

            {/* Foreground Inset Image (The Product - imgs) */}
            <div className="absolute -bottom-10 -left-10 w-2/3 bg-white p-4 rounded-3xl shadow-xl z-20 animate-float">
               <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 relative">
                  <img 
                    src={imgs} 
                    alt="Epoxy Grout Close up" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-ocean-900/80 backdrop-blur text-white text-xs px-3 py-1 rounded-tr-lg">
                    Premium Epoxy Tech
                  </div>
               </div>
            </div>

            {/* Decor Dots */}
            <div className="absolute -top-6 -right-6 grid grid-cols-3 gap-2 opacity-20">
               {[...Array(9)].map((_,i) => (
                 <div key={i} className="w-3 h-3 rounded-full bg-eucalyptus-500" />
               ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. MISSION & VALUES (Dark Mode Section) */}
      <section className="py-28 left-0 right-0 bg-ocean-900 relative overflow-hidden">
      
      {/* 1. Background Atmosphere */}
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-[#0f172a] to-ocean-900" />
      
      {/* Glowing orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-eucalyptus-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-display tracking-tight">
             Our Core Philosophy
           </h2>
           <p className="text-ocean-100/80 text-lg font-light leading-relaxed">
             We believe in doing things right the first time. Our reputation is built on three non-negotiable pillars.
           </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          
          {/* Connector Line (Desktop) - Visualizes the flow between pillars */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          {/* Card 1: Mission */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 z-10">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-eucalyptus-400 to-eucalyptus-600 flex items-center justify-center mb-8 shadow-lg shadow-eucalyptus-500/20 group-hover:scale-110 transition-transform duration-500">
              <Shield className="w-8 h-8 text-white" />
              {/* Icon Glow */}
              <div className="absolute inset-0 bg-eucalyptus-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Mission</h3>
            <p className="text-ocean-100/80 leading-relaxed font-light">
              To protect Perth homes from water damage through expert resealing solutions, delivered with <span className="text-white font-medium">absolute integrity</span> and technical excellence.
            </p>
          </div>

          {/* Card 2: Values */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 z-10">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sand-300 to-sand-500 flex items-center justify-center mb-8 shadow-lg shadow-sand-400/20 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-8 h-8 text-white" />
              <div className="absolute inset-0 bg-sand-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Values</h3>
            <p className="text-ocean-100/80 leading-relaxed font-light">
              Quality craftsmanship, honest communication, and reliable service are the <span className="text-white font-medium">non-negotiable cornerstones</span> of everything we do.
            </p>
          </div>

          {/* Card 3: Promise */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 z-10">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
              <Award className="w-8 h-8 text-white" />
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Promise</h3>
            <p className="text-ocean-100/80 leading-relaxed font-light">
              Every project comes with our comprehensive warranty and a personal commitment to your <span className="text-white font-medium">long-term peace of mind</span>.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* 4. CERTIFICATIONS */}
      <div className="py-24 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-900 mb-4 font-display">Licensed & Certified</h2>
            <p className="text-charcoal-600">We adhere to the strictest Australian Standards (AS3740).</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-sand-200 hover:border-eucalyptus-300 transition-colors"
              >
                <div className="bg-eucalyptus-50 p-2 rounded-full mr-4">
                  <CheckCircle className="w-5 h-5 text-eucalyptus-600" />
                </div>
                <span className="text-ocean-900 font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <div className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-[2.5rem] p-8 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-eucalyptus-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-white font-bold mb-6 font-display">
              Ready to work with the best?
            </h2>
            <p className="text-ocean-100 mb-10 text-lg font-light">
              Discover why thousands of homeowners choose Re-Seal Shower for fast, affordable, and long-lasting waterproofing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-ocean-900 px-8 py-4 rounded-full hover:bg-sand-50 transition-all duration-300 font-bold shadow-lg hover:-translate-y-1"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:0401716402"
                className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-bold"
              >
                Call 0401 716 402
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}