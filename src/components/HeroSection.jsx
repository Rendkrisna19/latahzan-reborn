import React, { useState, useEffect } from 'react';

import slide1Image from '../images/bg3.png';
import slide2Image from '../images/bg3.png';
import slide3Image from '../images/bg3.png';
import slide4Image from '../images/bg3.png';
import slide5Image from '../images/bg3.png';
import posterImage1 from '../images/flyer 1.png';
import posterImage2 from '../images/1.png';
import posterImage3 from '../images/2.png';
import posterImage4 from '../images/3.png';
import posterImage5 from '../images/4.png';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: slide1Image,
      poster: posterImage1,
      title: 'Welcome to Our Journey',
      subtitle: 'Let’s make memories together!',
    },
    {
      image: slide2Image,
      poster: posterImage2,
      title: 'Experience the Adventure',
      subtitle: 'Explore the wonders of the world.',
    },
    {
      image: slide3Image,
      poster: posterImage3,
      title: 'Join Our Community',
      subtitle: 'Be part of something greater.',
    },
    {
      image: slide4Image,
      poster: posterImage4,
      title: 'Discover New Horizons',
      subtitle: 'Expand your possibilities.',
    },
    {
      image: slide5Image,
      poster: posterImage5,
      title: 'Your Story Starts Here',
      subtitle: 'Let us guide your next chapter.',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col items-center justify-center transition-all duration-500 pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${slides[activeIndex].image})`,
        
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-950 bg-opacity-50"></div>

      {/* Konten & Gambar Poster */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Konten */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">{slides[activeIndex].title}</h1>
          <p className="text-lg md:text-xl mt-4">{slides[activeIndex].subtitle}</p>
        </div>

        {/* Gambar Poster */}
        <div className=" poster-image md:w-68 md:h-68 flex-shrink-0">
          <img
            src={slides[activeIndex].poster}
            alt={`Poster ${activeIndex + 1}`}
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Tombol Nomor */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition duration-300 ${
              activeIndex === index
                ? ' text-white shadow-md'
                : ' text-white hover:text-green-400'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
