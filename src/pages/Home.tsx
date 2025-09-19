import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent">
                  Shubham kumar pandey
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Full-Stack Developer & UI/UX Enthusiast crafting beautiful, functional digital experiences
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="/CV.pdf"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
              >
                <Download className="mr-2 w-5 h-5" />
                Resume
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
              <a
                href="https://github.com/itzskgithub"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <ExternalLink className="w-6 h-6 text-gray-700" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I create modern, responsive web applications with clean code and beautiful design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'React, TypeScript, Tailwind CSS, and modern JavaScript frameworks',
                color: '#340aefff'
              },
              {
                title: 'Backend Development',
                description: 'Node.js, Python, databases, and RESTful API design',
                color: '#f8a50aff'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design, prototyping, and responsive layouts',
                color: '#38d926ff'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className={`text-xl font-semibold mb-4 text-${service.color}-800`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;