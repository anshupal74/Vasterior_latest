"use client";
import { useRouter } from "next/navigation";

// ❌ Purana galat path:
// import { blogPosts, tagColors } from "@/data/blogdata";

// ✅ Naya sahi path (relative path use karo):
import { blogPosts, tagColors } from "./data/blogdata";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5ede3] font-serif">

      {/* HEADER */}
      <header className="text-center pt-16 pb-10 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-stone-800 tracking-widest uppercase mb-8">
          OUR BLOG
        </h1>
        <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans text-center">
          Welcome to the Vasterior Blog, where we share ideas, insights, and inspiration from the
          world of design. From interior trends and styling tips to Vastu guidance, smart living
          solutions, and behind-the-scenes glimpses of our projects, our blog is designed to help
          you discover fresh perspectives and practical advice for creating spaces that truly reflect
          your lifestyle. Stay tuned for expert tips, creative inspirations, and updates from the
          world of architecture, interiors, and beyond.
        </p>
      </header>

      {/* BLOG GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => router.push(`/blogs/${post.id}`)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-sans font-semibold px-3 py-1.5 rounded-full shadow">
                  {post.date}
                </span>

                <span className={`absolute bottom-3 right-3 text-xs font-sans font-bold px-3 py-1 rounded-full ${tagColors[post.tag]}`}>
                  {post.tag}
                </span>

                <span className="absolute bottom-3 left-3 text-white/60 text-xs font-sans tracking-widest">
                  Vasterior
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-stone-800 font-bold text-[1.05rem] leading-snug mb-3 group-hover:text-amber-700 transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-px bg-amber-400" />
                  <p className="text-stone-400 text-xs font-sans">{post.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.5 15.5 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  );
}