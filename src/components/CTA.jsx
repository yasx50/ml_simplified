import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="relative z-10 px-4 md:px-20 py-24 text-center bg-gray-900 text-white">
        <div 
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500"
          style={{
            backdropFilter: 'blur(20px)',
            background: 'rgba(31, 41, 55, 0.3)'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)'
              }}
            >
              Career?
            </span>
          </h2>
                     
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of successful ML engineers who started their journey with us. 
            Your future in AI starts today.
          </p>
           
          <button 
            className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)',
              boxShadow: '0 10px 30px -5px rgba(251, 191, 36, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 20px 40px -10px rgba(251, 191, 36, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 10px 30px -5px rgba(251, 191, 36, 0.4)';
            }}
          >
            <span className="flex items-center gap-3 justify-center">
              <Zap className="w-6 h-6" />
              Start Your Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #fbbf24, #f97316)'
            }}
          ></div>
        </div>
      </section>
    </>
  )
}

export default CTA