import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

interface Writeup {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  url: string;
}

interface WriteupCardProps {
  writeup: Writeup;
  index: number;
}

const WriteupCard = ({ writeup, index }: WriteupCardProps) => {
  return (
    <motion.div 
      {...fadeIn('up', index * 0.1 + 0.2)}
      className="group"
      whileHover={{ y: -5 }}
    >
      <a 
        href={writeup.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 h-full"
      >
        <div className="h-48 overflow-hidden relative">
          <motion.img 
            src={writeup.image}
            alt={writeup.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{writeup.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{writeup.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
            {writeup.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-2">{writeup.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {writeup.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
            Read More
            <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all duration-300" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const WriteupsSection = () => {
  const [activeTag, setActiveTag] = useState<string>('All');
  
  const writeups: Writeup[] = [
    {
      id: 1,
      title: "Analyzing Memory Dump for Uncovering TTPs of Attackers.",
      description: "A detailed breakdown of the 2020 SolarWinds attack methodology, impact, and lessons learned for cybersecurity professionals.",
      date: "Jun 15, 2023",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Forensic","Memory Dump","Malware","Keylogger", "Incident Analysis"], 
      url: "#"
    },
    {
      id: 2,
      title: "Boot2Root",
      description: "A practical guide to discovering zero-day vulnerabilities in web applications using fuzzing and static analysis techniques.",
      date: "Apr 28, 2023",
      readTime: "18 min read",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Vulnerability Research", "Web Security", "Fuzzing","Vulnerable Machine","WebApp Hacking"],
      url: "#"
    },
    {
      id: 3,
      title: "Forensic Toolkit",
      description: "A step-by-step walkthrough of making of a forensic toolkit that can be used by dynamic teams to get effective and reliable results for forensic analysis",
      date: "Mar 12, 2023",
      readTime: "20 min read",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Forensics", "Autopsy", "FTK Imager","PhotoRec","ToolKit"],
      url: "#"
    },
    {
      id: 4,
      title: "Forensic Tools Standard Operation Process",
      description: "A step by step walkthrough for several Forensic tools workings and usage for an dynamic team to adapt them for best results",
      date: "Feb 5, 2023",
      readTime: "15 min read",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Forensics","Windows Registry Analysis","Extension Analysis","Internet Artifacts Analysis","Hash Analysis","File Recovery"],
      url: "#"
    },
    {
      id: 5,
      title: "IOT Vulnerability Analysis Thesis",
      description: "Helped a client in completing its Thesis by performing IOT firmware vulnerability analysis and writing a complete thorough thesis",
      date: "Jan 18, 2023",
      readTime: "60 min read",
      image: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Firmware Analysis", "IOT Security", "Camera Hacking","Vulnerabillity Analysis","Thesis"],
      url: "#"
    },
    {
      id: 6,
      title: "AI/ML Model Training",
      description: "Asisted a client in training multple types of AI/ML models to detect successful fluctuations in heart ecg signals and identify different patterns alongside for advanced analysis.",
      date: "Dec 3, 2022",
      readTime: "16 min read",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI/ML", "Jupyter Notebook", "Regression Models","Random Forest","LSTM"],
      url: "#"
    }
  ];
  
  const allTags = ['All', ...Array.from(new Set(writeups.flatMap(writeup => writeup.tags)))];
  
  const filteredWriteups = activeTag === 'All' 
    ? writeups 
    : writeups.filter(writeup => writeup.tags.includes(activeTag));
  
  return (
    <section id="writeups" className="py-20 bg-gradient-to-b from-gray-900/20 to-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Recent Work" 
          subtitle="Dive into my technical analysis, CTF walkthroughs, and cybersecurity insights. All thoughts and ideas in one place."
          centered
        />
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWriteups.map((writeup, index) => (
              <WriteupCard 
                key={writeup.id} 
                writeup={writeup} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="text-center mt-12">
          <AnimatedButton href="" target="_blank" rel="noopener noreferrer">
            View All
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;