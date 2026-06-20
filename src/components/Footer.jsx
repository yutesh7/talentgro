import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue dark:bg-black text-white pt-16 pb-8 dark:border-t dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 inline-block">
              <img 
                src="https://dishaforindia.org/wp-content/themes/dishaforindia/assets/images/logo-light.png" 
                alt="Disha for India Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mt-2">
              Empowering India's youth through education, career guidance, and social initiatives. Everyone has the power to create an impact.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-brand-orange transition-colors">Our Programs</Link></li>
              <li><Link to="/scholarships" className="hover:text-brand-orange transition-colors">Scholarship Finder</Link></li>
              <li><Link to="/careers-hub" className="hover:text-brand-orange transition-colors">Career Guidance</Link></li>
              <li><Link to="/success-stories" className="hover:text-brand-orange transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/volunteer" className="hover:text-brand-orange transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/events" className="hover:text-brand-orange transition-colors">Events & Workshops</Link></li>
              <li><Link to="/donate" className="hover:text-brand-orange transition-colors">Make a Donation</Link></li>
              <li><Link to="/careers" className="hover:text-brand-orange transition-colors">Careers at Disha</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-1" />
                <span className="text-sm">47 G, A/4, Savitry Enclave, VIP Road, Zirakpur, Punjab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <span className="text-sm">+91-9888877722</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-orange shrink-0" />
                <span className="text-sm">inaggarwal76@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto max-w-md">
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-orange w-full"
              />
              <button className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right flex items-center gap-1">
            &copy; {new Date().getFullYear()} Disha for India. Made with <Heart size={14} className="text-brand-orange inline mx-1" /> for a better tomorrow.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

