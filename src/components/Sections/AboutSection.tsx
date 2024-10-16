import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-gray-700 relative">
        {/* Left Quote Mark */}
        <div className="absolute left-0 top-0 -mt-8 text-6xl text-gray-300">“</div>

        {/* Main Text with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate on scroll into view
          transition={{ duration: 0.5 }} // Animation duration
          className="text-center text-2xl font-semibold leading-relaxed"
        >
          Welcome to a world where all skin types find a home with Advanced Classic White. 
          We focus on making every type of skin look radiant, celebrating your natural beauty 
          while giving you that goddess or god-like glow.
        </motion.div>

        {/* Subtitle with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate on scroll into view
          transition={{ duration: 0.5, delay: 0.3 }} // Add a delay for the subtitle
          className="text-center text-xl mt-4"
        >
          Our products are designed to nourish, enhance, and bring out the best in every complexion, 
          because beauty is for everyone.
        </motion.div>

        {/* Right Quote Mark */}
        <div className="absolute right-0 bottom-0 -mb-8 text-6xl text-gray-300">”</div>
      </div>
    </div>
  );
}
