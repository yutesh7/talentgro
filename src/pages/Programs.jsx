import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, Briefcase, Calculator, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Project Udaan',
      desc: 'Our flagship scholarship awareness program. We help rural students identify and apply for over 500 state and national scholarships.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'MedAssist',
      desc: 'Guiding aspiring medical students through the NEET preparation process, providing free study materials and mentoring by current medical professionals.',
      icon: Stethoscope,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Commerce & CA Prep',
      desc: 'Expert-led sessions for commerce students aiming for CA/CS or banking exams, complete with mock tests and career mapping.',
      icon: Calculator,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Skill Development Hub',
      desc: 'Vocational training and soft-skills workshops for college students to make them industry-ready and highly employable.',
      icon: Briefcase,
      color: 'bg-purple-100 text-purple-600',
    }
  ];

  return (
    <div className="w-full py-20 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">Our Programs & Initiatives</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive programs designed to tackle every hurdle a student might face—from lack of funds to lack of direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-stone-100 dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${prog.color}`}>
                <prog.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-3">{prog.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{prog.desc}</p>
                <Link to="/contact" className="text-brand-orange font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Get Involved <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;


