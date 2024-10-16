import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import owner from '../../Images/owners.webp';

export default function OwnerHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Check if the component is in view

  return (
    <section className="bg-gray-100 py-16 flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start max-w-6xl p-8 rounded-lg shadow-lg bg-gray-100">
        
        {/* Image Animation */}
        <motion.div
          ref={ref}
          className="relative md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0"
          initial={{ opacity: 0, y: 20 }} // Initial state for the image
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate on scroll into view
          transition={{ duration: 0.6 }} // Transition settings
        >
          <div className="absolute inset-0 bg-white -left-3 -top-4 h-full w-full z-0 rounded"></div>
          <img
            src={owner}
            alt="Founders"
            className="relative z-10 rounded-md object-cover h-96 w-80 left-3 top-3"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          className="md:w-2/3 w-full md:pl-8 text-center md:text-left left-2"
          initial={{ opacity: 0, y: 20 }} // Initial state for the text
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate on scroll into view
          transition={{ duration: 0.6, delay: 0.3 }} // Stagger text appearance with a delay
        >
          <h3 className="text-2xl font-medium uppercase text-gray-600 mb-4">
            What do our{" "}
            <span className="italic font-light text-gray-800 text-3xl">creators</span> say?
          </h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            "Our journey with Advanced Classic White began from a deep passion
            for skincare and a desire to create products that truly cater to Sri
            Lankan beauty, for all genders and all ages. We believe in celebrating
            the unique beauty of our people and are committed to crafting formulas
            that deliver visible results, offering gentle care for both young and
            old."
          </p>
          <p className="text-sm font-medium text-gray-600">
            — Manjula Jayathunga & Nandana Wickremasinghe
            <br />
            Founders of Advanced Classic White
          </p>
        </motion.div>
      </div>
    </section>
  );
}
