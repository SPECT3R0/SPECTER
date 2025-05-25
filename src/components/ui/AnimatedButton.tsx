import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
  download?: boolean;
  target?: string;
  rel?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  primary = false,
  download = false,
  target,
  rel,
}) => {
  const baseClass = `relative inline-flex items-center justify-center font-medium rounded-lg overflow-hidden transition-all duration-300 ${
    primary 
      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2.5 px-6' 
      : 'bg-gray-800/60 backdrop-blur-sm text-gray-200 border border-gray-700 py-2 px-5'
  } ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span 
        className={`absolute inset-0 ${
          primary 
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
            : 'bg-gray-700/70'
        }`}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.05, boxShadow: primary ? "0 0 15px rgba(99, 102, 241, 0.5)" : "0 0 10px rgba(255, 255, 255, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        download={download}
        target={target}
        rel={rel}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.05, boxShadow: primary ? "0 0 15px rgba(99, 102, 241, 0.5)" : "0 0 10px rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;