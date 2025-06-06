import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/animation';
import { Menu, X } from 'lucide-react';

type NavItemProps = {
  href: string;
  title: string;
  onClick?: () => void;
};

const NavItem = ({ href, title, onClick }: NavItemProps) => {
  return (
    <motion.li
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        onClick={onClick}
        className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors duration-300 py-2 px-4 block"
      >
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
      </a>
    </motion.li>
  );
};

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '#about', title: 'About' },
    { href: '#experience', title: 'Experience' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#Recent Work', title: 'Recent Work' },
    { href: '#testimonials', title: 'Testimonials' },
    { href: '#contact', title: 'Contact' }
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#hero" className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              SPECT3R.
            </a>
          </motion.div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                href={item.href} 
                title={item.title} 
                onClick={() => scrollToSection(item.href.slice(1))}
              />
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 backdrop-blur-lg bg-gray-900/90">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                href={item.href} 
                title={item.title} 
                onClick={() => scrollToSection(item.href.slice(1))}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
