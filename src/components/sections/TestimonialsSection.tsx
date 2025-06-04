import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Junaid Arshad Malik made a strong impression during his 4-month internship at NCCS. He contributed to key modules including scraping, optimization, multithreading, and server configuration—all focused on web security and automated pentesting. Junaid's technical expertise, collaborative nature, and clear communication made him a valuable asset to our team. I highly recommend him for any future projects.",
      name: "Sameer Khattak",
      role: "Team Lead",
      company: "NCCS",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "The incident response services provided by Junaid were exceptional. When we detected a potential breach, his quick action and forensic capabilities helped us contain the threat and prevent data loss. The detailed post-incident report was invaluable for improving our security posture.",
      name: "Michael Chen",
      role: "CISO",
      company: "Global Retail Corp",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "Working with Junaid on our security compliance initiative was a game-changer. His deep knowledge of regulatory requirements and practical implementation strategies helped us achieve ISO 27001 certification months ahead of schedule.",
      name: "Aisha Patel",
      role: "Security Director",
      company: "HealthTech Innovations",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      content: "Junaid delivered an outstanding security awareness training program for our organization. His engaging presentation style and real-world examples resonated with employees at all technical levels, resulting in measurable improvements in our security culture.",
      name: "David Rodriguez",
      role: "IT Manager",
      company: "EducationFirst",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSpecific = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goToNext, 2000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What clients and colleagues say about my work"
          centered
        />
        
        <div className="relative max-w-3xl mx-auto perspective-1000">
          <div className="overflow-hidden">
            <div className="relative w-full h-full min-h-[320px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                  animate={index === currentIndex ? 
                    { opacity: 1, rotateY: 0, scale: 1 } : 
                    { opacity: 0, rotateY: -90, scale: 0.8 }
                  }
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`absolute top-0 left-0 w-full px-4 ${index === currentIndex ? 'z-10' : 'z-0 pointer-events-none'}`}
                  style={{
                    display: index === currentIndex ? 'block' : 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <motion.div 
                    className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Quote className="absolute top-4 left-4 text-primary-500/20 h-24 w-24 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" />
                    <div className="text-center relative z-10">
                      <p className="text-gray-300 mb-6 italic relative z-10 text-lg leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex flex-col items-center">
                        <div>
                          <h4 className="font-semibold text-white text-xl">{testimonial.name}</h4>
                          <p className="text-primary-400 text-sm">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button 
                key={index}
                onClick={() => goToSpecific(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 w-8' 
                    : 'bg-gray-700 hover:bg-gray-600 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;