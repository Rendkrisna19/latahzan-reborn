import React, { useState } from "react";
import Img1 from "../Images2/1.jpeg";
import Img2 from "../Images2/2.jpeg";
import Img3 from "../Images2/3.jpeg";
import Img4 from "../Images2/4.jpeg";
import Img5 from "../Images2/5.jpg";
import Img6 from "../Images2/6.jpg";
import Img7 from "../Images2/7.jpg";
import Img8 from "../Images2/8.jpg";
import Img9 from "../Images2/9.jpg";
import Img10 from "../Images2/10.png";
import Img11 from "../Images2/11.jpeg";
import Img12 from "../Images2/12.jpg";
import Img13 from "../Images2/13.jpeg";
import Img14 from "../Images2/14.jpeg";
import backgroundImage from "../images/bg3.png";

// Array gambar
const imageList = [
  { src: Img1, alt: "Kashi Vishwanath Temple 1" },
  { src: Img2, alt: "Kashi Vishwanath Temple 2" },
  { src: Img3, alt: "Kashi Vishwanath Temple 3" },
  { src: Img4, alt: "Kashi Vishwanath Temple 4" },
  { src: Img5, alt: "Kashi Vishwanath Temple 5" },
  { src: Img6, alt: "Kashi Vishwanath Temple 6" },
  { src: Img7, alt: "Kashi Vishwanath Temple 7" },
  { src: Img8, alt: "Kashi Vishwanath Temple 8" },
  { src: Img9, alt: "Kashi Vishwanath Temple 9" },
  { src: Img10, alt: "Kashi Vishwanath Temple 10" },
  { src: Img11, alt: "Kashi Vishwanath Temple 11" },
  { src: Img12, alt: "12" },
  { src: Img13, alt: "13" },
  { src: Img14, alt: " 14" },
];

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi navigasi ke gambar sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  // Fungsi navigasi ke gambar berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="media-page min-h-screen bg-cover bg-center pt-20 md:pt-24 flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Judul */}
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center py-10">
        Galeri Latahzan
      </h1>

      {/* Kontainer Gambar */}
      <div className="flex flex-col items-center">
        {/* Gambar */}
        <div className="relative aspect-w-19 aspect-h-6 w-3/4 md:w-1/2 lg:w-1/3 border-4 border-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageList[currentIndex].src}
            alt={imageList[currentIndex].alt}
          />
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Images;
