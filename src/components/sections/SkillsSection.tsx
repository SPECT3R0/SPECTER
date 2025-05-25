import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div 
      {...fadeIn('up', delay)}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(99, 102, 241, 0.3)" }}
    >
      <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "#4338ca",
              color: "#ffffff" 
            }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Red Team",
      skills: ["Penetration Testing", "API Pentesting", "Social Engineering", "Red Team Operations", "Physical Security"],
      delay: 0.2
    },
    {
      title: "Blue Team",
      skills: ["Threat Detection", "Incident Response", "Log Analysis", "Threat Hunting", "Malware Analysis"],
      delay: 0.4
    },
    {
      title: "Tools & Platforms",
      skills: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Splunk", "Ghidra","Netlify","GitHub","Vercel","Volatility3","CTFd"],
      delay: 0.6
    },
    {
      title: "GRC",
      skills: ["ISO 27001", "NIST", "Risk Assessment", "Compliance", "Policy Development"],
      delay: 0.8
    },
    {
      title: "Programming",
      skills: ["Python", "Bash", "PowerShell", "C/C++", "JavaScript",],
      delay: 1.0
    },
    {
      title: "Soft Skills",
      skills: ["Technical Writing", "Report Creation", "Team-Work", "MS-Office", "Attention to Detail",],
      delay: 1.2
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background-dark to-gray-900/20">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionHeading 
          title="Skills & Stack" 
          subtitle="My technical expertise and tools of the trade"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;