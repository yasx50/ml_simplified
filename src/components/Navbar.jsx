import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { MailCheckIcon, User, IndentIncrease, Bot } from 'lucide-react'

const Navbar = () => {
  return (
    <section className="relative z-10 bg-gray-900">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex justify-between items-center h-16 px-6 lg:px-12 backdrop-blur-xl bg-gray-800/40 border-b border-gray-700/50"
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
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-white">ML Simplified</span>
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 py-2.5 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 text-sm"
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #f97316)',
            boxShadow: 'rgba(251, 191, 36, 0.25) 0px 4px 16px'
          }}
        >
          <Link to="/accounts">
          <User className="w-5 h-5 text-white" /></Link>
        </motion.button>
      </motion.nav>
    </section>
  )
}

export default Navbar
