import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Stats from './Stats'
import Testinomials from './Testinomials'
import Footer from './Footer'
import CTA from './CTA'


import { useState,useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion';

import React from 'react'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Stats/>
    <Testinomials/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default Home
