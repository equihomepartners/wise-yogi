'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { transitions } from '../utils/theme';

const Hero = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitions.pageTransition}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <motion.div
          variants={transitions.stagger.container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1
            variants={transitions.stagger.item}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-primary-900 mb-8 leading-tight"
          >
            Honoring the Hands
            <br />
            <span className="text-primary-700">That Feed Us</span>
          </motion.h1>

          <motion.p
            variants={transitions.stagger.item}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
          >
            Join us in celebrating mindful living, sustainable farming, and the sacred connection between nourishment and gratitude.
          </motion.p>

          <motion.div
            variants={transitions.stagger.item}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/join"
              className="inline-block bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors duration-300 text-lg"
            >
              Join the Movement
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-300 text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-32 bg-gradient-to-t from-white to-transparent origin-bottom"
        ></motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 right-[15%] w-20 h-20 bg-primary-100 rounded-full opacity-20"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 left-[15%] w-16 h-16 bg-earth-200 rounded-full opacity-20"
      />
    </motion.div>
  );
};

export default Hero; 