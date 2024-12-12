import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../images/patnerimages/Arka Parfume.png';
import image2 from '../images/patnerimages/FEB UISU.jpg';
import image3 from '../images/patnerimages/Poppin Coffee.png';
import image4 from '../images/patnerimages/Pro Property.png';
import Gambar from '../images/Logo Hijau.png';
import backgroundImage from "../images/bg3.png";

const Corp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center p-4 bg-patner pt-20 md:pt-24 relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1
        className="relative text-7xl font-bold text-white text-center text-shadow-heading"
        data-aos="fade-down"
      >
        Corp
      </h1>

      <section className="py-10" data-aos="fade-up">
        <h1 className="relative text-2xl font-bold text-green-500 text-center mb-5 text-shadow-heading">
          Latahzan Corporation
        </h1>
        <div className="flex justify-center items-center">
          <a
            href="https://www.instagram.com/latahzan_reborn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
            data-aos="zoom-in"
          >
            <img
              className="max-w-[150px] md:max-w-[400px] grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
              src={Gambar}
              alt="Latahzan Logo"
            />
          </a>
        </div>
      </section>

      <section className="py-10 pt-20 md:pt-24">
        <h1
          className="relative text-2xl font-bold text-green-600 text-center mb-5 pt-20 md:pt-24 text-shadow-heading"
          data-aos="fade-up"
        >
          Sponsorship
        </h1>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {[image1, image2, image3, image4].map((image, index) => (
            <a
              href="#"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="flip-up"
            >
              <img
                src={image}
                alt={`Sponsor ${index + 1}`}
                className="h-16 w-auto md:h-20 grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Corp;
