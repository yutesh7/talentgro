import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Who is eligible for the scholarships listed on your website?",
      a: "Eligibility varies depending on the specific scholarship. However, our database covers scholarships from Class 8 up to Postgraduate levels across all income brackets. You can use our Scholarship Finder filters to check your specific eligibility."
    },
    {
      q: "Do you charge any fees for career counseling?",
      a: "No. All our career guidance workshops, 1-on-1 counseling sessions, and resource downloads are 100% free of charge for students."
    },
    {
      q: "How can I become a volunteer?",
      a: "You can sign up through our Volunteer Hub. We accept volunteers from various professional backgrounds including teaching, medicine, tech, and even photography. You can commit as little as 2 hours a month."
    },
    {
      q: "Is my donation tax-deductible?",
      a: "Yes. Disha for India Foundation and Educational Trust is a registered non-profit, and all donations are eligible for tax deduction under section 80G of the Income Tax Act."
    },
    {
      q: "Where do you operate?",
      a: "Our headquarters is in New Delhi, but we conduct offline workshops across 14 states in India. Our online resources are accessible pan-India."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="w-full bg-slate-50 dark:bg-black min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Find quick answers to your questions.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-stone-100 dark:bg-zinc-900 rounded-2xl border ${openIdx === idx ? 'border-brand-orange shadow-md' : 'border-slate-100 dark:border-zinc-800 shadow-sm'} overflow-hidden transition-all`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIdx === idx ? 'text-brand-orange' : 'text-brand-blue dark:text-white'}`}>
                  {faq.q}
                </span>
                {openIdx === idx ? <ChevronUp className="text-brand-orange shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-50 mt-2 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-brand-blue rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-300 mb-6">We're here to help. Reach out to our support team.</p>
          <button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;


