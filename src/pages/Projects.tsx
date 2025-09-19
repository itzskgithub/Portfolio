import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TIC TAC TOE',
      description: 'A classic Tic Tac Toe game built with React, featuring a responsive UI, two-player mode, and game state management for an interactive gameplay experience.',
      image: '/TIC_TAC_TOE.png',
      technologies: ['HTML','CSS','JS'],
      category: 'frontend',
      github: 'https://github.com/itzskgithub/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-iota-liart.vercel.app/'
    },
    {
      id: 2,
      title: 'ROCK_PAPER_SEISSOR',
      description: 'A simple interactive Stone-Paper-Scissors game built with React, featuring player vs computer mode, instant results, and responsive UI.',
      image: '/stone_paper_seissor.jpg',
      technologies: ['HTML','CSS','JS'],
      category: 'frontend',
      github: 'https://github.com/itzskgithub/Stone_Paper_Seissor',
      demo: 'https://stone-paper-seissor.vercel.app/'
    },
    
    /*{
      id: 4,
      title: 'REST API Backend',
      description: 'A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'JWT', 'Docker'],
      category: 'backend',
      github: '#',
      demo: '#'
    },
    /*{
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work with smooth animations, optimized performance, and modern design principles.',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },*/
    /*{
      id: 6,
      title: 'Blog CMS',
      description: 'A headless CMS for managing blog content with a modern admin interface, content scheduling, and SEO optimization.',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      category: 'fullstack',
      github: '#',
      demo: '#'
    }*/
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for creating 
              innovative digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-blue-800 hover:text-blue-900 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              Let's Talk
              <ExternalLink className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;