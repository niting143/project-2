import { Star, Quote, MapPin, Loader2, ArrowRight } from "lucide-react";

import { useGoogleReviews } from "../hooks/useGoogleReviews";

// --- STATIC FALLBACK DATA (Perth Localized) ---
// Used if API fails or no key is provided
const FALLBACK_REVIEWS = [
  {
    author_name: "Sarah Mitchell",
    author_url: "#",
    profile_photo_url: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=e0f2f1&color=0d9488",
    rating: 5,
    text: "Absolutely thrilled with the shower resealing! The team was professional, punctual, and the result looks brand new. Highly recommend for anyone in Perth.",
    relative_time_description: "2 weeks ago",
    location: "Mosman Park, WA" // Added manually for fallback
  },
  {
    author_name: "David Chen",
    author_url: "#",
    profile_photo_url: "https://ui-avatars.com/api/?name=David+Chen&background=fff7ed&color=c2410c",
    rating: 5,
    text: "Saved me thousands on a full renovation. The epoxy grout looks amazing and no more leaks! Great communication throughout the process.",
    relative_time_description: "1 month ago",
    location: "Applecross, WA"
  },
  {
    author_name: "Emma Wilson",
    author_url: "#",
    profile_photo_url: "https://ui-avatars.com/api/?name=Emma+Wilson&background=eff6ff&color=1d4ed8",
    rating: 5,
    text: "Professional service from start to finish. They explained everything clearly and the workmanship is top notch. My balcony is finally waterproof.",
    relative_time_description: "3 months ago",
    location: "Cottesloe, WA"
  }
];

export default function Testimonials() {
  const { reviews, loading } = useGoogleReviews();
  const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || "";

  // Safe Render Data: Ensure we always have an array
  const displayReviews = (reviews && reviews.length > 0) ? reviews : FALLBACK_REVIEWS;

  return (
    <div className="pt-32 min-h-screen bg-sand-50 pb-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eucalyptus-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              className="w-4 h-4" 
            />
            <span className="text-xs font-bold tracking-widest uppercase text-ocean-900">
              Verified Reviews
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-ocean-900 mb-6 font-display">
            What Our Clients Say
          </h1>
          <p className="text-xl text-charcoal-600 font-light">
            Don't just take our word for it. See what satisfied homeowners across <span className="font-semibold text-ocean-800">Perth & WA</span> have to say.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-eucalyptus-500 animate-spin" />
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayReviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-[2rem] shadow-lg hover:-translate-y-1 transition-transform duration-300 border border-ocean-50 relative group flex flex-col h-full"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-8 right-8 w-8 h-8 text-sand-200 fill-current group-hover:text-eucalyptus-200 transition-colors" />
                
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < (review.rating || 5) ? "text-yellow-400 fill-current" : "text-gray-200"}`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-charcoal-600 mb-8 leading-relaxed italic text-sm md:text-base flex-grow">
                  "{review.text && review.text.length > 200 ? review.text.substring(0, 200) + "..." : review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Use Google Profile Photo if available, otherwise UI Avatar */}
                    <img 
                      src={review.profile_photo_url || `https://ui-avatars.com/api/?name=${review.author_name}&background=e0f2f1&color=0d9488`} 
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-ocean-900 text-sm line-clamp-1">
                        {review.author_name}
                      </h4>
                      <div className="flex items-center text-xs text-charcoal-400 mt-0.5">
                         {/* Google API doesn't usually return user location, so we show 'Local Guide' or generic text if real API is used, or fallback location if static */}
                        <MapPin className="w-3 h-3 mr-1" />
                        {(review as { location?: string }).location || "Perth, WA"} 
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-charcoal-400 font-medium bg-sand-50 px-2.5 py-1 rounded-lg whitespace-nowrap">
                    {review.relative_time_description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Link to Google Maps */}
        <div className="mt-16 text-center">
            <a 
              href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ocean-900 text-ocean-900 hover:bg-ocean-900 hover:text-white transition-all duration-300 font-bold group"
            >
                Read All Reviews on Google
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </div>
  );
}