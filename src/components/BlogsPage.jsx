'use client';

import { useState } from 'react';

const BlogsPage = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts = [
    {
      id: 1,
      date: 'Feb 08, 2026',
      title: "Money Comes In, Why Doesn't It Stay?",
      subtitle: 'Vastu for Financial Stability',
      image:
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      description:
        'Discover how Vastu principles can help you maintain wealth and create lasting financial prosperity in your home and workspace.',
    },
    {
      id: 2,
      date: 'Feb 08, 2026',
      title: 'Where the Body Learns to Rest',
      subtitle: 'Sleep, Stress, Immunity: Vastu for Health That Speaks to Peace',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      description:
        'Explore the connection between Vastu-aligned spaces and better sleep quality and reduced stress.',
    },
    {
      id: 3,
      date: 'Feb 05, 2026',
      title: 'Why Arguments Repeat',
      subtitle: 'Vastu for Relationships',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
      description:
        'Learn how spatial harmony through Vastu can transform recurring conflicts.',
    },
    {
      id: 4,
      date: 'Feb 04, 2026',
      title: 'The Corner That Holds Your Dreams',
      subtitle: 'Career Growth Through Vastu',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description:
        'Align your workspace with Vastu principles to unlock professional growth.',
    },
    {
      id: 5,
      date: 'Feb 03, 2026',
      title: 'When Walls Speak of Wellness',
      subtitle: 'Holistic Health and Harmony',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      description:
        'Understand how energy flow affects physical and mental well-being.',
    },
    {
      id: 6,
      date: 'Feb 02, 2026',
      title: 'Light That Lifts the Spirit',
      subtitle: 'Natural Illumination',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description:
        'Discover the transformative power of natural light placement.',
    },
    {
      id: 7,
      date: 'Feb 01, 2026',
      title: 'Energy Flow in Every Direction',
      subtitle: 'Balancing the Five Elements',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
      description:
        'Earth, water, fire, air, and space influence your living harmony.',
    },
    {
      id: 8,
      date: 'Jan 30, 2026',
      title: 'Sacred Spaces at Home',
      subtitle: 'Designing a Prayer Room',
      image:
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
      description:
        'Create a spiritually uplifting meditation space aligned with Vastu.',
    },
    {
      id: 9,
      date: 'Jan 28, 2026',
      title: 'Kitchen of Abundance',
      subtitle: 'Fire Element and Prosperity',
      image:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      description:
        'Proper kitchen placement enhances nourishment and prosperity.',
    },
    {
      id: 10,
      date: 'Jan 25, 2026',
      title: 'Entrance That Invites Opportunity',
      subtitle: 'Main Door Vastu Secrets',
      image:
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80',
      description:
        'Your main door sets the tone of energy entering your home.',
    },
    {
      id: 11,
      date: 'Jan 22, 2026',
      title: 'Bedroom of Emotional Balance',
      subtitle: 'Rest, Romance & Rejuvenation',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      description:
        'Transform your bedroom into a sanctuary of emotional harmony.',
    },
    {
      id: 12,
      date: 'Jan 20, 2026',
      title: 'Work From Home the Right Way',
      subtitle: 'Productivity Through Placement',
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80',
      description:
        'Set up your home office for maximum clarity and productivity.',
    },
  ];

  const visibleBlogs = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#ffe8d6]">
      
      <div className="pt-6 pb-12 text-center">
        <h1 className="text-5xl font-serif tracking-widest text-gray-800">
          BLOGS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-4 bg-amber-200 hover:bg-amber-300 text-gray-800 rounded-full shadow-md transition duration-300"
          >
            {showAll ? 'Show Less ↑' : 'More Blogs →'}
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer">
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
          <p className="text-sm font-medium text-gray-700">{post.date}</p>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h2 className="text-2xl font-serif text-white leading-tight">
            {post.title}
          </h2>

          <p className="text-amber-200 text-sm font-light italic">
            {post.subtitle}
          </p>

          <p
            className={`text-white/90 text-sm mt-2 ${
              isExpanded ? '' : 'line-clamp-2'
            }`}
          >
            {post.description}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-2 text-amber-300 text-sm font-medium hover:text-amber-200 transition"
          >
            {isExpanded ? 'Read Less ↑' : 'Read More →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
