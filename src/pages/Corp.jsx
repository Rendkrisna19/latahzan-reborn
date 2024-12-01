import React from 'react'

import image1 from '../images/patnerimages/Arka Parfume.png';
import image2 from '../images/patnerimages/FEB UISU.jpg';
import image3 from '../images/patnerimages/Poppin Coffee.png';
import image4 from '../images/patnerimages/Pro Property.png';
import Gambar from '../images/Logo Hijau.png';
import backgroundImage from "../images/bg3.png"; 

const Corp = () => {
  return (
    <div  className="flex flex-col items-center p-4 bg-patner pt-20 md:pt-24 relative bg-cover bg-center min-h-screen p-8"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      
        <h1 className="relative text-7xl font-bold text-white text-center">Corp</h1>
     

      <section className=' py-10'>
  <h1 className='relative text-2xl font-bold text-green-500 text-center mb-5'>Latahzan Corporation</h1>
  <div className='flex justify-center items-center'>
  <a
  href="https://www.instagram.com/latahzan_reborn/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center items-center"
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
        <h1 className='relative text-2xl font-bold text-green-600 text-center mb-5 pt-20 md:pt-24'>Sponsorship</h1>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          <a href="https://www.arka-parfume.com" target="_blank" rel="noopener noreferrer">
            <img
              src={image1}
              alt="Arka Parfume"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href="https://www.instagram.com/febuisu.official/" target="_blank" rel="noopener noreferrer">
            <img
              src={image2}
              alt="FEB UISU"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href=" https://www.instagram.com/poppin_coffee/" target="_blank" rel="noopener noreferrer">
            <img
              src={image3}
              alt="Poppin Coffee"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href="https://www.instagram.com/proproperty88/" target="_blank" rel="noopener noreferrer">
            <img
              src={image4}
              alt="Pro Property"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Corp;
