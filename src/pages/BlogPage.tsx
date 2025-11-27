import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Shower is Leaking (And How to Fix It)",
    excerpt: "Spotting a leak early can save you thousands in structural repairs. Here are the tell-tale signs Perth homeowners miss.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop",
    date: "Oct 12, 2025",
    author: "James Wilson",
    category: "Maintenance Tips"
  },
  {
    id: 2,
    title: "Epoxy vs. Cement Grout: What's Best for WA Homes?",
    excerpt: "Why traditional cement grout fails in coastal climates and why epoxy is the superior choice for longevity.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    date: "Sep 28, 2025",
    author: "Sarah Jenkins",
    category: "Expert Advice"
  },
  {
    id: 3,
    title: "The Hidden Dangers of Balcony Leaks",
    excerpt: "Waterproofing failure on balconies is a major issue in Perth. Learn how to protect your outdoor living space.",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=800&auto=format&fit=crop",
    date: "Sep 15, 2025",
    author: "David Thompson",
    category: "Safety"
  },
  {
    id: 4,
    title: "Mould in Your Bathroom? Why Bleach Won't Fix It",
    excerpt: "Learn why bleach only masks the problem and how to permanently remove mould from your grout lines.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    date: "Aug 10, 2025",
    author: "James Wilson",
    category: "Cleaning Myths"
  },
  {
    id: 5,
    title: "Top Bathroom Renovation Trends in Perth for 2025",
    excerpt: "From open showers to natural stone finishes, discover what's trending in WA bathroom design this year.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    date: "Jul 22, 2025",
    author: "Sarah Jenkins",
    category: "Design Trends"
  },
  {
    id: 6,
    title: "How to Extend the Life of Your Waterproofing",
    excerpt: "Simple maintenance tips to ensure your new shower seal lasts for decades, not just years.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    date: "Jun 05, 2025",
    author: "David Thompson",
    category: "Home Care"
  },
  {
    id: 7,
    title: "Rising Damp vs. Leaking Shower: How to Tell the Difference",
    excerpt: "Is the paint peeling because of the ground or your shower? We break down the key differences.",
    image: "https://images.unsplash.com/photo-1585565898606-d50d4f3b2361?q=80&w=800&auto=format&fit=crop",
    date: "May 18, 2025",
    author: "James Wilson",
    category: "Expert Advice"
  },
  {
    id: 8,
    title: "Why Silicone Needs Replacing Every 3-5 Years",
    excerpt: "Silicone doesn't last forever. Here is why refreshing your perimeter seals is the cheapest insurance for your home.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
    date: "Apr 02, 2025",
    author: "Sarah Jenkins",
    category: "Maintenance Tips"
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 min-h-screen bg-sand-50 pb-20">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eucalyptus-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white border border-sand-200 shadow-sm">
             <span className="text-xs font-bold text-ocean-900 tracking-widest uppercase">
               The Knowledge Hub
             </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-ocean-900 mb-6 font-display">
            Latest News & Insights
          </h1>
          <p className="text-xl text-charcoal-600 font-light">
            Expert advice on bathroom maintenance, renovation trends, and waterproofing solutions for <span className="font-semibold text-ocean-800">Perth homes</span>.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 justify-between items-center bg-white p-4 rounded-[2rem] shadow-lg border border-ocean-50">
           {/* Search Input */}
           <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-sand-50 border-none focus:ring-2 focus:ring-eucalyptus-500 text-ocean-900 placeholder:text-charcoal-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           {/* Category Pills */}
           <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-ocean-900 text-white shadow-md' 
                    : 'bg-white text-charcoal-500 hover:bg-sand-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-ocean-50 group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-ocean-900 uppercase tracking-wider flex items-center gap-2 shadow-sm">
                    <Tag className="w-3 h-3 text-eucalyptus-500" />
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Meta Data */}
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-eucalyptus-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1.5 text-eucalyptus-500" />
                      {post.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-ocean-900 mb-4 font-display leading-tight group-hover:text-eucalyptus-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-charcoal-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-ocean-900 font-bold hover:text-eucalyptus-600 transition-colors text-sm"
                    >
                      Read Full Article 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-charcoal-200">
            <h3 className="text-xl font-bold text-ocean-900 mb-2">No articles found</h3>
            <p className="text-charcoal-500">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* Newsletter / CTA at bottom */}
        <div className="mt-20 bg-ocean-900 rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 font-display">Need Personalized Advice?</h2>
              <p className="text-ocean-100 mb-8 font-light">
                Every home is different. Contact our team for a free assessment of your specific bathroom situation.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-white text-ocean-900 px-8 py-4 rounded-full font-bold hover:bg-sand-50 transition-colors shadow-lg"
              >
                Contact Us Today
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
}