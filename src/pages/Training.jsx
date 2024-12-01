import React from 'react';
import lokasi1 from "../images/Game/Gor ABM II Kiwi.jpg";
import lokasi2 from "../images/Game/Gor Samudra.jpg";
import backgroundImage from "../images/bg3.png"; 

const Training = () => {
  return (
    <div
      className="flex flex-col items-center p-4 bg-patner pt-20 md:pt-24 relative bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Header */}
      <header className="w-full mb-8">
        <h1 className="text-5xl font-bold text-center md:text-center md:text-6xl text-white">
          Training
        </h1>
      </header>

      {/* Grid Images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Gambar 1 */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.google.com/maps/place/ABM+Arena+2/@3.5825724,98.6343951,17z/data=!3m1!4b1!4m6!3m5!1s0x30312f1154f98b63:0x2ff560e5701df1a7!8m2!3d3.582567!4d98.63697!16s%2Fg%2F11kqbykl8m?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lokasi1}
              alt="Gambar 1"
              className="w-64 aspect-square border-4 border-gray-300 object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
            />
          </a>
          {/* Jadwal dengan background dan border-radius */}
          <div className="mt-2 p-4 bg-black text-white text-lg font-semibold rounded-lg shadow-md">
          RABU GOR ABM || KIWI  20.00-22.00
          </div>
        </div>

        {/* Gambar 2 */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.google.com/maps/place/Gor+Samudra/@3.5990466,98.7075512,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNa9bj1WaIu0NGIyMe2Z6qEhBOFs-vzpACwsoIU!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNa9bj1WaIu0NGIyMe2Z6qEhBOFs-vzpACwsoIU%3Dw152-h86-k-no!7i4080!8i2296!4m7!3m6!1s0x3031310b15672383:0x5f7bba30799bc827!8m2!3d3.5990466!4d98.7075512!10e5!16s%2Fg%2F11cnnxzkgy?hl=id&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lokasi2}
              alt="Gambar 2"
              className="w-64 aspect-square border-4 border-gray-300 object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
            />
          </a>
          {/* Jadwal dengan background dan border-radius */}
          <div className="mt-2 p-4 bg-black text-white text-lg font-semibold rounded-lg shadow-md">
         MINGGU GOR SAMUDERA 10.00-12.00
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full max-w-4xl">
        <iframe
          className="w-full aspect-video border-4 border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63711.658582188145!2d98.63211793873579!3d3.5923677888019503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031310b15672383%3A0x5f7bba30799bc827!2sGor%20Samudra!5e0!3m2!1sid!2sid!4v1731830650795!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Training;
