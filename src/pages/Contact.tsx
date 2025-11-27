import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-sand-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-ocean-900 mb-6 font-display">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal-600 font-light">
            Ready to restore your bathroom? Contact our Perth team for a free quote today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-ocean-50">
            <h2 className="text-2xl font-bold text-ocean-900 mb-8 font-display">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl bg-sand-50 border-transparent focus:border-eucalyptus-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl bg-sand-50 border-transparent focus:border-eucalyptus-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-3 rounded-xl bg-sand-50 border-transparent focus:border-eucalyptus-500 focus:bg-white focus:ring-0 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-5 py-3 rounded-xl bg-sand-50 border-transparent focus:border-eucalyptus-500 focus:bg-white focus:ring-0 transition-all duration-300"
                  placeholder="0400 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-sand-50 border-transparent focus:border-eucalyptus-500 focus:bg-white focus:ring-0 transition-all duration-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-ocean-50">
                <div className="w-12 h-12 bg-eucalyptus-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-eucalyptus-600" />
                </div>
                <h3 className="text-lg font-bold text-ocean-900 mb-2">Call Us</h3>
                <p className="text-charcoal-600">0401 716 402</p>
                <p className="text-sm text-charcoal-400 mt-1">Mon-Fri, 9am-5pm</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-ocean-50">
                <div className="w-12 h-12 bg-eucalyptus-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-eucalyptus-600" />
                </div>
                <h3 className="text-lg font-bold text-ocean-900 mb-2">Email Us</h3>
                <p className="text-charcoal-600">info@resealshower.com.au</p>
                <p className="text-sm text-charcoal-400 mt-1">Online support 24/7</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-ocean-50 sm:col-span-2">
                <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-eucalyptus-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-eucalyptus-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ocean-900 mb-2">Visit Us</h3>
                    <p className="text-charcoal-600">123 St Georges Terrace, Perth WA 6000</p>
                    <p className="text-sm text-charcoal-400 mt-1">Serving all Perth Metro areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-ocean-50 h-[400px] relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216694.0152960686!2d115.72757656640625!3d-31.952854999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA!5e0!3m2!1sen!2sau!4v1716860000000!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '2rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Perth Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
