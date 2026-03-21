"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: `“Vasterior perfectly blended aesthetics and Vastu, transforming our space into a harmonious, positive environment. It feels balanced, beautiful, and filled with positive energy. Their expertise and creativity exceeded expectations. Truly exceptional!”`,
      name: "Mr. Rakesh & Mrs. Reena Jain",
      location: "Studio Apartment, Noida Extension",
    },
    {
      text: `“The team created a beautiful and peaceful environment for our home. Every detail was thoughtfully designed and executed perfectly. We are extremely satisfied with the outcome.”`,
      name: "Mr. Amit & Mrs. Sneha Sharma",
      location: "Luxury Villa, Gurugram",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 1 : 0));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div className="min-h-screen bg-[#fde8d7] px-6 py-20 flex flex-col items-center">

      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-black">
          Testimonials
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Hear what our clients have to say about their experience.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative mt-16 w-full max-w-4xl">

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Card */}
        <div className="bg-[#e4c6a6] rounded-2xl px-6 md:px-16 py-12 text-center shadow-lg">

          {/* Top Rating Stars */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                size={26}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star size={26} className="text-gray-300" />
          </div>

          {/* Testimonial Text */}
          <p className="text-base md:text-xl leading-relaxed text-black max-w-2xl mx-auto">
            {testimonials[current].text}
          </p>

          {/* Logo + Client Info */}
          <div className="mt-10 flex items-center justify-center gap-5">

            {/* Circular Logo with Stars */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex flex-col items-center justify-center shadow-md p-2">

              <User size={24} className="text-white mb-1" />

              <div className="flex gap-1">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    size={10}
                    className="fill-white text-white"
                  />
                ))}
              </div>

            </div>

            {/* Name & Location */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-black">
                {testimonials[current].name}
              </h3>
              <p className="text-slate-700 text-sm mt-1">
                {testimonials[current].location}
              </p>
            </div>

          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Dots */}
      <div className="flex gap-3 mt-8">
        {[0, 1].map((index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}
