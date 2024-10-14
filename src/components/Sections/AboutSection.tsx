import React from 'react'

export default function AboutSection() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-gray-700 relative">
        {/* Left Quote Mark */}
        <div className="absolute left-0 top-0 -mt-8 text-6xl text-gray-300">“</div>

        {/* Main Text */}
        <div className="text-center text-2xl  font-semibold leading-relaxed">
          Welcome to a world where all skin types find a home with Advanced Classic White. 
          We focus on making every type of skin look radiant, celebrating your natural beauty 
          while giving you that goddess or god-like glow.
        </div>

        <div className="text-center text-xl mt-4 ">
          Our products are designed to nourish, enhance, and bring out the best in every complexion, 
          because beauty is for everyone.
        </div>

        {/* Right Quote Mark */}
        <div className="absolute right-0 bottom-0 -mb-8 text-6xl text-gray-300">”</div>
      </div>
    </div>
  )
}
