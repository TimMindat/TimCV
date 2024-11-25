import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'UX Design',
      description: 'Crafting seamless user experiences through research and testing.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      description: 'Bringing designs to life with clean, efficient code.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            I'm a passionate UI/UX designer with 5+ years of experience creating beautiful and functional digital experiences. 
            I combine creativity with technical expertise to build products that users love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="mb-4 text-indigo-500">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}