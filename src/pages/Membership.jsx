import React from "react";
import BackgroundImage from "../images/b2.jpg";
import PlayerImage from "../images/Team/Team.png";

const Membership = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-cover bg-center pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-950 opacity-80"></div>

      {/* Gambar Player */}
      <div className="relative w-full lg:w-3/4 flex justify-center lg:justify-end">
        <img
          src={PlayerImage}
          alt="Player"
          className="w-[900px] h-auto max-w-lg lg:w-[700px] object-contain z-10"
          style={{
            filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.7))",
          }}
        />
      </div>

      {/* Form Section */}
      <div className="relative w-full lg:w-1/2 p-8 lg:p-16 text-white z-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          JOIN <span className="text-green-400">LatahZan</span>
        </h1>
        <p className="mb-6">
           Elevate your LFFL status by becoming a Latahzan Insider! Keep your finger on the pulse of all things Latahzan, News, Training, Game info and more.
        </p>

        {/* Form */}
        <form className="space-y-4 bg-">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
            <input
              type="text"
              placeholder="Birthday (mm/dd/yyyy)"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="ZIP / Postal Code"
              className="w-full p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 rounded bg-white text-black"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent" className="text-sm">
              By clicking SUBMIT, I verify I have read and agree to the Privacy
              Policy and Terms of Use.
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-green-600 hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership;
