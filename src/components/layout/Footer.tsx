import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/junaid-arshad-malik-644b11291/', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/SPECT3R0', label: 'GitHub' },
    { Icon: Twitter, href: 'https://twitter.com/_junaidarshad', label: 'X' },
    { Icon: Mail, href: 'mailto:junaidarshad.info@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#writeups', label: 'Recent Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="relative">
      <footer className="relative z-10 bg-gray-900 rounded-t-3xl shadow-2xl border-t-4 border-primary-700 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Junaid Arshad Malik.
              </h3>
              <p className="text-gray-400 max-w-xs">
                Cybersecurity Specialist & Digital Investigator, turning digital chaos into clarity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map(({ href, label }) => (
                  <li key={label}>
                    <a 
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 group inline-flex items-center"
                    >
                      <span className="relative">
                        {label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Based in: Islamabad, Pakistan</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    className="bg-gray-800 rounded-full p-3 hover:bg-primary-700 transition-colors duration-300 text-white flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    <Icon className="text-primary-400" size={22} />
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="/Resume.pdf"
                className="inline-block mt-4 text-primary-400 hover:text-primary-300 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <span className="relative">
                  Download Resume
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut'
                }}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(255, 0, 0, 0.8))'
                }}
              >
                ❤️
              </motion.span>
              <span>by Junaid © {new Date().getFullYear()}</span>
            </p>

            <motion.button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 group bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-full p-2"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </footer>
      <div className="w-full h-8 bg-primary-900 rounded-t-none"></div>
    </div>
  );
};

export default Footer;