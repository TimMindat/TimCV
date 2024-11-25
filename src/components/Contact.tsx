import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="max-w-lg mx-auto">
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-6 h-6 text-indigo-500" />
              <a href="mailto:timmind@aiesec.net" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                timmind@aiesec.net
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin className="w-6 h-6 text-indigo-500" />
              <a href="https://www.linkedin.com/in/timmind/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                linkedin.com/in/timmind
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-indigo-500" />
              <a href="https://t.me/TimMind" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                t.me/TimMind
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-600 dark:text-gray-300">
                Cairo, Egypt
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}