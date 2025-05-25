import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/animation';
import { ArrowDown } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const HeroSection = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const titles = ['Penetration Tester', 'Digital Investigator.', 'Ethical Hacker.','Malware Analyst','CTF Enthusiast.'];

  useEffect(() => {
    if (!typingRef.current) return;

    let index = 0;
    let text = '';
    let isDeleting = false;
    let speed = 100;

    const type = () => {
      const fullText = titles[index];

      text = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      if (typingRef.current) typingRef.current.textContent = text;

      if (!isDeleting && text === fullText) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        index = (index + 1) % titles.length;
        speed = 500;
      } else {
        speed = isDeleting ? 50 : 100;
      }

      setTimeout(type, speed);
    };

    const initialTimeout = setTimeout(type, 1000);
    return () => clearTimeout(initialTimeout); // cleanup
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-dark opacity-95"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-background-dark to-secondary-900/30 animate-gradient-xy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute left-1/3 top-1/3 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute right-1/3 bottom-1/3 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 mt-16">
        <div className="flex flex-col items-center justify-center text-center space-y-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent"
            {...textVariant(0.1)}
          >
            Cybersecurity Specialist &<br/>
            <span 
              className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
              ref={typingRef}
            />
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-2xl"
            {...textVariant(0.3)}
          >
            Turning digital chaos into clarity
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            {...fadeIn('up', 0.5)}
          >
            <AnimatedButton href="#contact" primary>
              Hire Me
            </AnimatedButton>
            <AnimatedButton href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
              Download Resume
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-gray-400 hover:text-white flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
