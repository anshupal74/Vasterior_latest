"use client";

import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* 🔶 HERO SECTION */}
      <section className="relative w-full h-[320px] md:h-[340px] lg:h-[360px] overflow-hidden">

        {/* Background Image */}
        <img
          src="https://i.pinimg.com/1200x/eb/32/7f/eb327f9af794126244ef6ac883300bba.jpg"
          alt="Vasterior Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide">
            VASTERIOR SERVICES
          </h1>

          <p className="mt-3 md:mt-4 text-sm md:text-xl italic font-light">
            Where Energy, Aesthetics & Purpose Converge
          </p>
        </div>
      </section>

      {/* 🔶 BREADCRUMB SECTION */}
      <section className="bg-[#d9c9bd] py-5 px-6 md:px-20">
        <div className="flex items-center gap-3 text-gray-700 text-base md:text-lg">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <span>{">"}</span>
          <span className="font-medium text-black">Services</span>
        </div>
      </section>

      {/* 🔶 PAGE TITLE */}
      <section className="bg-[#d9c9bd] py-14 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800">
          Vasterior Services
        </h2>
      </section>

      {/* 🔶 INTRODUCTORY TEXT SECTION */}
      <section className="bg-[#f5f0eb] py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            At Vasterior, we believe a space is more than architecture; it is a living organism, constantly interacting with its occupants. 
            Every corner carries intention, every material holds memory, and every layout shapes how energy moves through life.
          </p>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            Our services unite MahaVastu science, spatial psychology, and luxury interior design to create environments that feel 
            grounded, beautiful, and profoundly aligned with your goals.
          </p>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed italic text-gray-700 pt-4">
            Whether you seek clarity, better flow, wellness, harmony, or a complete transformation, Vasterior offers a structured, 
            holistic approach that honours both your vision and your energy.
          </p>

        </div>
      </section>

      {/* 🔶 OUR CORE OFFERINGS HEADING */}
      <section className="bg-[#e8ddd0] py-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif text-gray-900 tracking-wide">
          OUR CORE OFFERINGS
        </h2>
      </section>

      {/* 🔶 SERVICE CARDS SECTION */}
      <section className="bg-[#e8ddd0] pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ===== CARD 1: MahaVastu Yogdan ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              1. MahaVastu Yogdan
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              A free service dedicated to healing, clarity, and upliftment.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              MahaVastu Yogdan is our heartfelt contribution to society; a gurudakshina-inspired offering by every trained MahaVastu practitioner 
              to honour Dr. Khushdeep Bansal, the founder of the MahaVastu system.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              This free service is designed for individuals facing challenges related to career, finances, relationships, stability, or emotional well-being.
            </p>

            <div className="bg-[#faf8f5] rounded-lg p-6 mb-6">
              <p className="text-center font-semibold text-gray-800 mb-2">
                Guided by the motto:
              </p>
              <p className="text-center italic text-gray-700">
                "Har Ghar Hoga MahaVastu; Dhan, Sukh, Sehat Tathastu."
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Each Yogdan session follows a precise and structured 20-minute process:
            </p>

            <ul className="space-y-2 mb-6 ml-5">
              <li className="text-base md:text-lg text-gray-700">
                • 10 minutes – Understanding the client's concern
              </li>
              <li className="text-base md:text-lg text-gray-700">
                • 5 minutes – Analyzing the layout
              </li>
              <li className="text-base md:text-lg text-gray-700">
                • 5 minutes – Giving MahaVastu insights + practical steps
              </li>
            </ul>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Important Notes:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Offered every Wednesday, on-site and offline only
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Each person can avail it once every 4 months
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Privacy is guaranteed
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Clients must bring a scaled layout with true north
                </li>
              </ul>
            </div>

            <Link 
              href="/services/mahavastu-yogdan" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 2: Interior Designing ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              2. Interior Designing
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Creating beautiful spaces aligned with energy and purpose.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Our interior design services go beyond aesthetics. We combine luxury design principles with MahaVastu science to create 
              spaces that are not only visually stunning but also energetically balanced and purposeful.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              From residential to commercial projects, we ensure every element—color, material, layout, and furniture—works in harmony 
              to support your goals, enhance well-being, and create lasting positive impact.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                What We Offer:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Complete interior design consultation and execution
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • MahaVastu-aligned spatial planning
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Custom furniture and décor selection
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • 3D visualization and design rendering
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Project management from concept to completion
                </li>
              </ul>
            </div>

            <Link 
              href="/services/interior-designing" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 3: MahaVastu Consultation ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              3. MahaVastu Consultation
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Professional energy assessment and spatial alignment guidance.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Our comprehensive MahaVastu consultation services help you understand and optimize the energy flow in your space. 
              Whether it's a home, office, or commercial establishment, we provide detailed analysis and practical solutions.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Services Include:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Complete site analysis and energy mapping
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Detailed MahaVastu report with recommendations
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Zone-wise energy assessment
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Practical remedies and corrections
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Follow-up support and guidance
                </li>
              </ul>
            </div>

            <Link 
              href="/services/mahavastu-consultation" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 4: Renovation & Remodeling ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              4. Renovation & Remodeling
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Transform existing spaces with energy-conscious design upgrades.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Our renovation services breathe new life into existing spaces while ensuring optimal energy alignment. We handle everything 
              from minor updates to complete overhauls, always keeping MahaVastu principles at the core.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Our Approach:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Space assessment and redesign planning
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Structural modifications with Vastu compliance
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Material selection and finishes
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Complete project execution and management
                </li>
              </ul>
            </div>

            <Link 
              href="/services/renovation" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 5: Commercial Spaces ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              5. Commercial Spaces
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Energy-optimized design for offices, retail, and hospitality.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in creating commercial environments that enhance productivity, attract prosperity, and leave lasting impressions. 
              Our designs balance aesthetic appeal with energetic harmony for optimal business outcomes.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Ideal For:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Corporate offices and workspaces
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Retail stores and showrooms
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Restaurants and cafes
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Hotels and hospitality venues
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Clinics and wellness centers
                </li>
              </ul>
            </div>

            <Link 
              href="/services/commercial-spaces" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 6: Residential Projects ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              6. Residential Projects
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Creating homes that nurture, inspire, and energize.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              From apartments to villas, we design residential spaces that become true sanctuaries. Every room is thoughtfully planned 
              to support family harmony, health, and happiness through perfect energy alignment.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                We Design:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Complete home interiors
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Master bedrooms and private spaces
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Living and dining areas
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Kitchens and utility spaces
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Home offices and study rooms
                </li>
              </ul>
            </div>

            <Link 
              href="/services/residential" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 7: Turnkey Solutions ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              7. Turnkey Solutions
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              End-to-end project management from concept to completion.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Our turnkey solutions take care of every aspect of your project. From initial consultation to final handover, we manage 
              the entire process, ensuring a seamless, stress-free experience with exceptional results.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Complete Package Includes:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Initial consultation and planning
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Design development and approvals
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Procurement and material management
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Construction and execution oversight
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Quality control and final handover
                </li>
              </ul>
            </div>

            <Link 
              href="/services/turnkey" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

          {/* ===== CARD 8: Training & Workshops ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12">
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              8. Training & Workshops
            </h3>

            <p className="text-base md:text-lg italic text-gray-600 mb-6">
              Learn MahaVastu principles and spatial design fundamentals.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We offer comprehensive training programs and workshops for individuals interested in understanding MahaVastu science, 
              energy principles, and conscious design. Whether you're a homeowner or aspiring practitioner, we have programs for you.
            </p>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Programs Available:
              </h4>
              <ul className="space-y-2 ml-5">
                <li className="text-base md:text-lg text-gray-700">
                  • Introduction to MahaVastu for homeowners
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Professional certification courses
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • One-day intensive workshops
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Corporate wellness programs
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  • Advanced practitioner training
                </li>
              </ul>
            </div>

            <Link 
              href="/services/training" 
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#b8894f] font-medium text-lg transition"
            >
              Learn More <FaArrowRight className="text-sm" />
            </Link>

          </div>

        </div>
      </section>

      {/* 🔶 WHATSAPP FLOAT BUTTON */}
      
        
      

    </div>
  );
}