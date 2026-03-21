'use client';
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "John Smith",
      role: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      description:
        "Expert in modern architectural design with 10+ years of experience.",
    },
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      description:
        "Specialist in aesthetic and functional interior spaces.",
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
      description:
        "Ensuring every project is delivered on time with perfection.",
    },
  ];

  return (
    <div className="bg-[#e9dfd3] min-h-screen py-20 px-6">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif tracking-widest text-gray-800">
          ABOUT US
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          A dedicated group of skilled designers and architects committed to
          delivering personalized, functional, and aesthetically pleasing
          interior design solutions.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-xl"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              width={400}
              height={300}
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Bottom Slide Details */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-t-3xl">
                <h3 className="text-gray-800 text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 mt-2 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
