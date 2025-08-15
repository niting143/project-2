import { CheckCircle, Star } from "lucide-react";
import videoSrc from "../assets/headerVideo.mp4"; // Adjust the path as necessary

export default function Hero() {
  const handleFreeQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-teal-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">
                5-Star Rated Service
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Certified
              <span className="text-blue-600"> Shower & Balcony </span>
              <br />
              Leaks Repair Technician
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert shower and balcony resealing services across Perth. Prevent
              water damage with our professional, long-lasting solutions with
              Epoxy products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
                onClick={handleFreeQuoteClick}
              >
                Get Free Quote
              </button>
              <a href="tel:0401716402">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                  Call Now: 0401 716 402
                </button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">25 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    playsInline
                    loop
                    controls={false} // Optional: hide native controls
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Jobs Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
