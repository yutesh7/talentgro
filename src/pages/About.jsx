import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-brand-light dark:bg-zinc-900/50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">About Disha for India</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A non-profit educational trust dedicated to empowering the next generation through guidance, resources, and community support.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl bg-slate-200 dark:bg-zinc-800 overflow-hidden relative">
                <img 
                  src="/images/uploaded-banner.jpg" 
                  alt="Disha for India Foundation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg">
                <p>
                  Disha for India Foundation and Educational Trust was founded with a singular belief: <strong>Everyone has the power to create an impact.</strong>
                </p>
                <p>
                  We recognized that millions of talented students across India lacked access to proper career guidance, awareness about scholarships, and the mentorship required to excel in the modern world.
                </p>
                <p>
                  Today, we operate as a bridge between opportunities and the youth, mobilizing volunteers—teachers, doctors, counselors, and professionals—to guide students towards their true potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-slate-600 dark:text-slate-300">The principles that guide our every initiative.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Empowerment', desc: 'Providing tools rather than just answers.', icon: Lightbulb },
              { title: 'Integrity', desc: 'Transparent operations and sincere guidance.', icon: Shield },
              { title: 'Inclusivity', desc: 'Reaching students regardless of background.', icon: Heart },
              { title: 'Impact', desc: 'Focusing on measurable, long-term change.', icon: Target },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto bg-brand-light dark:bg-zinc-900/50 rounded-full flex items-center justify-center text-brand-orange mb-6">
                  <val.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3">{val.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


