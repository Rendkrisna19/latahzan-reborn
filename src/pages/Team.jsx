import React, { useState } from "react";
//Player
import player1 from "../images/Team/1.png"; //gambar player
import player2 from "../images/Team/2.png";
import player3 from "../images/Team/3.png";
import player4 from "../images/Team/4.png";
import player5 from "../images/Team/5.png"; //gambar player
import player6 from "../images/Team/6.png";
import player7 from "../images/Team/7.png";
import player8 from "../images/Team/8.png";
import player9 from "../images/Team/9.png";
import player10 from "../images/Team/10.png"; //gambar player
import player11 from "../images/Team/11.png";
import player12 from "../images/Team/12.png";
import player13 from "../images/Team/13.png";     

import backgroundImage from "../images/bg3.png"; // Import gambar latar belakang

//Hover Player
import player1Hover from "../images/Logo Orange.png"; //Hover Gambarnya
import player2Hover from "../images/Logo Orange.png";
import player3Hover from "../images/Logo Orange.png";
import player4Hover from "../images/Logo Orange.png";
import player5Hover from "../images/Logo Orange.png"; //Hover Gambarnya
import player6Hover from "../images/Logo Orange.png";
import player7Hover from "../images/Logo Orange.png";
import player8Hover from "../images/Logo Orange.png";
import player9Hover from "../images/Logo Orange.png";
import player10Hover from "../images/Logo Orange.png"; //Hover Gambarnya
import player11Hover from "../images/Logo Orange.png";
import player12Hover from "../images/Logo Orange.png";
import player13Hover from "../images/Logo Orange.png";

//Choach Gambar
import choach from "../images/flyer 1.png";
import choach2 from "../images/flyer 1.png";
//Hover Choach
import choachHover  from"../images/flyer 1.png";
import choachHover2 from "../images/flyer 1.png";

// Komponen untuk menampilkan kartu pemain
const PlayerCard = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center bg-white shadow-lg rounded-md md:rounded-lg lg:rounded-x3 w-130 h-130 transform transition-transform duration-300 cursor-pointer overflow-hidden ${
        isHovered ? "scale-105 translate-y-2" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? player.hoverImage : player.image}
        alt="Player"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

// Komponen utama Players dan Coach
const PlayersAndCoach = () => {
  const players = [
    {
      image: player1,
      hoverImage: player1Hover,
    },
    {
      image: player2,
      hoverImage: player2Hover,
    },
    {
      image: player3,
      hoverImage: player3Hover,
    },
    {
      image: player4,
      hoverImage: player4Hover,
    },
    {
      image: player5,
      hoverImage: player5Hover,
    },
    {
      image: player6,
      hoverImage: player6Hover,
    },
    {
      image: player7,
      hoverImage: player7Hover,
    },
    {
      image: player8,
      hoverImage: player8Hover,
    },
    {
      image: player9,
      hoverImage: player9Hover,
    },
    {
      image: player10,
      hoverImage: player10Hover,
    },
    {
      image: player11,
      hoverImage: player11Hover,
    },
    {
      image: player12,
      hoverImage: player12Hover,
    },
    {
      image: player13,
      hoverImage: player13Hover,
    },
  ];

  const coaches = [
    {
      image: choach,
      hoverImage: choachHover,
    },
    {
      image: choach2,
      hoverImage: choachHover2,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen p-8 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div> */}

      

      {/* Coach Section */}
     
      {/* Players Section */}
      <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest">
          PLAYERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center ">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
 
      <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest">
          COACH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center ">
          {coaches.map((coach, index) => (
            <PlayerCard key={index} player={coach} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersAndCoach;
