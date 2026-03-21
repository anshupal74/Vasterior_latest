"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    "MAHAVASTU YOGDAN",
    "INTERIOR DESIGNING",
    "VASTU GRIDDING SERVEY",
    "SPATIAL FLOW PALNNING",
    "VASTU STYLING",
    "VASTU CONSULTTAION",
    "PROJECT MANAGMENT CONSULATING",
  ];

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-white border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex gap-6">
            <a
              href="tel:+919100883355"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Phone size={16} />
              +91 9100883355
            </a>
            <a
              href="mailto:vasteriorstudio@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Mail size={16} />
              vasteriorstudio@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#F7DCC2]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"
              alt="Vasterior Logo"
              width={90}
              height={90}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>

            {/* SERVICES DROPDOWN */}
 <Link href="/services" className="relative cursor-pointer">
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
          
              <div className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </div>

              {servicesOpen && (
                <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-56 py-2 z-50 text-sm">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        href={`/services/${service.toLowerCase().replace(/\s/g, "-")}`}
                        className="block px-4 py-1.5 hover:bg-gray-100 transition"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

 </Link>

            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <button className="bg-[#D8B48A] px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#caa06e] transition">
              <Phone size={16} />
              Get Best Price
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#F7DCC2] px-4 pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>

              {/* MOBILE SERVICES */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2"
                >
                  Services <ChevronDown size={16} />
                </button>

                {servicesOpen && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                    {services.map((service) => (
                      <li key={service}>
                        <Link
                          href={`/services/${service.toLowerCase().replace(/\s/g, "-")}`}
                          className="block py-1"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>

              <button className="bg-[#D8B48A] px-5 py-2 rounded-full w-fit">
                Get Best Price
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
