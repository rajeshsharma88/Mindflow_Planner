import { Link } from 'react-router-dom';
import { Settings, Calendar, LayoutTemplate, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-bg-light pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark mb-6">
                Design Your Perfect <br className="hidden lg:block" />
                <span className="text-primary">Digital Planner</span>
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl mx-auto lg:mx-0">
                A personalized planner built around your goals, habits, and productivity style. Foster clarity, focus, and work-life balance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/customize" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  Create Your Planner <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-white text-text-dark border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors text-center">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <img 
                  src="https://picsum.photos/seed/planner/800/600" 
                  alt="MindFlow Digital Planner Interface on Tablet" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Why Choose MindFlow?</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">Everything you need to organize your life, exactly the way you want it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Settings className="h-6 w-6 text-primary" />, title: "Fully Customizable", desc: "Choose your layout, colors, and specific pages to match your workflow." },
              { icon: <LayoutTemplate className="h-6 w-6 text-primary" />, title: "Beautiful Aesthetics", desc: "Minimal, clean designs that reduce clutter and enhance focus." },
              { icon: <Calendar className="h-6 w-6 text-primary" />, title: "Flexible Durations", desc: "Select 3, 6, or 12-month planners to suit your planning horizon." },
              { icon: <CheckCircle2 className="h-6 w-6 text-primary" />, title: "Goal & Habit Tracking", desc: "Built-in templates to help you build good habits and achieve your goals." },
              { icon: <Star className="h-6 w-6 text-primary" />, title: "GoodNotes Compatible", desc: "Optimized for popular note-taking apps on iPad and Android tablets." },
              { icon: <ArrowRight className="h-6 w-6 text-primary" />, title: "Instant Download", desc: "Get your personalized PDF instantly after checkout and start planning." },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-bg-light border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Create Your Planner in 3 Steps</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">A simple process to get a planner that actually works for you.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { step: "01", title: "Choose Your Style", desc: "Select from minimal, aesthetic, or productivity-focused base layouts." },
              { step: "02", title: "Customize Pages", desc: "Add habit trackers, goal setting, and reflection pages that you actually need." },
              { step: "03", title: "Download & Use", desc: "Get your PDF instantly and import it into GoodNotes, Notability, or print it." },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">{item.title}</h3>
                <p className="text-text-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Loved by Thousands</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">See what our community is saying about MindFlow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Student", quote: "Finally, a planner where I don't waste half the pages! Being able to choose exactly what trackers I need is a game-changer.", img: "https://picsum.photos/seed/avatar1/100/100" },
              { name: "Michael T.", role: "Entrepreneur", quote: "The productivity-focused layout has completely transformed how I manage my week. Clean, minimal, and highly effective.", img: "https://picsum.photos/seed/avatar2/100/100" },
              { name: "Elena R.", role: "Freelance Designer", quote: "Beautifully designed. It looks gorgeous on my iPad and the hyperlinks work flawlessly. Highly recommend!", img: "https://picsum.photos/seed/avatar3/100/100" },
            ].map((review, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-bg-light border border-gray-100">
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-text-dark italic mb-8">"{review.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-semibold text-text-dark">{review.name}</h4>
                    <p className="text-sm text-text-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Weekly Productivity Planner</h2>
          <p className="text-lg text-purple-100 mb-10 max-w-2xl mx-auto">Join 10,000+ users who are organizing their lives and achieving their goals.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-blue-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
