import { useState } from 'react';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState(1000);
  
  const calculateImpact = (amt) => {
    if (amt < 1000) return 'Provides stationary and basic study materials for 1 student.';
    if (amt < 5000) return 'Sponsors digital learning resources for 3 students for a month.';
    if (amt < 10000) return 'Funds an entire career guidance workshop for 50 rural students.';
    return 'Provides a full one-year scholarship for a meritorious student.';
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Heart size={16} fill="currentColor" /> Support Our Cause
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white mb-6">Invest in a Child's Future Today.</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Your contribution goes directly towards scholarships, organizing counseling drives, and providing digital infrastructure to schools that need it most.
            </p>
            
            <div className="bg-slate-50 dark:bg-black rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 mb-8">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2"><ShieldCheck className="text-green-500" /> 100% Transparency Guarantee</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">All donations are tax-deductible under 80G. We publish a quarterly financial report detailing exact fund utilization.</p>
            </div>
          </div>

          {/* Right side form */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-zinc-800 relative">
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-8 text-center">Make a Secure Donation</h2>
            
            {/* Amount Selector */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[500, 1000, 5000].map(val => (
                <button 
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`py-3 rounded-xl font-bold transition-all border-2 ${amount === val ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-slate-300 hover:border-brand-orange/50'}`}
                >
                  ₹{val}
                </button>
              ))}
            </div>

            <div className="relative mb-8">
              <span className="absolute left-4 top-4 font-bold text-slate-500 dark:text-slate-400 text-lg">₹</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange text-lg font-bold text-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Impact Calculator Result */}
            <div className="bg-brand-light dark:bg-zinc-900/50 rounded-xl p-4 mb-8 border border-brand-orange/20">
              <p className="text-sm text-brand-orange font-bold uppercase tracking-wide mb-1">Your Impact</p>
              <p className="text-slate-700 dark:text-slate-200 font-medium">{calculateImpact(amount)}</p>
            </div>

            <button className="btn-primary w-full py-4 text-lg">
              Proceed to Pay <ArrowRight size={20} />
            </button>
            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> Secure Payment Gateway
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;


