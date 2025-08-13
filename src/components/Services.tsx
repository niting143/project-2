import React from "react";
import { Droplets, Shield, Wrench, Clock, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      title: "Basic Shower Service",
      description:
        "Complete shower base service with epoxy grout (colour matching)",
      features: [
        "Complementary high grade silicone to the shower screen and taps",
        "Complementary grout patch-up to the walls",
        "Water damage protection mold prevention sealer",
        "25-year warranty",
      ],
      price: "From $399",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Standard Shower Service",
      description:
        "Two walls and floor(Base) re-grout with epoxy (colour matching)",
      features: [
        "Complementary high grade silicone to the shower screen and taps",
        "Complementary shower screen cleaning",
        "Water damage protection mold prevention sealer",
        "Special discount for pensioners",
        "25-year warranty",
      ],
      price: "From $675",
    },
    {
      icon: <Droplets className="w-12 h-12 text-orange-600" />,
      title: "Balcony Services",
      description: "Stop balcony leakages with replacing normal grout to epoxy",
      features: [
        "Complementary inject megabond into the drummy tiles without replacing them",
        "Complementary sealer to the tiles(If required)",
        "Complementary visible repair to the crack tiles",
        "Special discount for pensioners",
        "25-year warranty",
      ],
      price: "Price varies on Size basis",
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: "Maintenance & Repair",
      description:
        "Regular maintenance and repair services to keep your sealing in perfect condition",
      features: [
        "Inspections after 6 months (If required)",
        "Crack tile replacement",
        "Preventive care",
        "Emergency service",
      ],
      price: "From $100",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional shower & balcony resealing services with 25 years of
            warranty
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </span>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <a href="tel:0401716402">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Get Quote On Call
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
