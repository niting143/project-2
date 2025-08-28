import { useState } from "react";
import { Star, Quote, ChevronDown } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paul R",
      location: "WA, PERTH",
      rating: 5,
      text: "Perfect Shower Reseal – Guy from Re-Seal Shower did an amazing job .He was polite, knowlegeable, neat and did a perfect job on resealing our shower which was leaking. Looks like new.",
      service: "7 Days Ago",
    },
    {
      name: "Peter",
      location: "WA, Perth",
      rating: 5,
      text: "Tile Regrouting – Re-Seal Shower Team came to our home to regrout our toilet and shower recess. He is a very professional, respectful and friendly man. He takes great pride in his work and did an amazing job. Thank you",
      service: "Last Month",
    },
    {
      name: "Nancy",
      location: "WA, Perth",
      rating: 5,
      text: "Regrout and reseal shower – We are very happy with the job Re-Seal Shower did for us He is a very pleasant and respectful young man. Punctual and efficient. Thank you Neville and Nancy",
      service: "3 Months Ago",
    },
    {
      name: "Varun",
      location: "WA, Perth",
      rating: 5,
      text: "Exceptional quality and professionalism – I needed an area grouted, siliconed and sealed.i was getting very high quote from other companies my friend recommended me Re-Seal Shower. Guy did an amazing job. His eye for detail is a rare find in tradesmen these days. He finished the job in time and within budget. I highly recommend him.",
      service: "6 Months Ago",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 relative border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-sm"
            >
              <Quote className="w-10 h-10 text-blue-600 opacity-50 absolute top-4 right-4" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-600 font-semibold">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">
                4.9/5 Rating
              </div>
              <div className="text-gray-600">Based on 200+ reviews</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I know if my shower needs resealing?",
      a: "Common signs include discoloured grout, loose tiles, mould growth, or water stains outside the bathroom area. If you see any of these, it’s time to book an inspection.",
    },
    {
      q: "Do you need to remove tiles to fix a leaking shower?",
      a: "No, our process avoids removing tiles. We reseal using epoxy grout and Hyper Strong Bond, which saves time, cost, and mess.",
    },
    {
      q: "How long does the resealing process take?",
      a: "Most showers can be fully resealed in a single day, and you can usually use your shower again within 24 hours.",
    },
    {
      q: "Why do you use epoxy grout instead of cement grout?",
      a: "Epoxy grout is far stronger, more durable, and completely water-resistant. It comes with a 25-year warranty for peace of mind.",
    },
    {
      q: "Do you use subcontractors for the job?",
      a: "No. Our team handles every inspection and every resealing job ourselves. This ensures quality, accountability, and consistent results.",
    },
    {
      q: "Is resealing more affordable than a full renovation?",
      a: "Yes, resealing is a cost-effective alternative that extends the life of your bathroom without the expense of major renovations.",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-center mb-3">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </span>
      </h3>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Answers to common questions about our shower resealing service.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`relative rounded-2xl border transition-all duration-300 bg-gradient-to-br ${
                isOpen
                  ? "from-blue-50 via-white to-indigo-50 border-blue-200 shadow-md"
                  : "from-gray-50 via-white to-gray-50 border-gray-100 hover:shadow-sm"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors ${
                  isOpen ? "" : "bg-transparent"
                }`}
              />
              <button
                type="button"
                className="w-full flex items-center justify-between gap-6 p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-semibold text-gray-900 leading-snug">
                  {item.q}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                    isOpen
                      ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                      : "border-gray-200 bg-gray-50 text-gray-500"
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 text-gray-700 ${
                  isOpen
                    ? "max-h-[300px] opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
