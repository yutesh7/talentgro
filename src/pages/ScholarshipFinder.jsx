import { useState } from 'react';
import { Search, Filter, Bookmark, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const ScholarshipFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const scholarships = [
    { id: 1, title: 'National Means Cum Merit Scholarship', state: 'All India', class: 'Class 8', income: '< 3.5 Lakhs', deadline: '2026-08-30', type: 'Merit-Based' },
    { id: 2, title: 'Post Matric Scholarship for Minorities', state: 'All India', class: 'Class 11-12', income: '< 2 Lakhs', deadline: '2026-09-15', type: 'Need-Based' },
    { id: 3, title: 'Vidyadhan Scholarship', state: 'Maharashtra', class: 'Class 10 Passed', income: '< 2 Lakhs', deadline: '2026-07-20', type: 'Merit & Need' },
    { id: 4, title: 'Tata Trusts Medical Scholarship', state: 'All India', class: 'Undergraduate', income: 'Any', deadline: '2026-10-01', type: 'Merit-Based' },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Scholarship Finder</h1>
          <p className="text-slate-600 dark:text-slate-300">Discover and track scholarships you are eligible for. Don't let funds stop your education.</p>
        </div>

        {/* Search & Filters */}
        <div className="bg-stone-100 dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-zinc-800 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search scholarships by name..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <select className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-200 min-w-[120px]">
                <option>All States</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
              <select className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-200 min-w-[120px]">
                <option>Any Class</option>
                <option>Class 10</option>
                <option>Class 12</option>
              </select>
              <select className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-200 min-w-[150px]">
                <option>Any Income</option>
                <option>&lt; 2 Lakhs</option>
                <option>&lt; 5 Lakhs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((s) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-stone-100 dark:bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 dark:border-zinc-800 relative group transition-shadow"
            >
              <button className="absolute top-6 right-6 text-slate-300 hover:text-brand-orange transition-colors">
                <Bookmark size={24} />
              </button>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-light dark:bg-zinc-900/50 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {s.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-4 pr-8 line-clamp-2">{s.title}</h3>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <GraduationCap size={16} /> <span>{s.class}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">₹</span> <span>Income: {s.income}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Clock size={16} className="text-red-500" /> <span className="text-red-500 font-medium">Deadline: {s.deadline}</span>
                </div>
              </div>
              
              <button className="w-full py-3 rounded-xl border-2 border-brand-blue text-brand-blue dark:text-white font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScholarshipFinder;


