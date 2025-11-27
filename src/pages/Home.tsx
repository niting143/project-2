import Hero from '../components/Hero';
import Services from '../components/Services';
import GoogleReviews from '../components/GoogleReviews';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Droplets, CheckCircle, MapPin, Star, Calendar } from 'lucide-react';

// Using a high-quality placeholder that mimics a bright, modern Perth bathroom
const WhyChooseUsImage = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop';
// A texture background for the CTA (Abstract water/sand)
const TextureBg = 'https://images.unsplash.com/photo-1554147090-e1221a04a025?auto=format&fit=crop&q=80';

// Mock Blog Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Signs Your Shower is Leaking (And How to Fix It)",
    excerpt: "Spotting a leak early can save you thousands in structural repairs. Here are the tell-tale signs Perth homeowners miss.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop",
    date: "Oct 12, 2025",
    category: "Maintenance Tips"
  },
  {
    id: 2,
    title: "Epoxy vs. Cement Grout: What's Best for WA Homes?",
    excerpt: "Why traditional cement grout fails in coastal climates and why epoxy is the superior choice for longevity.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    date: "Sep 28, 2025",
    category: "Expert Advice"
  },
  {
    id: 3,
    title: "The Hidden Dangers of Balcony Leaks",
    excerpt: "Waterproofing failure on balconies is a major issue in Perth. Learn how to protect your outdoor living space.",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=800&auto=format&fit=crop",
    date: "Sep 15, 2025",
    category: "Safety"
  },
  {
    id: 4,
    title: "Mould in Your Bathroom? Why Bleach Won't Fix It",
    excerpt: "Learn why bleach only masks the problem and how to permanently remove mould from your grout lines.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    date: "Aug 10, 2025",
    category: "Cleaning Myths"
  },
  {
    id: 5,
    title: "Top Bathroom Renovation Trends in Perth for 2025",
    excerpt: "From open showers to natural stone finishes, discover what's trending in WA bathroom design this year.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    date: "Jul 22, 2025",
    category: "Design Trends"
  },
  {
    id: 6,
    title: "How to Extend the Life of Your Waterproofing",
    excerpt: "Simple maintenance tips to ensure your new shower seal lasts for decades, not just years.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    date: "Jun 05, 2025",
    category: "Home Care"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-eucalyptus-100 selection:text-eucalyptus-900">
      <Hero />
      
      {/* 🇦🇺 Why Choose Us - "Coastal Modern" Design */}
      <section className="py-24 relative overflow-hidden bg-[#faf9f6]"> {/* Off-white "Sand" background */}
        
        {/* Subtle Background Blob (Abstract Decor) */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-eucalyptus-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            
            {/* LEFT: Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200 shadow-sm mb-6">
                <MapPin className="w-4 h-4 text-eucalyptus-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-ocean-900">
                  Proudly Serving Perth & WA
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-ocean-900 mb-6 font-display leading-[1.15]">
                Waterproofing that withstands the <span className="text-transparent bg-clip-text bg-gradient-to-r from-eucalyptus-500 to-ocean-600">Australian Elements.</span>
              </h2>
              
              <p className="text-lg text-charcoal-600 mb-10 leading-relaxed max-w-lg">
                Stop leaks without the demolition. We use premium epoxy resins designed for Perth's unique climate, ensuring your bathroom stays sealed against heat, humidity, and coastal conditions.
              </p>
              
              {/* Modern Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                <FeatureCard 
                  icon={Shield} 
                  title="25-Year Warranty" 
                  desc="Industry leading protection." 
                />
                <FeatureCard 
                  icon={Droplets} 
                  title="No Tile Removal" 
                  desc="Save money, save the mess." 
                />
                <FeatureCard 
                  icon={Clock} 
                  title="Same Day Service" 
                  desc="Shower again the next morning." 
                />
                <FeatureCard 
                  icon={CheckCircle} 
                  title="Licensed Experts" 
                  desc="Fully insured WA professionals." 
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-ocean-900 text-white px-8 py-4 rounded-full hover:bg-ocean-800 transition-all duration-300 font-bold shadow-lg shadow-ocean-900/20 group hover:-translate-y-1"
                >
                  Get Your Free Quote 
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-charcoal-100 text-charcoal-700 hover:border-ocean-900 hover:text-ocean-900 transition-all duration-300 font-bold bg-white"
                >
                  How It Works
                </Link>
              </div>
            </div>
            
            {/* RIGHT: Visual Composition */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-ocean-900/10 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <img
                  src={WhyChooseUsImage}
                  alt="Modern Perth Bathroom Renovation"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out aspect-[4/5]"
                />
                
                {/* Floating "Glass" Info Card - Bottom Left */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl flex items-center gap-5">
                     <div className="bg-eucalyptus-100 p-3 rounded-full flex-shrink-0">
                        <Shield className="w-8 h-8 text-eucalyptus-600" />
                     </div>
                     <div>
                       <p className="text-ocean-900 font-bold text-lg leading-tight">100% Leak-Free Guarantee</p>
                       <p className="text-charcoal-500 text-sm mt-1">Trusted by 500+ Perth Families</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Decorative "Perth Sun" Circle behind */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-sand-200 rounded-full mix-blend-multiply opacity-70 animate-pulse-slow" />
              
              {/* Floating Review Badge - Top Right */}
              <div className="absolute top-10 -right-6 z-30 hidden lg:block animate-float">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                  <div className="flex gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-ocean-900 uppercase tracking-wide">Google Reviews</span>
                  <span className="text-2xl font-bold text-ocean-900">5.0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <Services />

      {/* --- Reviews Section --- */}
      <GoogleReviews />

      {/* --- FAQ Section --- */}
      <FAQ />

      {/* 📰 NEW: Blog / Insights Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-eucalyptus-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                Latest Insights
              </span>
              <h2 className="text-4xl font-bold text-ocean-900 font-display">
                Tips & News from the Experts
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-ocean-900 font-bold hover:text-eucalyptus-600 transition-colors group"
            >
              View All Articles 
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link 
                key={post.id} 
                to="/blog" // In a real app, this would be `/blog/${post.slug}`
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-ocean-900/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ocean-900 uppercase tracking-wide shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-charcoal-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-ocean-900 mb-3 font-display leading-tight group-hover:text-eucalyptus-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-ocean-900 font-bold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🌊 CTA Section - Ocean Gradient & Depth */}
      <section className="relative py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={TextureBg} className="w-full h-full object-cover opacity-20 mix-blend-overlay" alt="texture" />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-[#0F172A] to-eucalyptus-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">
              Don't let a leaking shower <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eucalyptus-300 to-sand-200">damage your home.</span>
            </h2>
            <p className="text-xl text-ocean-100/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Join hundreds of happy Perth homeowners. Get a free assessment and restore your bathroom's integrity today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/contact"
                className="bg-white text-ocean-900 px-10 py-5 rounded-full hover:bg-sand-50 transition-all duration-300 font-extrabold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:-translate-y-1"
              >
                Book Free Inspection
              </Link>
              <a
                href="tel:0401716402"
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-bold text-lg backdrop-blur-sm"
              >
                <span>Call 0401 716 402</span>
              </a>
            </div>
            
            <p className="mt-8 text-sm text-white/40 uppercase tracking-widest">
              No Call Out Fee • Obligation Free Quotes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for clean code
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
  return (
    <div className="flex items-start p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-sand-100 group">
      <div className="bg-eucalyptus-50 p-2.5 rounded-xl mr-4 group-hover:bg-eucalyptus-100 transition-colors">
        <Icon className="w-6 h-6 text-eucalyptus-600" />
      </div>
      <div>
        <h3 className="font-bold text-ocean-900 text-lg">{title}</h3>
        <p className="text-sm text-charcoal-500 leading-snug">{desc}</p>
      </div>
    </div>
  );
}