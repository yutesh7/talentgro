import { motion } from 'framer-motion';
import { PlayCircle, Quote, Star, GraduationCap, Briefcase, Award } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Riya Sharma',
      from: 'Rural Maharashtra',
      achievement: 'MBBS at AIIMS New Delhi',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
      quote: "Disha for India didn't just give me a scholarship; they gave me the confidence to dream beyond my village. The mentorship I received was life-changing.",
      tags: ['Udaan Scholarship', 'Medical']
    },
    {
      name: 'Amit Patel',
      from: 'Ahmedabad, Gujarat',
      achievement: 'Senior Software Engineer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Briefcase,
      quote: "The career guidance workshop introduced me to the tech world. With their continuous support and skill-building bootcamps, I cracked a top MNC.",
      tags: ['Career Guidance', 'Tech']
    },
    {
      name: 'Priya & Neha Singh',
      from: 'Govt School, Delhi',
      achievement: 'First-Gen Graduates',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Award,
      quote: "Our volunteer mentor held our hands through the complex college admission process. We are proud to be the first in our family to attend university.",
      tags: ['Mentorship', 'Higher Ed']
    },
    {
      name: 'Vikram Reddy',
      from: 'Hyderabad',
      achievement: 'UPSC Civil Services Ranker',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Award,
      quote: "The free study materials and mock interviews arranged by Disha were instrumental in my success. I now serve the nation with pride.",
      tags: ['Civil Services', 'Guidance']
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">Our Impact</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white mb-6">
              Stories That <span className="text-brand-orange">Inspire</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Behind every number is a life transformed. Discover how our students are breaking barriers and achieving their dreams.
            </p>
          </motion.div>
        </div>

        {/* Featured Video Story */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[21/9] md:aspect-[21/7] relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 flex flex-col justify-center p-8 md:p-16 w-full md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full font-semibold text-sm mb-6 w-max border border-brand-orange/30">
                <Star size={16} className="fill-brand-orange" /> Featured Journey
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                From Village Fields to Quantum Physics
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Watch Rahul's incredible journey from a small farming village to becoming a leading researcher at a premier national institute.
              </p>
              <button className="flex items-center gap-3 bg-white text-brand-blue px-6 py-3 rounded-full font-bold hover:bg-brand-orange hover:text-white transition-all w-max shadow-lg group-hover:scale-105">
                <PlayCircle size={24} /> Watch Documentary
              </button>
            </div>
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-1000"></div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-md border border-slate-100 dark:border-zinc-800 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-colors duration-500"></div>

              <Quote size={48} className="text-slate-100 dark:text-zinc-800 absolute top-6 right-6 z-0" />
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {story.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl italic mb-8 relative z-10 flex-grow font-medium leading-relaxed">
                "{story.quote}"
              </p>
              
              <div className="flex items-center gap-5 border-t border-slate-100 dark:border-zinc-800 pt-6 mt-auto relative z-10">
                <div>
                  <h4 className="font-bold text-lg text-brand-blue dark:text-white flex items-center gap-2">
                    {story.name}
                  </h4>
                  <p className="text-sm text-brand-orange font-semibold flex items-center gap-1 mt-1">
                    <story.icon size={14} /> {story.achievement}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{story.from}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SuccessStories;


