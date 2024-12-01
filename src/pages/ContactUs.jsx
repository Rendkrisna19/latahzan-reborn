import React from 'react';
import BackgroundImage from '../images/b2.jpg';
import backgroundImage from "../images/bg3.png"; 


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-patner pt-20 md:pt-24 relative bg-cover bg-center min-h-screen p-8"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
      {/* Header Section */}
  
        <h1 className="relative text-4xl font-bold text-white ">Contact <span className='text-green-500'>Us</span></h1>
    
      {/* Contact Info Section */}
      <section className="w-full  mx-auto py-12 px-6  ">
     
        <h2 className="text-center text-2xl font-semibold mb-6 text-green-500">Get in touch</h2>
        

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 md:pt-24">
          {/* Location Card */}
          <a
  href="https://www.google.com/maps/place/Poppin+Coffee/@3.5849619,98.6552062,17z/data=!3m1!4b1!4m6!3m5!1s0x30312f94d36bfe03:0xa8a466eda0b2f58c!8m2!3d3.5849619!4d98.6577811!16s%2Fg%2F11q4bhgtwd?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white p-6 shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300 block"
>
  <div className="text-3xl mb-4 text-center">📍</div>
  <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Location</h3>
  <p className="font-contactUs text-center">
    Jl. Gajah Mada No. 54a, Babura Kecamatan Medan Baru, Sumatera Utara 20153
  </p>
</a>


          {/* Email Card */}
          <div className="bg-white text-center p-6  shadow-lg hover:bg-green-900 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Email Us</h3>
            <p className="font-contactUs text center">rebornlatahzan
              @gmail.com </p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white p-6  shadow-lg hover:bg-green-200 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4 text-center">📞</div>
            <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Call Us</h3>
            <p className="font-contactUs text-center">Phone: +6281263339222</p>
          </div>

          {/* Send Ticket Card */}
          <div className="bg-white p-6  shadow-lg hover:bg-green-400 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4 text-center">🎫</div>
            <h3 className="text-xl font-bold mb-2 text-center">Send Ticket</h3>
            <p className="font-contactUs text-center">@latahzan_reborn</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ContactUs;
