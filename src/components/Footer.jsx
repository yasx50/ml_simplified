import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 border-t border-gray-700/50 py-12 px-4 md:px-20">
      <div className="text-center">
        <motion.div 
          className="text-gray-400 pt-8 border-t border-gray-700/50 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-2">© 2025 ML Simplified. Empowering the future of AI education.</p>
          <p className="text-sm">
            Built with ❤️ for the{' '}
            <span 
              className="text-transparent bg-clip-text font-semibold"
              style={{ backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)' }}
            >
              Machine Learning
            </span>{' '}
            community
          </p>
          <div 
            className="w-24 h-1 rounded-full mx-auto mt-4 opacity-60"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)' }}
          />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
