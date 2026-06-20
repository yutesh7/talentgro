import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a question, want to partner with us, or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-blue dark:text-white text-lg mb-2">Visit Us</h3>
                <p className="text-slate-600 dark:text-slate-300">47 G, A/4, Savitry Enclave,<br/>VIP Road, Zirakpur, Punjab</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-blue dark:text-white text-lg mb-2">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-300">+91-9888877722<br/>Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-blue dark:text-white text-lg mb-2">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-300">inaggarwal76@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-brand-orange resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button className="btn-primary w-full md:w-auto">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;


