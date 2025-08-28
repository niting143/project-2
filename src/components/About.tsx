import { Award, Users, Shield, CheckCircle } from "lucide-react";
import imgs from "../assets/epoxygrout.png";

export default function About() {
  const certifications = [
    "Licensed Waterproofing Technician",
    "Australian Building Codes Board Certified",
    "Fully Insured & Bonded",
    "WorkSafe Compliance Certified",
    "Environmental Safety Standards",
    "25+ Years Material Warranty",
  ];

  const handleFreeQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Re-Seal Shower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perth's most trusted shower resealing and waterproofing specialist,
            delivering premium solutions with unmatched expertise and
            reliability and Perth's most trusted shower resealing and
            waterproofing specialists, delivering premium solutions with
            unmatched expertise and reliability.{" "}
            <span className="text-blue-600 font-semibold">
              We provide top-quality service at the most affordable price,
              offering value you can trust.
            </span>
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We have been in the trade for over 10 years as qualified
                waterproofers and skilled tilers. Our expertise is in repairing{" "}
                <span className="text-blue-600 font-semibold">
                  shower and balcony leaks
                </span>{" "}
                without removing tiles and without breaking the bank. We use
                high quality{" "}
                <span className="text-blue-600 font-semibold">Epoxy Grout</span>
                , which is far superior to standard grout and comes with a{" "}
                <span className="text-blue-600 font-semibold">
                  25-year warranty
                </span>
                . We also repair loose or{" "}
                <span className="text-blue-600 font-semibold">
                  hollow-sounding tiles by injecting liquid Hyper Strong Bond
                </span>
                , a clean and mess-free solution that avoids the need for major
                renovations.
              </p>
              <p className="text-xl font-bold text-gray-900 mt-0 mb-0">
                Why Choose Us
              </p>
              <p>
                We never pass our work on to subcontractors who try to rush
                through multiple jobs in a day. When you book us, we personally
                handle the inspection and we personally complete the job. There
                is no third party involved, only our team dedicated to
                delivering the best results.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={imgs}
                    alt="Epoxy Grout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To protect Perth homes from water damage through expert
                resealing and waterproofing solutions, delivered with integrity
                and excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Our Values
              </h4>
              <p className="text-gray-600">
                Quality craftsmanship, honest communication, reliable service,
                and customer satisfaction are the cornerstones of everything we
                do.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Our Promise
              </h4>
              <p className="text-gray-600">
                Every project comes with our comprehensive warranty and
                commitment to long-term customer satisfaction and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Licensed & Certified Professionals
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with the Best ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Discover why thousands of homeowners choose Re-Seal Shower for
              fast, affordable, and long-lasting shower resealing and
              waterproofing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                onClick={handleFreeQuoteClick}
              >
                Get Free Quote
              </button>
              <a href="tel:0401716402">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  Call 0401 716 402
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
