import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BehanceIcon } from './Icons';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIhoeo7CfYi3S4zQrqC5RTH55q7PhVlTgBv3cUlNbqu3oQD6zjUFw=s360-c-no"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
        />
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Tim Mind
      </motion.h1>
      
      <motion.h2 
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        UI/UX Designer & Creative Developer
      </motion.h2>
      
      <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/TimMindat"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.behance.net/timmind"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <BehanceIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/timmind/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="mailto:timmind@aiesec.net"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}