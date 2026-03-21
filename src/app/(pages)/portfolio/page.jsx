// app/portfolio/page.jsx  (App Router)
// or pages/portfolio.js   (Pages Router)

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411920/3_eejw8t.jpg",
      height: "h-[320px]",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411916/4_wtyt6k.jpg",
      height: "h-[320px]",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231880/p2_lpbamm_nzjhq0.png",
      height: "h-[320px]",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411911/8_ifrmgh.jpg",
      height: "h-[300px]",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411887/3_idjfpl.jpg",
      height: "h-[300px]",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411924/8_s2kxgm.jpg",
      height: "h-[300px]",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231888/p16_pscidc_t18bdk.png",
      height: "h-[300px]",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763233202/Furniture_lmhbq3_j4u6fs.png",
      height: "h-[300px]",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232536/p11_eegblo_znlhyt.png",
      height: "h-[300px]",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      height: "h-[300px]",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411923/7_ypfu6o.jpg",
      height: "h-[300px]",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411851/1_hmntm4.jpg",
      height: "h-[300px]",
    },
  ];

  return (
    <section className="bg-[#e8ddd4] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-4xl lg:text-6xl tracking-[6px] font-serif text-gray-800 mb-14">
          PORTFOLIO
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* Reusable Card Component */
function PortfolioCard({ item }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-md ${item.height} group cursor-pointer`}
    >
      <img
        src={item.src}
        alt="portfolio"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
        <span className="text-white text-lg tracking-wider">
          View Project
        </span>
      </div>
    </div>
  );
}
