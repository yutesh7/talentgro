import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: 'Senior Program Manager', location: 'New Delhi (Hybrid)', type: 'Full-time' },
    { title: 'Career Counselor', location: 'Pune', type: 'Full-time' },
    { title: 'Graphic Designer', location: 'Remote', type: 'Contract' },
    { title: 'Social Media Manager', location: 'Remote', type: 'Part-time' },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Careers at Disha</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Join our core team and help us build the infrastructure of tomorrow's education.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-zinc-800 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-6">Why work with us?</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-orange"></div> <span>Competitive NGO sector salary</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-orange"></div> <span>Flexible and Remote work options</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-orange"></div> <span>Comprehensive Health Insurance</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-orange"></div> <span>Immense job satisfaction and real impact</span></li>
              </ul>
            </div>
            <div className="bg-brand-light dark:bg-zinc-900/50 rounded-2xl p-8 text-center border border-brand-orange/20">
              <Briefcase size={48} className="text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-2">Can't find a fit?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Send your resume to hr@dishaforindia.org and we'll keep you in our talent pool.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Open Positions</h3>
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-center group">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-bold text-brand-blue dark:text-white group-hover:text-brand-orange transition-colors">{job.title}</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
                  <span className="flex items-center gap-1"><MapPin size={16}/> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={16}/> {job.type}</span>
                </div>
              </div>
              <button className="btn-outline px-6 py-2">Apply <ArrowRight size={16}/></button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Careers;


