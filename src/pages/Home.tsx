import { Link } from 'react-router-dom';
import { Settings, Calendar, LayoutTemplate, Star, ArrowRight, CheckCircle2, ShoppingBag, Clock, User } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts } from './Blog';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm font-medium text-text-dark mb-6 shadow-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>Over 10,000+ happy planners</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-dark mb-6 leading-tight">
                Design Your Perfect <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Planner</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A personalized planner built around your goals, habits, and productivity style. Foster clarity, focus, and work-life balance with a system made just for you.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/customize" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Create Your Planner <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-white text-text-dark border border-gray-200 rounded-2xl font-semibold hover:bg-gray-50 transition-all hover:-translate-y-1 text-center shadow-sm">
                  Explore Shop
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full max-w-xl lg:max-w-none relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop" 
                  alt="MindFlow Digital Planner Interface on Tablet" 
                  className="w-full h-auto object-cover rounded-[1.5rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-dark">GoodNotes</p>
                  <p className="text-xs text-text-medium">100% Compatible</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">Trending Planners</h2>
              <p className="text-lg text-text-medium">Discover our most popular pre-configured layouts, ready to download and use immediately.</p>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 font-bold text-primary hover:text-blue-700 transition-colors group">
              View All Products <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                id: 1,
                name: "The Minimalist Focus Planner",
                desc: "Clean, distraction-free layout for deep work and essential tasks.",
                price: 24.99,
                img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
                badge: "Best Seller"
              },
              {
                id: 2,
                name: "Aesthetic Life Organizer",
                desc: "Beautifully crafted pages for journaling, habits, and daily planning.",
                price: 29.99,
                img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
                badge: "New Arrival"
              },
              {
                id: 3,
                name: "Ultimate Productivity Matrix",
                desc: "Advanced frameworks for goal setting, time blocking, and reviews.",
                price: 34.99,
                img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
                badge: "Pro Choice"
              }
            ].map((product) => (
              <motion.div 
                key={product.id}
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-text-dark shadow-sm">
                    {product.badge}
                  </div>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link to="/customize" className="px-6 py-3 bg-white text-text-dark rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{product.name}</h3>
                  <p className="text-text-medium mb-6 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-bold text-text-dark">${product.price}</p>
                    <Link 
                      to="/cart"
                      className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors shadow-sm"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-bg-light relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">Why Choose MindFlow?</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">Everything you need to organize your life, exactly the way you want it. No fluff, just focus.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Settings className="h-6 w-6 text-primary" />, title: "Fully Customizable", desc: "Choose your layout, colors, and specific pages to match your workflow." },
              { icon: <LayoutTemplate className="h-6 w-6 text-accent" />, title: "Beautiful Aesthetics", desc: "Minimal, clean designs that reduce clutter and enhance focus." },
              { icon: <Calendar className="h-6 w-6 text-emerald-500" />, title: "Flexible Durations", desc: "Select 3, 6, or 12-month planners to suit your planning horizon." },
              { icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />, title: "Goal & Habit Tracking", desc: "Built-in templates to help you build good habits and achieve your goals." },
              { icon: <Star className="h-6 w-6 text-yellow-500" />, title: "GoodNotes Compatible", desc: "Optimized for popular note-taking apps on iPad and Android tablets." },
              { icon: <ArrowRight className="h-6 w-6 text-purple-500" />, title: "Instant Download", desc: "Get your personalized PDF instantly after checkout and start planning." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
              >
                <div className="h-14 w-14 bg-bg-light rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">Create Your Planner in 3 Steps</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">A simple process to get a planner that actually works for you.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-accent/20 -z-10 transform -translate-y-1/2 rounded-full"></div>
            
            {[
              { step: "01", title: "Choose Your Style", desc: "Select from minimal, aesthetic, or productivity-focused base layouts." },
              { step: "02", title: "Customize Pages", desc: "Add habit trackers, goal setting, and reflection pages that you actually need." },
              { step: "03", title: "Download & Use", desc: "Get your PDF instantly and import it into GoodNotes, Notability, or print it." },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex-1 bg-bg-light p-10 rounded-3xl shadow-sm border border-gray-100 relative text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-8 shadow-lg shadow-primary/30 transform -rotate-3">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">{item.title}</h3>
                <p className="text-text-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">Loved by Thousands</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">See what our community is saying about MindFlow.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Sarah J.", role: "Student", quote: "Finally, a planner where I don't waste half the pages! Being able to choose exactly what trackers I need is a game-changer.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
              { name: "Michael T.", role: "Entrepreneur", quote: "The productivity-focused layout has completely transformed how I manage my week. Clean, minimal, and highly effective.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
              { name: "Elena R.", role: "Freelance Designer", quote: "Beautifully designed. It looks gorgeous on my iPad and the hyperlinks work flawlessly. Highly recommend!", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
            ].map((review, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-text-dark italic mb-8 text-lg leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-text-dark">{review.name}</h4>
                    <p className="text-sm text-text-medium">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">Latest from the Blog</h2>
              <p className="text-lg text-text-medium max-w-2xl">Tips, guides, and inspiration for your digital planning journey.</p>
            </div>
            <Link to="/blog" className="flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors group">
              View All Posts <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.article 
                key={post.id}
                variants={fadeInUp}
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
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-purple-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full blur-sm"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 border-[30px] border-white rounded-full blur-sm"></div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Weekly Planner</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Join 10,000+ users who are organizing their lives and achieving their goals.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-2xl text-text-dark focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
              required
            />
            <button type="submit" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors whitespace-nowrap shadow-lg shadow-primary/50 hover:-translate-y-1">
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
