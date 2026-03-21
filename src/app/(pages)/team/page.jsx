export default function TeamPage() {
  return (
    <section className="bg-[#e9dccb] min-h-screen py-6 px-6 md:px-16">

      {/* ====== OUR TEAM HEADING ====== */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-bold tracking-[0.3em] text-gray-800">
          Our Team
        </h1>
      </div>

      {/* ====== TEAM IMAGE ====== */}
      <div className="mx-auto mb-10">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231884/vasteriorteam_epwmdm_e13txw.jpg"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-gray-500/40 to-transparent"></div>
        </div>
      </div>

      {/* ====== DESCRIPTION ====== */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <p className="text-lg md:text-xl text-[#2f3e4e] leading-relaxed">
          The Vasterior team is a thoughtful blend of designers and planners who
          approach every space with intention and clarity.
        </p>
      </div>

      {/* ====== TEAM MEMBER CARDS ====== */}
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Himanshu */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-50 h-40 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231886/naseer_olujvn_evpx8i.jpg"
              alt="Himanshu"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-3">
              Himanshu
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
              Production & Operations
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Oversees workflow ensuring smooth coordination between production
              and execution while maintaining quality standards.
            </p>
          </div>
        </div>

        {/* Naseer */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
          <div className="w-50 h-60 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231885/himanshu_tedpnl_jqjlya.jpg"
              alt="Naseer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left md:text-right">
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-3">
              Naseer
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
              Site Management & Execution
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Leads on-ground execution ensuring every design vision
              is translated into reality.
            </p>
          </div>
        </div>

        {/* Raunak */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-50 h-60 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231887/Jigar_abnrqa_g8aia6.jpg"
              alt="Raunak"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-3">
              Raunak Shukla
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
              Co-Founder & Strategic Planning
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Drives the strategic direction while aligning design philosophy
              with operational excellence.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
