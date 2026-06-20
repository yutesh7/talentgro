import { motion } from 'framer-motion';
import { Users, Award, Map, TrendingUp } from 'lucide-react';

const ImpactDashboard = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Our Impact Dashboard</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Transparency is our priority. See exactly how we are moving the needle in Indian education.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Students Helped', value: '52,431', icon: Users, color: 'bg-blue-100 text-blue-600' },
            { label: 'Scholarships Secured', value: '₹4.2 Cr', icon: Award, color: 'bg-orange-100 text-orange-600' },
            { label: 'Active Volunteers', value: '3,105', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
            { label: 'States Reached', value: '14', icon: Map, color: 'bg-purple-100 text-purple-600' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-zinc-800 text-center">
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder & India Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-6">Yearly Growth</h3>
            <div className="aspect-video bg-slate-50 dark:bg-black rounded-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden">
              {/* Mock Bar Chart using HTML/CSS */}
              <div className="flex items-end gap-4 h-48 w-full px-8">
                <div className="w-full bg-brand-orange/40 h-[30%] rounded-t-md relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">2023</span></div>
                <div className="w-full bg-brand-orange/60 h-[50%] rounded-t-md relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">2024</span></div>
                <div className="w-full bg-brand-orange/80 h-[75%] rounded-t-md relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">2025</span></div>
                <div className="w-full bg-brand-orange h-[100%] rounded-t-md relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">2026</span></div>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue rounded-3xl p-8 shadow-sm text-white">
            <h3 className="text-xl font-bold mb-6">Interactive India Map</h3>
            <div className="aspect-video bg-white/10 rounded-xl border border-white/20 flex flex-col items-center justify-center text-center p-6">
              <Map size={64} className="text-brand-orange mb-4 opacity-50" />
              <p className="text-lg font-semibold">Map Visualization Placeholder</p>
              <p className="text-sm text-slate-300 mt-2">Hovering over states reveals specific impact metrics, total volunteers, and active projects in that region.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImpactDashboard;


