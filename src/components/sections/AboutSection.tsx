import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { Shield, Search, Code, Crosshair } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300"
      {...fadeIn('up', delay)}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(99, 102, 241, 0.3)" }}
    >
      <div className="bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Network Security",
      description: "Building and maintaining secure network infrastructure with advanced protection mechanisms.",
      delay: 0.2
    },
    {
      icon: <Search size={24} />,
      title: "Digital Forensics",
      description: "Uncovering digital evidence and analyzing security incidents to identify causes and culprits.",
      delay: 0.4
    },
    {
      icon: <Code size={24} />,
      title: "Penetration Testing",
      description: "Examining Websites, Systems and networks to look for the security flaws and fix them before attackers could leverage them.",
      delay: 0.6
    },
    {
      icon: <Crosshair size={24} />,
      title: "Threat Hunting",
      description: "Proactively searching for and neutralizing threats that evade traditional security solutions.",
      delay: 0.8
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm a cybersecurity specialist with expertise in protecting digital assets and investigating security breaches."
          centered
        />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div className="md:w-1/2" {...fadeIn('right', 0.2)}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden bg-gray-800">
                <motion.div 
                  className="w-full h-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/30 backdrop-blur-sm rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">My Background</h3>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        With over a year of experience in the cybersecurity field, I've worked with numerous organizations to strengthen their security posture and investigate digital threats.
                      </p>
                      <p className="text-gray-300">
                        My approach combines technical expertise with strategic thinking to deliver comprehensive security solutions that work in the real world.
                      </p>
                      <p className="text-gray-300">
                        I regularly participate in Capture The Flag (CTF) competitions and contribute to open-source projects to stay at the cutting edge of the field.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-30 blur-xl"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;