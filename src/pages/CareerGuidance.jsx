import { motion } from 'framer-motion';
import { Cpu, HeartPulse, LineChart, Palette, ArrowRight } from 'lucide-react';

const CareerGuidance = () => {
  const pathways = [
    { title: 'Engineering & Tech', icon: Cpu, color: 'bg-blue-100 text-blue-600' },
    { title: 'Medical & Healthcare', icon: HeartPulse, color: 'bg-red-100 text-red-600' },
    { title: 'Commerce & Finance', icon: LineChart, color: 'bg-green-100 text-green-600' },
    { title: 'Arts & Humanities', icon: Palette, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="w-full bg-stone-100 dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Career Guidance Hub</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Confused about what to do after 10th or 12th? Explore our comprehensive career roadmaps, skill recommendations, and future trends.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Explore Career Pathways</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((path, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-black rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 cursor-pointer hover:border-brand-orange hover:shadow-md transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${path.color}`}>
                  <path.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-2 group-hover:text-brand-orange transition-colors">{path.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-4 font-medium">
                  View Roadmap <ArrowRight size={16} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-brand-light dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-brand-orange/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-6">Preparation Resources</h2>
              <ul className="space-y-4">
                {[
                  'Resume Building Templates',
                  'Mock Interview Video Guides',
                  'Top 10 Future Skills for 2030',
                  'Aptitude Test Prep Materials'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-stone-100 dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold">{i+1}</div>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-100 dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800 text-center">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Need 1-on-1 Counseling?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">Book a free session with our expert career counselors to find your true calling.</p>
              <button className="btn-primary w-full">Book Free Session</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerGuidance;


