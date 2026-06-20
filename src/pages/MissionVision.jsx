import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/2"
          >
            <div className="bg-brand-blue rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10"></div>
              <Target size={64} className="text-brand-orange mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To democratize access to quality educational resources, career guidance, and financial support systems for youth across India, empowering them to become skilled, confident, and responsible citizens.
              </p>
            </div>
          </motion.div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-brand-blue dark:text-white">How we achieve this:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0 mt-1">1</div>
                <p className="text-slate-600 dark:text-slate-300">Building comprehensive databases for scholarships and resources.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0 mt-1">2</div>
                <p className="text-slate-600 dark:text-slate-300">Conducting massive career guidance workshops in underserved areas.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0 mt-1">3</div>
                <p className="text-slate-600 dark:text-slate-300">Fostering a network of dedicated professional volunteers.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/2"
          >
            <div className="bg-brand-orange rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -mb-10 -ml-10"></div>
              <Eye size={64} className="text-brand-blue dark:text-white mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue dark:text-white">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                An India where every student, regardless of their socioeconomic background, has the precise direction, support, and opportunity to pursue their dreams and contribute meaningfully to society.
              </p>
            </div>
          </motion.div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-brand-blue dark:text-white">The Future We See:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0 mt-2"></div>
                <p className="text-slate-600 dark:text-slate-300">Zero dropouts due to lack of financial awareness.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0 mt-2"></div>
                <p className="text-slate-600 dark:text-slate-300">Students making informed, passion-driven career choices.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0 mt-2"></div>
                <p className="text-slate-600 dark:text-slate-300">A self-sustaining cycle where today's beneficiaries become tomorrow's volunteers.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;


