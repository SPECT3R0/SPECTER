import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle, AlertCircle, X as XIcon } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import emailjs from 'emailjs-com';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });
    try {
      await emailjs.send(
        'portfolio-spect3r', // service ID
        'template_txcbt8q',  // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Junaid',
        },
        'DZ7JtMuMBvNCiQ3t3' // public key
      );
      setFormStatus({
        type: 'success',
        message: "Your message has been sent successfully! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log('EmailJS error:', error);
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    }
    setIsSubmitting(false);
  };
  
  const socialLinks = [
    { Icon: Mail, href: 'mailto:junaidarshad.info@gmail.com?subject=Hello%20Junaid', label: 'Email' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/junaid-arshad-malik-644b11291/', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/SPECT3R0', label: 'GitHub' },
    { Icon: XIcon, href: 'https://twitter.com/_junaidarshad', label: 'X' },
  ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background-dark to-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background animation elements */}
        <motion.div 
          className="absolute left-10 top-40 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute right-20 bottom-20 w-64 h-64 bg-secondary-800/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's discuss how I can help with your cybersecurity needs"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col justify-between"
            {...fadeIn('right', 0.2)}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-4">
                <span className="block text-lg font-bold text-primary-400 mb-2">Let's Connect!</span>
                I'm passionate about cybersecurity, digital forensics, and helping organizations stay secure. Whether you have a project, want advice, or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4 mb-8">
                {/* Social links removed as requested */}
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn('left', 0.4)}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 lg:p-8">
              <form onSubmit={handleSubmit}>
                {formStatus.type && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-start ${
                      formStatus.type === 'success' 
                        ? 'bg-green-900/30 border border-green-700' 
                        : 'bg-red-900/30 border border-red-700'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    ) : (
                      <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    )}
                    <span>{formStatus.message}</span>
                  </motion.div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="I'd like to discuss a cybersecurity project..."
                    />
                  </div>
                  
                  <motion.div 
                    className="pt-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatedButton 
                      primary 
                      className="w-full flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                      ) : (
                        <span className="flex flex-row items-center gap-2">
                          <Send size={18} className="inline-block align-middle" />
                          <span className="inline-block align-middle">Send Message</span>
                        </span>
                      )}
                    </AnimatedButton>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;