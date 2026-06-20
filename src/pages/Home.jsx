import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Calendar, Heart, PlayCircle, Quote, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const stats = [
    { label: 'Students Impacted', value: '50,000+', icon: Users },
    { label: 'Scholarships Awarded', value: '1,200+', icon: Award },
    { label: 'Active Volunteers', value: '3,000+', icon: Heart },
    { label: 'States Reached', value: '12', icon: BookOpen },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-light dark:bg-zinc-900/50 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 dark:bg-black/20 rounded-full mix-blend-overlay filter blur-[80px]"></div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white leading-tight mb-6">
                Empowering India's Youth Through <span className="text-brand-orange">Education</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
                Disha for India is committed to guiding students towards brighter futures through scholarships, career guidance, and community volunteering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs" className="btn-primary">
                  Explore Programs <ArrowRight size={20} />
                </Link>
                <Link to="/volunteer" className="btn-outline">
                  Become a Volunteer
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/home-hero.jpg"
                  alt="Indian children learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 to-transparent mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                    <Heart size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Lives Changed</p>
                    <p className="text-2xl font-bold text-brand-blue dark:text-white">50,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex w-16 h-16 bg-brand-light dark:bg-zinc-900/50 rounded-2xl items-center justify-center text-brand-orange mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue dark:text-white mb-2">{stat.value}</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title">Our Key Initiatives</h2>
            <p className="text-slate-600 dark:text-slate-300">Discover how we're making a difference through our targeted educational and empowerment programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="card flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3">Scholarship Finder</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">Connect with financial aid opportunities tailored to your background and educational goals.</p>
              <Link to="/scholarships" className="text-brand-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Find Scholarships <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -5 }} className="card flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue dark:text-white mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3">Career Guidance</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">Expert-led roadmaps and counseling to help students navigate complex career pathways.</p>
              <Link to="/careers-hub" className="text-brand-blue dark:text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore Careers <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -5 }} className="card flex flex-col h-full">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3">Workshops & Events</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">Skill-building sessions, seminars, and networking events designed for holistic growth.</p>
              <Link to="/events" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Calendar <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-light dark:bg-black rounded-3xl p-8 md:p-16 border border-slate-100 dark:border-zinc-800 shadow-sm relative overflow-hidden flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 dark:bg-brand-orange/5 rounded-full mix-blend-multiply blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 dark:bg-brand-blue/5 rounded-full mix-blend-multiply blur-3xl"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-6 block">Student Spotlight</span>
              
              <Quote className="text-brand-orange/30 w-16 h-16 mb-6" />
              
              <p className="text-2xl md:text-3xl text-brand-blue dark:text-white font-bold italic mb-10 leading-snug">
                "Disha for India didn't just give me a scholarship; they gave me the confidence to dream beyond my village. The mentorship I received was life-changing."
              </p>
              
              <div className="flex flex-col items-center gap-3 mb-10 border-t border-slate-200 dark:border-zinc-800 pt-8 w-full max-w-xs">
                <div>
                  <h4 className="font-bold text-brand-blue dark:text-white text-lg">Riya Sharma</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">MBBS Student, Udaan Scholar</p>
                </div>
              </div>
              
              <Link to="/success-stories" className="btn-outline">
                Read More Stories <ArrowRight size={18} className="inline ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-4 block">Media Gallery</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">Our Impact in Action</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Witness the energy, dedication, and smiles that fuel our mission every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Video Gallery */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-6 flex items-center gap-2">
                <PlayCircle className="text-brand-orange" /> Featured Video
              </h3>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 flex-grow group border border-slate-200 dark:border-zinc-800 hover:shadow-brand-orange/20 hover:shadow-2xl transition-all duration-500 min-h-[300px]">
                {!isVideoPlaying && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/20">
                    <button 
                      onClick={() => {
                        setIsVideoPlaying(true);
                        if(videoRef.current) videoRef.current.play();
                      }}
                      className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300"
                    >
                      <Play size={36} className="ml-2" />
                    </button>
                    <span className="text-white font-bold tracking-widest uppercase mt-6 drop-shadow-md">Watch Our Story</span>
                  </div>
                )}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover absolute inset-0" 
                  controls={isVideoPlaying}
                  playsInline
                  onPause={() => setIsVideoPlaying(false)}
                  poster="https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg"
                >
                  <source src="https://dishaforindia.org/wp-content/themes/dishaforindia/assets/images/gallery/MyVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-6 flex items-center gap-2">
                <Users className="text-brand-orange" /> Photo Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow h-[400px] lg:h-auto">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md group">
                  <img src="https://dishaforindia.org/wp-content/uploads/2023/05/1-2.jpg" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md group">
                  <img src="https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md group">
                  <img src="https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg" alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue dark:bg-zinc-900 text-white dark:border-y dark:border-zinc-800 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be the Change You Wish to See</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether through your time as a volunteer or your financial support as a donor, your contribution helps us reach more students across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2 text-lg">
              <Heart size={20} /> Donate Now
            </Link>
            <Link to="/volunteer" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors flex items-center gap-2 text-lg">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



