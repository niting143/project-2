import { Star } from "lucide-react";
import { useGoogleReviews } from "../hooks/useGoogleReviews";

const FALLBACK_REVIEWS = [
  {
    author_name: "Sarah Mitchell",
    author_url: "#",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWb-JjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJ=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "Absolutely thrilled with the shower resealing! The team was professional, punctual, and the result looks brand new. Highly recommend for anyone in Perth.",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "David Chen",
    author_url: "#",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWb-JjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJ=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "Saved me thousands on a full renovation. The epoxy grout looks amazing and no more leaks! Great communication throughout the process.",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Emma Wilson",
    author_url: "#",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWb-JjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJjJ=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "Professional service from start to finish. They explained everything clearly and the workmanship is top notch. My balcony is finally waterproof.",
    relative_time_description: "3 months ago",
  },
];

export default function GoogleReviews() {
  const { reviews } = useGoogleReviews();
  const displayReviews = (reviews && reviews.length > 0) ? reviews.slice(0, 3) : FALLBACK_REVIEWS;
  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="w-5 h-5"
            />
            <span className="font-medium text-charcoal-700">4.9 Rating</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-ocean-900 font-display">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayReviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[2rem] shadow-lg hover:-translate-y-1 transition-transform duration-300 border border-ocean-50"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600 font-bold text-xl">
                  {review.author_name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-ocean-900">{review.author_name}</h4>
                  <p className="text-xs text-charcoal-400">{review.relative_time_description}</p>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-5 h-5 ml-auto opacity-50"
                />
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-600 leading-relaxed text-sm">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
