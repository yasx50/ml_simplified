import React from 'react'
import { motion } from 'framer-motion'
import {
  Play,
  BookOpen,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Brain,
  Code,
  Database,
  Zap,
  Target,
  Award
} from 'lucide-react'

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

// Stats data
const stats = [
    { number: "50K+", label: "Students", icon: <Users className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-5 h-5" /> },
    { number: "200+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { number: "4.9", label: "Rating", icon: <Star className="w-5 h-5" /> }
  ];

const Stats = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative z-10 py-20 px-4 md:px-20 bg-gray-900 text-white"
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-amber-400">{stat.icon}</span>
              <span className="text-3xl font-bold text-white">{stat.number}</span>
            </div>
            <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </motion.section>
  )
}

export default Stats
