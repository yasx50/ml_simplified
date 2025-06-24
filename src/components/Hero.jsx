import React from 'react'
import { Sparkles, ArrowRight, Play } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-gray-900 text-white">
      {/* Animated Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
        Master{' '}
        <span 
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316, #ef4444)'
          }}
        >
          Machine Learning
        </span>
        <br />
        <span className="text-4xl md:text-5xl lg:text-6xl text-gray-300">
          With Confidence
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
        From complete beginner to industry-ready ML engineer. Learn through practical projects, 
        real datasets, and expert guidance. No fluff, just results.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mb-16">
        <button 
          className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '0 10px 25px -5px rgba(251, 191, 36, 0.4)'
          }}
        >
          <span className="relative z-10 flex items-center gap-3 justify-center">
            <Play className="w-5 h-5" />
            Start Learning Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundImage: 'linear-gradient(to right, #f97316, #ef4444)'
            }}
          ></div>
        </button>

        <button className="px-8 py-4 border border-gray-600 rounded-xl text-gray-300 font-semibold text-lg hover:bg-gray-800 hover:border-gray-500 hover:scale-105 transition-all duration-300">
          View Demo
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #fbbf24, #f97316)'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #f97316, #ef4444)'
          }}
        ></div>
      </div>
    </section>
  )
}

export default Hero