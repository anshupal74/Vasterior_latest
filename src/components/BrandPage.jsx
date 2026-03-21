"use client";

import { useState } from "react";
import Image from "next/image";

export default function BrandPage() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="w-full bg-[#F6EDE3]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-sm tracking-[0.4em] font-medium text-gray-800 mb-6">
              BRAND STORY
            </h1>

            <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
              Hello Dwellers, Welcome To Vasterior
            </h2>

            <p className="text-gray-800 leading-relaxed mb-4">
              Founded in 2023, Vasterior was born with a clear vision—to transform
              ordinary rooms into extraordinary environments that inspire and
              endure.
            </p>

            {readMore && (
              <>
                <p className="text-gray-800 leading-relaxed mb-4">
                  What began as a deep-rooted passion for design and artistry has
                  evolved into a commitment to crafting interiors that harmonize
                  functionality, elegance, and individuality.
                </p>

                <p className="text-gray-800 leading-relaxed mb-4">
                  Every design we create reflects personality, purpose, and
                  positive energy—ensuring timeless beauty in every detail.
                </p>

                <p className="text-gray-800 leading-relaxed">
                  For us, every space is more than just four walls—it is a story
                  waiting to be told, shaped by the people who live within it.
                </p>
              </>
            )}

            <button
              onClick={() => setReadMore(!readMore)}
              className="mt-6 text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600 transition"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px]">
            <Image
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231884/Brand_Story-modified_k9rpc5_otdgqi.webp"
              alt="Vasterior Interior Design"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
