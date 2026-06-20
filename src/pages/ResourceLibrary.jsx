import { Search, FileText, Download, Folder } from 'lucide-react';

const ResourceLibrary = () => {
  const resources = [
    { title: 'Ultimate Guide to State Scholarships', type: 'PDF', size: '2.4 MB', category: 'Scholarships' },
    { title: 'Engineering Entrance Exams Syllabus 2026', type: 'PDF', size: '1.8 MB', category: 'Career Prep' },
    { title: 'Class 10 Science Revision Notes', type: 'Notes', size: '5.1 MB', category: 'Academics' },
    { title: 'Top 50 Interview Questions for Freshers', type: 'Doc', size: '0.5 MB', category: 'Career Prep' },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-4">Resource Library</h1>
          <p className="text-slate-600 dark:text-slate-300">Download free study materials, scholarship guides, and career roadmaps.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Search for notes, guides, or PDFs..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-md focus:outline-none focus:ring-2 focus:ring-brand-orange text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-brand-blue dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {['All Resources', 'Scholarships', 'Career Prep', 'Academics', 'Skill Development'].map((cat, i) => (
                <li key={i}>
                  <button className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${i === 0 ? 'bg-brand-orange text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-brand-light dark:bg-zinc-900/50 hover:text-brand-orange'}`}>
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* List */}
          <div className="md:col-span-3 space-y-4">
            {resources.map((res, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue dark:text-white rounded-xl flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{res.title}</h4>
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1">
                      <span className="bg-slate-100 dark:bg-zinc-800/50 px-2 py-0.5 rounded text-xs font-semibold">{res.category}</span>
                      <span>{res.type} • {res.size}</span>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 bg-brand-light dark:bg-zinc-900/50 text-brand-orange hover:bg-brand-orange hover:text-white rounded-full flex items-center justify-center transition-colors shrink-0">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourceLibrary;


