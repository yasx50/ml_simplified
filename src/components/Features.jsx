import React from 'react';
import {
  Brain,
  Code,
  Target
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Intelligent Learning",
    desc: "AI-powered personalized learning paths that adapt to your progress and learning style.",
    gradient: "from-yellow-400 to-orange-500",
    gradientStyle: "linear-gradient(135deg, #fbbf24, #f97316)"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Practical Projects", 
    desc: "Build production-ready ML applications with real-world datasets and industry standards.",
    gradient: "from-orange-400 to-red-500",
    gradientStyle: "linear-gradient(135deg, #fb923c, #ef4444)"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Career Focused",
    desc: "Get job-ready with interview prep, portfolio projects, and industry mentor guidance.",
    gradient: "from-red-400 to-pink-500",
    gradientStyle: "linear-gradient(135deg, #f87171, #ec4899)"
  }
];

const Features = () => {
  return (
    <>
      <section className="relative z-10 px-4 md:px-20 py-24 bg-gray-900 text-white">
        {/* Section Heading */}
        <div 
          className="text-center mb-20 opacity-0"
          style={{animation: 'fadeInUp 0.8s ease-out forwards'}}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)'
              }}
            >
              Our Platform
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Experience machine learning education designed for real-world success
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-gray-800 bg-opacity-40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-0"
              style={{
                backdropFilter: 'blur(8px)',
                background: 'rgba(31, 41, 55, 0.4)',
                animation: `fadeInUp 0.8s ease-out ${i * 0.2}s forwards`
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.2), rgba(17, 24, 39, 0.2))'
                }}
              ></div>

              <div 
                className="w-16 h-16 rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10"
                style={{
                  background: feature.gradientStyle
                }}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-100 transition-colors relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                {feature.desc}
              </p>

              <div 
                className="h-1 rounded-full mt-6 relative z-10 opacity-0"
                style={{
                  background: feature.gradientStyle,
                  animation: `progressBar 1s ease-out ${i * 0.3}s forwards`
                }}
              />
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #fbbf24, #f97316)'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
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

          @keyframes progressBar {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Features;