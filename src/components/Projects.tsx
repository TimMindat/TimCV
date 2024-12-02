import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hotel Booking App',
      description: 'A modern hotel booking platform with an intuitive interface and seamless booking experience.',
      image: 'https://i.imgur.com/2J4Mzlr.png',
      link: 'https://www.behance.net/gallery/206298841/ChaletSpot'
    },
    {
      title: 'Technology Company Site',
      description: 'Corporate website design showcasing services and innovations in the tech industry.',
      image: 'https://i.imgur.com/Pr2LNwO.png',
      link: 'https://www.behance.net/gallery/206299485/InnovateXSolutions-Prototype-Website'
    },
    {
      title: 'Family Pie Restaurant',
      description: 'A modern restaurant website for a Saudi Arabian establishment, featuring an elegant design and seamless ordering experience.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      link: 'https://family-pie-restaurant.vercel.app'
    },
    {
      title: 'EcoSense',
      description: 'Environmental monitoring platform with real-time data visualization and analytics.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop',
      link: 'https://eco-sense-site.vercel.app/'
    },
    {
      title: 'EcoSense Data',
      description: 'Advanced data analytics dashboard for environmental metrics and sustainability tracking.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
      link: 'https://eco-sense-data-site.vercel.app/'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}