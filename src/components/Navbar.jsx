import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Search, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { 
      name: 'Blogs', 
      path: '#',
      subLinks: [
        { name: 'Photo Gallery', path: '/photo-gallery' },
        { name: 'Video Gallery', path: '/video-gallery' }
      ]
    },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  return (
    <nav className="bg-stone-100/90 dark:bg-black/90 backdrop-blur-md fixed w-full z-50 top-0 shadow-sm border-b border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={isDarkMode ? "https://dishaforindia.org/wp-content/themes/dishaforindia/assets/images/logo-light.png" : "https://dishaforindia.org/wp-content/themes/dishaforindia/assets/images/logo-dark.png"} 
              alt="Disha for India Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                link.subLinks ? (
                  <div key={link.name} className="relative group flex items-center h-full py-6">
                    <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors text-sm uppercase tracking-wider font-medium focus:outline-none">
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-0 w-48 bg-stone-100 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                      <div className="py-2">
                        {link.subLinks.map(subLink => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="block px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'text-brand-orange font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange'
                    } flex items-center transition-colors text-sm uppercase tracking-wider font-medium`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l pl-6 border-slate-200 dark:border-zinc-800">
              <button 
                onClick={toggleTheme}
                className="text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors focus:outline-none">
                <Search size={20} />
              </button>
              <Link to="/donate" className="btn-primary py-2 px-5 text-sm">
                <Heart size={16} />
                Donate Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="text-slate-500 dark:text-slate-400 hover:text-brand-orange focus:outline-none"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-brand-orange focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-100 dark:bg-black border-t border-slate-100 dark:border-zinc-800 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="py-2">
                  <div className="px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    {link.name}
                  </div>
                  <div className="mt-1 space-y-1 pl-4 border-l-2 border-brand-orange/20 ml-3">
                    {link.subLinks.map(subLink => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-brand-light dark:hover:bg-slate-800 rounded-md transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-brand-light dark:hover:bg-slate-800 rounded-md uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-zinc-800">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-orange text-white px-4 py-3 rounded-md font-semibold"
              >
                <Heart size={18} />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

