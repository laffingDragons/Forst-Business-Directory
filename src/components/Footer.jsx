import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-100/30 to-blue-300/30 backdrop-blur-xl py-6 text-blue-300 border-t border-white/30"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold mb-4 md:mb-0 drop-shadow-lg"
        >
          Business Directory
        </motion.div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 drop-shadow-lg">
            Terms
          </a>
          <a href="#" className="hover:text-blue-400 drop-shadow-lg">
            Privacy
          </a>
          <a href="https://www.linkedin.com/in/akkshay-paatil/" className="hover:text-blue-400 drop-shadow-lg">
            Contact
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://type.link/akshaypatil-vit"
            className="drop-shadow-lg"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/akkshay-paatil/"
            className="drop-shadow-lg"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://type.link/akshaypatil-vit"
            className="drop-shadow-lg"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;