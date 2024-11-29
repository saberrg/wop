import React from 'react';

const HeroText = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        <span
          className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Subtle shadow
          }}
        >
          World of Program
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
