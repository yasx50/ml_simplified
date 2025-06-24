import React from 'react'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      {/* Navigation with Background */}
      <section className="relative z-10 bg-gray-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #fbbf24, #f97316)'
            }}
          ></div>
          <div 
            className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #f97316, #ef4444)'
            }}
          ></div>
        </div>

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex justify-between items-center px-6 lg:px-12 py-6 backdrop-blur-xl bg-gray-800/40 border-b border-gray-700/50"
          style={{
            backdropFilter: 'blur(8px)',
            background: 'rgba(31, 41, 55, 0.4)'
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f97316)'
              }}
            >
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">ML Simplified</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Courses', 'Projects', 'Community', 'Resources'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-sm font-medium"
              >
                {item}
                <span 
                  className="absolute -bottom-1 left-0 h-0.5 w-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right, #fbbf24, #f97316)'
                  }}
                ></span>
              </motion.a>
            ))}
          </div>

          {/* Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 text-sm"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              boxShadow: 'rgba(251, 191, 36, 0.25) 0px 4px 16px'
            }}
          >
            Get Started
          </motion.button>
        </motion.nav>
      </section>
    </>
  )
}

export default Navbar