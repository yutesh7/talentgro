import { motion } from 'framer-motion';
import { HeartHandshake, UserPlus, FileBadge, Award } from 'lucide-react';

const VolunteerHub = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Volunteer Hub</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Time is money, but giving time creates impact. Join our network of passionate changemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Volunteer Registration Form */}
          <div className="lg:col-span-2 bg-stone-100 dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-6">Become a Volunteer</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Area of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange bg-stone-100 dark:bg-zinc-900">
                    <option>Select Role</option>
                    <option>Teacher</option>
                    <option>Doctor</option>
                    <option>Counselor</option>
                    <option>Photographer</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Hours per Month</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange bg-stone-100 dark:bg-zinc-900">
                    <option>2 Hours</option>
                    <option>5 Hours</option>
                    <option>10+ Hours</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary w-full md:w-auto">Submit Application</button>
            </form>
          </div>

          {/* Volunteer Dashboard Preview */}
          <div className="bg-brand-blue rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-8">
              <UserPlus size={28} className="text-brand-orange" />
              <h2 className="text-2xl font-bold">Your Impact Dashboard</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={20} className="text-brand-orange" />
                  <span className="font-semibold">Current Level: Silver</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-brand-orange h-2 rounded-full w-[60%]"></div>
                </div>
                <p className="text-sm text-slate-300">12 hours until Gold Tier</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Total Hours</h4>
                  <p className="text-2xl font-bold text-brand-orange">48 hrs</p>
                </div>
                <HeartHandshake size={32} className="text-white/50" />
              </div>

              <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 transition-colors flex items-center justify-center gap-2 font-semibold">
                <FileBadge size={20} /> Download Certificate
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VolunteerHub;


