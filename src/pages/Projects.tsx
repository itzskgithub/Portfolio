import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TIC TAC TOE',
      description:
        'A classic Tic Tac Toe game built with React, featuring a responsive UI, two-player mode, and game state management for an interactive gameplay experience.',
      image: '/TIC_TAC_TOE.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/itzskgithub/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-iota-liart.vercel.app/',
    },
    {
      id: 2,
      title: 'ROCK PAPER SCISSORS',
      description:
        'A simple interactive Stone-Paper-Scissors game built with React, featuring player vs computer mode, instant results, and responsive UI.',
      image: '/stone_paper_seissor.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/itzskgithub/Stone_Paper_Seissor',
      demo: 'https://stone-paper-seissor.vercel.app/',
    },
    {
      id: 3,
      title: 'Job Search Portal',
      description:
        'A full-stack job search platform that enables users to browse job listings, apply in real-time, and track application status with secure authentication.',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: [
        'React.js',
        'Tailwind CSS',
        'shadcn/ui',
        'Framer Motion',
        'React Router',
        'Axios',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
      ],
      category: 'fullstack',
      github: 'https://github.com/itzskgithub/jobportal',
      demo: 'https://jobportal1-nine.vercel.app/',
    },
    {
      id: 4,
      title: 'AI Wardrobe',
      description:
        'An AI-powered wardrobe recommendation system that suggests outfits based on user preferences, using machine learning APIs for intelligent fashion insights.',
      image:
        'https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'OpenAI API',
        'AWS',
      ],
      category: 'fullstack',
      github: 'https://github.com/itzskgithub/Ai-wardrove',
      demo: '#',
    },
    {
      id: 5,
      title: 'Next Auth',
      description:
        'A secure full-stack authentication system built with Next.js and MongoDB. It features user registration, login, JWT-based authentication, password hashing with bcrypt, email verification, and password recovery through Nodemailer.',
      image: 'https://www.shutterstock.com/search/authentication',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Axios',
        'MongoDB',
        'Mongoose',
        'Node.js',
        'JWT Authentication',
        'bcryptjs',
        'Nodemailer',
      ],
      category: 'fullstack',
      github: 'https://github.com/itzskgithub/Auth_Next',
      demo: 'https://auth-next-sepia.vercel.app',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for
              creating innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full transition ${
                filter === category.id
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Filter className="inline w-4 h-4 mr-2" />
              {category.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-black"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-700 hover:text-blue-900"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;