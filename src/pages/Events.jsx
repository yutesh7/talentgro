import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const events = [
    {
      date: 'OCT 15',
      title: 'Mega Career Counseling Workshop',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Hall, Sector 4, New Delhi',
      category: 'Workshop',
      image: 'bg-brand-blue/10'
    },
    {
      date: 'NOV 02',
      title: 'Scholarship Form Filling Drive',
      time: '09:00 AM - 1:00 PM',
      location: 'Govt. High School, Rural Pune',
      category: 'Drive',
      image: 'bg-brand-orange/10'
    },
    {
      date: 'NOV 20',
      title: 'Volunteer Onboarding Meetup',
      time: '5:00 PM - 7:00 PM',
      location: 'Virtual (Zoom)',
      category: 'Meetup',
      image: 'bg-green-100'
    }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedEvent(null);
    }, 3000);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-black py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-4">Events & Workshops</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Join our upcoming events and be a part of the change.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <select className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-orange cursor-pointer">
              <option>All Categories</option>
              <option>Workshops</option>
              <option>Drives</option>
              <option>Meetups</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-stone-100 dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden hover:shadow-md transition-shadow group"
            >
              
              {/* Date Box */}
              <div className="md:w-48 bg-brand-light dark:bg-zinc-800/50 flex flex-col justify-center items-center py-6 md:py-0 border-b md:border-b-0 md:border-r border-slate-100 dark:border-zinc-800">
                <span className="text-brand-orange font-bold text-sm tracking-widest">{event.date.split(' ')[0]}</span>
                <span className="text-4xl font-bold text-brand-blue dark:text-white">{event.date.split(' ')[1]}</span>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-full uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4 group-hover:text-brand-orange transition-colors">{event.title}</h3>
                
                <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-brand-orange" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-brand-orange" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Action */}
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-black md:w-64 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 dark:border-zinc-800">
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="btn-primary w-full mb-3"
                >
                  Register Now
                </button>
                <button className="text-brand-blue dark:text-white font-semibold text-sm hover:text-brand-orange transition-colors text-center">
                  View Details
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-stone-100 dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-zinc-800"
            >
              <div className="bg-brand-blue p-6 text-white relative">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <span className="text-brand-orange font-bold uppercase tracking-wider text-xs mb-2 block">Event Registration</span>
                <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                <div className="flex items-center gap-4 text-sm text-blue-100 opacity-90">
                  <span className="flex items-center gap-1"><CalendarIcon size={14}/> {selectedEvent.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {selectedEvent.time}</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <CheckCircle size={64} className="text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-2">Registration Successful!</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Thank you for registering. We have sent the event details and a calendar invite to your email.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                      <input required type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-black text-slate-800 dark:text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                      <input required type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-black text-slate-800 dark:text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-black text-slate-800 dark:text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full btn-primary py-3">
                        Confirm Registration
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Events;


