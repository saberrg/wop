import React from 'react';
import HeroText from './HeroText';

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
          width: '120%', // Scale width to zoom out
          height: '120%', // Scale height to zoom out
          objectFit: 'cover', // Ensure it covers the screen proportionally
          objectPosition: 'center', // Keep the content centered
        }}
      />

      <HeroText />
    </div>
  );
}

export default StarterGif;
