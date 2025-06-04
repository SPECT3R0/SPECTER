import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { X, ExternalLink, Github } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  detailedDescription: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div 
      {...fadeIn('up', index * 0.1 + 0.2)}
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-background-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        {...slideIn('up', 'spring', 0, 0.5)}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="h-64 sm:h-80 overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-6">{project.detailedDescription}</p>
          
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <AnimatedButton 
                href={project.demoLink} 
                primary
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </AnimatedButton>
            )}
            
            {project.codeLink && (
              <AnimatedButton
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" />
                View Code
              </AnimatedButton>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Social-Engineering Ad Detector",
      description: "A DOM-based AI-powered detector that captures and analyzes dynamic ad injections and potential social engineering attacks on websites.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Machine Learning", "DOM Analysis", "Web Crawling", "Network Security", "JSON Logging", "Automation"]
//      demoLink: "https://secureanalyzer.example.com",
//      codeLink: "https://github.com/junaid/secure-analyzer",
,
      detailedDescription: "This project inspects websites in real time by parsing HTML, CSS, JS, and monitoring DOM changes triggered by user interaction. Any change, including suspicious ads injected via scripts or dynamic DOM manipulation, is logged in JSON format. The system captures screenshots of altered states for validation. Collected data is then used to train an AI/ML model to automatically identify malicious, deceptive, or socially engineered ads. Designed for researchers and defenders tracking down hard-to-catch, runtime-based threats."
    },
    {
      id: 2,
      title: "Outdated Components Identifier",
      description: "A Wappalyzer-style tool that detects outdated web technologies and shows applicable attack vectors based on known CVEs.",
      image: "https://images.pexels.com/photos/5380592/pexels-photo-5380592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Technology Fingerprinting", "Recon", "CVE Analysis", "Web Security", "Automation"]
//      demoLink: "https://malwarex.example.com",
 //     codeLink: "https://github.com/junaid/malwarex",
 ,
      detailedDescription: "This tool crawls websites and identifies the backend and frontend technologies being used — from CMS to JS libraries. It cross-references these components with vulnerability databases to flag outdated or vulnerable versions. Once identified, it maps potential exploit paths, giving pentesters and bug bounty hunters a clear picture of security flaws before deeper engagement. Ideal for recon, red teaming, and automation-assisted vulnerability assessment."
    },
    {
      id: 3,
      title: "URL Master",
      description: "An automated Chromium-based crawler that executes prewritten queries, scrapes relevant URLs, and exports them for lead generation or analysis.",
      image: "/images/projects/8426454_3918929.jpg",
      tags: ["Python", "Automation", "Web Crawling", "Chromium", "Lead Generation", "Client Hunting", "URL Scraping"]
//      codeLink: "https://github.com/junaid/cryptoguard",
,
      detailedDescription: "URL Master is a powerful automation tool that opens Chromium, runs predefined Google or Bing queries, and scrapes all resulting URLs. It stores them neatly in an Excel sheet, making it ideal for sales teams, security researchers, and client-hunting freelancers. Designed for speed and efficiency, it bypasses manual search steps and builds targeted link lists in seconds — perfect for expanding outreach campaigns or scoping bug bounty targets."
    },
    {
      id: 4,
      title: "Red Team Home Lab Setup",
      description: "An isolated lab environment tailored for simulating real-world attacks, including phishing, payload delivery, and internal recon.",
      image: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Kali Linux", "Metasploit", "Offensive Security", "Payload Testing", "Virtual Lab", "Adversary Simulation"]
//      demoLink: "https://phishdetect.example.com",
,
      detailedDescription: "The Red Team Lab is a full-fledged virtual attack playground built with Kali Linux, Metasploitable, and internal phishing simulation tools. It supports crafting payloads, performing network pivoting, and testing exploits in a safe, isolated setting. You used this lab to replicate real-world adversary behaviors, analyze defense gaps, and test evasion strategies — all without risking external systems. Perfect for OSCP-style preparation or red team validation."
    },
    {
      id: 5,
      title: "Simple Firewall",
      description: "A lightweight custom firewall that blocks specified websites and filters network access with minimal configuration.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Network Security", "Firewall", "DNS Filtering", "Access Control", "iptables", "Web Filtering"]
//      codeLink: "https://github.com/junaid/forensic-miner",
,
      detailedDescription: "Designed for simplicity, this firewall lets users block unwanted domains or IP addresses with a single command. Built using iptables and Python scripting, it offers a lightweight defense layer against tracking sites, known phishing hosts, or productivity-killing platforms. Ideal for personal, educational, or small network environments, it focuses on user-defined rules and DNS-level filtering with a clean interface."
    },
    {
      id: 6,
      title: "Blue Team Home Lab Setup",
      description: "A defensive security lab configured to detect, monitor, and log malicious activity, replicating real-world blue team operations.",
      image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Network Monitoring", "Log Analysis", "Suricata", "ELK Stack", "Threat Detection", "Defensive Security", "SOC Simulation"]
 //     demoLink: "https://threatintel.example.com",
 ,
      detailedDescription: "This lab mimics a mini-SOC setup where you configured network monitoring tools (e.g., Suricata, ELK stack) to detect attacks, log system behaviors, and trigger alerts. You deployed honeypots, conducted behavioral analysis of suspicious binaries, and performed real-time logging of intrusions. The Blue Team Lab acts as both a teaching platform and practical simulation of enterprise-grade incident detection, response, and logging workflows."


    },
{
    id: 7,
    title: "Spell Checker",
    description: "A C++ GUI-based spell checker that uses DSA and Levenshtein algorithm to suggest accurate corrections.",
    image: "/images/projects/Vintage Typewriter on Wooden Desk.jpeg",
    tags: ["C++", "GUI", "Levenshtein Algorithm", "Data Structures", "Spelling Correction", "CLI Based"]
//     demoLink: "https://threatintel.example.com",
,
    detailedDescription: "A powerful spell checker built in C++ featuring a graphical user interface. It leverages core Data Structures and Algorithms to efficiently parse text, detect spelling errors, and suggest corrections using the Levenshtein Distance algorithm. Backed by a full English vocabulary dataset, it ensures high accuracy and usability for educational and writing tools."

  },
{
  id: 8,
  title: "Secure Random Password Generator",
  description: "An Assembly-based tool that generates secure, unique passwords every time it is executed.",
  image: "/images/projects/computer-security-with-login-password-padlock.jpg",
  tags: ["Assembly", "Cybersecurity", "Random Generator", "Password Management", "Low-level Programming"]
//     demoLink: "https://threatintel.example.com",
,
  detailedDescription: "A lightweight, low-level password generator written in Assembly that ensures highly secure and unique password outputs. Ideal for systems requiring randomness and performance efficiency, this tool emphasizes cryptographic strength while keeping system overhead minimal"

  },
{
  id: 9,
  title: "Hotel Network Design",
  description: "A complete hotel network topology designed and simulated using Cisco Packet Tracer.",
  image: "/images/projects/21164.jpg",
  tags: ["Networking", "Cisco Packet Tracer", "VLAN", "DHCP", "Routing", "Firewall", "Topology Design"]
//     demoLink: "https://threatintel.example.com",
  ,
  detailedDescription: "Designed a fully functional and secure network infrastructure for a hotel environment using Cisco Packet Tracer. The setup includes VLANs, routing, DHCP, firewall configurations, and access control policies. The architecture ensures guest-user segregation, staff access reliability, and network scalability, meeting real-world hospitality standards."
}

  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="Explore my latest work in cybersecurity and digital investigation"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;