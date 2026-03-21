import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "MAHAVASTU",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "INTERIOR",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "VASTU GUIDING",
      image:
        "https://i.pinimg.com/736x/cb/61/0c/cb610ca2db78e8f171a954f17f974f61.jpg",
    },
    {
      title: "SPATIAL FLOW",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "VASTU RENOVATION",
      image:
        "https://i.pinimg.com/736x/58/c5/c4/58c5c4ebef67286b733340b9d8cdaec9.jpg",
    },
    {
      title: "PROJECT MANAGMENT CONSULTING",
      image:
        "https://i.pinimg.com/736x/54/be/da/54bedab179cf74b8dc1de450c87676d8.jpg",
    },
    {
      title: "VASTU GREEDY SERVER",
      image:
        "https://i.pinimg.com/736x/58/c5/c4/58c5c4ebef67286b733340b9d8cdaec9.jpg",
    },
    {
      title: "INTERIOR DESIGNING",
      image:
        "https://i.pinimg.com/736x/ae/b7/b1/aeb7b10dc9ebfced2de38c4cfe88ea1d.jpg",
    },
    
    
  ];

  return (
    <div className="bg-[#e9dfd3] min-h-screen py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif tracking-[0.3em] text-gray-900">
          SERVICES
        </h1>

        <p className="mt-8 max-w-5xl mx-auto text-gray-600 text-lg leading-relaxed">
          At Vasterior, we deliver a complete range of design solutions,
          spanning architecture, interiors, furniture, lighting, product
          design, and landscaping—offering clients a seamless and integrated
          experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-xl h-[400px]"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              width={500}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Title */}
            <div className="absolute bottom-8 left-0 w-full text-center">
              <h2 className="text-white text-3xl font-serif tracking-widest">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
