'use client';

import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { id: 1, question: 'What services do you offer?', answer: 'We offer comprehensive Vastu consultancy services including residential Vastu, commercial Vastu, interior design aligned with Vastu principles, space correction, and personalized consultations for homes and offices.' },
    { id: 2, question: 'How can I book a consultation?', answer: 'You can book a consultation by calling us at +91 9100883355, emailing us at vasteriorstudio@gmail.com, or filling out the contact form on our website. We offer both in-person and online consultations.' },
    { id: 3, question: 'Do you provide customized interior designs?', answer: 'Yes, we provide fully customized interior design services that seamlessly blend modern aesthetics with traditional Vastu principles to create harmonious and beautiful spaces tailored to your needs.' },
    { id: 4, question: 'How long does a project usually take?', answer: 'Project timelines vary based on scope and complexity. A basic Vastu consultation typically takes 1-2 weeks, while complete interior design projects can range from 2-6 months depending on the size and requirements.' },
    { id: 5, question: 'Do you provide online consultations?', answer: 'Yes, we offer online Vastu consultations via video call for clients anywhere in the world. You can share your floor plans and photos digitally, and we provide detailed reports and recommendations remotely.' }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-3">
            {/* Logo + Name */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-24 h-24 relative">
                <img
                  src="https://www.vasterior.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda12wzxoq%2Fimage%2Fupload%2Fv1764841085%2Fvasteriorlogo_bmzk0r.png&w=640&q=75"
                  alt="Vasterior Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="text-lg font-serif text-gray-800"></div>
                <div className="text-sm text-gray-600"></div>
              </div>
            </div>

            {/* Address */}
            <div className="text-left mb-2">
              <p className="text-gray-800 font-medium leading-relaxed">
                Office no. - A4, First Floor,<br />
                Khosla Complex, Gagan Vihar<br />
                Extension, Delhi, 110092
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-left">
              <a href="mailto:vasteriorstudio@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-amber-600">
                <span>Email:</span> <span className="font-medium">vasteriorstudio@gmail.com</span>
              </a>
              <a href="tel:+919100883355" className="flex items-center space-x-2 text-gray-700 hover:text-amber-600">
                <span>Call:</span> <span className="font-medium">+91 9100883355</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-2">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li><a href="/" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Home</a></li>
              <li><a href="/why-choose" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Why Choose</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-amber-600 transition-colors text-base">About Us</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Services</a></li>
              <li><a href="/portfolio" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Portfolio</a></li>
              <li><a href="/team" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Team</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Contact</a></li>
              <li><a href="/careers" className="text-gray-700 hover:text-amber-600 transition-colors text-base">Careers</a></li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="mb-2">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">FAQs</h3>
            <div className="space-y-2 text-left">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-300 pb-2">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-amber-600">
                      {faq.question}
                    </span>
                    <span className="text-amber-600 text-lg">{openFAQ === faq.id ? '-' : '+'}</span>
                  </button>
                  {openFAQ === faq.id && (
                    <p className="mt-1 text-gray-700 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Our Location */}
          <div className="mb-2">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Our Location</h3>
            <div className="relative">
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg mb-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.999999999999!2d77.2999999!3d28.6399999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzM4LjkiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%]"
                ></iframe>
              </div>

              <div className="text-center">
                <a
                  href="/careers"
                  className="inline-block bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom with Text + Links */}
        <div className="border-t border-gray-300 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2026 VASTERIOR. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-amber-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-amber-600">Terms & Conditions</a>
            <a href="/disclaimer" className="hover:text-amber-600">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
