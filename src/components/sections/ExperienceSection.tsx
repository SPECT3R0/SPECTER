import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { Calendar, Building2, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  projects?: Project[];
}

interface Project {
  name: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Cyber Security Analyst",
      company: "Freelancing",
      period: "May 2024 - Present",
      description: [
        "As a freelance Cyber Security Analyst, I provide end-to-end security solutions including vulnerability assessments, penetration testing, malware analysis, network defense, and incident response.",
        "I specialize in securing web applications, cloud infrastructures, and enterprise networks, ensuring confidentiality, integrity, and availability.",
        "My work also involves creating custom security tools, conducting forensic investigations, and implementing proactive defense strategies aligned with best industry practices and compliance standards."
      ]
    },
    {
      title: "Cyber Security Analyst",
      company: "NexGen Guards",
      period: "September 2024 - December 2024",
      description: [
        "Conducted in-depth penetration testing on diverse systems, successfully identifying and mitigating critical security vulnerabilities to strengthen overall cybersecurity posture.",
        "Designed and deployed five custom Capture The Flag (CTF) challenges and vulnerable machines for hands-on attack-defense exercises, leading to a 20% increase in student engagement with cybersecurity training.",
        "Collaborated with cross-functional teams in high-pressure environments, consistently delivering actionable security insights within tight deadlines."
      ]
    },
    {
      title: "Jr Penetration Tester Intern",
      company: "EncryptEdge Labs",
      period: "September 2024 - November 2024",
      description: [
        "Performed thorough penetration testing on five web applications and seven systems, uncovering critical security vulnerabilities and gaps in cybersecurity defenses.",
        "Independently simulated sophisticated cyberattacks, resulting in the development of robust defensive strategies that significantly enhanced overall security posture.",
        "Utilized advanced tools including Burp Suite, Nessus, OWASP ZAP, and Metasploit to conduct assessments and deliver detailed, actionable reports.",
        "Successfully completed several hands-on labs, including the main course capstone and five advanced main labs, showcasing technical proficiency and producing comprehensive documentation to demonstrate analytical and reporting skills."
      ]
    },
    {
      title: "Web Security Researcher",
      company: "National Center of Cyber-Security",
      period: "June 2024 - September 2024",
      projects: [
    {
          name: "Social Engineering Ad Detector",
          description: "Developed a custom web crawler to gather a large dataset of online advertisements used in social engineering attacks. The collected data was utilized to train a machine learning model capable of detecting over 90% of social engineering ads with high precision. The solution enhances online safety by identifying deceptive content in real time."
    },
    {
          name: "Outdated Component Detector",
          description: "Contributed to the development of an advanced tool for analyzing web pages to identify outdated or vulnerable components (e.g., libraries, frameworks). This tool aids in improving website security posture by proactively flagging deprecated or insecure technologies in use."
    }
    ]
    }

  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background-dark to-gray-900/20 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey in cybersecurity"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeIn('up', index * 0.2)}
              className="mb-12 relative"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
              )}
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary-900/30 border-2 border-primary-500 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Building2 className="w-8 h-8 text-primary-400" />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.description?.map((desc, i) => (
                        <p key={i} className="text-gray-300">{desc}</p>
                      ))}
                      
                      {exp.projects && (
                        <div className="mt-6 space-y-4">
                          <h4 className="text-lg font-semibold text-primary-400">Key Projects</h4>
                          {exp.projects.map((project, i) => (
                            <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                              <h5 className="text-white font-medium mb-2 flex items-center">
                                <ExternalLink size={16} className="mr-2" />
                                {project.name}
                              </h5>
                              <p className="text-gray-300">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;