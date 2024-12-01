import React, { useState } from "react";
import backgroundImage from "../images/bg3.png";
import Video1 from "../VdeoBg/bg.mp4";
import Video2 from "../VdeoBg/bg1.mp4";
import Video3 from "../VdeoBg/bg2.mp4";

// Daftar video yang diimpor
const videoList = [Video1, Video2, Video3];

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Referensi ke elemen video
  const videoRef = React.useRef(null);

  // Fungsi untuk navigasi ke video sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoList.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk navigasi ke video berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efek untuk memutar video setelah load selesai
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Muat ulang video baru

      // Tunggu hingga video siap, lalu play
      const handleLoaded = () => {
        videoRef.current.play();
      };

     
    }
  }, [currentIndex]);

  return (
    <div
      className="media-page min-h-screen bg-cover bg-center pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Judul */}
      <h1 className="text-5xl md:text-7xl font-bold text-white text-center py-10">
      VIDEOS LATAHZAN
      </h1>

      {/* Kontainer Video */}
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        {/* Card Video */}
        <div className="video-card bg-white shadow-lg overflow-hidden w-3/4 md:w-1/2 relative">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {/* Aspect ratio 16:9 */}
            <video
              ref={videoRef} // Referensi elemen video
              className="absolute top-0 left-0 w-full h-full"
              src={videoList[currentIndex]}
              controls
              autoPlay
              title={`Video ${currentIndex + 1}`}
            ></video>
          </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between items-center mt-6 space-x-4">
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

export default Videos;
