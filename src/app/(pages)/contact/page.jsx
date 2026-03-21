'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#d8cbbd] px-6 py-20 relative">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-serif text-slate-800">
          Get In Touch
        </h1>
        <p className="mt-6 text-xl text-slate-700 leading-relaxed">
          Have a project in mind? We'd love to hear from you! Reach out today and let's start
          creating a space that truly reflects your style and vision.
        </p>
      </div>

      {/* Main Section */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 max-w-7xl mx-auto">

        {/* Left Form (Wider) */}
        <div className="bg-[#e5d2bf] rounded-2xl p-12 shadow-md">
          <h2 className="text-3xl font-semibold text-slate-800 mb-10">
            Send us a Message
          </h2>

          <form className="space-y-8">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Project Type
                </label>
                <select className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option>Select a Service</option>
                  <option>Residential Interior</option>
                  <option>Commercial Interior</option>
                  <option>Vastu Consultation</option>
                  <option>Renovation</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 text-lg text-slate-800">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-lg text-slate-800">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 bg-[#e7c9a8] hover:bg-[#ddb992] px-10 py-4 rounded-full text-lg font-medium transition duration-300 shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Right Contact Info (Narrower) */}
        <div className="bg-[#e5d2bf] rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl font-semibold text-slate-800 mb-10">
            Contact Information
          </h2>

          {/* Office */}
          <div className="flex gap-6 mb-8">
            <div className="bg-[#e7c9a8] p-4 rounded-full">
              <MapPin className="text-slate-800" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Our Office
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Office no. - A4,<br />
                First Floor, Khosla Complex,<br />
                Gagan Vihar Extension,<br />
                Delhi, 110092
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6 mb-8">
            <div className="bg-[#e7c9a8] p-4 rounded-full">
              <Phone className="text-slate-800" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Phone
              </h3>
              <p className="text-slate-700 mt-2">
                +91 9100883355
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-6 mb-12">
            <div className="bg-[#e7c9a8] p-4 rounded-full">
              <Mail className="text-slate-800" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Email
              </h3>
              <p className="text-slate-700 mt-2">
                vasteriorstudio@gmail.com
              </p>
            </div>
          </div>

          {/* Map */}
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Find Us on Map
          </h3>

          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=28.6436,77.2961&z=15&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919100883355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-xl transition duration-300 hover:scale-110"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413z"/>
        </svg>
      </a>

    </div>
  );
}
