import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'writeups', label: 'Recent Work' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const SectionProgress = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveIndex(i);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveIndex(0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex flex-col items-center fixed right-8 top-1/2 z-50 transform -translate-y-1/2 space-y-3">
      {sections.map((section, idx) => (
        <div key={section.id} className="relative group flex items-center justify-center">
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 flex items-center justify-center focus:outline-none
              ${activeIndex === idx ? 'bg-primary-500 border-primary-500 shadow-lg scale-110' : 'bg-transparent border-gray-600 hover:border-primary-400'}
            `}
            aria-label={`Go to ${section.label}`}
          >
            <span className={`block w-1.5 h-1.5 rounded-full transition-all duration-300
              ${activeIndex === idx ? 'bg-primary-200' : ''}
            `}></span>
          </button>
          {/* Tooltip */}
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none whitespace-nowrap transition-opacity duration-200 shadow-lg">
            {section.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionProgress; 