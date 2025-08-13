import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paul R",
      location: "WA, PERTH",
      rating: 5,
      text: "Perfect Shower reseal – Guy from FIX SHOWER AND BALCONY did an amazing job .He was polite, knowlegeable, neat and did a perfect job on resealing our shower which was leaking. Looks like new.",
      service: "7 Days Ago",
    },
    {
      name: "Peter",
      location: "WA, Perth",
      rating: 5,
      text: "Tile Regrouting – FIX SHOWER AND BALCONY TEAM came to our home to regrout our toilet and shower recess. He is a very professional, respectful and friendly man. He takes great pride in his work and did an amazing job. Thank you",
      service: "Last Month",
    },
    {
      name: "Nancy",
      location: "WA, Perth",
      rating: 5,
      text: "Regrout and reseal shower – We are very happy with the job FIX SHOWER AND BALCONY did for us He is a very pleasant and respectful young man. Punctual and efficient. Thank you Neville and Nancy",
      service: "3 Months Ago",
    },
    {
      name: "Varun",
      location: "WA, Perth",
      rating: 5,
      text: "Exceptional quality and professionalism – I needed an area grouted, siliconed and sealed.i was getting very high quote from other companies my friend recommended me FIX SHOWER AND BALCONY LEAKS. Guy did an amazing job. His eye for detail is a rare find in tradesmen these days. He finished the job in time and within budget. I highly recommend him.",
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
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
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
      </div>
    </section>
  );
}
