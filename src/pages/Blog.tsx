import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "How Digital Planners Improve Productivity",
    excerpt: "An in-depth guide on the benefits of digital planning, comparing it to traditional methods, and highlighting how MindFlow Planner enhances efficiency.",
    category: "Productivity",
    author: "Sarah Jenkins",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Best Planners for iPad Users: A Comprehensive Guide",
    excerpt: "Reviewing top digital planning apps and showcasing MindFlow Planner's compatibility and unique customization features for iPad users.",
    category: "Guides",
    author: "Michael Chen",
    date: "Oct 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Goal Planning System for Entrepreneurs: Achieve Your Vision with MindFlow",
    excerpt: "A strategic guide for entrepreneurs on setting, tracking, and achieving business goals using the customizable features of MindFlow Planner.",
    category: "Business",
    author: "Elena Rodriguez",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Master Your Habits: The Ultimate Guide to Digital Habit Tracking",
    excerpt: "Tips and tutorials on effective habit tracking using MindFlow Planner's integrated habit trackers.",
    category: "Lifestyle",
    author: "Sarah Jenkins",
    date: "Sep 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "From Chaos to Clarity: Organizing Your Digital Life with MindFlow",
    excerpt: "Practical advice and strategies for digital organization, demonstrating how MindFlow Planner helps users manage tasks and reduce clutter.",
    category: "Organization",
    author: "David Kim",
    date: "Sep 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Unlocking Creativity: Aesthetic Digital Planner Layouts for Every Style",
    excerpt: "Showcasing various aesthetic planner designs and how users can create their own unique layouts with MindFlow Planner.",
    category: "Design",
    author: "Elena Rodriguez",
    date: "Sep 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="bg-bg-light min-h-screen py-24">
      {/* Header Section */}
      <div className="bg-white py-16 border-b border-gray-100 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
          >
            MindFlow <span className="text-primary">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-medium max-w-2xl mx-auto"
          >
            Insights, guides, and inspiration to help you master digital planning, boost productivity, and organize your life.
          </motion.p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <Link to={`/blog/${post.id}`} className="block relative overflow-hidden aspect-[16/10]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-text-medium mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block group-hover:text-primary transition-colors">
                  <h2 className="text-xl font-bold text-text-dark mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-text-medium text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-text-dark">{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-primary hover:text-blue-700 transition-colors p-2 bg-blue-50 rounded-full group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
