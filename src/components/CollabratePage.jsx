'use client';

import { Handshake, ArrowRight } from 'lucide-react';

export default function CollaboratePage() {
  const collaborators = [
    {
      title: 'Artist/ Art Gallery',
      image: 'https://cdn-icons-png.flaticon.com/128/4344/4344149.png',
    },
    {
      title: 'Vastu Consultants',
      image: 'https://cdn-icons-png.flaticon.com/128/7951/7951824.png',
    },
    {
      title: 'Architects',
      image: 'https://cdn-icons-png.flaticon.com/128/2092/2092027.png',
    },
    {
      title: 'Civil Contractors',
      image: 'https://cdn-icons-png.flaticon.com/128/2942/2942433.png',
    },
    {
      title: 'M.E.P Consultants',
      image: 'https://cdn-icons-png.flaticon.com/128/15834/15834400.png',
    },
    {
      title: 'Builders',
      image: 'https://cdn-icons-png.flaticon.com/128/15876/15876021.png',
    },
  ];

  return (
    <div className="bg-[#ffe8d6] px-6 pb-16 pt-0">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto pt-6">
        <h1 className="text-3xl md:text-5xl font-serif tracking-widest text-black">
          Our Collaborators
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We partner with the best in the industry to deliver exceptional design solutions.
        </p>
      </div>

      {/* Collaborator Icons */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 max-w-6xl mx-auto text-center">
        {collaborators.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-contain transition duration-300 group-hover:scale-110"
            />

            <p className="mt-4 text-base text-slate-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">

        <div className="inline-flex items-center gap-3 bg-gray-200 px-6 py-3 rounded-full text-base text-slate-800">
          <Handshake size={18} />
          Interested in collaborating with us?
        </div>

        <p className="mt-6 text-lg text-slate-800">
          We're always looking for new partnerships that align with our vision and values.
        </p>

        <div className="mt-6">
          <button className="bg-[#e7c9a8] hover:bg-[#ddb992] px-10 py-4 rounded-full text-base font-medium transition duration-300 inline-flex items-center gap-3">
            Become a Collaborator
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
