import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "ML Engineer at Google",
      text: "The practical approach and real-world projects made all the difference in my career transition."
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Scientist at Netflix",
      text: "Clear explanations and hands-on learning. Went from zero to landing my dream job in 6 months."
    },
    {
      name: "Emily Watson",
      role: "AI Researcher at OpenAI",
      text: "The depth of content and quality of instruction is unmatched. Highly recommend!"
    }
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="relative z-10 px-4 md:px-20 py-24 bg-gray-900 text-white">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{animation: 'fadeInUp 0.8s ease-out forwards'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)'
              }}
            >
              Industry Leaders
            </span>
          </h2>
        </div>
             
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 opacity-0"
              style={{
                backdropFilter: 'blur(8px)',
                background: 'rgba(31, 41, 55, 0.4)',
                animation: `fadeInUp 0.8s ease-out ${i * 0.2}s forwards`
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    className="w-4 h-4 text-yellow-400" 
                    style={{fill: '#fbbf24'}}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #fbbf24, #f97316)'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #f97316, #ef4444)'
            }}
          ></div>
        </div>

        {/* CSS Keyframes */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Testimonials