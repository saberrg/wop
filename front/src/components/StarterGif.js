import React from 'react';

function StarterGif() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: '#000', // Optional fallback background
      }}
    >
      {/* Full-Screen GIF with Zoom-Out Effect */}
      <img
        src="https://media.giphy.com/media/ksVugU85LoBk4/giphy.gif"
        alt="Cinematic Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transform: 'scale(1.2)', // Zoom-out effect
          transformOrigin: 'center center', // Keep the zoom centered
        }}
      />

      {/* Overlay for Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold">
          World of Program
        </h1>
      </div>
    </div>
  );
}

export default StarterGif;
