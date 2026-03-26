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

        {/* Left Form */}
        <div className="bg-[#e5d2bf] rounded-2xl p-12 shadow-md">
          <h2 className="text-3xl font-semibold text-slate-800 mb-10">
            Send us a Message
          </h2>

          {/* ✅ Web3Forms Integration */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-8"
          >

            {/* Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="99ed9ee9-30d7-43b3-b9e3-057555ee6292"
            />

            {/* Subject (optional) */}
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="phone"
                  required
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
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg text-slate-800">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
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
                name="location"
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
                name="message"
                rows="6"
                required
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

        {/* Right Contact Info */}
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
                +91 7467036437
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
                palanshu874@gmail.com
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919100883355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-xl transition duration-300 hover:scale-110"
      >
        WhatsApp
      </a>

    </div>
  );
}