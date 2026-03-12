export default function About() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Our Story</h1>
          <p className="text-xl text-text-medium leading-relaxed">
            We believe that productivity isn't about doing more; it's about doing what matters.
          </p>
        </div>

        <div className="prose prose-lg prose-blue mx-auto text-text-medium">
          <p className="mb-6">
            MindFlow Planner started from a simple frustration: every physical and digital planner on the market forced us into a specific way of thinking. Some had too many habit trackers, others had none. Some focused entirely on hourly scheduling, while we needed flexible task lists.
          </p>
          <p className="mb-6">
            We realized that a planner should adapt to the user, not the other way around. 
          </p>
          
          <div className="my-12 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img 
              src="https://picsum.photos/seed/aboutImage/800/500" 
              alt="Team working on digital planners" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-2xl font-bold text-text-dark mt-12 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to empower individuals to design their perfect digital planner, tailored to their unique goals, habits, and productivity style, fostering clarity, focus, and work-life balance.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-12 mb-4">The MindFlow Philosophy</h2>
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span><strong>Clarity over clutter:</strong> A minimal aesthetic reduces cognitive load and keeps you focused on your tasks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span><strong>Flexibility is key:</strong> Life changes, and your planning system should be able to change with it.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span><strong>Sustainability:</strong> Digital planning means no wasted paper, no shipping emissions, and a lighter footprint.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
