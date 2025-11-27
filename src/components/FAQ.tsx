import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you need to remove my tiles?",
    answer: "In 95% of cases, NO. Our advanced epoxy sealing system is designed to stop leaks without removing tiles. We remove the old grout and replace it with our waterproof epoxy grout, saving you the cost and mess of a full renovation."
  },
  {
    question: "How long does the process take?",
    answer: "Most standard shower repairs are completed in just 3-4 hours. You can usually use the shower again the very next day (24 hours curing time)."
  },
  {
    question: "Is there a warranty?",
    answer: "Yes! We offer a 25-year product warranty on our epoxy grout and a 10-year workmanship guarantee. We stand by the quality of our work."
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Sydney Metropolitan area, from the Northern Beaches to Sutherland Shire, and from the Eastern Suburbs to Penrith."
  },
  {
    question: "How do I know if my shower is leaking?",
    answer: "Common signs include peeling paint on adjacent walls, damp carpets, musty smells, loose tiles, or visible water stains on the ceiling below."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md mb-6 text-eucalyptus-500">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold text-ocean-900 mb-6 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-600 font-light">
            Everything you need to know about our shower repair process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-ocean-50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-bold text-ocean-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-eucalyptus-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-charcoal-400" />
                )}
              </button>
              <div 
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-charcoal-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
