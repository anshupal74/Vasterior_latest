"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function VideosPage() {
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/aqz-KE-bpKQ",
  ];

  return (
    <div className="bg-[#EADDD2] min-h-screen py-12 relative">
      
      {/* PAGE TITLE */}
      <h1 className="text-center text-4xl md:text-6xl font-serif text-gray-800 mb-12">
        Project Videos
      </h1>

      {/* VIDEOS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={video}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919100883355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform z-50"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
